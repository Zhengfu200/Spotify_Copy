<!--用于搜索页面的分类组件,包含属性：分类，分类图片-->
<script setup>
import {ref ,toRefs} from 'vue'
import { RouterLink } from 'vue-router';
import uniqolor from 'uniqolor';

let randomCol = ref('')
randomCol.value=uniqolor.random()

const props = defineProps({category:String,image:String})
const {category} = toRefs(props)
</script>

<!--Line 19:由于显示问题，randomCol.color并不作为tailwind.css中class的属性生效，故使用传统style写法-->
<template>
    <RouterLink to="library">
        <div
            v-if="randomCol.color"
            :style="`background-color:${randomCol.color};`"
            class="
                contrast-[2]
                brightness-[0.8]
                rounded-xl
                aspect-square
                relative
                overflow-hidden
            "
        >
            <div 
            class="
                text-white
                pt-3
                pl-4
                font-semibold
                text-[23px]
            ">
            {{ category }}
            </div>

            <img
                class="
                    absolute
                    contrast-[0.35]
                    -right-3.5
                    bottom-0
                    rounded-xl
                    max-w-[100px]
                    rotate-[20deg]"
                :src="image || ''">
        </div>
    </RouterLink>
</template>