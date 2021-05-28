<script lang="ts">
  import { Plus, Minus, Refresh, Clipboard } from 'tabler-icons-svelte'

  const icons = {
    plus: Plus,
    minus: Minus,
    refresh: Refresh,
    clipboard: Clipboard
  }

  export let name: keyof typeof icons = 'minus'

  let icon = icons[name]
</script>

<svelte:component this={icon} size="1em" strokeWidth="2" />
<!--
strokeLinecap="square"
strokeLinejoin="revert"
-->
