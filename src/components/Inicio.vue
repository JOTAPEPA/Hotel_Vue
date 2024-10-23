<template>
    <div class="container">
        <div class="containerCardPrincipal">
            <div class="cardPrincipal">
                <div class="cardBienvenida">
                    <h3>Bienvenida</h3>
                    <div class="inputsReserva">
                        <div>
                            <label for="numPersonas">Seleccione el número de personas:</label>
                            <select id="numPersonas">
                                <option value="1">1 Persona</option>
                                <option value="2">2 Personas</option>
                                <option value="3">3 Personas</option>
                                <option value="4">4 Personas</option>
                                <option value="5">5 Personas</option>
                            </select>
                        </div>
                        <div>
                            <label for="">Fecha de llegada:</label>
                            <input type="date">
                        </div>
                        <div>
                            <label for="">Fecha de salida:</label>
                            <input type="date">
                        </div>

                        <button>
                            <h6>Reservar ahora</h6>
                        </button>
                    </div>

                </div>
            </div>

        </div>
        <div class="fila2">
            <div class="habitacionesInicio" id="cardsRedireccion">
                <img src="https://www.hotelbahiasantander.com/wp-content/uploads/sites/1938/nggallery/location//bahia_mobile_habitaciones_01_cabecera-copy.jpg"
                    alt="">
                <div>
                    <p class="descripcionHabitacion">Nuestras habitaciones combinan lujo y confort, con amplios
                        espacios, camas premium y baños estilo spa. Disfruta de vistas panorámicas, Wi-Fi gratuito,
                        Smart TV y climatización personalizada. Con servicio a la habitación 24 horas y opciones con
                        terraza o balcón, te garantizamos una estancia inolvidable.</p>
                </div>
                <button class="btn-navigate">
                    <router-link to="/habitaciones" class="link-navigate">Ir a Habitaciones</router-link>
                </button>
            </div>
            <div class="actividades" id="cardsRedireccion">
                <div>
                    <img src="https://parapenteparaiso.com/wp-content/uploads/2023/09/GenteParapenteUbicacion.jpg"
                        alt="">
                    <p>Ofrecemos una amplia variedad de actividades extremas para los amantes de la adrenalina. Desde
                        emocionantes deportes aéreos hasta aventuras acuáticas y terrestres, tenemos opciones para todos
                        los niveles de desafío. </p>
                </div>
                <button class="btn-navigate">
                    <router-link to="/actividades" class="link-navigate">Ir a actividades</router-link>
                </button>

            </div>

        </div>

        <div class="fila3">
            <div class="servicios" id="cardsRedireccion">
                <div>
                    <img src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/485441755.jpg?k=49334b0d98c65eb208111256771b8a5d5a4e1a3a2cf09b91489cdeaecc341105&o=&hp=1"
                        alt="">
                    <p>Nuestro hotel te ofrece habitaciones confortables, restaurante gourmet, servicio a la habitación
                        24/7, spa, piscina y gimnasio. Además, contamos con traslados, tours organizados y un equipo
                        dedicado para que disfrutes una estancia inolvidable. ¡Todo lo que necesitas para relajarte y
                        disfrutar!</p>
                </div>
                <button class="btn-navigate">
                    <router-link to="/servicios" class="link-navigate">Ir a servicios</router-link>
                </button>
            </div>
            <div id="cardsRedireccion">
                <div class="historia">
                    <h3>Nuestra historia</h3>
                    <p> En un pintoresco pueblo costero se encuentra el Hotel de los Sueños Perdidos, un antiguo refugio
                        donde los sueños de sus huéspedes cobran vida. Originalmente una mansión privada, fue diseñada
                        por un arquitecto que podía soñar con los deseos de las personas.

                        Se dice que aquellos que se alojan en la habitación 7 experimentan una noche mágica, despertando
                        con nuevas perspectivas e inspiraciones. Además, el hotel cuenta con un jardín en la azotea,
                        donde flores que florecen solo en luna llena pueden conceder un deseo a quienes las recojan.

                        El Hotel de los Sueños Perdidos es más que un lugar para descansar; es un santuario de magia y
                        renovación, donde cada huésped puede escribir su propia historia. </p>
                </div>

            </div>

        </div>

    </div>
