"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return ProofStep;
    }
});
var _substitutions = /*#__PURE__*/ _interop_require_default(require("./substitutions"));
var _intrinsicLevel = /*#__PURE__*/ _interop_require_default(require("./unifier/intrinsicLevel"));
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
var ProofStep = /*#__PURE__*/ function() {
    function ProofStep(subproofNode, statementNode) {
        _class_call_check(this, ProofStep);
        this.subproofNode = subproofNode;
        this.statementNode = statementNode;
    }
    _create_class(ProofStep, [
        {
            key: "getSubproofNode",
            value: function getSubproofNode() {
                return this.subproofNode;
            }
        },
        {
            key: "getStatementNode",
            value: function getStatementNode() {
                return this.statementNode;
            }
        },
        {
            key: "unifyStatement",
            value: function unifyStatement(statementNode, equivalences, localContextA, localContextB) {
                var statementUnified = false;
                if (this.statementNode !== null) {
                    var statementUnifiedAgainstStatement = false;
                    if (!statementUnifiedAgainstStatement) {
                        var statementNodeA = statementNode, statementNodeB = this.statementNode; ///
                        statementUnifiedAgainstStatement = unifyStatementAgainstStatement(statementNodeA, statementNodeB, equivalences, localContextA, localContextB);
                    }
                    if (!statementUnifiedAgainstStatement) {
                        var statementNodeA1 = statementNode, statementNodeB1 = this.statementNode; ///
                        statementUnifiedAgainstStatement = unifyStatementAgainstStatement(statementNodeA1, statementNodeB1, equivalences, localContextA, localContextB);
                    }
                    statementUnified = statementUnifiedAgainstStatement; ///
                }
                return statementUnified;
            }
        }
    ], [
        {
            key: "fromSubproofNode",
            value: function fromSubproofNode(subproofNode) {
                var statementNode = null, proofStep = new ProofStep(subproofNode, statementNode);
                return proofStep;
            }
        },
        {
            key: "fromStatementNode",
            value: function fromStatementNode(statementNode) {
                var subproofNode = null, proofStep = new ProofStep(subproofNode, statementNode);
                return proofStep;
            }
        }
    ]);
    return ProofStep;
}();
function unifyStatementAgainstStatement(statementNodeA, statementNodeB, equivalences, localContextA, localContextB) {
    var statementUnifiedAgainstStatement = false;
    var statementStringA = localContextA.nodeAsString(statementNodeA), statementStringB = localContextB.nodeAsString(statementNodeB);
    localContextB.trace("Unifying the '".concat(statementStringB, "' statement against the '").concat(statementStringA, "' statement..."), statementNodeB);
    var substitutions = _substitutions.default.fromNothing(), nodeA = statementNodeA, nodeB = statementNodeB, unified = _intrinsicLevel.default.unify(nodeA, nodeB, substitutions, localContextA, localContextB);
    if (unified) {
        var substitutionsUnifiedAgainstEquivalences = substitutions.unifyAgainstEquivalences(equivalences, localContextA, localContextB);
        statementUnifiedAgainstStatement = substitutionsUnifiedAgainstEquivalences; ///
    }
    if (statementUnifiedAgainstStatement) {
        localContextB.debug("...unified the '".concat(statementStringB, "' statement against the '").concat(statementStringA, "' statement."), statementNodeB);
    }
    return statementUnifiedAgainstStatement;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9wcm9vZlN0ZXAuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBTdWJzdGl0dXRpb25zIGZyb20gXCIuL3N1YnN0aXR1dGlvbnNcIjtcbmltcG9ydCBpbnRyaW5zaWNMZXZlbFVuaWZpZXIgZnJvbSBcIi4vdW5pZmllci9pbnRyaW5zaWNMZXZlbFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQcm9vZlN0ZXAge1xuICBjb25zdHJ1Y3RvcihzdWJwcm9vZk5vZGUsIHN0YXRlbWVudE5vZGUpIHtcbiAgICB0aGlzLnN1YnByb29mTm9kZSA9IHN1YnByb29mTm9kZTtcbiAgICB0aGlzLnN0YXRlbWVudE5vZGUgPSBzdGF0ZW1lbnROb2RlO1xuICB9XG5cbiAgZ2V0U3VicHJvb2ZOb2RlKCkge1xuICAgIHJldHVybiB0aGlzLnN1YnByb29mTm9kZTtcbiAgfVxuXG4gIGdldFN0YXRlbWVudE5vZGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RhdGVtZW50Tm9kZTtcbiAgfVxuXG4gIHVuaWZ5U3RhdGVtZW50KHN0YXRlbWVudE5vZGUsIGVxdWl2YWxlbmNlcywgbG9jYWxDb250ZXh0QSwgbG9jYWxDb250ZXh0Qikge1xuICAgIGxldCBzdGF0ZW1lbnRVbmlmaWVkID0gZmFsc2U7XG5cbiAgICBpZiAodGhpcy5zdGF0ZW1lbnROb2RlICE9PSBudWxsKSB7XG4gICAgICBsZXQgc3RhdGVtZW50VW5pZmllZEFnYWluc3RTdGF0ZW1lbnQgPSBmYWxzZTtcblxuICAgICAgaWYgKCFzdGF0ZW1lbnRVbmlmaWVkQWdhaW5zdFN0YXRlbWVudCkge1xuICAgICAgICBjb25zdCBzdGF0ZW1lbnROb2RlQSA9IHN0YXRlbWVudE5vZGUsIC8vL1xuICAgICAgICAgICAgICBzdGF0ZW1lbnROb2RlQiA9IHRoaXMuc3RhdGVtZW50Tm9kZTsgIC8vL1xuXG4gICAgICAgIHN0YXRlbWVudFVuaWZpZWRBZ2FpbnN0U3RhdGVtZW50ID0gdW5pZnlTdGF0ZW1lbnRBZ2FpbnN0U3RhdGVtZW50KHN0YXRlbWVudE5vZGVBLCBzdGF0ZW1lbnROb2RlQiwgZXF1aXZhbGVuY2VzLCBsb2NhbENvbnRleHRBLCBsb2NhbENvbnRleHRCKTtcbiAgICAgIH1cblxuICAgICAgaWYgKCFzdGF0ZW1lbnRVbmlmaWVkQWdhaW5zdFN0YXRlbWVudCkge1xuICAgICAgICBjb25zdCBzdGF0ZW1lbnROb2RlQSA9IHN0YXRlbWVudE5vZGUsIC8vL1xuICAgICAgICAgICAgICBzdGF0ZW1lbnROb2RlQiA9IHRoaXMuc3RhdGVtZW50Tm9kZTsgIC8vL1xuXG4gICAgICAgIHN0YXRlbWVudFVuaWZpZWRBZ2FpbnN0U3RhdGVtZW50ID0gdW5pZnlTdGF0ZW1lbnRBZ2FpbnN0U3RhdGVtZW50KHN0YXRlbWVudE5vZGVBLCBzdGF0ZW1lbnROb2RlQiwgZXF1aXZhbGVuY2VzLCBsb2NhbENvbnRleHRBLCBsb2NhbENvbnRleHRCKTtcbiAgICAgIH1cblxuICAgICAgc3RhdGVtZW50VW5pZmllZCA9IHN0YXRlbWVudFVuaWZpZWRBZ2FpbnN0U3RhdGVtZW50OyAgLy8vXG4gICAgfVxuXG4gICAgcmV0dXJuIHN0YXRlbWVudFVuaWZpZWQ7XG4gIH1cblxuICBzdGF0aWMgZnJvbVN1YnByb29mTm9kZShzdWJwcm9vZk5vZGUpIHtcbiAgICBjb25zdCBzdGF0ZW1lbnROb2RlID0gbnVsbCxcbiAgICAgICAgICBwcm9vZlN0ZXAgPSBuZXcgUHJvb2ZTdGVwKHN1YnByb29mTm9kZSwgc3RhdGVtZW50Tm9kZSk7XG5cbiAgICByZXR1cm4gcHJvb2ZTdGVwO1xuICB9XG5cbiAgc3RhdGljIGZyb21TdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUpIHtcbiAgICBjb25zdCBzdWJwcm9vZk5vZGUgPSBudWxsLFxuICAgICAgICAgIHByb29mU3RlcCA9IG5ldyBQcm9vZlN0ZXAoc3VicHJvb2ZOb2RlLCBzdGF0ZW1lbnROb2RlKTtcblxuICAgIHJldHVybiBwcm9vZlN0ZXA7XG4gIH1cbn1cblxuZnVuY3Rpb24gdW5pZnlTdGF0ZW1lbnRBZ2FpbnN0U3RhdGVtZW50KHN0YXRlbWVudE5vZGVBLCBzdGF0ZW1lbnROb2RlQiwgZXF1aXZhbGVuY2VzLCBsb2NhbENvbnRleHRBLCBsb2NhbENvbnRleHRCKSB7XG4gIGxldCBzdGF0ZW1lbnRVbmlmaWVkQWdhaW5zdFN0YXRlbWVudCA9IGZhbHNlO1xuXG4gIGNvbnN0IHN0YXRlbWVudFN0cmluZ0EgPSBsb2NhbENvbnRleHRBLm5vZGVBc1N0cmluZyhzdGF0ZW1lbnROb2RlQSksXG4gICAgICAgIHN0YXRlbWVudFN0cmluZ0IgPSBsb2NhbENvbnRleHRCLm5vZGVBc1N0cmluZyhzdGF0ZW1lbnROb2RlQik7XG5cbiAgbG9jYWxDb250ZXh0Qi50cmFjZShgVW5pZnlpbmcgdGhlICcke3N0YXRlbWVudFN0cmluZ0J9JyBzdGF0ZW1lbnQgYWdhaW5zdCB0aGUgJyR7c3RhdGVtZW50U3RyaW5nQX0nIHN0YXRlbWVudC4uLmAsIHN0YXRlbWVudE5vZGVCKTtcblxuICBjb25zdCBzdWJzdGl0dXRpb25zID0gU3Vic3RpdHV0aW9ucy5mcm9tTm90aGluZygpLFxuICAgICAgICBub2RlQSA9IHN0YXRlbWVudE5vZGVBLCAgLy8vXG4gICAgICAgIG5vZGVCID0gc3RhdGVtZW50Tm9kZUIsICAvLy9cbiAgICAgICAgdW5pZmllZCA9IGludHJpbnNpY0xldmVsVW5pZmllci51bmlmeShub2RlQSwgbm9kZUIsIHN1YnN0aXR1dGlvbnMsIGxvY2FsQ29udGV4dEEsIGxvY2FsQ29udGV4dEIpO1xuXG4gIGlmICh1bmlmaWVkKSB7XG4gICAgY29uc3Qgc3Vic3RpdHV0aW9uc1VuaWZpZWRBZ2FpbnN0RXF1aXZhbGVuY2VzID0gc3Vic3RpdHV0aW9ucy51bmlmeUFnYWluc3RFcXVpdmFsZW5jZXMoZXF1aXZhbGVuY2VzLCBsb2NhbENvbnRleHRBLCBsb2NhbENvbnRleHRCKTtcblxuICAgIHN0YXRlbWVudFVuaWZpZWRBZ2FpbnN0U3RhdGVtZW50ID0gc3Vic3RpdHV0aW9uc1VuaWZpZWRBZ2FpbnN0RXF1aXZhbGVuY2VzOyAgLy8vXG4gIH1cblxuICBpZiAoc3RhdGVtZW50VW5pZmllZEFnYWluc3RTdGF0ZW1lbnQpIHtcbiAgICBsb2NhbENvbnRleHRCLmRlYnVnKGAuLi51bmlmaWVkIHRoZSAnJHtzdGF0ZW1lbnRTdHJpbmdCfScgc3RhdGVtZW50IGFnYWluc3QgdGhlICcke3N0YXRlbWVudFN0cmluZ0F9JyBzdGF0ZW1lbnQuYCwgc3RhdGVtZW50Tm9kZUIpO1xuICB9XG5cbiAgcmV0dXJuIHN0YXRlbWVudFVuaWZpZWRBZ2FpbnN0U3RhdGVtZW50O1xufSJdLCJuYW1lcyI6WyJQcm9vZlN0ZXAiLCJzdWJwcm9vZk5vZGUiLCJzdGF0ZW1lbnROb2RlIiwiZ2V0U3VicHJvb2ZOb2RlIiwiZ2V0U3RhdGVtZW50Tm9kZSIsInVuaWZ5U3RhdGVtZW50IiwiZXF1aXZhbGVuY2VzIiwibG9jYWxDb250ZXh0QSIsImxvY2FsQ29udGV4dEIiLCJzdGF0ZW1lbnRVbmlmaWVkIiwic3RhdGVtZW50VW5pZmllZEFnYWluc3RTdGF0ZW1lbnQiLCJzdGF0ZW1lbnROb2RlQSIsInN0YXRlbWVudE5vZGVCIiwidW5pZnlTdGF0ZW1lbnRBZ2FpbnN0U3RhdGVtZW50IiwiZnJvbVN1YnByb29mTm9kZSIsInByb29mU3RlcCIsImZyb21TdGF0ZW1lbnROb2RlIiwic3RhdGVtZW50U3RyaW5nQSIsIm5vZGVBc1N0cmluZyIsInN0YXRlbWVudFN0cmluZ0IiLCJ0cmFjZSIsInN1YnN0aXR1dGlvbnMiLCJTdWJzdGl0dXRpb25zIiwiZnJvbU5vdGhpbmciLCJub2RlQSIsIm5vZGVCIiwidW5pZmllZCIsImludHJpbnNpY0xldmVsVW5pZmllciIsInVuaWZ5Iiwic3Vic3RpdHV0aW9uc1VuaWZpZWRBZ2FpbnN0RXF1aXZhbGVuY2VzIiwidW5pZnlBZ2FpbnN0RXF1aXZhbGVuY2VzIiwiZGVidWciXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBS3FCQTs7O29FQUhLO3FFQUNROzs7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