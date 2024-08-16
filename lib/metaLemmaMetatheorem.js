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
var _local = /*#__PURE__*/ _interop_require_default(require("./context/local"));
var _metaConsequent = /*#__PURE__*/ _interop_require_default(require("./metaConsequent"));
var _metaSupposition = /*#__PURE__*/ _interop_require_default(require("./metaSupposition"));
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
    function MetaLemmaMetatheorem(labels, metaSuppositions, metaConsequent, localContext) {
        _class_call_check(this, MetaLemmaMetatheorem);
        this.labels = labels;
        this.metaSuppositions = metaSuppositions;
        this.metaConsequent = metaConsequent;
        this.localContext = localContext;
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
            key: "getLocalContext",
            value: function getLocalContext() {
                return this.localContext;
            }
        },
        {
            key: "matchLabelName",
            value: function matchLabelName(labelName) {
                var labelNameMatches = this.labels.some(function(label) {
                    var name = labelName, labelMatchesName = label.matchName(name);
                    if (labelMatchesName) {
                        return true;
                    }
                });
                return labelNameMatches;
            }
        },
        {
            key: "matchMetastatement",
            value: function matchMetastatement(metastatementNode, metastatementLocalContext) {
                var _this = this;
                var metastatementNatches;
                var metaSuppositionsLength = this.metaSuppositions.length;
                if (metaSuppositionsLength === 0) {
                    var substitutions = [], metaConsequentMatches = matchMetaConsequent(this.metaConsequent, metastatementNode, substitutions, this.localContext, metastatementLocalContext);
                    metastatementNatches = metaConsequentMatches; ///
                } else {
                    var metaproofSteps = metastatementLocalContext.getProofSteps();
                    metastatementNatches = (0, _array.someSubArray)(metaproofSteps, metaSuppositionsLength, function(metaproofSteps) {
                        var metaSuppositionsMatchMetaConsequent = false;
                        var substitutions = [], metaSuppositionsMatch = matchMetaSuppositions(_this.metaSuppositions, metaproofSteps, substitutions, _this.localContext, metastatementLocalContext);
                        if (metaSuppositionsMatch) {
                            var metaConsequentMatches = matchMetaConsequent(_this.metaConsequent, metastatementNode, substitutions, _this.localContext, metastatementLocalContext);
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
            key: "toJSON",
            value: function toJSON(tokens) {
                var labelsJSON = this.labels.map(function(label) {
                    var labelJSON = label.toJSON(tokens);
                    return labelJSON;
                }), metaSuppositionsJSON = this.metaSuppositions.map(function(metaSupposition) {
                    var metaSuppositionJSON = metaSupposition.toJSON(tokens);
                    return metaSuppositionJSON;
                }), metaConsequentJSON = this.metaConsequent.toJSON(tokens), localContextJSON = this.localContext.toJSON(tokens), labels = labelsJSON, metaSuppositions = metaSuppositionsJSON, metaConsequent = metaConsequentJSON, localContext = localContextJSON, json = {
                    labels: labels,
                    metaSuppositions: metaSuppositions,
                    metaConsequent: metaConsequent,
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
                var metaSuppositions = json.metaSuppositions, metaConsequent = json.metaConsequent, localContext = json.localContext;
                var metaSuppositionsJSON = metaSuppositions; ///
                metaSuppositions = metaSuppositionsJSON.map(function(metaSuppositionJSON) {
                    var _$json = metaSuppositionJSON, metaSupposition = _metaSupposition.default.fromJSONAndFileContext(_$json, fileContext);
                    return metaSupposition;
                });
                var metaConsequentJSON = metaConsequent; ///
                json = metaConsequentJSON; ///
                metaConsequent = _metaConsequent.default.fromJSONAndFileContext(json, fileContext);
                var localContextJSON = localContext; ///
                json = localContextJSON; ///
                localContext = _local.default.fromJSONAndFileContext(json, fileContext);
                return new Class(labels, metaSuppositions, metaConsequent, localContext); ///
            }
        },
        {
            key: "fromLabelsMetaSuppositionsMetaConsequentAndLocalContext",
            value: function fromLabelsMetaSuppositionsMetaConsequentAndLocalContext(Class, labels, metaSuppositions, metaConsequent, localContext) {
                return new Class(labels, metaSuppositions, metaConsequent, localContext);
            }
        }
    ]);
    return MetaLemmaMetatheorem;
}();
function matchMetaSupposition(metaSupposition, metaproofSteps, substitutions, localContext, metastatementLocalContext) {
    var metaproofStep = (0, _array.prune)(metaproofSteps, function(metaproofStep) {
        var metaSubproofNode = metaproofStep.getMetaSubproofNode(), metastatementNode = metaproofStep.getMetastatementNode();
        if (metaSubproofNode !== null) {
            var metaSubProofMatches = metaSupposition.matchMetaSubproofNode(metaSubproofNode, substitutions, localContext, metastatementLocalContext);
            if (!metaSubProofMatches) {
                return true;
            }
        }
        if (metastatementNode !== null) {
            var metastatementMatches = metaSupposition.matchMetastatementNode(metastatementNode, substitutions, localContext, metastatementLocalContext);
            if (!metastatementMatches) {
                return true;
            }
        }
    }) || null;
    var metaSuppositionMatches = metaproofStep !== null;
    return metaSuppositionMatches;
}
function matchMetaSuppositions(metaSuppositions, metaproofSteps, substitutions, localContext, metastatementLocalContext) {
    var metaSuppositionsMatch = metaSuppositions.every(function(metaSupposition) {
        var metaSuppositionMatches = matchMetaSupposition(metaSupposition, metaproofSteps, substitutions, localContext, metastatementLocalContext);
        if (metaSuppositionMatches) {
            return true;
        }
    });
    return metaSuppositionsMatch;
}
function matchMetaConsequent(metaConsequent, metastatementNode, substitutions, localContext, metastatementLocalContext) {
    var nonTerminalNodeMatches = metaConsequent.matchMetastatementNode(metastatementNode, substitutions, localContext, metastatementLocalContext), metaConsequentMatches = nonTerminalNodeMatches; ///
    return metaConsequentMatches;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9tZXRhTGVtbWFNZXRhdGhlb3JlbS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IExhYmVsIGZyb20gXCIuL2xhYmVsXCI7XG5pbXBvcnQgTG9jYWxDb250ZXh0IGZyb20gXCIuL2NvbnRleHQvbG9jYWxcIjtcbmltcG9ydCBNZXRhQ29uc2VxdWVudCBmcm9tIFwiLi9tZXRhQ29uc2VxdWVudFwiO1xuaW1wb3J0IE1ldGFTdXBwb3NpdGlvbiBmcm9tIFwiLi9tZXRhU3VwcG9zaXRpb25cIjtcblxuaW1wb3J0IHsgcHJ1bmUgfSBmcm9tIFwiLi91dGlsaXRpZXMvYXJyYXlcIjtcbmltcG9ydCB7IHNvbWVTdWJBcnJheSB9IGZyb20gXCIuL3V0aWxpdGllcy9hcnJheVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNZXRhTGVtbWFNZXRhdGhlb3JlbSB7XG4gIGNvbnN0cnVjdG9yKGxhYmVscywgbWV0YVN1cHBvc2l0aW9ucywgbWV0YUNvbnNlcXVlbnQsIGxvY2FsQ29udGV4dCkge1xuICAgIHRoaXMubGFiZWxzID0gbGFiZWxzO1xuICAgIHRoaXMubWV0YVN1cHBvc2l0aW9ucyA9IG1ldGFTdXBwb3NpdGlvbnM7XG4gICAgdGhpcy5tZXRhQ29uc2VxdWVudCA9IG1ldGFDb25zZXF1ZW50O1xuICAgIHRoaXMubG9jYWxDb250ZXh0ID0gbG9jYWxDb250ZXh0O1xuICB9XG5cbiAgZ2V0TGFiZWxzKCkge1xuICAgIHJldHVybiB0aGlzLmxhYmVscztcbiAgfVxuXG4gIGdldE1ldGFTdXBwb3NpdGlvbnMoKSB7XG4gICAgcmV0dXJuIHRoaXMubWV0YVN1cHBvc2l0aW9ucztcbiAgfVxuXG4gIGdldE1ldGFDb25zZXF1ZW50KCkge1xuICAgIHJldHVybiB0aGlzLm1ldGFDb25zZXF1ZW50O1xuICB9XG5cbiAgZ2V0TG9jYWxDb250ZXh0KCkge1xuICAgIHJldHVybiB0aGlzLmxvY2FsQ29udGV4dDtcbiAgfVxuXG4gIG1hdGNoTGFiZWxOYW1lKGxhYmVsTmFtZSkge1xuICAgIGNvbnN0IGxhYmVsTmFtZU1hdGNoZXMgPSB0aGlzLmxhYmVscy5zb21lKChsYWJlbCkgPT4ge1xuICAgICAgY29uc3QgbmFtZSA9IGxhYmVsTmFtZSwgLy8vXG4gICAgICAgICAgICBsYWJlbE1hdGNoZXNOYW1lID0gbGFiZWwubWF0Y2hOYW1lKG5hbWUpO1xuXG4gICAgICBpZiAobGFiZWxNYXRjaGVzTmFtZSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiBsYWJlbE5hbWVNYXRjaGVzO1xuICB9XG5cbiAgbWF0Y2hNZXRhc3RhdGVtZW50KG1ldGFzdGF0ZW1lbnROb2RlLCBtZXRhc3RhdGVtZW50TG9jYWxDb250ZXh0KSB7XG4gICAgbGV0IG1ldGFzdGF0ZW1lbnROYXRjaGVzO1xuXG4gICAgY29uc3QgbWV0YVN1cHBvc2l0aW9uc0xlbmd0aCA9IHRoaXMubWV0YVN1cHBvc2l0aW9ucy5sZW5ndGg7XG5cbiAgICBpZiAobWV0YVN1cHBvc2l0aW9uc0xlbmd0aCA9PT0gMCkge1xuICAgICAgY29uc3Qgc3Vic3RpdHV0aW9ucyA9IFtdLFxuICAgICAgICAgICAgbWV0YUNvbnNlcXVlbnRNYXRjaGVzID0gbWF0Y2hNZXRhQ29uc2VxdWVudCh0aGlzLm1ldGFDb25zZXF1ZW50LCBtZXRhc3RhdGVtZW50Tm9kZSwgc3Vic3RpdHV0aW9ucywgdGhpcy5sb2NhbENvbnRleHQsIG1ldGFzdGF0ZW1lbnRMb2NhbENvbnRleHQpO1xuXG4gICAgICBtZXRhc3RhdGVtZW50TmF0Y2hlcyA9IG1ldGFDb25zZXF1ZW50TWF0Y2hlczsgLy8vXG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IG1ldGFwcm9vZlN0ZXBzID0gbWV0YXN0YXRlbWVudExvY2FsQ29udGV4dC5nZXRQcm9vZlN0ZXBzKCk7XG5cbiAgICAgIG1ldGFzdGF0ZW1lbnROYXRjaGVzID0gc29tZVN1YkFycmF5KG1ldGFwcm9vZlN0ZXBzLCBtZXRhU3VwcG9zaXRpb25zTGVuZ3RoLCAobWV0YXByb29mU3RlcHMpID0+IHtcbiAgICAgICAgbGV0IG1ldGFTdXBwb3NpdGlvbnNNYXRjaE1ldGFDb25zZXF1ZW50ID0gZmFsc2U7XG5cbiAgICAgICAgY29uc3Qgc3Vic3RpdHV0aW9ucyA9IFtdLFxuICAgICAgICAgICAgICBtZXRhU3VwcG9zaXRpb25zTWF0Y2ggPSBtYXRjaE1ldGFTdXBwb3NpdGlvbnModGhpcy5tZXRhU3VwcG9zaXRpb25zLCBtZXRhcHJvb2ZTdGVwcywgc3Vic3RpdHV0aW9ucywgdGhpcy5sb2NhbENvbnRleHQsIG1ldGFzdGF0ZW1lbnRMb2NhbENvbnRleHQpO1xuXG4gICAgICAgIGlmIChtZXRhU3VwcG9zaXRpb25zTWF0Y2gpIHtcbiAgICAgICAgICBjb25zdCBtZXRhQ29uc2VxdWVudE1hdGNoZXMgPSBtYXRjaE1ldGFDb25zZXF1ZW50KHRoaXMubWV0YUNvbnNlcXVlbnQsIG1ldGFzdGF0ZW1lbnROb2RlLCBzdWJzdGl0dXRpb25zLCB0aGlzLmxvY2FsQ29udGV4dCwgbWV0YXN0YXRlbWVudExvY2FsQ29udGV4dCk7XG5cbiAgICAgICAgICBtZXRhU3VwcG9zaXRpb25zTWF0Y2hNZXRhQ29uc2VxdWVudCA9IG1ldGFDb25zZXF1ZW50TWF0Y2hlczsgIC8vL1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKG1ldGFTdXBwb3NpdGlvbnNNYXRjaE1ldGFDb25zZXF1ZW50KSB7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBtZXRhc3RhdGVtZW50TmF0Y2hlcztcbiAgfVxuXG4gIHRvSlNPTih0b2tlbnMpIHtcbiAgICBjb25zdCBsYWJlbHNKU09OID0gdGhpcy5sYWJlbHMubWFwKChsYWJlbCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgbGFiZWxKU09OID0gbGFiZWwudG9KU09OKHRva2Vucyk7XG5cbiAgICAgICAgICAgIHJldHVybiBsYWJlbEpTT047XG4gICAgICAgICAgfSksXG4gICAgICAgICAgbWV0YVN1cHBvc2l0aW9uc0pTT04gPSB0aGlzLm1ldGFTdXBwb3NpdGlvbnMubWFwKChtZXRhU3VwcG9zaXRpb24pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG1ldGFTdXBwb3NpdGlvbkpTT04gPSBtZXRhU3VwcG9zaXRpb24udG9KU09OKHRva2Vucyk7XG5cbiAgICAgICAgICAgIHJldHVybiBtZXRhU3VwcG9zaXRpb25KU09OO1xuICAgICAgICAgIH0pLFxuICAgICAgICAgIG1ldGFDb25zZXF1ZW50SlNPTiA9IHRoaXMubWV0YUNvbnNlcXVlbnQudG9KU09OKHRva2VucyksXG4gICAgICAgICAgbG9jYWxDb250ZXh0SlNPTiA9IHRoaXMubG9jYWxDb250ZXh0LnRvSlNPTih0b2tlbnMpLFxuICAgICAgICAgIGxhYmVscyA9IGxhYmVsc0pTT04sICAvLy9cbiAgICAgICAgICBtZXRhU3VwcG9zaXRpb25zID0gbWV0YVN1cHBvc2l0aW9uc0pTT04sICAvLy9cbiAgICAgICAgICBtZXRhQ29uc2VxdWVudCA9IG1ldGFDb25zZXF1ZW50SlNPTiwgIC8vL1xuICAgICAgICAgIGxvY2FsQ29udGV4dCA9IGxvY2FsQ29udGV4dEpTT04sICAvLy9cbiAgICAgICAgICBqc29uID0ge1xuICAgICAgICAgICAgbGFiZWxzLFxuICAgICAgICAgICAgbWV0YVN1cHBvc2l0aW9ucyxcbiAgICAgICAgICAgIG1ldGFDb25zZXF1ZW50LFxuICAgICAgICAgICAgbG9jYWxDb250ZXh0XG4gICAgICAgICAgfTtcblxuICAgIHJldHVybiBqc29uO1xuICB9XG5cbiAgc3RhdGljIGZyb21KU09OQW5kRmlsZUNvbnRleHQoQ2xhc3MsIGpzb24sIGZpbGVDb250ZXh0KSB7XG4gICAgbGV0IHsgbGFiZWxzIH0gPSBqc29uO1xuXG4gICAgY29uc3QgbGFiZWxzSlNPTiA9IGxhYmVsczsgIC8vL1xuXG4gICAgbGFiZWxzID0gbGFiZWxzSlNPTi5tYXAoKGxhYmVsSlNPTikgPT4ge1xuICAgICAgY29uc3QganNvbiA9IGxhYmVsSlNPTiwgLy8vXG4gICAgICAgICAgICBsYWJlbCA9IExhYmVsLmZyb21KU09OQW5kRmlsZUNvbnRleHQoanNvbiwgZmlsZUNvbnRleHQpO1xuXG4gICAgICByZXR1cm4gbGFiZWw7XG4gICAgfSk7XG5cbiAgICBsZXQgeyBtZXRhU3VwcG9zaXRpb25zLCBtZXRhQ29uc2VxdWVudCwgbG9jYWxDb250ZXh0IH0gPSBqc29uO1xuXG4gICAgY29uc3QgbWV0YVN1cHBvc2l0aW9uc0pTT04gPSBtZXRhU3VwcG9zaXRpb25zOyAgLy8vXG5cbiAgICBtZXRhU3VwcG9zaXRpb25zID0gbWV0YVN1cHBvc2l0aW9uc0pTT04ubWFwKChtZXRhU3VwcG9zaXRpb25KU09OKSA9PiB7XG4gICAgICBjb25zdCBqc29uID0gbWV0YVN1cHBvc2l0aW9uSlNPTiwgLy8vXG4gICAgICAgICAgICBtZXRhU3VwcG9zaXRpb24gPSBNZXRhU3VwcG9zaXRpb24uZnJvbUpTT05BbmRGaWxlQ29udGV4dChqc29uLCBmaWxlQ29udGV4dCk7XG5cbiAgICAgIHJldHVybiBtZXRhU3VwcG9zaXRpb247XG4gICAgfSk7XG5cbiAgICBjb25zdCBtZXRhQ29uc2VxdWVudEpTT04gPSBtZXRhQ29uc2VxdWVudDsgIC8vL1xuXG4gICAganNvbiA9IG1ldGFDb25zZXF1ZW50SlNPTjsgIC8vL1xuXG4gICAgbWV0YUNvbnNlcXVlbnQgPSBNZXRhQ29uc2VxdWVudC5mcm9tSlNPTkFuZEZpbGVDb250ZXh0KGpzb24sIGZpbGVDb250ZXh0KTtcblxuICAgIGNvbnN0IGxvY2FsQ29udGV4dEpTT04gPSBsb2NhbENvbnRleHQ7ICAvLy9cblxuICAgIGpzb24gPSBsb2NhbENvbnRleHRKU09OOyAgLy8vXG5cbiAgICBsb2NhbENvbnRleHQgPSBMb2NhbENvbnRleHQuZnJvbUpTT05BbmRGaWxlQ29udGV4dChqc29uLCBmaWxlQ29udGV4dCk7XG5cbiAgICByZXR1cm4gbmV3IENsYXNzKGxhYmVscywgbWV0YVN1cHBvc2l0aW9ucywgbWV0YUNvbnNlcXVlbnQsIGxvY2FsQ29udGV4dCk7ICAvLy9cbiAgfVxuXG4gIHN0YXRpYyBmcm9tTGFiZWxzTWV0YVN1cHBvc2l0aW9uc01ldGFDb25zZXF1ZW50QW5kTG9jYWxDb250ZXh0KENsYXNzLCBsYWJlbHMsIG1ldGFTdXBwb3NpdGlvbnMsIG1ldGFDb25zZXF1ZW50LCBsb2NhbENvbnRleHQpIHsgcmV0dXJuIG5ldyBDbGFzcyhsYWJlbHMsIG1ldGFTdXBwb3NpdGlvbnMsIG1ldGFDb25zZXF1ZW50LCBsb2NhbENvbnRleHQpOyB9XG59XG5cbmZ1bmN0aW9uIG1hdGNoTWV0YVN1cHBvc2l0aW9uKG1ldGFTdXBwb3NpdGlvbiwgbWV0YXByb29mU3RlcHMsIHN1YnN0aXR1dGlvbnMsIGxvY2FsQ29udGV4dCwgbWV0YXN0YXRlbWVudExvY2FsQ29udGV4dCkge1xuICBjb25zdCBtZXRhcHJvb2ZTdGVwID0gcHJ1bmUobWV0YXByb29mU3RlcHMsIChtZXRhcHJvb2ZTdGVwKSA9PiB7XG4gICAgY29uc3QgbWV0YVN1YnByb29mTm9kZSA9IG1ldGFwcm9vZlN0ZXAuZ2V0TWV0YVN1YnByb29mTm9kZSgpLFxuICAgICAgICAgIG1ldGFzdGF0ZW1lbnROb2RlID0gbWV0YXByb29mU3RlcC5nZXRNZXRhc3RhdGVtZW50Tm9kZSgpO1xuXG4gICAgaWYgKG1ldGFTdWJwcm9vZk5vZGUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IG1ldGFTdWJQcm9vZk1hdGNoZXMgPSBtZXRhU3VwcG9zaXRpb24ubWF0Y2hNZXRhU3VicHJvb2ZOb2RlKG1ldGFTdWJwcm9vZk5vZGUsIHN1YnN0aXR1dGlvbnMsIGxvY2FsQ29udGV4dCwgbWV0YXN0YXRlbWVudExvY2FsQ29udGV4dCk7XG5cbiAgICAgIGlmICghbWV0YVN1YlByb29mTWF0Y2hlcykgeyAgLy8vXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChtZXRhc3RhdGVtZW50Tm9kZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgbWV0YXN0YXRlbWVudE1hdGNoZXMgPSBtZXRhU3VwcG9zaXRpb24ubWF0Y2hNZXRhc3RhdGVtZW50Tm9kZShtZXRhc3RhdGVtZW50Tm9kZSwgc3Vic3RpdHV0aW9ucywgbG9jYWxDb250ZXh0LCBtZXRhc3RhdGVtZW50TG9jYWxDb250ZXh0KTtcblxuICAgICAgaWYgKCFtZXRhc3RhdGVtZW50TWF0Y2hlcykgeyAgLy8vXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH1cbiAgfSkgfHwgbnVsbDtcblxuICBjb25zdCBtZXRhU3VwcG9zaXRpb25NYXRjaGVzID0gKG1ldGFwcm9vZlN0ZXAgIT09IG51bGwpO1xuXG4gIHJldHVybiBtZXRhU3VwcG9zaXRpb25NYXRjaGVzO1xufVxuXG5mdW5jdGlvbiBtYXRjaE1ldGFTdXBwb3NpdGlvbnMobWV0YVN1cHBvc2l0aW9ucywgbWV0YXByb29mU3RlcHMsIHN1YnN0aXR1dGlvbnMsIGxvY2FsQ29udGV4dCwgbWV0YXN0YXRlbWVudExvY2FsQ29udGV4dCkge1xuICBjb25zdCBtZXRhU3VwcG9zaXRpb25zTWF0Y2ggPSBtZXRhU3VwcG9zaXRpb25zLmV2ZXJ5KChtZXRhU3VwcG9zaXRpb24pID0+IHtcbiAgICBjb25zdCBtZXRhU3VwcG9zaXRpb25NYXRjaGVzID0gbWF0Y2hNZXRhU3VwcG9zaXRpb24obWV0YVN1cHBvc2l0aW9uLCBtZXRhcHJvb2ZTdGVwcywgc3Vic3RpdHV0aW9ucywgbG9jYWxDb250ZXh0LCBtZXRhc3RhdGVtZW50TG9jYWxDb250ZXh0KTtcblxuICAgIGlmIChtZXRhU3VwcG9zaXRpb25NYXRjaGVzKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiBtZXRhU3VwcG9zaXRpb25zTWF0Y2g7XG59XG5cbmZ1bmN0aW9uIG1hdGNoTWV0YUNvbnNlcXVlbnQobWV0YUNvbnNlcXVlbnQsIG1ldGFzdGF0ZW1lbnROb2RlLCBzdWJzdGl0dXRpb25zLCBsb2NhbENvbnRleHQsIG1ldGFzdGF0ZW1lbnRMb2NhbENvbnRleHQpIHtcbiAgY29uc3Qgbm9uVGVybWluYWxOb2RlTWF0Y2hlcyA9IG1ldGFDb25zZXF1ZW50Lm1hdGNoTWV0YXN0YXRlbWVudE5vZGUobWV0YXN0YXRlbWVudE5vZGUsIHN1YnN0aXR1dGlvbnMsIGxvY2FsQ29udGV4dCwgbWV0YXN0YXRlbWVudExvY2FsQ29udGV4dCksXG4gICAgICAgIG1ldGFDb25zZXF1ZW50TWF0Y2hlcyA9IG5vblRlcm1pbmFsTm9kZU1hdGNoZXM7IC8vL1xuXG4gIHJldHVybiBtZXRhQ29uc2VxdWVudE1hdGNoZXM7XG59XG4iXSwibmFtZXMiOlsiTWV0YUxlbW1hTWV0YXRoZW9yZW0iLCJsYWJlbHMiLCJtZXRhU3VwcG9zaXRpb25zIiwibWV0YUNvbnNlcXVlbnQiLCJsb2NhbENvbnRleHQiLCJnZXRMYWJlbHMiLCJnZXRNZXRhU3VwcG9zaXRpb25zIiwiZ2V0TWV0YUNvbnNlcXVlbnQiLCJnZXRMb2NhbENvbnRleHQiLCJtYXRjaExhYmVsTmFtZSIsImxhYmVsTmFtZSIsImxhYmVsTmFtZU1hdGNoZXMiLCJzb21lIiwibGFiZWwiLCJuYW1lIiwibGFiZWxNYXRjaGVzTmFtZSIsIm1hdGNoTmFtZSIsIm1hdGNoTWV0YXN0YXRlbWVudCIsIm1ldGFzdGF0ZW1lbnROb2RlIiwibWV0YXN0YXRlbWVudExvY2FsQ29udGV4dCIsIm1ldGFzdGF0ZW1lbnROYXRjaGVzIiwibWV0YVN1cHBvc2l0aW9uc0xlbmd0aCIsImxlbmd0aCIsInN1YnN0aXR1dGlvbnMiLCJtZXRhQ29uc2VxdWVudE1hdGNoZXMiLCJtYXRjaE1ldGFDb25zZXF1ZW50IiwibWV0YXByb29mU3RlcHMiLCJnZXRQcm9vZlN0ZXBzIiwic29tZVN1YkFycmF5IiwibWV0YVN1cHBvc2l0aW9uc01hdGNoTWV0YUNvbnNlcXVlbnQiLCJtZXRhU3VwcG9zaXRpb25zTWF0Y2giLCJtYXRjaE1ldGFTdXBwb3NpdGlvbnMiLCJ0b0pTT04iLCJ0b2tlbnMiLCJsYWJlbHNKU09OIiwibWFwIiwibGFiZWxKU09OIiwibWV0YVN1cHBvc2l0aW9uc0pTT04iLCJtZXRhU3VwcG9zaXRpb24iLCJtZXRhU3VwcG9zaXRpb25KU09OIiwibWV0YUNvbnNlcXVlbnRKU09OIiwibG9jYWxDb250ZXh0SlNPTiIsImpzb24iLCJmcm9tSlNPTkFuZEZpbGVDb250ZXh0IiwiQ2xhc3MiLCJmaWxlQ29udGV4dCIsIkxhYmVsIiwiTWV0YVN1cHBvc2l0aW9uIiwiTWV0YUNvbnNlcXVlbnQiLCJMb2NhbENvbnRleHQiLCJmcm9tTGFiZWxzTWV0YVN1cHBvc2l0aW9uc01ldGFDb25zZXF1ZW50QW5kTG9jYWxDb250ZXh0IiwibWF0Y2hNZXRhU3VwcG9zaXRpb24iLCJtZXRhcHJvb2ZTdGVwIiwicHJ1bmUiLCJtZXRhU3VicHJvb2ZOb2RlIiwiZ2V0TWV0YVN1YnByb29mTm9kZSIsImdldE1ldGFzdGF0ZW1lbnROb2RlIiwibWV0YVN1YlByb29mTWF0Y2hlcyIsIm1hdGNoTWV0YVN1YnByb29mTm9kZSIsIm1ldGFzdGF0ZW1lbnRNYXRjaGVzIiwibWF0Y2hNZXRhc3RhdGVtZW50Tm9kZSIsIm1ldGFTdXBwb3NpdGlvbk1hdGNoZXMiLCJldmVyeSIsIm5vblRlcm1pbmFsTm9kZU1hdGNoZXMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBVXFCQTs7OzREQVJIOzREQUNPO3FFQUNFO3NFQUNDO3FCQUVOOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBR1AsSUFBQSxBQUFNQSxxQ0FBRCxBQUFMO2FBQU1BLHFCQUNQQyxNQUFNLEVBQUVDLGdCQUFnQixFQUFFQyxjQUFjLEVBQUVDLFlBQVk7Z0NBRC9DSjtRQUVqQixJQUFJLENBQUNDLE1BQU0sR0FBR0E7UUFDZCxJQUFJLENBQUNDLGdCQUFnQixHQUFHQTtRQUN4QixJQUFJLENBQUNDLGNBQWMsR0FBR0E7UUFDdEIsSUFBSSxDQUFDQyxZQUFZLEdBQUdBOztrQkFMSEo7O1lBUW5CSyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JB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