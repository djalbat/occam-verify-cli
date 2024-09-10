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
var _metaLevel = /*#__PURE__*/ _interop_require_default(require("./unifier/metaLevel"));
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
    var substitutions = _substitutions.default.fromNothing(), nodeA = statementNodeA, nodeB = statementNodeB, unified = _metaLevel.default.unify(nodeA, nodeB, substitutions, localContextA, localContextB);
    if (unified) {
        var substitutionsUnifiedAgainstEquivalences = substitutions.unifyAgainstEquivalences(equivalences, localContextA, localContextB);
        statementUnifiedAgainstStatement = substitutionsUnifiedAgainstEquivalences; ///
    }
    if (statementUnifiedAgainstStatement) {
        localContextB.debug("...unified the '".concat(statementStringB, "' statement against the '").concat(statementStringA, "' statement."), statementNodeB);
    }
    return statementUnifiedAgainstStatement;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9wcm9vZlN0ZXAuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBTdWJzdGl0dXRpb25zIGZyb20gXCIuL3N1YnN0aXR1dGlvbnNcIjtcbmltcG9ydCBtZXRhTGV2ZWxVbmlmaWVyIGZyb20gXCIuL3VuaWZpZXIvbWV0YUxldmVsXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFByb29mU3RlcCB7XG4gIGNvbnN0cnVjdG9yKHN1YnByb29mTm9kZSwgc3RhdGVtZW50Tm9kZSkge1xuICAgIHRoaXMuc3VicHJvb2ZOb2RlID0gc3VicHJvb2ZOb2RlO1xuICAgIHRoaXMuc3RhdGVtZW50Tm9kZSA9IHN0YXRlbWVudE5vZGU7XG4gIH1cblxuICBnZXRTdWJwcm9vZk5vZGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3VicHJvb2ZOb2RlO1xuICB9XG5cbiAgZ2V0U3RhdGVtZW50Tm9kZSgpIHtcbiAgICByZXR1cm4gdGhpcy5zdGF0ZW1lbnROb2RlO1xuICB9XG5cbiAgdW5pZnlTdGF0ZW1lbnQoc3RhdGVtZW50Tm9kZSwgZXF1aXZhbGVuY2VzLCBsb2NhbENvbnRleHRBLCBsb2NhbENvbnRleHRCKSB7XG4gICAgbGV0IHN0YXRlbWVudFVuaWZpZWQgPSBmYWxzZTtcblxuICAgIGlmICh0aGlzLnN0YXRlbWVudE5vZGUgIT09IG51bGwpIHtcbiAgICAgIGxldCBzdGF0ZW1lbnRVbmlmaWVkQWdhaW5zdFN0YXRlbWVudCA9IGZhbHNlO1xuXG4gICAgICBpZiAoIXN0YXRlbWVudFVuaWZpZWRBZ2FpbnN0U3RhdGVtZW50KSB7XG4gICAgICAgIGNvbnN0IHN0YXRlbWVudE5vZGVBID0gc3RhdGVtZW50Tm9kZSwgLy8vXG4gICAgICAgICAgICAgIHN0YXRlbWVudE5vZGVCID0gdGhpcy5zdGF0ZW1lbnROb2RlOyAgLy8vXG5cbiAgICAgICAgc3RhdGVtZW50VW5pZmllZEFnYWluc3RTdGF0ZW1lbnQgPSB1bmlmeVN0YXRlbWVudEFnYWluc3RTdGF0ZW1lbnQoc3RhdGVtZW50Tm9kZUEsIHN0YXRlbWVudE5vZGVCLCBlcXVpdmFsZW5jZXMsIGxvY2FsQ29udGV4dEEsIGxvY2FsQ29udGV4dEIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoIXN0YXRlbWVudFVuaWZpZWRBZ2FpbnN0U3RhdGVtZW50KSB7XG4gICAgICAgIGNvbnN0IHN0YXRlbWVudE5vZGVBID0gc3RhdGVtZW50Tm9kZSwgLy8vXG4gICAgICAgICAgICAgIHN0YXRlbWVudE5vZGVCID0gdGhpcy5zdGF0ZW1lbnROb2RlOyAgLy8vXG5cbiAgICAgICAgc3RhdGVtZW50VW5pZmllZEFnYWluc3RTdGF0ZW1lbnQgPSB1bmlmeVN0YXRlbWVudEFnYWluc3RTdGF0ZW1lbnQoc3RhdGVtZW50Tm9kZUEsIHN0YXRlbWVudE5vZGVCLCBlcXVpdmFsZW5jZXMsIGxvY2FsQ29udGV4dEEsIGxvY2FsQ29udGV4dEIpO1xuICAgICAgfVxuXG4gICAgICBzdGF0ZW1lbnRVbmlmaWVkID0gc3RhdGVtZW50VW5pZmllZEFnYWluc3RTdGF0ZW1lbnQ7ICAvLy9cbiAgICB9XG5cbiAgICByZXR1cm4gc3RhdGVtZW50VW5pZmllZDtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tU3VicHJvb2ZOb2RlKHN1YnByb29mTm9kZSkge1xuICAgIGNvbnN0IHN0YXRlbWVudE5vZGUgPSBudWxsLFxuICAgICAgICAgIHByb29mU3RlcCA9IG5ldyBQcm9vZlN0ZXAoc3VicHJvb2ZOb2RlLCBzdGF0ZW1lbnROb2RlKTtcblxuICAgIHJldHVybiBwcm9vZlN0ZXA7XG4gIH1cblxuICBzdGF0aWMgZnJvbVN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSkge1xuICAgIGNvbnN0IHN1YnByb29mTm9kZSA9IG51bGwsXG4gICAgICAgICAgcHJvb2ZTdGVwID0gbmV3IFByb29mU3RlcChzdWJwcm9vZk5vZGUsIHN0YXRlbWVudE5vZGUpO1xuXG4gICAgcmV0dXJuIHByb29mU3RlcDtcbiAgfVxufVxuXG5mdW5jdGlvbiB1bmlmeVN0YXRlbWVudEFnYWluc3RTdGF0ZW1lbnQoc3RhdGVtZW50Tm9kZUEsIHN0YXRlbWVudE5vZGVCLCBlcXVpdmFsZW5jZXMsIGxvY2FsQ29udGV4dEEsIGxvY2FsQ29udGV4dEIpIHtcbiAgbGV0IHN0YXRlbWVudFVuaWZpZWRBZ2FpbnN0U3RhdGVtZW50ID0gZmFsc2U7XG5cbiAgY29uc3Qgc3RhdGVtZW50U3RyaW5nQSA9IGxvY2FsQ29udGV4dEEubm9kZUFzU3RyaW5nKHN0YXRlbWVudE5vZGVBKSxcbiAgICAgICAgc3RhdGVtZW50U3RyaW5nQiA9IGxvY2FsQ29udGV4dEIubm9kZUFzU3RyaW5nKHN0YXRlbWVudE5vZGVCKTtcblxuICBsb2NhbENvbnRleHRCLnRyYWNlKGBVbmlmeWluZyB0aGUgJyR7c3RhdGVtZW50U3RyaW5nQn0nIHN0YXRlbWVudCBhZ2FpbnN0IHRoZSAnJHtzdGF0ZW1lbnRTdHJpbmdBfScgc3RhdGVtZW50Li4uYCwgc3RhdGVtZW50Tm9kZUIpO1xuXG4gIGNvbnN0IHN1YnN0aXR1dGlvbnMgPSBTdWJzdGl0dXRpb25zLmZyb21Ob3RoaW5nKCksXG4gICAgICAgIG5vZGVBID0gc3RhdGVtZW50Tm9kZUEsICAvLy9cbiAgICAgICAgbm9kZUIgPSBzdGF0ZW1lbnROb2RlQiwgIC8vL1xuICAgICAgICB1bmlmaWVkID0gbWV0YUxldmVsVW5pZmllci51bmlmeShub2RlQSwgbm9kZUIsIHN1YnN0aXR1dGlvbnMsIGxvY2FsQ29udGV4dEEsIGxvY2FsQ29udGV4dEIpO1xuXG4gIGlmICh1bmlmaWVkKSB7XG4gICAgY29uc3Qgc3Vic3RpdHV0aW9uc1VuaWZpZWRBZ2FpbnN0RXF1aXZhbGVuY2VzID0gc3Vic3RpdHV0aW9ucy51bmlmeUFnYWluc3RFcXVpdmFsZW5jZXMoZXF1aXZhbGVuY2VzLCBsb2NhbENvbnRleHRBLCBsb2NhbENvbnRleHRCKTtcblxuICAgIHN0YXRlbWVudFVuaWZpZWRBZ2FpbnN0U3RhdGVtZW50ID0gc3Vic3RpdHV0aW9uc1VuaWZpZWRBZ2FpbnN0RXF1aXZhbGVuY2VzOyAgLy8vXG4gIH1cblxuICBpZiAoc3RhdGVtZW50VW5pZmllZEFnYWluc3RTdGF0ZW1lbnQpIHtcbiAgICBsb2NhbENvbnRleHRCLmRlYnVnKGAuLi51bmlmaWVkIHRoZSAnJHtzdGF0ZW1lbnRTdHJpbmdCfScgc3RhdGVtZW50IGFnYWluc3QgdGhlICcke3N0YXRlbWVudFN0cmluZ0F9JyBzdGF0ZW1lbnQuYCwgc3RhdGVtZW50Tm9kZUIpO1xuICB9XG5cbiAgcmV0dXJuIHN0YXRlbWVudFVuaWZpZWRBZ2FpbnN0U3RhdGVtZW50O1xufSJdLCJuYW1lcyI6WyJQcm9vZlN0ZXAiLCJzdWJwcm9vZk5vZGUiLCJzdGF0ZW1lbnROb2RlIiwiZ2V0U3VicHJvb2ZOb2RlIiwiZ2V0U3RhdGVtZW50Tm9kZSIsInVuaWZ5U3RhdGVtZW50IiwiZXF1aXZhbGVuY2VzIiwibG9jYWxDb250ZXh0QSIsImxvY2FsQ29udGV4dEIiLCJzdGF0ZW1lbnRVbmlmaWVkIiwic3RhdGVtZW50VW5pZmllZEFnYWluc3RTdGF0ZW1lbnQiLCJzdGF0ZW1lbnROb2RlQSIsInN0YXRlbWVudE5vZGVCIiwidW5pZnlTdGF0ZW1lbnRBZ2FpbnN0U3RhdGVtZW50IiwiZnJvbVN1YnByb29mTm9kZSIsInByb29mU3RlcCIsImZyb21TdGF0ZW1lbnROb2RlIiwic3RhdGVtZW50U3RyaW5nQSIsIm5vZGVBc1N0cmluZyIsInN0YXRlbWVudFN0cmluZ0IiLCJ0cmFjZSIsInN1YnN0aXR1dGlvbnMiLCJTdWJzdGl0dXRpb25zIiwiZnJvbU5vdGhpbmciLCJub2RlQSIsIm5vZGVCIiwidW5pZmllZCIsIm1ldGFMZXZlbFVuaWZpZXIiLCJ1bmlmeSIsInN1YnN0aXR1dGlvbnNVbmlmaWVkQWdhaW5zdEVxdWl2YWxlbmNlcyIsInVuaWZ5QWdhaW5zdEVxdWl2YWxlbmNlcyIsImRlYnVnIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQUtxQkE7OztvRUFISztnRUFDRzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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