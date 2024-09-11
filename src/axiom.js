"use strict";

import TopLevelAssertion from "./topLevelAssertion";

export default class Axiom extends TopLevelAssertion {
  static fromLabelsSuppositionsConsequentSubstitutionsAndFileContext(labels, suppositions, consequent, substitutions, fileContext) { return TopLevelAssertion.fromLabelsSuppositionsConsequentSubstitutionsAndFileContext(Axiom, labels, suppositions, consequent, substitutions, fileContext); }
}