</template>

<script setup>
</script>

<style>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
}

body {
    background-color: rgb(54, 49, 43);
}


.containerCardPrincipal {
    display: flex;
    justify-content: center;
}

.cardPrincipal {
    display: flex;
    justify-content: center;
    width: 1500px;
    height: 600px;
    margin: 70px;
    background-image: url(https://solecocercos.com/wp-content/uploads/2021/03/hoteles-66-5.jpg);
    background-repeat: no-repeat;
    background-size: cover;
    border-radius: 10px;
}

.cardBienvenida {
    display: grid;
    justify-content: center;
    padding: 15px;
    color: darkgray;
    margin: 90px;
    background-color: rgba(0, 0, 0, 0.5);
    width: 600px;
    height: 400px;
    transition: transform 0.3s ease, background-color 0.3s ease;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.cardBienvenida:hover {
    transform: scale(1.05);
    background-color: rgba(0, 0, 0, 0.5);
}

.inputsReserva {
    display: grid;
}

.inputsReserva div {
    margin-bottom: 15px;
}

.inputsReserva button {
    border-radius: 5px;
    border: 1px solid #ccc;
    background-color: rgb(105, 91, 63);
    color: white;
    cursor: pointer;
}

label {
    display: block;
    margin-bottom: 5px;
    color: white;
}

select,
input[type="date"] {
    width: 100%;
    padding: 10px;
    border-radius: 5px;
    border: 1px solid #ccc;
    background-color: rgba(255, 255, 255, 0.1);
    color: darkgray;
}

select:focus,
input[type="date"]:focus {
    outline: none;
    border-color: #007BFF;
}

.fila2 {
    display: flex;
    justify-content: center;
}
.historia{
    margin: 50px;
}
.historia h3{
    margin-bottom: 10px;
}

#cardsRedireccion {
    width: 800px;
    height: 400px;
    margin: 70px;
    background-color: rgba(0, 0, 0, 0.5);
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    justify-content: center;
    text-align: center;
    justify-items: center;
    color: #ccc;
    transition: transform 0.3s ease, background-color 0.3s ease;
}

#cardsRedireccion:hover {
    transform: scale(1.05);
}



.habitacionesInicio img {
    width: 200px;
    height: 200px;
    border-radius: 10px;
    margin-top: 15px;
    margin-bottom: 10px;
}

.descripcionHabitacion {
    margin: 10px;
}

.fila3 {
    display: flex;
    justify-content: center;
}

.servicios {
    width: 1000px;
    height: 400px;
    margin: 70px;
    background-color: rgba(0, 0, 0, 0.5);
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    color: #ccc;

    justify-content: center;
    justify-items: center;
    text-align: center;
    transition: transform 0.3s ease, background-color 0.3s ease;
}

.servicios:hover {
    transform: scale(1.05);
}

.servicios img {
    width: 200px;
    height: 200px;
    margin-top: 20px;
    border-radius: 10px;
}

.actividades img {
    width: 200px;
    height: 200px;
    border-radius: 10px;
    margin-top: 15px;
    margin-bottom: 10px;
}


.btn-navigate {
    height: 40px;
    padding: 10px 20px;
    background-color: rgb(105, 91, 63);
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;
    margin-bottom: 20px;
}

.btn-navigate:hover {
    background-color: rgb(150, 137, 99);
}

.link-navigate {
    color: #ccc;
    text-decoration: none;
}

.link-navigate:hover {
    text-decoration: underline;
}

@media (max-width: 1115px){
    #cardsRedireccion{
        height: 900px;
    }
}

@media (max-width: 680px){
    .fila2{
        display: grid;
        grid-template-rows: repeat(2 1fr);
    }

    .fila3{
        display: grid;
        grid-template-rows: repeat(2 1fr);
    }

    #cardsRedireccion{
        width: 400px;
    }
}


</style>
