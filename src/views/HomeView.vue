<script setup>
import Widgets_1 from '@/components/Widgets_1.vue';
</script>

<template>
    <div class="p-8">
        <button
            type="button"
            class="text-white text-2xl font-semibold hover:underline cursor-pointer">
                播客
        </button>
        <div class="py-1.5"></div>
        <div class="flex items-center">
            <Widgets_1  image="https://avatars.akamai.steamstatic.com/cfd6459596ff59ff37f067100c96d092d40cfb07_full.jpg  "
                        title="征服200" 
                        author="互联网开发者zhengfu200"/>
            <Widgets_1  image="https://avatars.akamai.steamstatic.com/cfd6459596ff59ff37f067100c96d092d40cfb07_full.jpg  "
                        title="征服201" 
                        author="互联网开发者zhengfu201"/>
            <Widgets_1  class="md:block hidden"
                        image="https://avatars.akamai.steamstatic.com/cfd6459596ff59ff37f067100c96d092d40cfb07_full.jpg  "
                        title="征服202" 
                        author="互联网开发者zhengfu202"/> 
            <Widgets_1  class="lg:block hidden"
                        image="https://avatars.akamai.steamstatic.com/cfd6459596ff59ff37f067100c96d092d40cfb07_full.jpg  "
                        title="征服203" 
                        author="互联网开发者zhengfu203"/> 
            <Widgets_1  class="xl:block hidden"
                        image="https://avatars.akamai.steamstatic.com/cfd6459596ff59ff37f067100c96d092d40cfb07_full.jpg  "
                        title="征服204" 
                        author="互联网开发者zhengfu204"/> 
                        
                        
        </div>
    </div>
</template>
