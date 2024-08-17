"use strict";

import MetaLemmaMetatheorem from "./metaLemmaMetatheorem";

export default class Metatheorem extends MetaLemmaMetatheorem {
  static fromJSONAndFileContext(json, fileContext) { return MetaLemmaMetatheorem.fromJSONAndFileContext(Metatheorem, json, fileContext); }

  static fromLabelsMetaSuppositionsMetaConsequentAndLocalMetaContext(labels, suppositions, consequent, localMetaContext) { return MetaLemmaMetatheorem.fromLabelsMetaSuppositionsMetaConsequentAndLocalMetaContext(Metatheorem, labels, suppositions, consequent, localMetaContext); }
}
