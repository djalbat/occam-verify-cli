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
var _dom = /*#__PURE__*/ _interop_require_wildcard(require("../dom"));
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
var _default = (0, _dom.domAssigned)((_Rule = /*#__PURE__*/ function() {
    function Rule(context, string, labels, premises, conclusion, proof) {
        _class_call_check(this, Rule);
        this.context = context;
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
                this.context.trace("Verifying the '".concat(ruleString, "' rule..."));
                var labelsVerify = this.verifyLabels();
                if (labelsVerify) {
                    var premisesVerify = this.verifyPremises(this.context);
                    if (premisesVerify) {
                        var conclusionVerifies = this.verifyConclusion(this.context);
                        if (conclusionVerifies) {
                            var proofVerifies = this.verifyProof(this.context);
                            if (proofVerifies) {
                                var rule = this; ///
                                this.context.addRule(rule);
                                verifies = true;
                            }
                        }
                    }
                }
                if (verifies) {
                    this.context.debug("...verified the '".concat(ruleString, "' rule."));
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
                var proof = null, labels = (0, _json.labelsFromJSON)(json, context), premises = (0, _json.premisesFromJSON)(json, context), conclusion = (0, _json.conclusionFromJSON)(json, context), string = stringFromLabelsPremisesAndConclusion(labels, premises, conclusion);
                rule = new Rule(context, string, labels, premises, conclusion, proof);
                return rule;
            }
        },
        {
            key: "fromRuleNode",
            value: function fromRuleNode(ruleNode, context) {
                var proof = proofFromRuleNode(ruleNode, context), labels = labelsFromRuleNode(ruleNode, context), premises = premisesFromRuleNode(ruleNode, context), conclusion = conclusionFromRuleNode(ruleNode, context), string = stringFromLabelsPremisesAndConclusion(labels, premises, conclusion), rule = new Rule(context, string, labels, premises, conclusion, proof);
                return rule;
            }
        }
    ]);
    return Rule;
}(), _define_property(_Rule, "name", "Rule"), _Rule));
function proofFromRuleNode(ruleNode, context) {
    var Proof = _dom.default.Proof, proofNode = ruleNode.getProofNode(), proof = Proof.fromProofNode(proofNode, context);
    return proof;
}
function labelsFromRuleNode(ruleNode, context) {
    var Label = _dom.default.Label, labelNodes = ruleNode.getLabelNodes(), labels = labelNodes.map(function(labelNode) {
        var label = Label.fromLabelNode(labelNode, context);
        return label;
    });
    return labels;
}
function premisesFromRuleNode(ruleNode, context) {
    var Premise = _dom.default.Premise, premiseNodes = ruleNode.getPremiseNodes(), premises = premiseNodes.map(function(premiseNode) {
        var premise = Premise.fromPremiseNode(premiseNode, context);
        return premise;
    });
    return premises;
}
function conclusionFromRuleNode(ruleNode, context) {
    var Conclusion = _dom.default.Conclusion, conclusionNode = ruleNode.getConclusionNode(), conclusion = Conclusion.fromConclusionNode(conclusionNode, context);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kb20vcnVsZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgYXJyYXlVdGlsaXRpZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5cbmltcG9ydCBkb20gZnJvbSBcIi4uL2RvbVwiO1xuaW1wb3J0IFN1YnN0aXR1dGlvbnMgZnJvbSBcIi4uL3N1YnN0aXR1dGlvbnNcIjtcblxuaW1wb3J0IHsgZG9tQXNzaWduZWQgfSBmcm9tIFwiLi4vZG9tXCI7XG5pbXBvcnQgeyBsYWJlbHNTdHJpbmdGcm9tTGFiZWxzIH0gZnJvbSBcIi4vdG9wTGV2ZWxBc3NlcnRpb25cIjtcbmltcG9ydCB7IGxhYmVsc0Zyb21KU09OLFxuICAgICAgICAgcHJlbWlzZXNGcm9tSlNPTixcbiAgICAgICAgIGNvbmNsdXNpb25Gcm9tSlNPTixcbiAgICAgICAgIGxhYmVsc1RvTGFiZWxzSlNPTixcbiAgICAgICAgIHByZW1pc2VzVG9QcmVtaXNlc0pTT04sXG4gICAgICAgICBjb25jbHVzaW9uVG9Db25jbHVzaW9uSlNPTiB9IGZyb20gXCIuLi91dGlsaXRpZXMvanNvblwiO1xuXG5jb25zdCB7IHJldmVyc2UsIGV4dHJhY3QsIGJhY2t3YXJkc0V2ZXJ5IH0gPSBhcnJheVV0aWxpdGllcztcblxuZXhwb3J0IGRlZmF1bHQgZG9tQXNzaWduZWQoY2xhc3MgUnVsZSB7XG4gIGNvbnN0cnVjdG9yKGNvbnRleHQsIHN0cmluZywgbGFiZWxzLCBwcmVtaXNlcywgY29uY2x1c2lvbiwgcHJvb2YpIHtcbiAgICB0aGlzLmNvbnRleHQgPSBjb250ZXh0O1xuICAgIHRoaXMuc3RyaW5nID0gc3RyaW5nO1xuICAgIHRoaXMubGFiZWxzID0gbGFiZWxzO1xuICAgIHRoaXMucHJlbWlzZXMgPSBwcmVtaXNlcztcbiAgICB0aGlzLmNvbmNsdXNpb24gPSBjb25jbHVzaW9uO1xuICAgIHRoaXMucHJvb2YgPSBwcm9vZjtcbiAgfVxuXG4gIGdldENvbnRleHQoKSB7XG4gICAgcmV0dXJuIHRoaXMuY29udGV4dDtcbiAgfVxuXG4gIGdldFN0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5zdHJpbmc7XG4gIH1cblxuICBnZXRMYWJlbHMoKSB7XG4gICAgcmV0dXJuIHRoaXMubGFiZWxzO1xuICB9XG5cbiAgZ2V0UHJlbWlzZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMucHJlbWlzZXM7XG4gIH1cblxuICBnZXRDb25jbHVzaW9uKCkge1xuICAgIHJldHVybiB0aGlzLmNvbmNsdXNpb247XG4gIH1cblxuICBnZXRQcm9vZigpIHtcbiAgICByZXR1cm4gdGhpcy5wcm9vZjtcbiAgfVxuXG4gIG1hdGNoTWV0YXZhcmlhYmxlTmFtZShtZXRhdmFyaWFibGVOYW1lKSB7XG4gICAgY29uc3QgbWV0YXZhcmlhYmxlTmFtZU1hdGNoZXMgPSB0aGlzLmxhYmVscy5zb21lKChsYWJlbCkgPT4ge1xuICAgICAgY29uc3QgbWV0YXZhcmlhYmxlTmFtZU1hdGNoZXMgPSBsYWJlbC5tYXRjaE1ldGF2YXJpYWJsZU5hbWUobWV0YXZhcmlhYmxlTmFtZSk7XG5cbiAgICAgIGlmIChtZXRhdmFyaWFibGVOYW1lTWF0Y2hlcykge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiBtZXRhdmFyaWFibGVOYW1lTWF0Y2hlcztcbiAgfVxuXG4gIHVuaWZ5U3RhdGVtZW50QW5kU3RlcHNPclN1YnByb29mcyhzdGF0ZW1lbnQsIHN0ZXBzT3JTdWJwcm9vZnMsIGNvbnRleHQpIHtcbiAgICBsZXQgc3RhdGVtZW50QW5kU3RlcHNPclN1YnByb29mc1VuaWZ5ID0gZmFsc2U7XG5cbiAgICBjb25zdCBnZW5lcmFsQ29udGV4dCA9IHRoaXMuY29udGV4dCwgLy8vXG4gICAgICAgICAgc3BlY2lmaWNDb250ZXh0ID0gY29udGV4dDsgLy8vXG5cbiAgICBjb25zdCBzdWJzdGl0dXRpb25zID0gU3Vic3RpdHV0aW9ucy5mcm9tTm90aGluZygpLFxuICAgICAgICAgIHN0YXRlbWVudFVuaWZpZXNXaXRoQ29uY2x1c2lvbiA9IHRoaXMudW5pZnlTdGF0ZW1lbnRXaXRoQ29uY2x1c2lvbihzdGF0ZW1lbnQsIHN1YnN0aXR1dGlvbnMsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgaWYgKHN0YXRlbWVudFVuaWZpZXNXaXRoQ29uY2x1c2lvbikge1xuICAgICAgY29uc3Qgc3RlcHNPclN1YnByb29mc1VuaWZ5V2l0aFByZW1pc2VzID0gdGhpcy51bmlmeVN0ZXBzT3JTdWJwcm9vZnNXaXRoUHJlbWlzZXMoc3RlcHNPclN1YnByb29mcywgc3Vic3RpdHV0aW9ucywgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgICAgIGlmIChzdGVwc09yU3VicHJvb2ZzVW5pZnlXaXRoUHJlbWlzZXMpIHtcbiAgICAgICAgY29uc3Qgc3Vic3RpdHV0aW9uc1Jlc29sdmVkID0gc3Vic3RpdHV0aW9ucy5hcmVSZXNvbHZlZCgpO1xuXG4gICAgICAgIGlmIChzdWJzdGl0dXRpb25zUmVzb2x2ZWQpIHtcbiAgICAgICAgICBzdGF0ZW1lbnRBbmRTdGVwc09yU3VicHJvb2ZzVW5pZnkgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHN0YXRlbWVudEFuZFN0ZXBzT3JTdWJwcm9vZnNVbmlmeTtcbiAgfVxuXG4gIHVuaWZ5U3RhdGVtZW50V2l0aENvbmNsdXNpb24oc3RhdGVtZW50LCBzdWJzdGl0dXRpb25zLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KSB7XG4gICAgbGV0IHN0YXRlbWVudFVuaWZpZXNXaXRoQ29uY2x1c2lvbiA9IGZhbHNlO1xuXG4gICAgY29uc3Qgc3RhdGVtZW50VW5pZmllcyA9IHRoaXMuY29uY2x1c2lvbi51bmlmeVN0YXRlbWVudChzdGF0ZW1lbnQsIHN1YnN0aXR1dGlvbnMsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgaWYgKHN0YXRlbWVudFVuaWZpZXMpIHtcbiAgICAgIHN0YXRlbWVudFVuaWZpZXNXaXRoQ29uY2x1c2lvbiA9IHRydWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN0YXRlbWVudFVuaWZpZXNXaXRoQ29uY2x1c2lvbjtcbiAgfVxuXG4gIHVuaWZ5U3RlcHNPclN1YnByb29mc1dpdGhQcmVtaXNlcyhzdGVwc09yU3VicHJvb2ZzLCBzdWJzdGl0dXRpb25zLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KSB7XG4gICAgc3RlcHNPclN1YnByb29mcyA9IHJldmVyc2Uoc3RlcHNPclN1YnByb29mcyk7IC8vL1xuXG4gICAgY29uc3Qgc3RlcHNPclN1YnByb29mc1VuaWZ5V2l0aFByZW1pc2VzID0gYmFja3dhcmRzRXZlcnkodGhpcy5wcmVtaXNlcywgKHByZW1pc2UpID0+IHtcbiAgICAgIGNvbnN0IHN0ZXBVbmlmaWVzV2l0aFByZW1pc2UgPSB0aGlzLnVuaWZ5U3RlcHNPclN1YnByb29mc1dpdGhQcmVtaXNlKHN0ZXBzT3JTdWJwcm9vZnMsIHByZW1pc2UsIHN1YnN0aXR1dGlvbnMsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgICBpZiAoc3RlcFVuaWZpZXNXaXRoUHJlbWlzZSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiBzdGVwc09yU3VicHJvb2ZzVW5pZnlXaXRoUHJlbWlzZXM7XG4gIH1cblxuICB1bmlmeVN0ZXBzT3JTdWJwcm9vZnNXaXRoUHJlbWlzZShzdGVwc09yU3VicHJvb2ZzLCBwcmVtaXNlLCBzdWJzdGl0dXRpb25zLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KSB7XG4gICAgbGV0IHN0ZXBzT3JTdWJwcm9vZnNVbmlmeVdpdGhQcmVtaXNlID0gZmFsc2U7XG5cbiAgICBpZiAoIXN0ZXBzT3JTdWJwcm9vZnNVbmlmeVdpdGhQcmVtaXNlKSB7XG4gICAgICBjb25zdCBjb250ZXh0ID0gc3BlY2lmaWNDb250ZXh0LCAgLy8vXG4gICAgICAgICAgICBwcmVtaXNlVW5pZmllc0luZGVwZW5kZW50bHkgPSBwcmVtaXNlLnVuaWZ5SW5kZXBlbmRlbnRseShzdWJzdGl0dXRpb25zLCBjb250ZXh0KTtcblxuICAgICAgaWYgKHByZW1pc2VVbmlmaWVzSW5kZXBlbmRlbnRseSkge1xuICAgICAgICBzdGVwc09yU3VicHJvb2ZzVW5pZnlXaXRoUHJlbWlzZSA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKCFzdGVwc09yU3VicHJvb2ZzVW5pZnlXaXRoUHJlbWlzZSkge1xuICAgICAgY29uc3Qgc3RlcE9yU3VicHJvb2YgPSBleHRyYWN0KHN0ZXBzT3JTdWJwcm9vZnMsIChzdGVwT3JTdWJwcm9vZikgPT4ge1xuICAgICAgICBjb25zdCBzdGVwT3JTdWJwcm9vZlVuaWZpZXMgPSBwcmVtaXNlLnVuaWZ5U3RlcE9yU3VicHJvb2Yoc3RlcE9yU3VicHJvb2YsIHN1YnN0aXR1dGlvbnMsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgICAgIGlmIChzdGVwT3JTdWJwcm9vZlVuaWZpZXMpIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfSkgfHwgbnVsbDtcblxuICAgICAgaWYgKHN0ZXBPclN1YnByb29mICE9PSBudWxsKSB7XG4gICAgICAgIHN0ZXBzT3JTdWJwcm9vZnNVbmlmeVdpdGhQcmVtaXNlID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gc3RlcHNPclN1YnByb29mc1VuaWZ5V2l0aFByZW1pc2U7XG4gIH1cblxuICB2ZXJpZnkoKSB7XG4gICAgbGV0IHZlcmlmaWVzID0gZmFsc2U7XG5cbiAgICBjb25zdCBydWxlU3RyaW5nID0gdGhpcy5zdHJpbmc7IC8vL1xuXG4gICAgdGhpcy5jb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke3J1bGVTdHJpbmd9JyBydWxlLi4uYCk7XG5cbiAgICBjb25zdCBsYWJlbHNWZXJpZnkgPSB0aGlzLnZlcmlmeUxhYmVscygpO1xuXG4gICAgaWYgKGxhYmVsc1ZlcmlmeSkge1xuICAgICAgY29uc3QgcHJlbWlzZXNWZXJpZnkgPSB0aGlzLnZlcmlmeVByZW1pc2VzKHRoaXMuY29udGV4dCk7XG5cbiAgICAgIGlmIChwcmVtaXNlc1ZlcmlmeSkge1xuICAgICAgICBjb25zdCBjb25jbHVzaW9uVmVyaWZpZXMgPSB0aGlzLnZlcmlmeUNvbmNsdXNpb24odGhpcy5jb250ZXh0KTtcblxuICAgICAgICBpZiAoY29uY2x1c2lvblZlcmlmaWVzKSB7XG4gICAgICAgICAgY29uc3QgcHJvb2ZWZXJpZmllcyA9IHRoaXMudmVyaWZ5UHJvb2YodGhpcy5jb250ZXh0KTtcblxuICAgICAgICAgIGlmIChwcm9vZlZlcmlmaWVzKSB7XG4gICAgICAgICAgICBjb25zdCBydWxlID0gdGhpczsgIC8vL1xuXG4gICAgICAgICAgICB0aGlzLmNvbnRleHQuYWRkUnVsZShydWxlKTtcblxuICAgICAgICAgICAgdmVyaWZpZXMgPSB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh2ZXJpZmllcykge1xuICAgICAgdGhpcy5jb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7cnVsZVN0cmluZ30nIHJ1bGUuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZlcmlmaWVzO1xuICB9XG5cbiAgdmVyaWZ5TGFiZWxzKCkge1xuICAgIGNvbnN0IGxhYmVsc1ZlcmlmeSA9IHRoaXMubGFiZWxzLmV2ZXJ5KChsYWJlbCkgPT4ge1xuICAgICAgY29uc3QgbmFtZU9ubHkgPSB0cnVlLFxuICAgICAgICAgICAgbGFiZWxWZXJpZmllcyA9IGxhYmVsLnZlcmlmeShuYW1lT25seSk7XG5cbiAgICAgIGlmIChsYWJlbFZlcmlmaWVzKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIGxhYmVsc1ZlcmlmeTtcbiAgfVxuXG4gIHZlcmlmeVByZW1pc2VzKGNvbnRleHQpIHtcbiAgICBjb25zdCBwcmVtaXNlc1ZlcmlmeSA9IHRoaXMucHJlbWlzZXMuZXZlcnkoKHByZW1pc2UpID0+IHtcbiAgICAgIGNvbnN0IHByZW1pc2VWZXJpZmllcyA9IHRoaXMudmVyaWZ5UHJlbWlzZShwcmVtaXNlLCBjb250ZXh0KTtcblxuICAgICAgaWYgKHByZW1pc2VWZXJpZmllcykge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiBwcmVtaXNlc1ZlcmlmeTtcbiAgfVxuXG4gIHZlcmlmeVByZW1pc2UocHJlbWlzZSwgY29udGV4dCkge1xuICAgIGNvbnN0IHByZW1pc2VWZXJpZmllcyA9IHByZW1pc2UudmVyaWZ5KGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIHByZW1pc2VWZXJpZmllcztcbiAgfVxuXG4gIHZlcmlmeUNvbmNsdXNpb24oY29udGV4dCkge1xuICAgIGNvbnN0IGNvbmNsdXNpb25WZXJpZmllcyA9IHRoaXMuY29uY2x1c2lvbi52ZXJpZnkoY29udGV4dCk7XG5cbiAgICByZXR1cm4gY29uY2x1c2lvblZlcmlmaWVzO1xuICB9XG5cbiAgdmVyaWZ5UHJvb2YoY29udGV4dCkge1xuICAgIGxldCBwcm9vZlZlcmlmaWVzO1xuXG4gICAgaWYgKHRoaXMucHJvb2YgPT09IG51bGwpIHtcbiAgICAgIHByb29mVmVyaWZpZXMgPSB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBzdWJzdGl0dXRpb25zID0gU3Vic3RpdHV0aW9ucy5mcm9tTm90aGluZygpO1xuXG4gICAgICBwcm9vZlZlcmlmaWVzID0gdGhpcy5wcm9vZi52ZXJpZnkoc3Vic3RpdHV0aW9ucywgdGhpcy5jb25jbHVzaW9uLCBjb250ZXh0KTtcbiAgICB9XG5cbiAgICByZXR1cm4gcHJvb2ZWZXJpZmllcztcbiAgfVxuXG4gIHRvSlNPTigpIHtcbiAgICBjb25zdCBsYWJlbHNKU09OID0gbGFiZWxzVG9MYWJlbHNKU09OKHRoaXMubGFiZWxzKSxcbiAgICAgICAgICBwcmVtaXNlc0pTT04gPSBwcmVtaXNlc1RvUHJlbWlzZXNKU09OKHRoaXMucHJlbWlzZXMpLFxuICAgICAgICAgIGNvbmNsdXNpb25KU09OID0gY29uY2x1c2lvblRvQ29uY2x1c2lvbkpTT04odGhpcy5jb25jbHVzaW9uKSxcbiAgICAgICAgICBsYWJlbHMgPSBsYWJlbHNKU09OLCAgLy8vXG4gICAgICAgICAgcHJlbWlzZXMgPSBwcmVtaXNlc0pTT04sICAvLy9cbiAgICAgICAgICBjb25jbHVzaW9uID0gY29uY2x1c2lvbkpTT04sICAvLy9cbiAgICAgICAgICBqc29uID0ge1xuICAgICAgICAgICAgbGFiZWxzLFxuICAgICAgICAgICAgcHJlbWlzZXMsXG4gICAgICAgICAgICBjb25jbHVzaW9uXG4gICAgICAgICAgfTtcblxuICAgIHJldHVybiBqc29uO1xuICB9XG5cbiAgc3RhdGljIG5hbWUgPSBcIlJ1bGVcIjtcblxuICBzdGF0aWMgZnJvbUpTT04oanNvbiwgY29udGV4dCkge1xuICAgIGxldCBydWxlO1xuXG4gICAgY29uc3QgcHJvb2YgPSBudWxsLFxuICAgICAgICAgIGxhYmVscyA9IGxhYmVsc0Zyb21KU09OKGpzb24sIGNvbnRleHQpLFxuICAgICAgICAgIHByZW1pc2VzID0gcHJlbWlzZXNGcm9tSlNPTihqc29uLCBjb250ZXh0KSxcbiAgICAgICAgICBjb25jbHVzaW9uID0gY29uY2x1c2lvbkZyb21KU09OKGpzb24sIGNvbnRleHQpLFxuICAgICAgICAgIHN0cmluZyA9IHN0cmluZ0Zyb21MYWJlbHNQcmVtaXNlc0FuZENvbmNsdXNpb24obGFiZWxzLCBwcmVtaXNlcywgY29uY2x1c2lvbik7XG5cbiAgICBydWxlID0gbmV3IFJ1bGUoY29udGV4dCwgc3RyaW5nLCBsYWJlbHMsIHByZW1pc2VzLCBjb25jbHVzaW9uLCBwcm9vZik7XG5cbiAgICByZXR1cm4gcnVsZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUnVsZU5vZGUocnVsZU5vZGUsIGNvbnRleHQpIHtcbiAgICBjb25zdCBwcm9vZiA9IHByb29mRnJvbVJ1bGVOb2RlKHJ1bGVOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgICBsYWJlbHMgPSBsYWJlbHNGcm9tUnVsZU5vZGUocnVsZU5vZGUsIGNvbnRleHQpLFxuICAgICAgICAgIHByZW1pc2VzID0gcHJlbWlzZXNGcm9tUnVsZU5vZGUocnVsZU5vZGUsIGNvbnRleHQpLFxuICAgICAgICAgIGNvbmNsdXNpb24gPSBjb25jbHVzaW9uRnJvbVJ1bGVOb2RlKHJ1bGVOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgICBzdHJpbmcgPSBzdHJpbmdGcm9tTGFiZWxzUHJlbWlzZXNBbmRDb25jbHVzaW9uKGxhYmVscywgcHJlbWlzZXMsIGNvbmNsdXNpb24pLFxuICAgICAgICAgIHJ1bGUgPSBuZXcgUnVsZShjb250ZXh0LCBzdHJpbmcsIGxhYmVscywgcHJlbWlzZXMsIGNvbmNsdXNpb24sIHByb29mKTtcblxuICAgIHJldHVybiBydWxlO1xuICB9XG59KTtcblxuZnVuY3Rpb24gcHJvb2ZGcm9tUnVsZU5vZGUocnVsZU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBQcm9vZiB9ID0gZG9tLFxuICAgICAgICBwcm9vZk5vZGUgPSBydWxlTm9kZS5nZXRQcm9vZk5vZGUoKSxcbiAgICAgICAgcHJvb2YgPSBQcm9vZi5mcm9tUHJvb2ZOb2RlKHByb29mTm9kZSwgY29udGV4dCk7XG5cbiAgcmV0dXJuIHByb29mO1xufVxuXG5mdW5jdGlvbiBsYWJlbHNGcm9tUnVsZU5vZGUocnVsZU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBMYWJlbCB9ID0gZG9tLFxuICAgICAgICBsYWJlbE5vZGVzID0gcnVsZU5vZGUuZ2V0TGFiZWxOb2RlcygpLFxuICAgICAgICBsYWJlbHMgPSBsYWJlbE5vZGVzLm1hcCgobGFiZWxOb2RlKSA9PiB7XG4gICAgICAgICAgY29uc3QgbGFiZWwgPSBMYWJlbC5mcm9tTGFiZWxOb2RlKGxhYmVsTm9kZSwgY29udGV4dCk7XG5cbiAgICAgICAgICByZXR1cm4gbGFiZWw7XG4gICAgICAgIH0pO1xuXG4gIHJldHVybiBsYWJlbHM7XG59XG5cbmZ1bmN0aW9uIHByZW1pc2VzRnJvbVJ1bGVOb2RlKHJ1bGVOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgUHJlbWlzZSB9ID0gZG9tLFxuICAgICAgICBwcmVtaXNlTm9kZXMgPSBydWxlTm9kZS5nZXRQcmVtaXNlTm9kZXMoKSxcbiAgICAgICAgcHJlbWlzZXMgPSBwcmVtaXNlTm9kZXMubWFwKChwcmVtaXNlTm9kZSkgPT4ge1xuICAgICAgICAgIGNvbnN0IHByZW1pc2UgPSBQcmVtaXNlLmZyb21QcmVtaXNlTm9kZShwcmVtaXNlTm9kZSwgY29udGV4dCk7XG5cbiAgICAgICAgICByZXR1cm4gcHJlbWlzZTtcbiAgICAgICAgfSk7XG5cbiAgcmV0dXJuIHByZW1pc2VzO1xufVxuXG5mdW5jdGlvbiBjb25jbHVzaW9uRnJvbVJ1bGVOb2RlKHJ1bGVOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgQ29uY2x1c2lvbiB9ID0gZG9tLFxuICAgICAgICBjb25jbHVzaW9uTm9kZSA9IHJ1bGVOb2RlLmdldENvbmNsdXNpb25Ob2RlKCksXG4gICAgICAgIGNvbmNsdXNpb24gPSBDb25jbHVzaW9uLmZyb21Db25jbHVzaW9uTm9kZShjb25jbHVzaW9uTm9kZSwgY29udGV4dCk7XG5cbiAgcmV0dXJuIGNvbmNsdXNpb247XG59XG5cbmZ1bmN0aW9uIHByZW1pc2VzU3RyaW5nRnJvbVByZW1pc2VzKHByZW1pc2VzKSB7XG4gIGNvbnN0IHByZW1pc2VzU3RyaW5nID0gcHJlbWlzZXMucmVkdWNlKChwcmVtaXNlc1N0cmluZywgcHJlbWlzZSkgPT4ge1xuICAgIGNvbnN0IHByZW1pc2VTdHJpbmcgPSBwcmVtaXNlLmdldFN0cmluZygpO1xuXG4gICAgcHJlbWlzZXNTdHJpbmcgPSAocHJlbWlzZXNTdHJpbmcgIT09IG51bGwpID9cbiAgICAgICAgICAgICAgICAgICAgICAgYCR7cHJlbWlzZXNTdHJpbmd9LCAke3ByZW1pc2VTdHJpbmd9YCA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgcHJlbWlzZVN0cmluZzsgIC8vL1xuXG4gICAgcmV0dXJuIHByZW1pc2VzU3RyaW5nO1xuICB9LCBudWxsKTtcblxuICByZXR1cm4gcHJlbWlzZXNTdHJpbmc7XG59XG5cbmZ1bmN0aW9uIHN0cmluZ0Zyb21MYWJlbHNQcmVtaXNlc0FuZENvbmNsdXNpb24obGFiZWxzLCBwcmVtaXNlcywgY29uY2x1c2lvbikge1xuICBjb25zdCBwcmVtaXNlc1N0cmluZyA9IHByZW1pc2VzU3RyaW5nRnJvbVByZW1pc2VzKHByZW1pc2VzKSxcbiAgICAgICAgY29uY2x1c2lvblN0cmluZyA9IGNvbmNsdXNpb24uZ2V0U3RyaW5nKCksXG4gICAgICAgIGxhYmVsc1N0cmluZyA9IGxhYmVsc1N0cmluZ0Zyb21MYWJlbHMobGFiZWxzKSxcbiAgICAgICAgc3RyaW5nID0gKHByZW1pc2VzU3RyaW5nICE9PSBudWxsKSA/XG4gICAgICAgICAgICAgICAgICAgIGAke2xhYmVsc1N0cmluZ30gOjogWyR7cHJlbWlzZXNTdHJpbmd9XSAuLi4gJHtjb25jbHVzaW9uU3RyaW5nfWAgOlxuICAgICAgICAgICAgICAgICAgICAgIGAke2xhYmVsc1N0cmluZ30gOjogJHtjb25jbHVzaW9uU3RyaW5nfWA7XG5cbiAgcmV0dXJuIHN0cmluZztcbn1cbiJdLCJuYW1lcyI6WyJyZXZlcnNlIiwiYXJyYXlVdGlsaXRpZXMiLCJleHRyYWN0IiwiYmFja3dhcmRzRXZlcnkiLCJkb21Bc3NpZ25lZCIsIlJ1bGUiLCJjb250ZXh0Iiwic3RyaW5nIiwibGFiZWxzIiwicHJlbWlzZXMiLCJjb25jbHVzaW9uIiwicHJvb2YiLCJnZXRDb250ZXh0IiwiZ2V0U3RyaW5nIiwiZ2V0TGFiZWxzIiwiZ2V0UHJlbWlzZXMiLCJnZXRDb25jbHVzaW9uIiwiZ2V0UHJvb2YiLCJtYXRjaE1ldGF2YXJpYWJsZU5hbWUiLCJtZXRhdmFyaWFibGVOYW1lIiwibWV0YXZhcmlhYmxlTmFtZU1hdGNoZXMiLCJzb21lIiwibGFiZWwiLCJ1bmlmeVN0YXRlbWVudEFuZFN0ZXBzT3JTdWJwcm9vZnMiLCJzdGF0ZW1lbnQiLCJzdGVwc09yU3VicHJvb2ZzIiwic3RhdGVtZW50QW5kU3RlcHNPclN1YnByb29mc1VuaWZ5IiwiZ2VuZXJhbENvbnRleHQiLCJzcGVjaWZpY0NvbnRleHQiLCJzdWJzdGl0dXRpb25zIiwiU3Vic3RpdHV0aW9ucyIsImZyb21Ob3RoaW5nIiwic3RhdGVtZW50VW5pZmllc1dpdGhDb25jbHVzaW9uIiwidW5pZnlTdGF0ZW1lbnRXaXRoQ29uY2x1c2lvbiIsInN0ZXBzT3JTdWJwcm9vZnNVbmlmeVdpdGhQcmVtaXNlcyIsInVuaWZ5U3RlcHNPclN1YnByb29mc1dpdGhQcmVtaXNlcyIsInN1YnN0aXR1dGlvbnNSZXNvbHZlZCIsImFyZVJlc29sdmVkIiwic3RhdGVtZW50VW5pZmllcyIsInVuaWZ5U3RhdGVtZW50IiwicHJlbWlzZSIsInN0ZXBVbmlmaWVzV2l0aFByZW1pc2UiLCJ1bmlmeVN0ZXBzT3JTdWJwcm9vZnNXaXRoUHJlbWlzZSIsInN0ZXBzT3JTdWJwcm9vZnNVbmlmeVdpdGhQcmVtaXNlIiwicHJlbWlzZVVuaWZpZXNJbmRlcGVuZGVudGx5IiwidW5pZnlJbmRlcGVuZGVudGx5Iiwic3RlcE9yU3VicHJvb2YiLCJzdGVwT3JTdWJwcm9vZlVuaWZpZXMiLCJ1bmlmeVN0ZXBPclN1YnByb29mIiwidmVyaWZ5IiwidmVyaWZpZXMiLCJydWxlU3RyaW5nIiwidHJhY2UiLCJsYWJlbHNWZXJpZnkiLCJ2ZXJpZnlMYWJlbHMiLCJwcmVtaXNlc1ZlcmlmeSIsInZlcmlmeVByZW1pc2VzIiwiY29uY2x1c2lvblZlcmlmaWVzIiwidmVyaWZ5Q29uY2x1c2lvbiIsInByb29mVmVyaWZpZXMiLCJ2ZXJpZnlQcm9vZiIsInJ1bGUiLCJhZGRSdWxlIiwiZGVidWciLCJldmVyeSIsIm5hbWVPbmx5IiwibGFiZWxWZXJpZmllcyIsInByZW1pc2VWZXJpZmllcyIsInZlcmlmeVByZW1pc2UiLCJ0b0pTT04iLCJsYWJlbHNKU09OIiwibGFiZWxzVG9MYWJlbHNKU09OIiwicHJlbWlzZXNKU09OIiwicHJlbWlzZXNUb1ByZW1pc2VzSlNPTiIsImNvbmNsdXNpb25KU09OIiwiY29uY2x1c2lvblRvQ29uY2x1c2lvbkpTT04iLCJqc29uIiwiZnJvbUpTT04iLCJsYWJlbHNGcm9tSlNPTiIsInByZW1pc2VzRnJvbUpTT04iLCJjb25jbHVzaW9uRnJvbUpTT04iLCJzdHJpbmdGcm9tTGFiZWxzUHJlbWlzZXNBbmRDb25jbHVzaW9uIiwiZnJvbVJ1bGVOb2RlIiwicnVsZU5vZGUiLCJwcm9vZkZyb21SdWxlTm9kZSIsImxhYmVsc0Zyb21SdWxlTm9kZSIsInByZW1pc2VzRnJvbVJ1bGVOb2RlIiwiY29uY2x1c2lvbkZyb21SdWxlTm9kZSIsIm5hbWUiLCJQcm9vZiIsImRvbSIsInByb29mTm9kZSIsImdldFByb29mTm9kZSIsImZyb21Qcm9vZk5vZGUiLCJMYWJlbCIsImxhYmVsTm9kZXMiLCJnZXRMYWJlbE5vZGVzIiwibWFwIiwibGFiZWxOb2RlIiwiZnJvbUxhYmVsTm9kZSIsIlByZW1pc2UiLCJwcmVtaXNlTm9kZXMiLCJnZXRQcmVtaXNlTm9kZXMiLCJwcmVtaXNlTm9kZSIsImZyb21QcmVtaXNlTm9kZSIsIkNvbmNsdXNpb24iLCJjb25jbHVzaW9uTm9kZSIsImdldENvbmNsdXNpb25Ob2RlIiwiZnJvbUNvbmNsdXNpb25Ob2RlIiwicHJlbWlzZXNTdHJpbmdGcm9tUHJlbWlzZXMiLCJwcmVtaXNlc1N0cmluZyIsInJlZHVjZSIsInByZW1pc2VTdHJpbmciLCJjb25jbHVzaW9uU3RyaW5nIiwibGFiZWxzU3RyaW5nIiwibGFiZWxzU3RyaW5nRnJvbUxhYmVscyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBa0JBOzs7ZUFBQTs7O3lCQWhCK0I7MkRBRWY7b0VBQ1U7aUNBR2E7b0JBTUk7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