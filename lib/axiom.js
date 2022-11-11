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
var _ruleNames = require("occam-custom-grammars/lib/ruleNames");
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
                var labelsJSON = this.labels.map(function(label) {
                    var labelJSON = label.toJSON();
                    return labelJSON;
                }), statementString = (0, _string.nodeAsString)(this.statementNode), consequentStatementString = (0, _string.nodeAsString)(this.consequentStatementNode), suppositionStatementString = (0, _string.nodeAsString)(this.suppositionStatementNode), kind = _kinds.AXIOM_KIND, labels = labelsJSON, statement = statementString, consequent = consequentStatementString, supposition = suppositionStatementString, json = {
                    kind: kind,
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
            key: "fromJSON",
            value: function fromJSON(json, callback) {
                var axiom = null;
                var labels = json.labels;
                var statement = json.statement, consequent = json.consequent, supposition = json.supposition;
                labels = labels.reduce(function(labels, label) {
                    if (labels !== null) {
                        var _$json = label; ///
                        label = _label.default.fromJSON(_$json, callback); ///
                        if (label !== null) {
                            labels.push(label);
                        } else {
                            labels = null;
                        }
                    }
                    return labels;
                }, []);
                if (statement !== null) {
                    var content = statement, ruleName = _ruleNames.STATEMENT_RULE_NAME, node = callback(content, ruleName), statementNode = node; ///
                    if (statementNode !== null) {
                        var consequentNode = null, suppositionNode = null;
                        axiom = new Axiom(labels, statementNode, consequentNode, suppositionNode);
                    }
                }
                if (consequent !== null && supposition !== null) {
                    var node1, content1;
                    var ruleName1 = _ruleNames.STATEMENT_RULE_NAME;
                    content1 = consequent; ///
                    node1 = callback(content1, ruleName1);
                    var consequentNode1 = node1; ///
                    content1 = supposition; ///
                    node1 = callback(content1, ruleName1);
                    var suppositionNode1 = node1; ///
                    if (consequentNode1 !== null && suppositionNode1 !== null) {
                        var statementNode1 = null;
                        axiom = new Axiom(labels, statementNode1, consequentNode1, suppositionNode1);
                    }
                }
                return axiom;
            }
        },
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9heGlvbS5qcyIsIjw8anN4LWNvbmZpZy1wcmFnbWEuanM+PiJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IExhYmVsIGZyb20gXCIuL2xhYmVsXCI7XG5cbmltcG9ydCB7IEFYSU9NX0tJTkQgfSBmcm9tIFwiLi9raW5kc1wiO1xuaW1wb3J0IHsgbm9kZUFzU3RyaW5nIH0gZnJvbSBcIi4vdXRpbGl0aWVzL3N0cmluZ1wiO1xuaW1wb3J0IHsgU1RBVEVNRU5UX1JVTEVfTkFNRSB9IGZyb20gXCJvY2NhbS1jdXN0b20tZ3JhbW1hcnMvbGliL3J1bGVOYW1lc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBeGlvbSB7XG4gIGNvbnN0cnVjdG9yKGxhYmVscywgc3RhdGVtZW50Tm9kZSwgc3VwcG9zaXRpb25TdGF0ZW1lbnROb2RlLCBjb25zZXF1ZW50U3RhdGVtZW50Tm9kZSkge1xuICAgIHRoaXMubGFiZWxzID0gbGFiZWxzO1xuICAgIHRoaXMuc3RhdGVtZW50Tm9kZSA9IHN0YXRlbWVudE5vZGU7XG4gICAgdGhpcy5zdXBwb3NpdGlvblN0YXRlbWVudE5vZGUgPSBzdXBwb3NpdGlvblN0YXRlbWVudE5vZGU7XG4gICAgdGhpcy5jb25zZXF1ZW50U3RhdGVtZW50Tm9kZSA9IGNvbnNlcXVlbnRTdGF0ZW1lbnROb2RlO1xuICB9XG5cbiAgZ2V0TGFiZWxzKCkge1xuICAgIHJldHVybiB0aGlzLmxhYmVscztcbiAgfVxuXG4gIGdldFN0YXRlbWVudE5vZGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RhdGVtZW50Tm9kZTtcbiAgfVxuXG4gIGdldFN1cHBvc2l0aW9uU3RhdGVtZW50Tm9kZSgpIHtcbiAgICByZXR1cm4gdGhpcy5zdXBwb3NpdGlvblN0YXRlbWVudE5vZGU7XG4gIH1cblxuICBnZXRDb25zZXF1ZW50U3RhdGVtZW50Tm9kZSgpIHtcbiAgICByZXR1cm4gdGhpcy5jb25zZXF1ZW50U3RhdGVtZW50Tm9kZTtcbiAgfVxuXG4gIG1hdGNoTGFiZWxOYW1lKGxhYmVsTmFtZSkge1xuICAgIGNvbnN0IG1hdGNoZXNMYWJlbE5hbWUgPSB0aGlzLmxhYmVscy5zb21lKChsYWJlbCkgPT4ge1xuICAgICAgY29uc3QgbmFtZSA9IGxhYmVsTmFtZSwgLy8vXG4gICAgICAgICAgICBsYWJlbE1hdGNoZXNOYW1lID0gbGFiZWwubWF0Y2hOYW1lKG5hbWUpO1xuXG4gICAgICBpZiAobGFiZWxNYXRjaGVzTmFtZSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiBtYXRjaGVzTGFiZWxOYW1lO1xuICB9XG5cbiAgdG9KU09OKCkge1xuICAgIGNvbnN0IGxhYmVsc0pTT04gPSB0aGlzLmxhYmVscy5tYXAoKGxhYmVsKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBsYWJlbEpTT04gPSBsYWJlbC50b0pTT04oKTtcblxuICAgICAgICAgICAgcmV0dXJuIGxhYmVsSlNPTjtcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBzdGF0ZW1lbnRTdHJpbmcgPSBub2RlQXNTdHJpbmcodGhpcy5zdGF0ZW1lbnROb2RlKSxcbiAgICAgICAgICBjb25zZXF1ZW50U3RhdGVtZW50U3RyaW5nID0gbm9kZUFzU3RyaW5nKHRoaXMuY29uc2VxdWVudFN0YXRlbWVudE5vZGUpLFxuICAgICAgICAgIHN1cHBvc2l0aW9uU3RhdGVtZW50U3RyaW5nID0gbm9kZUFzU3RyaW5nKHRoaXMuc3VwcG9zaXRpb25TdGF0ZW1lbnROb2RlKSxcbiAgICAgICAgICBraW5kID0gQVhJT01fS0lORCxcbiAgICAgICAgICBsYWJlbHMgPSBsYWJlbHNKU09OLCAgLy8vXG4gICAgICAgICAgc3RhdGVtZW50ID0gc3RhdGVtZW50U3RyaW5nLCAgLy8vXG4gICAgICAgICAgY29uc2VxdWVudCA9IGNvbnNlcXVlbnRTdGF0ZW1lbnRTdHJpbmcsIC8vL1xuICAgICAgICAgIHN1cHBvc2l0aW9uID0gc3VwcG9zaXRpb25TdGF0ZW1lbnRTdHJpbmcsIC8vL1xuICAgICAgICAgIGpzb24gPSB7XG4gICAgICAgICAgICBraW5kLFxuICAgICAgICAgICAgbGFiZWxzLFxuICAgICAgICAgICAgc3RhdGVtZW50LFxuICAgICAgICAgICAgY29uc2VxdWVudCxcbiAgICAgICAgICAgIHN1cHBvc2l0aW9uXG4gICAgICAgICAgfTtcblxuICAgIHJldHVybiBqc29uO1xuICB9XG5cbiAgc3RhdGljIGZyb21KU09OKGpzb24sIGNhbGxiYWNrKSB7XG4gICAgbGV0IGF4aW9tID0gbnVsbDtcblxuICAgIGxldCB7IGxhYmVscyB9ID0ganNvbjtcblxuICAgIGNvbnN0IHsgc3RhdGVtZW50LCBjb25zZXF1ZW50LCBzdXBwb3NpdGlvbiB9ID0ganNvbjtcblxuICAgIGxhYmVscyA9IGxhYmVscy5yZWR1Y2UoKGxhYmVscywgbGFiZWwpID0+IHtcbiAgICAgIGlmIChsYWJlbHMgIT09IG51bGwpIHtcbiAgICAgICAgY29uc3QganNvbiA9IGxhYmVsOyAvLy9cblxuICAgICAgICBsYWJlbCA9IExhYmVsLmZyb21KU09OKGpzb24sIGNhbGxiYWNrKTsgLy8vXG5cbiAgICAgICAgaWYgKGxhYmVsICE9PSBudWxsKSB7XG4gICAgICAgICAgbGFiZWxzLnB1c2gobGFiZWwpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGxhYmVscyA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGxhYmVscztcbiAgICB9LCBbXSk7XG5cbiAgICBpZiAoc3RhdGVtZW50ICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBjb250ZW50ID0gc3RhdGVtZW50LCAgLy8vXG4gICAgICAgICAgICBydWxlTmFtZSA9IFNUQVRFTUVOVF9SVUxFX05BTUUsXG4gICAgICAgICAgICBub2RlID0gY2FsbGJhY2soY29udGVudCwgcnVsZU5hbWUpLFxuICAgICAgICAgICAgc3RhdGVtZW50Tm9kZSA9IG5vZGU7IC8vL1xuXG4gICAgICBpZiAoc3RhdGVtZW50Tm9kZSAhPT0gbnVsbCkge1xuICAgICAgICBjb25zdCBjb25zZXF1ZW50Tm9kZSA9IG51bGwsXG4gICAgICAgICAgICAgIHN1cHBvc2l0aW9uTm9kZSA9IG51bGw7XG5cbiAgICAgICAgYXhpb20gPSBuZXcgQXhpb20obGFiZWxzLCBzdGF0ZW1lbnROb2RlLCBjb25zZXF1ZW50Tm9kZSwgc3VwcG9zaXRpb25Ob2RlKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoKGNvbnNlcXVlbnQgIT09IG51bGwpICYmIChzdXBwb3NpdGlvbiAhPT0gbnVsbCkpIHtcbiAgICAgIGxldCBub2RlLFxuICAgICAgICAgIGNvbnRlbnQ7XG5cbiAgICAgIGNvbnN0IHJ1bGVOYW1lID0gU1RBVEVNRU5UX1JVTEVfTkFNRTtcblxuICAgICAgY29udGVudCA9IGNvbnNlcXVlbnQ7ICAvLy9cblxuICAgICAgbm9kZSA9IGNhbGxiYWNrKGNvbnRlbnQsIHJ1bGVOYW1lKTtcblxuICAgICAgY29uc3QgY29uc2VxdWVudE5vZGUgPSBub2RlOyAvLy9cblxuICAgICAgY29udGVudCA9IHN1cHBvc2l0aW9uOyAgLy8vXG5cbiAgICAgIG5vZGUgPSBjYWxsYmFjayhjb250ZW50LCBydWxlTmFtZSk7XG5cbiAgICAgIGNvbnN0IHN1cHBvc2l0aW9uTm9kZSA9IG5vZGU7IC8vL1xuXG4gICAgICBpZiAoKGNvbnNlcXVlbnROb2RlICE9PSBudWxsKSAmJiAoc3VwcG9zaXRpb25Ob2RlICE9PSBudWxsKSkge1xuICAgICAgICBjb25zdCBzdGF0ZW1lbnROb2RlID0gbnVsbDtcblxuICAgICAgICBheGlvbSA9IG5ldyBBeGlvbShsYWJlbHMsIHN0YXRlbWVudE5vZGUsIGNvbnNlcXVlbnROb2RlLCBzdXBwb3NpdGlvbk5vZGUpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBheGlvbTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tU3RhdGVtZW50Tm9kZUFuZExhYmVscyhzdGF0ZW1lbnROb2RlLCBsYWJlbHMpIHtcbiAgICBjb25zdCBzdXBwb3NpdGlvblN0YXRlbWVudE5vZGUgPSBudWxsLFxuICAgICAgICAgIGNvbnNlcXVlbnRTdGF0ZW1lbnROb2RlID0gbnVsbCxcbiAgICAgICAgICBheGlvbSA9IG5ldyBBeGlvbShsYWJlbHMsIHN0YXRlbWVudE5vZGUsIHN1cHBvc2l0aW9uU3RhdGVtZW50Tm9kZSwgY29uc2VxdWVudFN0YXRlbWVudE5vZGUpO1xuXG4gICAgcmV0dXJuIGF4aW9tO1xuICB9XG5cbiAgc3RhdGljIGZyb21TdXBwb3NpdGlvblN0YXRlbWVudE5vZGVDb25zZXF1ZW50U3RhdGVtZW50Tm9kZUFuZExhYmVscyhzdXBwb3NpdGlvblN0YXRlbWVudE5vZGUsIGNvbnNlcXVlbnRTdGF0ZW1lbnROb2RlLCBsYWJlbHMpIHtcbiAgICBjb25zdCBzdGF0ZW1lbnROb2RlID0gbnVsbCxcbiAgICAgICAgICBheGlvbSA9IG5ldyBBeGlvbShsYWJlbHMsIHN0YXRlbWVudE5vZGUsIHN1cHBvc2l0aW9uU3RhdGVtZW50Tm9kZSwgY29uc2VxdWVudFN0YXRlbWVudE5vZGUpO1xuXG4gICAgcmV0dXJuIGF4aW9tO1xuICB9XG59XG4iLCJSZWFjdC5jcmVhdGVFbGVtZW50Il0sIm5hbWVzIjpbIkF4aW9tIiwibGFiZWxzIiwic3RhdGVtZW50Tm9kZSIsInN1cHBvc2l0aW9uU3RhdGVtZW50Tm9kZSIsImNvbnNlcXVlbnRTdGF0ZW1lbnROb2RlIiwiZ2V0TGFiZWxzIiwiZ2V0U3RhdGVtZW50Tm9kZSIsImdldFN1cHBvc2l0aW9uU3RhdGVtZW50Tm9kZSIsImdldENvbnNlcXVlbnRTdGF0ZW1lbnROb2RlIiwibWF0Y2hMYWJlbE5hbWUiLCJsYWJlbE5hbWUiLCJtYXRjaGVzTGFiZWxOYW1lIiwic29tZSIsImxhYmVsIiwibmFtZSIsImxhYmVsTWF0Y2hlc05hbWUiLCJtYXRjaE5hbWUiLCJ0b0pTT04iLCJsYWJlbHNKU09OIiwibWFwIiwibGFiZWxKU09OIiwic3RhdGVtZW50U3RyaW5nIiwibm9kZUFzU3RyaW5nIiwiY29uc2VxdWVudFN0YXRlbWVudFN0cmluZyIsInN1cHBvc2l0aW9uU3RhdGVtZW50U3RyaW5nIiwia2luZCIsIkFYSU9NX0tJTkQiLCJzdGF0ZW1lbnQiLCJjb25zZXF1ZW50Iiwic3VwcG9zaXRpb24iLCJqc29uIiwiZnJvbUpTT04iLCJjYWxsYmFjayIsImF4aW9tIiwicmVkdWNlIiwiTGFiZWwiLCJwdXNoIiwiY29udGVudCIsInJ1bGVOYW1lIiwiU1RBVEVNRU5UX1JVTEVfTkFNRSIsIm5vZGUiLCJjb25zZXF1ZW50Tm9kZSIsInN1cHBvc2l0aW9uTm9kZSIsImZyb21TdGF0ZW1lbnROb2RlQW5kTGFiZWxzIiwiZnJvbVN1cHBvc2l0aW9uU3RhdGVtZW50Tm9kZUNvbnNlcXVlbnRTdGF0ZW1lbnROb2RlQW5kTGFiZWxzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQVFxQkE7OzswREFOSDtxQkFFUztzQkFDRTt5QkFDTzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVyQixJQUFBLEFBQU1BLHNCQUFOO2FBQU1BLE1BQ1BDLE1BQU0sRUFBRUMsYUFBYSxFQUFFQyx3QkFBd0IsRUFBRUMsdUJBQXVCOzhCQURqRUo7UUFFakIsSUFBSSxDQUFDQyxNQUFNLEdBQUdBO1FBQ2QsSUFBSSxDQUFDQyxhQUFhLEdBQUdBO1FBQ3JCLElBQUksQ0FBQ0Msd0JBQXdCLEdBQUdBO1FBQ2hDLElBQUksQ0FBQ0MsdUJBQXVCLEdBQUdBOztpQkFMZEo7O1lBUW5CSyxLQUFBQTttQkFBQUEsU0FBQUEsWUFBWTtnQkFDVixPQUFPLElBQUksQ0FBQ0osTUFBTTtZQUNwQjs7O1lBRUFLLEtBQUFBO21CQUFBQSxTQUFBQSxtQkFBbUI7Z0JBQ2pCLE9BQU8sSUFBSSxDQUFDSixhQUFhO1lBQzNCOzs7WUFFQUssS0FBQUE7bUJBQUFBLFNBQUFBLDhCQUE4QjtnQkFDNUIsT0FBTyxJQUFJLENBQUNKLHdCQUF3QjtZQUN0Qzs7O1lBRUFLLEtBQUFBO21CQUFBQSxTQUFBQSw2QkFBNkI7Z0JBQzNCLE9BQU8sSUFBSSxDQUFDSix1QkFBdUI7WUFDckM7OztZQUVBSyxLQUFBQTttQkFBQUEsU0FBQUEsZUFBZUMsU0FBUyxFQUFFO2dCQUN4QixJQUFNQyxtQkFBbUIsSUFBSSxDQUFDVixNQUFNLENBQUNXLElBQUksQ0FBQyxTQUFDQyxPQUFVO29CQUNuRCxJQUFNQyxPQUFPSixXQUNQSyxtQkFBbUJGLE1BQU1HLFNBQVMsQ0FBQ0Y7b0JBRXpDLElBQUlDLGtCQUFrQjt3QkFDcEIsT0FBTyxJQUFJO29CQUNiLENBQUM7Z0JBQ0g7Z0JBRUEsT0FBT0o7WUFDVDs7O1lBRUFNLEtBQUFBO21CQUFBQSxTQUFBQSxTQUFTO2dCQUNQLElBQU1DLGFBQWEsSUFBSSxDQUFDakIsTUFBTSxDQUFDa0IsR0FBRyxDQUFDLFNBQUNOLE9BQVU7b0JBQ3RDLElBQU1PLFlBQVlQLE1BQU1JLE1BQU07b0JBRTlCLE9BQU9HO2dCQUNULElBQ0FDLGtCQUFrQkMsSUFBQUEsb0JBQVksRUFBQyxJQUFJLENBQUNwQixhQUFhLEdBQ2pEcUIsNEJBQTRCRCxJQUFBQSxvQkFBWSxFQUFDLElBQUksQ0FBQ2xCLHVCQUF1QixHQUNyRW9CLDZCQUE2QkYsSUFBQUEsb0JBQVksRUFBQyxJQUFJLENBQUNuQix3QkFBd0IsR0FDdkVzQixPQUFPQyxpQkFBVSxFQUNqQnpCLFNBQVNpQixZQUNUUyxZQUFZTixpQkFDWk8sYUFBYUwsMkJBQ2JNLGNBQWNMLDRCQUNkTSxPQUFPO29CQUNMTCxNQUFBQTtvQkFDQXhCLFFBQUFBO29CQUNBMEIsV0FBQUE7b0JBQ0FDLFlBQUFBO29CQUNBQyxhQUFBQTtnQkFDRjtnQkFFTixPQUFPQztZQUNUOzs7O1lBRU9DLEtBQUFBO21CQUFQLFNBQU9BLFNBQVNELElBQUksRUFBRUUsUUFBUSxFQUFFO2dCQUM5QixJQUFJQyxRQUFRLElBQUk7Z0JBRWhCLElBQUksQUFBRWhDLFNBQVc2QixLQUFYN0I7Z0JBRU4sSUFBUTBCLFlBQXVDRyxLQUF2Q0gsV0FBV0MsYUFBNEJFLEtBQTVCRixZQUFZQyxjQUFnQkMsS0FBaEJEO2dCQUUvQjVCLFNBQVNBLE9BQU9pQyxNQUFNLENBQUMsU0FBQ2pDLFFBQVFZLE9BQVU7b0JBQ3hDLElBQUlaLFdBQVcsSUFBSSxFQUFFO3dCQUNuQixJQUFNNkIsU0FBT2pCLE9BQU8sR0FBRzt3QkFFdkJBLFFBQVFzQixjQUFLLENBQUNKLFFBQVEsQ0FBQ0QsUUFBTUUsV0FBVyxHQUFHO3dCQUUzQyxJQUFJbkIsVUFBVSxJQUFJLEVBQUU7NEJBQ2xCWixPQUFPbUMsSUFBSSxDQUFDdkI7d0JBQ2QsT0FBTzs0QkFDTFosU0FBUyxJQUFJO3dCQUNmLENBQUM7b0JBQ0gsQ0FBQztvQkFFRCxPQUFPQTtnQkFDVCxHQUFHLEVBQUU7Z0JBRUwsSUFBSTBCLGNBQWMsSUFBSSxFQUFFO29CQUN0QixJQUFNVSxVQUFVVixXQUNWVyxXQUFXQyw4QkFBbUIsRUFDOUJDLE9BQU9SLFNBQVNLLFNBQVNDLFdBQ3pCcEMsZ0JBQWdCc0MsTUFBTSxHQUFHO29CQUUvQixJQUFJdEMsa0JBQWtCLElBQUksRUFBRTt3QkFDMUIsSUFBTXVDLGlCQUFpQixJQUFJLEVBQ3JCQyxrQkFBa0IsSUFBSTt3QkFFNUJULFFBQVEsSUEvRktqQyxNQStGS0MsUUFBUUMsZUFBZXVDLGdCQUFnQkM7b0JBQzNELENBQUM7Z0JBQ0gsQ0FBQztnQkFFRCxJQUFJLEFBQUNkLGVBQWUsSUFBSSxJQUFNQyxnQkFBZ0IsSUFBSSxFQUFHO29CQUNuRCxJQUFJVyxPQUNBSDtvQkFFSixJQUFNQyxZQUFXQyw4QkFBbUI7b0JBRXBDRixXQUFVVCxZQUFhLEdBQUc7b0JBRTFCWSxRQUFPUixTQUFTSyxVQUFTQztvQkFFekIsSUFBTUcsa0JBQWlCRCxPQUFNLEdBQUc7b0JBRWhDSCxXQUFVUixhQUFjLEdBQUc7b0JBRTNCVyxRQUFPUixTQUFTSyxVQUFTQztvQkFFekIsSUFBTUksbUJBQWtCRixPQUFNLEdBQUc7b0JBRWpDLElBQUksQUFBQ0Msb0JBQW1CLElBQUksSUFBTUMscUJBQW9CLElBQUksRUFBRzt3QkFDM0QsSUFBTXhDLGlCQUFnQixJQUFJO3dCQUUxQitCLFFBQVEsSUF4SEtqQyxNQXdIS0MsUUFBUUMsZ0JBQWV1QyxpQkFBZ0JDO29CQUMzRCxDQUFDO2dCQUNILENBQUM7Z0JBRUQsT0FBT1Q7WUFDVDs7O1lBRU9VLEtBQUFBO21CQUFQLFNBQU9BLDJCQUEyQnpDLGFBQWEsRUFBRUQsTUFBTSxFQUFFO2dCQUN2RCxJQUFNRSwyQkFBMkIsSUFBSSxFQUMvQkMsMEJBQTBCLElBQUksRUFDOUI2QixRQUFRLElBbElHakMsTUFrSU9DLFFBQVFDLGVBQWVDLDBCQUEwQkM7Z0JBRXpFLE9BQU82QjtZQUNUOzs7WUFFT1csS0FBQUE7bUJBQVAsU0FBT0EsNkRBQTZEekMsd0JBQXdCLEVBQUVDLHVCQUF1QixFQUFFSCxNQUFNLEVBQUU7Z0JBQzdILElBQU1DLGdCQUFnQixJQUFJLEVBQ3BCK0IsUUFBUSxJQXpJR2pDLE1BeUlPQyxRQUFRQyxlQUFlQywwQkFBMEJDO2dCQUV6RSxPQUFPNkI7WUFDVDs7O1dBNUltQmpDIn0=