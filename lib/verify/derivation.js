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
                    qualifiedStatementVerified = assignments.every(function(assignment) {
                        var assigned = assignment.assign(localContext);
                        if (assigned) {
                            return true;
                        }
                    });
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
                    unqualifiedStatementVerified = assignments1.every(function(assignment) {
                        var assigned = assignment.assign(localContext);
                        if (assigned) {
                            return true;
                        }
                    });
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92ZXJpZnkvZGVyaXZhdGlvbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFByb29mU3RlcCBmcm9tIFwiLi4vc3RlcC9wcm9vZlwiO1xuaW1wb3J0IExvY2FsQ29udGV4dCBmcm9tIFwiLi4vY29udGV4dC9sb2NhbFwiO1xuaW1wb3J0IHZlcmlmeVN1cHBvc2l0aW9ucyBmcm9tIFwiLi4vdmVyaWZ5L3N1cHBvc2l0aW9uc1wiO1xuaW1wb3J0IHZlcmlmeVF1YWxpZmllZFN0YXRlbWVudCBmcm9tIFwiLi4vdmVyaWZ5L3N0YXRlbWVudC9xdWFsaWZpZWRcIjtcbmltcG9ydCB2ZXJpZnlVbnF1YWxpZmllZFN0YXRlbWVudCBmcm9tIFwiLi4vdmVyaWZ5L3N0YXRlbWVudC91bnF1YWxpZmllZFwiO1xuXG5pbXBvcnQgeyBub2RlUXVlcnksIG5vZGVzUXVlcnkgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5pbXBvcnQgeyBTVUJQUk9PRl9SVUxFX05BTUUsIFFVQUxJRklFRF9TVEFURU1FTlRfUlVMRV9OQU1FLCBVTlFVQUxJRklFRF9TVEFURU1FTlRfUlVMRV9OQU1FIH0gZnJvbSBcIi4uL3J1bGVOYW1lc1wiO1xuXG5jb25zdCBjaGlsZE5vZGVzUXVlcnkgPSBub2Rlc1F1ZXJ5KFwiL2Rlcml2YXRpb258c3ViRGVyaXZhdGlvbi8qXCIpLFxuICAgICAgc3RhdGVtZW50Tm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3F1YWxpZmllZFN0YXRlbWVudHx1bnF1YWxpZmllZFN0YXRlbWVudC9zdGF0ZW1lbnQhXCIpLFxuICAgICAgc3VwcG9zaXRpb25Ob2Rlc1F1ZXJ5ID0gbm9kZXNRdWVyeShcIi9zdWJwcm9vZi9zdXBwb3NpdGlvblwiKSxcbiAgICAgIHN1YkRlcml2YXRpb25Ob2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvc3VicHJvb2Yvc3ViRGVyaXZhdGlvblwiKTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdmVyaWZ5RGVyaXZhdGlvbihkZXJpdmF0aW9uTm9kZSwgbG9jYWxDb250ZXh0KSB7XG4gIGxldCBkZXJpdmF0aW9uVmVyaWZpZWQ7XG5cbiAgY29uc3QgY2hpbGROb2RlcyA9IGNoaWxkTm9kZXNRdWVyeShkZXJpdmF0aW9uTm9kZSk7XG5cbiAgZGVyaXZhdGlvblZlcmlmaWVkID0gY2hpbGROb2Rlcy5ldmVyeSgoY2hpbGROb2RlKSA9PiB7XG4gICAgY29uc3QgY2hpbGRWZXJpZmllZCA9IHZlcmlmeUNoaWxkKGNoaWxkTm9kZSwgbG9jYWxDb250ZXh0KTtcblxuICAgIGlmIChjaGlsZFZlcmlmaWVkKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiBkZXJpdmF0aW9uVmVyaWZpZWQ7XG59XG5cbmZ1bmN0aW9uIHZlcmlmeVN1YkRlcml2YXRpb24oc3ViRGVyaXZhdGlvbk5vZGUsIGxvY2FsQ29udGV4dCkge1xuICBsZXQgc3ViRGVyaXZhdGlvblZlcmlmaWVkO1xuXG4gIGNvbnN0IGNoaWxkTm9kZXMgPSBjaGlsZE5vZGVzUXVlcnkoc3ViRGVyaXZhdGlvbk5vZGUpO1xuXG4gIHN1YkRlcml2YXRpb25WZXJpZmllZCA9IGNoaWxkTm9kZXMuZXZlcnkoKGNoaWxkTm9kZSkgPT4ge1xuICAgIGNvbnN0IGNoaWxkVmVyaWZpZWQgPSB2ZXJpZnlDaGlsZChjaGlsZE5vZGUsIGxvY2FsQ29udGV4dCk7XG5cbiAgICBpZiAoY2hpbGRWZXJpZmllZCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gc3ViRGVyaXZhdGlvblZlcmlmaWVkO1xufVxuXG5mdW5jdGlvbiB2ZXJpZnlTdWJwcm9vZihzdWJwcm9vZk5vZGUsIGxvY2FsQ29udGV4dCkge1xuICBsZXQgc3VicHJvb2ZWZXJpZmllZCA9IGZhbHNlO1xuXG4gIGxvY2FsQ29udGV4dCA9IExvY2FsQ29udGV4dC5mcm9tTG9jYWxDb250ZXh0KGxvY2FsQ29udGV4dCk7IC8vL1xuXG4gIGNvbnN0IHN1cHBvc2l0aW9ucyA9IFtdLFxuICAgICAgICBzdXBwb3NpdGlvbk5vZGVzID0gc3VwcG9zaXRpb25Ob2Rlc1F1ZXJ5KHN1YnByb29mTm9kZSksXG4gICAgICAgIHN1cHBvc2l0aW9uc1ZlcmlmaWVkID0gdmVyaWZ5U3VwcG9zaXRpb25zKHN1cHBvc2l0aW9uTm9kZXMsIHN1cHBvc2l0aW9ucywgbG9jYWxDb250ZXh0KTtcblxuICBpZiAoc3VwcG9zaXRpb25zVmVyaWZpZWQpIHtcbiAgICBjb25zdCBzdWJEZXJpdmF0aW9uTm9kZSA9IHN1YkRlcml2YXRpb25Ob2RlUXVlcnkoc3VicHJvb2ZOb2RlKSxcbiAgICAgICAgICBzdWJEZXJpdmF0aW9uVmVyaWZpZWQgPSB2ZXJpZnlTdWJEZXJpdmF0aW9uKHN1YkRlcml2YXRpb25Ob2RlLCBsb2NhbENvbnRleHQpO1xuXG4gICAgaWYgKHN1YkRlcml2YXRpb25WZXJpZmllZCkge1xuICAgICAgc3VicHJvb2ZWZXJpZmllZCA9IHRydWU7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHN1YnByb29mVmVyaWZpZWQ7XG59XG5cbmZ1bmN0aW9uIHZlcmlmeUNoaWxkKGNoaWxkTm9kZSwgbG9jYWxDb250ZXh0KSB7XG4gIGxldCBjaGlsZFZlcmlmaWVkID0gZmFsc2U7XG5cbiAgY29uc3QgY2hpbGROb2RlUnVsZU5hbWUgPSBjaGlsZE5vZGUuZ2V0UnVsZU5hbWUoKTtcblxuICBzd2l0Y2ggKGNoaWxkTm9kZVJ1bGVOYW1lKSB7XG4gICAgY2FzZSBTVUJQUk9PRl9SVUxFX05BTUU6IHtcbiAgICAgIGxldCBzdWJwcm9vZlZlcmlmaWVkO1xuXG4gICAgICBjb25zdCBzdWJwcm9vZk5vZGUgPSBjaGlsZE5vZGU7ICAvLy9cblxuICAgICAgc3VicHJvb2ZWZXJpZmllZCA9IHZlcmlmeVN1YnByb29mKHN1YnByb29mTm9kZSwgbG9jYWxDb250ZXh0KTtcblxuICAgICAgaWYgKHN1YnByb29mVmVyaWZpZWQpIHtcbiAgICAgICAgY29uc3QgcHJvb2ZTdGVwID0gUHJvb2ZTdGVwLmZyb21TdWJwcm9vZk5vZGUoc3VicHJvb2ZOb2RlKTtcblxuICAgICAgICBsb2NhbENvbnRleHQuYWRkUHJvb2ZTdGVwKHByb29mU3RlcCk7XG5cbiAgICAgICAgY2hpbGRWZXJpZmllZCA9IHRydWU7XG4gICAgICB9XG5cbiAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIGNhc2UgUVVBTElGSUVEX1NUQVRFTUVOVF9SVUxFX05BTUU6IHtcbiAgICAgIGxldCBxdWFsaWZpZWRTdGF0ZW1lbnRWZXJpZmllZDtcblxuICAgICAgY29uc3QgZGVyaXZlZCA9IHRydWUsXG4gICAgICAgICAgICBhc3NpZ25tZW50cyA9IFtdLFxuICAgICAgICAgICAgcXVhbGlmaWVkU3RhdGVtZW50Tm9kZSA9IGNoaWxkTm9kZTsgIC8vL1xuXG4gICAgICBxdWFsaWZpZWRTdGF0ZW1lbnRWZXJpZmllZCA9IHZlcmlmeVF1YWxpZmllZFN0YXRlbWVudChxdWFsaWZpZWRTdGF0ZW1lbnROb2RlLCBhc3NpZ25tZW50cywgZGVyaXZlZCwgbG9jYWxDb250ZXh0KTtcblxuICAgICAgaWYgKHF1YWxpZmllZFN0YXRlbWVudFZlcmlmaWVkKSB7XG4gICAgICAgIHF1YWxpZmllZFN0YXRlbWVudFZlcmlmaWVkID0gYXNzaWdubWVudHMuZXZlcnkoKGFzc2lnbm1lbnQpID0+IHsgIC8vL1xuICAgICAgICAgIGNvbnN0IGFzc2lnbmVkID0gYXNzaWdubWVudC5hc3NpZ24obG9jYWxDb250ZXh0KTtcblxuICAgICAgICAgIGlmIChhc3NpZ25lZCkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgaWYgKHF1YWxpZmllZFN0YXRlbWVudFZlcmlmaWVkKSB7XG4gICAgICAgIGNvbnN0IHN0YXRlbWVudE5vZGUgPSBzdGF0ZW1lbnROb2RlUXVlcnkocXVhbGlmaWVkU3RhdGVtZW50Tm9kZSksXG4gICAgICAgICAgICAgIHByb29mU3RlcCA9IFByb29mU3RlcC5mcm9tU3RhdGVtZW50Tm9kZShzdGF0ZW1lbnROb2RlKTtcblxuICAgICAgICBsb2NhbENvbnRleHQuYWRkUHJvb2ZTdGVwKHByb29mU3RlcCk7XG5cbiAgICAgICAgY2hpbGRWZXJpZmllZCA9IHRydWU7IC8vL1xuICAgICAgfVxuXG4gICAgICBicmVhaztcbiAgICB9XG5cbiAgICBjYXNlIFVOUVVBTElGSUVEX1NUQVRFTUVOVF9SVUxFX05BTUU6IHtcbiAgICAgIGxldCB1bnF1YWxpZmllZFN0YXRlbWVudFZlcmlmaWVkO1xuXG4gICAgICBjb25zdCBkZXJpdmVkID0gdHJ1ZSxcbiAgICAgICAgICAgIGFzc2lnbm1lbnRzID0gW10sXG4gICAgICAgICAgICB1bnF1YWxpZmllZFN0YXRlbWVudE5vZGUgPSBjaGlsZE5vZGU7ICAvLy9cblxuICAgICAgdW5xdWFsaWZpZWRTdGF0ZW1lbnRWZXJpZmllZCA9IHZlcmlmeVVucXVhbGlmaWVkU3RhdGVtZW50KHVucXVhbGlmaWVkU3RhdGVtZW50Tm9kZSwgYXNzaWdubWVudHMsIGRlcml2ZWQsIGxvY2FsQ29udGV4dCk7XG5cbiAgICAgIGlmICh1bnF1YWxpZmllZFN0YXRlbWVudFZlcmlmaWVkKSB7XG4gICAgICAgIHVucXVhbGlmaWVkU3RhdGVtZW50VmVyaWZpZWQgPSBhc3NpZ25tZW50cy5ldmVyeSgoYXNzaWdubWVudCkgPT4geyAgLy8vXG4gICAgICAgICAgY29uc3QgYXNzaWduZWQgPSBhc3NpZ25tZW50LmFzc2lnbihsb2NhbENvbnRleHQpO1xuXG4gICAgICAgICAgaWYgKGFzc2lnbmVkKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICBpZiAodW5xdWFsaWZpZWRTdGF0ZW1lbnRWZXJpZmllZCkge1xuICAgICAgICBjb25zdCBzdGF0ZW1lbnROb2RlID0gc3RhdGVtZW50Tm9kZVF1ZXJ5KHVucXVhbGlmaWVkU3RhdGVtZW50Tm9kZSksXG4gICAgICAgICAgICAgIHByb29mU3RlcCA9IFByb29mU3RlcC5mcm9tU3RhdGVtZW50Tm9kZShzdGF0ZW1lbnROb2RlKTtcblxuICAgICAgICBsb2NhbENvbnRleHQuYWRkUHJvb2ZTdGVwKHByb29mU3RlcCk7XG5cbiAgICAgICAgY2hpbGRWZXJpZmllZCA9IHRydWU7XG4gICAgICB9XG5cbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBjaGlsZFZlcmlmaWVkO1xufVxuIl0sIm5hbWVzIjpbInZlcmlmeURlcml2YXRpb24iLCJjaGlsZE5vZGVzUXVlcnkiLCJub2Rlc1F1ZXJ5Iiwic3RhdGVtZW50Tm9kZVF1ZXJ5Iiwibm9kZVF1ZXJ5Iiwic3VwcG9zaXRpb25Ob2Rlc1F1ZXJ5Iiwic3ViRGVyaXZhdGlvbk5vZGVRdWVyeSIsImRlcml2YXRpb25Ob2RlIiwibG9jYWxDb250ZXh0IiwiZGVyaXZhdGlvblZlcmlmaWVkIiwiY2hpbGROb2RlcyIsImV2ZXJ5IiwiY2hpbGROb2RlIiwiY2hpbGRWZXJpZmllZCIsInZlcmlmeUNoaWxkIiwidmVyaWZ5U3ViRGVyaXZhdGlvbiIsInN1YkRlcml2YXRpb25Ob2RlIiwic3ViRGVyaXZhdGlvblZlcmlmaWVkIiwidmVyaWZ5U3VicHJvb2YiLCJzdWJwcm9vZk5vZGUiLCJzdWJwcm9vZlZlcmlmaWVkIiwiTG9jYWxDb250ZXh0IiwiZnJvbUxvY2FsQ29udGV4dCIsInN1cHBvc2l0aW9ucyIsInN1cHBvc2l0aW9uTm9kZXMiLCJzdXBwb3NpdGlvbnNWZXJpZmllZCIsInZlcmlmeVN1cHBvc2l0aW9ucyIsImNoaWxkTm9kZVJ1bGVOYW1lIiwiZ2V0UnVsZU5hbWUiLCJTVUJQUk9PRl9SVUxFX05BTUUiLCJwcm9vZlN0ZXAiLCJQcm9vZlN0ZXAiLCJmcm9tU3VicHJvb2ZOb2RlIiwiYWRkUHJvb2ZTdGVwIiwiUVVBTElGSUVEX1NUQVRFTUVOVF9SVUxFX05BTUUiLCJxdWFsaWZpZWRTdGF0ZW1lbnRWZXJpZmllZCIsImRlcml2ZWQiLCJhc3NpZ25tZW50cyIsInF1YWxpZmllZFN0YXRlbWVudE5vZGUiLCJ2ZXJpZnlRdWFsaWZpZWRTdGF0ZW1lbnQiLCJhc3NpZ25tZW50IiwiYXNzaWduZWQiLCJhc3NpZ24iLCJzdGF0ZW1lbnROb2RlIiwiZnJvbVN0YXRlbWVudE5vZGUiLCJVTlFVQUxJRklFRF9TVEFURU1FTlRfUlVMRV9OQU1FIiwidW5xdWFsaWZpZWRTdGF0ZW1lbnRWZXJpZmllZCIsInVucXVhbGlmaWVkU3RhdGVtZW50Tm9kZSIsInZlcmlmeVVucXVhbGlmaWVkU3RhdGVtZW50Il0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFnQkE7OztlQUF3QkE7Ozs0REFkRjs0REFDRzttRUFDTTtnRUFDTTtrRUFDRTtxQkFFRDt5QkFDNkQ7Ozs7OztBQUVuRyxJQUFNQyxrQkFBa0JDLElBQUFBLGlCQUFVLEVBQUMsZ0NBQzdCQyxxQkFBcUJDLElBQUFBLGdCQUFTLEVBQUMsd0RBQy9CQyx3QkFBd0JILElBQUFBLGlCQUFVLEVBQUMsMEJBQ25DSSx5QkFBeUJGLElBQUFBLGdCQUFTLEVBQUM7QUFFMUIsU0FBU0osaUJBQWlCTyxjQUFjLEVBQUVDLFlBQVk7SUFDbkUsSUFBSUM7SUFFSixJQUFNQyxhQUFhVCxnQkFBZ0JNO0lBRW5DRSxxQkFBcUJDLFdBQVdDLEtBQUssQ0FBQyxTQUFDQztRQUNyQyxJQUFNQyxnQkFBZ0JDLFlBQVlGLFdBQVdKO1FBRTdDLElBQUlLLGVBQWU7WUFDakIsT0FBTztRQUNUO0lBQ0Y7SUFFQSxPQUFPSjtBQUNUO0FBRUEsU0FBU00sb0JBQW9CQyxpQkFBaUIsRUFBRVIsWUFBWTtJQUMxRCxJQUFJUztJQUVKLElBQU1QLGFBQWFULGdCQUFnQmU7SUFFbkNDLHdCQUF3QlAsV0FBV0MsS0FBSyxDQUFDLFNBQUNDO1FBQ3hDLElBQU1DLGdCQUFnQkMsWUFBWUYsV0FBV0o7UUFFN0MsSUFBSUssZUFBZTtZQUNqQixPQUFPO1FBQ1Q7SUFDRjtJQUVBLE9BQU9JO0FBQ1Q7QUFFQSxTQUFTQyxlQUFlQyxZ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