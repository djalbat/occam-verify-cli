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
var _kinds = require("./kinds");
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
            key: "toJSON",
            value: function toJSON() {
                var statementString = (0, _string.nodeAsString)(this.statementNode), consequentStatementString = (0, _string.nodeAsString)(this.consequentStatementNode), suppositionStatementString = (0, _string.nodeAsString)(this.suppositionStatementNode), kind = _kinds.AXIOM_KIND, statement = statementString, consequent = consequentStatementString, supposition = suppositionStatementString, json = this.labels.map(function(label) {
                    var labelString = label.asString();
                    label = labelString; ///
                    return {
                        kind: kind,
                        label: label,
                        statement: statement,
                        consequent: consequent,
                        supposition: supposition
                    };
                });
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9heGlvbS5qcyIsIjw8anN4LWNvbmZpZy1wcmFnbWEuanM+PiJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgQVhJT01fS0lORCB9IGZyb20gXCIuL2tpbmRzXCI7XG5pbXBvcnQgeyBub2RlQXNTdHJpbmcgfSBmcm9tIFwiLi91dGlsaXRpZXMvc3RyaW5nXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEF4aW9tIHtcbiAgY29uc3RydWN0b3IobGFiZWxzLCBzdGF0ZW1lbnROb2RlLCBzdXBwb3NpdGlvblN0YXRlbWVudE5vZGUsIGNvbnNlcXVlbnRTdGF0ZW1lbnROb2RlKSB7XG4gICAgdGhpcy5sYWJlbHMgPSBsYWJlbHM7XG4gICAgdGhpcy5zdGF0ZW1lbnROb2RlID0gc3RhdGVtZW50Tm9kZTtcbiAgICB0aGlzLnN1cHBvc2l0aW9uU3RhdGVtZW50Tm9kZSA9IHN1cHBvc2l0aW9uU3RhdGVtZW50Tm9kZTtcbiAgICB0aGlzLmNvbnNlcXVlbnRTdGF0ZW1lbnROb2RlID0gY29uc2VxdWVudFN0YXRlbWVudE5vZGU7XG4gIH1cblxuICBnZXRMYWJlbHMoKSB7XG4gICAgcmV0dXJuIHRoaXMubGFiZWxzO1xuICB9XG5cbiAgZ2V0U3RhdGVtZW50Tm9kZSgpIHtcbiAgICByZXR1cm4gdGhpcy5zdGF0ZW1lbnROb2RlO1xuICB9XG5cbiAgZ2V0U3VwcG9zaXRpb25TdGF0ZW1lbnROb2RlKCkge1xuICAgIHJldHVybiB0aGlzLnN1cHBvc2l0aW9uU3RhdGVtZW50Tm9kZTtcbiAgfVxuXG4gIGdldENvbnNlcXVlbnRTdGF0ZW1lbnROb2RlKCkge1xuICAgIHJldHVybiB0aGlzLmNvbnNlcXVlbnRTdGF0ZW1lbnROb2RlO1xuICB9XG5cbiAgbWF0Y2hMYWJlbE5hbWUobGFiZWxOYW1lKSB7XG4gICAgY29uc3QgbWF0Y2hlc0xhYmVsTmFtZSA9IHRoaXMubGFiZWxzLnNvbWUoKGxhYmVsKSA9PiB7XG4gICAgICBjb25zdCBuYW1lID0gbGFiZWxOYW1lLCAvLy9cbiAgICAgICAgICAgIGxhYmVsTWF0Y2hlc05hbWUgPSBsYWJlbC5tYXRjaE5hbWUobmFtZSk7XG5cbiAgICAgIGlmIChsYWJlbE1hdGNoZXNOYW1lKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIG1hdGNoZXNMYWJlbE5hbWU7XG4gIH1cblxuICB0b0pTT04oKSB7XG4gICAgY29uc3Qgc3RhdGVtZW50U3RyaW5nID0gbm9kZUFzU3RyaW5nKHRoaXMuc3RhdGVtZW50Tm9kZSksXG4gICAgICAgICAgY29uc2VxdWVudFN0YXRlbWVudFN0cmluZyA9IG5vZGVBc1N0cmluZyh0aGlzLmNvbnNlcXVlbnRTdGF0ZW1lbnROb2RlKSxcbiAgICAgICAgICBzdXBwb3NpdGlvblN0YXRlbWVudFN0cmluZyA9IG5vZGVBc1N0cmluZyh0aGlzLnN1cHBvc2l0aW9uU3RhdGVtZW50Tm9kZSksXG4gICAgICAgICAga2luZCA9IEFYSU9NX0tJTkQsXG4gICAgICAgICAgc3RhdGVtZW50ID0gc3RhdGVtZW50U3RyaW5nLCAgLy8vXG4gICAgICAgICAgY29uc2VxdWVudCA9IGNvbnNlcXVlbnRTdGF0ZW1lbnRTdHJpbmcsIC8vL1xuICAgICAgICAgIHN1cHBvc2l0aW9uID0gc3VwcG9zaXRpb25TdGF0ZW1lbnRTdHJpbmcsIC8vL1xuICAgICAgICAgIGpzb24gPSB0aGlzLmxhYmVscy5tYXAoKGxhYmVsKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBsYWJlbFN0cmluZyA9IGxhYmVsLmFzU3RyaW5nKCk7XG5cbiAgICAgICAgICAgIGxhYmVsID0gbGFiZWxTdHJpbmc7ICAvLy9cblxuICAgICAgICAgICAgcmV0dXJuICh7XG4gICAgICAgICAgICAgIGtpbmQsXG4gICAgICAgICAgICAgIGxhYmVsLFxuICAgICAgICAgICAgICBzdGF0ZW1lbnQsXG4gICAgICAgICAgICAgIGNvbnNlcXVlbnQsXG4gICAgICAgICAgICAgIHN1cHBvc2l0aW9uXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9KTtcblxuICAgIHJldHVybiBqc29uO1xuICB9XG5cbiAgc3RhdGljIGZyb21TdGF0ZW1lbnROb2RlQW5kTGFiZWxzKHN0YXRlbWVudE5vZGUsIGxhYmVscykge1xuICAgIGNvbnN0IHN1cHBvc2l0aW9uU3RhdGVtZW50Tm9kZSA9IG51bGwsXG4gICAgICAgICAgY29uc2VxdWVudFN0YXRlbWVudE5vZGUgPSBudWxsLFxuICAgICAgICAgIGF4aW9tID0gbmV3IEF4aW9tKGxhYmVscywgc3RhdGVtZW50Tm9kZSwgc3VwcG9zaXRpb25TdGF0ZW1lbnROb2RlLCBjb25zZXF1ZW50U3RhdGVtZW50Tm9kZSk7XG5cbiAgICByZXR1cm4gYXhpb207XG4gIH1cblxuICBzdGF0aWMgZnJvbVN1cHBvc2l0aW9uU3RhdGVtZW50Tm9kZUNvbnNlcXVlbnRTdGF0ZW1lbnROb2RlQW5kTGFiZWxzKHN1cHBvc2l0aW9uU3RhdGVtZW50Tm9kZSwgY29uc2VxdWVudFN0YXRlbWVudE5vZGUsIGxhYmVscykge1xuICAgIGNvbnN0IHN0YXRlbWVudE5vZGUgPSBudWxsLFxuICAgICAgICAgIGF4aW9tID0gbmV3IEF4aW9tKGxhYmVscywgc3RhdGVtZW50Tm9kZSwgc3VwcG9zaXRpb25TdGF0ZW1lbnROb2RlLCBjb25zZXF1ZW50U3RhdGVtZW50Tm9kZSk7XG5cbiAgICByZXR1cm4gYXhpb207XG4gIH1cbn1cbiIsIlJlYWN0LmNyZWF0ZUVsZW1lbnQiXSwibmFtZXMiOlsiQXhpb20iLCJsYWJlbHMiLCJzdGF0ZW1lbnROb2RlIiwic3VwcG9zaXRpb25TdGF0ZW1lbnROb2RlIiwiY29uc2VxdWVudFN0YXRlbWVudE5vZGUiLCJnZXRMYWJlbHMiLCJnZXRTdGF0ZW1lbnROb2RlIiwiZ2V0U3VwcG9zaXRpb25TdGF0ZW1lbnROb2RlIiwiZ2V0Q29uc2VxdWVudFN0YXRlbWVudE5vZGUiLCJtYXRjaExhYmVsTmFtZSIsImxhYmVsTmFtZSIsIm1hdGNoZXNMYWJlbE5hbWUiLCJzb21lIiwibGFiZWwiLCJuYW1lIiwibGFiZWxNYXRjaGVzTmFtZSIsIm1hdGNoTmFtZSIsInRvSlNPTiIsInN0YXRlbWVudFN0cmluZyIsIm5vZGVBc1N0cmluZyIsImNvbnNlcXVlbnRTdGF0ZW1lbnRTdHJpbmciLCJzdXBwb3NpdGlvblN0YXRlbWVudFN0cmluZyIsImtpbmQiLCJBWElPTV9LSU5EIiwic3RhdGVtZW50IiwiY29uc2VxdWVudCIsInN1cHBvc2l0aW9uIiwianNvbiIsIm1hcCIsImxhYmVsU3RyaW5nIiwiYXNTdHJpbmciLCJmcm9tU3RhdGVtZW50Tm9kZUFuZExhYmVscyIsImF4aW9tIiwiZnJvbVN1cHBvc2l0aW9uU3RhdGVtZW50Tm9kZUNvbnNlcXVlbnRTdGF0ZW1lbnROb2RlQW5kTGFiZWxzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQUtxQkE7OztxQkFITTtzQkFDRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFZCxJQUFBLEFBQU1BLHNCQUFOO2FBQU1BLE1BQ1BDLE1BQU0sRUFBRUMsYUFBYSxFQUFFQyx3QkFBd0IsRUFBRUMsdUJBQXVCOzhCQURqRUo7UUFFakIsSUFBSSxDQUFDQyxNQUFNLEdBQUdBO1FBQ2QsSUFBSSxDQUFDQyxhQUFhLEdBQUdBO1FBQ3JCLElBQUksQ0FBQ0Msd0JBQXdCLEdBQUdBO1FBQ2hDLElBQUksQ0FBQ0MsdUJBQXVCLEdBQUdBOztpQkFMZEo7O1lBUW5CSyxLQUFBQTttQkFBQUEsU0FBQUEsWUFBWTtnQkFDVixPQUFPLElBQUksQ0FBQ0osTUFBTTtZQUNwQjs7O1lBRUFLLEtBQUFBO21CQUFBQSxTQUFBQSxtQkFBbUI7Z0JBQ2pCLE9BQU8sSUFBSSxDQUFDSixhQUFhO1lBQzNCOzs7WUFFQUssS0FBQUE7bUJBQUFBLFNBQUFBLDhCQUE4QjtnQkFDNUIsT0FBTyxJQUFJLENBQUNKLHdCQUF3QjtZQUN0Qzs7O1lBRUFLLEtBQUFBO21CQUFBQSxTQUFBQSw2QkFBNkI7Z0JBQzNCLE9BQU8sSUFBSSxDQUFDSix1QkFBdUI7WUFDckM7OztZQUVBSyxLQUFBQTttQkFBQUEsU0FBQUEsZUFBZUMsU0FBUyxFQUFFO2dCQUN4QixJQUFNQyxtQkFBbUIsSUFBSSxDQUFDVixNQUFNLENBQUNXLElBQUksQ0FBQyxTQUFDQyxPQUFVO29CQUNuRCxJQUFNQyxPQUFPSixXQUNQSyxtQkFBbUJGLE1BQU1HLFNBQVMsQ0FBQ0Y7b0JBRXpDLElBQUlDLGtCQUFrQjt3QkFDcEIsT0FBTyxJQUFJO29CQUNiLENBQUM7Z0JBQ0g7Z0JBRUEsT0FBT0o7WUFDVDs7O1lBRUFNLEtBQUFBO21CQUFBQSxTQUFBQSxTQUFTO2dCQUNQLElBQU1DLGtCQUFrQkMsSUFBQUEsb0JBQVksRUFBQyxJQUFJLENBQUNqQixhQUFhLEdBQ2pEa0IsNEJBQTRCRCxJQUFBQSxvQkFBWSxFQUFDLElBQUksQ0FBQ2YsdUJBQXVCLEdBQ3JFaUIsNkJBQTZCRixJQUFBQSxvQkFBWSxFQUFDLElBQUksQ0FBQ2hCLHdCQUF3QixHQUN2RW1CLE9BQU9DLGlCQUFVLEVBQ2pCQyxZQUFZTixpQkFDWk8sYUFBYUwsMkJBQ2JNLGNBQWNMLDRCQUNkTSxPQUFPLElBQUksQ0FBQzFCLE1BQU0sQ0FBQzJCLEdBQUcsQ0FBQyxTQUFDZixPQUFVO29CQUNoQyxJQUFNZ0IsY0FBY2hCLE1BQU1pQixRQUFRO29CQUVsQ2pCLFFBQVFnQixhQUFjLEdBQUc7b0JBRXpCLE9BQVE7d0JBQ05QLE1BQUFBO3dCQUNBVCxPQUFBQTt3QkFDQVcsV0FBQUE7d0JBQ0FDLFlBQUFBO3dCQUNBQyxhQUFBQTtvQkFDRjtnQkFDRjtnQkFFTixPQUFPQztZQUNUOzs7O1lBRU9JLEtBQUFBO21CQUFQLFNBQU9BLDJCQUEyQjdCLGFBQWEsRUFBRUQsTUFBTSxFQUFFO2dCQUN2RCxJQUFNRSwyQkFBMkIsSUFBSSxFQUMvQkMsMEJBQTBCLElBQUksRUFDOUI0QixRQUFRLElBakVHaEMsTUFpRU9DLFFBQVFDLGVBQWVDLDBCQUEwQkM7Z0JBRXpFLE9BQU80QjtZQUNUOzs7WUFFT0MsS0FBQUE7bUJBQVAsU0FBT0EsNkRBQTZEOUIsd0JBQXdCLEVBQUVDLHVCQUF1QixFQUFFSCxNQUFNLEVBQUU7Z0JBQzdILElBQU1DLGdCQUFnQixJQUFJLEVBQ3BCOEIsUUFBUSxJQXhFR2hDLE1Bd0VPQyxRQUFRQyxlQUFlQywwQkFBMEJDO2dCQUV6RSxPQUFPNEI7WUFDVDs7O1dBM0VtQmhDIn0=