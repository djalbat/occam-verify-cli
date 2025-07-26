"use strict";

import dom from "../dom";

import { objectType } from "../dom/type";
import { RULE_RULE_NAME,
         STEP_RULE_NAME,
         TERM_RULE_NAME,
         TYPE_RULE_NAME,
         LABEL_RULE_NAME,
         LEMMA_RULE_NAME,
         AXIOM_RULE_NAME,
         ERROR_RULE_NAME,
         FRAME_RULE_NAME,
         PROOF_RULE_NAME,
         THEOREM_RULE_NAME,
         PREMISE_RULE_NAME,
         PROPERTY_RULE_NAME,
         EQUALITY_RULE_NAME,
         VARIABLE_RULE_NAME,
         SUBPROOF_RULE_NAME,
         META_TYPE_RULE_NAME,
         PARAMETER_RULE_NAME,
         DEDUCTION_RULE_NAME,
         JUDGEMENT_RULE_NAME,
         REFERENCE_RULE_NAME,
         STATEMENT_RULE_NAME,
         META_LEMMA_RULE_NAME,
         COMBINATOR_RULE_NAME,
         CONCLUSION_RULE_NAME,
         CONJECTURE_RULE_NAME,
         DERIVATION_RULE_NAME,
         SUPPOSITION_RULE_NAME,
         CONSTRUCTOR_RULE_NAME,
         DECLARATION_RULE_NAME,
         METATHEOREM_RULE_NAME,
         METAVARIABLE_RULE_NAME,
         PROCEDURE_CALL_RULE_NAME,
         SUB_DERIVATION_RULE_NAME,
         TYPE_ASSERTION_RULE_NAME,
         TYPE_DECLARATION_RULE_NAME,
         PROPERTY_RELATION_RULE_NAME,
         DEFINED_ASSERTION_RULE_NAME,
         PROPERTY_ASSERTION_RULE_NAME,
         SUBPROOF_ASSERTION_RULE_NAME,
         CONTAINED_ASSERTION_RULE_NAME,
         SATISFIES_ASSERTION_RULE_NAME,
         PROPERTY_DECLARATION_RULE_NAME,
         VARIABLE_DECLARATION_RULE_NAME,
         PARENTHESISED_LABELS_RULE_NAME,
         COMBINATOR_DECLARATION_RULE_NAME,
         CONSTRUCTOR_DECLARATION_RULE_NAME,
         COMPLEX_TYPE_DECLARATION_RULE_NAME,
         METAVARIABLE_DECLARATION_RULE_NAME } from "../ruleNames";

export function isNodeRuleNode(node) { return isNodeRuleNodeByRuleName(node, RULE_RULE_NAME); }

export function isNodeStepNode(node) { return isNodeRuleNodeByRuleName(node, STEP_RULE_NAME); }

export function isNodeTermNode(node) { return isNodeRuleNodeByRuleName(node, TERM_RULE_NAME); }

export function isNodeTypeNode(node) { return isNodeRuleNodeByRuleName(node, TYPE_RULE_NAME); }

export function isNodeLabelNode(node) { return isNodeRuleNodeByRuleName(node, LABEL_RULE_NAME); }

export function isNodeLemmaNode(node) { return isNodeRuleNodeByRuleName(node, LEMMA_RULE_NAME); }

export function isNodeAxiomNode(node) { return isNodeRuleNodeByRuleName(node, AXIOM_RULE_NAME); }

export function isNodeErrorNode(node) { return isNodeRuleNodeByRuleName(node, ERROR_RULE_NAME); }

export function isNodeFrameNode(node) { return isNodeRuleNodeByRuleName(node, FRAME_RULE_NAME); }

export function isNodeProofNode(node) { return isNodeRuleNodeByRuleName(node, PROOF_RULE_NAME); }

export function isNodeTheoremNode(node) { return isNodeRuleNodeByRuleName(node, THEOREM_RULE_NAME); }

export function isNodePremiseNode(node) { return isNodeRuleNodeByRuleName(node, PREMISE_RULE_NAME); }

export function isNodePropertyNode(node) { return isNodeRuleNodeByRuleName(node, PROPERTY_RULE_NAME); }

export function isNodeEqualityNode(node) { return isNodeRuleNodeByRuleName(node, EQUALITY_RULE_NAME); }

export function isNodeVariableNode(node) { return isNodeRuleNodeByRuleName(node, VARIABLE_RULE_NAME); }

export function isNodeSubproofNode(node) { return isNodeRuleNodeByRuleName(node, SUBPROOF_RULE_NAME); }

export function isNodeMetaTypeNode(node) { return isNodeRuleNodeByRuleName(node, META_TYPE_RULE_NAME); }

export function isNodeParameterNode(node) { return isNodeRuleNodeByRuleName(node, PARAMETER_RULE_NAME); }

export function isNodeDeductionNode(node) { return isNodeRuleNodeByRuleName(node, DEDUCTION_RULE_NAME); }

export function isNodeJudgementNode(node) { return isNodeRuleNodeByRuleName(node, JUDGEMENT_RULE_NAME); }

export function isNodeReferenceNode(node) { return isNodeRuleNodeByRuleName(node, REFERENCE_RULE_NAME); }

export function isNodeStatementNode(node) { return isNodeRuleNodeByRuleName(node, STATEMENT_RULE_NAME); }

export function isNodeMetaLemmaNode(node) { return isNodeRuleNodeByRuleName(node, META_LEMMA_RULE_NAME); }

