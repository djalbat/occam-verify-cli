"use strict";

import TopLevelAssertion from "./topLevelAssertion";

export default class Metatheorem extends TopLevelAssertion {
  static fromJSONAndFileContext(json, fileContext) { return TopLevelAssertion.fromJSONAndFileContext(Metatheorem, json, fileContext); }

  static fromLabelsMetaSuppositionsMetaConsequentSubstitutionsAndFileContext(labels, suppositions, consequent, fileContext) { return TopLevelAssertion.fromLabelsMetaSuppositionsMetaConsequentSubstitutionsAndFileContext(Metatheorem, labels, suppositions, consequent, fileContext); }
}
