<template>
  <div>
    <h3>Hola desde páginas</h3>
    {{ estudi }}
  </div>
</template>

<script setup>

const { client } = usePrismic()

const { data: estudi } = await useAsyncData('estudi', () => client.getByUID('page', 'estudi'))
console.log(client);
</script>