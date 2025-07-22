<svelte:options runes />
<script lang="ts">
    let mobileMenuOpen = $state(false);

  const navigation = [
    { name: 'Pravidla', href: '/pravidla' },
    { name: 'Propozice', href: '/propozice' },
    { name: 'Trať závodu', href: '/trat-zavodu' },
    { name: 'Startovka', href: '/startovka' },
    { name: 'Výsledky', href: '/vysledky' }
  ];
  const cta = { name: 'Registrace', href: '/registrace' };

  function toggleMobileMenu() {
    mobileMenuOpen = !mobileMenuOpen;
  }
</script>


<header class="bg-white">
  <nav aria-label="Global" class="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
    <div class="flex lg:flex-1">
      <a href="/" class="-m-1.5 p-1.5">
        <span class="sr-only">Slapy Trail Maniacs</span>
        <img src="/slapy-trail-maniacs-2025-logo.svg" alt="" class="h-20 w-auto" />
      </a>
    </div>
    <div class="flex lg:hidden">
      <button type="button" class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700" onclick={toggleMobileMenu}>
        <span class="sr-only">Otevřít hlavní menu</span>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" data-slot="icon" aria-hidden="true" class="size-6">
          <path d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      </button>
    </div>
    <div class="hidden lg:flex lg:gap-x-12">
      {#each navigation as item}
        <a href={item.href} class="text-sm/6 font-semibold text-gray-900">{item.name}</a>
      {/each}
    </div>
    <div class="hidden lg:flex lg:flex-1 lg:justify-end">
      <a href="{cta.href}" class="text-sm/6 font-semibold text-gray-900">{cta.name} <span aria-hidden="true">&rarr;</span></a>
    </div>
  </nav>
  <!-- Mobile menu, show/hide based on menu open state. -->
     {#if mobileMenuOpen}
  <div role="dialog" aria-modal="true" class="lg:hidden">
    <!-- Background backdrop, show/hide based on slide-over state. -->
    <div class="fixed inset-0 z-50"></div>
    <div class="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white p-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
      <div class="flex items-center justify-between">
        <a href="/" class="-m-1.5 p-1.5">
          <span class="sr-only">Slapy Trail Maniacs</span>
          <img src="/slapy-trail-maniacs-2025-logo.svg" alt="" class="h-20 w-auto" />
        </a>
        <button type="button" class="-m-2.5 rounded-md p-2.5 text-gray-700" onclick={toggleMobileMenu}>
          <span class="sr-only">Zavřít menu</span>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" data-slot="icon" aria-hidden="true" class="size-6">
            <path d="M6 18 18 6M6 6l12 12" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        </button>
      </div>
      <div class="mt-6 flow-root">
        <div class="-my-6 divide-y divide-gray-500/10">
          <div class="space-y-2 py-6">
              {#each navigation as item}
                <a
                  href={item.href}
                  onclick="{toggleMobileMenu}"
                  class="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                >
                  {item.name}
                </a>
              {/each}
          </div>
          <div class="py-6">
            <a
              href="{cta.href}"
              onclick="{toggleMobileMenu}"
              class="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
            >
              {cta.name}
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/if}
</header>