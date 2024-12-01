<template>
    <div class="section h-screen flex items-center justify-center flex-col">
        <div class="flex flex-col">
            <div class="text-xl">
                <span ref="typing" class="font-bold"></span>
            </div>
            <div class="text-2xl">
                개발이 즐거운 김채민 개발자입니다 😁
            </div>
            <div class="flex justify-center items-center mt-5 w-full">
                <a href="https://dev-kimchi.tistory.com" target="blank"
                    class="text-xl mr-2 transition-all duration-500 w-12 h-12 flex justify-center items-center rounded-2xl text-[var(--color-text)] hover:bg-[var(--color-text)] hover:text-[var(--color-background);]">
                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                        <path fill="currentColor"
                            d="M0 3a3 3 0 1 0 6 0a3 3 0 0 0-6 0m9 18a3 3 0 1 0 6 0a3 3 0 0 0-6 0m0-9a3 3 0 1 0 6 0a3 3 0 0 0-6 0m0-9a3 3 0 1 0 6 0a3 3 0 0 0-6 0m9 0a3 3 0 1 0 6 0a3 3 0 0 0-6 0" />
                    </svg>
                </a>
                <a href="https://github.com/aleph-kim" target="blank"
                    class="text-2xl transition-all duration-500 w-12 h-12 flex justify-center items-center rounded-2xl text-[var(--color-text)] hover:bg-[var(--color-text)] hover:text-[var(--color-background);]">
                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                        <path fill-rule="evenodd" clip-rule="evenodd"
                            d="M12.026 2c-5.509 0-9.974 4.465-9.974 9.974c0 4.406 2.857 8.145 6.821 9.465c.499.09.679-.217.679-.481c0-.237-.008-.865-.011-1.696c-2.775.602-3.361-1.338-3.361-1.338c-.452-1.152-1.107-1.459-1.107-1.459c-.905-.619.069-.605.069-.605c1.002.07 1.527 1.028 1.527 1.028c.89 1.524 2.336 1.084 2.902.829c.091-.645.351-1.085.635-1.334c-2.214-.251-4.542-1.107-4.542-4.93c0-1.087.389-1.979 1.024-2.675c-.101-.253-.446-1.268.099-2.64c0 0 .837-.269 2.742 1.021a9.582 9.582 0 0 1 2.496-.336a9.554 9.554 0 0 1 2.496.336c1.906-1.291 2.742-1.021 2.742-1.021c.545 1.372.203 2.387.099 2.64c.64.696 1.024 1.587 1.024 2.675c0 3.833-2.33 4.675-4.552 4.922c.355.308.675.916.675 1.846c0 1.334-.012 2.41-.012 2.737c0 .267.178.577.687.479C19.146 20.115 22 16.379 22 11.974C22 6.465 17.535 2 12.026 2z"
                            fill="currentColor" />
                    </svg>
                </a>
            </div>
        </div>
    </div>
</template>
<script>
import { onMounted, onBeforeUnmount, ref } from 'vue';
import Typed from 'typed.js';

export default {
    setup() {
        const typing = ref(null);
        let typedInstance;

        onMounted(() => {
            if (typing.value) {
                typedInstance = new Typed(typing.value, {
                    strings: [
                        '<span class="text-blue-600">&lt;?php echo "Hello, World!" ?&gt;</span>',
                        '<span class="text-yellow-500">console.log("Hello, World!")</span>',
                        '<span class="text-blue-500">System.out.println("Hello, World!")</span>',
                        '<span class="text-red-600">&lt;body&gt;Hello, World!&lt;/body&gt;</span>',
                        '<span class="text-[#4C7B9C]">SELECT "Hello, World!"</span>',
                    ],
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
