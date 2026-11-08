<script lang="ts">
	import SporttEmbed from '$lib/SporttEmbed.svelte';
</script>

<svelte:head>
	<title>Startovka — Slapy Trail Maniacs 2027</title>
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
			<a href="/startovka" class="active-link" aria-current="page">Startovka</a>
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
			<h1>Kdo už stojí na startu.</h1>
			<p>
				Aktuální seznam přihlášených na Slapy Trail Maniacs 2027 přímo z registračního systému
				sportt.cz.
			</p>
			<p><a href="/registrace" class="btn-accent">Přihlásit se →</a></p>
		</div>
	</section>
	<SporttEmbed
		src="https://sportt.cz/startlist/1561"
		title="Startovní listina — Slapy Trail Maniacs 2027"
	/>
</main>

<footer>
	<div class="wrap">
		<div class="footer-grid">
			<div class="footer-col">
				<h4>Závod</h4>
				<a href="/#o-zavode">O závodě</a>
				<a href="/#trate">Tratě a kategorie</a>
				<a href="/#startovne">Startovné</a>
			</div>
			<div class="footer-col">
				<h4>Informace</h4>
				<a href="/propozice">Propozice</a>
				<a href="/pravidla">Pravidla</a>
				<a href="/registrace">Registrace</a>
				<a href="/startovka">Startovka</a>
				<a href="/vysledky">Výsledky</a>
			</div>
			<div class="footer-col">
				<h4>Kontakt</h4>
				<a href="mailto:info@trailmaniacs.cz">info@trailmaniacs.cz</a>
				<a href="tel:+420602268810">+420 602 268 810</a>
			</div>
			<div class="footer-col">
				<h4>Sledujte nás</h4>
				<div class="social-row">
					<a href="https://www.facebook.com/SlapyTrailManiacs" title="Facebook">FB</a>
					<a href="https://www.instagram.com/trailmaniacs" title="Instagram">IG</a>
				</div>
			</div>
		</div>
		<div class="footer-bottom">
			<div>© 2027 Š&amp;P Outdoor, z. s. — Všechna práva vyhrazena.</div>
			<div class="mono">Slapská přehrada · Borotice · Cholín</div>
		</div>
	</div>
</footer>
