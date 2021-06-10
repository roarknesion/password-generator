<script lang="ts">
  import Icon from '~/component/icon.svelte'
  import GeneratorOutput from '~/component/generator/output.svelte'
  import GeneratorRange from '~/component/generator/range.svelte'
  import GeneratorOption from '~/component/generator/option.svelte'

  import generator from '~/store/generator'
  import history from '~/store/history'

  import pgenerator from '~/plugin/generator'

  let time: NodeJS.Timeout
  let password: string
  let show = true

  pgenerator.state = $generator

  generator.subscribe(() => {
    password = pgenerator.generate()

    clearTimeout(time)

    time = setTimeout(() => ($history.list = [password, ...$history.list]), 250)
  })
</script>

<GeneratorOutput
  value={password}
  refresh={() => ($generator.length.value = $generator.length.value)}
/>

<GeneratorRange
  bind:value={$generator.length.value}
  min={$generator.length.min}
  max={$generator.length.max}
/>

<section class="flex flex-col gap-4 items-center justify-center mt-12 max-w-xs mx-auto w-full">
  <GeneratorOption
    text="Use Uppercase"
    info="Include uppercase versions of existing characters"
    bind:checked={$generator.option.uppercase}
    {show}
  />

  <GeneratorOption
    text="Include Digits"
    info={$generator.character.include.digit}
    bind:checked={$generator.option.include.digit}
    {show}
  />

  <GeneratorOption
    text="Include Letters"
    info={$generator.character.include.letter}
    bind:checked={$generator.option.include.letter}
    {show}
  />

  <GeneratorOption
    text="Include Symbols"
    info={$generator.character.include.symbol}
    bind:checked={$generator.option.include.symbol}
    {show}
  />

  <GeneratorOption
    text="Include Custom Chars"
    info={$generator.character.include.custom}
    bind:checked={$generator.option.include.custom}
    {show}
  />

  <GeneratorOption
    text="Exclude Similar Chars"
    info={$generator.character.exclude.similar}
    bind:checked={$generator.option.exclude.similar}
    {show}
  />

  <GeneratorOption
    text="Exclude Custom Chars"
    info={$generator.character.exclude.custom}
    bind:checked={$generator.option.exclude.custom}
    {show}
  />

  <div class="flex justify-start w-full">
    <button class="btn btn-square btn-ghost" on:click={() => (show = !show)}>
      {#if show}
        <Icon name="eye" />
      {:else}
        <Icon name="eye-closed" />
      {/if}
    </button>

    <button class="btn btn-ghost flex-1" on:click={() => generator.reset.option()}>
      Reset All Options
    </button>
  </div>
</section>
