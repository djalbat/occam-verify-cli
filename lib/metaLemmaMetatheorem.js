"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return MetaLemmaMetatheorem;
    }
});
var _label = /*#__PURE__*/ _interop_require_default(require("./label"));
var _metaConsequent = /*#__PURE__*/ _interop_require_default(require("./metaConsequent"));
var _metaSupposition = /*#__PURE__*/ _interop_require_default(require("./metaSupposition"));
var _metastatementForMetavariable = /*#__PURE__*/ _interop_require_default(require("./substitution/metastatementForMetavariable"));
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
var MetaLemmaMetatheorem = /*#__PURE__*/ function() {
    function MetaLemmaMetatheorem(labels, metaSuppositions, metaConsequent, substitutions, fileContext) {
        _class_call_check(this, MetaLemmaMetatheorem);
        this.labels = labels;
        this.metaSuppositions = metaSuppositions;
        this.metaConsequent = metaConsequent;
        this.substitutions = substitutions;
        this.fileContext = fileContext;
    }
    _create_class(MetaLemmaMetatheorem, [
        {
            key: "getLabels",
            value: function getLabels() {
                return this.labels;
            }
        },
        {
            key: "getMetaSuppositions",
            value: function getMetaSuppositions() {
                return this.metaSuppositions;
            }
        },
        {
            key: "getMetaConsequent",
            value: function getMetaConsequent() {
                return this.metaConsequent;
            }
        },
        {
            key: "getSubstitutions",
            value: function getSubstitutions() {
                return this.substitutions;
            }
        },
        {
            key: "getFileContext",
            value: function getFileContext() {
                return this.fileContext;
            }
        },
        {
            key: "matchMetastatement",
            value: function matchMetastatement(metastatementNode, localContext) {
                var metastatementNatches = false;
                var metaproofSteps = localContext.getProofSteps(), substitutions = [], metaSuppositionsMatch = matchMetaSuppositions(this.metaSuppositions, metaproofSteps, substitutions, this.fileContext, localContext);
                if (metaSuppositionsMatch) {
                    var metaConsequentMatches = matchMetaConsequent(this.metaConsequent, metastatementNode, substitutions, this.fileContext, localContext);
                    metastatementNatches = metaConsequentMatches; ///
                }
                return metastatementNatches;
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
                }), metaSuppositionsJSON = this.metaSuppositions.map(function(metaSupposition) {
                    var metaSuppositionJSON = metaSupposition.toJSON(tokens);
                    return metaSuppositionJSON;
                }), metaConsequentJSON = this.metaConsequent.toJSON(tokens), substitutionsJSON = this.substitutions.map(function(substitution) {
                    var substitutionJSON = substitution.toJSON();
                    return substitutionJSON;
                }), localContextJSON = this.fileContext.toJSON(tokens), labels = labelsJSON, metaSuppositions = metaSuppositionsJSON, metaConsequent = metaConsequentJSON, substitutions = substitutionsJSON, fileContext = localContextJSON, json = {
                    labels: labels,
                    metaSuppositions: metaSuppositions,
                    metaConsequent: metaConsequent,
                    substitutions: substitutions,
                    fileContext: fileContext
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
                var metaSuppositions = json.metaSuppositions, metaConsequent = json.metaConsequent, substitutions = json.substitutions;
                var metaSuppositionsJSON = metaSuppositions; ///
                metaSuppositions = metaSuppositionsJSON.map(function(metaSuppositionJSON) {
                    var _$json = metaSuppositionJSON, metaSupposition = _metaSupposition.default.fromJSONAndFileContext(_$json, fileContext);
                    return metaSupposition;
                });
                var metaConsequentJSON = metaConsequent; ///
                json = metaConsequentJSON; ///
                metaConsequent = _metaConsequent.default.fromJSONAndFileContext(json, fileContext);
                var substitutionsJSON = substitutions; ///
                substitutions = substitutionsJSON.map(function(substitutionJSON) {
                    var _$json = substitutionJSON, metastatementForMetavariableSubstitution = _metastatementForMetavariable.default.fromJSONAndFileContext(_$json, fileContext), substitution = metastatementForMetavariableSubstitution; ///
                    return substitution;
                });
                return new Class(labels, metaSuppositions, metaConsequent, substitutions, fileContext); ///
            }
        },
        {
            key: "fromLabelsMetaSuppositionsMetaConsequentSubstitutionsAndFileContext",
            value: function fromLabelsMetaSuppositionsMetaConsequentSubstitutionsAndFileContext(Class, labels, metaSuppositions, metaConsequent, substitutions, fileContext) {
                return new Class(labels, metaSuppositions, metaConsequent, substitutions, fileContext);
            }
        }
    ]);
    return MetaLemmaMetatheorem;
}();
function matchMetaSuppositions(metaSuppositions, metaproofSteps, substitutions, fileContext, localContext) {
    metaSuppositions = (0, _array.reverse)(metaSuppositions); ///
    metaproofSteps = (0, _array.reverse)(metaproofSteps); ///
    var metaSuppositionsMatch = (0, _array.correlate)(metaSuppositions, metaproofSteps, function(metaSupposition, metaproofStep) {
        var metaSuppositionMatches = matchMetaSupposition(metaSupposition, metaproofStep, substitutions, fileContext, localContext);
        if (metaSuppositionMatches) {
            return true;
        }
    });
    return metaSuppositionsMatch;
}
function matchMetaSupposition(metaSupposition, metaproofStep, substitutions, fileContext, localContext) {
    var matchesMetaSupposition = false;
    var metaSubproofNode = metaproofStep.getMetaSubproofNode(), metastatementNode = metaproofStep.getMetastatementNode();
    if (metaSubproofNode !== null) {
        var metaSuppositionMatchesMetaSubproofNode = metaSupposition.matchMetaSubproofNode(metaSubproofNode, substitutions, fileContext, localContext);
        matchesMetaSupposition - metaSuppositionMatchesMetaSubproofNode; ///
    }
    if (metastatementNode !== null) {
        var metaSuppositionMatchesMetastatementNode = metaSupposition.matchMetastatementNode(metastatementNode, substitutions, fileContext, localContext);
        matchesMetaSupposition - metaSuppositionMatchesMetastatementNode; ///
    }
    return matchesMetaSupposition;
}
function matchMetaConsequent(metaConsequent, metastatementNode, substitutions, fileContext, localContext) {
    var metaConsequentMatchesMetastatementNode = metaConsequent.matchMetastatementNode(metastatementNode, substitutions, fileContext, localContext), metaConsequentMatches = metaConsequentMatchesMetastatementNode; ///
    return metaConsequentMatches;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9tZXRhTGVtbWFNZXRhdGhlb3JlbS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IExhYmVsIGZyb20gXCIuL2xhYmVsXCI7XG5pbXBvcnQgTWV0YUNvbnNlcXVlbnQgZnJvbSBcIi4vbWV0YUNvbnNlcXVlbnRcIjtcbmltcG9ydCBNZXRhU3VwcG9zaXRpb24gZnJvbSBcIi4vbWV0YVN1cHBvc2l0aW9uXCI7XG5pbXBvcnQgTWV0YXN0YXRlbWVudEZvck1ldGF2YXJpYWJsZVN1YnN0aXR1dGlvbiBmcm9tIFwiLi9zdWJzdGl0dXRpb24vbWV0YXN0YXRlbWVudEZvck1ldGF2YXJpYWJsZVwiO1xuXG5pbXBvcnQgeyByZXZlcnNlLCBjb3JyZWxhdGUgfSBmcm9tIFwiLi91dGlsaXRpZXMvYXJyYXlcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWV0YUxlbW1hTWV0YXRoZW9yZW0ge1xuICBjb25zdHJ1Y3RvcihsYWJlbHMsIG1ldGFTdXBwb3NpdGlvbnMsIG1ldGFDb25zZXF1ZW50LCBzdWJzdGl0dXRpb25zLCBmaWxlQ29udGV4dCkge1xuICAgIHRoaXMubGFiZWxzID0gbGFiZWxzO1xuICAgIHRoaXMubWV0YVN1cHBvc2l0aW9ucyA9IG1ldGFTdXBwb3NpdGlvbnM7XG4gICAgdGhpcy5tZXRhQ29uc2VxdWVudCA9IG1ldGFDb25zZXF1ZW50O1xuICAgIHRoaXMuc3Vic3RpdHV0aW9ucyA9IHN1YnN0aXR1dGlvbnM7XG4gICAgdGhpcy5maWxlQ29udGV4dCA9IGZpbGVDb250ZXh0O1xuICB9XG5cbiAgZ2V0TGFiZWxzKCkge1xuICAgIHJldHVybiB0aGlzLmxhYmVscztcbiAgfVxuXG4gIGdldE1ldGFTdXBwb3NpdGlvbnMoKSB7XG4gICAgcmV0dXJuIHRoaXMubWV0YVN1cHBvc2l0aW9ucztcbiAgfVxuXG4gIGdldE1ldGFDb25zZXF1ZW50KCkge1xuICAgIHJldHVybiB0aGlzLm1ldGFDb25zZXF1ZW50O1xuICB9XG5cbiAgZ2V0U3Vic3RpdHV0aW9ucygpIHtcbiAgICByZXR1cm4gdGhpcy5zdWJzdGl0dXRpb25zO1xuICB9XG5cbiAgZ2V0RmlsZUNvbnRleHQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZmlsZUNvbnRleHQ7XG4gIH1cblxuICBtYXRjaE1ldGFzdGF0ZW1lbnQobWV0YXN0YXRlbWVudE5vZGUsIGxvY2FsQ29udGV4dCkge1xuICAgIGxldCBtZXRhc3RhdGVtZW50TmF0Y2hlcyA9IGZhbHNlO1xuXG4gICAgY29uc3QgbWV0YXByb29mU3RlcHMgPSBsb2NhbENvbnRleHQuZ2V0UHJvb2ZTdGVwcygpLFxuICAgICAgICAgIHN1YnN0aXR1dGlvbnMgPSBbXSxcbiAgICAgICAgICBtZXRhU3VwcG9zaXRpb25zTWF0Y2ggPSBtYXRjaE1ldGFTdXBwb3NpdGlvbnModGhpcy5tZXRhU3VwcG9zaXRpb25zLCBtZXRhcHJvb2ZTdGVwcywgc3Vic3RpdHV0aW9ucywgdGhpcy5maWxlQ29udGV4dCwgbG9jYWxDb250ZXh0KTtcblxuICAgIGlmIChtZXRhU3VwcG9zaXRpb25zTWF0Y2gpIHtcbiAgICAgIGNvbnN0IG1ldGFDb25zZXF1ZW50TWF0Y2hlcyA9IG1hdGNoTWV0YUNvbnNlcXVlbnQodGhpcy5tZXRhQ29uc2VxdWVudCwgbWV0YXN0YXRlbWVudE5vZGUsIHN1YnN0aXR1dGlvbnMsIHRoaXMuZmlsZUNvbnRleHQsIGxvY2FsQ29udGV4dCk7XG5cbiAgICAgIG1ldGFzdGF0ZW1lbnROYXRjaGVzID0gbWV0YUNvbnNlcXVlbnRNYXRjaGVzOyAgLy8vXG4gICAgfVxuXG4gICAgcmV0dXJuIG1ldGFzdGF0ZW1lbnROYXRjaGVzO1xuICB9XG5cbiAgbWF0Y2hNZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUpIHtcbiAgICBjb25zdCBtYXRjaGVzTWV0YXZhcmlhYmxlTm9kZSA9IHRoaXMubGFiZWxzLnNvbWUoKGxhYmVsKSA9PiB7XG4gICAgICBjb25zdCBsYWJlbE1hdGNoZXNNZXRhdmFyaWFibGVOb2RlID0gbGFiZWwubWF0Y2hNZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUpO1xuXG4gICAgICBpZiAobGFiZWxNYXRjaGVzTWV0YXZhcmlhYmxlTm9kZSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiBtYXRjaGVzTWV0YXZhcmlhYmxlTm9kZTtcbiAgfVxuXG4gIHRvSlNPTih0b2tlbnMpIHtcbiAgICBjb25zdCBsYWJlbHNKU09OID0gdGhpcy5sYWJlbHMubWFwKChsYWJlbCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgbGFiZWxKU09OID0gbGFiZWwudG9KU09OKHRva2Vucyk7XG5cbiAgICAgICAgICAgIHJldHVybiBsYWJlbEpTT047XG4gICAgICAgICAgfSksXG4gICAgICAgICAgbWV0YVN1cHBvc2l0aW9uc0pTT04gPSB0aGlzLm1ldGFTdXBwb3NpdGlvbnMubWFwKChtZXRhU3VwcG9zaXRpb24pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG1ldGFTdXBwb3NpdGlvbkpTT04gPSBtZXRhU3VwcG9zaXRpb24udG9KU09OKHRva2Vucyk7XG5cbiAgICAgICAgICAgIHJldHVybiBtZXRhU3VwcG9zaXRpb25KU09OO1xuICAgICAgICAgIH0pLFxuICAgICAgICAgIG1ldGFDb25zZXF1ZW50SlNPTiA9IHRoaXMubWV0YUNvbnNlcXVlbnQudG9KU09OKHRva2VucyksXG4gICAgICAgICAgc3Vic3RpdHV0aW9uc0pTT04gPSB0aGlzLnN1YnN0aXR1dGlvbnMubWFwKChzdWJzdGl0dXRpb24pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHN1YnN0aXR1dGlvbkpTT04gPSBzdWJzdGl0dXRpb24udG9KU09OKCk7XG5cbiAgICAgICAgICAgIHJldHVybiBzdWJzdGl0dXRpb25KU09OO1xuICAgICAgICAgIH0pLFxuICAgICAgICAgIGxvY2FsQ29udGV4dEpTT04gPSB0aGlzLmZpbGVDb250ZXh0LnRvSlNPTih0b2tlbnMpLFxuICAgICAgICAgIGxhYmVscyA9IGxhYmVsc0pTT04sICAvLy9cbiAgICAgICAgICBtZXRhU3VwcG9zaXRpb25zID0gbWV0YVN1cHBvc2l0aW9uc0pTT04sICAvLy9cbiAgICAgICAgICBtZXRhQ29uc2VxdWVudCA9IG1ldGFDb25zZXF1ZW50SlNPTiwgIC8vL1xuICAgICAgICAgIHN1YnN0aXR1dGlvbnMgPSBzdWJzdGl0dXRpb25zSlNPTiwgIC8vL1xuICAgICAgICAgIGZpbGVDb250ZXh0ID0gbG9jYWxDb250ZXh0SlNPTiwgIC8vL1xuICAgICAgICAgIGpzb24gPSB7XG4gICAgICAgICAgICBsYWJlbHMsXG4gICAgICAgICAgICBtZXRhU3VwcG9zaXRpb25zLFxuICAgICAgICAgICAgbWV0YUNvbnNlcXVlbnQsXG4gICAgICAgICAgICBzdWJzdGl0dXRpb25zLFxuICAgICAgICAgICAgZmlsZUNvbnRleHRcbiAgICAgICAgICB9O1xuXG4gICAgcmV0dXJuIGpzb247XG4gIH1cblxuICBzdGF0aWMgZnJvbUpTT05BbmRGaWxlQ29udGV4dChDbGFzcywganNvbiwgZmlsZUNvbnRleHQpIHtcbiAgICBsZXQgeyBsYWJlbHMgfSA9IGpzb247XG5cbiAgICBjb25zdCBsYWJlbHNKU09OID0gbGFiZWxzOyAgLy8vXG5cbiAgICBsYWJlbHMgPSBsYWJlbHNKU09OLm1hcCgobGFiZWxKU09OKSA9PiB7XG4gICAgICBjb25zdCBqc29uID0gbGFiZWxKU09OLCAvLy9cbiAgICAgICAgICAgIGxhYmVsID0gTGFiZWwuZnJvbUpTT05BbmRGaWxlQ29udGV4dChqc29uLCBmaWxlQ29udGV4dCk7XG5cbiAgICAgIHJldHVybiBsYWJlbDtcbiAgICB9KTtcblxuICAgIGxldCB7IG1ldGFTdXBwb3NpdGlvbnMsIG1ldGFDb25zZXF1ZW50LCBzdWJzdGl0dXRpb25zIH0gPSBqc29uO1xuXG4gICAgY29uc3QgbWV0YVN1cHBvc2l0aW9uc0pTT04gPSBtZXRhU3VwcG9zaXRpb25zOyAgLy8vXG5cbiAgICBtZXRhU3VwcG9zaXRpb25zID0gbWV0YVN1cHBvc2l0aW9uc0pTT04ubWFwKChtZXRhU3VwcG9zaXRpb25KU09OKSA9PiB7XG4gICAgICBjb25zdCBqc29uID0gbWV0YVN1cHBvc2l0aW9uSlNPTiwgLy8vXG4gICAgICAgICAgICBtZXRhU3VwcG9zaXRpb24gPSBNZXRhU3VwcG9zaXRpb24uZnJvbUpTT05BbmRGaWxlQ29udGV4dChqc29uLCBmaWxlQ29udGV4dCk7XG5cbiAgICAgIHJldHVybiBtZXRhU3VwcG9zaXRpb247XG4gICAgfSk7XG5cbiAgICBjb25zdCBtZXRhQ29uc2VxdWVudEpTT04gPSBtZXRhQ29uc2VxdWVudDsgIC8vL1xuXG4gICAganNvbiA9IG1ldGFDb25zZXF1ZW50SlNPTjsgIC8vL1xuXG4gICAgbWV0YUNvbnNlcXVlbnQgPSBNZXRhQ29uc2VxdWVudC5mcm9tSlNPTkFuZEZpbGVDb250ZXh0KGpzb24sIGZpbGVDb250ZXh0KTtcblxuICAgIGNvbnN0IHN1YnN0aXR1dGlvbnNKU09OID0gc3Vic3RpdHV0aW9uczsgIC8vL1xuXG4gICAgc3Vic3RpdHV0aW9ucyA9IHN1YnN0aXR1dGlvbnNKU09OLm1hcCgoc3Vic3RpdHV0aW9uSlNPTikgPT4ge1xuICAgICAgY29uc3QganNvbiA9IHN1YnN0aXR1dGlvbkpTT04sICAvLy9cbiAgICAgICAgICAgIG1ldGFzdGF0ZW1lbnRGb3JNZXRhdmFyaWFibGVTdWJzdGl0dXRpb24gPSBNZXRhc3RhdGVtZW50Rm9yTWV0YXZhcmlhYmxlU3Vic3RpdHV0aW9uLmZyb21KU09OQW5kRmlsZUNvbnRleHQoanNvbiwgZmlsZUNvbnRleHQpLFxuICAgICAgICAgICAgc3Vic3RpdHV0aW9uID0gbWV0YXN0YXRlbWVudEZvck1ldGF2YXJpYWJsZVN1YnN0aXR1dGlvbjsgIC8vL1xuXG4gICAgICByZXR1cm4gc3Vic3RpdHV0aW9uO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIG5ldyBDbGFzcyhsYWJlbHMsIG1ldGFTdXBwb3NpdGlvbnMsIG1ldGFDb25zZXF1ZW50LCBzdWJzdGl0dXRpb25zLCBmaWxlQ29udGV4dCk7ICAvLy9cbiAgfVxuXG4gIHN0YXRpYyBmcm9tTGFiZWxzTWV0YVN1cHBvc2l0aW9uc01ldGFDb25zZXF1ZW50U3Vic3RpdHV0aW9uc0FuZEZpbGVDb250ZXh0KENsYXNzLCBsYWJlbHMsIG1ldGFTdXBwb3NpdGlvbnMsIG1ldGFDb25zZXF1ZW50LCBzdWJzdGl0dXRpb25zLCBmaWxlQ29udGV4dCkgeyByZXR1cm4gbmV3IENsYXNzKGxhYmVscywgbWV0YVN1cHBvc2l0aW9ucywgbWV0YUNvbnNlcXVlbnQsIHN1YnN0aXR1dGlvbnMsIGZpbGVDb250ZXh0KTsgfVxufVxuXG5mdW5jdGlvbiBtYXRjaE1ldGFTdXBwb3NpdGlvbnMobWV0YVN1cHBvc2l0aW9ucywgbWV0YXByb29mU3RlcHMsIHN1YnN0aXR1dGlvbnMsIGZpbGVDb250ZXh0LCBsb2NhbENvbnRleHQpIHtcbiAgbWV0YVN1cHBvc2l0aW9ucyA9IHJldmVyc2UobWV0YVN1cHBvc2l0aW9ucyk7IC8vL1xuXG4gIG1ldGFwcm9vZlN0ZXBzID0gcmV2ZXJzZShtZXRhcHJvb2ZTdGVwcyk7IC8vL1xuXG4gIGNvbnN0IG1ldGFTdXBwb3NpdGlvbnNNYXRjaCA9IGNvcnJlbGF0ZShtZXRhU3VwcG9zaXRpb25zLCBtZXRhcHJvb2ZTdGVwcywgKG1ldGFTdXBwb3NpdGlvbiwgbWV0YXByb29mU3RlcCkgPT4ge1xuICAgIGNvbnN0IG1ldGFTdXBwb3NpdGlvbk1hdGNoZXMgPSBtYXRjaE1ldGFTdXBwb3NpdGlvbihtZXRhU3VwcG9zaXRpb24sIG1ldGFwcm9vZlN0ZXAsIHN1YnN0aXR1dGlvbnMsIGZpbGVDb250ZXh0LCBsb2NhbENvbnRleHQpO1xuXG4gICAgaWYgKG1ldGFTdXBwb3NpdGlvbk1hdGNoZXMpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIG1ldGFTdXBwb3NpdGlvbnNNYXRjaDtcbn1cblxuZnVuY3Rpb24gbWF0Y2hNZXRhU3VwcG9zaXRpb24obWV0YVN1cHBvc2l0aW9uLCBtZXRhcHJvb2ZTdGVwLCBzdWJzdGl0dXRpb25zLCBmaWxlQ29udGV4dCwgbG9jYWxDb250ZXh0KSB7XG4gIGxldCBtYXRjaGVzTWV0YVN1cHBvc2l0aW9uID0gZmFsc2U7XG5cbiAgY29uc3QgbWV0YVN1YnByb29mTm9kZSA9IG1ldGFwcm9vZlN0ZXAuZ2V0TWV0YVN1YnByb29mTm9kZSgpLFxuICAgICAgICBtZXRhc3RhdGVtZW50Tm9kZSA9IG1ldGFwcm9vZlN0ZXAuZ2V0TWV0YXN0YXRlbWVudE5vZGUoKTtcblxuICBpZiAobWV0YVN1YnByb29mTm9kZSAhPT0gbnVsbCkge1xuICAgIGNvbnN0IG1ldGFTdXBwb3NpdGlvbk1hdGNoZXNNZXRhU3VicHJvb2ZOb2RlID0gbWV0YVN1cHBvc2l0aW9uLm1hdGNoTWV0YVN1YnByb29mTm9kZShtZXRhU3VicHJvb2ZOb2RlLCBzdWJzdGl0dXRpb25zLCBmaWxlQ29udGV4dCwgbG9jYWxDb250ZXh0KTtcblxuICAgIG1hdGNoZXNNZXRhU3VwcG9zaXRpb24gLSBtZXRhU3VwcG9zaXRpb25NYXRjaGVzTWV0YVN1YnByb29mTm9kZTsgLy8vXG4gIH1cblxuICBpZiAobWV0YXN0YXRlbWVudE5vZGUgIT09IG51bGwpIHtcbiAgICBjb25zdCBtZXRhU3VwcG9zaXRpb25NYXRjaGVzTWV0YXN0YXRlbWVudE5vZGUgPSBtZXRhU3VwcG9zaXRpb24ubWF0Y2hNZXRhc3RhdGVtZW50Tm9kZShtZXRhc3RhdGVtZW50Tm9kZSwgc3Vic3RpdHV0aW9ucywgZmlsZUNvbnRleHQsIGxvY2FsQ29udGV4dCk7XG5cbiAgICBtYXRjaGVzTWV0YVN1cHBvc2l0aW9uIC0gbWV0YVN1cHBvc2l0aW9uTWF0Y2hlc01ldGFzdGF0ZW1lbnROb2RlOyAvLy9cbiAgfVxuXG4gIHJldHVybiBtYXRjaGVzTWV0YVN1cHBvc2l0aW9uO1xufVxuXG5mdW5jdGlvbiBtYXRjaE1ldGFDb25zZXF1ZW50KG1ldGFDb25zZXF1ZW50LCBtZXRhc3RhdGVtZW50Tm9kZSwgc3Vic3RpdHV0aW9ucywgZmlsZUNvbnRleHQsIGxvY2FsQ29udGV4dCkge1xuICBjb25zdCBtZXRhQ29uc2VxdWVudE1hdGNoZXNNZXRhc3RhdGVtZW50Tm9kZSA9IG1ldGFDb25zZXF1ZW50Lm1hdGNoTWV0YXN0YXRlbWVudE5vZGUobWV0YXN0YXRlbWVudE5vZGUsIHN1YnN0aXR1dGlvbnMsIGZpbGVDb250ZXh0LCBsb2NhbENvbnRleHQpLFxuICAgICAgICBtZXRhQ29uc2VxdWVudE1hdGNoZXMgPSBtZXRhQ29uc2VxdWVudE1hdGNoZXNNZXRhc3RhdGVtZW50Tm9kZTsgLy8vXG5cbiAgcmV0dXJuIG1ldGFDb25zZXF1ZW50TWF0Y2hlcztcbn1cbiJdLCJuYW1lcyI6WyJNZXRhTGVtbWFNZXRhdGhlb3JlbSIsImxhYmVscyIsIm1ldGFTdXBwb3NpdGlvbnMiLCJtZXRhQ29uc2VxdWVudCIsInN1YnN0aXR1dGlvbnMiLCJmaWxlQ29udGV4dCIsImdldExhYmVscyIsImdldE1ldGFTdXBwb3NpdGlvbnMiLCJnZXRNZXRhQ29uc2VxdWVudCIsImdldFN1YnN0aXR1dGlvbnMiLCJnZXRGaWxlQ29udGV4dCIsIm1hdGNoTWV0YXN0YXRlbWVudCIsIm1ldGFzdGF0ZW1lbnROb2RlIiwibG9jYWxDb250ZXh0IiwibWV0YXN0YXRlbWVudE5hdGNoZXMiLCJtZXRhcHJvb2ZTdGVwcyIsImdldFByb29mU3RlcHMiLCJtZXRhU3VwcG9zaXRpb25zTWF0Y2giLCJtYXRjaE1ldGFTdXBwb3NpdGlvbnMiLCJtZXRhQ29uc2VxdWVudE1hdGNoZXMiLCJtYXRjaE1ldGFDb25zZXF1ZW50IiwibWF0Y2hNZXRhdmFyaWFibGVOb2RlIiwibWV0YXZhcmlhYmxlTm9kZSIsIm1hdGNoZXNNZXRhdmFyaWFibGVOb2RlIiwic29tZSIsImxhYmVsIiwibGFiZWxNYXRjaGVzTWV0YXZhcmlhYmxlTm9kZSIsInRvSlNPTiIsInRva2VucyIsImxhYmVsc0pTT04iLCJtYXAiLCJsYWJlbEpTT04iLCJtZXRhU3VwcG9zaXRpb25zSlNPTiIsIm1ldGFTdXBwb3NpdGlvbiIsIm1ldGFTdXBwb3NpdGlvbkpTT04iLCJtZXRhQ29uc2VxdWVudEpTT04iLCJzdWJzdGl0dXRpb25zSlNPTiIsInN1YnN0aXR1dGlvbiIsInN1YnN0aXR1dGlvbkpTT04iLCJsb2NhbENvbnRleHRKU09OIiwianNvbiIsImZyb21KU09OQW5kRmlsZUNvbnRleHQiLCJDbGFzcyIsIkxhYmVsIiwiTWV0YVN1cHBvc2l0aW9uIiwiTWV0YUNvbnNlcXVlbnQiLCJtZXRhc3RhdGVtZW50Rm9yTWV0YXZhcmlhYmxlU3Vic3RpdHV0aW9uIiwiTWV0YXN0YXRlbWVudEZvck1ldGF2YXJpYWJsZVN1YnN0aXR1dGlvbiIsImZyb21MYWJlbHNNZXRhU3VwcG9zaXRpb25zTWV0YUNvbnNlcXVlbnRTdWJzdGl0dXRpb25zQW5kRmlsZUNvbnRleHQiLCJyZXZlcnNlIiwiY29ycmVsYXRlIiwibWV0YXByb29mU3RlcCIsIm1ldGFTdXBwb3NpdGlvbk1hdGNoZXMiLCJtYXRjaE1ldGFTdXBwb3NpdGlvbiIsIm1hdGNoZXNNZXRhU3VwcG9zaXRpb24iLCJtZXRhU3VicHJvb2ZOb2RlIiwiZ2V0TWV0YVN1YnByb29mTm9kZSIsImdldE1ldGFzdGF0ZW1lbnROb2RlIiwibWV0YVN1cHBvc2l0aW9uTWF0Y2hlc01ldGFTdWJwcm9vZk5vZGUiLCJtYXRjaE1ldGFTdWJwcm9vZk5vZGUiLCJtZXRhU3VwcG9zaXRpb25NYXRjaGVzTWV0YXN0YXRlbWVudE5vZGUiLCJtYXRjaE1ldGFzdGF0ZW1lbnROb2RlIiwibWV0YUNvbnNlcXVlbnRNYXRjaGVzTWV0YXN0YXRlbWVudE5vZGUiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBU3FCQTs7OzREQVBIO3FFQUNTO3NFQUNDO21GQUN5QjtxQkFFbEI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFcEIsSUFBQSxBQUFNQSxxQ0FBRCxBQUFMO2FBQU1BLHFCQUNQQyxNQUFNLEVBQUVDLGdCQUFnQixFQUFFQyxjQUFjLEVBQUVDLGFBQWEsRUFBRUMsV0FBVztnQ0FEN0RMO1FBRWpCLElBQUksQ0FBQ0MsTUFBTSxHQUFHQTtRQUNkLElBQUksQ0FBQ0MsZ0JBQWdCLEdBQUdBO1FBQ3hCLElBQUksQ0FBQ0MsY0FBYyxHQUFHQTtRQUN0QixJQUFJLENBQUNDLGFBQWEsR0FBR0E7UUFDckIsSUFBSSxDQUFDQyxXQUFXLEdBQUdBOztrQkFORkw7O1lBU25CTSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNMLE1BQU07WUFDcEI7OztZQUVBTSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNMLGdCQUFnQjtZQUM5Qjs7O1lBRUFNLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0wsY0FBYztZQUM1Qjs7O1lBRUFNLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0wsYUFBYTtZQUMzQjs7O1lBRUFNLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0wsV0FBVztZQUN6Qjs7O1lBRUFNLEtBQUFBO21CQUFBQSxTQUFBQSxtQkFBbUJDLGlCQUFpQixFQUFFQyxZQUFZO2dCQUNoRCxJQUFJQyx1QkFBdUI7Z0JBRTNCLElBQU1DLGlCQUFpQkYsYUFBYUcsYUFBYSxJQUMzQ1osZ0JBQWdCLEVBQUUsRUFDbEJhLHdCQUF3QkMsc0JBQXNCLElBQUksQ0FBQ2hCLGdCQUFnQixFQUFFYSxnQkFBZ0JYLGVBQWUsSUFBSSxDQUFDQyxXQUFXLEVBQUVRO2dCQUU1SCxJQUFJSSx1QkFBdUI7b0JBQ3pCLElBQU1FLHdCQUF3QkMsb0JBQW9CLElBQUksQ0FBQ2pCLGNBQWMsRUFBRVMsbUJBQW1CUixlQUFlLElBQUksQ0FBQ0MsV0FBVyxFQUFFUTtvQkFFM0hDLHVCQUF1QkssdUJBQXdCLEdBQUc7Z0JBQ3BEO2dCQUVBLE9BQU9MO1lBQ1Q7OztZQUVBTyxLQUFBQTttQkFBQUEsU0FBQUEsc0JBQXNCQyxnQkFBZ0I7Z0JBQ3BDLElBQU1DLDBCQUEwQixJQUFJLENBQUN0QixNQUFNLENBQUN1QixJQUFJLENBQUMsU0FBQ0M7b0JBQ2hELElBQU1DLCtCQUErQkQsTUFBTUoscUJBQXFCLENBQUNDO29CQUVqRSxJQUFJSSw4QkFBOEI7d0JBQ2hDLE9BQU87b0JBQ1Q7Z0JBQ0Y7Z0JBRUEsT0FBT0g7WUFDVDs7O1lBRUFJLEtBQUFBO21CQUFBQSxTQUFBQSxPQUFPQyxNQUFNO2dCQUNYLElBQU1DLGFBQWEsSUFBSSxDQUFDNUIsTUFBTSxDQUFDNkIsR0FBRyxDQUFDLFNBQUNMO29CQUM1QixJQUFNTSxZQUFZTixNQUFNRSxNQUFNLENBQUNDO29CQUUvQixPQUFPRztnQkFDVCxJQUNBQyx1QkFBdUIsSUFBSSxDQUFDOUIsZ0JBQWdCLENBQUM0QixHQUFHLENBQUMsU0FBQ0c7b0JBQ2hELElBQU1DLHNCQUFzQkQsZ0JBQWdCTixNQUFNLENBQUNDO29CQUVuRCxPQUFPTTtnQkFDVCxJQUNBQyxxQkFBcUIsSUFBSSxDQUFDaEMsY0FBYyxDQUFDd0IsTUFBTSxDQUFDQyxTQUNoRFEsb0JBQW9CLElBQUksQ0FBQ2hDLGFBQWEsQ0FBQzBCLEdBQUcsQ0FBQyxTQUFDTztvQkFDMUMsSUFBTUMsbUJBQW1CRCxhQUFhVixNQUFNO29CQUU1QyxPQUFPVztnQkFDVCxJQUNBQyxtQkFBbUIsSUFBSSxDQUFDbEMsV0FBVyxDQUFDc0IsTUFBTSxDQUFDQyxTQUMzQzNCLFNBQVM0QixZQUNUM0IsbUJBQW1COEIsc0JBQ25CN0IsaUJBQWlCZ0Msb0JBQ2pCL0IsZ0JBQWdCZ0MsbUJBQ2hCL0IsY0FBY2tDLGtCQUNkQyxPQUFPO29CQUNMdkMsUUFBQUE7b0JBQ0FDLGtCQUFBQTtvQkFDQUMsZ0JBQUFBO29CQUNBQyxlQUFBQTtvQkFDQUMsYUFBQUE7Z0JBQ0Y7Z0JBRU4sT0FBT21DO1lBQ1Q7Ozs7WUFFT0MsS0FBQUE7bUJBQVAsU0FBT0EsdUJBQXVCQyxLQUFLLEVBQUVGLElBQUksRUFBRW5DLFdBQVc7Z0JBQ3BELElBQUksQUFBRUosU0FBV3VDLEtBQVh2QztnQkFFTixJQUFNNEIsYUFBYTVCLFFBQVMsR0FBRztnQkFFL0JBLFNBQVM0QixXQUFXQyxHQUFHLENBQUMsU0FBQ0M7b0JBQ3ZCLElBQU1TLFNBQU9ULFdBQ1BOLFFBQVFrQixjQUFLLENBQUNGLHNCQUFzQixDQUFDRCxRQUFNbkM7b0JBRWpELE9BQU9vQjtnQkFDVDtnQkFFQSxJQUFNdkIsbUJBQW9Ec0MsS0FBcER0QyxrQkFBa0JDLGlCQUFrQ3FDLEtBQWxDckMsZ0JBQWdCQyxnQkFBa0JvQyxLQUFsQnBDO2dCQUV4QyxJQUFNNEIsdUJBQXVCOUIsa0JBQW1CLEdBQUc7Z0JBRW5EQSxtQkFBbUI4QixxQkFBcUJGLEdBQUcsQ0FBQyxTQUFDSTtvQkFDM0MsSUFBTU0sU0FBT04scUJBQ1BELGtCQUFrQlcsd0JBQWUsQ0FBQ0gsc0JBQXNCLENBQUNELFFBQU1uQztvQkFFckUsT0FBTzRCO2dCQUNUO2dCQUVBLElBQU1FLHFCQUFxQmhDLGdCQUFpQixHQUFHO2dCQUUvQ3FDLE9BQU9MLG9CQUFxQixHQUFHO2dCQUUvQmhDLGlCQUFpQjBDLHVCQUFjLENBQUNKLHNCQUFzQixDQUFDRCxNQUFNbkM7Z0JBRTdELElBQU0rQixvQkFBb0JoQyxlQUFnQixHQUFHO2dCQUU3Q0EsZ0JBQWdCZ0Msa0JBQWtCTixHQUFHLENBQUMsU0FBQ1E7b0JBQ3JDLElBQU1FLFNBQU9GLGtCQUNQUSwyQ0FBMkNDLHFDQUF3QyxDQUFDTixzQkFBc0IsQ0FBQ0QsUUFBTW5DLGNBQ2pIZ0MsZUFBZVMsMENBQTJDLEdBQUc7b0JBRW5FLE9BQU9UO2dCQUNUO2dCQUVBLE9BQU8sSUFBSUssTUFBTXpDLFFBQVFDLGtCQUFrQkMsZ0JBQWdCQyxlQUFlQyxjQUFlLEdBQUc7WUFDOUY7OztZQUVPMkMsS0FBQUE7bUJBQVAsU0FBT0Esb0VBQW9FTixLQUFLLEVBQUV6QyxNQUFNLEVBQUVDLGdCQUFnQixFQUFFQyxjQUFjLEVBQUVDLGFBQWEsRUFBRUMsV0FBVztnQkFBSSxPQUFPLElBQUlxQyxNQUFNekMsUUFBUUMsa0JBQWtCQyxnQkFBZ0JDLGVBQWVDO1lBQWM7OztXQXJJL05MOztBQXdJckIsU0FBU2tCLHNCQUFzQmhCLGdCQUFnQixFQUFFYSxjQUFjLEVBQUVYLGFBQWEsRUFBRUMsV0FBVyxFQUFFUSxZQUFZO0lBQ3ZHWCxtQkFBbUIrQyxJQUFBQSxjQUFPLEVBQUMvQyxtQkFBbUIsR0FBRztJQUVqRGEsaUJBQWlCa0MsSUFBQUEsY0FBTyxFQUFDbEMsaUJBQWlCLEdBQUc7SUFFN0MsSUFBTUUsd0JBQXdCaUMsSUFBQUEsZ0JBQVMsRUFBQ2hELGtCQUFrQmEsZ0JBQWdCLFNBQUNrQixpQkFBaUJrQjtRQUMxRixJQUFNQyx5QkFBeUJDLHFCQUFxQnBCLGlCQUFpQmtCLGVBQWUvQyxlQUFlQyxhQUFhUTtRQUVoSCxJQUFJdUMsd0JBQXdCO1lBQzFCLE9BQU87UUFDVDtJQUNGO0lBRUEsT0FBT25DO0FBQ1Q7QUFFQSxTQUFTb0MscUJBQXFCcEIsZUFBZSxFQUFFa0IsYUFBYSxFQUFFL0MsYUFBYSxFQUFFQyxXQUFXLEVBQUVRLFlBQVk7SUFDcEcsSUFBSXlDLHlCQUF5QjtJQUU3QixJQUFNQyxtQkFBbUJKLGNBQWNLLG1CQUFtQixJQUNwRDVDLG9CQUFvQnVDLGNBQWNNLG9CQUFvQjtJQUU1RCxJQUFJRixxQkFBcUIsTUFBTTtRQUM3QixJQUFNRyx5Q0FBeUN6QixnQkFBZ0IwQixxQkFBcUIsQ0FBQ0osa0JBQWtCbkQsZUFBZUMsYUFBYVE7UUFFbkl5Qyx5QkFBeUJJLHdDQUF3QyxHQUFHO0lBQ3RFO0lBRUEsSUFBSTlDLHNCQUFzQixNQUFNO1FBQzlCLElBQU1nRCwwQ0FBMEMzQixnQkFBZ0I0QixzQkFBc0IsQ0FBQ2pELG1CQUFtQlIsZUFBZUMsYUFBYVE7UUFFdEl5Qyx5QkFBeUJNLHlDQUF5QyxHQUFHO0lBQ3ZFO0lBRUEsT0FBT047QUFDVDtBQUVBLFNBQVNsQyxvQkFBb0JqQixjQUFjLEVBQUVTLGlCQUFpQixFQUFFUixhQUFhLEVBQUVDLFdBQVcsRUFBRVEsWUFBWTtJQUN0RyxJQUFNaUQseUNBQXlDM0QsZUFBZTBELHNCQUFzQixDQUFDakQsbUJBQW1CUixlQUFlQyxhQUFhUSxlQUM5SE0sd0JBQXdCMkMsd0NBQXdDLEdBQUc7SUFFekUsT0FBTzNDO0FBQ1QifQ==