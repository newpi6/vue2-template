<template>
  <div>
    <top-header class="top-header" />
    <div :class="{'has-logo':showLogo}" class="left-siderbar">
      <logo v-if="showLogo" :collapse="isCollapse" />
      <el-scrollbar wrap-class="scrollbar-wrapper">
        <el-menu
          :default-active="activeMenu"
          :collapse="isCollapse"
          :background-color="variables.menuBg"
          :text-color="variables.menuText"
          :unique-opened="false"
          :active-text-color="variables.menuActiveText"
          :collapse-transition="false"
          mode="vertical"
        >
          <sidebar-item v-for="route in routes" :key="route.path" :item="route" :base-path="route.path" />
        </el-menu>
      </el-scrollbar>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Logo from './Logo'
import SidebarItem from './SidebarItem'
import TopHeader from '@/layout/components/TopHeader'
import variables from '@/styles/variables.scss'

export default {
  components: { SidebarItem, Logo, TopHeader },
  computed: {
    ...mapGetters([
      'sidebar'
    ]),
    routes() {
      return this.$router.options.routes
    },
    activeMenu() {
      const route = this.$route
      const { meta, path } = route
      // if set path, the sidebar will highlight the path you set
      if (meta.activeMenu) {
        return meta.activeMenu
      }
      return path
    },
    showLogo() {
      return this.$store.state.settings.sidebarLogo
    },
    variables() {
      return variables
    },
    isCollapse() {
      return !this.sidebar.opened
    },
    activeModule() {
      return this.$store.state.status.active_module
    }
  },
  watch: {
    // '$store.getters.active_module': {
    //   handler: function(to, from) {
    //     console.log('router from ' + from.path + ' to ' + to.path)
    //     console.log(to)
    //   }
    // }
    activeModule(to, from) {
      console.log('module is change, new module is ' + to)
    }

  },
  created() {
    // this.showRouter()
  },
  methods: {
    showRouter() {
      console.log('this.routes')
      console.log(this.routes)
      console.log('this.$router')
      console.log(this.$router)
      console.log('-------------------------')
      console.log('this.$route.path')
      console.log(this.$route.path)
      console.log('-------------------------')
    }
  }
}
</script>
