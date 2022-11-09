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
                var labels = json.labels;
                var statement = json.statement, consequent = json.consequent, supposition = json.supposition;
                labels = labels.map(function(label) {
                    var _$json = label; ///
                    label = _label.default.fromJSON(_$json);
                    return label;
                });
                var statementNode = null, consequentNode = null, suppositionNode = null;
                if (statement !== null) {
                    var content = statement, ruleName = _ruleNames.STATEMENT_RULE_NAME, node = callback(content, ruleName);
                    statementNode = node; ///
                }
                if (consequent !== null) {
                    var content1 = consequent, ruleName1 = _ruleNames.STATEMENT_RULE_NAME, node1 = callback(content1, ruleName1);
                    consequentNode = node1; ///
                }
                if (supposition !== null) {
                    var content2 = supposition, ruleName2 = _ruleNames.STATEMENT_RULE_NAME, node2 = callback(content2, ruleName2);
                    suppositionNode = node2; ///
                }
                var axiom = new Axiom(labels, statementNode, consequentNode, suppositionNode);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9heGlvbS5qcyIsIjw8anN4LWNvbmZpZy1wcmFnbWEuanM+PiJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IExhYmVsIGZyb20gXCIuL2xhYmVsXCI7XG5cbmltcG9ydCB7IEFYSU9NX0tJTkQgfSBmcm9tIFwiLi9raW5kc1wiO1xuaW1wb3J0IHsgbm9kZUFzU3RyaW5nIH0gZnJvbSBcIi4vdXRpbGl0aWVzL3N0cmluZ1wiO1xuaW1wb3J0IHsgU1RBVEVNRU5UX1JVTEVfTkFNRSB9IGZyb20gXCJvY2NhbS1jdXN0b20tZ3JhbW1hcnMvbGliL3J1bGVOYW1lc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBeGlvbSB7XG4gIGNvbnN0cnVjdG9yKGxhYmVscywgc3RhdGVtZW50Tm9kZSwgc3VwcG9zaXRpb25TdGF0ZW1lbnROb2RlLCBjb25zZXF1ZW50U3RhdGVtZW50Tm9kZSkge1xuICAgIHRoaXMubGFiZWxzID0gbGFiZWxzO1xuICAgIHRoaXMuc3RhdGVtZW50Tm9kZSA9IHN0YXRlbWVudE5vZGU7XG4gICAgdGhpcy5zdXBwb3NpdGlvblN0YXRlbWVudE5vZGUgPSBzdXBwb3NpdGlvblN0YXRlbWVudE5vZGU7XG4gICAgdGhpcy5jb25zZXF1ZW50U3RhdGVtZW50Tm9kZSA9IGNvbnNlcXVlbnRTdGF0ZW1lbnROb2RlO1xuICB9XG5cbiAgZ2V0TGFiZWxzKCkge1xuICAgIHJldHVybiB0aGlzLmxhYmVscztcbiAgfVxuXG4gIGdldFN0YXRlbWVudE5vZGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RhdGVtZW50Tm9kZTtcbiAgfVxuXG4gIGdldFN1cHBvc2l0aW9uU3RhdGVtZW50Tm9kZSgpIHtcbiAgICByZXR1cm4gdGhpcy5zdXBwb3NpdGlvblN0YXRlbWVudE5vZGU7XG4gIH1cblxuICBnZXRDb25zZXF1ZW50U3RhdGVtZW50Tm9kZSgpIHtcbiAgICByZXR1cm4gdGhpcy5jb25zZXF1ZW50U3RhdGVtZW50Tm9kZTtcbiAgfVxuXG4gIG1hdGNoTGFiZWxOYW1lKGxhYmVsTmFtZSkge1xuICAgIGNvbnN0IG1hdGNoZXNMYWJlbE5hbWUgPSB0aGlzLmxhYmVscy5zb21lKChsYWJlbCkgPT4ge1xuICAgICAgY29uc3QgbmFtZSA9IGxhYmVsTmFtZSwgLy8vXG4gICAgICAgICAgICBsYWJlbE1hdGNoZXNOYW1lID0gbGFiZWwubWF0Y2hOYW1lKG5hbWUpO1xuXG4gICAgICBpZiAobGFiZWxNYXRjaGVzTmFtZSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiBtYXRjaGVzTGFiZWxOYW1lO1xuICB9XG5cbiAgdG9KU09OKCkge1xuICAgIGNvbnN0IGxhYmVsc0pTT04gPSB0aGlzLmxhYmVscy5tYXAoKGxhYmVsKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBsYWJlbEpTT04gPSBsYWJlbC50b0pTT04oKTtcblxuICAgICAgICAgICAgcmV0dXJuIGxhYmVsSlNPTjtcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBzdGF0ZW1lbnRTdHJpbmcgPSBub2RlQXNTdHJpbmcodGhpcy5zdGF0ZW1lbnROb2RlKSxcbiAgICAgICAgICBjb25zZXF1ZW50U3RhdGVtZW50U3RyaW5nID0gbm9kZUFzU3RyaW5nKHRoaXMuY29uc2VxdWVudFN0YXRlbWVudE5vZGUpLFxuICAgICAgICAgIHN1cHBvc2l0aW9uU3RhdGVtZW50U3RyaW5nID0gbm9kZUFzU3RyaW5nKHRoaXMuc3VwcG9zaXRpb25TdGF0ZW1lbnROb2RlKSxcbiAgICAgICAgICBraW5kID0gQVhJT01fS0lORCxcbiAgICAgICAgICBsYWJlbHMgPSBsYWJlbHNKU09OLCAgLy8vXG4gICAgICAgICAgc3RhdGVtZW50ID0gc3RhdGVtZW50U3RyaW5nLCAgLy8vXG4gICAgICAgICAgY29uc2VxdWVudCA9IGNvbnNlcXVlbnRTdGF0ZW1lbnRTdHJpbmcsIC8vL1xuICAgICAgICAgIHN1cHBvc2l0aW9uID0gc3VwcG9zaXRpb25TdGF0ZW1lbnRTdHJpbmcsIC8vL1xuICAgICAgICAgIGpzb24gPSB7XG4gICAgICAgICAgICBraW5kLFxuICAgICAgICAgICAgbGFiZWxzLFxuICAgICAgICAgICAgc3RhdGVtZW50LFxuICAgICAgICAgICAgY29uc2VxdWVudCxcbiAgICAgICAgICAgIHN1cHBvc2l0aW9uXG4gICAgICAgICAgfTtcblxuICAgIHJldHVybiBqc29uO1xuICB9XG5cbiAgc3RhdGljIGZyb21KU09OKGpzb24sIGNhbGxiYWNrKSB7XG4gICAgbGV0IHsgbGFiZWxzIH0gPSBqc29uO1xuXG4gICAgY29uc3QgeyBzdGF0ZW1lbnQsIGNvbnNlcXVlbnQsIHN1cHBvc2l0aW9uIH0gPSBqc29uO1xuXG4gICAgbGFiZWxzID0gbGFiZWxzLm1hcCgobGFiZWwpID0+IHtcbiAgICAgIGNvbnN0IGpzb24gPSBsYWJlbDsgLy8vXG5cbiAgICAgIGxhYmVsID0gTGFiZWwuZnJvbUpTT04oanNvbik7XG5cbiAgICAgIHJldHVybiBsYWJlbDtcbiAgICB9KTtcblxuICAgIGxldCBzdGF0ZW1lbnROb2RlID0gbnVsbCxcbiAgICAgICAgY29uc2VxdWVudE5vZGUgPSBudWxsLFxuICAgICAgICBzdXBwb3NpdGlvbk5vZGUgPSBudWxsO1xuXG4gICAgaWYgKHN0YXRlbWVudCAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgY29udGVudCA9IHN0YXRlbWVudCwgIC8vL1xuICAgICAgICAgICAgcnVsZU5hbWUgPSBTVEFURU1FTlRfUlVMRV9OQU1FLFxuICAgICAgICAgICAgbm9kZSA9IGNhbGxiYWNrKGNvbnRlbnQsIHJ1bGVOYW1lKTtcblxuICAgICAgc3RhdGVtZW50Tm9kZSA9IG5vZGU7IC8vL1xuICAgIH1cblxuICAgIGlmIChjb25zZXF1ZW50ICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBjb250ZW50ID0gY29uc2VxdWVudCwgIC8vL1xuICAgICAgICAgICAgcnVsZU5hbWUgPSBTVEFURU1FTlRfUlVMRV9OQU1FLFxuICAgICAgICAgICAgbm9kZSA9IGNhbGxiYWNrKGNvbnRlbnQsIHJ1bGVOYW1lKTtcblxuICAgICAgY29uc2VxdWVudE5vZGUgPSBub2RlOyAvLy9cbiAgICB9XG5cbiAgICBpZiAoc3VwcG9zaXRpb24gIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IGNvbnRlbnQgPSBzdXBwb3NpdGlvbiwgIC8vL1xuICAgICAgICAgICAgcnVsZU5hbWUgPSBTVEFURU1FTlRfUlVMRV9OQU1FLFxuICAgICAgICAgICAgbm9kZSA9IGNhbGxiYWNrKGNvbnRlbnQsIHJ1bGVOYW1lKTtcblxuICAgICAgc3VwcG9zaXRpb25Ob2RlID0gbm9kZTsgLy8vXG4gICAgfVxuXG4gICAgY29uc3QgYXhpb20gPSBuZXcgQXhpb20obGFiZWxzLCBzdGF0ZW1lbnROb2RlLCBjb25zZXF1ZW50Tm9kZSwgc3VwcG9zaXRpb25Ob2RlKTtcblxuICAgIHJldHVybiBheGlvbTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tU3RhdGVtZW50Tm9kZUFuZExhYmVscyhzdGF0ZW1lbnROb2RlLCBsYWJlbHMpIHtcbiAgICBjb25zdCBzdXBwb3NpdGlvblN0YXRlbWVudE5vZGUgPSBudWxsLFxuICAgICAgICAgIGNvbnNlcXVlbnRTdGF0ZW1lbnROb2RlID0gbnVsbCxcbiAgICAgICAgICBheGlvbSA9IG5ldyBBeGlvbShsYWJlbHMsIHN0YXRlbWVudE5vZGUsIHN1cHBvc2l0aW9uU3RhdGVtZW50Tm9kZSwgY29uc2VxdWVudFN0YXRlbWVudE5vZGUpO1xuXG4gICAgcmV0dXJuIGF4aW9tO1xuICB9XG5cbiAgc3RhdGljIGZyb21TdXBwb3NpdGlvblN0YXRlbWVudE5vZGVDb25zZXF1ZW50U3RhdGVtZW50Tm9kZUFuZExhYmVscyhzdXBwb3NpdGlvblN0YXRlbWVudE5vZGUsIGNvbnNlcXVlbnRTdGF0ZW1lbnROb2RlLCBsYWJlbHMpIHtcbiAgICBjb25zdCBzdGF0ZW1lbnROb2RlID0gbnVsbCxcbiAgICAgICAgICBheGlvbSA9IG5ldyBBeGlvbShsYWJlbHMsIHN0YXRlbWVudE5vZGUsIHN1cHBvc2l0aW9uU3RhdGVtZW50Tm9kZSwgY29uc2VxdWVudFN0YXRlbWVudE5vZGUpO1xuXG4gICAgcmV0dXJuIGF4aW9tO1xuICB9XG59XG4iLCJSZWFjdC5jcmVhdGVFbGVtZW50Il0sIm5hbWVzIjpbIkF4aW9tIiwibGFiZWxzIiwic3RhdGVtZW50Tm9kZSIsInN1cHBvc2l0aW9uU3RhdGVtZW50Tm9kZSIsImNvbnNlcXVlbnRTdGF0ZW1lbnROb2RlIiwiZ2V0TGFiZWxzIiwiZ2V0U3RhdGVtZW50Tm9kZSIsImdldFN1cHBvc2l0aW9uU3RhdGVtZW50Tm9kZSIsImdldENvbnNlcXVlbnRTdGF0ZW1lbnROb2RlIiwibWF0Y2hMYWJlbE5hbWUiLCJsYWJlbE5hbWUiLCJtYXRjaGVzTGFiZWxOYW1lIiwic29tZSIsImxhYmVsIiwibmFtZSIsImxhYmVsTWF0Y2hlc05hbWUiLCJtYXRjaE5hbWUiLCJ0b0pTT04iLCJsYWJlbHNKU09OIiwibWFwIiwibGFiZWxKU09OIiwic3RhdGVtZW50U3RyaW5nIiwibm9kZUFzU3RyaW5nIiwiY29uc2VxdWVudFN0YXRlbWVudFN0cmluZyIsInN1cHBvc2l0aW9uU3RhdGVtZW50U3RyaW5nIiwia2luZCIsIkFYSU9NX0tJTkQiLCJzdGF0ZW1lbnQiLCJjb25zZXF1ZW50Iiwic3VwcG9zaXRpb24iLCJqc29uIiwiZnJvbUpTT04iLCJjYWxsYmFjayIsIkxhYmVsIiwiY29uc2VxdWVudE5vZGUiLCJzdXBwb3NpdGlvbk5vZGUiLCJjb250ZW50IiwicnVsZU5hbWUiLCJTVEFURU1FTlRfUlVMRV9OQU1FIiwibm9kZSIsImF4aW9tIiwiZnJvbVN0YXRlbWVudE5vZGVBbmRMYWJlbHMiLCJmcm9tU3VwcG9zaXRpb25TdGF0ZW1lbnROb2RlQ29uc2VxdWVudFN0YXRlbWVudE5vZGVBbmRMYWJlbHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBUXFCQTs7OzBEQU5IO3FCQUVTO3NCQUNFO3lCQUNPOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FB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