<style lang="less" src="./styles/index.less"></style>
<template>
  <div>
    <header class="fixed nav flex-row justify-center">
      <el-menu :default-active="activeIndex" class="menu-header" mode="horizontal" @select="navChange">
        <el-menu-item index="1">新任务</el-menu-item>
        <el-menu-item index="2">任务管理</el-menu-item>
        <el-menu-item index="3">订单管理</el-menu-item>
      </el-menu>
    </header>
    <main class="absolute main">
      <transition appear enter-active-class="animated zoomInDown">
        <router-view ref="views"></router-view>
      </transition>
    </main>
    <footer class="fixed footer">
      <div class="footer-main flex-row justify-between">
        <div class="text-info" v-if="loginName">
          <i class="fa fa-user-o"></i>
          <span>{{loginName}}，</span>
          <el-button type="primary" @click="logOff">退出</el-button>
        </div>
        <el-button type="primary" v-else><i class="fa fa-user-o"></i>未登录</el-button>
        <el-button type="primary" @click="openAbout"><i class="fa fa-user-o"></i>关于</el-button>
      </div>
    </footer>
    <login ref="loginModal"></login>
  </div>
    <!--
    <login ref="loginModal"></login>
    <captcha-code :type="captchaCodeType" @validComplete="validComplete"></captcha-code>
    <about :show.sync="showAbout" />
    -->
    <!-- <audio id="audioEgg" :src="audioEggUrl" preload="auto" loop style="display: none;" hidden="true"></audio> -->
  </div>
</template>

<script>
// import utils from '../scripts/utils'

export default {
  name: 'Home',
  components: {
    Login: () => import('../user/Login')
    // CaptchaCode: () => import('./CaptchaCode'),
    // About: () => import('../about/About')
  },
  data () {
    return {
      activeIndex: '1',
      navItems: [
        { text: '新任务', active: false, activeClass: '', icon: 'new-task', to: '/' },
        { text: '任务管理', active: false, activeClass: '', icon: 'task-manager', to: '/taskmanager' },
        { text: '我的订单', active: false, activeClass: '', icon: 'order-manager', to: '/myorder' }
      ],
      captchaCodeType: 'login',
      loginName: '',
      showAbout: false,
      audioEggUrl: 'http://dl.stream.qqmusic.qq.com/C400000Pf4Mm18IBYT.m4a?vkey=88CB0751036350F8A286D9FD2A19F38378A12CA232539AFC2903716FA343C309A004D041B73BC994BEA904FB103838D84E1A9C45DA0B665B&guid=8689695976&uin=906040179&fromtag=66'
    }
  },
  mounted () {
    // utils.speech.textToSpeech('Hello！欢迎使用1|2|3|0|6-Electron，祝您购票成功')

    // this.chkeckIsLogin()
    // this.$eventBus.$on('openDialog', (dialog) => {
    //   this.captchaCodeType = dialog === 'captchCodeModal' ? 'order' : 'login'
    //   this.$root.$emit('bv::show::modal', dialog)
    // })
  },
  methods: {
    navChange (key, keyPath) {
      console.error(key, keyPath)
    },

    // navChange (nav) {
    //   nav.active = true
    //   nav.activeClass = 'active'

    //   this.navItems.map((val, index) => {
    //     if (val.text !== nav.text) {
    //       val.active = false
    //       nav.activeClass = ''
    //     }
    //   })
    // },
    // // 获取乘客
    // getPassengers () {
    //   const $newTask = this.$refs.views.$refs

    //   if ($newTask.taskButton) {
    //     $newTask.taskButton.getPassengers()
    //   }
    // },
    // // 检查是否已经登录
    // async chkeckIsLogin () {
    //   const {code, loginName} = await this.$api.chkeckIsLogin()

    //   if (code !== 1) return

    //   this.loginName = loginName

    //   const loginInfo = utils.getLoginModel(loginName)

    //   if (!loginInfo.length) return

    //   this.$store.dispatch('setLoginModel', loginInfo[0])
    //   this.getPassengers()
    // },
    // // 校验验证码完成
    // async validComplete (value) {
    //   if (value.result) {
    //     if (this.captchaCodeType === 'login') {
    //       const login = this.$refs.loginModal
    //       const loginData = {
    //         username: login.userName,
    //         password: login.password
    //       }
    //       const res = await this.$api.login(loginData)

    //       if (res.code !== 1) {
    //         this.$alert(res.message)
    //         this.$root.$emit('bv::show::modal', 'loginModal')
    //         return
    //       }

    //       const loginInfo = {
    //         loginName: res.loginName,
    //         userName: login.userName,
    //         password: login.password,
    //         rememberme: login.rememberme,
    //         autoLogin: login.autoLogin
    //       }

    //       this.loginName = res.loginName
    //       this.$store.dispatch('setLoginModel', loginInfo)
    //       this.getPassengers()
    //     } else {
    //       // 提交订单
    //       const orderData = this.$store.getters.confirmOrderData

    //       utils.task.confirmSubmitOrder(orderData.train, orderData.seatCode, orderData.passengers, orderData.key, value.verifyCode, orderData.index, orderData.awaitTime)
    //     }
    //   }
    // },
    // 关于
    openAbout () {
      this.showAbout = true
    },
    // // 退出登录
    async logOff () {
      // await this.$api.loginOff()
      // // 清除登录信息
      // this.loginName = ''
      // this.$eventBus.$emit('loginOff')
    }
  }
}
</script>
