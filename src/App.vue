 <template>
  <q-layout view="hhr lpR fFf" >

    <q-header id="header" height-hint="98" >
      <q-toolbar >
        <q-toolbar-title>
          <q-avatar>
          </q-avatar>
        </q-toolbar-title>
      </q-toolbar>

      <q-tabs align="center">
        <q-route-tab to="/" label="Inicio" />
        <q-route-tab to="/Habitaciones" label="Habitaciones" />
        <q-route-tab to="/Servicios" label="Servicios" />
        <q-route-tab to="/Actividades" label="Actividades" />
        <q-route-tab to="/Contacto" label="Contacto" />
      </q-tabs>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>

  </q-layout>
</template>

<script setup>
</script>

<style>
*{
    margin: 0;
}
#header{
    background-color:rgb(41,38,29) ;
}

</style>
