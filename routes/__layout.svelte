<script lang="ts">
  import '~/styles/base.css'
  import '~/styles/main.css'
</script>

<header
  class="flex justify-center items-center text-center pb-24 pt-16  font-bold uppercase tracking-widest"
>
  Password Generator
</header>

<slot />

<footer class="flex justify-center items-center text-center pt-16 pb-4 mt-auto">
  <a href="https://github.com/roarknesion/password-generator" target="_blank" rel="external">
    Source Code
  </a>
</footer>
