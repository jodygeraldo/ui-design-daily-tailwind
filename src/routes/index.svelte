<script>
  import Icon from '/src/components/Icon.svelte'
  import list from '../data/index'
</script>

<svelte:head>
  <title>UI Design Daily with Tailwind CSS</title>
</svelte:head>

<div class="container mx-auto px-4 py-4 sm:px-6 lg:px-8">
  <ul
    class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
  >
    {#each list as item}
      <li
        class="col-span-1 flex flex-col divide-y divide-gray-200 rounded-lg bg-white text-center shadow"
      >
        <div class="flex flex-1 flex-col p-8">
          <img
            class="aspect-video w-full flex-shrink-0 rounded-lg"
            src={`/assets/images/${item.imageUrl}`}
            alt=""
          />
          <h3 class="mt-6 text-sm font-medium text-gray-900">{item.title}</h3>

          <time class="mt-1 text-sm text-gray-500">{item.date}</time>
        </div>
        <div>
          <div class="-mt-px flex divide-x divide-gray-200">
            <div class="flex w-0 flex-1">
              <a
                href={item.linkOriginal}
                rel="external noopener noreferrer"
                target="_blank"
                class="relative -mr-px inline-flex w-0 flex-1 items-center justify-center rounded-bl-lg border border-transparent py-4 text-sm font-medium text-gray-700 hover:text-gray-500"
              >
                <span> UIDesignDaily </span>
                <Icon id="external-link" className="w-4 h-4 ml-2" />
              </a>
            </div>
            <div class="-ml-px flex w-0 flex-1">
              <a
                href={item.linkComponent}
                class="relative inline-flex w-0 flex-1 items-center justify-center rounded-br-lg border border-transparent py-4 text-sm font-medium text-gray-700 hover:text-gray-500"
              >
                <span> Implementation </span>
                <Icon id="arrow-top-right" className="w-4 h-4 ml-2" />
              </a>
            </div>
          </div>
        </div>
      </li>
    {/each}
  </ul>
</div>
