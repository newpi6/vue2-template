<template>
  <div>
    <span class="top-logo">
      <img src="https://wpimg.wallstcn.com/69a1c46c-eb1c-4b46-8bd4-e9e686ef5251.png" class="logo-image">
      <span class="logo-text">{{ title }}</span>
    </span>
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
    <el-autocomplete
      v-model="destMenu"
      prefix-icon="el-icon-search"
      class="top-item top-search"
      placeholder="搜索菜单"
      :fetch-suggestions="querySearchAsync"
      clearable
      @select="selectHandler"
    />
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
    },
    title() {
      return this.$store.state.settings.title
    },
    routesParse() {
      const tmp = []
      this.routes.forEach(item => {
        if (!item.hidden && item.meta) {
          tmp.push({ 'value': item.meta.title, 'name': item.name, path: item.path })
          if (item.children) {
            item.children.forEach(children => {
              tmp.push({
                'value': item.meta.title + '/' + children.meta.title,
                'name': children.name,
                path: children.path
              })
            })
          }
        }
      })
      return tmp
    }
  },
  watch: {
    $route(to, from) {
      // console.log('router from ' + from.path + ' to ' + to.path)
      // console.log(to)
      if (this.$route.meta) {
        this.$store.state.status.active_module = to.meta.module
      }
    }
  },
  data() {
    return {
      destMenu: null
    }
  },
  created() {
  },
  methods: {
    showNotice() {
      console.log('show notice')
    },
    changeModule(route) {
      this.$store.state.status.active_module = route.meta.module
      this.$store.state.settings.subTitle = route.meta.module
      this.$router.push({ path: route.path })
    },
    async logout() {
      await this.$store.dispatch('user/logout')
      this.$router.push(`/login?redirect=${this.$route.fullPath}`)
    },
    selectHandler(item) {
      // console.log('select item is', item)
      this.$router.push({ name: item.name })
    },
    querySearchAsync(queryString, cb) {
      const results = queryString ? this.routesParse.filter(this.memuFilter(queryString)) : this.routesParse
      return cb(results)
      // return cb(this.routesParse)
    },
    memuFilter(queryString) {
      return (destMenu) => {
        // return (destMenu.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0)
        return (destMenu.value.toLowerCase().search(queryString.toLowerCase()) === 0)
      }
    }
  }
}
</script>

<style scoped>

</style>
