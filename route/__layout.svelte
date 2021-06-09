<script lang="ts">
  import '~/style/font.css'
  import '~/style/base.css'
  import '~/style/main.css'

  import Icon from '~/component/icon.svelte'
</script>

<header class="flex justify-start items-center py-2 mb-16 mt-8 gap-4 w-full">
  <a
    href="/"
    class="flex items-center justify-start p-2 gap-2 hover:bg-opacity-30 hover:bg-gray-300 focus-none"
  >
    <Icon name="robot" />

    <span>Generator</span>
  </a>

  <a
    href="/history"
    class="flex items-center justify-start p-2 gap-2 hover:bg-opacity-30 hover:bg-gray-300 focus-none"
  >
    <Icon name="history" />

    <span>History</span>
  </a>

  <a
    href="/config"
    class="flex items-center justify-start p-2 gap-2 hover:bg-opacity-30 hover:bg-gray-300 focus-none"
  >
    <Icon name="cog" />

    <span>Config</span>
  </a>

  <button
    class="flex items-center justify-center w-9 h-9 hover:bg-opacity-30 hover:bg-gray-300 ml-auto"
  >
    <Icon name="sun" />
  </button>
</header>

<slot />

<footer class="flex justify-center items-center text-center pt-16 pb-4 mt-auto">
  <a
    href="https://github.com/roarknesion/password-generator"
    target="_blank"
    rel="external"
    class="text-gray-500 transition-colors text-opacity-75 hover:text-opacity-100"
  >
    Source Code
  </a>
</footer>
