<script lang="ts">
  import icon from '~/data/icon'

  export let name: keyof typeof icon
  export let size = '15px'
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  width={size}
  height={size}
  viewBox="0 0 15 15"
  fill="none"
>
  {@html icon[name]}
</svg>
