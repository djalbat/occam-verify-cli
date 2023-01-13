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
var _antecedent = /*#__PURE__*/ _interopRequireDefault(require("./antecedent"));
var _qualified = /*#__PURE__*/ _interopRequireDefault(require("../verify/statement/qualified"));
var _unqualified = /*#__PURE__*/ _interopRequireDefault(require("../verify/statement/unqualified"));
var _query = require("../utilities/query");
var _ruleNames = require("../ruleNames");
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var childNodesQuery = (0, _query.nodesQuery)("/derivation|subDerivation/*"), statementNodeQuery = (0, _query.nodeQuery)("/qualifiedStatement|unqualifiedStatement/statement!"), antecedentNodesQuery = (0, _query.nodesQuery)("/subproof/antecedent"), subDerivationNodeQuery = (0, _query.nodeQuery)("/subproof/subDerivation");
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
    var subDerivationVerified;
    proofContext.begin(subDerivationNode);
    var childNodes = childNodesQuery(subDerivationNode);
    subDerivationVerified = childNodes.every(function(childNode) {
        var childVerified = verifyChild(childNode, proofContext);
        if (childVerified) {
            return true;
        }
    });
    subDerivationVerified ? proofContext.complete(subDerivationNode) : proofContext.halt(subDerivationNode);
    return subDerivationVerified;
}
function verifySubproof(subproofNode, proofContext) {
    var subproofVerified = false;
    proofContext = _proof1.default.fromProofContext(proofContext); ///
    var antecedents = [], antecedentNodes = antecedentNodesQuery(subproofNode), antecedentsVerified = antecedentNodes.every(function(antecedentNode) {
        var antecedentVerified = (0, _antecedent.default)(antecedentNode, antecedents, proofContext);
        if (antecedentVerified) {
            return true;
        }
    });
    if (antecedentsVerified) {
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92ZXJpZnkvZGVyaXZhdGlvbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFByb29mU3RlcCBmcm9tIFwiLi4vc3RlcC9wcm9vZlwiO1xuaW1wb3J0IFByb29mQ29udGV4dCBmcm9tIFwiLi4vY29udGV4dC9wcm9vZlwiO1xuaW1wb3J0IHZlcmlmeUFudGVjZWRlbnQgZnJvbSBcIi4vYW50ZWNlZGVudFwiO1xuaW1wb3J0IHZlcmlmeVF1YWxpZmllZFN0YXRlbWVudCBmcm9tIFwiLi4vdmVyaWZ5L3N0YXRlbWVudC9xdWFsaWZpZWRcIjtcbmltcG9ydCB2ZXJpZnlVbnF1YWxpZmllZFN0YXRlbWVudCBmcm9tIFwiLi4vdmVyaWZ5L3N0YXRlbWVudC91bnF1YWxpZmllZFwiO1xuXG5pbXBvcnQgeyBub2RlUXVlcnksIG5vZGVzUXVlcnkgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5pbXBvcnQgeyBTVUJQUk9PRl9SVUxFX05BTUUsIFFVQUxJRklFRF9TVEFURU1FTlRfUlVMRV9OQU1FLCBVTlFVQUxJRklFRF9TVEFURU1FTlRfUlVMRV9OQU1FIH0gZnJvbSBcIi4uL3J1bGVOYW1lc1wiO1xuXG5jb25zdCBjaGlsZE5vZGVzUXVlcnkgPSBub2Rlc1F1ZXJ5KFwiL2Rlcml2YXRpb258c3ViRGVyaXZhdGlvbi8qXCIpLFxuICAgICAgc3RhdGVtZW50Tm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3F1YWxpZmllZFN0YXRlbWVudHx1bnF1YWxpZmllZFN0YXRlbWVudC9zdGF0ZW1lbnQhXCIpLFxuICAgICAgYW50ZWNlZGVudE5vZGVzUXVlcnkgPSBub2Rlc1F1ZXJ5KFwiL3N1YnByb29mL2FudGVjZWRlbnRcIiksXG4gICAgICBzdWJEZXJpdmF0aW9uTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3N1YnByb29mL3N1YkRlcml2YXRpb25cIik7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHZlcmlmeURlcml2YXRpb24oZGVyaXZhdGlvbk5vZGUsIHByb29mQ29udGV4dCkge1xuICBsZXQgZGVyaXZhdGlvblZlcmlmaWVkO1xuXG4gIHByb29mQ29udGV4dC5iZWdpbihkZXJpdmF0aW9uTm9kZSk7XG5cbiAgY29uc3QgY2hpbGROb2RlcyA9IGNoaWxkTm9kZXNRdWVyeShkZXJpdmF0aW9uTm9kZSk7XG5cbiAgZGVyaXZhdGlvblZlcmlmaWVkID0gY2hpbGROb2Rlcy5ldmVyeSgoY2hpbGROb2RlKSA9PiB7XG4gICAgY29uc3QgY2hpbGRWZXJpZmllZCA9IHZlcmlmeUNoaWxkKGNoaWxkTm9kZSwgcHJvb2ZDb250ZXh0KTtcblxuICAgIGlmIChjaGlsZFZlcmlmaWVkKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH0pO1xuXG4gIGRlcml2YXRpb25WZXJpZmllZCA/XG4gICAgcHJvb2ZDb250ZXh0LmNvbXBsZXRlKGRlcml2YXRpb25Ob2RlKSA6XG4gICAgICBwcm9vZkNvbnRleHQuaGFsdChkZXJpdmF0aW9uTm9kZSk7XG5cbiAgcmV0dXJuIGRlcml2YXRpb25WZXJpZmllZDtcbn1cblxuZnVuY3Rpb24gdmVyaWZ5U3ViRGVyaXZhdGlvbihzdWJEZXJpdmF0aW9uTm9kZSwgcHJvb2ZDb250ZXh0KSB7XG4gIGxldCBzdWJEZXJpdmF0aW9uVmVyaWZpZWQ7XG5cbiAgcHJvb2ZDb250ZXh0LmJlZ2luKHN1YkRlcml2YXRpb25Ob2RlKTtcblxuICBjb25zdCBjaGlsZE5vZGVzID0gY2hpbGROb2Rlc1F1ZXJ5KHN1YkRlcml2YXRpb25Ob2RlKTtcblxuICBzdWJEZXJpdmF0aW9uVmVyaWZpZWQgPSBjaGlsZE5vZGVzLmV2ZXJ5KChjaGlsZE5vZGUpID0+IHtcbiAgICBjb25zdCBjaGlsZFZlcmlmaWVkID0gdmVyaWZ5Q2hpbGQoY2hpbGROb2RlLCBwcm9vZkNvbnRleHQpO1xuXG4gICAgaWYgKGNoaWxkVmVyaWZpZWQpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfSk7XG5cbiAgc3ViRGVyaXZhdGlvblZlcmlmaWVkID9cbiAgICBwcm9vZkNvbnRleHQuY29tcGxldGUoc3ViRGVyaXZhdGlvbk5vZGUpIDpcbiAgICAgIHByb29mQ29udGV4dC5oYWx0KHN1YkRlcml2YXRpb25Ob2RlKTtcblxuICByZXR1cm4gc3ViRGVyaXZhdGlvblZlcmlmaWVkO1xufVxuXG5mdW5jdGlvbiB2ZXJpZnlTdWJwcm9vZihzdWJwcm9vZk5vZGUsIHByb29mQ29udGV4dCkge1xuICBsZXQgc3VicHJvb2ZWZXJpZmllZCA9IGZhbHNlO1xuXG4gIHByb29mQ29udGV4dCA9IFByb29mQ29udGV4dC5mcm9tUHJvb2ZDb250ZXh0KHByb29mQ29udGV4dCk7IC8vL1xuXG4gIGNvbnN0IGFudGVjZWRlbnRzID0gW10sXG4gICAgICAgIGFudGVjZWRlbnROb2RlcyA9IGFudGVjZWRlbnROb2Rlc1F1ZXJ5KHN1YnByb29mTm9kZSksXG4gICAgICAgIGFudGVjZWRlbnRzVmVyaWZpZWQgPSBhbnRlY2VkZW50Tm9kZXMuZXZlcnkoKGFudGVjZWRlbnROb2RlKSA9PiB7XG4gICAgICAgICAgY29uc3QgYW50ZWNlZGVudFZlcmlmaWVkID0gdmVyaWZ5QW50ZWNlZGVudChhbnRlY2VkZW50Tm9kZSwgYW50ZWNlZGVudHMsIHByb29mQ29udGV4dCk7XG5cbiAgICAgICAgICBpZiAoYW50ZWNlZGVudFZlcmlmaWVkKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gIGlmIChhbnRlY2VkZW50c1ZlcmlmaWVkKSB7XG4gICAgY29uc3Qgc3ViRGVyaXZhdGlvbk5vZGUgPSBzdWJEZXJpdmF0aW9uTm9kZVF1ZXJ5KHN1YnByb29mTm9kZSksXG4gICAgICAgICAgc3ViRGVyaXZhdGlvblZlcmlmaWVkID0gdmVyaWZ5U3ViRGVyaXZhdGlvbihzdWJEZXJpdmF0aW9uTm9kZSwgcHJvb2ZDb250ZXh0KTtcblxuICAgIGlmIChzdWJEZXJpdmF0aW9uVmVyaWZpZWQpIHtcbiAgICAgIHN1YnByb29mVmVyaWZpZWQgPSB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBzdWJwcm9vZlZlcmlmaWVkO1xufVxuXG5mdW5jdGlvbiB2ZXJpZnlDaGlsZChjaGlsZE5vZGUsIHByb29mQ29udGV4dCkge1xuICBsZXQgY2hpbGRWZXJpZmllZDtcblxuICBjb25zdCBjaGlsZE5vZGVSdWxlTmFtZSA9IGNoaWxkTm9kZS5nZXRSdWxlTmFtZSgpO1xuXG4gIHN3aXRjaCAoY2hpbGROb2RlUnVsZU5hbWUpIHtcbiAgICBjYXNlIFNVQlBST09GX1JVTEVfTkFNRToge1xuICAgICAgY29uc3Qgc3VicHJvb2ZOb2RlID0gY2hpbGROb2RlLCAgLy8vXG4gICAgICAgICAgICBzdWJwcm9vZlZlcmlmaWVkID0gdmVyaWZ5U3VicHJvb2Yoc3VicHJvb2ZOb2RlLCBwcm9vZkNvbnRleHQpO1xuXG4gICAgICBpZiAoc3VicHJvb2ZWZXJpZmllZCkge1xuICAgICAgICBjb25zdCBwcm9vZlN0ZXAgPSBQcm9vZlN0ZXAuZnJvbVN1YnByb29mTm9kZShzdWJwcm9vZk5vZGUpO1xuXG4gICAgICAgIHByb29mQ29udGV4dC5hZGRQcm9vZlN0ZXAocHJvb2ZTdGVwKTtcblxuICAgICAgICBjaGlsZFZlcmlmaWVkID0gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgY2FzZSBRVUFMSUZJRURfU1RBVEVNRU5UX1JVTEVfTkFNRToge1xuICAgICAgY29uc3QgcXVhbGlmaWVkU3RhdGVtZW50Tm9kZSA9IGNoaWxkTm9kZSwgIC8vL1xuICAgICAgICAgICAgcXVhbGlmaWVkU3RhdGVtZW50VmVyaWZpZWQgPSB2ZXJpZnlRdWFsaWZpZWRTdGF0ZW1lbnQocXVhbGlmaWVkU3RhdGVtZW50Tm9kZSwgcHJvb2ZDb250ZXh0KTtcblxuICAgICAgaWYgKHF1YWxpZmllZFN0YXRlbWVudFZlcmlmaWVkKSB7XG4gICAgICAgIGNvbnN0IHN0YXRlbWVudE5vZGUgPSBzdGF0ZW1lbnROb2RlUXVlcnkocXVhbGlmaWVkU3RhdGVtZW50Tm9kZSksXG4gICAgICAgICAgICAgIHByb29mU3RlcCA9IFByb29mU3RlcC5mcm9tU3RhdGVtZW50Tm9kZShzdGF0ZW1lbnROb2RlKTtcblxuICAgICAgICBwcm9vZkNvbnRleHQuYWRkUHJvb2ZTdGVwKHByb29mU3RlcCk7XG5cbiAgICAgICAgY2hpbGRWZXJpZmllZCA9IHF1YWxpZmllZFN0YXRlbWVudFZlcmlmaWVkOyAvLy9cbiAgICAgIH1cblxuICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgY2FzZSBVTlFVQUxJRklFRF9TVEFURU1FTlRfUlVMRV9OQU1FOiB7XG4gICAgICBjb25zdCB1bnF1YWxpZmllZFN0YXRlbWVudE5vZGUgPSBjaGlsZE5vZGUsICAvLy9cbiAgICAgICAgICAgIHVucXVhbGlmaWVkU3RhdGVtZW50VmVyaWZpZWQgPSB2ZXJpZnlVbnF1YWxpZmllZFN0YXRlbWVudCh1bnF1YWxpZmllZFN0YXRlbWVudE5vZGUsIHByb29mQ29udGV4dCk7XG5cbiAgICAgIGlmICh1bnF1YWxpZmllZFN0YXRlbWVudFZlcmlmaWVkKSB7XG4gICAgICAgIGNvbnN0IHN0YXRlbWVudE5vZGUgPSBzdGF0ZW1lbnROb2RlUXVlcnkodW5xdWFsaWZpZWRTdGF0ZW1lbnROb2RlKSxcbiAgICAgICAgICAgICAgcHJvb2ZTdGVwID0gUHJvb2ZTdGVwLmZyb21TdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUpO1xuXG4gICAgICAgIHByb29mQ29udGV4dC5hZGRQcm9vZlN0ZXAocHJvb2ZTdGVwKTtcblxuICAgICAgICBjaGlsZFZlcmlmaWVkID0gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGNoaWxkVmVyaWZpZWQ7XG59XG4iXSwibmFtZXMiOlsidmVyaWZ5RGVyaXZhdGlvbiIsImNoaWxkTm9kZXNRdWVyeSIsIm5vZGVzUXVlcnkiLCJzdGF0ZW1lbnROb2RlUXVlcnkiLCJub2RlUXVlcnkiLCJhbnRlY2VkZW50Tm9kZXNRdWVyeSIsInN1YkRlcml2YXRpb25Ob2RlUXVlcnkiLCJkZXJpdmF0aW9uTm9kZSIsInByb29mQ29udGV4dCIsImRlcml2YXRpb25WZXJpZmllZCIsImJlZ2luIiwiY2hpbGROb2RlcyIsImV2ZXJ5IiwiY2hpbGROb2RlIiwiY2hpbGRWZXJpZmllZCIsInZlcmlmeUNoaWxkIiwiY29tcGxldGUiLCJoYWx0IiwidmVyaWZ5U3ViRGVyaXZhdGlvbiIsInN1YkRlcml2YXRpb25Ob2RlIiwic3ViRGVyaXZhdGlvblZlcmlmaWVkIiwidmVyaWZ5U3VicHJvb2YiLCJzdWJwcm9vZk5vZGUiLCJzdWJwcm9vZlZlcmlmaWVkIiwiUHJvb2ZDb250ZXh0IiwiZnJvbVByb29mQ29udGV4dCIsImFudGVjZWRlbnRzIiwiYW50ZWNlZGVudE5vZGVzIiwiYW50ZWNlZGVudHNWZXJpZmllZCIsImFudGVjZWRlbnROb2RlIiwiYW50ZWNlZGVudFZlcmlmaWVkIiwidmVyaWZ5QW50ZWNlZGVudCIsImNoaWxkTm9kZVJ1bGVOYW1lIiwiZ2V0UnVsZU5hbWUiLCJTVUJQUk9PRl9SVUxFX05BTUUiLCJwcm9vZlN0ZXAiLCJQcm9vZlN0ZXAiLCJmcm9tU3VicHJvb2ZOb2RlIiwiYWRkUHJvb2ZTdGVwIiwiUVVBTElGSUVEX1NUQVRFTUVOVF9SVUxFX05BTUUiLCJxdWFsaWZpZWRTdGF0ZW1lbnROb2RlIiwicXVhbGlmaWVkU3RhdGVtZW50VmVyaWZpZWQiLCJ2ZXJpZnlRdWFsaWZpZWRTdGF0ZW1lbnQiLCJzdGF0ZW1lbnROb2RlIiwiZnJvbVN0YXRlbWVudE5vZGUiLCJVTlFVQUxJRklFRF9TVEFURU1FTlRfUlVMRV9OQU1FIiwidW5xdWFsaWZpZWRTdGF0ZW1lbnROb2RlIiwidW5xdWFsaWZpZWRTdGF0ZW1lbnRWZXJpZmllZCIsInZlcmlmeVVucXVhbGlmaWVkU3RhdGVtZW50Il0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFnQkE7OztlQUF3QkE7OzswREFkRjsyREFDRzsrREFDSTs4REFDUTtnRUFD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