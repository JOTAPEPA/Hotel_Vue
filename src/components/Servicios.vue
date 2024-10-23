<template>
    <div class="container3">
        <div class="leftAlign">
            <div class="piscina"></div>
            <div class="textoDescripcionRigth">
                <h3>Piscina</h3>
                <p>Nuestra piscina es un oasis de tranquilidad, rodeada de exuberantes jardines y cómodas áreas de
                    descanso.
                    Con un diseño elegante y aguas cristalinas, es el lugar perfecto para relajarse bajo el sol,
                    disfrutar
                    de un refrescante chapuzón o simplemente descansar junto al agua con una bebida en mano. Ya sea que
                    busques un momento de calma o diversión en familia, nuestra piscina ofrece el escenario ideal para
                    una
                    experiencia inolvidable.</p>
            </div>
        </div>
        <div class="rigthAlign">
            <div class="textoDescripcionLeft">
                <h3>Restaurante</h3>
                <p> El Restaurante ofrece una experiencia culinaria excepcional, donde la gastronomía de comida
                    asiatica
                    se une a un ambiente elegante y acogedor. Nuestro menú, cuidadosamente elaborado con
                    ingredientes
                    frescos y locales, destaca por su creatividad y autenticidad.
                    Perfecto para desayunos tranquilos, comidas de negocios o cenas íntimas, te invitamos a
                    disfrutar de
                    nuestra excelente cocina, acompañada por una selecta carta de vinos y cocteles.
                    Te esperamos para hacer de tu estancia algo aún más memorable.</p>
            </div>
            <div class="restaurante1"></div>
        </div>
        <div class="leftAlign">
            <div class="parqueadero"></div>
            <div class="textoDescripcionRigth">
                <h3>Parqueadero</h3>
                <p>En [Nombre del Hotel], ofrecemos un parqueadero cómodo y seguro para nuestros huéspedes. Ubicado
                    cerca de la entrada principal, cuenta con vigilancia 24 horas y opciones de estacionamiento
                    cubierto. También disponemos de cargadores para vehículos eléctricos, asegurando que tu coche esté
                    en buenas manos durante tu estancia.</p>
            </div>

        </div>
        <div class="rigthAlign">
            <div class="textoDescripcionLeft">
                <h3>Bar</h3>
                <p>Situado en el elegante entorno de [Nombre del Hotel], el Bar [Nombre del Bar] es el lugar perfecto
                    para relajarte y disfrutar de una bebida bien preparada. Ofrecemos una amplia selección de cocteles
                    artesanales, vinos internacionales y cervezas locales, todo en un ambiente moderno y acogedor.
                    Ya sea para una reunión informal, un afterwork o una copa tranquila al final del día, nuestro bar te
                    invita a vivir una experiencia única en cada visita.
                </p>
            </div>
            <div class="bar"></div>
        </div>
    </div>

</template>

<script setup>
</script>

<style>
* {
    margin: 0;
}

.container3 {
    display: grid;
    flex-wrap: wrap;
    gap: 20px;
}

.piscina {
    background-image: url(https://media.timeout.com/images/102522513/750/562/image.jpg);
    width: 600px;
    height: 400px;
    background-color: rgba(0, 0, 0, 0.5);
    padding: 20px;
    border-radius: 10px;
    margin-top: 30px;
    display: grid;
    color: white;
    text-align: center;
}

.restaurante1 {
    width: 600px;
    height: 400px;
    background-image: url(https://images.pexels.com/photos/260922/pexels-photo-260922.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500);
    background-repeat: no-repeat;
    background-size: cover;
    border-radius: 10px;
}

.parqueadero {
    width: 600px;
    height: 400px;
    border-radius: 10px;
    background-image: url(https://media-cdn.tripadvisor.com/media/photo-s/11/ba/41/d4/parqueaderos-y-recepcion.jpg);
}

.bar{
    width: 600px;
    height: 400px;
    background-image: url(https://www.gentleman.excelsior.com.mx/wp-content/uploads/2019/03/G-BARRAS-01.jpg);
    border-radius: 10px;
}

.rigthAlign {
    display: flex;
    justify-content: end;
    margin-right: 30px;
    transition: transform 0.3s ease;
}

.rigthAlign:hover {
    transform: scale(1.05);

}

.leftAlign {
    display: flex;
    margin-left: 30px;
    transition: transform 0.3s ease;
}

.leftAlign:hover {
    transform: scale(1.05);
}

.textoDescripcionRigth {
    width: 500px;
    margin-top: 30px;
    padding: 20px;
    color: #ccc;
}

.textoDescripcionLeft {
    width: 500px;
    padding: 20px;
    color: #ccc;
    text-align: end
}

@media (max-width:1115px){

    .leftAlign{
        display: grid;
        width: 400px;
    }

    .rigthAlign{
        display: grid;
        width: 400px;
    }

    .textoDescripcionRigth{
        width: 400px;
    }
}

@media (max-width:670px){
    .piscina{
        width: 400px;
    }

    .restaurante1{
        width: 400px;
    }

    .parqueadero{
        width: 400px;
    }

    .bar{
        width: 400px;
    }
}
</style>
