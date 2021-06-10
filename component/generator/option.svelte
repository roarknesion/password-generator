<script lang="ts">
  export let checked = false
  export let text = ''
  export let info = ''
  export let show = true

  let label = {} as { parent: HTMLSpanElement; child: HTMLSpanElement }

  let over = () => {
    const length = label.child.offsetWidth - label.parent.offsetWidth

    if (length < 10) return

    const speed = 80
    const time = length / speed

    label.child.style.left = `-${length}px`
    label.child.style.transition = `left ${time}s linear`
  }

  let out = () => {
    label.child.style.left = `0px`
    label.child.style.transition = `left 0.2s ease-out`
  }
</script>

{#if info}
  <!-- svelte-ignore a11y-label-has-associated-control -->
  <label class="label cursor-pointer w-full gap-2 px-0" on:mouseover={over} on:mouseout={out}>
    <span class="label-text whitespace-nowrap overflow-hidden" bind:this={label.parent}>
      <span bind:this={label.child} class="relative left-0">
        {#if show}
          {text}
        {:else}
          {info}
        {/if}
      </span>
    </span>

    <div class="flex-shrink-0">
      <input type="checkbox" class="toggle" {checked} />
      <span class="toggle-mark" />
    </div>
  </label>
{/if}
