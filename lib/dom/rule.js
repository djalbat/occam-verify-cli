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
var _query = require("../utilities/query");
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
var proofNodeQuery = (0, _query.nodeQuery)("/rule/proof"), labelNodesQuery = (0, _query.nodesQuery)("/rule/labels/label"), premiseNodesQuery = (0, _query.nodesQuery)("/rule/premise"), conclusionNodeQuery = (0, _query.nodeQuery)("/rule/conclusion");
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
            key: "matchStatementNode",
            value: function matchStatementNode(statementNode) {
                return this.conclusion.matchStatementNode(statementNode);
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
            key: "unifyStatementAndProofSteps",
            value: function unifyStatementAndProofSteps(statement, proofSteps, context) {
                var statementAndProofStepsUnified = false;
                var localContext = _local.default.fromFileContext(this.fileContext), generalContext = localContext, specificContext = context; ///
                var substitutions = _substitutions.default.fromNothing(), statementUnifiedWithConclusion = this.unifyStatementWithConclusion(statement, substitutions, generalContext, specificContext);
                if (statementUnifiedWithConclusion) {
                    var proofStepsUnifiedWithPremises = this.unifyProofStepsWithPremises(proofSteps, substitutions, generalContext, specificContext);
                    if (proofStepsUnifiedWithPremises) {
                        var substitutionsResolved = substitutions.areResolved();
                        statementAndProofStepsUnified = substitutionsResolved; ///
                    }
                }
                return statementAndProofStepsUnified;
            }
        },
        {
            key: "unifyStatementWithConclusion",
            value: function unifyStatementWithConclusion(statement, substitutions, generalContext, specificContext) {
                var statementUnifiedWithConclusion;
                var statementUnified = this.conclusion.unifyStatement(statement, substitutions, generalContext, specificContext);
                statementUnifiedWithConclusion = statementUnified; ///
                return statementUnifiedWithConclusion;
            }
        },
        {
            key: "unifyProofStepsWithPremises",
            value: function unifyProofStepsWithPremises(proofSteps, substitutions, generalContext, specificContext) {
                var _this = this;
                proofSteps = reverse(proofSteps); ///
                var proofStepsUnifiedWithPremises = backwardsEvery(this.premises, function(premise) {
                    var proofStepUnifiedWithPremise = _this.unifyProofStepsWithPremise(proofSteps, premise, substitutions, generalContext, specificContext);
                    if (proofStepUnifiedWithPremise) {
                        return true;
                    }
                });
                return proofStepsUnifiedWithPremises;
            }
        },
        {
            key: "unifyProofStepsWithPremise",
            value: function unifyProofStepsWithPremise(proofSteps, premise, substitutions, generalContext, specificContext) {
                var proofStepsUnifiedWithPremise = false;
                var premiseUnifiedIndependently = premise.unifyIndependently(substitutions, generalContext, specificContext);
                if (premiseUnifiedIndependently) {
                    proofStepsUnifiedWithPremise = true;
                } else {
                    var proofStep = extract(proofSteps, function(proofStep) {
                        var proofStepUnified = premise.unifyProofStep(proofStep, substitutions, generalContext, specificContext);
                        if (proofStepUnified) {
                            return true;
                        }
                    }) || null;
                    if (proofStep !== null) {
                        proofStepsUnifiedWithPremise = true;
                    }
                }
                return proofStepsUnifiedWithPremise;
            }
        },
        {
            key: "verify",
            value: function verify() {
                var verified = false;
                var ruleString = this.string; ///
                this.fileContext.trace("Verifying the '".concat(ruleString, "' rule..."));
                var labelsVerified = this.verifyLabels();
                if (labelsVerified) {
                    var context = _local.default.fromFileContext(this.fileContext), premisesVerified = this.premises.every(function(premise) {
                        var premiseVerified = premise.verify(context);
                        if (premiseVerified) {
                            return true;
                        }
                    });
                    if (premisesVerified) {
                        var conclusionVerified = this.conclusion.verify(context);
                        if (conclusionVerified) {
                            var proofVerified = true; ///
                            if (this.proof !== null) {
                                var substitutions = _substitutions.default.fromNothing();
                                proofVerified = this.proof.verify(substitutions, this.conclusion, context);
                            }
                            if (proofVerified) {
                                var rule = this; ///
                                this.fileContext.addRule(rule);
                                verified = true;
                            }
                        }
                    }
                }
                if (verified) {
                    this.fileContext.debug("...verified the '".concat(ruleString, "' rule."));
                }
                return verified;
            }
        },
        {
            key: "verifyLabels",
            value: function verifyLabels() {
                var _this = this;
                var labelsVerified = this.labels.every(function(label) {
                    var nameOnly = true, labelVVerifiedWhenDeclared = label.verifyWhenDeclared(_this.fileContext, nameOnly);
                    if (labelVVerifiedWhenDeclared) {
                        return true;
                    }
                });
                return labelsVerified;
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
                var proof = null, labels = (0, _json.labelsFromJSON)(json, fileContext), premises = (0, _json.premisesFromJSON)(json, fileContext), conclusion = (0, _json.conclusionFromJSON)(json, fileContext), string = (0, _topLevelAssertion.stringFromLabels)(labels);
                rule = new Rule(fileContext, string, labels, premises, conclusion, proof);
                return rule;
            }
        },
        {
            key: "fromRuleNode",
            value: function fromRuleNode(ruleNode, fileContext) {
                var Label = _dom.default.Label, Proof = _dom.default.Proof, Premise = _dom.default.Premise, Conclusion = _dom.default.Conclusion, proofNode = proofNodeQuery(ruleNode), labelNodes = labelNodesQuery(ruleNode), premiseNodes = premiseNodesQuery(ruleNode), conclusionNode = conclusionNodeQuery(ruleNode), labels = labelNodes.map(function(labelNode) {
                    var label = Label.fromLabelNode(labelNode, fileContext);
                    return label;
                }), premises = premiseNodes.map(function(premiseNode) {
                    var premise = Premise.fromPremiseNode(premiseNode, fileContext);
                    return premise;
                }), conclusion = Conclusion.fromConclusionNode(conclusionNode, fileContext), string = (0, _topLevelAssertion.stringFromLabels)(labels), proof = Proof.fromProofNode(proofNode, fileContext), rule = new Rule(fileContext, string, labels, premises, conclusion, proof);
                return rule;
            }
        }
    ]);
    return Rule;
}(), _define_property(_Rule, "name", "Rule"), _Rule));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kb20vcnVsZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgYXJyYXlVdGlsaXRpZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5cbmltcG9ydCBkb20gZnJvbSBcIi4uL2RvbVwiO1xuaW1wb3J0IExvY2FsQ29udGV4dCBmcm9tIFwiLi4vY29udGV4dC9sb2NhbFwiO1xuaW1wb3J0IFN1YnN0aXR1dGlvbnMgZnJvbSBcIi4uL3N1YnN0aXR1dGlvbnNcIjtcblxuaW1wb3J0IHsgZG9tQXNzaWduZWQgfSBmcm9tIFwiLi4vZG9tXCI7XG5pbXBvcnQgeyBzdHJpbmdGcm9tTGFiZWxzIH0gZnJvbSBcIi4vdG9wTGV2ZWxBc3NlcnRpb25cIjtcbmltcG9ydCB7IG5vZGVRdWVyeSwgbm9kZXNRdWVyeSB9IGZyb20gXCIuLi91dGlsaXRpZXMvcXVlcnlcIjtcbmltcG9ydCB7IGxhYmVsc0Zyb21KU09OLFxuICAgICAgICAgcHJlbWlzZXNGcm9tSlNPTixcbiAgICAgICAgIGNvbmNsdXNpb25Gcm9tSlNPTixcbiAgICAgICAgIGxhYmVsc1RvTGFiZWxzSlNPTixcbiAgICAgICAgIHByZW1pc2VzVG9QcmVtaXNlc0pTT04sXG4gICAgICAgICBjb25jbHVzaW9uVG9Db25jbHVzaW9uSlNPTiB9IGZyb20gXCIuLi91dGlsaXRpZXMvanNvblwiO1xuXG5jb25zdCB7IHJldmVyc2UsIGV4dHJhY3QsIGJhY2t3YXJkc0V2ZXJ5IH0gPSBhcnJheVV0aWxpdGllcztcblxuY29uc3QgcHJvb2ZOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvcnVsZS9wcm9vZlwiKSxcbiAgICAgIGxhYmVsTm9kZXNRdWVyeSA9IG5vZGVzUXVlcnkoXCIvcnVsZS9sYWJlbHMvbGFiZWxcIiksXG4gICAgICBwcmVtaXNlTm9kZXNRdWVyeSA9IG5vZGVzUXVlcnkoXCIvcnVsZS9wcmVtaXNlXCIpLFxuICAgICAgY29uY2x1c2lvbk5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9ydWxlL2NvbmNsdXNpb25cIik7XG5cbmV4cG9ydCBkZWZhdWx0IGRvbUFzc2lnbmVkKGNsYXNzIFJ1bGUge1xuICBjb25zdHJ1Y3RvcihmaWxlQ29udGV4dCwgc3RyaW5nLCBsYWJlbHMsIHByZW1pc2VzLCBjb25jbHVzaW9uLCBwcm9vZikge1xuICAgIHRoaXMuZmlsZUNvbnRleHQgPSBmaWxlQ29udGV4dDtcbiAgICB0aGlzLnN0cmluZyA9IHN0cmluZztcbiAgICB0aGlzLmxhYmVscyA9IGxhYmVscztcbiAgICB0aGlzLnByZW1pc2VzID0gcHJlbWlzZXM7XG4gICAgdGhpcy5jb25jbHVzaW9uID0gY29uY2x1c2lvbjtcbiAgICB0aGlzLnByb29mID0gcHJvb2Y7XG4gIH1cblxuICBnZXRGaWxlQ29udGV4dCgpIHtcbiAgICByZXR1cm4gdGhpcy5maWxlQ29udGV4dDtcbiAgfVxuXG4gIGdldFN0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5zdHJpbmc7XG4gIH1cblxuICBnZXRMYWJlbHMoKSB7XG4gICAgcmV0dXJuIHRoaXMubGFiZWxzO1xuICB9XG5cbiAgZ2V0UHJlbWlzZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMucHJlbWlzZXM7XG4gIH1cblxuICBnZXRDb25jbHVzaW9uKCkge1xuICAgIHJldHVybiB0aGlzLmNvbmNsdXNpb247XG4gIH1cblxuICBnZXRQcm9vZigpIHtcbiAgICByZXR1cm4gdGhpcy5wcm9vZjtcbiAgfVxuXG4gIG1hdGNoU3RhdGVtZW50Tm9kZShzdGF0ZW1lbnROb2RlKSB7IHJldHVybiB0aGlzLmNvbmNsdXNpb24ubWF0Y2hTdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUpOyB9XG5cbiAgbWF0Y2hNZXRhdmFyaWFibGVOYW1lKG1ldGF2YXJpYWJsZU5hbWUpIHtcbiAgICBjb25zdCBtZXRhdmFyaWFibGVOYW1lTWF0Y2hlcyA9IHRoaXMubGFiZWxzLnNvbWUoKGxhYmVsKSA9PiB7XG4gICAgICBjb25zdCBtZXRhdmFyaWFibGVOYW1lTWF0Y2hlcyA9IGxhYmVsLm1hdGNoTWV0YXZhcmlhYmxlTmFtZShtZXRhdmFyaWFibGVOYW1lKTtcblxuICAgICAgaWYgKG1ldGF2YXJpYWJsZU5hbWVNYXRjaGVzKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIG1ldGF2YXJpYWJsZU5hbWVNYXRjaGVzO1xuICB9XG5cbiAgdW5pZnlTdGF0ZW1lbnRBbmRQcm9vZlN0ZXBzKHN0YXRlbWVudCwgcHJvb2ZTdGVwcywgY29udGV4dCkge1xuICAgIGxldCBzdGF0ZW1lbnRBbmRQcm9vZlN0ZXBzVW5pZmllZCA9IGZhbHNlO1xuXG4gICAgY29uc3QgbG9jYWxDb250ZXh0ID0gTG9jYWxDb250ZXh0LmZyb21GaWxlQ29udGV4dCh0aGlzLmZpbGVDb250ZXh0KSxcbiAgICAgICAgICBnZW5lcmFsQ29udGV4dCA9IGxvY2FsQ29udGV4dCwgLy8vXG4gICAgICAgICAgc3BlY2lmaWNDb250ZXh0ID0gY29udGV4dDsgLy8vXG5cbiAgICBjb25zdCBzdWJzdGl0dXRpb25zID0gU3Vic3RpdHV0aW9ucy5mcm9tTm90aGluZygpLFxuICAgICAgICAgIHN0YXRlbWVudFVuaWZpZWRXaXRoQ29uY2x1c2lvbiA9IHRoaXMudW5pZnlTdGF0ZW1lbnRXaXRoQ29uY2x1c2lvbihzdGF0ZW1lbnQsIHN1YnN0aXR1dGlvbnMsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgaWYgKHN0YXRlbWVudFVuaWZpZWRXaXRoQ29uY2x1c2lvbikge1xuICAgICAgY29uc3QgcHJvb2ZTdGVwc1VuaWZpZWRXaXRoUHJlbWlzZXMgPSB0aGlzLnVuaWZ5UHJvb2ZTdGVwc1dpdGhQcmVtaXNlcyhwcm9vZlN0ZXBzLCBzdWJzdGl0dXRpb25zLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgICAgaWYgKHByb29mU3RlcHNVbmlmaWVkV2l0aFByZW1pc2VzKSB7XG4gICAgICAgIGNvbnN0IHN1YnN0aXR1dGlvbnNSZXNvbHZlZCA9IHN1YnN0aXR1dGlvbnMuYXJlUmVzb2x2ZWQoKTtcblxuICAgICAgICBzdGF0ZW1lbnRBbmRQcm9vZlN0ZXBzVW5pZmllZCA9IHN1YnN0aXR1dGlvbnNSZXNvbHZlZDsgLy8vXG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHN0YXRlbWVudEFuZFByb29mU3RlcHNVbmlmaWVkO1xuICB9XG5cbiAgdW5pZnlTdGF0ZW1lbnRXaXRoQ29uY2x1c2lvbihzdGF0ZW1lbnQsIHN1YnN0aXR1dGlvbnMsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpIHtcbiAgICBsZXQgc3RhdGVtZW50VW5pZmllZFdpdGhDb25jbHVzaW9uO1xuXG4gICAgY29uc3Qgc3RhdGVtZW50VW5pZmllZCA9IHRoaXMuY29uY2x1c2lvbi51bmlmeVN0YXRlbWVudChzdGF0ZW1lbnQsIHN1YnN0aXR1dGlvbnMsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgc3RhdGVtZW50VW5pZmllZFdpdGhDb25jbHVzaW9uID0gc3RhdGVtZW50VW5pZmllZDsgLy8vXG5cbiAgICByZXR1cm4gc3RhdGVtZW50VW5pZmllZFdpdGhDb25jbHVzaW9uO1xuICB9XG5cbiAgdW5pZnlQcm9vZlN0ZXBzV2l0aFByZW1pc2VzKHByb29mU3RlcHMsIHN1YnN0aXR1dGlvbnMsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpIHtcbiAgICBwcm9vZlN0ZXBzID0gcmV2ZXJzZShwcm9vZlN0ZXBzKTsgLy8vXG5cbiAgICBjb25zdCBwcm9vZlN0ZXBzVW5pZmllZFdpdGhQcmVtaXNlcyA9IGJhY2t3YXJkc0V2ZXJ5KHRoaXMucHJlbWlzZXMsIChwcmVtaXNlKSA9PiB7XG4gICAgICBjb25zdCBwcm9vZlN0ZXBVbmlmaWVkV2l0aFByZW1pc2UgPSB0aGlzLnVuaWZ5UHJvb2ZTdGVwc1dpdGhQcmVtaXNlKHByb29mU3RlcHMsIHByZW1pc2UsIHN1YnN0aXR1dGlvbnMsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgICBpZiAocHJvb2ZTdGVwVW5pZmllZFdpdGhQcmVtaXNlKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHByb29mU3RlcHNVbmlmaWVkV2l0aFByZW1pc2VzO1xuICB9XG5cbiAgdW5pZnlQcm9vZlN0ZXBzV2l0aFByZW1pc2UocHJvb2ZTdGVwcywgcHJlbWlzZSwgc3Vic3RpdHV0aW9ucywgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCkge1xuICAgIGxldCBwcm9vZlN0ZXBzVW5pZmllZFdpdGhQcmVtaXNlICA9ZmFsc2U7XG5cbiAgICBjb25zdCBwcmVtaXNlVW5pZmllZEluZGVwZW5kZW50bHkgPSBwcmVtaXNlLnVuaWZ5SW5kZXBlbmRlbnRseShzdWJzdGl0dXRpb25zLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgIGlmIChwcmVtaXNlVW5pZmllZEluZGVwZW5kZW50bHkpIHtcbiAgICAgIHByb29mU3RlcHNVbmlmaWVkV2l0aFByZW1pc2UgPSB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBwcm9vZlN0ZXAgPSBleHRyYWN0KHByb29mU3RlcHMsIChwcm9vZlN0ZXApID0+IHtcbiAgICAgICAgY29uc3QgcHJvb2ZTdGVwVW5pZmllZCA9IHByZW1pc2UudW5pZnlQcm9vZlN0ZXAocHJvb2ZTdGVwLCBzdWJzdGl0dXRpb25zLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgICAgICBpZiAocHJvb2ZTdGVwVW5pZmllZCkge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICB9KSB8fCBudWxsO1xuXG4gICAgICBpZiAocHJvb2ZTdGVwICE9PSBudWxsKSB7XG4gICAgICAgIHByb29mU3RlcHNVbmlmaWVkV2l0aFByZW1pc2UgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBwcm9vZlN0ZXBzVW5pZmllZFdpdGhQcmVtaXNlO1xuICB9XG5cbiAgdmVyaWZ5KCkge1xuICAgIGxldCB2ZXJpZmllZCA9IGZhbHNlO1xuXG4gICAgY29uc3QgcnVsZVN0cmluZyA9IHRoaXMuc3RyaW5nOyAvLy9cblxuICAgIHRoaXMuZmlsZUNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7cnVsZVN0cmluZ30nIHJ1bGUuLi5gKTtcblxuICAgIGNvbnN0IGxhYmVsc1ZlcmlmaWVkID0gdGhpcy52ZXJpZnlMYWJlbHMoKTtcblxuICAgIGlmIChsYWJlbHNWZXJpZmllZCkge1xuICAgICAgY29uc3QgY29udGV4dCA9IExvY2FsQ29udGV4dC5mcm9tRmlsZUNvbnRleHQodGhpcy5maWxlQ29udGV4dCksXG4gICAgICAgICAgICBwcmVtaXNlc1ZlcmlmaWVkID0gdGhpcy5wcmVtaXNlcy5ldmVyeSgocHJlbWlzZSkgPT4ge1xuICAgICAgICAgICAgICBjb25zdCBwcmVtaXNlVmVyaWZpZWQgPSBwcmVtaXNlLnZlcmlmeShjb250ZXh0KTtcblxuICAgICAgICAgICAgICBpZiAocHJlbWlzZVZlcmlmaWVkKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICBpZiAocHJlbWlzZXNWZXJpZmllZCkge1xuICAgICAgICBjb25zdCBjb25jbHVzaW9uVmVyaWZpZWQgPSB0aGlzLmNvbmNsdXNpb24udmVyaWZ5KGNvbnRleHQpO1xuXG4gICAgICAgIGlmIChjb25jbHVzaW9uVmVyaWZpZWQpIHtcbiAgICAgICAgICBsZXQgcHJvb2ZWZXJpZmllZCA9IHRydWU7IC8vL1xuXG4gICAgICAgICAgaWYgKHRoaXMucHJvb2YgIT09IG51bGwpIHtcbiAgICAgICAgICAgIGNvbnN0IHN1YnN0aXR1dGlvbnMgPSBTdWJzdGl0dXRpb25zLmZyb21Ob3RoaW5nKCk7XG5cbiAgICAgICAgICAgIHByb29mVmVyaWZpZWQgPSB0aGlzLnByb29mLnZlcmlmeShzdWJzdGl0dXRpb25zLCB0aGlzLmNvbmNsdXNpb24sIGNvbnRleHQpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChwcm9vZlZlcmlmaWVkKSB7XG4gICAgICAgICAgICBjb25zdCBydWxlID0gdGhpczsgIC8vL1xuXG4gICAgICAgICAgICB0aGlzLmZpbGVDb250ZXh0LmFkZFJ1bGUocnVsZSk7XG5cbiAgICAgICAgICAgIHZlcmlmaWVkID0gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodmVyaWZpZWQpIHtcbiAgICAgIHRoaXMuZmlsZUNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHtydWxlU3RyaW5nfScgcnVsZS5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmVyaWZpZWQ7XG4gIH1cblxuICB2ZXJpZnlMYWJlbHMoKSB7XG4gICAgY29uc3QgbGFiZWxzVmVyaWZpZWQgPSB0aGlzLmxhYmVscy5ldmVyeSgobGFiZWwpID0+IHtcbiAgICAgIGNvbnN0IG5hbWVPbmx5ID0gdHJ1ZSxcbiAgICAgICAgICAgIGxhYmVsVlZlcmlmaWVkV2hlbkRlY2xhcmVkID0gbGFiZWwudmVyaWZ5V2hlbkRlY2xhcmVkKHRoaXMuZmlsZUNvbnRleHQsIG5hbWVPbmx5KTtcblxuICAgICAgaWYgKGxhYmVsVlZlcmlmaWVkV2hlbkRlY2xhcmVkKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIGxhYmVsc1ZlcmlmaWVkO1xuICB9XG5cbiAgdG9KU09OKCkge1xuICAgIGNvbnN0IGxhYmVsc0pTT04gPSBsYWJlbHNUb0xhYmVsc0pTT04odGhpcy5sYWJlbHMpLFxuICAgICAgICAgIHByZW1pc2VzSlNPTiA9IHByZW1pc2VzVG9QcmVtaXNlc0pTT04odGhpcy5wcmVtaXNlcyksXG4gICAgICAgICAgY29uY2x1c2lvbkpTT04gPSBjb25jbHVzaW9uVG9Db25jbHVzaW9uSlNPTih0aGlzLmNvbmNsdXNpb24pLFxuICAgICAgICAgIGxhYmVscyA9IGxhYmVsc0pTT04sICAvLy9cbiAgICAgICAgICBwcmVtaXNlcyA9IHByZW1pc2VzSlNPTiwgIC8vL1xuICAgICAgICAgIGNvbmNsdXNpb24gPSBjb25jbHVzaW9uSlNPTiwgIC8vL1xuICAgICAgICAgIGpzb24gPSB7XG4gICAgICAgICAgICBsYWJlbHMsXG4gICAgICAgICAgICBwcmVtaXNlcyxcbiAgICAgICAgICAgIGNvbmNsdXNpb25cbiAgICAgICAgICB9O1xuXG4gICAgcmV0dXJuIGpzb247XG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiUnVsZVwiO1xuXG4gIHN0YXRpYyBmcm9tSlNPTihqc29uLCBmaWxlQ29udGV4dCkge1xuICAgIGxldCBydWxlO1xuXG4gICAgY29uc3QgcHJvb2YgPSBudWxsLFxuICAgICAgICAgIGxhYmVscyA9IGxhYmVsc0Zyb21KU09OKGpzb24sIGZpbGVDb250ZXh0KSxcbiAgICAgICAgICBwcmVtaXNlcyA9IHByZW1pc2VzRnJvbUpTT04oanNvbiwgZmlsZUNvbnRleHQpLFxuICAgICAgICAgIGNvbmNsdXNpb24gPSBjb25jbHVzaW9uRnJvbUpTT04oanNvbiwgZmlsZUNvbnRleHQpLFxuICAgICAgICAgIHN0cmluZyA9IHN0cmluZ0Zyb21MYWJlbHMobGFiZWxzKTtcblxuICAgIHJ1bGUgPSBuZXcgUnVsZShmaWxlQ29udGV4dCwgc3RyaW5nLCBsYWJlbHMsIHByZW1pc2VzLCBjb25jbHVzaW9uLCBwcm9vZik7XG5cbiAgICByZXR1cm4gcnVsZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUnVsZU5vZGUocnVsZU5vZGUsIGZpbGVDb250ZXh0KSB7XG4gICAgY29uc3QgeyBMYWJlbCwgUHJvb2YsIFByZW1pc2UsIENvbmNsdXNpb24gfSA9IGRvbSxcbiAgICAgICAgICBwcm9vZk5vZGUgPSBwcm9vZk5vZGVRdWVyeShydWxlTm9kZSksXG4gICAgICAgICAgbGFiZWxOb2RlcyA9IGxhYmVsTm9kZXNRdWVyeShydWxlTm9kZSksXG4gICAgICAgICAgcHJlbWlzZU5vZGVzID0gcHJlbWlzZU5vZGVzUXVlcnkocnVsZU5vZGUpLFxuICAgICAgICAgIGNvbmNsdXNpb25Ob2RlID0gY29uY2x1c2lvbk5vZGVRdWVyeShydWxlTm9kZSksXG4gICAgICAgICAgbGFiZWxzID0gbGFiZWxOb2Rlcy5tYXAoKGxhYmVsTm9kZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgbGFiZWwgPSBMYWJlbC5mcm9tTGFiZWxOb2RlKGxhYmVsTm9kZSwgZmlsZUNvbnRleHQpO1xuXG4gICAgICAgICAgICByZXR1cm4gbGFiZWw7XG4gICAgICAgICAgfSksXG4gICAgICAgICAgcHJlbWlzZXMgPSBwcmVtaXNlTm9kZXMubWFwKChwcmVtaXNlTm9kZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgcHJlbWlzZSA9IFByZW1pc2UuZnJvbVByZW1pc2VOb2RlKHByZW1pc2VOb2RlLCBmaWxlQ29udGV4dCk7XG5cbiAgICAgICAgICAgIHJldHVybiBwcmVtaXNlO1xuICAgICAgICAgIH0pLFxuICAgICAgICAgIGNvbmNsdXNpb24gPSBDb25jbHVzaW9uLmZyb21Db25jbHVzaW9uTm9kZShjb25jbHVzaW9uTm9kZSwgZmlsZUNvbnRleHQpLFxuICAgICAgICAgIHN0cmluZyA9IHN0cmluZ0Zyb21MYWJlbHMobGFiZWxzKSxcbiAgICAgICAgICBwcm9vZiA9IFByb29mLmZyb21Qcm9vZk5vZGUocHJvb2ZOb2RlLCBmaWxlQ29udGV4dCksXG4gICAgICAgICAgcnVsZSA9IG5ldyBSdWxlKGZpbGVDb250ZXh0LCBzdHJpbmcsIGxhYmVscywgcHJlbWlzZXMsIGNvbmNsdXNpb24sIHByb29mKTtcblxuICAgIHJldHVybiBydWxlO1xuICB9XG59KTtcbiJdLCJuYW1lcyI6WyJyZXZlcnNlIiwiYXJyYXlVdGlsaXRpZXMiLCJleHRyYWN0IiwiYmFja3dhcmRzRXZlcnkiLCJwcm9vZk5vZGVRdWVyeSIsIm5vZGVRdWVyeSIsImxhYmVsTm9kZXNRdWVyeSIsIm5vZGVzUXVlcnkiLCJwcmVtaXNlTm9kZXNRdWVyeSIsImNvbmNsdXNpb25Ob2RlUXVlcnkiLCJkb21Bc3NpZ25lZCIsIlJ1bGUiLCJmaWxlQ29udGV4dCIsInN0cmluZyIsImxhYmVscyIsInByZW1pc2VzIiwiY29uY2x1c2lvbiIsInByb29mIiwiZ2V0RmlsZUNvbnRleHQiLCJnZXRTdHJpbmciLCJnZXRMYWJlbHMiLCJnZXRQcmVtaXNlcyIsImdldENvbmNsdXNpb24iLCJnZXRQcm9vZiIsIm1hdGNoU3RhdGVtZW50Tm9kZSIsInN0YXRlbWVudE5vZGUiLCJtYXRjaE1ldGF2YXJpYWJsZU5hbWUiLCJtZXRhdmFyaWFibGVOYW1lIiwibWV0YXZhcmlhYmxlTmFtZU1hdGNoZXMiLCJzb21lIiwibGFiZWwiLCJ1bmlmeVN0YXRlbWVudEFuZFByb29mU3RlcHMiLCJzdGF0ZW1lbnQiLCJwcm9vZlN0ZXBzIiwiY29udGV4dCIsInN0YXRlbWVudEFuZFByb29mU3RlcHNVbmlmaWVkIiwibG9jYWxDb250ZXh0IiwiTG9jYWxDb250ZXh0IiwiZnJvbUZpbGVDb250ZXh0IiwiZ2VuZXJhbENvbnRleHQiLCJzcGVjaWZpY0NvbnRleHQiLCJzdWJzdGl0dXRpb25zIiwiU3Vic3RpdHV0aW9ucyIsImZyb21Ob3RoaW5nIiwic3RhdGVtZW50VW5pZmllZFdpdGhDb25jbHVzaW9uIiwidW5pZnlTdGF0ZW1lbnRXaXRoQ29uY2x1c2lvbiIsInByb29mU3RlcHNVbmlmaWVkV2l0aFByZW1pc2VzIiwidW5pZnlQcm9vZlN0ZXBzV2l0aFByZW1pc2VzIiwic3Vic3RpdHV0aW9uc1Jlc29sdmVkIiwiYXJlUmVzb2x2ZWQiLCJzdGF0ZW1lbnRVbmlmaWVkIiwidW5pZnlTdGF0ZW1lbnQiLCJwcmVtaXNlIiwicHJvb2ZTdGVwVW5pZmllZFdpdGhQcmVtaXNlIiwidW5pZnlQcm9vZlN0ZXBzV2l0aFByZW1pc2UiLCJwcm9vZlN0ZXBzVW5pZmllZFdpdGhQcmVtaXNlIiwicHJlbWlzZVVuaWZpZWRJbmRlcGVuZGVudGx5IiwidW5pZnlJbmRlcGVuZGVudGx5IiwicHJvb2ZTdGVwIiwicHJvb2ZTdGVwVW5pZmllZCIsInVuaWZ5UHJvb2ZTdGVwIiwidmVyaWZ5IiwidmVyaWZpZWQiLCJydWxlU3RyaW5nIiwidHJhY2UiLCJsYWJlbHNWZXJpZmllZCIsInZlcmlmeUxhYmVscyIsInByZW1pc2VzVmVyaWZpZWQiLCJldmVyeSIsInByZW1pc2VWZXJpZmllZCIsImNvbmNsdXNpb25WZXJpZmllZCIsInByb29mVmVyaWZpZWQiLCJydWxlIiwiYWRkUnVsZSIsImRlYnVnIiwibmFtZU9ubHkiLCJsYWJlbFZWZXJpZmllZFdoZW5EZWNsYXJlZCIsInZlcmlmeVdoZW5EZWNsYXJlZCIsInRvSlNPTiIsImxhYmVsc0pTT04iLCJsYWJlbHNUb0xhYmVsc0pTT04iLCJwcmVtaXNlc0pTT04iLCJwcmVtaXNlc1RvUHJlbWlzZXNKU09OIiwiY29uY2x1c2lvbkpTT04iLCJjb25jbHVzaW9uVG9Db25jbHVzaW9uSlNPTiIsImpzb24iLCJmcm9tSlNPTiIsImxhYmVsc0Zyb21KU09OIiwicHJlbWlzZXNGcm9tSlNPTiIsImNvbmNsdXNpb25Gcm9tSlNPTiIsInN0cmluZ0Zyb21MYWJlbHMiLCJmcm9tUnVsZU5vZGUiLCJydWxlTm9kZSIsIkxhYmVsIiwiZG9tIiwiUHJvb2YiLCJQcmVtaXNlIiwiQ29uY2x1c2lvbiIsInByb29mTm9kZSIsImxhYmVsTm9kZXMiLCJwcmVtaXNlTm9kZXMiLCJjb25jbHVzaW9uTm9kZSIsIm1hcCIsImxhYmVsTm9kZSIsImZyb21MYWJlbE5vZGUiLCJwcmVtaXNlTm9kZSIsImZyb21QcmVtaXNlTm9kZSIsImZyb21Db25jbHVzaW9uTm9kZSIsImZyb21Qcm9vZk5vZGUiLCJuYW1lIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkF5QkE7OztlQUFBOzs7eUJBdkIrQjsyREFFZjs0REFDUztvRUFDQztpQ0FHTztxQkFDSztvQkFNSzs7Ozs7Ozs7Ozs7Ozs7Ozs7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