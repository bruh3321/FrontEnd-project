<template>
  <div class="card border rounded-3 p-3 mb-3">
    <div class="d-flex justify-content-between align-items-center gap-3">
      <!-- LEFT -->
      <div class="d-flex align-items-center gap-3">
        <img :src="product.image"  alt="Product image" class="img-fluid" style="width: 80px; height: 80px; object-fit: contain;"/>
        <div>
          <h6 class="mb-1">{{ product.title }}</h6>
          <RouterLink :to="'/product/' + product.id" class="text-primary small text-decoration-none">
            Voir le produit
          </RouterLink>
        </div>
      </div>
      <!-- RIGHT -->
      <div class="text-end">
        <p class="fw-bold mb-2">{{ product.price }} MAD</p>
        <button class="btn btn-danger btn-sm" @click="removeitem(product)">
          Supprimer
        </button>
      </div>
    </div>
  </div>
</template>



<script setup>
import { removeProduct } from '@/services/cart';



defineProps({
  product: {
    type: Object,
    required: true
  }
})
  function removeitem(product){
    removeProduct(product)
    window.location.reload()
  }
</script>

