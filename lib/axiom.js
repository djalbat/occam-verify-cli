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
                    var ruleName = _ruleNames.UNQUALIFIED_STATEMENT_RULE_NAME, content = "".concat(statement, "\n"), unqualifiedStatementNode = callback(content, ruleName), statementNode = statementNodeQuery(unqualifiedStatementNode), consequentNode = null, suppositionNode = null;
                    axiom = new Axiom(labels, statementNode, consequentNode, suppositionNode);
                }
                if (consequent !== null && supposition !== null) {
                    var content1, statementNode1, unqualifiedStatementNode1;
                    var ruleName1 = _ruleNames.UNQUALIFIED_STATEMENT_RULE_NAME;
                    content1 = "".concat(consequent, "\n");
                    unqualifiedStatementNode1 = callback(content1, ruleName1);
                    statementNode1 = statementNodeQuery(unqualifiedStatementNode1);
                    var consequentNode1 = statementNode1; ///
                    content1 = "".concat(supposition, "\n");
                    unqualifiedStatementNode1 = callback(content1, ruleName1);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9heGlvbS5qcyIsIjw8anN4LWNvbmZpZy1wcmFnbWEuanM+PiJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IExhYmVsIGZyb20gXCIuL2xhYmVsXCI7XG5cbmltcG9ydCB7IG5vZGVRdWVyeSB9IGZyb20gXCIuL3V0aWxpdGllcy9xdWVyeVwiO1xuaW1wb3J0IHsgQVhJT01fS0lORCB9IGZyb20gXCIuL2tpbmRzXCI7XG5pbXBvcnQgeyBub2RlQXNTdHJpbmcgfSBmcm9tIFwiLi91dGlsaXRpZXMvc3RyaW5nXCI7XG5pbXBvcnQgeyBVTlFVQUxJRklFRF9TVEFURU1FTlRfUlVMRV9OQU1FIH0gZnJvbSBcIi4vcnVsZU5hbWVzXCI7XG5cbmNvbnN0IHN0YXRlbWVudE5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi91bnF1YWxpZmllZFN0YXRlbWVudC9zdGF0ZW1lbnRcIik7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEF4aW9tIHtcbiAgY29uc3RydWN0b3IobGFiZWxzLCBzdGF0ZW1lbnROb2RlLCBzdXBwb3NpdGlvblN0YXRlbWVudE5vZGUsIGNvbnNlcXVlbnRTdGF0ZW1lbnROb2RlKSB7XG4gICAgdGhpcy5sYWJlbHMgPSBsYWJlbHM7XG4gICAgdGhpcy5zdGF0ZW1lbnROb2RlID0gc3RhdGVtZW50Tm9kZTtcbiAgICB0aGlzLnN1cHBvc2l0aW9uU3RhdGVtZW50Tm9kZSA9IHN1cHBvc2l0aW9uU3RhdGVtZW50Tm9kZTtcbiAgICB0aGlzLmNvbnNlcXVlbnRTdGF0ZW1lbnROb2RlID0gY29uc2VxdWVudFN0YXRlbWVudE5vZGU7XG4gIH1cblxuICBnZXRMYWJlbHMoKSB7XG4gICAgcmV0dXJuIHRoaXMubGFiZWxzO1xuICB9XG5cbiAgZ2V0U3RhdGVtZW50Tm9kZSgpIHtcbiAgICByZXR1cm4gdGhpcy5zdGF0ZW1lbnROb2RlO1xuICB9XG5cbiAgZ2V0U3VwcG9zaXRpb25TdGF0ZW1lbnROb2RlKCkge1xuICAgIHJldHVybiB0aGlzLnN1cHBvc2l0aW9uU3RhdGVtZW50Tm9kZTtcbiAgfVxuXG4gIGdldENvbnNlcXVlbnRTdGF0ZW1lbnROb2RlKCkge1xuICAgIHJldHVybiB0aGlzLmNvbnNlcXVlbnRTdGF0ZW1lbnROb2RlO1xuICB9XG5cbiAgbWF0Y2hMYWJlbE5hbWUobGFiZWxOYW1lKSB7XG4gICAgY29uc3QgbWF0Y2hlc0xhYmVsTmFtZSA9IHRoaXMubGFiZWxzLnNvbWUoKGxhYmVsKSA9PiB7XG4gICAgICBjb25zdCBuYW1lID0gbGFiZWxOYW1lLCAvLy9cbiAgICAgICAgICAgIGxhYmVsTWF0Y2hlc05hbWUgPSBsYWJlbC5tYXRjaE5hbWUobmFtZSk7XG5cbiAgICAgIGlmIChsYWJlbE1hdGNoZXNOYW1lKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIG1hdGNoZXNMYWJlbE5hbWU7XG4gIH1cblxuICB0b0pTT04oKSB7XG4gICAgY29uc3QgbGFiZWxzSlNPTiA9IHRoaXMubGFiZWxzLm1hcCgobGFiZWwpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGxhYmVsSlNPTiA9IGxhYmVsLnRvSlNPTigpO1xuXG4gICAgICAgICAgICByZXR1cm4gbGFiZWxKU09OO1xuICAgICAgICAgIH0pLFxuICAgICAgICAgIHN0YXRlbWVudFN0cmluZyA9IG5vZGVBc1N0cmluZyh0aGlzLnN0YXRlbWVudE5vZGUpLFxuICAgICAgICAgIGNvbnNlcXVlbnRTdGF0ZW1lbnRTdHJpbmcgPSBub2RlQXNTdHJpbmcodGhpcy5jb25zZXF1ZW50U3RhdGVtZW50Tm9kZSksXG4gICAgICAgICAgc3VwcG9zaXRpb25TdGF0ZW1lbnRTdHJpbmcgPSBub2RlQXNTdHJpbmcodGhpcy5zdXBwb3NpdGlvblN0YXRlbWVudE5vZGUpLFxuICAgICAgICAgIGtpbmQgPSBBWElPTV9LSU5ELFxuICAgICAgICAgIGxhYmVscyA9IGxhYmVsc0pTT04sICAvLy9cbiAgICAgICAgICBzdGF0ZW1lbnQgPSBzdGF0ZW1lbnRTdHJpbmcsICAvLy9cbiAgICAgICAgICBjb25zZXF1ZW50ID0gY29uc2VxdWVudFN0YXRlbWVudFN0cmluZywgLy8vXG4gICAgICAgICAgc3VwcG9zaXRpb24gPSBzdXBwb3NpdGlvblN0YXRlbWVudFN0cmluZywgLy8vXG4gICAgICAgICAganNvbiA9IHtcbiAgICAgICAgICAgIGtpbmQsXG4gICAgICAgICAgICBsYWJlbHMsXG4gICAgICAgICAgICBzdGF0ZW1lbnQsXG4gICAgICAgICAgICBjb25zZXF1ZW50LFxuICAgICAgICAgICAgc3VwcG9zaXRpb25cbiAgICAgICAgICB9O1xuXG4gICAgcmV0dXJuIGpzb247XG4gIH1cblxuICBzdGF0aWMgZnJvbUpTT04oanNvbiwgY2FsbGJhY2spIHtcbiAgICBsZXQgYXhpb20gPSBudWxsO1xuXG4gICAgbGV0IHsgbGFiZWxzIH0gPSBqc29uO1xuXG4gICAgY29uc3QgeyBzdGF0ZW1lbnQsIGNvbnNlcXVlbnQsIHN1cHBvc2l0aW9uIH0gPSBqc29uO1xuXG4gICAgbGFiZWxzID0gbGFiZWxzLnJlZHVjZSgobGFiZWxzLCBsYWJlbCkgPT4ge1xuICAgICAgaWYgKGxhYmVscyAhPT0gbnVsbCkge1xuICAgICAgICBjb25zdCBqc29uID0gbGFiZWw7IC8vL1xuXG4gICAgICAgIGxhYmVsID0gTGFiZWwuZnJvbUpTT04oanNvbiwgY2FsbGJhY2spOyAvLy9cblxuICAgICAgICBpZiAobGFiZWwgIT09IG51bGwpIHtcbiAgICAgICAgICBsYWJlbHMucHVzaChsYWJlbCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbGFiZWxzID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gbGFiZWxzO1xuICAgIH0sIFtdKTtcblxuICAgIGlmIChzdGF0ZW1lbnQgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHJ1bGVOYW1lID0gVU5RVUFMSUZJRURfU1RBVEVNRU5UX1JVTEVfTkFNRSxcbiAgICAgICAgICAgIGNvbnRlbnQgPSBgJHtzdGF0ZW1lbnR9XG5gLFxuICAgICAgICAgICAgdW5xdWFsaWZpZWRTdGF0ZW1lbnROb2RlID0gY2FsbGJhY2soY29udGVudCwgcnVsZU5hbWUpLFxuICAgICAgICAgICAgc3RhdGVtZW50Tm9kZSA9IHN0YXRlbWVudE5vZGVRdWVyeSh1bnF1YWxpZmllZFN0YXRlbWVudE5vZGUpLFxuICAgICAgICAgICAgY29uc2VxdWVudE5vZGUgPSBudWxsLFxuICAgICAgICAgICAgc3VwcG9zaXRpb25Ob2RlID0gbnVsbDtcblxuICAgICAgYXhpb20gPSBuZXcgQXhpb20obGFiZWxzLCBzdGF0ZW1lbnROb2RlLCBjb25zZXF1ZW50Tm9kZSwgc3VwcG9zaXRpb25Ob2RlKTtcbiAgICB9XG5cbiAgICBpZiAoKGNvbnNlcXVlbnQgIT09IG51bGwpICYmIChzdXBwb3NpdGlvbiAhPT0gbnVsbCkpIHtcbiAgICAgIGxldCBjb250ZW50LFxuICAgICAgICAgIHN0YXRlbWVudE5vZGUsXG4gICAgICAgICAgdW5xdWFsaWZpZWRTdGF0ZW1lbnROb2RlO1xuXG4gICAgICBjb25zdCBydWxlTmFtZSA9IFVOUVVBTElGSUVEX1NUQVRFTUVOVF9SVUxFX05BTUU7XG5cbiAgICAgIGNvbnRlbnQgPSBgJHtjb25zZXF1ZW50fVxuYDtcblxuICAgICAgdW5xdWFsaWZpZWRTdGF0ZW1lbnROb2RlID0gY2FsbGJhY2soY29udGVudCwgcnVsZU5hbWUpO1xuXG4gICAgICBzdGF0ZW1lbnROb2RlID0gc3RhdGVtZW50Tm9kZVF1ZXJ5KHVucXVhbGlmaWVkU3RhdGVtZW50Tm9kZSk7XG5cbiAgICAgIGNvbnN0IGNvbnNlcXVlbnROb2RlID0gc3RhdGVtZW50Tm9kZTsgLy8vXG5cbiAgICAgIGNvbnRlbnQgPSBgJHtzdXBwb3NpdGlvbn1cbmA7XG5cbiAgICAgIHVucXVhbGlmaWVkU3RhdGVtZW50Tm9kZSA9IGNhbGxiYWNrKGNvbnRlbnQsIHJ1bGVOYW1lKTtcblxuICAgICAgc3RhdGVtZW50Tm9kZSA9IHN0YXRlbWVudE5vZGVRdWVyeSh1bnF1YWxpZmllZFN0YXRlbWVudE5vZGUpO1xuXG4gICAgICBjb25zdCBzdXBwb3NpdGlvbk5vZGUgPSBzdGF0ZW1lbnROb2RlOyAgLy8vXG5cbiAgICAgIHN0YXRlbWVudE5vZGUgPSBudWxsO1xuXG4gICAgICBheGlvbSA9IG5ldyBBeGlvbShsYWJlbHMsIHN0YXRlbWVudE5vZGUsIGNvbnNlcXVlbnROb2RlLCBzdXBwb3NpdGlvbk5vZGUpO1xuICAgIH1cblxuICAgIHJldHVybiBheGlvbTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTGFiZWxzQW5kU3RhdGVtZW50Tm9kZShsYWJlbHMsIHN0YXRlbWVudE5vZGUpIHtcbiAgICBjb25zdCBzdXBwb3NpdGlvblN0YXRlbWVudE5vZGUgPSBudWxsLFxuICAgICAgICAgIGNvbnNlcXVlbnRTdGF0ZW1lbnROb2RlID0gbnVsbCxcbiAgICAgICAgICBheGlvbSA9IG5ldyBBeGlvbShsYWJlbHMsIHN0YXRlbWVudE5vZGUsIHN1cHBvc2l0aW9uU3RhdGVtZW50Tm9kZSwgY29uc2VxdWVudFN0YXRlbWVudE5vZGUpO1xuXG4gICAgcmV0dXJuIGF4aW9tO1xuICB9XG5cbiAgc3RhdGljIGZyb21MYWJlbHNTdXBwb3NpdGlvblN0YXRlbWVudE5vZGVDb25zZXF1ZW50QW5kU3RhdGVtZW50Tm9kZShsYWJlbHMsIHN1cHBvc2l0aW9uU3RhdGVtZW50Tm9kZSwgY29uc2VxdWVudFN0YXRlbWVudE5vZGUpIHtcbiAgICBjb25zdCBzdGF0ZW1lbnROb2RlID0gbnVsbCxcbiAgICAgICAgICBheGlvbSA9IG5ldyBBeGlvbShsYWJlbHMsIHN0YXRlbWVudE5vZGUsIHN1cHBvc2l0aW9uU3RhdGVtZW50Tm9kZSwgY29uc2VxdWVudFN0YXRlbWVudE5vZGUpO1xuXG4gICAgcmV0dXJuIGF4aW9tO1xuICB9XG59XG4iLCJSZWFjdC5jcmVhdGVFbGVtZW50Il0sIm5hbWVzIjpbIkF4aW9tIiwic3RhdGVtZW50Tm9kZVF1ZXJ5Iiwibm9kZVF1ZXJ5IiwibGFiZWxzIiwic3RhdGVtZW50Tm9kZSIsInN1cHBvc2l0aW9uU3RhdGVtZW50Tm9kZSIsImNvbnNlcXVlbnRTdGF0ZW1lbnROb2RlIiwiZ2V0TGFiZWxzIiwiZ2V0U3RhdGVtZW50Tm9kZSIsImdldFN1cHBvc2l0aW9uU3RhdGVtZW50Tm9kZSIsImdldENvbnNlcXVlbnRTdGF0ZW1lbnROb2RlIiwibWF0Y2hMYWJlbE5hbWUiLCJsYWJlbE5hbWUiLCJtYXRjaGVzTGFiZWxOYW1lIiwic29tZSIsImxhYmVsIiwibmFtZSIsImxhYmVsTWF0Y2hlc05hbWUiLCJtYXRjaE5hbWUiLCJ0b0pTT04iLCJsYWJlbHNKU09OIiwibWFwIiwibGFiZWxKU09OIiwic3RhdGVtZW50U3RyaW5nIiwibm9kZUFzU3RyaW5nIiwiY29uc2VxdWVudFN0YXRlbWVudFN0cmluZyIsInN1cHBvc2l0aW9uU3RhdGVtZW50U3RyaW5nIiwia2luZCIsIkFYSU9NX0tJTkQiLCJzdGF0ZW1lbnQiLCJjb25zZXF1ZW50Iiwic3VwcG9zaXRpb24iLCJqc29uIiwiZnJvbUpTT04iLCJjYWxsYmFjayIsImF4aW9tIiwicmVkdWNlIiwiTGFiZWwiLCJwdXNoIiwicnVsZU5hbWUiLCJVTlFVQUxJRklFRF9TVEFURU1FTlRfUlVMRV9OQU1FIiwiY29udGVudCIsInVucXVhbGlmaWVkU3RhdGVtZW50Tm9kZSIsImNvbnNlcXVlbnROb2RlIiwic3VwcG9zaXRpb25Ob2RlIiwiZnJvbUxhYmVsc0FuZFN0YXRlbWVudE5vZGUiLCJmcm9tTGFiZWxzU3VwcG9zaXRpb25TdGF0ZW1lbnROb2RlQ29uc2VxdWVudEFuZFN0YXRlbWVudE5vZGUiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBV3FCQTs7OzBEQVRIO3FCQUVRO3FCQUNDO3NCQUNFO3lCQUNtQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVoRCxJQUFNQyxxQkFBcUJDLElBQUFBLGdCQUFTLEVBQUM7QUFFdEIsSUFBQSxBQUFNRixzQkFBTjthQUFNQSxNQUNQRyxNQUFNLEVBQUVD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