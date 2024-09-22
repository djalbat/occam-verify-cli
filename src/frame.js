"use strict";

import { first } from "./utilities/array";

export default class Frame {
  constructor(declarations, metavariables) {
    this.declarations = declarations;
    this.metavariables = metavariables;
  }

  getDeclarations() {
    return this.declarations;
  }

  getMetavariables() {
    return this.metavariables;
  }

  getMetavariable() {
    let metavariable = null;

    const declarationsLength = this.declarations.length;

    if (declarationsLength === 0) {
      const metavariablesLength = this.metavariables.length;

      if (metavariablesLength === 1) {
        const firstMetavariable = first(this.metavariables);

        metavariable = firstMetavariable; ///
      }
    }

    return metavariable;
  }

  matchMetavariableName(metavariableName) {
    let metavariableNameMatches = false;

    const metavariable = this.getMetavariable();

    if (metavariable !== null) {
      const name = metavariableName,  ///
            nameMatches = metavariable.matchName(name);

      metavariableNameMatches = nameMatches;  ///
    }

    return metavariableNameMatches;
  }

  unifySubstitution(substitution) {
    const substitutionUnified = this.declarations.some((declaration) => {
      const substitutionUnifiedWithDeclaration = declaration.unifySubstitution(substitution);

      if (substitutionUnifiedWithDeclaration) {
        return true;
      }
    });

    return substitutionUnified;
  }

  unifyMetaLemmaOrMetatheorem(metaLemmaMetatheorem) {
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

  static fromMetavariable(metavariable) {
    const declarations = [],
          metavariables = [
            metavariable
          ],
          frame = new Frame(declarations, metavariables);

    return frame;
  }

  static fromDeclarations(declarations) {
    const metavariables = [],
          frame = new Frame(declarations, metavariables);

    return frame;
  }

  static fromDeclarationsAndMetavariables(declarations, metavariables) {
    const frame = new Frame(declarations, metavariables);

    return frame;
  }
}
