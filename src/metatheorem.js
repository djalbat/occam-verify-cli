"use strict";

import TopLevelAssertion from "./topLevelAssertion";

export default class Metatheorem extends TopLevelAssertion {
  static fromLabelsSuppositionsConsequentSubstitutionsAndFileContext(labels, suppositions, consequent, substitutions, fileContext) { return TopLevelAssertion.fromLabelsSuppositionsConsequentSubstitutionsAndFileContext(Metatheorem, labels, suppositions, consequent, substitutions, fileContext); }
}
