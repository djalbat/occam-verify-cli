"use strict";

import shim from "./shim";
import LocalContext from "./context/local";
import FrameForMetavariableSubstitution from "./substitution/frameForMetavariable";
import StatementForMetavariableSubstitution from "./substitution/statementForMetavariable";

import { nodeQuery } from "./utilities/query";
import { metavariableNodeFromMetavariableString } from "./utilities/node";
import { metaTypeFromJSON, metaTypeToMetaTypeJSON } from "./utilities/json";
import { typeNameFromTypeNode, metavariableNameFromMetavariableNode } from "./utilities/name";

const termNodeQuery = nodeQuery("/metavariable/argument/term"),
      typeNodeQuery = nodeQuery("/metavariable/argument/type"),
      metaTypeNodeQuery = nodeQuery("/metavariableDeclaration/metaType"),
      metavariableNodeQuery = nodeQuery("/metavariableDeclaration/metavariable"),
      frameMetavariableNodeQuery = nodeQuery("/frame/metavariable!"),
      statementMetavariableNodeQuery = nodeQuery("/statement/metavariable!");

class Metavariable {
  constructor(fileContext, string, node, name, metaType) {
    this.fileContext = fileContext;
    this.string = string;
    this.node = node;
    this.name = name;
    this.metaType = metaType;
  }

  getFileContext() {
    return this.fileContext;
  }

  getString() {
    return this.string;
  }

  getNode() {
    return this.node;
  }

  getName() {
    return this.name;
  }

  getMetaType() {
    return this.metaType;
  }

  getMetaTypeName() {
    const metaTypeName = this.metaType.getName();

    return metaTypeName;
  }

  matchMetaType(metaType) {
    const metaTypeMatches = (this.metaType === metaType);

    return metaTypeMatches;
  }

  matchMetavariableName(metavariableName) {
    const metavariableNameMatches = (this.name === metavariableName);

    return metavariableNameMatches;
  }

  matchMetavariableNode(metavariableNode) {
    const metavariableNodeMatches = this.node.match(metavariableNode);

    return metavariableNodeMatches;
  }

  unifyFrame(frame, substitutions, localContext) {
    let frameUnified = false;

    const frameNode = frame.getNode(),
          frameString = frame.getString(),
          metavariableString = this.string; ///

    localContext.trace(`Unifying the '${frameString}' frame with the '${metavariableString}' metavariable...`);

    const metavariableNode = this.node, ///
          simpleSubstitutionPresent = substitutions.isSimpleSubstitutionPresentByMetavariableNode(metavariableNode);

    if (simpleSubstitutionPresent) {
      const simpleSubstitution = substitutions.findSimpleSubstitutionByMetavariableNode(metavariableNode),
            substitution = simpleSubstitution,  ///
            frameNodeMatches = substitution.matchFrameNode(frameNode);

      if (frameNodeMatches) {
        frameUnified = true;
      }
    } else {
      const metavariableNode = this.node,  ///
            metavariable = metavariableFromMetavariableNode(metavariableNode, localContext),
            frameMetavariable  = frameMetavariableFromStatementNode(frameNode, localContext);

      if (metavariable === frameMetavariable) {
        frameUnified = true;
      } else {
        const metavariable = this,  ///
              frameForMetavariableSubstitution = FrameForMetavariableSubstitution.fromFrameAndMetavariable(frame, metavariable, localContext),
              substitution = frameForMetavariableSubstitution;  ///

        substitutions.addSubstitution(substitution, localContext);

        frameUnified = true;
      }
    }

    if (frameUnified) {
      localContext.debug(`...unified the '${frameString}' frame with the '${metavariableString}' metavariable.`);
    }

    return frameUnified;
  }

