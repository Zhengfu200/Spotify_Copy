<script setup>
import Widgets_1 from '@/components/Widgets_1.vue';
import Widgets_12 from '@/components/Widgets_1(2).vue';
import hitokoto from '@/components/hitokoto.vue';
</script>
<!--Widgets_1：主页歌曲组件：歌曲封面image，歌曲作者author，歌曲名称title-->
<template>
    <div class="p-8">
        <button type="button" class="text-white text-2xl font-semibold hover:underline cursor-pointer">
            每日一言
        </button>
        <hitokoto/>
        <div class="py-1.5"></div>
    </div>

    <div class="p-8">
        <button type="button" class="text-white text-2xl font-semibold hover:underline cursor-pointer">
            艺人推荐
        </button>
        <div class="py-1.5"></div>
        <div class="flex items-center">
            <Widgets_12 singer_album="https://i.scdn.co/image/ab6761610000101f784daff754ecfe0464ddbeb9" singer_name="Ed Sheeran" singer_url="https://open.spotify.com/artist/6eUKZXaKkcviH0Ku9w2n3V" />
            <Widgets_12 singer_album="https://i.scdn.co/image/ab6761610000101ff8349dfb619a7f842242de77" singer_name="Maroon 5" singer_url="https://open.spotify.com/artist/04gDigrS5kc9YWfZHwBETP"/>
            <Widgets_12 singer_album="https://i.scdn.co/image/ab6761610000101f57138b98e7ddd5a86ee97a9b" singer_name="One Republic" singer_url="https://open.spotify.com/artist/5Pwc4xIPtQLFEnJriah9YJ"/>
            <Widgets_12 singer_album="https://i.scdn.co/image/ab6761610000101f9e528993a2820267b97f6aae" singer_name="The Weeknd" singer_url="https://open.spotify.com/artist/1Xyo4u8uXC1ZmMpatF05PJ"/>
            <Widgets_12 singer_album="https://i.scdn.co/image/ab6761610000101ff8349dfb619a7f842242de77" singer_name="The Chainsmokers" singer_url="https://open.spotify.com/artist/69GGBxA162lTqCwzJG5jLp"/>
        </div>
    </div>

    <div class="p-8">
        <button type="button" class="text-white text-2xl font-semibold hover:underline cursor-pointer">
            回味无穷
        </button>
        <div class="py-1.5"></div>
        <div class="flex items-center">
            <Widgets_1
                image="https://avatars.akamai.steamstatic.com/cfd6459596ff59ff37f067100c96d092d40cfb07_full.jpg  "
                title="征服200" author="互联网开发者zhengfu200" />
            <Widgets_1
                image="https://avatars.akamai.steamstatic.com/cfd6459596ff59ff37f067100c96d092d40cfb07_full.jpg  "
                title="征服201" author="互联网开发者zhengfu201" />
            <Widgets_1 class="md:block hidden"
                image="https://avatars.akamai.steamstatic.com/cfd6459596ff59ff37f067100c96d092d40cfb07_full.jpg  "
                title="征服202" author="互联网开发者zhengfu202" />
            <Widgets_1 class="lg:block hidden"
                image="https://avatars.akamai.steamstatic.com/cfd6459596ff59ff37f067100c96d092d40cfb07_full.jpg  "
                title="征服203" author="互联网开发者zhengfu203" />
            <Widgets_1 class="xl:block hidden"
                image="https://avatars.akamai.steamstatic.com/cfd6459596ff59ff37f067100c96d092d40cfb07_full.jpg  "
                title="征服204" author="互联网开发者zhengfu204" />
        </div>
    </div>

    <div class="p-8">
        <button type="button" class="text-white text-2xl font-semibold hover:underline cursor-pointer">
            最近播放
        </button>
        <div class="py-1.5"></div>
        <div class="flex items-center">
            <Widgets_1
                image="https://avatars.akamai.steamstatic.com/cfd6459596ff59ff37f067100c96d092d40cfb07_full.jpg  "
                title="征服200" author="互联网开发者zhengfu200" />
            <Widgets_1
                image="https://avatars.akamai.steamstatic.com/cfd6459596ff59ff37f067100c96d092d40cfb07_full.jpg  "
                title="征服201" author="互联网开发者zhengfu201" />
            <Widgets_1 class="md:block hidden"
                image="https://avatars.akamai.steamstatic.com/cfd6459596ff59ff37f067100c96d092d40cfb07_full.jpg  "
                title="征服202" author="互联网开发者zhengfu202" />
            <Widgets_1 class="lg:block hidden"
                image="https://avatars.akamai.steamstatic.com/cfd6459596ff59ff37f067100c96d092d40cfb07_full.jpg  "
                title="征服203" author="互联网开发者zhengfu203" />
            <Widgets_1 class="xl:block hidden"
                image="https://avatars.akamai.steamstatic.com/cfd6459596ff59ff37f067100c96d092d40cfb07_full.jpg  "
                title="征服204" author="互联网开发者zhengfu204" />
        </div>
    </div>
</template>
