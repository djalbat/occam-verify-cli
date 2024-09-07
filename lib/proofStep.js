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
    var nodeA = statementNodeA, nodeB = statementNodeB, localContextA = localContext, localContextB = localContext, substitutions = [], unified = _metaLevel.default.unify(nodeA, nodeB, substitutions, localContextA, localContextB);
    if (unified) {
        var substitutionsUnified = substitutions.every(function(substitution) {
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9wcm9vZlN0ZXAuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBtZXRhTGV2ZWxVbmlmaWVyIGZyb20gXCIuL3VuaWZpZXIvbWV0YUxldmVsXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFByb29mU3RlcCB7XG4gIGNvbnN0cnVjdG9yKHN1YnByb29mTm9kZSwgc3RhdGVtZW50Tm9kZSkge1xuICAgIHRoaXMuc3VicHJvb2ZOb2RlID0gc3VicHJvb2ZOb2RlO1xuICAgIHRoaXMuc3RhdGVtZW50Tm9kZSA9IHN0YXRlbWVudE5vZGU7XG4gIH1cblxuICBnZXRTdWJwcm9vZk5vZGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3VicHJvb2ZOb2RlO1xuICB9XG5cbiAgZ2V0U3RhdGVtZW50Tm9kZSgpIHtcbiAgICByZXR1cm4gdGhpcy5zdGF0ZW1lbnROb2RlO1xuICB9XG5cbiAgdW5pZnlTdGF0ZW1lbnQoc3RhdGVtZW50Tm9kZSwgZXF1aXZhbGVuY2VzLCBsb2NhbENvbnRleHQpIHtcbiAgICBsZXQgc3RhdGVtZW50VW5pZmllZCA9IGZhbHNlO1xuXG4gICAgaWYgKHRoaXMuc3RhdGVtZW50Tm9kZSAhPT0gbnVsbCkge1xuICAgICAgbGV0IHN0YXRlbWVudFVuaWZpZWRBZ2FpbnN0U3RhdGVtZW50ID0gZmFsc2U7XG5cbiAgICAgIGlmICghc3RhdGVtZW50VW5pZmllZEFnYWluc3RTdGF0ZW1lbnQpIHtcbiAgICAgICAgY29uc3Qgc3RhdGVtZW50Tm9kZUEgPSBzdGF0ZW1lbnROb2RlLCAvLy9cbiAgICAgICAgICAgICAgc3RhdGVtZW50Tm9kZUIgPSB0aGlzLnN0YXRlbWVudE5vZGU7ICAvLy9cblxuICAgICAgICBzdGF0ZW1lbnRVbmlmaWVkQWdhaW5zdFN0YXRlbWVudCA9IHVuaWZ5U3RhdGVtZW50QWdhaW5zdFN0YXRlbWVudChzdGF0ZW1lbnROb2RlQSwgc3RhdGVtZW50Tm9kZUIsIGVxdWl2YWxlbmNlcywgbG9jYWxDb250ZXh0KTtcbiAgICAgIH1cblxuICAgICAgaWYgKCFzdGF0ZW1lbnRVbmlmaWVkQWdhaW5zdFN0YXRlbWVudCkge1xuICAgICAgICBjb25zdCBzdGF0ZW1lbnROb2RlQSA9IHN0YXRlbWVudE5vZGUsIC8vL1xuICAgICAgICAgICAgICBzdGF0ZW1lbnROb2RlQiA9IHRoaXMuc3RhdGVtZW50Tm9kZTsgIC8vL1xuXG4gICAgICAgIHN0YXRlbWVudFVuaWZpZWRBZ2FpbnN0U3RhdGVtZW50ID0gdW5pZnlTdGF0ZW1lbnRBZ2FpbnN0U3RhdGVtZW50KHN0YXRlbWVudE5vZGVBLCBzdGF0ZW1lbnROb2RlQiwgZXF1aXZhbGVuY2VzLCBsb2NhbENvbnRleHQpO1xuICAgICAgfVxuXG4gICAgICBzdGF0ZW1lbnRVbmlmaWVkID0gc3RhdGVtZW50VW5pZmllZEFnYWluc3RTdGF0ZW1lbnQ7ICAvLy9cbiAgICB9XG5cbiAgICByZXR1cm4gc3RhdGVtZW50VW5pZmllZDtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tU3VicHJvb2ZOb2RlKHN1YnByb29mTm9kZSkge1xuICAgIGNvbnN0IHN0YXRlbWVudE5vZGUgPSBudWxsLFxuICAgICAgICAgIHByb29mU3RlcCA9IG5ldyBQcm9vZlN0ZXAoc3VicHJvb2ZOb2RlLCBzdGF0ZW1lbnROb2RlKTtcblxuICAgIHJldHVybiBwcm9vZlN0ZXA7XG4gIH1cblxuICBzdGF0aWMgZnJvbVN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSkge1xuICAgIGNvbnN0IHN1YnByb29mTm9kZSA9IG51bGwsXG4gICAgICAgICAgcHJvb2ZTdGVwID0gbmV3IFByb29mU3RlcChzdWJwcm9vZk5vZGUsIHN0YXRlbWVudE5vZGUpO1xuXG4gICAgcmV0dXJuIHByb29mU3RlcDtcbiAgfVxufVxuXG5mdW5jdGlvbiB1bmlmeVN0YXRlbWVudEFnYWluc3RTdGF0ZW1lbnQoc3RhdGVtZW50Tm9kZUEsIHN0YXRlbWVudE5vZGVCLCBlcXVpdmFsZW5jZXMsIGxvY2FsQ29udGV4dCkge1xuICBsZXQgc3RhdGVtZW50VW5pZmllZEFnYWluc3RTdGF0ZW1lbnQgPSBmYWxzZTtcblxuICBjb25zdCBub2RlQSA9IHN0YXRlbWVudE5vZGVBLCAgLy8vXG4gICAgICAgIG5vZGVCID0gc3RhdGVtZW50Tm9kZUIsICAvLy9cbiAgICAgICAgbG9jYWxDb250ZXh0QSA9IGxvY2FsQ29udGV4dCwgLy8vXG4gICAgICAgIGxvY2FsQ29udGV4dEIgPSBsb2NhbENvbnRleHQsICAvLy9cbiAgICAgICAgc3Vic3RpdHV0aW9ucyA9IFtdLFxuICAgICAgICB1bmlmaWVkID0gbWV0YUxldmVsVW5pZmllci51bmlmeShub2RlQSwgbm9kZUIsIHN1YnN0aXR1dGlvbnMsIGxvY2FsQ29udGV4dEEsIGxvY2FsQ29udGV4dEIpO1xuXG4gIGlmICh1bmlmaWVkKSB7XG4gICAgY29uc3Qgc3Vic3RpdHV0aW9uc1VuaWZpZWQgPSBzdWJzdGl0dXRpb25zLmV2ZXJ5KChzdWJzdGl0dXRpb24pID0+IHtcbiAgICAgIGNvbnN0IHN1YnN0aXR1dGlvblVuaWZpZWQgPSBlcXVpdmFsZW5jZXMuc29tZSgoZXF1aXZhbGVuY2UpID0+IHtcbiAgICAgICAgY29uc3Qgc3Vic3RpdHV0aW9uVW5pZmllZEFnYWluc3RFcXVpdmFsZW5jZSA9IHN1YnN0aXR1dGlvbi51bmlmeUFnYWluc3RFcXVpdmFsZW5jZShlcXVpdmFsZW5jZSwgc3Vic3RpdHV0aW9ucywgbG9jYWxDb250ZXh0KTtcblxuICAgICAgICBpZiAoc3Vic3RpdHV0aW9uVW5pZmllZEFnYWluc3RFcXVpdmFsZW5jZSkge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgaWYgKHN1YnN0aXR1dGlvblVuaWZpZWQpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBzdGF0ZW1lbnRVbmlmaWVkQWdhaW5zdFN0YXRlbWVudCA9IHN1YnN0aXR1dGlvbnNVbmlmaWVkOyAgLy8vXG4gIH1cblxuICByZXR1cm4gc3RhdGVtZW50VW5pZmllZEFnYWluc3RTdGF0ZW1lbnQ7XG59Il0sIm5hbWVzIjpbIlByb29mU3RlcCIsInN1YnByb29mTm9kZSIsInN0YXRlbWVudE5vZGUiLCJnZXRTdWJwcm9vZk5vZGUiLCJnZXRTdGF0ZW1lbnROb2RlIiwidW5pZnlTdGF0ZW1lbnQiLCJlcXVpdmFsZW5jZXMiLCJsb2NhbENvbnRleHQiLCJzdGF0ZW1lbnRVbmlmaWVkIiwic3RhdGVtZW50VW5pZmllZEFnYWluc3RTdGF0ZW1lbnQiLCJzdGF0ZW1lbnROb2RlQSIsInN0YXRlbWVudE5vZGVCIiwidW5pZnlTdGF0ZW1lbnRBZ2FpbnN0U3RhdGVtZW50IiwiZnJvbVN1YnByb29mTm9kZSIsInByb29mU3RlcCIsImZyb21TdGF0ZW1lbnROb2RlIiwibm9kZUEiLCJub2RlQiIsImxvY2FsQ29udGV4dEEiLCJsb2NhbENvbnRleHRCIiwic3Vic3RpdHV0aW9ucyIsInVuaWZpZWQiLCJtZXRhTGV2ZWxVbmlmaWVyIiwidW5pZnkiLCJzdWJzdGl0dXRpb25zVW5pZmllZCIsImV2ZXJ5Iiwic3Vic3RpdHV0aW9uIiwic3Vic3RpdHV0aW9uVW5pZmllZCIsInNvbWUiLCJlcXVpdmFsZW5jZSIsInN1YnN0aXR1dGlvblVuaWZpZWRBZ2FpbnN0RXF1aXZhbGVuY2UiLCJ1bmlmeUFnYWluc3RFcXVpdmFsZW5jZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFJcUJBOzs7Z0VBRlE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFZCxJQUFBLEFBQU1BLDBCQUFELEFBQUw7YUFBTUEsVUFDUEMsWUFBWSxFQUFFQyxhQUFhO2dDQURwQkY7UUFFakIsSUFBSSxDQUFDQyxZQUFZLEdBQUdBO1FBQ3BCLElBQUksQ0FBQ0MsYUFBYSxHQUFHQTs7a0JBSEpGOztZQU1uQkcsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDRixZQUFZO1lBQzFCOzs7WUFFQUcsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDRixhQUFhO1lBQzNCOzs7WUFFQUcsS0FBQUE7bUJBQUFBLFNBQUFBLGVBQWVILGFBQWEsRUFBRUksWUFBWSxFQUFFQyxZQUFZO2dCQUN0RCxJQUFJQyxtQkFBbUI7Z0JBRXZCLElBQUksSUFBSSxDQUFDTixhQUFhLEtBQUssTUFBTTtvQkFDL0IsSUFBSU8sbUNBQW1DO29CQUV2QyxJQUFJLENBQUNBLGtDQUFrQzt3QkFDckMsSUFBTUMsaUJBQWlCUixlQUNqQlMsaUJBQWlCLElBQUksQ0FBQ1QsYUFBYSxFQUFHLEdBQUc7d0JBRS9DTyxtQ0FBbUNHLCtCQUErQkYsZ0JBQWdCQyxnQkFBZ0JMLGNBQWNDO29CQUNsSDtvQkFFQSxJQUFJLENBQUNFLGtDQUFrQzt3QkFDckMsSUFBTUMsa0JBQWlCUixlQUNqQlMsa0JBQWlCLElBQUksQ0FBQ1QsYUFBYSxFQUFHLEdBQUc7d0JBRS9DTyxtQ0FBbUNHLCtCQUErQkYsaUJBQWdCQyxpQkFBZ0JMLGNBQWNDO29CQUNsSDtvQkFFQUMsbUJBQW1CQyxrQ0FBbUMsR0FBRztnQkFDM0Q7Z0JBRUEsT0FBT0Q7WUFDVDs7OztZQUVPSyxLQUFBQTttQkFBUCxTQUFPQSxpQkFBaUJaLFlBQVk7Z0JBQ2xDLElBQU1DLGdCQUFnQixNQUNoQlksWUFBWSxJQTFDRGQsVUEwQ2VDLGNBQWNDO2dCQUU5QyxPQUFPWTtZQUNUOzs7WUFFT0MsS0FBQUE7bUJBQVAsU0FBT0Esa0JBQWtCYixhQUFhO2dCQUNwQyxJQUFNRCxlQUFlLE1BQ2ZhLFlBQVksSUFqRERkLFVBaURlQyxjQUFjQztnQkFFOUMsT0FBT1k7WUFDVDs7O1dBcERtQmQ7O0FBdURyQixTQUFTWSwrQkFBK0JGLGNBQWMsRUFBRUMsY0FBYyxFQUFFTCxZQUFZLEVBQUVDLFlBQVk7SUFDaEcsSUFBSUUsbUNBQW1DO0lBRXZDLElBQU1PLFFBQVFOLGdCQUNSTyxRQUFRTixnQkFDUk8sZ0JBQWdCWCxjQUNoQlksZ0JBQWdCWixjQUNoQmEsZ0JBQWdCLEVBQUUsRUFDbEJDLFVBQVVDLGtCQUFnQixDQUFDQyxLQUFLLENBQUNQLE9BQU9DLE9BQU9HLGVBQWVGLGVBQWVDO0lBRW5GLElBQUlFLFNBQVM7UUFDWCxJQUFNRyx1QkFBdUJKLGNBQWNLLEtBQUssQ0FBQyxTQUFDQztZQUNoRCxJQUFNQyxzQkFBc0JyQixhQUFhc0IsSUFBSSxDQUFDLFNBQUNDO2dCQUM3QyxJQUFNQyx3Q0FBd0NKLGFBQWFLLHVCQUF1QixDQUFDRixhQUFhVCxlQUFlYjtnQkFFL0csSUFBSXVCLHVDQUF1QztvQkFDekMsT0FBTztnQkFDVDtZQUNGO1lBRUEsSUFBSUgscUJBQXFCO2dCQUN2QixPQUFPO1lBQ1Q7UUFDRjtRQUVBbEIsbUNBQW1DZSxzQkFBdUIsR0FBRztJQUMvRDtJQUVBLE9BQU9mO0FBQ1QifQ==