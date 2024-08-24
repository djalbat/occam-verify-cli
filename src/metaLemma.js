"use strict";

import MetalemmaMetatheorem from "./metalemmaMetatheorem";

export default class MetaLemma extends MetalemmaMetatheorem {
  static fromJSONAndFileContext(json, fileContext) { return MetalemmaMetatheorem.fromJSONAndFileContext(MetaLemma, json, fileContext); }

  static fromLabelsMetaSuppositionsMetaConsequentSubstitutionsAndFileContext(labels, metaSuppositions, metaConsequent, substitutions, fileContext) { return MetalemmaMetatheorem.fromLabelsMetaSuppositionsMetaConsequentSubstitutionsAndFileContext(MetaLemma, labels, metaSuppositions, metaConsequent, substitutions, fileContext); }
}
