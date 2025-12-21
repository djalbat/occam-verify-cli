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
            key: "verify",
            value: function verify() {
                var verifies = false;
                var ruleString = this.string; ///
                this.context.trace("Verifying the '".concat(ruleString, "' rule..."), this.node);
                var labelsVerify = this.verifyLabels();
                if (labelsVerify) {
                    var localContext = _local.default.fromNothing(this.context), context = localContext, premisesVerify = this.verifyPremises(context);
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
            key: "unifyStatementWithConclusion",
            value: function unifyStatementWithConclusion(statement, substitutions, context) {
                var statementUnifiedWithConclusion = false;
                var statementUnifies = this.conclusion.unifyStatement(statement, substitutions, context);
                if (statementUnifies) {
                    statementUnifiedWithConclusion = true;
                }
                return statementUnifiedWithConclusion;
            }
        },
        {
            key: "unifyStatementAndStepsOrSubproofs",
            value: function unifyStatementAndStepsOrSubproofs(statement, stepsOrSubproofs, context) {
                var statementAndStepsOrSubproofsUnify = false;
                var substitutions = _substitutions.default.fromNothing(), statementUnifiedWithConclusion = this.unifyStatementWithConclusion(statement, substitutions, context);
                if (statementUnifiedWithConclusion) {
                    var stepsOrSubproofsUnifiedWithPremises = this.unifyStepsOrSubproofsWithPremises(stepsOrSubproofs, substitutions, context);
                    if (stepsOrSubproofsUnifiedWithPremises) {
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
            key: "unifyStepsOrSubproofsWithPremise",
            value: function unifyStepsOrSubproofsWithPremise(stepsOrSubproofs, premise, substitutions, context) {
                var stepsOrSubproofsUnifiedWithPremise = false;
                if (!stepsOrSubproofsUnifiedWithPremise) {
                    var premiseUnifiesIndependently = premise.unifyIndependently(substitutions, context);
                    if (premiseUnifiesIndependently) {
                        stepsOrSubproofsUnifiedWithPremise = true;
                    }
                }
                if (!stepsOrSubproofsUnifiedWithPremise) {
                    var stepOrSubproof = extract(stepsOrSubproofs, function(stepOrSubproof) {
                        var stepOrSubproofUnifies = premise.unifyStepOrSubproof(stepOrSubproof, substitutions, context);
                        if (stepOrSubproofUnifies) {
                            return true;
                        }
                    }) || null;
                    if (stepOrSubproof !== null) {
                        stepsOrSubproofsUnifiedWithPremise = true;
                    }
                }
                return stepsOrSubproofsUnifiedWithPremise;
            }
        },
        {
            key: "unifyStepsOrSubproofsWithPremises",
            value: function unifyStepsOrSubproofsWithPremises(stepsOrSubproofs, substitutions, context) {
                var _this = this;
                stepsOrSubproofs = reverse(stepsOrSubproofs); ///
                var stepsOrSubproofsUnifiedWithPremises = backwardsEvery(this.premises, function(premise) {
                    var stepUnifiedWithPremise = _this.unifyStepsOrSubproofsWithPremise(stepsOrSubproofs, premise, substitutions, context);
                    if (stepUnifiedWithPremise) {
                        return true;
                    }
                });
                return stepsOrSubproofsUnifiedWithPremises;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9vbnRvbG9neS9ydWxlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBhcnJheVV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcblxuaW1wb3J0IG9udG9sb2d5IGZyb20gXCIuLi9vbnRvbG9neVwiO1xuaW1wb3J0IExvY2FsQ29udGV4dCBmcm9tIFwiLi4vY29udGV4dC9sb2NhbFwiO1xuaW1wb3J0IFN1YnN0aXR1dGlvbnMgZnJvbSBcIi4uL3N1YnN0aXR1dGlvbnNcIjtcblxuaW1wb3J0IHsgZGVmaW5lIH0gZnJvbSBcIi4uL29udG9sb2d5XCI7XG5pbXBvcnQgeyBsYWJlbHNTdHJpbmdGcm9tTGFiZWxzIH0gZnJvbSBcIi4vdG9wTGV2ZWxBc3NlcnRpb25cIjtcbmltcG9ydCB7IGxhYmVsc0Zyb21KU09OLFxuICAgICAgICAgcHJlbWlzZXNGcm9tSlNPTixcbiAgICAgICAgIGNvbmNsdXNpb25Gcm9tSlNPTixcbiAgICAgICAgIGxhYmVsc1RvTGFiZWxzSlNPTixcbiAgICAgICAgIHByZW1pc2VzVG9QcmVtaXNlc0pTT04sXG4gICAgICAgICBjb25jbHVzaW9uVG9Db25jbHVzaW9uSlNPTiB9IGZyb20gXCIuLi91dGlsaXRpZXMvanNvblwiO1xuXG5jb25zdCB7IHJldmVyc2UsIGV4dHJhY3QsIGJhY2t3YXJkc0V2ZXJ5IH0gPSBhcnJheVV0aWxpdGllcztcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lKGNsYXNzIFJ1bGUge1xuICBjb25zdHJ1Y3Rvcihjb250ZXh0LCBub2RlLCBzdHJpbmcsIGxhYmVscywgcHJlbWlzZXMsIGNvbmNsdXNpb24sIHByb29mKSB7XG4gICAgdGhpcy5jb250ZXh0ID0gY29udGV4dDtcbiAgICB0aGlzLm5vZGUgPSBub2RlO1xuICAgIHRoaXMuc3RyaW5nID0gc3RyaW5nO1xuICAgIHRoaXMubGFiZWxzID0gbGFiZWxzO1xuICAgIHRoaXMucHJlbWlzZXMgPSBwcmVtaXNlcztcbiAgICB0aGlzLmNvbmNsdXNpb24gPSBjb25jbHVzaW9uO1xuICAgIHRoaXMucHJvb2YgPSBwcm9vZjtcbiAgfVxuXG4gIGdldENvbnRleHQoKSB7XG4gICAgcmV0dXJuIHRoaXMuY29udGV4dDtcbiAgfVxuXG4gIGdldE5vZGUoKSB7XG4gICAgcmV0dXJuIHRoaXMubm9kZTtcbiAgfVxuXG4gIGdldFN0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5zdHJpbmc7XG4gIH1cblxuICBnZXRMYWJlbHMoKSB7XG4gICAgcmV0dXJuIHRoaXMubGFiZWxzO1xuICB9XG5cbiAgZ2V0UHJlbWlzZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMucHJlbWlzZXM7XG4gIH1cblxuICBnZXRDb25jbHVzaW9uKCkge1xuICAgIHJldHVybiB0aGlzLmNvbmNsdXNpb247XG4gIH1cblxuICBnZXRQcm9vZigpIHtcbiAgICByZXR1cm4gdGhpcy5wcm9vZjtcbiAgfVxuXG4gIG1hdGNoTWV0YXZhcmlhYmxlTmFtZShtZXRhdmFyaWFibGVOYW1lKSB7XG4gICAgY29uc3QgbWV0YXZhcmlhYmxlTmFtZU1hdGNoZXMgPSB0aGlzLmxhYmVscy5zb21lKChsYWJlbCkgPT4ge1xuICAgICAgY29uc3QgbWV0YXZhcmlhYmxlTmFtZU1hdGNoZXMgPSBsYWJlbC5tYXRjaE1ldGF2YXJpYWJsZU5hbWUobWV0YXZhcmlhYmxlTmFtZSk7XG5cbiAgICAgIGlmIChtZXRhdmFyaWFibGVOYW1lTWF0Y2hlcykge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiBtZXRhdmFyaWFibGVOYW1lTWF0Y2hlcztcbiAgfVxuXG4gIHZlcmlmeSgpIHtcbiAgICBsZXQgdmVyaWZpZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IHJ1bGVTdHJpbmcgPSB0aGlzLnN0cmluZzsgLy8vXG5cbiAgICB0aGlzLmNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7cnVsZVN0cmluZ30nIHJ1bGUuLi5gLCB0aGlzLm5vZGUpO1xuXG4gICAgY29uc3QgbGFiZWxzVmVyaWZ5ID0gdGhpcy52ZXJpZnlMYWJlbHMoKTtcblxuICAgIGlmIChsYWJlbHNWZXJpZnkpIHtcbiAgICAgIGNvbnN0IGxvY2FsQ29udGV4dCA9IExvY2FsQ29udGV4dC5mcm9tTm90aGluZyh0aGlzLmNvbnRleHQpLFxuICAgICAgICAgICAgY29udGV4dCA9IGxvY2FsQ29udGV4dCwgLy8vXG4gICAgICAgICAgICBwcmVtaXNlc1ZlcmlmeSA9IHRoaXMudmVyaWZ5UHJlbWlzZXMoY29udGV4dCk7XG5cbiAgICAgIGlmIChwcmVtaXNlc1ZlcmlmeSkge1xuICAgICAgICBjb25zdCBjb25jbHVzaW9uVmVyaWZpZXMgPSB0aGlzLnZlcmlmeUNvbmNsdXNpb24oY29udGV4dCk7XG5cbiAgICAgICAgaWYgKGNvbmNsdXNpb25WZXJpZmllcykge1xuICAgICAgICAgIGNvbnN0IHByb29mVmVyaWZpZXMgPSB0aGlzLnZlcmlmeVByb29mKGNvbnRleHQpO1xuXG4gICAgICAgICAgaWYgKHByb29mVmVyaWZpZXMpIHtcbiAgICAgICAgICAgIGNvbnN0IHJ1bGUgPSB0aGlzOyAgLy8vXG5cbiAgICAgICAgICAgIHRoaXMuY29udGV4dC5hZGRSdWxlKHJ1bGUpO1xuXG4gICAgICAgICAgICB2ZXJpZmllcyA9IHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHZlcmlmaWVzKSB7XG4gICAgICB0aGlzLmNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHtydWxlU3RyaW5nfScgcnVsZS5gLCB0aGlzLm5vZGUpO1xuICAgIH1cblxuICAgIHJldHVybiB2ZXJpZmllcztcbiAgfVxuXG4gIHZlcmlmeUxhYmVscygpIHtcbiAgICBjb25zdCBsYWJlbHNWZXJpZnkgPSB0aGlzLmxhYmVscy5ldmVyeSgobGFiZWwpID0+IHtcbiAgICAgIGNvbnN0IG5hbWVPbmx5ID0gdHJ1ZSxcbiAgICAgICAgICAgIGxhYmVsVmVyaWZpZXMgPSBsYWJlbC52ZXJpZnkobmFtZU9ubHkpO1xuXG4gICAgICBpZiAobGFiZWxWZXJpZmllcykge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiBsYWJlbHNWZXJpZnk7XG4gIH1cblxuICB2ZXJpZnlQcmVtaXNlcyhjb250ZXh0KSB7XG4gICAgY29uc3QgcHJlbWlzZXNWZXJpZnkgPSB0aGlzLnByZW1pc2VzLmV2ZXJ5KChwcmVtaXNlKSA9PiB7XG4gICAgICBjb25zdCBwcmVtaXNlVmVyaWZpZXMgPSB0aGlzLnZlcmlmeVByZW1pc2UocHJlbWlzZSwgY29udGV4dCk7XG5cbiAgICAgIGlmIChwcmVtaXNlVmVyaWZpZXMpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gcHJlbWlzZXNWZXJpZnk7XG4gIH1cblxuICB2ZXJpZnlQcmVtaXNlKHByZW1pc2UsIGNvbnRleHQpIHtcbiAgICBjb25zdCBwcmVtaXNlVmVyaWZpZXMgPSBwcmVtaXNlLnZlcmlmeShjb250ZXh0KTtcblxuICAgIHJldHVybiBwcmVtaXNlVmVyaWZpZXM7XG4gIH1cblxuICB2ZXJpZnlDb25jbHVzaW9uKGNvbnRleHQpIHtcbiAgICBjb25zdCBjb25jbHVzaW9uVmVyaWZpZXMgPSB0aGlzLmNvbmNsdXNpb24udmVyaWZ5KGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIGNvbmNsdXNpb25WZXJpZmllcztcbiAgfVxuXG4gIHZlcmlmeVByb29mKGNvbnRleHQpIHtcbiAgICBsZXQgcHJvb2ZWZXJpZmllcztcblxuICAgIGlmICh0aGlzLnByb29mID09PSBudWxsKSB7XG4gICAgICBwcm9vZlZlcmlmaWVzID0gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3Qgc3Vic3RpdHV0aW9ucyA9IFN1YnN0aXR1dGlvbnMuZnJvbU5vdGhpbmcoKTtcblxuICAgICAgcHJvb2ZWZXJpZmllcyA9IHRoaXMucHJvb2YudmVyaWZ5KHN1YnN0aXR1dGlvbnMsIHRoaXMuY29uY2x1c2lvbiwgY29udGV4dCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHByb29mVmVyaWZpZXM7XG4gIH1cblxuICB1bmlmeVN0YXRlbWVudFdpdGhDb25jbHVzaW9uKHN0YXRlbWVudCwgc3Vic3RpdHV0aW9ucywgY29udGV4dCkge1xuICAgIGxldCBzdGF0ZW1lbnRVbmlmaWVkV2l0aENvbmNsdXNpb24gPSBmYWxzZTtcblxuICAgIGNvbnN0IHN0YXRlbWVudFVuaWZpZXMgPSB0aGlzLmNvbmNsdXNpb24udW5pZnlTdGF0ZW1lbnQoc3RhdGVtZW50LCBzdWJzdGl0dXRpb25zLCBjb250ZXh0KTtcblxuICAgIGlmIChzdGF0ZW1lbnRVbmlmaWVzKSB7XG4gICAgICBzdGF0ZW1lbnRVbmlmaWVkV2l0aENvbmNsdXNpb24gPSB0cnVlO1xuICAgIH1cblxuICAgIHJldHVybiBzdGF0ZW1lbnRVbmlmaWVkV2l0aENvbmNsdXNpb247XG4gIH1cblxuICB1bmlmeVN0YXRlbWVudEFuZFN0ZXBzT3JTdWJwcm9vZnMoc3RhdGVtZW50LCBzdGVwc09yU3VicHJvb2ZzLCBjb250ZXh0KSB7XG4gICAgbGV0IHN0YXRlbWVudEFuZFN0ZXBzT3JTdWJwcm9vZnNVbmlmeSA9IGZhbHNlO1xuXG4gICAgY29uc3Qgc3Vic3RpdHV0aW9ucyA9IFN1YnN0aXR1dGlvbnMuZnJvbU5vdGhpbmcoKSxcbiAgICAgICAgICBzdGF0ZW1lbnRVbmlmaWVkV2l0aENvbmNsdXNpb24gPSB0aGlzLnVuaWZ5U3RhdGVtZW50V2l0aENvbmNsdXNpb24oc3RhdGVtZW50LCBzdWJzdGl0dXRpb25zLCBjb250ZXh0KTtcblxuICAgIGlmIChzdGF0ZW1lbnRVbmlmaWVkV2l0aENvbmNsdXNpb24pIHtcbiAgICAgIGNvbnN0IHN0ZXBzT3JTdWJwcm9vZnNVbmlmaWVkV2l0aFByZW1pc2VzID0gdGhpcy51bmlmeVN0ZXBzT3JTdWJwcm9vZnNXaXRoUHJlbWlzZXMoc3RlcHNPclN1YnByb29mcywgc3Vic3RpdHV0aW9ucywgY29udGV4dCk7XG5cbiAgICAgIGlmIChzdGVwc09yU3VicHJvb2ZzVW5pZmllZFdpdGhQcmVtaXNlcykge1xuICAgICAgICBjb25zdCBzdWJzdGl0dXRpb25zUmVzb2x2ZWQgPSBzdWJzdGl0dXRpb25zLmFyZVJlc29sdmVkKCk7XG5cbiAgICAgICAgaWYgKHN1YnN0aXR1dGlvbnNSZXNvbHZlZCkge1xuICAgICAgICAgIHN0YXRlbWVudEFuZFN0ZXBzT3JTdWJwcm9vZnNVbmlmeSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gc3RhdGVtZW50QW5kU3RlcHNPclN1YnByb29mc1VuaWZ5O1xuICB9XG5cbiAgdW5pZnlTdGVwc09yU3VicHJvb2ZzV2l0aFByZW1pc2Uoc3RlcHNPclN1YnByb29mcywgcHJlbWlzZSwgc3Vic3RpdHV0aW9ucywgY29udGV4dCkge1xuICAgIGxldCBzdGVwc09yU3VicHJvb2ZzVW5pZmllZFdpdGhQcmVtaXNlID0gZmFsc2U7XG5cbiAgICBpZiAoIXN0ZXBzT3JTdWJwcm9vZnNVbmlmaWVkV2l0aFByZW1pc2UpIHtcbiAgICAgIGNvbnN0IHByZW1pc2VVbmlmaWVzSW5kZXBlbmRlbnRseSA9IHByZW1pc2UudW5pZnlJbmRlcGVuZGVudGx5KHN1YnN0aXR1dGlvbnMsIGNvbnRleHQpO1xuXG4gICAgICBpZiAocHJlbWlzZVVuaWZpZXNJbmRlcGVuZGVudGx5KSB7XG4gICAgICAgIHN0ZXBzT3JTdWJwcm9vZnNVbmlmaWVkV2l0aFByZW1pc2UgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICghc3RlcHNPclN1YnByb29mc1VuaWZpZWRXaXRoUHJlbWlzZSkge1xuICAgICAgY29uc3Qgc3RlcE9yU3VicHJvb2YgPSBleHRyYWN0KHN0ZXBzT3JTdWJwcm9vZnMsIChzdGVwT3JTdWJwcm9vZikgPT4ge1xuICAgICAgICBjb25zdCBzdGVwT3JTdWJwcm9vZlVuaWZpZXMgPSBwcmVtaXNlLnVuaWZ5U3RlcE9yU3VicHJvb2Yoc3RlcE9yU3VicHJvb2YsIHN1YnN0aXR1dGlvbnMsIGNvbnRleHQpO1xuXG4gICAgICAgIGlmIChzdGVwT3JTdWJwcm9vZlVuaWZpZXMpIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfSkgfHwgbnVsbDtcblxuICAgICAgaWYgKHN0ZXBPclN1YnByb29mICE9PSBudWxsKSB7XG4gICAgICAgIHN0ZXBzT3JTdWJwcm9vZnNVbmlmaWVkV2l0aFByZW1pc2UgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBzdGVwc09yU3VicHJvb2ZzVW5pZmllZFdpdGhQcmVtaXNlO1xuICB9XG5cbiAgdW5pZnlTdGVwc09yU3VicHJvb2ZzV2l0aFByZW1pc2VzKHN0ZXBzT3JTdWJwcm9vZnMsIHN1YnN0aXR1dGlvbnMsIGNvbnRleHQpIHtcbiAgICBzdGVwc09yU3VicHJvb2ZzID0gcmV2ZXJzZShzdGVwc09yU3VicHJvb2ZzKTsgLy8vXG5cbiAgICBjb25zdCBzdGVwc09yU3VicHJvb2ZzVW5pZmllZFdpdGhQcmVtaXNlcyA9IGJhY2t3YXJkc0V2ZXJ5KHRoaXMucHJlbWlzZXMsIChwcmVtaXNlKSA9PiB7XG4gICAgICBjb25zdCBzdGVwVW5pZmllZFdpdGhQcmVtaXNlID0gdGhpcy51bmlmeVN0ZXBzT3JTdWJwcm9vZnNXaXRoUHJlbWlzZShzdGVwc09yU3VicHJvb2ZzLCBwcmVtaXNlLCBzdWJzdGl0dXRpb25zLCBjb250ZXh0KTtcblxuICAgICAgaWYgKHN0ZXBVbmlmaWVkV2l0aFByZW1pc2UpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gc3RlcHNPclN1YnByb29mc1VuaWZpZWRXaXRoUHJlbWlzZXM7XG4gIH1cblxuICB0b0pTT04oKSB7XG4gICAgY29uc3QgbGFiZWxzSlNPTiA9IGxhYmVsc1RvTGFiZWxzSlNPTih0aGlzLmxhYmVscyksXG4gICAgICAgICAgcHJlbWlzZXNKU09OID0gcHJlbWlzZXNUb1ByZW1pc2VzSlNPTih0aGlzLnByZW1pc2VzKSxcbiAgICAgICAgICBjb25jbHVzaW9uSlNPTiA9IGNvbmNsdXNpb25Ub0NvbmNsdXNpb25KU09OKHRoaXMuY29uY2x1c2lvbiksXG4gICAgICAgICAgbGFiZWxzID0gbGFiZWxzSlNPTiwgIC8vL1xuICAgICAgICAgIHByZW1pc2VzID0gcHJlbWlzZXNKU09OLCAgLy8vXG4gICAgICAgICAgY29uY2x1c2lvbiA9IGNvbmNsdXNpb25KU09OLCAgLy8vXG4gICAgICAgICAganNvbiA9IHtcbiAgICAgICAgICAgIGxhYmVscyxcbiAgICAgICAgICAgIHByZW1pc2VzLFxuICAgICAgICAgICAgY29uY2x1c2lvblxuICAgICAgICAgIH07XG5cbiAgICByZXR1cm4ganNvbjtcbiAgfVxuXG4gIHN0YXRpYyBuYW1lID0gXCJSdWxlXCI7XG5cbiAgc3RhdGljIGZyb21KU09OKGpzb24sIGNvbnRleHQpIHtcbiAgICBsZXQgcnVsZTtcblxuICAgIGNvbnN0IG5vZGUgPSBudWxsLFxuICAgICAgICAgIHByb29mID0gbnVsbCxcbiAgICAgICAgICBsYWJlbHMgPSBsYWJlbHNGcm9tSlNPTihqc29uLCBjb250ZXh0KSxcbiAgICAgICAgICBwcmVtaXNlcyA9IHByZW1pc2VzRnJvbUpTT04oanNvbiwgY29udGV4dCksXG4gICAgICAgICAgY29uY2x1c2lvbiA9IGNvbmNsdXNpb25Gcm9tSlNPTihqc29uLCBjb250ZXh0KSxcbiAgICAgICAgICBzdHJpbmcgPSBzdHJpbmdGcm9tTGFiZWxzUHJlbWlzZXNBbmRDb25jbHVzaW9uKGxhYmVscywgcHJlbWlzZXMsIGNvbmNsdXNpb24pO1xuXG4gICAgcnVsZSA9IG5ldyBSdWxlKGNvbnRleHQsIG5vZGUsIHN0cmluZywgbGFiZWxzLCBwcmVtaXNlcywgY29uY2x1c2lvbiwgcHJvb2YpO1xuXG4gICAgcmV0dXJuIHJ1bGU7XG4gIH1cblxuICBzdGF0aWMgZnJvbVJ1bGVOb2RlKHJ1bGVOb2RlLCBjb250ZXh0KSB7XG4gICAgY29uc3Qgbm9kZSA9IHJ1bGVOb2RlLCAgLy8vXG4gICAgICAgICAgcHJvb2YgPSBwcm9vZkZyb21SdWxlTm9kZShydWxlTm9kZSwgY29udGV4dCksXG4gICAgICAgICAgbGFiZWxzID0gbGFiZWxzRnJvbVJ1bGVOb2RlKHJ1bGVOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgICBwcmVtaXNlcyA9IHByZW1pc2VzRnJvbVJ1bGVOb2RlKHJ1bGVOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgICBjb25jbHVzaW9uID0gY29uY2x1c2lvbkZyb21SdWxlTm9kZShydWxlTm9kZSwgY29udGV4dCksXG4gICAgICAgICAgc3RyaW5nID0gc3RyaW5nRnJvbUxhYmVsc1ByZW1pc2VzQW5kQ29uY2x1c2lvbihsYWJlbHMsIHByZW1pc2VzLCBjb25jbHVzaW9uKSxcbiAgICAgICAgICBydWxlID0gbmV3IFJ1bGUoY29udGV4dCwgbm9kZSwgc3RyaW5nLCBsYWJlbHMsIHByZW1pc2VzLCBjb25jbHVzaW9uLCBwcm9vZik7XG5cbiAgICByZXR1cm4gcnVsZTtcbiAgfVxufSk7XG5cbmZ1bmN0aW9uIHByb29mRnJvbVJ1bGVOb2RlKHJ1bGVOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgUHJvb2YgfSA9IG9udG9sb2d5LFxuICAgICAgICBwcm9vZk5vZGUgPSBydWxlTm9kZS5nZXRQcm9vZk5vZGUoKSxcbiAgICAgICAgcHJvb2YgPSBQcm9vZi5mcm9tUHJvb2ZOb2RlKHByb29mTm9kZSwgY29udGV4dCk7XG5cbiAgcmV0dXJuIHByb29mO1xufVxuXG5mdW5jdGlvbiBsYWJlbHNGcm9tUnVsZU5vZGUocnVsZU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBMYWJlbCB9ID0gb250b2xvZ3ksXG4gICAgICAgIGxhYmVsTm9kZXMgPSBydWxlTm9kZS5nZXRMYWJlbE5vZGVzKCksXG4gICAgICAgIGxhYmVscyA9IGxhYmVsTm9kZXMubWFwKChsYWJlbE5vZGUpID0+IHtcbiAgICAgICAgICBjb25zdCBsYWJlbCA9IExhYmVsLmZyb21MYWJlbE5vZGUobGFiZWxOb2RlLCBjb250ZXh0KTtcblxuICAgICAgICAgIHJldHVybiBsYWJlbDtcbiAgICAgICAgfSk7XG5cbiAgcmV0dXJuIGxhYmVscztcbn1cblxuZnVuY3Rpb24gcHJlbWlzZXNGcm9tUnVsZU5vZGUocnVsZU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBQcmVtaXNlIH0gPSBvbnRvbG9neSxcbiAgICAgICAgcHJlbWlzZU5vZGVzID0gcnVsZU5vZGUuZ2V0UHJlbWlzZU5vZGVzKCksXG4gICAgICAgIHByZW1pc2VzID0gcHJlbWlzZU5vZGVzLm1hcCgocHJlbWlzZU5vZGUpID0+IHtcbiAgICAgICAgICBjb25zdCBwcmVtaXNlID0gUHJlbWlzZS5mcm9tUHJlbWlzZU5vZGUocHJlbWlzZU5vZGUsIGNvbnRleHQpO1xuXG4gICAgICAgICAgcmV0dXJuIHByZW1pc2U7XG4gICAgICAgIH0pO1xuXG4gIHJldHVybiBwcmVtaXNlcztcbn1cblxuZnVuY3Rpb24gY29uY2x1c2lvbkZyb21SdWxlTm9kZShydWxlTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IENvbmNsdXNpb24gfSA9IG9udG9sb2d5LFxuICAgICAgICBjb25jbHVzaW9uTm9kZSA9IHJ1bGVOb2RlLmdldENvbmNsdXNpb25Ob2RlKCksXG4gICAgICAgIGNvbmNsdXNpb24gPSBDb25jbHVzaW9uLmZyb21Db25jbHVzaW9uTm9kZShjb25jbHVzaW9uTm9kZSwgY29udGV4dCk7XG5cbiAgcmV0dXJuIGNvbmNsdXNpb247XG59XG5cbmZ1bmN0aW9uIHByZW1pc2VzU3RyaW5nRnJvbVByZW1pc2VzKHByZW1pc2VzKSB7XG4gIGNvbnN0IHByZW1pc2VzU3RyaW5nID0gcHJlbWlzZXMucmVkdWNlKChwcmVtaXNlc1N0cmluZywgcHJlbWlzZSkgPT4ge1xuICAgIGNvbnN0IHByZW1pc2VTdHJpbmcgPSBwcmVtaXNlLmdldFN0cmluZygpO1xuXG4gICAgcHJlbWlzZXNTdHJpbmcgPSAocHJlbWlzZXNTdHJpbmcgIT09IG51bGwpID9cbiAgICAgICAgICAgICAgICAgICAgICAgYCR7cHJlbWlzZXNTdHJpbmd9LCAke3ByZW1pc2VTdHJpbmd9YCA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgcHJlbWlzZVN0cmluZzsgIC8vL1xuXG4gICAgcmV0dXJuIHByZW1pc2VzU3RyaW5nO1xuICB9LCBudWxsKTtcblxuICByZXR1cm4gcHJlbWlzZXNTdHJpbmc7XG59XG5cbmZ1bmN0aW9uIHN0cmluZ0Zyb21MYWJlbHNQcmVtaXNlc0FuZENvbmNsdXNpb24obGFiZWxzLCBwcmVtaXNlcywgY29uY2x1c2lvbikge1xuICBjb25zdCBwcmVtaXNlc1N0cmluZyA9IHByZW1pc2VzU3RyaW5nRnJvbVByZW1pc2VzKHByZW1pc2VzKSxcbiAgICAgICAgY29uY2x1c2lvblN0cmluZyA9IGNvbmNsdXNpb24uZ2V0U3RyaW5nKCksXG4gICAgICAgIGxhYmVsc1N0cmluZyA9IGxhYmVsc1N0cmluZ0Zyb21MYWJlbHMobGFiZWxzKSxcbiAgICAgICAgc3RyaW5nID0gKHByZW1pc2VzU3RyaW5nICE9PSBudWxsKSA/XG4gICAgICAgICAgICAgICAgICAgIGAke2xhYmVsc1N0cmluZ30gOjogWyR7cHJlbWlzZXNTdHJpbmd9XSAuLi4gJHtjb25jbHVzaW9uU3RyaW5nfWAgOlxuICAgICAgICAgICAgICAgICAgICAgIGAke2xhYmVsc1N0cmluZ30gOjogJHtjb25jbHVzaW9uU3RyaW5nfWA7XG5cbiAgcmV0dXJuIHN0cmluZztcbn1cbiJdLCJuYW1lcyI6WyJyZXZlcnNlIiwiYXJyYXlVdGlsaXRpZXMiLCJleHRyYWN0IiwiYmFja3dhcmRzRXZlcnkiLCJkZWZpbmUiLCJSdWxlIiwiY29udGV4dCIsIm5vZGUiLCJzdHJpbmciLCJsYWJlbHMiLCJwcmVtaXNlcyIsImNvbmNsdXNpb24iLCJwcm9vZiIsImdldENvbnRleHQiLCJnZXROb2RlIiwiZ2V0U3RyaW5nIiwiZ2V0TGFiZWxzIiwiZ2V0UHJlbWlzZXMiLCJnZXRDb25jbHVzaW9uIiwiZ2V0UHJvb2YiLCJtYXRjaE1ldGF2YXJpYWJsZU5hbWUiLCJtZXRhdmFyaWFibGVOYW1lIiwibWV0YXZhcmlhYmxlTmFtZU1hdGNoZXMiLCJzb21lIiwibGFiZWwiLCJ2ZXJpZnkiLCJ2ZXJpZmllcyIsInJ1bGVTdHJpbmciLCJ0cmFjZSIsImxhYmVsc1ZlcmlmeSIsInZlcmlmeUxhYmVscyIsImxvY2FsQ29udGV4dCIsIkxvY2FsQ29udGV4dCIsImZyb21Ob3RoaW5nIiwicHJlbWlzZXNWZXJpZnkiLCJ2ZXJpZnlQcmVtaXNlcyIsImNvbmNsdXNpb25WZXJpZmllcyIsInZlcmlmeUNvbmNsdXNpb24iLCJwcm9vZlZlcmlmaWVzIiwidmVyaWZ5UHJvb2YiLCJydWxlIiwiYWRkUnVsZSIsImRlYnVnIiwiZXZlcnkiLCJuYW1lT25seSIsImxhYmVsVmVyaWZpZXMiLCJwcmVtaXNlIiwicHJlbWlzZVZlcmlmaWVzIiwidmVyaWZ5UHJlbWlzZSIsInN1YnN0aXR1dGlvbnMiLCJTdWJzdGl0dXRpb25zIiwidW5pZnlTdGF0ZW1lbnRXaXRoQ29uY2x1c2lvbiIsInN0YXRlbWVudCIsInN0YXRlbWVudFVuaWZpZWRXaXRoQ29uY2x1c2lvbiIsInN0YXRlbWVudFVuaWZpZXMiLCJ1bmlmeVN0YXRlbWVudCIsInVuaWZ5U3RhdGVtZW50QW5kU3RlcHNPclN1YnByb29mcyIsInN0ZXBzT3JTdWJwcm9vZnMiLCJzdGF0ZW1lbnRBbmRTdGVwc09yU3VicHJvb2ZzVW5pZnkiLCJzdGVwc09yU3VicHJvb2ZzVW5pZmllZFdpdGhQcmVtaXNlcyIsInVuaWZ5U3RlcHNPclN1YnByb29mc1dpdGhQcmVtaXNlcyIsInN1YnN0aXR1dGlvbnNSZXNvbHZlZCIsImFyZVJlc29sdmVkIiwidW5pZnlTdGVwc09yU3VicHJvb2ZzV2l0aFByZW1pc2UiLCJzdGVwc09yU3VicHJvb2ZzVW5pZmllZFdpdGhQcmVtaXNlIiwicHJlbWlzZVVuaWZpZXNJbmRlcGVuZGVudGx5IiwidW5pZnlJbmRlcGVuZGVudGx5Iiwic3RlcE9yU3VicHJvb2YiLCJzdGVwT3JTdWJwcm9vZlVuaWZpZXMiLCJ1bmlmeVN0ZXBPclN1YnByb29mIiwic3RlcFVuaWZpZWRXaXRoUHJlbWlzZSIsInRvSlNPTiIsImxhYmVsc0pTT04iLCJsYWJlbHNUb0xhYmVsc0pTT04iLCJwcmVtaXNlc0pTT04iLCJwcmVtaXNlc1RvUHJlbWlzZXNKU09OIiwiY29uY2x1c2lvbkpTT04iLCJjb25jbHVzaW9uVG9Db25jbHVzaW9uSlNPTiIsImpzb24iLCJmcm9tSlNPTiIsImxhYmVsc0Zyb21KU09OIiwicHJlbWlzZXNGcm9tSlNPTiIsImNvbmNsdXNpb25Gcm9tSlNPTiIsInN0cmluZ0Zyb21MYWJlbHNQcmVtaXNlc0FuZENvbmNsdXNpb24iLCJmcm9tUnVsZU5vZGUiLCJydWxlTm9kZSIsInByb29mRnJvbVJ1bGVOb2RlIiwibGFiZWxzRnJvbVJ1bGVOb2RlIiwicHJlbWlzZXNGcm9tUnVsZU5vZGUiLCJjb25jbHVzaW9uRnJvbVJ1bGVOb2RlIiwibmFtZSIsIlByb29mIiwib250b2xvZ3kiLCJwcm9vZk5vZGUiLCJnZXRQcm9vZk5vZGUiLCJmcm9tUHJvb2ZOb2RlIiwiTGFiZWwiLCJsYWJlbE5vZGVzIiwiZ2V0TGFiZWxOb2RlcyIsIm1hcCIsImxhYmVsTm9kZSIsImZyb21MYWJlbE5vZGUiLCJQcmVtaXNlIiwicHJlbWlzZU5vZGVzIiwiZ2V0UHJlbWlzZU5vZGVzIiwicHJlbWlzZU5vZGUiLCJmcm9tUHJlbWlzZU5vZGUiLCJDb25jbHVzaW9uIiwiY29uY2x1c2lvbk5vZGUiLCJnZXRDb25jbHVzaW9uTm9kZSIsImZyb21Db25jbHVzaW9uTm9kZSIsInByZW1pc2VzU3RyaW5nRnJvbVByZW1pc2VzIiwicHJlbWlzZXNTdHJpbmciLCJyZWR1Y2UiLCJwcmVtaXNlU3RyaW5nIiwiY29uY2x1c2lvblN0cmluZyIsImxhYmVsc1N0cmluZyIsImxhYmVsc1N0cmluZ0Zyb21MYWJlbHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytC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