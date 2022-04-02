<script context="module" lang="ts">
  export async function load() {
    return {
      maxage: 31536000,
    }
  }

  import clsx from 'clsx'

  import Icon from '$lib/Icon.svelte'

  const nav = [
    { name: 'Reputation', active: false },
    { name: 'New users', active: true },
    { name: 'Voters', active: false },
    { name: 'Editors', active: false },
    { name: 'Moderators', active: false },
  ]

  const users = [
    {
      name: 'Lelah Nichols',
      location: 'Troy, MI',
      avatar: 'person-4.png',
      tags: ['clothes', 'stem'],
      selected: false,
    },
    {
      name: 'Jesus Weiss',
      location: 'Fort Worth, TX',
      avatar: 'person-5.png',
      tags: ['headset', 'gadget', 'speed', 'winter'],
      selected: true,
    },
    {
      name: 'Annie Rice',
      location: 'Austin, TX',
      avatar: 'person-6.png',
      tags: ['road', 'mountain', 'trip', 'earth', 'nature'],
      selected: false,
    },
    {
      name: 'Robert Brower',
      location: 'Cincinnati, OH',
      avatar: 'person-7.png',
      tags: ['maintenance', 'gears', 'frames', 'repair'],
      selected: false,
    },
    {
      name: 'Amy Campbell',
      location: 'Warrior, AL',
      avatar: 'person-8.png',
      tags: ['music', 'disks'],
      selected: false,
    },
    {
      name: 'Anthony S. Morin',
      location: 'Lyndhurst, NJ',
      avatar: 'person-9.png',
      tags: ['vintage', 'electric'],
      selected: false,
    },
  ]
</script>

<svelte:head>
  <title>Users List - UI Design Daily with Tailwind CSS</title>
</svelte:head>

<div class="theme grid min-h-screen place-items-center">
  <div class="container mx-auto px-4 py-4 sm:px-6 lg:px-8">
    <div
      class="space-y-4 rounded-2xl bg-white p-6 shadow-2xl shadow-[#BCC6E7] lg:space-y-8 lg:p-12"
    >
      <div class="space-y-4">
        <h2 class="text-2xl font-black text-primary lg:text-3xl">Users</h2>

        <div class="items-center justify-between lg:flex">
          <div class="relative flex-1">
            <Icon
              id="magnifying-glass"
              class="w-5 h-5 absolute top-1/2 bottom-1/2 -translate-y-1/2 ml-2 lg:ml-4"
            />
            <input
              type="search"
              class="placeholder-primary/70 w-full rounded border border-tertiary bg-[#FBFCFF] p-4 pl-8 placeholder:font-medium lg:w-2/3 lg:pl-12"
              placeholder="Search users"
            />
          </div>

          <nav class="mt-4 lg:mt-0">
            <ul class="w-full items-center sm:flex">
              {#each nav as navItem}
                <li
                  class={clsx(
                    navItem.active ? 'bg-[#849FFF] text-white' : 'text-primary',
                    'min-w-fit rounded-lg p-2 font-medium lg:p-4',
                  )}
                >
                  <a href={`#${navItem.name}`}>{navItem.name}</a>
                </li>
              {/each}
            </ul>
          </nav>
        </div>
      </div>

      <div
        class="grid grid-cols-1 gap-2 md:grid-cols-2 lg:gap-4 xl:grid-cols-3"
      >
        {#each users as user}
          <div
            class={clsx(
              user.selected &&
                'border border-tertiary shadow-[0_8px_23px_0_#DAE0F970]',
              'col-span-1 rounded-2xl bg-[#FBFCFF] p-6 text-center sm:flex sm:gap-4 sm:text-left',
            )}
          >
            <img
              src={`/assets/images/${user.avatar}`}
              alt=""
              class="mx-auto h-24 w-24 rounded-full sm:mx-0"
            />

            <div>
              <h3 class="text-lg font-black">{user.name}</h3>
              <p class="mt-1 text-sm font-medium">{user.location}</p>
              <ul
                class="mt-4 flex flex-wrap items-center justify-center gap-1 sm:justify-start"
              >
                {#each user.tags as tag}
                  <li
                    class="rounded-full border border-[#BFC8E5] bg-white py-0.5 px-2 text-[#516FD4]"
                  >
                    {tag}
                  </li>
                {/each}
              </ul>
            </div>
          </div>
        {/each}
      </div>
    </div>
  </div>
</div>

<style>
  .theme {
    --color-primary: #151b32;
    --color-ascent: #849fff;
    --color-tertiary: #bfc8e5;
  }
</style>
