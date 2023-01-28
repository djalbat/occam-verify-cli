"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return verifyDerivation;
    }
});
var _proof = /*#__PURE__*/ _interopRequireDefault(require("../step/proof"));
var _proof1 = /*#__PURE__*/ _interopRequireDefault(require("../context/proof"));
var _supposition = /*#__PURE__*/ _interopRequireDefault(require("./supposition"));
var _qualified = /*#__PURE__*/ _interopRequireDefault(require("../verify/statement/qualified"));
var _unqualified = /*#__PURE__*/ _interopRequireDefault(require("../verify/statement/unqualified"));
var _query = require("../utilities/query");
var _ruleNames = require("../ruleNames");
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var childNodesQuery = (0, _query.nodesQuery)("/derivation|subDerivation/*"), statementNodeQuery = (0, _query.nodeQuery)("/qualifiedStatement|unqualifiedStatement/statement!"), suppositionNodesQuery = (0, _query.nodesQuery)("/subproof/supposition"), subDerivationNodeQuery = (0, _query.nodeQuery)("/subproof/subDerivation");
function verifyDerivation(derivationNode, proofContext) {
    var derivationVerified;
    var childNodes = childNodesQuery(derivationNode);
    derivationVerified = childNodes.every(function(childNode) {
        var childVerified = verifyChild(childNode, proofContext);
        if (childVerified) {
            return true;
        }
    });
    return derivationVerified;
}
function verifySubDerivation(subDerivationNode, proofContext) {
    var subDerivationVerified;
    var childNodes = childNodesQuery(subDerivationNode);
    subDerivationVerified = childNodes.every(function(childNode) {
        var childVerified = verifyChild(childNode, proofContext);
        if (childVerified) {
            return true;
        }
    });
    return subDerivationVerified;
}
function verifySubproof(subproofNode, proofContext) {
    var subproofVerified = false;
    proofContext = _proof1.default.fromProofContext(proofContext); ///
    var suppositions = [], suppositionNodes = suppositionNodesQuery(subproofNode), suppositionsVerified = suppositionNodes.every(function(suppositionNode) {
        var suppositionVerified = (0, _supposition.default)(suppositionNode, suppositions, proofContext);
        if (suppositionVerified) {
            return true;
        }
    });
    if (suppositionsVerified) {
        var subDerivationNode = subDerivationNodeQuery(subproofNode), subDerivationVerified = verifySubDerivation(subDerivationNode, proofContext);
        if (subDerivationVerified) {
            subproofVerified = true;
        }
    }
    return subproofVerified;
}
function verifyChild(childNode, proofContext) {
    var childVerified;
    var childNodeRuleName = childNode.getRuleName();
    switch(childNodeRuleName){
        case _ruleNames.SUBPROOF_RULE_NAME:
            {
                var subproofNode = childNode, subproofVerified = verifySubproof(subproofNode, proofContext);
                if (subproofVerified) {
                    var proofStep = _proof.default.fromSubproofNode(subproofNode);
                    proofContext.addProofStep(proofStep);
                    childVerified = true;
                }
                break;
            }
        case _ruleNames.QUALIFIED_STATEMENT_RULE_NAME:
            {
                var derived = true, assertions = [], qualifiedStatementNode = childNode, qualifiedStatementVerified = (0, _qualified.default)(qualifiedStatementNode, assertions, derived, proofContext);
                if (qualifiedStatementVerified) {
                    var statementNode = statementNodeQuery(qualifiedStatementNode), proofStep1 = _proof.default.fromStatementNode(statementNode);
                    proofContext.addProofStep(proofStep1);
                    childVerified = qualifiedStatementVerified; ///
                }
                break;
            }
        case _ruleNames.UNQUALIFIED_STATEMENT_RULE_NAME:
            {
                var derived1 = true, assertions1 = [], unqualifiedStatementNode = childNode, unqualifiedStatementVerified = (0, _unqualified.default)(unqualifiedStatementNode, assertions1, derived1, proofContext);
                if (unqualifiedStatementVerified) {
                    var statementNode1 = statementNodeQuery(unqualifiedStatementNode), proofStep2 = _proof.default.fromStatementNode(statementNode1);
                    proofContext.addProofStep(proofStep2);
                    childVerified = true;
                }
                break;
            }
    }
    return childVerified;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92ZXJpZnkvZGVyaXZhdGlvbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFByb29mU3RlcCBmcm9tIFwiLi4vc3RlcC9wcm9vZlwiO1xuaW1wb3J0IFByb29mQ29udGV4dCBmcm9tIFwiLi4vY29udGV4dC9wcm9vZlwiO1xuaW1wb3J0IHZlcmlmeVN1cHBvc2l0aW9uIGZyb20gXCIuL3N1cHBvc2l0aW9uXCI7XG5pbXBvcnQgdmVyaWZ5UXVhbGlmaWVkU3RhdGVtZW50IGZyb20gXCIuLi92ZXJpZnkvc3RhdGVtZW50L3F1YWxpZmllZFwiO1xuaW1wb3J0IHZlcmlmeVVucXVhbGlmaWVkU3RhdGVtZW50IGZyb20gXCIuLi92ZXJpZnkvc3RhdGVtZW50L3VucXVhbGlmaWVkXCI7XG5cbmltcG9ydCB7IG5vZGVRdWVyeSwgbm9kZXNRdWVyeSB9IGZyb20gXCIuLi91dGlsaXRpZXMvcXVlcnlcIjtcbmltcG9ydCB7IFNVQlBST09GX1JVTEVfTkFNRSwgUVVBTElGSUVEX1NUQVRFTUVOVF9SVUxFX05BTUUsIFVOUVVBTElGSUVEX1NUQVRFTUVOVF9SVUxFX05BTUUgfSBmcm9tIFwiLi4vcnVsZU5hbWVzXCI7XG5cbmNvbnN0IGNoaWxkTm9kZXNRdWVyeSA9IG5vZGVzUXVlcnkoXCIvZGVyaXZhdGlvbnxzdWJEZXJpdmF0aW9uLypcIiksXG4gICAgICBzdGF0ZW1lbnROb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvcXVhbGlmaWVkU3RhdGVtZW50fHVucXVhbGlmaWVkU3RhdGVtZW50L3N0YXRlbWVudCFcIiksXG4gICAgICBzdXBwb3NpdGlvbk5vZGVzUXVlcnkgPSBub2Rlc1F1ZXJ5KFwiL3N1YnByb29mL3N1cHBvc2l0aW9uXCIpLFxuICAgICAgc3ViRGVyaXZhdGlvbk5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9zdWJwcm9vZi9zdWJEZXJpdmF0aW9uXCIpO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB2ZXJpZnlEZXJpdmF0aW9uKGRlcml2YXRpb25Ob2RlLCBwcm9vZkNvbnRleHQpIHtcbiAgbGV0IGRlcml2YXRpb25WZXJpZmllZDtcblxuICBjb25zdCBjaGlsZE5vZGVzID0gY2hpbGROb2Rlc1F1ZXJ5KGRlcml2YXRpb25Ob2RlKTtcblxuICBkZXJpdmF0aW9uVmVyaWZpZWQgPSBjaGlsZE5vZGVzLmV2ZXJ5KChjaGlsZE5vZGUpID0+IHtcbiAgICBjb25zdCBjaGlsZFZlcmlmaWVkID0gdmVyaWZ5Q2hpbGQoY2hpbGROb2RlLCBwcm9vZkNvbnRleHQpO1xuXG4gICAgaWYgKGNoaWxkVmVyaWZpZWQpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIGRlcml2YXRpb25WZXJpZmllZDtcbn1cblxuZnVuY3Rpb24gdmVyaWZ5U3ViRGVyaXZhdGlvbihzdWJEZXJpdmF0aW9uTm9kZSwgcHJvb2ZDb250ZXh0KSB7XG4gIGxldCBzdWJEZXJpdmF0aW9uVmVyaWZpZWQ7XG5cbiAgY29uc3QgY2hpbGROb2RlcyA9IGNoaWxkTm9kZXNRdWVyeShzdWJEZXJpdmF0aW9uTm9kZSk7XG5cbiAgc3ViRGVyaXZhdGlvblZlcmlmaWVkID0gY2hpbGROb2Rlcy5ldmVyeSgoY2hpbGROb2RlKSA9PiB7XG4gICAgY29uc3QgY2hpbGRWZXJpZmllZCA9IHZlcmlmeUNoaWxkKGNoaWxkTm9kZSwgcHJvb2ZDb250ZXh0KTtcblxuICAgIGlmIChjaGlsZFZlcmlmaWVkKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiBzdWJEZXJpdmF0aW9uVmVyaWZpZWQ7XG59XG5cbmZ1bmN0aW9uIHZlcmlmeVN1YnByb29mKHN1YnByb29mTm9kZSwgcHJvb2ZDb250ZXh0KSB7XG4gIGxldCBzdWJwcm9vZlZlcmlmaWVkID0gZmFsc2U7XG5cbiAgcHJvb2ZDb250ZXh0ID0gUHJvb2ZDb250ZXh0LmZyb21Qcm9vZkNvbnRleHQocHJvb2ZDb250ZXh0KTsgLy8vXG5cbiAgY29uc3Qgc3VwcG9zaXRpb25zID0gW10sXG4gICAgICAgIHN1cHBvc2l0aW9uTm9kZXMgPSBzdXBwb3NpdGlvbk5vZGVzUXVlcnkoc3VicHJvb2ZOb2RlKSxcbiAgICAgICAgc3VwcG9zaXRpb25zVmVyaWZpZWQgPSBzdXBwb3NpdGlvbk5vZGVzLmV2ZXJ5KChzdXBwb3NpdGlvbk5vZGUpID0+IHtcbiAgICAgICAgICBjb25zdCBzdXBwb3NpdGlvblZlcmlmaWVkID0gdmVyaWZ5U3VwcG9zaXRpb24oc3VwcG9zaXRpb25Ob2RlLCBzdXBwb3NpdGlvbnMsIHByb29mQ29udGV4dCk7XG5cbiAgICAgICAgICBpZiAoc3VwcG9zaXRpb25WZXJpZmllZCkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICBpZiAoc3VwcG9zaXRpb25zVmVyaWZpZWQpIHtcbiAgICBjb25zdCBzdWJEZXJpdmF0aW9uTm9kZSA9IHN1YkRlcml2YXRpb25Ob2RlUXVlcnkoc3VicHJvb2ZOb2RlKSxcbiAgICAgICAgICBzdWJEZXJpdmF0aW9uVmVyaWZpZWQgPSB2ZXJpZnlTdWJEZXJpdmF0aW9uKHN1YkRlcml2YXRpb25Ob2RlLCBwcm9vZkNvbnRleHQpO1xuXG4gICAgaWYgKHN1YkRlcml2YXRpb25WZXJpZmllZCkge1xuICAgICAgc3VicHJvb2ZWZXJpZmllZCA9IHRydWU7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHN1YnByb29mVmVyaWZpZWQ7XG59XG5cbmZ1bmN0aW9uIHZlcmlmeUNoaWxkKGNoaWxkTm9kZSwgcHJvb2ZDb250ZXh0KSB7XG4gIGxldCBjaGlsZFZlcmlmaWVkO1xuXG4gIGNvbnN0IGNoaWxkTm9kZVJ1bGVOYW1lID0gY2hpbGROb2RlLmdldFJ1bGVOYW1lKCk7XG5cbiAgc3dpdGNoIChjaGlsZE5vZGVSdWxlTmFtZSkge1xuICAgIGNhc2UgU1VCUFJPT0ZfUlVMRV9OQU1FOiB7XG4gICAgICBjb25zdCBzdWJwcm9vZk5vZGUgPSBjaGlsZE5vZGUsICAvLy9cbiAgICAgICAgICAgIHN1YnByb29mVmVyaWZpZWQgPSB2ZXJpZnlTdWJwcm9vZihzdWJwcm9vZk5vZGUsIHByb29mQ29udGV4dCk7XG5cbiAgICAgIGlmIChzdWJwcm9vZlZlcmlmaWVkKSB7XG4gICAgICAgIGNvbnN0IHByb29mU3RlcCA9IFByb29mU3RlcC5mcm9tU3VicHJvb2ZOb2RlKHN1YnByb29mTm9kZSk7XG5cbiAgICAgICAgcHJvb2ZDb250ZXh0LmFkZFByb29mU3RlcChwcm9vZlN0ZXApO1xuXG4gICAgICAgIGNoaWxkVmVyaWZpZWQgPSB0cnVlO1xuICAgICAgfVxuXG4gICAgICBicmVhaztcbiAgICB9XG5cbiAgICBjYXNlIFFVQUxJRklFRF9TVEFURU1FTlRfUlVMRV9OQU1FOiB7XG4gICAgICBjb25zdCBkZXJpdmVkID0gdHJ1ZSxcbiAgICAgICAgICAgIGFzc2VydGlvbnMgPSBbXSxcbiAgICAgICAgICAgIHF1YWxpZmllZFN0YXRlbWVudE5vZGUgPSBjaGlsZE5vZGUsICAvLy9cbiAgICAgICAgICAgIHF1YWxpZmllZFN0YXRlbWVudFZlcmlmaWVkID0gdmVyaWZ5UXVhbGlmaWVkU3RhdGVtZW50KHF1YWxpZmllZFN0YXRlbWVudE5vZGUsIGFzc2VydGlvbnMsIGRlcml2ZWQsIHByb29mQ29udGV4dCk7XG5cbiAgICAgIGlmIChxdWFsaWZpZWRTdGF0ZW1lbnRWZXJpZmllZCkge1xuICAgICAgICBjb25zdCBzdGF0ZW1lbnROb2RlID0gc3RhdGVtZW50Tm9kZVF1ZXJ5KHF1YWxpZmllZFN0YXRlbWVudE5vZGUpLFxuICAgICAgICAgICAgICBwcm9vZlN0ZXAgPSBQcm9vZlN0ZXAuZnJvbVN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSk7XG5cbiAgICAgICAgcHJvb2ZDb250ZXh0LmFkZFByb29mU3RlcChwcm9vZlN0ZXApO1xuXG4gICAgICAgIGNoaWxkVmVyaWZpZWQgPSBxdWFsaWZpZWRTdGF0ZW1lbnRWZXJpZmllZDsgLy8vXG4gICAgICB9XG5cbiAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIGNhc2UgVU5RVUFMSUZJRURfU1RBVEVNRU5UX1JVTEVfTkFNRToge1xuICAgICAgY29uc3QgZGVyaXZlZCA9IHRydWUsXG4gICAgICAgICAgICBhc3NlcnRpb25zID0gW10sXG4gICAgICAgICAgICB1bnF1YWxpZmllZFN0YXRlbWVudE5vZGUgPSBjaGlsZE5vZGUsICAvLy9cbiAgICAgICAgICAgIHVucXVhbGlmaWVkU3RhdGVtZW50VmVyaWZpZWQgPSB2ZXJpZnlVbnF1YWxpZmllZFN0YXRlbWVudCh1bnF1YWxpZmllZFN0YXRlbWVudE5vZGUsIGFzc2VydGlvbnMsIGRlcml2ZWQsIHByb29mQ29udGV4dCk7XG5cbiAgICAgIGlmICh1bnF1YWxpZmllZFN0YXRlbWVudFZlcmlmaWVkKSB7XG4gICAgICAgIGNvbnN0IHN0YXRlbWVudE5vZGUgPSBzdGF0ZW1lbnROb2RlUXVlcnkodW5xdWFsaWZpZWRTdGF0ZW1lbnROb2RlKSxcbiAgICAgICAgICAgICAgcHJvb2ZTdGVwID0gUHJvb2ZTdGVwLmZyb21TdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUpO1xuXG4gICAgICAgIHByb29mQ29udGV4dC5hZGRQcm9vZlN0ZXAocHJvb2ZTdGVwKTtcblxuICAgICAgICBjaGlsZFZlcmlmaWVkID0gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGNoaWxkVmVyaWZpZWQ7XG59XG4iXSwibmFtZXMiOlsidmVyaWZ5RGVyaXZhdGlvbiIsImNoaWxkTm9kZXNRdWVyeSIsIm5vZGVzUXVlcnkiLCJzdGF0ZW1lbnROb2RlUXVlcnkiLCJub2RlUXVlcnkiLCJzdXBwb3NpdGlvbk5vZGVzUXVlcnkiLCJzdWJEZXJpdmF0aW9uTm9kZVF1ZXJ5IiwiZGVyaXZhdGlvbk5vZGUiLCJwcm9vZkNvbnRleHQiLCJkZXJpdmF0aW9uVmVyaWZpZWQiLCJjaGlsZE5vZGVzIiwiZXZlcnkiLCJjaGlsZE5vZGUiLCJjaGlsZFZlcmlmaWVkIiwidmVyaWZ5Q2hpbGQiLCJ2ZXJpZnlTdWJEZXJpdmF0aW9uIiwic3ViRGVyaXZhdGlvbk5vZGUiLCJzdWJEZXJpdmF0aW9uVmVyaWZpZWQiLCJ2ZXJpZnlTdWJwcm9vZiIsInN1YnByb29mTm9kZSIsInN1YnByb29mVmVyaWZpZWQiLCJQcm9vZkNvbnRleHQiLCJmcm9tUHJvb2ZDb250ZXh0Iiwic3VwcG9zaXRpb25zIiwic3VwcG9zaXRpb25Ob2RlcyIsInN1cHBvc2l0aW9uc1ZlcmlmaWVkIiwic3VwcG9zaXRpb25Ob2RlIiwic3VwcG9zaXRpb25WZXJpZmllZCIsInZlcmlmeVN1cHBvc2l0aW9uIiwiY2hpbGROb2RlUnVsZU5hbWUiLCJnZXRSdWxlTmFtZSIsIlNVQlBST09GX1JVTEVfTkFNRSIsInByb29mU3RlcCIsIlByb29mU3RlcCIsImZyb21TdWJwcm9vZk5vZGUiLCJhZGRQcm9vZlN0ZXAiLCJRVUFMSUZJRURfU1RBVEVNRU5UX1JVTEVfTkFNRSIsImRlcml2ZWQiLCJhc3NlcnRpb25zIiwicXVhbGlmaWVkU3RhdGVtZW50Tm9kZSIsInF1YWxpZmllZFN0YXRlbWVudFZlcmlmaWVkIiwidmVyaWZ5UXVhbGlmaWVkU3RhdGVtZW50Iiwic3RhdGVtZW50Tm9kZSIsImZyb21TdGF0ZW1lbnROb2RlIiwiVU5RVUFMSUZJRURfU1RBVEVNRU5UX1JVTEVfTkFNRSIsInVucXVhbGlmaWVkU3RhdGVtZW50Tm9kZSIsInVucXVhbGlmaWVkU3RhdGVtZW50VmVyaWZpZWQiLCJ2ZXJpZnlVbnF1YWxpZmllZFN0YXRlbWVudCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBZ0JBOzs7ZUFBd0JBOzs7MERBZEY7MkRBQ0c7Z0VBQ0s7OERBQ087Z0VBQ0U7cUJBRUQ7eUJBQzZEOzs7Ozs7QUFFbkcsSUFBTUMsa0JBQWtCQyxJQUFBQSxpQkFBVSxFQUFDLGdDQUM3QkMscUJBQXFCQyxJQUFBQSxnQkFBUyxFQUFDLHdEQUMvQkMsd0JBQXdCSCxJQUFBQSxpQkFBVSxFQUFDLDBCQUNuQ0kseUJBQXlCRixJ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