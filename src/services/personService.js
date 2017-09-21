import Vue from 'vue'
import VueResource from 'vue-resource'

Vue.use(VueResource);
var url = 'https://prueba-examen.herokuapp.com/PE2/';

export default {
    getPeople() {
        return Vue.http.get(url + 'People');
    },

    createPerson(newPerson) {
        return Vue.http.post(url + 'Person', newPerson);
    },

    editPerson(updatedFields, IDPerson) {
        return Vue.http.put(url + 'Person/' + IDPerson, updatedFields);
    },

    deletePerson(IDPerson) {
        return Vue.http.delete(url + 'Person/' + IDPerson);
    },

    addPetToPerson(newPet, IDPerson) {
        return Vue.http.put(url + 'addPetToPerson/' + IDPerson, newPet);
    },

    deletePetFromPerson(pet, IDPerson) {
        return Vue.http.put(url + 'deletePetFromPerson/' + IDPerson, pet);
    },

    addFriend(newFriend, IDPerson) {
        return Vue.http.put(url + 'addFriend/' + IDPerson, newFriend);
    },

    deleteFriend(friend, IDPerson) {
        return Vue.https.put(url + 'deleteFriend/' + IDPerson, friend);
    },

    getPersonById(IDPerson){
        return Vue.http.get(url + 'PersonById/' + IDPerson);
    }
}