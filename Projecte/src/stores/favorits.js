import { defineStore } from "pinia";
import { ref } from "vue";

export const useFavoritsSore = ('favorits', () => {
    const esFavorit = ref([]);
    
    //Esta es l funcion para marcarlo como favorito
    function toggleFavorit(llibre) {

        const index = esFavorit.value.findIndex(p => p.id === llibre.id
        );
        if(index === -1){
            esFavorit.value.push(llibre);
        }else{
            esFavorit.value.splice(index,1);
        }
    }

    function getFavorit(llibre){
        return esFavorit.value.some(l => l.id === llibre.id);
    }



    return {esFavorit,toggleFavorit,getFavorit}
});