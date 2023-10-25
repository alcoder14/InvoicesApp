<template>
  <nav class="navigation"></nav>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
    @import "@/assets/global.scss";

    .navigation{
        width: 150px;
        height: 100vh;
        background-color: $purple;
    }
    .image{
        width: 150px;
        height: auto;
    }

    @media(max-width: 950px){
        .navigation{
            width: 100%;
            height: 10vh;
        }
    }
</style>