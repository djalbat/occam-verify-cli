"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return verifyRuleDerivation;
    }
});
var _metaproof = /*#__PURE__*/ _interop_require_default(require("../step/metaproof"));
var _premise = /*#__PURE__*/ _interop_require_default(require("../verify/premise"));
var _metaproof1 = /*#__PURE__*/ _interop_require_default(require("../context/metaproof"));
var _qualified = /*#__PURE__*/ _interop_require_default(require("../verify/metastatement/qualified"));
var _unqualified = /*#__PURE__*/ _interop_require_default(require("../verify/metastatement/unqualified"));
var _query = require("../utilities/query");
var _ruleNames = require("../ruleNames");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var childNodesQuery = (0, _query.nodesQuery)("/ruleDerivation|ruleSubDerivation/*"), premiseNodesQuery = (0, _query.nodesQuery)("/ruleSubproof/premise"), metastatementNodeQuery = (0, _query.nodeQuery)("/qualifiedMetastatement|unqualifiedMetastatement/metastatement!"), ruleSubDerivationNodeQuery = (0, _query.nodeQuery)("/ruleSubproof/ruleSubDerivation");
function verifyRuleDerivation(ruleDerivationNode, metaproofContext) {
    var ruleDerivationVerified;
    var childNodes = childNodesQuery(ruleDerivationNode);
    ruleDerivationVerified = childNodes.every(function(childNode) {
        var childVerified = verifyChild(childNode, metaproofContext);
        if (childVerified) {
            return true;
        }
    });
    return ruleDerivationVerified;
}
function verifyRuleSubDerivation(ruleSubDerivationNode, metaproofContext) {
    var ruleSubDerivationVerified;
    var childNodes = childNodesQuery(ruleSubDerivationNode);
    ruleSubDerivationVerified = childNodes.every(function(childNode) {
        var childVerified = verifyChild(childNode, metaproofContext);
        if (childVerified) {
            return true;
        }
    });
    return ruleSubDerivationVerified;
}
function verifyRuleSubproof(ruleSubproofNode, metaproofContext) {
    var ruleSubproofVerified = false;
    metaproofContext = _metaproof1.default.fromMetaproofContext(metaproofContext); ///
    var premises = [], premiseNodes = premiseNodesQuery(ruleSubproofNode), premisesVerified = premiseNodes.every(function(premiseNode) {
        var premiseVerified = (0, _premise.default)(premiseNode, premises, metaproofContext);
        if (premiseVerified) {
            return true;
        }
    });
    if (premisesVerified) {
        var ruleSubDerivationNode = ruleSubDerivationNodeQuery(ruleSubproofNode), ruleSubDerivationVerified = verifyRuleSubDerivation(ruleSubDerivationNode, metaproofContext);
        if (ruleSubDerivationVerified) {
            ruleSubproofVerified = true;
        }
    }
    return ruleSubproofVerified;
}
function verifyChild(childNode, metaproofContext) {
    var childVerified;
    var childNodeRuleName = childNode.getRuleName();
    switch(childNodeRuleName){
        case _ruleNames.RULE_SUBPROOF_RULE_NAME:
            {
                var ruleSubproofNode = childNode, ruleSubproofVerified = verifyRuleSubproof(ruleSubproofNode, metaproofContext);
                if (ruleSubproofVerified) {
                    var metaproofStep = _metaproof.default.fromRuleSubproofNode(ruleSubproofNode);
                    metaproofContext.addMetaproofStep(metaproofStep);
                    childVerified = true;
                }
                break;
            }
        case _ruleNames.QUALIFIED_METASTATEMENT_RULE_NAME:
            {
                var derived = true, assignments = [], qualifiedMetastatementNode = childNode, qualifiedMetastatementVerified = (0, _qualified.default)(qualifiedMetastatementNode, assignments, derived, metaproofContext);
                if (qualifiedMetastatementVerified) {
                    var metastatementNode = metastatementNodeQuery(qualifiedMetastatementNode), metaproofStep1 = _metaproof.default.fromMetastatementNode(metastatementNode);
                    metaproofContext.addMetaproofStep(metaproofStep1);
                    childVerified = qualifiedMetastatementVerified; ///
                }
                break;
            }
        case _ruleNames.UNQUALIFIED_METASTATEMENT_RULE_NAME:
            {
                var derived1 = true, unqualifiedMetastatementNode = childNode, unqualifiedMetastatementVerified = (0, _unqualified.default)(unqualifiedMetastatementNode, derived1, metaproofContext);
                if (unqualifiedMetastatementVerified) {
                    var metastatementNode1 = metastatementNodeQuery(unqualifiedMetastatementNode), metaproofStep2 = _metaproof.default.fromMetastatementNode(metastatementNode1);
                    metaproofContext.addMetaproofStep(metaproofStep2);
                    childVerified = true;
                }
                break;
            }
    }
    return childVerified;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92ZXJpZnkvcnVsZURlcml2YXRpb24uanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBNZXRhcHJvb2ZTdGVwIGZyb20gXCIuLi9zdGVwL21ldGFwcm9vZlwiO1xuaW1wb3J0IHZlcmlmeVByZW1pc2UgZnJvbSBcIi4uL3ZlcmlmeS9wcmVtaXNlXCI7XG5pbXBvcnQgTWV0YXByb29mQ29udGV4dCBmcm9tIFwiLi4vY29udGV4dC9tZXRhcHJvb2ZcIjtcbmltcG9ydCB2ZXJpZnlRdWFsaWZpZWRNZXRhc3RhdGVtZW50IGZyb20gXCIuLi92ZXJpZnkvbWV0YXN0YXRlbWVudC9xdWFsaWZpZWRcIjtcbmltcG9ydCB2ZXJpZnlVbnF1YWxpZmllZE1ldGFzdGF0ZW1lbnQgZnJvbSBcIi4uL3ZlcmlmeS9tZXRhc3RhdGVtZW50L3VucXVhbGlmaWVkXCI7XG5cbmltcG9ydCB7IG5vZGVRdWVyeSwgbm9kZXNRdWVyeSB9IGZyb20gXCIuLi91dGlsaXRpZXMvcXVlcnlcIjtcbmltcG9ydCB7IFJVTEVfU1VCUFJPT0ZfUlVMRV9OQU1FLCBRVUFMSUZJRURfTUVUQVNUQVRFTUVOVF9SVUxFX05BTUUsIFVOUVVBTElGSUVEX01FVEFTVEFURU1FTlRfUlVMRV9OQU1FIH0gZnJvbSBcIi4uL3J1bGVOYW1lc1wiO1xuXG5jb25zdCBjaGlsZE5vZGVzUXVlcnkgPSBub2Rlc1F1ZXJ5KFwiL3J1bGVEZXJpdmF0aW9ufHJ1bGVTdWJEZXJpdmF0aW9uLypcIiksXG4gICAgICBwcmVtaXNlTm9kZXNRdWVyeSA9IG5vZGVzUXVlcnkoXCIvcnVsZVN1YnByb29mL3ByZW1pc2VcIiksXG4gICAgICBtZXRhc3RhdGVtZW50Tm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3F1YWxpZmllZE1ldGFzdGF0ZW1lbnR8dW5xdWFsaWZpZWRNZXRhc3RhdGVtZW50L21ldGFzdGF0ZW1lbnQhXCIpLFxuICAgICAgcnVsZVN1YkRlcml2YXRpb25Ob2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvcnVsZVN1YnByb29mL3J1bGVTdWJEZXJpdmF0aW9uXCIpO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB2ZXJpZnlSdWxlRGVyaXZhdGlvbihydWxlRGVyaXZhdGlvbk5vZGUsIG1ldGFwcm9vZkNvbnRleHQpIHtcbiAgbGV0IHJ1bGVEZXJpdmF0aW9uVmVyaWZpZWQ7XG5cbiAgY29uc3QgY2hpbGROb2RlcyA9IGNoaWxkTm9kZXNRdWVyeShydWxlRGVyaXZhdGlvbk5vZGUpO1xuXG4gIHJ1bGVEZXJpdmF0aW9uVmVyaWZpZWQgPSBjaGlsZE5vZGVzLmV2ZXJ5KChjaGlsZE5vZGUpID0+IHtcbiAgICBjb25zdCBjaGlsZFZlcmlmaWVkID0gdmVyaWZ5Q2hpbGQoY2hpbGROb2RlLCBtZXRhcHJvb2ZDb250ZXh0KTtcblxuICAgIGlmIChjaGlsZFZlcmlmaWVkKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiBydWxlRGVyaXZhdGlvblZlcmlmaWVkO1xufVxuXG5mdW5jdGlvbiB2ZXJpZnlSdWxlU3ViRGVyaXZhdGlvbihydWxlU3ViRGVyaXZhdGlvbk5vZGUsIG1ldGFwcm9vZkNvbnRleHQpIHtcbiAgbGV0IHJ1bGVTdWJEZXJpdmF0aW9uVmVyaWZpZWQ7XG5cbiAgY29uc3QgY2hpbGROb2RlcyA9IGNoaWxkTm9kZXNRdWVyeShydWxlU3ViRGVyaXZhdGlvbk5vZGUpO1xuXG4gIHJ1bGVTdWJEZXJpdmF0aW9uVmVyaWZpZWQgPSBjaGlsZE5vZGVzLmV2ZXJ5KChjaGlsZE5vZGUpID0+IHtcbiAgICBjb25zdCBjaGlsZFZlcmlmaWVkID0gdmVyaWZ5Q2hpbGQoY2hpbGROb2RlLCBtZXRhcHJvb2ZDb250ZXh0KTtcblxuICAgIGlmIChjaGlsZFZlcmlmaWVkKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiBydWxlU3ViRGVyaXZhdGlvblZlcmlmaWVkO1xufVxuXG5mdW5jdGlvbiB2ZXJpZnlSdWxlU3VicHJvb2YocnVsZVN1YnByb29mTm9kZSwgbWV0YXByb29mQ29udGV4dCkge1xuICBsZXQgcnVsZVN1YnByb29mVmVyaWZpZWQgPSBmYWxzZTtcblxuICBtZXRhcHJvb2ZDb250ZXh0ID0gTWV0YXByb29mQ29udGV4dC5mcm9tTWV0YXByb29mQ29udGV4dChtZXRhcHJvb2ZDb250ZXh0KTsgLy8vXG5cbiAgY29uc3QgcHJlbWlzZXMgPSBbXSxcbiAgICAgICAgcHJlbWlzZU5vZGVzID0gcHJlbWlzZU5vZGVzUXVlcnkocnVsZVN1YnByb29mTm9kZSksXG4gICAgICAgIHByZW1pc2VzVmVyaWZpZWQgPSBwcmVtaXNlTm9kZXMuZXZlcnkoKHByZW1pc2VOb2RlKSA9PiB7XG4gICAgICAgICAgY29uc3QgcHJlbWlzZVZlcmlmaWVkID0gdmVyaWZ5UHJlbWlzZShwcmVtaXNlTm9kZSwgcHJlbWlzZXMsIG1ldGFwcm9vZkNvbnRleHQpO1xuXG4gICAgICAgICAgaWYgKHByZW1pc2VWZXJpZmllZCkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICBpZiAocHJlbWlzZXNWZXJpZmllZCkge1xuICAgIGNvbnN0IHJ1bGVTdWJEZXJpdmF0aW9uTm9kZSA9IHJ1bGVTdWJEZXJpdmF0aW9uTm9kZVF1ZXJ5KHJ1bGVTdWJwcm9vZk5vZGUpLFxuICAgICAgICAgIHJ1bGVTdWJEZXJpdmF0aW9uVmVyaWZpZWQgPSB2ZXJpZnlSdWxlU3ViRGVyaXZhdGlvbihydWxlU3ViRGVyaXZhdGlvbk5vZGUsIG1ldGFwcm9vZkNvbnRleHQpO1xuXG4gICAgaWYgKHJ1bGVTdWJEZXJpdmF0aW9uVmVyaWZpZWQpIHtcbiAgICAgIHJ1bGVTdWJwcm9vZlZlcmlmaWVkID0gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcnVsZVN1YnByb29mVmVyaWZpZWQ7XG59XG5cbmZ1bmN0aW9uIHZlcmlmeUNoaWxkKGNoaWxkTm9kZSwgbWV0YXByb29mQ29udGV4dCkge1xuICBsZXQgY2hpbGRWZXJpZmllZDtcblxuICBjb25zdCBjaGlsZE5vZGVSdWxlTmFtZSA9IGNoaWxkTm9kZS5nZXRSdWxlTmFtZSgpO1xuXG4gIHN3aXRjaCAoY2hpbGROb2RlUnVsZU5hbWUpIHtcbiAgICBjYXNlIFJVTEVfU1VCUFJPT0ZfUlVMRV9OQU1FOiB7XG4gICAgICBjb25zdCBydWxlU3VicHJvb2ZOb2RlID0gY2hpbGROb2RlLCAgLy8vXG4gICAgICAgICAgICBydWxlU3VicHJvb2ZWZXJpZmllZCA9IHZlcmlmeVJ1bGVTdWJwcm9vZihydWxlU3VicHJvb2ZOb2RlLCBtZXRhcHJvb2ZDb250ZXh0KTtcblxuICAgICAgaWYgKHJ1bGVTdWJwcm9vZlZlcmlmaWVkKSB7XG4gICAgICAgIGNvbnN0IG1ldGFwcm9vZlN0ZXAgPSBNZXRhcHJvb2ZTdGVwLmZyb21SdWxlU3VicHJvb2ZOb2RlKHJ1bGVTdWJwcm9vZk5vZGUpO1xuXG4gICAgICAgIG1ldGFwcm9vZkNvbnRleHQuYWRkTWV0YXByb29mU3RlcChtZXRhcHJvb2ZTdGVwKTtcblxuICAgICAgICBjaGlsZFZlcmlmaWVkID0gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgY2FzZSBRVUFMSUZJRURfTUVUQVNUQVRFTUVOVF9SVUxFX05BTUU6IHtcbiAgICAgIGNvbnN0IGRlcml2ZWQgPSB0cnVlLFxuICAgICAgICAgICAgYXNzaWdubWVudHMgPSBbXSxcbiAgICAgICAgICAgIHF1YWxpZmllZE1ldGFzdGF0ZW1lbnROb2RlID0gY2hpbGROb2RlLCAgLy8vXG4gICAgICAgICAgICBxdWFsaWZpZWRNZXRhc3RhdGVtZW50VmVyaWZpZWQgPSB2ZXJpZnlRdWFsaWZpZWRNZXRhc3RhdGVtZW50KHF1YWxpZmllZE1ldGFzdGF0ZW1lbnROb2RlLCBhc3NpZ25tZW50cywgZGVyaXZlZCwgbWV0YXByb29mQ29udGV4dCk7XG5cbiAgICAgIGlmIChxdWFsaWZpZWRNZXRhc3RhdGVtZW50VmVyaWZpZWQpIHtcbiAgICAgICAgY29uc3QgbWV0YXN0YXRlbWVudE5vZGUgPSBtZXRhc3RhdGVtZW50Tm9kZVF1ZXJ5KHF1YWxpZmllZE1ldGFzdGF0ZW1lbnROb2RlKSxcbiAgICAgICAgICAgICAgbWV0YXByb29mU3RlcCA9IE1ldGFwcm9vZlN0ZXAuZnJvbU1ldGFzdGF0ZW1lbnROb2RlKG1ldGFzdGF0ZW1lbnROb2RlKTtcblxuICAgICAgICBtZXRhcHJvb2ZDb250ZXh0LmFkZE1ldGFwcm9vZlN0ZXAobWV0YXByb29mU3RlcCk7XG5cbiAgICAgICAgY2hpbGRWZXJpZmllZCA9IHF1YWxpZmllZE1ldGFzdGF0ZW1lbnRWZXJpZmllZDsgLy8vXG4gICAgICB9XG5cbiAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIGNhc2UgVU5RVUFMSUZJRURfTUVUQVNUQVRFTUVOVF9SVUxFX05BTUU6IHtcbiAgICAgIGNvbnN0IGRlcml2ZWQgPSB0cnVlLFxuICAgICAgICAgICAgdW5xdWFsaWZpZWRNZXRhc3RhdGVtZW50Tm9kZSA9IGNoaWxkTm9kZSwgIC8vL1xuICAgICAgICAgICAgdW5xdWFsaWZpZWRNZXRhc3RhdGVtZW50VmVyaWZpZWQgPSB2ZXJpZnlVbnF1YWxpZmllZE1ldGFzdGF0ZW1lbnQodW5xdWFsaWZpZWRNZXRhc3RhdGVtZW50Tm9kZSwgZGVyaXZlZCwgbWV0YXByb29mQ29udGV4dCk7XG5cbiAgICAgIGlmICh1bnF1YWxpZmllZE1ldGFzdGF0ZW1lbnRWZXJpZmllZCkge1xuICAgICAgICBjb25zdCBtZXRhc3RhdGVtZW50Tm9kZSA9IG1ldGFzdGF0ZW1lbnROb2RlUXVlcnkodW5xdWFsaWZpZWRNZXRhc3RhdGVtZW50Tm9kZSksXG4gICAgICAgICAgICAgIG1ldGFwcm9vZlN0ZXAgPSBNZXRhcHJvb2ZTdGVwLmZyb21NZXRhc3RhdGVtZW50Tm9kZShtZXRhc3RhdGVtZW50Tm9kZSk7XG5cbiAgICAgICAgbWV0YXByb29mQ29udGV4dC5hZGRNZXRhcHJvb2ZTdGVwKG1ldGFwcm9vZlN0ZXApO1xuXG4gICAgICAgIGNoaWxkVmVyaWZpZWQgPSB0cnVlO1xuICAgICAgfVxuXG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gY2hpbGRWZXJpZmllZDtcbn1cbiJdLCJuYW1lcyI6WyJ2ZXJpZnlSdWxlRGVyaXZhdGlvbiIsImNoaWxkTm9kZXNRdWVyeSIsIm5vZGVzUXVlcnkiLCJwcmVtaXNlTm9kZXNRdWVyeSIsIm1ldGFzdGF0ZW1lbnROb2RlUXVlcnkiLCJub2RlUXVlcnkiLCJydWxlU3ViRGVyaXZhdGlvbk5vZGVRdWVyeSIsInJ1bGVEZXJpdmF0aW9uTm9kZSIsIm1ldGFwcm9vZkNvbnRleHQiLCJydWxlRGVyaXZhdGlvblZlcmlmaWVkIiwiY2hpbGROb2RlcyIsImV2ZXJ5IiwiY2hpbGROb2RlIiwiY2hpbGRWZXJpZmllZCIsInZlcmlmeUNoaWxkIiwidmVyaWZ5UnVsZVN1YkRlcml2YXRpb24iLCJydWxlU3ViRGVyaXZhdGlvbk5vZGUiLCJydWxlU3ViRGVyaXZhdGlvblZlcmlmaWVkIiwidmVyaWZ5UnVsZVN1YnByb29mIiwicnVsZVN1YnByb29mTm9kZSIsInJ1bGVTdWJwcm9vZlZlcmlmaWVkIiwiTWV0YXByb29mQ29udGV4dCIsImZyb21NZXRhcHJvb2ZDb250ZXh0IiwicHJlbWlzZXMiLCJwcmVtaXNlTm9kZXMiLCJwcmVtaXNlc1ZlcmlmaWVkIiwicHJlbWlzZU5vZGUiLCJwcmVtaXNlVmVyaWZpZWQiLCJ2ZXJpZnlQcmVtaXNlIiwiY2hpbGROb2RlUnVsZU5hbWUiLCJnZXRSdWxlTmFtZSIsIlJVTEVfU1VCUFJPT0ZfUlVMRV9OQU1FIiwibWV0YXByb29mU3RlcCIsIk1ldGFwcm9vZlN0ZXAiLCJmcm9tUnVsZVN1YnByb29mTm9kZSIsImFkZE1ldGFwcm9vZlN0ZXAiLCJRVUFMSUZJRURfTUVUQVNUQVRFTUVOVF9SVUxFX05BTUUiLCJkZXJpdmVkIiwiYXNzaWdubWVudHMiLCJxdWFsaWZpZWRNZXRhc3RhdGVtZW50Tm9kZSIsInF1YWxpZmllZE1ldGFzdGF0ZW1lbnRWZXJpZmllZCIsInZlcmlmeVF1YWxpZmllZE1ldGFzdGF0ZW1lbnQiLCJtZXRhc3RhdGVtZW50Tm9kZSIsImZyb21NZXRhc3RhdGVtZW50Tm9kZSIsIlVOUVVBTElGSUVEX01FVEFTVEFURU1FTlRfUlVMRV9OQU1FIiwidW5xdWFsaWZpZWRNZXRhc3RhdGVtZW50Tm9kZSIsInVucXVhbGlmaWVkTWV0YXN0YXRlbWVudFZlcmlmaWVkIiwidmVyaWZ5VW5xdWFsaWZpZWRNZXRhc3RhdGVtZW50Il0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFnQkE7OztlQUF3QkE7OztnRUFkRTs4REFDQTtpRUFDRztnRUFDWTtrRUFDRTtxQkFFTDt5QkFDMEU7Ozs7OztBQUVoSCxJQUFNQyxrQkFBa0JDLElBQUFBLGlCQUFVLEVBQUMsd0NBQzdCQyxvQkFBb0JELElBQUFBLGlCQUFVLEVBQUMsMEJBQy9CRSx5QkFBeUJDLElBQUFBLGdCQUFTLEVBQUMsb0VBQ25DQyw2QkFBNkJELElBQUFBLGdCQUFTLEVBQUM7QUFFOUIsU0FBU0wscUJBQXFCTyxrQkFBa0IsRUFBRUMsZ0JBQWdCO0lBQy9FLElBQUlDO0lBRUosSUFBTUMsYUFBYVQsZ0JBQWdCTTtJQUVuQ0UseUJBQXlCQyxXQUFXQyxLQUFLLENBQUMsU0FBQ0M7UUFDekMsSUFBTUMsZ0JBQWdCQyxZQUFZRixXQUFXSjtRQUU3QyxJQUFJSyxlQUFlO1lBQ2pCLE9BQU87UUFDVDtJQUNGO0lBRUEsT0FBT0o7QUFDVDtBQUVBLFNBQVNNLHdCQUF3QkMscUJBQXFCLEVBQUVSLGdCQUFnQjtJQUN0RSxJQUFJUztJQUVKLElBQU1QLGFBQWFULGdCQUFnQmU7SUFFbkNDLDRCQUE0QlAsV0FBV0MsS0FBSyxDQUFDLFNBQUNDO1FBQzVDLElBQU1DLGdCQUFnQkMsWUFBWUYsV0FBV0o7UUFFN0MsSUFBSUssZUFBZTtZQUNqQixPQUFPO1FBQ1Q7SUFDRjtJQUVBLE9BQU9JO0FBQ1Q7QUFFQSxTQUFTQyxtQkFBbUJDLGdCQUFnQixFQUFFWCxnQkFBZ0I7SUFDNUQsSUFBSVksdUJBQXVCO0lBRTNCWixtQkFBbUJhLG1CQUFnQixDQUFDQyxvQkFBb0IsQ0FBQ2QsbUJBQW1CLEdBQUc7SUFFL0UsSUFBTWUsV0FBVyxFQUFFLEVBQ2JDLGVBQWVyQixrQkFBa0JnQixtQkFDakNNLG1CQUFtQkQsYUFBYWIsS0FBSyxDQUFDLFNBQUNlO1FBQ3JDLElBQU1DLGtCQUFrQkMsSUFBQUEsZ0JBQWEsRUFBQ0YsYUFBYUgsVUFBVWY7UUFFN0QsSUFBSW1CLGlCQUFpQjtZQUNuQixPQUFPO1FBQ1Q7SUFDRjtJQUVOLElBQUlGLGtCQUFrQjtRQUNwQixJQUFNVCx3QkFBd0JWLDJCQUEyQmEsbUJBQ25ERiw0QkFBNEJGLHdCQUF3QkMsdUJBQXVCUjtRQUVqRixJQUFJUywyQkFBMkI7WUFDN0JHLHVCQUF1QjtRQUN6QjtJQUNGO0lBRUEsT0FBT0E7QUFDVDtBQUVBLFNBQVNOLFlBQVlGLFNBQVMsRUFBRUosZ0JBQWdCO0lBQzlDLElBQUlLO0lBRUosSUFBTWdCLG9CQUFvQmpCLFVBQVVrQixXQUFXO0lBRS9DLE9BQVFEO1FBQ04sS0FBS0Usa0NBQXVCO1lBQUU7Z0JBQzVCLElBQU1aLG1CQUFtQlAsV0FDbkJRLHVCQUF1QkYsbUJBQW1CQyxrQkFBa0JYO2dCQUVsRSxJQUFJWSxzQkFBc0I7b0JBQ3hCLElBQU1ZLGdCQUFnQkMsa0JBQWEsQ0FBQ0Msb0JBQW9CLENBQUNmO29CQUV6RFgsaUJBQWlCMkIsZ0JBQWdCLENBQUNIO29CQUVsQ25CLGdCQUFnQjtnQkFDbEI7Z0JBRUE7WUFDRjtRQUVBLEtBQUt1Qiw0Q0FBaUM7WUFBRTtnQkFDdEMsSUFBTUMsVUFBVSxNQUNWQyxjQUFjLEVBQUUsRUFDaEJDLDZCQUE2QjNCLFdBQzdCNEIsaUNBQWlDQyxJQUFBQSxrQkFBNEIsRUFBQ0YsNEJBQTRCRCxhQUFhRCxTQUFTN0I7Z0JBRXRILElBQUlnQyxnQ0FBZ0M7b0JBQ2xDLElBQU1FLG9CQUFvQnRDLHVCQUF1Qm1DLDZCQUMzQ1AsaUJBQWdCQyxrQkFBYSxDQUFDVSxxQkFBcUIsQ0FBQ0Q7b0JBRTFEbEMsaUJBQWlCMkIsZ0JBQWdCLENBQUNIO29CQUVsQ25CLGdCQUFnQjJCLGdDQUFnQyxHQUFHO2dCQUNyRDtnQkFFQTtZQUNGO1FBRUEsS0FBS0ksOENBQW1DO1lBQUU7Z0JBQ3hDLElBQU1QLFdBQVUsTUFDVlEsK0JBQStCakMsV0FDL0JrQyxtQ0FBbUNDLElBQUFBLG9CQUE4QixFQUFDRiw4QkFBOEJSLFVBQVM3QjtnQkFFL0csSUFBSXNDLGtDQUFrQztvQkFDcEMsSUFBTUoscUJBQW9CdEMsdUJBQXVCeUMsK0JBQzNDYixpQkFBZ0JDLGtCQUFhLENBQUNVLHFCQUFxQixDQUFDRDtvQkFFMURsQyxpQkFBaUIyQixnQkFBZ0IsQ0FBQ0g7b0JBRWxDbkIsZ0JBQWdCO2dCQUNsQjtnQkFFQTtZQUNGO0lBQ0Y7SUFFQSxPQUFPQTtBQUNUIn0=