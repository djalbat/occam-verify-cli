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
var _qualified = /*#__PURE__*/ _interopRequireDefault(require("../verify/statement/qualified"));
var _unqualified = /*#__PURE__*/ _interopRequireDefault(require("../verify/statement/unqualified"));
var _query = require("../utilities/query");
var _ruleNames = require("../ruleNames");
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var childNodesQuery = (0, _query.nodesQuery)("/derivation|subDerivation/*"), statementNodeQuery = (0, _query.nodeQuery)("/qualifiedStatement|unqualifiedStatement/statement!"), subDerivationNodeQuery = (0, _query.nodeQuery)("/subproof/subDerivation"), unqualifiedStatementNodesQuery = (0, _query.nodesQuery)("/subproof/unqualifiedStatement");
function verifyDerivation(derivationNode, proofContext) {
    var derivationVerified;
    proofContext.begin(derivationNode);
    var childNodes = childNodesQuery(derivationNode);
    derivationVerified = childNodes.every(function(childNode) {
        var childVerified = verifyChild(childNode, proofContext);
        if (childVerified) {
            return true;
        }
    });
    derivationVerified ? proofContext.complete(derivationNode) : proofContext.halt(derivationNode);
    return derivationVerified;
}
function verifySubDerivation(subDerivationNode, proofContext) {
    var derivationVerified;
    proofContext.begin(subDerivationNode);
    var childNodes = childNodesQuery(subDerivationNode);
    derivationVerified = childNodes.every(function(childNode) {
        var childVerified = verifyChild(childNode, proofContext);
        if (childVerified) {
            return true;
        }
    });
    derivationVerified ? proofContext.complete(subDerivationNode) : proofContext.halt(subDerivationNode);
    return derivationVerified;
}
function verifySubproof(subproofNode, proofContext) {
    var subproofVerified = false;
    proofContext = _proof1.default.fromProofContext(proofContext); ///
    var unqualifiedStatementNodes = unqualifiedStatementNodesQuery(subproofNode), unqualifiedStatementsVerified = unqualifiedStatementNodes.every(function(unqualifiedStatementNode) {
        var unqualifiedStatementVerified = (0, _unqualified.default)(unqualifiedStatementNode, proofContext);
        if (unqualifiedStatementVerified) {
            return true;
        }
    });
    if (unqualifiedStatementsVerified) {
        unqualifiedStatementNodes.forEach(function(unqualifiedStatementNode) {
            var statementNode = statementNodeQuery(unqualifiedStatementNode), proofStep = _proof.default.fromStatementNode(statementNode);
            proofContext.addProofStep(proofStep);
        });
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
                var qualifiedStatementNode = childNode, qualifiedStatementVerified = (0, _qualified.default)(qualifiedStatementNode, proofContext);
                if (qualifiedStatementVerified) {
                    var statementNode = statementNodeQuery(qualifiedStatementNode), proofStep1 = _proof.default.fromStatementNode(statementNode);
                    proofContext.addProofStep(proofStep1);
                    childVerified = qualifiedStatementVerified; ///
                }
                break;
            }
        case _ruleNames.UNQUALIFIED_STATEMENT_RULE_NAME:
            {
                var unqualifiedStatementNode = childNode, unqualifiedStatementVerified = (0, _unqualified.default)(unqualifiedStatementNode, proofContext);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92ZXJpZnkvZGVyaXZhdGlvbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFByb29mU3RlcCBmcm9tIFwiLi4vc3RlcC9wcm9vZlwiO1xuaW1wb3J0IFByb29mQ29udGV4dCBmcm9tIFwiLi4vY29udGV4dC9wcm9vZlwiO1xuaW1wb3J0IHZlcmlmeVF1YWxpZmllZFN0YXRlbWVudCBmcm9tIFwiLi4vdmVyaWZ5L3N0YXRlbWVudC9xdWFsaWZpZWRcIjtcbmltcG9ydCB2ZXJpZnlVbnF1YWxpZmllZFN0YXRlbWVudCBmcm9tIFwiLi4vdmVyaWZ5L3N0YXRlbWVudC91bnF1YWxpZmllZFwiO1xuXG5pbXBvcnQgeyBub2RlUXVlcnksIG5vZGVzUXVlcnkgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5pbXBvcnQgeyBTVUJQUk9PRl9SVUxFX05BTUUsIFFVQUxJRklFRF9TVEFURU1FTlRfUlVMRV9OQU1FLCBVTlFVQUxJRklFRF9TVEFURU1FTlRfUlVMRV9OQU1FIH0gZnJvbSBcIi4uL3J1bGVOYW1lc1wiO1xuXG5jb25zdCBjaGlsZE5vZGVzUXVlcnkgPSBub2Rlc1F1ZXJ5KFwiL2Rlcml2YXRpb258c3ViRGVyaXZhdGlvbi8qXCIpLFxuICAgICAgc3RhdGVtZW50Tm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3F1YWxpZmllZFN0YXRlbWVudHx1bnF1YWxpZmllZFN0YXRlbWVudC9zdGF0ZW1lbnQhXCIpLFxuICAgICAgc3ViRGVyaXZhdGlvbk5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9zdWJwcm9vZi9zdWJEZXJpdmF0aW9uXCIpLFxuICAgICAgdW5xdWFsaWZpZWRTdGF0ZW1lbnROb2Rlc1F1ZXJ5ID0gbm9kZXNRdWVyeShcIi9zdWJwcm9vZi91bnF1YWxpZmllZFN0YXRlbWVudFwiKTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdmVyaWZ5RGVyaXZhdGlvbihkZXJpdmF0aW9uTm9kZSwgcHJvb2ZDb250ZXh0KSB7XG4gIGxldCBkZXJpdmF0aW9uVmVyaWZpZWQ7XG5cbiAgcHJvb2ZDb250ZXh0LmJlZ2luKGRlcml2YXRpb25Ob2RlKTtcblxuICBjb25zdCBjaGlsZE5vZGVzID0gY2hpbGROb2Rlc1F1ZXJ5KGRlcml2YXRpb25Ob2RlKTtcblxuICBkZXJpdmF0aW9uVmVyaWZpZWQgPSBjaGlsZE5vZGVzLmV2ZXJ5KChjaGlsZE5vZGUpID0+IHsgIC8vL1xuICAgIGNvbnN0IGNoaWxkVmVyaWZpZWQgPSB2ZXJpZnlDaGlsZChjaGlsZE5vZGUsIHByb29mQ29udGV4dCk7XG5cbiAgICBpZiAoY2hpbGRWZXJpZmllZCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9KTtcblxuICBkZXJpdmF0aW9uVmVyaWZpZWQgP1xuICAgIHByb29mQ29udGV4dC5jb21wbGV0ZShkZXJpdmF0aW9uTm9kZSkgOlxuICAgICAgcHJvb2ZDb250ZXh0LmhhbHQoZGVyaXZhdGlvbk5vZGUpO1xuXG4gIHJldHVybiBkZXJpdmF0aW9uVmVyaWZpZWQ7XG59XG5cbmZ1bmN0aW9uIHZlcmlmeVN1YkRlcml2YXRpb24oc3ViRGVyaXZhdGlvbk5vZGUsIHByb29mQ29udGV4dCkge1xuICBsZXQgZGVyaXZhdGlvblZlcmlmaWVkO1xuXG4gIHByb29mQ29udGV4dC5iZWdpbihzdWJEZXJpdmF0aW9uTm9kZSk7XG5cbiAgY29uc3QgY2hpbGROb2RlcyA9IGNoaWxkTm9kZXNRdWVyeShzdWJEZXJpdmF0aW9uTm9kZSk7XG5cbiAgZGVyaXZhdGlvblZlcmlmaWVkID0gY2hpbGROb2Rlcy5ldmVyeSgoY2hpbGROb2RlKSA9PiB7ICAvLy9cbiAgICBjb25zdCBjaGlsZFZlcmlmaWVkID0gdmVyaWZ5Q2hpbGQoY2hpbGROb2RlLCBwcm9vZkNvbnRleHQpO1xuXG4gICAgaWYgKGNoaWxkVmVyaWZpZWQpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfSk7XG5cbiAgZGVyaXZhdGlvblZlcmlmaWVkID9cbiAgICBwcm9vZkNvbnRleHQuY29tcGxldGUoc3ViRGVyaXZhdGlvbk5vZGUpIDpcbiAgICAgIHByb29mQ29udGV4dC5oYWx0KHN1YkRlcml2YXRpb25Ob2RlKTtcblxuICByZXR1cm4gZGVyaXZhdGlvblZlcmlmaWVkO1xufVxuXG5mdW5jdGlvbiB2ZXJpZnlTdWJwcm9vZihzdWJwcm9vZk5vZGUsIHByb29mQ29udGV4dCkge1xuICBsZXQgc3VicHJvb2ZWZXJpZmllZCA9IGZhbHNlO1xuXG4gIHByb29mQ29udGV4dCA9IFByb29mQ29udGV4dC5mcm9tUHJvb2ZDb250ZXh0KHByb29mQ29udGV4dCk7IC8vL1xuXG4gIGNvbnN0IHVucXVhbGlmaWVkU3RhdGVtZW50Tm9kZXMgPSB1bnF1YWxpZmllZFN0YXRlbWVudE5vZGVzUXVlcnkoc3VicHJvb2ZOb2RlKSxcbiAgICAgICAgdW5xdWFsaWZpZWRTdGF0ZW1lbnRzVmVyaWZpZWQgPSB1bnF1YWxpZmllZFN0YXRlbWVudE5vZGVzLmV2ZXJ5KCh1bnF1YWxpZmllZFN0YXRlbWVudE5vZGUpID0+IHtcbiAgICAgICAgICBjb25zdCB1bnF1YWxpZmllZFN0YXRlbWVudFZlcmlmaWVkID0gdmVyaWZ5VW5xdWFsaWZpZWRTdGF0ZW1lbnQodW5xdWFsaWZpZWRTdGF0ZW1lbnROb2RlLCBwcm9vZkNvbnRleHQpO1xuXG4gICAgICAgICAgaWYgKHVucXVhbGlmaWVkU3RhdGVtZW50VmVyaWZpZWQpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgaWYgKHVucXVhbGlmaWVkU3RhdGVtZW50c1ZlcmlmaWVkKSB7XG4gICAgdW5xdWFsaWZpZWRTdGF0ZW1lbnROb2Rlcy5mb3JFYWNoKCh1bnF1YWxpZmllZFN0YXRlbWVudE5vZGUpID0+IHtcbiAgICAgIGNvbnN0IHN0YXRlbWVudE5vZGUgPSBzdGF0ZW1lbnROb2RlUXVlcnkodW5xdWFsaWZpZWRTdGF0ZW1lbnROb2RlKSxcbiAgICAgICAgICAgIHByb29mU3RlcCA9IFByb29mU3RlcC5mcm9tU3RhdGVtZW50Tm9kZShzdGF0ZW1lbnROb2RlKTtcblxuICAgICAgcHJvb2ZDb250ZXh0LmFkZFByb29mU3RlcChwcm9vZlN0ZXApO1xuICAgIH0pO1xuXG4gICAgY29uc3Qgc3ViRGVyaXZhdGlvbk5vZGUgPSBzdWJEZXJpdmF0aW9uTm9kZVF1ZXJ5KHN1YnByb29mTm9kZSksXG4gICAgICAgICAgc3ViRGVyaXZhdGlvblZlcmlmaWVkID0gdmVyaWZ5U3ViRGVyaXZhdGlvbihzdWJEZXJpdmF0aW9uTm9kZSwgcHJvb2ZDb250ZXh0KTtcblxuICAgIGlmIChzdWJEZXJpdmF0aW9uVmVyaWZpZWQpIHtcbiAgICAgIHN1YnByb29mVmVyaWZpZWQgPSB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBzdWJwcm9vZlZlcmlmaWVkO1xufVxuXG5mdW5jdGlvbiB2ZXJpZnlDaGlsZChjaGlsZE5vZGUsIHByb29mQ29udGV4dCkge1xuICBsZXQgY2hpbGRWZXJpZmllZDtcblxuICBjb25zdCBjaGlsZE5vZGVSdWxlTmFtZSA9IGNoaWxkTm9kZS5nZXRSdWxlTmFtZSgpO1xuXG4gIHN3aXRjaCAoY2hpbGROb2RlUnVsZU5hbWUpIHtcbiAgICBjYXNlIFNVQlBST09GX1JVTEVfTkFNRToge1xuICAgICAgY29uc3Qgc3VicHJvb2ZOb2RlID0gY2hpbGROb2RlLCAgLy8vXG4gICAgICAgICAgICBzdWJwcm9vZlZlcmlmaWVkID0gdmVyaWZ5U3VicHJvb2Yoc3VicHJvb2ZOb2RlLCBwcm9vZkNvbnRleHQpO1xuXG4gICAgICBpZiAoc3VicHJvb2ZWZXJpZmllZCkge1xuICAgICAgICBjb25zdCBwcm9vZlN0ZXAgPSBQcm9vZlN0ZXAuZnJvbVN1YnByb29mTm9kZShzdWJwcm9vZk5vZGUpO1xuXG4gICAgICAgIHByb29mQ29udGV4dC5hZGRQcm9vZlN0ZXAocHJvb2ZTdGVwKTtcblxuICAgICAgICBjaGlsZFZlcmlmaWVkID0gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgY2FzZSBRVUFMSUZJRURfU1RBVEVNRU5UX1JVTEVfTkFNRToge1xuICAgICAgY29uc3QgcXVhbGlmaWVkU3RhdGVtZW50Tm9kZSA9IGNoaWxkTm9kZSwgIC8vL1xuICAgICAgICAgICAgcXVhbGlmaWVkU3RhdGVtZW50VmVyaWZpZWQgPSB2ZXJpZnlRdWFsaWZpZWRTdGF0ZW1lbnQocXVhbGlmaWVkU3RhdGVtZW50Tm9kZSwgcHJvb2ZDb250ZXh0KTtcblxuICAgICAgaWYgKHF1YWxpZmllZFN0YXRlbWVudFZlcmlmaWVkKSB7XG4gICAgICAgIGNvbnN0IHN0YXRlbWVudE5vZGUgPSBzdGF0ZW1lbnROb2RlUXVlcnkocXVhbGlmaWVkU3RhdGVtZW50Tm9kZSksXG4gICAgICAgICAgICAgIHByb29mU3RlcCA9IFByb29mU3RlcC5mcm9tU3RhdGVtZW50Tm9kZShzdGF0ZW1lbnROb2RlKTtcblxuICAgICAgICBwcm9vZkNvbnRleHQuYWRkUHJvb2ZTdGVwKHByb29mU3RlcCk7XG5cbiAgICAgICAgY2hpbGRWZXJpZmllZCA9IHF1YWxpZmllZFN0YXRlbWVudFZlcmlmaWVkOyAvLy9cbiAgICAgIH1cblxuICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgY2FzZSBVTlFVQUxJRklFRF9TVEFURU1FTlRfUlVMRV9OQU1FOiB7XG4gICAgICBjb25zdCB1bnF1YWxpZmllZFN0YXRlbWVudE5vZGUgPSBjaGlsZE5vZGUsICAvLy9cbiAgICAgICAgICAgIHVucXVhbGlmaWVkU3RhdGVtZW50VmVyaWZpZWQgPSB2ZXJpZnlVbnF1YWxpZmllZFN0YXRlbWVudCh1bnF1YWxpZmllZFN0YXRlbWVudE5vZGUsIHByb29mQ29udGV4dCk7XG5cbiAgICAgIGlmICh1bnF1YWxpZmllZFN0YXRlbWVudFZlcmlmaWVkKSB7XG4gICAgICAgIGNvbnN0IHN0YXRlbWVudE5vZGUgPSBzdGF0ZW1lbnROb2RlUXVlcnkodW5xdWFsaWZpZWRTdGF0ZW1lbnROb2RlKSxcbiAgICAgICAgICAgICAgcHJvb2ZTdGVwID0gUHJvb2ZTdGVwLmZyb21TdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUpO1xuXG4gICAgICAgIHByb29mQ29udGV4dC5hZGRQcm9vZlN0ZXAocHJvb2ZTdGVwKTtcblxuICAgICAgICBjaGlsZFZlcmlmaWVkID0gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGNoaWxkVmVyaWZpZWQ7XG59XG4iXSwibmFtZXMiOlsidmVyaWZ5RGVyaXZhdGlvbiIsImNoaWxkTm9kZXNRdWVyeSIsIm5vZGVzUXVlcnkiLCJzdGF0ZW1lbnROb2RlUXVlcnkiLCJub2RlUXVlcnkiLCJzdWJEZXJpdmF0aW9uTm9kZVF1ZXJ5IiwidW5xdWFsaWZpZWRTdGF0ZW1lbnROb2Rlc1F1ZXJ5IiwiZGVyaXZhdGlvbk5vZGUiLCJwcm9vZkNvbnRleHQiLCJkZXJpdmF0aW9uVmVyaWZpZWQiLCJiZWdpbiIsImNoaWxkTm9kZXMiLCJldmVyeSIsImNoaWxkTm9kZSIsImNoaWxkVmVyaWZpZWQiLCJ2ZXJpZnlDaGlsZCIsImNvbXBsZXRlIiwiaGFsdCIsInZlcmlmeVN1YkRlcml2YXRpb24iLCJzdWJEZXJpdmF0aW9uTm9kZSIsInZlcmlmeVN1YnByb29mIiwic3VicHJvb2ZOb2RlIiwic3VicHJvb2ZWZXJpZmllZCIsIlByb29mQ29udGV4dCIsImZyb21Qcm9vZkNvbnRleHQiLCJ1bnF1YWxpZmllZFN0YXRlbWVudE5vZGVzIiwidW5xdWFsaWZpZWRTdGF0ZW1lbnRzVmVyaWZpZWQiLCJ1bnF1YWxpZmllZFN0YXRlbWVudE5vZGUiLCJ1bnF1YWxpZmllZFN0YXRlbWVudFZlcmlmaWVkIiwidmVyaWZ5VW5xdWFsaWZpZWRTdGF0ZW1lbnQiLCJmb3JFYWNoIiwic3RhdGVtZW50Tm9kZSIsInByb29mU3RlcCIsIlByb29mU3RlcCIsImZyb21TdGF0ZW1lbnROb2RlIiwiYWRkUHJvb2ZTdGVwIiwic3ViRGVyaXZhdGlvblZlcmlmaWVkIiwiY2hpbGROb2RlUnVsZU5hbWUiLCJnZXRSdWxlTmFtZSIsIlNVQlBST09GX1JVTEVfTkFNRSIsImZyb21TdWJwcm9vZk5vZGUiLCJRVUFMSUZJRURfU1RBVEVNRU5UX1JVTEVfTkFNRSIsInF1YWxpZmllZFN0YXRlbWVudE5vZGUiLCJxdWFsaWZpZWRTdGF0ZW1lbnRWZXJpZmllZCIsInZlcmlmeVF1YWxpZmllZFN0YXRlbWVudCIsIlVOUVVBTElGSUVEX1NUQVRFTUVOVF9SVUxFX05BTUUiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQWVBOzs7ZUFBd0JBOzs7MERBYkY7MkRBQ0c7OERBQ1k7Z0VBQ0U7cUJBRUQ7eUJBQzZEOzs7Ozs7QUFFbkcsSUFBTUMsa0JBQWtCQyxJQUFBQSxpQkFBVSxFQUFDLGdDQUM3QkMscUJBQXFCQyxJQUFBQSxnQkFBUyxFQUFDLHdEQUMvQkMseUJBQXlCRCxJQUFBQSxnQkFBUyxFQUFDLDRCQUNuQ0UsaUNBQWlDSixJQUFBQSxpQkFBVSxFQUFDO0FBRW5DLFNBQVNGLGlCQUFpQk8sY0FBYyxFQUFFQyxZQUFZLEVBQUU7SUFDckUsSUFBSUM7SUFFSkQsYUFBYUUsS0FBSyxDQUFDSDtJQUVuQixJQUFNSSxhQUFhVixnQkFBZ0JNO0lBRW5DRSxxQkFBcUJFLFdBQVdDLEtBQUssQ0FBQyxTQUFDQyxXQUFjO1FBQ25ELElBQU1DLGdCQUFnQkMsWUFBWUYsV0FBV0w7UUFFN0MsSUFBSU0sZUFBZTtZQUNqQixPQUFPLElBQUk7UUFDYixDQUFDO0lBQ0g7SUFFQUwscUJBQ0VELGFBQWFRLFFBQVEsQ0FBQ1Qsa0JBQ3BCQyxhQUFhUyxJQUFJLENBQUNWLGVBQWU7SUFFckMsT0FBT0U7QUFDVDtBQUVBLFNBQVNTLG9CQUFvQkMsaUJBQWlCLEVBQUVYLFlBQVksRUFBRTtJQUM1RCxJQUFJQztJQUVKRCxhQUFhRSxLQUFLLENBQUNTO0lBRW5CLElBQU1SLGFBQWFWLGdCQUFnQmtCO0lBRW5DVixxQkFBcUJFLFdBQVdDLEtBQUssQ0FBQyxTQUFDQyxXQUFjO1FBQ25ELElBQU1DLGdCQUFnQkMsWUFBWUYsV0FBV0w7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