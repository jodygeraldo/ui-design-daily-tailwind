<script></script>

<svelte:head>
  <title>Cards - UI Design Daily with Tailwind CSS</title>
</svelte:head>

<div class="theme grid place-items-center min-h-screen">
  <div class="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
    <div class="grid grid-cols-1 xl:grid-cols-2 gap-10 relative">
      <div
        class="hidden 2xl:block absolute rounded-full bg-[#6C9EFF] w-[502px] h-[502px] right-1/2 translate-x-1/2 -z-10"
      />
      <div
        class="rounded-3xl p-4 sm:p-8 space-y-9 bg-white shadow-[0_13px_28px_0_#4f63aa10] max-w-md mx-auto col-span-1 2xl:-translate-y-16 2xl:translate-x-32 text-primary"
      >
        <h2 class="ml-4 font-bold text-3xl font-serif">My pages</h2>
        <div class="space-y-4 text-lg">
          <div
            class="flex justify-between w-full gap-4 bg-tertiary p-4 rounded-lg"
          >
            <div class="flex gap-4 items-center">
              <div
                class="shrink-0 w-12 h-12 sm:w-16 sm:h-16 bg-[#6c9eff] rounded-2xl"
              />
              <div>
                <h3 class="font-bold sm:text-lg">UI Design Daily</h3>
                <p>Design</p>
              </div>
            </div>
            <div>
              <p
                class="font-bold rounded-[21px] py-1 px-[14px] border border-ascent"
              >
                4
              </p>
            </div>
          </div>

          <div
            class="flex justify-between w-full gap-4 sm:w-[85%] p-4 rounded-lg"
          >
            <div class="flex gap-4 items-center">
              <div
                class="shrink-0 w-12 h-12 sm:w-16 sm:h-16 bg-[#8A6CFF] rounded-2xl"
              />
              <div>
                <h3 class="font-bold sm:text-lg">Boardme</h3>
                <p>Technology</p>
              </div>
            </div>
            <div>
              <p
                class="font-bold rounded-[21px] py-1 px-[14px] border border-ascent"
              >
                7
              </p>
            </div>
          </div>

          <div
            class="flex justify-between w-full gap-4 sm:w-4/5 p-4 rounded-lg"
          >
            <div class="flex gap-4 items-center">
              <div
                class="shrink-0 w-12 h-12 sm:w-16 sm:h-16 bg-[#FF6CA1] rounded-2xl"
              />
              <div>
                <h3 class="font-bold sm:text-lg">ildieisgn</h3>
                <p>Service</p>
              </div>
            </div>
            <div>
              <p
                class="font-bold rounded-[21px] py-1 px-[14px] border border-ascent"
              >
                2
              </p>
            </div>
          </div>
        </div>
      </div>

      <div
        class="rounded-3xl p-4 sm:p-8 space-y-9 bg-white shadow-[0_13px_28px_0_#4f63aa10] max-w-md mx-auto text-primary col-span-1  2xl:translate-y-24 2xl:-translate-x-32"
      >
        <div class="space-y-8">
          <div class="flex gap-4">
            <div
              class="shrink-0 w-12 h-12 sm:w-16 sm:h-16 bg-[#FF986C] rounded-2xl"
            />
            <div>
              <h3 class="font-bold sm:text-lg">Fernando Ray</h3>
              <p>
                UX Designer at <span class="underline">Company</span>
              </p>
            </div>
          </div>
          <button class="text-white bg-primary rounded p-[10px] w-full"
            >View Profile</button
          >

          <h3 class="ml-4 font-semibold">Account</h3>

          <div class="space-y-1">
            <div class="py-[10px] px-4 bg-tertiary">
              <p>Settings & Privacy</p>
            </div>
            <div class="py-[10px] px-4">
              <p>Help</p>
            </div>
            <div class="py-[10px] px-4">
              <p>Language</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<style>
  .theme {
    --color-primary: #201f4d;
    --color-ascent: #bfcaf0;
    --color-tertiary: #f6f8ff;
  }
</style>
