
<script setup>
import { ref } from 'vue'
import { useFavoritsSore } from '@/stores/favorits';

const props = defineProps(['llibres'])
const emit = defineEmits(['favorit'])
const store = useFavoritsSore()
const esFavorit = ref(false)

const comprar = () => {
    alert('¡Libro añadido al carrito!')
}

const favorit = () => {
    esFavorit.value = !esFavorit.value

    emit('favorit', {
        llibre: props.llibres,
        esFavorit: esFavorit.value
    })
}
</script>

<template>
    <div class="product-card">
        <img
            :src="llibres.imagen"
            alt="Imagen del libro"
            class="product-img"
        />

        <div class="product-info">
            <h3>{{ llibres.titulo }}</h3>
            <p class="pr">{{ llibres.autor }}</p>

            <div class="botones">
                <button class="btn-comprar" @click="comprar">
                    Comprar por: {{ llibres.precioInicial }}€
                </button>

                <button
                    class="btn-favorito"
                    :class="{ marcado: esFavorit }"
                    @click="favorit"
                >
                    ★
                </button>
            </div>
        </div>
    </div>
</template>

<style scoped>
.btn-favorito.marcado {
    background-color: #ff9800;
    color: white;
}
</style>