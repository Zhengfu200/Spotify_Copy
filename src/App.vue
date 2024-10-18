<script setup>
import { ref,onMounted } from 'vue';
import { RouterLink, RouterView } from 'vue-router';

//components
import MenuItem from './components/MenuItem.vue';
import Widgets_4 from './components/Widgets_4.vue';

//icons:
import ChevronUp from 'vue-material-design-icons/ChevronUp.vue';
import ChevronDown from 'vue-material-design-icons/ChevronDown.vue';
import ChevronLeft from 'vue-material-design-icons/ChevronLeft.vue';
import ChevronRight from 'vue-material-design-icons/ChevronRight.vue';

import { useSongStore } from '@/stores/song';
import { storeToRefs } from 'pinia';
const useSong = useSongStore()
const { isPlaying, audio, currentTrack } = storeToRefs(useSong)

onMounted(()=>{
  isPlaying.value = false 
})

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
          <ChevronLeft fill-color="#FFFFFF" :size="30" />
        </button>
        <button type="button" class="rounded-full bg-black p-[1px] ml-4 cursor-pointer">
          <ChevronRight fill-color="#FFFFFF" :size="30" />
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
          <li class="px-3 py-2.5 hover:bg-[#3E3D3D] border-b border-b-gray-600">个人资料</li>
          <li class="px-3 py-2.5 hover:bg-[#3E3D3D] border-b border-b-gray-600">登出</li>
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
        <div class="py-3.5"></div>
        <MenuItem :icon-size="26" name="创建歌单" iconString="playlist" pageUrl="/playlist"/>
        <MenuItem 
          class="ml-[1px]"
          :icon-size="26" name="收藏" iconString="liked" pageUrl="/liked"/>
      </ul>
      <div class="border-b border-b-gray-700"></div>
      <ul>
        <li class = "font-semibold text-[13px] mt-3 text-gray-50 hover:text-white">创建的歌单 #1</li>
        <li class = "font-semibold text-[13px] mt-3 text-gray-50 hover:text-white">创建的歌单 #2</li>
        <li class = "font-semibold text-[13px] mt-3 text-gray-50 hover:text-white">创建的歌单 #3</li>
        <li class = "font-semibold text-[13px] mt-3 text-gray-50 hover:text-white">创建的歌单 #4</li>
        <li class = "font-semibold text-[13px] mt-3 text-gray-50 hover:text-white">创建的歌单 #5</li>
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

  <Widgets_4 v-if="currentTrack"
</template>