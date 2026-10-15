<script setup>
import { ref } from 'vue'
import libros from '@/components/llibreComp.vue'
import { getLlibres } from '../../comunicacio/llibres'
const dadesLlibres= ref([])
import { onBeforeMount } from 'vue'

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
  dadesLlibres.value = await getLlibres()
})


</script>

<template>
  <h1>Llibres favorits</h1>
    <div class="listas">
        <libros v-for="actual in dadesLlibres"
        :key="actual.id"
        :llibres="actual"
        />
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
</style>