"use strict";

import { arrayUtilities } from "necessary";

import dom from "../dom";

import { S, NOTHING } from "../constants";
import { domAssigned } from "../dom";
import { FRAME_META_TYPE_NAME } from "../metaTypeNames";

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

    const simple = this.isSimple();

    if (simple) {
      const firstMetavariable = first(this.metavariables);

      metavariable = firstMetavariable; ///
    }

    return metavariable;
  }

  isEqualTo(frame) {
    const frameString = frame.getString(),
          equalTo = (frameString === this.string);

    return equalTo;
  }

  isSimple() {
    const metavariablesLength = this.metavariables.length,
          declarationsLength = this.declarations.length,
          simple = ((metavariablesLength === 1) && (declarationsLength === 0));

    return simple;
  }

  matchSubstitution(substitution, context) {
    let substitutionMatches = false;

    const frameString = this.string,  ///
          substitutionString = substitution.getString();

    context.trace(`Matching the '${substitutionString}' substitution against the '${frameString}' frame...`);

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
      context.debug(`...matched the '${substitutionString}' substitutions against the '${frameString}' frame.`);
    }

    return substitutionMatches;
  }

  matchSubstitutions(substitutions, context) {
    let substitutionsMatch;

    const frameString = this.string,  ///
          substitutionsString = substitutions.asString();

    context.trace(`Matching the '${substitutionsString}' substitutions against the '${frameString}' frame...`);

    substitutionsMatch = substitutions.everySubstitution((substitution) => {
      const substitutionMatches = this.matchSubstitution(substitution, context);

      if (substitutionMatches) {
        return true;
      }
    });

    if (substitutionsMatch) {
      context.debug(`...matched the '${substitutionsString}' substitutions against the '${frameString}' frame.`);
    }

    return substitutionsMatch;
  }

  verify(assignments, stated, context) {
    let verifies = false;

    const frameString = this.string;  ///

    context.trace(`Verifying the '${frameString}' frame...`);

    const declarationsVerify = this.verifyDeclarations(assignments, stated, context);

    if (declarationsVerify) {
      const  metavariablesVerify = this.verifyMetavariables(assignments, stated, context);

      if (metavariablesVerify) {
        let verifiesWhenStated = false,
            verifiesWhenDerived = false;

        if (stated) {
          verifiesWhenStated = this.verifyWhenStated(assignments, context);
        } else {
          verifiesWhenDerived = this.verifyWhenDerived(context);
        }

        if (verifiesWhenStated || verifiesWhenDerived) {
          verifies = true;
        }
      }
    }

    if (verifies) {
      context.debug(`...verified the '${frameString}' frame.`);
    }

    return verifies;
  }

  verifyWhenStated(assignments, context) {
    let verifiesWhenStated = false;

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
        verifiesWhenStated = true;
      }
    }

    if (verifiesWhenStated) {
      context.debug(`...verified the '${frameString}' stated frame.`);
    }

    return verifiesWhenStated;
  }

  verifyWhenDerived(context) {
    let verifiesWhenDerived;

    const frameString = this.string;  ///

    context.trace(`Verifying the '${frameString}' derived frame...`);

    verifiesWhenDerived = true;

    if (verifiesWhenDerived) {
      context.debug(`...verified the '${frameString}' derived frame.`);
    }

    return verifiesWhenDerived;
  }

  verifyDeclarations(assignments, stated, context) {
    let declarationsVerify = true;  ///

    const declarationsLength = this.declarations.length;

    if (declarationsLength > 0) {
      const sOrNothing = (declarationsLength > 1) ?
                           S :
                             NOTHING,
            declarationsString = declarationsStringFromDeclarations(this.declarations);

      context.trace(`Verifying the '${declarationsString}' declaration${sOrNothing}...`);

      stated = true;  ///

      assignments = null; ///

      declarationsVerify = this.declarations.every((declaration) => {
        const declarationVerifies = declaration.verify(assignments, stated, context);

        return declarationVerifies;
      });

      if (declarationsVerify) {
        context.debug(`...verified the '${declarationsString}' declaration${sOrNothing}.`);
      }
    }

    return declarationsVerify;
  }

  verifyMetavariables(assignments, stated, context) {
    let metavariablesVerify = true;

    const metavariablesLength = this.metavariables.length;

    if (metavariablesLength > 0) {
      const sOrNothing = (metavariablesLength > 1) ?
                           S :
                             NOTHING,
            metavariablesString = metavariablesStringFromMetavariables(this.metavariables);

      context.trace(`Verifying the '${metavariablesString}' metavariable${sOrNothing}...`);

      metavariablesVerify = this.metavariables.every((metavariable) => {
        const metavariableVerifies = metavariable.verify(context);

        return metavariableVerifies;
      });

      if (metavariablesVerify) {
        context.debug(`...verified the '${metavariablesString}' metavariable${sOrNothing}.`);
      }
    }

    return metavariablesVerify;
  }

  verifyGivenMetaType(metaType, assignments, stated, context) {
    let verifiesGivenMetaType = false;

    const frameString = this.string,  ///
          metaTypeString = metaType.getString();

    context.trace(`Verifying the '${frameString}' frame given the '${metaTypeString}' meta-type...`);

    const metaTypeName = metaType.getName();

    if (metaTypeName === FRAME_META_TYPE_NAME) {
      const verifies = this.verify(assignments, stated, context)

      verifiesGivenMetaType = verifies; ///
    }

    if (verifiesGivenMetaType) {
      context.debug(`...verified the '${frameString}' frame given the '${metaTypeString}' meta-type.`);
    }

    return verifiesGivenMetaType;
  }

  static name = "Frame";

  static fromFrameNode(frameNode, context) {
    let frame = null;

    if (frameNode !== null) {
      frame = frameFromFrameNode(frameNode, context);
    }

    return frame;
  }

  static fromJudgementNode(judgementNode, context) {
    const frameNode = judgementNode.getFrameNode(),
          frame = frameFromFrameNode(frameNode, context);

    return frame;
  }

  static fromDefinedAssertionNode(definedAssertionNode, context) {
    let frame = null;

    const frameNode = definedAssertionNode.getFrameNode();

    if (frameNode !== null) {
      frame = frameFromFrameNode(frameNode, context);
    }

    return frame;
  }

  static fromContainedAssertionNode(containedAssertionNode, context) {
    let frame = null;

    const frameNode = containedAssertionNode.getFrameNode();

    if (frameNode !== null) {
      frame = frameFromFrameNode(frameNode, context)
    }

    return frame;
  }
});

