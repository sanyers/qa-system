<template>
  <div class="home">
    <div v-if="isCategory">
      <span>类别：</span>
      <el-select v-model="categoryValue" placeholder="请选择">
        <el-option
          v-for="item in categoryList"
          :key="item"
          :label="item"
          :value="item">
        </el-option>
      </el-select>
      <el-button class="btnOk" @click="onOk">开始答题</el-button>
      <el-button class="btnOk" @click="onQuery">背题模式</el-button>
    </div>
    <qa-category
      v-else
      :categoryType="categoryValue"
      @on-back="onBack"></qa-category>
  </div>
</template>

<script>
import { web } from '@/config/category';
import QaCategory from '@/components/qa-category.vue';
export default {
  name: 'Home',
  components: {
    QaCategory,
  },
  data() {
    return {
      categoryValue: 'javascript',
      categoryList: web,
      isCategory: true,
    };
  },
  methods: {
    onBack() {
      this.isCategory = true;
    },
    onOk() {
      this.isCategory = false;
    },
    onQuery() {
      this.$router.push({
        name: 'qa-result',
        query: { categoryType: this.categoryValue },
      });
    },
  },
};
</script>
<style lang="scss" scoped>
.home {
  padding: 36px 0;
  .btnOk {
    margin-left: 6px;
  }
}
</style>
