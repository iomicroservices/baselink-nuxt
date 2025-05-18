<script lang="ts" setup>
const { getStarted } = useGetStarted()
import { brandGroups } from '@/data/brands'

const props = defineProps<{
    title?: string
    description?: string
    brands?: { name?: string; description?: string; image?: string }[]
    service?: string
    type: keyof typeof brandGroups
}>()

const { brands } = props

const expanded = ref(false)

// Use provided `brands` prop if available, otherwise fallback to imported data
const resolvedBrands = computed(() =>
    props.brands?.length ? props.brands : brandGroups[props.type] || []
)

const visibleBrands = computed(() => {
    return expanded.value ? resolvedBrands.value : resolvedBrands.value.slice(0, 12)
})
</script>

<template>
    <section class="section relative mx-auto pb-0">

        <h2 class="heading2 [&_a]:text-primary-700 dark:[&_a]:text-primary-500 [&_a:hover]:underline">
            <ContentSlot unwrap=" p" name="title">
                {{ title || 'Brands that we can install' }}
            </ContentSlot>
        </h2>

        <p class="lg:max-w-[75%] text-xl mb-10">
            <ContentSlot unwrap="p" name="description">
                {{ description || '' }}
            </ContentSlot>
        </p>

        <!-- Fade-limited grid container -->
        <div class="relative">
            <div :class="[
                'grid gap-3 lg:gap-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4',
                !expanded ? 'max-h-[940px] overflow-hidden' : ''
            ]">
                <template v-for="boiler in visibleBrands" :key="boiler.name || boiler.id">
                    <FeaturesCard :description="boiler.description" colour="blue" :path="getStarted">
                        <template #card-image>
                            <FeaturesCardimage colour="indigo" :image="boiler.image" :alt="boiler.description" />
                        </template>
                        <template #card-title>
                            <h3 class="text-lg font-semibold pt-4 -mb-5">{{ boiler.name }}</h3>
                        </template>
                        <template #card-link>
                            <FeaturesCardlink :path="getStarted" pathtxt="Get started" />
                        </template>
                    </FeaturesCard>
                </template>

                <template v-if="brands?.length === 0">
                    <BlogEmpty />
                </template>
            </div>

            <!-- Gradient fade overlay -->
            <div v-if="!expanded"
                class="pointer-events-none absolute bottom-0 left-0 w-full h-24 bg-gradient-to-b from-transparent to-[#F1F2F4] dark:to-slate-950" />
        </div>

        <!-- See More Button -->
        <div v-if="!expanded && resolvedBrands.length > 12" class="flex justify-center mt-6">
            <UDivider>
                <UButton @click="expanded = true" icon="i-mdi-chevron-down" variant="outline" class="text-base font-semibold">
                    See more brands
                </UButton>
            </UDivider>
        </div>
    </section>
</template>
