"use strict";

import shim from "./shim";
import Argument from "./argument";
import LocalContext from "./context/local";
import metavariableUnifier from "./unifier/metavariable";
import StatementForMetavariableSubstitution from "./substitution/statementForMetavariable";

import { nodeQuery } from "./utilities/query";
import { metavariableNameFromMetavariableNode } from "./utilities/name";
import { metavariableNodeFromMetavariableString } from "./utilities/node";

const argumentNodeQuery = nodeQuery("/metavariable/argument"),
      metaTypeNodeQuery = nodeQuery("/metavariableDeclaration/metaType"),
      metavariableNodeQuery = nodeQuery("/metavariableDeclaration/metavariable"),
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

  matchName(name) {
    const nameMatches = (this.name === name);

    return nameMatches;
  }

  matchMetavariableNode(metavariableNode) {
    const metavariableNodeMatches = this.node.match(metavariableNode);

    return metavariableNodeMatches;
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
      const argumentNode = argumentNodeQuery(metavariableNode),
            argument = Argument.fromArgumentNode(argumentNode, fileContext);

      if (argument === null) {
        verifiedAtTopLevel = true;
      } else {
        const argumentVerified = argument.verify(fileContext);

        if (argumentVerified) {
          verifiedAtTopLevel = true;
        }
      }
    }

    if (verifiedAtTopLevel) {
      fileContext.debug(`...verified the '${metavariableString}' metavariable at top level.`);
    }

    return verifiedAtTopLevel;
  }

  unifyStatement(statement, substitutions, localContext) {
    let statementUnified = false;

    const statementString = statement.getString(),
          metavariableString = this.string; ///

    localContext.trace(`Unifying the '${statementString}' statement with the '${metavariableString}' metavariable...`);

    const statementNode = statement.getNode(),
          metavariableNode = this.node, ///
          simpleSubstitution = substitutions.findSimpleSubstitutionByMetavariableNode(metavariableNode),
          substitution = simpleSubstitution;  ///

    if (substitution !== null) {
      const statementNodeMatches = substitution.matchStatementNode(statementNode);

      if (statementNodeMatches) {
        statementUnified = true;
      }
    } else {
      const metavariable = this, ///
            statementMetavariable = statementMetavariableFromStatementNode(statementNode, localContext);

      if (metavariable === statementMetavariable) {
        statementUnified = true;
      } else {
        const statementForMetavariableSubstitution = StatementForMetavariableSubstitution.fromStatementAndMetavariable(statement, metavariable, localContext),
              substitution = statementForMetavariableSubstitution;  ///

        substitutions.addSubstitution(substitution, localContext);

        statementUnified = true;
      }
    }

    if (statementUnified) {
      localContext.debug(`...unified the '${statementString}' statement with the '${metavariableString}' metavariable.`);
    }

    return statementUnified;
  }

  unifyStatementGivenSubstitution(statement, substitution, substitutions, localContext) {
    let statementUnifiedGivenSubstitution = false;

    const statementString = statement.getString(),
          substitutionString = substitution.getString(),
          metavariableString = this.string; ///

    localContext.trace(`Unifying the '${statementString}' statement with the '${metavariableString}' metavariable given the '${substitutionString}' substitution...`);

    const statementNode = statement.getNode(),
          metavariableNode = this.node, ///
          substitutionNode = substitution.getNode(),
          complexSubstitution = substitutions.findComplexSubstitutionByMetavariableNodeAndSubstitutionNode(metavariableNode, substitutionNode);

    if (complexSubstitution !== null) {
      const statementNodeMatches = complexSubstitution.matchStatementNode(statementNode);

      if (statementNodeMatches) {
        statementUnifiedGivenSubstitution = true;
      }
    } else {
      const metavariable = metavariableFromStatementNode(statementNode, localContext);

      if (this === metavariable) {  ///
        statementUnifiedGivenSubstitution = false;  ///
      } else {
        const metavariable = this,  ///
              statementForMetavariableSubstitution = StatementForMetavariableSubstitution.fromStatementMetavariableAndSubstitution(statement, metavariable, substitution, localContext);

        substitution = statementForMetavariableSubstitution;  ///

        substitutions.addSubstitution(substitution, localContext);

        statementUnifiedGivenSubstitution = true;
      }
    }

    if (statementUnifiedGivenSubstitution) {
      localContext.trace(`...unified the '${statementString}' statement with the '${metavariableString}' metavariable given the '${substitutionString}' substitution.`);
    }

    return statementUnifiedGivenSubstitution;
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

function metavariableFromStatementNode(statementNode, localContext) {
  let metavariable = null;

  const statementMetavariableNode = statementMetavariableNodeQuery(statementNode)

  if (statementMetavariableNode !== null) {
    const metavariableNode = statementMetavariableNode, ///
          metavariableName = metavariableNameFromMetavariableNode(metavariableNode);

    metavariable = localContext.findMetavariableByMetavariableName(metavariableName);
  }

  return metavariable;
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
