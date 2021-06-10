<script lang="ts">
  import type TypeIcon from '~/type/icon'
  import Icon from '~/component/icon.svelte'
  import { page } from '$app/stores'

  export let path: string
  export let text: string
  export let icon: TypeIcon.Name = 'add'
</script>

<li class:bordered={$page.path == path}>
  <a href={path} class="gap-2 capitalize">
    <Icon name={icon} />

    {text}
  </a>
</li>
