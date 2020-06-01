<template>
    <div>
        <div>
            <el-button type="primary" class="btn" @click="$router.push('/')">назад</el-button>
        </div>
    </div>
</template>

<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator';
    import {namespace} from 'vuex-class'

    const table = namespace('TableModule');
    @Component
    export default class Table extends Vue {
        @table.State
        public name!: string;
        @table.Action
        public getDataTable!: () => void;

        created() {
            console.log(this.name);
            // debugger
            this.getDataTable();
        }
    }
</script>

<style scoped>

</style>