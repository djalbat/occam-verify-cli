"use strict";

import TermNode from "./node/term"
import RuleNode from "./node/rule"
import StepNode from "./node/step"
import TypeNode from "./node/type"
import TypesNode from "./node/types"
import ErrorNode from "./node/error"
import FrameNode from "./node/frame"
import AxiomNode from "./node/axiom"
import LemmaNode from "./node/lemma"
import ProofNode from "./node/proof"
import LabelNode from "./node/label"
import LabelsNode from "./node/labels"
import PremiseNode from "./node/premise"
import TheoremNode from "./node/theorem"
import SubproofNode from "./node/subproof"
import PropertyNode from "./node/property"
import MetaTypeNode from "./node/metaType"
import EqualityNode from "./node/equality"
import VariableNode from "./node/variable"
import StatementNode from "./node/statement"
import ReferenceNode from "./node/reference"
import DeductionNode from "./node/deduction"
import JudgementNode from "./node/judgement"
import MetaLemmaNode from "./node/metaLemma"
import ParameterNode from "./node/parameter"
import DerivationNode from "./node/derivation"
import CombinatorNode from "./node/combinator"
import ConclusionNode from "./node/conclusion"
import ConjectureNode from "./node/conjecture"
import SuppositionNode from "./node/supposition"
import ConstructorNode from "./node/constructor"
import DeclarationNode from "./node/declaration"
import MetatheoremNode from "./node/metatheorem"
import MetavariableNode from "./node/metavariable"
import ProcedureCallNode from "./node/procedureCall"
import SubDerivationNode from "./node/subDerivation"
import TypeAssertionNode from "./node/assertion/type";
import typeDeclarationNode from "./node/declaration/type";
import PropertyRelationNode from "./node/propertyRelation"
import DefinedAssertionNode from "./node/assertion/defined";
import PropertyAssertionNode from "./node/assertion/property";
import SubproofAssertionNode from "./node/assertion/subproof";
import ContainedAssertionNode from "./node/assertion/contained";
import SatisfiesAssertionNode from "./node/assertion/satisfies";
import ParenthesisedLabelNode from "./node/parenthesisedLabel"
import ParenthesisedLabelsNode from "./node/parenthesisedLabels"
import PropertyDeclarationNode from "./node/declaration/property";
import variableDeclarationNode from "./node/declaration/variable";
import combinatorDeclarationNode from "./node/declaration/combinator";
import complexTypeDeclarationNode from "./node/declaration/complexType";
import constructorDeclarationNode from "./node/declaration/constructor";
import metavariableDeclarationNode from "./node/declaration/metavariable";

import { RULE_RULE_NAME,
         STEP_RULE_NAME,
         TERM_RULE_NAME,
         TYPE_RULE_NAME,
         TYPES_RULE_NAME,
         PROOF_RULE_NAME,
         ERROR_RULE_NAME,
         FRAME_RULE_NAME,
         AXIOM_RULE_NAME,
         LEMMA_RULE_NAME,
         LABEL_RULE_NAME,
         LABELS_RULE_NAME,
         THEOREM_RULE_NAME,
         PREMISE_RULE_NAME,
         SUBPROOF_RULE_NAME,
         PROPERTY_RULE_NAME,
         EQUALITY_RULE_NAME,
         VARIABLE_RULE_NAME,
         META_TYPE_RULE_NAME,
         DEDUCTION_RULE_NAME,
         JUDGEMENT_RULE_NAME,
         PARAMETER_RULE_NAME,
         REFERENCE_RULE_NAME,
         STATEMENT_RULE_NAME,
         META_LEMMA_RULE_NAME,
         DERIVATION_RULE_NAME,
         COMBINATOR_RULE_NAME,
         CONCLUSION_RULE_NAME,
         CONJECTURE_RULE_NAME,
         CONSTRUCTOR_RULE_NAME,
         DECLARATION_RULE_NAME,
         SUPPOSITION_RULE_NAME,
         METATHEOREM_RULE_NAME,
         METAVARIABLE_RULE_NAME,
         SUB_DERIVATION_RULE_NAME,
         TYPE_ASSERTION_RULE_NAME,
         PROCEDURE_CALL_RULE_NAME,
         TYPE_DECLARATION_RULE_NAME,
         PROPERTY_RELATION_RULE_NAME,
         DEFINED_ASSERTION_RULE_NAME,
         SUBPROOF_ASSERTION_RULE_NAME,
         PROPERTY_ASSERTION_RULE_NAME,
         CONTAINED_ASSERTION_RULE_NAME,
         SATISFIES_ASSERTION_RULE_NAME,
         PARENTHESISED_LABEL_RULE_NAME,
         PARENTHESISED_LABELS_RULE_NAME,
         PROPERTY_DECLARATION_RULE_NAME,
         VARIABLE_DECLARATION_RULE_NAME,
         COMBINATOR_DECLARATION_RULE_NAME,
         CONSTRUCTOR_DECLARATION_RULE_NAME,
         COMPLEX_TYPE_DECLARATION_RULE_NAME,
         METAVARIABLE_DECLARATION_RULE_NAME } from "./ruleNames";

