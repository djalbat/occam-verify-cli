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
var _local = /*#__PURE__*/ _interop_require_default(require("../context/local"));
var _suppositions = /*#__PURE__*/ _interop_require_default(require("../verify/suppositions"));
var _qualified = /*#__PURE__*/ _interop_require_default(require("../verify/statement/qualified"));
var _unqualified = /*#__PURE__*/ _interop_require_default(require("../verify/statement/unqualified"));
var _assignments = require("../utilities/assignments");
var _query = require("../utilities/query");
var _ruleNames = require("../ruleNames");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var childNodesQuery = (0, _query.nodesQuery)("/derivation|subDerivation/*"), statementNodeQuery = (0, _query.nodeQuery)("/qualifiedStatement|unqualifiedStatement/statement!"), suppositionNodesQuery = (0, _query.nodesQuery)("/subproof/supposition"), subDerivationNodeQuery = (0, _query.nodeQuery)("/subproof/subDerivation");
function verifyDerivation(derivationNode, localContext) {
    var derivationVerified;
    var childNodes = childNodesQuery(derivationNode);
    derivationVerified = childNodes.every(function(childNode) {
        var childVerified = verifyChild(childNode, localContext);
        if (childVerified) {
            return true;
        }
    });
    return derivationVerified;
}
function verifySubDerivation(subDerivationNode, localContext) {
    var subDerivationVerified;
    var childNodes = childNodesQuery(subDerivationNode);
    subDerivationVerified = childNodes.every(function(childNode) {
        var childVerified = verifyChild(childNode, localContext);
        if (childVerified) {
            return true;
        }
    });
    return subDerivationVerified;
}
function verifySubproof(subproofNode, localContext) {
    var subproofVerified = false;
    localContext = _local.default.fromLocalContext(localContext); ///
    var suppositions = [], suppositionNodes = suppositionNodesQuery(subproofNode), suppositionsVerified = (0, _suppositions.default)(suppositionNodes, suppositions, localContext);
    if (suppositionsVerified) {
        var subDerivationNode = subDerivationNodeQuery(subproofNode), subDerivationVerified = verifySubDerivation(subDerivationNode, localContext);
        if (subDerivationVerified) {
            subproofVerified = true;
        }
    }
    return subproofVerified;
}
function verifyChild(childNode, localContext) {
    var childVerified = false;
    var childNodeRuleName = childNode.getRuleName();
    switch(childNodeRuleName){
        case _ruleNames.SUBPROOF_RULE_NAME:
            {
                var subproofVerified;
                var subproofNode = childNode; ///
                subproofVerified = verifySubproof(subproofNode, localContext);
                if (subproofVerified) {
                    var proofStep = _proof.default.fromSubproofNode(subproofNode);
                    localContext.addProofStep(proofStep);
                    childVerified = true;
                }
                break;
            }
        case _ruleNames.QUALIFIED_STATEMENT_RULE_NAME:
            {
                var qualifiedStatementVerified;
                var derived = true, assignments = [], qualifiedStatementNode = childNode; ///
                qualifiedStatementVerified = (0, _qualified.default)(qualifiedStatementNode, assignments, derived, localContext);
                if (qualifiedStatementVerified) {
                    var assignmentAssigned = (0, _assignments.assignAssignment)(assignments, localContext);
                    qualifiedStatementVerified = assignmentAssigned; ///
                }
                if (qualifiedStatementVerified) {
                    var statementNode = statementNodeQuery(qualifiedStatementNode), proofStep1 = _proof.default.fromStatementNode(statementNode);
                    localContext.addProofStep(proofStep1);
                    childVerified = true; ///
                }
                break;
            }
        case _ruleNames.UNQUALIFIED_STATEMENT_RULE_NAME:
            {
                var unqualifiedStatementVerified;
                var derived1 = true, assignments1 = [], unqualifiedStatementNode = childNode; ///
                unqualifiedStatementVerified = (0, _unqualified.default)(unqualifiedStatementNode, assignments1, derived1, localContext);
                if (unqualifiedStatementVerified) {
                    var assignmentAssigned1 = (0, _assignments.assignAssignment)(assignments1, localContext);
                    unqualifiedStatementVerified = assignmentAssigned1; ///
                }
                if (unqualifiedStatementVerified) {
                    var statementNode1 = statementNodeQuery(unqualifiedStatementNode), proofStep2 = _proof.default.fromStatementNode(statementNode1);
                    localContext.addProofStep(proofStep2);
                    childVerified = true;
                }
                break;
            }
    }
    return childVerified;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92ZXJpZnkvZGVyaXZhdGlvbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFByb29mU3RlcCBmcm9tIFwiLi4vc3RlcC9wcm9vZlwiO1xuaW1wb3J0IExvY2FsQ29udGV4dCBmcm9tIFwiLi4vY29udGV4dC9sb2NhbFwiO1xuaW1wb3J0IHZlcmlmeVN1cHBvc2l0aW9ucyBmcm9tIFwiLi4vdmVyaWZ5L3N1cHBvc2l0aW9uc1wiO1xuaW1wb3J0IHZlcmlmeVF1YWxpZmllZFN0YXRlbWVudCBmcm9tIFwiLi4vdmVyaWZ5L3N0YXRlbWVudC9xdWFsaWZpZWRcIjtcbmltcG9ydCB2ZXJpZnlVbnF1YWxpZmllZFN0YXRlbWVudCBmcm9tIFwiLi4vdmVyaWZ5L3N0YXRlbWVudC91bnF1YWxpZmllZFwiO1xuXG5pbXBvcnQgeyBhc3NpZ25Bc3NpZ25tZW50IH0gZnJvbSBcIi4uL3V0aWxpdGllcy9hc3NpZ25tZW50c1wiO1xuaW1wb3J0IHsgbm9kZVF1ZXJ5LCBub2Rlc1F1ZXJ5IH0gZnJvbSBcIi4uL3V0aWxpdGllcy9xdWVyeVwiO1xuaW1wb3J0IHsgU1VCUFJPT0ZfUlVMRV9OQU1FLCBRVUFMSUZJRURfU1RBVEVNRU5UX1JVTEVfTkFNRSwgVU5RVUFMSUZJRURfU1RBVEVNRU5UX1JVTEVfTkFNRSB9IGZyb20gXCIuLi9ydWxlTmFtZXNcIjtcbmltcG9ydCBsb2NhbCBmcm9tIFwiLi4vY29udGV4dC9sb2NhbFwiO1xuXG5jb25zdCBjaGlsZE5vZGVzUXVlcnkgPSBub2Rlc1F1ZXJ5KFwiL2Rlcml2YXRpb258c3ViRGVyaXZhdGlvbi8qXCIpLFxuICAgICAgc3RhdGVtZW50Tm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3F1YWxpZmllZFN0YXRlbWVudHx1bnF1YWxpZmllZFN0YXRlbWVudC9zdGF0ZW1lbnQhXCIpLFxuICAgICAgc3VwcG9zaXRpb25Ob2Rlc1F1ZXJ5ID0gbm9kZXNRdWVyeShcIi9zdWJwcm9vZi9zdXBwb3NpdGlvblwiKSxcbiAgICAgIHN1YkRlcml2YXRpb25Ob2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvc3VicHJvb2Yvc3ViRGVyaXZhdGlvblwiKTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdmVyaWZ5RGVyaXZhdGlvbihkZXJpdmF0aW9uTm9kZSwgbG9jYWxDb250ZXh0KSB7XG4gIGxldCBkZXJpdmF0aW9uVmVyaWZpZWQ7XG5cbiAgY29uc3QgY2hpbGROb2RlcyA9IGNoaWxkTm9kZXNRdWVyeShkZXJpdmF0aW9uTm9kZSk7XG5cbiAgZGVyaXZhdGlvblZlcmlmaWVkID0gY2hpbGROb2Rlcy5ldmVyeSgoY2hpbGROb2RlKSA9PiB7XG4gICAgY29uc3QgY2hpbGRWZXJpZmllZCA9IHZlcmlmeUNoaWxkKGNoaWxkTm9kZSwgbG9jYWxDb250ZXh0KTtcblxuICAgIGlmIChjaGlsZFZlcmlmaWVkKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiBkZXJpdmF0aW9uVmVyaWZpZWQ7XG59XG5cbmZ1bmN0aW9uIHZlcmlmeVN1YkRlcml2YXRpb24oc3ViRGVyaXZhdGlvbk5vZGUsIGxvY2FsQ29udGV4dCkge1xuICBsZXQgc3ViRGVyaXZhdGlvblZlcmlmaWVkO1xuXG4gIGNvbnN0IGNoaWxkTm9kZXMgPSBjaGlsZE5vZGVzUXVlcnkoc3ViRGVyaXZhdGlvbk5vZGUpO1xuXG4gIHN1YkRlcml2YXRpb25WZXJpZmllZCA9IGNoaWxkTm9kZXMuZXZlcnkoKGNoaWxkTm9kZSkgPT4ge1xuICAgIGNvbnN0IGNoaWxkVmVyaWZpZWQgPSB2ZXJpZnlDaGlsZChjaGlsZE5vZGUsIGxvY2FsQ29udGV4dCk7XG5cbiAgICBpZiAoY2hpbGRWZXJpZmllZCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gc3ViRGVyaXZhdGlvblZlcmlmaWVkO1xufVxuXG5mdW5jdGlvbiB2ZXJpZnlTdWJwcm9vZihzdWJwcm9vZk5vZGUsIGxvY2FsQ29udGV4dCkge1xuICBsZXQgc3VicHJvb2ZWZXJpZmllZCA9IGZhbHNlO1xuXG4gIGxvY2FsQ29udGV4dCA9IExvY2FsQ29udGV4dC5mcm9tTG9jYWxDb250ZXh0KGxvY2FsQ29udGV4dCk7IC8vL1xuXG4gIGNvbnN0IHN1cHBvc2l0aW9ucyA9IFtdLFxuICAgICAgICBzdXBwb3NpdGlvbk5vZGVzID0gc3VwcG9zaXRpb25Ob2Rlc1F1ZXJ5KHN1YnByb29mTm9kZSksXG4gICAgICAgIHN1cHBvc2l0aW9uc1ZlcmlmaWVkID0gdmVyaWZ5U3VwcG9zaXRpb25zKHN1cHBvc2l0aW9uTm9kZXMsIHN1cHBvc2l0aW9ucywgbG9jYWxDb250ZXh0KTtcblxuICBpZiAoc3VwcG9zaXRpb25zVmVyaWZpZWQpIHtcbiAgICBjb25zdCBzdWJEZXJpdmF0aW9uTm9kZSA9IHN1YkRlcml2YXRpb25Ob2RlUXVlcnkoc3VicHJvb2ZOb2RlKSxcbiAgICAgICAgICBzdWJEZXJpdmF0aW9uVmVyaWZpZWQgPSB2ZXJpZnlTdWJEZXJpdmF0aW9uKHN1YkRlcml2YXRpb25Ob2RlLCBsb2NhbENvbnRleHQpO1xuXG4gICAgaWYgKHN1YkRlcml2YXRpb25WZXJpZmllZCkge1xuICAgICAgc3VicHJvb2ZWZXJpZmllZCA9IHRydWU7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHN1YnByb29mVmVyaWZpZWQ7XG59XG5cbmZ1bmN0aW9uIHZlcmlmeUNoaWxkKGNoaWxkTm9kZSwgbG9jYWxDb250ZXh0KSB7XG4gIGxldCBjaGlsZFZlcmlmaWVkID0gZmFsc2U7XG5cbiAgY29uc3QgY2hpbGROb2RlUnVsZU5hbWUgPSBjaGlsZE5vZGUuZ2V0UnVsZU5hbWUoKTtcblxuICBzd2l0Y2ggKGNoaWxkTm9kZVJ1bGVOYW1lKSB7XG4gICAgY2FzZSBTVUJQUk9PRl9SVUxFX05BTUU6IHtcbiAgICAgIGxldCBzdWJwcm9vZlZlcmlmaWVkO1xuXG4gICAgICBjb25zdCBzdWJwcm9vZk5vZGUgPSBjaGlsZE5vZGU7ICAvLy9cblxuICAgICAgc3VicHJvb2ZWZXJpZmllZCA9IHZlcmlmeVN1YnByb29mKHN1YnByb29mTm9kZSwgbG9jYWxDb250ZXh0KTtcblxuICAgICAgaWYgKHN1YnByb29mVmVyaWZpZWQpIHtcbiAgICAgICAgY29uc3QgcHJvb2ZTdGVwID0gUHJvb2ZTdGVwLmZyb21TdWJwcm9vZk5vZGUoc3VicHJvb2ZOb2RlKTtcblxuICAgICAgICBsb2NhbENvbnRleHQuYWRkUHJvb2ZTdGVwKHByb29mU3RlcCk7XG5cbiAgICAgICAgY2hpbGRWZXJpZmllZCA9IHRydWU7XG4gICAgICB9XG5cbiAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIGNhc2UgUVVBTElGSUVEX1NUQVRFTUVOVF9SVUxFX05BTUU6IHtcbiAgICAgIGxldCBxdWFsaWZpZWRTdGF0ZW1lbnRWZXJpZmllZDtcblxuICAgICAgY29uc3QgZGVyaXZlZCA9IHRydWUsXG4gICAgICAgICAgICBhc3NpZ25tZW50cyA9IFtdLFxuICAgICAgICAgICAgcXVhbGlmaWVkU3RhdGVtZW50Tm9kZSA9IGNoaWxkTm9kZTsgIC8vL1xuXG4gICAgICBxdWFsaWZpZWRTdGF0ZW1lbnRWZXJpZmllZCA9IHZlcmlmeVF1YWxpZmllZFN0YXRlbWVudChxdWFsaWZpZWRTdGF0ZW1lbnROb2RlLCBhc3NpZ25tZW50cywgZGVyaXZlZCwgbG9jYWxDb250ZXh0KTtcblxuICAgICAgaWYgKHF1YWxpZmllZFN0YXRlbWVudFZlcmlmaWVkKSB7XG4gICAgICAgIGNvbnN0IGFzc2lnbm1lbnRBc3NpZ25lZCA9IGFzc2lnbkFzc2lnbm1lbnQoYXNzaWdubWVudHMsIGxvY2FsQ29udGV4dCk7XG5cbiAgICAgICAgcXVhbGlmaWVkU3RhdGVtZW50VmVyaWZpZWQgPSBhc3NpZ25tZW50QXNzaWduZWQ7IC8vL1xuICAgICAgfVxuXG4gICAgICBpZiAocXVhbGlmaWVkU3RhdGVtZW50VmVyaWZpZWQpIHtcbiAgICAgICAgY29uc3Qgc3RhdGVtZW50Tm9kZSA9IHN0YXRlbWVudE5vZGVRdWVyeShxdWFsaWZpZWRTdGF0ZW1lbnROb2RlKSxcbiAgICAgICAgICAgICAgcHJvb2ZTdGVwID0gUHJvb2ZTdGVwLmZyb21TdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUpO1xuXG4gICAgICAgIGxvY2FsQ29udGV4dC5hZGRQcm9vZlN0ZXAocHJvb2ZTdGVwKTtcblxuICAgICAgICBjaGlsZFZlcmlmaWVkID0gdHJ1ZTsgLy8vXG4gICAgICB9XG5cbiAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIGNhc2UgVU5RVUFMSUZJRURfU1RBVEVNRU5UX1JVTEVfTkFNRToge1xuICAgICAgbGV0IHVucXVhbGlmaWVkU3RhdGVtZW50VmVyaWZpZWQ7XG5cbiAgICAgIGNvbnN0IGRlcml2ZWQgPSB0cnVlLFxuICAgICAgICAgICAgYXNzaWdubWVudHMgPSBbXSxcbiAgICAgICAgICAgIHVucXVhbGlmaWVkU3RhdGVtZW50Tm9kZSA9IGNoaWxkTm9kZTsgIC8vL1xuXG4gICAgICB1bnF1YWxpZmllZFN0YXRlbWVudFZlcmlmaWVkID0gdmVyaWZ5VW5xdWFsaWZpZWRTdGF0ZW1lbnQodW5xdWFsaWZpZWRTdGF0ZW1lbnROb2RlLCBhc3NpZ25tZW50cywgZGVyaXZlZCwgbG9jYWxDb250ZXh0KTtcblxuICAgICAgaWYgKHVucXVhbGlmaWVkU3RhdGVtZW50VmVyaWZpZWQpIHtcbiAgICAgICAgY29uc3QgYXNzaWdubWVudEFzc2lnbmVkID0gYXNzaWduQXNzaWdubWVudChhc3NpZ25tZW50cywgbG9jYWxDb250ZXh0KTtcblxuICAgICAgICB1bnF1YWxpZmllZFN0YXRlbWVudFZlcmlmaWVkID0gYXNzaWdubWVudEFzc2lnbmVkOyAgLy8vXG4gICAgICB9XG5cbiAgICAgIGlmICh1bnF1YWxpZmllZFN0YXRlbWVudFZlcmlmaWVkKSB7XG4gICAgICAgIGNvbnN0IHN0YXRlbWVudE5vZGUgPSBzdGF0ZW1lbnROb2RlUXVlcnkodW5xdWFsaWZpZWRTdGF0ZW1lbnROb2RlKSxcbiAgICAgICAgICAgICAgcHJvb2ZTdGVwID0gUHJvb2ZTdGVwLmZyb21TdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUpO1xuXG4gICAgICAgIGxvY2FsQ29udGV4dC5hZGRQcm9vZlN0ZXAocHJvb2ZTdGVwKTtcblxuICAgICAgICBjaGlsZFZlcmlmaWVkID0gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGNoaWxkVmVyaWZpZWQ7XG59XG4iXSwibmFtZXMiOlsidmVyaWZ5RGVyaXZhdGlvbiIsImNoaWxkTm9kZXNRdWVyeSIsIm5vZGVzUXVlcnkiLCJzdGF0ZW1lbnROb2RlUXVlcnkiLCJub2RlUXVlcnkiLCJzdXBwb3NpdGlvbk5vZGVzUXVlcnkiLCJzdWJEZXJpdmF0aW9uTm9kZVF1ZXJ5IiwiZGVyaXZhdGlvbk5vZGUiLCJsb2NhbENvbnRleHQiLCJkZXJpdmF0aW9uVmVyaWZpZWQiLCJjaGlsZE5vZGVzIiwiZXZlcnkiLCJjaGlsZE5vZGUiLCJjaGlsZFZlcmlmaWVkIiwidmVyaWZ5Q2hpbGQiLCJ2ZXJpZnlTdWJEZXJpdmF0aW9uIiwic3ViRGVyaXZhdGlvbk5vZGUiLCJzdWJEZXJpdmF0aW9uVmVyaWZpZWQiLCJ2ZXJpZnlTdWJwcm9vZiIsInN1YnByb29mTm9kZSIsInN1YnByb29mVmVyaWZpZWQiLCJMb2NhbENvbnRleHQiLCJmcm9tTG9jYWxDb250ZXh0Iiwic3VwcG9zaXRpb25zIiwic3VwcG9zaXRpb25Ob2RlcyIsInN1cHBvc2l0aW9uc1ZlcmlmaWVkIiwidmVyaWZ5U3VwcG9zaXRpb25zIiwiY2hpbGROb2RlUnVsZU5hbWUiLCJnZXRSdWxlTmFtZSIsIlNVQlBST09GX1JVTEVfTkFNRSIsInByb29mU3RlcCIsIlByb29mU3RlcCIsImZyb21TdWJwcm9vZk5vZGUiLCJhZGRQcm9vZlN0ZXAiLCJRVUFMSUZJRURfU1RBVEVNRU5UX1JVTEVfTkFNRSIsInF1YWxpZmllZFN0YXRlbWVudFZlcmlmaWVkIiwiZGVyaXZlZCIsImFzc2lnbm1lbnRzIiwicXVhbGlmaWVkU3RhdGVtZW50Tm9kZSIsInZlcmlmeVF1YWxpZmllZFN0YXRlbWVudCIsImFzc2lnbm1lbnRBc3NpZ25lZCIsImFzc2lnbkFzc2lnbm1lbnQiLCJzdGF0ZW1lbnROb2RlIiwiZnJvbVN0YXRlbWVudE5vZGUiLCJVTlFVQUxJRklFRF9TVEFURU1FTlRfUlVMRV9OQU1FIiwidW5xdWFsaWZpZWRTdGF0ZW1lbnRWZXJpZmllZCIsInVucXVhbGlmaWVkU3RhdGVtZW50Tm9kZSIsInZlcmlmeVVucXVhbGlmaWVkU3RhdGVtZW50Il0sInJhbmdlTWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsiLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBa0JBOzs7ZUFBd0JBOzs7NERBaEJGOzREQUNHO21FQUNNO2dFQUNNO2tFQUNFOzJCQUVOO3FCQUNLO3lCQUM2RDs7Ozs7O0FBR25HLElBQU1DLGtCQUFrQkMsSUFBQUEsaUJBQVUsRUFBQyxnQ0FDN0JDLHFCQUFxQkMsSUFBQUEsZ0JBQVMsRUFBQyx3REFDL0JDLHdCQUF3QkgsSUFBQUEsaUJBQVUsRUFBQywwQkFDbkNJLHlCQUF5QkYsSUFBQUEsZ0JBQVMsRUFBQztBQUUxQixTQUFTSixpQkFBaUJPLGNBQWMsRUFBRUMsWUFBWTtJQUNuRSxJQUFJQztJQUVKLElBQU1DLGFBQWFULGdCQUFnQk07SUFFbkNFLHFCQUFxQkMsV0FBV0MsS0FBSyxDQUFDLFNBQUNDO1FBQ3JDLElBQU1DLGdCQUFnQkMsWUFBWUYsV0FBV0o7UUFFN0MsSUFBSUssZUFBZTtZQUNqQixPQUFPO1FBQ1Q7SUFDRjtJQUVBLE9BQU9KO0FBQ1Q7QUFFQSxTQUFTTSxvQkFBb0JDLGlCQUFpQixFQUFFUixZQUFZO0lBQzFELElBQUlTO0lBRUosSUFBTVAsYUFBYVQsZ0JBQWdCZTtJQUVuQ0Msd0JBQXdCUCxXQUFXQyxLQUFLLENBQUMsU0FBQ0M7UUFDeEMsSUFB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