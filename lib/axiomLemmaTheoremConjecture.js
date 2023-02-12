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
    function AxiomLemmaTheoremConjecture(labels, suppositions, consequence, proofContext) {
        _classCallCheck(this, AxiomLemmaTheoremConjecture);
        this.labels = labels;
        this.suppositions = suppositions;
        this.consequence = consequence;
        this.proofContext = proofContext;
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
            key: "getProofContext",
            value: function getProofContext() {
                return this.proofContext;
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
            value: function matchStatement(statementNode, statementProofContext) {
                var _this = this;
                var statementNatches;
                var suppositionsLength = this.suppositions.length;
                if (suppositionsLength === 0) {
                    var substitutions = [], consequenceMatches = matchConsequence(this.consequence, statementNode, substitutions, this.proofContext, statementProofContext);
                    statementNatches = consequenceMatches; ///
                } else {
                    var proofSteps = statementProofContext.getProofSteps();
                    statementNatches = (0, _array.someSubArray)(proofSteps, suppositionsLength, function(proofSteps) {
                        var suppositionsMatchConsequence = false;
                        var substitutions = [], suppositionsMatch = matchSuppositions(_this.suppositions, proofSteps, substitutions, _this.proofContext, statementProofContext);
                        if (suppositionsMatch) {
                            var consequenceMatches = matchConsequence(_this.consequence, statementNode, substitutions, _this.proofContext, statementProofContext);
                            suppositionsMatchConsequence = consequenceMatches; ///
                        }
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
                var labelsJSON = this.labels.map(function(label) {
                    var labelJSON = label.toJSON(tokens);
                    return labelJSON;
                }), suppositionsJSON = this.suppositions.map(function(supposition) {
                    var suppositionJSON = supposition.toJSON(tokens);
                    return suppositionJSON;
                }), consequenceJSON = this.consequence.toJSON(tokens), labels = labelsJSON, suppositions = suppositionsJSON, consequence = consequenceJSON, json = {
                    labels: labels,
                    suppositions: suppositions,
                    consequence: consequence
                };
                return json;
            }
        }
    ], [
        {
            key: "fromJSONAndFileContext",
            value: function fromJSONAndFileContext(Class, json, fileContext) {
                var labels = json.labels;
                var labelsJSON = labels; ///
                labels = labelsJSON.map(function(labelJSON) {
                    var _$json = labelJSON, label = _label.default.fromJSONAndFileContext(_$json, fileContext);
                    return label;
                });
                var suppositions = json.suppositions;
                var suppositionsJSON = suppositions; ///
                suppositions = suppositionsJSON.map(function(suppositionJSON) {
                    var _$json = suppositionJSON, supposition = _supposition.default.fromJSONAndFileContext(_$json, fileContext);
                    return supposition;
                });
                var consequence = json.consequence;
                var consequenceJSON = consequence; ///
                json = consequenceJSON; ///
                consequence = _consequence.default.fromJSONAndFileContext(json, fileContext);
                return new Class(labels, suppositions, consequence); ///
            }
        },
        {
            key: "fromLabelsSuppositionsConsequenceAndProofContext",
            value: function fromLabelsSuppositionsConsequenceAndProofContext(Class, labels, suppositions, consequence, proofContext) {
                return new Class(labels, suppositions, consequence, proofContext);
            }
        }
    ]);
    return AxiomLemmaTheoremConjecture;
}();
function matchSupposition(supposition, proofSteps, substitutions, proofContext, statementProofContext) {
    var proofStep = (0, _array.prune)(proofSteps, function(proofStep) {
        var subproofNode = proofStep.getSubproofNode(), statementNode = proofStep.getStatementNode();
        if (subproofNode !== null) {
            var subProofMatches = supposition.matchSubproofNode(subproofNode, substitutions, proofContext, statementProofContext);
            if (!subProofMatches) {
                return true;
            }
        }
        if (statementNode !== null) {
            var statementMatches = supposition.matchStatementNode(statementNode, substitutions, proofContext, statementProofContext);
            if (!statementMatches) {
                return true;
            }
        }
    }) || null;
    var suppositionMatches = proofStep !== null;
    return suppositionMatches;
}
function matchSuppositions(supposition, proofSteps, substitutions, proofContext, statementProofContext) {
    var suppositionsMatch = supposition.every(function(supposition) {
        var suppositionMatches = matchSupposition(supposition, proofSteps, substitutions, proofContext, statementProofContext);
        if (suppositionMatches) {
            return true;
        }
    });
    return suppositionsMatch;
}
function matchConsequence(consequence, statementNode, substitutions, proofContext, statementProofContext) {
    var nonTerminalNodeMatches = consequence.matchStatementNode(statementNode, substitutions, proofContext, statementProofContext), consequenceMatches = nonTerminalNodeMatches; ///
    return consequenceMatches;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9heGlvbUxlbW1hVGhlb3JlbUNvbmplY3R1cmUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBMYWJlbCBmcm9tIFwiLi9sYWJlbFwiO1xuaW1wb3J0IFN1cHBvc2l0aW9uIGZyb20gXCIuL3N1cHBvc2l0aW9uXCI7XG5pbXBvcnQgQ29uc2VxdWVuY2UgZnJvbSBcIi4vY29uc2VxdWVuY2VcIjtcblxuaW1wb3J0IHsgcHJ1bmUgfSBmcm9tIFwiLi91dGlsaXRpZXMvYXJyYXlcIjtcbmltcG9ydCB7IHNvbWVTdWJBcnJheSB9IGZyb20gXCIuL3V0aWxpdGllcy9hcnJheVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBeGlvbUxlbW1hVGhlb3JlbUNvbmplY3R1cmUge1xuICBjb25zdHJ1Y3RvcihsYWJlbHMsIHN1cHBvc2l0aW9ucywgY29uc2VxdWVuY2UsIHByb29mQ29udGV4dCkge1xuICAgIHRoaXMubGFiZWxzID0gbGFiZWxzO1xuICAgIHRoaXMuc3VwcG9zaXRpb25zID0gc3VwcG9zaXRpb25zO1xuICAgIHRoaXMuY29uc2VxdWVuY2UgPSBjb25zZXF1ZW5jZTtcbiAgICB0aGlzLnByb29mQ29udGV4dCA9IHByb29mQ29udGV4dDtcbiAgfVxuXG4gIGdldExhYmVscygpIHtcbiAgICByZXR1cm4gdGhpcy5sYWJlbHM7XG4gIH1cblxuICBnZXRTdXBwb3NpdGlvbnMoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3VwcG9zaXRpb25zO1xuICB9XG5cbiAgZ2V0Q29uc2VxdWVuY2UoKSB7XG4gICAgcmV0dXJuIHRoaXMuY29uc2VxdWVuY2U7XG4gIH1cblxuICBnZXRQcm9vZkNvbnRleHQoKSB7XG4gICAgcmV0dXJuIHRoaXMucHJvb2ZDb250ZXh0O1xuICB9XG5cbiAgbWF0Y2hMYWJlbE5hbWUobGFiZWxOYW1lKSB7XG4gICAgY29uc3QgbWF0Y2hlc0xhYmVsTmFtZSA9IHRoaXMubGFiZWxzLnNvbWUoKGxhYmVsKSA9PiB7XG4gICAgICBjb25zdCBuYW1lID0gbGFiZWxOYW1lLCAvLy9cbiAgICAgICAgICAgIGxhYmVsTWF0Y2hlc05hbWUgPSBsYWJlbC5tYXRjaE5hbWUobmFtZSk7XG5cbiAgICAgIGlmIChsYWJlbE1hdGNoZXNOYW1lKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIG1hdGNoZXNMYWJlbE5hbWU7XG4gIH1cblxuICBtYXRjaFN0YXRlbWVudChzdGF0ZW1lbnROb2RlLCBzdGF0ZW1lbnRQcm9vZkNvbnRleHQpIHtcbiAgICBsZXQgc3RhdGVtZW50TmF0Y2hlcztcblxuICAgIGNvbnN0IHN1cHBvc2l0aW9uc0xlbmd0aCA9IHRoaXMuc3VwcG9zaXRpb25zLmxlbmd0aDtcblxuICAgIGlmIChzdXBwb3NpdGlvbnNMZW5ndGggPT09IDApIHtcbiAgICAgIGNvbnN0IHN1YnN0aXR1dGlvbnMgPSBbXSxcbiAgICAgICAgICAgIGNvbnNlcXVlbmNlTWF0Y2hlcyA9IG1hdGNoQ29uc2VxdWVuY2UodGhpcy5jb25zZXF1ZW5jZSwgc3RhdGVtZW50Tm9kZSwgc3Vic3RpdHV0aW9ucywgdGhpcy5wcm9vZkNvbnRleHQsIHN0YXRlbWVudFByb29mQ29udGV4dCk7XG5cbiAgICAgIHN0YXRlbWVudE5hdGNoZXMgPSBjb25zZXF1ZW5jZU1hdGNoZXM7IC8vL1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBwcm9vZlN0ZXBzID0gc3RhdGVtZW50UHJvb2ZDb250ZXh0LmdldFByb29mU3RlcHMoKTtcblxuICAgICAgc3RhdGVtZW50TmF0Y2hlcyA9IHNvbWVTdWJBcnJheShwcm9vZlN0ZXBzLCBzdXBwb3NpdGlvbnNMZW5ndGgsIChwcm9vZlN0ZXBzKSA9PiB7XG4gICAgICAgIGxldCBzdXBwb3NpdGlvbnNNYXRjaENvbnNlcXVlbmNlID0gZmFsc2U7XG5cbiAgICAgICAgY29uc3Qgc3Vic3RpdHV0aW9ucyA9IFtdLFxuICAgICAgICAgICAgICBzdXBwb3NpdGlvbnNNYXRjaCA9IG1hdGNoU3VwcG9zaXRpb25zKHRoaXMuc3VwcG9zaXRpb25zLCBwcm9vZlN0ZXBzLCBzdWJzdGl0dXRpb25zLCB0aGlzLnByb29mQ29udGV4dCwgc3RhdGVtZW50UHJvb2ZDb250ZXh0KTtcblxuICAgICAgICBpZiAoc3VwcG9zaXRpb25zTWF0Y2gpIHtcbiAgICAgICAgICBjb25zdCBjb25zZXF1ZW5jZU1hdGNoZXMgPSBtYXRjaENvbnNlcXVlbmNlKHRoaXMuY29uc2VxdWVuY2UsIHN0YXRlbWVudE5vZGUsIHN1YnN0aXR1dGlvbnMsIHRoaXMucHJvb2ZDb250ZXh0LCBzdGF0ZW1lbnRQcm9vZkNvbnRleHQpO1xuXG4gICAgICAgICAgc3VwcG9zaXRpb25zTWF0Y2hDb25zZXF1ZW5jZSA9IGNvbnNlcXVlbmNlTWF0Y2hlczsgIC8vL1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHN1cHBvc2l0aW9uc01hdGNoQ29uc2VxdWVuY2UpIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN0YXRlbWVudE5hdGNoZXM7XG4gIH1cblxuICB0b0pTT04odG9rZW5zKSB7XG4gICAgY29uc3QgbGFiZWxzSlNPTiA9IHRoaXMubGFiZWxzLm1hcCgobGFiZWwpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGxhYmVsSlNPTiA9IGxhYmVsLnRvSlNPTih0b2tlbnMpO1xuXG4gICAgICAgICAgICByZXR1cm4gbGFiZWxKU09OO1xuICAgICAgICAgIH0pLFxuICAgICAgICAgIHN1cHBvc2l0aW9uc0pTT04gPSB0aGlzLnN1cHBvc2l0aW9ucy5tYXAoKHN1cHBvc2l0aW9uKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBzdXBwb3NpdGlvbkpTT04gPSBzdXBwb3NpdGlvbi50b0pTT04odG9rZW5zKTtcblxuICAgICAgICAgICAgcmV0dXJuIHN1cHBvc2l0aW9uSlNPTjtcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBjb25zZXF1ZW5jZUpTT04gPSB0aGlzLmNvbnNlcXVlbmNlLnRvSlNPTih0b2tlbnMpLFxuICAgICAgICAgIGxhYmVscyA9IGxhYmVsc0pTT04sICAvLy9cbiAgICAgICAgICBzdXBwb3NpdGlvbnMgPSBzdXBwb3NpdGlvbnNKU09OLCAgLy8vXG4gICAgICAgICAgY29uc2VxdWVuY2UgPSBjb25zZXF1ZW5jZUpTT04sICAvLy9cbiAgICAgICAgICBqc29uID0ge1xuICAgICAgICAgICAgbGFiZWxzLFxuICAgICAgICAgICAgc3VwcG9zaXRpb25zLFxuICAgICAgICAgICAgY29uc2VxdWVuY2VcbiAgICAgICAgICB9O1xuXG4gICAgcmV0dXJuIGpzb247XG4gIH1cblxuICBzdGF0aWMgZnJvbUpTT05BbmRGaWxlQ29udGV4dChDbGFzcywganNvbiwgZmlsZUNvbnRleHQpIHtcbiAgICBsZXQgeyBsYWJlbHMgfSA9IGpzb247XG5cbiAgICBjb25zdCBsYWJlbHNKU09OID0gbGFiZWxzOyAgLy8vXG5cbiAgICBsYWJlbHMgPSBsYWJlbHNKU09OLm1hcCgobGFiZWxKU09OKSA9PiB7XG4gICAgICBjb25zdCBqc29uID0gbGFiZWxKU09OLCAvLy9cbiAgICAgICAgICAgIGxhYmVsID0gTGFiZWwuZnJvbUpTT05BbmRGaWxlQ29udGV4dChqc29uLCBmaWxlQ29udGV4dCk7XG5cbiAgICAgIHJldHVybiBsYWJlbDtcbiAgICB9KTtcblxuICAgIGxldCB7IHN1cHBvc2l0aW9ucyB9ID0ganNvbjtcblxuICAgIGNvbnN0IHN1cHBvc2l0aW9uc0pTT04gPSBzdXBwb3NpdGlvbnM7ICAvLy9cblxuICAgIHN1cHBvc2l0aW9ucyA9IHN1cHBvc2l0aW9uc0pTT04ubWFwKChzdXBwb3NpdGlvbkpTT04pID0+IHtcbiAgICAgIGNvbnN0IGpzb24gPSBzdXBwb3NpdGlvbkpTT04sIC8vL1xuICAgICAgICAgICAgc3VwcG9zaXRpb24gPSBTdXBwb3NpdGlvbi5mcm9tSlNPTkFuZEZpbGVDb250ZXh0KGpzb24sIGZpbGVDb250ZXh0KTtcblxuICAgICAgcmV0dXJuIHN1cHBvc2l0aW9uO1xuICAgIH0pO1xuXG4gICAgbGV0IHsgY29uc2VxdWVuY2UgfSA9IGpzb247XG5cbiAgICBjb25zdCBjb25zZXF1ZW5jZUpTT04gPSBjb25zZXF1ZW5jZTsgIC8vL1xuXG4gICAganNvbiA9IGNvbnNlcXVlbmNlSlNPTjsgIC8vL1xuXG4gICAgY29uc2VxdWVuY2UgPSBDb25zZXF1ZW5jZS5mcm9tSlNPTkFuZEZpbGVDb250ZXh0KGpzb24sIGZpbGVDb250ZXh0KTtcblxuICAgIHJldHVybiBuZXcgQ2xhc3MobGFiZWxzLCBzdXBwb3NpdGlvbnMsIGNvbnNlcXVlbmNlKTsgIC8vL1xuICB9XG5cbiAgc3RhdGljIGZyb21MYWJlbHNTdXBwb3NpdGlvbnNDb25zZXF1ZW5jZUFuZFByb29mQ29udGV4dChDbGFzcywgbGFiZWxzLCBzdXBwb3NpdGlvbnMsIGNvbnNlcXVlbmNlLCBwcm9vZkNvbnRleHQpIHsgcmV0dXJuIG5ldyBDbGFzcyhsYWJlbHMsIHN1cHBvc2l0aW9ucywgY29uc2VxdWVuY2UsIHByb29mQ29udGV4dCk7IH1cbn1cblxuZnVuY3Rpb24gbWF0Y2hTdXBwb3NpdGlvbihzdXBwb3NpdGlvbiwgcHJvb2ZTdGVwcywgc3Vic3RpdHV0aW9ucywgcHJvb2ZDb250ZXh0LCBzdGF0ZW1lbnRQcm9vZkNvbnRleHQpIHtcbiAgY29uc3QgcHJvb2ZTdGVwID0gcHJ1bmUocHJvb2ZTdGVwcywgKHByb29mU3RlcCkgPT4ge1xuICAgIGNvbnN0IHN1YnByb29mTm9kZSA9IHByb29mU3RlcC5nZXRTdWJwcm9vZk5vZGUoKSxcbiAgICAgICAgICBzdGF0ZW1lbnROb2RlID0gcHJvb2ZTdGVwLmdldFN0YXRlbWVudE5vZGUoKTtcblxuICAgIGlmIChzdWJwcm9vZk5vZGUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHN1YlByb29mTWF0Y2hlcyA9IHN1cHBvc2l0aW9uLm1hdGNoU3VicHJvb2ZOb2RlKHN1YnByb29mTm9kZSwgc3Vic3RpdHV0aW9ucywgcHJvb2ZDb250ZXh0LCBzdGF0ZW1lbnRQcm9vZkNvbnRleHQpO1xuXG4gICAgICBpZiAoIXN1YlByb29mTWF0Y2hlcykgeyAgLy8vXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChzdGF0ZW1lbnROb2RlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBzdGF0ZW1lbnRNYXRjaGVzID0gc3VwcG9zaXRpb24ubWF0Y2hTdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUsIHN1YnN0aXR1dGlvbnMsIHByb29mQ29udGV4dCwgc3RhdGVtZW50UHJvb2ZDb250ZXh0KTtcblxuICAgICAgaWYgKCFzdGF0ZW1lbnRNYXRjaGVzKSB7ICAvLy9cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gIH0pIHx8IG51bGw7XG5cbiAgY29uc3Qgc3VwcG9zaXRpb25NYXRjaGVzID0gKHByb29mU3RlcCAhPT0gbnVsbCk7XG5cbiAgcmV0dXJuIHN1cHBvc2l0aW9uTWF0Y2hlcztcbn1cblxuZnVuY3Rpb24gbWF0Y2hTdXBwb3NpdGlvbnMoc3VwcG9zaXRpb24sIHByb29mU3RlcHMsIHN1YnN0aXR1dGlvbnMsIHByb29mQ29udGV4dCwgc3RhdGVtZW50UHJvb2ZDb250ZXh0KSB7XG4gIGNvbnN0IHN1cHBvc2l0aW9uc01hdGNoID0gc3VwcG9zaXRpb24uZXZlcnkoKHN1cHBvc2l0aW9uKSA9PiB7XG4gICAgY29uc3Qgc3VwcG9zaXRpb25NYXRjaGVzID0gbWF0Y2hTdXBwb3NpdGlvbihzdXBwb3NpdGlvbiwgcHJvb2ZTdGVwcywgc3Vic3RpdHV0aW9ucywgcHJvb2ZDb250ZXh0LCBzdGF0ZW1lbnRQcm9vZkNvbnRleHQpO1xuXG4gICAgaWYgKHN1cHBvc2l0aW9uTWF0Y2hlcykge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gc3VwcG9zaXRpb25zTWF0Y2g7XG59XG5cbmZ1bmN0aW9uIG1hdGNoQ29uc2VxdWVuY2UoY29uc2VxdWVuY2UsIHN0YXRlbWVudE5vZGUsIHN1YnN0aXR1dGlvbnMsIHByb29mQ29udGV4dCwgc3RhdGVtZW50UHJvb2ZDb250ZXh0KSB7XG4gIGNvbnN0IG5vblRlcm1pbmFsTm9kZU1hdGNoZXMgPSBjb25zZXF1ZW5jZS5tYXRjaFN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSwgc3Vic3RpdHV0aW9ucywgcHJvb2ZDb250ZXh0LCBzdGF0ZW1lbnRQcm9vZkNvbnRleHQpLFxuICAgICAgICBjb25zZXF1ZW5jZU1hdGNoZXMgPSBub25UZXJtaW5hbE5vZGVNYXRjaGVzOyAvLy9cblxuICByZXR1cm4gY29uc2VxdWVuY2VNYXRjaGVzO1xufVxuIl0sIm5hbWVzIjpbIkF4aW9tTGVtbWFUaGVvcmVtQ29uamVjdHVyZSIsImxhYmVscyIsInN1cHBvc2l0aW9ucyIsImNvbnNlcXVlbmNlIiwicHJvb2ZDb250ZXh0IiwiZ2V0TGFiZWxzIiwiZ2V0U3VwcG9zaXRpb25zIiwiZ2V0Q29uc2VxdWVuY2UiLCJnZXRQcm9vZkNvbnRleHQiLCJtYXRjaExhYmVsTmFtZSIsImxhYmVsTmFtZSIsIm1hdGNoZXNMYWJlbE5hbWUiLCJzb21lIiwibGFiZWwiLCJuYW1lIiwibGFiZWxNYXRjaGVzTmFtZSIsIm1hdGNoTmFtZSIsIm1hdGNoU3RhdGVtZW50Iiwic3RhdGVtZW50Tm9kZSIsInN0YXRlbWVudFByb29mQ29udGV4dCIsInN0YXRlbWVudE5hdGNoZXMiLCJzdXBwb3NpdGlvbnNMZW5ndGgiLCJsZW5ndGgiLCJzdWJzdGl0dXRpb25zIiwiY29uc2VxdWVuY2VNYXRjaGVzIiwibWF0Y2hDb25zZXF1ZW5jZSIsInByb29mU3RlcHMiLCJnZXRQcm9vZlN0ZXBzIiwic29tZVN1YkFycmF5Iiwic3VwcG9zaXRpb25zTWF0Y2hDb25zZXF1ZW5jZSIsInN1cHBvc2l0aW9uc01hdGNoIiwibWF0Y2hTdXBwb3NpdGlvbnMiLCJ0b0pTT04iLCJ0b2tlbnMiLCJsYWJlbHNKU09OIiwibWFwIiwibGFiZWxKU09OIiwic3VwcG9zaXRpb25zSlNPTiIsInN1cHBvc2l0aW9uIiwic3VwcG9zaXRpb25KU09OIiwiY29uc2VxdWVuY2VKU09OIiwianNvbiIsImZyb21KU09OQW5kRmlsZUNvbnRleHQiLCJDbGFzcyIsImZpbGVDb250ZXh0IiwiTGFiZWwiLCJTdXBwb3NpdGlvbiIsIkNvbnNlcXVlbmNlIiwiZnJvbUxhYmVsc1N1cHBvc2l0aW9uc0NvbnNlcXVlbmNlQW5kUHJvb2ZDb250ZXh0IiwibWF0Y2hTdXBwb3NpdGlvbiIsInByb29mU3RlcCIsInBydW5lIiwic3VicHJvb2ZOb2RlIiwiZ2V0U3VicHJvb2ZOb2RlIiwiZ2V0U3RhdGVtZW50Tm9kZSIsInN1YlByb29mTWF0Y2hlcyIsIm1hdGNoU3VicHJvb2ZOb2RlIiwic3RhdGVtZW50TWF0Y2hlcyIsIm1hdGNoU3RhdGVtZW50Tm9kZSIsInN1cHBvc2l0aW9uTWF0Y2hlcyIsImV2ZXJ5Iiwibm9uVGVybWluYWxOb2RlTWF0Y2hlcyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFTcUJBOzs7MERBUEg7Z0VBQ007Z0VBQ0E7cUJBRUY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFHUCxJQUFBLEFBQU1BLDRDQW9JbEIsQUFwSVk7YUFBTUEsNEJBQ1BDLE1BQU0sRUFBRUMsWUFBWSxFQUFFQyxXQUFXLEVBQUVDLFlBQVk7OEJBRHhDSjtRQUVqQixJQUFJLENBQUNDLE1BQU0sR0FBR0E7UUFDZCxJQUFJLENBQUNDLFlBQVksR0FBR0E7UUFDcEIsSUFBSSxDQUFDQyxXQUFXLEdBQUdBO1FBQ25CLElBQUksQ0FBQ0MsWUFBWSxHQUFHQTs7aUJBTEhKOztZQVFuQkssS0FBQUE7bUJBQUFBLFNBQUFBLFlBQVk7Z0JBQ1YsT0FBTyxJQUFJLENBQUNKLE1BQU07WUFDcEI7OztZQUVBSyxLQUFBQTttQkFBQUEsU0FBQUEsa0JBQWtCO2dCQUNoQixPQUFPLElBQUksQ0FBQ0osWUFBWTtZQUMxQjs7O1lBRUFLLEtBQUFBO21CQUFBQSxTQUFBQSxpQkFBaUI7Z0JBQ2YsT0FBTyxJ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