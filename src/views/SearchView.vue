<script setup>
import Widgets_2 from '@/components/Widgets_2.vue';
</script>

<template>
    <div class="p-8">
        <button
            type="button"
            class="text-white text-2xl font-semibold hover:underline cursor-pointer">
                发现
        </button>
        <div class="py-1.5"></div>
        <div class="grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-6">
            <Widgets_2 category="音乐"  image="https://avatars.akamai.steamstatic.com/cfd6459596ff59ff37f067100c96d092d40cfb07_full.jpg  "/>
            <Widgets_2 category="为你打造"  image="https://avatars.akamai.steamstatic.com/cfd6459596ff59ff37f067100c96d092d40cfb07_full.jpg  "/>  
            <Widgets_2 category="New Releases"  image="https://avatars.akamai.steamstatic.com/cfd6459596ff59ff37f067100c96d092d40cfb07_full.jpg  "/>  
            <Widgets_2 category="流行"  image="https://avatars.akamai.steamstatic.com/cfd6459596ff59ff37f067100c96d092d40cfb07_full.jpg  "/>  
            <Widgets_2 category="播客"  image="https://avatars.akamai.steamstatic.com/cfd6459596ff59ff37f067100c96d092d40cfb07_full.jpg  "/>  
            <Widgets_2 category="嘻哈"  image="https://avatars.akamai.steamstatic.com/cfd6459596ff59ff37f067100c96d092d40cfb07_full.jpg  "/>  
            <Widgets_2 category="乡村"  image="https://avatars.akamai.steamstatic.com/cfd6459596ff59ff37f067100c96d092d40cfb07_full.jpg  "/>  
            <Widgets_2 category="播客排行榜"  image="https://avatars.akamai.steamstatic.com/cfd6459596ff59ff37f067100c96d092d40cfb07_full.jpg  "/>  
            <Widgets_2 category="Audiobooks"  image="https://avatars.akamai.steamstatic.com/cfd6459596ff59ff37f067100c96d092d40cfb07_full.jpg  "/>  
            <Widgets_2 category="排行榜"  image="https://avatars.akamai.steamstatic.com/cfd6459596ff59ff37f067100c96d092d40cfb07_full.jpg  "/>  
            <Widgets_2 category="励志与回忆录"  image="https://avatars.akamai.steamstatic.com/cfd6459596ff59ff37f067100c96d092d40cfb07_full.jpg  "/>      
        </div>
    </div>
</template>