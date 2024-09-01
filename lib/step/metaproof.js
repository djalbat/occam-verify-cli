"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return MetaproofStep;
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
var MetaproofStep = /*#__PURE__*/ function() {
    function MetaproofStep(statementNode, ruleSubproofNode, metaSubproofNode, metastatementNode) {
        _class_call_check(this, MetaproofStep);
        this.statementNode = statementNode;
        this.ruleSubproofNode = ruleSubproofNode;
        this.metaSubproofNode = metaSubproofNode;
        this.metastatementNode = metastatementNode;
    }
    _create_class(MetaproofStep, [
        {
            key: "getStatementNode",
            value: function getStatementNode() {
                return this.statementNode;
            }
        },
        {
            key: "getRuleSubproofNode",
            value: function getRuleSubproofNode() {
                return this.ruleSubproofNode;
            }
        },
        {
            key: "getMetaSubproofNode",
            value: function getMetaSubproofNode() {
                return this.metaSubproofNode;
            }
        },
        {
            key: "getMetastatementNode",
            value: function getMetastatementNode() {
                return this.metastatementNode;
            }
        },
        {
            key: "matchMetastatementNode",
            value: function matchMetastatementNode(metastatementNode) {
                var matchesMetastatementNode = false;
                if (this.metastatementNode !== null) {
                    matchesMetastatementNode = this.metastatementNode.match(metastatementNode);
                }
                return matchesMetastatementNode;
            }
        }
    ], [
        {
            key: "fromStatementNode",
            value: function fromStatementNode(statementNode) {
                var ruleSubproofNode = null, metaSubproofNode = null, metastatementNode = null, metaproofStep = new MetaproofStep(statementNode, ruleSubproofNode, metaSubproofNode, metastatementNode);
                return metaproofStep;
            }
        },
        {
            key: "fromRuleSubproofNode",
            value: function fromRuleSubproofNode(ruleSubproofNode) {
                var statementNode = null, metaSubproofNode = null, metastatementNode = null, metaproofStep = new MetaproofStep(statementNode, ruleSubproofNode, metaSubproofNode, metastatementNode);
                return metaproofStep;
            }
        },
        {
            key: "fromMetaSubproofNode",
            value: function fromMetaSubproofNode(metaSubproofNode) {
                var statementNode = null, ruleSubproofNode = null, metastatementNode = null, metaproofStep = new MetaproofStep(statementNode, ruleSubproofNode, metaSubproofNode, metastatementNode);
                return metaproofStep;
            }
        },
        {
            key: "fromMetastatementNode",
            value: function fromMetastatementNode(metastatementNode) {
                var statementNode = null, ruleSubproofNode = null, metaSubproofNode = null, metaproofStep = new MetaproofStep(statementNode, ruleSubproofNode, metaSubproofNode, metastatementNode);
                return metaproofStep;
            }
        }
    ]);
    return MetaproofStep;
}();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zdGVwL21ldGFwcm9vZi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWV0YXByb29mU3RlcCB7XG4gIGNvbnN0cnVjdG9yKHN0YXRlbWVudE5vZGUsIHJ1bGVTdWJwcm9vZk5vZGUsIG1ldGFTdWJwcm9vZk5vZGUsIG1ldGFzdGF0ZW1lbnROb2RlKSB7XG4gICAgdGhpcy5zdGF0ZW1lbnROb2RlID0gc3RhdGVtZW50Tm9kZTtcbiAgICB0aGlzLnJ1bGVTdWJwcm9vZk5vZGUgPSBydWxlU3VicHJvb2ZOb2RlO1xuICAgIHRoaXMubWV0YVN1YnByb29mTm9kZSA9IG1ldGFTdWJwcm9vZk5vZGU7XG4gICAgdGhpcy5tZXRhc3RhdGVtZW50Tm9kZSA9IG1ldGFzdGF0ZW1lbnROb2RlO1xuICB9XG5cbiAgZ2V0U3RhdGVtZW50Tm9kZSgpIHtcbiAgICByZXR1cm4gdGhpcy5zdGF0ZW1lbnROb2RlO1xuICB9XG5cbiAgZ2V0UnVsZVN1YnByb29mTm9kZSgpIHtcbiAgICByZXR1cm4gdGhpcy5ydWxlU3VicHJvb2ZOb2RlO1xuICB9XG5cbiAgZ2V0TWV0YVN1YnByb29mTm9kZSgpIHtcbiAgICByZXR1cm4gdGhpcy5tZXRhU3VicHJvb2ZOb2RlO1xuICB9XG5cbiAgZ2V0TWV0YXN0YXRlbWVudE5vZGUoKSB7XG4gICAgcmV0dXJuIHRoaXMubWV0YXN0YXRlbWVudE5vZGU7XG4gIH1cblxuICBtYXRjaE1ldGFzdGF0ZW1lbnROb2RlKG1ldGFzdGF0ZW1lbnROb2RlKSB7XG4gICAgbGV0IG1hdGNoZXNNZXRhc3RhdGVtZW50Tm9kZSA9IGZhbHNlO1xuXG4gICAgaWYgKHRoaXMubWV0YXN0YXRlbWVudE5vZGUgIT09IG51bGwpIHtcbiAgICAgIG1hdGNoZXNNZXRhc3RhdGVtZW50Tm9kZSA9IHRoaXMubWV0YXN0YXRlbWVudE5vZGUubWF0Y2gobWV0YXN0YXRlbWVudE5vZGUpO1xuICAgIH1cblxuICAgIHJldHVybiBtYXRjaGVzTWV0YXN0YXRlbWVudE5vZGU7XG4gIH1cblxuICBzdGF0aWMgZnJvbVN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSkge1xuICAgIGNvbnN0IHJ1bGVTdWJwcm9vZk5vZGUgPSBudWxsLFxuICAgICAgICAgIG1ldGFTdWJwcm9vZk5vZGUgPSBudWxsLFxuICAgICAgICAgIG1ldGFzdGF0ZW1lbnROb2RlID0gbnVsbCxcbiAgICAgICAgICBtZXRhcHJvb2ZTdGVwID0gbmV3IE1ldGFwcm9vZlN0ZXAoc3RhdGVtZW50Tm9kZSwgcnVsZVN1YnByb29mTm9kZSwgbWV0YVN1YnByb29mTm9kZSwgbWV0YXN0YXRlbWVudE5vZGUpO1xuXG4gICAgcmV0dXJuIG1ldGFwcm9vZlN0ZXA7XG4gIH1cblxuICBzdGF0aWMgZnJvbVJ1bGVTdWJwcm9vZk5vZGUocnVsZVN1YnByb29mTm9kZSkge1xuICAgIGNvbnN0IHN0YXRlbWVudE5vZGUgPSBudWxsLFxuICAgICAgICAgIG1ldGFTdWJwcm9vZk5vZGUgPSBudWxsLFxuICAgICAgICAgIG1ldGFzdGF0ZW1lbnROb2RlID0gbnVsbCxcbiAgICAgICAgICBtZXRhcHJvb2ZTdGVwID0gbmV3IE1ldGFwcm9vZlN0ZXAoc3RhdGVtZW50Tm9kZSwgcnVsZVN1YnByb29mTm9kZSwgbWV0YVN1YnByb29mTm9kZSwgbWV0YXN0YXRlbWVudE5vZGUpO1xuXG4gICAgcmV0dXJuIG1ldGFwcm9vZlN0ZXA7XG4gIH1cblxuICBzdGF0aWMgZnJvbU1ldGFTdWJwcm9vZk5vZGUobWV0YVN1YnByb29mTm9kZSkge1xuICAgIGNvbnN0IHN0YXRlbWVudE5vZGUgPSBudWxsLFxuICAgICAgICAgIHJ1bGVTdWJwcm9vZk5vZGUgPSBudWxsLFxuICAgICAgICAgIG1ldGFzdGF0ZW1lbnROb2RlID0gbnVsbCxcbiAgICAgICAgICBtZXRhcHJvb2ZTdGVwID0gbmV3IE1ldGFwcm9vZlN0ZXAoc3RhdGVtZW50Tm9kZSwgcnVsZVN1YnByb29mTm9kZSwgbWV0YVN1YnByb29mTm9kZSwgbWV0YXN0YXRlbWVudE5vZGUpO1xuXG4gICAgcmV0dXJuIG1ldGFwcm9vZlN0ZXA7XG5cbiAgfVxuXG4gIHN0YXRpYyBmcm9tTWV0YXN0YXRlbWVudE5vZGUobWV0YXN0YXRlbWVudE5vZGUpIHtcbiAgICBjb25zdCBzdGF0ZW1lbnROb2RlID0gbnVsbCxcbiAgICAgICAgICBydWxlU3VicHJvb2ZOb2RlID0gbnVsbCxcbiAgICAgICAgICBtZXRhU3VicHJvb2ZOb2RlID0gbnVsbCxcbiAgICAgICAgICBtZXRhcHJvb2ZTdGVwID0gbmV3IE1ldGFwcm9vZlN0ZXAoc3RhdGVtZW50Tm9kZSwgcnVsZVN1YnByb29mTm9kZSwgbWV0YVN1YnByb29mTm9kZSwgbWV0YXN0YXRlbWVudE5vZGUpO1xuXG4gICAgcmV0dXJuIG1ldGFwcm9vZlN0ZXA7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJNZXRhcHJvb2ZTdGVwIiwic3RhdGVtZW50Tm9kZSIsInJ1bGVTdWJwcm9vZk5vZGUiLCJtZXRhU3VicHJvb2ZOb2RlIiwibWV0YXN0YXRlbWVudE5vZGUiLCJnZXRTdGF0ZW1lbnROb2RlIiwiZ2V0UnVsZVN1YnByb29mTm9kZSIsImdldE1ldGFTdWJwcm9vZk5vZGUiLCJnZXRNZXRhc3RhdGVtZW50Tm9kZSIsIm1hdGNoTWV0YXN0YXRlbWVudE5vZGUiLCJtYXRjaGVzTWV0YXN0YXRlbWVudE5vZGUiLCJtYXRjaCIsImZyb21TdGF0ZW1lbnROb2RlIiwibWV0YXByb29mU3RlcCIsImZyb21SdWxlU3VicHJvb2ZOb2RlIiwiZnJvbU1ldGFTdWJwcm9vZk5vZGUiLCJmcm9tTWV0YXN0YXRlbWVudE5vZGUiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBRXFCQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFOLElBQUEsQUFBTUEsOEJBQUQsQUFBTDthQUFNQSxjQUNQQyxhQUFhLEVBQUVDLGdCQUFnQixFQUFFQyxnQkFBZ0IsRUFBRUMsaUJBQWlCO2dDQUQ3REo7UUFFakIsSUFBSSxDQUFDQyxhQUFhLEdBQUdBO1FBQ3JCLElBQUksQ0FBQ0MsZ0JBQWdCLEdBQUdBO1FBQ3hCLElBQUksQ0FBQ0MsZ0JBQWdCLEdBQUdBO1FBQ3hCLElBQUksQ0FBQ0MsaUJBQWlCLEdBQUdBOztrQkFMUko7O1lBUW5CSyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNKLGFBQWE7WUFDM0I7OztZQUVBSyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNKLGdCQUFnQjtZQUM5Qjs7O1lBRUFLLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0osZ0JBQWdCO1lBQzlCOzs7WUFFQUssS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDSixpQkFBaUI7WUFDL0I7OztZQUVBSyxLQUFBQTttQkFBQUEsU0FBQUEsdUJBQXVCTCxpQkFBaUI7Z0JBQ3RDLElBQUlNLDJCQUEyQjtnQkFFL0IsSUFBSSxJQUFJLENBQUNOLGlCQUFpQixLQUFLLE1BQU07b0JBQ25DTSwyQkFBMkIsSUFBSSxDQUFDTixpQkFBaUIsQ0FBQ08sS0FBSyxDQUFDUDtnQkFDMUQ7Z0JBRUEsT0FBT007WUFDVDs7OztZQUVPRSxLQUFBQTttQkFBUCxTQUFPQSxrQkFBa0JYLGFBQWE7Z0JBQ3BDLElBQU1DLG1CQUFtQixNQUNuQkMsbUJBQW1CLE1BQ25CQyxvQkFBb0IsTUFDcEJTLGdCQUFnQixJQXRDTGIsY0FzQ3VCQyxlQUFlQyxrQkFBa0JDLGtCQUFrQkM7Z0JBRTNGLE9BQU9TO1lBQ1Q7OztZQUVPQyxLQUFBQTttQkFBUCxTQUFPQSxxQkFBcUJaLGdCQUFnQjtnQkFDMUMsSUFBTUQsZ0JBQWdCLE1BQ2hCRSxtQkFBbUIsTUFDbkJDLG9CQUFvQixNQUNwQlMsZ0JBQWdCLElBL0NMYixjQStDdUJDLGVBQWVDLGtCQUFrQkMsa0JBQWtCQztnQkFFM0YsT0FBT1M7WUFDVDs7O1lBRU9FLEtBQUFBO21CQUFQLFNBQU9BLHFCQUFxQlosZ0JBQWdCO2dCQUMxQyxJQUFNRixnQkFBZ0IsTUFDaEJDLG1CQUFtQixNQUNuQkUsb0JBQW9CLE1BQ3BCUyxnQkFBZ0IsSUF4RExiLGNBd0R1QkMsZUFBZUMsa0JBQWtCQyxrQkFBa0JDO2dCQUUzRixPQUFPUztZQUVUOzs7WUFFT0csS0FBQUE7bUJBQVAsU0FBT0Esc0JBQXNCWixpQkFBaUI7Z0JBQzVDLElBQU1ILGdCQUFnQixNQUNoQkMsbUJBQW1CLE1BQ25CQyxtQkFBbUIsTUFDbkJVLGdCQUFnQixJQWxFTGIsY0FrRXVCQyxlQUFlQyxrQkFBa0JDLGtCQUFrQkM7Z0JBRTNGLE9BQU9TO1lBQ1Q7OztXQXJFbUJiIn0=