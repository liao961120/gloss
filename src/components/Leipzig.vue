<template>
    <div>
        <div class="example gloss--glossed">
            <p
                v-if="gloss.original"
                class="gloss__line--original gloss__line gloss__line--0"
            >{{ gloss.original }}</p>
            <div class="gloss__words">
                <div
                    class="gloss__word"
                    v-for="(len, idx2) in tokenizeGlossLength"
                    :key="idx2 + Math.random()"
                >
                    <p
                        v-for="(line, i) in tokenizeGloss"
                        :key="i + Math.random()"
                        :class="`gloss__line gloss__line--${i+1}`"
                    >
                        <template v-if="line[idx2].length > 1">
                            <template v-for="(tag, j) in line[idx2]">
                                <!-- if split by '-' -->
                                <template v-if="RegExp('[A-Z1-3]+-[A-Z1-3]+').test(tag)">
                                    <template v-for="(sub, k) in tag.split('-')">
                                        <abbr
                                            class="gloss__abbr"
                                            :title="abbr[sub]"
                                            :key="sub + Math.random()"
                                        >{{ sub }}</abbr>
                                        <template v-if="k + 1 < tag.split('-').length">-</template>
                                    </template>
                                </template>
                                <template v-else>
                                    <abbr
                                        class="gloss__abbr"
                                        :title="abbr[tag]"
                                        :key="tag + Math.random()"
                                    >{{ tag }}</abbr>
                                </template>

                                <template v-if="j + 1 < line[idx2].length">.</template>
                            </template>
                        </template>
                        <template v-else>
                            <template v-if="RegExp('^[A-Z1-3]+$').test(line[idx2][0])">
                                <abbr
                                    class="gloss__abbr"
                                    :title="abbr[line[idx2][0]]"
                                >{{ line[idx2][0] }}</abbr>
                            </template>
                            <template v-else>{{ line[idx2][0] }}</template>
                            
                        </template>
                    </p>
                </div>
            </div>

            <p
                v-for="(line, i) in gloss.free"
                :key="i + Math.random()"
                :class="`gloss__line--free gloss__line gloss__line--${tokenizeGlossLength[0] + i}`"
            >{{ line }}</p>
        </div>
    </div>
</template>

