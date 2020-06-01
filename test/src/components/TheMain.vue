<template>
    <div>
        <el-button type="primary" class="btn" @click="$router.push('/table')">таблица</el-button>
        <el-button type="success" class="btn" @click="$router.push('/canvas')">холст</el-button>
    </div>
</template>

<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator';
    @Component
    export default class TheMain extends Vue {

    }
</script>

<style scoped>

</style>