<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { onBeforeMount } from 'vue'
import Card from '@/components/Card.vue'

</script>

<template>
    <div class="listas">
        <Card titulo="Maracaton" precio="3.99€"
            imagen="https://revistamercados.com/wp-content/uploads/2021/11/bacon-aguacate.jpg">
        </Card>
        <Card titulo="Maracaton" precio="3.99€"
            imagen="https://revistamercados.com/wp-content/uploads/2021/11/bacon-aguacate.jpg">
        </Card>
    </div>

</template>


<style scoped>
.listas {
     display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 20px;
    align-items: flex-start;
}
</style>