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
            value: function matchLabelMetavariableNode(metavariableNode) {
                var labelMetavariableNodeMatches = this.labels.some(function(label) {
                    var node = metavariableNode, labelMatchesNode = label.matchNode(node);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9tZXRhTGVtbWFNZXRhdGhlb3JlbS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IExhYmVsIGZyb20gXCIuL2xhYmVsXCI7XG5pbXBvcnQgTWV0YUNvbnNlcXVlbnQgZnJvbSBcIi4vbWV0YUNvbnNlcXVlbnRcIjtcbmltcG9ydCBNZXRhU3VwcG9zaXRpb24gZnJvbSBcIi4vbWV0YVN1cHBvc2l0aW9uXCI7XG5pbXBvcnQgTWV0YXN0YXRlbWVudEZvck1ldGF2YXJpYWJsZVN1YnN0aXR1dGlvbiBmcm9tIFwiLi9zdWJzdGl0dXRpb24vbWV0YXN0YXRlbWVudEZvck1ldGF2YXJpYWJsZVwiO1xuXG5pbXBvcnQgeyBwcnVuZSB9IGZyb20gXCIuL3V0aWxpdGllcy9hcnJheVwiO1xuaW1wb3J0IHsgc29tZVN1YkFycmF5IH0gZnJvbSBcIi4vdXRpbGl0aWVzL2FycmF5XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1ldGFMZW1tYU1ldGF0aGVvcmVtIHtcbiAgY29uc3RydWN0b3IobGFiZWxzLCBtZXRhU3VwcG9zaXRpb25zLCBtZXRhQ29uc2VxdWVudCwgc3Vic3RpdHV0aW9ucywgZmlsZUNvbnRleHQpIHtcbiAgICB0aGlzLmxhYmVscyA9IGxhYmVscztcbiAgICB0aGlzLm1ldGFTdXBwb3NpdGlvbnMgPSBtZXRhU3VwcG9zaXRpb25zO1xuICAgIHRoaXMubWV0YUNvbnNlcXVlbnQgPSBtZXRhQ29uc2VxdWVudDtcbiAgICB0aGlzLnN1YnN0aXR1dGlvbnMgPSBzdWJzdGl0dXRpb25zO1xuICAgIHRoaXMuZmlsZUNvbnRleHQgPSBmaWxlQ29udGV4dDtcbiAgfVxuXG4gIGdldExhYmVscygpIHtcbiAgICByZXR1cm4gdGhpcy5sYWJlbHM7XG4gIH1cblxuICBnZXRNZXRhU3VwcG9zaXRpb25zKCkge1xuICAgIHJldHVybiB0aGlzLm1ldGFTdXBwb3NpdGlvbnM7XG4gIH1cblxuICBnZXRNZXRhQ29uc2VxdWVudCgpIHtcbiAgICByZXR1cm4gdGhpcy5tZXRhQ29uc2VxdWVudDtcbiAgfVxuXG4gIGdldFN1YnN0aXR1dGlvbnMoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3Vic3RpdHV0aW9ucztcbiAgfVxuXG4gIGdldEZpbGVDb250ZXh0KCkge1xuICAgIHJldHVybiB0aGlzLmZpbGVDb250ZXh0O1xuICB9XG5cbiAgbWF0Y2hNZXRhc3RhdGVtZW50KG1ldGFzdGF0ZW1lbnROb2RlLCBtZXRhc3RhdGVtZW50TG9jYWxDb250ZXh0KSB7XG4gICAgbGV0IG1ldGFzdGF0ZW1lbnROYXRjaGVzO1xuXG4gICAgY29uc3QgbWV0YVN1cHBvc2l0aW9uc0xlbmd0aCA9IHRoaXMubWV0YVN1cHBvc2l0aW9ucy5sZW5ndGg7XG5cbiAgICBpZiAobWV0YVN1cHBvc2l0aW9uc0xlbmd0aCA9PT0gMCkge1xuICAgICAgY29uc3Qgc3Vic3RpdHV0aW9ucyA9IFtdLFxuICAgICAgICAgICAgbWV0YUNvbnNlcXVlbnRNYXRjaGVzID0gbWF0Y2hNZXRhQ29uc2VxdWVudCh0aGlzLm1ldGFDb25zZXF1ZW50LCBtZXRhc3RhdGVtZW50Tm9kZSwgc3Vic3RpdHV0aW9ucywgdGhpcy5maWxlQ29udGV4dCwgbWV0YXN0YXRlbWVudExvY2FsQ29udGV4dCk7XG5cbiAgICAgIG1ldGFzdGF0ZW1lbnROYXRjaGVzID0gbWV0YUNvbnNlcXVlbnRNYXRjaGVzOyAvLy9cbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgbWV0YXByb29mU3RlcHMgPSBtZXRhc3RhdGVtZW50TG9jYWxDb250ZXh0LmdldFByb29mU3RlcHMoKTtcblxuICAgICAgbWV0YXN0YXRlbWVudE5hdGNoZXMgPSBzb21lU3ViQXJyYXkobWV0YXByb29mU3RlcHMsIG1ldGFTdXBwb3NpdGlvbnNMZW5ndGgsIChtZXRhcHJvb2ZTdGVwcykgPT4ge1xuICAgICAgICBsZXQgbWV0YVN1cHBvc2l0aW9uc01hdGNoTWV0YUNvbnNlcXVlbnQgPSBmYWxzZTtcblxuICAgICAgICBjb25zdCBzdWJzdGl0dXRpb25zID0gW10sXG4gICAgICAgICAgICAgIG1ldGFTdXBwb3NpdGlvbnNNYXRjaCA9IG1hdGNoTWV0YVN1cHBvc2l0aW9ucyh0aGlzLm1ldGFTdXBwb3NpdGlvbnMsIG1ldGFwcm9vZlN0ZXBzLCBzdWJzdGl0dXRpb25zLCB0aGlzLmZpbGVDb250ZXh0LCBtZXRhc3RhdGVtZW50TG9jYWxDb250ZXh0KTtcblxuICAgICAgICBpZiAobWV0YVN1cHBvc2l0aW9uc01hdGNoKSB7XG4gICAgICAgICAgY29uc3QgbWV0YUNvbnNlcXVlbnRNYXRjaGVzID0gbWF0Y2hNZXRhQ29uc2VxdWVudCh0aGlzLm1ldGFDb25zZXF1ZW50LCBtZXRhc3RhdGVtZW50Tm9kZSwgc3Vic3RpdHV0aW9ucywgdGhpcy5maWxlQ29udGV4dCwgbWV0YXN0YXRlbWVudExvY2FsQ29udGV4dCk7XG5cbiAgICAgICAgICBtZXRhU3VwcG9zaXRpb25zTWF0Y2hNZXRhQ29uc2VxdWVudCA9IG1ldGFDb25zZXF1ZW50TWF0Y2hlczsgIC8vL1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKG1ldGFTdXBwb3NpdGlvbnNNYXRjaE1ldGFDb25zZXF1ZW50KSB7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBtZXRhc3RhdGVtZW50TmF0Y2hlcztcbiAgfVxuXG4gIG1hdGNoTGFiZWxNZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUpIHtcbiAgICBjb25zdCBsYWJlbE1ldGF2YXJpYWJsZU5vZGVNYXRjaGVzID0gdGhpcy5sYWJlbHMuc29tZSgobGFiZWwpID0+IHtcbiAgICAgIGNvbnN0IG5vZGUgPSBtZXRhdmFyaWFibGVOb2RlLCAvLy9cbiAgICAgICAgICAgIGxhYmVsTWF0Y2hlc05vZGUgPSBsYWJlbC5tYXRjaE5vZGUobm9kZSk7XG5cbiAgICAgIGlmIChsYWJlbE1hdGNoZXNOb2RlKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIGxhYmVsTWV0YXZhcmlhYmxlTm9kZU1hdGNoZXM7XG4gIH1cblxuICB0b0pTT04odG9rZW5zKSB7XG4gICAgY29uc3QgbGFiZWxzSlNPTiA9IHRoaXMubGFiZWxzLm1hcCgobGFiZWwpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGxhYmVsSlNPTiA9IGxhYmVsLnRvSlNPTih0b2tlbnMpO1xuXG4gICAgICAgICAgICByZXR1cm4gbGFiZWxKU09OO1xuICAgICAgICAgIH0pLFxuICAgICAgICAgIG1ldGFTdXBwb3NpdGlvbnNKU09OID0gdGhpcy5tZXRhU3VwcG9zaXRpb25zLm1hcCgobWV0YVN1cHBvc2l0aW9uKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBtZXRhU3VwcG9zaXRpb25KU09OID0gbWV0YVN1cHBvc2l0aW9uLnRvSlNPTih0b2tlbnMpO1xuXG4gICAgICAgICAgICByZXR1cm4gbWV0YVN1cHBvc2l0aW9uSlNPTjtcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBtZXRhQ29uc2VxdWVudEpTT04gPSB0aGlzLm1ldGFDb25zZXF1ZW50LnRvSlNPTih0b2tlbnMpLFxuICAgICAgICAgIHN1YnN0aXR1dGlvbnNKU09OID0gdGhpcy5zdWJzdGl0dXRpb25zLm1hcCgoc3Vic3RpdHV0aW9uKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBzdWJzdGl0dXRpb25KU09OID0gc3Vic3RpdHV0aW9uLnRvSlNPTigpO1xuXG4gICAgICAgICAgICByZXR1cm4gc3Vic3RpdHV0aW9uSlNPTjtcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBsb2NhbENvbnRleHRKU09OID0gdGhpcy5maWxlQ29udGV4dC50b0pTT04odG9rZW5zKSxcbiAgICAgICAgICBsYWJlbHMgPSBsYWJlbHNKU09OLCAgLy8vXG4gICAgICAgICAgbWV0YVN1cHBvc2l0aW9ucyA9IG1ldGFTdXBwb3NpdGlvbnNKU09OLCAgLy8vXG4gICAgICAgICAgbWV0YUNvbnNlcXVlbnQgPSBtZXRhQ29uc2VxdWVudEpTT04sICAvLy9cbiAgICAgICAgICBzdWJzdGl0dXRpb25zID0gc3Vic3RpdHV0aW9uc0pTT04sICAvLy9cbiAgICAgICAgICBmaWxlQ29udGV4dCA9IGxvY2FsQ29udGV4dEpTT04sICAvLy9cbiAgICAgICAgICBqc29uID0ge1xuICAgICAgICAgICAgbGFiZWxzLFxuICAgICAgICAgICAgbWV0YVN1cHBvc2l0aW9ucyxcbiAgICAgICAgICAgIG1ldGFDb25zZXF1ZW50LFxuICAgICAgICAgICAgc3Vic3RpdHV0aW9ucyxcbiAgICAgICAgICAgIGZpbGVDb250ZXh0XG4gICAgICAgICAgfTtcblxuICAgIHJldHVybiBqc29uO1xuICB9XG5cbiAgc3RhdGljIGZyb21KU09OQW5kRmlsZUNvbnRleHQoQ2xhc3MsIGpzb24sIGZpbGVDb250ZXh0KSB7XG4gICAgbGV0IHsgbGFiZWxzIH0gPSBqc29uO1xuXG4gICAgY29uc3QgbGFiZWxzSlNPTiA9IGxhYmVsczsgIC8vL1xuXG4gICAgbGFiZWxzID0gbGFiZWxzSlNPTi5tYXAoKGxhYmVsSlNPTikgPT4ge1xuICAgICAgY29uc3QganNvbiA9IGxhYmVsSlNPTiwgLy8vXG4gICAgICAgICAgICBsYWJlbCA9IExhYmVsLmZyb21KU09OQW5kRmlsZUNvbnRleHQoanNvbiwgZmlsZUNvbnRleHQpO1xuXG4gICAgICByZXR1cm4gbGFiZWw7XG4gICAgfSk7XG5cbiAgICBsZXQgeyBtZXRhU3VwcG9zaXRpb25zLCBtZXRhQ29uc2VxdWVudCwgc3Vic3RpdHV0aW9ucyB9ID0ganNvbjtcblxuICAgIGNvbnN0IG1ldGFTdXBwb3NpdGlvbnNKU09OID0gbWV0YVN1cHBvc2l0aW9uczsgIC8vL1xuXG4gICAgbWV0YVN1cHBvc2l0aW9ucyA9IG1ldGFTdXBwb3NpdGlvbnNKU09OLm1hcCgobWV0YVN1cHBvc2l0aW9uSlNPTikgPT4ge1xuICAgICAgY29uc3QganNvbiA9IG1ldGFTdXBwb3NpdGlvbkpTT04sIC8vL1xuICAgICAgICAgICAgbWV0YVN1cHBvc2l0aW9uID0gTWV0YVN1cHBvc2l0aW9uLmZyb21KU09OQW5kRmlsZUNvbnRleHQoanNvbiwgZmlsZUNvbnRleHQpO1xuXG4gICAgICByZXR1cm4gbWV0YVN1cHBvc2l0aW9uO1xuICAgIH0pO1xuXG4gICAgY29uc3QgbWV0YUNvbnNlcXVlbnRKU09OID0gbWV0YUNvbnNlcXVlbnQ7ICAvLy9cblxuICAgIGpzb24gPSBtZXRhQ29uc2VxdWVudEpTT047ICAvLy9cblxuICAgIG1ldGFDb25zZXF1ZW50ID0gTWV0YUNvbnNlcXVlbnQuZnJvbUpTT05BbmRGaWxlQ29udGV4dChqc29uLCBmaWxlQ29udGV4dCk7XG5cbiAgICBjb25zdCBzdWJzdGl0dXRpb25zSlNPTiA9IHN1YnN0aXR1dGlvbnM7ICAvLy9cblxuICAgIHN1YnN0aXR1dGlvbnMgPSBzdWJzdGl0dXRpb25zSlNPTi5tYXAoKHN1YnN0aXR1dGlvbkpTT04pID0+IHtcbiAgICAgIGNvbnN0IGpzb24gPSBzdWJzdGl0dXRpb25KU09OLCAgLy8vXG4gICAgICAgICAgICBtZXRhc3RhdGVtZW50Rm9yTWV0YXZhcmlhYmxlU3Vic3RpdHV0aW9uID0gTWV0YXN0YXRlbWVudEZvck1ldGF2YXJpYWJsZVN1YnN0aXR1dGlvbi5mcm9tSlNPTkFuZEZpbGVDb250ZXh0KGpzb24sIGZpbGVDb250ZXh0KSxcbiAgICAgICAgICAgIHN1YnN0aXR1dGlvbiA9IG1ldGFzdGF0ZW1lbnRGb3JNZXRhdmFyaWFibGVTdWJzdGl0dXRpb247ICAvLy9cblxuICAgICAgcmV0dXJuIHN1YnN0aXR1dGlvbjtcbiAgICB9KTtcblxuICAgIHJldHVybiBuZXcgQ2xhc3MobGFiZWxzLCBtZXRhU3VwcG9zaXRpb25zLCBtZXRhQ29uc2VxdWVudCwgc3Vic3RpdHV0aW9ucywgZmlsZUNvbnRleHQpOyAgLy8vXG4gIH1cblxuICBzdGF0aWMgZnJvbUxhYmVsc01ldGFTdXBwb3NpdGlvbnNNZXRhQ29uc2VxdWVudFN1YnN0aXR1dGlvbnNBbmRGaWxlQ29udGV4dChDbGFzcywgbGFiZWxzLCBtZXRhU3VwcG9zaXRpb25zLCBtZXRhQ29uc2VxdWVudCwgc3Vic3RpdHV0aW9ucywgZmlsZUNvbnRleHQpIHsgcmV0dXJuIG5ldyBDbGFzcyhsYWJlbHMsIG1ldGFTdXBwb3NpdGlvbnMsIG1ldGFDb25zZXF1ZW50LCBzdWJzdGl0dXRpb25zLCBmaWxlQ29udGV4dCk7IH1cbn1cblxuZnVuY3Rpb24gbWF0Y2hNZXRhU3VwcG9zaXRpb24obWV0YVN1cHBvc2l0aW9uLCBtZXRhcHJvb2ZTdGVwcywgc3Vic3RpdHV0aW9ucywgZmlsZUNvbnRleHQsIG1ldGFzdGF0ZW1lbnRMb2NhbENvbnRleHQpIHtcbiAgY29uc3QgbWV0YXByb29mU3RlcCA9IHBydW5lKG1ldGFwcm9vZlN0ZXBzLCAobWV0YXByb29mU3RlcCkgPT4ge1xuICAgIGNvbnN0IG1ldGFTdWJwcm9vZk5vZGUgPSBtZXRhcHJvb2ZTdGVwLmdldE1ldGFTdWJwcm9vZk5vZGUoKSxcbiAgICAgICAgICBtZXRhc3RhdGVtZW50Tm9kZSA9IG1ldGFwcm9vZlN0ZXAuZ2V0TWV0YXN0YXRlbWVudE5vZGUoKTtcblxuICAgIGlmIChtZXRhU3VicHJvb2ZOb2RlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBtZXRhU3ViUHJvb2ZNYXRjaGVzID0gbWV0YVN1cHBvc2l0aW9uLm1hdGNoTWV0YVN1YnByb29mTm9kZShtZXRhU3VicHJvb2ZOb2RlLCBzdWJzdGl0dXRpb25zLCBmaWxlQ29udGV4dCwgbWV0YXN0YXRlbWVudExvY2FsQ29udGV4dCk7XG5cbiAgICAgIGlmICghbWV0YVN1YlByb29mTWF0Y2hlcykgeyAgLy8vXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChtZXRhc3RhdGVtZW50Tm9kZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgbWV0YXN0YXRlbWVudE1hdGNoZXMgPSBtZXRhU3VwcG9zaXRpb24ubWF0Y2hNZXRhc3RhdGVtZW50Tm9kZShtZXRhc3RhdGVtZW50Tm9kZSwgc3Vic3RpdHV0aW9ucywgZmlsZUNvbnRleHQsIG1ldGFzdGF0ZW1lbnRMb2NhbENvbnRleHQpO1xuXG4gICAgICBpZiAoIW1ldGFzdGF0ZW1lbnRNYXRjaGVzKSB7ICAvLy9cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfVxuICB9KSB8fCBudWxsO1xuXG4gIGNvbnN0IG1ldGFTdXBwb3NpdGlvbk1hdGNoZXMgPSAobWV0YXByb29mU3RlcCAhPT0gbnVsbCk7XG5cbiAgcmV0dXJuIG1ldGFTdXBwb3NpdGlvbk1hdGNoZXM7XG59XG5cbmZ1bmN0aW9uIG1hdGNoTWV0YVN1cHBvc2l0aW9ucyhtZXRhU3VwcG9zaXRpb25zLCBtZXRhcHJvb2ZTdGVwcywgc3Vic3RpdHV0aW9ucywgZmlsZUNvbnRleHQsIG1ldGFzdGF0ZW1lbnRMb2NhbENvbnRleHQpIHtcbiAgY29uc3QgbWV0YVN1cHBvc2l0aW9uc01hdGNoID0gbWV0YVN1cHBvc2l0aW9ucy5ldmVyeSgobWV0YVN1cHBvc2l0aW9uKSA9PiB7XG4gICAgY29uc3QgbWV0YVN1cHBvc2l0aW9uTWF0Y2hlcyA9IG1hdGNoTWV0YVN1cHBvc2l0aW9uKG1ldGFTdXBwb3NpdGlvbiwgbWV0YXByb29mU3RlcHMsIHN1YnN0aXR1dGlvbnMsIGZpbGVDb250ZXh0LCBtZXRhc3RhdGVtZW50TG9jYWxDb250ZXh0KTtcblxuICAgIGlmIChtZXRhU3VwcG9zaXRpb25NYXRjaGVzKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiBtZXRhU3VwcG9zaXRpb25zTWF0Y2g7XG59XG5cbmZ1bmN0aW9uIG1hdGNoTWV0YUNvbnNlcXVlbnQobWV0YUNvbnNlcXVlbnQsIG1ldGFzdGF0ZW1lbnROb2RlLCBzdWJzdGl0dXRpb25zLCBmaWxlQ29udGV4dCwgbWV0YXN0YXRlbWVudExvY2FsQ29udGV4dCkge1xuICBjb25zdCBub25UZXJtaW5hbE5vZGVNYXRjaGVzID0gbWV0YUNvbnNlcXVlbnQubWF0Y2hNZXRhc3RhdGVtZW50Tm9kZShtZXRhc3RhdGVtZW50Tm9kZSwgc3Vic3RpdHV0aW9ucywgZmlsZUNvbnRleHQsIG1ldGFzdGF0ZW1lbnRMb2NhbENvbnRleHQpLFxuICAgICAgICBtZXRhQ29uc2VxdWVudE1hdGNoZXMgPSBub25UZXJtaW5hbE5vZGVNYXRjaGVzOyAvLy9cblxuICByZXR1cm4gbWV0YUNvbnNlcXVlbnRNYXRjaGVzO1xufVxuIl0sIm5hbWVzIjpbIk1ldGFMZW1tYU1ldGF0aGVvcmVtIiwibGFiZWxzIiwibWV0YVN1cHBvc2l0aW9ucyIsIm1ldGFDb25zZXF1ZW50Iiwic3Vic3RpdHV0aW9ucyIsImZpbGVDb250ZXh0IiwiZ2V0TGFiZWxzIiwiZ2V0TWV0YVN1cHBvc2l0aW9ucyIsImdldE1ldGFDb25zZXF1ZW50IiwiZ2V0U3Vic3RpdHV0aW9ucyIsImdldEZpbGVDb250ZXh0IiwibWF0Y2hNZXRhc3RhdGVtZW50IiwibWV0YXN0YXRlbWVudE5vZGUiLCJtZXRhc3RhdGVtZW50TG9jYWxDb250ZXh0IiwibWV0YXN0YXRlbWVudE5hdGNoZXMiLCJtZXRhU3VwcG9zaXRpb25zTGVuZ3RoIiwibGVuZ3RoIiwibWV0YUNvbnNlcXVlbnRNYXRjaGVzIiwibWF0Y2hNZXRhQ29uc2VxdWVudCIsIm1ldGFwcm9vZlN0ZXBzIiwiZ2V0UHJvb2ZTdGVwcyIsInNvbWVTdWJBcnJheSIsIm1ldGFTdXBwb3NpdGlvbnNNYXRjaE1ldGFDb25zZXF1ZW50IiwibWV0YVN1cHBvc2l0aW9uc01hdGNoIiwibWF0Y2hNZXRhU3VwcG9zaXRpb25zIiwibWF0Y2hMYWJlbE1ldGF2YXJpYWJsZU5vZGUiLCJtZXRhdmFyaWFibGVOb2RlIiwibGFiZWxNZXRhdmFyaWFibGVOb2RlTWF0Y2hlcyIsInNvbWUiLCJsYWJlbCIsIm5vZGUiLCJsYWJlbE1hdGNoZXNOb2RlIiwibWF0Y2hOb2RlIiwidG9KU09OIiwidG9rZW5zIiwibGFiZWxzSlNPTiIsIm1hcCIsImxhYmVsSlNPTiIsIm1ldGFTdXBwb3NpdGlvbnNKU09OIiwibWV0YVN1cHBvc2l0aW9uIiwibWV0YVN1cHBvc2l0aW9uSlNPTiIsIm1ldGFDb25zZXF1ZW50SlNPTiIsInN1YnN0aXR1dGlvbnNKU09OIiwic3Vic3RpdHV0aW9uIiwic3Vic3RpdHV0aW9uSlNPTiIsImxvY2FsQ29udGV4dEpTT04iLCJqc29uIiwiZnJvbUpTT05BbmRGaWxlQ29udGV4dCIsIkNsYXNzIiwiTGFiZWwiLCJNZXRhU3VwcG9zaXRpb24iLCJNZXRhQ29uc2VxdWVudCIsIm1ldGFzdGF0ZW1lbnRGb3JNZXRhdmFyaWFibGVTdWJzdGl0dXRpb24iLCJNZXRhc3RhdGVtZW50Rm9yTWV0YXZhcmlhYmxlU3Vic3RpdHV0aW9uIiwiZnJvbUxhYmVsc01ldGFTdXBwb3NpdGlvbnNNZXRhQ29uc2VxdWVudFN1YnN0aXR1dGlvbnNBbmRGaWxlQ29udGV4dCIsIm1hdGNoTWV0YVN1cHBvc2l0aW9uIiwibWV0YXByb29mU3RlcCIsInBydW5lIiwibWV0YVN1YnByb29mTm9kZSIsImdldE1ldGFTdWJwcm9vZk5vZGUiLCJnZXRNZXRhc3RhdGVtZW50Tm9kZSIsIm1ldGFTdWJQcm9vZk1hdGNoZXMiLCJtYXRjaE1ldGFTdWJwcm9vZk5vZGUiLCJtZXRhc3RhdGVtZW50TWF0Y2hlcyIsIm1hdGNoTWV0YXN0YXRlbWVudE5vZGUiLCJtZXRhU3VwcG9zaXRpb25NYXRjaGVzIiwiZXZlcnkiLCJub25UZXJtaW5hbE5vZGVNYXRjaGVzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQVVxQkE7Ozs0REFSSDtxRUFDUztzRUFDQzttRkFDeUI7cUJBRS9COzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBR1AsSUFBQSxBQUFNQSxxQ0FBRCxBQUFMO2FBQU1BLHFCQUNQQyxNQUFNLEVBQUVDLGdCQUFnQixFQUFFQyxjQUFjLEVBQUVDLGFBQWEsRUFBRUMsV0FBVztnQ0FEN0RMO1FBRWpCLElBQUksQ0FBQ0MsTUFBTSxHQUFHQTtRQUNkLElBQUksQ0FBQ0MsZ0JBQWdCLEdBQUdBO1FBQ3hCLElBQUksQ0FBQ0MsY0FBYyxHQUFH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