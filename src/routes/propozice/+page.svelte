<svelte:head>
	<title>Propozice závodu — Slapy Trail Maniacs 2026</title>
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link
		href="https://fonts.googleapis.com/css2?family=Archivo+Black&family=Inter:wght@400;500;600;700;800;900&family=IBM+Plex+Mono:wght@400;500;600&display=swap"
		rel="stylesheet"
	/>
</svelte:head>

<!-- <div class="build-note"><b>Prototyp designu</b> — obsah odpovídá aktuálním propozicím, datum a startovné přepočítány na ročník 2026. Časový harmonogram a přesná data uzávěrek je třeba s organizátory potvrdit (viz poznámky níže).</div> -->

<header>
  <div class="wrap navrow">
    <a href="/" class="logo"><img src="data:image/png;base64,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" alt="Slapy Trail Maniacs" class="logo-img"></a>
    <nav class="links">
      <a href="/#o-zavode">O závodě</a>
      <a href="/#trate">Tratě</a>
      <a href="/propozice" class="active-link">Propozice</a>
      <a href="/startovka">Startovka</a>
      <a href="/#startovne">Startovné</a>
      <a href="/#galerie">Galerie</a>
      <a href="/#kontakt">Kontakt</a>
    </nav>
    <a href="/registrace" class="cta-btn">Registrace</a>
    <button class="navmenu-btn">☰</button>
  </div>
</header>

