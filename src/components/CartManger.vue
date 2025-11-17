<template>
  <div class="container">
     <h2>Votre panier</h2>
    <div class="row g-3 gap-2">
      <CartItem v-for="p in products" :key="p.id" :product="p" class="col-6 col-md-4 col-lg-3"/>
    <p>it's me mario</p>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import CartItem from './CartItem.vue';
import { getCartProducts } from '@/services/cart';
const products = ref([])

onMounted(() => {
  products.value = getCartProducts();
  
})
</script>
