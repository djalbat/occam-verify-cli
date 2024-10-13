"use strict";

import shim from "./shim";
import Declaration from "./declaration";
import Metavariable from "./metavariable";

import { FRAME_META_TYPE_NAME } from "./metaTypeNames";
import { nodeQuery, nodesQuery } from "./utilities/query";

const declarationNodesQuery = nodesQuery("/frame/declaration"),
      metavariableNodesQuery = nodesQuery("/frame/metavariable"),
      frameMetavariableNodeQuery = nodeQuery("/*/frame/metavariable!");

class Frame {
  constructor(string, declarations, metavariables) {
    this.string = string;
    this.declarations = declarations;
    this.metavariables = metavariables;
  }

  getString() {
    return this.string;
  }

  getDeclarations() {
    return this.declarations;
  }

  getMetavariables() {
    return this.metavariables;
  }

  getMetavariable() {
    let metavariable;

    const metavariablesLength = this.metavariables.length;

    if (metavariablesLength === 1) {
      const firstMetavariable = first(this.metavariables);

      metavariable = firstMetavariable; ///
    }

    return metavariable;
  }

  // getMetavariableNode() {
  //   let metavariableNode = null;
  //
  //   const declarationsLength = this.declarations.length;
  //
  //   if (declarationsLength === 0) {
  //     const metavariableNodesLength = this.metavariableNodes.length;
  //
  //     if (metavariableNodesLength === 1) {
  //       const firstMetavariableNode = first(this.metavariableNodes);
  //
  //       metavariableNode = firstMetavariableNode; ///
  //     }
  //   }
  //
  //   return metavariableNode;
  // }
  //
  // matchMetavariableName(metavariableName) {
  //   let metavariableNameMatches = false;
  //
  //   const metavariableNode = this.getMetavariableNode();
  //
  //   if (metavariableNode !== null) {
  //     const name = metavariableName;  ///
  //
  //     metavariableName = metavariableNameFromMetavariableNode(metavariableNode);  ///
  //
  //     const nameMatchesMetavariableName = (name === metavariableName);
  //
  //     metavariableNameMatches = nameMatchesMetavariableName;  ///
  //   }
  //
  //   return metavariableNameMatches;
  // }
  //
  // unifySubstitution(substitution) {
  //   const substitutionUnified = this.declarations.some((declaration) => {
  //     const substitutionUnifiedWithDeclaration = declaration.unifySubstitution(substitution);
  //
  //     if (substitutionUnifiedWithDeclaration) {
  //       return true;
  //     }
  //   });
  //
  //   return substitutionUnified;
  // }
  //
  // unifyMetaLemmaOrMetatheorem(metaLemmaMetatheorem) {
  //   const substitutions = metaLemmaMetatheorem.getSubstitutions(),
  //         substitutionsUnified = substitutions.everySubstitution((substitution) => {
  //           const substitutionUnified = this.unifySubstitution(substitution);
  //
  //           if (substitutionUnified) {
  //             return true;
  //           }
  //         }),
  //         metaLemmaOrMetaTheoremUnified = substitutionsUnified; ///
  //
  //   return metaLemmaOrMetaTheoremUnified;
  // }

  verify(localContext) {
    let verified;

    const frameString = this.string;  ///

    localContext.trace(`Verifying the '${frameString}' frame...`);

    const declarationsVerified = this.declarations.every((declaration) => {
      const declarationVerified = declaration.verify(localContext);

      return declarationVerified;
    });

    if (declarationsVerified) {
      const metavariablesVerified = this.metavariables.every((metavariable) => {
        const metavariableVerified = metavariable.verify(localContext);

        return metavariableVerified;
      });

      verified = metavariablesVerified; ///
    }

    if (verified) {
      localContext.debug(`...verified the '${frameString}' frame.`);
    }

    return verified;
  }

  verifyGivenMetaType(metaType, localContext) {
    let verifiedGivenMetaType = false;

    const frameString = this.string,  ///
          metaTypeString = metaType.getString();

    localContext.trace(`Verifying the '${frameString}' frame given the '${metaTypeString}' meta-type...`);

    const metaTypeName = metaType.getName();

    if (metaTypeName === FRAME_META_TYPE_NAME) {
      const verified = this.verify(localContext)

      verifiedGivenMetaType = verified; ///
    }

    if (verifiedGivenMetaType) {
      localContext.debug(`...verified the '${frameString}' frame given the '${metaTypeString}' meta-type.`);
    }

    return verifiedGivenMetaType;
  }

  static fromFrameNode(frameNode, localContext) {
    const declarationNodes = declarationNodesQuery(frameNode),
          metavariableNodes = metavariableNodesQuery(frameNode),
          declarations = declarationNodes.map((declarationNode) => {
            const declaration = Declaration.fromDeclarationNode(declarationNode, localContext);

            return declaration;
          }),
          metavariables = metavariableNodes.map((metavariableNode) => {
            const metavariable = Metavariable.fromMetavariableNode(metavariableNode, localContext);

            return metavariable;
          }),
          node = frameNode, ///
          string = localContext.nodeAsString(node),
          frame = new Frame(string, declarations, metavariables);

    return frame;
  }

  static fromDefinedAssertionNode(definedAssertionNode, localContext) {
    let frame = null;

    const frameMetavariableNode = frameMetavariableNodeQuery(definedAssertionNode);

    if (frameMetavariableNode !== null) {
      const metavariableNode = frameMetavariableNode, ///
            metavariable = Metavariable.fromMetavariableNode(metavariableNode, localContext),
            declarations = [],
            metavariables = [
              metavariable
            ],
            node = metavariableNode,  ///
            string = localContext.nodeAsString(node);

      frame = new Frame(string, declarations, metavariables);
    }

    return frame;
  }

  static fromContainedAssertionNode(containedAssertionNode, localContext) {
    let frame = null;

    const frameMetavariableNode = frameMetavariableNodeQuery(containedAssertionNode);

    if (frameMetavariableNode !== null) {
      const metavariableNode = frameMetavariableNode, ///
            metavariable = Metavariable.fromMetavariableNode(metavariableNode, localContext),
            declarations = [],
            metavariables = [
              metavariable
            ],
            node = metavariableNode,  ///
            string = localContext.nodeAsString(node);

      frame = new Frame(string, declarations, metavariables);
    }

    return frame;
  }

  // static fromDeclarations(declarations) {
  //   const metavariableNodes = [],
  //         frame = new Frame(declarations, metavariableNodes);
  //
  //   return frame;
  // }
  //
  // static fromMetavariableNode(metavariableNode) {
  //   const declarations = [],
  //         metavariableNodes = [
  //           metavariableNode
  //         ],
  //         frame = new Frame(declarations, metavariableNodes);
  //
  //   return frame;
  // }
  //
  // static fromDeclarationsAndMetavariableNodes(declarations, metavariableNodes) {
  //   const frame = new Frame(declarations, metavariableNodes);
  //
  //   return frame;
  // }
}

Object.assign(shim, {
  Frame
});

export default Frame;
