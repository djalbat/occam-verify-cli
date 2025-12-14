"use strict";

import { arrayUtilities } from "necessary";

import ontology from "../ontology";

import { define } from "../ontology";
import { S, NOTHING } from "../constants";
import { FRAME_META_TYPE_NAME } from "../metaTypeNames";

const { first } = arrayUtilities;

export default define(class Frame {
  constructor(string, node, tokens, declarations) {
    this.string = string;
    this.node = node;
    this.tokens = tokens;
    this.declarations = declarations;
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

  getLength() { return this.declarations.length; }

  getDeclaration() {
    let declaration = null;

    const length = this.getLength();

    if (length === 1) {
      const firstDeclaration = first(this.declarations);

      declaration = firstDeclaration; ///
    }

    return declaration;
  }

  getMetavariable() {
    let metavariable = null;

    const simple = this.isSimple();

    if (simple) {
      const declaration = this.getDeclaration();

      metavariable = declaration.getMetavariable();
    }

    return metavariable;
  }

  isSimple() {
    let simple = false;

    const declaration = this.getDeclaration();

    if (declaration !== null) {
      simple = declaration.isSimple();
    }

    return simple;
  }

  isEqualTo(frame) {
    const frameString = frame.getString(),
          equalTo = (frameString === this.string);

    return equalTo;
  }

  matchFrameNode(frameNode) { return this.node.match(frameNode); }

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

    if (verifies) {
      const frame = this; ///

      context.addFrame(frame);

      context.debug(`...verified the '${frameString}' frame.`);
    }

    return verifies;
  }

  verifyWhenStated(assignments, context) {
    let verifiesWhenStated = false;

    const frameString = this.string;  ///

    context.trace(`Verifying the '${frameString}' stated frame...`);

    const simple = this.isSimple();

    if (!simple) {
      context.trace(`The '${frameString}' stated frame must be simple.`);
    } else {
      verifiesWhenStated = true;
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

    const length = this.getLength();

    if (length > 0) {
      const sOrNothing = (length > 1) ?
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

  toJSON() {
    let json = null;

    const simple = this.isSimple();

    if (simple) {
      const declaration = this.getDeclaration(),
            declarationJSON = declaration.toJSON();

      json = declarationJSON;  ///
    }

    return json;
  }

  static name = "Frame";

  static fromJSON(json, context) {
    let frame = null;

    if (json !== null) {
      const { Declaration } =ontology,
            declaration = Declaration.fromJSON(json, context),
            declarations = [
              declaration
            ],
            string = null,
            node = null,
            tokens = null;

      frame = new Frame(string, node, tokens, declarations);
    }

    return frame;
  }

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
  const { Frame } = ontology,
        node = frameNode, ///
        string = context.nodeAsString(node),
        tokens = context.nodeAsTokens(node),
        declarations = declarationsFromFrameNode(frameNode, context),
        frame = new Frame(string, node, tokens, declarations);

  return frame;
}

function declarationsFromFrameNode(frameNode, context) {
  const { Declaration } = ontology,
        declarationNodes = frameNode.getDeclarationNodes(),
        declarations = declarationNodes.map((declarationNode) => {
          const declaration = Declaration.fromDeclarationNode(declarationNode, context);

          return declaration;
        });

  return declarations;
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
