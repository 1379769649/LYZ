<template>
  <div style="margin-top:35px;">
    <div class="app-header">
      <span class="glyphicon glyphicon-cog pull-right"></span>
      <span class="glyphicon glyphicon-bell pull-right" style="margin-right:10px;"></span>
      <div>我的</div>
    </div>
    <div class="user-msg">
      <div class="pull-right glyphicon glyphicon-chevron-right right-arrows"></div>
      <div class="user-pic">
        <img src="../assets/images/4.jpg" alt="">
      </div>
      <div class="user-title">
        <h4>稻城</h4>
        <p class="user-phone">1479****119</p>
      </div>
    </div>
    <!-- 钱包 -->
    <div class="wallet">
      <ul>
        <li>
          <h3 style="color:#F78A00">￥658</h3>
          <div>钱包</div>
        </li>
        <li>
          <h3 style="color:#EB5130">7个</h3>
          <div>优惠</div>
        </li>
        <li style="border-right:0">
          <h3 style="color:#6AA625">15460分</h3>
          <div>积分</div>
        </li>
      </ul>
    </div>
    <!-- 收货地址 -->
    <div class="my-site">
      <ul>
        <li>
          <span class="glyphicon glyphicon-map-marker my-icon" style="color:#F87B5A"></span>
          收货地址
        </li>
        <li>
          <span class="glyphicon glyphicon-heart my-icon" style="color:#F87B5A"></span>
          我的收藏
        </li>
      </ul>
      <ul>
        <li>
          <span class="glyphicon glyphicon-fire my-icon" style="color:#F87B5A"></span>
          服务中心
        </li>
        <li>
          <span class="glyphicon glyphicon-thumbs-up my-icon" style="color:#F87B5A"></span>
          欢迎评分
        </li>
        <li>
          <span class="glyphicon glyphicon-phone-alt my-icon" style="color:#F87B5A"></span>
          加盟合作
        </li>
      </ul>
    </div>
    
    <foot></foot>
  </div>
</template>

<script>
import foot from './Foot'
export default {
  components:{
    foot
  },
  data () {
    return {
      
    }
  },
  methods: {
    
  }
}
</script>

<style scoped>
.app-header{
  background:#EC8B65;
  color:#fff;
  font-size:20px;
  padding:0.08rem 0.15rem;
  position:fixed;
  width:100%;
  top:0;
  left:0;
  height:35px;
}
.user-msg{
  background:#EC8B65;
  color:#fff;
  padding:0.08rem 0.15rem;
  height:106px;
}
.user-pic{
  display: inline-block;
  border-radius: 50%;
}
.user-pic img{
  vertical-align: middle;
}
.user-title{
  display: inline-block;
  vertical-align: middle;
}
.user-phone{
  font-size: 16px;
}
.right-arrows{
  font-size:23px;
  margin-top:28px;
}
.wallet{
  background:#fff;
}
.wallet ul{
  border-bottom:1px solid #ddd;
}
.wallet ul li{
  display: inline-block;
  width:32.7%;
  text-align: center;
  border-right:1px solid #ddd;
  padding-bottom:10px;
}
.my-icon{
  font-size:18px;
  margin:10px;
}
.my-site{
  margin-top:5px;
  font-size:16px;
}
.my-site ul{
  background:#fff;
}
.my-site ul li{
  padding:5px;
  border-bottom:1px solid #ddd;
}
</style>
