<script>
  import clsx from 'clsx'

  import Icon from '/src/components/Icon.svelte'

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

<div class="theme grid place-items-center min-h-screen">
  <div class="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
    <div
      class="p-6 bg-white space-y-4 lg:p-12 lg:space-y-8 rounded-2xl shadow-2xl shadow-[#BCC6E7]"
    >
      <div class="space-y-4">
        <h2 class="font-black text-2xl lg:text-3xl text-primary">Users</h2>

        <div class="lg:flex justify-between items-center">
          <div class="relative flex-1">
            <Icon
              id="magnifying-glass"
              className="w-5 h-5 absolute top-1/2 bottom-1/2 -translate-y-1/2 ml-2 lg:ml-4"
            />
            <input
              type="search"
              class="pl-8 p-4 lg:pl-12 rounded placeholder-primary/70 border border-tertiary bg-[#FBFCFF] placeholder:font-medium w-full lg:w-2/3"
              placeholder="Search users"
            />
          </div>

          <nav class="mt-4 lg:mt-0">
            <ul class="sm:flex w-full items-center">
              {#each nav as navItem}
                <li
                  class={clsx(
                    navItem.active ? 'bg-[#849FFF] text-white' : 'text-primary',
                    'p-2 lg:p-4 min-w-fit rounded-lg font-medium',
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
        class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-2 lg:gap-4"
      >
        {#each users as user}
          <div
            class={clsx(
              user.selected &&
                'border border-tertiary shadow-[0_8px_23px_0_#DAE0F970]',
              'col-span-1 bg-[#FBFCFF] rounded-2xl p-6 text-center sm:text-left sm:flex sm:gap-4',
            )}
          >
            <img
              src={`/assets/images/${user.avatar}`}
              alt=""
              class="rounded-full w-24 h-24 mx-auto sm:mx-0"
            />

            <div>
              <h3 class="font-black text-lg">{user.name}</h3>
              <p class="mt-1 text-sm font-medium">{user.location}</p>
              <ul
                class="mt-4 flex gap-1 items-center flex-wrap justify-center sm:justify-start"
              >
                {#each user.tags as tag}
                  <li
                    class="py-0.5 px-2 rounded-full border border-[#BFC8E5] text-[#516FD4] bg-white"
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
