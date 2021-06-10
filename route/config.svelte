<script lang="ts">
  import FormItem from '~/component/history/form-item.svelte'

  import generator from '~/store/generator'
  import history from '~/store/history'
</script>

<section class="flex flex-col gap-4">
  <FormItem
    bind:value={$generator.character.include.custom}
    label="include custom characters"
  />

  <FormItem
    bind:value={$generator.character.exclude.custom}
    label="exclude custom characters "
  />

  <FormItem bind:value={$generator.length.max} label="length max value" />

  <FormItem bind:value={$generator.length.min} label="length min value" />

  <FormItem bind:value={$history.limit} label="history limit" />

  <button
    class="btn btn-ghost"
    on:click={() => {
      generator.reset.config()
      history.reset()
    }}
  >
    Reset All Configs
  </button>
</section>
