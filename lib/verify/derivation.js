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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92ZXJpZnkvZGVyaXZhdGlvbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IEFzc2VydGlvbiBmcm9tIFwiLi4vYXNzZXJ0aW9uXCI7XG5pbXBvcnQgUHJvb2ZDb250ZXh0IGZyb20gXCIuLi9jb250ZXh0L3Byb29mXCI7XG5pbXBvcnQgdmVyaWZ5UXVhbGlmaWVkU3RhdGVtZW50IGZyb20gXCIuLi92ZXJpZnkvc3RhdGVtZW50L3F1YWxpZmllZFwiO1xuaW1wb3J0IHZlcmlmeVVucXVhbGlmaWVkU3RhdGVtZW50IGZyb20gXCIuLi92ZXJpZnkvc3RhdGVtZW50L3VucXVhbGlmaWVkXCI7XG5cbmltcG9ydCB7IG5vZGVRdWVyeSwgbm9kZXNRdWVyeSB9IGZyb20gXCIuLi91dGlsaXRpZXMvcXVlcnlcIjtcbmltcG9ydCB7IFNVQlBST09GX1JVTEVfTkFNRSwgUVVBTElGSUVEX1NUQVRFTUVOVF9SVUxFX05BTUUsIFVOUVVBTElGSUVEX1NUQVRFTUVOVF9SVUxFX05BTUUgfSBmcm9tIFwiLi4vcnVsZU5hbWVzXCI7XG5cbmNvbnN0IGRlcml2YXRpb25Ob2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvc3VicHJvb2YvZGVyaXZhdGlvbnxhYnJpZGdlZERlcml2YXRpb24hXCIpLCAgLy8vXG4gICAgICBkZXJpdmF0aW9uQ2hpbGROb2Rlc1F1ZXJ5ID0gbm9kZXNRdWVyeShcIi9kZXJpdmF0aW9ufGFicmlkZ2VkRGVyaXZhdGlvbi8qXCIpLFxuICAgICAgdW5xdWFsaWZpZWRTdGF0ZW1lbnROb2Rlc1F1ZXJ5ID0gbm9kZXNRdWVyeShcIi9zdWJwcm9vZi91bnF1YWxpZmllZFN0YXRlbWVudFwiKVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB2ZXJpZnlEZXJpdmF0aW9uKGRlcml2YXRpb25Ob2RlLCBwcm9vZkNvbnRleHQpIHtcbiAgbGV0IGRlcml2YXRpb25WZXJpZmllZCxcbiAgICAgIGRlcml2ZWQ7XG5cbiAgcHJvb2ZDb250ZXh0LmJlZ2luKGRlcml2YXRpb25Ob2RlKTtcblxuICBkZXJpdmVkID0gdHJ1ZTtcblxuICBwcm9vZkNvbnRleHQuc2V0RGVyaXZlZChkZXJpdmVkKTtcblxuICBjb25zdCBkZXJpdmF0aW9uQ2hpbGROb2RlcyA9IGRlcml2YXRpb25DaGlsZE5vZGVzUXVlcnkoZGVyaXZhdGlvbk5vZGUpO1xuXG4gIGRlcml2YXRpb25WZXJpZmllZCA9IGRlcml2YXRpb25DaGlsZE5vZGVzLmV2ZXJ5KChkZXJpdmF0aW9uQ2hpbGROb2RlKSA9PiB7ICAvLy9cbiAgICBjb25zdCBkZXJpdmF0aW9uQ2hpbGRWZXJpZmllZCA9IHZlcmlmeURlcml2YXRpb25DaGlsZChkZXJpdmF0aW9uQ2hpbGROb2RlLCBwcm9vZkNvbnRleHQpO1xuXG4gICAgaWYgKGRlcml2YXRpb25DaGlsZFZlcmlmaWVkKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH0pO1xuXG4gIGRlcml2ZWQgPSBmYWxzZTtcblxuICBwcm9vZkNvbnRleHQuc2V0RGVyaXZlZChkZXJpdmVkKTtcblxuICBkZXJpdmF0aW9uVmVyaWZpZWQgP1xuICAgIHByb29mQ29udGV4dC5jb21wbGV0ZShkZXJpdmF0aW9uTm9kZSkgOlxuICAgICAgcHJvb2ZDb250ZXh0LmhhbHQoZGVyaXZhdGlvbk5vZGUpO1xuXG4gIHJldHVybiBkZXJpdmF0aW9uVmVyaWZpZWQ7XG59XG5cbmZ1bmN0aW9uIHZlcmlmeURlcml2YXRpb25DaGlsZChkZXJpdmF0aW9uQ2hpbGROb2RlLCBwcm9vZkNvbnRleHQpIHtcbiAgbGV0IGRlcml2YXRpb25DaGlsZFZlcmlmaWVkO1xuXG4gIGNvbnN0IHJ1bGVOYW1lID0gZGVyaXZhdGlvbkNoaWxkTm9kZS5nZXRSdWxlTmFtZSgpO1xuXG4gIHN3aXRjaCAocnVsZU5hbWUpIHtcbiAgICBjYXNlIFNVQlBST09GX1JVTEVfTkFNRToge1xuICAgICAgY29uc3Qgc3VicHJvb2ZOb2RlID0gZGVyaXZhdGlvbkNoaWxkTm9kZSwgIC8vL1xuICAgICAgICAgICAgc3VicHJvb2ZWZXJpZmllZCA9IHZlcmlmeVN1YnByb29mKHN1YnByb29mTm9kZSwgcHJvb2ZDb250ZXh0KTtcblxuICAgICAgaWYgKHN1YnByb29mVmVyaWZpZWQpIHtcbiAgICAgICAgY29uc3QgYXNzZXJ0aW9uID0gQXNzZXJ0aW9uLmZyb21TdWJwcm9vZk5vZGUoc3VicHJvb2ZOb2RlKTtcblxuICAgICAgICBwcm9vZkNvbnRleHQuYWRkQXNzZXJ0aW9uKGFzc2VydGlvbik7XG5cbiAgICAgICAgZGVyaXZhdGlvbkNoaWxkVmVyaWZpZWQgPSB0cnVlO1xuICAgICAgfVxuXG4gICAgICBicmVhaztcbiAgICB9XG5cbiAgICBjYXNlIFFVQUxJRklFRF9TVEFURU1FTlRfUlVMRV9OQU1FOiB7XG4gICAgICBjb25zdCBxdWFsaWZpZWRTdGF0ZW1lbnROb2RlID0gZGVyaXZhdGlvbkNoaWxkTm9kZSwgIC8vL1xuICAgICAgICAgICAgcXVhbGlmaWVkU3RhdGVtZW50VmVyaWZpZWQgPSB2ZXJpZnlRdWFsaWZpZWRTdGF0ZW1lbnQocXVhbGlmaWVkU3RhdGVtZW50Tm9kZSwgcHJvb2ZDb250ZXh0KTtcblxuICAgICAgaWYgKHF1YWxpZmllZFN0YXRlbWVudFZlcmlmaWVkKSB7XG4gICAgICAgIGNvbnN0IGFzc2VydGlvbiA9IEFzc2VydGlvbi5mcm9tUXVhbGlmaWVkU3RhdGVtZW50Tm9kZShxdWFsaWZpZWRTdGF0ZW1lbnROb2RlKTtcblxuICAgICAgICBwcm9vZkNvbnRleHQuYWRkQXNzZXJ0aW9uKGFzc2VydGlvbik7XG5cbiAgICAgICAgZGVyaXZhdGlvbkNoaWxkVmVyaWZpZWQgPSBxdWFsaWZpZWRTdGF0ZW1lbnRWZXJpZmllZDsgLy8vXG4gICAgICB9XG5cbiAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIGNhc2UgVU5RVUFMSUZJRURfU1RBVEVNRU5UX1JVTEVfTkFNRToge1xuICAgICAgY29uc3QgdW5xdWFsaWZpZWRTdGF0ZW1lbnROb2RlID0gZGVyaXZhdGlvbkNoaWxkTm9kZSwgIC8vL1xuICAgICAgICAgICAgdW5xdWFsaWZpZWRTdGF0ZW1lbnRWZXJpZmllZCA9IHZlcmlmeVVucXVhbGlmaWVkU3RhdGVtZW50KHVucXVhbGlmaWVkU3RhdGVtZW50Tm9kZSwgcHJvb2ZDb250ZXh0KTtcblxuICAgICAgaWYgKHVucXVhbGlmaWVkU3RhdGVtZW50VmVyaWZpZWQpIHtcbiAgICAgICAgY29uc3QgYXNzZXJ0aW9uID0gQXNzZXJ0aW9uLmZyb21VbnF1YWxpZmllZFN0YXRlbWVudE5vZGUodW5xdWFsaWZpZWRTdGF0ZW1lbnROb2RlKTtcblxuICAgICAgICBwcm9vZkNvbnRleHQuYWRkQXNzZXJ0aW9uKGFzc2VydGlvbik7XG5cbiAgICAgICAgZGVyaXZhdGlvbkNoaWxkVmVyaWZpZWQgPSB0cnVlO1xuICAgICAgfVxuXG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZGVyaXZhdGlvbkNoaWxkVmVyaWZpZWQ7XG59XG5cbmZ1bmN0aW9uIHZlcmlmeVN1YnByb29mKHN1YnByb29mTm9kZSwgcHJvb2ZDb250ZXh0KSB7XG4gIGxldCBzdWJwcm9vZlZlcmlmaWVkID0gZmFsc2U7XG5cbiAgcHJvb2ZDb250ZXh0ID0gUHJvb2ZDb250ZXh0LmZyb21Qcm9vZkNvbnRleHQocHJvb2ZDb250ZXh0KTsgLy8vXG5cbiAgY29uc3QgdW5xdWFsaWZpZWRTdGF0ZW1lbnROb2RlcyA9IHVucXVhbGlmaWVkU3RhdGVtZW50Tm9kZXNRdWVyeShzdWJwcm9vZk5vZGUpLFxuICAgICAgICB1bnF1YWxpZmllZFN0YXRlbWVudHNWZXJpZmllZCA9IHVucXVhbGlmaWVkU3RhdGVtZW50Tm9kZXMuZXZlcnkoKHVucXVhbGlmaWVkU3RhdGVtZW50Tm9kZSkgPT4ge1xuICAgICAgICAgIGNvbnN0IHVucXVhbGlmaWVkU3RhdGVtZW50VmVyaWZpZWQgPSB2ZXJpZnlVbnF1YWxpZmllZFN0YXRlbWVudCh1bnF1YWxpZmllZFN0YXRlbWVudE5vZGUsIHByb29mQ29udGV4dCk7XG5cbiAgICAgICAgICBpZiAodW5xdWFsaWZpZWRTdGF0ZW1lbnRWZXJpZmllZCkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICBpZiAodW5xdWFsaWZpZWRTdGF0ZW1lbnRzVmVyaWZpZWQpIHtcbiAgICB1bnF1YWxpZmllZFN0YXRlbWVudE5vZGVzLmZvckVhY2goKHVucXVhbGlmaWVkU3RhdGVtZW50Tm9kZSkgPT4ge1xuICAgICAgY29uc3QgYXNzZXJ0aW9uID0gQXNzZXJ0aW9uLmZyb21VbnF1YWxpZmllZFN0YXRlbWVudE5vZGUodW5xdWFsaWZpZWRTdGF0ZW1lbnROb2RlKTtcblxuICAgICAgcHJvb2ZDb250ZXh0LmFkZEFzc2VydGlvbihhc3NlcnRpb24pO1xuICAgIH0pO1xuXG4gICAgY29uc3QgZGVyaXZhdGlvbk5vZGUgPSBkZXJpdmF0aW9uTm9kZVF1ZXJ5KHN1YnByb29mTm9kZSksXG4gICAgICAgICAgZGVyaXZhdGlvblZlcmlmaWVkID0gdmVyaWZ5RGVyaXZhdGlvbihkZXJpdmF0aW9uTm9kZSwgcHJvb2ZDb250ZXh0KTtcblxuICAgIGlmIChkZXJpdmF0aW9uVmVyaWZpZWQpIHtcbiAgICAgIHN1YnByb29mVmVyaWZpZWQgPSB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBzdWJwcm9vZlZlcmlmaWVkO1xufVxuIl0sIm5hbWVzIjpbInZlcmlmeURlcml2YXRpb24iLCJkZXJpdmF0aW9uTm9kZVF1ZXJ5Iiwibm9kZVF1ZXJ5IiwiZGVyaXZhdGlvbkNoaWxkTm9kZXNRdWVyeSIsIm5vZGVzUXVlcnkiLCJ1bnF1YWxpZmllZFN0YXRlbWVudE5vZGVzUXVlcnkiLCJkZXJpdmF0aW9uTm9kZSIsInByb29mQ29udGV4dCIsImRlcml2YXRpb25WZXJpZmllZCIsImRlcml2ZWQiLCJiZWdpbiIsInNldERlcml2ZWQiLCJkZXJpdmF0aW9uQ2hpbGROb2RlcyIsImV2ZXJ5IiwiZGVyaXZhdGlvbkNoaWxkTm9kZSIsImRlcml2YXRpb25DaGlsZFZlcmlmaWVkIiwidmVyaWZ5RGVyaXZhdGlvbkNoaWxkIiwiY29tcGxldGUiLCJoYWx0IiwicnVsZU5hbWUiLCJnZXRSdWxlTmFtZSIsIlNVQlBST09GX1JVTEVfTkFNRSIsInN1YnByb29mTm9kZSIsInN1YnByb29mVmVyaWZpZWQiLCJ2ZXJpZnlTdWJwcm9vZiIsImFzc2VydGlvbiIsIkFzc2VydGlvbiIsImZyb21TdWJwcm9vZk5vZGUiLCJhZGRBc3NlcnRpb24iLCJRVUFMSUZJRURfU1RBVEVNRU5UX1JVTEVfTkFNRSIsInF1YWxpZmllZFN0YXRlbWVudE5vZGUiLCJxdWFsaWZpZWRTdGF0ZW1lbnRWZXJpZmllZCIsInZlcmlmeVF1YWxpZmllZFN0YXRlbWVudCIsImZyb21RdWFsaWZpZWRTdGF0ZW1lbnROb2RlIiwiVU5RVUFMSUZJRURfU1RBVEVNRU5UX1JVTEVfTkFNRSIsInVucXVhbGlmaWVkU3RhdGVtZW50Tm9kZSIsInVucXVhbGlmaWVkU3RhdGVtZW50VmVyaWZpZWQiLCJ2ZXJpZnlVbnF1YWxpZmllZFN0YXRlbWVudCIsImZyb21VbnF1YWxpZmllZFN0YXRlbWVudE5vZGUiLCJQcm9vZkNvbnRleHQiLCJmcm9tUHJvb2ZDb250ZXh0IiwidW5xdWFsaWZpZWRTdGF0ZW1lbnROb2RlcyIsInVucXVhbGlmaWVkU3RhdGVtZW50c1ZlcmlmaWVkIiwiZm9yRWFjaCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBY0E7OztlQUF3QkE7Ozs4REFaRjswREFDRzs4REFDWTtnRUFDRTtxQkFFRDt5QkFDNkQ7Ozs7OztBQUVuRyxJQUFNQyxzQkFBc0JDLElBQUFBLGdCQUFTLEVBQUMsNkNBQ2hDQyw0QkFBNEJDLElBQUFBLGlCQUFVLEVBQUMscUNBQ3ZDQyxpQ0FBaUNELElBQUFBLGlCQUFVLEVBQUM7QUFFbkMsU0FBU0osaUJBQWlCTSxjQUFjLEVBQUVDLFlBQVksRUFBRTtJQUNyRSxJQUFJQyxvQkFDQUM7SUFFSkYsYUFBYUcsS0FBSyxDQUFDSjtJQUVuQkcsVUFBVSxJ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