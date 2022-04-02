<script lang="ts">
  import type { IconId } from '$lib/IconType'

  export let id: IconId
  let className: svelte.JSX.SVGAttributes<SVGSVGElement>['class']

  export { className as class }
</script>

<svg width="15" height="15" viewBox="0 0 15 15" fill="none" class={className}>
  <use href="/assets/icons/{id}.svg#{id}" />
</svg>
