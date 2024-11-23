<script setup>
const api_url = "https://v1.hitokoto.cn/";
import axios from 'axios';
import { ref } from 'vue';

const fetchedData = ref(null);
const hitokoto = ref('');
const from = ref('');
const author_span = ref('');

async function fetchApiData() {
    try {
        const response = await axios.get(api_url);
        console.log(response.data);
        hitokoto.value = response.data.hitokoto;
        from.value = "来自" + response.data.from ;
        author.value = "来自" + response.data.from_who ;
        if(author.value !== null){
            author_span.value = "————来自" +from.value+author.value
        }else{
            author_span.value = "————来自" + from.value
        }
    } catch (error) {
        console.error('Error fetching API data:', error);
    }
}

fetchApiData();
</script>

<template>
    <div class=" ml-4 mt-5 text-xl">
        <div class="flex justify-center mt-3 italic text-white">
            <p>{{ hitokoto }}</p>
        </div>
        <div class="w-[80%] flex justify-end mt-3 italic text-gray-500">
            <p>{{ from }}</p>
        </div>
    </div>
</template>