<script lang="ts">
  import '~/style/font.css'
  import '~/style/base.css'
  import '~/style/main.css'

  import MenuItem from '~/component/layout/menu-item.svelte'
  import Icon from '~/component/icon.svelte'

  import global from '~/store/global'
</script>

<header class="flex justify-between items-center py-2 mb-16 mt-8 gap-4 w-full">
  <ul class="menu items-stretch horizontal">
    <MenuItem path="/" text="generator" icon="robot" />
    <MenuItem path="/history" text="history" icon="history" />
    <MenuItem path="/config" text="config" icon="cog" />
  </ul>

  <button class="btn btn-square btn-ghost" on:click={global.toggle}>
    <Icon name="sun" />
  </button>
</header>

<slot />

<footer class="flex justify-center items-center text-center pt-16 pb-4 mt-auto">
  <a
    href="https://github.com/roarknesion/password-generator"
    target="_blank"
    rel="external"
    class="link link-hover"
  >
    Source Code
  </a>
</footer>
