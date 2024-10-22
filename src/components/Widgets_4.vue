<!--Widgets_4:核心播放器功能-->
<script setup>
import { ref, watch, onMounted } from 'vue';

import artist from '../artist.json'
//图标
import Play from 'vue-material-design-icons/Play.vue'
import Heart from 'vue-material-design-icons/Heart.vue';
import PictureInPictureBottomRight from 'vue-material-design-icons/PictureInPictureBottomRight.vue';
import Pause from 'vue-material-design-icons/Pause.vue';
import SkipBackward from 'vue-material-design-icons/SkipBackward.vue';
import SkipForward from 'vue-material-design-icons/SkipForward.vue';

import { useSongStore } from '../stores/song'
import { storeToRefs } from 'pinia';
const useSong = useSongStore()
const { isPlaying, audio, currentTrack, currentArtist } = storeToRefs(useSong)

let isHover = ref(false)
let isTrackTimeCurrent = ref(null)
let isTrackTimeTotal = ref(null)
let seeker = ref(null)
let seekerContainer = ref(null)
let range = ref(0)

onMounted(() => {

    if (audio.value) {
        setTimeout(() => {
            timeupdate()
            loadmetadata()
        }, 300)
    }

    if (currentTrack.value) {
        seeker.value.addEventListener("change", function () {
            const time = audio.value.duration * (seeker.value.value / 100);
            audio.value.currentTime = time;
        });

        seeker.value.addEventListener("mousedown", function () {
            audio.value.pause();
            isPlaying.value = false
        });

        seeker.value.addEventListener("mouseup", function () {
            audio.value.play();
            isPlaying.value = true
        });

        seekerContainer.value.addEventListener("click", function (e) {
            const clickPosition = (e.pageX - seekerContainer.value.offsetLeft) / seekerContainer.value.offsetWidth;
            const time = audio.value.duration * clickPosition;
            audio.value.currentTime = time;
            seeker.value.value = (100 / audio.value.duration) * audio.value.currentTime;
        });
    }
})

const timeupdate = () => {
    audio.value.addEventListener("timeupdate", function () {
        var minutes = Math.floor(audio.value.currentTime / 60);
        var seconds = Math.floor(audio.value.currentTime - minutes * 60);
        isTrackTimeCurrent.value = minutes + ':' + seconds.toString().padStart(2, '0')
        const value = (100 / audio.value.duration) * audio.value.currentTime;
        range.value = value
        seeker.value.value = value;
    });
}

const loadmetadata = () => {
    audio.value.addEventListener('loadedmetadata', function () {
        const duration = audio.value.duration;
        const minutes = Math.floor(duration / 60);
        const seconds = Math.floor(duration % 60);
        isTrackTimeTotal.value = minutes + ':' + seconds.toString().padStart(2, '0')
    });
}

watch(() => audio.value, () => {
    timeupdate()
    loadmetadata()
})

watch(() => isTrackTimeCurrent.value, (time) => {
    if (time && time == isTrackTimeTotal.value) {
        useSong.nextSong(currentTrack.value)
    }
})

</script>


<template>
    <div id="MusicPlayer" 
        v-if="audio"
        class="
        fixed
        flex
        items-center
        justify-between
        bottom-0
        w-full
        z-50
        h-[90px]
        bg-[#181818]
        border-t
        border-t-[#272727]">

        <div class="flex items-center w-1/4">
            <div class="flex item-center ml-4">
                <img class="rounded-sm shadow-2xl" width="55" :src="currentTrack.album">
                <div class="ml-4">
                    <div class="text-[14px] text-white hover:underline cursor-pointer">
                        {{ currentTrack.name }}
                    </div>
                    <div class="mt-1 text-[11px] text-gray-400 hover:underline hover:text-white cursor-pointer">
                        {{ currentTrack.singer }}
                    </div>
                </div>
            </div>

            <div class="flex items-center ml-8">
                <Heart fill-color="#1BD760" :size="20" />
                <PictureInPictureBottomRight class="ml-4" fill-color="#FFFFFF" :size="18" />
            </div>
        </div>

        <div class="max-w-[35%] mx-auto w-2/4 mb-3">
            <div class="flex-col items-center justify-center">
                <div class="flex items-center justify-center h-[30px]">
                    <button class="mx-2">
                        <SkipBackward fill-color="#FFFFFF" :size="25" @click="useSong.prevSong(currentTrack)" />
                    </button>
                    <button class="p-1 rounded-full mx-3 bg-white"
                        @click="useSong.PlayOrPauseThisSong(currentAritst, currentTrack)">
                        <Play v-if="!isPlaying" fill-color="#181818" :size="25" />
                        <Pause v-else fill-color="#181818" :size="25" />
                    </button>
                    <button class="mx-2">
                        <SkipForward fill-color="#FFFFFF" :size="25" @click="useSong.nextSong(currentTrack)" />
                    </button>
                </div>
            </div>

            <div class="flex items-center h-[25px]">
                <div v-if="isTrackTimeCurrent" class="text-white text-[12px] pr-2 pt-[11px]">{{ isTrackTimeCurrent }}</div>
                <div ref="seekerContainer" class="w-full relative mt-2 mb-3" @mouseenter="isHover = true"
                    @mouseleave="isHover = false">

                    <input v-model="range" ref="seeker" type="range" class="
                                    absolute
                                    rounded-full
                                    my-2
                                    w-full
                                    h-0
                                    z-40
                                    appearance-none
                                    bg-opacity-100
                                    focus:outline-none
                                    accent-white"
                                    :class="{ 'rangeDotHidden': !isHover }">
                    <div class="point-events-none mt-[6px] absolute h-[4px] z-10 inset-y-0 left-0 w-0"
                        :style="`width:${range}%;`" :class="isHover ? 'bg-green-500' : 'bg-white'" />
                    
                    <div class="absolute h-[4px] z-[-0] mt-[6px] inset-y-0 left-0 w-full bg-gray-500 rounded-full"/>
                </div>

                <div v-if="isTrackTimeTotal" class="text-white text-[12px] pr-2 pt-[11px]">{{ isTrackTimeTotal }}</div>
            </div>
        </div>
    </div>
</template>

<!--进度条只有检测鼠标进入时才显示-->
<style>
.rangeDotHidden[type="range"]::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 0;
    height: 0;
}
</style>