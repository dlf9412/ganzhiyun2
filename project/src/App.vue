<template>
  <div id="app">
    <Header></Header>
    <div class="header1">
      <div v-for="(item,index) in header2Text" :class="{'choseHeader':index==choseIndex}" :key="index"
        @click="goto(item.router,index)">
        {{item.title}}
        <span v-if="index<header2Text.length-1"></span>
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
    background: rgb(232, 232, 232);
    padding: 0 15%;
    line-height: 55px;
    display: flex;
    justify-content: space-around;
    color: black;
  }

  .header1>div {
    padding: 0 20px;
    cursor: pointer;
    font-size: 1.2rem;
    border-bottom: 2px solid transparent;
    margin: 0 5px;
    width: 13%;
    font-weight: 400;
    position: relative;
  }
  .header1 span{
    position:absolute;
    top: 35%;
    right: -5px;
    display: inline-block;
    width: 1px;
    height: 20px;
    background: black;

  }

  .header1>div:hover {
  
    color: #359b34;
    border-bottom: 2px solid #359b34;
  }

  .header1 .choseHeader {
    /* background:; */
    color: #359b34;
    padding: 0 20px;
    cursor: pointer;
    border-bottom: 2px solid #359b34;
  }
  .pageContain{
    min-height: calc(100vh - 150px);
  }

</style>
