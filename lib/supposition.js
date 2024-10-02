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
var _string = require("./utilities/string");
var _query = require("./utilities/query");
var _assignments = require("./utilities/assignments");
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
var unqualifiedStatementNodeQuery = (0, _query.nodeQuery)("/supposition/unqualifiedStatement");
var Supposition = /*#__PURE__*/ function() {
    function Supposition(fileContext, unqualifiedStatement) {
        _class_call_check(this, Supposition);
        this.fileContext = fileContext;
        this.unqualifiedStatement = unqualifiedStatement;
    }
    _create_class(Supposition, [
        {
            key: "getFileContext",
            value: function getFileContext() {
                return this.fileContext;
            }
        },
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
                var verified = false, suppositionString = this.getString(); ///
                suppositionString = (0, _string.trim)(suppositionString); ///
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
                var unqualifiedStatementNode = unqualifiedStatementNodeQuery(suppositionNode), unqualifiedStatement = _unqualified.default.fromUnqualifiedStatementNode(unqualifiedStatementNode, fileContext), supposition = new Supposition(fileContext, unqualifiedStatement);
                return supposition;
            }
        }
    ]);
    return Supposition;
}();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9zdXBwb3NpdGlvbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFByb29mU3RlcCBmcm9tIFwiLi9wcm9vZlN0ZXBcIjtcbmltcG9ydCBVbnF1YWxpZmllZFN0YXRlbWVudCBmcm9tIFwiLi9zdGF0ZW1lbnQvdW5xdWFsaWZpZWRcIjtcblxuaW1wb3J0IHsgdHJpbSB9IGZyb20gXCIuL3V0aWxpdGllcy9zdHJpbmdcIjtcbmltcG9ydCB7IG5vZGVRdWVyeSB9IGZyb20gXCIuL3V0aWxpdGllcy9xdWVyeVwiO1xuaW1wb3J0IHsgYXNzaWduQXNzaWdubWVudHMgfSBmcm9tIFwiLi91dGlsaXRpZXMvYXNzaWdubWVudHNcIjtcblxuY29uc3QgdW5xdWFsaWZpZWRTdGF0ZW1lbnROb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvc3VwcG9zaXRpb24vdW5xdWFsaWZpZWRTdGF0ZW1lbnRcIik7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFN1cHBvc2l0aW9uIHtcbiAgY29uc3RydWN0b3IoZmlsZUNvbnRleHQsIHVucXVhbGlmaWVkU3RhdGVtZW50KSB7XG4gICAgdGhpcy5maWxlQ29udGV4dCA9IGZpbGVDb250ZXh0O1xuICAgIHRoaXMudW5xdWFsaWZpZWRTdGF0ZW1lbnQgPSB1bnF1YWxpZmllZFN0YXRlbWVudDtcbiAgfVxuXG4gIGdldEZpbGVDb250ZXh0KCkge1xuICAgIHJldHVybiB0aGlzLmZpbGVDb250ZXh0O1xuICB9XG5cbiAgZ2V0VW5xdWFsaWZpZWRTdGF0ZW1lbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMudW5xdWFsaWZpZWRTdGF0ZW1lbnQ7XG4gIH1cblxuICBnZXRTdHJpbmcoKSB7IHJldHVybiB0aGlzLnVucXVhbGlmaWVkU3RhdGVtZW50LmdldFN0cmluZygpOyB9XG5cbiAgZ2V0U3RhdGVtZW50KCkgeyByZXR1cm4gdGhpcy51bnF1YWxpZmllZFN0YXRlbWVudC5nZXRTdGF0ZW1lbnQoKTsgfVxuXG4gIC8vIHVuaWZ5U3RhdGVtZW50KHN0YXRlbWVudE5vZGVCLCBzdWJzdGl0dXRpb25zLCBsb2NhbENvbnRleHRBLCBsb2NhbENvbnRleHRCKSB7XG4gIC8vICAgbGV0IHN0YXRlbWVudFVuaWZpZWQgPSBmYWxzZTtcbiAgLy9cbiAgLy8gICBpZiAodGhpcy5zdGF0ZW1lbnROb2RlICE9PSBudWxsKSB7XG4gIC8vICAgICBjb25zdCBub2RlQSA9IHRoaXMuc3RhdGVtZW50Tm9kZSwgIC8vL1xuICAvLyAgICAgICAgICAgbm9kZUIgPSBzdGF0ZW1lbnROb2RlQiwgIC8vL1xuICAvLyAgICAgICAgICAgdW5pZmllZCA9IG1ldGFMZXZlbFVuaWZpZXIudW5pZnkobm9kZUEsIG5vZGVCLCBzdWJzdGl0dXRpb25zLCBsb2NhbENvbnRleHRBLCBsb2NhbENvbnRleHRCKTtcbiAgLy9cbiAgLy8gICAgIHN0YXRlbWVudFVuaWZpZWQgPSB1bmlmaWVkOyAvLy9cbiAgLy8gICB9XG4gIC8vXG4gIC8vICAgcmV0dXJuIHN0YXRlbWVudFVuaWZpZWQ7XG4gIC8vIH1cblxuICAvLyB1bmlmeVN1YnByb29mKHN1YnByb29mTm9kZUIsIHN1YnN0aXR1dGlvbnMsIGxvY2FsQ29udGV4dEEsIGxvY2FsQ29udGV4dEIpIHtcbiAgLy8gICBsZXQgc3VicHJvb2ZVbmlmaWVkID0gZmFsc2U7XG4gIC8vXG4gIC8vICAgaWYgKHRoaXMuc3RhdGVtZW50Tm9kZSAhPT0gbnVsbCkge1xuICAvLyAgICAgY29uc3Qgc3RhdGVtZW50Tm9kZUEgPSB0aGlzLnN0YXRlbWVudE5vZGUsXG4gIC8vICAgICAgICAgICBzdWJwcm9vZkFzc2VydGlvbk5vZGVBID0gc3VicHJvb2ZBc3NlcnRpb25Ob2RlUXVlcnkoc3RhdGVtZW50Tm9kZUEpOyAgLy8vXG4gIC8vXG4gIC8vICAgICBpZiAoc3VicHJvb2ZBc3NlcnRpb25Ob2RlQSAhPT0gbnVsbCkge1xuICAvLyAgICAgICBjb25zdCBzdWJwcm9vZkFzc2VydGlvblN0YXRlbWVudE5vZGVzQSA9IHN1YnByb29mQXNzZXJ0aW9uU3RhdGVtZW50Tm9kZXNRdWVyeShzdWJwcm9vZkFzc2VydGlvbk5vZGVBKSwgIC8vL1xuICAvLyAgICAgICAgICAgICBzdWJwcm9vZlN1cHBvc2l0aW9uU3RhdGVtZW50Tm9kZXNCID0gc3VicHJvb2ZTdXBwb3NpdGlvblN0YXRlbWVudE5vZGVzUXVlcnkoc3VicHJvb2ZOb2RlQiksIC8vL1xuICAvLyAgICAgICAgICAgICBzdWJwcm9vZkxhc3RQcm9vZlN0ZXBTdGF0ZW1lbnROb2RlQiA9IHN1YnByb29mTGFzdFByb29mU3RlcFN0YXRlbWVudE5vZGVRdWVyeShzdWJwcm9vZk5vZGVCKSwgLy8vXG4gIC8vICAgICAgICAgICAgIHN1YnByb29mU3RhdGVtZW50Tm9kZXNCID0gW1xuICAvLyAgICAgICAgICAgICAgIC4uLnN1YnByb29mU3VwcG9zaXRpb25TdGF0ZW1lbnROb2Rlc0IsXG4gIC8vICAgICAgICAgICAgICAgc3VicHJvb2ZMYXN0UHJvb2ZTdGVwU3RhdGVtZW50Tm9kZUJcbiAgLy8gICAgICAgICAgICAgXTtcbiAgLy9cbiAgLy8gICAgICAgc3VicHJvb2ZVbmlmaWVkID0gbWF0Y2goc3VicHJvb2ZBc3NlcnRpb25TdGF0ZW1lbnROb2Rlc0EsIHN1YnByb29mU3RhdGVtZW50Tm9kZXNCLCAoc3VicHJvb2ZBc3NlcnRpb25TdGF0ZW1lbnROb2RlQSwgc3VicHJvb2ZTdGF0ZW1lbnROb2RlQikgPT4ge1xuICAvLyAgICAgICAgIGNvbnN0IG5vZGVBID0gc3VicHJvb2ZBc3NlcnRpb25TdGF0ZW1lbnROb2RlQSwgIC8vL1xuICAvLyAgICAgICAgICAgICAgIG5vZGVCID0gc3VicHJvb2ZTdGF0ZW1lbnROb2RlQiwgLy8vXG4gIC8vICAgICAgICAgICAgICAgdW5pZmllZCA9IG1ldGFMZXZlbFVuaWZpZXIudW5pZnkobm9kZUEsIG5vZGVCLCBzdWJzdGl0dXRpb25zLCBsb2NhbENvbnRleHRBLCBsb2NhbENvbnRleHRCKTtcbiAgLy9cbiAgLy8gICAgICAgICBpZiAodW5pZmllZCkge1xuICAvLyAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gIC8vICAgICAgICAgfVxuICAvLyAgICAgICB9KTtcbiAgLy8gICAgIH1cbiAgLy8gICB9XG4gIC8vXG4gIC8vICAgcmV0dXJuIHN1YnByb29mVW5pZmllZDtcbiAgLy8gfVxuXG4gIHZlcmlmeShsb2NhbENvbnRleHQpIHtcbiAgICBsZXQgdmVyaWZpZWQgPSBmYWxzZSxcbiAgICAgICAgc3VwcG9zaXRpb25TdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAvLy9cblxuICAgIHN1cHBvc2l0aW9uU3RyaW5nID0gdHJpbShzdXBwb3NpdGlvblN0cmluZyk7ICAvLy9cblxuICAgIGlmICh0aGlzLnVucXVhbGlmaWVkU3RhdGVtZW50ICE9PSBudWxsKSB7XG4gICAgICBsb2NhbENvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7c3VwcG9zaXRpb25TdHJpbmd9JyBzdXBwb3NpdGlvbi4uLmApO1xuXG4gICAgICBjb25zdCBzdGF0ZWQgPSB0cnVlLFxuICAgICAgICAgICAgYXNzaWdubWVudHMgPSBbXSxcbiAgICAgICAgICAgIHVucXVhbGlmaWVkU3RhdGVtZW50VmVyaWZpZWQgPSB0aGlzLnVucXVhbGlmaWVkU3RhdGVtZW50LnZlcmlmeShhc3NpZ25tZW50cywgc3RhdGVkLCBsb2NhbENvbnRleHQpO1xuXG4gICAgICBpZiAodW5xdWFsaWZpZWRTdGF0ZW1lbnRWZXJpZmllZCkge1xuICAgICAgICBjb25zdCBhc3NpZ25tZW50c0Fzc2lnbmVkID0gYXNzaWduQXNzaWdubWVudHMoYXNzaWdubWVudHMsIGxvY2FsQ29udGV4dCk7XG5cbiAgICAgICAgaWYgKGFzc2lnbm1lbnRzQXNzaWduZWQpIHtcbiAgICAgICAgICBjb25zdCBwcm9vZlN0ZXAgPSBQcm9vZlN0ZXAuZnJvbVVucXVhbGlmaWVkU3RhdGVtZW50KHRoaXMudW5xdWFsaWZpZWRTdGF0ZW1lbnQpO1xuXG4gICAgICAgICAgbG9jYWxDb250ZXh0LmFkZFByb29mU3RlcChwcm9vZlN0ZXApO1xuXG4gICAgICAgICAgdmVyaWZpZWQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICB9IGVsc2Uge1xuICAgICAgbG9jYWxDb250ZXh0LmRlYnVnKGBUaGUgJyR7c3VwcG9zaXRpb25TdHJpbmd9JyBzdXBwb3NpdGlvbiBjYW5ub3QgYmUgdmVyaWZpZWQgYmVjYXVzZSBpdCBpcyBub25zZW5zZS5gKTtcbiAgICB9XG5cbiAgICBpZiAodmVyaWZpZWQpIHtcbiAgICAgIGxvY2FsQ29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke3N1cHBvc2l0aW9uU3RyaW5nfScgc3VwcG9zaXRpb24uYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZlcmlmaWVkO1xuICB9XG5cbiAgc3RhdGljIGZyb21TdXBwb3NpdGlvbk5vZGUoc3VwcG9zaXRpb25Ob2RlLCBmaWxlQ29udGV4dCkge1xuICAgIGNvbnN0IHVucXVhbGlmaWVkU3RhdGVtZW50Tm9kZSA9IHVucXVhbGlmaWVkU3RhdGVtZW50Tm9kZVF1ZXJ5KHN1cHBvc2l0aW9uTm9kZSksXG4gICAgICAgICAgdW5xdWFsaWZpZWRTdGF0ZW1lbnQgPSBVbnF1YWxpZmllZFN0YXRlbWVudC5mcm9tVW5xdWFsaWZpZWRTdGF0ZW1lbnROb2RlKHVucXVhbGlmaWVkU3RhdGVtZW50Tm9kZSwgZmlsZUNvbnRleHQpLFxuICAgICAgICAgIHN1cHBvc2l0aW9uID0gbmV3IFN1cHBvc2l0aW9uKGZpbGVDb250ZXh0LCB1bnF1YWxpZmllZFN0YXRlbWVudCk7XG5cbiAgICByZXR1cm4gc3VwcG9zaXRpb247XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJTdXBwb3NpdGlvbiIsInVucXVhbGlmaWVkU3RhdGVtZW50Tm9kZVF1ZXJ5Iiwibm9kZVF1ZXJ5IiwiZmlsZUNvbnRleHQiLCJ1bnF1YWxpZmllZFN0YXRlbWVudCIsImdldEZpbGVDb250ZXh0IiwiZ2V0VW5xdWFsaWZpZWRTdGF0ZW1lbnQiLCJnZXRTdHJpbmciLCJnZXRTdGF0ZW1lbnQiLCJ2ZXJpZnkiLCJsb2NhbENvbnRleHQiLCJ2ZXJpZmllZCIsInN1cHBvc2l0aW9uU3RyaW5nIiwidHJpbSIsInRyYWNlIiwic3RhdGVkIiwiYXNzaWdubWVudHMiLCJ1bnF1YWxpZmllZFN0YXRlbWVudFZlcmlmaWVkIiwiYXNzaWdubWVudHNBc3NpZ25lZCIsImFzc2lnbkFzc2lnbm1lbnRzIiwicHJvb2ZTdGVwIiwiUHJvb2ZTdGVwIiwiZnJvbVVucXVhbGlmaWVkU3RhdGVtZW50IiwiYWRkUHJvb2ZTdGVwIiwiZGVidWciLCJmcm9tU3VwcG9zaXRpb25Ob2RlIiwic3VwcG9zaXRpb25Ob2RlIiwidW5xdWFsaWZpZWRTdGF0ZW1lbnROb2RlIiwiVW5xdWFsaWZpZWRTdGF0ZW1lbnQiLCJmcm9tVW5xdWFsaWZpZWRTdGF0ZW1lbnROb2RlIiwic3VwcG9zaXRpb24iXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBV3FCQTs7O2dFQVRDO2tFQUNXO3NCQUVaO3FCQUNLOzJCQUNROzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRWxDLElBQU1DLGdDQUFnQ0MsSUFBQUEsZ0JBQVMsRUFBQztBQUVqQyxJQUFBLEFBQU1GLDRCQUFOO2FBQU1BLFlBQ1BHLFdBQVcsRUFBRUMsb0JBQW9CO2dDQUQxQko7UUFFakIsSUFBSSxDQUFDRyxXQUFXLEdBQUdBO1FBQ25CLElBQUksQ0FBQ0Msb0JBQW9CLEdBQUdBOztrQkFIWEo7O1lBTW5CSyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNGLFdBQVc7WUFDekI7OztZQUVBRyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNGLG9CQUFvQjtZQUNsQzs7O1lBRUFHLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFBYyxPQUFPLElBQUksQ0FBQ0gsb0JBQW9CLENBQUNHLFNBQVM7WUFBSTs7O1lBRTVEQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQWlCLE9BQU8sSUFBSSxDQUFDSixvQkFBb0IsQ0FBQ0ksWUFBWTtZQUFJOzs7WUFFbEUsZ0ZBQWdGO1lBQ2hGLGtDQUFrQztZQUNsQyxFQUFFO1lBQ0YsdUNBQXVDO1lBQ3ZDLDZDQUE2QztZQUM3Qyx5Q0FBeUM7WUFDekMseUdBQXlHO1lBQ3pHLEVBQUU7WUFDRixzQ0FBc0M7WUFDdEMsTUFBTTtZQUNOLEVBQUU7WUFDRiw2QkFBNkI7WUFDN0IsSUFBSTtZQUVKLDhFQUE4RTtZQUM5RSxpQ0FBaUM7WUFDakMsRUFBRTtZQUNGLHVDQUF1QztZQUN2QyxpREFBaUQ7WUFDakQsc0ZBQXNGO1lBQ3RGLEVBQUU7WUFDRiw2Q0FBNkM7WUFDN0Msb0hBQW9IO1lBQ3BILDhHQUE4RztZQUM5RyxnSEFBZ0g7WUFDaEgsMENBQTBDO1lBQzFDLHVEQUF1RDtZQUN2RCxvREFBb0Q7WUFDcEQsaUJBQWlCO1lBQ2pCLEVBQUU7WUFDRiwwSkFBMEo7WUFDMUosOERBQThEO1lBQzlELG9EQUFvRDtZQUNwRCw2R0FBNkc7WUFDN0csRUFBRTtZQUNGLHlCQUF5QjtZQUN6Qix5QkFBeUI7WUFDekIsWUFBWTtZQUNaLFlBQVk7WUFDWixRQUFRO1lBQ1IsTUFBTTtZQUNOLEVBQUU7WUFDRiw0QkFBNEI7WUFDNUIsSUFBSTtZQUVKQyxLQUFBQTttQkFBQUEsU0FBQUEsT0FBT0MsWUFBWTtnQkFDakIsSUFBSUMsV0FBVyxPQUNYQyxvQkFBb0IsSUFBSSxDQUFDTCxTQUFTLElBQUksR0FBRztnQkFFN0NLLG9CQUFvQkMsSUFBQUEsWUFBSSxFQUFDRCxvQkFBcUIsR0FBRztnQkFFakQsSUFBSSxJQUFJLENBQUNSLG9CQUFvQixLQUFLLE1BQU07b0JBQ3RDTSxhQUFhSSxLQUFLLENBQUMsQUFBQyxrQkFBbUMsT0FBbEJGLG1CQUFrQjtvQkFFdkQsSUFBTUcsU0FBUyxNQUNUQyxjQUFjLEVBQUUsRUFDaEJDLCtCQUErQixJQUFJLENBQUNiLG9CQUFvQixDQUFDSyxNQUFNLENBQUNPLGFBQWFELFFBQVFMO29CQUUzRixJQUFJTyw4QkFBOEI7d0JBQ2hDLElBQU1DLHNCQUFzQkMsSUFBQUEsOEJBQWlCLEVBQUNILGFBQWFOO3dCQUUzRCxJQUFJUSxxQkFBcUI7NEJBQ3ZCLElBQU1FLFlBQVlDLGtCQUFTLENBQUNDLHdCQUF3QixDQUFDLElBQUksQ0FBQ2xCLG9CQUFvQjs0QkFFOUVNLGFBQWFhLFlBQVksQ0FBQ0g7NEJBRTFCVCxXQUFXO3dCQUNiO29CQUNGO2dCQUVGLE9BQU87b0JBQ0xELGFBQWFjLEtBQUssQ0FBQyxBQUFDLFFBQXlCLE9BQWxCWixtQkFBa0I7Z0JBQy9DO2dCQUVBLElBQUlELFVBQVU7b0JBQ1pELGFBQWFjLEtBQUssQ0FBQyxBQUFDLG9CQUFxQyxPQUFsQlosbUJBQWtCO2dCQUMzRDtnQkFFQSxPQUFPRDtZQUNUOzs7O1lBRU9jLEtBQUFBO21CQUFQLFNBQU9BLG9CQUFvQkMsZUFBZSxFQUFFdkIsV0FBVztnQkFDckQsSUFBTXdCLDJCQUEyQjFCLDhCQUE4QnlCLGtCQUN6RHRCLHVCQUF1QndCLG9CQUFvQixDQUFDQyw0QkFBNEIsQ0FBQ0YsMEJBQTBCeEIsY0FDbkcyQixjQUFjLElBdEdIOUIsWUFzR21CRyxhQUFhQztnQkFFakQsT0FBTzBCO1lBQ1Q7OztXQXpHbUI5QiJ9