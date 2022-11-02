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
            key: "asJSON",
            value: function asJSON() {
                var labelsJSON = this.labels.map(function(label) {
                    var labelJSON = label.asJSON();
                    return labelJSON;
                }), statementString = this.statementNode === null ? null : (0, _string.nodeAsString)(this.statementNode), consequentStatementString = this.consequentStatementNode === null ? null : (0, _string.nodeAsString)(this.consequentStatementNode), suppositionStatementString = this.suppositionStatementNode === null ? null : (0, _string.nodeAsString)(this.suppositionStatementNode), labels = labelsJSON, statement = statementString, consequent = consequentStatementString, supposition = suppositionStatementString, json = {
                    labels: labels,
                    statement: statement,
                    consequent: consequent,
                    supposition: supposition
                };
                return json;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9heGlvbS5qcyIsIjw8anN4LWNvbmZpZy1wcmFnbWEuanM+PiJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHtub2RlQXNTdHJpbmd9IGZyb20gXCIuL3V0aWxpdGllcy9zdHJpbmdcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXhpb20ge1xuICBjb25zdHJ1Y3RvcihsYWJlbHMsIHN0YXRlbWVudE5vZGUsIHN1cHBvc2l0aW9uU3RhdGVtZW50Tm9kZSwgY29uc2VxdWVudFN0YXRlbWVudE5vZGUpIHtcbiAgICB0aGlzLmxhYmVscyA9IGxhYmVscztcbiAgICB0aGlzLnN0YXRlbWVudE5vZGUgPSBzdGF0ZW1lbnROb2RlO1xuICAgIHRoaXMuc3VwcG9zaXRpb25TdGF0ZW1lbnROb2RlID0gc3VwcG9zaXRpb25TdGF0ZW1lbnROb2RlO1xuICAgIHRoaXMuY29uc2VxdWVudFN0YXRlbWVudE5vZGUgPSBjb25zZXF1ZW50U3RhdGVtZW50Tm9kZTtcbiAgfVxuXG4gIGdldExhYmVscygpIHtcbiAgICByZXR1cm4gdGhpcy5sYWJlbHM7XG4gIH1cblxuICBnZXRTdGF0ZW1lbnROb2RlKCkge1xuICAgIHJldHVybiB0aGlzLnN0YXRlbWVudE5vZGU7XG4gIH1cblxuICBnZXRTdXBwb3NpdGlvblN0YXRlbWVudE5vZGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3VwcG9zaXRpb25TdGF0ZW1lbnROb2RlO1xuICB9XG5cbiAgZ2V0Q29uc2VxdWVudFN0YXRlbWVudE5vZGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuY29uc2VxdWVudFN0YXRlbWVudE5vZGU7XG4gIH1cblxuICBtYXRjaExhYmVsTmFtZShsYWJlbE5hbWUpIHtcbiAgICBjb25zdCBtYXRjaGVzTGFiZWxOYW1lID0gdGhpcy5sYWJlbHMuc29tZSgobGFiZWwpID0+IHtcbiAgICAgIGNvbnN0IG5hbWUgPSBsYWJlbE5hbWUsIC8vL1xuICAgICAgICAgICAgbGFiZWxNYXRjaGVzTmFtZSA9IGxhYmVsLm1hdGNoTmFtZShuYW1lKTtcblxuICAgICAgaWYgKGxhYmVsTWF0Y2hlc05hbWUpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gbWF0Y2hlc0xhYmVsTmFtZTtcbiAgfVxuXG4gIGFzSlNPTigpIHtcbiAgICBjb25zdCBsYWJlbHNKU09OID0gdGhpcy5sYWJlbHMubWFwKChsYWJlbCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgbGFiZWxKU09OID0gbGFiZWwuYXNKU09OKCk7XG5cbiAgICAgICAgICAgIHJldHVybiBsYWJlbEpTT047XG4gICAgICAgICAgfSksXG4gICAgICAgICAgc3RhdGVtZW50U3RyaW5nID0gKHRoaXMuc3RhdGVtZW50Tm9kZSA9PT0gbnVsbCkgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG51bGwgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9kZUFzU3RyaW5nKHRoaXMuc3RhdGVtZW50Tm9kZSksXG4gICAgICAgICAgY29uc2VxdWVudFN0YXRlbWVudFN0cmluZyA9ICh0aGlzLmNvbnNlcXVlbnRTdGF0ZW1lbnROb2RlID09PSBudWxsKSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG51bGwgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vZGVBc1N0cmluZyh0aGlzLmNvbnNlcXVlbnRTdGF0ZW1lbnROb2RlKSxcbiAgICAgICAgICBzdXBwb3NpdGlvblN0YXRlbWVudFN0cmluZyA9ICh0aGlzLnN1cHBvc2l0aW9uU3RhdGVtZW50Tm9kZSA9PT0gbnVsbCkgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbnVsbCA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vZGVBc1N0cmluZyh0aGlzLnN1cHBvc2l0aW9uU3RhdGVtZW50Tm9kZSksXG4gICAgICAgICAgbGFiZWxzID0gbGFiZWxzSlNPTiwgIC8vL1xuICAgICAgICAgIHN0YXRlbWVudCA9IHN0YXRlbWVudFN0cmluZywgIC8vL1xuICAgICAgICAgIGNvbnNlcXVlbnQgPSBjb25zZXF1ZW50U3RhdGVtZW50U3RyaW5nLCAvLy9cbiAgICAgICAgICBzdXBwb3NpdGlvbiA9IHN1cHBvc2l0aW9uU3RhdGVtZW50U3RyaW5nLCAvLy9cbiAgICAgICAgICBqc29uID0ge1xuICAgICAgICAgICAgbGFiZWxzLFxuICAgICAgICAgICAgc3RhdGVtZW50LFxuICAgICAgICAgICAgY29uc2VxdWVudCxcbiAgICAgICAgICAgIHN1cHBvc2l0aW9uXG4gICAgICAgICAgfTtcblxuICAgIHJldHVybiBqc29uO1xuICB9XG5cbiAgc3RhdGljIGZyb21TdGF0ZW1lbnROb2RlQW5kTGFiZWxzKHN0YXRlbWVudE5vZGUsIGxhYmVscykge1xuICAgIGNvbnN0IHN1cHBvc2l0aW9uU3RhdGVtZW50Tm9kZSA9IG51bGwsXG4gICAgICAgICAgY29uc2VxdWVudFN0YXRlbWVudE5vZGUgPSBudWxsLFxuICAgICAgICAgIGF4aW9tID0gbmV3IEF4aW9tKGxhYmVscywgc3RhdGVtZW50Tm9kZSwgc3VwcG9zaXRpb25TdGF0ZW1lbnROb2RlLCBjb25zZXF1ZW50U3RhdGVtZW50Tm9kZSk7XG5cbiAgICByZXR1cm4gYXhpb207XG4gIH1cblxuICBzdGF0aWMgZnJvbVN1cHBvc2l0aW9uU3RhdGVtZW50Tm9kZUNvbnNlcXVlbnRTdGF0ZW1lbnROb2RlQW5kTGFiZWxzKHN1cHBvc2l0aW9uU3RhdGVtZW50Tm9kZSwgY29uc2VxdWVudFN0YXRlbWVudE5vZGUsIGxhYmVscykge1xuICAgIGNvbnN0IHN0YXRlbWVudE5vZGUgPSBudWxsLFxuICAgICAgICAgIGF4aW9tID0gbmV3IEF4aW9tKGxhYmVscywgc3RhdGVtZW50Tm9kZSwgc3VwcG9zaXRpb25TdGF0ZW1lbnROb2RlLCBjb25zZXF1ZW50U3RhdGVtZW50Tm9kZSk7XG5cbiAgICByZXR1cm4gYXhpb207XG4gIH1cbn1cbiIsIlJlYWN0LmNyZWF0ZUVsZW1lbnQiXSwibmFtZXMiOlsiQXhpb20iLCJsYWJlbHMiLCJzdGF0ZW1lbnROb2RlIiwic3VwcG9zaXRpb25TdGF0ZW1lbnROb2RlIiwiY29uc2VxdWVudFN0YXRlbWVudE5vZGUiLCJnZXRMYWJlbHMiLCJnZXRTdGF0ZW1lbnROb2RlIiwiZ2V0U3VwcG9zaXRpb25TdGF0ZW1lbnROb2RlIiwiZ2V0Q29uc2VxdWVudFN0YXRlbWVudE5vZGUiLCJtYXRjaExhYmVsTmFtZSIsImxhYmVsTmFtZSIsIm1hdGNoZXNMYWJlbE5hbWUiLCJzb21lIiwibGFiZWwiLCJuYW1lIiwibGFiZWxNYXRjaGVzTmFtZSIsIm1hdGNoTmFtZSIsImFzSlNPTiIsImxhYmVsc0pTT04iLCJtYXAiLCJsYWJlbEpTT04iLCJzdGF0ZW1lbnRTdHJpbmciLCJub2RlQXNTdHJpbmciLCJjb25zZXF1ZW50U3RhdGVtZW50U3RyaW5nIiwic3VwcG9zaXRpb25TdGF0ZW1lbnRTdHJpbmciLCJzdGF0ZW1lbnQiLCJjb25zZXF1ZW50Iiwic3VwcG9zaXRpb24iLCJqc29uIiwiZnJvbVN0YXRlbWVudE5vZGVBbmRMYWJlbHMiLCJheGlvbSIsImZyb21TdXBwb3NpdGlvblN0YXRlbWVudE5vZGVDb25zZXF1ZW50U3RhdGVtZW50Tm9kZUFuZExhYmVscyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFJcUJBOzs7c0JBRk07Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRVosSUFBQSxBQUFNQSxzQkFBTjthQUFNQSxNQUNQQyxNQUFNLEVBQUVDLGFBQWEsRUFBRUMsd0JBQXdCLEVBQUVDLHVCQUF1Qjs4QkFEakVKO1FBRWpCLElBQUksQ0FBQ0MsTUFBTSxHQUFHQTtRQUNkLElBQUksQ0FBQ0MsYUFBYSxHQUFHQTtRQUNyQixJQUFJLENBQUNDLHdCQUF3QixHQUFHQTtRQUNoQyxJQUFJLENBQUNDLHVCQUF1QixHQUFHQTs7aUJBTGRKOztZQVFuQkssS0FBQUE7bUJBQUFBLFNBQUFBLFlBQVk7Z0JBQ1YsT0FBTyxJQUFJLENBQUNKLE1BQU07WUFDcEI7OztZQUVBSyxLQUFBQTttQkFBQUEsU0FBQUEsbUJBQW1CO2dCQUNqQixPQUFPLElBQUksQ0FBQ0osYUFBYTtZQUMzQjs7O1lBRUFLLEtBQUFBO21CQUFBQSxTQUFBQSw4QkFBOEI7Z0JBQzVCLE9BQU8sSUFBSSxDQUFDSix3QkFBd0I7WUFDdEM7OztZQUVBSyxLQUFBQTttQkFBQUEsU0FBQUEsNkJBQTZCO2dCQUMzQixPQUFPLElBQUksQ0FBQ0osdUJBQXVCO1lBQ3JDOzs7WUFFQUssS0FBQUE7bUJBQUFBLFNBQUFBLGVBQWVDLFNBQVMsRUFBRTtnQkFDeEIsSUFBTUMsbUJBQW1CLElBQUksQ0FBQ1YsTUFBTSxDQUFDVyxJQUFJLENBQUMsU0FBQ0MsT0FBVTtvQkFDbkQsSUFBTUMsT0FBT0osV0FDUEssbUJBQW1CRixNQUFNRyxTQUFTLENBQUNGO29CQUV6QyxJQUFJQyxrQkFBa0I7d0JBQ3BCLE9BQU8sSUFBSTtvQkFDYixDQUFDO2dCQUNIO2dCQUVBLE9BQU9KO1lBQ1Q7OztZQUVBTSxLQUFBQTttQkFBQUEsU0FBQUEsU0FBUztnQkFDUCxJQUFNQyxhQUFhLElBQUksQ0FBQ2pCLE1BQU0sQ0FBQ2tCLEdBQUcsQ0FBQyxTQUFDTixPQUFVO29CQUN0QyxJQUFNTyxZQUFZUCxNQUFNSSxNQUFNO29CQUU5QixPQUFPRztnQkFDVCxJQUNBQyxrQkFBa0IsQUFBQyxJQUFJLENBQUNuQixhQUFhLEtBQUssSUFBSSxHQUN6QixJQUFJLEdBQ0ZvQixJQUFBQSxvQkFBWSxFQUFDLElBQUksQ0FBQ3BCLGFBQWEsQ0FBQyxFQUN2RHFCLDRCQUE0QixBQUFDLElBQUksQ0FBQ25CLHVCQUF1QixLQUFLLElBQUksR0FDbkMsSUFBSSxHQUNGa0IsSUFBQUEsb0JBQVksRUFBQyxJQUFJLENBQUNsQix1QkFBdUIsQ0FBQyxFQUMzRW9CLDZCQUE2QixBQUFDLElBQUksQ0FBQ3JCLHdCQUF3QixLQUFLLElBQUksR0FDcEMsSUFBSSxHQUNGbUIsSUFBQUEsb0JBQVksRUFBQyxJQUFJLENBQUNuQix3QkFBd0IsQ0FBQyxFQUM3RUYsU0FBU2lCLFlBQ1RPLFlBQVlKLGlCQUNaSyxhQUFhSCwyQkFDYkksY0FBY0gsNEJBQ2RJLE9BQU87b0JBQ0wzQixRQUFBQTtvQkFDQXdCLFdBQUFBO29CQUNBQyxZQUFBQTtvQkFDQUMsYUFBQUE7Z0JBQ0Y7Z0JBRU4sT0FBT0M7WUFDVDs7OztZQUVPQyxLQUFBQTttQkFBUCxTQUFPQSwyQkFBMkIzQixhQUFhLEVBQUVELE1BQU0sRUFBRTtnQkFDdkQsSUFBTUUsMkJBQTJCLElBQUksRUFDL0JDLDBCQUEwQixJQUFJLEVBQzlCMEIsUUFBUSxJQXJFRzlCLE1BcUVPQyxRQUFRQyxlQUFlQywwQkFBMEJDO2dCQUV6RSxPQUFPMEI7WUFDVDs7O1lBRU9DLEtBQUFBO21CQUFQLFNBQU9BLDZEQUE2RDVCLHdCQUF3QixFQUFFQyx1QkFBdUIsRUFBRUgsTUFBTSxFQUFFO2dCQUM3SCxJQUFNQyxnQkFBZ0IsSUFBSSxFQUNwQjRCLFFBQVEsSUE1RUc5QixNQTRFT0MsUUFBUUMsZUFBZUMsMEJBQTBCQztnQkFFekUsT0FBTzBCO1lBQ1Q7OztXQS9FbUI5QiJ9