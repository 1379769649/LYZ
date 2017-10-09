<template>
  <div>
  <!-- 头部 -->
    <div class="app-header">
      <!-- 地址 -->
      <div class="site">
        <h4><span class="glyphicon glyphicon-map-marker"></span>广东省深圳市罗湖区</h4>
      </div>
      <!-- 搜索框 -->
      <div class="search">
        <input type="text" placeholder="搜索商家，商品名称">
      </div>
      <!-- 搜索框底下的列表 -->
      <div class="cate-list">
        <ul>
          <li v-for="item in cateList">
            <a @click="toggle(item.url,$event)">{{item.name}}</a>
          </li>
        </ul>
      </div>
    </div>
<!-- 主体 -->
    <div class="app-content">
      <transition name="slide-trans">
        <ul id="cate-nav" @touchmove="cateNavToggle(1)" :class="{cateNavActive:0===number}">
          <li v-for="item in cateNav">
            <a :href="item.url">
              <img :src="item.src"><br>
              <em>{{item.title}}</em>
            </a>
          </li>
        </ul>
      </transition>
      <transition name="slide-trans-old">
        <ul id="cate-nav2" class="" @touchmove="cateNavToggle(0)" :class="{cateNavActive:1===number}">
          <li v-for="item in cateNav2">
            <a :href="item.url">
              <img :src="item.src"><br>
              <em>{{item.title}}</em>
            </a>
          </li>
        </ul>
      </transition>
      <!-- 导航指示器 -->
      <ul class="indicators">
        <li :class="{indicatorsActive:0===number}"></li>
        <li :class="{indicatorsActive:1===number}"></li>
      </ul>
    </div>
    <!-- 推荐商家 -->
    <div>
      <h4 class="recommendMerchant">推荐商家</h4>
      <ul class="recommendMerchantList">
        <li v-for="item in recommendMerchantList">
          <a @click="merchantSkip(item.url,$event)">
            <div class="tradePic"><img :src="item.src"></div>
            <ul class="tradeList">
              <li class="tradeTitle">{{item.title}}</li>
              <li class="tradeGrade">
                <span class="glyphicon glyphicon-star"></span>
                <span class="glyphicon glyphicon-star"></span>
                <span class="glyphicon glyphicon-star"></span>
                <span class="glyphicon glyphicon-star"></span>
                <span>4.7</span> &nbsp;&nbsp;<span class="sale">{{item.sale}}</span>
              </li>
              <li>{{item.send}}</li>
            </ul>
          </a>
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
      number: 0,
      recommendMerchantList: [
        {
          url : '/CommodityList',
          src : require('../assets/recommend/recommend.jpg'),
          title : '手工面草叶汤',
          sale : '月售51单',
          send : '￥20起送 /  免配送费'
        },
        {
          url : '/CommodityList',
          src : require('../assets/recommend/recommend2.jpg'),
          title : '漳州小吃',
          sale : '月售185单',
          send : '￥15起送 / 免配送费'
        },
        {
          url : '/CommodityList',
          src : require('../assets/recommend/recommend3.jpg'),
          title : '荣誉国宴',
          sale : '月售520单',
          send : '￥20起送 / 免配送费'
        },
        {
          url : '/CommodityList',
          src : require('../assets/recommend/recommend4.jpg'),
          title : '厦门蠔干粥(登高店)',
          sale : '月售1874单',
          send : '￥15起送 / 免配送费'
        },
        {
          url : '/CommodityList',
          src : require('../assets/recommend/recommend5.jpg'),
          title : '名都饭店客家菜',
          sale : '月售1241单',
          send : '￥18起送 / 免配送费'
        }
      ],
      cateList: [
        {
          name : '鱼头粉',
          url : ''
        },
        {
          name : '烧仙草',
          url : ''
        },
        {
          name : '鸭头',
          url : ''
        },
        {
          name : '披萨',
          url : ''
        },
        {
          name : '麻辣烫',
          url : ''
        }
      ],
      cateNav: [
        {
          src: require('../assets/images/1.jpg'),
          title: '果蔬生鲜',
          url : ''
        },
        {
          src: require('../assets/images/2.jpg'),
          title: '商超便利',
          url : ''
        },
        {
          src: require('../assets/images/3.jpg'),
          title: '甜品饮品',
          url : ''
        },
        {
          src: require('../assets/images/4.jpg'),
          title: '汉堡薯条',
          url : ''
        },
        {
          src: require('../assets/images/5.jpg'),
          title: '美食',
          url : ''
        },
        {
          src: require('../assets/images/6.jpg'),
          title: '新店特惠',
          url : ''
        },
        {
          src: require('../assets/images/7.jpg'),
          title: '晚餐',
          url : ''
        },
        {
          src: require('../assets/images/8.jpg'),
          title: '准时达',
          url : ''
        }
      ],
      cateNav2: [
        {
          src: require('../assets/images/9.jpg'),
          title: '包子粥店',
          url : ''
        },
        {
          src: require('../assets/images/10.jpg'),
          title: '鲜花蛋糕',
          url : ''
        },
        {
          src: require('../assets/images/11.jpg'),
          title: '麻辣烫',
          url : ''
        },
        {
          src: require('../assets/images/12.jpg'),
          title: '地方菜系',
          url : ''
        },
        {
          src: require('../assets/images/13.jpg'),
          title: '披萨意面',
          url : ''
        },
        {
          src: require('../assets/images/13.jpg'),
          title: '异国料理',
          url : ''
        }
      ]
    }
  },
  methods: {
    //搜索框下面的点击跳转
    toggle:function(url){
      //console.log(event.currentTarget)
      this.$router.push({ 
          path:url,
          query: { type: 'LYZ' }
      })

    },
    //导航切换分页
    cateNavToggle:function(index){
      this.number=index
    },
    merchantSkip:function(url){
      let e=event.currentTarget;//获取当前元素
      let title=$(e).children().children(".tradeTitle").text();
      let src=$(e).children().children("img").attr("src");
      this.$router.push({
        path:url,
        query : {
            title:title,
            src : src
        }
      })
      
    }
  }
}
</script>

