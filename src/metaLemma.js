"use strict";

import MetalemmaMetatheorem from "./metalemmaMetatheorem";

export default class MetaLemma extends MetalemmaMetatheorem {
  static fromJSONAndFileContext(json, fileContext) { return MetalemmaMetatheorem.fromJSONAndFileContext(MetaLemma, json, fileContext); }

  static fromLabelsMetaSuppositionsMetaConsequentAndLocalMetaContext(labels, suppositions, consequent, localMetaContext) { return MetalemmaMetatheorem.fromLabelsMetaSuppositionsMetaConsequentAndLocalMetaContext(MetaLemma, labels, suppositions, consequent, localMetaContext); }
}
