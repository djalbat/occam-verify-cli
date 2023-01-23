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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9heGlvbUxlbW1hVGhlb3JlbUNvbmplY3R1cmUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBMYWJlbCBmcm9tIFwiLi9sYWJlbFwiO1xuaW1wb3J0IFN1cHBvc2l0aW9uIGZyb20gXCIuL3N1cHBvc2l0aW9uXCI7XG5pbXBvcnQgQ29uc2VxdWVuY2UgZnJvbSBcIi4vY29uc2VxdWVuY2VcIjtcblxuaW1wb3J0IHsgcHJ1bmUgfSBmcm9tIFwiLi91dGlsaXRpZXMvYXJyYXlcIjtcbmltcG9ydCB7IHNvbWVTdWJBcnJheSB9IGZyb20gXCIuL3V0aWxpdGllcy9hcnJheVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBeGlvbUxlbW1hVGhlb3JlbUNvbmplY3R1cmUge1xuICBjb25zdHJ1Y3RvcihsYWJlbHMsIHN1cHBvc2l0aW9ucywgY29uc2VxdWVuY2UpIHtcbiAgICB0aGlzLmxhYmVscyA9IGxhYmVscztcbiAgICB0aGlzLnN1cHBvc2l0aW9ucyA9IHN1cHBvc2l0aW9ucztcbiAgICB0aGlzLmNvbnNlcXVlbmNlID0gY29uc2VxdWVuY2U7XG4gIH1cblxuICBnZXRMYWJlbHMoKSB7XG4gICAgcmV0dXJuIHRoaXMubGFiZWxzO1xuICB9XG5cbiAgZ2V0U3VwcG9zaXRpb25zKCkge1xuICAgIHJldHVybiB0aGlzLnN1cHBvc2l0aW9ucztcbiAgfVxuXG4gIGdldENvbnNlcXVlbmNlKCkge1xuICAgIHJldHVybiB0aGlzLmNvbnNlcXVlbmNlO1xuICB9XG5cbiAgbWF0Y2hMYWJlbE5hbWUobGFiZWxOYW1lKSB7XG4gICAgY29uc3QgbWF0Y2hlc0xhYmVsTmFtZSA9IHRoaXMubGFiZWxzLnNvbWUoKGxhYmVsKSA9PiB7XG4gICAgICBjb25zdCBuYW1lID0gbGFiZWxOYW1lLCAvLy9cbiAgICAgICAgICAgIGxhYmVsTWF0Y2hlc05hbWUgPSBsYWJlbC5tYXRjaE5hbWUobmFtZSk7XG5cbiAgICAgIGlmIChsYWJlbE1hdGNoZXNOYW1lKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIG1hdGNoZXNMYWJlbE5hbWU7XG4gIH1cblxuICBtYXRjaFN0YXRlbWVudChzdGF0ZW1lbnROb2RlLCBwcm9vZkNvbnRleHQpIHtcbiAgICBsZXQgc3RhdGVtZW50TmF0Y2hlcztcblxuICAgIGNvbnN0IHN1cHBvc2l0aW9uc0xlbmd0aCA9IHRoaXMuc3VwcG9zaXRpb25zLmxlbmd0aDtcblxuICAgIGlmIChzdXBwb3NpdGlvbnNMZW5ndGggPT09IDApIHtcbiAgICAgIGNvbnN0IHN1YnN0aXR1dGlvbnMgPSBbXSxcbiAgICAgICAgICAgIGNvbnNlcXVlbmNlTWF0Y2hlcyA9IG1hdGNoQ29uc2VxdWVuY2UodGhpcy5jb25zZXF1ZW5jZSwgc3RhdGVtZW50Tm9kZSwgc3Vic3RpdHV0aW9ucyk7XG5cbiAgICAgIHN0YXRlbWVudE5hdGNoZXMgPSBjb25zZXF1ZW5jZU1hdGNoZXM7IC8vL1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBwcm9vZlN0ZXBzID0gcHJvb2ZDb250ZXh0LmdldFByb29mU3RlcHMoKTtcblxuICAgICAgc3RhdGVtZW50TmF0Y2hlcyA9IHNvbWVTdWJBcnJheShwcm9vZlN0ZXBzLCBzdXBwb3NpdGlvbnNMZW5ndGgsIChwcm9vZlN0ZXBzKSA9PiB7XG4gICAgICAgIGNvbnN0IHN1cHBvc2l0aW9uc01hdGNoQ29uc2VxdWVuY2UgPSBtYXRjaFN1cHBvc2l0aW9uc0FuZENvbnNlcXVlbmNlKHRoaXMuc3VwcG9zaXRpb25zLCB0aGlzLmNvbnNlcXVlbmNlLCBwcm9vZlN0ZXBzLCBzdGF0ZW1lbnROb2RlKTtcblxuICAgICAgICBpZiAoc3VwcG9zaXRpb25zTWF0Y2hDb25zZXF1ZW5jZSkge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3RhdGVtZW50TmF0Y2hlcztcbiAgfVxuXG4gIHRvSlNPTih0b2tlbnMpIHtcbiAgICBjb25zdCB7IGtpbmQgfSA9IHRoaXMuY29uc3RydWN0b3IsXG4gICAgICAgICAgbGFiZWxzSlNPTiA9IHRoaXMubGFiZWxzLm1hcCgobGFiZWwpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGxhYmVsSlNPTiA9IGxhYmVsLnRvSlNPTih0b2tlbnMpO1xuXG4gICAgICAgICAgICByZXR1cm4gbGFiZWxKU09OO1xuICAgICAgICAgIH0pLFxuICAgICAgICAgIHN1cHBvc2l0aW9uc0pTT04gPSB0aGlzLnN1cHBvc2l0aW9ucy5tYXAoKHN1cHBvc2l0aW9uKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBzdXBwb3NpdGlvbkpTT04gPSBzdXBwb3NpdGlvbi50b0pTT04odG9rZW5zKTtcblxuICAgICAgICAgICAgcmV0dXJuIHN1cHBvc2l0aW9uSlNPTjtcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBjb25zZXF1ZW5jZUpTT04gPSB0aGlzLmNvbnNlcXVlbmNlLnRvSlNPTih0b2tlbnMpLFxuICAgICAgICAgIGxhYmVscyA9IGxhYmVsc0pTT04sICAvLy9cbiAgICAgICAgICBzdXBwb3NpdGlvbnMgPSBzdXBwb3NpdGlvbnNKU09OLCAgLy8vXG4gICAgICAgICAgY29uc2VxdWVuY2UgPSBjb25zZXF1ZW5jZUpTT04sICAvLy9cbiAgICAgICAgICBqc29uID0ge1xuICAgICAgICAgICAga2luZCxcbiAgICAgICAgICAgIGxhYmVscyxcbiAgICAgICAgICAgIHN1cHBvc2l0aW9ucyxcbiAgICAgICAgICAgIGNvbnNlcXVlbmNlXG4gICAgICAgICAgfTtcblxuICAgIHJldHVybiBqc29uO1xuICB9XG5cbiAgc3RhdGljIGZyb21KU09OKENsYXNzLCBqc29uLCByZWxlYXNlQ29udGV4dCkge1xuICAgIGxldCB7IGxhYmVscyB9ID0ganNvbjtcblxuICAgIGNvbnN0IGxhYmVsc0pTT04gPSBsYWJlbHM7ICAvLy9cblxuICAgIGxhYmVscyA9IGxhYmVsc0pTT04ubWFwKChsYWJlbEpTT04pID0+IHtcbiAgICAgIGNvbnN0IGpzb24gPSBsYWJlbEpTT04sIC8vL1xuICAgICAgICAgICAgbGFiZWwgPSBMYWJlbC5mcm9tSlNPTihqc29uLCByZWxlYXNlQ29udGV4dCk7XG5cbiAgICAgIHJldHVybiBsYWJlbDtcbiAgICB9KTtcblxuICAgIGxldCB7IHN1cHBvc2l0aW9ucyB9ID0ganNvbjtcblxuICAgIGNvbnN0IHN1cHBvc2l0aW9uc0pTT04gPSBzdXBwb3NpdGlvbnM7ICAvLy9cblxuICAgIHN1cHBvc2l0aW9ucyA9IHN1cHBvc2l0aW9uc0pTT04ubWFwKChzdXBwb3NpdGlvbkpTT04pID0+IHtcbiAgICAgIGNvbnN0IGpzb24gPSBzdXBwb3NpdGlvbkpTT04sIC8vL1xuICAgICAgICAgICAgc3VwcG9zaXRpb24gPSBTdXBwb3NpdGlvbi5mcm9tSlNPTihqc29uLCByZWxlYXNlQ29udGV4dCk7XG5cbiAgICAgIHJldHVybiBzdXBwb3NpdGlvbjtcbiAgICB9KTtcblxuICAgIGxldCB7IGNvbnNlcXVlbmNlIH0gPSBqc29uO1xuXG4gICAgY29uc3QgY29uc2VxdWVuY2VKU09OID0gY29uc2VxdWVuY2U7ICAvLy9cblxuICAgIGpzb24gPSBjb25zZXF1ZW5jZUpTT047ICAvLy9cblxuICAgIGNvbnNlcXVlbmNlID0gQ29uc2VxdWVuY2UuZnJvbUpTT04oanNvbiwgcmVsZWFzZUNvbnRleHQpO1xuXG4gICAgcmV0dXJuIG5ldyBDbGFzcyhsYWJlbHMsIHN1cHBvc2l0aW9ucywgY29uc2VxdWVuY2UpOyAgLy8vXG4gIH1cblxuICBzdGF0aWMgZnJvbUxhYmVsc1N1cHBvc2l0aW9uc0FuZENvbnNlcXVlbmNlKENsYXNzLCBsYWJlbHMsIHN1cHBvc2l0aW9ucywgY29uc2VxdWVuY2UpIHsgcmV0dXJuIG5ldyBDbGFzcyhsYWJlbHMsIHN1cHBvc2l0aW9ucywgY29uc2VxdWVuY2UpOyB9XG59XG5cbmZ1bmN0aW9uIG1hdGNoU3VwcG9zaXRpb24oc3VwcG9zaXRpb24sIHByb29mU3RlcHMsIHN1YnN0aXR1dGlvbnMpIHtcbiAgY29uc3QgcHJvb2ZTdGVwID0gcHJ1bmUocHJvb2ZTdGVwcywgKHByb29mU3RlcCkgPT4ge1xuICAgIGNvbnN0IHN1YnByb29mTm9kZSA9IHByb29mU3RlcC5nZXRTdWJwcm9vZk5vZGUoKSxcbiAgICAgICAgICBzdGF0ZW1lbnROb2RlID0gcHJvb2ZTdGVwLmdldFN0YXRlbWVudE5vZGUoKTtcblxuICAgIGlmIChzdWJwcm9vZk5vZGUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHN1YlByb29mTWF0Y2hlcyA9IHN1cHBvc2l0aW9uLm1hdGNoU3VicHJvb2ZOb2RlKHN1YnByb29mTm9kZSwgc3Vic3RpdHV0aW9ucyk7XG5cbiAgICAgIGlmICghc3ViUHJvb2ZNYXRjaGVzKSB7ICAvLy9cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHN0YXRlbWVudE5vZGUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHN0YXRlbWVudE1hdGNoZXMgPSBzdXBwb3NpdGlvbi5tYXRjaFN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSwgc3Vic3RpdHV0aW9ucyk7XG5cbiAgICAgIGlmICghc3RhdGVtZW50TWF0Y2hlcykgeyAgLy8vXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICB9KSB8fCBudWxsO1xuXG4gIGNvbnN0IHN1cHBvc2l0aW9uTWF0Y2hlcyA9IChwcm9vZlN0ZXAgIT09IG51bGwpO1xuXG4gIHJldHVybiBzdXBwb3NpdGlvbk1hdGNoZXM7XG59XG5cbmZ1bmN0aW9uIG1hdGNoU3VwcG9zaXRpb25zKHN1cHBvc2l0aW9uLCBwcm9vZlN0ZXBzLCBzdWJzdGl0dXRpb25zKSB7XG4gIGNvbnN0IHN1cHBvc2l0aW9uc01hdGNoID0gc3VwcG9zaXRpb24uZXZlcnkoKHN1cHBvc2l0aW9uKSA9PiB7XG4gICAgY29uc3Qgc3VwcG9zaXRpb25NYXRjaGVzID0gbWF0Y2hTdXBwb3NpdGlvbihzdXBwb3NpdGlvbiwgcHJvb2ZTdGVwcywgc3Vic3RpdHV0aW9ucyk7XG5cbiAgICBpZiAoc3VwcG9zaXRpb25NYXRjaGVzKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiBzdXBwb3NpdGlvbnNNYXRjaDtcbn1cblxuZnVuY3Rpb24gbWF0Y2hDb25zZXF1ZW5jZShjb25zZXF1ZW5jZSwgc3RhdGVtZW50Tm9kZSwgc3Vic3RpdHV0aW9ucykge1xuICBjb25zdCBub25UZXJtaW5hbE5vZGVNYXRjaGVzID0gY29uc2VxdWVuY2UubWF0Y2hTdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUsIHN1YnN0aXR1dGlvbnMpLFxuICAgICAgICBjb25zZXF1ZW5jZU1hdGNoZXMgPSBub25UZXJtaW5hbE5vZGVNYXRjaGVzOyAvLy9cblxuICByZXR1cm4gY29uc2VxdWVuY2VNYXRjaGVzO1xufVxuXG5mdW5jdGlvbiBtYXRjaFN1cHBvc2l0aW9uc0FuZENvbnNlcXVlbmNlKHN1cHBvc2l0aW9ucywgY29uc2VxdWVuY2UsIHByb29mU3RlcHMsIHN0YXRlbWVudE5vZGUpIHtcbiAgbGV0IHN1cHBvc2l0aW9uc01hdGNoQ29uc2VxdWVuY2UgPSBmYWxzZTtcblxuICBjb25zdCBzdWJzdGl0dXRpb25zID0gW10sXG4gICAgICAgIHN1cHBvc2l0aW9uc01hdGNoID0gbWF0Y2hTdXBwb3NpdGlvbnMoc3VwcG9zaXRpb25zLCBwcm9vZlN0ZXBzLCBzdWJzdGl0dXRpb25zKTtcblxuICBpZiAoc3VwcG9zaXRpb25zTWF0Y2gpIHtcbiAgICBjb25zdCBjb25zZXF1ZW5jZU1hdGNoZXMgPSBtYXRjaENvbnNlcXVlbmNlKGNvbnNlcXVlbmNlLCBzdGF0ZW1lbnROb2RlLCBzdWJzdGl0dXRpb25zKTtcblxuICAgIHN1cHBvc2l0aW9uc01hdGNoQ29uc2VxdWVuY2UgPSBjb25zZXF1ZW5jZU1hdGNoZXM7ICAvLy9cbiAgfVxuXG4gIHJldHVybiBzdXBwb3NpdGlvbnNNYXRjaENvbnNlcXVlbmNlO1xufVxuIl0sIm5hbWVzIjpbIkF4aW9tTGVtbWFUaGVvcmVtQ29uamVjdHVyZSIsImxhYmVscyIsInN1cHBvc2l0aW9ucyIsImNvbnNlcXVlbmNlIiwiZ2V0TGFiZWxzIiwiZ2V0U3VwcG9zaXRpb25zIiwiZ2V0Q29uc2VxdWVuY2UiLCJtYXRjaExhYmVsTmFtZSIsImxhYmVsTmFtZSIsIm1hdGNoZXNMYWJlbE5hbWUiLCJzb21lIiwibGFiZWwiLCJuYW1lIiwibGFiZWxNYXRjaGVzTmFtZSIsIm1hdGNoTmFtZSIsIm1hdGNoU3RhdGVtZW50Iiwic3RhdGVtZW50Tm9kZSIsInByb29mQ29udGV4dCIsInN0YXRlbWVudE5hdGNoZXMiLCJzdXBwb3NpdGlvbnNMZW5ndGgiLCJsZW5ndGgiLCJzdWJzdGl0dXRpb25zIiwiY29uc2VxdWVuY2VNYXRjaGVzIiwibWF0Y2hDb25zZXF1ZW5jZSIsInByb29mU3RlcHMiLCJnZXRQcm9vZlN0ZXBzIiwic29tZVN1YkFycmF5Iiwic3VwcG9zaXRpb25zTWF0Y2hDb25zZXF1ZW5jZSIsIm1hdGNoU3VwcG9zaXRpb25zQW5kQ29uc2VxdWVuY2UiLCJ0b0pTT04iLCJ0b2tlbnMiLCJraW5kIiwiY29uc3RydWN0b3IiLCJsYWJlbHNKU09OIiwibWFwIiwibGFiZWxKU09OIiwic3VwcG9zaXRpb25zSlNPTiIsInN1cHBvc2l0aW9uIiwic3VwcG9zaXRpb25KU09OIiwiY29uc2VxdWVuY2VKU09OIiwianNvbiIsImZyb21KU09OIiwiQ2xhc3MiLCJyZWxlYXNlQ29udGV4dCIsIkxhYmVsIiwiU3VwcG9zaXRpb24iLCJDb25zZXF1ZW5jZSIsImZyb21MYWJlbHNTdXBwb3NpdGlvbnNBbmRDb25zZXF1ZW5jZSIsIm1hdGNoU3VwcG9zaXRpb24iLCJwcm9vZlN0ZXAiLCJwcnVuZSIsInN1YnByb29mTm9kZSIsImdldFN1YnByb29mTm9kZSIsImdldFN0YXRlbWVudE5vZGUiLCJzdWJQcm9vZk1hdGNoZXMiLCJtYXRjaFN1YnByb29mTm9kZSIsInN0YXRlbWVudE1hdGNoZXMiLCJtYXRjaFN0YXRlbWVudE5vZGUiLCJzdXBwb3NpdGlvbk1hdGNoZXMiLCJtYXRjaFN1cHBvc2l0aW9ucyIsInN1cHBvc2l0aW9uc01hdGNoIiwiZXZlcnkiLCJub25UZXJtaW5hbE5vZGVNYXRjaGVzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQVNxQkE7OzswREFQSDtnRUFDTTtnRUFDQTtxQkFFRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUdQLElBQUEsQUFBTUEsNENBd0hsQixBQXhIWTthQUFNQSw0QkFDUEMsTUFBTSxFQUFFQyxZQUFZLEVBQUVDLFdBQVc7OEJBRDFCSDtRQUVqQixJQUFJLENBQUNDLE1BQU0sR0FBR0E7UUFDZCxJQUFJLENBQUNDLFlBQVksR0FBR0E7UUFDcEIsSUFBSSxDQUFDQyxXQUFXLEdBQUdBOztpQkFKRkg7O1lBT25CSSxLQUFBQTttQkFBQUEsU0FBQUEsWUFBWTtnQkFDVixPQUFPLElBQUksQ0FBQ0gsTUFBTTtZQUNwQjs7O1lBRUFJLEtBQUFBO21CQUFBQSxTQUFBQSxrQkFBa0I7Z0JBQ2hCLE9BQU8sSUFBSSxDQUFDSCxZQUFZO1lBQzFCOzs7WUFFQUksS0FBQUE7bUJBQUFBLFNBQUFBLGlCQUFpQjtnQkFDZixPQUFPLElBQUksQ0FBQ0gsV0FBVztZQUN6Qjs7O1lBRUFJLEtBQUFBO21CQUFBQSxTQUFBQSxlQUFlQyxTQUFTLEVBQUU7Z0JBQ3hCLElBQU1DLG1CQUFtQixJQUFJLENBQUNSLE1BQU0sQ0FBQ1MsSUFBSSxDQUFDLFNBQUNDLE9BQVU7b0JBQ25ELElBQU1DLE9BQU9KLFdBQ1BLLG1CQUFtQkYsTUFBTUcsU0FBUyxDQUFDRjtvQkFFekMsSUFBSUMsa0JBQWtCO3dCQUNwQixPQUFPLElBQUk7b0JBQ2IsQ0FBQztnQkFDSDtnQkFFQSxPQUFPSjtZQUNUOzs7WUFFQU0sS0FBQUE7bUJBQUFBLFNBQUFBLGVBQWVDLGFBQWEsRUFBRUMsWUFBWSxFQUFFOztnQkFDMUMsSUFBSUM7Z0JBRUosSUFBTUMscUJBQXFCLElBQUksQ0FBQ2pCLFlBQVksQ0FB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