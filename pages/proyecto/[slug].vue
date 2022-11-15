<template>
    <div>
        <h1>S</h1>
        {{estudi}}
    </div>
</template>

<script setup>

const { client } = usePrismic()

const { data: estudi } = await useAsyncData('estudi', () => client.getByUID('estudi', '[slug]'))

</script>

