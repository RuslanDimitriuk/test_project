import {VuexModule, Module, Mutation, Action} from 'vuex-module-decorators'
import Vue from 'vue';
import axios, {AxiosStatic} from 'axios';

axios.defaults.baseURL = 'http://fantogramma.org/';
Vue.prototype.$axios = axios;

@Module({namespaced: true})
class TableModule extends VuexModule {
    public name: string = 'Ruslan'

    @Mutation
    public setName(newName: string): void {
        this.name = newName
    }

    @Action({rawError: true})
    public getDataTable(): void {
        axios.get('test.json')
            .then(
                response =>
                {console.log(response.data)}
            )
            .catch(error => {
                    throw error.response
                }
            )
    }
}

export default TableModule