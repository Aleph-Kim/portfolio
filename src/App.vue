<template>
    <div id="app" class="overflow-x-hidden">
        <span @click="toggleDarkMode" class="fixed top-3 right-3 w-7 h-7 cursor-pointer">
            <div v-if="isDarkMode">
                <!-- 달 아이콘 -->
                <svg className="bg-black" fill="white" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
                </svg>
            </div>
            <div v-else>
                <!-- 해 아이콘 -->
                <svg className="bg-white" fill="black" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z">
                    </path>
                </svg>
            </div>
        </span>
        <nav @mouseenter="showNavbar()" @mouseleave="briefShowNavbar()"
            :class="['w-full fixed bottom-0 flex justify-center bg-white/70 dark:bg-[#181818]/70 h-14 transition-all ease-[ease] duration-500 z-10', { 'opacity-0 pointer-events-none': !isNavbarVisible }]">
            <div class="w-[70%] flex justify-center items-center">
                <a v-for="(section, index) in sections" :key="index" @click="scrollToSection(index + 1)" :class="['w-40 text-center hover:cursor-pointer hover:text-xl transition-all',
                    currentSection === index + 1 ? 'font-bold' : '']">
                    {{ section }}
                </a>
            </div>
        </nav>
        <Home ref="Section1" class="container mx-auto" />
        <About ref="Section2" class="container mx-auto" data-aos="fade-down" data-aos-duration="800" />
        <Career ref="Section3" class="container mx-auto" data-aos="fade-down" data-aos-duration="800" data-aos-offset="600"/>
        <Project ref="Section4" class="container mx-auto" data-aos="fade-down" data-aos-duration="800" data-aos-offset="600"/>
    </div>
</template>

<script>
import Home from './components/Home.vue';
import About from './components/About.vue';
import Career from './components/Career.vue';
import Project from './components/Project.vue';
import consoleAleph from './utils/consoleAleph'; 

export default {
    name: 'App',
    data() {
        return {
            currentSection: 1, // 현재 활성화된 섹션
            sections: ['Home', 'About', 'Career', 'Project'], // 네비게이션 텍스트
            isNavbarVisible: true, // 네비게이션 노출 여부
            scrollTimeout: null, // 타이머 ID
            isDarkMode: false,  // 다크 모드 상태

        };
    },
    methods: {
        // 다크 모드 상태 설정, 로컬 스토리지에 저장 메서드
        setDarkMode(isDark) {
            this.isDarkMode = isDark;
            document.documentElement.classList.toggle('dark', isDark); // 다크 모드 CSS 클래스 토글
            localStorage.setItem('darkMode', isDark.toString()); // 다크 모드 상태를 로컬 스토리지에 저장
        },
        // 테마 상태 체크 메서드
        checkTheme() {
            const savedDarkMode = localStorage.getItem('darkMode'); // 로컬 스토리지에서 다크 모드 상태를 읽음
            if (savedDarkMode !== null) {
                // 로컬 스토리지에 저장된 상태가 있으면 그 상태를 사용
                this.setDarkMode(savedDarkMode === 'true');
            } else {
                // 저장된 상태가 없으면 OS 기본 테마를 확인
                const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
                this.setDarkMode(prefersDarkMode);
            }
        },
        // 다크 모드 상태 토글 메서드
        toggleDarkMode() {
            this.setDarkMode(!this.isDarkMode); // 현재 상태의 반대값으로 설정
        },
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
        showNavbar() {
            this.isNavbarVisible = true;

            // 기존 타이머가 있으면 초기화
            if (this.scrollTimeout) {
                clearTimeout(this.scrollTimeout);
            }
        },
        briefShowNavbar() {
            // 스크롤 발생 시 네비게이션 바 표시
            this.showNavbar();

            // 일정 시간 이후 네비게이션 바 숨기기
            this.scrollTimeout = setTimeout(() => {
                this.isNavbarVisible = false;
            }, 800);
        },
    },
    mounted() {
        consoleAleph(); // 콘솔에 메시지 출력
        this.checkTheme(); // 페이지 로드 시 다크 모드 상태 확인

        window.addEventListener('scroll', () => {
            this.updateCurrentSection();
            this.briefShowNavbar();
        });
    },
    beforeDestroy() {
        window.removeEventListener('scroll', () => {
            this.updateCurrentSection();
            this.briefShowNavbar();
        });
    },
    components: {
        Home,
        About,
        Career,
        Project,
    },
};
</script>