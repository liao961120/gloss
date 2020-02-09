<template>
  <div>
    <v-app-bar dense app height="35">
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title class="grey--text darken-5">Glosser</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-heart</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>
    </v-app-bar>

    <v-navigation-drawer app v-model="drawer" class="primary">
        
        <v-list>
            <v-list-item v-for="link in links" :key="link.text" router :to="link.route">
                <v-list-item-action>
                    <v-icon class="white--text">{{ link.icon }}</v-icon>
                </v-list-item-action>
                <v-list-item-content>
                    <v-list-item-title class="white--text">{{ link.text }}</v-list-item-title>
                </v-list-item-content>
            </v-list-item>
        </v-list>
    </v-navigation-drawer>

  </div>
</template>

<script>
export default {
    data() {
        return {
            drawer: false,
            links: [
                { icon: 'mdi-file-document-edit-outline', text: 'Edit', route: '/' },
                { icon: 'mdi-folder', text: 'Reader', route: '/reader' },
            ]
        }
    }
}
</script>