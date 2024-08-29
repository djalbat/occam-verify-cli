"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return Rule;
    }
});
var _label = /*#__PURE__*/ _interop_require_default(require("./label"));
var _premise = /*#__PURE__*/ _interop_require_default(require("./premise"));
var _conclusion = /*#__PURE__*/ _interop_require_default(require("./conclusion"));
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
var Rule = /*#__PURE__*/ function() {
    function Rule(labels, premises, conclusion, fileContext) {
        _class_call_check(this, Rule);
        this.labels = labels;
        this.premises = premises;
        this.conclusion = conclusion;
        this.fileContext = fileContext;
    }
    _create_class(Rule, [
        {
            key: "getLabels",
            value: function getLabels() {
                return this.labels;
            }
        },
        {
            key: "getPremises",
            value: function getPremises() {
                return this.premises;
            }
        },
        {
            key: "getConclusion",
            value: function getConclusion() {
                return this.conclusion;
            }
        },
        {
            key: "getFileContext",
            value: function getFileContext() {
                return this.fileContext;
            }
        },
        {
            key: "matchStatement",
            value: function matchStatement(statementNode, localContext) {
                var _this = this;
                var statementNatches;
                var premisesLength = this.premises.length;
                if (premisesLength === 0) {
                    var substitutions = [], conclusionMatches = matchConclusion(this.conclusion, statementNode, substitutions, this.fileContext, localContext);
                    statementNatches = conclusionMatches; ///
                } else {
                    var proofSteps = localContext.getProofSteps();
                    statementNatches = (0, _array.someSubArray)(proofSteps, premisesLength, function(proofSteps) {
                        var premisesMatchConclusion = false;
                        var substitutions = [], premisesMatch = matchPremises(_this.premises, proofSteps, substitutions, _this.fileContext, localContext);
                        if (premisesMatch) {
                            var conclusionMatches = matchConclusion(_this.conclusion, statementNode, substitutions, _this.fileContext, localContext);
                            premisesMatchConclusion = conclusionMatches; ///
                        }
                        if (premisesMatchConclusion) {
                            return true;
                        }
                    });
                }
                return statementNatches;
            }
        },
        {
            key: "matchMetastatement",
            value: function matchMetastatement(metastatementNode, localMetaContext) {
                var _this = this;
                var metastatementNatches;
                var premisesLength = this.premises.length;
                if (premisesLength === 0) {
                    var substitutions = [], conclusionMatches = metaMatchConclusion(this.conclusion, metastatementNode, substitutions, this.fileContext, localMetaContext);
                    metastatementNatches = conclusionMatches; ///
                } else {
                    var metaproofSteps = localMetaContext.getMetaproofSteps();
                    metastatementNatches = (0, _array.someSubArray)(metaproofSteps, premisesLength, function(metaproofSteps) {
                        var premisesMatchConclusion = false;
                        var substitutions = [], premisesMatch = metaMatchPremises(_this.premises, metaproofSteps, substitutions, _this.fileContext, localMetaContext);
                        if (premisesMatch) {
                            var conclusionMatches = metaMatchConclusion(_this.conclusion, metastatementNode, substitutions, _this.fileContext, localMetaContext);
                            premisesMatchConclusion = conclusionMatches; ///
                        }
                        if (premisesMatchConclusion) {
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
                }), premisesJSON = this.premises.map(function(premise) {
                    var premiseJSON = premise.toJSON(tokens);
                    return premiseJSON;
                }), conclusionJSON = this.conclusion.toJSON(tokens), labels = labelsJSON, premises = premisesJSON, conclusion = conclusionJSON, json = {
                    labels: labels,
                    premises: premises,
                    conclusion: conclusion
                };
                return json;
            }
        }
    ], [
        {
            key: "fromJSONAndFileContext",
            value: function fromJSONAndFileContext(json, fileContext) {
                var rule;
                var labels = json.labels;
                var labelsJSON = labels; ///
                labels = labelsJSON.map(function(labelJSON) {
                    var _$json = labelJSON, label = _label.default.fromJSONAndFileContext(_$json, fileContext);
                    return label;
                });
                var premises = json.premises;
                var premisesJSON = premises; ///
                premises = premisesJSON.map(function(premiseJSON) {
                    var _$json = premiseJSON, premise = _premise.default.fromJSONAndFileContext(_$json, fileContext);
                    return premise;
                });
                var conclusion = json.conclusion;
                var conclusionJSON = conclusion; ///
                json = conclusionJSON; ///
                conclusion = _conclusion.default.fromJSONAndFileContext(json, fileContext);
                rule = new Rule(labels, premises, conclusion, fileContext);
                return rule;
            }
        },
        {
            key: "fromLabelsPremisesConclusionAndFileContext",
            value: function fromLabelsPremisesConclusionAndFileContext(labels, premises, conclusion, fileContext) {
                var rule = new Rule(labels, premises, conclusion, fileContext);
                return rule;
            }
        }
    ]);
    return Rule;
}();
function matchPremise(premise, proofSteps, substitutions, fileContext, localContext) {
    var proofStep = (0, _array.extract)(proofSteps, function(proofStep) {
        var subproofNode = proofStep.getSubproofNode(), statementNode = proofStep.getStatementNode();
        if (subproofNode !== null) {
            var subproofNodeMatches = premise.matchSubproofNode(subproofNode, substitutions, fileContext, localContext);
            if (subproofNodeMatches) {
                return true;
            }
        }
        if (statementNode !== null) {
            var statementNodeMatches = premise.matchStatementNode(statementNode, substitutions, fileContext, localContext);
            if (statementNodeMatches) {
                return true;
            }
        }
    }) || null;
    var premiseMatches = proofStep !== null;
    return premiseMatches;
}
function matchPremises(premise, proofSteps, substitutions, fileContext, localContext) {
    var premisesMatch = premise.every(function(premise) {
        var premiseMatches = matchPremise(premise, proofSteps, substitutions, fileContext, localContext);
        if (premiseMatches) {
            return true;
        }
    });
    return premisesMatch;
}
function matchConclusion(conclusion, statementNode, substitutions, fileContext, localContext) {
    var statementNodeMatches = conclusion.matchStatementNode(statementNode, substitutions, fileContext, localContext), conclusionMatches = statementNodeMatches; ///
    return conclusionMatches;
}
function metaMatchPremise(premise, metaproofSteps, substitutions, fileContext, localMetaContext) {
    var metaproofStep = (0, _array.extract)(metaproofSteps, function(metaproofStep) {
        var ruleSubproofNode = metaproofStep.getRuleSubproofNode(), metaSubproofNode = metaproofStep.getMetaSubproofNode(), metastatementNode = metaproofStep.getMetastatementNode();
        if (ruleSubproofNode !== null) {
            var ruleSubProofNodeMatches = premise.matchRuleSubproofNode(ruleSubproofNode, substitutions, fileContext, localMetaContext);
            if (ruleSubProofNodeMatches) {
                return true;
            }
        }
        if (metaSubproofNode !== null) {
            var metaSubProofNodeMatches = premise.matchMetaSubproofNode(metaSubproofNode, substitutions, fileContext, localMetaContext);
            if (metaSubProofNodeMatches) {
                return true;
            }
        }
        if (metastatementNode !== null) {
            var metastatementNodeMatches = premise.matchMetastatementNode(metastatementNode, substitutions, fileContext, localMetaContext);
            if (metastatementNodeMatches) {
                return true;
            }
        }
    }) || null;
    var premiseMatches = metaproofStep !== null;
    return premiseMatches;
}
function metaMatchPremises(premise, metaproofSteps, substitutions, fileContext, localMetaContext) {
    var premisesMatch = premise.every(function(premise) {
        var premiseMatches = metaMatchPremise(premise, metaproofSteps, substitutions, fileContext, localMetaContext);
        if (premiseMatches) {
            return true;
        }
    });
    return premisesMatch;
}
function metaMatchConclusion(conclusion, metastatementNode, substitutions, fileContext, localMetaContext) {
    var metastatementNodeMatches = conclusion.matchMetastatementNode(metastatementNode, substitutions, fileContext, localMetaContext), conclusionMatches = metastatementNodeMatches; ///
    return conclusionMatches;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9ydWxlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgTGFiZWwgZnJvbSBcIi4vbGFiZWxcIjtcbmltcG9ydCBQcmVtaXNlIGZyb20gXCIuL3ByZW1pc2VcIjtcbmltcG9ydCBDb25jbHVzaW9uIGZyb20gXCIuL2NvbmNsdXNpb25cIjtcblxuaW1wb3J0IHsgZXh0cmFjdCB9IGZyb20gXCIuL3V0aWxpdGllcy9hcnJheVwiO1xuaW1wb3J0IHsgc29tZVN1YkFycmF5IH0gZnJvbSBcIi4vdXRpbGl0aWVzL2FycmF5XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJ1bGUge1xuICBjb25zdHJ1Y3RvcihsYWJlbHMsIHByZW1pc2VzLCBjb25jbHVzaW9uLCBmaWxlQ29udGV4dCkge1xuICAgIHRoaXMubGFiZWxzID0gbGFiZWxzO1xuICAgIHRoaXMucHJlbWlzZXMgPSBwcmVtaXNlcztcbiAgICB0aGlzLmNvbmNsdXNpb24gPSBjb25jbHVzaW9uO1xuICAgIHRoaXMuZmlsZUNvbnRleHQgPSBmaWxlQ29udGV4dDtcbiAgfVxuXG4gIGdldExhYmVscygpIHtcbiAgICByZXR1cm4gdGhpcy5sYWJlbHM7XG4gIH1cblxuICBnZXRQcmVtaXNlcygpIHtcbiAgICByZXR1cm4gdGhpcy5wcmVtaXNlcztcbiAgfVxuXG4gIGdldENvbmNsdXNpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuY29uY2x1c2lvbjtcbiAgfVxuXG4gIGdldEZpbGVDb250ZXh0KCkge1xuICAgIHJldHVybiB0aGlzLmZpbGVDb250ZXh0O1xuICB9XG5cbiAgbWF0Y2hTdGF0ZW1lbnQoc3RhdGVtZW50Tm9kZSwgbG9jYWxDb250ZXh0KSB7XG4gICAgbGV0IHN0YXRlbWVudE5hdGNoZXM7XG5cbiAgICBjb25zdCBwcmVtaXNlc0xlbmd0aCA9IHRoaXMucHJlbWlzZXMubGVuZ3RoO1xuXG4gICAgaWYgKHByZW1pc2VzTGVuZ3RoID09PSAwKSB7XG4gICAgICBjb25zdCBzdWJzdGl0dXRpb25zID0gW10sXG4gICAgICAgICAgICBjb25jbHVzaW9uTWF0Y2hlcyA9IG1hdGNoQ29uY2x1c2lvbih0aGlzLmNvbmNsdXNpb24sIHN0YXRlbWVudE5vZGUsIHN1YnN0aXR1dGlvbnMsIHRoaXMuZmlsZUNvbnRleHQsIGxvY2FsQ29udGV4dCk7XG5cbiAgICAgIHN0YXRlbWVudE5hdGNoZXMgPSBjb25jbHVzaW9uTWF0Y2hlczsgLy8vXG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHByb29mU3RlcHMgPSBsb2NhbENvbnRleHQuZ2V0UHJvb2ZTdGVwcygpO1xuXG4gICAgICBzdGF0ZW1lbnROYXRjaGVzID0gc29tZVN1YkFycmF5KHByb29mU3RlcHMsIHByZW1pc2VzTGVuZ3RoLCAocHJvb2ZTdGVwcykgPT4ge1xuICAgICAgICBsZXQgcHJlbWlzZXNNYXRjaENvbmNsdXNpb24gPSBmYWxzZTtcblxuICAgICAgICBjb25zdCBzdWJzdGl0dXRpb25zID0gW10sXG4gICAgICAgICAgICAgIHByZW1pc2VzTWF0Y2ggPSBtYXRjaFByZW1pc2VzKHRoaXMucHJlbWlzZXMsIHByb29mU3RlcHMsIHN1YnN0aXR1dGlvbnMsIHRoaXMuZmlsZUNvbnRleHQsIGxvY2FsQ29udGV4dCk7XG5cbiAgICAgICAgaWYgKHByZW1pc2VzTWF0Y2gpIHtcbiAgICAgICAgICBjb25zdCBjb25jbHVzaW9uTWF0Y2hlcyA9IG1hdGNoQ29uY2x1c2lvbih0aGlzLmNvbmNsdXNpb24sIHN0YXRlbWVudE5vZGUsIHN1YnN0aXR1dGlvbnMsIHRoaXMuZmlsZUNvbnRleHQsIGxvY2FsQ29udGV4dCk7XG5cbiAgICAgICAgICBwcmVtaXNlc01hdGNoQ29uY2x1c2lvbiA9IGNvbmNsdXNpb25NYXRjaGVzOyAgLy8vXG4gICAgICAgIH1cblxuICAgICAgICBpZiAocHJlbWlzZXNNYXRjaENvbmNsdXNpb24pIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN0YXRlbWVudE5hdGNoZXM7XG4gIH1cblxuICBtYXRjaE1ldGFzdGF0ZW1lbnQobWV0YXN0YXRlbWVudE5vZGUsIGxvY2FsTWV0YUNvbnRleHQpIHtcbiAgICBsZXQgbWV0YXN0YXRlbWVudE5hdGNoZXM7XG5cbiAgICBjb25zdCBwcmVtaXNlc0xlbmd0aCA9IHRoaXMucHJlbWlzZXMubGVuZ3RoO1xuXG4gICAgaWYgKHByZW1pc2VzTGVuZ3RoID09PSAwKSB7XG4gICAgICBjb25zdCBzdWJzdGl0dXRpb25zID0gW10sXG4gICAgICAgICAgICBjb25jbHVzaW9uTWF0Y2hlcyA9IG1ldGFNYXRjaENvbmNsdXNpb24odGhpcy5jb25jbHVzaW9uLCBtZXRhc3RhdGVtZW50Tm9kZSwgc3Vic3RpdHV0aW9ucywgdGhpcy5maWxlQ29udGV4dCwgbG9jYWxNZXRhQ29udGV4dCk7XG5cbiAgICAgIG1ldGFzdGF0ZW1lbnROYXRjaGVzID0gY29uY2x1c2lvbk1hdGNoZXM7IC8vL1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBtZXRhcHJvb2ZTdGVwcyA9IGxvY2FsTWV0YUNvbnRleHQuZ2V0TWV0YXByb29mU3RlcHMoKTtcblxuICAgICAgbWV0YXN0YXRlbWVudE5hdGNoZXMgPSBzb21lU3ViQXJyYXkobWV0YXByb29mU3RlcHMsIHByZW1pc2VzTGVuZ3RoLCAobWV0YXByb29mU3RlcHMpID0+IHtcbiAgICAgICAgbGV0IHByZW1pc2VzTWF0Y2hDb25jbHVzaW9uID0gZmFsc2U7XG5cbiAgICAgICAgY29uc3Qgc3Vic3RpdHV0aW9ucyA9IFtdLFxuICAgICAgICAgICAgICBwcmVtaXNlc01hdGNoID0gbWV0YU1hdGNoUHJlbWlzZXModGhpcy5wcmVtaXNlcywgbWV0YXByb29mU3RlcHMsIHN1YnN0aXR1dGlvbnMsIHRoaXMuZmlsZUNvbnRleHQsIGxvY2FsTWV0YUNvbnRleHQpO1xuXG4gICAgICAgIGlmIChwcmVtaXNlc01hdGNoKSB7XG4gICAgICAgICAgY29uc3QgY29uY2x1c2lvbk1hdGNoZXMgPSBtZXRhTWF0Y2hDb25jbHVzaW9uKHRoaXMuY29uY2x1c2lvbiwgbWV0YXN0YXRlbWVudE5vZGUsIHN1YnN0aXR1dGlvbnMsIHRoaXMuZmlsZUNvbnRleHQsIGxvY2FsTWV0YUNvbnRleHQpO1xuXG4gICAgICAgICAgcHJlbWlzZXNNYXRjaENvbmNsdXNpb24gPSBjb25jbHVzaW9uTWF0Y2hlczsgIC8vL1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHByZW1pc2VzTWF0Y2hDb25jbHVzaW9uKSB7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBtZXRhc3RhdGVtZW50TmF0Y2hlcztcbiAgfVxuXG4gIG1hdGNoTWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlKSB7XG4gICAgY29uc3QgbWV0YXZhcmlhYmxlTm9kZU1hdGNoZXMgPSB0aGlzLmxhYmVscy5zb21lKChsYWJlbCkgPT4ge1xuICAgICAgY29uc3QgbGFiZWxNYXRjaGVzTWV0YXZhcmlhYmxlTm9kZSA9IGxhYmVsLm1hdGNoTWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlKTtcblxuICAgICAgaWYgKGxhYmVsTWF0Y2hlc01ldGF2YXJpYWJsZU5vZGUpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gbWV0YXZhcmlhYmxlTm9kZU1hdGNoZXM7XG4gIH1cblxuICB0b0pTT04odG9rZW5zKSB7XG4gICAgY29uc3QgbGFiZWxzSlNPTiA9IHRoaXMubGFiZWxzLm1hcCgobGFiZWwpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGxhYmVsSlNPTiA9IGxhYmVsLnRvSlNPTih0b2tlbnMpO1xuXG4gICAgICAgICAgICByZXR1cm4gbGFiZWxKU09OO1xuICAgICAgICAgIH0pLFxuICAgICAgICAgIHByZW1pc2VzSlNPTiA9IHRoaXMucHJlbWlzZXMubWFwKChwcmVtaXNlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBwcmVtaXNlSlNPTiA9IHByZW1pc2UudG9KU09OKHRva2Vucyk7XG5cbiAgICAgICAgICAgIHJldHVybiBwcmVtaXNlSlNPTjtcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBjb25jbHVzaW9uSlNPTiA9IHRoaXMuY29uY2x1c2lvbi50b0pTT04odG9rZW5zKSxcbiAgICAgICAgICBsYWJlbHMgPSBsYWJlbHNKU09OLCAgLy8vXG4gICAgICAgICAgcHJlbWlzZXMgPSBwcmVtaXNlc0pTT04sICAvLy9cbiAgICAgICAgICBjb25jbHVzaW9uID0gY29uY2x1c2lvbkpTT04sICAvLy9cbiAgICAgICAgICBqc29uID0ge1xuICAgICAgICAgICAgbGFiZWxzLFxuICAgICAgICAgICAgcHJlbWlzZXMsXG4gICAgICAgICAgICBjb25jbHVzaW9uXG4gICAgICAgICAgfTtcblxuICAgIHJldHVybiBqc29uO1xuICB9XG5cbiAgc3RhdGljIGZyb21KU09OQW5kRmlsZUNvbnRleHQoanNvbiwgZmlsZUNvbnRleHQpIHtcbiAgICBsZXQgcnVsZTtcblxuICAgIGxldCB7IGxhYmVscyB9ID0ganNvbjtcblxuICAgIGNvbnN0IGxhYmVsc0pTT04gPSBsYWJlbHM7ICAvLy9cblxuICAgIGxhYmVscyA9IGxhYmVsc0pTT04ubWFwKChsYWJlbEpTT04pID0+IHtcbiAgICAgIGNvbnN0IGpzb24gPSBsYWJlbEpTT04sIC8vL1xuICAgICAgICAgICAgbGFiZWwgPSBMYWJlbC5mcm9tSlNPTkFuZEZpbGVDb250ZXh0KGpzb24sIGZpbGVDb250ZXh0KTtcblxuICAgICAgcmV0dXJuIGxhYmVsO1xuICAgIH0pO1xuXG4gICAgbGV0IHsgcHJlbWlzZXMgfSA9IGpzb247XG5cbiAgICBjb25zdCBwcmVtaXNlc0pTT04gPSBwcmVtaXNlczsgIC8vL1xuXG4gICAgcHJlbWlzZXMgPSBwcmVtaXNlc0pTT04ubWFwKChwcmVtaXNlSlNPTikgPT4ge1xuICAgICAgY29uc3QganNvbiA9IHByZW1pc2VKU09OLCAvLy9cbiAgICAgICAgICAgIHByZW1pc2UgPSBQcmVtaXNlLmZyb21KU09OQW5kRmlsZUNvbnRleHQoanNvbiwgZmlsZUNvbnRleHQpO1xuXG4gICAgICByZXR1cm4gcHJlbWlzZTtcbiAgICB9KTtcblxuICAgIGxldCB7IGNvbmNsdXNpb24gfSA9IGpzb247XG5cbiAgICBjb25zdCBjb25jbHVzaW9uSlNPTiA9IGNvbmNsdXNpb247ICAvLy9cblxuICAgIGpzb24gPSBjb25jbHVzaW9uSlNPTjsgIC8vL1xuXG4gICAgY29uY2x1c2lvbiA9IENvbmNsdXNpb24uZnJvbUpTT05BbmRGaWxlQ29udGV4dChqc29uLCBmaWxlQ29udGV4dCk7XG5cbiAgICBydWxlID0gbmV3IFJ1bGUobGFiZWxzLCBwcmVtaXNlcywgY29uY2x1c2lvbiwgZmlsZUNvbnRleHQpO1xuXG4gICAgcmV0dXJuIHJ1bGU7XG4gIH1cblxuICBzdGF0aWMgZnJvbUxhYmVsc1ByZW1pc2VzQ29uY2x1c2lvbkFuZEZpbGVDb250ZXh0KGxhYmVscywgcHJlbWlzZXMsIGNvbmNsdXNpb24sIGZpbGVDb250ZXh0KSB7XG4gICAgY29uc3QgcnVsZSA9IG5ldyBSdWxlKGxhYmVscywgcHJlbWlzZXMsIGNvbmNsdXNpb24sIGZpbGVDb250ZXh0KTtcblxuICAgIHJldHVybiBydWxlO1xuICB9XG59XG5cbmZ1bmN0aW9uIG1hdGNoUHJlbWlzZShwcmVtaXNlLCBwcm9vZlN0ZXBzLCBzdWJzdGl0dXRpb25zLCBmaWxlQ29udGV4dCwgbG9jYWxDb250ZXh0KSB7XG4gIGNvbnN0IHByb29mU3RlcCA9IGV4dHJhY3QocHJvb2ZTdGVwcywgKHByb29mU3RlcCkgPT4ge1xuICAgIGNvbnN0IHN1YnByb29mTm9kZSA9IHByb29mU3RlcC5nZXRTdWJwcm9vZk5vZGUoKSxcbiAgICAgICAgICBzdGF0ZW1lbnROb2RlID0gcHJvb2ZTdGVwLmdldFN0YXRlbWVudE5vZGUoKTtcblxuICAgIGlmIChzdWJwcm9vZk5vZGUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHN1YnByb29mTm9kZU1hdGNoZXMgPSBwcmVtaXNlLm1hdGNoU3VicHJvb2ZOb2RlKHN1YnByb29mTm9kZSwgc3Vic3RpdHV0aW9ucywgZmlsZUNvbnRleHQsIGxvY2FsQ29udGV4dCk7XG5cbiAgICAgIGlmIChzdWJwcm9vZk5vZGVNYXRjaGVzKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChzdGF0ZW1lbnROb2RlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBzdGF0ZW1lbnROb2RlTWF0Y2hlcyA9IHByZW1pc2UubWF0Y2hTdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUsIHN1YnN0aXR1dGlvbnMsIGZpbGVDb250ZXh0LCBsb2NhbENvbnRleHQpO1xuXG4gICAgICBpZiAoc3RhdGVtZW50Tm9kZU1hdGNoZXMpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfVxuICB9KSB8fCBudWxsO1xuXG4gIGNvbnN0IHByZW1pc2VNYXRjaGVzID0gKHByb29mU3RlcCAhPT0gbnVsbCk7XG5cbiAgcmV0dXJuIHByZW1pc2VNYXRjaGVzO1xufVxuXG5mdW5jdGlvbiBtYXRjaFByZW1pc2VzKHByZW1pc2UsIHByb29mU3RlcHMsIHN1YnN0aXR1dGlvbnMsIGZpbGVDb250ZXh0LCBsb2NhbENvbnRleHQpIHtcbiAgY29uc3QgcHJlbWlzZXNNYXRjaCA9IHByZW1pc2UuZXZlcnkoKHByZW1pc2UpID0+IHtcbiAgICBjb25zdCBwcmVtaXNlTWF0Y2hlcyA9IG1hdGNoUHJlbWlzZShwcmVtaXNlLCBwcm9vZlN0ZXBzLCBzdWJzdGl0dXRpb25zLCBmaWxlQ29udGV4dCwgbG9jYWxDb250ZXh0KTtcblxuICAgIGlmIChwcmVtaXNlTWF0Y2hlcykge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gcHJlbWlzZXNNYXRjaDtcbn1cblxuZnVuY3Rpb24gbWF0Y2hDb25jbHVzaW9uKGNvbmNsdXNpb24sIHN0YXRlbWVudE5vZGUsIHN1YnN0aXR1dGlvbnMsIGZpbGVDb250ZXh0LCBsb2NhbENvbnRleHQpIHtcbiAgY29uc3Qgc3RhdGVtZW50Tm9kZU1hdGNoZXMgPSBjb25jbHVzaW9uLm1hdGNoU3RhdGVtZW50Tm9kZShzdGF0ZW1lbnROb2RlLCBzdWJzdGl0dXRpb25zLCBmaWxlQ29udGV4dCwgbG9jYWxDb250ZXh0KSxcbiAgICAgICAgY29uY2x1c2lvbk1hdGNoZXMgPSBzdGF0ZW1lbnROb2RlTWF0Y2hlczsgLy8vXG5cbiAgcmV0dXJuIGNvbmNsdXNpb25NYXRjaGVzO1xufVxuXG5mdW5jdGlvbiBtZXRhTWF0Y2hQcmVtaXNlKHByZW1pc2UsIG1ldGFwcm9vZlN0ZXBzLCBzdWJzdGl0dXRpb25zLCBmaWxlQ29udGV4dCwgbG9jYWxNZXRhQ29udGV4dCkge1xuICBjb25zdCBtZXRhcHJvb2ZTdGVwID0gZXh0cmFjdChtZXRhcHJvb2ZTdGVwcywgKG1ldGFwcm9vZlN0ZXApID0+IHtcbiAgICBjb25zdCBydWxlU3VicHJvb2ZOb2RlID0gbWV0YXByb29mU3RlcC5nZXRSdWxlU3VicHJvb2ZOb2RlKCksXG4gICAgICAgICAgbWV0YVN1YnByb29mTm9kZSA9IG1ldGFwcm9vZlN0ZXAuZ2V0TWV0YVN1YnByb29mTm9kZSgpLFxuICAgICAgICAgIG1ldGFzdGF0ZW1lbnROb2RlID0gbWV0YXByb29mU3RlcC5nZXRNZXRhc3RhdGVtZW50Tm9kZSgpXG5cbiAgICBpZiAocnVsZVN1YnByb29mTm9kZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgcnVsZVN1YlByb29mTm9kZU1hdGNoZXMgPSBwcmVtaXNlLm1hdGNoUnVsZVN1YnByb29mTm9kZShydWxlU3VicHJvb2ZOb2RlLCBzdWJzdGl0dXRpb25zLCBmaWxlQ29udGV4dCwgbG9jYWxNZXRhQ29udGV4dCk7XG5cbiAgICAgIGlmIChydWxlU3ViUHJvb2ZOb2RlTWF0Y2hlcykge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAobWV0YVN1YnByb29mTm9kZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgbWV0YVN1YlByb29mTm9kZU1hdGNoZXMgPSBwcmVtaXNlLm1hdGNoTWV0YVN1YnByb29mTm9kZShtZXRhU3VicHJvb2ZOb2RlLCBzdWJzdGl0dXRpb25zLCBmaWxlQ29udGV4dCwgbG9jYWxNZXRhQ29udGV4dCk7XG5cbiAgICAgIGlmIChtZXRhU3ViUHJvb2ZOb2RlTWF0Y2hlcykge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAobWV0YXN0YXRlbWVudE5vZGUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IG1ldGFzdGF0ZW1lbnROb2RlTWF0Y2hlcyA9IHByZW1pc2UubWF0Y2hNZXRhc3RhdGVtZW50Tm9kZShtZXRhc3RhdGVtZW50Tm9kZSwgc3Vic3RpdHV0aW9ucywgZmlsZUNvbnRleHQsIGxvY2FsTWV0YUNvbnRleHQpO1xuXG4gICAgICBpZiAobWV0YXN0YXRlbWVudE5vZGVNYXRjaGVzKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH1cbiAgfSkgfHwgbnVsbDtcblxuICBjb25zdCBwcmVtaXNlTWF0Y2hlcyA9IChtZXRhcHJvb2ZTdGVwICE9PSBudWxsKTtcblxuICByZXR1cm4gcHJlbWlzZU1hdGNoZXM7XG59XG5cbmZ1bmN0aW9uIG1ldGFNYXRjaFByZW1pc2VzKHByZW1pc2UsIG1ldGFwcm9vZlN0ZXBzLCBzdWJzdGl0dXRpb25zLCBmaWxlQ29udGV4dCwgbG9jYWxNZXRhQ29udGV4dCkge1xuICBjb25zdCBwcmVtaXNlc01hdGNoID0gcHJlbWlzZS5ldmVyeSgocHJlbWlzZSkgPT4ge1xuICAgIGNvbnN0IHByZW1pc2VNYXRjaGVzID0gbWV0YU1hdGNoUHJlbWlzZShwcmVtaXNlLCBtZXRhcHJvb2ZTdGVwcywgc3Vic3RpdHV0aW9ucywgZmlsZUNvbnRleHQsIGxvY2FsTWV0YUNvbnRleHQpO1xuXG4gICAgaWYgKHByZW1pc2VNYXRjaGVzKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiBwcmVtaXNlc01hdGNoO1xufVxuXG5mdW5jdGlvbiBtZXRhTWF0Y2hDb25jbHVzaW9uKGNvbmNsdXNpb24sIG1ldGFzdGF0ZW1lbnROb2RlLCBzdWJzdGl0dXRpb25zLCBmaWxlQ29udGV4dCwgbG9jYWxNZXRhQ29udGV4dCkge1xuICBjb25zdCBtZXRhc3RhdGVtZW50Tm9kZU1hdGNoZXMgPSBjb25jbHVzaW9uLm1hdGNoTWV0YXN0YXRlbWVudE5vZGUobWV0YXN0YXRlbWVudE5vZGUsIHN1YnN0aXR1dGlvbnMsIGZpbGVDb250ZXh0LCBsb2NhbE1ldGFDb250ZXh0KSxcbiAgICAgICAgY29uY2x1c2lvbk1hdGNoZXMgPSBtZXRhc3RhdGVtZW50Tm9kZU1hdGNoZXM7IC8vL1xuXG4gIHJldHVybiBjb25jbHVzaW9uTWF0Y2hlcztcbn1cbiJdLCJuYW1lcyI6WyJSdWxlIiwibGFiZWxzIiwicHJlbWlzZXMiLCJjb25jbHVzaW9uIiwiZmlsZUNvbnRleHQiLCJnZXRMYWJlbHMiLCJnZXRQcmVtaXNlcyIsImdldENvbmNsdXNpb24iLCJnZXRGaWxlQ29udGV4dCIsIm1hdGNoU3RhdGVtZW50Iiwic3RhdGVtZW50Tm9kZSIsImxvY2FsQ29udGV4dCIsInN0YXRlbWVudE5hdGNoZXMiLCJwcmVtaXNlc0xlbmd0aCIsImxlbmd0aCIsInN1YnN0aXR1dGlvbnMiLCJjb25jbHVzaW9uTWF0Y2hlcyIsIm1hdGNoQ29uY2x1c2lvbiIsInByb29mU3RlcHMiLCJnZXRQcm9vZlN0ZXBzIiwic29tZVN1YkFycmF5IiwicHJlbWlzZXNNYXRjaENvbmNsdXNpb24iLCJwcmVtaXNlc01hdGNoIiwibWF0Y2hQcmVtaXNlcyIsIm1hdGNoTWV0YXN0YXRlbWVudCIsIm1ldGFzdGF0ZW1lbnROb2RlIiwibG9jYWxNZXRhQ29udGV4dCIsIm1ldGFzdGF0ZW1lbnROYXRjaGVzIiwibWV0YU1hdGNoQ29uY2x1c2lvbiIsIm1ldGFwcm9vZlN0ZXBzIiwiZ2V0TWV0YXByb29mU3RlcHMiLCJtZXRhTWF0Y2hQcmVtaXNlcyIsIm1hdGNoTWV0YXZhcmlhYmxlTm9kZSIsIm1ldGF2YXJpYWJsZU5vZGUiLCJtZXRhdmFyaWFibGVOb2RlTWF0Y2hlcyIsInNvbWUiLCJsYWJlbCIsImxhYmVsTWF0Y2hlc01ldGF2YXJpYWJsZU5vZGUiLCJ0b0pTT04iLCJ0b2tlbnMiLCJsYWJlbHNKU09OIiwibWFwIiwibGFiZWxKU09OIiwicHJlbWlzZXNKU09OIiwicHJlbWlzZSIsInByZW1pc2VKU09OIiwiY29uY2x1c2lvbkpTT04iLCJqc29uIiwiZnJvbUpTT05BbmRGaWxlQ29udGV4dCIsInJ1bGUiLCJMYWJlbCIsIlByZW1pc2UiLCJDb25jbHVzaW9uIiwiZnJvbUxhYmVsc1ByZW1pc2VzQ29uY2x1c2lvbkFuZEZpbGVDb250ZXh0IiwibWF0Y2hQcmVtaXNlIiwicHJvb2ZTdGVwIiwiZXh0cmFjdCIsInN1YnByb29mTm9kZSIsImdldFN1YnByb29mTm9kZSIsImdldFN0YXRlbWVudE5vZGUiLCJzdWJwcm9vZk5vZGVNYXRjaGVzIiwibWF0Y2hTdWJwcm9vZk5vZGUiLCJzdGF0ZW1lbnROb2RlTWF0Y2hlcyIsIm1hdGNoU3RhdGVtZW50Tm9kZSIsInByZW1pc2VNYXRjaGVzIiwiZXZlcnkiLCJtZXRhTWF0Y2hQcmVtaXNlIiwibWV0YXByb29mU3RlcCIsInJ1bGVTdWJwcm9vZk5vZGUiLCJnZXRSdWxlU3VicHJvb2ZOb2RlIiwibWV0YVN1YnByb29mTm9kZSIsImdldE1ldGFTdWJwcm9vZk5vZGUiLCJnZXRNZXRhc3RhdGVtZW50Tm9kZSIsInJ1bGVTdWJQcm9vZk5vZGVNYXRjaGVzIiwibWF0Y2hSdWxlU3VicHJvb2ZOb2RlIiwibWV0YVN1YlByb29mTm9kZU1hdGNoZXMiLCJtYXRjaE1ldGFTdWJwcm9vZk5vZGUiLCJtZXRhc3RhdGVtZW50Tm9kZU1hdGNoZXMiLCJtYXRjaE1ldGFzdGF0ZW1lbnROb2RlIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7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