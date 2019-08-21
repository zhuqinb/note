<template>
  <section>
    <div>{{msg}}</div>
    <v-home :num="124" ref="home" />
  </section>
</template>

<script>

import VHome from './home'
import MapBase from '@/utils/MapBase'
export default {
  name: 'app',
  data () {
    console.group('data')
    console.log(this.$el)
    console.log(this.$data)
    console.log(this.msg)
    console.groupEnd()
    return {
      msg: 'hello world!',
      map: null
    }
  },
  provide: function () {
    console.group('provide')
    console.log(this.$el)
    console.log(this.$data)
    console.log(this.msg)
    console.groupEnd()
    this.map = new MapBase()
    return {
      map: this.map
    }
  },
  components: {
    VHome
  },
  beforeCreate () {
    console.group('beforeCreate')
    console.log(this.$el)
    console.log(this.$data)
    console.log(this.msg)
    console.groupEnd()
  },

  created () {
    console.group('created')
    console.log(this.$el)
    console.log(this.$data)
    console.log(this.msg)
    console.groupEnd()
  },

  beforeMount () {
    console.group('beforeMount')
    console.log(this.$el)
    console.log(this.$data)
    console.log(this.msg)
    console.groupEnd()
  },

  mounted () {
    console.group('mounted')
    console.log(this.$el)
    console.log(this.$data)
    console.log(this.msg)
    console.log(this.$refs.home)
    console.groupEnd()
    setInterval(() => {
      this.msg = '214124'
    }, 2000)
    this.msg = this.$refs.home.msg
  },

  watch: {
    '$refs.home' (newV, oldV) {
      console.error(newV, oldV)
    }
  },

  beforeUpdate () {
    console.group('beforeUpdate')
    console.log(this.$el)
    console.log(this.$data)
    console.log(this.msg)
    console.groupEnd()
  },

  updated () {
    console.group('updated')
    console.log(this.$el)
    console.log(this.$data)
    console.log(this.msg)
    console.groupEnd()
  },

  beforeDestroy () {
    console.group('beforeDestroy')
    console.log(this.$el)
    console.log(this.$data)
    console.log(this.msg)
    console.groupEnd()
  },

  destroyed () {
    console.group('destroyed')
    console.log(this.$el)
    console.log(this.$data)
    console.log(this.msg)
    console.groupEnd()
  }
}

</script>