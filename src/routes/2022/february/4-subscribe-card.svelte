<script context="module" lang="ts">
  export async function load() {
    return {
      maxage: 31536000,
    }
  }

  import Icon from '$lib/Icon.svelte'
</script>

<svelte:head>
  <title>Subscribe Card - UI Design Daily with Tailwind CSS</title>
</svelte:head>

<div class="theme grid min-h-screen place-items-center">
  <div class="container mx-auto px-8 py-4">
    <div
      class="relative mx-auto max-w-lg space-y-4 rounded-xl bg-gradient-to-br from-[#f6f8ff] to-[#E7EAFE] p-10 lg:space-y-8 lg:rounded-3xl lg:p-20"
    >
      <div
        class="absolute top-[55%] -bottom-4 -right-4 left-4 -z-10 rounded-xl bg-[#C8CFF4] lg:-bottom-8 lg:-right-8 lg:left-8"
      />
      <div class="space-y-2">
        <h2 class="text-2xl font-black text-primary lg:text-3xl">
          Try it now!
        </h2>
        <p class="font-medium lg:text-xl">Free trial, no obligation</p>
      </div>

      <div class="space-y-1">
        <label class="font-medium" for="email">Work Email Address</label>
        <input
          type="email"
          name="email"
          id="email"
          class="block w-full rounded px-3 py-2 text-sm font-medium lg:px-6  lg:py-4 lg:text-base"
          placeholder="Enter your work email address"
        />
      </div>

      <div class="space-y-2">
        <div class="flex items-center gap-3">
          <button class="h-8 w-8 shrink-0 rounded border-2 border-[#8A93C3]" />
          <p class="text-sm font-medium lg:text-base">
            I Agree to the <span class="underline underline-offset-1"
              >Terms and Conditions</span
            >.
          </p>
        </div>
        <div class="flex items-center gap-3">
          <button class="h-8 w-8 shrink-0 rounded border-2 border-[#8A93C3]" />
          <p class="text-sm font-medium lg:text-base">
            Subscribe to our newsletter.
          </p>
        </div>
        <div class="flex items-center gap-3">
          <div class="relative">
            <button class="h-8 w-8 shrink-0 rounded bg-primary" />
            <Icon
              id="check"
              class="absolute top-1/2 bottom-1/2 right-1/2 h-5 w-5 -translate-y-[65%] translate-x-1/2 text-white"
            />
          </div>
          <p class="text-sm font-medium lg:text-base">
            Subscribe to our trial onboarding emails.
          </p>
        </div>
      </div>

      <button
        class="w-full rounded border border-[#cb6565] bg-ascent px-3 py-2 text-sm font-medium text-primary lg:px-6 lg:py-4 lg:text-base"
        >Download Now</button
      >
    </div>
  </div>
</div>

<style>
  .theme {
    --color-primary: #141a3a;
    --color-ascent: #fdc3d4;
  }
</style>
