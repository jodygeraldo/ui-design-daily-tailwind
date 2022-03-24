<script>
  import Icon from '/src/components/Icon.svelte'

  const people = [
    { name: 'Mary Massis', imageUrl: 'person-1.png' },
    { name: 'Daria Nati', imageUrl: 'person-2.png' },
    { name: 'Lisa Kruckova', imageUrl: 'person-3.png' },
  ]
</script>

<div class="theme grid place-items-center min-h-screen">
  <div class="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
    <div class="rounded-3xl bg-white space-y-8 p-[70px] max-w-xl mx-auto">
      <div class="space-y-2">
        <h2 class="font-bold text-[32px] text-primary">About</h2>
        <div class="flex justify-between items-center">
          <p class="font-medium text-lg text-primary">Members (2,778)</p>
          <button class="px-4 py-2 border border-[#BBC2FF] text-ascent rounded"
            >Import</button
          >
        </div>
      </div>

      <div>
        <Icon
          id="magnifying-glass"
          className="absolute w-9 h-9 mt-3 ml-2 opacity-50"
        />
        <input
          type="search"
          class="rounded-lg w-full border border-[#b4bed0] py-4 pl-12 pr-4 placeholder:text-primary placeholder:opacity-50 font-medium text-lg"
          placeholder="Find and add people"
        />
      </div>

      <div class="space-y-2">
        <p class="font-medium text-lg text-primary">Share an invitation link</p>
        <div
          class="rounded-lg w-full border border-[#b4bed0] p-4 flex justify-between items-center gap-4"
        >
          <span class="font-medium text-lg text-primary truncate w-0 flex-1">
            https://work.me/g/sajhsjhazyaL
          </span>
          <Icon id="copy" className="h-8 w-8 text-primary" />
        </div>
      </div>

      <div class="space-y-8 sm:space-y-4">
        <p class="font-medium text-lg text-primary">Suggested Members</p>
        {#each people as person}
          <div class="sm:flex justify-between items-center">
            <div class="flex gap-4 items-center">
              <img
                class="rounded-full w-20 h-20"
                src={`/assets/images/${person.imageUrl}`}
                alt=""
              />
              <p class="font-medium text-2xl text-primary">{person.name}</p>
            </div>
            <button
              class="px-4 py-2 flex gap-[10px] items-center bg-primary text-white rounded w-full justify-center mt-4 sm:mt-0 sm:w-auto"
            >
              <Icon id="plus" className="h-5 w-5" />
              <span>Add</span>
            </button>
          </div>
        {/each}
      </div>
    </div>
  </div>
</div>

<style>
  .theme {
    --color-primary: #111831;
    --color-ascent: #5c69e1;
  }
</style>
