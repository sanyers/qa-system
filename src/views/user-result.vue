<template>
  <div class="user-result">
    <h1>当前类型：{{ categoryType }}</h1>
    <p>
      正确 {{ infor.correct }} 题，错误 {{ infor.error }} 题，总共
      {{ infor.count }} 题，正确率 {{ infor.correctRate }}%
    </p>
    <div class="question">{{ qaData.q }}</div>
    <div class="answer">
      <el-input
        type="textarea"
        :rows="4"
        placeholder="请输入内容"
        :disabled="true"
        v-model="qaData.userText">
      </el-input>
    </div>
    <div>
      <el-button @click="queryAnswer">查看答案</el-button>
      <el-button @click="prevQuestion" :disabled="qaIndex === 1"
        >上一题</el-button
      >
      <el-button @click="nextQuestion" :disabled="qaIndex === answerList.length"
        >下一题</el-button
      >
      <el-checkbox v-model="qaData.isChecked" style="margin-left: 13px"
        >是否正确</el-checkbox
      >
    </div>
    <div class="answer" v-if="isAnswerText">
      <markdown-it-vue :content="answerContent" />
    </div>
  </div>
</template>
<script>
export default {
  name: 'UserResult',
  computed: {
    qaData() {
      return this.answerList.length ? this.answerList[this.qaIndex - 1] : {};
    },
  },
  data() {
    return {
      categoryType: '', // 题目类型
      qaList: [], // 题目列表
      answerList: [], // 答案列表
      infor: {
        correct: 0, // 正确个数
        error: 0, // 错误个数
        count: 0, // 总数
        correctRate: 0, // 正确率
      },
      qaIndex: 1, // 当前题目索引
      isAnswerText: false, // 是否显示答案
      answerContent: '', // 答案内容
    };
  },
  mounted() {
    this.getList();
  },
  methods: {
    // 获取答案和题目列表
    async getList() {
      this.categoryType = localStorage.getItem('user-type');
      const qa = await import('../config/' + this.categoryType + '/index.js');
      this.qaList = qa.default;
      this.answerList = JSON.parse(localStorage.getItem('user-answer'));
      this.getAnswerInfor();
    },
    // 获取答案结果信息
    getAnswerInfor() {
      const count = this.answerList.length;
      let correct = 0;
      this.answerList.forEach(element => {
        if (element.isChecked) {
          correct++;
        }
      });
      this.infor.correct = correct;
      this.infor.correctRate = (correct / count) * 100;
      this.infor.error = count - correct;
      this.infor.count = count;
    },
    // 显示答案
    async queryAnswer() {
      this.isAnswerText = !this.isAnswerText;
      if (!this.answerContent) {
        const q = this.qaData.q;
        const findQa = this.qaList.find(item => item.q === q);
        if (findQa) {
          const text = await findQa.a;
          this.answerContent = text.default;
        }
      }
    },
    // 上一题
    prevQuestion() {
      this.qaIndex--;
      this.clearState();
    },
    // 下一题
    nextQuestion() {
      this.qaIndex++;
      this.clearState();
    },
    // 清除状态
    clearState() {
      this.answerContent = '';
      this.isAnswerText = false;
    },
  },
};
</script>
<style lang="scss" scoped>
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
</style>
