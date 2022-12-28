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
var _query = require("./utilities/query");
var _kinds = require("./kinds");
var _string = require("./utilities/string");
var _ruleNames = require("./ruleNames");
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
var statementNodeQuery = (0, _query.nodeQuery)("/unqualifiedStatement/statement");
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
            value: function fromJSON(json, releaseContext) {
                var labels = json.labels;
                var labelsJSON = labels; ///
                labels = labelsJSON.map(function(labelJSON) {
                    var _$json = labelJSON, label = _label.default.fromJSON(_$json, releaseContext);
                    return label;
                });
                var statement = json.statement, consequent = json.consequent, supposition = json.supposition;
                var axiom;
                if (false) {
                ///
                } else if (statement !== null) {
                    var ruleName = _ruleNames.UNQUALIFIED_STATEMENT_RULE_NAME, content = "".concat(statement, "\n"), node = releaseContext.nodeFromContentAndRuleName(content, ruleName), unqualifiedStatementNode = node, statementNode = statementNodeQuery(unqualifiedStatementNode), consequentNode = null, suppositionNode = null;
                    axiom = new Axiom(labels, statementNode, consequentNode, suppositionNode);
                } else if (consequent !== null && supposition !== null) {
                    var node1, content1, statementNode1, unqualifiedStatementNode1;
                    var ruleName1 = _ruleNames.UNQUALIFIED_STATEMENT_RULE_NAME;
                    content1 = "".concat(consequent, "\n");
                    node1 = releaseContext.nodeFromContentAndRuleName(content1, ruleName1);
                    unqualifiedStatementNode1 = node1; ///
                    statementNode1 = statementNodeQuery(unqualifiedStatementNode1);
                    var consequentNode1 = statementNode1; ///
                    content1 = "".concat(supposition, "\n");
                    node1 = releaseContext.nodeFromContentAndRuleName(content1, ruleName1);
                    unqualifiedStatementNode1 = node1; ///
                    statementNode1 = statementNodeQuery(unqualifiedStatementNode1);
                    var suppositionNode1 = statementNode1; ///
                    statementNode1 = null;
                    axiom = new Axiom(labels, statementNode1, consequentNode1, suppositionNode1);
                }
                return axiom;
            }
        },
        {
            key: "fromLabelsAndStatementNode",
            value: function fromLabelsAndStatementNode(labels, statementNode) {
                var suppositionStatementNode = null, consequentStatementNode = null, axiom = new Axiom(labels, statementNode, suppositionStatementNode, consequentStatementNode);
                return axiom;
            }
        },
        {
            key: "fromLabelsSuppositionStatementNodeConsequentAndStatementNode",
            value: function fromLabelsSuppositionStatementNodeConsequentAndStatementNode(labels, suppositionStatementNode, consequentStatementNode) {
                var statementNode = null, axiom = new Axiom(labels, statementNode, suppositionStatementNode, consequentStatementNode);
                return axiom;
            }
        }
    ]);
    return Axiom;
}();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9heGlvbS5qcyIsIjw8anN4LWNvbmZpZy1wcmFnbWEuanM+PiJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IExhYmVsIGZyb20gXCIuL2xhYmVsXCI7XG5cbmltcG9ydCB7IG5vZGVRdWVyeSB9IGZyb20gXCIuL3V0aWxpdGllcy9xdWVyeVwiO1xuaW1wb3J0IHsgQVhJT01fS0lORCB9IGZyb20gXCIuL2tpbmRzXCI7XG5pbXBvcnQgeyBub2RlQXNTdHJpbmcgfSBmcm9tIFwiLi91dGlsaXRpZXMvc3RyaW5nXCI7XG5pbXBvcnQgeyBVTlFVQUxJRklFRF9TVEFURU1FTlRfUlVMRV9OQU1FIH0gZnJvbSBcIi4vcnVsZU5hbWVzXCI7XG5cbmNvbnN0IHN0YXRlbWVudE5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi91bnF1YWxpZmllZFN0YXRlbWVudC9zdGF0ZW1lbnRcIik7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEF4aW9tIHtcbiAgY29uc3RydWN0b3IobGFiZWxzLCBzdGF0ZW1lbnROb2RlLCBzdXBwb3NpdGlvblN0YXRlbWVudE5vZGUsIGNvbnNlcXVlbnRTdGF0ZW1lbnROb2RlKSB7XG4gICAgdGhpcy5sYWJlbHMgPSBsYWJlbHM7XG4gICAgdGhpcy5zdGF0ZW1lbnROb2RlID0gc3RhdGVtZW50Tm9kZTtcbiAgICB0aGlzLnN1cHBvc2l0aW9uU3RhdGVtZW50Tm9kZSA9IHN1cHBvc2l0aW9uU3RhdGVtZW50Tm9kZTtcbiAgICB0aGlzLmNvbnNlcXVlbnRTdGF0ZW1lbnROb2RlID0gY29uc2VxdWVudFN0YXRlbWVudE5vZGU7XG4gIH1cblxuICBnZXRMYWJlbHMoKSB7XG4gICAgcmV0dXJuIHRoaXMubGFiZWxzO1xuICB9XG5cbiAgZ2V0U3RhdGVtZW50Tm9kZSgpIHtcbiAgICByZXR1cm4gdGhpcy5zdGF0ZW1lbnROb2RlO1xuICB9XG5cbiAgZ2V0U3VwcG9zaXRpb25TdGF0ZW1lbnROb2RlKCkge1xuICAgIHJldHVybiB0aGlzLnN1cHBvc2l0aW9uU3RhdGVtZW50Tm9kZTtcbiAgfVxuXG4gIGdldENvbnNlcXVlbnRTdGF0ZW1lbnROb2RlKCkge1xuICAgIHJldHVybiB0aGlzLmNvbnNlcXVlbnRTdGF0ZW1lbnROb2RlO1xuICB9XG5cbiAgbWF0Y2hMYWJlbE5hbWUobGFiZWxOYW1lKSB7XG4gICAgY29uc3QgbWF0Y2hlc0xhYmVsTmFtZSA9IHRoaXMubGFiZWxzLnNvbWUoKGxhYmVsKSA9PiB7XG4gICAgICBjb25zdCBuYW1lID0gbGFiZWxOYW1lLCAvLy9cbiAgICAgICAgICAgIGxhYmVsTWF0Y2hlc05hbWUgPSBsYWJlbC5tYXRjaE5hbWUobmFtZSk7XG5cbiAgICAgIGlmIChsYWJlbE1hdGNoZXNOYW1lKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIG1hdGNoZXNMYWJlbE5hbWU7XG4gIH1cblxuICB0b0pTT04oKSB7XG4gICAgY29uc3QgbGFiZWxzSlNPTiA9IHRoaXMubGFiZWxzLm1hcCgobGFiZWwpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGxhYmVsSlNPTiA9IGxhYmVsLnRvSlNPTigpO1xuXG4gICAgICAgICAgICByZXR1cm4gbGFiZWxKU09OO1xuICAgICAgICAgIH0pLFxuICAgICAgICAgIHN0YXRlbWVudFN0cmluZyA9IG5vZGVBc1N0cmluZyh0aGlzLnN0YXRlbWVudE5vZGUpLFxuICAgICAgICAgIGNvbnNlcXVlbnRTdGF0ZW1lbnRTdHJpbmcgPSBub2RlQXNTdHJpbmcodGhpcy5jb25zZXF1ZW50U3RhdGVtZW50Tm9kZSksXG4gICAgICAgICAgc3VwcG9zaXRpb25TdGF0ZW1lbnRTdHJpbmcgPSBub2RlQXNTdHJpbmcodGhpcy5zdXBwb3NpdGlvblN0YXRlbWVudE5vZGUpLFxuICAgICAgICAgIGtpbmQgPSBBWElPTV9LSU5ELFxuICAgICAgICAgIGxhYmVscyA9IGxhYmVsc0pTT04sICAvLy9cbiAgICAgICAgICBzdGF0ZW1lbnQgPSBzdGF0ZW1lbnRTdHJpbmcsICAvLy9cbiAgICAgICAgICBjb25zZXF1ZW50ID0gY29uc2VxdWVudFN0YXRlbWVudFN0cmluZywgLy8vXG4gICAgICAgICAgc3VwcG9zaXRpb24gPSBzdXBwb3NpdGlvblN0YXRlbWVudFN0cmluZywgLy8vXG4gICAgICAgICAganNvbiA9IHtcbiAgICAgICAgICAgIGtpbmQsXG4gICAgICAgICAgICBsYWJlbHMsXG4gICAgICAgICAgICBzdGF0ZW1lbnQsXG4gICAgICAgICAgICBjb25zZXF1ZW50LFxuICAgICAgICAgICAgc3VwcG9zaXRpb25cbiAgICAgICAgICB9O1xuXG4gICAgcmV0dXJuIGpzb247XG4gIH1cblxuICBzdGF0aWMgZnJvbUpTT04oanNvbiwgcmVsZWFzZUNvbnRleHQpIHtcbiAgICBsZXQgeyBsYWJlbHMgfSA9IGpzb247XG5cbiAgICBjb25zdCBsYWJlbHNKU09OID0gbGFiZWxzOyAgLy8vXG5cbiAgICBsYWJlbHMgPSBsYWJlbHNKU09OLm1hcCgobGFiZWxKU09OKSA9PiB7XG4gICAgICBjb25zdCBqc29uID0gbGFiZWxKU09OLCAvLy9cbiAgICAgICAgICAgIGxhYmVsID0gTGFiZWwuZnJvbUpTT04oanNvbiwgcmVsZWFzZUNvbnRleHQpO1xuXG4gICAgICByZXR1cm4gbGFiZWw7XG4gICAgfSk7XG5cbiAgICBjb25zdCB7IHN0YXRlbWVudCwgY29uc2VxdWVudCwgc3VwcG9zaXRpb24gfSA9IGpzb247XG5cbiAgICBsZXQgYXhpb207XG5cbiAgICBpZiAoZmFsc2UpIHtcbiAgICAgIC8vL1xuICAgIH0gZWxzZSBpZiAoc3RhdGVtZW50ICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBydWxlTmFtZSA9IFVOUVVBTElGSUVEX1NUQVRFTUVOVF9SVUxFX05BTUUsXG4gICAgICAgICAgICBjb250ZW50ID0gYCR7c3RhdGVtZW50fVxuYCxcbiAgICAgICAgICAgIG5vZGUgPSByZWxlYXNlQ29udGV4dC5ub2RlRnJvbUNvbnRlbnRBbmRSdWxlTmFtZShjb250ZW50LCBydWxlTmFtZSksXG4gICAgICAgICAgICB1bnF1YWxpZmllZFN0YXRlbWVudE5vZGUgPSBub2RlLCAgLy8vXG4gICAgICAgICAgICBzdGF0ZW1lbnROb2RlID0gc3RhdGVtZW50Tm9kZVF1ZXJ5KHVucXVhbGlmaWVkU3RhdGVtZW50Tm9kZSksXG4gICAgICAgICAgICBjb25zZXF1ZW50Tm9kZSA9IG51bGwsXG4gICAgICAgICAgICBzdXBwb3NpdGlvbk5vZGUgPSBudWxsO1xuXG4gICAgICBheGlvbSA9IG5ldyBBeGlvbShsYWJlbHMsIHN0YXRlbWVudE5vZGUsIGNvbnNlcXVlbnROb2RlLCBzdXBwb3NpdGlvbk5vZGUpO1xuICAgIH0gZWxzZSBpZiAoKGNvbnNlcXVlbnQgIT09IG51bGwpICYmIChzdXBwb3NpdGlvbiAhPT0gbnVsbCkpIHtcbiAgICAgIGxldCBub2RlLFxuICAgICAgICAgIGNvbnRlbnQsXG4gICAgICAgICAgc3RhdGVtZW50Tm9kZSxcbiAgICAgICAgICB1bnF1YWxpZmllZFN0YXRlbWVudE5vZGU7XG5cbiAgICAgIGNvbnN0IHJ1bGVOYW1lID0gVU5RVUFMSUZJRURfU1RBVEVNRU5UX1JVTEVfTkFNRTtcblxuICAgICAgY29udGVudCA9IGAke2NvbnNlcXVlbnR9XG5gO1xuXG4gICAgICBub2RlID0gcmVsZWFzZUNvbnRleHQubm9kZUZyb21Db250ZW50QW5kUnVsZU5hbWUoY29udGVudCwgcnVsZU5hbWUpO1xuXG4gICAgICB1bnF1YWxpZmllZFN0YXRlbWVudE5vZGUgPSBub2RlOyAgLy8vXG5cbiAgICAgIHN0YXRlbWVudE5vZGUgPSBzdGF0ZW1lbnROb2RlUXVlcnkodW5xdWFsaWZpZWRTdGF0ZW1lbnROb2RlKTtcblxuICAgICAgY29uc3QgY29uc2VxdWVudE5vZGUgPSBzdGF0ZW1lbnROb2RlOyAvLy9cblxuICAgICAgY29udGVudCA9IGAke3N1cHBvc2l0aW9ufVxuYDtcblxuICAgICAgbm9kZSA9IHJlbGVhc2VDb250ZXh0Lm5vZGVGcm9tQ29udGVudEFuZFJ1bGVOYW1lKGNvbnRlbnQsIHJ1bGVOYW1lKTtcblxuICAgICAgdW5xdWFsaWZpZWRTdGF0ZW1lbnROb2RlID0gbm9kZTsgIC8vL1xuXG4gICAgICBzdGF0ZW1lbnROb2RlID0gc3RhdGVtZW50Tm9kZVF1ZXJ5KHVucXVhbGlmaWVkU3RhdGVtZW50Tm9kZSk7XG5cbiAgICAgIGNvbnN0IHN1cHBvc2l0aW9uTm9kZSA9IHN0YXRlbWVudE5vZGU7ICAvLy9cblxuICAgICAgc3RhdGVtZW50Tm9kZSA9IG51bGw7XG5cbiAgICAgIGF4aW9tID0gbmV3IEF4aW9tKGxhYmVscywgc3RhdGVtZW50Tm9kZSwgY29uc2VxdWVudE5vZGUsIHN1cHBvc2l0aW9uTm9kZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGF4aW9tO1xuICB9XG5cbiAgc3RhdGljIGZyb21MYWJlbHNBbmRTdGF0ZW1lbnROb2RlKGxhYmVscywgc3RhdGVtZW50Tm9kZSkge1xuICAgIGNvbnN0IHN1cHBvc2l0aW9uU3RhdGVtZW50Tm9kZSA9IG51bGwsXG4gICAgICAgICAgY29uc2VxdWVudFN0YXRlbWVudE5vZGUgPSBudWxsLFxuICAgICAgICAgIGF4aW9tID0gbmV3IEF4aW9tKGxhYmVscywgc3RhdGVtZW50Tm9kZSwgc3VwcG9zaXRpb25TdGF0ZW1lbnROb2RlLCBjb25zZXF1ZW50U3RhdGVtZW50Tm9kZSk7XG5cbiAgICByZXR1cm4gYXhpb207XG4gIH1cblxuICBzdGF0aWMgZnJvbUxhYmVsc1N1cHBvc2l0aW9uU3RhdGVtZW50Tm9kZUNvbnNlcXVlbnRBbmRTdGF0ZW1lbnROb2RlKGxhYmVscywgc3VwcG9zaXRpb25TdGF0ZW1lbnROb2RlLCBjb25zZXF1ZW50U3RhdGVtZW50Tm9kZSkge1xuICAgIGNvbnN0IHN0YXRlbWVudE5vZGUgPSBudWxsLFxuICAgICAgICAgIGF4aW9tID0gbmV3IEF4aW9tKGxhYmVscywgc3RhdGVtZW50Tm9kZSwgc3VwcG9zaXRpb25TdGF0ZW1lbnROb2RlLCBjb25zZXF1ZW50U3RhdGVtZW50Tm9kZSk7XG5cbiAgICByZXR1cm4gYXhpb207XG4gIH1cbn1cbiIsIlJlYWN0LmNyZWF0ZUVsZW1lbnQiXSwibmFtZXMiOlsiQXhpb20iLCJzdGF0ZW1lbnROb2RlUXVlcnkiLCJub2RlUXVlcnkiLCJsYWJlbHMiLCJzdGF0ZW1lbnROb2RlIiwic3VwcG9zaXRpb25TdGF0ZW1lbnROb2RlIiwiY29uc2VxdWVudFN0YXRlbWVudE5vZGUiLCJnZXRMYWJlbHMiLCJnZXRTdGF0ZW1lbnROb2RlIiwiZ2V0U3VwcG9zaXRpb25TdGF0ZW1lbnROb2RlIiwiZ2V0Q29uc2VxdWVudFN0YXRlbWVudE5vZGUiLCJtYXRjaExhYmVsTmFtZSIsImxhYmVsTmFtZSIsIm1hdGNoZXNMYWJlbE5hbWUiLCJzb21lIiwibGFiZWwiLCJuYW1lIiwibGFiZWxNYXRjaGVzTmFtZSIsIm1hdGNoTmFtZSIsInRvSlNPTiIsImxhYmVsc0pTT04iLCJtYXAiLCJsYWJlbEpTT04iLCJzdGF0ZW1lbnRTdHJpbmciLCJub2RlQXNTdHJpbmciLCJjb25zZXF1ZW50U3RhdGVtZW50U3RyaW5nIiwic3VwcG9zaXRpb25TdGF0ZW1lbnRTdHJpbmciLCJraW5kIiwiQVhJT01fS0lORCIsInN0YXRlbWVudCIsImNvbnNlcXVlbnQiLCJzdXBwb3NpdGlvbiIsImpzb24iLCJmcm9tSlNPTiIsInJlbGVhc2VDb250ZXh0IiwiTGFiZWwiLCJheGlvbSIsInJ1bGVOYW1lIiwiVU5RVUFMSUZJRURfU1RBVEVNRU5UX1JVTEVfTkFNRSIsImNvbnRlbnQiLCJub2RlIiwibm9kZUZyb21Db250ZW50QW5kUnVsZU5hbWUiLCJ1bnF1YWxpZmllZFN0YXRlbWVudE5vZGUiLCJjb25zZXF1ZW50Tm9kZSIsInN1cHBvc2l0aW9uTm9kZSIsImZyb21MYWJlbHNBbmRTdGF0ZW1lbnROb2RlIiwiZnJvbUxhYmVsc1N1cHBvc2l0aW9uU3RhdGVtZW50Tm9kZUNvbnNlcXVlbnRBbmRTdGF0ZW1lbnROb2RlIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQVdxQkE7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