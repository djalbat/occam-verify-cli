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
var _supposition = /*#__PURE__*/ _interop_require_default(require("../verify/supposition"));
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
    var suppositions = [], suppositionNodes = suppositionNodesQuery(subproofNode), suppositionsVerified = suppositionNodes.every(function(suppositionNode) {
        var suppositionVerified = (0, _supposition.default)(suppositionNode, suppositions, localContext);
        if (suppositionVerified) {
            return true;
        }
    });
    if (suppositionsVerified) {
        var subDerivationNode = subDerivationNodeQuery(subproofNode), subDerivationVerified = verifySubDerivation(subDerivationNode, localContext);
        if (subDerivationVerified) {
            subproofVerified = true;
        }
    }
    return subproofVerified;
}
function verifyChild(childNode, localContext) {
    var childVerified;
    var childNodeRuleName = childNode.getRuleName();
    switch(childNodeRuleName){
        case _ruleNames.SUBPROOF_RULE_NAME:
            {
                var subproofNode = childNode, subproofVerified = verifySubproof(subproofNode, localContext);
                if (subproofVerified) {
                    var proofStep = _proof.default.fromSubproofNode(subproofNode);
                    localContext.addProofStep(proofStep);
                    childVerified = true;
                }
                break;
            }
        case _ruleNames.QUALIFIED_STATEMENT_RULE_NAME:
            {
                var derived = true, assignments = [], qualifiedStatementNode = childNode, qualifiedStatementVerified = (0, _qualified.default)(qualifiedStatementNode, assignments, derived, localContext);
                if (qualifiedStatementVerified) {
                    var statementNode = statementNodeQuery(qualifiedStatementNode), proofStep1 = _proof.default.fromStatementNode(statementNode);
                    localContext.addProofStep(proofStep1);
                    childVerified = qualifiedStatementVerified; ///
                }
                break;
            }
        case _ruleNames.UNQUALIFIED_STATEMENT_RULE_NAME:
            {
                var derived1 = true, assignments1 = [], unqualifiedStatementNode = childNode, unqualifiedStatementVerified = (0, _unqualified.default)(unqualifiedStatementNode, assignments1, derived1, localContext);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92ZXJpZnkvZGVyaXZhdGlvbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFByb29mU3RlcCBmcm9tIFwiLi4vc3RlcC9wcm9vZlwiO1xuaW1wb3J0IExvY2FsQ29udGV4dCBmcm9tIFwiLi4vY29udGV4dC9sb2NhbFwiO1xuaW1wb3J0IHZlcmlmeVN1cHBvc2l0aW9uIGZyb20gXCIuLi92ZXJpZnkvc3VwcG9zaXRpb25cIjtcbmltcG9ydCB2ZXJpZnlRdWFsaWZpZWRTdGF0ZW1lbnQgZnJvbSBcIi4uL3ZlcmlmeS9zdGF0ZW1lbnQvcXVhbGlmaWVkXCI7XG5pbXBvcnQgdmVyaWZ5VW5xdWFsaWZpZWRTdGF0ZW1lbnQgZnJvbSBcIi4uL3ZlcmlmeS9zdGF0ZW1lbnQvdW5xdWFsaWZpZWRcIjtcblxuaW1wb3J0IHsgbm9kZVF1ZXJ5LCBub2Rlc1F1ZXJ5IH0gZnJvbSBcIi4uL3V0aWxpdGllcy9xdWVyeVwiO1xuaW1wb3J0IHsgU1VCUFJPT0ZfUlVMRV9OQU1FLCBRVUFMSUZJRURfU1RBVEVNRU5UX1JVTEVfTkFNRSwgVU5RVUFMSUZJRURfU1RBVEVNRU5UX1JVTEVfTkFNRSB9IGZyb20gXCIuLi9ydWxlTmFtZXNcIjtcblxuY29uc3QgY2hpbGROb2Rlc1F1ZXJ5ID0gbm9kZXNRdWVyeShcIi9kZXJpdmF0aW9ufHN1YkRlcml2YXRpb24vKlwiKSxcbiAgICAgIHN0YXRlbWVudE5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9xdWFsaWZpZWRTdGF0ZW1lbnR8dW5xdWFsaWZpZWRTdGF0ZW1lbnQvc3RhdGVtZW50IVwiKSxcbiAgICAgIHN1cHBvc2l0aW9uTm9kZXNRdWVyeSA9IG5vZGVzUXVlcnkoXCIvc3VicHJvb2Yvc3VwcG9zaXRpb25cIiksXG4gICAgICBzdWJEZXJpdmF0aW9uTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3N1YnByb29mL3N1YkRlcml2YXRpb25cIik7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHZlcmlmeURlcml2YXRpb24oZGVyaXZhdGlvbk5vZGUsIGxvY2FsQ29udGV4dCkge1xuICBsZXQgZGVyaXZhdGlvblZlcmlmaWVkO1xuXG4gIGNvbnN0IGNoaWxkTm9kZXMgPSBjaGlsZE5vZGVzUXVlcnkoZGVyaXZhdGlvbk5vZGUpO1xuXG4gIGRlcml2YXRpb25WZXJpZmllZCA9IGNoaWxkTm9kZXMuZXZlcnkoKGNoaWxkTm9kZSkgPT4ge1xuICAgIGNvbnN0IGNoaWxkVmVyaWZpZWQgPSB2ZXJpZnlDaGlsZChjaGlsZE5vZGUsIGxvY2FsQ29udGV4dCk7XG5cbiAgICBpZiAoY2hpbGRWZXJpZmllZCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gZGVyaXZhdGlvblZlcmlmaWVkO1xufVxuXG5mdW5jdGlvbiB2ZXJpZnlTdWJEZXJpdmF0aW9uKHN1YkRlcml2YXRpb25Ob2RlLCBsb2NhbENvbnRleHQpIHtcbiAgbGV0IHN1YkRlcml2YXRpb25WZXJpZmllZDtcblxuICBjb25zdCBjaGlsZE5vZGVzID0gY2hpbGROb2Rlc1F1ZXJ5KHN1YkRlcml2YXRpb25Ob2RlKTtcblxuICBzdWJEZXJpdmF0aW9uVmVyaWZpZWQgPSBjaGlsZE5vZGVzLmV2ZXJ5KChjaGlsZE5vZGUpID0+IHtcbiAgICBjb25zdCBjaGlsZFZlcmlmaWVkID0gdmVyaWZ5Q2hpbGQoY2hpbGROb2RlLCBsb2NhbENvbnRleHQpO1xuXG4gICAgaWYgKGNoaWxkVmVyaWZpZWQpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIHN1YkRlcml2YXRpb25WZXJpZmllZDtcbn1cblxuZnVuY3Rpb24gdmVyaWZ5U3VicHJvb2Yoc3VicHJvb2ZOb2RlLCBsb2NhbENvbnRleHQpIHtcbiAgbGV0IHN1YnByb29mVmVyaWZpZWQgPSBmYWxzZTtcblxuICBsb2NhbENvbnRleHQgPSBMb2NhbENvbnRleHQuZnJvbUxvY2FsQ29udGV4dChsb2NhbENvbnRleHQpOyAvLy9cblxuICBjb25zdCBzdXBwb3NpdGlvbnMgPSBbXSxcbiAgICAgICAgc3VwcG9zaXRpb25Ob2RlcyA9IHN1cHBvc2l0aW9uTm9kZXNRdWVyeShzdWJwcm9vZk5vZGUpLFxuICAgICAgICBzdXBwb3NpdGlvbnNWZXJpZmllZCA9IHN1cHBvc2l0aW9uTm9kZXMuZXZlcnkoKHN1cHBvc2l0aW9uTm9kZSkgPT4ge1xuICAgICAgICAgIGNvbnN0IHN1cHBvc2l0aW9uVmVyaWZpZWQgPSB2ZXJpZnlTdXBwb3NpdGlvbihzdXBwb3NpdGlvbk5vZGUsIHN1cHBvc2l0aW9ucywgbG9jYWxDb250ZXh0KTtcblxuICAgICAgICAgIGlmIChzdXBwb3NpdGlvblZlcmlmaWVkKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gIGlmIChzdXBwb3NpdGlvbnNWZXJpZmllZCkge1xuICAgIGNvbnN0IHN1YkRlcml2YXRpb25Ob2RlID0gc3ViRGVyaXZhdGlvbk5vZGVRdWVyeShzdWJwcm9vZk5vZGUpLFxuICAgICAgICAgIHN1YkRlcml2YXRpb25WZXJpZmllZCA9IHZlcmlmeVN1YkRlcml2YXRpb24oc3ViRGVyaXZhdGlvbk5vZGUsIGxvY2FsQ29udGV4dCk7XG5cbiAgICBpZiAoc3ViRGVyaXZhdGlvblZlcmlmaWVkKSB7XG4gICAgICBzdWJwcm9vZlZlcmlmaWVkID0gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gc3VicHJvb2ZWZXJpZmllZDtcbn1cblxuZnVuY3Rpb24gdmVyaWZ5Q2hpbGQoY2hpbGROb2RlLCBsb2NhbENvbnRleHQpIHtcbiAgbGV0IGNoaWxkVmVyaWZpZWQ7XG5cbiAgY29uc3QgY2hpbGROb2RlUnVsZU5hbWUgPSBjaGlsZE5vZGUuZ2V0UnVsZU5hbWUoKTtcblxuICBzd2l0Y2ggKGNoaWxkTm9kZVJ1bGVOYW1lKSB7XG4gICAgY2FzZSBTVUJQUk9PRl9SVUxFX05BTUU6IHtcbiAgICAgIGNvbnN0IHN1YnByb29mTm9kZSA9IGNoaWxkTm9kZSwgIC8vL1xuICAgICAgICAgICAgc3VicHJvb2ZWZXJpZmllZCA9IHZlcmlmeVN1YnByb29mKHN1YnByb29mTm9kZSwgbG9jYWxDb250ZXh0KTtcblxuICAgICAgaWYgKHN1YnByb29mVmVyaWZpZWQpIHtcbiAgICAgICAgY29uc3QgcHJvb2ZTdGVwID0gUHJvb2ZTdGVwLmZyb21TdWJwcm9vZk5vZGUoc3VicHJvb2ZOb2RlKTtcblxuICAgICAgICBsb2NhbENvbnRleHQuYWRkUHJvb2ZTdGVwKHByb29mU3RlcCk7XG5cbiAgICAgICAgY2hpbGRWZXJpZmllZCA9IHRydWU7XG4gICAgICB9XG5cbiAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIGNhc2UgUVVBTElGSUVEX1NUQVRFTUVOVF9SVUxFX05BTUU6IHtcbiAgICAgIGNvbnN0IGRlcml2ZWQgPSB0cnVlLFxuICAgICAgICAgICAgYXNzaWdubWVudHMgPSBbXSxcbiAgICAgICAgICAgIHF1YWxpZmllZFN0YXRlbWVudE5vZGUgPSBjaGlsZE5vZGUsICAvLy9cbiAgICAgICAgICAgIHF1YWxpZmllZFN0YXRlbWVudFZlcmlmaWVkID0gdmVyaWZ5UXVhbGlmaWVkU3RhdGVtZW50KHF1YWxpZmllZFN0YXRlbWVudE5vZGUsIGFzc2lnbm1lbnRzLCBkZXJpdmVkLCBsb2NhbENvbnRleHQpO1xuXG4gICAgICBpZiAocXVhbGlmaWVkU3RhdGVtZW50VmVyaWZpZWQpIHtcbiAgICAgICAgY29uc3Qgc3RhdGVtZW50Tm9kZSA9IHN0YXRlbWVudE5vZGVRdWVyeShxdWFsaWZpZWRTdGF0ZW1lbnROb2RlKSxcbiAgICAgICAgICAgICAgcHJvb2ZTdGVwID0gUHJvb2ZTdGVwLmZyb21TdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUpO1xuXG4gICAgICAgIGxvY2FsQ29udGV4dC5hZGRQcm9vZlN0ZXAocHJvb2ZTdGVwKTtcblxuICAgICAgICBjaGlsZFZlcmlmaWVkID0gcXVhbGlmaWVkU3RhdGVtZW50VmVyaWZpZWQ7IC8vL1xuICAgICAgfVxuXG4gICAgICBicmVhaztcbiAgICB9XG5cbiAgICBjYXNlIFVOUVVBTElGSUVEX1NUQVRFTUVOVF9SVUxFX05BTUU6IHtcbiAgICAgIGNvbnN0IGRlcml2ZWQgPSB0cnVlLFxuICAgICAgICAgICAgYXNzaWdubWVudHMgPSBbXSxcbiAgICAgICAgICAgIHVucXVhbGlmaWVkU3RhdGVtZW50Tm9kZSA9IGNoaWxkTm9kZSwgIC8vL1xuICAgICAgICAgICAgdW5xdWFsaWZpZWRTdGF0ZW1lbnRWZXJpZmllZCA9IHZlcmlmeVVucXVhbGlmaWVkU3RhdGVtZW50KHVucXVhbGlmaWVkU3RhdGVtZW50Tm9kZSwgYXNzaWdubWVudHMsIGRlcml2ZWQsIGxvY2FsQ29udGV4dCk7XG5cbiAgICAgIGlmICh1bnF1YWxpZmllZFN0YXRlbWVudFZlcmlmaWVkKSB7XG4gICAgICAgIGNvbnN0IHN0YXRlbWVudE5vZGUgPSBzdGF0ZW1lbnROb2RlUXVlcnkodW5xdWFsaWZpZWRTdGF0ZW1lbnROb2RlKSxcbiAgICAgICAgICAgICAgcHJvb2ZTdGVwID0gUHJvb2ZTdGVwLmZyb21TdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUpO1xuXG4gICAgICAgIGxvY2FsQ29udGV4dC5hZGRQcm9vZlN0ZXAocHJvb2ZTdGVwKTtcblxuICAgICAgICBjaGlsZFZlcmlmaWVkID0gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGNoaWxkVmVyaWZpZWQ7XG59XG4iXSwibmFtZXMiOlsidmVyaWZ5RGVyaXZhdGlvbiIsImNoaWxkTm9kZXNRdWVyeSIsIm5vZGVzUXVlcnkiLCJzdGF0ZW1lbnROb2RlUXVlcnkiLCJub2RlUXVlcnkiLCJzdXBwb3NpdGlvbk5vZGVzUXVlcnkiLCJzdWJEZXJpdmF0aW9uTm9kZVF1ZXJ5IiwiZGVyaXZhdGlvbk5vZGUiLCJsb2NhbENvbnRleHQiLCJkZXJpdmF0aW9uVmVyaWZpZWQiLCJjaGlsZE5vZGVzIiwiZXZlcnkiLCJjaGlsZE5vZGUiLCJjaGlsZFZlcmlmaWVkIiwidmVyaWZ5Q2hpbGQiLCJ2ZXJpZnlTdWJEZXJpdmF0aW9uIiwic3ViRGVyaXZhdGlvbk5vZGUiLCJzdWJEZXJpdmF0aW9uVmVyaWZpZWQiLCJ2ZXJpZnlTdWJwcm9vZiIsInN1YnByb29mTm9kZSIsInN1YnByb29mVmVyaWZpZWQiLCJMb2NhbENvbnRleHQiLCJmcm9tTG9jYWxDb250ZXh0Iiwic3VwcG9zaXRpb25zIiwic3VwcG9zaXRpb25Ob2RlcyIsInN1cHBvc2l0aW9uc1ZlcmlmaWVkIiwic3VwcG9zaXRpb25Ob2RlIiwic3VwcG9zaXRpb25WZXJpZmllZCIsInZlcmlmeVN1cHBvc2l0aW9uIiwiY2hpbGROb2RlUnVsZU5hbWUiLCJnZXRSdWxlTmFtZSIsIlNVQlBST09GX1JVTEVfTkFNRSIsInByb29mU3RlcCIsIlByb29mU3RlcCIsImZyb21TdWJwcm9vZk5vZGUiLCJhZGRQcm9vZlN0ZXAiLCJRVUFMSUZJRURfU1RBVEVNRU5UX1JVTEVfTkFNRSIsImRlcml2ZWQiLCJhc3NpZ25tZW50cyIsInF1YWxpZmllZFN0YXRlbWVudE5vZGUiLCJxdWFsaWZpZWRTdGF0ZW1lbnRWZXJpZmllZCIsInZlcmlmeVF1YWxpZmllZFN0YXRlbWVudCIsInN0YXRlbWVudE5vZGUiLCJmcm9tU3RhdGVtZW50Tm9kZSIsIlVOUVVBTElGSUVEX1NUQVRFTUVOVF9SVUxFX05BTUUiLCJ1bnF1YWxpZmllZFN0YXRlbWVudE5vZGUiLCJ1bnF1YWxpZmllZFN0YXRlbWVudFZlcmlmaWVkIiwidmVyaWZ5VW5xdWFsaWZpZWRTdGF0ZW1lbnQiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQWdCQTs7O2VBQXdCQTs7OzREQWRGOzREQUNHO2tFQUNLO2dFQUNPO2tFQUNFO3FCQUVEO3lCQUM2RDs7Ozs7O0FBRW5HLElBQU1DLGtCQUFrQkMsSUFBQUEsaUJBQVUsRUFBQyxnQ0FDN0JDLHFCQUFxQkMsSUFBQUEsZ0JBQVMsRUFBQyx3REFDL0JDLHdCQUF3QkgsSUFBQUEsaUJBQVUsRUFBQywwQkFD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