<template>
  <nav class="navbar">
    <div class="navbar-header">
      <router-link to="/" class="navbar-brand"> To-do List</router-link>
    </div>
    <ul class="nav navbar-nav navbar-right">
      <li>
        <button class="btn btn-danger log" v-show="isLoggedIn()" @click="handleLogout()">Log out </button>
        <button class="btn btn-info log" v-show="!isLoggedIn()" @click="handleLogin()">Log In</button>
      </li>
    </ul>
  </nav>
</template>

<script>

import {isLoggedIn, login, logout} from '@/services/AuthService'

export default {
  name: 'app-nav'
}
</script>
