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
var _local = /*#__PURE__*/ _interop_require_default(require("./context/local"));
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
                var _this = this;
                var statementNatches;
                var suppositionsLength = this.suppositions.length, statementLocalContext = localContext; ///
                if (suppositionsLength === 0) {
                    var substitutions = [], consequentMatches = matchConsequent(this.consequent, statementNode, substitutions, this.localContext, statementLocalContext);
                    statementNatches = consequentMatches; ///
                } else {
                    var proofSteps = statementLocalContext.getProofSteps();
                    statementNatches = (0, _array.someSubArray)(proofSteps, suppositionsLength, function(proofSteps) {
                        var suppositionsMatchConsequent = false;
                        var substitutions = [], suppositionsMatch = matchSuppositions(_this.suppositions, proofSteps, substitutions, _this.localContext, statementLocalContext);
                        if (suppositionsMatch) {
                            var consequentMatches = matchConsequent(_this.consequent, statementNode, substitutions, _this.localContext, statementLocalContext);
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
            key: "matchMetavariableNode",
            value: function matchMetavariableNode(metavariableNode) {
                var metavariableNodeMatches = this.labels.some(function(label) {
                    var labelMatchesMetavariableNode = label.matchMetavariableNode(metavariableNode);
                    if (labelMatchesMetavariableNode) {
                        return true;
                    }
                });
                return metavariableNodeMatches;
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
                localContext = _local.default.fromJSONAndFileContext(json, fileContext);
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
function matchSupposition(supposition, proofSteps, substitutions, localContext, statementLocalContext) {
    var proofStep = (0, _array.extract)(proofSteps, function(proofStep) {
        var statementNode = proofStep.getStatementNode();
        if (statementNode !== null) {
            var statementMatches = supposition.matchStatementNode(statementNode, substitutions, localContext, statementLocalContext);
            if (statementMatches) {
                return true;
            }
        }
    }) || null;
    var suppositionMatches = proofStep !== null;
    return suppositionMatches;
}
function matchSuppositions(suppositions, proofSteps, substitutions, localContext, statementLocalContext) {
    var suppositionsMatch = suppositions.every(function(supposition) {
        var suppositionMatches = matchSupposition(supposition, proofSteps, substitutions, localContext, statementLocalContext);
        if (suppositionMatches) {
            return true;
        }
    });
    return suppositionsMatch;
}
function matchConsequent(consequent, statementNode, substitutions, localContext, statementLocalContext) {
    var nonTerminalNodeMatches = consequent.matchStatementNode(statementNode, substitutions, localContext, statementLocalContext), consequentMatches = nonTerminalNodeMatches; ///
    return consequentMatches;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9heGlvbUxlbW1hVGhlb3JlbUNvbmplY3R1cmUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBMYWJlbCBmcm9tIFwiLi9sYWJlbFwiO1xuaW1wb3J0IENvbnNlcXVlbnQgZnJvbSBcIi4vY29uc2VxdWVudFwiO1xuaW1wb3J0IFN1cHBvc2l0aW9uIGZyb20gXCIuL3N1cHBvc2l0aW9uXCI7XG5pbXBvcnQgTG9jYWxDb250ZXh0IGZyb20gXCIuL2NvbnRleHQvbG9jYWxcIjtcblxuaW1wb3J0IHsgZXh0cmFjdCB9IGZyb20gXCIuL3V0aWxpdGllcy9hcnJheVwiO1xuaW1wb3J0IHsgc29tZVN1YkFycmF5IH0gZnJvbSBcIi4vdXRpbGl0aWVzL2FycmF5XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEF4aW9tTGVtbWFUaGVvcmVtQ29uamVjdHVyZSB7XG4gIGNvbnN0cnVjdG9yKGxhYmVscywgc3VwcG9zaXRpb25zLCBjb25zZXF1ZW50LCBsb2NhbENvbnRleHQpIHtcbiAgICB0aGlzLmxhYmVscyA9IGxhYmVscztcbiAgICB0aGlzLnN1cHBvc2l0aW9ucyA9IHN1cHBvc2l0aW9ucztcbiAgICB0aGlzLmNvbnNlcXVlbnQgPSBjb25zZXF1ZW50O1xuICAgIHRoaXMubG9jYWxDb250ZXh0ID0gbG9jYWxDb250ZXh0O1xuICB9XG5cbiAgZ2V0TGFiZWxzKCkge1xuICAgIHJldHVybiB0aGlzLmxhYmVscztcbiAgfVxuXG4gIGdldFN1cHBvc2l0aW9ucygpIHtcbiAgICByZXR1cm4gdGhpcy5zdXBwb3NpdGlvbnM7XG4gIH1cblxuICBnZXRDb25zZXF1ZW50KCkge1xuICAgIHJldHVybiB0aGlzLmNvbnNlcXVlbnQ7XG4gIH1cblxuICBnZXRMb2NhbENvbnRleHQoKSB7XG4gICAgcmV0dXJuIHRoaXMubG9jYWxDb250ZXh0O1xuICB9XG5cbiAgbWF0Y2hTdGF0ZW1lbnQoc3RhdGVtZW50Tm9kZSwgbG9jYWxDb250ZXh0KSB7XG4gICAgbGV0IHN0YXRlbWVudE5hdGNoZXM7XG5cbiAgICBjb25zdCBzdXBwb3NpdGlvbnNMZW5ndGggPSB0aGlzLnN1cHBvc2l0aW9ucy5sZW5ndGgsXG4gICAgICAgICAgc3RhdGVtZW50TG9jYWxDb250ZXh0ID0gbG9jYWxDb250ZXh0OyAvLy9cblxuICAgIGlmIChzdXBwb3NpdGlvbnNMZW5ndGggPT09IDApIHtcbiAgICAgIGNvbnN0IHN1YnN0aXR1dGlvbnMgPSBbXSxcbiAgICAgICAgICAgIGNvbnNlcXVlbnRNYXRjaGVzID0gbWF0Y2hDb25zZXF1ZW50KHRoaXMuY29uc2VxdWVudCwgc3RhdGVtZW50Tm9kZSwgc3Vic3RpdHV0aW9ucywgdGhpcy5sb2NhbENvbnRleHQsIHN0YXRlbWVudExvY2FsQ29udGV4dCk7XG5cbiAgICAgIHN0YXRlbWVudE5hdGNoZXMgPSBjb25zZXF1ZW50TWF0Y2hlczsgLy8vXG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHByb29mU3RlcHMgPSBzdGF0ZW1lbnRMb2NhbENvbnRleHQuZ2V0UHJvb2ZTdGVwcygpO1xuXG4gICAgICBzdGF0ZW1lbnROYXRjaGVzID0gc29tZVN1YkFycmF5KHByb29mU3RlcHMsIHN1cHBvc2l0aW9uc0xlbmd0aCwgKHByb29mU3RlcHMpID0+IHtcbiAgICAgICAgbGV0IHN1cHBvc2l0aW9uc01hdGNoQ29uc2VxdWVudCA9IGZhbHNlO1xuXG4gICAgICAgIGNvbnN0IHN1YnN0aXR1dGlvbnMgPSBbXSxcbiAgICAgICAgICAgICAgc3VwcG9zaXRpb25zTWF0Y2ggPSBtYXRjaFN1cHBvc2l0aW9ucyh0aGlzLnN1cHBvc2l0aW9ucywgcHJvb2ZTdGVwcywgc3Vic3RpdHV0aW9ucywgdGhpcy5sb2NhbENvbnRleHQsIHN0YXRlbWVudExvY2FsQ29udGV4dCk7XG5cbiAgICAgICAgaWYgKHN1cHBvc2l0aW9uc01hdGNoKSB7XG4gICAgICAgICAgY29uc3QgY29uc2VxdWVudE1hdGNoZXMgPSBtYXRjaENvbnNlcXVlbnQodGhpcy5jb25zZXF1ZW50LCBzdGF0ZW1lbnROb2RlLCBzdWJzdGl0dXRpb25zLCB0aGlzLmxvY2FsQ29udGV4dCwgc3RhdGVtZW50TG9jYWxDb250ZXh0KTtcblxuICAgICAgICAgIHN1cHBvc2l0aW9uc01hdGNoQ29uc2VxdWVudCA9IGNvbnNlcXVlbnRNYXRjaGVzOyAgLy8vXG4gICAgICAgIH1cblxuICAgICAgICBpZiAoc3VwcG9zaXRpb25zTWF0Y2hDb25zZXF1ZW50KSB7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBzdGF0ZW1lbnROYXRjaGVzO1xuICB9XG5cbiAgbWF0Y2hNZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUpIHtcbiAgICBjb25zdCBtZXRhdmFyaWFibGVOb2RlTWF0Y2hlcyA9IHRoaXMubGFiZWxzLnNvbWUoKGxhYmVsKSA9PiB7XG4gICAgICBjb25zdCBsYWJlbE1hdGNoZXNNZXRhdmFyaWFibGVOb2RlID0gbGFiZWwubWF0Y2hNZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUpO1xuXG4gICAgICBpZiAobGFiZWxNYXRjaGVzTWV0YXZhcmlhYmxlTm9kZSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiBtZXRhdmFyaWFibGVOb2RlTWF0Y2hlcztcbiAgfVxuXG4gIHRvSlNPTih0b2tlbnMpIHtcbiAgICBjb25zdCBsYWJlbHNKU09OID0gdGhpcy5sYWJlbHMubWFwKChsYWJlbCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgbGFiZWxKU09OID0gbGFiZWwudG9KU09OKHRva2Vucyk7XG5cbiAgICAgICAgICAgIHJldHVybiBsYWJlbEpTT047XG4gICAgICAgICAgfSksXG4gICAgICAgICAgc3VwcG9zaXRpb25zSlNPTiA9IHRoaXMuc3VwcG9zaXRpb25zLm1hcCgoc3VwcG9zaXRpb24pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHN1cHBvc2l0aW9uSlNPTiA9IHN1cHBvc2l0aW9uLnRvSlNPTih0b2tlbnMpO1xuXG4gICAgICAgICAgICByZXR1cm4gc3VwcG9zaXRpb25KU09OO1xuICAgICAgICAgIH0pLFxuICAgICAgICAgIGNvbnNlcXVlbnRKU09OID0gdGhpcy5jb25zZXF1ZW50LnRvSlNPTih0b2tlbnMpLFxuICAgICAgICAgIGxvY2FsQ29udGV4dEpTT04gPSB0aGlzLmxvY2FsQ29udGV4dC50b0pTT04odG9rZW5zKSxcbiAgICAgICAgICBsYWJlbHMgPSBsYWJlbHNKU09OLCAgLy8vXG4gICAgICAgICAgc3VwcG9zaXRpb25zID0gc3VwcG9zaXRpb25zSlNPTiwgIC8vL1xuICAgICAgICAgIGNvbnNlcXVlbnQgPSBjb25zZXF1ZW50SlNPTiwgIC8vL1xuICAgICAgICAgIGxvY2FsQ29udGV4dCA9IGxvY2FsQ29udGV4dEpTT04sICAvLy9cbiAgICAgICAgICBqc29uID0ge1xuICAgICAgICAgICAgbGFiZWxzLFxuICAgICAgICAgICAgc3VwcG9zaXRpb25zLFxuICAgICAgICAgICAgY29uc2VxdWVudCxcbiAgICAgICAgICAgIGxvY2FsQ29udGV4dFxuICAgICAgICAgIH07XG5cbiAgICByZXR1cm4ganNvbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tSlNPTkFuZEZpbGVDb250ZXh0KENsYXNzLCBqc29uLCBmaWxlQ29udGV4dCkge1xuICAgIGxldCB7IGxhYmVscyB9ID0ganNvbjtcblxuICAgIGNvbnN0IGxhYmVsc0pTT04gPSBsYWJlbHM7ICAvLy9cblxuICAgIGxhYmVscyA9IGxhYmVsc0pTT04ubWFwKChsYWJlbEpTT04pID0+IHtcbiAgICAgIGNvbnN0IGpzb24gPSBsYWJlbEpTT04sIC8vL1xuICAgICAgICAgICAgbGFiZWwgPSBMYWJlbC5mcm9tSlNPTkFuZEZpbGVDb250ZXh0KGpzb24sIGZpbGVDb250ZXh0KTtcblxuICAgICAgcmV0dXJuIGxhYmVsO1xuICAgIH0pO1xuXG4gICAgbGV0IHsgc3VwcG9zaXRpb25zLCBjb25zZXF1ZW50LCBsb2NhbENvbnRleHQgfSA9IGpzb247XG5cbiAgICBjb25zdCBzdXBwb3NpdGlvbnNKU09OID0gc3VwcG9zaXRpb25zOyAgLy8vXG5cbiAgICBzdXBwb3NpdGlvbnMgPSBzdXBwb3NpdGlvbnNKU09OLm1hcCgoc3VwcG9zaXRpb25KU09OKSA9PiB7XG4gICAgICBjb25zdCBqc29uID0gc3VwcG9zaXRpb25KU09OLCAvLy9cbiAgICAgICAgICAgIHN1cHBvc2l0aW9uID0gU3VwcG9zaXRpb24uZnJvbUpTT05BbmRGaWxlQ29udGV4dChqc29uLCBmaWxlQ29udGV4dCk7XG5cbiAgICAgIHJldHVybiBzdXBwb3NpdGlvbjtcbiAgICB9KTtcblxuICAgIGNvbnN0IGNvbnNlcXVlbnRKU09OID0gY29uc2VxdWVudDsgIC8vL1xuXG4gICAganNvbiA9IGNvbnNlcXVlbnRKU09OOyAgLy8vXG5cbiAgICBjb25zZXF1ZW50ID0gQ29uc2VxdWVudC5mcm9tSlNPTkFuZEZpbGVDb250ZXh0KGpzb24sIGZpbGVDb250ZXh0KTtcblxuICAgIGNvbnN0IGxvY2FsQ29udGV4dEpTT04gPSBsb2NhbENvbnRleHQ7ICAvLy9cblxuICAgIGpzb24gPSBsb2NhbENvbnRleHRKU09OOyAgLy8vXG5cbiAgICBsb2NhbENvbnRleHQgPSBMb2NhbENvbnRleHQuZnJvbUpTT05BbmRGaWxlQ29udGV4dChqc29uLCBmaWxlQ29udGV4dCk7XG5cbiAgICByZXR1cm4gbmV3IENsYXNzKGxhYmVscywgc3VwcG9zaXRpb25zLCBjb25zZXF1ZW50LCBsb2NhbENvbnRleHQpOyAgLy8vXG4gIH1cblxuICBzdGF0aWMgZnJvbUxhYmVsc1N1cHBvc2l0aW9uc0NvbnNlcXVlbnRBbmRMb2NhbENvbnRleHQoQ2xhc3MsIGxhYmVscywgc3VwcG9zaXRpb25zLCBjb25zZXF1ZW50LCBsb2NhbENvbnRleHQpIHsgcmV0dXJuIG5ldyBDbGFzcyhsYWJlbHMsIHN1cHBvc2l0aW9ucywgY29uc2VxdWVudCwgbG9jYWxDb250ZXh0KTsgfVxufVxuXG5mdW5jdGlvbiBtYXRjaFN1cHBvc2l0aW9uKHN1cHBvc2l0aW9uLCBwcm9vZlN0ZXBzLCBzdWJzdGl0dXRpb25zLCBsb2NhbENvbnRleHQsIHN0YXRlbWVudExvY2FsQ29udGV4dCkge1xuICBjb25zdCBwcm9vZlN0ZXAgPSBleHRyYWN0KHByb29mU3RlcHMsIChwcm9vZlN0ZXApID0+IHtcbiAgICBjb25zdCBzdGF0ZW1lbnROb2RlID0gcHJvb2ZTdGVwLmdldFN0YXRlbWVudE5vZGUoKTtcblxuICAgIGlmIChzdGF0ZW1lbnROb2RlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBzdGF0ZW1lbnRNYXRjaGVzID0gc3VwcG9zaXRpb24ubWF0Y2hTdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUsIHN1YnN0aXR1dGlvbnMsIGxvY2FsQ29udGV4dCwgc3RhdGVtZW50TG9jYWxDb250ZXh0KTtcblxuICAgICAgaWYgKHN0YXRlbWVudE1hdGNoZXMpIHsgIC8vL1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG4gIH0pIHx8IG51bGw7XG5cbiAgY29uc3Qgc3VwcG9zaXRpb25NYXRjaGVzID0gKHByb29mU3RlcCAhPT0gbnVsbCk7XG5cbiAgcmV0dXJuIHN1cHBvc2l0aW9uTWF0Y2hlcztcbn1cblxuZnVuY3Rpb24gbWF0Y2hTdXBwb3NpdGlvbnMoc3VwcG9zaXRpb25zLCBwcm9vZlN0ZXBzLCBzdWJzdGl0dXRpb25zLCBsb2NhbENvbnRleHQsIHN0YXRlbWVudExvY2FsQ29udGV4dCkge1xuICBjb25zdCBzdXBwb3NpdGlvbnNNYXRjaCA9IHN1cHBvc2l0aW9ucy5ldmVyeSgoc3VwcG9zaXRpb24pID0+IHtcbiAgICBjb25zdCBzdXBwb3NpdGlvbk1hdGNoZXMgPSBtYXRjaFN1cHBvc2l0aW9uKHN1cHBvc2l0aW9uLCBwcm9vZlN0ZXBzLCBzdWJzdGl0dXRpb25zLCBsb2NhbENvbnRleHQsIHN0YXRlbWVudExvY2FsQ29udGV4dCk7XG5cbiAgICBpZiAoc3VwcG9zaXRpb25NYXRjaGVzKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiBzdXBwb3NpdGlvbnNNYXRjaDtcbn1cblxuZnVuY3Rpb24gbWF0Y2hDb25zZXF1ZW50KGNvbnNlcXVlbnQsIHN0YXRlbWVudE5vZGUsIHN1YnN0aXR1dGlvbnMsIGxvY2FsQ29udGV4dCwgc3RhdGVtZW50TG9jYWxDb250ZXh0KSB7XG4gIGNvbnN0IG5vblRlcm1pbmFsTm9kZU1hdGNoZXMgPSBjb25zZXF1ZW50Lm1hdGNoU3RhdGVtZW50Tm9kZShzdGF0ZW1lbnROb2RlLCBzdWJzdGl0dXRpb25zLCBsb2NhbENvbnRleHQsIHN0YXRlbWVudExvY2FsQ29udGV4dCksXG4gICAgICAgIGNvbnNlcXVlbnRNYXRjaGVzID0gbm9uVGVybWluYWxOb2RlTWF0Y2hlczsgLy8vXG5cbiAgcmV0dXJuIGNvbnNlcXVlbnRNYXRjaGVzO1xufVxuIl0sIm5hbWVzIjpbIkF4aW9tTGVtbWFUaGVvcmVtQ29uamVjdHVyZSIsImxhYmVscyIsInN1cHBvc2l0aW9ucyIsImNvbnNlcXVlbnQiLCJsb2NhbENvbnRleHQiLCJnZXRMYWJlbHMiLCJnZXRTdXBwb3NpdGlvbnMiLCJnZXRDb25zZXF1ZW50IiwiZ2V0TG9jYWxDb250ZXh0IiwibWF0Y2hTdGF0ZW1lbnQiLCJzdGF0ZW1lbnROb2RlIiwic3RhdGVtZW50TmF0Y2hlcyIsInN1cHBvc2l0aW9uc0xlbmd0aCIsImxlbmd0aCIsInN0YXRlbWVudExvY2FsQ29udGV4dCIsInN1YnN0aXR1dGlvbnMiLCJjb25zZXF1ZW50TWF0Y2hlcyIsIm1hdGNoQ29uc2VxdWVudCIsInByb29mU3RlcHMiLCJnZXRQcm9vZlN0ZXBzIiwic29tZVN1YkFycmF5Iiwic3VwcG9zaXRpb25zTWF0Y2hDb25zZXF1ZW50Iiwic3VwcG9zaXRpb25zTWF0Y2giLCJtYXRjaFN1cHBvc2l0aW9ucyIsIm1hdGNoTWV0YXZhcmlhYmxlTm9kZSIsIm1ldGF2YXJpYWJsZU5vZGUiLCJtZXRhdmFyaWFibGVOb2RlTWF0Y2hlcyIsInNvbWUiLCJsYWJlbCIsImxhYmVsTWF0Y2hlc01ldGF2YXJpYWJsZU5vZGUiLCJ0b0pTT04iLCJ0b2tlbnMiLCJsYWJlbHNKU09OIiwibWFwIiwibGFiZWxKU09OIiwic3VwcG9zaXRpb25zSlNPTiIsInN1cHBvc2l0aW9uIiwic3VwcG9zaXRpb25KU09OIiwiY29uc2VxdWVudEpTT04iLCJsb2NhbENvbnRleHRKU09OIiwianNvbiIsImZyb21KU09OQW5kRmlsZUNvbnRleHQiLCJDbGFzcyIsImZpbGVDb250ZXh0IiwiTGFiZWwiLCJTdXBwb3NpdGlvbiIsIkNvbnNlcXVlbnQiLCJMb2NhbENvbnRleHQiLCJmcm9tTGFiZWxzU3VwcG9zaXRpb25zQ29uc2VxdWVudEFuZExvY2FsQ29udGV4dCIsIm1hdGNoU3VwcG9zaXRpb24iLCJwcm9vZlN0ZXAiLCJleHRyYWN0IiwiZ2V0U3RhdGVtZW50Tm9kZSIsInN0YXRlbWVudE1hdGNoZXMiLCJtYXRjaFN0YXRlbWVudE5vZGUiLCJzdXBwb3NpdGlvbk1hdGNoZXMiLCJldmVyeSIsIm5vblRlcm1pbmFsTm9kZU1hdGNoZXMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBVXFCQTs7OzREQVJIO2lFQUNLO2tFQUNDOzREQUNDO3FCQUVEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBR1QsSUFBQSxBQUFNQSw0Q0FBRCxBQUFMO2FBQU1BLDRCQUNQQyxNQUFNLEVBQUVDLFlBQVksRUFBRUMsVUFBVSxFQUFFQyxZQUFZO2dDQUR2Q0o7UUFFakIsSUFBSSxDQUFDQyxNQUFNLEdBQUdBO1FBQ2QsSUFBSSxDQUFDQyxZQUFZLEdBQUdBO1FBQ3BCLElBQUksQ0FBQ0MsVUFBVSxHQUFHQTtRQUNsQixJQUFJLENBQUNDLFlBQVksR0FBR0E7O2tCQUxISjs7WUFRbkJLLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0osTUFBTTtZQUNwQjs7O1lBRUFLLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0osWUFBWTtZQUMxQjs7O1lBRUFLLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0osVUFBVTtZQUN4Qjs7O1lBRUFLLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0osWUFBWTtZQUMxQjs7O1lBRUFLLEtBQUFBO21CQUFBQSxTQUFBQSxlQUFlQyxhQUFhLEVBQUVOLFlBQVk7O2dCQUN4QyxJQUFJTztnQkFFSixJQUFNQyxxQkFBcUIsSUFBSSxDQUFDVixZQUFZLENBQUNXLE1BQU0sRUFDN0NDLHdCQUF3QlYsY0FBYyxHQUFHO2dCQUUvQyxJQUFJUSx1QkFBdUIsR0FBRztvQkFDNUIsSUFBTUcsZ0JBQWdCLEVBQUUsRUFDbEJDLG9CQUFvQkMsZ0JBQWdCLElBQUksQ0FBQ2QsVUFBVSxFQUFFTyxlQUFlSyxlQUFlLElBQUksQ0FBQ1gsWUFBWSxFQUFFVTtvQkFFNUdILG1CQUFtQkssbUJBQW1CLEdBQUc7Z0JBQzNDLE9BQU87b0JBQ0wsSUFBTUUsYUFBYUosc0JBQXNCSyxhQUFhO29CQUV0RFIsbUJBQW1CUyxJQUFBQSxtQkFBWSxFQUFDRixZQUFZTixvQkFBb0IsU0FBQ007d0JBQy9ELElBQUlHLDhCQUE4Qjt3QkFFbEMsSUFBTU4sZ0JBQWdCLEVBQUUsRUFDbEJPLG9CQUFvQkMsa0JBQWtCLE1BQUtyQixZQUFZLEVBQUVnQixZQUFZSCxlQUFlLE1BQUtYLFlBQVksRUFBRVU7d0JBRTdHLElBQUlRLG1CQUFtQjs0QkFDckIsSUFBTU4sb0JBQW9CQyxnQkFBZ0IsTUFBS2QsVUFBVSxFQUFFTyxlQUFlSyxlQUFlLE1BQUtYLFlBQVksRUFBRVU7NEJBRTVHTyw4QkFBOEJMLG1CQUFvQixHQUFHO3dCQUN2RDt3QkFFQSxJQUFJSyw2QkFBNkI7NEJBQy9CLE9BQU87d0JBQ1Q7b0JBQ0Y7Z0JBQ0Y7Z0JBRUEsT0FBT1Y7WUFDVDs7O1lBRUFhLEtBQUFBO21CQUFBQSxTQUFBQSxzQkFBc0JDLGdCQUFnQjtnQkFDcEMsSUFBTUMsMEJBQTBCLElBQUksQ0FBQ3pCLE1BQU0sQ0FBQzBCLElBQUksQ0FBQyxTQUFDQztvQkFDaEQsSUFBTUMsK0JBQStCRCxNQUFNSixxQkFBcUIsQ0FBQ0M7b0JBRWpFLElBQUlJLDhCQUE4Qjt3QkFDaEMsT0FBTztvQkFDVDtnQkFDRjtnQkFFQSxPQUFPSDtZQUNUOzs7WUFFQUksS0FBQUE7bUJBQUFBLFNBQUFBLE9BQU9DLE1BQU07Z0JBQ1gsSUFBTUMsYUFBYSxJQUFJLENBQUMvQixNQUFNLENBQUNnQyxHQUFHLENBQUMsU0FBQ0w7b0JBQzVCLElBQU1NLFlBQVlOLE1BQU1FLE1BQU0sQ0FBQ0M7b0JBRS9CLE9BQU9HO2dCQUNULElBQ0FDLG1CQUFtQixJQUFJLENBQUNqQyxZQUFZLENBQUMrQixHQUFHLENBQUMsU0FBQ0c7b0JBQ3hDLElBQU1DLGtCQUFrQkQsWUFBWU4sTUFBTSxDQUFDQztvQkFFM0MsT0FBT007Z0JBQ1QsSUFDQUMsaUJBQWlCLElBQUksQ0FBQ25DLFVBQVUsQ0FBQzJCLE1BQU0sQ0FBQ0MsU0FDeENRLG1CQUFtQixJQUFJLENBQUNuQyxZQUFZLENBQUMwQixNQUFNLENBQUNDLFNBQzVDOUIsU0FBUytCLFlBQ1Q5QixlQUFlaUMsa0JBQ2ZoQyxhQUFhbUMsZ0JBQ2JsQyxlQUFlbUMsa0JBQ2ZDLE9BQU87b0JBQ0x2QyxRQUFBQTtvQkFDQUMsY0FBQUE7b0JBQ0FDLFlBQUFBO29CQUNBQyxjQUFBQTtnQkFDRjtnQkFFTixPQUFPb0M7WUFDVDs7OztZQUVPQyxLQUFBQTttQkFBUCxTQUFPQSx1QkFBdUJDLEtBQUssRUFBRUYsSUFBSSxFQUFFRyxXQUFXO2dCQUNwRCxJQUFJLEFBQUUxQyxTQUFXdUMsS0FBWHZDO2dCQUVOLElBQU0rQixhQUFhL0IsUUFBUyxHQUFHO2dCQUUvQkEsU0FBUytCLFdBQVdDLEdBQUcsQ0FBQyxTQUFDQztvQkFDdkIsSUFBTU0sU0FBT04sV0FDUE4sUUFBUWdCLGNBQUssQ0FBQ0gsc0JBQXNCLENBQUNELFFBQU1HO29CQUVqRCxPQUFPZjtnQkFDVDtnQkFFQSxJQUFNMUIsZUFBMkNzQyxLQUEzQ3RDLGNBQWNDLGFBQTZCcUMsS0FBN0JyQyxZQUFZQyxlQUFpQm9DLEtBQWpCcEM7Z0JBRWhDLElBQU0rQixtQkFBbUJqQyxjQUFlLEdBQUc7Z0JBRTNDQSxlQUFlaUMsaUJBQWlCRixHQUFHLENBQUMsU0FBQ0k7b0JBQ25DLElBQU1HLFNBQU9ILGlCQUNQRCxjQUFjUyxvQkFBVyxDQUFDSixzQkFBc0IsQ0FBQ0QsUUFBTUc7b0JBRTdELE9BQU9QO2dCQUNUO2dCQUVBLElBQU1FLGlCQUFpQm5DLFlBQWEsR0FBRztnQkFFdkNxQyxPQUFPRixnQkFBaUIsR0FBRztnQkFFM0JuQyxhQUFhMkMsbUJBQVUsQ0FBQ0wsc0JBQXNCLENBQUNELE1BQU1HO2dCQUVyRCxJQUFNSixtQkFBbUJuQyxjQUFlLEdBQUc7Z0JBRTNDb0MsT0FBT0Qsa0JBQW1CLEdBQUc7Z0JBRTdCbkMsZUFBZTJDLGNBQVksQ0FBQ04sc0JBQXNCLENBQUNELE1BQU1HO2dCQUV6RCxPQUFPLElBQUlELE1BQU16QyxRQUFRQyxjQUFjQyxZQUFZQyxlQUFnQixHQUFHO1lBQ3hFOzs7WUFFTzRDLEtBQUFBO21CQUFQLFNBQU9BLGdEQUFnRE4sS0FBSyxFQUFFekMsTUFBTSxFQUFFQyxZQUFZLEVBQUVDLFVBQVUsRUFBRUMsWUFBWTtnQkFBSSxPQUFPLElBQUlzQyxNQUFNekMsUUFBUUMsY0FBY0MsWUFBWUM7WUFBZTs7O1dBeEkvSko7O0FBMklyQixTQUFTaUQsaUJBQWlCYixXQUFXLEVBQUVsQixVQUFVLEVBQUVILGFBQWEsRUFBRVgsWUFBWSxFQUFFVSxxQkFBcUI7SUFDbkcsSUFBTW9DLFlBQVlDLElBQUFBLGNBQU8sRUFBQ2pDLFlBQVksU0FBQ2dDO1FBQ3JDLElBQU14QyxnQkFBZ0J3QyxVQUFVRSxnQkFBZ0I7UUFFaEQsSUFBSTFDLGtCQUFrQixNQUFNO1lBQzFCLElBQU0yQyxtQkFBbUJqQixZQUFZa0Isa0JBQWtCLENBQUM1QyxlQUFlSyxlQUFlWCxjQUFjVTtZQUVwRyxJQUFJdUMsa0JBQWtCO2dCQUNwQixPQUFPO1lBQ1Q7UUFDRjtJQUNGLE1BQU07SUFFTixJQUFNRSxxQkFBc0JMLGNBQWM7SUFFMUMsT0FBT0s7QUFDVDtBQUVBLFNBQVNoQyxrQkFBa0JyQixZQUFZLEVBQUVnQixVQUFVLEVBQUVILGFBQWEsRUFBRVgsWUFBWSxFQUFFVSxxQkFBcUI7SUFDckcsSUFBTVEsb0JBQW9CcEIsYUFBYXNELEtBQUssQ0FBQyxTQUFDcEI7UUFDNUMsSUFBTW1CLHFCQUFxQk4saUJBQWlCYixhQUFhbEIsWUFBWUgsZUFBZVgsY0FBY1U7UUFFbEcsSUFBSXlDLG9CQUFvQjtZQUN0QixPQUFPO1FBQ1Q7SUFDRjtJQUVBLE9BQU9qQztBQUNUO0FBRUEsU0FBU0wsZ0JBQWdCZCxVQUFVLEVBQUVPLGFBQWEsRUFBRUssYUFBYSxFQUFFWCxZQUFZLEVBQUVVLHFCQUFxQjtJQUNwRyxJQUFNMkMseUJBQXlCdEQsV0FBV21ELGtCQUFrQixDQUFDNUMsZUFBZUssZUFBZVgsY0FBY1Usd0JBQ25HRSxvQkFBb0J5Qyx3QkFBd0IsR0FBRztJQUVyRCxPQUFPekM7QUFDVCJ9