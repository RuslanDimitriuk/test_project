<template>
    <div>
        <div>
            <el-button type="primary" class="btn" @click="$router.push('/')">назад</el-button>
        </div>
        <el-table
                :data="tableData"
                stripe
                row-key="key"
                border
                class="table"
                :default-sort="{prop: 'key', order: 'ascending'}"
                :header-cell-style="getStyleHeader">
            <el-table-column
                    prop="key"
                    label="Keys"
                    :sort-method="sortByKey"
                    sortable
                    :sort-orders="['ascending', 'descending']"
                    order
                    width="180">
            </el-table-column>
            <el-table-column
                    prop="fruit"
                    label="Fruits"
                    sortable
                    :sort-orders="['ascending', 'descending']"
                    width="180">
            </el-table-column>
        </el-table>
    </div>
</template>

<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator';
    import {namespace} from 'vuex-class'

    const table = namespace('TableModule');
    @Component
    export default class Table extends Vue {
        @table.State
        public tableData!: void;
        @table.Action
        public getDataTable!: () => void;

        public getStyleHeader(data: { column: { order: string } }) {
            if (data.column.order === 'ascending') {
                return "background: green;"
            }
            if (data.column.order === 'descending') {
                return "background: blue;"
            }
            if (data.column.order === null) {
                return "background: none;"
            }
        }

//custom sort by the number part of the key
        public sortByKey(a: { key: string, fruit: string }, b: { key: string, fruit: string }) {
            let a1: number = +a.key.slice(3, a.key.length + 1);
            let b1: number = +b.key.slice(3, a.key.length + 1);
            if (a1 > b1) return 1;
            if (a1 < b1) return -1;
            if (a1 === b1) return 0;
        }

        created() {
               this.getDataTable();
        }
    }
</script>

<style scoped lang="scss">

    .table {
        margin: 20px auto;
        width: 362px;
    }
</style>