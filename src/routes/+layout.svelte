<script>
	import '../app.css';
</script>

<nav class="bg-fuchsia-400 text-purple-700">
	<ul class="h-10 flex items-center space-x-3 justify-center">
		<li><a href="/">Home</a></li>
		<li><a href="/about">About</a></li>
		<li><a href="/contact">Contact</a></li>
	</ul>
</nav>

<slot />

<footer>
	<p>Footer</p>
</footer>
