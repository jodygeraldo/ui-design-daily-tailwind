<script context="module" lang="ts">
  import Icon from '$lib/Icon.svelte'
  import { each } from 'svelte/internal'

  export async function load() {
    return {
      maxage: 31536000,
    }
  }

  const links = ['REST APIs', 'Intro to Power-Ups', 'Getting started']
</script>

<svelte:head>
  <title>Cards - UI Design Daily with Tailwind CSS</title>
</svelte:head>

<div class="theme grid place-items-center min-h-screen">
  <div class="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
    <div
      class="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-10 items-start relative"
    >
      <div
        class="hidden 2xl:block absolute inset-x-[38%] -inset-y-1/2 bg-[#E5D8F5] rounded-[80px] col-span-3 -z-10"
      />
      <div
        class="rounded-3xl bg-white p-4 sm:p-8 space-y-6 shadow-[0_10px_7px_0_#15325f10] max-w-md mx-auto col-span-1 2xl:translate-x-52 2xl:-translate-y-24"
      >
        <div class="w-4/5">
          <div class="flex gap-4 items-center">
            <img
              src="/assets/images/trello.png"
              alt=""
              class="w-14 h-14 rounded-full"
            />
            <h2 class="font-black text-2xl text-primary font-serif">Trello</h2>
          </div>
          <div class="flex gap-4">
            <div
              aria-hidden="true"
              class="shrink-0 w-14 h-14 rounded-full bg-transparent"
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
              class="shrink-0 w-14 h-14 rounded-full bg-transparent"
            />
            <ul class="grid grid-cols-1 sm:grid-cols-2 justify-between gap-4">
              {#each links as link}
                <li class="col-span-1">
                  <a href={`#${link}`} class="font-medium text-ascent">{link}</a
                  >
                </li>
              {/each}
            </ul>
          </div>
        </div>
      </div>

      <div
        class="rounded-3xl bg-primary p-4 sm:p-6 space-y-6 shadow-[0_10px_7px_0_#15325f20] max-w-md mx-auto col-span-1 2xl:-translate-x-32 2xl:translate-y-64"
      >
        <h2 class="font-medium text-white">Rate this page</h2>
        <div class="flex items-center gap-2">
          <Icon id="star" className="w-8 h-8 text-white" />
          <Icon id="star" className="w-8 h-8 text-white" />
          <Icon id="star" className="w-8 h-8 text-white" />
          <Icon id="star" className="w-8 h-8 text-white" />
          <Icon id="star" className="w-8 h-8 text-white" />
        </div>
      </div>

      <div
        class="rounded-3xl bg-white p-4 sm:p-8 space-y-6 shadow-[0_10px_7px_0_#15325f10] max-w-md mx-auto col-span-1 2xl:-translate-x-48 2xl:translate-y-12"
      >
        <h2 class="ml-[10px] font-black text-2xl text-primary">On this page</h2>
        <div class="space-y-2">
          <a href="#link" class="block p-[10px] font-medium text-primary"
            >Payment models</a
          >
          <a href="#link" class="block p-[10px] font-medium text-primary"
            >Apps for cloud users</a
          >
          <a
            href="#link"
            class="block p-[10px] font-medium bg-[#f2f6ff] border border-[#d7e1ff] text-ascent "
          >
            Partner agreements and terms of use
          </a>
          <a href="#link" class="block p-[10px] font-medium text-primary"
            >Partner profiles</a
          >
          <a href="#link" class="block p-[10px] font-medium text-primary">
            Universal Plugin Manager
          </a>
        </div>
      </div>
    </div>
  </div>
</div>

<style>
  .theme {
    --color-primary: #15325f;
    --color-ascent: #004cbf;
  }
</style>
