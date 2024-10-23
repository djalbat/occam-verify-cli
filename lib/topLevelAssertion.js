"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    default: function() {
        return TopLevelAssertion;
    },
    stringFromLabels: function() {
        return stringFromLabels;
    }
});
var _necessary = require("necessary");
var _shim = /*#__PURE__*/ _interop_require_default(require("./shim"));
var _constants = require("./constants");
var _query = require("./utilities/query");
var _json = require("./utilities/json");
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
var extract = _necessary.arrayUtilities.extract, reverse = _necessary.arrayUtilities.reverse, backwardsEvery = _necessary.arrayUtilities.backwardsEvery;
var proofNodeQuery = (0, _query.nodeQuery)("/*/proof"), labelNodesQuery = (0, _query.nodesQuery)("/*/label"), consequentNodeQuery = (0, _query.nodeQuery)("/*/consequent"), suppositionNodesQuery = (0, _query.nodesQuery)("/*/supposition");
var TopLevelAssertion = /*#__PURE__*/ function() {
    function TopLevelAssertion(fileContext, string, labels, substitutions, suppositions, consequent, proof) {
        _class_call_check(this, TopLevelAssertion);
        this.fileContext = fileContext;
        this.string = string;
        this.labels = labels;
        this.substitutions = substitutions;
        this.suppositions = suppositions;
        this.consequent = consequent;
        this.proof = proof;
    }
    _create_class(TopLevelAssertion, [
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
            key: "getSubstitutions",
            value: function getSubstitutions() {
                return this.substitutions;
            }
        },
        {
            key: "getSuppositions",
            value: function getSuppositions() {
                return this.suppositions;
            }
        },
        {
            key: "getConsequent",
            value: function getConsequent() {
                return this.consequent;
            }
        },
        {
            key: "getProof",
            value: function getProof() {
                return this.proof;
            }
        },
        {
            key: "getStatement",
            value: function getStatement() {
                return this.proof.getStatement();
            }
        },
        {
            key: "matchMetavariableNode",
            value: function matchMetavariableNode(metavariableNode) {
                var metavariableNodeMatches = this.labels.some(function(label) {
                    var metavariableNodeMatches = label.matchMetavariableNode(metavariableNode);
                    if (metavariableNodeMatches) {
                        return true;
                    }
                });
                return metavariableNodeMatches;
            }
        },
        {
            key: "unifyStatement",
            value: function unifyStatement(statement, localContext) {
                var statementUnified;
                var Substitutions = _shim.default.Substitutions, substitutions = Substitutions.fromNothing(), consequentUnified = this.unifyConsequent(statement, substitutions, localContext);
                if (consequentUnified) {
                    var suppositionsUnified = this.unifySupposition(substitutions, localContext);
                    if (suppositionsUnified) {
                        var substitutionsResolved = substitutions.areResolved();
                        statementUnified = substitutionsResolved; ///
                    }
                }
                return statementUnified;
            }
        },
        {
            key: "unifyConsequent",
            value: function unifyConsequent(statement, substitutions, localContext) {
                var consequentUnified;
                var consequentString = this.consequent.getString();
                localContext.trace("Unifying the '".concat(consequentString, "' consequent..."));
                var statementUnified = this.consequent.unifyStatement(statement, substitutions, localContext); ///
                consequentUnified = statementUnified; ///
                if (consequentUnified) {
                    localContext.debug("...unified the '".concat(consequentString, "' consequent"));
                }
                return consequentUnified;
            }
        },
        {
            key: "unifySupposition",
            value: function unifySupposition(substitutions, localContext) {
                var _this = this;
                var proofSteps = localContext.getProofSteps();
                proofSteps = reverse(proofSteps); ///
                var suppositionsUnified = backwardsEvery(this.suppositions, function(supposition) {
                    var suppositionUnified = _this.unifyPremise(supposition, proofSteps, substitutions, localContext);
                    if (suppositionUnified) {
                        return true;
                    }
                });
                return suppositionsUnified;
            }
        },
        {
            key: "unifyPremise",
            value: function unifyPremise(supposition, proofSteps, substitutions, localContext) {
                var suppositionUnified = false;
                var suppositionString = supposition.getString();
                localContext.trace("Unifying the '".concat(suppositionString, "' supposition..."));
                var suppositionResolvedIndependently = supposition.resolveIndependently(substitutions, localContext);
                if (suppositionResolvedIndependently) {
                    suppositionUnified = true;
                } else {
                    var proofStep = extract(proofSteps, function(proofStep) {
                        var proofStepUnified = supposition.unifyProofStep(proofStep, substitutions, localContext);
                        if (proofStepUnified) {
                            return true;
                        }
                    });
                    if (proofStep !== null) {
                        suppositionUnified = true;
                    }
                }
                if (suppositionUnified) {
                    localContext.debug("...unified the '".concat(suppositionString, "' supposition."));
                }
                return suppositionUnified;
            }
        },
        {
            key: "toJSON",
            value: function toJSON() {
                var labelsJSON = (0, _json.labelsToLabelsJSON)(this.labels), consequentJSON = (0, _json.consequentToConsequentJSON)(this.consequent), suppositionsJSON = (0, _json.suppositionsToSuppositionsJSON)(this.suppositions), substitutionsJSON = (0, _json.substitutionsToSubstitutionsJSON)(this.substitutions), labels = labelsJSON, consequent = consequentJSON, suppositions = suppositionsJSON, substitutions = substitutionsJSON, json = {
                    labels: labels,
                    consequent: consequent,
                    suppositions: suppositions,
                    substitutions: substitutions
                };
                return json;
            }
        }
    ], [
        {
            key: "fromJSON",
            value: function fromJSON(Class, json, fileContext) {
                var labels = (0, _json.labelsFromJSON)(json, fileContext), consequent = (0, _json.consequentFromJSON)(json, fileContext), suppositions = (0, _json.suppositionsFromJSON)(json, fileContext), substitutions = (0, _json.substitutionsFromJSON)(json, fileContext), string = stringFromLabels(labels), proof = null, topLevelAssertion = new Class(fileContext, string, labels, substitutions, suppositions, consequent, proof);
                return topLevelAssertion;
            }
        },
        {
            key: "fromNode",
            value: function fromNode(Class, node, fileContext) {
                var Label = _shim.default.Label, Proof = _shim.default.Proof, Consequent = _shim.default.Consequent, Supposition = _shim.default.Supposition, Substitutions = _shim.default.Substitutions, proofNode = proofNodeQuery(node), labelNodes = labelNodesQuery(node), consequentNode = consequentNodeQuery(node), suppositionNodes = suppositionNodesQuery(node), labels = labelNodes.map(function(labelNode) {
                    var label = Label.fromLabelNode(labelNode, fileContext);
                    return label;
                }), substitutions = Substitutions.fromNothing(), suppositions = suppositionNodes.map(function(suppositionNode) {
                    var supposition = Supposition.fromSuppositionNode(suppositionNode, fileContext);
                    return supposition;
                }), consequent = Consequent.fromConsequentNode(consequentNode, fileContext), proof = Proof.fromProofNode(proofNode, fileContext), string = stringFromLabels(labels), metaLemma = new Class(fileContext, string, labels, substitutions, suppositions, consequent, proof);
                return metaLemma;
            }
        }
    ]);
    return TopLevelAssertion;
}();
function stringFromLabels(labels) {
    var string = labels.reduce(function(string, label) {
        var labelString = label.getString();
        string = string === _constants.EMPTY_STRING ? labelString : "".concat(labelString, ", ").concat(labelString);
        return string;
    }, _constants.EMPTY_STRING);
    return string;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy90b3BMZXZlbEFzc2VydGlvbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgYXJyYXlVdGlsaXRpZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5cbmltcG9ydCBzaGltIGZyb20gXCIuL3NoaW1cIjtcblxuaW1wb3J0IHsgRU1QVFlfU1RSSU5HIH0gZnJvbSBcIi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgeyBub2RlUXVlcnksIG5vZGVzUXVlcnkgfSBmcm9tIFwiLi91dGlsaXRpZXMvcXVlcnlcIjtcbmltcG9ydCB7IGxhYmVsc0Zyb21KU09OLFxuICAgICAgICAgbGFiZWxzVG9MYWJlbHNKU09OLFxuICAgICAgICAgY29uc2VxdWVudEZyb21KU09OLFxuICAgICAgICAgc3VwcG9zaXRpb25zRnJvbUpTT04sXG4gICAgICAgICBzdWJzdGl0dXRpb25zRnJvbUpTT04sXG4gICAgICAgICBjb25zZXF1ZW50VG9Db25zZXF1ZW50SlNPTixcbiAgICAgICAgIHN1cHBvc2l0aW9uc1RvU3VwcG9zaXRpb25zSlNPTixcbiAgICAgICAgIHN1YnN0aXR1dGlvbnNUb1N1YnN0aXR1dGlvbnNKU09OIH0gZnJvbSBcIi4vdXRpbGl0aWVzL2pzb25cIjtcblxuY29uc3QgeyBleHRyYWN0LCByZXZlcnNlLCBiYWNrd2FyZHNFdmVyeSB9ID0gYXJyYXlVdGlsaXRpZXM7XG5cbmNvbnN0IHByb29mTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiLyovcHJvb2ZcIiksXG4gICAgICBsYWJlbE5vZGVzUXVlcnkgPSBub2Rlc1F1ZXJ5KFwiLyovbGFiZWxcIiksXG4gICAgICBjb25zZXF1ZW50Tm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiLyovY29uc2VxdWVudFwiKSxcbiAgICAgIHN1cHBvc2l0aW9uTm9kZXNRdWVyeSA9IG5vZGVzUXVlcnkoXCIvKi9zdXBwb3NpdGlvblwiKTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVG9wTGV2ZWxBc3NlcnRpb24ge1xuICBjb25zdHJ1Y3RvcihmaWxlQ29udGV4dCwgc3RyaW5nLCBsYWJlbHMsIHN1YnN0aXR1dGlvbnMsIHN1cHBvc2l0aW9ucywgY29uc2VxdWVudCwgcHJvb2YpIHtcbiAgICB0aGlzLmZpbGVDb250ZXh0ID0gZmlsZUNvbnRleHQ7XG4gICAgdGhpcy5zdHJpbmcgPSBzdHJpbmc7XG4gICAgdGhpcy5sYWJlbHMgPSBsYWJlbHM7XG4gICAgdGhpcy5zdWJzdGl0dXRpb25zID0gc3Vic3RpdHV0aW9ucztcbiAgICB0aGlzLnN1cHBvc2l0aW9ucyA9IHN1cHBvc2l0aW9ucztcbiAgICB0aGlzLmNvbnNlcXVlbnQgPSBjb25zZXF1ZW50O1xuICAgIHRoaXMucHJvb2YgPSBwcm9vZjtcbiAgfVxuXG4gIGdldEZpbGVDb250ZXh0KCkge1xuICAgIHJldHVybiB0aGlzLmZpbGVDb250ZXh0O1xuICB9XG5cbiAgZ2V0U3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLnN0cmluZztcbiAgfVxuXG4gIGdldExhYmVscygpIHtcbiAgICByZXR1cm4gdGhpcy5sYWJlbHM7XG4gIH1cblxuICBnZXRTdWJzdGl0dXRpb25zKCkge1xuICAgIHJldHVybiB0aGlzLnN1YnN0aXR1dGlvbnM7XG4gIH1cblxuICBnZXRTdXBwb3NpdGlvbnMoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3VwcG9zaXRpb25zO1xuICB9XG5cbiAgZ2V0Q29uc2VxdWVudCgpIHtcbiAgICByZXR1cm4gdGhpcy5jb25zZXF1ZW50O1xuICB9XG5cbiAgZ2V0UHJvb2YoKSB7XG4gICAgcmV0dXJuIHRoaXMucHJvb2Y7XG4gIH1cblxuICBnZXRTdGF0ZW1lbnQoKSB7IHJldHVybiB0aGlzLnByb29mLmdldFN0YXRlbWVudCgpOyB9XG5cbiAgbWF0Y2hNZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUpIHtcbiAgICBjb25zdCBtZXRhdmFyaWFibGVOb2RlTWF0Y2hlcyA9IHRoaXMubGFiZWxzLnNvbWUoKGxhYmVsKSA9PiB7XG4gICAgICBjb25zdCBtZXRhdmFyaWFibGVOb2RlTWF0Y2hlcyA9IGxhYmVsLm1hdGNoTWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlKTtcblxuICAgICAgaWYgKG1ldGF2YXJpYWJsZU5vZGVNYXRjaGVzKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIG1ldGF2YXJpYWJsZU5vZGVNYXRjaGVzO1xuICB9XG5cbiAgdW5pZnlTdGF0ZW1lbnQoc3RhdGVtZW50LCBsb2NhbENvbnRleHQpIHtcbiAgICBsZXQgc3RhdGVtZW50VW5pZmllZDtcblxuICAgIGNvbnN0IHsgU3Vic3RpdHV0aW9ucyB9ID0gc2hpbSxcbiAgICAgIHN1YnN0aXR1dGlvbnMgPSBTdWJzdGl0dXRpb25zLmZyb21Ob3RoaW5nKCksXG4gICAgICBjb25zZXF1ZW50VW5pZmllZCA9IHRoaXMudW5pZnlDb25zZXF1ZW50KHN0YXRlbWVudCwgc3Vic3RpdHV0aW9ucywgbG9jYWxDb250ZXh0KTtcblxuICAgIGlmIChjb25zZXF1ZW50VW5pZmllZCkge1xuICAgICAgY29uc3Qgc3VwcG9zaXRpb25zVW5pZmllZCA9IHRoaXMudW5pZnlTdXBwb3NpdGlvbihzdWJzdGl0dXRpb25zLCBsb2NhbENvbnRleHQpO1xuXG4gICAgICBpZiAoc3VwcG9zaXRpb25zVW5pZmllZCkge1xuICAgICAgICBjb25zdCBzdWJzdGl0dXRpb25zUmVzb2x2ZWQgPSBzdWJzdGl0dXRpb25zLmFyZVJlc29sdmVkKCk7XG5cbiAgICAgICAgc3RhdGVtZW50VW5pZmllZCA9IHN1YnN0aXR1dGlvbnNSZXNvbHZlZDsgLy8vXG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHN0YXRlbWVudFVuaWZpZWQ7XG4gIH1cblxuICB1bmlmeUNvbnNlcXVlbnQoc3RhdGVtZW50LCBzdWJzdGl0dXRpb25zLCBsb2NhbENvbnRleHQpIHtcbiAgICBsZXQgY29uc2VxdWVudFVuaWZpZWQ7XG5cbiAgICBjb25zdCBjb25zZXF1ZW50U3RyaW5nID0gdGhpcy5jb25zZXF1ZW50LmdldFN0cmluZygpO1xuXG4gICAgbG9jYWxDb250ZXh0LnRyYWNlKGBVbmlmeWluZyB0aGUgJyR7Y29uc2VxdWVudFN0cmluZ30nIGNvbnNlcXVlbnQuLi5gKTtcblxuICAgIGNvbnN0IHN0YXRlbWVudFVuaWZpZWQgPSB0aGlzLmNvbnNlcXVlbnQudW5pZnlTdGF0ZW1lbnQoc3RhdGVtZW50LCBzdWJzdGl0dXRpb25zLCBsb2NhbENvbnRleHQpOyAgLy8vXG5cbiAgICBjb25zZXF1ZW50VW5pZmllZCA9IHN0YXRlbWVudFVuaWZpZWQ7IC8vL1xuXG4gICAgaWYgKGNvbnNlcXVlbnRVbmlmaWVkKSB7XG4gICAgICBsb2NhbENvbnRleHQuZGVidWcoYC4uLnVuaWZpZWQgdGhlICcke2NvbnNlcXVlbnRTdHJpbmd9JyBjb25zZXF1ZW50YCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbnNlcXVlbnRVbmlmaWVkO1xuICB9XG5cbiAgdW5pZnlTdXBwb3NpdGlvbihzdWJzdGl0dXRpb25zLCBsb2NhbENvbnRleHQpIHtcbiAgICBsZXQgcHJvb2ZTdGVwcyA9IGxvY2FsQ29udGV4dC5nZXRQcm9vZlN0ZXBzKCk7XG5cbiAgICBwcm9vZlN0ZXBzID0gcmV2ZXJzZShwcm9vZlN0ZXBzKTsgLy8vXG5cbiAgICBjb25zdCBzdXBwb3NpdGlvbnNVbmlmaWVkID0gYmFja3dhcmRzRXZlcnkodGhpcy5zdXBwb3NpdGlvbnMsIChzdXBwb3NpdGlvbikgPT4ge1xuICAgICAgY29uc3Qgc3VwcG9zaXRpb25VbmlmaWVkID0gdGhpcy51bmlmeVByZW1pc2Uoc3VwcG9zaXRpb24sIHByb29mU3RlcHMsIHN1YnN0aXR1dGlvbnMsIGxvY2FsQ29udGV4dCk7XG5cbiAgICAgIGlmIChzdXBwb3NpdGlvblVuaWZpZWQpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gc3VwcG9zaXRpb25zVW5pZmllZDtcbiAgfVxuXG4gIHVuaWZ5UHJlbWlzZShzdXBwb3NpdGlvbiwgcHJvb2ZTdGVwcywgc3Vic3RpdHV0aW9ucywgbG9jYWxDb250ZXh0KSB7XG4gICAgbGV0IHN1cHBvc2l0aW9uVW5pZmllZCAgPWZhbHNlO1xuXG4gICAgY29uc3Qgc3VwcG9zaXRpb25TdHJpbmcgPSBzdXBwb3NpdGlvbi5nZXRTdHJpbmcoKTtcblxuICAgIGxvY2FsQ29udGV4dC50cmFjZShgVW5pZnlpbmcgdGhlICcke3N1cHBvc2l0aW9uU3RyaW5nfScgc3VwcG9zaXRpb24uLi5gKTtcblxuICAgIGNvbnN0IHN1cHBvc2l0aW9uUmVzb2x2ZWRJbmRlcGVuZGVudGx5ID0gc3VwcG9zaXRpb24ucmVzb2x2ZUluZGVwZW5kZW50bHkoc3Vic3RpdHV0aW9ucywgbG9jYWxDb250ZXh0KTtcblxuICAgIGlmIChzdXBwb3NpdGlvblJlc29sdmVkSW5kZXBlbmRlbnRseSkge1xuICAgICAgc3VwcG9zaXRpb25VbmlmaWVkID0gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgcHJvb2ZTdGVwID0gZXh0cmFjdChwcm9vZlN0ZXBzLCAocHJvb2ZTdGVwKSA9PiB7XG4gICAgICAgIGNvbnN0IHByb29mU3RlcFVuaWZpZWQgPSBzdXBwb3NpdGlvbi51bmlmeVByb29mU3RlcChwcm9vZlN0ZXAsIHN1YnN0aXR1dGlvbnMsIGxvY2FsQ29udGV4dCk7XG5cbiAgICAgICAgaWYgKHByb29mU3RlcFVuaWZpZWQpIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIGlmIChwcm9vZlN0ZXAgIT09IG51bGwpIHtcbiAgICAgICAgc3VwcG9zaXRpb25VbmlmaWVkID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoc3VwcG9zaXRpb25VbmlmaWVkKSB7XG4gICAgICBsb2NhbENvbnRleHQuZGVidWcoYC4uLnVuaWZpZWQgdGhlICcke3N1cHBvc2l0aW9uU3RyaW5nfScgc3VwcG9zaXRpb24uYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN1cHBvc2l0aW9uVW5pZmllZDtcbiAgfVxuXG4gIHRvSlNPTigpIHtcbiAgICBjb25zdCBsYWJlbHNKU09OID0gbGFiZWxzVG9MYWJlbHNKU09OKHRoaXMubGFiZWxzKSxcbiAgICAgICAgICBjb25zZXF1ZW50SlNPTiA9IGNvbnNlcXVlbnRUb0NvbnNlcXVlbnRKU09OKHRoaXMuY29uc2VxdWVudCksXG4gICAgICAgICAgc3VwcG9zaXRpb25zSlNPTiA9IHN1cHBvc2l0aW9uc1RvU3VwcG9zaXRpb25zSlNPTih0aGlzLnN1cHBvc2l0aW9ucyksXG4gICAgICAgICAgc3Vic3RpdHV0aW9uc0pTT04gPSBzdWJzdGl0dXRpb25zVG9TdWJzdGl0dXRpb25zSlNPTih0aGlzLnN1YnN0aXR1dGlvbnMpLFxuICAgICAgICAgIGxhYmVscyA9IGxhYmVsc0pTT04sICAvLy9cbiAgICAgICAgICBjb25zZXF1ZW50ID0gY29uc2VxdWVudEpTT04sICAvLy9cbiAgICAgICAgICBzdXBwb3NpdGlvbnMgPSBzdXBwb3NpdGlvbnNKU09OLCAgLy8vXG4gICAgICAgICAgc3Vic3RpdHV0aW9ucyA9IHN1YnN0aXR1dGlvbnNKU09OLCAgLy8vXG4gICAgICAgICAganNvbiA9IHtcbiAgICAgICAgICAgIGxhYmVscyxcbiAgICAgICAgICAgIGNvbnNlcXVlbnQsXG4gICAgICAgICAgICBzdXBwb3NpdGlvbnMsXG4gICAgICAgICAgICBzdWJzdGl0dXRpb25zXG4gICAgICAgICAgfTtcblxuICAgIHJldHVybiBqc29uO1xuICB9XG5cbiAgc3RhdGljIGZyb21KU09OKENsYXNzLCBqc29uLCBmaWxlQ29udGV4dCkge1xuICAgIGNvbnN0IGxhYmVscyA9IGxhYmVsc0Zyb21KU09OKGpzb24sIGZpbGVDb250ZXh0KSxcbiAgICAgICAgICBjb25zZXF1ZW50ID0gY29uc2VxdWVudEZyb21KU09OKGpzb24sIGZpbGVDb250ZXh0KSxcbiAgICAgICAgICBzdXBwb3NpdGlvbnMgPSBzdXBwb3NpdGlvbnNGcm9tSlNPTihqc29uLCBmaWxlQ29udGV4dCksXG4gICAgICAgICAgc3Vic3RpdHV0aW9ucyA9IHN1YnN0aXR1dGlvbnNGcm9tSlNPTihqc29uLCBmaWxlQ29udGV4dCksXG4gICAgICAgICAgc3RyaW5nID0gc3RyaW5nRnJvbUxhYmVscyhsYWJlbHMpLFxuICAgICAgICAgIHByb29mID0gbnVsbCxcbiAgICAgICAgICB0b3BMZXZlbEFzc2VydGlvbiA9IG5ldyBDbGFzcyhmaWxlQ29udGV4dCwgc3RyaW5nLCBsYWJlbHMsIHN1YnN0aXR1dGlvbnMsIHN1cHBvc2l0aW9ucywgY29uc2VxdWVudCwgcHJvb2YpO1xuXG4gICAgcmV0dXJuIHRvcExldmVsQXNzZXJ0aW9uO1xuICB9XG5cbiAgc3RhdGljIGZyb21Ob2RlKENsYXNzLCBub2RlLCBmaWxlQ29udGV4dCkge1xuICAgIGNvbnN0IHsgTGFiZWwsIFByb29mLCBDb25zZXF1ZW50LCBTdXBwb3NpdGlvbiwgU3Vic3RpdHV0aW9ucyB9ID0gc2hpbSxcbiAgICAgICAgICBwcm9vZk5vZGUgPSBwcm9vZk5vZGVRdWVyeShub2RlKSxcbiAgICAgICAgICBsYWJlbE5vZGVzID0gbGFiZWxOb2Rlc1F1ZXJ5KG5vZGUpLFxuICAgICAgICAgIGNvbnNlcXVlbnROb2RlID0gY29uc2VxdWVudE5vZGVRdWVyeShub2RlKSxcbiAgICAgICAgICBzdXBwb3NpdGlvbk5vZGVzID0gc3VwcG9zaXRpb25Ob2Rlc1F1ZXJ5KG5vZGUpLFxuICAgICAgICAgIGxhYmVscyA9IGxhYmVsTm9kZXMubWFwKChsYWJlbE5vZGUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGxhYmVsID0gTGFiZWwuZnJvbUxhYmVsTm9kZShsYWJlbE5vZGUsIGZpbGVDb250ZXh0KTtcblxuICAgICAgICAgICAgcmV0dXJuIGxhYmVsO1xuICAgICAgICAgIH0pLFxuICAgICAgICAgIHN1YnN0aXR1dGlvbnMgPSBTdWJzdGl0dXRpb25zLmZyb21Ob3RoaW5nKCksXG4gICAgICAgICAgc3VwcG9zaXRpb25zID0gc3VwcG9zaXRpb25Ob2Rlcy5tYXAoKHN1cHBvc2l0aW9uTm9kZSkgPT4ge1xuICAgICAgICAgICAgY29uc3Qgc3VwcG9zaXRpb24gPSBTdXBwb3NpdGlvbi5mcm9tU3VwcG9zaXRpb25Ob2RlKHN1cHBvc2l0aW9uTm9kZSwgZmlsZUNvbnRleHQpO1xuXG4gICAgICAgICAgICByZXR1cm4gc3VwcG9zaXRpb247XG4gICAgICAgICAgfSksXG4gICAgICAgICAgY29uc2VxdWVudCA9IENvbnNlcXVlbnQuZnJvbUNvbnNlcXVlbnROb2RlKGNvbnNlcXVlbnROb2RlLCBmaWxlQ29udGV4dCksXG4gICAgICAgICAgcHJvb2YgPSBQcm9vZi5mcm9tUHJvb2ZOb2RlKHByb29mTm9kZSwgZmlsZUNvbnRleHQpLFxuICAgICAgICAgIHN0cmluZyA9IHN0cmluZ0Zyb21MYWJlbHMobGFiZWxzKSxcbiAgICAgICAgICBtZXRhTGVtbWEgPSBuZXcgQ2xhc3MoZmlsZUNvbnRleHQsIHN0cmluZywgbGFiZWxzLCBzdWJzdGl0dXRpb25zLCBzdXBwb3NpdGlvbnMsIGNvbnNlcXVlbnQsIHByb29mKTtcblxuICAgIHJldHVybiBtZXRhTGVtbWE7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN0cmluZ0Zyb21MYWJlbHMobGFiZWxzKSB7XG4gIGNvbnN0IHN0cmluZyA9IGxhYmVscy5yZWR1Y2UoKHN0cmluZywgbGFiZWwpID0+IHtcbiAgICBjb25zdCBsYWJlbFN0cmluZyA9IGxhYmVsLmdldFN0cmluZygpO1xuXG4gICAgc3RyaW5nID0gKHN0cmluZyA9PT0gRU1QVFlfU1RSSU5HKSA/XG4gICAgICAgICAgICAgICBsYWJlbFN0cmluZzogLy8vXG4gICAgICAgICAgICAgICAgIGAke2xhYmVsU3RyaW5nfSwgJHtsYWJlbFN0cmluZ31gO1xuXG4gICAgcmV0dXJuIHN0cmluZztcbiAgfSwgRU1QVFlfU1RSSU5HKTtcblxuICByZXR1cm4gc3RyaW5nO1xufVxuXG4iXSwibmFtZXMiOlsiVG9wTGV2ZWxBc3NlcnRpb24iLCJzdHJpbmdGcm9tTGFiZWxzIiwiZXh0cmFjdCIsImFycmF5VXRpbGl0aWVzIiwicmV2ZXJzZSIsImJhY2t3YXJkc0V2ZXJ5IiwicHJvb2ZOb2RlUXVlcnkiLCJub2RlUXVlcnkiLCJsYWJlbE5vZGVzUXVlcnkiLCJub2Rlc1F1ZXJ5IiwiY29uc2VxdWVudE5vZGVRdWVyeSIsInN1cHBvc2l0aW9uTm9kZXNRdWVyeSIsImZpbGVDb250ZXh0Iiwic3RyaW5nIiwibGFiZWxzIiwic3Vic3RpdHV0aW9ucyIsInN1cHBvc2l0aW9ucyIsImNvbnNlcXVlbnQiLCJwcm9vZiIsImdldEZpbGVDb250ZXh0IiwiZ2V0U3RyaW5nIiwiZ2V0TGFiZWxzIiwiZ2V0U3Vic3RpdHV0aW9ucyIsImdldFN1cHBvc2l0aW9ucyIsImdldENvbnNlcXVlbnQiLCJnZXRQcm9vZiIsImdldFN0YXRlbWVudCIsIm1hdGNoTWV0YXZhcmlhYmxlTm9kZSIsIm1ldGF2YXJpYWJsZU5vZGUiLCJtZXRhdmFyaWFibGVOb2RlTWF0Y2hlcyIsInNvbWUiLCJsYWJlbCIsInVuaWZ5U3RhdGVtZW50Iiwic3RhdGVtZW50IiwibG9jYWxDb250ZXh0Iiwic3RhdGVtZW50VW5pZmllZCIsIlN1YnN0aXR1dGlvbnMiLCJzaGltIiwiZnJvbU5vdGhpbmciLCJjb25zZXF1ZW50VW5pZmllZCIsInVuaWZ5Q29uc2VxdWVudCIsInN1cHBvc2l0aW9uc1VuaWZpZWQiLCJ1bmlmeVN1cHBvc2l0aW9uIiwic3Vic3RpdHV0aW9uc1Jlc29sdmVkIiwiYXJlUmVzb2x2ZWQiLCJjb25zZXF1ZW50U3RyaW5nIiwidHJhY2UiLCJkZWJ1ZyIsInByb29mU3RlcHMiLCJnZXRQcm9vZlN0ZXBzIiwic3VwcG9zaXRpb24iLCJzdXBwb3NpdGlvblVuaWZpZWQiLCJ1bmlmeVByZW1pc2UiLCJzdXBwb3NpdGlvblN0cmluZyIsInN1cHBvc2l0aW9uUmVzb2x2ZWRJbmRlcGVuZGVudGx5IiwicmVzb2x2ZUluZGVwZW5kZW50bHkiLCJwcm9vZlN0ZXAiLCJwcm9vZlN0ZXBVbmlmaWVkIiwidW5pZnlQcm9vZlN0ZXAiLCJ0b0pTT04iLCJsYWJlbHNKU09OIiwibGFiZWxzVG9MYWJlbHNKU09OIiwiY29uc2VxdWVudEpTT04iLCJjb25zZXF1ZW50VG9Db25zZXF1ZW50SlNPTiIsInN1cHBvc2l0aW9uc0pTT04iLCJzdXBwb3NpdGlvbnNUb1N1cHBvc2l0aW9uc0pTT04iLCJzdWJzdGl0dXRpb25zSlNPTiIsInN1YnN0aXR1dGlvbnNUb1N1YnN0aXR1dGlvbnNKU09OIiwianNvbiIsImZyb21KU09OIiwiQ2xhc3MiLCJsYWJlbHNGcm9tSlNPTiIsImNvbnNlcXVlbnRGcm9tSlNPTiIsInN1cHBvc2l0aW9uc0Zyb21KU09OIiwic3Vic3RpdHV0aW9uc0Zyb21KU09OIiwidG9wTGV2ZWxBc3NlcnRpb24iLCJmcm9tTm9kZSIsIm5vZGUiLCJMYWJlbCIsIlByb29mIiwiQ29uc2VxdWVudCIsIlN1cHBvc2l0aW9uIiwicHJvb2ZOb2RlIiwibGFiZWxOb2RlcyIsImNvbnNlcXVlbnROb2RlIiwic3VwcG9zaXRpb25Ob2RlcyIsIm1hcCIsImxhYmVsTm9kZSIsImZyb21MYWJlbE5vZGUiLCJzdXBwb3NpdGlvbk5vZGUiLCJmcm9tU3VwcG9zaXRpb25Ob2RlIiwiZnJvbUNvbnNlcXVlbnROb2RlIiwiZnJvbVByb29mTm9kZSIsIm1ldGFMZW1tYSIsInJlZHVjZSIsImxhYmVsU3RyaW5nIiwiRU1QVFlfU1RSSU5HIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7O2VBd0JxQkE7O0lBb01MQyxnQkFBZ0I7ZUFBaEJBOzs7eUJBMU5lOzJEQUVkO3lCQUVZO3FCQUNTO29CQVFXOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRWpELElBQVFDLFVBQXFDQyx5QkFBYyxDQUFuREQsU0FBU0UsVUFBNEJELHlCQUFjLENBQTFDQyxTQUFTQyxpQkFBbUJGLHlCQUFjLENBQWpDRTtBQUUxQixJQUFNQyxpQkFBaUJDLElBQUFBLGdCQUFTLEVBQUMsYUFDM0JDLGtCQUFrQkMsSUFBQUEsaUJBQVUsRUFBQyxhQUM3QkMsc0JBQXNCSCxJQUFBQSxnQkFBUyxFQUFDLGtCQUNoQ0ksd0JBQXdCRixJQUFBQSxpQkFBVSxFQUFDO0FBRTFCLElBQUEsQUFBTVQsa0NBQU47YUFBTUEsa0JBQ1BZLFdBQVcsRUFBRUMsTUFBTSxFQUFFQyxNQUFNLEVBQUVDLGFBQWEsRUFBRUMsWUFBWSxFQUFFQyxVQUFVLEVBQUVDLEtBQUs7Z0NBRHBFbEI7UUFFakIsSUFBSSxDQUFDWSxXQUFXLEdBQUdBO1FBQ25CLElBQUksQ0FBQ0MsTUFBTSxHQUFHQTtRQUNkLElBQUksQ0FBQ0MsTUFBTSxHQUFHQTtRQUNkLElBQUksQ0FBQ0MsYUFBYSxHQUFHQTtRQUNyQixJQUFJLENBQUNDLFlBQVksR0FBR0E7UUFDcEIsSUFBSSxDQUFDQyxVQUFVLEdBQUdBO1FBQ2xCLElBQUksQ0FBQ0MsS0FBSyxHQUFHQTs7a0JBUklsQjs7WUFXbkJtQixLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNQLFdBQVc7WUFDekI7OztZQUVBUSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNQLE1BQU07WUFDcEI7OztZQUVBUSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNQLE1BQU07WUFDcEI7OztZQUVBUSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNQLGFBQWE7WUFDM0I7OztZQUVBUSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNQLFlBQVk7WUFDMUI7OztZQUVBUSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNQLFVBQVU7WUFDeEI7OztZQUVBUSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNQLEtBQUs7WUFDbkI7OztZQUVBUSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQWlCLE9BQU8sSUFBSSxDQUFDUixLQUFLLENBQUNRLFlBQVk7WUFBSTs7O1lBRW5EQyxLQUFBQTttQkFBQUEsU0FBQUEsc0JBQXNCQyxnQkFBZ0I7Z0JBQ3BDLElBQU1DLDBCQUEwQixJQUFJLENBQUNmLE1BQU0sQ0FBQ2dCLElBQUksQ0FBQyxTQUFDQztvQkFDaEQsSUFBTUYsMEJBQTBCRSxNQUFNSixxQkFBcUIsQ0FBQ0M7b0JBRTVELElBQUlDLHlCQUF5Qjt3QkFDM0IsT0FBTztvQkFDVDtnQkFDRjtnQkFFQSxPQUFPQTtZQUNUOzs7WUFFQUcsS0FBQUE7bUJBQUFBLFNBQUFBLGVBQWVDLFNBQVMsRUFBRUMsWUFBWTtnQkFDcEMsSUFBSUM7Z0JBRUosSUFBTSxBQUFFQyxnQkFBa0JDLGFBQUksQ0FBdEJELGVBQ05yQixnQkFBZ0JxQixjQUFjRSxXQUFXLElBQ3pDQyxvQkFBb0IsSUFBSSxDQUFDQyxlQUFlLENBQUNQLFdBQVdsQixlQUFlbUI7Z0JBRXJFLElBQUlLLG1CQUFtQjtvQkFDckIsSUFBTUUsc0JBQXNCLElBQUksQ0FBQ0MsZ0JBQWdCLENBQUMzQixlQUFlbUI7b0JBRWpFLElBQUlPLHFCQUFxQjt3QkFDdkIsSUFBTUUsd0JBQXdCNUIsY0FBYzZCLFdBQVc7d0JBRXZEVCxtQkFBbUJRLHVCQUF1QixHQUFHO29CQUMvQztnQkFDRjtnQkFFQSxPQUFPUjtZQUNUOzs7WUFFQUssS0FBQUE7bUJBQUFBLFNBQUFBLGdCQUFnQlAsU0FBUyxFQUFFbEIsYUFBYSxFQUFFbUIsWUFBWTtnQkFDcEQsSUFBSUs7Z0JBRUosSUFBTU0sbUJBQW1CLElBQUksQ0FBQzVCLFVBQVUsQ0FBQ0csU0FBUztnQkFFbERjLGFBQWFZLEtBQUssQ0FBQyxBQUFDLGlCQUFpQyxPQUFqQkQsa0JBQWlCO2dCQUVyRCxJQUFNVixtQkFBbUIsSUFBSSxDQUFDbEIsVUFBVSxDQUFDZSxjQUFjLENBQUNDLFdBQVdsQixlQUFlbUIsZUFBZ0IsR0FBRztnQkFFckdLLG9CQUFvQkosa0JBQWtCLEdBQUc7Z0JBRXpDLElBQUlJLG1CQUFtQjtvQkFDckJMLGFBQWFhLEtBQUssQ0FBQyxBQUFDLG1CQUFtQyxPQUFqQkYsa0JBQWlCO2dCQUN6RDtnQkFFQSxPQUFPTjtZQUNUOzs7WUFFQUcsS0FBQUE7bUJBQUFBLFNBQUFBLGlCQUFpQjNCLGFBQWEsRUFBRW1CLFlBQVk7O2dCQUMxQyxJQUFJYyxhQUFhZCxhQUFhZSxhQUFhO2dCQUUzQ0QsYUFBYTVDLFFBQVE0QyxhQUFhLEdBQUc7Z0JBRXJDLElBQU1QLHNCQUFzQnBDLGVBQWUsSUFBSSxDQUFDVyxZQUFZLEVBQUUsU0FBQ2tDO29CQUM3RCxJQUFNQyxxQkFBcUIsTUFBS0MsWUFBWSxDQUFDRixhQUFhRixZQUFZakMsZUFBZW1CO29CQUVyRixJQUFJaUIsb0JBQW9CO3dCQUN0QixPQUFPO29CQUNUO2dCQUNGO2dCQUVBLE9BQU9WO1lBQ1Q7OztZQUVBVyxLQUFBQTttQkFBQUEsU0FBQUEsYUFBYUYsV0FBVyxFQUFFRixVQUFVLEVBQUVqQyxhQUFhLEVBQUVtQixZQUFZO2dCQUMvRCxJQUFJaUIscUJBQXFCO2dCQUV6QixJQUFNRSxvQkFBb0JILFlBQVk5QixTQUFTO2dCQUUvQ2MsYUFBYVksS0FBSyxDQUFDLEFBQUMsaUJBQWtDLE9BQWxCTyxtQkFBa0I7Z0JBRXRELElBQU1DLG1DQUFtQ0osWUFBWUssb0JBQW9CLENBQUN4QyxlQUFlbUI7Z0JBRXpGLElBQUlvQixrQ0FBa0M7b0JBQ3BDSCxxQkFBcUI7Z0JBQ3ZCLE9BQU87b0JBQ0wsSUFBTUssWUFBWXRELFFBQVE4QyxZQUFZLFNBQUNRO3dCQUNyQyxJQUFNQyxtQkFBbUJQLFlBQVlRLGNBQWMsQ0FBQ0YsV0FBV3pDLGVBQWVtQjt3QkFFOUUsSUFBSXVCLGtCQUFrQjs0QkFDcEIsT0FBTzt3QkFDVDtvQkFDRjtvQkFFQSxJQUFJRCxjQUFjLE1BQU07d0JBQ3RCTCxxQkFBcUI7b0JBQ3ZCO2dCQUNGO2dCQUVBLElBQUlBLG9CQUFvQjtvQkFDdEJqQixhQUFhYSxLQUFLLENBQUMsQUFBQyxtQkFBb0MsT0FBbEJNLG1CQUFrQjtnQkFDMUQ7Z0JBRUEsT0FBT0Y7WUFDVDs7O1lBRUFRLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNQyxhQUFhQyxJQUFBQSx3QkFBa0IsRUFBQyxJQUFJLENBQUMvQyxNQUFNLEdBQzNDZ0QsaUJBQWlCQyxJQUFBQSxnQ0FBMEIsRUFBQyxJQUFJLENBQUM5QyxVQUFVLEdBQzNEK0MsbUJBQW1CQyxJQUFBQSxvQ0FBOEIsRUFBQyxJQUFJLENBQUNqRCxZQUFZLEdBQ25Fa0Qsb0JBQW9CQyxJQUFBQSxzQ0FBZ0MsRUFBQyxJQUFJLENBQUNwRCxhQUFhLEdBQ3ZFRCxTQUFTOEMsWUFDVDNDLGFBQWE2QyxnQkFDYjlDLGVBQWVnRCxrQkFDZmpELGdCQUFnQm1ELG1CQUNoQkUsT0FBTztvQkFDTHRELFFBQUFBO29CQUNBRyxZQUFBQTtvQkFDQUQsY0FBQUE7b0JBQ0FELGVBQUFBO2dCQUNGO2dCQUVOLE9BQU9xRDtZQUNUOzs7O1lBRU9DLEtBQUFBO21CQUFQLFNBQU9BLFNBQVNDLEtBQUssRUFBRUYsSUFBSSxFQUFFeEQsV0FBVztnQkFDdEMsSUFBTUUsU0FBU3lELElBQUFBLG9CQUFjLEVBQUNILE1BQU14RCxjQUM5QkssYUFBYXVELElBQUFBLHdCQUFrQixFQUFDSixNQUFNeEQsY0FDdENJLGVBQWV5RCxJQUFBQSwwQkFBb0IsRUFBQ0wsTUFBTXhELGNBQzFDRyxnQkFBZ0IyRCxJQUFBQSwyQkFBcUIsRUFBQ04sTUFBTXhELGNBQzVDQyxTQUFTWixpQkFBaUJhLFNBQzFCSSxRQUFRLE1BQ1J5RCxvQkFBb0IsSUFBSUwsTUFBTTFELGFBQWFDLFFBQVFDLFFBQVFDLGVBQWVDLGNBQWNDLFlBQVlDO2dCQUUxRyxPQUFPeUQ7WUFDVDs7O1lBRU9DLEtBQUFBO21CQUFQLFNBQU9BLFNBQVNOLEtBQUssRUFBRU8sSUFBSSxFQUFFakUsV0FBVztnQkFDdEMsSUFBUWtFLFFBQXlEekMsYUFBSSxDQUE3RHlDLE9BQU9DLFFBQWtEMUMsYUFBSSxDQUF0RDBDLE9BQU9DLGFBQTJDM0MsYUFBSSxDQUEvQzJDLFlBQVlDLGNBQStCNUMsYUFBSSxDQUFuQzRDLGFBQWE3QyxnQkFBa0JDLGFBQUksQ0FBdEJELGVBQ3pDOEMsWUFBWTVFLGVBQWV1RSxPQUMzQk0sYUFBYTNFLGdCQUFnQnFFLE9BQzdCTyxpQkFBaUIxRSxvQkFBb0JtRSxPQUNyQ1EsbUJBQW1CMUUsc0JBQXNCa0UsT0FDekMvRCxTQUFTcUUsV0FBV0csR0FBRyxDQUFDLFNBQUNDO29CQUN2QixJQUFNeEQsUUFBUStDLE1BQU1VLGFBQWEsQ0FBQ0QsV0FBVzNFO29CQUU3QyxPQUFPbUI7Z0JBQ1QsSUFDQWhCLGdCQUFnQnFCLGNBQWNFLFdBQVcsSUFDekN0QixlQUFlcUUsaUJBQWlCQyxHQUFHLENBQUMsU0FBQ0c7b0JBQ25DLElBQU12QyxjQUFjK0IsWUFBWVMsbUJBQW1CLENBQUNELGlCQUFpQjdFO29CQUVyRSxPQUFPc0M7Z0JBQ1QsSUFDQWpDLGFBQWErRCxXQUFXVyxrQkFBa0IsQ0FBQ1AsZ0JBQWdCeEUsY0FDM0RNLFFBQVE2RCxNQUFNYSxhQUFhLENBQUNWLFdBQVd0RSxjQUN2Q0MsU0FBU1osaUJBQWlCYSxTQUMxQitFLFlBQVksSUFBSXZCLE1BQU0xRCxhQUFhQyxRQUFRQyxRQUFRQyxlQUFlQyxjQUFjQyxZQUFZQztnQkFFbEcsT0FBTzJFO1lBQ1Q7OztXQWpNbUI3Rjs7QUFvTWQsU0FBU0MsaUJBQWlCYSxNQUFNO0lBQ3JDLElBQU1ELFNBQVNDLE9BQU9nRixNQUFNLENBQUMsU0FBQ2pGLFFBQVFrQjtRQUNwQyxJQUFNZ0UsY0FBY2hFLE1BQU1YLFNBQVM7UUFFbkNQLFNBQVMsQUFBQ0EsV0FBV21GLHVCQUFZLEdBQ3RCRCxjQUNFLEFBQUMsR0FBa0JBLE9BQWhCQSxhQUFZLE1BQWdCLE9BQVpBO1FBRWhDLE9BQU9sRjtJQUNULEdBQUdtRix1QkFBWTtJQUVmLE9BQU9uRjtBQUNUIn0=