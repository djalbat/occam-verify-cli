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
var _substitutions = /*#__PURE__*/ _interop_require_default(require("./substitutions"));
var _substitutions1 = /*#__PURE__*/ _interop_require_default(require("./resolve/substitutions"));
var _consequentWithStatement = /*#__PURE__*/ _interop_require_default(require("./unify/consequentWithStatement"));
var _suppositionsWithProofSteps = /*#__PURE__*/ _interop_require_default(require("./unify/suppositionsWithProofSteps"));
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
            key: "getLabelMetavariableNodes",
            value: function getLabelMetavariableNodes() {
                var labelMetavariableNodes = this.labels.map(function(label) {
                    var labelMetavariableNode = label.getMetavariableNode();
                    return labelMetavariableNode;
                });
                return labelMetavariableNodes;
            }
        },
        {
            key: "unifyStatement",
            value: function unifyStatement(statementNode, localContext) {
                var statementUnified = false;
                var substitutions = _substitutions.default.fromNothing(), proofSteps = localContext.getProofSteps(), proofStepsB = proofSteps, fileContextA = this.fileContext, suppositionsA = this.suppositions, localContextB = localContext, suppositionsUnified = (0, _suppositionsWithProofSteps.default)(suppositionsA, proofStepsB, substitutions, fileContextA, localContextB);
                if (suppositionsUnified) {
                    var consequentA = this.consequent, consequentUnified = (0, _consequentWithStatement.default)(consequentA, statementNode, substitutions, fileContextA, localContext);
                    if (consequentUnified) {
                        var substitutionsResolved = (0, _substitutions1.default)(substitutions, fileContextA, localContextB);
                        statementUnified = substitutionsResolved; ///
                    }
                }
                return statementUnified;
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
        }
    ], [
        {
            key: "fromLabelsSuppositionsConsequentSubstitutionsAndFileContext",
            value: function fromLabelsSuppositionsConsequentSubstitutionsAndFileContext(Class, labels, suppositions, consequent, substitutions, fileContext) {
                return new Class(labels, suppositions, consequent, substitutions, fileContext);
            }
        }
    ]);
    return TopLevelAssertion;
}();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy90b3BMZXZlbEFzc2VydGlvbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFN1YnN0aXR1dGlvbnMgZnJvbSBcIi4vc3Vic3RpdHV0aW9uc1wiO1xuaW1wb3J0IHJlc29sdmVTdWJzdGl0dXRpb25zIGZyb20gXCIuL3Jlc29sdmUvc3Vic3RpdHV0aW9uc1wiO1xuaW1wb3J0IHVuaWZ5Q29uc2VxdWVudFdpdGhTdGF0ZW1lbnQgZnJvbSBcIi4vdW5pZnkvY29uc2VxdWVudFdpdGhTdGF0ZW1lbnRcIjtcbmltcG9ydCB1bmlmeVN1cHBvc2l0aW9uc1dpdGhQcm9vZlN0ZXBzIGZyb20gXCIuL3VuaWZ5L3N1cHBvc2l0aW9uc1dpdGhQcm9vZlN0ZXBzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRvcExldmVsQXNzZXJ0aW9uIHtcbiAgY29uc3RydWN0b3IobGFiZWxzLCBzdXBwb3NpdGlvbnMsIGNvbnNlcXVlbnQsIHN1YnN0aXR1dGlvbnMsIGZpbGVDb250ZXh0KSB7XG4gICAgdGhpcy5sYWJlbHMgPSBsYWJlbHM7XG4gICAgdGhpcy5zdXBwb3NpdGlvbnMgPSBzdXBwb3NpdGlvbnM7XG4gICAgdGhpcy5jb25zZXF1ZW50ID0gY29uc2VxdWVudDtcbiAgICB0aGlzLnN1YnN0aXR1dGlvbnMgPSBzdWJzdGl0dXRpb25zO1xuICAgIHRoaXMuZmlsZUNvbnRleHQgPSBmaWxlQ29udGV4dDtcbiAgfVxuXG4gIGdldExhYmVscygpIHtcbiAgICByZXR1cm4gdGhpcy5sYWJlbHM7XG4gIH1cblxuICBnZXRTdXBwb3NpdGlvbnMoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3VwcG9zaXRpb25zO1xuICB9XG5cbiAgZ2V0Q29uc2VxdWVudCgpIHtcbiAgICByZXR1cm4gdGhpcy5jb25zZXF1ZW50O1xuICB9XG5cbiAgZ2V0U3Vic3RpdHV0aW9ucygpIHtcbiAgICByZXR1cm4gdGhpcy5zdWJzdGl0dXRpb25zO1xuICB9XG5cbiAgZ2V0RmlsZUNvbnRleHQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZmlsZUNvbnRleHQ7XG4gIH1cblxuICBnZXRMYWJlbE1ldGF2YXJpYWJsZU5vZGVzKCkge1xuICAgIGNvbnN0IGxhYmVsTWV0YXZhcmlhYmxlTm9kZXMgPSB0aGlzLmxhYmVscy5tYXAoKGxhYmVsKSA9PiB7XG4gICAgICBjb25zdCBsYWJlbE1ldGF2YXJpYWJsZU5vZGUgPSBsYWJlbC5nZXRNZXRhdmFyaWFibGVOb2RlKCk7XG5cbiAgICAgIHJldHVybiBsYWJlbE1ldGF2YXJpYWJsZU5vZGU7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gbGFiZWxNZXRhdmFyaWFibGVOb2RlcztcbiAgfVxuXG4gIHVuaWZ5U3RhdGVtZW50KHN0YXRlbWVudE5vZGUsIGxvY2FsQ29udGV4dCkge1xuICAgIGxldCBzdGF0ZW1lbnRVbmlmaWVkID0gZmFsc2U7XG5cbiAgICBjb25zdCBzdWJzdGl0dXRpb25zID0gU3Vic3RpdHV0aW9ucy5mcm9tTm90aGluZygpLFxuICAgICAgICAgIHByb29mU3RlcHMgPSBsb2NhbENvbnRleHQuZ2V0UHJvb2ZTdGVwcygpLFxuICAgICAgICAgIHByb29mU3RlcHNCID0gcHJvb2ZTdGVwcywgLy8vXG4gICAgICAgICAgZmlsZUNvbnRleHRBID0gdGhpcy5maWxlQ29udGV4dCwgIC8vL1xuICAgICAgICAgIHN1cHBvc2l0aW9uc0EgPSB0aGlzLnN1cHBvc2l0aW9ucywgIC8vL1xuICAgICAgICAgIGxvY2FsQ29udGV4dEIgPSBsb2NhbENvbnRleHQsIC8vL1xuICAgICAgICAgIHN1cHBvc2l0aW9uc1VuaWZpZWQgPSB1bmlmeVN1cHBvc2l0aW9uc1dpdGhQcm9vZlN0ZXBzKHN1cHBvc2l0aW9uc0EsIHByb29mU3RlcHNCLCBzdWJzdGl0dXRpb25zLCBmaWxlQ29udGV4dEEsIGxvY2FsQ29udGV4dEIpO1xuXG4gICAgaWYgKHN1cHBvc2l0aW9uc1VuaWZpZWQpIHtcbiAgICAgIGNvbnN0IGNvbnNlcXVlbnRBID0gdGhpcy5jb25zZXF1ZW50LCAgLy8vXG4gICAgICAgICAgICBjb25zZXF1ZW50VW5pZmllZCA9IHVuaWZ5Q29uc2VxdWVudFdpdGhTdGF0ZW1lbnQoY29uc2VxdWVudEEsIHN0YXRlbWVudE5vZGUsIHN1YnN0aXR1dGlvbnMsIGZpbGVDb250ZXh0QSwgbG9jYWxDb250ZXh0KTtcblxuICAgICAgaWYgKGNvbnNlcXVlbnRVbmlmaWVkKSB7XG4gICAgICAgIGNvbnN0IHN1YnN0aXR1dGlvbnNSZXNvbHZlZCA9IHJlc29sdmVTdWJzdGl0dXRpb25zKHN1YnN0aXR1dGlvbnMsIGZpbGVDb250ZXh0QSwgbG9jYWxDb250ZXh0Qik7XG5cbiAgICAgICAgc3RhdGVtZW50VW5pZmllZCA9IHN1YnN0aXR1dGlvbnNSZXNvbHZlZDsgLy8vXG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHN0YXRlbWVudFVuaWZpZWQ7XG4gIH1cblxuICBtYXRjaE1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSkge1xuICAgIGNvbnN0IG1ldGF2YXJpYWJsZU5vZGVNYXRjaGVzID0gdGhpcy5sYWJlbHMuc29tZSgobGFiZWwpID0+IHtcbiAgICAgIGNvbnN0IG1ldGF2YXJpYWJsZU5vZGVNYXRjaGVzID0gbGFiZWwubWF0Y2hNZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUpO1xuXG4gICAgICBpZiAobWV0YXZhcmlhYmxlTm9kZU1hdGNoZXMpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gbWV0YXZhcmlhYmxlTm9kZU1hdGNoZXM7XG4gIH1cblxuICBzdGF0aWMgZnJvbUxhYmVsc1N1cHBvc2l0aW9uc0NvbnNlcXVlbnRTdWJzdGl0dXRpb25zQW5kRmlsZUNvbnRleHQoQ2xhc3MsIGxhYmVscywgc3VwcG9zaXRpb25zLCBjb25zZXF1ZW50LCBzdWJzdGl0dXRpb25zLCBmaWxlQ29udGV4dCkgeyByZXR1cm4gbmV3IENsYXNzKGxhYmVscywgc3VwcG9zaXRpb25zLCBjb25zZXF1ZW50LCBzdWJzdGl0dXRpb25zLCBmaWxlQ29udGV4dCk7IH1cbn1cbiJdLCJuYW1lcyI6WyJUb3BMZXZlbEFzc2VydGlvbiIsImxhYmVscyIsInN1cHBvc2l0aW9ucyIsImNvbnNlcXVlbnQiLCJzdWJzdGl0dXRpb25zIiwiZmlsZUNvbnRleHQiLCJnZXRMYWJlbHMiLCJnZXRTdXBwb3NpdGlvbnMiLCJnZXRDb25zZXF1ZW50IiwiZ2V0U3Vic3RpdHV0aW9ucyIsImdldEZpbGVDb250ZXh0IiwiZ2V0TGFiZWxNZXRhdmFyaWFibGVOb2RlcyIsImxhYmVsTWV0YXZhcmlhYmxlTm9kZXMiLCJtYXAiLCJsYWJlbCIsImxhYmVsTWV0YXZhcmlhYmxlTm9kZSIsImdldE1ldGF2YXJpYWJsZU5vZGUiLCJ1bmlmeVN0YXRlbWVudCIsInN0YXRlbWVudE5vZGUiLCJsb2NhbENvbnRleHQiLCJzdGF0ZW1lbnRVbmlmaWVkIiwiU3Vic3RpdHV0aW9ucyIsImZyb21Ob3RoaW5nIiwicHJvb2ZTdGVwcyIsImdldFByb29mU3RlcHMiLCJwcm9vZlN0ZXBzQiIsImZpbGVDb250ZXh0QSIsInN1cHBvc2l0aW9uc0EiLCJsb2NhbENvbnRleHRCIiwic3VwcG9zaXRpb25zVW5pZmllZCIsInVuaWZ5U3VwcG9zaXRpb25zV2l0aFByb29mU3RlcHMiLCJjb25zZXF1ZW50QSIsImNvbnNlcXVlbnRVbmlmaWVkIiwidW5pZnlDb25zZXF1ZW50V2l0aFN0YXRlbWVudCIsInN1YnN0aXR1dGlvbnNSZXNvbHZlZCIsInJlc29sdmVTdWJzdGl0dXRpb25zIiwibWF0Y2hNZXRhdmFyaWFibGVOb2RlIiwibWV0YXZhcmlhYmxlTm9kZSIsIm1ldGF2YXJpYWJsZU5vZGVNYXRjaGVzIiwic29tZSIsImZyb21MYWJlbHNTdXBwb3NpdGlvbnNDb25zZXF1ZW50U3Vic3RpdHV0aW9uc0FuZEZpbGVDb250ZXh0IiwiQ2xhc3MiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBT3FCQTs7O29FQUxLO3FFQUNP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