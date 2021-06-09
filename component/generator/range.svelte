<script lang="ts">
  import Icon from '~/component/icon.svelte'

  export let value = 0
  export let min = 2
  export let max = 80

  const inc = () => {
    value += 1
  }

  const dec = () => {
    value -= 1
  }

  $: percent = ((value - min) * 100) / (max - min)
</script>

<section
  class="relative flex items-center gap-4 mt-12 group h-10"
  style="--left: calc({percent}% - {(percent / 100) * 16}px + 8px);"
>
  <button
    on:click={dec}
    disabled={value <= min}
    class="w-10 h-10 flex-shrink-0 flex items-center justify-center text-center {value <= min
      ? 'opacity-25 cursor-default'
      : ''}"
  >
    <Icon name="minus" />
  </button>

  <div class="relative w-full">
    <div
      class="absolute flex items-center justify-center text-center p-1 top-0 transform -translate-y-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity select-none"
      style="left: var(--left)"
    >
      {value}
    </div>

    <input
      class="range"
      type="range"
      bind:value
      {min}
      {max}
      on:mousedown={() => window.getSelection()?.empty()}
    />
  </div>

  <button
    on:click={inc}
    disabled={value >= max}
    class="w-10 h-10 flex-shrink-0 flex items-center justify-center text-center {value >= max
      ? 'opacity-25 cursor-default'
      : ''}"
  >
    <Icon name="add" />
  </button>
</section>

<style>
  .range {
    @apply appearance-none w-full h-10 bg-transparent flex items-center;
  }

  .range::-webkit-slider-runnable-track {
    background-image: linear-gradient(to right, #0f172a var(--left), #0f172a30 0);

    @apply w-full h-px;
  }

  .range::-webkit-slider-thumb {
    @apply appearance-none w-4 h-4 bg-gray-900 -mt-2;
  }

  .range::-moz-range-track {
    @apply w-full h-px bg-gray-900 bg-opacity-20;
  }

  .range::-moz-range-progress {
    @apply h-px bg-gray-900;
  }

  .range::-moz-range-thumb {
    @apply appearance-none w-4 h-4 bg-gray-900 border-none rounded-none transform;
  }

  .range:focus::-webkit-slider-thumb {
    @apply ring-4 ring-gray-500 ring-opacity-30 outline-none transition-shadow;
  }
</style>
