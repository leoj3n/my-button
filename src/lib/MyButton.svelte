<script>
	/**
	 * What should my name be?
	 */
	export let myName = 'Foo';

	/**
	 * My custom prop!
	 *
	 * @type {import('./$lib/MyButton')['myCustomProp']}
	 */
	export let myCustomProp;
</script>

<button {...$$restProps}>
	{#if myCustomProp}Yes, it is true{/if}
	{myName}
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
