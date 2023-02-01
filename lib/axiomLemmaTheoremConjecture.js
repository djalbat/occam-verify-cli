"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return AxiomLemmaTheoremConjecture;
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
var AxiomLemmaTheoremConjecture = /*#__PURE__*/ function() {
    function AxiomLemmaTheoremConjecture(labels, suppositions, consequence) {
        _classCallCheck(this, AxiomLemmaTheoremConjecture);
        this.labels = labels;
        this.suppositions = suppositions;
        this.consequence = consequence;
    }
    _createClass(AxiomLemmaTheoremConjecture, [
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
            value: function fromJSON(Class, json, context) {
                var labels = json.labels;
                var labelsJSON = labels; ///
                labels = labelsJSON.map(function(labelJSON) {
                    var _$json = labelJSON, label = _label.default.fromJSON(_$json, context);
                    return label;
                });
                var suppositions = json.suppositions;
                var suppositionsJSON = suppositions; ///
                suppositions = suppositionsJSON.map(function(suppositionJSON) {
                    var _$json = suppositionJSON, supposition = _supposition.default.fromJSON(_$json, context);
                    return supposition;
                });
                var consequence = json.consequence;
                var consequenceJSON = consequence; ///
                json = consequenceJSON; ///
                consequence = _consequence.default.fromJSON(json, context);
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
    return AxiomLemmaTheoremConjecture;
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
    var suppositionsMatch = supposition.every(function(supposition) {
        var suppositionMatches = matchSupposition(supposition, proofSteps, substitutions);
        if (suppositionMatches) {
            return true;
        }
    });
    return suppositionsMatch;
}
function matchConsequence(consequence, statementNode, substitutions) {
    var nonTerminalNodeMatches = consequence.matchStatementNode(statementNode, substitutions), consequenceMatches = nonTerminalNodeMatches; ///
    return consequenceMatches;
}
function matchSuppositionsAndConsequence(suppositions, consequence, proofSteps, statementNode) {
    var suppositionsMatchConsequence = false;
    var substitutions = [], suppositionsMatch = matchSuppositions(suppositions, proofSteps, substitutions);
    if (suppositionsMatch) {
        var consequenceMatches = matchConsequence(consequence, statementNode, substitutions);
        suppositionsMatchConsequence = consequenceMatches; ///
    }
    return suppositionsMatchConsequence;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9heGlvbUxlbW1hVGhlb3JlbUNvbmplY3R1cmUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBMYWJlbCBmcm9tIFwiLi9sYWJlbFwiO1xuaW1wb3J0IFN1cHBvc2l0aW9uIGZyb20gXCIuL3N1cHBvc2l0aW9uXCI7XG5pbXBvcnQgQ29uc2VxdWVuY2UgZnJvbSBcIi4vY29uc2VxdWVuY2VcIjtcblxuaW1wb3J0IHsgcHJ1bmUgfSBmcm9tIFwiLi91dGlsaXRpZXMvYXJyYXlcIjtcbmltcG9ydCB7IHNvbWVTdWJBcnJheSB9IGZyb20gXCIuL3V0aWxpdGllcy9hcnJheVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBeGlvbUxlbW1hVGhlb3JlbUNvbmplY3R1cmUge1xuICBjb25zdHJ1Y3RvcihsYWJlbHMsIHN1cHBvc2l0aW9ucywgY29uc2VxdWVuY2UpIHtcbiAgICB0aGlzLmxhYmVscyA9IGxhYmVscztcbiAgICB0aGlzLnN1cHBvc2l0aW9ucyA9IHN1cHBvc2l0aW9ucztcbiAgICB0aGlzLmNvbnNlcXVlbmNlID0gY29uc2VxdWVuY2U7XG4gIH1cblxuICBnZXRMYWJlbHMoKSB7XG4gICAgcmV0dXJuIHRoaXMubGFiZWxzO1xuICB9XG5cbiAgZ2V0U3VwcG9zaXRpb25zKCkge1xuICAgIHJldHVybiB0aGlzLnN1cHBvc2l0aW9ucztcbiAgfVxuXG4gIGdldENvbnNlcXVlbmNlKCkge1xuICAgIHJldHVybiB0aGlzLmNvbnNlcXVlbmNlO1xuICB9XG5cbiAgbWF0Y2hMYWJlbE5hbWUobGFiZWxOYW1lKSB7XG4gICAgY29uc3QgbWF0Y2hlc0xhYmVsTmFtZSA9IHRoaXMubGFiZWxzLnNvbWUoKGxhYmVsKSA9PiB7XG4gICAgICBjb25zdCBuYW1lID0gbGFiZWxOYW1lLCAvLy9cbiAgICAgICAgICAgIGxhYmVsTWF0Y2hlc05hbWUgPSBsYWJlbC5tYXRjaE5hbWUobmFtZSk7XG5cbiAgICAgIGlmIChsYWJlbE1hdGNoZXNOYW1lKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIG1hdGNoZXNMYWJlbE5hbWU7XG4gIH1cblxuICBtYXRjaFN0YXRlbWVudChzdGF0ZW1lbnROb2RlLCBwcm9vZkNvbnRleHQpIHtcbiAgICBsZXQgc3RhdGVtZW50TmF0Y2hlcztcblxuICAgIGNvbnN0IHN1cHBvc2l0aW9uc0xlbmd0aCA9IHRoaXMuc3VwcG9zaXRpb25zLmxlbmd0aDtcblxuICAgIGlmIChzdXBwb3NpdGlvbnNMZW5ndGggPT09IDApIHtcbiAgICAgIGNvbnN0IHN1YnN0aXR1dGlvbnMgPSBbXSxcbiAgICAgICAgICAgIGNvbnNlcXVlbmNlTWF0Y2hlcyA9IG1hdGNoQ29uc2VxdWVuY2UodGhpcy5jb25zZXF1ZW5jZSwgc3RhdGVtZW50Tm9kZSwgc3Vic3RpdHV0aW9ucyk7XG5cbiAgICAgIHN0YXRlbWVudE5hdGNoZXMgPSBjb25zZXF1ZW5jZU1hdGNoZXM7IC8vL1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBwcm9vZlN0ZXBzID0gcHJvb2ZDb250ZXh0LmdldFByb29mU3RlcHMoKTtcblxuICAgICAgc3RhdGVtZW50TmF0Y2hlcyA9IHNvbWVTdWJBcnJheShwcm9vZlN0ZXBzLCBzdXBwb3NpdGlvbnNMZW5ndGgsIChwcm9vZlN0ZXBzKSA9PiB7XG4gICAgICAgIGNvbnN0IHN1cHBvc2l0aW9uc01hdGNoQ29uc2VxdWVuY2UgPSBtYXRjaFN1cHBvc2l0aW9uc0FuZENvbnNlcXVlbmNlKHRoaXMuc3VwcG9zaXRpb25zLCB0aGlzLmNvbnNlcXVlbmNlLCBwcm9vZlN0ZXBzLCBzdGF0ZW1lbnROb2RlKTtcblxuICAgICAgICBpZiAoc3VwcG9zaXRpb25zTWF0Y2hDb25zZXF1ZW5jZSkge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3RhdGVtZW50TmF0Y2hlcztcbiAgfVxuXG4gIHRvSlNPTih0b2tlbnMpIHtcbiAgICBjb25zdCB7IGtpbmQgfSA9IHRoaXMuY29uc3RydWN0b3IsXG4gICAgICAgICAgbGFiZWxzSlNPTiA9IHRoaXMubGFiZWxzLm1hcCgobGFiZWwpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGxhYmVsSlNPTiA9IGxhYmVsLnRvSlNPTih0b2tlbnMpO1xuXG4gICAgICAgICAgICByZXR1cm4gbGFiZWxKU09OO1xuICAgICAgICAgIH0pLFxuICAgICAgICAgIHN1cHBvc2l0aW9uc0pTT04gPSB0aGlzLnN1cHBvc2l0aW9ucy5tYXAoKHN1cHBvc2l0aW9uKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBzdXBwb3NpdGlvbkpTT04gPSBzdXBwb3NpdGlvbi50b0pTT04odG9rZW5zKTtcblxuICAgICAgICAgICAgcmV0dXJuIHN1cHBvc2l0aW9uSlNPTjtcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBjb25zZXF1ZW5jZUpTT04gPSB0aGlzLmNvbnNlcXVlbmNlLnRvSlNPTih0b2tlbnMpLFxuICAgICAgICAgIGxhYmVscyA9IGxhYmVsc0pTT04sICAvLy9cbiAgICAgICAgICBzdXBwb3NpdGlvbnMgPSBzdXBwb3NpdGlvbnNKU09OLCAgLy8vXG4gICAgICAgICAgY29uc2VxdWVuY2UgPSBjb25zZXF1ZW5jZUpTT04sICAvLy9cbiAgICAgICAgICBqc29uID0ge1xuICAgICAgICAgICAga2luZCxcbiAgICAgICAgICAgIGxhYmVscyxcbiAgICAgICAgICAgIHN1cHBvc2l0aW9ucyxcbiAgICAgICAgICAgIGNvbnNlcXVlbmNlXG4gICAgICAgICAgfTtcblxuICAgIHJldHVybiBqc29uO1xuICB9XG5cbiAgc3RhdGljIGZyb21KU09OKENsYXNzLCBqc29uLCBjb250ZXh0KSB7XG4gICAgbGV0IHsgbGFiZWxzIH0gPSBqc29uO1xuXG4gICAgY29uc3QgbGFiZWxzSlNPTiA9IGxhYmVsczsgIC8vL1xuXG4gICAgbGFiZWxzID0gbGFiZWxzSlNPTi5tYXAoKGxhYmVsSlNPTikgPT4ge1xuICAgICAgY29uc3QganNvbiA9IGxhYmVsSlNPTiwgLy8vXG4gICAgICAgICAgICBsYWJlbCA9IExhYmVsLmZyb21KU09OKGpzb24sIGNvbnRleHQpO1xuXG4gICAgICByZXR1cm4gbGFiZWw7XG4gICAgfSk7XG5cbiAgICBsZXQgeyBzdXBwb3NpdGlvbnMgfSA9IGpzb247XG5cbiAgICBjb25zdCBzdXBwb3NpdGlvbnNKU09OID0gc3VwcG9zaXRpb25zOyAgLy8vXG5cbiAgICBzdXBwb3NpdGlvbnMgPSBzdXBwb3NpdGlvbnNKU09OLm1hcCgoc3VwcG9zaXRpb25KU09OKSA9PiB7XG4gICAgICBjb25zdCBqc29uID0gc3VwcG9zaXRpb25KU09OLCAvLy9cbiAgICAgICAgICAgIHN1cHBvc2l0aW9uID0gU3VwcG9zaXRpb24uZnJvbUpTT04oanNvbiwgY29udGV4dCk7XG5cbiAgICAgIHJldHVybiBzdXBwb3NpdGlvbjtcbiAgICB9KTtcblxuICAgIGxldCB7IGNvbnNlcXVlbmNlIH0gPSBqc29uO1xuXG4gICAgY29uc3QgY29uc2VxdWVuY2VKU09OID0gY29uc2VxdWVuY2U7ICAvLy9cblxuICAgIGpzb24gPSBjb25zZXF1ZW5jZUpTT047ICAvLy9cblxuICAgIGNvbnNlcXVlbmNlID0gQ29uc2VxdWVuY2UuZnJvbUpTT04oanNvbiwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gbmV3IENsYXNzKGxhYmVscywgc3VwcG9zaXRpb25zLCBjb25zZXF1ZW5jZSk7ICAvLy9cbiAgfVxuXG4gIHN0YXRpYyBmcm9tTGFiZWxzU3VwcG9zaXRpb25zQW5kQ29uc2VxdWVuY2UoQ2xhc3MsIGxhYmVscywgc3VwcG9zaXRpb25zLCBjb25zZXF1ZW5jZSkgeyByZXR1cm4gbmV3IENsYXNzKGxhYmVscywgc3VwcG9zaXRpb25zLCBjb25zZXF1ZW5jZSk7IH1cbn1cblxuZnVuY3Rpb24gbWF0Y2hTdXBwb3NpdGlvbihzdXBwb3NpdGlvbiwgcHJvb2ZTdGVwcywgc3Vic3RpdHV0aW9ucykge1xuICBjb25zdCBwcm9vZlN0ZXAgPSBwcnVuZShwcm9vZlN0ZXBzLCAocHJvb2ZTdGVwKSA9PiB7XG4gICAgY29uc3Qgc3VicHJvb2ZOb2RlID0gcHJvb2ZTdGVwLmdldFN1YnByb29mTm9kZSgpLFxuICAgICAgICAgIHN0YXRlbWVudE5vZGUgPSBwcm9vZlN0ZXAuZ2V0U3RhdGVtZW50Tm9kZSgpO1xuXG4gICAgaWYgKHN1YnByb29mTm9kZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3Qgc3ViUHJvb2ZNYXRjaGVzID0gc3VwcG9zaXRpb24ubWF0Y2hTdWJwcm9vZk5vZGUoc3VicHJvb2ZOb2RlLCBzdWJzdGl0dXRpb25zKTtcblxuICAgICAgaWYgKCFzdWJQcm9vZk1hdGNoZXMpIHsgIC8vL1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoc3RhdGVtZW50Tm9kZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3Qgc3RhdGVtZW50TWF0Y2hlcyA9IHN1cHBvc2l0aW9uLm1hdGNoU3RhdGVtZW50Tm9kZShzdGF0ZW1lbnROb2RlLCBzdWJzdGl0dXRpb25zKTtcblxuICAgICAgaWYgKCFzdGF0ZW1lbnRNYXRjaGVzKSB7ICAvLy9cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gIH0pIHx8IG51bGw7XG5cbiAgY29uc3Qgc3VwcG9zaXRpb25NYXRjaGVzID0gKHByb29mU3RlcCAhPT0gbnVsbCk7XG5cbiAgcmV0dXJuIHN1cHBvc2l0aW9uTWF0Y2hlcztcbn1cblxuZnVuY3Rpb24gbWF0Y2hTdXBwb3NpdGlvbnMoc3VwcG9zaXRpb24sIHByb29mU3RlcHMsIHN1YnN0aXR1dGlvbnMpIHtcbiAgY29uc3Qgc3VwcG9zaXRpb25zTWF0Y2ggPSBzdXBwb3NpdGlvbi5ldmVyeSgoc3VwcG9zaXRpb24pID0+IHtcbiAgICBjb25zdCBzdXBwb3NpdGlvbk1hdGNoZXMgPSBtYXRjaFN1cHBvc2l0aW9uKHN1cHBvc2l0aW9uLCBwcm9vZlN0ZXBzLCBzdWJzdGl0dXRpb25zKTtcblxuICAgIGlmIChzdXBwb3NpdGlvbk1hdGNoZXMpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIHN1cHBvc2l0aW9uc01hdGNoO1xufVxuXG5mdW5jdGlvbiBtYXRjaENvbnNlcXVlbmNlKGNvbnNlcXVlbmNlLCBzdGF0ZW1lbnROb2RlLCBzdWJzdGl0dXRpb25zKSB7XG4gIGNvbnN0IG5vblRlcm1pbmFsTm9kZU1hdGNoZXMgPSBjb25zZXF1ZW5jZS5tYXRjaFN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSwgc3Vic3RpdHV0aW9ucyksXG4gICAgICAgIGNvbnNlcXVlbmNlTWF0Y2hlcyA9IG5vblRlcm1pbmFsTm9kZU1hdGNoZXM7IC8vL1xuXG4gIHJldHVybiBjb25zZXF1ZW5jZU1hdGNoZXM7XG59XG5cbmZ1bmN0aW9uIG1hdGNoU3VwcG9zaXRpb25zQW5kQ29uc2VxdWVuY2Uoc3VwcG9zaXRpb25zLCBjb25zZXF1ZW5jZSwgcHJvb2ZTdGVwcywgc3RhdGVtZW50Tm9kZSkge1xuICBsZXQgc3VwcG9zaXRpb25zTWF0Y2hDb25zZXF1ZW5jZSA9IGZhbHNlO1xuXG4gIGNvbnN0IHN1YnN0aXR1dGlvbnMgPSBbXSxcbiAgICAgICAgc3VwcG9zaXRpb25zTWF0Y2ggPSBtYXRjaFN1cHBvc2l0aW9ucyhzdXBwb3NpdGlvbnMsIHByb29mU3RlcHMsIHN1YnN0aXR1dGlvbnMpO1xuXG4gIGlmIChzdXBwb3NpdGlvbnNNYXRjaCkge1xuICAgIGNvbnN0IGNvbnNlcXVlbmNlTWF0Y2hlcyA9IG1hdGNoQ29uc2VxdWVuY2UoY29uc2VxdWVuY2UsIHN0YXRlbWVudE5vZGUsIHN1YnN0aXR1dGlvbnMpO1xuXG4gICAgc3VwcG9zaXRpb25zTWF0Y2hDb25zZXF1ZW5jZSA9IGNvbnNlcXVlbmNlTWF0Y2hlczsgIC8vL1xuICB9XG5cbiAgcmV0dXJuIHN1cHBvc2l0aW9uc01hdGNoQ29uc2VxdWVuY2U7XG59XG4iXSwibmFtZXMiOlsiQXhpb21MZW1tYVRoZW9yZW1Db25qZWN0dXJlIiwibGFiZWxzIiwic3VwcG9zaXRpb25zIiwiY29uc2VxdWVuY2UiLCJnZXRMYWJlbHMiLCJnZXRTdXBwb3NpdGlvbnMiLCJnZXRDb25zZXF1ZW5jZSIsIm1hdGNoTGFiZWxOYW1lIiwibGFiZWxOYW1lIiwibWF0Y2hlc0xhYmVsTmFtZSIsInNvbWUiLCJsYWJlbCIsIm5hbWUiLCJsYWJlbE1hdGNoZXNOYW1lIiwibWF0Y2hOYW1lIiwibWF0Y2hTdGF0ZW1lbnQiLCJzdGF0ZW1lbnROb2RlIiwicHJvb2ZDb250ZXh0Iiwic3RhdGVtZW50TmF0Y2hlcyIsInN1cHBvc2l0aW9uc0xlbmd0aCIsImxlbmd0aCIsInN1YnN0aXR1dGlvbnMiLCJjb25zZXF1ZW5jZU1hdGNoZXMiLCJtYXRjaENvbnNlcXVlbmNlIiwicHJvb2ZTdGVwcyIsImdldFByb29mU3RlcHMiLCJzb21lU3ViQXJyYXkiLCJzdXBwb3NpdGlvbnNNYXRjaENvbnNlcXVlbmNlIiwibWF0Y2hTdXBwb3NpdGlvbnNBbmRDb25zZXF1ZW5jZSIsInRvSlNPTiIsInRva2VucyIsImtpbmQiLCJjb25zdHJ1Y3RvciIsImxhYmVsc0pTT04iLCJtYXAiLCJsYWJlbEpTT04iLCJzdXBwb3NpdGlvbnNKU09OIiwic3VwcG9zaXRpb24iLCJzdXBwb3NpdGlvbkpTT04iLCJjb25zZXF1ZW5jZUpTT04iLCJqc29uIiwiZnJvbUpTT04iLCJDbGFzcyIsImNvbnRleHQiLCJMYWJlbCIsIlN1cHBvc2l0aW9uIiwiQ29uc2VxdWVuY2UiLCJmcm9tTGFiZWxzU3VwcG9zaXRpb25zQW5kQ29uc2VxdWVuY2UiLCJtYXRjaFN1cHBvc2l0aW9uIiwicHJvb2ZTdGVwIiwicHJ1bmUiLCJzdWJwcm9vZk5vZGUiLCJnZXRTdWJwcm9vZk5vZGUiLCJnZXRTdGF0ZW1lbnROb2RlIiwic3ViUHJvb2ZNYXRjaGVzIiwibWF0Y2hTdWJwcm9vZk5vZGUiLCJzdGF0ZW1lbnRNYXRjaGVzIiwibWF0Y2hTdGF0ZW1lbnROb2RlIiwic3VwcG9zaXRpb25NYXRjaGVzIiwibWF0Y2hTdXBwb3NpdGlvbnMiLCJzdXBwb3NpdGlvbnNNYXRjaCIsImV2ZXJ5Iiwibm9uVGVybWluYWxOb2RlTWF0Y2hlcyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFTcUJBOzs7MERBUEg7Z0VBQ007Z0VBQ0E7cUJBRUY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFHUCxJQUFBLEFBQU1BLDRDQXdIbEIsQUF4SFk7YUFBTUEsNEJBQ1BDLE1BQU0sRUFBRUMsWUFBWSxFQUFFQyxXQUFXOzhCQUQxQkg7UUFFakIsSUFBSSxDQUFDQyxNQUFNLEdBQUdBO1FBQ2QsSUFBSSxDQUFDQyxZQUFZLEdBQUdBO1FBQ3BCLElBQUksQ0FBQ0MsV0FBVyxHQUFHQTs7aUJBSkZIOztZQU9uQkksS0FBQUE7bUJBQUFBLFNBQUFBLFlBQVk7Z0JBQ1YsT0FBTyxJQUFJLENBQUNILE1BQU07WUFDcEI7OztZQUVBSSxLQUFBQTttQkFBQUEsU0FBQUEsa0JBQWtCO2dCQUNoQixPQUFPLElBQUksQ0FBQ0gsWUFBWTtZQUMxQjs7O1lBRUFJLEtBQUFBO21CQUFBQSxTQUFBQSxpQkFBaUI7Z0JBQ2YsT0FBTyxJQUFJLENBQUNILFdBQVc7WUFDekI7OztZQUVBSSxLQUFBQTttQkFBQUEsU0FBQUEsZUFBZUMsU0FBUyxFQUFFO2dCQUN4QixJQUFNQyxtQkFBbUIsSUFBSSxDQUFDUixNQUFNLENBQUNTLElBQUksQ0FBQyxTQUFDQyxPQUFVO29CQUNuRCxJQUFNQyxPQUFPSixXQUNQSyxtQkFBbUJGLE1BQU1HLFNBQVMsQ0FBQ0Y7b0JBRXpDLElBQUlDLGtCQUFrQjt3QkFDcEIsT0FBTyxJQUFJO29CQUNiLENBQUM7Z0JBQ0g7Z0JBRUEsT0FBT0o7WUFDVDs7O1lBRUFNLEtBQUFBO21CQUFBQSxTQUFBQSxlQUFlQyxhQUFhLEVBQUVDLFlBQVksRUFBRTs7Z0JBQzFDLElBQUlDO2dCQUVKLElBQU1DLHFCQUFxQixJQUFJLENBQUNqQixZQUFZLENBQUNrQixNQUFNO2dCQUVuRCxJQUFJRCx1QkFBdUIsR0FBRztv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