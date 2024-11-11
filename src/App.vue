<template>
    <div id="app">
        <nav class="fixed left-0 top-0 h-full flex flex-col justify-center space-y-4 p-4 z-10">
            <a @click="scrollToSection(1)"
                class="hover:cursor-pointer text-gray-200 bg-gray-800 py-2 px-4 rounded-md transition duration-300 hover:bg-gray-900">1</a>
            <a @click="scrollToSection(2)"
                class="hover:cursor-pointer text-gray-200 bg-gray-800 py-2 px-4 rounded-md transition duration-300 hover:bg-gray-900">2</a>
            <a @click="scrollToSection(3)"
                class="hover:cursor-pointer text-gray-200 bg-gray-800 py-2 px-4 rounded-md transition duration-300 hover:bg-gray-900">3</a>
            <a @click="scrollToSection(4)"
                class="hover:cursor-pointer text-gray-200 bg-gray-800 py-2 px-4 rounded-md transition duration-300 hover:bg-gray-900">4</a>
        </nav>
        <Home ref="Home" />
        <Section2 ref="Section2" />
        <Section3 ref="Section3" />
        <Section4 ref="Section4" />
    </div>
</template>

<script>
import Home from './components/Home.vue';
import Section2 from './components/Section2.vue';
import Section3 from './components/Section3.vue';
import Section4 from './components/Section4.vue';

export default {
    name: 'App',
    methods: {
        scrollToSection(sectionNumber) {
            this.$refs[`Section${sectionNumber}`].$el.scrollIntoView({ behavior: 'smooth' })
        },
    },
    components: {
        Home,
        Section2,
        Section3,
        Section4,
    }
}
</script>