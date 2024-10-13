"use strict";

import { arrayUtilities } from "necessary";

import { metavariableNameFromMetavariableNode } from "./utilities/name";

const { first } = arrayUtilities;

export default class Frame {
  constructor(declarations, metavariableNodes) {
    this.declarations = declarations;
    this.metavariableNodes = metavariableNodes;
  }

  getDeclarations() {
    return this.declarations;
  }

  getMetavariableNodes() {
    return this.metavariableNodes;
  }

  getMetavariableNode() {
    let metavariableNode = null;

    const declarationsLength = this.declarations.length;

    if (declarationsLength === 0) {
      const metavariableNodesLength = this.metavariableNodes.length;

      if (metavariableNodesLength === 1) {
        const firstMetavariableNode = first(this.metavariableNodes);

        metavariableNode = firstMetavariableNode; ///
      }
    }

    return metavariableNode;
  }

  matchMetavariableName(metavariableName) {
    let metavariableNameMatches = false;

    const metavariableNode = this.getMetavariableNode();

    if (metavariableNode !== null) {
      const name = metavariableName;  ///

      metavariableName = metavariableNameFromMetavariableNode(metavariableNode);  ///

      const nameMatchesMetavariableName = (name === metavariableName);

      metavariableNameMatches = nameMatchesMetavariableName;  ///
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

  static fromDeclarations(declarations) {
    const metavariableNodes = [],
          frame = new Frame(declarations, metavariableNodes);

    return frame;
  }

  static fromMetavariableNode(metavariableNode) {
    const declarations = [],
          metavariableNodes = [
            metavariableNode
          ],
          frame = new Frame(declarations, metavariableNodes);

    return frame;
  }

  static fromDeclarationsAndMetavariableNodes(declarations, metavariableNodes) {
    const frame = new Frame(declarations, metavariableNodes);

    return frame;
  }
}
