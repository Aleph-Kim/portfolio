<template>
    <span class="px-3 py-1 text-sm text-white font-medium rounded" :style="getColorStyle">
        {{ name }}
    </span>
</template>

<script>
import { languageColor } from '/public/data/languageColor.js';

export default {
    name: 'Skill',
    props: {
        name: {
            type: String,
            required: true,
        },
    },
    computed: {
        getColorStyle() {
            return `background: ${languageColor[this.name]}` || 'background: #CCCCCC';
        },
    },
};
</script>