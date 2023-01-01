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
var _label = /*#__PURE__*/ _interopRequireDefault(require("./label"));
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
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var Axiom = /*#__PURE__*/ function() {
    function Axiom(labels, unqualifiedStatementNode, indicativeConditionalNode) {
        _classCallCheck(this, Axiom);
        this.labels = labels;
        this.unqualifiedStatementNode = unqualifiedStatementNode;
        this.indicativeConditionalNode = indicativeConditionalNode;
    }
    _createClass(Axiom, [
        {
            key: "getLabels",
            value: function getLabels() {
                return this.labels;
            }
        },
        {
            key: "getUnqualifiedStatementNode",
            value: function getUnqualifiedStatementNode() {
                return this.unqualifiedStatementNode;
            }
        },
        {
            key: "getIndicativeConditionalNode",
            value: function getIndicativeConditionalNode() {
                return this.indicativeConditionalNode;
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
                var labelsJSON = this.labels.map(function(label) {
                    var labelJSON = label.toJSON();
                    return labelJSON;
                }), unqualifiedStatementString = (0, _string.nodeAsString)(this.unqualifiedStatementNode), indicativeConditionalString = (0, _string.nodeAsString)(this.indicativeConditionalNode), kind = _kinds.AXIOM_KIND, labels = labelsJSON, unqualifiedStatement = unqualifiedStatementString, indicativeConditional = indicativeConditionalString, json = {
                    kind: kind,
                    labels: labels,
                    unqualifiedStatement: unqualifiedStatement,
                    indicativeConditional: indicativeConditional
                };
                return json;
            }
        }
    ], [
        {
            key: "fromJSON",
            value: function fromJSON(json, releaseContext) {
                var labels = json.labels;
                var labelsJSON = labels; ///
                labels = labelsJSON.map(function(labelJSON) {
                    var _$json = labelJSON, label = _label.default.fromJSON(_$json, releaseContext);
                    return label;
                });
                var unqualifiedStatement = json.unqualifiedStatement, indicativeConditional = json.indicativeConditional;
                var unqualifiedStatementNode = null, indicativeConditionalNode = null;
                if (unqualifiedStatement !== null) {
                    var unqualifiedStatementString = unqualifiedStatement; ///
                    unqualifiedStatementNode = (0, _string.unqualifiedStatementNodeFromUnqualifiedStatementString)(unqualifiedStatementString, releaseContext);
                }
                if (indicativeConditional !== null) {
                    var indicativeConditionalString = indicativeConditional; ///
                    indicativeConditionalNode = (0, _string.indicativeConditionalNodeFromIndicativeConditionalString)(indicativeConditionalString, releaseContext);
                }
                var axiom = new Axiom(labels, unqualifiedStatementNode, indicativeConditionalNode);
                return axiom;
            }
        },
        {
            key: "fromLabelsUnqualifiedStatementNodeAndIndicativeConditionalNode",
            value: function fromLabelsUnqualifiedStatementNodeAndIndicativeConditionalNode(labels, unqualifiedStatementNode, indicativeConditionalNode) {
                var axiom = new Axiom(labels, unqualifiedStatementNode, indicativeConditionalNode);
                return axiom;
            }
        }
    ]);
    return Axiom;
}();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9heGlvbS5qcyIsIjw8anN4LWNvbmZpZy1wcmFnbWEuanM+PiJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IExhYmVsIGZyb20gXCIuL2xhYmVsXCI7XG5cbmltcG9ydCB7IEFYSU9NX0tJTkQgfSBmcm9tIFwiLi9raW5kc1wiO1xuaW1wb3J0IHsgbm9kZUFzU3RyaW5nIH0gZnJvbSBcIi4vdXRpbGl0aWVzL3N0cmluZ1wiO1xuXG5pbXBvcnQgeyB1bnF1YWxpZmllZFN0YXRlbWVudE5vZGVGcm9tVW5xdWFsaWZpZWRTdGF0ZW1lbnRTdHJpbmcsIGluZGljYXRpdmVDb25kaXRpb25hbE5vZGVGcm9tSW5kaWNhdGl2ZUNvbmRpdGlvbmFsU3RyaW5nIH0gZnJvbSBcIi4vdXRpbGl0aWVzL3N0cmluZ1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBeGlvbSB7XG4gIGNvbnN0cnVjdG9yKGxhYmVscywgdW5xdWFsaWZpZWRTdGF0ZW1lbnROb2RlLCBpbmRpY2F0aXZlQ29uZGl0aW9uYWxOb2RlKSB7XG4gICAgdGhpcy5sYWJlbHMgPSBsYWJlbHM7XG4gICAgdGhpcy51bnF1YWxpZmllZFN0YXRlbWVudE5vZGUgPSB1bnF1YWxpZmllZFN0YXRlbWVudE5vZGU7XG4gICAgdGhpcy5pbmRpY2F0aXZlQ29uZGl0aW9uYWxOb2RlID0gaW5kaWNhdGl2ZUNvbmRpdGlvbmFsTm9kZTtcbiAgfVxuXG4gIGdldExhYmVscygpIHtcbiAgICByZXR1cm4gdGhpcy5sYWJlbHM7XG4gIH1cblxuICBnZXRVbnF1YWxpZmllZFN0YXRlbWVudE5vZGUoKSB7XG4gICAgcmV0dXJuIHRoaXMudW5xdWFsaWZpZWRTdGF0ZW1lbnROb2RlO1xuICB9XG5cbiAgZ2V0SW5kaWNhdGl2ZUNvbmRpdGlvbmFsTm9kZSgpIHtcbiAgICByZXR1cm4gdGhpcy5pbmRpY2F0aXZlQ29uZGl0aW9uYWxOb2RlO1xuICB9XG5cbiAgbWF0Y2hMYWJlbE5hbWUobGFiZWxOYW1lKSB7XG4gICAgY29uc3QgbWF0Y2hlc0xhYmVsTmFtZSA9IHRoaXMubGFiZWxzLnNvbWUoKGxhYmVsKSA9PiB7XG4gICAgICBjb25zdCBuYW1lID0gbGFiZWxOYW1lLCAvLy9cbiAgICAgICAgICAgIGxhYmVsTWF0Y2hlc05hbWUgPSBsYWJlbC5tYXRjaE5hbWUobmFtZSk7XG5cbiAgICAgIGlmIChsYWJlbE1hdGNoZXNOYW1lKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIG1hdGNoZXNMYWJlbE5hbWU7XG4gIH1cblxuICB0b0pTT04oKSB7XG4gICAgY29uc3QgbGFiZWxzSlNPTiA9IHRoaXMubGFiZWxzLm1hcCgobGFiZWwpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGxhYmVsSlNPTiA9IGxhYmVsLnRvSlNPTigpO1xuXG4gICAgICAgICAgICByZXR1cm4gbGFiZWxKU09OO1xuICAgICAgICAgIH0pLFxuICAgICAgICAgIHVucXVhbGlmaWVkU3RhdGVtZW50U3RyaW5nID0gbm9kZUFzU3RyaW5nKHRoaXMudW5xdWFsaWZpZWRTdGF0ZW1lbnROb2RlKSxcbiAgICAgICAgICBpbmRpY2F0aXZlQ29uZGl0aW9uYWxTdHJpbmcgPSBub2RlQXNTdHJpbmcodGhpcy5pbmRpY2F0aXZlQ29uZGl0aW9uYWxOb2RlKSxcbiAgICAgICAgICBraW5kID0gQVhJT01fS0lORCxcbiAgICAgICAgICBsYWJlbHMgPSBsYWJlbHNKU09OLCAgLy8vXG4gICAgICAgICAgdW5xdWFsaWZpZWRTdGF0ZW1lbnQgPSB1bnF1YWxpZmllZFN0YXRlbWVudFN0cmluZywgIC8vL1xuICAgICAgICAgIGluZGljYXRpdmVDb25kaXRpb25hbCA9IGluZGljYXRpdmVDb25kaXRpb25hbFN0cmluZywgIC8vL1xuICAgICAgICAgIGpzb24gPSB7XG4gICAgICAgICAgICBraW5kLFxuICAgICAgICAgICAgbGFiZWxzLFxuICAgICAgICAgICAgdW5xdWFsaWZpZWRTdGF0ZW1lbnQsXG4gICAgICAgICAgICBpbmRpY2F0aXZlQ29uZGl0aW9uYWxcbiAgICAgICAgICB9O1xuXG4gICAgcmV0dXJuIGpzb247XG4gIH1cblxuICBzdGF0aWMgZnJvbUpTT04oanNvbiwgcmVsZWFzZUNvbnRleHQpIHtcbiAgICBsZXQgeyBsYWJlbHMgfSA9IGpzb247XG5cbiAgICBjb25zdCBsYWJlbHNKU09OID0gbGFiZWxzOyAgLy8vXG5cbiAgICBsYWJlbHMgPSBsYWJlbHNKU09OLm1hcCgobGFiZWxKU09OKSA9PiB7XG4gICAgICBjb25zdCBqc29uID0gbGFiZWxKU09OLCAvLy9cbiAgICAgICAgICAgIGxhYmVsID0gTGFiZWwuZnJvbUpTT04oanNvbiwgcmVsZWFzZUNvbnRleHQpO1xuXG4gICAgICByZXR1cm4gbGFiZWw7XG4gICAgfSk7XG5cbiAgICBsZXQgeyB1bnF1YWxpZmllZFN0YXRlbWVudCwgaW5kaWNhdGl2ZUNvbmRpdGlvbmFsIH0gPSBqc29uO1xuXG4gICAgbGV0IHVucXVhbGlmaWVkU3RhdGVtZW50Tm9kZSA9IG51bGwsXG4gICAgICAgIGluZGljYXRpdmVDb25kaXRpb25hbE5vZGUgPSBudWxsO1xuXG4gICAgaWYgKHVucXVhbGlmaWVkU3RhdGVtZW50ICE9PSBudWxsKSB7XG4gICAgICBjb25zdCB1bnF1YWxpZmllZFN0YXRlbWVudFN0cmluZyA9IHVucXVhbGlmaWVkU3RhdGVtZW50OyAgLy8vXG5cbiAgICAgIHVucXVhbGlmaWVkU3RhdGVtZW50Tm9kZSA9IHVucXVhbGlmaWVkU3RhdGVtZW50Tm9kZUZyb21VbnF1YWxpZmllZFN0YXRlbWVudFN0cmluZyh1bnF1YWxpZmllZFN0YXRlbWVudFN0cmluZywgcmVsZWFzZUNvbnRleHQpO1xuICAgIH1cblxuICAgIGlmIChpbmRpY2F0aXZlQ29uZGl0aW9uYWwgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IGluZGljYXRpdmVDb25kaXRpb25hbFN0cmluZyA9IGluZGljYXRpdmVDb25kaXRpb25hbDsgIC8vL1xuXG4gICAgICBpbmRpY2F0aXZlQ29uZGl0aW9uYWxOb2RlID0gaW5kaWNhdGl2ZUNvbmRpdGlvbmFsTm9kZUZyb21JbmRpY2F0aXZlQ29uZGl0aW9uYWxTdHJpbmcoaW5kaWNhdGl2ZUNvbmRpdGlvbmFsU3RyaW5nLCByZWxlYXNlQ29udGV4dCk7XG4gICAgfVxuXG4gICAgY29uc3QgYXhpb20gPSBuZXcgQXhpb20obGFiZWxzLCB1bnF1YWxpZmllZFN0YXRlbWVudE5vZGUsIGluZGljYXRpdmVDb25kaXRpb25hbE5vZGUpO1xuXG4gICAgcmV0dXJuIGF4aW9tO1xuICB9XG5cbiAgc3RhdGljIGZyb21MYWJlbHNVbnF1YWxpZmllZFN0YXRlbWVudE5vZGVBbmRJbmRpY2F0aXZlQ29uZGl0aW9uYWxOb2RlKGxhYmVscywgdW5xdWFsaWZpZWRTdGF0ZW1lbnROb2RlLCBpbmRpY2F0aXZlQ29uZGl0aW9uYWxOb2RlKSB7XG4gICAgY29uc3QgYXhpb20gPSBuZXcgQXhpb20obGFiZWxzLCB1bnF1YWxpZmllZFN0YXRlbWVudE5vZGUsIGluZGljYXRpdmVDb25kaXRpb25hbE5vZGUpO1xuXG4gICAgcmV0dXJuIGF4aW9tO1xuICB9XG59XG4iLCJSZWFjdC5jcmVhdGVFbGVtZW50Il0sIm5hbWVzIjpbIkF4aW9tIiwibGFiZWxzIiwidW5xdWFsaWZpZWRTdGF0ZW1lbnROb2RlIiwiaW5kaWNhdGl2ZUNvbmRpdGlvbmFsTm9kZSIsImdldExhYmVscyIsImdldFVucXVhbGlmaWVkU3RhdGVtZW50Tm9kZSIsImdldEluZGljYXRpdmVDb25kaXRpb25hbE5vZGUiLCJtYXRjaExhYmVsTmFtZSIsImxhYmVsTmFtZSIsIm1hdGNoZXNMYWJlbE5hbWUiLCJzb21lIiwibGFiZWwiLCJuYW1lIiwibGFiZWxNYXRjaGVzTmFtZSIsIm1hdGNoTmFtZSIsInRvSlNPTiIsImxhYmVsc0pTT04iLCJtYXAiLCJsYWJlbEpTT04iLCJ1bnF1YWxpZmllZFN0YXRlbWVudFN0cmluZyIsIm5vZGVBc1N0cmluZyIsImluZGljYXRpdmVDb25kaXRpb25hbFN0cmluZyIsImtpbmQiLCJBWElPTV9LSU5EIiwidW5xdWFsaWZpZWRTdGF0ZW1lbnQiLCJpbmRpY2F0aXZlQ29uZGl0aW9uYWwiLCJqc29uIiwiZnJvbUpTT04iLCJyZWxlYXNlQ29udGV4dCIsIkxhYmVsIiwidW5xdWFsaWZpZWRTdGF0ZW1lbnROb2RlRnJvbVVucXVhbGlmaWVkU3RhdGVtZW50U3RyaW5nIiwiaW5kaWNhdGl2ZUNvbmRpdGlvbmFsTm9kZUZyb21JbmRpY2F0aXZlQ29uZGl0aW9uYWxTdHJpbmciLCJheGlvbSIsImZyb21MYWJlbHNVbnF1YWxpZmllZFN0YXRlbWVudE5vZGVBbmRJbmRpY2F0aXZlQ29uZGl0aW9uYWxOb2RlIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQVNxQkE7OzswREFQSDtxQkFFUztzQkFDRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUlkLElBQUEsQUFBTUEsc0JBQU47YUFBTUEsTUFDUEMsTUFBTSxFQUFFQyx3QkFBd0IsRUFBRUMseUJBQXlCOzhCQURwREg7UUFFakIsSUFBSSxDQUFDQyxNQUFNLEdBQUdBO1FBQ2QsSUFBSSxDQUFDQyx3QkFBd0IsR0FBR0E7UUFDaEMsSUFBSSxDQUFDQyx5QkFBeUIsR0FBR0E7O2lCQUpoQkg7O1lBT25CSSxLQUFBQTttQkFBQUEsU0FBQUEsWUFBWTtnQkFDVixPQUFPLElBQUksQ0FBQ0gsTUFBTTtZQUNwQjs7O1lBRUFJLEtBQUFBO21CQUFBQSxTQUFBQSw4QkFBOEI7Z0JBQzVCLE9BQU8sSUFBSSxDQUFDSCx3QkFBd0I7WUFDdEM7OztZQUVBSSxLQUFBQTttQkFBQUEsU0FBQUEsK0JBQStCO2dCQUM3QixPQUFPLElBQUksQ0FBQ0gseUJBQXlCO1lBQ3ZDOzs7WUFFQUksS0FBQUE7bUJBQUFBLFNBQUFBLGVBQWVDLFNBQVMsRUFBRTtnQkFDeEIsSUFBTUMsbUJBQW1CLElBQUksQ0FBQ1IsTUFBTSxDQUFDUyxJQUFJLENBQUMsU0FBQ0MsT0FBVTtvQkFDbkQsSUFBTUMsT0FBT0osV0FDUEssbUJBQW1CRixNQUFNRyxTQUFTLENBQUNGO29CQUV6QyxJQUFJQyxrQkFBa0I7d0JBQ3BCLE9BQU8sSUFBSTtvQkFDYixDQUFDO2dCQUNIO2dCQUVBLE9BQU9KO1lBQ1Q7OztZQUVBTSxLQUFBQTttQkFBQUEsU0FBQUEsU0FBUztnQkFDUCxJQUFNQyxhQUFhLElBQUksQ0FBQ2YsTUFBTSxDQUFDZ0IsR0FBRyxDQUFDLFNBQUNOLE9BQVU7b0JBQ3RDLElBQU1PLFlBQVlQLE1BQU1JLE1BQU07b0JBRTlCLE9BQU9HO2dCQUNULElBQ0FDLDZCQUE2QkMsSUFBQUEsb0JBQVksRUFBQyxJQUFJLENBQUNsQix3QkFBd0IsR0FDdkVtQiw4QkFBOEJELElBQUFBLG9CQUFZLEVBQUMsSUFBSSxDQUFDakIseUJBQXlCLEdBQ3pFbUIsT0FBT0MsaUJBQVUsRUFDakJ0QixTQUFTZSxZQUNUUSx1QkFBdUJMLDRCQUN2Qk0sd0JBQXdCSiw2QkFDeEJLLE9BQU87b0JBQ0xKLE1BQUFBO29CQUNBckIsUUFBQUE7b0JBQ0F1QixzQkFBQUE7b0JBQ0FDLHVCQUFBQTtnQkFDRjtnQkFFTixPQUFPQztZQUNUOzs7O1lBRU9DLEtBQUFBO21CQUFQLFNBQU9BLFNBQVNELElBQUksRUFBRUUsY0FBYyxFQUFFO2dCQUNwQyxJQUFJLEFBQUUzQixTQUFXeUIsS0FBWHpCO2dCQUVOLElBQU1lLGFBQWFmLFFBQVMsR0FBRztnQkFFL0JBLFNBQVNlLFdBQVdDLEdBQUcsQ0FBQyxTQUFDQyxXQUFjO29CQUNyQyxJQUFNUSxTQUFPUixXQUNQUCxRQUFRa0IsY0FBSyxDQUFDRixRQUFRLENBQUNELFFBQU1FO29CQUVuQyxPQUFPakI7Z0JBQ1Q7Z0JBRUEsSUFBTWEsdUJBQWdERSxLQUFoREYsc0JBQXNCQyx3QkFBMEJDLEtBQTFCRDtnQkFFNUIsSUFBSXZCLDJCQUEyQixJQUFJLEVBQy9CQyw0QkFBNEIsSUFBSTtnQkFFcEMsSUFBSXFCLHlCQUF5QixJQUFJLEVBQUU7b0JBQ2pDLElBQU1MLDZCQUE2Qkssc0JBQXVCLEdBQUc7b0JBRTdEdEIsMkJBQTJCNEIsSUFBQUEsOERBQXNELEVBQUNYLDRCQUE0QlM7Z0JBQ2hILENBQUM7Z0JBRUQsSUFBSUgsMEJBQTBCLElBQUksRUFBRTtvQkFDbEMsSUFBTUosOEJBQThCSSx1QkFBd0IsR0FBRztvQkFFL0R0Qiw0QkFBNEI0QixJQUFBQSxnRUFBd0QsRUFBQ1YsNkJBQTZCTztnQkFDcEgsQ0FBQztnQkFFRCxJQUFNSSxRQUFRLElBbkZHaEMsTUFtRk9DLFFBQVFDLDBCQUEwQkM7Z0JBRTFELE9BQU82QjtZQUNUOzs7WUFFT0MsS0FBQUE7bUJBQVAsU0FBT0EsK0RBQStEaEMsTUFBTSxFQUFFQyx3QkFBd0IsRUFBRUMseUJBQXlCLEVBQUU7Z0JBQ2pJLElBQU02QixRQUFRLElBekZHaEMsTUF5Rk9DLFFBQVFDLDBCQUEwQkM7Z0JBRTFELE9BQU82QjtZQUNUOzs7V0E1Rm1CaEMifQ==