<style lang="less" src="./styles/index.less" scoped></style>
<template>
  <div>task</div>
</template> 
<script>
export default {
  name: 'Task',
  data () {
    return {
      show: false
    }
  },
  mounted () {
    console.error('task')
  },
  methods: {
    query (data) {
      console.error(data)
    }
  }
}
</script>
