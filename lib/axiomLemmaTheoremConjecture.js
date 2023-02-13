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
var _proof = /*#__PURE__*/ _interopRequireDefault(require("./context/proof"));
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
                }), consequenceJSON = this.consequence.toJSON(tokens), proofContextJSON = this.proofContext.toJSON(tokens), labels = labelsJSON, suppositions = suppositionsJSON, consequence = consequenceJSON, proofContext = proofContextJSON, json = {
                    labels: labels,
                    suppositions: suppositions,
                    consequence: consequence,
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
                var proofContext = json.proofContext;
                var proofContextJSON = proofContext; ///
                json = proofContextJSON; ///
                proofContext = _proof.default.fromJSONAndFileContext(json, fileContext);
                return new Class(labels, suppositions, consequence, proofContext); ///
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9heGlvbUxlbW1hVGhlb3JlbUNvbmplY3R1cmUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBMYWJlbCBmcm9tIFwiLi9sYWJlbFwiO1xuaW1wb3J0IFN1cHBvc2l0aW9uIGZyb20gXCIuL3N1cHBvc2l0aW9uXCI7XG5pbXBvcnQgQ29uc2VxdWVuY2UgZnJvbSBcIi4vY29uc2VxdWVuY2VcIjtcbmltcG9ydCBQcm9vZkNvbnRleHQgZnJvbSBcIi4vY29udGV4dC9wcm9vZlwiO1xuXG5pbXBvcnQgeyBwcnVuZSB9IGZyb20gXCIuL3V0aWxpdGllcy9hcnJheVwiO1xuaW1wb3J0IHsgc29tZVN1YkFycmF5IH0gZnJvbSBcIi4vdXRpbGl0aWVzL2FycmF5XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEF4aW9tTGVtbWFUaGVvcmVtQ29uamVjdHVyZSB7XG4gIGNvbnN0cnVjdG9yKGxhYmVscywgc3VwcG9zaXRpb25zLCBjb25zZXF1ZW5jZSwgcHJvb2ZDb250ZXh0KSB7XG4gICAgdGhpcy5sYWJlbHMgPSBsYWJlbHM7XG4gICAgdGhpcy5zdXBwb3NpdGlvbnMgPSBzdXBwb3NpdGlvbnM7XG4gICAgdGhpcy5jb25zZXF1ZW5jZSA9IGNvbnNlcXVlbmNlO1xuICAgIHRoaXMucHJvb2ZDb250ZXh0ID0gcHJvb2ZDb250ZXh0O1xuICB9XG5cbiAgZ2V0TGFiZWxzKCkge1xuICAgIHJldHVybiB0aGlzLmxhYmVscztcbiAgfVxuXG4gIGdldFN1cHBvc2l0aW9ucygpIHtcbiAgICByZXR1cm4gdGhpcy5zdXBwb3NpdGlvbnM7XG4gIH1cblxuICBnZXRDb25zZXF1ZW5jZSgpIHtcbiAgICByZXR1cm4gdGhpcy5jb25zZXF1ZW5jZTtcbiAgfVxuXG4gIGdldFByb29mQ29udGV4dCgpIHtcbiAgICByZXR1cm4gdGhpcy5wcm9vZkNvbnRleHQ7XG4gIH1cblxuICBtYXRjaExhYmVsTmFtZShsYWJlbE5hbWUpIHtcbiAgICBjb25zdCBtYXRjaGVzTGFiZWxOYW1lID0gdGhpcy5sYWJlbHMuc29tZSgobGFiZWwpID0+IHtcbiAgICAgIGNvbnN0IG5hbWUgPSBsYWJlbE5hbWUsIC8vL1xuICAgICAgICAgICAgbGFiZWxNYXRjaGVzTmFtZSA9IGxhYmVsLm1hdGNoTmFtZShuYW1lKTtcblxuICAgICAgaWYgKGxhYmVsTWF0Y2hlc05hbWUpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gbWF0Y2hlc0xhYmVsTmFtZTtcbiAgfVxuXG4gIG1hdGNoU3RhdGVtZW50KHN0YXRlbWVudE5vZGUsIHN0YXRlbWVudFByb29mQ29udGV4dCkge1xuICAgIGxldCBzdGF0ZW1lbnROYXRjaGVzO1xuXG4gICAgY29uc3Qgc3VwcG9zaXRpb25zTGVuZ3RoID0gdGhpcy5zdXBwb3NpdGlvbnMubGVuZ3RoO1xuXG4gICAgaWYgKHN1cHBvc2l0aW9uc0xlbmd0aCA9PT0gMCkge1xuICAgICAgY29uc3Qgc3Vic3RpdHV0aW9ucyA9IFtdLFxuICAgICAgICAgICAgY29uc2VxdWVuY2VNYXRjaGVzID0gbWF0Y2hDb25zZXF1ZW5jZSh0aGlzLmNvbnNlcXVlbmNlLCBzdGF0ZW1lbnROb2RlLCBzdWJzdGl0dXRpb25zLCB0aGlzLnByb29mQ29udGV4dCwgc3RhdGVtZW50UHJvb2ZDb250ZXh0KTtcblxuICAgICAgc3RhdGVtZW50TmF0Y2hlcyA9IGNvbnNlcXVlbmNlTWF0Y2hlczsgLy8vXG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHByb29mU3RlcHMgPSBzdGF0ZW1lbnRQcm9vZkNvbnRleHQuZ2V0UHJvb2ZTdGVwcygpO1xuXG4gICAgICBzdGF0ZW1lbnROYXRjaGVzID0gc29tZVN1YkFycmF5KHByb29mU3RlcHMsIHN1cHBvc2l0aW9uc0xlbmd0aCwgKHByb29mU3RlcHMpID0+IHtcbiAgICAgICAgbGV0IHN1cHBvc2l0aW9uc01hdGNoQ29uc2VxdWVuY2UgPSBmYWxzZTtcblxuICAgICAgICBjb25zdCBzdWJzdGl0dXRpb25zID0gW10sXG4gICAgICAgICAgICAgIHN1cHBvc2l0aW9uc01hdGNoID0gbWF0Y2hTdXBwb3NpdGlvbnModGhpcy5zdXBwb3NpdGlvbnMsIHByb29mU3RlcHMsIHN1YnN0aXR1dGlvbnMsIHRoaXMucHJvb2ZDb250ZXh0LCBzdGF0ZW1lbnRQcm9vZkNvbnRleHQpO1xuXG4gICAgICAgIGlmIChzdXBwb3NpdGlvbnNNYXRjaCkge1xuICAgICAgICAgIGNvbnN0IGNvbnNlcXVlbmNlTWF0Y2hlcyA9IG1hdGNoQ29uc2VxdWVuY2UodGhpcy5jb25zZXF1ZW5jZSwgc3RhdGVtZW50Tm9kZSwgc3Vic3RpdHV0aW9ucywgdGhpcy5wcm9vZkNvbnRleHQsIHN0YXRlbWVudFByb29mQ29udGV4dCk7XG5cbiAgICAgICAgICBzdXBwb3NpdGlvbnNNYXRjaENvbnNlcXVlbmNlID0gY29uc2VxdWVuY2VNYXRjaGVzOyAgLy8vXG4gICAgICAgIH1cblxuICAgICAgICBpZiAoc3VwcG9zaXRpb25zTWF0Y2hDb25zZXF1ZW5jZSkge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3RhdGVtZW50TmF0Y2hlcztcbiAgfVxuXG4gIHRvSlNPTih0b2tlbnMpIHtcbiAgICBjb25zdCBsYWJlbHNKU09OID0gdGhpcy5sYWJlbHMubWFwKChsYWJlbCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgbGFiZWxKU09OID0gbGFiZWwudG9KU09OKHRva2Vucyk7XG5cbiAgICAgICAgICAgIHJldHVybiBsYWJlbEpTT047XG4gICAgICAgICAgfSksXG4gICAgICAgICAgc3VwcG9zaXRpb25zSlNPTiA9IHRoaXMuc3VwcG9zaXRpb25zLm1hcCgoc3VwcG9zaXRpb24pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHN1cHBvc2l0aW9uSlNPTiA9IHN1cHBvc2l0aW9uLnRvSlNPTih0b2tlbnMpO1xuXG4gICAgICAgICAgICByZXR1cm4gc3VwcG9zaXRpb25KU09OO1xuICAgICAgICAgIH0pLFxuICAgICAgICAgIGNvbnNlcXVlbmNlSlNPTiA9IHRoaXMuY29uc2VxdWVuY2UudG9KU09OKHRva2VucyksXG4gICAgICAgICAgcHJvb2ZDb250ZXh0SlNPTiA9IHRoaXMucHJvb2ZDb250ZXh0LnRvSlNPTih0b2tlbnMpLFxuICAgICAgICAgIGxhYmVscyA9IGxhYmVsc0pTT04sICAvLy9cbiAgICAgICAgICBzdXBwb3NpdGlvbnMgPSBzdXBwb3NpdGlvbnNKU09OLCAgLy8vXG4gICAgICAgICAgY29uc2VxdWVuY2UgPSBjb25zZXF1ZW5jZUpTT04sICAvLy9cbiAgICAgICAgICBwcm9vZkNvbnRleHQgPSBwcm9vZkNvbnRleHRKU09OLCAgLy8vXG4gICAgICAgICAganNvbiA9IHtcbiAgICAgICAgICAgIGxhYmVscyxcbiAgICAgICAgICAgIHN1cHBvc2l0aW9ucyxcbiAgICAgICAgICAgIGNvbnNlcXVlbmNlLFxuICAgICAgICAgICAgcHJvb2ZDb250ZXh0XG4gICAgICAgICAgfTtcblxuICAgIHJldHVybiBqc29uO1xuICB9XG5cbiAgc3RhdGljIGZyb21KU09OQW5kRmlsZUNvbnRleHQoQ2xhc3MsIGpzb24sIGZpbGVDb250ZXh0KSB7XG4gICAgbGV0IHsgbGFiZWxzIH0gPSBqc29uO1xuXG4gICAgY29uc3QgbGFiZWxzSlNPTiA9IGxhYmVsczsgIC8vL1xuXG4gICAgbGFiZWxzID0gbGFiZWxzSlNPTi5tYXAoKGxhYmVsSlNPTikgPT4ge1xuICAgICAgY29uc3QganNvbiA9IGxhYmVsSlNPTiwgLy8vXG4gICAgICAgICAgICBsYWJlbCA9IExhYmVsLmZyb21KU09OQW5kRmlsZUNvbnRleHQoanNvbiwgZmlsZUNvbnRleHQpO1xuXG4gICAgICByZXR1cm4gbGFiZWw7XG4gICAgfSk7XG5cbiAgICBsZXQgeyBzdXBwb3NpdGlvbnMgfSA9IGpzb247XG5cbiAgICBjb25zdCBzdXBwb3NpdGlvbnNKU09OID0gc3VwcG9zaXRpb25zOyAgLy8vXG5cbiAgICBzdXBwb3NpdGlvbnMgPSBzdXBwb3NpdGlvbnNKU09OLm1hcCgoc3VwcG9zaXRpb25KU09OKSA9PiB7XG4gICAgICBjb25zdCBqc29uID0gc3VwcG9zaXRpb25KU09OLCAvLy9cbiAgICAgICAgICAgIHN1cHBvc2l0aW9uID0gU3VwcG9zaXRpb24uZnJvbUpTT05BbmRGaWxlQ29udGV4dChqc29uLCBmaWxlQ29udGV4dCk7XG5cbiAgICAgIHJldHVybiBzdXBwb3NpdGlvbjtcbiAgICB9KTtcblxuICAgIGxldCB7IGNvbnNlcXVlbmNlIH0gPSBqc29uO1xuXG4gICAgY29uc3QgY29uc2VxdWVuY2VKU09OID0gY29uc2VxdWVuY2U7ICAvLy9cblxuICAgIGpzb24gPSBjb25zZXF1ZW5jZUpTT047ICAvLy9cblxuICAgIGNvbnNlcXVlbmNlID0gQ29uc2VxdWVuY2UuZnJvbUpTT05BbmRGaWxlQ29udGV4dChqc29uLCBmaWxlQ29udGV4dCk7XG5cbiAgICBsZXQgeyBwcm9vZkNvbnRleHQgfSA9IGpzb247XG5cbiAgICBjb25zdCBwcm9vZkNvbnRleHRKU09OID0gcHJvb2ZDb250ZXh0OyAgLy8vXG5cbiAgICBqc29uID0gcHJvb2ZDb250ZXh0SlNPTjsgIC8vL1xuXG4gICAgcHJvb2ZDb250ZXh0ID0gUHJvb2ZDb250ZXh0LmZyb21KU09OQW5kRmlsZUNvbnRleHQoanNvbiwgZmlsZUNvbnRleHQpO1xuXG4gICAgcmV0dXJuIG5ldyBDbGFzcyhsYWJlbHMsIHN1cHBvc2l0aW9ucywgY29uc2VxdWVuY2UsIHByb29mQ29udGV4dCk7ICAvLy9cbiAgfVxuXG4gIHN0YXRpYyBmcm9tTGFiZWxzU3VwcG9zaXRpb25zQ29uc2VxdWVuY2VBbmRQcm9vZkNvbnRleHQoQ2xhc3MsIGxhYmVscywgc3VwcG9zaXRpb25zLCBjb25zZXF1ZW5jZSwgcHJvb2ZDb250ZXh0KSB7IHJldHVybiBuZXcgQ2xhc3MobGFiZWxzLCBzdXBwb3NpdGlvbnMsIGNvbnNlcXVlbmNlLCBwcm9vZkNvbnRleHQpOyB9XG59XG5cbmZ1bmN0aW9uIG1hdGNoU3VwcG9zaXRpb24oc3VwcG9zaXRpb24sIHByb29mU3RlcHMsIHN1YnN0aXR1dGlvbnMsIHByb29mQ29udGV4dCwgc3RhdGVtZW50UHJvb2ZDb250ZXh0KSB7XG4gIGNvbnN0IHByb29mU3RlcCA9IHBydW5lKHByb29mU3RlcHMsIChwcm9vZlN0ZXApID0+IHtcbiAgICBjb25zdCBzdWJwcm9vZk5vZGUgPSBwcm9vZlN0ZXAuZ2V0U3VicHJvb2ZOb2RlKCksXG4gICAgICAgICAgc3RhdGVtZW50Tm9kZSA9IHByb29mU3RlcC5nZXRTdGF0ZW1lbnROb2RlKCk7XG5cbiAgICBpZiAoc3VicHJvb2ZOb2RlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBzdWJQcm9vZk1hdGNoZXMgPSBzdXBwb3NpdGlvbi5tYXRjaFN1YnByb29mTm9kZShzdWJwcm9vZk5vZGUsIHN1YnN0aXR1dGlvbnMsIHByb29mQ29udGV4dCwgc3RhdGVtZW50UHJvb2ZDb250ZXh0KTtcblxuICAgICAgaWYgKCFzdWJQcm9vZk1hdGNoZXMpIHsgIC8vL1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoc3RhdGVtZW50Tm9kZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3Qgc3RhdGVtZW50TWF0Y2hlcyA9IHN1cHBvc2l0aW9uLm1hdGNoU3RhdGVtZW50Tm9kZShzdGF0ZW1lbnROb2RlLCBzdWJzdGl0dXRpb25zLCBwcm9vZkNvbnRleHQsIHN0YXRlbWVudFByb29mQ29udGV4dCk7XG5cbiAgICAgIGlmICghc3RhdGVtZW50TWF0Y2hlcykgeyAgLy8vXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICB9KSB8fCBudWxsO1xuXG4gIGNvbnN0IHN1cHBvc2l0aW9uTWF0Y2hlcyA9IChwcm9vZlN0ZXAgIT09IG51bGwpO1xuXG4gIHJldHVybiBzdXBwb3NpdGlvbk1hdGNoZXM7XG59XG5cbmZ1bmN0aW9uIG1hdGNoU3VwcG9zaXRpb25zKHN1cHBvc2l0aW9uLCBwcm9vZlN0ZXBzLCBzdWJzdGl0dXRpb25zLCBwcm9vZkNvbnRleHQsIHN0YXRlbWVudFByb29mQ29udGV4dCkge1xuICBjb25zdCBzdXBwb3NpdGlvbnNNYXRjaCA9IHN1cHBvc2l0aW9uLmV2ZXJ5KChzdXBwb3NpdGlvbikgPT4ge1xuICAgIGNvbnN0IHN1cHBvc2l0aW9uTWF0Y2hlcyA9IG1hdGNoU3VwcG9zaXRpb24oc3VwcG9zaXRpb24sIHByb29mU3RlcHMsIHN1YnN0aXR1dGlvbnMsIHByb29mQ29udGV4dCwgc3RhdGVtZW50UHJvb2ZDb250ZXh0KTtcblxuICAgIGlmIChzdXBwb3NpdGlvbk1hdGNoZXMpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIHN1cHBvc2l0aW9uc01hdGNoO1xufVxuXG5mdW5jdGlvbiBtYXRjaENvbnNlcXVlbmNlKGNvbnNlcXVlbmNlLCBzdGF0ZW1lbnROb2RlLCBzdWJzdGl0dXRpb25zLCBwcm9vZkNvbnRleHQsIHN0YXRlbWVudFByb29mQ29udGV4dCkge1xuICBjb25zdCBub25UZXJtaW5hbE5vZGVNYXRjaGVzID0gY29uc2VxdWVuY2UubWF0Y2hTdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUsIHN1YnN0aXR1dGlvbnMsIHByb29mQ29udGV4dCwgc3RhdGVtZW50UHJvb2ZDb250ZXh0KSxcbiAgICAgICAgY29uc2VxdWVuY2VNYXRjaGVzID0gbm9uVGVybWluYWxOb2RlTWF0Y2hlczsgLy8vXG5cbiAgcmV0dXJuIGNvbnNlcXVlbmNlTWF0Y2hlcztcbn1cbiJdLCJuYW1lcyI6WyJBeGlvbUxlbW1hVGhlb3JlbUNvbmplY3R1cmUiLCJsYWJlbHMiLCJzdXBwb3NpdGlvbnMiLCJjb25zZXF1ZW5jZSIsInByb29mQ29udGV4dCIsImdldExhYmVscyIsImdldFN1cHBvc2l0aW9ucyIsImdldENvbnNlcXVlbmNlIiwiZ2V0UHJvb2ZDb250ZXh0IiwibWF0Y2hMYWJlbE5hbWUiLCJsYWJlbE5hbWUiLCJtYXRjaGVzTGFiZWxOYW1lIiwic29tZSIsImxhYmVsIiwibmFtZSIsImxhYmVsTWF0Y2hlc05hbWUiLCJtYXRjaE5hbWUiLCJtYXRjaFN0YXRlbWVudCIsInN0YXRlbWVudE5vZGUiLCJzdGF0ZW1lbnRQcm9vZkNvbnRleHQiLCJzdGF0ZW1lbnROYXRjaGVzIiwic3VwcG9zaXRpb25zTGVuZ3RoIiwibGVuZ3RoIiwic3Vic3RpdHV0aW9ucyIsImNvbnNlcXVlbmNlTWF0Y2hlcyIsIm1hdGNoQ29uc2VxdWVuY2UiLCJwcm9vZlN0ZXBzIiwiZ2V0UHJvb2ZTdGVwcyIsInNvbWVTdWJBcnJheSIsInN1cHBvc2l0aW9uc01hdGNoQ29uc2VxdWVuY2UiLCJzdXBwb3NpdGlvbnNNYXRjaCIsIm1hdGNoU3VwcG9zaXRpb25zIiwidG9KU09OIiwidG9rZW5zIiwibGFiZWxzSlNPTiIsIm1hcCIsImxhYmVsSlNPTiIsInN1cHBvc2l0aW9uc0pTT04iLCJzdXBwb3NpdGlvbiIsInN1cHBvc2l0aW9uSlNPTiIsImNvbnNlcXVlbmNlSlNPTiIsInByb29mQ29udGV4dEpTT04iLCJqc29uIiwiZnJvbUpTT05BbmRGaWxlQ29udGV4dCIsIkNsYXNzIiwiZmlsZUNvbnRleHQiLCJMYWJlbCIsIlN1cHBvc2l0aW9uIiwiQ29uc2VxdWVuY2UiLCJQcm9vZkNvbnRleHQiLCJmcm9tTGFiZWxzU3VwcG9zaXRpb25zQ29uc2VxdWVuY2VBbmRQcm9vZkNvbnRleHQiLCJtYXRjaFN1cHBvc2l0aW9uIiwicHJvb2ZTdGVwIiwicHJ1bmUiLCJzdWJwcm9vZk5vZGUiLCJnZXRTdWJwcm9vZk5vZGUiLCJnZXRTdGF0ZW1lbnROb2RlIiwic3ViUHJvb2ZNYXRjaGVzIiwibWF0Y2hTdWJwcm9vZk5vZGUiLCJzdGF0ZW1lbnRNYXRjaGVzIiwibWF0Y2hTdGF0ZW1lbnROb2RlIiwic3VwcG9zaXRpb25NYXRjaGVzIiwiZXZlcnkiLCJub25UZXJtaW5hbE5vZGVNYXRjaGVzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQVVxQkE7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