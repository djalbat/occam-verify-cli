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
            key: "unifyStatementAndProofStepSubproofs",
            value: function unifyStatementAndProofStepSubproofs(statement, proofStepSubproofs, context) {
                var statementAndProofStepSubproofsUnified = false;
                var localContext = _local.default.fromFileContext(this.fileContext), generalContext = localContext, specificContext = context; ///
                var substitutions = _substitutions.default.fromNothing(), statementUnifiedWithConclusion = this.unifyStatementWithConclusion(statement, substitutions, generalContext, specificContext);
                if (statementUnifiedWithConclusion) {
                    var proofStepSubproofsUnifiedWithPremises = this.unifyProofStepSubproofsWithPremises(proofStepSubproofs, substitutions, generalContext, specificContext);
                    if (proofStepSubproofsUnifiedWithPremises) {
                        var substitutionsResolved = substitutions.areResolved();
                        statementAndProofStepSubproofsUnified = substitutionsResolved; ///
                    }
                }
                return statementAndProofStepSubproofsUnified;
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
            key: "unifyProofStepSubproofsWithPremises",
            value: function unifyProofStepSubproofsWithPremises(proofStepSubproofs, substitutions, generalContext, specificContext) {
                var _this = this;
                proofStepSubproofs = reverse(proofStepSubproofs); ///
                var proofStepSubproofsUnifiedWithPremises = backwardsEvery(this.premises, function(premise) {
                    var proofStepUnifiedWithPremise = _this.unifyProofStepSubproofsWithPremise(proofStepSubproofs, premise, substitutions, generalContext, specificContext);
                    if (proofStepUnifiedWithPremise) {
                        return true;
                    }
                });
                return proofStepSubproofsUnifiedWithPremises;
            }
        },
        {
            key: "unifyProofStepSubproofsWithPremise",
            value: function unifyProofStepSubproofsWithPremise(proofStepSubproofs, premise, substitutions, generalContext, specificContext) {
                var proofStepSubproofsUnifiedWithPremise = false;
                var premiseUnifiedIndependently = premise.unifyIndependently(substitutions, generalContext, specificContext);
                if (premiseUnifiedIndependently) {
                    proofStepSubproofsUnifiedWithPremise = true;
                } else {
                    var proofStep = extract(proofStepSubproofs, function(proofStepSubproof) {
                        var proofStepSubproofUnified = premise.unifyProofStepSubproof(proofStepSubproof, substitutions, generalContext, specificContext);
                        if (proofStepSubproofUnified) {
                            return true;
                        }
                    }) || null;
                    if (proofStep !== null) {
                        proofStepSubproofsUnifiedWithPremise = true;
                    }
                }
                return proofStepSubproofsUnifiedWithPremise;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kb20vcnVsZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgYXJyYXlVdGlsaXRpZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5cbmltcG9ydCBkb20gZnJvbSBcIi4uL2RvbVwiO1xuaW1wb3J0IExvY2FsQ29udGV4dCBmcm9tIFwiLi4vY29udGV4dC9sb2NhbFwiO1xuaW1wb3J0IFN1YnN0aXR1dGlvbnMgZnJvbSBcIi4uL3N1YnN0aXR1dGlvbnNcIjtcblxuaW1wb3J0IHsgZG9tQXNzaWduZWQgfSBmcm9tIFwiLi4vZG9tXCI7XG5pbXBvcnQgeyBzdHJpbmdGcm9tTGFiZWxzIH0gZnJvbSBcIi4vdG9wTGV2ZWxBc3NlcnRpb25cIjtcbmltcG9ydCB7IG5vZGVRdWVyeSwgbm9kZXNRdWVyeSB9IGZyb20gXCIuLi91dGlsaXRpZXMvcXVlcnlcIjtcbmltcG9ydCB7IGxhYmVsc0Zyb21KU09OLFxuICAgICAgICAgcHJlbWlzZXNGcm9tSlNPTixcbiAgICAgICAgIGNvbmNsdXNpb25Gcm9tSlNPTixcbiAgICAgICAgIGxhYmVsc1RvTGFiZWxzSlNPTixcbiAgICAgICAgIHByZW1pc2VzVG9QcmVtaXNlc0pTT04sXG4gICAgICAgICBjb25jbHVzaW9uVG9Db25jbHVzaW9uSlNPTiB9IGZyb20gXCIuLi91dGlsaXRpZXMvanNvblwiO1xuXG5jb25zdCB7IHJldmVyc2UsIGV4dHJhY3QsIGJhY2t3YXJkc0V2ZXJ5IH0gPSBhcnJheVV0aWxpdGllcztcblxuY29uc3QgcHJvb2ZOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvcnVsZS9wcm9vZlwiKSxcbiAgICAgIGxhYmVsTm9kZXNRdWVyeSA9IG5vZGVzUXVlcnkoXCIvcnVsZS9sYWJlbHMvbGFiZWxcIiksXG4gICAgICBwcmVtaXNlTm9kZXNRdWVyeSA9IG5vZGVzUXVlcnkoXCIvcnVsZS9wcmVtaXNlXCIpLFxuICAgICAgY29uY2x1c2lvbk5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9ydWxlL2NvbmNsdXNpb25cIik7XG5cbmV4cG9ydCBkZWZhdWx0IGRvbUFzc2lnbmVkKGNsYXNzIFJ1bGUge1xuICBjb25zdHJ1Y3RvcihmaWxlQ29udGV4dCwgc3RyaW5nLCBsYWJlbHMsIHByZW1pc2VzLCBjb25jbHVzaW9uLCBwcm9vZikge1xuICAgIHRoaXMuZmlsZUNvbnRleHQgPSBmaWxlQ29udGV4dDtcbiAgICB0aGlzLnN0cmluZyA9IHN0cmluZztcbiAgICB0aGlzLmxhYmVscyA9IGxhYmVscztcbiAgICB0aGlzLnByZW1pc2VzID0gcHJlbWlzZXM7XG4gICAgdGhpcy5jb25jbHVzaW9uID0gY29uY2x1c2lvbjtcbiAgICB0aGlzLnByb29mID0gcHJvb2Y7XG4gIH1cblxuICBnZXRGaWxlQ29udGV4dCgpIHtcbiAgICByZXR1cm4gdGhpcy5maWxlQ29udGV4dDtcbiAgfVxuXG4gIGdldFN0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5zdHJpbmc7XG4gIH1cblxuICBnZXRMYWJlbHMoKSB7XG4gICAgcmV0dXJuIHRoaXMubGFiZWxzO1xuICB9XG5cbiAgZ2V0UHJlbWlzZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMucHJlbWlzZXM7XG4gIH1cblxuICBnZXRDb25jbHVzaW9uKCkge1xuICAgIHJldHVybiB0aGlzLmNvbmNsdXNpb247XG4gIH1cblxuICBnZXRQcm9vZigpIHtcbiAgICByZXR1cm4gdGhpcy5wcm9vZjtcbiAgfVxuXG4gIG1hdGNoU3RhdGVtZW50Tm9kZShzdGF0ZW1lbnROb2RlKSB7IHJldHVybiB0aGlzLmNvbmNsdXNpb24ubWF0Y2hTdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUpOyB9XG5cbiAgbWF0Y2hNZXRhdmFyaWFibGVOYW1lKG1ldGF2YXJpYWJsZU5hbWUpIHtcbiAgICBjb25zdCBtZXRhdmFyaWFibGVOYW1lTWF0Y2hlcyA9IHRoaXMubGFiZWxzLnNvbWUoKGxhYmVsKSA9PiB7XG4gICAgICBjb25zdCBtZXRhdmFyaWFibGVOYW1lTWF0Y2hlcyA9IGxhYmVsLm1hdGNoTWV0YXZhcmlhYmxlTmFtZShtZXRhdmFyaWFibGVOYW1lKTtcblxuICAgICAgaWYgKG1ldGF2YXJpYWJsZU5hbWVNYXRjaGVzKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIG1ldGF2YXJpYWJsZU5hbWVNYXRjaGVzO1xuICB9XG5cbiAgdW5pZnlTdGF0ZW1lbnRBbmRQcm9vZlN0ZXBTdWJwcm9vZnMoc3RhdGVtZW50LCBwcm9vZlN0ZXBTdWJwcm9vZnMsIGNvbnRleHQpIHtcbiAgICBsZXQgc3RhdGVtZW50QW5kUHJvb2ZTdGVwU3VicHJvb2ZzVW5pZmllZCA9IGZhbHNlO1xuXG4gICAgY29uc3QgbG9jYWxDb250ZXh0ID0gTG9jYWxDb250ZXh0LmZyb21GaWxlQ29udGV4dCh0aGlzLmZpbGVDb250ZXh0KSxcbiAgICAgICAgICBnZW5lcmFsQ29udGV4dCA9IGxvY2FsQ29udGV4dCwgLy8vXG4gICAgICAgICAgc3BlY2lmaWNDb250ZXh0ID0gY29udGV4dDsgLy8vXG5cbiAgICBjb25zdCBzdWJzdGl0dXRpb25zID0gU3Vic3RpdHV0aW9ucy5mcm9tTm90aGluZygpLFxuICAgICAgICAgIHN0YXRlbWVudFVuaWZpZWRXaXRoQ29uY2x1c2lvbiA9IHRoaXMudW5pZnlTdGF0ZW1lbnRXaXRoQ29uY2x1c2lvbihzdGF0ZW1lbnQsIHN1YnN0aXR1dGlvbnMsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgaWYgKHN0YXRlbWVudFVuaWZpZWRXaXRoQ29uY2x1c2lvbikge1xuICAgICAgY29uc3QgcHJvb2ZTdGVwU3VicHJvb2ZzVW5pZmllZFdpdGhQcmVtaXNlcyA9IHRoaXMudW5pZnlQcm9vZlN0ZXBTdWJwcm9vZnNXaXRoUHJlbWlzZXMocHJvb2ZTdGVwU3VicHJvb2ZzLCBzdWJzdGl0dXRpb25zLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgICAgaWYgKHByb29mU3RlcFN1YnByb29mc1VuaWZpZWRXaXRoUHJlbWlzZXMpIHtcbiAgICAgICAgY29uc3Qgc3Vic3RpdHV0aW9uc1Jlc29sdmVkID0gc3Vic3RpdHV0aW9ucy5hcmVSZXNvbHZlZCgpO1xuXG4gICAgICAgIHN0YXRlbWVudEFuZFByb29mU3RlcFN1YnByb29mc1VuaWZpZWQgPSBzdWJzdGl0dXRpb25zUmVzb2x2ZWQ7IC8vL1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBzdGF0ZW1lbnRBbmRQcm9vZlN0ZXBTdWJwcm9vZnNVbmlmaWVkO1xuICB9XG5cbiAgdW5pZnlTdGF0ZW1lbnRXaXRoQ29uY2x1c2lvbihzdGF0ZW1lbnQsIHN1YnN0aXR1dGlvbnMsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpIHtcbiAgICBsZXQgc3RhdGVtZW50VW5pZmllZFdpdGhDb25jbHVzaW9uO1xuXG4gICAgY29uc3Qgc3RhdGVtZW50VW5pZmllZCA9IHRoaXMuY29uY2x1c2lvbi51bmlmeVN0YXRlbWVudChzdGF0ZW1lbnQsIHN1YnN0aXR1dGlvbnMsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgc3RhdGVtZW50VW5pZmllZFdpdGhDb25jbHVzaW9uID0gc3RhdGVtZW50VW5pZmllZDsgLy8vXG5cbiAgICByZXR1cm4gc3RhdGVtZW50VW5pZmllZFdpdGhDb25jbHVzaW9uO1xuICB9XG5cbiAgdW5pZnlQcm9vZlN0ZXBTdWJwcm9vZnNXaXRoUHJlbWlzZXMocHJvb2ZTdGVwU3VicHJvb2ZzLCBzdWJzdGl0dXRpb25zLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KSB7XG4gICAgcHJvb2ZTdGVwU3VicHJvb2ZzID0gcmV2ZXJzZShwcm9vZlN0ZXBTdWJwcm9vZnMpOyAvLy9cblxuICAgIGNvbnN0IHByb29mU3RlcFN1YnByb29mc1VuaWZpZWRXaXRoUHJlbWlzZXMgPSBiYWNrd2FyZHNFdmVyeSh0aGlzLnByZW1pc2VzLCAocHJlbWlzZSkgPT4ge1xuICAgICAgY29uc3QgcHJvb2ZTdGVwVW5pZmllZFdpdGhQcmVtaXNlID0gdGhpcy51bmlmeVByb29mU3RlcFN1YnByb29mc1dpdGhQcmVtaXNlKHByb29mU3RlcFN1YnByb29mcywgcHJlbWlzZSwgc3Vic3RpdHV0aW9ucywgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgICAgIGlmIChwcm9vZlN0ZXBVbmlmaWVkV2l0aFByZW1pc2UpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gcHJvb2ZTdGVwU3VicHJvb2ZzVW5pZmllZFdpdGhQcmVtaXNlcztcbiAgfVxuXG4gIHVuaWZ5UHJvb2ZTdGVwU3VicHJvb2ZzV2l0aFByZW1pc2UocHJvb2ZTdGVwU3VicHJvb2ZzLCBwcmVtaXNlLCBzdWJzdGl0dXRpb25zLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KSB7XG4gICAgbGV0IHByb29mU3RlcFN1YnByb29mc1VuaWZpZWRXaXRoUHJlbWlzZSAgPWZhbHNlO1xuXG4gICAgY29uc3QgcHJlbWlzZVVuaWZpZWRJbmRlcGVuZGVudGx5ID0gcHJlbWlzZS51bmlmeUluZGVwZW5kZW50bHkoc3Vic3RpdHV0aW9ucywgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgICBpZiAocHJlbWlzZVVuaWZpZWRJbmRlcGVuZGVudGx5KSB7XG4gICAgICBwcm9vZlN0ZXBTdWJwcm9vZnNVbmlmaWVkV2l0aFByZW1pc2UgPSB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBwcm9vZlN0ZXAgPSBleHRyYWN0KHByb29mU3RlcFN1YnByb29mcywgKHByb29mU3RlcFN1YnByb29mKSA9PiB7XG4gICAgICAgIGNvbnN0IHByb29mU3RlcFN1YnByb29mVW5pZmllZCA9IHByZW1pc2UudW5pZnlQcm9vZlN0ZXBTdWJwcm9vZihwcm9vZlN0ZXBTdWJwcm9vZiwgc3Vic3RpdHV0aW9ucywgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgICAgICAgaWYgKHByb29mU3RlcFN1YnByb29mVW5pZmllZCkge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICB9KSB8fCBudWxsO1xuXG4gICAgICBpZiAocHJvb2ZTdGVwICE9PSBudWxsKSB7XG4gICAgICAgIHByb29mU3RlcFN1YnByb29mc1VuaWZpZWRXaXRoUHJlbWlzZSA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHByb29mU3RlcFN1YnByb29mc1VuaWZpZWRXaXRoUHJlbWlzZTtcbiAgfVxuXG4gIHZlcmlmeSgpIHtcbiAgICBsZXQgdmVyaWZpZWQgPSBmYWxzZTtcblxuICAgIGNvbnN0IHJ1bGVTdHJpbmcgPSB0aGlzLnN0cmluZzsgLy8vXG5cbiAgICB0aGlzLmZpbGVDb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke3J1bGVTdHJpbmd9JyBydWxlLi4uYCk7XG5cbiAgICBjb25zdCBsYWJlbHNWZXJpZmllZCA9IHRoaXMudmVyaWZ5TGFiZWxzKCk7XG5cbiAgICBpZiAobGFiZWxzVmVyaWZpZWQpIHtcbiAgICAgIGNvbnN0IGNvbnRleHQgPSBMb2NhbENvbnRleHQuZnJvbUZpbGVDb250ZXh0KHRoaXMuZmlsZUNvbnRleHQpLFxuICAgICAgICAgICAgcHJlbWlzZXNWZXJpZmllZCA9IHRoaXMucHJlbWlzZXMuZXZlcnkoKHByZW1pc2UpID0+IHtcbiAgICAgICAgICAgICAgY29uc3QgcHJlbWlzZVZlcmlmaWVkID0gcHJlbWlzZS52ZXJpZnkoY29udGV4dCk7XG5cbiAgICAgICAgICAgICAgaWYgKHByZW1pc2VWZXJpZmllZCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcblxuICAgICAgaWYgKHByZW1pc2VzVmVyaWZpZWQpIHtcbiAgICAgICAgY29uc3QgY29uY2x1c2lvblZlcmlmaWVkID0gdGhpcy5jb25jbHVzaW9uLnZlcmlmeShjb250ZXh0KTtcblxuICAgICAgICBpZiAoY29uY2x1c2lvblZlcmlmaWVkKSB7XG4gICAgICAgICAgbGV0IHByb29mVmVyaWZpZWQgPSB0cnVlOyAvLy9cblxuICAgICAgICAgIGlmICh0aGlzLnByb29mICE9PSBudWxsKSB7XG4gICAgICAgICAgICBjb25zdCBzdWJzdGl0dXRpb25zID0gU3Vic3RpdHV0aW9ucy5mcm9tTm90aGluZygpO1xuXG4gICAgICAgICAgICBwcm9vZlZlcmlmaWVkID0gdGhpcy5wcm9vZi52ZXJpZnkoc3Vic3RpdHV0aW9ucywgdGhpcy5jb25jbHVzaW9uLCBjb250ZXh0KTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAocHJvb2ZWZXJpZmllZCkge1xuICAgICAgICAgICAgY29uc3QgcnVsZSA9IHRoaXM7ICAvLy9cblxuICAgICAgICAgICAgdGhpcy5maWxlQ29udGV4dC5hZGRSdWxlKHJ1bGUpO1xuXG4gICAgICAgICAgICB2ZXJpZmllZCA9IHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHZlcmlmaWVkKSB7XG4gICAgICB0aGlzLmZpbGVDb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7cnVsZVN0cmluZ30nIHJ1bGUuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZlcmlmaWVkO1xuICB9XG5cbiAgdmVyaWZ5TGFiZWxzKCkge1xuICAgIGNvbnN0IGxhYmVsc1ZlcmlmaWVkID0gdGhpcy5sYWJlbHMuZXZlcnkoKGxhYmVsKSA9PiB7XG4gICAgICBjb25zdCBuYW1lT25seSA9IHRydWUsXG4gICAgICAgICAgICBsYWJlbFZWZXJpZmllZFdoZW5EZWNsYXJlZCA9IGxhYmVsLnZlcmlmeVdoZW5EZWNsYXJlZCh0aGlzLmZpbGVDb250ZXh0LCBuYW1lT25seSk7XG5cbiAgICAgIGlmIChsYWJlbFZWZXJpZmllZFdoZW5EZWNsYXJlZCkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiBsYWJlbHNWZXJpZmllZDtcbiAgfVxuXG4gIHRvSlNPTigpIHtcbiAgICBjb25zdCBsYWJlbHNKU09OID0gbGFiZWxzVG9MYWJlbHNKU09OKHRoaXMubGFiZWxzKSxcbiAgICAgICAgICBwcmVtaXNlc0pTT04gPSBwcmVtaXNlc1RvUHJlbWlzZXNKU09OKHRoaXMucHJlbWlzZXMpLFxuICAgICAgICAgIGNvbmNsdXNpb25KU09OID0gY29uY2x1c2lvblRvQ29uY2x1c2lvbkpTT04odGhpcy5jb25jbHVzaW9uKSxcbiAgICAgICAgICBsYWJlbHMgPSBsYWJlbHNKU09OLCAgLy8vXG4gICAgICAgICAgcHJlbWlzZXMgPSBwcmVtaXNlc0pTT04sICAvLy9cbiAgICAgICAgICBjb25jbHVzaW9uID0gY29uY2x1c2lvbkpTT04sICAvLy9cbiAgICAgICAgICBqc29uID0ge1xuICAgICAgICAgICAgbGFiZWxzLFxuICAgICAgICAgICAgcHJlbWlzZXMsXG4gICAgICAgICAgICBjb25jbHVzaW9uXG4gICAgICAgICAgfTtcblxuICAgIHJldHVybiBqc29uO1xuICB9XG5cbiAgc3RhdGljIG5hbWUgPSBcIlJ1bGVcIjtcblxuICBzdGF0aWMgZnJvbUpTT04oanNvbiwgZmlsZUNvbnRleHQpIHtcbiAgICBsZXQgcnVsZTtcblxuICAgIGNvbnN0IHByb29mID0gbnVsbCxcbiAgICAgICAgICBsYWJlbHMgPSBsYWJlbHNGcm9tSlNPTihqc29uLCBmaWxlQ29udGV4dCksXG4gICAgICAgICAgcHJlbWlzZXMgPSBwcmVtaXNlc0Zyb21KU09OKGpzb24sIGZpbGVDb250ZXh0KSxcbiAgICAgICAgICBjb25jbHVzaW9uID0gY29uY2x1c2lvbkZyb21KU09OKGpzb24sIGZpbGVDb250ZXh0KSxcbiAgICAgICAgICBzdHJpbmcgPSBzdHJpbmdGcm9tTGFiZWxzKGxhYmVscyk7XG5cbiAgICBydWxlID0gbmV3IFJ1bGUoZmlsZUNvbnRleHQsIHN0cmluZywgbGFiZWxzLCBwcmVtaXNlcywgY29uY2x1c2lvbiwgcHJvb2YpO1xuXG4gICAgcmV0dXJuIHJ1bGU7XG4gIH1cblxuICBzdGF0aWMgZnJvbVJ1bGVOb2RlKHJ1bGVOb2RlLCBmaWxlQ29udGV4dCkge1xuICAgIGNvbnN0IHsgTGFiZWwsIFByb29mLCBQcmVtaXNlLCBDb25jbHVzaW9uIH0gPSBkb20sXG4gICAgICAgICAgcHJvb2ZOb2RlID0gcHJvb2ZOb2RlUXVlcnkocnVsZU5vZGUpLFxuICAgICAgICAgIGxhYmVsTm9kZXMgPSBsYWJlbE5vZGVzUXVlcnkocnVsZU5vZGUpLFxuICAgICAgICAgIHByZW1pc2VOb2RlcyA9IHByZW1pc2VOb2Rlc1F1ZXJ5KHJ1bGVOb2RlKSxcbiAgICAgICAgICBjb25jbHVzaW9uTm9kZSA9IGNvbmNsdXNpb25Ob2RlUXVlcnkocnVsZU5vZGUpLFxuICAgICAgICAgIGxhYmVscyA9IGxhYmVsTm9kZXMubWFwKChsYWJlbE5vZGUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGxhYmVsID0gTGFiZWwuZnJvbUxhYmVsTm9kZShsYWJlbE5vZGUsIGZpbGVDb250ZXh0KTtcblxuICAgICAgICAgICAgcmV0dXJuIGxhYmVsO1xuICAgICAgICAgIH0pLFxuICAgICAgICAgIHByZW1pc2VzID0gcHJlbWlzZU5vZGVzLm1hcCgocHJlbWlzZU5vZGUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHByZW1pc2UgPSBQcmVtaXNlLmZyb21QcmVtaXNlTm9kZShwcmVtaXNlTm9kZSwgZmlsZUNvbnRleHQpO1xuXG4gICAgICAgICAgICByZXR1cm4gcHJlbWlzZTtcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBjb25jbHVzaW9uID0gQ29uY2x1c2lvbi5mcm9tQ29uY2x1c2lvbk5vZGUoY29uY2x1c2lvbk5vZGUsIGZpbGVDb250ZXh0KSxcbiAgICAgICAgICBzdHJpbmcgPSBzdHJpbmdGcm9tTGFiZWxzKGxhYmVscyksXG4gICAgICAgICAgcHJvb2YgPSBQcm9vZi5mcm9tUHJvb2ZOb2RlKHByb29mTm9kZSwgZmlsZUNvbnRleHQpLFxuICAgICAgICAgIHJ1bGUgPSBuZXcgUnVsZShmaWxlQ29udGV4dCwgc3RyaW5nLCBsYWJlbHMsIHByZW1pc2VzLCBjb25jbHVzaW9uLCBwcm9vZik7XG5cbiAgICByZXR1cm4gcnVsZTtcbiAgfVxufSk7XG4iXSwibmFtZXMiOlsicmV2ZXJzZSIsImFycmF5VXRpbGl0aWVzIiwiZXh0cmFjdCIsImJhY2t3YXJkc0V2ZXJ5IiwicHJvb2ZOb2RlUXVlcnkiLCJub2RlUXVlcnkiLCJsYWJlbE5vZGVzUXVlcnkiLCJub2Rlc1F1ZXJ5IiwicHJlbWlzZU5vZGVzUXVlcnkiLCJjb25jbHVzaW9uTm9kZVF1ZXJ5IiwiZG9tQXNzaWduZWQiLCJSdWxlIiwiZmlsZUNvbnRleHQiLCJzdHJpbmciLCJsYWJlbHMiLCJwcmVtaXNlcyIsImNvbmNsdXNpb24iLCJwcm9vZiIsImdldEZpbGVDb250ZXh0IiwiZ2V0U3RyaW5nIiwiZ2V0TGFiZWxzIiwiZ2V0UHJlbWlzZXMiLCJnZXRDb25jbHVzaW9uIiwiZ2V0UHJvb2YiLCJtYXRjaFN0YXRlbWVudE5vZGUiLCJzdGF0ZW1lbnROb2RlIiwibWF0Y2hNZXRhdmFyaWFibGVOYW1lIiwibWV0YXZhcmlhYmxlTmFtZSIsIm1ldGF2YXJpYWJsZU5hbWVNYXRjaGVzIiwic29tZSIsImxhYmVsIiwidW5pZnlTdGF0ZW1lbnRBbmRQcm9vZlN0ZXBTdWJwcm9vZnMiLCJzdGF0ZW1lbnQiLCJwcm9vZlN0ZXBTdWJwcm9vZnMiLCJjb250ZXh0Iiwic3RhdGVtZW50QW5kUHJvb2ZTdGVwU3VicHJvb2ZzVW5pZmllZCIsImxvY2FsQ29udGV4dCIsIkxvY2FsQ29udGV4dCIsImZyb21GaWxlQ29udGV4dCIsImdlbmVyYWxDb250ZXh0Iiwic3BlY2lmaWNDb250ZXh0Iiwic3Vic3RpdHV0aW9ucyIsIlN1YnN0aXR1dGlvbnMiLCJmcm9tTm90aGluZyIsInN0YXRlbWVudFVuaWZpZWRXaXRoQ29uY2x1c2lvbiIsInVuaWZ5U3RhdGVtZW50V2l0aENvbmNsdXNpb24iLCJwcm9vZlN0ZXBTdWJwcm9vZnNVbmlmaWVkV2l0aFByZW1pc2VzIiwidW5pZnlQcm9vZlN0ZXBTdWJwcm9vZnNXaXRoUHJlbWlzZXMiLCJzdWJzdGl0dXRpb25zUmVzb2x2ZWQiLCJhcmVSZXNvbHZlZCIsInN0YXRlbWVudFVuaWZpZWQiLCJ1bmlmeVN0YXRlbWVudCIsInByZW1pc2UiLCJwcm9vZlN0ZXBVbmlmaWVkV2l0aFByZW1pc2UiLCJ1bmlmeVByb29mU3RlcFN1YnByb29mc1dpdGhQcmVtaXNlIiwicHJvb2ZTdGVwU3VicHJvb2ZzVW5pZmllZFdpdGhQcmVtaXNlIiwicHJlbWlzZVVuaWZpZWRJbmRlcGVuZGVudGx5IiwidW5pZnlJbmRlcGVuZGVudGx5IiwicHJvb2ZTdGVwIiwicHJvb2ZTdGVwU3VicHJvb2YiLCJwcm9vZlN0ZXBTdWJwcm9vZlVuaWZpZWQiLCJ1bmlmeVByb29mU3RlcFN1YnByb29mIiwidmVyaWZ5IiwidmVyaWZpZWQiLCJydWxlU3RyaW5nIiwidHJhY2UiLCJsYWJlbHNWZXJpZmllZCIsInZlcmlmeUxhYmVscyIsInByZW1pc2VzVmVyaWZpZWQiLCJldmVyeSIsInByZW1pc2VWZXJpZmllZCIsImNvbmNsdXNpb25WZXJpZmllZCIsInByb29mVmVyaWZpZWQiLCJydWxlIiwiYWRkUnVsZSIsImRlYnVnIiwibmFtZU9ubHkiLCJsYWJlbFZWZXJpZmllZFdoZW5EZWNsYXJlZCIsInZlcmlmeVdoZW5EZWNsYXJlZCIsInRvSlNPTiIsImxhYmVsc0pTT04iLCJsYWJlbHNUb0xhYmVsc0pTT04iLCJwcmVtaXNlc0pTT04iLCJwcmVtaXNlc1RvUHJlbWlzZXNKU09OIiwiY29uY2x1c2lvbkpTT04iLCJjb25jbHVzaW9uVG9Db25jbHVzaW9uSlNPTiIsImpzb24iLCJmcm9tSlNPTiIsImxhYmVsc0Zyb21KU09OIiwicHJlbWlzZXNGcm9tSlNPTiIsImNvbmNsdXNpb25Gcm9tSlNPTiIsInN0cmluZ0Zyb21MYWJlbHMiLCJmcm9tUnVsZU5vZGUiLCJydWxlTm9kZSIsIkxhYmVsIiwiZG9tIiwiUHJvb2YiLCJQcmVtaXNlIiwiQ29uY2x1c2lvbiIsInByb29mTm9kZSIsImxhYmVsTm9kZXMiLCJwcmVtaXNlTm9kZXMiLCJjb25jbHVzaW9uTm9kZSIsIm1hcCIsImxhYmVsTm9kZSIsImZyb21MYWJlbE5vZGUiLCJwcmVtaXNlTm9kZSIsImZyb21QcmVtaXNlTm9kZSIsImZyb21Db25jbHVzaW9uTm9kZSIsImZyb21Qcm9vZk5vZGUiLCJuYW1lIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkF5QkE7OztlQUFBOzs7eUJBdkIrQjsyREFFZjs0REFDUztvRUFDQztpQ0FHTztxQkFDSztvQkFNSzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFM0MsSUFBUUEsVUFBcUNDLHlCQUFjLENBQW5ERCxTQUFTRSxVQUE0QkQseUJBQWMsQ0FBMUNDLFNBQVNDLGlCQUFtQkYseUJBQWMsQ0FBakNFO0FBRTFCLElBQU1DLGlCQUFpQkMsSUFBQUEsZ0JBQVMsRUFBQyxnQkFDM0JDLGtCQUFrQkMsSUFBQUEsaUJBQVUsRUFBQyx1QkFDN0JDLG9CQUFvQkQsSUFBQUEsaUJBQVUsRUFBQyxrQkFDL0JFLHNCQUFzQkosSUFBQUEsZ0JBQVMsRUFBQztJQUV0QyxXQUFlSyxJQUFBQSxnQkFBVyx5QkFBQzthQUFNQyxLQUNuQkMsV0FBVyxFQUFFQyxNQUFNLEVBQUVDLE1BQU0sRUFBRUMsUUFBUSxFQUFFQyxVQUFVLEVBQUVDLEtBQUs7Z0NBRHJDTjtRQUU3QixJQUFJLENBQUNDLFdBQVcsR0FBR0E7UUFDbkIsSUFBSSxDQUFDQyxNQUFNLEdBQUdBO1FBQ2QsSUFBSSxDQUFDQyxNQUFNLEdBQUdBO1FBQ2QsSUFBSSxDQUFDQyxRQUFRLEdBQUdBO1FBQ2hCLElBQUksQ0FBQ0MsVUFBVSxHQUFHQTtRQUNsQixJQUFJLENBQUNDLEtBQUssR0FBR0E7Ozs7WUFHZkMsS0FBQUE7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