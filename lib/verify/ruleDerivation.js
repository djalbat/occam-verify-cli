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
    if (premiseVerified) {
        return true;
    }
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
                var derived = true, assignments = [], qualifiedMetastatementNode = childNode, qualifiedMetastatementVerified = (0, _qualified.default)(qualifiedMetastatementNode, assignments, derived, localMetaContext);
                if (qualifiedMetastatementVerified) {
                    var metastatementNode = metastatementNodeQuery(qualifiedMetastatementNode), metaproofStep1 = _metaproof.default.fromMetastatementNode(metastatementNode);
                    localMetaContext.addMetaproofStep(metaproofStep1);
                    childVerified = qualifiedMetastatementVerified; ///
                }
                break;
            }
        case _ruleNames.UNQUALIFIED_METASTATEMENT_RULE_NAME:
            {
                var derived1 = true, unqualifiedMetastatementNode = childNode, unqualifiedMetastatementVerified = (0, _unqualified.default)(unqualifiedMetastatementNode, derived1, localMetaContext);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92ZXJpZnkvcnVsZURlcml2YXRpb24uanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBNZXRhcHJvb2ZTdGVwIGZyb20gXCIuLi9zdGVwL21ldGFwcm9vZlwiO1xuaW1wb3J0IHZlcmlmeVByZW1pc2VzIGZyb20gXCIuLi92ZXJpZnkvcHJlbWlzZXNcIjtcbmltcG9ydCBMb2NhbE1ldGFDb250ZXh0IGZyb20gXCIuLi9jb250ZXh0L2xvY2FsTWV0YVwiO1xuaW1wb3J0IHZlcmlmeVF1YWxpZmllZE1ldGFzdGF0ZW1lbnQgZnJvbSBcIi4uL3ZlcmlmeS9tZXRhc3RhdGVtZW50L3F1YWxpZmllZFwiO1xuaW1wb3J0IHZlcmlmeVVucXVhbGlmaWVkTWV0YXN0YXRlbWVudCBmcm9tIFwiLi4vdmVyaWZ5L21ldGFzdGF0ZW1lbnQvdW5xdWFsaWZpZWRcIjtcblxuaW1wb3J0IHsgbm9kZVF1ZXJ5LCBub2Rlc1F1ZXJ5IH0gZnJvbSBcIi4uL3V0aWxpdGllcy9xdWVyeVwiO1xuaW1wb3J0IHsgUlVMRV9TVUJQUk9PRl9SVUxFX05BTUUsIFFVQUxJRklFRF9NRVRBU1RBVEVNRU5UX1JVTEVfTkFNRSwgVU5RVUFMSUZJRURfTUVUQVNUQVRFTUVOVF9SVUxFX05BTUUgfSBmcm9tIFwiLi4vcnVsZU5hbWVzXCI7XG5cbmNvbnN0IGNoaWxkTm9kZXNRdWVyeSA9IG5vZGVzUXVlcnkoXCIvcnVsZURlcml2YXRpb258cnVsZVN1YkRlcml2YXRpb24vKlwiKSxcbiAgICAgIHByZW1pc2VOb2Rlc1F1ZXJ5ID0gbm9kZXNRdWVyeShcIi9ydWxlU3VicHJvb2YvcHJlbWlzZVwiKSxcbiAgICAgIG1ldGFzdGF0ZW1lbnROb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvcXVhbGlmaWVkTWV0YXN0YXRlbWVudHx1bnF1YWxpZmllZE1ldGFzdGF0ZW1lbnQvbWV0YXN0YXRlbWVudCFcIiksXG4gICAgICBydWxlU3ViRGVyaXZhdGlvbk5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9ydWxlU3VicHJvb2YvcnVsZVN1YkRlcml2YXRpb25cIik7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHZlcmlmeVJ1bGVEZXJpdmF0aW9uKHJ1bGVEZXJpdmF0aW9uTm9kZSwgbG9jYWxNZXRhQ29udGV4dCkge1xuICBsZXQgcnVsZURlcml2YXRpb25WZXJpZmllZDtcblxuICBjb25zdCBjaGlsZE5vZGVzID0gY2hpbGROb2Rlc1F1ZXJ5KHJ1bGVEZXJpdmF0aW9uTm9kZSk7XG5cbiAgcnVsZURlcml2YXRpb25WZXJpZmllZCA9IGNoaWxkTm9kZXMuZXZlcnkoKGNoaWxkTm9kZSkgPT4ge1xuICAgIGNvbnN0IGNoaWxkVmVyaWZpZWQgPSB2ZXJpZnlDaGlsZChjaGlsZE5vZGUsIGxvY2FsTWV0YUNvbnRleHQpO1xuXG4gICAgaWYgKGNoaWxkVmVyaWZpZWQpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIHJ1bGVEZXJpdmF0aW9uVmVyaWZpZWQ7XG59XG5cbmZ1bmN0aW9uIHZlcmlmeVJ1bGVTdWJEZXJpdmF0aW9uKHJ1bGVTdWJEZXJpdmF0aW9uTm9kZSwgbG9jYWxNZXRhQ29udGV4dCkge1xuICBsZXQgcnVsZVN1YkRlcml2YXRpb25WZXJpZmllZDtcblxuICBjb25zdCBjaGlsZE5vZGVzID0gY2hpbGROb2Rlc1F1ZXJ5KHJ1bGVTdWJEZXJpdmF0aW9uTm9kZSk7XG5cbiAgcnVsZVN1YkRlcml2YXRpb25WZXJpZmllZCA9IGNoaWxkTm9kZXMuZXZlcnkoKGNoaWxkTm9kZSkgPT4ge1xuICAgIGNvbnN0IGNoaWxkVmVyaWZpZWQgPSB2ZXJpZnlDaGlsZChjaGlsZE5vZGUsIGxvY2FsTWV0YUNvbnRleHQpO1xuXG4gICAgaWYgKGNoaWxkVmVyaWZpZWQpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIHJ1bGVTdWJEZXJpdmF0aW9uVmVyaWZpZWQ7XG59XG5cbmZ1bmN0aW9uIHZlcmlmeVJ1bGVTdWJwcm9vZihydWxlU3VicHJvb2ZOb2RlLCBsb2NhbE1ldGFDb250ZXh0KSB7XG4gIGxldCBydWxlU3VicHJvb2ZWZXJpZmllZCA9IGZhbHNlO1xuXG4gIGxvY2FsTWV0YUNvbnRleHQgPSBMb2NhbE1ldGFDb250ZXh0LmZyb21Mb2NhbE1ldGFDb250ZXh0KGxvY2FsTWV0YUNvbnRleHQpOyAvLy9cblxuICBjb25zdCBwcmVtaXNlcyA9IFtdLFxuICAgICAgICBwcmVtaXNlTm9kZXMgPSBwcmVtaXNlTm9kZXNRdWVyeShydWxlU3VicHJvb2ZOb2RlKSxcbiAgICAgICAgcHJlbWlzZXNWZXJpZmllZCA9IHZlcmlmeVByZW1pc2VzKHByZW1pc2VOb2RlcywgcHJlbWlzZXMsIGxvY2FsTWV0YUNvbnRleHQpO1xuXG4gICAgICAgIGlmIChwcmVtaXNlVmVyaWZpZWQpIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuXG4gIGlmIChwcmVtaXNlc1ZlcmlmaWVkKSB7XG4gICAgY29uc3QgcnVsZVN1YkRlcml2YXRpb25Ob2RlID0gcnVsZVN1YkRlcml2YXRpb25Ob2RlUXVlcnkocnVsZVN1YnByb29mTm9kZSksXG4gICAgICAgICAgcnVsZVN1YkRlcml2YXRpb25WZXJpZmllZCA9IHZlcmlmeVJ1bGVTdWJEZXJpdmF0aW9uKHJ1bGVTdWJEZXJpdmF0aW9uTm9kZSwgbG9jYWxNZXRhQ29udGV4dCk7XG5cbiAgICBpZiAocnVsZVN1YkRlcml2YXRpb25WZXJpZmllZCkge1xuICAgICAgcnVsZVN1YnByb29mVmVyaWZpZWQgPSB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBydWxlU3VicHJvb2ZWZXJpZmllZDtcbn1cblxuZnVuY3Rpb24gdmVyaWZ5Q2hpbGQoY2hpbGROb2RlLCBsb2NhbE1ldGFDb250ZXh0KSB7XG4gIGxldCBjaGlsZFZlcmlmaWVkO1xuXG4gIGNvbnN0IGNoaWxkTm9kZVJ1bGVOYW1lID0gY2hpbGROb2RlLmdldFJ1bGVOYW1lKCk7XG5cbiAgc3dpdGNoIChjaGlsZE5vZGVSdWxlTmFtZSkge1xuICAgIGNhc2UgUlVMRV9TVUJQUk9PRl9SVUxFX05BTUU6IHtcbiAgICAgIGNvbnN0IHJ1bGVTdWJwcm9vZk5vZGUgPSBjaGlsZE5vZGUsICAvLy9cbiAgICAgICAgICAgIHJ1bGVTdWJwcm9vZlZlcmlmaWVkID0gdmVyaWZ5UnVsZVN1YnByb29mKHJ1bGVTdWJwcm9vZk5vZGUsIGxvY2FsTWV0YUNvbnRleHQpO1xuXG4gICAgICBpZiAocnVsZVN1YnByb29mVmVyaWZpZWQpIHtcbiAgICAgICAgY29uc3QgbWV0YXByb29mU3RlcCA9IE1ldGFwcm9vZlN0ZXAuZnJvbVJ1bGVTdWJwcm9vZk5vZGUocnVsZVN1YnByb29mTm9kZSk7XG5cbiAgICAgICAgbG9jYWxNZXRhQ29udGV4dC5hZGRNZXRhcHJvb2ZTdGVwKG1ldGFwcm9vZlN0ZXApO1xuXG4gICAgICAgIGNoaWxkVmVyaWZpZWQgPSB0cnVlO1xuICAgICAgfVxuXG4gICAgICBicmVhaztcbiAgICB9XG5cbiAgICBjYXNlIFFVQUxJRklFRF9NRVRBU1RBVEVNRU5UX1JVTEVfTkFNRToge1xuICAgICAgY29uc3QgZGVyaXZlZCA9IHRydWUsXG4gICAgICAgICAgICBhc3NpZ25tZW50cyA9IFtdLFxuICAgICAgICAgICAgcXVhbGlmaWVkTWV0YXN0YXRlbWVudE5vZGUgPSBjaGlsZE5vZGUsICAvLy9cbiAgICAgICAgICAgIHF1YWxpZmllZE1ldGFzdGF0ZW1lbnRWZXJpZmllZCA9IHZlcmlmeVF1YWxpZmllZE1ldGFzdGF0ZW1lbnQocXVhbGlmaWVkTWV0YXN0YXRlbWVudE5vZGUsIGFzc2lnbm1lbnRzLCBkZXJpdmVkLCBsb2NhbE1ldGFDb250ZXh0KTtcblxuICAgICAgaWYgKHF1YWxpZmllZE1ldGFzdGF0ZW1lbnRWZXJpZmllZCkge1xuICAgICAgICBjb25zdCBtZXRhc3RhdGVtZW50Tm9kZSA9IG1ldGFzdGF0ZW1lbnROb2RlUXVlcnkocXVhbGlmaWVkTWV0YXN0YXRlbWVudE5vZGUpLFxuICAgICAgICAgICAgICBtZXRhcHJvb2ZTdGVwID0gTWV0YXByb29mU3RlcC5mcm9tTWV0YXN0YXRlbWVudE5vZGUobWV0YXN0YXRlbWVudE5vZGUpO1xuXG4gICAgICAgIGxvY2FsTWV0YUNvbnRleHQuYWRkTWV0YXByb29mU3RlcChtZXRhcHJvb2ZTdGVwKTtcblxuICAgICAgICBjaGlsZFZlcmlmaWVkID0gcXVhbGlmaWVkTWV0YXN0YXRlbWVudFZlcmlmaWVkOyAvLy9cbiAgICAgIH1cblxuICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgY2FzZSBVTlFVQUxJRklFRF9NRVRBU1RBVEVNRU5UX1JVTEVfTkFNRToge1xuICAgICAgY29uc3QgZGVyaXZlZCA9IHRydWUsXG4gICAgICAgICAgICB1bnF1YWxpZmllZE1ldGFzdGF0ZW1lbnROb2RlID0gY2hpbGROb2RlLCAgLy8vXG4gICAgICAgICAgICB1bnF1YWxpZmllZE1ldGFzdGF0ZW1lbnRWZXJpZmllZCA9IHZlcmlmeVVucXVhbGlmaWVkTWV0YXN0YXRlbWVudCh1bnF1YWxpZmllZE1ldGFzdGF0ZW1lbnROb2RlLCBkZXJpdmVkLCBsb2NhbE1ldGFDb250ZXh0KTtcblxuICAgICAgaWYgKHVucXVhbGlmaWVkTWV0YXN0YXRlbWVudFZlcmlmaWVkKSB7XG4gICAgICAgIGNvbnN0IG1ldGFzdGF0ZW1lbnROb2RlID0gbWV0YXN0YXRlbWVudE5vZGVRdWVyeSh1bnF1YWxpZmllZE1ldGFzdGF0ZW1lbnROb2RlKSxcbiAgICAgICAgICAgICAgbWV0YXByb29mU3RlcCA9IE1ldGFwcm9vZlN0ZXAuZnJvbU1ldGFzdGF0ZW1lbnROb2RlKG1ldGFzdGF0ZW1lbnROb2RlKTtcblxuICAgICAgICBsb2NhbE1ldGFDb250ZXh0LmFkZE1ldGFwcm9vZlN0ZXAobWV0YXByb29mU3RlcCk7XG5cbiAgICAgICAgY2hpbGRWZXJpZmllZCA9IHRydWU7XG4gICAgICB9XG5cbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBjaGlsZFZlcmlmaWVkO1xufVxuIl0sIm5hbWVzIjpbInZlcmlmeVJ1bGVEZXJpdmF0aW9uIiwiY2hpbGROb2Rlc1F1ZXJ5Iiwibm9kZXNRdWVyeSIsInByZW1pc2VOb2Rlc1F1ZXJ5IiwibWV0YXN0YXRlbWVudE5vZGVRdWVyeSIsIm5vZGVRdWVyeSIsInJ1bGVTdWJEZXJpdmF0aW9uTm9kZVF1ZXJ5IiwicnVsZURlcml2YXRpb25Ob2RlIiwibG9jYWxNZXRhQ29udGV4dCIsInJ1bGVEZXJpdmF0aW9uVmVyaWZpZWQiLCJjaGlsZE5vZGVzIiwiZXZlcnkiLCJjaGlsZE5vZGUiLCJjaGlsZFZlcmlmaWVkIiwidmVyaWZ5Q2hpbGQiLCJ2ZXJpZnlSdWxlU3ViRGVyaXZhdGlvbiIsInJ1bGVTdWJEZXJpdmF0aW9uTm9kZSIsInJ1bGVTdWJEZXJpdmF0aW9uVmVyaWZpZWQiLCJ2ZXJpZnlSdWxlU3VicHJvb2YiLCJydWxlU3VicHJvb2ZOb2RlIiwicnVsZVN1YnByb29mVmVyaWZpZWQiLCJMb2NhbE1ldGFDb250ZXh0IiwiZnJvbUxvY2FsTWV0YUNvbnRleHQiLCJwcmVtaXNlcyIsInByZW1pc2VOb2RlcyIsInByZW1pc2VzVmVyaWZpZWQiLCJ2ZXJpZnlQcmVtaXNlcyIsInByZW1pc2VWZXJpZmllZCIsImNoaWxkTm9kZVJ1bGVOYW1lIiwiZ2V0UnVsZU5hbWUiLCJSVUxFX1NVQlBST09GX1JVTEVfTkFNRSIsIm1ldGFwcm9vZlN0ZXAiLCJNZXRhcHJvb2ZTdGVwIiwiZnJvbVJ1bGVTdWJwcm9vZk5vZGUiLCJhZGRNZXRhcHJvb2ZTdGVwIiwiUVVBTElGSUVEX01FVEFTVEFURU1FTlRfUlVMRV9OQU1FIiwiZGVyaXZlZCIsImFzc2lnbm1lbnRzIiwicXVhbGlmaWVkTWV0YXN0YXRlbWVudE5vZGUiLCJxdWFsaWZpZWRNZXRhc3RhdGVtZW50VmVyaWZpZWQiLCJ2ZXJpZnlRdWFsaWZpZWRNZXRhc3RhdGVtZW50IiwibWV0YXN0YXRlbWVudE5vZGUiLCJmcm9tTWV0YXN0YXRlbWVudE5vZGUiLCJVTlFVQUxJRklFRF9NRVRBU1RBVEVNRU5UX1JVTEVfTkFNRSIsInVucXVhbGlmaWVkTWV0YXN0YXRlbWVudE5vZGUiLCJ1bnF1YWxpZmllZE1ldGFzdGF0ZW1lbnRWZXJpZmllZCIsInZlcmlmeVVucXVhbGlmaWVkTWV0YXN0YXRlbWVudCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBZ0JBOzs7ZUFBd0JBOzs7Z0VBZEU7K0RBQ0M7Z0VBQ0U7Z0VBQ1k7a0VBQ0U7cUJBRUw7eUJBQzBFOzs7Ozs7QUFFaEgsSUFBTUMsa0JBQWtCQyxJQUFBQSxpQkFBVSxFQUFDLHdDQUM3QkMsb0JBQW9CRCxJQUFBQSxpQkFBVSxFQUFDLDBCQUMvQkUseUJBQXlCQyxJQUFBQSxnQkFBUyxFQUFDLG9FQUNuQ0MsNkJBQTZCRCxJQUFBQSxnQkFBUyxFQUFDO0FBRTlCLFNBQVNMLHFCQUFxQk8sa0JBQWtCLEVBQUVDLGdCQUFnQjtJQUMvRSxJQUFJQztJQUVKLElBQU1DLGFBQWFULGdCQUFnQk07SUFFbkNFLHlCQUF5QkMsV0FBV0MsS0FBSyxDQUFDLFNBQUNDO1FBQ3pDLElBQU1DLGdCQUFnQkMsWUFBWUYsV0FBV0o7UUFFN0MsSUFBSUssZUFBZTtZQUNqQixPQUFPO1FBQ1Q7SUFDRjtJQUVBLE9BQU9KO0FBQ1Q7QUFFQSxTQUFTTSx3QkFBd0JDLHFCQUFxQixFQUFFUixnQkFBZ0I7SUFDdEUsSUFBSVM7SUFFSixJQUFNUCxhQUFhVCxnQkFBZ0JlO0lBRW5DQyw0QkFBNEJQLFdBQVdDLEtBQUssQ0FBQyxTQUFDQztRQUM1QyxJQUFNQyxnQkFBZ0JDLFlBQVlGLFdBQVdKO1FBRTdDLElBQUlLLGVBQWU7WUFDakIsT0FBTztRQUNUO0lBQ0Y7SUFFQSxPQUFPSTtBQUNUO0FBRUEsU0FBU0MsbUJBQW1CQyxnQkFBZ0IsRUFBRVgsZ0JBQWdCO0lBQzVELElBQUlZLHVCQUF1QjtJQUUzQlosbUJBQW1CYSxrQkFBZ0IsQ0FBQ0Msb0JBQW9CLENBQUNkLG1CQUFtQixHQUFHO0lBRS9FLElBQU1lLFdBQVcsRUFBRSxFQUNiQyxlQUFlckIsa0JBQWtCZ0IsbUJBQ2pDTSxtQkFBbUJDLElBQUFBLGlCQUFjLEVBQUNGLGNBQWNELFVBQVVmO0lBRTFELElBQUltQixpQkFBaUI7UUFDbkIsT0FBTztJQUNUO0lBRU4sSUFBSUYsa0JBQWtCO1FBQ3BCLElBQU1ULHdCQUF3QlYsMkJBQTJCYSxtQkFDbkRGLDRCQUE0QkYsd0JBQXdCQyx1QkFBdUJSO1FBRWpGLElBQUlTLDJCQUEyQjtZQUM3QkcsdUJBQXVCO1FBQ3pCO0lBQ0Y7SUFFQSxPQUFPQTtBQUNUO0FBRUEsU0FBU04sWUFBWUYsU0FBUyxFQUFFSixnQkFBZ0I7SUFDOUMsSUFBSUs7SUFFSixJQUFNZSxvQkFBb0JoQixVQUFVaUIsV0FBVztJQUUvQyxPQUFRRDtRQUNOLEtBQUtFLGtDQUF1QjtZQUFFO2dCQUM1QixJQUFNWCxtQkFBbUJQLFdBQ25CUSx1QkFBdUJGLG1CQUFtQkMsa0JBQWtCWDtnQkFFbEUsSUFBSVksc0JBQXNCO29CQUN4QixJQUFNVyxnQkFBZ0JDLGtCQUFhLENBQUNDLG9CQUFvQixDQUFDZDtvQkFFekRYLGlCQUFpQjBCLGdCQUFnQixDQUFDSDtvQkFFbENsQixnQkFBZ0I7Z0JBQ2xCO2dCQUVBO1lBQ0Y7UUFFQSxLQUFLc0IsNENBQWlDO1lBQUU7Z0JBQ3RDLElBQU1DLFVBQVUsTUFDVkMsY0FBYyxFQUFFLEVBQ2hCQyw2QkFBNkIxQixXQUM3QjJCLGlDQUFpQ0MsSUFBQUEsa0JBQTRCLEVBQUNGLDRCQUE0QkQsYUFBYUQsU0FBUzVCO2dCQUV0SCxJQUFJK0IsZ0NBQWdDO29CQUNsQyxJQUFNRSxvQkFBb0JyQyx1QkFBdUJrQyw2QkFDM0NQLGlCQUFnQkMsa0JBQWEsQ0FBQ1UscUJBQXFCLENBQUNEO29CQUUxRGpDLGlCQUFpQjBCLGdCQUFnQixDQUFDSDtvQkFFbENsQixnQkFBZ0IwQixnQ0FBZ0MsR0FBRztnQkFDckQ7Z0JBRUE7WUFDRjtRQUVBLEtBQUtJLDhDQUFtQztZQUFFO2dCQUN4QyxJQUFNUCxXQUFVLE1BQ1ZRLCtCQUErQmhDLFdBQy9CaUMsbUNBQW1DQyxJQUFBQSxvQkFBOEIsRUFBQ0YsOEJBQThCUixVQUFTNUI7Z0JBRS9HLElBQUlxQyxrQ0FBa0M7b0JBQ3BDLElBQU1KLHFCQUFvQnJDLHVCQUF1QndDLCtCQUMzQ2IsaUJBQWdCQyxrQkFBYSxDQUFDVSxxQkFBcUIsQ0FBQ0Q7b0JBRTFEakMsaUJBQWlCMEIsZ0JBQWdCLENBQUNIO29CQUVsQ2xCLGdCQUFnQjtnQkFDbEI7Z0JBRUE7WUFDRjtJQUNGO0lBRUEsT0FBT0E7QUFDVCJ9