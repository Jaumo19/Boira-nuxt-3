<template>
  <div>
    <h3>Hola desde páginas</h3>
    <prismic-rich-text :field="estudi.data.nom_pagina" />

  </div>
</template>

<script setup>

const { client } = usePrismic()

const { data: estudi } = await useAsyncData('estudi', () => client.getSingle('estudi'))

</script>