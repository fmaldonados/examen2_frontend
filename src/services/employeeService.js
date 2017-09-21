import Vue from 'vue'
import VueResource from 'vue-resource'

Vue.use(VueResource);
var url = 'https://prueba-examen.herokuapp.com/PE2/';

export default {
    getEmployees() {
        return Vue.http.get(url + 'Employees');
    },

    createEmployee(newEmployee) {
        return Vue.http.post(url + 'Employee', newEmployee);
    },

    editEmployee(updatedFields, IDEmployee) {
        return Vue.http.put(url + 'Employee/' + IDEmployee, updatedFields);
    },

    deleteEmployee(IDEmployee) {
        return Vue.http.delete(url + 'Employee/' + IDEmployee);
    },

    getEmployeeById(IDEmployee){
        return Vue.http.get(url + 'EmployeeById/' + IDEmployee);
    }
}