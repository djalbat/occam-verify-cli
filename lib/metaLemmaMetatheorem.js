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
    var metaproofStep = (0, _array.prune)(metaproofSteps, function(metaproofStep) {
        var metaSubproofNode = metaproofStep.getMetaSubproofNode(), metastatementNode = metaproofStep.getMetastatementNode();
        if (metaSubproofNode !== null) {
            var metaSubProofMatches = metaSupposition.matchMetaSubproofNode(metaSubproofNode, substitutions, fileContext, localMetaContext);
            if (!metaSubProofMatches) {
                return true;
            }
        }
        if (metastatementNode !== null) {
            var metastatementMatches = metaSupposition.matchMetastatementNode(metastatementNode, substitutions, fileContext, localMetaContext);
            if (!metastatementMatches) {
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9tZXRhTGVtbWFNZXRhdGhlb3JlbS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IExhYmVsIGZyb20gXCIuL2xhYmVsXCI7XG5pbXBvcnQgTWV0YUNvbnNlcXVlbnQgZnJvbSBcIi4vbWV0YUNvbnNlcXVlbnRcIjtcbmltcG9ydCBNZXRhU3VwcG9zaXRpb24gZnJvbSBcIi4vbWV0YVN1cHBvc2l0aW9uXCI7XG5pbXBvcnQgTWV0YXN0YXRlbWVudEZvck1ldGF2YXJpYWJsZVN1YnN0aXR1dGlvbiBmcm9tIFwiLi9zdWJzdGl0dXRpb24vbWV0YXN0YXRlbWVudEZvck1ldGF2YXJpYWJsZVwiO1xuXG5pbXBvcnQgeyBwcnVuZSB9IGZyb20gXCIuL3V0aWxpdGllcy9hcnJheVwiO1xuaW1wb3J0IHsgc29tZVN1YkFycmF5IH0gZnJvbSBcIi4vdXRpbGl0aWVzL2FycmF5XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1ldGFMZW1tYU1ldGF0aGVvcmVtIHtcbiAgY29uc3RydWN0b3IobGFiZWxzLCBtZXRhU3VwcG9zaXRpb25zLCBtZXRhQ29uc2VxdWVudCwgc3Vic3RpdHV0aW9ucywgZmlsZUNvbnRleHQpIHtcbiAgICB0aGlzLmxhYmVscyA9IGxhYmVscztcbiAgICB0aGlzLm1ldGFTdXBwb3NpdGlvbnMgPSBtZXRhU3VwcG9zaXRpb25zO1xuICAgIHRoaXMubWV0YUNvbnNlcXVlbnQgPSBtZXRhQ29uc2VxdWVudDtcbiAgICB0aGlzLnN1YnN0aXR1dGlvbnMgPSBzdWJzdGl0dXRpb25zO1xuICAgIHRoaXMuZmlsZUNvbnRleHQgPSBmaWxlQ29udGV4dDtcbiAgfVxuXG4gIGdldExhYmVscygpIHtcbiAgICByZXR1cm4gdGhpcy5sYWJlbHM7XG4gIH1cblxuICBnZXRNZXRhU3VwcG9zaXRpb25zKCkge1xuICAgIHJldHVybiB0aGlzLm1ldGFTdXBwb3NpdGlvbnM7XG4gIH1cblxuICBnZXRNZXRhQ29uc2VxdWVudCgpIHtcbiAgICByZXR1cm4gdGhpcy5tZXRhQ29uc2VxdWVudDtcbiAgfVxuXG4gIGdldFN1YnN0aXR1dGlvbnMoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3Vic3RpdHV0aW9ucztcbiAgfVxuXG4gIGdldEZpbGVDb250ZXh0KCkge1xuICAgIHJldHVybiB0aGlzLmZpbGVDb250ZXh0O1xuICB9XG5cbiAgbWF0Y2hNZXRhc3RhdGVtZW50KG1ldGFzdGF0ZW1lbnROb2RlLCBsb2NhbE1ldGFDb250ZXh0KSB7XG4gICAgbGV0IG1ldGFzdGF0ZW1lbnROYXRjaGVzO1xuXG4gICAgY29uc3QgbWV0YVN1cHBvc2l0aW9uc0xlbmd0aCA9IHRoaXMubWV0YVN1cHBvc2l0aW9ucy5sZW5ndGg7XG5cbiAgICBpZiAobWV0YVN1cHBvc2l0aW9uc0xlbmd0aCA9PT0gMCkge1xuICAgICAgY29uc3Qgc3Vic3RpdHV0aW9ucyA9IFtdLFxuICAgICAgICAgICAgbWV0YUNvbnNlcXVlbnRNYXRjaGVzID0gbWF0Y2hNZXRhQ29uc2VxdWVudCh0aGlzLm1ldGFDb25zZXF1ZW50LCBtZXRhc3RhdGVtZW50Tm9kZSwgc3Vic3RpdHV0aW9ucywgdGhpcy5maWxlQ29udGV4dCwgbG9jYWxNZXRhQ29udGV4dCk7XG5cbiAgICAgIG1ldGFzdGF0ZW1lbnROYXRjaGVzID0gbWV0YUNvbnNlcXVlbnRNYXRjaGVzOyAvLy9cbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgbWV0YXByb29mU3RlcHMgPSBsb2NhbE1ldGFDb250ZXh0LmdldFByb29mU3RlcHMoKTtcblxuICAgICAgbWV0YXN0YXRlbWVudE5hdGNoZXMgPSBzb21lU3ViQXJyYXkobWV0YXByb29mU3RlcHMsIG1ldGFTdXBwb3NpdGlvbnNMZW5ndGgsIChtZXRhcHJvb2ZTdGVwcykgPT4ge1xuICAgICAgICBsZXQgbWV0YVN1cHBvc2l0aW9uc01hdGNoTWV0YUNvbnNlcXVlbnQgPSBmYWxzZTtcblxuICAgICAgICBjb25zdCBzdWJzdGl0dXRpb25zID0gW10sXG4gICAgICAgICAgICAgIG1ldGFTdXBwb3NpdGlvbnNNYXRjaCA9IG1hdGNoTWV0YVN1cHBvc2l0aW9ucyh0aGlzLm1ldGFTdXBwb3NpdGlvbnMsIG1ldGFwcm9vZlN0ZXBzLCBzdWJzdGl0dXRpb25zLCB0aGlzLmZpbGVDb250ZXh0LCBsb2NhbE1ldGFDb250ZXh0KTtcblxuICAgICAgICBpZiAobWV0YVN1cHBvc2l0aW9uc01hdGNoKSB7XG4gICAgICAgICAgY29uc3QgbWV0YUNvbnNlcXVlbnRNYXRjaGVzID0gbWF0Y2hNZXRhQ29uc2VxdWVudCh0aGlzLm1ldGFDb25zZXF1ZW50LCBtZXRhc3RhdGVtZW50Tm9kZSwgc3Vic3RpdHV0aW9ucywgdGhpcy5maWxlQ29udGV4dCwgbG9jYWxNZXRhQ29udGV4dCk7XG5cbiAgICAgICAgICBtZXRhU3VwcG9zaXRpb25zTWF0Y2hNZXRhQ29uc2VxdWVudCA9IG1ldGFDb25zZXF1ZW50TWF0Y2hlczsgIC8vL1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKG1ldGFTdXBwb3NpdGlvbnNNYXRjaE1ldGFDb25zZXF1ZW50KSB7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBtZXRhc3RhdGVtZW50TmF0Y2hlcztcbiAgfVxuXG4gIG1hdGNoTWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlKSB7XG4gICAgY29uc3QgbWV0YXZhcmlhYmxlTm9kZU1hdGNoZXMgPSB0aGlzLmxhYmVscy5zb21lKChsYWJlbCkgPT4ge1xuICAgICAgY29uc3QgbGFiZWxNYXRjaGVzTWV0YXZhcmlhYmxlTm9kZSA9IGxhYmVsLm1hdGNoTWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlKTtcblxuICAgICAgaWYgKGxhYmVsTWF0Y2hlc01ldGF2YXJpYWJsZU5vZGUpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gbWV0YXZhcmlhYmxlTm9kZU1hdGNoZXM7XG4gIH1cblxuICB0b0pTT04odG9rZW5zKSB7XG4gICAgY29uc3QgbGFiZWxzSlNPTiA9IHRoaXMubGFiZWxzLm1hcCgobGFiZWwpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGxhYmVsSlNPTiA9IGxhYmVsLnRvSlNPTih0b2tlbnMpO1xuXG4gICAgICAgICAgICByZXR1cm4gbGFiZWxKU09OO1xuICAgICAgICAgIH0pLFxuICAgICAgICAgIG1ldGFTdXBwb3NpdGlvbnNKU09OID0gdGhpcy5tZXRhU3VwcG9zaXRpb25zLm1hcCgobWV0YVN1cHBvc2l0aW9uKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBtZXRhU3VwcG9zaXRpb25KU09OID0gbWV0YVN1cHBvc2l0aW9uLnRvSlNPTih0b2tlbnMpO1xuXG4gICAgICAgICAgICByZXR1cm4gbWV0YVN1cHBvc2l0aW9uSlNPTjtcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBtZXRhQ29uc2VxdWVudEpTT04gPSB0aGlzLm1ldGFDb25zZXF1ZW50LnRvSlNPTih0b2tlbnMpLFxuICAgICAgICAgIHN1YnN0aXR1dGlvbnNKU09OID0gdGhpcy5zdWJzdGl0dXRpb25zLm1hcCgoc3Vic3RpdHV0aW9uKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBzdWJzdGl0dXRpb25KU09OID0gc3Vic3RpdHV0aW9uLnRvSlNPTigpO1xuXG4gICAgICAgICAgICByZXR1cm4gc3Vic3RpdHV0aW9uSlNPTjtcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBsb2NhbENvbnRleHRKU09OID0gdGhpcy5maWxlQ29udGV4dC50b0pTT04odG9rZW5zKSxcbiAgICAgICAgICBsYWJlbHMgPSBsYWJlbHNKU09OLCAgLy8vXG4gICAgICAgICAgbWV0YVN1cHBvc2l0aW9ucyA9IG1ldGFTdXBwb3NpdGlvbnNKU09OLCAgLy8vXG4gICAgICAgICAgbWV0YUNvbnNlcXVlbnQgPSBtZXRhQ29uc2VxdWVudEpTT04sICAvLy9cbiAgICAgICAgICBzdWJzdGl0dXRpb25zID0gc3Vic3RpdHV0aW9uc0pTT04sICAvLy9cbiAgICAgICAgICBmaWxlQ29udGV4dCA9IGxvY2FsQ29udGV4dEpTT04sICAvLy9cbiAgICAgICAgICBqc29uID0ge1xuICAgICAgICAgICAgbGFiZWxzLFxuICAgICAgICAgICAgbWV0YVN1cHBvc2l0aW9ucyxcbiAgICAgICAgICAgIG1ldGFDb25zZXF1ZW50LFxuICAgICAgICAgICAgc3Vic3RpdHV0aW9ucyxcbiAgICAgICAgICAgIGZpbGVDb250ZXh0XG4gICAgICAgICAgfTtcblxuICAgIHJldHVybiBqc29uO1xuICB9XG5cbiAgc3RhdGljIGZyb21KU09OQW5kRmlsZUNvbnRleHQoQ2xhc3MsIGpzb24sIGZpbGVDb250ZXh0KSB7XG4gICAgbGV0IHsgbGFiZWxzIH0gPSBqc29uO1xuXG4gICAgY29uc3QgbGFiZWxzSlNPTiA9IGxhYmVsczsgIC8vL1xuXG4gICAgbGFiZWxzID0gbGFiZWxzSlNPTi5tYXAoKGxhYmVsSlNPTikgPT4ge1xuICAgICAgY29uc3QganNvbiA9IGxhYmVsSlNPTiwgLy8vXG4gICAgICAgICAgICBsYWJlbCA9IExhYmVsLmZyb21KU09OQW5kRmlsZUNvbnRleHQoanNvbiwgZmlsZUNvbnRleHQpO1xuXG4gICAgICByZXR1cm4gbGFiZWw7XG4gICAgfSk7XG5cbiAgICBsZXQgeyBtZXRhU3VwcG9zaXRpb25zLCBtZXRhQ29uc2VxdWVudCwgc3Vic3RpdHV0aW9ucyB9ID0ganNvbjtcblxuICAgIGNvbnN0IG1ldGFTdXBwb3NpdGlvbnNKU09OID0gbWV0YVN1cHBvc2l0aW9uczsgIC8vL1xuXG4gICAgbWV0YVN1cHBvc2l0aW9ucyA9IG1ldGFTdXBwb3NpdGlvbnNKU09OLm1hcCgobWV0YVN1cHBvc2l0aW9uSlNPTikgPT4ge1xuICAgICAgY29uc3QganNvbiA9IG1ldGFTdXBwb3NpdGlvbkpTT04sIC8vL1xuICAgICAgICAgICAgbWV0YVN1cHBvc2l0aW9uID0gTWV0YVN1cHBvc2l0aW9uLmZyb21KU09OQW5kRmlsZUNvbnRleHQoanNvbiwgZmlsZUNvbnRleHQpO1xuXG4gICAgICByZXR1cm4gbWV0YVN1cHBvc2l0aW9uO1xuICAgIH0pO1xuXG4gICAgY29uc3QgbWV0YUNvbnNlcXVlbnRKU09OID0gbWV0YUNvbnNlcXVlbnQ7ICAvLy9cblxuICAgIGpzb24gPSBtZXRhQ29uc2VxdWVudEpTT047ICAvLy9cblxuICAgIG1ldGFDb25zZXF1ZW50ID0gTWV0YUNvbnNlcXVlbnQuZnJvbUpTT05BbmRGaWxlQ29udGV4dChqc29uLCBmaWxlQ29udGV4dCk7XG5cbiAgICBjb25zdCBzdWJzdGl0dXRpb25zSlNPTiA9IHN1YnN0aXR1dGlvbnM7ICAvLy9cblxuICAgIHN1YnN0aXR1dGlvbnMgPSBzdWJzdGl0dXRpb25zSlNPTi5tYXAoKHN1YnN0aXR1dGlvbkpTT04pID0+IHtcbiAgICAgIGNvbnN0IGpzb24gPSBzdWJzdGl0dXRpb25KU09OLCAgLy8vXG4gICAgICAgICAgICBtZXRhc3RhdGVtZW50Rm9yTWV0YXZhcmlhYmxlU3Vic3RpdHV0aW9uID0gTWV0YXN0YXRlbWVudEZvck1ldGF2YXJpYWJsZVN1YnN0aXR1dGlvbi5mcm9tSlNPTkFuZEZpbGVDb250ZXh0KGpzb24sIGZpbGVDb250ZXh0KSxcbiAgICAgICAgICAgIHN1YnN0aXR1dGlvbiA9IG1ldGFzdGF0ZW1lbnRGb3JNZXRhdmFyaWFibGVTdWJzdGl0dXRpb247ICAvLy9cblxuICAgICAgcmV0dXJuIHN1YnN0aXR1dGlvbjtcbiAgICB9KTtcblxuICAgIHJldHVybiBuZXcgQ2xhc3MobGFiZWxzLCBtZXRhU3VwcG9zaXRpb25zLCBtZXRhQ29uc2VxdWVudCwgc3Vic3RpdHV0aW9ucywgZmlsZUNvbnRleHQpOyAgLy8vXG4gIH1cblxuICBzdGF0aWMgZnJvbUxhYmVsc01ldGFTdXBwb3NpdGlvbnNNZXRhQ29uc2VxdWVudFN1YnN0aXR1dGlvbnNBbmRGaWxlQ29udGV4dChDbGFzcywgbGFiZWxzLCBtZXRhU3VwcG9zaXRpb25zLCBtZXRhQ29uc2VxdWVudCwgc3Vic3RpdHV0aW9ucywgZmlsZUNvbnRleHQpIHsgcmV0dXJuIG5ldyBDbGFzcyhsYWJlbHMsIG1ldGFTdXBwb3NpdGlvbnMsIG1ldGFDb25zZXF1ZW50LCBzdWJzdGl0dXRpb25zLCBmaWxlQ29udGV4dCk7IH1cbn1cblxuZnVuY3Rpb24gbWF0Y2hNZXRhU3VwcG9zaXRpb24obWV0YVN1cHBvc2l0aW9uLCBtZXRhcHJvb2ZTdGVwcywgc3Vic3RpdHV0aW9ucywgZmlsZUNvbnRleHQsIGxvY2FsTWV0YUNvbnRleHQpIHtcbiAgY29uc3QgbWV0YXByb29mU3RlcCA9IHBydW5lKG1ldGFwcm9vZlN0ZXBzLCAobWV0YXByb29mU3RlcCkgPT4ge1xuICAgIGNvbnN0IG1ldGFTdWJwcm9vZk5vZGUgPSBtZXRhcHJvb2ZTdGVwLmdldE1ldGFTdWJwcm9vZk5vZGUoKSxcbiAgICAgICAgICBtZXRhc3RhdGVtZW50Tm9kZSA9IG1ldGFwcm9vZlN0ZXAuZ2V0TWV0YXN0YXRlbWVudE5vZGUoKTtcblxuICAgIGlmIChtZXRhU3VicHJvb2ZOb2RlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBtZXRhU3ViUHJvb2ZNYXRjaGVzID0gbWV0YVN1cHBvc2l0aW9uLm1hdGNoTWV0YVN1YnByb29mTm9kZShtZXRhU3VicHJvb2ZOb2RlLCBzdWJzdGl0dXRpb25zLCBmaWxlQ29udGV4dCwgbG9jYWxNZXRhQ29udGV4dCk7XG5cbiAgICAgIGlmICghbWV0YVN1YlByb29mTWF0Y2hlcykgeyAgLy8vXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChtZXRhc3RhdGVtZW50Tm9kZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgbWV0YXN0YXRlbWVudE1hdGNoZXMgPSBtZXRhU3VwcG9zaXRpb24ubWF0Y2hNZXRhc3RhdGVtZW50Tm9kZShtZXRhc3RhdGVtZW50Tm9kZSwgc3Vic3RpdHV0aW9ucywgZmlsZUNvbnRleHQsIGxvY2FsTWV0YUNvbnRleHQpO1xuXG4gICAgICBpZiAoIW1ldGFzdGF0ZW1lbnRNYXRjaGVzKSB7ICAvLy9cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfVxuICB9KSB8fCBudWxsO1xuXG4gIGNvbnN0IG1ldGFTdXBwb3NpdGlvbk1hdGNoZXMgPSAobWV0YXByb29mU3RlcCAhPT0gbnVsbCk7XG5cbiAgcmV0dXJuIG1ldGFTdXBwb3NpdGlvbk1hdGNoZXM7XG59XG5cbmZ1bmN0aW9uIG1hdGNoTWV0YVN1cHBvc2l0aW9ucyhtZXRhU3VwcG9zaXRpb25zLCBtZXRhcHJvb2ZTdGVwcywgc3Vic3RpdHV0aW9ucywgZmlsZUNvbnRleHQsIGxvY2FsTWV0YUNvbnRleHQpIHtcbiAgY29uc3QgbWV0YVN1cHBvc2l0aW9uc01hdGNoID0gbWV0YVN1cHBvc2l0aW9ucy5ldmVyeSgobWV0YVN1cHBvc2l0aW9uKSA9PiB7XG4gICAgY29uc3QgbWV0YVN1cHBvc2l0aW9uTWF0Y2hlcyA9IG1hdGNoTWV0YVN1cHBvc2l0aW9uKG1ldGFTdXBwb3NpdGlvbiwgbWV0YXByb29mU3RlcHMsIHN1YnN0aXR1dGlvbnMsIGZpbGVDb250ZXh0LCBsb2NhbE1ldGFDb250ZXh0KTtcblxuICAgIGlmIChtZXRhU3VwcG9zaXRpb25NYXRjaGVzKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiBtZXRhU3VwcG9zaXRpb25zTWF0Y2g7XG59XG5cbmZ1bmN0aW9uIG1hdGNoTWV0YUNvbnNlcXVlbnQobWV0YUNvbnNlcXVlbnQsIG1ldGFzdGF0ZW1lbnROb2RlLCBzdWJzdGl0dXRpb25zLCBmaWxlQ29udGV4dCwgbG9jYWxNZXRhQ29udGV4dCkge1xuICBjb25zdCBub25UZXJtaW5hbE5vZGVNYXRjaGVzID0gbWV0YUNvbnNlcXVlbnQubWF0Y2hNZXRhc3RhdGVtZW50Tm9kZShtZXRhc3RhdGVtZW50Tm9kZSwgc3Vic3RpdHV0aW9ucywgZmlsZUNvbnRleHQsIGxvY2FsTWV0YUNvbnRleHQpLFxuICAgICAgICBtZXRhQ29uc2VxdWVudE1hdGNoZXMgPSBub25UZXJtaW5hbE5vZGVNYXRjaGVzOyAvLy9cblxuICByZXR1cm4gbWV0YUNvbnNlcXVlbnRNYXRjaGVzO1xufVxuIl0sIm5hbWVzIjpbIk1ldGFMZW1tYU1ldGF0aGVvcmVtIiwibGFiZWxzIiwibWV0YVN1cHBvc2l0aW9ucyIsIm1ldGFDb25zZXF1ZW50Iiwic3Vic3RpdHV0aW9ucyIsImZpbGVDb250ZXh0IiwiZ2V0TGFiZWxzIiwiZ2V0TWV0YVN1cHBvc2l0aW9ucyIsImdldE1ldGFDb25zZXF1ZW50IiwiZ2V0U3Vic3RpdHV0aW9ucyIsImdldEZpbGVDb250ZXh0IiwibWF0Y2hNZXRhc3RhdGVtZW50IiwibWV0YXN0YXRlbWVudE5vZGUiLCJsb2NhbE1ldGFDb250ZXh0IiwibWV0YXN0YXRlbWVudE5hdGNoZXMiLCJtZXRhU3VwcG9zaXRpb25zTGVuZ3RoIiwibGVuZ3RoIiwibWV0YUNvbnNlcXVlbnRNYXRjaGVzIiwibWF0Y2hNZXRhQ29uc2VxdWVudCIsIm1ldGFwcm9vZlN0ZXBzIiwiZ2V0UHJvb2ZTdGVwcyIsInNvbWVTdWJBcnJheSIsIm1ldGFTdXBwb3NpdGlvbnNNYXRjaE1ldGFDb25zZXF1ZW50IiwibWV0YVN1cHBvc2l0aW9uc01hdGNoIiwibWF0Y2hNZXRhU3VwcG9zaXRpb25zIiwibWF0Y2hNZXRhdmFyaWFibGVOb2RlIiwibWV0YXZhcmlhYmxlTm9kZSIsIm1ldGF2YXJpYWJsZU5vZGVNYXRjaGVzIiwic29tZSIsImxhYmVsIiwibGFiZWxNYXRjaGVzTWV0YXZhcmlhYmxlTm9kZSIsInRvSlNPTiIsInRva2VucyIsImxhYmVsc0pTT04iLCJtYXAiLCJsYWJlbEpTT04iLCJtZXRhU3VwcG9zaXRpb25zSlNPTiIsIm1ldGFTdXBwb3NpdGlvbiIsIm1ldGFTdXBwb3NpdGlvbkpTT04iLCJtZXRhQ29uc2VxdWVudEpTT04iLCJzdWJzdGl0dXRpb25zSlNPTiIsInN1YnN0aXR1dGlvbiIsInN1YnN0aXR1dGlvbkpTT04iLCJsb2NhbENvbnRleHRKU09OIiwianNvbiIsImZyb21KU09OQW5kRmlsZUNvbnRleHQiLCJDbGFzcyIsIkxhYmVsIiwiTWV0YVN1cHBvc2l0aW9uIiwiTWV0YUNvbnNlcXVlbnQiLCJtZXRhc3RhdGVtZW50Rm9yTWV0YXZhcmlhYmxlU3Vic3RpdHV0aW9uIiwiTWV0YXN0YXRlbWVudEZvck1ldGF2YXJpYWJsZVN1YnN0aXR1dGlvbiIsImZyb21MYWJlbHNNZXRhU3VwcG9zaXRpb25zTWV0YUNvbnNlcXVlbnRTdWJzdGl0dXRpb25zQW5kRmlsZUNvbnRleHQiLCJtYXRjaE1ldGFTdXBwb3NpdGlvbiIsIm1ldGFwcm9vZlN0ZXAiLCJwcnVuZSIsIm1ldGFTdWJwcm9vZk5vZGUiLCJnZXRNZXRhU3VicHJvb2ZOb2RlIiwiZ2V0TWV0YXN0YXRlbWVudE5vZGUiLCJtZXRhU3ViUHJvb2ZNYXRjaGVzIiwibWF0Y2hNZXRhU3VicHJvb2ZOb2RlIiwibWV0YXN0YXRlbWVudE1hdGNoZXMiLCJtYXRjaE1ldGFzdGF0ZW1lbnROb2RlIiwibWV0YVN1cHBvc2l0aW9uTWF0Y2hlcyIsImV2ZXJ5Iiwibm9uVGVybWluYWxOb2RlTWF0Y2hlcyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFVcUJBOzs7NERBUkg7cUVBQ1M7c0VBQ0M7bUZBQ3lCO3FCQUUvQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUdQLElBQUEsQUFBTUEscUNBQUQsQUFBTDthQUFNQSxxQkFDUEMsTUFBTSxFQUFFQyxnQkFBZ0IsRUFBRUMsY0FBYyxFQUFFQyxhQUFhLEVBQUVDLFdBQVc7Z0NBRDdETDtRQUVqQixJQUFJLENBQUNDLE1BQU0sR0FBR0E7UUFDZCxJQUFJLENBQUNDLGdCQUFnQixHQUFHQTtRQUN4QixJQUFJLENBQUNDLGNBQWMsR0FBR0E7UUFDdEIsSUFBSSxDQUFDQyxhQUFhLEdBQUdBO1FBQ3JCLElBQUksQ0FBQ0MsV0FBVyxHQUFHQTs7a0JBTkZMOztZQVNuQk0sS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDTCxNQUFNO1lBQ3BCOzs7WUFFQU0sS0FBQUE7bUJB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