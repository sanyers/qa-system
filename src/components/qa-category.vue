<template>
  <div class="qa-category">
    <div>
      <span @click="onBack">返回</span>
      <span class="qa-category-type">{{ categoryType }}</span>
    </div>
    <el-select v-model="typeIndex" placeholder="请选择" @change="onChageType">
      <el-option
        v-for="item in typeList"
        :key="item.typeName"
        :label="item.typeName"
        :value="item.typeName">
      </el-option>
    </el-select>
    <qa-timer :timerNum="timerNum" ref="qaTimerRef" @on-end="onEnd"></qa-timer>
    <div class="qaContent">
      <p class="tip">{{ qaIndex }}/{{ qList.length }}</p>
      <div class="question">{{ qaData.q }}</div>
      <div class="answer">
        <el-input
          type="textarea"
          :rows="4"
          placeholder="请输入内容"
          v-model="textarea">
        </el-input>
      </div>
      <div>
        <el-button @click="queryAnswer">查看答案</el-button>
        <el-button @click="prevQuestion" :disabled="qaIndex === 1"
          >上一题</el-button
        >
        <el-button @click="nextQuestion" :disabled="qaIndex === qList.length"
          >下一题</el-button
        >
        <el-button @click="okQuestion">提交</el-button>
        <el-button v-if="isEnd" @click="queryResult">查看结果</el-button>
        <el-checkbox v-model="isChecked" style="margin-left: 13px"
          >是否正确</el-checkbox
        >
      </div>
      <div class="answer" v-if="isAnswerText">
        <markdown-it-vue :content="answerContent" />
      </div>
    </div>
  </div>
</template>

<script>
import qaTimer from './qa-timer.vue';
export default {
  components: { qaTimer },
  name: 'QaCategory',
  props: {
    // 题目类型
    categoryType: {
      type: String,
      default: '',
    },
  },
  computed: {
    qaData() {
      return this.qList.length ? this.qList[this.qaIndex - 1] : {};
    },
  },
  data() {
    return {
      timerNum: 60, // 计时（分钟）
      isEnd: false, // 是否结束
      textarea: '', // 回答的内容
      qaIndex: 1, // 当前题目索引
      isChecked: false, // 是否正确
      qList: [], // 题目列表
      isAnswerText: false, // 是否显示答案
      answerContent: '', // 答案内容
      typeIndex: '',
      typeList: [],
    };
  },
  async mounted() {
    this.$refs.qaTimerRef.startTimer();
    this.isEnd = false;
    const list = await import('../config/' + this.categoryType + '/index.js');
    this.typeList = list.default;
    // this.qList = list.default.map(item => ({
    //   ...item,
    //   isChecked: false,
    //   userText: '',
    // }));
  },
  methods: {
    onChageType(val) {
      const tmp = this.typeList.find(item => item.typeName === val);
      this.qList = tmp.typeList.map(item => ({
        ...item,
        isChecked: false,
        userText: '',
      }));
      this.qaIndex = 1;
      this.answerContent = '';
      this.isAnswerText = false;
    },
    // 返回提示
    onBack() {
      if (this.isEnd) {
        this.$emit('on-back');
      } else {
        this.$confirm('当前答题未提交，是否返回？', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning',
        }).then(() => {
          this.$refs.qaTimerRef.clearTimers();
          this.$emit('on-back');
        });
      }
    },
    // 结束答题
    onEnd() {
      alert('时间到！');
      this.isEnd = true;
    },
    // 显示答案
    async queryAnswer() {
      this.isAnswerText = !this.isAnswerText;
      if (!this.answerContent) {
        const text = await this.qaData.a;
        this.answerContent = text.default;
      }
    },
    // 上一题
    prevQuestion() {
      this.recordState();
      this.qaIndex--;
      this.clearState();
    },
    // 下一题
    nextQuestion() {
      this.recordState();
      this.qaIndex++;
      this.clearState();
    },
    // 记录状态
    recordState() {
      this.qList[this.qaIndex - 1].isChecked = this.isChecked;
      this.qList[this.qaIndex - 1].userText = this.textarea;
    },
    // 清除状态
    clearState() {
      this.textarea = this.qList[this.qaIndex - 1].userText;
      this.isChecked = this.qList[this.qaIndex - 1].isChecked;
      this.answerContent = '';
      this.isAnswerText = false;
    },
    // 提交答案
    okQuestion() {
      this.recordState();
      alert('提交成功');
      this.isEnd = true;
      localStorage.setItem('user-answer', JSON.stringify(this.qList));
      localStorage.setItem('user-type', this.categoryType);
    },
    // 查看结果
    queryResult() {
      this.$router.push({ name: 'user-result' });
    },
  },
};
</script>
<style lang="scss" scoped>
.qa-category {
  .qa-category-type {
    margin-left: 20px;
  }
  .qaContent {
    .answer {
      width: 600px;
      margin: 13px auto;
      ::v-deep .el-textarea__inner {
        color: #3a3a3a;
        cursor: pointer;
      }
    }
    ::v-deep .markdown-body {
      text-align: left;
    }
  }
}
</style>
