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
var _supposition = /*#__PURE__*/ _interopRequireDefault(require("./supposition"));
var _consequence = /*#__PURE__*/ _interopRequireDefault(require("./consequence"));
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
    function AxiomLemmaTheorem(labels, suppositions, consequence) {
        _classCallCheck(this, AxiomLemmaTheorem);
        this.labels = labels;
        this.suppositions = suppositions;
        this.consequence = consequence;
    }
    _createClass(AxiomLemmaTheorem, [
        {
            key: "getLabels",
            value: function getLabels() {
                return this.labels;
            }
        },
        {
            key: "getSuppositions",
            value: function getSuppositions() {
                return this.suppositions;
            }
        },
        {
            key: "getConsequence",
            value: function getConsequence() {
                return this.consequence;
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
                var suppositionsLength = this.suppositions.length;
                if (suppositionsLength === 0) {
                    var substitutions = [], consequenceMatches = matchConsequence(this.consequence, statementNode, substitutions);
                    statementNatches = consequenceMatches; ///
                } else {
                    var proofSteps = proofContext.getProofSteps();
                    statementNatches = (0, _array.someSubArray)(proofSteps, suppositionsLength, function(proofSteps) {
                        var suppositionsMatchConsequence = matchSuppositionsAndConsequence(_this.suppositions, _this.consequence, proofSteps, statementNode);
                        if (suppositionsMatchConsequence) {
                            return true;
                        }
                    });
                }
                return statementNatches;
            }
        },
        {
            key: "toJSON",
            value: function toJSON(tokens) {
                var kind = this.constructor.kind, labelsJSON = this.labels.map(function(label) {
                    var labelJSON = label.toJSON(tokens);
                    return labelJSON;
                }), suppositionsJSON = this.suppositions.map(function(supposition) {
                    var suppositionJSON = supposition.toJSON(tokens);
                    return suppositionJSON;
                }), consequenceJSON = this.consequence.toJSON(tokens), labels = labelsJSON, suppositions = suppositionsJSON, consequence = consequenceJSON, json = {
                    kind: kind,
                    labels: labels,
                    suppositions: suppositions,
                    consequence: consequence
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
                var suppositions = json.suppositions;
                var suppositionsJSON = suppositions; ///
                suppositions = suppositionsJSON.map(function(suppositionJSON) {
                    var _$json = suppositionJSON, supposition = _supposition.default.fromJSON(_$json, releaseContext);
                    return supposition;
                });
                var consequence = json.consequence;
                var consequenceJSON = consequence; ///
                json = consequenceJSON; ///
                consequence = _consequence.default.fromJSON(json, releaseContext);
                return new Class(labels, suppositions, consequence); ///
            }
        },
        {
            key: "fromLabelsSuppositionsAndConsequence",
            value: function fromLabelsSuppositionsAndConsequence(Class, labels, suppositions, consequence) {
                return new Class(labels, suppositions, consequence);
            }
        }
    ]);
    return AxiomLemmaTheorem;
}();
function matchSupposition(supposition, proofSteps, substitutions) {
    var proofStep = (0, _array.prune)(proofSteps, function(proofStep) {
        var subproofNode = proofStep.getSubproofNode(), statementNode = proofStep.getStatementNode();
        if (subproofNode !== null) {
            var subProofMatches = supposition.matchSubproofNode(subproofNode, substitutions);
            if (!subProofMatches) {
                return true;
            }
        }
        if (statementNode !== null) {
            var statementMatches = supposition.matchStatementNode(statementNode, substitutions);
            if (!statementMatches) {
                return true;
            }
        }
    }) || null;
    var suppositionMatches = proofStep !== null;
    return suppositionMatches;
}
function matchSuppositions(supposition, proofSteps, substitutions) {
    var suppositionsMatches = supposition.every(function(supposition) {
        var suppositionMatches = matchSupposition(supposition, proofSteps, substitutions);
        if (suppositionMatches) {
            return true;
        }
    });
    return suppositionsMatches;
}
function matchConsequence(consequence, statementNode, substitutions) {
    var nonTerminalNodeMatches = consequence.matchStatementNode(statementNode, substitutions), consequenceMatches = nonTerminalNodeMatches; ///
    return consequenceMatches;
}
function matchSuppositionsAndConsequence(suppositions, consequence, proofSteps, statementNode) {
    var suppositionsMatchConsequence = false;
    var substitutions = [], suppositionsMatches = matchSuppositions(suppositions, proofSteps, substitutions);
    if (suppositionsMatches) {
        var consequenceMatches = matchConsequence(consequence, statementNode, substitutions);
        suppositionsMatchConsequence = consequenceMatches; ///
    }
    return suppositionsMatchConsequence;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9heGlvbUxlbW1hVGhlb3JlbS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IExhYmVsIGZyb20gXCIuL2xhYmVsXCI7XG5pbXBvcnQgU3VwcG9zaXRpb24gZnJvbSBcIi4vc3VwcG9zaXRpb25cIjtcbmltcG9ydCBDb25zZXF1ZW5jZSBmcm9tIFwiLi9jb25zZXF1ZW5jZVwiO1xuXG5pbXBvcnQgeyBwcnVuZSB9IGZyb20gXCIuL3V0aWxpdGllcy9hcnJheVwiO1xuaW1wb3J0IHsgc29tZVN1YkFycmF5IH0gZnJvbSBcIi4vdXRpbGl0aWVzL2FycmF5XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEF4aW9tTGVtbWFUaGVvcmVtIHtcbiAgY29uc3RydWN0b3IobGFiZWxzLCBzdXBwb3NpdGlvbnMsIGNvbnNlcXVlbmNlKSB7XG4gICAgdGhpcy5sYWJlbHMgPSBsYWJlbHM7XG4gICAgdGhpcy5zdXBwb3NpdGlvbnMgPSBzdXBwb3NpdGlvbnM7XG4gICAgdGhpcy5jb25zZXF1ZW5jZSA9IGNvbnNlcXVlbmNlO1xuICB9XG5cbiAgZ2V0TGFiZWxzKCkge1xuICAgIHJldHVybiB0aGlzLmxhYmVscztcbiAgfVxuXG4gIGdldFN1cHBvc2l0aW9ucygpIHtcbiAgICByZXR1cm4gdGhpcy5zdXBwb3NpdGlvbnM7XG4gIH1cblxuICBnZXRDb25zZXF1ZW5jZSgpIHtcbiAgICByZXR1cm4gdGhpcy5jb25zZXF1ZW5jZTtcbiAgfVxuXG4gIG1hdGNoTGFiZWxOYW1lKGxhYmVsTmFtZSkge1xuICAgIGNvbnN0IG1hdGNoZXNMYWJlbE5hbWUgPSB0aGlzLmxhYmVscy5zb21lKChsYWJlbCkgPT4ge1xuICAgICAgY29uc3QgbmFtZSA9IGxhYmVsTmFtZSwgLy8vXG4gICAgICAgICAgICBsYWJlbE1hdGNoZXNOYW1lID0gbGFiZWwubWF0Y2hOYW1lKG5hbWUpO1xuXG4gICAgICBpZiAobGFiZWxNYXRjaGVzTmFtZSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiBtYXRjaGVzTGFiZWxOYW1lO1xuICB9XG5cbiAgbWF0Y2hTdGF0ZW1lbnQoc3RhdGVtZW50Tm9kZSwgcHJvb2ZDb250ZXh0KSB7XG4gICAgbGV0IHN0YXRlbWVudE5hdGNoZXM7XG5cbiAgICBjb25zdCBzdXBwb3NpdGlvbnNMZW5ndGggPSB0aGlzLnN1cHBvc2l0aW9ucy5sZW5ndGg7XG5cbiAgICBpZiAoc3VwcG9zaXRpb25zTGVuZ3RoID09PSAwKSB7XG4gICAgICBjb25zdCBzdWJzdGl0dXRpb25zID0gW10sXG4gICAgICAgICAgICBjb25zZXF1ZW5jZU1hdGNoZXMgPSBtYXRjaENvbnNlcXVlbmNlKHRoaXMuY29uc2VxdWVuY2UsIHN0YXRlbWVudE5vZGUsIHN1YnN0aXR1dGlvbnMpO1xuXG4gICAgICBzdGF0ZW1lbnROYXRjaGVzID0gY29uc2VxdWVuY2VNYXRjaGVzOyAvLy9cbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgcHJvb2ZTdGVwcyA9IHByb29mQ29udGV4dC5nZXRQcm9vZlN0ZXBzKCk7XG5cbiAgICAgIHN0YXRlbWVudE5hdGNoZXMgPSBzb21lU3ViQXJyYXkocHJvb2ZTdGVwcywgc3VwcG9zaXRpb25zTGVuZ3RoLCAocHJvb2ZTdGVwcykgPT4ge1xuICAgICAgICBjb25zdCBzdXBwb3NpdGlvbnNNYXRjaENvbnNlcXVlbmNlID0gbWF0Y2hTdXBwb3NpdGlvbnNBbmRDb25zZXF1ZW5jZSh0aGlzLnN1cHBvc2l0aW9ucywgdGhpcy5jb25zZXF1ZW5jZSwgcHJvb2ZTdGVwcywgc3RhdGVtZW50Tm9kZSk7XG5cbiAgICAgICAgaWYgKHN1cHBvc2l0aW9uc01hdGNoQ29uc2VxdWVuY2UpIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN0YXRlbWVudE5hdGNoZXM7XG4gIH1cblxuICB0b0pTT04odG9rZW5zKSB7XG4gICAgY29uc3QgeyBraW5kIH0gPSB0aGlzLmNvbnN0cnVjdG9yLFxuICAgICAgICAgIGxhYmVsc0pTT04gPSB0aGlzLmxhYmVscy5tYXAoKGxhYmVsKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBsYWJlbEpTT04gPSBsYWJlbC50b0pTT04odG9rZW5zKTtcblxuICAgICAgICAgICAgcmV0dXJuIGxhYmVsSlNPTjtcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBzdXBwb3NpdGlvbnNKU09OID0gdGhpcy5zdXBwb3NpdGlvbnMubWFwKChzdXBwb3NpdGlvbikgPT4ge1xuICAgICAgICAgICAgY29uc3Qgc3VwcG9zaXRpb25KU09OID0gc3VwcG9zaXRpb24udG9KU09OKHRva2Vucyk7XG5cbiAgICAgICAgICAgIHJldHVybiBzdXBwb3NpdGlvbkpTT047XG4gICAgICAgICAgfSksXG4gICAgICAgICAgY29uc2VxdWVuY2VKU09OID0gdGhpcy5jb25zZXF1ZW5jZS50b0pTT04odG9rZW5zKSxcbiAgICAgICAgICBsYWJlbHMgPSBsYWJlbHNKU09OLCAgLy8vXG4gICAgICAgICAgc3VwcG9zaXRpb25zID0gc3VwcG9zaXRpb25zSlNPTiwgIC8vL1xuICAgICAgICAgIGNvbnNlcXVlbmNlID0gY29uc2VxdWVuY2VKU09OLCAgLy8vXG4gICAgICAgICAganNvbiA9IHtcbiAgICAgICAgICAgIGtpbmQsXG4gICAgICAgICAgICBsYWJlbHMsXG4gICAgICAgICAgICBzdXBwb3NpdGlvbnMsXG4gICAgICAgICAgICBjb25zZXF1ZW5jZVxuICAgICAgICAgIH07XG5cbiAgICByZXR1cm4ganNvbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tSlNPTihDbGFzcywganNvbiwgcmVsZWFzZUNvbnRleHQpIHtcbiAgICBsZXQgeyBsYWJlbHMgfSA9IGpzb247XG5cbiAgICBjb25zdCBsYWJlbHNKU09OID0gbGFiZWxzOyAgLy8vXG5cbiAgICBsYWJlbHMgPSBsYWJlbHNKU09OLm1hcCgobGFiZWxKU09OKSA9PiB7XG4gICAgICBjb25zdCBqc29uID0gbGFiZWxKU09OLCAvLy9cbiAgICAgICAgICAgIGxhYmVsID0gTGFiZWwuZnJvbUpTT04oanNvbiwgcmVsZWFzZUNvbnRleHQpO1xuXG4gICAgICByZXR1cm4gbGFiZWw7XG4gICAgfSk7XG5cbiAgICBsZXQgeyBzdXBwb3NpdGlvbnMgfSA9IGpzb247XG5cbiAgICBjb25zdCBzdXBwb3NpdGlvbnNKU09OID0gc3VwcG9zaXRpb25zOyAgLy8vXG5cbiAgICBzdXBwb3NpdGlvbnMgPSBzdXBwb3NpdGlvbnNKU09OLm1hcCgoc3VwcG9zaXRpb25KU09OKSA9PiB7XG4gICAgICBjb25zdCBqc29uID0gc3VwcG9zaXRpb25KU09OLCAvLy9cbiAgICAgICAgICAgIHN1cHBvc2l0aW9uID0gU3VwcG9zaXRpb24uZnJvbUpTT04oanNvbiwgcmVsZWFzZUNvbnRleHQpO1xuXG4gICAgICByZXR1cm4gc3VwcG9zaXRpb247XG4gICAgfSk7XG5cbiAgICBsZXQgeyBjb25zZXF1ZW5jZSB9ID0ganNvbjtcblxuICAgIGNvbnN0IGNvbnNlcXVlbmNlSlNPTiA9IGNvbnNlcXVlbmNlOyAgLy8vXG5cbiAgICBqc29uID0gY29uc2VxdWVuY2VKU09OOyAgLy8vXG5cbiAgICBjb25zZXF1ZW5jZSA9IENvbnNlcXVlbmNlLmZyb21KU09OKGpzb24sIHJlbGVhc2VDb250ZXh0KTtcblxuICAgIHJldHVybiBuZXcgQ2xhc3MobGFiZWxzLCBzdXBwb3NpdGlvbnMsIGNvbnNlcXVlbmNlKTsgIC8vL1xuICB9XG5cbiAgc3RhdGljIGZyb21MYWJlbHNTdXBwb3NpdGlvbnNBbmRDb25zZXF1ZW5jZShDbGFzcywgbGFiZWxzLCBzdXBwb3NpdGlvbnMsIGNvbnNlcXVlbmNlKSB7IHJldHVybiBuZXcgQ2xhc3MobGFiZWxzLCBzdXBwb3NpdGlvbnMsIGNvbnNlcXVlbmNlKTsgfVxufVxuXG5mdW5jdGlvbiBtYXRjaFN1cHBvc2l0aW9uKHN1cHBvc2l0aW9uLCBwcm9vZlN0ZXBzLCBzdWJzdGl0dXRpb25zKSB7XG4gIGNvbnN0IHByb29mU3RlcCA9IHBydW5lKHByb29mU3RlcHMsIChwcm9vZlN0ZXApID0+IHtcbiAgICBjb25zdCBzdWJwcm9vZk5vZGUgPSBwcm9vZlN0ZXAuZ2V0U3VicHJvb2ZOb2RlKCksXG4gICAgICAgICAgc3RhdGVtZW50Tm9kZSA9IHByb29mU3RlcC5nZXRTdGF0ZW1lbnROb2RlKCk7XG5cbiAgICBpZiAoc3VicHJvb2ZOb2RlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBzdWJQcm9vZk1hdGNoZXMgPSBzdXBwb3NpdGlvbi5tYXRjaFN1YnByb29mTm9kZShzdWJwcm9vZk5vZGUsIHN1YnN0aXR1dGlvbnMpO1xuXG4gICAgICBpZiAoIXN1YlByb29mTWF0Y2hlcykgeyAgLy8vXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChzdGF0ZW1lbnROb2RlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBzdGF0ZW1lbnRNYXRjaGVzID0gc3VwcG9zaXRpb24ubWF0Y2hTdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUsIHN1YnN0aXR1dGlvbnMpO1xuXG4gICAgICBpZiAoIXN0YXRlbWVudE1hdGNoZXMpIHsgIC8vL1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgfSkgfHwgbnVsbDtcblxuICBjb25zdCBzdXBwb3NpdGlvbk1hdGNoZXMgPSAocHJvb2ZTdGVwICE9PSBudWxsKTtcblxuICByZXR1cm4gc3VwcG9zaXRpb25NYXRjaGVzO1xufVxuXG5mdW5jdGlvbiBtYXRjaFN1cHBvc2l0aW9ucyhzdXBwb3NpdGlvbiwgcHJvb2ZTdGVwcywgc3Vic3RpdHV0aW9ucykge1xuICBjb25zdCBzdXBwb3NpdGlvbnNNYXRjaGVzID0gc3VwcG9zaXRpb24uZXZlcnkoKHN1cHBvc2l0aW9uKSA9PiB7XG4gICAgY29uc3Qgc3VwcG9zaXRpb25NYXRjaGVzID0gbWF0Y2hTdXBwb3NpdGlvbihzdXBwb3NpdGlvbiwgcHJvb2ZTdGVwcywgc3Vic3RpdHV0aW9ucyk7XG5cbiAgICBpZiAoc3VwcG9zaXRpb25NYXRjaGVzKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiBzdXBwb3NpdGlvbnNNYXRjaGVzO1xufVxuXG5mdW5jdGlvbiBtYXRjaENvbnNlcXVlbmNlKGNvbnNlcXVlbmNlLCBzdGF0ZW1lbnROb2RlLCBzdWJzdGl0dXRpb25zKSB7XG4gIGNvbnN0IG5vblRlcm1pbmFsTm9kZU1hdGNoZXMgPSBjb25zZXF1ZW5jZS5tYXRjaFN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSwgc3Vic3RpdHV0aW9ucyksXG4gICAgICAgIGNvbnNlcXVlbmNlTWF0Y2hlcyA9IG5vblRlcm1pbmFsTm9kZU1hdGNoZXM7IC8vL1xuXG4gIHJldHVybiBjb25zZXF1ZW5jZU1hdGNoZXM7XG59XG5cbmZ1bmN0aW9uIG1hdGNoU3VwcG9zaXRpb25zQW5kQ29uc2VxdWVuY2Uoc3VwcG9zaXRpb25zLCBjb25zZXF1ZW5jZSwgcHJvb2ZTdGVwcywgc3RhdGVtZW50Tm9kZSkge1xuICBsZXQgc3VwcG9zaXRpb25zTWF0Y2hDb25zZXF1ZW5jZSA9IGZhbHNlO1xuXG4gIGNvbnN0IHN1YnN0aXR1dGlvbnMgPSBbXSxcbiAgICAgICAgc3VwcG9zaXRpb25zTWF0Y2hlcyA9IG1hdGNoU3VwcG9zaXRpb25zKHN1cHBvc2l0aW9ucywgcHJvb2ZTdGVwcywgc3Vic3RpdHV0aW9ucyk7XG5cbiAgaWYgKHN1cHBvc2l0aW9uc01hdGNoZXMpIHtcbiAgICBjb25zdCBjb25zZXF1ZW5jZU1hdGNoZXMgPSBtYXRjaENvbnNlcXVlbmNlKGNvbnNlcXVlbmNlLCBzdGF0ZW1lbnROb2RlLCBzdWJzdGl0dXRpb25zKTtcblxuICAgIHN1cHBvc2l0aW9uc01hdGNoQ29uc2VxdWVuY2UgPSBjb25zZXF1ZW5jZU1hdGNoZXM7ICAvLy9cbiAgfVxuXG4gIHJldHVybiBzdXBwb3NpdGlvbnNNYXRjaENvbnNlcXVlbmNlO1xufVxuIl0sIm5hbWVzIjpbIkF4aW9tTGVtbWFUaGVvcmVtIiwibGFiZWxzIiwic3VwcG9zaXRpb25zIiwiY29uc2VxdWVuY2UiLCJnZXRMYWJlbHMiLCJnZXRTdXBwb3NpdGlvbnMiLCJnZXRDb25zZXF1ZW5jZSIsIm1hdGNoTGFiZWxOYW1lIiwibGFiZWxOYW1lIiwibWF0Y2hlc0xhYmVsTmFtZSIsInNvbWUiLCJsYWJlbCIsIm5hbWUiLCJsYWJlbE1hdGNoZXNOYW1lIiwibWF0Y2hOYW1lIiwibWF0Y2hTdGF0ZW1lbnQiLCJzdGF0ZW1lbnROb2RlIiwicHJvb2ZDb250ZXh0Iiwic3RhdGVtZW50TmF0Y2hlcyIsInN1cHBvc2l0aW9uc0xlbmd0aCIsImxlbmd0aCIsInN1YnN0aXR1dGlvbnMiLCJjb25zZXF1ZW5jZU1hdGNoZXMiLCJtYXRjaENvbnNlcXVlbmNlIiwicHJvb2ZTdGVwcyIsImdldFByb29mU3RlcHMiLCJzb21lU3ViQXJyYXkiLCJzdXBwb3NpdGlvbnNNYXRjaENvbnNlcXVlbmNlIiwibWF0Y2hTdXBwb3NpdGlvbnNBbmRDb25zZXF1ZW5jZSIsInRvSlNPTiIsInRva2VucyIsImtpbmQiLCJjb25zdHJ1Y3RvciIsImxhYmVsc0pTT04iLCJtYXAiLCJsYWJlbEpTT04iLCJzdXBwb3NpdGlvbnNKU09OIiwic3VwcG9zaXRpb24iLCJzdXBwb3NpdGlvbkpTT04iLCJjb25zZXF1ZW5jZUpTT04iLCJqc29uIiwiZnJvbUpTT04iLCJDbGFzcyIsInJlbGVhc2VDb250ZXh0IiwiTGFiZWwiLCJTdXBwb3NpdGlvbiIsIkNvbnNlcXVlbmNlIiwiZnJvbUxhYmVsc1N1cHBvc2l0aW9uc0FuZENvbnNlcXVlbmNlIiwibWF0Y2hTdXBwb3NpdGlvbiIsInByb29mU3RlcCIsInBydW5lIiwic3VicHJvb2ZOb2RlIiwiZ2V0U3VicHJvb2ZOb2RlIiwiZ2V0U3RhdGVtZW50Tm9kZSIsInN1YlByb29mTWF0Y2hlcyIsIm1hdGNoU3VicHJvb2ZOb2RlIiwic3RhdGVtZW50TWF0Y2hlcyIsIm1hdGNoU3RhdGVtZW50Tm9kZSIsInN1cHBvc2l0aW9uTWF0Y2hlcyIsIm1hdGNoU3VwcG9zaXRpb25zIiwic3VwcG9zaXRpb25zTWF0Y2hlcyIsImV2ZXJ5Iiwibm9uVGVybWluYWxOb2RlTWF0Y2hlcyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFTcUJBOzs7MERBUEg7Z0VBQ007Z0VBQ0E7cUJBRUY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFHUCxJQUFBLEFBQU1BLGtDQXdIbEIsQUF4SFk7YUFBTUEsa0JBQ1BDLE1BQU0sRUFBRUMsWUFBWSxFQUFFQyxXQUFXOzhCQUQxQkg7UUFFakIsSUFBSSxDQUFDQyxNQUFNLEdBQUdBO1FBQ2QsSUFBSSxDQUFDQyxZQUFZLEdBQUdBO1FBQ3BCLElBQUksQ0FBQ0MsV0FBVyxHQUFHQTs7aUJBSkZIOztZQU9uQkksS0FBQUE7bUJBQUFBLFNBQUFBLFlBQVk7Z0JBQ1YsT0FBTyxJQUFJLENBQUNILE1BQU07WUFDcEI7OztZQUVBSSxLQUFBQTttQkFBQUEsU0FBQUEsa0JBQWtCO2dCQUNoQixPQUFPLElBQUksQ0FBQ0gsWUFBWTtZQUMxQjs7O1lBRUFJLEtBQUFBO21CQUFBQSxTQUFBQSxpQkFBaUI7Z0JBQ2YsT0FBTyxJQUFJLENBQUNILFdBQVc7WUFDekI7OztZQUVBSSxLQUFBQTttQkFBQUEsU0FBQUEsZUFBZUMsU0FBUyxFQUFFO2dCQUN4QixJQUFNQyxtQkFBbUIsSUFBSSxDQUFDUixNQUFNLENBQUNTLElBQUksQ0FBQyxTQUFDQyxPQUFVO29CQUNuRCxJQUFNQyxPQUFPSixXQUNQSyxtQkFBbUJGLE1BQU1HLFNBQVMsQ0FBQ0Y7b0JBRXpDLElBQUlDLGtCQUFrQjt3QkFDcEIsT0FBTyxJQUFJO29CQUNiLENBQUM7Z0JBQ0g7Z0JBRUEsT0FBT0o7WUFDVDs7O1lBRUFNLEtBQUFBO21CQUFBQSxTQUFBQSxlQUFlQyxhQUFhLEVBQUVDLFlBQVksRUFBRTs7Z0JBQzFDLElBQUlDO2dCQUVKLElBQU1DLHFCQUFxQixJQUFJLENBQUNqQixZQUFZLENBQUNrQixNQUFNO2dCQUVuRCxJQUFJ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