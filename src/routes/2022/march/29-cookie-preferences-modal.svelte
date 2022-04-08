<script context="module">
  export async function load() {
    return {
      maxage: 31536000,
    }
  }
</script>

<script lang="ts">
  import Icon from '$lib/Icon.svelte'
  import clsx from 'clsx'

  let toggles = {
    fcookie: false,
    pcookie: true,
    ads: false,
  }

  const handleToggle = (value: string) => {
    toggles[value] = !toggles[value]

    toggles = toggles
  }
</script>

<svelte:head>
  <title>Cookie Preferences Modal - UI Design Daily with Tailwind CSS</title>
</svelte:head>

<div class="theme grid min-h-screen place-items-center">
  <div class="container mx-auto px-4 py-4 sm:px-6 lg:px-8">
    <div
      class="relative mx-auto max-w-xl rounded-3xl bg-custom-4 px-6 py-8 text-custom-1 shadow-[20px_34px_74px_0_#15156107] sm:px-8 md:px-10 md:py-12 lg:px-12"
    >
      <div>
        <h2 class="font-semibold sm:text-lg">About Your Privacy</h2>
        <div class="mt-4">
          <p class="text-sm">
            We process your data to deliver content or advertisements and
            measure the delivery of such content or advertisements to extract
            insights about our website. We share this information with our
            partners on the basis of consent and legitimate interest. You may
            exercise your right to consent or object to a legitimate interest,
            based on a specific purpose below or at a partner level in the link
            under each purpose. These choices will be signaled to our vendors.
          </p>
          <button
            class="mt-4 w-full rounded-full bg-custom-1 px-4 py-2 text-white sm:w-auto sm:px-6 sm:py-4"
            >Allow all</button
          >
        </div>
      </div>

      <div class="mt-10">
        <h3 class="font-semibold">Manage Consent Preferences</h3>

        <div class="mt-4 space-y-1">
          <div class="rounded-lg bg-white p-3 sm:p-4">
            <div class="flex items-center gap-4">
              <Icon id="plus" class="h-5 w-5 shrink-0 text-custom-1" />
              <div class="flex-1 items-center justify-between gap-10 sm:flex">
                <p class="text-sm sm:text-base">Strictly Necessary Cookies</p>
                <p class="mt-1 min-w-fit opacity-50 sm:mt-0 sm:text-right">
                  Always Active
                </p>
              </div>
            </div>
          </div>

          <div class="rounded-lg bg-white p-3 sm:p-4">
            <div class="flex items-center gap-4">
              <Icon id="plus" class="h-5 w-5 shrink-0 text-custom-1" />
              <div class="flex-1 items-center justify-between gap-10 sm:flex">
                <p class="text-sm sm:text-base">Functional Cookies</p>
                <button
                  on:click={() => handleToggle('fcookie')}
                  class={clsx(
                    toggles.fcookie
                      ? 'bg-custom-1'
                      : 'border border-custom-2 bg-custom-3',
                    'relative mt-1 inline-flex h-6 w-11 flex-shrink-0 cursor-pointer items-center rounded-full transition-colors duration-200 ease-in-out sm:mt-0',
                  )}
                >
                  <span
                    aria-hidden="true"
                    class={clsx(
                      toggles.fcookie
                        ? 'translate-x-5 bg-white'
                        : 'translate-x-0.5 bg-custom-1',
                      'pointer-events-none inline-block h-5 w-5 transform rounded-full transition duration-200 ease-in-out',
                    )}
                  />
                </button>
              </div>
            </div>
          </div>

          <div class="rounded-lg bg-white p-3 sm:p-4">
            <div class="flex items-center gap-4">
              <Icon id="plus" class="h-5 w-5 shrink-0 text-custom-1" />
              <div class="flex-1 items-center justify-between gap-10 sm:flex">
                <p class="text-sm sm:text-base">Performance Cookies</p>
                <button
                  on:click={() => handleToggle('pcookie')}
                  class={clsx(
                    toggles.pcookie
                      ? 'bg-custom-1'
                      : 'border border-custom-2 bg-custom-3',
                    'relative mt-1 inline-flex h-6 w-11 flex-shrink-0 cursor-pointer items-center rounded-full transition-colors duration-200 ease-in-out sm:mt-0',
                  )}
                >
                  <span
                    aria-hidden="true"
                    class={clsx(
                      toggles.pcookie
                        ? 'translate-x-5 bg-white'
                        : 'translate-x-0.5 bg-custom-1',
                      'pointer-events-none inline-block h-5 w-5 transform rounded-full transition duration-200 ease-in-out',
                    )}
                  />
                </button>
              </div>
            </div>
          </div>

          <div class="rounded-lg border border-custom-2 bg-white p-3 sm:p-4">
            <div class="flex items-center gap-4">
              <Icon id="plus" class="h-5 w-5 shrink-0 text-custom-1" />
              <div class="flex-1 items-center justify-between gap-10 sm:flex">
                <p class="text-sm sm:text-base">
                  Personalised ads and content measurement, audience insights
                  and product development
                </p>
                <button
                  on:click={() => handleToggle('ads')}
                  class={clsx(
                    toggles.ads
                      ? 'bg-custom-1'
                      : 'border border-custom-2 bg-custom-3',
                    'relative mt-1 inline-flex h-6 w-11 flex-shrink-0 cursor-pointer items-center rounded-full transition-colors duration-200 ease-in-out sm:mt-0',
                  )}
                >
                  <span
                    aria-hidden="true"
                    class={clsx(
                      toggles.ads
                        ? 'translate-x-5 bg-white'
                        : 'translate-x-0.5 bg-custom-1',
                      'pointer-events-none inline-block h-5 w-5 transform rounded-full transition duration-200 ease-in-out',
                    )}
                  />
                </button>
              </div>
            </div>
          </div>
        </div>

        <div class="mt-4 gap-2 sm:flex">
          <button
            class="mt-4 w-full rounded-full bg-custom-1 px-4 py-2 text-white sm:w-auto sm:px-6 sm:py-4"
            >Reject all</button
          >
          <button
            class="mt-4 w-full rounded-full bg-custom-1 px-4 py-2 text-white sm:w-auto sm:px-6 sm:py-4"
            >Submit My Choices</button
          >
        </div>
      </div>
    </div>
  </div>
</div>

<style>
  .theme {
    --color-1: #131339;
    --color-2: #d2d9ef;
    --color-3: #f1f4fd;
    --color-4: #fafbff;
  }
</style>
