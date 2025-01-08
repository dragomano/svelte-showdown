# Svelte Showdown

Use [showdown](https://github.com/showdownjs/showdown) as a Svelte component.

```bash
pnpm i svelte-showdown -D
```

## How to use

```svelte
<script>
  import { SvelteShowdown } from 'svelte-showdown';

  let content = $state('**This text is bold**, and this one contains emoji: :smile: :alien:');

  const options = {
    emoji: true
  };
</script>

<SvelteShowdown {content} {options} />
```
