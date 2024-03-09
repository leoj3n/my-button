<script lang="ts">
	import type { HTMLButtonAttributes } from 'svelte/elements';

	interface $$Props extends HTMLButtonAttributes {
		/** What should my name be? */
		myName: string;
		/** My custom prop! */
		myCustomProp: string;
	}

	export let myName: $$Props['myName'] = 'Foo';
	export let myCustomProp: $$Props['myCustomProp'];
</script>

<button {...$$restProps}>
	{myCustomProp}
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
  <MyButton myName="Foo" myCustomProp="Bar">Baz</MyButton>
  ```
-->
