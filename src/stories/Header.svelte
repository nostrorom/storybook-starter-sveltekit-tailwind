<script lang="ts">
	import Button from './Button.svelte';

	import { createEventDispatcher } from 'svelte';

	export let user: { name: string } | null = null;

	const dispatch = createEventDispatcher();

	function onLogin(event: MouseEvent) {
		dispatch('login', event);
	}
	function onLogout(event: MouseEvent) {
		dispatch('logout', event);
	}
	function onCreateAccount(event: MouseEvent) {
		dispatch('createAccount', event);
	}
</script>

<header class="flex justify-between items-center px-4 py-3 bg-pink-100 dark:bg-neutral-900">
	<div class="flex gap-2 items-center">
		<img class="h-6 w-6" src="https://storybook.js.org/blog/icons/icon-512x512.png" alt="" />
		<h1 class="font-bold text-lg text-pink-500 dark:text-pink-200">Sveltebook</h1>
	</div>
	<div class="text-pink-700 dark:text-neutral-300">
		{#if user}
			<span class="welcome">
				Welcome, <b>{user.name}</b>!
			</span>
			<Button size="small" on:click={onLogout} label="Log out" />
		{:else}
			<Button size="small" on:click={onLogin} label="Log in" />
			<Button primary size="small" on:click={onCreateAccount} label="Sign up" />
		{/if}
	</div>
</header>
