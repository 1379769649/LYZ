<template>
  <div>
    <div class='text-center'>{{msg}}</div>
    <foot></foot>
  </div>
</template>

<script>
import foot from './Foot'
export default {
  components :{
    foot
  },
  data () {
    return {
      msg : '敬请期待更多内容.......'
    }
  },
  methods: {
    
  }
}
</script>

<style scoped>

</style>
