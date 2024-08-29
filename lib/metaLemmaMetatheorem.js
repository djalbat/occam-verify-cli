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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9tZXRhTGVtbWFNZXRhdGhlb3JlbS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IExhYmVsIGZyb20gXCIuL2xhYmVsXCI7XG5pbXBvcnQgTWV0YUNvbnNlcXVlbnQgZnJvbSBcIi4vbWV0YUNvbnNlcXVlbnRcIjtcbmltcG9ydCBNZXRhU3VwcG9zaXRpb24gZnJvbSBcIi4vbWV0YVN1cHBvc2l0aW9uXCI7XG5pbXBvcnQgTWV0YXN0YXRlbWVudEZvck1ldGF2YXJpYWJsZVN1YnN0aXR1dGlvbiBmcm9tIFwiLi9zdWJzdGl0dXRpb24vbWV0YXN0YXRlbWVudEZvck1ldGF2YXJpYWJsZVwiO1xuXG5pbXBvcnQgeyBleHRyYWN0IH0gZnJvbSBcIi4vdXRpbGl0aWVzL2FycmF5XCI7XG5pbXBvcnQgeyBzb21lU3ViQXJyYXkgfSBmcm9tIFwiLi91dGlsaXRpZXMvYXJyYXlcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWV0YUxlbW1hTWV0YXRoZW9yZW0ge1xuICBjb25zdHJ1Y3RvcihsYWJlbHMsIG1ldGFTdXBwb3NpdGlvbnMsIG1ldGFDb25zZXF1ZW50LCBzdWJzdGl0dXRpb25zLCBmaWxlQ29udGV4dCkge1xuICAgIHRoaXMubGFiZWxzID0gbGFiZWxzO1xuICAgIHRoaXMubWV0YVN1cHBvc2l0aW9ucyA9IG1ldGFTdXBwb3NpdGlvbnM7XG4gICAgdGhpcy5tZXRhQ29uc2VxdWVudCA9IG1ldGFDb25zZXF1ZW50O1xuICAgIHRoaXMuc3Vic3RpdHV0aW9ucyA9IHN1YnN0aXR1dGlvbnM7XG4gICAgdGhpcy5maWxlQ29udGV4dCA9IGZpbGVDb250ZXh0O1xuICB9XG5cbiAgZ2V0TGFiZWxzKCkge1xuICAgIHJldHVybiB0aGlzLmxhYmVscztcbiAgfVxuXG4gIGdldE1ldGFTdXBwb3NpdGlvbnMoKSB7XG4gICAgcmV0dXJuIHRoaXMubWV0YVN1cHBvc2l0aW9ucztcbiAgfVxuXG4gIGdldE1ldGFDb25zZXF1ZW50KCkge1xuICAgIHJldHVybiB0aGlzLm1ldGFDb25zZXF1ZW50O1xuICB9XG5cbiAgZ2V0U3Vic3RpdHV0aW9ucygpIHtcbiAgICByZXR1cm4gdGhpcy5zdWJzdGl0dXRpb25zO1xuICB9XG5cbiAgZ2V0RmlsZUNvbnRleHQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZmlsZUNvbnRleHQ7XG4gIH1cblxuICBtYXRjaE1ldGFzdGF0ZW1lbnQobWV0YXN0YXRlbWVudE5vZGUsIGxvY2FsTWV0YUNvbnRleHQpIHtcbiAgICBsZXQgbWV0YXN0YXRlbWVudE5hdGNoZXM7XG5cbiAgICBjb25zdCBtZXRhU3VwcG9zaXRpb25zTGVuZ3RoID0gdGhpcy5tZXRhU3VwcG9zaXRpb25zLmxlbmd0aDtcblxuICAgIGlmIChtZXRhU3VwcG9zaXRpb25zTGVuZ3RoID09PSAwKSB7XG4gICAgICBjb25zdCBzdWJzdGl0dXRpb25zID0gW10sXG4gICAgICAgICAgICBtZXRhQ29uc2VxdWVudE1hdGNoZXMgPSBtYXRjaE1ldGFDb25zZXF1ZW50KHRoaXMubWV0YUNvbnNlcXVlbnQsIG1ldGFzdGF0ZW1lbnROb2RlLCBzdWJzdGl0dXRpb25zLCB0aGlzLmZpbGVDb250ZXh0LCBsb2NhbE1ldGFDb250ZXh0KTtcblxuICAgICAgbWV0YXN0YXRlbWVudE5hdGNoZXMgPSBtZXRhQ29uc2VxdWVudE1hdGNoZXM7IC8vL1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBtZXRhcHJvb2ZTdGVwcyA9IGxvY2FsTWV0YUNvbnRleHQuZ2V0UHJvb2ZTdGVwcygpO1xuXG4gICAgICBtZXRhc3RhdGVtZW50TmF0Y2hlcyA9IHNvbWVTdWJBcnJheShtZXRhcHJvb2ZTdGVwcywgbWV0YVN1cHBvc2l0aW9uc0xlbmd0aCwgKG1ldGFwcm9vZlN0ZXBzKSA9PiB7XG4gICAgICAgIGxldCBtZXRhU3VwcG9zaXRpb25zTWF0Y2hNZXRhQ29uc2VxdWVudCA9IGZhbHNlO1xuXG4gICAgICAgIGNvbnN0IHN1YnN0aXR1dGlvbnMgPSBbXSxcbiAgICAgICAgICAgICAgbWV0YVN1cHBvc2l0aW9uc01hdGNoID0gbWF0Y2hNZXRhU3VwcG9zaXRpb25zKHRoaXMubWV0YVN1cHBvc2l0aW9ucywgbWV0YXByb29mU3RlcHMsIHN1YnN0aXR1dGlvbnMsIHRoaXMuZmlsZUNvbnRleHQsIGxvY2FsTWV0YUNvbnRleHQpO1xuXG4gICAgICAgIGlmIChtZXRhU3VwcG9zaXRpb25zTWF0Y2gpIHtcbiAgICAgICAgICBjb25zdCBtZXRhQ29uc2VxdWVudE1hdGNoZXMgPSBtYXRjaE1ldGFDb25zZXF1ZW50KHRoaXMubWV0YUNvbnNlcXVlbnQsIG1ldGFzdGF0ZW1lbnROb2RlLCBzdWJzdGl0dXRpb25zLCB0aGlzLmZpbGVDb250ZXh0LCBsb2NhbE1ldGFDb250ZXh0KTtcblxuICAgICAgICAgIG1ldGFTdXBwb3NpdGlvbnNNYXRjaE1ldGFDb25zZXF1ZW50ID0gbWV0YUNvbnNlcXVlbnRNYXRjaGVzOyAgLy8vXG4gICAgICAgIH1cblxuICAgICAgICBpZiAobWV0YVN1cHBvc2l0aW9uc01hdGNoTWV0YUNvbnNlcXVlbnQpIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1ldGFzdGF0ZW1lbnROYXRjaGVzO1xuICB9XG5cbiAgbWF0Y2hNZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUpIHtcbiAgICBjb25zdCBtZXRhdmFyaWFibGVOb2RlTWF0Y2hlcyA9IHRoaXMubGFiZWxzLnNvbWUoKGxhYmVsKSA9PiB7XG4gICAgICBjb25zdCBsYWJlbE1hdGNoZXNNZXRhdmFyaWFibGVOb2RlID0gbGFiZWwubWF0Y2hNZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUpO1xuXG4gICAgICBpZiAobGFiZWxNYXRjaGVzTWV0YXZhcmlhYmxlTm9kZSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiBtZXRhdmFyaWFibGVOb2RlTWF0Y2hlcztcbiAgfVxuXG4gIHRvSlNPTih0b2tlbnMpIHtcbiAgICBjb25zdCBsYWJlbHNKU09OID0gdGhpcy5sYWJlbHMubWFwKChsYWJlbCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgbGFiZWxKU09OID0gbGFiZWwudG9KU09OKHRva2Vucyk7XG5cbiAgICAgICAgICAgIHJldHVybiBsYWJlbEpTT047XG4gICAgICAgICAgfSksXG4gICAgICAgICAgbWV0YVN1cHBvc2l0aW9uc0pTT04gPSB0aGlzLm1ldGFTdXBwb3NpdGlvbnMubWFwKChtZXRhU3VwcG9zaXRpb24pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG1ldGFTdXBwb3NpdGlvbkpTT04gPSBtZXRhU3VwcG9zaXRpb24udG9KU09OKHRva2Vucyk7XG5cbiAgICAgICAgICAgIHJldHVybiBtZXRhU3VwcG9zaXRpb25KU09OO1xuICAgICAgICAgIH0pLFxuICAgICAgICAgIG1ldGFDb25zZXF1ZW50SlNPTiA9IHRoaXMubWV0YUNvbnNlcXVlbnQudG9KU09OKHRva2VucyksXG4gICAgICAgICAgc3Vic3RpdHV0aW9uc0pTT04gPSB0aGlzLnN1YnN0aXR1dGlvbnMubWFwKChzdWJzdGl0dXRpb24pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHN1YnN0aXR1dGlvbkpTT04gPSBzdWJzdGl0dXRpb24udG9KU09OKCk7XG5cbiAgICAgICAgICAgIHJldHVybiBzdWJzdGl0dXRpb25KU09OO1xuICAgICAgICAgIH0pLFxuICAgICAgICAgIGxvY2FsQ29udGV4dEpTT04gPSB0aGlzLmZpbGVDb250ZXh0LnRvSlNPTih0b2tlbnMpLFxuICAgICAgICAgIGxhYmVscyA9IGxhYmVsc0pTT04sICAvLy9cbiAgICAgICAgICBtZXRhU3VwcG9zaXRpb25zID0gbWV0YVN1cHBvc2l0aW9uc0pTT04sICAvLy9cbiAgICAgICAgICBtZXRhQ29uc2VxdWVudCA9IG1ldGFDb25zZXF1ZW50SlNPTiwgIC8vL1xuICAgICAgICAgIHN1YnN0aXR1dGlvbnMgPSBzdWJzdGl0dXRpb25zSlNPTiwgIC8vL1xuICAgICAgICAgIGZpbGVDb250ZXh0ID0gbG9jYWxDb250ZXh0SlNPTiwgIC8vL1xuICAgICAgICAgIGpzb24gPSB7XG4gICAgICAgICAgICBsYWJlbHMsXG4gICAgICAgICAgICBtZXRhU3VwcG9zaXRpb25zLFxuICAgICAgICAgICAgbWV0YUNvbnNlcXVlbnQsXG4gICAgICAgICAgICBzdWJzdGl0dXRpb25zLFxuICAgICAgICAgICAgZmlsZUNvbnRleHRcbiAgICAgICAgICB9O1xuXG4gICAgcmV0dXJuIGpzb247XG4gIH1cblxuICBzdGF0aWMgZnJvbUpTT05BbmRGaWxlQ29udGV4dChDbGFzcywganNvbiwgZmlsZUNvbnRleHQpIHtcbiAgICBsZXQgeyBsYWJlbHMgfSA9IGpzb247XG5cbiAgICBjb25zdCBsYWJlbHNKU09OID0gbGFiZWxzOyAgLy8vXG5cbiAgICBsYWJlbHMgPSBsYWJlbHNKU09OLm1hcCgobGFiZWxKU09OKSA9PiB7XG4gICAgICBjb25zdCBqc29uID0gbGFiZWxKU09OLCAvLy9cbiAgICAgICAgICAgIGxhYmVsID0gTGFiZWwuZnJvbUpTT05BbmRGaWxlQ29udGV4dChqc29uLCBmaWxlQ29udGV4dCk7XG5cbiAgICAgIHJldHVybiBsYWJlbDtcbiAgICB9KTtcblxuICAgIGxldCB7IG1ldGFTdXBwb3NpdGlvbnMsIG1ldGFDb25zZXF1ZW50LCBzdWJzdGl0dXRpb25zIH0gPSBqc29uO1xuXG4gICAgY29uc3QgbWV0YVN1cHBvc2l0aW9uc0pTT04gPSBtZXRhU3VwcG9zaXRpb25zOyAgLy8vXG5cbiAgICBtZXRhU3VwcG9zaXRpb25zID0gbWV0YVN1cHBvc2l0aW9uc0pTT04ubWFwKChtZXRhU3VwcG9zaXRpb25KU09OKSA9PiB7XG4gICAgICBjb25zdCBqc29uID0gbWV0YVN1cHBvc2l0aW9uSlNPTiwgLy8vXG4gICAgICAgICAgICBtZXRhU3VwcG9zaXRpb24gPSBNZXRhU3VwcG9zaXRpb24uZnJvbUpTT05BbmRGaWxlQ29udGV4dChqc29uLCBmaWxlQ29udGV4dCk7XG5cbiAgICAgIHJldHVybiBtZXRhU3VwcG9zaXRpb247XG4gICAgfSk7XG5cbiAgICBjb25zdCBtZXRhQ29uc2VxdWVudEpTT04gPSBtZXRhQ29uc2VxdWVudDsgIC8vL1xuXG4gICAganNvbiA9IG1ldGFDb25zZXF1ZW50SlNPTjsgIC8vL1xuXG4gICAgbWV0YUNvbnNlcXVlbnQgPSBNZXRhQ29uc2VxdWVudC5mcm9tSlNPTkFuZEZpbGVDb250ZXh0KGpzb24sIGZpbGVDb250ZXh0KTtcblxuICAgIGNvbnN0IHN1YnN0aXR1dGlvbnNKU09OID0gc3Vic3RpdHV0aW9uczsgIC8vL1xuXG4gICAgc3Vic3RpdHV0aW9ucyA9IHN1YnN0aXR1dGlvbnNKU09OLm1hcCgoc3Vic3RpdHV0aW9uSlNPTikgPT4ge1xuICAgICAgY29uc3QganNvbiA9IHN1YnN0aXR1dGlvbkpTT04sICAvLy9cbiAgICAgICAgICAgIG1ldGFzdGF0ZW1lbnRGb3JNZXRhdmFyaWFibGVTdWJzdGl0dXRpb24gPSBNZXRhc3RhdGVtZW50Rm9yTWV0YXZhcmlhYmxlU3Vic3RpdHV0aW9uLmZyb21KU09OQW5kRmlsZUNvbnRleHQoanNvbiwgZmlsZUNvbnRleHQpLFxuICAgICAgICAgICAgc3Vic3RpdHV0aW9uID0gbWV0YXN0YXRlbWVudEZvck1ldGF2YXJpYWJsZVN1YnN0aXR1dGlvbjsgIC8vL1xuXG4gICAgICByZXR1cm4gc3Vic3RpdHV0aW9uO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIG5ldyBDbGFzcyhsYWJlbHMsIG1ldGFTdXBwb3NpdGlvbnMsIG1ldGFDb25zZXF1ZW50LCBzdWJzdGl0dXRpb25zLCBmaWxlQ29udGV4dCk7ICAvLy9cbiAgfVxuXG4gIHN0YXRpYyBmcm9tTGFiZWxzTWV0YVN1cHBvc2l0aW9uc01ldGFDb25zZXF1ZW50U3Vic3RpdHV0aW9uc0FuZEZpbGVDb250ZXh0KENsYXNzLCBsYWJlbHMsIG1ldGFTdXBwb3NpdGlvbnMsIG1ldGFDb25zZXF1ZW50LCBzdWJzdGl0dXRpb25zLCBmaWxlQ29udGV4dCkgeyByZXR1cm4gbmV3IENsYXNzKGxhYmVscywgbWV0YVN1cHBvc2l0aW9ucywgbWV0YUNvbnNlcXVlbnQsIHN1YnN0aXR1dGlvbnMsIGZpbGVDb250ZXh0KTsgfVxufVxuXG5mdW5jdGlvbiBtYXRjaE1ldGFTdXBwb3NpdGlvbihtZXRhU3VwcG9zaXRpb24sIG1ldGFwcm9vZlN0ZXBzLCBzdWJzdGl0dXRpb25zLCBmaWxlQ29udGV4dCwgbG9jYWxNZXRhQ29udGV4dCkge1xuICBjb25zdCBtZXRhcHJvb2ZTdGVwID0gZXh0cmFjdChtZXRhcHJvb2ZTdGVwcywgKG1ldGFwcm9vZlN0ZXApID0+IHtcbiAgICBjb25zdCBtZXRhU3VicHJvb2ZOb2RlID0gbWV0YXByb29mU3RlcC5nZXRNZXRhU3VicHJvb2ZOb2RlKCksXG4gICAgICAgICAgbWV0YXN0YXRlbWVudE5vZGUgPSBtZXRhcHJvb2ZTdGVwLmdldE1ldGFzdGF0ZW1lbnROb2RlKCk7XG5cbiAgICBpZiAobWV0YVN1YnByb29mTm9kZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgbWV0YVN1YlByb29mTWF0Y2hlcyA9IG1ldGFTdXBwb3NpdGlvbi5tYXRjaE1ldGFTdWJwcm9vZk5vZGUobWV0YVN1YnByb29mTm9kZSwgc3Vic3RpdHV0aW9ucywgZmlsZUNvbnRleHQsIGxvY2FsTWV0YUNvbnRleHQpO1xuXG4gICAgICBpZiAobWV0YVN1YlByb29mTWF0Y2hlcykgeyAgLy8vXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChtZXRhc3RhdGVtZW50Tm9kZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgbWV0YXN0YXRlbWVudE1hdGNoZXMgPSBtZXRhU3VwcG9zaXRpb24ubWF0Y2hNZXRhc3RhdGVtZW50Tm9kZShtZXRhc3RhdGVtZW50Tm9kZSwgc3Vic3RpdHV0aW9ucywgZmlsZUNvbnRleHQsIGxvY2FsTWV0YUNvbnRleHQpO1xuXG4gICAgICBpZiAobWV0YXN0YXRlbWVudE1hdGNoZXMpIHsgIC8vL1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG4gIH0pIHx8IG51bGw7XG5cbiAgY29uc3QgbWV0YVN1cHBvc2l0aW9uTWF0Y2hlcyA9IChtZXRhcHJvb2ZTdGVwICE9PSBudWxsKTtcblxuICByZXR1cm4gbWV0YVN1cHBvc2l0aW9uTWF0Y2hlcztcbn1cblxuZnVuY3Rpb24gbWF0Y2hNZXRhU3VwcG9zaXRpb25zKG1ldGFTdXBwb3NpdGlvbnMsIG1ldGFwcm9vZlN0ZXBzLCBzdWJzdGl0dXRpb25zLCBmaWxlQ29udGV4dCwgbG9jYWxNZXRhQ29udGV4dCkge1xuICBjb25zdCBtZXRhU3VwcG9zaXRpb25zTWF0Y2ggPSBtZXRhU3VwcG9zaXRpb25zLmV2ZXJ5KChtZXRhU3VwcG9zaXRpb24pID0+IHtcbiAgICBjb25zdCBtZXRhU3VwcG9zaXRpb25NYXRjaGVzID0gbWF0Y2hNZXRhU3VwcG9zaXRpb24obWV0YVN1cHBvc2l0aW9uLCBtZXRhcHJvb2ZTdGVwcywgc3Vic3RpdHV0aW9ucywgZmlsZUNvbnRleHQsIGxvY2FsTWV0YUNvbnRleHQpO1xuXG4gICAgaWYgKG1ldGFTdXBwb3NpdGlvbk1hdGNoZXMpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIG1ldGFTdXBwb3NpdGlvbnNNYXRjaDtcbn1cblxuZnVuY3Rpb24gbWF0Y2hNZXRhQ29uc2VxdWVudChtZXRhQ29uc2VxdWVudCwgbWV0YXN0YXRlbWVudE5vZGUsIHN1YnN0aXR1dGlvbnMsIGZpbGVDb250ZXh0LCBsb2NhbE1ldGFDb250ZXh0KSB7XG4gIGNvbnN0IG5vblRlcm1pbmFsTm9kZU1hdGNoZXMgPSBtZXRhQ29uc2VxdWVudC5tYXRjaE1ldGFzdGF0ZW1lbnROb2RlKG1ldGFzdGF0ZW1lbnROb2RlLCBzdWJzdGl0dXRpb25zLCBmaWxlQ29udGV4dCwgbG9jYWxNZXRhQ29udGV4dCksXG4gICAgICAgIG1ldGFDb25zZXF1ZW50TWF0Y2hlcyA9IG5vblRlcm1pbmFsTm9kZU1hdGNoZXM7IC8vL1xuXG4gIHJldHVybiBtZXRhQ29uc2VxdWVudE1hdGNoZXM7XG59XG4iXSwibmFtZXMiOlsiTWV0YUxlbW1hTWV0YXRoZW9yZW0iLCJsYWJlbHMiLCJtZXRhU3VwcG9zaXRpb25zIiwibWV0YUNvbnNlcXVlbnQiLCJzdWJzdGl0dXRpb25zIiwiZmlsZUNvbnRleHQiLCJnZXRMYWJlbHMiLCJnZXRNZXRhU3VwcG9zaXRpb25zIiwiZ2V0TWV0YUNvbnNlcXVlbnQiLCJnZXRTdWJzdGl0dXRpb25zIiwiZ2V0RmlsZUNvbnRleHQiLCJtYXRjaE1ldGFzdGF0ZW1lbnQiLCJtZXRhc3RhdGVtZW50Tm9kZSIsImxvY2FsTWV0YUNvbnRleHQiLCJtZXRhc3RhdGVtZW50TmF0Y2hlcyIsIm1ldGFTdXBwb3NpdGlvbnNMZW5ndGgiLCJsZW5ndGgiLCJtZXRhQ29uc2VxdWVudE1hdGNoZXMiLCJtYXRjaE1ldGFDb25zZXF1ZW50IiwibWV0YXByb29mU3RlcHMiLCJnZXRQcm9vZlN0ZXBzIiwic29tZVN1YkFycmF5IiwibWV0YVN1cHBvc2l0aW9uc01hdGNoTWV0YUNvbnNlcXVlbnQiLCJtZXRhU3VwcG9zaXRpb25zTWF0Y2giLCJtYXRjaE1ldGFTdXBwb3NpdGlvbnMiLCJtYXRjaE1ldGF2YXJpYWJsZU5vZGUiLCJtZXRhdmFyaWFibGVOb2RlIiwibWV0YXZhcmlhYmxlTm9kZU1hdGNoZXMiLCJzb21lIiwibGFiZWwiLCJsYWJlbE1hdGNoZXNNZXRhdmFyaWFibGVOb2RlIiwidG9KU09OIiwidG9rZW5zIiwibGFiZWxzSlNPTiIsIm1hcCIsImxhYmVsSlNPTiIsIm1ldGFTdXBwb3NpdGlvbnNKU09OIiwibWV0YVN1cHBvc2l0aW9uIiwibWV0YVN1cHBvc2l0aW9uSlNPTiIsIm1ldGFDb25zZXF1ZW50SlNPTiIsInN1YnN0aXR1dGlvbnNKU09OIiwic3Vic3RpdHV0aW9uIiwic3Vic3RpdHV0aW9uSlNPTiIsImxvY2FsQ29udGV4dEpTT04iLCJqc29uIiwiZnJvbUpTT05BbmRGaWxlQ29udGV4dCIsIkNsYXNzIiwiTGFiZWwiLCJNZXRhU3VwcG9zaXRpb24iLCJNZXRhQ29uc2VxdWVudCIsIm1ldGFzdGF0ZW1lbnRGb3JNZXRhdmFyaWFibGVTdWJzdGl0dXRpb24iLCJNZXRhc3RhdGVtZW50Rm9yTWV0YXZhcmlhYmxlU3Vic3RpdHV0aW9uIiwiZnJvbUxhYmVsc01ldGFTdXBwb3NpdGlvbnNNZXRhQ29uc2VxdWVudFN1YnN0aXR1dGlvbnNBbmRGaWxlQ29udGV4dCIsIm1hdGNoTWV0YVN1cHBvc2l0aW9uIiwibWV0YXByb29mU3RlcCIsImV4dHJhY3QiLCJtZXRhU3VicHJvb2ZOb2RlIiwiZ2V0TWV0YVN1YnByb29mTm9kZSIsImdldE1ldGFzdGF0ZW1lbnROb2RlIiwibWV0YVN1YlByb29mTWF0Y2hlcyIsIm1hdGNoTWV0YVN1YnByb29mTm9kZSIsIm1ldGFzdGF0ZW1lbnRNYXRjaGVzIiwibWF0Y2hNZXRhc3RhdGVtZW50Tm9kZSIsIm1ldGFTdXBwb3NpdGlvbk1hdGNoZXMiLCJldmVyeSIsIm5vblRlcm1pbmFsTm9kZU1hdGNoZXMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBVXFCQTs7OzREQVJIO3FFQUNTO3NFQUNDO21GQUN5QjtxQkFFN0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFHVCxJQUFBLEFBQU1BLHFDQUFELEFBQUw7YUFBTUEscUJBQ1BDLE1BQU0sRUFBRUMsZ0JBQWdCLEVBQUVDLGNBQWMsRUFBRUMsYUFBYSxFQUFFQyxXQUFXO2dDQUQ3REw7UUFFakIsSUFBSSxDQUFDQyxNQUFNLEdBQUdBO1FBQ2QsSUFBSSxDQUFDQyxnQkFBZ0IsR0FBR0E7UUFDeEIsSUFBSSxDQUFDQyxjQUFjLEdBQUdBO1FBQ3RCLElBQUksQ0FBQ0MsYUFBYSxHQUFHQTtRQUNyQixJQUFJLENBQUNDLFdBQVcsR0FBR0E7O2tCQU5GTDs7WUFTbkJNLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0wsTUFBTTtZQUNwQjs7O1lBRUFNLEtBQUFB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