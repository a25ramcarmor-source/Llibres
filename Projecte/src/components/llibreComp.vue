
<script setup>
import { useLibreStore } from '@/stores/favorits';

const props = defineProps(['llibres'])
const store = useLibreStore()

const comprar = () => {
    alert('¡Libro añadido al carrito!')
}

const favorit = () => {
    store.toggleFavorit(props.llibres);
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
                    :class="{ marcado: store.getFavorit(llibres) }"
                    @click="favorit"
                    title="Añadir a favoritos"
                >
                    ★
                </button>
            </div>
        </div>
    </div>
</template>

<style scoped>
.product-card {
    width: 250px;
    border: 2px solid #333;
    border-radius: 10px;
    padding: 15px;
    background-color: white;
    text-align: center;
    box-shadow: 2px 2px 6px #ccc;
}

.product-img {
    width: 150px;
    height: 200px;
    object-fit: contain;
    margin-bottom: 10px;
}

.product-info h3 {
    font-size: 18px;
    margin: 10px 0;
    color: #222;
}

.pr {
    font-size: 14px;
    color: #666;
    margin-bottom: 15px;
}

.botones {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
}

.btn-comprar {
    flex: 1;
    padding: 10px;
    border: 1px solid #333;
    border-radius: 6px;
    background-color: #007bff;
    color: white;
    font-size: 13px;
    cursor: pointer;
}

.btn-comprar:hover {
    background-color: #0056b3;
}

.btn-favorito {
    width: 40px;
    height: 40px;
    border: 2px solid #ff9800;
    border-radius: 6px;
    background-color: white;
    color: #ff9800;
    font-size: 23px;
    cursor: pointer;
}

.btn-favorito:hover {
    background-color: #fff0d5;
}

.btn-favorito.marcado {
    background-color: #ff9800;
    color: white;
}
</style>
