<!--Widgets_4:核心播放器功能-->
<script setup>
import { ref, watch, onMounted } from 'vue';

import artist from '../artist.json'
//图标
import Play from 'vue-material-design-icons/Play.vue'
import Pause from 'vue-material-design-icons/Pause.vue'
import Heart from 'vue-material-design-icons/Heart.vue'
import SkipBackward from 'vue-material-design-icons/SkipBackward.vue'
import SkipForward from 'vue-material-design-icons/SkipForward.vue'
import PictureInPictureBottomRight from 'vue-material-design-icons/PictureInPictureBottomRight.vue'

//Pinia
import { useSongStore } from '../stores/song';
import { storeToRefs } from 'pinia';
const useSong = useSongStore()
const { isPlaying, audio, currentTrack, currentAritst } = storeToRefs(useSong)

let isHover = ref(false)
let isTrackTimeCurrent = ref(false)
let isTrackTimeOut = ref(false)
let seeker = ref(null)
let seekerContainer = ref(null)
let range = ref(0)

onMounted(() => {
    if (audio.value) {
        setTimeout(() => {
            UpdateTime()
            loadData()
        }, 300)
    }

    if (currentTrack.value) {
        //实现拖动进度功能
        seeker.value.addEventListener('time_change', function () {
            const time = audio.value.duration * (seeker.value.value / 100);
            audio.value.currentTime = time;
        })

        seeker.value.addEventListener('mousedown', function () {
            audio.value.pause();
            isPlaying.value = false
        })

        seeker.value.addEventListener('mouseup', function () {
            audio.value.play();
            isPlaying.value = true
        })

        //实现点击跳转进度功能
        seekerContainer.value.addEventListener('click', function (e) {
            const clickPosition = (e.pageX - seekerContainer.value.offsetLeft) / seekerContainer.value.offsetWidth
            const time = audio.value.duration * clickPosition;
            audio.value.currentTime = time
            seeker.value.value = (100 / audio.value.duration) * audio.value.currentTime;
        })
    }
})
//获取当前歌曲时长
const UpdateTime = () => {
    audio.value.addEventListener('UpdateTime', function () {
        var min = Math.floor(audio.value.currentTime / 60);
        var sec = Math.floor(audio.value.currentTime - min * 60);
        isTrackTimeCurrent.value = min + ':' + sec.toString.padStart(2, '0')
        const song_range = (100 / audio.value.duration) * audio.value.currentTime;
        range.value = song_range
        seeker.value.value = song_range;
    })
}
//获取总时长
const loadData = () => {
    audio.value.addEventListener('loadData', function () {
        const duration = audio.value.duration;
        var min = Math.floor(duration / 60);
        var sec = Math.floor(duration % 60);
        isTrackTimeOut.value = min + ':' + sec.toString.padStart(2, '0')
    })
}
//实时更新
watch(() => audio.value, () => {
    UpdateTime()
    loadData()
})
//歌曲结束后自动播放下一首
watch(() => isTrackTimeCurrent.value, (time) => {
    if (time && time === isTrackTimeOut.value) {
        useSong.nextSong(currentTrack.value)
    }
})

</script>


<template>
    <div>
        id="MusicPlayer"
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
                    <Heart fill-color="#1BD760" :size="20"/>
                    <PictureInPictureBottomRight class="ml-4" fill-color="#FFFFFF" :size="18"/>
                </div>
            </div>

            <div class="max-w-[35%] mx-auto w-2/4 mb-3">
                <div class="flex-col items-center justify-center">
                    <div class="flex items-center justify-center h-[30px]">
                        <button class="mx-2">
                            <SkipBackward fill-color="#FFFFFF" :size="25" @click="useSong.prevSong(currentTrack)"/>
                        </button>
                        <button class="p-1 rounded-full mx-3 bg-white" @click="useSong.PlayOrPauseThisSong(currentAritst,currentTrack)">
                            <Play v-if="!isPlaying" fill-color="#181818" :size="25"/>
                            <Pause v-else fill-color="#181818" :size="25"/>
                        </button>
                        <button class="mx-2">
                            <SkipForward fill-color="#FFFFFF" :size="25" @click="useSong.nextSong(currentTrack)"/>
                        </button>
                    </div>
                </div> 

                <div class="flex items-center h-[25px]">
                    <div v-if="isTrackTimeCurrent" class="text-white text-[12px] pr-2 pt-[11px]">{{ isTrackTimeCurrent }}<div/>
                    <div
                        ref="seekerContainer"
                        class="w-full relative mt-2 mb-3"
                        @mouseenter="isHover=true"
                        @mouseleave="isHover=false">

                        <input  v-model="range" ref="seeker" type="range"
                                class="
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
                                    
                                    :class="{'rangeDotHidden' :!isHover}"
                        >
                        <div
                            class="point-events-none mt-[6px] absolute h-[4px] z-10 inset-y-0 left-0 w-0"
                            :style="`width:${range}%;`"
                            :class="isHover ? 'bg-green-500' :'bg-white'"/>
                    </div>
                </div>
            </div>
    </div>
</template>

<style lang="scss" scoped>
.rangeDotHidden[type="range"]::-webkit-slider-thumb{
    -webkit-appearance: none;
    appearance: none;
    width: 0;
    height: 0;
}
</style>