<script lang="ts">
	import SporttEmbed from '$lib/SporttEmbed.svelte';
</script>

<svelte:head>
	<title>Registrace — Slapy Trail Maniacs 2027</title>
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
			<a href="/#info">Info</a>
			<a href="/propozice">Propozice</a>
			<a href="/startovka">Startovka</a>
			<a href="/vysledky">Výsledky</a>
			<a href="/#kontakt">Kontakt</a>
		</nav>
		<a href="/registrace" class="cta-btn">Registrace</a>
		<button class="navmenu-btn">☰</button>
	</div>
</header>

<main>
	<section class="doc-header">
		<div class="wrap">
			<div class="kicker">Slapy Trail Maniacs 2027</div>
			<h1>Registrace</h1>
			<p>
				Přihlaste se na Slapy Trail Maniacs 2027. Závod se koná 23. 10. 2027, online registrace běží
				do 20. 10. 2027.
			</p>
			<p><a href="/startovka" class="btn-accent">Zobrazit startovku →</a></p>
		</div>
	</section>
	<SporttEmbed
		src="https://sportt.cz/register/1561"
		title="Registrace — Slapy Trail Maniacs 2027"
	/>
</main>
