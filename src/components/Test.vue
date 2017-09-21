<template>

</template>


<script>
    import personService from './services/personService'
    import petService from './services/petService'

    export default {
        name: 'test',
        data(){
            return {
                role: '',
                allUsers: [],
                actualUser: {},
                logged: false,
                friend: {}

                //mascotas
                allPets: []
            }
        },
        methods: {
            LogIn(){
                var bcrypt = require('bcryptjs');
                this.allUsers = [];

                personService.getPeople().then(response => {
                this.allUsers = response.body;
                for(let i = 0; i < this.allUsers.length; i++){
                    if(this.username === this.allUsers[i].username){
                        bcrypt.compare(this.password, this.allUsers[i].password, this.verifyUser);
                        console.log('Usuario correcto');
                    }else{
                        console.log('Usuario incorrecto');
                    }
                }
                }, response => {
                    alert('Error');
                });
            },

            verifyUser(err,res){
                if(res){
                    this.logged = true;
                    localStorage.setItem('logged', true);
                    this.$router.push({path: "/home"});
                    
                    for(let i = 0; i < this.allUsers.length; i++){
                        if(this.allUsers[i].username === this.username){
                            this.actualUser = this.allUsers[i];
                            localStorage.setItem('IDUser', this.allUsers[i].IDPerson);
                            localStorage.setItem('path', "/home");
                            
                            if(this.actualUser.scope[0] === "regular"){
                                localStorage.setItem('role', "person");
                            }else if(this.actualUser.scope[0] === "admin"){
                                localStorage.setItem('role', "employee");
                            }else{
                                console.log('scope no contiene nada');
                            }
                        }
                    }
                }
            }
        },
  
        beforeCreate(){
            /*console.log(localStorage.getItem('IDUser'));
            if(localStorage.getItem('IDUser') === null){
                //this.$router.push({path: "/hello"});
                location.replace("https://www.w3schools.com");
                //https://prueba-examen.herokuapp.com
            }*/

            //traer personas
            if(true){
                console.log('entre a traer personas');

                personService.getPeople().then(response => {
                this.allUsers = response.body;

                console.log(this.allUsers);
                }, response => {
                    alert('Error');
                });
            }

            //crear mascotas
            if(true){
                var newPet = {name: 'nuevo', available: true};

                petService.createPet(newPet).then(response => {
                    alert('Created');

                    petService.getPets().then(response => {
                        this.allPets = response.body;
                    }, response => {
                        alert('Error');
                    });
                }, response => {
                    alert('Error');
                });
            }

            //crear persona
            if(true){
                var newPerson = {IDPerson: Number, username: this.username, password: this.password, 
                scope: 'admin o regular', name: this.name, age: this.age};

                personService.createPerson(newPerson).then(response => {
                }, response => {
                    alert('Error');
                });
            }

            //traer mascotas
            if(true){
                petService.getPets().then(response => {
                    this.allPets = response.body;
                }, response => {
                    alert('Error getting pets');
                });
            }

            //agregar amigos
            if(true){
                personService.addFriend({person: this.friend}, this.actualUser.IDPerson).then(response {
                }, response => {
                    alert('Error');
                });
            }
        }
    }
</script>



<style>

</style>