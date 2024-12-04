<template>
    <div class="mt-4 p-6 rounded-lg">
        <div class="mb-4">
            <h2 :class="'text-2xl font-semibold mb-2 ' + titleColor">{{ company }}</h2>
            <p class="dark:text-gray-400">{{ role }}</p>
            <p class="dark:text-gray-400">{{ period }}</p>
            <p class="mt-2 dark:text-gray-500">{{ description }}</p>
            <div class="flex flex-wrap gap-2 mt-3">
                <Skill v-for="skill in skills" :key="skill" :name="skill" />
            </div>
        </div>
        <ul class="space-y-6">
            <li v-for="project in projects" :key="project.title" class="border-t pt-4">
                <h3 class="text-lg font-semibold">{{ project.title }}</h3>
                <p class="mt-1 text-gray-500">{{ project.description }}</p>
            </li>
        </ul>
    </div>
</template>

<script>
import Skill from './Skill.vue';

export default {
    name: 'JobCard',
    components: {
        Skill
    },
    props: {
        company: {
            type: String,
            required: true
        },
        role: {
            type: String,
            required: true
        },
        period: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        skills: {
            type: Array,
            required: true
        },
        projects: {
            type: Array,
            required: true
        },
        titleColor: {
            type: String,
            default: 'text-gray-800'
        }
    }
};
</script>