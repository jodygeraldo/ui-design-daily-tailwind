<script>
  import Icon from '/src/components/Icon.svelte'

  const checkboxes = [
    { text: 'The software is to difficult to use', checked: false },
    { text: 'Features I need are missing.', checked: false },
    { text: 'Too expensive', checked: false },
    { text: 'I am done with this project.', checked: true },
    { text: 'I am using a different software now.', checked: false },
  ]
</script>

<svelte:head>
  <title>Cancel Plan Modal - UI Design Daily with Tailwind CSS</title>
</svelte:head>

<div class="theme grid place-items-center min-h-screen">
  <div class="container mx-auto px-6 lg:px-8 py-8 lg:py-20">
    <div
      class="mx-auto max-w-lg rounded-2xl py-8 lg:py-14 pl-14 lg:pl-24 pr-6 lg:pr-11 space-y-7 bg-white text-primary relative"
    >
      <div
        class="bg-[#DDDDF2] absolute -top-4 right-3 bottom-6 -left-4 sm:-top-8 sm:right-6 sm:bottom-12 sm:-left-8 lg:-top-12 lg:right-8 lg:bottom-16 lg:-left-12 2xl:-top-[72px] 2xl:right-12 2xl:bottom-24 2xl:-left-[72px] -z-10 rounded-2xl"
      />
      <div class="space-y-4">
        <div class="flex items-center justify-between">
          <h2 class="text-lg text-primary font-bold lg:text-2xl">
            Cancel site plan
          </h2>
          <Icon id="cross-2" className="w-6 h-6 text-primary" />
        </div>

        <p class="lg:text-lg text-primary mr-8 lg:mr-[52px]">
          We’re sorry to see you cancel your plan. To help us improve, we have a
          few short questions for you before you leave us.
        </p>
      </div>

      <div class="space-y-4 mr-8 lg:mr-[52px]">
        <h3 class="text-primary font-semibold text-sm lg:text-base">
          Why are you cancelling your plan?
        </h3>

        <div class="space-y-2">
          {#each checkboxes as checkbox}
            <div class="flex gap-2 items-center">
              <div class="relative">
                <button
                  class="w-5 h-5 bg-white border border-primary rounded"
                />
                {#if checkbox.checked}
                  <Icon
                    id="check"
                    className="w-4 h-4 text-primary absolute top-1/2 bottom-1/2 -translate-y-[70%] right-1/2 translate-x-1/2"
                  />
                {/if}
              </div>
              <p class="text-sm lg:text-base">{checkbox.text}</p>
            </div>
          {/each}
        </div>
      </div>

      <div class="space-y-2 mr-8 lg:mr-[52px]">
        <label class="text-black text-sm lg:text-base" for="input"
          >Type 'CANCEL' to confirm</label
        >
        <input
          type="text"
          id="input"
          placeholder="CANCEL"
          class="rounded p-2 w-full border border-primary"
        />
      </div>

      <div class="space-y-4 mr-8 lg:mr-[52px]">
        <button
          class="rounded text-white bg-ascent w-full p-2 text-sm lg:text-base"
          >Cancel plan</button
        >
        <button
          class="rounded text-primary w-full p-2 opacity-60 text-sm lg:text-base"
          >Never mind</button
        >
      </div>
    </div>
  </div>
</div>

<style>
  .theme {
    --color-primary: #1e1e4e;
    --color-ascent: #e33655;
  }
</style>
