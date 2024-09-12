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
            value: function unifyStatement(statementNodeB, equivalences, localContextA, localContextB) {
                var statementUnified = false;
                if (this.statementNode !== null) {
                    var statementUnifiedWithStatement = false;
                    if (!statementUnifiedWithStatement) {
                        var statementNodeA = this.statementNode; ///
                        statementUnifiedWithStatement = unifyStatementWithStatement(statementNodeA, statementNodeB, equivalences, localContextA, localContextB);
                    }
                    if (!statementUnifiedWithStatement) {
                        var statementNodeA1 = statementNodeB, localContext = localContextA; ///
                        statementNodeB = this.statementNode; ///
                        localContextA = localContextB; ///
                        localContextB = localContext; ///
                        statementUnifiedWithStatement = unifyStatementWithStatement(statementNodeA1, statementNodeB, equivalences, localContextA, localContextB);
                    }
                    statementUnified = statementUnifiedWithStatement; ///
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
function unifyStatementWithStatement(statementNodeA, statementNodeB, equivalences, localContextA, localContextB) {
    var statementUnifiedWithStatement = false;
    var statementStringA = localContextA.nodeAsString(statementNodeA), statementStringB = localContextB.nodeAsString(statementNodeB);
    localContextB.trace("Unifying the '".concat(statementStringB, "' statement with the '").concat(statementStringA, "' statement..."), statementNodeB);
    var substitutions = _substitutions.default.fromNothing(), nodeA = statementNodeA, nodeB = statementNodeB, unified = _intrinsicLevel.default.unify(nodeA, nodeB, substitutions, localContextA, localContextB);
    if (unified) {
        var substitutionsUnifiedWithEquivalences = substitutions.unifyWithEquivalences(equivalences, localContextA, localContextB);
        statementUnifiedWithStatement = substitutionsUnifiedWithEquivalences; ///
    }
    if (statementUnifiedWithStatement) {
        localContextB.debug("...unified the '".concat(statementStringB, "' statement with the '").concat(statementStringA, "' statement."), statementNodeB);
    }
    return statementUnifiedWithStatement;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9wcm9vZlN0ZXAuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBTdWJzdGl0dXRpb25zIGZyb20gXCIuL3N1YnN0aXR1dGlvbnNcIjtcbmltcG9ydCBpbnRyaW5zaWNMZXZlbFVuaWZpZXIgZnJvbSBcIi4vdW5pZmllci9pbnRyaW5zaWNMZXZlbFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQcm9vZlN0ZXAge1xuICBjb25zdHJ1Y3RvcihzdWJwcm9vZk5vZGUsIHN0YXRlbWVudE5vZGUpIHtcbiAgICB0aGlzLnN1YnByb29mTm9kZSA9IHN1YnByb29mTm9kZTtcbiAgICB0aGlzLnN0YXRlbWVudE5vZGUgPSBzdGF0ZW1lbnROb2RlO1xuICB9XG5cbiAgZ2V0U3VicHJvb2ZOb2RlKCkge1xuICAgIHJldHVybiB0aGlzLnN1YnByb29mTm9kZTtcbiAgfVxuXG4gIGdldFN0YXRlbWVudE5vZGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RhdGVtZW50Tm9kZTtcbiAgfVxuXG4gIHVuaWZ5U3RhdGVtZW50KHN0YXRlbWVudE5vZGVCLCBlcXVpdmFsZW5jZXMsIGxvY2FsQ29udGV4dEEsIGxvY2FsQ29udGV4dEIpIHtcbiAgICBsZXQgc3RhdGVtZW50VW5pZmllZCA9IGZhbHNlO1xuXG4gICAgaWYgKHRoaXMuc3RhdGVtZW50Tm9kZSAhPT0gbnVsbCkge1xuICAgICAgbGV0IHN0YXRlbWVudFVuaWZpZWRXaXRoU3RhdGVtZW50ID0gZmFsc2U7XG5cbiAgICAgIGlmICghc3RhdGVtZW50VW5pZmllZFdpdGhTdGF0ZW1lbnQpIHtcbiAgICAgICAgY29uc3Qgc3RhdGVtZW50Tm9kZUEgPSB0aGlzLnN0YXRlbWVudE5vZGU7ICAvLy9cblxuICAgICAgICBzdGF0ZW1lbnRVbmlmaWVkV2l0aFN0YXRlbWVudCA9IHVuaWZ5U3RhdGVtZW50V2l0aFN0YXRlbWVudChzdGF0ZW1lbnROb2RlQSwgc3RhdGVtZW50Tm9kZUIsIGVxdWl2YWxlbmNlcywgbG9jYWxDb250ZXh0QSwgbG9jYWxDb250ZXh0Qik7XG4gICAgICB9XG5cbiAgICAgIGlmICghc3RhdGVtZW50VW5pZmllZFdpdGhTdGF0ZW1lbnQpIHtcbiAgICAgICAgY29uc3Qgc3RhdGVtZW50Tm9kZUEgPSBzdGF0ZW1lbnROb2RlQiwgIC8vL1xuICAgICAgICAgICAgICBsb2NhbENvbnRleHQgPSBsb2NhbENvbnRleHRBOyAvLy9cblxuICAgICAgICBzdGF0ZW1lbnROb2RlQiA9IHRoaXMuc3RhdGVtZW50Tm9kZTsgIC8vL1xuXG4gICAgICAgIGxvY2FsQ29udGV4dEEgPSBsb2NhbENvbnRleHRCOyAgLy8vXG5cbiAgICAgICAgbG9jYWxDb250ZXh0QiA9IGxvY2FsQ29udGV4dDsgLy8vXG5cbiAgICAgICAgc3RhdGVtZW50VW5pZmllZFdpdGhTdGF0ZW1lbnQgPSB1bmlmeVN0YXRlbWVudFdpdGhTdGF0ZW1lbnQoc3RhdGVtZW50Tm9kZUEsIHN0YXRlbWVudE5vZGVCLCBlcXVpdmFsZW5jZXMsIGxvY2FsQ29udGV4dEEsIGxvY2FsQ29udGV4dEIpO1xuICAgICAgfVxuXG4gICAgICBzdGF0ZW1lbnRVbmlmaWVkID0gc3RhdGVtZW50VW5pZmllZFdpdGhTdGF0ZW1lbnQ7ICAvLy9cbiAgICB9XG5cbiAgICByZXR1cm4gc3RhdGVtZW50VW5pZmllZDtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tU3VicHJvb2ZOb2RlKHN1YnByb29mTm9kZSkge1xuICAgIGNvbnN0IHN0YXRlbWVudE5vZGUgPSBudWxsLFxuICAgICAgICAgIHByb29mU3RlcCA9IG5ldyBQcm9vZlN0ZXAoc3VicHJvb2ZOb2RlLCBzdGF0ZW1lbnROb2RlKTtcblxuICAgIHJldHVybiBwcm9vZlN0ZXA7XG4gIH1cblxuICBzdGF0aWMgZnJvbVN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSkge1xuICAgIGNvbnN0IHN1YnByb29mTm9kZSA9IG51bGwsXG4gICAgICAgICAgcHJvb2ZTdGVwID0gbmV3IFByb29mU3RlcChzdWJwcm9vZk5vZGUsIHN0YXRlbWVudE5vZGUpO1xuXG4gICAgcmV0dXJuIHByb29mU3RlcDtcbiAgfVxufVxuXG5mdW5jdGlvbiB1bmlmeVN0YXRlbWVudFdpdGhTdGF0ZW1lbnQoc3RhdGVtZW50Tm9kZUEsIHN0YXRlbWVudE5vZGVCLCBlcXVpdmFsZW5jZXMsIGxvY2FsQ29udGV4dEEsIGxvY2FsQ29udGV4dEIpIHtcbiAgbGV0IHN0YXRlbWVudFVuaWZpZWRXaXRoU3RhdGVtZW50ID0gZmFsc2U7XG5cbiAgY29uc3Qgc3RhdGVtZW50U3RyaW5nQSA9IGxvY2FsQ29udGV4dEEubm9kZUFzU3RyaW5nKHN0YXRlbWVudE5vZGVBKSxcbiAgICAgICAgc3RhdGVtZW50U3RyaW5nQiA9IGxvY2FsQ29udGV4dEIubm9kZUFzU3RyaW5nKHN0YXRlbWVudE5vZGVCKTtcblxuICBsb2NhbENvbnRleHRCLnRyYWNlKGBVbmlmeWluZyB0aGUgJyR7c3RhdGVtZW50U3RyaW5nQn0nIHN0YXRlbWVudCB3aXRoIHRoZSAnJHtzdGF0ZW1lbnRTdHJpbmdBfScgc3RhdGVtZW50Li4uYCwgc3RhdGVtZW50Tm9kZUIpO1xuXG4gIGNvbnN0IHN1YnN0aXR1dGlvbnMgPSBTdWJzdGl0dXRpb25zLmZyb21Ob3RoaW5nKCksXG4gICAgICAgIG5vZGVBID0gc3RhdGVtZW50Tm9kZUEsICAvLy9cbiAgICAgICAgbm9kZUIgPSBzdGF0ZW1lbnROb2RlQiwgIC8vL1xuICAgICAgICB1bmlmaWVkID0gaW50cmluc2ljTGV2ZWxVbmlmaWVyLnVuaWZ5KG5vZGVBLCBub2RlQiwgc3Vic3RpdHV0aW9ucywgbG9jYWxDb250ZXh0QSwgbG9jYWxDb250ZXh0Qik7XG5cbiAgaWYgKHVuaWZpZWQpIHtcbiAgICBjb25zdCBzdWJzdGl0dXRpb25zVW5pZmllZFdpdGhFcXVpdmFsZW5jZXMgPSBzdWJzdGl0dXRpb25zLnVuaWZ5V2l0aEVxdWl2YWxlbmNlcyhlcXVpdmFsZW5jZXMsIGxvY2FsQ29udGV4dEEsIGxvY2FsQ29udGV4dEIpO1xuXG4gICAgc3RhdGVtZW50VW5pZmllZFdpdGhTdGF0ZW1lbnQgPSBzdWJzdGl0dXRpb25zVW5pZmllZFdpdGhFcXVpdmFsZW5jZXM7ICAvLy9cbiAgfVxuXG4gIGlmIChzdGF0ZW1lbnRVbmlmaWVkV2l0aFN0YXRlbWVudCkge1xuICAgIGxvY2FsQ29udGV4dEIuZGVidWcoYC4uLnVuaWZpZWQgdGhlICcke3N0YXRlbWVudFN0cmluZ0J9JyBzdGF0ZW1lbnQgd2l0aCB0aGUgJyR7c3RhdGVtZW50U3RyaW5nQX0nIHN0YXRlbWVudC5gLCBzdGF0ZW1lbnROb2RlQik7XG4gIH1cblxuICByZXR1cm4gc3RhdGVtZW50VW5pZmllZFdpdGhTdGF0ZW1lbnQ7XG59Il0sIm5hbWVzIjpbIlByb29mU3RlcCIsInN1YnByb29mTm9kZSIsInN0YXRlbWVudE5vZGUiLCJnZXRTdWJwcm9vZk5vZGUiLCJnZXRTdGF0ZW1lbnROb2RlIiwidW5pZnlTdGF0ZW1lbnQiLCJzdGF0ZW1lbnROb2RlQiIsImVxdWl2YWxlbmNlcyIsImxvY2FsQ29udGV4dEEiLCJsb2NhbENvbnRleHRCIiwic3RhdGVtZW50VW5pZmllZCIsInN0YXRlbWVudFVuaWZpZWRXaXRoU3RhdGVtZW50Iiwic3RhdGVtZW50Tm9kZUEiLCJ1bmlmeVN0YXRlbWVudFdpdGhTdGF0ZW1lbnQiLCJsb2NhbENvbnRleHQiLCJmcm9tU3VicHJvb2ZOb2RlIiwicHJvb2ZTdGVwIiwiZnJvbVN0YXRlbWVudE5vZGUiLCJzdGF0ZW1lbnRTdHJpbmdBIiwibm9kZUFzU3RyaW5nIiwic3RhdGVtZW50U3RyaW5nQiIsInRyYWNlIiwic3Vic3RpdHV0aW9ucyIsIlN1YnN0aXR1dGlvbnMiLCJmcm9tTm90aGluZyIsIm5vZGVBIiwibm9kZUIiLCJ1bmlmaWVkIiwiaW50cmluc2ljTGV2ZWxVbmlmaWVyIiwidW5pZnkiLCJzdWJzdGl0dXRpb25zVW5pZmllZFdpdGhFcXVpdmFsZW5jZXMiLCJ1bmlmeVdpdGhFcXVpdmFsZW5jZXMiLCJkZWJ1ZyJdLCJtYXBwaW5n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