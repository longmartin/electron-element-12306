<style lang="less" src="./styles/index.less" scoped></style>
<template>   
  <el-dialog
    title="关于软件"
    :visible.sync="show"
    width="60%"
  > 
    <div class="about-icon">
      <img :src="appIcon" alt="logo"/>
    </div>
    <h3>{{appName}}</h3>
    <div class="about-info">
      <p class="about-version">版本&nbsp;{{appVersion}}（
        <a href="javascript:;" @click="checkAppUpdate">检查更新</a>）
      </p>
      <p>Copyright&nbsp;&copy;&nbsp;{{currentYear}}&nbsp;
        <a href="javascript:;" class="text-info" @click="openUrl('https://about.me/longwu')">{{appAuthorName}}</a>
      </p>
    </div>
  </el-dialog>
</template>
<script>
export default {
  name: 'About',
  data () {
    return {
      show: false,
      appIcon: require('../../assets/logo.png'),
      appName: '',
      appVersion: '',
      appAuthorName: '',
      currentYear: ''
    }
  },
  mounted () {
    const appInfo = this.$electron.remote.app
    const pakInfo = this.$electron.remote.require('../../package.json')
    const author = pakInfo.author.split(' ') || ['Martin.Long']
    const authorName = author[0]

    this.appName = appInfo.getName()
    this.appVersion = appInfo.getVersion()
    this.appAuthorName = authorName
    this.currentYear = new Date().getFullYear()
  },
  methods: {
    // 检查更新
    checkAppUpdate () {
      const ipcRender = this.$electron.ipcRenderer

      ipcRender.send('checkUpdate')
    },
    // 打开url
    openUrl (url) {
      this.$electron.shell.openExternal(url)
    }
  }
}
</script>
