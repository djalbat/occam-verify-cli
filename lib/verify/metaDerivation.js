"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return verifyMetaDerivation;
    }
});
var _metaproof = /*#__PURE__*/ _interop_require_default(require("../step/metaproof"));
var _localMeta = /*#__PURE__*/ _interop_require_default(require("../context/localMeta"));
var _metaSuppositions = /*#__PURE__*/ _interop_require_default(require("../verify/metaSuppositions"));
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
var childNodesQuery = (0, _query.nodesQuery)("/metaDerivation|metaSubDerivation/*"), metastatementNodeQuery = (0, _query.nodeQuery)("/qualifiedMetastatement|unqualifiedMetastatement/metastatement!"), metaSuppositionNodesQuery = (0, _query.nodesQuery)("/metaSubproof/metaSupposition"), metaSubDerivationNodeQuery = (0, _query.nodeQuery)("/metaSubproof/metaSubDerivation");
function verifyMetaDerivation(metaDerivationNode, localMetaContext) {
    var metaDerivationVerified;
    var childNodes = childNodesQuery(metaDerivationNode);
    metaDerivationVerified = childNodes.every(function(childNode) {
        var childVerified = verifyChild(childNode, localMetaContext);
        if (childVerified) {
            return true;
        }
    });
    return metaDerivationVerified;
}
function verifyMetaSubDerivation(metaSubDerivationNode, localMetaContext) {
    var metaSubDerivationVerified;
    var childNodes = childNodesQuery(metaSubDerivationNode);
    metaSubDerivationVerified = childNodes.every(function(childNode) {
        var childVerified = verifyChild(childNode, localMetaContext);
        if (childVerified) {
            return true;
        }
    });
    return metaSubDerivationVerified;
}
function verifyMetaSubproof(metaSubproofNode, localMetaContext) {
    var metaSubproofVerified = false;
    localMetaContext = _localMeta.default.fromLocalMetaContext(localMetaContext); ///
    var metaSuppositions = [], metaSuppositionNodes = metaSuppositionNodesQuery(metaSubproofNode), metaSuppositionsVerified = (0, _metaSuppositions.default)(metaSuppositionNodes, metaSuppositions, localMetaContext);
    if (metaSuppositionsVerified) {
        var metaSubDerivationNode = metaSubDerivationNodeQuery(metaSubproofNode), metaSubDerivationVerified = verifyMetaSubDerivation(metaSubDerivationNode, localMetaContext);
        if (metaSubDerivationVerified) {
            metaSubproofVerified = true;
        }
    }
    return metaSubproofVerified;
}
function verifyChild(childNode, localMetaContext) {
    var childVerified = false;
    var childNodeRuleName = childNode.getRuleName();
    switch(childNodeRuleName){
        case _ruleNames.META_SUBPROOF_RULE_NAME:
            {
                var metaSubproofVerified;
                var metaSubproofNode = childNode; ///
                metaSubproofVerified = verifyMetaSubproof(metaSubproofNode, localMetaContext);
                if (metaSubproofVerified) {
                    var metaproofStep = _metaproof.default.fromMetaSubproofNode(metaSubproofNode);
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
                    childVerified = true; ///
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92ZXJpZnkvbWV0YURlcml2YXRpb24uanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBNZXRhcHJvb2ZTdGVwIGZyb20gXCIuLi9zdGVwL21ldGFwcm9vZlwiO1xuaW1wb3J0IExvY2FsTWV0YUNvbnRleHQgZnJvbSBcIi4uL2NvbnRleHQvbG9jYWxNZXRhXCI7XG5pbXBvcnQgdmVyaWZ5TWV0YVN1cHBvc2l0aW9ucyBmcm9tIFwiLi4vdmVyaWZ5L21ldGFTdXBwb3NpdGlvbnNcIjtcbmltcG9ydCB2ZXJpZnlRdWFsaWZpZWRNZXRhc3RhdGVtZW50IGZyb20gXCIuLi92ZXJpZnkvbWV0YXN0YXRlbWVudC9xdWFsaWZpZWRcIjtcbmltcG9ydCB2ZXJpZnlVbnF1YWxpZmllZE1ldGFzdGF0ZW1lbnQgZnJvbSBcIi4uL3ZlcmlmeS9tZXRhc3RhdGVtZW50L3VucXVhbGlmaWVkXCI7XG5cbmltcG9ydCB7IGFzc2lnbkFzc2lnbm1lbnQgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2Fzc2lnbm1lbnRzXCI7XG5pbXBvcnQgeyBub2RlUXVlcnksIG5vZGVzUXVlcnkgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5pbXBvcnQgeyBNRVRBX1NVQlBST09GX1JVTEVfTkFNRSwgUVVBTElGSUVEX01FVEFTVEFURU1FTlRfUlVMRV9OQU1FLCBVTlFVQUxJRklFRF9NRVRBU1RBVEVNRU5UX1JVTEVfTkFNRSB9IGZyb20gXCIuLi9ydWxlTmFtZXNcIjtcblxuY29uc3QgY2hpbGROb2Rlc1F1ZXJ5ID0gbm9kZXNRdWVyeShcIi9tZXRhRGVyaXZhdGlvbnxtZXRhU3ViRGVyaXZhdGlvbi8qXCIpLFxuICAgICAgbWV0YXN0YXRlbWVudE5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9xdWFsaWZpZWRNZXRhc3RhdGVtZW50fHVucXVhbGlmaWVkTWV0YXN0YXRlbWVudC9tZXRhc3RhdGVtZW50IVwiKSxcbiAgICAgIG1ldGFTdXBwb3NpdGlvbk5vZGVzUXVlcnkgPSBub2Rlc1F1ZXJ5KFwiL21ldGFTdWJwcm9vZi9tZXRhU3VwcG9zaXRpb25cIiksXG4gICAgICBtZXRhU3ViRGVyaXZhdGlvbk5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9tZXRhU3VicHJvb2YvbWV0YVN1YkRlcml2YXRpb25cIik7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHZlcmlmeU1ldGFEZXJpdmF0aW9uKG1ldGFEZXJpdmF0aW9uTm9kZSwgbG9jYWxNZXRhQ29udGV4dCkge1xuICBsZXQgbWV0YURlcml2YXRpb25WZXJpZmllZDtcblxuICBjb25zdCBjaGlsZE5vZGVzID0gY2hpbGROb2Rlc1F1ZXJ5KG1ldGFEZXJpdmF0aW9uTm9kZSk7XG5cbiAgbWV0YURlcml2YXRpb25WZXJpZmllZCA9IGNoaWxkTm9kZXMuZXZlcnkoKGNoaWxkTm9kZSkgPT4ge1xuICAgIGNvbnN0IGNoaWxkVmVyaWZpZWQgPSB2ZXJpZnlDaGlsZChjaGlsZE5vZGUsIGxvY2FsTWV0YUNvbnRleHQpO1xuXG4gICAgaWYgKGNoaWxkVmVyaWZpZWQpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIG1ldGFEZXJpdmF0aW9uVmVyaWZpZWQ7XG59XG5cbmZ1bmN0aW9uIHZlcmlmeU1ldGFTdWJEZXJpdmF0aW9uKG1ldGFTdWJEZXJpdmF0aW9uTm9kZSwgbG9jYWxNZXRhQ29udGV4dCkge1xuICBsZXQgbWV0YVN1YkRlcml2YXRpb25WZXJpZmllZDtcblxuICBjb25zdCBjaGlsZE5vZGVzID0gY2hpbGROb2Rlc1F1ZXJ5KG1ldGFTdWJEZXJpdmF0aW9uTm9kZSk7XG5cbiAgbWV0YVN1YkRlcml2YXRpb25WZXJpZmllZCA9IGNoaWxkTm9kZXMuZXZlcnkoKGNoaWxkTm9kZSkgPT4ge1xuICAgIGNvbnN0IGNoaWxkVmVyaWZpZWQgPSB2ZXJpZnlDaGlsZChjaGlsZE5vZGUsIGxvY2FsTWV0YUNvbnRleHQpO1xuXG4gICAgaWYgKGNoaWxkVmVyaWZpZWQpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIG1ldGFTdWJEZXJpdmF0aW9uVmVyaWZpZWQ7XG59XG5cbmZ1bmN0aW9uIHZlcmlmeU1ldGFTdWJwcm9vZihtZXRhU3VicHJvb2ZOb2RlLCBsb2NhbE1ldGFDb250ZXh0KSB7XG4gIGxldCBtZXRhU3VicHJvb2ZWZXJpZmllZCA9IGZhbHNlO1xuXG4gIGxvY2FsTWV0YUNvbnRleHQgPSBMb2NhbE1ldGFDb250ZXh0LmZyb21Mb2NhbE1ldGFDb250ZXh0KGxvY2FsTWV0YUNvbnRleHQpOyAvLy9cblxuICBjb25zdCBtZXRhU3VwcG9zaXRpb25zID0gW10sXG4gICAgICAgIG1ldGFTdXBwb3NpdGlvbk5vZGVzID0gbWV0YVN1cHBvc2l0aW9uTm9kZXNRdWVyeShtZXRhU3VicHJvb2ZOb2RlKSxcbiAgICAgICAgbWV0YVN1cHBvc2l0aW9uc1ZlcmlmaWVkID0gdmVyaWZ5TWV0YVN1cHBvc2l0aW9ucyhtZXRhU3VwcG9zaXRpb25Ob2RlcywgbWV0YVN1cHBvc2l0aW9ucywgbG9jYWxNZXRhQ29udGV4dCk7XG5cbiAgaWYgKG1ldGFTdXBwb3NpdGlvbnNWZXJpZmllZCkge1xuICAgIGNvbnN0IG1ldGFTdWJEZXJpdmF0aW9uTm9kZSA9IG1ldGFTdWJEZXJpdmF0aW9uTm9kZVF1ZXJ5KG1ldGFTdWJwcm9vZk5vZGUpLFxuICAgICAgICAgIG1ldGFTdWJEZXJpdmF0aW9uVmVyaWZpZWQgPSB2ZXJpZnlNZXRhU3ViRGVyaXZhdGlvbihtZXRhU3ViRGVyaXZhdGlvbk5vZGUsIGxvY2FsTWV0YUNvbnRleHQpO1xuXG4gICAgaWYgKG1ldGFTdWJEZXJpdmF0aW9uVmVyaWZpZWQpIHtcbiAgICAgIG1ldGFTdWJwcm9vZlZlcmlmaWVkID0gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gbWV0YVN1YnByb29mVmVyaWZpZWQ7XG59XG5cbmZ1bmN0aW9uIHZlcmlmeUNoaWxkKGNoaWxkTm9kZSwgbG9jYWxNZXRhQ29udGV4dCkge1xuICBsZXQgY2hpbGRWZXJpZmllZCA9IGZhbHNlO1xuXG4gIGNvbnN0IGNoaWxkTm9kZVJ1bGVOYW1lID0gY2hpbGROb2RlLmdldFJ1bGVOYW1lKCk7XG5cbiAgc3dpdGNoIChjaGlsZE5vZGVSdWxlTmFtZSkge1xuICAgIGNhc2UgTUVUQV9TVUJQUk9PRl9SVUxFX05BTUU6IHtcbiAgICAgIGxldCBtZXRhU3VicHJvb2ZWZXJpZmllZDtcblxuICAgICAgY29uc3QgbWV0YVN1YnByb29mTm9kZSA9IGNoaWxkTm9kZTsgIC8vL1xuXG4gICAgICBtZXRhU3VicHJvb2ZWZXJpZmllZCA9IHZlcmlmeU1ldGFTdWJwcm9vZihtZXRhU3VicHJvb2ZOb2RlLCBsb2NhbE1ldGFDb250ZXh0KTtcblxuICAgICAgaWYgKG1ldGFTdWJwcm9vZlZlcmlmaWVkKSB7XG4gICAgICAgIGNvbnN0IG1ldGFwcm9vZlN0ZXAgPSBNZXRhcHJvb2ZTdGVwLmZyb21NZXRhU3VicHJvb2ZOb2RlKG1ldGFTdWJwcm9vZk5vZGUpO1xuXG4gICAgICAgIGxvY2FsTWV0YUNvbnRleHQuYWRkTWV0YXByb29mU3RlcChtZXRhcHJvb2ZTdGVwKTtcblxuICAgICAgICBjaGlsZFZlcmlmaWVkID0gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgY2FzZSBRVUFMSUZJRURfTUVUQVNUQVRFTUVOVF9SVUxFX05BTUU6IHtcbiAgICAgIGxldCBxdWFsaWZpZWRNZXRhc3RhdGVtZW50VmVyaWZpZWQ7XG5cbiAgICAgIGNvbnN0IGRlcml2ZWQgPSB0cnVlLFxuICAgICAgICAgICAgYXNzaWdubWVudHMgPSBbXSxcbiAgICAgICAgICAgIG1ldGF2YXJpYWJsZVJlZmVyZW5jZXMgPSB0cnVlLFxuICAgICAgICAgICAgcXVhbGlmaWVkTWV0YXN0YXRlbWVudE5vZGUgPSBjaGlsZE5vZGU7ICAvLy9cblxuICAgICAgcXVhbGlmaWVkTWV0YXN0YXRlbWVudFZlcmlmaWVkID0gdmVyaWZ5UXVhbGlmaWVkTWV0YXN0YXRlbWVudChxdWFsaWZpZWRNZXRhc3RhdGVtZW50Tm9kZSwgbWV0YXZhcmlhYmxlUmVmZXJlbmNlcywgYXNzaWdubWVudHMsIGRlcml2ZWQsIGxvY2FsTWV0YUNvbnRleHQpO1xuXG4gICAgICBpZiAocXVhbGlmaWVkTWV0YXN0YXRlbWVudFZlcmlmaWVkKSB7XG4gICAgICAgIGNvbnN0IGFzc2lnbm1lbnRBc3NpZ25lZCA9IGFzc2lnbkFzc2lnbm1lbnQoYXNzaWdubWVudHMsIGxvY2FsTWV0YUNvbnRleHQpO1xuXG4gICAgICAgIHF1YWxpZmllZE1ldGFzdGF0ZW1lbnRWZXJpZmllZCA9IGFzc2lnbm1lbnRBc3NpZ25lZDsgLy8vXG4gICAgICB9XG5cbiAgICAgIGlmIChxdWFsaWZpZWRNZXRhc3RhdGVtZW50VmVyaWZpZWQpIHtcbiAgICAgICAgY29uc3QgbWV0YXN0YXRlbWVudE5vZGUgPSBtZXRhc3RhdGVtZW50Tm9kZVF1ZXJ5KHF1YWxpZmllZE1ldGFzdGF0ZW1lbnROb2RlKSxcbiAgICAgICAgICAgICAgbWV0YXByb29mU3RlcCA9IE1ldGFwcm9vZlN0ZXAuZnJvbU1ldGFzdGF0ZW1lbnROb2RlKG1ldGFzdGF0ZW1lbnROb2RlKTtcblxuICAgICAgICBsb2NhbE1ldGFDb250ZXh0LmFkZE1ldGFwcm9vZlN0ZXAobWV0YXByb29mU3RlcCk7XG5cbiAgICAgICAgY2hpbGRWZXJpZmllZCA9IHRydWU7IC8vL1xuICAgICAgfVxuXG4gICAgICBicmVhaztcbiAgICB9XG5cbiAgICBjYXNlIFVOUVVBTElGSUVEX01FVEFTVEFURU1FTlRfUlVMRV9OQU1FOiB7XG4gICAgICBsZXQgdW5xdWFsaWZpZWRNZXRhc3RhdGVtZW50VmVyaWZpZWQ7XG5cbiAgICAgIGNvbnN0IGRlcml2ZWQgPSB0cnVlLFxuICAgICAgICAgICAgYXNzaWdubWVudHMgPSBbXSxcbiAgICAgICAgICAgIHVucXVhbGlmaWVkTWV0YXN0YXRlbWVudE5vZGUgPSBjaGlsZE5vZGU7ICAvLy9cblxuICAgICAgdW5xdWFsaWZpZWRNZXRhc3RhdGVtZW50VmVyaWZpZWQgPSB2ZXJpZnlVbnF1YWxpZmllZE1ldGFzdGF0ZW1lbnQodW5xdWFsaWZpZWRNZXRhc3RhdGVtZW50Tm9kZSwgYXNzaWdubWVudHMsIGRlcml2ZWQsIGxvY2FsTWV0YUNvbnRleHQpO1xuXG4gICAgICBpZiAodW5xdWFsaWZpZWRNZXRhc3RhdGVtZW50VmVyaWZpZWQpIHtcbiAgICAgICAgY29uc3QgYXNzaWdubWVudEFzc2lnbmVkID0gYXNzaWduQXNzaWdubWVudChhc3NpZ25tZW50cywgbG9jYWxNZXRhQ29udGV4dCk7XG5cbiAgICAgICAgdW5xdWFsaWZpZWRNZXRhc3RhdGVtZW50VmVyaWZpZWQgPSBhc3NpZ25tZW50QXNzaWduZWQ7ICAvLy9cbiAgICAgIH1cblxuICAgICAgaWYgKHVucXVhbGlmaWVkTWV0YXN0YXRlbWVudFZlcmlmaWVkKSB7XG4gICAgICAgIGNvbnN0IG1ldGFzdGF0ZW1lbnROb2RlID0gbWV0YXN0YXRlbWVudE5vZGVRdWVyeSh1bnF1YWxpZmllZE1ldGFzdGF0ZW1lbnROb2RlKSxcbiAgICAgICAgICAgICAgbWV0YXByb29mU3RlcCA9IE1ldGFwcm9vZlN0ZXAuZnJvbU1ldGFzdGF0ZW1lbnROb2RlKG1ldGFzdGF0ZW1lbnROb2RlKTtcblxuICAgICAgICBsb2NhbE1ldGFDb250ZXh0LmFkZE1ldGFwcm9vZlN0ZXAobWV0YXByb29mU3RlcCk7XG5cbiAgICAgICAgY2hpbGRWZXJpZmllZCA9IHRydWU7XG4gICAgICB9XG5cbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBjaGlsZFZlcmlmaWVkO1xufVxuIl0sIm5hbWVzIjpbInZlcmlmeU1ldGFEZXJpdmF0aW9uIiwiY2hpbGROb2Rlc1F1ZXJ5Iiwibm9kZXNRdWVyeSIsIm1ldGFzdGF0ZW1lbnROb2RlUXVlcnkiLCJub2RlUXVlcnkiLCJtZXRhU3VwcG9zaXRpb25Ob2Rlc1F1ZXJ5IiwibWV0YVN1YkRlcml2YXRpb25Ob2RlUXVlcnkiLCJtZXRhRGVyaXZhdGlvbk5vZGUiLCJsb2NhbE1ldGFDb250ZXh0IiwibWV0YURlcml2YXRpb25WZXJpZmllZCIsImNoaWxkTm9kZXMiLCJldmVyeSIsImNoaWxkTm9kZSIsImNoaWxkVmVyaWZpZWQiLCJ2ZXJpZnlDaGlsZCIsInZlcmlmeU1ldGFTdWJEZXJpdmF0aW9uIiwibWV0YVN1YkRlcml2YXRpb25Ob2RlIiwibWV0YVN1YkRlcml2YXRpb25WZXJpZmllZCIsInZlcmlmeU1ldGFTdWJwcm9vZiIsIm1ldGFTdWJwcm9vZk5vZGUiLCJtZXRhU3VicHJvb2ZWZXJpZmllZCIsIkxvY2FsTWV0YUNvbnRleHQiLCJmcm9tTG9jYWxNZXRhQ29udGV4dCIsIm1ldGFTdXBwb3NpdGlvbnMiLCJtZXRhU3VwcG9zaXRpb25Ob2RlcyIsIm1ldGFTdXBwb3NpdGlvbnNWZXJpZmllZCIsInZlcmlmeU1ldGFTdXBwb3NpdGlvbnMiLCJjaGlsZE5vZGVSdWxlTmFtZSIsImdldFJ1bGVOYW1lIiwiTUVUQV9TVUJQUk9PRl9SVUxFX05BTUUiLCJtZXRhcHJvb2ZTdGVwIiwiTWV0YXByb29mU3RlcCIsImZyb21NZXRhU3VicHJvb2ZOb2RlIiwiYWRkTWV0YXByb29mU3RlcCIsIlFVQUxJRklFRF9NRVRBU1RBVEVNRU5UX1JVTEVfTkFNRSIsInF1YWxpZmllZE1ldGFzdGF0ZW1lbnRWZXJpZmllZCIsImRlcml2ZWQiLCJhc3NpZ25tZW50cyIsIm1ldGF2YXJpYWJsZVJlZmVyZW5jZXMiLCJxdWFsaWZpZWRNZXRhc3RhdGVtZW50Tm9kZSIsInZlcmlmeVF1YWxpZmllZE1ldGFzdGF0ZW1lbnQiLCJhc3NpZ25tZW50QXNzaWduZWQiLCJhc3NpZ25Bc3NpZ25tZW50IiwibWV0YXN0YXRlbWVudE5vZGUiLCJmcm9tTWV0YXN0YXRlbWVudE5vZGUiLCJVTlFVQUxJRklFRF9NRVRBU1RBVEVNRU5UX1JVTEVfTkFNRSIsInVucXVhbGlmaWVkTWV0YXN0YXRlbWVudFZlcmlmaWVkIiwidW5xdWFsaWZpZWRNZXRhc3RhdGVtZW50Tm9kZSIsInZl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