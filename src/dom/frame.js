"use strict";

import { arrayUtilities } from "necessary";

import dom from "../dom";

import { S, NOTHING } from "../constants";
import { domAssigned } from "../dom";
import { FRAME_META_TYPE_NAME } from "../metaTypeNames";
import { nodeQuery, nodesQuery } from "../utilities/query";

const declarationNodesQuery = nodesQuery("/frame/declaration"),
      metavariableNodeQuery = nodeQuery("/frame/metavariable!"),
      metavariableNodesQuery = nodesQuery("/frame/metavariable"),
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

  matchSubstitution(substitution, context) {
    let substitutionMatches = false;

    const frameString = this.string,  ///
          substitutionString = substitution.getString();

    context.trace(`Matching the '${substitutionString}' substitution with the '${frameString}' frame...`);

    if (!substitutionMatches) {
      substitutionMatches = this.declarations.some((declaration) => {
        const substitutionMatchesDeclaration = declaration.matchSubstitution(substitution, context);

        if (substitutionMatchesDeclaration) {
          return true;
        }
      });
    }

    if (!substitutionMatches) {
      substitutionMatches = this.metavariables.some((metavariable) => {
        const substitutionMatchesMetavariable = metavariable.matchSubstitution(substitution, context);

        if (substitutionMatchesMetavariable) {
          return true;
        }
      });
    }

    if (substitutionMatches) {
      context.debug(`...matched the '${substitutionString}' substitutions with the '${frameString}' frame.`);
    }

    return substitutionMatches;
  }

  matchSubstitutions(substitutions, context) {
    let substitutionsMatch;

    const frameString = this.string,  ///
          substitutionsString = substitutions.asString();

    context.trace(`Matching the '${substitutionsString}' substitutions with the '${frameString}' frame...`);

    substitutionsMatch = substitutions.everySubstitution((substitution) => {
      const substitutionMatches = this.matchSubstitution(substitution, context);

      if (substitutionMatches) {
        return true;
      }
    });

    if (substitutionsMatch) {
      context.debug(`...matched the '${substitutionsString}' substitutions with the '${frameString}' frame.`);
    }

    return substitutionsMatch;
  }

  verify(assignments, stated, context) {
    let verified = false;

    const frameString = this.string;  ///

    context.trace(`Verifying the '${frameString}' frame...`);

    const declarationsVerified = this.verifyDeclarations(assignments, stated, context);

    if (declarationsVerified) {
      const  metavariablesVerified = this.verifyMetavariables(assignments, stated, context);

      if (metavariablesVerified) {
        let verifiedWhenStated = false,
            verifiedWhenDerived = false;

        if (stated) {
          verifiedWhenStated = this.verifyWhenStated(assignments, context);
        } else {
          verifiedWhenDerived = this.verifyWhenDerived(context);
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

  verifyWhenDerived(context) {
    let verifiedWhenDerived;

    const frameString = this.string;  ///

    context.trace(`Verifying the '${frameString}' derived frame...`);

    verifiedWhenDerived = true;

    if (verifiedWhenDerived) {
      context.debug(`...verified the '${frameString}' derived frame.`);
    }

    return verifiedWhenDerived;
  }

  verifyDeclarations(assignments, stated, context) {
    let declarationsVerified = true;  ///

    const declarationsLength = this.declarations.length;

    if (declarationsLength > 0) {
      const sOrNothing = (declarationsLength > 1) ?
                           S :
                             NOTHING,
            frameString = this.string,  ///
            declarationsString = declarationsStringFromDeclarations(this.declarations);

      context.trace(`Verifying the '${frameString}' frame's '${declarationsString}' declaration${sOrNothing}...`);

      stated = true;  ///

      assignments = null; ///

      declarationsVerified = this.declarations.every((declaration) => {
        const declarationVerified = declaration.verify(assignments, stated, context);

        return declarationVerified;
      });

      if (declarationsVerified) {
        context.debug(`...verified the '${frameString}' frame's '${declarationsString}' declaration${sOrNothing}.`);
      }
    }

    return declarationsVerified;
  }

  verifyMetavariables(assignments, stated, context) {
    let metavariablesVerified = true;

    const metavariablesLength = this.metavariables.length;

    if (metavariablesLength > 0) {
      const sOrNothing = (metavariablesLength > 1) ?
                           S :
                             NOTHING,
            frameString = this.string,  ///
            metavariablesString = metavariablesStringFromDeclarations(this.metavariables);

      context.trace(`Verifying the '${frameString}' frame's '${metavariablesString}' metavariable${sOrNothing}...`);

      metavariablesVerified = this.metavariables.every((metavariable) => {
        const metavariableVerified = metavariable.verify(context);

        return metavariableVerified;
      });

      if (metavariablesVerified) {
        context.debug(`...verified the '${frameString}' frame's '${metavariablesString}' metavariable${sOrNothing}.`);
      }
    }

    return metavariablesVerified;
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

  static fromDefinedAssertionNode(definedAssertionNode, context) {
    let frame = null;

    const definedAssertionFrameNode = definedAssertionFrameNodeQuery(definedAssertionNode);

    if (definedAssertionFrameNode !== null) {
      const frameNode = definedAssertionFrameNode,  ///
            metavariableNode = metavariableNodeQuery(frameNode);

      if (metavariableNode !== null) {
        frame = frameFromFrameNodeAndMetavariableNode(frameNode, metavariableNode, context)
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
        frame = frameFromFrameNodeAndMetavariableNode(frameNode, metavariableNode, context)
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

function declarationsStringFromDeclarations(declarations) {
  const declarationsString = declarations.reduce((declarationsString, declaration) => {
    const declarationString = declaration.getString();

    declarationsString = (declarationsString === null) ?
                           declarationString :
                            `${declarationsString}, ${declarationString}`;

    return declarationsString;
  }, null);

  return declarationsString;
}

function metavariablesStringFromDeclarations(metavariable) {
  const metavariablesString = metavariable.reduce((metavariablesString, metavariable) => {
    const metavariableString = metavariable.getString();

    metavariablesString = (metavariablesString === null) ?
                            metavariableString :
                             `${metavariablesString}, ${metavariableString}`;

    return metavariablesString;
  }, null);

  return metavariablesString;
}
