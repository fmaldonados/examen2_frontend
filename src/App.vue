<template>
  <div id="app">
    <div v-show="scope=='regular'">
    <ul id="dropdown1" class="dropdown-content">
        <li> <a>Pets</a> </li>
      <li><a>Friends</a></li>
    </ul>
    <nav class='blue'>
      <div class="row">
        <div class="col s1 m1 l1">
          <div class="nav-wrapper">
            <a class="brand-logo">Prueba</a>
          </div>
        </div>
        <div class="col s3 m3 l3">
          <ul id="nav-mobile" >
            <router-link to = '/inicio'>
              <li><a>inicio</a></li>
            </router-link>
            <li><a>Components</a></li>
            <li><a>JavaScript</a></li>
          </ul>
        </div>
        <div class="input-field col s5 offset-s3">
          <div class="col s2 m2 l2">
            <ul id="nav-mobile" >
              <li><a class="dropdown-button"  data-activates="dropdown1">Dropdown<i class="material-icons right">arrow_drop_down</i></a></li>
            </ul>
          </div>
          <div class="col s1 m1 l1"></div>
          <div class="col s1 m1 l1 ">
            <i class="material-icons">search</i>
          </div>
          <div class="col s8 m8 l8 ">
            <input id="search" type="search" required>
          </div>
        </div> 
      </div>
    </nav>
  </div>
    <div v-show="!scope">
      <div v-show="!signIn">
        <div class="login">
          <div class="row">
            <form class="card col s3 offset-s4">
              <div class="row">
                <div class="input-field col s12">
                  <input id="first_name" type="text" class="validate">
                  <label for="first_name">Username</label>
                </div>
              </div>
              <div class="row">
                <div class="input-field col s12">
                  <input id="email" type="password" class="validate">
                  <label for="email">Password</label>
                </div>
              </div>
              <div class="row">
                <div class="col s12 ">
                  <a v-on:click="signIn=true" class="waves-effect waves-grey btn-flat">sign up</a>
                  <a class="waves-effect waves-light btn teal">login in</a>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div> 
    <div v-show="signIn">
        <div class="login">
          <div class="row">
            <form class="card col s3 offset-s4">
              <div class="row">
                <div class="input-field col s12">
                  <input id="first_name" type="text" class="validate">
                  <label for="first_name">Username</label>
                </div>
              </div>
              <div class="row">
                <div class="input-field col s12">
                  <input id="email" type="password" class="validate">
                  <label for="email">Name</label>
                </div>
              </div>
              <div class="row">
                <div class="input-field col s12">
                  <input id="email" type="password" class="validate">
                  <label for="email">Password</label>
                </div>
              </div>
              <div class="row">
                <div class="col s12 ">
                  <a v-on:click="signIn=false" class="waves-effect waves-grey btn-flat">log in</a>
                  <a class="waves-effect waves-light btn teal">sign in</a>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
  </div>
</template>

<script>

export default {
  name: 'app',
  data () {
    return{
      scope:"regular",
      signIn:false
    }
  },
}
</script>
<style>
  .login{
    background:black;
    padding-top:10%;
    height:638px;
  }
</style>