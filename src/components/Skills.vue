<template>
    <section class="section flex items-center justify-center flex-col mt-20">
        <!-- Skills -->
        <div class="mt-10">
            <h2 class="text-4xl font-bold text-center mb-10">Skills</h2>

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
    name: 'Skills',
    components: {
        Skill
    }
}
</script>