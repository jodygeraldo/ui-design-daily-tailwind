<script context="module" lang="ts">
  export async function load() {
    return {
      maxage: 31536000,
    }
  }

  import Icon from '$lib/Icon.svelte'

  const todos = ['Eggs', 'Tomatoes', 'Avocado']
  const todosCompleted = ['Egg noodles', 'Scampi', 'Orange juice', 'Apples']
</script>

<svelte:head>
  <title>To Do List - UI Design Daily with Tailwind CSS</title>
</svelte:head>

<div class="theme grid min-h-screen place-items-center">
  <div class="container mx-auto px-4 py-4 sm:px-6 lg:px-8">
    <div
      class="relative mx-auto max-w-md rounded-2xl bg-white p-6 shadow-[0_15px_41px_3_#b4b4e330] sm:p-12 lg:rounded-3xl"
    >
      <div
        class="absolute inset-y-6 -right-6 left-12 -z-10 rounded-2xl bg-white/60 lg:rounded-3xl"
      />
      <div>
        <div class="flex items-center justify-between">
          <h2 class="text-2xl font-black text-primary lg:text-4xl">
            Groceries
          </h2>
          <Icon id="dots-horizontal" class="h-8 w-8 text-ascent" />
        </div>
        <p class="mt-1 text-sm font-medium text-ascent lg:mt-2 lg:text-base">
          Shared with <span>1 person</span>
        </p>
        <ul class="mt-4 space-y-4 lg:mt-8 lg:space-y-6">
          {#each todos as todo}
            <li class="flex items-center gap-2">
              <button
                class="h-10 w-10 rounded-full border border-primary bg-white"
              />
              <p class="font-medium text-primary lg:text-xl">
                {todo}
              </p>
            </li>
          {/each}
        </ul>

        <div class="mt-5 lg:mt-10">
          <h3 class="font-medium uppercase text-primary">
            Completed ({todosCompleted.length})
          </h3>
          <ul class="mt-4 space-y-4 lg:mt-8 lg:space-y-6">
            {#each todosCompleted as todo}
              <li class="flex items-center gap-2">
                <div class="relative h-10 w-10">
                  <button
                    class="h-10 w-10 rounded-full border border-primary bg-white"
                  />
                  <Icon
                    id="check"
                    class="pointer-events-none absolute top-1/2 bottom-1/2 right-1/2 h-6 w-6 -translate-y-1/2 translate-x-1/2 text-ascent"
                  />
                </div>
                <p class="font-medium text-ascent lg:text-xl">
                  {todo}
                </p>
              </li>
            {/each}
          </ul>
        </div>

        <div class="flex justify-end">
          <button class="mt-8 rounded-2xl bg-primary px-6 py-2 lg:mt-16">
            <Icon id="plus" class="h-8 w-8 text-white" />
          </button>
        </div>
      </div>
    </div>
  </div>
</div>

<style>
  .theme {
    --color-primary: #3b3b71;
    --color-ascent: #8a8aaa;
  }
</style>
