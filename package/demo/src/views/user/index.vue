<template>
  <section>
    <div>user{{$route.params.id}}</div>
    <router-link :to="{name: 'user', params: {id: '234124'}}" tag="a">234124</router-link>
    <router-link :to="{name: 'user', params: {id: '1212624'}}" tag="a">1212624</router-link>
    <router-link :to="{name: 'user', params: {id: '314235126'}}" tag="a">314235126</router-link>
  </section>
</template>

<script>
export default {

  beforeCreate () {
    console.log('beforeCreate')
  },
  created () {
    console.log('created')
  },

  watch: {
    "$route": function (to, from) {
      console.log(to)
      console.log(from)
    }
  },

  beforeRouteUpdate (to, from, next) {
    console.log(to)
    console.log(from)
    next()
  }

}
</script>

<style lang="scss">
</style>