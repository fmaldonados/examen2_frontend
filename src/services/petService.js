import Vue from 'vue'
import VueResource from 'vue-resource'

Vue.use(VueResource);
var url = 'https://prueba-examen.herokuapp.com/PE2/';

export default {
    getPets() {
        return Vue.http.get(url + 'Pets');
    },

    createPet(newPet) {
        return Vue.http.post(url + 'Pet', newPet);
    },

    editPet(updatedFields, IDPet) {
        return Vue.http.put(url + 'Pet/' + IDPet, updatedFields);
    },

    deletePet(IDPet) {
        return Vue.http.delete(url + 'Pet/' + IDPet);
    },

    getPetById(IDPet){
        return Vue.http.get(url + 'PetById/' + IDPet);
    }
}