import {VuexModule, Module, Mutation, Action} from 'vuex-module-decorators'
import Vue from 'vue';
import axios, {AxiosStatic} from 'axios';
import {Promise, resolve} from "q";

axios.defaults.baseURL = 'http://fantogramma.org/';
Vue.prototype.$axios = axios;

@Module({namespaced: true})
class CanvasModule extends VuexModule {
    public img = new Image(500,500);


    @Mutation
    public addImg(img: any): void {
        this.img.src = img;
    }

    @Action({rawError: true})
    public getImage(): any {
            axios.get('test.png', {responseType: 'blob'})
                .then(
                    response => {
                        const blob_file = response.data;
                        const file_url = URL.createObjectURL(blob_file);
                        this.context.commit('addImg', file_url);
                    }
                )
                .catch(error => {
                        throw error.response;
                    }
                )
    }
}

export default CanvasModule