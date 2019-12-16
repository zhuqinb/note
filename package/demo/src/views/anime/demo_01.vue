<template>
    <div class="ball"></div>
</template>

<script>

import anime from 'animejs/lib/anime.es.js';

export default {
    data() {
        return {
            anima: 'animate'
        }
    },
    mounted () {
        console.log('anima')
        var bouncingBall = anime({
            targets: '.ball',
            translateY: '50vh',
            duration: 300,
            loop: true,
            direction: 'alternate',
            easing: 'easeInCubic'
        });
    }
}

</script>
<style>
.ball {
    width: 100px;
    height: 100px;
    background: #000;
    border-radius: 50%;
}
</style>