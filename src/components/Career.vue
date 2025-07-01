<template>
    <section class="section flex items-center justify-center flex-col">
        <!-- Career -->
        <div class="mt-10">
            <h2 class="text-4xl font-bold text-center mb-10">Career</h2>
            <JobCard v-for="(career, index) in careers" :key="index" :company="career.company" :role="career.role"
                :period="career.period" :description="career.description" :skills="career.skills"
                :projects="career.projects" :titleColor="career.titleColor"/>
        </div>
    </section>
</template>

<script>
import { careerData } from '/public/data/career';
import JobCard from './JobCard.vue';

export default {
    name: 'Career',
    components: {
        JobCard
    },
    data() {
        return {
            careers: careerData
        };
    },
};
</script>
