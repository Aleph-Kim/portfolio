<template>
    <Teleport to="body">
        <div v-if="isOpen" class="fixed inset-0 z-50 flex items-center justify-center text-lg">
            <!-- 배경 오버레이 -->
            <div class="absolute inset-0 bg-black bg-opacity-50" @click="closeModal"></div>

            <!-- 모달 컨텐츠 -->
            <div
                class="relative bg-white dark:bg-gray-800 rounded-lg max-w-4xl w-full mx-4 max-h-[90vh] overflow-y-auto">
                <!-- 닫기 버튼 -->
                <a @click="closeModal"
                    class="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-white hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-700 transition-all duration-300 transform hover:cursor-pointer border border-gray-200 dark:border-gray-700">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-600 dark:text-gray-300"
                        viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd"
                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                            clip-rule="evenodd" />
                    </svg>
                </a>

                <!-- 프로젝트 헤더 -->
                <div class="p-6 border-b border-gray-200 dark:border-gray-700">
                    <div class="flex flex-col md:flex-row gap-6">
                        <!-- 프로젝트 이미지 -->
                        <div class="w-full md:w-1/2">
                            <img :src="project.image" :alt="project.title"
                                class="w-full h-64 object-cover rounded-lg shadow-lg" />
                        </div>
                        <!-- 프로젝트 정보 -->
                        <div class="w-full md:w-1/2">
                            <h2 class="text-2xl font-bold mb-2">{{ project.title }}</h2>
                            <p class="text-gray-600 dark:text-gray-300 mb-4">{{ project.description }}</p>
                            <!-- 링크 -->
                            <div class="flex gap-4 mb-4">
                                <a v-if="project.link" :href="project.link" target="_blank"
                                    class="inline-flex items-center gap-2 px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-all duration-300 transform hover:shadow-lg no-underline">
                                    <svg viewBox="0 0 17 17" xmlns="http://www.w3.org/2000/svg" class="h-5 w-5">
                                        <path
                                            d="M8.516 0c-4.687 0-8.5 3.813-8.5 8.5s3.813 8.5 8.5 8.5 8.5-3.813 8.5-8.5-3.814-8.5-8.5-8.5zM1.041 9h2.937c0.044 1.024 0.211 2.031 0.513 3h-2.603c-0.481-0.906-0.776-1.923-0.847-3zM3.978 8h-2.937c0.071-1.077 0.366-2.094 0.847-3h2.6c-0.301 0.969-0.467 1.976-0.51 3zM5.547 5h5.896c0.33 0.965 0.522 1.972 0.569 3h-7.034c0.046-1.028 0.239-2.035 0.569-3zM4.978 9h7.035c-0.049 1.028-0.241 2.035-0.572 3h-5.891c-0.331-0.965-0.524-1.972-0.572-3zM13.013 9h2.978c-0.071 1.077-0.366 2.094-0.847 3h-2.644c0.302-0.969 0.469-1.976 0.513-3zM13.013 8c-0.043-1.024-0.209-2.031-0.51-3h2.641c0.48 0.906 0.775 1.923 0.847 3h-2.978zM14.502 4h-2.354c-0.392-0.955-0.916-1.858-1.55-2.7 1.578 0.457 2.938 1.42 3.904 2.7zM9.074 1.028c0.824 0.897 1.484 1.9 1.972 2.972h-5.102c0.487-1.071 1.146-2.073 1.97-2.97 0.199-0.015 0.398-0.03 0.602-0.03 0.188 0 0.373 0.015 0.558 0.028zM6.383 1.313c-0.629 0.838-1.151 1.737-1.54 2.687h-2.314c0.955-1.267 2.297-2.224 3.854-2.687zM2.529 13h2.317c0.391 0.951 0.915 1.851 1.547 2.689-1.561-0.461-2.907-1.419-3.864-2.689zM7.926 15.97c-0.826-0.897-1.488-1.899-1.978-2.97h5.094c-0.49 1.072-1.152 2.075-1.979 2.972-0.181 0.013-0.363 0.028-0.547 0.028-0.2 0-0.395-0.015-0.59-0.03zM10.587 15.703c0.636-0.842 1.164-1.747 1.557-2.703h2.358c-0.968 1.283-2.332 2.247-3.915 2.703z"
                                            fill="currentColor" />
                                    </svg>
                                    <span class="font-medium">사이트 이동</span>
                                </a>
                                <a v-if="project.github" :href="project.github" target="_blank"
                                    class="inline-flex items-center gap-2 px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition-all duration-300 transform hover:shadow-lg no-underline">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 24 24">
                                        <path
                                            d="M12.026 2c-5.509 0-9.974 4.465-9.974 9.974c0 4.406 2.857 8.145 6.821 9.465c.499.09.679-.217.679-.481c0-.237-.008-.865-.011-1.696c-2.775.602-3.361-1.338-3.361-1.338c-.452-1.152-1.107-1.459-1.107-1.459c-.905-.619.069-.605.069-.605c1.002.07 1.527 1.028 1.527 1.028c.89 1.524 2.336 1.084 2.902.829c.091-.645.351-1.085.635-1.334c-2.214-.251-4.542-1.107-4.542-4.93c0-1.087.389-1.979 1.024-2.675c-.101-.253-.446-1.268.099-2.64c0 0 .837-.269 2.742 1.021a9.582 9.582 0 0 1 2.496-.336a9.554 9.554 0 0 1 2.496.336c1.906-1.291 2.742-1.021 2.742-1.021c.545 1.372.203 2.387.099 2.64c.64.696 1.024 1.587 1.024 2.675c0 3.833-2.33 4.675-4.552 4.922c.355.308.675.916.675 1.846c0 1.334-.012 2.41-.012 2.743c0 .267.178.577.687.479C19.146 20.115 22 16.379 22 11.974C22 6.465 17.535 2 12.026 2z"
                                            fill="currentColor" />
                                    </svg>
                                    <span class="font-medium">GitHub 이동</span>
                                </a>
                            </div>
                            <!-- 기술 스택 -->
                            <div class="flex flex-wrap gap-2">
                                <Skill v-for="skill in project.skills" :key="skill" :name="skill" />
                            </div>
                        </div>
                    </div>
                </div>

                <!-- 프로젝트 상세 정보 -->
                <div class="p-6">
                    <!-- 개요 -->
                    <div class="mb-6">
                        <h3 class="text-xl font-bold mb-2 text-blue-500">프로젝트 개요</h3>
                        <p class="text-gray-600 dark:text-gray-300">{{ project.summary }}</p>
                    </div>
                    <!-- 개발 인원 -->
                    <div class="mb-6">
                        <h3 class="text-xl font-bold mb-2 text-blue-500">개발 인원</h3>
                        <p class="text-gray-600 dark:text-gray-300">{{ project.people }}</p>
                    </div>

                    <!-- 프로젝트 기간 -->  
                    <div class="mb-6">
                        <h3 class="text-xl font-bold mb-2 text-blue-500">프로젝트 기간</h3>
                        <p class="text-gray-600 dark:text-gray-300">{{ project.period }}</p>
                    </div>

                    <!-- 프로젝트 기여 -->
                    <div class="mb-6">
                        <h3 class="text-xl font-bold mb-2 text-blue-500">프로젝트 기여</h3>
                        <div class="ml-3 mb-2" v-for="feature in project.features" :key="feature.title">
                            <h4 class="font-semibold">{{ feature.title }}</h4>
                            <ul class="list-disc list-inside text-gray-600 dark:text-gray-300">
                                <li v-for="description in feature.description" :key="description">{{ description }}
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </Teleport>
</template>

