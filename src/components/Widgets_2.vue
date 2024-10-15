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

<template>

</template>