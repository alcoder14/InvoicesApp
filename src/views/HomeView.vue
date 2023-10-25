<template>
  <main>
    <NavbarSection />
    <section class="content-section">

      <div class="container">
        
        <div class="menu">
          <div class="left-side">
            <h1 class="invoices-title">Invoices</h1>
            <h3 class="invoices-number">There are {{ totalInvoices }} total invoices</h3>
          </div>
          <div class="right-side">
            <select class="dropdown">
              <option value="all">All</option>
              <option value="paid">Paid</option>
              <option value="pending">Pending</option>
              <option value="draft">Draft</option>
            </select>
            <button class="purple-btn" @click="openInvoiceModal"> <font-awesome-icon icon="fa fa-plus" class="button-icon" /> Add Invoice </button>
          </div>
        </div>

      </div>
      
    </section>
  </main>

  <InvoiceModal v-if="invoiceModalVisible" modalType="Add New Invoice" />
</template>

<script>

import NavbarSection from '@/sections/NavbarSection.vue';
import InvoiceModal from '../modals/InvoiceModal.vue';

export default {
  components: {
    NavbarSection,
    InvoiceModal
  },
  data(){
    return{
      invoices: [],
      totalInvoices: null,
      invoiceModalVisible: false
    }
  },
  mounted(){
    this.manageLocalStorage()
  },
  methods: {
    manageLocalStorage(){
      if(localStorage.getItem("Invoices") === null){
        localStorage.setItem("Invoices", JSON.stringify([]))
      } else {
        this.invoices = JSON.parse(localStorage.getItem("Invoices"))
        this.totalInvoices = this.invoices.length
      }
    },

    openInvoiceModal(){
      this.invoiceModalVisible = true
    }

  }
}
</script>

<style lang="scss" scoped>
  @import "@/assets/global.scss";
  main{
    @include flex-row()
  }

  .menu{
    @include flex-row();
    justify-content: space-between;
  }
  .right-side{
    @include flex-row();
    align-items: center;
  }

  .invoices-title{
    color: $white;
    font-size: 6rem;
    margin-bottom: 0.5rem;
  }
  .invoices-number{
    font-size: 2rem;
    color: $grey;
  }
  .dropdown, button{
    font-size: 2.5rem;
    margin-right: 2rem;
    padding: 8px 14px;
  }
  button{
    @include flex-row();
    align-items: center;
  }

  @media(max-width: 1368px){
    .invoices-title{
      font-size: 5rem;
    }
    .dropdown, button{
      font-size: 2.2rem;
     }

  }
  @media(max-width: 1140px){
    .invoices-title{
      font-size: 4rem;
    }
    .dropdown, button{
      font-size: 1.9rem;
     }

  }
  @media(max-width: 950px){
    main{
        @include flex-column()
    }
  }
  @media(max-width: 700px){
    .dropdown{
      display: none;
    }
    .invoices-title{
      font-size: 3.6rem;
      margin-bottom: 0.3rem;
    }
    .invoices-number{
      font-size: 1.7rem;
    }

  }
</style>
