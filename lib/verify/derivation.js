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
var _proof = /*#__PURE__*/ _interop_require_default(require("../step/proof"));
var _proof1 = /*#__PURE__*/ _interop_require_default(require("../context/proof"));
var _supposition = /*#__PURE__*/ _interop_require_default(require("./supposition"));
var _qualified = /*#__PURE__*/ _interop_require_default(require("../verify/statement/qualified"));
var _unqualified = /*#__PURE__*/ _interop_require_default(require("../verify/statement/unqualified"));
var _query = require("../utilities/query");
var _ruleNames = require("../ruleNames");
function _interop_require_default(obj) {
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
                var derived = true, assignments = [], qualifiedStatementNode = childNode, qualifiedStatementVerified = (0, _qualified.default)(qualifiedStatementNode, assignments, derived, proofContext);
                if (qualifiedStatementVerified) {
                    var statementNode = statementNodeQuery(qualifiedStatementNode), proofStep1 = _proof.default.fromStatementNode(statementNode);
                    proofContext.addProofStep(proofStep1);
                    childVerified = qualifiedStatementVerified; ///
                }
                break;
            }
        case _ruleNames.UNQUALIFIED_STATEMENT_RULE_NAME:
            {
                var derived1 = true, assignments1 = [], unqualifiedStatementNode = childNode, unqualifiedStatementVerified = (0, _unqualified.default)(unqualifiedStatementNode, assignments1, derived1, proofContext);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92ZXJpZnkvZGVyaXZhdGlvbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFByb29mU3RlcCBmcm9tIFwiLi4vc3RlcC9wcm9vZlwiO1xuaW1wb3J0IFByb29mQ29udGV4dCBmcm9tIFwiLi4vY29udGV4dC9wcm9vZlwiO1xuaW1wb3J0IHZlcmlmeVN1cHBvc2l0aW9uIGZyb20gXCIuL3N1cHBvc2l0aW9uXCI7XG5pbXBvcnQgdmVyaWZ5UXVhbGlmaWVkU3RhdGVtZW50IGZyb20gXCIuLi92ZXJpZnkvc3RhdGVtZW50L3F1YWxpZmllZFwiO1xuaW1wb3J0IHZlcmlmeVVucXVhbGlmaWVkU3RhdGVtZW50IGZyb20gXCIuLi92ZXJpZnkvc3RhdGVtZW50L3VucXVhbGlmaWVkXCI7XG5cbmltcG9ydCB7IG5vZGVRdWVyeSwgbm9kZXNRdWVyeSB9IGZyb20gXCIuLi91dGlsaXRpZXMvcXVlcnlcIjtcbmltcG9ydCB7IFNVQlBST09GX1JVTEVfTkFNRSwgUVVBTElGSUVEX1NUQVRFTUVOVF9SVUxFX05BTUUsIFVOUVVBTElGSUVEX1NUQVRFTUVOVF9SVUxFX05BTUUgfSBmcm9tIFwiLi4vcnVsZU5hbWVzXCI7XG5cbmNvbnN0IGNoaWxkTm9kZXNRdWVyeSA9IG5vZGVzUXVlcnkoXCIvZGVyaXZhdGlvbnxzdWJEZXJpdmF0aW9uLypcIiksXG4gICAgICBzdGF0ZW1lbnROb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvcXVhbGlmaWVkU3RhdGVtZW50fHVucXVhbGlmaWVkU3RhdGVtZW50L3N0YXRlbWVudCFcIiksXG4gICAgICBzdXBwb3NpdGlvbk5vZGVzUXVlcnkgPSBub2Rlc1F1ZXJ5KFwiL3N1YnByb29mL3N1cHBvc2l0aW9uXCIpLFxuICAgICAgc3ViRGVyaXZhdGlvbk5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9zdWJwcm9vZi9zdWJEZXJpdmF0aW9uXCIpO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB2ZXJpZnlEZXJpdmF0aW9uKGRlcml2YXRpb25Ob2RlLCBwcm9vZkNvbnRleHQpIHtcbiAgbGV0IGRlcml2YXRpb25WZXJpZmllZDtcblxuICBjb25zdCBjaGlsZE5vZGVzID0gY2hpbGROb2Rlc1F1ZXJ5KGRlcml2YXRpb25Ob2RlKTtcblxuICBkZXJpdmF0aW9uVmVyaWZpZWQgPSBjaGlsZE5vZGVzLmV2ZXJ5KChjaGlsZE5vZGUpID0+IHtcbiAgICBjb25zdCBjaGlsZFZlcmlmaWVkID0gdmVyaWZ5Q2hpbGQoY2hpbGROb2RlLCBwcm9vZkNvbnRleHQpO1xuXG4gICAgaWYgKGNoaWxkVmVyaWZpZWQpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIGRlcml2YXRpb25WZXJpZmllZDtcbn1cblxuZnVuY3Rpb24gdmVyaWZ5U3ViRGVyaXZhdGlvbihzdWJEZXJpdmF0aW9uTm9kZSwgcHJvb2ZDb250ZXh0KSB7XG4gIGxldCBzdWJEZXJpdmF0aW9uVmVyaWZpZWQ7XG5cbiAgY29uc3QgY2hpbGROb2RlcyA9IGNoaWxkTm9kZXNRdWVyeShzdWJEZXJpdmF0aW9uTm9kZSk7XG5cbiAgc3ViRGVyaXZhdGlvblZlcmlmaWVkID0gY2hpbGROb2Rlcy5ldmVyeSgoY2hpbGROb2RlKSA9PiB7XG4gICAgY29uc3QgY2hpbGRWZXJpZmllZCA9IHZlcmlmeUNoaWxkKGNoaWxkTm9kZSwgcHJvb2ZDb250ZXh0KTtcblxuICAgIGlmIChjaGlsZFZlcmlmaWVkKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiBzdWJEZXJpdmF0aW9uVmVyaWZpZWQ7XG59XG5cbmZ1bmN0aW9uIHZlcmlmeVN1YnByb29mKHN1YnByb29mTm9kZSwgcHJvb2ZDb250ZXh0KSB7XG4gIGxldCBzdWJwcm9vZlZlcmlmaWVkID0gZmFsc2U7XG5cbiAgcHJvb2ZDb250ZXh0ID0gUHJvb2ZDb250ZXh0LmZyb21Qcm9vZkNvbnRleHQocHJvb2ZDb250ZXh0KTsgLy8vXG5cbiAgY29uc3Qgc3VwcG9zaXRpb25zID0gW10sXG4gICAgICAgIHN1cHBvc2l0aW9uTm9kZXMgPSBzdXBwb3NpdGlvbk5vZGVzUXVlcnkoc3VicHJvb2ZOb2RlKSxcbiAgICAgICAgc3VwcG9zaXRpb25zVmVyaWZpZWQgPSBzdXBwb3NpdGlvbk5vZGVzLmV2ZXJ5KChzdXBwb3NpdGlvbk5vZGUpID0+IHtcbiAgICAgICAgICBjb25zdCBzdXBwb3NpdGlvblZlcmlmaWVkID0gdmVyaWZ5U3VwcG9zaXRpb24oc3VwcG9zaXRpb25Ob2RlLCBzdXBwb3NpdGlvbnMsIHByb29mQ29udGV4dCk7XG5cbiAgICAgICAgICBpZiAoc3VwcG9zaXRpb25WZXJpZmllZCkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICBpZiAoc3VwcG9zaXRpb25zVmVyaWZpZWQpIHtcbiAgICBjb25zdCBzdWJEZXJpdmF0aW9uTm9kZSA9IHN1YkRlcml2YXRpb25Ob2RlUXVlcnkoc3VicHJvb2ZOb2RlKSxcbiAgICAgICAgICBzdWJEZXJpdmF0aW9uVmVyaWZpZWQgPSB2ZXJpZnlTdWJEZXJpdmF0aW9uKHN1YkRlcml2YXRpb25Ob2RlLCBwcm9vZkNvbnRleHQpO1xuXG4gICAgaWYgKHN1YkRlcml2YXRpb25WZXJpZmllZCkge1xuICAgICAgc3VicHJvb2ZWZXJpZmllZCA9IHRydWU7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHN1YnByb29mVmVyaWZpZWQ7XG59XG5cbmZ1bmN0aW9uIHZlcmlmeUNoaWxkKGNoaWxkTm9kZSwgcHJvb2ZDb250ZXh0KSB7XG4gIGxldCBjaGlsZFZlcmlmaWVkO1xuXG4gIGNvbnN0IGNoaWxkTm9kZVJ1bGVOYW1lID0gY2hpbGROb2RlLmdldFJ1bGVOYW1lKCk7XG5cbiAgc3dpdGNoIChjaGlsZE5vZGVSdWxlTmFtZSkge1xuICAgIGNhc2UgU1VCUFJPT0ZfUlVMRV9OQU1FOiB7XG4gICAgICBjb25zdCBzdWJwcm9vZk5vZGUgPSBjaGlsZE5vZGUsICAvLy9cbiAgICAgICAgICAgIHN1YnByb29mVmVyaWZpZWQgPSB2ZXJpZnlTdWJwcm9vZihzdWJwcm9vZk5vZGUsIHByb29mQ29udGV4dCk7XG5cbiAgICAgIGlmIChzdWJwcm9vZlZlcmlmaWVkKSB7XG4gICAgICAgIGNvbnN0IHByb29mU3RlcCA9IFByb29mU3RlcC5mcm9tU3VicHJvb2ZOb2RlKHN1YnByb29mTm9kZSk7XG5cbiAgICAgICAgcHJvb2ZDb250ZXh0LmFkZFByb29mU3RlcChwcm9vZlN0ZXApO1xuXG4gICAgICAgIGNoaWxkVmVyaWZpZWQgPSB0cnVlO1xuICAgICAgfVxuXG4gICAgICBicmVhaztcbiAgICB9XG5cbiAgICBjYXNlIFFVQUxJRklFRF9TVEFURU1FTlRfUlVMRV9OQU1FOiB7XG4gICAgICBjb25zdCBkZXJpdmVkID0gdHJ1ZSxcbiAgICAgICAgICAgIGFzc2lnbm1lbnRzID0gW10sXG4gICAgICAgICAgICBxdWFsaWZpZWRTdGF0ZW1lbnROb2RlID0gY2hpbGROb2RlLCAgLy8vXG4gICAgICAgICAgICBxdWFsaWZpZWRTdGF0ZW1lbnRWZXJpZmllZCA9IHZlcmlmeVF1YWxpZmllZFN0YXRlbWVudChxdWFsaWZpZWRTdGF0ZW1lbnROb2RlLCBhc3NpZ25tZW50cywgZGVyaXZlZCwgcHJvb2ZDb250ZXh0KTtcblxuICAgICAgaWYgKHF1YWxpZmllZFN0YXRlbWVudFZlcmlmaWVkKSB7XG4gICAgICAgIGNvbnN0IHN0YXRlbWVudE5vZGUgPSBzdGF0ZW1lbnROb2RlUXVlcnkocXVhbGlmaWVkU3RhdGVtZW50Tm9kZSksXG4gICAgICAgICAgICAgIHByb29mU3RlcCA9IFByb29mU3RlcC5mcm9tU3RhdGVtZW50Tm9kZShzdGF0ZW1lbnROb2RlKTtcblxuICAgICAgICBwcm9vZkNvbnRleHQuYWRkUHJvb2ZTdGVwKHByb29mU3RlcCk7XG5cbiAgICAgICAgY2hpbGRWZXJpZmllZCA9IHF1YWxpZmllZFN0YXRlbWVudFZlcmlmaWVkOyAvLy9cbiAgICAgIH1cblxuICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgY2FzZSBVTlFVQUxJRklFRF9TVEFURU1FTlRfUlVMRV9OQU1FOiB7XG4gICAgICBjb25zdCBkZXJpdmVkID0gdHJ1ZSxcbiAgICAgICAgICAgIGFzc2lnbm1lbnRzID0gW10sXG4gICAgICAgICAgICB1bnF1YWxpZmllZFN0YXRlbWVudE5vZGUgPSBjaGlsZE5vZGUsICAvLy9cbiAgICAgICAgICAgIHVucXVhbGlmaWVkU3RhdGVtZW50VmVyaWZpZWQgPSB2ZXJpZnlVbnF1YWxpZmllZFN0YXRlbWVudCh1bnF1YWxpZmllZFN0YXRlbWVudE5vZGUsIGFzc2lnbm1lbnRzLCBkZXJpdmVkLCBwcm9vZkNvbnRleHQpO1xuXG4gICAgICBpZiAodW5xdWFsaWZpZWRTdGF0ZW1lbnRWZXJpZmllZCkge1xuICAgICAgICBjb25zdCBzdGF0ZW1lbnROb2RlID0gc3RhdGVtZW50Tm9kZVF1ZXJ5KHVucXVhbGlmaWVkU3RhdGVtZW50Tm9kZSksXG4gICAgICAgICAgICAgIHByb29mU3RlcCA9IFByb29mU3RlcC5mcm9tU3RhdGVtZW50Tm9kZShzdGF0ZW1lbnROb2RlKTtcblxuICAgICAgICBwcm9vZkNvbnRleHQuYWRkUHJvb2ZTdGVwKHByb29mU3RlcCk7XG5cbiAgICAgICAgY2hpbGRWZXJpZmllZCA9IHRydWU7XG4gICAgICB9XG5cbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBjaGlsZFZlcmlmaWVkO1xufVxuIl0sIm5hbWVzIjpbInZlcmlmeURlcml2YXRpb24iLCJjaGlsZE5vZGVzUXVlcnkiLCJub2Rlc1F1ZXJ5Iiwic3RhdGVtZW50Tm9kZVF1ZXJ5Iiwibm9kZVF1ZXJ5Iiwic3VwcG9zaXRpb25Ob2Rlc1F1ZXJ5Iiwic3ViRGVyaXZhdGlvbk5vZGVRdWVyeSIsImRlcml2YXRpb25Ob2RlIiwicHJvb2ZDb250ZXh0IiwiZGVyaXZhdGlvblZlcmlmaWVkIiwiY2hpbGROb2RlcyIsImV2ZXJ5IiwiY2hpbGROb2RlIiwiY2hpbGRWZXJpZmllZCIsInZlcmlmeUNoaWxkIiwidmVyaWZ5U3ViRGVyaXZhdGlvbiIsInN1YkRlcml2YXRpb25Ob2RlIiwic3ViRGVyaXZhdGlvblZlcmlmaWVkIiwidmVyaWZ5U3VicHJvb2YiLCJzdWJwcm9vZk5vZGUiLCJzdWJwcm9vZlZlcmlmaWVkIiwiUHJvb2ZDb250ZXh0IiwiZnJvbVByb29mQ29udGV4dCIsInN1cHBvc2l0aW9ucyIsInN1cHBvc2l0aW9uTm9kZXMiLCJzdXBwb3NpdGlvbnNWZXJpZmllZCIsInN1cHBvc2l0aW9uTm9kZSIsInN1cHBvc2l0aW9uVmVyaWZpZWQiLCJ2ZXJpZnlTdXBwb3NpdGlvbiIsImNoaWxkTm9kZVJ1bGVOYW1lIiwiZ2V0UnVsZU5hbWUiLCJTVUJQUk9PRl9SVUxFX05BTUUiLCJwcm9vZlN0ZXAiLCJQcm9vZlN0ZXAiLCJmcm9tU3VicHJvb2ZOb2RlIiwiYWRkUHJvb2ZTdGVwIiwiUVVBTElGSUVEX1NUQVRFTUVOVF9SVUxFX05BTUUiLCJkZXJpdmVkIiwiYXNzaWdubWVudHMiLCJxdWFsaWZpZWRTdGF0ZW1lbnROb2RlIiwicXVhbGlmaWVkU3RhdGVtZW50VmVyaWZpZWQiLCJ2ZXJpZnlRdWFsaWZpZWRTdGF0ZW1lbnQiLCJzdGF0ZW1lbnROb2RlIiwiZnJvbVN0YXRlbWVudE5vZGUiLCJVTlFVQUxJRklFRF9TVEFURU1FTlRfUlVMRV9OQU1FIiwidW5xdWFsaWZpZWRTdGF0ZW1lbnROb2RlIiwidW5xdWFsaWZpZWRTdGF0ZW1lbnRWZXJpZmllZCIsInZlcmlmeVVucXVhbGlmaWVkU3RhdGVtZW50Il0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFnQkE7OztlQUF3QkE7Ozs0REFkRjs2REFDRztrRUFDSztnRUFDTztrRUFDRTtxQkFFRDt5QkFDNkQ7Ozs7OztBQUVuRyxJQUFNQyxrQkFBa0JDLElBQUFBLGlCQUFVLEVBQUMsZ0NBQzdCQyxxQkFBcUJDLElBQUFBLGdCQUFTLEVBQUMsd0RBQy9CQyx3QkFBd0JILElBQUFBLGlCQUFVLEVBQUMsMEJBQ25DSSx5QkFB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