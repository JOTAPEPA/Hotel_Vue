<template>
    <div class="container2">
        <div>
            <div class="habitaciones2">
                <div v-for="(i, e) in habitaciones" :key="e" class="habitacion">
                    <h4>{{ i.nombre }}</h4>
                    <img :src="i.imagen" alt="Habitación 1">
                    <p>{{ i.descripcion }}</p>
                    <button class="btnReserva">Reservar</button>
                </div>
            </div>
        </div>
    </div>

</template>

<script setup>
import { ref } from 'vue'

const habitaciones = ref([
    {
        nombre: 'Bungee Jumping',
        imagen: 'https://media-cdn.tripadvisor.com/media/attractions-splice-spp-674x446/09/22/b3/f1.jpg',
        descripcion: 'El bungee jumping es una actividad extrema que te hará vivir una caída libre desde gran altura, sujeto por una cuerda elástica que garantiza tu seguridad. Perfecto para quienes buscan emoción y superar sus límites.'
    },
    {
        nombre: 'Canotaje',
        imagen: 'https://regiones.prisamedia.co/wp-content/uploads/elementor/thumbs/Personas-practicando-el-rafting-o-canotaje-Foto-via-Getty-Images-scaled-qblhxad5ub4sri08wysm4xctjknc82s74vqowidt94.jpg',
        descripcion: 'El canotaje es un emocionante deporte acuático que te permite navegar por ríos mientras disfrutas de paisajes naturales y desafías las aguas.'
    },
    {
        nombre: 'Parapente',
        imagen: 'https://colombiavuela.com/wp-content/uploads/2020/03/parapente-la-calera-1024x768.jpg',
        descripcion: 'El parapente es un deporte de aventura que permite volar con un ala flexible desde pendientes, aprovechando corrientes de aire para ganar altitud y disfrutar de vistas panorámicas. '
    },
    {
        nombre: 'Rapel',
        imagen: 'https://www.forumsport.com/es-es/blogs/montana/wp-content/uploads/sites/3/2023/07/foto1.jpg',
        descripcion: 'El rápel es una técnica de descenso en vertical que utiliza cuerdas y arneses. Se utiliza en actividades al aire libre, como escalada y exploración de cuevas, permitiendo descender de manera controlada por paredes o acantilados.'
    },
    {
        nombre: 'Escalada de rocas',
        imagen: 'https://www.viajaecuador.com.ec/wp-content/uploads/2020/12/cuyuja.jpg',
        descripcion: 'La escalada en roca es un deporte que consiste en ascender superficies rocosas utilizando técnicas de agarre y aseguramiento. '
    },
    {
        nombre: 'senderismo',
        imagen: 'https://bogota.gov.co/sites/default/files/styles/1050px/public/eventos/2023-01/caminatas.jpg',
        descripcion: 'El senderismo es caminar por senderos naturales, explorando paisajes y disfrutando de la naturaleza.'
    },
    {
        nombre: 'Espeleologia',
        imagen: 'https://cdn.milenio.com/uploads/media/2024/07/01/asociacion-coahuilense-de-espeleologia-a_0_21_1200_758.jpg',
        descripcion: 'La espeleología es la exploración de cuevas y cavidades subterráneas, que implica el uso de técnicas de escalada y rappel. Es una actividad que permite descubrir formaciones geológicas y ecosistemas únicos.  '
    },
    {
        nombre: 'Ciclismo de montaña',
        imagen: 'https://bicimex.com/storage/blog/230103131841_ciclismo-de-montana-en-el-bosq.jpg',
        descripcion: 'El ciclismo de montaña es una modalidad que consiste en andar en bicicleta por terrenos irregulares, utilizando bicicletas diseñadas para soportar condiciones difíciles. Combina ejercicio y aventura en la naturaleza. '
    },
]);
</script>

<style>
* {
    margin: 0;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
}

.container2 {
    display: flex;
    justify-content: center;
}

.habitaciones2 {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}

.habitacion {
    transition: transform 0.3s ease;
    display: grid;
    justify-content: center;
    justify-items: center;
    text-align: center;
    padding: 20px;
    width: 600px;
    height: 400px;
    background-color: rgba(0, 0, 0, 0.5);
    margin: 10px;
    border-radius: 10px;
    color: #ccc
}

.habitacion:hover {
    transform: scale(1.05);
    background-color: rgba(0, 0, 0, 0.7);
}

.habitacion img {
    width: 550px;
    height: 200px;
    object-fit: cover;
    border-radius: 10px 10px 0 0;

}

.btnReserva {
    padding: 10px 20px;
    background-color: rgb(105, 91, 63);
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;
    margin-bottom: 20px;
}

.btnReserva:hover {
    background-color: rgb(150, 137, 99);
}
</style>
