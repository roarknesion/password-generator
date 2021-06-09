<script lang="ts">
  import generator from '~/store/generator'
  import history from '~/store/history'
</script>

<section class="flex flex-col gap-4">
  <label class="flex flex-col">
    <span>Include Custom Characters</span>
    <input class="border p-2" type="text" bind:value={$generator.character.include.custom} />
  </label>

  <label class="flex flex-col">
    <span>Exclude Custom Characters</span>
    <input class="border p-2" type="text" bind:value={$generator.character.exclude.custom} />
  </label>

  <label class="flex flex-col">
    <span>Length Max Value</span>
    <input class="border p-2" type="number" bind:value={$generator.length.max} />
  </label>

  <label class="flex flex-col">
    <span>Length Min Value</span>
    <input class="border p-2" type="number" bind:value={$generator.length.min} />
  </label>

  <label class="flex flex-col">
    <span>History Limit</span>
    <input class="border p-2" type="number" bind:value={$history.limit} />
  </label>

  <button
    class="flex items-center justify-center p-2 gap-2 hover:bg-opacity-30 hover:bg-gray-300"
    on:click={() => {
      generator.reset.config()
      history.reset()
    }}
  >
    Reset All Configs
  </button>
</section>
