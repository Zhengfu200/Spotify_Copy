<script setup>
//引入pinia
import { useSongStore } from '../stores/song';
import { storeToRefs } from 'pinia';
const useSong = useSongStore()
const { isPlaying, currentTrack } = storeToRefs(useSong)

import { ref, toRefs } from 'vue';
import { RouterLink } from 'vue-router';

const props = defineProps({
    track: Object,
    artist: Object,
    index: Number,
})

const { track, artist } = toRefs(props)

</script>

<template>
    <li>
        <RouterLink to="/library">
            <div class="flex items-center w-full py-1.5">
                <div v-if="isHover" class="font-semibold text-[13px] mt-3 text-gray-50 hover:text-white">
                    <Play v-if="!isPlaying" fillColor="#FFFFFF" :size="25"
                        @click="useSong.PlayOrPauseThisSong(artist, track)" />

                    <Play v-else-if="isPlaying && currentTrack.name !== track.name" fillColor="#FFFFFF" :size="25"
                        @click="useSong.loadSong(artist, track)" />

                    <Pause v-else fillColor="#FFFFFF" :size="25" @click="useSong.PlayOrPauseSong()" />
                </div>
                <div>
                    <div :class="{ 'text-green-500': currentTrack && currentTrack.name === track.name }"
                        class="font-semibold text-[13px] mt-3 text-gray-50 hover:text-white">
                        {{ track.name }}
                    </div>
                </div>
            </div>
        </RouterLink>
    </li>
</template>