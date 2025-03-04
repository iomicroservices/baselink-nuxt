<script setup lang="ts">
interface Props {
  title: string
  image: string
  alt: string
  description: string
  date: string
  tags: Array<string>
}

withDefaults(defineProps<Props>(), {
  title: 'no-title',
  image: '#',
  alt: 'no-img',
  description: 'no description',
  date: 'no-date',
  tags: () => [],
})
</script>

<template>
  <header class="section-hero">

    <!--title-->
    <h1 class="heading1 dark:text-zinc-300 m-5 text-center">
      {{ title || '' }}
    </h1>

    <!--image-->
    <NuxtImg :src="image || ''" :alt="alt || ''" width="600"
      class="m-auto rounded-2xl shadow-lg h-32 md:h-72 w-4/6 md:w-4/5 content-center object-cover" />
    
      <!--description-->
    <p class="text-xs sm:text-sm my-3 max-w-xl mx-auto text-center text-zinc-600 dark:text-zinc-400">
      {{ description }}
    </p>

    <!--social share, date and category tags-->
    <div class="flex w-full justify-center text-xs md:text-base my-8">
      <div class="md:flex text-black dark:text-zinc-300 content-center gap-8 text-xs sm:text-sm">
        <div class="flex items-center">
          <SocialShare v-for=" network in ['facebook', 'twitter' , 'linkedin' , 'email' ]" :key="network"
            :network="network" :styled="false" :label="false" class="p-1" aria-label="Share with {network}" />
        </div>
        <div class="flex items-center font-semibold">
          <LogoDate />
          <p>{{ date || '' }}</p>
        </div>
        <div class="flex items-center gap-2 flex-wrap my-5">
          <LogoTag />
          <template v-for="tag in tags" :key="tag">
            <span class="bg-gray-200 dark:bg-slate-900 rounded-md px-2 py-1 font-semibold">{{
              tag
              }}</span>
          </template>
        </div>
      </div>
    </div>

  </header>
  
</template>