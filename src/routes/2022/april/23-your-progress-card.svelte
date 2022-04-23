<script context="module">
  export async function load() {
    return {
      maxage: 31536000,
    }
  }
</script>

<svelte:head>
  <title>Your Progress Card - UI Design Daily with Tailwind CSS</title>
</svelte:head>

<div class="theme grid min-h-screen place-items-center">
  <div class="container mx-auto px-4 py-4 sm:px-6 lg:px-8">
    <div
      class="relative mx-auto max-w-sm rounded-2xl bg-white p-6 text-custom-1 shadow shadow-custom-2 sm:p-8"
    >
      <div
        class="absolute right-4 bottom-12 -top-8 -left-8 -z-10 hidden rounded-2xl bg-custom-2 sm:block"
      />

      <div>
        <h2 class="text-lg font-bold">Your progress</h2>
        <div class="mt-8 items-center gap-4 sm:flex">
          <div
            class="inline-flex h-20 w-20 items-center justify-center rounded-full border-4 border-custom-2 bg-white text-xl font-bold"
          >
            93%
          </div>
          <div class="mt-4 sm:mt-0">
            <p class="text-lg font-bold">32 of 42 complete</p>
            <p class="text-sm font-medium">Finish cource to get certificate</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<style>
  .theme {
    --color-1: #171531;
    --color-2: #d2d0f5;
  }
</style>
