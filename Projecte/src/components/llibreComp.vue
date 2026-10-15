<script setup>
defineProps(['llibres'])
defineEmits();

const comprar = () => {
    alert('¡Libro añadido al carrito!')
}
</script>

<template>
    <div class="product-card">
        <img :src="llibres.imagen" alt="Imagen del libro" class="product-img" />

        <div class="product-info">
            <h3>{{ llibres.titulo }}</h3>
            <p class="pr">{{ llibres.autor }}</p>
            <div class="botones">
                <button class="btn-comprar" @click="comprar">
                    Comprar por: {{ llibres.precioInicial}}€
                </button>

                <button class="btn-favorito" @click="favorito">
                    ★
                </button>
            </div>
        </div>
    </div>
</template>

<style scoped>
.product-card {
    width: 250px;
    border: 1px solid #e0e0e0;
    border-radius: 12px;
    overflow: hidden;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    font-family: Arial, sans-serif;
    background-color: white;
    transition: transform 0.2s;
}

.product-card:hover {
    transform: translateY(-5px);
}


.product-img {
    width: 100%;
    height: 220px;
    object-fit: contain;
    background-color: #f5f5f5;
    padding: 10px;
    box-sizing: border-box;
}

.product-info {
    padding: 16px;
    display: flex;
    flex-direction: column;
    gap: 10px;
}

h3 {
    font-size: 18px;
    margin: 0;
    color: #333;
}

.pr {
    font-size: 14px;
    color: #777;
    margin: 0;
}

.botones {
    display: flex;
    gap: 10px;
    align-items: center;
}

.botones {
    display: flex;
    gap: 10px;
    align-items: center;
}

.btn-comprar {
    flex: 1;
    background-color: #1976d2;
    color: white;
    border: none;
    padding: 10px;
    border-radius: 6px;
    cursor: pointer;
}

.btn-favorito {
    width: 45px;
    height: 40px;
    background-color: #ffeb3b;
    color: #333;
    border: none;
    border-radius: 6px;
    font-size: 24px;
    cursor: pointer;
}

.btn-favorito:hover {
    background-color: #fdd835;
}
</style>
