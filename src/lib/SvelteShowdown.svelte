<script lang="ts">
	import showdown from 'showdown';
	import type { ShowdownExtension, Flavor, ShowdownOptions } from 'showdown';

	type Primitive = string | number | boolean;

	let {
		content,
		extensions = [],
		flavor = 'github',
		options = {}
	}: {
		content: string;
		extensions?: ShowdownExtension[];
		flavor?: Flavor;
		options?: ShowdownOptions;
	} = $props();

	// svelte-ignore state_referenced_locally
	const converter = new showdown.Converter({ extensions });

	// svelte-ignore state_referenced_locally
	converter.setFlavor(flavor);

	// svelte-ignore state_referenced_locally
	Object.entries(options).forEach(([key, value]: [string, Primitive]) =>
		converter.setOption(key, value)
	);

	const htmlContent = $derived(converter.makeHtml(content));
</script>

{@html htmlContent}
