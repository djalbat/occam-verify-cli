"use strict";

import MetalemmaMetatheorem from "./metalemmaMetatheorem";

export default class MetaLemma extends MetalemmaMetatheorem {
  static fromJSONAndFileContext(json, fileContext) { return MetalemmaMetatheorem.fromJSONAndFileContext(MetaLemma, json, fileContext); }

  static fromLabelsMetaSuppositionsMetaConsequentAndLocalContext(labels, suppositions, consequent, localContext) { return MetalemmaMetatheorem.fromLabelsMetaSuppositionsMetaConsequentAndLocalContext(MetaLemma, labels, suppositions, consequent, localContext); }
}
