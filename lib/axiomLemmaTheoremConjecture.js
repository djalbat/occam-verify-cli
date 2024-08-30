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
        var statementMatches = supposition.matchStatementNode(statementNode, substitutions, localContext, statementLocalContext);
        suppositionMatches = statementMatches; ///
    }
    return suppositionMatches;
}
function matchConsequent(consequent, statementNode, substitutions, localContext, statementLocalContext) {
    var nonTerminalNodeMatches = consequent.matchStatementNode(statementNode, substitutions, localContext, statementLocalContext), consequentMatches = nonTerminalNodeMatches; ///
    return consequentMatches;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9heGlvbUxlbW1hVGhlb3JlbUNvbmplY3R1cmUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBMYWJlbCBmcm9tIFwiLi9sYWJlbFwiO1xuaW1wb3J0IENvbnNlcXVlbnQgZnJvbSBcIi4vY29uc2VxdWVudFwiO1xuaW1wb3J0IFN1cHBvc2l0aW9uIGZyb20gXCIuL3N1cHBvc2l0aW9uXCI7XG5pbXBvcnQgTG9jYWxDb250ZXh0IGZyb20gXCIuL2NvbnRleHQvbG9jYWxcIjtcblxuaW1wb3J0IHsgcmV2ZXJzZSwgY29ycmVsYXRlIH0gZnJvbSBcIi4vdXRpbGl0aWVzL2FycmF5XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEF4aW9tTGVtbWFUaGVvcmVtQ29uamVjdHVyZSB7XG4gIGNvbnN0cnVjdG9yKGxhYmVscywgc3VwcG9zaXRpb25zLCBjb25zZXF1ZW50LCBsb2NhbENvbnRleHQpIHtcbiAgICB0aGlzLmxhYmVscyA9IGxhYmVscztcbiAgICB0aGlzLnN1cHBvc2l0aW9ucyA9IHN1cHBvc2l0aW9ucztcbiAgICB0aGlzLmNvbnNlcXVlbnQgPSBjb25zZXF1ZW50O1xuICAgIHRoaXMubG9jYWxDb250ZXh0ID0gbG9jYWxDb250ZXh0O1xuICB9XG5cbiAgZ2V0TGFiZWxzKCkge1xuICAgIHJldHVybiB0aGlzLmxhYmVscztcbiAgfVxuXG4gIGdldFN1cHBvc2l0aW9ucygpIHtcbiAgICByZXR1cm4gdGhpcy5zdXBwb3NpdGlvbnM7XG4gIH1cblxuICBnZXRDb25zZXF1ZW50KCkge1xuICAgIHJldHVybiB0aGlzLmNvbnNlcXVlbnQ7XG4gIH1cblxuICBnZXRMb2NhbENvbnRleHQoKSB7XG4gICAgcmV0dXJuIHRoaXMubG9jYWxDb250ZXh0O1xuICB9XG5cbiAgbWF0Y2hTdGF0ZW1lbnQoc3RhdGVtZW50Tm9kZSwgbG9jYWxDb250ZXh0KSB7XG4gICAgbGV0IHN0YXRlbWVudE5hdGNoZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IHByb29mU3RlcHMgPSBsb2NhbENvbnRleHQuZ2V0UHJvb2ZTdGVwcygpLFxuICAgICAgICAgIHN1YnN0aXR1dGlvbnMgPSBbXSxcbiAgICAgICAgICBzdXBwb3NpdGlvbnNNYXRjaCA9IG1hdGNoU3VwcG9zaXRpb25zKHRoaXMuc3VwcG9zaXRpb25zLCBwcm9vZlN0ZXBzLCBzdWJzdGl0dXRpb25zLCB0aGlzLmxvY2FsQ29udGV4dCwgbG9jYWxDb250ZXh0KTtcblxuICAgIGlmIChzdXBwb3NpdGlvbnNNYXRjaCkge1xuICAgICAgY29uc3QgY29uc2VxdWVudE1hdGNoZXMgPSBtYXRjaENvbnNlcXVlbnQodGhpcy5jb25zZXF1ZW50LCBzdGF0ZW1lbnROb2RlLCBzdWJzdGl0dXRpb25zLCB0aGlzLmxvY2FsQ29udGV4dCwgbG9jYWxDb250ZXh0KTtcblxuICAgICAgc3RhdGVtZW50TmF0Y2hlcyA9IGNvbnNlcXVlbnRNYXRjaGVzOyAgLy8vXG4gICAgfVxuXG4gICAgcmV0dXJuIHN0YXRlbWVudE5hdGNoZXM7XG4gIH1cblxuICBtYXRjaE1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSkge1xuICAgIGNvbnN0IG1ldGF2YXJpYWJsZU5vZGVNYXRjaGVzID0gdGhpcy5sYWJlbHMuc29tZSgobGFiZWwpID0+IHtcbiAgICAgIGNvbnN0IGxhYmVsTWF0Y2hlc01ldGF2YXJpYWJsZU5vZGUgPSBsYWJlbC5tYXRjaE1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSk7XG5cbiAgICAgIGlmIChsYWJlbE1hdGNoZXNNZXRhdmFyaWFibGVOb2RlKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIG1ldGF2YXJpYWJsZU5vZGVNYXRjaGVzO1xuICB9XG5cbiAgdG9KU09OKHRva2Vucykge1xuICAgIGNvbnN0IGxhYmVsc0pTT04gPSB0aGlzLmxhYmVscy5tYXAoKGxhYmVsKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBsYWJlbEpTT04gPSBsYWJlbC50b0pTT04odG9rZW5zKTtcblxuICAgICAgICAgICAgcmV0dXJuIGxhYmVsSlNPTjtcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBzdXBwb3NpdGlvbnNKU09OID0gdGhpcy5zdXBwb3NpdGlvbnMubWFwKChzdXBwb3NpdGlvbikgPT4ge1xuICAgICAgICAgICAgY29uc3Qgc3VwcG9zaXRpb25KU09OID0gc3VwcG9zaXRpb24udG9KU09OKHRva2Vucyk7XG5cbiAgICAgICAgICAgIHJldHVybiBzdXBwb3NpdGlvbkpTT047XG4gICAgICAgICAgfSksXG4gICAgICAgICAgY29uc2VxdWVudEpTT04gPSB0aGlzLmNvbnNlcXVlbnQudG9KU09OKHRva2VucyksXG4gICAgICAgICAgbG9jYWxDb250ZXh0SlNPTiA9IHRoaXMubG9jYWxDb250ZXh0LnRvSlNPTih0b2tlbnMpLFxuICAgICAgICAgIGxhYmVscyA9IGxhYmVsc0pTT04sICAvLy9cbiAgICAgICAgICBzdXBwb3NpdGlvbnMgPSBzdXBwb3NpdGlvbnNKU09OLCAgLy8vXG4gICAgICAgICAgY29uc2VxdWVudCA9IGNvbnNlcXVlbnRKU09OLCAgLy8vXG4gICAgICAgICAgbG9jYWxDb250ZXh0ID0gbG9jYWxDb250ZXh0SlNPTiwgIC8vL1xuICAgICAgICAgIGpzb24gPSB7XG4gICAgICAgICAgICBsYWJlbHMsXG4gICAgICAgICAgICBzdXBwb3NpdGlvbnMsXG4gICAgICAgICAgICBjb25zZXF1ZW50LFxuICAgICAgICAgICAgbG9jYWxDb250ZXh0XG4gICAgICAgICAgfTtcblxuICAgIHJldHVybiBqc29uO1xuICB9XG5cbiAgc3RhdGljIGZyb21KU09OQW5kRmlsZUNvbnRleHQoQ2xhc3MsIGpzb24sIGZpbGVDb250ZXh0KSB7XG4gICAgbGV0IHsgbGFiZWxzIH0gPSBqc29uO1xuXG4gICAgY29uc3QgbGFiZWxzSlNPTiA9IGxhYmVsczsgIC8vL1xuXG4gICAgbGFiZWxzID0gbGFiZWxzSlNPTi5tYXAoKGxhYmVsSlNPTikgPT4ge1xuICAgICAgY29uc3QganNvbiA9IGxhYmVsSlNPTiwgLy8vXG4gICAgICAgICAgICBsYWJlbCA9IExhYmVsLmZyb21KU09OQW5kRmlsZUNvbnRleHQoanNvbiwgZmlsZUNvbnRleHQpO1xuXG4gICAgICByZXR1cm4gbGFiZWw7XG4gICAgfSk7XG5cbiAgICBsZXQgeyBzdXBwb3NpdGlvbnMsIGNvbnNlcXVlbnQsIGxvY2FsQ29udGV4dCB9ID0ganNvbjtcblxuICAgIGNvbnN0IHN1cHBvc2l0aW9uc0pTT04gPSBzdXBwb3NpdGlvbnM7ICAvLy9cblxuICAgIHN1cHBvc2l0aW9ucyA9IHN1cHBvc2l0aW9uc0pTT04ubWFwKChzdXBwb3NpdGlvbkpTT04pID0+IHtcbiAgICAgIGNvbnN0IGpzb24gPSBzdXBwb3NpdGlvbkpTT04sIC8vL1xuICAgICAgICAgICAgc3VwcG9zaXRpb24gPSBTdXBwb3NpdGlvbi5mcm9tSlNPTkFuZEZpbGVDb250ZXh0KGpzb24sIGZpbGVDb250ZXh0KTtcblxuICAgICAgcmV0dXJuIHN1cHBvc2l0aW9uO1xuICAgIH0pO1xuXG4gICAgY29uc3QgY29uc2VxdWVudEpTT04gPSBjb25zZXF1ZW50OyAgLy8vXG5cbiAgICBqc29uID0gY29uc2VxdWVudEpTT047ICAvLy9cblxuICAgIGNvbnNlcXVlbnQgPSBDb25zZXF1ZW50LmZyb21KU09OQW5kRmlsZUNvbnRleHQoanNvbiwgZmlsZUNvbnRleHQpO1xuXG4gICAgY29uc3QgbG9jYWxDb250ZXh0SlNPTiA9IGxvY2FsQ29udGV4dDsgIC8vL1xuXG4gICAganNvbiA9IGxvY2FsQ29udGV4dEpTT047ICAvLy9cblxuICAgIGxvY2FsQ29udGV4dCA9IExvY2FsQ29udGV4dC5mcm9tSlNPTkFuZEZpbGVDb250ZXh0KGpzb24sIGZpbGVDb250ZXh0KTtcblxuICAgIHJldHVybiBuZXcgQ2xhc3MobGFiZWxzLCBzdXBwb3NpdGlvbnMsIGNvbnNlcXVlbnQsIGxvY2FsQ29udGV4dCk7ICAvLy9cbiAgfVxuXG4gIHN0YXRpYyBmcm9tTGFiZWxzU3VwcG9zaXRpb25zQ29uc2VxdWVudEFuZExvY2FsQ29udGV4dChDbGFzcywgbGFiZWxzLCBzdXBwb3NpdGlvbnMsIGNvbnNlcXVlbnQsIGxvY2FsQ29udGV4dCkgeyByZXR1cm4gbmV3IENsYXNzKGxhYmVscywgc3VwcG9zaXRpb25zLCBjb25zZXF1ZW50LCBsb2NhbENvbnRleHQpOyB9XG59XG5cbmZ1bmN0aW9uIG1hdGNoU3VwcG9zaXRpb25zKHN1cHBvc2l0aW9ucywgcHJvb2ZTdGVwcywgc3Vic3RpdHV0aW9ucywgbG9jYWxDb250ZXh0LCBzdGF0ZW1lbnRMb2NhbENvbnRleHQpIHtcbiAgc3VwcG9zaXRpb25zID0gcmV2ZXJzZShzdXBwb3NpdGlvbnMpOyAvLy9cblxuICBwcm9vZlN0ZXBzID0gcmV2ZXJzZShwcm9vZlN0ZXBzKTsgLy8vXG5cbiAgY29uc3Qgc3VwcG9zaXRpb25zTWF0Y2ggPSBjb3JyZWxhdGUoc3VwcG9zaXRpb25zLCBwcm9vZlN0ZXBzLCAoc3VwcG9zaXRpb24sIHByb29mU3RlcCkgPT4ge1xuICAgIGNvbnN0IHN1cHBvc2l0aW9uTWF0Y2hlcyA9IG1hdGNoU3VwcG9zaXRpb24oc3VwcG9zaXRpb24sIHByb29mU3RlcCwgc3Vic3RpdHV0aW9ucywgbG9jYWxDb250ZXh0LCBzdGF0ZW1lbnRMb2NhbENvbnRleHQpO1xuXG4gICAgaWYgKHN1cHBvc2l0aW9uTWF0Y2hlcykge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gc3VwcG9zaXRpb25zTWF0Y2g7XG59XG5cbmZ1bmN0aW9uIG1hdGNoU3VwcG9zaXRpb24oc3VwcG9zaXRpb24sIHByb29mU3RlcCwgc3Vic3RpdHV0aW9ucywgbG9jYWxDb250ZXh0LCBzdGF0ZW1lbnRMb2NhbENvbnRleHQpIHtcbiAgbGV0IHN1cHBvc2l0aW9uTWF0Y2hlcyA9IGZhbHNlO1xuXG4gIGNvbnN0IHN0YXRlbWVudE5vZGUgPSBwcm9vZlN0ZXAuZ2V0U3RhdGVtZW50Tm9kZSgpO1xuXG4gIGlmIChzdGF0ZW1lbnROb2RlICE9PSBudWxsKSB7XG4gICAgY29uc3Qgc3RhdGVtZW50TWF0Y2hlcyA9IHN1cHBvc2l0aW9uLm1hdGNoU3RhdGVtZW50Tm9kZShzdGF0ZW1lbnROb2RlLCBzdWJzdGl0dXRpb25zLCBsb2NhbENvbnRleHQsIHN0YXRlbWVudExvY2FsQ29udGV4dCk7XG5cbiAgICBzdXBwb3NpdGlvbk1hdGNoZXMgPSBzdGF0ZW1lbnRNYXRjaGVzOyAgLy8vXG4gIH1cblxuICByZXR1cm4gc3VwcG9zaXRpb25NYXRjaGVzO1xufVxuXG5mdW5jdGlvbiBtYXRjaENvbnNlcXVlbnQoY29uc2VxdWVudCwgc3RhdGVtZW50Tm9kZSwgc3Vic3RpdHV0aW9ucywgbG9jYWxDb250ZXh0LCBzdGF0ZW1lbnRMb2NhbENvbnRleHQpIHtcbiAgY29uc3Qgbm9uVGVybWluYWxOb2RlTWF0Y2hlcyA9IGNvbnNlcXVlbnQubWF0Y2hTdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUsIHN1YnN0aXR1dGlvbnMsIGxvY2FsQ29udGV4dCwgc3RhdGVtZW50TG9jYWxDb250ZXh0KSxcbiAgICAgICAgY29uc2VxdWVudE1hdGNoZXMgPSBub25UZXJtaW5hbE5vZGVNYXRjaGVzOyAvLy9cblxuICByZXR1cm4gY29uc2VxdWVudE1hdGNoZXM7XG59XG4iXSwibmFtZXMiOlsiQXhpb21MZW1tYVRoZW9yZW1Db25qZWN0dXJlIiwibGFiZWxzIiwic3VwcG9zaXRpb25zIiwiY29uc2VxdWVudCIsImxvY2FsQ29udGV4dCIsImdldExhYmVscyIsImdldFN1cHBvc2l0aW9ucyIsImdldENvbnNlcXVlbnQiLCJnZXRMb2NhbENvbnRleHQiLCJtYXRjaFN0YXRlbWVudCIsInN0YXRlbWVudE5vZGUiLCJzdGF0ZW1lbnROYXRjaGVzIiwicHJvb2ZTdGVwcyIsImdldFByb29mU3RlcHMiLCJzdWJzdGl0dXRpb25zIiwic3VwcG9zaXRpb25zTWF0Y2giLCJtYXRjaFN1cHBvc2l0aW9ucyIsImNvbnNlcXVlbnRNYXRjaGVzIiwibWF0Y2hDb25zZXF1ZW50IiwibWF0Y2hNZXRhdmFyaWFibGVOb2RlIiwibWV0YXZhcmlhYmxlTm9kZSIsIm1ldGF2YXJpYWJsZU5vZGVNYXRjaGVzIiwic29tZSIsImxhYmVsIiwibGFiZWxNYXRjaGVzTWV0YXZhcmlhYmxlTm9kZSIsInRvSlNPTiIsInRva2VucyIsImxhYmVsc0pTT04iLCJtYXAiLCJsYWJlbEpTT04iLCJzdXBwb3NpdGlvbnNKU09OIiwic3VwcG9zaXRpb24iLCJzdXBwb3NpdGlvbkpTT04iLCJjb25zZXF1ZW50SlNPTiIsImxvY2FsQ29udGV4dEpTT04iLCJqc29uIiwiZnJvbUpTT05BbmRGaWxlQ29udGV4dCIsIkNsYXNzIiwiZmlsZUNvbnRleHQiLCJMYWJlbCIsIlN1cHBvc2l0aW9uIiwiQ29uc2VxdWVudCIsIkxvY2FsQ29udGV4dCIsImZyb21MYWJlbHNTdXBwb3NpdGlvbnNDb25zZXF1ZW50QW5kTG9jYWxDb250ZXh0Iiwic3RhdGVtZW50TG9jYWxDb250ZXh0IiwicmV2ZXJzZSIsImNvcnJlbGF0ZSIsInByb29mU3RlcCIsInN1cHBvc2l0aW9uTWF0Y2hlcyIsIm1hdGNoU3VwcG9zaXRpb24iLCJnZXRTdGF0ZW1lbnROb2RlIiwic3RhdGVtZW50TWF0Y2hlcyIsIm1hdGNoU3RhdGVtZW50Tm9kZSIsIm5vblRlcm1pbmFsTm9kZU1hdGNoZXMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBU3FCQTs7OzREQVBIO2lFQUNLO2tFQUNDOzREQUNDO3FCQUVVOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXBCLElBQUEsQUFBTUEsNENBQUQsQUFBTDthQUFNQSw0QkFDUEMsTUFBTSxFQUFFQyxZQUFZLEVBQUVDLFVBQVUsRUFBRUMsWUFBWTtnQ0FEdkNKO1FBRWpCLElBQUksQ0FBQ0MsTUFBTSxHQUFHQTtRQUNkLElBQUksQ0FBQ0MsWUFBWSxHQUFHQTtRQUNwQixJQUFJLENBQUNDLFVBQVUsR0FBR0E7UUFDbEIsSUFBSSxDQUFDQyxZQUFZLEdB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