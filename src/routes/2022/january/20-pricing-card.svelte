<svelte:head>
  <title>Pricing Card - UI Design Daily with Tailwind CSS</title>
</svelte:head>

<div class="theme grid place-items-center min-h-screen">
  <div class="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
    <div class="rounded-2xl bg-white max-w-lg mx-auto relative">
      <div class="bg-primary flex items-end justify-between p-9 rounded-t-2xl">
        <img src="/assets/images/ps.png" alt="" class="w-24 h-24" />
        <h3 class="text-white font-bold text-2xl pr-5 pb-3">Photoshop</h3>
      </div>

      <div class="bg-white rounded-b-2xl p-[60px] space-y-12">
        <div class="space-y-6">
          <h4 class="font-semibold text-[32px] text-[#001e36]">
            NOK 200.99/mo
          </h4>
          <p class="text-[#001e3680] text-2xl">
            Create beautiful graphics, photos, and art on desktop and iPad.
            Comes with Adobe Fresco for drawing and painting.
          </p>
          <a
            class="font-semibold text-2xl text-[#1142C180] underline underline-offset-2 block"
            href="#plan">Plan & pricing details</a
          >
        </div>

        <button
          class="w-full bg-primary p-4 text-white rounded-[66px] font-semibold text-2xl"
          >Buy now</button
        >
      </div>

      <div
        class="absolute inset-0 rotate-[8.82deg] bg-[#E9F1FD] -z-10 rounded-2xl"
      />
    </div>
  </div>
</div>

<style>
  .theme {
    --color-primary: #133e61;
  }
</style>
