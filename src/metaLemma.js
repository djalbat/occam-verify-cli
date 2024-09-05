"use strict";

import TopLevelAssertion from "./topLevelAssertion";

export default class MetaLemma extends TopLevelAssertion {
  static fromJSONAndFileContext(json, fileContext) { return TopLevelAssertion.fromJSONAndFileContext(MetaLemma, json, fileContext); }

  static fromLabelsSuppositionsConsequentSubstitutionsAndFileContext(labels, suppositions, consequent, substitutions, fileContext) { return MetaLemma.fromLabelsSuppositionsConsequentSubstitutionsAndFileContext(Metatheorem, labels, suppositions, consequent, substitutions, fileContext); }
}
