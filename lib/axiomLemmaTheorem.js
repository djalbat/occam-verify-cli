"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return AxiomLemmaTheorem;
    }
});
var _label = /*#__PURE__*/ _interopRequireDefault(require("./label"));
var _antecedent = /*#__PURE__*/ _interopRequireDefault(require("./antecedent"));
var _consequent = /*#__PURE__*/ _interopRequireDefault(require("./consequent"));
var _array = require("./utilities/array");
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
var AxiomLemmaTheorem = /*#__PURE__*/ function() {
    function AxiomLemmaTheorem(labels, antecedents, consequent) {
        _classCallCheck(this, AxiomLemmaTheorem);
        this.labels = labels;
        this.antecedents = antecedents;
        this.consequent = consequent;
    }
    _createClass(AxiomLemmaTheorem, [
        {
            key: "getLabels",
            value: function getLabels() {
                return this.labels;
            }
        },
        {
            key: "getAntecedents",
            value: function getAntecedents() {
                return this.antecedents;
            }
        },
        {
            key: "getConsequent",
            value: function getConsequent() {
                return this.consequent;
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
            key: "matchStatement",
            value: function matchStatement(statementNode, proofContext) {
                var _this = this;
                var statementNatches;
                var antecedentsLength = this.antecedents.length;
                if (antecedentsLength === 0) {
                    var substitutions = [], consequentMatches = matchConsequent(this.consequent, statementNode, substitutions);
                    statementNatches = consequentMatches; ///
                } else {
                    var assertions = proofContext.getAssertions();
                    statementNatches = (0, _array.someSubArray)(assertions, antecedentsLength, function(assertions) {
                        var antecedentsMatchConsequent = matchAntecedentsAndConsequent(_this.antecedents, _this.consequent, assertions, statementNode);
                        if (antecedentsMatchConsequent) {
                            return true;
                        }
                    });
                }
                return statementNatches;
            }
        },
        {
            key: "toJSON",
            value: function toJSON() {
                var kind = this.constructor.kind, labelsJSON = this.labels.map(function(label) {
                    var labelJSON = label.toJSON();
                    return labelJSON;
                }), antecedentsJSON = this.antecedents.map(function(antecedent) {
                    var antecedentJSON = antecedent.toJSON();
                    return antecedentJSON;
                }), consequentJSON = this.consequent.toJSON(), labels = labelsJSON, antecedents = antecedentsJSON, consequent = consequentJSON, json = {
                    kind: kind,
                    labels: labels,
                    antecedents: antecedents,
                    consequent: consequent
                };
                return json;
            }
        }
    ], [
        {
            key: "fromJSON",
            value: function fromJSON(Class, json, releaseContext) {
                var labels = json.labels;
                var labelsJSON = labels; ///
                labels = labelsJSON.map(function(labelJSON) {
                    var _$json = labelJSON, label = _label.default.fromJSON(_$json, releaseContext);
                    return label;
                });
                var antecedents = json.antecedents;
                var antecedentsJSON = antecedents; ///
                antecedents = antecedentsJSON.map(function(antecedentJSON) {
                    var _$json = antecedentJSON, antecedent = _antecedent.default.fromJSON(_$json, releaseContext);
                    return antecedent;
                });
                var consequent = json.consequent;
                var consequentJSON = consequent; ///
                json = consequentJSON; ///
                consequent = _consequent.default.fromJSON(json, releaseContext);
                return new Class(labels, antecedents, consequent); ///
            }
        },
        {
            key: "fromLabelsAntecedentsAndConsequent",
            value: function fromLabelsAntecedentsAndConsequent(Class, labels, antecedents, consequent) {
                return new Class(labels, antecedents, consequent);
            }
        }
    ]);
    return AxiomLemmaTheorem;
}();
function matchAntecedent(antecedent, assertions, substitutions) {
    var assertion = (0, _array.prune)(assertions, function(assertion) {
        var subproofNode = assertion.getSubproofNode(), statementNode = assertion.getStatementNode();
        if (subproofNode !== null) {
            var subProofMatches = antecedent.matchSubproofNode(subproofNode, substitutions);
            if (!subProofMatches) {
                return true;
            }
        }
        if (statementNode !== null) {
            var statementMatches = antecedent.matchStatementNode(statementNode, substitutions);
            if (!statementMatches) {
                return true;
            }
        }
    }) || null;
    var antecedentMatches = assertion !== null;
    return antecedentMatches;
}
function matchAntecedents(antecedent, assertions, substitutions) {
    var antecedentsMatches = antecedent.every(function(antecedent) {
        var antecedentMatches = matchAntecedent(antecedent, assertions, substitutions);
        if (antecedentMatches) {
            return true;
        }
    });
    return antecedentsMatches;
}
function matchConsequent(consequent, statementNode, substitutions) {
    var nonTerminalNodeMatches = consequent.matchStatementNode(statementNode, substitutions), consequentMatches = nonTerminalNodeMatches; ///
    return consequentMatches;
}
function matchAntecedentsAndConsequent(antecedents, consequent, assertions, statementNode) {
    var antecedentsMatchConsequent = false;
    var substitutions = [], antecedentsMatches = matchAntecedents(antecedents, assertions, substitutions);
    if (antecedentsMatches) {
        var consequentMatches = matchConsequent(consequent, statementNode, substitutions);
        antecedentsMatchConsequent = consequentMatches; ///
    }
    return antecedentsMatchConsequent;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9heGlvbUxlbW1hVGhlb3JlbS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IExhYmVsIGZyb20gXCIuL2xhYmVsXCI7XG5pbXBvcnQgQW50ZWNlZGVudCBmcm9tIFwiLi9hbnRlY2VkZW50XCI7XG5pbXBvcnQgQ29uc2VxdWVudCBmcm9tIFwiLi9jb25zZXF1ZW50XCI7XG5cbmltcG9ydCB7IHBydW5lIH0gZnJvbSBcIi4vdXRpbGl0aWVzL2FycmF5XCI7XG5pbXBvcnQgeyBzb21lU3ViQXJyYXkgfSBmcm9tIFwiLi91dGlsaXRpZXMvYXJyYXlcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXhpb21MZW1tYVRoZW9yZW0ge1xuICBjb25zdHJ1Y3RvcihsYWJlbHMsIGFudGVjZWRlbnRzLCBjb25zZXF1ZW50KSB7XG4gICAgdGhpcy5sYWJlbHMgPSBsYWJlbHM7XG4gICAgdGhpcy5hbnRlY2VkZW50cyA9IGFudGVjZWRlbnRzO1xuICAgIHRoaXMuY29uc2VxdWVudCA9IGNvbnNlcXVlbnQ7XG4gIH1cblxuICBnZXRMYWJlbHMoKSB7XG4gICAgcmV0dXJuIHRoaXMubGFiZWxzO1xuICB9XG5cbiAgZ2V0QW50ZWNlZGVudHMoKSB7XG4gICAgcmV0dXJuIHRoaXMuYW50ZWNlZGVudHM7XG4gIH1cblxuICBnZXRDb25zZXF1ZW50KCkge1xuICAgIHJldHVybiB0aGlzLmNvbnNlcXVlbnQ7XG4gIH1cblxuICBtYXRjaExhYmVsTmFtZShsYWJlbE5hbWUpIHtcbiAgICBjb25zdCBtYXRjaGVzTGFiZWxOYW1lID0gdGhpcy5sYWJlbHMuc29tZSgobGFiZWwpID0+IHtcbiAgICAgIGNvbnN0IG5hbWUgPSBsYWJlbE5hbWUsIC8vL1xuICAgICAgICAgICAgbGFiZWxNYXRjaGVzTmFtZSA9IGxhYmVsLm1hdGNoTmFtZShuYW1lKTtcblxuICAgICAgaWYgKGxhYmVsTWF0Y2hlc05hbWUpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gbWF0Y2hlc0xhYmVsTmFtZTtcbiAgfVxuXG4gIG1hdGNoU3RhdGVtZW50KHN0YXRlbWVudE5vZGUsIHByb29mQ29udGV4dCkge1xuICAgIGxldCBzdGF0ZW1lbnROYXRjaGVzO1xuXG4gICAgY29uc3QgYW50ZWNlZGVudHNMZW5ndGggPSB0aGlzLmFudGVjZWRlbnRzLmxlbmd0aDtcblxuICAgIGlmIChhbnRlY2VkZW50c0xlbmd0aCA9PT0gMCkge1xuICAgICAgY29uc3Qgc3Vic3RpdHV0aW9ucyA9IFtdLFxuICAgICAgICAgICAgY29uc2VxdWVudE1hdGNoZXMgPSBtYXRjaENvbnNlcXVlbnQodGhpcy5jb25zZXF1ZW50LCBzdGF0ZW1lbnROb2RlLCBzdWJzdGl0dXRpb25zKTtcblxuICAgICAgc3RhdGVtZW50TmF0Y2hlcyA9IGNvbnNlcXVlbnRNYXRjaGVzOyAvLy9cbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgYXNzZXJ0aW9ucyA9IHByb29mQ29udGV4dC5nZXRBc3NlcnRpb25zKCk7XG5cbiAgICAgIHN0YXRlbWVudE5hdGNoZXMgPSBzb21lU3ViQXJyYXkoYXNzZXJ0aW9ucywgYW50ZWNlZGVudHNMZW5ndGgsIChhc3NlcnRpb25zKSA9PiB7XG4gICAgICAgIGNvbnN0IGFudGVjZWRlbnRzTWF0Y2hDb25zZXF1ZW50ID0gbWF0Y2hBbnRlY2VkZW50c0FuZENvbnNlcXVlbnQodGhpcy5hbnRlY2VkZW50cywgdGhpcy5jb25zZXF1ZW50LCBhc3NlcnRpb25zLCBzdGF0ZW1lbnROb2RlKTtcblxuICAgICAgICBpZiAoYW50ZWNlZGVudHNNYXRjaENvbnNlcXVlbnQpIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN0YXRlbWVudE5hdGNoZXM7XG4gIH1cblxuICB0b0pTT04oKSB7XG4gICAgY29uc3QgeyBraW5kIH0gPSB0aGlzLmNvbnN0cnVjdG9yLFxuICAgICAgICAgIGxhYmVsc0pTT04gPSB0aGlzLmxhYmVscy5tYXAoKGxhYmVsKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBsYWJlbEpTT04gPSBsYWJlbC50b0pTT04oKTtcblxuICAgICAgICAgICAgcmV0dXJuIGxhYmVsSlNPTjtcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBhbnRlY2VkZW50c0pTT04gPSB0aGlzLmFudGVjZWRlbnRzLm1hcCgoYW50ZWNlZGVudCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgYW50ZWNlZGVudEpTT04gPSBhbnRlY2VkZW50LnRvSlNPTigpO1xuXG4gICAgICAgICAgICByZXR1cm4gYW50ZWNlZGVudEpTT047XG4gICAgICAgICAgfSksXG4gICAgICAgICAgY29uc2VxdWVudEpTT04gPSB0aGlzLmNvbnNlcXVlbnQudG9KU09OKCksXG4gICAgICAgICAgbGFiZWxzID0gbGFiZWxzSlNPTiwgIC8vL1xuICAgICAgICAgIGFudGVjZWRlbnRzID0gYW50ZWNlZGVudHNKU09OLCAgLy8vXG4gICAgICAgICAgY29uc2VxdWVudCA9IGNvbnNlcXVlbnRKU09OLCAgLy8vXG4gICAgICAgICAganNvbiA9IHtcbiAgICAgICAgICAgIGtpbmQsXG4gICAgICAgICAgICBsYWJlbHMsXG4gICAgICAgICAgICBhbnRlY2VkZW50cyxcbiAgICAgICAgICAgIGNvbnNlcXVlbnRcbiAgICAgICAgICB9O1xuXG4gICAgcmV0dXJuIGpzb247XG4gIH1cblxuICBzdGF0aWMgZnJvbUpTT04oQ2xhc3MsIGpzb24sIHJlbGVhc2VDb250ZXh0KSB7XG4gICAgbGV0IHsgbGFiZWxzIH0gPSBqc29uO1xuXG4gICAgY29uc3QgbGFiZWxzSlNPTiA9IGxhYmVsczsgIC8vL1xuXG4gICAgbGFiZWxzID0gbGFiZWxzSlNPTi5tYXAoKGxhYmVsSlNPTikgPT4ge1xuICAgICAgY29uc3QganNvbiA9IGxhYmVsSlNPTiwgLy8vXG4gICAgICAgICAgICBsYWJlbCA9IExhYmVsLmZyb21KU09OKGpzb24sIHJlbGVhc2VDb250ZXh0KTtcblxuICAgICAgcmV0dXJuIGxhYmVsO1xuICAgIH0pO1xuXG4gICAgbGV0IHsgYW50ZWNlZGVudHMgfSA9IGpzb247XG5cbiAgICBjb25zdCBhbnRlY2VkZW50c0pTT04gPSBhbnRlY2VkZW50czsgIC8vL1xuXG4gICAgYW50ZWNlZGVudHMgPSBhbnRlY2VkZW50c0pTT04ubWFwKChhbnRlY2VkZW50SlNPTikgPT4ge1xuICAgICAgY29uc3QganNvbiA9IGFudGVjZWRlbnRKU09OLCAvLy9cbiAgICAgICAgICAgIGFudGVjZWRlbnQgPSBBbnRlY2VkZW50LmZyb21KU09OKGpzb24sIHJlbGVhc2VDb250ZXh0KTtcblxuICAgICAgcmV0dXJuIGFudGVjZWRlbnQ7XG4gICAgfSk7XG5cbiAgICBsZXQgeyBjb25zZXF1ZW50IH0gPSBqc29uO1xuXG4gICAgY29uc3QgY29uc2VxdWVudEpTT04gPSBjb25zZXF1ZW50OyAgLy8vXG5cbiAgICBqc29uID0gY29uc2VxdWVudEpTT047ICAvLy9cblxuICAgIGNvbnNlcXVlbnQgPSBDb25zZXF1ZW50LmZyb21KU09OKGpzb24sIHJlbGVhc2VDb250ZXh0KTtcblxuICAgIHJldHVybiBuZXcgQ2xhc3MobGFiZWxzLCBhbnRlY2VkZW50cywgY29uc2VxdWVudCk7ICAvLy9cbiAgfVxuXG4gIHN0YXRpYyBmcm9tTGFiZWxzQW50ZWNlZGVudHNBbmRDb25zZXF1ZW50KENsYXNzLCBsYWJlbHMsIGFudGVjZWRlbnRzLCBjb25zZXF1ZW50KSB7IHJldHVybiBuZXcgQ2xhc3MobGFiZWxzLCBhbnRlY2VkZW50cywgY29uc2VxdWVudCk7IH1cbn1cblxuZnVuY3Rpb24gbWF0Y2hBbnRlY2VkZW50KGFudGVjZWRlbnQsIGFzc2VydGlvbnMsIHN1YnN0aXR1dGlvbnMpIHtcbiAgY29uc3QgYXNzZXJ0aW9uID0gcHJ1bmUoYXNzZXJ0aW9ucywgKGFzc2VydGlvbikgPT4ge1xuICAgIGNvbnN0IHN1YnByb29mTm9kZSA9IGFzc2VydGlvbi5nZXRTdWJwcm9vZk5vZGUoKSxcbiAgICAgICAgICBzdGF0ZW1lbnROb2RlID0gYXNzZXJ0aW9uLmdldFN0YXRlbWVudE5vZGUoKTtcblxuICAgIGlmIChzdWJwcm9vZk5vZGUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHN1YlByb29mTWF0Y2hlcyA9IGFudGVjZWRlbnQubWF0Y2hTdWJwcm9vZk5vZGUoc3VicHJvb2ZOb2RlLCBzdWJzdGl0dXRpb25zKTtcblxuICAgICAgaWYgKCFzdWJQcm9vZk1hdGNoZXMpIHsgIC8vL1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoc3RhdGVtZW50Tm9kZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3Qgc3RhdGVtZW50TWF0Y2hlcyA9IGFudGVjZWRlbnQubWF0Y2hTdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUsIHN1YnN0aXR1dGlvbnMpO1xuXG4gICAgICBpZiAoIXN0YXRlbWVudE1hdGNoZXMpIHsgIC8vL1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgfSkgfHwgbnVsbDtcblxuICBjb25zdCBhbnRlY2VkZW50TWF0Y2hlcyA9IChhc3NlcnRpb24gIT09IG51bGwpO1xuXG4gIHJldHVybiBhbnRlY2VkZW50TWF0Y2hlcztcbn1cblxuZnVuY3Rpb24gbWF0Y2hBbnRlY2VkZW50cyhhbnRlY2VkZW50LCBhc3NlcnRpb25zLCBzdWJzdGl0dXRpb25zKSB7XG4gIGNvbnN0IGFudGVjZWRlbnRzTWF0Y2hlcyA9IGFudGVjZWRlbnQuZXZlcnkoKGFudGVjZWRlbnQpID0+IHtcbiAgICBjb25zdCBhbnRlY2VkZW50TWF0Y2hlcyA9IG1hdGNoQW50ZWNlZGVudChhbnRlY2VkZW50LCBhc3NlcnRpb25zLCBzdWJzdGl0dXRpb25zKTtcblxuICAgIGlmIChhbnRlY2VkZW50TWF0Y2hlcykge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gYW50ZWNlZGVudHNNYXRjaGVzO1xufVxuXG5mdW5jdGlvbiBtYXRjaENvbnNlcXVlbnQoY29uc2VxdWVudCwgc3RhdGVtZW50Tm9kZSwgc3Vic3RpdHV0aW9ucykge1xuICBjb25zdCBub25UZXJtaW5hbE5vZGVNYXRjaGVzID0gY29uc2VxdWVudC5tYXRjaFN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSwgc3Vic3RpdHV0aW9ucyksXG4gICAgICAgIGNvbnNlcXVlbnRNYXRjaGVzID0gbm9uVGVybWluYWxOb2RlTWF0Y2hlczsgLy8vXG5cbiAgcmV0dXJuIGNvbnNlcXVlbnRNYXRjaGVzO1xufVxuXG5mdW5jdGlvbiBtYXRjaEFudGVjZWRlbnRzQW5kQ29uc2VxdWVudChhbnRlY2VkZW50cywgY29uc2VxdWVudCwgYXNzZXJ0aW9ucywgc3RhdGVtZW50Tm9kZSkge1xuICBsZXQgYW50ZWNlZGVudHNNYXRjaENvbnNlcXVlbnQgPSBmYWxzZTtcblxuICBjb25zdCBzdWJzdGl0dXRpb25zID0gW10sXG4gICAgICAgIGFudGVjZWRlbnRzTWF0Y2hlcyA9IG1hdGNoQW50ZWNlZGVudHMoYW50ZWNlZGVudHMsIGFzc2VydGlvbnMsIHN1YnN0aXR1dGlvbnMpO1xuXG4gIGlmIChhbnRlY2VkZW50c01hdGNoZXMpIHtcbiAgICBjb25zdCBjb25zZXF1ZW50TWF0Y2hlcyA9IG1hdGNoQ29uc2VxdWVudChjb25zZXF1ZW50LCBzdGF0ZW1lbnROb2RlLCBzdWJzdGl0dXRpb25zKTtcblxuICAgIGFudGVjZWRlbnRzTWF0Y2hDb25zZXF1ZW50ID0gY29uc2VxdWVudE1hdGNoZXM7ICAvLy9cbiAgfVxuXG4gIHJldHVybiBhbnRlY2VkZW50c01hdGNoQ29uc2VxdWVudDtcbn1cbiJdLCJuYW1lcyI6WyJBeGlvbUxlbW1hVGhlb3JlbSIsImxhYmVscyIsImFudGVjZWRlbnRzIiwiY29uc2VxdWVudCIsImdldExhYmVscyIsImdldEFudGVjZWRlbnRzIiwiZ2V0Q29uc2VxdWVudCIsIm1hdGNoTGFiZWxOYW1lIiwibGFiZWxOYW1lIiwibWF0Y2hlc0xhYmVsTmFtZSIsInNvbWUiLCJsYWJlbCIsIm5hbWUiLCJsYWJlbE1hdGNoZXNOYW1lIiwibWF0Y2hOYW1lIiwibWF0Y2hTdGF0ZW1lbnQiLCJzdGF0ZW1lbnROb2RlIiwicHJvb2ZDb250ZXh0Iiwic3RhdGVtZW50TmF0Y2hlcyIsImFudGVjZWRlbnRzTGVuZ3RoIiwibGVuZ3RoIiwic3Vic3RpdHV0aW9ucyIsImNvbnNlcXVlbnRNYXRjaGVzIiwibWF0Y2hDb25zZXF1ZW50IiwiYXNzZXJ0aW9ucyIsImdldEFzc2VydGlvbnMiLCJzb21lU3ViQXJyYXkiLCJhbnRlY2VkZW50c01hdGNoQ29uc2VxdWVudCIsIm1hdGNoQW50ZWNlZGVudHNBbmRDb25zZXF1ZW50IiwidG9KU09OIiwia2luZCIsImNvbnN0cnVjdG9yIiwibGFiZWxzSlNPTiIsIm1hcCIsImxhYmVsSlNPTiIsImFudGVjZWRlbnRzSlNPTiIsImFudGVjZWRlbnQiLCJhbnRlY2VkZW50SlNPTiIsImNvbnNlcXVlbnRKU09OIiwianNvbiIsImZyb21KU09OIiwiQ2xhc3MiLCJyZWxlYXNlQ29udGV4dCIsIkxhYmVsIiwiQW50ZWNlZGVudCIsIkNvbnNlcXVlbnQiLCJmcm9tTGFiZWxzQW50ZWNlZGVudHNBbmRDb25zZXF1ZW50IiwibWF0Y2hBbnRlY2VkZW50IiwiYXNzZXJ0aW9uIiwicHJ1bmUiLCJzdWJwcm9vZk5vZGUiLCJnZXRTdWJwcm9vZk5vZGUiLCJnZXRTdGF0ZW1lbnROb2RlIiwic3ViUHJvb2ZNYXRjaGVzIiwibWF0Y2hTdWJwcm9vZk5vZGUiLCJzdGF0ZW1lbnRNYXRjaGVzIiwibWF0Y2hTdGF0ZW1lbnROb2RlIiwiYW50ZWNlZGVudE1hdGNoZXMiLCJtYXRjaEFudGVjZWRlbnRzIiwiYW50ZWNlZGVudHNNYXRjaGVzIiwiZXZlcnkiLCJub25UZXJtaW5hbE5vZGVNYXRjaGVzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQVNxQkE7OzswREFQSDsrREFDSzsrREFDQTtxQkFFRDs7Ozs7Ozs7Ozs7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