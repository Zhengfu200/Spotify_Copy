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
    <div
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
                    <img class="rounded-sm shadow-2xl" width="55" :src="artist.albumCover">
                    <div class="ml-4">
                        <div class="text-[14px] text-white hover:underline cursor-pointer">
                            {{ currentTrack.name }}
                        </div>
                        <div class="text-[11px] text-gray-400 hover:underline hover:text-white cursor-pointer">
                            {{ currentTrack.name }}
                        </div>
                    </div>
                </div>
            </div>
    </div>
</template>

<style lang="scss" scoped></style>