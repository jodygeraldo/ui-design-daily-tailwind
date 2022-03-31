<script></script>

<svelte:head>
  <title>Cards - UI Design Daily with Tailwind CSS</title>
</svelte:head>

<div class="theme grid min-h-screen place-items-center">
  <div class="container mx-auto px-4 py-4 sm:px-6 lg:px-8">
    <div class="relative grid grid-cols-1 gap-10 xl:grid-cols-2">
      <div
        class="absolute right-1/2 -z-10 hidden h-[502px] w-[502px] translate-x-1/2 rounded-full bg-[#6C9EFF] 2xl:block"
      />
      <div
        class="col-span-1 mx-auto max-w-md space-y-9 rounded-3xl bg-white p-4 text-primary shadow-[0_13px_28px_0_#4f63aa10] sm:p-8 2xl:-translate-y-16 2xl:translate-x-32"
      >
        <h2 class="ml-4 font-serif text-3xl font-bold">My pages</h2>
        <div class="space-y-4 text-lg">
          <div
            class="flex w-full justify-between gap-4 rounded-lg bg-tertiary p-4"
          >
            <div class="flex items-center gap-4">
              <div
                class="h-12 w-12 shrink-0 rounded-2xl bg-[#6c9eff] sm:h-16 sm:w-16"
              />
              <div>
                <h3 class="font-bold sm:text-lg">UI Design Daily</h3>
                <p>Design</p>
              </div>
            </div>
            <div>
              <p
                class="rounded-[21px] border border-ascent py-1 px-[14px] font-bold"
              >
                4
              </p>
            </div>
          </div>

          <div
            class="flex w-full justify-between gap-4 rounded-lg p-4 sm:w-[85%]"
          >
            <div class="flex items-center gap-4">
              <div
                class="h-12 w-12 shrink-0 rounded-2xl bg-[#8A6CFF] sm:h-16 sm:w-16"
              />
              <div>
                <h3 class="font-bold sm:text-lg">Boardme</h3>
                <p>Technology</p>
              </div>
            </div>
            <div>
              <p
                class="rounded-[21px] border border-ascent py-1 px-[14px] font-bold"
              >
                7
              </p>
            </div>
          </div>

          <div
            class="flex w-full justify-between gap-4 rounded-lg p-4 sm:w-4/5"
          >
            <div class="flex items-center gap-4">
              <div
                class="h-12 w-12 shrink-0 rounded-2xl bg-[#FF6CA1] sm:h-16 sm:w-16"
              />
              <div>
                <h3 class="font-bold sm:text-lg">ildieisgn</h3>
                <p>Service</p>
              </div>
            </div>
            <div>
              <p
                class="rounded-[21px] border border-ascent py-1 px-[14px] font-bold"
              >
                2
              </p>
            </div>
          </div>
        </div>
      </div>

      <div
        class="col-span-1 mx-auto max-w-md space-y-9 rounded-3xl bg-white p-4 text-primary shadow-[0_13px_28px_0_#4f63aa10] sm:p-8  2xl:translate-y-24 2xl:-translate-x-32"
      >
        <div class="space-y-8">
          <div class="flex gap-4">
            <div
              class="h-12 w-12 shrink-0 rounded-2xl bg-[#FF986C] sm:h-16 sm:w-16"
            />
            <div>
              <h3 class="font-bold sm:text-lg">Fernando Ray</h3>
              <p>
                UX Designer at <span class="underline">Company</span>
              </p>
            </div>
          </div>
          <button class="w-full rounded bg-primary p-[10px] text-white"
            >View Profile</button
          >

          <h3 class="ml-4 font-semibold">Account</h3>

          <div class="space-y-1">
            <div class="bg-tertiary py-[10px] px-4">
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
