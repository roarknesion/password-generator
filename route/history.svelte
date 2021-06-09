<script lang="ts">
  import Icon from '~/component/icon.svelte'

  import history from '~/store/history'
  import selection from '~/plugin/selection'
  import clipboard from '~/plugin/clipboard'
</script>

<section class="flex flex-col gap-2">
  {#each $history.list as item}
    <div class="flex justify-start items-center group w-full">
      <input
        class="h-10 w-full"
        value={item}
        readonly
        on:mousedown={selection.mousedown}
        on:click={({ detail, currentTarget }) => selection.click(detail, currentTarget)}
      />

      <button
        on:click={() => clipboard.write(item)}
        class="w-10 h-10 flex-shrink-0 flex items-center justify-center text-center opacity-0 transition-opacity group-hover:opacity-100 focus:opacity-100"
      >
        <Icon name="clipboard" />
      </button>
    </div>
  {/each}

  <button
    class="flex items-center justify-center p-2 gap-2 hover:bg-opacity-30 hover:bg-gray-300"
    on:click={() => history.clear()}
  >
    Clear All
  </button>
</section>
