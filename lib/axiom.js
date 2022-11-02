"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return Axiom;
    }
});
var _string = require("./utilities/string");
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
var Axiom = /*#__PURE__*/ function() {
    function Axiom(labels, statementNode, suppositionStatementNode, consequentStatementNode) {
        _classCallCheck(this, Axiom);
        this.labels = labels;
        this.statementNode = statementNode;
        this.suppositionStatementNode = suppositionStatementNode;
        this.consequentStatementNode = consequentStatementNode;
    }
    _createClass(Axiom, [
        {
            key: "getLabels",
            value: function getLabels() {
                return this.labels;
            }
        },
        {
            key: "getStatementNode",
            value: function getStatementNode() {
                return this.statementNode;
            }
        },
        {
            key: "getSuppositionStatementNode",
            value: function getSuppositionStatementNode() {
                return this.suppositionStatementNode;
            }
        },
        {
            key: "getConsequentStatementNode",
            value: function getConsequentStatementNode() {
                return this.consequentStatementNode;
            }
        },
        {
            key: "matchLabelName",
            value: function matchLabelName(labelName) {
                var matchesLabelName = this.labels.some(function(label) {
                    var name = labelName, labelMatchesName = label.matchName(name);
                    if (labelMatchesName) {
                        return true;
                    }
                });
                return matchesLabelName;
            }
        },
        {
            key: "asString",
            value: function asString() {
                var string = (0, _string.labelsAsString)(this.labels);
                return string;
            }
        }
    ], [
        {
            key: "fromStatementNodeAndLabels",
            value: function fromStatementNodeAndLabels(statementNode, labels) {
                var suppositionStatementNode = null, consequentStatementNode = null, axiom = new Axiom(labels, statementNode, suppositionStatementNode, consequentStatementNode);
                return axiom;
            }
        },
        {
            key: "fromSuppositionStatementNodeConsequentStatementNodeAndLabels",
            value: function fromSuppositionStatementNodeConsequentStatementNodeAndLabels(suppositionStatementNode, consequentStatementNode, labels) {
                var statementNode = null, axiom = new Axiom(labels, statementNode, suppositionStatementNode, consequentStatementNode);
                return axiom;
            }
        }
    ]);
    return Axiom;
}();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9heGlvbS5qcyIsIjw8anN4LWNvbmZpZy1wcmFnbWEuanM+PiJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgbGFiZWxzQXNTdHJpbmcgfSBmcm9tIFwiLi91dGlsaXRpZXMvc3RyaW5nXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEF4aW9tIHtcbiAgY29uc3RydWN0b3IobGFiZWxzLCBzdGF0ZW1lbnROb2RlLCBzdXBwb3NpdGlvblN0YXRlbWVudE5vZGUsIGNvbnNlcXVlbnRTdGF0ZW1lbnROb2RlKSB7XG4gICAgdGhpcy5sYWJlbHMgPSBsYWJlbHM7XG4gICAgdGhpcy5zdGF0ZW1lbnROb2RlID0gc3RhdGVtZW50Tm9kZTtcbiAgICB0aGlzLnN1cHBvc2l0aW9uU3RhdGVtZW50Tm9kZSA9IHN1cHBvc2l0aW9uU3RhdGVtZW50Tm9kZTtcbiAgICB0aGlzLmNvbnNlcXVlbnRTdGF0ZW1lbnROb2RlID0gY29uc2VxdWVudFN0YXRlbWVudE5vZGU7XG4gIH1cblxuICBnZXRMYWJlbHMoKSB7XG4gICAgcmV0dXJuIHRoaXMubGFiZWxzO1xuICB9XG5cbiAgZ2V0U3RhdGVtZW50Tm9kZSgpIHtcbiAgICByZXR1cm4gdGhpcy5zdGF0ZW1lbnROb2RlO1xuICB9XG5cbiAgZ2V0U3VwcG9zaXRpb25TdGF0ZW1lbnROb2RlKCkge1xuICAgIHJldHVybiB0aGlzLnN1cHBvc2l0aW9uU3RhdGVtZW50Tm9kZTtcbiAgfVxuXG4gIGdldENvbnNlcXVlbnRTdGF0ZW1lbnROb2RlKCkge1xuICAgIHJldHVybiB0aGlzLmNvbnNlcXVlbnRTdGF0ZW1lbnROb2RlO1xuICB9XG5cbiAgbWF0Y2hMYWJlbE5hbWUobGFiZWxOYW1lKSB7XG4gICAgY29uc3QgbWF0Y2hlc0xhYmVsTmFtZSA9IHRoaXMubGFiZWxzLnNvbWUoKGxhYmVsKSA9PiB7XG4gICAgICBjb25zdCBuYW1lID0gbGFiZWxOYW1lLCAvLy9cbiAgICAgICAgICAgIGxhYmVsTWF0Y2hlc05hbWUgPSBsYWJlbC5tYXRjaE5hbWUobmFtZSk7XG5cbiAgICAgIGlmIChsYWJlbE1hdGNoZXNOYW1lKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIG1hdGNoZXNMYWJlbE5hbWU7XG4gIH1cblxuICBhc1N0cmluZygpIHtcbiAgICBjb25zdCBzdHJpbmcgPSBsYWJlbHNBc1N0cmluZyh0aGlzLmxhYmVscyk7XG5cbiAgICByZXR1cm4gc3RyaW5nO1xuICB9XG5cbiAgc3RhdGljIGZyb21TdGF0ZW1lbnROb2RlQW5kTGFiZWxzKHN0YXRlbWVudE5vZGUsIGxhYmVscykge1xuICAgIGNvbnN0IHN1cHBvc2l0aW9uU3RhdGVtZW50Tm9kZSA9IG51bGwsXG4gICAgICAgICAgY29uc2VxdWVudFN0YXRlbWVudE5vZGUgPSBudWxsLFxuICAgICAgICAgIGF4aW9tID0gbmV3IEF4aW9tKGxhYmVscywgc3RhdGVtZW50Tm9kZSwgc3VwcG9zaXRpb25TdGF0ZW1lbnROb2RlLCBjb25zZXF1ZW50U3RhdGVtZW50Tm9kZSk7XG5cbiAgICByZXR1cm4gYXhpb207XG4gIH1cblxuICBzdGF0aWMgZnJvbVN1cHBvc2l0aW9uU3RhdGVtZW50Tm9kZUNvbnNlcXVlbnRTdGF0ZW1lbnROb2RlQW5kTGFiZWxzKHN1cHBvc2l0aW9uU3RhdGVtZW50Tm9kZSwgY29uc2VxdWVudFN0YXRlbWVudE5vZGUsIGxhYmVscykge1xuICAgIGNvbnN0IHN0YXRlbWVudE5vZGUgPSBudWxsLFxuICAgICAgICAgIGF4aW9tID0gbmV3IEF4aW9tKGxhYmVscywgc3RhdGVtZW50Tm9kZSwgc3VwcG9zaXRpb25TdGF0ZW1lbnROb2RlLCBjb25zZXF1ZW50U3RhdGVtZW50Tm9kZSk7XG5cbiAgICByZXR1cm4gYXhpb207XG4gIH1cbn1cbiIsIlJlYWN0LmNyZWF0ZUVsZW1lbnQiXSwibmFtZXMiOlsiQXhpb20iLCJsYWJlbHMiLCJzdGF0ZW1lbnROb2RlIiwic3VwcG9zaXRpb25TdGF0ZW1lbnROb2RlIiwiY29uc2VxdWVudFN0YXRlbWVudE5vZGUiLCJnZXRMYWJlbHMiLCJnZXRTdGF0ZW1lbnROb2RlIiwiZ2V0U3VwcG9zaXRpb25TdGF0ZW1lbnROb2RlIiwiZ2V0Q29uc2VxdWVudFN0YXRlbWVudE5vZGUiLCJtYXRjaExhYmVsTmFtZSIsImxhYmVsTmFtZSIsIm1hdGNoZXNMYWJlbE5hbWUiLCJzb21lIiwibGFiZWwiLCJuYW1lIiwibGFiZWxNYXRjaGVzTmFtZSIsIm1hdGNoTmFtZSIsImFzU3RyaW5nIiwic3RyaW5nIiwibGFiZWxzQXNTdHJpbmciLCJmcm9tU3RhdGVtZW50Tm9kZUFuZExhYmVscyIsImF4aW9tIiwiZnJvbVN1cHBvc2l0aW9uU3RhdGVtZW50Tm9kZUNvbnNlcXVlbnRTdGF0ZW1lbnROb2RlQW5kTGFiZWxzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQUlxQkE7OztzQkFGVTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFaEIsSUFBQSxBQUFNQSxzQkFBTjthQUFNQSxNQUNQQyxNQUFNLEVBQUVDLGFBQWEsRUFBRUMsd0JBQXdCLEVBQUVDLHVCQUF1Qjs4QkFEakVKO1FBRWpCLElBQUksQ0FBQ0MsTUFBTSxHQUFHQTtRQUNkLElBQUksQ0FBQ0MsYUFBYSxHQUFHQTtRQUNyQixJQUFJLENBQUNDLHdCQUF3QixHQUFHQTtRQUNoQyxJQUFJLENBQUNDLHVCQUF1QixHQUFHQTs7aUJBTGRKOztZQVFuQkssS0FBQUE7bUJBQUFBLFNBQUFBLFlBQVk7Z0JBQ1YsT0FBTyxJQUFJLENBQUNKLE1BQU07WUFDcEI7OztZQUVBSyxLQUFBQTttQkFBQUEsU0FBQUEsbUJBQW1CO2dCQUNqQixPQUFPLElBQUksQ0FBQ0osYUFBYTtZQUMzQjs7O1lBRUFLLEtBQUFBO21CQUFBQSxTQUFBQSw4QkFBOEI7Z0JBQzVCLE9BQU8sSUFBSSxDQUFDSix3QkFBd0I7WUFDdEM7OztZQUVBSyxLQUFBQTttQkFBQUEsU0FBQUEsNkJBQTZCO2dCQUMzQixPQUFPLElBQUksQ0FBQ0osdUJBQXVCO1lBQ3JDOzs7WUFFQUssS0FBQUE7bUJBQUFBLFNBQUFBLGVBQWVDLFNBQVMsRUFBRTtnQkFDeEIsSUFBTUMsbUJBQW1CLElBQUksQ0FBQ1YsTUFBTSxDQUFDVyxJQUFJLENBQUMsU0FBQ0MsT0FBVTtvQkFDbkQsSUFBTUMsT0FBT0osV0FDUEssbUJBQW1CRixNQUFNRyxTQUFTLENBQUNGO29CQUV6QyxJQUFJQyxrQkFBa0I7d0JBQ3BCLE9BQU8sSUFBSTtvQkFDYixDQUFDO2dCQUNIO2dCQUVBLE9BQU9KO1lBQ1Q7OztZQUVBTSxLQUFBQTttQkFBQUEsU0FBQUEsV0FBVztnQkFDVCxJQUFNQyxTQUFTQyxJQUFBQSxzQkFBYyxFQUFDLElBQUksQ0FBQ2xCLE1BQU07Z0JBRXpDLE9BQU9pQjtZQUNUOzs7O1lBRU9FLEtBQUFBO21CQUFQLFNBQU9BLDJCQUEyQmxCLGFBQWEsRUFBRUQsTUFBTSxFQUFFO2dCQUN2RCxJQUFNRSwyQkFBMkIsSUFBSSxFQUMvQkMsMEJBQTBCLElBQUksRUFDOUJpQixRQUFRLElBOUNHckIsTUE4Q09DLFFBQVFDLGVBQWVDLDBCQUEwQkM7Z0JBRXpFLE9BQU9pQjtZQUNUOzs7WUFFT0MsS0FBQUE7bUJBQVAsU0FBT0EsNkRBQTZEbkIsd0JBQXdCLEVBQUVDLHVCQUF1QixFQUFFSCxNQUFNLEVBQUU7Z0JBQzdILElBQU1DLGdCQUFnQixJQUFJLEVBQ3BCbUIsUUFBUSxJQXJER3JCLE1BcURPQyxRQUFRQyxlQUFlQywwQkFBMEJDO2dCQUV6RSxPQUFPaUI7WUFDVDs7O1dBeERtQnJCIn0=