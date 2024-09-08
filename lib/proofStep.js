"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return ProofStep;
    }
});
var _substitutions = /*#__PURE__*/ _interop_require_default(require("./substitutions"));
var _metaLevel = /*#__PURE__*/ _interop_require_default(require("./unifier/metaLevel"));
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
var ProofStep = /*#__PURE__*/ function() {
    function ProofStep(subproofNode, statementNode) {
        _class_call_check(this, ProofStep);
        this.subproofNode = subproofNode;
        this.statementNode = statementNode;
    }
    _create_class(ProofStep, [
        {
            key: "getSubproofNode",
            value: function getSubproofNode() {
                return this.subproofNode;
            }
        },
        {
            key: "getStatementNode",
            value: function getStatementNode() {
                return this.statementNode;
            }
        },
        {
            key: "unifyStatement",
            value: function unifyStatement(statementNode, equivalences, localContext) {
                var statementUnified = false;
                if (this.statementNode !== null) {
                    var statementUnifiedAgainstStatement = false;
                    if (!statementUnifiedAgainstStatement) {
                        var statementNodeA = statementNode, statementNodeB = this.statementNode; ///
                        statementUnifiedAgainstStatement = unifyStatementAgainstStatement(statementNodeA, statementNodeB, equivalences, localContext);
                    }
                    if (!statementUnifiedAgainstStatement) {
                        var statementNodeA1 = statementNode, statementNodeB1 = this.statementNode; ///
                        statementUnifiedAgainstStatement = unifyStatementAgainstStatement(statementNodeA1, statementNodeB1, equivalences, localContext);
                    }
                    statementUnified = statementUnifiedAgainstStatement; ///
                }
                return statementUnified;
            }
        }
    ], [
        {
            key: "fromSubproofNode",
            value: function fromSubproofNode(subproofNode) {
                var statementNode = null, proofStep = new ProofStep(subproofNode, statementNode);
                return proofStep;
            }
        },
        {
            key: "fromStatementNode",
            value: function fromStatementNode(statementNode) {
                var subproofNode = null, proofStep = new ProofStep(subproofNode, statementNode);
                return proofStep;
            }
        }
    ]);
    return ProofStep;
}();
function unifyStatementAgainstStatement(statementNodeA, statementNodeB, equivalences, localContext) {
    var statementUnifiedAgainstStatement = false;
    var nodeA = statementNodeA, nodeB = statementNodeB, localContextA = localContext, localContextB = localContext, substitutions = _substitutions.default.fromNothing(), unified = _metaLevel.default.unify(nodeA, nodeB, substitutions, localContextA, localContextB);
    if (unified) {
        var substitutionsUnified = substitutions.everySubstitution(function(substitution) {
            var substitutionUnified = equivalences.some(function(equivalence) {
                var substitutionUnifiedAgainstEquivalence = substitution.unifyAgainstEquivalence(equivalence, substitutions, localContext);
                if (substitutionUnifiedAgainstEquivalence) {
                    return true;
                }
            });
            if (substitutionUnified) {
                return true;
            }
        });
        statementUnifiedAgainstStatement = substitutionsUnified; ///
    }
    return statementUnifiedAgainstStatement;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9wcm9vZlN0ZXAuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBTdWJzdGl0dXRpb25zIGZyb20gXCIuL3N1YnN0aXR1dGlvbnNcIjtcbmltcG9ydCBtZXRhTGV2ZWxVbmlmaWVyIGZyb20gXCIuL3VuaWZpZXIvbWV0YUxldmVsXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFByb29mU3RlcCB7XG4gIGNvbnN0cnVjdG9yKHN1YnByb29mTm9kZSwgc3RhdGVtZW50Tm9kZSkge1xuICAgIHRoaXMuc3VicHJvb2ZOb2RlID0gc3VicHJvb2ZOb2RlO1xuICAgIHRoaXMuc3RhdGVtZW50Tm9kZSA9IHN0YXRlbWVudE5vZGU7XG4gIH1cblxuICBnZXRTdWJwcm9vZk5vZGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3VicHJvb2ZOb2RlO1xuICB9XG5cbiAgZ2V0U3RhdGVtZW50Tm9kZSgpIHtcbiAgICByZXR1cm4gdGhpcy5zdGF0ZW1lbnROb2RlO1xuICB9XG5cbiAgdW5pZnlTdGF0ZW1lbnQoc3RhdGVtZW50Tm9kZSwgZXF1aXZhbGVuY2VzLCBsb2NhbENvbnRleHQpIHtcbiAgICBsZXQgc3RhdGVtZW50VW5pZmllZCA9IGZhbHNlO1xuXG4gICAgaWYgKHRoaXMuc3RhdGVtZW50Tm9kZSAhPT0gbnVsbCkge1xuICAgICAgbGV0IHN0YXRlbWVudFVuaWZpZWRBZ2FpbnN0U3RhdGVtZW50ID0gZmFsc2U7XG5cbiAgICAgIGlmICghc3RhdGVtZW50VW5pZmllZEFnYWluc3RTdGF0ZW1lbnQpIHtcbiAgICAgICAgY29uc3Qgc3RhdGVtZW50Tm9kZUEgPSBzdGF0ZW1lbnROb2RlLCAvLy9cbiAgICAgICAgICAgICAgc3RhdGVtZW50Tm9kZUIgPSB0aGlzLnN0YXRlbWVudE5vZGU7ICAvLy9cblxuICAgICAgICBzdGF0ZW1lbnRVbmlmaWVkQWdhaW5zdFN0YXRlbWVudCA9IHVuaWZ5U3RhdGVtZW50QWdhaW5zdFN0YXRlbWVudChzdGF0ZW1lbnROb2RlQSwgc3RhdGVtZW50Tm9kZUIsIGVxdWl2YWxlbmNlcywgbG9jYWxDb250ZXh0KTtcbiAgICAgIH1cblxuICAgICAgaWYgKCFzdGF0ZW1lbnRVbmlmaWVkQWdhaW5zdFN0YXRlbWVudCkge1xuICAgICAgICBjb25zdCBzdGF0ZW1lbnROb2RlQSA9IHN0YXRlbWVudE5vZGUsIC8vL1xuICAgICAgICAgICAgICBzdGF0ZW1lbnROb2RlQiA9IHRoaXMuc3RhdGVtZW50Tm9kZTsgIC8vL1xuXG4gICAgICAgIHN0YXRlbWVudFVuaWZpZWRBZ2FpbnN0U3RhdGVtZW50ID0gdW5pZnlTdGF0ZW1lbnRBZ2FpbnN0U3RhdGVtZW50KHN0YXRlbWVudE5vZGVBLCBzdGF0ZW1lbnROb2RlQiwgZXF1aXZhbGVuY2VzLCBsb2NhbENvbnRleHQpO1xuICAgICAgfVxuXG4gICAgICBzdGF0ZW1lbnRVbmlmaWVkID0gc3RhdGVtZW50VW5pZmllZEFnYWluc3RTdGF0ZW1lbnQ7ICAvLy9cbiAgICB9XG5cbiAgICByZXR1cm4gc3RhdGVtZW50VW5pZmllZDtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tU3VicHJvb2ZOb2RlKHN1YnByb29mTm9kZSkge1xuICAgIGNvbnN0IHN0YXRlbWVudE5vZGUgPSBudWxsLFxuICAgICAgICAgIHByb29mU3RlcCA9IG5ldyBQcm9vZlN0ZXAoc3VicHJvb2ZOb2RlLCBzdGF0ZW1lbnROb2RlKTtcblxuICAgIHJldHVybiBwcm9vZlN0ZXA7XG4gIH1cblxuICBzdGF0aWMgZnJvbVN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSkge1xuICAgIGNvbnN0IHN1YnByb29mTm9kZSA9IG51bGwsXG4gICAgICAgICAgcHJvb2ZTdGVwID0gbmV3IFByb29mU3RlcChzdWJwcm9vZk5vZGUsIHN0YXRlbWVudE5vZGUpO1xuXG4gICAgcmV0dXJuIHByb29mU3RlcDtcbiAgfVxufVxuXG5mdW5jdGlvbiB1bmlmeVN0YXRlbWVudEFnYWluc3RTdGF0ZW1lbnQoc3RhdGVtZW50Tm9kZUEsIHN0YXRlbWVudE5vZGVCLCBlcXVpdmFsZW5jZXMsIGxvY2FsQ29udGV4dCkge1xuICBsZXQgc3RhdGVtZW50VW5pZmllZEFnYWluc3RTdGF0ZW1lbnQgPSBmYWxzZTtcblxuICBjb25zdCBub2RlQSA9IHN0YXRlbWVudE5vZGVBLCAgLy8vXG4gICAgICAgIG5vZGVCID0gc3RhdGVtZW50Tm9kZUIsICAvLy9cbiAgICAgICAgbG9jYWxDb250ZXh0QSA9IGxvY2FsQ29udGV4dCwgLy8vXG4gICAgICAgIGxvY2FsQ29udGV4dEIgPSBsb2NhbENvbnRleHQsICAvLy9cbiAgICAgICAgc3Vic3RpdHV0aW9ucyA9IFN1YnN0aXR1dGlvbnMuZnJvbU5vdGhpbmcoKSxcbiAgICAgICAgdW5pZmllZCA9IG1ldGFMZXZlbFVuaWZpZXIudW5pZnkobm9kZUEsIG5vZGVCLCBzdWJzdGl0dXRpb25zLCBsb2NhbENvbnRleHRBLCBsb2NhbENvbnRleHRCKTtcblxuICBpZiAodW5pZmllZCkge1xuICAgIGNvbnN0IHN1YnN0aXR1dGlvbnNVbmlmaWVkID0gc3Vic3RpdHV0aW9ucy5ldmVyeVN1YnN0aXR1dGlvbigoc3Vic3RpdHV0aW9uKSA9PiB7XG4gICAgICBjb25zdCBzdWJzdGl0dXRpb25VbmlmaWVkID0gZXF1aXZhbGVuY2VzLnNvbWUoKGVxdWl2YWxlbmNlKSA9PiB7XG4gICAgICAgIGNvbnN0IHN1YnN0aXR1dGlvblVuaWZpZWRBZ2FpbnN0RXF1aXZhbGVuY2UgPSBzdWJzdGl0dXRpb24udW5pZnlBZ2FpbnN0RXF1aXZhbGVuY2UoZXF1aXZhbGVuY2UsIHN1YnN0aXR1dGlvbnMsIGxvY2FsQ29udGV4dCk7XG5cbiAgICAgICAgaWYgKHN1YnN0aXR1dGlvblVuaWZpZWRBZ2FpbnN0RXF1aXZhbGVuY2UpIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIGlmIChzdWJzdGl0dXRpb25VbmlmaWVkKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgc3RhdGVtZW50VW5pZmllZEFnYWluc3RTdGF0ZW1lbnQgPSBzdWJzdGl0dXRpb25zVW5pZmllZDsgIC8vL1xuICB9XG5cbiAgcmV0dXJuIHN0YXRlbWVudFVuaWZpZWRBZ2FpbnN0U3RhdGVtZW50O1xufSJdLCJuYW1lcyI6WyJQcm9vZlN0ZXAiLCJzdWJwcm9vZk5vZGUiLCJzdGF0ZW1lbnROb2RlIiwiZ2V0U3VicHJvb2ZOb2RlIiwiZ2V0U3RhdGVtZW50Tm9kZSIsInVuaWZ5U3RhdGVtZW50IiwiZXF1aXZhbGVuY2VzIiwibG9jYWxDb250ZXh0Iiwic3RhdGVtZW50VW5pZmllZCIsInN0YXRlbWVudFVuaWZpZWRBZ2FpbnN0U3RhdGVtZW50Iiwic3RhdGVtZW50Tm9kZUEiLCJzdGF0ZW1lbnROb2RlQiIsInVuaWZ5U3RhdGVtZW50QWdhaW5zdFN0YXRlbWVudCIsImZyb21TdWJwcm9vZk5vZGUiLCJwcm9vZlN0ZXAiLCJmcm9tU3RhdGVtZW50Tm9kZSIsIm5vZGVBIiwibm9kZUIiLCJsb2NhbENvbnRleHRBIiwibG9jYWxDb250ZXh0QiIsInN1YnN0aXR1dGlvbnMiLCJTdWJzdGl0dXRpb25zIiwiZnJvbU5vdGhpbmciLCJ1bmlmaWVkIiwibWV0YUxldmVsVW5pZmllciIsInVuaWZ5Iiwic3Vic3RpdHV0aW9uc1VuaWZpZWQiLCJldmVyeVN1YnN0aXR1dGlvbiIsInN1YnN0aXR1dGlvbiIsInN1YnN0aXR1dGlvblVuaWZpZWQiLCJzb21lIiwiZXF1aXZhbGVuY2UiLCJzdWJzdGl0dXRpb25VbmlmaWVkQWdhaW5zdEVxdWl2YWxlbmNlIiwidW5pZnlBZ2FpbnN0RXF1aXZhbGVuY2UiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBS3FCQTs7O29FQUhLO2dFQUNHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRWQsSUFBQSxBQUFNQSwwQkFBRCxBQUFMO2FBQU1BLFVBQ1BDLFlBQVksRUFBRUMsYUFBYTtnQ0FEcEJGO1FBRWpCLElBQUksQ0FBQ0MsWUFBWSxHQUFHQTtRQUNwQixJQUFJLENBQUNDLGFBQWEsR0FBR0E7O2tCQUhKRjs7WUFNbkJHLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0YsWUFBWTtZQUMxQjs7O1lBRUFHLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0YsYUFBYTtZQUMzQjs7O1lBRUFHLEtBQUFBO21CQUFBQSxTQUFBQSxlQUFlSCxhQUFhLEVBQUVJLFlBQVksRUFBRUMsWUFBWTtnQkFDdEQsSUFBSUMsbUJBQW1CO2dCQUV2QixJQUFJLElBQUksQ0FBQ04sYUFBYSxLQUFLLE1BQU07b0JBQy9CLElBQUlPLG1DQUFtQztvQkFFdkMsSUFBSSxDQUFDQSxrQ0FBa0M7d0JBQ3JDLElBQU1DLGlCQUFpQlIsZUFDakJTLGlCQUFpQixJQUFJLENBQUNULGFBQWEsRUFBRyxHQUFHO3dCQUUvQ08sbUNBQW1DRywrQkFBK0JGLGdCQUFnQkMsZ0JBQWdCTCxjQUFjQztvQkFDbEg7b0JBRUEsSUFBSSxDQUFDRSxrQ0FBa0M7d0JBQ3JDLElBQU1DLGtCQUFpQlIsZUFDakJTLGtCQUFpQixJQUFJLENBQUNULGFBQWEsRUFBRyxHQUFHO3dCQUUvQ08sbUNBQW1DRywrQkFBK0JGLGlCQUFnQkMsaUJBQWdCTCxjQUFjQztvQkFDbEg7b0JBRUFDLG1CQUFtQkMsa0NBQW1DLEdBQUc7Z0JBQzNEO2dCQUVBLE9BQU9EO1lBQ1Q7Ozs7WUFFT0ssS0FBQUE7bUJBQVAsU0FBT0EsaUJBQWlCWixZQUFZO2dCQUNsQyxJQUFNQyxnQkFBZ0IsTUFDaEJZLFlBQVksSUExQ0RkLFVBMENlQyxjQUFjQztnQkFFOUMsT0FBT1k7WUFDVDs7O1lBRU9DLEtBQUFBO21CQUFQLFNBQU9BLGtCQUFrQmIsYUFBYTtnQkFDcEMsSUFBTUQsZUFBZSxNQUNmYSxZQUFZLElBakREZCxVQWlEZUMsY0FBY0M7Z0JBRTlDLE9BQU9ZO1lBQ1Q7OztXQXBEbUJkOztBQXVEckIsU0FBU1ksK0JBQStCRixjQUFjLEVBQUVDLGNBQWMsRUFBRUwsWUFBWSxFQUFFQyxZQUFZO0lBQ2hHLElBQUlFLG1DQUFtQztJQUV2QyxJQUFNTyxRQUFRTixnQkFDUk8sUUFBUU4sZ0JBQ1JPLGdCQUFnQlgsY0FDaEJZLGdCQUFnQlosY0FDaEJhLGdCQUFnQkMsc0JBQWEsQ0FBQ0MsV0FBVyxJQUN6Q0MsVUFBVUMsa0JBQWdCLENBQUNDLEtBQUssQ0FBQ1QsT0FBT0MsT0FBT0csZUFBZUYsZUFBZUM7SUFFbkYsSUFBSUksU0FBUztRQUNYLElBQU1HLHVCQUF1Qk4sY0FBY08saUJBQWlCLENBQUMsU0FBQ0M7WUFDNUQsSUFBTUMsc0JBQXNCdkIsYUFBYXdCLElBQUksQ0FBQyxTQUFDQztnQkFDN0MsSUFBTUMsd0NBQXdDSixhQUFhSyx1QkFBdUIsQ0FBQ0YsYUFBYVgsZUFBZWI7Z0JBRS9HLElBQUl5Qix1Q0FBdUM7b0JBQ3pDLE9BQU87Z0JBQ1Q7WUFDRjtZQUVBLElBQUlILHFCQUFxQjtnQkFDdkIsT0FBTztZQUNUO1FBQ0Y7UUFFQXBCLG1DQUFtQ2lCLHNCQUF1QixHQUFHO0lBQy9EO0lBRUEsT0FBT2pCO0FBQ1QifQ==