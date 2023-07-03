<script>
	import '../app.css';
	import Navbar from '$lib/navbar.svelte';
	import Footer from '$lib/footer.svelte';
	/** @type {import('@sveltejs/adapter-vercel').Config} */
	export const config = {
		runtime: 'edge'
	};
</script>

<div class="flex min-h-screen flex-col">
	<Navbar />
	<div class="flex-grow">
		<slot />
	</div>
	<Footer />
</div>
