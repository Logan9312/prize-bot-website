<script>
	import { signIn, signOut } from '@auth/sveltekit/client';
	import { page } from '$app/stores';
	import Discord from '$lib/assets/discord_logo.svg';
	import Example from '$lib/assets/example.png';
</script>

<div class="bg-white">
	<div class="relative isolate px-6 pt-14 lg:px-8">
		<div
			class="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
			aria-hidden="true"
		>
			<div
				class="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
				style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"
			/>
		</div>
		<div class=" flex max-w-6xl flex-row py-32 sm:py-48 lg:py-56">
			<div class="text-left">
				<h1 class="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
					Community Rewards Made Easy
				</h1>
				<p class="mt-6 text-lg leading-8 text-gray-600">
					Prize Bot helps you manage your prizes so that you can focus on running quality events for
					your members and save time tracking the winners.
				</p>
				<div class="mt-10 flex items-center gap-x-6">
					<a
						href="https://discord.com/api/oauth2/authorize?client_id=995022149226082324&permissions=8&scope=bot"
						class="flex rounded-md bg-fuchsia-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-fuchsia-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
						><img src={Discord} alt="Discord Logo" height="20" width="20" class="mr-2" />Invite To
						Discord</a
					>
					<a href="/About" class="text-sm font-semibold leading-6 text-gray-900">
						Learn more <span aria-hidden="true">→</span></a
					>
				</div>
			</div>
			<div class="mx-10">
				<img src={Example} alt="Prize Bot Example" class="rounded-xl" />
			</div>
		</div>
		<div
			class="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
			aria-hidden="true"
		>
			<div
				class="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
				style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"
			/>
		</div>
	</div>
</div>
