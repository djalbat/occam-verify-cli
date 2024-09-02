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
var _intrinsicLevel = /*#__PURE__*/ _interop_require_default(require("./context/local/intrinsicLevel"));
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
    function AxiomLemmaTheoremConjecture(labels, suppositions, consequent, localContext) {
        _class_call_check(this, AxiomLemmaTheoremConjecture);
        this.labels = labels;
        this.suppositions = suppositions;
        this.consequent = consequent;
        this.localContext = localContext;
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
            key: "getLocalContext",
            value: function getLocalContext() {
                return this.localContext;
            }
        },
        {
            key: "matchStatement",
            value: function matchStatement(statementNode, localContext) {
                var statementNatches = false;
                var proofSteps = localContext.getProofSteps(), substitutions = [], suppositionsMatch = matchSuppositions(this.suppositions, proofSteps, substitutions, this.localContext, localContext);
                if (suppositionsMatch) {
                    var consequentMatches = matchConsequent(this.consequent, statementNode, substitutions, this.localContext, localContext);
                    statementNatches = consequentMatches; ///
                }
                return statementNatches;
            }
        },
        {
            key: "matchMetavariableNode",
            value: function matchMetavariableNode(metavariableNode) {
                var matchesMetavariableNode = this.labels.some(function(label) {
                    var labelMatchesMetavariableNode = label.matchMetavariableNode(metavariableNode);
                    if (labelMatchesMetavariableNode) {
                        return true;
                    }
                });
                return matchesMetavariableNode;
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
                }), consequentJSON = this.consequent.toJSON(tokens), localContextJSON = this.localContext.toJSON(tokens), labels = labelsJSON, suppositions = suppositionsJSON, consequent = consequentJSON, localContext = localContextJSON, json = {
                    labels: labels,
                    suppositions: suppositions,
                    consequent: consequent,
                    localContext: localContext
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
                var suppositions = json.suppositions, consequent = json.consequent, localContext = json.localContext;
                var suppositionsJSON = suppositions; ///
                suppositions = suppositionsJSON.map(function(suppositionJSON) {
                    var _$json = suppositionJSON, supposition = _supposition.default.fromJSONAndFileContext(_$json, fileContext);
                    return supposition;
                });
                var consequentJSON = consequent; ///
                json = consequentJSON; ///
                consequent = _consequent.default.fromJSONAndFileContext(json, fileContext);
                var localContextJSON = localContext; ///
                json = localContextJSON; ///
                var intrinsicLevelLocalContext = _intrinsicLevel.default.fromJSONAndFileContext(json, fileContext);
                localContext = intrinsicLevelLocalContext; ///
                return new Class(labels, suppositions, consequent, localContext); ///
            }
        },
        {
            key: "fromLabelsSuppositionsConsequentAndLocalContext",
            value: function fromLabelsSuppositionsConsequentAndLocalContext(Class, labels, suppositions, consequent, localContext) {
                return new Class(labels, suppositions, consequent, localContext);
            }
        }
    ]);
    return AxiomLemmaTheoremConjecture;
}();
function matchSuppositions(suppositions, proofSteps, substitutions, localContext, statementLocalContext) {
    suppositions = (0, _array.reverse)(suppositions); ///
    proofSteps = (0, _array.reverse)(proofSteps); ///
    var suppositionsMatch = (0, _array.correlate)(suppositions, proofSteps, function(supposition, proofStep) {
        var suppositionMatches = matchSupposition(supposition, proofStep, substitutions, localContext, statementLocalContext);
        if (suppositionMatches) {
            return true;
        }
    });
    return suppositionsMatch;
}
function matchSupposition(supposition, proofStep, substitutions, localContext, statementLocalContext) {
    var suppositionMatches = false;
    var statementNode = proofStep.getStatementNode();
    if (statementNode !== null) {
        var suppositionMatchesStatementNode = supposition.matchStatementNode(statementNode, substitutions, localContext, statementLocalContext);
        suppositionMatches = suppositionMatchesStatementNode; ///
    }
    return suppositionMatches;
}
function matchConsequent(consequent, statementNode, substitutions, localContext, statementLocalContext) {
    var consequentMatchesStatementNode = consequent.matchStatementNode(statementNode, substitutions, localContext, statementLocalContext), consequentMatches = consequentMatchesStatementNode; ///
    return consequentMatches;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9heGlvbUxlbW1hVGhlb3JlbUNvbmplY3R1cmUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBMYWJlbCBmcm9tIFwiLi9sYWJlbFwiO1xuaW1wb3J0IENvbnNlcXVlbnQgZnJvbSBcIi4vY29uc2VxdWVudFwiO1xuaW1wb3J0IFN1cHBvc2l0aW9uIGZyb20gXCIuL3N1cHBvc2l0aW9uXCI7XG5pbXBvcnQgSW50cmluc2ljTGV2ZWxMb2NhbENvbnRleHQgZnJvbSBcIi4vY29udGV4dC9sb2NhbC9pbnRyaW5zaWNMZXZlbFwiO1xuXG5pbXBvcnQgeyByZXZlcnNlLCBjb3JyZWxhdGUgfSBmcm9tIFwiLi91dGlsaXRpZXMvYXJyYXlcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXhpb21MZW1tYVRoZW9yZW1Db25qZWN0dXJlIHtcbiAgY29uc3RydWN0b3IobGFiZWxzLCBzdXBwb3NpdGlvbnMsIGNvbnNlcXVlbnQsIGxvY2FsQ29udGV4dCkge1xuICAgIHRoaXMubGFiZWxzID0gbGFiZWxzO1xuICAgIHRoaXMuc3VwcG9zaXRpb25zID0gc3VwcG9zaXRpb25zO1xuICAgIHRoaXMuY29uc2VxdWVudCA9IGNvbnNlcXVlbnQ7XG4gICAgdGhpcy5sb2NhbENvbnRleHQgPSBsb2NhbENvbnRleHQ7XG4gIH1cblxuICBnZXRMYWJlbHMoKSB7XG4gICAgcmV0dXJuIHRoaXMubGFiZWxzO1xuICB9XG5cbiAgZ2V0U3VwcG9zaXRpb25zKCkge1xuICAgIHJldHVybiB0aGlzLnN1cHBvc2l0aW9ucztcbiAgfVxuXG4gIGdldENvbnNlcXVlbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuY29uc2VxdWVudDtcbiAgfVxuXG4gIGdldExvY2FsQ29udGV4dCgpIHtcbiAgICByZXR1cm4gdGhpcy5sb2NhbENvbnRleHQ7XG4gIH1cblxuICBtYXRjaFN0YXRlbWVudChzdGF0ZW1lbnROb2RlLCBsb2NhbENvbnRleHQpIHtcbiAgICBsZXQgc3RhdGVtZW50TmF0Y2hlcyA9IGZhbHNlO1xuXG4gICAgY29uc3QgcHJvb2ZTdGVwcyA9IGxvY2FsQ29udGV4dC5nZXRQcm9vZlN0ZXBzKCksXG4gICAgICAgICAgc3Vic3RpdHV0aW9ucyA9IFtdLFxuICAgICAgICAgIHN1cHBvc2l0aW9uc01hdGNoID0gbWF0Y2hTdXBwb3NpdGlvbnModGhpcy5zdXBwb3NpdGlvbnMsIHByb29mU3RlcHMsIHN1YnN0aXR1dGlvbnMsIHRoaXMubG9jYWxDb250ZXh0LCBsb2NhbENvbnRleHQpO1xuXG4gICAgaWYgKHN1cHBvc2l0aW9uc01hdGNoKSB7XG4gICAgICBjb25zdCBjb25zZXF1ZW50TWF0Y2hlcyA9IG1hdGNoQ29uc2VxdWVudCh0aGlzLmNvbnNlcXVlbnQsIHN0YXRlbWVudE5vZGUsIHN1YnN0aXR1dGlvbnMsIHRoaXMubG9jYWxDb250ZXh0LCBsb2NhbENvbnRleHQpO1xuXG4gICAgICBzdGF0ZW1lbnROYXRjaGVzID0gY29uc2VxdWVudE1hdGNoZXM7ICAvLy9cbiAgICB9XG5cbiAgICByZXR1cm4gc3RhdGVtZW50TmF0Y2hlcztcbiAgfVxuXG4gIG1hdGNoTWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlKSB7XG4gICAgY29uc3QgbWF0Y2hlc01ldGF2YXJpYWJsZU5vZGUgPSB0aGlzLmxhYmVscy5zb21lKChsYWJlbCkgPT4ge1xuICAgICAgY29uc3QgbGFiZWxNYXRjaGVzTWV0YXZhcmlhYmxlTm9kZSA9IGxhYmVsLm1hdGNoTWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlKTtcblxuICAgICAgaWYgKGxhYmVsTWF0Y2hlc01ldGF2YXJpYWJsZU5vZGUpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gbWF0Y2hlc01ldGF2YXJpYWJsZU5vZGU7XG4gIH1cblxuICB0b0pTT04odG9rZW5zKSB7XG4gICAgY29uc3QgbGFiZWxzSlNPTiA9IHRoaXMubGFiZWxzLm1hcCgobGFiZWwpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGxhYmVsSlNPTiA9IGxhYmVsLnRvSlNPTih0b2tlbnMpO1xuXG4gICAgICAgICAgICByZXR1cm4gbGFiZWxKU09OO1xuICAgICAgICAgIH0pLFxuICAgICAgICAgIHN1cHBvc2l0aW9uc0pTT04gPSB0aGlzLnN1cHBvc2l0aW9ucy5tYXAoKHN1cHBvc2l0aW9uKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBzdXBwb3NpdGlvbkpTT04gPSBzdXBwb3NpdGlvbi50b0pTT04odG9rZW5zKTtcblxuICAgICAgICAgICAgcmV0dXJuIHN1cHBvc2l0aW9uSlNPTjtcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBjb25zZXF1ZW50SlNPTiA9IHRoaXMuY29uc2VxdWVudC50b0pTT04odG9rZW5zKSxcbiAgICAgICAgICBsb2NhbENvbnRleHRKU09OID0gdGhpcy5sb2NhbENvbnRleHQudG9KU09OKHRva2VucyksXG4gICAgICAgICAgbGFiZWxzID0gbGFiZWxzSlNPTiwgIC8vL1xuICAgICAgICAgIHN1cHBvc2l0aW9ucyA9IHN1cHBvc2l0aW9uc0pTT04sICAvLy9cbiAgICAgICAgICBjb25zZXF1ZW50ID0gY29uc2VxdWVudEpTT04sICAvLy9cbiAgICAgICAgICBsb2NhbENvbnRleHQgPSBsb2NhbENvbnRleHRKU09OLCAgLy8vXG4gICAgICAgICAganNvbiA9IHtcbiAgICAgICAgICAgIGxhYmVscyxcbiAgICAgICAgICAgIHN1cHBvc2l0aW9ucyxcbiAgICAgICAgICAgIGNvbnNlcXVlbnQsXG4gICAgICAgICAgICBsb2NhbENvbnRleHRcbiAgICAgICAgICB9O1xuXG4gICAgcmV0dXJuIGpzb247XG4gIH1cblxuICBzdGF0aWMgZnJvbUpTT05BbmRGaWxlQ29udGV4dChDbGFzcywganNvbiwgZmlsZUNvbnRleHQpIHtcbiAgICBsZXQgeyBsYWJlbHMgfSA9IGpzb247XG5cbiAgICBjb25zdCBsYWJlbHNKU09OID0gbGFiZWxzOyAgLy8vXG5cbiAgICBsYWJlbHMgPSBsYWJlbHNKU09OLm1hcCgobGFiZWxKU09OKSA9PiB7XG4gICAgICBjb25zdCBqc29uID0gbGFiZWxKU09OLCAvLy9cbiAgICAgICAgICAgIGxhYmVsID0gTGFiZWwuZnJvbUpTT05BbmRGaWxlQ29udGV4dChqc29uLCBmaWxlQ29udGV4dCk7XG5cbiAgICAgIHJldHVybiBsYWJlbDtcbiAgICB9KTtcblxuICAgIGxldCB7IHN1cHBvc2l0aW9ucywgY29uc2VxdWVudCwgbG9jYWxDb250ZXh0IH0gPSBqc29uO1xuXG4gICAgY29uc3Qgc3VwcG9zaXRpb25zSlNPTiA9IHN1cHBvc2l0aW9uczsgIC8vL1xuXG4gICAgc3VwcG9zaXRpb25zID0gc3VwcG9zaXRpb25zSlNPTi5tYXAoKHN1cHBvc2l0aW9uSlNPTikgPT4ge1xuICAgICAgY29uc3QganNvbiA9IHN1cHBvc2l0aW9uSlNPTiwgLy8vXG4gICAgICAgICAgICBzdXBwb3NpdGlvbiA9IFN1cHBvc2l0aW9uLmZyb21KU09OQW5kRmlsZUNvbnRleHQoanNvbiwgZmlsZUNvbnRleHQpO1xuXG4gICAgICByZXR1cm4gc3VwcG9zaXRpb247XG4gICAgfSk7XG5cbiAgICBjb25zdCBjb25zZXF1ZW50SlNPTiA9IGNvbnNlcXVlbnQ7ICAvLy9cblxuICAgIGpzb24gPSBjb25zZXF1ZW50SlNPTjsgIC8vL1xuXG4gICAgY29uc2VxdWVudCA9IENvbnNlcXVlbnQuZnJvbUpTT05BbmRGaWxlQ29udGV4dChqc29uLCBmaWxlQ29udGV4dCk7XG5cbiAgICBjb25zdCBsb2NhbENvbnRleHRKU09OID0gbG9jYWxDb250ZXh0OyAgLy8vXG5cbiAgICBqc29uID0gbG9jYWxDb250ZXh0SlNPTjsgIC8vL1xuXG4gICAgY29uc3QgaW50cmluc2ljTGV2ZWxMb2NhbENvbnRleHQgPSBJbnRyaW5zaWNMZXZlbExvY2FsQ29udGV4dC5mcm9tSlNPTkFuZEZpbGVDb250ZXh0KGpzb24sIGZpbGVDb250ZXh0KTtcblxuICAgIGxvY2FsQ29udGV4dCA9IGludHJpbnNpY0xldmVsTG9jYWxDb250ZXh0OyAgLy8vXG5cbiAgICByZXR1cm4gbmV3IENsYXNzKGxhYmVscywgc3VwcG9zaXRpb25zLCBjb25zZXF1ZW50LCBsb2NhbENvbnRleHQpOyAgLy8vXG4gIH1cblxuICBzdGF0aWMgZnJvbUxhYmVsc1N1cHBvc2l0aW9uc0NvbnNlcXVlbnRBbmRMb2NhbENvbnRleHQoQ2xhc3MsIGxhYmVscywgc3VwcG9zaXRpb25zLCBjb25zZXF1ZW50LCBsb2NhbENvbnRleHQpIHsgcmV0dXJuIG5ldyBDbGFzcyhsYWJlbHMsIHN1cHBvc2l0aW9ucywgY29uc2VxdWVudCwgbG9jYWxDb250ZXh0KTsgfVxufVxuXG5mdW5jdGlvbiBtYXRjaFN1cHBvc2l0aW9ucyhzdXBwb3NpdGlvbnMsIHByb29mU3RlcHMsIHN1YnN0aXR1dGlvbnMsIGxvY2FsQ29udGV4dCwgc3RhdGVtZW50TG9jYWxDb250ZXh0KSB7XG4gIHN1cHBvc2l0aW9ucyA9IHJldmVyc2Uoc3VwcG9zaXRpb25zKTsgLy8vXG5cbiAgcHJvb2ZTdGVwcyA9IHJldmVyc2UocHJvb2ZTdGVwcyk7IC8vL1xuXG4gIGNvbnN0IHN1cHBvc2l0aW9uc01hdGNoID0gY29ycmVsYXRlKHN1cHBvc2l0aW9ucywgcHJvb2ZTdGVwcywgKHN1cHBvc2l0aW9uLCBwcm9vZlN0ZXApID0+IHtcbiAgICBjb25zdCBzdXBwb3NpdGlvbk1hdGNoZXMgPSBtYXRjaFN1cHBvc2l0aW9uKHN1cHBvc2l0aW9uLCBwcm9vZlN0ZXAsIHN1YnN0aXR1dGlvbnMsIGxvY2FsQ29udGV4dCwgc3RhdGVtZW50TG9jYWxDb250ZXh0KTtcblxuICAgIGlmIChzdXBwb3NpdGlvbk1hdGNoZXMpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIHN1cHBvc2l0aW9uc01hdGNoO1xufVxuXG5mdW5jdGlvbiBtYXRjaFN1cHBvc2l0aW9uKHN1cHBvc2l0aW9uLCBwcm9vZlN0ZXAsIHN1YnN0aXR1dGlvbnMsIGxvY2FsQ29udGV4dCwgc3RhdGVtZW50TG9jYWxDb250ZXh0KSB7XG4gIGxldCBzdXBwb3NpdGlvbk1hdGNoZXMgPSBmYWxzZTtcblxuICBjb25zdCBzdGF0ZW1lbnROb2RlID0gcHJvb2ZTdGVwLmdldFN0YXRlbWVudE5vZGUoKTtcblxuICBpZiAoc3RhdGVtZW50Tm9kZSAhPT0gbnVsbCkge1xuICAgIGNvbnN0IHN1cHBvc2l0aW9uTWF0Y2hlc1N0YXRlbWVudE5vZGUgPSBzdXBwb3NpdGlvbi5tYXRjaFN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSwgc3Vic3RpdHV0aW9ucywgbG9jYWxDb250ZXh0LCBzdGF0ZW1lbnRMb2NhbENvbnRleHQpO1xuXG4gICAgc3VwcG9zaXRpb25NYXRjaGVzID0gc3VwcG9zaXRpb25NYXRjaGVzU3RhdGVtZW50Tm9kZTsgIC8vL1xuICB9XG5cbiAgcmV0dXJuIHN1cHBvc2l0aW9uTWF0Y2hlcztcbn1cblxuZnVuY3Rpb24gbWF0Y2hDb25zZXF1ZW50KGNvbnNlcXVlbnQsIHN0YXRlbWVudE5vZGUsIHN1YnN0aXR1dGlvbnMsIGxvY2FsQ29udGV4dCwgc3RhdGVtZW50TG9jYWxDb250ZXh0KSB7XG4gIGNvbnN0IGNvbnNlcXVlbnRNYXRjaGVzU3RhdGVtZW50Tm9kZSA9IGNvbnNlcXVlbnQubWF0Y2hTdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUsIHN1YnN0aXR1dGlvbnMsIGxvY2FsQ29udGV4dCwgc3RhdGVtZW50TG9jYWxDb250ZXh0KSxcbiAgICAgICAgY29uc2VxdWVudE1hdGNoZXMgPSBjb25zZXF1ZW50TWF0Y2hlc1N0YXRlbWVudE5vZGU7IC8vL1xuXG4gIHJldHVybiBjb25zZXF1ZW50TWF0Y2hlcztcbn1cbiJdLCJuYW1lcyI6WyJBeGlvbUxlbW1hVGhlb3JlbUNvbmplY3R1cmUiLCJsYWJlbHMiLCJzdXBwb3NpdGlvbnMiLCJjb25zZXF1ZW50IiwibG9jYWxDb250ZXh0IiwiZ2V0TGFiZWxzIiwiZ2V0U3VwcG9zaXRpb25zIiwiZ2V0Q29uc2VxdWVudCIsImdldExvY2FsQ29udGV4dCIsIm1hdGNoU3RhdGVtZW50Iiwic3RhdGVtZW50Tm9kZSIsInN0YXRlbWVudE5hdGNoZXMiLCJwcm9vZlN0ZXBzIiwiZ2V0UHJvb2ZTdGVwcyIsInN1YnN0aXR1dGlvbnMiLCJzdXBwb3NpdGlvbnNNYXRjaCIsIm1hdGNoU3VwcG9zaXRpb25zIiwiY29uc2VxdWVudE1hdGNoZXMiLCJtYXRjaENvbnNlcXVlbnQiLCJtYXRjaE1ldGF2YXJpYWJsZU5vZGUiLCJtZXRhdmFyaWFibGVOb2RlIiwibWF0Y2hlc01ldGF2YXJpYWJsZU5vZGUiLCJzb21lIiwibGFiZWwiLCJsYWJlbE1hdGNoZXNNZXRhdmFyaWFibGVOb2RlIiwidG9KU09OIiwidG9rZW5zIiwibGFiZWxzSlNPTiIsIm1hcCIsImxhYmVsSlNPTiIsInN1cHBvc2l0aW9uc0pTT04iLCJzdXBwb3NpdGlvbiIsInN1cHBvc2l0aW9uSlNPTiIsImNvbnNlcXVlbnRKU09OIiwibG9jYWxDb250ZXh0SlNPTiIsImpzb24iLCJmcm9tSlNPTkFuZEZpbGVDb250ZXh0IiwiQ2xhc3MiLCJmaWxlQ29udGV4dCIsIkxhYmVsIiwiU3VwcG9zaXRpb24iLCJDb25zZXF1ZW50IiwiaW50cmluc2ljTGV2ZWxMb2NhbENvbnRleHQiLCJJbnRyaW5zaWNMZXZlbExvY2FsQ29udGV4dCIsImZyb21MYWJlbHNTdXBwb3NpdGlvbnNDb25zZXF1ZW50QW5kTG9jYWxDb250ZXh0Iiwic3RhdGVtZW50TG9jYWxDb250ZXh0IiwicmV2ZXJzZSIsImNvcnJlbGF0ZSIsInByb29mU3RlcCIsInN1cHBvc2l0aW9uTWF0Y2hlcyIsIm1hdGNoU3VwcG9zaXRpb24iLCJnZXRTdGF0ZW1lbnROb2RlIiwic3VwcG9zaXRpb25NYXRjaGVzU3RhdGVtZW50Tm9kZSIsIm1hdGNoU3RhdGVtZW50Tm9kZSIsImNvbnNlcXVlbnRNYXRjaGVzU3RhdGVtZW50Tm9kZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFTcUJBOzs7NERBUEg7aUVBQ0s7a0VBQ0M7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