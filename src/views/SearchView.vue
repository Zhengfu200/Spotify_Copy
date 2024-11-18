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
            <Widgets_2 category="音乐"  image="https://i.scdn.co/image/ab67fb8200005caf474a477debc822a3a45c5acb" catagory_url="https://open.spotify.com/genre/0JQ5DAqbMKFSi39LMRT0Cy"/>
            <Widgets_2 category="为你打造"  image="https://t.scdn.co/images/ea364e99656e46a096ea1df50f581efe  " catagory_url="https://open.spotify.com/genre/0JQ5DAt0tbjZptfcdMSKl3"/>  
            <Widgets_2 category="New Releases"  image="https://concerts.spotifycdn.com/images/live-events_category-image.jpg  " catagory_url="https://open.spotify.com/concerts"/>  
            <Widgets_2 category="流行"  image="https://i.scdn.co/image/ab67fb8200005caf4b42030ee01cf793663dbb73  " catagory_url="https://open.spotify.com/genre/0JQ5DAqbMKFEC4WFtoNRpw"/>  
            <Widgets_2 category="播客"  image="https://i.scdn.co/image/ab6765630000ba8a81f07e1ead0317ee3c285bfa  " catagory_url="https://open.spotify.com/genre/0JQ5DArNBzkmxXHCqFLx2J"/>  
            <Widgets_2 category="嘻哈"  image="https://i.scdn.co/image/ab67fb8200005caf5f3752b3234e724f9cd6056f  " catagory_url="https://open.spotify.com/genre/0JQ5DAqbMKFSi39LMRT0Cy"/>  
            <Widgets_2 category="乡村"  image="https://i.scdn.co/image/ab67fb8200005cafd10a5fb6da973e53e9d17ab9  " catagory_url="https://open.spotify.com/genre/0JQ5DAqbMKFKLfwjuJMoNC"/>  
            <Widgets_2 category="播客排行榜"  image="https://t.scdn.co/images/7262179db37c498480ef06bfacb60310.jpeg  " catagory_url="https://open.spotify.com/genre/0JQ5DAB3zgCauRwnvdEQjJ"/>  
            <Widgets_2 category="Audiobooks"  image="https://i.scdn.co/image/ab67656300005f1fd464f18a416c86ede3a235a7  " catagory_url="https://open.spotify.com/genre/0JQ5DAqbMKFSi39LMRT0Cy"/>  
            <Widgets_2 category="排行榜"  image="https://i.scdn.co/image/ab67fb8200005caf14030380532b34badbf0a229  " catagory_url="https://open.spotify.com/genre/0JQ5DAqbMKFSi39LMRT0Cy"/>  
            <Widgets_2 category="励志与回忆录"  image="https://avatars.akamai.steamstatic.com/cfd6459596ff59ff37f067100c96d092d40cfb07_full.jpg  " catagory_url="https://open.spotify.com/genre/0JQ5DAqbMKFSi39LMRT0Cy"/>      
        </div>
    </div>
</template>