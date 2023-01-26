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
var _ruleNames = require("../ruleNames");
var _nonTerminalNode = require("../utilities/nonTerminalNode");
function _classCallCheck(instance, Constructor) {
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
function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
var ProofStep = /*#__PURE__*/ function() {
    function ProofStep(subproofNode, statementNode) {
        _classCallCheck(this, ProofStep);
        this.subproofNode = subproofNode;
        this.statementNode = statementNode;
    }
    _createClass(ProofStep, [
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
            key: "match",
            value: function match(statementNode) {
                var matches;
                var matchesStatement = this.matchStatement(statementNode);
                matches = matchesStatement; //
                return matches;
            }
        },
        {
            key: "matchStatement",
            value: function matchStatement(statementNode) {
                var matchesStatement = false;
                if (this.statementNode !== null) {
                    var ruleName = _ruleNames.META_ARGUMENT_RULE_NAME, nonTerminalNodeA = statementNode, nonTerminalNodeB = this.statementNode, nonTerminalNodeMatchesModuloBrackets = (0, _nonTerminalNode.matchNonTerminalNodeModuloBrackets)(nonTerminalNodeA, nonTerminalNodeB, ruleName), statementNodeMatches = nonTerminalNodeMatchesModuloBrackets; ///
                    return statementNodeMatches;
                }
                return matchesStatement;
            }
        }
    ], [
        {
            key: "fromSubproofNode",
            value: function fromSubproofNode(subproofNode) {
                var statementNode = null, metaProofStep = new ProofStep(subproofNode, statementNode);
                return metaProofStep;
            }
        },
        {
            key: "fromStatementNode",
            value: function fromStatementNode(statementNode) {
                var subproofNode = null, metaProofStep = new ProofStep(subproofNode, statementNode);
                return metaProofStep;
            }
        }
    ]);
    return ProofStep;
}();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zdGVwL3Byb29mLmpzIiwiPDxqc3gtY29uZmlnLXByYWdtYS5qcz4+Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBNRVRBX0FSR1VNRU5UX1JVTEVfTkFNRSB9IGZyb20gXCIuLi9ydWxlTmFtZXNcIjtcbmltcG9ydCB7IG1hdGNoTm9uVGVybWluYWxOb2RlTW9kdWxvQnJhY2tldHMgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL25vblRlcm1pbmFsTm9kZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQcm9vZlN0ZXAge1xuICBjb25zdHJ1Y3RvcihzdWJwcm9vZk5vZGUsIHN0YXRlbWVudE5vZGUpIHtcbiAgICB0aGlzLnN1YnByb29mTm9kZSA9IHN1YnByb29mTm9kZTtcbiAgICB0aGlzLnN0YXRlbWVudE5vZGUgPSBzdGF0ZW1lbnROb2RlO1xuICB9XG5cbiAgZ2V0U3VicHJvb2ZOb2RlKCkge1xuICAgIHJldHVybiB0aGlzLnN1YnByb29mTm9kZTtcbiAgfVxuXG4gIGdldFN0YXRlbWVudE5vZGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RhdGVtZW50Tm9kZTtcbiAgfVxuXG4gIG1hdGNoKHN0YXRlbWVudE5vZGUpIHtcbiAgICBsZXQgbWF0Y2hlcztcblxuICAgIGNvbnN0IG1hdGNoZXNTdGF0ZW1lbnQgPSB0aGlzLm1hdGNoU3RhdGVtZW50KHN0YXRlbWVudE5vZGUpO1xuXG4gICAgbWF0Y2hlcyA9IG1hdGNoZXNTdGF0ZW1lbnQ7IC8vXG5cbiAgICByZXR1cm4gbWF0Y2hlcztcbiAgfVxuXG4gIG1hdGNoU3RhdGVtZW50KHN0YXRlbWVudE5vZGUpIHtcbiAgICBsZXQgbWF0Y2hlc1N0YXRlbWVudCA9IGZhbHNlO1xuXG4gICAgaWYgKHRoaXMuc3RhdGVtZW50Tm9kZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgcnVsZU5hbWUgPSBNRVRBX0FSR1VNRU5UX1JVTEVfTkFNRSxcbiAgICAgICAgICAgIG5vblRlcm1pbmFsTm9kZUEgPSBzdGF0ZW1lbnROb2RlLCAvLy9cbiAgICAgICAgICAgIG5vblRlcm1pbmFsTm9kZUIgPSB0aGlzLnN0YXRlbWVudE5vZGUsICAvLy9cbiAgICAgICAgICAgIG5vblRlcm1pbmFsTm9kZU1hdGNoZXNNb2R1bG9CcmFja2V0cyA9IG1hdGNoTm9uVGVybWluYWxOb2RlTW9kdWxvQnJhY2tldHMobm9uVGVybWluYWxOb2RlQSwgbm9uVGVybWluYWxOb2RlQiwgcnVsZU5hbWUpLFxuICAgICAgICAgICAgc3RhdGVtZW50Tm9kZU1hdGNoZXMgPSBub25UZXJtaW5hbE5vZGVNYXRjaGVzTW9kdWxvQnJhY2tldHM7ICAvLy9cblxuICAgICAgcmV0dXJuIHN0YXRlbWVudE5vZGVNYXRjaGVzO1xuICAgIH1cblxuICAgIHJldHVybiBtYXRjaGVzU3RhdGVtZW50O1xuICB9XG5cbiAgc3RhdGljIGZyb21TdWJwcm9vZk5vZGUoc3VicHJvb2ZOb2RlKSB7XG4gICAgY29uc3Qgc3RhdGVtZW50Tm9kZSA9IG51bGwsXG4gICAgICAgICAgbWV0YVByb29mU3RlcCA9IG5ldyBQcm9vZlN0ZXAoc3VicHJvb2ZOb2RlLCBzdGF0ZW1lbnROb2RlKTtcblxuICAgIHJldHVybiBtZXRhUHJvb2ZTdGVwO1xuICB9XG5cbiAgc3RhdGljIGZyb21TdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUpIHtcbiAgICBjb25zdCBzdWJwcm9vZk5vZGUgPSBudWxsLFxuICAgICAgICAgIG1ldGFQcm9vZlN0ZXAgPSBuZXcgUHJvb2ZTdGVwKHN1YnByb29mTm9kZSwgc3RhdGVtZW50Tm9kZSk7XG5cbiAgICByZXR1cm4gbWV0YVByb29mU3RlcDtcbiAgfVxufVxuIiwiUmVhY3QuY3JlYXRlRWxlbWVudCJdLCJuYW1lcyI6WyJQcm9vZlN0ZXAiLCJzdWJwcm9vZk5vZGUiLCJzdGF0ZW1lbnROb2RlIiwiZ2V0U3VicHJvb2ZOb2RlIiwiZ2V0U3RhdGVtZW50Tm9kZSIsIm1hdGNoIiwibWF0Y2hlcyIsIm1hdGNoZXNTdGF0ZW1lbnQiLCJtYXRjaFN0YXRlbWVudCIsInJ1bGVOYW1lIiwiTUVUQV9BUkdVTUVOVF9SVUxFX05BTUUiLCJub25UZXJtaW5hbE5vZGVBIiwibm9uVGVybWluYWxOb2RlQiIsIm5vblRlcm1pbmFsTm9kZU1hdGNoZXNNb2R1bG9CcmFja2V0cyIsIm1hdGNoTm9uVGVybWluYWxOb2RlTW9kdWxvQnJhY2tldHMiLCJzdGF0ZW1lbnROb2RlTWF0Y2hlcyIsImZyb21TdWJwcm9vZk5vZGUiLCJtZXRhUHJvb2ZTdGVwIiwiZnJvbVN0YXRlbWVudE5vZGUiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBS3FCQTs7O3lCQUhtQjsrQkFDVzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFcEMsSUFBQSxBQUFNQSwwQkFBTjthQUFNQSxVQUNQQyxZQUFZLEVBQUVDLGFBQWE7OEJBRHBCRjtRQUVqQixJQUFJLENBQUNDLFlBQVksR0FBR0E7UUFDcEIsSUFBSSxDQUFDQyxhQUFhLEdBQUdBOztpQkFISkY7O1lBTW5CRyxLQUFBQTttQkFBQUEsU0FBQUEsa0JBQWtCO2dCQUNoQixPQUFPLElBQUksQ0FBQ0YsWUFBWTtZQUMxQjs7O1lBRUFHLEtBQUFBO21CQUFBQSxTQUFBQSxtQkFBbUI7Z0JBQ2pCLE9BQU8sSUFBSSxDQUFDRixhQUFhO1lBQzNCOzs7WUFFQUcsS0FBQUE7bUJBQUFBLFNBQUFBLE1BQU1ILGFBQWEsRUFBRTtnQkFDbkIsSUFBSUk7Z0JBRUosSUFBTUMsbUJBQW1CLElBQUksQ0FBQ0MsY0FBYyxDQUFDTjtnQkFFN0NJLFVBQVVDLGtCQUFrQixFQUFFO2dCQUU5QixPQUFPRDtZQUNUOzs7WUFFQUUsS0FBQUE7bUJBQUFBLFNBQUFBLGVBQWVOLGFBQWEsRUFBRTtnQkFDNUIsSUFBSUssbUJBQW1CLEtBQUs7Z0JBRTVCLElBQUksSUFBSSxDQUFDTCxhQUFhLEtBQUssSUFBSSxFQUFFO29CQUMvQixJQUFNTyxXQUFXQyxrQ0FBdUIsRUFDbENDLG1CQUFtQlQsZUFDbkJVLG1CQUFtQixJQUFJLENBQUNWLGFBQWEsRUFDckNXLHVDQUF1Q0MsSUFBQUEsbURBQWtDLEVBQUNILGtCQUFrQkMsa0JBQWtCSCxXQUM5R00sdUJBQXVCRixzQ0FBdUMsR0FBRztvQkFFdkUsT0FBT0U7Z0JBQ1QsQ0FBQztnQkFFRCxPQUFPUjtZQUNUOzs7O1lBRU9TLEtBQUFBO21CQUFQLFNBQU9BLGlCQUFpQmYsWUFBWSxFQUFFO2dCQUNwQyxJQUFNQyxnQkFBZ0IsSUFBSSxFQUNwQmUsZ0JBQWdCLElBMUNMakIsVUEwQ21CQyxjQUFjQztnQkFFbEQsT0FBT2U7WUFDVDs7O1lBRU9DLEtBQUFBO21CQUFQLFNBQU9BLGtCQUFrQmhCLGFBQWEsRUFBRTtnQkFDdEMsSUFBTUQsZUFBZSxJQUFJLEVBQ25CZ0IsZ0JBQWdCLElBakRMakIsVUFpRG1CQyxjQUFjQztnQkFFbEQsT0FBT2U7WUFDVDs7O1dBcERtQmpCIn0=