<script>
export default {
    computed: {
        tokenizeGloss: function() {
            //if (this.gloss.gloss.length == 0) return [];
            var tokenized = this.gloss.gloss.map(line =>
                line.match(/{(.*?)}|([^\s]+)/g).map(token =>
                    token
                        .replace(/^{/, "")
                        .replace(/}$/, "")
                        .split(".")
                )
            );

            // Replace shorter lines with "_" character
            var line_lens = tokenized.map(line => line.length);
            var max_line_len = Math.max(...line_lens)

            for (var i=0; i<tokenized.length; i++) {
                if (tokenized[i].length < max_line_len) {
                    var empty = new Array(max_line_len - tokenized[i].length).fill(['___']);
                    tokenized[i].push(...empty);
                }
                    
            }
            return tokenized;
        },
        tokenizeGlossLength: function() {
            if (this.gloss.gloss.length == 0) return [[0]];
            var tokenized = this.gloss.gloss.map(line =>
                line.match(/{(.*?)}|([^\s]+)/g).map(
                    token =>
                        token
                            .replace(/^{/, "")
                            .replace(/}$/, "")
                            .split(".").length
                )
            );
            // Find the gloss with least tokens, and return this gloss line
            var minGlossLength = tokenized.map(lst => lst.length);
            return tokenized[
                minGlossLength.indexOf(Math.max(...minGlossLength))
            ];
        }
    },
    props: ["gloss"],
    data() {
        return {
            /*
            gloss: {
                original: 'Die Umgangssprache ist ein Teil des menschlichen Organismus und nicht weniger kompliziert als dieser.',
                gloss: [
                    'die umgangssprache ist ein teil des mensch-lich-en organismus und nicht wenig-er komplizeiert als dies-er',
                    'DET.NOM.F.SG {colloquial language} be.3SG.PRS DET.NOM.M.SG part DET.GEN.M.SG human-ADJ-AGR.GEN.M.SG organism and NEG less-CMPR complicated CMPR DET-AGR.M.SG', 
                    'the {colloquial language} is a part {of the} human organism and not less complicated than it'
                    ],
                free: [
                    '‘Colloquial language is a part of the human organism and is not less complicated than it.’ — Wittgenstein'
                ],
            },
            */
            abbr: {
                ___: "placeholder",
                1: "first person",
                2: "second person",
                3: "third person",
                "1SG": "first person singular",
                "2SG": "second person singular",
                "3SG": "third person singular",
                "1PL": "first person plural",
                "2PL": "second person plural",
                "3PL": "third person plural",
                A: "agent-like argument of canonical transitive verb",
                ABL: "ablative",
                ABS: "absolutive",
                ACC: "accusative",
                ADJ: "adjective",
                ADV: "adverb(ial)",
                AGR: "agreement",
                ALL: "allative",
                ANTIP: "antipassive",
                APPL: "applicative",
                ART: "article",
                AUX: "auxiliary",
                BEN: "benefactive",
                CAUS: "causative",
                CLF: "classifier",
                COM: "comitative",
                COMP: "complementizer",
                COMPL: "completive",
                COND: "conditional",
                COP: "copula",
                CVB: "converb",
                DAT: "dative",
                DECL: "declarative",
                DEF: "definite",
                DEM: "demonstrative",
                DET: "determiner",
                DIST: "distal",
                DISTR: "distributive",
                DU: "dual",
                DUR: "durative",
                ERG: "ergative",
                EXCL: "exclusive",
                F: "feminine",
                FOC: "focus",
                FUT: "future",
                GEN: "genitive",
                IMP: "imperative",
                INCL: "inclusive",
                IND: "indicative",
                INDF: "indefinite",
                INF: "infinitive",
                INS: "instrumental",
                INTR: "intransitive",
                IPFV: "imperfective",
                IRR: "irrealis",
                LOC: "locative",
                M: "masculine",
                N: "neuter",
                NEG: "negation / negative",
                NMLZ: "nominalizer / nominalization",
                NOM: "nominative",
                OBJ: "object",
                OBL: "oblique",
                P: "patient-like argument of canonical transitive verb",
                PASS: "passive",
                PFV: "perfective",
                PL: "plural",
                POSS: "possessive",
                PRED: "predicative",
                PRF: "perfect",
                PRS: "present",
                PROG: "progressive",
                PROH: "prohibitive",
                PROX: "proximal / proximate",
                PST: "past",
                PTCP: "participle",
                PURP: "purposive",
                Q: "question particle / marker",
                QUOT: "quotative",
                RECP: "reciprocal",
                REFL: "reflexive",
                REL: "relative",
                RES: "resultative",
                S: "single argument of canonical intransitive verb",
                SBJ: "subject",
                SBJV: "subjunctive",
                SG: "singular",
                TOP: "topic",
                TR: "transitive",
                VOC: "vocative"
            }
        };
    }
};
</script>



<style scoped>
.gloss--glossed:after {
    clear: left;
    content: "";
    display: block;
}

ul.gloss--glossed,
ol.gloss--glossed {
    padding-left: 0;
}

ul.gloss--glossed li,
ol.gloss--glossed li {
    list-style-type: none;
}

.gloss__abbr {
    font-variant: small-caps;
    font-variant-numeric: oldstyle-nums;
    text-transform: lowercase;
}

.gloss__word {
    float: left;
    margin-bottom: 1em;
    margin-right: 1em;
}

.gloss__word p {
    margin: 0;
}

.gloss--no-space .gloss__word {
    margin-right: 0;
}

.gloss--no-space .gloss__word.gloss__word--spacer {
    margin-right: 1.5em;
}

.gloss__words:first-child,
.gloss--glossed li:first-child {
    margin-top: 1em;
}

.gloss--glossed li:last-child {
    margin-bottom: 1em;
}

.gloss__word .gloss__line:first-child {
    font-style: italic;
}

.gloss__line--original {
    font-weight: bold;
    margin-bottom: 1em;
}

.gloss__line--free,
.gloss__line--no-align {
    clear: left;
}

.gloss__line--hidden {
    display: none;
}
</style>