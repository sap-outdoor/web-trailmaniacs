<script lang="ts">
	import Footer from '$lib/footer.svelte';
	import Header from '$lib/header.svelte';
	import '../app.css';

	let { children } = $props();
</script>

<Header />

{@render children()}

<Footer />