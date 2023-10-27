<template>
  <div class="modal-container">
    <form class="invoice-form">
        <h2 class="modal-type">{{ modalType }}</h2>
        <h3 class="form-section-title">Bill From</h3>

        <div class="bill-from input-section-3">
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

        <h3 class="form-section-title">Bill To</h3>

        <div class="bill-to input-section-3">
            <div class="input-container span-3">
                <label for="client-name">Client's Name</label>
                <input type="text" id="client-name">
            </div>
            <div class="input-container span-3">
                <label for="client-email">Client's Email</label>
                <input type="text" id="client-email">
            </div>
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

        <div class="input-section-2">
            <div class="input-container">

                <label for="date">Invoice Date</label>
                <input type="date" id="date">

            </div>
            <div class="input-container">

                <label for="payment-terms">Payment Terms</label>
                <select id="payment-terms" class="dropdown-payment">
                    <option value="5 days">5 Days</option>
                    <option value="5 days">10 Days</option>
                    <option value="5 days">15 Days</option>
                    <option value="5 days">30 Days</option>
                </select>

            </div>
            <div class="input-container span-2">

                <label for="project-description">Project Description</label>
                <input type="text" id="project-description">

            </div>
        </div>

        <div class="item-list">
            <h3 class="item-list-title">Item List</h3>
            <div class="item-list-content" v-if="newItems.length !== 0">
                <div class="label">
                    <label>Item Name</label>
                </div>
                <div class="label">
                    <label>Qty.</label>
                </div>
                <div class="label">
                    <label>Price</label>
                </div>
                <div class="label">
                    <label>Total</label>
                </div>
                <div class="label"></div>
            </div>

            <div class="item" v-for="item in newItems" :key="item.id">
                <input type="text" v-model="item.item_name">
                <input type="number" v-model="item.quantity">
                <input type="number" v-model="item.price">
                <input type="number" v-model="item.total">
                <button> <font-awesome-icon icon="fa fa-trash" /></button>
            </div>
            <button class="add-new-item-btn" @click="addNewItem">Add New Item</button>
        </div>

    </form>
  </div>
</template>

<script>

import { v4 as uuidv4 } from 'uuid'

export default {
    props: {
        modalType: String
    },
    data(){
        return{
            newItems: [],
            newItem: {
                id: 0,
                item_name: "",
                quantity: 1,
                price: 0.00,
                total: 0
            }
        }
    },
    methods: {
        addNewItem(){
            this.newItem.id = uuidv4()
            console.log(this.newItem)

            this.newItems.push(this.newItem)
            console.log(this.newItems)
        }
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
        overflow: auto;
    }
    .modal-type{
        font-size: 4rem;
        color: $white;
        margin-bottom: 2rem;
    }
    .form-section-title{
        font-size: 2rem;
        color: $lightpurple;
        margin-bottom: 2rem;
    }
    .input-section-3{
        display: grid;
        grid-template-columns: repeat(3, 30%);
        gap: 20px;
        justify-content: space-between;
        margin-bottom: 2rem;
    }
    .input-section-2{
        display: grid;
        grid-template-columns: repeat(2, 48%);
        gap: 20px;
        justify-content: space-between;
        margin-bottom: 2rem;
    }
    .input-container{
        @include flex-column();
    }
    .bill-to{
        margin-bottom: 4rem;
    }

    .span-2{
        grid-column: 1 / span 2;
    }
    .span-3{
        grid-column: 1 / span 3;
    }
    label{
        color: $white;
        font-size: 1.5rem;
        margin-bottom: 0.8rem;
    }
    input, .dropdown-payment{
        outline: 0;
        border: 0;
        padding: 12px;
        background-color: $purple;
        color: $white;
        font-size: 1.6rem;
    }

    .item-list-content, .item{
        display: grid;
        grid-template-columns: 22% 12% 22% 22% 6%;
        justify-content: space-between;
    }
    .item-list-title{
        color: $grey;
        font-size: 3rem;
        margin-bottom: 1rem;
    }
    .item{
        margin-bottom: 1rem;
    }
    .label{
        margin-bottom: 1rem;
    }
</style>