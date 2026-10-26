import { describe, expect, it } from 'vitest';
import { matchesSearch, parseResults } from './results';

const header = 'TRAŤ;POŘ.;JMÉNO;KAT.;POŘ. K.;KLUB;ST. Č.;ČAS;ZTRÁTA';

describe('results CSV', () => {
	it('reads Czech text, BOM, quoted delimiters, escaped quotes and multiline clubs', () => {
		const [result] = parseResults(
			`\uFEFF${header}\r\n61 km;1;Štěpán Skripnik;Muži;1;"Klub; ""A""\r\nPraha";35;6:05:25;+0:16:40\r\n`
		);
		expect(result).toMatchObject({
			name: 'Štěpán Skripnik',
			club: 'Klub; "A"\nPraha',
			bib: '35',
			time: '6:05:25',
			gap: '+0:16:40'
		});
	});

	it('keeps non-finisher statuses, missing times and original category ranks', () => {
		const results = parseResults(
			`${header}\n61 km;DNF;Běžec;Muži;-;;12;;\n61 km;DNS;Běžkyně;Ženy;-;;13;;`
		);
		expect(
			results.map(({ position, time, categoryPosition }) => [position, time, categoryPosition])
		).toEqual([
			['DNF', '', '-'],
			['DNS', '', '-']
		]);
	});

	it('fills bonus bibs by a unique exact main-race name without changing categories', () => {
		const results = parseResults(
			`${header}\n61 km;1;Adam Korecký;Muži;1;;96;5:48:45;\nVrchařská prémie;1;Adam Korecký;61 km;1;;-;0:06:36;`
		);
		expect(results[1]).toMatchObject({ bib: '96', category: '61 km', time: '0:06:36' });
	});

	it('does not guess bibs for ambiguous or unmatched names', () => {
		const results = parseResults(
			`${header}\n61 km;1;Jan Novák;Muži;1;;1;5:00:00;\n47 km;1;Jan Novák;Muži;1;;2;4:00:00;\nVrchařská prémie;1;Jan Novák;61 km;1;;-;0:06:36;\nVrchařská prémie;2;Jiný Běžec;47 km;1;;-;0:07:00;`
		);
		expect(results.slice(2).map((result) => result.bib)).toEqual(['-', '-']);
	});

	it('rejects malformed input instead of silently displaying wrong columns', () => {
		expect(() => parseResults('name;time\nAdam;5:48:45')).toThrow('Missing required columns');
		expect(() => parseResults(`${header}\n"unfinished`)).toThrow('Unclosed quoted field');
	});
});

describe('result search', () => {
	const [result] = parseResults(`${header}\n61 km;3;Štěpán Skripnik;Muži;3;klacky.cz;35;6:05:25;`);
	it('matches names without accents, case or extra whitespace', () => {
		expect(matchesSearch(result, '  STEPAN  skripnik ')).toBe(true);
		expect(matchesSearch(result, 'skripnik Štěpán')).toBe(true);
	});
	it('matches bibs and clubs and combines query terms', () => {
		expect(matchesSearch(result, '35')).toBe(true);
		expect(matchesSearch(result, 'stepan 35')).toBe(true);
		expect(matchesSearch(result, 'KLACKY')).toBe(true);
		expect(matchesSearch(result, 'stepan 99')).toBe(false);
		expect(matchesSearch(result, '   ')).toBe(true);
	});
});
