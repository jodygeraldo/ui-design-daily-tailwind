<script context="module" lang="ts">
  export async function load() {
    return {
      maxage: 31536000,
    }
  }
</script>

<svelte:head>
  <title>Subscribe - UI Design Daily with Tailwind CSS</title>
</svelte:head>

<div class="theme grid min-h-screen place-items-center">
  <div class="container mx-auto px-4 py-4 sm:px-6 lg:px-8">
    <div
      class="relative mx-auto max-w-4xl rounded-2xl bg-primary p-6 text-white lg:p-10 xl:p-14"
    >
      <div
        class="absolute inset-x-4 top-4 -bottom-4 -z-10 hidden rounded-2xl bg-[#222B5C] sm:block lg:inset-x-6 lg:top-6 lg:-bottom-6 xl:inset-x-8 xl:top-8 xl:-bottom-8"
      />
      <div class="space-y-6 sm:w-5/6">
        <h2 class="text-sm font-medium lg:text-base xl:text-lg">HOW TO</h2>

        <h3 class="text-lg font-bold lg:text-xl xl:text-2xl">
          Learn smart gadget and internet tips and tricks with our entertaining
          and ingenious how-tos.
        </h3>

        <div class="items-center gap-4 sm:flex">
          <input
            type="text"
            placeholder="Enter your email address"
            class="w-full flex-1 truncate rounded border-4 border-[#747db0] bg-transparent p-4 placeholder:text-lg placeholder:text-white sm:w-0 lg:p-6 lg:placeholder:text-xl xl:p-8 xl:placeholder:text-2xl"
          />
          <button
            class="mt-4 w-full rounded bg-ascent p-4 text-lg sm:mt-0 sm:w-auto lg:p-6 lg:text-xl xl:p-8 xl:text-2xl"
            >Sign me up!</button
          >
        </div>

        <p class="text-xs lg:text-sm xl:text-base">
          By signing up, you agree to our <span
            class="underline underline-offset-1">Terms of Use</span
          >
          and acknowledge the data practices in our
          <span class="underline underline-offset-1">Privacy Policy</span>. You
          may unsubscribe at any time.
        </p>
      </div>
    </div>
  </div>
</div>

<style>
  .theme {
    --color-primary: #47518b;
    --color-ascent: #9d50ff;
  }
</style>
