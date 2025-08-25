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
    function Rule(fileContext, string, labels, premises, conclusion, proof) {
        _class_call_check(this, Rule);
        this.fileContext = fileContext;
        this.string = string;
        this.labels = labels;
        this.premises = premises;
        this.conclusion = conclusion;
        this.proof = proof;
    }
    _create_class(Rule, [
        {
            key: "getFileContext",
            value: function getFileContext() {
                return this.fileContext;
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
                var localContext = _local.default.fromFileContext(this.fileContext), generalContext = localContext, specificContext = context; ///
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
                this.fileContext.trace("Verifying the '".concat(ruleString, "' rule..."));
                var labelsVerify = this.verifyLabels();
                if (labelsVerify) {
                    var context = _local.default.fromFileContext(this.fileContext), premisesVerify = this.verifyPremises(context);
                    if (premisesVerify) {
                        var conclusionVerifies = this.verifyConclusion(context);
                        if (conclusionVerifies) {
                            var proofVerifies = this.verifyProof(context);
                            if (proofVerifies) {
                                var rule = this; ///
                                this.fileContext.addRule(rule);
                                verifies = true;
                            }
                        }
                    }
                }
                if (verifies) {
                    this.fileContext.debug("...verified the '".concat(ruleString, "' rule."));
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
            value: function fromJSON(json, fileContext) {
                var rule;
                var proof = null, labels = (0, _json.labelsFromJSON)(json, fileContext), premises = (0, _json.premisesFromJSON)(json, fileContext), conclusion = (0, _json.conclusionFromJSON)(json, fileContext), string = stringFromLabelsPremisesAndConclusion(labels, premises, conclusion);
                rule = new Rule(fileContext, string, labels, premises, conclusion, proof);
                return rule;
            }
        },
        {
            key: "fromRuleNode",
            value: function fromRuleNode(ruleNode, fileContext) {
                var proof = proofFromRuleNode(ruleNode, fileContext), labels = labelsFromRuleNode(ruleNode, fileContext), premises = premisesFromRuleNode(ruleNode, fileContext), conclusion = conclusionFromRuleNode(ruleNode, fileContext), string = stringFromLabelsPremisesAndConclusion(labels, premises, conclusion), rule = new Rule(fileContext, string, labels, premises, conclusion, proof);
                return rule;
            }
        }
    ]);
    return Rule;
}(), _define_property(_Rule, "name", "Rule"), _Rule));
function proofFromRuleNode(ruleNode, fileContext) {
    var Proof = _dom.default.Proof, proofNode = ruleNode.getProofNode(), proof = Proof.fromProofNode(proofNode, fileContext);
    return proof;
}
function labelsFromRuleNode(ruleNode, fileContext) {
    var Label = _dom.default.Label, labelNodes = ruleNode.getLabelNodes(), labels = labelNodes.map(function(labelNode) {
        var label = Label.fromLabelNode(labelNode, fileContext);
        return label;
    });
    return labels;
}
function premisesFromRuleNode(ruleNode, fileContext) {
    var Premise = _dom.default.Premise, premiseNodes = ruleNode.getPremiseNodes(), premises = premiseNodes.map(function(premiseNode) {
        var premise = Premise.fromPremiseNode(premiseNode, fileContext);
        return premise;
    });
    return premises;
}
function conclusionFromRuleNode(ruleNode, fileContext) {
    var Conclusion = _dom.default.Conclusion, conclusionNode = ruleNode.getConclusionNode(), conclusion = Conclusion.fromConclusionNode(conclusionNode, fileContext);
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
    var premisesString = premisesStringFromPremises(premises), conclusionString = conclusion.getString(), labelsString = (0, _topLevelAssertion.labelsStringFromLabels)(labels), string = "".concat(labelsString, " :: [").concat(premisesString, "] ... ").concat(conclusionString);
    return string;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kb20vcnVsZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgYXJyYXlVdGlsaXRpZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5cbmltcG9ydCBkb20gZnJvbSBcIi4uL2RvbVwiO1xuaW1wb3J0IExvY2FsQ29udGV4dCBmcm9tIFwiLi4vY29udGV4dC9sb2NhbFwiO1xuaW1wb3J0IFN1YnN0aXR1dGlvbnMgZnJvbSBcIi4uL3N1YnN0aXR1dGlvbnNcIjtcblxuaW1wb3J0IHsgZG9tQXNzaWduZWQgfSBmcm9tIFwiLi4vZG9tXCI7XG5pbXBvcnQgeyBsYWJlbHNTdHJpbmdGcm9tTGFiZWxzIH0gZnJvbSBcIi4vdG9wTGV2ZWxBc3NlcnRpb25cIjtcbmltcG9ydCB7IGxhYmVsc0Zyb21KU09OLFxuICAgICAgICAgcHJlbWlzZXNGcm9tSlNPTixcbiAgICAgICAgIGNvbmNsdXNpb25Gcm9tSlNPTixcbiAgICAgICAgIGxhYmVsc1RvTGFiZWxzSlNPTixcbiAgICAgICAgIHByZW1pc2VzVG9QcmVtaXNlc0pTT04sXG4gICAgICAgICBjb25jbHVzaW9uVG9Db25jbHVzaW9uSlNPTiB9IGZyb20gXCIuLi91dGlsaXRpZXMvanNvblwiO1xuXG5jb25zdCB7IHJldmVyc2UsIGV4dHJhY3QsIGJhY2t3YXJkc0V2ZXJ5IH0gPSBhcnJheVV0aWxpdGllcztcblxuZXhwb3J0IGRlZmF1bHQgZG9tQXNzaWduZWQoY2xhc3MgUnVsZSB7XG4gIGNvbnN0cnVjdG9yKGZpbGVDb250ZXh0LCBzdHJpbmcsIGxhYmVscywgcHJlbWlzZXMsIGNvbmNsdXNpb24sIHByb29mKSB7XG4gICAgdGhpcy5maWxlQ29udGV4dCA9IGZpbGVDb250ZXh0O1xuICAgIHRoaXMuc3RyaW5nID0gc3RyaW5nO1xuICAgIHRoaXMubGFiZWxzID0gbGFiZWxzO1xuICAgIHRoaXMucHJlbWlzZXMgPSBwcmVtaXNlcztcbiAgICB0aGlzLmNvbmNsdXNpb24gPSBjb25jbHVzaW9uO1xuICAgIHRoaXMucHJvb2YgPSBwcm9vZjtcbiAgfVxuXG4gIGdldEZpbGVDb250ZXh0KCkge1xuICAgIHJldHVybiB0aGlzLmZpbGVDb250ZXh0O1xuICB9XG5cbiAgZ2V0U3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLnN0cmluZztcbiAgfVxuXG4gIGdldExhYmVscygpIHtcbiAgICByZXR1cm4gdGhpcy5sYWJlbHM7XG4gIH1cblxuICBnZXRQcmVtaXNlcygpIHtcbiAgICByZXR1cm4gdGhpcy5wcmVtaXNlcztcbiAgfVxuXG4gIGdldENvbmNsdXNpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuY29uY2x1c2lvbjtcbiAgfVxuXG4gIGdldFByb29mKCkge1xuICAgIHJldHVybiB0aGlzLnByb29mO1xuICB9XG5cbiAgbWF0Y2hNZXRhdmFyaWFibGVOYW1lKG1ldGF2YXJpYWJsZU5hbWUpIHtcbiAgICBjb25zdCBtZXRhdmFyaWFibGVOYW1lTWF0Y2hlcyA9IHRoaXMubGFiZWxzLnNvbWUoKGxhYmVsKSA9PiB7XG4gICAgICBjb25zdCBtZXRhdmFyaWFibGVOYW1lTWF0Y2hlcyA9IGxhYmVsLm1hdGNoTWV0YXZhcmlhYmxlTmFtZShtZXRhdmFyaWFibGVOYW1lKTtcblxuICAgICAgaWYgKG1ldGF2YXJpYWJsZU5hbWVNYXRjaGVzKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIG1ldGF2YXJpYWJsZU5hbWVNYXRjaGVzO1xuICB9XG5cbiAgdW5pZnlTdGF0ZW1lbnRBbmRTdGVwc09yU3VicHJvb2ZzKHN0YXRlbWVudCwgc3RlcHNPclN1YnByb29mcywgY29udGV4dCkge1xuICAgIGxldCBzdGF0ZW1lbnRBbmRTdGVwc09yU3VicHJvb2ZzVW5pZnkgPSBmYWxzZTtcblxuICAgIGNvbnN0IGxvY2FsQ29udGV4dCA9IExvY2FsQ29udGV4dC5mcm9tRmlsZUNvbnRleHQodGhpcy5maWxlQ29udGV4dCksXG4gICAgICAgICAgZ2VuZXJhbENvbnRleHQgPSBsb2NhbENvbnRleHQsIC8vL1xuICAgICAgICAgIHNwZWNpZmljQ29udGV4dCA9IGNvbnRleHQ7IC8vL1xuXG4gICAgY29uc3Qgc3Vic3RpdHV0aW9ucyA9IFN1YnN0aXR1dGlvbnMuZnJvbU5vdGhpbmcoKSxcbiAgICAgICAgICBzdGF0ZW1lbnRVbmlmaWVzV2l0aENvbmNsdXNpb24gPSB0aGlzLnVuaWZ5U3RhdGVtZW50V2l0aENvbmNsdXNpb24oc3RhdGVtZW50LCBzdWJzdGl0dXRpb25zLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgIGlmIChzdGF0ZW1lbnRVbmlmaWVzV2l0aENvbmNsdXNpb24pIHtcbiAgICAgIGNvbnN0IHN0ZXBzT3JTdWJwcm9vZnNVbmlmeVdpdGhQcmVtaXNlcyA9IHRoaXMudW5pZnlTdGVwc09yU3VicHJvb2ZzV2l0aFByZW1pc2VzKHN0ZXBzT3JTdWJwcm9vZnMsIHN1YnN0aXR1dGlvbnMsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgICBpZiAoc3RlcHNPclN1YnByb29mc1VuaWZ5V2l0aFByZW1pc2VzKSB7XG4gICAgICAgIGNvbnN0IHN1YnN0aXR1dGlvbnNSZXNvbHZlZCA9IHN1YnN0aXR1dGlvbnMuYXJlUmVzb2x2ZWQoKTtcblxuICAgICAgICBpZiAoc3Vic3RpdHV0aW9uc1Jlc29sdmVkKSB7XG4gICAgICAgICAgc3RhdGVtZW50QW5kU3RlcHNPclN1YnByb29mc1VuaWZ5ID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBzdGF0ZW1lbnRBbmRTdGVwc09yU3VicHJvb2ZzVW5pZnk7XG4gIH1cblxuICB1bmlmeVN0YXRlbWVudFdpdGhDb25jbHVzaW9uKHN0YXRlbWVudCwgc3Vic3RpdHV0aW9ucywgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCkge1xuICAgIGxldCBzdGF0ZW1lbnRVbmlmaWVzV2l0aENvbmNsdXNpb24gPSBmYWxzZTtcblxuICAgIGNvbnN0IHN0YXRlbWVudFVuaWZpZXMgPSB0aGlzLmNvbmNsdXNpb24udW5pZnlTdGF0ZW1lbnQoc3RhdGVtZW50LCBzdWJzdGl0dXRpb25zLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgIGlmIChzdGF0ZW1lbnRVbmlmaWVzKSB7XG4gICAgICBzdGF0ZW1lbnRVbmlmaWVzV2l0aENvbmNsdXNpb24gPSB0cnVlO1xuICAgIH1cblxuICAgIHJldHVybiBzdGF0ZW1lbnRVbmlmaWVzV2l0aENvbmNsdXNpb247XG4gIH1cblxuICB1bmlmeVN0ZXBzT3JTdWJwcm9vZnNXaXRoUHJlbWlzZXMoc3RlcHNPclN1YnByb29mcywgc3Vic3RpdHV0aW9ucywgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCkge1xuICAgIHN0ZXBzT3JTdWJwcm9vZnMgPSByZXZlcnNlKHN0ZXBzT3JTdWJwcm9vZnMpOyAvLy9cblxuICAgIGNvbnN0IHN0ZXBzT3JTdWJwcm9vZnNVbmlmeVdpdGhQcmVtaXNlcyA9IGJhY2t3YXJkc0V2ZXJ5KHRoaXMucHJlbWlzZXMsIChwcmVtaXNlKSA9PiB7XG4gICAgICBjb25zdCBzdGVwVW5pZmllc1dpdGhQcmVtaXNlID0gdGhpcy51bmlmeVN0ZXBzT3JTdWJwcm9vZnNXaXRoUHJlbWlzZShzdGVwc09yU3VicHJvb2ZzLCBwcmVtaXNlLCBzdWJzdGl0dXRpb25zLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgICAgaWYgKHN0ZXBVbmlmaWVzV2l0aFByZW1pc2UpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gc3RlcHNPclN1YnByb29mc1VuaWZ5V2l0aFByZW1pc2VzO1xuICB9XG5cbiAgdW5pZnlTdGVwc09yU3VicHJvb2ZzV2l0aFByZW1pc2Uoc3RlcHNPclN1YnByb29mcywgcHJlbWlzZSwgc3Vic3RpdHV0aW9ucywgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCkge1xuICAgIGxldCBzdGVwc09yU3VicHJvb2ZzVW5pZnlXaXRoUHJlbWlzZSA9IGZhbHNlO1xuXG4gICAgaWYgKCFzdGVwc09yU3VicHJvb2ZzVW5pZnlXaXRoUHJlbWlzZSkge1xuICAgICAgY29uc3QgY29udGV4dCA9IHNwZWNpZmljQ29udGV4dCwgIC8vL1xuICAgICAgICAgICAgcHJlbWlzZVVuaWZpZXNJbmRlcGVuZGVudGx5ID0gcHJlbWlzZS51bmlmeUluZGVwZW5kZW50bHkoc3Vic3RpdHV0aW9ucywgY29udGV4dCk7XG5cbiAgICAgIGlmIChwcmVtaXNlVW5pZmllc0luZGVwZW5kZW50bHkpIHtcbiAgICAgICAgc3RlcHNPclN1YnByb29mc1VuaWZ5V2l0aFByZW1pc2UgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICghc3RlcHNPclN1YnByb29mc1VuaWZ5V2l0aFByZW1pc2UpIHtcbiAgICAgIGNvbnN0IHN0ZXBPclN1YnByb29mID0gZXh0cmFjdChzdGVwc09yU3VicHJvb2ZzLCAoc3RlcE9yU3VicHJvb2YpID0+IHtcbiAgICAgICAgY29uc3Qgc3RlcE9yU3VicHJvb2ZVbmlmaWVzID0gcHJlbWlzZS51bmlmeVN0ZXBPclN1YnByb29mKHN0ZXBPclN1YnByb29mLCBzdWJzdGl0dXRpb25zLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgICAgICBpZiAoc3RlcE9yU3VicHJvb2ZVbmlmaWVzKSB7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgIH0pIHx8IG51bGw7XG5cbiAgICAgIGlmIChzdGVwT3JTdWJwcm9vZiAhPT0gbnVsbCkge1xuICAgICAgICBzdGVwc09yU3VicHJvb2ZzVW5pZnlXaXRoUHJlbWlzZSA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHN0ZXBzT3JTdWJwcm9vZnNVbmlmeVdpdGhQcmVtaXNlO1xuICB9XG5cbiAgdmVyaWZ5KCkge1xuICAgIGxldCB2ZXJpZmllcyA9IGZhbHNlO1xuXG4gICAgY29uc3QgcnVsZVN0cmluZyA9IHRoaXMuc3RyaW5nOyAvLy9cblxuICAgIHRoaXMuZmlsZUNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7cnVsZVN0cmluZ30nIHJ1bGUuLi5gKTtcblxuICAgIGNvbnN0IGxhYmVsc1ZlcmlmeSA9IHRoaXMudmVyaWZ5TGFiZWxzKCk7XG5cbiAgICBpZiAobGFiZWxzVmVyaWZ5KSB7XG4gICAgICBjb25zdCBjb250ZXh0ID0gTG9jYWxDb250ZXh0LmZyb21GaWxlQ29udGV4dCh0aGlzLmZpbGVDb250ZXh0KSxcbiAgICAgICAgICAgIHByZW1pc2VzVmVyaWZ5ID0gdGhpcy52ZXJpZnlQcmVtaXNlcyhjb250ZXh0KTtcblxuICAgICAgaWYgKHByZW1pc2VzVmVyaWZ5KSB7XG4gICAgICAgIGNvbnN0IGNvbmNsdXNpb25WZXJpZmllcyA9IHRoaXMudmVyaWZ5Q29uY2x1c2lvbihjb250ZXh0KTtcblxuICAgICAgICBpZiAoY29uY2x1c2lvblZlcmlmaWVzKSB7XG4gICAgICAgICAgY29uc3QgcHJvb2ZWZXJpZmllcyA9IHRoaXMudmVyaWZ5UHJvb2YoY29udGV4dCk7XG5cbiAgICAgICAgICBpZiAocHJvb2ZWZXJpZmllcykge1xuICAgICAgICAgICAgY29uc3QgcnVsZSA9IHRoaXM7ICAvLy9cblxuICAgICAgICAgICAgdGhpcy5maWxlQ29udGV4dC5hZGRSdWxlKHJ1bGUpO1xuXG4gICAgICAgICAgICB2ZXJpZmllcyA9IHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHZlcmlmaWVzKSB7XG4gICAgICB0aGlzLmZpbGVDb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7cnVsZVN0cmluZ30nIHJ1bGUuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZlcmlmaWVzO1xuICB9XG5cbiAgdmVyaWZ5TGFiZWxzKCkge1xuICAgIGNvbnN0IGxhYmVsc1ZlcmlmeSA9IHRoaXMubGFiZWxzLmV2ZXJ5KChsYWJlbCkgPT4ge1xuICAgICAgY29uc3QgbmFtZU9ubHkgPSB0cnVlLFxuICAgICAgICAgICAgbGFiZWxWZXJpZmllcyA9IGxhYmVsLnZlcmlmeShuYW1lT25seSk7XG5cbiAgICAgIGlmIChsYWJlbFZlcmlmaWVzKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIGxhYmVsc1ZlcmlmeTtcbiAgfVxuXG4gIHZlcmlmeVByZW1pc2VzKGNvbnRleHQpIHtcbiAgICBjb25zdCBwcmVtaXNlc1ZlcmlmeSA9IHRoaXMucHJlbWlzZXMuZXZlcnkoKHByZW1pc2UpID0+IHtcbiAgICAgIGNvbnN0IHByZW1pc2VWZXJpZmllcyA9IHRoaXMudmVyaWZ5UHJlbWlzZShwcmVtaXNlLCBjb250ZXh0KTtcblxuICAgICAgaWYgKHByZW1pc2VWZXJpZmllcykge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiBwcmVtaXNlc1ZlcmlmeTtcbiAgfVxuXG4gIHZlcmlmeVByZW1pc2UocHJlbWlzZSwgY29udGV4dCkge1xuICAgIGNvbnN0IHByZW1pc2VWZXJpZmllcyA9IHByZW1pc2UudmVyaWZ5KGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIHByZW1pc2VWZXJpZmllcztcbiAgfVxuXG4gIHZlcmlmeUNvbmNsdXNpb24oY29udGV4dCkge1xuICAgIGNvbnN0IGNvbmNsdXNpb25WZXJpZmllcyA9IHRoaXMuY29uY2x1c2lvbi52ZXJpZnkoY29udGV4dCk7XG5cbiAgICByZXR1cm4gY29uY2x1c2lvblZlcmlmaWVzO1xuICB9XG5cbiAgdmVyaWZ5UHJvb2YoY29udGV4dCkge1xuICAgIGxldCBwcm9vZlZlcmlmaWVzO1xuXG4gICAgaWYgKHRoaXMucHJvb2YgPT09IG51bGwpIHtcbiAgICAgIHByb29mVmVyaWZpZXMgPSB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBzdWJzdGl0dXRpb25zID0gU3Vic3RpdHV0aW9ucy5mcm9tTm90aGluZygpO1xuXG4gICAgICBwcm9vZlZlcmlmaWVzID0gdGhpcy5wcm9vZi52ZXJpZnkoc3Vic3RpdHV0aW9ucywgdGhpcy5jb25jbHVzaW9uLCBjb250ZXh0KTtcbiAgICB9XG5cbiAgICByZXR1cm4gcHJvb2ZWZXJpZmllcztcbiAgfVxuXG4gIHRvSlNPTigpIHtcbiAgICBjb25zdCBsYWJlbHNKU09OID0gbGFiZWxzVG9MYWJlbHNKU09OKHRoaXMubGFiZWxzKSxcbiAgICAgICAgICBwcmVtaXNlc0pTT04gPSBwcmVtaXNlc1RvUHJlbWlzZXNKU09OKHRoaXMucHJlbWlzZXMpLFxuICAgICAgICAgIGNvbmNsdXNpb25KU09OID0gY29uY2x1c2lvblRvQ29uY2x1c2lvbkpTT04odGhpcy5jb25jbHVzaW9uKSxcbiAgICAgICAgICBsYWJlbHMgPSBsYWJlbHNKU09OLCAgLy8vXG4gICAgICAgICAgcHJlbWlzZXMgPSBwcmVtaXNlc0pTT04sICAvLy9cbiAgICAgICAgICBjb25jbHVzaW9uID0gY29uY2x1c2lvbkpTT04sICAvLy9cbiAgICAgICAgICBqc29uID0ge1xuICAgICAgICAgICAgbGFiZWxzLFxuICAgICAgICAgICAgcHJlbWlzZXMsXG4gICAgICAgICAgICBjb25jbHVzaW9uXG4gICAgICAgICAgfTtcblxuICAgIHJldHVybiBqc29uO1xuICB9XG5cbiAgc3RhdGljIG5hbWUgPSBcIlJ1bGVcIjtcblxuICBzdGF0aWMgZnJvbUpTT04oanNvbiwgZmlsZUNvbnRleHQpIHtcbiAgICBsZXQgcnVsZTtcblxuICAgIGNvbnN0IHByb29mID0gbnVsbCxcbiAgICAgICAgICBsYWJlbHMgPSBsYWJlbHNGcm9tSlNPTihqc29uLCBmaWxlQ29udGV4dCksXG4gICAgICAgICAgcHJlbWlzZXMgPSBwcmVtaXNlc0Zyb21KU09OKGpzb24sIGZpbGVDb250ZXh0KSxcbiAgICAgICAgICBjb25jbHVzaW9uID0gY29uY2x1c2lvbkZyb21KU09OKGpzb24sIGZpbGVDb250ZXh0KSxcbiAgICAgICAgICBzdHJpbmcgPSBzdHJpbmdGcm9tTGFiZWxzUHJlbWlzZXNBbmRDb25jbHVzaW9uKGxhYmVscywgcHJlbWlzZXMsIGNvbmNsdXNpb24pO1xuXG4gICAgcnVsZSA9IG5ldyBSdWxlKGZpbGVDb250ZXh0LCBzdHJpbmcsIGxhYmVscywgcHJlbWlzZXMsIGNvbmNsdXNpb24sIHByb29mKTtcblxuICAgIHJldHVybiBydWxlO1xuICB9XG5cbiAgc3RhdGljIGZyb21SdWxlTm9kZShydWxlTm9kZSwgZmlsZUNvbnRleHQpIHtcbiAgICBjb25zdCBwcm9vZiA9IHByb29mRnJvbVJ1bGVOb2RlKHJ1bGVOb2RlLCBmaWxlQ29udGV4dCksXG4gICAgICAgICAgbGFiZWxzID0gbGFiZWxzRnJvbVJ1bGVOb2RlKHJ1bGVOb2RlLCBmaWxlQ29udGV4dCksXG4gICAgICAgICAgcHJlbWlzZXMgPSBwcmVtaXNlc0Zyb21SdWxlTm9kZShydWxlTm9kZSwgZmlsZUNvbnRleHQpLFxuICAgICAgICAgIGNvbmNsdXNpb24gPSBjb25jbHVzaW9uRnJvbVJ1bGVOb2RlKHJ1bGVOb2RlLCBmaWxlQ29udGV4dCksXG4gICAgICAgICAgc3RyaW5nID0gc3RyaW5nRnJvbUxhYmVsc1ByZW1pc2VzQW5kQ29uY2x1c2lvbihsYWJlbHMsIHByZW1pc2VzLCBjb25jbHVzaW9uKSxcbiAgICAgICAgICBydWxlID0gbmV3IFJ1bGUoZmlsZUNvbnRleHQsIHN0cmluZywgbGFiZWxzLCBwcmVtaXNlcywgY29uY2x1c2lvbiwgcHJvb2YpO1xuXG4gICAgcmV0dXJuIHJ1bGU7XG4gIH1cbn0pO1xuXG5mdW5jdGlvbiBwcm9vZkZyb21SdWxlTm9kZShydWxlTm9kZSwgZmlsZUNvbnRleHQpIHtcbiAgY29uc3QgeyBQcm9vZiB9ID0gZG9tLFxuICAgICAgICBwcm9vZk5vZGUgPSBydWxlTm9kZS5nZXRQcm9vZk5vZGUoKSxcbiAgICAgICAgcHJvb2YgPSBQcm9vZi5mcm9tUHJvb2ZOb2RlKHByb29mTm9kZSwgZmlsZUNvbnRleHQpO1xuXG4gIHJldHVybiBwcm9vZjtcbn1cblxuZnVuY3Rpb24gbGFiZWxzRnJvbVJ1bGVOb2RlKHJ1bGVOb2RlLCBmaWxlQ29udGV4dCkge1xuICBjb25zdCB7IExhYmVsIH0gPSBkb20sXG4gICAgICAgIGxhYmVsTm9kZXMgPSBydWxlTm9kZS5nZXRMYWJlbE5vZGVzKCksXG4gICAgICAgIGxhYmVscyA9IGxhYmVsTm9kZXMubWFwKChsYWJlbE5vZGUpID0+IHtcbiAgICAgICAgICBjb25zdCBsYWJlbCA9IExhYmVsLmZyb21MYWJlbE5vZGUobGFiZWxOb2RlLCBmaWxlQ29udGV4dCk7XG5cbiAgICAgICAgICByZXR1cm4gbGFiZWw7XG4gICAgICAgIH0pO1xuXG4gIHJldHVybiBsYWJlbHM7XG59XG5cbmZ1bmN0aW9uIHByZW1pc2VzRnJvbVJ1bGVOb2RlKHJ1bGVOb2RlLCBmaWxlQ29udGV4dCkge1xuICBjb25zdCB7IFByZW1pc2UgfSA9IGRvbSxcbiAgICAgICAgcHJlbWlzZU5vZGVzID0gcnVsZU5vZGUuZ2V0UHJlbWlzZU5vZGVzKCksXG4gICAgICAgIHByZW1pc2VzID0gcHJlbWlzZU5vZGVzLm1hcCgocHJlbWlzZU5vZGUpID0+IHtcbiAgICAgICAgICBjb25zdCBwcmVtaXNlID0gUHJlbWlzZS5mcm9tUHJlbWlzZU5vZGUocHJlbWlzZU5vZGUsIGZpbGVDb250ZXh0KTtcblxuICAgICAgICAgIHJldHVybiBwcmVtaXNlO1xuICAgICAgICB9KTtcblxuICByZXR1cm4gcHJlbWlzZXM7XG59XG5cbmZ1bmN0aW9uIGNvbmNsdXNpb25Gcm9tUnVsZU5vZGUocnVsZU5vZGUsIGZpbGVDb250ZXh0KSB7XG4gIGNvbnN0IHsgQ29uY2x1c2lvbiB9ID0gZG9tLFxuICAgICAgICBjb25jbHVzaW9uTm9kZSA9IHJ1bGVOb2RlLmdldENvbmNsdXNpb25Ob2RlKCksXG4gICAgICAgIGNvbmNsdXNpb24gPSBDb25jbHVzaW9uLmZyb21Db25jbHVzaW9uTm9kZShjb25jbHVzaW9uTm9kZSwgZmlsZUNvbnRleHQpO1xuXG4gIHJldHVybiBjb25jbHVzaW9uO1xufVxuXG5mdW5jdGlvbiBwcmVtaXNlc1N0cmluZ0Zyb21QcmVtaXNlcyhwcmVtaXNlcykge1xuICBjb25zdCBwcmVtaXNlc1N0cmluZyA9IHByZW1pc2VzLnJlZHVjZSgocHJlbWlzZXNTdHJpbmcsIHByZW1pc2UpID0+IHtcbiAgICBjb25zdCBwcmVtaXNlU3RyaW5nID0gcHJlbWlzZS5nZXRTdHJpbmcoKTtcblxuICAgIHByZW1pc2VzU3RyaW5nID0gKHByZW1pc2VzU3RyaW5nICE9PSBudWxsKSA/XG4gICAgICAgICAgICAgICAgICAgICAgIGAke3ByZW1pc2VzU3RyaW5nfSwgJHtwcmVtaXNlU3RyaW5nfWAgOlxuICAgICAgICAgICAgICAgICAgICAgICAgIHByZW1pc2VTdHJpbmc7ICAvLy9cblxuICAgIHJldHVybiBwcmVtaXNlc1N0cmluZztcbiAgfSwgbnVsbCk7XG5cbiAgcmV0dXJuIHByZW1pc2VzU3RyaW5nO1xufVxuXG5mdW5jdGlvbiBzdHJpbmdGcm9tTGFiZWxzUHJlbWlzZXNBbmRDb25jbHVzaW9uKGxhYmVscywgcHJlbWlzZXMsIGNvbmNsdXNpb24pIHtcbiAgY29uc3QgcHJlbWlzZXNTdHJpbmcgPSBwcmVtaXNlc1N0cmluZ0Zyb21QcmVtaXNlcyhwcmVtaXNlcyksXG4gICAgICAgIGNvbmNsdXNpb25TdHJpbmcgPSBjb25jbHVzaW9uLmdldFN0cmluZygpLFxuICAgICAgICBsYWJlbHNTdHJpbmcgPSBsYWJlbHNTdHJpbmdGcm9tTGFiZWxzKGxhYmVscyksXG4gICAgICAgIHN0cmluZyA9IGAke2xhYmVsc1N0cmluZ30gOjogWyR7cHJlbWlzZXNTdHJpbmd9XSAuLi4gJHtjb25jbHVzaW9uU3RyaW5nfWA7XG5cbiAgcmV0dXJuIHN0cmluZztcbn1cbiJdLCJuYW1lcyI6WyJyZXZlcnNlIiwiYXJyYXlVdGlsaXRpZXMiLCJleHRyYWN0IiwiYmFja3dhcmRzRXZlcnkiLCJkb21Bc3NpZ25lZCIsIlJ1bGUiLCJmaWxlQ29udGV4dCIsInN0cmluZyIsImxhYmVscyIsInByZW1pc2VzIiwiY29uY2x1c2lvbiIsInByb29mIiwiZ2V0RmlsZUNvbnRleHQiLCJnZXRTdHJpbmciLCJnZXRMYWJlbHMiLCJnZXRQcmVtaXNlcyIsImdldENvbmNsdXNpb24iLCJnZXRQcm9vZiIsIm1hdGNoTWV0YXZhcmlhYmxlTmFtZSIsIm1ldGF2YXJpYWJsZU5hbWUiLCJtZXRhdmFyaWFibGVOYW1lTWF0Y2hlcyIsInNvbWUiLCJsYWJlbCIsInVuaWZ5U3RhdGVtZW50QW5kU3RlcHNPclN1YnByb29mcyIsInN0YXRlbWVudCIsInN0ZXBzT3JTdWJwcm9vZnMiLCJjb250ZXh0Iiwic3RhdGVtZW50QW5kU3RlcHNPclN1YnByb29mc1VuaWZ5IiwibG9jYWxDb250ZXh0IiwiTG9jYWxDb250ZXh0IiwiZnJvbUZpbGVDb250ZXh0IiwiZ2VuZXJhbENvbnRleHQiLCJzcGVjaWZpY0NvbnRleHQiLCJzdWJzdGl0dXRpb25zIiwiU3Vic3RpdHV0aW9ucyIsImZyb21Ob3RoaW5nIiwic3RhdGVtZW50VW5pZmllc1dpdGhDb25jbHVzaW9uIiwidW5pZnlTdGF0ZW1lbnRXaXRoQ29uY2x1c2lvbiIsInN0ZXBzT3JTdWJwcm9vZnNVbmlmeVdpdGhQcmVtaXNlcyIsInVuaWZ5U3RlcHNPclN1YnByb29mc1dpdGhQcmVtaXNlcyIsInN1YnN0aXR1dGlvbnNSZXNvbHZlZCIsImFyZVJlc29sdmVkIiwic3RhdGVtZW50VW5pZmllcyIsInVuaWZ5U3RhdGVtZW50IiwicHJlbWlzZSIsInN0ZXBVbmlmaWVzV2l0aFByZW1pc2UiLCJ1bmlmeVN0ZXBzT3JTdWJwcm9vZnNXaXRoUHJlbWlzZSIsInN0ZXBzT3JTdWJwcm9vZnNVbmlmeVdpdGhQcmVtaXNlIiwicHJlbWlzZVVuaWZpZXNJbmRlcGVuZGVudGx5IiwidW5pZnlJbmRlcGVuZGVudGx5Iiwic3RlcE9yU3VicHJvb2YiLCJzdGVwT3JTdWJwcm9vZlVuaWZpZXMiLCJ1bmlmeVN0ZXBPclN1YnByb29mIiwidmVyaWZ5IiwidmVyaWZpZXMiLCJydWxlU3RyaW5nIiwidHJhY2UiLCJsYWJlbHNWZXJpZnkiLCJ2ZXJpZnlMYWJlbHMiLCJwcmVtaXNlc1ZlcmlmeSIsInZlcmlmeVByZW1pc2VzIiwiY29uY2x1c2lvblZlcmlmaWVzIiwidmVyaWZ5Q29uY2x1c2lvbiIsInByb29mVmVyaWZpZXMiLCJ2ZXJpZnlQcm9vZiIsInJ1bGUiLCJhZGRSdWxlIiwiZGVidWciLCJldmVyeSIsIm5hbWVPbmx5IiwibGFiZWxWZXJpZmllcyIsInByZW1pc2VWZXJpZmllcyIsInZlcmlmeVByZW1pc2UiLCJ0b0pTT04iLCJsYWJlbHNKU09OIiwibGFiZWxzVG9MYWJlbHNKU09OIiwicHJlbWlzZXNKU09OIiwicHJlbWlzZXNUb1ByZW1pc2VzSlNPTiIsImNvbmNsdXNpb25KU09OIiwiY29uY2x1c2lvblRvQ29uY2x1c2lvbkpTT04iLCJqc29uIiwiZnJvbUpTT04iLCJsYWJlbHNGcm9tSlNPTiIsInByZW1pc2VzRnJvbUpTT04iLCJjb25jbHVzaW9uRnJvbUpTT04iLCJzdHJpbmdGcm9tTGFiZWxzUHJlbWlzZXNBbmRDb25jbHVzaW9uIiwiZnJvbVJ1bGVOb2RlIiwicnVsZU5vZGUiLCJwcm9vZkZyb21SdWxlTm9kZSIsImxhYmVsc0Zyb21SdWxlTm9kZSIsInByZW1pc2VzRnJvbVJ1bGVOb2RlIiwiY29uY2x1c2lvbkZyb21SdWxlTm9kZSIsIm5hbWUiLCJQcm9vZiIsImRvbSIsInByb29mTm9kZSIsImdldFByb29mTm9kZSIsImZyb21Qcm9vZk5vZGUiLCJMYWJlbCIsImxhYmVsTm9kZXMiLCJnZXRMYWJlbE5vZGVzIiwibWFwIiwibGFiZWxOb2RlIiwiZnJvbUxhYmVsTm9kZSIsIlByZW1pc2UiLCJwcmVtaXNlTm9kZXMiLCJnZXRQcmVtaXNlTm9kZXMiLCJwcmVtaXNlTm9kZSIsImZyb21QcmVtaXNlTm9kZSIsIkNvbmNsdXNpb24iLCJjb25jbHVzaW9uTm9kZSIsImdldENvbmNsdXNpb25Ob2RlIiwiZnJvbUNvbmNsdXNpb25Ob2RlIiwicHJlbWlzZXNTdHJpbmdGcm9tUHJlbWlzZXMiLCJwcmVtaXNlc1N0cmluZyIsInJlZHVjZSIsInByZW1pc2VTdHJpbmciLCJjb25jbHVzaW9uU3RyaW5nIiwibGFiZWxzU3RyaW5nIiwibGFiZWxzU3RyaW5nRnJvbUxhYmVscyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBbUJBOzs7ZUFBQTs7O3lCQWpCK0I7MkRBRWY7NERBQ1M7b0VBQ0M7aUNBR2E7b0JBTUk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTNDLElBQVFBLFVBQXFDQyx5QkFBYyxDQUFuREQsU0FBU0UsVUFBNEJELHlCQUFjLENBQTFDQyxTQUFTQyxpQkFBbUJGLHlCQUFjLENBQWpDRTtJQUUxQixXQUFlQyxJQUFBQSxnQkFBVyx5QkFBQzthQUFNQyxLQUNuQkMsV0FBVyxFQUFFQyxNQUFNLEVBQUVDLE1BQU0sRUFBRUMsUUFBUSxFQUFFQyxVQUFVLEVBQUVDLEtBQUs7Z0NBRHJDTjtRQUU3QixJQUFJLENBQUNDLFdBQVcsR0FBR0E7UUFDbkIsSUFBSSxDQUFDQyxNQUFNLEdBQUdBO1FBQ2QsSUFBSSxDQUFDQyxNQUFNLEdBQUdBO1FBQ2QsSUFBSSxDQUFDQyxRQUFRLEdBQUdBO1FBQ2hCLElBQUksQ0FBQ0MsVUFBVSxHQUFHQTtRQUNsQixJQUFJLENBQUNDLEtBQUssR0FBR0E7Ozs7WUFHZkMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDTixXQUFXO1lBQ3pCOzs7WUFFQU8sS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDTixNQUFNO1lBQ3BCOzs7WUFFQU8sS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDTixNQUFNO1lBQ3BCOzs7WUFFQU8sS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9B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