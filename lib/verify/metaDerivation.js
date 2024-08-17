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
var _local = /*#__PURE__*/ _interop_require_default(require("../context/local"));
var _metaproof = /*#__PURE__*/ _interop_require_default(require("../step/metaproof"));
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
function verifyMetaDerivation(metaDerivationNode, localContext) {
    var metaDerivationVerified;
    var childNodes = childNodesQuery(metaDerivationNode);
    metaDerivationVerified = childNodes.every(function(childNode) {
        var childVerified = verifyChild(childNode, localContext);
        if (childVerified) {
            return true;
        }
    });
    return metaDerivationVerified;
}
function verifyMetaSubDerivation(metaSubDerivationNode, localContext) {
    var metaSubDerivationVerified;
    var childNodes = childNodesQuery(metaSubDerivationNode);
    metaSubDerivationVerified = childNodes.every(function(childNode) {
        var childVerified = verifyChild(childNode, localContext);
        if (childVerified) {
            return true;
        }
    });
    return metaSubDerivationVerified;
}
function verifyMetaSubproof(metaSubproofNode, localContext) {
    var metaSubproofVerified = false;
    localContext = _local.default.fromLocalContext(localContext); ///
    var metaSuppositions = [], metaSuppositionNodes = metaSuppositionNodesQuery(metaSubproofNode), metaSuppositionsVerified = (0, _metaSuppositions.default)(metaSuppositionNodes, metaSuppositions, localContext);
    if (metaSuppositionsVerified) {
        var metaSubDerivationNode = metaSubDerivationNodeQuery(metaSubproofNode), metaSubDerivationVerified = verifyMetaSubDerivation(metaSubDerivationNode, localContext);
        if (metaSubDerivationVerified) {
            metaSubproofVerified = true;
        }
    }
    return metaSubproofVerified;
}
function verifyChild(childNode, localContext) {
    var childVerified = false;
    var childNodeRuleName = childNode.getRuleName();
    switch(childNodeRuleName){
        case _ruleNames.META_SUBPROOF_RULE_NAME:
            {
                var metaSubproofVerified;
                var metaSubproofNode = childNode; ///
                metaSubproofVerified = verifyMetaSubproof(metaSubproofNode, localContext);
                if (metaSubproofVerified) {
                    var metaproofStep = _metaproof.default.fromMetaSubproofNode(metaSubproofNode);
                    localContext.addMetaproofStep(metaproofStep);
                    childVerified = true;
                }
                break;
            }
        case _ruleNames.QUALIFIED_METASTATEMENT_RULE_NAME:
            {
                var qualifiedMetastatementVerified;
                var derived = true, assignments = [], qualifiedMetastatementNode = childNode; ///
                qualifiedMetastatementVerified = (0, _qualified.default)(qualifiedMetastatementNode, assignments, derived, localContext);
                if (qualifiedMetastatementVerified) {
                    var assignmentAssigned = (0, _assignments.assignAssignment)(assignments, localContext);
                    qualifiedMetastatementVerified = assignmentAssigned; ///
                }
                if (qualifiedMetastatementVerified) {
                    var metastatementNode = metastatementNodeQuery(qualifiedMetastatementNode), metaproofStep1 = _metaproof.default.fromMetastatementNode(metastatementNode);
                    localContext.addMetaproofStep(metaproofStep1);
                    childVerified = true; ///
                }
                break;
            }
        case _ruleNames.UNQUALIFIED_METASTATEMENT_RULE_NAME:
            {
                var unqualifiedMetastatementVerified;
                var derived1 = true, assignments1 = [], unqualifiedMetastatementNode = childNode; ///
                unqualifiedMetastatementVerified = (0, _unqualified.default)(unqualifiedMetastatementNode, assignments1, derived1, localContext);
                if (unqualifiedMetastatementVerified) {
                    var assignmentAssigned1 = (0, _assignments.assignAssignment)(assignments1, localContext);
                    unqualifiedMetastatementVerified = assignmentAssigned1; ///
                }
                if (unqualifiedMetastatementVerified) {
                    var metastatementNode1 = metastatementNodeQuery(unqualifiedMetastatementNode), metaproofStep2 = _metaproof.default.fromMetastatementNode(metastatementNode1);
                    localContext.addMetaproofStep(metaproofStep2);
                    childVerified = true;
                }
                break;
            }
    }
    return childVerified;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92ZXJpZnkvbWV0YURlcml2YXRpb24uanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBMb2NhbENvbnRleHQgZnJvbSBcIi4uL2NvbnRleHQvbG9jYWxcIjtcbmltcG9ydCBNZXRhcHJvb2ZTdGVwIGZyb20gXCIuLi9zdGVwL21ldGFwcm9vZlwiO1xuaW1wb3J0IHZlcmlmeU1ldGFTdXBwb3NpdGlvbnMgZnJvbSBcIi4uL3ZlcmlmeS9tZXRhU3VwcG9zaXRpb25zXCI7XG5pbXBvcnQgdmVyaWZ5UXVhbGlmaWVkTWV0YXN0YXRlbWVudCBmcm9tIFwiLi4vdmVyaWZ5L21ldGFzdGF0ZW1lbnQvcXVhbGlmaWVkXCI7XG5pbXBvcnQgdmVyaWZ5VW5xdWFsaWZpZWRNZXRhc3RhdGVtZW50IGZyb20gXCIuLi92ZXJpZnkvbWV0YXN0YXRlbWVudC91bnF1YWxpZmllZFwiO1xuXG5pbXBvcnQgeyBhc3NpZ25Bc3NpZ25tZW50IH0gZnJvbSBcIi4uL3V0aWxpdGllcy9hc3NpZ25tZW50c1wiO1xuaW1wb3J0IHsgbm9kZVF1ZXJ5LCBub2Rlc1F1ZXJ5IH0gZnJvbSBcIi4uL3V0aWxpdGllcy9xdWVyeVwiO1xuaW1wb3J0IHsgTUVUQV9TVUJQUk9PRl9SVUxFX05BTUUsIFFVQUxJRklFRF9NRVRBU1RBVEVNRU5UX1JVTEVfTkFNRSwgVU5RVUFMSUZJRURfTUVUQVNUQVRFTUVOVF9SVUxFX05BTUUgfSBmcm9tIFwiLi4vcnVsZU5hbWVzXCI7XG5cbmNvbnN0IGNoaWxkTm9kZXNRdWVyeSA9IG5vZGVzUXVlcnkoXCIvbWV0YURlcml2YXRpb258bWV0YVN1YkRlcml2YXRpb24vKlwiKSxcbiAgICAgIG1ldGFzdGF0ZW1lbnROb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvcXVhbGlmaWVkTWV0YXN0YXRlbWVudHx1bnF1YWxpZmllZE1ldGFzdGF0ZW1lbnQvbWV0YXN0YXRlbWVudCFcIiksXG4gICAgICBtZXRhU3VwcG9zaXRpb25Ob2Rlc1F1ZXJ5ID0gbm9kZXNRdWVyeShcIi9tZXRhU3VicHJvb2YvbWV0YVN1cHBvc2l0aW9uXCIpLFxuICAgICAgbWV0YVN1YkRlcml2YXRpb25Ob2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvbWV0YVN1YnByb29mL21ldGFTdWJEZXJpdmF0aW9uXCIpO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB2ZXJpZnlNZXRhRGVyaXZhdGlvbihtZXRhRGVyaXZhdGlvbk5vZGUsIGxvY2FsQ29udGV4dCkge1xuICBsZXQgbWV0YURlcml2YXRpb25WZXJpZmllZDtcblxuICBjb25zdCBjaGlsZE5vZGVzID0gY2hpbGROb2Rlc1F1ZXJ5KG1ldGFEZXJpdmF0aW9uTm9kZSk7XG5cbiAgbWV0YURlcml2YXRpb25WZXJpZmllZCA9IGNoaWxkTm9kZXMuZXZlcnkoKGNoaWxkTm9kZSkgPT4ge1xuICAgIGNvbnN0IGNoaWxkVmVyaWZpZWQgPSB2ZXJpZnlDaGlsZChjaGlsZE5vZGUsIGxvY2FsQ29udGV4dCk7XG5cbiAgICBpZiAoY2hpbGRWZXJpZmllZCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gbWV0YURlcml2YXRpb25WZXJpZmllZDtcbn1cblxuZnVuY3Rpb24gdmVyaWZ5TWV0YVN1YkRlcml2YXRpb24obWV0YVN1YkRlcml2YXRpb25Ob2RlLCBsb2NhbENvbnRleHQpIHtcbiAgbGV0IG1ldGFTdWJEZXJpdmF0aW9uVmVyaWZpZWQ7XG5cbiAgY29uc3QgY2hpbGROb2RlcyA9IGNoaWxkTm9kZXNRdWVyeShtZXRhU3ViRGVyaXZhdGlvbk5vZGUpO1xuXG4gIG1ldGFTdWJEZXJpdmF0aW9uVmVyaWZpZWQgPSBjaGlsZE5vZGVzLmV2ZXJ5KChjaGlsZE5vZGUpID0+IHtcbiAgICBjb25zdCBjaGlsZFZlcmlmaWVkID0gdmVyaWZ5Q2hpbGQoY2hpbGROb2RlLCBsb2NhbENvbnRleHQpO1xuXG4gICAgaWYgKGNoaWxkVmVyaWZpZWQpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIG1ldGFTdWJEZXJpdmF0aW9uVmVyaWZpZWQ7XG59XG5cbmZ1bmN0aW9uIHZlcmlmeU1ldGFTdWJwcm9vZihtZXRhU3VicHJvb2ZOb2RlLCBsb2NhbENvbnRleHQpIHtcbiAgbGV0IG1ldGFTdWJwcm9vZlZlcmlmaWVkID0gZmFsc2U7XG5cbiAgbG9jYWxDb250ZXh0ID0gTG9jYWxDb250ZXh0LmZyb21Mb2NhbENvbnRleHQobG9jYWxDb250ZXh0KTsgLy8vXG5cbiAgY29uc3QgbWV0YVN1cHBvc2l0aW9ucyA9IFtdLFxuICAgICAgICBtZXRhU3VwcG9zaXRpb25Ob2RlcyA9IG1ldGFTdXBwb3NpdGlvbk5vZGVzUXVlcnkobWV0YVN1YnByb29mTm9kZSksXG4gICAgICAgIG1ldGFTdXBwb3NpdGlvbnNWZXJpZmllZCA9IHZlcmlmeU1ldGFTdXBwb3NpdGlvbnMobWV0YVN1cHBvc2l0aW9uTm9kZXMsIG1ldGFTdXBwb3NpdGlvbnMsIGxvY2FsQ29udGV4dCk7XG5cbiAgaWYgKG1ldGFTdXBwb3NpdGlvbnNWZXJpZmllZCkge1xuICAgIGNvbnN0IG1ldGFTdWJEZXJpdmF0aW9uTm9kZSA9IG1ldGFTdWJEZXJpdmF0aW9uTm9kZVF1ZXJ5KG1ldGFTdWJwcm9vZk5vZGUpLFxuICAgICAgICAgIG1ldGFTdWJEZXJpdmF0aW9uVmVyaWZpZWQgPSB2ZXJpZnlNZXRhU3ViRGVyaXZhdGlvbihtZXRhU3ViRGVyaXZhdGlvbk5vZGUsIGxvY2FsQ29udGV4dCk7XG5cbiAgICBpZiAobWV0YVN1YkRlcml2YXRpb25WZXJpZmllZCkge1xuICAgICAgbWV0YVN1YnByb29mVmVyaWZpZWQgPSB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBtZXRhU3VicHJvb2ZWZXJpZmllZDtcbn1cblxuZnVuY3Rpb24gdmVyaWZ5Q2hpbGQoY2hpbGROb2RlLCBsb2NhbENvbnRleHQpIHtcbiAgbGV0IGNoaWxkVmVyaWZpZWQgPSBmYWxzZTtcblxuICBjb25zdCBjaGlsZE5vZGVSdWxlTmFtZSA9IGNoaWxkTm9kZS5nZXRSdWxlTmFtZSgpO1xuXG4gIHN3aXRjaCAoY2hpbGROb2RlUnVsZU5hbWUpIHtcbiAgICBjYXNlIE1FVEFfU1VCUFJPT0ZfUlVMRV9OQU1FOiB7XG4gICAgICBsZXQgbWV0YVN1YnByb29mVmVyaWZpZWQ7XG5cbiAgICAgIGNvbnN0IG1ldGFTdWJwcm9vZk5vZGUgPSBjaGlsZE5vZGU7ICAvLy9cblxuICAgICAgbWV0YVN1YnByb29mVmVyaWZpZWQgPSB2ZXJpZnlNZXRhU3VicHJvb2YobWV0YVN1YnByb29mTm9kZSwgbG9jYWxDb250ZXh0KTtcblxuICAgICAgaWYgKG1ldGFTdWJwcm9vZlZlcmlmaWVkKSB7XG4gICAgICAgIGNvbnN0IG1ldGFwcm9vZlN0ZXAgPSBNZXRhcHJvb2ZTdGVwLmZyb21NZXRhU3VicHJvb2ZOb2RlKG1ldGFTdWJwcm9vZk5vZGUpO1xuXG4gICAgICAgIGxvY2FsQ29udGV4dC5hZGRNZXRhcHJvb2ZTdGVwKG1ldGFwcm9vZlN0ZXApO1xuXG4gICAgICAgIGNoaWxkVmVyaWZpZWQgPSB0cnVlO1xuICAgICAgfVxuXG4gICAgICBicmVhaztcbiAgICB9XG5cbiAgICBjYXNlIFFVQUxJRklFRF9NRVRBU1RBVEVNRU5UX1JVTEVfTkFNRToge1xuICAgICAgbGV0IHF1YWxpZmllZE1ldGFzdGF0ZW1lbnRWZXJpZmllZDtcblxuICAgICAgY29uc3QgZGVyaXZlZCA9IHRydWUsXG4gICAgICAgICAgICBhc3NpZ25tZW50cyA9IFtdLFxuICAgICAgICAgICAgcXVhbGlmaWVkTWV0YXN0YXRlbWVudE5vZGUgPSBjaGlsZE5vZGU7ICAvLy9cblxuICAgICAgcXVhbGlmaWVkTWV0YXN0YXRlbWVudFZlcmlmaWVkID0gdmVyaWZ5UXVhbGlmaWVkTWV0YXN0YXRlbWVudChxdWFsaWZpZWRNZXRhc3RhdGVtZW50Tm9kZSwgYXNzaWdubWVudHMsIGRlcml2ZWQsIGxvY2FsQ29udGV4dCk7XG5cbiAgICAgIGlmIChxdWFsaWZpZWRNZXRhc3RhdGVtZW50VmVyaWZpZWQpIHtcbiAgICAgICAgY29uc3QgYXNzaWdubWVudEFzc2lnbmVkID0gYXNzaWduQXNzaWdubWVudChhc3NpZ25tZW50cywgbG9jYWxDb250ZXh0KTtcblxuICAgICAgICBxdWFsaWZpZWRNZXRhc3RhdGVtZW50VmVyaWZpZWQgPSBhc3NpZ25tZW50QXNzaWduZWQ7IC8vL1xuICAgICAgfVxuXG4gICAgICBpZiAocXVhbGlmaWVkTWV0YXN0YXRlbWVudFZlcmlmaWVkKSB7XG4gICAgICAgIGNvbnN0IG1ldGFzdGF0ZW1lbnROb2RlID0gbWV0YXN0YXRlbWVudE5vZGVRdWVyeShxdWFsaWZpZWRNZXRhc3RhdGVtZW50Tm9kZSksXG4gICAgICAgICAgICAgIG1ldGFwcm9vZlN0ZXAgPSBNZXRhcHJvb2ZTdGVwLmZyb21NZXRhc3RhdGVtZW50Tm9kZShtZXRhc3RhdGVtZW50Tm9kZSk7XG5cbiAgICAgICAgbG9jYWxDb250ZXh0LmFkZE1ldGFwcm9vZlN0ZXAobWV0YXByb29mU3RlcCk7XG5cbiAgICAgICAgY2hpbGRWZXJpZmllZCA9IHRydWU7IC8vL1xuICAgICAgfVxuXG4gICAgICBicmVhaztcbiAgICB9XG5cbiAgICBjYXNlIFVOUVVBTElGSUVEX01FVEFTVEFURU1FTlRfUlVMRV9OQU1FOiB7XG4gICAgICBsZXQgdW5xdWFsaWZpZWRNZXRhc3RhdGVtZW50VmVyaWZpZWQ7XG5cbiAgICAgIGNvbnN0IGRlcml2ZWQgPSB0cnVlLFxuICAgICAgICAgICAgYXNzaWdubWVudHMgPSBbXSxcbiAgICAgICAgICAgIHVucXVhbGlmaWVkTWV0YXN0YXRlbWVudE5vZGUgPSBjaGlsZE5vZGU7ICAvLy9cblxuICAgICAgdW5xdWFsaWZpZWRNZXRhc3RhdGVtZW50VmVyaWZpZWQgPSB2ZXJpZnlVbnF1YWxpZmllZE1ldGFzdGF0ZW1lbnQodW5xdWFsaWZpZWRNZXRhc3RhdGVtZW50Tm9kZSwgYXNzaWdubWVudHMsIGRlcml2ZWQsIGxvY2FsQ29udGV4dCk7XG5cbiAgICAgIGlmICh1bnF1YWxpZmllZE1ldGFzdGF0ZW1lbnRWZXJpZmllZCkge1xuICAgICAgICBjb25zdCBhc3NpZ25tZW50QXNzaWduZWQgPSBhc3NpZ25Bc3NpZ25tZW50KGFzc2lnbm1lbnRzLCBsb2NhbENvbnRleHQpO1xuXG4gICAgICAgIHVucXVhbGlmaWVkTWV0YXN0YXRlbWVudFZlcmlmaWVkID0gYXNzaWdubWVudEFzc2lnbmVkOyAgLy8vXG4gICAgICB9XG5cbiAgICAgIGlmICh1bnF1YWxpZmllZE1ldGFzdGF0ZW1lbnRWZXJpZmllZCkge1xuICAgICAgICBjb25zdCBtZXRhc3RhdGVtZW50Tm9kZSA9IG1ldGFzdGF0ZW1lbnROb2RlUXVlcnkodW5xdWFsaWZpZWRNZXRhc3RhdGVtZW50Tm9kZSksXG4gICAgICAgICAgICAgIG1ldGFwcm9vZlN0ZXAgPSBNZXRhcHJvb2ZTdGVwLmZyb21NZXRhc3RhdGVtZW50Tm9kZShtZXRhc3RhdGVtZW50Tm9kZSk7XG5cbiAgICAgICAgbG9jYWxDb250ZXh0LmFkZE1ldGFwcm9vZlN0ZXAobWV0YXByb29mU3RlcCk7XG5cbiAgICAgICAgY2hpbGRWZXJpZmllZCA9IHRydWU7XG4gICAgICB9XG5cbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBjaGlsZFZlcmlmaWVkO1xufVxuIl0sIm5hbWVzIjpbInZlcmlmeU1ldGFEZXJpdmF0aW9uIiwiY2hpbGROb2Rlc1F1ZXJ5Iiwibm9kZXNRdWVyeSIsIm1ldGFzdGF0ZW1lbnROb2RlUXVlcnkiLCJub2RlUXVlcnkiLCJtZXRhU3VwcG9zaXRpb25Ob2Rlc1F1ZXJ5IiwibWV0YVN1YkRlcml2YXRpb25Ob2RlUXVlcnkiLCJtZXRhRGVyaXZhdGlvbk5vZGUiLCJsb2NhbENvbnRleHQiLCJtZXRhRGVyaXZhdGlvblZlcmlmaWVkIiwiY2hpbGROb2RlcyIsImV2ZXJ5IiwiY2hpbGROb2RlIiwiY2hpbGRWZXJpZmllZCIsInZlcmlmeUNoaWxkIiwidmVyaWZ5TWV0YVN1YkRlcml2YXRpb24iLCJtZXRhU3ViRGVyaXZhdGlvbk5vZGUiLCJtZXRhU3ViRGVyaXZhdGlvblZlcmlmaWVkIiwidmVyaWZ5TWV0YVN1YnByb29mIiwibWV0YVN1YnByb29mTm9kZSIsIm1ldGFTdWJwcm9vZlZlcmlmaWVkIiwiTG9jYWxDb250ZXh0IiwiZnJvbUxvY2FsQ29udGV4dCIsIm1ldGFTdXBwb3NpdGlvbnMiLCJtZXRhU3VwcG9zaXRpb25Ob2RlcyIsIm1ldGFTdXBwb3NpdGlvbnNWZXJpZmllZCIsInZlcmlmeU1ldGFTdXBwb3NpdGlvbnMiLCJjaGlsZE5vZGVSdWxlTmFtZSIsImdldFJ1bGVOYW1lIiwiTUVUQV9TVUJQUk9PRl9SVUxFX05BTUUiLCJtZXRhcHJvb2ZTdGVwIiwiTWV0YXByb29mU3RlcCIsImZyb21NZXRhU3VicHJvb2ZOb2RlIiwiYWRkTWV0YXByb29mU3RlcCIsIlFVQUxJRklFRF9NRVRBU1RBVEVNRU5UX1JVTEVfTkFNRSIsInF1YWxpZmllZE1ldGFzdGF0ZW1lbnRWZXJpZmllZCIsImRlcml2ZWQiLCJhc3NpZ25tZW50cyIsInF1YWxpZmllZE1ldGFzdGF0ZW1lbnROb2RlIiwidmVyaWZ5UXVhbGlmaWVkTWV0YXN0YXRlbWVudCIsImFzc2lnbm1lbnRBc3NpZ25lZCIsImFzc2lnbkFzc2lnbm1lbnQiLCJtZXRhc3RhdGVtZW50Tm9kZSIsImZyb21NZXRhc3RhdGVtZW50Tm9kZSIsIlVOUVVBTElGSUVEX01FVEFTVEFURU1FTlRfUlVMRV9OQU1FIiwidW5xdWFsaWZpZWRNZXRhc3RhdGVtZW50VmVyaWZpZWQiLCJ1bnF1YWxpZmllZE1ldGFzdGF0ZW1lbnROb2RlIiwidmVyaWZ5VW5xdWFsaWZpZWRNZXRhc3RhdGVtZW50Il0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFpQkE7OztlQUF3QkE7Ozs0REFmQztnRUFDQzt1RUFDUztnRUFDTTtrRUFDRTsyQkFFVjtxQkFDSzt5QkFDMEU7Ozs7OztBQUVoSCxJQUFNQyxrQkFBa0JDLElBQUFBLGlCQUFVLEVBQUMsd0NBQzdCQyx5QkFBeUJDLElBQUFBLGdCQUFTLEVBQUMs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