"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return Supposition;
    }
});
var _proofStep = /*#__PURE__*/ _interop_require_default(require("./proofStep"));
var _unqualified = /*#__PURE__*/ _interop_require_default(require("./statement/unqualified"));
var _metaLevel = /*#__PURE__*/ _interop_require_default(require("./unifier/metaLevel"));
var _array = require("./utilities/array");
var _assignments = require("./utilities/assignments");
var _query = require("./utilities/query");
function _class_call_check(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _create_class(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var subproofAssertionNodeQuery = (0, _query.nodeQuery)("/statement/subproofAssertion!"), unqualifiedStatementNodeQuery = (0, _query.nodeQuery)("/supposition/unqualifiedStatement"), subproofAssertionStatementNodesQuery = (0, _query.nodesQuery)("/subproofAssertion/statement"), subproofSuppositionStatementNodesQuery = (0, _query.nodesQuery)("/subproof/supposition/unqualifiedStatement/statement!"), subproofLastProofStepStatementNodeQuery = (0, _query.nodeQuery)("/subproof/subDerivation/lastProofStep/unqualifiedStatement|qualifiedStatement/statement!");
var Supposition = /*#__PURE__*/ function() {
    function Supposition(unqualifiedStatement) {
        _class_call_check(this, Supposition);
        this.unqualifiedStatement = unqualifiedStatement;
    }
    _create_class(Supposition, [
        {
            key: "getUnqualifiedStatement",
            value: function getUnqualifiedStatement() {
                return this.unqualifiedStatement;
            }
        },
        {
            key: "getString",
            value: function getString() {
                return this.unqualifiedStatement.getString();
            }
        },
        {
            key: "getStatement",
            value: function getStatement() {
                return this.unqualifiedStatement.getStatement();
            }
        },
        {
            // unifyStatement(statementNodeB, substitutions, localContextA, localContextB) {
            //   let statementUnified = false;
            //
            //   if (this.statementNode !== null) {
            //     const nodeA = this.statementNode,  ///
            //           nodeB = statementNodeB,  ///
            //           unified = metaLevelUnifier.unify(nodeA, nodeB, substitutions, localContextA, localContextB);
            //
            //     statementUnified = unified; ///
            //   }
            //
            //   return statementUnified;
            // }
            // unifySubproof(subproofNodeB, substitutions, localContextA, localContextB) {
            //   let subproofUnified = false;
            //
            //   if (this.statementNode !== null) {
            //     const statementNodeA = this.statementNode,
            //           subproofAssertionNodeA = subproofAssertionNodeQuery(statementNodeA);  ///
            //
            //     if (subproofAssertionNodeA !== null) {
            //       const subproofAssertionStatementNodesA = subproofAssertionStatementNodesQuery(subproofAssertionNodeA),  ///
            //             subproofSuppositionStatementNodesB = subproofSuppositionStatementNodesQuery(subproofNodeB), ///
            //             subproofLastProofStepStatementNodeB = subproofLastProofStepStatementNodeQuery(subproofNodeB), ///
            //             subproofStatementNodesB = [
            //               ...subproofSuppositionStatementNodesB,
            //               subproofLastProofStepStatementNodeB
            //             ];
            //
            //       subproofUnified = match(subproofAssertionStatementNodesA, subproofStatementNodesB, (subproofAssertionStatementNodeA, subproofStatementNodeB) => {
            //         const nodeA = subproofAssertionStatementNodeA,  ///
            //               nodeB = subproofStatementNodeB, ///
            //               unified = metaLevelUnifier.unify(nodeA, nodeB, substitutions, localContextA, localContextB);
            //
            //         if (unified) {
            //           return true;
            //         }
            //       });
            //     }
            //   }
            //
            //   return subproofUnified;
            // }
            key: "verify",
            value: function verify(localContext) {
                var verified = false;
                var suppositionString = this.getString(); ///
                if (this.unqualifiedStatement !== null) {
                    localContext.trace("Verifying the '".concat(suppositionString, "' supposition..."));
                    var stated = true, assignments = [], unqualifiedStatementVerified = this.unqualifiedStatement.verify(assignments, stated, localContext);
                    if (unqualifiedStatementVerified) {
                        var assignmentsAssigned = (0, _assignments.assignAssignments)(assignments, localContext);
                        if (assignmentsAssigned) {
                            var proofStep = _proofStep.default.fromUnqualifiedStatement(this.unqualifiedStatement);
                            localContext.addProofStep(proofStep);
                            verified = true;
                        }
                    }
                } else {
                    localContext.debug("The '".concat(suppositionString, "' supposition cannot be verified because it is nonsense."));
                }
                if (verified) {
                    localContext.debug("...verified the '".concat(suppositionString, "' supposition."));
                }
                return verified;
            }
        }
    ], [
        {
            key: "fromSuppositionNode",
            value: function fromSuppositionNode(suppositionNode, fileContext) {
                var unqualifiedStatementNode = unqualifiedStatementNodeQuery(suppositionNode), unqualifiedStatement = _unqualified.default.fromUnqualifiedStatementNode(unqualifiedStatementNode, fileContext), supposition = new Supposition(unqualifiedStatement);
                return supposition;
            }
        }
    ]);
    return Supposition;
}();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9zdXBwb3NpdGlvbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFByb29mU3RlcCBmcm9tIFwiLi9wcm9vZlN0ZXBcIjtcbmltcG9ydCBVbnF1YWxpZmllZFN0YXRlbWVudCBmcm9tIFwiLi9zdGF0ZW1lbnQvdW5xdWFsaWZpZWRcIjtcblxuaW1wb3J0IG1ldGFMZXZlbFVuaWZpZXIgZnJvbSBcIi4vdW5pZmllci9tZXRhTGV2ZWxcIjtcblxuaW1wb3J0IHsgbWF0Y2ggfSBmcm9tIFwiLi91dGlsaXRpZXMvYXJyYXlcIjtcbmltcG9ydCB7IGFzc2lnbkFzc2lnbm1lbnRzIH0gZnJvbSBcIi4vdXRpbGl0aWVzL2Fzc2lnbm1lbnRzXCI7XG5pbXBvcnQgeyBub2RlUXVlcnksIG5vZGVzUXVlcnkgfSBmcm9tIFwiLi91dGlsaXRpZXMvcXVlcnlcIjtcblxuY29uc3Qgc3VicHJvb2ZBc3NlcnRpb25Ob2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvc3RhdGVtZW50L3N1YnByb29mQXNzZXJ0aW9uIVwiKSxcbiAgICAgIHVucXVhbGlmaWVkU3RhdGVtZW50Tm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3N1cHBvc2l0aW9uL3VucXVhbGlmaWVkU3RhdGVtZW50XCIpLFxuICAgICAgc3VicHJvb2ZBc3NlcnRpb25TdGF0ZW1lbnROb2Rlc1F1ZXJ5ID0gbm9kZXNRdWVyeShcIi9zdWJwcm9vZkFzc2VydGlvbi9zdGF0ZW1lbnRcIiksXG4gICAgICBzdWJwcm9vZlN1cHBvc2l0aW9uU3RhdGVtZW50Tm9kZXNRdWVyeSA9IG5vZGVzUXVlcnkoXCIvc3VicHJvb2Yvc3VwcG9zaXRpb24vdW5xdWFsaWZpZWRTdGF0ZW1lbnQvc3RhdGVtZW50IVwiKSxcbiAgICAgIHN1YnByb29mTGFzdFByb29mU3RlcFN0YXRlbWVudE5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9zdWJwcm9vZi9zdWJEZXJpdmF0aW9uL2xhc3RQcm9vZlN0ZXAvdW5xdWFsaWZpZWRTdGF0ZW1lbnR8cXVhbGlmaWVkU3RhdGVtZW50L3N0YXRlbWVudCFcIik7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFN1cHBvc2l0aW9uIHtcbiAgY29uc3RydWN0b3IodW5xdWFsaWZpZWRTdGF0ZW1lbnQpIHtcbiAgICB0aGlzLnVucXVhbGlmaWVkU3RhdGVtZW50ID0gdW5xdWFsaWZpZWRTdGF0ZW1lbnQ7XG4gIH1cblxuICBnZXRVbnF1YWxpZmllZFN0YXRlbWVudCgpIHtcbiAgICByZXR1cm4gdGhpcy51bnF1YWxpZmllZFN0YXRlbWVudDtcbiAgfVxuXG4gIGdldFN0cmluZygpIHsgcmV0dXJuIHRoaXMudW5xdWFsaWZpZWRTdGF0ZW1lbnQuZ2V0U3RyaW5nKCk7IH1cblxuICBnZXRTdGF0ZW1lbnQoKSB7IHJldHVybiB0aGlzLnVucXVhbGlmaWVkU3RhdGVtZW50LmdldFN0YXRlbWVudCgpOyB9XG5cbiAgLy8gdW5pZnlTdGF0ZW1lbnQoc3RhdGVtZW50Tm9kZUIsIHN1YnN0aXR1dGlvbnMsIGxvY2FsQ29udGV4dEEsIGxvY2FsQ29udGV4dEIpIHtcbiAgLy8gICBsZXQgc3RhdGVtZW50VW5pZmllZCA9IGZhbHNlO1xuICAvL1xuICAvLyAgIGlmICh0aGlzLnN0YXRlbWVudE5vZGUgIT09IG51bGwpIHtcbiAgLy8gICAgIGNvbnN0IG5vZGVBID0gdGhpcy5zdGF0ZW1lbnROb2RlLCAgLy8vXG4gIC8vICAgICAgICAgICBub2RlQiA9IHN0YXRlbWVudE5vZGVCLCAgLy8vXG4gIC8vICAgICAgICAgICB1bmlmaWVkID0gbWV0YUxldmVsVW5pZmllci51bmlmeShub2RlQSwgbm9kZUIsIHN1YnN0aXR1dGlvbnMsIGxvY2FsQ29udGV4dEEsIGxvY2FsQ29udGV4dEIpO1xuICAvL1xuICAvLyAgICAgc3RhdGVtZW50VW5pZmllZCA9IHVuaWZpZWQ7IC8vL1xuICAvLyAgIH1cbiAgLy9cbiAgLy8gICByZXR1cm4gc3RhdGVtZW50VW5pZmllZDtcbiAgLy8gfVxuXG4gIC8vIHVuaWZ5U3VicHJvb2Yoc3VicHJvb2ZOb2RlQiwgc3Vic3RpdHV0aW9ucywgbG9jYWxDb250ZXh0QSwgbG9jYWxDb250ZXh0Qikge1xuICAvLyAgIGxldCBzdWJwcm9vZlVuaWZpZWQgPSBmYWxzZTtcbiAgLy9cbiAgLy8gICBpZiAodGhpcy5zdGF0ZW1lbnROb2RlICE9PSBudWxsKSB7XG4gIC8vICAgICBjb25zdCBzdGF0ZW1lbnROb2RlQSA9IHRoaXMuc3RhdGVtZW50Tm9kZSxcbiAgLy8gICAgICAgICAgIHN1YnByb29mQXNzZXJ0aW9uTm9kZUEgPSBzdWJwcm9vZkFzc2VydGlvbk5vZGVRdWVyeShzdGF0ZW1lbnROb2RlQSk7ICAvLy9cbiAgLy9cbiAgLy8gICAgIGlmIChzdWJwcm9vZkFzc2VydGlvbk5vZGVBICE9PSBudWxsKSB7XG4gIC8vICAgICAgIGNvbnN0IHN1YnByb29mQXNzZXJ0aW9uU3RhdGVtZW50Tm9kZXNBID0gc3VicHJvb2ZBc3NlcnRpb25TdGF0ZW1lbnROb2Rlc1F1ZXJ5KHN1YnByb29mQXNzZXJ0aW9uTm9kZUEpLCAgLy8vXG4gIC8vICAgICAgICAgICAgIHN1YnByb29mU3VwcG9zaXRpb25TdGF0ZW1lbnROb2Rlc0IgPSBzdWJwcm9vZlN1cHBvc2l0aW9uU3RhdGVtZW50Tm9kZXNRdWVyeShzdWJwcm9vZk5vZGVCKSwgLy8vXG4gIC8vICAgICAgICAgICAgIHN1YnByb29mTGFzdFByb29mU3RlcFN0YXRlbWVudE5vZGVCID0gc3VicHJvb2ZMYXN0UHJvb2ZTdGVwU3RhdGVtZW50Tm9kZVF1ZXJ5KHN1YnByb29mTm9kZUIpLCAvLy9cbiAgLy8gICAgICAgICAgICAgc3VicHJvb2ZTdGF0ZW1lbnROb2Rlc0IgPSBbXG4gIC8vICAgICAgICAgICAgICAgLi4uc3VicHJvb2ZTdXBwb3NpdGlvblN0YXRlbWVudE5vZGVzQixcbiAgLy8gICAgICAgICAgICAgICBzdWJwcm9vZkxhc3RQcm9vZlN0ZXBTdGF0ZW1lbnROb2RlQlxuICAvLyAgICAgICAgICAgICBdO1xuICAvL1xuICAvLyAgICAgICBzdWJwcm9vZlVuaWZpZWQgPSBtYXRjaChzdWJwcm9vZkFzc2VydGlvblN0YXRlbWVudE5vZGVzQSwgc3VicHJvb2ZTdGF0ZW1lbnROb2Rlc0IsIChzdWJwcm9vZkFzc2VydGlvblN0YXRlbWVudE5vZGVBLCBzdWJwcm9vZlN0YXRlbWVudE5vZGVCKSA9PiB7XG4gIC8vICAgICAgICAgY29uc3Qgbm9kZUEgPSBzdWJwcm9vZkFzc2VydGlvblN0YXRlbWVudE5vZGVBLCAgLy8vXG4gIC8vICAgICAgICAgICAgICAgbm9kZUIgPSBzdWJwcm9vZlN0YXRlbWVudE5vZGVCLCAvLy9cbiAgLy8gICAgICAgICAgICAgICB1bmlmaWVkID0gbWV0YUxldmVsVW5pZmllci51bmlmeShub2RlQSwgbm9kZUIsIHN1YnN0aXR1dGlvbnMsIGxvY2FsQ29udGV4dEEsIGxvY2FsQ29udGV4dEIpO1xuICAvL1xuICAvLyAgICAgICAgIGlmICh1bmlmaWVkKSB7XG4gIC8vICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgLy8gICAgICAgICB9XG4gIC8vICAgICAgIH0pO1xuICAvLyAgICAgfVxuICAvLyAgIH1cbiAgLy9cbiAgLy8gICByZXR1cm4gc3VicHJvb2ZVbmlmaWVkO1xuICAvLyB9XG5cbiAgdmVyaWZ5KGxvY2FsQ29udGV4dCkge1xuICAgIGxldCB2ZXJpZmllZCA9IGZhbHNlO1xuXG4gICAgY29uc3Qgc3VwcG9zaXRpb25TdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAvLy9cblxuICAgIGlmICh0aGlzLnVucXVhbGlmaWVkU3RhdGVtZW50ICE9PSBudWxsKSB7XG4gICAgICBsb2NhbENvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7c3VwcG9zaXRpb25TdHJpbmd9JyBzdXBwb3NpdGlvbi4uLmApO1xuXG4gICAgICBjb25zdCBzdGF0ZWQgPSB0cnVlLFxuICAgICAgICAgICAgYXNzaWdubWVudHMgPSBbXSxcbiAgICAgICAgICAgIHVucXVhbGlmaWVkU3RhdGVtZW50VmVyaWZpZWQgPSB0aGlzLnVucXVhbGlmaWVkU3RhdGVtZW50LnZlcmlmeShhc3NpZ25tZW50cywgc3RhdGVkLCBsb2NhbENvbnRleHQpO1xuXG4gICAgICBpZiAodW5xdWFsaWZpZWRTdGF0ZW1lbnRWZXJpZmllZCkge1xuICAgICAgICBjb25zdCBhc3NpZ25tZW50c0Fzc2lnbmVkID0gYXNzaWduQXNzaWdubWVudHMoYXNzaWdubWVudHMsIGxvY2FsQ29udGV4dCk7XG5cbiAgICAgICAgaWYgKGFzc2lnbm1lbnRzQXNzaWduZWQpIHtcbiAgICAgICAgICBjb25zdCBwcm9vZlN0ZXAgPSBQcm9vZlN0ZXAuZnJvbVVucXVhbGlmaWVkU3RhdGVtZW50KHRoaXMudW5xdWFsaWZpZWRTdGF0ZW1lbnQpO1xuXG4gICAgICAgICAgbG9jYWxDb250ZXh0LmFkZFByb29mU3RlcChwcm9vZlN0ZXApO1xuXG4gICAgICAgICAgdmVyaWZpZWQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICB9IGVsc2Uge1xuICAgICAgbG9jYWxDb250ZXh0LmRlYnVnKGBUaGUgJyR7c3VwcG9zaXRpb25TdHJpbmd9JyBzdXBwb3NpdGlvbiBjYW5ub3QgYmUgdmVyaWZpZWQgYmVjYXVzZSBpdCBpcyBub25zZW5zZS5gKTtcbiAgICB9XG5cbiAgICBpZiAodmVyaWZpZWQpIHtcbiAgICAgIGxvY2FsQ29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke3N1cHBvc2l0aW9uU3RyaW5nfScgc3VwcG9zaXRpb24uYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZlcmlmaWVkO1xuICB9XG5cbiAgc3RhdGljIGZyb21TdXBwb3NpdGlvbk5vZGUoc3VwcG9zaXRpb25Ob2RlLCBmaWxlQ29udGV4dCkge1xuICAgIGNvbnN0IHVucXVhbGlmaWVkU3RhdGVtZW50Tm9kZSA9IHVucXVhbGlmaWVkU3RhdGVtZW50Tm9kZVF1ZXJ5KHN1cHBvc2l0aW9uTm9kZSksXG4gICAgICAgICAgdW5xdWFsaWZpZWRTdGF0ZW1lbnQgPSBVbnF1YWxpZmllZFN0YXRlbWVudC5mcm9tVW5xdWFsaWZpZWRTdGF0ZW1lbnROb2RlKHVucXVhbGlmaWVkU3RhdGVtZW50Tm9kZSwgZmlsZUNvbnRleHQpLFxuICAgICAgICAgIHN1cHBvc2l0aW9uID0gbmV3IFN1cHBvc2l0aW9uKHVucXVhbGlmaWVkU3RhdGVtZW50KTtcblxuICAgIHJldHVybiBzdXBwb3NpdGlvbjtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIlN1cHBvc2l0aW9uIiwic3VicHJvb2ZBc3NlcnRpb25Ob2RlUXVlcnkiLCJub2RlUXVlcnkiLCJ1bnF1YWxpZmllZFN0YXRlbWVudE5vZGVRdWVyeSIsInN1YnByb29mQXNzZXJ0aW9uU3RhdGVtZW50Tm9kZXNRdWVyeSIsIm5vZGVzUXVlcnkiLCJzdWJwcm9vZlN1cHBvc2l0aW9uU3RhdGVtZW50Tm9kZXNRdWVyeSIsInN1YnByb29mTGFzdFByb29mU3RlcFN0YXRlbWVudE5vZGVRdWVyeSIsInVucXVhbGlmaWVkU3RhdGVtZW50IiwiZ2V0VW5xdWFsaWZpZWRTdGF0ZW1lbnQiLCJnZXRTdHJpbmciLCJnZXRTdGF0ZW1lbnQiLCJ2ZXJpZnkiLCJsb2NhbENvbnRleHQiLCJ2ZXJpZmllZCIsInN1cHBvc2l0aW9uU3RyaW5nIiwidHJhY2UiLCJzdGF0ZWQiLCJhc3NpZ25tZW50cyIsInVucXVhbGlmaWVkU3RhdGVtZW50VmVyaWZpZWQiLCJhc3NpZ25tZW50c0Fzc2lnbmVkIiwiYXNzaWduQXNzaWdubWVudHMiLCJwcm9vZlN0ZXAiLCJQcm9vZlN0ZXAiLCJmcm9tVW5xdWFsaWZpZWRTdGF0ZW1lbnQiLCJhZGRQcm9vZlN0ZXAiLCJkZWJ1ZyIsImZyb21TdXBwb3NpdGlvbk5vZGUiLCJzdXBwb3NpdGlvbk5vZGUiLCJmaWxlQ29udGV4dCIsInVucXVhbGlmaWVkU3RhdGVtZW50Tm9kZSIsIlVucXVhbGlmaWVkU3RhdGVtZW50IiwiZnJvbVVucXVhbGlmaWVkU3RhdGVtZW50Tm9kZSIsInN1cHBvc2l0aW9uIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQWlC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