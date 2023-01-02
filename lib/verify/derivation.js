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
var statementNodeQuery = (0, _query.nodeQuery)("/qualifiedStatement|unqualifiedStatement/statement!"), derivationNodeQuery = (0, _query.nodeQuery)("/subproof/derivation|abridgedDerivation!"), derivationChildNodesQuery = (0, _query.nodesQuery)("/derivation|abridgedDerivation/*"), unqualifiedStatementNodesQuery = (0, _query.nodesQuery)("/subproof/unqualifiedStatement");
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
                    var proofStep = _proof.default.fromSubproofNode(subproofNode);
                    proofContext.addProofStep(proofStep);
                    derivationChildVerified = true;
                }
                break;
            }
        case _ruleNames.QUALIFIED_STATEMENT_RULE_NAME:
            {
                var qualifiedStatementNode = derivationChildNode, qualifiedStatementVerified = (0, _qualified.default)(qualifiedStatementNode, proofContext);
                if (qualifiedStatementVerified) {
                    var statementNode = statementNodeQuery(qualifiedStatementNode), proofStep1 = _proof.default.fromStatementNode(statementNode);
                    proofContext.addProofStep(proofStep1);
                    derivationChildVerified = qualifiedStatementVerified; ///
                }
                break;
            }
        case _ruleNames.UNQUALIFIED_STATEMENT_RULE_NAME:
            {
                var unqualifiedStatementNode = derivationChildNode, unqualifiedStatementVerified = (0, _unqualified.default)(unqualifiedStatementNode, proofContext);
                if (unqualifiedStatementVerified) {
                    var statementNode1 = statementNodeQuery(unqualifiedStatementNode), proofStep2 = _proof.default.fromStatementNode(statementNode1);
                    proofContext.addProofStep(proofStep2);
                    derivationChildVerified = true;
                }
                break;
            }
    }
    return derivationChildVerified;
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
        var derivationNode = derivationNodeQuery(subproofNode), derivationVerified = verifyDerivation(derivationNode, proofContext);
        if (derivationVerified) {
            subproofVerified = true;
        }
    }
    return subproofVerified;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92ZXJpZnkvZGVyaXZhdGlvbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFByb29mU3RlcCBmcm9tIFwiLi4vc3RlcC9wcm9vZlwiO1xuaW1wb3J0IFByb29mQ29udGV4dCBmcm9tIFwiLi4vY29udGV4dC9wcm9vZlwiO1xuaW1wb3J0IHZlcmlmeVF1YWxpZmllZFN0YXRlbWVudCBmcm9tIFwiLi4vdmVyaWZ5L3N0YXRlbWVudC9xdWFsaWZpZWRcIjtcbmltcG9ydCB2ZXJpZnlVbnF1YWxpZmllZFN0YXRlbWVudCBmcm9tIFwiLi4vdmVyaWZ5L3N0YXRlbWVudC91bnF1YWxpZmllZFwiO1xuXG5pbXBvcnQgeyBub2RlUXVlcnksIG5vZGVzUXVlcnkgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5pbXBvcnQgeyBTVUJQUk9PRl9SVUxFX05BTUUsIFFVQUxJRklFRF9TVEFURU1FTlRfUlVMRV9OQU1FLCBVTlFVQUxJRklFRF9TVEFURU1FTlRfUlVMRV9OQU1FIH0gZnJvbSBcIi4uL3J1bGVOYW1lc1wiO1xuXG5jb25zdCBzdGF0ZW1lbnROb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvcXVhbGlmaWVkU3RhdGVtZW50fHVucXVhbGlmaWVkU3RhdGVtZW50L3N0YXRlbWVudCFcIiksXG4gICAgICBkZXJpdmF0aW9uTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3N1YnByb29mL2Rlcml2YXRpb258YWJyaWRnZWREZXJpdmF0aW9uIVwiKSwgIC8vL1xuICAgICAgZGVyaXZhdGlvbkNoaWxkTm9kZXNRdWVyeSA9IG5vZGVzUXVlcnkoXCIvZGVyaXZhdGlvbnxhYnJpZGdlZERlcml2YXRpb24vKlwiKSxcbiAgICAgIHVucXVhbGlmaWVkU3RhdGVtZW50Tm9kZXNRdWVyeSA9IG5vZGVzUXVlcnkoXCIvc3VicHJvb2YvdW5xdWFsaWZpZWRTdGF0ZW1lbnRcIilcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdmVyaWZ5RGVyaXZhdGlvbihkZXJpdmF0aW9uTm9kZSwgcHJvb2ZDb250ZXh0KSB7XG4gIGxldCBkZXJpdmF0aW9uVmVyaWZpZWQsXG4gICAgICBkZXJpdmVkO1xuXG4gIHByb29mQ29udGV4dC5iZWdpbihkZXJpdmF0aW9uTm9kZSk7XG5cbiAgZGVyaXZlZCA9IHRydWU7XG5cbiAgcHJvb2ZDb250ZXh0LnNldERlcml2ZWQoZGVyaXZlZCk7XG5cbiAgY29uc3QgZGVyaXZhdGlvbkNoaWxkTm9kZXMgPSBkZXJpdmF0aW9uQ2hpbGROb2Rlc1F1ZXJ5KGRlcml2YXRpb25Ob2RlKTtcblxuICBkZXJpdmF0aW9uVmVyaWZpZWQgPSBkZXJpdmF0aW9uQ2hpbGROb2Rlcy5ldmVyeSgoZGVyaXZhdGlvbkNoaWxkTm9kZSkgPT4geyAgLy8vXG4gICAgY29uc3QgZGVyaXZhdGlvbkNoaWxkVmVyaWZpZWQgPSB2ZXJpZnlEZXJpdmF0aW9uQ2hpbGQoZGVyaXZhdGlvbkNoaWxkTm9kZSwgcHJvb2ZDb250ZXh0KTtcblxuICAgIGlmIChkZXJpdmF0aW9uQ2hpbGRWZXJpZmllZCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9KTtcblxuICBkZXJpdmVkID0gZmFsc2U7XG5cbiAgcHJvb2ZDb250ZXh0LnNldERlcml2ZWQoZGVyaXZlZCk7XG5cbiAgZGVyaXZhdGlvblZlcmlmaWVkID9cbiAgICBwcm9vZkNvbnRleHQuY29tcGxldGUoZGVyaXZhdGlvbk5vZGUpIDpcbiAgICAgIHByb29mQ29udGV4dC5oYWx0KGRlcml2YXRpb25Ob2RlKTtcblxuICByZXR1cm4gZGVyaXZhdGlvblZlcmlmaWVkO1xufVxuXG5mdW5jdGlvbiB2ZXJpZnlEZXJpdmF0aW9uQ2hpbGQoZGVyaXZhdGlvbkNoaWxkTm9kZSwgcHJvb2ZDb250ZXh0KSB7XG4gIGxldCBkZXJpdmF0aW9uQ2hpbGRWZXJpZmllZDtcblxuICBjb25zdCBydWxlTmFtZSA9IGRlcml2YXRpb25DaGlsZE5vZGUuZ2V0UnVsZU5hbWUoKTtcblxuICBzd2l0Y2ggKHJ1bGVOYW1lKSB7XG4gICAgY2FzZSBTVUJQUk9PRl9SVUxFX05BTUU6IHtcbiAgICAgIGNvbnN0IHN1YnByb29mTm9kZSA9IGRlcml2YXRpb25DaGlsZE5vZGUsICAvLy9cbiAgICAgICAgICAgIHN1YnByb29mVmVyaWZpZWQgPSB2ZXJpZnlTdWJwcm9vZihzdWJwcm9vZk5vZGUsIHByb29mQ29udGV4dCk7XG5cbiAgICAgIGlmIChzdWJwcm9vZlZlcmlmaWVkKSB7XG4gICAgICAgIGNvbnN0IHByb29mU3RlcCA9IFByb29mU3RlcC5mcm9tU3VicHJvb2ZOb2RlKHN1YnByb29mTm9kZSk7XG5cbiAgICAgICAgcHJvb2ZDb250ZXh0LmFkZFByb29mU3RlcChwcm9vZlN0ZXApO1xuXG4gICAgICAgIGRlcml2YXRpb25DaGlsZFZlcmlmaWVkID0gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgY2FzZSBRVUFMSUZJRURfU1RBVEVNRU5UX1JVTEVfTkFNRToge1xuICAgICAgY29uc3QgcXVhbGlmaWVkU3RhdGVtZW50Tm9kZSA9IGRlcml2YXRpb25DaGlsZE5vZGUsICAvLy9cbiAgICAgICAgICAgIHF1YWxpZmllZFN0YXRlbWVudFZlcmlmaWVkID0gdmVyaWZ5UXVhbGlmaWVkU3RhdGVtZW50KHF1YWxpZmllZFN0YXRlbWVudE5vZGUsIHByb29mQ29udGV4dCk7XG5cbiAgICAgIGlmIChxdWFsaWZpZWRTdGF0ZW1lbnRWZXJpZmllZCkge1xuICAgICAgICBjb25zdCBzdGF0ZW1lbnROb2RlID0gc3RhdGVtZW50Tm9kZVF1ZXJ5KHF1YWxpZmllZFN0YXRlbWVudE5vZGUpLFxuICAgICAgICAgICAgICBwcm9vZlN0ZXAgPSBQcm9vZlN0ZXAuZnJvbVN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSk7XG5cbiAgICAgICAgcHJvb2ZDb250ZXh0LmFkZFByb29mU3RlcChwcm9vZlN0ZXApO1xuXG4gICAgICAgIGRlcml2YXRpb25DaGlsZFZlcmlmaWVkID0gcXVhbGlmaWVkU3RhdGVtZW50VmVyaWZpZWQ7IC8vL1xuICAgICAgfVxuXG4gICAgICBicmVhaztcbiAgICB9XG5cbiAgICBjYXNlIFVOUVVBTElGSUVEX1NUQVRFTUVOVF9SVUxFX05BTUU6IHtcbiAgICAgIGNvbnN0IHVucXVhbGlmaWVkU3RhdGVtZW50Tm9kZSA9IGRlcml2YXRpb25DaGlsZE5vZGUsICAvLy9cbiAgICAgICAgICAgIHVucXVhbGlmaWVkU3RhdGVtZW50VmVyaWZpZWQgPSB2ZXJpZnlVbnF1YWxpZmllZFN0YXRlbWVudCh1bnF1YWxpZmllZFN0YXRlbWVudE5vZGUsIHByb29mQ29udGV4dCk7XG5cbiAgICAgIGlmICh1bnF1YWxpZmllZFN0YXRlbWVudFZlcmlmaWVkKSB7XG4gICAgICAgIGNvbnN0IHN0YXRlbWVudE5vZGUgPSBzdGF0ZW1lbnROb2RlUXVlcnkodW5xdWFsaWZpZWRTdGF0ZW1lbnROb2RlKSxcbiAgICAgICAgICAgICAgcHJvb2ZTdGVwID0gUHJvb2ZTdGVwLmZyb21TdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUpO1xuXG4gICAgICAgIHByb29mQ29udGV4dC5hZGRQcm9vZlN0ZXAocHJvb2ZTdGVwKTtcblxuICAgICAgICBkZXJpdmF0aW9uQ2hpbGRWZXJpZmllZCA9IHRydWU7XG4gICAgICB9XG5cbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBkZXJpdmF0aW9uQ2hpbGRWZXJpZmllZDtcbn1cblxuZnVuY3Rpb24gdmVyaWZ5U3VicHJvb2Yoc3VicHJvb2ZOb2RlLCBwcm9vZkNvbnRleHQpIHtcbiAgbGV0IHN1YnByb29mVmVyaWZpZWQgPSBmYWxzZTtcblxuICBwcm9vZkNvbnRleHQgPSBQcm9vZkNvbnRleHQuZnJvbVByb29mQ29udGV4dChwcm9vZkNvbnRleHQpOyAvLy9cblxuICBjb25zdCB1bnF1YWxpZmllZFN0YXRlbWVudE5vZGVzID0gdW5xdWFsaWZpZWRTdGF0ZW1lbnROb2Rlc1F1ZXJ5KHN1YnByb29mTm9kZSksXG4gICAgICAgIHVucXVhbGlmaWVkU3RhdGVtZW50c1ZlcmlmaWVkID0gdW5xdWFsaWZpZWRTdGF0ZW1lbnROb2Rlcy5ldmVyeSgodW5xdWFsaWZpZWRTdGF0ZW1lbnROb2RlKSA9PiB7XG4gICAgICAgICAgY29uc3QgdW5xdWFsaWZpZWRTdGF0ZW1lbnRWZXJpZmllZCA9IHZlcmlmeVVucXVhbGlmaWVkU3RhdGVtZW50KHVucXVhbGlmaWVkU3RhdGVtZW50Tm9kZSwgcHJvb2ZDb250ZXh0KTtcblxuICAgICAgICAgIGlmICh1bnF1YWxpZmllZFN0YXRlbWVudFZlcmlmaWVkKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gIGlmICh1bnF1YWxpZmllZFN0YXRlbWVudHNWZXJpZmllZCkge1xuICAgIHVucXVhbGlmaWVkU3RhdGVtZW50Tm9kZXMuZm9yRWFjaCgodW5xdWFsaWZpZWRTdGF0ZW1lbnROb2RlKSA9PiB7XG4gICAgICBjb25zdCBzdGF0ZW1lbnROb2RlID0gc3RhdGVtZW50Tm9kZVF1ZXJ5KHVucXVhbGlmaWVkU3RhdGVtZW50Tm9kZSksXG4gICAgICAgICAgICBwcm9vZlN0ZXAgPSBQcm9vZlN0ZXAuZnJvbVN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSk7XG5cbiAgICAgIHByb29mQ29udGV4dC5hZGRQcm9vZlN0ZXAocHJvb2ZTdGVwKTtcbiAgICB9KTtcblxuICAgIGNvbnN0IGRlcml2YXRpb25Ob2RlID0gZGVyaXZhdGlvbk5vZGVRdWVyeShzdWJwcm9vZk5vZGUpLFxuICAgICAgICAgIGRlcml2YXRpb25WZXJpZmllZCA9IHZlcmlmeURlcml2YXRpb24oZGVyaXZhdGlvbk5vZGUsIHByb29mQ29udGV4dCk7XG5cbiAgICBpZiAoZGVyaXZhdGlvblZlcmlmaWVkKSB7XG4gICAgICBzdWJwcm9vZlZlcmlmaWVkID0gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gc3VicHJvb2ZWZXJpZmllZDtcbn1cbiJdLCJuYW1lcyI6WyJ2ZXJpZnlEZXJpdmF0aW9uIiwic3RhdGVtZW50Tm9kZVF1ZXJ5Iiwibm9kZVF1ZXJ5IiwiZGVyaXZhdGlvbk5vZGVRdWVyeSIsImRlcml2YXRpb25DaGlsZE5vZGVzUXVlcnkiLCJub2Rlc1F1ZXJ5IiwidW5xdWFsaWZpZWRTdGF0ZW1lbnROb2Rlc1F1ZXJ5IiwiZGVyaXZhdGlvbk5vZGUiLCJwcm9vZkNvbnRleHQiLCJkZXJpdmF0aW9uVmVyaWZpZWQiLCJkZXJpdmVkIiwiYmVnaW4iLCJzZXREZXJpdmVkIiwiZGVyaXZhdGlvbkNoaWxkTm9kZXMiLCJldmVyeSIsImRlcml2YXRpb25DaGlsZE5vZGUiLCJkZXJpdmF0aW9uQ2hpbGRWZXJpZmllZCIsInZlcmlmeURlcml2YXRpb25DaGlsZCIsImNvbXBsZXRlIiwiaGFsdCIsInJ1bGVOYW1lIiwiZ2V0UnVsZU5hbWUiLCJTVUJQUk9PRl9SVUxFX05BTUUiLCJzdWJwcm9vZk5vZGUiLCJzdWJwcm9vZlZlcmlmaWVkIiwidmVyaWZ5U3VicHJvb2YiLCJwcm9vZlN0ZXAiLCJQcm9vZlN0ZXAiLCJmcm9tU3VicHJvb2ZOb2RlIiwiYWRkUHJvb2ZTdGVwIiwiUVVBTElGSUVEX1NUQVRFTUVOVF9SVUxFX05BTUUiLCJxdWFsaWZpZWRTdGF0ZW1lbnROb2RlIiwicXVhbGlmaWVkU3RhdGVtZW50VmVyaWZpZWQiLCJ2ZXJpZnlRdWFsaWZpZWRTdGF0ZW1lbnQiLCJzdGF0ZW1lbnROb2RlIiwiZnJvbVN0YXRlbWVudE5vZGUiLCJVTlFVQUxJRklFRF9TVEFURU1FTlRfUlVMRV9OQU1FIiwidW5xdWFsaWZpZWRTdGF0ZW1lbnROb2RlIiwidW5xdWFsaWZpZWRTdGF0ZW1lbnRWZXJpZmllZCIsInZlcmlmeVVucXVhbGlmaWVkU3RhdGVtZW50IiwiUHJvb2ZDb250ZXh0IiwiZnJvbVByb29mQ29udGV4dCIsInVucXVhbGlmaWVkU3RhdGVtZW50Tm9kZXMiLCJ1bnF1YWxpZmllZFN0YXRlbWVudHNWZXJpZmllZCIsImZvckVhY2giXSwibWFwcGluZ3MiOiJBQUFBOzs7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