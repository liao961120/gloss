<template>
    <v-dialog max-width="900px">
        <!-- Activator -->
        <template v-slot:activator="{ on }">
            <v-btn slot="activator" v-on="on">
                <span>Preview</span>
                <v-icon>mdi-monitor-screenshot</v-icon>
            </v-btn>
        </template>

        <!-- Content -->
        <v-card>
            <v-card-title>
                <h4 class="grey--text text-uppercase">Preview</h4>
            </v-card-title>
            <v-card-text class="black--text">
                <Leipzig v-bind:gloss="gloss" />
            </v-card-text>
        </v-card>
    </v-dialog>
</template>

<script>
import Leipzig from '@/components/Leipzig.vue';

export default {
    components: {
        Leipzig,
    },
    props: {
        gloss: {
            type: Object
        }
    },
};
</script>
