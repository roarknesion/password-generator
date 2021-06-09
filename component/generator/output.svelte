<script lang="ts">
  import Icon from '~/component/icon.svelte'
  import selection from '~/plugin/selection'
  import clipboard from '~/plugin/clipboard'

  export let value = ''
  export let refresh = () => {}
</script>

<section class="flex items-center border border-gray-300">
  <button
    on:click={refresh}
    class="w-10 h-10 flex-shrink-0 flex items-center justify-center text-center text-gray-500 hover:text-gray-900"
  >
    <Icon name="refresh" />
  </button>

  <input
    class="h-10 w-full text-center"
    {value}
    readonly
    on:mousedown={selection.mousedown}
    on:click={({ detail, currentTarget }) => selection.click(detail, currentTarget)}
  />

  <button
    on:click={() => clipboard.write(value)}
    class="w-10 h-10 flex-shrink-0 flex items-center justify-center text-center text-gray-500 hover:text-gray-900"
  >
    <Icon name="clipboard" />
  </button>
</section>
