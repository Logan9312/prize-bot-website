<script>
	import '../app.css';

	/** @type {import('@sveltejs/adapter-vercel').Config} */
	export const config = {
		runtime: 'edge'
	};
</script>

<slot />

