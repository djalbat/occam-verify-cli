"use strict";

import shim from "./shim";
import LocalContext from "./context/local";
import FrameSubstitution from "./substitution/frame";
import StatementSubstitution from "./substitution/statement";
import MetavariableNodeAndTokens from "./nodeAndTokens/metavariable";

import { nodeQuery } from "./utilities/query";
import {typeFromJSON, typeToTypeJSON} from "./utilities/json";
import { EMPTY_STRING } from "./constants";
import { unifyMetavariable } from "./utilities/unification";
import { metaTypeFromJSON, metaTypeToMetaTypeJSON } from "./utilities/json";
import { typeNameFromTypeNode, metavariableNameFromMetavariableNode } from "./utilities/name";
import {objectType} from "./type";

const termNodeQuery = nodeQuery("/metavariable/argument/term"),
      metavariableNodeQuery = nodeQuery("/metavariableDeclaration/metavariable"),
      frameMetavariableNodeQuery = nodeQuery("/frame/metavariable!"),
      statementMetavariableNodeQuery = nodeQuery("/statement/metavariable!");

class Metavariable {
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

  isEqualTo(metavariable) {
    let equalTo = false;

    if (metavariable !== null) {
      const metavariableString = metavariable.getString();

      equalTo = (metavariableString === this.string);
    }

    return equalTo;
  }

  isMetaTypeEqualTo(metaType) { return this.metaType.isEqualTo(metaType); }

  isEssentiallyEqualToFrame(frame, generalContext, specificContext) {
    let essentiallyEqualToFrame = false;

    const generalContextFilePath = generalContext.getFilePath(),
          specificContextFilePath = specificContext.getFilePath();

    if (generalContextFilePath === specificContextFilePath) {
      const frameString = frame.getString();

      if (frameString === this.string) {
        essentiallyEqualToFrame = true;
      }
    }

    return essentiallyEqualToFrame;
  }

  isEssentiallyEqualToStatement(statement, generalContext, specificContext) {
    let essentiallyEqualToStatement = false;

    const generalContextFilePath = generalContext.getFilePath(),
          specificContextFilePath = specificContext.getFilePath();

    if (generalContextFilePath === specificContextFilePath) {
      const statementString = statement.getString();

      if (statementString === this.string) {
        essentiallyEqualToStatement = true;
      }
    }

    return essentiallyEqualToStatement;
  }

  unifyFrame(frame, substitutions, generalContext, specificContext) {
    let frameUnified = false;

    const frameString = frame.getString(),
          metavariableString = this.string; ///

    specificContext.trace(`Unifying the '${frameString}' frame with the '${metavariableString}' metavariable...`);

    const essentiallyEqualToFrame = this.isEssentiallyEqualToFrame(frame, generalContext, specificContext);

    if (essentiallyEqualToFrame) {
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
        const metavariable = this,  ///
              frameMetavariable = frameMetavariableFromFrame(frame, generalContext, specificContext);

        if ((metavariable !== null) && (metavariable === frameMetavariable)) {
          frameUnified = true;
        } else {
          const context = specificContext,  ///
                frameSubstitution = FrameSubstitution.fromFrameAndMetavariable(frame, metavariable, context),
                substitution = frameSubstitution;  ///

          substitutions.addSubstitution(substitution, context);

          frameUnified = true;
        }
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

    const essentiallyEqualToStatement = this.isEssentiallyEqualToStatement(statement, generalContext, specificContext);

    if (essentiallyEqualToStatement) {
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
        const metavariable = this,
              statementMetavariable = statementMetavariableFromStatement(statement, generalContext, specificContext);

        if ((metavariable !== null) && (metavariable === statementMetavariable)) {
          statementUnified = true;
        } else {
          const context = specificContext,  ///
                statementSubstitution = StatementSubstitution.fromStatementMetavariableAndSubstitution(statement, metavariable, substitution, context);

          substitution = statementSubstitution;  ///

          substitutions.addSubstitution(substitution, context);

          statementUnified = true;
        }
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

    specificContext.trace(`Unifying the '${specificMetavariableString}' metavariable against the '${generalMetavariableString}' metavariable...`);

    metavariableUnified = unifyMetavariable(generalMetavariable, specificMetavariable, generalContext, specificContext);

    if (metavariableUnified) {
      specificContext.debug(`...unified the '${specificMetavariableString}' metavariable against the '${generalMetavariableString}' metavariable.`);
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
      const metavariableNode = frameMetavariableNode, ///
            metavariableName = metavariableNameFromMetavariableNode(metavariableNode),
            name = metavariableName,  ///
            node = metavariableNode,  ///
            string = context.nodeAsString(node),
            tokens = context.nodeAsTokens(node),
            type = null,
            metaType = null;

      metavariable = new Metavariable(string, node, tokens, name, type, metaType);
    }

    return metavariable;
  }

  static fromStatementNode(statementNode, context) {
    let metavariable = null;

    const statementMetavariableNode = statementMetavariableNodeQuery(statementNode);

    if (statementMetavariableNode !== null) {
      const metavariableNode = statementMetavariableNode, ///
            metavariableName = metavariableNameFromMetavariableNode(metavariableNode),
            name = metavariableName,  ///
            node = metavariableNode,  ///
            string = context.nodeAsString(node),
            tokens = context.nodeAsTokens(node),
            type = null,
            metaType = null;

      metavariable = new Metavariable(string, node, tokens, name, type, metaType);
    }

    return metavariable;
  }

  static fromMetavariableNode(metavariableNode, context) {
    let metavariable = null;

    if (metavariableNode !== null) {
      const metavariableName = metavariableNameFromMetavariableNode(metavariableNode),
            name = metavariableName,  ///
            node = metavariableNode,  ///
            string = context.nodeAsString(node),
            tokens = context.nodeAsTokens(node),
            type = null,
            metaType = null;

      metavariable = new Metavariable(string, node, tokens, name, type, metaType);
    }

    return metavariable;
  }

  static fromMetavariableDeclarationNode(metavariableDeclarationNode, fileContext) {
    const { Type, MetaType } = shim,
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
}

Object.assign(shim, {
  Metavariable
});

export default Metavariable;

function frameMetavariableFromFrame(frame, generalContext, specificContext) {
  let frameMetavariable;

  const { Metavariable } = shim,
        context = specificContext,  ///
        frameNode = frame.getNode(),
        metavariable = Metavariable.fromFrameNode(frameNode, context);

  frameMetavariable = metavariable; ///

  return frameMetavariable;
}

function statementMetavariableFromStatement(statement, generalContext, specificContext) {
  let statementMetavariable;

  const { Metavariable } = shim,
        context = specificContext,  ///
        statementNode = statement.getNode(),
        metavariable = Metavariable.fromStatementNode(statementNode, context);

  statementMetavariable = metavariable; ///

  return statementMetavariable;
}
