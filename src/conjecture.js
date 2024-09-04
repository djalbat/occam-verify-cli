"use strict";

import TopLevelAssertion from "./topLevelAssertion";

export default class Conjecture extends TopLevelAssertion {
  static fromJSONAndFileContext(json, fileContext) { return TopLevelAssertion.fromJSONAndFileContext(Conjecture, json, fileContext); }

  static fromLabelsSuppositionsConsequentSubstitutionsAndFileContext(labels, suppositions, consequent, substitutions, fileContext) { return TopLevelAssertion.fromLabelsSuppositionsConsequentSubstitutionsAndFileContext(Conjecture, labels, suppositions, consequent, substitutions, fileContext); }
}
