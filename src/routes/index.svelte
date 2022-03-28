<script>
  import Icon from '/src/components/Icon.svelte'
  import list from '../data/index'
</script>

<svelte:head>
  <title>UI Design Daily with Tailwind CSS</title>
</svelte:head>

<div class="container mx-auto px-4 py-4 sm:px-6 lg:px-8">
  <h2
    class="text-2xl font-bold leading-7 text-gray-12 sm:text-3xl sm:truncate py-4"
  >
    Recents
  </h2>

  <ul class="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
    {#each list as item}
      <li
        class="col-span-1 flex flex-col divide-y divide-gray-6 rounded bg-gray-3 text-center shadow border-2 border-gray-7"
      >
        <img
          class="aspect-video w-full flex-shrink-0 rounded-t-sm"
          src={`/assets/images/${item.imageUrl}`}
          alt=""
        />
        <div class="flex flex-1 flex-col p-8">
          <h3 class="text-lg font-medium text-gray-12">{item.title}</h3>

          <time class="mt-1 text-sm text-gray-11 truncate">{item.date}</time>
        </div>
        <div>
          <div class="-mt-px flex divide-x divide-gray-6">
            <div class="flex w-0 flex-1">
              <a
                href={item.linkOriginal}
                rel="external noopener noreferrer"
                target="_blank"
                class="relative -mr-px inline-flex w-0 flex-1 items-center justify-center rounded-bl-lg border border-transparent py-4 text-sm font-medium text-gray-9 hover:text-gray-11 transition-colors"
              >
                <span> UIDesignDaily </span>
                <Icon
                  id="external-link"
                  className="hidden sm:block w-4 h-4 ml-2"
                />
              </a>
            </div>
            <div class="-ml-px flex w-0 flex-1">
              <a
                href={item.linkComponent}
                class="relative inline-flex w-0 flex-1 items-center justify-center rounded-br-lg border border-transparent py-4 text-sm font-medium text-gray-9 hover:text-gray-11 transition-colors"
              >
                <span> Implementation </span>
                <Icon
                  id="arrow-top-right"
                  className="hidden sm:block w-4 h-4 ml-2"
                />
              </a>
            </div>
          </div>
        </div>
      </li>
    {/each}
  </ul>
</div>
