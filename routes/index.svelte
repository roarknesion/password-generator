<script lang="ts">
  import password from '~/plugins/password'
  import Icon from '~/components/icon.svelte'
  import Range from '~/components/range.svelte'
  import Check from '~/components/check.svelte'

  const { options, characters } = password.configs

  let value = password.generate()

  const refresh = () => (value = password.generate())

  const copy = () => navigator.clipboard.writeText(value).catch()

  const checkboxes: {
    key: Exclude<keyof typeof options, 'length'>
    text: string
    info: string
  }[] = [
    {
      key: 'digits',
      text: 'Number',
      info: characters.digits
    },
    {
      key: 'lowers',
      text: 'Lowercase',
      info: characters.letters
    },
    {
      key: 'uppers',
      text: 'Uppercase',
      info: characters.letters.toUpperCase()
    },
    {
      key: 'symbols',
      text: 'Sybol',
      info: characters.symbols
    },
    {
      key: 'exclude',
      text: 'Exclude',
      info: characters.exclude
    },
    {
      key: 'duplicate',
      text: 'Dublicate',
      info: 'Lorem Ipsum'
    }
  ]
</script>

<section class="flex items-center border border-gray-900">
  <button
    on:click={refresh}
    class="w-10 h-10 flex-shrink-0 flex items-center justify-center text-center"
  >
    <Icon name="refresh" />
  </button>

  <input
    class="h-10 w-full select-none text-center"
    {value}
    readonly
    on:click={event => {
      const target = event.currentTarget
      if (target.selectionStart == target.selectionEnd && event.detail < 2) target.select()
    }}
  />

  <button
    on:click={copy}
    class="w-10 h-10 flex-shrink-0 flex items-center justify-center text-center"
  >
    <Icon name="clipboard" />
  </button>
</section>

<Range bind:value={options.length} input={refresh} min={2} max={80} />

<div class="flex flex-wrap gap-4 items-center justify-center mt-16">
  {#each checkboxes as checkboxe}
    <Check
      bind:checked={options[checkboxe.key]}
      change={refresh}
      text={checkboxe.text}
      info={checkboxe.info}
    />
  {/each}
</div>
