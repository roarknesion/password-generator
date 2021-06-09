<script lang="ts">
  import Icon from '~/component/icon.svelte'

  export let checked = false
  export let change = (value: boolean) => {}
  export let text = ''
  export let info = ''

  let show = false
</script>

{#if info}
  <div class="relative flex w-full items-center justify-center">
    <label class="flex items-center justify-start p-2 gap-2 w-full">
      <input
        type="checkbox"
        class="checkbox w-4 h-4 border border-gray-900 appearance-none checked:bg-gray-900 checked:border-transparent"
        bind:checked
        on:change={e => change(e.currentTarget.checked)}
      />

      <span class="capitalize select-none">{text}</span>
    </label>

    <div
      class="flex items-center justify-center w-10 h-10"
      on:mouseenter={() => (show = true)}
      on:mouseleave={() => (show = false)}
    >
      <Icon name="info" />
    </div>

    <div
      class={[
        'absolute bg-gray-900 text-white p-2 transition-all text-xs transform origin-right w-full pointer-events-none z-10 whitespace-normal',
        show ? 'scale-100 opacity-100' : 'opacity-0 scale-0'
      ].join(' ')}
    >
      {info}
    </div>
  </div>
{/if}

<style>
  .checkbox:checked {
    background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 15 15' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 7l4.5 4.5L14 3' stroke='%23fff' stroke-linecap='square'%3E%3C/path%3E%3C/svg%3E");
    background-position: center center;
    background-repeat: no-repeat;
    background-size: 10px;
  }

  div::selection {
    @apply bg-white bg-opacity-40;
  }
</style>
