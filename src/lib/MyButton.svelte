<script>
	/**
	 * What should my name be?
	 *
	 * @type {import('./MyButton.svelte').Props["myName"]}
	 */
	export let myName = 'Foo';

	/**
	 * My custom prop!
	 *
	 * @type {import('./MyButton.svelte').Props["myCustomProp"]}
	 */
	export let myCustomProp;
</script>

<button {...$$restProps}>
	{myName}
	{#if myCustomProp}isTrue{/if}
	<slot />
</button>

<!--
@component
Here's some documentation for this component.
It will show up on hover.

- Simple usage:
  ```tsx
  <MyButton>Foo</MyButton>
  ```
- Advanced usage:
  ```tsx
  <MyButton myName="Foo" myCustomProp={true}>Baz</MyButton>
  ```
-->
