<template>
  <!-- 商家页面 -->
  <div style="margin-top:190px;">
  <!-- 头部 -->
    <div class="app-header">
      <div class="glyphicon glyphicon-chevron-left last" @click="last()"></div>
      <div class="merchant-msg">
        <div class="merchant-pic"><img :src="this.$route.query.src" alt=""></div>
        <h4 class="merchant-title">{{this.$route.query.title}}</h4>
        <div class="merchant-txt">公告：开心就要咔滋咔滋，欢迎手工面草叶汤，很高兴为您服务。如您订餐有特殊要求，请在下单时备注。如有不明处，欢迎致电联系本餐厅，我们将竭诚为您服务！
          </div>
      </div>
        <!-- 商品，评价，店铺 -->
      <div class="merchant-detail">
        <ul>
          <li v-for="(item,index) in merchantDetailList" :class="{merchantDetailActive:index===number}" @click="toggle(index)">{{item.name}}</li>
        </ul>
      </div>
    </div>
  <!-- 主体详情 -->
    <div class="app-content" :class="{'cutContent':0===number}" :style="{height:height}">
      <!-- 商品列表 -->
      <div class="merchant-food-list">
        <!-- 分类 -->
        <div class="food-classify">
          <ul>
            <li v-for="(item,index) in foodClassifyList" :class="{foodClassifyActive:foodClassifyIndex===index}" @click="foodClassifyActive(index)">
              <a :href="item.url">{{item.title}}</a>
            </li>
          </ul>
        </div>
        <!-- 食品列表 -->
        <div class="food-list">
          <div v-for="product in foodList" :id="product.id">
            <div class="food-list-title">{{product.title}}</div>
            <ul class="food-list-ul">
              <li v-for="item in product.broad">
                <div class="food-list-pic"><img :src="item.src" alt=""></div>
                <div class="food-list-detail">
                  <h4 class="food-list-name">{{item.name}}</h4>
                  <p>{{item.sale}}</p>
                  <div class="cartbutton">
                    <span class="glyphicon glyphicon-minus remove"></span>
                    <span class="">1</span>
                    <span class="glyphicon glyphicon-plus add"></span>
                  </div>
                  <em class="price">{{item.price}}</em>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <!-- 页尾 -->
      <div class="footer">
        <!-- 购物车图标 -->
        <div class="cart">
          <div class="cart-2 glyphicon glyphicon-shopping-cart"></div>
        </div>
        <!-- 总价格 -->
        <div class="total-price">
          <h4>￥0</h4>
          <div>免配送费</div>
        </div>
        <!-- 去结算 -->
        <div class="my-close">
          <h4>￥20起送</h4>
        </div>
      </div>
    </div>
    <!-- 评论 -->
    <div :class="{'cutContent':1===number}" class="comment-merchant" :style="{height:height}">
      <div class="all-comments">
        <!-- 综合评价 -->
        <div class="comments-left">
          <div class="comments-minute">4.0</div>
          <p class="evaluate-1">综合评价</p>
          <p class="evaluate-2">高于周边商家33.5%</p>
        </div>
        <!-- 评论服务 -->
        <div class="comments-right">
          <ul>
            <li>
              <em>服务态度</em>
              <span class="glyphicon glyphicon-star"></span>
              <span class="glyphicon glyphicon-star"></span>
              <span class="glyphicon glyphicon-star"></span>
              <span class="glyphicon glyphicon-star"></span>
              <span class="serve-minute">4</span>
            </li>
            <li>
              <em>菜品评价</em>
              <span class="glyphicon glyphicon-star"></span>
              <span class="glyphicon glyphicon-star"></span>
              <span class="glyphicon glyphicon-star"></span>
              <span class="glyphicon glyphicon-star"></span>
              <span class="serve-minute">4</span>
            </li>
            <li>
              <em>送达时间</em>
              <span>22分钟</span>
            </li>
          </ul>
        </div>
      </div>
      <!-- 客户评论 -->
      <div class="customer-comments">
        <!-- 分类 -->
        <div class="comments-classify">
          <button class="btn btn-info">全部(9)</button>
          <button class="btn btn-info">满意(9)</button>
          <button class="btn btn-info">不满意(0)</button>
        </div>
        <!-- 评论列表 -->
        <ul class="comments-list">
          <li>
            <h4 class="user-name">匿名用户</h4>
            <p class="comment-date pull-right">2017-08-16</p>
            <p class="comment-value">
              <span class="glyphicon glyphicon-star"></span>
              <span class="glyphicon glyphicon-star"></span>
              <span class="glyphicon glyphicon-star"></span>
              <em>20分钟送达</em>
            </p>
            <p><button class="btn btn-xs">卤蛋</button>  &nbsp;<button class="btn btn-xs">菊花茶</button></p>
          </li>
          <li>
            <h4 class="user-name">匿名用户</h4>
            <p class="comment-date pull-right">2017-08-16</p>
            <p class="comment-value">
              <span class="glyphicon glyphicon-star"></span>
              <span class="glyphicon glyphicon-star"></span>
              <span class="glyphicon glyphicon-star"></span>
              <em>20分钟送达</em>
            </p>
            <p><button class="btn btn-xs">卤蛋</button>  &nbsp;<button class="btn btn-xs">菊花茶</button></p>
          </li>
          <li>
            <h4 class="user-name">匿名用户</h4>
            <p class="comment-date pull-right">2017-08-16</p>
            <p class="comment-value">
              <span class="glyphicon glyphicon-star"></span>
              <span class="glyphicon glyphicon-star"></span>
              <span class="glyphicon glyphicon-star"></span>
              <em>20分钟送达</em>
            </p>
            <p><button class="btn btn-xs">卤蛋</button>  &nbsp;<button class="btn btn-xs">菊花茶</button></p>
          </li>
        </ul>
      </div>
    </div>
    <!-- 店铺 -->
    <div :class="{'cutContent':2===number}" class="comment-merchant" :style="{height:height}">
      <div class="business-activiti">
        <h5 class="activiti-title">活动与属性</h5>
        <ul class="activiti-list">
          <li>新用户首单立减6.0元(不与其他活动同享)</li>
          <li>满20减10，满40减20</li>
          <li>披萨八折了</li>
        </ul>
      </div>
      <div class="business-live-action">
        <h5 class="activiti-title">商家实景</h5>
        <div>
          <img src="../assets/images/3.jpg" alt="">
          <img src="../assets/images/4.jpg" alt="">
        </div>
      </div>
      <div class="business-live-action" style="padding-bottom:0.2rem">
        <h5 class="activiti-title">商家信息</h5>
        <div class="business-site">地址：广东省深圳市罗湖区</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      number : 0,
      foodClassifyIndex: 0,
      height:parseInt(window.screen.height)-190+"px",
      //商家食品列表
      foodList:{
        list1:{
          title : '热销',
          id : 'list1',
          broad:[
            {
              src : require("../assets/CommodityList/food1.jpg"),
              name : '脆皮手枪腿',
              sale : '月售165份 好评率96%',
              price : '￥23'
            },
            {
              src : require("../assets/CommodityList/food2.jpg"),
              name : '香辣鸡翅/2块',
              sale : '月售1605份 好评率100%',
              price : '￥11'
            },
            {
              src : require("../assets/CommodityList/food3.jpg"),
              name : '新脆皮炸鸡',
              sale : '月售90份 好评率100%',
              price : '￥12'
            },
            {
              src : require("../assets/CommodityList/food4.jpg"),
              name : '魔法鸡块/6块',
              sale : '月售65份 好评率100%',
              price : '￥13'
            },
            {
              src : require("../assets/CommodityList/food5.jpg"),
              name : '土耳其风味鸡翅',
              sale : '月售58份 好评率100%',
              price : '￥18'
            },
          ]
        },
        list2:{
          title : '特惠餐',
          id : 'list2',
          broad:[
            {
              src : require("../assets/CommodityList/food6.jpg"),
              name : '脆皮手枪腿',
              sale : '月售165份 好评率96%',
              price : '￥23'
            },
            {
              src : require("../assets/CommodityList/food7.jpg"),
              name : '香辣鸡翅/2块',
              sale : '月售1605份 好评率100%',
              price : '￥11'
            },
            {
              src : require("../assets/CommodityList/food8.jpg"),
              name : '新脆皮炸鸡',
              sale : '月售90份 好评率100%',
              price : '￥12'
            },
            {
              src : require("../assets/CommodityList/food9.jpg"),
              name : '魔法鸡块/6块',
              sale : '月售65份 好评率100%',
              price : '￥13'
            },
            {
              src : require("../assets/CommodityList/food10.jpg"),
              name : '土耳其风味鸡翅',
              sale : '月售58份 好评率100%',
              price : '￥18'
            },
          ]
        }
      },
      //商家导航
      foodClassifyList:[
        {
          title : '热销',
          url : '#list1'
        },
        {
          title : '特惠餐',
          url : '#list2'
        },
        {
          title : '超值热销',
          url : '#list3'
        },
        {
          title : '饮品',
          url : '#list4'
        },
        {
          title : '主餐',
          url : '#list5'
        },
        {
          title : '副餐',
          url : '#list6'
        },
        {
          title : '炸鸡',
          url : '#list7'
        },
        {
          title : '饮料',
          url : '#list8'
        },
        {
          title : '悠闲下午茶',
          url : '#list9'
        },
        {
          title : '小食',
          url : '#list10'
        }
      ],
      merchantDetailList:[
        {name:"商品"},
        {name:"评价"},
        {name:"店铺"}
      ]
    }
  },
  methods: {
    last:function(){//返回上一页
      window.history.go(-1)
    },
    //商品   评论    店铺
    toggle:function(index){
      this.number=index
    },
    //商品分类
    foodClassifyActive:function(index){
      this.foodClassifyIndex=index
    },
    cutContent:function(index){
      this.number=index
    },
  }
}
</script>