  unifyStatement(statement, substitution, substitutions, localContext) {
    let statementUnified = false;

    const statementString = statement.getString(),
          metavariableString = this.string, ///
          substitutionString = (substitution !== null) ?
                                  substitution.getString() :
                                    null;

    (substitutionString !== null) ?
      localContext.trace(`Unifying the '${statementString}' statement with the '${metavariableString}' metavariable given the ${substitutionString} substitution...`) :
        localContext.trace(`Unifying the '${statementString}' statement with the '${metavariableString}' metavariable...`);

    const statementNode = statement.getNode(),
          metavariableNode = this.node, ///
          substitutionNode = (substitution !== null) ?
                                substitution.getSubstitutionNode() :
                                  null,
          substitutionPresent = substitutions.isSubstitutionPresentByMetavariableNodeAndSubstitutionNode(metavariableNode, substitutionNode);

    if (substitutionPresent) {
      const substitution = substitutions.findSubstitutionByMetavariableNodeAndSubstitutionNode(metavariableNode, substitutionNode),
            statementNodeMatches = substitution.matchStatementNode(statementNode);

      if (statementNodeMatches) {
        statementUnified = true;
      }
    } else {
      const metavariableNode = this.node,  ///
            metavariable = metavariableFromMetavariableNode(metavariableNode, localContext),
            statementMetavariable = statementMetavariableFromStatementNode(statementNode, localContext);

      if (metavariable === statementMetavariable) {
        statementUnified = true;
      } else {
        const metavariable = this,  ///
              statementForMetavariableSubstitution = StatementForMetavariableSubstitution.fromStatementMetavariableAndSubstitution(statement, metavariable, substitution, localContext);

        substitution = statementForMetavariableSubstitution;  ///

        substitutions.addSubstitution(substitution, localContext);

        statementUnified = true;
      }
    }

    if (statementUnified) {
      (substitutionString !== null) ?
        localContext.debug(`...unified the '${statementString}' statement with the '${metavariableString}' metavariable given the ${substitutionString} substitution.`) :
          localContext.debug(`...unified the '${statementString}' statement with the '${metavariableString}' metavariable.`);
    }

    return statementUnified;
  }

  unifySubstitution(substitution, localContext) {
    let substitutionUnified = false;

    const metavariableString = this.string,  ///
          substitutionString = substitution.getString();

    localContext.trace(`Unifying the '${substitutionString}' substitution with the '${metavariableString}' metavariable...`);

    const metavariableNode = this.node, ///
          judgement = localContext.findJudgementByMetavariableNode(metavariableNode);

    if (judgement !== null){
      const declaration = judgement.getDeclaration();

      substitutionUnified = declaration.unifySubstitution(substitution, localContext);
    }

    if (substitutionUnified) {
      localContext.debug(`...unified the '${substitutionString}' substitution with the '${metavariableString}' metavariable.`);
    }

    return substitutionUnified;
  }

  verify(localContext) {
    let verified;

    const metavariableString = this.string; ///

    localContext.trace(`Verifying the '${metavariableString}' metavariable...`);

    const metavariableNode = this.node,
          metavariablePresent = localContext.isMetavariablePresentByMetavariableNode(metavariableNode, localContext);

    verified = metavariablePresent; ///

    if (verified) {
      localContext.debug(`...verified the '${metavariableString}' metavariable.`);
    }

    return verified;
  }

  verifyWhenDeclared(fileContext) {
    let verifiedAtTopLevel = false;

    const metavariableString = this.string; ///

    fileContext.trace(`Verifying the '${metavariableString}' metavariable when declared...`);

    const metavariableNode = this.node, ///
          metavariableName = metavariableNameFromMetavariableNode(metavariableNode),
          metavariablePresent = fileContext.isMetavariablePresentByMetavariableName(metavariableName);

    if (metavariablePresent) {
      fileContext.debug(`The metavariable '${metavariableString}' is already present.`);
    } else {
      const termNode = termNodeQuery(this.node);

      if (termNode !== null) {
        const termString = this.fileContext.nodeAsString(termNode);

        this.fileContext.debug(`The '${termString}' term was found when a type should have been present.`);
      } else {
        const typeNode = typeNodeQuery(this.node);

        if (typeNode !== null) {
          const typeName = typeNameFromTypeNode(typeNode),
                typePresent = this.fileContext.isTypePresentByTypeName(typeName);

          if (typePresent) {
            verifiedAtTopLevel = true;
          } else {
            this.fileContext.debug(`The '${typeName}' type is not present.`);
          }
        } else {
          verifiedAtTopLevel = true;
        }
      }
    }

    if (verifiedAtTopLevel) {
      fileContext.debug(`...verified the '${metavariableString}' metavariable when declared.`);
    }

    return verifiedAtTopLevel;
  }

