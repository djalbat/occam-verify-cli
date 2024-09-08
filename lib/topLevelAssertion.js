"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return TopLevelAssertion;
    }
});
var _label = /*#__PURE__*/ _interop_require_default(require("./label"));
var _consequent = /*#__PURE__*/ _interop_require_default(require("./consequent"));
var _supposition = /*#__PURE__*/ _interop_require_default(require("./supposition"));
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
var TopLevelAssertion = /*#__PURE__*/ function() {
    function TopLevelAssertion(labels, suppositions, consequent, substitutions, fileContext) {
        _class_call_check(this, TopLevelAssertion);
        this.labels = labels;
        this.suppositions = suppositions;
        this.consequent = consequent;
        this.substitutions = substitutions;
        this.fileContext = fileContext;
    }
    _create_class(TopLevelAssertion, [
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
            key: "getSubstitutions",
            value: function getSubstitutions() {
                return this.substitutions;
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
                var proofSteps = localContext.getProofSteps(), substitutions = _substitutions.default.fromNothing(), suppositionsUnified = unifySuppositions(this.suppositions, proofSteps, substitutions, this.fileContext, localContext);
                if (suppositionsUnified) {
                    var consequentUnified = unifyConsequent(this.consequent, statementNode, substitutions, this.fileContext, localContext);
                    statementUnified = consequentUnified; ///
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
                }), suppositionsJSON = this.suppositions.map(function(supposition) {
                    var suppositionJSON = supposition.toJSON(tokens);
                    return suppositionJSON;
                }), consequentJSON = this.consequent.toJSON(tokens), substitutionsJSON = this.substitutions.toJSON(tokens), labels = labelsJSON, suppositions = suppositionsJSON, consequent = consequentJSON, substitutions = substitutionsJSON, json = {
                    labels: labels,
                    suppositions: suppositions,
                    consequent: consequent,
                    substitutions: substitutions
                };
                return json;
            }
        }
    ], [
        {
            key: "fromJSONAndFileContext",
            value: function fromJSONAndFileContext(Class, json, fileContext) {
                var labels = json.labels;
                var labelsJSON = labels; ///
                labels = labelsJSON.map(function(labelJSON) {
                    var _$json = labelJSON, label = _label.default.fromJSONAndFileContext(_$json, fileContext);
                    return label;
                });
                var suppositions = json.suppositions, consequent = json.consequent, substitutions = json.substitutions;
                var suppositionsJSON = suppositions; ///
                suppositions = suppositionsJSON.map(function(suppositionJSON) {
                    var _$json = suppositionJSON, supposition = _supposition.default.fromJSONAndFileContext(_$json, fileContext);
                    return supposition;
                });
                var consequentJSON = consequent; ///
                json = consequentJSON; ///
                consequent = _consequent.default.fromJSONAndFileContext(json, fileContext);
                var substitutionsJSON = substitutions; ///
                json = substitutionsJSON; ///
                substitutions = _substitutions.default.fromJSONAndFileContext(json, fileContext);
                return new Class(labels, suppositions, consequent, substitutions, fileContext); ///
            }
        },
        {
            key: "fromLabelsSuppositionsConsequentSubstitutionsAndFileContext",
            value: function fromLabelsSuppositionsConsequentSubstitutionsAndFileContext(Class, labels, suppositions, consequent, substitutions, fileContext) {
                return new Class(labels, suppositions, consequent, substitutions, fileContext);
            }
        }
    ]);
    return TopLevelAssertion;
}();
function unifySuppositions(suppositions, proofSteps, substitutions, fileContext, localContext) {
    suppositions = (0, _array.reverse)(suppositions); ///
    proofSteps = (0, _array.reverse)(proofSteps); ///
    var suppositionsUnified = (0, _array.correlate)(suppositions, proofSteps, function(supposition, proofStep) {
        var suppositionUnified = unifySupposition(supposition, proofStep, substitutions, fileContext, localContext);
        if (suppositionUnified) {
            return true;
        }
    });
    return suppositionsUnified;
}
function unifySupposition(supposition, proofStep, substitutions, fileContext, localContext) {
    var suppositionUnified = false;
    substitutions.snapshot();
    var subproofNode = proofStep.getSubproofNode(), statementNode = proofStep.getStatementNode();
    if (subproofNode !== null) {
        var subproofUnified = supposition.unifySubproof(subproofNode, substitutions, fileContext, localContext);
        suppositionUnified = subproofUnified; ///
    }
    if (statementNode !== null) {
        var statementUnified = supposition.unifyStatement(statementNode, substitutions, fileContext, localContext);
        suppositionUnified = statementUnified; ///
    }
    suppositionUnified ? substitutions.continue() : substitutions.rollback();
    return suppositionUnified;
}
function unifyConsequent(consequent, statementNode, substitutions, fileContext, localContext) {
    var consequentUnified;
    substitutions.snapshot();
    var statementUnified = consequent.unifyStatement(statementNode, substitutions, fileContext, localContext);
    consequentUnified = statementUnified; ///
    consequentUnified ? substitutions.continue() : substitutions.rollback();
    return consequentUnified;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy90b3BMZXZlbEFzc2VydGlvbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IExhYmVsIGZyb20gXCIuL2xhYmVsXCI7XG5pbXBvcnQgQ29uc2VxdWVudCBmcm9tIFwiLi9jb25zZXF1ZW50XCI7XG5pbXBvcnQgU3VwcG9zaXRpb24gZnJvbSBcIi4vc3VwcG9zaXRpb25cIjtcbmltcG9ydCBTdWJzdGl0dXRpb25zIGZyb20gXCIuL3N1YnN0aXR1dGlvbnNcIjtcblxuaW1wb3J0IHsgcmV2ZXJzZSwgY29ycmVsYXRlIH0gZnJvbSBcIi4vdXRpbGl0aWVzL2FycmF5XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRvcExldmVsQXNzZXJ0aW9uIHtcbiAgY29uc3RydWN0b3IobGFiZWxzLCBzdXBwb3NpdGlvbnMsIGNvbnNlcXVlbnQsIHN1YnN0aXR1dGlvbnMsIGZpbGVDb250ZXh0KSB7XG4gICAgdGhpcy5sYWJlbHMgPSBsYWJlbHM7XG4gICAgdGhpcy5zdXBwb3NpdGlvbnMgPSBzdXBwb3NpdGlvbnM7XG4gICAgdGhpcy5jb25zZXF1ZW50ID0gY29uc2VxdWVudDtcbiAgICB0aGlzLnN1YnN0aXR1dGlvbnMgPSBzdWJzdGl0dXRpb25zO1xuICAgIHRoaXMuZmlsZUNvbnRleHQgPSBmaWxlQ29udGV4dDtcbiAgfVxuXG4gIGdldExhYmVscygpIHtcbiAgICByZXR1cm4gdGhpcy5sYWJlbHM7XG4gIH1cblxuICBnZXRTdXBwb3NpdGlvbnMoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3VwcG9zaXRpb25zO1xuICB9XG5cbiAgZ2V0Q29uc2VxdWVudCgpIHtcbiAgICByZXR1cm4gdGhpcy5jb25zZXF1ZW50O1xuICB9XG5cbiAgZ2V0U3Vic3RpdHV0aW9ucygpIHtcbiAgICByZXR1cm4gdGhpcy5zdWJzdGl0dXRpb25zO1xuICB9XG5cbiAgZ2V0RmlsZUNvbnRleHQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZmlsZUNvbnRleHQ7XG4gIH1cblxuICB1bmlmeVN0YXRlbWVudChzdGF0ZW1lbnROb2RlLCBsb2NhbENvbnRleHQpIHtcbiAgICBsZXQgc3RhdGVtZW50VW5pZmllZCA9IGZhbHNlO1xuXG4gICAgY29uc3QgcHJvb2ZTdGVwcyA9IGxvY2FsQ29udGV4dC5nZXRQcm9vZlN0ZXBzKCksXG4gICAgICAgICAgc3Vic3RpdHV0aW9ucyA9IFN1YnN0aXR1dGlvbnMuZnJvbU5vdGhpbmcoKSxcbiAgICAgICAgICBzdXBwb3NpdGlvbnNVbmlmaWVkID0gdW5pZnlTdXBwb3NpdGlvbnModGhpcy5zdXBwb3NpdGlvbnMsIHByb29mU3RlcHMsIHN1YnN0aXR1dGlvbnMsIHRoaXMuZmlsZUNvbnRleHQsIGxvY2FsQ29udGV4dCk7XG5cbiAgICBpZiAoc3VwcG9zaXRpb25zVW5pZmllZCkge1xuICAgICAgY29uc3QgY29uc2VxdWVudFVuaWZpZWQgPSB1bmlmeUNvbnNlcXVlbnQodGhpcy5jb25zZXF1ZW50LCBzdGF0ZW1lbnROb2RlLCBzdWJzdGl0dXRpb25zLCB0aGlzLmZpbGVDb250ZXh0LCBsb2NhbENvbnRleHQpO1xuXG4gICAgICBzdGF0ZW1lbnRVbmlmaWVkID0gY29uc2VxdWVudFVuaWZpZWQ7ICAvLy9cbiAgICB9XG5cbiAgICByZXR1cm4gc3RhdGVtZW50VW5pZmllZDtcbiAgfVxuXG4gIG1hdGNoTWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlKSB7XG4gICAgY29uc3QgbWF0Y2hlc01ldGF2YXJpYWJsZU5vZGUgPSB0aGlzLmxhYmVscy5zb21lKChsYWJlbCkgPT4ge1xuICAgICAgY29uc3QgbGFiZWxNYXRjaGVzTWV0YXZhcmlhYmxlTm9kZSA9IGxhYmVsLm1hdGNoTWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlKTtcblxuICAgICAgaWYgKGxhYmVsTWF0Y2hlc01ldGF2YXJpYWJsZU5vZGUpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gbWF0Y2hlc01ldGF2YXJpYWJsZU5vZGU7XG4gIH1cblxuICB0b0pTT04odG9rZW5zKSB7XG4gICAgY29uc3QgbGFiZWxzSlNPTiA9IHRoaXMubGFiZWxzLm1hcCgobGFiZWwpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGxhYmVsSlNPTiA9IGxhYmVsLnRvSlNPTih0b2tlbnMpO1xuXG4gICAgICAgICAgICByZXR1cm4gbGFiZWxKU09OO1xuICAgICAgICAgIH0pLFxuICAgICAgICAgIHN1cHBvc2l0aW9uc0pTT04gPSB0aGlzLnN1cHBvc2l0aW9ucy5tYXAoKHN1cHBvc2l0aW9uKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBzdXBwb3NpdGlvbkpTT04gPSBzdXBwb3NpdGlvbi50b0pTT04odG9rZW5zKTtcblxuICAgICAgICAgICAgcmV0dXJuIHN1cHBvc2l0aW9uSlNPTjtcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBjb25zZXF1ZW50SlNPTiA9IHRoaXMuY29uc2VxdWVudC50b0pTT04odG9rZW5zKSxcbiAgICAgICAgICBzdWJzdGl0dXRpb25zSlNPTiA9IHRoaXMuc3Vic3RpdHV0aW9ucy50b0pTT04odG9rZW5zKSxcbiAgICAgICAgICBsYWJlbHMgPSBsYWJlbHNKU09OLCAgLy8vXG4gICAgICAgICAgc3VwcG9zaXRpb25zID0gc3VwcG9zaXRpb25zSlNPTiwgIC8vL1xuICAgICAgICAgIGNvbnNlcXVlbnQgPSBjb25zZXF1ZW50SlNPTiwgIC8vL1xuICAgICAgICAgIHN1YnN0aXR1dGlvbnMgPSBzdWJzdGl0dXRpb25zSlNPTiwgIC8vL1xuICAgICAgICAgIGpzb24gPSB7XG4gICAgICAgICAgICBsYWJlbHMsXG4gICAgICAgICAgICBzdXBwb3NpdGlvbnMsXG4gICAgICAgICAgICBjb25zZXF1ZW50LFxuICAgICAgICAgICAgc3Vic3RpdHV0aW9uc1xuICAgICAgICAgIH07XG5cbiAgICByZXR1cm4ganNvbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tSlNPTkFuZEZpbGVDb250ZXh0KENsYXNzLCBqc29uLCBmaWxlQ29udGV4dCkge1xuICAgIGxldCB7IGxhYmVscyB9ID0ganNvbjtcblxuICAgIGNvbnN0IGxhYmVsc0pTT04gPSBsYWJlbHM7ICAvLy9cblxuICAgIGxhYmVscyA9IGxhYmVsc0pTT04ubWFwKChsYWJlbEpTT04pID0+IHtcbiAgICAgIGNvbnN0IGpzb24gPSBsYWJlbEpTT04sIC8vL1xuICAgICAgICAgICAgbGFiZWwgPSBMYWJlbC5mcm9tSlNPTkFuZEZpbGVDb250ZXh0KGpzb24sIGZpbGVDb250ZXh0KTtcblxuICAgICAgcmV0dXJuIGxhYmVsO1xuICAgIH0pO1xuXG4gICAgbGV0IHsgc3VwcG9zaXRpb25zLCBjb25zZXF1ZW50LCBzdWJzdGl0dXRpb25zIH0gPSBqc29uO1xuXG4gICAgY29uc3Qgc3VwcG9zaXRpb25zSlNPTiA9IHN1cHBvc2l0aW9uczsgIC8vL1xuXG4gICAgc3VwcG9zaXRpb25zID0gc3VwcG9zaXRpb25zSlNPTi5tYXAoKHN1cHBvc2l0aW9uSlNPTikgPT4ge1xuICAgICAgY29uc3QganNvbiA9IHN1cHBvc2l0aW9uSlNPTiwgLy8vXG4gICAgICAgICAgICBzdXBwb3NpdGlvbiA9IFN1cHBvc2l0aW9uLmZyb21KU09OQW5kRmlsZUNvbnRleHQoanNvbiwgZmlsZUNvbnRleHQpO1xuXG4gICAgICByZXR1cm4gc3VwcG9zaXRpb247XG4gICAgfSk7XG5cbiAgICBjb25zdCBjb25zZXF1ZW50SlNPTiA9IGNvbnNlcXVlbnQ7ICAvLy9cblxuICAgIGpzb24gPSBjb25zZXF1ZW50SlNPTjsgIC8vL1xuXG4gICAgY29uc2VxdWVudCA9IENvbnNlcXVlbnQuZnJvbUpTT05BbmRGaWxlQ29udGV4dChqc29uLCBmaWxlQ29udGV4dCk7XG5cbiAgICBjb25zdCBzdWJzdGl0dXRpb25zSlNPTiA9IHN1YnN0aXR1dGlvbnM7ICAvLy9cblxuICAgIGpzb24gPSBzdWJzdGl0dXRpb25zSlNPTjsgLy8vXG5cbiAgICBzdWJzdGl0dXRpb25zID0gU3Vic3RpdHV0aW9ucy5mcm9tSlNPTkFuZEZpbGVDb250ZXh0KGpzb24sIGZpbGVDb250ZXh0KTtcblxuICAgIHJldHVybiBuZXcgQ2xhc3MobGFiZWxzLCBzdXBwb3NpdGlvbnMsIGNvbnNlcXVlbnQsIHN1YnN0aXR1dGlvbnMsIGZpbGVDb250ZXh0KTsgIC8vL1xuICB9XG5cbiAgc3RhdGljIGZyb21MYWJlbHNTdXBwb3NpdGlvbnNDb25zZXF1ZW50U3Vic3RpdHV0aW9uc0FuZEZpbGVDb250ZXh0KENsYXNzLCBsYWJlbHMsIHN1cHBvc2l0aW9ucywgY29uc2VxdWVudCwgc3Vic3RpdHV0aW9ucywgZmlsZUNvbnRleHQpIHsgcmV0dXJuIG5ldyBDbGFzcyhsYWJlbHMsIHN1cHBvc2l0aW9ucywgY29uc2VxdWVudCwgc3Vic3RpdHV0aW9ucywgZmlsZUNvbnRleHQpOyB9XG59XG5cbmZ1bmN0aW9uIHVuaWZ5U3VwcG9zaXRpb25zKHN1cHBvc2l0aW9ucywgcHJvb2ZTdGVwcywgc3Vic3RpdHV0aW9ucywgZmlsZUNvbnRleHQsIGxvY2FsQ29udGV4dCkge1xuICBzdXBwb3NpdGlvbnMgPSByZXZlcnNlKHN1cHBvc2l0aW9ucyk7IC8vL1xuXG4gIHByb29mU3RlcHMgPSByZXZlcnNlKHByb29mU3RlcHMpOyAvLy9cblxuICBjb25zdCBzdXBwb3NpdGlvbnNVbmlmaWVkID0gY29ycmVsYXRlKHN1cHBvc2l0aW9ucywgcHJvb2ZTdGVwcywgKHN1cHBvc2l0aW9uLCBwcm9vZlN0ZXApID0+IHtcbiAgICBjb25zdCBzdXBwb3NpdGlvblVuaWZpZWQgPSB1bmlmeVN1cHBvc2l0aW9uKHN1cHBvc2l0aW9uLCBwcm9vZlN0ZXAsIHN1YnN0aXR1dGlvbnMsIGZpbGVDb250ZXh0LCBsb2NhbENvbnRleHQpO1xuXG4gICAgaWYgKHN1cHBvc2l0aW9uVW5pZmllZCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gc3VwcG9zaXRpb25zVW5pZmllZDtcbn1cblxuZnVuY3Rpb24gdW5pZnlTdXBwb3NpdGlvbihzdXBwb3NpdGlvbiwgcHJvb2ZTdGVwLCBzdWJzdGl0dXRpb25zLCBmaWxlQ29udGV4dCwgbG9jYWxDb250ZXh0KSB7XG4gIGxldCBzdXBwb3NpdGlvblVuaWZpZWQgPSBmYWxzZTtcblxuICBzdWJzdGl0dXRpb25zLnNuYXBzaG90KCk7XG5cbiAgY29uc3Qgc3VicHJvb2ZOb2RlID0gcHJvb2ZTdGVwLmdldFN1YnByb29mTm9kZSgpLFxuICAgICAgICBzdGF0ZW1lbnROb2RlID0gcHJvb2ZTdGVwLmdldFN0YXRlbWVudE5vZGUoKTtcblxuICBpZiAoc3VicHJvb2ZOb2RlICE9PSBudWxsKSB7XG4gICAgY29uc3Qgc3VicHJvb2ZVbmlmaWVkID0gc3VwcG9zaXRpb24udW5pZnlTdWJwcm9vZihzdWJwcm9vZk5vZGUsIHN1YnN0aXR1dGlvbnMsIGZpbGVDb250ZXh0LCBsb2NhbENvbnRleHQpO1xuXG4gICAgc3VwcG9zaXRpb25VbmlmaWVkID0gc3VicHJvb2ZVbmlmaWVkOyAvLy9cbiAgfVxuXG4gIGlmIChzdGF0ZW1lbnROb2RlICE9PSBudWxsKSB7XG4gICAgY29uc3Qgc3RhdGVtZW50VW5pZmllZCA9IHN1cHBvc2l0aW9uLnVuaWZ5U3RhdGVtZW50KHN0YXRlbWVudE5vZGUsIHN1YnN0aXR1dGlvbnMsIGZpbGVDb250ZXh0LCBsb2NhbENvbnRleHQpO1xuXG4gICAgc3VwcG9zaXRpb25VbmlmaWVkID0gc3RhdGVtZW50VW5pZmllZDsgIC8vL1xuICB9XG5cbiAgc3VwcG9zaXRpb25VbmlmaWVkID9cbiAgICBzdWJzdGl0dXRpb25zLmNvbnRpbnVlKCkgOlxuICAgICAgc3Vic3RpdHV0aW9ucy5yb2xsYmFjaygpO1xuXG4gIHJldHVybiBzdXBwb3NpdGlvblVuaWZpZWQ7XG59XG5cbmZ1bmN0aW9uIHVuaWZ5Q29uc2VxdWVudChjb25zZXF1ZW50LCBzdGF0ZW1lbnROb2RlLCBzdWJzdGl0dXRpb25zLCBmaWxlQ29udGV4dCwgbG9jYWxDb250ZXh0KSB7XG4gIGxldCBjb25zZXF1ZW50VW5pZmllZDtcblxuICBzdWJzdGl0dXRpb25zLnNuYXBzaG90KCk7XG5cbiAgY29uc3Qgc3RhdGVtZW50VW5pZmllZCA9IGNvbnNlcXVlbnQudW5pZnlTdGF0ZW1lbnQoc3RhdGVtZW50Tm9kZSwgc3Vic3RpdHV0aW9ucywgZmlsZUNvbnRleHQsIGxvY2FsQ29udGV4dCk7XG5cbiAgY29uc2VxdWVudFVuaWZpZWQgPSBzdGF0ZW1lbnRVbmlmaWVkOyAvLy9cblxuICBjb25zZXF1ZW50VW5pZmllZCA/XG4gICAgc3Vic3RpdHV0aW9ucy5jb250aW51ZSgpIDpcbiAgICAgIHN1YnN0aXR1dGlvbnMucm9sbGJhY2soKTtcblxuICByZXR1cm4gY29uc2VxdWVudFVuaWZpZWQ7XG59XG4iXSwibmFtZXMiOlsiVG9wTGV2ZWxBc3NlcnRpb24iLCJsYWJlbHMiLCJzdXBwb3NpdGlvbnMiLCJjb25zZXF1ZW50Iiwic3Vic3RpdHV0aW9ucyIsImZpbGVDb250ZXh0IiwiZ2V0TGFiZWxzIiwiZ2V0U3VwcG9zaXRpb25zIiwiZ2V0Q29uc2VxdWVudCIsImdldFN1YnN0aXR1dGlvbnMiLCJnZXRGaWxlQ29udGV4dCIsInVuaWZ5U3RhdGVtZW50Iiwic3RhdGVtZW50Tm9kZSIsImxvY2FsQ29udGV4dCIsInN0YXRlbWVudFVuaWZpZWQiLCJwcm9vZlN0ZXBzIiwiZ2V0UHJvb2ZTdGVwcyIsIlN1YnN0aXR1dGlvbnMiLCJmcm9tTm90aGluZyIsInN1cHBvc2l0aW9uc1VuaWZpZWQiLCJ1bmlmeVN1cHBvc2l0aW9ucyIsImNvbnNlcXVlbnRVbmlmaWVkIiwidW5pZnlDb25zZXF1ZW50IiwibWF0Y2hNZXRhdmFyaWFibGVOb2RlIiwibWV0YXZhcmlhYmxlTm9kZSIsIm1hdGNoZXNNZXRhdmFyaWFibGVOb2RlIiwic29tZSIsImxhYmVsIiwibGFiZWxNYXRjaGVzTWV0YXZhcmlhYmxlTm9kZSIsInRvSlNPTiIsInRva2VucyIsImxhYmVsc0pTT04iLCJtYXAiLCJsYWJlbEpTT04iLCJzdXBwb3NpdGlvbnNKU09OIiwic3VwcG9zaXRpb24iLCJzdXBwb3NpdGlvbkpTT04iLCJjb25zZXF1ZW50SlNPTiIsInN1YnN0aXR1dGlvbnNKU09OIiwianNvbiIsImZyb21KU09OQW5kRmlsZUNvbnRleHQiLCJDbGFzcyIsIkxhYmVsIiwiU3VwcG9zaXRpb24iLCJDb25zZXF1ZW50IiwiZnJvbUxhYmVsc1N1cHBvc2l0aW9uc0NvbnNlcXVlbnRTdWJzdGl0dXRpb25zQW5kRmlsZUNvbnRleHQiLCJyZXZlcnNlIiwiY29ycmVsYXRlIiwicHJvb2ZTdGVwIiwic3VwcG9zaXRpb25VbmlmaWVkIiwidW5pZnlTdXBwb3NpdGlvbiIsInNuYXBzaG90Iiwic3VicHJvb2ZOb2RlIiwiZ2V0U3VicHJvb2ZOb2RlIiwiZ2V0U3RhdGVtZW50Tm9kZSIsInN1YnByb29mVW5pZmllZCIsInVuaWZ5U3VicHJvb2YiLCJjb250aW51ZSIsInJvbGxiYWNrIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQVNxQkE7Ozs0REFQSDtpRUFDSztrRUFDQztvRUFDRTtxQkFFUzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVwQixJQUFBLEFBQU1BLGtDQUFELEFBQUw7YUFBTUEsa0JBQ1BDLE1BQU0sRUFBRUMsWUFBWSxFQUFFQyxVQUFVLEVBQUVDLGFBQWEsRUFBRUMsV0FBVztnQ0FEckRMO1FBRWpCLElBQUksQ0FBQ0MsTUFBTSxHQUFHQTtRQUNkLElBQUksQ0FBQ0MsWUFBWSxHQUFHQTtRQUNwQixJQUFJLENBQUNDLFVBQVUsR0FBR0E7UUFDbEIsSUFBSSxDQUFDQyxhQUFhLEdBQUdBO1FBQ3JCLElBQUksQ0FBQ0MsV0FBVyxHQUFHQTs7a0JBTkZMOztZQVNuQk0sS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDTCxNQUFNO1lBQ3BCOzs7WUFFQU0sS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDTCxZQUFZO1lBQzFCOzs7WUFFQU0sS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDTCxV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