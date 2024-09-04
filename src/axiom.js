"use strict";

import TopLevelAssertion from "./topLevelAssertion";

export default class Axiom extends TopLevelAssertion {
  static fromJSONAndFileContext(json, fileContext) { return TopLevelAssertion.fromJSONAndFileContext(Axiom, json, fileContext); }

  static fromLabelsSuppositionsConsequentSubstitutionsAndFileContext(labels, suppositions, consequent, substitutions, fileContext) { return TopLevelAssertion.fromLabelsSuppositionsConsequentSubstitutionsAndFileContext(Axiom, labels, suppositions, consequent, substitutions, fileContext); }
}
