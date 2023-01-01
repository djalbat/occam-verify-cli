"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return Lemma;
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
var Lemma = /*#__PURE__*/ function() {
    function Lemma(labels, unqualifiedStatementNode, indicativeConditionalNode) {
        _classCallCheck(this, Lemma);
        this.labels = labels;
        this.unqualifiedStatementNode = unqualifiedStatementNode;
        this.indicativeConditionalNode = indicativeConditionalNode;
    }
    _createClass(Lemma, [
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
                }), unqualifiedStatementString = (0, _string.nodeAsString)(this.unqalifiedStatementNode), indicativeConditionalString = (0, _string.nodeAsString)(this.indicativeConditionalNode), kind = _kinds.LEMMA_KIND, labels = labelsJSON, unqualifiedStatement = unqualifiedStatementString, indicativeConditional = indicativeConditionalString, json = {
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
                var lemma = new Lemma(labels, unqualifiedStatementNode, indicativeConditionalNode);
                return lemma;
            }
        },
        {
            key: "fromLabelsUnqualifiedStatementNodeAndIndicativeConditionalNode",
            value: function fromLabelsUnqualifiedStatementNodeAndIndicativeConditionalNode(labels, unqualifiedStatementNode, indicativeConditionalNode) {
                var lemma = new Lemma(labels, unqualifiedStatementNode, indicativeConditionalNode);
                return lemma;
            }
        }
    ]);
    return Lemma;
}();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9sZW1tYS5qcyIsIjw8anN4LWNvbmZpZy1wcmFnbWEuanM+PiJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IExhYmVsIGZyb20gXCIuL2xhYmVsXCI7XG5cbmltcG9ydCB7IExFTU1BX0tJTkQgfSBmcm9tIFwiLi9raW5kc1wiO1xuaW1wb3J0IHsgbm9kZUFzU3RyaW5nIH0gZnJvbSBcIi4vdXRpbGl0aWVzL3N0cmluZ1wiO1xuXG5pbXBvcnQgeyB1bnF1YWxpZmllZFN0YXRlbWVudE5vZGVGcm9tVW5xdWFsaWZpZWRTdGF0ZW1lbnRTdHJpbmcsIGluZGljYXRpdmVDb25kaXRpb25hbE5vZGVGcm9tSW5kaWNhdGl2ZUNvbmRpdGlvbmFsU3RyaW5nIH0gZnJvbSBcIi4vdXRpbGl0aWVzL3N0cmluZ1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMZW1tYSB7XG4gIGNvbnN0cnVjdG9yKGxhYmVscywgdW5xdWFsaWZpZWRTdGF0ZW1lbnROb2RlLCBpbmRpY2F0aXZlQ29uZGl0aW9uYWxOb2RlKSB7XG4gICAgdGhpcy5sYWJlbHMgPSBsYWJlbHM7XG4gICAgdGhpcy51bnF1YWxpZmllZFN0YXRlbWVudE5vZGUgPSB1bnF1YWxpZmllZFN0YXRlbWVudE5vZGU7XG4gICAgdGhpcy5pbmRpY2F0aXZlQ29uZGl0aW9uYWxOb2RlID0gaW5kaWNhdGl2ZUNvbmRpdGlvbmFsTm9kZTtcbiAgfVxuXG4gIGdldExhYmVscygpIHtcbiAgICByZXR1cm4gdGhpcy5sYWJlbHM7XG4gIH1cblxuICBnZXRVbnF1YWxpZmllZFN0YXRlbWVudE5vZGUoKSB7XG4gICAgcmV0dXJuIHRoaXMudW5xdWFsaWZpZWRTdGF0ZW1lbnROb2RlO1xuICB9XG5cbiAgZ2V0SW5kaWNhdGl2ZUNvbmRpdGlvbmFsTm9kZSgpIHtcbiAgICByZXR1cm4gdGhpcy5pbmRpY2F0aXZlQ29uZGl0aW9uYWxOb2RlO1xuICB9XG5cbiAgbWF0Y2hMYWJlbE5hbWUobGFiZWxOYW1lKSB7XG4gICAgY29uc3QgbWF0Y2hlc0xhYmVsTmFtZSA9IHRoaXMubGFiZWxzLnNvbWUoKGxhYmVsKSA9PiB7XG4gICAgICBjb25zdCBuYW1lID0gbGFiZWxOYW1lLCAvLy9cbiAgICAgICAgICAgIGxhYmVsTWF0Y2hlc05hbWUgPSBsYWJlbC5tYXRjaE5hbWUobmFtZSk7XG5cbiAgICAgIGlmIChsYWJlbE1hdGNoZXNOYW1lKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIG1hdGNoZXNMYWJlbE5hbWU7XG4gIH1cblxuICB0b0pTT04oKSB7XG4gICAgY29uc3QgbGFiZWxzSlNPTiA9IHRoaXMubGFiZWxzLm1hcCgobGFiZWwpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGxhYmVsSlNPTiA9IGxhYmVsLnRvSlNPTigpO1xuXG4gICAgICAgICAgICByZXR1cm4gbGFiZWxKU09OO1xuICAgICAgICAgIH0pLFxuICAgICAgICAgIHVucXVhbGlmaWVkU3RhdGVtZW50U3RyaW5nID0gbm9kZUFzU3RyaW5nKHRoaXMudW5xYWxpZmllZFN0YXRlbWVudE5vZGUpLFxuICAgICAgICAgIGluZGljYXRpdmVDb25kaXRpb25hbFN0cmluZyA9IG5vZGVBc1N0cmluZyh0aGlzLmluZGljYXRpdmVDb25kaXRpb25hbE5vZGUpLFxuICAgICAgICAgIGtpbmQgPSBMRU1NQV9LSU5ELFxuICAgICAgICAgIGxhYmVscyA9IGxhYmVsc0pTT04sICAvLy9cbiAgICAgICAgICB1bnF1YWxpZmllZFN0YXRlbWVudCA9IHVucXVhbGlmaWVkU3RhdGVtZW50U3RyaW5nLCAgLy8vXG4gICAgICAgICAgaW5kaWNhdGl2ZUNvbmRpdGlvbmFsID0gaW5kaWNhdGl2ZUNvbmRpdGlvbmFsU3RyaW5nLCAgLy8vXG4gICAgICAgICAganNvbiA9IHtcbiAgICAgICAgICAgIGtpbmQsXG4gICAgICAgICAgICBsYWJlbHMsXG4gICAgICAgICAgICB1bnF1YWxpZmllZFN0YXRlbWVudCxcbiAgICAgICAgICAgIGluZGljYXRpdmVDb25kaXRpb25hbFxuICAgICAgICAgIH07XG5cbiAgICByZXR1cm4ganNvbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tSlNPTihqc29uLCByZWxlYXNlQ29udGV4dCkge1xuICAgIGxldCB7IGxhYmVscyB9ID0ganNvbjtcblxuICAgIGNvbnN0IGxhYmVsc0pTT04gPSBsYWJlbHM7ICAvLy9cblxuICAgIGxhYmVscyA9IGxhYmVsc0pTT04ubWFwKChsYWJlbEpTT04pID0+IHtcbiAgICAgIGNvbnN0IGpzb24gPSBsYWJlbEpTT04sIC8vL1xuICAgICAgICAgICAgbGFiZWwgPSBMYWJlbC5mcm9tSlNPTihqc29uLCByZWxlYXNlQ29udGV4dCk7XG5cbiAgICAgIHJldHVybiBsYWJlbDtcbiAgICB9KTtcblxuICAgIGxldCB7IHVucXVhbGlmaWVkU3RhdGVtZW50LCBpbmRpY2F0aXZlQ29uZGl0aW9uYWwgfSA9IGpzb247XG5cbiAgICBsZXQgdW5xdWFsaWZpZWRTdGF0ZW1lbnROb2RlID0gbnVsbCxcbiAgICAgICAgaW5kaWNhdGl2ZUNvbmRpdGlvbmFsTm9kZSA9IG51bGw7XG5cbiAgICBpZiAodW5xdWFsaWZpZWRTdGF0ZW1lbnQgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHVucXVhbGlmaWVkU3RhdGVtZW50U3RyaW5nID0gdW5xdWFsaWZpZWRTdGF0ZW1lbnQ7ICAvLy9cblxuICAgICAgdW5xdWFsaWZpZWRTdGF0ZW1lbnROb2RlID0gdW5xdWFsaWZpZWRTdGF0ZW1lbnROb2RlRnJvbVVucXVhbGlmaWVkU3RhdGVtZW50U3RyaW5nKHVucXVhbGlmaWVkU3RhdGVtZW50U3RyaW5nLCByZWxlYXNlQ29udGV4dCk7XG4gICAgfVxuXG4gICAgaWYgKGluZGljYXRpdmVDb25kaXRpb25hbCAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgaW5kaWNhdGl2ZUNvbmRpdGlvbmFsU3RyaW5nID0gaW5kaWNhdGl2ZUNvbmRpdGlvbmFsOyAgLy8vXG5cbiAgICAgIGluZGljYXRpdmVDb25kaXRpb25hbE5vZGUgPSBpbmRpY2F0aXZlQ29uZGl0aW9uYWxOb2RlRnJvbUluZGljYXRpdmVDb25kaXRpb25hbFN0cmluZyhpbmRpY2F0aXZlQ29uZGl0aW9uYWxTdHJpbmcsIHJlbGVhc2VDb250ZXh0KTtcbiAgICB9XG5cbiAgICBjb25zdCBsZW1tYSA9IG5ldyBMZW1tYShsYWJlbHMsIHVucXVhbGlmaWVkU3RhdGVtZW50Tm9kZSwgaW5kaWNhdGl2ZUNvbmRpdGlvbmFsTm9kZSk7XG5cbiAgICByZXR1cm4gbGVtbWE7XG4gIH1cblxuICBzdGF0aWMgZnJvbUxhYmVsc1VucXVhbGlmaWVkU3RhdGVtZW50Tm9kZUFuZEluZGljYXRpdmVDb25kaXRpb25hbE5vZGUobGFiZWxzLCB1bnF1YWxpZmllZFN0YXRlbWVudE5vZGUsIGluZGljYXRpdmVDb25kaXRpb25hbE5vZGUpIHtcbiAgICBjb25zdCBsZW1tYSA9IG5ldyBMZW1tYShsYWJlbHMsIHVucXVhbGlmaWVkU3RhdGVtZW50Tm9kZSwgaW5kaWNhdGl2ZUNvbmRpdGlvbmFsTm9kZSk7XG5cbiAgICByZXR1cm4gbGVtbWE7XG4gIH1cbn1cbiIsIlJlYWN0LmNyZWF0ZUVsZW1lbnQiXSwibmFtZXMiOlsiTGVtbWEiLCJsYWJlbHMiLCJ1bnF1YWxpZmllZFN0YXRlbWVudE5vZGUiLCJpbmRpY2F0aXZlQ29uZGl0aW9uYWxOb2RlIiwiZ2V0TGFiZWxzIiwiZ2V0VW5xdWFsaWZpZWRTdGF0ZW1lbnROb2RlIiwiZ2V0SW5kaWNhdGl2ZUNvbmRpdGlvbmFsTm9kZSIsIm1hdGNoTGFiZWxOYW1lIiwibGFiZWxOYW1lIiwibWF0Y2hlc0xhYmVsTmFtZSIsInNvbWUiLCJsYWJlbCIsIm5hbWUiLCJsYWJlbE1hdGNoZXNOYW1lIiwibWF0Y2hOYW1lIiwidG9KU09OIiwibGFiZWxzSlNPTiIsIm1hcCIsImxhYmVsSlNPTiIsInVucXVhbGlmaWVkU3RhdGVtZW50U3RyaW5nIiwibm9kZUFzU3RyaW5nIiwidW5xYWxpZmllZFN0YXRlbWVudE5vZGUiLCJpbmRpY2F0aXZlQ29uZGl0aW9uYWxTdHJpbmciLCJraW5kIiwiTEVNTUFfS0lORCIsInVucXVhbGlmaWVkU3RhdGVtZW50IiwiaW5kaWNhdGl2ZUNvbmRpdGlvbmFsIiwianNvbiIsImZyb21KU09OIiwicmVsZWFzZUNvbnRleHQiLCJMYWJlbCIsInVucXVhbGlmaWVkU3RhdGVtZW50Tm9kZUZyb21VbnF1YWxpZmllZFN0YXRlbWVudFN0cmluZyIsImluZGljYXRpdmVDb25kaXRpb25hbE5vZGVGcm9tSW5kaWNhdGl2ZUNvbmRpdGlvbmFsU3RyaW5nIiwibGVtbWEiLCJmcm9tTGFiZWxzVW5xdWFsaWZpZWRTdGF0ZW1lbnROb2RlQW5kSW5kaWNhdGl2ZUNvbmRpdGlvbmFsTm9kZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFTcUJBOzs7MERBUEg7cUJBRVM7c0JBQ0U7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJZCxJQUFBLEFBQU1BLHNCQUFOO2FBQU1BLE1BQ1BDLE1BQU0sRUFBRUMsd0JBQXdCLEVBQUVDLHlCQUF5Qjs4QkFEcERIO1FBRWpCLElBQUksQ0FBQ0MsTUFBTSxHQUFHQTtRQUNkLElBQUksQ0FBQ0Msd0JBQXdCLEdBQUdBO1FBQ2hDLElBQUksQ0FBQ0MseUJBQXlCLEdBQUdBOztpQkFKaEJIOztZQU9uQkksS0FBQUE7bUJBQUFBLFNBQUFBLFlBQVk7Z0JBQ1YsT0FBTyxJQUFJLENBQUNILE1BQU07WUFDcEI7OztZQUVBSSxLQUFBQTttQkFBQUEsU0FBQUEsOEJBQThCO2dCQUM1QixPQUFPLElBQUksQ0FBQ0gsd0JBQXdCO1lBQ3RDOzs7WUFFQUksS0FBQUE7bUJBQUFBLFNBQUFBLCtCQUErQjtnQkFDN0IsT0FBTyxJQUFJLENBQUNILHlCQUF5QjtZQUN2Qzs7O1lBRUFJLEtBQUFBO21CQUFBQSxTQUFBQSxlQUFlQyxTQUFTLEVBQUU7Z0JBQ3hCLElBQU1DLG1CQUFtQixJQUFJLENBQUNSLE1BQU0sQ0FBQ1MsSUFBSSxDQUFDLFNBQUNDLE9BQVU7b0JBQ25ELElBQU1DLE9BQU9KLFdBQ1BLLG1CQUFtQkYsTUFBTUcsU0FBUyxDQUFDRjtvQkFFekMsSUFBSUMsa0JBQWtCO3dCQUNwQixPQUFPLElBQUk7b0JBQ2IsQ0FBQztnQkFDSDtnQkFFQSxPQUFPSjtZQUNUOzs7WUFFQU0sS0FBQUE7bUJBQUFBLFNBQUFBLFNBQVM7Z0JBQ1AsSUFBTUMsYUFBYSxJQUFJLENBQUNmLE1BQU0sQ0FBQ2dCLEdBQUcsQ0FBQyxTQUFDTixPQUFVO29CQUN0QyxJQUFNTyxZQUFZUCxNQUFNSSxNQUFNO29CQUU5QixPQUFPRztnQkFDVCxJQUNBQyw2QkFBNkJDLElBQUFBLG9CQUFZLEVBQUMsSUFBSSxDQUFDQyx1QkFBdUIsR0FDdEVDLDhCQUE4QkYsSUFBQUEsb0JBQVksRUFBQyxJQUFJLENBQUNqQix5QkFBeUIsR0FDekVvQixPQUFPQyxpQkFBVSxFQUNqQnZCLFNBQVNlLFlBQ1RTLHVCQUF1Qk4sNEJBQ3ZCTyx3QkFBd0JKLDZCQUN4QkssT0FBTztvQkFDTEosTUFBQUE7b0JBQ0F0QixRQUFBQTtvQkFDQXdCLHNCQUFBQTtvQkFDQUMsdUJBQUFBO2dCQUNGO2dCQUVOLE9BQU9DO1lBQ1Q7Ozs7WUFFT0MsS0FBQUE7bUJBQVAsU0FBT0EsU0FBU0QsSUFBSSxFQUFFRSxjQUFjLEVBQUU7Z0JBQ3BDLElBQUksQUFBRTVCLFNBQVcwQixLQUFYMUI7Z0JBRU4sSUFBTWUsYUFBYWYsUUFBUyxHQUFHO2dCQUUvQkEsU0FBU2UsV0FBV0MsR0FBRyxDQUFDLFNBQUNDLFdBQWM7b0JBQ3JDLElBQU1TLFNBQU9ULFdBQ1BQLFFBQVFtQixjQUFLLENBQUNGLFFBQVEsQ0FBQ0QsUUFBTUU7b0JBRW5DLE9BQU9sQjtnQkFDVDtnQkFFQSxJQUFNYyx1QkFBZ0RFLEtBQWhERixzQkFBc0JDLHdCQUEwQkMsS0FBMUJEO2dCQUU1QixJQUFJeEIsMkJBQTJCLElBQUksRUFDL0JDLDRCQUE0QixJQUFJO2dCQUVwQyxJQUFJc0IseUJBQXlCLElBQUksRUFBRTtvQkFDakMsSUFBTU4sNkJBQTZCTSxzQkFBdUIsR0FBRztvQkFFN0R2QiwyQkFBMkI2QixJQUFBQSw4REFBc0QsRUFBQ1osNEJBQTRCVTtnQkFDaEgsQ0FBQztnQkFFRCxJQUFJSCwwQkFBMEIsSUFBSSxFQUFFO29CQUNsQyxJQUFNSiw4QkFBOEJJLHVCQUF3QixHQUFHO29CQUUvRHZCLDRCQUE0QjZCLElBQUFBLGdFQUF3RCxFQUFDViw2QkFBNkJPO2dCQUNwSCxDQUFDO2dCQUVELElBQU1JLFFBQVEsSUFuRkdqQyxNQW1GT0MsUUFBUUMsMEJBQTBCQztnQkFFMUQsT0FBTzhCO1lBQ1Q7OztZQUVPQyxLQUFBQTttQkFBUCxTQUFPQSwrREFBK0RqQyxNQUFNLEVBQUVDLHdCQUF3QixFQUFFQyx5QkFBeUIsRUFBRTtnQkFDakksSUFBTThCLFFBQVEsSUF6RkdqQyxNQXlGT0MsUUFBUUMsMEJBQTBCQztnQkFFMUQsT0FBTzhCO1lBQ1Q7OztXQTVGbUJqQyJ9