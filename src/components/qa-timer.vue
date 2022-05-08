<template>
  <span class="qa-timer">{{ timerText }}</span>
</template>
<script>
export default {
  name: 'QaTimer',
  props: {
    // 显示小时
    isHour: {
      type: Boolean,
      default: true,
    },
    // 显示分钟
    isMinute: {
      type: Boolean,
      default: true,
    },
    // 显示秒
    isSecond: {
      type: Boolean,
      default: true,
    },
    // 计时时间（分钟），timerType为true时从多少分钟开始倒计时，为false时从多少分钟开始顺计时
    timerNum: {
      type: Number,
      default: 0,
    },
    // 计时类型，true为倒计时，false为顺计时
    timerType: {
      type: Boolean,
      default: true,
    },
    // 计时间隔
    timerInterval: {
      type: Number,
      default: 1000,
    },
    // 计时最小范围（秒）
    timerMin: {
      type: Number,
      default: 0,
    },
    // 计时最大范围（秒），默认12小时
    timerMax: {
      type: Number,
      default: 43200,
    },
  },
  data() {
    return {
      timerText: '', // 显示计时时间
      nowTimer: 0, // 当前计时
      isTimers: false, // 是否在计时
      timerJs: null, // 计时控件
      isSuspendTimer: false, // 是否暂停计时
    };
  },
  created() {
    this.getTimerText();
  },
  methods: {
    // 开始计时
    startTimer() {
      !this.isSuspendTimer && (this.nowTimer = this.timerNum * 60);
      this.isSuspendTimer = false;
      this.clearTimers();
      this.isTimers = true;
      this.timers();
    },
    // 停止计时
    endTimer() {
      this.clearTimers();
      this.$emit('on-end'); // 触发停止计时事件
    },
    // 暂停计时
    suspendTimer() {
      this.clearTimers();
      this.isSuspendTimer = true;
    },
    // 清空计时器
    clearTimers() {
      this.isTimers = false;
      clearTimeout(this.timerJs);
      this.timerJs = null;
    },
    // 计时器
    timers() {
      if (this.isTimers) {
        this.timerJs = setTimeout(() => {
          if (this.timerType) {
            this.nowTimer--;
          } else {
            this.nowTimer++;
          }
          if (this.nowTimer > this.timerMax || this.nowTimer < this.timerMin) {
            this.endTimer();
          } else {
            this.getTimerText();
            this.timers();
          }
        }, this.timerInterval);
      }
    },
    // 获取当前计时时间
    getTimerText() {
      const timerData = this.formatSecond();
      let text = '';
      if (this.isHour) {
        text += this.repairNum(timerData.hours) + ':';
      }
      if (this.isMinute) {
        text += this.repairNum(timerData.minutes) + ':';
      }
      if (this.isSecond) {
        text += this.repairNum(timerData.seconds);
      }
      this.timerText = text;
    },
    // 秒换算
    formatSecond() {
      const mold = this.nowTimer % 86400;
      return {
        days: Math.floor(mold),
        hours: Math.floor(mold / 3600),
        minutes: Math.floor((mold % 3600) / 60),
        seconds: Math.floor((mold % 3600) % 60),
      };
    },
    // 不足10补0
    repairNum(num) {
      if (num < 10) {
        num = '0' + num;
      }
      return num;
    },
  },
  destroyed() {
    this.clearTimers();
  },
};
</script>
<style lang="scss" scoped>
.qa-timer {
  margin: 0 10px;
}
</style>