function frameFromFrameNode(frameNode, context) {
  const { Frame } = dom,
        node = frameNode, ///
        string = context.nodeAsString(node),
        tokens = context.nodeAsTokens(node),
        declarations = declarationsFromFrameNode(frameNode, context),
        metavariables = metavariablesFromFrameNode(frameNode, context),
        frame = new Frame(string, node, tokens, declarations, metavariables);

  return frame;
}

function declarationsFromFrameNode(frameNode, context) {
  const { Declaration } = dom,
        declarationNodes = frameNode.getDeclarationNodes(),
        declarations = declarationNodes.map((declarationNode) => {
          const declaration = Declaration.fromDeclarationNode(declarationNode, context);

          return declaration;
        });

  return declarations;
}

function metavariablesFromFrameNode(frameNode, context) {
  const { Metavariable } = dom,
        metavariableNodes = frameNode.getMetavariableNodes(),
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

function metavariablesStringFromMetavariables(metavariable) {
  const metavariablesString = metavariable.reduce((metavariablesString, metavariable) => {
    const metavariableString = metavariable.getString();

    metavariablesString = (metavariablesString === null) ?
                            metavariableString :
                             `${metavariablesString}, ${metavariableString}`;

    return metavariablesString;
  }, null);

  return metavariablesString;
}
