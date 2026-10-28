<template>
    <h4><slot></slot></h4>
    <div>
        <select class="select-container" v-model="genere" name="select">
            <option value="Fantasía">Fantasía</option>
            <option value="Distopía" selected>Distopía</option>
            <option value="Ciencia Ficción">Ciencia Ficción</option>
        </select>
    </div>

    <div class="checkbox-container">
        <input type="checkbox" v-model="filtreFav" id="checkDef">
        <label for="checkDef">Filtrar favorits</label>
    </div>
</template>

<script setup>
import { ref, watch } from 'vue';
const emit = defineEmits(['evtCanviGenere','evtCanviFav']);
let genere = ref('');
let filtreFav = ref(false);

watch(genere,(nougenere)=>{
    emit('evtCanviGenere',nougenere);
})
watch(filtreFav,(favorit)=>{
    emit('evtCanviFav',favorit);
})

</script>

<style scoped>
.filtres {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 20px;
    padding: 20px;
    margin-bottom: 20px;
    background-color: #f8f9fa;
    border: 1px solid #ddd;
    border-radius: 12px;
}

h4 {
    margin: 0;
    color: #333;
    font-size: 18px;
}

.select-container {
    display: flex;
    flex-direction: column;
    gap: 6px;
}

.select-container label {
    font-size: 14px;
    font-weight: bold;
    color: #555;
}

select {
    min-width: 190px;
    padding: 10px 35px 10px 12px;
    border: 1px solid #ccc;
    border-radius: 8px;
    background-color: white;
    color: #333;
    font-size: 14px;
    cursor: pointer;
    outline: none;
    transition: border-color 0.2s, box-shadow 0.2s;
}

select:hover {
    border-color: #777;
}

select:focus {
    border-color: #007bff;
    box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.15);
}

.checkbox-container {
    display: flex;
    align-items: center;
    gap: 9px;
    padding: 10px 12px;
    border: 1px solid #ddd;
    border-radius: 8px;
    background-color: white;
    cursor: pointer;
    transition: background-color 0.2s;
}

.checkbox-container:hover {
    background-color: #f0f5ff;
}

input[type="checkbox"] {
    width: 18px;
    height: 18px;
    accent-color: #007bff;
    cursor: pointer;
}

.checkbox-container label {
    color: #333;
    font-size: 14px;
    cursor: pointer;
}
</style>