<template>
  <button
    class="button"
    :style="
      'background-color:' + color + ';filter:brightness(' + brightness + '%)'
    "
    @click="
      play();
      $emit('checkSeq', $event);
    "
  ></button>
</template>

<script>
export default {
  props: { color: String, audioLink: String },
  data() {
    return { audio: new Audio(this.audioLink), brightness: 80 };
  },
  created() {
    this.audio.onplaying = () => (this.brightness = 150);
    this.audio.onpause = () => (this.brightness = 80);
  },
  methods: {
    play() {
      if (!this.audio.paused) {
        console.log("playing");
        this.audio.pause();
      }
      this.audio.play();
    },
  },
};
</script>

<style>
.button {
  width: 100px;
  height: 100px;
}
</style>
