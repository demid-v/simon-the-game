<template>
  <div class="simon-the-game">
    <div class="board">
      <div class="first-row">
        <Button
          color="yellow"
          audioLink="http://www.kellyking.me/projects/simon/sounds/1.ogg"
          data-num="0"
          @checkSeq="checkSeq"
          ref="button1"
        />
        <Button
          color="blue"
          audioLink="http://www.kellyking.me/projects/simon/sounds/2.ogg"
          data-num="1"
          @checkSeq="checkSeq"
          ref="button2"
        />
      </div>
      <div class="second-row">
        <Button
          color="red"
          audioLink="http://www.kellyking.me/projects/simon/sounds/3.ogg"
          data-num="2"
          @checkSeq="checkSeq"
          ref="button3"
        />
        <Button
          color="green"
          audioLink="http://www.kellyking.me/projects/simon/sounds/4.ogg"
          data-num="3"
          @checkSeq="checkSeq"
          ref="button4"
        />
      </div>
    </div>
    <div class="options">
      <button class="button-start" @click="toggleGame">
        {{ this.started ? "Остановить" : "Начать" }}
      </button>
      <div class="message" v-show="lost">Вы проиграли. Попробуйте снова.</div>
      <div class="modes">
        <p class="easy-mode">
          <input
            type="radio"
            id="easy-mode"
            name="mode"
            data-delay="1500"
            ref="easyMode"
            @click="setMode"
          /><label for="easy-mode">Легко</label>
        </p>
        <p class="normal-mode">
          <input
            type="radio"
            id="normal-mode"
            name="mode"
            data-delay="1000"
            ref="normalMode"
            @click="setMode"
            checked
          /><label for="normal-mode">Нормально</label>
        </p>
        <p class="hard-mode">
          <input
            type="radio"
            id="hard-mode"
            name="mode"
            data-delay="400"
            ref="hardMode"
            @click="setMode"
          /><label for="hard-mode">Сложно</label>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import Button from "./Button.vue";

export default {
  data() {
    return {
      buttons: [],
      started: false,
      delay: 1000,
      sequence: [],
      currentButton: 0,
      lost: false,
    };
  },

  components: { Button },

  mounted() {
    this.buttons.push(
      this.$refs.button1,
      this.$refs.button2,
      this.$refs.button3,
      this.$refs.button4
    );

    this.currentMode = this.$refs.normalMode;
  },

  methods: {
    setMode(event) {
      this.delay = event.target.dataset.delay;
    },
    toggleGame() {
      this.started = !this.started;
      if (this.started) {
        this.startGame();
      } else {
        this.endGame();
      }
    },
    startGame() {
      this.lost = false;
      this.startRound();
    },
    endGame() {
      this.lost = true;
      this.sequence.length = 0;
      this.currentButton = 0;
    },
    startRound() {
      this.sequence.push(Math.floor(Math.random() * 4));
      this.playSequence();
    },
    async playSequence() {
      for (
        let index = 0, lengthSkipLast = this.sequence.length - 1;
        index < lengthSkipLast;
        index++
      ) {
        this.buttons[this.sequence[index]].play();
        await this.wait(this.delay);
      }
      this.buttons[this.sequence[this.sequence.length - 1]].play();
    },
    wait(time) {
      return new Promise((res) => setTimeout(res, time));
    },
    async checkSeq(event) {
      if (event.target.dataset.num == this.sequence[this.currentButton]) {
        this.currentButton++;
        if (this.currentButton === this.sequence.length) {
          this.currentButton = 0;
          await this.wait(1000);
          this.startRound();
        }
      } else {
        this.endGame();
      }
    },
  },
};
</script>

<style lang="scss">
.simon-the-game {
  width: 600px;
  margin: 50px 0;
  display: flex;
}

.options {
  text-align: left;
  margin-left: 30px;
}

.button-start {
  margin-bottom: 5px;
}
</style>
