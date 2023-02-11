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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9heGlvbUxlbW1hVGhlb3JlbUNvbmplY3R1cmUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBMYWJlbCBmcm9tIFwiLi9sYWJlbFwiO1xuaW1wb3J0IFN1cHBvc2l0aW9uIGZyb20gXCIuL3N1cHBvc2l0aW9uXCI7XG5pbXBvcnQgQ29uc2VxdWVuY2UgZnJvbSBcIi4vY29uc2VxdWVuY2VcIjtcblxuaW1wb3J0IHsgcHJ1bmUgfSBmcm9tIFwiLi91dGlsaXRpZXMvYXJyYXlcIjtcbmltcG9ydCB7IHNvbWVTdWJBcnJheSB9IGZyb20gXCIuL3V0aWxpdGllcy9hcnJheVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBeGlvbUxlbW1hVGhlb3JlbUNvbmplY3R1cmUge1xuICBjb25zdHJ1Y3RvcihsYWJlbHMsIHN1cHBvc2l0aW9ucywgY29uc2VxdWVuY2UsIHByb29mQ29udGV4dCkge1xuICAgIHRoaXMubGFiZWxzID0gbGFiZWxzO1xuICAgIHRoaXMuc3VwcG9zaXRpb25zID0gc3VwcG9zaXRpb25zO1xuICAgIHRoaXMuY29uc2VxdWVuY2UgPSBjb25zZXF1ZW5jZTtcbiAgICB0aGlzLnByb29mQ29udGV4dCA9IHByb29mQ29udGV4dDtcbiAgfVxuXG4gIGdldExhYmVscygpIHtcbiAgICByZXR1cm4gdGhpcy5sYWJlbHM7XG4gIH1cblxuICBnZXRTdXBwb3NpdGlvbnMoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3VwcG9zaXRpb25zO1xuICB9XG5cbiAgZ2V0Q29uc2VxdWVuY2UoKSB7XG4gICAgcmV0dXJuIHRoaXMuY29uc2VxdWVuY2U7XG4gIH1cblxuICBnZXRQcm9vZkNvbnRleHQoKSB7XG4gICAgcmV0dXJuIHRoaXMucHJvb2ZDb250ZXh0O1xuICB9XG5cbiAgbWF0Y2hMYWJlbE5hbWUobGFiZWxOYW1lKSB7XG4gICAgY29uc3QgbWF0Y2hlc0xhYmVsTmFtZSA9IHRoaXMubGFiZWxzLnNvbWUoKGxhYmVsKSA9PiB7XG4gICAgICBjb25zdCBuYW1lID0gbGFiZWxOYW1lLCAvLy9cbiAgICAgICAgICAgIGxhYmVsTWF0Y2hlc05hbWUgPSBsYWJlbC5tYXRjaE5hbWUobmFtZSk7XG5cbiAgICAgIGlmIChsYWJlbE1hdGNoZXNOYW1lKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIG1hdGNoZXNMYWJlbE5hbWU7XG4gIH1cblxuICBtYXRjaFN0YXRlbWVudChzdGF0ZW1lbnROb2RlLCBzdGF0ZW1lbnRQcm9vZkNvbnRleHQpIHtcbiAgICBsZXQgc3RhdGVtZW50TmF0Y2hlcztcblxuICAgIGNvbnN0IHN1cHBvc2l0aW9uc0xlbmd0aCA9IHRoaXMuc3VwcG9zaXRpb25zLmxlbmd0aDtcblxuICAgIGlmIChzdXBwb3NpdGlvbnNMZW5ndGggPT09IDApIHtcbiAgICAgIGNvbnN0IHN1YnN0aXR1dGlvbnMgPSBbXSxcbiAgICAgICAgICAgIGNvbnNlcXVlbmNlTWF0Y2hlcyA9IG1hdGNoQ29uc2VxdWVuY2UodGhpcy5jb25zZXF1ZW5jZSwgc3RhdGVtZW50Tm9kZSwgc3Vic3RpdHV0aW9ucywgdGhpcy5wcm9vZkNvbnRleHQsIHN0YXRlbWVudFByb29mQ29udGV4dCk7XG5cbiAgICAgIHN0YXRlbWVudE5hdGNoZXMgPSBjb25zZXF1ZW5jZU1hdGNoZXM7IC8vL1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBwcm9vZlN0ZXBzID0gc3RhdGVtZW50UHJvb2ZDb250ZXh0LmdldFByb29mU3RlcHMoKTtcblxuICAgICAgc3RhdGVtZW50TmF0Y2hlcyA9IHNvbWVTdWJBcnJheShwcm9vZlN0ZXBzLCBzdXBwb3NpdGlvbnNMZW5ndGgsIChwcm9vZlN0ZXBzKSA9PiB7XG4gICAgICAgIGxldCBzdXBwb3NpdGlvbnNNYXRjaENvbnNlcXVlbmNlID0gZmFsc2U7XG5cbiAgICAgICAgY29uc3Qgc3Vic3RpdHV0aW9ucyA9IFtdLFxuICAgICAgICAgICAgICBzdXBwb3NpdGlvbnNNYXRjaCA9IG1hdGNoU3VwcG9zaXRpb25zKHRoaXMuc3VwcG9zaXRpb25zLCBwcm9vZlN0ZXBzLCBzdWJzdGl0dXRpb25zLCB0aGlzLnByb29mQ29udGV4dCwgc3RhdGVtZW50UHJvb2ZDb250ZXh0KTtcblxuICAgICAgICBpZiAoc3VwcG9zaXRpb25zTWF0Y2gpIHtcbiAgICAgICAgICBjb25zdCBjb25zZXF1ZW5jZU1hdGNoZXMgPSBtYXRjaENvbnNlcXVlbmNlKHRoaXMuY29uc2VxdWVuY2UsIHN0YXRlbWVudE5vZGUsIHN1YnN0aXR1dGlvbnMsIHRoaXMucHJvb2ZDb250ZXh0LCBzdGF0ZW1lbnRQcm9vZkNvbnRleHQpO1xuXG4gICAgICAgICAgc3VwcG9zaXRpb25zTWF0Y2hDb25zZXF1ZW5jZSA9IGNvbnNlcXVlbmNlTWF0Y2hlczsgIC8vL1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHN1cHBvc2l0aW9uc01hdGNoQ29uc2VxdWVuY2UpIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN0YXRlbWVudE5hdGNoZXM7XG4gIH1cblxuICB0b0pTT04odG9rZW5zKSB7XG4gICAgY29uc3QgeyBraW5kIH0gPSB0aGlzLmNvbnN0cnVjdG9yLFxuICAgICAgICAgIGxhYmVsc0pTT04gPSB0aGlzLmxhYmVscy5tYXAoKGxhYmVsKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBsYWJlbEpTT04gPSBsYWJlbC50b0pTT04odG9rZW5zKTtcblxuICAgICAgICAgICAgcmV0dXJuIGxhYmVsSlNPTjtcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBzdXBwb3NpdGlvbnNKU09OID0gdGhpcy5zdXBwb3NpdGlvbnMubWFwKChzdXBwb3NpdGlvbikgPT4ge1xuICAgICAgICAgICAgY29uc3Qgc3VwcG9zaXRpb25KU09OID0gc3VwcG9zaXRpb24udG9KU09OKHRva2Vucyk7XG5cbiAgICAgICAgICAgIHJldHVybiBzdXBwb3NpdGlvbkpTT047XG4gICAgICAgICAgfSksXG4gICAgICAgICAgY29uc2VxdWVuY2VKU09OID0gdGhpcy5jb25zZXF1ZW5jZS50b0pTT04odG9rZW5zKSxcbiAgICAgICAgICBsYWJlbHMgPSBsYWJlbHNKU09OLCAgLy8vXG4gICAgICAgICAgc3VwcG9zaXRpb25zID0gc3VwcG9zaXRpb25zSlNPTiwgIC8vL1xuICAgICAgICAgIGNvbnNlcXVlbmNlID0gY29uc2VxdWVuY2VKU09OLCAgLy8vXG4gICAgICAgICAganNvbiA9IHtcbiAgICAgICAgICAgIGtpbmQsXG4gICAgICAgICAgICBsYWJlbHMsXG4gICAgICAgICAgICBzdXBwb3NpdGlvbnMsXG4gICAgICAgICAgICBjb25zZXF1ZW5jZVxuICAgICAgICAgIH07XG5cbiAgICByZXR1cm4ganNvbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tSlNPTihDbGFzcywganNvbiwgY29udGV4dCkge1xuICAgIGxldCB7IGxhYmVscyB9ID0ganNvbjtcblxuICAgIGNvbnN0IGxhYmVsc0pTT04gPSBsYWJlbHM7ICAvLy9cblxuICAgIGxhYmVscyA9IGxhYmVsc0pTT04ubWFwKChsYWJlbEpTT04pID0+IHtcbiAgICAgIGNvbnN0IGpzb24gPSBsYWJlbEpTT04sIC8vL1xuICAgICAgICAgICAgbGFiZWwgPSBMYWJlbC5mcm9tSlNPTihqc29uLCBjb250ZXh0KTtcblxuICAgICAgcmV0dXJuIGxhYmVsO1xuICAgIH0pO1xuXG4gICAgbGV0IHsgc3VwcG9zaXRpb25zIH0gPSBqc29uO1xuXG4gICAgY29uc3Qgc3VwcG9zaXRpb25zSlNPTiA9IHN1cHBvc2l0aW9uczsgIC8vL1xuXG4gICAgc3VwcG9zaXRpb25zID0gc3VwcG9zaXRpb25zSlNPTi5tYXAoKHN1cHBvc2l0aW9uSlNPTikgPT4ge1xuICAgICAgY29uc3QganNvbiA9IHN1cHBvc2l0aW9uSlNPTiwgLy8vXG4gICAgICAgICAgICBzdXBwb3NpdGlvbiA9IFN1cHBvc2l0aW9uLmZyb21KU09OKGpzb24sIGNvbnRleHQpO1xuXG4gICAgICByZXR1cm4gc3VwcG9zaXRpb247XG4gICAgfSk7XG5cbiAgICBsZXQgeyBjb25zZXF1ZW5jZSB9ID0ganNvbjtcblxuICAgIGNvbnN0IGNvbnNlcXVlbmNlSlNPTiA9IGNvbnNlcXVlbmNlOyAgLy8vXG5cbiAgICBqc29uID0gY29uc2VxdWVuY2VKU09OOyAgLy8vXG5cbiAgICBjb25zZXF1ZW5jZSA9IENvbnNlcXVlbmNlLmZyb21KU09OKGpzb24sIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIG5ldyBDbGFzcyhsYWJlbHMsIHN1cHBvc2l0aW9ucywgY29uc2VxdWVuY2UpOyAgLy8vXG4gIH1cblxuICBzdGF0aWMgZnJvbUxhYmVsc1N1cHBvc2l0aW9uc0NvbnNlcXVlbmNlQW5kUHJvb2ZDb250ZXh0KENsYXNzLCBsYWJlbHMsIHN1cHBvc2l0aW9ucywgY29uc2VxdWVuY2UsIHByb29mQ29udGV4dCkgeyByZXR1cm4gbmV3IENsYXNzKGxhYmVscywgc3VwcG9zaXRpb25zLCBjb25zZXF1ZW5jZSwgcHJvb2ZDb250ZXh0KTsgfVxufVxuXG5mdW5jdGlvbiBtYXRjaFN1cHBvc2l0aW9uKHN1cHBvc2l0aW9uLCBwcm9vZlN0ZXBzLCBzdWJzdGl0dXRpb25zLCBwcm9vZkNvbnRleHQsIHN0YXRlbWVudFByb29mQ29udGV4dCkge1xuICBjb25zdCBwcm9vZlN0ZXAgPSBwcnVuZShwcm9vZlN0ZXBzLCAocHJvb2ZTdGVwKSA9PiB7XG4gICAgY29uc3Qgc3VicHJvb2ZOb2RlID0gcHJvb2ZTdGVwLmdldFN1YnByb29mTm9kZSgpLFxuICAgICAgICAgIHN0YXRlbWVudE5vZGUgPSBwcm9vZlN0ZXAuZ2V0U3RhdGVtZW50Tm9kZSgpO1xuXG4gICAgaWYgKHN1YnByb29mTm9kZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3Qgc3ViUHJvb2ZNYXRjaGVzID0gc3VwcG9zaXRpb24ubWF0Y2hTdWJwcm9vZk5vZGUoc3VicHJvb2ZOb2RlLCBzdWJzdGl0dXRpb25zLCBwcm9vZkNvbnRleHQsIHN0YXRlbWVudFByb29mQ29udGV4dCk7XG5cbiAgICAgIGlmICghc3ViUHJvb2ZNYXRjaGVzKSB7ICAvLy9cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHN0YXRlbWVudE5vZGUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHN0YXRlbWVudE1hdGNoZXMgPSBzdXBwb3NpdGlvbi5tYXRjaFN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSwgc3Vic3RpdHV0aW9ucywgcHJvb2ZDb250ZXh0LCBzdGF0ZW1lbnRQcm9vZkNvbnRleHQpO1xuXG4gICAgICBpZiAoIXN0YXRlbWVudE1hdGNoZXMpIHsgIC8vL1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgfSkgfHwgbnVsbDtcblxuICBjb25zdCBzdXBwb3NpdGlvbk1hdGNoZXMgPSAocHJvb2ZTdGVwICE9PSBudWxsKTtcblxuICByZXR1cm4gc3VwcG9zaXRpb25NYXRjaGVzO1xufVxuXG5mdW5jdGlvbiBtYXRjaFN1cHBvc2l0aW9ucyhzdXBwb3NpdGlvbiwgcHJvb2ZTdGVwcywgc3Vic3RpdHV0aW9ucywgcHJvb2ZDb250ZXh0LCBzdGF0ZW1lbnRQcm9vZkNvbnRleHQpIHtcbiAgY29uc3Qgc3VwcG9zaXRpb25zTWF0Y2ggPSBzdXBwb3NpdGlvbi5ldmVyeSgoc3VwcG9zaXRpb24pID0+IHtcbiAgICBjb25zdCBzdXBwb3NpdGlvbk1hdGNoZXMgPSBtYXRjaFN1cHBvc2l0aW9uKHN1cHBvc2l0aW9uLCBwcm9vZlN0ZXBzLCBzdWJzdGl0dXRpb25zLCBwcm9vZkNvbnRleHQsIHN0YXRlbWVudFByb29mQ29udGV4dCk7XG5cbiAgICBpZiAoc3VwcG9zaXRpb25NYXRjaGVzKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiBzdXBwb3NpdGlvbnNNYXRjaDtcbn1cblxuZnVuY3Rpb24gbWF0Y2hDb25zZXF1ZW5jZShjb25zZXF1ZW5jZSwgc3RhdGVtZW50Tm9kZSwgc3Vic3RpdHV0aW9ucywgcHJvb2ZDb250ZXh0LCBzdGF0ZW1lbnRQcm9vZkNvbnRleHQpIHtcbiAgY29uc3Qgbm9uVGVybWluYWxOb2RlTWF0Y2hlcyA9IGNvbnNlcXVlbmNlLm1hdGNoU3RhdGVtZW50Tm9kZShzdGF0ZW1lbnROb2RlLCBzdWJzdGl0dXRpb25zLCBwcm9vZkNvbnRleHQsIHN0YXRlbWVudFByb29mQ29udGV4dCksXG4gICAgICAgIGNvbnNlcXVlbmNlTWF0Y2hlcyA9IG5vblRlcm1pbmFsTm9kZU1hdGNoZXM7IC8vL1xuXG4gIHJldHVybiBjb25zZXF1ZW5jZU1hdGNoZXM7XG59XG4iXSwibmFtZXMiOlsiQXhpb21MZW1tYVRoZW9yZW1Db25qZWN0dXJlIiwibGFiZWxzIiwic3VwcG9zaXRpb25zIiwiY29uc2VxdWVuY2UiLCJwcm9vZkNvbnRleHQiLCJnZXRMYWJlbHMiLCJnZXRTdXBwb3NpdGlvbnMiLCJnZXRDb25zZXF1ZW5jZSIsImdldFByb29mQ29udGV4dCIsIm1hdGNoTGFiZWxOYW1lIiwibGFiZWxOYW1lIiwibWF0Y2hlc0xhYmVsTmFtZSIsInNvbWUiLCJsYWJlbCIsIm5hbWUiLCJsYWJlbE1hdGNoZXNOYW1lIiwibWF0Y2hOYW1lIiwibWF0Y2hTdGF0ZW1lbnQiLCJzdGF0ZW1lbnROb2RlIiwic3RhdGVtZW50UHJvb2ZDb250ZXh0Iiwic3RhdGVtZW50TmF0Y2hlcyIsInN1cHBvc2l0aW9uc0xlbmd0aCIsImxlbmd0aCIsInN1YnN0aXR1dGlvbnMiLCJjb25zZXF1ZW5jZU1hdGNoZXMiLCJtYXRjaENvbnNlcXVlbmNlIiwicHJvb2ZTdGVwcyIsImdldFByb29mU3RlcHMiLCJzb21lU3ViQXJyYXkiLCJzdXBwb3NpdGlvbnNNYXRjaENvbnNlcXVlbmNlIiwic3VwcG9zaXRpb25zTWF0Y2giLCJtYXRjaFN1cHBvc2l0aW9ucyIsInRvSlNPTiIsInRva2VucyIsImtpbmQiLCJjb25zdHJ1Y3RvciIsImxhYmVsc0pTT04iLCJtYXAiLCJsYWJlbEpTT04iLCJzdXBwb3NpdGlvbnNKU09OIiwic3VwcG9zaXRpb24iLCJzdXBwb3NpdGlvbkpTT04iLCJjb25zZXF1ZW5jZUpTT04iLCJqc29uIiwiZnJvbUpTT04iLCJDbGFzcyIsImNvbnRleHQiLCJMYWJlbCIsIlN1cHBvc2l0aW9uIiwiQ29uc2VxdWVuY2UiLCJmcm9tTGFiZWxzU3VwcG9zaXRpb25zQ29uc2VxdWVuY2VBbmRQcm9vZkNvbnRleHQiLCJtYXRjaFN1cHBvc2l0aW9uIiwicHJvb2ZTdGVwIiwicHJ1bmUiLCJzdWJwcm9vZk5vZGUiLCJnZXRTdWJwcm9vZk5vZGUiLCJnZXRTdGF0ZW1lbnROb2RlIiwic3ViUHJvb2ZNYXRjaGVzIiwibWF0Y2hTdWJwcm9vZk5vZGUiLCJzdGF0ZW1lbnRNYXRjaGVzIiwibWF0Y2hTdGF0ZW1lbnROb2RlIiwic3VwcG9zaXRpb25NYXRjaGVzIiwiZXZlcnkiLCJub25UZXJtaW5hbE5vZGVNYXRjaGVzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQVNxQkE7OzswREFQSDtnRUFDTTtnRUFDQTtxQkFFRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUdQLElBQUEsQUFBTUEsNENBc0lsQixBQXRJWTthQUFNQSw0QkFDUEMsTUFBTSxFQUFFQyxZQUFZLEVBQUVDLFdBQVcsRUFBRUMsWUFBWTs4QkFEeENKO1FBRWpCLElBQUksQ0FBQ0MsTUFBTSxHQUFHQTtRQUNkLElBQUksQ0FBQ0MsWUFBWSxHQUFHQTtRQUNwQixJQUFJLENBQUNDLFdBQVcsR0FBR0E7UUFDbkIsSUFBSSxDQUFDQyxZQUFZLEdBQUdBOztpQkFMSEo7O1lBUW5CSyxLQUFBQTttQkFBQUEsU0FBQUEsWUFBWTtnQkFDVixPQUFPLElBQUksQ0FBQ0osTUFBTTtZQUNwQjs7O1lBRUFLLEtBQUFBO21CQUFBQSxTQUFBQSxrQkFBa0I7Z0JBQ2hCLE9BQU8sSUFBSSxDQUFDSixZQUFZO1lBQzFCOzs7WUFFQUssS0FBQUE7bUJBQUFBLFNBQUFBLGlCQUFpQjtnQkFDZixPQUFPLElBQUksQ0FBQ0os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