<script context="module" lang="ts">
  export async function load() {
    return {
      maxage: 31536000,
    }
  }

  import Icon from '$lib/Icon.svelte'
</script>

<svelte:head>
  <title>Price Card - UI Design Daily with Tailwind CSS</title>
</svelte:head>

<div class="theme grid min-h-screen place-items-center">
  <div class="container mx-auto px-4 py-4 sm:px-6 lg:px-8">
    <div
      class="mx-auto max-w-lg rounded-3xl bg-white p-12 shadow-[0_43px_50px_-25px_#9dace330]"
    >
      <div
        class="mx-auto flex h-28 w-28 flex-col items-center justify-center gap-1 rounded-full border border-ascent"
      >
        <Icon id="image" class="h-10 w-10 text-primary" />
        <p class="font-bold text-primary">BASIC</p>
      </div>

      <div class="mt-4 -space-y-1.5 text-center text-primary">
        <div class="flex items-center justify-center gap-2">
          <p class="font-medium">KR</p>
          <p class="text-4xl font-bold">199</p>
        </div>
        <p class="font-medium">NOK/MONTH</p>
      </div>

      <div class="mt-16 space-y-4 text-center">
        <div class="flex justify-center gap-2">
          <p
            class="inline-flex h-12 w-16 items-center justify-center rounded-2xl border-2 border-tertiary text-2xl font-medium text-primary"
          >
            10
          </p>
          <p
            class="inline-flex h-12 w-16 items-center justify-center rounded-2xl bg-primary text-2xl font-medium text-white"
          >
            25
          </p>
          <p
            class="inline-flex h-12 w-16 items-center justify-center rounded-2xl border-2 border-tertiary text-2xl font-medium text-primary"
          >
            50
          </p>
          <p
            class="inline-flex h-12 w-16 items-center justify-center rounded-2xl border-2 border-tertiary text-2xl font-medium text-primary"
          >
            100
          </p>
        </div>

        <p class="font-medium text-primary">Downloads per month</p>
      </div>

      <button
        class="mt-10 w-full rounded-lg bg-primary p-6 text-white shadow-[0_14px_54px_0_#1b255a30]"
        >Subscribe</button
      >
    </div>
  </div>
</div>

<style>
  .theme {
    --color-primary: #1b255a;
    --color-ascent: #a6add2;
    --color-tertiary: #d2d9f3;
  }
</style>
