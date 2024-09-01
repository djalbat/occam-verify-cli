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
            key: "matchMetastatement",
            value: function matchMetastatement(metastatementNode) {
                var matches = false;
                if (this.metastatementNode !== null) {
                    matches = this.metastatementNode.match(metastatementNode);
                }
                return matches;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zdGVwL21ldGFwcm9vZi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWV0YXByb29mU3RlcCB7XG4gIGNvbnN0cnVjdG9yKHN0YXRlbWVudE5vZGUsIHJ1bGVTdWJwcm9vZk5vZGUsIG1ldGFTdWJwcm9vZk5vZGUsIG1ldGFzdGF0ZW1lbnROb2RlKSB7XG4gICAgdGhpcy5zdGF0ZW1lbnROb2RlID0gc3RhdGVtZW50Tm9kZTtcbiAgICB0aGlzLnJ1bGVTdWJwcm9vZk5vZGUgPSBydWxlU3VicHJvb2ZOb2RlO1xuICAgIHRoaXMubWV0YVN1YnByb29mTm9kZSA9IG1ldGFTdWJwcm9vZk5vZGU7XG4gICAgdGhpcy5tZXRhc3RhdGVtZW50Tm9kZSA9IG1ldGFzdGF0ZW1lbnROb2RlO1xuICB9XG5cbiAgZ2V0U3RhdGVtZW50Tm9kZSgpIHtcbiAgICByZXR1cm4gdGhpcy5zdGF0ZW1lbnROb2RlO1xuICB9XG5cbiAgZ2V0UnVsZVN1YnByb29mTm9kZSgpIHtcbiAgICByZXR1cm4gdGhpcy5ydWxlU3VicHJvb2ZOb2RlO1xuICB9XG5cbiAgZ2V0TWV0YVN1YnByb29mTm9kZSgpIHtcbiAgICByZXR1cm4gdGhpcy5tZXRhU3VicHJvb2ZOb2RlO1xuICB9XG5cbiAgZ2V0TWV0YXN0YXRlbWVudE5vZGUoKSB7XG4gICAgcmV0dXJuIHRoaXMubWV0YXN0YXRlbWVudE5vZGU7XG4gIH1cblxuICBtYXRjaE1ldGFzdGF0ZW1lbnQobWV0YXN0YXRlbWVudE5vZGUpIHtcbiAgICBsZXQgbWF0Y2hlcyA9IGZhbHNlO1xuXG4gICAgaWYgKHRoaXMubWV0YXN0YXRlbWVudE5vZGUgIT09IG51bGwpIHtcbiAgICAgIG1hdGNoZXMgPSB0aGlzLm1ldGFzdGF0ZW1lbnROb2RlLm1hdGNoKG1ldGFzdGF0ZW1lbnROb2RlKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbWF0Y2hlcztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tU3RhdGVtZW50Tm9kZShzdGF0ZW1lbnROb2RlKSB7XG4gICAgY29uc3QgcnVsZVN1YnByb29mTm9kZSA9IG51bGwsXG4gICAgICAgICAgbWV0YVN1YnByb29mTm9kZSA9IG51bGwsXG4gICAgICAgICAgbWV0YXN0YXRlbWVudE5vZGUgPSBudWxsLFxuICAgICAgICAgIG1ldGFwcm9vZlN0ZXAgPSBuZXcgTWV0YXByb29mU3RlcChzdGF0ZW1lbnROb2RlLCBydWxlU3VicHJvb2ZOb2RlLCBtZXRhU3VicHJvb2ZOb2RlLCBtZXRhc3RhdGVtZW50Tm9kZSk7XG5cbiAgICByZXR1cm4gbWV0YXByb29mU3RlcDtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUnVsZVN1YnByb29mTm9kZShydWxlU3VicHJvb2ZOb2RlKSB7XG4gICAgY29uc3Qgc3RhdGVtZW50Tm9kZSA9IG51bGwsXG4gICAgICAgICAgbWV0YVN1YnByb29mTm9kZSA9IG51bGwsXG4gICAgICAgICAgbWV0YXN0YXRlbWVudE5vZGUgPSBudWxsLFxuICAgICAgICAgIG1ldGFwcm9vZlN0ZXAgPSBuZXcgTWV0YXByb29mU3RlcChzdGF0ZW1lbnROb2RlLCBydWxlU3VicHJvb2ZOb2RlLCBtZXRhU3VicHJvb2ZOb2RlLCBtZXRhc3RhdGVtZW50Tm9kZSk7XG5cbiAgICByZXR1cm4gbWV0YXByb29mU3RlcDtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTWV0YVN1YnByb29mTm9kZShtZXRhU3VicHJvb2ZOb2RlKSB7XG4gICAgY29uc3Qgc3RhdGVtZW50Tm9kZSA9IG51bGwsXG4gICAgICAgICAgcnVsZVN1YnByb29mTm9kZSA9IG51bGwsXG4gICAgICAgICAgbWV0YXN0YXRlbWVudE5vZGUgPSBudWxsLFxuICAgICAgICAgIG1ldGFwcm9vZlN0ZXAgPSBuZXcgTWV0YXByb29mU3RlcChzdGF0ZW1lbnROb2RlLCBydWxlU3VicHJvb2ZOb2RlLCBtZXRhU3VicHJvb2ZOb2RlLCBtZXRhc3RhdGVtZW50Tm9kZSk7XG5cbiAgICByZXR1cm4gbWV0YXByb29mU3RlcDtcblxuICB9XG5cbiAgc3RhdGljIGZyb21NZXRhc3RhdGVtZW50Tm9kZShtZXRhc3RhdGVtZW50Tm9kZSkge1xuICAgIGNvbnN0IHN0YXRlbWVudE5vZGUgPSBudWxsLFxuICAgICAgICAgIHJ1bGVTdWJwcm9vZk5vZGUgPSBudWxsLFxuICAgICAgICAgIG1ldGFTdWJwcm9vZk5vZGUgPSBudWxsLFxuICAgICAgICAgIG1ldGFwcm9vZlN0ZXAgPSBuZXcgTWV0YXByb29mU3RlcChzdGF0ZW1lbnROb2RlLCBydWxlU3VicHJvb2ZOb2RlLCBtZXRhU3VicHJvb2ZOb2RlLCBtZXRhc3RhdGVtZW50Tm9kZSk7XG5cbiAgICByZXR1cm4gbWV0YXByb29mU3RlcDtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIk1ldGFwcm9vZlN0ZXAiLCJzdGF0ZW1lbnROb2RlIiwicnVsZVN1YnByb29mTm9kZSIsIm1ldGFTdWJwcm9vZk5vZGUiLCJtZXRhc3RhdGVtZW50Tm9kZSIsImdldFN0YXRlbWVudE5vZGUiLCJnZXRSdWxlU3VicHJvb2ZOb2RlIiwiZ2V0TWV0YVN1YnByb29mTm9kZSIsImdldE1ldGFzdGF0ZW1lbnROb2RlIiwibWF0Y2hNZXRhc3RhdGVtZW50IiwibWF0Y2hlcyIsIm1hdGNoIiwiZnJvbVN0YXRlbWVudE5vZGUiLCJtZXRhcHJvb2ZTdGVwIiwiZnJvbVJ1bGVTdWJwcm9vZk5vZGUiLCJmcm9tTWV0YVN1YnByb29mTm9kZSIsImZyb21NZXRhc3RhdGVtZW50Tm9kZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFFcUJBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQU4sSUFBQSxBQUFNQSw4QkFBRCxBQUFMO2FBQU1BLGNBQ1BDLGFBQWEsRUFBRUMsZ0JBQWdCLEVBQUVDLGdCQUFnQixFQUFFQyxpQkFBaUI7Z0NBRDdESjtRQUVqQixJQUFJLENBQUNDLGFBQWEsR0FBR0E7UUFDckIsSUFBSSxDQUFDQyxnQkFBZ0IsR0FBR0E7UUFDeEIsSUFBSSxDQUFDQyxnQkFBZ0IsR0FBR0E7UUFDeEIsSUFBSSxDQUFDQyxpQkFBaUIsR0FBR0E7O2tCQUxSSjs7WUFRbkJLLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0osYUFBYTtZQUMzQjs7O1lBRUFLLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0osZ0JBQWdCO1lBQzlCOzs7WUFFQUssS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDSixnQkFBZ0I7WUFDOUI7OztZQUVBSyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNKLGlCQUFpQjtZQUMvQjs7O1lBRUFLLEtBQUFBO21CQUFBQSxTQUFBQSxtQkFBbUJMLGlCQUFpQjtnQkFDbEMsSUFBSU0sVUFBVTtnQkFFZCxJQUFJLElBQUksQ0FBQ04saUJBQWlCLEtBQUssTUFBTTtvQkFDbkNNLFVBQVUsSUFBSSxDQUFDTixpQkFBaUIsQ0FBQ08sS0FBSyxDQUFDUDtnQkFDekM7Z0JBRUEsT0FBT007WUFDVDs7OztZQUVPRSxLQUFBQTttQkFBUCxTQUFPQSxrQkFBa0JYLGFBQWE7Z0JBQ3BDLElBQU1DLG1CQUFtQixNQUNuQkMsbUJBQW1CLE1BQ25CQyxvQkFBb0IsTUFDcEJTLGdCQUFnQixJQXRDTGIsY0FzQ3VCQyxlQUFlQyxrQkFBa0JDLGtCQUFrQkM7Z0JBRTNGLE9BQU9TO1lBQ1Q7OztZQUVPQyxLQUFBQTttQkFBUCxTQUFPQSxxQkFBcUJaLGdCQUFnQjtnQkFDMUMsSUFBTUQsZ0JBQWdCLE1BQ2hCRSxtQkFBbUIsTUFDbkJDLG9CQUFvQixNQUNwQlMsZ0JBQWdCLElBL0NMYixjQStDdUJDLGVBQWVDLGtCQUFrQkMsa0JBQWtCQztnQkFFM0YsT0FBT1M7WUFDVDs7O1lBRU9FLEtBQUFBO21CQUFQLFNBQU9BLHFCQUFxQlosZ0JBQWdCO2dCQUMxQyxJQUFNRixnQkFBZ0IsTUFDaEJDLG1CQUFtQixNQUNuQkUsb0JBQW9CLE1BQ3BCUyxnQkFBZ0IsSUF4RExiLGNBd0R1QkMsZUFBZUMsa0JBQWtCQyxrQkFBa0JDO2dCQUUzRixPQUFPUztZQUVUOzs7WUFFT0csS0FBQUE7bUJBQVAsU0FBT0Esc0JBQXNCWixpQkFBaUI7Z0JBQzVDLElBQU1ILGdCQUFnQixNQUNoQkMsbUJBQW1CLE1BQ25CQyxtQkFBbUIsTUFDbkJVLGdCQUFnQixJQWxFTGIsY0FrRXVCQyxlQUFlQyxrQkFBa0JDLGtCQUFrQkM7Z0JBRTNGLE9BQU9TO1lBQ1Q7OztXQXJFbUJiIn0=