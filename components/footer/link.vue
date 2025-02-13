<template>
  <div class="flex flex-col dark:text-zinc-300 my-5 md:my-0 md:justify-self-center">
    <p class="text-black dark:text-zinc-300 text-base font-semibold">
      Quick Links
    </p>
    <NuxtLink to="/" class="hover:underline my-1">
      Home
    </NuxtLink>
    <NuxtLink to="/blogs" class="hover:underline my-1">
      Blogs
    </NuxtLink>
    <NuxtLink to="/categories" class="hover:underline my-1">
      Categories
    </NuxtLink>
    <NuxtLink to="/about" class="hover:underline my-1">
      About Me
    </NuxtLink>
  </div>
</template>
