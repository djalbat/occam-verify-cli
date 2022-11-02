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
            key: "toString",
            value: function toString() {
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9heGlvbS5qcyIsIjw8anN4LWNvbmZpZy1wcmFnbWEuanM+PiJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHtub2RlQXNTdHJpbmd9IGZyb20gXCIuL3V0aWxpdGllcy9zdHJpbmdcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXhpb20ge1xuICBjb25zdHJ1Y3RvcihsYWJlbHMsIHN0YXRlbWVudE5vZGUsIHN1cHBvc2l0aW9uU3RhdGVtZW50Tm9kZSwgY29uc2VxdWVudFN0YXRlbWVudE5vZGUpIHtcbiAgICB0aGlzLmxhYmVscyA9IGxhYmVscztcbiAgICB0aGlzLnN0YXRlbWVudE5vZGUgPSBzdGF0ZW1lbnROb2RlO1xuICAgIHRoaXMuc3VwcG9zaXRpb25TdGF0ZW1lbnROb2RlID0gc3VwcG9zaXRpb25TdGF0ZW1lbnROb2RlO1xuICAgIHRoaXMuY29uc2VxdWVudFN0YXRlbWVudE5vZGUgPSBjb25zZXF1ZW50U3RhdGVtZW50Tm9kZTtcbiAgfVxuXG4gIGdldExhYmVscygpIHtcbiAgICByZXR1cm4gdGhpcy5sYWJlbHM7XG4gIH1cblxuICBnZXRTdGF0ZW1lbnROb2RlKCkge1xuICAgIHJldHVybiB0aGlzLnN0YXRlbWVudE5vZGU7XG4gIH1cblxuICBnZXRTdXBwb3NpdGlvblN0YXRlbWVudE5vZGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3VwcG9zaXRpb25TdGF0ZW1lbnROb2RlO1xuICB9XG5cbiAgZ2V0Q29uc2VxdWVudFN0YXRlbWVudE5vZGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuY29uc2VxdWVudFN0YXRlbWVudE5vZGU7XG4gIH1cblxuICBtYXRjaExhYmVsTmFtZShsYWJlbE5hbWUpIHtcbiAgICBjb25zdCBtYXRjaGVzTGFiZWxOYW1lID0gdGhpcy5sYWJlbHMuc29tZSgobGFiZWwpID0+IHtcbiAgICAgIGNvbnN0IG5hbWUgPSBsYWJlbE5hbWUsIC8vL1xuICAgICAgICAgICAgbGFiZWxNYXRjaGVzTmFtZSA9IGxhYmVsLm1hdGNoTmFtZShuYW1lKTtcblxuICAgICAgaWYgKGxhYmVsTWF0Y2hlc05hbWUpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gbWF0Y2hlc0xhYmVsTmFtZTtcbiAgfVxuXG4gIHRvU3RyaW5nKCkge1xuICAgIGNvbnN0IGxhYmVsc0pTT04gPSB0aGlzLmxhYmVscy5tYXAoKGxhYmVsKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBsYWJlbEpTT04gPSBsYWJlbC5hc0pTT04oKTtcblxuICAgICAgICAgICAgcmV0dXJuIGxhYmVsSlNPTjtcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBzdGF0ZW1lbnRTdHJpbmcgPSAodGhpcy5zdGF0ZW1lbnROb2RlID09PSBudWxsKSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbnVsbCA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub2RlQXNTdHJpbmcodGhpcy5zdGF0ZW1lbnROb2RlKSxcbiAgICAgICAgICBjb25zZXF1ZW50U3RhdGVtZW50U3RyaW5nID0gKHRoaXMuY29uc2VxdWVudFN0YXRlbWVudE5vZGUgPT09IG51bGwpID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbnVsbCA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9kZUFzU3RyaW5nKHRoaXMuY29uc2VxdWVudFN0YXRlbWVudE5vZGUpLFxuICAgICAgICAgIHN1cHBvc2l0aW9uU3RhdGVtZW50U3RyaW5nID0gKHRoaXMuc3VwcG9zaXRpb25TdGF0ZW1lbnROb2RlID09PSBudWxsKSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBudWxsIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9kZUFzU3RyaW5nKHRoaXMuc3VwcG9zaXRpb25TdGF0ZW1lbnROb2RlKSxcbiAgICAgICAgICBsYWJlbHMgPSBsYWJlbHNKU09OLCAgLy8vXG4gICAgICAgICAgc3RhdGVtZW50ID0gc3RhdGVtZW50U3RyaW5nLCAgLy8vXG4gICAgICAgICAgY29uc2VxdWVudCA9IGNvbnNlcXVlbnRTdGF0ZW1lbnRTdHJpbmcsIC8vL1xuICAgICAgICAgIHN1cHBvc2l0aW9uID0gc3VwcG9zaXRpb25TdGF0ZW1lbnRTdHJpbmcsIC8vL1xuICAgICAgICAgIGpzb24gPSB7XG4gICAgICAgICAgICBsYWJlbHMsXG4gICAgICAgICAgICBzdGF0ZW1lbnQsXG4gICAgICAgICAgICBjb25zZXF1ZW50LFxuICAgICAgICAgICAgc3VwcG9zaXRpb25cbiAgICAgICAgICB9O1xuXG4gICAgcmV0dXJuIGpzb247XG4gIH1cblxuICBzdGF0aWMgZnJvbVN0YXRlbWVudE5vZGVBbmRMYWJlbHMoc3RhdGVtZW50Tm9kZSwgbGFiZWxzKSB7XG4gICAgY29uc3Qgc3VwcG9zaXRpb25TdGF0ZW1lbnROb2RlID0gbnVsbCxcbiAgICAgICAgICBjb25zZXF1ZW50U3RhdGVtZW50Tm9kZSA9IG51bGwsXG4gICAgICAgICAgYXhpb20gPSBuZXcgQXhpb20obGFiZWxzLCBzdGF0ZW1lbnROb2RlLCBzdXBwb3NpdGlvblN0YXRlbWVudE5vZGUsIGNvbnNlcXVlbnRTdGF0ZW1lbnROb2RlKTtcblxuICAgIHJldHVybiBheGlvbTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tU3VwcG9zaXRpb25TdGF0ZW1lbnROb2RlQ29uc2VxdWVudFN0YXRlbWVudE5vZGVBbmRMYWJlbHMoc3VwcG9zaXRpb25TdGF0ZW1lbnROb2RlLCBjb25zZXF1ZW50U3RhdGVtZW50Tm9kZSwgbGFiZWxzKSB7XG4gICAgY29uc3Qgc3RhdGVtZW50Tm9kZSA9IG51bGwsXG4gICAgICAgICAgYXhpb20gPSBuZXcgQXhpb20obGFiZWxzLCBzdGF0ZW1lbnROb2RlLCBzdXBwb3NpdGlvblN0YXRlbWVudE5vZGUsIGNvbnNlcXVlbnRTdGF0ZW1lbnROb2RlKTtcblxuICAgIHJldHVybiBheGlvbTtcbiAgfVxufVxuIiwiUmVhY3QuY3JlYXRlRWxlbWVudCJdLCJuYW1lcyI6WyJBeGlvbSIsImxhYmVscyIsInN0YXRlbWVudE5vZGUiLCJzdXBwb3NpdGlvblN0YXRlbWVudE5vZGUiLCJjb25zZXF1ZW50U3RhdGVtZW50Tm9kZSIsImdldExhYmVscyIsImdldFN0YXRlbWVudE5vZGUiLCJnZXRTdXBwb3NpdGlvblN0YXRlbWVudE5vZGUiLCJnZXRDb25zZXF1ZW50U3RhdGVtZW50Tm9kZSIsIm1hdGNoTGFiZWxOYW1lIiwibGFiZWxOYW1lIiwibWF0Y2hlc0xhYmVsTmFtZSIsInNvbWUiLCJsYWJlbCIsIm5hbWUiLCJsYWJlbE1hdGNoZXNOYW1lIiwibWF0Y2hOYW1lIiwidG9TdHJpbmciLCJsYWJlbHNKU09OIiwibWFwIiwibGFiZWxKU09OIiwiYXNKU09OIiwic3RhdGVtZW50U3RyaW5nIiwibm9kZUFzU3RyaW5nIiwiY29uc2VxdWVudFN0YXRlbWVudFN0cmluZyIsInN1cHBvc2l0aW9uU3RhdGVtZW50U3RyaW5nIiwic3RhdGVtZW50IiwiY29uc2VxdWVudCIsInN1cHBvc2l0aW9uIiwianNvbiIsImZyb21TdGF0ZW1lbnROb2RlQW5kTGFiZWxzIiwiYXhpb20iLCJmcm9tU3VwcG9zaXRpb25TdGF0ZW1lbnROb2RlQ29uc2VxdWVudFN0YXRlbWVudE5vZGVBbmRMYWJlbHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBSXFCQTs7O3NCQUZNOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVaLElBQUEsQUFBTUEsc0JBQU47YUFBTUEsTUFDUEMsTUFBTSxFQUFFQyxhQUFhLEVBQUVDLHdCQUF3QixFQUFFQyx1QkFBdUI7OEJBRGpFSjtRQUVqQixJQUFJLENBQUNDLE1BQU0sR0FBR0E7UUFDZCxJQUFJLENBQUNDLGFBQWEsR0FBR0E7UUFDckIsSUFBSSxDQUFDQyx3QkFBd0IsR0FBR0E7UUFDaEMsSUFBSSxDQUFDQyx1QkFBdUIsR0FBR0E7O2lCQUxkSjs7WUFRbkJLLEtBQUFBO21CQUFBQSxTQUFBQSxZQUFZO2dCQUNWLE9BQU8sSUFBSSxDQUFDSixNQUFNO1lBQ3BCOzs7WUFFQUssS0FBQUE7bUJBQUFBLFNBQUFBLG1CQUFtQjtnQkFDakIsT0FBTyxJQUFJLENBQUNKLGFBQWE7WUFDM0I7OztZQUVBSyxLQUFBQTttQkFBQUEsU0FBQUEsOEJBQThCO2dCQUM1QixPQUFPLElBQUksQ0FBQ0osd0JBQXdCO1lBQ3RDOzs7WUFFQUssS0FBQUE7bUJBQUFBLFNBQUFBLDZCQUE2QjtnQkFDM0IsT0FBTyxJQUFJLENBQUNKLHVCQUF1QjtZQUNyQzs7O1lBRUFLLEtBQUFBO21CQUFBQSxTQUFBQSxlQUFlQyxTQUFTLEVBQUU7Z0JBQ3hCLElBQU1DLG1CQUFtQixJQUFJLENBQUNWLE1BQU0sQ0FBQ1csSUFBSSxDQUFDLFNBQUNDLE9BQVU7b0JBQ25ELElBQU1DLE9BQU9KLFdBQ1BLLG1CQUFtQkYsTUFBTUcsU0FBUyxDQUFDRjtvQkFFekMsSUFBSUMsa0JBQWtCO3dCQUNwQixPQUFPLElBQUk7b0JBQ2IsQ0FBQztnQkFDSDtnQkFFQSxPQUFPSjtZQUNUOzs7WUFFQU0sS0FBQUE7bUJBQUFBLFNBQUFBLFdBQVc7Z0JBQ1QsSUFBTUMsYUFBYSxJQUFJLENBQUNqQixNQUFNLENBQUNrQixHQUFHLENBQUMsU0FBQ04sT0FBVTtvQkFDdEMsSUFBTU8sWUFBWVAsTUFBTVEsTUFBTTtvQkFFOUIsT0FBT0Q7Z0JBQ1QsSUFDQUUsa0JBQWtCLEFBQUMsSUFBSSxDQUFDcEIsYUFBYSxLQUFLLElBQUksR0FDekIsSUFBSSxHQUNGcUIsSUFBQUEsb0JBQVksRUFBQyxJQUFJLENBQUNyQixhQUFhLENBQUMsRUFDdkRzQiw0QkFBNEIsQUFBQyxJQUFJLENBQUNwQix1QkFBdUIsS0FBSyxJQUFJLEdBQ25DLElBQUksR0FDRm1CLElBQUFBLG9CQUFZLEVBQUMsSUFBSSxDQUFDbkIsdUJBQXVCLENBQUMsRUFDM0VxQiw2QkFBNkIsQUFBQyxJQUFJLENBQUN0Qix3QkFBd0IsS0FBSyxJQUFJLEdBQ3BDLElBQUksR0FDRm9CLElBQUFBLG9CQUFZLEVBQUMsSUFBSSxDQUFDcEIsd0JBQXdCLENBQUMsRUFDN0VGLFNBQVNpQixZQUNUUSxZQUFZSixpQkFDWkssYUFBYUgsMkJBQ2JJLGNBQWNILDRCQUNkSSxPQUFPO29CQUNMNUIsUUFBQUE7b0JBQ0F5QixXQUFBQTtvQkFDQUMsWUFBQUE7b0JBQ0FDLGFBQUFBO2dCQUNGO2dCQUVOLE9BQU9DO1lBQ1Q7Ozs7WUFFT0MsS0FBQUE7bUJBQVAsU0FBT0EsMkJBQTJCNUIsYUFBYSxFQUFFRCxNQUFNLEVBQUU7Z0JBQ3ZELElBQU1FLDJCQUEyQixJQUFJLEVBQy9CQywwQkFBMEIsSUFBSSxFQUM5QjJCLFFBQVEsSUFyRUcvQixNQXFFT0MsUUFBUUMsZUFBZUMsMEJBQTBCQztnQkFFekUsT0FBTzJCO1lBQ1Q7OztZQUVPQyxLQUFBQTttQkFBUCxTQUFPQSw2REFBNkQ3Qix3QkFBd0IsRUFBRUMsdUJBQXVCLEVBQUVILE1BQU0sRUFBRTtnQkFDN0gsSUFBTUMsZ0JBQWdCLElBQUksRUFDcEI2QixRQUFRLElBNUVHL0IsTUE0RU9DLFFBQVFDLGVBQWVDLDBCQUEwQkM7Z0JBRXpFLE9BQU8yQjtZQUNUOzs7V0EvRW1CL0IifQ==