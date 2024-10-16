"use strict";

import shim from "./shim";
import LocalContext from "./context/local";
import metavariableUnifier from "./unifier/metavariable";
import FrameForMetavariableSubstitution from "./substitution/frameForMetavariable";
import StatementForMetavariableSubstitution from "./substitution/statementForMetavariable";

import { nodeQuery } from "./utilities/query";
import {metavariableNameFromMetavariableNode, typeNameFromTypeNode} from "./utilities/name";
import { metavariableNodeFromMetavariableString } from "./utilities/node";

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

    const metavariableName = this.name, ///
          simpleSubstitutionPresent = substitutions.isSimpleSubstitutionPresentByMetavariableName(metavariableName);

    if (simpleSubstitutionPresent) {
      const simpleSubstitution = substitutions.findSimpleSubstitutionByMetavariableName(metavariableName),
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
          metavariableName = metavariableNameFromMetavariableNode(metavariableNode),
          substitutionNode = (substitution !== null) ?
                                substitution.getSubstitutionNode() :
                                  null,
          substitutionPresent = substitutions.isSubstitutionPresentByMetavariableNameAndSubstitutionNode(metavariableName, substitutionNode);

    if (substitutionPresent) {
      const substitution = substitutions.findSubstitutionByMetavariableNameAndSubstitutionNode(metavariableName, substitutionNode),
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

  verify(localContext) {
    let verified;

    const metavariableString = this.string; ///

    localContext.trace(`Verifying the '${metavariableString}' metavariable...`);

    const metavariableName = this.name,
          metavariable = localContext.findMetavariableByMetavariableName(metavariableName);

    if (metavariable !== null) {
      const metavariableA = metavariable, ///
            metavariableB = this,
            metavariableNodeA = metavariableA.getNode(), ///
            metavariableNodeB = metavariableB.getNode(),
            metavariableUnified = metavariableUnifier.unify(metavariableNodeA, metavariableNodeB, localContext);

      verified = metavariableUnified; ///
    }

    if (verified) {
      localContext.debug(`...verified the '${metavariableString}' metavariable.`);
    }

    return verified;
  }

  verifyAtTopLevel(fileContext) {
    let verifiedAtTopLevel = false;

    const metavariableString = this.string; ///

    fileContext.trace(`Verifying the '${metavariableString}' metavariable at top level...`);

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
      fileContext.debug(`...verified the '${metavariableString}' metavariable at top level.`);
    }

    return verifiedAtTopLevel;
  }

  verifyGivenMetaType(metaType, localContext) {
    let verifiedGivenMetaType = false;

    const metavariableString = this.string,  ///
          metaTypeString = metaType.getString();

    localContext.trace(`Verifying the '${metavariableString}' metavariable given the '${metaTypeString}' meta-type...`);

    const name = this.getName(),
          metavariableName = name,  ///
          metavariable = localContext.findMetavariableByMetavariableName(metavariableName);

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
    const metaTypeJSON = (this.metaType !== null) ?
                            this.metaType.toJSON() :
                              null,
          string = this.string,
          metaType = metaTypeJSON,  ///
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

  static fromMetavariableNode(metavariableNode, fileContext) {
    let metavariable = null;

    if (metavariableNode !== null) {
      const metavariableName = metavariableNameFromMetavariableNode(metavariableNode),
            node = metavariableNode,  ///
            name = metavariableName,  ///
            string = fileContext.nodeAsString(node),
            metaType = null;

      metavariable = new Metavariable(fileContext, string, node, name, metaType);
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

function metaTypeFromJSON(json, fileContext) {
  let { metaType } = json;

  if (metaType !== null) {
    const { name } = metaType,
          metaTypeName = name;  ///

    metaType = fileContext.findMetaTypeByMetaTypeName(metaTypeName);
  }

  return metaType;
}

function metavariableFromMetavariableNode(metavariableNode, localContext) {
  const metavariableName = metavariableNameFromMetavariableNode(metavariableNode),
        metavariable = localContext.findMetavariableByMetavariableName(metavariableName);

  return metavariable;
}

function frameMetavariableFromStatementNode(frameNode, localContext) {
  let frameMetavariable = null;

  const frameMetavariableNode = frameMetavariableNodeQuery(frameNode);

  if (frameMetavariableNode !== null) {
    const frameMetavariableName = metavariableNameFromMetavariableNode(frameMetavariableNode);

    frameMetavariable = localContext.findMetavariableByMetavariableName(frameMetavariableName);
  }

  return frameMetavariable;
}

function statementMetavariableFromStatementNode(statementNode, localContext) {
  let statementMetavariable = null;

  const statementMetavariableNode = statementMetavariableNodeQuery(statementNode);

  if (statementMetavariableNode !== null) {
    const statementMetavariableName = metavariableNameFromMetavariableNode(statementMetavariableNode);

    statementMetavariable = localContext.findMetavariableByMetavariableName(statementMetavariableName);
  }

  return statementMetavariable;
}
