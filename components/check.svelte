<script lang="ts">
  export let checked = false
  export let change = () => {}
  export let text = ''
  export let info = ''
</script>

<label class="relative flex items-center justify-center select-none p-2 gap-2 group">
  <input
    type="checkbox"
    class="checkbox w-4 h-4 border border-gray-900 appearance-none checked:bg-gray-900 checked:border-transparent"
    bind:checked
    on:change={change}
  />

  <span class="capitalize">{text}</span>

  <div
    class="absolute bg-gray-900 text-white p-2 whitespace-nowrap top-full opacity-0 transition-all group-hover:opacity-100 text-xs transform scale-0 group-hover:scale-100"
  >
    {info}
  </div>
</label>

<style>
  .checkbox:checked {
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' stroke-width='3' stroke='%23ffffff' fill='none' stroke-linecap='square' stroke-linejoin='revert'%3E%3Cpath stroke='none' d='M0 0h24v24H0z' fill='none'/%3E%3Cpath d='M5 12l5 5l10 -10' /%3E%3C/svg%3E");
    background-position: center center;
    background-repeat: no-repeat;
    background-size: 12px;
  }
</style>
