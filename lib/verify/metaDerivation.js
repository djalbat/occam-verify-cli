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
function verifyMetaDerivation(metaDerivationNode, substitutions, localMetaContext) {
    var metaDerivationVerified;
    var childNodes = childNodesQuery(metaDerivationNode);
    metaDerivationVerified = childNodes.every(function(childNode) {
        var childVerified = verifyChild(childNode, substitutions, localMetaContext);
        if (childVerified) {
            return true;
        }
    });
    return metaDerivationVerified;
}
function verifyMetaSubDerivation(metaSubDerivationNode, substitutions, localMetaContext) {
    var metaSubDerivationVerified;
    var childNodes = childNodesQuery(metaSubDerivationNode);
    metaSubDerivationVerified = childNodes.every(function(childNode) {
        var childVerified = verifyChild(childNode, substitutions, localMetaContext);
        if (childVerified) {
            return true;
        }
    });
    return metaSubDerivationVerified;
}
function verifyMetaSubproof(metaSubproofNode, substitutions, localMetaContext) {
    var metaSubproofVerified = false;
    localMetaContext = _localMeta.default.fromLocalMetaContext(localMetaContext); ///
    var metaSuppositions = [], metaSuppositionNodes = metaSuppositionNodesQuery(metaSubproofNode), metaSuppositionsVerified = (0, _metaSuppositions.default)(metaSuppositionNodes, metaSuppositions, substitutions, localMetaContext);
    if (metaSuppositionsVerified) {
        var metaSubDerivationNode = metaSubDerivationNodeQuery(metaSubproofNode), metaSubDerivationVerified = verifyMetaSubDerivation(metaSubDerivationNode, substitutions, localMetaContext);
        if (metaSubDerivationVerified) {
            metaSubproofVerified = true;
        }
    }
    return metaSubproofVerified;
}
function verifyChild(childNode, substitutions, localMetaContext) {
    var childVerified = false;
    var childNodeRuleName = childNode.getRuleName();
    switch(childNodeRuleName){
        case _ruleNames.META_SUBPROOF_RULE_NAME:
            {
                var metaSubproofVerified;
                var metaSubproofNode = childNode; ///
                metaSubproofVerified = verifyMetaSubproof(metaSubproofNode, substitutions, localMetaContext);
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
                var derived = true, assignments = [], qualifiedMetastatementNode = childNode; ///
                qualifiedMetastatementVerified = (0, _qualified.default)(qualifiedMetastatementNode, substitutions, assignments, derived, localMetaContext);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92ZXJpZnkvbWV0YURlcml2YXRpb24uanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBNZXRhcHJvb2ZTdGVwIGZyb20gXCIuLi9zdGVwL21ldGFwcm9vZlwiO1xuaW1wb3J0IExvY2FsTWV0YUNvbnRleHQgZnJvbSBcIi4uL2NvbnRleHQvbG9jYWxNZXRhXCI7XG5pbXBvcnQgdmVyaWZ5TWV0YVN1cHBvc2l0aW9ucyBmcm9tIFwiLi4vdmVyaWZ5L21ldGFTdXBwb3NpdGlvbnNcIjtcbmltcG9ydCB2ZXJpZnlRdWFsaWZpZWRNZXRhc3RhdGVtZW50IGZyb20gXCIuLi92ZXJpZnkvbWV0YXN0YXRlbWVudC9xdWFsaWZpZWRcIjtcbmltcG9ydCB2ZXJpZnlVbnF1YWxpZmllZE1ldGFzdGF0ZW1lbnQgZnJvbSBcIi4uL3ZlcmlmeS9tZXRhc3RhdGVtZW50L3VucXVhbGlmaWVkXCI7XG5cbmltcG9ydCB7IGFzc2lnbkFzc2lnbm1lbnQgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2Fzc2lnbm1lbnRzXCI7XG5pbXBvcnQgeyBub2RlUXVlcnksIG5vZGVzUXVlcnkgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5pbXBvcnQgeyBNRVRBX1NVQlBST09GX1JVTEVfTkFNRSwgUVVBTElGSUVEX01FVEFTVEFURU1FTlRfUlVMRV9OQU1FLCBVTlFVQUxJRklFRF9NRVRBU1RBVEVNRU5UX1JVTEVfTkFNRSB9IGZyb20gXCIuLi9ydWxlTmFtZXNcIjtcblxuY29uc3QgY2hpbGROb2Rlc1F1ZXJ5ID0gbm9kZXNRdWVyeShcIi9tZXRhRGVyaXZhdGlvbnxtZXRhU3ViRGVyaXZhdGlvbi8qXCIpLFxuICAgICAgbWV0YXN0YXRlbWVudE5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9xdWFsaWZpZWRNZXRhc3RhdGVtZW50fHVucXVhbGlmaWVkTWV0YXN0YXRlbWVudC9tZXRhc3RhdGVtZW50IVwiKSxcbiAgICAgIG1ldGFTdXBwb3NpdGlvbk5vZGVzUXVlcnkgPSBub2Rlc1F1ZXJ5KFwiL21ldGFTdWJwcm9vZi9tZXRhU3VwcG9zaXRpb25cIiksXG4gICAgICBtZXRhU3ViRGVyaXZhdGlvbk5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9tZXRhU3VicHJvb2YvbWV0YVN1YkRlcml2YXRpb25cIik7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHZlcmlmeU1ldGFEZXJpdmF0aW9uKG1ldGFEZXJpdmF0aW9uTm9kZSwgc3Vic3RpdHV0aW9ucywgbG9jYWxNZXRhQ29udGV4dCkge1xuICBsZXQgbWV0YURlcml2YXRpb25WZXJpZmllZDtcblxuICBjb25zdCBjaGlsZE5vZGVzID0gY2hpbGROb2Rlc1F1ZXJ5KG1ldGFEZXJpdmF0aW9uTm9kZSk7XG5cbiAgbWV0YURlcml2YXRpb25WZXJpZmllZCA9IGNoaWxkTm9kZXMuZXZlcnkoKGNoaWxkTm9kZSkgPT4ge1xuICAgIGNvbnN0IGNoaWxkVmVyaWZpZWQgPSB2ZXJpZnlDaGlsZChjaGlsZE5vZGUsIHN1YnN0aXR1dGlvbnMsIGxvY2FsTWV0YUNvbnRleHQpO1xuXG4gICAgaWYgKGNoaWxkVmVyaWZpZWQpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIG1ldGFEZXJpdmF0aW9uVmVyaWZpZWQ7XG59XG5cbmZ1bmN0aW9uIHZlcmlmeU1ldGFTdWJEZXJpdmF0aW9uKG1ldGFTdWJEZXJpdmF0aW9uTm9kZSwgc3Vic3RpdHV0aW9ucywgbG9jYWxNZXRhQ29udGV4dCkge1xuICBsZXQgbWV0YVN1YkRlcml2YXRpb25WZXJpZmllZDtcblxuICBjb25zdCBjaGlsZE5vZGVzID0gY2hpbGROb2Rlc1F1ZXJ5KG1ldGFTdWJEZXJpdmF0aW9uTm9kZSk7XG5cbiAgbWV0YVN1YkRlcml2YXRpb25WZXJpZmllZCA9IGNoaWxkTm9kZXMuZXZlcnkoKGNoaWxkTm9kZSkgPT4ge1xuICAgIGNvbnN0IGNoaWxkVmVyaWZpZWQgPSB2ZXJpZnlDaGlsZChjaGlsZE5vZGUsIHN1YnN0aXR1dGlvbnMsIGxvY2FsTWV0YUNvbnRleHQpO1xuXG4gICAgaWYgKGNoaWxkVmVyaWZpZWQpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIG1ldGFTdWJEZXJpdmF0aW9uVmVyaWZpZWQ7XG59XG5cbmZ1bmN0aW9uIHZlcmlmeU1ldGFTdWJwcm9vZihtZXRhU3VicHJvb2ZOb2RlLCBzdWJzdGl0dXRpb25zLCBsb2NhbE1ldGFDb250ZXh0KSB7XG4gIGxldCBtZXRhU3VicHJvb2ZWZXJpZmllZCA9IGZhbHNlO1xuXG4gIGxvY2FsTWV0YUNvbnRleHQgPSBMb2NhbE1ldGFDb250ZXh0LmZyb21Mb2NhbE1ldGFDb250ZXh0KGxvY2FsTWV0YUNvbnRleHQpOyAvLy9cblxuICBjb25zdCBtZXRhU3VwcG9zaXRpb25zID0gW10sXG4gICAgICAgIG1ldGFTdXBwb3NpdGlvbk5vZGVzID0gbWV0YVN1cHBvc2l0aW9uTm9kZXNRdWVyeShtZXRhU3VicHJvb2ZOb2RlKSxcbiAgICAgICAgbWV0YVN1cHBvc2l0aW9uc1ZlcmlmaWVkID0gdmVyaWZ5TWV0YVN1cHBvc2l0aW9ucyhtZXRhU3VwcG9zaXRpb25Ob2RlcywgbWV0YVN1cHBvc2l0aW9ucywgc3Vic3RpdHV0aW9ucywgbG9jYWxNZXRhQ29udGV4dCk7XG5cbiAgaWYgKG1ldGFTdXBwb3NpdGlvbnNWZXJpZmllZCkge1xuICAgIGNvbnN0IG1ldGFTdWJEZXJpdmF0aW9uTm9kZSA9IG1ldGFTdWJEZXJpdmF0aW9uTm9kZVF1ZXJ5KG1ldGFTdWJwcm9vZk5vZGUpLFxuICAgICAgICAgIG1ldGFTdWJEZXJpdmF0aW9uVmVyaWZpZWQgPSB2ZXJpZnlNZXRhU3ViRGVyaXZhdGlvbihtZXRhU3ViRGVyaXZhdGlvbk5vZGUsIHN1YnN0aXR1dGlvbnMsIGxvY2FsTWV0YUNvbnRleHQpO1xuXG4gICAgaWYgKG1ldGFTdWJEZXJpdmF0aW9uVmVyaWZpZWQpIHtcbiAgICAgIG1ldGFTdWJwcm9vZlZlcmlmaWVkID0gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gbWV0YVN1YnByb29mVmVyaWZpZWQ7XG59XG5cbmZ1bmN0aW9uIHZlcmlmeUNoaWxkKGNoaWxkTm9kZSwgc3Vic3RpdHV0aW9ucywgbG9jYWxNZXRhQ29udGV4dCkge1xuICBsZXQgY2hpbGRWZXJpZmllZCA9IGZhbHNlO1xuXG4gIGNvbnN0IGNoaWxkTm9kZVJ1bGVOYW1lID0gY2hpbGROb2RlLmdldFJ1bGVOYW1lKCk7XG5cbiAgc3dpdGNoIChjaGlsZE5vZGVSdWxlTmFtZSkge1xuICAgIGNhc2UgTUVUQV9TVUJQUk9PRl9SVUxFX05BTUU6IHtcbiAgICAgIGxldCBtZXRhU3VicHJvb2ZWZXJpZmllZDtcblxuICAgICAgY29uc3QgbWV0YVN1YnByb29mTm9kZSA9IGNoaWxkTm9kZTsgIC8vL1xuXG4gICAgICBtZXRhU3VicHJvb2ZWZXJpZmllZCA9IHZlcmlmeU1ldGFTdWJwcm9vZihtZXRhU3VicHJvb2ZOb2RlLCBzdWJzdGl0dXRpb25zLCBsb2NhbE1ldGFDb250ZXh0KTtcblxuICAgICAgaWYgKG1ldGFTdWJwcm9vZlZlcmlmaWVkKSB7XG4gICAgICAgIGNvbnN0IG1ldGFwcm9vZlN0ZXAgPSBNZXRhcHJvb2ZTdGVwLmZyb21NZXRhU3VicHJvb2ZOb2RlKG1ldGFTdWJwcm9vZk5vZGUpO1xuXG4gICAgICAgIGxvY2FsTWV0YUNvbnRleHQuYWRkTWV0YXByb29mU3RlcChtZXRhcHJvb2ZTdGVwKTtcblxuICAgICAgICBjaGlsZFZlcmlmaWVkID0gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgY2FzZSBRVUFMSUZJRURfTUVUQVNUQVRFTUVOVF9SVUxFX05BTUU6IHtcbiAgICAgIGxldCBxdWFsaWZpZWRNZXRhc3RhdGVtZW50VmVyaWZpZWQ7XG5cbiAgICAgIGNvbnN0IGRlcml2ZWQgPSB0cnVlLFxuICAgICAgICAgICAgYXNzaWdubWVudHMgPSBbXSxcbiAgICAgICAgICAgIHF1YWxpZmllZE1ldGFzdGF0ZW1lbnROb2RlID0gY2hpbGROb2RlOyAgLy8vXG5cbiAgICAgIHF1YWxpZmllZE1ldGFzdGF0ZW1lbnRWZXJpZmllZCA9IHZlcmlmeVF1YWxpZmllZE1ldGFzdGF0ZW1lbnQocXVhbGlmaWVkTWV0YXN0YXRlbWVudE5vZGUsIHN1YnN0aXR1dGlvbnMsIGFzc2lnbm1lbnRzLCBkZXJpdmVkLCBsb2NhbE1ldGFDb250ZXh0KTtcblxuICAgICAgaWYgKHF1YWxpZmllZE1ldGFzdGF0ZW1lbnRWZXJpZmllZCkge1xuICAgICAgICBjb25zdCBhc3NpZ25tZW50QXNzaWduZWQgPSBhc3NpZ25Bc3NpZ25tZW50KGFzc2lnbm1lbnRzLCBsb2NhbE1ldGFDb250ZXh0KTtcblxuICAgICAgICBxdWFsaWZpZWRNZXRhc3RhdGVtZW50VmVyaWZpZWQgPSBhc3NpZ25tZW50QXNzaWduZWQ7IC8vL1xuICAgICAgfVxuXG4gICAgICBpZiAocXVhbGlmaWVkTWV0YXN0YXRlbWVudFZlcmlmaWVkKSB7XG4gICAgICAgIGNvbnN0IG1ldGFzdGF0ZW1lbnROb2RlID0gbWV0YXN0YXRlbWVudE5vZGVRdWVyeShxdWFsaWZpZWRNZXRhc3RhdGVtZW50Tm9kZSksXG4gICAgICAgICAgICAgIG1ldGFwcm9vZlN0ZXAgPSBNZXRhcHJvb2ZTdGVwLmZyb21NZXRhc3RhdGVtZW50Tm9kZShtZXRhc3RhdGVtZW50Tm9kZSk7XG5cbiAgICAgICAgbG9jYWxNZXRhQ29udGV4dC5hZGRNZXRhcHJvb2ZTdGVwKG1ldGFwcm9vZlN0ZXApO1xuXG4gICAgICAgIGNoaWxkVmVyaWZpZWQgPSB0cnVlOyAvLy9cbiAgICAgIH1cblxuICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgY2FzZSBVTlFVQUxJRklFRF9NRVRBU1RBVEVNRU5UX1JVTEVfTkFNRToge1xuICAgICAgbGV0IHVucXVhbGlmaWVkTWV0YXN0YXRlbWVudFZlcmlmaWVkO1xuXG4gICAgICBjb25zdCBkZXJpdmVkID0gdHJ1ZSxcbiAgICAgICAgICAgIGFzc2lnbm1lbnRzID0gW10sXG4gICAgICAgICAgICB1bnF1YWxpZmllZE1ldGFzdGF0ZW1lbnROb2RlID0gY2hpbGROb2RlOyAgLy8vXG5cbiAgICAgIHVucXVhbGlmaWVkTWV0YXN0YXRlbWVudFZlcmlmaWVkID0gdmVyaWZ5VW5xdWFsaWZpZWRNZXRhc3RhdGVtZW50KHVucXVhbGlmaWVkTWV0YXN0YXRlbWVudE5vZGUsIGFzc2lnbm1lbnRzLCBkZXJpdmVkLCBsb2NhbE1ldGFDb250ZXh0KTtcblxuICAgICAgaWYgKHVucXVhbGlmaWVkTWV0YXN0YXRlbWVudFZlcmlmaWVkKSB7XG4gICAgICAgIGNvbnN0IGFzc2lnbm1lbnRBc3NpZ25lZCA9IGFzc2lnbkFzc2lnbm1lbnQoYXNzaWdubWVudHMsIGxvY2FsTWV0YUNvbnRleHQpO1xuXG4gICAgICAgIHVucXVhbGlmaWVkTWV0YXN0YXRlbWVudFZlcmlmaWVkID0gYXNzaWdubWVudEFzc2lnbmVkOyAgLy8vXG4gICAgICB9XG5cbiAgICAgIGlmICh1bnF1YWxpZmllZE1ldGFzdGF0ZW1lbnRWZXJpZmllZCkge1xuICAgICAgICBjb25zdCBtZXRhc3RhdGVtZW50Tm9kZSA9IG1ldGFzdGF0ZW1lbnROb2RlUXVlcnkodW5xdWFsaWZpZWRNZXRhc3RhdGVtZW50Tm9kZSksXG4gICAgICAgICAgICAgIG1ldGFwcm9vZlN0ZXAgPSBNZXRhcHJvb2ZTdGVwLmZyb21NZXRhc3RhdGVtZW50Tm9kZShtZXRhc3RhdGVtZW50Tm9kZSk7XG5cbiAgICAgICAgbG9jYWxNZXRhQ29udGV4dC5hZGRNZXRhcHJvb2ZTdGVwKG1ldGFwcm9vZlN0ZXApO1xuXG4gICAgICAgIGNoaWxkVmVyaWZpZWQgPSB0cnVlO1xuICAgICAgfVxuXG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gY2hpbGRWZXJpZmllZDtcbn1cbiJdLCJuYW1lcyI6WyJ2ZXJpZnlNZXRhRGVyaXZhdGlvbiIsImNoaWxkTm9kZXNRdWVyeSIsIm5vZGVzUXVlcnkiLCJtZXRhc3RhdGVtZW50Tm9kZVF1ZXJ5Iiwibm9kZVF1ZXJ5IiwibWV0YVN1cHBvc2l0aW9uTm9kZXNRdWVyeSIsIm1ldGFTdWJEZXJpdmF0aW9uTm9kZVF1ZXJ5IiwibWV0YURlcml2YXRpb25Ob2RlIiwic3Vic3RpdHV0aW9ucyIsImxvY2FsTWV0YUNvbnRleHQiLCJtZXRhRGVyaXZhdGlvblZlcmlmaWVkIiwiY2hpbGROb2RlcyIsImV2ZXJ5IiwiY2hpbGROb2RlIiwiY2hpbGRWZXJpZmllZCIsInZlcmlmeUNoaWxkIiwidmVyaWZ5TWV0YVN1YkRlcml2YXRpb24iLCJtZXRhU3ViRGVyaXZhdGlvbk5vZGUiLCJtZXRhU3ViRGVyaXZhdGlvblZlcmlmaWVkIiwidmVyaWZ5TWV0YVN1YnByb29mIiwibWV0YVN1YnByb29mTm9kZSIsIm1ldGFTdWJwcm9vZlZlcmlmaWVkIiwiTG9jYWxNZXRhQ29udGV4dCIsImZyb21Mb2NhbE1ldGFDb250ZXh0IiwibWV0YVN1cHBvc2l0aW9ucyIsIm1ldGFTdXBwb3NpdGlvbk5vZGVzIiwibWV0YVN1cHBvc2l0aW9uc1ZlcmlmaWVkIiwidmVyaWZ5TWV0YVN1cHBvc2l0aW9ucyIsImNoaWxkTm9kZVJ1bGVOYW1lIiwiZ2V0UnVsZU5hbWUiLCJNRVRBX1NVQlBST09GX1JVTEVfTkFNRSIsIm1ldGFwcm9vZlN0ZXAiLCJNZXRhcHJvb2ZTdGVwIiwiZnJvbU1ldGFTdWJwcm9vZk5vZGUiLCJhZGRNZXRhcHJvb2ZTdGVwIiwiUVVBTElGSUVEX01FVEFTVEFURU1FTlRfUlVMRV9OQU1FIiwicXVhbGlmaWVkTWV0YXN0YXRlbWVudFZlcmlmaWVkIiwiZGVyaXZlZCIsImFzc2lnbm1lbnRzIiwicXVhbGlmaWVkTWV0YXN0YXRlbWVudE5vZGUiLCJ2ZXJpZnlRdWFsaWZpZWRNZXRhc3RhdGVtZW50IiwiYXNzaWdubWVudEFzc2lnbmVkIiwiYXNzaWduQXNzaWdubWVudCIsIm1ldGFzdGF0ZW1lbnROb2RlIiwiZnJvbU1ldGFzdGF0ZW1lbnROb2RlIiwiVU5RVUFMSUZJRURfTUVUQVNUQVRFTUVOVF9SVUxFX05BTUUiLCJ1bnF1YWxpZmllZE1ldGFzdGF0ZW1lbnRWZXJpZmllZCIsInVucXVhbGlmaWVkTWV0YXN0YXRlbWVudE5vZGUiLCJ2ZXJpZnlVbnF1YWxpZmllZE1ldGFzdGF0ZW1lbnQiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQWlCQTs7O2VBQXdCQTs7O2dFQWZFO2dFQUNHO3VFQUNNO2dFQUNNO2tFQUNFOzJCQUVWO3FCQUNLO3lCQUMwRTs7Ozs7O0FBRWhILElBQU1DLGtCQUFrQkMsSUFBQUEsaUJBQVUsRUFBQyx3Q0FDN0JDLHlCQUF5QkMsSUFBQUEsZ0JBQVMsRUFBQyxvRUFDbkNDLDRCQUE0QkgsSUFBQUEsaUJBQVUsRUFBQyxrQ0FDdkNJLDZCQUE2QkYsSUFBQUEsZ0JBQVMsRUFBQztBQUU5QixTQUFTSixxQkFBcUJPLGtCQUFrQixFQUFFQyxhQUFhLEVBQUVDLGdCQUFnQjtJQUM5RixJQUFJQztJQUVKLElBQU1DLGFBQWFWLGdCQUFnQk07SUFFbkNHLHlCQUF5QkMsV0FBV0MsS0FBSyxDQUFDLFNBQUNDO1FBQ3pDLElBQU1DLGdCQUFnQkMsWUFBWUYsV0FBV0wsZUFBZUM7UUFFNUQsSUFBSUssZUFBZTtZQUNqQixPQUFPO1FBQ1Q7SUFDRjtJQUVBLE9BQU9KO0FBQ1Q7QUFFQSxTQUFTTSx3QkFBd0JDLHFCQUFxQixFQUFFVCxhQUFhLEVBQUVDLGdCQUFnQjtJQUNyRixJQUFJUztJQUVKLElBQU1QLGFBQWFWLGdCQUFnQmdCO0lBRW5DQyw0QkFBNEJQLFdBQVdDLEtBQUssQ0FBQyxTQUFDQztRQUM1QyxJQUFNQyxnQkFBZ0JDLFlBQVlGLFdBQVdMLGVBQWVDO1FBRTVELElBQUlLLGVBQWU7WUFDakIsT0FBTztRQUNUO0lBQ0Y7SUFFQSxPQUFPSTtBQUNUO0FBRUEsU0FBU0MsbUJBQW1CQyxnQkFBZ0IsRUFBRVosYUFBYSxFQUFFQyxnQkFBZ0I7SUFDM0UsSUFBSVksdUJBQXVCO0lBRTNCWixtQkFBbUJhLGtCQUFnQixDQUFDQyxvQkFBb0IsQ0FBQ2QsbUJBQW1CLEdBQUc7SUFFL0UsSUFBTWUsbUJBQW1CLEVBQUUsRUFDckJDLHVCQUF1QnBCLDBCQUEwQmUsbUJBQ2pETSwyQkFBMkJDLElBQUFBLHlCQUFzQixFQUFDRixzQkFBc0JELGtCQUFrQmhCLGVBQWVDO0lBRS9HLElBQUlpQiwwQkFBMEI7UUFDNUIsSUFBTVQsd0JBQXdCWCwyQkFBMkJjLG1CQUNuREYsNEJBQTRCRix3QkFBd0JDLHVCQUF1QlQsZUFBZUM7UUFFaEcsSUFBSVMsMkJBQTJCO1lBQzdCRyx1QkFBdUI7UUFDekI7SUFDRjtJQUVBLE9BQU9BO0FBQ1Q7QUFFQSxTQUFTTixZQUFZRixTQUFTLEVBQUVMLGFBQWEsRUFBRUMsZ0JBQWdCO0lBQzdELElBQUlLLGdCQUFnQjtJQUVwQixJQUFNYyxvQkFBb0JmLFVBQVVnQixXQUFXO0lBRS9DLE9BQVFEO1FBQ04sS0FBS0Usa0NBQXVCO1lBQUU7Z0JBQzVCLElBQUlUO2dCQUVKLElBQU1ELG1CQUFtQlAsV0FBWSxHQUFHO2dCQUV4Q1EsdUJBQXVCRixtQkFBbUJDLGtCQUFrQlosZUFBZUM7Z0JBRTNFLElBQUlZLHNCQUFzQjtvQkFDeEIsSUFBTVUsZ0JBQWdCQyxrQkFBYSxDQUFDQyxvQkFBb0IsQ0FBQ2I7b0JBRXpEWCxpQkFBaUJ5QixnQkFBZ0IsQ0FBQ0g7b0JBRWxDakIsZ0JBQWdCO2dCQUNsQjtnQkFFQTtZQUNGO1FBRUEsS0FBS3FCLDRDQUFpQztZQUFFO2dCQUN0QyxJQUFJQztnQkFFSixJQUFNQyxVQUFVLE1BQ1ZDLGNBQWMsRUFBRSxFQUNoQkMsNkJBQTZCMUIsV0FBWSxHQUFHO2dCQUVsRHVCLGlDQUFpQ0ksSUFBQUEsa0JBQTRCLEVBQUNELDRCQUE0Qi9CLGVBQWU4QixhQUFhRCxTQUFTNUI7Z0JBRS9ILElBQUkyQixnQ0FBZ0M7b0JBQ2xDLElBQU1LLHFCQUFxQkMsSUFBQUEsNkJBQWdCLEVBQUNKLGFBQWE3QjtvQkFFekQyQixpQ0FBaUNLLG9CQUFvQixHQUFHO2dCQUMxRDtnQkFFQSxJQUFJTCxnQ0FBZ0M7b0JBQ2xDLElBQU1PLG9CQUFvQnhDLHVCQUF1Qm9DLDZCQUMzQ1IsaUJBQWdCQyxrQkFBYSxDQUFDWSxxQkFBcUIsQ0FBQ0Q7b0JBRTFEbEMsaUJBQWlCeUIsZ0JBQWdCLENBQUNIO29CQUVsQ2pCLGdCQUFnQixNQUFNLEdBQUc7Z0JBQzNCO2dCQUVBO1lBQ0Y7UUFFQSxLQUFLK0IsOENBQW1DO1lBQUU7Z0JBQ3hDLElBQUlDO2dCQUVKLElBQU1ULFdBQVUsTUFDVkMsZUFBYyxFQUFFLEVBQ2hCUywrQkFBK0JsQyxXQUFZLEdBQUc7Z0JBRXBEaUMsbUNBQW1DRSxJQUFBQSxvQkFBOEIsRUFBQ0QsOEJBQThCVCxjQUFhRCxVQUFTNUI7Z0JBRXRILElBQUlxQyxrQ0FBa0M7b0JBQ3BDLElBQU1MLHNCQUFxQkMsSUFBQUEsNkJBQWdCLEVBQUNKLGNBQWE3QjtvQkFFekRxQyxtQ0FBbUNMLHFCQUFxQixHQUFHO2dCQUM3RDtnQkFFQSxJQUFJSyxrQ0FBa0M7b0JBQ3BDLElBQU1ILHFCQUFvQnhDLHVCQUF1QjRDLCtCQUMzQ2hCLGlCQUFnQkMsa0JBQWEsQ0FBQ1kscUJBQXFCLENBQUNEO29CQUUxRGxDLGlCQUFpQnlCLGdCQUFnQixDQUFDSDtvQkFFbENqQixnQkFBZ0I7Z0JBQ2xCO2dCQUVBO1lBQ0Y7SUFDRjtJQUVBLE9BQU9BO0FBQ1QifQ==