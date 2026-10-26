export interface RaceResult {
	track: string;
	position: string;
	name: string;
	category: string;
	categoryPosition: string;
	club: string;
	bib: string;
	time: string;
	gap: string;
}

// Handle quoted fields, escaped quotes and line breaks inside CSV values.
function parseCsv(csv: string): string[][] {
	const rows: string[][] = [];
	let row: string[] = [];
	let value = '';
	let quoted = false;
	const source = csv.replace(/^\uFEFF/, '').replace(/\r\n?/g, '\n');

	for (let i = 0; i < source.length; i++) {
		const character = source[i];
		if (character === '"') {
			if (quoted && source[i + 1] === '"') {
				value += '"';
				i++;
			} else {
				quoted = !quoted;
			}
		} else if (!quoted && (character === ';' || character === '\n')) {
			row.push(value);
			value = '';
			if (character === '\n') {
				if (row.some((field) => field !== '')) rows.push(row);
				row = [];
			}
		} else {
			value += character;
		}
	}
	if (quoted) throw new Error('Unclosed quoted field in results CSV');
	row.push(value);
	if (row.some((field) => field !== '')) rows.push(row);
	return rows;
}

export function parseResults(csv: string): RaceResult[] {
	const [headers, ...rows] = parseCsv(csv);
	const fields = ['TRAŤ', 'POŘ.', 'JMÉNO', 'KAT.', 'POŘ. K.', 'KLUB', 'ST. Č.', 'ČAS', 'ZTRÁTA'];
	if (!headers || fields.some((field) => !headers.includes(field))) {
		throw new Error('Missing required columns in results CSV');
	}
	const results = rows.map((row): RaceResult => {
		const get = (column: string) => row[headers.indexOf(column)]?.trim() ?? '';
		return {
			track: get('TRAŤ'),
			position: get('POŘ.'),
			name: get('JMÉNO'),
			category: get('KAT.'),
			categoryPosition: get('POŘ. K.'),
			club: get('KLUB'),
			bib: get('ST. Č.'),
			time: get('ČAS'),
			gap: get('ZTRÁTA')
		};
	});

	// Bonus rows have no bibs. Only enrich an exact, unique name match from a main race.
	const byName = new Map<string, RaceResult[]>();
	for (const result of results) {
		if (result.category !== 'Muži' && result.category !== 'Ženy') continue;
		byName.set(result.name, [...(byName.get(result.name) ?? []), result]);
	}
	return results.map((result) => {
		if (result.bib && result.bib !== '-') return result;
		const matches = byName.get(result.name);
		return matches?.length === 1 ? { ...result, bib: matches[0].bib } : result;
	});
}

export function normalizeSearch(value: string): string {
	return value
		.normalize('NFD')
		.replace(/[\u0300-\u036f]/g, '')
		.toLowerCase()
		.trim();
}

export function matchesSearch(result: RaceResult, query: string): boolean {
	const haystack = normalizeSearch(`${result.name} ${result.bib} ${result.club}`);
	return normalizeSearch(query)
		.split(/\s+/)
		.every((term) => haystack.includes(term));
}
