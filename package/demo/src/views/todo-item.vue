<template>
  <li @click.prevent.self="testClick(2)">
    <p @click.once="testClick(3)">这是一个商标</p>
  </li>
</template>

<script>

export default {
  methods: {
    testClick (val) {
      console.log(val)
    }
  }
}

export var year = 1958
</script>

<style scoped lang="scss">
li {
  padding: 30px;
}
</style>