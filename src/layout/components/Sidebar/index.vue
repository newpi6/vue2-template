<template>
  <div>
    <div :class="{'has-logo':showLogo}">
      <logo v-if="showLogo" :collapse="isCollapse" />
      <el-scrollbar wrap-class="scrollbar-wrapper">
        <el-menu
          :default-active="activeMenu"
          :collapse="isCollapse"
          :background-color="variables.menuBg"
          :text-color="variables.menuText"
          :default-openeds="opendedMenu"
          :unique-opened="false"
          :active-text-color="variables.menuActiveText"
          :collapse-transition="false"
          mode="vertical"
        >
          <span v-for="route in routes" :key="route.path">
            <span v-if="route.meta">
              <span v-if="route.meta.module === activeModule">
                <sidebar-item :item="route" :base-path="route.path" />
              </span>
            </span>
          </span>
          <!--          <sidebar-item v-for="route in routes" :key="route.path" :item="route" :base-path="route.path" />-->
        </el-menu>
      </el-scrollbar>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Logo from './Logo'
import SidebarItem from './SidebarItem'
import variables from '@/styles/variables.scss'

export default {
  components: { SidebarItem, Logo },
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
      // console.log('**', path)
      return path
    },
    opendedMenu() {
      const memu_list = []
      this.$router.options.routes.forEach(value => {
        memu_list.push(value.path)
      })
      return memu_list
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
    // activeModule(to, from) {
    //   console.log('module is change, change  old module ' + from + ' to new module' + to)
    // }

  },
  created() {
    this.showRouter()
  },
  methods: {
    showRouter() {
      if (this.$route.meta && this.$route.meta.module) {
        this.$store.state.status.active_module = this.$route.meta.module
      }
    }
  }
}
</script>
