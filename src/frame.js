"use strict";

import { push, first } from "./utilities/array";

export default class Frame {
  constructor(declarations) {
    this.declarations = declarations;
  }

  getDeclarations() {
    return this.declarations;
  }

  getDeclaration() {
    let declaration = null;

    const singular = this.isSingular();

    if (singular) {
      const firstDeclaration = first(this.declarations);

      declaration = firstDeclaration; ///
    }

    return declaration;
  }

  isSingular() {
    const declarationsLength = this.declarations.length,
          singular = (declarationsLength === 1);

    return singular;
  }

  addDeclarations(declarations) {
    push(this.declarations, declarations);
  }

  unifySubstitution(substitution) {
    const substitutionUnified = this.declarations.some((declaration) => {
      const substitutionUnifiedAgainstDeclaration = declaration.unifySubstitution(substitution);

      if (substitutionUnifiedAgainstDeclaration) {
        return true;
      }
    });

    return substitutionUnified;
  }

  unifyMetaLemmaOrMetaTheorem(metaLemmaMetatheorem) {
    const substitutions = metaLemmaMetatheorem.getSubstitutions(),
          substitutionsUnified = substitutions.everySubstitution((substitution) => {
            const substitutionUnified = this.unifySubstitution(substitution);

            if (substitutionUnified) {
              return true;
            }
          }),
          metaLemmaOrMetaTheoremUnified = substitutionsUnified; ///

    return metaLemmaOrMetaTheoremUnified;
  }

  static fromDeclarations(declarations) {
    const frame = new Frame(declarations);

    return frame;
  }
}
