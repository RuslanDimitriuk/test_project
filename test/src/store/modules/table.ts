import {VuexModule, Module, Mutation, Action} from 'vuex-module-decorators'
import Vue from 'vue';
import axios, {AxiosStatic} from 'axios';

axios.defaults.baseURL = 'http://fantogramma.org/';
Vue.prototype.$axios = axios;

@Module({namespaced: true})
class TableModule extends VuexModule {
    public tableData:  any[] = [];

    @Mutation
    public addDataTable(newData: any): void {
        this.tableData = [];
        for (let key in newData) {
            let obj = {
                key: key,
                fruit: newData[key].fruit
            }
            this.tableData.push(obj);
        }
    }

    @Action({rawError: true})
    public getDataTable(): void {
        axios.get('test.json')
            .then(
                response => {
                    this.context.commit('addDataTable', response.data);
                }
            )
            .catch(error => {
                    throw error.response
                }
            )
    }
}

export default TableModule