<style scoped>
.app-header{
  padding:0 0.1rem;
  padding-top:0.1rem;
  background: -webkit-linear-gradient(left,#EE9468,#CC5020);
  color:#fff;
}
.app-header .search input{
  width:100%;
  height:0.4rem;
  color:#333;
  border-radius:2px;
  font-size:0.15rem;
  text-align:center;
}
.app-header .cate-list ul li{
  display: inline-block;
  width:18%;
  text-align:center;
  margin:0.1rem 0;
}
.app-content{
  position: relative;
  height:180px;
}
#cate-nav,#cate-nav2{
  position:absolute;
  top:0;
  left:0;
  width:100%;
  display:none;
}
#cate-nav li,#cate-nav2 li{
  display: inline-block;
  width:25%;
  text-align: center;
  margin:0.08rem 0;
}
#cate-nav img,#cate-nav2 img{
  width:0.55rem;
  height:0.55rem;
}
.app-content .cateNavActive{
  left:-100%;
  transition:all .5s linear;
  display:block !important;
}
.indicators{
  position:absolute;
  bottom:0;
  width:100%;
  margin-bottom:0;
  text-align:center;
}
.indicators li{
  width:0.2rem;
  height:0.05rem;
  border:1px solid #ddd;
  display: inline-block;
  border-radius:3px;
  margin-right:0.05rem;
  background:#CCCCCC;
}
.indicatorsActive{
  background:#666666 !important;
}
.slide-trans-enter-active {
  transition: all .5s;
}
.slide-trans-enter {
  transform: translateX(900px);
}
.slide-trans-old-leave-active {
  transition: all .5s;
  transform: translateX(-900px);
}
.recommendMerchant{
  margin-left:0.15rem;
  font-weight: 700;
}
/***************推荐商家*****************/
.tradePic {
  float:left;
}
.tradePic img{
  width:70px;
  height:70px;
  margin:0 0.15rem;
}
.tradeList{
  float:left;
}
.tradeTitle{
  font-size:18px;
  font-weight:600;
}
.tradeGrade{
  color:#FFAA0C;
  padding:0.1rem 0;
}
.recommendMerchantList li:after{
  content: " ";
  display:table;
  clear: both;
 }
 .recommendMerchantList>li{
  border-bottom:1px solid #ddd;
  padding-bottom:0.1rem;
  padding-top:0.1rem;
 }
 .sale{
  color:#5e5e5e;
 }
</style>
