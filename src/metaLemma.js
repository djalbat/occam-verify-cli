"use strict";

import MetalemmaMetatheorem from "./metalemmaMetatheorem";

export default class MetaLemma extends MetalemmaMetatheorem {
  static fromJSONAndFileContext(json, fileContext) { return MetalemmaMetatheorem.fromJSONAndFileContext(MetaLemma, json, fileContext); }

  static fromLabelsMetaSuppositionsMetaConsequentAndFileContext(labels, metaSuppositions, metaConsequent, fileContext) { return MetalemmaMetatheorem.fromLabelsMetaSuppositionsMetaConsequentAndFileContext(MetaLemma, labels, metaSuppositions, metaConsequent, fileContext); }
}
