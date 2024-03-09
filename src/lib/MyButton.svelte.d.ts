import { SvelteComponent } from 'svelte';
import type { HTMLButtonAttributes } from 'svelte/elements';
declare const __propDef: {
	props: HTMLButtonAttributes & {
		myName: string;
		myCustomProp: boolean;
	};
	events: {
		[evt: string]: CustomEvent<any>;
	};
	slots: {
		default: {};
	};
};
export type MyButtonProps = typeof __propDef.props;
export type MyButtonEvents = typeof __propDef.events;
export type MyButtonSlots = typeof __propDef.slots;

/**
 * ## MyButton
 * Here's some documentation for this component.
 * ### Props
 * @prop export let myCustomProp: boolean;
 * @prop export let myName: string;
 */
export default class MyButton extends SvelteComponent<
	MyButtonProps,
	MyButtonEvents,
	MyButtonSlots
> {}
export {};
