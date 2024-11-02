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
        <div :class="{ 'text-green-500': currentTrack && currentTrack.name === track.name }"
            class="font-semibold text-[13px] mt-5 text-gray-50 hover:text-white">
            {{ track.name }}
        </div>
    </li>
</template>