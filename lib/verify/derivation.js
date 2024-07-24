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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92ZXJpZnkvZGVyaXZhdGlvbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFByb29mU3RlcCBmcm9tIFwiLi4vc3RlcC9wcm9vZlwiO1xuaW1wb3J0IExvY2FsQ29udGV4dCBmcm9tIFwiLi4vY29udGV4dC9sb2NhbFwiO1xuaW1wb3J0IHZlcmlmeVN1cHBvc2l0aW9ucyBmcm9tIFwiLi4vdmVyaWZ5L3N1cHBvc2l0aW9uc1wiO1xuaW1wb3J0IHZlcmlmeVF1YWxpZmllZFN0YXRlbWVudCBmcm9tIFwiLi4vdmVyaWZ5L3N0YXRlbWVudC9xdWFsaWZpZWRcIjtcbmltcG9ydCB2ZXJpZnlVbnF1YWxpZmllZFN0YXRlbWVudCBmcm9tIFwiLi4vdmVyaWZ5L3N0YXRlbWVudC91bnF1YWxpZmllZFwiO1xuXG5pbXBvcnQgeyBhc3NpZ25Bc3NpZ25tZW50IH0gZnJvbSBcIi4uL3V0aWxpdGllcy9hc3NpZ25tZW50c1wiO1xuaW1wb3J0IHsgbm9kZVF1ZXJ5LCBub2Rlc1F1ZXJ5IH0gZnJvbSBcIi4uL3V0aWxpdGllcy9xdWVyeVwiO1xuaW1wb3J0IHsgU1VCUFJPT0ZfUlVMRV9OQU1FLCBRVUFMSUZJRURfU1RBVEVNRU5UX1JVTEVfTkFNRSwgVU5RVUFMSUZJRURfU1RBVEVNRU5UX1JVTEVfTkFNRSB9IGZyb20gXCIuLi9ydWxlTmFtZXNcIjtcblxuY29uc3QgY2hpbGROb2Rlc1F1ZXJ5ID0gbm9kZXNRdWVyeShcIi9kZXJpdmF0aW9ufHN1YkRlcml2YXRpb24vKlwiKSxcbiAgICAgIHN0YXRlbWVudE5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9xdWFsaWZpZWRTdGF0ZW1lbnR8dW5xdWFsaWZpZWRTdGF0ZW1lbnQvc3RhdGVtZW50IVwiKSxcbiAgICAgIHN1cHBvc2l0aW9uTm9kZXNRdWVyeSA9IG5vZGVzUXVlcnkoXCIvc3VicHJvb2Yvc3VwcG9zaXRpb25cIiksXG4gICAgICBzdWJEZXJpdmF0aW9uTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3N1YnByb29mL3N1YkRlcml2YXRpb25cIik7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHZlcmlmeURlcml2YXRpb24oZGVyaXZhdGlvbk5vZGUsIGxvY2FsQ29udGV4dCkge1xuICBsZXQgZGVyaXZhdGlvblZlcmlmaWVkO1xuXG4gIGNvbnN0IGNoaWxkTm9kZXMgPSBjaGlsZE5vZGVzUXVlcnkoZGVyaXZhdGlvbk5vZGUpO1xuXG4gIGRlcml2YXRpb25WZXJpZmllZCA9IGNoaWxkTm9kZXMuZXZlcnkoKGNoaWxkTm9kZSkgPT4ge1xuICAgIGNvbnN0IGNoaWxkVmVyaWZpZWQgPSB2ZXJpZnlDaGlsZChjaGlsZE5vZGUsIGxvY2FsQ29udGV4dCk7XG5cbiAgICBpZiAoY2hpbGRWZXJpZmllZCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gZGVyaXZhdGlvblZlcmlmaWVkO1xufVxuXG5mdW5jdGlvbiB2ZXJpZnlTdWJEZXJpdmF0aW9uKHN1YkRlcml2YXRpb25Ob2RlLCBsb2NhbENvbnRleHQpIHtcbiAgbGV0IHN1YkRlcml2YXRpb25WZXJpZmllZDtcblxuICBjb25zdCBjaGlsZE5vZGVzID0gY2hpbGROb2Rlc1F1ZXJ5KHN1YkRlcml2YXRpb25Ob2RlKTtcblxuICBzdWJEZXJpdmF0aW9uVmVyaWZpZWQgPSBjaGlsZE5vZGVzLmV2ZXJ5KChjaGlsZE5vZGUpID0+IHtcbiAgICBjb25zdCBjaGlsZFZlcmlmaWVkID0gdmVyaWZ5Q2hpbGQoY2hpbGROb2RlLCBsb2NhbENvbnRleHQpO1xuXG4gICAgaWYgKGNoaWxkVmVyaWZpZWQpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIHN1YkRlcml2YXRpb25WZXJpZmllZDtcbn1cblxuZnVuY3Rpb24gdmVyaWZ5U3VicHJvb2Yoc3VicHJvb2ZOb2RlLCBsb2NhbENvbnRleHQpIHtcbiAgbGV0IHN1YnByb29mVmVyaWZpZWQgPSBmYWxzZTtcblxuICBsb2NhbENvbnRleHQgPSBMb2NhbENvbnRleHQuZnJvbUxvY2FsQ29udGV4dChsb2NhbENvbnRleHQpOyAvLy9cblxuICBjb25zdCBzdXBwb3NpdGlvbnMgPSBbXSxcbiAgICAgICAgc3VwcG9zaXRpb25Ob2RlcyA9IHN1cHBvc2l0aW9uTm9kZXNRdWVyeShzdWJwcm9vZk5vZGUpLFxuICAgICAgICBzdXBwb3NpdGlvbnNWZXJpZmllZCA9IHZlcmlmeVN1cHBvc2l0aW9ucyhzdXBwb3NpdGlvbk5vZGVzLCBzdXBwb3NpdGlvbnMsIGxvY2FsQ29udGV4dCk7XG5cbiAgaWYgKHN1cHBvc2l0aW9uc1ZlcmlmaWVkKSB7XG4gICAgY29uc3Qgc3ViRGVyaXZhdGlvbk5vZGUgPSBzdWJEZXJpdmF0aW9uTm9kZVF1ZXJ5KHN1YnByb29mTm9kZSksXG4gICAgICAgICAgc3ViRGVyaXZhdGlvblZlcmlmaWVkID0gdmVyaWZ5U3ViRGVyaXZhdGlvbihzdWJEZXJpdmF0aW9uTm9kZSwgbG9jYWxDb250ZXh0KTtcblxuICAgIGlmIChzdWJEZXJpdmF0aW9uVmVyaWZpZWQpIHtcbiAgICAgIHN1YnByb29mVmVyaWZpZWQgPSB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBzdWJwcm9vZlZlcmlmaWVkO1xufVxuXG5mdW5jdGlvbiB2ZXJpZnlDaGlsZChjaGlsZE5vZGUsIGxvY2FsQ29udGV4dCkge1xuICBsZXQgY2hpbGRWZXJpZmllZCA9IGZhbHNlO1xuXG4gIGNvbnN0IGNoaWxkTm9kZVJ1bGVOYW1lID0gY2hpbGROb2RlLmdldFJ1bGVOYW1lKCk7XG5cbiAgc3dpdGNoIChjaGlsZE5vZGVSdWxlTmFtZSkge1xuICAgIGNhc2UgU1VCUFJPT0ZfUlVMRV9OQU1FOiB7XG4gICAgICBsZXQgc3VicHJvb2ZWZXJpZmllZDtcblxuICAgICAgY29uc3Qgc3VicHJvb2ZOb2RlID0gY2hpbGROb2RlOyAgLy8vXG5cbiAgICAgIHN1YnByb29mVmVyaWZpZWQgPSB2ZXJpZnlTdWJwcm9vZihzdWJwcm9vZk5vZGUsIGxvY2FsQ29udGV4dCk7XG5cbiAgICAgIGlmIChzdWJwcm9vZlZlcmlmaWVkKSB7XG4gICAgICAgIGNvbnN0IHByb29mU3RlcCA9IFByb29mU3RlcC5mcm9tU3VicHJvb2ZOb2RlKHN1YnByb29mTm9kZSk7XG5cbiAgICAgICAgbG9jYWxDb250ZXh0LmFkZFByb29mU3RlcChwcm9vZlN0ZXApO1xuXG4gICAgICAgIGNoaWxkVmVyaWZpZWQgPSB0cnVlO1xuICAgICAgfVxuXG4gICAgICBicmVhaztcbiAgICB9XG5cbiAgICBjYXNlIFFVQUxJRklFRF9TVEFURU1FTlRfUlVMRV9OQU1FOiB7XG4gICAgICBsZXQgcXVhbGlmaWVkU3RhdGVtZW50VmVyaWZpZWQ7XG5cbiAgICAgIGNvbnN0IGRlcml2ZWQgPSB0cnVlLFxuICAgICAgICAgICAgYXNzaWdubWVudHMgPSBbXSxcbiAgICAgICAgICAgIHF1YWxpZmllZFN0YXRlbWVudE5vZGUgPSBjaGlsZE5vZGU7ICAvLy9cblxuICAgICAgcXVhbGlmaWVkU3RhdGVtZW50VmVyaWZpZWQgPSB2ZXJpZnlRdWFsaWZpZWRTdGF0ZW1lbnQocXVhbGlmaWVkU3RhdGVtZW50Tm9kZSwgYXNzaWdubWVudHMsIGRlcml2ZWQsIGxvY2FsQ29udGV4dCk7XG5cbiAgICAgIGlmIChxdWFsaWZpZWRTdGF0ZW1lbnRWZXJpZmllZCkge1xuICAgICAgICBjb25zdCBhc3NpZ25tZW50QXNzaWduZWQgPSBhc3NpZ25Bc3NpZ25tZW50KGFzc2lnbm1lbnRzLCBsb2NhbENvbnRleHQpO1xuXG4gICAgICAgIHF1YWxpZmllZFN0YXRlbWVudFZlcmlmaWVkID0gYXNzaWdubWVudEFzc2lnbmVkOyAvLy9cbiAgICAgIH1cblxuICAgICAgaWYgKHF1YWxpZmllZFN0YXRlbWVudFZlcmlmaWVkKSB7XG4gICAgICAgIGNvbnN0IHN0YXRlbWVudE5vZGUgPSBzdGF0ZW1lbnROb2RlUXVlcnkocXVhbGlmaWVkU3RhdGVtZW50Tm9kZSksXG4gICAgICAgICAgICAgIHByb29mU3RlcCA9IFByb29mU3RlcC5mcm9tU3RhdGVtZW50Tm9kZShzdGF0ZW1lbnROb2RlKTtcblxuICAgICAgICBsb2NhbENvbnRleHQuYWRkUHJvb2ZTdGVwKHByb29mU3RlcCk7XG5cbiAgICAgICAgY2hpbGRWZXJpZmllZCA9IHRydWU7IC8vL1xuICAgICAgfVxuXG4gICAgICBicmVhaztcbiAgICB9XG5cbiAgICBjYXNlIFVOUVVBTElGSUVEX1NUQVRFTUVOVF9SVUxFX05BTUU6IHtcbiAgICAgIGxldCB1bnF1YWxpZmllZFN0YXRlbWVudFZlcmlmaWVkO1xuXG4gICAgICBjb25zdCBkZXJpdmVkID0gdHJ1ZSxcbiAgICAgICAgICAgIGFzc2lnbm1lbnRzID0gW10sXG4gICAgICAgICAgICB1bnF1YWxpZmllZFN0YXRlbWVudE5vZGUgPSBjaGlsZE5vZGU7ICAvLy9cblxuICAgICAgdW5xdWFsaWZpZWRTdGF0ZW1lbnRWZXJpZmllZCA9IHZlcmlmeVVucXVhbGlmaWVkU3RhdGVtZW50KHVucXVhbGlmaWVkU3RhdGVtZW50Tm9kZSwgYXNzaWdubWVudHMsIGRlcml2ZWQsIGxvY2FsQ29udGV4dCk7XG5cbiAgICAgIGlmICh1bnF1YWxpZmllZFN0YXRlbWVudFZlcmlmaWVkKSB7XG4gICAgICAgIGNvbnN0IGFzc2lnbm1lbnRBc3NpZ25lZCA9IGFzc2lnbkFzc2lnbm1lbnQoYXNzaWdubWVudHMsIGxvY2FsQ29udGV4dCk7XG5cbiAgICAgICAgdW5xdWFsaWZpZWRTdGF0ZW1lbnRWZXJpZmllZCA9IGFzc2lnbm1lbnRBc3NpZ25lZDsgIC8vL1xuICAgICAgfVxuXG4gICAgICBpZiAodW5xdWFsaWZpZWRTdGF0ZW1lbnRWZXJpZmllZCkge1xuICAgICAgICBjb25zdCBzdGF0ZW1lbnROb2RlID0gc3RhdGVtZW50Tm9kZVF1ZXJ5KHVucXVhbGlmaWVkU3RhdGVtZW50Tm9kZSksXG4gICAgICAgICAgICAgIHByb29mU3RlcCA9IFByb29mU3RlcC5mcm9tU3RhdGVtZW50Tm9kZShzdGF0ZW1lbnROb2RlKTtcblxuICAgICAgICBsb2NhbENvbnRleHQuYWRkUHJvb2ZTdGVwKHByb29mU3RlcCk7XG5cbiAgICAgICAgY2hpbGRWZXJpZmllZCA9IHRydWU7XG4gICAgICB9XG5cbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBjaGlsZFZlcmlmaWVkO1xufVxuIl0sIm5hbWVzIjpbInZlcmlmeURlcml2YXRpb24iLCJjaGlsZE5vZGVzUXVlcnkiLCJub2Rlc1F1ZXJ5Iiwic3RhdGVtZW50Tm9kZVF1ZXJ5Iiwibm9kZVF1ZXJ5Iiwic3VwcG9zaXRpb25Ob2Rlc1F1ZXJ5Iiwic3ViRGVyaXZhdGlvbk5vZGVRdWVyeSIsImRlcml2YXRpb25Ob2RlIiwibG9jYWxDb250ZXh0IiwiZGVyaXZhdGlvblZlcmlmaWVkIiwiY2hpbGROb2RlcyIsImV2ZXJ5IiwiY2hpbGROb2RlIiwiY2hpbGRWZXJpZmllZCIsInZlcmlmeUNoaWxkIiwidmVyaWZ5U3ViRGVyaXZhdGlvbiIsInN1YkRlcml2YXRpb25Ob2RlIiwic3ViRGVyaXZhdGlvblZlcmlmaWVkIiwidmVyaWZ5U3VicHJvb2YiLCJzdWJwcm9vZk5vZGUiLCJzdWJwcm9vZlZlcmlmaWVkIiwiTG9jYWxDb250ZXh0IiwiZnJvbUxvY2FsQ29udGV4dCIsInN1cHBvc2l0aW9ucyIsInN1cHBvc2l0aW9uTm9kZXMiLCJzdXBwb3NpdGlvbnNWZXJpZmllZCIsInZlcmlmeVN1cHBvc2l0aW9ucyIsImNoaWxkTm9kZVJ1bGVOYW1lIiwiZ2V0UnVsZU5hbWUiLCJTVUJQUk9PRl9SVUxFX05BTUUiLCJwcm9vZlN0ZXAiLCJQcm9vZlN0ZXAiLCJmcm9tU3VicHJvb2ZOb2RlIiwiYWRkUHJvb2ZTdGVwIiwiUVVBTElGSUVEX1NUQVRFTUVOVF9SVUxFX05BTUUiLCJxdWFsaWZpZWRTdGF0ZW1lbnRWZXJpZmllZCIsImRlcml2ZWQiLCJhc3NpZ25tZW50cyIsInF1YWxpZmllZFN0YXRlbWVudE5vZGUiLCJ2ZXJpZnlRdWFsaWZpZWRTdGF0ZW1lbnQiLCJhc3NpZ25tZW50QXNzaWduZWQiLCJhc3NpZ25Bc3NpZ25tZW50Iiwic3RhdGVtZW50Tm9kZSIsImZyb21TdGF0ZW1lbnROb2RlIiwiVU5RVUFMSUZJRURfU1RBVEVNRU5UX1JVTEVfTkFNRSIsInVucXVhbGlmaWVkU3RhdGVtZW50VmVyaWZpZWQiLCJ1bnF1YWxpZmllZFN0YXRlbWVudE5vZGUiLCJ2ZXJpZnlVbnF1YWxpZmllZFN0YXRlbWVudCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBaUJBOzs7ZUFBd0JBOzs7NERBZkY7NERBQ0c7bUVBQ007Z0VBQ007a0VBQ0U7MkJBRU47cUJBQ0s7eUJBQzZEOzs7Ozs7QUFFbkcsSUFBTUMsa0JBQWtCQyxJQUFBQSxpQkFBVSxFQUFDLGdDQUM3QkMscUJBQXFCQyxJQUFBQSxnQkFBUyxFQUFDLHdEQUMvQkMsd0JBQXdCSCxJQUFBQSxpQkFBVSxFQUFDLDBCQUNuQ0kseUJBQXlCRixJQUFBQSxnQkFBUyxFQUFDO0FBRTFCLFNBQVNKLGlCQUFpQk8sY0FBYyxFQUFFQyxZQUFZO0lBQ25FLElBQUlDO0lBRUosSUFBTUMsYUFBYVQsZ0JBQWdCTTtJQUVuQ0UscUJBQXFCQyxXQUFXQyxLQUFLLENBQUMsU0FBQ0M7UUFDckMsSUFBTUMsZ0JBQWdCQyxZQUFZRixXQUFXSjtRQUU3QyxJQUFJSyxlQUFlO1lBQ2pCLE9BQU87UUFDVDtJQUNGO0lBRUEsT0FBT0o7QUFDVDtBQUVBLFNBQVNNLG9CQUFvQkMsaUJBQWlCLEVBQUVSLFlBQVk7SUFDMUQsSUFBSVM7SUFFSixJQUFNUCxhQUFhVCxnQkFBZ0JlO0lBRW5DQyx3QkFBd0JQLFdBQVdDLEtBQUssQ0FBQyxTQUFDQztRQUN4QyxJQUFNQyxnQkFBZ0JDLFlBQVlGLFdBQVdKO1FBRTdDLElBQUlLLGVBQWU7WUFDakIsT0FBTztRQUNUO0lBQ0Y7SUFFQSxPQUFPSTtBQUNUO0FBRUEsU0FBU0MsZUFBZUMsWUFBWSxFQUFFWCxZQUFZO0lBQ2hELElBQUlZLG1CQUFtQjtJQUV2QlosZUFBZWEsY0FBWSxDQUFDQyxnQkFBZ0IsQ0FBQ2QsZUFBZSxHQUFHO0lBRS9ELElBQU1lLGVBQWUsRUFBRSxFQUNqQkMsbUJBQW1CbkIsc0JBQXNCYyxlQUN6Q00sdUJBQXVCQyxJQUFBQSxxQkFBa0IsRUFBQ0Ysa0JBQWtCRCxjQUFjZjtJQUVoRixJQUFJaUIsc0JBQXNCO1FBQ3hCLElBQU1ULG9CQUFvQlYsdUJBQXVCYSxlQUMzQ0Ysd0JBQXdCRixvQkFBb0JDLG1CQUFtQlI7UUFFckUsSUFBSVMsdUJBQXVCO1lBQ3pCRyxtQkFBbUI7UUFDckI7SUFDRjtJQUVBLE9BQU9BO0FBQ1Q7QUFFQSxTQUFTTixZQUFZRixTQUFTLEVBQUVKLFlBQVk7SUFDMUMsSUFBSUssZ0JBQWdCO0lBRXBCLElBQU1jLG9CQUFvQmYsVUFBVWdCLFdBQVc7SUFFL0MsT0FBUUQ7UUFDTixLQUFLRSw2QkFBa0I7WUFBRTtnQkFDdkIsSUFBSVQ7Z0JBRUosSUFBTUQsZUFBZVAsV0FBWSxHQUFHO2dCQUVwQ1EsbUJBQW1CRixlQUFlQyxjQUFjWDtnQkFFaEQsSUFBSVksa0JBQWtCO29CQUNwQixJQUFNVSxZQUFZQyxjQUFTLENBQUNDLGdCQUFnQixDQUFDYjtvQkFFN0NYLGFBQWF5QixZQUFZLENBQUNIO29CQUUxQmpCLGdCQUFnQjtnQkFDbEI7Z0JBRUE7WUFDRjtRQUVBLEtBQUtxQix3Q0FBNkI7WUFBRTtnQkFDbEMsSUFBSUM7Z0JBRUosSUFBTUMsVUFBVSxNQUNWQyxjQUFjLEVBQUUsRUFDaEJDLHlCQUF5QjFCLFdBQVksR0FBRztnQkFFOUN1Qiw2QkFBNkJJLElBQUFBLGtCQUF3QixFQUFDRCx3QkFBd0JELGFBQWFELFNBQVM1QjtnQkFFcEcsSUFBSTJCLDRCQUE0QjtvQkFDOUIsSUFBTUsscUJBQXFCQyxJQUFBQSw2QkFBZ0IsRUFBQ0osYUFBYTdCO29CQUV6RDJCLDZCQUE2Qkssb0JBQW9CLEdBQUc7Z0JBQ3REO2dCQUVBLElBQUlMLDRCQUE0QjtvQkFDOUIsSUFBTU8sZ0JBQWdCdkMsbUJBQW1CbUMseUJBQ25DUixhQUFZQyxjQUFTLENBQUNZLGlCQUFpQixDQUFDRDtvQkFFOUNsQyxhQUFheUIsWUFBWSxDQUFDSDtvQkFFMUJqQixnQkFBZ0IsTUFBTSxHQUFHO2dCQUMzQjtnQkFFQTtZQUNGO1FBRUEsS0FBSytCLDBDQUErQjtZQUFFO2dCQUNwQyxJQUFJQztnQkFFSixJQUFNVCxXQUFVLE1BQ1ZDLGVBQWMsRUFBRSxFQUNoQlMsMkJBQTJCbEMsV0FBWSxHQUFHO2dCQUVoRGlDLCtCQUErQkUsSUFBQUEsb0JBQTBCLEVBQUNELDBCQUEwQlQsY0FBYUQsVUFBUzVCO2dCQUUxRyxJQUFJcUMsOEJBQThCO29CQUNoQyxJQUFNTCxzQkFBcUJDLElBQUFBLDZCQUFnQixFQUFDSixjQUFhN0I7b0JBRXpEcUMsK0JBQStCTCxxQkFBcUIsR0FBRztnQkFDekQ7Z0JBRUEsSUFBSUssOEJBQThCO29CQUNoQyxJQUFNSCxpQkFBZ0J2QyxtQkFBbUIyQywyQkFDbkNoQixhQUFZQyxjQUFTLENBQUNZLGlCQUFpQixDQUFDRDtvQkFFOUNsQyxhQUFheUIsWUFBWSxDQUFDSDtvQkFFMUJqQixnQkFBZ0I7Z0JBQ2xCO2dCQUVBO1lBQ0Y7SUFDRjtJQUVBLE9BQU9BO0FBQ1QifQ==