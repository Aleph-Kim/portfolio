<template>
    <section class="section flex items-center justify-center flex-col">
        <!-- About -->
        <div class="mt-10">
            <h2 class="text-4xl font-bold text-center mb-10">About</h2>

            <div class="flex flex-col justify-center items-center sm:items-start sm:flex-row">
                <img :src="about.image" alt="Profile Picture"
                    class="w-[90%] mb-5 sm:w-[40%] sm:mr-7 sm:max-w-80 rounded-md">
                <div class="w-[80%] flex-col">
                    <p class="text-3xl font-bold my-3">{{ about.name }} <span class="text-xl">{{ about.title }}</span>
                    </p>
                    <p class="mb-3">{{ about.description }}</p>
                    <p class="mb-3"><span class="font-bold">연락처:</span> {{ about.phone }}</p>
                    <p class="mb-3"><span class="font-bold">생년월일:</span> {{ about.birthday }}</p>
                    <p class="mb-3"><span class="font-bold">이메일:</span> {{ about.email }}</p>
                    <p class="mb-3">
                        <span class="font-bold">깃허브 주소:</span>
                        <a :href="about.github" target="_blank">{{ about.github }}</a>
                    </p>
                    <p class="mb-3">
                        <span class="font-bold">블로그 주소:</span>
                        <a :href="about.blog" target="_blank">{{ about.blog }}</a>
                    </p>
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
