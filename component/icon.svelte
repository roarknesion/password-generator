<script lang="ts">
  import type { Name, Size } from '~/type/icon'
  import icon from '~/data/icon'

  export let name: Name
  export let size: Size = '15px'
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
