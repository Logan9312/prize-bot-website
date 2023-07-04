<script>
	import '../app.css';
	import Navbar from '$lib/navbar.svelte';
	import Footer from '$lib/footer.svelte';
	/** @type {import('@sveltejs/adapter-vercel').Config} */
	export const config = {
		runtime: 'edge'
	};
</script>

<svelte:head>
	<meta name="viewport" content="width=device-width, initial-scale=1" />
</svelte:head>

<div class="flex min-h-screen flex-col bg-white">
	<Navbar />
	<main class="flex-grow">
		<slot />
	</main>
	<Footer />
</div>
