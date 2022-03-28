<script>
  import Icon from '/src/components/Icon.svelte'

  const todos = ['Eggs', 'Tomatoes', 'Avocado']
  const todosCompleted = ['Egg noodles', 'Scampi', 'Orange juice', 'Apples']
</script>

<svelte:head>
  <title>To Do List - UI Design Daily with Tailwind CSS</title>
</svelte:head>

<div class="theme grid place-items-center min-h-screen">
  <div class="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
    <div
      class="rounded-2xl lg:rounded-3xl max-w-md shadow-[0_15px_41px_3_#b4b4e330] bg-white p-6 sm:p-12 mx-auto relative"
    >
      <div
        class="absolute inset-y-6 -right-6 left-12 bg-white/60 -z-10 rounded-2xl lg:rounded-3xl"
      />
      <div>
        <div class="flex justify-between items-center">
          <h2 class="font-black text-2xl lg:text-4xl text-primary">
            Groceries
          </h2>
          <Icon id="dots-horizontal" className="w-8 h-8 text-ascent" />
        </div>
        <p class="font-medium text-ascent mt-1 lg:mt-2 text-sm lg:text-base">
          Shared with <span>1 person</span>
        </p>
        <ul class="mt-4 lg:mt-8 space-y-4 lg:space-y-6">
          {#each todos as todo}
            <li class="flex items-center gap-2">
              <button
                class="w-10 h-10 border border-primary bg-white rounded-full"
              />
              <p class="font-medium lg:text-xl text-primary">
                {todo}
              </p>
            </li>
          {/each}
        </ul>

        <div class="mt-5 lg:mt-10">
          <h3 class="uppercase font-medium text-primary">
            Completed ({todosCompleted.length})
          </h3>
          <ul class="mt-4 lg:mt-8 space-y-4 lg:space-y-6">
            {#each todosCompleted as todo}
              <li class="flex items-center gap-2">
                <div class="relative h-10 w-10">
                  <button
                    class="w-10 h-10 border border-primary bg-white rounded-full"
                  />
                  <Icon
                    id="check"
                    className="w-6 h-6 text-ascent absolute top-1/2 bottom-1/2 -translate-y-1/2 translate-x-1/2 right-1/2 pointer-events-none"
                  />
                </div>
                <p class="font-medium lg:text-xl text-ascent">
                  {todo}
                </p>
              </li>
            {/each}
          </ul>
        </div>

        <div class="flex justify-end">
          <button class="bg-primary rounded-2xl px-6 py-2 mt-8 lg:mt-16">
            <Icon id="plus" className="w-8 h-8 text-white" />
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
