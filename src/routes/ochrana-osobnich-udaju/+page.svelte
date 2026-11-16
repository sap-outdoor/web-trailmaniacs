<script lang="ts">
	import LegalPage from '$lib/LegalPage.svelte';
	import OrganizerDetails from '$lib/OrganizerDetails.svelte';

	const sections = [
		{ id: 'spravce', label: 'Správce a kontakt' },
		{ id: 'udaje', label: 'Jaké údaje získáváme' },
		{ id: 'ucely', label: 'Účely a právní základy' },
		{ id: 'nouzovy-kontakt', label: 'Nouzový kontakt' },
		{ id: 'zverejnovani', label: 'Startovka a výsledky' },
		{ id: 'fotografie', label: 'Fotografie a video' },
		{ id: 'prijemci', label: 'Komu údaje předáváme' },
		{ id: 'uchovani', label: 'Doba uchování' },
		{ id: 'prava', label: 'Vaše práva' }
	];
</script>

<LegalPage
	title="Ochrana osobních údajů"
	description="Informace podle GDPR pro účastníky závodu Slapy Trail Maniacs a návštěvníky webu trailmaniacs.cz."
	{sections}
>
	<section class="doc-section" id="spravce">
		<h2>Správce a kontakt</h2>
		<p>
			Správcem vašich osobních údajů je pořadatel závodu, spolek Š&amp;P - outdoor z.s. Tato stránka
			vysvětluje zpracování údajů podle nařízení (EU) 2016/679 (GDPR).
		</p>
		<p>
			Podmínky účasti upravují <a href="/pravidla" class="inline-link">oficiální pravidla závodu</a
			>. Tato stránka je doplňuje informacemi o zpracování osobních údajů a právech účastníků;
			nezavádí další podmínky účasti ani nerozšiřuje účely použití záznamů uvedené v pravidlech.
		</p>
		<OrganizerDetails />
		<p class="contact-note">
			Dotazy a žádosti k osobním údajům vyřizujeme na
			<a href="mailto:info@trailmaniacs.cz" class="inline-link">info@trailmaniacs.cz</a>.
		</p>
	</section>
	<section class="doc-section" id="udaje">
		<h2>Jaké údaje získáváme</h2>
		<p>
			Údaje získáváme především od vás při přihlášení prostřednictvím sportt.cz, z vaší komunikace s
			pořadatelem, z platby startovného a při měření a vyhodnocení závodu. Pokud vás přihlašuje jiná
			osoba nebo zákonný zástupce, získáváme registrační údaje od této osoby.
		</p>
		<ul>
			<li>
				Identifikační a soutěžní údaje: jméno, příjmení, datum narození, pohlaví, klub, zvolená
				trať, kategorie, startovní číslo, průchody kontrolami, naměřené časy, umístění a stav
				dokončení závodu.
			</li>
			<li>
				Kontaktní a platební údaje: e-mail, telefon, adresa, pokud je požadována v přihlášce,
				variabilní symbol a informace o přijetí platby.
			</li>
			<li>
				Údaje pro evidenci v ČAES: informace o členství a rodné číslo pro ověření členství nebo
				registraci závodníka v asociaci.
			</li>
			<li>
				Nouzový kontakt: jméno a příjmení, telefon a případně e-mail osoby, kterou závodník uvede
				pro případ mimořádné situace během akce.
			</li>
			<li>Obsah vašich dotazů, žádostí, reklamací a související komunikace.</li>
			<li>Fotografie a videozáznamy zachycující průběh akce.</li>
			<li>
				Technické údaje při návštěvě webu: IP adresa, čas a požadovaná stránka a údaje o prohlížeči
				předávané při spojení se serverem.
			</li>
		</ul>
	</section>
	<section class="doc-section" id="ucely">
		<h2>Proč a na jakém základě údaje zpracováváme</h2>
		<ul>
			<li>
				<strong>Registrace a zajištění účasti:</strong> přihláška, kontrola platby, zařazení do kategorie,
				prezence, časomíra a organizační komunikace – plnění smlouvy a kroky před jejím uzavřením podle
				čl. 6 odst. 1 písm. b) GDPR.
			</li>
			<li>
				<strong>Účetnictví a daně:</strong> evidence plateb a uchování dokladů – plnění právních povinností
				podle čl. 6 odst. 1 písm. c) GDPR.
			</li>
			<li>
				<strong>Ověření členství nebo registrace v ČAES:</strong> údaj o členství a rodné číslo využíváme
				výhradně pro ověření či registraci závodníka v asociaci podle jejích požadavků.
			</li>
			<li>
				<strong>Nouzový kontakt:</strong> spojení s uvedenou osobou při mimořádné situaci během akce
				- oprávněný zájem na zajištění bezpečnosti účastníků podle čl. 6 odst. 1 písm. f) GDPR.
			</li>
			<li>
				<strong>Veřejná sportovní soutěž:</strong> zveřejnění startovky, výsledků a vedení sportovního
				archivu - oprávněný zájem na transparentním průběhu soutěže, ověřitelnosti a porovnávání výkonů
				a dokumentaci historie závodu podle čl. 6 odst. 1 písm. f) GDPR.
			</li>
			<li>
				<strong>Řešení dotazů, reklamací a nároků:</strong> plnění smlouvy, zákonných povinností a oprávněný
				zájem na ochraně práv pořadatele a účastníků podle povahy konkrétního požadavku.
			</li>
			<li>
				<strong>Fungování a bezpečnost webu:</strong> doručení obsahu, diagnostika chyb a ochrana před
				zneužitím - oprávněný zájem na bezpečném a dostupném webu podle čl. 6 odst. 1 písm. f) GDPR.
			</li>
		</ul>
		<p>
			Marketingové e-maily, reklamní nabídky ani e-mailové pozvánky na další závody aktuálně
			nezasíláme. Samotná registrace není souhlasem s takovým zasíláním. O případném novém účelu vás
			předem informujeme a podle potřeby si vyžádáme samostatný souhlas.
		</p>
		<p>
			Neprovádíme rozhodování založené výhradně na automatizovaném zpracování, které by pro vás mělo
			právní nebo obdobně významné účinky ve smyslu čl. 22 GDPR, ani marketingové profilování.
			Výpočet časů a pořadí je součástí vyhodnocení sportovní soutěže.
		</p>
	</section>
	<section class="doc-section" id="nouzovy-kontakt">
		<h2>Nouzový kontakt</h2>
		<p>
			Nouzový kontakt je povinný pro dobu konání akce a slouží pouze ke spojení s uvedenou osobou
			při mimořádné situaci související s bezpečností závodníka. Jeho údaje získáváme od závodníka
			při registraci, nezveřejňujeme je a nepoužíváme je k marketingu ani pro další ročníky závodu.
		</p>
		<p>
			Tyto informace jsou určeny také osobě uvedené jako nouzový kontakt. Správcem jejích údajů je
			pořadatel uvedený výše, zdrojem údajů je závodník a účelem zpracování je bezpečnost během
			akce. Kontaktní osoba může uplatnit svá práva na našem kontaktním e-mailu stejně jako ostatní
			dotčené osoby. Před uvedením kontaktu prosím seznamte danou osobu s účelem jeho použití a
			předejte jí odkaz na tuto stránku.
		</p>
	</section>
	<section class="doc-section" id="zverejnovani">
		<h2>Startovka a výsledky</h2>
		<p>
			Startovní a výsledkové listiny jsou veřejně dostupné na našem webu a v používaných závodních
			systémech. Obsahují údaje potřebné k identifikaci závodníka a porovnání výkonu, zejména jméno
			a příjmení, startovní číslo, trať, kategorii, klub, čas a umístění. Konkrétní rozsah se liší
			podle typu listiny.
		</p>
		<p>
			Kontaktní e-mail, telefon, úplnou adresu bydliště, platební údaje, rodné číslo a údaje
			nouzového kontaktu ve veřejných listinách nezveřejňujeme. Veřejné výsledky mohou být
			dohledatelné i prostřednictvím vyhledávačů a mohou je dále zpracovávat třetí osoby ve vlastní
			odpovědnosti. Proti zpracování založenému na oprávněném zájmu můžete vznést námitku.
		</p>
	</section>
	<section class="doc-section" id="fotografie">
		<h2>Fotografie a video</h2>
		<p>
			Pořizování a použití záznamů účasti a sportovního výkonu upravuje bod 2.4
			<a href="/pravidla" class="inline-link">pravidel závodu</a>. Závodník podle tohoto ustanovení
			souhlasí s audiovizuálním zaznamenáním své účasti a výkonu pořadatelem nebo jím zmocněnou
			osobou a uděluje svolení k použití záznamů vytvořených před akcí, během ní a po ní za účelem
			prezentace tohoto závodu, bez nároku na honorář.
		</p>
		<p>
			Fotografie a videozáznamy používáme k prezentaci závodu v rozsahu tohoto souhlasu a svolení,
			například na webu a sociálních sítích pořadatele. Zpracování osobních údajů založené na tomto
			souhlasu se řídí čl. 6 odst. 1 písm. a) GDPR. U nezletilých postupujeme s ohledem na jejich
			věk a oprávnění zákonného zástupce.
		</p>
		<p>
			Pokud máte výhradu ke konkrétnímu záběru nebo chcete odvolat souhlas se zpracováním osobních
			údajů, napište na <a href="mailto:info@trailmaniacs.cz" class="inline-link"
				>info@trailmaniacs.cz</a
			>
			a připojte odkaz nebo popis záběru. Žádost posoudíme podle jejího obsahu, uděleného svolení a platných
			právních předpisů. Odvolání souhlasu nemění zákonnost předchozího zpracování.
		</p>
	</section>
	<section class="doc-section" id="prijemci">
		<h2>Komu mohou být údaje zpřístupněny</h2>
		<p>
			K údajům mají v potřebném rozsahu přístup pověřené osoby organizačního týmu a dodavatelé
			zajišťující registrace, časomíru, IT nebo účetnictví. Údaje předáváme také orgánům veřejné
			moci, pokud to vyžaduje zákon. U veřejných listin jsou příjemci i návštěvníci webu.
		</p>
		<ul>
			<li>
				<strong>Apachi s.r.o., IČO 27317056, Husinecká 903/10, 130 00 Praha 3:</strong> provozovatel
				sportt.cz a zpracovatel registračních údajů pro pořadatele. Další informace uvádí
				<a
					href="https://www.sportovniservis.cz/gdpr/"
					class="inline-link"
					target="_blank"
					rel="noopener noreferrer">Sportovní servis</a
				>. Vlastní uživatelský účet na sportt.cz a jeho přihlášení se řídí také informacemi
				poskytovatele této služby.
			</li>
			<li>
				<strong>Česká asociace adventure outdoor extreme sport z.s. (ČAES), IČO 47815647:</strong>
				příjemce údajů potřebných k ověření členství nebo registraci závodníka v asociaci, včetně rodného
				čísla. Asociace vede vlastní evidenci členů. Informace o asociaci a možnostech registrace najdete
				na
				<a
					href="https://caes.cz/informace/"
					class="inline-link"
					target="_blank"
					rel="noopener noreferrer">webu ČAES</a
				>.
			</li>
			<li>
				<strong>Netlify, Inc.:</strong> poskytovatel hostingu a doručování obsahu webu. Při načítání
				stránek zpracovává technické údaje o spojení. Informace o zpracování jsou v
				<a
					href="https://www.netlify.com/pdf/netlify-dpa.pdf/"
					class="inline-link"
					target="_blank"
					rel="noopener noreferrer">dokumentaci Netlify pro zpracování údajů</a
				>.
			</li>
			<li>
				<strong>Google Fonts:</strong> web načítá písma ze serverů Google. Prohlížeč přitom předává
				poskytovateli IP adresu a technické údaje požadavku. Podrobnosti najdete v
				<a
					href="https://policies.google.com/privacy?hl=cs"
					class="inline-link"
					target="_blank"
					rel="noopener noreferrer">zásadách ochrany soukromí Google</a
				>.
			</li>
		</ul>
		<p>
			Při využití zahraniční infrastruktury může docházet k předávání údajů mimo Evropský
			hospodářský prostor, zejména do USA. Podle příjemce se předání opírá o rozhodnutí Evropské
			komise o odpovídající ochraně, včetně rámce EU–USA pro ochranu údajů u zapojených příjemců,
			nebo o standardní smluvní doložky. Informace o konkrétních zárukách a jejich kopii si můžete
			vyžádat na našem kontaktním e-mailu.
		</p>
		<p>
			Web sám neukládá vlastní cookies ani nepoužívá analytické nebo reklamní cookies. Sportt.cz
			používá nezbytnou přihlašovací cookie; podrobnosti najdete na stránce
			<a href="/cookies" class="inline-link">Cookies</a>.
		</p>
	</section>
	<section class="doc-section" id="uchovani">
		<h2>Jak dlouho údaje uchováváme</h2>
		<ul>
			<li>
				<strong>Neveřejné registrační údaje a související komunikace:</strong> po dobu přípravy a konání
				závodu a následně nejvýše 5 let po závodě pro řešení případných nároků. Poté je odstraníme nebo
				anonymizujeme. Pokud probíhá spor nebo je uchování vyžadováno zákonem, ponecháme pouze potřebné
				údaje po dobu trvání tohoto důvodu. U zrušené registrace bez účasti běží pětiletá doba od jejího
				zrušení.
			</li>
			<li>
				<strong>Nouzový kontakt:</strong> pro potřeby bezpečnosti po dobu konání akce. Poté jej odstraníme.
			</li>
			<li>
				<strong>Účetní a daňové doklady:</strong> po dobu vyžadovanou příslušnými předpisy podle typu
				dokladu, zpravidla 5 let u účetních dokladů a 10 let u daňových dokladů k DPH. Zákonná lhůta
				může běžet od konce příslušného období a v zákonem stanovených případech se prodloužit.
			</li>
			<li>
				<strong>Veřejné výsledky:</strong> po dobu trvání odůvodněného zájmu na dokumentaci historie
				závodu a porovnávání sportovních výkonů. Archiv neobsahuje neveřejné kontaktní a platební údaje;
				nezbytnost dalšího zveřejňování průběžně posuzujeme.
			</li>
			<li>
				<strong>Fotografie a videozáznamy k prezentaci závodu:</strong> po dobu trvání účelu prezentace
				závodu v rozsahu svolení podle bodu 2.4 pravidel. Pokud je zpracování osobních údajů založeno
				na souhlasu, nejdéle do jeho odvolání; následně lze potřebné údaje uchovat jen tehdy, existuje-li
				pro to jiný právní důvod, například ochrana právních nároků.
			</li>
			<li>
				<strong>Technické údaje webu:</strong> po dobu potřebnou pro přenos obsahu, zajištění provozu
				a bezpečnosti podle nastavení používaných služeb; údaje nutné k vyšetření konkrétního incidentu
				po dobu jeho řešení.
			</li>
		</ul>
	</section>
	<section class="doc-section" id="prava">
		<h2>Vaše práva a jak je uplatnit</h2>
		<p>
			Za podmínek stanovených GDPR máte právo na přístup k údajům a jejich kopii, opravu, výmaz,
			omezení zpracování a přenositelnost údajů zpracovávaných automatizovaně na základě souhlasu
			nebo smlouvy. Žádost posílejte na
			<a href="mailto:info@trailmaniacs.cz" class="inline-link">info@trailmaniacs.cz</a>. Pro
			ochranu vašich údajů můžeme potřebovat přiměřeně ověřit totožnost žadatele.
		</p>
		<p>
			<strong
				>Proti zpracování na základě oprávněného zájmu můžete vznést námitku z důvodů týkajících se
				vaší konkrétní situace.</strong
			> Pokud bychom zpracovávali údaje pro přímý marketing, můžete proti němu vznést námitku kdykoli.
			Poskytnutý souhlas můžete kdykoli odvolat stejným kontaktem; odvolání nemění zákonnost předchozího
			zpracování. Výmaz nemusí být možný u údajů, které musíme uchovat ze zákona nebo pro obhajobu nároků.
		</p>
		<p>
			Na žádosti odpovídáme bez zbytečného odkladu, zpravidla do jednoho měsíce od doručení. Pokud
			je podle GDPR nutné lhůtu prodloužit až o další dva měsíce, do prvního měsíce vás informujeme
			o prodloužení a jeho důvodech.
		</p>
		<p>
			Máte také právo podat stížnost u dozorového úřadu: Úřad pro ochranu osobních údajů, Pplk.
			Sochora 27, 170 00 Praha 7,
			<a href="https://uoou.gov.cz" class="inline-link" target="_blank" rel="noopener noreferrer"
				>uoou.gov.cz</a
			>.
		</p>
	</section>
</LegalPage>

<style>
	.contact-note {
		margin-top: 24px;
	}
</style>
