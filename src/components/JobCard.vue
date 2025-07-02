<template>
    <div class="mt-4 m-8 rounded-lg overflow-hidden">
        <div class="mb-4">
            <h2 :class="'text-2xl font-semibold mb-2 ' + titleColor">{{ company }}</h2>
            <p class="dark:text-gray-400">{{ role }}</p>
            <p class="dark:text-gray-400">{{ period }}</p>
            <p class="mt-2 dark:text-gray-500">{{ description }}</p>
            <div class="flex flex-wrap gap-1 md:gap-2 mt-3">
                <Skill v-for="skill in skills" :key="skill" :name="skill" />
            </div>
        </div>
        <!-- 타임라인 전체 컨테이너 -->
        <div class="relative" v-for="(project, idx) in projects" :key="project.title">
            <!-- 세로선 -->
            <div
                :ref="el => timelineRefs[idx] = el"
                :class="['absolute left-4 top-3 w-[2px] bg-blue-400 dark:bg-blue-500 transition-all duration-700', timelineActive[idx] ? 'h-full' : 'h-0']"
                style="will-change: height;"
            ></div>
            <div class="relative flex pl-9 pb-5">
                <!-- 써클 -->
                <div
                    class="absolute left-[9px] top-1 w-4 h-4 bg-white dark:bg-[var(--vt-c-black)] border-solid border-[2px] border-blue-400 dark:border-blue-500 rounded-full z-10 transition duration-500">
                </div>
                <!-- 내용 -->
                <div :class="['transition-all duration-700 opacity-0 translate-y-4', projectActive[idx] ? 'opacity-100 translate-y-0' : '']">
                    <div class="flex items-center">
                        <h3 class="text-blue-700 font-bold text-lg">{{ project.title }}</h3>
                        <!-- 사이트 링크 -->
                        <a v-if="project.link" :href="project.link" target="_blank" :title="project.linkTitle"
                            class="text-blue-500 hover:underline inline-flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-1" viewBox="0 0 24 24"
                                fill="currentColor">
                                <path
                                    d="M15.7285 3.88396C17.1629 2.44407 19.2609 2.41383 20.4224 3.57981C21.586 4.74798 21.5547 6.85922 20.1194 8.30009L17.6956 10.7333C17.4033 11.0268 17.4042 11.5017 17.6976 11.794C17.9911 12.0863 18.466 12.0854 18.7583 11.7919L21.1821 9.35869C23.0934 7.43998 23.3334 4.37665 21.4851 2.5212C19.6346 0.663551 16.5781 0.905664 14.6658 2.82536L9.81817 7.69182C7.90688 9.61053 7.66692 12.6739 9.51519 14.5293C9.80751 14.8228 10.2824 14.8237 10.5758 14.5314C10.8693 14.2391 10.8702 13.7642 10.5779 13.4707C9.41425 12.3026 9.44559 10.1913 10.8809 8.75042L15.7285 3.88396Z" />
                                <path
                                    d="M14.4851 9.47074C14.1928 9.17728 13.7179 9.17636 13.4244 9.46868C13.131 9.76101 13.1301 10.2359 13.4224 10.5293C14.586 11.6975 14.5547 13.8087 13.1194 15.2496L8.27178 20.1161C6.83745 21.556 4.73937 21.5863 3.57791 20.4203C2.41424 19.2521 2.44559 17.1408 3.88089 15.6999L6.30473 13.2667C6.59706 12.9732 6.59614 12.4984 6.30268 12.206C6.00922 11.9137 5.53434 11.9146 5.24202 12.2081L2.81818 14.6413C0.906876 16.5601 0.666916 19.6234 2.51519 21.4789C4.36567 23.3365 7.42221 23.0944 9.33449 21.1747L14.1821 16.3082C16.0934 14.3895 16.3334 11.3262 14.4851 9.47074Z" />
                            </svg>
                        </a>
                        <span v-else class="text-gray-500">(사이트 폐쇄)</span>
                    </div>
                    <p v-if="project.description" class="mt-1 leading-relaxed">
                        {{ project.description }}
                    </p>
                    <ul v-if="project.stack" 
                        :ref="el => stackRefs[idx] = el"
                        class="mt-1 pl-6">
                        <li v-for="(stack, sIdx) in project.stack" 
                            :key="stack"
                            :class="['transition-all duration-700 opacity-0 translate-y-4', projectActive[idx] ? 'opacity-100 translate-y-0' : '']"
                            :style="{ transitionDelay: (sIdx * 15) + 'ms' }"
                        >
                            {{ stack }}
                        </li>
                    </ul>
                </div>
            </div>
        </div>
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
    },
    data() {
        return {
            timelineRefs: [],
            timelineActive: [],
            observer: null,
            stackRefs: [],
            stackActive: [],
            projectActive: []
        };
    },
    mounted() {
        /**
         * Intersection Observer를 사용하여 세로선과 project 내용이 화면에 등장할 때 애니메이션 트리거
         */
        this.timelineActive = this.projects.map(() => false);
        this.projectActive = this.projects.map(() => false);
        this.stackActive = this.projects.map(() => false);
        this.observer = new window.IntersectionObserver((entries) => {
            entries.forEach(entry => {
                // 세로선
                const timelineIdx = this.timelineRefs.findIndex(el => el === entry.target);
                if (timelineIdx !== -1 && entry.isIntersecting) {
                    if (!this.timelineActive[timelineIdx]) {
                        this.timelineActive[timelineIdx] = true;
                        // 세로선 애니메이션(700ms) 후 project 전체 등장
                        setTimeout(() => {
                            this.projectActive[timelineIdx] = true;
                            // project 내용 등장 후 stack 순차 등장
                            this.stackActive[timelineIdx] = true;
                        }, 150);
                    }
                }
            });
        }, {
            threshold: 0,
            rootMargin: '0px 0px -10% 0px'
        });
        this.$nextTick(() => {
            this.timelineRefs.forEach(el => {
                if (el) this.observer.observe(el);
            });
        });
    },
    beforeUnmount() {
        /**
         * Observer 해제
         */
        if (this.observer) {
            this.timelineRefs.forEach(el => {
                if (el) this.observer.unobserve(el);
            });
            this.observer.disconnect();
        }
    }
};
</script>