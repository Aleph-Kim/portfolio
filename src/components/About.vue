<template>
    <section class="section flex items-center justify-center flex-col">
        <!-- About -->
        <div class="mt-10">
            <h2 class="text-4xl font-bold text-center mb-10">About</h2>

            <div class="flex flex-col justify-center items-center sm:items-start sm:flex-row">
                <img src="/id-picture.jpg" class="w-[90%] mb-5 sm:w-[40%] sm:mr-7 sm:max-w-80 rounded-md">
                <div class="w-[80%] flex-col">
                    <p class="text-3xl font-bold my-3">김채민 <span class="text-xl">웹 개발자(BE, FE)</span></p>
                    <p class="mb-3">소통이 잘 되는 개발자, 함께 일하고 싶은 개발자가 되기위해 노력합니다.</p>
                    <p class="mb-3"> <span class="font-bold">연락처:</span> 010-9559-1750</p>
                    <p class="mb-3"><span class="font-bold">생년월일:</span> 00.06.17</p>
                    <p class="mb-3"><span class="font-bold">이메일:</span> dktjdej@naver.com</p>
                    <p class="mb-3"><span class="font-bold">깃허브 주소:</span><a href="https://github.com/aleph-kim"
                            target="_blank"> https://github.com/aleph-kim</a></p>
                    <p class="mb-3"><span class="font-bold">블로그 주소:</span><a href="https://dev-kimchi.tistory.com"
                            target="_blank"> https://dev-kimchi.tistory.com</a></p>
                </div>
            </div>
        </div>

        <!-- Skills -->
        <div class="mt-40">
            <h2 class="text-4xl font-bold text-center mb-10" data-aos="fade-down" data-aos-offset="500">Skills</h2>

            <div class="flex flex-col ml-3">
                <div class="mb-5" data-aos="fade-left" data-aos-offset="500">
                    <h3 class="text-xl mb-2 font-bold">Backend</h3>
                    <div class="flex flex-wrap gap-2">
                        <Skill
                            v-for="skill in ['PHP', 'Laravel', 'YII Framework', 'CodeIgniter', 'Java', 'Spring Boot', 'Node.js', 'Express.js', 'MySQL',]"
                            :key="skill" :name="skill" />
                    </div>
                </div>

                <div class="mb-5" data-aos="fade-right" data-aos-offset="500">
                    <h3 class="text-xl mb-2 font-bold"> Frontend</h3>
                    <div class="flex flex-wrap gap-2">
                        <Skill
                            v-for="skill in ['HTML', 'CSS', 'Tailwind CSS', 'Daisy UI', 'JavaScript', 'jQuery', 'Vue.js']"
                            :key="skill" :name="skill" />
                    </div>
                </div>

                <div class="mb-5" data-aos="fade-left" data-aos-offset="500">
                    <h3 class="text-xl mb-2 font-bold">DevOps</h3>
                    <div class="flex flex-wrap gap-2">
                        <Skill v-for="skill in ['AWS', 'GCP', 'Docker', 'Jenkins', 'Nginx', 'GitHub']" :key="skill"
                            :name="skill" />
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import Skill from './Skill.vue';

export default {
    name: 'About',
    components: {
        Skill
    }
}
</script>