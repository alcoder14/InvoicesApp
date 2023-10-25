<template>
  <div class="modal-container">
    <form class="invoice-form">
        <h2 class="modal-type">{{ modalType }}</h2>
        <h3 class="form-section-title">Bill From</h3>
        <div class="bill-from">
            <div class="input-container span-3">
                <label for="street-address">Street Address</label>
                <input type="text" id="street-address">
            </div>
            <div class="input-container">
                <label for="city">City</label>
                <input type="text" id="city">
            </div>
            <div class="input-container">
                <label for="post-code">Postal Code</label>
                <input type="text" id="post-code">
            </div>
            <div class="input-container">
                <label for="country">Country</label>
                <input type="text" id="country">
            </div>
        </div>

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
    .modal-type{
        font-size: 3rem;
        color: $white;
        margin-bottom: 2rem;
    }
    .form-section-title{
        font-size: 1.5rem;
        color: $lightpurple;
        margin-bottom: 2rem;
    }
    .bill-from{
        display: grid;
        grid-template-columns: repeat(3, 30%);
        gap: 20px;
        justify-content: space-between;
    }
    .input-container{
        @include flex-column();
    }
    .span-3{
        grid-column: 1 / span 3;
    }
    label{
        color: $white;
        font-size: 1.5rem;
        margin-bottom: 0.8rem;
    }
    input{
        outline: 0;
        border: 0;
        padding: 12px;
        background-color: $purple;
        color: $white;
        font-size: 1.6rem;
    }
</style>