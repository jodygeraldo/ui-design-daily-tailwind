<script>
  import Icon from '/src/components/Icon.svelte'
</script>

<svelte:head>
  <title>Price Card - UI Design Daily with Tailwind CSS</title>
</svelte:head>

<div class="theme grid place-items-center min-h-screen">
  <div class="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
    <div
      class="rounded-3xl shadow-[0_43px_50px_-25px_#9dace330] bg-white p-12 max-w-lg mx-auto"
    >
      <div
        class="flex justify-center items-center flex-col gap-1 border border-ascent w-28 h-28 mx-auto rounded-full"
      >
        <Icon id="image" className="w-10 h-10 text-primary" />
        <p class="font-bold text-primary">BASIC</p>
      </div>

      <div class="-space-y-1.5 text-primary mt-4 text-center">
        <div class="flex items-center gap-2 justify-center">
          <p class="font-medium">KR</p>
          <p class="font-bold text-4xl">199</p>
        </div>
        <p class="font-medium">NOK/MONTH</p>
      </div>

      <div class="space-y-4 mt-16 text-center">
        <div class="flex gap-2 justify-center">
          <p
            class="w-16 h-12 rounded-2xl font-medium text-2xl text-primary border-2 border-tertiary inline-flex justify-center items-center"
          >
            10
          </p>
          <p
            class="w-16 h-12 rounded-2xl font-medium text-2xl text-white bg-primary inline-flex justify-center items-center"
          >
            25
          </p>
          <p
            class="w-16 h-12 rounded-2xl font-medium text-2xl text-primary border-2 border-tertiary inline-flex justify-center items-center"
          >
            50
          </p>
          <p
            class="w-16 h-12 rounded-2xl font-medium text-2xl text-primary border-2 border-tertiary inline-flex justify-center items-center"
          >
            100
          </p>
        </div>

        <p class="font-medium text-primary">Downloads per month</p>
      </div>

      <button
        class="shadow-[0_14px_54px_0_1b255a30] text-white rounded-lg p-6 w-full bg-primary mt-10"
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
