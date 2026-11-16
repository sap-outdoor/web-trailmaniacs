<script lang="ts">
	import type { Snippet } from 'svelte';

	let {
		title,
		description,
		sections = [],
		children
	}: {
		title: string;
		description: string;
		sections?: { id: string; label: string }[];
		children: Snippet;
	} = $props();
</script>

<svelte:head>
	<title>{title} — Slapy Trail Maniacs</title>
	<meta name="description" content={description} />
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link
		href="https://fonts.googleapis.com/css2?family=Archivo+Black&family=Inter:wght@400;500;600;700;800;900&family=IBM+Plex+Mono:wght@400;500;600&display=swap"
		rel="stylesheet"
	/>
</svelte:head>

<header>
	<div class="wrap navrow">
		<a href="/" class="logo">
			<img src="/slapy-trail-maniacs-2027-logo.svg" alt="Slapy Trail Maniacs" class="logo-img" />
		</a>
		<nav class="links" aria-label="Hlavní navigace">
			<a href="/#o-zavode">O závodě</a>
			<a href="/#trate">Tratě</a>
			<a href="/propozice">Propozice</a>
			<a href="/startovka">Startovka</a>
			<a href="/vysledky">Výsledky</a>
			<a href="/#kontakt">Kontakt</a>
		</nav>
		<a href="/registrace" class="cta-btn">Registrace</a>
		<button type="button" class="navmenu-btn" aria-label="Otevřít menu" aria-expanded="false"
			>☰</button
		>
	</div>
</header>

<main>
	<section class="doc-header" aria-labelledby="legal-title">
		<div class="wrap">
			<div class="kicker">Informace pro účastníky a návštěvníky</div>
			<h1 id="legal-title">{title}</h1>
			<p>{description}</p>
		</div>
	</section>
	<div class:without-toc={sections.length === 0} class="doc-shell wrap legal-shell">
		{#if sections.length}
			<nav class="doc-toc" aria-label="Obsah stránky">
				<div class="doc-toc-title">Na této stránce</div>
				{#each sections as section}
					<a href={'#' + section.id}>{section.label}</a>
				{/each}
			</nav>
		{/if}
		<article class="doc-content" aria-labelledby="legal-title">
			{@render children()}
			<p class="updated">Aktualizováno <time datetime="2026-11-16">16. 11. 2026</time>.</p>
		</article>
	</div>
</main>

<style>
	.legal-shell {
		padding-inline: 32px;
	}

	.without-toc {
		display: block;
	}

	.without-toc .doc-content {
		margin: 0 auto;
	}

	.updated {
		margin-top: 40px;
		font-size: 13px;
		color: var(--grey);
	}

	.legal-shell :global(.doc-section) {
		padding-bottom: 0;
	}

	.legal-shell :global(a) {
		overflow-wrap: anywhere;
	}
</style>
