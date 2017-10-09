<template>
  <div>
    <div class="order">
      <h4>
        <span>订单</span>
        <span class="pull-right">早餐</span>
      </h4>
    </div>
    <!-- 我的订单 -->
    <div class="my-order">
      <div class="my-order-title">
        <h5>我的订单</h5>
        <h5 style="float:right">全部订单 <span class="glyphicon glyphicon-menu-right"></span></h5>
      </div>
    </div>
    <ul class="my-order-list">
      <li v-for="item in myOrderTitle">
        <div class="order-pic"><img :src="item.src" alt=""></div>
        <div class="order-detail">
          <p class="pull-right order-state">{{item.orderState}}</p>
          <h4 class="sj-name">{{item.sjName}}</h4><span class="glyphicon glyphicon-menu-right" style="margin-left:10px;"></span>
          <p class="order-date">{{item.orderDate}}</p>
          <div class="food-name">{{item.foodName}}</div>
          <div class="food-price">{{item.foodPrice}}</div>
          <div class="repurchase">
            <button>再来一单</button>
          </div>
        </div>
      </li>
    </ul>
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
      myOrderTitle:[
        {
          src: require('../assets/images/3.jpg'),
          orderState:'订单已完成',
          sjName:'巴蜀鱼当家',
          orderDate:'22小时47分钟前',
          foodName:'重庆酸菜鱼-小',
          foodPrice:'￥13',
        },
        {
          src: require('../assets/images/1.jpg'),
          orderState:'订单已完成',
          sjName:'巴蜀鱼当家',
          orderDate:'24小时47分钟前',
          foodName:'重庆酸菜鱼-小',
          foodPrice:'￥13',
        },
        {
          src: require('../assets/images/2.jpg'),
          orderState:'订单已完成',
          sjName:'巴蜀鱼当家',
          orderDate:'22小时47分钟前',
          foodName:'重庆酸菜鱼-小',
          foodPrice:'￥13',
        },
        {
          src: require('../assets/images/4.jpg'),
          orderState:'订单已完成',
          sjName:'巴蜀鱼当家',
          orderDate:'22小时47分钟前',
          foodName:'重庆酸菜鱼-小',
          foodPrice:'￥13',
        }
      ]
    }
  },
  methods: {
    
  }
}
</script>

<style scoped>
.order{
  padding:10px 15px;
  background:#EC8B65;
  color:#fff;
}
.my-order-title{
  padding:10px 8px;
  background:#fff;
}
.my-order-title h5{
  display:inline-block;
}
.my-order-title h5:first-child{
  color:#000;
  font-weight:800;
  font-size:18px;
}
.my-order-title h5:last-child{
  color:#EC8B65;
  font-weight:900;
  font-size:15px;
}
.order-pic img{
  width:60px;
  height:60px;
}
.order-pic{
  float:left;
  margin-right:5px; 
  width:18%;
}
.order-detail{
  display:inline-block;
  width:100%;
  width:75%;
}
.sj-name{
  display: inline;
  font-weight: 900;
  margin-bottom:5px;
  color:#000;
}
.order-state{
  font-size:15px;
}
.order-date{
  margin-top:6px;
  color:#aaa;
}
.food-name{
  font-size:16px;
  color:#aaa;
  margin-top:18px;
}
.food-price{
  font-size: 17px;
  font-weight: bold;
  margin-top:15px;
}
.repurchase{
  text-align:right;
  margin-top:20px;
}
.repurchase button{
  padding:10px 18px; 
  color:#EC8B65;
  background:transparent;
  border:1px solid #EC8B65;
  border-radius:3px;
}
.my-order-list{
  background:#fff;
}
.my-order-list li{
  padding-bottom:15px;
  padding-top:15px;
  border-bottom:1px solid #ddd;
}
</style>
