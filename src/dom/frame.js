"use strict";

import { arrayUtilities } from "necessary";

import dom from "../dom";

import { domAssigned } from "../dom";
import { FRAME_META_TYPE_NAME } from "../metaTypeNames";
import { nodeQuery, nodesQuery } from "../utilities/query";

const declarationNodesQuery = nodesQuery("/frame/declaration"),
      metavariableNodeQuery = nodeQuery("/frame/metavariable!"),
      metavariableNodesQuery = nodesQuery("/frame/metavariable"),
      parameterFrameNodeQuery = nodeQuery("/parameter/frame"),
      definedAssertionFrameNodeQuery = nodeQuery("/definedAssertion/frame"),
      containedAssertionFrameNodeQuery = nodeQuery("/containedAssertion/frame");

const { first } = arrayUtilities;

export default domAssigned(class Frame {
  constructor(string, node, tokens, declarations, metavariables) {
    this.string = string;
    this.node = node;
    this.tokens = tokens;
    this.declarations = declarations;
    this.metavariables = metavariables;
  }

  getString() {
    return this.string;
  }

  getNode() {
    return this.node;
  }

  getTokens() {
    return this.tokens;
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

  isEqualTo(frame) {
    const frameString = frame.getString(),
          equalTo = (frameString === this.string);

    return equalTo;
  }

  unifySubstitution(substitution, context) {
    let substitutionUnified = false;

    const frameString = this.string,  ///
          substitutionString = substitution.getString();

    context.trace(`Unifying the '${substitutionString}' substitution with the '${frameString}' frame...`)

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
      context.debug(`...unified the '${substitutionString}' substitution with the '${frameString}' frame...`)
    }

    return substitutionUnified;
  }

  unifyMetaLemmaMetatheorem(metaLemmaMetatheorem, context) {
    let metaLemmaMetatheoremUnified;

    const frameString = this.string,  ///
          metaLemmaMetatheoremString = metaLemmaMetatheorem.getString();

    context.trace(`Unifying the '${metaLemmaMetatheoremString}' meta-lemma or metatheorem with the '${frameString}' frame...`);

    const substitutions = metaLemmaMetatheorem.getSubstitutions(),
          substitutionsUnified = substitutions.everySubstitution((substitution) => {
            const substitutionUnified = this.unifySubstitution(substitution, context);

            if (substitutionUnified) {
              return true;
            }
          });

    metaLemmaMetatheoremUnified = substitutionsUnified; ///

    if (metaLemmaMetatheoremUnified) {
      context.debug(`...unified the '${metaLemmaMetatheoremString}' meta-lemma or metatheorem with the '${frameString}' frame.`);
    }

    return metaLemmaMetatheoremUnified;
  }

  unifyAxiomLemmaTheoremOrConjecture(axiomLemmaTheoremOrConjecture, context) {
    let axiomLemmaTheoremOrConjectureUnified;

    const frameString = this.string,  ///
          axiomLemmaTheoremStringOrConjecture = axiomLemmaTheoremOrConjecture.getString();

    context.trace(`Unifying the '${axiomLemmaTheoremStringOrConjecture}' axiom, lemma, theorem or conjecture with the '${frameString}' frame...`);

    const substitutions = axiomLemmaTheoremOrConjecture.getSubstitutions(),
          substitutionsUnified = substitutions.everySubstitution((substitution) => {
            const substitutionUnified = this.unifySubstitution(substitution, context);

            if (substitutionUnified) {
              return true;
            }
          });

    axiomLemmaTheoremOrConjectureUnified = substitutionsUnified; ///

    if (axiomLemmaTheoremOrConjectureUnified) {
      context.debug(`...unified the '${axiomLemmaTheoremStringOrConjecture}' axiom, lemma, theorem or conjecture with the '${frameString}' frame.`);
    }

    return axiomLemmaTheoremOrConjectureUnified;
  }

  verify(assignments, stated, context) {
    let verified = false;

    const frameString = this.string;  ///

    context.trace(`Verifying the '${frameString}' frame...`);

    const declarationsVerified = this.verifyDeclarations(this.declarations, assignments, stated, context);

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

  verifyDeclarations(declarations, assignments, stated, context) {
    stated = true;  ///

    assignments = null; ///

    const declarationsVerified = declarations.every((declaration) => {
      const frame = null, ///
            declarationVerified = declaration.verify(frame, assignments, stated, context);

      return declarationVerified;
    });

    return declarationsVerified;
  }

  verifyWhenStated(assignments, context) {
    let verifiedWhenStated = false;

    const frameString = this.string;  ///

    context.trace(`Verifying the '${frameString}' stated frame...`);

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
      context.debug(`...verified the '${frameString}' stated frame.`);
    }

    return verifiedWhenStated;
  }

  verifyWhenDerived(assignments, context) {
    let verifiedWhenDerived;

    const frameString = this.string;  ///

    context.trace(`Verifying the '${frameString}' derived frame...`);

    verifiedWhenDerived = true;

    if (verifiedWhenDerived) {
      context.debug(`...verified the '${frameString}' derived frame.`);
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

  static name = "Frame";

  static fromFrameNode(frameNode, context) {
    let frame = null;

    if (frameNode !== null) {
      const node = frameNode, ///
            string = context.nodeAsString(node),
            tokens = context.nodeAsTokens(node),
            declarations = declarationsFromFrameNode(frameNode, context),
            metavariables = metavariablesFromFrameNode(frameNode, context);

      frame = new Frame(string, node, tokens, declarations, metavariables);
    }

    return frame;
  }

  static fromParameterNode(parameterNode, context) {
    let frame = null;

    const parameterFrameNode = parameterFrameNodeQuery(parameterNode);

    if (parameterFrameNode !== null) {
      const frameNode = parameterFrameNode,///
            metavariableNode = metavariableNodeQuery(frameNode);

      if (metavariableNode !== null) {
        frameFromFrameNodeAndMetavariableNode(frameNode, metavariableNode, context)      }
    }

    return frame;
  }

  static fromDefinedAssertionNode(definedAssertionNode, context) {
    let frame = null;

    const definedAssertionFrameNode = definedAssertionFrameNodeQuery(definedAssertionNode);

    if (definedAssertionFrameNode !== null) {
      const frameNode = definedAssertionFrameNode,  ///
            metavariableNode = metavariableNodeQuery(frameNode);

      if (metavariableNode !== null) {
        frameFromFrameNodeAndMetavariableNode(frameNode, metavariableNode, context)
      }
    }

    return frame;
  }

  static fromContainedAssertionNode(containedAssertionNode, context) {
    let frame = null;

    const containedAssertionFrameNode = containedAssertionFrameNodeQuery(containedAssertionNode);

    if (containedAssertionFrameNode !== null) {
      const frameNode = containedAssertionFrameNode,  ///
            metavariableNode = metavariableNodeQuery(frameNode);

      if (metavariableNode !== null) {
        frame = frameFromFrameNodeAndMetavariableNode(frameNode, metavariableNode, context);
      }
    }

    return frame;
  }
});

function frameFromFrameNodeAndMetavariableNode(frameNode, metavariableNode, context) {
  const { Frame, Metavariable } = dom,
        metavariable = Metavariable.fromMetavariableNode(metavariableNode, context),
        declarations = [],
        metavariables = [
          metavariable
        ],
        node = frameNode,  ///
        string = context.nodeAsString(node),
        tokens = context.nodeAsTokens(node),
        frame = new Frame(string, node, tokens, declarations, metavariables);

  return frame;
}

function declarationsFromFrameNode(frameNode, context) {
  const { Declaration } = dom,
        declarationNodes = declarationNodesQuery(frameNode),
        declarations = declarationNodes.map((declarationNode) => {
          const declaration = Declaration.fromDeclarationNode(declarationNode, context);

          return declaration;
        });

  return declarations;
}

function metavariablesFromFrameNode(frameNode, context) {
  const { Metavariable } = dom,
        metavariableNodes = metavariableNodesQuery(frameNode),
        metavariables = metavariableNodes.map((metavariableNode) => {
          const metavariable = Metavariable.fromMetavariableNode(metavariableNode, context);

          return metavariable;
        });

  return metavariables;
}
