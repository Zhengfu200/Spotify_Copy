import { defineStore } from 'pinia'
import artist from '../artist.json'

export const useSongStore = defineStore('song', {
  state:() => ({
    isPlaying: false,
    audio: null,
    currentAritst:null,
    currentTrack:null
  }),
  actions:{
    loadSong(artist,track){
      this.currentAritst = artist
      this.currentTrack = track

      if(this.audio && this.audio.src){
        this.audio.pause()
        this.isPlaying = false
        this.audio.src = ''
      }

      this.audio = new Audio()
      this.audio.src = track.path

      setTimeout(() => {
        this.isPlaying = true
        this.audio.play()
      }, 200);
    },

    PlayOrPauseSong(){
      if(this.audio.paused){
        this.isPlaying = true
        this.audio.play()
      }else{
        this.isPlaying = false
        this.audio.pause()
      }
    },

    PlayOrPauseThisSong(artist , track){
      if(!this.audio || !this.audio.src || (this.currentTrack.id !== track.id)){
        this.loadSong(artist,track)
        return
      }

      this.PlayOrPauseSong()
    },

    prevSong(currentTrack){
      let track = artist.tracks[currentTrack.id-2]
      this.loadSong(artist,track)
    },

    nextSong(currentTrack){
      if(currentTrack.id === artist.tracks.length){
        let track = artist.tracks[0]
        this.loadSong(artist,track)
      }else{
        let track = artist.tracks[currentTrack.id]
        this.loadSong(artist,track)
      }
    },

     playFromFirst(){
        this.resetState() 
        let track = artist.tracks[0]
        this.loadSong(artist,track)
     },

     resetState(){
      this.isPlaying = false
      this.audio = null
      this.currentAritst = null
      this.currentTrack = null
     }
  },
  persist:true
})
