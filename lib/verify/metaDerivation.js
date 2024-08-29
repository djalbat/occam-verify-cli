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
                var assignments = [], qualifiedMetastatementNode = childNode; ///
                qualifiedMetastatementVerified = (0, _qualified.default)(qualifiedMetastatementNode, substitutions, assignments, localMetaContext);
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
                var derived = true, assignments1 = [], unqualifiedMetastatementNode = childNode; ///
                unqualifiedMetastatementVerified = (0, _unqualified.default)(unqualifiedMetastatementNode, assignments1, derived, localMetaContext);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92ZXJpZnkvbWV0YURlcml2YXRpb24uanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBNZXRhcHJvb2ZTdGVwIGZyb20gXCIuLi9zdGVwL21ldGFwcm9vZlwiO1xuaW1wb3J0IExvY2FsTWV0YUNvbnRleHQgZnJvbSBcIi4uL2NvbnRleHQvbG9jYWxNZXRhXCI7XG5pbXBvcnQgdmVyaWZ5TWV0YVN1cHBvc2l0aW9ucyBmcm9tIFwiLi4vdmVyaWZ5L21ldGFTdXBwb3NpdGlvbnNcIjtcbmltcG9ydCB2ZXJpZnlRdWFsaWZpZWRNZXRhc3RhdGVtZW50IGZyb20gXCIuLi92ZXJpZnkvbWV0YXN0YXRlbWVudC9xdWFsaWZpZWRcIjtcbmltcG9ydCB2ZXJpZnlVbnF1YWxpZmllZE1ldGFzdGF0ZW1lbnQgZnJvbSBcIi4uL3ZlcmlmeS9tZXRhc3RhdGVtZW50L3VucXVhbGlmaWVkXCI7XG5cbmltcG9ydCB7IGFzc2lnbkFzc2lnbm1lbnQgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2Fzc2lnbm1lbnRzXCI7XG5pbXBvcnQgeyBub2RlUXVlcnksIG5vZGVzUXVlcnkgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5pbXBvcnQgeyBNRVRBX1NVQlBST09GX1JVTEVfTkFNRSwgUVVBTElGSUVEX01FVEFTVEFURU1FTlRfUlVMRV9OQU1FLCBVTlFVQUxJRklFRF9NRVRBU1RBVEVNRU5UX1JVTEVfTkFNRSB9IGZyb20gXCIuLi9ydWxlTmFtZXNcIjtcblxuY29uc3QgY2hpbGROb2Rlc1F1ZXJ5ID0gbm9kZXNRdWVyeShcIi9tZXRhRGVyaXZhdGlvbnxtZXRhU3ViRGVyaXZhdGlvbi8qXCIpLFxuICAgICAgbWV0YXN0YXRlbWVudE5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9xdWFsaWZpZWRNZXRhc3RhdGVtZW50fHVucXVhbGlmaWVkTWV0YXN0YXRlbWVudC9tZXRhc3RhdGVtZW50IVwiKSxcbiAgICAgIG1ldGFTdXBwb3NpdGlvbk5vZGVzUXVlcnkgPSBub2Rlc1F1ZXJ5KFwiL21ldGFTdWJwcm9vZi9tZXRhU3VwcG9zaXRpb25cIiksXG4gICAgICBtZXRhU3ViRGVyaXZhdGlvbk5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9tZXRhU3VicHJvb2YvbWV0YVN1YkRlcml2YXRpb25cIik7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHZlcmlmeU1ldGFEZXJpdmF0aW9uKG1ldGFEZXJpdmF0aW9uTm9kZSwgc3Vic3RpdHV0aW9ucywgbG9jYWxNZXRhQ29udGV4dCkge1xuICBsZXQgbWV0YURlcml2YXRpb25WZXJpZmllZDtcblxuICBjb25zdCBjaGlsZE5vZGVzID0gY2hpbGROb2Rlc1F1ZXJ5KG1ldGFEZXJpdmF0aW9uTm9kZSk7XG5cbiAgbWV0YURlcml2YXRpb25WZXJpZmllZCA9IGNoaWxkTm9kZXMuZXZlcnkoKGNoaWxkTm9kZSkgPT4ge1xuICAgIGNvbnN0IGNoaWxkVmVyaWZpZWQgPSB2ZXJpZnlDaGlsZChjaGlsZE5vZGUsIHN1YnN0aXR1dGlvbnMsIGxvY2FsTWV0YUNvbnRleHQpO1xuXG4gICAgaWYgKGNoaWxkVmVyaWZpZWQpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIG1ldGFEZXJpdmF0aW9uVmVyaWZpZWQ7XG59XG5cbmZ1bmN0aW9uIHZlcmlmeU1ldGFTdWJEZXJpdmF0aW9uKG1ldGFTdWJEZXJpdmF0aW9uTm9kZSwgc3Vic3RpdHV0aW9ucywgbG9jYWxNZXRhQ29udGV4dCkge1xuICBsZXQgbWV0YVN1YkRlcml2YXRpb25WZXJpZmllZDtcblxuICBjb25zdCBjaGlsZE5vZGVzID0gY2hpbGROb2Rlc1F1ZXJ5KG1ldGFTdWJEZXJpdmF0aW9uTm9kZSk7XG5cbiAgbWV0YVN1YkRlcml2YXRpb25WZXJpZmllZCA9IGNoaWxkTm9kZXMuZXZlcnkoKGNoaWxkTm9kZSkgPT4ge1xuICAgIGNvbnN0IGNoaWxkVmVyaWZpZWQgPSB2ZXJpZnlDaGlsZChjaGlsZE5vZGUsIHN1YnN0aXR1dGlvbnMsIGxvY2FsTWV0YUNvbnRleHQpO1xuXG4gICAgaWYgKGNoaWxkVmVyaWZpZWQpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIG1ldGFTdWJEZXJpdmF0aW9uVmVyaWZpZWQ7XG59XG5cbmZ1bmN0aW9uIHZlcmlmeU1ldGFTdWJwcm9vZihtZXRhU3VicHJvb2ZOb2RlLCBzdWJzdGl0dXRpb25zLCBsb2NhbE1ldGFDb250ZXh0KSB7XG4gIGxldCBtZXRhU3VicHJvb2ZWZXJpZmllZCA9IGZhbHNlO1xuXG4gIGxvY2FsTWV0YUNvbnRleHQgPSBMb2NhbE1ldGFDb250ZXh0LmZyb21Mb2NhbE1ldGFDb250ZXh0KGxvY2FsTWV0YUNvbnRleHQpOyAvLy9cblxuICBjb25zdCBtZXRhU3VwcG9zaXRpb25zID0gW10sXG4gICAgICAgIG1ldGFTdXBwb3NpdGlvbk5vZGVzID0gbWV0YVN1cHBvc2l0aW9uTm9kZXNRdWVyeShtZXRhU3VicHJvb2ZOb2RlKSxcbiAgICAgICAgbWV0YVN1cHBvc2l0aW9uc1ZlcmlmaWVkID0gdmVyaWZ5TWV0YVN1cHBvc2l0aW9ucyhtZXRhU3VwcG9zaXRpb25Ob2RlcywgbWV0YVN1cHBvc2l0aW9ucywgc3Vic3RpdHV0aW9ucywgbG9jYWxNZXRhQ29udGV4dCk7XG5cbiAgaWYgKG1ldGFTdXBwb3NpdGlvbnNWZXJpZmllZCkge1xuICAgIGNvbnN0IG1ldGFTdWJEZXJpdmF0aW9uTm9kZSA9IG1ldGFTdWJEZXJpdmF0aW9uTm9kZVF1ZXJ5KG1ldGFTdWJwcm9vZk5vZGUpLFxuICAgICAgICAgIG1ldGFTdWJEZXJpdmF0aW9uVmVyaWZpZWQgPSB2ZXJpZnlNZXRhU3ViRGVyaXZhdGlvbihtZXRhU3ViRGVyaXZhdGlvbk5vZGUsIHN1YnN0aXR1dGlvbnMsIGxvY2FsTWV0YUNvbnRleHQpO1xuXG4gICAgaWYgKG1ldGFTdWJEZXJpdmF0aW9uVmVyaWZpZWQpIHtcbiAgICAgIG1ldGFTdWJwcm9vZlZlcmlmaWVkID0gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gbWV0YVN1YnByb29mVmVyaWZpZWQ7XG59XG5cbmZ1bmN0aW9uIHZlcmlmeUNoaWxkKGNoaWxkTm9kZSwgc3Vic3RpdHV0aW9ucywgbG9jYWxNZXRhQ29udGV4dCkge1xuICBsZXQgY2hpbGRWZXJpZmllZCA9IGZhbHNlO1xuXG4gIGNvbnN0IGNoaWxkTm9kZVJ1bGVOYW1lID0gY2hpbGROb2RlLmdldFJ1bGVOYW1lKCk7XG5cbiAgc3dpdGNoIChjaGlsZE5vZGVSdWxlTmFtZSkge1xuICAgIGNhc2UgTUVUQV9TVUJQUk9PRl9SVUxFX05BTUU6IHtcbiAgICAgIGxldCBtZXRhU3VicHJvb2ZWZXJpZmllZDtcblxuICAgICAgY29uc3QgbWV0YVN1YnByb29mTm9kZSA9IGNoaWxkTm9kZTsgIC8vL1xuXG4gICAgICBtZXRhU3VicHJvb2ZWZXJpZmllZCA9IHZlcmlmeU1ldGFTdWJwcm9vZihtZXRhU3VicHJvb2ZOb2RlLCBzdWJzdGl0dXRpb25zLCBsb2NhbE1ldGFDb250ZXh0KTtcblxuICAgICAgaWYgKG1ldGFTdWJwcm9vZlZlcmlmaWVkKSB7XG4gICAgICAgIGNvbnN0IG1ldGFwcm9vZlN0ZXAgPSBNZXRhcHJvb2ZTdGVwLmZyb21NZXRhU3VicHJvb2ZOb2RlKG1ldGFTdWJwcm9vZk5vZGUpO1xuXG4gICAgICAgIGxvY2FsTWV0YUNvbnRleHQuYWRkTWV0YXByb29mU3RlcChtZXRhcHJvb2ZTdGVwKTtcblxuICAgICAgICBjaGlsZFZlcmlmaWVkID0gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgY2FzZSBRVUFMSUZJRURfTUVUQVNUQVRFTUVOVF9SVUxFX05BTUU6IHtcbiAgICAgIGxldCBxdWFsaWZpZWRNZXRhc3RhdGVtZW50VmVyaWZpZWQ7XG5cbiAgICAgIGNvbnN0IGFzc2lnbm1lbnRzID0gW10sXG4gICAgICAgICAgICBxdWFsaWZpZWRNZXRhc3RhdGVtZW50Tm9kZSA9IGNoaWxkTm9kZTsgIC8vL1xuXG4gICAgICBxdWFsaWZpZWRNZXRhc3RhdGVtZW50VmVyaWZpZWQgPSB2ZXJpZnlRdWFsaWZpZWRNZXRhc3RhdGVtZW50KHF1YWxpZmllZE1ldGFzdGF0ZW1lbnROb2RlLCBzdWJzdGl0dXRpb25zLCBhc3NpZ25tZW50cywgbG9jYWxNZXRhQ29udGV4dCk7XG5cbiAgICAgIGlmIChxdWFsaWZpZWRNZXRhc3RhdGVtZW50VmVyaWZpZWQpIHtcbiAgICAgICAgY29uc3QgYXNzaWdubWVudEFzc2lnbmVkID0gYXNzaWduQXNzaWdubWVudChhc3NpZ25tZW50cywgbG9jYWxNZXRhQ29udGV4dCk7XG5cbiAgICAgICAgcXVhbGlmaWVkTWV0YXN0YXRlbWVudFZlcmlmaWVkID0gYXNzaWdubWVudEFzc2lnbmVkOyAvLy9cbiAgICAgIH1cblxuICAgICAgaWYgKHF1YWxpZmllZE1ldGFzdGF0ZW1lbnRWZXJpZmllZCkge1xuICAgICAgICBjb25zdCBtZXRhc3RhdGVtZW50Tm9kZSA9IG1ldGFzdGF0ZW1lbnROb2RlUXVlcnkocXVhbGlmaWVkTWV0YXN0YXRlbWVudE5vZGUpLFxuICAgICAgICAgICAgICBtZXRhcHJvb2ZTdGVwID0gTWV0YXByb29mU3RlcC5mcm9tTWV0YXN0YXRlbWVudE5vZGUobWV0YXN0YXRlbWVudE5vZGUpO1xuXG4gICAgICAgIGxvY2FsTWV0YUNvbnRleHQuYWRkTWV0YXByb29mU3RlcChtZXRhcHJvb2ZTdGVwKTtcblxuICAgICAgICBjaGlsZFZlcmlmaWVkID0gdHJ1ZTsgLy8vXG4gICAgICB9XG5cbiAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIGNhc2UgVU5RVUFMSUZJRURfTUVUQVNUQVRFTUVOVF9SVUxFX05BTUU6IHtcbiAgICAgIGxldCB1bnF1YWxpZmllZE1ldGFzdGF0ZW1lbnRWZXJpZmllZDtcblxuICAgICAgY29uc3QgZGVyaXZlZCA9IHRydWUsXG4gICAgICAgICAgICBhc3NpZ25tZW50cyA9IFtdLFxuICAgICAgICAgICAgdW5xdWFsaWZpZWRNZXRhc3RhdGVtZW50Tm9kZSA9IGNoaWxkTm9kZTsgIC8vL1xuXG4gICAgICB1bnF1YWxpZmllZE1ldGFzdGF0ZW1lbnRWZXJpZmllZCA9IHZlcmlmeVVucXVhbGlmaWVkTWV0YXN0YXRlbWVudCh1bnF1YWxpZmllZE1ldGFzdGF0ZW1lbnROb2RlLCBhc3NpZ25tZW50cywgZGVyaXZlZCwgbG9jYWxNZXRhQ29udGV4dCk7XG5cbiAgICAgIGlmICh1bnF1YWxpZmllZE1ldGFzdGF0ZW1lbnRWZXJpZmllZCkge1xuICAgICAgICBjb25zdCBhc3NpZ25tZW50QXNzaWduZWQgPSBhc3NpZ25Bc3NpZ25tZW50KGFzc2lnbm1lbnRzLCBsb2NhbE1ldGFDb250ZXh0KTtcblxuICAgICAgICB1bnF1YWxpZmllZE1ldGFzdGF0ZW1lbnRWZXJpZmllZCA9IGFzc2lnbm1lbnRBc3NpZ25lZDsgIC8vL1xuICAgICAgfVxuXG4gICAgICBpZiAodW5xdWFsaWZpZWRNZXRhc3RhdGVtZW50VmVyaWZpZWQpIHtcbiAgICAgICAgY29uc3QgbWV0YXN0YXRlbWVudE5vZGUgPSBtZXRhc3RhdGVtZW50Tm9kZVF1ZXJ5KHVucXVhbGlmaWVkTWV0YXN0YXRlbWVudE5vZGUpLFxuICAgICAgICAgICAgICBtZXRhcHJvb2ZTdGVwID0gTWV0YXByb29mU3RlcC5mcm9tTWV0YXN0YXRlbWVudE5vZGUobWV0YXN0YXRlbWVudE5vZGUpO1xuXG4gICAgICAgIGxvY2FsTWV0YUNvbnRleHQuYWRkTWV0YXByb29mU3RlcChtZXRhcHJvb2ZTdGVwKTtcblxuICAgICAgICBjaGlsZFZlcmlmaWVkID0gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGNoaWxkVmVyaWZpZWQ7XG59XG4iXSwibmFtZXMiOlsidmVyaWZ5TWV0YURlcml2YXRpb24iLCJjaGlsZE5vZGVzUXVlcnkiLCJub2Rlc1F1ZXJ5IiwibWV0YXN0YXRlbWVudE5vZGVRdWVyeSIsIm5vZGVRdWVyeSIsIm1ldGFTdXBwb3NpdGlvbk5vZGVzUXVlcnkiLCJtZXRhU3ViRGVyaXZhdGlvbk5vZGVRdWVyeSIsIm1ldGFEZXJpdmF0aW9uTm9kZSIsInN1YnN0aXR1dGlvbnMiLCJsb2NhbE1ldGFDb250ZXh0IiwibWV0YURlcml2YXRpb25WZXJpZmllZCIsImNoaWxkTm9kZXMiLCJldmVyeSIsImNoaWxkTm9kZSIsImNoaWxkVmVyaWZpZWQiLCJ2ZXJpZnlDaGlsZCIsInZlcmlmeU1ldGFTdWJEZXJpdmF0aW9uIiwibWV0YVN1YkRlcml2YXRpb25Ob2RlIiwibWV0YVN1YkRlcml2YXRpb25WZXJpZmllZCIsInZlcmlmeU1ldGFTdWJwcm9vZiIsIm1ldGFTdWJwcm9vZk5vZGUiLCJtZXRhU3VicHJvb2ZWZXJpZmllZCIsIkxvY2FsTWV0YUNvbnRleHQiLCJmcm9tTG9jYWxNZXRhQ29udGV4dCIsIm1ldGFTdXBwb3NpdGlvbnMiLCJtZXRhU3VwcG9zaXRpb25Ob2RlcyIsIm1ldGFTdXBwb3NpdGlvbnNWZXJpZmllZCIsInZlcmlmeU1ldGFTdXBwb3NpdGlvbnMiLCJjaGlsZE5vZGVSdWxlTmFtZSIsImdldFJ1bGVOYW1lIiwiTUVUQV9TVUJQUk9PRl9SVUxFX05BTUUiLCJtZXRhcHJvb2ZTdGVwIiwiTWV0YXByb29mU3RlcCIsImZyb21NZXRhU3VicHJvb2ZOb2RlIiwiYWRkTWV0YXByb29mU3RlcCIsIlFVQUxJRklFRF9NRVRBU1RBVEVNRU5UX1JVTEVfTkFNRSIsInF1YWxpZmllZE1ldGFzdGF0ZW1lbnRWZXJpZmllZCIsImFzc2lnbm1lbnRzIiwicXVhbGlmaWVkTWV0YXN0YXRlbWVudE5vZGUiLCJ2ZXJpZnlRdWFsaWZpZWRNZXRhc3RhdGVtZW50IiwiYXNzaWdubWVudEFzc2lnbmVkIiwiYXNzaWduQXNzaWdubWVudCIsIm1ldGFzdGF0ZW1lbnROb2RlIiwiZnJvbU1ldGFzdGF0ZW1lbnROb2RlIiwiVU5RVUFMSUZJRURfTUVUQVNUQVRFTUVOVF9SVUxFX05BTUUiLCJ1bnF1YWxpZmllZE1ldGFzdGF0ZW1lbnRWZXJpZmllZCIsImRlcml2ZWQiLCJ1bnF1YWxpZmllZE1ldGFzdGF0ZW1lbnROb2RlIiwidmVyaWZ5VW5xdWFsaWZpZWRNZXRhc3RhdGVtZW50Il0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFpQkE7OztlQUF3QkE7OztnRUFmRTtnRUFDRzt1RUFDTTtnRUFDTTtrRUFDRTsyQkFFVjtxQkFDSzt5QkFDMEU7Ozs7OztBQUVoSCxJQUFNQyxrQkFBa0JDLElBQUFBLGlCQUFVLEVBQUMsd0NBQzdCQyx5QkFBeUJDLElBQUFBLGdCQUFTLEVBQUMsb0VBQ25DQyw0QkFBNEJILElBQUFBLGlCQUFVLEVBQUMsa0NBQ3ZDSSw2QkFBNkJGLElBQUFBLGdCQUFTLEVBQUM7QUFFOUIsU0FBU0oscUJBQXFCTyxrQkFBa0IsRUFBRUMsYUFBYSxFQUFFQyxnQkFBZ0I7SUFDOUYsSUFBSUM7SUFFSixJQUFNQyxhQUFhVixnQkFBZ0JNO0lBRW5DRyx5QkFBeUJDLFdBQVdDLEtBQUssQ0FBQyxTQUFDQztRQUN6QyxJQUFNQyxnQkFBZ0JDLFlBQVlGLFdBQVdMLGVBQWVDO1FBRTVELElBQUlLLGVBQWU7WUFDakIsT0FBTztRQUNUO0lBQ0Y7SUFFQSxPQUFPSjtBQUNUO0FBRUEsU0FBU00sd0JBQXdCQyxxQkFBcUIsRUFBRVQsYUFBYSxFQUFFQyxnQkFBZ0I7SUFDckYsSUFBSVM7SUFFSixJQUFNUCxhQUFhVixnQkFBZ0JnQjtJQUVuQ0MsNEJBQTRCUCxXQUFXQyxLQUFLLENBQUMsU0FBQ0M7UUFDNUMsSUFBTUMsZ0JBQWdCQyxZQUFZRixXQUFXTCxlQUFlQztRQUU1RCxJQUFJSyxlQUFlO1lBQ2pCLE9BQU87UUFDVDtJQUNGO0lBRUEsT0FBT0k7QUFDVDtBQUVBLFNBQVNDLG1CQUFtQkMsZ0JBQWdCLEVBQUVaLGFBQWEsRUFBRUMsZ0JBQWdCO0lBQzNFLElBQUlZLHVCQUF1QjtJQUUzQlosbUJBQW1CYSxrQkFBZ0IsQ0FBQ0Msb0JBQW9CLENBQUNkLG1CQUFtQixHQUFHO0lBRS9FLElBQU1lLG1CQUFtQixFQUFFLEVBQ3JCQyx1QkFBdUJwQiwwQkFBMEJlLG1CQUNqRE0sMkJBQTJCQyxJQUFBQSx5QkFBc0IsRUFBQ0Ysc0JBQXNCRCxrQkFBa0JoQixlQUFlQztJQUUvRyxJQUFJaUIsMEJBQTBCO1FBQzVCLElBQU1ULHdCQUF3QlgsMkJBQTJCYyxtQkFDbkRGLDRCQUE0QkYsd0JBQXdCQyx1QkFBdUJULGVBQWVDO1FBRWhHLElBQUlTLDJCQUEyQjtZQUM3QkcsdUJBQXVCO1FBQ3pCO0lBQ0Y7SUFFQSxPQUFPQTtBQUNUO0FBRUEsU0FBU04sWUFBWUYsU0FBUyxFQUFFTCxhQUFhLEVBQUVDLGdCQUFnQjtJQUM3RCxJQUFJSyxnQkFBZ0I7SUFFcEIsSUFBTWMsb0JBQW9CZixVQUFVZ0IsV0FBVztJQUUvQyxPQUFRRDtRQUNOLEtBQUtFLGtDQUF1QjtZQUFFO2dCQUM1QixJQUFJVDtnQkFFSixJQUFNRCxtQkFBbUJQLFdBQVksR0FBRztnQkFFeENRLHVCQUF1QkYsbUJBQW1CQyxrQkFBa0JaLGVBQWVDO2dCQUUzRSxJQUFJWSxzQkFBc0I7b0JBQ3hCLElBQU1VLGdCQUFnQkMsa0JBQWEsQ0FBQ0Msb0JBQW9CLENBQUNiO29CQUV6RFgsaUJBQWlCeUIsZ0JBQWdCLENBQUNIO29CQUVsQ2pCLGdCQUFnQjtnQkFDbEI7Z0JBRUE7WUFDRjtRQUVBLEtBQUtxQiw0Q0FBaUM7WUFBRTtnQkFDdEMsSUFBSUM7Z0JBRUosSUFBTUMsY0FBYyxFQUFFLEVBQ2hCQyw2QkFBNkJ6QixXQUFZLEdBQUc7Z0JBRWxEdUIsaUNBQWlDRyxJQUFBQSxrQkFBNEIsRUFBQ0QsNEJBQTRCOUIsZUFBZTZCLGFBQWE1QjtnQkFFdEgsSUFBSTJCLGdDQUFnQztvQkFDbEMsSUFBTUkscUJBQXFCQyxJQUFBQSw2QkFBZ0IsRUFBQ0osYUFBYTVCO29CQUV6RDJCLGlDQUFpQ0ksb0JBQW9CLEdBQUc7Z0JBQzFEO2dCQUVBLElBQUlKLGdDQUFnQztvQkFDbEMsSUFBTU0sb0JBQW9CdkMsdUJBQXVCbUMsNkJBQzNDUCxpQkFBZ0JDLGtCQUFhLENBQUNXLHFCQUFxQixDQUFDRDtvQkFFMURqQyxpQkFBaUJ5QixnQkFBZ0IsQ0FBQ0g7b0JBRWxDakIsZ0JBQWdCLE1BQU0sR0FBRztnQkFDM0I7Z0JBRUE7WUFDRjtRQUVBLEtBQUs4Qiw4Q0FBbUM7WUFBRTtnQkFDeEMsSUFBSUM7Z0JBRUosSUFBTUMsVUFBVSxNQUNWVCxlQUFjLEVBQUUsRUFDaEJVLCtCQUErQmxDLFdBQVksR0FBRztnQkFFcERnQyxtQ0FBbUNHLElBQUFBLG9CQUE4QixFQUFDRCw4QkFBOEJWLGNBQWFTLFNBQVNyQztnQkFFdEgsSUFBSW9DLGtDQUFrQztvQkFDcEMsSUFBTUwsc0JBQXFCQyxJQUFBQSw2QkFBZ0IsRUFBQ0osY0FBYTVCO29CQUV6RG9DLG1DQUFtQ0wscUJBQXFCLEdBQUc7Z0JBQzdEO2dCQUVBLElBQUlLLGtDQUFrQztvQkFDcEMsSUFBTUgscUJBQW9CdkMsdUJBQXVCNEMsK0JBQzNDaEIsaUJBQWdCQyxrQkFBYSxDQUFDVyxxQkFBcUIsQ0FBQ0Q7b0JBRTFEakMsaUJBQWlCeUIsZ0JBQWdCLENBQUNIO29CQUVsQ2pCLGdCQUFnQjtnQkFDbEI7Z0JBRUE7WUFDRjtJQUNGO0lBRUEsT0FBT0E7QUFDVCJ9