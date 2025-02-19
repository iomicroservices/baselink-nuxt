<template>
    <section class="section container relative mx-auto">
        <h2 class="mb-4 text-base font-bold text-gray-900 sm:text-lg">
            Tools by Category
        </h2>

        <ul class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <li>
                <a href="https://eliteai.tools/category/productivity" data-clickable="Category:20:category-card"
                    class="block h-full transition-all duration-200 bg-white border border-gray-200 dark:border-gray-800 dark:bg-gray-900 rounded-xl group hover:shadow-lg hover:border-green-500 hover:ring-1 hover:ring-green-500/20">
                    <!-- Change flex to column layout -->
                    <div class="flex flex-col items-center p-6">
                        <!-- Icon on top -->
                        <div
                            class="flex items-center justify-center flex-shrink-0 w-16 h-16 transition-colors duration-200 rounded bg-green-50 group-hover:bg-green-100">
                            <span class="text-4xl" role="img" aria-label="Productivity category">⏱️</span>
                        </div>
                        <!-- Add some margin top for separation; remove ml-6 because we're no longer in a row -->
                        <div class="mt-4">
                            <h3
                                class="text-lg font-semibold text-gray-900 dark:text-gray-300 transition-colors duration-200 line-clamp-1 group-hover:text-green-600">
                                Productivity
                            </h3>
                        </div>
                    </div>
                </a>
            </li>

            <li><a href="https://eliteai.tools/category/business" data-clickable="Category:5:category-card"
                    class="block h-full transition-all duration-200 bg-white border border-gray-200 rounded group hover:shadow-lg hover:border-green-500 hover:ring-1 hover:ring-green-500/20">
                    <div class="flex items-center p-6">
                        <div
                            class="flex items-center justify-center flex-shrink-0 w-16 h-16 transition-colors duration-200 rounded bg-green-50 group-hover:bg-green-100">
                            <span class="text-4xl" role="img" aria-label="Business category">💼</span>
                        </div>

                        <div class="flex-grow ml-6">
                            <h3
                                class="text-lg font-semibold text-gray-900 transition-colors duration-200 line-clamp-1 group-hover:text-green-600">
                                Business
                            </h3>

                            <div class="inline-flex items-center mt-1">
                                <span class="text-gray-600 rounded">
                                    644
                                    tools
                                </span>
                            </div>
                        </div>

                        <div class="flex-shrink-0 ml-4">
                            <svg class="w-5 h-5 text-gray-400 group-hover:text-green-500 transition-colors duration-200"
                                xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="currentColor" aria-hidden="true" data-slot="icon">
                                <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5">
                                </path>
                            </svg>
                        </div>
                    </div>
                </a>
            </li>
            <li><a href="https://eliteai.tools/category/content-generation" data-clickable="Category:86:category-card"
                    class="block h-full transition-all duration-200 bg-white border border-gray-200 rounded group hover:shadow-lg hover:border-green-500 hover:ring-1 hover:ring-green-500/20">
                    <div class="flex items-center p-6">
                        <div
                            class="flex items-center justify-center flex-shrink-0 w-16 h-16 transition-colors duration-200 rounded bg-green-50 group-hover:bg-green-100">
                            <span class="text-4xl" role="img" aria-label="Content Generation category">📝</span>
                        </div>

                        <div class="flex-grow ml-6">
                            <h3
                                class="text-lg font-semibold text-gray-900 transition-colors duration-200 line-clamp-1 group-hover:text-green-600">
                                Content Generation
                            </h3>

                            <div class="inline-flex items-center mt-1">
                                <span class="text-gray-600 rounded">
                                    472
                                    tools
                                </span>
                            </div>
                        </div>

                        <div class="flex-shrink-0 ml-4">
                            <svg class="w-5 h-5 text-gray-400 group-hover:text-green-500 transition-colors duration-200"
                                xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="currentColor" aria-hidden="true" data-slot="icon">
                                <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5">
                                </path>
                            </svg>
                        </div>
                    </div>
                </a>
            </li>
            <li><a href="https://eliteai.tools/category/developer-tools" data-clickable="Category:44:category-card"
                    class="block h-full transition-all duration-200 bg-white border border-gray-200 rounded group hover:shadow-lg hover:border-green-500 hover:ring-1 hover:ring-green-500/20">
                    <div class="flex items-center p-6">
                        <div
                            class="flex items-center justify-center flex-shrink-0 w-16 h-16 transition-colors duration-200 rounded bg-green-50 group-hover:bg-green-100">
                            <span class="text-4xl" role="img" aria-label="Developer Tools category">🛠️</span>
                        </div>

                        <div class="flex-grow ml-6">
                            <h3
                                class="text-lg font-semibold text-gray-900 transition-colors duration-200 line-clamp-1 group-hover:text-green-600">
                                Developer Tools
                            </h3>

                            <div class="inline-flex items-center mt-1">
                                <span class="text-gray-600 rounded">
                                    413
                                    tools
                                </span>
                            </div>
                        </div>

                        <div class="flex-shrink-0 ml-4">
                            <svg class="w-5 h-5 text-gray-400 group-hover:text-green-500 transition-colors duration-200"
                                xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="currentColor" aria-hidden="true" data-slot="icon">
                                <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5">
                                </path>
                            </svg>
                        </div>
                    </div>
                </a>
            </li>
            <li><a href="https://eliteai.tools/category/marketing" data-clickable="Category:17:category-card"
                    class="block h-full transition-all duration-200 bg-white border border-gray-200 rounded group hover:shadow-lg hover:border-green-500 hover:ring-1 hover:ring-green-500/20">
                    <div class="flex items-center p-6">
                        <div
                            class="flex items-center justify-center flex-shrink-0 w-16 h-16 transition-colors duration-200 rounded bg-green-50 group-hover:bg-green-100">
                            <span class="text-4xl" role="img" aria-label="Marketing category">📣</span>
                        </div>

                        <div class="flex-grow ml-6">
                            <h3
                                class="text-lg font-semibold text-gray-900 transition-colors duration-200 line-clamp-1 group-hover:text-green-600">
                                Marketing
                            </h3>

                            <div class="inline-flex items-center mt-1">
                                <span class="text-gray-600 rounded">
                                    409
                                    tools
                                </span>
                            </div>
                        </div>

                        <div class="flex-shrink-0 ml-4">
                            <svg class="w-5 h-5 text-gray-400 group-hover:text-green-500 transition-colors duration-200"
                                xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="currentColor" aria-hidden="true" data-slot="icon">
                                <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5">
                                </path>
                            </svg>
                        </div>
                    </div>
                </a>
            </li>
            <li><a href="https://eliteai.tools/category/education" data-clickable="Category:11:category-card"
                    class="block h-full transition-all duration-200 bg-white border border-gray-200 rounded group hover:shadow-lg hover:border-green-500 hover:ring-1 hover:ring-green-500/20">
                    <div class="flex items-center p-6">
                        <div
                            class="flex items-center justify-center flex-shrink-0 w-16 h-16 transition-colors duration-200 rounded bg-green-50 group-hover:bg-green-100">
                            <span class="text-4xl" role="img" aria-label="Education category">🎓</span>
                        </div>

                        <div class="flex-grow ml-6">
                            <h3
                                class="text-lg font-semibold text-gray-900 transition-colors duration-200 line-clamp-1 group-hover:text-green-600">
                                Education
                            </h3>

                            <div class="inline-flex items-center mt-1">
                                <span class="text-gray-600 rounded">
                                    270
                                    tools
                                </span>
                            </div>
                        </div>

                        <div class="flex-shrink-0 ml-4">
                            <svg class="w-5 h-5 text-gray-400 group-hover:text-green-500 transition-colors duration-200"
                                xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="currentColor" aria-hidden="true" data-slot="icon">
                                <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5">
                                </path>
                            </svg>
                        </div>
                    </div>
                </a>
            </li>
            <li><a href="https://eliteai.tools/category/image-generator" data-clickable="Category:42:category-card"
                    class="block h-full transition-all duration-200 bg-white border border-gray-200 rounded group hover:shadow-lg hover:border-green-500 hover:ring-1 hover:ring-green-500/20">
                    <div class="flex items-center p-6">
                        <div
                            class="flex items-center justify-center flex-shrink-0 w-16 h-16 transition-colors duration-200 rounded bg-green-50 group-hover:bg-green-100">
                            <span class="text-4xl" role="img" aria-label="Image Generator category">🖌️</span>
                        </div>

                        <div class="flex-grow ml-6">
                            <h3
                                class="text-lg font-semibold text-gray-900 transition-colors duration-200 line-clamp-1 group-hover:text-green-600">
                                Image Generator
                            </h3>

                            <div class="inline-flex items-center mt-1">
                                <span class="text-gray-600 rounded">
                                    268
                                    tools
                                </span>
                            </div>
                        </div>

                        <div class="flex-shrink-0 ml-4">
                            <svg class="w-5 h-5 text-gray-400 group-hover:text-green-500 transition-colors duration-200"
                                xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="currentColor" aria-hidden="true" data-slot="icon">
                                <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5">
                                </path>
                            </svg>
                        </div>
                    </div>
                </a>
            </li>
            <li><a href="https://eliteai.tools/category/data-analysis" data-clickable="Category:8:category-card"
                    class="block h-full transition-all duration-200 bg-white border border-gray-200 rounded group hover:shadow-lg hover:border-green-500 hover:ring-1 hover:ring-green-500/20">
                    <div class="flex items-center p-6">
                        <div
                            class="flex items-center justify-center flex-shrink-0 w-16 h-16 transition-colors duration-200 rounded bg-green-50 group-hover:bg-green-100">
                            <span class="text-4xl" role="img" aria-label="Data Analysis category">📊</span>
                        </div>

                        <div class="flex-grow ml-6">
                            <h3
                                class="text-lg font-semibold text-gray-900 transition-colors duration-200 line-clamp-1 group-hover:text-green-600">
                                Data Analysis
                            </h3>

                            <div class="inline-flex items-center mt-1">
                                <span class="text-gray-600 rounded">
                                    247
                                    tools
                                </span>
                            </div>
                        </div>

                        <div class="flex-shrink-0 ml-4">
                            <svg class="w-5 h-5 text-gray-400 group-hover:text-green-500 transition-colors duration-200"
                                xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="currentColor" aria-hidden="true" data-slot="icon">
                                <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5">
                                </path>
                            </svg>
                        </div>
                    </div>
                </a>
            </li>
            <li><a href="https://eliteai.tools/category/design" data-clickable="Category:9:category-card"
                    class="block h-full transition-all duration-200 bg-white border border-gray-200 rounded group hover:shadow-lg hover:border-green-500 hover:ring-1 hover:ring-green-500/20">
                    <div class="flex items-center p-6">
                        <div
                            class="flex items-center justify-center flex-shrink-0 w-16 h-16 transition-colors duration-200 rounded bg-green-50 group-hover:bg-green-100">
                            <span class="text-4xl" role="img" aria-label="Design category">🎨</span>
                        </div>

                        <div class="flex-grow ml-6">
                            <h3
                                class="text-lg font-semibold text-gray-900 transition-colors duration-200 line-clamp-1 group-hover:text-green-600">
                                Design
                            </h3>

                            <div class="inline-flex items-center mt-1">
                                <span class="text-gray-600 rounded">
                                    228
                                    tools
                                </span>
                            </div>
                        </div>

                        <div class="flex-shrink-0 ml-4">
                            <svg class="w-5 h-5 text-gray-400 group-hover:text-green-500 transition-colors duration-200"
                                xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="currentColor" aria-hidden="true" data-slot="icon">
                                <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5">
                                </path>
                            </svg>
                        </div>
                    </div>
                </a>
            </li>
            <li><a href="https://eliteai.tools/category/customer-support" data-clickable="Category:55:category-card"
                    class="block h-full transition-all duration-200 bg-white border border-gray-200 rounded group hover:shadow-lg hover:border-green-500 hover:ring-1 hover:ring-green-500/20">
                    <div class="flex items-center p-6">
                        <div
                            class="flex items-center justify-center flex-shrink-0 w-16 h-16 transition-colors duration-200 rounded bg-green-50 group-hover:bg-green-100">
                            <span class="text-4xl" role="img" aria-label="Customer Support category">🙋</span>
                        </div>

                        <div class="flex-grow ml-6">
                            <h3
                                class="text-lg font-semibold text-gray-900 transition-colors duration-200 line-clamp-1 group-hover:text-green-600">
                                Customer Support
                            </h3>

                            <div class="inline-flex items-center mt-1">
                                <span class="text-gray-600 rounded">
                                    228
                                    tools
                                </span>
                            </div>
                        </div>

                        <div class="flex-shrink-0 ml-4">
                            <svg class="w-5 h-5 text-gray-400 group-hover:text-green-500 transition-colors duration-200"
                                xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="currentColor" aria-hidden="true" data-slot="icon">
                                <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5">
                                </path>
                            </svg>
                        </div>
                    </div>
                </a>
            </li>
            <li><a href="https://eliteai.tools/category/writing" data-clickable="Category:28:category-card"
                    class="block h-full transition-all duration-200 bg-white border border-gray-200 rounded group hover:shadow-lg hover:border-green-500 hover:ring-1 hover:ring-green-500/20">
                    <div class="flex items-center p-6">
                        <div
                            class="flex items-center justify-center flex-shrink-0 w-16 h-16 transition-colors duration-200 rounded bg-green-50 group-hover:bg-green-100">
                            <span class="text-4xl" role="img" aria-label="Writing category">✍️</span>
                        </div>

                        <div class="flex-grow ml-6">
                            <h3
                                class="text-lg font-semibold text-gray-900 transition-colors duration-200 line-clamp-1 group-hover:text-green-600">
                                Writing
                            </h3>

                            <div class="inline-flex items-center mt-1">
                                <span class="text-gray-600 rounded">
                                    180
                                    tools
                                </span>
                            </div>
                        </div>

                        <div class="flex-shrink-0 ml-4">
                            <svg class="w-5 h-5 text-gray-400 group-hover:text-green-500 transition-colors duration-200"
                                xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="currentColor" aria-hidden="true" data-slot="icon">
                                <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5">
                                </path>
                            </svg>
                        </div>
                    </div>
                </a>
            </li>
            <li><a href="https://eliteai.tools/category/education-assistant" data-clickable="Category:57:category-card"
                    class="block h-full transition-all duration-200 bg-white border border-gray-200 rounded group hover:shadow-lg hover:border-green-500 hover:ring-1 hover:ring-green-500/20">
                    <div class="flex items-center p-6">
                        <div
                            class="flex items-center justify-center flex-shrink-0 w-16 h-16 transition-colors duration-200 rounded bg-green-50 group-hover:bg-green-100">
                            <span class="text-4xl" role="img" aria-label="Education Assistant category">🍎</span>
                        </div>

                        <div class="flex-grow ml-6">
                            <h3
                                class="text-lg font-semibold text-gray-900 transition-colors duration-200 line-clamp-1 group-hover:text-green-600">
                                Education Assistant
                            </h3>

                            <div class="inline-flex items-center mt-1">
                                <span class="text-gray-600 rounded">
                                    173
                                    tools
                                </span>
                            </div>
                        </div>

                        <div class="flex-shrink-0 ml-4">
                            <svg class="w-5 h-5 text-gray-400 group-hover:text-green-500 transition-colors duration-200"
                                xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="currentColor" aria-hidden="true" data-slot="icon">
                                <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5">
                                </path>
                            </svg>
                        </div>
                    </div>
                </a>
            </li>
        </ul>
    </section>
</template>