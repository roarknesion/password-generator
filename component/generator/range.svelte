<script lang="ts">
  import Icon from '~/component/icon.svelte'

  export let value = 0
  export let min = 2
  export let max = 80

  $: percent = ((value - min) * 100) / (max - min)
</script>

<section
  class="relative flex items-center gap-4 mt-12 group h-10"
  style="--left: calc({percent}% - {(percent / 100) * 16}px + 8px);"
>
  <button
    on:click={() => (value -= 1)}
    disabled={value <= min}
    class="btn btn-ghost btn-square"
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
    on:click={() => (value += 1)}
    disabled={value >= max}
    class="btn btn-ghost btn-square"
  >
    <Icon name="add" />
  </button>
</section>

<style>
  .range {
    @apply appearance-none w-full h-10 bg-transparent flex items-center;
  }

  .range::-webkit-slider-runnable-track {
    background-image: linear-gradient(
      to right,
      hsl(var(--bc)) var(--left),
      hsla(var(--bc) / 0.5) 0
    );

    @apply w-full h-px;
  }

  .range::-webkit-slider-thumb {
    @apply appearance-none w-4 h-4 bg-base-content -mt-2;
  }

  .range::-moz-range-track {
    @apply w-full h-px bg-base-content bg-opacity-50;
  }

  .range::-moz-range-progress {
    @apply h-px bg-base-content;
  }

  .range::-moz-range-thumb {
    @apply appearance-none w-4 h-4 bg-base-content border-none rounded-none transform;
  }

  .range:focus::-webkit-slider-thumb {
    @apply ring-1 ring-offset-2 ring-offset-base-100 ring-base-content;
  }

  .range:focus::-moz-range-thumb {
    @apply ring-1 ring-offset-2 ring-offset-base-100 ring-base-content;
  }
</style>
