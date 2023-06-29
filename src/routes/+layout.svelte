<script>
	import '../app.css';
</script>

<div class="flex h-screen flex-col">
	<nav class="h-10 bg-fuchsia-400 text-purple-700">
		<ul class="flex h-full items-center justify-center space-x-3 align-middle">
			<li><a href="/">Home</a></li>
			<li><a href="/about">About</a></li>
			<li><a href="/contact">Contact</a></li>
		</ul>
	</nav>

	<main class="flex-grow bg-gray-200">
		<slot />
	</main>

	<footer class="bg-fuchsia-400">
		<p>Footer</p>
	</footer>
</div>
