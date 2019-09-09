<template>
  <div id="app">
    <Header></Header>
    <div class="header1">
      <div v-for="(item,index) in header2Text" :class="{'choseHeader':index==choseIndex}" :key="index"
        @click="goto(item.router,index)">
        {{item.title}}
      </div>
    </div>
    <div class="pageContain">
      <router-view />
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
  import Header from './view/page/header'
  import Footer from './view/page/footer'
  export default {
    name: 'App',
    components: {
      Header: Header,
      Footer:Footer
    },
    data() {
      return {
        choseIndex: '',
        header2Text: [{
          title: '网站首页',
          router: '/'
        }, {
          title: '关于公司',
          router: '/company'
        }, {
          title: '新闻中心',
          router: '/newInfo'
        }, {
          title: '产品中心',
          router: '/product'
        }, {
          title: '合作加盟',
          router: '/cooperate'
        }, {
          title: '联系我们',
          router: '/callUs'
        }]
      }
    },
    mounted() {
      this.fontSizeSet()
      for(let i=0;i<this.header2Text.length;i++){
        if(this.$route.path==this.header2Text[i].router){
          this.choseIndex=i;
        }
      }
    },
    methods: {
      goto(router, index) {
        this.choseIndex = index;
        this.$router.push(router)
      },
      fontSizeSet() {
        (function (doc, win) {
          var docEl = doc.documentElement,
            resizeEvt = "orientationchange" in window ? "orientationchange" : "resize",
            recalc = function () {
                var width = docEl.clientWidth / 120;
                docEl.style.fontSize = width + "px";
              
            };
          if (!doc.addEventListener) return;
          win.addEventListener(resizeEvt, recalc, false);
          doc.addEventListener("DOMContentLoaded", recalc, false);
        })(document, window);
      }
    }
  }

</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
  html{
    min-width: 1180px;
  }

  body {
    margin: 0;
    padding: 0px;
  }

  .header1 {
    height: 55px;
    background: #484747;
    padding: 0 15%;
    line-height: 55px;
    display: flex;
    justify-content: space-around;
    color: white;
  }

  .header1>div {
    padding: 0 20px;
    cursor: pointer;
  }

  .header1>div:hover {
    background: white;
    color: black;
  }

  .header1 .choseHeader {
    background: white;
    color: black;
    padding: 0 20px;
    cursor: pointer;
  }
  .pageContain{
    min-height: calc(100vh - 150px);
  }

</style>
