<script lang="ts">
	import ResultsTable from '$lib/ResultsTable.svelte';
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();
</script>

<svelte:head>
	<title>Výsledky — Slapy Trail Maniacs 2026</title>
	<meta
		name="description"
		content="Výsledky Slapy Trail Maniacs 2026: vyhledávání podle jména a startovního čísla, filtry tratí a kategorií, PDF a CSV ke stažení."
	/>
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link
		href="https://fonts.googleapis.com/css2?family=Archivo+Black&family=Inter:wght@400;500;600;700;800;900&family=IBM+Plex+Mono:wght@400;500;600&display=swap"
		rel="stylesheet"
	/>
</svelte:head>

<header>
	<div class="wrap navrow">
		<a href="/" class="logo"
			><img
				src="/slapy-trail-maniacs-2027-logo.svg"
				alt="Slapy Trail Maniacs"
				class="logo-img"
			/></a
		>
		<nav class="links">
			<a href="/#o-zavode">O závodě</a>
			<a href="/#trate">Tratě</a>
			<a href="/propozice">Propozice</a>
			<a href="/startovka">Startovka</a>
			<a href="/vysledky" class="active-link" aria-current="page">Výsledky</a>
			<a href="/#kontakt">Kontakt</a>
		</nav>
		<a href="/registrace" class="cta-btn">Registrace</a>
		<button class="navmenu-btn">☰</button>
	</div>
</header>

<main>
	<section class="doc-header">
		<div class="wrap">
			<div class="kicker">Slapy Trail Maniacs · 24. 10. 2026</div>
			<h1>Výsledky 2026</h1>
			<p>
				Výsledky závodu na tratích 33, 47 a 61 km a měřených rychlostních úseků. Najděte svůj čas a
				pořadí nebo si stáhněte kompletní výsledky.
			</p>
		</div>
	</section>

	<section class="results-section" aria-labelledby="results-heading">
		<div class="wrap">
			<div class="results-section-head">
				<h2 id="results-heading">Jak jste doběhli?</h2>
				<a href="#results-downloads">PDF, CSV a Orion Live ↓</a>
			</div>
			<ResultsTable results={data.results} />
			<h2 id="results-downloads" class="downloads-heading">Ke stažení a online</h2>
			<div class="results-grid">
				<article class="result-card result-card-online">
					<div class="kicker">Online výsledky</div>
					<h3>Orion Live</h3>
					<p>Prohlédněte si výsledky závodu přímo na webu časomíry.</p>
					<a
						href="https://orionlive.eu/71"
						class="btn-accent"
						target="_blank"
						rel="noopener noreferrer"
						>Otevřít výsledky <span aria-hidden="true">↗</span><span class="sr-only">
							(v nové kartě)</span
						></a
					>
				</article>
				<article class="result-card">
					<div class="kicker">PDF · ke stažení</div>
					<h3>Výsledková listina</h3>
					<p>Kompletní přehled výsledků pro prohlížení, uložení nebo tisk.</p>
					<a href="/vysledky/2026/slapy-trailmaniacs-2026.pdf" class="result-download" download
						>Stáhnout výsledky v PDF <span aria-hidden="true">↓</span></a
					>
				</article>
				<article class="result-card">
					<div class="kicker">CSV · ke stažení</div>
					<h3>Výsledky v tabulce</h3>
					<p>Data pro otevření v Excelu nebo jiném tabulkovém editoru.</p>
					<a href="/vysledky/2026/slapy-trailmaniacs-2026.csv" class="result-download" download
						>Stáhnout výsledky v CSV <span aria-hidden="true">↓</span></a
					>
				</article>
			</div>
		</div>
	</section>
</main>

<style>
	.results-section {
		padding: 64px 0 100px;
	}
	.results-section h2 {
		font-size: clamp(28px, 4vw, 42px);
	}
	.results-section-head {
		display: flex;
		justify-content: space-between;
		align-items: baseline;
		flex-wrap: wrap;
		gap: 16px;
		margin-bottom: 32px;
	}
	.results-section-head a {
		font-size: 14px;
		font-weight: 600;
		text-underline-offset: 5px;
	}
	.downloads-heading {
		margin-top: 64px;
		margin-bottom: 32px;
		scroll-margin-top: 100px;
	}
	.results-grid {
		display: grid;
		grid-template-columns: repeat(3, minmax(0, 1fr));
		gap: 22px;
	}
	.result-card {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		padding: 30px;
		border: 1px solid var(--line-paper);
		border-radius: 16px;
	}
	.result-card h3 {
		font-size: 23px;
		line-height: 1.2;
		margin-bottom: 16px;
	}
	.result-card p {
		color: var(--grey);
		font-size: 15px;
		margin-bottom: 28px;
	}
	.result-card a {
		margin-top: auto;
	}
	.result-card-online {
		background: var(--ink);
		color: var(--paper);
	}
	.result-card-online .kicker {
		color: var(--accent);
	}
	.result-card-online p {
		color: var(--grey-on-ink);
	}
	.result-download {
		font-weight: 700;
		text-underline-offset: 5px;
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
		.results-grid {
			grid-template-columns: 1fr;
		}
	}
</style>
