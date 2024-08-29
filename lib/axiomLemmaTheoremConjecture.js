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
    var proofStep = (0, _array.prune)(proofSteps, function(proofStep) {
        var statementNode = proofStep.getStatementNode();
        if (statementNode !== null) {
            var statementMatches = supposition.matchStatementNode(statementNode, substitutions, localContext, statementLocalContext);
            if (!statementMatches) {
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9heGlvbUxlbW1hVGhlb3JlbUNvbmplY3R1cmUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBMYWJlbCBmcm9tIFwiLi9sYWJlbFwiO1xuaW1wb3J0IENvbnNlcXVlbnQgZnJvbSBcIi4vY29uc2VxdWVudFwiO1xuaW1wb3J0IFN1cHBvc2l0aW9uIGZyb20gXCIuL3N1cHBvc2l0aW9uXCI7XG5pbXBvcnQgTG9jYWxDb250ZXh0IGZyb20gXCIuL2NvbnRleHQvbG9jYWxcIjtcblxuaW1wb3J0IHsgcHJ1bmUgfSBmcm9tIFwiLi91dGlsaXRpZXMvYXJyYXlcIjtcbmltcG9ydCB7IHNvbWVTdWJBcnJheSB9IGZyb20gXCIuL3V0aWxpdGllcy9hcnJheVwiO1xuaW1wb3J0IGxvY2FsIGZyb20gXCIuL2NvbnRleHQvbG9jYWxcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXhpb21MZW1tYVRoZW9yZW1Db25qZWN0dXJlIHtcbiAgY29uc3RydWN0b3IobGFiZWxzLCBzdXBwb3NpdGlvbnMsIGNvbnNlcXVlbnQsIGxvY2FsQ29udGV4dCkge1xuICAgIHRoaXMubGFiZWxzID0gbGFiZWxzO1xuICAgIHRoaXMuc3VwcG9zaXRpb25zID0gc3VwcG9zaXRpb25zO1xuICAgIHRoaXMuY29uc2VxdWVudCA9IGNvbnNlcXVlbnQ7XG4gICAgdGhpcy5sb2NhbENvbnRleHQgPSBsb2NhbENvbnRleHQ7XG4gIH1cblxuICBnZXRMYWJlbHMoKSB7XG4gICAgcmV0dXJuIHRoaXMubGFiZWxzO1xuICB9XG5cbiAgZ2V0U3VwcG9zaXRpb25zKCkge1xuICAgIHJldHVybiB0aGlzLnN1cHBvc2l0aW9ucztcbiAgfVxuXG4gIGdldENvbnNlcXVlbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuY29uc2VxdWVudDtcbiAgfVxuXG4gIGdldExvY2FsQ29udGV4dCgpIHtcbiAgICByZXR1cm4gdGhpcy5sb2NhbENvbnRleHQ7XG4gIH1cblxuICBtYXRjaFN0YXRlbWVudChzdGF0ZW1lbnROb2RlLCBsb2NhbENvbnRleHQpIHtcbiAgICBsZXQgc3RhdGVtZW50TmF0Y2hlcztcblxuICAgIGNvbnN0IHN1cHBvc2l0aW9uc0xlbmd0aCA9IHRoaXMuc3VwcG9zaXRpb25zLmxlbmd0aCxcbiAgICAgICAgICBzdGF0ZW1lbnRMb2NhbENvbnRleHQgPSBsb2NhbENvbnRleHQ7IC8vL1xuXG4gICAgaWYgKHN1cHBvc2l0aW9uc0xlbmd0aCA9PT0gMCkge1xuICAgICAgY29uc3Qgc3Vic3RpdHV0aW9ucyA9IFtdLFxuICAgICAgICAgICAgY29uc2VxdWVudE1hdGNoZXMgPSBtYXRjaENvbnNlcXVlbnQodGhpcy5jb25zZXF1ZW50LCBzdGF0ZW1lbnROb2RlLCBzdWJzdGl0dXRpb25zLCB0aGlzLmxvY2FsQ29udGV4dCwgc3RhdGVtZW50TG9jYWxDb250ZXh0KTtcblxuICAgICAgc3RhdGVtZW50TmF0Y2hlcyA9IGNvbnNlcXVlbnRNYXRjaGVzOyAvLy9cbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgcHJvb2ZTdGVwcyA9IHN0YXRlbWVudExvY2FsQ29udGV4dC5nZXRQcm9vZlN0ZXBzKCk7XG5cbiAgICAgIHN0YXRlbWVudE5hdGNoZXMgPSBzb21lU3ViQXJyYXkocHJvb2ZTdGVwcywgc3VwcG9zaXRpb25zTGVuZ3RoLCAocHJvb2ZTdGVwcykgPT4ge1xuICAgICAgICBsZXQgc3VwcG9zaXRpb25zTWF0Y2hDb25zZXF1ZW50ID0gZmFsc2U7XG5cbiAgICAgICAgY29uc3Qgc3Vic3RpdHV0aW9ucyA9IFtdLFxuICAgICAgICAgICAgICBzdXBwb3NpdGlvbnNNYXRjaCA9IG1hdGNoU3VwcG9zaXRpb25zKHRoaXMuc3VwcG9zaXRpb25zLCBwcm9vZlN0ZXBzLCBzdWJzdGl0dXRpb25zLCB0aGlzLmxvY2FsQ29udGV4dCwgc3RhdGVtZW50TG9jYWxDb250ZXh0KTtcblxuICAgICAgICBpZiAoc3VwcG9zaXRpb25zTWF0Y2gpIHtcbiAgICAgICAgICBjb25zdCBjb25zZXF1ZW50TWF0Y2hlcyA9IG1hdGNoQ29uc2VxdWVudCh0aGlzLmNvbnNlcXVlbnQsIHN0YXRlbWVudE5vZGUsIHN1YnN0aXR1dGlvbnMsIHRoaXMubG9jYWxDb250ZXh0LCBzdGF0ZW1lbnRMb2NhbENvbnRleHQpO1xuXG4gICAgICAgICAgc3VwcG9zaXRpb25zTWF0Y2hDb25zZXF1ZW50ID0gY29uc2VxdWVudE1hdGNoZXM7ICAvLy9cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChzdXBwb3NpdGlvbnNNYXRjaENvbnNlcXVlbnQpIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN0YXRlbWVudE5hdGNoZXM7XG4gIH1cblxuICBtYXRjaE1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSkge1xuICAgIGNvbnN0IG1ldGF2YXJpYWJsZU5vZGVNYXRjaGVzID0gdGhpcy5sYWJlbHMuc29tZSgobGFiZWwpID0+IHtcbiAgICAgIGNvbnN0IGxhYmVsTWF0Y2hlc01ldGF2YXJpYWJsZU5vZGUgPSBsYWJlbC5tYXRjaE1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSk7XG5cbiAgICAgIGlmIChsYWJlbE1hdGNoZXNNZXRhdmFyaWFibGVOb2RlKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIG1ldGF2YXJpYWJsZU5vZGVNYXRjaGVzO1xuICB9XG5cbiAgdG9KU09OKHRva2Vucykge1xuICAgIGNvbnN0IGxhYmVsc0pTT04gPSB0aGlzLmxhYmVscy5tYXAoKGxhYmVsKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBsYWJlbEpTT04gPSBsYWJlbC50b0pTT04odG9rZW5zKTtcblxuICAgICAgICAgICAgcmV0dXJuIGxhYmVsSlNPTjtcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBzdXBwb3NpdGlvbnNKU09OID0gdGhpcy5zdXBwb3NpdGlvbnMubWFwKChzdXBwb3NpdGlvbikgPT4ge1xuICAgICAgICAgICAgY29uc3Qgc3VwcG9zaXRpb25KU09OID0gc3VwcG9zaXRpb24udG9KU09OKHRva2Vucyk7XG5cbiAgICAgICAgICAgIHJldHVybiBzdXBwb3NpdGlvbkpTT047XG4gICAgICAgICAgfSksXG4gICAgICAgICAgY29uc2VxdWVudEpTT04gPSB0aGlzLmNvbnNlcXVlbnQudG9KU09OKHRva2VucyksXG4gICAgICAgICAgbG9jYWxDb250ZXh0SlNPTiA9IHRoaXMubG9jYWxDb250ZXh0LnRvSlNPTih0b2tlbnMpLFxuICAgICAgICAgIGxhYmVscyA9IGxhYmVsc0pTT04sICAvLy9cbiAgICAgICAgICBzdXBwb3NpdGlvbnMgPSBzdXBwb3NpdGlvbnNKU09OLCAgLy8vXG4gICAgICAgICAgY29uc2VxdWVudCA9IGNvbnNlcXVlbnRKU09OLCAgLy8vXG4gICAgICAgICAgbG9jYWxDb250ZXh0ID0gbG9jYWxDb250ZXh0SlNPTiwgIC8vL1xuICAgICAgICAgIGpzb24gPSB7XG4gICAgICAgICAgICBsYWJlbHMsXG4gICAgICAgICAgICBzdXBwb3NpdGlvbnMsXG4gICAgICAgICAgICBjb25zZXF1ZW50LFxuICAgICAgICAgICAgbG9jYWxDb250ZXh0XG4gICAgICAgICAgfTtcblxuICAgIHJldHVybiBqc29uO1xuICB9XG5cbiAgc3RhdGljIGZyb21KU09OQW5kRmlsZUNvbnRleHQoQ2xhc3MsIGpzb24sIGZpbGVDb250ZXh0KSB7XG4gICAgbGV0IHsgbGFiZWxzIH0gPSBqc29uO1xuXG4gICAgY29uc3QgbGFiZWxzSlNPTiA9IGxhYmVsczsgIC8vL1xuXG4gICAgbGFiZWxzID0gbGFiZWxzSlNPTi5tYXAoKGxhYmVsSlNPTikgPT4ge1xuICAgICAgY29uc3QganNvbiA9IGxhYmVsSlNPTiwgLy8vXG4gICAgICAgICAgICBsYWJlbCA9IExhYmVsLmZyb21KU09OQW5kRmlsZUNvbnRleHQoanNvbiwgZmlsZUNvbnRleHQpO1xuXG4gICAgICByZXR1cm4gbGFiZWw7XG4gICAgfSk7XG5cbiAgICBsZXQgeyBzdXBwb3NpdGlvbnMsIGNvbnNlcXVlbnQsIGxvY2FsQ29udGV4dCB9ID0ganNvbjtcblxuICAgIGNvbnN0IHN1cHBvc2l0aW9uc0pTT04gPSBzdXBwb3NpdGlvbnM7ICAvLy9cblxuICAgIHN1cHBvc2l0aW9ucyA9IHN1cHBvc2l0aW9uc0pTT04ubWFwKChzdXBwb3NpdGlvbkpTT04pID0+IHtcbiAgICAgIGNvbnN0IGpzb24gPSBzdXBwb3NpdGlvbkpTT04sIC8vL1xuICAgICAgICAgICAgc3VwcG9zaXRpb24gPSBTdXBwb3NpdGlvbi5mcm9tSlNPTkFuZEZpbGVDb250ZXh0KGpzb24sIGZpbGVDb250ZXh0KTtcblxuICAgICAgcmV0dXJuIHN1cHBvc2l0aW9uO1xuICAgIH0pO1xuXG4gICAgY29uc3QgY29uc2VxdWVudEpTT04gPSBjb25zZXF1ZW50OyAgLy8vXG5cbiAgICBqc29uID0gY29uc2VxdWVudEpTT047ICAvLy9cblxuICAgIGNvbnNlcXVlbnQgPSBDb25zZXF1ZW50LmZyb21KU09OQW5kRmlsZUNvbnRleHQoanNvbiwgZmlsZUNvbnRleHQpO1xuXG4gICAgY29uc3QgbG9jYWxDb250ZXh0SlNPTiA9IGxvY2FsQ29udGV4dDsgIC8vL1xuXG4gICAganNvbiA9IGxvY2FsQ29udGV4dEpTT047ICAvLy9cblxuICAgIGxvY2FsQ29udGV4dCA9IExvY2FsQ29udGV4dC5mcm9tSlNPTkFuZEZpbGVDb250ZXh0KGpzb24sIGZpbGVDb250ZXh0KTtcblxuICAgIHJldHVybiBuZXcgQ2xhc3MobGFiZWxzLCBzdXBwb3NpdGlvbnMsIGNvbnNlcXVlbnQsIGxvY2FsQ29udGV4dCk7ICAvLy9cbiAgfVxuXG4gIHN0YXRpYyBmcm9tTGFiZWxzU3VwcG9zaXRpb25zQ29uc2VxdWVudEFuZExvY2FsQ29udGV4dChDbGFzcywgbGFiZWxzLCBzdXBwb3NpdGlvbnMsIGNvbnNlcXVlbnQsIGxvY2FsQ29udGV4dCkgeyByZXR1cm4gbmV3IENsYXNzKGxhYmVscywgc3VwcG9zaXRpb25zLCBjb25zZXF1ZW50LCBsb2NhbENvbnRleHQpOyB9XG59XG5cbmZ1bmN0aW9uIG1hdGNoU3VwcG9zaXRpb24oc3VwcG9zaXRpb24sIHByb29mU3RlcHMsIHN1YnN0aXR1dGlvbnMsIGxvY2FsQ29udGV4dCwgc3RhdGVtZW50TG9jYWxDb250ZXh0KSB7XG4gIGNvbnN0IHByb29mU3RlcCA9IHBydW5lKHByb29mU3RlcHMsIChwcm9vZlN0ZXApID0+IHtcbiAgICBjb25zdCBzdGF0ZW1lbnROb2RlID0gcHJvb2ZTdGVwLmdldFN0YXRlbWVudE5vZGUoKTtcblxuICAgIGlmIChzdGF0ZW1lbnROb2RlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBzdGF0ZW1lbnRNYXRjaGVzID0gc3VwcG9zaXRpb24ubWF0Y2hTdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUsIHN1YnN0aXR1dGlvbnMsIGxvY2FsQ29udGV4dCwgc3RhdGVtZW50TG9jYWxDb250ZXh0KTtcblxuICAgICAgaWYgKCFzdGF0ZW1lbnRNYXRjaGVzKSB7ICAvLy9cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfVxuICB9KSB8fCBudWxsO1xuXG4gIGNvbnN0IHN1cHBvc2l0aW9uTWF0Y2hlcyA9IChwcm9vZlN0ZXAgIT09IG51bGwpO1xuXG4gIHJldHVybiBzdXBwb3NpdGlvbk1hdGNoZXM7XG59XG5cbmZ1bmN0aW9uIG1hdGNoU3VwcG9zaXRpb25zKHN1cHBvc2l0aW9ucywgcHJvb2ZTdGVwcywgc3Vic3RpdHV0aW9ucywgbG9jYWxDb250ZXh0LCBzdGF0ZW1lbnRMb2NhbENvbnRleHQpIHtcbiAgY29uc3Qgc3VwcG9zaXRpb25zTWF0Y2ggPSBzdXBwb3NpdGlvbnMuZXZlcnkoKHN1cHBvc2l0aW9uKSA9PiB7XG4gICAgY29uc3Qgc3VwcG9zaXRpb25NYXRjaGVzID0gbWF0Y2hTdXBwb3NpdGlvbihzdXBwb3NpdGlvbiwgcHJvb2ZTdGVwcywgc3Vic3RpdHV0aW9ucywgbG9jYWxDb250ZXh0LCBzdGF0ZW1lbnRMb2NhbENvbnRleHQpO1xuXG4gICAgaWYgKHN1cHBvc2l0aW9uTWF0Y2hlcykge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gc3VwcG9zaXRpb25zTWF0Y2g7XG59XG5cbmZ1bmN0aW9uIG1hdGNoQ29uc2VxdWVudChjb25zZXF1ZW50LCBzdGF0ZW1lbnROb2RlLCBzdWJzdGl0dXRpb25zLCBsb2NhbENvbnRleHQsIHN0YXRlbWVudExvY2FsQ29udGV4dCkge1xuICBjb25zdCBub25UZXJtaW5hbE5vZGVNYXRjaGVzID0gY29uc2VxdWVudC5tYXRjaFN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSwgc3Vic3RpdHV0aW9ucywgbG9jYWxDb250ZXh0LCBzdGF0ZW1lbnRMb2NhbENvbnRleHQpLFxuICAgICAgICBjb25zZXF1ZW50TWF0Y2hlcyA9IG5vblRlcm1pbmFsTm9kZU1hdGNoZXM7IC8vL1xuXG4gIHJldHVybiBjb25zZXF1ZW50TWF0Y2hlcztcbn1cbiJdLCJuYW1lcyI6WyJBeGlvbUxlbW1hVGhlb3JlbUNvbmplY3R1cmUiLCJsYWJlbHMiLCJzdXBwb3NpdGlvbnMiLCJjb25zZXF1ZW50IiwibG9jYWxDb250ZXh0IiwiZ2V0TGFiZWxzIiwiZ2V0U3VwcG9zaXRpb25zIiwiZ2V0Q29uc2VxdWVudCIsImdldExvY2FsQ29udGV4dCIsIm1hdGNoU3RhdGVtZW50Iiwic3RhdGVtZW50Tm9kZSIsInN0YXRlbWVudE5hdGNoZXMiLCJzdXBwb3NpdGlvbnNMZW5ndGgiLCJsZW5ndGgiLCJzdGF0ZW1lbnRMb2NhbENvbnRleHQiLCJzdWJzdGl0dXRpb25zIiwiY29uc2VxdWVudE1hdGNoZXMiLCJtYXRjaENvbnNlcXVlbnQiLCJwcm9vZlN0ZXBzIiwiZ2V0UHJvb2ZTdGVwcyIsInNvbWVTdWJBcnJheSIsInN1cHBvc2l0aW9uc01hdGNoQ29uc2VxdWVudCIsInN1cHBvc2l0aW9uc01hdGNoIiwibWF0Y2hTdXBwb3NpdGlvbnMiLCJtYXRjaE1ldGF2YXJpYWJsZU5vZGUiLCJtZXRhdmFyaWFibGVOb2RlIiwibWV0YXZhcmlhYmxlTm9kZU1hdGNoZXMiLCJzb21lIiwibGFiZWwiLCJsYWJlbE1hdGNoZXNNZXRhdmFyaWFibGVOb2RlIiwidG9KU09OIiwidG9rZW5zIiwibGFiZWxzSlNPTiIsIm1hcCIsImxhYmVsSlNPTiIsInN1cHBvc2l0aW9uc0pTT04iLCJzdXBwb3NpdGlvbiIsInN1cHBvc2l0aW9uSlNPTiIsImNvbnNlcXVlbnRKU09OIiwibG9jYWxDb250ZXh0SlNPTiIsImpzb24iLCJmcm9tSlNPTkFuZEZpbGVDb250ZXh0IiwiQ2xhc3MiLCJmaWxlQ29udGV4dCIsIkxhYmVsIiwiU3VwcG9zaXRpb24iLCJDb25zZXF1ZW50IiwiTG9jYWxDb250ZXh0IiwiZnJvbUxhYmVsc1N1cHBvc2l0aW9uc0NvbnNlcXVlbnRBbmRMb2NhbENvbnRleHQiLCJtYXRjaFN1cHBvc2l0aW9uIiwicHJvb2ZTdGVwIiwicHJ1bmUiLCJnZXRTdGF0ZW1lbnROb2RlIiwic3RhdGVtZW50TWF0Y2hlcyIsIm1hdGNoU3RhdGVtZW50Tm9kZSIsInN1cHBvc2l0aW9uTWF0Y2hlcyIsImV2ZXJ5Iiwibm9uVGVybWluYWxOb2RlTWF0Y2hlcyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFXcUJBOzs7NERBVEg7aUVBQ0s7a0VBQ0M7NERBQ0M7cUJBRUg7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJUCxJQUFBLEFBQU1BLDRDQUFELEFBQUw7YUFBTUEsNEJBQ1BDLE1BQU0sRUFBRUMsWUFBWSxFQUFFQyxVQUFVLEVBQUVDLFlBQVk7Z0NBRHZDSjtRQUVqQixJQUFJLENBQUNDLE1BQU0sR0FBR0E7UUFDZCxJQUFJLENBQUNDLFlBQVksR0FBR0E7UUFDcEIsSUFBSSxDQUFDQyxVQUFVLEdBQUdBO1FBQ2xCLElBQUksQ0FBQ0MsWUFBWSxHQUFHQTs7a0JBTEhKOztZQVFuQkssS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDSixNQUFNO1lB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