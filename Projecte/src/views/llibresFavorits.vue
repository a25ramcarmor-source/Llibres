<script setup>
import { ref } from 'vue'
import libros from '@/components/llibreComp.vue'
import { getLlibres } from '../../comunicacio/llibres'
import { useFavoritsStore } from '@/stores/favorits';

const store = useFavoritsStore();
const dadesLlibres = store.esFavorit;



</script>
<template>
    <div class="listas">
        <libros v-for="actual in dadesLlibres" :key="actual.id" :llibres="actual" />
    </div>
</template>
<style>
.listas {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 20px;
    align-items: flex-start;
}
</style>