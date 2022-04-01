<script context="module" lang="ts">
  export async function load() {
    return {
      maxage: 43200,
    }
  }

  import '../app.css'
</script>

<slot />
