<script setup>
import { ref,onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { RouterLink, RouterView } from 'vue-router';

import MenuItem_2 from './components/MenuItem_2.vue';
//components
import MenuItem from './components/MenuItem.vue';
import Widgets_4 from './components/Widgets_4.vue';

import artist from './artist.json'

//icons:
import ChevronUp from 'vue-material-design-icons/ChevronUp.vue';
import ChevronDown from 'vue-material-design-icons/ChevronDown.vue';
import ChevronLeft from 'vue-material-design-icons/ChevronLeft.vue';
import ChevronRight from 'vue-material-design-icons/ChevronRight.vue';

import { useSongStore } from '@/stores/song';
import { storeToRefs } from 'pinia';
const useSong = useSongStore()
const { isPlaying, currentTrack } = storeToRefs(useSong)

const router = useRouter();

onMounted(()=>{
  isPlaying.value = false 
})
//前进后退页面
function go_to_last_page(){
  router.go(-1)
}

function go_to_next_page(){
  router.go(1)
}
//跳转个人主页
function profile(){
  const link = ref('https://github.com/Zhengfu200')
  window.open(link.value, '_blank')
}

let openMenu = ref(false)
</script>

<template>
  <div>
    <div class="w-[calc(100%-240px)]
       h-[60px]
       fixed
       right-0
       z-20
       bg-[#101010]
       bg-opacity-80
       flex
       items-center
       justify-between">
      <div class="flex items-center ml-6">
        <button type="button" class="rounded-full bg-black p-[1px] cursor-pointer">
          <ChevronLeft fill-color="#FFFFFF" :size="30" @click="go_to_last_page"/>
        </button>
        <button type="button" class="rounded-full bg-black p-[1px] ml-4 cursor-pointer">
          <ChevronRight fill-color="#FFFFFF" :size="30" @click="go_to_next_page"/>
        </button>
      </div>

      <button
        @click = "openMenu = !openMenu" :class = "openMenu ? 'bg-[#282828]' : 'bg-black'"
        class="bg-black hover:bg-[#282828] rounded-full p-0.5 mr-8 mt-0.5 cursor-pointer"
      >
        <div class="flex items-center">
          <img class="rounded-full" width="27"
            src="https://cravatar.cn/avatar/5f67be0d47317e7e92ba2d334e0a03bc?s=96&d=mm&r=g">
          <div class="text-white text-[12px] ml-1.5 mr-1 font-semibold">Zhengfu200</div>
          <ChevronDown v-if="!openMenu" @click="openMenu = true" fillColor="#FFFFFFF" :size="25" />
        </div>
      </button>

      <span
        v-if = "openMenu"
        class="fixed w-[190px] bg-[#282828] shadow-2xl z-50 rounded-sm top-[52px] right-[35px] p-1 cursor-pointer"
      >
        <ul class="text-gray-200 font-semibold text-[14px]">
          <li class="px-3 py-2.5 hover:bg-[#3E3D3D] border-b border-b-gray-600">
            <div @click="profile">个人资料</div>
          </li>
        </ul>
      </span>
    </div>

    <div
      id="SideNav"
      class="h-[100%] p-6 w-[240px] fixed z-50 bg-black">

      <RouterLink to="/">
        <img width="125" src="/icons/spotify-logo.png">
      </RouterLink>
      <div class="my-8"></div>
      <ul>
        <RouterLink to="/">
          <MenuItem class="ml-[1px]" :iconSize="23" iconString="home" pageUrl="/" name="主页"/>
        </RouterLink>
        <RouterLink to="/search">
          <MenuItem class="ml-[1px]" :iconSize="23" iconString="search" pageUrl="/search" name="搜索"/>
        </RouterLink>
        <RouterLink to="/library">
          <MenuItem class="ml-[1px]" :iconSize="23" iconString="library" pageUrl="/library" name="库"/>
        </RouterLink>
      </ul>
      <div class="border-b border-b-gray-700"></div>
      <ul v-for="track in artist.tracks" :key="track">
        <MenuItem_2 :track="track"/>
      </ul>
    </div>
  </div>

  <div
    class="
      fixed
      right-0
      top-0
      w-[calc(100%-240px)]
      overflow-auto
      h-full
      bg-gradient-to-b
      from-[#1C1C1C]
      to-black" 
  >
    <div class="mt-[70px]"></div>
    <RouterView/>
    <div class="mb-[100px]"></div>
  </div>
  <Widgets_4 v-if="currentTrack"/>
</template>