<script>
  import Icon from '/src/components/Icon.svelte'
</script>

<svelte:head>
  <title>Subscribe Card - UI Design Daily with Tailwind CSS</title>
</svelte:head>

<div class="theme grid place-items-center min-h-screen">
  <div class="container mx-auto px-8 py-4">
    <div
      class="rounded-xl lg:rounded-3xl p-10 lg:p-20 space-y-4 lg:space-y-8 bg-gradient-to-br from-[#f6f8ff] to-[#E7EAFE] max-w-lg mx-auto relative"
    >
      <div
        class="absolute top-[55%] -bottom-4 -right-4 left-4 lg:-bottom-8 lg:-right-8 lg:left-8 bg-[#C8CFF4] -z-10 rounded-xl"
      />
      <div class="space-y-2">
        <h2 class="text-primary text-2xl lg:text-3xl font-black">
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
          class="block w-full rounded px-3 py-2 lg:px-6 lg:py-4 font-medium  text-sm lg:text-base"
          placeholder="Enter your work email address"
        />
      </div>

      <div class="space-y-2">
        <div class="flex items-center gap-3">
          <button class="border-2 border-[#8A93C3] w-8 h-8 rounded shrink-0" />
          <p class="font-medium text-sm lg:text-base">
            I Agree to the <span class="underline underline-offset-1"
              >Terms and Conditions</span
            >.
          </p>
        </div>
        <div class="flex items-center gap-3">
          <button class="border-2 border-[#8A93C3] w-8 h-8 rounded shrink-0" />
          <p class="font-medium text-sm lg:text-base">
            Subscribe to our newsletter.
          </p>
        </div>
        <div class="flex items-center gap-3">
          <div class="relative">
            <button class="bg-primary w-8 h-8 rounded shrink-0" />
            <Icon
              id="check"
              className="h-5 w-5 absolute top-1/2 bottom-1/2 right-1/2 -translate-y-[65%] translate-x-1/2 text-white"
            />
          </div>
          <p class="font-medium text-sm lg:text-base">
            Subscribe to our trial onboarding emails.
          </p>
        </div>
      </div>

      <button
        class="bg-ascent border border-[#cb6565] px-3 py-2 lg:px-6 lg:py-4 w-full font-medium text-primary rounded text-sm lg:text-base"
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
