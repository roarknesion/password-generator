<script lang="ts">
  export let value: string | number
  export let label: string
</script>

<!-- svelte-ignore a11y-label-has-associated-control -->
<label class="form-control">
  <div class="label">
    <span class="label-text capitalize text-xs">{label}</span>
  </div>

  {#if typeof value == 'number'}
    <input type="number" class="input input-primary input-bordered" bind:value />
  {:else}
    <input class="input input-primary input-bordered" bind:value />
  {/if}
</label>
