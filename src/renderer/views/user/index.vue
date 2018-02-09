<style lang="less" src="./styles/index.less" scoped></style>
<template>
  <div>user</div>
</template> 
<script>
export default {
  name: 'User',
  data () {
    return {
      show: false
    }
  },
  mounted () {
    console.error('user')
  },
  methods: {
    query (data) {
      console.error(data)
    }
  }
}
</script>
