<script context="module">
  export async function load() {
    return {
      maxage: 31536000,
    }
  }
</script>

<script lang="ts">
  import Icon from '$lib/Icon.svelte'

  const links = ['REST APIs', 'Intro to Power-Ups', 'Getting started']
</script>

<svelte:head>
  <title>Cards - UI Design Daily with Tailwind CSS</title>
</svelte:head>

<div class="theme grid min-h-screen place-items-center">
  <div class="container mx-auto px-4 py-4 sm:px-6 lg:px-8">
    <div
      class="relative grid grid-cols-1 items-start gap-10 lg:grid-cols-2 xl:grid-cols-3"
    >
      <div
        class="absolute inset-x-[38%] -inset-y-1/2 -z-10 col-span-3 hidden rounded-[80px] bg-[#E5D8F5] 2xl:block"
      />
      <div
        class="col-span-1 mx-auto max-w-md space-y-6 rounded-3xl bg-white p-4 shadow-[0_10px_7px_0_#15325f10] sm:p-8 2xl:translate-x-52 2xl:-translate-y-24"
      >
        <div class="w-4/5">
          <div class="flex items-center gap-4">
            <img
              src="/assets/images/trello.png"
              alt=""
              class="h-14 w-14 rounded-full"
            />
            <h2 class="font-serif text-2xl font-black text-custom-1">Trello</h2>
          </div>
          <div class="flex gap-4">
            <div
              aria-hidden="true"
              class="h-14 w-14 shrink-0 rounded-full bg-transparent"
            />
            <p class="font-medium">
              Build on top of Trello by creating a Power-Up.
            </p>
          </div>
        </div>

        <div>
          <div class="flex gap-4">
            <div
              aria-hidden="true"
              class="h-14 w-14 shrink-0 rounded-full bg-transparent"
            />
            <ul class="grid grid-cols-1 justify-between gap-4 sm:grid-cols-2">
              {#each links as link}
                <li class="col-span-1">
                  <a href={`#${link}`} class="font-medium text-custom-2"
                    >{link}</a
                  >
                </li>
              {/each}
            </ul>
          </div>
        </div>
      </div>

      <div
        class="col-span-1 mx-auto max-w-md space-y-6 rounded-3xl bg-custom-1 p-4 shadow-[0_10px_7px_0_#15325f20] sm:p-6 2xl:-translate-x-32 2xl:translate-y-64"
      >
        <h2 class="font-medium text-white">Rate this page</h2>
        <div class="flex items-center gap-2">
          <Icon id="star" class="h-8 w-8 text-white" />
          <Icon id="star" class="h-8 w-8 text-white" />
          <Icon id="star" class="h-8 w-8 text-white" />
          <Icon id="star" class="h-8 w-8 text-white" />
          <Icon id="star" class="h-8 w-8 text-white" />
        </div>
      </div>

      <div
        class="col-span-1 mx-auto max-w-md space-y-6 rounded-3xl bg-white p-4 shadow-[0_10px_7px_0_#15325f10] sm:p-8 2xl:-translate-x-48 2xl:translate-y-12"
      >
        <h2 class="ml-[10px] text-2xl font-black text-custom-1">
          On this page
        </h2>
        <div class="space-y-2">
          <a href="#link" class="block p-[10px] font-medium text-custom-1"
            >Payment models</a
          >
          <a href="#link" class="block p-[10px] font-medium text-custom-1"
            >Apps for cloud users</a
          >
          <a
            href="#link"
            class="block border border-[#d7e1ff] bg-[#f2f6ff] p-[10px] font-medium text-custom-2 "
          >
            Partner agreements and terms of use
          </a>
          <a href="#link" class="block p-[10px] font-medium text-custom-1"
            >Partner profiles</a
          >
          <a href="#link" class="block p-[10px] font-medium text-custom-1">
            Universal Plugin Manager
          </a>
        </div>
      </div>
    </div>
  </div>
</div>

<style>
  .theme {
    --color-1: #15325f;
    --color-2: #004cbf;
  }
</style>
