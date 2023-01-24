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
var _substitution = require("../utilities/substitution");
function _classCallCheck(instance, Constructor) {
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
function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
var ProofStep = /*#__PURE__*/ function() {
    function ProofStep(subproofNode, statementNode) {
        _classCallCheck(this, ProofStep);
        this.subproofNode = subproofNode;
        this.statementNode = statementNode;
    }
    _createClass(ProofStep, [
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
            key: "matchStatement",
            value: function matchStatement(statementNode) {
                var statementMatches;
                var statementsMatch = this.matchStatements(statementNode);
                statementMatches = statementsMatch; //
                return statementMatches;
            }
        },
        {
            key: "matchStatements",
            value: function matchStatements(statementNode) {
                var statementsMatch = false;
                if (this.statementNode !== null) {
                    var nonTerminalNodeA = statementNode, nonTerminalNodeB = this.statementNode, bracketedNodeMatches = (0, _substitution.matchBracketedNonTerminalNode)(nonTerminalNodeA, nonTerminalNodeB), statementNodeMatches = bracketedNodeMatches; ///
                    return statementNodeMatches;
                }
                return statementsMatch;
            }
        }
    ], [
        {
            key: "fromSubproofNode",
            value: function fromSubproofNode(subproofNode) {
                var statementNode = null, metaProofStep = new ProofStep(subproofNode, statementNode);
                return metaProofStep;
            }
        },
        {
            key: "fromStatementNode",
            value: function fromStatementNode(statementNode) {
                var subproofNode = null, metaProofStep = new ProofStep(subproofNode, statementNode);
                return metaProofStep;
            }
        }
    ]);
    return ProofStep;
}();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zdGVwL3Byb29mLmpzIiwiPDxqc3gtY29uZmlnLXByYWdtYS5qcz4+Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBtYXRjaEJyYWNrZXRlZE5vblRlcm1pbmFsTm9kZSB9IGZyb20gXCIuLi91dGlsaXRpZXMvc3Vic3RpdHV0aW9uXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFByb29mU3RlcCB7XG4gIGNvbnN0cnVjdG9yKHN1YnByb29mTm9kZSwgc3RhdGVtZW50Tm9kZSkge1xuICAgIHRoaXMuc3VicHJvb2ZOb2RlID0gc3VicHJvb2ZOb2RlO1xuICAgIHRoaXMuc3RhdGVtZW50Tm9kZSA9IHN0YXRlbWVudE5vZGU7XG4gIH1cblxuICBnZXRTdWJwcm9vZk5vZGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3VicHJvb2ZOb2RlO1xuICB9XG5cbiAgZ2V0U3RhdGVtZW50Tm9kZSgpIHtcbiAgICByZXR1cm4gdGhpcy5zdGF0ZW1lbnROb2RlO1xuICB9XG5cbiAgbWF0Y2hTdGF0ZW1lbnQoc3RhdGVtZW50Tm9kZSkge1xuICAgIGxldCBzdGF0ZW1lbnRNYXRjaGVzO1xuXG4gICAgY29uc3Qgc3RhdGVtZW50c01hdGNoID0gdGhpcy5tYXRjaFN0YXRlbWVudHMoc3RhdGVtZW50Tm9kZSk7XG5cbiAgICBzdGF0ZW1lbnRNYXRjaGVzID0gc3RhdGVtZW50c01hdGNoOyAvL1xuXG4gICAgcmV0dXJuIHN0YXRlbWVudE1hdGNoZXM7XG4gIH1cblxuICBtYXRjaFN0YXRlbWVudHMoc3RhdGVtZW50Tm9kZSkge1xuICAgIGxldCBzdGF0ZW1lbnRzTWF0Y2ggPSBmYWxzZTtcblxuICAgIGlmICh0aGlzLnN0YXRlbWVudE5vZGUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IG5vblRlcm1pbmFsTm9kZUEgPSBzdGF0ZW1lbnROb2RlLCAvLy9cbiAgICAgICAgICAgIG5vblRlcm1pbmFsTm9kZUIgPSB0aGlzLnN0YXRlbWVudE5vZGUsICAvLy9cbiAgICAgICAgICAgIGJyYWNrZXRlZE5vZGVNYXRjaGVzID0gbWF0Y2hCcmFja2V0ZWROb25UZXJtaW5hbE5vZGUobm9uVGVybWluYWxOb2RlQSwgbm9uVGVybWluYWxOb2RlQiksXG4gICAgICAgICAgICBzdGF0ZW1lbnROb2RlTWF0Y2hlcyA9IGJyYWNrZXRlZE5vZGVNYXRjaGVzOyAgLy8vXG5cbiAgICAgIHJldHVybiBzdGF0ZW1lbnROb2RlTWF0Y2hlcztcbiAgICB9XG5cbiAgICByZXR1cm4gc3RhdGVtZW50c01hdGNoO1xuICB9XG5cbiAgc3RhdGljIGZyb21TdWJwcm9vZk5vZGUoc3VicHJvb2ZOb2RlKSB7XG4gICAgY29uc3Qgc3RhdGVtZW50Tm9kZSA9IG51bGwsXG4gICAgICAgICAgbWV0YVByb29mU3RlcCA9IG5ldyBQcm9vZlN0ZXAoc3VicHJvb2ZOb2RlLCBzdGF0ZW1lbnROb2RlKTtcblxuICAgIHJldHVybiBtZXRhUHJvb2ZTdGVwO1xuICB9XG5cbiAgc3RhdGljIGZyb21TdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUpIHtcbiAgICBjb25zdCBzdWJwcm9vZk5vZGUgPSBudWxsLFxuICAgICAgICAgIG1ldGFQcm9vZlN0ZXAgPSBuZXcgUHJvb2ZTdGVwKHN1YnByb29mTm9kZSwgc3RhdGVtZW50Tm9kZSk7XG5cbiAgICByZXR1cm4gbWV0YVByb29mU3RlcDtcbiAgfVxufVxuIiwiUmVhY3QuY3JlYXRlRWxlbWVudCJdLCJuYW1lcyI6WyJQcm9vZlN0ZXAiLCJzdWJwcm9vZk5vZGUiLCJzdGF0ZW1lbnROb2RlIiwiZ2V0U3VicHJvb2ZOb2RlIiwiZ2V0U3RhdGVtZW50Tm9kZSIsIm1hdGNoU3RhdGVtZW50Iiwic3RhdGVtZW50TWF0Y2hlcyIsInN0YXRlbWVudHNNYXRjaCIsIm1hdGNoU3RhdGVtZW50cyIsIm5vblRlcm1pbmFsTm9kZUEiLCJub25UZXJtaW5hbE5vZGVCIiwiYnJhY2tldGVkTm9kZU1hdGNoZXMiLCJtYXRjaEJyYWNrZXRlZE5vblRlcm1pbmFsTm9kZSIsInN0YXRlbWVudE5vZGVNYXRjaGVzIiwiZnJvbVN1YnByb29mTm9kZSIsIm1ldGFQcm9vZlN0ZXAiLCJmcm9tU3RhdGVtZW50Tm9kZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFJcUJBOzs7NEJBRnlCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUUvQixJQUFBLEFBQU1BLDBCQUFOO2FBQU1BLFVBQ1BDLFlBQVksRUFBRUMsYUFBYTs4QkFEcEJGO1FBRWpCLElBQUksQ0FBQ0MsWUFBWSxHQUFHQTtRQUNwQixJQUFJLENBQUNDLGFBQWEsR0FBR0E7O2lCQUhKRjs7WUFNbkJHLEtBQUFBO21CQUFBQSxTQUFBQSxrQkFBa0I7Z0JBQ2hCLE9BQU8sSUFBSSxDQUFDRixZQUFZO1lBQzFCOzs7WUFFQUcsS0FBQUE7bUJBQUFBLFNBQUFBLG1CQUFtQjtnQkFDakIsT0FBTyxJQUFJLENBQUNGLGFBQWE7WUFDM0I7OztZQUVBRyxLQUFBQTttQkFBQUEsU0FBQUEsZUFBZUgsYUFBYSxFQUFFO2dCQUM1QixJQUFJSTtnQkFFSixJQUFNQyxrQkFBa0IsSUFBSSxDQUFDQyxlQUFlLENBQUNOO2dCQUU3Q0ksbUJBQW1CQyxpQkFBaUIsRUFBRTtnQkFFdEMsT0FBT0Q7WUFDVDs7O1lBRUFFLEtBQUFBO21CQUFBQSxTQUFBQSxnQkFBZ0JOLGFBQWEsRUFBRTtnQkFDN0IsSUFBSUssa0JBQWtCLEtBQUs7Z0JBRTNCLElBQUksSUFBSSxDQUFDTCxhQUFhLEtBQUssSUFBSSxFQUFFO29CQUMvQixJQUFNTyxtQkFBbUJQLGVBQ25CUSxtQkFBbUIsSUFBSSxDQUFDUixhQUFhLEVBQ3JDUyx1QkFBdUJDLElBQUFBLDJDQUE2QixFQUFDSCxrQkFBa0JDLG1CQUN2RUcsdUJBQXVCRixzQkFBdUIsR0FBRztvQkFFdkQsT0FBT0U7Z0JBQ1QsQ0FBQztnQkFFRCxPQUFPTjtZQUNUOzs7O1lBRU9PLEtBQUFBO21CQUFQLFNBQU9BLGlCQUFpQmIsWUFBWSxFQUFFO2dCQUNwQyxJQUFNQyxnQkFBZ0IsSUFBSSxFQUNwQmEsZ0JBQWdCLElBekNMZixVQXlDbUJDLGNBQWNDO2dCQUVsRCxPQUFPYTtZQUNUOzs7WUFFT0MsS0FBQUE7bUJBQVAsU0FBT0Esa0JBQWtCZCxhQUFhLEVBQUU7Z0JBQ3RDLElBQU1ELGVBQWUsSUFBSSxFQUNuQmMsZ0JBQWdCLElBaERMZixVQWdEbUJDLGNBQWNDO2dCQUVsRCxPQUFPYTtZQUNUOzs7V0FuRG1CZiJ9