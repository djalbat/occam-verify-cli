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
            value: function matchStatement(statementNode, statementLocalContext) {
                var _this = this;
                var statementNatches;
                var suppositionsLength = this.suppositions.length;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9heGlvbUxlbW1hVGhlb3JlbUNvbmplY3R1cmUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBMYWJlbCBmcm9tIFwiLi9sYWJlbFwiO1xuaW1wb3J0IENvbnNlcXVlbnQgZnJvbSBcIi4vY29uc2VxdWVudFwiO1xuaW1wb3J0IFN1cHBvc2l0aW9uIGZyb20gXCIuL3N1cHBvc2l0aW9uXCI7XG5pbXBvcnQgTG9jYWxDb250ZXh0IGZyb20gXCIuL2NvbnRleHQvbG9jYWxcIjtcblxuaW1wb3J0IHsgcHJ1bmUgfSBmcm9tIFwiLi91dGlsaXRpZXMvYXJyYXlcIjtcbmltcG9ydCB7IHNvbWVTdWJBcnJheSB9IGZyb20gXCIuL3V0aWxpdGllcy9hcnJheVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBeGlvbUxlbW1hVGhlb3JlbUNvbmplY3R1cmUge1xuICBjb25zdHJ1Y3RvcihsYWJlbHMsIHN1cHBvc2l0aW9ucywgY29uc2VxdWVudCwgbG9jYWxDb250ZXh0KSB7XG4gICAgdGhpcy5sYWJlbHMgPSBsYWJlbHM7XG4gICAgdGhpcy5zdXBwb3NpdGlvbnMgPSBzdXBwb3NpdGlvbnM7XG4gICAgdGhpcy5jb25zZXF1ZW50ID0gY29uc2VxdWVudDtcbiAgICB0aGlzLmxvY2FsQ29udGV4dCA9IGxvY2FsQ29udGV4dDtcbiAgfVxuXG4gIGdldExhYmVscygpIHtcbiAgICByZXR1cm4gdGhpcy5sYWJlbHM7XG4gIH1cblxuICBnZXRTdXBwb3NpdGlvbnMoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3VwcG9zaXRpb25zO1xuICB9XG5cbiAgZ2V0Q29uc2VxdWVudCgpIHtcbiAgICByZXR1cm4gdGhpcy5jb25zZXF1ZW50O1xuICB9XG5cbiAgZ2V0TG9jYWxDb250ZXh0KCkge1xuICAgIHJldHVybiB0aGlzLmxvY2FsQ29udGV4dDtcbiAgfVxuXG4gIG1hdGNoU3RhdGVtZW50KHN0YXRlbWVudE5vZGUsIHN0YXRlbWVudExvY2FsQ29udGV4dCkge1xuICAgIGxldCBzdGF0ZW1lbnROYXRjaGVzO1xuXG4gICAgY29uc3Qgc3VwcG9zaXRpb25zTGVuZ3RoID0gdGhpcy5zdXBwb3NpdGlvbnMubGVuZ3RoO1xuXG4gICAgaWYgKHN1cHBvc2l0aW9uc0xlbmd0aCA9PT0gMCkge1xuICAgICAgY29uc3Qgc3Vic3RpdHV0aW9ucyA9IFtdLFxuICAgICAgICAgICAgY29uc2VxdWVudE1hdGNoZXMgPSBtYXRjaENvbnNlcXVlbnQodGhpcy5jb25zZXF1ZW50LCBzdGF0ZW1lbnROb2RlLCBzdWJzdGl0dXRpb25zLCB0aGlzLmxvY2FsQ29udGV4dCwgc3RhdGVtZW50TG9jYWxDb250ZXh0KTtcblxuICAgICAgc3RhdGVtZW50TmF0Y2hlcyA9IGNvbnNlcXVlbnRNYXRjaGVzOyAvLy9cbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgcHJvb2ZTdGVwcyA9IHN0YXRlbWVudExvY2FsQ29udGV4dC5nZXRQcm9vZlN0ZXBzKCk7XG5cbiAgICAgIHN0YXRlbWVudE5hdGNoZXMgPSBzb21lU3ViQXJyYXkocHJvb2ZTdGVwcywgc3VwcG9zaXRpb25zTGVuZ3RoLCAocHJvb2ZTdGVwcykgPT4ge1xuICAgICAgICBsZXQgc3VwcG9zaXRpb25zTWF0Y2hDb25zZXF1ZW50ID0gZmFsc2U7XG5cbiAgICAgICAgY29uc3Qgc3Vic3RpdHV0aW9ucyA9IFtdLFxuICAgICAgICAgICAgICBzdXBwb3NpdGlvbnNNYXRjaCA9IG1hdGNoU3VwcG9zaXRpb25zKHRoaXMuc3VwcG9zaXRpb25zLCBwcm9vZlN0ZXBzLCBzdWJzdGl0dXRpb25zLCB0aGlzLmxvY2FsQ29udGV4dCwgc3RhdGVtZW50TG9jYWxDb250ZXh0KTtcblxuICAgICAgICBpZiAoc3VwcG9zaXRpb25zTWF0Y2gpIHtcbiAgICAgICAgICBjb25zdCBjb25zZXF1ZW50TWF0Y2hlcyA9IG1hdGNoQ29uc2VxdWVudCh0aGlzLmNvbnNlcXVlbnQsIHN0YXRlbWVudE5vZGUsIHN1YnN0aXR1dGlvbnMsIHRoaXMubG9jYWxDb250ZXh0LCBzdGF0ZW1lbnRMb2NhbENvbnRleHQpO1xuXG4gICAgICAgICAgc3VwcG9zaXRpb25zTWF0Y2hDb25zZXF1ZW50ID0gY29uc2VxdWVudE1hdGNoZXM7ICAvLy9cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChzdXBwb3NpdGlvbnNNYXRjaENvbnNlcXVlbnQpIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN0YXRlbWVudE5hdGNoZXM7XG4gIH1cblxuICBtYXRjaE1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSkge1xuICAgIGNvbnN0IG1ldGF2YXJpYWJsZU5vZGVNYXRjaGVzID0gdGhpcy5sYWJlbHMuc29tZSgobGFiZWwpID0+IHtcbiAgICAgIGNvbnN0IGxhYmVsTWF0Y2hlc01ldGF2YXJpYWJsZU5vZGUgPSBsYWJlbC5tYXRjaE1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSk7XG5cbiAgICAgIGlmIChsYWJlbE1hdGNoZXNNZXRhdmFyaWFibGVOb2RlKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIG1ldGF2YXJpYWJsZU5vZGVNYXRjaGVzO1xuICB9XG5cbiAgdG9KU09OKHRva2Vucykge1xuICAgIGNvbnN0IGxhYmVsc0pTT04gPSB0aGlzLmxhYmVscy5tYXAoKGxhYmVsKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBsYWJlbEpTT04gPSBsYWJlbC50b0pTT04odG9rZW5zKTtcblxuICAgICAgICAgICAgcmV0dXJuIGxhYmVsSlNPTjtcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBzdXBwb3NpdGlvbnNKU09OID0gdGhpcy5zdXBwb3NpdGlvbnMubWFwKChzdXBwb3NpdGlvbikgPT4ge1xuICAgICAgICAgICAgY29uc3Qgc3VwcG9zaXRpb25KU09OID0gc3VwcG9zaXRpb24udG9KU09OKHRva2Vucyk7XG5cbiAgICAgICAgICAgIHJldHVybiBzdXBwb3NpdGlvbkpTT047XG4gICAgICAgICAgfSksXG4gICAgICAgICAgY29uc2VxdWVudEpTT04gPSB0aGlzLmNvbnNlcXVlbnQudG9KU09OKHRva2VucyksXG4gICAgICAgICAgbG9jYWxDb250ZXh0SlNPTiA9IHRoaXMubG9jYWxDb250ZXh0LnRvSlNPTih0b2tlbnMpLFxuICAgICAgICAgIGxhYmVscyA9IGxhYmVsc0pTT04sICAvLy9cbiAgICAgICAgICBzdXBwb3NpdGlvbnMgPSBzdXBwb3NpdGlvbnNKU09OLCAgLy8vXG4gICAgICAgICAgY29uc2VxdWVudCA9IGNvbnNlcXVlbnRKU09OLCAgLy8vXG4gICAgICAgICAgbG9jYWxDb250ZXh0ID0gbG9jYWxDb250ZXh0SlNPTiwgIC8vL1xuICAgICAgICAgIGpzb24gPSB7XG4gICAgICAgICAgICBsYWJlbHMsXG4gICAgICAgICAgICBzdXBwb3NpdGlvbnMsXG4gICAgICAgICAgICBjb25zZXF1ZW50LFxuICAgICAgICAgICAgbG9jYWxDb250ZXh0XG4gICAgICAgICAgfTtcblxuICAgIHJldHVybiBqc29uO1xuICB9XG5cbiAgc3RhdGljIGZyb21KU09OQW5kRmlsZUNvbnRleHQoQ2xhc3MsIGpzb24sIGZpbGVDb250ZXh0KSB7XG4gICAgbGV0IHsgbGFiZWxzIH0gPSBqc29uO1xuXG4gICAgY29uc3QgbGFiZWxzSlNPTiA9IGxhYmVsczsgIC8vL1xuXG4gICAgbGFiZWxzID0gbGFiZWxzSlNPTi5tYXAoKGxhYmVsSlNPTikgPT4ge1xuICAgICAgY29uc3QganNvbiA9IGxhYmVsSlNPTiwgLy8vXG4gICAgICAgICAgICBsYWJlbCA9IExhYmVsLmZyb21KU09OQW5kRmlsZUNvbnRleHQoanNvbiwgZmlsZUNvbnRleHQpO1xuXG4gICAgICByZXR1cm4gbGFiZWw7XG4gICAgfSk7XG5cbiAgICBsZXQgeyBzdXBwb3NpdGlvbnMsIGNvbnNlcXVlbnQsIGxvY2FsQ29udGV4dCB9ID0ganNvbjtcblxuICAgIGNvbnN0IHN1cHBvc2l0aW9uc0pTT04gPSBzdXBwb3NpdGlvbnM7ICAvLy9cblxuICAgIHN1cHBvc2l0aW9ucyA9IHN1cHBvc2l0aW9uc0pTT04ubWFwKChzdXBwb3NpdGlvbkpTT04pID0+IHtcbiAgICAgIGNvbnN0IGpzb24gPSBzdXBwb3NpdGlvbkpTT04sIC8vL1xuICAgICAgICAgICAgc3VwcG9zaXRpb24gPSBTdXBwb3NpdGlvbi5mcm9tSlNPTkFuZEZpbGVDb250ZXh0KGpzb24sIGZpbGVDb250ZXh0KTtcblxuICAgICAgcmV0dXJuIHN1cHBvc2l0aW9uO1xuICAgIH0pO1xuXG4gICAgY29uc3QgY29uc2VxdWVudEpTT04gPSBjb25zZXF1ZW50OyAgLy8vXG5cbiAgICBqc29uID0gY29uc2VxdWVudEpTT047ICAvLy9cblxuICAgIGNvbnNlcXVlbnQgPSBDb25zZXF1ZW50LmZyb21KU09OQW5kRmlsZUNvbnRleHQoanNvbiwgZmlsZUNvbnRleHQpO1xuXG4gICAgY29uc3QgbG9jYWxDb250ZXh0SlNPTiA9IGxvY2FsQ29udGV4dDsgIC8vL1xuXG4gICAganNvbiA9IGxvY2FsQ29udGV4dEpTT047ICAvLy9cblxuICAgIGxvY2FsQ29udGV4dCA9IExvY2FsQ29udGV4dC5mcm9tSlNPTkFuZEZpbGVDb250ZXh0KGpzb24sIGZpbGVDb250ZXh0KTtcblxuICAgIHJldHVybiBuZXcgQ2xhc3MobGFiZWxzLCBzdXBwb3NpdGlvbnMsIGNvbnNlcXVlbnQsIGxvY2FsQ29udGV4dCk7ICAvLy9cbiAgfVxuXG4gIHN0YXRpYyBmcm9tTGFiZWxzU3VwcG9zaXRpb25zQ29uc2VxdWVudEFuZExvY2FsQ29udGV4dChDbGFzcywgbGFiZWxzLCBzdXBwb3NpdGlvbnMsIGNvbnNlcXVlbnQsIGxvY2FsQ29udGV4dCkgeyByZXR1cm4gbmV3IENsYXNzKGxhYmVscywgc3VwcG9zaXRpb25zLCBjb25zZXF1ZW50LCBsb2NhbENvbnRleHQpOyB9XG59XG5cbmZ1bmN0aW9uIG1hdGNoU3VwcG9zaXRpb24oc3VwcG9zaXRpb24sIHByb29mU3RlcHMsIHN1YnN0aXR1dGlvbnMsIGxvY2FsQ29udGV4dCwgc3RhdGVtZW50TG9jYWxDb250ZXh0KSB7XG4gIGNvbnN0IHByb29mU3RlcCA9IHBydW5lKHByb29mU3RlcHMsIChwcm9vZlN0ZXApID0+IHtcbiAgICBjb25zdCBzdGF0ZW1lbnROb2RlID0gcHJvb2ZTdGVwLmdldFN0YXRlbWVudE5vZGUoKTtcblxuICAgIGlmIChzdGF0ZW1lbnROb2RlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBzdGF0ZW1lbnRNYXRjaGVzID0gc3VwcG9zaXRpb24ubWF0Y2hTdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUsIHN1YnN0aXR1dGlvbnMsIGxvY2FsQ29udGV4dCwgc3RhdGVtZW50TG9jYWxDb250ZXh0KTtcblxuICAgICAgaWYgKCFzdGF0ZW1lbnRNYXRjaGVzKSB7ICAvLy9cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfVxuICB9KSB8fCBudWxsO1xuXG4gIGNvbnN0IHN1cHBvc2l0aW9uTWF0Y2hlcyA9IChwcm9vZlN0ZXAgIT09IG51bGwpO1xuXG4gIHJldHVybiBzdXBwb3NpdGlvbk1hdGNoZXM7XG59XG5cbmZ1bmN0aW9uIG1hdGNoU3VwcG9zaXRpb25zKHN1cHBvc2l0aW9ucywgcHJvb2ZTdGVwcywgc3Vic3RpdHV0aW9ucywgbG9jYWxDb250ZXh0LCBzdGF0ZW1lbnRMb2NhbENvbnRleHQpIHtcbiAgY29uc3Qgc3VwcG9zaXRpb25zTWF0Y2ggPSBzdXBwb3NpdGlvbnMuZXZlcnkoKHN1cHBvc2l0aW9uKSA9PiB7XG4gICAgY29uc3Qgc3VwcG9zaXRpb25NYXRjaGVzID0gbWF0Y2hTdXBwb3NpdGlvbihzdXBwb3NpdGlvbiwgcHJvb2ZTdGVwcywgc3Vic3RpdHV0aW9ucywgbG9jYWxDb250ZXh0LCBzdGF0ZW1lbnRMb2NhbENvbnRleHQpO1xuXG4gICAgaWYgKHN1cHBvc2l0aW9uTWF0Y2hlcykge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gc3VwcG9zaXRpb25zTWF0Y2g7XG59XG5cbmZ1bmN0aW9uIG1hdGNoQ29uc2VxdWVudChjb25zZXF1ZW50LCBzdGF0ZW1lbnROb2RlLCBzdWJzdGl0dXRpb25zLCBsb2NhbENvbnRleHQsIHN0YXRlbWVudExvY2FsQ29udGV4dCkge1xuICBjb25zdCBub25UZXJtaW5hbE5vZGVNYXRjaGVzID0gY29uc2VxdWVudC5tYXRjaFN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSwgc3Vic3RpdHV0aW9ucywgbG9jYWxDb250ZXh0LCBzdGF0ZW1lbnRMb2NhbENvbnRleHQpLFxuICAgICAgICBjb25zZXF1ZW50TWF0Y2hlcyA9IG5vblRlcm1pbmFsTm9kZU1hdGNoZXM7IC8vL1xuXG4gIHJldHVybiBjb25zZXF1ZW50TWF0Y2hlcztcbn1cbiJdLCJuYW1lcyI6WyJBeGlvbUxlbW1hVGhlb3JlbUNvbmplY3R1cmUiLCJsYWJlbHMiLCJzdXBwb3NpdGlvbnMiLCJjb25zZXF1ZW50IiwibG9jYWxDb250ZXh0IiwiZ2V0TGFiZWxzIiwiZ2V0U3VwcG9zaXRpb25zIiwiZ2V0Q29uc2VxdWVudCIsImdldExvY2FsQ29udGV4dCIsIm1hdGNoU3RhdGVtZW50Iiwic3RhdGVtZW50Tm9kZSIsInN0YXRlbWVudExvY2FsQ29udGV4dCIsInN0YXRlbWVudE5hdGNoZXMiLCJzdXBwb3NpdGlvbnNMZW5ndGgiLCJsZW5ndGgiLCJzdWJzdGl0dXRpb25zIiwiY29uc2VxdWVudE1hdGNoZXMiLCJtYXRjaENvbnNlcXVlbnQiLCJwcm9vZlN0ZXBzIiwiZ2V0UHJvb2ZTdGVwcyIsInNvbWVTdWJBcnJheSIsInN1cHBvc2l0aW9uc01hdGNoQ29uc2VxdWVudCIsInN1cHBvc2l0aW9uc01hdGNoIiwibWF0Y2hTdXBwb3NpdGlvbnMiLCJtYXRjaE1ldGF2YXJpYWJsZU5vZGUiLCJtZXRhdmFyaWFibGVOb2RlIiwibWV0YXZhcmlhYmxlTm9kZU1hdGNoZXMiLCJzb21lIiwibGFiZWwiLCJsYWJlbE1hdGNoZXNNZXRhdmFyaWFibGVOb2RlIiwidG9KU09OIiwidG9rZW5zIiwibGFiZWxzSlNPTiIsIm1hcCIsImxhYmVsSlNPTiIsInN1cHBvc2l0aW9uc0pTT04iLCJzdXBwb3NpdGlvbiIsInN1cHBvc2l0aW9uSlNPTiIsImNvbnNlcXVlbnRKU09OIiwibG9jYWxDb250ZXh0SlNPTiIsImpzb24iLCJmcm9tSlNPTkFuZEZpbGVDb250ZXh0IiwiQ2xhc3MiLCJmaWxlQ29udGV4dCIsIkxhYmVsIiwiU3VwcG9zaXRpb24iLCJDb25zZXF1ZW50IiwiTG9jYWxDb250ZXh0IiwiZnJvbUxhYmVsc1N1cHBvc2l0aW9uc0NvbnNlcXVlbnRBbmRMb2NhbENvbnRleHQiLCJtYXRjaFN1cHBvc2l0aW9uIiwicHJvb2ZTdGVwIiwicHJ1bmUiLCJnZXRTdGF0ZW1lbnROb2RlIiwic3RhdGVtZW50TWF0Y2hlcyIsIm1hdGNoU3RhdGVtZW50Tm9kZSIsInN1cHBvc2l0aW9uTWF0Y2hlcyIsImV2ZXJ5Iiwibm9uVGVybWluYWxOb2RlTWF0Y2hlcyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFVcUJBOzs7NERBUkg7aUVBQ0s7a0VBQ0M7NERBQ0M7cUJBRUg7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFHUCxJQUFBLEFBQU1BLDRDQUFELEFBQUw7YUFBTUEsNEJBQ1BDLE1BQU0sRUFBRUMsWUFBWSxFQUFFQyxVQUFVLEVBQUVDLFlBQVk7Z0NBRHZDSjtRQUVqQixJQUFJLENBQUNDLE1BQU0sR0FBR0E7UUFDZCxJQUFJLENBQUNDLFlBQVksR0FBR0E7UUFDcEIsSUFBSSxDQUFDQyxVQUFVLEdBQUdBO1FBQ2xCLElBQUksQ0FBQ0MsWUFBWSxHQUFHQTs7a0JBTEhKOztZQVFuQkssS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDSixNQUFNO1lBQ3BCOzs7WUFFQUssS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDSixZQUFZO1lBQzFCOzs7WUFFQUssS0FBQUE7bUJBQUFB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