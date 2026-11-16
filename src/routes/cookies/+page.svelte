<svelte:head>
	<title>Cookies — Slapy Trail Maniacs</title>
	<meta
		name="description"
		content="Web trailmaniacs.cz sám nepoužívá žádné cookies. Informace o cookies a vloženém obsahu služby sportt.cz."
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
			<div class="kicker">Informace o webu</div>
			<h1>Cookies</h1>
			<p>Gely, ionťák, banány a sůl. Ale hlavně žádné cookies.</p>
		</div>
	</section>

	<section class="cookies-body">
		<div class="wrap">
			<div class="doc-content">
				<div class="doc-section">
					<h2>Náš web <em>běží</em> bez cookies</h2>
					<p>
						Při prohlížení našeho webu do vašeho prohlížeče neukládáme žádné vlastní cookies.
						Nepoužíváme ani analytické, ani reklamní cookies.
					</p>
				</div>
				<div class="doc-section">
					<h2>Vložený obsah sportt.cz</h2>
					<p>
						Na stránkách registrace a startovky zobrazujeme obsah externí služby
						<a
							href="https://sportt.cz"
							class="inline-link"
							target="_blank"
							rel="noopener noreferrer">sportt.cz</a
						>. Podle informací jejího provozovatele používá sportt.cz pouze jednu nezbytnou
						technickou cookie pro přihlášení uživatele. Tato cookie neslouží k analytice ani reklamě
						a spravuje ji provozovatel služby sportt.cz.
					</p>
				</div>
				<div class="doc-section">
					<h2>Kontakt</h2>
					<p>
						Máte dotaz k používání cookies? Napište nám na
						<a href="mailto:info@trailmaniacs.cz" class="inline-link">info@trailmaniacs.cz</a>.
					</p>
					<p>
						Další informace o správci, účelech zpracování a vašich právech najdete na stránce
						<a href="/ochrana-osobnich-udaju" class="inline-link">Ochrana osobních údajů</a>.
					</p>
				</div>
			</div>
		</div>
	</section>
</main>

<style>
	.cookies-body {
		padding: 64px 0 100px;
	}

	.cookies-body .doc-content {
		margin: 0 auto;
	}

	@media (max-width: 920px) {
		.cookies-body {
			padding: 48px 0 72px;
		}
	}
</style>
