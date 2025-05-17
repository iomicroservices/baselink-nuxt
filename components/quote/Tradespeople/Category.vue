<script setup lang="ts">

interface Props {
    preselection?: string
}
const props = defineProps<Props>()

// Categories
const items = [
    { name: 'Handyman', icon: 'mdi:pliers', id: 'handyman' },
    { name: 'Network', icon: 'mdi:wifi-strength-3-lock', id: 'network-engineer' },
    { name: 'Plumber', icon: 'mdi:pipe-leak', id: 'plumber' },
    { name: 'Locksmith', icon: 'mdi:key-chain', id: 'locksmith' },
    { name: 'Carpenter', icon: 'mdi:hand-saw', id: 'carpenter' },
    { name: 'Painter', icon: 'mdi:brush-variant', id: 'painter-decorator' },
    { name: 'Gardener', icon: 'mdi:mower-bag', id: 'gardener' },
    { name: 'Gas/heating', icon: 'mdi:thermometer-lines', id: 'gas-heating-engineer' },
    { name: 'Certification', icon: 'mdi:certificate', id: 'certificates-reports' },
    { name: 'Removals', icon: 'mdi:van-utility', id: 'removals' }
]

// State
const isExpanded = ref(true)
const selected = ref<typeof items[number] | null>(null)

function toggleExpanded() {
    isExpanded.value = !isExpanded.value
}

function selectItem(item: typeof items[number]) {
    selected.value = item
    isExpanded.value = false
    emit('update:userSelection', item.id)
}

// 🔄 Set initial id based on preselection prop
const preselectedItem = items.find(item => item.id === props.preselection)
if (preselectedItem) {
    selected.value = preselectedItem
    isExpanded.value = false
}

// emit back to parent
const emit = defineEmits<{
    (e: 'update:userSelection', value: string): void
}>()

</script>

<template>
    <div class="w-full dark:text-white">
        <p class="font-medium text-lg mb-3">What kind of tradesperson do you need?</p>

        <div>
            <!-- Collapsed summary -->
            <div v-if="!isExpanded && selected !== null"
                class="flex items-center justify-between py-4 pl-4 pr-3 bg-white dark:bg-gray-900 rounded-md cursor-pointer border border-gray-300 dark:border-gray-800 shadow-sm"
                @click="toggleExpanded">
                <div class="flex items-center gap-2 font-semibold">
                    <Icon :name="selected.icon" size="24" />
                    <span>{{ selected.name }}</span>
                </div>
                <Icon class="text-gray-400 dark:text-gray-500 h-6 w-6" name="mdi:chevron-down" size="24" />
            </div>
        </div>

        <!-- Expanded grid of options -->
        <div v-if="isExpanded" class="grid gap-3 grid-cols-2 md:grid-cols-3">
            <button v-for="item in items" :key="item.name" @click="selectItem(item)" :class="[
                'p-4 rounded-lg text-left',
                selected?.name === item.name
                    ? 'border-2 border-indigo-400 bg-primary/10 dark:bg-primary/20 font-semibold'
                    : 'border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 hover:bg-primary/10 dark:hover:bg-primary/20'
            ]">
                <div class="flex items-center gap-2">
                    <Icon :name="item.icon" size="24" />
                    <span>{{ item.name }}</span>
                </div>
            </button>
        </div>
    </div>
</template>