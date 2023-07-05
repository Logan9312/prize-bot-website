<script>
	import logo from '$lib/assets/logo.png';
	import { signIn, signOut } from '@auth/sveltekit/client';
	import { page } from '$app/stores';
</script>

<header class="absolute inset-x-0 top-0 z-50">
	<nav class="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
		<div class="flex lg:flex-1">
			<a href="/" class="-m-1.5 p-1.5">
				<span class="sr-only">Your Company</span>
				<img class="h-8 w-auto rounded" src={logo} alt="Logo" />
			</a>
		</div>
		<div class="flex lg:hidden">
			<button
				type="button"
				class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
			>
				<span class="sr-only">Open main menu</span>
				<svg
					class="h-6 w-6"
					fill="none"
					viewBox="0 0 24 24"
					stroke-width="1.5"
					stroke="currentColor"
					aria-hidden="true"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
					/>
				</svg>
			</button>
		</div>
		<div class="hidden lg:flex lg:gap-x-12">
			<a href="/About" class="text-sm font-semibold leading-6 text-gray-900">About</a>
			<a href="/Features" class="text-sm font-semibold leading-6 text-gray-900">Features</a>
			<a href="/Docs" class="text-sm font-semibold leading-6 text-gray-900">Docs</a>
		</div>
		<div class="hidden lg:flex lg:flex-1 lg:justify-end">
			<button
				on:click={() => signIn('discord')}
				class="text-sm font-semibold leading-6 text-gray-900"
				>Log in <span aria-hidden="true">&rarr;</span></button
			>
		</div>
	</nav>
</header>
