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

	const converter = new showdown.Converter({ extensions });

	converter.setFlavor(flavor);

	Object.entries(options).forEach(([key, value]: [string, Primitive]) =>
		converter.setOption(key, value)
	);

	const htmlContent = $derived(converter.makeHtml(content));
</script>

{@html htmlContent}
