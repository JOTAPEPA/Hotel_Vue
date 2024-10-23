<template>
    <div class="contact-form-container">
        <h2>Contáctanos</h2>
        <form @submit.prevent="enviarFormulario">
            <div class="form-group">
                <label for="nombre">Nombre:</label>
                <input type="text" id="nombre" v-model="formulario.nombre" @blur="validarCampo('nombre')">
                <span v-if="errores.nombre" class="error">{{ errores.nombre }}</span>
            </div>
            <div class="form-group">
                <label for="correo">Correo Electrónico:</label>
                <input type="email" id="correo" v-model="formulario.correo" @blur="validarCampo('correo')">
                <span v-if="errores.correo" class="error">{{ errores.correo }}</span>
            </div>
            <div class="form-group">
                <label for="telefono">Número de Teléfono:</label>
                <input type="tel" id="telefono" v-model="formulario.telefono" @blur="validarCampo('telefono')">
                <span v-if="errores.telefono" class="error">{{ errores.telefono }}</span>
            </div>
            <div class="form-group">
                <label for="mensaje">Mensaje:</label>
                <textarea id="mensaje" v-model="formulario.mensaje" @blur="validarCampo('mensaje')"></textarea>
                <span v-if="errores.mensaje" class="error">{{ errores.mensaje }}</span>
            </div>
            <button type="submit">Enviar</button>
        </form>
        <div id="map" class="map-container"></div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'

const formulario = ref({
    nombre: '',
    correo: '',
    telefono: '',
    mensaje: ''
})

const errores = ref({
    nombre: '',
    correo: '',
    telefono: '',
    mensaje: ''
})

const validarCampo = (campo) => {
    if (!formulario.value[campo]) {
        errores.value[campo] = `El campo ${campo} es obligatorio.`
    } else {
        errores.value[campo] = ''
    }
}

const enviarFormulario = () => {
    Object.keys(formulario.value).forEach(campo => validarCampo(campo))
    if (Object.values(errores.value).every(error => !error)) {
        console.log('Formulario enviado:', formulario.value)
        // Aquí puedes agregar la lógica para enviar el formulario, por ejemplo, usando una API
    }
}

onMounted(() => {
    // Inicializa el mapa de Leaflet
    const map = L.map('map').setView([6.667077930076425, -73.17374130984426], 13)

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map)

    L.marker([6.667077930076425, -73.17374130984426]).addTo(map)
        .bindPopup('Ubicación del hotel')
        .openPopup()
})
</script>

<style scoped>
.contact-form-container {
    max-width: 600px;
    margin: 0 auto;
    padding: 20px;
    border: 1px solid #444;
    border-radius: 10px;
    background-color: #333;
    color: #fff;
}

h2 {
    text-align: center;
    margin-bottom: 20px;
    color: #fff;
}

.form-group {
    margin-bottom: 15px;
}

label {
    display: block;
    margin-bottom: 5px;
    font-weight: bold;
    color: #fff;
}

input, textarea {
    width: 100%;
    padding: 10px;
    border: 1px solid #555;
    border-radius: 5px;
    background-color: #444;
    color: #fff;
}

input::placeholder, textarea::placeholder {
    color: #bbb;
}

button {
    display: block;
    width: 100%;
    padding: 10px;
    background-color: #555;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
}

button:hover {
    background-color: #666;
}

.error {
    color: #ff6b6b;
    font-size: 0.875em;
    margin-top: 5px;
}

.map-container {
    width: 100%;
    height: 400px;
    margin-top: 20px;
}
</style>
