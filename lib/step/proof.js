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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zdGVwL3Byb29mLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBNRVRBX0FSR1VNRU5UX1JVTEVfTkFNRSB9IGZyb20gXCIuLi9ydWxlTmFtZXNcIjtcbmltcG9ydCB7IG1hdGNoU3RhdGVtZW50TW9kdWxvQnJhY2tldHMgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3Byb29mXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFByb29mU3RlcCB7XG4gIGNvbnN0cnVjdG9yKHN1YnByb29mTm9kZSwgc3RhdGVtZW50Tm9kZSkge1xuICAgIHRoaXMuc3VicHJvb2ZOb2RlID0gc3VicHJvb2ZOb2RlO1xuICAgIHRoaXMuc3RhdGVtZW50Tm9kZSA9IHN0YXRlbWVudE5vZGU7XG4gIH1cblxuICBnZXRTdWJwcm9vZk5vZGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3VicHJvb2ZOb2RlO1xuICB9XG5cbiAgZ2V0U3RhdGVtZW50Tm9kZSgpIHtcbiAgICByZXR1cm4gdGhpcy5zdGF0ZW1lbnROb2RlO1xuICB9XG5cbiAgbWF0Y2goc3RhdGVtZW50Tm9kZSkge1xuICAgIGxldCBtYXRjaGVzO1xuXG4gICAgY29uc3Qgc3RhdGVtZW50TWF0Y2hlcyA9IHRoaXMubWF0Y2hTdGF0ZW1lbnQoc3RhdGVtZW50Tm9kZSk7XG5cbiAgICBtYXRjaGVzID0gc3RhdGVtZW50TWF0Y2hlczsgLy9cblxuICAgIHJldHVybiBtYXRjaGVzO1xuICB9XG5cbiAgbWF0Y2hTdGF0ZW1lbnQoc3RhdGVtZW50Tm9kZSkge1xuICAgIGxldCBzdGF0ZW1lbnRNYXRjaGVzID0gZmFsc2U7XG5cbiAgICBpZiAodGhpcy5zdGF0ZW1lbnROb2RlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBydWxlTmFtZSA9IE1FVEFfQVJHVU1FTlRfUlVMRV9OQU1FLFxuICAgICAgICAgICAgc3RhdGVtZW50Tm9kZUEgPSBzdGF0ZW1lbnROb2RlLCAvLy9cbiAgICAgICAgICAgIHN0YXRlbWVudE5vZGVCID0gdGhpcy5zdGF0ZW1lbnROb2RlLCAgLy8vXG4gICAgICAgICAgICBzdGF0ZW1lbnRNYXRjaGVzTW9kdWxvQnJhY2tldHMgPSBtYXRjaFN0YXRlbWVudE1vZHVsb0JyYWNrZXRzKHN0YXRlbWVudE5vZGVBLCBzdGF0ZW1lbnROb2RlQiwgcnVsZU5hbWUpO1xuXG4gICAgICBzdGF0ZW1lbnRNYXRjaGVzID0gc3RhdGVtZW50TWF0Y2hlc01vZHVsb0JyYWNrZXRzOyAgLy8vXG4gICAgfVxuXG4gICAgcmV0dXJuIHN0YXRlbWVudE1hdGNoZXM7XG4gIH1cblxuICBzdGF0aWMgZnJvbVN1YnByb29mTm9kZShzdWJwcm9vZk5vZGUpIHtcbiAgICBjb25zdCBzdGF0ZW1lbnROb2RlID0gbnVsbCxcbiAgICAgICAgICBtZXRhUHJvb2ZTdGVwID0gbmV3IFByb29mU3RlcChzdWJwcm9vZk5vZGUsIHN0YXRlbWVudE5vZGUpO1xuXG4gICAgcmV0dXJuIG1ldGFQcm9vZlN0ZXA7XG4gIH1cblxuICBzdGF0aWMgZnJvbVN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSkge1xuICAgIGNvbnN0IHN1YnByb29mTm9kZSA9IG51bGwsXG4gICAgICAgICAgbWV0YVByb29mU3RlcCA9IG5ldyBQcm9vZlN0ZXAoc3VicHJvb2ZOb2RlLCBzdGF0ZW1lbnROb2RlKTtcblxuICAgIHJldHVybiBtZXRhUHJvb2ZTdGVwO1xuICB9XG59XG4iXSwibmFtZXMiOlsiUHJvb2ZTdGVwIiwic3VicHJvb2ZOb2RlIiwic3RhdGVtZW50Tm9kZSIsImdldFN1YnByb29mTm9kZSIsImdldFN0YXRlbWVudE5vZGUiLCJtYXRjaCIsIm1hdGNoZXMiLCJzdGF0ZW1lbnRNYXRjaGVzIiwibWF0Y2hTdGF0ZW1lbnQiLCJydWxlTmFtZSIsIk1FVEFfQVJHVU1FTlRfUlVMRV9OQU1FIiwic3RhdGVtZW50Tm9kZUEiLCJzdGF0ZW1lbnROb2RlQiIsInN0YXRlbWVudE1hdGNoZXNNb2R1bG9CcmFja2V0cyIsIm1hdGNoU3RhdGVtZW50TW9kdWxvQnJhY2tldHMiLCJmcm9tU3VicHJvb2ZOb2RlIiwibWV0YVByb29mU3RlcCIsImZyb21TdGF0ZW1lbnROb2RlIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQUtxQkE7Ozt5QkFIbUI7cUJBQ0s7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTlCLElBQUEsQUFBTUEsMEJBQUQsQUFBTDthQUFNQSxVQUNQQyxZQUFZLEVBQUVDLGFBQWE7Z0NBRHBCRjtRQUVqQixJQUFJLENBQUNDLFlBQVksR0FBR0E7UUFDcEIsSUFBSSxDQUFDQyxhQUFhLEdBQUdBOztrQkFISkY7O1lBTW5CRyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNGLFlBQVk7WUFDMUI7OztZQUVBRyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNGLGFBQWE7WUFDM0I7OztZQUVBRyxLQUFBQTttQkFBQUEsU0FBQUEsTUFBTUgsYUFBYTtnQkFDakIsSUFBSUk7Z0JBRUosSUFBTUMsbUJBQW1CLElBQUksQ0FBQ0MsY0FBYyxDQUFDTjtnQkFFN0NJLFVBQVVDLGtCQUFrQixFQUFFO2dCQUU5QixPQUFPRDtZQUNUOzs7WUFFQUUsS0FBQUE7bUJBQUFBLFNBQUFBLGVBQWVOLGFBQWE7Z0JBQzFCLElBQUlLLG1CQUFtQjtnQkFFdkIsSUFBSSxJQUFJLENBQUNMLGFBQWEsS0FBSyxNQUFNO29CQUMvQixJQUFNTyxXQUFXQyxrQ0FBdUIsRUFDbENDLGlCQUFpQlQsZUFDakJVLGlCQUFpQixJQUFJLENBQUNWLGFBQWEsRUFDbkNXLGlDQUFpQ0MsSUFBQUEsbUNBQTRCLEVBQUNILGdCQUFnQkMsZ0JBQWdCSDtvQkFFcEdGLG1CQUFtQk0sZ0NBQWlDLEdBQUc7Z0JBQ3pEO2dCQUVBLE9BQU9OO1lBQ1Q7Ozs7WUFFT1EsS0FBQUE7bUJBQVAsU0FBT0EsaUJBQWlCZCxZQUFZO2dCQUNsQyxJQUFNQyxnQkFBZ0IsTUFDaEJjLGdCQUFnQixJQXpDTGhCLFVBeUNtQkMsY0FBY0M7Z0JBRWxELE9BQU9jO1lBQ1Q7OztZQUVPQyxLQUFBQTttQkFBUCxTQUFPQSxrQkFBa0JmLGFBQWE7Z0JBQ3BDLElBQU1ELGVBQWUsTUFDZmUsZ0JBQWdCLElBaERMaEIsVUFnRG1CQyxjQUFjQztnQkFFbEQsT0FBT2M7WUFDVDs7O1dBbkRtQmhCIn0=