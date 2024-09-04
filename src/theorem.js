"use strict";

import TopLevelAssertion from "./topLevelAssertion";

export default class Theorem extends TopLevelAssertion {
  static fromJSONAndFileContext(json, fileContext) { return TopLevelAssertion.fromJSONAndFileContext(Theorem, json, fileContext); }

  static fromLabelsSuppositionsConsequentSubstitutionsAndFileContext(labels, suppositions, consequent, substitutions, fileContext) { return TopLevelAssertion.fromLabelsSuppositionsConsequentSubstitutionsAndFileContext(Theorem, labels, suppositions, consequent, substitutions, fileContext); }
}
