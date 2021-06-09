<script lang="ts">
  import Icon from '~/component/icon.svelte'

  import history from '~/store/history'
  import selection from '~/plugin/selection'
  import clipboard from '~/plugin/clipboard'
</script>

<section class="flex flex-col gap-2">
  {#each $history as item}
    <div class="flex justify-start items-center group w-full">
      <span
        class="break-all w-full"
        on:mousedown={selection.mousedown}
        on:click={({ detail }) => selection.click(detail)}
      >
        {item}
      </span>

      <button
        on:click={() => clipboard.write(item)}
        class="w-10 h-10 flex-shrink-0 flex items-center justify-center text-center opacity-0 transition-opacity group-hover:opacity-100"
      >
        <Icon name="clipboard" />
      </button>
    </div>
  {/each}
</section>
