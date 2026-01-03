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
var _elements = /*#__PURE__*/ _interop_require_wildcard(require("../elements"));
var _local = /*#__PURE__*/ _interop_require_default(require("../context/local"));
var _axiomLemmaTheoremConjecture = require("./axiomLemmaTheoremConjecture");
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
var _default = (0, _elements.define)((_Rule = /*#__PURE__*/ function() {
    function Rule(context, string, node, labels, premises, conclusion, proof) {
        _class_call_check(this, Rule);
        this.context = context;
        this.string = string;
        this.node = node;
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
                    var Substitutions = _elements.default.Substitutions, substitutions = Substitutions.fromNothing();
                    proofVerifies = this.proof.verify(substitutions, this.conclusion, context);
                }
                return proofVerifies;
            }
        },
        {
            key: "unifyStatementWithConclusion",
            value: function unifyStatementWithConclusion(statement, substitutions, context) {
                var statementUnifiesWithConclusion = false;
                var statementUnifies = this.conclusion.unifyStatement(statement, substitutions, context);
                if (statementUnifies) {
                    statementUnifiesWithConclusion = true;
                }
                return statementUnifiesWithConclusion;
            }
        },
        {
            key: "unifyStatementAndStepsOrSubproofs",
            value: function unifyStatementAndStepsOrSubproofs(statement, stepsOrSubproofs, context) {
                var statementAndStepsOrSubproofsUnify = false;
                var Substitutions = _elements.default.Substitutions, substitutions = Substitutions.fromNothing(), statementUnifiesWithConclusion = this.unifyStatementWithConclusion(statement, substitutions, context);
                if (statementUnifiesWithConclusion) {
                    var stepsOrSubproofsUnifiesWithPremises = this.unifyStepsOrSubproofsWithPremises(stepsOrSubproofs, substitutions, context);
                    if (stepsOrSubproofsUnifiesWithPremises) {
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
                var stepsOrSubproofsUnifiesWithPremise = false;
                if (!stepsOrSubproofsUnifiesWithPremise) {
                    var premiseUnifiesIndependently = premise.unifyIndependently(substitutions, context);
                    if (premiseUnifiesIndependently) {
                        stepsOrSubproofsUnifiesWithPremise = true;
                    }
                }
                if (!stepsOrSubproofsUnifiesWithPremise) {
                    var stepOrSubproof = extract(stepsOrSubproofs, function(stepOrSubproof) {
                        var stepOrSubproofUnifies = premise.unifyStepOrSubproof(stepOrSubproof, substitutions, context);
                        if (stepOrSubproofUnifies) {
                            return true;
                        }
                    }) || null;
                    if (stepOrSubproof !== null) {
                        stepsOrSubproofsUnifiesWithPremise = true;
                    }
                }
                return stepsOrSubproofsUnifiesWithPremise;
            }
        },
        {
            key: "unifyStepsOrSubproofsWithPremises",
            value: function unifyStepsOrSubproofsWithPremises(stepsOrSubproofs, substitutions, context) {
                var _this = this;
                stepsOrSubproofs = reverse(stepsOrSubproofs); ///
                var stepsOrSubproofsUnifiesWithPremises = backwardsEvery(this.premises, function(premise) {
                    var stepUnifiesWithPremise = _this.unifyStepsOrSubproofsWithPremise(stepsOrSubproofs, premise, substitutions, context);
                    if (stepUnifiesWithPremise) {
                        return true;
                    }
                });
                return stepsOrSubproofsUnifiesWithPremises;
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
                rule = new Rule(context, string, node, labels, premises, conclusion, proof);
                return rule;
            }
        },
        {
            key: "fromRuleNode",
            value: function fromRuleNode(ruleNode, context) {
                var node = ruleNode, proof = proofFromRuleNode(ruleNode, context), labels = labelsFromRuleNode(ruleNode, context), premises = premisesFromRuleNode(ruleNode, context), conclusion = conclusionFromRuleNode(ruleNode, context), string = stringFromLabelsPremisesAndConclusion(labels, premises, conclusion), rule = new Rule(context, string, node, labels, premises, conclusion, proof);
                return rule;
            }
        }
    ]);
    return Rule;
}(), _define_property(_Rule, "name", "Rule"), _Rule));
function proofFromRuleNode(ruleNode, context) {
    var Proof = _elements.default.Proof, proofNode = ruleNode.getProofNode(), proof = Proof.fromProofNode(proofNode, context);
    return proof;
}
function labelsFromRuleNode(ruleNode, context) {
    var Label = _elements.default.Label, labelNodes = ruleNode.getLabelNodes(), labels = labelNodes.map(function(labelNode) {
        var label = Label.fromLabelNode(labelNode, context);
        return label;
    });
    return labels;
}
function premisesFromRuleNode(ruleNode, context) {
    var Premise = _elements.default.Premise, premiseNodes = ruleNode.getPremiseNodes(), premises = premiseNodes.map(function(premiseNode) {
        var premise = Premise.fromPremiseNode(premiseNode, context);
        return premise;
    });
    return premises;
}
function conclusionFromRuleNode(ruleNode, context) {
    var Conclusion = _elements.default.Conclusion, conclusionNode = ruleNode.getConclusionNode(), conclusion = Conclusion.fromConclusionNode(conclusionNode, context);
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
    var premisesString = premisesStringFromPremises(premises), conclusionString = conclusion.getString(), labelsString = (0, _axiomLemmaTheoremConjecture.labelsStringFromLabels)(labels), string = premisesString !== null ? "".concat(labelsString, " :: [").concat(premisesString, "] ... ").concat(conclusionString) : "".concat(labelsString, " :: ").concat(conclusionString);
    return string;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L3J1bGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGFycmF5VXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuXG5pbXBvcnQgZWxlbWVudHMgZnJvbSBcIi4uL2VsZW1lbnRzXCI7XG5pbXBvcnQgTG9jYWxDb250ZXh0IGZyb20gXCIuLi9jb250ZXh0L2xvY2FsXCI7XG5cbmltcG9ydCB7IGRlZmluZSB9IGZyb20gXCIuLi9lbGVtZW50c1wiO1xuaW1wb3J0IHsgbGFiZWxzU3RyaW5nRnJvbUxhYmVscyB9IGZyb20gXCIuL2F4aW9tTGVtbWFUaGVvcmVtQ29uamVjdHVyZVwiO1xuaW1wb3J0IHsgbGFiZWxzRnJvbUpTT04sXG4gICAgICAgICBwcmVtaXNlc0Zyb21KU09OLFxuICAgICAgICAgY29uY2x1c2lvbkZyb21KU09OLFxuICAgICAgICAgbGFiZWxzVG9MYWJlbHNKU09OLFxuICAgICAgICAgcHJlbWlzZXNUb1ByZW1pc2VzSlNPTixcbiAgICAgICAgIGNvbmNsdXNpb25Ub0NvbmNsdXNpb25KU09OIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9qc29uXCI7XG5cbmNvbnN0IHsgcmV2ZXJzZSwgZXh0cmFjdCwgYmFja3dhcmRzRXZlcnkgfSA9IGFycmF5VXRpbGl0aWVzO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmUoY2xhc3MgUnVsZSB7XG4gIGNvbnN0cnVjdG9yKGNvbnRleHQsIHN0cmluZywgbm9kZSwgbGFiZWxzLCBwcmVtaXNlcywgY29uY2x1c2lvbiwgcHJvb2YpIHtcbiAgICB0aGlzLmNvbnRleHQgPSBjb250ZXh0O1xuICAgIHRoaXMuc3RyaW5nID0gc3RyaW5nO1xuICAgIHRoaXMubm9kZSA9IG5vZGU7XG4gICAgdGhpcy5sYWJlbHMgPSBsYWJlbHM7XG4gICAgdGhpcy5wcmVtaXNlcyA9IHByZW1pc2VzO1xuICAgIHRoaXMuY29uY2x1c2lvbiA9IGNvbmNsdXNpb247XG4gICAgdGhpcy5wcm9vZiA9IHByb29mO1xuICB9XG5cbiAgZ2V0Q29udGV4dCgpIHtcbiAgICByZXR1cm4gdGhpcy5jb250ZXh0O1xuICB9XG5cbiAgZ2V0Tm9kZSgpIHtcbiAgICByZXR1cm4gdGhpcy5ub2RlO1xuICB9XG5cbiAgZ2V0U3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLnN0cmluZztcbiAgfVxuXG4gIGdldExhYmVscygpIHtcbiAgICByZXR1cm4gdGhpcy5sYWJlbHM7XG4gIH1cblxuICBnZXRQcmVtaXNlcygpIHtcbiAgICByZXR1cm4gdGhpcy5wcmVtaXNlcztcbiAgfVxuXG4gIGdldENvbmNsdXNpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuY29uY2x1c2lvbjtcbiAgfVxuXG4gIGdldFByb29mKCkge1xuICAgIHJldHVybiB0aGlzLnByb29mO1xuICB9XG5cbiAgbWF0Y2hNZXRhdmFyaWFibGVOYW1lKG1ldGF2YXJpYWJsZU5hbWUpIHtcbiAgICBjb25zdCBtZXRhdmFyaWFibGVOYW1lTWF0Y2hlcyA9IHRoaXMubGFiZWxzLnNvbWUoKGxhYmVsKSA9PiB7XG4gICAgICBjb25zdCBtZXRhdmFyaWFibGVOYW1lTWF0Y2hlcyA9IGxhYmVsLm1hdGNoTWV0YXZhcmlhYmxlTmFtZShtZXRhdmFyaWFibGVOYW1lKTtcblxuICAgICAgaWYgKG1ldGF2YXJpYWJsZU5hbWVNYXRjaGVzKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIG1ldGF2YXJpYWJsZU5hbWVNYXRjaGVzO1xuICB9XG5cbiAgdmVyaWZ5KCkge1xuICAgIGxldCB2ZXJpZmllcyA9IGZhbHNlO1xuXG4gICAgY29uc3QgcnVsZVN0cmluZyA9IHRoaXMuc3RyaW5nOyAvLy9cblxuICAgIHRoaXMuY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtydWxlU3RyaW5nfScgcnVsZS4uLmAsIHRoaXMubm9kZSk7XG5cbiAgICBjb25zdCBsYWJlbHNWZXJpZnkgPSB0aGlzLnZlcmlmeUxhYmVscygpO1xuXG4gICAgaWYgKGxhYmVsc1ZlcmlmeSkge1xuICAgICAgY29uc3QgbG9jYWxDb250ZXh0ID0gTG9jYWxDb250ZXh0LmZyb21Ob3RoaW5nKHRoaXMuY29udGV4dCksXG4gICAgICAgICAgICBjb250ZXh0ID0gbG9jYWxDb250ZXh0LCAvLy9cbiAgICAgICAgICAgIHByZW1pc2VzVmVyaWZ5ID0gdGhpcy52ZXJpZnlQcmVtaXNlcyhjb250ZXh0KTtcblxuICAgICAgaWYgKHByZW1pc2VzVmVyaWZ5KSB7XG4gICAgICAgIGNvbnN0IGNvbmNsdXNpb25WZXJpZmllcyA9IHRoaXMudmVyaWZ5Q29uY2x1c2lvbihjb250ZXh0KTtcblxuICAgICAgICBpZiAoY29uY2x1c2lvblZlcmlmaWVzKSB7XG4gICAgICAgICAgY29uc3QgcHJvb2ZWZXJpZmllcyA9IHRoaXMudmVyaWZ5UHJvb2YoY29udGV4dCk7XG5cbiAgICAgICAgICBpZiAocHJvb2ZWZXJpZmllcykge1xuICAgICAgICAgICAgY29uc3QgcnVsZSA9IHRoaXM7ICAvLy9cblxuICAgICAgICAgICAgdGhpcy5jb250ZXh0LmFkZFJ1bGUocnVsZSk7XG5cbiAgICAgICAgICAgIHZlcmlmaWVzID0gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodmVyaWZpZXMpIHtcbiAgICAgIHRoaXMuY29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke3J1bGVTdHJpbmd9JyBydWxlLmAsIHRoaXMubm9kZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZlcmlmaWVzO1xuICB9XG5cbiAgdmVyaWZ5TGFiZWxzKCkge1xuICAgIGNvbnN0IGxhYmVsc1ZlcmlmeSA9IHRoaXMubGFiZWxzLmV2ZXJ5KChsYWJlbCkgPT4ge1xuICAgICAgY29uc3QgbmFtZU9ubHkgPSB0cnVlLFxuICAgICAgICAgICAgbGFiZWxWZXJpZmllcyA9IGxhYmVsLnZlcmlmeShuYW1lT25seSk7XG5cbiAgICAgIGlmIChsYWJlbFZlcmlmaWVzKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIGxhYmVsc1ZlcmlmeTtcbiAgfVxuXG4gIHZlcmlmeVByZW1pc2VzKGNvbnRleHQpIHtcbiAgICBjb25zdCBwcmVtaXNlc1ZlcmlmeSA9IHRoaXMucHJlbWlzZXMuZXZlcnkoKHByZW1pc2UpID0+IHtcbiAgICAgIGNvbnN0IHByZW1pc2VWZXJpZmllcyA9IHRoaXMudmVyaWZ5UHJlbWlzZShwcmVtaXNlLCBjb250ZXh0KTtcblxuICAgICAgaWYgKHByZW1pc2VWZXJpZmllcykge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiBwcmVtaXNlc1ZlcmlmeTtcbiAgfVxuXG4gIHZlcmlmeVByZW1pc2UocHJlbWlzZSwgY29udGV4dCkge1xuICAgIGNvbnN0IHByZW1pc2VWZXJpZmllcyA9IHByZW1pc2UudmVyaWZ5KGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIHByZW1pc2VWZXJpZmllcztcbiAgfVxuXG4gIHZlcmlmeUNvbmNsdXNpb24oY29udGV4dCkge1xuICAgIGNvbnN0IGNvbmNsdXNpb25WZXJpZmllcyA9IHRoaXMuY29uY2x1c2lvbi52ZXJpZnkoY29udGV4dCk7XG5cbiAgICByZXR1cm4gY29uY2x1c2lvblZlcmlmaWVzO1xuICB9XG5cbiAgdmVyaWZ5UHJvb2YoY29udGV4dCkge1xuICAgIGxldCBwcm9vZlZlcmlmaWVzO1xuXG4gICAgaWYgKHRoaXMucHJvb2YgPT09IG51bGwpIHtcbiAgICAgIHByb29mVmVyaWZpZXMgPSB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCB7IFN1YnN0aXR1dGlvbnMgfSA9IGVsZW1lbnRzLFxuICAgICAgICAgICAgc3Vic3RpdHV0aW9ucyA9IFN1YnN0aXR1dGlvbnMuZnJvbU5vdGhpbmcoKTtcblxuICAgICAgcHJvb2ZWZXJpZmllcyA9IHRoaXMucHJvb2YudmVyaWZ5KHN1YnN0aXR1dGlvbnMsIHRoaXMuY29uY2x1c2lvbiwgY29udGV4dCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHByb29mVmVyaWZpZXM7XG4gIH1cblxuICB1bmlmeVN0YXRlbWVudFdpdGhDb25jbHVzaW9uKHN0YXRlbWVudCwgc3Vic3RpdHV0aW9ucywgY29udGV4dCkge1xuICAgIGxldCBzdGF0ZW1lbnRVbmlmaWVzV2l0aENvbmNsdXNpb24gPSBmYWxzZTtcblxuICAgIGNvbnN0IHN0YXRlbWVudFVuaWZpZXMgPSB0aGlzLmNvbmNsdXNpb24udW5pZnlTdGF0ZW1lbnQoc3RhdGVtZW50LCBzdWJzdGl0dXRpb25zLCBjb250ZXh0KTtcblxuICAgIGlmIChzdGF0ZW1lbnRVbmlmaWVzKSB7XG4gICAgICBzdGF0ZW1lbnRVbmlmaWVzV2l0aENvbmNsdXNpb24gPSB0cnVlO1xuICAgIH1cblxuICAgIHJldHVybiBzdGF0ZW1lbnRVbmlmaWVzV2l0aENvbmNsdXNpb247XG4gIH1cblxuICB1bmlmeVN0YXRlbWVudEFuZFN0ZXBzT3JTdWJwcm9vZnMoc3RhdGVtZW50LCBzdGVwc09yU3VicHJvb2ZzLCBjb250ZXh0KSB7XG4gICAgbGV0IHN0YXRlbWVudEFuZFN0ZXBzT3JTdWJwcm9vZnNVbmlmeSA9IGZhbHNlO1xuXG4gICAgY29uc3QgeyBTdWJzdGl0dXRpb25zIH0gPSBlbGVtZW50cyxcbiAgICAgICAgICBzdWJzdGl0dXRpb25zID0gU3Vic3RpdHV0aW9ucy5mcm9tTm90aGluZygpLFxuICAgICAgICAgIHN0YXRlbWVudFVuaWZpZXNXaXRoQ29uY2x1c2lvbiA9IHRoaXMudW5pZnlTdGF0ZW1lbnRXaXRoQ29uY2x1c2lvbihzdGF0ZW1lbnQsIHN1YnN0aXR1dGlvbnMsIGNvbnRleHQpO1xuXG4gICAgaWYgKHN0YXRlbWVudFVuaWZpZXNXaXRoQ29uY2x1c2lvbikge1xuICAgICAgY29uc3Qgc3RlcHNPclN1YnByb29mc1VuaWZpZXNXaXRoUHJlbWlzZXMgPSB0aGlzLnVuaWZ5U3RlcHNPclN1YnByb29mc1dpdGhQcmVtaXNlcyhzdGVwc09yU3VicHJvb2ZzLCBzdWJzdGl0dXRpb25zLCBjb250ZXh0KTtcblxuICAgICAgaWYgKHN0ZXBzT3JTdWJwcm9vZnNVbmlmaWVzV2l0aFByZW1pc2VzKSB7XG4gICAgICAgIGNvbnN0IHN1YnN0aXR1dGlvbnNSZXNvbHZlZCA9IHN1YnN0aXR1dGlvbnMuYXJlUmVzb2x2ZWQoKTtcblxuICAgICAgICBpZiAoc3Vic3RpdHV0aW9uc1Jlc29sdmVkKSB7XG4gICAgICAgICAgc3RhdGVtZW50QW5kU3RlcHNPclN1YnByb29mc1VuaWZ5ID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBzdGF0ZW1lbnRBbmRTdGVwc09yU3VicHJvb2ZzVW5pZnk7XG4gIH1cblxuICB1bmlmeVN0ZXBzT3JTdWJwcm9vZnNXaXRoUHJlbWlzZShzdGVwc09yU3VicHJvb2ZzLCBwcmVtaXNlLCBzdWJzdGl0dXRpb25zLCBjb250ZXh0KSB7XG4gICAgbGV0IHN0ZXBzT3JTdWJwcm9vZnNVbmlmaWVzV2l0aFByZW1pc2UgPSBmYWxzZTtcblxuICAgIGlmICghc3RlcHNPclN1YnByb29mc1VuaWZpZXNXaXRoUHJlbWlzZSkge1xuICAgICAgY29uc3QgcHJlbWlzZVVuaWZpZXNJbmRlcGVuZGVudGx5ID0gcHJlbWlzZS51bmlmeUluZGVwZW5kZW50bHkoc3Vic3RpdHV0aW9ucywgY29udGV4dCk7XG5cbiAgICAgIGlmIChwcmVtaXNlVW5pZmllc0luZGVwZW5kZW50bHkpIHtcbiAgICAgICAgc3RlcHNPclN1YnByb29mc1VuaWZpZXNXaXRoUHJlbWlzZSA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKCFzdGVwc09yU3VicHJvb2ZzVW5pZmllc1dpdGhQcmVtaXNlKSB7XG4gICAgICBjb25zdCBzdGVwT3JTdWJwcm9vZiA9IGV4dHJhY3Qoc3RlcHNPclN1YnByb29mcywgKHN0ZXBPclN1YnByb29mKSA9PiB7XG4gICAgICAgIGNvbnN0IHN0ZXBPclN1YnByb29mVW5pZmllcyA9IHByZW1pc2UudW5pZnlTdGVwT3JTdWJwcm9vZihzdGVwT3JTdWJwcm9vZiwgc3Vic3RpdHV0aW9ucywgY29udGV4dCk7XG5cbiAgICAgICAgaWYgKHN0ZXBPclN1YnByb29mVW5pZmllcykge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICB9KSB8fCBudWxsO1xuXG4gICAgICBpZiAoc3RlcE9yU3VicHJvb2YgIT09IG51bGwpIHtcbiAgICAgICAgc3RlcHNPclN1YnByb29mc1VuaWZpZXNXaXRoUHJlbWlzZSA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHN0ZXBzT3JTdWJwcm9vZnNVbmlmaWVzV2l0aFByZW1pc2U7XG4gIH1cblxuICB1bmlmeVN0ZXBzT3JTdWJwcm9vZnNXaXRoUHJlbWlzZXMoc3RlcHNPclN1YnByb29mcywgc3Vic3RpdHV0aW9ucywgY29udGV4dCkge1xuICAgIHN0ZXBzT3JTdWJwcm9vZnMgPSByZXZlcnNlKHN0ZXBzT3JTdWJwcm9vZnMpOyAvLy9cblxuICAgIGNvbnN0IHN0ZXBzT3JTdWJwcm9vZnNVbmlmaWVzV2l0aFByZW1pc2VzID0gYmFja3dhcmRzRXZlcnkodGhpcy5wcmVtaXNlcywgKHByZW1pc2UpID0+IHtcbiAgICAgIGNvbnN0IHN0ZXBVbmlmaWVzV2l0aFByZW1pc2UgPSB0aGlzLnVuaWZ5U3RlcHNPclN1YnByb29mc1dpdGhQcmVtaXNlKHN0ZXBzT3JTdWJwcm9vZnMsIHByZW1pc2UsIHN1YnN0aXR1dGlvbnMsIGNvbnRleHQpO1xuXG4gICAgICBpZiAoc3RlcFVuaWZpZXNXaXRoUHJlbWlzZSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiBzdGVwc09yU3VicHJvb2ZzVW5pZmllc1dpdGhQcmVtaXNlcztcbiAgfVxuXG4gIHRvSlNPTigpIHtcbiAgICBjb25zdCBsYWJlbHNKU09OID0gbGFiZWxzVG9MYWJlbHNKU09OKHRoaXMubGFiZWxzKSxcbiAgICAgICAgICBwcmVtaXNlc0pTT04gPSBwcmVtaXNlc1RvUHJlbWlzZXNKU09OKHRoaXMucHJlbWlzZXMpLFxuICAgICAgICAgIGNvbmNsdXNpb25KU09OID0gY29uY2x1c2lvblRvQ29uY2x1c2lvbkpTT04odGhpcy5jb25jbHVzaW9uKSxcbiAgICAgICAgICBsYWJlbHMgPSBsYWJlbHNKU09OLCAgLy8vXG4gICAgICAgICAgcHJlbWlzZXMgPSBwcmVtaXNlc0pTT04sICAvLy9cbiAgICAgICAgICBjb25jbHVzaW9uID0gY29uY2x1c2lvbkpTT04sICAvLy9cbiAgICAgICAgICBqc29uID0ge1xuICAgICAgICAgICAgbGFiZWxzLFxuICAgICAgICAgICAgcHJlbWlzZXMsXG4gICAgICAgICAgICBjb25jbHVzaW9uXG4gICAgICAgICAgfTtcblxuICAgIHJldHVybiBqc29uO1xuICB9XG5cbiAgc3RhdGljIG5hbWUgPSBcIlJ1bGVcIjtcblxuICBzdGF0aWMgZnJvbUpTT04oanNvbiwgY29udGV4dCkge1xuICAgIGxldCBydWxlO1xuXG4gICAgY29uc3Qgbm9kZSA9IG51bGwsXG4gICAgICAgICAgcHJvb2YgPSBudWxsLFxuICAgICAgICAgIGxhYmVscyA9IGxhYmVsc0Zyb21KU09OKGpzb24sIGNvbnRleHQpLFxuICAgICAgICAgIHByZW1pc2VzID0gcHJlbWlzZXNGcm9tSlNPTihqc29uLCBjb250ZXh0KSxcbiAgICAgICAgICBjb25jbHVzaW9uID0gY29uY2x1c2lvbkZyb21KU09OKGpzb24sIGNvbnRleHQpLFxuICAgICAgICAgIHN0cmluZyA9IHN0cmluZ0Zyb21MYWJlbHNQcmVtaXNlc0FuZENvbmNsdXNpb24obGFiZWxzLCBwcmVtaXNlcywgY29uY2x1c2lvbik7XG5cbiAgICBydWxlID0gbmV3IFJ1bGUoY29udGV4dCwgc3RyaW5nLCBub2RlLCBsYWJlbHMsIHByZW1pc2VzLCBjb25jbHVzaW9uLCBwcm9vZik7XG5cbiAgICByZXR1cm4gcnVsZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUnVsZU5vZGUocnVsZU5vZGUsIGNvbnRleHQpIHtcbiAgICBjb25zdCBub2RlID0gcnVsZU5vZGUsICAvLy9cbiAgICAgICAgICBwcm9vZiA9IHByb29mRnJvbVJ1bGVOb2RlKHJ1bGVOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgICBsYWJlbHMgPSBsYWJlbHNGcm9tUnVsZU5vZGUocnVsZU5vZGUsIGNvbnRleHQpLFxuICAgICAgICAgIHByZW1pc2VzID0gcHJlbWlzZXNGcm9tUnVsZU5vZGUocnVsZU5vZGUsIGNvbnRleHQpLFxuICAgICAgICAgIGNvbmNsdXNpb24gPSBjb25jbHVzaW9uRnJvbVJ1bGVOb2RlKHJ1bGVOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgICBzdHJpbmcgPSBzdHJpbmdGcm9tTGFiZWxzUHJlbWlzZXNBbmRDb25jbHVzaW9uKGxhYmVscywgcHJlbWlzZXMsIGNvbmNsdXNpb24pLFxuICAgICAgICAgIHJ1bGUgPSBuZXcgUnVsZShjb250ZXh0LCBzdHJpbmcsIG5vZGUsIGxhYmVscywgcHJlbWlzZXMsIGNvbmNsdXNpb24sIHByb29mKTtcblxuICAgIHJldHVybiBydWxlO1xuICB9XG59KTtcblxuZnVuY3Rpb24gcHJvb2ZGcm9tUnVsZU5vZGUocnVsZU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBQcm9vZiB9ID0gZWxlbWVudHMsXG4gICAgICAgIHByb29mTm9kZSA9IHJ1bGVOb2RlLmdldFByb29mTm9kZSgpLFxuICAgICAgICBwcm9vZiA9IFByb29mLmZyb21Qcm9vZk5vZGUocHJvb2ZOb2RlLCBjb250ZXh0KTtcblxuICByZXR1cm4gcHJvb2Y7XG59XG5cbmZ1bmN0aW9uIGxhYmVsc0Zyb21SdWxlTm9kZShydWxlTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IExhYmVsIH0gPSBlbGVtZW50cyxcbiAgICAgICAgbGFiZWxOb2RlcyA9IHJ1bGVOb2RlLmdldExhYmVsTm9kZXMoKSxcbiAgICAgICAgbGFiZWxzID0gbGFiZWxOb2Rlcy5tYXAoKGxhYmVsTm9kZSkgPT4ge1xuICAgICAgICAgIGNvbnN0IGxhYmVsID0gTGFiZWwuZnJvbUxhYmVsTm9kZShsYWJlbE5vZGUsIGNvbnRleHQpO1xuXG4gICAgICAgICAgcmV0dXJuIGxhYmVsO1xuICAgICAgICB9KTtcblxuICByZXR1cm4gbGFiZWxzO1xufVxuXG5mdW5jdGlvbiBwcmVtaXNlc0Zyb21SdWxlTm9kZShydWxlTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IFByZW1pc2UgfSA9IGVsZW1lbnRzLFxuICAgICAgICBwcmVtaXNlTm9kZXMgPSBydWxlTm9kZS5nZXRQcmVtaXNlTm9kZXMoKSxcbiAgICAgICAgcHJlbWlzZXMgPSBwcmVtaXNlTm9kZXMubWFwKChwcmVtaXNlTm9kZSkgPT4ge1xuICAgICAgICAgIGNvbnN0IHByZW1pc2UgPSBQcmVtaXNlLmZyb21QcmVtaXNlTm9kZShwcmVtaXNlTm9kZSwgY29udGV4dCk7XG5cbiAgICAgICAgICByZXR1cm4gcHJlbWlzZTtcbiAgICAgICAgfSk7XG5cbiAgcmV0dXJuIHByZW1pc2VzO1xufVxuXG5mdW5jdGlvbiBjb25jbHVzaW9uRnJvbVJ1bGVOb2RlKHJ1bGVOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgQ29uY2x1c2lvbiB9ID0gZWxlbWVudHMsXG4gICAgICAgIGNvbmNsdXNpb25Ob2RlID0gcnVsZU5vZGUuZ2V0Q29uY2x1c2lvbk5vZGUoKSxcbiAgICAgICAgY29uY2x1c2lvbiA9IENvbmNsdXNpb24uZnJvbUNvbmNsdXNpb25Ob2RlKGNvbmNsdXNpb25Ob2RlLCBjb250ZXh0KTtcblxuICByZXR1cm4gY29uY2x1c2lvbjtcbn1cblxuZnVuY3Rpb24gcHJlbWlzZXNTdHJpbmdGcm9tUHJlbWlzZXMocHJlbWlzZXMpIHtcbiAgY29uc3QgcHJlbWlzZXNTdHJpbmcgPSBwcmVtaXNlcy5yZWR1Y2UoKHByZW1pc2VzU3RyaW5nLCBwcmVtaXNlKSA9PiB7XG4gICAgY29uc3QgcHJlbWlzZVN0cmluZyA9IHByZW1pc2UuZ2V0U3RyaW5nKCk7XG5cbiAgICBwcmVtaXNlc1N0cmluZyA9IChwcmVtaXNlc1N0cmluZyAhPT0gbnVsbCkgP1xuICAgICAgICAgICAgICAgICAgICAgICBgJHtwcmVtaXNlc1N0cmluZ30sICR7cHJlbWlzZVN0cmluZ31gIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICBwcmVtaXNlU3RyaW5nOyAgLy8vXG5cbiAgICByZXR1cm4gcHJlbWlzZXNTdHJpbmc7XG4gIH0sIG51bGwpO1xuXG4gIHJldHVybiBwcmVtaXNlc1N0cmluZztcbn1cblxuZnVuY3Rpb24gc3RyaW5nRnJvbUxhYmVsc1ByZW1pc2VzQW5kQ29uY2x1c2lvbihsYWJlbHMsIHByZW1pc2VzLCBjb25jbHVzaW9uKSB7XG4gIGNvbnN0IHByZW1pc2VzU3RyaW5nID0gcHJlbWlzZXNTdHJpbmdGcm9tUHJlbWlzZXMocHJlbWlzZXMpLFxuICAgICAgICBjb25jbHVzaW9uU3RyaW5nID0gY29uY2x1c2lvbi5nZXRTdHJpbmcoKSxcbiAgICAgICAgbGFiZWxzU3RyaW5nID0gbGFiZWxzU3RyaW5nRnJvbUxhYmVscyhsYWJlbHMpLFxuICAgICAgICBzdHJpbmcgPSAocHJlbWlzZXNTdHJpbmcgIT09IG51bGwpID9cbiAgICAgICAgICAgICAgICAgICAgYCR7bGFiZWxzU3RyaW5nfSA6OiBbJHtwcmVtaXNlc1N0cmluZ31dIC4uLiAke2NvbmNsdXNpb25TdHJpbmd9YCA6XG4gICAgICAgICAgICAgICAgICAgICAgYCR7bGFiZWxzU3RyaW5nfSA6OiAke2NvbmNsdXNpb25TdHJpbmd9YDtcblxuICByZXR1cm4gc3RyaW5nO1xufVxuIl0sIm5hbWVzIjpbInJldmVyc2UiLCJhcnJheVV0aWxpdGllcyIsImV4dHJhY3QiLCJiYWNrd2FyZHNFdmVyeSIsImRlZmluZSIsIlJ1bGUiLCJjb250ZXh0Iiwic3RyaW5nIiwibm9kZSIsImxhYmVscyIsInByZW1pc2VzIiwiY29uY2x1c2lvbiIsInByb29mIiwiZ2V0Q29udGV4dCIsImdldE5vZGUiLCJnZXRTdHJpbmciLCJnZXRMYWJlbHMiLCJnZXRQcmVtaXNlcyIsImdldENvbmNsdXNpb24iLCJnZXRQcm9vZiIsIm1hdGNoTWV0YXZhcmlhYmxlTmFtZSIsIm1ldGF2YXJpYWJsZU5hbWUiLCJtZXRhdmFyaWFibGVOYW1lTWF0Y2hlcyIsInNvbWUiLCJsYWJlbCIsInZlcmlmeSIsInZlcmlmaWVzIiwicnVsZVN0cmluZyIsInRyYWNlIiwibGFiZWxzVmVyaWZ5IiwidmVyaWZ5TGFiZWxzIiwibG9jYWxDb250ZXh0IiwiTG9jYWxDb250ZXh0IiwiZnJvbU5vdGhpbmciLCJwcmVtaXNlc1ZlcmlmeSIsInZlcmlmeVByZW1pc2VzIiwiY29uY2x1c2lvblZlcmlmaWVzIiwidmVyaWZ5Q29uY2x1c2lvbiIsInByb29mVmVyaWZpZXMiLCJ2ZXJpZnlQcm9vZiIsInJ1bGUiLCJhZGRSdWxlIiwiZGVidWciLCJldmVyeSIsIm5hbWVPbmx5IiwibGFiZWxWZXJpZmllcyIsInByZW1pc2UiLCJwcmVtaXNlVmVyaWZpZXMiLCJ2ZXJpZnlQcmVtaXNlIiwiU3Vic3RpdHV0aW9ucyIsImVsZW1lbnRzIiwic3Vic3RpdHV0aW9ucyIsInVuaWZ5U3RhdGVtZW50V2l0aENvbmNsdXNpb24iLCJzdGF0ZW1lbnQiLCJzdGF0ZW1lbnRVbmlmaWVzV2l0aENvbmNsdXNpb24iLCJzdGF0ZW1lbnRVbmlmaWVzIiwidW5pZnlTdGF0ZW1lbnQiLCJ1bmlmeVN0YXRlbWVudEFuZFN0ZXBzT3JTdWJwcm9vZnMiLCJzdGVwc09yU3VicHJvb2ZzIiwic3RhdGVtZW50QW5kU3RlcHNPclN1YnByb29mc1VuaWZ5Iiwic3RlcHNPclN1YnByb29mc1VuaWZpZXNXaXRoUHJlbWlzZXMiLCJ1bmlmeVN0ZXBzT3JTdWJwcm9vZnNXaXRoUHJlbWlzZXMiLCJzdWJzdGl0dXRpb25zUmVzb2x2ZWQiLCJhcmVSZXNvbHZlZCIsInVuaWZ5U3RlcHNPclN1YnByb29mc1dpdGhQcmVtaXNlIiwic3RlcHNPclN1YnByb29mc1VuaWZpZXNXaXRoUHJlbWlzZSIsInByZW1pc2VVbmlmaWVzSW5kZXBlbmRlbnRseSIsInVuaWZ5SW5kZXBlbmRlbnRseSIsInN0ZXBPclN1YnByb29mIiwic3RlcE9yU3VicHJvb2ZVbmlmaWVzIiwidW5pZnlTdGVwT3JTdWJwcm9vZiIsInN0ZXBVbmlmaWVzV2l0aFByZW1pc2UiLCJ0b0pTT04iLCJsYWJlbHNKU09OIiwibGFiZWxzVG9MYWJlbHNKU09OIiwicHJlbWlzZXNKU09OIiwicHJlbWlzZXNUb1ByZW1pc2VzSlNPTiIsImNvbmNsdXNpb25KU09OIiwiY29uY2x1c2lvblRvQ29uY2x1c2lvbkpTT04iLCJqc29uIiwiZnJvbUpTT04iLCJsYWJlbHNGcm9tSlNPTiIsInByZW1pc2VzRnJvbUpTT04iLCJjb25jbHVzaW9uRnJvbUpTT04iLCJzdHJpbmdGcm9tTGFiZWxzUHJlbWlzZXNBbmRDb25jbHVzaW9uIiwiZnJvbVJ1bGVOb2RlIiwicnVsZU5vZGUiLCJwcm9vZkZyb21SdWxlTm9kZSIsImxhYmVsc0Zyb21SdWxlTm9kZSIsInByZW1pc2VzRnJvbVJ1bGVOb2RlIiwiY29uY2x1c2lvbkZyb21SdWxlTm9kZSIsIm5hbWUiLCJQcm9vZiIsInByb29mTm9kZSIsImdldFByb29mTm9kZSIsImZyb21Qcm9vZk5vZGUiLCJMYWJlbCIsImxhYmVsTm9kZXMiLCJnZXRMYWJlbE5vZGVzIiwibWFwIiwibGFiZWxOb2RlIiwiZnJvbUxhYmVsTm9kZSIsIlByZW1pc2UiLCJwcmVtaXNlTm9kZXMiLCJnZXRQcmVtaXNlTm9kZXMiLCJwcmVtaXNlTm9kZSIsImZyb21QcmVtaXNlTm9kZSIsIkNvbmNsdXNpb24iLCJjb25jbHVzaW9uTm9kZSIsImdldENvbmNsdXNpb25Ob2RlIiwiZnJvbUNvbmNsdXNpb25Ob2RlIiwicHJlbWlzZXNTdHJpbmdGcm9tUHJlbWlzZXMiLCJwcmVtaXNlc1N0cmluZyIsInJlZHVjZSIsInByZW1pc2VTdHJpbmciLCJjb25jbHVzaW9uU3RyaW5nIiwibGFiZWxzU3RyaW5nIiwibGFi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