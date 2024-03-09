<script>
	/**
	 * What should my name be?
	 *
	 * @type {import('$lib/MyButton.svelte').MyButtonProps["myName"]}
	 */
	export let myName = 'Foo';

	/**
	 * My custom prop!
	 *
	 * @type {import('$lib/MyButton.svelte').MyButtonProps["myCustomProp"]}
	 */
	export let myCustomProp;
</script>

<button {...$$restProps}>
	{myName}
	{#if myCustomProp}isTrue{/if}
	<slot />
</button>
