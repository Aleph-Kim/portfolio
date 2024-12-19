<template>
    <section class="section flex items-center justify-center flex-col mt-40">
        <!-- About -->
        <div class="mt-10">
            <h2 class="text-4xl font-bold text-center mb-10">Career</h2>
            <JobCard company="글로벌키타" role="풀스택 웹 개발자" period="2023.02 ~ 2024.02 (1년)"
                description="교육 플랫폼 운영 / 교육 컨텐츠 제작 및 유통 / 교육 컨텐츠 해외 수출 및 해외 플랫폼 사업 투자 등을 하는 교육 업체"
                :skills="['PHP', 'YII Framework', 'HTML', 'CSS', 'JavaScript', 'jQuery', 'MySQL']" :projects="[
                    { title: '교육커머스 사이트 edupang 리뉴얼', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, aut. Veniam voluptates nostrum voluptatem illo libero voluptatibus autem quibusdam fugiat laborum nam qui, corporis, et, cum officia? Vel, laudantium maiores!' },
                    { title: 'AIPEN 사이트 개발', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, aut. Veniam voluptates nostrum voluptatem illo libero voluptatibus autem quibusdam fugiat laborum nam qui, corporis, et, cum officia? Vel, laudantium maiores!' },
                    { title: '나눔커머스 사이트 개발', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, aut. Veniam voluptates nostrum voluptatem illo libero voluptatibus autem quibusdam fugiat laborum nam qui, corporis, et, cum officia? Vel, laudantium maiores!' },
                    { title: '리얼티칭 사이트 개발', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, aut. Veniam voluptates nostrum voluptatem illo libero voluptatibus autem quibusdam fugiat laborum nam qui, corporis, et, cum officia? Vel, laudantium maiores!' },
                    { title: '스쿨몰 사이트 개발(사이트 폐쇄)', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, aut. Veniam voluptates nostrum voluptatem illo libero voluptatibus autem quibusdam fugiat laborum nam qui, corporis, et, cum officia? Vel, laudantium maiores!' }
                ]" titleColor="text-[#142986]" />
            <JobCard company="멋쟁이사자처럼" role="프리랜서 보조강사" period="2024.04 ~ 2024.09 (5개월)"
                description="코딩 교육, 개발자 양성, IT 커뮤니티 운영 등을 하는 교육 업체" :skills="['Java', 'Spring Boot', 'MySQL']"
                :projects="[
                    { title: '백엔드 스쿨 10기 과정 보조강사', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, aut. Veniam voluptates nostrum voluptatem illo libero voluptatibus autem quibusdam fugiat laborum nam qui, corporis, et, cum officia? Vel, laudantium maiores!' }
                ]" titleColor="text-[#FF7710]" />
            <JobCard company="(주)그렙" role="프리랜서 보조강사" period="2024.12 ~ 2025.04 (5개월)"
                description="개발자 생애 주기에 맞는 교육, 평가, 채용 서비스를 통해 개발자들의 성장을 지원하며, 소프트웨어 가치의 사회적 확산에 기여하는 교육 업체" :skills="['Java', 'Kotlin', 'Spring Boot', 'MySQL']"
                :projects="[
                    { title: '웹 백엔드 4기 과정 퍼실리테이터', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, aut. Veniam voluptates nostrum voluptatem illo libero voluptatibus autem quibusdam fugiat laborum nam qui, corporis, et, cum officia? Vel, laudantium maiores!' }
                ]" titleColor="text-[#3E0499]" />
        </div>
    </section>
</template>

<script>
import JobCard from './JobCard.vue';
export default {
    name: 'App',
    components: {
        JobCard
    }
}
</script>