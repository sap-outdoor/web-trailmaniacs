<script lang="ts">
	import LegalPage from '$lib/LegalPage.svelte';
	import OrganizerDetails from '$lib/OrganizerDetails.svelte';
</script>

<LegalPage
	title="Pořadatel a provozovatel"
	description="Identifikační a kontaktní údaje pořadatele závodu Slapy Trail Maniacs a provozovatele webu trailmaniacs.cz."
>
	<section class="doc-section">
		<h2>Kdo závod pořádá</h2>
		<p>Pořadatelem závodu a provozovatelem tohoto webu je spolek Š&amp;P - outdoor z.s.</p>
		<OrganizerDetails />
		<p class="registry-link">
			Údaje o spolku lze ověřit v
			<a
				href="https://ares.gov.cz/ekonomicke-subjekty/res/22691677"
				class="inline-link"
				target="_blank"
				rel="noopener noreferrer">registru ARES</a
			>.
		</p>
	</section>
	<section class="doc-section">
		<h2>S čím se na nás obrátit</h2>
		<p>
			Dotazy k registraci, platbě, změnám účasti i reklamace posílejte na
			<a href="mailto:info@trailmaniacs.cz" class="inline-link">info@trailmaniacs.cz</a>. Na stejném
			kontaktu vyřizujeme žádosti týkající se osobních údajů.
		</p>
		<ul>
			<li><a href="/pravidla" class="inline-link">Oficiální pravidla závodu</a></li>
			<li>
				<a href="/ochrana-osobnich-udaju" class="inline-link">Ochrana osobních údajů (GDPR)</a>
			</li>
			<li><a href="/cookies" class="inline-link">Informace o cookies</a></li>
		</ul>
	</section>
	<section class="doc-section" id="reklamace">
		<h2>Reklamace a řešení sporů</h2>
		<p>
			Reklamaci sjednané služby můžete uplatnit e-mailem na
			<a href="mailto:info@trailmaniacs.cz" class="inline-link">info@trailmaniacs.cz</a>
			nebo písemně na adrese sídla spolku. Uveďte své jméno, závod a číslo registrace nebo variabilní
			symbol, popis problému, požadovaný způsob vyřízení a kontakt pro odpověď.
		</p>
		<p>
			Přijetí reklamace písemně potvrdíme. Reklamaci spotřebitele vyřídíme a o výsledku jej
			informujeme nejpozději do 30 dnů od jejího uplatnění, pokud se nedohodneme na delší lhůtě.
			Obdržíte také potvrzení o způsobu vyřízení, případně odůvodnění zamítnutí. Sportovní protesty
			proti výsledkům se podávají postupem podle
			<a href="/pravidla" class="inline-link">pravidel závodu</a>.
		</p>
		<p>
			Spotřebitelský spor, který se nepodaří vyřešit přímo s pořadatelem, můžete předložit k
			mimosoudnímu řešení České obchodní inspekci, Ústřední inspektorát – oddělení ADR, Gorazdova
			1969/24, 120 00 Praha 2, e-mail
			<a href="mailto:adr@coi.gov.cz" class="inline-link">adr@coi.gov.cz</a>. Podrobnosti a postup
			podání návrhu najdete na
			<a
				href="https://coi.gov.cz/informace-o-adr/"
				class="inline-link"
				target="_blank"
				rel="noopener noreferrer">webu ČOI</a
			>.
		</p>
	</section>
	<section class="doc-section">
		<h2>Informace k online registraci</h2>
		<p>
			Podmínky účasti stanovují <a href="/pravidla" class="inline-link">pravidla závodu</a>
			a <a href="/propozice" class="inline-link">propozice</a>. Účast na závodě je službou
			související s využitím volného času poskytovanou v konkrétním termínu. Podle § 1837 písm. j)
			občanského zákoníku se na ni nevztahuje běžné právo spotřebitele odstoupit od smlouvy uzavřené
			přes internet do 14 dnů bez uvedení důvodu.
		</p>
	</section>
</LegalPage>

<style>
	.registry-link {
		margin-top: 24px;
	}
</style>
