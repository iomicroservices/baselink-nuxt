<script lang="ts" setup>
interface Props {
  text: string
  colour: string
  published: boolean
}
withDefaults(defineProps<Props>(), {
  text: 'item',
  colour: 'red',
  published: false,
})
</script>

<template>
  <div
    class="relative group overflow-hidden px-6 pt-6 rounded-xl bg-white border border-gray-200 dark:border-gray-800 dark:bg-gray-900 h-full flex flex-col">
    <div aria-hidden="true"
      :class="`inset-0 absolute aspect-video border rounded-full -translate-y-1/2 group-hover:-translate-y-1/4 duration-300 bg-gradient-to-b from-${colour}-500 to-white dark:from-white dark:to-white blur-2xl opacity-25 dark:opacity-5 dark:group-hover:opacity-10`" />
    <div class="relative flex-1 flex flex-col">

      <slot name="card-image" />

      <div class="my-6 grow rounded-b-[--card-border-radius]">
        <p class="text-gray-700 dark:text-gray-300">
          {{ text }}
        </p>
      </div>
      <div>
        <slot name="card-link" />
      </div>

    </div>
  </div>
</template>
