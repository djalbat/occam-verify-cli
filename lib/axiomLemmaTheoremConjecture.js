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
var _label = /*#__PURE__*/ _interop_require_default(require("./label"));
var _consequent = /*#__PURE__*/ _interop_require_default(require("./consequent"));
var _supposition = /*#__PURE__*/ _interop_require_default(require("./supposition"));
var _proof = /*#__PURE__*/ _interop_require_default(require("./context/proof"));
var _array = require("./utilities/array");
function _class_call_check(instance, Constructor) {
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
function _create_class(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var AxiomLemmaTheoremConjecture = /*#__PURE__*/ function() {
    function AxiomLemmaTheoremConjecture(labels, suppositions, consequent, proofContext) {
        _class_call_check(this, AxiomLemmaTheoremConjecture);
        this.labels = labels;
        this.suppositions = suppositions;
        this.consequent = consequent;
        this.proofContext = proofContext;
    }
    _create_class(AxiomLemmaTheoremConjecture, [
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
            key: "getConsequent",
            value: function getConsequent() {
                return this.consequent;
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
                var labelNameMatches = this.labels.some(function(label) {
                    var name = labelName, labelMatchesName = label.matchName(name);
                    if (labelMatchesName) {
                        return true;
                    }
                });
                return labelNameMatches;
            }
        },
        {
            key: "matchStatement",
            value: function matchStatement(statementNode, statementProofContext) {
                var _this = this;
                var statementNatches;
                var suppositionsLength = this.suppositions.length;
                if (suppositionsLength === 0) {
                    var substitutions = [], consequentMatches = matchConsequent(this.consequent, statementNode, substitutions, this.proofContext, statementProofContext);
                    statementNatches = consequentMatches; ///
                } else {
                    var proofSteps = statementProofContext.getProofSteps();
                    statementNatches = (0, _array.someSubArray)(proofSteps, suppositionsLength, function(proofSteps) {
                        var suppositionsMatchConsequent = false;
                        var substitutions = [], suppositionsMatch = matchSuppositions(_this.suppositions, proofSteps, substitutions, _this.proofContext, statementProofContext);
                        if (suppositionsMatch) {
                            var consequentMatches = matchConsequent(_this.consequent, statementNode, substitutions, _this.proofContext, statementProofContext);
                            suppositionsMatchConsequent = consequentMatches; ///
                        }
                        if (suppositionsMatchConsequent) {
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
                }), consequentJSON = this.consequent.toJSON(tokens), proofContextJSON = this.proofContext.toJSON(tokens), labels = labelsJSON, suppositions = suppositionsJSON, consequent = consequentJSON, proofContext = proofContextJSON, json = {
                    labels: labels,
                    suppositions: suppositions,
                    consequent: consequent,
                    proofContext: proofContext
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
                var suppositions = json.suppositions, consequent = json.consequent, proofContext = json.proofContext;
                var suppositionsJSON = suppositions; ///
                suppositions = suppositionsJSON.map(function(suppositionJSON) {
                    var _$json = suppositionJSON, supposition = _supposition.default.fromJSONAndFileContext(_$json, fileContext);
                    return supposition;
                });
                var consequentJSON = consequent; ///
                json = consequentJSON; ///
                consequent = _consequent.default.fromJSONAndFileContext(json, fileContext);
                var proofContextJSON = proofContext; ///
                json = proofContextJSON; ///
                proofContext = _proof.default.fromJSONAndFileContext(json, fileContext);
                return new Class(labels, suppositions, consequent, proofContext); ///
            }
        },
        {
            key: "fromLabelsSuppositionsConsequentAndProofContext",
            value: function fromLabelsSuppositionsConsequentAndProofContext(Class, labels, suppositions, consequent, proofContext) {
                return new Class(labels, suppositions, consequent, proofContext);
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
function matchConsequent(consequent, statementNode, substitutions, proofContext, statementProofContext) {
    var nonTerminalNodeMatches = consequent.matchStatementNode(statementNode, substitutions, proofContext, statementProofContext), consequentMatches = nonTerminalNodeMatches; ///
    return consequentMatches;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9heGlvbUxlbW1hVGhlb3JlbUNvbmplY3R1cmUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBMYWJlbCBmcm9tIFwiLi9sYWJlbFwiO1xuaW1wb3J0IENvbnNlcXVlbnQgZnJvbSBcIi4vY29uc2VxdWVudFwiO1xuaW1wb3J0IFN1cHBvc2l0aW9uIGZyb20gXCIuL3N1cHBvc2l0aW9uXCI7XG5pbXBvcnQgUHJvb2ZDb250ZXh0IGZyb20gXCIuL2NvbnRleHQvcHJvb2ZcIjtcblxuaW1wb3J0IHsgcHJ1bmUgfSBmcm9tIFwiLi91dGlsaXRpZXMvYXJyYXlcIjtcbmltcG9ydCB7IHNvbWVTdWJBcnJheSB9IGZyb20gXCIuL3V0aWxpdGllcy9hcnJheVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBeGlvbUxlbW1hVGhlb3JlbUNvbmplY3R1cmUge1xuICBjb25zdHJ1Y3RvcihsYWJlbHMsIHN1cHBvc2l0aW9ucywgY29uc2VxdWVudCwgcHJvb2ZDb250ZXh0KSB7XG4gICAgdGhpcy5sYWJlbHMgPSBsYWJlbHM7XG4gICAgdGhpcy5zdXBwb3NpdGlvbnMgPSBzdXBwb3NpdGlvbnM7XG4gICAgdGhpcy5jb25zZXF1ZW50ID0gY29uc2VxdWVudDtcbiAgICB0aGlzLnByb29mQ29udGV4dCA9IHByb29mQ29udGV4dDtcbiAgfVxuXG4gIGdldExhYmVscygpIHtcbiAgICByZXR1cm4gdGhpcy5sYWJlbHM7XG4gIH1cblxuICBnZXRTdXBwb3NpdGlvbnMoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3VwcG9zaXRpb25zO1xuICB9XG5cbiAgZ2V0Q29uc2VxdWVudCgpIHtcbiAgICByZXR1cm4gdGhpcy5jb25zZXF1ZW50O1xuICB9XG5cbiAgZ2V0UHJvb2ZDb250ZXh0KCkge1xuICAgIHJldHVybiB0aGlzLnByb29mQ29udGV4dDtcbiAgfVxuXG4gIG1hdGNoTGFiZWxOYW1lKGxhYmVsTmFtZSkge1xuICAgIGNvbnN0IGxhYmVsTmFtZU1hdGNoZXMgPSB0aGlzLmxhYmVscy5zb21lKChsYWJlbCkgPT4ge1xuICAgICAgY29uc3QgbmFtZSA9IGxhYmVsTmFtZSwgLy8vXG4gICAgICAgICAgICBsYWJlbE1hdGNoZXNOYW1lID0gbGFiZWwubWF0Y2hOYW1lKG5hbWUpO1xuXG4gICAgICBpZiAobGFiZWxNYXRjaGVzTmFtZSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiBsYWJlbE5hbWVNYXRjaGVzO1xuICB9XG5cbiAgbWF0Y2hTdGF0ZW1lbnQoc3RhdGVtZW50Tm9kZSwgc3RhdGVtZW50UHJvb2ZDb250ZXh0KSB7XG4gICAgbGV0IHN0YXRlbWVudE5hdGNoZXM7XG5cbiAgICBjb25zdCBzdXBwb3NpdGlvbnNMZW5ndGggPSB0aGlzLnN1cHBvc2l0aW9ucy5sZW5ndGg7XG5cbiAgICBpZiAoc3VwcG9zaXRpb25zTGVuZ3RoID09PSAwKSB7XG4gICAgICBjb25zdCBzdWJzdGl0dXRpb25zID0gW10sXG4gICAgICAgICAgICBjb25zZXF1ZW50TWF0Y2hlcyA9IG1hdGNoQ29uc2VxdWVudCh0aGlzLmNvbnNlcXVlbnQsIHN0YXRlbWVudE5vZGUsIHN1YnN0aXR1dGlvbnMsIHRoaXMucHJvb2ZDb250ZXh0LCBzdGF0ZW1lbnRQcm9vZkNvbnRleHQpO1xuXG4gICAgICBzdGF0ZW1lbnROYXRjaGVzID0gY29uc2VxdWVudE1hdGNoZXM7IC8vL1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBwcm9vZlN0ZXBzID0gc3RhdGVtZW50UHJvb2ZDb250ZXh0LmdldFByb29mU3RlcHMoKTtcblxuICAgICAgc3RhdGVtZW50TmF0Y2hlcyA9IHNvbWVTdWJBcnJheShwcm9vZlN0ZXBzLCBzdXBwb3NpdGlvbnNMZW5ndGgsIChwcm9vZlN0ZXBzKSA9PiB7XG4gICAgICAgIGxldCBzdXBwb3NpdGlvbnNNYXRjaENvbnNlcXVlbnQgPSBmYWxzZTtcblxuICAgICAgICBjb25zdCBzdWJzdGl0dXRpb25zID0gW10sXG4gICAgICAgICAgICAgIHN1cHBvc2l0aW9uc01hdGNoID0gbWF0Y2hTdXBwb3NpdGlvbnModGhpcy5zdXBwb3NpdGlvbnMsIHByb29mU3RlcHMsIHN1YnN0aXR1dGlvbnMsIHRoaXMucHJvb2ZDb250ZXh0LCBzdGF0ZW1lbnRQcm9vZkNvbnRleHQpO1xuXG4gICAgICAgIGlmIChzdXBwb3NpdGlvbnNNYXRjaCkge1xuICAgICAgICAgIGNvbnN0IGNvbnNlcXVlbnRNYXRjaGVzID0gbWF0Y2hDb25zZXF1ZW50KHRoaXMuY29uc2VxdWVudCwgc3RhdGVtZW50Tm9kZSwgc3Vic3RpdHV0aW9ucywgdGhpcy5wcm9vZkNvbnRleHQsIHN0YXRlbWVudFByb29mQ29udGV4dCk7XG5cbiAgICAgICAgICBzdXBwb3NpdGlvbnNNYXRjaENvbnNlcXVlbnQgPSBjb25zZXF1ZW50TWF0Y2hlczsgIC8vL1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHN1cHBvc2l0aW9uc01hdGNoQ29uc2VxdWVudCkge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3RhdGVtZW50TmF0Y2hlcztcbiAgfVxuXG4gIHRvSlNPTih0b2tlbnMpIHtcbiAgICBjb25zdCBsYWJlbHNKU09OID0gdGhpcy5sYWJlbHMubWFwKChsYWJlbCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgbGFiZWxKU09OID0gbGFiZWwudG9KU09OKHRva2Vucyk7XG5cbiAgICAgICAgICAgIHJldHVybiBsYWJlbEpTT047XG4gICAgICAgICAgfSksXG4gICAgICAgICAgc3VwcG9zaXRpb25zSlNPTiA9IHRoaXMuc3VwcG9zaXRpb25zLm1hcCgoc3VwcG9zaXRpb24pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHN1cHBvc2l0aW9uSlNPTiA9IHN1cHBvc2l0aW9uLnRvSlNPTih0b2tlbnMpO1xuXG4gICAgICAgICAgICByZXR1cm4gc3VwcG9zaXRpb25KU09OO1xuICAgICAgICAgIH0pLFxuICAgICAgICAgIGNvbnNlcXVlbnRKU09OID0gdGhpcy5jb25zZXF1ZW50LnRvSlNPTih0b2tlbnMpLFxuICAgICAgICAgIHByb29mQ29udGV4dEpTT04gPSB0aGlzLnByb29mQ29udGV4dC50b0pTT04odG9rZW5zKSxcbiAgICAgICAgICBsYWJlbHMgPSBsYWJlbHNKU09OLCAgLy8vXG4gICAgICAgICAgc3VwcG9zaXRpb25zID0gc3VwcG9zaXRpb25zSlNPTiwgIC8vL1xuICAgICAgICAgIGNvbnNlcXVlbnQgPSBjb25zZXF1ZW50SlNPTiwgIC8vL1xuICAgICAgICAgIHByb29mQ29udGV4dCA9IHByb29mQ29udGV4dEpTT04sICAvLy9cbiAgICAgICAgICBqc29uID0ge1xuICAgICAgICAgICAgbGFiZWxzLFxuICAgICAgICAgICAgc3VwcG9zaXRpb25zLFxuICAgICAgICAgICAgY29uc2VxdWVudCxcbiAgICAgICAgICAgIHByb29mQ29udGV4dFxuICAgICAgICAgIH07XG5cbiAgICByZXR1cm4ganNvbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tSlNPTkFuZEZpbGVDb250ZXh0KENsYXNzLCBqc29uLCBmaWxlQ29udGV4dCkge1xuICAgIGxldCB7IGxhYmVscyB9ID0ganNvbjtcblxuICAgIGNvbnN0IGxhYmVsc0pTT04gPSBsYWJlbHM7ICAvLy9cblxuICAgIGxhYmVscyA9IGxhYmVsc0pTT04ubWFwKChsYWJlbEpTT04pID0+IHtcbiAgICAgIGNvbnN0IGpzb24gPSBsYWJlbEpTT04sIC8vL1xuICAgICAgICAgICAgbGFiZWwgPSBMYWJlbC5mcm9tSlNPTkFuZEZpbGVDb250ZXh0KGpzb24sIGZpbGVDb250ZXh0KTtcblxuICAgICAgcmV0dXJuIGxhYmVsO1xuICAgIH0pO1xuXG4gICAgbGV0IHsgc3VwcG9zaXRpb25zLCBjb25zZXF1ZW50LCBwcm9vZkNvbnRleHQgfSA9IGpzb247XG5cbiAgICBjb25zdCBzdXBwb3NpdGlvbnNKU09OID0gc3VwcG9zaXRpb25zOyAgLy8vXG5cbiAgICBzdXBwb3NpdGlvbnMgPSBzdXBwb3NpdGlvbnNKU09OLm1hcCgoc3VwcG9zaXRpb25KU09OKSA9PiB7XG4gICAgICBjb25zdCBqc29uID0gc3VwcG9zaXRpb25KU09OLCAvLy9cbiAgICAgICAgICAgIHN1cHBvc2l0aW9uID0gU3VwcG9zaXRpb24uZnJvbUpTT05BbmRGaWxlQ29udGV4dChqc29uLCBmaWxlQ29udGV4dCk7XG5cbiAgICAgIHJldHVybiBzdXBwb3NpdGlvbjtcbiAgICB9KTtcblxuICAgIGNvbnN0IGNvbnNlcXVlbnRKU09OID0gY29uc2VxdWVudDsgIC8vL1xuXG4gICAganNvbiA9IGNvbnNlcXVlbnRKU09OOyAgLy8vXG5cbiAgICBjb25zZXF1ZW50ID0gQ29uc2VxdWVudC5mcm9tSlNPTkFuZEZpbGVDb250ZXh0KGpzb24sIGZpbGVDb250ZXh0KTtcblxuICAgIGNvbnN0IHByb29mQ29udGV4dEpTT04gPSBwcm9vZkNvbnRleHQ7ICAvLy9cblxuICAgIGpzb24gPSBwcm9vZkNvbnRleHRKU09OOyAgLy8vXG5cbiAgICBwcm9vZkNvbnRleHQgPSBQcm9vZkNvbnRleHQuZnJvbUpTT05BbmRGaWxlQ29udGV4dChqc29uLCBmaWxlQ29udGV4dCk7XG5cbiAgICByZXR1cm4gbmV3IENsYXNzKGxhYmVscywgc3VwcG9zaXRpb25zLCBjb25zZXF1ZW50LCBwcm9vZkNvbnRleHQpOyAgLy8vXG4gIH1cblxuICBzdGF0aWMgZnJvbUxhYmVsc1N1cHBvc2l0aW9uc0NvbnNlcXVlbnRBbmRQcm9vZkNvbnRleHQoQ2xhc3MsIGxhYmVscywgc3VwcG9zaXRpb25zLCBjb25zZXF1ZW50LCBwcm9vZkNvbnRleHQpIHsgcmV0dXJuIG5ldyBDbGFzcyhsYWJlbHMsIHN1cHBvc2l0aW9ucywgY29uc2VxdWVudCwgcHJvb2ZDb250ZXh0KTsgfVxufVxuXG5mdW5jdGlvbiBtYXRjaFN1cHBvc2l0aW9uKHN1cHBvc2l0aW9uLCBwcm9vZlN0ZXBzLCBzdWJzdGl0dXRpb25zLCBwcm9vZkNvbnRleHQsIHN0YXRlbWVudFByb29mQ29udGV4dCkge1xuICBjb25zdCBwcm9vZlN0ZXAgPSBwcnVuZShwcm9vZlN0ZXBzLCAocHJvb2ZTdGVwKSA9PiB7XG4gICAgY29uc3Qgc3VicHJvb2ZOb2RlID0gcHJvb2ZTdGVwLmdldFN1YnByb29mTm9kZSgpLFxuICAgICAgICAgIHN0YXRlbWVudE5vZGUgPSBwcm9vZlN0ZXAuZ2V0U3RhdGVtZW50Tm9kZSgpO1xuXG4gICAgaWYgKHN1YnByb29mTm9kZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3Qgc3ViUHJvb2ZNYXRjaGVzID0gc3VwcG9zaXRpb24ubWF0Y2hTdWJwcm9vZk5vZGUoc3VicHJvb2ZOb2RlLCBzdWJzdGl0dXRpb25zLCBwcm9vZkNvbnRleHQsIHN0YXRlbWVudFByb29mQ29udGV4dCk7XG5cbiAgICAgIGlmICghc3ViUHJvb2ZNYXRjaGVzKSB7ICAvLy9cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHN0YXRlbWVudE5vZGUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHN0YXRlbWVudE1hdGNoZXMgPSBzdXBwb3NpdGlvbi5tYXRjaFN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSwgc3Vic3RpdHV0aW9ucywgcHJvb2ZDb250ZXh0LCBzdGF0ZW1lbnRQcm9vZkNvbnRleHQpO1xuXG4gICAgICBpZiAoIXN0YXRlbWVudE1hdGNoZXMpIHsgIC8vL1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgfSkgfHwgbnVsbDtcblxuICBjb25zdCBzdXBwb3NpdGlvbk1hdGNoZXMgPSAocHJvb2ZTdGVwICE9PSBudWxsKTtcblxuICByZXR1cm4gc3VwcG9zaXRpb25NYXRjaGVzO1xufVxuXG5mdW5jdGlvbiBtYXRjaFN1cHBvc2l0aW9ucyhzdXBwb3NpdGlvbiwgcHJvb2ZTdGVwcywgc3Vic3RpdHV0aW9ucywgcHJvb2ZDb250ZXh0LCBzdGF0ZW1lbnRQcm9vZkNvbnRleHQpIHtcbiAgY29uc3Qgc3VwcG9zaXRpb25zTWF0Y2ggPSBzdXBwb3NpdGlvbi5ldmVyeSgoc3VwcG9zaXRpb24pID0+IHtcbiAgICBjb25zdCBzdXBwb3NpdGlvbk1hdGNoZXMgPSBtYXRjaFN1cHBvc2l0aW9uKHN1cHBvc2l0aW9uLCBwcm9vZlN0ZXBzLCBzdWJzdGl0dXRpb25zLCBwcm9vZkNvbnRleHQsIHN0YXRlbWVudFByb29mQ29udGV4dCk7XG5cbiAgICBpZiAoc3VwcG9zaXRpb25NYXRjaGVzKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiBzdXBwb3NpdGlvbnNNYXRjaDtcbn1cblxuZnVuY3Rpb24gbWF0Y2hDb25zZXF1ZW50KGNvbnNlcXVlbnQsIHN0YXRlbWVudE5vZGUsIHN1YnN0aXR1dGlvbnMsIHByb29mQ29udGV4dCwgc3RhdGVtZW50UHJvb2ZDb250ZXh0KSB7XG4gIGNvbnN0IG5vblRlcm1pbmFsTm9kZU1hdGNoZXMgPSBjb25zZXF1ZW50Lm1hdGNoU3RhdGVtZW50Tm9kZShzdGF0ZW1lbnROb2RlLCBzdWJzdGl0dXRpb25zLCBwcm9vZkNvbnRleHQsIHN0YXRlbWVudFByb29mQ29udGV4dCksXG4gICAgICAgIGNvbnNlcXVlbnRNYXRjaGVzID0gbm9uVGVybWluYWxOb2RlTWF0Y2hlczsgLy8vXG5cbiAgcmV0dXJuIGNvbnNlcXVlbnRNYXRjaGVzO1xufVxuIl0sIm5hbWVzIjpbIkF4aW9tTGVtbWFUaGVvcmVtQ29uamVjdHVyZSIsImxhYmVscyIsInN1cHBvc2l0aW9ucyIsImNvbnNlcXVlbnQiLCJwcm9vZkNvbnRleHQiLCJnZXRMYWJlbHMiLCJnZXRTdXBwb3NpdGlvbnMiLCJnZXRDb25zZXF1ZW50IiwiZ2V0UHJvb2ZDb250ZXh0IiwibWF0Y2hMYWJlbE5hbWUiLCJsYWJlbE5hbWUiLCJsYWJlbE5hbWVNYXRjaGVzIiwic29tZSIsImxhYmVsIiwibmFtZSIsImxhYmVsTWF0Y2hlc05hbWUiLCJtYXRjaE5hbWUiLCJtYXRjaFN0YXRlbWVudCIsInN0YXRlbWVudE5vZGUiLCJzdGF0ZW1lbnRQcm9vZkNvbnRleHQiLCJzdGF0ZW1lbnROYXRjaGVzIiwic3VwcG9zaXRpb25zTGVuZ3RoIiwibGVuZ3RoIiwic3Vic3RpdHV0aW9ucyIsImNvbnNlcXVlbnRNYXRjaGVzIiwibWF0Y2hDb25zZXF1ZW50IiwicHJvb2ZTdGVwcyIsImdldFByb29mU3RlcHMiLCJzb21lU3ViQXJyYXkiLCJzdXBwb3NpdGlvbnNNYXRjaENvbnNlcXVlbnQiLCJzdXBwb3NpdGlvbnNNYXRjaCIsIm1hdGNoU3VwcG9zaXRpb25zIiwidG9KU09OIiwidG9rZW5zIiwibGFiZWxzSlNPTiIsIm1hcCIsImxhYmVsSlNPTiIsInN1cHBvc2l0aW9uc0pTT04iLCJzdXBwb3NpdGlvbiIsInN1cHBvc2l0aW9uSlNPTiIsImNvbnNlcXVlbnRKU09OIiwicHJvb2ZDb250ZXh0SlNPTiIsImpzb24iLCJmcm9tSlNPTkFuZEZpbGVDb250ZXh0IiwiQ2xhc3MiLCJmaWxlQ29udGV4dCIsIkxhYmVsIiwiU3VwcG9zaXRpb24iLCJDb25zZXF1ZW50IiwiUHJvb2ZDb250ZXh0IiwiZnJvbUxhYmVsc1N1cHBvc2l0aW9uc0NvbnNlcXVlbnRBbmRQcm9vZkNvbnRleHQiLCJtYXRjaFN1cHBvc2l0aW9uIiwicHJvb2ZTdGVwIiwicHJ1bmUiLCJzdWJwcm9vZk5vZGUiLCJnZXRTdWJwcm9vZk5vZGUiLCJnZXRTdGF0ZW1lbnROb2RlIiwic3ViUHJvb2ZNYXRjaGVzIiwibWF0Y2hTdWJwcm9vZk5vZGUiLCJzdGF0ZW1lbnRNYXRjaGVzIiwibWF0Y2hTdGF0ZW1lbnROb2RlIiwic3VwcG9zaXRpb25NYXRjaGVzIiwiZXZlcnkiLCJub25UZXJtaW5hbE5vZGVNYXRjaGVzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQVVxQkE7Ozs0REFSSDtpRUFDSztrRUFDQzs0REFDQztxQkFFSDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUdQLElBQUEsQUFBTUEsNENBMklsQixBQTNJWTthQUFN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