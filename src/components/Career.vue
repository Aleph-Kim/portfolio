<template>
    <section class="section flex items-center justify-center flex-col">
        <SectionTitle title="Career" />
        <!-- Career -->
        <div>
            <JobCard v-for="(career, index) in careers" :key="index" :company="career.company" :role="career.role"
                :period="career.period" :description="career.description" :skills="career.skills"
                :projects="career.projects" :titleColor="career.titleColor" />
        </div>
    </section>
</template>

<script>
import { careerData } from '/public/data/career';
import JobCard from './JobCard.vue';
import SectionTitle from './SectionTitle.vue';
export default {
    name: 'Career',
    components: {
        JobCard,
        SectionTitle
    },
    data() {
        return {
            careers: careerData
        };
    },
};
</script>
