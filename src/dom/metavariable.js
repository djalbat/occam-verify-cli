"use strict";

import dom from "../dom";
import LocalContext from "../context/local";
import MetavariablePartialContext from "../context/partial/metavariable";

import { domAssigned } from "../dom";
import { EMPTY_STRING } from "../constants";
import { typeFromJSON, typeToTypeJSON } from "../utilities/json";
import { metaTypeFromJSON, metaTypeToMetaTypeJSON } from "../utilities/json";
import { metavariableFromFrame, metavariableFromStatement } from "../utilities/context";
import { unifyMetavariable, unifyMetavariableIntrinsically } from "../utilities/unification";

export default domAssigned(class Metavariable {
  constructor(string, node, tokens, name, type, metaType) {
    this.string = string;
    this.node = node;
    this.tokens = tokens;
    this.name = name;
    this.type = type;
    this.metaType = metaType;
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

  getName() {
    return this.name;
  }

  getType() {
    return this.type;
  }

  getMetaType() {
    return this.metaType;
  }

  setNode(node) {
    this.node = node;
  }

  setTokens(tokens) {
    this.tokens = tokens;
  }

  setName(name) {
    this.name = name;
  }

  setType(type) {
    this.type = type;
  }

  setMetaType(metaType) {
    this.metaType = metaType;
  }

  matchName(name) {
    const nameMatches = (name === this.name);

    return nameMatches;
  }

  matchMetavariableName(metavariableName) {
    const metavariableNameMatches = (metavariableName === this.name);

    return metavariableNameMatches;
  }

  isMetaTypeEqualTo(metaType) { return this.metaType.isEqualTo(metaType); }

  isEqualTo(metavariable) {
    const metavariableString = metavariable.getString(),
          equalTo = (metavariableString === this.string);

    return equalTo;
  }

  matchSubstitution(substitution, context) {
    let substitutionMatched = false;

    const metavariableString = this.string,  ///
          substitutionString = substitution.getString();

    context.trace(`Matching the '${substitutionString}' substitution against the '${metavariableString}' metavariable...`);

    const metavariable = this, ///
          judgement = context.findJudgementByMetavariable(metavariable);

    if (judgement !== null) {
      const declaration = judgement.getDeclaration();

      substitutionMatched = declaration.matchSubstitution(substitution, context);
    } else {
      context.debug(`The '${metavariableString}' metavariable does not have a judgement.`);
    }

    if (substitutionMatched) {
      context.debug(`...matched the '${substitutionString}' substitution against the '${metavariableString}' metavariable.`);
    }

    return substitutionMatched;
  }

  verify(context) {
    let verifies;

    const metavariableString = this.string; ///

    context.trace(`Verifying the '${metavariableString}' metavariable...`);

    const metavariable = this, ///
          generalContext = context,  ///
          specificContext = context,  ///
          metavariablePresent = generalContext.isMetavariablePresent(metavariable, generalContext, specificContext);

    verifies = metavariablePresent; ///

    if (verifies) {
      context.debug(`...verified the '${metavariableString}' metavariable.`);
    }

    return verifies;
  }

  verifyGivenMetaType(metaType, context) {
    let verifiesGivenMetaType = false;

    const metavariableString = this.string,  ///
          metaTypeString = metaType.getString();

    context.trace(`Verifying the '${metavariableString}' metavariable given the '${metaTypeString}' meta-type...`);

    let metavariable = this;  ///

    const specificContext = context,  ///
          generalContext = context; ///

    metavariable = generalContext.findMetavariable(metavariable, generalContext, specificContext);

    if (metavariable !== null) {
      const metavariableMetaTypeEqualToMetaType = metavariable.isMetaTypeEqualTo(metaType);

      verifiesGivenMetaType = metavariableMetaTypeEqualToMetaType;  ///
    }

    if (verifiesGivenMetaType) {
      context.debug(`...verified the '${metavariableString}' metavariable given the '${metaTypeString}' meta-type.`);
    }

    return verifiesGivenMetaType;
  }

  unifyFrame(frame, substitutions, generalContext, specificContext) {
    let frameUnifies = false;

    const frameString = frame.getString(),
          metavariableString = this.string; ///

    specificContext.trace(`Unifying the '${frameString}' frame with the '${metavariableString}' metavariable...`);

    const frameMetavariableUnifies = this.unifyFrameMetavariable(frame, substitutions, generalContext, specificContext);

    if (frameMetavariableUnifies) {
      frameUnifies = true;
    } else {
      const metavariable = this, ///
            simpleSubstitutionPresent = substitutions.isSimpleSubstitutionPresentByMetavariable(metavariable);

      if (simpleSubstitutionPresent) {
        const simpleSubstitution = substitutions.findSimpleSubstitutionByMetavariable(metavariable),
              substitution = simpleSubstitution,  ///
              substitutionFrameEqualToFrame = substitution.isFrameEqualTo(frame);

        if (substitutionFrameEqualToFrame) {
          frameUnifies = true;
        }
      } else {
        const { FrameSubstitution } = dom,
              context = specificContext,  ///
              metavariable = this,  ///
              frameSubstitution = FrameSubstitution.fromFrameAndMetavariable(frame, metavariable, context),
              substitution = frameSubstitution;  ///

        substitutions.addSubstitution(substitution, specificContext);

        frameUnifies = true;
      }
    }

    if (frameUnifies) {
      specificContext.debug(`...unified the '${frameString}' frame with the '${metavariableString}' metavariable.`);
    }

    return frameUnifies;
  }

  unifyReference(reference, substitutions, generalContext, specificContext) {
    let referenceUnifies = false;

    const referenceString = reference.getString(),
          metavariableString = this.string; ///

    specificContext.trace(`Unifying the '${referenceString}' reference with the '${metavariableString}' metavariable...`);

    const referenceMetavariableUnifies = this.unifyReferenceMetavariable(reference, substitutions, generalContext, specificContext);

    if (referenceMetavariableUnifies) {
      referenceUnifies = true;
    } else {
      const metavariable = this, ///
            simpleSubstitutionPresent = substitutions.isSimpleSubstitutionPresentByMetavariable(metavariable);

      if (simpleSubstitutionPresent) {
        const simpleSubstitution = substitutions.findSimpleSubstitutionByMetavariable(metavariable),
              substitution = simpleSubstitution,  ///
              substitutionReferenceEqualToReference = substitution.isReferenceEqualTo(reference);

        if (substitutionReferenceEqualToReference) {
          referenceUnifies = true;
        }
      } else {
        const { ReferenceSubstitution } = dom,
              context = specificContext,  ///
              metavariable = this,  ///
              referenceSubstitution = ReferenceSubstitution.fromReferenceAndMetavariable(reference, metavariable, context),
              substitution = referenceSubstitution;  ///

        substitutions.addSubstitution(substitution, specificContext);

        referenceUnifies = true;
      }
    }

    if (referenceUnifies) {
      specificContext.debug(`...unified the '${referenceString}' reference with the '${metavariableString}' metavariable.`);
    }

    return referenceUnifies;
  }

  unifyStatement(statement, substitution, substitutions, generalContext, specificContext) {
    let statementUnifies = false;

    const statementString = statement.getString(),
          metavariableString = this.string, ///
          substitutionString = (substitution !== null) ?
                                  substitution.getString() :
                                    EMPTY_STRING;

    specificContext.trace(`Unifying the '${statementString}' statement with the '${metavariableString}${substitutionString}' metavariable...`);

    const statementMetavariableUnifies = this.unifyStatementMetavariable(statement, substitutions, generalContext, specificContext);

    if (statementMetavariableUnifies) {
      statementUnifies = true;
    } else {
      const context = specificContext,  ///
            metavariable = this, ///
            substitutionPresent = substitutions.isSubstitutionPresentByMetavariableAndSubstitution(metavariable, substitution);

      if (substitutionPresent) {
        substitution = substitutions.findSubstitutionByMetavariableAndSubstitution(metavariable, substitution); ///

        const substitutionStatementEqualToStatement = substitution.isStatementEqualTo(statement, context);

        if (substitutionStatementEqualToStatement) {
          statementUnifies = true;
        }
      } else {
        const { StatementSubstitution } = dom,
              metavariable = this,
              statementSubstitution = StatementSubstitution.fromStatementMetavariableAndSubstitution(statement, metavariable, substitution, context);

        substitution = statementSubstitution;  ///

        substitutions.addSubstitution(substitution, specificContext);

        statementUnifies = true;
      }
    }

    if (statementUnifies) {
      specificContext.debug(`...unified the '${statementString}' statement with the '${metavariableString}${substitutionString}' metavariable.`);
    }

    return statementUnifies;
  }

  unifyMetavariable(metavariable, generalContext, specificContext) {
    let metavariableUnifies;

    const generalMetavariable = this, ///
          specificMetavariable = metavariable,  ///
          generalMetavariableString = generalMetavariable.getString(),
          specificMetavariableString = specificMetavariable.getString();

    specificContext.trace(`Unifying the '${specificMetavariableString}' metavariable with the '${generalMetavariableString}' metavariable...`);

    metavariableUnifies = unifyMetavariable(generalMetavariable, specificMetavariable, generalContext, specificContext);

    if (metavariableUnifies) {
      specificContext.debug(`...unified the '${specificMetavariableString}' metavariable with the '${generalMetavariableString}' metavariable.`);
    }

    return metavariableUnifies;
  }

  unifyFrameMetavariable(frame, substitutions, generalContext, specificContext) {
    let frameMetavariableUnifies = false;

    const generalContextFilePath = generalContext.getFilePath(),
          specificContextFilePath = specificContext.getFilePath();

    if (generalContextFilePath === specificContextFilePath) {
      const frameString = frame.getString();

      if (frameString === this.string) {
        frameMetavariableUnifies = true;
      } else {
        const context = specificContext,  ///
              metavariable = metavariableFromFrame(frame, context);

        if (metavariable !== null) {
          const frameMetavariable = metavariable, ///
                metavariableString = this.string, ///
                frameMetavariableString = frameMetavariable.getString();

          specificContext.trace(`Unifying the frame's '${frameMetavariableString}' metavariable with the '${metavariableString}' metavariable...`);

          const specificMetavariable = frameMetavariable, ///
                generalMetavariable = this, ///
                metavariableUnifiesIntrinsically = unifyMetavariableIntrinsically(generalMetavariable, specificMetavariable, substitutions, generalContext, specificContext);

          frameMetavariableUnifies = metavariableUnifiesIntrinsically; ///

          if (frameMetavariableUnifies) {
            specificContext.debug(`...unified the frame's '${frameMetavariableString}' metavariable with the '${metavariableString}' metavariable.`);
          }
        }
      }
    }

    return frameMetavariableUnifies;
  }

  unifyReferenceMetavariable(reference, substitutions, generalContext, specificContext) {
    let referenceMetavariableUnifies = false;

    const generalContextFilePath = generalContext.getFilePath(),
          specificContextFilePath = specificContext.getFilePath();

    if (generalContextFilePath === specificContextFilePath) {
      const referenceString = reference.getString();

      if (referenceString === this.string) {
        referenceMetavariableUnifies = true;
      } else {
        const metavariableString = this.string, ///
              referenceMetavariable = reference.getMetavariable(),
              referenceMetavariableString = referenceMetavariable.getString();

        specificContext.trace(`Unifying the reference's ${referenceMetavariableString}' metavariable with the '${metavariableString}' metavariable...`);

        const specificMetavariable = referenceMetavariable, ///
              generalMetavariable = this, ///
              metavariableUnifiesIntrinsically = unifyMetavariableIntrinsically(generalMetavariable, specificMetavariable, substitutions, generalContext, specificContext);

        referenceMetavariableUnifies = metavariableUnifiesIntrinsically; ///

        if (referenceMetavariableUnifies) {
          specificContext.debug(`...unified the reference's '${referenceMetavariableString}' metavariable with the '${metavariableString}' metavariable.`);
        }
      }
    }

    return referenceMetavariableUnifies;
  }

  unifyStatementMetavariable(statement, substitutions, generalContext, specificContext) {
    let statementMetavariableUnifies = false;

    const generalContextFilePath = generalContext.getFilePath(),
          specificContextFilePath = specificContext.getFilePath();

    if (generalContextFilePath === specificContextFilePath) {
      const statementString = statement.getString();

      if (statementString === this.string) {
        statementMetavariableUnifies = true;
      } else {
        const context = specificContext,  ///
              metavariable = metavariableFromStatement(statement, context);

        if (metavariable !== null) {
          const statementMetavariable = metavariable, ///
                metavariableString = this.string, ///
                statementMetavariableString = statementMetavariable.getString();

          specificContext.trace(`Unifying the statement's ${statementMetavariableString}' metavariable with the '${metavariableString}' metavariable...`);

          const specificMetavariable = statementMetavariable, ///
                generalMetavariable = this, ///
                metavariableUnifiesIntrinsically = unifyMetavariableIntrinsically(generalMetavariable, specificMetavariable, substitutions, generalContext, specificContext);

          statementMetavariableUnifies = metavariableUnifiesIntrinsically; ///

          if (statementMetavariableUnifies) {
            specificContext.debug(`...unified the statement's '${statementMetavariableString}' metavariable with the '${metavariableString}' metavariable.`);
          }
        }
      }
    }

    return statementMetavariableUnifies;
  }

  toJSON() {
    const metaTypeJSON = metaTypeToMetaTypeJSON(this.metaType),
          typeJSON = typeToTypeJSON(this.type),
          type = typeJSON,  ///
          metaType = metaTypeJSON,  ///
          string = this.string, ///
          json = {
            string,
            type,
            metaType
          };

    return json;
  }

  static name = "Metavariable";

  static fromJSON(json, fileContext) {
    const { string } = json,
          lexer = fileContext.getLexer(),
          parser = fileContext.getParser(),
          metavariablePartialContext = MetavariablePartialContext.fromStringLexerAndParser(string, lexer, parser),
          metavariableTokens = metavariablePartialContext.getMetavariableTokens(),
          metavariableNode = metavariablePartialContext.getMetavariableNode(),
          metavariableName = metavariableNode.getMetavariableName(),
          name = metavariableName,  ///
          node = metavariableNode,  ///
          tokens = metavariableTokens, ///
          type = typeFromJSON(json, fileContext),
          metaType = metaTypeFromJSON(json, fileContext),
          metavariable = new Metavariable(string, node, tokens, name, type, metaType);

    return metavariable;
  }

  static fromLabelNode(labelNode, context) {
    const metavariableNode = labelNode.getMetavariableNode(),
          metavariable = metavariableFromMetavariableNode(metavariableNode, context);

    return metavariable;
  }

  static fromFrameNode(frameNode, context) {
    let metavariable = null;

    const singularMetavariableNode = frameNode.getSingularMetavariableNode();

    if (singularMetavariableNode !== null) {
      const metavariableNode = singularMetavariableNode;  ///

      metavariable = metavariableFromMetavariableNode(metavariableNode, context);
    }

    return metavariable;
  }

  static fromReferenceNode(referenceNode, context) {
    const metavariableNode = referenceNode.getMetavariableNode(),
          metavariable = metavariableFromMetavariableNode(metavariableNode, context);

    return metavariable;
  }

  static fromStatementNode(statementNode, context) {
    let metavariable = null;

    const metavariableNode = statementNode.getMetavariableNode();

    if (metavariableNode !== null) {
      metavariable = metavariableFromMetavariableNode(metavariableNode, context);
    }

    return metavariable;
  }

  static fromMetavariableNode(metavariableNode, context) {
    let metavariable = null;

    if (metavariableNode !== null) {
      metavariable = metavariableFromMetavariableNode(metavariableNode, context);
    }

    return metavariable;
  }

  static fromMetavariableDeclarationNode(metavariableDeclarationNode, fileContext) {
    const { MetaType } = dom,
          metavariableNode = metavariableDeclarationNode.getMetavariableNode(),
          localContext = LocalContext.fromFileContext(fileContext),
          context = localContext, ///
          type = typeFromMetavariableDeclarationNode(metavariableDeclarationNode, fileContext),
          metaType = MetaType.fromMetavariableDeclarationNode(metavariableDeclarationNode, context),
          metavariable = metavariableFromMetavariableNode(metavariableNode, context);

    metavariable.setType(type);

    metavariable.setMetaType(metaType);

    return metavariable;
  }
});

function metavariableFromMetavariableNode(metavariableNode, context) {
  const { Metavariable } = dom,
        metavariableName = metavariableNode.getMetavariableName(),
        type = null,
        name = metavariableName,  ///
        node = metavariableNode,  ///
        string = context.nodeAsString(node),
        tokens = context.nodeAsTokens(node),
        metaType = null,
        metavariable = new Metavariable(string, node, tokens, name, type, metaType);

  return metavariable;
}

function typeFromMetavariableDeclarationNode(metavariableDeclarationNode, fileContext) {
  let type = null;

  const typeNode = metavariableDeclarationNode.getTypeNode();

  if (typeNode !== null) {
    const typeName = typeNode.getTypeName();

    type = fileContext.findTypeByTypeName(typeName);
  }

  return type;
}
