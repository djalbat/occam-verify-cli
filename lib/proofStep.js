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
            value: function unifyStatement(statementNode, equivalences, localContext) {
                var statementUnified = false;
                if (this.statementNode !== null) {
                    var statementUnifiedAgainstStatement = false;
                    if (!statementUnifiedAgainstStatement) {
                        var statementNodeA = statementNode, statementNodeB = this.statementNode; ///
                        statementUnifiedAgainstStatement = unifyStatementAgainstStatement(statementNodeA, statementNodeB, equivalences, localContext);
                    }
                    if (!statementUnifiedAgainstStatement) {
                        var statementNodeA1 = statementNode, statementNodeB1 = this.statementNode; ///
                        statementUnifiedAgainstStatement = unifyStatementAgainstStatement(statementNodeA1, statementNodeB1, equivalences, localContext);
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
function unifyStatementAgainstStatement(statementNodeA, statementNodeB, equivalences, localContext) {
    var statementUnifiedAgainstStatement = false;
    var nonTerminalNodeA = statementNodeA, nonTerminalNodeB = statementNodeB, substitutions = [], localContextA = localContext, localContextB = localContext, nonTerminalNodeUnified = _metaLevel.default.unifyNonTerminalNode(nonTerminalNodeA, nonTerminalNodeB, substitutions, localContextA, localContextB, function() {
        var verifiedAhead = true;
        return verifiedAhead;
    });
    if (nonTerminalNodeUnified) {
        var substitutionsUnified = substitutions.every(function(substitution) {
            var substitutionUnified = equivalences.some(function(equivalence) {
                var substitutionUnifiedAgainstEquivalence = substitution.unifyAgainstEquivalence(equivalence, substitutions, localContext);
                if (substitutionUnifiedAgainstEquivalence) {
                    return true;
                }
            });
            if (substitutionUnified) {
                return true;
            }
        });
        statementUnifiedAgainstStatement = substitutionsUnified; ///
    }
    return statementUnifiedAgainstStatement;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9wcm9vZlN0ZXAuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBtZXRhTGV2ZWxVbmlmaWVyIGZyb20gXCIuL3VuaWZpZXIvbWV0YUxldmVsXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFByb29mU3RlcCB7XG4gIGNvbnN0cnVjdG9yKHN1YnByb29mTm9kZSwgc3RhdGVtZW50Tm9kZSkge1xuICAgIHRoaXMuc3VicHJvb2ZOb2RlID0gc3VicHJvb2ZOb2RlO1xuICAgIHRoaXMuc3RhdGVtZW50Tm9kZSA9IHN0YXRlbWVudE5vZGU7XG4gIH1cblxuICBnZXRTdWJwcm9vZk5vZGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3VicHJvb2ZOb2RlO1xuICB9XG5cbiAgZ2V0U3RhdGVtZW50Tm9kZSgpIHtcbiAgICByZXR1cm4gdGhpcy5zdGF0ZW1lbnROb2RlO1xuICB9XG5cbiAgdW5pZnlTdGF0ZW1lbnQoc3RhdGVtZW50Tm9kZSwgZXF1aXZhbGVuY2VzLCBsb2NhbENvbnRleHQpIHtcbiAgICBsZXQgc3RhdGVtZW50VW5pZmllZCA9IGZhbHNlO1xuXG4gICAgaWYgKHRoaXMuc3RhdGVtZW50Tm9kZSAhPT0gbnVsbCkge1xuICAgICAgbGV0IHN0YXRlbWVudFVuaWZpZWRBZ2FpbnN0U3RhdGVtZW50ID0gZmFsc2U7XG5cbiAgICAgIGlmICghc3RhdGVtZW50VW5pZmllZEFnYWluc3RTdGF0ZW1lbnQpIHtcbiAgICAgICAgY29uc3Qgc3RhdGVtZW50Tm9kZUEgPSBzdGF0ZW1lbnROb2RlLCAvLy9cbiAgICAgICAgICAgICAgc3RhdGVtZW50Tm9kZUIgPSB0aGlzLnN0YXRlbWVudE5vZGU7ICAvLy9cblxuICAgICAgICBzdGF0ZW1lbnRVbmlmaWVkQWdhaW5zdFN0YXRlbWVudCA9IHVuaWZ5U3RhdGVtZW50QWdhaW5zdFN0YXRlbWVudChzdGF0ZW1lbnROb2RlQSwgc3RhdGVtZW50Tm9kZUIsIGVxdWl2YWxlbmNlcywgbG9jYWxDb250ZXh0KTtcbiAgICAgIH1cblxuICAgICAgaWYgKCFzdGF0ZW1lbnRVbmlmaWVkQWdhaW5zdFN0YXRlbWVudCkge1xuICAgICAgICBjb25zdCBzdGF0ZW1lbnROb2RlQSA9IHN0YXRlbWVudE5vZGUsIC8vL1xuICAgICAgICAgICAgICBzdGF0ZW1lbnROb2RlQiA9IHRoaXMuc3RhdGVtZW50Tm9kZTsgIC8vL1xuXG4gICAgICAgIHN0YXRlbWVudFVuaWZpZWRBZ2FpbnN0U3RhdGVtZW50ID0gdW5pZnlTdGF0ZW1lbnRBZ2FpbnN0U3RhdGVtZW50KHN0YXRlbWVudE5vZGVBLCBzdGF0ZW1lbnROb2RlQiwgZXF1aXZhbGVuY2VzLCBsb2NhbENvbnRleHQpO1xuICAgICAgfVxuXG4gICAgICBzdGF0ZW1lbnRVbmlmaWVkID0gc3RhdGVtZW50VW5pZmllZEFnYWluc3RTdGF0ZW1lbnQ7ICAvLy9cbiAgICB9XG5cbiAgICByZXR1cm4gc3RhdGVtZW50VW5pZmllZDtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tU3VicHJvb2ZOb2RlKHN1YnByb29mTm9kZSkge1xuICAgIGNvbnN0IHN0YXRlbWVudE5vZGUgPSBudWxsLFxuICAgICAgICAgIHByb29mU3RlcCA9IG5ldyBQcm9vZlN0ZXAoc3VicHJvb2ZOb2RlLCBzdGF0ZW1lbnROb2RlKTtcblxuICAgIHJldHVybiBwcm9vZlN0ZXA7XG4gIH1cblxuICBzdGF0aWMgZnJvbVN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSkge1xuICAgIGNvbnN0IHN1YnByb29mTm9kZSA9IG51bGwsXG4gICAgICAgICAgcHJvb2ZTdGVwID0gbmV3IFByb29mU3RlcChzdWJwcm9vZk5vZGUsIHN0YXRlbWVudE5vZGUpO1xuXG4gICAgcmV0dXJuIHByb29mU3RlcDtcbiAgfVxufVxuXG5mdW5jdGlvbiB1bmlmeVN0YXRlbWVudEFnYWluc3RTdGF0ZW1lbnQoc3RhdGVtZW50Tm9kZUEsIHN0YXRlbWVudE5vZGVCLCBlcXVpdmFsZW5jZXMsIGxvY2FsQ29udGV4dCkge1xuICBsZXQgc3RhdGVtZW50VW5pZmllZEFnYWluc3RTdGF0ZW1lbnQgPSBmYWxzZTtcblxuICBjb25zdCBub25UZXJtaW5hbE5vZGVBID0gc3RhdGVtZW50Tm9kZUEsICAvLy9cbiAgICAgICAgbm9uVGVybWluYWxOb2RlQiA9IHN0YXRlbWVudE5vZGVCLCAgLy8vXG4gICAgICAgIHN1YnN0aXR1dGlvbnMgPSBbXSxcbiAgICAgICAgbG9jYWxDb250ZXh0QSA9IGxvY2FsQ29udGV4dCwgLy8vXG4gICAgICAgIGxvY2FsQ29udGV4dEIgPSBsb2NhbENvbnRleHQsICAvLy9cbiAgICAgICAgbm9uVGVybWluYWxOb2RlVW5pZmllZCA9IG1ldGFMZXZlbFVuaWZpZXIudW5pZnlOb25UZXJtaW5hbE5vZGUobm9uVGVybWluYWxOb2RlQSwgbm9uVGVybWluYWxOb2RlQiwgc3Vic3RpdHV0aW9ucywgbG9jYWxDb250ZXh0QSwgbG9jYWxDb250ZXh0QiwgKCkgPT4ge1xuICAgICAgICAgIGNvbnN0IHZlcmlmaWVkQWhlYWQgPSB0cnVlO1xuXG4gICAgICAgICAgcmV0dXJuIHZlcmlmaWVkQWhlYWQ7XG4gICAgICAgIH0pO1xuXG4gIGlmIChub25UZXJtaW5hbE5vZGVVbmlmaWVkKSB7XG4gICAgY29uc3Qgc3Vic3RpdHV0aW9uc1VuaWZpZWQgPSBzdWJzdGl0dXRpb25zLmV2ZXJ5KChzdWJzdGl0dXRpb24pID0+IHtcbiAgICAgIGNvbnN0IHN1YnN0aXR1dGlvblVuaWZpZWQgPSBlcXVpdmFsZW5jZXMuc29tZSgoZXF1aXZhbGVuY2UpID0+IHtcbiAgICAgICAgY29uc3Qgc3Vic3RpdHV0aW9uVW5pZmllZEFnYWluc3RFcXVpdmFsZW5jZSA9IHN1YnN0aXR1dGlvbi51bmlmeUFnYWluc3RFcXVpdmFsZW5jZShlcXVpdmFsZW5jZSwgc3Vic3RpdHV0aW9ucywgbG9jYWxDb250ZXh0KTtcblxuICAgICAgICBpZiAoc3Vic3RpdHV0aW9uVW5pZmllZEFnYWluc3RFcXVpdmFsZW5jZSkge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgaWYgKHN1YnN0aXR1dGlvblVuaWZpZWQpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBzdGF0ZW1lbnRVbmlmaWVkQWdhaW5zdFN0YXRlbWVudCA9IHN1YnN0aXR1dGlvbnNVbmlmaWVkOyAgLy8vXG4gIH1cblxuICByZXR1cm4gc3RhdGVtZW50VW5pZmllZEFnYWluc3RTdGF0ZW1lbnQ7XG59Il0sIm5hbWVzIjpbIlByb29mU3RlcCIsInN1YnByb29mTm9kZSIsInN0YXRlbWVudE5vZGUiLCJnZXRTdWJwcm9vZk5vZGUiLCJnZXRTdGF0ZW1lbnROb2RlIiwidW5pZnlTdGF0ZW1lbnQiLCJlcXVpdmFsZW5jZXMiLCJsb2NhbENvbnRleHQiLCJzdGF0ZW1lbnRVbmlmaWVkIiwic3RhdGVtZW50VW5pZmllZEFnYWluc3RTdGF0ZW1lbnQiLCJzdGF0ZW1lbnROb2RlQSIsInN0YXRlbWVudE5vZGVCIiwidW5pZnlTdGF0ZW1lbnRBZ2FpbnN0U3RhdGVtZW50IiwiZnJvbVN1YnByb29mTm9kZSIsInByb29mU3RlcCIsImZyb21TdGF0ZW1lbnROb2RlIiwibm9uVGVybWluYWxOb2RlQSIsIm5vblRlcm1pbmFsTm9kZUIiLCJzdWJzdGl0dXRpb25zIiwibG9jYWxDb250ZXh0QSIsImxvY2FsQ29udGV4dEIiLCJub25UZXJtaW5hbE5vZGVVbmlmaWVkIiwibWV0YUxldmVsVW5pZmllciIsInVuaWZ5Tm9uVGVybWluYWxOb2RlIiwidmVyaWZpZWRBaGVhZCIsInN1YnN0aXR1dGlvbnNVbmlmaWVkIiwiZXZlcnkiLCJzdWJzdGl0dXRpb24iLCJzdWJzdGl0dXRpb25VbmlmaWVkIiwic29tZSIsImVxdWl2YWxlbmNlIiwic3Vic3RpdHV0aW9uVW5pZmllZEFnYWluc3RFcXVpdmFsZW5jZSIsInVuaWZ5QWdhaW5zdEVxdWl2YWxlbmNlIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQUlxQkE7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