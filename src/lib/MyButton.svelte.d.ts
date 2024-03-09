import { SvelteComponent } from "svelte";
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
 * Here's some documentation for this component.
 *
 * ## Usage
 * - Simple usage:
 * ```svelte
 * <MyButton>Foo</MyButton>
 * ```
 * - Advanced usage: 
 * ```svelte
 * <MyButton myName="Foo" myCustomProp={true}>Bar</MyButton>
 * ```
 *
 * ## Props
 * @prop export let myCustomProp: boolean;
 * @prop export let myName: string;
 */
export default class MyButton extends SvelteComponent<MyButtonProps, MyButtonEvents, MyButtonSlots> {}
export {};


// import type { HTMLButtonAttributes } from 'svelte/elements';

// export default interface $$Props extends HTMLButtonAttributes {
// 	myName: string;
// 	myCustomProp: boolean;
// }


// import type { SvelteComponent } from 'svelte';
// import type { SvelteHTMLElements } from 'svelte/elements';

// type RestProps = SvelteHTMLElements['button'];
// interface Props extends RestProps {
// 	myName: string;
// 	myCustomProp: boolean;
// }

// export default class MyButton extends SvelteComponent<Props> {}
