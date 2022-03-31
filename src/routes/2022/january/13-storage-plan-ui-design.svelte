<script>
  import Icon from '$lib/Icon.svelte'
</script>

<svelte:head>
  <title>Storage Plan UI Design - UI Design Daily with Tailwind CSS</title>
</svelte:head>

<div class="theme grid min-h-screen place-items-center">
  <div class="container mx-auto px-4 py-16 sm:px-6 md:px-8">
    <div class="grid grid-cols-1 place-items-center gap-40 2xl:grid-cols-2">
      <div
        class="relative col-span-1 max-w-fit space-y-6 rounded-3xl bg-[#EBEBEB] p-4 md:p-8 2xl:space-y-[42px] 2xl:p-[60px]"
      >
        <div
          class="absolute -top-5 bottom-0 right-8 left-4 -z-10 rounded-3xl border-2 border-white bg-white/20"
        />
        <div class="flex items-center gap-4">
          <div
            class="flex h-[60px] w-[60px] items-center justify-center rounded-2xl bg-white"
          >
            <Icon id="arrow-left" className="h-10 w-10 text-black" />
          </div>

          <h3 class="text-2xl font-medium">Total storage</h3>
        </div>

        <div class="flex items-center gap-5 2xl:gap-[35px]">
          <div
            class="relative h-48 w-48 shrink-0 rounded-full border-2 border-white/60 md:h-60 md:w-60 2xl:h-80 2xl:w-80"
          >
            <div class="absolute inset-4 rounded-full bg-ascent" />
            <div
              class="absolute inset-4 rounded-full bg-primary shadow-xl shadow-[#303eb740] [clip-path:polygon(50%_0,50%_50%,80%_0)]"
            />
          </div>

          <div class="space-y-[42px]">
            <div class="font-semibold text-black">
              <p class="md:text-2xl">30 GB</p>
              <p class="mt-2">Total storage</p>
            </div>

            <div class="font-semibold text-primary">
              <p class="md:text-2xl">3.6 GB</p>
              <p class="mt-2">10% used</p>
            </div>

            <button
              class="rounded-2xl bg-black px-3 py-2 text-white md:px-6 md:py-4"
              >View details</button
            >
          </div>
        </div>
      </div>

      <div class="relative col-span-1 mt-16">
        <div
          class="absolute -top-24 -bottom-6 right-12 left-8 -z-10 rounded-3xl border-2 border-white bg-white/20"
        >
          <h2 class="mt-8 ml-8 text-2xl font-medium text-black">Plans</h2>
        </div>

        <div class="space-y-4">
          <div
            class="relative min-w-fit rounded-2xl bg-black px-8 py-10 font-semibold md:px-16 md:py-[70px]"
          >
            <div class="text-white">
              <div class="h-2 w-8 rounded-full bg-[#e89a62]" />
              <h3 class="text-[32px]">30 GB</h3>
              <p class="text-2xl">Current plan</p>
            </div>

            <svg
              width="299"
              height="188"
              viewBox="0 0 299 188"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              class="absolute right-0 bottom-0"
            >
              <g opacity="0.6">
                <path
                  d="M335.056 99.4964C287.054 78.2343 245.597 53.3087 183.372 106.134C121.146 158.959 94.363 257.698 11.6939 241.86"
                  stroke="#453636"
                  stroke-width="3"
                />
                <path
                  d="M308.182 153.34C284.62 134.518 247.297 108.325 201.394 133.928C144.017 165.933 88.2881 258.412 5.619 242.575"
                  stroke="#453636"
                  stroke-width="3"
                />
                <path
                  d="M293.922 197.881C270.359 179.059 238.869 148.34 192.966 173.943C135.589 205.948 84.0406 271.706 1.3715 255.868"
                  stroke="#453636"
                  stroke-width="3"
                />
              </g>
            </svg>
          </div>

          <div
            class="relative flex min-w-fit justify-between gap-4 rounded-2xl bg-[#EBEBEB] px-8 py-10 font-semibold md:gap-20 md:px-16 md:py-[70px]"
          >
            <div class="text-black">
              <div class="h-2 w-8 rounded-full bg-[#89A5EE]" />
              <h3 class="text-[32px]">100 GB</h3>
            </div>

            <div class="flex flex-col space-y-4">
              <button
                class="md:text-md self-end rounded-2xl bg-black px-3 py-2 font-medium text-white md:px-6 md:py-4"
                >NOK 17.00/month</button
              >
              <p class="text-sm font-semibold text-primary md:text-base">
                Or prepay anually NOK 170.00/year
              </p>
            </div>

            <svg
              width="300"
              height="188"
              viewBox="0 0 300 188"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              class="absolute left-0 bottom-0"
            >
              <g opacity="0.6">
                <path
                  d="M-35.0947 99.4966C12.9071 78.2344 54.3644 53.3088 116.59 106.134C178.815 158.959 205.599 257.698 288.268 241.86"
                  stroke="white"
                  stroke-width="2"
                />
                <path
                  d="M-8.22093 153.34C15.3418 134.518 52.6649 108.325 98.5671 133.928C155.945 165.933 211.673 258.413 294.343 242.575"
                  stroke="white"
                  stroke-width="2"
                />
                <path
                  d="M6.03966 197.881C29.6024 179.059 61.0929 148.34 106.995 173.944C164.373 205.948 215.921 271.706 298.59 255.868"
                  stroke="white"
                  stroke-width="2"
                />
              </g>
            </svg>
          </div>

          <div
            class="relative flex min-w-fit justify-between gap-4 rounded-2xl bg-[#EBEBEB] px-8 py-10 font-semibold md:gap-20 md:px-16 md:py-[70px]"
          >
            <div class="text-black">
              <div class="h-2 w-8 rounded-full bg-[#89A5EE]" />
              <h3 class="text-[32px]">1 TB</h3>
            </div>

            <div class="flex flex-col space-y-4">
              <button
                class="md:text-md self-end rounded-2xl bg-black px-3 py-2 font-medium text-white md:px-6 md:py-4"
                >NOK 89.00/month</button
              >
              <p class="text-sm font-semibold text-primary md:text-base">
                Or prepay anually NOK 899.00/year
              </p>
            </div>

            <svg
              width="300"
              height="188"
              viewBox="0 0 300 188"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              class="absolute left-0 bottom-0"
            >
              <g opacity="0.6">
                <path
                  d="M-35.0947 99.4966C12.9071 78.2344 54.3644 53.3088 116.59 106.134C178.815 158.959 205.599 257.698 288.268 241.86"
                  stroke="white"
                  stroke-width="2"
                />
                <path
                  d="M-8.22093 153.34C15.3418 134.518 52.6649 108.325 98.5671 133.928C155.945 165.933 211.673 258.413 294.343 242.575"
                  stroke="white"
                  stroke-width="2"
                />
                <path
                  d="M6.03966 197.881C29.6024 179.059 61.0929 148.34 106.995 173.944C164.373 205.948 215.921 271.706 298.59 255.868"
                  stroke="white"
                  stroke-width="2"
                />
              </g>
            </svg>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<style>
  .theme {
    --color-primary: #424fc0;
    --color-ascent: #a0cce2;
  }
</style>
