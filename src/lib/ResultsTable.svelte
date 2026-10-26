<script lang="ts">
	import { matchesSearch, type RaceResult } from '$lib/results';

	let { results }: { results: RaceResult[] } = $props();
	let selectedTrack = $state('61 km');
	let selectedCategory = $state('');
	let search = $state('');

	const tracks = $derived([...new Set(results.map((result) => result.track))]);
	const trackResults = $derived(results.filter((result) => result.track === selectedTrack));
	const categories = $derived([...new Set(trackResults.map((result) => result.category))]);
	const categoryResults = $derived(
		trackResults.filter((result) => !selectedCategory || result.category === selectedCategory)
	);
	const visibleResults = $derived(
		categoryResults.filter((result) => matchesSearch(result, search))
	);

	function selectTrack(track: string) {
		selectedTrack = track;
		selectedCategory = '';
	}

	function position(value: string) {
		return /^\d+$/.test(value) ? `${value}.` : value || '—';
	}
</script>

<div class="results-browser">
	<aside class="filters" aria-label="Filtry výsledků">
		<fieldset>
			<legend>Trať</legend>
			<div class="filter-buttons">
				{#each tracks as track (track)}
					<button
						type="button"
						aria-pressed={selectedTrack === track}
						onclick={() => selectTrack(track)}
					>
						{track} <span>({results.filter((result) => result.track === track).length})</span>
					</button>
				{/each}
			</div>
		</fieldset>
		<fieldset>
			<legend>Kategorie</legend>
			<div class="filter-buttons">
				<button
					type="button"
					aria-pressed={!selectedCategory}
					onclick={() => (selectedCategory = '')}
				>
					Vše <span>({trackResults.length})</span>
				</button>
				{#each categories as category (category)}
					<button
						type="button"
						aria-pressed={selectedCategory === category}
						onclick={() => (selectedCategory = category)}
					>
						{category}
						<span>({trackResults.filter((result) => result.category === category).length})</span>
					</button>
				{/each}
			</div>
		</fieldset>
		<div class="search-field">
			<label for="result-search">Hledat</label>
			<input
				id="result-search"
				type="search"
				bind:value={search}
				placeholder="Jméno nebo startovní číslo"
				aria-describedby="search-hint"
			/>
			<p id="search-hint">Hledat můžete i bez diakritiky nebo podle klubu.</p>
			{#if search}
				<button class="clear-search" type="button" onclick={() => (search = '')}
					>Vymazat hledání</button
				>
			{/if}
		</div>
	</aside>

	<div class="results-content">
		<div class="table-heading">
			<h3>{selectedTrack}{selectedCategory ? ` · ${selectedCategory}` : ''}</h3>
			<p role="status">Zobrazeno {visibleResults.length} z {categoryResults.length} výsledků</p>
		</div>
		{#if selectedTrack.endsWith('prémie')}
			<p class="table-note">U prémií jsou kategorie rozdělené podle délky trati.</p>
		{/if}
		<!-- Keyboard users need to scroll the table horizontally. -->
		<!-- svelte-ignore a11y_no_noninteractive_tabindex -->
		<div
			class="table-scroll"
			role="region"
			aria-label="Výsledková tabulka, lze posouvat vodorovně"
			tabindex="0"
		>
			<table>
				<caption class="sr-only"
					>Slapy Trail Maniacs 2026 — {selectedTrack}{selectedCategory
						? `, ${selectedCategory}`
						: ''}</caption
				>
				<thead>
					<tr>
						<th scope="col">Poř.</th>
						<th scope="col">St. č.</th>
						<th scope="col">Jméno / klub</th>
						<th scope="col">Kategorie</th>
						<th scope="col">Poř. v kat.</th>
						<th scope="col">Čas</th>
						<th scope="col">Ztráta</th>
					</tr>
				</thead>
				<tbody>
					{#each visibleResults as result (result)}
						<tr>
							<td class="result-position">{position(result.position)}</td>
							<td class="number">{result.bib && result.bib !== '-' ? result.bib : '—'}</td>
							<td class="runner"
								><strong>{result.name}</strong>{#if result.club && result.club !== '-'}<span
										>{result.club}</span
									>{/if}</td
							>
							<td>{result.category}</td>
							<td class="number">{position(result.categoryPosition)}</td>
							<td class="number result-time">{result.time || '—'}</td>
							<td class="number">{result.gap || '—'}</td>
						</tr>
					{:else}
						<tr
							><td colspan="7" class="empty-results"
								>Žádné výsledky neodpovídají hledání. Zkuste jiné jméno, číslo nebo kategorii.</td
							></tr
						>
					{/each}
				</tbody>
			</table>
		</div>
		<p class="table-note">
			Pořadí odpovídá výsledkové listině. DNF = nedokončil/a, DISK = diskvalifikace.
		</p>
	</div>
</div>

<style>
	.results-browser {
		display: grid;
		grid-template-columns: 270px minmax(0, 1fr);
		align-items: start;
		gap: 28px;
	}
	.filters {
		position: sticky;
		top: 100px;
		padding: 22px;
		border: 1px solid var(--line-paper);
		border-radius: 16px;
		background: var(--paper);
	}
	fieldset {
		border: 0;
		min-width: 0;
		margin-bottom: 24px;
	}
	legend,
	label {
		display: block;
		font-weight: 800;
		font-size: 15px;
		margin-bottom: 10px;
	}
	.filter-buttons {
		display: flex;
		flex-wrap: wrap;
		gap: 7px;
	}
	.filter-buttons button {
		flex: 1 1 auto;
		min-height: 42px;
		padding: 9px 10px;
		border: 1px solid var(--ink);
		border-radius: 5px;
		background: var(--paper);
		color: var(--ink);
		font: inherit;
		font-size: 13px;
		line-height: 1.3;
		cursor: pointer;
	}
	.filter-buttons button:hover {
		background: var(--accent-dim);
	}
	.filter-buttons button[aria-pressed='true'] {
		background: var(--ink);
		color: var(--paper);
	}
	.filter-buttons span {
		white-space: nowrap;
	}
	input {
		width: 100%;
		min-width: 0;
		padding: 12px 10px;
		border: 1px solid var(--line-paper);
		border-radius: 5px;
		color: var(--ink);
		background: var(--paper);
		font: inherit;
		font-size: 13px;
	}
	button:focus-visible,
	input:focus-visible,
	.table-scroll:focus-visible {
		outline: 3px solid var(--ink);
		outline-offset: 3px;
	}
	.search-field p,
	.table-note {
		color: var(--grey);
		font-size: 12px;
		line-height: 1.6;
		margin-top: 10px;
	}
	.clear-search {
		padding: 8px 0;
		border: 0;
		background: none;
		color: var(--ink);
		font: inherit;
		font-size: 13px;
		text-decoration: underline;
		cursor: pointer;
	}
	.results-content {
		min-width: 0;
	}
	.table-heading {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		align-items: baseline;
		gap: 8px;
		margin-bottom: 14px;
	}
	.table-heading h3 {
		font-size: 23px;
	}
	.table-heading p {
		color: var(--grey);
		font-size: 13px;
	}
	.table-scroll {
		overflow-x: auto;
		border: 1px solid var(--line-paper);
		border-radius: 12px;
		margin-top: 14px;
	}
	table {
		border-collapse: collapse;
		width: 100%;
		min-width: 760px;
		text-align: left;
		font-size: 13px;
	}
	th {
		background: var(--ink);
		color: var(--paper);
		font-size: 11px;
		text-transform: uppercase;
		letter-spacing: 0.03em;
		white-space: nowrap;
	}
	th,
	td {
		padding: 14px 12px;
		border-bottom: 1px solid var(--line-paper);
	}
	tbody tr:last-child td {
		border-bottom: 0;
	}
	tbody tr:nth-child(even) {
		background: #f4f8fa;
	}
	tbody tr:hover {
		background: var(--accent-dim);
	}
	.runner {
		min-width: 180px;
	}
	.runner strong {
		display: block;
		font-size: 14px;
	}
	.runner span {
		display: block;
		color: var(--grey);
		font-size: 12px;
		margin-top: 3px;
		overflow-wrap: anywhere;
	}
	.number,
	.result-position {
		font-family: 'IBM Plex Mono', monospace;
		white-space: nowrap;
	}
	.result-position,
	.result-time {
		font-weight: 600;
	}
	.empty-results {
		white-space: normal;
		text-align: center;
		padding: 36px 24px;
	}
	.sr-only {
		position: absolute;
		width: 1px;
		height: 1px;
		padding: 0;
		margin: -1px;
		overflow: hidden;
		clip-path: inset(50%);
		white-space: nowrap;
		border: 0;
	}
	@media (max-width: 920px) {
		.results-browser {
			grid-template-columns: minmax(0, 1fr);
		}
		.filters {
			position: static;
		}
	}
</style>
