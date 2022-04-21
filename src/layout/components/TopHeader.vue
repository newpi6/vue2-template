<template>
  <div>
    <div class="module-menu">
      <span class="top-module">
        <router-link to="/">
          首页
        </router-link>
      </span>
      <span v-for="route in routes" :key="route.path" class="top-module">
        <span v-if="route.meta">
          <span v-if="route.meta.module" @click="changeModule(route)">
            {{ route.meta.module }}
          </span>
        </span>
        <!--        <router-link v-if="route.module" class="top-module" :to="{name: route.name + '-home'}">-->
        <!--          {{ route.module }}</router-link>-->
      </span>
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
          <el-button style="width: 100%" @click.native="logout">退出登录</el-button>
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
    },
    routes() {
      return this.$router.options.routes
    }
  },
  watch: {
    $route(to, from) {
      console.log('router from ' + from.path + ' to ' + to.path)
      console.log(to)
      if (this.$route.meta) {
        this.$store.state.status.active_module = to.meta.module
      }
      // this.$store.state.status.active_module = to.module
      // this.$store.state.settings.title = to.module
    }
  },
  created() {
    // console.log('created log avatar')
    // console.log(this.$store.getters.avatar)
    // console.log('created log sidebar')
    // console.log(this.$store.getters.sidebar)
    // console.log('store active module')
    // console.log(this.$store.getters.active_module)
  },
  methods: {
    showNotice() {
      console.log('show notice')
    },
    changeModule(route) {
      this.$store.state.status.active_module = route.meta.module
      this.$store.state.settings.title = route.meta.module
      this.$router.push({ path: route.path })
    },
    async logout() {
      await this.$store.dispatch('user/logout')
      this.$router.push(`/login?redirect=${this.$route.fullPath}`)
    }
  }
}
</script>

<style scoped>

.module-menu {
  margin-left: 300px;
  overflow: auto;
  max-width: 1000px;
  display: inline-block;
  white-space: nowrap;
  overflow-y: hidden;
  overflow-x: scroll;
  max-height: 80px;
  /*line-height: 80px;*/
  border: #1f2d3d solid 1px;
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
