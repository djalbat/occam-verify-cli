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
    function MetaLemmaMetatheorem(labels, metaSuppositions, metaConsequent, fileContext) {
        _class_call_check(this, MetaLemmaMetatheorem);
        this.labels = labels;
        this.metaSuppositions = metaSuppositions;
        this.metaConsequent = metaConsequent;
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
                }), metaConsequentJSON = this.metaConsequent.toJSON(tokens), localContextJSON = this.fileContext.toJSON(tokens), labels = labelsJSON, metaSuppositions = metaSuppositionsJSON, metaConsequent = metaConsequentJSON, fileContext = localContextJSON, json = {
                    labels: labels,
                    metaSuppositions: metaSuppositions,
                    metaConsequent: metaConsequent,
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
                var metaSuppositions = json.metaSuppositions, metaConsequent = json.metaConsequent;
                var metaSuppositionsJSON = metaSuppositions; ///
                metaSuppositions = metaSuppositionsJSON.map(function(metaSuppositionJSON) {
                    var _$json = metaSuppositionJSON, metaSupposition = _metaSupposition.default.fromJSONAndFileContext(_$json, fileContext);
                    return metaSupposition;
                });
                var metaConsequentJSON = metaConsequent; ///
                json = metaConsequentJSON; ///
                metaConsequent = _metaConsequent.default.fromJSONAndFileContext(json, fileContext);
                return new Class(labels, metaSuppositions, metaConsequent, fileContext); ///
            }
        },
        {
            key: "fromLabelsMetaSuppositionsMetaConsequentAndFileContext",
            value: function fromLabelsMetaSuppositionsMetaConsequentAndFileContext(Class, labels, metaSuppositions, metaConsequent, fileContext) {
                return new Class(labels, metaSuppositions, metaConsequent, fileContext);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9tZXRhTGVtbWFNZXRhdGhlb3JlbS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IExhYmVsIGZyb20gXCIuL2xhYmVsXCI7XG5pbXBvcnQgTWV0YUNvbnNlcXVlbnQgZnJvbSBcIi4vbWV0YUNvbnNlcXVlbnRcIjtcbmltcG9ydCBNZXRhU3VwcG9zaXRpb24gZnJvbSBcIi4vbWV0YVN1cHBvc2l0aW9uXCI7XG5pbXBvcnQgTG9jYWxNZXRhQ29udGV4dCBmcm9tIFwiLi9jb250ZXh0L2xvY2FsTWV0YVwiO1xuXG5pbXBvcnQgeyBwcnVuZSB9IGZyb20gXCIuL3V0aWxpdGllcy9hcnJheVwiO1xuaW1wb3J0IHsgc29tZVN1YkFycmF5IH0gZnJvbSBcIi4vdXRpbGl0aWVzL2FycmF5XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1ldGFMZW1tYU1ldGF0aGVvcmVtIHtcbiAgY29uc3RydWN0b3IobGFiZWxzLCBtZXRhU3VwcG9zaXRpb25zLCBtZXRhQ29uc2VxdWVudCwgZmlsZUNvbnRleHQpIHtcbiAgICB0aGlzLmxhYmVscyA9IGxhYmVscztcbiAgICB0aGlzLm1ldGFTdXBwb3NpdGlvbnMgPSBtZXRhU3VwcG9zaXRpb25zO1xuICAgIHRoaXMubWV0YUNvbnNlcXVlbnQgPSBtZXRhQ29uc2VxdWVudDtcbiAgICB0aGlzLmZpbGVDb250ZXh0ID0gZmlsZUNvbnRleHQ7XG4gIH1cblxuICBnZXRMYWJlbHMoKSB7XG4gICAgcmV0dXJuIHRoaXMubGFiZWxzO1xuICB9XG5cbiAgZ2V0TWV0YVN1cHBvc2l0aW9ucygpIHtcbiAgICByZXR1cm4gdGhpcy5tZXRhU3VwcG9zaXRpb25zO1xuICB9XG5cbiAgZ2V0TWV0YUNvbnNlcXVlbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMubWV0YUNvbnNlcXVlbnQ7XG4gIH1cblxuICBnZXRGaWxlQ29udGV4dCgpIHtcbiAgICByZXR1cm4gdGhpcy5maWxlQ29udGV4dDtcbiAgfVxuXG4gIG1hdGNoTWV0YXN0YXRlbWVudChtZXRhc3RhdGVtZW50Tm9kZSwgbWV0YXN0YXRlbWVudExvY2FsQ29udGV4dCkge1xuICAgIGxldCBtZXRhc3RhdGVtZW50TmF0Y2hlcztcblxuICAgIGNvbnN0IG1ldGFTdXBwb3NpdGlvbnNMZW5ndGggPSB0aGlzLm1ldGFTdXBwb3NpdGlvbnMubGVuZ3RoO1xuXG4gICAgaWYgKG1ldGFTdXBwb3NpdGlvbnNMZW5ndGggPT09IDApIHtcbiAgICAgIGNvbnN0IHN1YnN0aXR1dGlvbnMgPSBbXSxcbiAgICAgICAgICAgIG1ldGFDb25zZXF1ZW50TWF0Y2hlcyA9IG1hdGNoTWV0YUNvbnNlcXVlbnQodGhpcy5tZXRhQ29uc2VxdWVudCwgbWV0YXN0YXRlbWVudE5vZGUsIHN1YnN0aXR1dGlvbnMsIHRoaXMuZmlsZUNvbnRleHQsIG1ldGFzdGF0ZW1lbnRMb2NhbENvbnRleHQpO1xuXG4gICAgICBtZXRhc3RhdGVtZW50TmF0Y2hlcyA9IG1ldGFDb25zZXF1ZW50TWF0Y2hlczsgLy8vXG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IG1ldGFwcm9vZlN0ZXBzID0gbWV0YXN0YXRlbWVudExvY2FsQ29udGV4dC5nZXRQcm9vZlN0ZXBzKCk7XG5cbiAgICAgIG1ldGFzdGF0ZW1lbnROYXRjaGVzID0gc29tZVN1YkFycmF5KG1ldGFwcm9vZlN0ZXBzLCBtZXRhU3VwcG9zaXRpb25zTGVuZ3RoLCAobWV0YXByb29mU3RlcHMpID0+IHtcbiAgICAgICAgbGV0IG1ldGFTdXBwb3NpdGlvbnNNYXRjaE1ldGFDb25zZXF1ZW50ID0gZmFsc2U7XG5cbiAgICAgICAgY29uc3Qgc3Vic3RpdHV0aW9ucyA9IFtdLFxuICAgICAgICAgICAgICBtZXRhU3VwcG9zaXRpb25zTWF0Y2ggPSBtYXRjaE1ldGFTdXBwb3NpdGlvbnModGhpcy5tZXRhU3VwcG9zaXRpb25zLCBtZXRhcHJvb2ZTdGVwcywgc3Vic3RpdHV0aW9ucywgdGhpcy5maWxlQ29udGV4dCwgbWV0YXN0YXRlbWVudExvY2FsQ29udGV4dCk7XG5cbiAgICAgICAgaWYgKG1ldGFTdXBwb3NpdGlvbnNNYXRjaCkge1xuICAgICAgICAgIGNvbnN0IG1ldGFDb25zZXF1ZW50TWF0Y2hlcyA9IG1hdGNoTWV0YUNvbnNlcXVlbnQodGhpcy5tZXRhQ29uc2VxdWVudCwgbWV0YXN0YXRlbWVudE5vZGUsIHN1YnN0aXR1dGlvbnMsIHRoaXMuZmlsZUNvbnRleHQsIG1ldGFzdGF0ZW1lbnRMb2NhbENvbnRleHQpO1xuXG4gICAgICAgICAgbWV0YVN1cHBvc2l0aW9uc01hdGNoTWV0YUNvbnNlcXVlbnQgPSBtZXRhQ29uc2VxdWVudE1hdGNoZXM7ICAvLy9cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChtZXRhU3VwcG9zaXRpb25zTWF0Y2hNZXRhQ29uc2VxdWVudCkge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gbWV0YXN0YXRlbWVudE5hdGNoZXM7XG4gIH1cblxuICBtYXRjaExhYmVsTWV0YXZhcmlhYmxlTm9kZShsYWJlbE1ldGF2YXJpYWJsZU5vZGUpIHtcbiAgICBjb25zdCBsYWJlbE1ldGF2YXJpYWJsZU5vZGVNYXRjaGVzID0gdGhpcy5sYWJlbHMuc29tZSgobGFiZWwpID0+IHtcbiAgICAgIGNvbnN0IG5vZGUgPSBsYWJlbE1ldGF2YXJpYWJsZU5vZGUsIC8vL1xuICAgICAgICAgICAgbGFiZWxNYXRjaGVzTm9kZSA9IGxhYmVsLm1hdGNoTm9kZShub2RlKTtcblxuICAgICAgaWYgKGxhYmVsTWF0Y2hlc05vZGUpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gbGFiZWxNZXRhdmFyaWFibGVOb2RlTWF0Y2hlcztcbiAgfVxuXG4gIHRvSlNPTih0b2tlbnMpIHtcbiAgICBjb25zdCBsYWJlbHNKU09OID0gdGhpcy5sYWJlbHMubWFwKChsYWJlbCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgbGFiZWxKU09OID0gbGFiZWwudG9KU09OKHRva2Vucyk7XG5cbiAgICAgICAgICAgIHJldHVybiBsYWJlbEpTT047XG4gICAgICAgICAgfSksXG4gICAgICAgICAgbWV0YVN1cHBvc2l0aW9uc0pTT04gPSB0aGlzLm1ldGFTdXBwb3NpdGlvbnMubWFwKChtZXRhU3VwcG9zaXRpb24pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG1ldGFTdXBwb3NpdGlvbkpTT04gPSBtZXRhU3VwcG9zaXRpb24udG9KU09OKHRva2Vucyk7XG5cbiAgICAgICAgICAgIHJldHVybiBtZXRhU3VwcG9zaXRpb25KU09OO1xuICAgICAgICAgIH0pLFxuICAgICAgICAgIG1ldGFDb25zZXF1ZW50SlNPTiA9IHRoaXMubWV0YUNvbnNlcXVlbnQudG9KU09OKHRva2VucyksXG4gICAgICAgICAgbG9jYWxDb250ZXh0SlNPTiA9IHRoaXMuZmlsZUNvbnRleHQudG9KU09OKHRva2VucyksXG4gICAgICAgICAgbGFiZWxzID0gbGFiZWxzSlNPTiwgIC8vL1xuICAgICAgICAgIG1ldGFTdXBwb3NpdGlvbnMgPSBtZXRhU3VwcG9zaXRpb25zSlNPTiwgIC8vL1xuICAgICAgICAgIG1ldGFDb25zZXF1ZW50ID0gbWV0YUNvbnNlcXVlbnRKU09OLCAgLy8vXG4gICAgICAgICAgZmlsZUNvbnRleHQgPSBsb2NhbENvbnRleHRKU09OLCAgLy8vXG4gICAgICAgICAganNvbiA9IHtcbiAgICAgICAgICAgIGxhYmVscyxcbiAgICAgICAgICAgIG1ldGFTdXBwb3NpdGlvbnMsXG4gICAgICAgICAgICBtZXRhQ29uc2VxdWVudCxcbiAgICAgICAgICAgIGZpbGVDb250ZXh0XG4gICAgICAgICAgfTtcblxuICAgIHJldHVybiBqc29uO1xuICB9XG5cbiAgc3RhdGljIGZyb21KU09OQW5kRmlsZUNvbnRleHQoQ2xhc3MsIGpzb24sIGZpbGVDb250ZXh0KSB7XG4gICAgbGV0IHsgbGFiZWxzIH0gPSBqc29uO1xuXG4gICAgY29uc3QgbGFiZWxzSlNPTiA9IGxhYmVsczsgIC8vL1xuXG4gICAgbGFiZWxzID0gbGFiZWxzSlNPTi5tYXAoKGxhYmVsSlNPTikgPT4ge1xuICAgICAgY29uc3QganNvbiA9IGxhYmVsSlNPTiwgLy8vXG4gICAgICAgICAgICBsYWJlbCA9IExhYmVsLmZyb21KU09OQW5kRmlsZUNvbnRleHQoanNvbiwgZmlsZUNvbnRleHQpO1xuXG4gICAgICByZXR1cm4gbGFiZWw7XG4gICAgfSk7XG5cbiAgICBsZXQgeyBtZXRhU3VwcG9zaXRpb25zLCBtZXRhQ29uc2VxdWVudCB9ID0ganNvbjtcblxuICAgIGNvbnN0IG1ldGFTdXBwb3NpdGlvbnNKU09OID0gbWV0YVN1cHBvc2l0aW9uczsgIC8vL1xuXG4gICAgbWV0YVN1cHBvc2l0aW9ucyA9IG1ldGFTdXBwb3NpdGlvbnNKU09OLm1hcCgobWV0YVN1cHBvc2l0aW9uSlNPTikgPT4ge1xuICAgICAgY29uc3QganNvbiA9IG1ldGFTdXBwb3NpdGlvbkpTT04sIC8vL1xuICAgICAgICAgICAgbWV0YVN1cHBvc2l0aW9uID0gTWV0YVN1cHBvc2l0aW9uLmZyb21KU09OQW5kRmlsZUNvbnRleHQoanNvbiwgZmlsZUNvbnRleHQpO1xuXG4gICAgICByZXR1cm4gbWV0YVN1cHBvc2l0aW9uO1xuICAgIH0pO1xuXG4gICAgY29uc3QgbWV0YUNvbnNlcXVlbnRKU09OID0gbWV0YUNvbnNlcXVlbnQ7ICAvLy9cblxuICAgIGpzb24gPSBtZXRhQ29uc2VxdWVudEpTT047ICAvLy9cblxuICAgIG1ldGFDb25zZXF1ZW50ID0gTWV0YUNvbnNlcXVlbnQuZnJvbUpTT05BbmRGaWxlQ29udGV4dChqc29uLCBmaWxlQ29udGV4dCk7XG5cbiAgICByZXR1cm4gbmV3IENsYXNzKGxhYmVscywgbWV0YVN1cHBvc2l0aW9ucywgbWV0YUNvbnNlcXVlbnQsIGZpbGVDb250ZXh0KTsgIC8vL1xuICB9XG5cbiAgc3RhdGljIGZyb21MYWJlbHNNZXRhU3VwcG9zaXRpb25zTWV0YUNvbnNlcXVlbnRBbmRGaWxlQ29udGV4dChDbGFzcywgbGFiZWxzLCBtZXRhU3VwcG9zaXRpb25zLCBtZXRhQ29uc2VxdWVudCwgZmlsZUNvbnRleHQpIHsgcmV0dXJuIG5ldyBDbGFzcyhsYWJlbHMsIG1ldGFTdXBwb3NpdGlvbnMsIG1ldGFDb25zZXF1ZW50LCBmaWxlQ29udGV4dCk7IH1cbn1cblxuZnVuY3Rpb24gbWF0Y2hNZXRhU3VwcG9zaXRpb24obWV0YVN1cHBvc2l0aW9uLCBtZXRhcHJvb2ZTdGVwcywgc3Vic3RpdHV0aW9ucywgZmlsZUNvbnRleHQsIG1ldGFzdGF0ZW1lbnRMb2NhbENvbnRleHQpIHtcbiAgY29uc3QgbWV0YXByb29mU3RlcCA9IHBydW5lKG1ldGFwcm9vZlN0ZXBzLCAobWV0YXByb29mU3RlcCkgPT4ge1xuICAgIGNvbnN0IG1ldGFTdWJwcm9vZk5vZGUgPSBtZXRhcHJvb2ZTdGVwLmdldE1ldGFTdWJwcm9vZk5vZGUoKSxcbiAgICAgICAgICBtZXRhc3RhdGVtZW50Tm9kZSA9IG1ldGFwcm9vZlN0ZXAuZ2V0TWV0YXN0YXRlbWVudE5vZGUoKTtcblxuICAgIGlmIChtZXRhU3VicHJvb2ZOb2RlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBtZXRhU3ViUHJvb2ZNYXRjaGVzID0gbWV0YVN1cHBvc2l0aW9uLm1hdGNoTWV0YVN1YnByb29mTm9kZShtZXRhU3VicHJvb2ZOb2RlLCBzdWJzdGl0dXRpb25zLCBmaWxlQ29udGV4dCwgbWV0YXN0YXRlbWVudExvY2FsQ29udGV4dCk7XG5cbiAgICAgIGlmICghbWV0YVN1YlByb29mTWF0Y2hlcykgeyAgLy8vXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChtZXRhc3RhdGVtZW50Tm9kZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgbWV0YXN0YXRlbWVudE1hdGNoZXMgPSBtZXRhU3VwcG9zaXRpb24ubWF0Y2hNZXRhc3RhdGVtZW50Tm9kZShtZXRhc3RhdGVtZW50Tm9kZSwgc3Vic3RpdHV0aW9ucywgZmlsZUNvbnRleHQsIG1ldGFzdGF0ZW1lbnRMb2NhbENvbnRleHQpO1xuXG4gICAgICBpZiAoIW1ldGFzdGF0ZW1lbnRNYXRjaGVzKSB7ICAvLy9cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfVxuICB9KSB8fCBudWxsO1xuXG4gIGNvbnN0IG1ldGFTdXBwb3NpdGlvbk1hdGNoZXMgPSAobWV0YXByb29mU3RlcCAhPT0gbnVsbCk7XG5cbiAgcmV0dXJuIG1ldGFTdXBwb3NpdGlvbk1hdGNoZXM7XG59XG5cbmZ1bmN0aW9uIG1hdGNoTWV0YVN1cHBvc2l0aW9ucyhtZXRhU3VwcG9zaXRpb25zLCBtZXRhcHJvb2ZTdGVwcywgc3Vic3RpdHV0aW9ucywgZmlsZUNvbnRleHQsIG1ldGFzdGF0ZW1lbnRMb2NhbENvbnRleHQpIHtcbiAgY29uc3QgbWV0YVN1cHBvc2l0aW9uc01hdGNoID0gbWV0YVN1cHBvc2l0aW9ucy5ldmVyeSgobWV0YVN1cHBvc2l0aW9uKSA9PiB7XG4gICAgY29uc3QgbWV0YVN1cHBvc2l0aW9uTWF0Y2hlcyA9IG1hdGNoTWV0YVN1cHBvc2l0aW9uKG1ldGFTdXBwb3NpdGlvbiwgbWV0YXByb29mU3RlcHMsIHN1YnN0aXR1dGlvbnMsIGZpbGVDb250ZXh0LCBtZXRhc3RhdGVtZW50TG9jYWxDb250ZXh0KTtcblxuICAgIGlmIChtZXRhU3VwcG9zaXRpb25NYXRjaGVzKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiBtZXRhU3VwcG9zaXRpb25zTWF0Y2g7XG59XG5cbmZ1bmN0aW9uIG1hdGNoTWV0YUNvbnNlcXVlbnQobWV0YUNvbnNlcXVlbnQsIG1ldGFzdGF0ZW1lbnROb2RlLCBzdWJzdGl0dXRpb25zLCBmaWxlQ29udGV4dCwgbWV0YXN0YXRlbWVudExvY2FsQ29udGV4dCkge1xuICBjb25zdCBub25UZXJtaW5hbE5vZGVNYXRjaGVzID0gbWV0YUNvbnNlcXVlbnQubWF0Y2hNZXRhc3RhdGVtZW50Tm9kZShtZXRhc3RhdGVtZW50Tm9kZSwgc3Vic3RpdHV0aW9ucywgZmlsZUNvbnRleHQsIG1ldGFzdGF0ZW1lbnRMb2NhbENvbnRleHQpLFxuICAgICAgICBtZXRhQ29uc2VxdWVudE1hdGNoZXMgPSBub25UZXJtaW5hbE5vZGVNYXRjaGVzOyAvLy9cblxuICByZXR1cm4gbWV0YUNvbnNlcXVlbnRNYXRjaGVzO1xufVxuIl0sIm5hbWVzIjpbIk1ldGFMZW1tYU1ldGF0aGVvcmVtIiwibGFiZWxzIiwibWV0YVN1cHBvc2l0aW9ucyIsIm1ldGFDb25zZXF1ZW50IiwiZmlsZUNvbnRleHQiLCJnZXRMYWJlbHMiLCJnZXRNZXRhU3VwcG9zaXRpb25zIiwiZ2V0TWV0YUNvbnNlcXVlbnQiLCJnZXRGaWxlQ29udGV4dCIsIm1hdGNoTWV0YXN0YXRlbWVudCIsIm1ldGFzdGF0ZW1lbnROb2RlIiwibWV0YXN0YXRlbWVudExvY2FsQ29udGV4dCIsIm1ldGFzdGF0ZW1lbnROYXRjaGVzIiwibWV0YVN1cHBvc2l0aW9uc0xlbmd0aCIsImxlbmd0aCIsInN1YnN0aXR1dGlvbnMiLCJtZXRhQ29uc2VxdWVudE1hdGNoZXMiLCJtYXRjaE1ldGFDb25zZXF1ZW50IiwibWV0YXByb29mU3RlcHMiLCJnZXRQcm9vZlN0ZXBzIiwic29tZVN1YkFycmF5IiwibWV0YVN1cHBvc2l0aW9uc01hdGNoTWV0YUNvbnNlcXVlbnQiLCJtZXRhU3VwcG9zaXRpb25zTWF0Y2giLCJtYXRjaE1ldGFTdXBwb3NpdGlvbnMiLCJtYXRjaExhYmVsTWV0YXZhcmlhYmxlTm9kZSIsImxhYmVsTWV0YXZhcmlhYmxlTm9kZSIsImxhYmVsTWV0YXZhcmlhYmxlTm9kZU1hdGNoZXMiLCJzb21lIiwibGFiZWwiLCJub2RlIiwibGFiZWxNYXRjaGVzTm9kZSIsIm1hdGNoTm9kZSIsInRvSlNPTiIsInRva2VucyIsImxhYmVsc0pTT04iLCJtYXAiLCJsYWJlbEpTT04iLCJtZXRhU3VwcG9zaXRpb25zSlNPTiIsIm1ldGFTdXBwb3NpdGlvbiIsIm1ldGFTdXBwb3NpdGlvbkpTT04iLCJtZXRhQ29uc2VxdWVudEpTT04iLCJsb2NhbENvbnRleHRKU09OIiwianNvbiIsImZyb21KU09OQW5kRmlsZUNvbnRleHQiLCJDbGFzcyIsIkxhYmVsIiwiTWV0YVN1cHBvc2l0aW9uIiwiTWV0YUNvbnNlcXVlbnQiLCJmcm9tTGFiZWxzTWV0YVN1cHBvc2l0aW9uc01ldGFDb25zZXF1ZW50QW5kRmlsZUNvbnRleHQiLCJtYXRjaE1ldGFTdXBwb3NpdGlvbiIsIm1ldGFwcm9vZlN0ZXAiLCJwcnVuZSIsIm1ldGFTdWJwcm9vZk5vZGUiLCJnZXRNZXRhU3VicHJvb2ZOb2RlIiwiZ2V0TWV0YXN0YXRlbWVudE5vZGUiLCJtZXRhU3ViUHJvb2ZNYXRjaGVzIiwibWF0Y2hNZXRhU3VicHJvb2ZOb2RlIiwibWV0YXN0YXRlbWVudE1hdGNoZXMiLCJtYXRjaE1ldGFzdGF0ZW1lbnROb2RlIiwibWV0YVN1cHBvc2l0aW9uTWF0Y2hlcyIsImV2ZXJ5Iiwibm9uVGVybWluYWxOb2RlTWF0Y2hlcyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFVcUJBOzs7NERBUkg7cUVBQ1M7c0VBQ0M7Z0VBQ0M7cUJBRVA7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFHUCxJQUFBLEFBQU1BLHFDQUFELEFBQUw7YUFBTUEscUJBQ1BDLE1BQU0sRUFBRUMsZ0JBQWdCLEVBQUVDLGNBQWMsRUFBRUMsV0FBVztnQ0FEOUNKO1FBRWpCLElBQUksQ0FBQ0MsTUFBTSxHQUFHQTtRQUNkLElBQUksQ0FBQ0MsZ0JBQWdCLEdBQUdBO1FBQ3hCLElBQUksQ0FBQ0MsY0FBYyxHQUFHQTtRQUN0QixJQUFJLENBQUNDLFdBQVcsR0FBR0E7O2tCQUxGSjs7WUFRbkJLLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0osTUFBTTtZQUNwQjs7O1lBRUFLLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0osZ0JBQWdCO1lBQzlCOzs7WUFFQUssS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8s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