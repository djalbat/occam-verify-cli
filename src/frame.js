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

  matchSubstitution(substitution) {
    const matchesSubstitution = this.declarations.some((declaration) => {
      const declarationMatchesSubstitution = declaration.matchSubstitution(substitution);

      if (declarationMatchesSubstitution) {
        return true;
      }
    });

    return matchesSubstitution;
  }

  matchMetaLemmaOrMetaTheorem(metaLemmaMetatheorem) {
    const substitutions = metaLemmaMetatheorem.getSubstitutions(),
          matchesMetaLemmaOrMetaTheorem = substitutions.every((substitution) => {
            const frameMatchesSubstitution = this.matchSubstitution(substitution);

            if (frameMatchesSubstitution) {
              return true;
            }
          });

    return matchesMetaLemmaOrMetaTheorem;
  }

  static fromDeclarations(declarations) {
    const frame = new Frame(declarations);

    return frame;
  }
}
