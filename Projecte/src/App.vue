<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Card from './components/Card.vue'
import { onBeforeMount } from 'vue'
</script>

<template>
  <header>
    <nav class="nav_bar">
      <RouterLink to="/Libros">Libros</RouterLink>
      <RouterLink to="/aguacates">Aguacates</RouterLink>
      <RouterLink to="/favorits">Favorit</RouterLink>
    </nav>
  </header>
  <RouterView />
</template>
<style scoped>
.nav_bar{
  display: flex;
  gap: 10px;
  padding: 15px;
  background-color: #f4f4f4;
  border-bottom: 1px solid #ddd;
}
.nav_bar a {
  text-decoration: none;
  color: aqua;
  font-weight: 400;
}

</style>
