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
var _default = (0, _dom.domAssigned)((_Rule = /*#__PURE__*/ function() {
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kb20vcnVsZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgYXJyYXlVdGlsaXRpZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5cbmltcG9ydCBkb20gZnJvbSBcIi4uL2RvbVwiO1xuaW1wb3J0IExvY2FsQ29udGV4dCBmcm9tIFwiLi4vY29udGV4dC9sb2NhbFwiO1xuaW1wb3J0IFN1YnN0aXR1dGlvbnMgZnJvbSBcIi4uL3N1YnN0aXR1dGlvbnNcIjtcblxuaW1wb3J0IHsgZG9tQXNzaWduZWQgfSBmcm9tIFwiLi4vZG9tXCI7XG5pbXBvcnQgeyBsYWJlbHNTdHJpbmdGcm9tTGFiZWxzIH0gZnJvbSBcIi4vdG9wTGV2ZWxBc3NlcnRpb25cIjtcbmltcG9ydCB7IGxhYmVsc0Zyb21KU09OLFxuICAgICAgICAgcHJlbWlzZXNGcm9tSlNPTixcbiAgICAgICAgIGNvbmNsdXNpb25Gcm9tSlNPTixcbiAgICAgICAgIGxhYmVsc1RvTGFiZWxzSlNPTixcbiAgICAgICAgIHByZW1pc2VzVG9QcmVtaXNlc0pTT04sXG4gICAgICAgICBjb25jbHVzaW9uVG9Db25jbHVzaW9uSlNPTiB9IGZyb20gXCIuLi91dGlsaXRpZXMvanNvblwiO1xuXG5jb25zdCB7IHJldmVyc2UsIGV4dHJhY3QsIGJhY2t3YXJkc0V2ZXJ5IH0gPSBhcnJheVV0aWxpdGllcztcblxuZXhwb3J0IGRlZmF1bHQgZG9tQXNzaWduZWQoY2xhc3MgUnVsZSB7XG4gIGNvbnN0cnVjdG9yKGNvbnRleHQsIG5vZGUsIHN0cmluZywgbGFiZWxzLCBwcmVtaXNlcywgY29uY2x1c2lvbiwgcHJvb2YpIHtcbiAgICB0aGlzLmNvbnRleHQgPSBjb250ZXh0O1xuICAgIHRoaXMubm9kZSA9IG5vZGU7XG4gICAgdGhpcy5zdHJpbmcgPSBzdHJpbmc7XG4gICAgdGhpcy5sYWJlbHMgPSBsYWJlbHM7XG4gICAgdGhpcy5wcmVtaXNlcyA9IHByZW1pc2VzO1xuICAgIHRoaXMuY29uY2x1c2lvbiA9IGNvbmNsdXNpb247XG4gICAgdGhpcy5wcm9vZiA9IHByb29mO1xuICB9XG5cbiAgZ2V0Q29udGV4dCgpIHtcbiAgICByZXR1cm4gdGhpcy5jb250ZXh0O1xuICB9XG5cbiAgZ2V0Tm9kZSgpIHtcbiAgICByZXR1cm4gdGhpcy5ub2RlO1xuICB9XG5cbiAgZ2V0U3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLnN0cmluZztcbiAgfVxuXG4gIGdldExhYmVscygpIHtcbiAgICByZXR1cm4gdGhpcy5sYWJlbHM7XG4gIH1cblxuICBnZXRQcmVtaXNlcygpIHtcbiAgICByZXR1cm4gdGhpcy5wcmVtaXNlcztcbiAgfVxuXG4gIGdldENvbmNsdXNpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuY29uY2x1c2lvbjtcbiAgfVxuXG4gIGdldFByb29mKCkge1xuICAgIHJldHVybiB0aGlzLnByb29mO1xuICB9XG5cbiAgbWF0Y2hNZXRhdmFyaWFibGVOYW1lKG1ldGF2YXJpYWJsZU5hbWUpIHtcbiAgICBjb25zdCBtZXRhdmFyaWFibGVOYW1lTWF0Y2hlcyA9IHRoaXMubGFiZWxzLnNvbWUoKGxhYmVsKSA9PiB7XG4gICAgICBjb25zdCBtZXRhdmFyaWFibGVOYW1lTWF0Y2hlcyA9IGxhYmVsLm1hdGNoTWV0YXZhcmlhYmxlTmFtZShtZXRhdmFyaWFibGVOYW1lKTtcblxuICAgICAgaWYgKG1ldGF2YXJpYWJsZU5hbWVNYXRjaGVzKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIG1ldGF2YXJpYWJsZU5hbWVNYXRjaGVzO1xuICB9XG5cbiAgdW5pZnlTdGF0ZW1lbnRBbmRTdGVwc09yU3VicHJvb2ZzKHN0YXRlbWVudCwgc3RlcHNPclN1YnByb29mcywgY29udGV4dCkge1xuICAgIGxldCBzdGF0ZW1lbnRBbmRTdGVwc09yU3VicHJvb2ZzVW5pZnkgPSBmYWxzZTtcblxuICAgIGNvbnN0IGdlbmVyYWxDb250ZXh0ID0gdGhpcy5jb250ZXh0LCAvLy9cbiAgICAgICAgICBzcGVjaWZpY0NvbnRleHQgPSBjb250ZXh0OyAvLy9cblxuICAgIGNvbnN0IHN1YnN0aXR1dGlvbnMgPSBTdWJzdGl0dXRpb25zLmZyb21Ob3RoaW5nKCksXG4gICAgICAgICAgc3RhdGVtZW50VW5pZmllc1dpdGhDb25jbHVzaW9uID0gdGhpcy51bmlmeVN0YXRlbWVudFdpdGhDb25jbHVzaW9uKHN0YXRlbWVudCwgc3Vic3RpdHV0aW9ucywgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgICBpZiAoc3RhdGVtZW50VW5pZmllc1dpdGhDb25jbHVzaW9uKSB7XG4gICAgICBjb25zdCBzdGVwc09yU3VicHJvb2ZzVW5pZnlXaXRoUHJlbWlzZXMgPSB0aGlzLnVuaWZ5U3RlcHNPclN1YnByb29mc1dpdGhQcmVtaXNlcyhzdGVwc09yU3VicHJvb2ZzLCBzdWJzdGl0dXRpb25zLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgICAgaWYgKHN0ZXBzT3JTdWJwcm9vZnNVbmlmeVdpdGhQcmVtaXNlcykge1xuICAgICAgICBjb25zdCBzdWJzdGl0dXRpb25zUmVzb2x2ZWQgPSBzdWJzdGl0dXRpb25zLmFyZVJlc29sdmVkKCk7XG5cbiAgICAgICAgaWYgKHN1YnN0aXR1dGlvbnNSZXNvbHZlZCkge1xuICAgICAgICAgIHN0YXRlbWVudEFuZFN0ZXBzT3JTdWJwcm9vZnNVbmlmeSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gc3RhdGVtZW50QW5kU3RlcHNPclN1YnByb29mc1VuaWZ5O1xuICB9XG5cbiAgdW5pZnlTdGF0ZW1lbnRXaXRoQ29uY2x1c2lvbihzdGF0ZW1lbnQsIHN1YnN0aXR1dGlvbnMsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpIHtcbiAgICBsZXQgc3RhdGVtZW50VW5pZmllc1dpdGhDb25jbHVzaW9uID0gZmFsc2U7XG5cbiAgICBjb25zdCBzdGF0ZW1lbnRVbmlmaWVzID0gdGhpcy5jb25jbHVzaW9uLnVuaWZ5U3RhdGVtZW50KHN0YXRlbWVudCwgc3Vic3RpdHV0aW9ucywgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgICBpZiAoc3RhdGVtZW50VW5pZmllcykge1xuICAgICAgc3RhdGVtZW50VW5pZmllc1dpdGhDb25jbHVzaW9uID0gdHJ1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3RhdGVtZW50VW5pZmllc1dpdGhDb25jbHVzaW9uO1xuICB9XG5cbiAgdW5pZnlTdGVwc09yU3VicHJvb2ZzV2l0aFByZW1pc2VzKHN0ZXBzT3JTdWJwcm9vZnMsIHN1YnN0aXR1dGlvbnMsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpIHtcbiAgICBzdGVwc09yU3VicHJvb2ZzID0gcmV2ZXJzZShzdGVwc09yU3VicHJvb2ZzKTsgLy8vXG5cbiAgICBjb25zdCBzdGVwc09yU3VicHJvb2ZzVW5pZnlXaXRoUHJlbWlzZXMgPSBiYWNrd2FyZHNFdmVyeSh0aGlzLnByZW1pc2VzLCAocHJlbWlzZSkgPT4ge1xuICAgICAgY29uc3Qgc3RlcFVuaWZpZXNXaXRoUHJlbWlzZSA9IHRoaXMudW5pZnlTdGVwc09yU3VicHJvb2ZzV2l0aFByZW1pc2Uoc3RlcHNPclN1YnByb29mcywgcHJlbWlzZSwgc3Vic3RpdHV0aW9ucywgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgICAgIGlmIChzdGVwVW5pZmllc1dpdGhQcmVtaXNlKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHN0ZXBzT3JTdWJwcm9vZnNVbmlmeVdpdGhQcmVtaXNlcztcbiAgfVxuXG4gIHVuaWZ5U3RlcHNPclN1YnByb29mc1dpdGhQcmVtaXNlKHN0ZXBzT3JTdWJwcm9vZnMsIHByZW1pc2UsIHN1YnN0aXR1dGlvbnMsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpIHtcbiAgICBsZXQgc3RlcHNPclN1YnByb29mc1VuaWZ5V2l0aFByZW1pc2UgPSBmYWxzZTtcblxuICAgIGlmICghc3RlcHNPclN1YnByb29mc1VuaWZ5V2l0aFByZW1pc2UpIHtcbiAgICAgIGNvbnN0IGNvbnRleHQgPSBzcGVjaWZpY0NvbnRleHQsICAvLy9cbiAgICAgICAgICAgIHByZW1pc2VVbmlmaWVzSW5kZXBlbmRlbnRseSA9IHByZW1pc2UudW5pZnlJbmRlcGVuZGVudGx5KHN1YnN0aXR1dGlvbnMsIGNvbnRleHQpO1xuXG4gICAgICBpZiAocHJlbWlzZVVuaWZpZXNJbmRlcGVuZGVudGx5KSB7XG4gICAgICAgIHN0ZXBzT3JTdWJwcm9vZnNVbmlmeVdpdGhQcmVtaXNlID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoIXN0ZXBzT3JTdWJwcm9vZnNVbmlmeVdpdGhQcmVtaXNlKSB7XG4gICAgICBjb25zdCBzdGVwT3JTdWJwcm9vZiA9IGV4dHJhY3Qoc3RlcHNPclN1YnByb29mcywgKHN0ZXBPclN1YnByb29mKSA9PiB7XG4gICAgICAgIGNvbnN0IHN0ZXBPclN1YnByb29mVW5pZmllcyA9IHByZW1pc2UudW5pZnlTdGVwT3JTdWJwcm9vZihzdGVwT3JTdWJwcm9vZiwgc3Vic3RpdHV0aW9ucywgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgICAgICAgaWYgKHN0ZXBPclN1YnByb29mVW5pZmllcykge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICB9KSB8fCBudWxsO1xuXG4gICAgICBpZiAoc3RlcE9yU3VicHJvb2YgIT09IG51bGwpIHtcbiAgICAgICAgc3RlcHNPclN1YnByb29mc1VuaWZ5V2l0aFByZW1pc2UgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBzdGVwc09yU3VicHJvb2ZzVW5pZnlXaXRoUHJlbWlzZTtcbiAgfVxuXG4gIHZlcmlmeSgpIHtcbiAgICBsZXQgdmVyaWZpZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IHJ1bGVTdHJpbmcgPSB0aGlzLnN0cmluZzsgLy8vXG5cbiAgICB0aGlzLmNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7cnVsZVN0cmluZ30nIHJ1bGUuLi5gLCB0aGlzLm5vZGUpO1xuXG4gICAgY29uc3QgbGFiZWxzVmVyaWZ5ID0gdGhpcy52ZXJpZnlMYWJlbHMoKTtcblxuICAgIGlmIChsYWJlbHNWZXJpZnkpIHtcbiAgICAgIGNvbnN0IGxvY2FsQ29udGV4dCA9IExvY2FsQ29udGV4dC5mcm9tQ29udGV4dCh0aGlzLmNvbnRleHQpLFxuICAgICAgICAgICAgY29udGV4dCA9IGxvY2FsQ29udGV4dCwgLy8vXG4gICAgICAgICAgICBwcmVtaXNlc1ZlcmlmeSA9IHRoaXMudmVyaWZ5UHJlbWlzZXMoY29udGV4dCk7XG5cbiAgICAgIGlmIChwcmVtaXNlc1ZlcmlmeSkge1xuICAgICAgICBjb25zdCBjb25jbHVzaW9uVmVyaWZpZXMgPSB0aGlzLnZlcmlmeUNvbmNsdXNpb24oY29udGV4dCk7XG5cbiAgICAgICAgaWYgKGNvbmNsdXNpb25WZXJpZmllcykge1xuICAgICAgICAgIGNvbnN0IHByb29mVmVyaWZpZXMgPSB0aGlzLnZlcmlmeVByb29mKGNvbnRleHQpO1xuXG4gICAgICAgICAgaWYgKHByb29mVmVyaWZpZXMpIHtcbiAgICAgICAgICAgIGNvbnN0IHJ1bGUgPSB0aGlzOyAgLy8vXG5cbiAgICAgICAgICAgIHRoaXMuY29udGV4dC5hZGRSdWxlKHJ1bGUpO1xuXG4gICAgICAgICAgICB2ZXJpZmllcyA9IHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHZlcmlmaWVzKSB7XG4gICAgICB0aGlzLmNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHtydWxlU3RyaW5nfScgcnVsZS5gLCB0aGlzLm5vZGUpO1xuICAgIH1cblxuICAgIHJldHVybiB2ZXJpZmllcztcbiAgfVxuXG4gIHZlcmlmeUxhYmVscygpIHtcbiAgICBjb25zdCBsYWJlbHNWZXJpZnkgPSB0aGlzLmxhYmVscy5ldmVyeSgobGFiZWwpID0+IHtcbiAgICAgIGNvbnN0IG5hbWVPbmx5ID0gdHJ1ZSxcbiAgICAgICAgICAgIGxhYmVsVmVyaWZpZXMgPSBsYWJlbC52ZXJpZnkobmFtZU9ubHkpO1xuXG4gICAgICBpZiAobGFiZWxWZXJpZmllcykge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiBsYWJlbHNWZXJpZnk7XG4gIH1cblxuICB2ZXJpZnlQcmVtaXNlcyhjb250ZXh0KSB7XG4gICAgY29uc3QgcHJlbWlzZXNWZXJpZnkgPSB0aGlzLnByZW1pc2VzLmV2ZXJ5KChwcmVtaXNlKSA9PiB7XG4gICAgICBjb25zdCBwcmVtaXNlVmVyaWZpZXMgPSB0aGlzLnZlcmlmeVByZW1pc2UocHJlbWlzZSwgY29udGV4dCk7XG5cbiAgICAgIGlmIChwcmVtaXNlVmVyaWZpZXMpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gcHJlbWlzZXNWZXJpZnk7XG4gIH1cblxuICB2ZXJpZnlQcmVtaXNlKHByZW1pc2UsIGNvbnRleHQpIHtcbiAgICBjb25zdCBwcmVtaXNlVmVyaWZpZXMgPSBwcmVtaXNlLnZlcmlmeShjb250ZXh0KTtcblxuICAgIHJldHVybiBwcmVtaXNlVmVyaWZpZXM7XG4gIH1cblxuICB2ZXJpZnlDb25jbHVzaW9uKGNvbnRleHQpIHtcbiAgICBjb25zdCBjb25jbHVzaW9uVmVyaWZpZXMgPSB0aGlzLmNvbmNsdXNpb24udmVyaWZ5KGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIGNvbmNsdXNpb25WZXJpZmllcztcbiAgfVxuXG4gIHZlcmlmeVByb29mKGNvbnRleHQpIHtcbiAgICBsZXQgcHJvb2ZWZXJpZmllcztcblxuICAgIGlmICh0aGlzLnByb29mID09PSBudWxsKSB7XG4gICAgICBwcm9vZlZlcmlmaWVzID0gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3Qgc3Vic3RpdHV0aW9ucyA9IFN1YnN0aXR1dGlvbnMuZnJvbU5vdGhpbmcoKTtcblxuICAgICAgcHJvb2ZWZXJpZmllcyA9IHRoaXMucHJvb2YudmVyaWZ5KHN1YnN0aXR1dGlvbnMsIHRoaXMuY29uY2x1c2lvbiwgY29udGV4dCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHByb29mVmVyaWZpZXM7XG4gIH1cblxuICB0b0pTT04oKSB7XG4gICAgY29uc3QgbGFiZWxzSlNPTiA9IGxhYmVsc1RvTGFiZWxzSlNPTih0aGlzLmxhYmVscyksXG4gICAgICAgICAgcHJlbWlzZXNKU09OID0gcHJlbWlzZXNUb1ByZW1pc2VzSlNPTih0aGlzLnByZW1pc2VzKSxcbiAgICAgICAgICBjb25jbHVzaW9uSlNPTiA9IGNvbmNsdXNpb25Ub0NvbmNsdXNpb25KU09OKHRoaXMuY29uY2x1c2lvbiksXG4gICAgICAgICAgbGFiZWxzID0gbGFiZWxzSlNPTiwgIC8vL1xuICAgICAgICAgIHByZW1pc2VzID0gcHJlbWlzZXNKU09OLCAgLy8vXG4gICAgICAgICAgY29uY2x1c2lvbiA9IGNvbmNsdXNpb25KU09OLCAgLy8vXG4gICAgICAgICAganNvbiA9IHtcbiAgICAgICAgICAgIGxhYmVscyxcbiAgICAgICAgICAgIHByZW1pc2VzLFxuICAgICAgICAgICAgY29uY2x1c2lvblxuICAgICAgICAgIH07XG5cbiAgICByZXR1cm4ganNvbjtcbiAgfVxuXG4gIHN0YXRpYyBuYW1lID0gXCJSdWxlXCI7XG5cbiAgc3RhdGljIGZyb21KU09OKGpzb24sIGNvbnRleHQpIHtcbiAgICBsZXQgcnVsZTtcblxuICAgIGNvbnN0IG5vZGUgPSBudWxsLFxuICAgICAgICAgIHByb29mID0gbnVsbCxcbiAgICAgICAgICBsYWJlbHMgPSBsYWJlbHNGcm9tSlNPTihqc29uLCBjb250ZXh0KSxcbiAgICAgICAgICBwcmVtaXNlcyA9IHByZW1pc2VzRnJvbUpTT04oanNvbiwgY29udGV4dCksXG4gICAgICAgICAgY29uY2x1c2lvbiA9IGNvbmNsdXNpb25Gcm9tSlNPTihqc29uLCBjb250ZXh0KSxcbiAgICAgICAgICBzdHJpbmcgPSBzdHJpbmdGcm9tTGFiZWxzUHJlbWlzZXNBbmRDb25jbHVzaW9uKGxhYmVscywgcHJlbWlzZXMsIGNvbmNsdXNpb24pO1xuXG4gICAgcnVsZSA9IG5ldyBSdWxlKGNvbnRleHQsIG5vZGUsIHN0cmluZywgbGFiZWxzLCBwcmVtaXNlcywgY29uY2x1c2lvbiwgcHJvb2YpO1xuXG4gICAgcmV0dXJuIHJ1bGU7XG4gIH1cblxuICBzdGF0aWMgZnJvbVJ1bGVOb2RlKHJ1bGVOb2RlLCBjb250ZXh0KSB7XG4gICAgY29uc3Qgbm9kZSA9IHJ1bGVOb2RlLCAgLy8vXG4gICAgICAgICAgcHJvb2YgPSBwcm9vZkZyb21SdWxlTm9kZShydWxlTm9kZSwgY29udGV4dCksXG4gICAgICAgICAgbGFiZWxzID0gbGFiZWxzRnJvbVJ1bGVOb2RlKHJ1bGVOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgICBwcmVtaXNlcyA9IHByZW1pc2VzRnJvbVJ1bGVOb2RlKHJ1bGVOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgICBjb25jbHVzaW9uID0gY29uY2x1c2lvbkZyb21SdWxlTm9kZShydWxlTm9kZSwgY29udGV4dCksXG4gICAgICAgICAgc3RyaW5nID0gc3RyaW5nRnJvbUxhYmVsc1ByZW1pc2VzQW5kQ29uY2x1c2lvbihsYWJlbHMsIHByZW1pc2VzLCBjb25jbHVzaW9uKSxcbiAgICAgICAgICBydWxlID0gbmV3IFJ1bGUoY29udGV4dCwgbm9kZSwgc3RyaW5nLCBsYWJlbHMsIHByZW1pc2VzLCBjb25jbHVzaW9uLCBwcm9vZik7XG5cbiAgICByZXR1cm4gcnVsZTtcbiAgfVxufSk7XG5cbmZ1bmN0aW9uIHByb29mRnJvbVJ1bGVOb2RlKHJ1bGVOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgUHJvb2YgfSA9IGRvbSxcbiAgICAgICAgcHJvb2ZOb2RlID0gcnVsZU5vZGUuZ2V0UHJvb2ZOb2RlKCksXG4gICAgICAgIHByb29mID0gUHJvb2YuZnJvbVByb29mTm9kZShwcm9vZk5vZGUsIGNvbnRleHQpO1xuXG4gIHJldHVybiBwcm9vZjtcbn1cblxuZnVuY3Rpb24gbGFiZWxzRnJvbVJ1bGVOb2RlKHJ1bGVOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgTGFiZWwgfSA9IGRvbSxcbiAgICAgICAgbGFiZWxOb2RlcyA9IHJ1bGVOb2RlLmdldExhYmVsTm9kZXMoKSxcbiAgICAgICAgbGFiZWxzID0gbGFiZWxOb2Rlcy5tYXAoKGxhYmVsTm9kZSkgPT4ge1xuICAgICAgICAgIGNvbnN0IGxhYmVsID0gTGFiZWwuZnJvbUxhYmVsTm9kZShsYWJlbE5vZGUsIGNvbnRleHQpO1xuXG4gICAgICAgICAgcmV0dXJuIGxhYmVsO1xuICAgICAgICB9KTtcblxuICByZXR1cm4gbGFiZWxzO1xufVxuXG5mdW5jdGlvbiBwcmVtaXNlc0Zyb21SdWxlTm9kZShydWxlTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IFByZW1pc2UgfSA9IGRvbSxcbiAgICAgICAgcHJlbWlzZU5vZGVzID0gcnVsZU5vZGUuZ2V0UHJlbWlzZU5vZGVzKCksXG4gICAgICAgIHByZW1pc2VzID0gcHJlbWlzZU5vZGVzLm1hcCgocHJlbWlzZU5vZGUpID0+IHtcbiAgICAgICAgICBjb25zdCBwcmVtaXNlID0gUHJlbWlzZS5mcm9tUHJlbWlzZU5vZGUocHJlbWlzZU5vZGUsIGNvbnRleHQpO1xuXG4gICAgICAgICAgcmV0dXJuIHByZW1pc2U7XG4gICAgICAgIH0pO1xuXG4gIHJldHVybiBwcmVtaXNlcztcbn1cblxuZnVuY3Rpb24gY29uY2x1c2lvbkZyb21SdWxlTm9kZShydWxlTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IENvbmNsdXNpb24gfSA9IGRvbSxcbiAgICAgICAgY29uY2x1c2lvbk5vZGUgPSBydWxlTm9kZS5nZXRDb25jbHVzaW9uTm9kZSgpLFxuICAgICAgICBjb25jbHVzaW9uID0gQ29uY2x1c2lvbi5mcm9tQ29uY2x1c2lvbk5vZGUoY29uY2x1c2lvbk5vZGUsIGNvbnRleHQpO1xuXG4gIHJldHVybiBjb25jbHVzaW9uO1xufVxuXG5mdW5jdGlvbiBwcmVtaXNlc1N0cmluZ0Zyb21QcmVtaXNlcyhwcmVtaXNlcykge1xuICBjb25zdCBwcmVtaXNlc1N0cmluZyA9IHByZW1pc2VzLnJlZHVjZSgocHJlbWlzZXNTdHJpbmcsIHByZW1pc2UpID0+IHtcbiAgICBjb25zdCBwcmVtaXNlU3RyaW5nID0gcHJlbWlzZS5nZXRTdHJpbmcoKTtcblxuICAgIHByZW1pc2VzU3RyaW5nID0gKHByZW1pc2VzU3RyaW5nICE9PSBudWxsKSA/XG4gICAgICAgICAgICAgICAgICAgICAgIGAke3ByZW1pc2VzU3RyaW5nfSwgJHtwcmVtaXNlU3RyaW5nfWAgOlxuICAgICAgICAgICAgICAgICAgICAgICAgIHByZW1pc2VTdHJpbmc7ICAvLy9cblxuICAgIHJldHVybiBwcmVtaXNlc1N0cmluZztcbiAgfSwgbnVsbCk7XG5cbiAgcmV0dXJuIHByZW1pc2VzU3RyaW5nO1xufVxuXG5mdW5jdGlvbiBzdHJpbmdGcm9tTGFiZWxzUHJlbWlzZXNBbmRDb25jbHVzaW9uKGxhYmVscywgcHJlbWlzZXMsIGNvbmNsdXNpb24pIHtcbiAgY29uc3QgcHJlbWlzZXNTdHJpbmcgPSBwcmVtaXNlc1N0cmluZ0Zyb21QcmVtaXNlcyhwcmVtaXNlcyksXG4gICAgICAgIGNvbmNsdXNpb25TdHJpbmcgPSBjb25jbHVzaW9uLmdldFN0cmluZygpLFxuICAgICAgICBsYWJlbHNTdHJpbmcgPSBsYWJlbHNTdHJpbmdGcm9tTGFiZWxzKGxhYmVscyksXG4gICAgICAgIHN0cmluZyA9IChwcmVtaXNlc1N0cmluZyAhPT0gbnVsbCkgP1xuICAgICAgICAgICAgICAgICAgICBgJHtsYWJlbHNTdHJpbmd9IDo6IFske3ByZW1pc2VzU3RyaW5nfV0gLi4uICR7Y29uY2x1c2lvblN0cmluZ31gIDpcbiAgICAgICAgICAgICAgICAgICAgICBgJHtsYWJlbHNTdHJpbmd9IDo6ICR7Y29uY2x1c2lvblN0cmluZ31gO1xuXG4gIHJldHVybiBzdHJpbmc7XG59XG4iXSwibmFtZXMiOlsicmV2ZXJzZSIsImFycmF5VXRpbGl0aWVzIiwiZXh0cmFjdCIsImJhY2t3YXJkc0V2ZXJ5IiwiZG9tQXNzaWduZWQiLCJSdWxlIiwiY29udGV4dCIsIm5vZGUiLCJzdHJpbmciLCJsYWJlbHMiLCJwcmVtaXNlcyIsImNvbmNsdXNpb24iLCJwcm9vZiIsImdldENvbnRleHQiLCJnZXROb2RlIiwiZ2V0U3RyaW5nIiwiZ2V0TGFiZWxzIiwiZ2V0UHJlbWlzZXMiLCJnZXRDb25jbHVzaW9uIiwiZ2V0UHJvb2YiLCJtYXRjaE1ldGF2YXJpYWJsZU5hbWUiLCJtZXRhdmFyaWFibGVOYW1lIiwibWV0YXZhcmlhYmxlTmFtZU1hdGNoZXMiLCJzb21lIiwibGFiZWwiLCJ1bmlmeVN0YXRlbWVudEFuZFN0ZXBzT3JTdWJwcm9vZnMiLCJzdGF0ZW1lbnQiLCJzdGVwc09yU3VicHJvb2ZzIiwic3RhdGVtZW50QW5kU3RlcHNPclN1YnByb29mc1VuaWZ5IiwiZ2VuZXJhbENvbnRleHQiLCJzcGVjaWZpY0NvbnRleHQiLCJzdWJzdGl0dXRpb25zIiwiU3Vic3RpdHV0aW9ucyIsImZyb21Ob3RoaW5nIiwic3RhdGVtZW50VW5pZmllc1dpdGhDb25jbHVzaW9uIiwidW5pZnlTdGF0ZW1lbnRXaXRoQ29uY2x1c2lvbiIsInN0ZXBzT3JTdWJwcm9vZnNVbmlmeVdpdGhQcmVtaXNlcyIsInVuaWZ5U3RlcHNPclN1YnByb29mc1dpdGhQcmVtaXNlcyIsInN1YnN0aXR1dGlvbnNSZXNvbHZlZCIsImFyZVJlc29sdmVkIiwic3RhdGVtZW50VW5pZmllcyIsInVuaWZ5U3RhdGVtZW50IiwicHJlbWlzZSIsInN0ZXBVbmlmaWVzV2l0aFByZW1pc2UiLCJ1bmlmeVN0ZXBzT3JTdWJwcm9vZnNXaXRoUHJlbWlzZSIsInN0ZXBzT3JTdWJwcm9vZnNVbmlmeVdpdGhQcmVtaXNlIiwicHJlbWlzZVVuaWZpZXNJbmRlcGVuZGVudGx5IiwidW5pZnlJbmRlcGVuZGVudGx5Iiwic3RlcE9yU3VicHJvb2YiLCJzdGVwT3JTdWJwcm9vZlVuaWZpZXMiLCJ1bmlmeVN0ZXBPclN1YnByb29mIiwidmVyaWZ5IiwidmVyaWZpZXMiLCJydWxlU3RyaW5nIiwidHJhY2UiLCJsYWJlbHNWZXJpZnkiLCJ2ZXJpZnlMYWJlbHMiLCJsb2NhbENvbnRleHQiLCJMb2NhbENvbnRleHQiLCJmcm9tQ29udGV4dCIsInByZW1pc2VzVmVyaWZ5IiwidmVyaWZ5UHJlbWlzZXMiLCJjb25jbHVzaW9uVmVyaWZpZXMiLCJ2ZXJpZnlDb25jbHVzaW9uIiwicHJvb2ZWZXJpZmllcyIsInZlcmlmeVByb29mIiwicnVsZSIsImFkZFJ1bGUiLCJkZWJ1ZyIsImV2ZXJ5IiwibmFtZU9ubHkiLCJsYWJlbFZlcmlmaWVzIiwicHJlbWlzZVZlcmlmaWVzIiwidmVyaWZ5UHJlbWlzZSIsInRvSlNPTiIsImxhYmVsc0pTT04iLCJsYWJlbHNUb0xhYmVsc0pTT04iLCJwcmVtaXNlc0pTT04iLCJwcmVtaXNlc1RvUHJlbWlzZXNKU09OIiwiY29uY2x1c2lvbkpTT04iLCJjb25jbHVzaW9uVG9Db25jbHVzaW9uSlNPTiIsImpzb24iLCJmcm9tSlNPTiIsImxhYmVsc0Zyb21KU09OIiwicHJlbWlzZXNGcm9tSlNPTiIsImNvbmNsdXNpb25Gcm9tSlNPTiIsInN0cmluZ0Zyb21MYWJlbHNQcmVtaXNlc0FuZENvbmNsdXNpb24iLCJmcm9tUnVsZU5vZGUiLCJydWxlTm9kZSIsInByb29mRnJvbVJ1bGVOb2RlIiwibGFiZWxzRnJvbVJ1bGVOb2RlIiwicHJlbWlzZXNGcm9tUnVsZU5vZGUiLCJjb25jbHVzaW9uRnJvbVJ1bGVOb2RlIiwibmFtZSIsIlByb29mIiwiZG9tIiwicHJvb2ZOb2RlIiwiZ2V0UHJvb2ZOb2RlIiwiZnJvbVByb29mTm9kZSIsIkxhYmVsIiwibGFiZWxOb2RlcyIsImdldExhYmVsTm9kZXMiLCJtYXAiLCJsYWJlbE5vZGUiLCJmcm9tTGFiZWxOb2RlIiwiUHJlbWlzZSIsInByZW1pc2VOb2RlcyIsImdldFByZW1pc2VOb2RlcyIsInByZW1pc2VOb2RlIiwiZnJvbVByZW1pc2VOb2RlIiwiQ29uY2x1c2lvbiIsImNvbmNsdXNpb25Ob2RlIiwiZ2V0Q29uY2x1c2lvbk5vZGUiLCJmcm9tQ29uY2x1c2lvbk5vZGUiLCJwcmVtaXNlc1N0cmluZ0Zyb21QcmVtaXNlcyIsInByZW1pc2VzU3RyaW5nIiwicmVkdWNlIiwicHJlbWlzZVN0cmluZyIsImNvbmNsdXNpb25TdHJpbmciLCJsYWJlbHNTdHJpbmciLCJsYWJlbHNTdHJpbmdGcm9tTGFiZWxzIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFtQkE7OztlQUFBOzs7eUJBakIrQjsyREFFZjs0REFDUztvRUFDQztpQ0FHYTtvQkFNSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFM0MsSUFBUUEsVUFBcUNDLHlCQUFjLENBQW5ERCxTQUFTRSxVQUE0QkQseUJBQWMsQ0FBMUNDLFNBQVNDLGlCQUFtQkYseUJBQWMsQ0FBakNFO0lBRTFCLFdBQWVDLElBQUFBLGdCQUFXLHlCQUFDO2FBQU1DLEtBQ25CQyxPQUFPLEVBQUVDLElBQUksRUFBRUMsTUFBTSxFQUFFQyxNQUFNLEVBQUVDLFFBQVEsRUFBRUMsVUFBVSxFQUFFQyxLQUFLO2dDQUR2Q1A7UUFFN0IsSUFBSSxDQUFDQyxPQUFPLEdBQUdBO1FBQ2YsSUFBSSxDQUFDQyxJQUFJLEdBQUdBO1FBQ1osSUFBSSxDQUFDQyxNQUFNLEdBQUdBO1FBQ2QsSUFBSSxDQUFDQyxNQUFNLEdBQUdBO1FBQ2QsSUFBSSxDQUFDQyxRQUFRLEdBQUdBO1FBQ2hCLElBQUksQ0FBQ0MsVUFBVSxHQUFHQTtRQUNsQixJQUFJLENBQUNDLEtBQUssR0FBR0E7Ozs7WUFHZkMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFD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