<style scoped>
.app-header{
  width:100%;
  height:2rem;
  background: -webkit-linear-gradient(left,#ddd,#BEB9C2);
  position: fixed;
  top:0;
  left:0;
  z-index:100;
}
.last{
  color:#fff;
  padding:0.05rem;
  padding-left:0.2rem;
  font-size:0.3rem;
}
.merchant-msg{
  padding-left:0.2rem;
  padding-top:0.2rem;
}
.merchant-pic{
  float: left;
}
.merchant-pic img{
  width:80px;
  height:80px;
  margin:0 0.15rem 0.1rem 0rem;
}
.merchant-title{
  font-weight:700;
  color:#fff;
  margin-top:0;
}
.merchant-txt{
  color:#fff;
}
.merchant-detail{
  width:100%;
  height:40px;
  background: #fff;
  float:left;
  position: fixed;
  top:150px;
  left:0;
  z-index:100;
}
.merchant-detail ul li{
  float:left;
  width:33%;
  text-align:center;
  line-height:40px;
  font-size:16px;
}
.merchant-detail .merchantDetailActive{
  color:#3190E8;
  font-size:18px;
  font-weight:600;
}
.merchant-food-list{
  background:#fff;
  height:100%;
}
.merchant-food-list:after{
  content: "";
  display: table;
  visibility: hidden;
  clear: both;
}
.food-classify{
  width:25%;
  float:left;
  background:#F8F8F8;
  height:100%;
  overflow-y:auto; 
}
.food-classify ul{
  height:100%;
}
.food-list{
  width:75%;
  float:left;
  overflow-y:auto;
  height:100%; 
}
.food-classify ul li{
  width:100%;
  height:50px;
  line-height:50px;
  font-size:15px;
  padding-left:10px;
  border-bottom:1px solid #F4F4F4;
  border-left:2px solid transparent;
}
.food-classify ul li a{
  width:100%;
  height:100%;
  display: inline-block;
}
.foodClassifyActive{
  background:#fff;
  border-left:2px solid #3190E8 !important;
}
.food-list-title{
  font-size:16px;
  font-weight:600;
  padding:0.13rem 0.2rem;
  background:#F1F1F1;
}
.food-list-pic{
  height:100px;
  width:23%;
  float:left;
}
.food-list-pic img{
  width:60px;
  height:60px;
  float:left;
}
.food-list-ul li:after{
  content: " ";
  display: table;
  visibility: hidden;
  clear: both;
}
.food-list-ul li{
  padding-left:0.1rem;
  padding-top:0.1rem;
  border-bottom:1px solid #F4F4F4;
  padding-right:0.25rem;
}
.food-list-detail{
  float:left;
  padding-left:0.2rem;
  width:77%;
}
.food-list-name{
  font-weight: 600;
}
.price{
  font-size:18px;
  color:#FF6600;
  font-weight:600;
}
.cartbutton{
  float:right;
  clear:both;
}
.remove,.add{
  background:#3190E8;
  border-radius:50%;
  color:#fff;
  width:20px;
  height:20px;
  line-height:19px;
  text-align: center;
}
.footer{
  width:100%;
  height:0.7rem;
  position: fixed;
  bottom:0;
  left:0;
  z-index:100;
  background:#505051;
}
.cart{
  width:55px;
  height:55px;
  border-radius:50%;
  border:1px solid #363636;
  background:#505051;
  margin-top:-10px;
  margin-left:20px;
  text-align:center;
  float:left;
}
.cart-2{
  width:45px;
  height:45px;
  line-height: 45px;
  background:#363636;
  color:#5F5F63;
  text-align:center;
  font-size: 18px;
  border-radius: 50%;
  margin-top:3px;
}
.total-price{
  float:left;
  color:#fff;
  margin-left:20px;
}
.total-price h4{
  margin-bottom:2px;
}
.my-close{
  height:100%;
  float:right;
  color:#fff;
  line-height:100%;
  padding-right:20px;
  padding-left:20px;
  margin-top:8px;
  background:#535356;
}
.cutContent{
  display:block !important;
}
.app-content,.comment-merchant{
  display: none;
}
.all-comments{
  padding:0.2rem;
  padding-bottom:0;
  width:100%;
  background: #fff;
  border-top:1px solid #ddd;
}
.all-comments:after{
  content: "";
  display: table;
  visibility: hidden;
  clear: both;
}
.comments-left{
  float:left;
  text-align:center;
  border-right:1px solid #eee;
  margin-right:0.3rem;
  padding-right:0.2rem;
}
.comments-right{
  float:left;
}
.comments-minute{
  font-size:27px;
  color:#FF6600;
  font-weight:600;
}
.evaluate-1{
  font-size:15px;
}
.evaluate-2{
  color:#aaa;
}
.comments-right ul li{
  font-size:14px;
  padding:0.06rem 0;
}
.comments-right ul li span{
  color:#FFAA0C;
}
.comments-right ul li em{
  margin-right:20px; 
}
.serve-minute{
  margin-left:20px;
}
.customer-comments{
  margin-top:15px;
  background:#fff;
}
.comments-classify{
  padding:0.15rem;
  padding-left:20px;
}
.comments-classify button{
  margin-right:10px;
}
.comments-list li{
  padding:0.1rem 0;
  border-top:1px solid #ddd;
  color:#aaa;
  padding-left:0.7rem;
}
.user-name{
  color:#666;
}
.comment-value{
  color:#FFAA0C;
}
.comment-date{
  margin-right:0.2rem;
}
.comment-value em{
  color:#aaa;
  padding-left:0.1rem;
}
.business-activiti{
  background:#fff;
  margin-bottom:0.2rem;
}
.activiti-title{
  padding:0.15rem;
  border-top:1px solid #ddd;
  border-bottom:1px solid #ddd;
  font-weight:600;
  font-size:16px;
}
.activiti-list{
  padding-left:0.3rem;
  padding-bottom:0.1rem;
  padding-top:0;
}
.activiti-list li{
  font-size: 15px;
  padding:0.1rem 0;
}
.business-live-action{
  background:#fff;
}
.business-site{
  font-size:14px;
  padding:0.15rem;
  border-bottom:1px solid #ddd;
}
</style>
