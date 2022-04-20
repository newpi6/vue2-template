<template>
  <div>

    <div class="module-menu">
      <span class="top-module">首页</span>
      <span class="top-module">模块1</span>
      <span class="top-module">模块2</span>
      <span class="top-module">模块3</span>
    </div>

    <div class="right-menu">
      <el-popover
        placement="top-start"
        title=""
        width="300"
        trigger="hover"
        class="avatar-container"
      >
        <div class="right-menu-box">
          <span class="item-text">123456789@qq.com</span>
          <el-divider />
          <span>姓名: 张三</span>
          <el-divider />
          <el-button style="width: 100%">退出登录</el-button>
        </div>
        <img
          slot="reference"
          src="https://oss.aliyuncs.com/aliyun_id_photo_bucket/default_handsome.jpg"
          class="user-avatar"
          alt="个人信息"
        >
      </el-popover>
    </div>
    <div class="top-item top-notice" @click="showNotice">
      <span class="notice-text">消息</span>
      <span class="notice-number">12</span>
    </div>
    <el-input prefix-icon="el-icon-search" class="top-item top-search" placeholder="搜索" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import variables from '@/styles/variables.scss'

export default {
  name: 'TopHeader',
  computed: {
    ...mapGetters([
      'sidebar',
      'avatar'
    ]),
    variables() {
      return variables
    }
  },
  methods: {
    showNotice() {
      console.log('show notice')
    }
  }
}
</script>

<style scoped>

.module-menu {
  margin-left: 300px;
}

.top-search {
  max-width: 200px;
  height: 28px;
}

.top-notice {
  /*height: 28px;*/
  /*vertical-align: middle;*/
  /*position: relative;*/
  /*margin-right: 15px;*/
}

.notice-text {
  display: inline-block;
  line-height: 30px;
  vertical-align: middle;
}

.notice-number {
  display: inline-block;
  /*background-color: red;*/
  position: relative;
  line-height: 25px;
  vertical-align: middle;
  top: -5px;
  color: red;
  border-radius: 50%;
}

</style>
