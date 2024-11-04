"use strict";

import dom from "../dom";
import LocalContext from "../context/local";
import FrameSubstitution from "../substitution/frame";
import StatementSubstitution from "../substitution/statement";
import MetavariableNodeAndTokens from "../nodeAndTokens/metavariable";

import { nodeQuery } from "../utilities/query";
import { objectType } from "../dom/type";
import { domAssigned } from "../dom";
import { EMPTY_STRING } from "../constants";
import { unifyMetavariable } from "../utilities/unification";
import { typeFromJSON, typeToTypeJSON } from "../utilities/json";
import { metavariableNameFromMetavariableNode } from "../utilities/name";
import { metaTypeFromJSON, metaTypeToMetaTypeJSON } from "../utilities/json";

const termNodeQuery = nodeQuery("/metavariable/argument/term"),
      metavariableNodeQuery = nodeQuery("/metavariableDeclaration/metavariable"),
      frameMetavariableNodeQuery = nodeQuery("/frame/metavariable!"),
      labelMetavariableNodeQuery = nodeQuery("/label/metavariable"),
      referenceMetavariableNodeQuery = nodeQuery("/reference/metavariable"),
      statementMetavariableNodeQuery = nodeQuery("/statement/metavariable");

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

  matchMetavariableName(metavariableName) {
    const metavariableNameMatches = (metavariableName === this.name);

    return metavariableNameMatches;
  }

  matchMetavariableNode(metavariableNode) {
    const metavariableNodeMatches = metavariableNode.match(this.node);

    return metavariableNodeMatches;
  }

  isMetaTypeEqualTo(metaType) { return this.metaType.isEqualTo(metaType); }

  isEqualTo(metavariable) {
    const metavariableString = metavariable.getString(),
          equalTo = (metavariableString === this.string);

    return equalTo;
  }

  isEffectivelyEqualToFrame(frame, generalContext, specificContext) {
    let effectivelyEqualToFrame = false;

    const generalContextFilePath = generalContext.getFilePath(),
          specificContextFilePath = specificContext.getFilePath();

    if (generalContextFilePath === specificContextFilePath) {
      const frameString = frame.getString();

      if (frameString === this.string) {
        effectivelyEqualToFrame = true;
      }
    }

    return effectivelyEqualToFrame;
  }

  isEffectivelyEqualToStatement(statement, generalContext, specificContext) {
    let effectivelyEqualToStatement = false;

    const generalContextFilePath = generalContext.getFilePath(),
          specificContextFilePath = specificContext.getFilePath();

    if (generalContextFilePath === specificContextFilePath) {
      const statementString = statement.getString();

      if (statementString === this.string) {
        effectivelyEqualToStatement = true;
      }
    }

    return effectivelyEqualToStatement;
  }

  unifyFrame(frame, substitutions, generalContext, specificContext) {
    let frameUnified = false;

    const frameString = frame.getString(),
          metavariableString = this.string; ///

    specificContext.trace(`Unifying the '${frameString}' frame with the '${metavariableString}' metavariable...`);

    const effectivelyEqualToFrame = this.isEffectivelyEqualToFrame(frame, generalContext, specificContext);

    if (effectivelyEqualToFrame) {
      frameUnified = true;
    } else {
      const metavariable = this, ///
            simpleSubstitutionPresent = substitutions.isSimpleSubstitutionPresentByMetavariable(metavariable);

      if (simpleSubstitutionPresent) {
        const simpleSubstitution = substitutions.findSimpleSubstitutionByMetavariable(metavariable),
              substitution = simpleSubstitution,  ///
              substitutionFrameEqualToFrame = substitution.isFrameEqualTo(frame);

        if (substitutionFrameEqualToFrame) {
          frameUnified = true;
        }
      } else {
        const context = specificContext,  ///
              metavariable = this,  ///
              frameSubstitution = FrameSubstitution.fromFrameAndMetavariable(frame, metavariable, context),
              substitution = frameSubstitution;  ///

        substitutions.addSubstitution(substitution, context);

        frameUnified = true;
      }
    }

    if (frameUnified) {
      specificContext.debug(`...unified the '${frameString}' frame with the '${metavariableString}' metavariable.`);
    }

    return frameUnified;
  }

  unifyStatement(statement, substitution, substitutions, generalContext, specificContext) {
    let statementUnified = false;

    const statementString = statement.getString(),
          metavariableString = this.string, ///
          substitutionString = (substitution !== null) ?
                                  substitution.getString() :
                                    EMPTY_STRING;

    specificContext.trace(`Unifying the '${statementString}' statement with the '${metavariableString}${substitutionString}' metavariable...`);

    const effectivelyEqualToStatement = this.isEffectivelyEqualToStatement(statement, generalContext, specificContext);

    if (effectivelyEqualToStatement) {
      statementUnified = true;
    } else {
      const metavariable = this, ///
            substitutionPresent = substitutions.isSubstitutionPresentByMetavariableAndSubstitution(metavariable, substitution);

      if (substitutionPresent) {
        substitution = substitutions.findSubstitutionByMetavariableAndSubstitution(metavariable, substitution); ///

        const substitutionStatementEqualToStatement = substitution.isStatementEqualTo(statement);

        if (substitutionStatementEqualToStatement) {
          statementUnified = true;
        }
      } else {
        const context = specificContext,  ///
              metavariable = this,
              statementSubstitution = StatementSubstitution.fromStatementMetavariableAndSubstitution(statement, metavariable, substitution, context);

        substitution = statementSubstitution;  ///

        substitutions.addSubstitution(substitution, context);

        statementUnified = true;
      }
    }

    if (statementUnified) {
      specificContext.debug(`...unified the '${statementString}' statement with the '${metavariableString}${substitutionString}' metavariable.`);
    }

    return statementUnified;
  }

  unifyMetavariable(metavariable, generalContext, specificContext) {
    let metavariableUnified;

    const generalMetavariable = this, ///
          specificMetavariable = metavariable,  ///
          generalMetavariableString = generalMetavariable.getString(),
          specificMetavariableString = specificMetavariable.getString();

    specificContext.trace(`Unifying the '${specificMetavariableString}' metavariable with the '${generalMetavariableString}' metavariable...`);

    metavariableUnified = unifyMetavariable(generalMetavariable, specificMetavariable, generalContext, specificContext);

    if (metavariableUnified) {
      specificContext.debug(`...unified the '${specificMetavariableString}' metavariable with the '${generalMetavariableString}' metavariable.`);
    }

    return metavariableUnified;
  }

  unifySubstitution(substitution, context) {
    let substitutionUnified = false;

    const metavariableString = this.string,  ///
          substitutionString = substitution.getString();

    context.trace(`Unifying the '${substitutionString}' substitution with the '${metavariableString}' metavariable...`);

    const metavariable = this, ///
          judgement = context.findJudgementByMetavariable(metavariable);

    if (judgement !== null){
      const declaration = judgement.getDeclaration();

      substitutionUnified = declaration.unifySubstitution(substitution, context);
    }

    if (substitutionUnified) {
      context.debug(`...unified the '${substitutionString}' substitution with the '${metavariableString}' metavariable.`);
    }

    return substitutionUnified;
  }

  verify(context) {
    let verified;

    const metavariableString = this.string; ///

    context.trace(`Verifying the '${metavariableString}' metavariable...`);

    const metavariable = this, ///
          generalContext = context,  ///
          specificContext = context,  ///
          metavariablePresent = generalContext.isMetavariablePresent(metavariable, generalContext, specificContext);

    verified = metavariablePresent; ///

    if (verified) {
      context.debug(`...verified the '${metavariableString}' metavariable.`);
    }

    return verified;
  }

  verifyType(fileContext) {
    let typeVerified;

    if (this.type === null) {
      typeVerified = true;
    } else {
      if (this.type === objectType) {
        typeVerified = true;
      } else {
        const typeName = this.type.getName();

        fileContext.trace(`Verifying the '${typeName}' type...`);

        const type = fileContext.findTypeByTypeName(typeName);

        if (type === null) {
          fileContext.debug(`The '${typeName}' type is missing.`);
        } else {
          this.type = type; ///

          typeVerified = true;
        }

        if (typeVerified) {
          fileContext.debug(`...verified the '${typeName}' type.`);
        }
      }
    }

    return typeVerified;
  }

  verifyWhenDeclared(fileContext) {
    let verifiedWhenDeclared = false;

    const metavariableString = this.string; ///

    fileContext.trace(`Verifying the '${metavariableString}' metavariable when declared...`);

    const metavariableNode = this.node, ///
          termNode = termNodeQuery(metavariableNode);

    if (termNode !== null) {
      fileContext.debug(`A term was found in the '${metavariableString}' metavariable when a type should have been present.`);
    } else {
      const metavariableName = this.name, ///
            metavariablePresent = fileContext.isMetavariablePresentByMetavariableName(metavariableName);

      if (metavariablePresent) {
        fileContext.debug(`The '${metavariableName}' metavariable is already present.`);
      } else {
        const variableName = this.name, ///
              variablePresent = fileContext.isVariablePresentByVariableName(variableName);

        if (variablePresent) {
          fileContext.debug(`A '${metavariableName}' variable is already present.`);
        } else {
          const typeVerified = this.verifyType(fileContext);

          verifiedWhenDeclared = typeVerified;
        }
      }
    }

    if (verifiedWhenDeclared) {
      fileContext.debug(`...verified the '${metavariableString}' metavariable when declared.`);
    }

    return verifiedWhenDeclared;
  }

  verifyGivenMetaType(metaType, context) {
    let verifiedGivenMetaType = false;

    const metavariableString = this.string,  ///
          metaTypeString = metaType.getString();

    context.trace(`Verifying the '${metavariableString}' metavariable given the '${metaTypeString}' meta-type...`);

    let metavariable = this;  ///

    const specificContext = context,  ///
          generalContext = context; ///

    metavariable = generalContext.findMetavariable(metavariable, generalContext, specificContext);

    if (metavariable !== null) {
      const metavariableMetaTypeEqualToMetaType = metavariable.isMetaTypeEqualTo(metaType);

      verifiedGivenMetaType = metavariableMetaTypeEqualToMetaType;  ///
    }

    if (verifiedGivenMetaType) {
      context.debug(`...verified the '${metavariableString}' metavariable given the '${metaTypeString}' meta-type.`);
    }

    return verifiedGivenMetaType;
  }

  toJSON() {
    const metaTypeJSON = metaTypeToMetaTypeJSON(this.metaType),
          typeJSON = typeToTypeJSON(this.type),
          type = typeJSON,  ///
          metaType = metaTypeJSON,  ///
          string = this.string,
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
          context = fileContext,  ///
          metavariableNodeAndTokens = MetavariableNodeAndTokens.fromString(string, context),
          metavariableTokens = metavariableNodeAndTokens.getMetavariableTokens(),
          metavariableNode = metavariableNodeAndTokens.getMetavariableNode(),
          metavariableName = metavariableNameFromMetavariableNode(metavariableNode),
          name = metavariableName,  ///
          node = metavariableNode,  ///
          tokens = metavariableTokens, ///
          type = typeFromJSON(json, fileContext),
          metaType = metaTypeFromJSON(json, fileContext),
          metavariable = new Metavariable(string, node, tokens, name, type, metaType);

    return metavariable;
  }

  static fromFrameNode(frameNode, context) {
    let metavariable = null;

    const frameMetavariableNode = frameMetavariableNodeQuery(frameNode);

    if (frameMetavariableNode !== null) {
      const metavariableNode = frameMetavariableNode; ///

      metavariable = metavariableFromMetavariableNode(metavariableNode, context);
    }

    return metavariable;
  }

  static fromLabelNode(labelNode, context) {
    const labelMetavariableNode = labelMetavariableNodeQuery(labelNode),
          metavariableNode = labelMetavariableNode, ///
          metavariable = metavariableFromMetavariableNode(metavariableNode, context);

    return metavariable;
  }

  static fromReferenceNode(referenceNode, context) {
    const referenceMetavariableNode = referenceMetavariableNodeQuery(referenceNode),
          metavariableNode = referenceMetavariableNode, ///
          metavariable = metavariableFromMetavariableNode(metavariableNode, context);

    return metavariable;
  }

  static fromStatementNode(statementNode, context) {
    let metavariable = null;

    const statementMetavariableNode = statementMetavariableNodeQuery(statementNode);

    if (statementMetavariableNode !== null) {
      const metavariableNode = statementMetavariableNode; ///

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
    const { Type, MetaType } = dom,
          localContext = LocalContext.fromFileContext(fileContext),
          context = localContext, ///
          metavariableNode = metavariableNodeQuery(metavariableDeclarationNode),
          node = metavariableNode,  ///
          string = fileContext.nodeAsString(node),
          tokens = fileContext.nodeAsTokens(node),
          metavariableName = metavariableNameFromMetavariableNode(metavariableNode),
          name = metavariableName,  ///
          type = Type.fromMetavariableDeclarationNode(metavariableDeclarationNode, context),
          metaType = MetaType.fromMetavariableDeclarationNode(metavariableDeclarationNode, context),
          metavariable = new Metavariable(string, node, tokens, name, type, metaType);

    return metavariable;
  }
});

function metavariableFromMetavariableNode(metavariableNode, context) {
  const { Metavariable } = dom,
        metavariableName = metavariableNameFromMetavariableNode(metavariableNode),
        name = metavariableName,  ///
        node = metavariableNode,  ///
        string = context.nodeAsString(node),
        tokens = context.nodeAsTokens(node),
        type = null,
        metaType = null,
        metavariable = new Metavariable(string, node, tokens, name, type, metaType);

  return metavariable;
}