<section class="doc-header">
  <div class="wrap">
    <div class="kicker">Propozice závodu</div>
    <h1>Slapy Trail Maniacs 2026</h1>
    <p>Trailový terénní značený závod jednotlivců v okolí Slapské přehrady. Kompletní pravidla, harmonogram a praktické informace pro start.</p>
    <div class="doc-meta">
      <div><b>Termín:</b> sobota 24. 10. 2026</div>
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
        <div class="kv-row"><div class="k">Start závodu — 61 km</div><div class="v">Nečín, sobota 24. 10. 2026 v 7:00</div></div>
        <div class="kv-row"><div class="k">Start závodu — 47 km</div><div class="v">Cholín, sobota 24. 10. 2026 v 9:00</div></div>
        <div class="kv-row"><div class="k">Start závodu — 33 km</div><div class="v">Živohošťský most – levý břeh (občerstvovačka č. 2), sobota 24. 10. 2026 ve 12:00</div></div>
        <div class="kv-row"><div class="k">Limit závodu</div><div class="v">Cholín, sobota 24. 10. 2026 ve 23:00</div></div>
        <div class="kv-row"><div class="k">Centrum závodu</div><div class="v">Hořovická chata, část obce Cholín ev. č. 58, Borotice</div></div>
        <div class="kv-row"><div class="k">Mapa</div><div class="v"><a href="http://mapy.cz/s/feduguromo" class="inline-link" target="_blank" rel="noopener">mapy.cz/s/feduguromo</a></div></div>
      </div>
    </div>

    <div class="doc-section" id="popis">
      <div class="kicker">02</div>
      <h2>Popis závodu</h2>
      <p>Trailový terénní značený závod jednotlivců v okolí slapské přehrady. V rámci závodu budou dva měřené rychlostní úseky. V mapě, kterou obdrží závodníci na prezentaci, bude označen start a cíl těchto úseků. Měřené úseky jsou hodnoceny zvlášť mimo celkové pořadí.</p>
    </div>

    <div class="doc-section" id="delka">
      <div class="kicker">03</div>
      <h2>Délka a převýšení</h2>
      <div class="mini-track-grid">
        <div class="mini-track">
          <div class="n">61<span>km</span></div>
          <div class="d">2300+ / 2400−</div>
          <a href="https://www.dropbox.com/scl/fi/z4hc5uzz2uxvf663emklv/Slapy-Trail-Maniacs-61km.gpx?rlkey=oc8ibiib28cp4okc8y6rd4o7w&dl=1" target="_blank" rel="noopener">Stáhnout GPX ↓</a>
        </div>
        <div class="mini-track">
          <div class="n">47<span>km</span></div>
          <div class="d">1850+ / 1850−</div>
          <a href="https://www.dropbox.com/scl/fi/6wsk5bggsm9axjxthm4w7/Slapy-Trail-Maniacs-47km.gpx?rlkey=hoae24rnbbbxu9qecc89v3qba&dl=1" target="_blank" rel="noopener">Stáhnout GPX ↓</a>
        </div>
        <div class="mini-track">
          <div class="n">33<span>km</span></div>
          <div class="d">1200+ / 1150−</div>
          <a href="https://www.dropbox.com/scl/fi/5uud47ki8x086m6hybuac/Slapy-Trail-Maniacs-33km.gpx?rlkey=1y626vf24p89l5ygbsyx4rc2p&dl=1" target="_blank" rel="noopener">Stáhnout GPX ↓</a>
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
      <stop offset="0%"  stop-color="var(--accent)" stop-opacity="0.35"/>
      <stop offset="100%" stop-color="var(--accent)" stop-opacity="0"/>
    </linearGradient>
  </defs>
  <g class="grid">
    <line class="grid-line" x1="60.0" y1="24" x2="60.0" y2="356"/>
    <line class="grid-line" x1="211.7" y1="24" x2="211.7" y2="356"/>
    <line class="grid-line" x1="363.3" y1="24" x2="363.3" y2="356"/>
    <line class="grid-line" x1="515.0" y1="24" x2="515.0" y2="356"/>
    <line class="grid-line" x1="666.7" y1="24" x2="666.7" y2="356"/>
    <line class="grid-line" x1="818.4" y1="24" x2="818.4" y2="356"/>
    <line class="grid-line" x1="970.0" y1="24" x2="970.0" y2="356"/>
    <line class="grid-line" x1="975.9" y1="24" x2="975.9" y2="356"/>
    <line class="grid-line" x1="60" y1="289.6" x2="976" y2="289.6"/>
    <line class="grid-line" x1="60" y1="156.8" x2="976" y2="156.8"/>
    <line class="grid-line" x1="60" y1="24.0" x2="976" y2="24.0"/>
  </g>
  <g class="axes">
    <line class="axis-line" x1="60" y1="24" x2="60" y2="356"/>
    <line class="axis-line" x1="60" y1="356" x2="976" y2="356"/>
  </g>
  <path class="elevation-area" d="M 60.0,109.9 C 62.0,115.2 68.1,135.6 72.1,141.4 C 76.2,147.2 80.2,139.3 84.3,144.7 C 88.3,150.1 92.4,169.5 96.4,173.8 C 100.4,178.0 104.5,180.2 108.5,170.2 C 112.6,160.2 116.6,115.6 120.7,113.9 C 124.7,112.2 128.8,148.8 132.8,160.3 C 136.8,171.7 140.9,182.1 144.9,182.8 C 149.0,183.6 153.0,162.0 157.1,164.6 C 161.1,167.3 165.2,194.2 169.2,198.8 C 173.2,203.3 177.3,185.4 181.3,192.0 C 185.4,198.6 189.4,225.5 193.5,238.3 C 197.5,251.2 201.6,277.4 205.6,268.9 C 209.6,260.4 213.7,196.2 217.7,187.5 C 221.8,178.7 225.8,194.2 229.9,216.3 C 233.9,238.4 238.0,314.7 242.0,320.0 C 246.1,325.3 250.1,261.1 254.1,248.2 C 258.2,235.3 262.2,255.2 266.3,242.6 C 270.3,230.0 274.4,168.6 278.4,172.3 C 282.5,176.1 286.5,245.6 290.5,265.2 C 294.6,284.8 298.6,294.7 302.7,290.0 C 306.7,285.3 310.8,254.9 314.8,236.9 C 318.9,218.8 322.9,209.3 326.9,181.6 C 331.0,154.0 335.0,80.5 339.1,71.0 C 343.1,61.6 347.2,103.0 351.2,124.9 C 355.3,146.8 359.3,183.1 363.3,202.5 C 367.4,221.9 371.4,230.8 375.5,241.3 C 379.5,251.8 383.6,272.4 387.6,265.4 C 391.7,258.5 395.7,216.6 399.7,199.6 C 403.8,182.5 407.8,178.0 411.9,163.2 C 415.9,148.4 420.0,128.0 424.0,110.9 C 428.1,93.7 432.1,53.1 436.1,60.0 C 440.2,66.9 444.2,144.7 448.3,152.2 C 452.3,159.6 456.4,103.8 460.4,104.9 C 464.5,105.9 468.5,139.8 472.5,158.4 C 476.6,177.0 480.6,196.2 484.7,216.6 C 488.7,237.0 492.8,284.2 496.8,280.8 C 500.9,277.5 504.9,211.7 508.9,196.4 C 513.0,181.1 517.0,194.2 521.1,189.1 C 525.1,183.9 529.2,167.4 533.2,165.3 C 537.3,163.2 541.3,165.7 545.4,176.5 C 549.4,187.2 553.4,211.8 557.5,229.6 C 561.5,247.3 565.6,277.5 569.6,282.8 C 573.7,288.1 577.7,255.4 581.8,261.4 C 585.8,267.5 589.8,323.6 593.9,318.9 C 597.9,314.3 602.0,260.2 606.0,233.8 C 610.1,207.4 614.1,180.6 618.2,160.5 C 622.2,140.5 626.2,108.5 630.3,113.5 C 634.3,118.6 638.4,170.6 642.4,190.8 C 646.5,211.0 650.5,214.3 654.6,234.8 C 658.6,255.2 662.6,304.5 666.7,313.2 C 670.7,321.9 674.8,293.5 678.8,286.9 C 682.9,280.4 686.9,277.8 691.0,274.1 C 695.0,270.3 699.0,268.3 703.1,264.6 C 707.1,261.0 711.2,259.2 715.2,252.2 C 719.3,245.1 723.3,226.3 727.4,222.3 C 731.4,218.3 735.4,233.8 739.5,228.2 C 743.5,222.7 747.6,202.4 751.6,188.9 C 755.7,175.5 759.7,155.9 763.8,147.4 C 767.8,138.8 771.8,119.2 775.9,137.7 C 779.9,156.2 784.0,244.7 788.0,258.4 C 792.1,272.1 796.1,235.4 800.2,219.7 C 804.2,204.1 808.2,166.6 812.3,164.5 C 816.3,162.4 820.4,198.8 824.4,207.1 C 828.5,215.5 832.5,212.1 836.6,214.6 C 840.6,217.1 844.6,223.5 848.7,222.1 C 852.7,220.8 856.8,214.8 860.8,206.3 C 864.9,197.9 868.9,176.8 873.0,171.3 C 877.0,165.8 881.1,167.6 885.1,173.4 C 889.1,179.2 893.2,198.9 897.2,206.1 C 901.3,213.3 905.3,217.4 909.4,216.7 C 913.4,216.0 917.5,205.0 921.5,201.8 C 925.5,198.7 929.6,192.0 933.6,197.7 C 937.7,203.4 941.7,220.1 945.8,236.2 C 949.8,252.3 953.9,283.4 957.9,294.2 C 961.9,305.1 967.0,300.3 970.0,301.4 C 973.0,302.6 975.0,301.2 975.9,301.2 L 975.9,356.0 L 60.0,356.0 Z" fill="url(#elevationFill61)" stroke="none"/>
  <path class="elevation-line" d="M 60.0,109.9 C 62.0,115.2 68.1,135.6 72.1,141.4 C 76.2,147.2 80.2,139.3 84.3,144.7 C 88.3,150.1 92.4,169.5 96.4,173.8 C 100.4,178.0 104.5,180.2 108.5,170.2 C 112.6,160.2 116.6,115.6 120.7,113.9 C 124.7,112.2 128.8,148.8 132.8,160.3 C 136.8,171.7 140.9,182.1 144.9,182.8 C 149.0,183.6 153.0,162.0 157.1,164.6 C 161.1,167.3 165.2,194.2 169.2,198.8 C 173.2,203.3 177.3,185.4 181.3,192.0 C 185.4,198.6 189.4,225.5 193.5,238.3 C 197.5,251.2 201.6,277.4 205.6,268.9 C 209.6,260.4 213.7,196.2 217.7,187.5 C 221.8,178.7 225.8,194.2 229.9,216.3 C 233.9,238.4 238.0,314.7 242.0,320.0 C 246.1,325.3 250.1,261.1 254.1,248.2 C 258.2,235.3 262.2,255.2 266.3,242.6 C 270.3,230.0 274.4,168.6 278.4,172.3 C 282.5,176.1 286.5,245.6 290.5,265.2 C 294.6,284.8 298.6,294.7 302.7,290.0 C 306.7,285.3 310.8,254.9 314.8,236.9 C 318.9,218.8 322.9,209.3 326.9,181.6 C 331.0,154.0 335.0,80.5 339.1,71.0 C 343.1,61.6 347.2,103.0 351.2,124.9 C 355.3,146.8 359.3,183.1 363.3,202.5 C 367.4,221.9 371.4,230.8 375.5,241.3 C 379.5,251.8 383.6,272.4 387.6,265.4 C 391.7,258.5 395.7,216.6 399.7,199.6 C 403.8,182.5 407.8,178.0 411.9,163.2 C 415.9,148.4 420.0,128.0 424.0,110.9 C 428.1,93.7 432.1,53.1 436.1,60.0 C 440.2,66.9 444.2,144.7 448.3,152.2 C 452.3,159.6 456.4,103.8 460.4,104.9 C 464.5,105.9 468.5,139.8 472.5,158.4 C 476.6,177.0 480.6,196.2 484.7,216.6 C 488.7,237.0 492.8,284.2 496.8,280.8 C 500.9,277.5 504.9,211.7 508.9,196.4 C 513.0,181.1 517.0,194.2 521.1,189.1 C 525.1,183.9 529.2,167.4 533.2,165.3 C 537.3,163.2 541.3,165.7 545.4,176.5 C 549.4,187.2 553.4,211.8 557.5,229.6 C 561.5,247.3 565.6,277.5 569.6,282.8 C 573.7,288.1 577.7,255.4 581.8,261.4 C 585.8,267.5 589.8,323.6 593.9,318.9 C 597.9,314.3 602.0,260.2 606.0,233.8 C 610.1,207.4 614.1,180.6 618.2,160.5 C 622.2,140.5 626.2,108.5 630.3,113.5 C 634.3,118.6 638.4,170.6 642.4,190.8 C 646.5,211.0 650.5,214.3 654.6,234.8 C 658.6,255.2 662.6,304.5 666.7,313.2 C 670.7,321.9 674.8,293.5 678.8,286.9 C 682.9,280.4 686.9,277.8 691.0,274.1 C 695.0,270.3 699.0,268.3 703.1,264.6 C 707.1,261.0 711.2,259.2 715.2,252.2 C 719.3,245.1 723.3,226.3 727.4,222.3 C 731.4,218.3 735.4,233.8 739.5,228.2 C 743.5,222.7 747.6,202.4 751.6,188.9 C 755.7,175.5 759.7,155.9 763.8,147.4 C 767.8,138.8 771.8,119.2 775.9,137.7 C 779.9,156.2 784.0,244.7 788.0,258.4 C 792.1,272.1 796.1,235.4 800.2,219.7 C 804.2,204.1 808.2,166.6 812.3,164.5 C 816.3,162.4 820.4,198.8 824.4,207.1 C 828.5,215.5 832.5,212.1 836.6,214.6 C 840.6,217.1 844.6,223.5 848.7,222.1 C 852.7,220.8 856.8,214.8 860.8,206.3 C 864.9,197.9 868.9,176.8 873.0,171.3 C 877.0,165.8 881.1,167.6 885.1,173.4 C 889.1,179.2 893.2,198.9 897.2,206.1 C 901.3,213.3 905.3,217.4 909.4,216.7 C 913.4,216.0 917.5,205.0 921.5,201.8 C 925.5,198.7 929.6,192.0 933.6,197.7 C 937.7,203.4 941.7,220.1 945.8,236.2 C 949.8,252.3 953.9,283.4 957.9,294.2 C 961.9,305.1 967.0,300.3 970.0,301.4 C 973.0,302.6 975.0,301.2 975.9,301.2" fill="none"/>
  <g class="stations">
    <!-- Občerstvovací stanice 1 — Rozhledna, 18.2. km trati -->
    <line class="station-dropline" x1="336.0" y1="49.2" x2="336.0" y2="356.0"/>
    <g class="station-icon" transform="translate(336.0,49.2)">
      <circle class="station-icon-bg" r="9"/>
      <path class="station-icon-glyph" d="M 0,-4.6 C 2.4,-1.6 3.5,0.2 3.5,1.8 C 3.5,3.8 1.9,5.4 0,5.4 C -1.9,5.4 -3.5,3.8 -3.5,1.8 C -3.5,0.2 -2.4,-1.6 0,-4.6 Z"/>
    </g>
    <!-- Občerstvovací stanice 2 — Živohošťský most, 28.0. km trati -->
    <line class="station-dropline" x1="484.7" y1="209.9" x2="484.7" y2="356.0"/>
    <g class="station-icon" transform="translate(484.7,209.9)">
      <circle class="station-icon-bg" r="9"/>
      <path class="station-icon-glyph" d="M 0,-4.6 C 2.4,-1.6 3.5,0.2 3.5,1.8 C 3.5,3.8 1.9,5.4 0,5.4 C -1.9,5.4 -3.5,3.8 -3.5,1.8 C -3.5,0.2 -2.4,-1.6 0,-4.6 Z"/>
    </g>
    <!-- Občerstvovací stanice 3 — Ostromeč, 45.5. km trati -->
    <line class="station-dropline" x1="750.1" y1="196.2" x2="750.1" y2="356.0"/>
    <g class="station-icon" transform="translate(750.1,196.2)">
      <circle class="station-icon-bg" r="9"/>
      <path class="station-icon-glyph" d="M 0,-4.6 C 2.4,-1.6 3.5,0.2 3.5,1.8 C 3.5,3.8 1.9,5.4 0,5.4 C -1.9,5.4 -3.5,3.8 -3.5,1.8 C -3.5,0.2 -2.4,-1.6 0,-4.6 Z"/>
    </g>
    <!-- Občerstvovací stanice 4 — Křepenice (jen pití), 54.0. km trati -->
    <line class="station-dropline" x1="879.0" y1="166.4" x2="879.0" y2="356.0"/>
    <g class="station-icon" transform="translate(879.0,166.4)">
      <circle class="station-icon-bg" r="9"/>
      <path class="station-icon-glyph" d="M 0,-4.6 C 2.4,-1.6 3.5,0.2 3.5,1.8 C 3.5,3.8 1.9,5.4 0,5.4 C -1.9,5.4 -3.5,3.8 -3.5,1.8 C -3.5,0.2 -2.4,-1.6 0,-4.6 Z"/>
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
      <stop offset="0%"  stop-color="var(--accent)" stop-opacity="0.35"/>
      <stop offset="100%" stop-color="var(--accent)" stop-opacity="0"/>
    </linearGradient>
  </defs>
  <g class="grid">
    <line class="grid-line" x1="60.0" y1="24" x2="60.0" y2="356"/>
    <line class="grid-line" x1="256.5" y1="24" x2="256.5" y2="356"/>
    <line class="grid-line" x1="453.0" y1="24" x2="453.0" y2="356"/>
    <line class="grid-line" x1="649.4" y1="24" x2="649.4" y2="356"/>
    <line class="grid-line" x1="845.9" y1="24" x2="845.9" y2="356"/>
    <line class="grid-line" x1="976.0" y1="24" x2="976.0" y2="356"/>
    <line class="grid-line" x1="60" y1="289.6" x2="976" y2="289.6"/>
    <line class="grid-line" x1="60" y1="156.8" x2="976" y2="156.8"/>
    <line class="grid-line" x1="60" y1="24.0" x2="976" y2="24.0"/>
  </g>
  <g class="axes">
    <line class="axis-line" x1="60" y1="24" x2="60" y2="356"/>
    <line class="axis-line" x1="60" y1="356" x2="976" y2="356"/>
  </g>
  <path class="elevation-area" d="M 60.0,253.9 C 62.6,243.1 70.5,186.2 75.7,189.5 C 81.0,192.8 86.2,259.2 91.4,273.7 C 96.7,288.2 101.9,283.8 107.2,276.5 C 112.4,269.1 117.6,252.8 122.9,229.6 C 128.1,206.4 133.4,161.5 138.6,137.1 C 143.8,112.8 149.1,83.0 154.3,83.6 C 159.5,84.2 164.8,117.9 170.0,140.9 C 175.3,163.9 180.5,203.7 185.7,221.6 C 191.0,239.5 196.2,248.4 201.5,248.2 C 206.7,247.9 211.9,226.7 217.2,220.3 C 222.4,213.8 227.7,221.8 232.9,209.4 C 238.1,197.0 243.4,164.7 248.6,145.9 C 253.9,127.1 259.1,108.0 264.3,96.8 C 269.6,85.5 274.8,69.2 280.1,78.4 C 285.3,87.7 290.5,148.2 295.8,152.2 C 301.0,156.1 306.3,98.6 311.5,102.1 C 316.7,105.5 322.0,150.4 327.2,172.9 C 332.5,195.3 337.7,222.8 342.9,236.9 C 348.2,251.0 353.4,264.3 358.6,257.3 C 363.9,250.4 369.1,207.8 374.4,195.2 C 379.6,182.6 384.8,187.6 390.1,181.9 C 395.3,176.2 400.6,160.5 405.8,160.8 C 411.0,161.0 416.3,171.3 421.5,183.4 C 426.8,195.4 432.0,221.2 437.2,233.3 C 442.5,245.4 447.7,246.8 453.0,255.7 C 458.2,264.7 463.4,279.0 468.7,287.1 C 473.9,295.2 479.2,318.2 484.4,304.5 C 489.6,290.8 494.9,230.1 500.1,205.0 C 505.4,179.9 510.6,167.3 515.8,153.9 C 521.1,140.4 526.3,116.7 531.5,124.3 C 536.8,131.8 542.0,178.6 547.3,199.0 C 552.5,219.5 557.7,229.0 563.0,246.8 C 568.2,264.7 573.5,300.7 578.7,306.3 C 583.9,311.9 589.2,286.0 594.4,280.4 C 599.7,274.9 604.9,275.7 610.1,273.0 C 615.4,270.3 620.6,267.7 625.9,264.4 C 631.1,261.0 636.3,260.9 641.6,252.9 C 646.8,245.0 652.1,220.6 657.3,216.6 C 662.5,212.5 667.8,234.5 673.0,228.8 C 678.3,223.1 683.5,197.0 688.7,182.4 C 694.0,167.9 699.2,148.1 704.5,141.4 C 709.7,134.7 714.9,119.5 720.2,142.5 C 725.4,165.4 730.6,270.9 735.9,279.0 C 741.1,287.0 746.4,210.1 751.6,190.8 C 756.8,171.5 762.1,155.7 767.3,163.0 C 772.6,170.3 777.8,226.4 783.0,234.6 C 788.3,242.8 793.5,218.1 798.8,212.3 C 804.0,206.5 809.2,202.9 814.5,200.0 C 819.7,197.0 825.0,199.0 830.2,194.4 C 835.4,189.8 840.7,175.0 845.9,172.3 C 851.2,169.6 856.4,170.5 861.6,178.2 C 866.9,185.9 872.1,213.3 877.4,218.7 C 882.6,224.1 887.8,213.2 893.1,210.7 C 898.3,208.2 903.5,205.2 908.8,203.5 C 914.0,201.9 919.3,192.8 924.5,200.6 C 929.7,208.5 935.0,233.4 940.2,250.7 C 945.5,268.0 950.7,296.0 955.9,304.2 C 961.2,312.4 968.3,300.6 971.7,300.1 C 975.0,299.6 975.3,301.0 976.0,301.2 L 976.0,356.0 L 60.0,356.0 Z" fill="url(#elevationFill47)" stroke="none"/>
  <path class="elevation-line" d="M 60.0,253.9 C 62.6,243.1 70.5,186.2 75.7,189.5 C 81.0,192.8 86.2,259.2 91.4,273.7 C 96.7,288.2 101.9,283.8 107.2,276.5 C 112.4,269.1 117.6,252.8 122.9,229.6 C 128.1,206.4 133.4,161.5 138.6,137.1 C 143.8,112.8 149.1,83.0 154.3,83.6 C 159.5,84.2 164.8,117.9 170.0,140.9 C 175.3,163.9 180.5,203.7 185.7,221.6 C 191.0,239.5 196.2,248.4 201.5,248.2 C 206.7,247.9 211.9,226.7 217.2,220.3 C 222.4,213.8 227.7,221.8 232.9,209.4 C 238.1,197.0 243.4,164.7 248.6,145.9 C 253.9,127.1 259.1,108.0 264.3,96.8 C 269.6,85.5 274.8,69.2 280.1,78.4 C 285.3,87.7 290.5,148.2 295.8,152.2 C 301.0,156.1 306.3,98.6 311.5,102.1 C 316.7,105.5 322.0,150.4 327.2,172.9 C 332.5,195.3 337.7,222.8 342.9,236.9 C 348.2,251.0 353.4,264.3 358.6,257.3 C 363.9,250.4 369.1,207.8 374.4,195.2 C 379.6,182.6 384.8,187.6 390.1,181.9 C 395.3,176.2 400.6,160.5 405.8,160.8 C 411.0,161.0 416.3,171.3 421.5,183.4 C 426.8,195.4 432.0,221.2 437.2,233.3 C 442.5,245.4 447.7,246.8 453.0,255.7 C 458.2,264.7 463.4,279.0 468.7,287.1 C 473.9,295.2 479.2,318.2 484.4,304.5 C 489.6,290.8 494.9,230.1 500.1,205.0 C 505.4,179.9 510.6,167.3 515.8,153.9 C 521.1,140.4 526.3,116.7 531.5,124.3 C 536.8,131.8 542.0,178.6 547.3,199.0 C 552.5,219.5 557.7,229.0 563.0,246.8 C 568.2,264.7 573.5,300.7 578.7,306.3 C 583.9,311.9 589.2,286.0 594.4,280.4 C 599.7,274.9 604.9,275.7 610.1,273.0 C 615.4,270.3 620.6,267.7 625.9,264.4 C 631.1,261.0 636.3,260.9 641.6,252.9 C 646.8,245.0 652.1,220.6 657.3,216.6 C 662.5,212.5 667.8,234.5 673.0,228.8 C 678.3,223.1 683.5,197.0 688.7,182.4 C 694.0,167.9 699.2,148.1 704.5,141.4 C 709.7,134.7 714.9,119.5 720.2,142.5 C 725.4,165.4 730.6,270.9 735.9,279.0 C 741.1,287.0 746.4,210.1 751.6,190.8 C 756.8,171.5 762.1,155.7 767.3,163.0 C 772.6,170.3 777.8,226.4 783.0,234.6 C 788.3,242.8 793.5,218.1 798.8,212.3 C 804.0,206.5 809.2,202.9 814.5,200.0 C 819.7,197.0 825.0,199.0 830.2,194.4 C 835.4,189.8 840.7,175.0 845.9,172.3 C 851.2,169.6 856.4,170.5 861.6,178.2 C 866.9,185.9 872.1,213.3 877.4,218.7 C 882.6,224.1 887.8,213.2 893.1,210.7 C 898.3,208.2 903.5,205.2 908.8,203.5 C 914.0,201.9 919.3,192.8 924.5,200.6 C 929.7,208.5 935.0,233.4 940.2,250.7 C 945.5,268.0 950.7,296.0 955.9,304.2 C 961.2,312.4 968.3,300.6 971.7,300.1 C 975.0,299.6 975.3,301.0 976.0,301.2" fill="none"/>
  <g class="stations">
    <!-- Občerstvovací stanice 1 — Rozhledna, 4.2. km trati -->
    <line class="station-dropline" x1="142.5" y1="106.3" x2="142.5" y2="356.0"/>
    <g class="station-icon" transform="translate(142.5,106.3)">
      <circle class="station-icon-bg" r="9"/>
      <path class="station-icon-glyph" d="M 0,-4.6 C 2.4,-1.6 3.5,0.2 3.5,1.8 C 3.5,3.8 1.9,5.4 0,5.4 C -1.9,5.4 -3.5,3.8 -3.5,1.8 C -3.5,0.2 -2.4,-1.6 0,-4.6 Z"/>
    </g>
    <!-- Občerstvovací stanice 2 — Živohošťský most, 14.0. km trati -->
    <line class="station-dropline" x1="335.1" y1="199.3" x2="335.1" y2="356.0"/>
    <g class="station-icon" transform="translate(335.1,199.3)">
      <circle class="station-icon-bg" r="9"/>
      <path class="station-icon-glyph" d="M 0,-4.6 C 2.4,-1.6 3.5,0.2 3.5,1.8 C 3.5,3.8 1.9,5.4 0,5.4 C -1.9,5.4 -3.5,3.8 -3.5,1.8 C -3.5,0.2 -2.4,-1.6 0,-4.6 Z"/>
    </g>
    <!-- Občerstvovací stanice 3 — Ostromeč, 31.5. km trati -->
    <line class="station-dropline" x1="678.9" y1="211.9" x2="678.9" y2="356.0"/>
    <g class="station-icon" transform="translate(678.9,211.9)">
      <circle class="station-icon-bg" r="9"/>
      <path class="station-icon-glyph" d="M 0,-4.6 C 2.4,-1.6 3.5,0.2 3.5,1.8 C 3.5,3.8 1.9,5.4 0,5.4 C -1.9,5.4 -3.5,3.8 -3.5,1.8 C -3.5,0.2 -2.4,-1.6 0,-4.6 Z"/>
    </g>
    <!-- Občerstvovací stanice 4 — Křepenice (jen pití), 40.0. km trati -->
    <line class="station-dropline" x1="845.9" y1="161.0" x2="845.9" y2="356.0"/>
    <g class="station-icon" transform="translate(845.9,161.0)">
      <circle class="station-icon-bg" r="9"/>
      <path class="station-icon-glyph" d="M 0,-4.6 C 2.4,-1.6 3.5,0.2 3.5,1.8 C 3.5,3.8 1.9,5.4 0,5.4 C -1.9,5.4 -3.5,3.8 -3.5,1.8 C -3.5,0.2 -2.4,-1.6 0,-4.6 Z"/>
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
      <stop offset="0%"  stop-color="var(--accent)" stop-opacity="0.35"/>
      <stop offset="100%" stop-color="var(--accent)" stop-opacity="0"/>
    </linearGradient>
  </defs>
  <g class="grid">
    <line class="grid-line" x1="60.0" y1="24" x2="60.0" y2="356"/>
    <line class="grid-line" x1="346.2" y1="24" x2="346.2" y2="356"/>
    <line class="grid-line" x1="632.4" y1="24" x2="632.4" y2="356"/>
    <line class="grid-line" x1="918.7" y1="24" x2="918.7" y2="356"/>
    <line class="grid-line" x1="975.9" y1="24" x2="975.9" y2="356"/>
    <line class="grid-line" x1="60" y1="289.6" x2="976" y2="289.6"/>
    <line class="grid-line" x1="60" y1="156.8" x2="976" y2="156.8"/>
    <line class="grid-line" x1="60" y1="24.0" x2="976" y2="24.0"/>
  </g>
  <g class="axes">
    <line class="axis-line" x1="60" y1="24" x2="60" y2="356"/>
    <line class="axis-line" x1="60" y1="356" x2="976" y2="356"/>
  </g>
  <path class="elevation-area" d="M 60.0,303.9 C 63.8,292.0 75.3,252.8 82.9,232.1 C 90.5,211.4 98.2,190.1 105.8,179.8 C 113.4,169.4 121.1,172.9 128.7,169.9 C 136.3,167.0 144.0,156.7 151.6,162.1 C 159.2,167.5 166.9,185.8 174.5,202.4 C 182.1,219.0 189.8,256.2 197.4,261.7 C 205.0,267.2 212.7,227.0 220.3,235.2 C 227.9,243.3 235.6,303.2 243.2,310.7 C 250.8,318.2 258.4,301.8 266.1,280.3 C 273.7,258.8 281.3,207.8 289.0,181.8 C 296.6,155.7 304.2,127.5 311.9,124.0 C 319.5,120.5 327.1,145.6 334.8,160.5 C 342.4,175.5 350.0,199.1 357.7,213.8 C 365.3,228.5 372.9,234.5 380.6,248.7 C 388.2,262.9 395.8,294.8 403.5,298.9 C 411.1,303.0 418.7,279.5 426.4,273.3 C 434.0,267.0 441.6,263.7 449.3,261.4 C 456.9,259.2 464.5,261.9 472.2,259.9 C 479.8,257.8 487.4,255.5 495.1,249.1 C 502.7,242.7 510.3,226.7 518.0,221.3 C 525.6,216.0 533.2,225.6 540.9,216.8 C 548.5,208.0 556.1,181.7 563.8,168.5 C 571.4,155.3 579.0,131.5 586.7,137.7 C 594.3,143.9 601.9,181.3 609.6,205.7 C 617.2,230.1 624.8,290.0 632.4,284.0 C 640.1,278.0 647.7,189.2 655.3,169.8 C 663.0,150.4 670.6,155.3 678.2,167.7 C 685.9,180.1 693.5,238.7 701.1,244.3 C 708.8,249.9 716.4,209.8 724.0,201.2 C 731.7,192.5 739.3,195.5 746.9,192.3 C 754.6,189.0 762.2,184.9 769.8,181.8 C 777.5,178.6 785.1,172.9 792.7,173.5 C 800.4,174.1 808.0,177.1 815.6,185.4 C 823.3,193.6 830.9,219.9 838.5,222.9 C 846.2,226.0 853.8,206.6 861.4,203.5 C 869.1,200.5 876.7,203.3 884.3,204.6 C 892.0,205.9 899.6,200.3 907.2,211.5 C 914.9,222.7 922.5,256.2 930.1,271.8 C 937.8,287.4 945.4,300.4 953.0,305.3 C 960.7,310.2 972.1,301.8 975.9,301.2 L 975.9,356.0 L 60.0,356.0 Z" fill="url(#elevationFill33)" stroke="none"/>
  <path class="elevation-line" d="M 60.0,303.9 C 63.8,292.0 75.3,252.8 82.9,232.1 C 90.5,211.4 98.2,190.1 105.8,179.8 C 113.4,169.4 121.1,172.9 128.7,169.9 C 136.3,167.0 144.0,156.7 151.6,162.1 C 159.2,167.5 166.9,185.8 174.5,202.4 C 182.1,219.0 189.8,256.2 197.4,261.7 C 205.0,267.2 212.7,227.0 220.3,235.2 C 227.9,243.3 235.6,303.2 243.2,310.7 C 250.8,318.2 258.4,301.8 266.1,280.3 C 273.7,258.8 281.3,207.8 289.0,181.8 C 296.6,155.7 304.2,127.5 311.9,124.0 C 319.5,120.5 327.1,145.6 334.8,160.5 C 342.4,175.5 350.0,199.1 357.7,213.8 C 365.3,228.5 372.9,234.5 380.6,248.7 C 388.2,262.9 395.8,294.8 403.5,298.9 C 411.1,303.0 418.7,279.5 426.4,273.3 C 434.0,267.0 441.6,263.7 449.3,261.4 C 456.9,259.2 464.5,261.9 472.2,259.9 C 479.8,257.8 487.4,255.5 495.1,249.1 C 502.7,242.7 510.3,226.7 518.0,221.3 C 525.6,216.0 533.2,225.6 540.9,216.8 C 548.5,208.0 556.1,181.7 563.8,168.5 C 571.4,155.3 579.0,131.5 586.7,137.7 C 594.3,143.9 601.9,181.3 609.6,205.7 C 617.2,230.1 624.8,290.0 632.4,284.0 C 640.1,278.0 647.7,189.2 655.3,169.8 C 663.0,150.4 670.6,155.3 678.2,167.7 C 685.9,180.1 693.5,238.7 701.1,244.3 C 708.8,249.9 716.4,209.8 724.0,201.2 C 731.7,192.5 739.3,195.5 746.9,192.3 C 754.6,189.0 762.2,184.9 769.8,181.8 C 777.5,178.6 785.1,172.9 792.7,173.5 C 800.4,174.1 808.0,177.1 815.6,185.4 C 823.3,193.6 830.9,219.9 838.5,222.9 C 846.2,226.0 853.8,206.6 861.4,203.5 C 869.1,200.5 876.7,203.3 884.3,204.6 C 892.0,205.9 899.6,200.3 907.2,211.5 C 914.9,222.7 922.5,256.2 930.1,271.8 C 937.8,287.4 945.4,300.4 953.0,305.3 C 960.7,310.2 972.1,301.8 975.9,301.2" fill="none"/>
  <g class="stations">
    <!-- Občerstvovací stanice 1 — Ostromeč, 17.5. km trati -->
    <line class="station-dropline" x1="560.9" y1="180.0" x2="560.9" y2="356.0"/>
    <g class="station-icon" transform="translate(560.9,180.0)">
      <circle class="station-icon-bg" r="9"/>
      <path class="station-icon-glyph" d="M 0,-4.6 C 2.4,-1.6 3.5,0.2 3.5,1.8 C 3.5,3.8 1.9,5.4 0,5.4 C -1.9,5.4 -3.5,3.8 -3.5,1.8 C -3.5,0.2 -2.4,-1.6 0,-4.6 Z"/>
    </g>
    <!-- Občerstvovací stanice 2 — Křepenice (jen pití), 26.0. km trati -->
    <line class="station-dropline" x1="804.2" y1="186.7" x2="804.2" y2="356.0"/>
    <g class="station-icon" transform="translate(804.2,186.7)">
      <circle class="station-icon-bg" r="9"/>
      <path class="station-icon-glyph" d="M 0,-4.6 C 2.4,-1.6 3.5,0.2 3.5,1.8 C 3.5,3.8 1.9,5.4 0,5.4 C -1.9,5.4 -3.5,3.8 -3.5,1.8 C -3.5,0.2 -2.4,-1.6 0,-4.6 Z"/>
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
      <p>Dokončení jakékoliv tratě Slapy Trail Maniacs přispěje k vašemu UTMB indexu. Více informací naleznete přímo na webu <a href="#" class="inline-link">UTMB</a>.</p>
      <div class="doc-utmb-row">
        <div class="item"><span class="chip-badge"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 676.89 218.65"><g><g><polygon fill="#fc5a00" points="0 204.5 417.62 204.5 463.57 17.39 0 17.39 0 204.5"/><polygon fill="#000d44" points="514.22 122.43 497.45 204.75 451.16 204.75 498.52 11.91 561.19 120.41 617.8 0 676.88 204.75 628.83 204.75 606.52 117.05 561.19 218.65 514.22 122.43"/><path fill="#000d44" d="M102.72,76.21l-2,13,9.35-.75c23.21-1.81,40.24,17.18,40.24,40.69a39.59,39.59,0,0,1-14.62,30.75c-9,7.24-21.85,9.5-33.16,9.5-13,0-26.07-3.17-37.08-10.25l4.37-27.89c8.74,7.84,19.9,13.12,31.66,13.12,9.34,0,18.08-6.79,18.08-16.73,0-13.72-13.11-19.45-24.87-19.45A51.19,51.19,0,0,0,73,112.83L83,51.19h59.08v25Z"/><path fill="#000d44" d="M260.67,108c0,29.54-14.32,61.35-48.23,61.35S164.21,137.55,164.21,108s14.47-61.34,48.23-61.34S260.67,78.47,260.67,108Zm-67.07-.15c0,11,3.62,35.42,18.84,35.42s18.84-24.42,18.84-35.42-3.62-35.12-18.84-35.12S193.6,96.86,193.6,107.86Z"/><path fill="#000d44" d="M339.34,51.19H376L330.75,105,380,164.84H341.75l-38.13-49.29h-.3v49.29H273.77V51.19h29.55V98.06h.3Z"/></g></g></svg></span> Trať 61 km</div>
        <div class="item"><span class="chip-badge"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 676.89 218.65"><g><g><polygon fill="#fc5a00" points="0 204.5 417.62 204.5 463.57 17.39 0 17.39 0 204.5"/><polygon fill="#000d44" points="514.22 122.43 497.45 204.75 451.16 204.75 498.52 11.91 561.19 120.41 617.8 0 676.88 204.75 628.83 204.75 606.52 117.05 561.19 218.65 514.22 122.43"/><path fill="#000d44" d="M102.72,76.21l-2,13,9.35-.75c23.21-1.81,40.24,17.18,40.24,40.69a39.59,39.59,0,0,1-14.62,30.75c-9,7.24-21.85,9.5-33.16,9.5-13,0-26.07-3.17-37.08-10.25l4.37-27.89c8.74,7.84,19.9,13.12,31.66,13.12,9.34,0,18.08-6.79,18.08-16.73,0-13.72-13.11-19.45-24.87-19.45A51.19,51.19,0,0,0,73,112.83L83,51.19h59.08v25Z"/><path fill="#000d44" d="M260.67,108c0,29.54-14.32,61.35-48.23,61.35S164.21,137.55,164.21,108s14.47-61.34,48.23-61.34S260.67,78.47,260.67,108Zm-67.07-.15c0,11,3.62,35.42,18.84,35.42s18.84-24.42,18.84-35.42-3.62-35.12-18.84-35.12S193.6,96.86,193.6,107.86Z"/><path fill="#000d44" d="M339.34,51.19H376L330.75,105,380,164.84H341.75l-38.13-49.29h-.3v49.29H273.77V51.19h29.55V98.06h.3Z"/></g></g></svg></span> Trať 47 km</div>
        <div class="item"><span class="chip-badge"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 676.89 218.65"><g><g><polygon fill="#ffff00" points="0 204.5 417.62 204.5 463.57 17.39 0 17.39 0 204.5"/><polygon fill="#000d44" points="514.22 122.43 497.45 204.75 451.16 204.75 498.52 11.91 561.19 120.41 617.8 0 676.88 204.75 628.83 204.75 606.52 117.05 561.19 218.65 514.22 122.43"/><path fill="#000d44" d="M153.44,139.81v25H62.1l46.42-50.5c6.63-7.23,13-17.48,13-27.88,0-7.24-5.13-14.77-13-14.77S96.16,77.87,96.16,85.55a27.62,27.62,0,0,0,.46,4.83H64.06C65,64.3,81.54,46.67,108.37,46.67c23.82,0,43.87,15.67,43.87,40.39,0,16.28-6.79,25.77-18.39,36.33l-17.64,16.42Z"/><path fill="#000d44" d="M260.45,108c0,29.54-14.32,61.35-48.24,61.35S164,137.55,164,108s14.47-61.34,48.23-61.34S260.45,78.47,260.45,108Zm-67.08-.15c0,11,3.62,35.42,18.84,35.42s18.84-24.42,18.84-35.42-3.61-35.12-18.84-35.12S193.37,96.86,193.37,107.86Z"/><path fill="#000d44" d="M339.11,51.19h36.63L330.52,105l49.29,59.84H341.53l-38.14-49.29h-.3v49.29H273.55V51.19h29.54V98.06h.3Z"/></g></g></svg></span> Trať 33 km</div>
      </div>
    </div>

    <div class="doc-section" id="doprava">
      <div class="kicker">06</div>
      <h2>Převoz na start závodu</h2>
      <p>Zajištěn autobusy dle harmonogramu ze zázemí závodu pro trať 61 km. Převoz bude trvat cca 20 minut.</p>
      <p>Zajištěn autobusy dle harmonogramu ze zázemí závodu pro trať 33 km. Převoz bude trvat cca 20 minut.</p>
    </div>

    <div class="doc-section" id="harmonogram">
      <div class="kicker">07</div>
      <h2>Časový harmonogram</h2>
      <p>Pátek 23. 10. 2026</p>
      <div class="schedule-list doc-schedule">
        <div class="schedule-row">
          <div class="time">18:00<span>–21:45</span></div>
          <div class="place">Prezence<small>Centrum závodu, Hořovická chata</small></div>
          <div class="desc"><span class="trat-tag">Všechny tratě</span></div>
        </div>
      </div>
      <p>Sobota 24. 10. 2026</p>
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
          <div class="desc"><span class="trat-tag">47 km</span><span class="trat-tag">33 km</span></div>
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
          <div class="place">Převoz na start<small>Autobus z centra závodu k Živohošťskému mostu</small></div>
          <div class="desc"><span class="trat-tag">33 km</span></div>
        </div>
        <div class="schedule-row">
          <div class="time">11:30<span>–11:45</span></div>
          <div class="place">Prezence v místě startu<small>Živohošťský most – levý břeh</small></div>
          <div class="desc"><span class="trat-tag">33 km</span></div>
        </div>
        <div class="schedule-row is-start">
          <div class="time">12:00</div>
          <div class="place">Start<small>Živohošťský most – levý břeh</small></div>
          <div class="desc"><span class="trat-tag">33 km</span></div>
        </div>
        <div class="schedule-row is-highlight">
          <div class="time">17:00</div>
          <div class="place">Vyhlášení výsledků<small>Centrum závodu, Hořovická chata — v případě deště bude upřesněno</small></div>
          <div class="desc"><span class="trat-tag">Všechny tratě</span></div>
        </div>
        <div class="schedule-row">
          <div class="time">23:00</div>
          <div class="place">Uzávěrka závodu<small>Cholín — limit všech tratí</small></div>
          <div class="desc"><span class="trat-tag">Všechny tratě</span></div>
        </div>
      </div>
      <div class="note-box"><b>Prezence na trať 33 km</b>Na trať 33 km se můžete prezentovat buď v centru závodu (7:30–8:30 nebo 10:30–11:00) a jet na start autobusem v 11:15, nebo přímo v místě startu u Živohošťského mostu (11:30–11:45).</div>
      <p>Limit závodu: 16 hodin trať 61 km / 14 hodin trať 47 km / 11 hodin trať 33 km.</p>
    </div>

    <div class="doc-section" id="ubytovani">
      <div class="kicker">08</div>
      <h2>Ubytování</h2>
      <ul>
        <li>V pokojích na postelích, 1 noc = 250 Kč/os.</li>
        <li>Při případném naplnění kapacity možné přespat na karimatce ve společenské místnosti.</li>
      </ul>
    </div>

    <div class="doc-section" id="parkovani">
      <div class="kicker">09</div>
      <h2>Parkování</h2>
      <p>Pro ubytované zdarma, přímo v zázemí závodu u Hořovické chaty, Borotice ev. č. 58, Cholín (<a href="http://mapy.cz/s/cQvA" class="inline-link" target="_blank" rel="noopener">mapa</a>).</p>
      <p>Pro ostatní 50 Kč, splatných při prezenci.</p>
    </div>

    <div class="doc-section" id="stravovani">
      <div class="kicker">10</div>
      <h2>Stravování</h2>
      <div class="note-box note-box--highlight"><b>Polévka v cíli zdarma</b>Každý závodník dostane po doběhu v cíli teplou polévku zdarma.</div>
      <p>Další jídlo a pití je k dispozici v Hořovické chatě v dostatečném množství.</p>
    </div>

    <div class="doc-section" id="startovne-doc">
      <div class="kicker">11</div>
      <h2>Startovné</h2>
      <table class="price-table">
        <thead>
          <tr><th>Trať</th><th>Do 30. 9. 2026</th><th>Po 30. 9. 2026 / na místě</th></tr>
        </thead>
        <tbody>
          <tr><td class="dist">61 km</td><td class="num hi">700 Kč</td><td class="num">950 Kč</td></tr>
          <tr><td class="dist">47 km</td><td class="num hi">600 Kč</td><td class="num">850 Kč</td></tr>
          <tr><td class="dist">33 km</td><td class="num hi">550 Kč</td><td class="num">750 Kč</td></tr>
        </tbody>
      </table>
      <p style="margin-top:20px;">Platbu proveďte prosím během následujících 5 dnů. Pokud nebude platba do 7 dnů od registrace na účtu pořadatele, bude vaše registrace zrušena. Při platbě uveďte variabilní symbol vygenerovaný při registraci.</p>
      <p>Změny v registraci do 18. 10. 2026 jsou možné neomezeně (závodníci mohou většinu změn zadat sami v registračním systému). Po tomto termínu je změna možná pouze za poplatek 100 Kč splatných na účet či na místě.</p>

      <div class="note-box"><b>Pro účastníky ze Slovenska</b>Platby v eurách: 61 km — 29 € do 30. 9. 2026 / 39 € po tomto termínu a na místě. 47 km — 25 € / 35 €. 33 km — 23 € / 31 €.</div>

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
        <li style="border-bottom:1px solid var(--line-paper); color:var(--ink);"><span class="n" style="color:var(--accent-ink);">01</span> NRC (alu folie)</li>
        <li style="border-bottom:1px solid var(--line-paper); color:var(--ink);"><span class="n" style="color:var(--accent-ink);">02</span> Mobilní telefon</li>
        <li style="border-bottom:1px solid var(--line-paper); color:var(--ink);"><span class="n" style="color:var(--accent-ink);">03</span> Nepromokavá bunda</li>
        <li style="border-bottom:1px solid var(--line-paper); color:var(--ink);"><span class="n" style="color:var(--accent-ink);">04</span> Čelovka (pro všechny tratě)</li>
        <li style="border-bottom:1px solid var(--line-paper); color:var(--ink);"><span class="n" style="color:var(--accent-ink);">05</span> 1× vlastní nádoba/kelímek na pití (pro použití na občerstvovacích stanicích)</li>
      </ul>
      <div class="note-box" style="border-color:var(--accent-ink);"><b>Penalizace</b>Chybějící povinné vybavení znamená časovou penalizaci 15 minut za každý chybějící kus.</div>
    </div>

    <div class="doc-section" id="organizator-doc">
      <div class="kicker">13</div>
      <h2>Organizátor</h2>
      <div class="kv-list">
        <div class="kv-row"><div class="k">Organizátor</div><div class="v">Š&amp;P OUTDOOR</div></div>
        <div class="kv-row"><div class="k">Ředitel závodu</div><div class="v">Ondřej Kutiš</div></div>
        <div class="kv-row"><div class="k">Hlavní rozhodčí</div><div class="v">Jiří Dvořák</div></div>
        <div class="kv-row"><div class="k">Organizační tým</div><div class="v">Lenka Nováková, Dana Jahn Odvody, Tomáš Strašák, Ondra Hlaváč</div></div>
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
      <div>© 2026 Š&amp;P Outdoor, z. s. — Všechna práva vyhrazena.</div>
      <div class="mono">Slapská přehrada · Borotice · Cholín</div>
    </div>
  </div>
</footer>
