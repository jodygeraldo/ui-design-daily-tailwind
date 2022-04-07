<script context="module">
  export async function load() {
    return {
      maxage: 31536000,
    }
  }
</script>

<script lang="ts">
  import Icon from '$lib/Icon.svelte'
</script>

<svelte:head>
  <title>Profile Page Header - UI Design Daily with Tailwind CSS</title>
</svelte:head>

<div class="theme grid min-h-screen place-items-center">
  <div class="container mx-auto px-4 py-4 sm:px-6 lg:px-8">
    <div
      class="relative rounded-3xl bg-custom-4 px-6 py-8 text-custom-1 sm:px-8 md:px-10 md:py-12 lg:px-12"
    >
      <div
        class="absolute inset-x-[5%] bottom-0 -z-10 h-8 rounded-3xl bg-custom-5 blur-2xl"
      />

      <div class="justify-between gap-20 md:flex">
        <div class="flex-1">
          <img src="/assets/images/person-10.png" alt="" class="h-24 w-24" />
          <div class="mt-5 xl:w-4/5">
            <h3 class="mt-2 text-xl font-bold sm:text-2xl">MetaMask</h3>
            <p class="mt-2 text-sm font-semibold sm:text-base">@metaMask</p>
            <p class="mt-2 sm:text-lg">
              MetaMask brings Ethereum to your web browser
            </p>
          </div>
          <div class="mt-4 flex flex-wrap gap-4">
            <div class="rounded-2xl border border-custom-3 bg-white p-4">
              <Icon id="github-logo" class="h-6 w-6 text-custom-1" />
            </div>
            <div class="rounded-2xl border border-custom-3 bg-white p-4">
              <Icon id="linkedin-logo" class="h-6 w-6 text-custom-1" />
            </div>
            <div class="rounded-2xl border border-custom-3 bg-white p-4">
              <Icon id="discord-logo" class="h-6 w-6 text-custom-1" />
            </div>
            <div class="rounded-2xl border border-custom-3 bg-white p-4">
              <Icon id="vercel-logo" class="h-6 w-6 text-custom-1" />
            </div>
          </div>
        </div>

        <div
          class="mt-4 flex flex-1 flex-col justify-between md:max-w-sm xl:mt-16"
        >
          <div>
            <div class="flex justify-between">
              <p class="sm:text-lg">6/8 Organizations</p>
              <Icon id="info-circled" class="h-8 w-8 text-custom-1" />
            </div>
            <div class="relative mt-2 h-3 w-full">
              <div
                class="absolute top-0 left-0 h-full w-full rounded-full bg-custom-3"
              />
              <div
                class="absolute top-0 left-0 h-full w-4/5 rounded-full bg-custom-2"
              />
            </div>
          </div>

          <div class="mt-8 flex flex-col gap-4 md:mt-0 md:items-end">
            <p class="text-xl sm:text-2xl">
              <span class="font-bold">4K</span> Followers
            </p>
            <button
              class="rounded-lg bg-custom-1 py-4 px-16 font-semibold text-white sm:text-lg"
              >Follow</button
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<style>
  .theme {
    --color-1: #13143c;
    --color-2: #f17a37;
    --color-3: #dfdfdf;
    --color-4: #fffaf2;
    --color-5: #cfcfcf;
  }
</style>
