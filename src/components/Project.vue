<template>
    <section class="section flex items-center flex-col my-20 min-h-screen">
        <!-- Project -->
        <div>
            <h2 class="text-4xl font-bold text-center mb-10">Project</h2>

            <!-- Projects Grid -->
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                <a v-for="project in Projects" :key="project.id" :href="project.link" target="_blank"
                    class="relative rounded-lg overflow-hidden text-[var(--color-text)] no-underline hover:bg-opacity-30">
                    <!-- 이미지 -->
                    <div class="overflow-hidden">
                        <img :src="project.image" :alt="project.title" class="w-full h-56 object-cover" />
                    </div>
                    <!-- Content -->
                    <div class="p-4">
                        <h2 class="text-lg font-bold mb-2">{{ project.title }}</h2>
                        <p class="text-gray-600">{{ project.description }}</p>
                    </div>
                    <!-- Button -->
                    <div
                        class="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity bg-black bg-opacity-30">
                        <span class="px-4 py-2 bg-white dark:bg-[var(--color-background)] font-semibold rounded-lg transition-opacity duration-300 opacity-100 hover:opacity-80">
                            바로가기
                        </span>
                    </div>
                </a>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    data() {
        return {
            projects: [
                {
                    id: 1,
                    title: "PTG",
                    image: "https://cdn-icons-png.flaticon.com/512/1088/1088537.png",
                    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam eaque in odit exercitationem reiciendis consectetur tenetur quis fugit repellendus quaerat atque voluptates eius pariatur nihil earum ea excepturi, doloremque voluptas.",
                    link: "https://example.com/ptg",
                },
                {
                    id: 2,
                    title: "DINA",
                    image: "https://via.placeholder.com/600x500",
                    description: "A modern login system with beautiful UI design.",
                    link: "https://example.com/dina",
                },
                {
                    id: 3,
                    title: "Polaroid",
                    image: "https://via.placeholder.com/700x500",
                    description: "A photo management app with a vintage theme.",
                    link: "https://example.com/polaroid",
                },
                {
                    id: 4,
                    title: "Smart Lotto",
                    image: "https://via.placeholder.com/800x500",
                    description: "An intuitive lottery management application.",
                    link: "https://example.com/smart-lotto",
                },
                {
                    id: 5,
                    title: "I YOU MARKET",
                    image: "https://via.placeholder.com/900x500",
                    description: "An e-commerce platform for small businesses.",
                    link: "https://example.com/i-you-market",
                },
            ],
        };
    },
    computed: {
        Projects() {
            return this.projects;
        },
    },
};
</script>