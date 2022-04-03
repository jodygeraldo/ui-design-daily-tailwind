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

<div class="theme grid min-h-screen place-items-center">
  <div class="container mx-auto px-4 py-4 sm:px-6 lg:px-8">
    <div class="relative mx-auto max-w-2xl rounded-[40px] bg-white p-8 lg:p-14">
      <!-- background rectangle -->
      <div
        class="absolute inset-y-24 -inset-x-32 -z-10 hidden rounded-[70px] bg-[#fdd4d4] xl:block"
      />

      <!-- close icon button -->
      <button
        class="absolute top-3 right-4 rounded-full bg-[#f5f4ff] p-2.5 lg:top-8 lg:right-8"
      >
        <Icon
          id="cross-2"
          class="h-6 w-6 text-primary opacity-50 sm:h-8 sm:w-8"
        />
      </button>

      <!-- structured content -->
      <div class="space-y-6">
        <div class="space-y-4">
          <!-- heading -->
          <h2 class="text-2xl font-black text-primary">Overall rating</h2>
          <!-- rating -->
          <div class="flex items-center gap-1">
            <div class="rounded-md border-[3px] border-ascent bg-white p-2">
              <Icon
                id="star-filled"
                class="h-6 w-6 stroke-[#FFB444] text-[#FFEC8A] sm:h-8 sm:w-8"
              />
            </div>
            <div class="rounded-md border-[3px] border-ascent bg-white p-2">
              <Icon
                id="star-filled"
                class="h-6 w-6 stroke-[#FFB444] text-[#FFEC8A] sm:h-8 sm:w-8"
              />
            </div>
            <div class="rounded-md border-[3px] border-ascent bg-white p-2">
              <Icon
                id="star-filled"
                class="h-6 w-6 stroke-[#FFB444] text-[#FFEC8A] sm:h-8 sm:w-8"
              />
            </div>
            <div class="rounded-md border-[3px] border-ascent bg-white p-2">
              <Icon
                id="star-filled"
                class="h-6 w-6 stroke-[#FFB444] text-[#FFEC8A] sm:h-8 sm:w-8"
              />
            </div>
            <div class="rounded-md border-[3px] border-ascent bg-white p-2">
              <Icon
                id="star-filled"
                class="h-6 w-6 stroke-[#AEB3C5] text-white sm:h-8 sm:w-8"
              />
            </div>
          </div>
          <!-- small description -->
          <p class="mt-2 text-sm text-primary">Click to rate</p>
        </div>

        <!-- input -->
        <div>
          <label for="input-1" class="text-sm font-semibold text-primary"
            >Review title</label
          >
          <input
            type="text"
            id="input-1"
            class="form-input mt-1 w-full rounded-md border-2 border-ascent p-3 placeholder-[#12163350] placeholder:font-medium"
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
              <div class="flex items-center gap-2">
                <div class="relative">
                  <button
                    class="h-7 w-7 rounded-full border-2 border-ascent p-4 text-primary"
                    disabled={r.selected}
                    value={r.value}
                  />
                  {#if r.selected}
                    <div
                      class="pointer-events-none absolute inset-2 rounded-full bg-primary"
                    />
                  {/if}
                </div>
                <p class="font-medium text-primary">{r.value}</p>
              </div>
            {/each}
          </div>
        </div>

        <!-- textarea -->
        <div>
          <label for="textarea-1" class="text-sm font-semibold text-primary"
            >Product review</label
          >
          <textarea
            id="textarea-1"
            class="form-textarea mt-1 w-full rounded-md border-2 border-ascent p-3 placeholder-[#12163350] placeholder:font-medium"
            placeholder="Example: Since I bought this a month ago, it has been used a lot. What I like best/what is worst about this product is"
            rows="2"
          />
        </div>

        <!-- another input -->
        <div class="grid grid-cols-1 gap-2 sm:grid-cols-2">
          <div class="cols-1">
            <label for="input-1" class="text-sm font-semibold text-primary"
              >Nickname</label
            >
            <input
              type="text"
              id="input-1"
              class="form-input mt-1 w-full rounded-md border-2 border-ascent p-3 placeholder-[#12163350] placeholder:font-medium"
              placeholder="Example: bob27"
            />
          </div>
          <div class="cols-1">
            <label for="input-1" class="text-sm font-semibold text-primary"
              >Email address (will not be published)</label
            >
            <input
              type="text"
              id="input-1"
              class="form-input mt-1 w-full rounded-md border-2 border-ascent p-3 placeholder-[#12163350] placeholder:font-medium"
              placeholder="Example: your@email.com"
            />
          </div>
        </div>

        <!-- another radio -->
        <div>
          <div class="mt-4 flex gap-6">
            <div class="flex items-center gap-2">
              <button
                class="h-7 w-7 rounded-full border-2 border-ascent p-3 text-primary"
              />

              <p class="font-medium text-primary">
                I accept the
                <span class="underline underline-offset-1"
                  >terms and conditions</span
                >
              </p>
            </div>
          </div>
        </div>

        <!-- text -->
        <p class="text-sm font-medium text-primary">
          You will be able to receive emails in connection with this review (eg
          if others comment on your review). All emails contain the option to
          unsubscribe. We can use the text and star rating from your review in
          other marketing.
        </p>

        <!-- submit button -->
        <button class="rounded bg-primary p-3 font-medium text-white"
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
