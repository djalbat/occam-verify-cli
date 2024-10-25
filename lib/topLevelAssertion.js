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
            key: "unifyReference",
            value: function unifyReference(reference, generalContext, specificContext) {
                var referenceUnified = this.labels.some(function(label) {
                    var referenceUnified = label.unifyReference(reference, generalContext, specificContext);
                    if (referenceUnified) {
                        return true;
                    }
                });
                return referenceUnified;
            }
        },
        {
            key: "unifyStatement",
            value: function unifyStatement(statement, context) {
                var statementUnified;
                var Substitutions = _shim.default.Substitutions, substitutions = Substitutions.fromNothing(), consequentUnified = this.unifyConsequent(statement, substitutions, context);
                if (consequentUnified) {
                    var suppositionsUnified = this.unifySupposition(substitutions, context);
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
            value: function unifyConsequent(statement, substitutions, context) {
                var consequentUnified;
                var consequentString = this.consequent.getString();
                context.trace("Unifying the '".concat(consequentString, "' consequent..."));
                var statementUnified = this.consequent.unifyStatement(statement, substitutions, context); ///
                consequentUnified = statementUnified; ///
                if (consequentUnified) {
                    context.debug("...unified the '".concat(consequentString, "' consequent"));
                }
                return consequentUnified;
            }
        },
        {
            key: "unifySupposition",
            value: function unifySupposition(substitutions, context) {
                var _this = this;
                var proofSteps = context.getProofSteps();
                proofSteps = reverse(proofSteps); ///
                var suppositionsUnified = backwardsEvery(this.suppositions, function(supposition) {
                    var suppositionUnified = _this.unifyPremise(supposition, proofSteps, substitutions, context);
                    if (suppositionUnified) {
                        return true;
                    }
                });
                return suppositionsUnified;
            }
        },
        {
            key: "unifyPremise",
            value: function unifyPremise(supposition, proofSteps, substitutions, context) {
                var suppositionUnified = false;
                var suppositionString = supposition.getString();
                context.trace("Unifying the '".concat(suppositionString, "' supposition..."));
                var suppositionResolvedIndependently = supposition.resolveIndependently(substitutions, context);
                if (suppositionResolvedIndependently) {
                    suppositionUnified = true;
                } else {
                    var proofStep = extract(proofSteps, function(proofStep) {
                        var proofStepUnified = supposition.unifyProofStep(proofStep, substitutions, context);
                        if (proofStepUnified) {
                            return true;
                        }
                    }) || null;
                    if (proofStep !== null) {
                        suppositionUnified = true;
                    }
                }
                if (suppositionUnified) {
                    context.debug("...unified the '".concat(suppositionString, "' supposition."));
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
                    var localContext = _local.default.fromFileContext(this.fileContext), context = localContext, suppositionsVerified = this.suppositions.every(function(supposition) {
                        var suppositionVerified = supposition.verify(context);
                        if (suppositionVerified) {
                            return true;
                        }
                    });
                    if (suppositionsVerified) {
                        var consequentVerified = this.consequent.verify(context);
                        if (consequentVerified) {
                            if (this.proof === null) {
                                verified = true;
                            } else {
                                var proofVerified = this.proof.verify(this.substitutions, this.consequent, context);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy90b3BMZXZlbEFzc2VydGlvbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgYXJyYXlVdGlsaXRpZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5cbmltcG9ydCBzaGltIGZyb20gXCIuL3NoaW1cIjtcblxuaW1wb3J0IHsgRU1QVFlfU1RSSU5HIH0gZnJvbSBcIi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgeyBub2RlUXVlcnksIG5vZGVzUXVlcnkgfSBmcm9tIFwiLi91dGlsaXRpZXMvcXVlcnlcIjtcbmltcG9ydCB7IGxhYmVsc0Zyb21KU09OLFxuICAgICAgICAgbGFiZWxzVG9MYWJlbHNKU09OLFxuICAgICAgICAgY29uc2VxdWVudEZyb21KU09OLFxuICAgICAgICAgc3VwcG9zaXRpb25zRnJvbUpTT04sXG4gICAgICAgICBzdWJzdGl0dXRpb25zRnJvbUpTT04sXG4gICAgICAgICBjb25zZXF1ZW50VG9Db25zZXF1ZW50SlNPTixcbiAgICAgICAgIHN1cHBvc2l0aW9uc1RvU3VwcG9zaXRpb25zSlNPTixcbiAgICAgICAgIHN1YnN0aXR1dGlvbnNUb1N1YnN0aXR1dGlvbnNKU09OIH0gZnJvbSBcIi4vdXRpbGl0aWVzL2pzb25cIjtcbmltcG9ydCBMb2NhbENvbnRleHQgZnJvbSBcIi4vY29udGV4dC9sb2NhbFwiO1xuXG5jb25zdCB7IGV4dHJhY3QsIHJldmVyc2UsIGJhY2t3YXJkc0V2ZXJ5IH0gPSBhcnJheVV0aWxpdGllcztcblxuY29uc3QgcHJvb2ZOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvKi9wcm9vZlwiKSxcbiAgICAgIGxhYmVsTm9kZXNRdWVyeSA9IG5vZGVzUXVlcnkoXCIvKi9sYWJlbFwiKSxcbiAgICAgIGNvbnNlcXVlbnROb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvKi9jb25zZXF1ZW50XCIpLFxuICAgICAgc3VwcG9zaXRpb25Ob2Rlc1F1ZXJ5ID0gbm9kZXNRdWVyeShcIi8qL3N1cHBvc2l0aW9uXCIpO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUb3BMZXZlbEFzc2VydGlvbiB7XG4gIGNvbnN0cnVjdG9yKGZpbGVDb250ZXh0LCBzdHJpbmcsIGxhYmVscywgc3Vic3RpdHV0aW9ucywgc3VwcG9zaXRpb25zLCBjb25zZXF1ZW50LCBwcm9vZikge1xuICAgIHRoaXMuZmlsZUNvbnRleHQgPSBmaWxlQ29udGV4dDtcbiAgICB0aGlzLnN0cmluZyA9IHN0cmluZztcbiAgICB0aGlzLmxhYmVscyA9IGxhYmVscztcbiAgICB0aGlzLnN1YnN0aXR1dGlvbnMgPSBzdWJzdGl0dXRpb25zO1xuICAgIHRoaXMuc3VwcG9zaXRpb25zID0gc3VwcG9zaXRpb25zO1xuICAgIHRoaXMuY29uc2VxdWVudCA9IGNvbnNlcXVlbnQ7XG4gICAgdGhpcy5wcm9vZiA9IHByb29mO1xuICB9XG5cbiAgZ2V0RmlsZUNvbnRleHQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZmlsZUNvbnRleHQ7XG4gIH1cblxuICBnZXRTdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RyaW5nO1xuICB9XG5cbiAgZ2V0TGFiZWxzKCkge1xuICAgIHJldHVybiB0aGlzLmxhYmVscztcbiAgfVxuXG4gIGdldFN1YnN0aXR1dGlvbnMoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3Vic3RpdHV0aW9ucztcbiAgfVxuXG4gIGdldFN1cHBvc2l0aW9ucygpIHtcbiAgICByZXR1cm4gdGhpcy5zdXBwb3NpdGlvbnM7XG4gIH1cblxuICBnZXRDb25zZXF1ZW50KCkge1xuICAgIHJldHVybiB0aGlzLmNvbnNlcXVlbnQ7XG4gIH1cblxuICBnZXRQcm9vZigpIHtcbiAgICByZXR1cm4gdGhpcy5wcm9vZjtcbiAgfVxuXG4gIGdldFN0YXRlbWVudCgpIHsgcmV0dXJuIHRoaXMucHJvb2YuZ2V0U3RhdGVtZW50KCk7IH1cblxuICBtYXRjaE1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSkge1xuICAgIGNvbnN0IG1ldGF2YXJpYWJsZU5vZGVNYXRjaGVzID0gdGhpcy5sYWJlbHMuc29tZSgobGFiZWwpID0+IHtcbiAgICAgIGNvbnN0IG1ldGF2YXJpYWJsZU5vZGVNYXRjaGVzID0gbGFiZWwubWF0Y2hNZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUpO1xuXG4gICAgICBpZiAobWV0YXZhcmlhYmxlTm9kZU1hdGNoZXMpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gbWV0YXZhcmlhYmxlTm9kZU1hdGNoZXM7XG4gIH1cblxuICB1bmlmeVJlZmVyZW5jZShyZWZlcmVuY2UsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpIHtcbiAgICBjb25zdCByZWZlcmVuY2VVbmlmaWVkID0gdGhpcy5sYWJlbHMuc29tZSgobGFiZWwpID0+IHtcbiAgICAgIGNvbnN0IHJlZmVyZW5jZVVuaWZpZWQgPSBsYWJlbC51bmlmeVJlZmVyZW5jZShyZWZlcmVuY2UsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgICBpZiAocmVmZXJlbmNlVW5pZmllZCkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiByZWZlcmVuY2VVbmlmaWVkO1xuICB9XG5cbiAgdW5pZnlTdGF0ZW1lbnQoc3RhdGVtZW50LCBjb250ZXh0KSB7XG4gICAgbGV0IHN0YXRlbWVudFVuaWZpZWQ7XG5cbiAgICBjb25zdCB7IFN1YnN0aXR1dGlvbnMgfSA9IHNoaW0sXG4gICAgICBzdWJzdGl0dXRpb25zID0gU3Vic3RpdHV0aW9ucy5mcm9tTm90aGluZygpLFxuICAgICAgY29uc2VxdWVudFVuaWZpZWQgPSB0aGlzLnVuaWZ5Q29uc2VxdWVudChzdGF0ZW1lbnQsIHN1YnN0aXR1dGlvbnMsIGNvbnRleHQpO1xuXG4gICAgaWYgKGNvbnNlcXVlbnRVbmlmaWVkKSB7XG4gICAgICBjb25zdCBzdXBwb3NpdGlvbnNVbmlmaWVkID0gdGhpcy51bmlmeVN1cHBvc2l0aW9uKHN1YnN0aXR1dGlvbnMsIGNvbnRleHQpO1xuXG4gICAgICBpZiAoc3VwcG9zaXRpb25zVW5pZmllZCkge1xuICAgICAgICBjb25zdCBzdWJzdGl0dXRpb25zUmVzb2x2ZWQgPSBzdWJzdGl0dXRpb25zLmFyZVJlc29sdmVkKCk7XG5cbiAgICAgICAgc3RhdGVtZW50VW5pZmllZCA9IHN1YnN0aXR1dGlvbnNSZXNvbHZlZDsgLy8vXG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHN0YXRlbWVudFVuaWZpZWQ7XG4gIH1cblxuICB1bmlmeUNvbnNlcXVlbnQoc3RhdGVtZW50LCBzdWJzdGl0dXRpb25zLCBjb250ZXh0KSB7XG4gICAgbGV0IGNvbnNlcXVlbnRVbmlmaWVkO1xuXG4gICAgY29uc3QgY29uc2VxdWVudFN0cmluZyA9IHRoaXMuY29uc2VxdWVudC5nZXRTdHJpbmcoKTtcblxuICAgIGNvbnRleHQudHJhY2UoYFVuaWZ5aW5nIHRoZSAnJHtjb25zZXF1ZW50U3RyaW5nfScgY29uc2VxdWVudC4uLmApO1xuXG4gICAgY29uc3Qgc3RhdGVtZW50VW5pZmllZCA9IHRoaXMuY29uc2VxdWVudC51bmlmeVN0YXRlbWVudChzdGF0ZW1lbnQsIHN1YnN0aXR1dGlvbnMsIGNvbnRleHQpOyAgLy8vXG5cbiAgICBjb25zZXF1ZW50VW5pZmllZCA9IHN0YXRlbWVudFVuaWZpZWQ7IC8vL1xuXG4gICAgaWYgKGNvbnNlcXVlbnRVbmlmaWVkKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi51bmlmaWVkIHRoZSAnJHtjb25zZXF1ZW50U3RyaW5nfScgY29uc2VxdWVudGApO1xuICAgIH1cblxuICAgIHJldHVybiBjb25zZXF1ZW50VW5pZmllZDtcbiAgfVxuXG4gIHVuaWZ5U3VwcG9zaXRpb24oc3Vic3RpdHV0aW9ucywgY29udGV4dCkge1xuICAgIGxldCBwcm9vZlN0ZXBzID0gY29udGV4dC5nZXRQcm9vZlN0ZXBzKCk7XG5cbiAgICBwcm9vZlN0ZXBzID0gcmV2ZXJzZShwcm9vZlN0ZXBzKTsgLy8vXG5cbiAgICBjb25zdCBzdXBwb3NpdGlvbnNVbmlmaWVkID0gYmFja3dhcmRzRXZlcnkodGhpcy5zdXBwb3NpdGlvbnMsIChzdXBwb3NpdGlvbikgPT4ge1xuICAgICAgY29uc3Qgc3VwcG9zaXRpb25VbmlmaWVkID0gdGhpcy51bmlmeVByZW1pc2Uoc3VwcG9zaXRpb24sIHByb29mU3RlcHMsIHN1YnN0aXR1dGlvbnMsIGNvbnRleHQpO1xuXG4gICAgICBpZiAoc3VwcG9zaXRpb25VbmlmaWVkKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHN1cHBvc2l0aW9uc1VuaWZpZWQ7XG4gIH1cblxuICB1bmlmeVByZW1pc2Uoc3VwcG9zaXRpb24sIHByb29mU3RlcHMsIHN1YnN0aXR1dGlvbnMsIGNvbnRleHQpIHtcbiAgICBsZXQgc3VwcG9zaXRpb25VbmlmaWVkICA9ZmFsc2U7XG5cbiAgICBjb25zdCBzdXBwb3NpdGlvblN0cmluZyA9IHN1cHBvc2l0aW9uLmdldFN0cmluZygpO1xuXG4gICAgY29udGV4dC50cmFjZShgVW5pZnlpbmcgdGhlICcke3N1cHBvc2l0aW9uU3RyaW5nfScgc3VwcG9zaXRpb24uLi5gKTtcblxuICAgIGNvbnN0IHN1cHBvc2l0aW9uUmVzb2x2ZWRJbmRlcGVuZGVudGx5ID0gc3VwcG9zaXRpb24ucmVzb2x2ZUluZGVwZW5kZW50bHkoc3Vic3RpdHV0aW9ucywgY29udGV4dCk7XG5cbiAgICBpZiAoc3VwcG9zaXRpb25SZXNvbHZlZEluZGVwZW5kZW50bHkpIHtcbiAgICAgIHN1cHBvc2l0aW9uVW5pZmllZCA9IHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHByb29mU3RlcCA9IGV4dHJhY3QocHJvb2ZTdGVwcywgKHByb29mU3RlcCkgPT4ge1xuICAgICAgICBjb25zdCBwcm9vZlN0ZXBVbmlmaWVkID0gc3VwcG9zaXRpb24udW5pZnlQcm9vZlN0ZXAocHJvb2ZTdGVwLCBzdWJzdGl0dXRpb25zLCBjb250ZXh0KTtcblxuICAgICAgICBpZiAocHJvb2ZTdGVwVW5pZmllZCkge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICB9KSB8fCBudWxsO1xuXG4gICAgICBpZiAocHJvb2ZTdGVwICE9PSBudWxsKSB7XG4gICAgICAgIHN1cHBvc2l0aW9uVW5pZmllZCA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHN1cHBvc2l0aW9uVW5pZmllZCkge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udW5pZmllZCB0aGUgJyR7c3VwcG9zaXRpb25TdHJpbmd9JyBzdXBwb3NpdGlvbi5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3VwcG9zaXRpb25VbmlmaWVkO1xuICB9XG5cbiAgdmVyaWZ5KCkge1xuICAgIGxldCB2ZXJpZmllZCA9IGZhbHNlO1xuXG4gICAgY29uc3QgbGFiZWxzVmVyaWZpZWRXaGVuRGVjbGFyZWQgPSB0aGlzLmxhYmVscy5ldmVyeSgobGFiZWwpID0+IHtcbiAgICAgIGNvbnN0IGxhYmVsVlZlcmlmaWVkV2hlbkRlY2xhcmVkID0gbGFiZWwudmVyaWZ5V2hlbkRlY2xhcmVkKHRoaXMuZmlsZUNvbnRleHQpO1xuXG4gICAgICBpZiAobGFiZWxWVmVyaWZpZWRXaGVuRGVjbGFyZWQpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBpZiAobGFiZWxzVmVyaWZpZWRXaGVuRGVjbGFyZWQpIHtcbiAgICAgIGNvbnN0IGxvY2FsQ29udGV4dCA9IExvY2FsQ29udGV4dC5mcm9tRmlsZUNvbnRleHQodGhpcy5maWxlQ29udGV4dCksXG4gICAgICAgICAgICBjb250ZXh0ID0gbG9jYWxDb250ZXh0LCAvLy9cbiAgICAgICAgICAgIHN1cHBvc2l0aW9uc1ZlcmlmaWVkID0gdGhpcy5zdXBwb3NpdGlvbnMuZXZlcnkoKHN1cHBvc2l0aW9uKSA9PiB7XG4gICAgICAgICAgICAgIGNvbnN0IHN1cHBvc2l0aW9uVmVyaWZpZWQgPSBzdXBwb3NpdGlvbi52ZXJpZnkoY29udGV4dCk7XG5cbiAgICAgICAgICAgICAgaWYgKHN1cHBvc2l0aW9uVmVyaWZpZWQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgIGlmIChzdXBwb3NpdGlvbnNWZXJpZmllZCkge1xuICAgICAgICBjb25zdCBjb25zZXF1ZW50VmVyaWZpZWQgPSB0aGlzLmNvbnNlcXVlbnQudmVyaWZ5KGNvbnRleHQpO1xuXG4gICAgICAgIGlmIChjb25zZXF1ZW50VmVyaWZpZWQpIHtcbiAgICAgICAgICBpZiAodGhpcy5wcm9vZiA9PT0gbnVsbCkge1xuICAgICAgICAgICAgdmVyaWZpZWQgPSB0cnVlO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zdCBwcm9vZlZlcmlmaWVkID0gdGhpcy5wcm9vZi52ZXJpZnkodGhpcy5zdWJzdGl0dXRpb25zLCB0aGlzLmNvbnNlcXVlbnQsIGNvbnRleHQpO1xuXG4gICAgICAgICAgICB2ZXJpZmllZCA9IHByb29mVmVyaWZpZWQ7IC8vL1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB2ZXJpZmllZDtcbiAgfVxuXG4gIHRvSlNPTigpIHtcbiAgICBjb25zdCBsYWJlbHNKU09OID0gbGFiZWxzVG9MYWJlbHNKU09OKHRoaXMubGFiZWxzKSxcbiAgICAgICAgICBjb25zZXF1ZW50SlNPTiA9IGNvbnNlcXVlbnRUb0NvbnNlcXVlbnRKU09OKHRoaXMuY29uc2VxdWVudCksXG4gICAgICAgICAgc3VwcG9zaXRpb25zSlNPTiA9IHN1cHBvc2l0aW9uc1RvU3VwcG9zaXRpb25zSlNPTih0aGlzLnN1cHBvc2l0aW9ucyksXG4gICAgICAgICAgc3Vic3RpdHV0aW9uc0pTT04gPSBzdWJzdGl0dXRpb25zVG9TdWJzdGl0dXRpb25zSlNPTih0aGlzLnN1YnN0aXR1dGlvbnMpLFxuICAgICAgICAgIGxhYmVscyA9IGxhYmVsc0pTT04sICAvLy9cbiAgICAgICAgICBjb25zZXF1ZW50ID0gY29uc2VxdWVudEpTT04sICAvLy9cbiAgICAgICAgICBzdXBwb3NpdGlvbnMgPSBzdXBwb3NpdGlvbnNKU09OLCAgLy8vXG4gICAgICAgICAgc3Vic3RpdHV0aW9ucyA9IHN1YnN0aXR1dGlvbnNKU09OLCAgLy8vXG4gICAgICAgICAganNvbiA9IHtcbiAgICAgICAgICAgIGxhYmVscyxcbiAgICAgICAgICAgIGNvbnNlcXVlbnQsXG4gICAgICAgICAgICBzdXBwb3NpdGlvbnMsXG4gICAgICAgICAgICBzdWJzdGl0dXRpb25zXG4gICAgICAgICAgfTtcblxuICAgIHJldHVybiBqc29uO1xuICB9XG5cbiAgc3RhdGljIGZyb21KU09OKENsYXNzLCBqc29uLCBmaWxlQ29udGV4dCkge1xuICAgIGNvbnN0IGxhYmVscyA9IGxhYmVsc0Zyb21KU09OKGpzb24sIGZpbGVDb250ZXh0KSxcbiAgICAgICAgICBjb25zZXF1ZW50ID0gY29uc2VxdWVudEZyb21KU09OKGpzb24sIGZpbGVDb250ZXh0KSxcbiAgICAgICAgICBzdXBwb3NpdGlvbnMgPSBzdXBwb3NpdGlvbnNGcm9tSlNPTihqc29uLCBmaWxlQ29udGV4dCksXG4gICAgICAgICAgc3Vic3RpdHV0aW9ucyA9IHN1YnN0aXR1dGlvbnNGcm9tSlNPTihqc29uLCBmaWxlQ29udGV4dCksXG4gICAgICAgICAgc3RyaW5nID0gc3RyaW5nRnJvbUxhYmVscyhsYWJlbHMpLFxuICAgICAgICAgIHByb29mID0gbnVsbCxcbiAgICAgICAgICB0b3BMZXZlbEFzc2VydGlvbiA9IG5ldyBDbGFzcyhmaWxlQ29udGV4dCwgc3RyaW5nLCBsYWJlbHMsIHN1YnN0aXR1dGlvbnMsIHN1cHBvc2l0aW9ucywgY29uc2VxdWVudCwgcHJvb2YpO1xuXG4gICAgcmV0dXJuIHRvcExldmVsQXNzZXJ0aW9uO1xuICB9XG5cbiAgc3RhdGljIGZyb21Ob2RlKENsYXNzLCBub2RlLCBmaWxlQ29udGV4dCkge1xuICAgIGNvbnN0IHsgTGFiZWwsIFByb29mLCBDb25zZXF1ZW50LCBTdXBwb3NpdGlvbiwgU3Vic3RpdHV0aW9ucyB9ID0gc2hpbSxcbiAgICAgICAgICBwcm9vZk5vZGUgPSBwcm9vZk5vZGVRdWVyeShub2RlKSxcbiAgICAgICAgICBsYWJlbE5vZGVzID0gbGFiZWxOb2Rlc1F1ZXJ5KG5vZGUpLFxuICAgICAgICAgIGNvbnNlcXVlbnROb2RlID0gY29uc2VxdWVudE5vZGVRdWVyeShub2RlKSxcbiAgICAgICAgICBzdXBwb3NpdGlvbk5vZGVzID0gc3VwcG9zaXRpb25Ob2Rlc1F1ZXJ5KG5vZGUpLFxuICAgICAgICAgIGxhYmVscyA9IGxhYmVsTm9kZXMubWFwKChsYWJlbE5vZGUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGxhYmVsID0gTGFiZWwuZnJvbUxhYmVsTm9kZShsYWJlbE5vZGUsIGZpbGVDb250ZXh0KTtcblxuICAgICAgICAgICAgcmV0dXJuIGxhYmVsO1xuICAgICAgICAgIH0pLFxuICAgICAgICAgIHN1YnN0aXR1dGlvbnMgPSBTdWJzdGl0dXRpb25zLmZyb21Ob3RoaW5nKCksXG4gICAgICAgICAgc3VwcG9zaXRpb25zID0gc3VwcG9zaXRpb25Ob2Rlcy5tYXAoKHN1cHBvc2l0aW9uTm9kZSkgPT4ge1xuICAgICAgICAgICAgY29uc3Qgc3VwcG9zaXRpb24gPSBTdXBwb3NpdGlvbi5mcm9tU3VwcG9zaXRpb25Ob2RlKHN1cHBvc2l0aW9uTm9kZSwgZmlsZUNvbnRleHQpO1xuXG4gICAgICAgICAgICByZXR1cm4gc3VwcG9zaXRpb247XG4gICAgICAgICAgfSksXG4gICAgICAgICAgY29uc2VxdWVudCA9IENvbnNlcXVlbnQuZnJvbUNvbnNlcXVlbnROb2RlKGNvbnNlcXVlbnROb2RlLCBmaWxlQ29udGV4dCksXG4gICAgICAgICAgcHJvb2YgPSBQcm9vZi5mcm9tUHJvb2ZOb2RlKHByb29mTm9kZSwgZmlsZUNvbnRleHQpLFxuICAgICAgICAgIHN0cmluZyA9IHN0cmluZ0Zyb21MYWJlbHMobGFiZWxzKSxcbiAgICAgICAgICBtZXRhTGVtbWEgPSBuZXcgQ2xhc3MoZmlsZUNvbnRleHQsIHN0cmluZywgbGFiZWxzLCBzdWJzdGl0dXRpb25zLCBzdXBwb3NpdGlvbnMsIGNvbnNlcXVlbnQsIHByb29mKTtcblxuICAgIHJldHVybiBtZXRhTGVtbWE7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN0cmluZ0Zyb21MYWJlbHMobGFiZWxzKSB7XG4gIGNvbnN0IHN0cmluZyA9IGxhYmVscy5yZWR1Y2UoKHN0cmluZywgbGFiZWwpID0+IHtcbiAgICBjb25zdCBsYWJlbFN0cmluZyA9IGxhYmVsLmdldFN0cmluZygpO1xuXG4gICAgc3RyaW5nID0gKHN0cmluZyA9PT0gRU1QVFlfU1RSSU5HKSA/XG4gICAgICAgICAgICAgICBsYWJlbFN0cmluZzogLy8vXG4gICAgICAgICAgICAgICAgIGAke2xhYmVsU3RyaW5nfSwgJHtsYWJlbFN0cmluZ31gO1xuXG4gICAgcmV0dXJuIHN0cmluZztcbiAgfSwgRU1QVFlfU1RSSU5HKTtcblxuICByZXR1cm4gc3RyaW5nO1xufVxuXG4iXSwibmFtZXMiOlsiVG9wTGV2ZWxBc3NlcnRpb24iLCJzdHJpbmdGcm9tTGFiZWxzIiwiZXh0cmFjdCIsImFycmF5VXRpbGl0aWVzIiwicmV2ZXJzZSIsImJhY2t3YXJkc0V2ZXJ5IiwicHJvb2ZOb2RlUXVlcnkiLCJub2RlUXVlcnkiLCJsYWJlbE5vZGVzUXVlcnkiLCJub2Rlc1F1ZXJ5IiwiY29uc2VxdWVudE5vZGVRdWVyeSIsInN1cHBvc2l0aW9uTm9kZXNRdWVyeSIsImZpbGVDb250ZXh0Iiwic3RyaW5nIiwibGFiZWxzIiwic3Vic3RpdHV0aW9ucyIsInN1cHBvc2l0aW9ucyIsImNvbnNlcXVlbnQiLCJwcm9vZiIsImdldEZpbGVDb250ZXh0IiwiZ2V0U3RyaW5nIiwiZ2V0TGFiZWxzIiwiZ2V0U3Vic3RpdHV0aW9ucyIsImdldFN1cHBvc2l0aW9ucyIsImdldENvbnNlcXVlbnQiLCJnZXRQcm9vZiIsImdldFN0YXRlbWVudCIsIm1hdGNoTWV0YXZhcmlhYmxlTm9kZSIsIm1ldGF2YXJpYWJsZU5vZGUiLCJtZXRhdmFyaWFibGVOb2RlTWF0Y2hlcyIsInNvbWUiLCJsYWJlbCIsInVuaWZ5UmVmZXJlbmNlIiwicmVmZXJlbmNlIiwiZ2VuZXJhbENvbnRleHQiLCJzcGVjaWZpY0NvbnRleHQiLCJyZWZlcmVuY2VVbmlmaWVkIiwidW5pZnlTdGF0ZW1lbnQiLCJzdGF0ZW1lbnQiLCJjb250ZXh0Iiwic3RhdGVtZW50VW5pZmllZCIsIlN1YnN0aXR1dGlvbnMiLCJzaGltIiwiZnJvbU5vdGhpbmciLCJjb25zZXF1ZW50VW5pZmllZCIsInVuaWZ5Q29uc2VxdWVudCIsInN1cHBvc2l0aW9uc1VuaWZpZWQiLCJ1bmlmeVN1cHBvc2l0aW9uIiwic3Vic3RpdHV0aW9uc1Jlc29sdmVkIiwiYXJlUmVzb2x2ZWQiLCJjb25zZXF1ZW50U3RyaW5nIiwidHJhY2UiLCJkZWJ1ZyIsInByb29mU3RlcHMiLCJnZXRQcm9vZlN0ZXBzIiwic3VwcG9zaXRpb24iLCJzdXBwb3NpdGlvblVuaWZpZWQiLCJ1bmlmeVByZW1pc2UiLCJzdXBwb3NpdGlvblN0cmluZyIsInN1cHBvc2l0aW9uUmVzb2x2ZWRJbmRlcGVuZGVudGx5IiwicmVzb2x2ZUluZGVwZW5kZW50bHkiLCJwcm9vZlN0ZXAiLCJwcm9vZlN0ZXBVbmlmaWVkIiwidW5pZnlQcm9vZlN0ZXAiLCJ2ZXJpZnkiLCJ2ZXJpZmllZCIsImxhYmVsc1ZlcmlmaWVkV2hlbkRlY2xhcmVkIiwiZXZlcnkiLCJsYWJlbFZWZXJpZmllZFdoZW5EZWNsYXJlZCIsInZlcmlmeVdoZW5EZWNsYXJlZCIsImxvY2FsQ29udGV4dCIsIkxvY2FsQ29udGV4dCIsImZyb21GaWxlQ29udGV4dCIsInN1cHBvc2l0aW9uc1ZlcmlmaWVkIiwic3VwcG9zaXRpb25WZXJpZmllZCIsImNvbnNlcXVlbnRWZXJpZmllZCIsInByb29mVmVyaWZpZWQiLCJ0b0pTT04iLCJsYWJlbHNKU09OIiwibGFiZWxzVG9MYWJlbHNKU09OIiwiY29uc2VxdWVudEpTT04iLCJjb25zZXF1ZW50VG9Db25zZXF1ZW50SlNPTiIsInN1cHBvc2l0aW9uc0pTT04iLCJzdXBwb3NpdGlvbnNUb1N1cHBvc2l0aW9uc0pTT04iLCJzdWJzdGl0dXRpb25zSlNPTiIsInN1YnN0aXR1dGlvbnNUb1N1YnN0aXR1dGlvbnNKU09OIiwianNvbiIsImZyb21KU09OIiwiQ2xhc3MiLCJsYWJlbHNGcm9tSlNPTiIsImNvbnNlcXVlbnRGcm9tSlNPTiIsInN1cHBvc2l0aW9uc0Zyb21KU09OIiwic3Vic3RpdHV0aW9uc0Zyb21KU09OIiwidG9wTGV2ZWxBc3NlcnRpb24iLCJmcm9tTm9kZSIsIm5vZGUiLCJMYWJlbCIsIlByb29mIiwiQ29uc2VxdWVudCIsIlN1cHBvc2l0aW9uIiwicHJvb2ZOb2RlIiwibGFiZWxOb2RlcyIsImNvbnNlcXVlbnROb2RlIiwic3VwcG9zaXRpb25Ob2RlcyIsIm1hcCIsImxhYmVsTm9kZSIsImZyb21MYWJlbE5vZGUiLCJzdXBwb3NpdGlvbk5vZGUiLCJmcm9tU3VwcG9zaXRpb25Ob2RlIiwiZnJvbUNvbnNlcXVlbnROb2RlIiwiZnJvbVByb29mTm9kZSIsIm1ldGFMZW1tYSIsInJlZHVjZSIsImxhYmVsU3RyaW5nIiwiRU1QVFlfU1RSSU5HIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7O2VBeUJxQkE7O0lBd1BMQyxnQkFBZ0I7ZUFBaEJBOzs7eUJBL1FlOzJEQUVkO3lCQUVZO3FCQUNTO29CQVFXOzREQUN4Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUV6QixJQUFRQyxVQUFxQ0MseUJBQWMsQ0FBbkRELFNBQVNFLFVBQTRCRCx5QkFBYyxDQUExQ0MsU0FBU0MsaUJBQW1CRix5QkFBYyxDQUFqQ0U7QUFFMUIsSUFBTUMsaUJBQWlCQyxJQUFBQSxnQkFBUyxFQUFDLGFBQzNCQyxrQkFBa0JDLElBQUFBLGlCQUFV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