  verifyGivenMetaType(metaType, localContext) {
    let verifiedGivenMetaType = false;

    const metavariableString = this.string,  ///
          metaTypeString = metaType.getString();

    localContext.trace(`Verifying the '${metavariableString}' metavariable given the '${metaTypeString}' meta-type...`);

    const metavariableNode = this.node,  ///
          metavariable = localContext.findMetavariableByMetavariableNode(metavariableNode, localContext);

    if (metavariable !== null) {
      const metaTypeMatches = metavariable.matchMetaType(metaType);

      verifiedGivenMetaType = metaTypeMatches;  ///
    }

    if (verifiedGivenMetaType) {
      localContext.debug(`...verified the '${metavariableString}' metavariable given the '${metaTypeString}' meta-type.`);
    }

    return verifiedGivenMetaType;
  }

  toJSON() {
    const metaTypeJSON = metaTypeToMetaTypeJSON(this.metaType),
          metaType = metaTypeJSON,  ///
          string = this.string,
          json = {
            string,
            metaType
          };

    return json;
  }

  static fromJSON(json, fileContext) {
    const { string } = json,
          lexer  = fileContext.getLexer(),
          parser = fileContext.getParser(),
          metavariableString = string,  ///
          metavariableNode = metavariableNodeFromMetavariableString(metavariableString, lexer, parser),
          metavariableName = metavariableNameFromMetavariableNode(metavariableNode),
          node = metavariableNode,  ///
          name = metavariableName,  ///
          metaType = metaTypeFromJSON(json, fileContext),
          metavariable = new Metavariable(fileContext, string, node, name, metaType);

    return metavariable;
  }

  static fromMetavariableNode(metavariableNode, localContext) {
    let metavariable = null;

    if (metavariableNode !== null) {
      const metavariableName = metavariableNameFromMetavariableNode(metavariableNode),
            node = metavariableNode,  ///
            name = metavariableName,  ///
            string = localContext.nodeAsString(node),
            metaType = null;

      metavariable = new Metavariable(localContext, string, node, name, metaType);
    }

    return metavariable;
  }

  static fromMetavariableDeclarationNode(metavariableDeclarationNode, fileContext) {
    const { MetaType } = shim,
          metaTypeNode = metaTypeNodeQuery(metavariableDeclarationNode),
          metavariableNode = metavariableNodeQuery(metavariableDeclarationNode),
          metavariableName = metavariableNameFromMetavariableNode(metavariableNode),
          localContext = LocalContext.fromFileContext(fileContext),
          metavariableString = fileContext.nodeAsString(metavariableNode),
          string = metavariableString,  ///
          node = metavariableNode,  ///
          name = metavariableName,  ///
          metaType = MetaType.fromMetaTypeNode(metaTypeNode, localContext),
          metavariable = new Metavariable(fileContext, string, node, name, metaType);

    return metavariable;
  }
}

Object.assign(shim, {
  Metavariable
});

export default Metavariable;

function metavariableFromMetavariableNode(metavariableNode, localContext) {
  const metavariable = localContext.findMetavariableByMetavariableNode(metavariableNode, localContext);

  return metavariable;
}

function frameMetavariableFromStatementNode(frameNode, localContext) {
  let frameMetavariable = null;

  const frameMetavariableNode = frameMetavariableNodeQuery(frameNode);

  if (frameMetavariableNode !== null) {
    frameMetavariable = localContext.findMetavariableByMetavariableNode(frameMetavariableNode, localContext);
  }

  return frameMetavariable;
}

function statementMetavariableFromStatementNode(statementNode, localContext) {
  let statementMetavariable = null;

  const statementMetavariableNode = statementMetavariableNodeQuery(statementNode);

  if (statementMetavariableNode !== null) {
    statementMetavariable = localContext.findMetavariableByMetavariableNode(statementMetavariableNode, localContext);
  }

  return statementMetavariable;
}
