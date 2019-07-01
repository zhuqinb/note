<template>
  <section class="search-links">
    <div class="search">
      <SearchBox/>
    </div>
    <div class="links">
      <a v-for="(item, index) in navs" :href="item.link|formatLink">{{item.text}}</a>
    </div>
  </section>
</template>

<script>
import SearchBox from '@SearchBox'
export default {
  components: { SearchBox },
  data () {
    return {
      navs: []
    }
  },
  filters: {
    formatLink: link => {
      if (link.endsWith('md')) {
        return '.' + link.slice(0, link.lastIndexOf('.') + 1) + 'html'
      }
    }
  },
  mounted () {
    const { themeConfig: { nav: [navs] } } = this.$site
    this.navs = navs.items
  }
}
</script>
<style lang="stylus" sc>
html, body {
  // background-color: #2b2b2b;
}

.search-links .search-box input {
  width: 30rem;
  border-radius: 4px;
}

.search-links .search-box input + ul {
  display: block !important;
  left: 0;
  z-index: 2;
  width: 30rem !important;
}

.search-links {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 10vh;
}

.search-links .links {
  margin-top: 30px;
  z-index: 0;
}

// animation: jump 1000ms 100ms infinite both;
.search-links .links a {
  padding: 5px 9px;
  margin: 10px;
  border-radius: 18px;
  display: inline-block;
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
