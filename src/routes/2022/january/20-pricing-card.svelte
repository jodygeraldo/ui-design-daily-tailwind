<svelte:head>
  <title>Pricing Card - UI Design Daily with Tailwind CSS</title>
</svelte:head>

<div class="theme grid min-h-screen place-items-center">
  <div class="container mx-auto px-4 py-4 sm:px-6 lg:px-8">
    <div class="relative mx-auto max-w-lg rounded-2xl bg-white">
      <div class="flex items-end justify-between rounded-t-2xl bg-primary p-9">
        <img src="/assets/images/ps.png" alt="" class="h-24 w-24" />
        <h3 class="pr-5 pb-3 text-2xl font-bold text-white">Photoshop</h3>
      </div>

      <div class="space-y-12 rounded-b-2xl bg-white p-[60px]">
        <div class="space-y-6">
          <h4 class="text-[32px] font-semibold text-[#001e36]">
            NOK 200.99/mo
          </h4>
          <p class="text-2xl text-[#001e3680]">
            Create beautiful graphics, photos, and art on desktop and iPad.
            Comes with Adobe Fresco for drawing and painting.
          </p>
          <a
            class="block text-2xl font-semibold text-[#1142C180] underline underline-offset-2"
            href="#plan">Plan & pricing details</a
          >
        </div>

        <button
          class="w-full rounded-[66px] bg-primary p-4 text-2xl font-semibold text-white"
          >Buy now</button
        >
      </div>

      <div
        class="absolute inset-0 -z-10 rotate-[8.82deg] rounded-2xl bg-[#E9F1FD]"
      />
    </div>
  </div>
</div>

<style>
  .theme {
    --color-primary: #133e61;
  }
</style>
