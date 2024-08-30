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
                var metastatementNatches = false;
                var metaproofSteps = localMetaContext.getProofSteps(), substitutions = [], metaSuppositionsMatch = matchMetaSuppositions(this.metaSuppositions, metaproofSteps, substitutions, this.fileContext, localMetaContext);
                if (metaSuppositionsMatch) {
                    var metaConsequentMatches = matchMetaConsequent(this.metaConsequent, metastatementNode, substitutions, this.fileContext, localMetaContext);
                    metastatementNatches = metaConsequentMatches; ///
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
function matchMetaSuppositions(metaSuppositions, metaproofSteps, substitutions, fileContext, localMetaContext) {
    metaSuppositions = (0, _array.reverse)(metaSuppositions); ///
    metaproofSteps = (0, _array.reverse)(metaproofSteps); ///
    var metaSuppositionsMatch = (0, _array.correlate)(metaSuppositions, metaproofSteps, function(metaSupposition, metaproofStep) {
        var metaSuppositionMatches = matchMetaSupposition(metaSupposition, metaproofStep, substitutions, fileContext, localMetaContext);
        if (metaSuppositionMatches) {
            return true;
        }
    });
    return metaSuppositionsMatch;
}
function matchMetaSupposition(metaSupposition, metaproofStep, substitutions, fileContext, localMetaContext) {
    var suppositionMatches = false;
    var metaSubproofNode = metaproofStep.getMetaSubproofNode(), metastatementNode = metaproofStep.getMetastatementNode();
    if (metaSubproofNode !== null) {
        var metaSubProofMatches = metaSupposition.matchMetaSubproofNode(metaSubproofNode, substitutions, fileContext, localMetaContext);
        suppositionMatches - metaSubProofMatches; ///
    }
    if (metastatementNode !== null) {
        var metastatementMatches = metaSupposition.matchMetastatementNode(metastatementNode, substitutions, fileContext, localMetaContext);
        suppositionMatches - metastatementMatches; ///
    }
    return suppositionMatches;
}
function matchMetaConsequent(metaConsequent, metastatementNode, substitutions, fileContext, localMetaContext) {
    var nonTerminalNodeMatches = metaConsequent.matchMetastatementNode(metastatementNode, substitutions, fileContext, localMetaContext), metaConsequentMatches = nonTerminalNodeMatches; ///
    return metaConsequentMatches;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9tZXRhTGVtbWFNZXRhdGhlb3JlbS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IExhYmVsIGZyb20gXCIuL2xhYmVsXCI7XG5pbXBvcnQgTWV0YUNvbnNlcXVlbnQgZnJvbSBcIi4vbWV0YUNvbnNlcXVlbnRcIjtcbmltcG9ydCBNZXRhU3VwcG9zaXRpb24gZnJvbSBcIi4vbWV0YVN1cHBvc2l0aW9uXCI7XG5pbXBvcnQgTWV0YXN0YXRlbWVudEZvck1ldGF2YXJpYWJsZVN1YnN0aXR1dGlvbiBmcm9tIFwiLi9zdWJzdGl0dXRpb24vbWV0YXN0YXRlbWVudEZvck1ldGF2YXJpYWJsZVwiO1xuXG5pbXBvcnQgeyByZXZlcnNlLCBjb3JyZWxhdGUgfSBmcm9tIFwiLi91dGlsaXRpZXMvYXJyYXlcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWV0YUxlbW1hTWV0YXRoZW9yZW0ge1xuICBjb25zdHJ1Y3RvcihsYWJlbHMsIG1ldGFTdXBwb3NpdGlvbnMsIG1ldGFDb25zZXF1ZW50LCBzdWJzdGl0dXRpb25zLCBmaWxlQ29udGV4dCkge1xuICAgIHRoaXMubGFiZWxzID0gbGFiZWxzO1xuICAgIHRoaXMubWV0YVN1cHBvc2l0aW9ucyA9IG1ldGFTdXBwb3NpdGlvbnM7XG4gICAgdGhpcy5tZXRhQ29uc2VxdWVudCA9IG1ldGFDb25zZXF1ZW50O1xuICAgIHRoaXMuc3Vic3RpdHV0aW9ucyA9IHN1YnN0aXR1dGlvbnM7XG4gICAgdGhpcy5maWxlQ29udGV4dCA9IGZpbGVDb250ZXh0O1xuICB9XG5cbiAgZ2V0TGFiZWxzKCkge1xuICAgIHJldHVybiB0aGlzLmxhYmVscztcbiAgfVxuXG4gIGdldE1ldGFTdXBwb3NpdGlvbnMoKSB7XG4gICAgcmV0dXJuIHRoaXMubWV0YVN1cHBvc2l0aW9ucztcbiAgfVxuXG4gIGdldE1ldGFDb25zZXF1ZW50KCkge1xuICAgIHJldHVybiB0aGlzLm1ldGFDb25zZXF1ZW50O1xuICB9XG5cbiAgZ2V0U3Vic3RpdHV0aW9ucygpIHtcbiAgICByZXR1cm4gdGhpcy5zdWJzdGl0dXRpb25zO1xuICB9XG5cbiAgZ2V0RmlsZUNvbnRleHQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZmlsZUNvbnRleHQ7XG4gIH1cblxuICBtYXRjaE1ldGFzdGF0ZW1lbnQobWV0YXN0YXRlbWVudE5vZGUsIGxvY2FsTWV0YUNvbnRleHQpIHtcbiAgICBsZXQgbWV0YXN0YXRlbWVudE5hdGNoZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IG1ldGFwcm9vZlN0ZXBzID0gbG9jYWxNZXRhQ29udGV4dC5nZXRQcm9vZlN0ZXBzKCksXG4gICAgICAgICAgc3Vic3RpdHV0aW9ucyA9IFtdLFxuICAgICAgICAgIG1ldGFTdXBwb3NpdGlvbnNNYXRjaCA9IG1hdGNoTWV0YVN1cHBvc2l0aW9ucyh0aGlzLm1ldGFTdXBwb3NpdGlvbnMsIG1ldGFwcm9vZlN0ZXBzLCBzdWJzdGl0dXRpb25zLCB0aGlzLmZpbGVDb250ZXh0LCBsb2NhbE1ldGFDb250ZXh0KTtcblxuICAgIGlmIChtZXRhU3VwcG9zaXRpb25zTWF0Y2gpIHtcbiAgICAgIGNvbnN0IG1ldGFDb25zZXF1ZW50TWF0Y2hlcyA9IG1hdGNoTWV0YUNvbnNlcXVlbnQodGhpcy5tZXRhQ29uc2VxdWVudCwgbWV0YXN0YXRlbWVudE5vZGUsIHN1YnN0aXR1dGlvbnMsIHRoaXMuZmlsZUNvbnRleHQsIGxvY2FsTWV0YUNvbnRleHQpO1xuXG4gICAgICBtZXRhc3RhdGVtZW50TmF0Y2hlcyA9IG1ldGFDb25zZXF1ZW50TWF0Y2hlczsgIC8vL1xuICAgIH1cblxuICAgIHJldHVybiBtZXRhc3RhdGVtZW50TmF0Y2hlcztcbiAgfVxuXG4gIG1hdGNoTWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlKSB7XG4gICAgY29uc3QgbWV0YXZhcmlhYmxlTm9kZU1hdGNoZXMgPSB0aGlzLmxhYmVscy5zb21lKChsYWJlbCkgPT4ge1xuICAgICAgY29uc3QgbGFiZWxNYXRjaGVzTWV0YXZhcmlhYmxlTm9kZSA9IGxhYmVsLm1hdGNoTWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlKTtcblxuICAgICAgaWYgKGxhYmVsTWF0Y2hlc01ldGF2YXJpYWJsZU5vZGUpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gbWV0YXZhcmlhYmxlTm9kZU1hdGNoZXM7XG4gIH1cblxuICB0b0pTT04odG9rZW5zKSB7XG4gICAgY29uc3QgbGFiZWxzSlNPTiA9IHRoaXMubGFiZWxzLm1hcCgobGFiZWwpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGxhYmVsSlNPTiA9IGxhYmVsLnRvSlNPTih0b2tlbnMpO1xuXG4gICAgICAgICAgICByZXR1cm4gbGFiZWxKU09OO1xuICAgICAgICAgIH0pLFxuICAgICAgICAgIG1ldGFTdXBwb3NpdGlvbnNKU09OID0gdGhpcy5tZXRhU3VwcG9zaXRpb25zLm1hcCgobWV0YVN1cHBvc2l0aW9uKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBtZXRhU3VwcG9zaXRpb25KU09OID0gbWV0YVN1cHBvc2l0aW9uLnRvSlNPTih0b2tlbnMpO1xuXG4gICAgICAgICAgICByZXR1cm4gbWV0YVN1cHBvc2l0aW9uSlNPTjtcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBtZXRhQ29uc2VxdWVudEpTT04gPSB0aGlzLm1ldGFDb25zZXF1ZW50LnRvSlNPTih0b2tlbnMpLFxuICAgICAgICAgIHN1YnN0aXR1dGlvbnNKU09OID0gdGhpcy5zdWJzdGl0dXRpb25zLm1hcCgoc3Vic3RpdHV0aW9uKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBzdWJzdGl0dXRpb25KU09OID0gc3Vic3RpdHV0aW9uLnRvSlNPTigpO1xuXG4gICAgICAgICAgICByZXR1cm4gc3Vic3RpdHV0aW9uSlNPTjtcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBsb2NhbENvbnRleHRKU09OID0gdGhpcy5maWxlQ29udGV4dC50b0pTT04odG9rZW5zKSxcbiAgICAgICAgICBsYWJlbHMgPSBsYWJlbHNKU09OLCAgLy8vXG4gICAgICAgICAgbWV0YVN1cHBvc2l0aW9ucyA9IG1ldGFTdXBwb3NpdGlvbnNKU09OLCAgLy8vXG4gICAgICAgICAgbWV0YUNvbnNlcXVlbnQgPSBtZXRhQ29uc2VxdWVudEpTT04sICAvLy9cbiAgICAgICAgICBzdWJzdGl0dXRpb25zID0gc3Vic3RpdHV0aW9uc0pTT04sICAvLy9cbiAgICAgICAgICBmaWxlQ29udGV4dCA9IGxvY2FsQ29udGV4dEpTT04sICAvLy9cbiAgICAgICAgICBqc29uID0ge1xuICAgICAgICAgICAgbGFiZWxzLFxuICAgICAgICAgICAgbWV0YVN1cHBvc2l0aW9ucyxcbiAgICAgICAgICAgIG1ldGFDb25zZXF1ZW50LFxuICAgICAgICAgICAgc3Vic3RpdHV0aW9ucyxcbiAgICAgICAgICAgIGZpbGVDb250ZXh0XG4gICAgICAgICAgfTtcblxuICAgIHJldHVybiBqc29uO1xuICB9XG5cbiAgc3RhdGljIGZyb21KU09OQW5kRmlsZUNvbnRleHQoQ2xhc3MsIGpzb24sIGZpbGVDb250ZXh0KSB7XG4gICAgbGV0IHsgbGFiZWxzIH0gPSBqc29uO1xuXG4gICAgY29uc3QgbGFiZWxzSlNPTiA9IGxhYmVsczsgIC8vL1xuXG4gICAgbGFiZWxzID0gbGFiZWxzSlNPTi5tYXAoKGxhYmVsSlNPTikgPT4ge1xuICAgICAgY29uc3QganNvbiA9IGxhYmVsSlNPTiwgLy8vXG4gICAgICAgICAgICBsYWJlbCA9IExhYmVsLmZyb21KU09OQW5kRmlsZUNvbnRleHQoanNvbiwgZmlsZUNvbnRleHQpO1xuXG4gICAgICByZXR1cm4gbGFiZWw7XG4gICAgfSk7XG5cbiAgICBsZXQgeyBtZXRhU3VwcG9zaXRpb25zLCBtZXRhQ29uc2VxdWVudCwgc3Vic3RpdHV0aW9ucyB9ID0ganNvbjtcblxuICAgIGNvbnN0IG1ldGFTdXBwb3NpdGlvbnNKU09OID0gbWV0YVN1cHBvc2l0aW9uczsgIC8vL1xuXG4gICAgbWV0YVN1cHBvc2l0aW9ucyA9IG1ldGFTdXBwb3NpdGlvbnNKU09OLm1hcCgobWV0YVN1cHBvc2l0aW9uSlNPTikgPT4ge1xuICAgICAgY29uc3QganNvbiA9IG1ldGFTdXBwb3NpdGlvbkpTT04sIC8vL1xuICAgICAgICAgICAgbWV0YVN1cHBvc2l0aW9uID0gTWV0YVN1cHBvc2l0aW9uLmZyb21KU09OQW5kRmlsZUNvbnRleHQoanNvbiwgZmlsZUNvbnRleHQpO1xuXG4gICAgICByZXR1cm4gbWV0YVN1cHBvc2l0aW9uO1xuICAgIH0pO1xuXG4gICAgY29uc3QgbWV0YUNvbnNlcXVlbnRKU09OID0gbWV0YUNvbnNlcXVlbnQ7ICAvLy9cblxuICAgIGpzb24gPSBtZXRhQ29uc2VxdWVudEpTT047ICAvLy9cblxuICAgIG1ldGFDb25zZXF1ZW50ID0gTWV0YUNvbnNlcXVlbnQuZnJvbUpTT05BbmRGaWxlQ29udGV4dChqc29uLCBmaWxlQ29udGV4dCk7XG5cbiAgICBjb25zdCBzdWJzdGl0dXRpb25zSlNPTiA9IHN1YnN0aXR1dGlvbnM7ICAvLy9cblxuICAgIHN1YnN0aXR1dGlvbnMgPSBzdWJzdGl0dXRpb25zSlNPTi5tYXAoKHN1YnN0aXR1dGlvbkpTT04pID0+IHtcbiAgICAgIGNvbnN0IGpzb24gPSBzdWJzdGl0dXRpb25KU09OLCAgLy8vXG4gICAgICAgICAgICBtZXRhc3RhdGVtZW50Rm9yTWV0YXZhcmlhYmxlU3Vic3RpdHV0aW9uID0gTWV0YXN0YXRlbWVudEZvck1ldGF2YXJpYWJsZVN1YnN0aXR1dGlvbi5mcm9tSlNPTkFuZEZpbGVDb250ZXh0KGpzb24sIGZpbGVDb250ZXh0KSxcbiAgICAgICAgICAgIHN1YnN0aXR1dGlvbiA9IG1ldGFzdGF0ZW1lbnRGb3JNZXRhdmFyaWFibGVTdWJzdGl0dXRpb247ICAvLy9cblxuICAgICAgcmV0dXJuIHN1YnN0aXR1dGlvbjtcbiAgICB9KTtcblxuICAgIHJldHVybiBuZXcgQ2xhc3MobGFiZWxzLCBtZXRhU3VwcG9zaXRpb25zLCBtZXRhQ29uc2VxdWVudCwgc3Vic3RpdHV0aW9ucywgZmlsZUNvbnRleHQpOyAgLy8vXG4gIH1cblxuICBzdGF0aWMgZnJvbUxhYmVsc01ldGFTdXBwb3NpdGlvbnNNZXRhQ29uc2VxdWVudFN1YnN0aXR1dGlvbnNBbmRGaWxlQ29udGV4dChDbGFzcywgbGFiZWxzLCBtZXRhU3VwcG9zaXRpb25zLCBtZXRhQ29uc2VxdWVudCwgc3Vic3RpdHV0aW9ucywgZmlsZUNvbnRleHQpIHsgcmV0dXJuIG5ldyBDbGFzcyhsYWJlbHMsIG1ldGFTdXBwb3NpdGlvbnMsIG1ldGFDb25zZXF1ZW50LCBzdWJzdGl0dXRpb25zLCBmaWxlQ29udGV4dCk7IH1cbn1cblxuZnVuY3Rpb24gbWF0Y2hNZXRhU3VwcG9zaXRpb25zKG1ldGFTdXBwb3NpdGlvbnMsIG1ldGFwcm9vZlN0ZXBzLCBzdWJzdGl0dXRpb25zLCBmaWxlQ29udGV4dCwgbG9jYWxNZXRhQ29udGV4dCkge1xuICBtZXRhU3VwcG9zaXRpb25zID0gcmV2ZXJzZShtZXRhU3VwcG9zaXRpb25zKTsgLy8vXG5cbiAgbWV0YXByb29mU3RlcHMgPSByZXZlcnNlKG1ldGFwcm9vZlN0ZXBzKTsgLy8vXG5cbiAgY29uc3QgbWV0YVN1cHBvc2l0aW9uc01hdGNoID0gY29ycmVsYXRlKG1ldGFTdXBwb3NpdGlvbnMsIG1ldGFwcm9vZlN0ZXBzLCAobWV0YVN1cHBvc2l0aW9uLCBtZXRhcHJvb2ZTdGVwKSA9PiB7XG4gICAgY29uc3QgbWV0YVN1cHBvc2l0aW9uTWF0Y2hlcyA9IG1hdGNoTWV0YVN1cHBvc2l0aW9uKG1ldGFTdXBwb3NpdGlvbiwgbWV0YXByb29mU3RlcCwgc3Vic3RpdHV0aW9ucywgZmlsZUNvbnRleHQsIGxvY2FsTWV0YUNvbnRleHQpO1xuXG4gICAgaWYgKG1ldGFTdXBwb3NpdGlvbk1hdGNoZXMpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIG1ldGFTdXBwb3NpdGlvbnNNYXRjaDtcbn1cblxuZnVuY3Rpb24gbWF0Y2hNZXRhU3VwcG9zaXRpb24obWV0YVN1cHBvc2l0aW9uLCBtZXRhcHJvb2ZTdGVwLCBzdWJzdGl0dXRpb25zLCBmaWxlQ29udGV4dCwgbG9jYWxNZXRhQ29udGV4dCkge1xuICBsZXQgc3VwcG9zaXRpb25NYXRjaGVzID0gZmFsc2U7XG5cbiAgY29uc3QgbWV0YVN1YnByb29mTm9kZSA9IG1ldGFwcm9vZlN0ZXAuZ2V0TWV0YVN1YnByb29mTm9kZSgpLFxuICAgICAgICBtZXRhc3RhdGVtZW50Tm9kZSA9IG1ldGFwcm9vZlN0ZXAuZ2V0TWV0YXN0YXRlbWVudE5vZGUoKTtcblxuICBpZiAobWV0YVN1YnByb29mTm9kZSAhPT0gbnVsbCkge1xuICAgIGNvbnN0IG1ldGFTdWJQcm9vZk1hdGNoZXMgPSBtZXRhU3VwcG9zaXRpb24ubWF0Y2hNZXRhU3VicHJvb2ZOb2RlKG1ldGFTdWJwcm9vZk5vZGUsIHN1YnN0aXR1dGlvbnMsIGZpbGVDb250ZXh0LCBsb2NhbE1ldGFDb250ZXh0KTtcblxuICAgIHN1cHBvc2l0aW9uTWF0Y2hlcyAtIG1ldGFTdWJQcm9vZk1hdGNoZXM7IC8vL1xuICB9XG5cbiAgaWYgKG1ldGFzdGF0ZW1lbnROb2RlICE9PSBudWxsKSB7XG4gICAgY29uc3QgbWV0YXN0YXRlbWVudE1hdGNoZXMgPSBtZXRhU3VwcG9zaXRpb24ubWF0Y2hNZXRhc3RhdGVtZW50Tm9kZShtZXRhc3RhdGVtZW50Tm9kZSwgc3Vic3RpdHV0aW9ucywgZmlsZUNvbnRleHQsIGxvY2FsTWV0YUNvbnRleHQpO1xuXG4gICAgc3VwcG9zaXRpb25NYXRjaGVzIC0gbWV0YXN0YXRlbWVudE1hdGNoZXM7IC8vL1xuICB9XG5cbiAgcmV0dXJuIHN1cHBvc2l0aW9uTWF0Y2hlcztcbn1cblxuZnVuY3Rpb24gbWF0Y2hNZXRhQ29uc2VxdWVudChtZXRhQ29uc2VxdWVudCwgbWV0YXN0YXRlbWVudE5vZGUsIHN1YnN0aXR1dGlvbnMsIGZpbGVDb250ZXh0LCBsb2NhbE1ldGFDb250ZXh0KSB7XG4gIGNvbnN0IG5vblRlcm1pbmFsTm9kZU1hdGNoZXMgPSBtZXRhQ29uc2VxdWVudC5tYXRjaE1ldGFzdGF0ZW1lbnROb2RlKG1ldGFzdGF0ZW1lbnROb2RlLCBzdWJzdGl0dXRpb25zLCBmaWxlQ29udGV4dCwgbG9jYWxNZXRhQ29udGV4dCksXG4gICAgICAgIG1ldGFDb25zZXF1ZW50TWF0Y2hlcyA9IG5vblRlcm1pbmFsTm9kZU1hdGNoZXM7IC8vL1xuXG4gIHJldHVybiBtZXRhQ29uc2VxdWVudE1hdGNoZXM7XG59XG4iXSwibmFtZXMiOlsiTWV0YUxlbW1hTWV0YXRoZW9yZW0iLCJsYWJlbHMiLCJtZXRhU3VwcG9zaXRpb25zIiwibWV0YUNvbnNlcXVlbnQiLCJzdWJzdGl0dXRpb25zIiwiZmlsZUNvbnRleHQiLCJnZXRMYWJlbHMiLCJnZXRNZXRhU3VwcG9zaXRpb25zIiwiZ2V0TWV0YUNvbnNlcXVlbnQiLCJnZXRTdWJzdGl0dXRpb25zIiwiZ2V0RmlsZUNvbnRleHQiLCJtYXRjaE1ldGFzdGF0ZW1lbnQiLCJtZXRhc3RhdGVtZW50Tm9kZSIsImxvY2FsTWV0YUNvbnRleHQiLCJtZXRhc3RhdGVtZW50TmF0Y2hlcyIsIm1ldGFwcm9vZlN0ZXBzIiwiZ2V0UHJvb2ZTdGVwcyIsIm1ldGFTdXBwb3NpdGlvbnNNYXRjaCIsIm1hdGNoTWV0YVN1cHBvc2l0aW9ucyIsIm1ldGFDb25zZXF1ZW50TWF0Y2hlcyIsIm1hdGNoTWV0YUNvbnNlcXVlbnQiLCJtYXRjaE1ldGF2YXJpYWJsZU5vZGUiLCJtZXRhdmFyaWFibGVOb2RlIiwibWV0YXZhcmlhYmxlTm9kZU1hdGNoZXMiLCJzb21lIiwibGFiZWwiLCJsYWJlbE1hdGNoZXNNZXRhdmFyaWFibGVOb2RlIiwidG9KU09OIiwidG9rZW5zIiwibGFiZWxzSlNPTiIsIm1hcCIsImxhYmVsSlNPTiIsIm1ldGFTdXBwb3NpdGlvbnNKU09OIiwibWV0YVN1cHBvc2l0aW9uIiwibWV0YVN1cHBvc2l0aW9uSlNPTiIsIm1ldGFDb25zZXF1ZW50SlNPTiIsInN1YnN0aXR1dGlvbnNKU09OIiwic3Vic3RpdHV0aW9uIiwic3Vic3RpdHV0aW9uSlNPTiIsImxvY2FsQ29udGV4dEpTT04iLCJqc29uIiwiZnJvbUpTT05BbmRGaWxlQ29udGV4dCIsIkNsYXNzIiwiTGFiZWwiLCJNZXRhU3VwcG9zaXRpb24iLCJNZXRhQ29uc2VxdWVudCIsIm1ldGFzdGF0ZW1lbnRGb3JNZXRhdmFyaWFibGVTdWJzdGl0dXRpb24iLCJNZXRhc3RhdGVtZW50Rm9yTWV0YXZhcmlhYmxlU3Vic3RpdHV0aW9uIiwiZnJvbUxhYmVsc01ldGFTdXBwb3NpdGlvbnNNZXRhQ29uc2VxdWVudFN1YnN0aXR1dGlvbnNBbmRGaWxlQ29udGV4dCIsInJldmVyc2UiLCJjb3JyZWxhdGUiLCJtZXRhcHJvb2ZTdGVwIiwibWV0YVN1cHBvc2l0aW9uTWF0Y2hlcyIsIm1hdGNoTWV0YVN1cHBvc2l0aW9uIiwic3VwcG9zaXRpb25NYXRjaGVzIiwibWV0YVN1YnByb29mTm9kZSIsImdldE1ldGFTdWJwcm9vZk5vZGUiLCJnZXRNZXRhc3RhdGVtZW50Tm9kZSIsIm1ldGFTdWJQcm9vZk1hdGNoZXMiLCJtYXRjaE1ldGFTdWJwcm9vZk5vZGUiLCJtZXRhc3RhdGVtZW50TWF0Y2hlcyIsIm1hdGNoTWV0YXN0YXRlbWVudE5vZGUiLCJub25UZXJtaW5hbE5vZGVNYXRjaGVzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQVNxQkE7Ozs0REFQSDtxRUFDUztzRUFDQzttRkFDeUI7cUJBRWxCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXBCLElBQUEsQUFBTUEscUNBQUQsQUFBTDthQUFNQSxxQkFDUEMsTUFBTSxFQUFFQyxnQkFBZ0IsRUFBRUMsY0FBYyxFQUFFQyxhQUFhLEVBQUVDLFdBQVc7Z0NBRDdETDtRQUVqQixJQUFJLENBQUNDLE1BQU0sR0FBR0E7UUFDZCxJQUFJLENBQUNDLGdCQUFnQixHQUFHQTtRQUN4QixJQUFJLENBQUNDLGNBQWMsR0FBR0E7UUFDdEIsSUFBSSxDQUFDQyxhQUFhLEdBQUdBO1FBQ3JCLElBQUks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