const nonTerminalNodeMap = {
  [RULE_RULE_NAME]: RuleNode,
  [STEP_RULE_NAME]: StepNode,
  [TERM_RULE_NAME]: TermNode,
  [TYPE_RULE_NAME]: TypeNode,
  [TYPES_RULE_NAME]: TypesNode,
  [ERROR_RULE_NAME]: ErrorNode,
  [FRAME_RULE_NAME]: FrameNode,
  [LEMMA_RULE_NAME]: LemmaNode,
  [AXIOM_RULE_NAME]: AxiomNode,
  [PROOF_RULE_NAME]: ProofNode,
  [LABEL_RULE_NAME]: LabelNode,
  [LABELS_RULE_NAME]: LabelsNode,
  [THEOREM_RULE_NAME]: TheoremNode,
  [PREMISE_RULE_NAME]: PremiseNode,
  [PROPERTY_RULE_NAME]: PropertyNode,
  [SUBPROOF_RULE_NAME]: SubproofNode,
  [EQUALITY_RULE_NAME]: EqualityNode,
  [VARIABLE_RULE_NAME]: VariableNode,
  [REFERENCE_RULE_NAME]: ReferenceNode,
  [JUDGEMENT_RULE_NAME]: JudgementNode,
  [META_TYPE_RULE_NAME]: MetaTypeNode,
  [DEDUCTION_RULE_NAME]: DeductionNode,
  [PARAMETER_RULE_NAME]: ParameterNode,
  [STATEMENT_RULE_NAME]: StatementNode,
  [COMBINATOR_RULE_NAME]: CombinatorNode,
  [CONCLUSION_RULE_NAME]: ConclusionNode,
  [CONJECTURE_RULE_NAME]: ConjectureNode,
  [DERIVATION_RULE_NAME]: DerivationNode,
  [META_LEMMA_RULE_NAME]: MetaLemmaNode,
  [SUPPOSITION_RULE_NAME]: SuppositionNode,
  [CONSTRUCTOR_RULE_NAME]: ConstructorNode,
  [DECLARATION_RULE_NAME]: DeclarationNode,
  [METATHEOREM_RULE_NAME]: MetatheoremNode,
  [METAVARIABLE_RULE_NAME]: MetavariableNode,
  [TYPE_ASSERTION_RULE_NAME]: TypeAssertionNode,
  [PROCEDURE_CALL_RULE_NAME]: ProcedureCallNode,
  [SUB_DERIVATION_RULE_NAME]: SubDerivationNode,
  [TYPE_DECLARATION_RULE_NAME]: typeDeclarationNode,
  [PROPERTY_RELATION_RULE_NAME]: PropertyRelationNode,
  [DEFINED_ASSERTION_RULE_NAME]: DefinedAssertionNode,
  [SUBPROOF_ASSERTION_RULE_NAME]: SubproofAssertionNode,
  [PROPERTY_ASSERTION_RULE_NAME]: PropertyAssertionNode,
  [SATISFIES_ASSERTION_RULE_NAME]: SatisfiesAssertionNode,
  [CONTAINED_ASSERTION_RULE_NAME]: ContainedAssertionNode,
  [PARENTHESISED_LABEL_RULE_NAME]: ParenthesisedLabelNode,
  [PARENTHESISED_LABELS_RULE_NAME]: ParenthesisedLabelsNode,
  [VARIABLE_DECLARATION_RULE_NAME]: variableDeclarationNode,
  [PROPERTY_DECLARATION_RULE_NAME]: PropertyDeclarationNode,
  [COMBINATOR_DECLARATION_RULE_NAME]: combinatorDeclarationNode,
  [CONSTRUCTOR_DECLARATION_RULE_NAME]: constructorDeclarationNode,
  [COMPLEX_TYPE_DECLARATION_RULE_NAME]: complexTypeDeclarationNode,
  [METAVARIABLE_DECLARATION_RULE_NAME]: metavariableDeclarationNode
};

export default nonTerminalNodeMap;
