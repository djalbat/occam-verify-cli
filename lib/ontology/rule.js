"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
var _necessary = require("necessary");
var _ontology = /*#__PURE__*/ _interop_require_wildcard(require("../ontology"));
var _local = /*#__PURE__*/ _interop_require_default(require("../context/local"));
var _substitutions = /*#__PURE__*/ _interop_require_default(require("../substitutions"));
var _topLevelAssertion = require("./topLevelAssertion");
var _json = require("../utilities/json");
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
function _define_property(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function _getRequireWildcardCache(nodeInterop) {
    if (typeof WeakMap !== "function") return null;
    var cacheBabelInterop = new WeakMap();
    var cacheNodeInterop = new WeakMap();
    return (_getRequireWildcardCache = function(nodeInterop) {
        return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
    })(nodeInterop);
}
function _interop_require_wildcard(obj, nodeInterop) {
    if (!nodeInterop && obj && obj.__esModule) {
        return obj;
    }
    if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
        return {
            default: obj
        };
    }
    var cache = _getRequireWildcardCache(nodeInterop);
    if (cache && cache.has(obj)) {
        return cache.get(obj);
    }
    var newObj = {
        __proto__: null
    };
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for(var key in obj){
        if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
            var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
            if (desc && (desc.get || desc.set)) {
                Object.defineProperty(newObj, key, desc);
            } else {
                newObj[key] = obj[key];
            }
        }
    }
    newObj.default = obj;
    if (cache) {
        cache.set(obj, newObj);
    }
    return newObj;
}
var _Rule;
var reverse = _necessary.arrayUtilities.reverse, extract = _necessary.arrayUtilities.extract, backwardsEvery = _necessary.arrayUtilities.backwardsEvery;
var _default = (0, _ontology.define)((_Rule = /*#__PURE__*/ function() {
    function Rule(context, node, string, labels, premises, conclusion, proof) {
        _class_call_check(this, Rule);
        this.context = context;
        this.node = node;
        this.string = string;
        this.labels = labels;
        this.premises = premises;
        this.conclusion = conclusion;
        this.proof = proof;
    }
    _create_class(Rule, [
        {
            key: "getContext",
            value: function getContext() {
                return this.context;
            }
        },
        {
            key: "getNode",
            value: function getNode() {
                return this.node;
            }
        },
        {
            key: "getString",
            value: function getString() {
                return this.string;
            }
        },
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
            key: "getProof",
            value: function getProof() {
                return this.proof;
            }
        },
        {
            key: "matchMetavariableName",
            value: function matchMetavariableName(metavariableName) {
                var metavariableNameMatches = this.labels.some(function(label) {
                    var metavariableNameMatches = label.matchMetavariableName(metavariableName);
                    if (metavariableNameMatches) {
                        return true;
                    }
                });
                return metavariableNameMatches;
            }
        },
        {
            key: "unifyStatementAndStepsOrSubproofs",
            value: function unifyStatementAndStepsOrSubproofs(statement, stepsOrSubproofs, context) {
                var statementAndStepsOrSubproofsUnify = false;
                var generalContext = this.context, specificContext = context; ///
                var substitutions = _substitutions.default.fromNothing(), statementUnifiesWithConclusion = this.unifyStatementWithConclusion(statement, substitutions, generalContext, specificContext);
                if (statementUnifiesWithConclusion) {
                    var stepsOrSubproofsUnifyWithPremises = this.unifyStepsOrSubproofsWithPremises(stepsOrSubproofs, substitutions, generalContext, specificContext);
                    if (stepsOrSubproofsUnifyWithPremises) {
                        var substitutionsResolved = substitutions.areResolved();
                        if (substitutionsResolved) {
                            statementAndStepsOrSubproofsUnify = true;
                        }
                    }
                }
                return statementAndStepsOrSubproofsUnify;
            }
        },
        {
            key: "unifyStatementWithConclusion",
            value: function unifyStatementWithConclusion(statement, substitutions, generalContext, specificContext) {
                var statementUnifiesWithConclusion = false;
                var statementUnifies = this.conclusion.unifyStatement(statement, substitutions, generalContext, specificContext);
                if (statementUnifies) {
                    statementUnifiesWithConclusion = true;
                }
                return statementUnifiesWithConclusion;
            }
        },
        {
            key: "unifyStepsOrSubproofsWithPremises",
            value: function unifyStepsOrSubproofsWithPremises(stepsOrSubproofs, substitutions, generalContext, specificContext) {
                var _this = this;
                stepsOrSubproofs = reverse(stepsOrSubproofs); ///
                var stepsOrSubproofsUnifyWithPremises = backwardsEvery(this.premises, function(premise) {
                    var stepUnifiesWithPremise = _this.unifyStepsOrSubproofsWithPremise(stepsOrSubproofs, premise, substitutions, generalContext, specificContext);
                    if (stepUnifiesWithPremise) {
                        return true;
                    }
                });
                return stepsOrSubproofsUnifyWithPremises;
            }
        },
        {
            key: "unifyStepsOrSubproofsWithPremise",
            value: function unifyStepsOrSubproofsWithPremise(stepsOrSubproofs, premise, substitutions, generalContext, specificContext) {
                var stepsOrSubproofsUnifyWithPremise = false;
                if (!stepsOrSubproofsUnifyWithPremise) {
                    var context = specificContext, premiseUnifiesIndependently = premise.unifyIndependently(substitutions, context);
                    if (premiseUnifiesIndependently) {
                        stepsOrSubproofsUnifyWithPremise = true;
                    }
                }
                if (!stepsOrSubproofsUnifyWithPremise) {
                    var stepOrSubproof = extract(stepsOrSubproofs, function(stepOrSubproof) {
                        var stepOrSubproofUnifies = premise.unifyStepOrSubproof(stepOrSubproof, substitutions, generalContext, specificContext);
                        if (stepOrSubproofUnifies) {
                            return true;
                        }
                    }) || null;
                    if (stepOrSubproof !== null) {
                        stepsOrSubproofsUnifyWithPremise = true;
                    }
                }
                return stepsOrSubproofsUnifyWithPremise;
            }
        },
        {
            key: "verify",
            value: function verify() {
                var verifies = false;
                var ruleString = this.string; ///
                this.context.trace("Verifying the '".concat(ruleString, "' rule..."), this.node);
                var labelsVerify = this.verifyLabels();
                if (labelsVerify) {
                    var localContext = _local.default.fromContext(this.context), context = localContext, premisesVerify = this.verifyPremises(context);
                    if (premisesVerify) {
                        var conclusionVerifies = this.verifyConclusion(context);
                        if (conclusionVerifies) {
                            var proofVerifies = this.verifyProof(context);
                            if (proofVerifies) {
                                var rule = this; ///
                                this.context.addRule(rule);
                                verifies = true;
                            }
                        }
                    }
                }
                if (verifies) {
                    this.context.debug("...verified the '".concat(ruleString, "' rule."), this.node);
                }
                return verifies;
            }
        },
        {
            key: "verifyLabels",
            value: function verifyLabels() {
                var labelsVerify = this.labels.every(function(label) {
                    var nameOnly = true, labelVerifies = label.verify(nameOnly);
                    if (labelVerifies) {
                        return true;
                    }
                });
                return labelsVerify;
            }
        },
        {
            key: "verifyPremises",
            value: function verifyPremises(context) {
                var _this = this;
                var premisesVerify = this.premises.every(function(premise) {
                    var premiseVerifies = _this.verifyPremise(premise, context);
                    if (premiseVerifies) {
                        return true;
                    }
                });
                return premisesVerify;
            }
        },
        {
            key: "verifyPremise",
            value: function verifyPremise(premise, context) {
                var premiseVerifies = premise.verify(context);
                return premiseVerifies;
            }
        },
        {
            key: "verifyConclusion",
            value: function verifyConclusion(context) {
                var conclusionVerifies = this.conclusion.verify(context);
                return conclusionVerifies;
            }
        },
        {
            key: "verifyProof",
            value: function verifyProof(context) {
                var proofVerifies;
                if (this.proof === null) {
                    proofVerifies = true;
                } else {
                    var substitutions = _substitutions.default.fromNothing();
                    proofVerifies = this.proof.verify(substitutions, this.conclusion, context);
                }
                return proofVerifies;
            }
        },
        {
            key: "toJSON",
            value: function toJSON() {
                var labelsJSON = (0, _json.labelsToLabelsJSON)(this.labels), premisesJSON = (0, _json.premisesToPremisesJSON)(this.premises), conclusionJSON = (0, _json.conclusionToConclusionJSON)(this.conclusion), labels = labelsJSON, premises = premisesJSON, conclusion = conclusionJSON, json = {
                    labels: labels,
                    premises: premises,
                    conclusion: conclusion
                };
                return json;
            }
        }
    ], [
        {
            key: "fromJSON",
            value: function fromJSON(json, context) {
                var rule;
                var node = null, proof = null, labels = (0, _json.labelsFromJSON)(json, context), premises = (0, _json.premisesFromJSON)(json, context), conclusion = (0, _json.conclusionFromJSON)(json, context), string = stringFromLabelsPremisesAndConclusion(labels, premises, conclusion);
                rule = new Rule(context, node, string, labels, premises, conclusion, proof);
                return rule;
            }
        },
        {
            key: "fromRuleNode",
            value: function fromRuleNode(ruleNode, context) {
                var node = ruleNode, proof = proofFromRuleNode(ruleNode, context), labels = labelsFromRuleNode(ruleNode, context), premises = premisesFromRuleNode(ruleNode, context), conclusion = conclusionFromRuleNode(ruleNode, context), string = stringFromLabelsPremisesAndConclusion(labels, premises, conclusion), rule = new Rule(context, node, string, labels, premises, conclusion, proof);
                return rule;
            }
        }
    ]);
    return Rule;
}(), _define_property(_Rule, "name", "Rule"), _Rule));
function proofFromRuleNode(ruleNode, context) {
    var Proof = _ontology.default.Proof, proofNode = ruleNode.getProofNode(), proof = Proof.fromProofNode(proofNode, context);
    return proof;
}
function labelsFromRuleNode(ruleNode, context) {
    var Label = _ontology.default.Label, labelNodes = ruleNode.getLabelNodes(), labels = labelNodes.map(function(labelNode) {
        var label = Label.fromLabelNode(labelNode, context);
        return label;
    });
    return labels;
}
function premisesFromRuleNode(ruleNode, context) {
    var Premise = _ontology.default.Premise, premiseNodes = ruleNode.getPremiseNodes(), premises = premiseNodes.map(function(premiseNode) {
        var premise = Premise.fromPremiseNode(premiseNode, context);
        return premise;
    });
    return premises;
}
function conclusionFromRuleNode(ruleNode, context) {
    var Conclusion = _ontology.default.Conclusion, conclusionNode = ruleNode.getConclusionNode(), conclusion = Conclusion.fromConclusionNode(conclusionNode, context);
    return conclusion;
}
function premisesStringFromPremises(premises) {
    var premisesString = premises.reduce(function(premisesString, premise) {
        var premiseString = premise.getString();
        premisesString = premisesString !== null ? "".concat(premisesString, ", ").concat(premiseString) : premiseString; ///
        return premisesString;
    }, null);
    return premisesString;
}
function stringFromLabelsPremisesAndConclusion(labels, premises, conclusion) {
    var premisesString = premisesStringFromPremises(premises), conclusionString = conclusion.getString(), labelsString = (0, _topLevelAssertion.labelsStringFromLabels)(labels), string = premisesString !== null ? "".concat(labelsString, " :: [").concat(premisesString, "] ... ").concat(conclusionString) : "".concat(labelsString, " :: ").concat(conclusionString);
    return string;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9vbnRvbG9neS9ydWxlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBhcnJheVV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcblxuaW1wb3J0IG9udG9sb2d5IGZyb20gXCIuLi9vbnRvbG9neVwiO1xuaW1wb3J0IExvY2FsQ29udGV4dCBmcm9tIFwiLi4vY29udGV4dC9sb2NhbFwiO1xuaW1wb3J0IFN1YnN0aXR1dGlvbnMgZnJvbSBcIi4uL3N1YnN0aXR1dGlvbnNcIjtcblxuaW1wb3J0IHsgZGVmaW5lIH0gZnJvbSBcIi4uL29udG9sb2d5XCI7XG5pbXBvcnQgeyBsYWJlbHNTdHJpbmdGcm9tTGFiZWxzIH0gZnJvbSBcIi4vdG9wTGV2ZWxBc3NlcnRpb25cIjtcbmltcG9ydCB7IGxhYmVsc0Zyb21KU09OLFxuICAgICAgICAgcHJlbWlzZXNGcm9tSlNPTixcbiAgICAgICAgIGNvbmNsdXNpb25Gcm9tSlNPTixcbiAgICAgICAgIGxhYmVsc1RvTGFiZWxzSlNPTixcbiAgICAgICAgIHByZW1pc2VzVG9QcmVtaXNlc0pTT04sXG4gICAgICAgICBjb25jbHVzaW9uVG9Db25jbHVzaW9uSlNPTiB9IGZyb20gXCIuLi91dGlsaXRpZXMvanNvblwiO1xuXG5jb25zdCB7IHJldmVyc2UsIGV4dHJhY3QsIGJhY2t3YXJkc0V2ZXJ5IH0gPSBhcnJheVV0aWxpdGllcztcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lKGNsYXNzIFJ1bGUge1xuICBjb25zdHJ1Y3Rvcihjb250ZXh0LCBub2RlLCBzdHJpbmcsIGxhYmVscywgcHJlbWlzZXMsIGNvbmNsdXNpb24sIHByb29mKSB7XG4gICAgdGhpcy5jb250ZXh0ID0gY29udGV4dDtcbiAgICB0aGlzLm5vZGUgPSBub2RlO1xuICAgIHRoaXMuc3RyaW5nID0gc3RyaW5nO1xuICAgIHRoaXMubGFiZWxzID0gbGFiZWxzO1xuICAgIHRoaXMucHJlbWlzZXMgPSBwcmVtaXNlcztcbiAgICB0aGlzLmNvbmNsdXNpb24gPSBjb25jbHVzaW9uO1xuICAgIHRoaXMucHJvb2YgPSBwcm9vZjtcbiAgfVxuXG4gIGdldENvbnRleHQoKSB7XG4gICAgcmV0dXJuIHRoaXMuY29udGV4dDtcbiAgfVxuXG4gIGdldE5vZGUoKSB7XG4gICAgcmV0dXJuIHRoaXMubm9kZTtcbiAgfVxuXG4gIGdldFN0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5zdHJpbmc7XG4gIH1cblxuICBnZXRMYWJlbHMoKSB7XG4gICAgcmV0dXJuIHRoaXMubGFiZWxzO1xuICB9XG5cbiAgZ2V0UHJlbWlzZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMucHJlbWlzZXM7XG4gIH1cblxuICBnZXRDb25jbHVzaW9uKCkge1xuICAgIHJldHVybiB0aGlzLmNvbmNsdXNpb247XG4gIH1cblxuICBnZXRQcm9vZigpIHtcbiAgICByZXR1cm4gdGhpcy5wcm9vZjtcbiAgfVxuXG4gIG1hdGNoTWV0YXZhcmlhYmxlTmFtZShtZXRhdmFyaWFibGVOYW1lKSB7XG4gICAgY29uc3QgbWV0YXZhcmlhYmxlTmFtZU1hdGNoZXMgPSB0aGlzLmxhYmVscy5zb21lKChsYWJlbCkgPT4ge1xuICAgICAgY29uc3QgbWV0YXZhcmlhYmxlTmFtZU1hdGNoZXMgPSBsYWJlbC5tYXRjaE1ldGF2YXJpYWJsZU5hbWUobWV0YXZhcmlhYmxlTmFtZSk7XG5cbiAgICAgIGlmIChtZXRhdmFyaWFibGVOYW1lTWF0Y2hlcykge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiBtZXRhdmFyaWFibGVOYW1lTWF0Y2hlcztcbiAgfVxuXG4gIHVuaWZ5U3RhdGVtZW50QW5kU3RlcHNPclN1YnByb29mcyhzdGF0ZW1lbnQsIHN0ZXBzT3JTdWJwcm9vZnMsIGNvbnRleHQpIHtcbiAgICBsZXQgc3RhdGVtZW50QW5kU3RlcHNPclN1YnByb29mc1VuaWZ5ID0gZmFsc2U7XG5cbiAgICBjb25zdCBnZW5lcmFsQ29udGV4dCA9IHRoaXMuY29udGV4dCwgLy8vXG4gICAgICAgICAgc3BlY2lmaWNDb250ZXh0ID0gY29udGV4dDsgLy8vXG5cbiAgICBjb25zdCBzdWJzdGl0dXRpb25zID0gU3Vic3RpdHV0aW9ucy5mcm9tTm90aGluZygpLFxuICAgICAgICAgIHN0YXRlbWVudFVuaWZpZXNXaXRoQ29uY2x1c2lvbiA9IHRoaXMudW5pZnlTdGF0ZW1lbnRXaXRoQ29uY2x1c2lvbihzdGF0ZW1lbnQsIHN1YnN0aXR1dGlvbnMsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgaWYgKHN0YXRlbWVudFVuaWZpZXNXaXRoQ29uY2x1c2lvbikge1xuICAgICAgY29uc3Qgc3RlcHNPclN1YnByb29mc1VuaWZ5V2l0aFByZW1pc2VzID0gdGhpcy51bmlmeVN0ZXBzT3JTdWJwcm9vZnNXaXRoUHJlbWlzZXMoc3RlcHNPclN1YnByb29mcywgc3Vic3RpdHV0aW9ucywgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgICAgIGlmIChzdGVwc09yU3VicHJvb2ZzVW5pZnlXaXRoUHJlbWlzZXMpIHtcbiAgICAgICAgY29uc3Qgc3Vic3RpdHV0aW9uc1Jlc29sdmVkID0gc3Vic3RpdHV0aW9ucy5hcmVSZXNvbHZlZCgpO1xuXG4gICAgICAgIGlmIChzdWJzdGl0dXRpb25zUmVzb2x2ZWQpIHtcbiAgICAgICAgICBzdGF0ZW1lbnRBbmRTdGVwc09yU3VicHJvb2ZzVW5pZnkgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHN0YXRlbWVudEFuZFN0ZXBzT3JTdWJwcm9vZnNVbmlmeTtcbiAgfVxuXG4gIHVuaWZ5U3RhdGVtZW50V2l0aENvbmNsdXNpb24oc3RhdGVtZW50LCBzdWJzdGl0dXRpb25zLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KSB7XG4gICAgbGV0IHN0YXRlbWVudFVuaWZpZXNXaXRoQ29uY2x1c2lvbiA9IGZhbHNlO1xuXG4gICAgY29uc3Qgc3RhdGVtZW50VW5pZmllcyA9IHRoaXMuY29uY2x1c2lvbi51bmlmeVN0YXRlbWVudChzdGF0ZW1lbnQsIHN1YnN0aXR1dGlvbnMsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgaWYgKHN0YXRlbWVudFVuaWZpZXMpIHtcbiAgICAgIHN0YXRlbWVudFVuaWZpZXNXaXRoQ29uY2x1c2lvbiA9IHRydWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN0YXRlbWVudFVuaWZpZXNXaXRoQ29uY2x1c2lvbjtcbiAgfVxuXG4gIHVuaWZ5U3RlcHNPclN1YnByb29mc1dpdGhQcmVtaXNlcyhzdGVwc09yU3VicHJvb2ZzLCBzdWJzdGl0dXRpb25zLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KSB7XG4gICAgc3RlcHNPclN1YnByb29mcyA9IHJldmVyc2Uoc3RlcHNPclN1YnByb29mcyk7IC8vL1xuXG4gICAgY29uc3Qgc3RlcHNPclN1YnByb29mc1VuaWZ5V2l0aFByZW1pc2VzID0gYmFja3dhcmRzRXZlcnkodGhpcy5wcmVtaXNlcywgKHByZW1pc2UpID0+IHtcbiAgICAgIGNvbnN0IHN0ZXBVbmlmaWVzV2l0aFByZW1pc2UgPSB0aGlzLnVuaWZ5U3RlcHNPclN1YnByb29mc1dpdGhQcmVtaXNlKHN0ZXBzT3JTdWJwcm9vZnMsIHByZW1pc2UsIHN1YnN0aXR1dGlvbnMsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgICBpZiAoc3RlcFVuaWZpZXNXaXRoUHJlbWlzZSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiBzdGVwc09yU3VicHJvb2ZzVW5pZnlXaXRoUHJlbWlzZXM7XG4gIH1cblxuICB1bmlmeVN0ZXBzT3JTdWJwcm9vZnNXaXRoUHJlbWlzZShzdGVwc09yU3VicHJvb2ZzLCBwcmVtaXNlLCBzdWJzdGl0dXRpb25zLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KSB7XG4gICAgbGV0IHN0ZXBzT3JTdWJwcm9vZnNVbmlmeVdpdGhQcmVtaXNlID0gZmFsc2U7XG5cbiAgICBpZiAoIXN0ZXBzT3JTdWJwcm9vZnNVbmlmeVdpdGhQcmVtaXNlKSB7XG4gICAgICBjb25zdCBjb250ZXh0ID0gc3BlY2lmaWNDb250ZXh0LCAgLy8vXG4gICAgICAgICAgICBwcmVtaXNlVW5pZmllc0luZGVwZW5kZW50bHkgPSBwcmVtaXNlLnVuaWZ5SW5kZXBlbmRlbnRseShzdWJzdGl0dXRpb25zLCBjb250ZXh0KTtcblxuICAgICAgaWYgKHByZW1pc2VVbmlmaWVzSW5kZXBlbmRlbnRseSkge1xuICAgICAgICBzdGVwc09yU3VicHJvb2ZzVW5pZnlXaXRoUHJlbWlzZSA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKCFzdGVwc09yU3VicHJvb2ZzVW5pZnlXaXRoUHJlbWlzZSkge1xuICAgICAgY29uc3Qgc3RlcE9yU3VicHJvb2YgPSBleHRyYWN0KHN0ZXBzT3JTdWJwcm9vZnMsIChzdGVwT3JTdWJwcm9vZikgPT4ge1xuICAgICAgICBjb25zdCBzdGVwT3JTdWJwcm9vZlVuaWZpZXMgPSBwcmVtaXNlLnVuaWZ5U3RlcE9yU3VicHJvb2Yoc3RlcE9yU3VicHJvb2YsIHN1YnN0aXR1dGlvbnMsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgICAgIGlmIChzdGVwT3JTdWJwcm9vZlVuaWZpZXMpIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfSkgfHwgbnVsbDtcblxuICAgICAgaWYgKHN0ZXBPclN1YnByb29mICE9PSBudWxsKSB7XG4gICAgICAgIHN0ZXBzT3JTdWJwcm9vZnNVbmlmeVdpdGhQcmVtaXNlID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gc3RlcHNPclN1YnByb29mc1VuaWZ5V2l0aFByZW1pc2U7XG4gIH1cblxuICB2ZXJpZnkoKSB7XG4gICAgbGV0IHZlcmlmaWVzID0gZmFsc2U7XG5cbiAgICBjb25zdCBydWxlU3RyaW5nID0gdGhpcy5zdHJpbmc7IC8vL1xuXG4gICAgdGhpcy5jb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke3J1bGVTdHJpbmd9JyBydWxlLi4uYCwgdGhpcy5ub2RlKTtcblxuICAgIGNvbnN0IGxhYmVsc1ZlcmlmeSA9IHRoaXMudmVyaWZ5TGFiZWxzKCk7XG5cbiAgICBpZiAobGFiZWxzVmVyaWZ5KSB7XG4gICAgICBjb25zdCBsb2NhbENvbnRleHQgPSBMb2NhbENvbnRleHQuZnJvbUNvbnRleHQodGhpcy5jb250ZXh0KSxcbiAgICAgICAgICAgIGNvbnRleHQgPSBsb2NhbENvbnRleHQsIC8vL1xuICAgICAgICAgICAgcHJlbWlzZXNWZXJpZnkgPSB0aGlzLnZlcmlmeVByZW1pc2VzKGNvbnRleHQpO1xuXG4gICAgICBpZiAocHJlbWlzZXNWZXJpZnkpIHtcbiAgICAgICAgY29uc3QgY29uY2x1c2lvblZlcmlmaWVzID0gdGhpcy52ZXJpZnlDb25jbHVzaW9uKGNvbnRleHQpO1xuXG4gICAgICAgIGlmIChjb25jbHVzaW9uVmVyaWZpZXMpIHtcbiAgICAgICAgICBjb25zdCBwcm9vZlZlcmlmaWVzID0gdGhpcy52ZXJpZnlQcm9vZihjb250ZXh0KTtcblxuICAgICAgICAgIGlmIChwcm9vZlZlcmlmaWVzKSB7XG4gICAgICAgICAgICBjb25zdCBydWxlID0gdGhpczsgIC8vL1xuXG4gICAgICAgICAgICB0aGlzLmNvbnRleHQuYWRkUnVsZShydWxlKTtcblxuICAgICAgICAgICAgdmVyaWZpZXMgPSB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh2ZXJpZmllcykge1xuICAgICAgdGhpcy5jb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7cnVsZVN0cmluZ30nIHJ1bGUuYCwgdGhpcy5ub2RlKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmVyaWZpZXM7XG4gIH1cblxuICB2ZXJpZnlMYWJlbHMoKSB7XG4gICAgY29uc3QgbGFiZWxzVmVyaWZ5ID0gdGhpcy5sYWJlbHMuZXZlcnkoKGxhYmVsKSA9PiB7XG4gICAgICBjb25zdCBuYW1lT25seSA9IHRydWUsXG4gICAgICAgICAgICBsYWJlbFZlcmlmaWVzID0gbGFiZWwudmVyaWZ5KG5hbWVPbmx5KTtcblxuICAgICAgaWYgKGxhYmVsVmVyaWZpZXMpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gbGFiZWxzVmVyaWZ5O1xuICB9XG5cbiAgdmVyaWZ5UHJlbWlzZXMoY29udGV4dCkge1xuICAgIGNvbnN0IHByZW1pc2VzVmVyaWZ5ID0gdGhpcy5wcmVtaXNlcy5ldmVyeSgocHJlbWlzZSkgPT4ge1xuICAgICAgY29uc3QgcHJlbWlzZVZlcmlmaWVzID0gdGhpcy52ZXJpZnlQcmVtaXNlKHByZW1pc2UsIGNvbnRleHQpO1xuXG4gICAgICBpZiAocHJlbWlzZVZlcmlmaWVzKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHByZW1pc2VzVmVyaWZ5O1xuICB9XG5cbiAgdmVyaWZ5UHJlbWlzZShwcmVtaXNlLCBjb250ZXh0KSB7XG4gICAgY29uc3QgcHJlbWlzZVZlcmlmaWVzID0gcHJlbWlzZS52ZXJpZnkoY29udGV4dCk7XG5cbiAgICByZXR1cm4gcHJlbWlzZVZlcmlmaWVzO1xuICB9XG5cbiAgdmVyaWZ5Q29uY2x1c2lvbihjb250ZXh0KSB7XG4gICAgY29uc3QgY29uY2x1c2lvblZlcmlmaWVzID0gdGhpcy5jb25jbHVzaW9uLnZlcmlmeShjb250ZXh0KTtcblxuICAgIHJldHVybiBjb25jbHVzaW9uVmVyaWZpZXM7XG4gIH1cblxuICB2ZXJpZnlQcm9vZihjb250ZXh0KSB7XG4gICAgbGV0IHByb29mVmVyaWZpZXM7XG5cbiAgICBpZiAodGhpcy5wcm9vZiA9PT0gbnVsbCkge1xuICAgICAgcHJvb2ZWZXJpZmllcyA9IHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHN1YnN0aXR1dGlvbnMgPSBTdWJzdGl0dXRpb25zLmZyb21Ob3RoaW5nKCk7XG5cbiAgICAgIHByb29mVmVyaWZpZXMgPSB0aGlzLnByb29mLnZlcmlmeShzdWJzdGl0dXRpb25zLCB0aGlzLmNvbmNsdXNpb24sIGNvbnRleHQpO1xuICAgIH1cblxuICAgIHJldHVybiBwcm9vZlZlcmlmaWVzO1xuICB9XG5cbiAgdG9KU09OKCkge1xuICAgIGNvbnN0IGxhYmVsc0pTT04gPSBsYWJlbHNUb0xhYmVsc0pTT04odGhpcy5sYWJlbHMpLFxuICAgICAgICAgIHByZW1pc2VzSlNPTiA9IHByZW1pc2VzVG9QcmVtaXNlc0pTT04odGhpcy5wcmVtaXNlcyksXG4gICAgICAgICAgY29uY2x1c2lvbkpTT04gPSBjb25jbHVzaW9uVG9Db25jbHVzaW9uSlNPTih0aGlzLmNvbmNsdXNpb24pLFxuICAgICAgICAgIGxhYmVscyA9IGxhYmVsc0pTT04sICAvLy9cbiAgICAgICAgICBwcmVtaXNlcyA9IHByZW1pc2VzSlNPTiwgIC8vL1xuICAgICAgICAgIGNvbmNsdXNpb24gPSBjb25jbHVzaW9uSlNPTiwgIC8vL1xuICAgICAgICAgIGpzb24gPSB7XG4gICAgICAgICAgICBsYWJlbHMsXG4gICAgICAgICAgICBwcmVtaXNlcyxcbiAgICAgICAgICAgIGNvbmNsdXNpb25cbiAgICAgICAgICB9O1xuXG4gICAgcmV0dXJuIGpzb247XG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiUnVsZVwiO1xuXG4gIHN0YXRpYyBmcm9tSlNPTihqc29uLCBjb250ZXh0KSB7XG4gICAgbGV0IHJ1bGU7XG5cbiAgICBjb25zdCBub2RlID0gbnVsbCxcbiAgICAgICAgICBwcm9vZiA9IG51bGwsXG4gICAgICAgICAgbGFiZWxzID0gbGFiZWxzRnJvbUpTT04oanNvbiwgY29udGV4dCksXG4gICAgICAgICAgcHJlbWlzZXMgPSBwcmVtaXNlc0Zyb21KU09OKGpzb24sIGNvbnRleHQpLFxuICAgICAgICAgIGNvbmNsdXNpb24gPSBjb25jbHVzaW9uRnJvbUpTT04oanNvbiwgY29udGV4dCksXG4gICAgICAgICAgc3RyaW5nID0gc3RyaW5nRnJvbUxhYmVsc1ByZW1pc2VzQW5kQ29uY2x1c2lvbihsYWJlbHMsIHByZW1pc2VzLCBjb25jbHVzaW9uKTtcblxuICAgIHJ1bGUgPSBuZXcgUnVsZShjb250ZXh0LCBub2RlLCBzdHJpbmcsIGxhYmVscywgcHJlbWlzZXMsIGNvbmNsdXNpb24sIHByb29mKTtcblxuICAgIHJldHVybiBydWxlO1xuICB9XG5cbiAgc3RhdGljIGZyb21SdWxlTm9kZShydWxlTm9kZSwgY29udGV4dCkge1xuICAgIGNvbnN0IG5vZGUgPSBydWxlTm9kZSwgIC8vL1xuICAgICAgICAgIHByb29mID0gcHJvb2ZGcm9tUnVsZU5vZGUocnVsZU5vZGUsIGNvbnRleHQpLFxuICAgICAgICAgIGxhYmVscyA9IGxhYmVsc0Zyb21SdWxlTm9kZShydWxlTm9kZSwgY29udGV4dCksXG4gICAgICAgICAgcHJlbWlzZXMgPSBwcmVtaXNlc0Zyb21SdWxlTm9kZShydWxlTm9kZSwgY29udGV4dCksXG4gICAgICAgICAgY29uY2x1c2lvbiA9IGNvbmNsdXNpb25Gcm9tUnVsZU5vZGUocnVsZU5vZGUsIGNvbnRleHQpLFxuICAgICAgICAgIHN0cmluZyA9IHN0cmluZ0Zyb21MYWJlbHNQcmVtaXNlc0FuZENvbmNsdXNpb24obGFiZWxzLCBwcmVtaXNlcywgY29uY2x1c2lvbiksXG4gICAgICAgICAgcnVsZSA9IG5ldyBSdWxlKGNvbnRleHQsIG5vZGUsIHN0cmluZywgbGFiZWxzLCBwcmVtaXNlcywgY29uY2x1c2lvbiwgcHJvb2YpO1xuXG4gICAgcmV0dXJuIHJ1bGU7XG4gIH1cbn0pO1xuXG5mdW5jdGlvbiBwcm9vZkZyb21SdWxlTm9kZShydWxlTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IFByb29mIH0gPSBvbnRvbG9neSxcbiAgICAgICAgcHJvb2ZOb2RlID0gcnVsZU5vZGUuZ2V0UHJvb2ZOb2RlKCksXG4gICAgICAgIHByb29mID0gUHJvb2YuZnJvbVByb29mTm9kZShwcm9vZk5vZGUsIGNvbnRleHQpO1xuXG4gIHJldHVybiBwcm9vZjtcbn1cblxuZnVuY3Rpb24gbGFiZWxzRnJvbVJ1bGVOb2RlKHJ1bGVOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgTGFiZWwgfSA9IG9udG9sb2d5LFxuICAgICAgICBsYWJlbE5vZGVzID0gcnVsZU5vZGUuZ2V0TGFiZWxOb2RlcygpLFxuICAgICAgICBsYWJlbHMgPSBsYWJlbE5vZGVzLm1hcCgobGFiZWxOb2RlKSA9PiB7XG4gICAgICAgICAgY29uc3QgbGFiZWwgPSBMYWJlbC5mcm9tTGFiZWxOb2RlKGxhYmVsTm9kZSwgY29udGV4dCk7XG5cbiAgICAgICAgICByZXR1cm4gbGFiZWw7XG4gICAgICAgIH0pO1xuXG4gIHJldHVybiBsYWJlbHM7XG59XG5cbmZ1bmN0aW9uIHByZW1pc2VzRnJvbVJ1bGVOb2RlKHJ1bGVOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgUHJlbWlzZSB9ID0gb250b2xvZ3ksXG4gICAgICAgIHByZW1pc2VOb2RlcyA9IHJ1bGVOb2RlLmdldFByZW1pc2VOb2RlcygpLFxuICAgICAgICBwcmVtaXNlcyA9IHByZW1pc2VOb2Rlcy5tYXAoKHByZW1pc2VOb2RlKSA9PiB7XG4gICAgICAgICAgY29uc3QgcHJlbWlzZSA9IFByZW1pc2UuZnJvbVByZW1pc2VOb2RlKHByZW1pc2VOb2RlLCBjb250ZXh0KTtcblxuICAgICAgICAgIHJldHVybiBwcmVtaXNlO1xuICAgICAgICB9KTtcblxuICByZXR1cm4gcHJlbWlzZXM7XG59XG5cbmZ1bmN0aW9uIGNvbmNsdXNpb25Gcm9tUnVsZU5vZGUocnVsZU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBDb25jbHVzaW9uIH0gPSBvbnRvbG9neSxcbiAgICAgICAgY29uY2x1c2lvbk5vZGUgPSBydWxlTm9kZS5nZXRDb25jbHVzaW9uTm9kZSgpLFxuICAgICAgICBjb25jbHVzaW9uID0gQ29uY2x1c2lvbi5mcm9tQ29uY2x1c2lvbk5vZGUoY29uY2x1c2lvbk5vZGUsIGNvbnRleHQpO1xuXG4gIHJldHVybiBjb25jbHVzaW9uO1xufVxuXG5mdW5jdGlvbiBwcmVtaXNlc1N0cmluZ0Zyb21QcmVtaXNlcyhwcmVtaXNlcykge1xuICBjb25zdCBwcmVtaXNlc1N0cmluZyA9IHByZW1pc2VzLnJlZHVjZSgocHJlbWlzZXNTdHJpbmcsIHByZW1pc2UpID0+IHtcbiAgICBjb25zdCBwcmVtaXNlU3RyaW5nID0gcHJlbWlzZS5nZXRTdHJpbmcoKTtcblxuICAgIHByZW1pc2VzU3RyaW5nID0gKHByZW1pc2VzU3RyaW5nICE9PSBudWxsKSA/XG4gICAgICAgICAgICAgICAgICAgICAgIGAke3ByZW1pc2VzU3RyaW5nfSwgJHtwcmVtaXNlU3RyaW5nfWAgOlxuICAgICAgICAgICAgICAgICAgICAgICAgIHByZW1pc2VTdHJpbmc7ICAvLy9cblxuICAgIHJldHVybiBwcmVtaXNlc1N0cmluZztcbiAgfSwgbnVsbCk7XG5cbiAgcmV0dXJuIHByZW1pc2VzU3RyaW5nO1xufVxuXG5mdW5jdGlvbiBzdHJpbmdGcm9tTGFiZWxzUHJlbWlzZXNBbmRDb25jbHVzaW9uKGxhYmVscywgcHJlbWlzZXMsIGNvbmNsdXNpb24pIHtcbiAgY29uc3QgcHJlbWlzZXNTdHJpbmcgPSBwcmVtaXNlc1N0cmluZ0Zyb21QcmVtaXNlcyhwcmVtaXNlcyksXG4gICAgICAgIGNvbmNsdXNpb25TdHJpbmcgPSBjb25jbHVzaW9uLmdldFN0cmluZygpLFxuICAgICAgICBsYWJlbHNTdHJpbmcgPSBsYWJlbHNTdHJpbmdGcm9tTGFiZWxzKGxhYmVscyksXG4gICAgICAgIHN0cmluZyA9IChwcmVtaXNlc1N0cmluZyAhPT0gbnVsbCkgP1xuICAgICAgICAgICAgICAgICAgICBgJHtsYWJlbHNTdHJpbmd9IDo6IFske3ByZW1pc2VzU3RyaW5nfV0gLi4uICR7Y29uY2x1c2lvblN0cmluZ31gIDpcbiAgICAgICAgICAgICAgICAgICAgICBgJHtsYWJlbHNTdHJpbmd9IDo6ICR7Y29uY2x1c2lvblN0cmluZ31gO1xuXG4gIHJldHVybiBzdHJpbmc7XG59XG4iXSwibmFtZXMiOlsicmV2ZXJzZSIsImFycmF5VXRpbGl0aWVzIiwiZXh0cmFjdCIsImJhY2t3YXJkc0V2ZXJ5IiwiZGVmaW5lIiwiUnVsZSIsImNvbnRleHQiLCJub2RlIiwic3RyaW5nIiwibGFiZWxzIiwicHJlbWlzZXMiLCJjb25jbHVzaW9uIiwicHJvb2YiLCJnZXRDb250ZXh0IiwiZ2V0Tm9kZSIsImdldFN0cmluZyIsImdldExhYmVscyIsImdldFByZW1pc2VzIiwiZ2V0Q29uY2x1c2lvbiIsImdldFByb29mIiwibWF0Y2hNZXRhdmFyaWFibGVOYW1lIiwibWV0YXZhcmlhYmxlTmFtZSIsIm1ldGF2YXJpYWJsZU5hbWVNYXRjaGVzIiwic29tZSIsImxhYmVsIiwidW5pZnlTdGF0ZW1lbnRBbmRTdGVwc09yU3VicHJvb2ZzIiwic3RhdGVtZW50Iiwic3RlcHNPclN1YnByb29mcyIsInN0YXRlbWVudEFuZFN0ZXBzT3JTdWJwcm9vZnNVbmlmeSIsImdlbmVyYWxDb250ZXh0Iiwic3BlY2lmaWNDb250ZXh0Iiwic3Vic3RpdHV0aW9ucyIsIlN1YnN0aXR1dGlvbnMiLCJmcm9tTm90aGluZyIsInN0YXRlbWVudFVuaWZpZXNXaXRoQ29uY2x1c2lvbiIsInVuaWZ5U3RhdGVtZW50V2l0aENvbmNsdXNpb24iLCJzdGVwc09yU3VicHJvb2ZzVW5pZnlXaXRoUHJlbWlzZXMiLCJ1bmlmeVN0ZXBzT3JTdWJwcm9vZnNXaXRoUHJlbWlzZXMiLCJzdWJzdGl0dXRpb25zUmVzb2x2ZWQiLCJhcmVSZXNvbHZlZCIsInN0YXRlbWVudFVuaWZpZXMiLCJ1bmlmeVN0YXRlbWVudCIsInByZW1pc2UiLCJzdGVwVW5pZmllc1dpdGhQcmVtaXNlIiwidW5pZnlTdGVwc09yU3VicHJvb2ZzV2l0aFByZW1pc2UiLCJzdGVwc09yU3VicHJvb2ZzVW5pZnlXaXRoUHJlbWlzZSIsInByZW1pc2VVbmlmaWVzSW5kZXBlbmRlbnRseSIsInVuaWZ5SW5kZXBlbmRlbnRseSIsInN0ZXBPclN1YnByb29mIiwic3RlcE9yU3VicHJvb2ZVbmlmaWVzIiwidW5pZnlTdGVwT3JTdWJwcm9vZiIsInZlcmlmeSIsInZlcmlmaWVzIiwicnVsZVN0cmluZyIsInRyYWNlIiwibGFiZWxzVmVyaWZ5IiwidmVyaWZ5TGFiZWxzIiwibG9jYWxDb250ZXh0IiwiTG9jYWxDb250ZXh0IiwiZnJvbUNvbnRleHQiLCJwcmVtaXNlc1ZlcmlmeSIsInZlcmlmeVByZW1pc2VzIiwiY29uY2x1c2lvblZlcmlmaWVzIiwidmVyaWZ5Q29uY2x1c2lvbiIsInByb29mVmVyaWZpZXMiLCJ2ZXJpZnlQcm9vZiIsInJ1bGUiLCJhZGRSdWxlIiwiZGVidWciLCJldmVyeSIsIm5hbWVPbmx5IiwibGFiZWxWZXJpZmllcyIsInByZW1pc2VWZXJpZmllcyIsInZlcmlmeVByZW1pc2UiLCJ0b0pTT04iLCJsYWJlbHNKU09OIiwibGFiZWxzVG9MYWJlbHNKU09OIiwicHJlbWlzZXNKU09OIiwicHJlbWlzZXNUb1ByZW1pc2VzSlNPTiIsImNvbmNsdXNpb25KU09OIiwiY29uY2x1c2lvblRvQ29uY2x1c2lvbkpTT04iLCJqc29uIiwiZnJvbUpTT04iLCJsYWJlbHNGcm9tSlNPTiIsInByZW1pc2VzRnJvbUpTT04iLCJjb25jbHVzaW9uRnJvbUpTT04iLCJzdHJpbmdGcm9tTGFiZWxzUHJlbWlzZXNBbmRDb25jbHVzaW9uIiwiZnJvbVJ1bGVOb2RlIiwicnVsZU5vZGUiLCJwcm9vZkZyb21SdWxlTm9kZSIsImxhYmVsc0Zyb21SdWxlTm9kZSIsInByZW1pc2VzRnJvbVJ1bGVOb2RlIiwiY29uY2x1c2lvbkZyb21SdWxlTm9kZSIsIm5hbWUiLCJQcm9vZiIsIm9udG9sb2d5IiwicHJvb2ZOb2RlIiwiZ2V0UHJvb2ZOb2RlIiwiZnJvbVByb29mTm9kZSIsIkxhYmVsIiwibGFiZWxOb2RlcyIsImdldExhYmVsTm9kZXMiLCJtYXAiLCJsYWJlbE5vZGUiLCJmcm9tTGFiZWxOb2RlIiwiUHJlbWlzZSIsInByZW1pc2VOb2RlcyIsImdldFByZW1pc2VOb2RlcyIsInByZW1pc2VOb2RlIiwiZnJvbVByZW1pc2VOb2RlIiwiQ29uY2x1c2lvbiIsImNvbmNsdXNpb25Ob2RlIiwiZ2V0Q29uY2x1c2lvbk5vZGUiLCJmcm9tQ29uY2x1c2lvbk5vZGUiLCJwcmVtaXNlc1N0cmluZ0Zyb21QcmVtaXNlcyIsInByZW1pc2VzU3RyaW5nIiwicmVkdWNlIiwicHJlbWlzZVN0cmluZyIsImNvbmNsdXNpb25TdHJpbmciLCJsYWJlbHNTdHJpbmciLCJsYWJlbHNTdHJpbmdGcm9tTGFiZWxzIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFtQkE7OztlQUFBOzs7eUJBakIrQjtnRUFFVjs0REFDSTtvRUFDQztpQ0FHYTtvQkFNSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFM0MsSUFBUUEsVUFBcUNDLHlCQUFjLENBQW5ERCxTQUFTRSxVQUE0QkQseUJBQWMsQ0FBMUNDLFNBQVNDLGlCQUFtQkYseUJBQWMsQ0FBakNFO0lBRTFCLFdBQWVDLElBQUFBLGdCQUFNLHlCQUFDO2FBQU1DLEtBQ2RDLE9BQU8sRUFBRUMsSUFBSSxFQUFFQyxNQUFNLEVBQUVDLE1BQU0sRUFBRUMsUUFBUSxFQUFFQyxVQUFVLEVBQUVDLEtBQUs7Z0NBRDVDUDtRQUV4QixJQUFJLENBQUNDLE9BQU8sR0FBR0E7UUFDZixJQUFJLENBQUNDLElBQUksR0FBR0E7UUFDWixJQUFJLENBQUNDLE1BQU0sR0FBR0E7UUFDZCxJQUFJLENBQUNDLE1BQU0sR0FBR0E7UUFDZCxJQUFJLENBQUNDLFFBQVEsR0FBR0E7UUFDaEIsSUFBSSxDQUFDQyxVQUFVLEdBQUdBO1FBQ2xCLElBQUksQ0FBQ0MsS0FBSyxHQUFHQTs7OztZQUdmQyxLQUFBQTttQkFB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