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
                var derived = true, assertions = [], unqualifiedStatementNode = childNode, unqualifiedStatementVerified = (0, _unqualified.default)(unqualifiedStatementNode, assertions, derived, proofContext);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92ZXJpZnkvZGVyaXZhdGlvbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFByb29mU3RlcCBmcm9tIFwiLi4vc3RlcC9wcm9vZlwiO1xuaW1wb3J0IFByb29mQ29udGV4dCBmcm9tIFwiLi4vY29udGV4dC9wcm9vZlwiO1xuaW1wb3J0IHZlcmlmeVN1cHBvc2l0aW9uIGZyb20gXCIuL3N1cHBvc2l0aW9uXCI7XG5pbXBvcnQgdmVyaWZ5UXVhbGlmaWVkU3RhdGVtZW50IGZyb20gXCIuLi92ZXJpZnkvc3RhdGVtZW50L3F1YWxpZmllZFwiO1xuaW1wb3J0IHZlcmlmeVVucXVhbGlmaWVkU3RhdGVtZW50IGZyb20gXCIuLi92ZXJpZnkvc3RhdGVtZW50L3VucXVhbGlmaWVkXCI7XG5cbmltcG9ydCB7IG5vZGVRdWVyeSwgbm9kZXNRdWVyeSB9IGZyb20gXCIuLi91dGlsaXRpZXMvcXVlcnlcIjtcbmltcG9ydCB7IFNVQlBST09GX1JVTEVfTkFNRSwgUVVBTElGSUVEX1NUQVRFTUVOVF9SVUxFX05BTUUsIFVOUVVBTElGSUVEX1NUQVRFTUVOVF9SVUxFX05BTUUgfSBmcm9tIFwiLi4vcnVsZU5hbWVzXCI7XG5cbmNvbnN0IGNoaWxkTm9kZXNRdWVyeSA9IG5vZGVzUXVlcnkoXCIvZGVyaXZhdGlvbnxzdWJEZXJpdmF0aW9uLypcIiksXG4gICAgICBzdGF0ZW1lbnROb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvcXVhbGlmaWVkU3RhdGVtZW50fHVucXVhbGlmaWVkU3RhdGVtZW50L3N0YXRlbWVudCFcIiksXG4gICAgICBzdXBwb3NpdGlvbk5vZGVzUXVlcnkgPSBub2Rlc1F1ZXJ5KFwiL3N1YnByb29mL3N1cHBvc2l0aW9uXCIpLFxuICAgICAgc3ViRGVyaXZhdGlvbk5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9zdWJwcm9vZi9zdWJEZXJpdmF0aW9uXCIpO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB2ZXJpZnlEZXJpdmF0aW9uKGRlcml2YXRpb25Ob2RlLCBwcm9vZkNvbnRleHQpIHtcbiAgbGV0IGRlcml2YXRpb25WZXJpZmllZDtcblxuICBwcm9vZkNvbnRleHQuYmVnaW4oZGVyaXZhdGlvbk5vZGUpO1xuXG4gIGNvbnN0IGNoaWxkTm9kZXMgPSBjaGlsZE5vZGVzUXVlcnkoZGVyaXZhdGlvbk5vZGUpO1xuXG4gIGRlcml2YXRpb25WZXJpZmllZCA9IGNoaWxkTm9kZXMuZXZlcnkoKGNoaWxkTm9kZSkgPT4ge1xuICAgIGNvbnN0IGNoaWxkVmVyaWZpZWQgPSB2ZXJpZnlDaGlsZChjaGlsZE5vZGUsIHByb29mQ29udGV4dCk7XG5cbiAgICBpZiAoY2hpbGRWZXJpZmllZCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9KTtcblxuICBkZXJpdmF0aW9uVmVyaWZpZWQgP1xuICAgIHByb29mQ29udGV4dC5jb21wbGV0ZShkZXJpdmF0aW9uTm9kZSkgOlxuICAgICAgcHJvb2ZDb250ZXh0LmhhbHQoZGVyaXZhdGlvbk5vZGUpO1xuXG4gIHJldHVybiBkZXJpdmF0aW9uVmVyaWZpZWQ7XG59XG5cbmZ1bmN0aW9uIHZlcmlmeVN1YkRlcml2YXRpb24oc3ViRGVyaXZhdGlvbk5vZGUsIHByb29mQ29udGV4dCkge1xuICBsZXQgc3ViRGVyaXZhdGlvblZlcmlmaWVkO1xuXG4gIHByb29mQ29udGV4dC5iZWdpbihzdWJEZXJpdmF0aW9uTm9kZSk7XG5cbiAgY29uc3QgY2hpbGROb2RlcyA9IGNoaWxkTm9kZXNRdWVyeShzdWJEZXJpdmF0aW9uTm9kZSk7XG5cbiAgc3ViRGVyaXZhdGlvblZlcmlmaWVkID0gY2hpbGROb2Rlcy5ldmVyeSgoY2hpbGROb2RlKSA9PiB7XG4gICAgY29uc3QgY2hpbGRWZXJpZmllZCA9IHZlcmlmeUNoaWxkKGNoaWxkTm9kZSwgcHJvb2ZDb250ZXh0KTtcblxuICAgIGlmIChjaGlsZFZlcmlmaWVkKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH0pO1xuXG4gIHN1YkRlcml2YXRpb25WZXJpZmllZCA/XG4gICAgcHJvb2ZDb250ZXh0LmNvbXBsZXRlKHN1YkRlcml2YXRpb25Ob2RlKSA6XG4gICAgICBwcm9vZkNvbnRleHQuaGFsdChzdWJEZXJpdmF0aW9uTm9kZSk7XG5cbiAgcmV0dXJuIHN1YkRlcml2YXRpb25WZXJpZmllZDtcbn1cblxuZnVuY3Rpb24gdmVyaWZ5U3VicHJvb2Yoc3VicHJvb2ZOb2RlLCBwcm9vZkNvbnRleHQpIHtcbiAgbGV0IHN1YnByb29mVmVyaWZpZWQgPSBmYWxzZTtcblxuICBwcm9vZkNvbnRleHQgPSBQcm9vZkNvbnRleHQuZnJvbVByb29mQ29udGV4dChwcm9vZkNvbnRleHQpOyAvLy9cblxuICBjb25zdCBzdXBwb3NpdGlvbnMgPSBbXSxcbiAgICAgICAgc3VwcG9zaXRpb25Ob2RlcyA9IHN1cHBvc2l0aW9uTm9kZXNRdWVyeShzdWJwcm9vZk5vZGUpLFxuICAgICAgICBzdXBwb3NpdGlvbnNWZXJpZmllZCA9IHN1cHBvc2l0aW9uTm9kZXMuZXZlcnkoKHN1cHBvc2l0aW9uTm9kZSkgPT4ge1xuICAgICAgICAgIGNvbnN0IHN1cHBvc2l0aW9uVmVyaWZpZWQgPSB2ZXJpZnlTdXBwb3NpdGlvbihzdXBwb3NpdGlvbk5vZGUsIHN1cHBvc2l0aW9ucywgcHJvb2ZDb250ZXh0KTtcblxuICAgICAgICAgIGlmIChzdXBwb3NpdGlvblZlcmlmaWVkKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gIGlmIChzdXBwb3NpdGlvbnNWZXJpZmllZCkge1xuICAgIGNvbnN0IHN1YkRlcml2YXRpb25Ob2RlID0gc3ViRGVyaXZhdGlvbk5vZGVRdWVyeShzdWJwcm9vZk5vZGUpLFxuICAgICAgICAgIHN1YkRlcml2YXRpb25WZXJpZmllZCA9IHZlcmlmeVN1YkRlcml2YXRpb24oc3ViRGVyaXZhdGlvbk5vZGUsIHByb29mQ29udGV4dCk7XG5cbiAgICBpZiAoc3ViRGVyaXZhdGlvblZlcmlmaWVkKSB7XG4gICAgICBzdWJwcm9vZlZlcmlmaWVkID0gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gc3VicHJvb2ZWZXJpZmllZDtcbn1cblxuZnVuY3Rpb24gdmVyaWZ5Q2hpbGQoY2hpbGROb2RlLCBwcm9vZkNvbnRleHQpIHtcbiAgbGV0IGNoaWxkVmVyaWZpZWQ7XG5cbiAgY29uc3QgY2hpbGROb2RlUnVsZU5hbWUgPSBjaGlsZE5vZGUuZ2V0UnVsZU5hbWUoKTtcblxuICBzd2l0Y2ggKGNoaWxkTm9kZVJ1bGVOYW1lKSB7XG4gICAgY2FzZSBTVUJQUk9PRl9SVUxFX05BTUU6IHtcbiAgICAgIGNvbnN0IHN1YnByb29mTm9kZSA9IGNoaWxkTm9kZSwgIC8vL1xuICAgICAgICAgICAgc3VicHJvb2ZWZXJpZmllZCA9IHZlcmlmeVN1YnByb29mKHN1YnByb29mTm9kZSwgcHJvb2ZDb250ZXh0KTtcblxuICAgICAgaWYgKHN1YnByb29mVmVyaWZpZWQpIHtcbiAgICAgICAgY29uc3QgcHJvb2ZTdGVwID0gUHJvb2ZTdGVwLmZyb21TdWJwcm9vZk5vZGUoc3VicHJvb2ZOb2RlKTtcblxuICAgICAgICBwcm9vZkNvbnRleHQuYWRkUHJvb2ZTdGVwKHByb29mU3RlcCk7XG5cbiAgICAgICAgY2hpbGRWZXJpZmllZCA9IHRydWU7XG4gICAgICB9XG5cbiAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIGNhc2UgUVVBTElGSUVEX1NUQVRFTUVOVF9SVUxFX05BTUU6IHtcbiAgICAgIGNvbnN0IHF1YWxpZmllZFN0YXRlbWVudE5vZGUgPSBjaGlsZE5vZGUsICAvLy9cbiAgICAgICAgICAgIHF1YWxpZmllZFN0YXRlbWVudFZlcmlmaWVkID0gdmVyaWZ5UXVhbGlmaWVkU3RhdGVtZW50KHF1YWxpZmllZFN0YXRlbWVudE5vZGUsIHByb29mQ29udGV4dCk7XG5cbiAgICAgIGlmIChxdWFsaWZpZWRTdGF0ZW1lbnRWZXJpZmllZCkge1xuICAgICAgICBjb25zdCBzdGF0ZW1lbnROb2RlID0gc3RhdGVtZW50Tm9kZVF1ZXJ5KHF1YWxpZmllZFN0YXRlbWVudE5vZGUpLFxuICAgICAgICAgICAgICBwcm9vZlN0ZXAgPSBQcm9vZlN0ZXAuZnJvbVN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSk7XG5cbiAgICAgICAgcHJvb2ZDb250ZXh0LmFkZFByb29mU3RlcChwcm9vZlN0ZXApO1xuXG4gICAgICAgIGNoaWxkVmVyaWZpZWQgPSBxdWFsaWZpZWRTdGF0ZW1lbnRWZXJpZmllZDsgLy8vXG4gICAgICB9XG5cbiAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIGNhc2UgVU5RVUFMSUZJRURfU1RBVEVNRU5UX1JVTEVfTkFNRToge1xuICAgICAgY29uc3QgZGVyaXZlZCA9IHRydWUsXG4gICAgICAgICAgICBhc3NlcnRpb25zID0gW10sXG4gICAgICAgICAgICB1bnF1YWxpZmllZFN0YXRlbWVudE5vZGUgPSBjaGlsZE5vZGUsICAvLy9cbiAgICAgICAgICAgIHVucXVhbGlmaWVkU3RhdGVtZW50VmVyaWZpZWQgPSB2ZXJpZnlVbnF1YWxpZmllZFN0YXRlbWVudCh1bnF1YWxpZmllZFN0YXRlbWVudE5vZGUsIGFzc2VydGlvbnMsIGRlcml2ZWQsIHByb29mQ29udGV4dCk7XG5cbiAgICAgIGlmICh1bnF1YWxpZmllZFN0YXRlbWVudFZlcmlmaWVkKSB7XG4gICAgICAgIGNvbnN0IHN0YXRlbWVudE5vZGUgPSBzdGF0ZW1lbnROb2RlUXVlcnkodW5xdWFsaWZpZWRTdGF0ZW1lbnROb2RlKSxcbiAgICAgICAgICAgICAgcHJvb2ZTdGVwID0gUHJvb2ZTdGVwLmZyb21TdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUpO1xuXG4gICAgICAgIHByb29mQ29udGV4dC5hZGRQcm9vZlN0ZXAocHJvb2ZTdGVwKTtcblxuICAgICAgICBjaGlsZFZlcmlmaWVkID0gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGNoaWxkVmVyaWZpZWQ7XG59XG4iXSwibmFtZXMiOlsidmVyaWZ5RGVyaXZhdGlvbiIsImNoaWxkTm9kZXNRdWVyeSIsIm5vZGVzUXVlcnkiLCJzdGF0ZW1lbnROb2RlUXVlcnkiLCJub2RlUXVlcnkiLCJzdXBwb3NpdGlvbk5vZGVzUXVlcnkiLCJzdWJEZXJpdmF0aW9uTm9kZVF1ZXJ5IiwiZGVyaXZhdGlvbk5vZGUiLCJwcm9vZkNvbnRleHQiLCJkZXJpdmF0aW9uVmVyaWZpZWQiLCJiZWdpbiIsImNoaWxkTm9kZXMiLCJldmVyeSIsImNoaWxkTm9kZSIsImNoaWxkVmVyaWZpZWQiLCJ2ZXJpZnlDaGlsZCIsImNvbXBsZXRlIiwiaGFsdCIsInZlcmlmeVN1YkRlcml2YXRpb24iLCJzdWJEZXJpdmF0aW9uTm9kZSIsInN1YkRlcml2YXRpb25WZXJpZmllZCIsInZlcmlmeVN1YnByb29mIiwic3VicHJvb2ZOb2RlIiwic3VicHJvb2ZWZXJpZmllZCIsIlByb29mQ29udGV4dCIsImZyb21Qcm9vZkNvbnRleHQiLCJzdXBwb3NpdGlvbnMiLCJzdXBwb3NpdGlvbk5vZGVzIiwic3VwcG9zaXRpb25zVmVyaWZpZWQiLCJzdXBwb3NpdGlvbk5vZGUiLCJzdXBwb3NpdGlvblZlcmlmaWVkIiwidmVyaWZ5U3VwcG9zaXRpb24iLCJjaGlsZE5vZGVSdWxlTmFtZSIsImdldFJ1bGVOYW1lIiwiU1VCUFJPT0ZfUlVMRV9OQU1FIiwicHJvb2ZTdGVwIiwiUHJvb2ZTdGVwIiwiZnJvbVN1YnByb29mTm9kZSIsImFkZFByb29mU3RlcCIsIlFVQUxJRklFRF9TVEFURU1FTlRfUlVMRV9OQU1FIiwicXVhbGlmaWVkU3RhdGVtZW50Tm9kZSIsInF1YWxpZmllZFN0YXRlbWVudFZlcmlmaWVkIiwidmVyaWZ5UXVhbGlmaWVkU3RhdGVtZW50Iiwic3RhdGVtZW50Tm9kZSIsImZyb21TdGF0ZW1lbnROb2RlIiwiVU5RVUFMSUZJRURfU1RBVEVNRU5UX1JVTEVfTkFNRSIsImRlcml2ZWQiLCJhc3NlcnRpb25zIiwidW5xdWFsaWZpZWRTdGF0ZW1lbnROb2RlIiwi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