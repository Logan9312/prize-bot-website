<script>
	import '../app.css';
</script>

<div class="flex flex-col h-screen">
	<nav class="bg-fuchsia-400 text-purple-700 h-10">
		<ul class="flex items-center justify-center space-x-3">
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