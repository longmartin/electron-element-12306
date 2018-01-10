<style lang="less" src="./styles/index.less" scoped></style>
<template>
  <el-dialog
  title="登录"
  :visible.sync="show"
  width="50%"
  center>
    <el-form ref="login_form" :model="formData" :rules="{}" label-width="3rem">
      <el-form-item label="账号" prop="username">
        <el-input v-model="formData.username" placeholder="请输入12306账号"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input type="password" v-model="formData.password" placeholder="请输入密码"></el-input>
      </el-form-item> 
      <el-form-item>
        <el-checkbox v-model="rememberme" label="记住我？" name="rememberme"></el-checkbox>
        <el-checkbox v-model="autologin" label="自动登录" name="autologin"></el-checkbox>
      </el-form-item>
    </el-form>
    <span slot="footer" class="dialog-footer">
      <el-button @click="modal = false">取 消</el-button>
      <el-button type="primary" @click="login">登录</el-button>
    </span>
  </el-dialog>
</template>

<script>
import utils from '../../libs/utils'

export default {
  name: 'Login',
  data () {
    return {
      show: false,
      loginUsers: [],
      userInfo: null,
      formData: {username: '', password: ''},
      rememberme: true,
      autologin: true,
      formRules: []
    }
  },
  watch: {
    rememberme (value) {
      if (!value) {
        this.autologin = false
      }
    },
    autologin (value) {
      if (value) {
        this.rememberme = true
      }
    }
  },
  mounted () {
    const loginUsers = utils.getLoginModel()

    loginUsers.map(item => {
      this.loginUsers.push({text: item.userName, value: item.password, rememberme: item.rememberme, autoLogin: item.autoLogin})
    })
  },
  methods: {
    dialogShow () {
      this.$refs.txtLoginUser.focus()
    },
    // 选择登录用户
    selectLoginUser (user) {
      this.userInfo = user
      this.userName = user.text
      this.password = user.value
      this.rememberme = user.rememberme
      this.autoLogin = user.autoLogin

      if (user.autoLogin) {
        this.login()
      }
    },

    inputChange (value) {
      this.userName = value
    },

    /**
     * 登录
     */
    login () {
      if (!this.userName || !this.password) {
        this.$message({
          'type': 'warning',
          'message': '账号或密码不能为空',
          'showClose': true,
          'duration': 1000
        })
        return false
      }
      return true
      // this.$root.$emit('bv::hide::modal', 'loginModal')
      // this.$root.$emit('bv::show::modal', 'captchCodeModal')
    }
  }
}
</script>
