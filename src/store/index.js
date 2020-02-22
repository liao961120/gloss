import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    getters: {
        getGloss: (state) => function(docid, glossNum) {
            return state.documents.find(doc => doc.id === docid).glosses[glossNum]
        },
        getDocInfo: state => {
            var docids = state.documents.map(doc => doc.id);
            var glossNums = state.documents.map(doc => doc.glosses.length);
            var info = {}
            for (var i=0; i<docids.length; i++) {
                info[docids[i]] = Array.from(Array(glossNums[i]).keys())
                // Shift start to 1
                info[docids[i]] = info[docids[i]].map(num => num + 1)
            }
            return info
        }
    },
    state: {
        todos: [
            { id: 1, text: '...', done: true },
            { id: 2, text: '...', done: false }
        ],
        documents: [
            {
                id: 'doc1',
                date: '2020-02-11',
                glosses: [
                    {
                        original:
                            "Die Umgangssprache ist ein Teil des menschlichen Organismus.",
                        gloss: [
                            'die umgangssprache ist ein teil des mensch-lich-en organismus',
                            'DET.NOM.F.SG {colloquial language} be.3SG.PRS DET.NOM.M.SG part DET.GEN.M.SG human-ADJ-AGR.GEN.M.SG organism',
                            'the {colloquial language} is a part {of the} human organism'
                        ],
                        free: [
                            "‘Colloquial language is a part of the human organism.’"
                        ]
                    },
                ]
            },
            {
                id: 'doc2',
                date: '2020-02-11',
                glosses: [
                    {
                        original:
                            "張三討厭李四",
                        gloss: [
                            '張三 討厭 李四',
                            '{Zhang San} A {Li Si}',
                            '{Zhang San} hates {Li Si}'
                        ],
                        free: [
                            "‘Zhang San hates Lee Si.’"
                        ]
                    },
                    {
                        original:
                            "Die Umgangssprache ist ein Teil des menschlichen Organismus.",
                        gloss: [
                            'die umgangssprache ist ein teil des mensch-lich-en organismus',
                            'DET.NOM.F.SG {colloquial language} be.3SG.PRS DET.NOM.M.SG part DET.GEN.M.SG human-ADJ-AGR.GEN.M.SG organism',
                            'the {colloquial language} is a part {of the} human organism'
                        ],
                        free: [
                            "‘Colloquial language is a part of the human organism.’"
                        ]
                    },
                ]
            },
        ],
    },
    mutations: {
    },
    actions: {
    },
})
