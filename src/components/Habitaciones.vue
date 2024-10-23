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
        nombre: 'Cielo Sereno',
        imagen: 'https://www.sofitelbarucalablanca.com/wp-content/uploads/sites/19/2023/04/DUF_8644-v-ok-1170x780.jpg',
        descripcion: 'Habitación con cama matrimonial, baño privado, aire acondicionado, televisión por cable, wifi, minibar, caja fuerte y balcón con vista al mar.'
    },
    {
        nombre: 'Oasis Escondido',
        imagen: 'https://static.abc.es/Media/201504/27/hotel12--644x362.jpg',
        descripcion: 'Un espacio íntimo rodeado de detalles elegantes que te transportarán a un paraíso privado.'
    },
    {
        nombre: 'Paraiso Zen',
        imagen: 'https://www.cosemarozono.com/wp-content/uploads/2017/02/eliminar-olores-en-habitaciones-de-hotel-con-ozono.jpg',
        descripcion: 'Decorada con elementos naturales, esta habitación es ideal para quienes buscan paz y serenidad absoluta.  '
    },
    {
        nombre: 'Refugio del sol',
        imagen: 'https://www.xotels.com/wp-content/uploads/2020/03/hotel-room-type-xotels-hotel-management-company-800x599.webp',
        descripcion: 'Disfruta de la calidez del sol en esta habitación que cuenta con grandes ventanales y un ambiente acogedor.'
    },
    {
        nombre: 'Suite del amanecer',
        imagen: 'https://hotellospenascales.es/wp-content/uploads/2022/05/14_Esif-Fotografia__GT24718-1.jpg',
        descripcion: 'Despierta con impresionantes vistas al amanecer en una suite amplia y llena de luz natural. '
    },
    {
        nombre: 'Jardin Secreto',
        imagen: 'https://cdn.forbes.com.mx/2021/12/hoteles-de-lujo-tres-e1639513889195.jpg',
        descripcion: 'Rodeada de verde y naturaleza, esta habitación es un refugio encantador para quienes buscan tranquilidad.'
    },
    {
        nombre: 'Nido de estrellas',
        imagen: 'https://i.pinimg.com/550x/12/b5/f6/12b5f624c3af4b0d94cefc7246f73725.jpg',
        descripcion: 'Relájate bajo un techo iluminado con suaves luces, que te hará sentir como si durmieras bajo las estrellas.  '
    },
    {
        nombre: 'Brisa Tropical',
        imagen: 'https://www.hola.com/horizon/landscape/f077d01fb697-habitaciones-hotel-9t-t.jpg',
        descripcion: 'Decorada con tonos frescos y tropicales, esta habitación te hará sentir en una escapada veraniega permanente. '
    },
    {
        nombre: 'Luna Encantada',
        imagen: 'https://www.hotelbenidorm.co/assets/cache/uploads//habitaciones/751x501/habitacion-cama-matrimonio-ventana-silla-hotel-benidorm-manizales-colombia.webp?from=jpg',
        descripcion: ' Un espacio romántico con una iluminación suave y una atmósfera mágica que invita al descanso. '
    },
    {
        nombre: 'Esencia del mar',
        imagen: 'https://i.pinimg.com/736x/81/08/63/8108635d7899852e3c124a9d37a12137.jpg',
        descripcion: 'Con suaves tonos azules y decoraciones marinas, esta habitación te transporta a la calma del océano.  '
    },
    


]);
</script>

<style>
*{
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

@media (max-width:640px){
    .habitacion{
        width: 400px;
        height: 500px;
    }
    .habitacion img{
        width: 200px;
    }

}
</style>
