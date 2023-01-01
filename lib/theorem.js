"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return Theorem;
    }
});
var _label = /*#__PURE__*/ _interopRequireDefault(require("./label"));
var _antecedent = /*#__PURE__*/ _interopRequireDefault(require("./antecedent"));
var _consequent = /*#__PURE__*/ _interopRequireDefault(require("./consequent"));
var _array = require("./utilities/array");
var _kinds = require("./kinds");
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
var Theorem = /*#__PURE__*/ function() {
    function Theorem(labels, antecedents, consequent) {
        _classCallCheck(this, Theorem);
        this.labels = labels;
        this.antecedents = antecedents;
        this.consequent = consequent;
    }
    _createClass(Theorem, [
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
                var labelsJSON = this.labels.map(function(label) {
                    var labelJSON = label.toJSON();
                    return labelJSON;
                }), antecedentsJSON = this.antecedents.map(function(antecedent) {
                    var antecedentJSON = antecedent.toJSON();
                    return antecedentJSON;
                }), consequentJSON = this.consequent.toJSON(), kind = _kinds.AXIOM_KIND, labels = labelsJSON, antecedents = antecedentsJSON, consequent = consequentJSON, json = {
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
            value: function fromJSON(json, releaseContext) {
                var theorem;
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
                theorem = new Theorem(labels, antecedents, consequent);
                return theorem;
            }
        },
        {
            key: "fromLabelsAntecedentsAndConsequent",
            value: function fromLabelsAntecedentsAndConsequent(labels, antecedents, consequent) {
                var theorem = new Theorem(labels, antecedents, consequent);
                return theorem;
            }
        }
    ]);
    return Theorem;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy90aGVvcmVtLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgTGFiZWwgZnJvbSBcIi4vbGFiZWxcIjtcbmltcG9ydCBBbnRlY2VkZW50IGZyb20gXCIuL2FudGVjZWRlbnRcIjtcbmltcG9ydCBDb25zZXF1ZW50IGZyb20gXCIuL2NvbnNlcXVlbnRcIjtcblxuaW1wb3J0IHsgcHJ1bmUgfSBmcm9tIFwiLi91dGlsaXRpZXMvYXJyYXlcIjtcbmltcG9ydCB7IEFYSU9NX0tJTkQgfSBmcm9tIFwiLi9raW5kc1wiO1xuaW1wb3J0IHsgc29tZVN1YkFycmF5IH0gZnJvbSBcIi4vdXRpbGl0aWVzL2FycmF5XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRoZW9yZW0ge1xuICBjb25zdHJ1Y3RvcihsYWJlbHMsIGFudGVjZWRlbnRzLCBjb25zZXF1ZW50KSB7XG4gICAgdGhpcy5sYWJlbHMgPSBsYWJlbHM7XG4gICAgdGhpcy5hbnRlY2VkZW50cyA9IGFudGVjZWRlbnRzO1xuICAgIHRoaXMuY29uc2VxdWVudCA9IGNvbnNlcXVlbnQ7XG4gIH1cblxuICBnZXRMYWJlbHMoKSB7XG4gICAgcmV0dXJuIHRoaXMubGFiZWxzO1xuICB9XG5cbiAgZ2V0QW50ZWNlZGVudHMoKSB7XG4gICAgcmV0dXJuIHRoaXMuYW50ZWNlZGVudHM7XG4gIH1cblxuICBnZXRDb25zZXF1ZW50KCkge1xuICAgIHJldHVybiB0aGlzLmNvbnNlcXVlbnQ7XG4gIH1cblxuICBtYXRjaExhYmVsTmFtZShsYWJlbE5hbWUpIHtcbiAgICBjb25zdCBtYXRjaGVzTGFiZWxOYW1lID0gdGhpcy5sYWJlbHMuc29tZSgobGFiZWwpID0+IHtcbiAgICAgIGNvbnN0IG5hbWUgPSBsYWJlbE5hbWUsIC8vL1xuICAgICAgICAgICAgbGFiZWxNYXRjaGVzTmFtZSA9IGxhYmVsLm1hdGNoTmFtZShuYW1lKTtcblxuICAgICAgaWYgKGxhYmVsTWF0Y2hlc05hbWUpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gbWF0Y2hlc0xhYmVsTmFtZTtcbiAgfVxuXG4gIG1hdGNoU3RhdGVtZW50KHN0YXRlbWVudE5vZGUsIHByb29mQ29udGV4dCkge1xuICAgIGxldCBzdGF0ZW1lbnROYXRjaGVzO1xuXG4gICAgY29uc3QgYW50ZWNlZGVudHNMZW5ndGggPSB0aGlzLmFudGVjZWRlbnRzLmxlbmd0aDtcblxuICAgIGlmIChhbnRlY2VkZW50c0xlbmd0aCA9PT0gMCkge1xuICAgICAgY29uc3Qgc3Vic3RpdHV0aW9ucyA9IFtdLFxuICAgICAgICAgICAgY29uc2VxdWVudE1hdGNoZXMgPSBtYXRjaENvbnNlcXVlbnQodGhpcy5jb25zZXF1ZW50LCBzdGF0ZW1lbnROb2RlLCBzdWJzdGl0dXRpb25zKTtcblxuICAgICAgc3RhdGVtZW50TmF0Y2hlcyA9IGNvbnNlcXVlbnRNYXRjaGVzOyAvLy9cbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgYXNzZXJ0aW9ucyA9IHByb29mQ29udGV4dC5nZXRBc3NlcnRpb25zKCk7XG5cbiAgICAgIHN0YXRlbWVudE5hdGNoZXMgPSBzb21lU3ViQXJyYXkoYXNzZXJ0aW9ucywgYW50ZWNlZGVudHNMZW5ndGgsIChhc3NlcnRpb25zKSA9PiB7XG4gICAgICAgIGNvbnN0IGFudGVjZWRlbnRzTWF0Y2hDb25zZXF1ZW50ID0gbWF0Y2hBbnRlY2VkZW50c0FuZENvbnNlcXVlbnQodGhpcy5hbnRlY2VkZW50cywgdGhpcy5jb25zZXF1ZW50LCBhc3NlcnRpb25zLCBzdGF0ZW1lbnROb2RlKTtcblxuICAgICAgICBpZiAoYW50ZWNlZGVudHNNYXRjaENvbnNlcXVlbnQpIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN0YXRlbWVudE5hdGNoZXM7XG4gIH1cblxuICB0b0pTT04oKSB7XG4gICAgY29uc3QgbGFiZWxzSlNPTiA9IHRoaXMubGFiZWxzLm1hcCgobGFiZWwpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGxhYmVsSlNPTiA9IGxhYmVsLnRvSlNPTigpO1xuXG4gICAgICAgICAgICByZXR1cm4gbGFiZWxKU09OO1xuICAgICAgICAgIH0pLFxuICAgICAgICAgIGFudGVjZWRlbnRzSlNPTiA9IHRoaXMuYW50ZWNlZGVudHMubWFwKChhbnRlY2VkZW50KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBhbnRlY2VkZW50SlNPTiA9IGFudGVjZWRlbnQudG9KU09OKCk7XG5cbiAgICAgICAgICAgIHJldHVybiBhbnRlY2VkZW50SlNPTjtcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBjb25zZXF1ZW50SlNPTiA9IHRoaXMuY29uc2VxdWVudC50b0pTT04oKSxcbiAgICAgICAgICBraW5kID0gQVhJT01fS0lORCxcbiAgICAgICAgICBsYWJlbHMgPSBsYWJlbHNKU09OLCAgLy8vXG4gICAgICAgICAgYW50ZWNlZGVudHMgPSBhbnRlY2VkZW50c0pTT04sICAvLy9cbiAgICAgICAgICBjb25zZXF1ZW50ID0gY29uc2VxdWVudEpTT04sICAvLy9cbiAgICAgICAgICBqc29uID0ge1xuICAgICAgICAgICAga2luZCxcbiAgICAgICAgICAgIGxhYmVscyxcbiAgICAgICAgICAgIGFudGVjZWRlbnRzLFxuICAgICAgICAgICAgY29uc2VxdWVudFxuICAgICAgICAgIH07XG5cbiAgICByZXR1cm4ganNvbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tSlNPTihqc29uLCByZWxlYXNlQ29udGV4dCkge1xuICAgIGxldCB0aGVvcmVtO1xuXG4gICAgbGV0IHsgbGFiZWxzIH0gPSBqc29uO1xuXG4gICAgY29uc3QgbGFiZWxzSlNPTiA9IGxhYmVsczsgIC8vL1xuXG4gICAgbGFiZWxzID0gbGFiZWxzSlNPTi5tYXAoKGxhYmVsSlNPTikgPT4ge1xuICAgICAgY29uc3QganNvbiA9IGxhYmVsSlNPTiwgLy8vXG4gICAgICAgICAgICBsYWJlbCA9IExhYmVsLmZyb21KU09OKGpzb24sIHJlbGVhc2VDb250ZXh0KTtcblxuICAgICAgcmV0dXJuIGxhYmVsO1xuICAgIH0pO1xuXG4gICAgbGV0IHsgYW50ZWNlZGVudHMgfSA9IGpzb247XG5cbiAgICBjb25zdCBhbnRlY2VkZW50c0pTT04gPSBhbnRlY2VkZW50czsgIC8vL1xuXG4gICAgYW50ZWNlZGVudHMgPSBhbnRlY2VkZW50c0pTT04ubWFwKChhbnRlY2VkZW50SlNPTikgPT4ge1xuICAgICAgY29uc3QganNvbiA9IGFudGVjZWRlbnRKU09OLCAvLy9cbiAgICAgICAgICAgIGFudGVjZWRlbnQgPSBBbnRlY2VkZW50LmZyb21KU09OKGpzb24sIHJlbGVhc2VDb250ZXh0KTtcblxuICAgICAgcmV0dXJuIGFudGVjZWRlbnQ7XG4gICAgfSk7XG5cbiAgICBsZXQgeyBjb25zZXF1ZW50IH0gPSBqc29uO1xuXG4gICAgY29uc3QgY29uc2VxdWVudEpTT04gPSBjb25zZXF1ZW50OyAgLy8vXG5cbiAgICBqc29uID0gY29uc2VxdWVudEpTT047ICAvLy9cblxuICAgIGNvbnNlcXVlbnQgPSBDb25zZXF1ZW50LmZyb21KU09OKGpzb24sIHJlbGVhc2VDb250ZXh0KTtcblxuICAgIHRoZW9yZW0gPSBuZXcgVGhlb3JlbShsYWJlbHMsIGFudGVjZWRlbnRzLCBjb25zZXF1ZW50KTtcblxuICAgIHJldHVybiB0aGVvcmVtO1xuICB9XG5cbiAgc3RhdGljIGZyb21MYWJlbHNBbnRlY2VkZW50c0FuZENvbnNlcXVlbnQobGFiZWxzLCBhbnRlY2VkZW50cywgY29uc2VxdWVudCkge1xuICAgIGNvbnN0IHRoZW9yZW0gPSBuZXcgVGhlb3JlbShsYWJlbHMsIGFudGVjZWRlbnRzLCBjb25zZXF1ZW50KTtcblxuICAgIHJldHVybiB0aGVvcmVtO1xuICB9XG59XG5cbmZ1bmN0aW9uIG1hdGNoQW50ZWNlZGVudChhbnRlY2VkZW50LCBhc3NlcnRpb25zLCBzdWJzdGl0dXRpb25zKSB7XG4gIGNvbnN0IGFzc2VydGlvbiA9IHBydW5lKGFzc2VydGlvbnMsIChhc3NlcnRpb24pID0+IHtcbiAgICBjb25zdCBzdWJwcm9vZk5vZGUgPSBhc3NlcnRpb24uZ2V0U3VicHJvb2ZOb2RlKCksXG4gICAgICAgICAgc3RhdGVtZW50Tm9kZSA9IGFzc2VydGlvbi5nZXRTdGF0ZW1lbnROb2RlKCk7XG5cbiAgICBpZiAoc3VicHJvb2ZOb2RlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBzdWJQcm9vZk1hdGNoZXMgPSBhbnRlY2VkZW50Lm1hdGNoU3VicHJvb2ZOb2RlKHN1YnByb29mTm9kZSwgc3Vic3RpdHV0aW9ucyk7XG5cbiAgICAgIGlmICghc3ViUHJvb2ZNYXRjaGVzKSB7ICAvLy9cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHN0YXRlbWVudE5vZGUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHN0YXRlbWVudE1hdGNoZXMgPSBhbnRlY2VkZW50Lm1hdGNoU3RhdGVtZW50Tm9kZShzdGF0ZW1lbnROb2RlLCBzdWJzdGl0dXRpb25zKTtcblxuICAgICAgaWYgKCFzdGF0ZW1lbnRNYXRjaGVzKSB7ICAvLy9cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gIH0pIHx8IG51bGw7XG5cbiAgY29uc3QgYW50ZWNlZGVudE1hdGNoZXMgPSAoYXNzZXJ0aW9uICE9PSBudWxsKTtcblxuICByZXR1cm4gYW50ZWNlZGVudE1hdGNoZXM7XG59XG5cbmZ1bmN0aW9uIG1hdGNoQW50ZWNlZGVudHMoYW50ZWNlZGVudCwgYXNzZXJ0aW9ucywgc3Vic3RpdHV0aW9ucykge1xuICBjb25zdCBhbnRlY2VkZW50c01hdGNoZXMgPSBhbnRlY2VkZW50LmV2ZXJ5KChhbnRlY2VkZW50KSA9PiB7XG4gICAgY29uc3QgYW50ZWNlZGVudE1hdGNoZXMgPSBtYXRjaEFudGVjZWRlbnQoYW50ZWNlZGVudCwgYXNzZXJ0aW9ucywgc3Vic3RpdHV0aW9ucyk7XG5cbiAgICBpZiAoYW50ZWNlZGVudE1hdGNoZXMpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIGFudGVjZWRlbnRzTWF0Y2hlcztcbn1cblxuZnVuY3Rpb24gbWF0Y2hDb25zZXF1ZW50KGNvbnNlcXVlbnQsIHN0YXRlbWVudE5vZGUsIHN1YnN0aXR1dGlvbnMpIHtcbiAgY29uc3Qgbm9uVGVybWluYWxOb2RlTWF0Y2hlcyA9IGNvbnNlcXVlbnQubWF0Y2hTdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUsIHN1YnN0aXR1dGlvbnMpLFxuICAgICAgICBjb25zZXF1ZW50TWF0Y2hlcyA9IG5vblRlcm1pbmFsTm9kZU1hdGNoZXM7IC8vL1xuXG4gIHJldHVybiBjb25zZXF1ZW50TWF0Y2hlcztcbn1cblxuZnVuY3Rpb24gbWF0Y2hBbnRlY2VkZW50c0FuZENvbnNlcXVlbnQoYW50ZWNlZGVudHMsIGNvbnNlcXVlbnQsIGFzc2VydGlvbnMsIHN0YXRlbWVudE5vZGUpIHtcbiAgbGV0IGFudGVjZWRlbnRzTWF0Y2hDb25zZXF1ZW50ID0gZmFsc2U7XG5cbiAgY29uc3Qgc3Vic3RpdHV0aW9ucyA9IFtdLFxuICAgICAgICBhbnRlY2VkZW50c01hdGNoZXMgPSBtYXRjaEFudGVjZWRlbnRzKGFudGVjZWRlbnRzLCBhc3NlcnRpb25zLCBzdWJzdGl0dXRpb25zKTtcblxuICBpZiAoYW50ZWNlZGVudHNNYXRjaGVzKSB7XG4gICAgY29uc3QgY29uc2VxdWVudE1hdGNoZXMgPSBtYXRjaENvbnNlcXVlbnQoY29uc2VxdWVudCwgc3RhdGVtZW50Tm9kZSwgc3Vic3RpdHV0aW9ucyk7XG5cbiAgICBhbnRlY2VkZW50c01hdGNoQ29uc2VxdWVudCA9IGNvbnNlcXVlbnRNYXRjaGVzOyAgLy8vXG4gIH1cblxuICByZXR1cm4gYW50ZWNlZGVudHNNYXRjaENvbnNlcXVlbnQ7XG59XG4iXSwibmFtZXMiOlsiVGhlb3JlbSIsImxhYmVscyIsImFudGVjZWRlbnRzIiwiY29uc2VxdWVudCIsImdldExhYmVscyIsImdldEFudGVjZWRlbnRzIiwiZ2V0Q29uc2VxdWVudCIsIm1hdGNoTGFiZWxOYW1lIiwibGFiZWxOYW1lIiwibWF0Y2hlc0xhYmVsTmFtZSIsInNvbWUiLCJsYWJlbCIsIm5hbWUiLCJsYWJlbE1hdGNoZXNOYW1lIiwibWF0Y2hOYW1lIiwibWF0Y2hTdGF0ZW1lbnQiLCJzdGF0ZW1lbnROb2RlIiwicHJvb2ZDb250ZXh0Iiwic3RhdGVtZW50TmF0Y2hlcyIsImFudGVjZWRlbnRzTGVuZ3RoIiwibGVuZ3RoIiwic3Vic3RpdHV0aW9ucyIsImNvbnNlcXVlbnRNYXRjaGVzIiwibWF0Y2hDb25zZXF1ZW50IiwiYXNzZXJ0aW9ucyIsImdldEFzc2VydGlvbnMiLCJzb21lU3ViQXJyYXkiLCJhbnRlY2VkZW50c01hdGNoQ29uc2VxdWVudCIsIm1hdGNoQW50ZWNlZGVudHNBbmRDb25zZXF1ZW50IiwidG9KU09OIiwibGFiZWxzSlNPTiIsIm1hcCIsImxhYmVsSlNPTiIsImFudGVjZWRlbnRzSlNPTiIsImFudGVjZWRlbnQiLCJhbnRlY2VkZW50SlNPTiIsImNvbnNlcXVlbnRKU09OIiwia2luZCIsIkFYSU9NX0tJTkQiLCJqc29uIiwiZnJvbUpTT04iLCJyZWxlYXNlQ29udGV4dCIsInRoZW9yZW0iLCJMYWJlbCIsIkFudGVjZWRlbnQiLCJDb25zZXF1ZW50IiwiZnJvbUxhYmVsc0FudGVjZWRlbnRzQW5kQ29uc2VxdWVudCIsIm1hdGNoQW50ZWNlZGVudCIsImFzc2VydGlvbiIsInBydW5lIiwic3VicHJvb2ZOb2RlIiwiZ2V0U3VicHJvb2ZOb2RlIiwiZ2V0U3RhdGVtZW50Tm9kZSIsInN1YlByb29mTWF0Y2hlcyIsIm1hdGNoU3VicHJvb2ZOb2RlIiwic3RhdGVtZW50TWF0Y2hlcyIsIm1hdGNoU3RhdGVtZW50Tm9kZSIsImFudGVjZWRlbnRNYXRjaGVzIiwibWF0Y2hBbnRlY2VkZW50cyIsImFudGVjZWRlbnRzTWF0Y2hlcyIsImV2ZXJ5Iiwibm9uVGVybWluYWxOb2RlTWF0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