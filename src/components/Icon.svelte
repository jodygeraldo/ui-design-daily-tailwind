<script>
  export let id
  export let className
</script>

<svg width="15" height="15" viewBox="0 0 15 15" fill="none" class={className}>
  <use href="/static/icons/{id}.svg#{id}" />
</svg>
