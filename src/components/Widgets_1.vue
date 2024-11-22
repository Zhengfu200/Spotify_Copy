<!--Widgets_1：主页歌曲组件：歌曲封面image，歌曲作者author，歌曲名称title---->
<script setup>
import { toRefs } from 'vue';
import { RouterLink } from 'vue-router';

const props = defineProps({
    image: String,
    title: String,
    author: String,
    jump_url: String
})
const { image, title, author,jump_url } = toRefs(props)

function open_url() {
    window.open(jump_url.value, '_blank');  // 跳转到歌手的主页
}
</script>

<template>
    <div
        @click="open_url"  
        class="
                bg-[#111111]
                p-4
                rounded-md
                m-2
                hover:bg-[#252525]
                cursor-pointer
            ">
        <img class="rounded-md" :src="image">
        <div class="text-white pt-4 font-semibold text-[17px]">{{ title }}</div>
        <div class="text-gray-400 pt-1 pb-3 text-[14px] ">{{ author }}</div>
    </div>
</template>