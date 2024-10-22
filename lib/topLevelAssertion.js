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
var TopLevelAssertion = /*#__PURE__*/ function() {
    function TopLevelAssertion(fileContext, string, labels, suppositions, consequent, proof) {
        _class_call_check(this, TopLevelAssertion);
        this.fileContext = fileContext;
        this.string = string;
        this.labels = labels;
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
                var labelsJSON = (0, _json.labelsToLabelsJSON)(this.labels), consequentJSON = (0, _json.consequentToConsequentJSON)(this.consequent), suppositionsJSON = (0, _json.suppositionsToSuppositionsJSON)(this.suppositions), labels = labelsJSON, consequent = consequentJSON, suppositions = suppositionsJSON, json = {
                    labels: labels,
                    consequent: consequent,
                    suppositions: suppositions
                };
                return json;
            }
        }
    ], [
        {
            key: "fromJSON",
            value: function fromJSON(Class, json, fileContext) {
                var labels = (0, _json.labelsFromJSON)(json, fileContext), consequent = (0, _json.consequentFromJSON)(json, fileContext), suppositions = (0, _json.suppositionsFromJSON)(json, fileContext), string = stringFromLabels(labels), proof = null, topLevelAssertion = new Class(fileContext, string, labels, suppositions, consequent, proof);
                return topLevelAssertion;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy90b3BMZXZlbEFzc2VydGlvbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgYXJyYXlVdGlsaXRpZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5cbmltcG9ydCBzaGltIGZyb20gXCIuL3NoaW1cIjtcblxuaW1wb3J0IHsgRU1QVFlfU1RSSU5HIH0gZnJvbSBcIi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgeyBsYWJlbHNGcm9tSlNPTixcbiAgICAgICAgIGxhYmVsc1RvTGFiZWxzSlNPTixcbiAgICAgICAgIGNvbnNlcXVlbnRGcm9tSlNPTixcbiAgICAgICAgIHN1cHBvc2l0aW9uc0Zyb21KU09OLFxuICAgICAgICAgY29uc2VxdWVudFRvQ29uc2VxdWVudEpTT04sXG4gICAgICAgICBzdXBwb3NpdGlvbnNUb1N1cHBvc2l0aW9uc0pTT04gfSBmcm9tIFwiLi91dGlsaXRpZXMvanNvblwiO1xuXG5jb25zdCB7IGV4dHJhY3QsIHJldmVyc2UsIGJhY2t3YXJkc0V2ZXJ5IH0gPSBhcnJheVV0aWxpdGllcztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVG9wTGV2ZWxBc3NlcnRpb24ge1xuICBjb25zdHJ1Y3RvcihmaWxlQ29udGV4dCwgc3RyaW5nLCBsYWJlbHMsIHN1cHBvc2l0aW9ucywgY29uc2VxdWVudCwgcHJvb2YpIHtcbiAgICB0aGlzLmZpbGVDb250ZXh0ID0gZmlsZUNvbnRleHQ7XG4gICAgdGhpcy5zdHJpbmcgPSBzdHJpbmc7XG4gICAgdGhpcy5sYWJlbHMgPSBsYWJlbHM7XG4gICAgdGhpcy5zdXBwb3NpdGlvbnMgPSBzdXBwb3NpdGlvbnM7XG4gICAgdGhpcy5jb25zZXF1ZW50ID0gY29uc2VxdWVudDtcbiAgICB0aGlzLnByb29mID0gcHJvb2Y7XG4gIH1cblxuICBnZXRGaWxlQ29udGV4dCgpIHtcbiAgICByZXR1cm4gdGhpcy5maWxlQ29udGV4dDtcbiAgfVxuXG4gIGdldFN0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5zdHJpbmc7XG4gIH1cblxuICBnZXRMYWJlbHMoKSB7XG4gICAgcmV0dXJuIHRoaXMubGFiZWxzO1xuICB9XG5cbiAgZ2V0U3VwcG9zaXRpb25zKCkge1xuICAgIHJldHVybiB0aGlzLnN1cHBvc2l0aW9ucztcbiAgfVxuXG4gIGdldENvbnNlcXVlbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuY29uc2VxdWVudDtcbiAgfVxuXG4gIGdldFByb29mKCkge1xuICAgIHJldHVybiB0aGlzLnByb29mO1xuICB9XG5cbiAgbWF0Y2hNZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUpIHtcbiAgICBjb25zdCBtZXRhdmFyaWFibGVOb2RlTWF0Y2hlcyA9IHRoaXMubGFiZWxzLnNvbWUoKGxhYmVsKSA9PiB7XG4gICAgICBjb25zdCBtZXRhdmFyaWFibGVOb2RlTWF0Y2hlcyA9IGxhYmVsLm1hdGNoTWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlKTtcblxuICAgICAgaWYgKG1ldGF2YXJpYWJsZU5vZGVNYXRjaGVzKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIG1ldGF2YXJpYWJsZU5vZGVNYXRjaGVzO1xuICB9XG5cbiAgdW5pZnlTdGF0ZW1lbnQoc3RhdGVtZW50LCBsb2NhbENvbnRleHQpIHtcbiAgICBsZXQgc3RhdGVtZW50VW5pZmllZDtcblxuICAgIGNvbnN0IHsgU3Vic3RpdHV0aW9ucyB9ID0gc2hpbSxcbiAgICAgIHN1YnN0aXR1dGlvbnMgPSBTdWJzdGl0dXRpb25zLmZyb21Ob3RoaW5nKCksXG4gICAgICBjb25zZXF1ZW50VW5pZmllZCA9IHRoaXMudW5pZnlDb25zZXF1ZW50KHN0YXRlbWVudCwgc3Vic3RpdHV0aW9ucywgbG9jYWxDb250ZXh0KTtcblxuICAgIGlmIChjb25zZXF1ZW50VW5pZmllZCkge1xuICAgICAgY29uc3Qgc3VwcG9zaXRpb25zVW5pZmllZCA9IHRoaXMudW5pZnlTdXBwb3NpdGlvbihzdWJzdGl0dXRpb25zLCBsb2NhbENvbnRleHQpO1xuXG4gICAgICBpZiAoc3VwcG9zaXRpb25zVW5pZmllZCkge1xuICAgICAgICBjb25zdCBzdWJzdGl0dXRpb25zUmVzb2x2ZWQgPSBzdWJzdGl0dXRpb25zLmFyZVJlc29sdmVkKCk7XG5cbiAgICAgICAgc3RhdGVtZW50VW5pZmllZCA9IHN1YnN0aXR1dGlvbnNSZXNvbHZlZDsgLy8vXG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHN0YXRlbWVudFVuaWZpZWQ7XG4gIH1cblxuICB1bmlmeUNvbnNlcXVlbnQoc3RhdGVtZW50LCBzdWJzdGl0dXRpb25zLCBsb2NhbENvbnRleHQpIHtcbiAgICBsZXQgY29uc2VxdWVudFVuaWZpZWQ7XG5cbiAgICBjb25zdCBjb25zZXF1ZW50U3RyaW5nID0gdGhpcy5jb25zZXF1ZW50LmdldFN0cmluZygpO1xuXG4gICAgbG9jYWxDb250ZXh0LnRyYWNlKGBVbmlmeWluZyB0aGUgJyR7Y29uc2VxdWVudFN0cmluZ30nIGNvbnNlcXVlbnQuLi5gKTtcblxuICAgIGNvbnN0IHN0YXRlbWVudFVuaWZpZWQgPSB0aGlzLmNvbnNlcXVlbnQudW5pZnlTdGF0ZW1lbnQoc3RhdGVtZW50LCBzdWJzdGl0dXRpb25zLCBsb2NhbENvbnRleHQpOyAgLy8vXG5cbiAgICBjb25zZXF1ZW50VW5pZmllZCA9IHN0YXRlbWVudFVuaWZpZWQ7IC8vL1xuXG4gICAgaWYgKGNvbnNlcXVlbnRVbmlmaWVkKSB7XG4gICAgICBsb2NhbENvbnRleHQuZGVidWcoYC4uLnVuaWZpZWQgdGhlICcke2NvbnNlcXVlbnRTdHJpbmd9JyBjb25zZXF1ZW50YCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbnNlcXVlbnRVbmlmaWVkO1xuICB9XG5cbiAgdW5pZnlTdXBwb3NpdGlvbihzdWJzdGl0dXRpb25zLCBsb2NhbENvbnRleHQpIHtcbiAgICBsZXQgcHJvb2ZTdGVwcyA9IGxvY2FsQ29udGV4dC5nZXRQcm9vZlN0ZXBzKCk7XG5cbiAgICBwcm9vZlN0ZXBzID0gcmV2ZXJzZShwcm9vZlN0ZXBzKTsgLy8vXG5cbiAgICBjb25zdCBzdXBwb3NpdGlvbnNVbmlmaWVkID0gYmFja3dhcmRzRXZlcnkodGhpcy5zdXBwb3NpdGlvbnMsIChzdXBwb3NpdGlvbikgPT4ge1xuICAgICAgY29uc3Qgc3VwcG9zaXRpb25VbmlmaWVkID0gdGhpcy51bmlmeVByZW1pc2Uoc3VwcG9zaXRpb24sIHByb29mU3RlcHMsIHN1YnN0aXR1dGlvbnMsIGxvY2FsQ29udGV4dCk7XG5cbiAgICAgIGlmIChzdXBwb3NpdGlvblVuaWZpZWQpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gc3VwcG9zaXRpb25zVW5pZmllZDtcbiAgfVxuXG4gIHVuaWZ5UHJlbWlzZShzdXBwb3NpdGlvbiwgcHJvb2ZTdGVwcywgc3Vic3RpdHV0aW9ucywgbG9jYWxDb250ZXh0KSB7XG4gICAgbGV0IHN1cHBvc2l0aW9uVW5pZmllZCAgPWZhbHNlO1xuXG4gICAgY29uc3Qgc3VwcG9zaXRpb25TdHJpbmcgPSBzdXBwb3NpdGlvbi5nZXRTdHJpbmcoKTtcblxuICAgIGxvY2FsQ29udGV4dC50cmFjZShgVW5pZnlpbmcgdGhlICcke3N1cHBvc2l0aW9uU3RyaW5nfScgc3VwcG9zaXRpb24uLi5gKTtcblxuICAgIGNvbnN0IHN1cHBvc2l0aW9uUmVzb2x2ZWRJbmRlcGVuZGVudGx5ID0gc3VwcG9zaXRpb24ucmVzb2x2ZUluZGVwZW5kZW50bHkoc3Vic3RpdHV0aW9ucywgbG9jYWxDb250ZXh0KTtcblxuICAgIGlmIChzdXBwb3NpdGlvblJlc29sdmVkSW5kZXBlbmRlbnRseSkge1xuICAgICAgc3VwcG9zaXRpb25VbmlmaWVkID0gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgcHJvb2ZTdGVwID0gZXh0cmFjdChwcm9vZlN0ZXBzLCAocHJvb2ZTdGVwKSA9PiB7XG4gICAgICAgIGNvbnN0IHByb29mU3RlcFVuaWZpZWQgPSBzdXBwb3NpdGlvbi51bmlmeVByb29mU3RlcChwcm9vZlN0ZXAsIHN1YnN0aXR1dGlvbnMsIGxvY2FsQ29udGV4dCk7XG5cbiAgICAgICAgaWYgKHByb29mU3RlcFVuaWZpZWQpIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIGlmIChwcm9vZlN0ZXAgIT09IG51bGwpIHtcbiAgICAgICAgc3VwcG9zaXRpb25VbmlmaWVkID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoc3VwcG9zaXRpb25VbmlmaWVkKSB7XG4gICAgICBsb2NhbENvbnRleHQuZGVidWcoYC4uLnVuaWZpZWQgdGhlICcke3N1cHBvc2l0aW9uU3RyaW5nfScgc3VwcG9zaXRpb24uYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN1cHBvc2l0aW9uVW5pZmllZDtcbiAgfVxuXG4gIHRvSlNPTigpIHtcbiAgICBjb25zdCBsYWJlbHNKU09OID0gbGFiZWxzVG9MYWJlbHNKU09OKHRoaXMubGFiZWxzKSxcbiAgICAgICAgICBjb25zZXF1ZW50SlNPTiA9IGNvbnNlcXVlbnRUb0NvbnNlcXVlbnRKU09OKHRoaXMuY29uc2VxdWVudCksXG4gICAgICAgICAgc3VwcG9zaXRpb25zSlNPTiA9IHN1cHBvc2l0aW9uc1RvU3VwcG9zaXRpb25zSlNPTih0aGlzLnN1cHBvc2l0aW9ucyksXG4gICAgICAgICAgbGFiZWxzID0gbGFiZWxzSlNPTiwgIC8vL1xuICAgICAgICAgIGNvbnNlcXVlbnQgPSBjb25zZXF1ZW50SlNPTiwgIC8vL1xuICAgICAgICAgIHN1cHBvc2l0aW9ucyA9IHN1cHBvc2l0aW9uc0pTT04sICAvLy9cbiAgICAgICAgICBqc29uID0ge1xuICAgICAgICAgICAgbGFiZWxzLFxuICAgICAgICAgICAgY29uc2VxdWVudCxcbiAgICAgICAgICAgIHN1cHBvc2l0aW9uc1xuICAgICAgICAgIH07XG5cbiAgICByZXR1cm4ganNvbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tSlNPTihDbGFzcywganNvbiwgZmlsZUNvbnRleHQpIHtcbiAgICBjb25zdCBsYWJlbHMgPSBsYWJlbHNGcm9tSlNPTihqc29uLCBmaWxlQ29udGV4dCksXG4gICAgICAgICAgY29uc2VxdWVudCA9IGNvbnNlcXVlbnRGcm9tSlNPTihqc29uLCBmaWxlQ29udGV4dCksXG4gICAgICAgICAgc3VwcG9zaXRpb25zID0gc3VwcG9zaXRpb25zRnJvbUpTT04oanNvbiwgZmlsZUNvbnRleHQpLFxuICAgICAgICAgIHN0cmluZyA9IHN0cmluZ0Zyb21MYWJlbHMobGFiZWxzKSxcbiAgICAgICAgICBwcm9vZiA9IG51bGwsXG4gICAgICAgICAgdG9wTGV2ZWxBc3NlcnRpb24gPSBuZXcgQ2xhc3MoZmlsZUNvbnRleHQsIHN0cmluZywgbGFiZWxzLCBzdXBwb3NpdGlvbnMsIGNvbnNlcXVlbnQsIHByb29mKTtcblxuICAgIHJldHVybiB0b3BMZXZlbEFzc2VydGlvbjtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gc3RyaW5nRnJvbUxhYmVscyhsYWJlbHMpIHtcbiAgY29uc3Qgc3RyaW5nID0gbGFiZWxzLnJlZHVjZSgoc3RyaW5nLCBsYWJlbCkgPT4ge1xuICAgIGNvbnN0IGxhYmVsU3RyaW5nID0gbGFiZWwuZ2V0U3RyaW5nKCk7XG5cbiAgICBzdHJpbmcgPSAoc3RyaW5nID09PSBFTVBUWV9TVFJJTkcpID9cbiAgICAgICAgICAgICAgIGxhYmVsU3RyaW5nOiAvLy9cbiAgICAgICAgICAgICAgICAgYCR7bGFiZWxTdHJpbmd9LCAke2xhYmVsU3RyaW5nfWA7XG5cbiAgICByZXR1cm4gc3RyaW5nO1xuICB9LCBFTVBUWV9TVFJJTkcpO1xuXG4gIHJldHVybiBzdHJpbmc7XG59XG5cbiJdLCJuYW1lcyI6WyJUb3BMZXZlbEFzc2VydGlvbiIsInN0cmluZ0Zyb21MYWJlbHMiLCJleHRyYWN0IiwiYXJyYXlVdGlsaXRpZXMiLCJyZXZlcnNlIiwiYmFja3dhcmRzRXZlcnkiLCJmaWxlQ29udGV4dCIsInN0cmluZyIsImxhYmVscyIsInN1cHBvc2l0aW9ucyIsImNvbnNlcXVlbnQiLCJwcm9vZiIsImdldEZpbGVDb250ZXh0IiwiZ2V0U3RyaW5nIiwiZ2V0TGFiZWxzIiwiZ2V0U3VwcG9zaXRpb25zIiwiZ2V0Q29uc2VxdWVudCIsImdldFByb29mIiwibWF0Y2hNZXRhdmFyaWFibGVOb2RlIiwibWV0YXZhcmlhYmxlTm9kZSIsIm1ldGF2YXJpYWJsZU5vZGVNYXRjaGVzIiwic29tZSIsImxhYmVsIiwidW5pZnlTdGF0ZW1lbnQiLCJzdGF0ZW1lbnQiLCJsb2NhbENvbnRleHQiLCJzdGF0ZW1lbnRVbmlmaWVkIiwiU3Vic3RpdHV0aW9ucyIsInNoaW0iLCJzdWJzdGl0dXRpb25zIiwiZnJvbU5vdGhpbmciLCJjb25zZXF1ZW50VW5pZmllZCIsInVuaWZ5Q29uc2VxdWVudCIsInN1cHBvc2l0aW9uc1VuaWZpZWQiLCJ1bmlmeVN1cHBvc2l0aW9uIiwic3Vic3RpdHV0aW9uc1Jlc29sdmVkIiwiYXJlUmVzb2x2ZWQiLCJjb25zZXF1ZW50U3RyaW5nIiwidHJhY2UiLCJkZWJ1ZyIsInByb29mU3RlcHMiLCJnZXRQcm9vZlN0ZXBzIiwic3VwcG9zaXRpb24iLCJzdXBwb3NpdGlvblVuaWZpZWQiLCJ1bmlmeVByZW1pc2UiLCJzdXBwb3NpdGlvblN0cmluZyIsInN1cHBvc2l0aW9uUmVzb2x2ZWRJbmRlcGVuZGVudGx5IiwicmVzb2x2ZUluZGVwZW5kZW50bHkiLCJwcm9vZlN0ZXAiLCJwcm9vZlN0ZXBVbmlmaWVkIiwidW5pZnlQcm9vZlN0ZXAiLCJ0b0pTT04iLCJsYWJlbHNKU09OIiwibGFiZWxzVG9MYWJlbHNKU09OIiwiY29uc2VxdWVudEpTT04iLCJjb25zZXF1ZW50VG9Db25zZXF1ZW50SlNPTiIsInN1cHBvc2l0aW9uc0pTT04iLCJzdXBwb3NpdGlvbnNUb1N1cHBvc2l0aW9uc0pTT04iLCJqc29uIiwiZnJvbUpTT04iLCJDbGFzcyIsImxhYmVsc0Zyb21KU09OIiwiY29uc2VxdWVudEZyb21KU09OIiwic3VwcG9zaXRpb25zRnJvbUpTT04iLCJ0b3BMZXZlbEFzc2VydGlvbiIsInJlZHVjZSIsImxhYmVsU3RyaW5nIiwiRU1QVFlfU1RSSU5HIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7O2VBZ0JxQkE7O0lBZ0tMQyxnQkFBZ0I7ZUFBaEJBOzs7eUJBOUtlOzJEQUVkO3lCQUVZO29CQU1rQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUUvQyxJQUFRQyxVQUFxQ0MseUJBQWMsQ0FBbkRELFNBQVNFLFVBQTRCRCx5QkFBYyxDQUExQ0MsU0FBU0MsaUJBQW1CRix5QkFBYyxDQUFqQ0U7QUFFWCxJQUFBLEFBQU1MLGtDQUFOO2FBQU1BLGtCQUNQTSxXQUFXLEVBQUVDLE1BQU0sRUFBRUMsTUFBTSxFQUFFQyxZQUFZLEVBQUVDLFVBQVUsRUFBRUMsS0FBSztnQ0FEckRYO1FBRWpCLElBQUksQ0FBQ00sV0FBVyxHQUFHQTtRQUNuQixJQUFJLENBQUNDLE1BQU0sR0FBR0E7UUFDZCxJQUFJLENBQUNDLE1BQU0sR0FBR0E7UUFDZCxJQUFJLENBQUNDLFlBQVksR0FBR0E7UUFDcEIsSUFBSSxDQUFDQyxVQUFVLEdBQUdBO1FBQ2xCLElBQUksQ0FBQ0MsS0FBSyxHQUFHQTs7a0JBUElYOztZQVVuQlksS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDTixXQUFXO1lBQ3pCOzs7WUFFQU8sS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDTixNQUFNO1lBQ3BCOzs7WUFFQU8sS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDTixNQUFNO1lBQ3BCOzs7WUFFQU8sS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDTixZQUFZO1lBQzFCOzs7WUFFQU8sS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDTixVQUFVO1lBQ3hCOzs7WUFFQU8sS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNF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