import csv from '../../../static/vysledky/2026/slapy-trailmaniacs-2026.csv?raw';
import { parseResults } from '$lib/results';

const results = parseResults(csv).filter((result) => result.position !== 'DNS');

export function load() {
	return { results };
}
