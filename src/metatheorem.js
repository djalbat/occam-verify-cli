"use strict";

import MetaLemmaMetatheorem from "./metaLemmaMetatheorem";

export default class Metatheorem extends MetaLemmaMetatheorem {
  static fromJSONAndFileContext(json, fileContext) { return MetaLemmaMetatheorem.fromJSONAndFileContext(Metatheorem, json, fileContext); }

  static fromLabelsMetaSuppositionsMetaConsequentAndLocalContext(labels, suppositions, consequent, localContext) { return MetaLemmaMetatheorem.fromLabelsMetaSuppositionsMetaConsequentAndLocalContext(Metatheorem, labels, suppositions, consequent, localContext); }
}
