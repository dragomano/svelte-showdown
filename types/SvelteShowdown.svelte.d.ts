/// <reference types="svelte" />
import { SvelteComponent } from "svelte";

export interface SvelteShowdownProps {
  /**
   * The content to be converted to HTML.
   */
  content: string;

  /**
   * An array of extensions to be used.
   * @default []
   */
  extensions?: string[];

  /**
   * The flavor of the Markdown parser to use.
   * @default "github"
   * @enum {"original" | "vanilla" | "github"}
   */
  flavor?: "original" | "vanilla" | "github";

  /**
   * Additional options for the Markdown parser.
   * @default {}
   * @see {@link https://showdownjs.com/docs/available-options/} for a list of all available options.
   */
  options?: object;
}

export default class SvelteShowdown extends SvelteComponent<
  SvelteShowdownProps,
  {},
  { default: {} }
> {}
