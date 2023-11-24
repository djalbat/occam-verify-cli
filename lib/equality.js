"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return Equality;
    }
});
var _equality = /*#__PURE__*/ _interop_require_default(require("./node/statement/equality"));
var _equality1 = /*#__PURE__*/ _interop_require_default(require("./verifier/nodes/equality"));
var _query = require("./utilities/query");
var _constants = require("./constants");
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
var leftTermNodeQuery = (0, _query.nodeQuery)("/statement/argument[0]/term!"), rightTermNodeQuery = (0, _query.nodeQuery)("/statement/argument[1]/term!");
var Equality = /*#__PURE__*/ function() {
    function Equality(leftTermNode, rightTermNode) {
        _class_call_check(this, Equality);
        this.leftTermNode = leftTermNode;
        this.rightTermNode = rightTermNode;
    }
    _create_class(Equality, [
        {
            key: "getLeftTermNode",
            value: function getLeftTermNode() {
                return this.leftTermNode;
            }
        },
        {
            key: "getRightTermNode",
            value: function getRightTermNode() {
                return this.rightTermNode;
            }
        },
        {
            key: "matchTermNodes",
            value: function matchTermNodes(leftTermNode, rightTermNode, reversed, equalities, context) {
                var leftTermNodeAndRightTermNodeMatch = true;
                if (leftTermNodeAndRightTermNodeMatch) {
                    var leftNonTerminalNode = reversed ? this.rightTermNode : this.leftTermNode, rightNonTerminalNode = leftTermNode, nonTerminalNodeVerified = _equality1.default.verifyNonTerminalNode(leftNonTerminalNode, rightNonTerminalNode, equalities, context);
                    leftTermNodeAndRightTermNodeMatch = nonTerminalNodeVerified; ///
                }
                if (leftTermNodeAndRightTermNodeMatch) {
                    var leftNonTerminalNode1 = reversed ? this.leftTermNode : this.rightTermNode, rightNonTerminalNode1 = rightTermNode, nonTerminalNodeVerified1 = _equality1.default.verifyNonTerminalNode(leftNonTerminalNode1, rightNonTerminalNode1, equalities, context);
                    leftTermNodeAndRightTermNodeMatch = nonTerminalNodeVerified1; ///
                }
                return leftTermNodeAndRightTermNodeMatch;
            }
        },
        {
            key: "match",
            value: function match(equality, equalities, context) {
                var matches = false;
                var leftTermNode = equality.getLeftTermNode(), rightTermNode = equality.getRightTermNode();
                equalities = filterEqualities(equalities, equality); ///
                if (!matches) {
                    var reversed = false, leftTermNodeAndRightTermNodeMatch = this.matchTermNodes(leftTermNode, rightTermNode, reversed, equalities, context);
                    matches = leftTermNodeAndRightTermNodeMatch; ///
                }
                if (!matches) {
                    var reversed1 = true, leftTermNodeAndRightTermNodeMatch1 = this.matchTermNodes(leftTermNode, rightTermNode, reversed1, equalities, context);
                    matches = leftTermNodeAndRightTermNodeMatch1; ///
                }
                return matches;
            }
        },
        {
            key: "verify",
            value: function verify(equalities, context, verifyAhead) {
                var leftNonTerminalNode = this.leftTermNode, rightNonTerminalNode = this.rightTermNode, nonTerminalNodeVerified = _equality1.default.verifyNonTerminalNode(leftNonTerminalNode, rightNonTerminalNode, equalities, context, verifyAhead), verified = nonTerminalNodeVerified; ///
                return verified;
            }
        }
    ], [
        {
            key: "fromProofStep",
            value: function fromProofStep(proofStep) {
                var equality = null;
                var statementNode = proofStep.getStatementNode();
                if (statementNode !== null) {
                    equality = Equality.fromStatementNode(statementNode);
                }
                return equality;
            }
        },
        {
            key: "fromStatementNode",
            value: function fromStatementNode(statementNode) {
                var equality = null;
                var depth = _constants.EQUALITY_DEPTH, statementNodeMatchesEqualityStatementNode = statementNode.match(_equality.default, depth);
                if (statementNodeMatchesEqualityStatementNode) {
                    var leftTermNode = leftTermNodeQuery(statementNode), rightTermNode = rightTermNodeQuery(statementNode);
                    equality = new Equality(leftTermNode, rightTermNode);
                }
                return equality;
            }
        },
        {
            key: "fromLeftTermNodeAndRightTermNode",
            value: function fromLeftTermNodeAndRightTermNode(leftTermNode, rightTermNode) {
                var equality = new Equality(leftTermNode, rightTermNode);
                return equality;
            }
        }
    ]);
    return Equality;
}();
function filterEqualities(equalities, equality) {
    var equalityA = equality; ///
    equalities = equalities.filter(function(equality) {
        var equalityB = equality; ///
        if (equalityA !== equalityB) {
            return true;
        }
    });
    return equalities;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9lcXVhbGl0eS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IGVxdWFsaXR5U3RhdGVtZW50Tm9kZSBmcm9tIFwiLi9ub2RlL3N0YXRlbWVudC9lcXVhbGl0eVwiO1xuaW1wb3J0IGVxdWFsaXR5Tm9kZXNWZXJpZmllciBmcm9tIFwiLi92ZXJpZmllci9ub2Rlcy9lcXVhbGl0eVwiO1xuXG5pbXBvcnQgeyBub2RlUXVlcnkgfSBmcm9tIFwiLi91dGlsaXRpZXMvcXVlcnlcIjtcbmltcG9ydCB7IEVRVUFMSVRZX0RFUFRIIH0gZnJvbSBcIi4vY29uc3RhbnRzXCI7XG5cbmNvbnN0IGxlZnRUZXJtTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3N0YXRlbWVudC9hcmd1bWVudFswXS90ZXJtIVwiKSxcbiAgICAgIHJpZ2h0VGVybU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9zdGF0ZW1lbnQvYXJndW1lbnRbMV0vdGVybSFcIik7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEVxdWFsaXR5IHtcbiAgY29uc3RydWN0b3IobGVmdFRlcm1Ob2RlLCByaWdodFRlcm1Ob2RlKSB7XG4gICAgdGhpcy5sZWZ0VGVybU5vZGUgPSBsZWZ0VGVybU5vZGU7XG4gICAgdGhpcy5yaWdodFRlcm1Ob2RlID0gcmlnaHRUZXJtTm9kZTtcbiAgfVxuXG4gIGdldExlZnRUZXJtTm9kZSgpIHtcbiAgICByZXR1cm4gdGhpcy5sZWZ0VGVybU5vZGU7XG4gIH1cblxuICBnZXRSaWdodFRlcm1Ob2RlKCkge1xuICAgIHJldHVybiB0aGlzLnJpZ2h0VGVybU5vZGU7XG4gIH1cblxuICBtYXRjaFRlcm1Ob2RlcyhsZWZ0VGVybU5vZGUsIHJpZ2h0VGVybU5vZGUsIHJldmVyc2VkLCBlcXVhbGl0aWVzLCBjb250ZXh0KSB7XG4gICAgbGV0IGxlZnRUZXJtTm9kZUFuZFJpZ2h0VGVybU5vZGVNYXRjaCA9IHRydWU7XG5cbiAgICBpZiAobGVmdFRlcm1Ob2RlQW5kUmlnaHRUZXJtTm9kZU1hdGNoKSB7XG4gICAgICBjb25zdCBsZWZ0Tm9uVGVybWluYWxOb2RlID0gcmV2ZXJzZWQgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yaWdodFRlcm1Ob2RlIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5sZWZ0VGVybU5vZGUsICAvLy9cbiAgICAgICAgICAgIHJpZ2h0Tm9uVGVybWluYWxOb2RlID0gbGVmdFRlcm1Ob2RlLCAgLy8vXG4gICAgICAgICAgICBub25UZXJtaW5hbE5vZGVWZXJpZmllZCA9IGVxdWFsaXR5Tm9kZXNWZXJpZmllci52ZXJpZnlOb25UZXJtaW5hbE5vZGUobGVmdE5vblRlcm1pbmFsTm9kZSwgcmlnaHROb25UZXJtaW5hbE5vZGUsIGVxdWFsaXRpZXMsIGNvbnRleHQpO1xuXG4gICAgICBsZWZ0VGVybU5vZGVBbmRSaWdodFRlcm1Ob2RlTWF0Y2ggPSBub25UZXJtaW5hbE5vZGVWZXJpZmllZDsgLy8vXG4gICAgfVxuXG4gICAgaWYgKGxlZnRUZXJtTm9kZUFuZFJpZ2h0VGVybU5vZGVNYXRjaCkge1xuICAgICAgY29uc3QgbGVmdE5vblRlcm1pbmFsTm9kZSA9IHJldmVyc2VkID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubGVmdFRlcm1Ob2RlIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yaWdodFRlcm1Ob2RlLCAgLy8vXG4gICAgICAgICAgICByaWdodE5vblRlcm1pbmFsTm9kZSA9IHJpZ2h0VGVybU5vZGUsICAvLy9cbiAgICAgICAgICAgIG5vblRlcm1pbmFsTm9kZVZlcmlmaWVkID0gZXF1YWxpdHlOb2Rlc1ZlcmlmaWVyLnZlcmlmeU5vblRlcm1pbmFsTm9kZShsZWZ0Tm9uVGVybWluYWxOb2RlLCByaWdodE5vblRlcm1pbmFsTm9kZSwgZXF1YWxpdGllcywgY29udGV4dCk7XG5cbiAgICAgIGxlZnRUZXJtTm9kZUFuZFJpZ2h0VGVybU5vZGVNYXRjaCA9IG5vblRlcm1pbmFsTm9kZVZlcmlmaWVkOyAvLy9cbiAgICB9XG5cbiAgICByZXR1cm4gbGVmdFRlcm1Ob2RlQW5kUmlnaHRUZXJtTm9kZU1hdGNoO1xuICB9XG5cbiAgbWF0Y2goZXF1YWxpdHksIGVxdWFsaXRpZXMsIGNvbnRleHQpIHtcbiAgICBsZXQgbWF0Y2hlcyA9IGZhbHNlO1xuXG4gICAgY29uc3QgbGVmdFRlcm1Ob2RlID0gZXF1YWxpdHkuZ2V0TGVmdFRlcm1Ob2RlKCksXG4gICAgICAgICAgcmlnaHRUZXJtTm9kZSA9IGVxdWFsaXR5LmdldFJpZ2h0VGVybU5vZGUoKTtcblxuICAgIGVxdWFsaXRpZXMgPSBmaWx0ZXJFcXVhbGl0aWVzKGVxdWFsaXRpZXMsIGVxdWFsaXR5KTsgIC8vL1xuXG4gICAgaWYgKCFtYXRjaGVzKSB7XG4gICAgICBjb25zdCByZXZlcnNlZCA9IGZhbHNlLFxuICAgICAgICAgICAgbGVmdFRlcm1Ob2RlQW5kUmlnaHRUZXJtTm9kZU1hdGNoID0gdGhpcy5tYXRjaFRlcm1Ob2RlcyhsZWZ0VGVybU5vZGUsIHJpZ2h0VGVybU5vZGUsIHJldmVyc2VkLCBlcXVhbGl0aWVzLCBjb250ZXh0KTtcblxuICAgICAgbWF0Y2hlcyA9IGxlZnRUZXJtTm9kZUFuZFJpZ2h0VGVybU5vZGVNYXRjaDsgIC8vL1xuICAgIH1cblxuICAgIGlmICghbWF0Y2hlcykge1xuICAgICAgY29uc3QgcmV2ZXJzZWQgPSB0cnVlLFxuICAgICAgICAgICAgbGVmdFRlcm1Ob2RlQW5kUmlnaHRUZXJtTm9kZU1hdGNoID0gdGhpcy5tYXRjaFRlcm1Ob2RlcyhsZWZ0VGVybU5vZGUsIHJpZ2h0VGVybU5vZGUsIHJldmVyc2VkLCBlcXVhbGl0aWVzLCBjb250ZXh0KTtcblxuICAgICAgbWF0Y2hlcyA9IGxlZnRUZXJtTm9kZUFuZFJpZ2h0VGVybU5vZGVNYXRjaDsgIC8vL1xuICAgIH1cblxuICAgIHJldHVybiBtYXRjaGVzO1xuICB9XG5cbiAgdmVyaWZ5KGVxdWFsaXRpZXMsIGNvbnRleHQsIHZlcmlmeUFoZWFkKSB7XG4gICAgY29uc3QgbGVmdE5vblRlcm1pbmFsTm9kZSA9IHRoaXMubGVmdFRlcm1Ob2RlLCAgLy8vXG4gICAgICAgICAgcmlnaHROb25UZXJtaW5hbE5vZGUgPSB0aGlzLnJpZ2h0VGVybU5vZGUsICAvLy9cbiAgICAgICAgICBub25UZXJtaW5hbE5vZGVWZXJpZmllZCA9IGVxdWFsaXR5Tm9kZXNWZXJpZmllci52ZXJpZnlOb25UZXJtaW5hbE5vZGUobGVmdE5vblRlcm1pbmFsTm9kZSwgcmlnaHROb25UZXJtaW5hbE5vZGUsIGVxdWFsaXRpZXMsIGNvbnRleHQsIHZlcmlmeUFoZWFkKSxcbiAgICAgICAgICB2ZXJpZmllZCA9IG5vblRlcm1pbmFsTm9kZVZlcmlmaWVkOyAvLy9cblxuICAgIHJldHVybiB2ZXJpZmllZDtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUHJvb2ZTdGVwKHByb29mU3RlcCkge1xuICAgIGxldCBlcXVhbGl0eSA9IG51bGw7XG5cbiAgICBjb25zdCBzdGF0ZW1lbnROb2RlID0gcHJvb2ZTdGVwLmdldFN0YXRlbWVudE5vZGUoKTtcblxuICAgIGlmIChzdGF0ZW1lbnROb2RlICE9PSBudWxsKSB7XG4gICAgICBlcXVhbGl0eSA9IEVxdWFsaXR5LmZyb21TdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUpO1xuICAgIH1cblxuICAgIHJldHVybiBlcXVhbGl0eTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tU3RhdGVtZW50Tm9kZShzdGF0ZW1lbnROb2RlKSB7XG4gICAgbGV0IGVxdWFsaXR5ID0gbnVsbDtcblxuICAgIGNvbnN0IGRlcHRoID0gRVFVQUxJVFlfREVQVEgsXG4gICAgICAgICAgc3RhdGVtZW50Tm9kZU1hdGNoZXNFcXVhbGl0eVN0YXRlbWVudE5vZGUgPSBzdGF0ZW1lbnROb2RlLm1hdGNoKGVxdWFsaXR5U3RhdGVtZW50Tm9kZSwgZGVwdGgpO1xuXG4gICAgaWYgKHN0YXRlbWVudE5vZGVNYXRjaGVzRXF1YWxpdHlTdGF0ZW1lbnROb2RlKSB7XG4gICAgICBjb25zdCBsZWZ0VGVybU5vZGUgPSBsZWZ0VGVybU5vZGVRdWVyeShzdGF0ZW1lbnROb2RlKSxcbiAgICAgICAgICAgIHJpZ2h0VGVybU5vZGUgPSByaWdodFRlcm1Ob2RlUXVlcnkoc3RhdGVtZW50Tm9kZSk7XG5cbiAgICAgIGVxdWFsaXR5ID0gbmV3IEVxdWFsaXR5KGxlZnRUZXJtTm9kZSwgcmlnaHRUZXJtTm9kZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGVxdWFsaXR5O1xuICB9XG5cbiAgc3RhdGljIGZyb21MZWZ0VGVybU5vZGVBbmRSaWdodFRlcm1Ob2RlKGxlZnRUZXJtTm9kZSwgcmlnaHRUZXJtTm9kZSkge1xuICAgIGNvbnN0IGVxdWFsaXR5ID0gbmV3IEVxdWFsaXR5KGxlZnRUZXJtTm9kZSwgcmlnaHRUZXJtTm9kZSk7XG5cbiAgICByZXR1cm4gZXF1YWxpdHk7XG4gIH1cbn1cblxuZnVuY3Rpb24gZmlsdGVyRXF1YWxpdGllcyhlcXVhbGl0aWVzLCBlcXVhbGl0eSkge1xuICBjb25zdCBlcXVhbGl0eUEgPSBlcXVhbGl0eTsgLy8vXG5cbiAgZXF1YWxpdGllcyA9IGVxdWFsaXRpZXMuZmlsdGVyKChlcXVhbGl0eSkgPT4ge1xuICAgIGNvbnN0IGVxdWFsaXR5QiA9IGVxdWFsaXR5OyAvLy9cblxuICAgIGlmIChlcXVhbGl0eUEgIT09IGVxdWFsaXR5Qikge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gZXF1YWxpdGllcztcbn1cbiJdLCJuYW1lcyI6WyJFcXVhbGl0eSIsImxlZnRUZXJtTm9kZVF1ZXJ5Iiwibm9kZVF1ZXJ5IiwicmlnaHRUZXJtTm9kZVF1ZXJ5IiwibGVmdFRlcm1Ob2RlIiwicmlnaHRUZXJtTm9kZSIsImdldExlZnRUZXJtTm9kZSIsImdldFJpZ2h0VGVybU5vZGUiLCJtYXRjaFRlcm1Ob2RlcyIsInJldmVyc2VkIiwiZXF1YWxpdGllcyIsImNvbnRleHQiLCJsZWZ0VGVybU5vZGVBbmRSaWdodFRlcm1Ob2RlTWF0Y2giLCJsZWZ0Tm9uVGVybWluYWxOb2RlIiwicmlnaHROb25UZXJtaW5hbE5vZGUiLCJub25UZXJtaW5hbE5vZGVWZXJpZmllZCIsImVxdWFsaXR5Tm9kZXNWZXJpZmllciIsInZlcmlmeU5vblRlcm1pbmFsTm9kZSIsIm1hdGNoIiwiZXF1YWxpdHkiLCJtYXRjaGVzIiwiZmlsdGVyRXF1YWxpdGllcyIsInZlcmlmeSIsInZlcmlmeUFoZWFkIiwidmVyaWZpZWQiLCJmcm9tUHJvb2ZTdGVwIiwicHJvb2ZTdGVwIiwic3RhdGVtZW50Tm9kZSIsImdldFN0YXRlbWVudE5vZGUiLCJmcm9tU3RhdGVtZW50Tm9kZSIsImRlcHRoIiwiRVFVQUxJVFlfREVQVEgiLCJzdGF0ZW1lbnROb2RlTWF0Y2hlc0VxdWFsaXR5U3RhdGVtZW50Tm9kZSIsImVxdWFsaXR5U3RhdGVtZW50Tm9kZSIsImZyb21MZWZ0VGVybU5vZGVBbmRSaWdodFRlcm1Ob2RlIiwiZXF1YWxpdHlBIiwiZmlsdGVyIiwiZXF1YWxpdHlCIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQVdxQkE7OzsrREFUYTtnRUFDQTtxQkFFUjt5QkFDSzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUUvQixJQUFNQyxvQkFBb0JDLElBQUFBLGdCQUFTLEVBQUMsaUNBQzlCQyxxQkFBcUJELElBQUFBLGdCQUFTLEVBQUM7QUFFdEIsSUFBQSxBQUFNRix5QkE2R2xCLEFBN0dZO2FBQU1BLFNBQ1BJLFlBQVksRUFBRUMsYUFBYTtnQ0FEcEJMO1FBRWpCLElBQUksQ0FBQ0ksWUFBWSxHQUFHQTtRQUNwQixJQUFJLENBQUNDLGFBQWEsR0FBR0E7O2tCQUhKTDs7WUFNbkJNLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0YsWUFBWTtZQUMxQjs7O1lBRUFHLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0YsYUFBYTtZQUMzQjs7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