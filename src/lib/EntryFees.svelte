<script lang="ts">
	const periods = [
		'Do 31. 12. 2026',
		'Do 30. 6. 2027',
		'Do 30. 9. 2027',
		'Od 1. 10. 2027 / na místě'
	];
	const tracks = [
		{ distance: 61, prices: [800, 900, 1000, 1150] },
		{ distance: 47, prices: [700, 800, 900, 1050] },
		{ distance: 33, prices: [650, 750, 850, 1000] }
	];
	const euros = new Intl.NumberFormat('cs-CZ', {
		style: 'currency',
		currency: 'EUR',
		minimumFractionDigits: 0,
		maximumFractionDigits: 0
	});
</script>

<!-- Keyboard users need to scroll the table horizontally. -->
<!-- svelte-ignore a11y_no_noninteractive_tabindex -->
<div
	class="fees-scroll"
	role="region"
	aria-label="Startovné podle tratě a data platby"
	tabindex="0"
>
	<table class="price-table">
		<thead>
			<tr>
				<th scope="col">Trať</th>
				{#each periods as period (period)}
					<th scope="col">{period}</th>
				{/each}
			</tr>
		</thead>
		<tbody>
			{#each tracks as track (track.distance)}
				<tr>
					<th scope="row" class="dist">{track.distance} km</th>
					{#each track.prices as price (price)}
						<td class="num">
							{price.toLocaleString('cs-CZ')} Kč
							<small>{euros.format(Math.ceil(price / 24))}</small>
						</td>
					{/each}
				</tr>
			{/each}
		</tbody>
	</table>
</div>
<p class="fees-hint">Další cenová pásma zobrazíte posunutím tabulky doprava →</p>

<style>
	.fees-scroll {
		max-width: 100%;
		overflow-x: auto;
	}
	.fees-scroll:focus-visible {
		outline: 2px solid var(--ink);
		outline-offset: 4px;
	}
	table {
		min-width: 660px;
	}
	caption {
		text-align: left;
		font-size: 14px;
		font-weight: 600;
		padding-bottom: 12px;
	}
	.price-table th.dist {
		font-family: 'Archivo Black', sans-serif;
		font-size: 20px;
		color: var(--ink);
		white-space: nowrap;
		text-transform: none;
		letter-spacing: normal;
	}
	td {
		white-space: nowrap;
	}
	small {
		display: block;
		font-size: 12px;
		font-weight: 400;
		color: var(--grey);
		margin-top: 4px;
	}
	.fees-note {
		font-size: 14px;
		margin-top: 16px;
		color: var(--grey);
	}
	.fees-hint {
		display: none;
	}
	@media (max-width: 700px) {
		.fees-hint {
			display: block;
			font-size: 12px;
			margin-top: 12px;
			color: var(--grey);
		}
	}
</style>
