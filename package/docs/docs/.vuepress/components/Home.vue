<template>
  <section class="wrapper">
    <canvas class="dynamic-bg" ref="dynamicBg"></canvas>
    <div class="content">
      <p class="date"><span>{{getDate().date}}</span>/<span>{{getDate().month}}</span></p>
      <p class="sentence">我抓不住这世间的美好，只能装作万事顺遂的模样。</p>
    </div>
      <div class="search">
          <SearchBox />
      </div>
  </section>
</template>

<script>
import SearchBox from "@SearchBox";
import { setTimeout } from "timers";
import Bg from './../view/home/bg/index'
import Ball from './../view/home/bg/Ball'
export default {
  components: { SearchBox },
  data() {
    return {
      navs: []
    };
  },
  filters: {
    formatLink: link => {
      if (link.endsWith("md")) {
        return "." + link.slice(0, link.lastIndexOf(".") + 1) + "html";
      }
    }
  },
  methods: {
    getDate() {
      return {
        date: new Date().getDate(),
        month: new Date().getMonth() + 1
      }
    },

    initCanvas() {
      let bg = new Bg(this.$refs.dynamicBg)
      bg.init()
    }
  },
  mounted() {
    this.initCanvas()
  }
};
</script>
<style lang="stylus">
* {
  padding 0
  margin 0
}
html, body {
  color #fff;
  width 100%;
  height 100%
  overflow hidden
}

.search .search-box input {
  width: 30rem;
  border-radius: 4px;
}

.search .search-box input + ul {
  display: block !important;
  left: 0;
  z-index: 2;
  width: 30rem !important;
}

.search {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 10vh;
}

.search .links {
  margin-top: 30px;
  z-index: 0;
}

// animation: jump 1000ms 100ms infinite both;
.search .links a {
  padding: 5px 9px;
  margin: 10px;
  border-radius: 18px;
  display: inline-block;
}

.sentence {
    font-size: 30px;
    font-family: '宋体';
    text-align: center;
}


.dynamic-bg {
  position absolute;
  top 0;
  left 0;
  z-index 0;
}

.content {
  background transparent
  position: relative;
  .date {
    text-align center
    font-size: 40px;
    span:nth-child(1) {
      font-size: 40px;
    }
    span:nth-child(2) {
      font-size: 14px;
    }
  }
}


@keyframes jump {
  from, 10% {
    transform: translateY(0) scale3d(1, 1, 1);
  }

  30% {
    transform: translateY(10%) scale3d(1.05, 0.8, 1);
  }

  50% {
    transform: translateY(-50%) scale3d(1, 1.1, 1);
  }

  65% {
    transform: translateY(0) scale3d(1, 1, 1);
  }

  75% {
    transform: translateY(8%) scale3d(1.08, 0.84, 1);
  }

  85% {
    transform: translateY(6%) scale3d(1.05, 0.88, 1);
  }

  90%, to {
    transform: none;
  }
}
</style>
