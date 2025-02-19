<script lang="ts" setup>
interface Props {
  text: string
  colour: string
  published: boolean
  svg: string
}
withDefaults(defineProps<Props>(), {
  text: 'item',
  colour: 'red',
  published: false,
  svg: 'M64.142 102.96H39.24V78.522h24.903ZM39.24 122.131H20.373v-19.173H39.24Zm-18.866-19.173H4.53V87.167h15.843Zm43.394 24.814v-24.814c26.41 0 46.784-25.94 36.597-53.388c-3.775-10.15-11.694-18.42-22.26-22.181c-27.167-9.772-53.2 10.527-53.2 36.468H0c0-41.354 40.37-74.064 84.52-60.53c19.242 6.017 34.334 21.055 40.37 40.23c13.581 43.985-19.245 84.214-61.123 84.214Zm0 0',
})
</script>

<template>
  <div
    class="relative group overflow-hidden px-6 pt-6 rounded-xl bg-white border border-gray-200 dark:border-gray-800 dark:bg-gray-900 h-full flex flex-col">
    <div aria-hidden="true"
      :class="`inset-0 absolute aspect-video border rounded-full -translate-y-1/2 group-hover:-translate-y-1/4 duration-300 bg-gradient-to-b from-${colour}-500 to-white dark:from-white dark:to-white blur-2xl opacity-25 dark:opacity-5 dark:group-hover:opacity-10`" />
    <div class="relative flex-1 flex flex-col">
      <div
        :class="`border border-${colour}-500/10 flex relative *:relative *:size-6 *:m-auto size-12 rounded-lg dark:bg-gray-900 dark:border-white/15 before:rounded-[7px] before:absolute before:inset-0 before:border-t before:border-white before:from-${colour}-100 dark:before:border-white/20 before:bg-gradient-to-b dark:before:from-white/10 dark:before:to-transparent before:shadow dark:before:shadow-gray-950`">
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 128 128">
          <path fill="#5c3efb" :d="svg" />
        </svg>
      </div>

      <div class="my-6 grow rounded-b-[--card-border-radius]">
        <p class="text-gray-700 dark:text-gray-300">
          {{ text }}
        </p>
      </div>
      <div>
        <slot name="card-content" />
      </div>

    </div>
  </div>
</template>
