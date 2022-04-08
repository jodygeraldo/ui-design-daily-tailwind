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

  let password = 'password'
  let toggles = {
    hidePassword: true,
    remember: false,
  }

  const handleInput = (e) => {
    if (e.inputType === 'deleteContentBackward') {
      password = password.slice(0, -1)
    } else {
      password += e.target.value[e.target.value.length - 1]
    }
  }

  $: passwordDisplay = toggles.hidePassword
    ? '*'.repeat(password.length)
    : password

  const handleToggle = (name: string) => {
    toggles[name] = !toggles[name]

    toggles = toggles
  }
</script>

<svelte:head>
  <title>Enter Password - UI Design Daily with Tailwind CSS</title>
</svelte:head>

<div class="theme grid min-h-screen place-items-center">
  <div class="container mx-auto px-4 py-4 sm:px-6 lg:px-8">
    <div
      class="relative mx-auto max-w-xl rounded-2xl bg-white px-6 py-8 text-custom-1 sm:px-8 md:px-10 md:py-12 lg:px-12"
    >
      <h2 class="text-xl font-bold sm:text-2xl md:text-3xl">
        Enter your password
      </h2>

      <div class="mt-8 flex items-center gap-4">
        <img
          src="/assets/images/person-1.png"
          alt=""
          class="h-20 w-20 rounded-full"
        />

        <div>
          <p class="text-sm font-medium">Business Account</p>
          <h3 class="mt-1 font-bold sm:text-lg">Sarah Bills</h3>
        </div>
      </div>

      <div class="mt-8">
        <label for="password" class="text-sm font-semibold">Password</label>
        <div class="relative mt-2">
          <Icon
            id="lock-closed"
            class="absolute left-4 top-1/2 bottom-1/2 h-5 w-5 -translate-y-1/2 text-custom-1"
          />
          <div class="flex items-center gap-4">
            <input
              on:input={handleInput}
              value={passwordDisplay}
              type="text"
              class="w-full rounded-lg border border-custom-1 p-4 pl-12 text-sm font-medium text-custom-1"
            />
            <button on:click={() => handleToggle('hidePassword')}>
              <Icon id="eye-closed" class="h-7 w-7 text-custom-1" />
            </button>
          </div>
        </div>
      </div>

      <div class="mt-8 items-center justify-between gap-4 sm:flex">
        <div class="flex items-center gap-2">
          <button
            on:click={() => handleToggle('remember')}
            class={clsx(
              toggles.remember
                ? 'bg-custom-1'
                : 'border border-custom-2 bg-custom-3',
              'relative mt-1 inline-flex h-9 w-16 flex-shrink-0 cursor-pointer items-center rounded-full transition-colors duration-200 ease-in-out sm:mt-0',
            )}
          >
            <span
              aria-hidden="true"
              class={clsx(
                toggles.remember
                  ? 'translate-x-9 bg-white'
                  : 'translate-x-1 bg-custom-1',
                'pointer-events-none inline-block h-6 w-6 transform rounded-full transition duration-200 ease-in-out',
              )}
            />
          </button>
          <p class="font-semibold">Stay signed in</p>
        </div>

        <button
          class="mt-4 w-full rounded-lg bg-custom-1 p-4 font-semibold text-white sm:mt-0 sm:max-w-fit"
          >Continue</button
        >
      </div>

      <a
        href="#reset"
        class="mt-10 inline-block font-semibold underline underline-offset-2"
        >Reset password</a
      >
    </div>
  </div>
</div>

<style>
  .theme {
    --color-1: #132b50;
  }
</style>
