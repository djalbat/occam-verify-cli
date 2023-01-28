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
            value: function fromJSON(Class, json, lexer, parser) {
                var labels = json.labels;
                var labelsJSON = labels; ///
                labels = labelsJSON.map(function(labelJSON) {
                    var _$json = labelJSON, label = _label.default.fromJSON(_$json, lexer, parser);
                    return label;
                });
                var suppositions = json.suppositions;
                var suppositionsJSON = suppositions; ///
                suppositions = suppositionsJSON.map(function(suppositionJSON) {
                    var _$json = suppositionJSON, supposition = _supposition.default.fromJSON(_$json, lexer, parser);
                    return supposition;
                });
                var consequence = json.consequence;
                var consequenceJSON = consequence; ///
                json = consequenceJSON; ///
                consequence = _consequence.default.fromJSON(json, lexer, parser);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9heGlvbUxlbW1hVGhlb3JlbUNvbmplY3R1cmUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBMYWJlbCBmcm9tIFwiLi9sYWJlbFwiO1xuaW1wb3J0IFN1cHBvc2l0aW9uIGZyb20gXCIuL3N1cHBvc2l0aW9uXCI7XG5pbXBvcnQgQ29uc2VxdWVuY2UgZnJvbSBcIi4vY29uc2VxdWVuY2VcIjtcblxuaW1wb3J0IHsgcHJ1bmUgfSBmcm9tIFwiLi91dGlsaXRpZXMvYXJyYXlcIjtcbmltcG9ydCB7IHNvbWVTdWJBcnJheSB9IGZyb20gXCIuL3V0aWxpdGllcy9hcnJheVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBeGlvbUxlbW1hVGhlb3JlbUNvbmplY3R1cmUge1xuICBjb25zdHJ1Y3RvcihsYWJlbHMsIHN1cHBvc2l0aW9ucywgY29uc2VxdWVuY2UpIHtcbiAgICB0aGlzLmxhYmVscyA9IGxhYmVscztcbiAgICB0aGlzLnN1cHBvc2l0aW9ucyA9IHN1cHBvc2l0aW9ucztcbiAgICB0aGlzLmNvbnNlcXVlbmNlID0gY29uc2VxdWVuY2U7XG4gIH1cblxuICBnZXRMYWJlbHMoKSB7XG4gICAgcmV0dXJuIHRoaXMubGFiZWxzO1xuICB9XG5cbiAgZ2V0U3VwcG9zaXRpb25zKCkge1xuICAgIHJldHVybiB0aGlzLnN1cHBvc2l0aW9ucztcbiAgfVxuXG4gIGdldENvbnNlcXVlbmNlKCkge1xuICAgIHJldHVybiB0aGlzLmNvbnNlcXVlbmNlO1xuICB9XG5cbiAgbWF0Y2hMYWJlbE5hbWUobGFiZWxOYW1lKSB7XG4gICAgY29uc3QgbWF0Y2hlc0xhYmVsTmFtZSA9IHRoaXMubGFiZWxzLnNvbWUoKGxhYmVsKSA9PiB7XG4gICAgICBjb25zdCBuYW1lID0gbGFiZWxOYW1lLCAvLy9cbiAgICAgICAgICAgIGxhYmVsTWF0Y2hlc05hbWUgPSBsYWJlbC5tYXRjaE5hbWUobmFtZSk7XG5cbiAgICAgIGlmIChsYWJlbE1hdGNoZXNOYW1lKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIG1hdGNoZXNMYWJlbE5hbWU7XG4gIH1cblxuICBtYXRjaFN0YXRlbWVudChzdGF0ZW1lbnROb2RlLCBwcm9vZkNvbnRleHQpIHtcbiAgICBsZXQgc3RhdGVtZW50TmF0Y2hlcztcblxuICAgIGNvbnN0IHN1cHBvc2l0aW9uc0xlbmd0aCA9IHRoaXMuc3VwcG9zaXRpb25zLmxlbmd0aDtcblxuICAgIGlmIChzdXBwb3NpdGlvbnNMZW5ndGggPT09IDApIHtcbiAgICAgIGNvbnN0IHN1YnN0aXR1dGlvbnMgPSBbXSxcbiAgICAgICAgICAgIGNvbnNlcXVlbmNlTWF0Y2hlcyA9IG1hdGNoQ29uc2VxdWVuY2UodGhpcy5jb25zZXF1ZW5jZSwgc3RhdGVtZW50Tm9kZSwgc3Vic3RpdHV0aW9ucyk7XG5cbiAgICAgIHN0YXRlbWVudE5hdGNoZXMgPSBjb25zZXF1ZW5jZU1hdGNoZXM7IC8vL1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBwcm9vZlN0ZXBzID0gcHJvb2ZDb250ZXh0LmdldFByb29mU3RlcHMoKTtcblxuICAgICAgc3RhdGVtZW50TmF0Y2hlcyA9IHNvbWVTdWJBcnJheShwcm9vZlN0ZXBzLCBzdXBwb3NpdGlvbnNMZW5ndGgsIChwcm9vZlN0ZXBzKSA9PiB7XG4gICAgICAgIGNvbnN0IHN1cHBvc2l0aW9uc01hdGNoQ29uc2VxdWVuY2UgPSBtYXRjaFN1cHBvc2l0aW9uc0FuZENvbnNlcXVlbmNlKHRoaXMuc3VwcG9zaXRpb25zLCB0aGlzLmNvbnNlcXVlbmNlLCBwcm9vZlN0ZXBzLCBzdGF0ZW1lbnROb2RlKTtcblxuICAgICAgICBpZiAoc3VwcG9zaXRpb25zTWF0Y2hDb25zZXF1ZW5jZSkge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3RhdGVtZW50TmF0Y2hlcztcbiAgfVxuXG4gIHRvSlNPTih0b2tlbnMpIHtcbiAgICBjb25zdCB7IGtpbmQgfSA9IHRoaXMuY29uc3RydWN0b3IsXG4gICAgICAgICAgbGFiZWxzSlNPTiA9IHRoaXMubGFiZWxzLm1hcCgobGFiZWwpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGxhYmVsSlNPTiA9IGxhYmVsLnRvSlNPTih0b2tlbnMpO1xuXG4gICAgICAgICAgICByZXR1cm4gbGFiZWxKU09OO1xuICAgICAgICAgIH0pLFxuICAgICAgICAgIHN1cHBvc2l0aW9uc0pTT04gPSB0aGlzLnN1cHBvc2l0aW9ucy5tYXAoKHN1cHBvc2l0aW9uKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBzdXBwb3NpdGlvbkpTT04gPSBzdXBwb3NpdGlvbi50b0pTT04odG9rZW5zKTtcblxuICAgICAgICAgICAgcmV0dXJuIHN1cHBvc2l0aW9uSlNPTjtcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBjb25zZXF1ZW5jZUpTT04gPSB0aGlzLmNvbnNlcXVlbmNlLnRvSlNPTih0b2tlbnMpLFxuICAgICAgICAgIGxhYmVscyA9IGxhYmVsc0pTT04sICAvLy9cbiAgICAgICAgICBzdXBwb3NpdGlvbnMgPSBzdXBwb3NpdGlvbnNKU09OLCAgLy8vXG4gICAgICAgICAgY29uc2VxdWVuY2UgPSBjb25zZXF1ZW5jZUpTT04sICAvLy9cbiAgICAgICAgICBqc29uID0ge1xuICAgICAgICAgICAga2luZCxcbiAgICAgICAgICAgIGxhYmVscyxcbiAgICAgICAgICAgIHN1cHBvc2l0aW9ucyxcbiAgICAgICAgICAgIGNvbnNlcXVlbmNlXG4gICAgICAgICAgfTtcblxuICAgIHJldHVybiBqc29uO1xuICB9XG5cbiAgc3RhdGljIGZyb21KU09OKENsYXNzLCBqc29uLCBsZXhlciwgcGFyc2VyKSB7XG4gICAgbGV0IHsgbGFiZWxzIH0gPSBqc29uO1xuXG4gICAgY29uc3QgbGFiZWxzSlNPTiA9IGxhYmVsczsgIC8vL1xuXG4gICAgbGFiZWxzID0gbGFiZWxzSlNPTi5tYXAoKGxhYmVsSlNPTikgPT4ge1xuICAgICAgY29uc3QganNvbiA9IGxhYmVsSlNPTiwgLy8vXG4gICAgICAgICAgICBsYWJlbCA9IExhYmVsLmZyb21KU09OKGpzb24sIGxleGVyLCBwYXJzZXIpO1xuXG4gICAgICByZXR1cm4gbGFiZWw7XG4gICAgfSk7XG5cbiAgICBsZXQgeyBzdXBwb3NpdGlvbnMgfSA9IGpzb247XG5cbiAgICBjb25zdCBzdXBwb3NpdGlvbnNKU09OID0gc3VwcG9zaXRpb25zOyAgLy8vXG5cbiAgICBzdXBwb3NpdGlvbnMgPSBzdXBwb3NpdGlvbnNKU09OLm1hcCgoc3VwcG9zaXRpb25KU09OKSA9PiB7XG4gICAgICBjb25zdCBqc29uID0gc3VwcG9zaXRpb25KU09OLCAvLy9cbiAgICAgICAgICAgIHN1cHBvc2l0aW9uID0gU3VwcG9zaXRpb24uZnJvbUpTT04oanNvbiwgbGV4ZXIsIHBhcnNlcik7XG5cbiAgICAgIHJldHVybiBzdXBwb3NpdGlvbjtcbiAgICB9KTtcblxuICAgIGxldCB7IGNvbnNlcXVlbmNlIH0gPSBqc29uO1xuXG4gICAgY29uc3QgY29uc2VxdWVuY2VKU09OID0gY29uc2VxdWVuY2U7ICAvLy9cblxuICAgIGpzb24gPSBjb25zZXF1ZW5jZUpTT047ICAvLy9cblxuICAgIGNvbnNlcXVlbmNlID0gQ29uc2VxdWVuY2UuZnJvbUpTT04oanNvbiwgbGV4ZXIsIHBhcnNlcik7XG5cbiAgICByZXR1cm4gbmV3IENsYXNzKGxhYmVscywgc3VwcG9zaXRpb25zLCBjb25zZXF1ZW5jZSk7ICAvLy9cbiAgfVxuXG4gIHN0YXRpYyBmcm9tTGFiZWxzU3VwcG9zaXRpb25zQW5kQ29uc2VxdWVuY2UoQ2xhc3MsIGxhYmVscywgc3VwcG9zaXRpb25zLCBjb25zZXF1ZW5jZSkgeyByZXR1cm4gbmV3IENsYXNzKGxhYmVscywgc3VwcG9zaXRpb25zLCBjb25zZXF1ZW5jZSk7IH1cbn1cblxuZnVuY3Rpb24gbWF0Y2hTdXBwb3NpdGlvbihzdXBwb3NpdGlvbiwgcHJvb2ZTdGVwcywgc3Vic3RpdHV0aW9ucykge1xuICBjb25zdCBwcm9vZlN0ZXAgPSBwcnVuZShwcm9vZlN0ZXBzLCAocHJvb2ZTdGVwKSA9PiB7XG4gICAgY29uc3Qgc3VicHJvb2ZOb2RlID0gcHJvb2ZTdGVwLmdldFN1YnByb29mTm9kZSgpLFxuICAgICAgICAgIHN0YXRlbWVudE5vZGUgPSBwcm9vZlN0ZXAuZ2V0U3RhdGVtZW50Tm9kZSgpO1xuXG4gICAgaWYgKHN1YnByb29mTm9kZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3Qgc3ViUHJvb2ZNYXRjaGVzID0gc3VwcG9zaXRpb24ubWF0Y2hTdWJwcm9vZk5vZGUoc3VicHJvb2ZOb2RlLCBzdWJzdGl0dXRpb25zKTtcblxuICAgICAgaWYgKCFzdWJQcm9vZk1hdGNoZXMpIHsgIC8vL1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoc3RhdGVtZW50Tm9kZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3Qgc3RhdGVtZW50TWF0Y2hlcyA9IHN1cHBvc2l0aW9uLm1hdGNoU3RhdGVtZW50Tm9kZShzdGF0ZW1lbnROb2RlLCBzdWJzdGl0dXRpb25zKTtcblxuICAgICAgaWYgKCFzdGF0ZW1lbnRNYXRjaGVzKSB7ICAvLy9cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gIH0pIHx8IG51bGw7XG5cbiAgY29uc3Qgc3VwcG9zaXRpb25NYXRjaGVzID0gKHByb29mU3RlcCAhPT0gbnVsbCk7XG5cbiAgcmV0dXJuIHN1cHBvc2l0aW9uTWF0Y2hlcztcbn1cblxuZnVuY3Rpb24gbWF0Y2hTdXBwb3NpdGlvbnMoc3VwcG9zaXRpb24sIHByb29mU3RlcHMsIHN1YnN0aXR1dGlvbnMpIHtcbiAgY29uc3Qgc3VwcG9zaXRpb25zTWF0Y2ggPSBzdXBwb3NpdGlvbi5ldmVyeSgoc3VwcG9zaXRpb24pID0+IHtcbiAgICBjb25zdCBzdXBwb3NpdGlvbk1hdGNoZXMgPSBtYXRjaFN1cHBvc2l0aW9uKHN1cHBvc2l0aW9uLCBwcm9vZlN0ZXBzLCBzdWJzdGl0dXRpb25zKTtcblxuICAgIGlmIChzdXBwb3NpdGlvbk1hdGNoZXMpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIHN1cHBvc2l0aW9uc01hdGNoO1xufVxuXG5mdW5jdGlvbiBtYXRjaENvbnNlcXVlbmNlKGNvbnNlcXVlbmNlLCBzdGF0ZW1lbnROb2RlLCBzdWJzdGl0dXRpb25zKSB7XG4gIGNvbnN0IG5vblRlcm1pbmFsTm9kZU1hdGNoZXMgPSBjb25zZXF1ZW5jZS5tYXRjaFN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSwgc3Vic3RpdHV0aW9ucyksXG4gICAgICAgIGNvbnNlcXVlbmNlTWF0Y2hlcyA9IG5vblRlcm1pbmFsTm9kZU1hdGNoZXM7IC8vL1xuXG4gIHJldHVybiBjb25zZXF1ZW5jZU1hdGNoZXM7XG59XG5cbmZ1bmN0aW9uIG1hdGNoU3VwcG9zaXRpb25zQW5kQ29uc2VxdWVuY2Uoc3VwcG9zaXRpb25zLCBjb25zZXF1ZW5jZSwgcHJvb2ZTdGVwcywgc3RhdGVtZW50Tm9kZSkge1xuICBsZXQgc3VwcG9zaXRpb25zTWF0Y2hDb25zZXF1ZW5jZSA9IGZhbHNlO1xuXG4gIGNvbnN0IHN1YnN0aXR1dGlvbnMgPSBbXSxcbiAgICAgICAgc3VwcG9zaXRpb25zTWF0Y2ggPSBtYXRjaFN1cHBvc2l0aW9ucyhzdXBwb3NpdGlvbnMsIHByb29mU3RlcHMsIHN1YnN0aXR1dGlvbnMpO1xuXG4gIGlmIChzdXBwb3NpdGlvbnNNYXRjaCkge1xuICAgIGNvbnN0IGNvbnNlcXVlbmNlTWF0Y2hlcyA9IG1hdGNoQ29uc2VxdWVuY2UoY29uc2VxdWVuY2UsIHN0YXRlbWVudE5vZGUsIHN1YnN0aXR1dGlvbnMpO1xuXG4gICAgc3VwcG9zaXRpb25zTWF0Y2hDb25zZXF1ZW5jZSA9IGNvbnNlcXVlbmNlTWF0Y2hlczsgIC8vL1xuICB9XG5cbiAgcmV0dXJuIHN1cHBvc2l0aW9uc01hdGNoQ29uc2VxdWVuY2U7XG59XG4iXSwibmFtZXMiOlsiQXhpb21MZW1tYVRoZW9yZW1Db25qZWN0dXJlIiwibGFiZWxzIiwic3VwcG9zaXRpb25zIiwiY29uc2VxdWVuY2UiLCJnZXRMYWJlbHMiLCJnZXRTdXBwb3NpdGlvbnMiLCJnZXRDb25zZXF1ZW5jZSIsIm1hdGNoTGFiZWxOYW1lIiwibGFiZWxOYW1lIiwibWF0Y2hlc0xhYmVsTmFtZSIsInNvbWUiLCJsYWJlbCIsIm5hbWUiLCJsYWJlbE1hdGNoZXNOYW1lIiwibWF0Y2hOYW1lIiwibWF0Y2hTdGF0ZW1lbnQiLCJzdGF0ZW1lbnROb2RlIiwicHJvb2ZDb250ZXh0Iiwic3RhdGVtZW50TmF0Y2hlcyIsInN1cHBvc2l0aW9uc0xlbmd0aCIsImxlbmd0aCIsInN1YnN0aXR1dGlvbnMiLCJjb25zZXF1ZW5jZU1hdGNoZXMiLCJtYXRjaENvbnNlcXVlbmNlIiwicHJvb2ZTdGVwcyIsImdldFByb29mU3RlcHMiLCJzb21lU3ViQXJyYXkiLCJzdXBwb3NpdGlvbnNNYXRjaENvbnNlcXVlbmNlIiwibWF0Y2hTdXBwb3NpdGlvbnNBbmRDb25zZXF1ZW5jZSIsInRvSlNPTiIsInRva2VucyIsImtpbmQiLCJjb25zdHJ1Y3RvciIsImxhYmVsc0pTT04iLCJtYXAiLCJsYWJlbEpTT04iLCJzdXBwb3NpdGlvbnNKU09OIiwic3VwcG9zaXRpb24iLCJzdXBwb3NpdGlvbkpTT04iLCJjb25zZXF1ZW5jZUpTT04iLCJqc29uIiwiZnJvbUpTT04iLCJDbGFzcyIsImxleGVyIiwicGFyc2VyIiwiTGFiZWwiLCJTdXBwb3NpdGlvbiIsIkNvbnNlcXVlbmNlIiwiZnJvbUxhYmVsc1N1cHBvc2l0aW9uc0FuZENvbnNlcXVlbmNlIiwibWF0Y2hTdXBwb3NpdGlvbiIsInByb29mU3RlcCIsInBydW5lIiwic3VicHJvb2ZOb2RlIiwiZ2V0U3VicHJvb2ZOb2RlIiwiZ2V0U3RhdGVtZW50Tm9kZSIsInN1YlByb29mTWF0Y2hlcyIsIm1hdGNoU3VicHJvb2ZOb2RlIiwic3RhdGVtZW50TWF0Y2hlcyIsIm1hdGNoU3RhdGVtZW50Tm9kZSIsInN1cHBvc2l0aW9uTWF0Y2hlcyIsIm1hdGNoU3VwcG9zaXRpb25zIiwic3VwcG9zaXRpb25zTWF0Y2giLCJldmVyeSIsIm5vblRlcm1pbmFsTm9kZU1hdGNoZXMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBU3FCQTs7OzBEQVBIO2dFQUNNO2dFQUNBO3FCQUVGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBR1AsSUFBQSxBQUFNQSw0Q0F3SGxCLEFBeEhZO2FBQU1BLDRCQUNQQyxNQUFNLEVBQUVDLFlBQVksRUFBRUMsV0FBVzs4QkFEMUJIO1FBRWpCLElBQUksQ0FBQ0MsTUFBTSxHQUFHQTtRQUNkLElBQUksQ0FBQ0MsWUFBWSxHQUFHQTtRQUNwQixJQUFJLENBQUNDLFdBQVcsR0FBR0E7O2lCQUpGSDs7WUFPbkJJLEtBQUFBO21CQUFBQSxTQUFBQSxZQUFZO2dCQUNWLE9BQU8sSUFBSSxDQUFDSCxNQUFNO1lBQ3BCOzs7WUFFQUksS0FBQUE7bUJBQUFBLFNBQUFBLGtCQUFrQjtnQkFDaEIsT0FBTyxJQUFJLENBQUNILFlBQVk7WUFDMUI7OztZQUVBSSxLQUFBQTttQkFBQUEsU0FBQUEsaUJBQWlCO2dCQUNmLE9BQU8sSUFBSSxDQUFDSCxXQUFXO1lBQ3pCOzs7WUFFQUksS0FBQUE7bUJBQUFBLFNBQUFBLGVBQWVDLFNBQVMsRUFBRTtnQkFDeEIsSUFBTUMsbUJBQW1CLElBQUksQ0FBQ1IsTUFBTSxDQUFDUyxJQUFJLENBQUMsU0FBQ0MsT0FBVTtvQkFDbkQsSUFBTUMsT0FBT0osV0FDUEssbUJBQW1CRixNQUFNRyxTQUFTLENBQUNGO29CQUV6QyxJQUFJQyxrQkFBa0I7d0JBQ3BCLE9BQU8sSUFBSTtvQkFDYixDQUFDO2dCQUNIO2dCQUVBLE9BQU9KO1lBQ1Q7OztZQUVBTSxLQUFBQTttQkFBQUEsU0FBQUEsZUFBZUMsYUFBYSxFQUFFQyxZQUFZLEVBQUU7O2dCQUMxQyxJQUFJQztnQkFFSixJQUFNQyxxQkFBcUIsSUFBSSxDQUFDakIsWUFBWSxDQUFDa0IsTUFBTTtnQkFFbkQsSUFBSUQsdUJBQXVCLEdBQUc7b0JBQzVCLElBQU1FLGdCQUFnQixFQUFFLEVBQ2xCQyxxQkFBcUJDLGlCQUFpQixJQUFJLENBQUNwQixXQUFXLEVBQUVhLGVBQWVLO29CQUU3RUgsbUJBQW1CSSxvQkFBb0IsR0FBRztnQkFDNUMsT0FBTztvQkFDTCxJQUFNRSxhQUFhUCxhQUFhUSxhQUFhO29CQUU3Q1AsbUJBQW1CUSxJQUFBQSxtQkFBWSxFQUFDRixZQUFZTCxvQkFBb0IsU0FBQ0ssWUFBZTt3QkFDOUUsSUFBTUcsK0JBQStCQyxnQ0FBZ0MsTUFBSzFCLFlBQVksRUFBRSxNQUFLQyxXQUFXLEVBQUVxQixZQUFZUjt3QkFFdEgsSUFBSVcsOEJBQThCOzRCQUNoQyxPQUFPLElBQUk7d0JBQ2IsQ0FBQztvQkFDSDtnQkFDRixDQUFDO2dCQUVELE9BQU9UO1lBQ1Q7OztZQUVBVyxLQUFBQTttQkFBQUEsU0FBQUEsT0FBT0MsTUFBTSxFQUFFO2dCQUNiLElBQU0sQUFBRUMsT0FBUyxJQUFJLENBQUNDLFdBQVcsQ0FBekJELE1BQ0ZFLGFBQWEsSUFBSSxDQUFDaEMsTUFBTSxDQUFDaUMsR0FBRyxDQUFDLFNBQUN2QixPQUFVO29CQUN0QyxJQUFNd0IsWUFBWXhCLE1BQU1rQixNQUFNLENBQUNDO29CQUUvQixPQUFPSztnQkFDVCxJQUNBQyxtQkFBbUIsSUFBSSxDQUFDbEMsWUFBWSxDQUFDZ0MsR0FBRyxDQUFDLFNBQUNHLGFBQWdCO29CQUN4RCxJQUFNQyxrQkFBa0JELFlBQVlSLE1BQU0sQ0FBQ0M7b0JBRTNDLE9BQU9RO2dCQUNULElBQ0FDLGtCQUFrQixJQUFJLENBQUNwQyxXQUFXLENBQUMwQixNQUFNLENBQUNDLFNBQzFDN0IsU0FBU2dDLFlBQ1QvQixlQUFla0Msa0JBQ2ZqQyxjQUFjb0MsaUJBQ2RDLE9BQU87b0JBQ0xULE1BQUFBO29CQUNBOUIsUUFBQUE7b0JBQ0FDLGNBQUFBO29CQUNBQyxhQUFBQTtnQkFDRjtnQkFFTixPQUFPcUM7WUFDVDs7OztZQUVPQyxLQUFBQTttQkFBUCxTQUFPQSxTQUFTQyxLQUFLLEVBQUVGLElBQUksRUFBRUcsS0FBSyxFQUFFQyxNQUFNLEVBQUU7Z0JBQzFDLElBQUksQUFBRTNDLFNBQVd1QyxLQUFYdkM7Z0JBRU4sSUFBTWdDLGFBQWFoQyxRQUFTLEdBQUc7Z0JBRS9CQSxTQUFTZ0MsV0FBV0MsR0FBRyxDQUFDLFNBQUNDLFdBQWM7b0JBQ3JDLElBQU1LLFNBQU9MLFdBQ1B4QixRQUFRa0MsY0FBSyxDQUFDSixRQUFRLENBQUNELFFBQU1HLE9BQU9DO29CQUUxQyxPQUFPakM7Z0JBQ1Q7Z0JBRUEsSUFBSSxBQUFFVCxlQUFpQnNDLEtBQWpCdEM7Z0JBRU4sSUFBTWtDLG1CQUFtQmxDLGNBQWUsR0FBRztnQkFFM0NBLGVBQWVrQyxpQkFBaUJGLEdBQUcsQ0FBQyxTQUFDSSxpQkFBb0I7b0JBQ3ZELElBQU1FLFNBQU9GLGlCQUNQRCxjQUFjUyxvQkFBVyxDQUFDTCxRQUFRLENBQUNELFFBQU1HLE9BQU9DO29CQUV0RCxPQUFPUDtnQkFDVDtnQkFFQSxJQUFJLEFBQUVsQyxjQUFnQnFDLEtBQWhCckM7Z0JBRU4sSUFBTW9DLGtCQUFrQnBDLGFBQWMsR0FBRztnQkFFekNxQyxPQUFPRCxpQkFBa0IsR0FBRztnQkFFNUJwQyxjQUFjNEMsb0JBQVcsQ0FBQ04sUUFBUSxDQUFDRCxNQUFNRyxPQUFPQztnQkFFaEQsT0FBTyxJQUFJRixNQUFNekMsUUFBUUMsY0FBY0MsY0FBZSxHQUFHO1lBQzNEOzs7WUFFTzZDLEtBQUFBO21CQUFQLFNBQU9BLHFDQUFxQ04sS0FBSyxFQUFFekMsTUFBTSxFQUFFQyxZQUFZLEVBQUVDLFdBQVcsRUFBRTtnQkFBRSxPQUFPLElBQUl1QyxNQUFNekMsUUFBUUMsY0FBY0M7WUFBYzs7O1dBckgxSEg7O0FBd0hyQixTQUFTaUQsaUJBQWlCWixXQUFXLEVBQUViLFVBQVUsRUFBRUgsYUFBYSxFQUFFO0lBQ2hFLElBQU02QixZQUFZQyxJQUFBQSxZQUFLLEVBQUMzQixZQUFZLFNBQUMwQixXQUFjO1FBQ2pELElBQU1FLGVBQWVGLFVBQVVHLGVBQWUsSUFDeENyQyxnQkFBZ0JrQyxVQUFVSSxnQkFBZ0I7UUFFaEQsSUFBSUYsaUJBQWlCLElBQUksRUFBRTtZQUN6QixJQUFNRyxrQkFBa0JsQixZQUFZbUIsaUJBQWlCLENBQUNKLGNBQWMvQjtZQUVwRSxJQUFJLENBQUNrQyxpQkFBaUI7Z0JBQ3BCLE9BQU8sSUFBSTtZQUNiLENBQUM7UUFDSCxDQUFDO1FBRUQsSUFBSXZDLGtCQUFrQixJQUFJLEVBQUU7WUFDMUIsSUFBTXlDLG1CQUFtQnBCLFlBQVlxQixrQkFBa0IsQ0FBQzFDLGVBQWVLO1lBRXZFLElBQUksQ0FBQ29DLGtCQUFrQjtnQkFDckIsT0FBTyxJQUFJO1lBQ2IsQ0FBQztRQUNILENBQUM7SUFFSCxNQUFNLElBQUk7SUFFVixJQUFNRSxxQkFBc0JULGNBQWMsSUFBSTtJQUU5QyxPQUFPUztBQUNUO0FBRUEsU0FBU0Msa0JBQWtCdkIsV0FBVyxFQUFFYixVQUFVLEVBQUVILGFBQWEsRUFBRTtJQUNqRSxJQUFNd0Msb0JBQW9CeEIsWUFBWXlCLEtBQUssQ0FBQyxTQUFDekIsYUFBZ0I7UUFDM0QsSUFBTXNCLHFCQUFxQlYsaUJBQWlCWixhQUFhYixZQUFZSDtRQUVyRSxJQUFJc0Msb0JBQW9CO1lBQ3RCLE9BQU8sSUFBSTtRQUNiLENBQUM7SUFDSDtJQUVBLE9BQU9FO0FBQ1Q7QUFFQSxTQUFTdEMsaUJBQWlCcEIsV0FBVyxFQUFFYSxhQUFhLEVBQUVLLGFBQWEsRUFBRTtJQUNuRSxJQUFNMEMseUJBQXlCNUQsWUFBWXVELGtCQUFrQixDQUFDMUMsZUFBZUssZ0JBQ3ZFQyxxQkFBcUJ5Qyx3QkFBd0IsR0FBRztJQUV0RCxPQUFPekM7QUFDVDtBQUVBLFNBQVNNLGdDQUFnQzFCLFlBQVksRUFBRUMsV0FBVyxFQUFFcUIsVUFBVSxFQUFFUixhQUFhLEVBQUU7SUFDN0YsSUFBSVcsK0JBQStCLEtBQUs7SUFFeEMsSUFBTU4sZ0JBQWdCLEVBQUUsRUFDbEJ3QyxvQkFBb0JELGtCQUFrQjFELGNBQWNzQixZQUFZSDtJQUV0RSxJQUFJd0MsbUJBQW1CO1FBQ3JCLElBQU12QyxxQkFBcUJDLGlCQUFpQnBCLGFBQWFhLGVBQWVLO1FBRXhFTSwrQkFBK0JMLG9CQUFxQixHQUFHO0lBQ3pELENBQUM7SUFFRCxPQUFPSztBQUNUIn0=