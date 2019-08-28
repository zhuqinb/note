<template>
  <canvas id="draw" ref="autumn"></canvas>
</template>

<script>
import Autumn from '@/autumn/main';

export default {
  mounted () {
    let autumn = new Autumn(this.$refs.autumn)

    this.$once('hook:beforeDestroy', () => {
        autumn.destroy()
    })
  }
}

</script>