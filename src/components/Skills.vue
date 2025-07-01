<template>
    <section class="section flex items-center justify-center flex-col">
        <SectionTitle title="Skills" />
        <!-- Skills -->
        <div class="mt-10">

            <div class="flex flex-col ml-3">
                <div v-for="(skillCategory, index) in skills" :key="index"
                    :data-aos="index % 2 === 0 ? 'fade-left' : 'fade-right'" data-aos-offset="400" class="mb-5">
                    <h3 class="text-xl mb-2 font-bold">{{ skillCategory.category }}</h3>
                    <div class="flex flex-wrap gap-1 md:gap-2">
                        <Skill v-for="skill in skillCategory.skills" :key="skill" :name="skill" />
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import Skill from './Skill.vue';
import { skillsData } from '/public/data/skills.js';
import SectionTitle from './SectionTitle.vue';
export default {
    name: 'Skills',
    components: {
        Skill,
        SectionTitle
    },
    data() {
        return {
            skills: skillsData
        };
    }
};
</script>