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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92ZXJpZnkvZGVyaXZhdGlvbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFByb29mU3RlcCBmcm9tIFwiLi4vc3RlcC9wcm9vZlwiO1xuaW1wb3J0IFByb29mQ29udGV4dCBmcm9tIFwiLi4vY29udGV4dC9wcm9vZlwiO1xuaW1wb3J0IHZlcmlmeVN1cHBvc2l0aW9uIGZyb20gXCIuL3N1cHBvc2l0aW9uXCI7XG5pbXBvcnQgdmVyaWZ5UXVhbGlmaWVkU3RhdGVtZW50IGZyb20gXCIuLi92ZXJpZnkvc3RhdGVtZW50L3F1YWxpZmllZFwiO1xuaW1wb3J0IHZlcmlmeVVucXVhbGlmaWVkU3RhdGVtZW50IGZyb20gXCIuLi92ZXJpZnkvc3RhdGVtZW50L3VucXVhbGlmaWVkXCI7XG5cbmltcG9ydCB7IG5vZGVRdWVyeSwgbm9kZXNRdWVyeSB9IGZyb20gXCIuLi91dGlsaXRpZXMvcXVlcnlcIjtcbmltcG9ydCB7IFNVQlBST09GX1JVTEVfTkFNRSwgUVVBTElGSUVEX1NUQVRFTUVOVF9SVUxFX05BTUUsIFVOUVVBTElGSUVEX1NUQVRFTUVOVF9SVUxFX05BTUUgfSBmcm9tIFwiLi4vcnVsZU5hbWVzXCI7XG5cbmNvbnN0IGNoaWxkTm9kZXNRdWVyeSA9IG5vZGVzUXVlcnkoXCIvZGVyaXZhdGlvbnxzdWJEZXJpdmF0aW9uLypcIiksXG4gICAgICBzdGF0ZW1lbnROb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvcXVhbGlmaWVkU3RhdGVtZW50fHVucXVhbGlmaWVkU3RhdGVtZW50L3N0YXRlbWVudCFcIiksXG4gICAgICBzdXBwb3NpdGlvbk5vZGVzUXVlcnkgPSBub2Rlc1F1ZXJ5KFwiL3N1YnByb29mL3N1cHBvc2l0aW9uXCIpLFxuICAgICAgc3ViRGVyaXZhdGlvbk5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9zdWJwcm9vZi9zdWJEZXJpdmF0aW9uXCIpO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB2ZXJpZnlEZXJpdmF0aW9uKGRlcml2YXRpb25Ob2RlLCBwcm9vZkNvbnRleHQpIHtcbiAgbGV0IGRlcml2YXRpb25WZXJpZmllZDtcblxuICBwcm9vZkNvbnRleHQuYmVnaW4oZGVyaXZhdGlvbk5vZGUpO1xuXG4gIGNvbnN0IGNoaWxkTm9kZXMgPSBjaGlsZE5vZGVzUXVlcnkoZGVyaXZhdGlvbk5vZGUpO1xuXG4gIGRlcml2YXRpb25WZXJpZmllZCA9IGNoaWxkTm9kZXMuZXZlcnkoKGNoaWxkTm9kZSkgPT4ge1xuICAgIGNvbnN0IGNoaWxkVmVyaWZpZWQgPSB2ZXJpZnlDaGlsZChjaGlsZE5vZGUsIHByb29mQ29udGV4dCk7XG5cbiAgICBpZiAoY2hpbGRWZXJpZmllZCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9KTtcblxuICBkZXJpdmF0aW9uVmVyaWZpZWQgP1xuICAgIHByb29mQ29udGV4dC5jb21wbGV0ZShkZXJpdmF0aW9uTm9kZSkgOlxuICAgICAgcHJvb2ZDb250ZXh0LmhhbHQoZGVyaXZhdGlvbk5vZGUpO1xuXG4gIHJldHVybiBkZXJpdmF0aW9uVmVyaWZpZWQ7XG59XG5cbmZ1bmN0aW9uIHZlcmlmeVN1YkRlcml2YXRpb24oc3ViRGVyaXZhdGlvbk5vZGUsIHByb29mQ29udGV4dCkge1xuICBsZXQgc3ViRGVyaXZhdGlvblZlcmlmaWVkO1xuXG4gIHByb29mQ29udGV4dC5iZWdpbihzdWJEZXJpdmF0aW9uTm9kZSk7XG5cbiAgY29uc3QgY2hpbGROb2RlcyA9IGNoaWxkTm9kZXNRdWVyeShzdWJEZXJpdmF0aW9uTm9kZSk7XG5cbiAgc3ViRGVyaXZhdGlvblZlcmlmaWVkID0gY2hpbGROb2Rlcy5ldmVyeSgoY2hpbGROb2RlKSA9PiB7XG4gICAgY29uc3QgY2hpbGRWZXJpZmllZCA9IHZlcmlmeUNoaWxkKGNoaWxkTm9kZSwgcHJvb2ZDb250ZXh0KTtcblxuICAgIGlmIChjaGlsZFZlcmlmaWVkKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH0pO1xuXG4gIHN1YkRlcml2YXRpb25WZXJpZmllZCA/XG4gICAgcHJvb2ZDb250ZXh0LmNvbXBsZXRlKHN1YkRlcml2YXRpb25Ob2RlKSA6XG4gICAgICBwcm9vZkNvbnRleHQuaGFsdChzdWJEZXJpdmF0aW9uTm9kZSk7XG5cbiAgcmV0dXJuIHN1YkRlcml2YXRpb25WZXJpZmllZDtcbn1cblxuZnVuY3Rpb24gdmVyaWZ5U3VicHJvb2Yoc3VicHJvb2ZOb2RlLCBwcm9vZkNvbnRleHQpIHtcbiAgbGV0IHN1YnByb29mVmVyaWZpZWQgPSBmYWxzZTtcblxuICBwcm9vZkNvbnRleHQgPSBQcm9vZkNvbnRleHQuZnJvbVByb29mQ29udGV4dChwcm9vZkNvbnRleHQpOyAvLy9cblxuICBjb25zdCBzdXBwb3NpdGlvbnMgPSBbXSxcbiAgICAgICAgc3VwcG9zaXRpb25Ob2RlcyA9IHN1cHBvc2l0aW9uTm9kZXNRdWVyeShzdWJwcm9vZk5vZGUpLFxuICAgICAgICBzdXBwb3NpdGlvbnNWZXJpZmllZCA9IHN1cHBvc2l0aW9uTm9kZXMuZXZlcnkoKHN1cHBvc2l0aW9uTm9kZSkgPT4ge1xuICAgICAgICAgIGNvbnN0IHN1cHBvc2l0aW9uVmVyaWZpZWQgPSB2ZXJpZnlTdXBwb3NpdGlvbihzdXBwb3NpdGlvbk5vZGUsIHN1cHBvc2l0aW9ucywgcHJvb2ZDb250ZXh0KTtcblxuICAgICAgICAgIGlmIChzdXBwb3NpdGlvblZlcmlmaWVkKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gIGlmIChzdXBwb3NpdGlvbnNWZXJpZmllZCkge1xuICAgIGNvbnN0IHN1YkRlcml2YXRpb25Ob2RlID0gc3ViRGVyaXZhdGlvbk5vZGVRdWVyeShzdWJwcm9vZk5vZGUpLFxuICAgICAgICAgIHN1YkRlcml2YXRpb25WZXJpZmllZCA9IHZlcmlmeVN1YkRlcml2YXRpb24oc3ViRGVyaXZhdGlvbk5vZGUsIHByb29mQ29udGV4dCk7XG5cbiAgICBpZiAoc3ViRGVyaXZhdGlvblZlcmlmaWVkKSB7XG4gICAgICBzdWJwcm9vZlZlcmlmaWVkID0gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gc3VicHJvb2ZWZXJpZmllZDtcbn1cblxuZnVuY3Rpb24gdmVyaWZ5Q2hpbGQoY2hpbGROb2RlLCBwcm9vZkNvbnRleHQpIHtcbiAgbGV0IGNoaWxkVmVyaWZpZWQ7XG5cbiAgY29uc3QgY2hpbGROb2RlUnVsZU5hbWUgPSBjaGlsZE5vZGUuZ2V0UnVsZU5hbWUoKTtcblxuICBzd2l0Y2ggKGNoaWxkTm9kZVJ1bGVOYW1lKSB7XG4gICAgY2FzZSBTVUJQUk9PRl9SVUxFX05BTUU6IHtcbiAgICAgIGNvbnN0IHN1YnByb29mTm9kZSA9IGNoaWxkTm9kZSwgIC8vL1xuICAgICAgICAgICAgc3VicHJvb2ZWZXJpZmllZCA9IHZlcmlmeVN1YnByb29mKHN1YnByb29mTm9kZSwgcHJvb2ZDb250ZXh0KTtcblxuICAgICAgaWYgKHN1YnByb29mVmVyaWZpZWQpIHtcbiAgICAgICAgY29uc3QgcHJvb2ZTdGVwID0gUHJvb2ZTdGVwLmZyb21TdWJwcm9vZk5vZGUoc3VicHJvb2ZOb2RlKTtcblxuICAgICAgICBwcm9vZkNvbnRleHQuYWRkUHJvb2ZTdGVwKHByb29mU3RlcCk7XG5cbiAgICAgICAgY2hpbGRWZXJpZmllZCA9IHRydWU7XG4gICAgICB9XG5cbiAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIGNhc2UgUVVBTElGSUVEX1NUQVRFTUVOVF9SVUxFX05BTUU6IHtcbiAgICAgIGNvbnN0IGRlcml2ZWQgPSB0cnVlLFxuICAgICAgICAgICAgYXNzZXJ0aW9ucyA9IFtdLFxuICAgICAgICAgICAgcXVhbGlmaWVkU3RhdGVtZW50Tm9kZSA9IGNoaWxkTm9kZSwgIC8vL1xuICAgICAgICAgICAgcXVhbGlmaWVkU3RhdGVtZW50VmVyaWZpZWQgPSB2ZXJpZnlRdWFsaWZpZWRTdGF0ZW1lbnQocXVhbGlmaWVkU3RhdGVtZW50Tm9kZSwgYXNzZXJ0aW9ucywgZGVyaXZlZCwgcHJvb2ZDb250ZXh0KTtcblxuICAgICAgaWYgKHF1YWxpZmllZFN0YXRlbWVudFZlcmlmaWVkKSB7XG4gICAgICAgIGNvbnN0IHN0YXRlbWVudE5vZGUgPSBzdGF0ZW1lbnROb2RlUXVlcnkocXVhbGlmaWVkU3RhdGVtZW50Tm9kZSksXG4gICAgICAgICAgICAgIHByb29mU3RlcCA9IFByb29mU3RlcC5mcm9tU3RhdGVtZW50Tm9kZShzdGF0ZW1lbnROb2RlKTtcblxuICAgICAgICBwcm9vZkNvbnRleHQuYWRkUHJvb2ZTdGVwKHByb29mU3RlcCk7XG5cbiAgICAgICAgY2hpbGRWZXJpZmllZCA9IHF1YWxpZmllZFN0YXRlbWVudFZlcmlmaWVkOyAvLy9cbiAgICAgIH1cblxuICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgY2FzZSBVTlFVQUxJRklFRF9TVEFURU1FTlRfUlVMRV9OQU1FOiB7XG4gICAgICBjb25zdCBkZXJpdmVkID0gdHJ1ZSxcbiAgICAgICAgICAgIGFzc2VydGlvbnMgPSBbXSxcbiAgICAgICAgICAgIHVucXVhbGlmaWVkU3RhdGVtZW50Tm9kZSA9IGNoaWxkTm9kZSwgIC8vL1xuICAgICAgICAgICAgdW5xdWFsaWZpZWRTdGF0ZW1lbnRWZXJpZmllZCA9IHZlcmlmeVVucXVhbGlmaWVkU3RhdGVtZW50KHVucXVhbGlmaWVkU3RhdGVtZW50Tm9kZSwgYXNzZXJ0aW9ucywgZGVyaXZlZCwgcHJvb2ZDb250ZXh0KTtcblxuICAgICAgaWYgKHVucXVhbGlmaWVkU3RhdGVtZW50VmVyaWZpZWQpIHtcbiAgICAgICAgY29uc3Qgc3RhdGVtZW50Tm9kZSA9IHN0YXRlbWVudE5vZGVRdWVyeSh1bnF1YWxpZmllZFN0YXRlbWVudE5vZGUpLFxuICAgICAgICAgICAgICBwcm9vZlN0ZXAgPSBQcm9vZlN0ZXAuZnJvbVN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSk7XG5cbiAgICAgICAgcHJvb2ZDb250ZXh0LmFkZFByb29mU3RlcChwcm9vZlN0ZXApO1xuXG4gICAgICAgIGNoaWxkVmVyaWZpZWQgPSB0cnVlO1xuICAgICAgfVxuXG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gY2hpbGRWZXJpZmllZDtcbn1cbiJdLCJuYW1lcyI6WyJ2ZXJpZnlEZXJpdmF0aW9uIiwiY2hpbGROb2Rlc1F1ZXJ5Iiwibm9kZXNRdWVyeSIsInN0YXRlbWVudE5vZGVRdWVyeSIsIm5vZGVRdWVyeSIsInN1cHBvc2l0aW9uTm9kZXNRdWVyeSIsInN1YkRlcml2YXRpb25Ob2RlUXVlcnkiLCJkZXJpdmF0aW9uTm9kZSIsInByb29mQ29udGV4dCIsImRlcml2YXRpb25WZXJpZmllZCIsImJlZ2luIiwiY2hpbGROb2RlcyIsImV2ZXJ5IiwiY2hpbGROb2RlIiwiY2hpbGRWZXJpZmllZCIsInZlcmlmeUNoaWxkIiwiY29tcGxldGUiLCJoYWx0IiwidmVyaWZ5U3ViRGVyaXZhdGlvbiIsInN1YkRlcml2YXRpb25Ob2RlIiwic3ViRGVyaXZhdGlvblZlcmlmaWVkIiwidmVyaWZ5U3VicHJvb2YiLCJzdWJwcm9vZk5vZGUiLCJzdWJwcm9vZlZlcmlmaWVkIiwiUHJvb2ZDb250ZXh0IiwiZnJvbVByb29mQ29udGV4dCIsInN1cHBvc2l0aW9ucyIsInN1cHBvc2l0aW9uTm9kZXMiLCJzdXBwb3NpdGlvbnNWZXJpZmllZCIsInN1cHBvc2l0aW9uTm9kZSIsInN1cHBvc2l0aW9uVmVyaWZpZWQiLCJ2ZXJpZnlTdXBwb3NpdGlvbiIsImNoaWxkTm9kZVJ1bGVOYW1lIiwiZ2V0UnVsZU5hbWUiLCJTVUJQUk9PRl9SVUxFX05BTUUiLCJwcm9vZlN0ZXAiLCJQcm9vZlN0ZXAiLCJmcm9tU3VicHJvb2ZOb2RlIiwiYWRkUHJvb2ZTdGVwIiwiUVVBTElGSUVEX1NUQVRFTUVOVF9SVUxFX05BTUUiLCJkZXJpdmVkIiwiYXNzZXJ0aW9ucyIsInF1YWxpZmllZFN0YXRlbWVudE5vZGUiLCJxdWFsaWZpZWRTdGF0ZW1lbnRWZXJpZmllZCIsInZlcmlmeVF1YWxpZmllZFN0YXRlbWVudCIsInN0YXRlbWVudE5vZGUiLCJmcm9tU3RhdGVtZW50Tm9kZSIsIlVOUVVBTElGSUVEX1NUQVRFTUVOVF9SVUxFX05BTUUiLCJ1bnF1YWxpZmllZFN0YXRlbWVudE5vZGUiLCJ1bnF1YWxpZmllZFN0YXRlbWVudFZlcmlmaWVkIiwidmVyaWZ5VW5xdWFsaWZpZWRTdGF0ZW1lbnQiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQWdCQTs7O2VBQXdCQTs7OzBEQWRGOzJEQUNHO2dFQUNLOzhEQUNPO2dFQUNFO3FCQUVEO3lCQUM2RDs7Ozs7O0FBRW5HLElBQU1DLGtCQUFrQkMsSUFBQUEsaUJBQVUsRUFBQyxnQ0FDN0JDLHFCQUFxQkMsSUFBQUEsZ0JBQVMsRUFBQyx3REFDL0JDLHdCQUF3QkgsSUFBQUEsaUJBQVUsRUFBQywwQkFDbkNJLHlCQUF5QkYsSUFBQUEsZ0JBQVMsRUFBQztBQUUxQixTQUFTSixpQkFBaUJPLGNBQWMsRUFBRUMsWUFBWSxFQUFFO0lBQ3JFLElBQUlDO0lBRUpELGFBQWFFLEtBQUssQ0FBQ0g7SUFFbkIsSUFBTUksYUFBYVYsZ0JBQWdCTTtJQUVuQ0UscUJBQXFCRSxXQUFXQyxLQUFLLENBQUMsU0FBQ0MsV0FBYztRQUNuRCxJQUFNQyxnQkFBZ0JDLFlBQVlGLFdBQVdMO1FBRTdDLElBQUlNLGVBQWU7WUFDakIsT0FBTyxJQUFJO1FBQ2IsQ0FBQztJQUNIO0lBRUFMLHFCQUNFRCxhQUFhUSxRQUFRLENBQUNULGtCQUNwQkMsYUFBYVMsSUFBSSxDQUFDVixlQUFlO0lBRXJDLE9BQU9FO0FBQ1Q7QUFFQSxTQUFTUyxvQkFBb0JDLGlCQUFpQixFQUFFWCxZQUFZLEVBQUU7SUFDNUQsSUFBSVk7SUFFSlosYUFBYUUsS0FBSyxDQUFDUztJQUVuQixJQUFNUixhQUFhVixnQkFBZ0JrQjtJQUVuQ0Msd0JBQXdCVCxXQUFXQyxLQUFLLENBQUMsU0FBQ0MsV0FBYztRQUN0RCxJQUFNQyxnQkFBZ0JDLFlBQVlGLFdBQVdMO1FBRTdDLElBQUlNLGVBQWU7WUFDakIsT0FBTyxJQUFJO1FBQ2IsQ0FBQztJQUNIO0lBRUFNLHdCQUNFWixhQUFhUSxRQUFRLENBQUNHLHFCQUNwQlgsYUFBYVMsSUFBSSxDQUFDRSxrQkFBa0I7SUFFeEMsT0FBT0M7QUFDVDtBQUVBLFNBQVNDLGVBQWVDLFlBQVksRUFBRWQsWUFBWSxFQUFFO0lBQ2xELElBQUllLG1CQUFtQixLQUFLO0lBRTVCZixlQUFlZ0IsZUFBWSxDQUFDQyxnQkFBZ0IsQ0FBQ2pCLGVBQWUsR0FBRztJQUUvRCxJQUFNa0IsZUFBZSxFQUFFLEVBQ2pCQyxtQkFBbUJ0QixzQkFBc0JpQixlQUN6Q00sdUJBQXVCRCxpQkFBaUJmLEtBQUssQ0FBQyxTQUFDaUIsaUJBQW9CO1FBQ2pFLElBQU1DLHNCQUFzQkMsSUFBQUEsb0JBQWlCLEVBQUNGLGlCQUFpQkgsY0FBY2xCO1FBRTdFLElBQUlzQixxQkFBcUI7WUFDdkIsT0FBTyxJQUFJO1FBQ2IsQ0FBQztJQUNIO0lBRU4sSUFBSUYsc0JBQXNCO1FBQ3hCLElBQU1ULG9CQUFvQmIsdUJBQXVCZ0IsZUFDM0NGLHdCQUF3QkYsb0JBQW9CQyxtQkFBbUJYO1FBRXJFLElBQUlZLHVCQUF1QjtZQUN6QkcsbUJBQW1CLElBQUk7UUFDekIsQ0FBQztJQUNILENBQUM7SUFFRCxPQUFPQTtBQUNUO0FBRUEsU0FBU1IsWUFBWUYsU0FBUyxFQUFFTCxZQUFZLEVBQUU7SUFDNUMsSUFBSU07SUFFSixJQUFNa0Isb0JBQW9CbkIsVUFBVW9CLFdBQVc7SUFFL0MsT0FBUUQ7UUFDTixLQUFLRSw2QkFBa0I7WUFBRTtnQkFDdkIsSUFBTVosZUFBZVQsV0FDZlUsbUJBQW1CRixlQUFlQyxjQUFjZDtnQkFFdEQsSUFBSWUsa0JBQWtCO29CQUNwQixJQUFNWSxZQUFZQyxjQUFTLENBQUNDLGdCQUFnQixDQUFDZjtvQkFFN0NkLGFBQWE4QixZQUFZLENBQUNIO29CQUUxQnJCLGdCQUFnQixJQUFJO2dCQUN0QixDQUFDO2dCQUVELEtBQU07WUFDUjtRQUVBLEtBQUt5Qix3Q0FBNkI7WUFBRTtnQkFDbEMsSUFBTUMsVUFBVSxJQUFJLEVBQ2RDLGFBQWEsRUFBRSxFQUNmQyx5QkFBeUI3QixXQUN6QjhCLDZCQUE2QkMsSUFBQUEsa0JBQXdCLEVBQUNGLHdCQUF3QkQsWUFBWUQsU0FBU2hDO2dCQUV6RyxJQUFJbUMsNEJBQTRCO29CQUM5QixJQUFNRSxnQkFBZ0IxQyxtQkFBbUJ1Qyx5QkFDbkNQLGFBQVlDLGNBQVMsQ0FBQ1UsaUJBQWlCLENBQUNEO29CQUU5Q3JDLGFBQWE4QixZQUFZLENBQUNIO29CQUUxQnJCLGdCQUFnQjZCLDRCQUE0QixHQUFHO2dCQUNqRCxDQUFDO2dCQUVELEtBQU07WUFDUjtRQUVBLEtBQUtJLDBDQUErQjtZQUFFO2dCQUNwQyxJQUFNUCxXQUFVLElBQUksRUFDZEMsY0FBYSxFQUFFLEVBQ2ZPLDJCQUEyQm5DLFdBQzNCb0MsK0JBQStCQyxJQUFBQSxvQkFBMEIsRUFBQ0YsMEJBQTBCUCxhQUFZRCxVQUFTaEM7Z0JBRS9HLElBQUl5Qyw4QkFBOEI7b0JBQ2hDLElBQU1KLGlCQUFnQjFDLG1CQUFtQjZDLDJCQUNuQ2IsYUFBWUMsY0FBUyxDQUFDVSxpQkFBaUIsQ0FBQ0Q7b0JBRTlDckMsYUFBYThCLFlBQVksQ0FBQ0g7b0JBRTFCckIsZ0JBQWdCLElBQUk7Z0JBQ3RCLENBQUM7Z0JBRUQsS0FBTTtZQUNSO0lBQ0Y7SUFFQSxPQUFPQTtBQUNUIn0=