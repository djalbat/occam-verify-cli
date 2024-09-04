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
            key: "matchStatementNode",
            value: function matchStatementNode(statementNode) {
                var matchesStatementNode = false;
                if (this.statementNode !== null) {
                    matchesStatementNode = this.statementNode.match(statementNode);
                }
                return matchesStatementNode;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9wcm9vZlN0ZXAuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFByb29mU3RlcCB7XG4gIGNvbnN0cnVjdG9yKHN1YnByb29mTm9kZSwgc3RhdGVtZW50Tm9kZSkge1xuICAgIHRoaXMuc3VicHJvb2ZOb2RlID0gc3VicHJvb2ZOb2RlO1xuICAgIHRoaXMuc3RhdGVtZW50Tm9kZSA9IHN0YXRlbWVudE5vZGU7XG4gIH1cblxuICBnZXRTdWJwcm9vZk5vZGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3VicHJvb2ZOb2RlO1xuICB9XG5cbiAgZ2V0U3RhdGVtZW50Tm9kZSgpIHtcbiAgICByZXR1cm4gdGhpcy5zdGF0ZW1lbnROb2RlO1xuICB9XG5cbiAgbWF0Y2hTdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUpIHtcbiAgICBsZXQgbWF0Y2hlc1N0YXRlbWVudE5vZGUgPSBmYWxzZTtcblxuICAgIGlmICh0aGlzLnN0YXRlbWVudE5vZGUgIT09IG51bGwpIHtcbiAgICAgIG1hdGNoZXNTdGF0ZW1lbnROb2RlID0gdGhpcy5zdGF0ZW1lbnROb2RlLm1hdGNoKHN0YXRlbWVudE5vZGUpO1xuICAgIH1cblxuICAgIHJldHVybiBtYXRjaGVzU3RhdGVtZW50Tm9kZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tU3VicHJvb2ZOb2RlKHN1YnByb29mTm9kZSkge1xuICAgIGNvbnN0IHN0YXRlbWVudE5vZGUgPSBudWxsLFxuICAgICAgICAgIHByb29mU3RlcCA9IG5ldyBQcm9vZlN0ZXAoc3VicHJvb2ZOb2RlLCBzdGF0ZW1lbnROb2RlKTtcblxuICAgIHJldHVybiBwcm9vZlN0ZXA7XG4gIH1cblxuICBzdGF0aWMgZnJvbVN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSkge1xuICAgIGNvbnN0IHN1YnByb29mTm9kZSA9IG51bGwsXG4gICAgICAgICAgcHJvb2ZTdGVwID0gbmV3IFByb29mU3RlcChzdWJwcm9vZk5vZGUsIHN0YXRlbWVudE5vZGUpO1xuXG4gICAgcmV0dXJuIHByb29mU3RlcDtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIlByb29mU3RlcCIsInN1YnByb29mTm9kZSIsInN0YXRlbWVudE5vZGUiLCJnZXRTdWJwcm9vZk5vZGUiLCJnZXRTdGF0ZW1lbnROb2RlIiwibWF0Y2hTdGF0ZW1lbnROb2RlIiwibWF0Y2hlc1N0YXRlbWVudE5vZGUiLCJtYXRjaCIsImZyb21TdWJwcm9vZk5vZGUiLCJwcm9vZlN0ZXAiLCJmcm9tU3RhdGVtZW50Tm9kZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFFcUJBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQU4sSUFBQSxBQUFNQSwwQkFBRCxBQUFMO2FBQU1BLFVBQ1BDLFlBQVksRUFBRUMsYUFBYTtnQ0FEcEJGO1FBRWpCLElBQUksQ0FBQ0MsWUFBWSxHQUFHQTtRQUNwQixJQUFJLENBQUNDLGFBQWEsR0FBR0E7O2tCQUhKRjs7WUFNbkJHLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0YsWUFBWTtZQUMxQjs7O1lBRUFHLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0YsYUFBYTtZQUMzQjs7O1lBRUFHLEtBQUFBO21CQUFBQSxTQUFBQSxtQkFBbUJILGFBQWE7Z0JBQzlCLElBQUlJLHVCQUF1QjtnQkFFM0IsSUFBSSxJQUFJLENBQUNKLGFBQWEsS0FBSyxNQUFNO29CQUMvQkksdUJBQXVCLElBQUksQ0FBQ0osYUFBYSxDQUFDSyxLQUFLLENBQUNMO2dCQUNsRDtnQkFFQSxPQUFPSTtZQUNUOzs7O1lBRU9FLEtBQUFBO21CQUFQLFNBQU9BLGlCQUFpQlAsWUFBWTtnQkFDbEMsSUFBTUMsZ0JBQWdCLE1BQ2hCTyxZQUFZLElBMUJEVCxVQTBCZUMsY0FBY0M7Z0JBRTlDLE9BQU9PO1lBQ1Q7OztZQUVPQyxLQUFBQTttQkFBUCxTQUFPQSxrQkFBa0JSLGFBQWE7Z0JBQ3BDLElBQU1ELGVBQWUsTUFDZlEsWUFBWSxJQWpDRFQsVUFpQ2VDLGNBQWNDO2dCQUU5QyxPQUFPTztZQUNUOzs7V0FwQ21CVCJ9