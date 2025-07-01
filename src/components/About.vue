<template>
    <section class="section flex items-center flex-col min-h-screen">
        <!-- About -->
        <div class="w-[90%] md:w-[70%] mt-10">
            <h2 class="text-4xl font-bold text-center mb-20">About</h2>

            <div class="flex flex-col justify-around items-center sm:flex-row lg:justify-start">
                <img :src="about.image" alt="Profile Picture"
                    class="mb-5 md:mb-0 sm:w-[40%] sm:mr-7 sm:max-w-80 rounded-md w-[80%]">
                <div class="flex flex-col justify-between md:min-h-[350px] text-lg w-[80%] md:w-auto">
                    <div>
                        <p class="text-3xl font-bold mb-4">
                            {{ about.name }}
                            <span class="text-xl">{{ about.englishName }}</span>
                        </p>
                        <span class="p-2 bg-gray-200 dark:bg-zinc-600 rounded-md transition duration-500">
                            {{ about.title }}
                        </span>
                    </div>
                    <div class="mt-4">
                        <p class="mb-3 flex items-center gap-2">
                            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24"
                                height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                <path fill="none" d="M0 0h24v24H0z"></path>
                                <path
                                    d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 0 0-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z">
                                </path>
                            </svg>
                            {{ about.phone }}
                        </p>
                        <p class="mb-3 flex items-center gap-2">
                            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512"
                                height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z">
                                </path>
                            </svg>
                            {{ about.birthday }}
                        </p>
                        <p class="mb-3 flex items-center gap-2">
                            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24"
                                height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                <path fill="none" d="M0 0h24v24H0z"></path>
                                <path
                                    d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z">
                                </path>
                            </svg>
                            {{ about.email }}
                        </p>
                        <p class="mb-3 flex items-center gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                                <path fill="currentColor"
                                    d="M0 3a3 3 0 1 0 6 0a3 3 0 0 0-6 0m9 18a3 3 0 1 0 6 0a3 3 0 0 0-6 0m0-9a3 3 0 1 0 6 0a3 3 0 0 0-6 0m0-9a3 3 0 1 0 6 0a3 3 0 0 0-6 0m9 0a3 3 0 1 0 6 0a3 3 0 0 0-6 0" />
                            </svg>
                            <a :href="about.github" target="_blank"
                                class="text-[currentColor] no-underline cursor-pointer">
                                {{ about.github }}
                            </a>
                        </p>
                        <p class="mb-3 flex items-center gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                                <path fill-rule="evenodd" clip-rule="evenodd"
                                    d="M12.026 2c-5.509 0-9.974 4.465-9.974 9.974c0 4.406 2.857 8.145 6.821 9.465c.499.09.679-.217.679-.481c0-.237-.008-.865-.011-1.696c-2.775.602-3.361-1.338-3.361-1.338c-.452-1.152-1.107-1.459-1.107-1.459c-.905-.619.069-.605.069-.605c1.002.07 1.527 1.028 1.527 1.028c.89 1.524 2.336 1.084 2.902.829c.091-.645.351-1.085.635-1.334c-2.214-.251-4.542-1.107-4.542-4.93c0-1.087.389-1.979 1.024-2.675c-.101-.253-.446-1.268.099-2.64c0 0 .837-.269 2.742 1.021a9.582 9.582 0 0 1 2.496-.336a9.554 9.554 0 0 1 2.496.336c1.906-1.291 2.742-1.021 2.742-1.021c.545 1.372.203 2.387.099 2.64c.64.696 1.024 1.587 1.024 2.675c0 3.833-2.33 4.675-4.552 4.922c.355.308.675.916.675 1.846c0 1.334-.012 2.41-.012 2.737c0 .267.178.577.687.479C19.146 20.115 22 16.379 22 11.974C22 6.465 17.535 2 12.026 2z"
                                    fill="currentColor" />
                            </svg>
                            <a :href="about.blog" target="_blank"
                                class="text-[currentColor] no-underline cursor-pointer">
                                {{ about.blog }}
                            </a>
                        </p>
                    </div>
                </div>
            </div>
            <div class="mt-14 mx-auto">
                <div v-for="pursue in about.pursue" :key="pursue.title" class="mb-8">
                    <div class="text-2xl font-bold bg-gray-200 dark:bg-zinc-600 rounded-md p-2 transition duration-500">
                        {{ pursue.title }}
                    </div>
                    <div class="text-lg my-4 mx-2 break-keep" v-html="pursue.description"></div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import { aboutData } from '/public/data/about';
export default {
    data() {
        return {
            about: aboutData
        };
    },
};
</script>
