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
                image="https://i.scdn.co/image/ab67616d00001e023b248f42fb53c64faf1d748e"
                title="Sunshine" author="OneRepublic"  jump_url="https://open.spotify.com/artist/5Pwc4xIPtQLFEnJriah9YJ"/>
            <Widgets_1
                image="https://i.scdn.co/image/ab67616d00001e02f8c8297efc6022534f1357e1"
                title="APT." author="ROSÉ,Bruno Mars" jump_url="https://open.spotify.com/album/2IYQwwgxgOIn7t3iF6ufFD"/>
            <Widgets_1 class="md:block hidden"
                image="https://i.scdn.co/image/ab67616d00001e0282ea2e9e1858aa012c57cd45"
                title="Die With A Smile" author="Lady Gaga,Bruno Mars" jump_url="https://open.spotify.com/album/10FLjwfpbxLmW8c25Xyc2N"/>
            <Widgets_1 class="lg:block hidden"
                image="https://i.scdn.co/image/ab67616d00001e02e787cffec20aa2a396a61647"
                title="Lover" author="Taylor Swift" jump_url="https://open.spotify.com/album/1NAmidJlEaVgA3MpcPFYGq"/>
            <Widgets_1 class="xl:block hidden"
                image="https://i.scdn.co/image/ab67616d00001e02741fd4807f442af3f7359316"
                title="GOLDEN" author="Jung Kook" jump_url="https://open.spotify.com/album/5pSk3c3wVwnb2arb6ohCPU"/>
        </div>
    </div>

    <div class="p-8">
        <button type="button" class="text-white text-2xl font-semibold hover:underline cursor-pointer">
            最近播放
        </button>
        <div class="py-1.5"></div>
        <div class="flex items-center">
            <Widgets_1
                image="https://charts-images.scdn.co/assets/locale_en/regional/weekly/region_global_default.jpg"
                title="全球热门歌曲" jump_url="https://open.spotify.com/playlist/37i9dQZEVXbNG2KDcFcKOF"/>
            <Widgets_1
                image="https://charts-images.scdn.co/assets/locale_en/regional/weekly/region_us_default.jpg"
                title="美国热门歌曲" jump_url="https://open.spotify.com/playlist/37i9dQZEVXbLp5XoPON0wI" />
            <Widgets_1 class="md:block hidden"
                image="https://charts-images.scdn.co/assets/locale_en/regional/daily/region_global_default.jpg"
                title="全球前 50 名" jump_url="https://open.spotify.com/playlist/37i9dQZEVXbMDoHDwVN2tF" />
            <Widgets_1 class="lg:block hidden"
                image="https://charts-images.scdn.co/assets/locale_en/regional/daily/region_us_default.jpg"
                title="美国前 50 名" jump_url="https://open.spotify.com/playlist/37i9dQZEVXbLRQDuF5jeBp"/>
            <Widgets_1 class="xl:block hidden"
                image="https://charts-images.scdn.co/assets/locale_en/viral/daily/region_global_default.jpg"
                title="全球飙升前 50 名" jump_url="https://open.spotify.com/playlist/37i9dQZEVXbLiRSasKsNU9" />
        </div>
    </div>
</template>
