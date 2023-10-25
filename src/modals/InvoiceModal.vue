<template>
  <div class="modal-container">
    <form class="invoice-form">
        <h2>{{ modalType }}</h2>
    </form>
  </div>
</template>

<script>
export default {
    props: {
        modalType: String
    }
}
</script>

<style lang="scss" scoped>
    @import "@/assets/global.scss";
    .modal-container{
        position: fixed;
        z-index: 10;
        right: 0;
        top: 0;
        width: calc(100% - 150px);
        height: 100vh;
        background-color: rgba($color: #000000, $alpha: 0.7);
    }
    .invoice-form{
        width: 800px;
        height: inherit;
        background-color: $darkpurple;
        padding: 40px;
    }
</style>