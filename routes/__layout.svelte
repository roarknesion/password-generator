<script lang="ts">
  import '~/styles/font.css'
  import '~/styles/base.css'
  import '~/styles/main.css'
</script>

<header
  class="flex justify-center items-center text-center pb-24 pt-12 uppercase tracking-widest"
>
  Password Generator
</header>

<slot />

<footer class="flex justify-center items-center text-center pt-16 pb-4 mt-auto">
  <a
    href="https://github.com/roarknesion/password-generator"
    target="_blank"
    rel="external"
    class="transition-opacity opacity-50 hover:opacity-100"
  >
    Source Code
  </a>
</footer>
