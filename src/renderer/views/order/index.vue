<style lang="less" src="./styles/index.less" scoped></style>
<template>
  <div>order</div>
</template>
<script>
export default {
  name: 'Order',
  data () {
    return {
      show: false
    }
  },
  mounted () {
    console.error('order')
  },
  methods: {
    query (data) {
      console.error(data)
    }
  }
}
</script>
