<script lang="ts">
	export let primary = false;
	export let size: 'small' | 'medium' | 'large' = 'medium';
	export let label = '';

	const BASE_BUTTON_CLASS =
		'cursor-pointer rounded-full border-2 font-bold leading-none inline-block';

	$: primaryClass = primary
		? 'text-white bg-pink-600 border-pink-600 dark:bg-pink-700 dark:border-pink-700 hover:bg-pink-500 dark:hover:bg-pink-600'
		: 'text-neutral-600 bg-transparent border-neutral-600 dark:text-neutral-200 dark:border-neutral-200 hover:bg-pink-200 dark:hover:bg-pink-900';

	$: sizeClass = size === 'small' ? 'px-4 py-2.5' : size === 'large' ? 'px-6 py-3' : 'px-5 py-2.5';
</script>

<button type="button" class="{BASE_BUTTON_CLASS} {sizeClass} {primaryClass}" on:click>
	{label}
</button>
