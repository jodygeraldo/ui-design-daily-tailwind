<script context="module" lang="ts">
  import Icon from '$lib/Icon.svelte'

  export async function load() {
    return {
      maxage: 31536000,
    }
  }
</script>

<svelte:head>
  <title>Cards - UI Design Daily with Tailwind CSS</title>
</svelte:head>

<div class="theme grid min-h-screen place-items-center">
  <div class="container mx-auto px-4 py-4 sm:px-6 lg:px-8">
    <div
      class="grid grid-cols-1 items-start gap-8 md:grid-cols-2 xl:mt-60 xl:grid-cols-3"
    >
      <!-- card 1 -->
      <div
        class="col-span-1 mx-auto max-w-md space-y-8 rounded-2xl bg-white p-8 text-custom-1 sm:p-12 xl:-translate-y-64 xl:translate-x-32 2xl:translate-x-52"
      >
        <div class="flex items-center gap-4">
          <img src="/assets/images/person-3.png" alt="" class="h-20 w-20" />
          <div>
            <h2 class="text-lg font-black">Debra Stephens</h2>
            <div class="mt-2 flex items-center gap-1">
              <Icon id="globe" class="h-5 w-5" />
              <p class="text-sm font-medium">Minneapolis, MN, USA</p>
            </div>
          </div>
        </div>

        <div>
          <button
            class="flex w-full items-center justify-center gap-1 rounded-lg bg-custom-1 p-3 text-white"
          >
            <Icon id="person" class="h-5 w-5" />
            <span class="font-medium">Follow</span>
          </button>

          <button
            class="mt-2 flex w-full items-center justify-center gap-1 rounded-lg border border-custom-1 bg-white p-3"
          >
            <Icon id="envelope-closed" class="h-5 w-5" />
            <span class="font-medium">Follow</span>
          </button>
        </div>
      </div>

      <!-- background -->
      <div
        class="col-span-1 mx-auto hidden h-64 w-96 rounded-[60px] bg-custom-1 xl:block"
      />

      <!-- card 2 -->
      <div
        class="col-span-1 mx-auto max-w-xs space-y-8 rounded-2xl bg-white p-8 text-custom-1 sm:p-12 xl:-translate-y-16 xl:-translate-x-60 2xl:-translate-x-[345px]"
      >
        <div>
          <div>
            <h2 class="text-lg font-black">Worlds</h2>
            <div class="mt-2 flex justify-between">
              <div class="flex items-center gap-1.5">
                <Icon id="heart" class="h-5 w-5" />
                <p class="text-sm font-medium">665</p>
              </div>

              <div class="flex items-center gap-1.5">
                <Icon id="eye-open" class="h-5 w-5" />
                <p class="text-sm font-medium">78</p>
              </div>

              <div class="flex items-center gap-1.5">
                <Icon id="file-text" class="h-5 w-5" />
                <p class="text-sm font-medium">88</p>
              </div>
            </div>
          </div>
        </div>

        <p class="text-sm font-medium opacity-60">Published: March 7th 2022</p>
      </div>
    </div>
  </div>
</div>

<style>
  .theme {
    --color-1: #291f68;
  }
</style>
