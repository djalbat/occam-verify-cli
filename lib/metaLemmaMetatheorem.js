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
var _localMeta = /*#__PURE__*/ _interop_require_default(require("./context/localMeta"));
var _array = require("./utilities/array");
var _metastatementForMetavariable = /*#__PURE__*/ _interop_require_default(require("./substitution/metastatementForMetavariable"));
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
            value: function matchMetastatement(metastatementNode, metastatementLocalContext) {
                var _this = this;
                var metastatementNatches;
                var metaSuppositionsLength = this.metaSuppositions.length;
                if (metaSuppositionsLength === 0) {
                    var substitutions = [], metaConsequentMatches = matchMetaConsequent(this.metaConsequent, metastatementNode, substitutions, this.fileContext, metastatementLocalContext);
                    metastatementNatches = metaConsequentMatches; ///
                } else {
                    var metaproofSteps = metastatementLocalContext.getProofSteps();
                    metastatementNatches = (0, _array.someSubArray)(metaproofSteps, metaSuppositionsLength, function(metaproofSteps) {
                        var metaSuppositionsMatchMetaConsequent = false;
                        var substitutions = [], metaSuppositionsMatch = matchMetaSuppositions(_this.metaSuppositions, metaproofSteps, substitutions, _this.fileContext, metastatementLocalContext);
                        if (metaSuppositionsMatch) {
                            var metaConsequentMatches = matchMetaConsequent(_this.metaConsequent, metastatementNode, substitutions, _this.fileContext, metastatementLocalContext);
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
            key: "matchLabelMetavariableNode",
            value: function matchLabelMetavariableNode(labelMetavariableNode) {
                var labelMetavariableNodeMatches = this.labels.some(function(label) {
                    var node = labelMetavariableNode, labelMatchesNode = label.matchNode(node);
                    if (labelMatchesNode) {
                        return true;
                    }
                });
                return labelMetavariableNodeMatches;
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
function matchMetaSupposition(metaSupposition, metaproofSteps, substitutions, fileContext, metastatementLocalContext) {
    var metaproofStep = (0, _array.prune)(metaproofSteps, function(metaproofStep) {
        var metaSubproofNode = metaproofStep.getMetaSubproofNode(), metastatementNode = metaproofStep.getMetastatementNode();
        if (metaSubproofNode !== null) {
            var metaSubProofMatches = metaSupposition.matchMetaSubproofNode(metaSubproofNode, substitutions, fileContext, metastatementLocalContext);
            if (!metaSubProofMatches) {
                return true;
            }
        }
        if (metastatementNode !== null) {
            var metastatementMatches = metaSupposition.matchMetastatementNode(metastatementNode, substitutions, fileContext, metastatementLocalContext);
            if (!metastatementMatches) {
                return true;
            }
        }
    }) || null;
    var metaSuppositionMatches = metaproofStep !== null;
    return metaSuppositionMatches;
}
function matchMetaSuppositions(metaSuppositions, metaproofSteps, substitutions, fileContext, metastatementLocalContext) {
    var metaSuppositionsMatch = metaSuppositions.every(function(metaSupposition) {
        var metaSuppositionMatches = matchMetaSupposition(metaSupposition, metaproofSteps, substitutions, fileContext, metastatementLocalContext);
        if (metaSuppositionMatches) {
            return true;
        }
    });
    return metaSuppositionsMatch;
}
function matchMetaConsequent(metaConsequent, metastatementNode, substitutions, fileContext, metastatementLocalContext) {
    var nonTerminalNodeMatches = metaConsequent.matchMetastatementNode(metastatementNode, substitutions, fileContext, metastatementLocalContext), metaConsequentMatches = nonTerminalNodeMatches; ///
    return metaConsequentMatches;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9tZXRhTGVtbWFNZXRhdGhlb3JlbS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IExhYmVsIGZyb20gXCIuL2xhYmVsXCI7XG5pbXBvcnQgTWV0YUNvbnNlcXVlbnQgZnJvbSBcIi4vbWV0YUNvbnNlcXVlbnRcIjtcbmltcG9ydCBNZXRhU3VwcG9zaXRpb24gZnJvbSBcIi4vbWV0YVN1cHBvc2l0aW9uXCI7XG5pbXBvcnQgTG9jYWxNZXRhQ29udGV4dCBmcm9tIFwiLi9jb250ZXh0L2xvY2FsTWV0YVwiO1xuXG5pbXBvcnQgeyBwcnVuZSB9IGZyb20gXCIuL3V0aWxpdGllcy9hcnJheVwiO1xuaW1wb3J0IHsgc29tZVN1YkFycmF5IH0gZnJvbSBcIi4vdXRpbGl0aWVzL2FycmF5XCI7XG5pbXBvcnQgTWV0YXN0YXRlbWVudEZvck1ldGF2YXJpYWJsZVN1YnN0aXR1dGlvbiBmcm9tIFwiLi9zdWJzdGl0dXRpb24vbWV0YXN0YXRlbWVudEZvck1ldGF2YXJpYWJsZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNZXRhTGVtbWFNZXRhdGhlb3JlbSB7XG4gIGNvbnN0cnVjdG9yKGxhYmVscywgbWV0YVN1cHBvc2l0aW9ucywgbWV0YUNvbnNlcXVlbnQsIHN1YnN0aXR1dGlvbnMsIGZpbGVDb250ZXh0KSB7XG4gICAgdGhpcy5sYWJlbHMgPSBsYWJlbHM7XG4gICAgdGhpcy5tZXRhU3VwcG9zaXRpb25zID0gbWV0YVN1cHBvc2l0aW9ucztcbiAgICB0aGlzLm1ldGFDb25zZXF1ZW50ID0gbWV0YUNvbnNlcXVlbnQ7XG4gICAgdGhpcy5zdWJzdGl0dXRpb25zID0gc3Vic3RpdHV0aW9ucztcbiAgICB0aGlzLmZpbGVDb250ZXh0ID0gZmlsZUNvbnRleHQ7XG4gIH1cblxuICBnZXRMYWJlbHMoKSB7XG4gICAgcmV0dXJuIHRoaXMubGFiZWxzO1xuICB9XG5cbiAgZ2V0TWV0YVN1cHBvc2l0aW9ucygpIHtcbiAgICByZXR1cm4gdGhpcy5tZXRhU3VwcG9zaXRpb25zO1xuICB9XG5cbiAgZ2V0TWV0YUNvbnNlcXVlbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMubWV0YUNvbnNlcXVlbnQ7XG4gIH1cblxuICBnZXRTdWJzdGl0dXRpb25zKCkge1xuICAgIHJldHVybiB0aGlzLnN1YnN0aXR1dGlvbnM7XG4gIH1cblxuICBnZXRGaWxlQ29udGV4dCgpIHtcbiAgICByZXR1cm4gdGhpcy5maWxlQ29udGV4dDtcbiAgfVxuXG4gIG1hdGNoTWV0YXN0YXRlbWVudChtZXRhc3RhdGVtZW50Tm9kZSwgbWV0YXN0YXRlbWVudExvY2FsQ29udGV4dCkge1xuICAgIGxldCBtZXRhc3RhdGVtZW50TmF0Y2hlcztcblxuICAgIGNvbnN0IG1ldGFTdXBwb3NpdGlvbnNMZW5ndGggPSB0aGlzLm1ldGFTdXBwb3NpdGlvbnMubGVuZ3RoO1xuXG4gICAgaWYgKG1ldGFTdXBwb3NpdGlvbnNMZW5ndGggPT09IDApIHtcbiAgICAgIGNvbnN0IHN1YnN0aXR1dGlvbnMgPSBbXSxcbiAgICAgICAgICAgIG1ldGFDb25zZXF1ZW50TWF0Y2hlcyA9IG1hdGNoTWV0YUNvbnNlcXVlbnQodGhpcy5tZXRhQ29uc2VxdWVudCwgbWV0YXN0YXRlbWVudE5vZGUsIHN1YnN0aXR1dGlvbnMsIHRoaXMuZmlsZUNvbnRleHQsIG1ldGFzdGF0ZW1lbnRMb2NhbENvbnRleHQpO1xuXG4gICAgICBtZXRhc3RhdGVtZW50TmF0Y2hlcyA9IG1ldGFDb25zZXF1ZW50TWF0Y2hlczsgLy8vXG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IG1ldGFwcm9vZlN0ZXBzID0gbWV0YXN0YXRlbWVudExvY2FsQ29udGV4dC5nZXRQcm9vZlN0ZXBzKCk7XG5cbiAgICAgIG1ldGFzdGF0ZW1lbnROYXRjaGVzID0gc29tZVN1YkFycmF5KG1ldGFwcm9vZlN0ZXBzLCBtZXRhU3VwcG9zaXRpb25zTGVuZ3RoLCAobWV0YXByb29mU3RlcHMpID0+IHtcbiAgICAgICAgbGV0IG1ldGFTdXBwb3NpdGlvbnNNYXRjaE1ldGFDb25zZXF1ZW50ID0gZmFsc2U7XG5cbiAgICAgICAgY29uc3Qgc3Vic3RpdHV0aW9ucyA9IFtdLFxuICAgICAgICAgICAgICBtZXRhU3VwcG9zaXRpb25zTWF0Y2ggPSBtYXRjaE1ldGFTdXBwb3NpdGlvbnModGhpcy5tZXRhU3VwcG9zaXRpb25zLCBtZXRhcHJvb2ZTdGVwcywgc3Vic3RpdHV0aW9ucywgdGhpcy5maWxlQ29udGV4dCwgbWV0YXN0YXRlbWVudExvY2FsQ29udGV4dCk7XG5cbiAgICAgICAgaWYgKG1ldGFTdXBwb3NpdGlvbnNNYXRjaCkge1xuICAgICAgICAgIGNvbnN0IG1ldGFDb25zZXF1ZW50TWF0Y2hlcyA9IG1hdGNoTWV0YUNvbnNlcXVlbnQodGhpcy5tZXRhQ29uc2VxdWVudCwgbWV0YXN0YXRlbWVudE5vZGUsIHN1YnN0aXR1dGlvbnMsIHRoaXMuZmlsZUNvbnRleHQsIG1ldGFzdGF0ZW1lbnRMb2NhbENvbnRleHQpO1xuXG4gICAgICAgICAgbWV0YVN1cHBvc2l0aW9uc01hdGNoTWV0YUNvbnNlcXVlbnQgPSBtZXRhQ29uc2VxdWVudE1hdGNoZXM7ICAvLy9cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChtZXRhU3VwcG9zaXRpb25zTWF0Y2hNZXRhQ29uc2VxdWVudCkge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gbWV0YXN0YXRlbWVudE5hdGNoZXM7XG4gIH1cblxuICBtYXRjaExhYmVsTWV0YXZhcmlhYmxlTm9kZShsYWJlbE1ldGF2YXJpYWJsZU5vZGUpIHtcbiAgICBjb25zdCBsYWJlbE1ldGF2YXJpYWJsZU5vZGVNYXRjaGVzID0gdGhpcy5sYWJlbHMuc29tZSgobGFiZWwpID0+IHtcbiAgICAgIGNvbnN0IG5vZGUgPSBsYWJlbE1ldGF2YXJpYWJsZU5vZGUsIC8vL1xuICAgICAgICAgICAgbGFiZWxNYXRjaGVzTm9kZSA9IGxhYmVsLm1hdGNoTm9kZShub2RlKTtcblxuICAgICAgaWYgKGxhYmVsTWF0Y2hlc05vZGUpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gbGFiZWxNZXRhdmFyaWFibGVOb2RlTWF0Y2hlcztcbiAgfVxuXG4gIHRvSlNPTih0b2tlbnMpIHtcbiAgICBjb25zdCBsYWJlbHNKU09OID0gdGhpcy5sYWJlbHMubWFwKChsYWJlbCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgbGFiZWxKU09OID0gbGFiZWwudG9KU09OKHRva2Vucyk7XG5cbiAgICAgICAgICAgIHJldHVybiBsYWJlbEpTT047XG4gICAgICAgICAgfSksXG4gICAgICAgICAgbWV0YVN1cHBvc2l0aW9uc0pTT04gPSB0aGlzLm1ldGFTdXBwb3NpdGlvbnMubWFwKChtZXRhU3VwcG9zaXRpb24pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG1ldGFTdXBwb3NpdGlvbkpTT04gPSBtZXRhU3VwcG9zaXRpb24udG9KU09OKHRva2Vucyk7XG5cbiAgICAgICAgICAgIHJldHVybiBtZXRhU3VwcG9zaXRpb25KU09OO1xuICAgICAgICAgIH0pLFxuICAgICAgICAgIG1ldGFDb25zZXF1ZW50SlNPTiA9IHRoaXMubWV0YUNvbnNlcXVlbnQudG9KU09OKHRva2VucyksXG4gICAgICAgICAgc3Vic3RpdHV0aW9uc0pTT04gPSB0aGlzLnN1YnN0aXR1dGlvbnMubWFwKChzdWJzdGl0dXRpb24pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHN1YnN0aXR1dGlvbkpTT04gPSBzdWJzdGl0dXRpb24udG9KU09OKCk7XG5cbiAgICAgICAgICAgIHJldHVybiBzdWJzdGl0dXRpb25KU09OO1xuICAgICAgICAgIH0pLFxuICAgICAgICAgIGxvY2FsQ29udGV4dEpTT04gPSB0aGlzLmZpbGVDb250ZXh0LnRvSlNPTih0b2tlbnMpLFxuICAgICAgICAgIGxhYmVscyA9IGxhYmVsc0pTT04sICAvLy9cbiAgICAgICAgICBtZXRhU3VwcG9zaXRpb25zID0gbWV0YVN1cHBvc2l0aW9uc0pTT04sICAvLy9cbiAgICAgICAgICBtZXRhQ29uc2VxdWVudCA9IG1ldGFDb25zZXF1ZW50SlNPTiwgIC8vL1xuICAgICAgICAgIHN1YnN0aXR1dGlvbnMgPSBzdWJzdGl0dXRpb25zSlNPTiwgIC8vL1xuICAgICAgICAgIGZpbGVDb250ZXh0ID0gbG9jYWxDb250ZXh0SlNPTiwgIC8vL1xuICAgICAgICAgIGpzb24gPSB7XG4gICAgICAgICAgICBsYWJlbHMsXG4gICAgICAgICAgICBtZXRhU3VwcG9zaXRpb25zLFxuICAgICAgICAgICAgbWV0YUNvbnNlcXVlbnQsXG4gICAgICAgICAgICBzdWJzdGl0dXRpb25zLFxuICAgICAgICAgICAgZmlsZUNvbnRleHRcbiAgICAgICAgICB9O1xuXG4gICAgcmV0dXJuIGpzb247XG4gIH1cblxuICBzdGF0aWMgZnJvbUpTT05BbmRGaWxlQ29udGV4dChDbGFzcywganNvbiwgZmlsZUNvbnRleHQpIHtcbiAgICBsZXQgeyBsYWJlbHMgfSA9IGpzb247XG5cbiAgICBjb25zdCBsYWJlbHNKU09OID0gbGFiZWxzOyAgLy8vXG5cbiAgICBsYWJlbHMgPSBsYWJlbHNKU09OLm1hcCgobGFiZWxKU09OKSA9PiB7XG4gICAgICBjb25zdCBqc29uID0gbGFiZWxKU09OLCAvLy9cbiAgICAgICAgICAgIGxhYmVsID0gTGFiZWwuZnJvbUpTT05BbmRGaWxlQ29udGV4dChqc29uLCBmaWxlQ29udGV4dCk7XG5cbiAgICAgIHJldHVybiBsYWJlbDtcbiAgICB9KTtcblxuICAgIGxldCB7IG1ldGFTdXBwb3NpdGlvbnMsIG1ldGFDb25zZXF1ZW50LCBzdWJzdGl0dXRpb25zIH0gPSBqc29uO1xuXG4gICAgY29uc3QgbWV0YVN1cHBvc2l0aW9uc0pTT04gPSBtZXRhU3VwcG9zaXRpb25zOyAgLy8vXG5cbiAgICBtZXRhU3VwcG9zaXRpb25zID0gbWV0YVN1cHBvc2l0aW9uc0pTT04ubWFwKChtZXRhU3VwcG9zaXRpb25KU09OKSA9PiB7XG4gICAgICBjb25zdCBqc29uID0gbWV0YVN1cHBvc2l0aW9uSlNPTiwgLy8vXG4gICAgICAgICAgICBtZXRhU3VwcG9zaXRpb24gPSBNZXRhU3VwcG9zaXRpb24uZnJvbUpTT05BbmRGaWxlQ29udGV4dChqc29uLCBmaWxlQ29udGV4dCk7XG5cbiAgICAgIHJldHVybiBtZXRhU3VwcG9zaXRpb247XG4gICAgfSk7XG5cbiAgICBjb25zdCBtZXRhQ29uc2VxdWVudEpTT04gPSBtZXRhQ29uc2VxdWVudDsgIC8vL1xuXG4gICAganNvbiA9IG1ldGFDb25zZXF1ZW50SlNPTjsgIC8vL1xuXG4gICAgbWV0YUNvbnNlcXVlbnQgPSBNZXRhQ29uc2VxdWVudC5mcm9tSlNPTkFuZEZpbGVDb250ZXh0KGpzb24sIGZpbGVDb250ZXh0KTtcblxuICAgIGNvbnN0IHN1YnN0aXR1dGlvbnNKU09OID0gc3Vic3RpdHV0aW9uczsgIC8vL1xuXG4gICAgc3Vic3RpdHV0aW9ucyA9IHN1YnN0aXR1dGlvbnNKU09OLm1hcCgoc3Vic3RpdHV0aW9uSlNPTikgPT4ge1xuICAgICAgY29uc3QganNvbiA9IHN1YnN0aXR1dGlvbkpTT04sICAvLy9cbiAgICAgICAgICAgIG1ldGFzdGF0ZW1lbnRGb3JNZXRhdmFyaWFibGVTdWJzdGl0dXRpb24gPSBNZXRhc3RhdGVtZW50Rm9yTWV0YXZhcmlhYmxlU3Vic3RpdHV0aW9uLmZyb21KU09OQW5kRmlsZUNvbnRleHQoanNvbiwgZmlsZUNvbnRleHQpLFxuICAgICAgICAgICAgc3Vic3RpdHV0aW9uID0gbWV0YXN0YXRlbWVudEZvck1ldGF2YXJpYWJsZVN1YnN0aXR1dGlvbjsgIC8vL1xuXG4gICAgICByZXR1cm4gc3Vic3RpdHV0aW9uO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIG5ldyBDbGFzcyhsYWJlbHMsIG1ldGFTdXBwb3NpdGlvbnMsIG1ldGFDb25zZXF1ZW50LCBzdWJzdGl0dXRpb25zLCBmaWxlQ29udGV4dCk7ICAvLy9cbiAgfVxuXG4gIHN0YXRpYyBmcm9tTGFiZWxzTWV0YVN1cHBvc2l0aW9uc01ldGFDb25zZXF1ZW50U3Vic3RpdHV0aW9uc0FuZEZpbGVDb250ZXh0KENsYXNzLCBsYWJlbHMsIG1ldGFTdXBwb3NpdGlvbnMsIG1ldGFDb25zZXF1ZW50LCBzdWJzdGl0dXRpb25zLCBmaWxlQ29udGV4dCkgeyByZXR1cm4gbmV3IENsYXNzKGxhYmVscywgbWV0YVN1cHBvc2l0aW9ucywgbWV0YUNvbnNlcXVlbnQsIHN1YnN0aXR1dGlvbnMsIGZpbGVDb250ZXh0KTsgfVxufVxuXG5mdW5jdGlvbiBtYXRjaE1ldGFTdXBwb3NpdGlvbihtZXRhU3VwcG9zaXRpb24sIG1ldGFwcm9vZlN0ZXBzLCBzdWJzdGl0dXRpb25zLCBmaWxlQ29udGV4dCwgbWV0YXN0YXRlbWVudExvY2FsQ29udGV4dCkge1xuICBjb25zdCBtZXRhcHJvb2ZTdGVwID0gcHJ1bmUobWV0YXByb29mU3RlcHMsIChtZXRhcHJvb2ZTdGVwKSA9PiB7XG4gICAgY29uc3QgbWV0YVN1YnByb29mTm9kZSA9IG1ldGFwcm9vZlN0ZXAuZ2V0TWV0YVN1YnByb29mTm9kZSgpLFxuICAgICAgICAgIG1ldGFzdGF0ZW1lbnROb2RlID0gbWV0YXByb29mU3RlcC5nZXRNZXRhc3RhdGVtZW50Tm9kZSgpO1xuXG4gICAgaWYgKG1ldGFTdWJwcm9vZk5vZGUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IG1ldGFTdWJQcm9vZk1hdGNoZXMgPSBtZXRhU3VwcG9zaXRpb24ubWF0Y2hNZXRhU3VicHJvb2ZOb2RlKG1ldGFTdWJwcm9vZk5vZGUsIHN1YnN0aXR1dGlvbnMsIGZpbGVDb250ZXh0LCBtZXRhc3RhdGVtZW50TG9jYWxDb250ZXh0KTtcblxuICAgICAgaWYgKCFtZXRhU3ViUHJvb2ZNYXRjaGVzKSB7ICAvLy9cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKG1ldGFzdGF0ZW1lbnROb2RlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBtZXRhc3RhdGVtZW50TWF0Y2hlcyA9IG1ldGFTdXBwb3NpdGlvbi5tYXRjaE1ldGFzdGF0ZW1lbnROb2RlKG1ldGFzdGF0ZW1lbnROb2RlLCBzdWJzdGl0dXRpb25zLCBmaWxlQ29udGV4dCwgbWV0YXN0YXRlbWVudExvY2FsQ29udGV4dCk7XG5cbiAgICAgIGlmICghbWV0YXN0YXRlbWVudE1hdGNoZXMpIHsgIC8vL1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG4gIH0pIHx8IG51bGw7XG5cbiAgY29uc3QgbWV0YVN1cHBvc2l0aW9uTWF0Y2hlcyA9IChtZXRhcHJvb2ZTdGVwICE9PSBudWxsKTtcblxuICByZXR1cm4gbWV0YVN1cHBvc2l0aW9uTWF0Y2hlcztcbn1cblxuZnVuY3Rpb24gbWF0Y2hNZXRhU3VwcG9zaXRpb25zKG1ldGFTdXBwb3NpdGlvbnMsIG1ldGFwcm9vZlN0ZXBzLCBzdWJzdGl0dXRpb25zLCBmaWxlQ29udGV4dCwgbWV0YXN0YXRlbWVudExvY2FsQ29udGV4dCkge1xuICBjb25zdCBtZXRhU3VwcG9zaXRpb25zTWF0Y2ggPSBtZXRhU3VwcG9zaXRpb25zLmV2ZXJ5KChtZXRhU3VwcG9zaXRpb24pID0+IHtcbiAgICBjb25zdCBtZXRhU3VwcG9zaXRpb25NYXRjaGVzID0gbWF0Y2hNZXRhU3VwcG9zaXRpb24obWV0YVN1cHBvc2l0aW9uLCBtZXRhcHJvb2ZTdGVwcywgc3Vic3RpdHV0aW9ucywgZmlsZUNvbnRleHQsIG1ldGFzdGF0ZW1lbnRMb2NhbENvbnRleHQpO1xuXG4gICAgaWYgKG1ldGFTdXBwb3NpdGlvbk1hdGNoZXMpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIG1ldGFTdXBwb3NpdGlvbnNNYXRjaDtcbn1cblxuZnVuY3Rpb24gbWF0Y2hNZXRhQ29uc2VxdWVudChtZXRhQ29uc2VxdWVudCwgbWV0YXN0YXRlbWVudE5vZGUsIHN1YnN0aXR1dGlvbnMsIGZpbGVDb250ZXh0LCBtZXRhc3RhdGVtZW50TG9jYWxDb250ZXh0KSB7XG4gIGNvbnN0IG5vblRlcm1pbmFsTm9kZU1hdGNoZXMgPSBtZXRhQ29uc2VxdWVudC5tYXRjaE1ldGFzdGF0ZW1lbnROb2RlKG1ldGFzdGF0ZW1lbnROb2RlLCBzdWJzdGl0dXRpb25zLCBmaWxlQ29udGV4dCwgbWV0YXN0YXRlbWVudExvY2FsQ29udGV4dCksXG4gICAgICAgIG1ldGFDb25zZXF1ZW50TWF0Y2hlcyA9IG5vblRlcm1pbmFsTm9kZU1hdGNoZXM7IC8vL1xuXG4gIHJldHVybiBtZXRhQ29uc2VxdWVudE1hdGNoZXM7XG59XG4iXSwibmFtZXMiOlsiTWV0YUxlbW1hTWV0YXRoZW9yZW0iLCJsYWJlbHMiLCJtZXRhU3VwcG9zaXRpb25zIiwibWV0YUNvbnNlcXVlbnQiLCJzdWJzdGl0dXRpb25zIiwiZmlsZUNvbnRleHQiLCJnZXRMYWJlbHMiLCJnZXRNZXRhU3VwcG9zaXRpb25zIiwiZ2V0TWV0YUNvbnNlcXVlbnQiLCJnZXRTdWJzdGl0dXRpb25zIiwiZ2V0RmlsZUNvbnRleHQiLCJtYXRjaE1ldGFzdGF0ZW1lbnQiLCJtZXRhc3RhdGVtZW50Tm9kZSIsIm1ldGFzdGF0ZW1lbnRMb2NhbENvbnRleHQiLCJtZXRhc3RhdGVtZW50TmF0Y2hlcyIsIm1ldGFTdXBwb3NpdGlvbnNMZW5ndGgiLCJsZW5ndGgiLCJtZXRhQ29uc2VxdWVudE1hdGNoZXMiLCJtYXRjaE1ldGFDb25zZXF1ZW50IiwibWV0YXByb29mU3RlcHMiLCJnZXRQcm9vZlN0ZXBzIiwic29tZVN1YkFycmF5IiwibWV0YVN1cHBvc2l0aW9uc01hdGNoTWV0YUNvbnNlcXVlbnQiLCJtZXRhU3VwcG9zaXRpb25zTWF0Y2giLCJtYXRjaE1ldGFTdXBwb3NpdGlvbnMiLCJtYXRjaExhYmVsTWV0YXZhcmlhYmxlTm9kZSIsImxhYmVsTWV0YXZhcmlhYmxlTm9kZSIsImxhYmVsTWV0YXZhcmlhYmxlTm9kZU1hdGNoZXMiLCJzb21lIiwibGFiZWwiLCJub2RlIiwibGFiZWxNYXRjaGVzTm9kZSIsIm1hdGNoTm9kZSIsInRvSlNPTiIsInRva2VucyIsImxhYmVsc0pTT04iLCJtYXAiLCJsYWJlbEpTT04iLCJtZXRhU3VwcG9zaXRpb25zSlNPTiIsIm1ldGFTdXBwb3NpdGlvbiIsIm1ldGFTdXBwb3NpdGlvbkpTT04iLCJtZXRhQ29uc2VxdWVudEpTT04iLCJzdWJzdGl0dXRpb25zSlNPTiIsInN1YnN0aXR1dGlvbiIsInN1YnN0aXR1dGlvbkpTT04iLCJsb2NhbENvbnRleHRKU09OIiwianNvbiIsImZyb21KU09OQW5kRmlsZUNvbnRleHQiLCJDbGFzcyIsIkxhYmVsIiwiTWV0YVN1cHBvc2l0aW9uIiwiTWV0YUNvbnNlcXVlbnQiLCJtZXRhc3RhdGVtZW50Rm9yTWV0YXZhcmlhYmxlU3Vic3RpdHV0aW9uIiwiTWV0YXN0YXRlbWVudEZvck1ldGF2YXJpYWJsZVN1YnN0aXR1dGlvbiIsImZyb21MYWJlbHNNZXRhU3VwcG9zaXRpb25zTWV0YUNvbnNlcXVlbnRTdWJzdGl0dXRpb25zQW5kRmlsZUNvbnRleHQiLCJtYXRjaE1ldGFTdXBwb3NpdGlvbiIsIm1ldGFwcm9vZlN0ZXAiLCJwcnVuZSIsIm1ldGFTdWJwcm9vZk5vZGUiLCJnZXRNZXRhU3VicHJvb2ZOb2RlIiwiZ2V0TWV0YXN0YXRlbWVudE5vZGUiLCJtZXRhU3ViUHJvb2ZNYXRjaGVzIiwibWF0Y2hNZXRhU3VicHJvb2ZOb2RlIiwibWV0YXN0YXRlbWVudE1hdGNoZXMiLCJtYXRjaE1ldGFzdGF0ZW1lbnROb2RlIiwibWV0YVN1cHBvc2l0aW9uTWF0Y2hlcyIsImV2ZXJ5Iiwibm9uVGVybWluYWxOb2RlTWF0Y2hlcyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFXcUJBOzs7NERBVEg7cUVBQ1M7c0VBQ0M7Z0VBQ0M7cUJBRVA7bUZBRStCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXRDLElBQUEsQUFBTUEscUNBQUQsQUFBTDthQUFNQSxxQkFDUEMsTUFBTSxFQUFFQyxnQkFBZ0IsRUFBRUMsY0FBYyxFQUFFQyxhQUFhLEVBQUVDLFdBQVc7Z0NBRDdETDtRQUVqQixJ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