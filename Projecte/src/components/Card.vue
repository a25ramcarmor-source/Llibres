<template>
  <div class="product-card">
    <img :src="imagen" alt="Imagen del producto" class="product-img" />
    <div class="product-info">
      <h3>{{ titulo }}</h3>
      <p class="price">{{ precio }}</p>
      <button @click="comprar">Comprar</button>
    </div>
  </div>
</template>

<script setup>
// Definimos lo que este componente "recibe" desde fuera (props)
defineProps({
  titulo: String,
  precio: String,
  imagen: String
})

function comprar() {
  alert('¡Producto añadido al carrito!')
}
</script>

<style scoped>
.product-card {
  width: 250px;
  border: 1px solid #e0e0e0;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  font-family: sans-serif;
  background: white;
}

.product-img {
  width: 100%;
  height: 150px;
  object-fit: cover;
}

.product-info {
  padding: 16px;
}

.price {
  font-weight: bold;
  color: #2e7d32;
  margin: 8px 0;
}

button {
  width: 100%;
  background-color: #1976d2;
  color: white;
  border: none;
  padding: 8px;
  border-radius: 6px;
  cursor: pointer;
}

button:hover {
  background-color: #115293;
}
</style>