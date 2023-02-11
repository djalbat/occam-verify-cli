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
                        var substitutions = [], suppositionsMatchConsequence = matchSuppositionsAndConsequence(_this.suppositions, _this.consequence, statementNode, proofSteps, substitutions, _this.proofContext, statementProofContext);
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
function matchSuppositionsAndConsequence(suppositions, consequence, statementNode, proofSteps, substitutions, proofContext, statementProofContext) {
    var suppositionsMatchConsequence = false;
    var suppositionsMatch = matchSuppositions(suppositions, proofSteps, substitutions, proofContext, statementProofContext);
    if (suppositionsMatch) {
        var consequenceMatches = matchConsequence(consequence, statementNode, substitutions, proofContext, statementProofContext);
        suppositionsMatchConsequence = consequenceMatches; ///
    }
    return suppositionsMatchConsequence;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9heGlvbUxlbW1hVGhlb3JlbUNvbmplY3R1cmUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBMYWJlbCBmcm9tIFwiLi9sYWJlbFwiO1xuaW1wb3J0IFN1cHBvc2l0aW9uIGZyb20gXCIuL3N1cHBvc2l0aW9uXCI7XG5pbXBvcnQgQ29uc2VxdWVuY2UgZnJvbSBcIi4vY29uc2VxdWVuY2VcIjtcblxuaW1wb3J0IHsgcHJ1bmUgfSBmcm9tIFwiLi91dGlsaXRpZXMvYXJyYXlcIjtcbmltcG9ydCB7IHNvbWVTdWJBcnJheSB9IGZyb20gXCIuL3V0aWxpdGllcy9hcnJheVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBeGlvbUxlbW1hVGhlb3JlbUNvbmplY3R1cmUge1xuICBjb25zdHJ1Y3RvcihsYWJlbHMsIHN1cHBvc2l0aW9ucywgY29uc2VxdWVuY2UsIHByb29mQ29udGV4dCkge1xuICAgIHRoaXMubGFiZWxzID0gbGFiZWxzO1xuICAgIHRoaXMuc3VwcG9zaXRpb25zID0gc3VwcG9zaXRpb25zO1xuICAgIHRoaXMuY29uc2VxdWVuY2UgPSBjb25zZXF1ZW5jZTtcbiAgICB0aGlzLnByb29mQ29udGV4dCA9IHByb29mQ29udGV4dDtcbiAgfVxuXG4gIGdldExhYmVscygpIHtcbiAgICByZXR1cm4gdGhpcy5sYWJlbHM7XG4gIH1cblxuICBnZXRTdXBwb3NpdGlvbnMoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3VwcG9zaXRpb25zO1xuICB9XG5cbiAgZ2V0Q29uc2VxdWVuY2UoKSB7XG4gICAgcmV0dXJuIHRoaXMuY29uc2VxdWVuY2U7XG4gIH1cblxuICBnZXRQcm9vZkNvbnRleHQoKSB7XG4gICAgcmV0dXJuIHRoaXMucHJvb2ZDb250ZXh0O1xuICB9XG5cbiAgbWF0Y2hMYWJlbE5hbWUobGFiZWxOYW1lKSB7XG4gICAgY29uc3QgbWF0Y2hlc0xhYmVsTmFtZSA9IHRoaXMubGFiZWxzLnNvbWUoKGxhYmVsKSA9PiB7XG4gICAgICBjb25zdCBuYW1lID0gbGFiZWxOYW1lLCAvLy9cbiAgICAgICAgICAgIGxhYmVsTWF0Y2hlc05hbWUgPSBsYWJlbC5tYXRjaE5hbWUobmFtZSk7XG5cbiAgICAgIGlmIChsYWJlbE1hdGNoZXNOYW1lKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIG1hdGNoZXNMYWJlbE5hbWU7XG4gIH1cblxuICBtYXRjaFN0YXRlbWVudChzdGF0ZW1lbnROb2RlLCBzdGF0ZW1lbnRQcm9vZkNvbnRleHQpIHtcbiAgICBsZXQgc3RhdGVtZW50TmF0Y2hlcztcblxuICAgIGNvbnN0IHN1cHBvc2l0aW9uc0xlbmd0aCA9IHRoaXMuc3VwcG9zaXRpb25zLmxlbmd0aDtcblxuICAgIGlmIChzdXBwb3NpdGlvbnNMZW5ndGggPT09IDApIHtcbiAgICAgIGNvbnN0IHN1YnN0aXR1dGlvbnMgPSBbXSxcbiAgICAgICAgICAgIGNvbnNlcXVlbmNlTWF0Y2hlcyA9IG1hdGNoQ29uc2VxdWVuY2UodGhpcy5jb25zZXF1ZW5jZSwgc3RhdGVtZW50Tm9kZSwgc3Vic3RpdHV0aW9ucywgdGhpcy5wcm9vZkNvbnRleHQsIHN0YXRlbWVudFByb29mQ29udGV4dCk7XG5cbiAgICAgIHN0YXRlbWVudE5hdGNoZXMgPSBjb25zZXF1ZW5jZU1hdGNoZXM7IC8vL1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBwcm9vZlN0ZXBzID0gc3RhdGVtZW50UHJvb2ZDb250ZXh0LmdldFByb29mU3RlcHMoKTtcblxuICAgICAgc3RhdGVtZW50TmF0Y2hlcyA9IHNvbWVTdWJBcnJheShwcm9vZlN0ZXBzLCBzdXBwb3NpdGlvbnNMZW5ndGgsIChwcm9vZlN0ZXBzKSA9PiB7XG4gICAgICAgIGNvbnN0IHN1YnN0aXR1dGlvbnMgPSBbXSxcbiAgICAgICAgICAgICAgc3VwcG9zaXRpb25zTWF0Y2hDb25zZXF1ZW5jZSA9IG1hdGNoU3VwcG9zaXRpb25zQW5kQ29uc2VxdWVuY2UodGhpcy5zdXBwb3NpdGlvbnMsIHRoaXMuY29uc2VxdWVuY2UsIHN0YXRlbWVudE5vZGUsIHByb29mU3RlcHMsIHN1YnN0aXR1dGlvbnMsIHRoaXMucHJvb2ZDb250ZXh0LCBzdGF0ZW1lbnRQcm9vZkNvbnRleHQpO1xuXG4gICAgICAgIGlmIChzdXBwb3NpdGlvbnNNYXRjaENvbnNlcXVlbmNlKSB7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBzdGF0ZW1lbnROYXRjaGVzO1xuICB9XG5cbiAgdG9KU09OKHRva2Vucykge1xuICAgIGNvbnN0IHsga2luZCB9ID0gdGhpcy5jb25zdHJ1Y3RvcixcbiAgICAgICAgICBsYWJlbHNKU09OID0gdGhpcy5sYWJlbHMubWFwKChsYWJlbCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgbGFiZWxKU09OID0gbGFiZWwudG9KU09OKHRva2Vucyk7XG5cbiAgICAgICAgICAgIHJldHVybiBsYWJlbEpTT047XG4gICAgICAgICAgfSksXG4gICAgICAgICAgc3VwcG9zaXRpb25zSlNPTiA9IHRoaXMuc3VwcG9zaXRpb25zLm1hcCgoc3VwcG9zaXRpb24pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHN1cHBvc2l0aW9uSlNPTiA9IHN1cHBvc2l0aW9uLnRvSlNPTih0b2tlbnMpO1xuXG4gICAgICAgICAgICByZXR1cm4gc3VwcG9zaXRpb25KU09OO1xuICAgICAgICAgIH0pLFxuICAgICAgICAgIGNvbnNlcXVlbmNlSlNPTiA9IHRoaXMuY29uc2VxdWVuY2UudG9KU09OKHRva2VucyksXG4gICAgICAgICAgbGFiZWxzID0gbGFiZWxzSlNPTiwgIC8vL1xuICAgICAgICAgIHN1cHBvc2l0aW9ucyA9IHN1cHBvc2l0aW9uc0pTT04sICAvLy9cbiAgICAgICAgICBjb25zZXF1ZW5jZSA9IGNvbnNlcXVlbmNlSlNPTiwgIC8vL1xuICAgICAgICAgIGpzb24gPSB7XG4gICAgICAgICAgICBraW5kLFxuICAgICAgICAgICAgbGFiZWxzLFxuICAgICAgICAgICAgc3VwcG9zaXRpb25zLFxuICAgICAgICAgICAgY29uc2VxdWVuY2VcbiAgICAgICAgICB9O1xuXG4gICAgcmV0dXJuIGpzb247XG4gIH1cblxuICBzdGF0aWMgZnJvbUpTT04oQ2xhc3MsIGpzb24sIGNvbnRleHQpIHtcbiAgICBsZXQgeyBsYWJlbHMgfSA9IGpzb247XG5cbiAgICBjb25zdCBsYWJlbHNKU09OID0gbGFiZWxzOyAgLy8vXG5cbiAgICBsYWJlbHMgPSBsYWJlbHNKU09OLm1hcCgobGFiZWxKU09OKSA9PiB7XG4gICAgICBjb25zdCBqc29uID0gbGFiZWxKU09OLCAvLy9cbiAgICAgICAgICAgIGxhYmVsID0gTGFiZWwuZnJvbUpTT04oanNvbiwgY29udGV4dCk7XG5cbiAgICAgIHJldHVybiBsYWJlbDtcbiAgICB9KTtcblxuICAgIGxldCB7IHN1cHBvc2l0aW9ucyB9ID0ganNvbjtcblxuICAgIGNvbnN0IHN1cHBvc2l0aW9uc0pTT04gPSBzdXBwb3NpdGlvbnM7ICAvLy9cblxuICAgIHN1cHBvc2l0aW9ucyA9IHN1cHBvc2l0aW9uc0pTT04ubWFwKChzdXBwb3NpdGlvbkpTT04pID0+IHtcbiAgICAgIGNvbnN0IGpzb24gPSBzdXBwb3NpdGlvbkpTT04sIC8vL1xuICAgICAgICAgICAgc3VwcG9zaXRpb24gPSBTdXBwb3NpdGlvbi5mcm9tSlNPTihqc29uLCBjb250ZXh0KTtcblxuICAgICAgcmV0dXJuIHN1cHBvc2l0aW9uO1xuICAgIH0pO1xuXG4gICAgbGV0IHsgY29uc2VxdWVuY2UgfSA9IGpzb247XG5cbiAgICBjb25zdCBjb25zZXF1ZW5jZUpTT04gPSBjb25zZXF1ZW5jZTsgIC8vL1xuXG4gICAganNvbiA9IGNvbnNlcXVlbmNlSlNPTjsgIC8vL1xuXG4gICAgY29uc2VxdWVuY2UgPSBDb25zZXF1ZW5jZS5mcm9tSlNPTihqc29uLCBjb250ZXh0KTtcblxuICAgIHJldHVybiBuZXcgQ2xhc3MobGFiZWxzLCBzdXBwb3NpdGlvbnMsIGNvbnNlcXVlbmNlKTsgIC8vL1xuICB9XG5cbiAgc3RhdGljIGZyb21MYWJlbHNTdXBwb3NpdGlvbnNDb25zZXF1ZW5jZUFuZFByb29mQ29udGV4dChDbGFzcywgbGFiZWxzLCBzdXBwb3NpdGlvbnMsIGNvbnNlcXVlbmNlLCBwcm9vZkNvbnRleHQpIHsgcmV0dXJuIG5ldyBDbGFzcyhsYWJlbHMsIHN1cHBvc2l0aW9ucywgY29uc2VxdWVuY2UsIHByb29mQ29udGV4dCk7IH1cbn1cblxuZnVuY3Rpb24gbWF0Y2hTdXBwb3NpdGlvbihzdXBwb3NpdGlvbiwgcHJvb2ZTdGVwcywgc3Vic3RpdHV0aW9ucywgcHJvb2ZDb250ZXh0LCBzdGF0ZW1lbnRQcm9vZkNvbnRleHQpIHtcbiAgY29uc3QgcHJvb2ZTdGVwID0gcHJ1bmUocHJvb2ZTdGVwcywgKHByb29mU3RlcCkgPT4ge1xuICAgIGNvbnN0IHN1YnByb29mTm9kZSA9IHByb29mU3RlcC5nZXRTdWJwcm9vZk5vZGUoKSxcbiAgICAgICAgICBzdGF0ZW1lbnROb2RlID0gcHJvb2ZTdGVwLmdldFN0YXRlbWVudE5vZGUoKTtcblxuICAgIGlmIChzdWJwcm9vZk5vZGUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHN1YlByb29mTWF0Y2hlcyA9IHN1cHBvc2l0aW9uLm1hdGNoU3VicHJvb2ZOb2RlKHN1YnByb29mTm9kZSwgc3Vic3RpdHV0aW9ucywgcHJvb2ZDb250ZXh0LCBzdGF0ZW1lbnRQcm9vZkNvbnRleHQpO1xuXG4gICAgICBpZiAoIXN1YlByb29mTWF0Y2hlcykgeyAgLy8vXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChzdGF0ZW1lbnROb2RlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBzdGF0ZW1lbnRNYXRjaGVzID0gc3VwcG9zaXRpb24ubWF0Y2hTdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUsIHN1YnN0aXR1dGlvbnMsIHByb29mQ29udGV4dCwgc3RhdGVtZW50UHJvb2ZDb250ZXh0KTtcblxuICAgICAgaWYgKCFzdGF0ZW1lbnRNYXRjaGVzKSB7ICAvLy9cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gIH0pIHx8IG51bGw7XG5cbiAgY29uc3Qgc3VwcG9zaXRpb25NYXRjaGVzID0gKHByb29mU3RlcCAhPT0gbnVsbCk7XG5cbiAgcmV0dXJuIHN1cHBvc2l0aW9uTWF0Y2hlcztcbn1cblxuZnVuY3Rpb24gbWF0Y2hTdXBwb3NpdGlvbnMoc3VwcG9zaXRpb24sIHByb29mU3RlcHMsIHN1YnN0aXR1dGlvbnMsIHByb29mQ29udGV4dCwgc3RhdGVtZW50UHJvb2ZDb250ZXh0KSB7XG4gIGNvbnN0IHN1cHBvc2l0aW9uc01hdGNoID0gc3VwcG9zaXRpb24uZXZlcnkoKHN1cHBvc2l0aW9uKSA9PiB7XG4gICAgY29uc3Qgc3VwcG9zaXRpb25NYXRjaGVzID0gbWF0Y2hTdXBwb3NpdGlvbihzdXBwb3NpdGlvbiwgcHJvb2ZTdGVwcywgc3Vic3RpdHV0aW9ucywgcHJvb2ZDb250ZXh0LCBzdGF0ZW1lbnRQcm9vZkNvbnRleHQpO1xuXG4gICAgaWYgKHN1cHBvc2l0aW9uTWF0Y2hlcykge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gc3VwcG9zaXRpb25zTWF0Y2g7XG59XG5cbmZ1bmN0aW9uIG1hdGNoQ29uc2VxdWVuY2UoY29uc2VxdWVuY2UsIHN0YXRlbWVudE5vZGUsIHN1YnN0aXR1dGlvbnMsIHByb29mQ29udGV4dCwgc3RhdGVtZW50UHJvb2ZDb250ZXh0KSB7XG4gIGNvbnN0IG5vblRlcm1pbmFsTm9kZU1hdGNoZXMgPSBjb25zZXF1ZW5jZS5tYXRjaFN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSwgc3Vic3RpdHV0aW9ucywgcHJvb2ZDb250ZXh0LCBzdGF0ZW1lbnRQcm9vZkNvbnRleHQpLFxuICAgICAgICBjb25zZXF1ZW5jZU1hdGNoZXMgPSBub25UZXJtaW5hbE5vZGVNYXRjaGVzOyAvLy9cblxuICByZXR1cm4gY29uc2VxdWVuY2VNYXRjaGVzO1xufVxuXG5mdW5jdGlvbiBtYXRjaFN1cHBvc2l0aW9uc0FuZENvbnNlcXVlbmNlKHN1cHBvc2l0aW9ucywgY29uc2VxdWVuY2UsIHN0YXRlbWVudE5vZGUsIHByb29mU3RlcHMsIHN1YnN0aXR1dGlvbnMsIHByb29mQ29udGV4dCwgc3RhdGVtZW50UHJvb2ZDb250ZXh0KSB7XG4gIGxldCBzdXBwb3NpdGlvbnNNYXRjaENvbnNlcXVlbmNlID0gZmFsc2U7XG5cbiAgY29uc3Qgc3VwcG9zaXRpb25zTWF0Y2ggPSBtYXRjaFN1cHBvc2l0aW9ucyhzdXBwb3NpdGlvbnMsIHByb29mU3RlcHMsIHN1YnN0aXR1dGlvbnMsIHByb29mQ29udGV4dCwgc3RhdGVtZW50UHJvb2ZDb250ZXh0KTtcblxuICBpZiAoc3VwcG9zaXRpb25zTWF0Y2gpIHtcbiAgICBjb25zdCBjb25zZXF1ZW5jZU1hdGNoZXMgPSBtYXRjaENvbnNlcXVlbmNlKGNvbnNlcXVlbmNlLCBzdGF0ZW1lbnROb2RlLCBzdWJzdGl0dXRpb25zLCBwcm9vZkNvbnRleHQsIHN0YXRlbWVudFByb29mQ29udGV4dCk7XG5cbiAgICBzdXBwb3NpdGlvbnNNYXRjaENvbnNlcXVlbmNlID0gY29uc2VxdWVuY2VNYXRjaGVzOyAgLy8vXG4gIH1cblxuICByZXR1cm4gc3VwcG9zaXRpb25zTWF0Y2hDb25zZXF1ZW5jZTtcbn1cbiJdLCJuYW1lcyI6WyJBeGlvbUxlbW1hVGhlb3JlbUNvbmplY3R1cmUiLCJsYWJlbHMiLCJzdXBwb3NpdGlvbnMiLCJjb25zZXF1ZW5jZSIsInByb29mQ29udGV4dCIsImdldExhYmVscyIsImdldFN1cHBvc2l0aW9ucyIsImdldENvbnNlcXVlbmNlIiwiZ2V0UHJvb2ZDb250ZXh0IiwibWF0Y2hMYWJlbE5hbWUiLCJsYWJlbE5hbWUiLCJtYXRjaGVzTGFiZWxOYW1lIiwic29tZSIsImxhYmVsIiwibmFtZSIsImxhYmVsTWF0Y2hlc05hbWUiLCJtYXRjaE5hbWUiLCJtYXRjaFN0YXRlbWVudCIsInN0YXRlbWVudE5vZGUiLCJzdGF0ZW1lbnRQcm9vZkNvbnRleHQiLCJzdGF0ZW1lbnROYXRjaGVzIiwic3VwcG9zaXRpb25zTGVuZ3RoIiwibGVuZ3RoIiwic3Vic3RpdHV0aW9ucyIsImNvbnNlcXVlbmNlTWF0Y2hlcyIsIm1hdGNoQ29uc2VxdWVuY2UiLCJwcm9vZlN0ZXBzIiwiZ2V0UHJvb2ZTdGVwcyIsInNvbWVTdWJBcnJheSIsInN1cHBvc2l0aW9uc01hdGNoQ29uc2VxdWVuY2UiLCJtYXRjaFN1cHBvc2l0aW9uc0FuZENvbnNlcXVlbmNlIiwidG9KU09OIiwidG9rZW5zIiwia2luZCIsImNvbnN0cnVjdG9yIiwibGFiZWxzSlNPTiIsIm1hcCIsImxhYmVsSlNPTiIsInN1cHBvc2l0aW9uc0pTT04iLCJzdXBwb3NpdGlvbiIsInN1cHBvc2l0aW9uSlNPTiIsImNvbnNlcXVlbmNlSlNPTiIsImpzb24iLCJmcm9tSlNPTiIsIkNsYXNzIiwiY29udGV4dCIsIkxhYmVsIiwiU3VwcG9zaXRpb24iLCJDb25zZXF1ZW5jZSIsImZyb21MYWJlbHNTdXBwb3NpdGlvbnNDb25zZXF1ZW5jZUFuZFByb29mQ29udGV4dCIsIm1hdGNoU3VwcG9zaXRpb24iLCJwcm9vZlN0ZXAiLCJwcnVuZSIsInN1YnByb29mTm9kZSIsImdldFN1YnByb29mTm9kZSIsImdldFN0YXRlbWVudE5vZGUiLCJzdWJQcm9vZk1hdGNoZXMiLCJtYXRjaFN1YnByb29mTm9kZSIsInN0YXRlbWVudE1hdGNoZXMiLCJtYXRjaFN0YXRlbWVudE5vZGUiLCJzdXBwb3NpdGlvbk1hdGNoZXMiLCJtYXRjaFN1cHBvc2l0aW9ucyIsInN1cHBvc2l0aW9uc01hdGNoIiwiZXZlcnkiLCJub25UZXJtaW5hbE5vZGVNYXRjaGVzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQVNxQkE7OzswREFQSDtnRUFDTTtnRUFDQTtxQkFFRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUdQLElBQUEsQUFBTUEsNENBOEhs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