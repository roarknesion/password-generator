<script lang="ts">
  import Icon from '~/components/icon.svelte'
  import Range from '~/components/range.svelte'
  import Check from '~/components/check.svelte'

  import password from '~/plugins/password'

  const refresh = () => (value = password.generate())

  const copy = () => navigator.clipboard.writeText(value).catch()

  let value = password.generate()

  const check = () => {
    if (
      !password.option.include.digit &&
      !password.option.include.letter &&
      !password.option.include.symbol &&
      (!password.include.custom || !password.option.include.custom)
    ) {
      if (password.include.custom) {
      }

      password.option.include.digit = true
    }
  }

  const options: { text: string; info: string; bind: boolean }[] = [
    {
      text: 'To Capital',
      info: 'Include uppercase versions of existing characters',
      get bind() {
        return password.option.other.uppercase
      },
      set bind(value: boolean) {
        password.option.other.uppercase = value
      }
    },

    {
      text: 'Include Digits',
      info: password.include.digit,
      get bind() {
        return password.option.include.digit
      },
      set bind(value: boolean) {
        password.option.include.digit = value
        check()
      }
    },

    {
      text: 'Include Letters',
      info: password.include.letter,
      get bind() {
        return password.option.include.letter
      },
      set bind(value: boolean) {
        password.option.include.letter = value
        check()
      }
    },

    {
      text: 'Include Symbols',
      info: password.include.symbol,
      get bind() {
        return password.option.include.symbol
      },
      set bind(value: boolean) {
        password.option.include.symbol = value
        check()
      }
    },

    {
      text: 'Include Custom Chars',
      info: password.include.custom,
      get bind() {
        return password.option.include.custom
      },
      set bind(value: boolean) {
        password.option.include.custom = value
        check()
      }
    },

    {
      text: 'Exclude Similar Chars',
      info: password.exclude.similar,
      get bind() {
        return password.option.exclude.similar
      },
      set bind(value: boolean) {
        password.option.exclude.similar = value
      }
    },

    {
      text: 'Exclude Custom Chars',
      info: password.exclude.custom,
      get bind() {
        return password.option.exclude.custom
      },
      set bind(value: boolean) {
        password.option.exclude.custom = value
      }
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

<Range bind:value={password.length} input={refresh} min={1} max={80} />

<div class="flex flex-col gap-4 items-center justify-center mt-12 max-w-xs mx-auto w-full">
  {#each options as option}
    {#if option.info}
      <Check
        bind:checked={option.bind}
        change={refresh}
        text={option.text}
        info={option.info}
      />
    {/if}
  {/each}
</div>
