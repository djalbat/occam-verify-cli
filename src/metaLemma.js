"use strict";

import TopLevelAssertion from "./topLevelAssertion";

export default class MetaLemma extends TopLevelAssertion {
  static fromJSONAndFileContext(json, fileContext) { return TopLevelAssertion.fromJSONAndFileContext(MetaLemma, json, fileContext); }

  static fromLabelsMetaSuppositionsMetaConsequentSubstitutionsAndFileContext(labels, metaSuppositions, metaConsequent, substitutions, fileContext) { return TopLevelAssertion.fromLabelsMetaSuppositionsMetaConsequentSubstitutionsAndFileContext(MetaLemma, labels, metaSuppositions, metaConsequent, substitutions, fileContext); }
}
