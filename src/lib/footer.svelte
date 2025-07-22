<script lang="ts">
    let currentYear = new Date().getFullYear();

    let footerNavItems = [
        {name: 'Home', href: '/'},
        {name: 'Pravidla', href: '/pravidla'},
        {name: 'Propozice', href: '/propozice'},
        {name: 'Trať závodu', href: '/trat-zavodu'},
        {name: 'Startovka', href: '/startovka'},
        {name: 'Registrace', href: '/registrace'},
        {name: 'Výsledky', href: '/vysledky'},
    ];

  const socials = [
    {
      name: 'Facebook',
      href: '#',
      icon: 'facebook'
    },
    {
      name: 'Instagram',
      href: '#',
      icon: 'instagram'
    },
    {
      name: 'YouTube',
      href: '#',
      icon: 'youtube'
    },
    {
      name: 'Vimeo',
      href: '#',
      icon: 'vimeo'
    }
  ];
</script>


    <footer class="bg-white">
      <div class="mx-auto max-w-7xl overflow-hidden px-6 py-20 sm:py-24 lg:px-8">
        <nav aria-label="Footer" class="-mb-6 flex flex-wrap justify-center gap-x-12 gap-y-3 text-sm/6">
            {#each footerNavItems as item}
                <a href={item.href} class="text-gray-600 hover:text-gray-900">
                    {item.name}
                </a>
            {/each}
        </nav>
        <div class="mt-16 flex justify-center gap-x-10">
            {#each socials as item}
            <a href="{item.href}" class="text-gray-600 hover:text-gray-800">
              <span class="sr-only">{item.name}</span>
              <!-- <item.icon aria-hidden="true" class="size-6" /> -->
            </a>
            {/each}
        </div>
        <p class="mt-10 text-center text-sm/6 text-gray-600">&copy; {currentYear} Š&P Outdoor, z.s. &mdash; Všechna práva vyhrazena.</p>
      </div>
    </footer>