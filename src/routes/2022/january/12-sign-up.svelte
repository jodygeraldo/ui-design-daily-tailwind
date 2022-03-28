<script></script>

<svelte:head>
  <title>Sign Up - UI Design Daily with Tailwind CSS</title>
</svelte:head>

<div class="theme grid place-items-center min-h-screen">
  <div class="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
    <div
      class="rounded-3xl space-y-[41px] px-8 py-6 lg:px-16 lg:py-12 2xl:px-24 2xl:py-16 shadow-2xl bg-white max-w-xl mx-auto"
    >
      <div class="space-y-[35px]">
        <div class="space-y-[19px] text-center">
          <div class="space-y-6">
            <div class="relative w-40 h-40 rounded-full mx-auto bg-[#F8F4FA]">
              <img
                src="/assets/images/person-2.png"
                alt=""
                class="absolute rounded-full w-32 h-w-32 right-4 bottom-4"
              />
            </div>

            <p class="text-primary">Tina V. invited you to join</p>
          </div>

          <h2 class="font-extrabold text-lg lg:text-2xl text-primary">
            Channel name
          </h2>

          <div class="rounded-lg bg-[#f8f4fa] p-4 w-3/4 mx-auto">
            <p class="text-primary">46K Active users・78K Total users</p>
          </div>
        </div>

        <div class="space-y-2">
          <p class="text-primary">Username</p>

          <input
            type="text"
            class="lg:placeholder:text-lg lg:text-lg text-primary rounded-lg bg-white border border-[#c2adc2] p-6 w-full"
            placeholder="How do you like people to call you?"
          />
        </div>

        <div class="flex gap-4">
          <button
            class="w-8 h-8 border border-[#c2adc2] bg-white rounded-lg shrink-0"
          />
          <p class="lg:text-lg">
            I have read and agree to the <a
              href="#tos"
              class="underline underline-offset-1 text-ascent"
              >Terms of service</a
            >
            and
            <a href="#pp" class="underline underline-offset-1 text-ascent"
              >Privacy policy</a
            >.
          </p>
        </div>
      </div>

      <div class="space-y-14">
        <button
          class="p-6 w-full border bg-ascent border-[#c2adc2] text-white font-semibold text-lg rounded-lg"
        >
          Continue
        </button>

        <a
          href="#login"
          class="text-sm lg:text-base text-ascent block text-center underline underline-offset-1"
          >Already have an account</a
        >
      </div>
    </div>
  </div>
</div>

<style>
  .theme {
    --color-primary: #1c2852;
    --color-ascent: #a30062;
  }
</style>
