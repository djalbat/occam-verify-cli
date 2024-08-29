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
            value: function matchMetastatement(metastatementNode, localMetaContext) {
                var _this = this;
                var metastatementNatches;
                var metaSuppositionsLength = this.metaSuppositions.length;
                if (metaSuppositionsLength === 0) {
                    var substitutions = [], metaConsequentMatches = matchMetaConsequent(this.metaConsequent, metastatementNode, substitutions, this.fileContext, localMetaContext);
                    metastatementNatches = metaConsequentMatches; ///
                } else {
                    var metaproofSteps = localMetaContext.getProofSteps();
                    metastatementNatches = (0, _array.someSubArray)(metaproofSteps, metaSuppositionsLength, function(metaproofSteps) {
                        var metaSuppositionsMatchMetaConsequent = false;
                        var substitutions = [], metaSuppositionsMatch = matchMetaSuppositions(_this.metaSuppositions, metaproofSteps, substitutions, _this.fileContext, localMetaContext);
                        if (metaSuppositionsMatch) {
                            var metaConsequentMatches = matchMetaConsequent(_this.metaConsequent, metastatementNode, substitutions, _this.fileContext, localMetaContext);
                            metaSuppositionsMatchMetaConsequent = metaConsequentMatches; ///
                        }
                        if (metaSuppositionsMatchMetaConsequent) {
                            return true;
                        }
                    });
                }
                return metastatementNatches;
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
function matchMetaSupposition(metaSupposition, metaproofSteps, substitutions, fileContext, localMetaContext) {
    var metaproofStep = (0, _array.extract)(metaproofSteps, function(metaproofStep) {
        var metaSubproofNode = metaproofStep.getMetaSubproofNode(), metastatementNode = metaproofStep.getMetastatementNode();
        if (metaSubproofNode !== null) {
            var metaSubProofMatches = metaSupposition.matchMetaSubproofNode(metaSubproofNode, substitutions, fileContext, localMetaContext);
            if (metaSubProofMatches) {
                return true;
            }
        }
        if (metastatementNode !== null) {
            var metastatementMatches = metaSupposition.matchMetastatementNode(metastatementNode, substitutions, fileContext, localMetaContext);
            if (metastatementMatches) {
                return true;
            }
        }
    }) || null;
    var metaSuppositionMatches = metaproofStep !== null;
    return metaSuppositionMatches;
}
function matchMetaSuppositions(metaSuppositions, metaproofSteps, substitutions, fileContext, localMetaContext) {
    var metaSuppositionsMatch = metaSuppositions.every(function(metaSupposition) {
        var metaSuppositionMatches = matchMetaSupposition(metaSupposition, metaproofSteps, substitutions, fileContext, localMetaContext);
        if (metaSuppositionMatches) {
            return true;
        }
    });
    return metaSuppositionsMatch;
}
function matchMetaConsequent(metaConsequent, metastatementNode, substitutions, fileContext, localMetaContext) {
    var nonTerminalNodeMatches = metaConsequent.matchMetastatementNode(metastatementNode, substitutions, fileContext, localMetaContext), metaConsequentMatches = nonTerminalNodeMatches; ///
    return metaConsequentMatches;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9tZXRhTGVtbWFNZXRhdGhlb3JlbS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IExhYmVsIGZyb20gXCIuL2xhYmVsXCI7XG5pbXBvcnQgTWV0YUNvbnNlcXVlbnQgZnJvbSBcIi4vbWV0YUNvbnNlcXVlbnRcIjtcbmltcG9ydCBNZXRhU3VwcG9zaXRpb24gZnJvbSBcIi4vbWV0YVN1cHBvc2l0aW9uXCI7XG5pbXBvcnQgTWV0YXN0YXRlbWVudEZvck1ldGF2YXJpYWJsZVN1YnN0aXR1dGlvbiBmcm9tIFwiLi9zdWJzdGl0dXRpb24vbWV0YXN0YXRlbWVudEZvck1ldGF2YXJpYWJsZVwiO1xuXG5pbXBvcnQgeyBleHRyYWN0IH0gZnJvbSBcIi4vdXRpbGl0aWVzL2FycmF5XCI7XG5pbXBvcnQgeyBzb21lU3ViQXJyYXkgfSBmcm9tIFwiLi91dGlsaXRpZXMvYXJyYXlcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWV0YUxlbW1hTWV0YXRoZW9yZW0ge1xuICBjb25zdHJ1Y3RvcihsYWJlbHMsIG1ldGFTdXBwb3NpdGlvbnMsIG1ldGFDb25zZXF1ZW50LCBzdWJzdGl0dXRpb25zLCBmaWxlQ29udGV4dCkge1xuICAgIHRoaXMubGFiZWxzID0gbGFiZWxzO1xuICAgIHRoaXMubWV0YVN1cHBvc2l0aW9ucyA9IG1ldGFTdXBwb3NpdGlvbnM7XG4gICAgdGhpcy5tZXRhQ29uc2VxdWVudCA9IG1ldGFDb25zZXF1ZW50O1xuICAgIHRoaXMuc3Vic3RpdHV0aW9ucyA9IHN1YnN0aXR1dGlvbnM7XG4gICAgdGhpcy5maWxlQ29udGV4dCA9IGZpbGVDb250ZXh0O1xuICB9XG5cbiAgZ2V0TGFiZWxzKCkge1xuICAgIHJldHVybiB0aGlzLmxhYmVscztcbiAgfVxuXG4gIGdldE1ldGFTdXBwb3NpdGlvbnMoKSB7XG4gICAgcmV0dXJuIHRoaXMubWV0YVN1cHBvc2l0aW9ucztcbiAgfVxuXG4gIGdldE1ldGFDb25zZXF1ZW50KCkge1xuICAgIHJldHVybiB0aGlzLm1ldGFDb25zZXF1ZW50O1xuICB9XG5cbiAgZ2V0U3Vic3RpdHV0aW9ucygpIHtcbiAgICByZXR1cm4gdGhpcy5zdWJzdGl0dXRpb25zO1xuICB9XG5cbiAgZ2V0RmlsZUNvbnRleHQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZmlsZUNvbnRleHQ7XG4gIH1cblxuICBtYXRjaE1ldGFzdGF0ZW1lbnQobWV0YXN0YXRlbWVudE5vZGUsIGxvY2FsTWV0YUNvbnRleHQpIHtcbiAgICBsZXQgbWV0YXN0YXRlbWVudE5hdGNoZXM7XG5cbiAgICBjb25zdCBtZXRhU3VwcG9zaXRpb25zTGVuZ3RoID0gdGhpcy5tZXRhU3VwcG9zaXRpb25zLmxlbmd0aDtcblxuICAgIGlmIChtZXRhU3VwcG9zaXRpb25zTGVuZ3RoID09PSAwKSB7XG4gICAgICBjb25zdCBzdWJzdGl0dXRpb25zID0gW10sXG4gICAgICAgICAgICBtZXRhQ29uc2VxdWVudE1hdGNoZXMgPSBtYXRjaE1ldGFDb25zZXF1ZW50KHRoaXMubWV0YUNvbnNlcXVlbnQsIG1ldGFzdGF0ZW1lbnROb2RlLCBzdWJzdGl0dXRpb25zLCB0aGlzLmZpbGVDb250ZXh0LCBsb2NhbE1ldGFDb250ZXh0KTtcblxuICAgICAgbWV0YXN0YXRlbWVudE5hdGNoZXMgPSBtZXRhQ29uc2VxdWVudE1hdGNoZXM7IC8vL1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBtZXRhcHJvb2ZTdGVwcyA9IGxvY2FsTWV0YUNvbnRleHQuZ2V0UHJvb2ZTdGVwcygpO1xuXG4gICAgICBtZXRhc3RhdGVtZW50TmF0Y2hlcyA9IHNvbWVTdWJBcnJheShtZXRhcHJvb2ZTdGVwcywgbWV0YVN1cHBvc2l0aW9uc0xlbmd0aCwgKG1ldGFwcm9vZlN0ZXBzKSA9PiB7XG4gICAgICAgIGxldCBtZXRhU3VwcG9zaXRpb25zTWF0Y2hNZXRhQ29uc2VxdWVudCA9IGZhbHNlO1xuXG4gICAgICAgIGNvbnN0IHN1YnN0aXR1dGlvbnMgPSBbXSxcbiAgICAgICAgICAgICAgbWV0YVN1cHBvc2l0aW9uc01hdGNoID0gbWF0Y2hNZXRhU3VwcG9zaXRpb25zKHRoaXMubWV0YVN1cHBvc2l0aW9ucywgbWV0YXByb29mU3RlcHMsIHN1YnN0aXR1dGlvbnMsIHRoaXMuZmlsZUNvbnRleHQsIGxvY2FsTWV0YUNvbnRleHQpO1xuXG4gICAgICAgIGlmIChtZXRhU3VwcG9zaXRpb25zTWF0Y2gpIHtcbiAgICAgICAgICBjb25zdCBtZXRhQ29uc2VxdWVudE1hdGNoZXMgPSBtYXRjaE1ldGFDb25zZXF1ZW50KHRoaXMubWV0YUNvbnNlcXVlbnQsIG1ldGFzdGF0ZW1lbnROb2RlLCBzdWJzdGl0dXRpb25zLCB0aGlzLmZpbGVDb250ZXh0LCBsb2NhbE1ldGFDb250ZXh0KTtcblxuICAgICAgICAgIG1ldGFTdXBwb3NpdGlvbnNNYXRjaE1ldGFDb25zZXF1ZW50ID0gbWV0YUNvbnNlcXVlbnRNYXRjaGVzOyAgLy8vXG4gICAgICAgIH1cblxuICAgICAgICBpZiAobWV0YVN1cHBvc2l0aW9uc01hdGNoTWV0YUNvbnNlcXVlbnQpIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1ldGFzdGF0ZW1lbnROYXRjaGVzO1xuICB9XG5cbiAgbWF0Y2hNZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUpIHtcbiAgICBjb25zdCBtZXRhdmFyaWFibGVOb2RlTWF0Y2hlcyA9IHRoaXMubGFiZWxzLnNvbWUoKGxhYmVsKSA9PiB7XG4gICAgICBjb25zdCBsYWJlbE1hdGNoZXNNZXRhdmFyaWFibGVOb2RlID0gbGFiZWwubWF0Y2hNZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUpO1xuXG4gICAgICBpZiAobGFiZWxNYXRjaGVzTWV0YXZhcmlhYmxlTm9kZSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiBtZXRhdmFyaWFibGVOb2RlTWF0Y2hlcztcbiAgfVxuXG4gIHRvSlNPTih0b2tlbnMpIHtcbiAgICBjb25zdCBsYWJlbHNKU09OID0gdGhpcy5sYWJlbHMubWFwKChsYWJlbCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgbGFiZWxKU09OID0gbGFiZWwudG9KU09OKHRva2Vucyk7XG5cbiAgICAgICAgICAgIHJldHVybiBsYWJlbEpTT047XG4gICAgICAgICAgfSksXG4gICAgICAgICAgbWV0YVN1cHBvc2l0aW9uc0pTT04gPSB0aGlzLm1ldGFTdXBwb3NpdGlvbnMubWFwKChtZXRhU3VwcG9zaXRpb24pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG1ldGFTdXBwb3NpdGlvbkpTT04gPSBtZXRhU3VwcG9zaXRpb24udG9KU09OKHRva2Vucyk7XG5cbiAgICAgICAgICAgIHJldHVybiBtZXRhU3VwcG9zaXRpb25KU09OO1xuICAgICAgICAgIH0pLFxuICAgICAgICAgIG1ldGFDb25zZXF1ZW50SlNPTiA9IHRoaXMubWV0YUNvbnNlcXVlbnQudG9KU09OKHRva2VucyksXG4gICAgICAgICAgc3Vic3RpdHV0aW9uc0pTT04gPSB0aGlzLnN1YnN0aXR1dGlvbnMubWFwKChzdWJzdGl0dXRpb24pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHN1YnN0aXR1dGlvbkpTT04gPSBzdWJzdGl0dXRpb24udG9KU09OKCk7XG5cbiAgICAgICAgICAgIHJldHVybiBzdWJzdGl0dXRpb25KU09OO1xuICAgICAgICAgIH0pLFxuICAgICAgICAgIGxvY2FsQ29udGV4dEpTT04gPSB0aGlzLmZpbGVDb250ZXh0LnRvSlNPTih0b2tlbnMpLFxuICAgICAgICAgIGxhYmVscyA9IGxhYmVsc0pTT04sICAvLy9cbiAgICAgICAgICBtZXRhU3VwcG9zaXRpb25zID0gbWV0YVN1cHBvc2l0aW9uc0pTT04sICAvLy9cbiAgICAgICAgICBtZXRhQ29uc2VxdWVudCA9IG1ldGFDb25zZXF1ZW50SlNPTiwgIC8vL1xuICAgICAgICAgIHN1YnN0aXR1dGlvbnMgPSBzdWJzdGl0dXRpb25zSlNPTiwgIC8vL1xuICAgICAgICAgIGZpbGVDb250ZXh0ID0gbG9jYWxDb250ZXh0SlNPTiwgIC8vL1xuICAgICAgICAgIGpzb24gPSB7XG4gICAgICAgICAgICBsYWJlbHMsXG4gICAgICAgICAgICBtZXRhU3VwcG9zaXRpb25zLFxuICAgICAgICAgICAgbWV0YUNvbnNlcXVlbnQsXG4gICAgICAgICAgICBzdWJzdGl0dXRpb25zLFxuICAgICAgICAgICAgZmlsZUNvbnRleHRcbiAgICAgICAgICB9O1xuXG4gICAgcmV0dXJuIGpzb247XG4gIH1cblxuICBzdGF0aWMgZnJvbUpTT05BbmRGaWxlQ29udGV4dChDbGFzcywganNvbiwgZmlsZUNvbnRleHQpIHtcbiAgICBsZXQgeyBsYWJlbHMgfSA9IGpzb247XG5cbiAgICBjb25zdCBsYWJlbHNKU09OID0gbGFiZWxzOyAgLy8vXG5cbiAgICBsYWJlbHMgPSBsYWJlbHNKU09OLm1hcCgobGFiZWxKU09OKSA9PiB7XG4gICAgICBjb25zdCBqc29uID0gbGFiZWxKU09OLCAvLy9cbiAgICAgICAgICAgIGxhYmVsID0gTGFiZWwuZnJvbUpTT05BbmRGaWxlQ29udGV4dChqc29uLCBmaWxlQ29udGV4dCk7XG5cbiAgICAgIHJldHVybiBsYWJlbDtcbiAgICB9KTtcblxuICAgIGxldCB7IG1ldGFTdXBwb3NpdGlvbnMsIG1ldGFDb25zZXF1ZW50LCBzdWJzdGl0dXRpb25zIH0gPSBqc29uO1xuXG4gICAgY29uc3QgbWV0YVN1cHBvc2l0aW9uc0pTT04gPSBtZXRhU3VwcG9zaXRpb25zOyAgLy8vXG5cbiAgICBtZXRhU3VwcG9zaXRpb25zID0gbWV0YVN1cHBvc2l0aW9uc0pTT04ubWFwKChtZXRhU3VwcG9zaXRpb25KU09OKSA9PiB7XG4gICAgICBjb25zdCBqc29uID0gbWV0YVN1cHBvc2l0aW9uSlNPTiwgLy8vXG4gICAgICAgICAgICBtZXRhU3VwcG9zaXRpb24gPSBNZXRhU3VwcG9zaXRpb24uZnJvbUpTT05BbmRGaWxlQ29udGV4dChqc29uLCBmaWxlQ29udGV4dCk7XG5cbiAgICAgIHJldHVybiBtZXRhU3VwcG9zaXRpb247XG4gICAgfSk7XG5cbiAgICBjb25zdCBtZXRhQ29uc2VxdWVudEpTT04gPSBtZXRhQ29uc2VxdWVudDsgIC8vL1xuXG4gICAganNvbiA9IG1ldGFDb25zZXF1ZW50SlNPTjsgIC8vL1xuXG4gICAgbWV0YUNvbnNlcXVlbnQgPSBNZXRhQ29uc2VxdWVudC5mcm9tSlNPTkFuZEZpbGVDb250ZXh0KGpzb24sIGZpbGVDb250ZXh0KTtcblxuICAgIGNvbnN0IHN1YnN0aXR1dGlvbnNKU09OID0gc3Vic3RpdHV0aW9uczsgIC8vL1xuXG4gICAgc3Vic3RpdHV0aW9ucyA9IHN1YnN0aXR1dGlvbnNKU09OLm1hcCgoc3Vic3RpdHV0aW9uSlNPTikgPT4ge1xuICAgICAgY29uc3QganNvbiA9IHN1YnN0aXR1dGlvbkpTT04sICAvLy9cbiAgICAgICAgICAgIG1ldGFzdGF0ZW1lbnRGb3JNZXRhdmFyaWFibGVTdWJzdGl0dXRpb24gPSBNZXRhc3RhdGVtZW50Rm9yTWV0YXZhcmlhYmxlU3Vic3RpdHV0aW9uLmZyb21KU09OQW5kRmlsZUNvbnRleHQoanNvbiwgZmlsZUNvbnRleHQpLFxuICAgICAgICAgICAgc3Vic3RpdHV0aW9uID0gbWV0YXN0YXRlbWVudEZvck1ldGF2YXJpYWJsZVN1YnN0aXR1dGlvbjsgIC8vL1xuXG4gICAgICByZXR1cm4gc3Vic3RpdHV0aW9uO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIG5ldyBDbGFzcyhsYWJlbHMsIG1ldGFTdXBwb3NpdGlvbnMsIG1ldGFDb25zZXF1ZW50LCBzdWJzdGl0dXRpb25zLCBmaWxlQ29udGV4dCk7ICAvLy9cbiAgfVxuXG4gIHN0YXRpYyBmcm9tTGFiZWxzTWV0YVN1cHBvc2l0aW9uc01ldGFDb25zZXF1ZW50U3Vic3RpdHV0aW9uc0FuZEZpbGVDb250ZXh0KENsYXNzLCBsYWJlbHMsIG1ldGFTdXBwb3NpdGlvbnMsIG1ldGFDb25zZXF1ZW50LCBzdWJzdGl0dXRpb25zLCBmaWxlQ29udGV4dCkgeyByZXR1cm4gbmV3IENsYXNzKGxhYmVscywgbWV0YVN1cHBvc2l0aW9ucywgbWV0YUNvbnNlcXVlbnQsIHN1YnN0aXR1dGlvbnMsIGZpbGVDb250ZXh0KTsgfVxufVxuXG5mdW5jdGlvbiBtYXRjaE1ldGFTdXBwb3NpdGlvbihtZXRhU3VwcG9zaXRpb24sIG1ldGFwcm9vZlN0ZXBzLCBzdWJzdGl0dXRpb25zLCBmaWxlQ29udGV4dCwgbG9jYWxNZXRhQ29udGV4dCkge1xuICBjb25zdCBtZXRhcHJvb2ZTdGVwID0gZXh0cmFjdChtZXRhcHJvb2ZTdGVwcywgKG1ldGFwcm9vZlN0ZXApID0+IHtcbiAgICBjb25zdCBtZXRhU3VicHJvb2ZOb2RlID0gbWV0YXByb29mU3RlcC5nZXRNZXRhU3VicHJvb2ZOb2RlKCksXG4gICAgICAgICAgbWV0YXN0YXRlbWVudE5vZGUgPSBtZXRhcHJvb2ZTdGVwLmdldE1ldGFzdGF0ZW1lbnROb2RlKCk7XG5cbiAgICBpZiAobWV0YVN1YnByb29mTm9kZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgbWV0YVN1YlByb29mTWF0Y2hlcyA9IG1ldGFTdXBwb3NpdGlvbi5tYXRjaE1ldGFTdWJwcm9vZk5vZGUobWV0YVN1YnByb29mTm9kZSwgc3Vic3RpdHV0aW9ucywgZmlsZUNvbnRleHQsIGxvY2FsTWV0YUNvbnRleHQpO1xuXG4gICAgICBpZiAobWV0YVN1YlByb29mTWF0Y2hlcykge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAobWV0YXN0YXRlbWVudE5vZGUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IG1ldGFzdGF0ZW1lbnRNYXRjaGVzID0gbWV0YVN1cHBvc2l0aW9uLm1hdGNoTWV0YXN0YXRlbWVudE5vZGUobWV0YXN0YXRlbWVudE5vZGUsIHN1YnN0aXR1dGlvbnMsIGZpbGVDb250ZXh0LCBsb2NhbE1ldGFDb250ZXh0KTtcblxuICAgICAgaWYgKG1ldGFzdGF0ZW1lbnRNYXRjaGVzKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH1cbiAgfSkgfHwgbnVsbDtcblxuICBjb25zdCBtZXRhU3VwcG9zaXRpb25NYXRjaGVzID0gKG1ldGFwcm9vZlN0ZXAgIT09IG51bGwpO1xuXG4gIHJldHVybiBtZXRhU3VwcG9zaXRpb25NYXRjaGVzO1xufVxuXG5mdW5jdGlvbiBtYXRjaE1ldGFTdXBwb3NpdGlvbnMobWV0YVN1cHBvc2l0aW9ucywgbWV0YXByb29mU3RlcHMsIHN1YnN0aXR1dGlvbnMsIGZpbGVDb250ZXh0LCBsb2NhbE1ldGFDb250ZXh0KSB7XG4gIGNvbnN0IG1ldGFTdXBwb3NpdGlvbnNNYXRjaCA9IG1ldGFTdXBwb3NpdGlvbnMuZXZlcnkoKG1ldGFTdXBwb3NpdGlvbikgPT4ge1xuICAgIGNvbnN0IG1ldGFTdXBwb3NpdGlvbk1hdGNoZXMgPSBtYXRjaE1ldGFTdXBwb3NpdGlvbihtZXRhU3VwcG9zaXRpb24sIG1ldGFwcm9vZlN0ZXBzLCBzdWJzdGl0dXRpb25zLCBmaWxlQ29udGV4dCwgbG9jYWxNZXRhQ29udGV4dCk7XG5cbiAgICBpZiAobWV0YVN1cHBvc2l0aW9uTWF0Y2hlcykge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gbWV0YVN1cHBvc2l0aW9uc01hdGNoO1xufVxuXG5mdW5jdGlvbiBtYXRjaE1ldGFDb25zZXF1ZW50KG1ldGFDb25zZXF1ZW50LCBtZXRhc3RhdGVtZW50Tm9kZSwgc3Vic3RpdHV0aW9ucywgZmlsZUNvbnRleHQsIGxvY2FsTWV0YUNvbnRleHQpIHtcbiAgY29uc3Qgbm9uVGVybWluYWxOb2RlTWF0Y2hlcyA9IG1ldGFDb25zZXF1ZW50Lm1hdGNoTWV0YXN0YXRlbWVudE5vZGUobWV0YXN0YXRlbWVudE5vZGUsIHN1YnN0aXR1dGlvbnMsIGZpbGVDb250ZXh0LCBsb2NhbE1ldGFDb250ZXh0KSxcbiAgICAgICAgbWV0YUNvbnNlcXVlbnRNYXRjaGVzID0gbm9uVGVybWluYWxOb2RlTWF0Y2hlczsgLy8vXG5cbiAgcmV0dXJuIG1ldGFDb25zZXF1ZW50TWF0Y2hlcztcbn1cbiJdLCJuYW1lcyI6WyJNZXRhTGVtbWFNZXRhdGhlb3JlbSIsImxhYmVscyIsIm1ldGFTdXBwb3NpdGlvbnMiLCJtZXRhQ29uc2VxdWVudCIsInN1YnN0aXR1dGlvbnMiLCJmaWxlQ29udGV4dCIsImdldExhYmVscyIsImdldE1ldGFTdXBwb3NpdGlvbnMiLCJnZXRNZXRhQ29uc2VxdWVudCIsImdldFN1YnN0aXR1dGlvbnMiLCJnZXRGaWxlQ29udGV4dCIsIm1hdGNoTWV0YXN0YXRlbWVudCIsIm1ldGFzdGF0ZW1lbnROb2RlIiwibG9jYWxNZXRhQ29udGV4dCIsIm1ldGFzdGF0ZW1lbnROYXRjaGVzIiwibWV0YVN1cHBvc2l0aW9uc0xlbmd0aCIsImxlbmd0aCIsIm1ldGFDb25zZXF1ZW50TWF0Y2hlcyIsIm1hdGNoTWV0YUNvbnNlcXVlbnQiLCJtZXRhcHJvb2ZTdGVwcyIsImdldFByb29mU3RlcHMiLCJzb21lU3ViQXJyYXkiLCJtZXRhU3VwcG9zaXRpb25zTWF0Y2hNZXRhQ29uc2VxdWVudCIsIm1ldGFTdXBwb3NpdGlvbnNNYXRjaCIsIm1hdGNoTWV0YVN1cHBvc2l0aW9ucyIsIm1hdGNoTWV0YXZhcmlhYmxlTm9kZSIsIm1ldGF2YXJpYWJsZU5vZGUiLCJtZXRhdmFyaWFibGVOb2RlTWF0Y2hlcyIsInNvbWUiLCJsYWJlbCIsImxhYmVsTWF0Y2hlc01ldGF2YXJpYWJsZU5vZGUiLCJ0b0pTT04iLCJ0b2tlbnMiLCJsYWJlbHNKU09OIiwibWFwIiwibGFiZWxKU09OIiwibWV0YVN1cHBvc2l0aW9uc0pTT04iLCJtZXRhU3VwcG9zaXRpb24iLCJtZXRhU3VwcG9zaXRpb25KU09OIiwibWV0YUNvbnNlcXVlbnRKU09OIiwic3Vic3RpdHV0aW9uc0pTT04iLCJzdWJzdGl0dXRpb24iLCJzdWJzdGl0dXRpb25KU09OIiwibG9jYWxDb250ZXh0SlNPTiIsImpzb24iLCJmcm9tSlNPTkFuZEZpbGVDb250ZXh0IiwiQ2xhc3MiLCJMYWJlbCIsIk1ldGFTdXBwb3NpdGlvbiIsIk1ldGFDb25zZXF1ZW50IiwibWV0YXN0YXRlbWVudEZvck1ldGF2YXJpYWJsZVN1YnN0aXR1dGlvbiIsIk1ldGFzdGF0ZW1lbnRGb3JNZXRhdmFyaWFibGVTdWJzdGl0dXRpb24iLCJmcm9tTGFiZWxzTWV0YVN1cHBvc2l0aW9uc01ldGFDb25zZXF1ZW50U3Vic3RpdHV0aW9uc0FuZEZpbGVDb250ZXh0IiwibWF0Y2hNZXRhU3VwcG9zaXRpb24iLCJtZXRhcHJvb2ZTdGVwIiwiZXh0cmFjdCIsIm1ldGFTdWJwcm9vZk5vZGUiLCJnZXRNZXRhU3VicHJvb2ZOb2RlIiwiZ2V0TWV0YXN0YXRlbWVudE5vZGUiLCJtZXRhU3ViUHJvb2ZNYXRjaGVzIiwibWF0Y2hNZXRhU3VicHJvb2ZOb2RlIiwibWV0YXN0YXRlbWVudE1hdGNoZXMiLCJtYXRjaE1ldGFzdGF0ZW1lbnROb2RlIiwibWV0YVN1cHBvc2l0aW9uTWF0Y2hlcyIsImV2ZXJ5Iiwibm9uVGVybWluYWxOb2RlTWF0Y2hlcyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFVcUJBOzs7NERBUkg7cUVBQ1M7c0VBQ0M7bUZBQ3lCO3FCQUU3Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUdULElBQUEsQUFBTUEscUNBQUQsQUFBTDthQUFNQSxxQkFDUEMsTUFBTSxFQUFFQyxnQkFBZ0IsRUFBRUMsY0FBYyxFQUFFQyxhQUFhLEVBQUVDLFdBQVc7Z0NBRDdETDtRQUVqQixJQUFJLENBQUNDLE1BQU0sR0FBR0E7UUFDZCxJQUFJLENBQUNDLGdCQUFnQixHQUFHQTtRQUN4QixJQUFJLENBQUNDLGNBQWMsR0FBR0E7UUFDdEIsSUFBSSxDQUFDQyxhQUFhLEdBQUdBO1FBQ3JCLElBQUksQ0FBQ0MsV0FBVyxHQUFHQTs7a0JBTkZMOztZQVNuQk0sS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDTCxNQUFNO1lBQ3BCOzs7WUFFQU0sS0FBQUE7bUJBQUFBLFNB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