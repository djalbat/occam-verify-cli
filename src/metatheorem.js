"use strict";

import MetaLemmaMetatheorem from "./metaLemmaMetatheorem";

export default class Metatheorem extends MetaLemmaMetatheorem {
  static fromJSONAndFileContext(json, fileContext) { return MetaLemmaMetatheorem.fromJSONAndFileContext(Metatheorem, json, fileContext); }

  static fromLabelsMetaSuppositionsMetaConsequentSubstitutionsAndFileContext(labels, suppositions, consequent, fileContext) { return MetaLemmaMetatheorem.fromLabelsMetaSuppositionsMetaConsequentSubstitutionsAndFileContext(Metatheorem, labels, suppositions, consequent, fileContext); }
}
