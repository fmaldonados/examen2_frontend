import Vue from 'vue'
import VueResource from 'vue-resource'

Vue.use(VueResource);

var url='https://examen2backend.herokuapp.com/';
export default {
	getBomb(params){
        console.log(url+params);
		return Vue.http.get(url+params);
	},
	createBomb(newBomb){
		return Vue.http.post(url,newBomb);
	},
    modifyBomb(params,newBomb){
		return Vue.http.put(url+params,newBomb);
	},
	deleteBomb(){
		return Vue.http.delete(url+params);
	}
}