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
      class="bg-white text-custom-1 max-w-sm mx-auto p-6 sm:p-8 rounded-2xl shadow shadow-custom-2 relative"
    >
      <div
        class="hidden sm:block absolute right-4 bg-custom-2 bottom-12 -top-8 -left-8 rounded-2xl -z-10"
      />

      <div>
        <h2 class="text-lg font-bold">Your progress</h2>
        <div class="sm:flex gap-4 mt-8 items-center">
          <div
            class="rounded-full bg-white border-4 border-custom-2 font-bold text-xl h-20 w-20 inline-flex items-center justify-center"
          >
            93%
          </div>
          <div class="mt-4 sm:mt-0">
            <p class="font-bold text-lg">32 of 42 complete</p>
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
