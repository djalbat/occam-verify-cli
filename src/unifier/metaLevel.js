"use strict";

import ontology from "../ontology";
import Unifier from "../unifier";

import { nodeQuery } from "../utilities/query";
import { metavariableNameFromMetavariableNode } from "../utilities/metavariable";
import { variableIdentifierFromVariableNode, termVariableIdentifierFromTermNode } from "../utilities/variable";

const termNodeQuery = nodeQuery("/term"),
      frameNodeQuery = nodeQuery("/frame"),
      statementNodeQuery = nodeQuery("/statement"),
      termVariableNodeQuery = nodeQuery("/term/variable!"),
      statementMetavariableNodeQuery = nodeQuery("/statement/metavariable!"),
      assumptionMetavariableNodeQuery = nodeQuery("/assumption/metavariable!"),
      frameAssumptionMetavariableNodeQuery = nodeQuery("/frame/assumption!/metavariable!");

class MetaLevelUnifier extends Unifier {
  unify(generalNonTerminalNode, specificNonTerminalNode, substitutions, generalContext, specificContext) {
    let unifiesAtMetaLevel;

    const nonTerminalNodeUnifies = this.unifyNonTerminalNode(generalNonTerminalNode, specificNonTerminalNode, substitutions, generalContext, specificContext);

    unifiesAtMetaLevel = nonTerminalNodeUnifies; ///

    return unifiesAtMetaLevel;
  }

  static maps = [
    {
      generalNodeQuery: statementMetavariableNodeQuery,
      specificNodeQuery: statementNodeQuery,
      unify: (generalStatementMetavariableNode, specificStatementNode, substitutions, generalContext, specificContext) => {
        let statementUnifies;

        let context,
            statement,
            statementNode;

        context = generalContext; ///

        const metavariableNode = generalStatementMetavariableNode,  ///
              metavariableName = metavariableNameFromMetavariableNode(metavariableNode),
              metavariable = context.findMetavariableByMetavariableName(metavariableName);

        const metavariableNodeParentNode = metavariableNode.getParentNode();

        statementNode = metavariableNodeParentNode; ///

        statement = context.findStatementByStatementNode(statementNode);

        const { TermSubstitution, FrameSubstitution } = ontology,
              frameSubstitution = FrameSubstitution.fromStatement(statement, context),
              termSubstitution = TermSubstitution.fromStatement(statement, context),
              substitution = (frameSubstitution || termSubstitution);

        context = specificContext; ///

        statementNode = specificStatementNode;  ///

        statement = context.findStatementByStatementNode(statementNode);

        statementUnifies = metavariable.unifyStatement(statement, substitution, substitutions, generalContext, specificContext);

        return statementUnifies;
      }
    },
    {
      generalNodeQuery: frameAssumptionMetavariableNodeQuery,
      specificNodeQuery: frameNodeQuery,
      unify: (generalFrameAssumptionMetavariableNode, specificFrameNode, substitutions, generalContext, specificContext) => {
        let frameUnifies;

        const frameNode = specificFrameNode, ///
              metavariableNode = generalFrameAssumptionMetavariableNode,  ///
              metavariableName = metavariableNameFromMetavariableNode(metavariableNode);

        let context;

        context = generalContext; ///

        const metavariable = context.findMetavariableByMetavariableName(metavariableName);

        context = specificContext;  ///

        const frame = context.findFrameByFrameNode(frameNode);

        frameUnifies = metavariable.unifyFrame(frame, substitutions, generalContext, specificContext);

        return frameUnifies;
      }
    },
    {
      generalNodeQuery: termVariableNodeQuery,
      specificNodeQuery: termNodeQuery,
      unify: (generalTermVariableNode, specificTermNode, substitutions, generalContext, specificContext) => {
        let termUnifies = false;

        const termNode = specificTermNode, ///
              variableNode = generalTermVariableNode, ///
              variableIdentifier = variableIdentifierFromVariableNode(variableNode);

        let context;

        context = generalContext; ///

        const variable = context.findVariableByVariableIdentifier(variableIdentifier);

        context = specificContext;  ///

        const term = context.findTermByTermNode(termNode);

        if (term !== null) {
          termUnifies = variable.unifyTerm(term, substitutions, generalContext, specificContext);
        } else {
          const termVariaibleIdentifer = termVariableIdentifierFromTermNode(termNode),
                termVariable = context.findVariableByVariableIdentifier(termVariaibleIdentifer),
                termVariableUnifies = variable.unifyTermVariable(termVariable, substitutions, generalContext, specificContext);

          if (termVariableUnifies) {
           termUnifies = true;
          }
        }

        return termUnifies;
      }
    },
    {
      generalNodeQuery: assumptionMetavariableNodeQuery,
      specificNodeQuery: assumptionMetavariableNodeQuery,
      unify: (generalAssumptionMetavariableNode, specificAssumptionMetavariableNode, substitutions, generalContext, specificContext) => {
        let referenceUnifies;

        const { Reference } = ontology;

        let context,
            metavariableNode;

        context = generalContext; ///

        metavariableNode = generalAssumptionMetavariableNode;  ///

        const metavariableName = metavariableNameFromMetavariableNode(metavariableNode),
              metavariable = context.findMetavariableByMetavariableName(metavariableName);

        context = specificContext;  ///

        metavariableNode = specificAssumptionMetavariableNode; ///

        const reference = Reference.fromMetavariableNode(metavariableNode, context);

        referenceUnifies = metavariable.unifyReference(reference, substitutions, generalContext, specificContext);

        return referenceUnifies;
      }
    }
  ];
}

const metaLevelUnifier = new MetaLevelUnifier();

export default metaLevelUnifier;
