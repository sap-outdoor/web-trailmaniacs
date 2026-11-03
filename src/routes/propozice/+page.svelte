<script lang="ts">
	import EntryFees from '$lib/EntryFees.svelte';
</script>

<svelte:head>
	<title>Propozice závodu — Slapy Trail Maniacs 2027</title>
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
			<a href="/propozice" class="active-link">Propozice</a>
			<a href="/vysledky">Výsledky</a>
			<a href="/#kontakt">Kontakt</a>
		</nav>
		<a href="/vysledky" class="cta-btn">Výsledky</a>
		<button class="navmenu-btn">☰</button>
	</div>
</header>

<section class="doc-header">
	<div class="wrap">
		<div class="kicker">Propozice závodu</div>
		<h1>Slapy Trail Maniacs 2027</h1>
		<p>
			Trailový terénní značený závod jednotlivců v okolí Slapské přehrady. Kompletní pravidla,
			harmonogram a praktické informace pro start.
		</p>
		<div class="doc-meta">
			<div><b>Termín:</b> sobota 23. 10. 2027</div>
			<div><b>Tratě:</b> 33 / 47 / 61 km</div>
			<div><b>Centrum závodu:</b> Hořovická chata, Cholín</div>
		</div>
	</div>
</section>

<div class="doc-shell wrap">
	<nav class="doc-toc">
		<div class="doc-toc-title">Na této stránce</div>
		<a href="#termin">Termín</a>
		<a href="#popis">Popis závodu</a>
		<a href="#delka">Délka a převýšení</a>
		<a href="#kategorie">Kategorie</a>
		<a href="#utmb">UTMB Index</a>
		<a href="#doprava">Převoz na start</a>
		<a href="#harmonogram">Časový harmonogram</a>
		<a href="#ubytovani">Ubytování</a>
		<a href="#parkovani">Parkování</a>
		<a href="#stravovani">Stravování</a>
		<a href="#startovne-doc">Startovné</a>
		<a href="#vybava">Povinná výbava</a>
		<a href="#organizator-doc">Organizátor</a>
	</nav>

	<div class="doc-content">
		<div class="doc-section" id="termin">
			<div class="kicker">01</div>
			<h2>Termín</h2>
			<div class="kv-list">
				<div class="kv-row">
					<div class="k">Start závodu — 61 km</div>
					<div class="v">Nečín, sobota 23. 10. 2027 v 7:00</div>
				</div>
				<div class="kv-row">
					<div class="k">Start závodu — 47 km</div>
					<div class="v">Cholín, sobota 23. 10. 2027 v 9:00</div>
				</div>
				<div class="kv-row">
					<div class="k">Start závodu — 33 km</div>
					<div class="v">
						Živohošťský most – levý břeh (občerstvovačka č. 2), sobota 23. 10. 2027 ve 12:00
					</div>
				</div>
				<div class="kv-row">
					<div class="k">Limit závodu</div>
					<div class="v">Cholín, sobota 23. 10. 2027 ve 23:00</div>
				</div>
				<div class="kv-row">
					<div class="k">Centrum závodu</div>
					<div class="v">Hořovická chata, část obce Cholín ev. č. 58, Borotice</div>
				</div>
				<div class="kv-row">
					<div class="k">Mapa</div>
					<div class="v">
						<a href="http://mapy.cz/s/feduguromo" class="inline-link" target="_blank" rel="noopener"
							>mapy.cz/s/feduguromo</a
						>
					</div>
				</div>
			</div>
		</div>

		<div class="doc-section" id="popis">
			<div class="kicker">02</div>
			<h2>Popis závodu</h2>
			<p>
				Trailový terénní značený závod jednotlivců v okolí slapské přehrady. V rámci závodu budou
				dva měřené rychlostní úseky. V mapě, kterou obdrží závodníci na prezentaci, bude označen
				start a cíl těchto úseků. Měřené úseky jsou hodnoceny zvlášť mimo celkové pořadí.
			</p>
		</div>

		<div class="doc-section" id="delka">
			<div class="kicker">03</div>
			<h2>Délka a převýšení</h2>
			<p>Mapy a GPX zatím odpovídají ročníku 2026. Podklady pro rok 2027 upřesníme.</p>
			<div class="mini-track-grid">
				<div class="mini-track">
					<div class="n">61<span>km</span></div>
					<div class="d">2300+ / 2400−</div>
					<a href="/gpx/slapy-trail-maniacs-2026-61km.gpx" download>Stáhnout GPX ↓</a>
				</div>
				<div class="mini-track">
					<div class="n">47<span>km</span></div>
					<div class="d">1850+ / 1850−</div>
					<a href="/gpx/slapy-trail-maniacs-2026-47km.gpx" download>Stáhnout GPX ↓</a>
				</div>
				<div class="mini-track">
					<div class="n">33<span>km</span></div>
					<div class="d">1200+ / 1150−</div>
					<a href="/gpx/slapy-trail-maniacs-2026-33km.gpx" download>Stáhnout GPX ↓</a>
				</div>
			</div>

			<div class="chart-card">
				<div class="chart-card-head">
					<span>Detailní výškový profil — 61 km</span>
					<span class="chart-card-sub">z reálného GPX, body občerstvovaček ilustrační</span>
				</div>
				<svg
					class="elevation-chart"
					viewBox="0 0 1000 400"
					preserveAspectRatio="xMidYMid meet"
					role="img"
					aria-label="Výškový profil tratě Slapy Trail Maniacs 61 km"
					xmlns="http://www.w3.org/2000/svg"
				>
					<defs>
						<linearGradient id="elevationFill61" x1="0" y1="0" x2="0" y2="1">
							<stop offset="0%" stop-color="var(--accent)" stop-opacity="0.35" />
							<stop offset="100%" stop-color="var(--accent)" stop-opacity="0" />
						</linearGradient>
					</defs>
					<g class="grid">
						<line class="grid-line" x1="60.0" y1="24" x2="60.0" y2="356" />
						<line class="grid-line" x1="211.7" y1="24" x2="211.7" y2="356" />
						<line class="grid-line" x1="363.3" y1="24" x2="363.3" y2="356" />
						<line class="grid-line" x1="515.0" y1="24" x2="515.0" y2="356" />
						<line class="grid-line" x1="666.7" y1="24" x2="666.7" y2="356" />
						<line class="grid-line" x1="818.4" y1="24" x2="818.4" y2="356" />
						<line class="grid-line" x1="970.0" y1="24" x2="970.0" y2="356" />
						<line class="grid-line" x1="975.9" y1="24" x2="975.9" y2="356" />
						<line class="grid-line" x1="60" y1="289.6" x2="976" y2="289.6" />
						<line class="grid-line" x1="60" y1="156.8" x2="976" y2="156.8" />
						<line class="grid-line" x1="60" y1="24.0" x2="976" y2="24.0" />
					</g>
					<g class="axes">
						<line class="axis-line" x1="60" y1="24" x2="60" y2="356" />
						<line class="axis-line" x1="60" y1="356" x2="976" y2="356" />
					</g>
					<path
						class="elevation-area"
						d="M 60.0,109.9 C 62.0,115.2 68.1,135.6 72.1,141.4 C 76.2,147.2 80.2,139.3 84.3,144.7 C 88.3,150.1 92.4,169.5 96.4,173.8 C 100.4,178.0 104.5,180.2 108.5,170.2 C 112.6,160.2 116.6,115.6 120.7,113.9 C 124.7,112.2 128.8,148.8 132.8,160.3 C 136.8,171.7 140.9,182.1 144.9,182.8 C 149.0,183.6 153.0,162.0 157.1,164.6 C 161.1,167.3 165.2,194.2 169.2,198.8 C 173.2,203.3 177.3,185.4 181.3,192.0 C 185.4,198.6 189.4,225.5 193.5,238.3 C 197.5,251.2 201.6,277.4 205.6,268.9 C 209.6,260.4 213.7,196.2 217.7,187.5 C 221.8,178.7 225.8,194.2 229.9,216.3 C 233.9,238.4 238.0,314.7 242.0,320.0 C 246.1,325.3 250.1,261.1 254.1,248.2 C 258.2,235.3 262.2,255.2 266.3,242.6 C 270.3,230.0 274.4,168.6 278.4,172.3 C 282.5,176.1 286.5,245.6 290.5,265.2 C 294.6,284.8 298.6,294.7 302.7,290.0 C 306.7,285.3 310.8,254.9 314.8,236.9 C 318.9,218.8 322.9,209.3 326.9,181.6 C 331.0,154.0 335.0,80.5 339.1,71.0 C 343.1,61.6 347.2,103.0 351.2,124.9 C 355.3,146.8 359.3,183.1 363.3,202.5 C 367.4,221.9 371.4,230.8 375.5,241.3 C 379.5,251.8 383.6,272.4 387.6,265.4 C 391.7,258.5 395.7,216.6 399.7,199.6 C 403.8,182.5 407.8,178.0 411.9,163.2 C 415.9,148.4 420.0,128.0 424.0,110.9 C 428.1,93.7 432.1,53.1 436.1,60.0 C 440.2,66.9 444.2,144.7 448.3,152.2 C 452.3,159.6 456.4,103.8 460.4,104.9 C 464.5,105.9 468.5,139.8 472.5,158.4 C 476.6,177.0 480.6,196.2 484.7,216.6 C 488.7,237.0 492.8,284.2 496.8,280.8 C 500.9,277.5 504.9,211.7 508.9,196.4 C 513.0,181.1 517.0,194.2 521.1,189.1 C 525.1,183.9 529.2,167.4 533.2,165.3 C 537.3,163.2 541.3,165.7 545.4,176.5 C 549.4,187.2 553.4,211.8 557.5,229.6 C 561.5,247.3 565.6,277.5 569.6,282.8 C 573.7,288.1 577.7,255.4 581.8,261.4 C 585.8,267.5 589.8,323.6 593.9,318.9 C 597.9,314.3 602.0,260.2 606.0,233.8 C 610.1,207.4 614.1,180.6 618.2,160.5 C 622.2,140.5 626.2,108.5 630.3,113.5 C 634.3,118.6 638.4,170.6 642.4,190.8 C 646.5,211.0 650.5,214.3 654.6,234.8 C 658.6,255.2 662.6,304.5 666.7,313.2 C 670.7,321.9 674.8,293.5 678.8,286.9 C 682.9,280.4 686.9,277.8 691.0,274.1 C 695.0,270.3 699.0,268.3 703.1,264.6 C 707.1,261.0 711.2,259.2 715.2,252.2 C 719.3,245.1 723.3,226.3 727.4,222.3 C 731.4,218.3 735.4,233.8 739.5,228.2 C 743.5,222.7 747.6,202.4 751.6,188.9 C 755.7,175.5 759.7,155.9 763.8,147.4 C 767.8,138.8 771.8,119.2 775.9,137.7 C 779.9,156.2 784.0,244.7 788.0,258.4 C 792.1,272.1 796.1,235.4 800.2,219.7 C 804.2,204.1 808.2,166.6 812.3,164.5 C 816.3,162.4 820.4,198.8 824.4,207.1 C 828.5,215.5 832.5,212.1 836.6,214.6 C 840.6,217.1 844.6,223.5 848.7,222.1 C 852.7,220.8 856.8,214.8 860.8,206.3 C 864.9,197.9 868.9,176.8 873.0,171.3 C 877.0,165.8 881.1,167.6 885.1,173.4 C 889.1,179.2 893.2,198.9 897.2,206.1 C 901.3,213.3 905.3,217.4 909.4,216.7 C 913.4,216.0 917.5,205.0 921.5,201.8 C 925.5,198.7 929.6,192.0 933.6,197.7 C 937.7,203.4 941.7,220.1 945.8,236.2 C 949.8,252.3 953.9,283.4 957.9,294.2 C 961.9,305.1 967.0,300.3 970.0,301.4 C 973.0,302.6 975.0,301.2 975.9,301.2 L 975.9,356.0 L 60.0,356.0 Z"
						fill="url(#elevationFill61)"
						stroke="none"
					/>
					<path
						class="elevation-line"
						d="M 60.0,109.9 C 62.0,115.2 68.1,135.6 72.1,141.4 C 76.2,147.2 80.2,139.3 84.3,144.7 C 88.3,150.1 92.4,169.5 96.4,173.8 C 100.4,178.0 104.5,180.2 108.5,170.2 C 112.6,160.2 116.6,115.6 120.7,113.9 C 124.7,112.2 128.8,148.8 132.8,160.3 C 136.8,171.7 140.9,182.1 144.9,182.8 C 149.0,183.6 153.0,162.0 157.1,164.6 C 161.1,167.3 165.2,194.2 169.2,198.8 C 173.2,203.3 177.3,185.4 181.3,192.0 C 185.4,198.6 189.4,225.5 193.5,238.3 C 197.5,251.2 201.6,277.4 205.6,268.9 C 209.6,260.4 213.7,196.2 217.7,187.5 C 221.8,178.7 225.8,194.2 229.9,216.3 C 233.9,238.4 238.0,314.7 242.0,320.0 C 246.1,325.3 250.1,261.1 254.1,248.2 C 258.2,235.3 262.2,255.2 266.3,242.6 C 270.3,230.0 274.4,168.6 278.4,172.3 C 282.5,176.1 286.5,245.6 290.5,265.2 C 294.6,284.8 298.6,294.7 302.7,290.0 C 306.7,285.3 310.8,254.9 314.8,236.9 C 318.9,218.8 322.9,209.3 326.9,181.6 C 331.0,154.0 335.0,80.5 339.1,71.0 C 343.1,61.6 347.2,103.0 351.2,124.9 C 355.3,146.8 359.3,183.1 363.3,202.5 C 367.4,221.9 371.4,230.8 375.5,241.3 C 379.5,251.8 383.6,272.4 387.6,265.4 C 391.7,258.5 395.7,216.6 399.7,199.6 C 403.8,182.5 407.8,178.0 411.9,163.2 C 415.9,148.4 420.0,128.0 424.0,110.9 C 428.1,93.7 432.1,53.1 436.1,60.0 C 440.2,66.9 444.2,144.7 448.3,152.2 C 452.3,159.6 456.4,103.8 460.4,104.9 C 464.5,105.9 468.5,139.8 472.5,158.4 C 476.6,177.0 480.6,196.2 484.7,216.6 C 488.7,237.0 492.8,284.2 496.8,280.8 C 500.9,277.5 504.9,211.7 508.9,196.4 C 513.0,181.1 517.0,194.2 521.1,189.1 C 525.1,183.9 529.2,167.4 533.2,165.3 C 537.3,163.2 541.3,165.7 545.4,176.5 C 549.4,187.2 553.4,211.8 557.5,229.6 C 561.5,247.3 565.6,277.5 569.6,282.8 C 573.7,288.1 577.7,255.4 581.8,261.4 C 585.8,267.5 589.8,323.6 593.9,318.9 C 597.9,314.3 602.0,260.2 606.0,233.8 C 610.1,207.4 614.1,180.6 618.2,160.5 C 622.2,140.5 626.2,108.5 630.3,113.5 C 634.3,118.6 638.4,170.6 642.4,190.8 C 646.5,211.0 650.5,214.3 654.6,234.8 C 658.6,255.2 662.6,304.5 666.7,313.2 C 670.7,321.9 674.8,293.5 678.8,286.9 C 682.9,280.4 686.9,277.8 691.0,274.1 C 695.0,270.3 699.0,268.3 703.1,264.6 C 707.1,261.0 711.2,259.2 715.2,252.2 C 719.3,245.1 723.3,226.3 727.4,222.3 C 731.4,218.3 735.4,233.8 739.5,228.2 C 743.5,222.7 747.6,202.4 751.6,188.9 C 755.7,175.5 759.7,155.9 763.8,147.4 C 767.8,138.8 771.8,119.2 775.9,137.7 C 779.9,156.2 784.0,244.7 788.0,258.4 C 792.1,272.1 796.1,235.4 800.2,219.7 C 804.2,204.1 808.2,166.6 812.3,164.5 C 816.3,162.4 820.4,198.8 824.4,207.1 C 828.5,215.5 832.5,212.1 836.6,214.6 C 840.6,217.1 844.6,223.5 848.7,222.1 C 852.7,220.8 856.8,214.8 860.8,206.3 C 864.9,197.9 868.9,176.8 873.0,171.3 C 877.0,165.8 881.1,167.6 885.1,173.4 C 889.1,179.2 893.2,198.9 897.2,206.1 C 901.3,213.3 905.3,217.4 909.4,216.7 C 913.4,216.0 917.5,205.0 921.5,201.8 C 925.5,198.7 929.6,192.0 933.6,197.7 C 937.7,203.4 941.7,220.1 945.8,236.2 C 949.8,252.3 953.9,283.4 957.9,294.2 C 961.9,305.1 967.0,300.3 970.0,301.4 C 973.0,302.6 975.0,301.2 975.9,301.2"
						fill="none"
					/>
					<g class="stations">
						<!-- Občerstvovací stanice 1 — Rozhledna, 18.2. km trati -->
						<line class="station-dropline" x1="336.0" y1="49.2" x2="336.0" y2="356.0" />
						<g class="station-icon" transform="translate(336.0,49.2)">
							<circle class="station-icon-bg" r="9" />
							<path
								class="station-icon-glyph"
								d="M 0,-4.6 C 2.4,-1.6 3.5,0.2 3.5,1.8 C 3.5,3.8 1.9,5.4 0,5.4 C -1.9,5.4 -3.5,3.8 -3.5,1.8 C -3.5,0.2 -2.4,-1.6 0,-4.6 Z"
							/>
						</g>
						<!-- Občerstvovací stanice 2 — Živohošťský most, 28.0. km trati -->
						<line class="station-dropline" x1="484.7" y1="209.9" x2="484.7" y2="356.0" />
						<g class="station-icon" transform="translate(484.7,209.9)">
							<circle class="station-icon-bg" r="9" />
							<path
								class="station-icon-glyph"
								d="M 0,-4.6 C 2.4,-1.6 3.5,0.2 3.5,1.8 C 3.5,3.8 1.9,5.4 0,5.4 C -1.9,5.4 -3.5,3.8 -3.5,1.8 C -3.5,0.2 -2.4,-1.6 0,-4.6 Z"
							/>
						</g>
						<!-- Občerstvovací stanice 3 — Ostromeč, 45.5. km trati -->
						<line class="station-dropline" x1="750.1" y1="196.2" x2="750.1" y2="356.0" />
						<g class="station-icon" transform="translate(750.1,196.2)">
							<circle class="station-icon-bg" r="9" />
							<path
								class="station-icon-glyph"
								d="M 0,-4.6 C 2.4,-1.6 3.5,0.2 3.5,1.8 C 3.5,3.8 1.9,5.4 0,5.4 C -1.9,5.4 -3.5,3.8 -3.5,1.8 C -3.5,0.2 -2.4,-1.6 0,-4.6 Z"
							/>
						</g>
						<!-- Občerstvovací stanice 4 — Křepenice (jen pití), 54.0. km trati -->
						<line class="station-dropline" x1="879.0" y1="166.4" x2="879.0" y2="356.0" />
						<g class="station-icon" transform="translate(879.0,166.4)">
							<circle class="station-icon-bg" r="9" />
							<path
								class="station-icon-glyph"
								d="M 0,-4.6 C 2.4,-1.6 3.5,0.2 3.5,1.8 C 3.5,3.8 1.9,5.4 0,5.4 C -1.9,5.4 -3.5,3.8 -3.5,1.8 C -3.5,0.2 -2.4,-1.6 0,-4.6 Z"
							/>
						</g>
					</g>
					<g class="axis-labels-x">
						<text class="axis-label" x="60.0" y="378" text-anchor="middle">0 KM</text>
						<text class="axis-label" x="211.7" y="378" text-anchor="middle">10 KM</text>
						<text class="axis-label" x="363.3" y="378" text-anchor="middle">20 KM</text>
						<text class="axis-label" x="515.0" y="378" text-anchor="middle">30 KM</text>
						<text class="axis-label" x="666.7" y="378" text-anchor="middle">40 KM</text>
						<text class="axis-label" x="818.4" y="378" text-anchor="middle">50 KM</text>
						<text class="axis-label" x="970.0" y="378" text-anchor="middle">60 KM</text>
						<text class="axis-label" x="975.9" y="378" text-anchor="middle">61 KM</text>
					</g>
					<g class="axis-labels-y">
						<text class="axis-label" x="48" y="293.6" text-anchor="end">300m</text>
						<text class="axis-label" x="48" y="160.8" text-anchor="end">400m</text>
						<text class="axis-label" x="48" y="28.0" text-anchor="end">500m</text>
					</g>
				</svg>
			</div>
		</div>

		<div class="chart-card">
			<div class="chart-card-head">
				<span>Detailní výškový profil — 47 km</span>
				<span class="chart-card-sub">z reálného GPX, body občerstvovaček ilustrační</span>
			</div>
			<svg
				class="elevation-chart"
				viewBox="0 0 1000 400"
				preserveAspectRatio="xMidYMid meet"
				role="img"
				aria-label="Výškový profil tratě Slapy Trail Maniacs 47 km"
				xmlns="http://www.w3.org/2000/svg"
			>
				<defs>
					<linearGradient id="elevationFill47" x1="0" y1="0" x2="0" y2="1">
						<stop offset="0%" stop-color="var(--accent)" stop-opacity="0.35" />
						<stop offset="100%" stop-color="var(--accent)" stop-opacity="0" />
					</linearGradient>
				</defs>
				<g class="grid">
					<line class="grid-line" x1="60.0" y1="24" x2="60.0" y2="356" />
					<line class="grid-line" x1="256.5" y1="24" x2="256.5" y2="356" />
					<line class="grid-line" x1="453.0" y1="24" x2="453.0" y2="356" />
					<line class="grid-line" x1="649.4" y1="24" x2="649.4" y2="356" />
					<line class="grid-line" x1="845.9" y1="24" x2="845.9" y2="356" />
					<line class="grid-line" x1="976.0" y1="24" x2="976.0" y2="356" />
					<line class="grid-line" x1="60" y1="289.6" x2="976" y2="289.6" />
					<line class="grid-line" x1="60" y1="156.8" x2="976" y2="156.8" />
					<line class="grid-line" x1="60" y1="24.0" x2="976" y2="24.0" />
				</g>
				<g class="axes">
					<line class="axis-line" x1="60" y1="24" x2="60" y2="356" />
					<line class="axis-line" x1="60" y1="356" x2="976" y2="356" />
				</g>
				<path
					class="elevation-area"
					d="M 60.0,253.9 C 62.6,243.1 70.5,186.2 75.7,189.5 C 81.0,192.8 86.2,259.2 91.4,273.7 C 96.7,288.2 101.9,283.8 107.2,276.5 C 112.4,269.1 117.6,252.8 122.9,229.6 C 128.1,206.4 133.4,161.5 138.6,137.1 C 143.8,112.8 149.1,83.0 154.3,83.6 C 159.5,84.2 164.8,117.9 170.0,140.9 C 175.3,163.9 180.5,203.7 185.7,221.6 C 191.0,239.5 196.2,248.4 201.5,248.2 C 206.7,247.9 211.9,226.7 217.2,220.3 C 222.4,213.8 227.7,221.8 232.9,209.4 C 238.1,197.0 243.4,164.7 248.6,145.9 C 253.9,127.1 259.1,108.0 264.3,96.8 C 269.6,85.5 274.8,69.2 280.1,78.4 C 285.3,87.7 290.5,148.2 295.8,152.2 C 301.0,156.1 306.3,98.6 311.5,102.1 C 316.7,105.5 322.0,150.4 327.2,172.9 C 332.5,195.3 337.7,222.8 342.9,236.9 C 348.2,251.0 353.4,264.3 358.6,257.3 C 363.9,250.4 369.1,207.8 374.4,195.2 C 379.6,182.6 384.8,187.6 390.1,181.9 C 395.3,176.2 400.6,160.5 405.8,160.8 C 411.0,161.0 416.3,171.3 421.5,183.4 C 426.8,195.4 432.0,221.2 437.2,233.3 C 442.5,245.4 447.7,246.8 453.0,255.7 C 458.2,264.7 463.4,279.0 468.7,287.1 C 473.9,295.2 479.2,318.2 484.4,304.5 C 489.6,290.8 494.9,230.1 500.1,205.0 C 505.4,179.9 510.6,167.3 515.8,153.9 C 521.1,140.4 526.3,116.7 531.5,124.3 C 536.8,131.8 542.0,178.6 547.3,199.0 C 552.5,219.5 557.7,229.0 563.0,246.8 C 568.2,264.7 573.5,300.7 578.7,306.3 C 583.9,311.9 589.2,286.0 594.4,280.4 C 599.7,274.9 604.9,275.7 610.1,273.0 C 615.4,270.3 620.6,267.7 625.9,264.4 C 631.1,261.0 636.3,260.9 641.6,252.9 C 646.8,245.0 652.1,220.6 657.3,216.6 C 662.5,212.5 667.8,234.5 673.0,228.8 C 678.3,223.1 683.5,197.0 688.7,182.4 C 694.0,167.9 699.2,148.1 704.5,141.4 C 709.7,134.7 714.9,119.5 720.2,142.5 C 725.4,165.4 730.6,270.9 735.9,279.0 C 741.1,287.0 746.4,210.1 751.6,190.8 C 756.8,171.5 762.1,155.7 767.3,163.0 C 772.6,170.3 777.8,226.4 783.0,234.6 C 788.3,242.8 793.5,218.1 798.8,212.3 C 804.0,206.5 809.2,202.9 814.5,200.0 C 819.7,197.0 825.0,199.0 830.2,194.4 C 835.4,189.8 840.7,175.0 845.9,172.3 C 851.2,169.6 856.4,170.5 861.6,178.2 C 866.9,185.9 872.1,213.3 877.4,218.7 C 882.6,224.1 887.8,213.2 893.1,210.7 C 898.3,208.2 903.5,205.2 908.8,203.5 C 914.0,201.9 919.3,192.8 924.5,200.6 C 929.7,208.5 935.0,233.4 940.2,250.7 C 945.5,268.0 950.7,296.0 955.9,304.2 C 961.2,312.4 968.3,300.6 971.7,300.1 C 975.0,299.6 975.3,301.0 976.0,301.2 L 976.0,356.0 L 60.0,356.0 Z"
					fill="url(#elevationFill47)"
					stroke="none"
				/>
				<path
					class="elevation-line"
					d="M 60.0,253.9 C 62.6,243.1 70.5,186.2 75.7,189.5 C 81.0,192.8 86.2,259.2 91.4,273.7 C 96.7,288.2 101.9,283.8 107.2,276.5 C 112.4,269.1 117.6,252.8 122.9,229.6 C 128.1,206.4 133.4,161.5 138.6,137.1 C 143.8,112.8 149.1,83.0 154.3,83.6 C 159.5,84.2 164.8,117.9 170.0,140.9 C 175.3,163.9 180.5,203.7 185.7,221.6 C 191.0,239.5 196.2,248.4 201.5,248.2 C 206.7,247.9 211.9,226.7 217.2,220.3 C 222.4,213.8 227.7,221.8 232.9,209.4 C 238.1,197.0 243.4,164.7 248.6,145.9 C 253.9,127.1 259.1,108.0 264.3,96.8 C 269.6,85.5 274.8,69.2 280.1,78.4 C 285.3,87.7 290.5,148.2 295.8,152.2 C 301.0,156.1 306.3,98.6 311.5,102.1 C 316.7,105.5 322.0,150.4 327.2,172.9 C 332.5,195.3 337.7,222.8 342.9,236.9 C 348.2,251.0 353.4,264.3 358.6,257.3 C 363.9,250.4 369.1,207.8 374.4,195.2 C 379.6,182.6 384.8,187.6 390.1,181.9 C 395.3,176.2 400.6,160.5 405.8,160.8 C 411.0,161.0 416.3,171.3 421.5,183.4 C 426.8,195.4 432.0,221.2 437.2,233.3 C 442.5,245.4 447.7,246.8 453.0,255.7 C 458.2,264.7 463.4,279.0 468.7,287.1 C 473.9,295.2 479.2,318.2 484.4,304.5 C 489.6,290.8 494.9,230.1 500.1,205.0 C 505.4,179.9 510.6,167.3 515.8,153.9 C 521.1,140.4 526.3,116.7 531.5,124.3 C 536.8,131.8 542.0,178.6 547.3,199.0 C 552.5,219.5 557.7,229.0 563.0,246.8 C 568.2,264.7 573.5,300.7 578.7,306.3 C 583.9,311.9 589.2,286.0 594.4,280.4 C 599.7,274.9 604.9,275.7 610.1,273.0 C 615.4,270.3 620.6,267.7 625.9,264.4 C 631.1,261.0 636.3,260.9 641.6,252.9 C 646.8,245.0 652.1,220.6 657.3,216.6 C 662.5,212.5 667.8,234.5 673.0,228.8 C 678.3,223.1 683.5,197.0 688.7,182.4 C 694.0,167.9 699.2,148.1 704.5,141.4 C 709.7,134.7 714.9,119.5 720.2,142.5 C 725.4,165.4 730.6,270.9 735.9,279.0 C 741.1,287.0 746.4,210.1 751.6,190.8 C 756.8,171.5 762.1,155.7 767.3,163.0 C 772.6,170.3 777.8,226.4 783.0,234.6 C 788.3,242.8 793.5,218.1 798.8,212.3 C 804.0,206.5 809.2,202.9 814.5,200.0 C 819.7,197.0 825.0,199.0 830.2,194.4 C 835.4,189.8 840.7,175.0 845.9,172.3 C 851.2,169.6 856.4,170.5 861.6,178.2 C 866.9,185.9 872.1,213.3 877.4,218.7 C 882.6,224.1 887.8,213.2 893.1,210.7 C 898.3,208.2 903.5,205.2 908.8,203.5 C 914.0,201.9 919.3,192.8 924.5,200.6 C 929.7,208.5 935.0,233.4 940.2,250.7 C 945.5,268.0 950.7,296.0 955.9,304.2 C 961.2,312.4 968.3,300.6 971.7,300.1 C 975.0,299.6 975.3,301.0 976.0,301.2"
					fill="none"
				/>
				<g class="stations">
					<!-- Občerstvovací stanice 1 — Rozhledna, 4.2. km trati -->
					<line class="station-dropline" x1="142.5" y1="106.3" x2="142.5" y2="356.0" />
					<g class="station-icon" transform="translate(142.5,106.3)">
						<circle class="station-icon-bg" r="9" />
						<path
							class="station-icon-glyph"
							d="M 0,-4.6 C 2.4,-1.6 3.5,0.2 3.5,1.8 C 3.5,3.8 1.9,5.4 0,5.4 C -1.9,5.4 -3.5,3.8 -3.5,1.8 C -3.5,0.2 -2.4,-1.6 0,-4.6 Z"
						/>
					</g>
					<!-- Občerstvovací stanice 2 — Živohošťský most, 14.0. km trati -->
					<line class="station-dropline" x1="335.1" y1="199.3" x2="335.1" y2="356.0" />
					<g class="station-icon" transform="translate(335.1,199.3)">
						<circle class="station-icon-bg" r="9" />
						<path
							class="station-icon-glyph"
							d="M 0,-4.6 C 2.4,-1.6 3.5,0.2 3.5,1.8 C 3.5,3.8 1.9,5.4 0,5.4 C -1.9,5.4 -3.5,3.8 -3.5,1.8 C -3.5,0.2 -2.4,-1.6 0,-4.6 Z"
						/>
					</g>
					<!-- Občerstvovací stanice 3 — Ostromeč, 31.5. km trati -->
					<line class="station-dropline" x1="678.9" y1="211.9" x2="678.9" y2="356.0" />
					<g class="station-icon" transform="translate(678.9,211.9)">
						<circle class="station-icon-bg" r="9" />
						<path
							class="station-icon-glyph"
							d="M 0,-4.6 C 2.4,-1.6 3.5,0.2 3.5,1.8 C 3.5,3.8 1.9,5.4 0,5.4 C -1.9,5.4 -3.5,3.8 -3.5,1.8 C -3.5,0.2 -2.4,-1.6 0,-4.6 Z"
						/>
					</g>
					<!-- Občerstvovací stanice 4 — Křepenice (jen pití), 40.0. km trati -->
					<line class="station-dropline" x1="845.9" y1="161.0" x2="845.9" y2="356.0" />
					<g class="station-icon" transform="translate(845.9,161.0)">
						<circle class="station-icon-bg" r="9" />
						<path
							class="station-icon-glyph"
							d="M 0,-4.6 C 2.4,-1.6 3.5,0.2 3.5,1.8 C 3.5,3.8 1.9,5.4 0,5.4 C -1.9,5.4 -3.5,3.8 -3.5,1.8 C -3.5,0.2 -2.4,-1.6 0,-4.6 Z"
						/>
					</g>
				</g>
				<g class="axis-labels-x">
					<text class="axis-label" x="60.0" y="378" text-anchor="middle">0 KM</text>
					<text class="axis-label" x="256.5" y="378" text-anchor="middle">10 KM</text>
					<text class="axis-label" x="453.0" y="378" text-anchor="middle">20 KM</text>
					<text class="axis-label" x="649.4" y="378" text-anchor="middle">30 KM</text>
					<text class="axis-label" x="845.9" y="378" text-anchor="middle">40 KM</text>
					<text class="axis-label" x="976.0" y="378" text-anchor="middle">47 KM</text>
				</g>
				<g class="axis-labels-y">
					<text class="axis-label" x="48" y="293.6" text-anchor="end">300m</text>
					<text class="axis-label" x="48" y="160.8" text-anchor="end">400m</text>
					<text class="axis-label" x="48" y="28.0" text-anchor="end">500m</text>
				</g>
			</svg>
		</div>

		<div class="chart-card">
			<div class="chart-card-head">
				<span>Detailní výškový profil — 33 km</span>
				<span class="chart-card-sub">z reálného GPX, body občerstvovaček ilustrační</span>
			</div>
			<svg
				class="elevation-chart"
				viewBox="0 0 1000 400"
				preserveAspectRatio="xMidYMid meet"
				role="img"
				aria-label="Výškový profil tratě Slapy Trail Maniacs 33 km"
				xmlns="http://www.w3.org/2000/svg"
			>
				<defs>
					<linearGradient id="elevationFill33" x1="0" y1="0" x2="0" y2="1">
						<stop offset="0%" stop-color="var(--accent)" stop-opacity="0.35" />
						<stop offset="100%" stop-color="var(--accent)" stop-opacity="0" />
					</linearGradient>
				</defs>
				<g class="grid">
					<line class="grid-line" x1="60.0" y1="24" x2="60.0" y2="356" />
					<line class="grid-line" x1="346.2" y1="24" x2="346.2" y2="356" />
					<line class="grid-line" x1="632.4" y1="24" x2="632.4" y2="356" />
					<line class="grid-line" x1="918.7" y1="24" x2="918.7" y2="356" />
					<line class="grid-line" x1="975.9" y1="24" x2="975.9" y2="356" />
					<line class="grid-line" x1="60" y1="289.6" x2="976" y2="289.6" />
					<line class="grid-line" x1="60" y1="156.8" x2="976" y2="156.8" />
					<line class="grid-line" x1="60" y1="24.0" x2="976" y2="24.0" />
				</g>
				<g class="axes">
					<line class="axis-line" x1="60" y1="24" x2="60" y2="356" />
					<line class="axis-line" x1="60" y1="356" x2="976" y2="356" />
				</g>
				<path
					class="elevation-area"
					d="M 60.0,303.9 C 63.8,292.0 75.3,252.8 82.9,232.1 C 90.5,211.4 98.2,190.1 105.8,179.8 C 113.4,169.4 121.1,172.9 128.7,169.9 C 136.3,167.0 144.0,156.7 151.6,162.1 C 159.2,167.5 166.9,185.8 174.5,202.4 C 182.1,219.0 189.8,256.2 197.4,261.7 C 205.0,267.2 212.7,227.0 220.3,235.2 C 227.9,243.3 235.6,303.2 243.2,310.7 C 250.8,318.2 258.4,301.8 266.1,280.3 C 273.7,258.8 281.3,207.8 289.0,181.8 C 296.6,155.7 304.2,127.5 311.9,124.0 C 319.5,120.5 327.1,145.6 334.8,160.5 C 342.4,175.5 350.0,199.1 357.7,213.8 C 365.3,228.5 372.9,234.5 380.6,248.7 C 388.2,262.9 395.8,294.8 403.5,298.9 C 411.1,303.0 418.7,279.5 426.4,273.3 C 434.0,267.0 441.6,263.7 449.3,261.4 C 456.9,259.2 464.5,261.9 472.2,259.9 C 479.8,257.8 487.4,255.5 495.1,249.1 C 502.7,242.7 510.3,226.7 518.0,221.3 C 525.6,216.0 533.2,225.6 540.9,216.8 C 548.5,208.0 556.1,181.7 563.8,168.5 C 571.4,155.3 579.0,131.5 586.7,137.7 C 594.3,143.9 601.9,181.3 609.6,205.7 C 617.2,230.1 624.8,290.0 632.4,284.0 C 640.1,278.0 647.7,189.2 655.3,169.8 C 663.0,150.4 670.6,155.3 678.2,167.7 C 685.9,180.1 693.5,238.7 701.1,244.3 C 708.8,249.9 716.4,209.8 724.0,201.2 C 731.7,192.5 739.3,195.5 746.9,192.3 C 754.6,189.0 762.2,184.9 769.8,181.8 C 777.5,178.6 785.1,172.9 792.7,173.5 C 800.4,174.1 808.0,177.1 815.6,185.4 C 823.3,193.6 830.9,219.9 838.5,222.9 C 846.2,226.0 853.8,206.6 861.4,203.5 C 869.1,200.5 876.7,203.3 884.3,204.6 C 892.0,205.9 899.6,200.3 907.2,211.5 C 914.9,222.7 922.5,256.2 930.1,271.8 C 937.8,287.4 945.4,300.4 953.0,305.3 C 960.7,310.2 972.1,301.8 975.9,301.2 L 975.9,356.0 L 60.0,356.0 Z"
					fill="url(#elevationFill33)"
					stroke="none"
				/>
				<path
					class="elevation-line"
					d="M 60.0,303.9 C 63.8,292.0 75.3,252.8 82.9,232.1 C 90.5,211.4 98.2,190.1 105.8,179.8 C 113.4,169.4 121.1,172.9 128.7,169.9 C 136.3,167.0 144.0,156.7 151.6,162.1 C 159.2,167.5 166.9,185.8 174.5,202.4 C 182.1,219.0 189.8,256.2 197.4,261.7 C 205.0,267.2 212.7,227.0 220.3,235.2 C 227.9,243.3 235.6,303.2 243.2,310.7 C 250.8,318.2 258.4,301.8 266.1,280.3 C 273.7,258.8 281.3,207.8 289.0,181.8 C 296.6,155.7 304.2,127.5 311.9,124.0 C 319.5,120.5 327.1,145.6 334.8,160.5 C 342.4,175.5 350.0,199.1 357.7,213.8 C 365.3,228.5 372.9,234.5 380.6,248.7 C 388.2,262.9 395.8,294.8 403.5,298.9 C 411.1,303.0 418.7,279.5 426.4,273.3 C 434.0,267.0 441.6,263.7 449.3,261.4 C 456.9,259.2 464.5,261.9 472.2,259.9 C 479.8,257.8 487.4,255.5 495.1,249.1 C 502.7,242.7 510.3,226.7 518.0,221.3 C 525.6,216.0 533.2,225.6 540.9,216.8 C 548.5,208.0 556.1,181.7 563.8,168.5 C 571.4,155.3 579.0,131.5 586.7,137.7 C 594.3,143.9 601.9,181.3 609.6,205.7 C 617.2,230.1 624.8,290.0 632.4,284.0 C 640.1,278.0 647.7,189.2 655.3,169.8 C 663.0,150.4 670.6,155.3 678.2,167.7 C 685.9,180.1 693.5,238.7 701.1,244.3 C 708.8,249.9 716.4,209.8 724.0,201.2 C 731.7,192.5 739.3,195.5 746.9,192.3 C 754.6,189.0 762.2,184.9 769.8,181.8 C 777.5,178.6 785.1,172.9 792.7,173.5 C 800.4,174.1 808.0,177.1 815.6,185.4 C 823.3,193.6 830.9,219.9 838.5,222.9 C 846.2,226.0 853.8,206.6 861.4,203.5 C 869.1,200.5 876.7,203.3 884.3,204.6 C 892.0,205.9 899.6,200.3 907.2,211.5 C 914.9,222.7 922.5,256.2 930.1,271.8 C 937.8,287.4 945.4,300.4 953.0,305.3 C 960.7,310.2 972.1,301.8 975.9,301.2"
					fill="none"
				/>
				<g class="stations">
					<!-- Občerstvovací stanice 1 — Ostromeč, 17.5. km trati -->
					<line class="station-dropline" x1="560.9" y1="180.0" x2="560.9" y2="356.0" />
					<g class="station-icon" transform="translate(560.9,180.0)">
						<circle class="station-icon-bg" r="9" />
						<path
							class="station-icon-glyph"
							d="M 0,-4.6 C 2.4,-1.6 3.5,0.2 3.5,1.8 C 3.5,3.8 1.9,5.4 0,5.4 C -1.9,5.4 -3.5,3.8 -3.5,1.8 C -3.5,0.2 -2.4,-1.6 0,-4.6 Z"
						/>
					</g>
					<!-- Občerstvovací stanice 2 — Křepenice (jen pití), 26.0. km trati -->
					<line class="station-dropline" x1="804.2" y1="186.7" x2="804.2" y2="356.0" />
					<g class="station-icon" transform="translate(804.2,186.7)">
						<circle class="station-icon-bg" r="9" />
						<path
							class="station-icon-glyph"
							d="M 0,-4.6 C 2.4,-1.6 3.5,0.2 3.5,1.8 C 3.5,3.8 1.9,5.4 0,5.4 C -1.9,5.4 -3.5,3.8 -3.5,1.8 C -3.5,0.2 -2.4,-1.6 0,-4.6 Z"
						/>
					</g>
				</g>
				<g class="axis-labels-x">
					<text class="axis-label" x="60.0" y="378" text-anchor="middle">0 KM</text>
					<text class="axis-label" x="346.2" y="378" text-anchor="middle">10 KM</text>
					<text class="axis-label" x="632.4" y="378" text-anchor="middle">20 KM</text>
					<text class="axis-label" x="918.7" y="378" text-anchor="middle">30 KM</text>
					<text class="axis-label" x="975.9" y="378" text-anchor="middle">33 KM</text>
				</g>
				<g class="axis-labels-y">
					<text class="axis-label" x="48" y="293.6" text-anchor="end">300m</text>
					<text class="axis-label" x="48" y="160.8" text-anchor="end">400m</text>
					<text class="axis-label" x="48" y="28.0" text-anchor="end">500m</text>
				</g>
			</svg>
		</div>

		<div class="doc-section" id="kategorie">
			<div class="kicker">04</div>
			<h2>Kategorie</h2>
			<ul>
				<li>Muži – 61 trať</li>
				<li>Muži – 47 trať</li>
				<li>Muži – 33 trať</li>
				<li>Ženy – 61 trať</li>
				<li>Ženy – 47 trať</li>
				<li>Ženy – 33 trať</li>
			</ul>
		</div>

		<div class="doc-section" id="utmb">
			<div class="kicker">05</div>
			<h2>UTMB Index</h2>
			<p>
				Dokončení jakékoliv tratě Slapy Trail Maniacs přispěje k vašemu UTMB indexu. Více informací
				naleznete přímo na webu <a href="https://utmb.world/utmb-index" class="inline-link">UTMB</a
				>.
			</p>
			<div class="doc-utmb-row">
				<div class="item">
					<span class="chip-badge"
						><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 676.89 218.65"
							><g
								><g
									><polygon
										fill="#fc5a00"
										points="0 204.5 417.62 204.5 463.57 17.39 0 17.39 0 204.5"
									/><polygon
										fill="#000d44"
										points="514.22 122.43 497.45 204.75 451.16 204.75 498.52 11.91 561.19 120.41 617.8 0 676.88 204.75 628.83 204.75 606.52 117.05 561.19 218.65 514.22 122.43"
									/><path
										fill="#000d44"
										d="M102.72,76.21l-2,13,9.35-.75c23.21-1.81,40.24,17.18,40.24,40.69a39.59,39.59,0,0,1-14.62,30.75c-9,7.24-21.85,9.5-33.16,9.5-13,0-26.07-3.17-37.08-10.25l4.37-27.89c8.74,7.84,19.9,13.12,31.66,13.12,9.34,0,18.08-6.79,18.08-16.73,0-13.72-13.11-19.45-24.87-19.45A51.19,51.19,0,0,0,73,112.83L83,51.19h59.08v25Z"
									/><path
										fill="#000d44"
										d="M260.67,108c0,29.54-14.32,61.35-48.23,61.35S164.21,137.55,164.21,108s14.47-61.34,48.23-61.34S260.67,78.47,260.67,108Zm-67.07-.15c0,11,3.62,35.42,18.84,35.42s18.84-24.42,18.84-35.42-3.62-35.12-18.84-35.12S193.6,96.86,193.6,107.86Z"
									/><path
										fill="#000d44"
										d="M339.34,51.19H376L330.75,105,380,164.84H341.75l-38.13-49.29h-.3v49.29H273.77V51.19h29.55V98.06h.3Z"
									/></g
								></g
							></svg
						></span
					> Trať 61 km
				</div>
				<div class="item">
					<span class="chip-badge"
						><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 676.89 218.65"
							><g
								><g
									><polygon
										fill="#fc5a00"
										points="0 204.5 417.62 204.5 463.57 17.39 0 17.39 0 204.5"
									/><polygon
										fill="#000d44"
										points="514.22 122.43 497.45 204.75 451.16 204.75 498.52 11.91 561.19 120.41 617.8 0 676.88 204.75 628.83 204.75 606.52 117.05 561.19 218.65 514.22 122.43"
									/><path
										fill="#000d44"
										d="M102.72,76.21l-2,13,9.35-.75c23.21-1.81,40.24,17.18,40.24,40.69a39.59,39.59,0,0,1-14.62,30.75c-9,7.24-21.85,9.5-33.16,9.5-13,0-26.07-3.17-37.08-10.25l4.37-27.89c8.74,7.84,19.9,13.12,31.66,13.12,9.34,0,18.08-6.79,18.08-16.73,0-13.72-13.11-19.45-24.87-19.45A51.19,51.19,0,0,0,73,112.83L83,51.19h59.08v25Z"
									/><path
										fill="#000d44"
										d="M260.67,108c0,29.54-14.32,61.35-48.23,61.35S164.21,137.55,164.21,108s14.47-61.34,48.23-61.34S260.67,78.47,260.67,108Zm-67.07-.15c0,11,3.62,35.42,18.84,35.42s18.84-24.42,18.84-35.42-3.62-35.12-18.84-35.12S193.6,96.86,193.6,107.86Z"
									/><path
										fill="#000d44"
										d="M339.34,51.19H376L330.75,105,380,164.84H341.75l-38.13-49.29h-.3v49.29H273.77V51.19h29.55V98.06h.3Z"
									/></g
								></g
							></svg
						></span
					> Trať 47 km
				</div>
				<div class="item">
					<span class="chip-badge"
						><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 676.89 218.65"
							><g
								><g
									><polygon
										fill="#ffff00"
										points="0 204.5 417.62 204.5 463.57 17.39 0 17.39 0 204.5"
									/><polygon
										fill="#000d44"
										points="514.22 122.43 497.45 204.75 451.16 204.75 498.52 11.91 561.19 120.41 617.8 0 676.88 204.75 628.83 204.75 606.52 117.05 561.19 218.65 514.22 122.43"
									/><path
										fill="#000d44"
										d="M153.44,139.81v25H62.1l46.42-50.5c6.63-7.23,13-17.48,13-27.88,0-7.24-5.13-14.77-13-14.77S96.16,77.87,96.16,85.55a27.62,27.62,0,0,0,.46,4.83H64.06C65,64.3,81.54,46.67,108.37,46.67c23.82,0,43.87,15.67,43.87,40.39,0,16.28-6.79,25.77-18.39,36.33l-17.64,16.42Z"
									/><path
										fill="#000d44"
										d="M260.45,108c0,29.54-14.32,61.35-48.24,61.35S164,137.55,164,108s14.47-61.34,48.23-61.34S260.45,78.47,260.45,108Zm-67.08-.15c0,11,3.62,35.42,18.84,35.42s18.84-24.42,18.84-35.42-3.61-35.12-18.84-35.12S193.37,96.86,193.37,107.86Z"
									/><path
										fill="#000d44"
										d="M339.11,51.19h36.63L330.52,105l49.29,59.84H341.53l-38.14-49.29h-.3v49.29H273.55V51.19h29.54V98.06h.3Z"
									/></g
								></g
							></svg
						></span
					> Trať 33 km
				</div>
			</div>
		</div>

		<div class="doc-section" id="doprava">
			<div class="kicker">06</div>
			<h2>Převoz na start závodu</h2>
			<p>
				Zajištěn autobusy dle harmonogramu ze zázemí závodu pro trať 61 km. Převoz bude trvat cca 20
				minut.
			</p>
			<p>
				Zajištěn autobusy dle harmonogramu ze zázemí závodu pro trať 33 km. Převoz bude trvat cca 20
				minut.
			</p>
		</div>

		<div class="doc-section" id="harmonogram">
			<div class="kicker">07</div>
			<h2>Časový harmonogram</h2>
			<p>Pátek 22. 10. 2027</p>
			<div class="schedule-list doc-schedule">
				<div class="schedule-row">
					<div class="time">18:00<span>–21:45</span></div>
					<div class="place">Prezence<small>Centrum závodu, Hořovická chata</small></div>
					<div class="desc"><span class="trat-tag">Všechny tratě</span></div>
				</div>
			</div>
			<p>Sobota 23. 10. 2027</p>
			<div class="schedule-list doc-schedule">
				<div class="schedule-row">
					<div class="time">6:00<span>–6:20</span></div>
					<div class="place">Prezence<small>Centrum závodu, Hořovická chata</small></div>
					<div class="desc"><span class="trat-tag">61 km</span></div>
				</div>
				<div class="schedule-row">
					<div class="time">6:30</div>
					<div class="place">Převoz na start<small>Autobus z centra závodu do Nečína</small></div>
					<div class="desc"><span class="trat-tag">61 km</span></div>
				</div>
				<div class="schedule-row is-start">
					<div class="time">7:00</div>
					<div class="place">Start<small>Nečín</small></div>
					<div class="desc"><span class="trat-tag">61 km</span></div>
				</div>
				<div class="schedule-row">
					<div class="time">7:30<span>–8:30</span></div>
					<div class="place">Prezence<small>Centrum závodu, Hořovická chata</small></div>
					<div class="desc">
						<span class="trat-tag">47 km</span><span class="trat-tag">33 km</span>
					</div>
				</div>
				<div class="schedule-row is-start">
					<div class="time">9:00</div>
					<div class="place">Start<small>Cholín</small></div>
					<div class="desc"><span class="trat-tag">47 km</span></div>
				</div>
				<div class="schedule-row">
					<div class="time">10:30<span>–11:00</span></div>
					<div class="place">Prezence<small>Centrum závodu, Hořovická chata</small></div>
					<div class="desc"><span class="trat-tag">33 km</span></div>
				</div>
				<div class="schedule-row">
					<div class="time">11:15</div>
					<div class="place">
						Převoz na start<small>Autobus z centra závodu k Živohošťskému mostu</small>
					</div>
					<div class="desc"><span class="trat-tag">33 km</span></div>
				</div>
				<div class="schedule-row">
					<div class="time">11:30<span>–11:45</span></div>
					<div class="place">
						Prezence v místě startu<small>Živohošťský most – levý břeh</small>
					</div>
					<div class="desc"><span class="trat-tag">33 km</span></div>
				</div>
				<div class="schedule-row is-start">
					<div class="time">12:00</div>
					<div class="place">Start<small>Živohošťský most – levý břeh</small></div>
					<div class="desc"><span class="trat-tag">33 km</span></div>
				</div>
				<div class="schedule-row is-highlight">
					<div class="time">17:00</div>
					<div class="place">
						Vyhlášení výsledků<small
							>Centrum závodu, Hořovická chata — v případě deště bude upřesněno</small
						>
					</div>
					<div class="desc"><span class="trat-tag">Všechny tratě</span></div>
				</div>
				<div class="schedule-row">
					<div class="time">23:00</div>
					<div class="place">Uzávěrka závodu<small>Cholín — limit všech tratí</small></div>
					<div class="desc"><span class="trat-tag">Všechny tratě</span></div>
				</div>
			</div>
			<div class="note-box">
				<b>Prezence na trať 33 km</b>Na trať 33 km se můžete prezentovat buď v centru závodu
				(7:30–8:30 nebo 10:30–11:00) a jet na start autobusem v 11:15, nebo přímo v místě startu u
				Živohošťského mostu (11:30–11:45).
			</div>
			<p>Limit závodu: 16 hodin trať 61 km / 14 hodin trať 47 km / 11 hodin trať 33 km.</p>
		</div>

		<div class="doc-section" id="ubytovani">
			<div class="kicker">08</div>
			<h2>Ubytování</h2>
			<ul>
				<li>V pokojích na postelích, 1 noc = 250 Kč/os.</li>
				<li>
					Při případném naplnění kapacity možné přespat na karimatce ve společenské místnosti.
				</li>
			</ul>
		</div>

		<div class="doc-section" id="parkovani">
			<div class="kicker">09</div>
			<h2>Parkování</h2>
			<p>
				Pro ubytované zdarma, přímo v zázemí závodu u Hořovické chaty, Borotice ev. č. 58, Cholín (<a
					href="http://mapy.cz/s/cQvA"
					class="inline-link"
					target="_blank"
					rel="noopener">mapa</a
				>).
			</p>
			<p>Pro ostatní 50 Kč, splatných při prezenci.</p>
		</div>

		<div class="doc-section" id="stravovani">
			<div class="kicker">10</div>
			<h2>Stravování</h2>
			<div class="note-box note-box--highlight">
				<b>Polévka v cíli zdarma</b>Každý závodník dostane po doběhu v cíli teplou polévku zdarma.
			</div>
			<p>Další jídlo a pití je k dispozici v Hořovické chatě v dostatečném množství.</p>
		</div>

		<div class="doc-section" id="startovne-doc">
			<div class="kicker">11</div>
			<h2>Startovné</h2>
			<EntryFees />
			<p>Online registrace se uzavřou 20. 10. 2027 ve 23:59.</p>
			<p style="margin-top:20px;">
				Platbu proveďte prosím během 5 dnů ode dne registrace. Pokud nebude platba do 7 dnů od
				registrace na účtu pořadatele, bude vaše registrace zrušena. Při platbě uveďte variabilní
				symbol vygenerovaný při registraci.
			</p>
			<p>
				Změny v registraci do uzavření online registrací jsou možné neomezeně (závodníci mohou
				většinu změn zadat sami v registračním systému). Po tomto termínu je změna možná pouze za
				poplatek 100 Kč splatných na účet či na místě.
			</p>

			<p style="margin-top:24px; font-weight:700;">Ve startovném je zahrnuto:</p>
			<div class="included">
				<div class="chip">Startovní číslo</div>
				<div class="chip">Zapůjčení čipu</div>
				<div class="chip">Časomíra</div>
				<div class="chip">Mapa závodu</div>
				<div class="chip">Itinerář</div>
				<div class="chip">Jídlo a pití na občerstvovacích stanicích</div>
				<div class="chip">Polévka v cíli</div>
				<div class="chip">Možnost sprchy po doběhu</div>
				<div class="chip">Malý dárek při registraci do konce srpna</div>
			</div>
		</div>

		<div class="doc-section" id="vybava">
			<div class="kicker">12</div>
			<h2>Povinná výbava</h2>
			<p>Z důvodu bezpečnosti běžců musí mít u sebe každý během závodu následující položky:</p>
			<ul class="gear-list" style="border-top:1px solid var(--line-paper);">
				<li style="border-bottom:1px solid var(--line-paper); color:var(--ink);">
					<span class="n" style="color:var(--accent-ink);">01</span> NRC (alu folie)
				</li>
				<li style="border-bottom:1px solid var(--line-paper); color:var(--ink);">
					<span class="n" style="color:var(--accent-ink);">02</span> Mobilní telefon
				</li>
				<li style="border-bottom:1px solid var(--line-paper); color:var(--ink);">
					<span class="n" style="color:var(--accent-ink);">03</span> Nepromokavá bunda
				</li>
				<li style="border-bottom:1px solid var(--line-paper); color:var(--ink);">
					<span class="n" style="color:var(--accent-ink);">04</span> Čelovka (pro všechny tratě)
				</li>
				<li style="border-bottom:1px solid var(--line-paper); color:var(--ink);">
					<span class="n" style="color:var(--accent-ink);">05</span> 1× vlastní nádoba/kelímek na pití
					(pro použití na občerstvovacích stanicích)
				</li>
			</ul>
			<div class="note-box" style="border-color:var(--accent-ink);">
				<b>Penalizace</b>Chybějící povinné vybavení znamená časovou penalizaci 15 minut za každý
				chybějící kus.
			</div>
		</div>

		<div class="doc-section" id="organizator-doc">
			<div class="kicker">13</div>
			<h2>Organizátor</h2>
			<div class="kv-list">
				<div class="kv-row">
					<div class="k">Organizátor</div>
					<div class="v">Š&amp;P OUTDOOR</div>
				</div>
				<div class="kv-row">
					<div class="k">Ředitel závodu</div>
					<div class="v">Ondřej Kutiš</div>
				</div>
				<div class="kv-row">
					<div class="k">Hlavní rozhodčí</div>
					<div class="v">Jiří Dvořák</div>
				</div>
				<div class="kv-row">
					<div class="k">Organizační tým</div>
					<div class="v">Lenka Nováková, Dana Jahn Odvody, Tomáš Strašák, Ondra Hlaváč</div>
				</div>
			</div>
		</div>
	</div>
</div>

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
