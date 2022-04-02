<script context="module" lang="ts">
  export async function load() {
    return {
      maxage: 43200,
    }
  }

  import Icon from '$lib/Icon.svelte'
  import list from '../data/index'
  import { browser, mode } from '$app/env'

  const imageUrl = {
    default: (url: string) => `/assets/images/${url}`,
    sources: (url: string) => [
      {
        url: `//images.weserv.nl/?url=ui-design-daily-tailwind.pages.dev/assets/images/${url}&w=588&h=330.75&output=webp`,
        media: '(max-width: 767px)',
        type: 'image/webp',
        w: 588,
        h: 330.75,
      },
      {
        url: `//images.weserv.nl/?url=ui-design-daily-tailwind.pages.dev/assets/images/${url}&w=344&h=193.5&output=webp`,
        media: '(min-width: 768px) and (max-width: 1023px)',
        type: 'image/webp',
        w: 344,
        h: 193.5,
      },
      {
        url: `//images.weserv.nl/?url=ui-design-daily-tailwind.pages.dev/assets/images/${url}&w=464&h=216&output=webp`,
        media: '(min-width: 1024px) and (max-width: 1279px)',
        type: 'image/webp',
        w: 464,
        h: 216,
      },
      {
        url: `//images.weserv.nl/?url=ui-design-daily-tailwind.pages.dev/assets/images/${url}&w=385.34&h=216.75&output=webp`,
        media: '(min-width: 1280px) and (max-width: 1535px)',
        type: 'image/webp',
        w: 385.34,
        h: 216.75,
      },
      {
        url: `//images.weserv.nl/?url=ui-design-daily-tailwind.pages.dev/assets/images/${url}&w=470.67&h=264.75&output=webp`,
        media: '(min-width: 1536px)',
        type: 'image/webp',
        w: 470.67,
        h: 264.75,
      },
      {
        url: `//images.weserv.nl/?url=ui-design-daily-tailwind.pages.dev/assets/images/${url}&w=588&h=330.75&af`,
        media: '(max-width: 768px)',
        type: 'image/png',
        w: 588,
        h: 330.75,
      },
      {
        url: `//images.weserv.nl/?url=ui-design-daily-tailwind.pages.dev/assets/images/${url}&w=344&h=193.5&af`,
        media: '(min-width: 768px) and (max-width: 1023px)',
        type: 'image/png',
        w: 344,
        h: 193.5,
      },
      {
        url: `//images.weserv.nl/?url=ui-design-daily-tailwind.pages.dev/assets/images/${url}&w=464&h=216&af`,
        media: '(min-width: 1024px) and (max-width: 1279px)',
        type: 'image/png',
        w: 464,
        h: 216,
      },
      {
        url: `//images.weserv.nl/?url=ui-design-daily-tailwind.pages.dev/assets/images/${url}&w=385.34&h=216.75&af`,
        media: '(min-width: 1280px) and (max-width: 1535px)',
        type: 'image/png',
        w: 385.34,
        h: 216.75,
      },
      {
        url: `//images.weserv.nl/?url=ui-design-daily-tailwind.pages.dev/assets/images/${url}&w=470.67&h=264.75&af`,
        media: '(min-width: 1536px)',
        type: 'image/png',
        w: 470.67,
        h: 264.75,
      },
    ],
  }
</script>

<svelte:head>
  <title>UI Design Daily with Tailwind CSS</title>
</svelte:head>

<div class="container mx-auto px-4 py-4 sm:px-6 lg:px-8">
  <h2
    class="py-4 text-2xl font-bold leading-7 text-gray-12 sm:truncate sm:text-3xl"
  >
    Recents
  </h2>

  <ul class="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
    {#each list as item}
      <li
        class="col-span-1 flex flex-col divide-y divide-gray-6 rounded border-2 border-gray-7 bg-gray-3 text-center shadow"
      >
        <picture>
          {#each imageUrl.sources(item.imageUrl) as source}
            <source
              srcSet={source.url}
              type={source.type}
              media={source.media}
              width={source.w}
              height={source.h}
            />
          {/each}
          <img
            class="aspect-video w-full flex-shrink-0 rounded-t-sm"
            width="588"
            height="330.75"
            src={imageUrl.default(item.imageUrl)}
            alt=""
            loading="lazy"
          />
        </picture>
        <div class="flex flex-1 flex-col p-8">
          <h3 class="text-lg font-medium text-gray-12">{item.title}</h3>

          <time class="mt-1 truncate text-sm text-gray-11">{item.date}</time>
        </div>
        <div>
          <div class="-mt-px flex divide-x divide-gray-6">
            <div class="flex w-0 flex-1">
              <a
                href={item.linkOriginal}
                rel="external noopener noreferrer"
                target="_blank"
                class="relative -mr-px inline-flex w-0 flex-1 items-center justify-center rounded-bl-lg border border-transparent py-4 text-sm font-medium text-gray-9 transition-colors hover:text-gray-11"
              >
                <span> UIDesignDaily </span>
                <Icon id="external-link" class="hidden sm:block w-4 h-4 ml-2" />
              </a>
            </div>
            <div class="-ml-px flex w-0 flex-1">
              <a
                href={item.linkComponent}
                class="relative inline-flex w-0 flex-1 items-center justify-center rounded-br-lg border border-transparent py-4 text-sm font-medium text-gray-9 transition-colors hover:text-gray-11"
              >
                <span> Implementation </span>
                <Icon
                  id="arrow-top-right"
                  class="hidden sm:block w-4 h-4 ml-2"
                />
              </a>
            </div>
          </div>
        </div>
      </li>
    {/each}
  </ul>
</div>

{#if browser && mode !== 'development'}
  <!-- Cloudflare Web Analytics -->
  <script
    defer
    src="https://static.cloudflareinsights.com/beacon.min.js"
    data-cf-beacon={'{"token":"ed0e6d03022f40168e757f0ac8cf955f"}'}>
  </script>
  <!-- End Cloudflare Web Analytics -->
{/if}
