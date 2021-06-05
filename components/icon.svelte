<script lang="ts">
  const icons = {
    plus: `<path d="M7.5 1v13M1 7.5h13" stroke="currentColor" />`,
    minus: `<path d="M1 7.5h13" stroke="currentColor" />`,
    refresh: `<path d="M7.5 14.5A7 7 0 013.17 2M7.5.5A7 7 0 0111.83 13m-.33-3v3.5H15M0 1.5h3.5V5" stroke="currentColor" />`,
    clipboard: `<path d="M11 1.5h2.5v12a1 1 0 01-1 1h-10a1 1 0 01-1-1v-12H4m.5-1h6v2a1 1 0 01-1 1h-4a1 1 0 01-1-1v-2z" stroke="currentColor" />`,
    info: `<path d="M7 4.5V5h1v-.5H7zm1-.01v-.5H7v.5h1zM8 11V7H7v4h1zm0-6.5v-.01H7v.01h1zM6 8h1.5V7H6v1zm0 3h3v-1H6v1zM7.5 1A6.5 6.5 0 0114 7.5h1A7.5 7.5 0 007.5 0v1zM1 7.5A6.5 6.5 0 017.5 1V0A7.5 7.5 0 000 7.5h1zM7.5 14A6.5 6.5 0 011 7.5H0A7.5 7.5 0 007.5 15v-1zm0 1A7.5 7.5 0 0015 7.5h-1A6.5 6.5 0 017.5 14v1z" fill="currentColor" />`
  }

  export let name: keyof typeof icons
  export let size = '15px'

  let icon = icons[name]
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  width={size}
  height={size}
  viewBox="0 0 15 15"
  fill="none"
>
  {@html icon}
</svg>
