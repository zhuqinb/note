<template>
  <div>{{msg}}</div>
</template>

<script>
import { setTimeout } from 'timers';
export default {
  name: 'app',
  data () {
    console.log('~~ data')
    return {
      msg: 'hello world!'
    }
  },
  inject: ['map'],
  props: {
    num: {
      type: Number,
      required: true
    }
  },
  beforeCreate () {
    console.group('beforeCreate ~')
    console.log(this.$el)
    console.log(this.$data)
    console.log(this.$props)
    console.log(this.msg)
    console.groupEnd()
  },

  created () {
    this.msg = this.$parent.msg
    console.group('created ~')
    console.log(this.$el)
    console.log(this.$data)
    console.log(this.$props)
    console.log(this.msg)
    console.groupEnd()
  },

  beforeMount () {
    console.group('beforeMount ~')
    console.log(this.$el)
    console.log(this.$data)
    console.log(this.$props)
    console.log(this.msg)
    console.groupEnd()
  },

  mounted () {
    console.log(this.map)
    console.group('mounted ~')
    console.log(this.$el)
    console.log(this.$data)
    console.log(this.$props)
    console.log(this.msg)
    console.groupEnd()
    console.log(this.$parent.msg)
    setTimeout(() => {
      this.msg = 88888888
    }, 1000)
  },

  watch: {
    '$parent.msg' (newV, oldV) {
      console.error(newV, oldV)
    }
  },

  beforeUpdate () {
    console.group('beforeUpdate ~')
    console.log(this.$el)
    console.log(this.$data)
    console.log(this.$props)
    console.log(this.msg)
    console.groupEnd()
  },

  updated () {
    console.group('updated ~')
    console.log(this.$el)
    console.log(this.$data)
    console.log(this.$props)
    console.log(this.msg)
    console.groupEnd()
  },

  beforeDestroy () {
    console.group('beforeDestroy ~')
    console.log(this.$el)
    console.log(this.$data)
    console.log(this.$props)
    console.log(this.msg)
    console.groupEnd()
  },

  destroyed () {
    console.group('destroyed ~')
    console.log(this.$el)
    console.log(this.$data)
    console.log(this.$props)
    console.log(this.msg)
    console.groupEnd()
  }
}

</script>