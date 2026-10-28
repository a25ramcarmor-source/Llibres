import { defineStore } from "pinia";
import { ref } from "vue";
import { reactive, computed } from 'vue'
import { getLlibres } from '../../comunicacio/llibres'

export const useLibreStore = defineStore('favorits', () => {
    let llibres = ref([]);
    let favorits = ref([]);
    async function carregarLlibres() {
        llibres.value = await getLlibres();

    }

    carregarLlibres();

    const llibresFavorits = computed (()=>{
        return llibres.value.filter(llibre => 
            favorits.value.some(f => f.id === llibre.id)
        )
    });
    //Esta es l funcion para marcarlo como favorito
    function toggleFavorit(llibre) {

        const index = favorits.value.findIndex(p => p.id === llibre.id
        );
        if(index === -1){
            favorits.value.push(llibre);
        }else{
            favorits.value.splice(index,1);
        }
    }

    function getFavorit(llibre){
        return favorits.value.some(l => l.id === llibre.id);
    }



    return {favorits,llibres,llibresFavorits,carregarLlibres,toggleFavorit,getFavorit}
});