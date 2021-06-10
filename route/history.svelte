<script lang="ts">
  import Icon from '~/component/icon.svelte'

  import history from '~/store/history'
  import selection from '~/plugin/selection'
  import clipboard from '~/plugin/clipboard'
</script>

<section class="flex flex-col gap-2">
  {#each $history.list as item}
    <div class="form-control relative">
      <input
        type="text"
        value={item}
        readonly
        class="w-full pr-16 input"
        on:mousedown={selection.mousedown}
        on:click={({ detail, currentTarget }) => selection.click(detail, currentTarget)}
      />

      <button
        class="absolute right-0 top-0 btn btn-ghost btn-square"
        on:click={() => clipboard.write(item)}
      >
        <Icon name="clipboard" />
      </button>
    </div>
  {/each}

  <button class="btn btn-ghost" on:click={() => history.clear()}> Clear All </button>
</section>
