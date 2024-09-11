"use strict";

import TopLevelAssertion from "./topLevelAssertion";

export default class Lemma extends TopLevelAssertion {
  static fromLabelsSuppositionsConsequentSubstitutionsAndFileContext(labels, suppositions, consequent, substitutions, fileContext) { return TopLevelAssertion.fromLabelsSuppositionsConsequentSubstitutionsAndFileContext(Lemma, labels, suppositions, consequent, substitutions, fileContext); }
}
