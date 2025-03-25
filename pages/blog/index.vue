<script lang="ts" setup>
const { data } = await useAsyncData('all-blog-post', () => queryContent('/blog').sort({ _id: -1 }).find())

const elementPerPage = ref(6)
const pageNumber = ref(1)
const searchTest = ref('')

const formattedData = computed(() => {
  return data.value?.map((articles) => {
    return {
      path: articles._path,
      title: articles.title || 'no-title available',
      description: articles.description || 'no-description available',
      image: articles.image || '/not-found.jpg',
      alt: articles.alt || 'no alter data available',
      ogImage: articles.ogImage || '/not-found.jpg',
      date: articles.date || 'not-date-available',
      tags: articles.tags || [],
      published: articles.published || false,
    }
  }) || []
})

const searchData = computed(() => {
  return formattedData.value.filter((data) => {
    const lowerTitle = data.title.toLocaleLowerCase()
    if (lowerTitle.search(searchTest.value) !== -1)
      return true
    else return false
  }) || []
})

const paginatedData = computed(() => {
  return searchData.value.filter((data, idx) => {
    const startInd = ((pageNumber.value - 1) * elementPerPage.value)
    const endInd = (pageNumber.value * elementPerPage.value) - 1

    if (idx >= startInd && idx <= endInd)
      return true
    else return false
  }) || []
})

function scrollToSearch() {
  const searchElement = document.getElementById('search')
  const headerOffset = 100 // Adjust this value based on your header height
  if (searchElement) {
    const elementPosition = searchElement.getBoundingClientRect().top
    const offsetPosition = elementPosition + window.pageYOffset - headerOffset
    
    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    })
  }
}

function onPreviousPageClick() {
  if (pageNumber.value > 1) {
    pageNumber.value -= 1
    scrollToSearch()
  }
}

const totalPage = computed(() => {
  const ttlContent = searchData.value.length || 0
  const totalPage = Math.ceil(ttlContent / elementPerPage.value)
  return totalPage
})

function onNextPageClick() {
  if (pageNumber.value < totalPage.value) {
    pageNumber.value += 1
    scrollToSearch()
  }
}

useHead({
  title: 'Blog',
  meta: [
    {
      name: 'description',
      content: 'The latest news, updates, and insights from baselink.uk',
    },
  ],
  titleTemplate: '%s | BaseLink',  
})

// Generate OG Image
const siteData = useSiteConfig()
defineOgImage({
  props: {
    title: 'Blog',
    description: 'The latest news, updates, and insights from baselink.uk',
    siteName: siteData.url,
  },
})
</script>

<template>
  <div class="page-container">

    <MainHeroBlog />

    <section class="section">
      <div id="search" class="mb-5">
        <input v-model="searchTest"
        placeholder="Search"
        type="text"
        class="block w-full bg-[#FFFFFF] dark:bg-slate-900 dark:placeholder-zinc-500 text-zinc-600  rounded-md border-gray-300 dark:border-gray-800 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50">
      </div>

      <ClientOnly>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-3"> <!-- removed v-auto-animate right next to the div, causing error -->
          <template v-for="post in paginatedData" :key="post.title">
            <ArchiveCard :path="post.path" :title="post.title" :date="post.date" :description="post.description"
              :image="post.image" :alt="post.alt" :og-image="post.ogImage" :tags="post.tags"
              :published="post.published" />
          </template>

          <ArchiveCard v-if="paginatedData.length <= 0" title="No Post Found" image="/not-found.jpg" />
        </div>

        <template #fallback>
          <!-- this will be rendered on server side -->
          <BlogLoader />
          <BlogLoader />
        </template>
      </ClientOnly>

      <div class="flex justify-center items-center space-x-6 mt-10">
        <button :disabled="pageNumber <= 1" @click="onPreviousPageClick">
          <Icon name="mdi:code-less-than" size="30" :class="{ 'text-sky-700 dark:text-sky-400': pageNumber > 1 }" />
        </button>
        <p>{{ pageNumber }} / {{ totalPage }}</p>
        <button :disabled="pageNumber >= totalPage" @click="onNextPageClick">
          <Icon name="mdi:code-greater-than" size="30"
            :class="{ 'text-sky-700 dark:text-sky-400': pageNumber < totalPage }" />
        </button>
      </div>
    </section>

  </div>
</template>