<script>
import Skill from './Skill.vue';

export default {
    name: 'ProjectModal',
    components: {
        Skill
    },
    props: {
        isOpen: {
            type: Boolean,
            required: true
        },
        project: {
            type: Object,
            required: true
        }
    },
    watch: {
        isOpen(newValue) {
            if (newValue) {
                document.body.style.overflow = 'hidden';
                this.addEscListener();
            } else {
                document.body.style.overflow = '';
                this.removeEscListener();
            }
        }
    },
    mounted() {
        if (this.isOpen) {
            this.addEscListener();
        }
    },
    beforeUnmount() {
        this.removeEscListener();
    },
    methods: {
        /**
         * projectModal을 닫는 함수
         */
        closeModal() {
            this.$emit('close');
        },
        /**
         * ESC 키 입력 시 projectModal을 닫는 이벤트 리스너 등록
         */
        addEscListener() {
            window.addEventListener('keydown', this.handleEsc);
        },
        /**
         * ESC 키 이벤트 리스너 제거
         */
        removeEscListener() {
            window.removeEventListener('keydown', this.handleEsc);
        },
        /**
         * keydown 이벤트에서 ESC 키를 감지하여 projectModal을 닫는 함수 호출
         * @param {KeyboardEvent} event
         */
        handleEsc(event) {
            if (event.key === 'Escape') {
                this.closeModal();
            }
        }
    }
};
</script>