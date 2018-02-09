<style lang="less" src="./styles/index.less" scoped></style>
<template>
  <div>query</div>
</template> 
<script>
export default {
  name: 'Query',
  data () {
    return {
      show: false
    }
  },
  mounted () {
    console.error('query')
  },
  methods: {
    query (data) {
      console.error(data)
    }
  }
}
</script>
