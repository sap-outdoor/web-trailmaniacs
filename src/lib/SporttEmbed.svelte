<script lang="ts">
	let { src, title }: { src: string; title: string } = $props();
</script>

<div class="wrap startlist-wrap">
	<div class="startlist-card">
		<div class="startlist-frame-shell">
			<iframe {src} {title}></iframe>
		</div>
		<div class="startlist-fallback">
			<span>Pokud se obsah nenačte, otevřete jej přímo na sportt.cz.</span>
			<a href={src} target="_blank" rel="noopener noreferrer">Otevřít na sportt.cz ↗</a>
		</div>
	</div>
</div>
