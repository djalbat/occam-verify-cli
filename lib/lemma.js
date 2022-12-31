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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9sZW1tYS5qcyIsIjw8anN4LWNvbmZpZy1wcmFnbWEuanM+PiJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IExhYmVsIGZyb20gXCIuL2xhYmVsXCI7XG5cbmltcG9ydCB7IExFTU1BX0tJTkQgfSBmcm9tIFwiLi9raW5kc1wiO1xuaW1wb3J0IHsgbm9kZUFzU3RyaW5nIH0gZnJvbSBcIi4vdXRpbGl0aWVzL3N0cmluZ1wiO1xuXG5pbXBvcnQgeyB1bnF1YWxpZmllZFN0YXRlbWVudE5vZGVGcm9tVW5xdWFsaWZpZWRTdGF0ZW1lbnRTdHJpbmcsIGluZGljYXRpdmVDb25kaXRpb25hbE5vZGVGcm9tSW5kaWNhdGl2ZUNvbmRpdGlvbmFsU3RyaW5nIH0gZnJvbSBcIi4vdXRpbGl0aWVzL3N0cmluZ1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMZW1tYSB7XG4gIGNvbnN0cnVjdG9yKGxhYmVscywgdW5xdWFsaWZpZWRTdGF0ZW1lbnROb2RlLCBpbmRpY2F0aXZlQ29uZGl0aW9uYWxOb2RlKSB7XG4gICAgdGhpcy5sYWJlbHMgPSBsYWJlbHM7XG4gICAgdGhpcy51bnF1YWxpZmllZFN0YXRlbWVudE5vZGUgPSB1bnF1YWxpZmllZFN0YXRlbWVudE5vZGU7XG4gICAgdGhpcy5pbmRpY2F0aXZlQ29uZGl0aW9uYWxOb2RlID0gaW5kaWNhdGl2ZUNvbmRpdGlvbmFsTm9kZTtcbiAgfVxuXG4gIGdldExhYmVscygpIHtcbiAgICByZXR1cm4gdGhpcy5sYWJlbHM7XG4gIH1cblxuICBnZXRVbnF1YWxpZmllZFN0YXRlbWVudE5vZGUoKSB7XG4gICAgcmV0dXJuIHRoaXMudW5xdWFsaWZpZWRTdGF0ZW1lbnROb2RlO1xuICB9XG5cbiAgZ2V0SW5kaWNhdGl2ZUNvbmRpdGlvbmFsTm9kZSgpIHtcbiAgICByZXR1cm4gdGhpcy5pbmRpY2F0aXZlQ29uZGl0aW9uYWxOb2RlO1xuICB9XG5cbiAgbWF0Y2hMYWJlbE5hbWUobGFiZWxOYW1lKSB7XG4gICAgY29uc3QgbWF0Y2hlc0xhYmVsTmFtZSA9IHRoaXMubGFiZWxzLnNvbWUoKGxhYmVsKSA9PiB7XG4gICAgICBjb25zdCBuYW1lID0gbGFiZWxOYW1lLCAvLy9cbiAgICAgICAgbGFiZWxNYXRjaGVzTmFtZSA9IGxhYmVsLm1hdGNoTmFtZShuYW1lKTtcblxuICAgICAgaWYgKGxhYmVsTWF0Y2hlc05hbWUpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gbWF0Y2hlc0xhYmVsTmFtZTtcbiAgfVxuXG4gIHRvSlNPTigpIHtcbiAgICBjb25zdCBsYWJlbHNKU09OID0gdGhpcy5sYWJlbHMubWFwKChsYWJlbCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgbGFiZWxKU09OID0gbGFiZWwudG9KU09OKCk7XG5cbiAgICAgICAgICAgIHJldHVybiBsYWJlbEpTT047XG4gICAgICAgICAgfSksXG4gICAgICAgICAgdW5xdWFsaWZpZWRTdGF0ZW1lbnRTdHJpbmcgPSBub2RlQXNTdHJpbmcodGhpcy51bnFhbGlmaWVkU3RhdGVtZW50Tm9kZSksXG4gICAgICAgICAgaW5kaWNhdGl2ZUNvbmRpdGlvbmFsU3RyaW5nID0gbm9kZUFzU3RyaW5nKHRoaXMuaW5kaWNhdGl2ZUNvbmRpdGlvbmFsTm9kZSksXG4gICAgICAgICAga2luZCA9IExFTU1BX0tJTkQsXG4gICAgICAgICAgbGFiZWxzID0gbGFiZWxzSlNPTiwgIC8vL1xuICAgICAgICAgIHVucXVhbGlmaWVkU3RhdGVtZW50ID0gdW5xdWFsaWZpZWRTdGF0ZW1lbnRTdHJpbmcsICAvLy9cbiAgICAgICAgICBpbmRpY2F0aXZlQ29uZGl0aW9uYWwgPSBpbmRpY2F0aXZlQ29uZGl0aW9uYWxTdHJpbmcsICAvLy9cbiAgICAgICAgICBqc29uID0ge1xuICAgICAgICAgICAga2luZCxcbiAgICAgICAgICAgIGxhYmVscyxcbiAgICAgICAgICAgIHVucXVhbGlmaWVkU3RhdGVtZW50LFxuICAgICAgICAgICAgaW5kaWNhdGl2ZUNvbmRpdGlvbmFsXG4gICAgICAgICAgfTtcblxuICAgIHJldHVybiBqc29uO1xuICB9XG5cbiAgc3RhdGljIGZyb21KU09OKGpzb24sIHJlbGVhc2VDb250ZXh0KSB7XG4gICAgbGV0IHsgbGFiZWxzIH0gPSBqc29uO1xuXG4gICAgY29uc3QgbGFiZWxzSlNPTiA9IGxhYmVsczsgIC8vL1xuXG4gICAgbGFiZWxzID0gbGFiZWxzSlNPTi5tYXAoKGxhYmVsSlNPTikgPT4ge1xuICAgICAgY29uc3QganNvbiA9IGxhYmVsSlNPTiwgLy8vXG4gICAgICAgICAgICBsYWJlbCA9IExhYmVsLmZyb21KU09OKGpzb24sIHJlbGVhc2VDb250ZXh0KTtcblxuICAgICAgcmV0dXJuIGxhYmVsO1xuICAgIH0pO1xuXG4gICAgbGV0IHsgdW5xdWFsaWZpZWRTdGF0ZW1lbnQsIGluZGljYXRpdmVDb25kaXRpb25hbCB9ID0ganNvbjtcblxuICAgIGxldCB1bnF1YWxpZmllZFN0YXRlbWVudE5vZGUgPSBudWxsLFxuICAgICAgICBpbmRpY2F0aXZlQ29uZGl0aW9uYWxOb2RlID0gbnVsbDtcblxuICAgIGlmICh1bnF1YWxpZmllZFN0YXRlbWVudCAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgdW5xdWFsaWZpZWRTdGF0ZW1lbnRTdHJpbmcgPSB1bnF1YWxpZmllZFN0YXRlbWVudDsgIC8vL1xuXG4gICAgICB1bnF1YWxpZmllZFN0YXRlbWVudE5vZGUgPSB1bnF1YWxpZmllZFN0YXRlbWVudE5vZGVGcm9tVW5xdWFsaWZpZWRTdGF0ZW1lbnRTdHJpbmcodW5xdWFsaWZpZWRTdGF0ZW1lbnRTdHJpbmcsIHJlbGVhc2VDb250ZXh0KTtcbiAgICB9XG5cbiAgICBpZiAoaW5kaWNhdGl2ZUNvbmRpdGlvbmFsICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBpbmRpY2F0aXZlQ29uZGl0aW9uYWxTdHJpbmcgPSBpbmRpY2F0aXZlQ29uZGl0aW9uYWw7ICAvLy9cblxuICAgICAgaW5kaWNhdGl2ZUNvbmRpdGlvbmFsTm9kZSA9IGluZGljYXRpdmVDb25kaXRpb25hbE5vZGVGcm9tSW5kaWNhdGl2ZUNvbmRpdGlvbmFsU3RyaW5nKGluZGljYXRpdmVDb25kaXRpb25hbFN0cmluZywgcmVsZWFzZUNvbnRleHQpO1xuICAgIH1cblxuICAgIGNvbnN0IGxlbW1hID0gbmV3IExlbW1hKGxhYmVscywgdW5xdWFsaWZpZWRTdGF0ZW1lbnROb2RlLCBpbmRpY2F0aXZlQ29uZGl0aW9uYWxOb2RlKTtcblxuICAgIHJldHVybiBsZW1tYTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTGFiZWxzVW5xdWFsaWZpZWRTdGF0ZW1lbnROb2RlQW5kSW5kaWNhdGl2ZUNvbmRpdGlvbmFsTm9kZShsYWJlbHMsIHVucXVhbGlmaWVkU3RhdGVtZW50Tm9kZSwgaW5kaWNhdGl2ZUNvbmRpdGlvbmFsTm9kZSkge1xuICAgIGNvbnN0IGxlbW1hID0gbmV3IExlbW1hKGxhYmVscywgdW5xdWFsaWZpZWRTdGF0ZW1lbnROb2RlLCBpbmRpY2F0aXZlQ29uZGl0aW9uYWxOb2RlKTtcblxuICAgIHJldHVybiBsZW1tYTtcbiAgfVxufVxuIiwiUmVhY3QuY3JlYXRlRWxlbWVudCJdLCJuYW1lcyI6WyJMZW1tYSIsImxhYmVscyIsInVucXVhbGlmaWVkU3RhdGVtZW50Tm9kZSIsImluZGljYXRpdmVDb25kaXRpb25hbE5vZGUiLCJnZXRMYWJlbHMiLCJnZXRVbnF1YWxpZmllZFN0YXRlbWVudE5vZGUiLCJnZXRJbmRpY2F0aXZlQ29uZGl0aW9uYWxOb2RlIiwibWF0Y2hMYWJlbE5hbWUiLCJsYWJlbE5hbWUiLCJtYXRjaGVzTGFiZWxOYW1lIiwic29tZSIsImxhYmVsIiwibmFtZSIsImxhYmVsTWF0Y2hlc05hbWUiLCJtYXRjaE5hbWUiLCJ0b0pTT04iLCJsYWJlbHNKU09OIiwibWFwIiwibGFiZWxKU09OIiwidW5xdWFsaWZpZWRTdGF0ZW1lbnRTdHJpbmciLCJub2RlQXNTdHJpbmciLCJ1bnFhbGlmaWVkU3RhdGVtZW50Tm9kZSIsImluZGljYXRpdmVDb25kaXRpb25hbFN0cmluZyIsImtpbmQiLCJMRU1NQV9LSU5EIiwidW5xdWFsaWZpZWRTdGF0ZW1lbnQiLCJpbmRpY2F0aXZlQ29uZGl0aW9uYWwiLCJqc29uIiwiZnJvbUpTT04iLCJyZWxlYXNlQ29udGV4dCIsIkxhYmVsIiwidW5xdWFsaWZpZWRTdGF0ZW1lbnROb2RlRnJvbVVucXVhbGlmaWVkU3RhdGVtZW50U3RyaW5nIiwiaW5kaWNhdGl2ZUNvbmRpdGlvbmFsTm9kZUZyb21JbmRpY2F0aXZlQ29uZGl0aW9uYWxTdHJpbmciLCJsZW1tYSIsImZyb21MYWJlbHNVbnF1YWxpZmllZFN0YXRlbWVudE5vZGVBbmRJbmRpY2F0aXZlQ29uZGl0aW9uYWxOb2RlIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQVNxQkE7OzswREFQSDtxQkFFUztzQkFDRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUlkLElBQUEsQUFBTUEsc0JBQU47YUFBTUEsTUFDUEMsTUFBTSxFQUFFQyx3QkFBd0IsRUFBRUMseUJBQXlCOzhCQURwREg7UUFFakIsSUFBSSxDQUFDQyxNQUFNLEdBQUdBO1FBQ2QsSUFBSSxDQUFDQyx3QkFBd0IsR0FBR0E7UUFDaEMsSUFBSSxDQUFDQyx5QkFBeUIsR0FBR0E7O2lCQUpoQkg7O1lBT25CSSxLQUFBQTttQkFBQUEsU0FBQUEsWUFBWTtnQkFDVixPQUFPLElBQUksQ0FBQ0gsTUFBTTtZQUNwQjs7O1lBRUFJLEtBQUFBO21CQUFBQSxTQUFBQSw4QkFBOEI7Z0JBQzVCLE9BQU8sSUFBSSxDQUFDSCx3QkFBd0I7WUFDdEM7OztZQUVBSSxLQUFBQTttQkFBQUEsU0FBQUEsK0JBQStCO2dCQUM3QixPQUFPLElBQUksQ0FBQ0gseUJBQXlCO1lBQ3ZDOzs7WUFFQUksS0FBQUE7bUJBQUFBLFNBQUFBLGVBQWVDLFNBQVMsRUFBRTtnQkFDeEIsSUFBTUMsbUJBQW1CLElBQUksQ0FBQ1IsTUFBTSxDQUFDUyxJQUFJLENBQUMsU0FBQ0MsT0FBVTtvQkFDbkQsSUFBTUMsT0FBT0osV0FDWEssbUJBQW1CRixNQUFNRyxTQUFTLENBQUNGO29CQUVyQyxJQUFJQyxrQkFBa0I7d0JBQ3BCLE9BQU8sSUFBSTtvQkFDYixDQUFDO2dCQUNIO2dCQUVBLE9BQU9KO1lBQ1Q7OztZQUVBTSxLQUFBQTttQkFBQUEsU0FBQUEsU0FBUztnQkFDUCxJQUFNQyxhQUFhLElBQUksQ0FBQ2YsTUFBTSxDQUFDZ0IsR0FBRyxDQUFDLFNBQUNOLE9BQVU7b0JBQ3RDLElBQU1PLFlBQVlQLE1BQU1JLE1BQU07b0JBRTlCLE9BQU9HO2dCQUNULElBQ0FDLDZCQUE2QkMsSUFBQUEsb0JBQVksRUFBQyxJQUFJLENBQUNDLHVCQUF1QixHQUN0RUMsOEJBQThCRixJQUFBQSxvQkFBWSxFQUFDLElBQUksQ0FBQ2pCLHlCQUF5QixHQUN6RW9CLE9BQU9DLGlCQUFVLEVBQ2pCdkIsU0FBU2UsWUFDVFMsdUJBQXVCTiw0QkFDdkJPLHdCQUF3QkosNkJBQ3hCSyxPQUFPO29CQUNMSixNQUFBQTtvQkFDQXRCLFFBQUFBO29CQUNBd0Isc0JBQUFBO29CQUNBQyx1QkFBQUE7Z0JBQ0Y7Z0JBRU4sT0FBT0M7WUFDVDs7OztZQUVPQyxLQUFBQTttQkFBUCxTQUFPQSxTQUFTRCxJQUFJLEVBQUVFLGNBQWMsRUFBRTtnQkFDcEMsSUFBSSxBQUFFNUIsU0FBVzBCLEtBQVgxQjtnQkFFTixJQUFNZSxhQUFhZixRQUFTLEdBQUc7Z0JBRS9CQSxTQUFTZSxXQUFXQyxHQUFHLENBQUMsU0FBQ0MsV0FBYztvQkFDckMsSUFBTVMsU0FBT1QsV0FDUFAsUUFBUW1CLGNBQUssQ0FBQ0YsUUFBUSxDQUFDRCxRQUFNRTtvQkFFbkMsT0FBT2xCO2dCQUNUO2dCQUVBLElBQU1jLHVCQUFnREUsS0FBaERGLHNCQUFzQkMsd0JBQTBCQyxLQUExQkQ7Z0JBRTVCLElBQUl4QiwyQkFBMkIsSUFBSSxFQUMvQkMsNEJBQTRCLElBQUk7Z0JBRXBDLElBQUlzQix5QkFBeUIsSUFBSSxFQUFFO29CQUNqQyxJQUFNTiw2QkFBNkJNLHNCQUF1QixHQUFHO29CQUU3RHZCLDJCQUEyQjZCLElBQUFBLDhEQUFzRCxFQUFDWiw0QkFBNEJVO2dCQUNoSCxDQUFDO2dCQUVELElBQUlILDBCQUEwQixJQUFJLEVBQUU7b0JBQ2xDLElBQU1KLDhCQUE4QkksdUJBQXdCLEdBQUc7b0JBRS9EdkIsNEJBQTRCNkIsSUFBQUEsZ0VBQXdELEVBQUNWLDZCQUE2Qk87Z0JBQ3BILENBQUM7Z0JBRUQsSUFBTUksUUFBUSxJQW5GR2pDLE1BbUZPQyxRQUFRQywwQkFBMEJDO2dCQUUxRCxPQUFPOEI7WUFDVDs7O1lBRU9DLEtBQUFBO21CQUFQLFNBQU9BLCtEQUErRGpDLE1BQU0sRUFBRUMsd0JBQXdCLEVBQUVDLHlCQUF5QixFQUFFO2dCQUNqSSxJQUFNOEIsUUFBUSxJQXpGR2pDLE1BeUZPQyxRQUFRQywwQkFBMEJDO2dCQUUxRCxPQUFPOEI7WUFDVDs7O1dBNUZtQmpDIn0=