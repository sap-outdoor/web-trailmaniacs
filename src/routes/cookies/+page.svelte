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
			<p>Web trailmaniacs.cz nepoužívá žádné cookies.</p>
		</div>
	</section>

	<section class="cookies-body">
		<div class="wrap">
			<div class="doc-content">
				<div class="doc-section">
					<h2>Náš web je bez cookies</h2>
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
				</div>
			</div>
		</div>
	</section>
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
				<a href="/cookies">Cookies</a>
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
