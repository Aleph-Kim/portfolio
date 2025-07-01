<template>
    <div ref="titleSection" class="flex items-center justify-center mt-24 mb-16 w-full">
        <div
            :class="['h-[2px] bg-gray-400 dark:bg-zinc-600 transition-all duration-[1.2s]', isLineVisible ? 'w-full' : 'w-0']">
        </div>
        <h2 class="mx-4 text-4xl font-bold text-center">{{ title }}
            <slot />
        </h2>
        <div
            :class="['h-[2px] bg-gray-400 dark:bg-zinc-600 transition-all duration-[1.2s]', isLineVisible ? 'w-full' : 'w-0']">
        </div>
    </div>
</template>

<script>
export default {
    name: 'SectionTitle',
    props: {
        title: {
            type: String,
            required: true
        }
    },
    data() {
        return {
            isLineVisible: false
        };
    },
    mounted() {
        this.$nextTick(() => {
            if (this.$refs.titleSection) {
                const observer = new IntersectionObserver(
                    (entries) => {
                        if (entries[0].isIntersecting) {
                            this.isLineVisible = true;
                            observer.disconnect();
                        }
                    },
                    { threshold: 0.3 }
                );
                observer.observe(this.$refs.titleSection);
            }
        });
    }
};
</script>