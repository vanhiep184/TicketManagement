<template>
  <v-menu
    v-if="$auth.loggedIn"
    transition="slide-y-transition"
    open-on-hover
    bottom
    left
    offset-y
    max-width="300"
  >
    <template v-slot:activator="{ on, attrs }">
      <v-btn color="info" dark text outlined rounded elevation="0" v-bind="attrs" v-on="on">
        <v-avatar size="25">
          <img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John" />
        </v-avatar>
        &nbsp;
        {{$auth.user.name}}
      </v-btn>
    </template>
    <v-list>
      <v-list-item>
        <v-list-item-content
          class="text-center primary--text d-flex justify-center"
        >Hi! {{$auth.user.name}}</v-list-item-content>
      </v-list-item>
      <v-list-item>
        <v-btn
          outlined
          block
          width="200"
          color="primary"
          elevation="0"
          @click="$router.push('/admin')"
        >Admin Dashboard</v-btn>
      </v-list-item>
      <v-list-item>
        <v-btn
          outlined
          block
          width="200"
          color="primary"
          elevation="0"
          @click="doLogout()"
        >My profile</v-btn>
      </v-list-item>
      <v-list-item>
        <v-btn
          outlined
          block
          min-width="400"
          color="primary"
          elevation="0"
          @click="doLogout()"
        >Logout</v-btn>
      </v-list-item>
    </v-list>
  </v-menu>
  <!--
  <p v-if="$auth.loggedIn" @click="doLogout()">{{$auth.user.name}}</p>
  -->
  <v-menu v-else transition="slide-y-transition" open-on-hover bottom left offset-y max-width="300">
    <template v-slot:activator="{ on, attrs }">
      <v-btn color="info" dark elevation="0" v-bind="attrs" v-on="on">Account</v-btn>
    </template>
    <v-list>
      <v-list-item>
        <v-list-item-content
          class="caption text-center"
        >Sign in or register to take advantage of member-only offers!</v-list-item-content>
      </v-list-item>
      <v-list-item>
        <v-btn color="primary" block elevation="0" @click="$router.push('/auth/login')">Log in</v-btn>
      </v-list-item>
      <v-list-item>
        <v-btn
          outlined
          block
          color="primary"
          elevation="0"
          @click="$router.push('/auth/signup')"
        >Sign up</v-btn>
      </v-list-item>
    </v-list>
  </v-menu>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
@Component
export default class Account extends Vue {
  async doLogout() {
    await this.$auth.logout();
  }
}
</script>

<style scoped>
</style>
