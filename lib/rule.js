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
var _substitutions = /*#__PURE__*/ _interop_require_default(require("./substitutions"));
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
            key: "unifyStatement",
            value: function unifyStatement(statementNode, localContext) {
                var statementUnified = false;
                var proofSteps = localContext.getProofSteps(), substitutions = _substitutions.default.fromNothing(), premisesUnified = unifyPremises(this.premises, proofSteps, substitutions, this.fileContext, localContext);
                if (premisesUnified) {
                    var conclusionUnified = unifyConclusion(this.conclusion, statementNode, substitutions, this.fileContext, localContext);
                    statementUnified = conclusionUnified; ///
                }
                return statementUnified;
            }
        },
        {
            key: "matchMetavariableNode",
            value: function matchMetavariableNode(metavariableNode) {
                var matchesMetavariableNode = this.labels.some(function(label) {
                    var labelMatchesMetavariableNode = label.matchMetavariableNode(metavariableNode);
                    if (labelMatchesMetavariableNode) {
                        return true;
                    }
                });
                return matchesMetavariableNode;
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
function matchPremise(premise, proofStep, substitutions, fileContext, localContext) {
    var premiseUnified = false;
    var subproofNode = proofStep.getSubproofNode(), statementNode = proofStep.getStatementNode();
    substitutions.snapshot();
    if (subproofNode !== null) {
        var subproofUnified = premise.unifySubproof(subproofNode, substitutions, fileContext, localContext);
        premiseUnified = subproofUnified; ///
    }
    if (statementNode !== null) {
        var statementUnified = premise.unifyStatement(statementNode, substitutions, fileContext, localContext);
        premiseUnified = statementUnified; ///
    }
    premiseUnified ? substitutions.continue() : substitutions.rollback();
    return premiseUnified;
}
function unifyPremises(premises, proofSteps, substitutions, fileContext, localContext) {
    premises = (0, _array.reverse)(premises); ///
    proofSteps = (0, _array.reverse)(proofSteps); ///
    var premisesUnified = (0, _array.correlate)(premises, proofSteps, function(premise, proofStep) {
        var premiseUnified = matchPremise(premise, proofStep, substitutions, fileContext, localContext);
        if (premiseUnified) {
            return true;
        }
    });
    return premisesUnified;
}
function unifyConclusion(conclusion, statementNode, substitutions, fileContext, localContext) {
    var conclusionUnified;
    substitutions.snapshot();
    var statementUnified = conclusion.unifyStatement(statementNode, substitutions, fileContext, localContext);
    conclusionUnified = statementUnified; ///
    conclusionUnified ? substitutions.continue() : substitutions.rollback();
    return conclusionUnified;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9ydWxlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgTGFiZWwgZnJvbSBcIi4vbGFiZWxcIjtcbmltcG9ydCBQcmVtaXNlIGZyb20gXCIuL3ByZW1pc2VcIjtcbmltcG9ydCBDb25jbHVzaW9uIGZyb20gXCIuL2NvbmNsdXNpb25cIjtcbmltcG9ydCBTdWJzdGl0dXRpb25zIGZyb20gXCIuL3N1YnN0aXR1dGlvbnNcIjtcblxuaW1wb3J0IHsgcmV2ZXJzZSwgY29ycmVsYXRlIH0gZnJvbSBcIi4vdXRpbGl0aWVzL2FycmF5XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJ1bGUge1xuICBjb25zdHJ1Y3RvcihsYWJlbHMsIHByZW1pc2VzLCBjb25jbHVzaW9uLCBmaWxlQ29udGV4dCkge1xuICAgIHRoaXMubGFiZWxzID0gbGFiZWxzO1xuICAgIHRoaXMucHJlbWlzZXMgPSBwcmVtaXNlcztcbiAgICB0aGlzLmNvbmNsdXNpb24gPSBjb25jbHVzaW9uO1xuICAgIHRoaXMuZmlsZUNvbnRleHQgPSBmaWxlQ29udGV4dDtcbiAgfVxuXG4gIGdldExhYmVscygpIHtcbiAgICByZXR1cm4gdGhpcy5sYWJlbHM7XG4gIH1cblxuICBnZXRQcmVtaXNlcygpIHtcbiAgICByZXR1cm4gdGhpcy5wcmVtaXNlcztcbiAgfVxuXG4gIGdldENvbmNsdXNpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuY29uY2x1c2lvbjtcbiAgfVxuXG4gIGdldEZpbGVDb250ZXh0KCkge1xuICAgIHJldHVybiB0aGlzLmZpbGVDb250ZXh0O1xuICB9XG5cbiAgdW5pZnlTdGF0ZW1lbnQoc3RhdGVtZW50Tm9kZSwgbG9jYWxDb250ZXh0KSB7XG4gICAgbGV0IHN0YXRlbWVudFVuaWZpZWQgPSBmYWxzZTtcblxuICAgIGNvbnN0IHByb29mU3RlcHMgPSBsb2NhbENvbnRleHQuZ2V0UHJvb2ZTdGVwcygpLFxuICAgICAgICAgIHN1YnN0aXR1dGlvbnMgPSBTdWJzdGl0dXRpb25zLmZyb21Ob3RoaW5nKCksXG4gICAgICAgICAgcHJlbWlzZXNVbmlmaWVkID0gdW5pZnlQcmVtaXNlcyh0aGlzLnByZW1pc2VzLCBwcm9vZlN0ZXBzLCBzdWJzdGl0dXRpb25zLCB0aGlzLmZpbGVDb250ZXh0LCBsb2NhbENvbnRleHQpO1xuXG4gICAgaWYgKHByZW1pc2VzVW5pZmllZCkge1xuICAgICAgY29uc3QgY29uY2x1c2lvblVuaWZpZWQgPSB1bmlmeUNvbmNsdXNpb24odGhpcy5jb25jbHVzaW9uLCBzdGF0ZW1lbnROb2RlLCBzdWJzdGl0dXRpb25zLCB0aGlzLmZpbGVDb250ZXh0LCBsb2NhbENvbnRleHQpO1xuXG4gICAgICBzdGF0ZW1lbnRVbmlmaWVkID0gY29uY2x1c2lvblVuaWZpZWQ7ICAvLy9cbiAgICB9XG5cbiAgICByZXR1cm4gc3RhdGVtZW50VW5pZmllZDtcbiAgfVxuXG4gIG1hdGNoTWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlKSB7XG4gICAgY29uc3QgbWF0Y2hlc01ldGF2YXJpYWJsZU5vZGUgPSB0aGlzLmxhYmVscy5zb21lKChsYWJlbCkgPT4ge1xuICAgICAgY29uc3QgbGFiZWxNYXRjaGVzTWV0YXZhcmlhYmxlTm9kZSA9IGxhYmVsLm1hdGNoTWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlKTtcblxuICAgICAgaWYgKGxhYmVsTWF0Y2hlc01ldGF2YXJpYWJsZU5vZGUpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gbWF0Y2hlc01ldGF2YXJpYWJsZU5vZGU7XG4gIH1cblxuICB0b0pTT04odG9rZW5zKSB7XG4gICAgY29uc3QgbGFiZWxzSlNPTiA9IHRoaXMubGFiZWxzLm1hcCgobGFiZWwpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGxhYmVsSlNPTiA9IGxhYmVsLnRvSlNPTih0b2tlbnMpO1xuXG4gICAgICAgICAgICByZXR1cm4gbGFiZWxKU09OO1xuICAgICAgICAgIH0pLFxuICAgICAgICAgIHByZW1pc2VzSlNPTiA9IHRoaXMucHJlbWlzZXMubWFwKChwcmVtaXNlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBwcmVtaXNlSlNPTiA9IHByZW1pc2UudG9KU09OKHRva2Vucyk7XG5cbiAgICAgICAgICAgIHJldHVybiBwcmVtaXNlSlNPTjtcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBjb25jbHVzaW9uSlNPTiA9IHRoaXMuY29uY2x1c2lvbi50b0pTT04odG9rZW5zKSxcbiAgICAgICAgICBsYWJlbHMgPSBsYWJlbHNKU09OLCAgLy8vXG4gICAgICAgICAgcHJlbWlzZXMgPSBwcmVtaXNlc0pTT04sICAvLy9cbiAgICAgICAgICBjb25jbHVzaW9uID0gY29uY2x1c2lvbkpTT04sICAvLy9cbiAgICAgICAgICBqc29uID0ge1xuICAgICAgICAgICAgbGFiZWxzLFxuICAgICAgICAgICAgcHJlbWlzZXMsXG4gICAgICAgICAgICBjb25jbHVzaW9uXG4gICAgICAgICAgfTtcblxuICAgIHJldHVybiBqc29uO1xuICB9XG5cbiAgc3RhdGljIGZyb21KU09OQW5kRmlsZUNvbnRleHQoanNvbiwgZmlsZUNvbnRleHQpIHtcbiAgICBsZXQgcnVsZTtcblxuICAgIGxldCB7IGxhYmVscyB9ID0ganNvbjtcblxuICAgIGNvbnN0IGxhYmVsc0pTT04gPSBsYWJlbHM7ICAvLy9cblxuICAgIGxhYmVscyA9IGxhYmVsc0pTT04ubWFwKChsYWJlbEpTT04pID0+IHtcbiAgICAgIGNvbnN0IGpzb24gPSBsYWJlbEpTT04sIC8vL1xuICAgICAgICAgICAgbGFiZWwgPSBMYWJlbC5mcm9tSlNPTkFuZEZpbGVDb250ZXh0KGpzb24sIGZpbGVDb250ZXh0KTtcblxuICAgICAgcmV0dXJuIGxhYmVsO1xuICAgIH0pO1xuXG4gICAgbGV0IHsgcHJlbWlzZXMgfSA9IGpzb247XG5cbiAgICBjb25zdCBwcmVtaXNlc0pTT04gPSBwcmVtaXNlczsgIC8vL1xuXG4gICAgcHJlbWlzZXMgPSBwcmVtaXNlc0pTT04ubWFwKChwcmVtaXNlSlNPTikgPT4ge1xuICAgICAgY29uc3QganNvbiA9IHByZW1pc2VKU09OLCAvLy9cbiAgICAgICAgICAgIHByZW1pc2UgPSBQcmVtaXNlLmZyb21KU09OQW5kRmlsZUNvbnRleHQoanNvbiwgZmlsZUNvbnRleHQpO1xuXG4gICAgICByZXR1cm4gcHJlbWlzZTtcbiAgICB9KTtcblxuICAgIGxldCB7IGNvbmNsdXNpb24gfSA9IGpzb247XG5cbiAgICBjb25zdCBjb25jbHVzaW9uSlNPTiA9IGNvbmNsdXNpb247ICAvLy9cblxuICAgIGpzb24gPSBjb25jbHVzaW9uSlNPTjsgIC8vL1xuXG4gICAgY29uY2x1c2lvbiA9IENvbmNsdXNpb24uZnJvbUpTT05BbmRGaWxlQ29udGV4dChqc29uLCBmaWxlQ29udGV4dCk7XG5cbiAgICBydWxlID0gbmV3IFJ1bGUobGFiZWxzLCBwcmVtaXNlcywgY29uY2x1c2lvbiwgZmlsZUNvbnRleHQpO1xuXG4gICAgcmV0dXJuIHJ1bGU7XG4gIH1cblxuICBzdGF0aWMgZnJvbUxhYmVsc1ByZW1pc2VzQ29uY2x1c2lvbkFuZEZpbGVDb250ZXh0KGxhYmVscywgcHJlbWlzZXMsIGNvbmNsdXNpb24sIGZpbGVDb250ZXh0KSB7XG4gICAgY29uc3QgcnVsZSA9IG5ldyBSdWxlKGxhYmVscywgcHJlbWlzZXMsIGNvbmNsdXNpb24sIGZpbGVDb250ZXh0KTtcblxuICAgIHJldHVybiBydWxlO1xuICB9XG59XG5cbmZ1bmN0aW9uIG1hdGNoUHJlbWlzZShwcmVtaXNlLCBwcm9vZlN0ZXAsIHN1YnN0aXR1dGlvbnMsIGZpbGVDb250ZXh0LCBsb2NhbENvbnRleHQpIHtcbiAgbGV0IHByZW1pc2VVbmlmaWVkID0gZmFsc2U7XG5cbiAgY29uc3Qgc3VicHJvb2ZOb2RlID0gcHJvb2ZTdGVwLmdldFN1YnByb29mTm9kZSgpLFxuICAgICAgICBzdGF0ZW1lbnROb2RlID0gcHJvb2ZTdGVwLmdldFN0YXRlbWVudE5vZGUoKTtcblxuICBzdWJzdGl0dXRpb25zLnNuYXBzaG90KCk7XG5cbiAgaWYgKHN1YnByb29mTm9kZSAhPT0gbnVsbCkge1xuICAgIGNvbnN0IHN1YnByb29mVW5pZmllZCA9IHByZW1pc2UudW5pZnlTdWJwcm9vZihzdWJwcm9vZk5vZGUsIHN1YnN0aXR1dGlvbnMsIGZpbGVDb250ZXh0LCBsb2NhbENvbnRleHQpO1xuXG4gICAgcHJlbWlzZVVuaWZpZWQgPSBzdWJwcm9vZlVuaWZpZWQ7IC8vL1xuICB9XG5cbiAgaWYgKHN0YXRlbWVudE5vZGUgIT09IG51bGwpIHtcbiAgICBjb25zdCBzdGF0ZW1lbnRVbmlmaWVkID0gcHJlbWlzZS51bmlmeVN0YXRlbWVudChzdGF0ZW1lbnROb2RlLCBzdWJzdGl0dXRpb25zLCBmaWxlQ29udGV4dCwgbG9jYWxDb250ZXh0KTtcblxuICAgIHByZW1pc2VVbmlmaWVkID0gc3RhdGVtZW50VW5pZmllZDsgIC8vL1xuICB9XG5cbiAgcHJlbWlzZVVuaWZpZWQgP1xuICAgIHN1YnN0aXR1dGlvbnMuY29udGludWUoKSA6XG4gICAgICBzdWJzdGl0dXRpb25zLnJvbGxiYWNrKCk7XG5cbiAgcmV0dXJuIHByZW1pc2VVbmlmaWVkO1xufVxuXG5mdW5jdGlvbiB1bmlmeVByZW1pc2VzKHByZW1pc2VzLCBwcm9vZlN0ZXBzLCBzdWJzdGl0dXRpb25zLCBmaWxlQ29udGV4dCwgbG9jYWxDb250ZXh0KSB7XG4gIHByZW1pc2VzID0gcmV2ZXJzZShwcmVtaXNlcyk7IC8vL1xuXG4gIHByb29mU3RlcHMgPSByZXZlcnNlKHByb29mU3RlcHMpOyAvLy9cblxuICBjb25zdCBwcmVtaXNlc1VuaWZpZWQgPSBjb3JyZWxhdGUocHJlbWlzZXMsIHByb29mU3RlcHMsIChwcmVtaXNlLCBwcm9vZlN0ZXApID0+IHtcbiAgICBjb25zdCBwcmVtaXNlVW5pZmllZCA9IG1hdGNoUHJlbWlzZShwcmVtaXNlLCBwcm9vZlN0ZXAsIHN1YnN0aXR1dGlvbnMsIGZpbGVDb250ZXh0LCBsb2NhbENvbnRleHQpO1xuXG4gICAgaWYgKHByZW1pc2VVbmlmaWVkKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiBwcmVtaXNlc1VuaWZpZWQ7XG59XG5cbmZ1bmN0aW9uIHVuaWZ5Q29uY2x1c2lvbihjb25jbHVzaW9uLCBzdGF0ZW1lbnROb2RlLCBzdWJzdGl0dXRpb25zLCBmaWxlQ29udGV4dCwgbG9jYWxDb250ZXh0KSB7XG4gIGxldCBjb25jbHVzaW9uVW5pZmllZDtcblxuICBzdWJzdGl0dXRpb25zLnNuYXBzaG90KCk7XG5cbiAgY29uc3Qgc3RhdGVtZW50VW5pZmllZCA9IGNvbmNsdXNpb24udW5pZnlTdGF0ZW1lbnQoc3RhdGVtZW50Tm9kZSwgc3Vic3RpdHV0aW9ucywgZmlsZUNvbnRleHQsIGxvY2FsQ29udGV4dCk7XG5cbiAgY29uY2x1c2lvblVuaWZpZWQgPSBzdGF0ZW1lbnRVbmlmaWVkOyAvLy9cblxuICBjb25jbHVzaW9uVW5pZmllZCA/XG4gICAgc3Vic3RpdHV0aW9ucy5jb250aW51ZSgpIDpcbiAgICAgIHN1YnN0aXR1dGlvbnMucm9sbGJhY2soKTtcblxuICByZXR1cm4gY29uY2x1c2lvblVuaWZpZWQ7XG59XG4iXSwibmFtZXMiOlsiUnVsZSIsImxhYmVscyIsInByZW1pc2VzIiwiY29uY2x1c2lvbiIsImZpbGVDb250ZXh0IiwiZ2V0TGFiZWxzIiwiZ2V0UHJlbWlzZXMiLCJnZXRDb25jbHVzaW9uIiwiZ2V0RmlsZUNvbnRleHQiLCJ1bmlmeVN0YXRlbWVudCIsInN0YXRlbWVudE5vZGUiLCJsb2NhbENvbnRleHQiLCJzdGF0ZW1lbnRVbmlmaWVkIiwicHJvb2ZTdGVwcyIsImdldFByb29mU3RlcHMiLCJzdWJzdGl0dXRpb25zIiwiU3Vic3RpdHV0aW9ucyIsImZyb21Ob3RoaW5nIiwicHJlbWlzZXNVbmlmaWVkIiwidW5pZnlQcmVtaXNlcyIsImNvbmNsdXNpb25VbmlmaWVkIiwidW5pZnlDb25jbHVzaW9uIiwibWF0Y2hNZXRhdmFyaWFibGVOb2RlIiwibWV0YXZhcmlhYmxlTm9kZSIsIm1hdGNoZXNNZXRhdmFyaWFibGVOb2RlIiwic29tZSIsImxhYmVsIiwibGFiZWxNYXRjaGVzTWV0YXZhcmlhYmxlTm9kZSIsInRvSlNPTiIsInRva2VucyIsImxhYmVsc0pTT04iLCJtYXAiLCJsYWJlbEpTT04iLCJwcmVtaXNlc0pTT04iLCJwcmVtaXNlIiwicHJlbWlzZUpTT04iLCJjb25jbHVzaW9uSlNPTiIsImpzb24iLCJmcm9tSlNPTkFuZEZpbGVDb250ZXh0IiwicnVsZSIsIkxhYmVsIiwiUHJlbWlzZSIsIkNvbmNsdXNpb24iLCJmcm9tTGFiZWxzUHJlbWlzZXNDb25jbHVzaW9uQW5kRmlsZUNvbnRleHQiLCJtYXRjaFByZW1pc2UiLCJwcm9vZlN0ZXAiLCJwcmVtaXNlVW5pZmllZCIsInN1YnByb29mTm9kZSIsImdldFN1YnByb29mTm9kZSIsImdldFN0YXRlbWVudE5vZGUiLCJzbmFwc2hvdCIsInN1YnByb29mVW5pZmllZCIsInVuaWZ5U3VicHJvb2YiLCJjb250aW51ZSIsInJvbGxiYWNrIiwicmV2ZXJzZSIsImNvcnJlbGF0ZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFTcUJBOzs7NERBUEg7OERBQ0U7aUVBQ0c7b0VBQ0c7cUJBRVM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFcEIsSUFBQSxBQUFNQSxxQkFBRCxBQUFMO2FBQU1BLEtBQ1BDLE1BQU0sRUFBRUMsUUFBUSxFQUFFQyxVQUFVLEVBQUVDLFdBQVc7Z0NBRGxDSjtRQUVqQixJQUFJLENBQUNDLE1BQU0sR0FBR0E7UUFDZCxJQUFJLENBQUNDLFFBQVEsR0FBR0E7UUFDaEIsSUFBSSxDQUFDQyxVQUFVLEdBQUdBO1FBQ2xCLElBQUksQ0FBQ0MsV0FBVyxHQUFHQTs7a0JBTEZKOztZQVFuQkssS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDSixNQUFNO1lBQ3BCOzs7WUFFQUssS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFB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