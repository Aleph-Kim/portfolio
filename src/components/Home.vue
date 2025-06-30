<template>
    <div class="section h-screen flex items-center justify-center flex-col relative">
        <div class="flex flex-col w-full items-center">
            <div class="text-3xl mx-10">
                <span ref="typing" class="font-bold coding-font"></span>
            </div>
            <div class="text-2xl mt-5">
                {{ homeData.title }}
            </div>
            <div class="flex justify-center items-center mt-5 w-full">
                <a :href=homeData.blog target="blank"
                    class="text-xl mr-2 transition-all duration-500 w-12 h-12 flex justify-center items-center rounded-2xl text-[var(--color-text)] hover:bg-[var(--color-text)] hover:text-[var(--color-background);]">
                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                        <path fill="currentColor"
                            d="M0 3a3 3 0 1 0 6 0a3 3 0 0 0-6 0m9 18a3 3 0 1 0 6 0a3 3 0 0 0-6 0m0-9a3 3 0 1 0 6 0a3 3 0 0 0-6 0m0-9a3 3 0 1 0 6 0a3 3 0 0 0-6 0m9 0a3 3 0 1 0 6 0a3 3 0 0 0-6 0" />
                    </svg>
                </a>
                <a :href=homeData.github target="blank"
                    class="text-2xl transition-all duration-500 w-12 h-12 flex justify-center items-center rounded-2xl text-[var(--color-text)] hover:bg-[var(--color-text)] hover:text-[var(--color-background);]">
                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                        <path fill-rule="evenodd" clip-rule="evenodd"
                            d="M12.026 2c-5.509 0-9.974 4.465-9.974 9.974c0 4.406 2.857 8.145 6.821 9.465c.499.09.679-.217.679-.481c0-.237-.008-.865-.011-1.696c-2.775.602-3.361-1.338-3.361-1.338c-.452-1.152-1.107-1.459-1.107-1.459c-.905-.619.069-.605.069-.605c1.002.07 1.527 1.028 1.527 1.028c.89 1.524 2.336 1.084 2.902.829c.091-.645.351-1.085.635-1.334c-2.214-.251-4.542-1.107-4.542-4.93c0-1.087.389-1.979 1.024-2.675c-.101-.253-.446-1.268.099-2.64c0 0 .837-.269 2.742 1.021a9.582 9.582 0 0 1 2.496-.336a9.554 9.554 0 0 1 2.496.336c1.906-1.291 2.742-1.021 2.742-1.021c.545 1.372.203 2.387.099 2.64c.64.696 1.024 1.587 1.024 2.675c0 3.833-2.33 4.675-4.552 4.922c.355.308.675.916.675 1.846c0 1.334-.012 2.41-.012 2.737c0 .267.178.577.687.479C19.146 20.115 22 16.379 22 11.974C22 6.465 17.535 2 12.026 2z"
                            fill="currentColor" />
                    </svg>
                </a>
            </div>
        </div>
        <div class="absolute bottom-20 pointer-events-none flex flex-col gap-0 items-center">
            <svg class="w-10 h-10 text-[var(--color-text)] arrow-fade" style="animation-delay: 50ms;" fill="none"
                stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
            <svg class="w-10 h-10 text-[var(--color-text)] arrow-fade mt-[-25px]" fill="none"
                stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
        </div>
    </div>
</template>
<script>
import { onMounted, onBeforeUnmount, ref } from 'vue';
import Typed from 'typed.js';

import { homeData, typingStrings } from '/public/data/home';

export default {
    data() {
        return {
            homeData: homeData
        }
    },
    setup() {
        const typing = ref(null);
        let typedInstance;

        onMounted(() => {
            if (typing.value) {
                typedInstance = new Typed(typing.value, {
                    strings: typingStrings,
                    typeSpeed: 30,
                    backSpeed: 20,
                    loop: true,
                });
            }
        });

        onBeforeUnmount(() => {
            typedInstance?.destroy();
        });

        return { typing };
    }
};
</script>
