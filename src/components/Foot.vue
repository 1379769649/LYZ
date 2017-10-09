<template>
    <div class="app-footer">
      <ul>
        <li v-for="item in footerList">
          <router-link active-class="in" :to="item.url">
            <span :class="item.icon"></span><br>
            <em>{{item.content}}</em>
          </router-link>
        </li>
      </ul>
    </div>
</template>


<script>
export default {
  data () {
    return {
      footerList: [
        {
          icon :'glyphicon glyphicon-cutlery',
          content: '外卖',
          url : '/'
        },
        {
          icon :'glyphicon glyphicon-screenshot',
          content: '发现',
          url : '/Discover'
        },
        {
          icon :'glyphicon glyphicon-list-alt',
          content: '订单',
          url : '/Order'
        },
        {
          icon :'glyphicon glyphicon-user',
          content: '我的',
          url : '/Me'
        }
      ]
    }
  },
  methods: {
    
  }
}
</script>

<style scoped>
/***********************页脚开始**************************/
.app-footer {
  position:fixed;
  bottom:0;left:0;
  border-top:1px solid #E1E1E1;
  width:100%;
  padding:0.05rem 0;
  background: -webkit-linear-gradient(left,#D8304B,#ED8E66);
}
.app-footer ul {
  margin: 0;
}
.app-footer ul li {
  color:#fff;
  display: inline-block;
  width:24%;
  text-align:center
}
.app-footer ul li a span {
  padding-bottom:0.05rem;
  font-size:0.20rem;
}
.app-footer ul li a em {
  font-size:0.12rem;
}
.app-footer ul .router-link-exact-active{
  color:#D05728 !important;
}
/***********************页脚结束**************************/
</style>
