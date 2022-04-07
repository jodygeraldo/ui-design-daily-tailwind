<script context="module">
  export async function load() {
    return {
      maxage: 31536000,
    }
  }
</script>

<svelte:head>
  <title>Sign Up - UI Design Daily with Tailwind CSS</title>
</svelte:head>

<div class="theme grid min-h-screen place-items-center">
  <div class="container mx-auto px-4 py-4 sm:px-6 lg:px-8">
    <div
      class="mx-auto max-w-xl space-y-[41px] rounded-3xl bg-white px-8 py-6 shadow-2xl lg:px-16 lg:py-12 2xl:px-24 2xl:py-16"
    >
      <div class="space-y-[35px]">
        <div class="space-y-[19px] text-center">
          <div class="space-y-6">
            <div class="relative mx-auto h-40 w-40 rounded-full bg-[#F8F4FA]">
              <img
                src="/assets/images/person-2.png"
                alt=""
                class="h-w-32 absolute right-4 bottom-4 w-32 rounded-full"
              />
            </div>

            <p class="text-custom-1">Tina V. invited you to join</p>
          </div>

          <h2 class="text-lg font-extrabold text-custom-1 lg:text-2xl">
            Channel name
          </h2>

          <div class="mx-auto w-3/4 rounded-lg bg-[#f8f4fa] p-4">
            <p class="text-custom-1">46K Active users・78K Total users</p>
          </div>
        </div>

        <div class="space-y-2">
          <p class="text-custom-1">Username</p>

          <input
            type="text"
            class="w-full rounded-lg border border-[#c2adc2] bg-white p-6 text-custom-1 lg:text-lg lg:placeholder:text-lg"
            placeholder="How do you like people to call you?"
          />
        </div>

        <div class="flex gap-4">
          <button
            class="h-8 w-8 shrink-0 rounded-lg border border-[#c2adc2] bg-white"
          />
          <p class="lg:text-lg">
            I have read and agree to the <a
              href="#tos"
              class="text-custom-2 underline underline-offset-1"
              >Terms of service</a
            >
            and
            <a href="#pp" class="text-custom-2 underline underline-offset-1"
              >Privacy policy</a
            >.
          </p>
        </div>
      </div>

      <div class="space-y-14">
        <button
          class="w-full rounded-lg border border-[#c2adc2] bg-custom-2 p-6 text-lg font-semibold text-white"
        >
          Continue
        </button>

        <a
          href="#login"
          class="block text-center text-sm text-custom-2 underline underline-offset-1 lg:text-base"
          >Already have an account</a
        >
      </div>
    </div>
  </div>
</div>

<style>
  .theme {
    --color-1: #1c2852;
    --color-2: #a30062;
  }
</style>
