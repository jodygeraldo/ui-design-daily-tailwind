<script>
  import Icon from '/src/components/Icon.svelte'
</script>

<svelte:head>
  <title>Storage Plan UI Design - UI Design Daily with Tailwind CSS</title>
</svelte:head>

<div class="theme grid place-items-center min-h-screen">
  <div class="container mx-auto px-4 sm:px-6 md:px-8 py-16">
    <div class="grid grid-cols-1 2xl:grid-cols-2 gap-40 place-items-center">
      <div
        class="p-4 md:p-8 2xl:p-[60px] rounded-3xl space-y-6 2xl:space-y-[42px] bg-[#EBEBEB] max-w-fit col-span-1 relative"
      >
        <div
          class="absolute bg-white/20 -top-5 bottom-0 right-8 left-4 border-2 border-white rounded-3xl -z-10"
        />
        <div class="flex gap-4 items-center">
          <div
            class="bg-white rounded-2xl flex w-[60px] h-[60px] justify-center items-center"
          >
            <Icon id="arrow-left" className="h-10 w-10 text-black" />
          </div>

          <h3 class="font-medium text-2xl">Total storage</h3>
        </div>

        <div class="flex gap-5 2xl:gap-[35px] items-center">
          <div
            class="shrink-0 relative w-48 h-48 md:w-60 md:h-60 2xl:w-80 2xl:h-80 rounded-full border-2 border-white/60"
          >
            <div class="absolute bg-ascent inset-4 rounded-full" />
            <div
              class="absolute bg-primary inset-4 rounded-full [clip-path:polygon(50%_0,50%_50%,80%_0)] shadow-xl shadow-[#303eb740]"
            />
          </div>

          <div class="space-y-[42px]">
            <div class="text-black font-semibold">
              <p class="md:text-2xl">30 GB</p>
              <p class="mt-2">Total storage</p>
            </div>

            <div class="text-primary font-semibold">
              <p class="md:text-2xl">3.6 GB</p>
              <p class="mt-2">10% used</p>
            </div>

            <button
              class="bg-black rounded-2xl px-3 py-2 md:px-6 md:py-4 text-white"
              >View details</button
            >
          </div>
        </div>
      </div>

      <div class="col-span-1 relative mt-16">
        <div
          class="absolute bg-white/20 -top-24 -bottom-6 right-12 left-8 border-2 border-white rounded-3xl -z-10"
        >
          <h2 class="font-medium text-2xl text-black mt-8 ml-8">Plans</h2>
        </div>

        <div class="space-y-4">
          <div
            class="rounded-2xl bg-black px-8 md:px-16 py-10 md:py-[70px] font-semibold relative min-w-fit"
          >
            <div class="text-white">
              <div class="rounded-full h-2 w-8 bg-[#e89a62]" />
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
            class="rounded-2xl bg-[#EBEBEB] px-8 md:px-16 py-10 md:py-[70px] font-semibold relative min-w-fit flex justify-between gap-4 md:gap-20"
          >
            <div class="text-black">
              <div class="rounded-full h-2 w-8 bg-[#89A5EE]" />
              <h3 class="text-[32px]">100 GB</h3>
            </div>

            <div class="space-y-4 flex-col flex">
              <button
                class="md:text-md font-medium text-white rounded-2xl px-3 py-2 md:px-6 md:py-4 bg-black self-end"
                >NOK 17.00/month</button
              >
              <p class="font-semibold text-primary text-sm md:text-base">
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
            class="rounded-2xl bg-[#EBEBEB] px-8 md:px-16 py-10 md:py-[70px] font-semibold relative min-w-fit flex justify-between gap-4 md:gap-20"
          >
            <div class="text-black">
              <div class="rounded-full h-2 w-8 bg-[#89A5EE]" />
              <h3 class="text-[32px]">1 TB</h3>
            </div>

            <div class="space-y-4 flex-col flex">
              <button
                class="md:text-md font-medium text-white rounded-2xl px-3 py-2 md:px-6 md:py-4 bg-black self-end"
                >NOK 89.00/month</button
              >
              <p class="font-semibold text-primary text-sm md:text-base">
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
