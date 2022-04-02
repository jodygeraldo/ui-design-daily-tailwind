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

<div class="theme grid place-items-center min-h-screen">
  <div class="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
    <div
      class="text-white rounded-2xl bg-primary p-6 lg:p-10 xl:p-14 max-w-4xl mx-auto relative"
    >
      <div
        class="-z-10 absolute hidden sm:block bg-[#222B5C] top-4 -bottom-4 inset-x-4 lg:top-6 lg:-bottom-6 lg:inset-x-6 xl:top-8 xl:-bottom-8 xl:inset-x-8 rounded-2xl"
      />
      <div class="sm:w-5/6 space-y-6">
        <h2 class="text-sm lg:text-base xl:text-lg font-medium">HOW TO</h2>

        <h3 class="text-lg lg:text-xl xl:text-2xl font-bold">
          Learn smart gadget and internet tips and tricks with our entertaining
          and ingenious how-tos.
        </h3>

        <div class="sm:flex items-center gap-4">
          <input
            type="text"
            placeholder="Enter your email address"
            class="w-full sm:w-0 flex-1 truncate bg-transparent border-4 border-[#747db0] rounded placeholder:text-lg placeholder:text-white p-4 lg:placeholder:text-xl xl:placeholder:text-2xl lg:p-6 xl:p-8"
          />
          <button
            class="mt-4 sm:mt-0 w-full sm:w-auto text-lg rounded bg-ascent p-4 lg:text-xl xl:text-2xl lg:p-6 xl:p-8"
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
