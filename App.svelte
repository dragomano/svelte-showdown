<script>
  import { SvelteShowdown } from './src';

  let content = '**This text is bold**, and this one contains emoji: :smile: :alien:';

  const options = {
    emoji: true,
  };
</script>

<SvelteShowdown {content} {options} />
