<!--Widgets_1：主页歌手组件：歌手头像singer_album,歌手名称singer_name---->
<script setup>
import { toRefs } from 'vue';
import { RouterLink } from 'vue-router';

const props = defineProps({
    singer_album: String,
    singer_name: String
})
const {singer_album,singer_name} = toRefs(props)
</script>

<template>
    <RouterLink to="library">
        <!--所有点击指向library-->
        <div
            class="
                bg-[#111111]
                p-4
                rounded-md
                m-2
                hover:bg-[#252525]
                cursor-pointer
            ">
            <img class="rounded-full" :src="singer_album">
            <div class="text-white pt-4 font-semibold text-[17px] items-center justify-center flex">{{ singer_name }}</div>
        </div>
    </RouterLink>
</template>