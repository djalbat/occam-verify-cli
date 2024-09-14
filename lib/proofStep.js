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
var _statementWithSttaemetnGivenEquivalences = /*#__PURE__*/ _interop_require_default(require("./unify/statementWithSttaemetnGivenEquivalences"));
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
            value: function unifyStatement(statementNodeB, equivalences, localContextA, localContextB) {
                var statementUnified = false;
                if (this.statementNode !== null) {
                    var statementNodeA = this.statementNode, statementUnifiedWithStatement = (0, _statementWithSttaemetnGivenEquivalences.default)(statementNodeA, statementNodeB, equivalences, localContextA, localContextB);
                    statementUnified = statementUnifiedWithStatement; ///
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9wcm9vZlN0ZXAuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB1bmlmeVN0YXRlbWVudFdpdGhTdGF0ZW1lbnRHaXZlbkVxdWl2YWxlbmNlcyBmcm9tIFwiLi91bmlmeS9zdGF0ZW1lbnRXaXRoU3R0YWVtZXRuR2l2ZW5FcXVpdmFsZW5jZXNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJvb2ZTdGVwIHtcbiAgY29uc3RydWN0b3Ioc3VicHJvb2ZOb2RlLCBzdGF0ZW1lbnROb2RlKSB7XG4gICAgdGhpcy5zdWJwcm9vZk5vZGUgPSBzdWJwcm9vZk5vZGU7XG4gICAgdGhpcy5zdGF0ZW1lbnROb2RlID0gc3RhdGVtZW50Tm9kZTtcbiAgfVxuXG4gIGdldFN1YnByb29mTm9kZSgpIHtcbiAgICByZXR1cm4gdGhpcy5zdWJwcm9vZk5vZGU7XG4gIH1cblxuICBnZXRTdGF0ZW1lbnROb2RlKCkge1xuICAgIHJldHVybiB0aGlzLnN0YXRlbWVudE5vZGU7XG4gIH1cblxuICB1bmlmeVN0YXRlbWVudChzdGF0ZW1lbnROb2RlQiwgZXF1aXZhbGVuY2VzLCBsb2NhbENvbnRleHRBLCBsb2NhbENvbnRleHRCKSB7XG4gICAgbGV0IHN0YXRlbWVudFVuaWZpZWQgPSBmYWxzZTtcblxuICAgIGlmICh0aGlzLnN0YXRlbWVudE5vZGUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHN0YXRlbWVudE5vZGVBID0gdGhpcy5zdGF0ZW1lbnROb2RlLCAgLy8vXG4gICAgICAgICAgICBzdGF0ZW1lbnRVbmlmaWVkV2l0aFN0YXRlbWVudCA9IHVuaWZ5U3RhdGVtZW50V2l0aFN0YXRlbWVudEdpdmVuRXF1aXZhbGVuY2VzKHN0YXRlbWVudE5vZGVBLCBzdGF0ZW1lbnROb2RlQiwgZXF1aXZhbGVuY2VzLCBsb2NhbENvbnRleHRBLCBsb2NhbENvbnRleHRCKTtcblxuICAgICAgc3RhdGVtZW50VW5pZmllZCA9IHN0YXRlbWVudFVuaWZpZWRXaXRoU3RhdGVtZW50OyAgLy8vXG4gICAgfVxuXG4gICAgcmV0dXJuIHN0YXRlbWVudFVuaWZpZWQ7XG4gIH1cblxuICBzdGF0aWMgZnJvbVN1YnByb29mTm9kZShzdWJwcm9vZk5vZGUpIHtcbiAgICBjb25zdCBzdGF0ZW1lbnROb2RlID0gbnVsbCxcbiAgICAgICAgICBwcm9vZlN0ZXAgPSBuZXcgUHJvb2ZTdGVwKHN1YnByb29mTm9kZSwgc3RhdGVtZW50Tm9kZSk7XG5cbiAgICByZXR1cm4gcHJvb2ZTdGVwO1xuICB9XG5cbiAgc3RhdGljIGZyb21TdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUpIHtcbiAgICBjb25zdCBzdWJwcm9vZk5vZGUgPSBudWxsLFxuICAgICAgICAgIHByb29mU3RlcCA9IG5ldyBQcm9vZlN0ZXAoc3VicHJvb2ZOb2RlLCBzdGF0ZW1lbnROb2RlKTtcblxuICAgIHJldHVybiBwcm9vZlN0ZXA7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJQcm9vZlN0ZXAiLCJzdWJwcm9vZk5vZGUiLCJzdGF0ZW1lbnROb2RlIiwiZ2V0U3VicHJvb2ZOb2RlIiwiZ2V0U3RhdGVtZW50Tm9kZSIsInVuaWZ5U3RhdGVtZW50Iiwic3RhdGVtZW50Tm9kZUIiLCJlcXVpdmFsZW5jZXMiLCJsb2NhbENvbnRleHRBIiwibG9jYWxDb250ZXh0QiIsInN0YXRlbWVudFVuaWZpZWQiLCJzdGF0ZW1lbnROb2RlQSIsInN0YXRlbWVudFVuaWZpZWRXaXRoU3RhdGVtZW50IiwidW5pZnlTdGF0ZW1lbnRXaXRoU3RhdGVtZW50R2l2ZW5FcXVpdmFsZW5jZXMiLCJmcm9tU3VicHJvb2ZOb2RlIiwicHJvb2ZTdGVwIiwiZnJvbVN0YXRlbWVudE5vZGUiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBSXFCQTs7OzhGQUZvQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUUxQyxJQUFBLEFBQU1BLDBCQUFOO2FBQU1BLFVBQ1BDLFlBQVksRUFBRUMsYUFBYTtnQ0FEcEJGO1FBRWpCLElBQUksQ0FBQ0MsWUFBWSxHQUFHQTtRQUNwQixJQUFJLENBQUNDLGFBQWEsR0FBR0E7O2tCQUhKRjs7WUFNbkJHLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0YsWUFBWTtZQUMxQjs7O1lBRUFHLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0YsYUFBYTtZQUMzQjs7O1lBRUFHLEtBQUFBO21CQUFBQSxTQUFBQSxlQUFlQyxjQUFjLEVBQUVDLFlBQVksRUFBRUMsYUFBYSxFQUFFQyxhQUFhO2dCQUN2RSxJQUFJQyxtQkFBbUI7Z0JBRXZCLElBQUksSUFBSSxDQUFDUixhQUFhLEtBQUssTUFBTTtvQkFDL0IsSUFBTVMsaUJBQWlCLElBQUksQ0FBQ1QsYUFBYSxFQUNuQ1UsZ0NBQWdDQyxJQUFBQSxnREFBNEMsRUFBQ0YsZ0JBQWdCTCxnQkFBZ0JDLGNBQWNDLGVBQWVDO29CQUVoSkMsbUJBQW1CRSwrQkFBZ0MsR0FBRztnQkFDeEQ7Z0JBRUEsT0FBT0Y7WUFDVDs7OztZQUVPSSxLQUFBQTttQkFBUCxTQUFPQSxpQkFBaUJiLFlBQVk7Z0JBQ2xDLElBQU1DLGdCQUFnQixNQUNoQmEsWUFBWSxJQTdCRGYsVUE2QmVDLGNBQWNDO2dCQUU5QyxPQUFPYTtZQUNUOzs7WUFFT0MsS0FBQUE7bUJBQVAsU0FBT0Esa0JBQWtCZCxhQUFhO2dCQUNwQyxJQUFNRCxlQUFlLE1BQ2ZjLFlBQVksSUFwQ0RmLFVBb0NlQyxjQUFjQztnQkFFOUMsT0FBT2E7WUFDVDs7O1dBdkNtQmYifQ==