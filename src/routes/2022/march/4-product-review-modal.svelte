<script context="module" lang="ts">
  import Icon from '$lib/Icon.svelte'

  export async function load() {
    return {
      maxage: 31536000,
    }
  }

  let radio = [
    { value: 'Yes', selected: true },
    { value: 'No', selected: false },
  ]

  // Handle radio button clicks
  // disabled becuase can't cache it staticly if enabled
  //   const handleRadioClick = (e: MouseEvent) => {
  //     const target = e.target as HTMLInputElement
  //     const value = target.value
  //     radio.forEach((item) => {
  //       item.selected = item.value === value
  //     })

  //     radio = radio
  //   }
</script>

<svelte:head>
  <title>Product Review Modal - UI Design Daily with Tailwind CSS</title>
</svelte:head>

<div class="theme grid place-items-center min-h-screen">
  <div class="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
    <div class="p-8 lg:p-14 bg-white rounded-[40px] max-w-2xl mx-auto relative">
      <!-- background rectangle -->
      <div
        class="hidden xl:block absolute bg-[#fdd4d4] rounded-[70px] inset-y-24 -inset-x-32 -z-10"
      />

      <!-- close icon button -->
      <button
        class="p-2.5 rounded-full bg-[#f5f4ff] absolute top-3 right-4 lg:top-8 lg:right-8"
      >
        <Icon
          id="cross-2"
          class="text-primary opacity-50 w-6 h-6 sm:w-8 sm:h-8"
        />
      </button>

      <!-- structured content -->
      <div class="space-y-6">
        <div class="space-y-4">
          <!-- heading -->
          <h2 class="text-primary font-black text-2xl">Overall rating</h2>
          <!-- rating -->
          <div class="flex gap-1 items-center">
            <div class="p-2 rounded-md bg-white border-ascent border-[3px]">
              <Icon
                id="star-filled"
                class="text-[#FFEC8A] w-6 h-6 sm:w-8 sm:h-8 stroke-[#FFB444]"
              />
            </div>
            <div class="p-2 rounded-md bg-white border-ascent border-[3px]">
              <Icon
                id="star-filled"
                class="text-[#FFEC8A] w-6 h-6 sm:w-8 sm:h-8 stroke-[#FFB444]"
              />
            </div>
            <div class="p-2 rounded-md bg-white border-ascent border-[3px]">
              <Icon
                id="star-filled"
                class="text-[#FFEC8A] w-6 h-6 sm:w-8 sm:h-8 stroke-[#FFB444]"
              />
            </div>
            <div class="p-2 rounded-md bg-white border-ascent border-[3px]">
              <Icon
                id="star-filled"
                class="text-[#FFEC8A] w-6 h-6 sm:w-8 sm:h-8 stroke-[#FFB444]"
              />
            </div>
            <div class="p-2 rounded-md bg-white border-ascent border-[3px]">
              <Icon
                id="star-filled"
                class="text-white w-6 h-6 sm:w-8 sm:h-8 stroke-[#AEB3C5]"
              />
            </div>
          </div>
          <!-- small description -->
          <p class="mt-2 text-sm text-primary">Click to rate</p>
        </div>

        <!-- input -->
        <div>
          <label for="input-1" class="font-semibold text-sm text-primary"
            >Review title</label
          >
          <input
            type="text"
            id="input-1"
            class="form-input mt-1 w-full p-3 rounded-md border-2 border-ascent placeholder:font-medium placeholder-[#12163350]"
            placeholder="Example: Easy to use"
          />
        </div>

        <!-- radio -->
        <div>
          <p class="font-medium text-primary">
            Would you recommend this product to a friend?
          </p>
          <div class="mt-4 flex gap-6">
            {#each radio as r}
              <div class="flex gap-2 items-center">
                <div class="relative">
                  <button
                    class="p-4 rounded-full border-2 border-ascent text-primary w-7 h-7"
                    disabled={r.selected}
                    value={r.value}
                  />
                  {#if r.selected}
                    <div
                      class="absolute inset-2 bg-primary rounded-full pointer-events-none"
                    />
                  {/if}
                </div>
                <p class="text-primary font-medium">{r.value}</p>
              </div>
            {/each}
          </div>
        </div>

        <!-- textarea -->
        <div>
          <label for="textarea-1" class="font-semibold text-sm text-primary"
            >Product review</label
          >
          <textarea
            id="textarea-1"
            class="form-textarea mt-1 w-full p-3 rounded-md border-2 border-ascent placeholder:font-medium placeholder-[#12163350]"
            placeholder="Example: Since I bought this a month ago, it has been used a lot. What I like best/what is worst about this product is"
            rows="2"
          />
        </div>

        <!-- another input -->
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-2">
          <div class="cols-1">
            <label for="input-1" class="font-semibold text-sm text-primary"
              >Nickname</label
            >
            <input
              type="text"
              id="input-1"
              class="form-input mt-1 w-full p-3 rounded-md border-2 border-ascent placeholder:font-medium placeholder-[#12163350]"
              placeholder="Example: bob27"
            />
          </div>
          <div class="cols-1">
            <label for="input-1" class="font-semibold text-sm text-primary"
              >Email address (will not be published)</label
            >
            <input
              type="text"
              id="input-1"
              class="form-input mt-1 w-full p-3 rounded-md border-2 border-ascent placeholder:font-medium placeholder-[#12163350]"
              placeholder="Example: your@email.com"
            />
          </div>
        </div>

        <!-- another radio -->
        <div>
          <div class="mt-4 flex gap-6">
            <div class="flex gap-2 items-center">
              <button
                class="p-3 rounded-full border-2 border-ascent text-primary w-7 h-7"
              />

              <p class="text-primary font-medium">
                I accept the
                <span class="underline underline-offset-1"
                  >terms and conditions</span
                >
              </p>
            </div>
          </div>
        </div>

        <!-- text -->
        <p class="font-medium text-sm text-primary">
          You will be able to receive emails in connection with this review (eg
          if others comment on your review). All emails contain the option to
          unsubscribe. We can use the text and star rating from your review in
          other marketing.
        </p>

        <!-- submit button -->
        <button class="font-medium text-white p-3 rounded bg-primary"
          >Submit product review</button
        >
      </div>
    </div>
  </div>
</div>

<style>
  .theme {
    --color-primary: #121633;
    --color-ascent: #eef2ff;
  }
</style>
