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
var _ruleNames = require("../ruleNames");
var _proof = require("../utilities/proof");
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
            key: "match",
            value: function match(statementNode) {
                var matches;
                var statementMatches = this.matchStatement(statementNode);
                matches = statementMatches; //
                return matches;
            }
        },
        {
            key: "matchStatement",
            value: function matchStatement(statementNode) {
                var statementMatches = false;
                if (this.statementNode !== null) {
                    var ruleName = _ruleNames.META_ARGUMENT_RULE_NAME, statementNodeA = statementNode, statementNodeB = this.statementNode, statementMatchesModuloBrackets = (0, _proof.matchStatementModuloBrackets)(statementNodeA, statementNodeB, ruleName);
                    statementMatches = statementMatchesModuloBrackets; ///
                }
                return statementMatches;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zdGVwL3Byb29mLmpzIiwiPDxqc3gtY29uZmlnLXByYWdtYS5qcz4+Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBNRVRBX0FSR1VNRU5UX1JVTEVfTkFNRSB9IGZyb20gXCIuLi9ydWxlTmFtZXNcIjtcbmltcG9ydCB7IG1hdGNoU3RhdGVtZW50TW9kdWxvQnJhY2tldHMgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3Byb29mXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFByb29mU3RlcCB7XG4gIGNvbnN0cnVjdG9yKHN1YnByb29mTm9kZSwgc3RhdGVtZW50Tm9kZSkge1xuICAgIHRoaXMuc3VicHJvb2ZOb2RlID0gc3VicHJvb2ZOb2RlO1xuICAgIHRoaXMuc3RhdGVtZW50Tm9kZSA9IHN0YXRlbWVudE5vZGU7XG4gIH1cblxuICBnZXRTdWJwcm9vZk5vZGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3VicHJvb2ZOb2RlO1xuICB9XG5cbiAgZ2V0U3RhdGVtZW50Tm9kZSgpIHtcbiAgICByZXR1cm4gdGhpcy5zdGF0ZW1lbnROb2RlO1xuICB9XG5cbiAgbWF0Y2goc3RhdGVtZW50Tm9kZSkge1xuICAgIGxldCBtYXRjaGVzO1xuXG4gICAgY29uc3Qgc3RhdGVtZW50TWF0Y2hlcyA9IHRoaXMubWF0Y2hTdGF0ZW1lbnQoc3RhdGVtZW50Tm9kZSk7XG5cbiAgICBtYXRjaGVzID0gc3RhdGVtZW50TWF0Y2hlczsgLy9cblxuICAgIHJldHVybiBtYXRjaGVzO1xuICB9XG5cbiAgbWF0Y2hTdGF0ZW1lbnQoc3RhdGVtZW50Tm9kZSkge1xuICAgIGxldCBzdGF0ZW1lbnRNYXRjaGVzID0gZmFsc2U7XG5cbiAgICBpZiAodGhpcy5zdGF0ZW1lbnROb2RlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBydWxlTmFtZSA9IE1FVEFfQVJHVU1FTlRfUlVMRV9OQU1FLFxuICAgICAgICAgICAgc3RhdGVtZW50Tm9kZUEgPSBzdGF0ZW1lbnROb2RlLCAvLy9cbiAgICAgICAgICAgIHN0YXRlbWVudE5vZGVCID0gdGhpcy5zdGF0ZW1lbnROb2RlLCAgLy8vXG4gICAgICAgICAgICBzdGF0ZW1lbnRNYXRjaGVzTW9kdWxvQnJhY2tldHMgPSBtYXRjaFN0YXRlbWVudE1vZHVsb0JyYWNrZXRzKHN0YXRlbWVudE5vZGVBLCBzdGF0ZW1lbnROb2RlQiwgcnVsZU5hbWUpO1xuXG4gICAgICBzdGF0ZW1lbnRNYXRjaGVzID0gc3RhdGVtZW50TWF0Y2hlc01vZHVsb0JyYWNrZXRzOyAgLy8vXG4gICAgfVxuXG4gICAgcmV0dXJuIHN0YXRlbWVudE1hdGNoZXM7XG4gIH1cblxuICBzdGF0aWMgZnJvbVN1YnByb29mTm9kZShzdWJwcm9vZk5vZGUpIHtcbiAgICBjb25zdCBzdGF0ZW1lbnROb2RlID0gbnVsbCxcbiAgICAgICAgICBtZXRhUHJvb2ZTdGVwID0gbmV3IFByb29mU3RlcChzdWJwcm9vZk5vZGUsIHN0YXRlbWVudE5vZGUpO1xuXG4gICAgcmV0dXJuIG1ldGFQcm9vZlN0ZXA7XG4gIH1cblxuICBzdGF0aWMgZnJvbVN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSkge1xuICAgIGNvbnN0IHN1YnByb29mTm9kZSA9IG51bGwsXG4gICAgICAgICAgbWV0YVByb29mU3RlcCA9IG5ldyBQcm9vZlN0ZXAoc3VicHJvb2ZOb2RlLCBzdGF0ZW1lbnROb2RlKTtcblxuICAgIHJldHVybiBtZXRhUHJvb2ZTdGVwO1xuICB9XG59XG4iLCJSZWFjdC5jcmVhdGVFbGVtZW50Il0sIm5hbWVzIjpbIlByb29mU3RlcCIsInN1YnByb29mTm9kZSIsInN0YXRlbWVudE5vZGUiLCJnZXRTdWJwcm9vZk5vZGUiLCJnZXRTdGF0ZW1lbnROb2RlIiwibWF0Y2giLCJtYXRjaGVzIiwic3RhdGVtZW50TWF0Y2hlcyIsIm1hdGNoU3RhdGVtZW50IiwicnVsZU5hbWUiLCJNRVRBX0FSR1VNRU5UX1JVTEVfTkFNRSIsInN0YXRlbWVudE5vZGVBIiwic3RhdGVtZW50Tm9kZUIiLCJzdGF0ZW1lbnRNYXRjaGVzTW9kdWxvQnJhY2tldHMiLCJtYXRjaFN0YXRlbWVudE1vZHVsb0JyYWNrZXRzIiwiZnJvbVN1YnByb29mTm9kZSIsIm1ldGFQcm9vZlN0ZXAiLCJmcm9tU3RhdGVtZW50Tm9kZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFLcUJBOzs7eUJBSG1CO3FCQUNLOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUU5QixJQUFBLEFBQU1BLDBCQUFOO2FBQU1BLFVBQ1BDLFlBQVksRUFBRUMsYUFBYTs4QkFEcEJGO1FBRWpCLElBQUksQ0FBQ0MsWUFBWSxHQUFHQTtRQUNwQixJQUFJLENBQUNDLGFBQWEsR0FBR0E7O2lCQUhKRjs7WUFNbkJHLEtBQUFBO21CQUFBQSxTQUFBQSxrQkFBa0I7Z0JBQ2hCLE9BQU8sSUFBSSxDQUFDRixZQUFZO1lBQzFCOzs7WUFFQUcsS0FBQUE7bUJBQUFBLFNBQUFBLG1CQUFtQjtnQkFDakIsT0FBTyxJQUFJLENBQUNGLGFBQWE7WUFDM0I7OztZQUVBRyxLQUFBQTttQkFBQUEsU0FBQUEsTUFBTUgsYUFBYSxFQUFFO2dCQUNuQixJQUFJSTtnQkFFSixJQUFNQyxtQkFBbUIsSUFBSSxDQUFDQyxjQUFjLENBQUNOO2dCQUU3Q0ksVUFBVUMsa0JBQWtCLEVBQUU7Z0JBRTlCLE9BQU9EO1lBQ1Q7OztZQUVBRSxLQUFBQTttQkFBQUEsU0FBQUEsZUFBZU4sYUFBYSxFQUFFO2dCQUM1QixJQUFJSyxtQkFBbUIsS0FBSztnQkFFNUIsSUFBSSxJQUFJLENBQUNMLGFBQWEsS0FBSyxJQUFJLEVBQUU7b0JBQy9CLElBQU1PLFdBQVdDLGtDQUF1QixFQUNsQ0MsaUJBQWlCVCxlQUNqQlUsaUJBQWlCLElBQUksQ0FBQ1YsYUFBYSxFQUNuQ1csaUNBQWlDQyxJQUFBQSxtQ0FBNEIsRUFBQ0gsZ0JBQWdCQyxnQkFBZ0JIO29CQUVwR0YsbUJBQW1CTSxnQ0FBaUMsR0FBRztnQkFDekQsQ0FBQztnQkFFRCxPQUFPTjtZQUNUOzs7O1lBRU9RLEtBQUFBO21CQUFQLFNBQU9BLGlCQUFpQmQsWUFBWSxFQUFFO2dCQUNwQyxJQUFNQyxnQkFBZ0IsSUFBSSxFQUNwQmMsZ0JBQWdCLElBekNMaEIsVUF5Q21CQyxjQUFjQztnQkFFbEQsT0FBT2M7WUFDVDs7O1lBRU9DLEtBQUFBO21CQUFQLFNBQU9BLGtCQUFrQmYsYUFBYSxFQUFFO2dCQUN0QyxJQUFNRCxlQUFlLElBQUksRUFDbkJlLGdCQUFnQixJQWhETGhCLFVBZ0RtQkMsY0FBY0M7Z0JBRWxELE9BQU9jO1lBQ1Q7OztXQW5EbUJoQiJ9