<template>
    <div class="edit">
        <v-container class="mb-0">
          <v-card flat>
              <v-text-field height=27 class="caption"
                  label="Original Langauge"
                  v-model.lazy="gloss.original"
                  spellcheck="false"
              ></v-text-field>
              <v-text-field height=27 class="caption" label="Original Gloss" v-model.lazy="gloss.gloss[0]" spellcheck="false"></v-text-field>
              <v-text-field height=27 class="caption" label="English Gloss" v-model.lazy="gloss.gloss[1]" spellcheck="false"></v-text-field>
              <v-text-field height=27 class="caption" label="Chinese Gloss" v-model.lazy="gloss.gloss[2]" spellcheck="false"></v-text-field>
              <v-text-field height=27 class="caption" label="English Translation" v-model.lazy="gloss.free[0]"></v-text-field>
              <v-text-field height=27 class="caption" label="Chinese Translation" v-model.lazy="gloss.free[1]" spellcheck="false"></v-text-field>
              <v-text-field height=27 class="caption" label="Comment" v-model.lazy="gloss.free[2]" spellcheck="false"></v-text-field>
          </v-card>
        </v-container>

        <v-bottom-navigation height=38 app class="grey lighten-3 mt-1">
          <Popup v-bind:gloss="gloss | removeEmptyGloss" />
          <span class='mx-1 pa-0'>
            <v-select :items="docs" label="Document" height=30 outlined dense></v-select>
          </span>
          <span class='mx-1 pa-0'>
            <v-select :items="gloss_num" label="Gloss" height=30 outlined dense></v-select>
          </span>
          <v-btn>
            <span>New Doc</span>
            <v-icon>mdi-pencil</v-icon>
          </v-btn>
          <v-btn>
            <span>Save</span>
            <v-icon>mdi-content-save-outline</v-icon>
          </v-btn>


        </v-bottom-navigation>
    </div>
</template>

<script>
import Popup from "@/components/GlossPreviewPopup.vue";
// @ is an alias to /src

export default {
    name: "Edit",
    components: {
        Popup
    },
    data() {
        return {
            docs: ['doc1', 'doc2'],
            gloss_num: [1, 2, 3, 4, 5, 'New'],
            gloss: {
                original:
                    "Die Umgangssprache ist ein Teil des menschlichen Organismus und nicht weniger kompliziert als dieser.",
                gloss: [
                    "die umgangssprache ist ein teil des mensch-lich-en organismus und nicht wenig-er komplizeiert als dies-er",
                    "DET.NOM.F.SG {colloquial language} be.3SG.PRS DET.NOM.M.SG part DET.GEN.M.SG human-ADJ-AGR.GEN.M.SG organism and NEG less-CMPR complicated CMPR DET-AGR.M.SG",
                    "the {colloquial language} is a part {of the} human organism and not less complicated than it"
                ],
                free: [
                    "‘Colloquial language is a part of the human organism and is not less complicated than it.’"
                ]
            },
        };
    },
    filters: {
      removeEmptyGloss: function(gloss) {
        var newGloss = {original: '', gloss: [], free: []}
        newGloss.original = gloss.original;
        gloss.gloss.forEach(elem => {
          if (elem != '') newGloss.gloss.push(elem)
        });
        gloss.free.forEach(elem => {
          if (elem != '') newGloss.free.push(elem)
        });
        return newGloss;
      }
    }
};
</script>
