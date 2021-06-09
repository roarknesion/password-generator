<script lang="ts">
  import GeneratorOutput from '~/component/generator/output.svelte'
  import GeneratorRange from '~/component/generator/range.svelte'
  import GeneratorOption from '~/component/generator/option.svelte'

  import pluginGenerator from '~/plugin/generator'

  import generator from '~/store/generator'
  import history from '~/store/history'

  let time: NodeJS.Timeout
  let password: string

  pluginGenerator.state = $generator

  generator.subscribe(() => {
    password = pluginGenerator.generate()

    clearTimeout(time)

    time = setTimeout(() => ($history = [password, ...$history]), 250)
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
  />

  <GeneratorOption
    text="Include Digits"
    info={$generator.character.include.digit}
    bind:checked={$generator.option.include.digit}
  />

  <GeneratorOption
    text="Include Letters"
    info={$generator.character.include.letter}
    bind:checked={$generator.option.include.letter}
  />

  <GeneratorOption
    text="Include Symbols"
    info={$generator.character.include.symbol}
    bind:checked={$generator.option.include.symbol}
  />

  <GeneratorOption
    text="Include Custom Chars"
    info={$generator.character.include.custom}
    bind:checked={$generator.option.include.custom}
  />

  <GeneratorOption
    text="Exclude Similar Chars"
    info={$generator.character.exclude.similar}
    bind:checked={$generator.option.exclude.similar}
  />

  <GeneratorOption
    text="Exclude Custom Chars"
    info={$generator.character.exclude.custom}
    bind:checked={$generator.option.exclude.custom}
  />
</section>
