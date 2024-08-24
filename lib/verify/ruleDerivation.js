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
var _premises = /*#__PURE__*/ _interop_require_default(require("../verify/premises"));
var _localMeta = /*#__PURE__*/ _interop_require_default(require("../context/localMeta"));
var _qualified = /*#__PURE__*/ _interop_require_default(require("../verify/metastatement/qualified"));
var _unqualified = /*#__PURE__*/ _interop_require_default(require("../verify/metastatement/unqualified"));
var _assignments = require("../utilities/assignments");
var _query = require("../utilities/query");
var _ruleNames = require("../ruleNames");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var childNodesQuery = (0, _query.nodesQuery)("/ruleDerivation|ruleSubDerivation/*"), premiseNodesQuery = (0, _query.nodesQuery)("/ruleSubproof/premise"), metastatementNodeQuery = (0, _query.nodeQuery)("/qualifiedMetastatement|unqualifiedMetastatement/metastatement!"), ruleSubDerivationNodeQuery = (0, _query.nodeQuery)("/ruleSubproof/ruleSubDerivation");
function verifyRuleDerivation(ruleDerivationNode, localMetaContext) {
    var ruleDerivationVerified;
    var childNodes = childNodesQuery(ruleDerivationNode);
    ruleDerivationVerified = childNodes.every(function(childNode) {
        var childVerified = verifyChild(childNode, localMetaContext);
        if (childVerified) {
            return true;
        }
    });
    return ruleDerivationVerified;
}
function verifyRuleSubDerivation(ruleSubDerivationNode, localMetaContext) {
    var ruleSubDerivationVerified;
    var childNodes = childNodesQuery(ruleSubDerivationNode);
    ruleSubDerivationVerified = childNodes.every(function(childNode) {
        var childVerified = verifyChild(childNode, localMetaContext);
        if (childVerified) {
            return true;
        }
    });
    return ruleSubDerivationVerified;
}
function verifyRuleSubproof(ruleSubproofNode, localMetaContext) {
    var ruleSubproofVerified = false;
    localMetaContext = _localMeta.default.fromLocalMetaContext(localMetaContext); ///
    var premises = [], premiseNodes = premiseNodesQuery(ruleSubproofNode), premisesVerified = (0, _premises.default)(premiseNodes, premises, localMetaContext);
    if (premisesVerified) {
        var ruleSubDerivationNode = ruleSubDerivationNodeQuery(ruleSubproofNode), ruleSubDerivationVerified = verifyRuleSubDerivation(ruleSubDerivationNode, localMetaContext);
        if (ruleSubDerivationVerified) {
            ruleSubproofVerified = true;
        }
    }
    return ruleSubproofVerified;
}
function verifyChild(childNode, localMetaContext) {
    var childVerified;
    var childNodeRuleName = childNode.getRuleName();
    switch(childNodeRuleName){
        case _ruleNames.RULE_SUBPROOF_RULE_NAME:
            {
                var ruleSubproofNode = childNode, ruleSubproofVerified = verifyRuleSubproof(ruleSubproofNode, localMetaContext);
                if (ruleSubproofVerified) {
                    var metaproofStep = _metaproof.default.fromRuleSubproofNode(ruleSubproofNode);
                    localMetaContext.addMetaproofStep(metaproofStep);
                    childVerified = true;
                }
                break;
            }
        case _ruleNames.QUALIFIED_METASTATEMENT_RULE_NAME:
            {
                var qualifiedMetastatementVerified;
                var derived = true, assignments = [], metavariableReferences = true, qualifiedMetastatementNode = childNode; ///
                qualifiedMetastatementVerified = (0, _qualified.default)(qualifiedMetastatementNode, metavariableReferences, assignments, derived, localMetaContext);
                if (qualifiedMetastatementVerified) {
                    var assignmentAssigned = (0, _assignments.assignAssignment)(assignments, localMetaContext);
                    qualifiedMetastatementVerified = assignmentAssigned; ///
                }
                if (qualifiedMetastatementVerified) {
                    var metastatementNode = metastatementNodeQuery(qualifiedMetastatementNode), metaproofStep1 = _metaproof.default.fromMetastatementNode(metastatementNode);
                    localMetaContext.addMetaproofStep(metaproofStep1);
                    childVerified = qualifiedMetastatementVerified; ///
                }
                break;
            }
        case _ruleNames.UNQUALIFIED_METASTATEMENT_RULE_NAME:
            {
                var unqualifiedMetastatementVerified;
                var derived1 = true, assignments1 = [], unqualifiedMetastatementNode = childNode; ///
                unqualifiedMetastatementVerified = (0, _unqualified.default)(unqualifiedMetastatementNode, assignments1, derived1, localMetaContext);
                if (unqualifiedMetastatementVerified) {
                    var assignmentAssigned1 = (0, _assignments.assignAssignment)(assignments1, localMetaContext);
                    unqualifiedMetastatementVerified = assignmentAssigned1; ///
                }
                if (unqualifiedMetastatementVerified) {
                    var metastatementNode1 = metastatementNodeQuery(unqualifiedMetastatementNode), metaproofStep2 = _metaproof.default.fromMetastatementNode(metastatementNode1);
                    localMetaContext.addMetaproofStep(metaproofStep2);
                    childVerified = true;
                }
                break;
            }
    }
    return childVerified;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92ZXJpZnkvcnVsZURlcml2YXRpb24uanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBNZXRhcHJvb2ZTdGVwIGZyb20gXCIuLi9zdGVwL21ldGFwcm9vZlwiO1xuaW1wb3J0IHZlcmlmeVByZW1pc2VzIGZyb20gXCIuLi92ZXJpZnkvcHJlbWlzZXNcIjtcbmltcG9ydCBMb2NhbE1ldGFDb250ZXh0IGZyb20gXCIuLi9jb250ZXh0L2xvY2FsTWV0YVwiO1xuaW1wb3J0IHZlcmlmeVF1YWxpZmllZE1ldGFzdGF0ZW1lbnQgZnJvbSBcIi4uL3ZlcmlmeS9tZXRhc3RhdGVtZW50L3F1YWxpZmllZFwiO1xuaW1wb3J0IHZlcmlmeVVucXVhbGlmaWVkTWV0YXN0YXRlbWVudCBmcm9tIFwiLi4vdmVyaWZ5L21ldGFzdGF0ZW1lbnQvdW5xdWFsaWZpZWRcIjtcblxuaW1wb3J0IHsgYXNzaWduQXNzaWdubWVudCB9IGZyb20gXCIuLi91dGlsaXRpZXMvYXNzaWdubWVudHNcIjtcbmltcG9ydCB7IG5vZGVRdWVyeSwgbm9kZXNRdWVyeSB9IGZyb20gXCIuLi91dGlsaXRpZXMvcXVlcnlcIjtcbmltcG9ydCB7IFJVTEVfU1VCUFJPT0ZfUlVMRV9OQU1FLCBRVUFMSUZJRURfTUVUQVNUQVRFTUVOVF9SVUxFX05BTUUsIFVOUVVBTElGSUVEX01FVEFTVEFURU1FTlRfUlVMRV9OQU1FIH0gZnJvbSBcIi4uL3J1bGVOYW1lc1wiO1xuXG5jb25zdCBjaGlsZE5vZGVzUXVlcnkgPSBub2Rlc1F1ZXJ5KFwiL3J1bGVEZXJpdmF0aW9ufHJ1bGVTdWJEZXJpdmF0aW9uLypcIiksXG4gICAgICBwcmVtaXNlTm9kZXNRdWVyeSA9IG5vZGVzUXVlcnkoXCIvcnVsZVN1YnByb29mL3ByZW1pc2VcIiksXG4gICAgICBtZXRhc3RhdGVtZW50Tm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3F1YWxpZmllZE1ldGFzdGF0ZW1lbnR8dW5xdWFsaWZpZWRNZXRhc3RhdGVtZW50L21ldGFzdGF0ZW1lbnQhXCIpLFxuICAgICAgcnVsZVN1YkRlcml2YXRpb25Ob2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvcnVsZVN1YnByb29mL3J1bGVTdWJEZXJpdmF0aW9uXCIpO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB2ZXJpZnlSdWxlRGVyaXZhdGlvbihydWxlRGVyaXZhdGlvbk5vZGUsIGxvY2FsTWV0YUNvbnRleHQpIHtcbiAgbGV0IHJ1bGVEZXJpdmF0aW9uVmVyaWZpZWQ7XG5cbiAgY29uc3QgY2hpbGROb2RlcyA9IGNoaWxkTm9kZXNRdWVyeShydWxlRGVyaXZhdGlvbk5vZGUpO1xuXG4gIHJ1bGVEZXJpdmF0aW9uVmVyaWZpZWQgPSBjaGlsZE5vZGVzLmV2ZXJ5KChjaGlsZE5vZGUpID0+IHtcbiAgICBjb25zdCBjaGlsZFZlcmlmaWVkID0gdmVyaWZ5Q2hpbGQoY2hpbGROb2RlLCBsb2NhbE1ldGFDb250ZXh0KTtcblxuICAgIGlmIChjaGlsZFZlcmlmaWVkKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiBydWxlRGVyaXZhdGlvblZlcmlmaWVkO1xufVxuXG5mdW5jdGlvbiB2ZXJpZnlSdWxlU3ViRGVyaXZhdGlvbihydWxlU3ViRGVyaXZhdGlvbk5vZGUsIGxvY2FsTWV0YUNvbnRleHQpIHtcbiAgbGV0IHJ1bGVTdWJEZXJpdmF0aW9uVmVyaWZpZWQ7XG5cbiAgY29uc3QgY2hpbGROb2RlcyA9IGNoaWxkTm9kZXNRdWVyeShydWxlU3ViRGVyaXZhdGlvbk5vZGUpO1xuXG4gIHJ1bGVTdWJEZXJpdmF0aW9uVmVyaWZpZWQgPSBjaGlsZE5vZGVzLmV2ZXJ5KChjaGlsZE5vZGUpID0+IHtcbiAgICBjb25zdCBjaGlsZFZlcmlmaWVkID0gdmVyaWZ5Q2hpbGQoY2hpbGROb2RlLCBsb2NhbE1ldGFDb250ZXh0KTtcblxuICAgIGlmIChjaGlsZFZlcmlmaWVkKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiBydWxlU3ViRGVyaXZhdGlvblZlcmlmaWVkO1xufVxuXG5mdW5jdGlvbiB2ZXJpZnlSdWxlU3VicHJvb2YocnVsZVN1YnByb29mTm9kZSwgbG9jYWxNZXRhQ29udGV4dCkge1xuICBsZXQgcnVsZVN1YnByb29mVmVyaWZpZWQgPSBmYWxzZTtcblxuICBsb2NhbE1ldGFDb250ZXh0ID0gTG9jYWxNZXRhQ29udGV4dC5mcm9tTG9jYWxNZXRhQ29udGV4dChsb2NhbE1ldGFDb250ZXh0KTsgLy8vXG5cbiAgY29uc3QgcHJlbWlzZXMgPSBbXSxcbiAgICAgICAgcHJlbWlzZU5vZGVzID0gcHJlbWlzZU5vZGVzUXVlcnkocnVsZVN1YnByb29mTm9kZSksXG4gICAgICAgIHByZW1pc2VzVmVyaWZpZWQgPSB2ZXJpZnlQcmVtaXNlcyhwcmVtaXNlTm9kZXMsIHByZW1pc2VzLCBsb2NhbE1ldGFDb250ZXh0KTtcblxuICBpZiAocHJlbWlzZXNWZXJpZmllZCkge1xuICAgIGNvbnN0IHJ1bGVTdWJEZXJpdmF0aW9uTm9kZSA9IHJ1bGVTdWJEZXJpdmF0aW9uTm9kZVF1ZXJ5KHJ1bGVTdWJwcm9vZk5vZGUpLFxuICAgICAgICAgIHJ1bGVTdWJEZXJpdmF0aW9uVmVyaWZpZWQgPSB2ZXJpZnlSdWxlU3ViRGVyaXZhdGlvbihydWxlU3ViRGVyaXZhdGlvbk5vZGUsIGxvY2FsTWV0YUNvbnRleHQpO1xuXG4gICAgaWYgKHJ1bGVTdWJEZXJpdmF0aW9uVmVyaWZpZWQpIHtcbiAgICAgIHJ1bGVTdWJwcm9vZlZlcmlmaWVkID0gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcnVsZVN1YnByb29mVmVyaWZpZWQ7XG59XG5cbmZ1bmN0aW9uIHZlcmlmeUNoaWxkKGNoaWxkTm9kZSwgbG9jYWxNZXRhQ29udGV4dCkge1xuICBsZXQgY2hpbGRWZXJpZmllZDtcblxuICBjb25zdCBjaGlsZE5vZGVSdWxlTmFtZSA9IGNoaWxkTm9kZS5nZXRSdWxlTmFtZSgpO1xuXG4gIHN3aXRjaCAoY2hpbGROb2RlUnVsZU5hbWUpIHtcbiAgICBjYXNlIFJVTEVfU1VCUFJPT0ZfUlVMRV9OQU1FOiB7XG4gICAgICBjb25zdCBydWxlU3VicHJvb2ZOb2RlID0gY2hpbGROb2RlLCAgLy8vXG4gICAgICAgICAgICBydWxlU3VicHJvb2ZWZXJpZmllZCA9IHZlcmlmeVJ1bGVTdWJwcm9vZihydWxlU3VicHJvb2ZOb2RlLCBsb2NhbE1ldGFDb250ZXh0KTtcblxuICAgICAgaWYgKHJ1bGVTdWJwcm9vZlZlcmlmaWVkKSB7XG4gICAgICAgIGNvbnN0IG1ldGFwcm9vZlN0ZXAgPSBNZXRhcHJvb2ZTdGVwLmZyb21SdWxlU3VicHJvb2ZOb2RlKHJ1bGVTdWJwcm9vZk5vZGUpO1xuXG4gICAgICAgIGxvY2FsTWV0YUNvbnRleHQuYWRkTWV0YXByb29mU3RlcChtZXRhcHJvb2ZTdGVwKTtcblxuICAgICAgICBjaGlsZFZlcmlmaWVkID0gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgY2FzZSBRVUFMSUZJRURfTUVUQVNUQVRFTUVOVF9SVUxFX05BTUU6IHtcbiAgICAgIGxldCBxdWFsaWZpZWRNZXRhc3RhdGVtZW50VmVyaWZpZWQ7XG5cbiAgICAgIGNvbnN0IGRlcml2ZWQgPSB0cnVlLFxuICAgICAgICAgICAgYXNzaWdubWVudHMgPSBbXSxcbiAgICAgICAgICAgIG1ldGF2YXJpYWJsZVJlZmVyZW5jZXMgPSB0cnVlLFxuICAgICAgICAgICAgcXVhbGlmaWVkTWV0YXN0YXRlbWVudE5vZGUgPSBjaGlsZE5vZGU7ICAvLy9cblxuICAgICAgcXVhbGlmaWVkTWV0YXN0YXRlbWVudFZlcmlmaWVkID0gdmVyaWZ5UXVhbGlmaWVkTWV0YXN0YXRlbWVudChxdWFsaWZpZWRNZXRhc3RhdGVtZW50Tm9kZSwgbWV0YXZhcmlhYmxlUmVmZXJlbmNlcywgYXNzaWdubWVudHMsIGRlcml2ZWQsIGxvY2FsTWV0YUNvbnRleHQpO1xuXG4gICAgICBpZiAocXVhbGlmaWVkTWV0YXN0YXRlbWVudFZlcmlmaWVkKSB7XG4gICAgICAgIGNvbnN0IGFzc2lnbm1lbnRBc3NpZ25lZCA9IGFzc2lnbkFzc2lnbm1lbnQoYXNzaWdubWVudHMsIGxvY2FsTWV0YUNvbnRleHQpO1xuXG4gICAgICAgIHF1YWxpZmllZE1ldGFzdGF0ZW1lbnRWZXJpZmllZCA9IGFzc2lnbm1lbnRBc3NpZ25lZDsgLy8vXG4gICAgICB9XG5cbiAgICAgIGlmIChxdWFsaWZpZWRNZXRhc3RhdGVtZW50VmVyaWZpZWQpIHtcbiAgICAgICAgY29uc3QgbWV0YXN0YXRlbWVudE5vZGUgPSBtZXRhc3RhdGVtZW50Tm9kZVF1ZXJ5KHF1YWxpZmllZE1ldGFzdGF0ZW1lbnROb2RlKSxcbiAgICAgICAgICAgICAgbWV0YXByb29mU3RlcCA9IE1ldGFwcm9vZlN0ZXAuZnJvbU1ldGFzdGF0ZW1lbnROb2RlKG1ldGFzdGF0ZW1lbnROb2RlKTtcblxuICAgICAgICBsb2NhbE1ldGFDb250ZXh0LmFkZE1ldGFwcm9vZlN0ZXAobWV0YXByb29mU3RlcCk7XG5cbiAgICAgICAgY2hpbGRWZXJpZmllZCA9IHF1YWxpZmllZE1ldGFzdGF0ZW1lbnRWZXJpZmllZDsgLy8vXG4gICAgICB9XG5cbiAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIGNhc2UgVU5RVUFMSUZJRURfTUVUQVNUQVRFTUVOVF9SVUxFX05BTUU6IHtcbiAgICAgIGxldCB1bnF1YWxpZmllZE1ldGFzdGF0ZW1lbnRWZXJpZmllZDtcblxuICAgICAgY29uc3QgZGVyaXZlZCA9IHRydWUsXG4gICAgICAgICAgICBhc3NpZ25tZW50cyA9IFtdLFxuICAgICAgICAgICAgdW5xdWFsaWZpZWRNZXRhc3RhdGVtZW50Tm9kZSA9IGNoaWxkTm9kZTsgIC8vL1xuXG4gICAgICB1bnF1YWxpZmllZE1ldGFzdGF0ZW1lbnRWZXJpZmllZCA9IHZlcmlmeVVucXVhbGlmaWVkTWV0YXN0YXRlbWVudCh1bnF1YWxpZmllZE1ldGFzdGF0ZW1lbnROb2RlLCBhc3NpZ25tZW50cywgZGVyaXZlZCwgbG9jYWxNZXRhQ29udGV4dCk7XG5cbiAgICAgIGlmICh1bnF1YWxpZmllZE1ldGFzdGF0ZW1lbnRWZXJpZmllZCkge1xuICAgICAgICBjb25zdCBhc3NpZ25tZW50QXNzaWduZWQgPSBhc3NpZ25Bc3NpZ25tZW50KGFzc2lnbm1lbnRzLCBsb2NhbE1ldGFDb250ZXh0KTtcblxuICAgICAgICB1bnF1YWxpZmllZE1ldGFzdGF0ZW1lbnRWZXJpZmllZCA9IGFzc2lnbm1lbnRBc3NpZ25lZDsgLy8vXG4gICAgICB9XG5cbiAgICAgIGlmICh1bnF1YWxpZmllZE1ldGFzdGF0ZW1lbnRWZXJpZmllZCkge1xuICAgICAgICBjb25zdCBtZXRhc3RhdGVtZW50Tm9kZSA9IG1ldGFzdGF0ZW1lbnROb2RlUXVlcnkodW5xdWFsaWZpZWRNZXRhc3RhdGVtZW50Tm9kZSksXG4gICAgICAgICAgICAgIG1ldGFwcm9vZlN0ZXAgPSBNZXRhcHJvb2ZTdGVwLmZyb21NZXRhc3RhdGVtZW50Tm9kZShtZXRhc3RhdGVtZW50Tm9kZSk7XG5cbiAgICAgICAgbG9jYWxNZXRhQ29udGV4dC5hZGRNZXRhcHJvb2ZTdGVwKG1ldGFwcm9vZlN0ZXApO1xuXG4gICAgICAgIGNoaWxkVmVyaWZpZWQgPSB0cnVlO1xuICAgICAgfVxuXG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gY2hpbGRWZXJpZmllZDtcbn1cbiJdLCJuYW1lcyI6WyJ2ZXJpZnlSdWxlRGVyaXZhdGlvbiIsImNoaWxkTm9kZXNRdWVyeSIsIm5vZGVzUXVlcnkiLCJwcmVtaXNlTm9kZXNRdWVyeSIsIm1ldGFzdGF0ZW1lbnROb2RlUXVlcnkiLCJub2RlUXVlcnkiLCJydWxlU3ViRGVyaXZhdGlvbk5vZGVRdWVyeSIsInJ1bGVEZXJpdmF0aW9uTm9kZSIsImxvY2FsTWV0YUNvbnRleHQiLCJydWxlRGVyaXZhdGlvblZlcmlmaWVkIiwiY2hpbGROb2RlcyIsImV2ZXJ5IiwiY2hpbGROb2RlIiwiY2hpbGRWZXJpZmllZCIsInZlcmlmeUNoaWxkIiwidmVyaWZ5UnVsZVN1YkRlcml2YXRpb24iLCJydWxlU3ViRGVyaXZhdGlvbk5vZGUiLCJydWxlU3ViRGVyaXZhdGlvblZlcmlmaWVkIiwidmVyaWZ5UnVsZVN1YnByb29mIiwicnVsZVN1YnByb29mTm9kZSIsInJ1bGVTdWJwcm9vZlZlcmlmaWVkIiwiTG9jYWxNZXRhQ29udGV4dCIsImZyb21Mb2NhbE1ldGFDb250ZXh0IiwicHJlbWlzZXMiLCJwcmVtaXNlTm9kZXMiLCJwcmVtaXNlc1ZlcmlmaWVkIiwidmVyaWZ5UHJlbWlzZXMiLCJjaGlsZE5vZGVSdWxlTmFtZSIsImdldFJ1bGVOYW1lIiwiUlVMRV9TVUJQUk9PRl9SVUxFX05BTUUiLCJtZXRhcHJvb2ZTdGVwIiwiTWV0YXByb29mU3RlcCIsImZyb21SdWxlU3VicHJvb2ZOb2RlIiwiYWRkTWV0YXByb29mU3RlcCIsIlFVQUxJRklFRF9NRVRBU1RBVEVNRU5UX1JVTEVfTkFNRSIsInF1YWxpZmllZE1ldGFzdGF0ZW1lbnRWZXJpZmllZCIsImRlcml2ZWQiLCJhc3NpZ25tZW50cyIsIm1ldGF2YXJpYWJsZVJlZmVyZW5jZXMiLCJxdWFsaWZpZWRNZXRhc3RhdGVtZW50Tm9kZSIsInZlcmlmeVF1YWxpZmllZE1ldGFzdGF0ZW1lbnQiLCJhc3NpZ25tZW50QXNzaWduZWQiLCJhc3NpZ25Bc3NpZ25tZW50IiwibWV0YXN0YXRlbWVudE5vZGUiLCJmcm9tTWV0YXN0YXRlbWVudE5vZGUiLCJVTlFVQUxJRklFRF9NRVRBU1RBVEVNRU5UX1JVTEVfTkFNRSIsInVucXVhbGlmaWVkTWV0YXN0YXRlbWVudFZlcmlmaWVkIiwidW5xdWFsaWZpZWRNZXRhc3RhdGVtZW50Tm9kZSIsInZlcmlmeVVucXVhbGlmaWVkTWV0YXN0YXRlbWVudCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBaUJBOzs7ZUFBd0JBOzs7Z0VBZkU7K0RBQ0M7Z0VBQ0U7Z0VBQ1k7a0VBQ0U7MkJBRVY7cUJBQ0s7eUJBQzBFOzs7Ozs7QUFFaEgsSUFBTUMsa0JBQWtCQyxJQUFBQSxp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