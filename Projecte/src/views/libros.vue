<script setup>
import { ref } from 'vue'
import libros from '@/components/llibreComp.vue'
import { getLlibres } from '../../comunicacio/llibres'
const dadesLlibres = ref([])
import { onBeforeMount } from 'vue'
const carregant = ref(true);

//Aixo es un moment determinat
// onBeforeMount(() => {
//   fetch('http://aperezh.daw.inspedralbes.cat/libros.php')
//   .then(response => response.json())
//   .then(data => {
//     console.log(data)
//     dadesLlibres.value=data.libros
//     });
// })

onBeforeMount(async () => {
  try {
    dadesLlibres.value = await getLlibres()
  } catch (error) {
    console.error('Error carregant els Llibres', error)
  } finally {
    carregant.value = false
  }
})


</script>

<template>
  <h1 v-if="!carregant">Llibres</h1>

  <div id="load" v-if="carregant">
    <img v-if="carregant" id="load"
      src="https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExbTdjc3l1a2hoOGc5dzhrYzFuNnRzeWhwNmUybzRmY3hncHk2MXVoMCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/emySgWo0iBKWqni1wR/giphy.gif">
  </div>

  <p v-else-if="dadesLlibres.length === 0">
    No hi ha llibres disponibles.
  </p>

  <div v-else class="listas">
    <libros v-for="actual in dadesLlibres" :key="actual.id" :llibres="actual" />
  </div>

</template>
<style scope>
.listas {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 20px;
  align-items: flex-start;
}

#load {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
}

#load img {
  width: 500px;
  height: 500px;
  
}
</style>