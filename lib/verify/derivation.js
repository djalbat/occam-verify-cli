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
    var derivationVerified;
    proofContext.begin(derivationNode);
    proofContext.setDerived();
    var derivationChildNodes = derivationChildNodesQuery(derivationNode);
    derivationVerified = derivationChildNodes.every(function(derivationChildNode) {
        var derivationChildVerified = verifyDerivationChild(derivationChildNode, proofContext);
        if (derivationChildVerified) {
            return true;
        }
    });
    proofContext.setDerived();
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92ZXJpZnkvZGVyaXZhdGlvbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFByb29mU3RlcCBmcm9tIFwiLi4vc3RlcC9wcm9vZlwiO1xuaW1wb3J0IFByb29mQ29udGV4dCBmcm9tIFwiLi4vY29udGV4dC9wcm9vZlwiO1xuaW1wb3J0IHZlcmlmeVF1YWxpZmllZFN0YXRlbWVudCBmcm9tIFwiLi4vdmVyaWZ5L3N0YXRlbWVudC9xdWFsaWZpZWRcIjtcbmltcG9ydCB2ZXJpZnlVbnF1YWxpZmllZFN0YXRlbWVudCBmcm9tIFwiLi4vdmVyaWZ5L3N0YXRlbWVudC91bnF1YWxpZmllZFwiO1xuXG5pbXBvcnQgeyBub2RlUXVlcnksIG5vZGVzUXVlcnkgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5pbXBvcnQgeyBTVUJQUk9PRl9SVUxFX05BTUUsIFFVQUxJRklFRF9TVEFURU1FTlRfUlVMRV9OQU1FLCBVTlFVQUxJRklFRF9TVEFURU1FTlRfUlVMRV9OQU1FIH0gZnJvbSBcIi4uL3J1bGVOYW1lc1wiO1xuXG5jb25zdCBzdGF0ZW1lbnROb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvcXVhbGlmaWVkU3RhdGVtZW50fHVucXVhbGlmaWVkU3RhdGVtZW50L3N0YXRlbWVudCFcIiksXG4gICAgICBkZXJpdmF0aW9uTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3N1YnByb29mL2Rlcml2YXRpb258YWJyaWRnZWREZXJpdmF0aW9uIVwiKSwgIC8vL1xuICAgICAgZGVyaXZhdGlvbkNoaWxkTm9kZXNRdWVyeSA9IG5vZGVzUXVlcnkoXCIvZGVyaXZhdGlvbnxhYnJpZGdlZERlcml2YXRpb24vKlwiKSxcbiAgICAgIHVucXVhbGlmaWVkU3RhdGVtZW50Tm9kZXNRdWVyeSA9IG5vZGVzUXVlcnkoXCIvc3VicHJvb2YvdW5xdWFsaWZpZWRTdGF0ZW1lbnRcIilcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdmVyaWZ5RGVyaXZhdGlvbihkZXJpdmF0aW9uTm9kZSwgcHJvb2ZDb250ZXh0KSB7XG4gIGxldCBkZXJpdmF0aW9uVmVyaWZpZWQ7XG5cbiAgcHJvb2ZDb250ZXh0LmJlZ2luKGRlcml2YXRpb25Ob2RlKTtcblxuICBwcm9vZkNvbnRleHQuc2V0RGVyaXZlZCgpO1xuXG4gIGNvbnN0IGRlcml2YXRpb25DaGlsZE5vZGVzID0gZGVyaXZhdGlvbkNoaWxkTm9kZXNRdWVyeShkZXJpdmF0aW9uTm9kZSk7XG5cbiAgZGVyaXZhdGlvblZlcmlmaWVkID0gZGVyaXZhdGlvbkNoaWxkTm9kZXMuZXZlcnkoKGRlcml2YXRpb25DaGlsZE5vZGUpID0+IHsgIC8vL1xuICAgIGNvbnN0IGRlcml2YXRpb25DaGlsZFZlcmlmaWVkID0gdmVyaWZ5RGVyaXZhdGlvbkNoaWxkKGRlcml2YXRpb25DaGlsZE5vZGUsIHByb29mQ29udGV4dCk7XG5cbiAgICBpZiAoZGVyaXZhdGlvbkNoaWxkVmVyaWZpZWQpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfSk7XG5cbiAgcHJvb2ZDb250ZXh0LnNldERlcml2ZWQoKTtcblxuICBkZXJpdmF0aW9uVmVyaWZpZWQgP1xuICAgIHByb29mQ29udGV4dC5jb21wbGV0ZShkZXJpdmF0aW9uTm9kZSkgOlxuICAgICAgcHJvb2ZDb250ZXh0LmhhbHQoZGVyaXZhdGlvbk5vZGUpO1xuXG4gIHJldHVybiBkZXJpdmF0aW9uVmVyaWZpZWQ7XG59XG5cbmZ1bmN0aW9uIHZlcmlmeURlcml2YXRpb25DaGlsZChkZXJpdmF0aW9uQ2hpbGROb2RlLCBwcm9vZkNvbnRleHQpIHtcbiAgbGV0IGRlcml2YXRpb25DaGlsZFZlcmlmaWVkO1xuXG4gIGNvbnN0IHJ1bGVOYW1lID0gZGVyaXZhdGlvbkNoaWxkTm9kZS5nZXRSdWxlTmFtZSgpO1xuXG4gIHN3aXRjaCAocnVsZU5hbWUpIHtcbiAgICBjYXNlIFNVQlBST09GX1JVTEVfTkFNRToge1xuICAgICAgY29uc3Qgc3VicHJvb2ZOb2RlID0gZGVyaXZhdGlvbkNoaWxkTm9kZSwgIC8vL1xuICAgICAgICAgICAgc3VicHJvb2ZWZXJpZmllZCA9IHZlcmlmeVN1YnByb29mKHN1YnByb29mTm9kZSwgcHJvb2ZDb250ZXh0KTtcblxuICAgICAgaWYgKHN1YnByb29mVmVyaWZpZWQpIHtcbiAgICAgICAgY29uc3QgcHJvb2ZTdGVwID0gUHJvb2ZTdGVwLmZyb21TdWJwcm9vZk5vZGUoc3VicHJvb2ZOb2RlKTtcblxuICAgICAgICBwcm9vZkNvbnRleHQuYWRkUHJvb2ZTdGVwKHByb29mU3RlcCk7XG5cbiAgICAgICAgZGVyaXZhdGlvbkNoaWxkVmVyaWZpZWQgPSB0cnVlO1xuICAgICAgfVxuXG4gICAgICBicmVhaztcbiAgICB9XG5cbiAgICBjYXNlIFFVQUxJRklFRF9TVEFURU1FTlRfUlVMRV9OQU1FOiB7XG4gICAgICBjb25zdCBxdWFsaWZpZWRTdGF0ZW1lbnROb2RlID0gZGVyaXZhdGlvbkNoaWxkTm9kZSwgIC8vL1xuICAgICAgICAgICAgcXVhbGlmaWVkU3RhdGVtZW50VmVyaWZpZWQgPSB2ZXJpZnlRdWFsaWZpZWRTdGF0ZW1lbnQocXVhbGlmaWVkU3RhdGVtZW50Tm9kZSwgcHJvb2ZDb250ZXh0KTtcblxuICAgICAgaWYgKHF1YWxpZmllZFN0YXRlbWVudFZlcmlmaWVkKSB7XG4gICAgICAgIGNvbnN0IHN0YXRlbWVudE5vZGUgPSBzdGF0ZW1lbnROb2RlUXVlcnkocXVhbGlmaWVkU3RhdGVtZW50Tm9kZSksXG4gICAgICAgICAgICAgIHByb29mU3RlcCA9IFByb29mU3RlcC5mcm9tU3RhdGVtZW50Tm9kZShzdGF0ZW1lbnROb2RlKTtcblxuICAgICAgICBwcm9vZkNvbnRleHQuYWRkUHJvb2ZTdGVwKHByb29mU3RlcCk7XG5cbiAgICAgICAgZGVyaXZhdGlvbkNoaWxkVmVyaWZpZWQgPSBxdWFsaWZpZWRTdGF0ZW1lbnRWZXJpZmllZDsgLy8vXG4gICAgICB9XG5cbiAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIGNhc2UgVU5RVUFMSUZJRURfU1RBVEVNRU5UX1JVTEVfTkFNRToge1xuICAgICAgY29uc3QgdW5xdWFsaWZpZWRTdGF0ZW1lbnROb2RlID0gZGVyaXZhdGlvbkNoaWxkTm9kZSwgIC8vL1xuICAgICAgICAgICAgdW5xdWFsaWZpZWRTdGF0ZW1lbnRWZXJpZmllZCA9IHZlcmlmeVVucXVhbGlmaWVkU3RhdGVtZW50KHVucXVhbGlmaWVkU3RhdGVtZW50Tm9kZSwgcHJvb2ZDb250ZXh0KTtcblxuICAgICAgaWYgKHVucXVhbGlmaWVkU3RhdGVtZW50VmVyaWZpZWQpIHtcbiAgICAgICAgY29uc3Qgc3RhdGVtZW50Tm9kZSA9IHN0YXRlbWVudE5vZGVRdWVyeSh1bnF1YWxpZmllZFN0YXRlbWVudE5vZGUpLFxuICAgICAgICAgICAgICBwcm9vZlN0ZXAgPSBQcm9vZlN0ZXAuZnJvbVN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSk7XG5cbiAgICAgICAgcHJvb2ZDb250ZXh0LmFkZFByb29mU3RlcChwcm9vZlN0ZXApO1xuXG4gICAgICAgIGRlcml2YXRpb25DaGlsZFZlcmlmaWVkID0gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGRlcml2YXRpb25DaGlsZFZlcmlmaWVkO1xufVxuXG5mdW5jdGlvbiB2ZXJpZnlTdWJwcm9vZihzdWJwcm9vZk5vZGUsIHByb29mQ29udGV4dCkge1xuICBsZXQgc3VicHJvb2ZWZXJpZmllZCA9IGZhbHNlO1xuXG4gIHByb29mQ29udGV4dCA9IFByb29mQ29udGV4dC5mcm9tUHJvb2ZDb250ZXh0KHByb29mQ29udGV4dCk7IC8vL1xuXG4gIGNvbnN0IHVucXVhbGlmaWVkU3RhdGVtZW50Tm9kZXMgPSB1bnF1YWxpZmllZFN0YXRlbWVudE5vZGVzUXVlcnkoc3VicHJvb2ZOb2RlKSxcbiAgICAgICAgdW5xdWFsaWZpZWRTdGF0ZW1lbnRzVmVyaWZpZWQgPSB1bnF1YWxpZmllZFN0YXRlbWVudE5vZGVzLmV2ZXJ5KCh1bnF1YWxpZmllZFN0YXRlbWVudE5vZGUpID0+IHtcbiAgICAgICAgICBjb25zdCB1bnF1YWxpZmllZFN0YXRlbWVudFZlcmlmaWVkID0gdmVyaWZ5VW5xdWFsaWZpZWRTdGF0ZW1lbnQodW5xdWFsaWZpZWRTdGF0ZW1lbnROb2RlLCBwcm9vZkNvbnRleHQpO1xuXG4gICAgICAgICAgaWYgKHVucXVhbGlmaWVkU3RhdGVtZW50VmVyaWZpZWQpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgaWYgKHVucXVhbGlmaWVkU3RhdGVtZW50c1ZlcmlmaWVkKSB7XG4gICAgdW5xdWFsaWZpZWRTdGF0ZW1lbnROb2Rlcy5mb3JFYWNoKCh1bnF1YWxpZmllZFN0YXRlbWVudE5vZGUpID0+IHtcbiAgICAgIGNvbnN0IHN0YXRlbWVudE5vZGUgPSBzdGF0ZW1lbnROb2RlUXVlcnkodW5xdWFsaWZpZWRTdGF0ZW1lbnROb2RlKSxcbiAgICAgICAgICAgIHByb29mU3RlcCA9IFByb29mU3RlcC5mcm9tU3RhdGVtZW50Tm9kZShzdGF0ZW1lbnROb2RlKTtcblxuICAgICAgcHJvb2ZDb250ZXh0LmFkZFByb29mU3RlcChwcm9vZlN0ZXApO1xuICAgIH0pO1xuXG4gICAgY29uc3QgZGVyaXZhdGlvbk5vZGUgPSBkZXJpdmF0aW9uTm9kZVF1ZXJ5KHN1YnByb29mTm9kZSksXG4gICAgICAgICAgZGVyaXZhdGlvblZlcmlmaWVkID0gdmVyaWZ5RGVyaXZhdGlvbihkZXJpdmF0aW9uTm9kZSwgcHJvb2ZDb250ZXh0KTtcblxuICAgIGlmIChkZXJpdmF0aW9uVmVyaWZpZWQpIHtcbiAgICAgIHN1YnByb29mVmVyaWZpZWQgPSB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBzdWJwcm9vZlZlcmlmaWVkO1xufVxuIl0sIm5hbWVzIjpbInZlcmlmeURlcml2YXRpb24iLCJzdGF0ZW1lbnROb2RlUXVlcnkiLCJub2RlUXVlcnkiLCJkZXJpdmF0aW9uTm9kZVF1ZXJ5IiwiZGVyaXZhdGlvbkNoaWxkTm9kZXNRdWVyeSIsIm5vZGVzUXVlcnkiLCJ1bnF1YWxpZmllZFN0YXRlbWVudE5vZGVzUXVlcnkiLCJkZXJpdmF0aW9uTm9kZSIsInByb29mQ29udGV4dCIsImRlcml2YXRpb25WZXJpZmllZCIsImJlZ2luIiwic2V0RGVyaXZlZCIsImRlcml2YXRpb25DaGlsZE5vZGVzIiwiZXZlcnkiLCJkZXJpdmF0aW9uQ2hpbGROb2RlIiwiZGVyaXZhdGlvbkNoaWxkVmVyaWZpZWQiLCJ2ZXJpZnlEZXJpdmF0aW9uQ2hpbGQiLCJjb21wbGV0ZSIsImhhbHQiLCJydWxlTmFtZSIsImdldFJ1bGVOYW1lIiwiU1VCUFJPT0ZfUlVMRV9OQU1FIiwic3VicHJvb2ZOb2RlIiwic3VicHJvb2ZWZXJpZmllZCIsInZlcmlmeVN1YnByb29mIiwicHJvb2ZTdGVwIiwiUHJvb2ZTdGVwIiwiZnJvbVN1YnByb29mTm9kZSIsImFkZFByb29mU3RlcCIsIlFVQUxJRklFRF9TVEFURU1FTlRfUlVMRV9OQU1FIiwicXVhbGlmaWVkU3RhdGVtZW50Tm9kZSIsInF1YWxpZmllZFN0YXRlbWVudFZlcmlmaWVkIiwidmVyaWZ5UXVhbGlmaWVkU3RhdGVtZW50Iiwic3RhdGVtZW50Tm9kZSIsImZyb21TdGF0ZW1lbnROb2RlIiwiVU5RVUFMSUZJRURfU1RBVEVNRU5UX1JVTEVfTkFNRSIsInVucXVhbGlmaWVkU3RhdGVtZW50Tm9kZSIsInVucXVhbGlmaWVkU3RhdGVtZW50VmVyaWZpZWQiLCJ2ZXJpZnlVbnF1YWxpZmllZFN0YXRlbWVudCIsIlByb29mQ29udGV4dCIsImZyb21Qcm9vZkNvbnRleHQiLCJ1bnF1YWxpZmllZFN0YXRlbWVudE5vZGVzIiwidW5xdWFsaWZpZWRTdGF0ZW1lbnRzVmVyaWZpZWQiLCJmb3JFYWNoIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFlQTs7O2VBQXdCQTs7OzBEQWJGOzJEQUNHOzhEQUNZO2dFQUNFO3FCQUVEO3lCQUM2RDs7Ozs7O0FBRW5HLElBQU1DLHFCQUFxQkMsSUFB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