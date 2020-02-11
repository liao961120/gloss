<template>
    <div class="edit">
        <v-container class="ma-0">
          <v-row align="center">
            <v-col sm="12" :md="hideGloss ? 12 : 7" :lg="hideGloss ? 12 : 7" order-sm="2" order-lg="1">
                  <v-text-field height=27 class="caption"
                      label="Original Langauge"
                      v-model.lazy="gloss.original"
                      spellcheck="false"
                  ></v-text-field>
                  <v-text-field height=27 class="caption" label="Original Gloss" v-model="gloss.gloss[0]" spellcheck="false"></v-text-field>
                  <v-text-field height=27 class="caption" label="English Gloss" v-model="gloss.gloss[1]" spellcheck="false"></v-text-field>
                  <v-text-field height=27 class="caption" label="Chinese Gloss" v-model="gloss.gloss[2]" spellcheck="false"></v-text-field>
                  <v-text-field height=27 class="caption" label="English Translation" v-model="gloss.free[0]"></v-text-field>
                  <v-text-field height=27 class="caption" label="Chinese Translation" v-model="gloss.free[1]" spellcheck="false"></v-text-field>
                  <v-text-field height=27 class="caption" label="Comment" v-model="gloss.free[2]" spellcheck="false"></v-text-field>
            </v-col>
            <v-col sm="12" md="5" lg="5" order-sm="1" order-lg="2" align-self="start" class="pr-0 mr-0" :style="hideGloss ? 'display:none;' : ''">
              <Leipzig v-bind:gloss="gloss | removeEmptyGloss" />
            </v-col>
          </v-row>

        </v-container>

        <v-bottom-navigation height=38 app class="grey lighten-3 mt-1">
          <span class='mx-1 pa-0'>
            <v-select :items="Object.keys(docInfo)" v-model="selectGloss.docid" label="Document" height=30 outlined dense></v-select>
          </span>
          <span class='mx-1 pa-0'>
            <v-select :items="docInfo[selectGloss.docid]" v-model="selectGloss.glossNum" label="Gloss" height=30 outlined dense></v-select>
          </span>
          <v-btn>
            <span>New Doc</span>
            <v-icon>mdi-pencil</v-icon>
          </v-btn>
          <v-btn>
            <span>Save</span>
            <v-icon>mdi-content-save-outline</v-icon>
          </v-btn>
          <v-btn @click="hideGloss = !hideGloss">
            <span v-if="hideGloss">Show</span>
            <span v-else>Hide</span>
            <v-icon>mdi-monitor-screenshot</v-icon>
          </v-btn>


        </v-bottom-navigation>
    </div>
</template>

<script>
import Leipzig from "@/components/Leipzig.vue";
// @ is an alias to /src

export default {
    name: "Edit",
    components: {
        Leipzig
    },
    computed: {
      gloss() {
        //console.log(this.selectGloss.docid, this.selectGloss.glossNum - 1)
        var docid = this.selectGloss.docid.length > 0 ? this.selectGloss.docid : 'doc1';
        var glossNum = this.selectGloss.glossNum > 0 ? this.selectGloss.glossNum - 1 : 0
        //return this.$store.getters.getGloss('doc1', 0);
        return this.$store.getters.getGloss(docid, glossNum);
      },
      docInfo() {
        return this.$store.getters.getDocInfo;
      }
    },
    data() {
        return {
            selectGloss: {
              docid: '',
              glossNum: 0,
            },
            //docs: ['doc1', 'doc2'],
            //gloss_num: [1, 2, 3, 4, 5, 'New'],
            hideGloss: false,
        };
    },
    watch: {
      // Change selected glossNum when docid changes
      "selectGloss.docid": function() {
        if (this.docInfo[this.selectGloss.docid].length > 0)
          this.selectGloss.glossNum = this.docInfo[this.selectGloss.docid][0];
        else
          this.selectGloss.glossNum = ''
      }
    },
    created: function() {
      if (Object.keys(this.docInfo)[0]) {
        this.selectGloss.docid = Object.keys(this.docInfo)[0];
        if (this.docInfo[this.selectGloss.docid].length > 0)
          this.selectGloss.glossNum = this.docInfo[this.selectGloss.docid][0];
      }
        
      else
        this.selectGloss.docid = '';
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
        //console.log()
        return newGloss;
      }
    }
};
</script>
