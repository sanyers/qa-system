<template>
  <div class="qa-result">
    <div class="qa-top">
      <span @click="onBack">返回</span>
      <span class="qa-category-type">{{ categoryType }}</span> |
      <span
        class="type-link"
        v-for="item in categoryList"
        :key="item"
        @click="changePageType(item)"
        >{{ item }}</span
      >
    </div>
    <div class="qa-content">
      <div class="qa-navs">
        <el-select
          v-model="typeIndex"
          placeholder="请选择"
          @change="onChageType">
          <el-option
            v-for="item in typeList"
            :key="item.typeName"
            :label="item.typeName"
            :value="item.typeName">
          </el-option>
        </el-select>
        <ul>
          <li v-for="item in answerList" :key="item.q">
            <a @click="linkItem(item)">{{ item.id + '、' + item.q }}</a>
          </li>
        </ul>
      </div>

      <div class="qa-list" id="qa-list">
        <template v-for="item in answerList">
          <div :key="item.q" class="qa-item" v-if="item.answerContent">
            <markdown-it-vue
              :content="item.answerContent"
              :id="'md_' + item.id" />
          </div>
        </template>
        <!-- <el-button @click="add">加载更多</el-button> -->
      </div>
    </div>
  </div>
</template>

<script>
import { web } from '@/config/category';
export default {
  name: 'QaResult',
  data() {
    return {
      categoryType: '',
      answerList: [],
      indexNum: 0,
      indexPage: 0,
      typeIndex: '',
      typeList: [],
      categoryList: web,
    };
  },
  mounted() {
    this.init();
  },
  methods: {
    async init(types) {
      this.categoryType = types || this.$route.query.categoryType;
      document.title += ' ' + this.categoryType;
      const list = await import('../config/' + this.categoryType + '/index.js');
      this.typeList = list.default;
    },
    changePageType(val) {
      // this.$route.query.categoryType = val;
      this.$router.replace({
        query: {
          categoryType: val,
        },
      });
      this.init(val);
      this.typeIndex = '';
      this.answerList = [];
    },
    onChageType(val) {
      const tmp = this.typeList.find(item => item.typeName === val);
      this.answerList = tmp.typeList.map((item, index) => ({
        id: index + 1,
        ...item,
        answerContent: '',
      }));
      this.getAnswer();
    },
    onBack() {
      this.$router.push({ name: 'home' });
    },
    linkItem(item) {
      const f = document.getElementById('md_' + item.id);
      document.getElementById('qa-list').scrollTo(0, f.offsetTop - 60);
    },
    async add() {
      this.indexNum += 10;
      if (this.answerList.length < this.indexNum) {
        this.indexNum = this.answerList.length;
      }
      for (let i = this.indexPage; i < this.indexNum; i++) {
        const text = await this.answerList[i].a;
        this.answerList[i].answerContent = text.default;
      }
    },
    async getAnswer() {
      this.answerList.forEach(async element => {
        const text = await element.a;
        element.answerContent = text.default;
      });
    },
  },
};
</script>
<style lang="scss" scoped>
.qa-result {
  padding-top: 30px;
  height: calc(100% - 30px);
  .type-link {
    padding: 0 12px;
    color: #0081cd;
    cursor: pointer;
  }
  .qa-content {
    display: flex;
    height: calc(100% - 21px);
  }
  .qa-list {
    width: calc(100% - 400px);
    height: 100%;
    overflow: auto;
  }
  .qa-category-type {
    margin-left: 20px;
  }
  .qa-item {
    max-width: 740px;
    margin: 0 auto;
    text-align: left;
    margin-bottom: 20px;
    padding: 0 12px;
  }
  .qa-navs {
    // position: fixed;
    height: 100%;
    width: 400px;
    ul {
      height: calc(100% - 60px);
      margin: 0 0 20px 20px;
      padding: 0;
      overflow: auto;
      text-align: left;
      li {
        line-height: 34px;
        a {
          color: #444;
          text-decoration: none;
          cursor: pointer;
          &:hover {
            color: rgb(57, 157, 250);
          }
        }
      }
    }
  }
  @media screen and (max-width: 500px) {
    .qa-navs {
      display: none;
    }
  }
}
</style>
