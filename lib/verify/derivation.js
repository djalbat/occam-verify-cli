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
var _assertion = /*#__PURE__*/ _interopRequireDefault(require("../assertion"));
var _proof = /*#__PURE__*/ _interopRequireDefault(require("../context/proof"));
var _qualified = /*#__PURE__*/ _interopRequireDefault(require("../verify/statement/qualified"));
var _unqualified = /*#__PURE__*/ _interopRequireDefault(require("../verify/statement/unqualified"));
var _query = require("../utilities/query");
var _ruleNames = require("../ruleNames");
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var derivationNodeQuery = (0, _query.nodeQuery)("/subproof/derivation|abridgedDerivation!"), derivationChildNodesQuery = (0, _query.nodesQuery)("/derivation|abridgedDerivation/*"), unqualifiedStatementNodesQuery = (0, _query.nodesQuery)("/subproof/unqualifiedStatement");
function verifyDerivation(derivationNode, proofContext) {
    var derivationVerified, derived;
    proofContext.begin(derivationNode);
    derived = true;
    proofContext.setDerived(derived);
    var derivationChildNodes = derivationChildNodesQuery(derivationNode);
    derivationVerified = derivationChildNodes.every(function(derivationChildNode) {
        var derivationChildVerified = verifyDerivationChild(derivationChildNode, proofContext);
        if (derivationChildVerified) {
            return true;
        }
    });
    derived = false;
    proofContext.setDerived(derived);
    derivationVerified ? proofContext.complete(derivationNode) : proofContext.halt(derivationNode);
    return derivationVerified;
}
function verifyDerivationChild(derivationChildNode, proofContext) {
    var derivationChildVerified;
    var ruleName = derivationChildNode.getRuleName();
    switch(ruleName){
        case _ruleNames.SUBPROOF_RULE_NAME:
            {
                var subproofNode = derivationChildNode, subproofVerified = verifySubproof(subproofNode, proofContext);
                if (subproofVerified) {
                    var assertion = _assertion.default.fromSubproofNode(subproofNode);
                    proofContext.addAssertion(assertion);
                    derivationChildVerified = true;
                }
                break;
            }
        case _ruleNames.QUALIFIED_STATEMENT_RULE_NAME:
            {
                var qualifiedStatementNode = derivationChildNode, qualifiedStatementVerified = (0, _qualified.default)(qualifiedStatementNode, proofContext);
                if (qualifiedStatementVerified) {
                    var assertion1 = _assertion.default.fromQualifiedStatementNode(qualifiedStatementNode);
                    proofContext.addAssertion(assertion1);
                    derivationChildVerified = qualifiedStatementVerified; ///
                }
                break;
            }
        case _ruleNames.UNQUALIFIED_STATEMENT_RULE_NAME:
            {
                var unqualifiedStatementNode = derivationChildNode, unqualifiedStatementVerified = (0, _unqualified.default)(unqualifiedStatementNode, proofContext);
                if (unqualifiedStatementVerified) {
                    var assertion2 = _assertion.default.fromUnqualifiedStatementNode(unqualifiedStatementNode);
                    proofContext.addAssertion(assertion2);
                    derivationChildVerified = true;
                }
                break;
            }
    }
    return derivationChildVerified;
}
function verifySubproof(subproofNode, proofContext) {
    var subproofVerified = false;
    proofContext = _proof.default.fromProofContext(proofContext); ///
    var unqualifiedStatementNodes = unqualifiedStatementNodesQuery(subproofNode), unqualifiedStatementsVerified = unqualifiedStatementNodes.every(function(unqualifiedStatementNode) {
        var unqualifiedStatementVerified = (0, _unqualified.default)(unqualifiedStatementNode, proofContext);
        if (unqualifiedStatementVerified) {
            return true;
        }
    });
    if (unqualifiedStatementsVerified) {
        unqualifiedStatementNodes.forEach(function(unqualifiedStatementNode) {
            var assertion = _assertion.default.fromUnqualifiedStatementNode(unqualifiedStatementNode);
            proofContext.addAssertion(assertion);
        });
        var derivationNode = derivationNodeQuery(subproofNode), derivationVerified = verifyDerivation(derivationNode, proofContext);
        if (derivationVerified) {
            subproofVerified = true;
        }
    }
    return subproofVerified;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92ZXJpZnkvZGVyaXZhdGlvbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IEFzc2VydGlvbiBmcm9tIFwiLi4vYXNzZXJ0aW9uXCI7XG5pbXBvcnQgUHJvb2ZDb250ZXh0IGZyb20gXCIuLi9jb250ZXh0L3Byb29mXCI7XG5pbXBvcnQgdmVyaWZ5UXVhbGlmaWVkU3RhdGVtZW50IGZyb20gXCIuLi92ZXJpZnkvc3RhdGVtZW50L3F1YWxpZmllZFwiO1xuaW1wb3J0IHZlcmlmeVVucXVhbGlmaWVkU3RhdGVtZW50IGZyb20gXCIuLi92ZXJpZnkvc3RhdGVtZW50L3VucXVhbGlmaWVkXCI7XG5cbmltcG9ydCB7IG5vZGVRdWVyeSwgbm9kZXNRdWVyeSB9IGZyb20gXCIuLi91dGlsaXRpZXMvcXVlcnlcIjtcbmltcG9ydCB7IFNVQlBST09GX1JVTEVfTkFNRSwgUVVBTElGSUVEX1NUQVRFTUVOVF9SVUxFX05BTUUsIFVOUVVBTElGSUVEX1NUQVRFTUVOVF9SVUxFX05BTUUgfSBmcm9tIFwiLi4vcnVsZU5hbWVzXCI7XG5cbmNvbnN0IGRlcml2YXRpb25Ob2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvc3VicHJvb2YvZGVyaXZhdGlvbnxhYnJpZGdlZERlcml2YXRpb24hXCIpLCAgLy8vXG4gICAgICBkZXJpdmF0aW9uQ2hpbGROb2Rlc1F1ZXJ5ID0gbm9kZXNRdWVyeShcIi9kZXJpdmF0aW9ufGFicmlkZ2VkRGVyaXZhdGlvbi8qXCIpLFxuICAgICAgdW5xdWFsaWZpZWRTdGF0ZW1lbnROb2Rlc1F1ZXJ5ID0gbm9kZXNRdWVyeShcIi9zdWJwcm9vZi91bnF1YWxpZmllZFN0YXRlbWVudFwiKVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB2ZXJpZnlEZXJpdmF0aW9uKGRlcml2YXRpb25Ob2RlLCBwcm9vZkNvbnRleHQpIHtcbiAgbGV0IGRlcml2YXRpb25WZXJpZmllZCxcbiAgICBkZXJpdmVkO1xuXG4gIHByb29mQ29udGV4dC5iZWdpbihkZXJpdmF0aW9uTm9kZSk7XG5cbiAgZGVyaXZlZCA9IHRydWU7XG5cbiAgcHJvb2ZDb250ZXh0LnNldERlcml2ZWQoZGVyaXZlZCk7XG5cbiAgY29uc3QgZGVyaXZhdGlvbkNoaWxkTm9kZXMgPSBkZXJpdmF0aW9uQ2hpbGROb2Rlc1F1ZXJ5KGRlcml2YXRpb25Ob2RlKTtcblxuICBkZXJpdmF0aW9uVmVyaWZpZWQgPSBkZXJpdmF0aW9uQ2hpbGROb2Rlcy5ldmVyeSgoZGVyaXZhdGlvbkNoaWxkTm9kZSkgPT4geyAgLy8vXG4gICAgY29uc3QgZGVyaXZhdGlvbkNoaWxkVmVyaWZpZWQgPSB2ZXJpZnlEZXJpdmF0aW9uQ2hpbGQoZGVyaXZhdGlvbkNoaWxkTm9kZSwgcHJvb2ZDb250ZXh0KTtcblxuICAgIGlmIChkZXJpdmF0aW9uQ2hpbGRWZXJpZmllZCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9KTtcblxuICBkZXJpdmVkID0gZmFsc2U7XG5cbiAgcHJvb2ZDb250ZXh0LnNldERlcml2ZWQoZGVyaXZlZCk7XG5cbiAgZGVyaXZhdGlvblZlcmlmaWVkID9cbiAgICBwcm9vZkNvbnRleHQuY29tcGxldGUoZGVyaXZhdGlvbk5vZGUpIDpcbiAgICAgIHByb29mQ29udGV4dC5oYWx0KGRlcml2YXRpb25Ob2RlKTtcblxuICByZXR1cm4gZGVyaXZhdGlvblZlcmlmaWVkO1xufVxuXG5mdW5jdGlvbiB2ZXJpZnlEZXJpdmF0aW9uQ2hpbGQoZGVyaXZhdGlvbkNoaWxkTm9kZSwgcHJvb2ZDb250ZXh0KSB7XG4gIGxldCBkZXJpdmF0aW9uQ2hpbGRWZXJpZmllZDtcblxuICBjb25zdCBydWxlTmFtZSA9IGRlcml2YXRpb25DaGlsZE5vZGUuZ2V0UnVsZU5hbWUoKTtcblxuICBzd2l0Y2ggKHJ1bGVOYW1lKSB7XG4gICAgY2FzZSBTVUJQUk9PRl9SVUxFX05BTUU6IHtcbiAgICAgIGNvbnN0IHN1YnByb29mTm9kZSA9IGRlcml2YXRpb25DaGlsZE5vZGUsICAvLy9cbiAgICAgICAgICAgIHN1YnByb29mVmVyaWZpZWQgPSB2ZXJpZnlTdWJwcm9vZihzdWJwcm9vZk5vZGUsIHByb29mQ29udGV4dCk7XG5cbiAgICAgIGlmIChzdWJwcm9vZlZlcmlmaWVkKSB7XG4gICAgICAgIGNvbnN0IGFzc2VydGlvbiA9IEFzc2VydGlvbi5mcm9tU3VicHJvb2ZOb2RlKHN1YnByb29mTm9kZSk7XG5cbiAgICAgICAgcHJvb2ZDb250ZXh0LmFkZEFzc2VydGlvbihhc3NlcnRpb24pO1xuXG4gICAgICAgIGRlcml2YXRpb25DaGlsZFZlcmlmaWVkID0gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgY2FzZSBRVUFMSUZJRURfU1RBVEVNRU5UX1JVTEVfTkFNRToge1xuICAgICAgY29uc3QgcXVhbGlmaWVkU3RhdGVtZW50Tm9kZSA9IGRlcml2YXRpb25DaGlsZE5vZGUsICAvLy9cbiAgICAgICAgICAgIHF1YWxpZmllZFN0YXRlbWVudFZlcmlmaWVkID0gdmVyaWZ5UXVhbGlmaWVkU3RhdGVtZW50KHF1YWxpZmllZFN0YXRlbWVudE5vZGUsIHByb29mQ29udGV4dCk7XG5cbiAgICAgIGlmIChxdWFsaWZpZWRTdGF0ZW1lbnRWZXJpZmllZCkge1xuICAgICAgICBjb25zdCBhc3NlcnRpb24gPSBBc3NlcnRpb24uZnJvbVF1YWxpZmllZFN0YXRlbWVudE5vZGUocXVhbGlmaWVkU3RhdGVtZW50Tm9kZSk7XG5cbiAgICAgICAgcHJvb2ZDb250ZXh0LmFkZEFzc2VydGlvbihhc3NlcnRpb24pO1xuXG4gICAgICAgIGRlcml2YXRpb25DaGlsZFZlcmlmaWVkID0gcXVhbGlmaWVkU3RhdGVtZW50VmVyaWZpZWQ7IC8vL1xuICAgICAgfVxuXG4gICAgICBicmVhaztcbiAgICB9XG5cbiAgICBjYXNlIFVOUVVBTElGSUVEX1NUQVRFTUVOVF9SVUxFX05BTUU6IHtcbiAgICAgIGNvbnN0IHVucXVhbGlmaWVkU3RhdGVtZW50Tm9kZSA9IGRlcml2YXRpb25DaGlsZE5vZGUsICAvLy9cbiAgICAgICAgICAgIHVucXVhbGlmaWVkU3RhdGVtZW50VmVyaWZpZWQgPSB2ZXJpZnlVbnF1YWxpZmllZFN0YXRlbWVudCh1bnF1YWxpZmllZFN0YXRlbWVudE5vZGUsIHByb29mQ29udGV4dCk7XG5cbiAgICAgIGlmICh1bnF1YWxpZmllZFN0YXRlbWVudFZlcmlmaWVkKSB7XG4gICAgICAgIGNvbnN0IGFzc2VydGlvbiA9IEFzc2VydGlvbi5mcm9tVW5xdWFsaWZpZWRTdGF0ZW1lbnROb2RlKHVucXVhbGlmaWVkU3RhdGVtZW50Tm9kZSk7XG5cbiAgICAgICAgcHJvb2ZDb250ZXh0LmFkZEFzc2VydGlvbihhc3NlcnRpb24pO1xuXG4gICAgICAgIGRlcml2YXRpb25DaGlsZFZlcmlmaWVkID0gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGRlcml2YXRpb25DaGlsZFZlcmlmaWVkO1xufVxuXG5mdW5jdGlvbiB2ZXJpZnlTdWJwcm9vZihzdWJwcm9vZk5vZGUsIHByb29mQ29udGV4dCkge1xuICBsZXQgc3VicHJvb2ZWZXJpZmllZCA9IGZhbHNlO1xuXG4gIHByb29mQ29udGV4dCA9IFByb29mQ29udGV4dC5mcm9tUHJvb2ZDb250ZXh0KHByb29mQ29udGV4dCk7IC8vL1xuXG4gIGNvbnN0IHVucXVhbGlmaWVkU3RhdGVtZW50Tm9kZXMgPSB1bnF1YWxpZmllZFN0YXRlbWVudE5vZGVzUXVlcnkoc3VicHJvb2ZOb2RlKSxcbiAgICAgICAgdW5xdWFsaWZpZWRTdGF0ZW1lbnRzVmVyaWZpZWQgPSB1bnF1YWxpZmllZFN0YXRlbWVudE5vZGVzLmV2ZXJ5KCh1bnF1YWxpZmllZFN0YXRlbWVudE5vZGUpID0+IHtcbiAgICAgICAgICBjb25zdCB1bnF1YWxpZmllZFN0YXRlbWVudFZlcmlmaWVkID0gdmVyaWZ5VW5xdWFsaWZpZWRTdGF0ZW1lbnQodW5xdWFsaWZpZWRTdGF0ZW1lbnROb2RlLCBwcm9vZkNvbnRleHQpO1xuXG4gICAgICAgICAgaWYgKHVucXVhbGlmaWVkU3RhdGVtZW50VmVyaWZpZWQpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgaWYgKHVucXVhbGlmaWVkU3RhdGVtZW50c1ZlcmlmaWVkKSB7XG4gICAgdW5xdWFsaWZpZWRTdGF0ZW1lbnROb2Rlcy5mb3JFYWNoKCh1bnF1YWxpZmllZFN0YXRlbWVudE5vZGUpID0+IHtcbiAgICAgIGNvbnN0IGFzc2VydGlvbiA9IEFzc2VydGlvbi5mcm9tVW5xdWFsaWZpZWRTdGF0ZW1lbnROb2RlKHVucXVhbGlmaWVkU3RhdGVtZW50Tm9kZSk7XG5cbiAgICAgIHByb29mQ29udGV4dC5hZGRBc3NlcnRpb24oYXNzZXJ0aW9uKTtcbiAgICB9KTtcblxuICAgIGNvbnN0IGRlcml2YXRpb25Ob2RlID0gZGVyaXZhdGlvbk5vZGVRdWVyeShzdWJwcm9vZk5vZGUpLFxuICAgICAgICAgIGRlcml2YXRpb25WZXJpZmllZCA9IHZlcmlmeURlcml2YXRpb24oZGVyaXZhdGlvbk5vZGUsIHByb29mQ29udGV4dCk7XG5cbiAgICBpZiAoZGVyaXZhdGlvblZlcmlmaWVkKSB7XG4gICAgICBzdWJwcm9vZlZlcmlmaWVkID0gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gc3VicHJvb2ZWZXJpZmllZDtcbn1cbiJdLCJuYW1lcyI6WyJ2ZXJpZnlEZXJpdmF0aW9uIiwiZGVyaXZhdGlvbk5vZGVRdWVyeSIsIm5vZGVRdWVyeSIsImRlcml2YXRpb25DaGlsZE5vZGVzUXVlcnkiLCJub2Rlc1F1ZXJ5IiwidW5xdWFsaWZpZWRTdGF0ZW1lbnROb2Rlc1F1ZXJ5IiwiZGVyaXZhdGlvbk5vZGUiLCJwcm9vZkNvbnRleHQiLCJkZXJpdmF0aW9uVmVyaWZpZWQiLCJkZXJpdmVkIiwiYmVnaW4iLCJzZXREZXJpdmVkIiwiZGVyaXZhdGlvbkNoaWxkTm9kZXMiLCJldmVyeSIsImRlcml2YXRpb25DaGlsZE5vZGUiLCJkZXJpdmF0aW9uQ2hpbGRWZXJpZmllZCIsInZlcmlmeURlcml2YXRpb25DaGlsZCIsImNvbXBsZXRlIiwiaGFsdCIsInJ1bGVOYW1lIiwiZ2V0UnVsZU5hbWUiLCJTVUJQUk9PRl9SVUxFX05BTUUiLCJzdWJwcm9vZk5vZGUiLCJzdWJwcm9vZlZlcmlmaWVkIiwidmVyaWZ5U3VicHJvb2YiLCJhc3NlcnRpb24iLCJBc3NlcnRpb24iLCJmcm9tU3VicHJvb2ZOb2RlIiwiYWRkQXNzZXJ0aW9uIiwiUVVBTElGSUVEX1NUQVRFTUVOVF9SVUxFX05BTUUiLCJxdWFsaWZpZWRTdGF0ZW1lbnROb2RlIiwicXVhbGlmaWVkU3RhdGVtZW50VmVyaWZpZWQiLCJ2ZXJpZnlRdWFsaWZpZWRTdGF0ZW1lbnQiLCJmcm9tUXVhbGlmaWVkU3RhdGVtZW50Tm9kZSIsIlVOUVVBTElGSUVEX1NUQVRFTUVOVF9SVUxFX05BTUUiLCJ1bnF1YWxpZmllZFN0YXRlbWVudE5vZGUiLCJ1bnF1YWxpZmllZFN0YXRlbWVudFZlcmlmaWVkIiwidmVyaWZ5VW5xdWFsaWZpZWRTdGF0ZW1lbnQiLCJmcm9tVW5xdWFsaWZpZWRTdGF0ZW1lbnROb2RlIiwiUHJvb2ZDb250ZXh0IiwiZnJvbVByb29mQ29udGV4dCIsInVucXVhbGlmaWVkU3RhdGVtZW50Tm9kZXMiLCJ1bnF1YWxpZmllZFN0YXRlbWVudHNWZXJpZmllZCIsImZvckVhY2giXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQWNBOzs7ZUFBd0JBOzs7OERBWkY7MERBQ0c7OERBQ1k7Z0VBQ0U7cUJBRUQ7eUJBQzZEOzs7Ozs7QUFFbkcsSUFBTUMsc0JBQXNCQyxJQUFBQSxnQkFBUyxFQUFDLDZDQUNoQ0MsNEJBQTRCQyxJQUFBQSxpQkFBVSxFQUFDLHFDQUN2Q0MsaUNBQWlDRCxJQUFBQSxpQkFBVSxFQUFDO0FBRW5DLFNBQVNKLGlCQUFpQk0sY0FBYyxFQUFFQyxZQUFZLEVBQUU7SUFDckUsSUFBSUMsb0JBQ0ZDO0lBRUZGLGFBQWFHLEtBQUssQ0FBQ0o7SUFFbkJHLFVBQVUsSUFB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