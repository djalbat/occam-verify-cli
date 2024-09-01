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
    var matchesMetaSupposition = false;
    var metaSubproofNode = metaproofStep.getMetaSubproofNode(), metastatementNode = metaproofStep.getMetastatementNode();
    if (metaSubproofNode !== null) {
        var metaSuppositionMatchesMetaSubproofNode = metaSupposition.matchMetaSubproofNode(metaSubproofNode, substitutions, fileContext, localMetaContext);
        matchesMetaSupposition - metaSuppositionMatchesMetaSubproofNode; ///
    }
    if (metastatementNode !== null) {
        var metaSuppositionMatchesMetastatementNode = metaSupposition.matchMetastatementNode(metastatementNode, substitutions, fileContext, localMetaContext);
        matchesMetaSupposition - metaSuppositionMatchesMetastatementNode; ///
    }
    return matchesMetaSupposition;
}
function matchMetaConsequent(metaConsequent, metastatementNode, substitutions, fileContext, localMetaContext) {
    var metaConsequentMatchesMetastatementNode = metaConsequent.matchMetastatementNode(metastatementNode, substitutions, fileContext, localMetaContext), metaConsequentMatches = metaConsequentMatchesMetastatementNode; ///
    return metaConsequentMatches;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9tZXRhTGVtbWFNZXRhdGhlb3JlbS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IExhYmVsIGZyb20gXCIuL2xhYmVsXCI7XG5pbXBvcnQgTWV0YUNvbnNlcXVlbnQgZnJvbSBcIi4vbWV0YUNvbnNlcXVlbnRcIjtcbmltcG9ydCBNZXRhU3VwcG9zaXRpb24gZnJvbSBcIi4vbWV0YVN1cHBvc2l0aW9uXCI7XG5pbXBvcnQgTWV0YXN0YXRlbWVudEZvck1ldGF2YXJpYWJsZVN1YnN0aXR1dGlvbiBmcm9tIFwiLi9zdWJzdGl0dXRpb24vbWV0YXN0YXRlbWVudEZvck1ldGF2YXJpYWJsZVwiO1xuXG5pbXBvcnQgeyByZXZlcnNlLCBjb3JyZWxhdGUgfSBmcm9tIFwiLi91dGlsaXRpZXMvYXJyYXlcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWV0YUxlbW1hTWV0YXRoZW9yZW0ge1xuICBjb25zdHJ1Y3RvcihsYWJlbHMsIG1ldGFTdXBwb3NpdGlvbnMsIG1ldGFDb25zZXF1ZW50LCBzdWJzdGl0dXRpb25zLCBmaWxlQ29udGV4dCkge1xuICAgIHRoaXMubGFiZWxzID0gbGFiZWxzO1xuICAgIHRoaXMubWV0YVN1cHBvc2l0aW9ucyA9IG1ldGFTdXBwb3NpdGlvbnM7XG4gICAgdGhpcy5tZXRhQ29uc2VxdWVudCA9IG1ldGFDb25zZXF1ZW50O1xuICAgIHRoaXMuc3Vic3RpdHV0aW9ucyA9IHN1YnN0aXR1dGlvbnM7XG4gICAgdGhpcy5maWxlQ29udGV4dCA9IGZpbGVDb250ZXh0O1xuICB9XG5cbiAgZ2V0TGFiZWxzKCkge1xuICAgIHJldHVybiB0aGlzLmxhYmVscztcbiAgfVxuXG4gIGdldE1ldGFTdXBwb3NpdGlvbnMoKSB7XG4gICAgcmV0dXJuIHRoaXMubWV0YVN1cHBvc2l0aW9ucztcbiAgfVxuXG4gIGdldE1ldGFDb25zZXF1ZW50KCkge1xuICAgIHJldHVybiB0aGlzLm1ldGFDb25zZXF1ZW50O1xuICB9XG5cbiAgZ2V0U3Vic3RpdHV0aW9ucygpIHtcbiAgICByZXR1cm4gdGhpcy5zdWJzdGl0dXRpb25zO1xuICB9XG5cbiAgZ2V0RmlsZUNvbnRleHQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZmlsZUNvbnRleHQ7XG4gIH1cblxuICBtYXRjaE1ldGFzdGF0ZW1lbnQobWV0YXN0YXRlbWVudE5vZGUsIGxvY2FsTWV0YUNvbnRleHQpIHtcbiAgICBsZXQgbWV0YXN0YXRlbWVudE5hdGNoZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IG1ldGFwcm9vZlN0ZXBzID0gbG9jYWxNZXRhQ29udGV4dC5nZXRQcm9vZlN0ZXBzKCksXG4gICAgICAgICAgc3Vic3RpdHV0aW9ucyA9IFtdLFxuICAgICAgICAgIG1ldGFTdXBwb3NpdGlvbnNNYXRjaCA9IG1hdGNoTWV0YVN1cHBvc2l0aW9ucyh0aGlzLm1ldGFTdXBwb3NpdGlvbnMsIG1ldGFwcm9vZlN0ZXBzLCBzdWJzdGl0dXRpb25zLCB0aGlzLmZpbGVDb250ZXh0LCBsb2NhbE1ldGFDb250ZXh0KTtcblxuICAgIGlmIChtZXRhU3VwcG9zaXRpb25zTWF0Y2gpIHtcbiAgICAgIGNvbnN0IG1ldGFDb25zZXF1ZW50TWF0Y2hlcyA9IG1hdGNoTWV0YUNvbnNlcXVlbnQodGhpcy5tZXRhQ29uc2VxdWVudCwgbWV0YXN0YXRlbWVudE5vZGUsIHN1YnN0aXR1dGlvbnMsIHRoaXMuZmlsZUNvbnRleHQsIGxvY2FsTWV0YUNvbnRleHQpO1xuXG4gICAgICBtZXRhc3RhdGVtZW50TmF0Y2hlcyA9IG1ldGFDb25zZXF1ZW50TWF0Y2hlczsgIC8vL1xuICAgIH1cblxuICAgIHJldHVybiBtZXRhc3RhdGVtZW50TmF0Y2hlcztcbiAgfVxuXG4gIG1hdGNoTWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlKSB7XG4gICAgY29uc3QgbWF0Y2hlc01ldGF2YXJpYWJsZU5vZGUgPSB0aGlzLmxhYmVscy5zb21lKChsYWJlbCkgPT4ge1xuICAgICAgY29uc3QgbGFiZWxNYXRjaGVzTWV0YXZhcmlhYmxlTm9kZSA9IGxhYmVsLm1hdGNoTWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlKTtcblxuICAgICAgaWYgKGxhYmVsTWF0Y2hlc01ldGF2YXJpYWJsZU5vZGUpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gbWF0Y2hlc01ldGF2YXJpYWJsZU5vZGU7XG4gIH1cblxuICB0b0pTT04odG9rZW5zKSB7XG4gICAgY29uc3QgbGFiZWxzSlNPTiA9IHRoaXMubGFiZWxzLm1hcCgobGFiZWwpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGxhYmVsSlNPTiA9IGxhYmVsLnRvSlNPTih0b2tlbnMpO1xuXG4gICAgICAgICAgICByZXR1cm4gbGFiZWxKU09OO1xuICAgICAgICAgIH0pLFxuICAgICAgICAgIG1ldGFTdXBwb3NpdGlvbnNKU09OID0gdGhpcy5tZXRhU3VwcG9zaXRpb25zLm1hcCgobWV0YVN1cHBvc2l0aW9uKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBtZXRhU3VwcG9zaXRpb25KU09OID0gbWV0YVN1cHBvc2l0aW9uLnRvSlNPTih0b2tlbnMpO1xuXG4gICAgICAgICAgICByZXR1cm4gbWV0YVN1cHBvc2l0aW9uSlNPTjtcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBtZXRhQ29uc2VxdWVudEpTT04gPSB0aGlzLm1ldGFDb25zZXF1ZW50LnRvSlNPTih0b2tlbnMpLFxuICAgICAgICAgIHN1YnN0aXR1dGlvbnNKU09OID0gdGhpcy5zdWJzdGl0dXRpb25zLm1hcCgoc3Vic3RpdHV0aW9uKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBzdWJzdGl0dXRpb25KU09OID0gc3Vic3RpdHV0aW9uLnRvSlNPTigpO1xuXG4gICAgICAgICAgICByZXR1cm4gc3Vic3RpdHV0aW9uSlNPTjtcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBsb2NhbENvbnRleHRKU09OID0gdGhpcy5maWxlQ29udGV4dC50b0pTT04odG9rZW5zKSxcbiAgICAgICAgICBsYWJlbHMgPSBsYWJlbHNKU09OLCAgLy8vXG4gICAgICAgICAgbWV0YVN1cHBvc2l0aW9ucyA9IG1ldGFTdXBwb3NpdGlvbnNKU09OLCAgLy8vXG4gICAgICAgICAgbWV0YUNvbnNlcXVlbnQgPSBtZXRhQ29uc2VxdWVudEpTT04sICAvLy9cbiAgICAgICAgICBzdWJzdGl0dXRpb25zID0gc3Vic3RpdHV0aW9uc0pTT04sICAvLy9cbiAgICAgICAgICBmaWxlQ29udGV4dCA9IGxvY2FsQ29udGV4dEpTT04sICAvLy9cbiAgICAgICAgICBqc29uID0ge1xuICAgICAgICAgICAgbGFiZWxzLFxuICAgICAgICAgICAgbWV0YVN1cHBvc2l0aW9ucyxcbiAgICAgICAgICAgIG1ldGFDb25zZXF1ZW50LFxuICAgICAgICAgICAgc3Vic3RpdHV0aW9ucyxcbiAgICAgICAgICAgIGZpbGVDb250ZXh0XG4gICAgICAgICAgfTtcblxuICAgIHJldHVybiBqc29uO1xuICB9XG5cbiAgc3RhdGljIGZyb21KU09OQW5kRmlsZUNvbnRleHQoQ2xhc3MsIGpzb24sIGZpbGVDb250ZXh0KSB7XG4gICAgbGV0IHsgbGFiZWxzIH0gPSBqc29uO1xuXG4gICAgY29uc3QgbGFiZWxzSlNPTiA9IGxhYmVsczsgIC8vL1xuXG4gICAgbGFiZWxzID0gbGFiZWxzSlNPTi5tYXAoKGxhYmVsSlNPTikgPT4ge1xuICAgICAgY29uc3QganNvbiA9IGxhYmVsSlNPTiwgLy8vXG4gICAgICAgICAgICBsYWJlbCA9IExhYmVsLmZyb21KU09OQW5kRmlsZUNvbnRleHQoanNvbiwgZmlsZUNvbnRleHQpO1xuXG4gICAgICByZXR1cm4gbGFiZWw7XG4gICAgfSk7XG5cbiAgICBsZXQgeyBtZXRhU3VwcG9zaXRpb25zLCBtZXRhQ29uc2VxdWVudCwgc3Vic3RpdHV0aW9ucyB9ID0ganNvbjtcblxuICAgIGNvbnN0IG1ldGFTdXBwb3NpdGlvbnNKU09OID0gbWV0YVN1cHBvc2l0aW9uczsgIC8vL1xuXG4gICAgbWV0YVN1cHBvc2l0aW9ucyA9IG1ldGFTdXBwb3NpdGlvbnNKU09OLm1hcCgobWV0YVN1cHBvc2l0aW9uSlNPTikgPT4ge1xuICAgICAgY29uc3QganNvbiA9IG1ldGFTdXBwb3NpdGlvbkpTT04sIC8vL1xuICAgICAgICAgICAgbWV0YVN1cHBvc2l0aW9uID0gTWV0YVN1cHBvc2l0aW9uLmZyb21KU09OQW5kRmlsZUNvbnRleHQoanNvbiwgZmlsZUNvbnRleHQpO1xuXG4gICAgICByZXR1cm4gbWV0YVN1cHBvc2l0aW9uO1xuICAgIH0pO1xuXG4gICAgY29uc3QgbWV0YUNvbnNlcXVlbnRKU09OID0gbWV0YUNvbnNlcXVlbnQ7ICAvLy9cblxuICAgIGpzb24gPSBtZXRhQ29uc2VxdWVudEpTT047ICAvLy9cblxuICAgIG1ldGFDb25zZXF1ZW50ID0gTWV0YUNvbnNlcXVlbnQuZnJvbUpTT05BbmRGaWxlQ29udGV4dChqc29uLCBmaWxlQ29udGV4dCk7XG5cbiAgICBjb25zdCBzdWJzdGl0dXRpb25zSlNPTiA9IHN1YnN0aXR1dGlvbnM7ICAvLy9cblxuICAgIHN1YnN0aXR1dGlvbnMgPSBzdWJzdGl0dXRpb25zSlNPTi5tYXAoKHN1YnN0aXR1dGlvbkpTT04pID0+IHtcbiAgICAgIGNvbnN0IGpzb24gPSBzdWJzdGl0dXRpb25KU09OLCAgLy8vXG4gICAgICAgICAgICBtZXRhc3RhdGVtZW50Rm9yTWV0YXZhcmlhYmxlU3Vic3RpdHV0aW9uID0gTWV0YXN0YXRlbWVudEZvck1ldGF2YXJpYWJsZVN1YnN0aXR1dGlvbi5mcm9tSlNPTkFuZEZpbGVDb250ZXh0KGpzb24sIGZpbGVDb250ZXh0KSxcbiAgICAgICAgICAgIHN1YnN0aXR1dGlvbiA9IG1ldGFzdGF0ZW1lbnRGb3JNZXRhdmFyaWFibGVTdWJzdGl0dXRpb247ICAvLy9cblxuICAgICAgcmV0dXJuIHN1YnN0aXR1dGlvbjtcbiAgICB9KTtcblxuICAgIHJldHVybiBuZXcgQ2xhc3MobGFiZWxzLCBtZXRhU3VwcG9zaXRpb25zLCBtZXRhQ29uc2VxdWVudCwgc3Vic3RpdHV0aW9ucywgZmlsZUNvbnRleHQpOyAgLy8vXG4gIH1cblxuICBzdGF0aWMgZnJvbUxhYmVsc01ldGFTdXBwb3NpdGlvbnNNZXRhQ29uc2VxdWVudFN1YnN0aXR1dGlvbnNBbmRGaWxlQ29udGV4dChDbGFzcywgbGFiZWxzLCBtZXRhU3VwcG9zaXRpb25zLCBtZXRhQ29uc2VxdWVudCwgc3Vic3RpdHV0aW9ucywgZmlsZUNvbnRleHQpIHsgcmV0dXJuIG5ldyBDbGFzcyhsYWJlbHMsIG1ldGFTdXBwb3NpdGlvbnMsIG1ldGFDb25zZXF1ZW50LCBzdWJzdGl0dXRpb25zLCBmaWxlQ29udGV4dCk7IH1cbn1cblxuZnVuY3Rpb24gbWF0Y2hNZXRhU3VwcG9zaXRpb25zKG1ldGFTdXBwb3NpdGlvbnMsIG1ldGFwcm9vZlN0ZXBzLCBzdWJzdGl0dXRpb25zLCBmaWxlQ29udGV4dCwgbG9jYWxNZXRhQ29udGV4dCkge1xuICBtZXRhU3VwcG9zaXRpb25zID0gcmV2ZXJzZShtZXRhU3VwcG9zaXRpb25zKTsgLy8vXG5cbiAgbWV0YXByb29mU3RlcHMgPSByZXZlcnNlKG1ldGFwcm9vZlN0ZXBzKTsgLy8vXG5cbiAgY29uc3QgbWV0YVN1cHBvc2l0aW9uc01hdGNoID0gY29ycmVsYXRlKG1ldGFTdXBwb3NpdGlvbnMsIG1ldGFwcm9vZlN0ZXBzLCAobWV0YVN1cHBvc2l0aW9uLCBtZXRhcHJvb2ZTdGVwKSA9PiB7XG4gICAgY29uc3QgbWV0YVN1cHBvc2l0aW9uTWF0Y2hlcyA9IG1hdGNoTWV0YVN1cHBvc2l0aW9uKG1ldGFTdXBwb3NpdGlvbiwgbWV0YXByb29mU3RlcCwgc3Vic3RpdHV0aW9ucywgZmlsZUNvbnRleHQsIGxvY2FsTWV0YUNvbnRleHQpO1xuXG4gICAgaWYgKG1ldGFTdXBwb3NpdGlvbk1hdGNoZXMpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIG1ldGFTdXBwb3NpdGlvbnNNYXRjaDtcbn1cblxuZnVuY3Rpb24gbWF0Y2hNZXRhU3VwcG9zaXRpb24obWV0YVN1cHBvc2l0aW9uLCBtZXRhcHJvb2ZTdGVwLCBzdWJzdGl0dXRpb25zLCBmaWxlQ29udGV4dCwgbG9jYWxNZXRhQ29udGV4dCkge1xuICBsZXQgbWF0Y2hlc01ldGFTdXBwb3NpdGlvbiA9IGZhbHNlO1xuXG4gIGNvbnN0IG1ldGFTdWJwcm9vZk5vZGUgPSBtZXRhcHJvb2ZTdGVwLmdldE1ldGFTdWJwcm9vZk5vZGUoKSxcbiAgICAgICAgbWV0YXN0YXRlbWVudE5vZGUgPSBtZXRhcHJvb2ZTdGVwLmdldE1ldGFzdGF0ZW1lbnROb2RlKCk7XG5cbiAgaWYgKG1ldGFTdWJwcm9vZk5vZGUgIT09IG51bGwpIHtcbiAgICBjb25zdCBtZXRhU3VwcG9zaXRpb25NYXRjaGVzTWV0YVN1YnByb29mTm9kZSA9IG1ldGFTdXBwb3NpdGlvbi5tYXRjaE1ldGFTdWJwcm9vZk5vZGUobWV0YVN1YnByb29mTm9kZSwgc3Vic3RpdHV0aW9ucywgZmlsZUNvbnRleHQsIGxvY2FsTWV0YUNvbnRleHQpO1xuXG4gICAgbWF0Y2hlc01ldGFTdXBwb3NpdGlvbiAtIG1ldGFTdXBwb3NpdGlvbk1hdGNoZXNNZXRhU3VicHJvb2ZOb2RlOyAvLy9cbiAgfVxuXG4gIGlmIChtZXRhc3RhdGVtZW50Tm9kZSAhPT0gbnVsbCkge1xuICAgIGNvbnN0IG1ldGFTdXBwb3NpdGlvbk1hdGNoZXNNZXRhc3RhdGVtZW50Tm9kZSA9IG1ldGFTdXBwb3NpdGlvbi5tYXRjaE1ldGFzdGF0ZW1lbnROb2RlKG1ldGFzdGF0ZW1lbnROb2RlLCBzdWJzdGl0dXRpb25zLCBmaWxlQ29udGV4dCwgbG9jYWxNZXRhQ29udGV4dCk7XG5cbiAgICBtYXRjaGVzTWV0YVN1cHBvc2l0aW9uIC0gbWV0YVN1cHBvc2l0aW9uTWF0Y2hlc01ldGFzdGF0ZW1lbnROb2RlOyAvLy9cbiAgfVxuXG4gIHJldHVybiBtYXRjaGVzTWV0YVN1cHBvc2l0aW9uO1xufVxuXG5mdW5jdGlvbiBtYXRjaE1ldGFDb25zZXF1ZW50KG1ldGFDb25zZXF1ZW50LCBtZXRhc3RhdGVtZW50Tm9kZSwgc3Vic3RpdHV0aW9ucywgZmlsZUNvbnRleHQsIGxvY2FsTWV0YUNvbnRleHQpIHtcbiAgY29uc3QgbWV0YUNvbnNlcXVlbnRNYXRjaGVzTWV0YXN0YXRlbWVudE5vZGUgPSBtZXRhQ29uc2VxdWVudC5tYXRjaE1ldGFzdGF0ZW1lbnROb2RlKG1ldGFzdGF0ZW1lbnROb2RlLCBzdWJzdGl0dXRpb25zLCBmaWxlQ29udGV4dCwgbG9jYWxNZXRhQ29udGV4dCksXG4gICAgICAgIG1ldGFDb25zZXF1ZW50TWF0Y2hlcyA9IG1ldGFDb25zZXF1ZW50TWF0Y2hlc01ldGFzdGF0ZW1lbnROb2RlOyAvLy9cblxuICByZXR1cm4gbWV0YUNvbnNlcXVlbnRNYXRjaGVzO1xufVxuIl0sIm5hbWVzIjpbIk1ldGFMZW1tYU1ldGF0aGVvcmVtIiwibGFiZWxzIiwibWV0YVN1cHBvc2l0aW9ucyIsIm1ldGFDb25zZXF1ZW50Iiwic3Vic3RpdHV0aW9ucyIsImZpbGVDb250ZXh0IiwiZ2V0TGFiZWxzIiwiZ2V0TWV0YVN1cHBvc2l0aW9ucyIsImdldE1ldGFDb25zZXF1ZW50IiwiZ2V0U3Vic3RpdHV0aW9ucyIsImdldEZpbGVDb250ZXh0IiwibWF0Y2hNZXRhc3RhdGVtZW50IiwibWV0YXN0YXRlbWVudE5vZGUiLCJsb2NhbE1ldGFDb250ZXh0IiwibWV0YXN0YXRlbWVudE5hdGNoZXMiLCJtZXRhcHJvb2ZTdGVwcyIsImdldFByb29mU3RlcHMiLCJtZXRhU3VwcG9zaXRpb25zTWF0Y2giLCJtYXRjaE1ldGFTdXBwb3NpdGlvbnMiLCJtZXRhQ29uc2VxdWVudE1hdGNoZXMiLCJtYXRjaE1ldGFDb25zZXF1ZW50IiwibWF0Y2hNZXRhdmFyaWFibGVOb2RlIiwibWV0YXZhcmlhYmxlTm9kZSIsIm1hdGNoZXNNZXRhdmFyaWFibGVOb2RlIiwic29tZSIsImxhYmVsIiwibGFiZWxNYXRjaGVzTWV0YXZhcmlhYmxlTm9kZSIsInRvSlNPTiIsInRva2VucyIsImxhYmVsc0pTT04iLCJtYXAiLCJsYWJlbEpTT04iLCJtZXRhU3VwcG9zaXRpb25zSlNPTiIsIm1ldGFTdXBwb3NpdGlvbiIsIm1ldGFTdXBwb3NpdGlvbkpTT04iLCJtZXRhQ29uc2VxdWVudEpTT04iLCJzdWJzdGl0dXRpb25zSlNPTiIsInN1YnN0aXR1dGlvbiIsInN1YnN0aXR1dGlvbkpTT04iLCJsb2NhbENvbnRleHRKU09OIiwianNvbiIsImZyb21KU09OQW5kRmlsZUNvbnRleHQiLCJDbGFzcyIsIkxhYmVsIiwiTWV0YVN1cHBvc2l0aW9uIiwiTWV0YUNvbnNlcXVlbnQiLCJtZXRhc3RhdGVtZW50Rm9yTWV0YXZhcmlhYmxlU3Vic3RpdHV0aW9uIiwiTWV0YXN0YXRlbWVudEZvck1ldGF2YXJpYWJsZVN1YnN0aXR1dGlvbiIsImZyb21MYWJlbHNNZXRhU3VwcG9zaXRpb25zTWV0YUNvbnNlcXVlbnRTdWJzdGl0dXRpb25zQW5kRmlsZUNvbnRleHQiLCJyZXZlcnNlIiwiY29ycmVsYXRlIiwibWV0YXByb29mU3RlcCIsIm1ldGFTdXBwb3NpdGlvbk1hdGNoZXMiLCJtYXRjaE1ldGFTdXBwb3NpdGlvbiIsIm1hdGNoZXNNZXRhU3VwcG9zaXRpb24iLCJtZXRhU3VicHJvb2ZOb2RlIiwiZ2V0TWV0YVN1YnByb29mTm9kZSIsImdldE1ldGFzdGF0ZW1lbnROb2RlIiwibWV0YVN1cHBvc2l0aW9uTWF0Y2hlc01ldGFTdWJwcm9vZk5vZGUiLCJtYXRjaE1ldGFTdWJwcm9vZk5vZGUiLCJtZXRhU3VwcG9zaXRpb25NYXRjaGVzTWV0YXN0YXRlbWVudE5vZGUiLCJtYXRjaE1ldGFzdGF0ZW1lbnROb2RlIiwibWV0YUNvbnNlcXVlbnRNYXRjaGVzTWV0YXN0YXRlbWVudE5vZGUiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBU3FCQTs7OzREQVBIO3FFQUNTO3NFQUNDO21GQUN5QjtxQkFFbEI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFcEIsSUFBQSxBQUFNQSxxQ0FBRCxBQUFMO2FBQU1BLHFCQUNQQyxN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