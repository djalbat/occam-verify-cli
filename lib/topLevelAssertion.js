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
var _local = /*#__PURE__*/ _interop_require_default(require("./context/local"));
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
            key: "verify",
            value: function verify() {
                var _this = this;
                var verified = false;
                var labelsVerifiedWhenDeclared = this.labels.every(function(label) {
                    var labelVVerifiedWhenDeclared = label.verifyWhenDeclared(_this.fileContext);
                    if (labelVVerifiedWhenDeclared) {
                        return true;
                    }
                });
                if (labelsVerifiedWhenDeclared) {
                    var localContext = _local.default.fromFileContext(this.fileContext), suppositionsVerified = this.suppositions.every(function(supposition) {
                        var suppositionVerified = supposition.verify(localContext);
                        if (suppositionVerified) {
                            return true;
                        }
                    });
                    if (suppositionsVerified) {
                        var consequentVerified = this.consequent.verify(localContext);
                        if (consequentVerified) {
                            if (this.proof === null) {
                                verified = true;
                            } else {
                                var proofVerified = this.proof.verify(this.substitutions, this.consequent, localContext);
                                verified = proofVerified; ///
                            }
                        }
                    }
                }
                return verified;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy90b3BMZXZlbEFzc2VydGlvbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgYXJyYXlVdGlsaXRpZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5cbmltcG9ydCBzaGltIGZyb20gXCIuL3NoaW1cIjtcblxuaW1wb3J0IHsgRU1QVFlfU1RSSU5HIH0gZnJvbSBcIi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgeyBub2RlUXVlcnksIG5vZGVzUXVlcnkgfSBmcm9tIFwiLi91dGlsaXRpZXMvcXVlcnlcIjtcbmltcG9ydCB7IGxhYmVsc0Zyb21KU09OLFxuICAgICAgICAgbGFiZWxzVG9MYWJlbHNKU09OLFxuICAgICAgICAgY29uc2VxdWVudEZyb21KU09OLFxuICAgICAgICAgc3VwcG9zaXRpb25zRnJvbUpTT04sXG4gICAgICAgICBzdWJzdGl0dXRpb25zRnJvbUpTT04sXG4gICAgICAgICBjb25zZXF1ZW50VG9Db25zZXF1ZW50SlNPTixcbiAgICAgICAgIHN1cHBvc2l0aW9uc1RvU3VwcG9zaXRpb25zSlNPTixcbiAgICAgICAgIHN1YnN0aXR1dGlvbnNUb1N1YnN0aXR1dGlvbnNKU09OIH0gZnJvbSBcIi4vdXRpbGl0aWVzL2pzb25cIjtcbmltcG9ydCBMb2NhbENvbnRleHQgZnJvbSBcIi4vY29udGV4dC9sb2NhbFwiO1xuXG5jb25zdCB7IGV4dHJhY3QsIHJldmVyc2UsIGJhY2t3YXJkc0V2ZXJ5IH0gPSBhcnJheVV0aWxpdGllcztcblxuY29uc3QgcHJvb2ZOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvKi9wcm9vZlwiKSxcbiAgICAgIGxhYmVsTm9kZXNRdWVyeSA9IG5vZGVzUXVlcnkoXCIvKi9sYWJlbFwiKSxcbiAgICAgIGNvbnNlcXVlbnROb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvKi9jb25zZXF1ZW50XCIpLFxuICAgICAgc3VwcG9zaXRpb25Ob2Rlc1F1ZXJ5ID0gbm9kZXNRdWVyeShcIi8qL3N1cHBvc2l0aW9uXCIpO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUb3BMZXZlbEFzc2VydGlvbiB7XG4gIGNvbnN0cnVjdG9yKGZpbGVDb250ZXh0LCBzdHJpbmcsIGxhYmVscywgc3Vic3RpdHV0aW9ucywgc3VwcG9zaXRpb25zLCBjb25zZXF1ZW50LCBwcm9vZikge1xuICAgIHRoaXMuZmlsZUNvbnRleHQgPSBmaWxlQ29udGV4dDtcbiAgICB0aGlzLnN0cmluZyA9IHN0cmluZztcbiAgICB0aGlzLmxhYmVscyA9IGxhYmVscztcbiAgICB0aGlzLnN1YnN0aXR1dGlvbnMgPSBzdWJzdGl0dXRpb25zO1xuICAgIHRoaXMuc3VwcG9zaXRpb25zID0gc3VwcG9zaXRpb25zO1xuICAgIHRoaXMuY29uc2VxdWVudCA9IGNvbnNlcXVlbnQ7XG4gICAgdGhpcy5wcm9vZiA9IHByb29mO1xuICB9XG5cbiAgZ2V0RmlsZUNvbnRleHQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZmlsZUNvbnRleHQ7XG4gIH1cblxuICBnZXRTdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RyaW5nO1xuICB9XG5cbiAgZ2V0TGFiZWxzKCkge1xuICAgIHJldHVybiB0aGlzLmxhYmVscztcbiAgfVxuXG4gIGdldFN1YnN0aXR1dGlvbnMoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3Vic3RpdHV0aW9ucztcbiAgfVxuXG4gIGdldFN1cHBvc2l0aW9ucygpIHtcbiAgICByZXR1cm4gdGhpcy5zdXBwb3NpdGlvbnM7XG4gIH1cblxuICBnZXRDb25zZXF1ZW50KCkge1xuICAgIHJldHVybiB0aGlzLmNvbnNlcXVlbnQ7XG4gIH1cblxuICBnZXRQcm9vZigpIHtcbiAgICByZXR1cm4gdGhpcy5wcm9vZjtcbiAgfVxuXG4gIGdldFN0YXRlbWVudCgpIHsgcmV0dXJuIHRoaXMucHJvb2YuZ2V0U3RhdGVtZW50KCk7IH1cblxuICBtYXRjaE1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSkge1xuICAgIGNvbnN0IG1ldGF2YXJpYWJsZU5vZGVNYXRjaGVzID0gdGhpcy5sYWJlbHMuc29tZSgobGFiZWwpID0+IHtcbiAgICAgIGNvbnN0IG1ldGF2YXJpYWJsZU5vZGVNYXRjaGVzID0gbGFiZWwubWF0Y2hNZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUpO1xuXG4gICAgICBpZiAobWV0YXZhcmlhYmxlTm9kZU1hdGNoZXMpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gbWV0YXZhcmlhYmxlTm9kZU1hdGNoZXM7XG4gIH1cblxuICB1bmlmeVN0YXRlbWVudChzdGF0ZW1lbnQsIGxvY2FsQ29udGV4dCkge1xuICAgIGxldCBzdGF0ZW1lbnRVbmlmaWVkO1xuXG4gICAgY29uc3QgeyBTdWJzdGl0dXRpb25zIH0gPSBzaGltLFxuICAgICAgc3Vic3RpdHV0aW9ucyA9IFN1YnN0aXR1dGlvbnMuZnJvbU5vdGhpbmcoKSxcbiAgICAgIGNvbnNlcXVlbnRVbmlmaWVkID0gdGhpcy51bmlmeUNvbnNlcXVlbnQoc3RhdGVtZW50LCBzdWJzdGl0dXRpb25zLCBsb2NhbENvbnRleHQpO1xuXG4gICAgaWYgKGNvbnNlcXVlbnRVbmlmaWVkKSB7XG4gICAgICBjb25zdCBzdXBwb3NpdGlvbnNVbmlmaWVkID0gdGhpcy51bmlmeVN1cHBvc2l0aW9uKHN1YnN0aXR1dGlvbnMsIGxvY2FsQ29udGV4dCk7XG5cbiAgICAgIGlmIChzdXBwb3NpdGlvbnNVbmlmaWVkKSB7XG4gICAgICAgIGNvbnN0IHN1YnN0aXR1dGlvbnNSZXNvbHZlZCA9IHN1YnN0aXR1dGlvbnMuYXJlUmVzb2x2ZWQoKTtcblxuICAgICAgICBzdGF0ZW1lbnRVbmlmaWVkID0gc3Vic3RpdHV0aW9uc1Jlc29sdmVkOyAvLy9cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gc3RhdGVtZW50VW5pZmllZDtcbiAgfVxuXG4gIHVuaWZ5Q29uc2VxdWVudChzdGF0ZW1lbnQsIHN1YnN0aXR1dGlvbnMsIGxvY2FsQ29udGV4dCkge1xuICAgIGxldCBjb25zZXF1ZW50VW5pZmllZDtcblxuICAgIGNvbnN0IGNvbnNlcXVlbnRTdHJpbmcgPSB0aGlzLmNvbnNlcXVlbnQuZ2V0U3RyaW5nKCk7XG5cbiAgICBsb2NhbENvbnRleHQudHJhY2UoYFVuaWZ5aW5nIHRoZSAnJHtjb25zZXF1ZW50U3RyaW5nfScgY29uc2VxdWVudC4uLmApO1xuXG4gICAgY29uc3Qgc3RhdGVtZW50VW5pZmllZCA9IHRoaXMuY29uc2VxdWVudC51bmlmeVN0YXRlbWVudChzdGF0ZW1lbnQsIHN1YnN0aXR1dGlvbnMsIGxvY2FsQ29udGV4dCk7ICAvLy9cblxuICAgIGNvbnNlcXVlbnRVbmlmaWVkID0gc3RhdGVtZW50VW5pZmllZDsgLy8vXG5cbiAgICBpZiAoY29uc2VxdWVudFVuaWZpZWQpIHtcbiAgICAgIGxvY2FsQ29udGV4dC5kZWJ1ZyhgLi4udW5pZmllZCB0aGUgJyR7Y29uc2VxdWVudFN0cmluZ30nIGNvbnNlcXVlbnRgKTtcbiAgICB9XG5cbiAgICByZXR1cm4gY29uc2VxdWVudFVuaWZpZWQ7XG4gIH1cblxuICB1bmlmeVN1cHBvc2l0aW9uKHN1YnN0aXR1dGlvbnMsIGxvY2FsQ29udGV4dCkge1xuICAgIGxldCBwcm9vZlN0ZXBzID0gbG9jYWxDb250ZXh0LmdldFByb29mU3RlcHMoKTtcblxuICAgIHByb29mU3RlcHMgPSByZXZlcnNlKHByb29mU3RlcHMpOyAvLy9cblxuICAgIGNvbnN0IHN1cHBvc2l0aW9uc1VuaWZpZWQgPSBiYWNrd2FyZHNFdmVyeSh0aGlzLnN1cHBvc2l0aW9ucywgKHN1cHBvc2l0aW9uKSA9PiB7XG4gICAgICBjb25zdCBzdXBwb3NpdGlvblVuaWZpZWQgPSB0aGlzLnVuaWZ5UHJlbWlzZShzdXBwb3NpdGlvbiwgcHJvb2ZTdGVwcywgc3Vic3RpdHV0aW9ucywgbG9jYWxDb250ZXh0KTtcblxuICAgICAgaWYgKHN1cHBvc2l0aW9uVW5pZmllZCkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiBzdXBwb3NpdGlvbnNVbmlmaWVkO1xuICB9XG5cbiAgdW5pZnlQcmVtaXNlKHN1cHBvc2l0aW9uLCBwcm9vZlN0ZXBzLCBzdWJzdGl0dXRpb25zLCBsb2NhbENvbnRleHQpIHtcbiAgICBsZXQgc3VwcG9zaXRpb25VbmlmaWVkICA9ZmFsc2U7XG5cbiAgICBjb25zdCBzdXBwb3NpdGlvblN0cmluZyA9IHN1cHBvc2l0aW9uLmdldFN0cmluZygpO1xuXG4gICAgbG9jYWxDb250ZXh0LnRyYWNlKGBVbmlmeWluZyB0aGUgJyR7c3VwcG9zaXRpb25TdHJpbmd9JyBzdXBwb3NpdGlvbi4uLmApO1xuXG4gICAgY29uc3Qgc3VwcG9zaXRpb25SZXNvbHZlZEluZGVwZW5kZW50bHkgPSBzdXBwb3NpdGlvbi5yZXNvbHZlSW5kZXBlbmRlbnRseShzdWJzdGl0dXRpb25zLCBsb2NhbENvbnRleHQpO1xuXG4gICAgaWYgKHN1cHBvc2l0aW9uUmVzb2x2ZWRJbmRlcGVuZGVudGx5KSB7XG4gICAgICBzdXBwb3NpdGlvblVuaWZpZWQgPSB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBwcm9vZlN0ZXAgPSBleHRyYWN0KHByb29mU3RlcHMsIChwcm9vZlN0ZXApID0+IHtcbiAgICAgICAgY29uc3QgcHJvb2ZTdGVwVW5pZmllZCA9IHN1cHBvc2l0aW9uLnVuaWZ5UHJvb2ZTdGVwKHByb29mU3RlcCwgc3Vic3RpdHV0aW9ucywgbG9jYWxDb250ZXh0KTtcblxuICAgICAgICBpZiAocHJvb2ZTdGVwVW5pZmllZCkge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgaWYgKHByb29mU3RlcCAhPT0gbnVsbCkge1xuICAgICAgICBzdXBwb3NpdGlvblVuaWZpZWQgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChzdXBwb3NpdGlvblVuaWZpZWQpIHtcbiAgICAgIGxvY2FsQ29udGV4dC5kZWJ1ZyhgLi4udW5pZmllZCB0aGUgJyR7c3VwcG9zaXRpb25TdHJpbmd9JyBzdXBwb3NpdGlvbi5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3VwcG9zaXRpb25VbmlmaWVkO1xuICB9XG5cbiAgdmVyaWZ5KCkge1xuICAgIGxldCB2ZXJpZmllZCA9IGZhbHNlO1xuXG4gICAgY29uc3QgbGFiZWxzVmVyaWZpZWRXaGVuRGVjbGFyZWQgPSB0aGlzLmxhYmVscy5ldmVyeSgobGFiZWwpID0+IHtcbiAgICAgIGNvbnN0IGxhYmVsVlZlcmlmaWVkV2hlbkRlY2xhcmVkID0gbGFiZWwudmVyaWZ5V2hlbkRlY2xhcmVkKHRoaXMuZmlsZUNvbnRleHQpO1xuXG4gICAgICBpZiAobGFiZWxWVmVyaWZpZWRXaGVuRGVjbGFyZWQpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBpZiAobGFiZWxzVmVyaWZpZWRXaGVuRGVjbGFyZWQpIHtcbiAgICAgIGNvbnN0IGxvY2FsQ29udGV4dCA9IExvY2FsQ29udGV4dC5mcm9tRmlsZUNvbnRleHQodGhpcy5maWxlQ29udGV4dCksXG4gICAgICAgICAgICBzdXBwb3NpdGlvbnNWZXJpZmllZCA9IHRoaXMuc3VwcG9zaXRpb25zLmV2ZXJ5KChzdXBwb3NpdGlvbikgPT4ge1xuICAgICAgICAgICAgICBjb25zdCBzdXBwb3NpdGlvblZlcmlmaWVkID0gc3VwcG9zaXRpb24udmVyaWZ5KGxvY2FsQ29udGV4dCk7XG5cbiAgICAgICAgICAgICAgaWYgKHN1cHBvc2l0aW9uVmVyaWZpZWQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgIGlmIChzdXBwb3NpdGlvbnNWZXJpZmllZCkge1xuICAgICAgICBjb25zdCBjb25zZXF1ZW50VmVyaWZpZWQgPSB0aGlzLmNvbnNlcXVlbnQudmVyaWZ5KGxvY2FsQ29udGV4dCk7XG5cbiAgICAgICAgaWYgKGNvbnNlcXVlbnRWZXJpZmllZCkge1xuICAgICAgICAgIGlmICh0aGlzLnByb29mID09PSBudWxsKSB7XG4gICAgICAgICAgICB2ZXJpZmllZCA9IHRydWU7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnN0IHByb29mVmVyaWZpZWQgPSB0aGlzLnByb29mLnZlcmlmeSh0aGlzLnN1YnN0aXR1dGlvbnMsIHRoaXMuY29uc2VxdWVudCwgbG9jYWxDb250ZXh0KTtcblxuICAgICAgICAgICAgdmVyaWZpZWQgPSBwcm9vZlZlcmlmaWVkOyAvLy9cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdmVyaWZpZWQ7XG4gIH1cblxuICB0b0pTT04oKSB7XG4gICAgY29uc3QgbGFiZWxzSlNPTiA9IGxhYmVsc1RvTGFiZWxzSlNPTih0aGlzLmxhYmVscyksXG4gICAgICAgICAgY29uc2VxdWVudEpTT04gPSBjb25zZXF1ZW50VG9Db25zZXF1ZW50SlNPTih0aGlzLmNvbnNlcXVlbnQpLFxuICAgICAgICAgIHN1cHBvc2l0aW9uc0pTT04gPSBzdXBwb3NpdGlvbnNUb1N1cHBvc2l0aW9uc0pTT04odGhpcy5zdXBwb3NpdGlvbnMpLFxuICAgICAgICAgIHN1YnN0aXR1dGlvbnNKU09OID0gc3Vic3RpdHV0aW9uc1RvU3Vic3RpdHV0aW9uc0pTT04odGhpcy5zdWJzdGl0dXRpb25zKSxcbiAgICAgICAgICBsYWJlbHMgPSBsYWJlbHNKU09OLCAgLy8vXG4gICAgICAgICAgY29uc2VxdWVudCA9IGNvbnNlcXVlbnRKU09OLCAgLy8vXG4gICAgICAgICAgc3VwcG9zaXRpb25zID0gc3VwcG9zaXRpb25zSlNPTiwgIC8vL1xuICAgICAgICAgIHN1YnN0aXR1dGlvbnMgPSBzdWJzdGl0dXRpb25zSlNPTiwgIC8vL1xuICAgICAgICAgIGpzb24gPSB7XG4gICAgICAgICAgICBsYWJlbHMsXG4gICAgICAgICAgICBjb25zZXF1ZW50LFxuICAgICAgICAgICAgc3VwcG9zaXRpb25zLFxuICAgICAgICAgICAgc3Vic3RpdHV0aW9uc1xuICAgICAgICAgIH07XG5cbiAgICByZXR1cm4ganNvbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tSlNPTihDbGFzcywganNvbiwgZmlsZUNvbnRleHQpIHtcbiAgICBjb25zdCBsYWJlbHMgPSBsYWJlbHNGcm9tSlNPTihqc29uLCBmaWxlQ29udGV4dCksXG4gICAgICAgICAgY29uc2VxdWVudCA9IGNvbnNlcXVlbnRGcm9tSlNPTihqc29uLCBmaWxlQ29udGV4dCksXG4gICAgICAgICAgc3VwcG9zaXRpb25zID0gc3VwcG9zaXRpb25zRnJvbUpTT04oanNvbiwgZmlsZUNvbnRleHQpLFxuICAgICAgICAgIHN1YnN0aXR1dGlvbnMgPSBzdWJzdGl0dXRpb25zRnJvbUpTT04oanNvbiwgZmlsZUNvbnRleHQpLFxuICAgICAgICAgIHN0cmluZyA9IHN0cmluZ0Zyb21MYWJlbHMobGFiZWxzKSxcbiAgICAgICAgICBwcm9vZiA9IG51bGwsXG4gICAgICAgICAgdG9wTGV2ZWxBc3NlcnRpb24gPSBuZXcgQ2xhc3MoZmlsZUNvbnRleHQsIHN0cmluZywgbGFiZWxzLCBzdWJzdGl0dXRpb25zLCBzdXBwb3NpdGlvbnMsIGNvbnNlcXVlbnQsIHByb29mKTtcblxuICAgIHJldHVybiB0b3BMZXZlbEFzc2VydGlvbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTm9kZShDbGFzcywgbm9kZSwgZmlsZUNvbnRleHQpIHtcbiAgICBjb25zdCB7IExhYmVsLCBQcm9vZiwgQ29uc2VxdWVudCwgU3VwcG9zaXRpb24sIFN1YnN0aXR1dGlvbnMgfSA9IHNoaW0sXG4gICAgICAgICAgcHJvb2ZOb2RlID0gcHJvb2ZOb2RlUXVlcnkobm9kZSksXG4gICAgICAgICAgbGFiZWxOb2RlcyA9IGxhYmVsTm9kZXNRdWVyeShub2RlKSxcbiAgICAgICAgICBjb25zZXF1ZW50Tm9kZSA9IGNvbnNlcXVlbnROb2RlUXVlcnkobm9kZSksXG4gICAgICAgICAgc3VwcG9zaXRpb25Ob2RlcyA9IHN1cHBvc2l0aW9uTm9kZXNRdWVyeShub2RlKSxcbiAgICAgICAgICBsYWJlbHMgPSBsYWJlbE5vZGVzLm1hcCgobGFiZWxOb2RlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBsYWJlbCA9IExhYmVsLmZyb21MYWJlbE5vZGUobGFiZWxOb2RlLCBmaWxlQ29udGV4dCk7XG5cbiAgICAgICAgICAgIHJldHVybiBsYWJlbDtcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBzdWJzdGl0dXRpb25zID0gU3Vic3RpdHV0aW9ucy5mcm9tTm90aGluZygpLFxuICAgICAgICAgIHN1cHBvc2l0aW9ucyA9IHN1cHBvc2l0aW9uTm9kZXMubWFwKChzdXBwb3NpdGlvbk5vZGUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHN1cHBvc2l0aW9uID0gU3VwcG9zaXRpb24uZnJvbVN1cHBvc2l0aW9uTm9kZShzdXBwb3NpdGlvbk5vZGUsIGZpbGVDb250ZXh0KTtcblxuICAgICAgICAgICAgcmV0dXJuIHN1cHBvc2l0aW9uO1xuICAgICAgICAgIH0pLFxuICAgICAgICAgIGNvbnNlcXVlbnQgPSBDb25zZXF1ZW50LmZyb21Db25zZXF1ZW50Tm9kZShjb25zZXF1ZW50Tm9kZSwgZmlsZUNvbnRleHQpLFxuICAgICAgICAgIHByb29mID0gUHJvb2YuZnJvbVByb29mTm9kZShwcm9vZk5vZGUsIGZpbGVDb250ZXh0KSxcbiAgICAgICAgICBzdHJpbmcgPSBzdHJpbmdGcm9tTGFiZWxzKGxhYmVscyksXG4gICAgICAgICAgbWV0YUxlbW1hID0gbmV3IENsYXNzKGZpbGVDb250ZXh0LCBzdHJpbmcsIGxhYmVscywgc3Vic3RpdHV0aW9ucywgc3VwcG9zaXRpb25zLCBjb25zZXF1ZW50LCBwcm9vZik7XG5cbiAgICByZXR1cm4gbWV0YUxlbW1hO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzdHJpbmdGcm9tTGFiZWxzKGxhYmVscykge1xuICBjb25zdCBzdHJpbmcgPSBsYWJlbHMucmVkdWNlKChzdHJpbmcsIGxhYmVsKSA9PiB7XG4gICAgY29uc3QgbGFiZWxTdHJpbmcgPSBsYWJlbC5nZXRTdHJpbmcoKTtcblxuICAgIHN0cmluZyA9IChzdHJpbmcgPT09IEVNUFRZX1NUUklORykgP1xuICAgICAgICAgICAgICAgbGFiZWxTdHJpbmc6IC8vL1xuICAgICAgICAgICAgICAgICBgJHtsYWJlbFN0cmluZ30sICR7bGFiZWxTdHJpbmd9YDtcblxuICAgIHJldHVybiBzdHJpbmc7XG4gIH0sIEVNUFRZX1NUUklORyk7XG5cbiAgcmV0dXJuIHN0cmluZztcbn1cblxuIl0sIm5hbWVzIjpbIlRvcExldmVsQXNzZXJ0aW9uIiwic3RyaW5nRnJvbUxhYmVscyIsImV4dHJhY3QiLCJhcnJheVV0aWxpdGllcyIsInJldmVyc2UiLCJiYWNrd2FyZHNFdmVyeSIsInByb29mTm9kZVF1ZXJ5Iiwibm9kZVF1ZXJ5IiwibGFiZWxOb2Rlc1F1ZXJ5Iiwibm9kZXNRdWVyeSIsImNvbnNlcXVlbnROb2RlUXVlcnkiLCJzdXBwb3NpdGlvbk5vZGVzUXVlcnkiLCJmaWxlQ29udGV4dCIsInN0cmluZyIsImxhYmVscyIsInN1YnN0aXR1dGlvbnMiLCJzdXBwb3NpdGlvbnMiLCJjb25zZXF1ZW50IiwicHJvb2YiLCJnZXRGaWxlQ29udGV4dCIsImdldFN0cmluZyIsImdldExhYmVscyIsImdldFN1YnN0aXR1dGlvbnMiLCJnZXRTdXBwb3NpdGlvbnMiLCJnZXRDb25zZXF1ZW50IiwiZ2V0UHJvb2YiLCJnZXRTdGF0ZW1lbnQiLCJtYXRjaE1ldGF2YXJpYWJsZU5vZGUiLCJtZXRhdmFyaWFibGVOb2RlIiwibWV0YXZhcmlhYmxlTm9kZU1hdGNoZXMiLCJzb21lIiwibGFiZWwiLCJ1bmlmeVN0YXRlbWVudCIsInN0YXRlbWVudCIsImxvY2FsQ29udGV4dCIsInN0YXRlbWVudFVuaWZpZWQiLCJTdWJzdGl0dXRpb25zIiwic2hpbSIsImZyb21Ob3RoaW5nIiwiY29uc2VxdWVudFVuaWZpZWQiLCJ1bmlmeUNvbnNlcXVlbnQiLCJzdXBwb3NpdGlvbnNVbmlmaWVkIiwidW5pZnlTdXBwb3NpdGlvbiIsInN1YnN0aXR1dGlvbnNSZXNvbHZlZCIsImFyZVJlc29sdmVkIiwiY29uc2VxdWVudFN0cmluZyIsInRyYWNlIiwiZGVidWciLCJwcm9vZlN0ZXBzIiwiZ2V0UHJvb2ZTdGVwcyIsInN1cHBvc2l0aW9uIiwic3VwcG9zaXRpb25VbmlmaWVkIiwidW5pZnlQcmVtaXNlIiwic3VwcG9zaXRpb25TdHJpbmciLCJzdXBwb3NpdGlvblJlc29sdmVkSW5kZXBlbmRlbnRseSIsInJlc29sdmVJbmRlcGVuZGVudGx5IiwicHJvb2ZTdGVwIiwicHJvb2ZTdGVwVW5pZmllZCIsInVuaWZ5UHJvb2ZTdGVwIiwidmVyaWZ5IiwidmVyaWZpZWQiLCJsYWJlbHNWZXJpZmllZFdoZW5EZWNsYXJlZCIsImV2ZXJ5IiwibGFiZWxWVmVyaWZpZWRXaGVuRGVjbGFyZWQiLCJ2ZXJpZnlXaGVuRGVjbGFyZWQiLCJMb2NhbENvbnRleHQiLCJmcm9tRmlsZUNvbnRleHQiLCJzdXBwb3NpdGlvbnNWZXJpZmllZCIsInN1cHBvc2l0aW9uVmVyaWZpZWQiLCJjb25zZXF1ZW50VmVyaWZpZWQiLCJwcm9vZlZlcmlmaWVkIiwidG9KU09OIiwibGFiZWxzSlNPTiIsImxhYmVsc1RvTGFiZWxzSlNPTiIsImNvbnNlcXVlbnRKU09OIiwiY29uc2VxdWVudFRvQ29uc2VxdWVudEpTT04iLCJzdXBwb3NpdGlvbnNKU09OIiwic3VwcG9zaXRpb25zVG9TdXBwb3NpdGlvbnNKU09OIiwic3Vic3RpdHV0aW9uc0pTT04iLCJzdWJzdGl0dXRpb25zVG9TdWJzdGl0dXRpb25zSlNPTiIsImpzb24iLCJmcm9tSlNPTiIsIkNsYXNzIiwibGFiZWxzRnJvbUpTT04iLCJjb25zZXF1ZW50RnJvbUpTT04iLCJzdXBwb3NpdGlvbnNGcm9tSlNPTiIsInN1YnN0aXR1dGlvbnNGcm9tSlNPTiIsInRvcExldmVsQXNzZXJ0aW9uIiwiZnJvbU5vZGUiLCJub2RlIiwiTGFiZWwiLCJQcm9vZiIsIkNvbnNlcXVlbnQiLCJTdXBwb3NpdGlvbiIsInByb29mTm9kZSIsImxhYmVsTm9kZXMiLCJjb25zZXF1ZW50Tm9kZSIsInN1cHBvc2l0aW9uTm9kZXMiLCJtYXAiLCJsYWJlbE5vZGUiLCJmcm9tTGFiZWxOb2RlIiwic3VwcG9zaXRpb25Ob2RlIiwiZnJvbVN1cHBvc2l0aW9uTm9kZSIsImZyb21Db25zZXF1ZW50Tm9kZSIsImZyb21Qcm9vZk5vZGUiLCJtZXRhTGVtbWEiLCJyZWR1Y2UiLCJsYWJlbFN0cmluZyIsIkVNUFRZX1NUUklORyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7OztlQXlCcUJBOztJQTJPTEMsZ0JBQWdCO2VBQWhCQTs7O3lCQWxRZTsyREFFZDt5QkFFWTtxQkFDUztvQkFRVzs0REFDeEI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFekIsSUFBUUMsVUFBcUNDLHlCQUFjLENBQW5ERCxTQUFTRSxVQUE0QkQseUJBQWMsQ0FBMUNDLFNBQVNDLGlCQUFtQkYseUJBQWMsQ0FBakNFO0FBRTFCLElBQU1DLGlCQUFpQkMsSUFBQUEsZ0JBQVMsRUFBQyxhQUMzQkMsa0JBQWtCQyxJQUFBQSxpQkFBVSxFQUFDLGFBQzdCQyxzQkFBc0JILElBQUFBLGdCQUFTLEVBQUMsa0JBQ2hDSSx3QkFBd0JGLElBQUFBLGlCQUFVLEVBQUM7QUFFMUIsSUFBQSxBQUFNVCxrQ0FBTjthQUFNQSxrQkFDUFksV0FBVyxFQUFFQyxNQUFNLEVBQUVDLE1BQU0sRUFBRUMsYUFBYSxFQUFFQyxZQUFZLEVBQUVDLFVBQVUsRUFBRUMsS0FBSztnQ0FEcEVsQjtRQUVqQixJQUFJLENBQUNZLFdBQVcsR0FBR0E7UUFDbkIsSUFBSSxDQUFDQyxNQUFNLEdBQUdBO1FBQ2QsSUFBSSxDQUFDQyxNQUFNLEdBQUdBO1FBQ2QsSUFBSSxDQUFDQyxhQUFhLEdBQUdBO1FBQ3JCLElBQUksQ0FBQ0MsWUFBWSxHQUFHQTtRQUNwQixJQUFJLENBQUNDLFVBQVUsR0FBR0E7UUFDbEIsSUFBSSxDQUFDQyxLQUFLLEdBQUdBOztrQkFS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