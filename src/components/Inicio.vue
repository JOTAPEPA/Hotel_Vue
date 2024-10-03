<template>
    <div class="container">
        <div class="slider">
            <ul>
                <li>
                    <img src="../../img/Habitacion.jpg" alt="">
                </li>
                <li>
                    <img src="../../img/Baño.jpg" alt="">
                </li>
                <li>
                    <img src="../../img/Desayuno.jpg" alt="">
                </li>
                <li>
                    <img src="../../img/Piscina.jpg" alt="">
                </li>
            </ul>
            <div class="card">
                <h2>Title</h2>
                <p>Description of the card content.</p>
            </div>
        </div>
    </div>
    </template>
    
    <script setup>
    </script>
    
    <style>
    .slider {
        height: 700px;
        width: 100%;
        position: relative; 
    }
    
    .slider ul {
        display: flex;
        animation: cambio 20s infinite alternate linear;
        width: 400%;   
    }
    
    .slider li {
        width: 100%;
        list-style: none;
    }
    
    .slider img {
        width: 1920px;
        height: 100%;   
    }
    
    .card {
        position: absolute;
        top: 20px; 
        left: 20px; 
        background: rgba(255, 255, 255, 0.8); 
        padding: 20px;
        border-radius: 10px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    }
    
    @keyframes cambio {
        0% {margin-left: 0;}
        20% {margin-left: 0;}
    
        25% {margin-left: -100%;}
        45% {margin-left: -100%;}
    
        50% {margin-left: -200%;}
        70% {margin-left: -200%;}
    
        75% {margin-left: -300%;}
        100% {margin-left: -300%;}
    }
    </style>