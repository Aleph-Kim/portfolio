<template>
    <div id="app">
        <nav class="w-full fixed bottom-5 flex justify-center">
            <div class="w-[70%] flex justify-center items-end">
                <a v-for="(section, index) in sections" :key="index" @click="scrollToSection(index + 1)" :class="['w-40 text-center hover:cursor-pointer hover:text-xl transition-all',
                    currentSection === index + 1 ? 'font-bold' : '']">
                    {{ section }}
                </a>
            </div>
        </nav>
        <Home ref="Section1" />
        <About ref="Section2" />
        <Section3 ref="Section3" />
        <Section4 ref="Section4" />
    </div>
</template>
<script>
import Home from './components/Home.vue';
import About from './components/About.vue';
import Section3 from './components/Section3.vue';
import Section4 from './components/Section4.vue';

export default {
    name: 'App',
    data() {
        return {
            currentSection: 1, // 현재 활성화된 섹션
            sections: ['Home', 'About', 'Resume', 'Portfolio'], // 네비게이션 텍스트
        };
    },
    methods: {
        scrollToSection(sectionNumber) {
            this.$refs[`Section${sectionNumber}`].$el.scrollIntoView({ behavior: 'smooth' });
            this.currentSection = sectionNumber; // 클릭한 섹션을 현재 섹션으로 설정
        },
        updateCurrentSection() {
            const sectionOffsets = this.sections.map((_, index) => {
                const section = this.$refs[`Section${index + 1}`];
                return section.$el.offsetTop;
            });

            const scrollPosition = window.scrollY + window.innerHeight / 2;

            // 현재 스크롤 위치에 따라 활성화된 섹션 계산
            for (let i = 0; i < sectionOffsets.length; i++) {
                if (
                    scrollPosition >= sectionOffsets[i] &&
                    (i === sectionOffsets.length - 1 || scrollPosition < sectionOffsets[i + 1])
                ) {
                    this.currentSection = i + 1;
                    break;
                }
            }
        },
    },
    mounted() {
        window.addEventListener('scroll', this.updateCurrentSection);
    },
    beforeDestroy() {
        window.removeEventListener('scroll', this.updateCurrentSection);
    },
    components: {
        Home,
        About,
        Section3,
        Section4,
    },
};
</script>
