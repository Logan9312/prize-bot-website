<script lang="ts">
	import { Button } from '../lib/components/ui/button';

	let discordUrl =
		'https://discord.com/api/oauth2/authorize?client_id=995022149226082324&redirect_uri=https%3A%2F%2Fprizebot.xyz&response_type=code&scope=identify%20email';
</script>

<div class="flex justify-center">
	<Button href={discordUrl} class="my-10 bg-discord-blue">Login with Discord</Button>
</div>
