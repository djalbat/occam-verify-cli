"use strict";

import TopLevelAssertion from "./topLevelAssertion";

export default class Lemma extends TopLevelAssertion {
  static fromJSONAndFileContext(json, fileContext) { return TopLevelAssertion.fromJSONAndFileContext(Lemma,json, fileContext); }

  static fromLabelsSuppositionsConsequentSubstitutionsAndFileContext(labels, suppositions, consequent, substitutions, fileContext) { return TopLevelAssertion.fromLabelsSuppositionsConsequentSubstitutionsAndFileContext(Lemma, labels, suppositions, consequent, substitutions, fileContext); }
}