export function isNodeCombinatorNode(node) { return isNodeRuleNodeByRuleName(node, COMBINATOR_RULE_NAME); }

export function isNodeConclusionNode(node) { return isNodeRuleNodeByRuleName(node, CONCLUSION_RULE_NAME); }

export function isNodeConjectureNode(node) { return isNodeRuleNodeByRuleName(node, CONJECTURE_RULE_NAME); }

export function isNodeDerivationNode(node) { return isNodeRuleNodeByRuleName(node, DERIVATION_RULE_NAME); }

export function isNodeSuppositionNode(node) { return isNodeRuleNodeByRuleName(node, SUPPOSITION_RULE_NAME); }

export function isNodeConstructorNode(node) { return isNodeRuleNodeByRuleName(node, CONSTRUCTOR_RULE_NAME); }

export function isNodeDeclarationNode(node) { return isNodeRuleNodeByRuleName(node, DECLARATION_RULE_NAME); }

export function isNodeMetatheoremNode(node) { return isNodeRuleNodeByRuleName(node, METATHEOREM_RULE_NAME); }

export function isNodeMetavariableNode(node) { return isNodeRuleNodeByRuleName(node, METAVARIABLE_RULE_NAME); }

export function isNodeProcedureCallNode(node) { return isNodeRuleNodeByRuleName(node, PROCEDURE_CALL_RULE_NAME); }

export function isNodeSubDerivationNode(node) { return isNodeRuleNodeByRuleName(node, SUB_DERIVATION_RULE_NAME); }

export function isNodeTypeAssertionNode(node) { return isNodeRuleNodeByRuleName(node, TYPE_ASSERTION_RULE_NAME); }

export function isNodeTypeDeclarationNode(node) { return isNodeRuleNodeByRuleName(node, TYPE_DECLARATION_RULE_NAME); }

export function isNodePropertyRelationNode(node) { return isNodeRuleNodeByRuleName(node, PROPERTY_RELATION_RULE_NAME); }

export function isNodeDefinedAssertionNode(node) { return isNodeRuleNodeByRuleName(node, DEFINED_ASSERTION_RULE_NAME); }

export function isNodePropertyAssertionNode(node) { return isNodeRuleNodeByRuleName(node, PROPERTY_ASSERTION_RULE_NAME); }

export function isNodeSubproofAssertionNode(node) { return isNodeRuleNodeByRuleName(node, SUBPROOF_ASSERTION_RULE_NAME); }

export function isNodeContainedAssertionNode(node) { return isNodeRuleNodeByRuleName(node, CONTAINED_ASSERTION_RULE_NAME); }

export function isNodeSatisfiesAssertionNode(node) { return isNodeRuleNodeByRuleName(node, SATISFIES_ASSERTION_RULE_NAME); }

export function isNodePropertyDeclarationNode(node) { return isNodeRuleNodeByRuleName(node, PROPERTY_DECLARATION_RULE_NAME); }

export function isNodeVariableDeclarationNode(node) { return isNodeRuleNodeByRuleName(node, VARIABLE_DECLARATION_RULE_NAME); }

export function isNodeParenthesisedLabelsNode(node) { return isNodeRuleNodeByRuleName(node, PARENTHESISED_LABELS_RULE_NAME); }

export function isNodeCombinatorDeclarationNode(node) { return isNodeRuleNodeByRuleName(node, COMBINATOR_DECLARATION_RULE_NAME); }

export function isNodeConstructorDeclarationNode(node) { return isNodeRuleNodeByRuleName(node, CONSTRUCTOR_DECLARATION_RULE_NAME); }

export function isNodeComplexTypeDeclarationNode(node) { return isNodeRuleNodeByRuleName(node, COMPLEX_TYPE_DECLARATION_RULE_NAME); }

export function isNodeMetavariableDeclarationNode(node) { return isNodeRuleNodeByRuleName(node, METAVARIABLE_DECLARATION_RULE_NAME); }

export function typeFromTypeNode(typeNode) {
  let type;

  if (typeNode === null) {
    type = objectType;
  } else {
    const { Type } = dom,
          typeName = typeNode.getTypeName(),
          name = typeName,  ///
          string = name,  ///
          superTypes = null,
          properties = null,
          provisional = null;

    type = new Type(string, name, superTypes, properties, provisional);
  }

  return type;
}

export function termFromTermNode(termNode, context) {
  const { Term } = dom,
        node = termNode,  ///
        string = context.nodeAsString(node),
        type = null,
        term = new Term(string, node, type);

  return term;
}

export function statementFromStatementNode(statementNode, context) {
  const { Statement } = dom,
        node = statementNode, ///
        tokens = context.nodeAsTokens(node),
        string = context.tokensAsString(tokens),
        statement = new Statement(string, node, tokens);

  return statement;
}

function isNodeRuleNodeByRuleName(node, ruleName) {
  let nodeRuleNode = false;

  const nodeNonTerminalNode = node.isNonTerminalNode();

  if (nodeNonTerminalNode) {
    const nonTerminalNode = node, ///
          nonTerminalNodeRuleName = nonTerminalNode.getRuleName(),
          nonTerminalNodeRuleNameRuleName = (nonTerminalNodeRuleName === ruleName);

    if (nonTerminalNodeRuleNameRuleName) {
      nodeRuleNode = true;
    }
  }

  return nodeRuleNode;
}
