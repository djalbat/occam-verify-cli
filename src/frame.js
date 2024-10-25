"use strict";

import { arrayUtilities } from "necessary";

import shim from "./shim";

import { FRAME_META_TYPE_NAME } from "./metaTypeNames";
import { nodeQuery, nodesQuery } from "./utilities/query";

const frameNodeQuery = nodeQuery("/*/frame"),
      declarationNodesQuery = nodesQuery("/frame/declaration"),
      metavariableNodeQuery = nodeQuery("/frame/metavariable!"),
      metavariableNodesQuery = nodesQuery("/frame/metavariable");

const { first } = arrayUtilities;

class Frame {
  constructor(string, node, declarations, metavariables) {
    this.string = string;
    this.node = node;
    this.declarations = declarations;
    this.metavariables = metavariables;
  }

  getString() {
    return this.string;
  }

  getNode() {
    return this.node;
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

  getMetavariableNode() {
    let metavariableNode = null;

    const metavariable = this.getMetavariable();

    if (metavariable !== null) {
      metavariableNode = metavariable.getNode();
    }

    return metavariableNode;
  }

  matchFrameNode(frameNode) {
    const frameNodeMatches = this.node.match(frameNode);

    return frameNodeMatches;
  }

  matchMetavariableNode(metavariableNode) {
    let metavariableNodeMatches = false;

    const metavariable = this.getMetavariable();

    if (metavariable !== null) {
      metavariableNodeMatches = metavariable.matchMetavariableNode(metavariableNode);
    }

    return metavariableNodeMatches;
  }

  unifySubstitution(substitution, context) {
    let substitutionUnified = false;

    const substitutionString = substitution.getString();

    context.trace(`Unifying the '${substitutionString}' substitution...`)

    if (!substitutionUnified) {
      substitutionUnified = this.declarations.some((declaration) => {
        const substitutionUnified = declaration.unifySubstitution(substitution, context);

        if (substitutionUnified) {
          return true;
        }
      });
    }

    if (!substitutionUnified) {
      substitutionUnified = this.metavariables.some((metavariable) => {
        const substitutionUnified = metavariable.unifySubstitution(substitution, context);

        if (substitutionUnified) {
          return true;
        }
      });
    }

    if (substitutionUnified) {
      context.debug(`...unified the '${substitutionString}' substitution...`)
    }

    return substitutionUnified;
  }

  unifyMetaLemmaOrMetatheorem(metaLemmaMetatheorem, context) {
    let metaLemmaMetatheoremUnified;

    const metaLemmaMetatheoremString = metaLemmaMetatheorem.getString();

    context.trace(`Unifying the '${metaLemmaMetatheoremString}' meta-lemma or metatheorem...`);

    const substitutions = metaLemmaMetatheorem.getSubstitutions(),
          substitutionsUnified = substitutions.everySubstitution((substitution) => {
            const substitutionUnified = this.unifySubstitution(substitution, context);

            if (substitutionUnified) {
              return true;
            }
          });

    metaLemmaMetatheoremUnified = substitutionsUnified; ///

    if (metaLemmaMetatheoremUnified) {
      context.debug(`...unified the '${metaLemmaMetatheoremString}' meta-lemma or metatheorem.`);
    }

    return metaLemmaMetatheoremUnified;
  }

  unifyAxiomLemmaTheoremOrConjecture(axiomLemmaTheoremOrConjecture, context) {
    let axiomLemmaTheoremOrConjectureUnified;

    const axiomLemmaTheoremStringOrConjecture = axiomLemmaTheoremOrConjecture.getString();

    context.trace(`Unifying the '${axiomLemmaTheoremStringOrConjecture}' axiom, lemma, theorem or conjecture...`);

    const substitutions = axiomLemmaTheoremOrConjecture.getSubstitutions(),
          substitutionsUnified = substitutions.everySubstitution((substitution) => {
            const substitutionUnified = this.unifySubstitution(substitution, context);

            if (substitutionUnified) {
              return true;
            }
          });

    axiomLemmaTheoremOrConjectureUnified = substitutionsUnified; ///

    if (axiomLemmaTheoremOrConjectureUnified) {
      context.debug(`...unified the '${axiomLemmaTheoremStringOrConjecture}' axiom, lemma, theorem or conjecture.`);
    }

    return axiomLemmaTheoremOrConjectureUnified;
  }

  verify(assignments, stated, context) {
    let verified = false;

    const frameString = this.string;  ///

    context.trace(`Verifying the '${frameString}' frame...`);

    const declarationsVerified = this.declarations.every((declaration) => {
      const declarationVerified = declaration.verify(assignments, stated, context);

      return declarationVerified;
    });

    if (declarationsVerified) {
      const  metavariablesVerified = this.metavariables.every((metavariable) => {
        const metavariableVerified = metavariable.verify(context);

        return metavariableVerified;
      });

      if (metavariablesVerified) {
        let verifiedWhenStated = false,
            verifiedWhenDerived = false;

        if (stated) {
          verifiedWhenStated = this.verifyWhenStated(assignments, context);
        } else {
          verifiedWhenDerived = this.verifyWhenDerived(assignments, context);
        }

        if (verifiedWhenStated || verifiedWhenDerived) {
          verified = true;
        }
      }
    }

    if (verified) {
      context.debug(`...verified the '${frameString}' frame.`);
    }

    return verified;
  }

  verifyWhenStated(assignments, context) {
    let verifiedWhenStated = false;

    const frameString = this.string;  ///

    context.trace(`Verifying the '${frameString}' frame when stated...`);

    const declarationsLength = this.declarations.length;

    if (declarationsLength > 0) {
      context.trace(`The '${frameString}' stated frame cannot have declarations.`);
    } else {
      const metavariablesLength = this.metavariables.length;

      if (metavariablesLength > 1) {
        context.trace(`The '${frameString}' stated frame cannot have more than one metavariable.`);
      } else {
        verifiedWhenStated = true;
      }
    }

    if (verifiedWhenStated) {
      context.debug(`...verified the '${frameString}' frame when stated.`);
    }

    return verifiedWhenStated;
  }

  verifyWhenDerived(assignments, context) {
    let verifiedWhenDerived;

    const frameString = this.string;  ///

    context.trace(`Verifying the '${frameString}' frame when derived...`);

    verifiedWhenDerived = true;

    if (verifiedWhenDerived) {
      context.debug(`...verified the '${frameString}' frame when derived.`);
    }

    return verifiedWhenDerived;
  }

  verifyGivenMetaType(metaType, assignments, stated, context) {
    let verifiedGivenMetaType = false;

    const frameString = this.string,  ///
          metaTypeString = metaType.getString();

    context.trace(`Verifying the '${frameString}' frame given the '${metaTypeString}' meta-type...`);

    const metaTypeName = metaType.getName();

    if (metaTypeName === FRAME_META_TYPE_NAME) {
      const verified = this.verify(assignments, stated, context)

      verifiedGivenMetaType = verified; ///
    }

    if (verifiedGivenMetaType) {
      context.debug(`...verified the '${frameString}' frame given the '${metaTypeString}' meta-type.`);
    }

    return verifiedGivenMetaType;
  }

  static fromFrameNode(frameNode, context) {
    let frame = null;

    if (frameNode !== null) {
      const { Declaration, Metavariable } = shim,
            declarationNodes = declarationNodesQuery(frameNode),
            metavariableNodes = metavariableNodesQuery(frameNode),
            declarations = declarationNodes.map((declarationNode) => {
              const declaration = Declaration.fromDeclarationNode(declarationNode, context);

              return declaration;
            }),
            metavariables = metavariableNodes.map((metavariableNode) => {
              const metavariable = Metavariable.fromMetavariableNode(metavariableNode, context);

              return metavariable;
            }),
            node = frameNode, ///
            string = context.nodeAsString(node);

      frame = new Frame(string, node, declarations, metavariables);
    }

    return frame;
  }

  static fromDefinedAssertionNode(definedAssertionNode, context) {
    let frame = null;

    const frameNode = frameNodeQuery(definedAssertionNode);

    if (frameNode !== null) {
      const metavariableNode = metavariableNodeQuery(frameNode);

      if (metavariableNode !== null) {
        const { Metavariable } = shim,
              metavariable = Metavariable.fromMetavariableNode(metavariableNode, context),
              declarations = [],
              metavariables = [
                metavariable
              ],
              node = frameNode,  ///
              string = context.nodeAsString(node);

        frame = new Frame(string, node, declarations, metavariables);
      }
    }

    return frame;
  }

  static fromContainedAssertionNode(containedAssertionNode, context) {
    let frame = null;

    const frameNode = frameNodeQuery(containedAssertionNode);

    if (frameNode !== null) {
      const metavariableNode = metavariableNodeQuery(frameNode);

      if (metavariableNode !== null) {
        const { Metavariable } = shim,
              metavariable = Metavariable.fromMetavariableNode(metavariableNode, context),
              declarations = [],
              metavariables = [
                metavariable
              ],
              node = frameNode,  ///
              string = context.nodeAsString(node);

        frame = new Frame(string, node, declarations, metavariables);
      }
    }

    return frame;
  }
}

Object.assign(shim, {
  Frame
});

export default Frame;
