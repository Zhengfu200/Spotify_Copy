<!--Widgets_3:用于获取artist.json制作歌曲列表，包含属性：artist,track,index-->
<script setup>
import {ref,toRefs,onMounted} from 'vue'
import Play from 'vue-material-design-icons/Play.vue'
import Pause from 'vue-material-design-icons/Pause.vue'
import Heart from 'vue-material-design-icons/Heart.vue'

//引入pinia
import { useSongStore } from '../stores/song';
import { storeToRefs } from 'pinia';
const useSong = useSongStore()
const { isPlaying, currentTrack } = storeToRefs(useSong)

let isHover = ref(false)
let isTrackTime = ref(null)

const props = defineProps({
    track:Object,
    artist:Object,
    index:Number,
})

const {track,artist,index} = toRefs(props)

onMounted(() =>{
    const music_src = new Audio(track.value.path);
    music_src.addEventListener('loadedmetadata',function(){
        const duration = music_src.duration;
        const min = Math.floor(duration / 60)
        const sec = Math.floor(duration % 60)
        isTrackTime.value = min+':'+sec.toString().padStart(2,'0')
    })
})

</script>

<template>
    <li class="
            flex
            items-center
            justify-between
            rounded-md
            hover:bg-[#2A2929]"
        @mouseenter="isHover = true"
        @mouseleave="isHover = false">

        <div class="flex items-center w-full py-1.5">
            <div v-if="isHover" class="w-[40px] ml-[14px] mr-[6px] cursor-pointer">
                <Play 
                    v-if="!isPlaying" 
                    fillColor="#FFFFFF" 
                    :size="25" 
                    @click="useSong.PlayOrPauseThisSong(artist,track)"
                />

                <Play 
                    v-else-if="isPlaying && currentTrack.name !== track.name" 
                    fillColor="#FFFFFF" 
                    :size="25" 
                    @click="useSong.loadSong(artist,track)"
                />

                <Pause v-else fillColor="#FFFFFF" :size="25" @click="useSong.PlayOrPauseSong()"/>
            </div>

            <div v-else class="text-white font-semibold w-[40px] ml-5">
                <span :class="{'text-green-500': currentTrack && currentTrack.name === track.name}">
                    {{ index }}
                </span>
            </div>

            <div>
                <div
                    class="text-white font-semibold">
                    <span :class="{'text-green-500': currentTrack && currentTrack.name === track.name}">
                        {{ track.name }}
                    </span>
                </div>
                <div class="text-sm font-semibold text-gray-400">{{ artist.name }}</div>
            </div>
        </div>

        <div class="flex items-center" v-if="isHover">
            <button>
                <Heart fillColor="#1BD760" :size="22"/>
            </button>

            <div v-if="isTrackTime" class="text-xs mx-5 text-gray-400">
                {{  isTrackTime }}
            </div>
        </div>
    </li>
    
</template>