"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: Object.getOwnPropertyDescriptor(all, name).get
    });
}
_export(exports, {
    get isNodeAxiomNode () {
        return isNodeAxiomNode;
    },
    get isNodeCombinatorDeclarationNode () {
        return isNodeCombinatorDeclarationNode;
    },
    get isNodeCombinatorNode () {
        return isNodeCombinatorNode;
    },
    get isNodeComplexTypeDeclarationNode () {
        return isNodeComplexTypeDeclarationNode;
    },
    get isNodeConclusionNode () {
        return isNodeConclusionNode;
    },
    get isNodeConjectureNode () {
        return isNodeConjectureNode;
    },
    get isNodeConstructorDeclarationNode () {
        return isNodeConstructorDeclarationNode;
    },
    get isNodeConstructorNode () {
        return isNodeConstructorNode;
    },
    get isNodeContainedAssertionNode () {
        return isNodeContainedAssertionNode;
    },
    get isNodeDeclarationNode () {
        return isNodeDeclarationNode;
    },
    get isNodeDeductionNode () {
        return isNodeDeductionNode;
    },
    get isNodeDefinedAssertionNode () {
        return isNodeDefinedAssertionNode;
    },
    get isNodeDerivationNode () {
        return isNodeDerivationNode;
    },
    get isNodeEqualityNode () {
        return isNodeEqualityNode;
    },
    get isNodeErrorNode () {
        return isNodeErrorNode;
    },
    get isNodeFrameNode () {
        return isNodeFrameNode;
    },
    get isNodeJudgementNode () {
        return isNodeJudgementNode;
    },
    get isNodeLabelNode () {
        return isNodeLabelNode;
    },
    get isNodeLemmaNode () {
        return isNodeLemmaNode;
    },
    get isNodeMetaLemmaNode () {
        return isNodeMetaLemmaNode;
    },
    get isNodeMetaTypeNode () {
        return isNodeMetaTypeNode;
    },
    get isNodeMetatheoremNode () {
        return isNodeMetatheoremNode;
    },
    get isNodeMetavariableDeclarationNode () {
        return isNodeMetavariableDeclarationNode;
    },
    get isNodeMetavariableNode () {
        return isNodeMetavariableNode;
    },
    get isNodeParameterNode () {
        return isNodeParameterNode;
    },
    get isNodeParenthesisedLabelsNode () {
        return isNodeParenthesisedLabelsNode;
    },
    get isNodePremiseNode () {
        return isNodePremiseNode;
    },
    get isNodeProcedureCallNode () {
        return isNodeProcedureCallNode;
    },
    get isNodeProofNode () {
        return isNodeProofNode;
    },
    get isNodePropertyAssertionNode () {
        return isNodePropertyAssertionNode;
    },
    get isNodePropertyDeclarationNode () {
        return isNodePropertyDeclarationNode;
    },
    get isNodePropertyNode () {
        return isNodePropertyNode;
    },
    get isNodePropertyRelationNode () {
        return isNodePropertyRelationNode;
    },
    get isNodeReferenceNode () {
        return isNodeReferenceNode;
    },
    get isNodeRuleNode () {
        return isNodeRuleNode;
    },
    get isNodeSatisfiesAssertionNode () {
        return isNodeSatisfiesAssertionNode;
    },
    get isNodeStatementNode () {
        return isNodeStatementNode;
    },
    get isNodeStepNode () {
        return isNodeStepNode;
    },
    get isNodeSubDerivationNode () {
        return isNodeSubDerivationNode;
    },
    get isNodeSubproofAssertionNode () {
        return isNodeSubproofAssertionNode;
    },
    get isNodeSubproofNode () {
        return isNodeSubproofNode;
    },
    get isNodeSuppositionNode () {
        return isNodeSuppositionNode;
    },
    get isNodeTermNode () {
        return isNodeTermNode;
    },
    get isNodeTheoremNode () {
        return isNodeTheoremNode;
    },
    get isNodeTypeAssertionNode () {
        return isNodeTypeAssertionNode;
    },
    get isNodeTypeDeclarationNode () {
        return isNodeTypeDeclarationNode;
    },
    get isNodeTypeNode () {
        return isNodeTypeNode;
    },
    get isNodeVariableDeclarationNode () {
        return isNodeVariableDeclarationNode;
    },
    get isNodeVariableNode () {
        return isNodeVariableNode;
    },
    get statementFromStatementNode () {
        return statementFromStatementNode;
    },
    get termFromTermNode () {
        return termFromTermNode;
    },
    get typeFromTypeNode () {
        return typeFromTypeNode;
    }
});
var _dom = /*#__PURE__*/ _interop_require_default(require("../dom"));
var _type = require("../dom/type");
var _ruleNames = require("../ruleNames");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function isNodeRuleNode(node) {
    return isNodeRuleNodeByRuleName(node, _ruleNames.RULE_RULE_NAME);
}
function isNodeStepNode(node) {
    return isNodeRuleNodeByRuleName(node, _ruleNames.STEP_RULE_NAME);
}
function isNodeTermNode(node) {
    return isNodeRuleNodeByRuleName(node, _ruleNames.TERM_RULE_NAME);
}
function isNodeTypeNode(node) {
    return isNodeRuleNodeByRuleName(node, _ruleNames.TYPE_RULE_NAME);
}
function isNodeLabelNode(node) {
    return isNodeRuleNodeByRuleName(node, _ruleNames.LABEL_RULE_NAME);
}
function isNodeLemmaNode(node) {
    return isNodeRuleNodeByRuleName(node, _ruleNames.LEMMA_RULE_NAME);
}
function isNodeAxiomNode(node) {
    return isNodeRuleNodeByRuleName(node, _ruleNames.AXIOM_RULE_NAME);
}
function isNodeErrorNode(node) {
    return isNodeRuleNodeByRuleName(node, _ruleNames.ERROR_RULE_NAME);
}
function isNodeFrameNode(node) {
    return isNodeRuleNodeByRuleName(node, _ruleNames.FRAME_RULE_NAME);
}
function isNodeProofNode(node) {
    return isNodeRuleNodeByRuleName(node, _ruleNames.PROOF_RULE_NAME);
}
function isNodeTheoremNode(node) {
    return isNodeRuleNodeByRuleName(node, _ruleNames.THEOREM_RULE_NAME);
}
function isNodePremiseNode(node) {
    return isNodeRuleNodeByRuleName(node, _ruleNames.PREMISE_RULE_NAME);
}
function isNodePropertyNode(node) {
    return isNodeRuleNodeByRuleName(node, _ruleNames.PROPERTY_RULE_NAME);
}
function isNodeEqualityNode(node) {
    return isNodeRuleNodeByRuleName(node, _ruleNames.EQUALITY_RULE_NAME);
}
function isNodeVariableNode(node) {
    return isNodeRuleNodeByRuleName(node, _ruleNames.VARIABLE_RULE_NAME);
}
function isNodeSubproofNode(node) {
    return isNodeRuleNodeByRuleName(node, _ruleNames.SUBPROOF_RULE_NAME);
}
function isNodeMetaTypeNode(node) {
    return isNodeRuleNodeByRuleName(node, _ruleNames.META_TYPE_RULE_NAME);
}
function isNodeParameterNode(node) {
    return isNodeRuleNodeByRuleName(node, _ruleNames.PARAMETER_RULE_NAME);
}
function isNodeDeductionNode(node) {
    return isNodeRuleNodeByRuleName(node, _ruleNames.DEDUCTION_RULE_NAME);
}
function isNodeJudgementNode(node) {
    return isNodeRuleNodeByRuleName(node, _ruleNames.JUDGEMENT_RULE_NAME);
}
function isNodeReferenceNode(node) {
    return isNodeRuleNodeByRuleName(node, _ruleNames.REFERENCE_RULE_NAME);
}
function isNodeStatementNode(node) {
    return isNodeRuleNodeByRuleName(node, _ruleNames.STATEMENT_RULE_NAME);
}
function isNodeMetaLemmaNode(node) {
    return isNodeRuleNodeByRuleName(node, _ruleNames.META_LEMMA_RULE_NAME);
}
function isNodeCombinatorNode(node) {
    return isNodeRuleNodeByRuleName(node, _ruleNames.COMBINATOR_RULE_NAME);
}
function isNodeConclusionNode(node) {
    return isNodeRuleNodeByRuleName(node, _ruleNames.CONCLUSION_RULE_NAME);
}
function isNodeConjectureNode(node) {
    return isNodeRuleNodeByRuleName(node, _ruleNames.CONJECTURE_RULE_NAME);
}
function isNodeDerivationNode(node) {
    return isNodeRuleNodeByRuleName(node, _ruleNames.DERIVATION_RULE_NAME);
}
function isNodeSuppositionNode(node) {
    return isNodeRuleNodeByRuleName(node, _ruleNames.SUPPOSITION_RULE_NAME);
}
function isNodeConstructorNode(node) {
    return isNodeRuleNodeByRuleName(node, _ruleNames.CONSTRUCTOR_RULE_NAME);
}
function isNodeDeclarationNode(node) {
    return isNodeRuleNodeByRuleName(node, _ruleNames.DECLARATION_RULE_NAME);
}
function isNodeMetatheoremNode(node) {
    return isNodeRuleNodeByRuleName(node, _ruleNames.METATHEOREM_RULE_NAME);
}
function isNodeMetavariableNode(node) {
    return isNodeRuleNodeByRuleName(node, _ruleNames.METAVARIABLE_RULE_NAME);
}
function isNodeProcedureCallNode(node) {
    return isNodeRuleNodeByRuleName(node, _ruleNames.PROCEDURE_CALL_RULE_NAME);
}
function isNodeSubDerivationNode(node) {
    return isNodeRuleNodeByRuleName(node, _ruleNames.SUB_DERIVATION_RULE_NAME);
}
function isNodeTypeAssertionNode(node) {
    return isNodeRuleNodeByRuleName(node, _ruleNames.TYPE_ASSERTION_RULE_NAME);
}
function isNodeTypeDeclarationNode(node) {
    return isNodeRuleNodeByRuleName(node, _ruleNames.TYPE_DECLARATION_RULE_NAME);
}
function isNodePropertyRelationNode(node) {
    return isNodeRuleNodeByRuleName(node, _ruleNames.PROPERTY_RELATION_RULE_NAME);
}
function isNodeDefinedAssertionNode(node) {
    return isNodeRuleNodeByRuleName(node, _ruleNames.DEFINED_ASSERTION_RULE_NAME);
}
function isNodePropertyAssertionNode(node) {
    return isNodeRuleNodeByRuleName(node, _ruleNames.PROPERTY_ASSERTION_RULE_NAME);
}
function isNodeSubproofAssertionNode(node) {
    return isNodeRuleNodeByRuleName(node, _ruleNames.SUBPROOF_ASSERTION_RULE_NAME);
}
function isNodeContainedAssertionNode(node) {
    return isNodeRuleNodeByRuleName(node, _ruleNames.CONTAINED_ASSERTION_RULE_NAME);
}
function isNodeSatisfiesAssertionNode(node) {
    return isNodeRuleNodeByRuleName(node, _ruleNames.SATISFIES_ASSERTION_RULE_NAME);
}
function isNodePropertyDeclarationNode(node) {
    return isNodeRuleNodeByRuleName(node, _ruleNames.PROPERTY_DECLARATION_RULE_NAME);
}
function isNodeVariableDeclarationNode(node) {
    return isNodeRuleNodeByRuleName(node, _ruleNames.VARIABLE_DECLARATION_RULE_NAME);
}
function isNodeParenthesisedLabelsNode(node) {
    return isNodeRuleNodeByRuleName(node, _ruleNames.PARENTHESISED_LABELS_RULE_NAME);
}
function isNodeCombinatorDeclarationNode(node) {
    return isNodeRuleNodeByRuleName(node, _ruleNames.COMBINATOR_DECLARATION_RULE_NAME);
}
function isNodeConstructorDeclarationNode(node) {
    return isNodeRuleNodeByRuleName(node, _ruleNames.CONSTRUCTOR_DECLARATION_RULE_NAME);
}
function isNodeComplexTypeDeclarationNode(node) {
    return isNodeRuleNodeByRuleName(node, _ruleNames.COMPLEX_TYPE_DECLARATION_RULE_NAME);
}
function isNodeMetavariableDeclarationNode(node) {
    return isNodeRuleNodeByRuleName(node, _ruleNames.METAVARIABLE_DECLARATION_RULE_NAME);
}
function typeFromTypeNode(typeNode) {
    var type;
    if (typeNode === null) {
        type = _type.objectType;
    } else {
        var Type = _dom.default.Type, typeName = typeNode.getTypeName(), name = typeName, string = name, superTypes = null, properties = null, provisional = null;
        type = new Type(string, name, superTypes, properties, provisional);
    }
    return type;
}
function termFromTermNode(termNode, context) {
    var Term = _dom.default.Term, node = termNode, string = context.nodeAsString(node), type = null, term = new Term(string, node, type);
    return term;
}
function statementFromStatementNode(statementNode, context) {
    var Statement = _dom.default.Statement, node = statementNode, tokens = context.nodeAsTokens(node), string = context.tokensAsString(tokens), statement = new Statement(string, node, tokens);
    return statement;
}
function isNodeRuleNodeByRuleName(node, ruleName) {
    var nodeRuleNode = false;
    var nodeNonTerminalNode = node.isNonTerminalNode();
    if (nodeNonTerminalNode) {
        var nonTerminalNode = node, nonTerminalNodeRuleName = nonTerminalNode.getRuleName(), nonTerminalNodeRuleNameRuleName = nonTerminalNodeRuleName === ruleName;
        if (nonTerminalNodeRuleNameRuleName) {
            nodeRuleNode = true;
        }
    }
    return nodeRuleNode;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvbm9kZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IGRvbSBmcm9tIFwiLi4vZG9tXCI7XG5cbmltcG9ydCB7IG9iamVjdFR5cGUgfSBmcm9tIFwiLi4vZG9tL3R5cGVcIjtcbmltcG9ydCB7IFJVTEVfUlVMRV9OQU1FLFxuICAgICAgICAgU1RFUF9SVUxFX05BTUUsXG4gICAgICAgICBURVJNX1JVTEVfTkFNRSxcbiAgICAgICAgIFRZUEVfUlVMRV9OQU1FLFxuICAgICAgICAgTEFCRUxfUlVMRV9OQU1FLFxuICAgICAgICAgTEVNTUFfUlVMRV9OQU1FLFxuICAgICAgICAgQVhJT01fUlVMRV9OQU1FLFxuICAgICAgICAgRVJST1JfUlVMRV9OQU1FLFxuICAgICAgICAgRlJBTUVfUlVMRV9OQU1FLFxuICAgICAgICAgUFJPT0ZfUlVMRV9OQU1FLFxuICAgICAgICAgVEhFT1JFTV9SVUxFX05BTUUsXG4gICAgICAgICBQUkVNSVNFX1JVTEVfTkFNRSxcbiAgICAgICAgIFBST1BFUlRZX1JVTEVfTkFNRSxcbiAgICAgICAgIEVRVUFMSVRZX1JVTEVfTkFNRSxcbiAgICAgICAgIFZBUklBQkxFX1JVTEVfTkFNRSxcbiAgICAgICAgIFNVQlBST09GX1JVTEVfTkFNRSxcbiAgICAgICAgIE1FVEFfVFlQRV9SVUxFX05BTUUsXG4gICAgICAgICBQQVJBTUVURVJfUlVMRV9OQU1FLFxuICAgICAgICAgREVEVUNUSU9OX1JVTEVfTkFNRSxcbiAgICAgICAgIEpVREdFTUVOVF9SVUxFX05BTUUsXG4gICAgICAgICBSRUZFUkVOQ0VfUlVMRV9OQU1FLFxuICAgICAgICAgU1RBVEVNRU5UX1JVTEVfTkFNRSxcbiAgICAgICAgIE1FVEFfTEVNTUFfUlVMRV9OQU1FLFxuICAgICAgICAgQ09NQklOQVRPUl9SVUxFX05BTUUsXG4gICAgICAgICBDT05DTFVTSU9OX1JVTEVfTkFNRSxcbiAgICAgICAgIENPTkpFQ1RVUkVfUlVMRV9OQU1FLFxuICAgICAgICAgREVSSVZBVElPTl9SVUxFX05BTUUsXG4gICAgICAgICBTVVBQT1NJVElPTl9SVUxFX05BTUUsXG4gICAgICAgICBDT05TVFJVQ1RPUl9SVUxFX05BTUUsXG4gICAgICAgICBERUNMQVJBVElPTl9SVUxFX05BTUUsXG4gICAgICAgICBNRVRBVEhFT1JFTV9SVUxFX05BTUUsXG4gICAgICAgICBNRVRBVkFSSUFCTEVfUlVMRV9OQU1FLFxuICAgICAgICAgUFJPQ0VEVVJFX0NBTExfUlVMRV9OQU1FLFxuICAgICAgICAgU1VCX0RFUklWQVRJT05fUlVMRV9OQU1FLFxuICAgICAgICAgVFlQRV9BU1NFUlRJT05fUlVMRV9OQU1FLFxuICAgICAgICAgVFlQRV9ERUNMQVJBVElPTl9SVUxFX05BTUUsXG4gICAgICAgICBQUk9QRVJUWV9SRUxBVElPTl9SVUxFX05BTUUsXG4gICAgICAgICBERUZJTkVEX0FTU0VSVElPTl9SVUxFX05BTUUsXG4gICAgICAgICBQUk9QRVJUWV9BU1NFUlRJT05fUlVMRV9OQU1FLFxuICAgICAgICAgU1VCUFJPT0ZfQVNTRVJUSU9OX1JVTEVfTkFNRSxcbiAgICAgICAgIENPTlRBSU5FRF9BU1NFUlRJT05fUlVMRV9OQU1FLFxuICAgICAgICAgU0FUSVNGSUVTX0FTU0VSVElPTl9SVUxFX05BTUUsXG4gICAgICAgICBQUk9QRVJUWV9ERUNMQVJBVElPTl9SVUxFX05BTUUsXG4gICAgICAgICBWQVJJQUJMRV9ERUNMQVJBVElPTl9SVUxFX05BTUUsXG4gICAgICAgICBQQVJFTlRIRVNJU0VEX0xBQkVMU19SVUxFX05BTUUsXG4gICAgICAgICBDT01CSU5BVE9SX0RFQ0xBUkFUSU9OX1JVTEVfTkFNRSxcbiAgICAgICAgIENPTlNUUlVDVE9SX0RFQ0xBUkFUSU9OX1JVTEVfTkFNRSxcbiAgICAgICAgIENPTVBMRVhfVFlQRV9ERUNMQVJBVElPTl9SVUxFX05BTUUsXG4gICAgICAgICBNRVRBVkFSSUFCTEVfREVDTEFSQVRJT05fUlVMRV9OQU1FIH0gZnJvbSBcIi4uL3J1bGVOYW1lc1wiO1xuXG5leHBvcnQgZnVuY3Rpb24gaXNOb2RlUnVsZU5vZGUobm9kZSkgeyByZXR1cm4gaXNOb2RlUnVsZU5vZGVCeVJ1bGVOYW1lKG5vZGUsIFJVTEVfUlVMRV9OQU1FKTsgfVxuXG5leHBvcnQgZnVuY3Rpb24gaXNOb2RlU3RlcE5vZGUobm9kZSkgeyByZXR1cm4gaXNOb2RlUnVsZU5vZGVCeVJ1bGVOYW1lKG5vZGUsIFNURVBfUlVMRV9OQU1FKTsgfVxuXG5leHBvcnQgZnVuY3Rpb24gaXNOb2RlVGVybU5vZGUobm9kZSkgeyByZXR1cm4gaXNOb2RlUnVsZU5vZGVCeVJ1bGVOYW1lKG5vZGUsIFRFUk1fUlVMRV9OQU1FKTsgfVxuXG5leHBvcnQgZnVuY3Rpb24gaXNOb2RlVHlwZU5vZGUobm9kZSkgeyByZXR1cm4gaXNOb2RlUnVsZU5vZGVCeVJ1bGVOYW1lKG5vZGUsIFRZUEVfUlVMRV9OQU1FKTsgfVxuXG5leHBvcnQgZnVuY3Rpb24gaXNOb2RlTGFiZWxOb2RlKG5vZGUpIHsgcmV0dXJuIGlzTm9kZVJ1bGVOb2RlQnlSdWxlTmFtZShub2RlLCBMQUJFTF9SVUxFX05BTUUpOyB9XG5cbmV4cG9ydCBmdW5jdGlvbiBpc05vZGVMZW1tYU5vZGUobm9kZSkgeyByZXR1cm4gaXNOb2RlUnVsZU5vZGVCeVJ1bGVOYW1lKG5vZGUsIExFTU1BX1JVTEVfTkFNRSk7IH1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzTm9kZUF4aW9tTm9kZShub2RlKSB7IHJldHVybiBpc05vZGVSdWxlTm9kZUJ5UnVsZU5hbWUobm9kZSwgQVhJT01fUlVMRV9OQU1FKTsgfVxuXG5leHBvcnQgZnVuY3Rpb24gaXNOb2RlRXJyb3JOb2RlKG5vZGUpIHsgcmV0dXJuIGlzTm9kZVJ1bGVOb2RlQnlSdWxlTmFtZShub2RlLCBFUlJPUl9SVUxFX05BTUUpOyB9XG5cbmV4cG9ydCBmdW5jdGlvbiBpc05vZGVGcmFtZU5vZGUobm9kZSkgeyByZXR1cm4gaXNOb2RlUnVsZU5vZGVCeVJ1bGVOYW1lKG5vZGUsIEZSQU1FX1JVTEVfTkFNRSk7IH1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzTm9kZVByb29mTm9kZShub2RlKSB7IHJldHVybiBpc05vZGVSdWxlTm9kZUJ5UnVsZU5hbWUobm9kZSwgUFJPT0ZfUlVMRV9OQU1FKTsgfVxuXG5leHBvcnQgZnVuY3Rpb24gaXNOb2RlVGhlb3JlbU5vZGUobm9kZSkgeyByZXR1cm4gaXNOb2RlUnVsZU5vZGVCeVJ1bGVOYW1lKG5vZGUsIFRIRU9SRU1fUlVMRV9OQU1FKTsgfVxuXG5leHBvcnQgZnVuY3Rpb24gaXNOb2RlUHJlbWlzZU5vZGUobm9kZSkgeyByZXR1cm4gaXNOb2RlUnVsZU5vZGVCeVJ1bGVOYW1lKG5vZGUsIFBSRU1JU0VfUlVMRV9OQU1FKTsgfVxuXG5leHBvcnQgZnVuY3Rpb24gaXNOb2RlUHJvcGVydHlOb2RlKG5vZGUpIHsgcmV0dXJuIGlzTm9kZVJ1bGVOb2RlQnlSdWxlTmFtZShub2RlLCBQUk9QRVJUWV9SVUxFX05BTUUpOyB9XG5cbmV4cG9ydCBmdW5jdGlvbiBpc05vZGVFcXVhbGl0eU5vZGUobm9kZSkgeyByZXR1cm4gaXNOb2RlUnVsZU5vZGVCeVJ1bGVOYW1lKG5vZGUsIEVRVUFMSVRZX1JVTEVfTkFNRSk7IH1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzTm9kZVZhcmlhYmxlTm9kZShub2RlKSB7IHJldHVybiBpc05vZGVSdWxlTm9kZUJ5UnVsZU5hbWUobm9kZSwgVkFSSUFCTEVfUlVMRV9OQU1FKTsgfVxuXG5leHBvcnQgZnVuY3Rpb24gaXNOb2RlU3VicHJvb2ZOb2RlKG5vZGUpIHsgcmV0dXJuIGlzTm9kZVJ1bGVOb2RlQnlSdWxlTmFtZShub2RlLCBTVUJQUk9PRl9SVUxFX05BTUUpOyB9XG5cbmV4cG9ydCBmdW5jdGlvbiBpc05vZGVNZXRhVHlwZU5vZGUobm9kZSkgeyByZXR1cm4gaXNOb2RlUnVsZU5vZGVCeVJ1bGVOYW1lKG5vZGUsIE1FVEFfVFlQRV9SVUxFX05BTUUpOyB9XG5cbmV4cG9ydCBmdW5jdGlvbiBpc05vZGVQYXJhbWV0ZXJOb2RlKG5vZGUpIHsgcmV0dXJuIGlzTm9kZVJ1bGVOb2RlQnlSdWxlTmFtZShub2RlLCBQQVJBTUVURVJfUlVMRV9OQU1FKTsgfVxuXG5leHBvcnQgZnVuY3Rpb24gaXNOb2RlRGVkdWN0aW9uTm9kZShub2RlKSB7IHJldHVybiBpc05vZGVSdWxlTm9kZUJ5UnVsZU5hbWUobm9kZSwgREVEVUNUSU9OX1JVTEVfTkFNRSk7IH1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzTm9kZUp1ZGdlbWVudE5vZGUobm9kZSkgeyByZXR1cm4gaXNOb2RlUnVsZU5vZGVCeVJ1bGVOYW1lKG5vZGUsIEpVREdFTUVOVF9SVUxFX05BTUUpOyB9XG5cbmV4cG9ydCBmdW5jdGlvbiBpc05vZGVSZWZlcmVuY2VOb2RlKG5vZGUpIHsgcmV0dXJuIGlzTm9kZVJ1bGVOb2RlQnlSdWxlTmFtZShub2RlLCBSRUZFUkVOQ0VfUlVMRV9OQU1FKTsgfVxuXG5leHBvcnQgZnVuY3Rpb24gaXNOb2RlU3RhdGVtZW50Tm9kZShub2RlKSB7IHJldHVybiBpc05vZGVSdWxlTm9kZUJ5UnVsZU5hbWUobm9kZSwgU1RBVEVNRU5UX1JVTEVfTkFNRSk7IH1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzTm9kZU1ldGFMZW1tYU5vZGUobm9kZSkgeyByZXR1cm4gaXNOb2RlUnVsZU5vZGVCeVJ1bGVOYW1lKG5vZGUsIE1FVEFfTEVNTUFfUlVMRV9OQU1FKTsgfVxuXG5leHBvcnQgZnVuY3Rpb24gaXNOb2RlQ29tYmluYXRvck5vZGUobm9kZSkgeyByZXR1cm4gaXNOb2RlUnVsZU5vZGVCeVJ1bGVOYW1lKG5vZGUsIENPTUJJTkFUT1JfUlVMRV9OQU1FKTsgfVxuXG5leHBvcnQgZnVuY3Rpb24gaXNOb2RlQ29uY2x1c2lvbk5vZGUobm9kZSkgeyByZXR1cm4gaXNOb2RlUnVsZU5vZGVCeVJ1bGVOYW1lKG5vZGUsIENPTkNMVVNJT05fUlVMRV9OQU1FKTsgfVxuXG5leHBvcnQgZnVuY3Rpb24gaXNOb2RlQ29uamVjdHVyZU5vZGUobm9kZSkgeyByZXR1cm4gaXNOb2RlUnVsZU5vZGVCeVJ1bGVOYW1lKG5vZGUsIENPTkpFQ1RVUkVfUlVMRV9OQU1FKTsgfVxuXG5leHBvcnQgZnVuY3Rpb24gaXNOb2RlRGVyaXZhdGlvbk5vZGUobm9kZSkgeyByZXR1cm4gaXNOb2RlUnVsZU5vZGVCeVJ1bGVOYW1lKG5vZGUsIERFUklWQVRJT05fUlVMRV9OQU1FKTsgfVxuXG5leHBvcnQgZnVuY3Rpb24gaXNOb2RlU3VwcG9zaXRpb25Ob2RlKG5vZGUpIHsgcmV0dXJuIGlzTm9kZVJ1bGVOb2RlQnlSdWxlTmFtZShub2RlLCBTVVBQT1NJVElPTl9SVUxFX05BTUUpOyB9XG5cbmV4cG9ydCBmdW5jdGlvbiBpc05vZGVDb25zdHJ1Y3Rvck5vZGUobm9kZSkgeyByZXR1cm4gaXNOb2RlUnVsZU5vZGVCeVJ1bGVOYW1lKG5vZGUsIENPTlNUUlVDVE9SX1JVTEVfTkFNRSk7IH1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzTm9kZURlY2xhcmF0aW9uTm9kZShub2RlKSB7IHJldHVybiBpc05vZGVSdWxlTm9kZUJ5UnVsZU5hbWUobm9kZSwgREVDTEFSQVRJT05fUlVMRV9OQU1FKTsgfVxuXG5leHBvcnQgZnVuY3Rpb24gaXNOb2RlTWV0YXRoZW9yZW1Ob2RlKG5vZGUpIHsgcmV0dXJuIGlzTm9kZVJ1bGVOb2RlQnlSdWxlTmFtZShub2RlLCBNRVRBVEhFT1JFTV9SVUxFX05BTUUpOyB9XG5cbmV4cG9ydCBmdW5jdGlvbiBpc05vZGVNZXRhdmFyaWFibGVOb2RlKG5vZGUpIHsgcmV0dXJuIGlzTm9kZVJ1bGVOb2RlQnlSdWxlTmFtZShub2RlLCBNRVRBVkFSSUFCTEVfUlVMRV9OQU1FKTsgfVxuXG5leHBvcnQgZnVuY3Rpb24gaXNOb2RlUHJvY2VkdXJlQ2FsbE5vZGUobm9kZSkgeyByZXR1cm4gaXNOb2RlUnVsZU5vZGVCeVJ1bGVOYW1lKG5vZGUsIFBST0NFRFVSRV9DQUxMX1JVTEVfTkFNRSk7IH1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzTm9kZVN1YkRlcml2YXRpb25Ob2RlKG5vZGUpIHsgcmV0dXJuIGlzTm9kZVJ1bGVOb2RlQnlSdWxlTmFtZShub2RlLCBTVUJfREVSSVZBVElPTl9SVUxFX05BTUUpOyB9XG5cbmV4cG9ydCBmdW5jdGlvbiBpc05vZGVUeXBlQXNzZXJ0aW9uTm9kZShub2RlKSB7IHJldHVybiBpc05vZGVSdWxlTm9kZUJ5UnVsZU5hbWUobm9kZSwgVFlQRV9BU1NFUlRJT05fUlVMRV9OQU1FKTsgfVxuXG5leHBvcnQgZnVuY3Rpb24gaXNOb2RlVHlwZURlY2xhcmF0aW9uTm9kZShub2RlKSB7IHJldHVybiBpc05vZGVSdWxlTm9kZUJ5UnVsZU5hbWUobm9kZSwgVFlQRV9ERUNMQVJBVElPTl9SVUxFX05BTUUpOyB9XG5cbmV4cG9ydCBmdW5jdGlvbiBpc05vZGVQcm9wZXJ0eVJlbGF0aW9uTm9kZShub2RlKSB7IHJldHVybiBpc05vZGVSdWxlTm9kZUJ5UnVsZU5hbWUobm9kZSwgUFJPUEVSVFlfUkVMQVRJT05fUlVMRV9OQU1FKTsgfVxuXG5leHBvcnQgZnVuY3Rpb24gaXNOb2RlRGVmaW5lZEFzc2VydGlvbk5vZGUobm9kZSkgeyByZXR1cm4gaXNOb2RlUnVsZU5vZGVCeVJ1bGVOYW1lKG5vZGUsIERFRklORURfQVNTRVJUSU9OX1JVTEVfTkFNRSk7IH1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzTm9kZVByb3BlcnR5QXNzZXJ0aW9uTm9kZShub2RlKSB7IHJldHVybiBpc05vZGVSdWxlTm9kZUJ5UnVsZU5hbWUobm9kZSwgUFJPUEVSVFlfQVNTRVJUSU9OX1JVTEVfTkFNRSk7IH1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzTm9kZVN1YnByb29mQXNzZXJ0aW9uTm9kZShub2RlKSB7IHJldHVybiBpc05vZGVSdWxlTm9kZUJ5UnVsZU5hbWUobm9kZSwgU1VCUFJPT0ZfQVNTRVJUSU9OX1JVTEVfTkFNRSk7IH1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzTm9kZUNvbnRhaW5lZEFzc2VydGlvbk5vZGUobm9kZSkgeyByZXR1cm4gaXNOb2RlUnVsZU5vZGVCeVJ1bGVOYW1lKG5vZGUsIENPTlRBSU5FRF9BU1NFUlRJT05fUlVMRV9OQU1FKTsgfVxuXG5leHBvcnQgZnVuY3Rpb24gaXNOb2RlU2F0aXNmaWVzQXNzZXJ0aW9uTm9kZShub2RlKSB7IHJldHVybiBpc05vZGVSdWxlTm9kZUJ5UnVsZU5hbWUobm9kZSwgU0FUSVNGSUVTX0FTU0VSVElPTl9SVUxFX05BTUUpOyB9XG5cbmV4cG9ydCBmdW5jdGlvbiBpc05vZGVQcm9wZXJ0eURlY2xhcmF0aW9uTm9kZShub2RlKSB7IHJldHVybiBpc05vZGVSdWxlTm9kZUJ5UnVsZU5hbWUobm9kZSwgUFJPUEVSVFlfREVDTEFSQVRJT05fUlVMRV9OQU1FKTsgfVxuXG5leHBvcnQgZnVuY3Rpb24gaXNOb2RlVmFyaWFibGVEZWNsYXJhdGlvbk5vZGUobm9kZSkgeyByZXR1cm4gaXNOb2RlUnVsZU5vZGVCeVJ1bGVOYW1lKG5vZGUsIFZBUklBQkxFX0RFQ0xBUkFUSU9OX1JVTEVfTkFNRSk7IH1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzTm9kZVBhcmVudGhlc2lzZWRMYWJlbHNOb2RlKG5vZGUpIHsgcmV0dXJuIGlzTm9kZVJ1bGVOb2RlQnlSdWxlTmFtZShub2RlLCBQQVJFTlRIRVNJU0VEX0xBQkVMU19SVUxFX05BTUUpOyB9XG5cbmV4cG9ydCBmdW5jdGlvbiBpc05vZGVDb21iaW5hdG9yRGVjbGFyYXRpb25Ob2RlKG5vZGUpIHsgcmV0dXJuIGlzTm9kZVJ1bGVOb2RlQnlSdWxlTmFtZShub2RlLCBDT01CSU5BVE9SX0RFQ0xBUkFUSU9OX1JVTEVfTkFNRSk7IH1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzTm9kZUNvbnN0cnVjdG9yRGVjbGFyYXRpb25Ob2RlKG5vZGUpIHsgcmV0dXJuIGlzTm9kZVJ1bGVOb2RlQnlSdWxlTmFtZShub2RlLCBDT05TVFJVQ1RPUl9ERUNMQVJBVElPTl9SVUxFX05BTUUpOyB9XG5cbmV4cG9ydCBmdW5jdGlvbiBpc05vZGVDb21wbGV4VHlwZURlY2xhcmF0aW9uTm9kZShub2RlKSB7IHJldHVybiBpc05vZGVSdWxlTm9kZUJ5UnVsZU5hbWUobm9kZSwgQ09NUExFWF9UWVBFX0RFQ0xBUkFUSU9OX1JVTEVfTkFNRSk7IH1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzTm9kZU1ldGF2YXJpYWJsZURlY2xhcmF0aW9uTm9kZShub2RlKSB7IHJldHVybiBpc05vZGVSdWxlTm9kZUJ5UnVsZU5hbWUobm9kZSwgTUVUQVZBUklBQkxFX0RFQ0xBUkFUSU9OX1JVTEVfTkFNRSk7IH1cblxuZXhwb3J0IGZ1bmN0aW9uIHR5cGVGcm9tVHlwZU5vZGUodHlwZU5vZGUpIHtcbiAgbGV0IHR5cGU7XG5cbiAgaWYgKHR5cGVOb2RlID09PSBudWxsKSB7XG4gICAgdHlwZSA9IG9iamVjdFR5cGU7XG4gIH0gZWxzZSB7XG4gICAgY29uc3QgeyBUeXBlIH0gPSBkb20sXG4gICAgICAgICAgdHlwZU5hbWUgPSB0eXBlTm9kZS5nZXRUeXBlTmFtZSgpLFxuICAgICAgICAgIG5hbWUgPSB0eXBlTmFtZSwgIC8vL1xuICAgICAgICAgIHN0cmluZyA9IG5hbWUsICAvLy9cbiAgICAgICAgICBzdXBlclR5cGVzID0gbnVsbCxcbiAgICAgICAgICBwcm9wZXJ0aWVzID0gbnVsbCxcbiAgICAgICAgICBwcm92aXNpb25hbCA9IG51bGw7XG5cbiAgICB0eXBlID0gbmV3IFR5cGUoc3RyaW5nLCBuYW1lLCBzdXBlclR5cGVzLCBwcm9wZXJ0aWVzLCBwcm92aXNpb25hbCk7XG4gIH1cblxuICByZXR1cm4gdHlwZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRlcm1Gcm9tVGVybU5vZGUodGVybU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBUZXJtIH0gPSBkb20sXG4gICAgICAgIG5vZGUgPSB0ZXJtTm9kZSwgIC8vL1xuICAgICAgICBzdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKSxcbiAgICAgICAgdHlwZSA9IG51bGwsXG4gICAgICAgIHRlcm0gPSBuZXcgVGVybShzdHJpbmcsIG5vZGUsIHR5cGUpO1xuXG4gIHJldHVybiB0ZXJtO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3RhdGVtZW50RnJvbVN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IFN0YXRlbWVudCB9ID0gZG9tLFxuICAgICAgICBub2RlID0gc3RhdGVtZW50Tm9kZSwgLy8vXG4gICAgICAgIHRva2VucyA9IGNvbnRleHQubm9kZUFzVG9rZW5zKG5vZGUpLFxuICAgICAgICBzdHJpbmcgPSBjb250ZXh0LnRva2Vuc0FzU3RyaW5nKHRva2VucyksXG4gICAgICAgIHN0YXRlbWVudCA9IG5ldyBTdGF0ZW1lbnQoc3RyaW5nLCBub2RlLCB0b2tlbnMpO1xuXG4gIHJldHVybiBzdGF0ZW1lbnQ7XG59XG5cbmZ1bmN0aW9uIGlzTm9kZVJ1bGVOb2RlQnlSdWxlTmFtZShub2RlLCBydWxlTmFtZSkge1xuICBsZXQgbm9kZVJ1bGVOb2RlID0gZmFsc2U7XG5cbiAgY29uc3Qgbm9kZU5vblRlcm1pbmFsTm9kZSA9IG5vZGUuaXNOb25UZXJtaW5hbE5vZGUoKTtcblxuICBpZiAobm9kZU5vblRlcm1pbmFsTm9kZSkge1xuICAgIGNvbnN0IG5vblRlcm1pbmFsTm9kZSA9IG5vZGUsIC8vL1xuICAgICAgICAgIG5vblRlcm1pbmFsTm9kZVJ1bGVOYW1lID0gbm9uVGVybWluYWxOb2RlLmdldFJ1bGVOYW1lKCksXG4gICAgICAgICAgbm9uVGVybWluYWxOb2RlUnVsZU5hbWVSdWxlTmFtZSA9IChub25UZXJtaW5hbE5vZGVSdWxlTmFtZSA9PT0gcnVsZU5hbWUpO1xuXG4gICAgaWYgKG5vblRlcm1pbmFsTm9kZVJ1bGVOYW1lUnVsZU5hbWUpIHtcbiAgICAgIG5vZGVSdWxlTm9kZSA9IHRydWU7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG5vZGVSdWxlTm9kZTtcbn1cbiJdLCJuYW1lcyI6WyJpc05vZGVBeGlvbU5vZGUiLCJpc05vZGVDb21iaW5hdG9yRGVjbGFyYXRpb25Ob2RlIiwiaXNOb2RlQ29tYmluYXRvck5vZGUiLCJpc05vZGVDb21wbGV4VHlwZURlY2xhcmF0aW9uTm9kZSIsImlzTm9kZUNvbmNsdXNpb25Ob2RlIiwiaXNOb2RlQ29uamVjdHVyZU5vZGUiLCJpc05vZGVDb25zdHJ1Y3RvckRlY2xhcmF0aW9uTm9kZSIsImlzTm9kZUNvbnN0cnVjdG9yTm9kZSIsImlzTm9kZUNvbnRhaW5lZEFzc2VydGlvbk5vZGUiLCJpc05vZGVEZWNsYXJhdGlvbk5vZGUiLCJpc05vZGVEZWR1Y3Rpb25Ob2RlIiwiaXNOb2RlRGVmaW5lZEFzc2VydGlvbk5vZGUiLCJpc05vZGVEZXJpdmF0aW9uTm9kZSIsImlzTm9kZUVxdWFsaXR5Tm9kZSIsImlzTm9kZUVycm9yTm9kZSIsImlzTm9kZUZyYW1lTm9kZSIsImlzTm9kZUp1ZGdlbWVudE5vZGUiLCJpc05vZGVMYWJlbE5vZGUiLCJpc05vZGVMZW1tYU5vZGUiLCJpc05vZGVNZXRhTGVtbWFOb2RlIiwiaXNOb2RlTWV0YVR5cGVOb2RlIiwiaXNOb2RlTWV0YXRoZW9yZW1Ob2RlIiwiaXNOb2RlTWV0YXZhcmlhYmxlRGVjbGFyYXRpb25Ob2RlIiwiaXNOb2RlTWV0YXZhcmlhYmxlTm9kZSIsImlzTm9kZVBhcmFtZXRlck5vZGUiLCJpc05vZGVQYXJlbnRoZXNpc2VkTGFiZWxzTm9kZSIsImlzTm9kZVByZW1pc2VOb2RlIiwiaXNOb2RlUHJvY2VkdXJlQ2FsbE5vZGUiLCJpc05vZGVQcm9vZk5vZGUiLCJpc05vZGVQcm9wZXJ0eUFzc2VydGlvbk5vZGUiLCJpc05vZGVQcm9wZXJ0eURlY2xhcmF0aW9uTm9kZSIsImlzTm9kZVByb3BlcnR5Tm9kZSIsImlzTm9kZVByb3BlcnR5UmVsYXRpb25Ob2RlIiwiaXNOb2RlUmVmZXJlbmNlTm9kZSIsImlzTm9kZVJ1bGVOb2RlIiwiaXNOb2RlU2F0aXNmaWVzQXNzZXJ0aW9uTm9kZSIsImlzTm9kZVN0YXRlbWVudE5vZGUiLCJpc05vZGVTdGVwTm9kZSIsImlzTm9kZVN1YkRlcml2YXRpb25Ob2RlIiwiaXNOb2RlU3VicHJvb2ZBc3NlcnRpb25Ob2RlIiwiaXNOb2RlU3VicHJvb2ZOb2RlIiwiaXNOb2RlU3VwcG9zaXRpb25Ob2RlIiwiaXNOb2RlVGVybU5vZGUiLCJpc05vZGVUaGVvcmVtTm9kZSIsImlzTm9kZVR5cGVBc3NlcnRpb25Ob2RlIiwiaXNOb2RlVHlwZURlY2xhcmF0aW9uTm9kZSIsImlzTm9kZVR5cGVOb2RlIiwiaXNOb2RlVmFyaWFibGVEZWNsYXJhdGlvbk5vZGUiLCJpc05vZGVWYXJpYWJsZU5vZGUiLCJzdGF0ZW1lbnRGcm9tU3RhdGVtZW50Tm9kZSIsInRlcm1Gcm9tVGVybU5vZGUiLCJ0eXBlRnJvbVR5cGVOb2RlIiwibm9kZSIsImlzTm9kZVJ1bGVOb2RlQnlSdWxlTmFtZSIsIlJVTEVfUlVMRV9OQU1FIiwiU1RFUF9SVUxFX05BTUUiLCJURVJNX1JVTEVfTkFNRSIsIlRZUEVfUlVMRV9OQU1FIiwiTEFCRUxfUlVMRV9OQU1FIiwiTEVNTUFfUlVMRV9OQU1FIiwiQVhJT01fUlVMRV9OQU1FIiwiRVJST1JfUlVMRV9OQU1FIiwiRlJBTUVfUlVMRV9OQU1FIiwiUFJPT0ZfUlVMRV9OQU1FIiwiVEhFT1JFTV9SVUxFX05BTUUiLCJQUkVNSVNFX1JVTEVfTkFNRSIsIlBST1BFUlRZX1JVTEVfTkFNRSIsIkVRVUFMSVRZX1JVTEVfTkFNRSIsIlZBUklBQkxFX1JVTEVfTkFNRSIsIlNVQlBST09GX1JVTEVfTkFNRSIsIk1FVEFfVFlQRV9SVUxFX05BTUUiLCJQQVJBTUVURVJfUlVMRV9OQU1FIiwiREVEVUNUSU9OX1JVTEVfTkFNRSIsIkpVREdFTUVOVF9SVUxFX05BTUUiLCJSRUZFUkVOQ0VfUlVMRV9OQU1FIiwiU1RBVEVNRU5UX1JVTEVfTkFNRSIsIk1FVEFfTEVNTUFfUlVMRV9OQU1FIiwiQ09NQklOQVRPUl9SVUxFX05BTUUiLCJDT05DTFVTSU9OX1JVTEVfTkFNRSIsIkNPTkpFQ1RVUkVfUlVMRV9OQU1FIiwiREVSSVZBVElPTl9SVUxFX05BTUUiLCJTVVBQT1NJVElPTl9SVUxFX05BTUUiLCJDT05TVFJVQ1RPUl9SVUxFX05BTUUiLCJERUNMQVJBVElPTl9SVUxFX05BTUUiLCJNRVRBVEhFT1JFTV9SVUxFX05BTUUiLCJNRVRBVkFSSUFCTEVfUlVMRV9OQU1FIiwiUFJPQ0VEVVJFX0NBTExfUlVMRV9OQU1FIiwiU1VCX0RFUklWQVRJT05fUlVMRV9OQU1FIiwiVFlQRV9BU1NFUlRJT05fUlVMRV9OQU1FIiwiVFlQRV9ERUNMQVJBVElPTl9SVUxFX05BTUUiLCJQUk9QRVJUWV9SRUxBVElPTl9SVUxFX05BTUUiLCJERUZJTkVEX0FTU0VSVElPTl9SVUxFX05BTUUiLCJQUk9QRVJUWV9BU1NFUlRJT05fUlVMRV9OQU1FIiwiU1VCUFJPT0ZfQVNTRVJUSU9OX1JVTEVfTkFNRSIsIkNPTlRBSU5FRF9BU1NFUlRJT05fUlVMRV9OQU1FIiwiU0FUSVNGSUVTX0FTU0VSVElPTl9SVUxFX05BTUUiLCJQUk9QRVJUWV9ERUNMQVJBVElPTl9SVUxFX05BTUUiLCJWQVJJQUJMRV9ERUNMQVJBVElPTl9SVUxFX05BTUUiLCJQQVJFTlRIRVNJU0VEX0xBQkVMU19SVUxFX05BTUUiLCJDT01CSU5BVE9SX0RFQ0xBUkFUSU9OX1JVTEVfTkFNRSIsIkNPTlNUUlVDVE9SX0RFQ0xBUkFUSU9OX1JVTEVfTkFNRSIsIkNPTVBMRVhfVFlQRV9ERUNMQVJBVElPTl9SVUxFX05BTUUiLCJNRVRBVkFSSUFCTEVfREVDTEFSQVRJT05fUlVMRV9OQU1FIiwidHlwZU5vZGUiLCJ0eXBlIiwib2JqZWN0VHlwZSIsIlR5cGUiLCJkb20iLCJ0eXBlTmFtZSIsImdldFR5cGVOYW1lIiwibmFtZSIsInN0cmluZyIsInN1cGVyVHlwZXMiLCJwcm9wZXJ0aWVzIiwicHJvdmlzaW9uYWwiLCJ0ZXJtTm9kZSIsImNvbnRleHQiLCJUZXJtIiwibm9kZUFzU3RyaW5nIiwidGVybSIsInN0YXRlbWVudE5vZGUiLCJTdGF0ZW1lbnQiLCJ0b2tlbnMiLCJub2RlQXNUb2tlbnMiLCJ0b2tlbnNBc1N0cmluZyIsInN0YXRlbWVudCIsInJ1bGVOYW1lIiwibm9kZVJ1bGVOb2RlIiwibm9kZU5vblRlcm1pbmFsTm9kZSIsImlzTm9uVGVybWluYWxOb2RlIiwibm9uVGVybWluYWxOb2RlIiwibm9uVGVybWluYWxOb2RlUnVsZU5hbWUiLCJnZXRSdWxlTmFtZSIsIm5vblRlcm1pbmFsTm9kZVJ1bGVOYW1lUnVsZU5hbWUiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7OztRQW1FZ0JBO2VBQUFBOztRQThFQUM7ZUFBQUE7O1FBNUNBQztlQUFBQTs7UUFnREFDO2VBQUFBOztRQTlDQUM7ZUFBQUE7O1FBRUFDO2VBQUFBOztRQTBDQUM7ZUFBQUE7O1FBcENBQztlQUFBQTs7UUF3QkFDO2VBQUFBOztRQXRCQUM7ZUFBQUE7O1FBdEJBQztlQUFBQTs7UUFzQ0FDO2VBQUFBOztRQXRCQUM7ZUFBQUE7O1FBMUJBQztlQUFBQTs7UUFaQUM7ZUFBQUE7O1FBRUFDO2VBQUFBOztRQXNCQUM7ZUFBQUE7O1FBOUJBQztlQUFBQTs7UUFFQUM7ZUFBQUE7O1FBa0NBQztlQUFBQTs7UUFaQUM7ZUFBQUE7O1FBNEJBQztlQUFBQTs7UUFvQ0FDO2VBQUFBOztRQWxDQUM7ZUFBQUE7O1FBNUJBQztlQUFBQTs7UUFzREFDO2VBQUFBOztRQWxFQUM7ZUFBQUE7O1FBMENBQztlQUFBQTs7UUE5Q0FDO2VBQUFBOztRQTBEQUM7ZUFBQUE7O1FBUUFDO2VBQUFBOztRQTVEQUM7ZUFBQUE7O1FBZ0RBQztlQUFBQTs7UUFoQ0FDO2VBQUFBOztRQXhDQUM7ZUFBQUE7O1FBa0ZBQztlQUFBQTs7UUF4Q0FDO2VBQUFBOztRQXhDQUM7ZUFBQUE7O1FBZ0VBQztlQUFBQTs7UUFZQUM7ZUFBQUE7O1FBaERBQztlQUFBQTs7UUF3QkFDO2VBQUFBOztRQWxEQUM7ZUFBQUE7O1FBZ0JBQztlQUFBQTs7UUFnREFDO2VBQUFBOztRQUVBQztlQUFBQTs7UUFoRUFDO2VBQUFBOztRQWdGQUM7ZUFBQUE7O1FBMURBQztlQUFBQTs7UUFvR0FDO2VBQUFBOztRQVZBQztlQUFBQTs7UUFwQkFDO2VBQUFBOzs7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