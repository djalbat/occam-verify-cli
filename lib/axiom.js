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
var Axiom = /*#__PURE__*/ function() {
    function Axiom(labels, antecedents, consequent) {
        _classCallCheck(this, Axiom);
        this.labels = labels;
        this.antecedents = antecedents;
        this.consequent = consequent;
    }
    _createClass(Axiom, [
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
                var axiom;
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
                axiom = new Axiom(labels, antecedents, consequent);
                return axiom;
            }
        },
        {
            key: "fromLabelsAntecedentsAndConsequent",
            value: function fromLabelsAntecedentsAndConsequent(labels, antecedents, consequent) {
                var axiom = new Axiom(labels, antecedents, consequent);
                return axiom;
            }
        }
    ]);
    return Axiom;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9heGlvbS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IExhYmVsIGZyb20gXCIuL2xhYmVsXCI7XG5pbXBvcnQgQW50ZWNlZGVudCBmcm9tIFwiLi9hbnRlY2VkZW50XCI7XG5pbXBvcnQgQ29uc2VxdWVudCBmcm9tIFwiLi9jb25zZXF1ZW50XCI7XG5cbmltcG9ydCB7IHBydW5lIH0gZnJvbSBcIi4vdXRpbGl0aWVzL2FycmF5XCI7XG5pbXBvcnQgeyBBWElPTV9LSU5EIH0gZnJvbSBcIi4va2luZHNcIjtcbmltcG9ydCB7IHNvbWVTdWJBcnJheSB9IGZyb20gXCIuL3V0aWxpdGllcy9hcnJheVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBeGlvbSB7XG4gIGNvbnN0cnVjdG9yKGxhYmVscywgYW50ZWNlZGVudHMsIGNvbnNlcXVlbnQpIHtcbiAgICB0aGlzLmxhYmVscyA9IGxhYmVscztcbiAgICB0aGlzLmFudGVjZWRlbnRzID0gYW50ZWNlZGVudHM7XG4gICAgdGhpcy5jb25zZXF1ZW50ID0gY29uc2VxdWVudDtcbiAgfVxuXG4gIGdldExhYmVscygpIHtcbiAgICByZXR1cm4gdGhpcy5sYWJlbHM7XG4gIH1cblxuICBnZXRBbnRlY2VkZW50cygpIHtcbiAgICByZXR1cm4gdGhpcy5hbnRlY2VkZW50cztcbiAgfVxuXG4gIGdldENvbnNlcXVlbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuY29uc2VxdWVudDtcbiAgfVxuXG4gIG1hdGNoTGFiZWxOYW1lKGxhYmVsTmFtZSkge1xuICAgIGNvbnN0IG1hdGNoZXNMYWJlbE5hbWUgPSB0aGlzLmxhYmVscy5zb21lKChsYWJlbCkgPT4ge1xuICAgICAgY29uc3QgbmFtZSA9IGxhYmVsTmFtZSwgLy8vXG4gICAgICAgICAgICBsYWJlbE1hdGNoZXNOYW1lID0gbGFiZWwubWF0Y2hOYW1lKG5hbWUpO1xuXG4gICAgICBpZiAobGFiZWxNYXRjaGVzTmFtZSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiBtYXRjaGVzTGFiZWxOYW1lO1xuICB9XG5cbiAgbWF0Y2hTdGF0ZW1lbnQoc3RhdGVtZW50Tm9kZSwgcHJvb2ZDb250ZXh0KSB7XG4gICAgbGV0IHN0YXRlbWVudE5hdGNoZXM7XG5cbiAgICBjb25zdCBhbnRlY2VkZW50c0xlbmd0aCA9IHRoaXMuYW50ZWNlZGVudHMubGVuZ3RoO1xuXG4gICAgaWYgKGFudGVjZWRlbnRzTGVuZ3RoID09PSAwKSB7XG4gICAgICBjb25zdCBzdWJzdGl0dXRpb25zID0gW10sXG4gICAgICAgICAgICBjb25zZXF1ZW50TWF0Y2hlcyA9IG1hdGNoQ29uc2VxdWVudCh0aGlzLmNvbnNlcXVlbnQsIHN0YXRlbWVudE5vZGUsIHN1YnN0aXR1dGlvbnMpO1xuXG4gICAgICBzdGF0ZW1lbnROYXRjaGVzID0gY29uc2VxdWVudE1hdGNoZXM7IC8vL1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBhc3NlcnRpb25zID0gcHJvb2ZDb250ZXh0LmdldEFzc2VydGlvbnMoKTtcblxuICAgICAgc3RhdGVtZW50TmF0Y2hlcyA9IHNvbWVTdWJBcnJheShhc3NlcnRpb25zLCBhbnRlY2VkZW50c0xlbmd0aCwgKGFzc2VydGlvbnMpID0+IHtcbiAgICAgICAgY29uc3QgYW50ZWNlZGVudHNNYXRjaENvbnNlcXVlbnQgPSBtYXRjaEFudGVjZWRlbnRzQW5kQ29uc2VxdWVudCh0aGlzLmFudGVjZWRlbnRzLCB0aGlzLmNvbnNlcXVlbnQsIGFzc2VydGlvbnMsIHN0YXRlbWVudE5vZGUpO1xuXG4gICAgICAgIGlmIChhbnRlY2VkZW50c01hdGNoQ29uc2VxdWVudCkge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3RhdGVtZW50TmF0Y2hlcztcbiAgfVxuXG4gIHRvSlNPTigpIHtcbiAgICBjb25zdCBsYWJlbHNKU09OID0gdGhpcy5sYWJlbHMubWFwKChsYWJlbCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgbGFiZWxKU09OID0gbGFiZWwudG9KU09OKCk7XG5cbiAgICAgICAgICAgIHJldHVybiBsYWJlbEpTT047XG4gICAgICAgICAgfSksXG4gICAgICAgICAgYW50ZWNlZGVudHNKU09OID0gdGhpcy5hbnRlY2VkZW50cy5tYXAoKGFudGVjZWRlbnQpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGFudGVjZWRlbnRKU09OID0gYW50ZWNlZGVudC50b0pTT04oKTtcblxuICAgICAgICAgICAgcmV0dXJuIGFudGVjZWRlbnRKU09OO1xuICAgICAgICAgIH0pLFxuICAgICAgICAgIGNvbnNlcXVlbnRKU09OID0gdGhpcy5jb25zZXF1ZW50LnRvSlNPTigpLFxuICAgICAgICAgIGtpbmQgPSBBWElPTV9LSU5ELFxuICAgICAgICAgIGxhYmVscyA9IGxhYmVsc0pTT04sICAvLy9cbiAgICAgICAgICBhbnRlY2VkZW50cyA9IGFudGVjZWRlbnRzSlNPTiwgIC8vL1xuICAgICAgICAgIGNvbnNlcXVlbnQgPSBjb25zZXF1ZW50SlNPTiwgIC8vL1xuICAgICAgICAgIGpzb24gPSB7XG4gICAgICAgICAgICBraW5kLFxuICAgICAgICAgICAgbGFiZWxzLFxuICAgICAgICAgICAgYW50ZWNlZGVudHMsXG4gICAgICAgICAgICBjb25zZXF1ZW50XG4gICAgICAgICAgfTtcblxuICAgIHJldHVybiBqc29uO1xuICB9XG5cbiAgc3RhdGljIGZyb21KU09OKGpzb24sIHJlbGVhc2VDb250ZXh0KSB7XG4gICAgbGV0IGF4aW9tO1xuXG4gICAgbGV0IHsgbGFiZWxzIH0gPSBqc29uO1xuXG4gICAgY29uc3QgbGFiZWxzSlNPTiA9IGxhYmVsczsgIC8vL1xuXG4gICAgbGFiZWxzID0gbGFiZWxzSlNPTi5tYXAoKGxhYmVsSlNPTikgPT4ge1xuICAgICAgY29uc3QganNvbiA9IGxhYmVsSlNPTiwgLy8vXG4gICAgICAgIGxhYmVsID0gTGFiZWwuZnJvbUpTT04oanNvbiwgcmVsZWFzZUNvbnRleHQpO1xuXG4gICAgICByZXR1cm4gbGFiZWw7XG4gICAgfSk7XG5cbiAgICBsZXQgeyBhbnRlY2VkZW50cyB9ID0ganNvbjtcblxuICAgIGNvbnN0IGFudGVjZWRlbnRzSlNPTiA9IGFudGVjZWRlbnRzOyAgLy8vXG5cbiAgICBhbnRlY2VkZW50cyA9IGFudGVjZWRlbnRzSlNPTi5tYXAoKGFudGVjZWRlbnRKU09OKSA9PiB7XG4gICAgICBjb25zdCBqc29uID0gYW50ZWNlZGVudEpTT04sIC8vL1xuICAgICAgICBhbnRlY2VkZW50ID0gQW50ZWNlZGVudC5mcm9tSlNPTihqc29uLCByZWxlYXNlQ29udGV4dCk7XG5cbiAgICAgIHJldHVybiBhbnRlY2VkZW50O1xuICAgIH0pO1xuXG4gICAgbGV0IHsgY29uc2VxdWVudCB9ID0ganNvbjtcblxuICAgIGNvbnN0IGNvbnNlcXVlbnRKU09OID0gY29uc2VxdWVudDsgIC8vL1xuXG4gICAganNvbiA9IGNvbnNlcXVlbnRKU09OOyAgLy8vXG5cbiAgICBjb25zZXF1ZW50ID0gQ29uc2VxdWVudC5mcm9tSlNPTihqc29uLCByZWxlYXNlQ29udGV4dCk7XG5cbiAgICBheGlvbSA9IG5ldyBBeGlvbShsYWJlbHMsIGFudGVjZWRlbnRzLCBjb25zZXF1ZW50KTtcblxuICAgIHJldHVybiBheGlvbTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTGFiZWxzQW50ZWNlZGVudHNBbmRDb25zZXF1ZW50KGxhYmVscywgYW50ZWNlZGVudHMsIGNvbnNlcXVlbnQpIHtcbiAgICBjb25zdCBheGlvbSA9IG5ldyBBeGlvbShsYWJlbHMsIGFudGVjZWRlbnRzLCBjb25zZXF1ZW50KTtcblxuICAgIHJldHVybiBheGlvbTtcbiAgfVxufVxuXG5mdW5jdGlvbiBtYXRjaEFudGVjZWRlbnQoYW50ZWNlZGVudCwgYXNzZXJ0aW9ucywgc3Vic3RpdHV0aW9ucykge1xuICBjb25zdCBhc3NlcnRpb24gPSBwcnVuZShhc3NlcnRpb25zLCAoYXNzZXJ0aW9uKSA9PiB7XG4gICAgY29uc3Qgc3VicHJvb2ZOb2RlID0gYXNzZXJ0aW9uLmdldFN1YnByb29mTm9kZSgpLFxuICAgICAgICAgIHN0YXRlbWVudE5vZGUgPSBhc3NlcnRpb24uZ2V0U3RhdGVtZW50Tm9kZSgpO1xuXG4gICAgaWYgKHN1YnByb29mTm9kZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3Qgc3ViUHJvb2ZNYXRjaGVzID0gYW50ZWNlZGVudC5tYXRjaFN1YnByb29mTm9kZShzdWJwcm9vZk5vZGUsIHN1YnN0aXR1dGlvbnMpO1xuXG4gICAgICBpZiAoIXN1YlByb29mTWF0Y2hlcykgeyAgLy8vXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChzdGF0ZW1lbnROb2RlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBzdGF0ZW1lbnRNYXRjaGVzID0gYW50ZWNlZGVudC5tYXRjaFN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSwgc3Vic3RpdHV0aW9ucyk7XG5cbiAgICAgIGlmICghc3RhdGVtZW50TWF0Y2hlcykgeyAgLy8vXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICB9KSB8fCBudWxsO1xuXG4gIGNvbnN0IGFudGVjZWRlbnRNYXRjaGVzID0gKGFzc2VydGlvbiAhPT0gbnVsbCk7XG5cbiAgcmV0dXJuIGFudGVjZWRlbnRNYXRjaGVzO1xufVxuXG5mdW5jdGlvbiBtYXRjaEFudGVjZWRlbnRzKGFudGVjZWRlbnQsIGFzc2VydGlvbnMsIHN1YnN0aXR1dGlvbnMpIHtcbiAgY29uc3QgYW50ZWNlZGVudHNNYXRjaGVzID0gYW50ZWNlZGVudC5ldmVyeSgoYW50ZWNlZGVudCkgPT4ge1xuICAgIGNvbnN0IGFudGVjZWRlbnRNYXRjaGVzID0gbWF0Y2hBbnRlY2VkZW50KGFudGVjZWRlbnQsIGFzc2VydGlvbnMsIHN1YnN0aXR1dGlvbnMpO1xuXG4gICAgaWYgKGFudGVjZWRlbnRNYXRjaGVzKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiBhbnRlY2VkZW50c01hdGNoZXM7XG59XG5cbmZ1bmN0aW9uIG1hdGNoQ29uc2VxdWVudChjb25zZXF1ZW50LCBzdGF0ZW1lbnROb2RlLCBzdWJzdGl0dXRpb25zKSB7XG4gIGNvbnN0IG5vblRlcm1pbmFsTm9kZU1hdGNoZXMgPSBjb25zZXF1ZW50Lm1hdGNoU3RhdGVtZW50Tm9kZShzdGF0ZW1lbnROb2RlLCBzdWJzdGl0dXRpb25zKSxcbiAgICAgICAgY29uc2VxdWVudE1hdGNoZXMgPSBub25UZXJtaW5hbE5vZGVNYXRjaGVzOyAvLy9cblxuICByZXR1cm4gY29uc2VxdWVudE1hdGNoZXM7XG59XG5cbmZ1bmN0aW9uIG1hdGNoQW50ZWNlZGVudHNBbmRDb25zZXF1ZW50KGFudGVjZWRlbnRzLCBjb25zZXF1ZW50LCBhc3NlcnRpb25zLCBzdGF0ZW1lbnROb2RlKSB7XG4gIGxldCBhbnRlY2VkZW50c01hdGNoQ29uc2VxdWVudCA9IGZhbHNlO1xuXG4gIGNvbnN0IHN1YnN0aXR1dGlvbnMgPSBbXSxcbiAgICAgICAgYW50ZWNlZGVudHNNYXRjaGVzID0gbWF0Y2hBbnRlY2VkZW50cyhhbnRlY2VkZW50cywgYXNzZXJ0aW9ucywgc3Vic3RpdHV0aW9ucyk7XG5cbiAgaWYgKGFudGVjZWRlbnRzTWF0Y2hlcykge1xuICAgIGNvbnN0IGNvbnNlcXVlbnRNYXRjaGVzID0gbWF0Y2hDb25zZXF1ZW50KGNvbnNlcXVlbnQsIHN0YXRlbWVudE5vZGUsIHN1YnN0aXR1dGlvbnMpO1xuXG4gICAgYW50ZWNlZGVudHNNYXRjaENvbnNlcXVlbnQgPSBjb25zZXF1ZW50TWF0Y2hlczsgIC8vL1xuICB9XG5cbiAgcmV0dXJuIGFudGVjZWRlbnRzTWF0Y2hDb25zZXF1ZW50O1xufVxuIl0sIm5hbWVzIjpbIkF4aW9tIiwibGFiZWxzIiwiYW50ZWNlZGVudHMiLCJjb25zZXF1ZW50IiwiZ2V0TGFiZWxzIiwiZ2V0QW50ZWNlZGVudHMiLCJnZXRDb25zZXF1ZW50IiwibWF0Y2hMYWJlbE5hbWUiLCJsYWJlbE5hbWUiLCJtYXRjaGVzTGFiZWxOYW1lIiwic29tZSIsImxhYmVsIiwibmFtZSIsImxhYmVsTWF0Y2hlc05hbWUiLCJtYXRjaE5hbWUiLCJtYXRjaFN0YXRlbWVudCIsInN0YXRlbWVudE5vZGUiLCJwcm9vZkNvbnRleHQiLCJzdGF0ZW1lbnROYXRjaGVzIiwiYW50ZWNlZGVudHNMZW5ndGgiLCJsZW5ndGgiLCJzdWJzdGl0dXRpb25zIiwiY29uc2VxdWVudE1hdGNoZXMiLCJtYXRjaENvbnNlcXVlbnQiLCJhc3NlcnRpb25zIiwiZ2V0QXNzZXJ0aW9ucyIsInNvbWVTdWJBcnJheSIsImFudGVjZWRlbnRzTWF0Y2hDb25zZXF1ZW50IiwibWF0Y2hBbnRlY2VkZW50c0FuZENvbnNlcXVlbnQiLCJ0b0pTT04iLCJsYWJlbHNKU09OIiwibWFwIiwibGFiZWxKU09OIiwiYW50ZWNlZGVudHNKU09OIiwiYW50ZWNlZGVudCIsImFudGVjZWRlbnRKU09OIiwiY29uc2VxdWVudEpTT04iLCJraW5kIiwiQVhJT01fS0lORCIsImpzb24iLCJmcm9tSlNPTiIsInJlbGVhc2VDb250ZXh0IiwiYXhpb20iLCJMYWJlbCIsIkFudGVjZWRlbnQiLCJDb25zZXF1ZW50IiwiZnJvbUxhYmVsc0FudGVjZWRlbnRzQW5kQ29uc2VxdWVudCIsIm1hdGNoQW50ZWNlZGVudCIsImFzc2VydGlvbiIsInBydW5lIiwic3VicHJvb2ZOb2RlIiwiZ2V0U3VicHJvb2ZOb2RlIiwiZ2V0U3RhdGVtZW50Tm9kZSIsInN1YlByb29mTWF0Y2hlcyIsIm1hdGNoU3VicHJvb2ZOb2RlIiwic3RhdGVtZW50TWF0Y2hlcyIsIm1hdGNoU3RhdGVtZW50Tm9kZSIsImFudGVjZWRlbnRNYXRjaGVzIiwibWF0Y2hBbnRlY2VkZW50cyIsImFudGVjZWRlbnRzTWF0Y2hlcyIsImV2ZXJ5Iiwibm9uVGVybWluYWxOb2RlTWF0Y2hlcyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7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