<script lang="ts">
  import Icon from '~/component/icon.svelte'
  import selection from '~/plugin/selection'
  import clipboard from '~/plugin/clipboard'

  export let value = ''
  export let refresh = () => {}
</script>

<div class="form-control relative">
  <button class="absolute left-0 top-0 btn btn-ghost btn-square" on:click={refresh}>
    <Icon name="refresh" />
  </button>

  <input
    {value}
    readonly
    class="w-full pr-16 pl-16 input input-primary input-bordered text-center"
    on:mousedown={selection.mousedown}
    on:click={({ detail, currentTarget }) => selection.click(detail, currentTarget)}
  />

  <button
    class="absolute right-0 top-0 btn btn-ghost btn-square"
    on:click={() => clipboard.write(value)}
  >
    <Icon name="clipboard" />
  </button>
</div>
