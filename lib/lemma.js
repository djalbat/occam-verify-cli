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
var Lemma = /*#__PURE__*/ function() {
    function Lemma(labels, antecedents, consequent) {
        _classCallCheck(this, Lemma);
        this.labels = labels;
        this.antecedents = antecedents;
        this.consequent = consequent;
    }
    _createClass(Lemma, [
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
                var lemma;
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
                lemma = new Lemma(labels, antecedents, consequent);
                return lemma;
            }
        },
        {
            key: "fromLabelsAntecedentsAndConsequent",
            value: function fromLabelsAntecedentsAndConsequent(labels, antecedents, consequent) {
                var lemma = new Lemma(labels, antecedents, consequent);
                return lemma;
            }
        }
    ]);
    return Lemma;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9sZW1tYS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IExhYmVsIGZyb20gXCIuL2xhYmVsXCI7XG5pbXBvcnQgQW50ZWNlZGVudCBmcm9tIFwiLi9hbnRlY2VkZW50XCI7XG5pbXBvcnQgQ29uc2VxdWVudCBmcm9tIFwiLi9jb25zZXF1ZW50XCI7XG5cbmltcG9ydCB7IHBydW5lIH0gZnJvbSBcIi4vdXRpbGl0aWVzL2FycmF5XCI7XG5pbXBvcnQgeyBBWElPTV9LSU5EIH0gZnJvbSBcIi4va2luZHNcIjtcbmltcG9ydCB7IHNvbWVTdWJBcnJheSB9IGZyb20gXCIuL3V0aWxpdGllcy9hcnJheVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMZW1tYSB7XG4gIGNvbnN0cnVjdG9yKGxhYmVscywgYW50ZWNlZGVudHMsIGNvbnNlcXVlbnQpIHtcbiAgICB0aGlzLmxhYmVscyA9IGxhYmVscztcbiAgICB0aGlzLmFudGVjZWRlbnRzID0gYW50ZWNlZGVudHM7XG4gICAgdGhpcy5jb25zZXF1ZW50ID0gY29uc2VxdWVudDtcbiAgfVxuXG4gIGdldExhYmVscygpIHtcbiAgICByZXR1cm4gdGhpcy5sYWJlbHM7XG4gIH1cblxuICBnZXRBbnRlY2VkZW50cygpIHtcbiAgICByZXR1cm4gdGhpcy5hbnRlY2VkZW50cztcbiAgfVxuXG4gIGdldENvbnNlcXVlbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuY29uc2VxdWVudDtcbiAgfVxuXG4gIG1hdGNoTGFiZWxOYW1lKGxhYmVsTmFtZSkge1xuICAgIGNvbnN0IG1hdGNoZXNMYWJlbE5hbWUgPSB0aGlzLmxhYmVscy5zb21lKChsYWJlbCkgPT4ge1xuICAgICAgY29uc3QgbmFtZSA9IGxhYmVsTmFtZSwgLy8vXG4gICAgICAgICAgICBsYWJlbE1hdGNoZXNOYW1lID0gbGFiZWwubWF0Y2hOYW1lKG5hbWUpO1xuXG4gICAgICBpZiAobGFiZWxNYXRjaGVzTmFtZSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiBtYXRjaGVzTGFiZWxOYW1lO1xuICB9XG5cbiAgbWF0Y2hTdGF0ZW1lbnQoc3RhdGVtZW50Tm9kZSwgcHJvb2ZDb250ZXh0KSB7XG4gICAgbGV0IHN0YXRlbWVudE5hdGNoZXM7XG5cbiAgICBjb25zdCBhbnRlY2VkZW50c0xlbmd0aCA9IHRoaXMuYW50ZWNlZGVudHMubGVuZ3RoO1xuXG4gICAgaWYgKGFudGVjZWRlbnRzTGVuZ3RoID09PSAwKSB7XG4gICAgICBjb25zdCBzdWJzdGl0dXRpb25zID0gW10sXG4gICAgICAgICAgICBjb25zZXF1ZW50TWF0Y2hlcyA9IG1hdGNoQ29uc2VxdWVudCh0aGlzLmNvbnNlcXVlbnQsIHN0YXRlbWVudE5vZGUsIHN1YnN0aXR1dGlvbnMpO1xuXG4gICAgICBzdGF0ZW1lbnROYXRjaGVzID0gY29uc2VxdWVudE1hdGNoZXM7IC8vL1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBhc3NlcnRpb25zID0gcHJvb2ZDb250ZXh0LmdldEFzc2VydGlvbnMoKTtcblxuICAgICAgc3RhdGVtZW50TmF0Y2hlcyA9IHNvbWVTdWJBcnJheShhc3NlcnRpb25zLCBhbnRlY2VkZW50c0xlbmd0aCwgKGFzc2VydGlvbnMpID0+IHtcbiAgICAgICAgY29uc3QgYW50ZWNlZGVudHNNYXRjaENvbnNlcXVlbnQgPSBtYXRjaEFudGVjZWRlbnRzQW5kQ29uc2VxdWVudCh0aGlzLmFudGVjZWRlbnRzLCB0aGlzLmNvbnNlcXVlbnQsIGFzc2VydGlvbnMsIHN0YXRlbWVudE5vZGUpO1xuXG4gICAgICAgIGlmIChhbnRlY2VkZW50c01hdGNoQ29uc2VxdWVudCkge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3RhdGVtZW50TmF0Y2hlcztcbiAgfVxuXG4gIHRvSlNPTigpIHtcbiAgICBjb25zdCBsYWJlbHNKU09OID0gdGhpcy5sYWJlbHMubWFwKChsYWJlbCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgbGFiZWxKU09OID0gbGFiZWwudG9KU09OKCk7XG5cbiAgICAgICAgICAgIHJldHVybiBsYWJlbEpTT047XG4gICAgICAgICAgfSksXG4gICAgICAgICAgYW50ZWNlZGVudHNKU09OID0gdGhpcy5hbnRlY2VkZW50cy5tYXAoKGFudGVjZWRlbnQpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGFudGVjZWRlbnRKU09OID0gYW50ZWNlZGVudC50b0pTT04oKTtcblxuICAgICAgICAgICAgcmV0dXJuIGFudGVjZWRlbnRKU09OO1xuICAgICAgICAgIH0pLFxuICAgICAgICAgIGNvbnNlcXVlbnRKU09OID0gdGhpcy5jb25zZXF1ZW50LnRvSlNPTigpLFxuICAgICAgICAgIGtpbmQgPSBBWElPTV9LSU5ELFxuICAgICAgICAgIGxhYmVscyA9IGxhYmVsc0pTT04sICAvLy9cbiAgICAgICAgICBhbnRlY2VkZW50cyA9IGFudGVjZWRlbnRzSlNPTiwgIC8vL1xuICAgICAgICAgIGNvbnNlcXVlbnQgPSBjb25zZXF1ZW50SlNPTiwgIC8vL1xuICAgICAgICAgIGpzb24gPSB7XG4gICAgICAgICAgICBraW5kLFxuICAgICAgICAgICAgbGFiZWxzLFxuICAgICAgICAgICAgYW50ZWNlZGVudHMsXG4gICAgICAgICAgICBjb25zZXF1ZW50XG4gICAgICAgICAgfTtcblxuICAgIHJldHVybiBqc29uO1xuICB9XG5cbiAgc3RhdGljIGZyb21KU09OKGpzb24sIHJlbGVhc2VDb250ZXh0KSB7XG4gICAgbGV0IGxlbW1hO1xuXG4gICAgbGV0IHsgbGFiZWxzIH0gPSBqc29uO1xuXG4gICAgY29uc3QgbGFiZWxzSlNPTiA9IGxhYmVsczsgIC8vL1xuXG4gICAgbGFiZWxzID0gbGFiZWxzSlNPTi5tYXAoKGxhYmVsSlNPTikgPT4ge1xuICAgICAgY29uc3QganNvbiA9IGxhYmVsSlNPTiwgLy8vXG4gICAgICAgICAgICBsYWJlbCA9IExhYmVsLmZyb21KU09OKGpzb24sIHJlbGVhc2VDb250ZXh0KTtcblxuICAgICAgcmV0dXJuIGxhYmVsO1xuICAgIH0pO1xuXG4gICAgbGV0IHsgYW50ZWNlZGVudHMgfSA9IGpzb247XG5cbiAgICBjb25zdCBhbnRlY2VkZW50c0pTT04gPSBhbnRlY2VkZW50czsgIC8vL1xuXG4gICAgYW50ZWNlZGVudHMgPSBhbnRlY2VkZW50c0pTT04ubWFwKChhbnRlY2VkZW50SlNPTikgPT4ge1xuICAgICAgY29uc3QganNvbiA9IGFudGVjZWRlbnRKU09OLCAvLy9cbiAgICAgICAgICAgIGFudGVjZWRlbnQgPSBBbnRlY2VkZW50LmZyb21KU09OKGpzb24sIHJlbGVhc2VDb250ZXh0KTtcblxuICAgICAgcmV0dXJuIGFudGVjZWRlbnQ7XG4gICAgfSk7XG5cbiAgICBsZXQgeyBjb25zZXF1ZW50IH0gPSBqc29uO1xuXG4gICAgY29uc3QgY29uc2VxdWVudEpTT04gPSBjb25zZXF1ZW50OyAgLy8vXG5cbiAgICBqc29uID0gY29uc2VxdWVudEpTT047ICAvLy9cblxuICAgIGNvbnNlcXVlbnQgPSBDb25zZXF1ZW50LmZyb21KU09OKGpzb24sIHJlbGVhc2VDb250ZXh0KTtcblxuICAgIGxlbW1hID0gbmV3IExlbW1hKGxhYmVscywgYW50ZWNlZGVudHMsIGNvbnNlcXVlbnQpO1xuXG4gICAgcmV0dXJuIGxlbW1hO1xuICB9XG5cbiAgc3RhdGljIGZyb21MYWJlbHNBbnRlY2VkZW50c0FuZENvbnNlcXVlbnQobGFiZWxzLCBhbnRlY2VkZW50cywgY29uc2VxdWVudCkge1xuICAgIGNvbnN0IGxlbW1hID0gbmV3IExlbW1hKGxhYmVscywgYW50ZWNlZGVudHMsIGNvbnNlcXVlbnQpO1xuXG4gICAgcmV0dXJuIGxlbW1hO1xuICB9XG59XG5cbmZ1bmN0aW9uIG1hdGNoQW50ZWNlZGVudChhbnRlY2VkZW50LCBhc3NlcnRpb25zLCBzdWJzdGl0dXRpb25zKSB7XG4gIGNvbnN0IGFzc2VydGlvbiA9IHBydW5lKGFzc2VydGlvbnMsIChhc3NlcnRpb24pID0+IHtcbiAgICBjb25zdCBzdWJwcm9vZk5vZGUgPSBhc3NlcnRpb24uZ2V0U3VicHJvb2ZOb2RlKCksXG4gICAgICAgICAgc3RhdGVtZW50Tm9kZSA9IGFzc2VydGlvbi5nZXRTdGF0ZW1lbnROb2RlKCk7XG5cbiAgICBpZiAoc3VicHJvb2ZOb2RlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBzdWJQcm9vZk1hdGNoZXMgPSBhbnRlY2VkZW50Lm1hdGNoU3VicHJvb2ZOb2RlKHN1YnByb29mTm9kZSwgc3Vic3RpdHV0aW9ucyk7XG5cbiAgICAgIGlmICghc3ViUHJvb2ZNYXRjaGVzKSB7ICAvLy9cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHN0YXRlbWVudE5vZGUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHN0YXRlbWVudE1hdGNoZXMgPSBhbnRlY2VkZW50Lm1hdGNoU3RhdGVtZW50Tm9kZShzdGF0ZW1lbnROb2RlLCBzdWJzdGl0dXRpb25zKTtcblxuICAgICAgaWYgKCFzdGF0ZW1lbnRNYXRjaGVzKSB7ICAvLy9cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gIH0pIHx8IG51bGw7XG5cbiAgY29uc3QgYW50ZWNlZGVudE1hdGNoZXMgPSAoYXNzZXJ0aW9uICE9PSBudWxsKTtcblxuICByZXR1cm4gYW50ZWNlZGVudE1hdGNoZXM7XG59XG5cbmZ1bmN0aW9uIG1hdGNoQW50ZWNlZGVudHMoYW50ZWNlZGVudCwgYXNzZXJ0aW9ucywgc3Vic3RpdHV0aW9ucykge1xuICBjb25zdCBhbnRlY2VkZW50c01hdGNoZXMgPSBhbnRlY2VkZW50LmV2ZXJ5KChhbnRlY2VkZW50KSA9PiB7XG4gICAgY29uc3QgYW50ZWNlZGVudE1hdGNoZXMgPSBtYXRjaEFudGVjZWRlbnQoYW50ZWNlZGVudCwgYXNzZXJ0aW9ucywgc3Vic3RpdHV0aW9ucyk7XG5cbiAgICBpZiAoYW50ZWNlZGVudE1hdGNoZXMpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIGFudGVjZWRlbnRzTWF0Y2hlcztcbn1cblxuZnVuY3Rpb24gbWF0Y2hDb25zZXF1ZW50KGNvbnNlcXVlbnQsIHN0YXRlbWVudE5vZGUsIHN1YnN0aXR1dGlvbnMpIHtcbiAgY29uc3Qgbm9uVGVybWluYWxOb2RlTWF0Y2hlcyA9IGNvbnNlcXVlbnQubWF0Y2hTdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUsIHN1YnN0aXR1dGlvbnMpLFxuICAgICAgICBjb25zZXF1ZW50TWF0Y2hlcyA9IG5vblRlcm1pbmFsTm9kZU1hdGNoZXM7IC8vL1xuXG4gIHJldHVybiBjb25zZXF1ZW50TWF0Y2hlcztcbn1cblxuZnVuY3Rpb24gbWF0Y2hBbnRlY2VkZW50c0FuZENvbnNlcXVlbnQoYW50ZWNlZGVudHMsIGNvbnNlcXVlbnQsIGFzc2VydGlvbnMsIHN0YXRlbWVudE5vZGUpIHtcbiAgbGV0IGFudGVjZWRlbnRzTWF0Y2hDb25zZXF1ZW50ID0gZmFsc2U7XG5cbiAgY29uc3Qgc3Vic3RpdHV0aW9ucyA9IFtdLFxuICAgICAgICBhbnRlY2VkZW50c01hdGNoZXMgPSBtYXRjaEFudGVjZWRlbnRzKGFudGVjZWRlbnRzLCBhc3NlcnRpb25zLCBzdWJzdGl0dXRpb25zKTtcblxuICBpZiAoYW50ZWNlZGVudHNNYXRjaGVzKSB7XG4gICAgY29uc3QgY29uc2VxdWVudE1hdGNoZXMgPSBtYXRjaENvbnNlcXVlbnQoY29uc2VxdWVudCwgc3RhdGVtZW50Tm9kZSwgc3Vic3RpdHV0aW9ucyk7XG5cbiAgICBhbnRlY2VkZW50c01hdGNoQ29uc2VxdWVudCA9IGNvbnNlcXVlbnRNYXRjaGVzOyAgLy8vXG4gIH1cblxuICByZXR1cm4gYW50ZWNlZGVudHNNYXRjaENvbnNlcXVlbnQ7XG59XG4iXSwibmFtZXMiOlsiTGVtbWEiLCJsYWJlbHMiLCJhbnRlY2VkZW50cyIsImNvbnNlcXVlbnQiLCJnZXRMYWJlbHMiLCJnZXRBbnRlY2VkZW50cyIsImdldENvbnNlcXVlbnQiLCJtYXRjaExhYmVsTmFtZSIsImxhYmVsTmFtZSIsIm1hdGNoZXNMYWJlbE5hbWUiLCJzb21lIiwibGFiZWwiLCJuYW1lIiwibGFiZWxNYXRjaGVzTmFtZSIsIm1hdGNoTmFtZSIsIm1hdGNoU3RhdGVtZW50Iiwic3RhdGVtZW50Tm9kZSIsInByb29mQ29udGV4dCIsInN0YXRlbWVudE5hdGNoZXMiLCJhbnRlY2VkZW50c0xlbmd0aCIsImxlbmd0aCIsInN1YnN0aXR1dGlvbnMiLCJjb25zZXF1ZW50TWF0Y2hlcyIsIm1hdGNoQ29uc2VxdWVudCIsImFzc2VydGlvbnMiLCJnZXRBc3NlcnRpb25zIiwic29tZVN1YkFycmF5IiwiYW50ZWNlZGVudHNNYXRjaENvbnNlcXVlbnQiLCJtYXRjaEFudGVjZWRlbnRzQW5kQ29uc2VxdWVudCIsInRvSlNPTiIsImxhYmVsc0pTT04iLCJtYXAiLCJsYWJlbEpTT04iLCJhbnRlY2VkZW50c0pTT04iLCJhbnRlY2VkZW50IiwiYW50ZWNlZGVudEpTT04iLCJjb25zZXF1ZW50SlNPTiIsImtpbmQiLCJBWElPTV9LSU5EIiwianNvbiIsImZyb21KU09OIiwicmVsZWFzZUNvbnRleHQiLCJsZW1tYSIsIkxhYmVsIiwiQW50ZWNlZGVudCIsIkNvbnNlcXVlbnQiLCJmcm9tTGFiZWxzQW50ZWNlZGVudHNBbmRDb25zZXF1ZW50IiwibWF0Y2hBbnRlY2VkZW50IiwiYXNzZXJ0aW9uIiwicHJ1bmUiLCJzdWJwcm9vZk5vZGUiLCJnZXRTdWJwcm9vZk5vZGUiLCJnZXRTdGF0ZW1lbnROb2RlIiwic3ViUHJvb2ZNYXRjaGVzIiwibWF0Y2hTdWJwcm9vZk5vZGUiLCJzdGF0ZW1lbnRNYXRjaGVzIiwibWF0Y2hTdGF0ZW1lbnROb2RlIiwiYW50ZWNlZGVudE1hdGNoZXMiLCJtYXRjaEFudGVjZWRlbnRzIiwiYW50ZWNlZGVudHNNYXRjaGVzIiwiZXZlcnkiLCJub25UZXJtaW5hbE5vZGVNYXRjaGVzIl0sIm1hcHBpbmdzIjoiQUFB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