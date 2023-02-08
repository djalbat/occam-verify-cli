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
var _matcher = /*#__PURE__*/ _interopRequireDefault(require("./matcher"));
var _equality = /*#__PURE__*/ _interopRequireDefault(require("./verifier/equality"));
var _equality1 = /*#__PURE__*/ _interopRequireDefault(require("./node/statement/equality"));
var _query = require("./utilities/query");
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
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var leftTermNodeQuery = (0, _query.nodeQuery)("/statement/argument[0]/term!"), rightTermNodeQuery = (0, _query.nodeQuery)("/statement/argument[1]/term!");
var Equality = /*#__PURE__*/ function() {
    function Equality(leftTermNode, rightTermNode) {
        _classCallCheck(this, Equality);
        this.leftTermNode = leftTermNode;
        this.rightTermNode = rightTermNode;
    }
    _createClass(Equality, [
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
                    var leftNonTerminalNode = reversed ? this.rightTermNode : this.leftTermNode, rightNonTerminalNode = leftTermNode, nonTerminalNodeVerifies = _equality.default.verifyNonTerminalNode(leftNonTerminalNode, rightNonTerminalNode, equalities, context);
                    leftTermNodeAndRightTermNodeMatch = nonTerminalNodeVerifies; ///
                }
                if (leftTermNodeAndRightTermNodeMatch) {
                    var leftNonTerminalNode1 = reversed ? this.leftTermNode : this.rightTermNode, rightNonTerminalNode1 = rightTermNode, nonTerminalNodeVerifies1 = _equality.default.verifyNonTerminalNode(leftNonTerminalNode1, rightNonTerminalNode1, equalities, context);
                    leftTermNodeAndRightTermNodeMatch = nonTerminalNodeVerifies1; ///
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
            value: function verify(equalities, context) {
                var leftNonTerminalNode = this.leftTermNode, rightNonTerminalNode = this.rightTermNode, nonTerminalNodeVerifies = _equality.default.verifyNonTerminalNode(leftNonTerminalNode, rightNonTerminalNode, equalities, context), equates = nonTerminalNodeVerifies; ///
                return equates;
            }
        }
    ], [
        {
            key: "fromProofStep",
            value: function fromProofStep(proofStep) {
                var equality = null;
                var statementNode = proofStep.getStatementNode();
                if (statementNode !== null) {
                    var nodeA = statementNode, nodeB = _equality1.default, depth = EQUALITY_DEPTH, nodeMatches = _matcher.default.matchNode(nodeA, nodeB, depth);
                    if (nodeMatches) {
                        var leftTermNode = leftTermNodeQuery(statementNode), rightTermNode = rightTermNodeQuery(statementNode);
                        equality = new Equality(leftTermNode, rightTermNode);
                    }
                }
                return equality;
            }
        },
        {
            key: "fromStatementNode",
            value: function fromStatementNode(statementNode) {
                var leftTermNode = leftTermNodeQuery(statementNode), rightTermNode = rightTermNodeQuery(statementNode), equality = new Equality(leftTermNode, rightTermNode);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9lcXVhbGl0eS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IG1hdGNoZXIgZnJvbSBcIi4vbWF0Y2hlclwiO1xuaW1wb3J0IGVxdWFsaXR5VmVyaWZpZXIgZnJvbSBcIi4vdmVyaWZpZXIvZXF1YWxpdHlcIjtcbmltcG9ydCBlcXVhbGl0eVN0YXRlbWVudE5vZGUgZnJvbSBcIi4vbm9kZS9zdGF0ZW1lbnQvZXF1YWxpdHlcIjtcblxuaW1wb3J0IHsgbm9kZVF1ZXJ5IH0gZnJvbSBcIi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5cbmNvbnN0IGxlZnRUZXJtTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3N0YXRlbWVudC9hcmd1bWVudFswXS90ZXJtIVwiKSxcbiAgICAgIHJpZ2h0VGVybU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9zdGF0ZW1lbnQvYXJndW1lbnRbMV0vdGVybSFcIik7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEVxdWFsaXR5IHtcbiAgY29uc3RydWN0b3IobGVmdFRlcm1Ob2RlLCByaWdodFRlcm1Ob2RlKSB7XG4gICAgdGhpcy5sZWZ0VGVybU5vZGUgPSBsZWZ0VGVybU5vZGU7XG4gICAgdGhpcy5yaWdodFRlcm1Ob2RlID0gcmlnaHRUZXJtTm9kZTtcbiAgfVxuXG4gIGdldExlZnRUZXJtTm9kZSgpIHtcbiAgICByZXR1cm4gdGhpcy5sZWZ0VGVybU5vZGU7XG4gIH1cblxuICBnZXRSaWdodFRlcm1Ob2RlKCkge1xuICAgIHJldHVybiB0aGlzLnJpZ2h0VGVybU5vZGU7XG4gIH1cblxuICBtYXRjaFRlcm1Ob2RlcyhsZWZ0VGVybU5vZGUsIHJpZ2h0VGVybU5vZGUsIHJldmVyc2VkLCBlcXVhbGl0aWVzLCBjb250ZXh0KSB7XG4gICAgbGV0IGxlZnRUZXJtTm9kZUFuZFJpZ2h0VGVybU5vZGVNYXRjaCA9IHRydWU7XG5cbiAgICBpZiAobGVmdFRlcm1Ob2RlQW5kUmlnaHRUZXJtTm9kZU1hdGNoKSB7XG4gICAgICBjb25zdCBsZWZ0Tm9uVGVybWluYWxOb2RlID0gcmV2ZXJzZWQgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yaWdodFRlcm1Ob2RlIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5sZWZ0VGVybU5vZGUsICAvLy9cbiAgICAgICAgICAgIHJpZ2h0Tm9uVGVybWluYWxOb2RlID0gbGVmdFRlcm1Ob2RlLCAgLy8vXG4gICAgICAgICAgICBub25UZXJtaW5hbE5vZGVWZXJpZmllcyA9IGVxdWFsaXR5VmVyaWZpZXIudmVyaWZ5Tm9uVGVybWluYWxOb2RlKGxlZnROb25UZXJtaW5hbE5vZGUsIHJpZ2h0Tm9uVGVybWluYWxOb2RlLCBlcXVhbGl0aWVzLCBjb250ZXh0KTtcblxuICAgICAgbGVmdFRlcm1Ob2RlQW5kUmlnaHRUZXJtTm9kZU1hdGNoID0gbm9uVGVybWluYWxOb2RlVmVyaWZpZXM7IC8vL1xuICAgIH1cblxuICAgIGlmIChsZWZ0VGVybU5vZGVBbmRSaWdodFRlcm1Ob2RlTWF0Y2gpIHtcbiAgICAgIGNvbnN0IGxlZnROb25UZXJtaW5hbE5vZGUgPSByZXZlcnNlZCA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxlZnRUZXJtTm9kZSA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucmlnaHRUZXJtTm9kZSwgIC8vL1xuICAgICAgICAgICAgcmlnaHROb25UZXJtaW5hbE5vZGUgPSByaWdodFRlcm1Ob2RlLCAgLy8vXG4gICAgICAgICAgICBub25UZXJtaW5hbE5vZGVWZXJpZmllcyA9IGVxdWFsaXR5VmVyaWZpZXIudmVyaWZ5Tm9uVGVybWluYWxOb2RlKGxlZnROb25UZXJtaW5hbE5vZGUsIHJpZ2h0Tm9uVGVybWluYWxOb2RlLCBlcXVhbGl0aWVzLCBjb250ZXh0KTtcblxuICAgICAgbGVmdFRlcm1Ob2RlQW5kUmlnaHRUZXJtTm9kZU1hdGNoID0gbm9uVGVybWluYWxOb2RlVmVyaWZpZXM7IC8vL1xuICAgIH1cblxuICAgIHJldHVybiBsZWZ0VGVybU5vZGVBbmRSaWdodFRlcm1Ob2RlTWF0Y2g7XG4gIH1cblxuICBtYXRjaChlcXVhbGl0eSwgZXF1YWxpdGllcywgY29udGV4dCkge1xuICAgIGxldCBtYXRjaGVzID0gZmFsc2U7XG5cbiAgICBjb25zdCBsZWZ0VGVybU5vZGUgPSBlcXVhbGl0eS5nZXRMZWZ0VGVybU5vZGUoKSxcbiAgICAgICAgICByaWdodFRlcm1Ob2RlID0gZXF1YWxpdHkuZ2V0UmlnaHRUZXJtTm9kZSgpO1xuXG4gICAgZXF1YWxpdGllcyA9IGZpbHRlckVxdWFsaXRpZXMoZXF1YWxpdGllcywgZXF1YWxpdHkpOyAgLy8vXG5cbiAgICBpZiAoIW1hdGNoZXMpIHtcbiAgICAgIGNvbnN0IHJldmVyc2VkID0gZmFsc2UsXG4gICAgICAgICAgICBsZWZ0VGVybU5vZGVBbmRSaWdodFRlcm1Ob2RlTWF0Y2ggPSB0aGlzLm1hdGNoVGVybU5vZGVzKGxlZnRUZXJtTm9kZSwgcmlnaHRUZXJtTm9kZSwgcmV2ZXJzZWQsIGVxdWFsaXRpZXMsIGNvbnRleHQpO1xuXG4gICAgICBtYXRjaGVzID0gbGVmdFRlcm1Ob2RlQW5kUmlnaHRUZXJtTm9kZU1hdGNoOyAgLy8vXG4gICAgfVxuXG4gICAgaWYgKCFtYXRjaGVzKSB7XG4gICAgICBjb25zdCByZXZlcnNlZCA9IHRydWUsXG4gICAgICAgICAgICBsZWZ0VGVybU5vZGVBbmRSaWdodFRlcm1Ob2RlTWF0Y2ggPSB0aGlzLm1hdGNoVGVybU5vZGVzKGxlZnRUZXJtTm9kZSwgcmlnaHRUZXJtTm9kZSwgcmV2ZXJzZWQsIGVxdWFsaXRpZXMsIGNvbnRleHQpO1xuXG4gICAgICBtYXRjaGVzID0gbGVmdFRlcm1Ob2RlQW5kUmlnaHRUZXJtTm9kZU1hdGNoOyAgLy8vXG4gICAgfVxuXG4gICAgcmV0dXJuIG1hdGNoZXM7XG4gIH1cblxuICB2ZXJpZnkoZXF1YWxpdGllcywgY29udGV4dCkge1xuICAgIGNvbnN0IGxlZnROb25UZXJtaW5hbE5vZGUgPSB0aGlzLmxlZnRUZXJtTm9kZSwgIC8vL1xuICAgICAgICAgIHJpZ2h0Tm9uVGVybWluYWxOb2RlID0gdGhpcy5yaWdodFRlcm1Ob2RlLCAgLy8vXG4gICAgICAgICAgbm9uVGVybWluYWxOb2RlVmVyaWZpZXMgPSBlcXVhbGl0eVZlcmlmaWVyLnZlcmlmeU5vblRlcm1pbmFsTm9kZShsZWZ0Tm9uVGVybWluYWxOb2RlLCByaWdodE5vblRlcm1pbmFsTm9kZSwgZXF1YWxpdGllcywgY29udGV4dCksXG4gICAgICAgICAgZXF1YXRlcyA9IG5vblRlcm1pbmFsTm9kZVZlcmlmaWVzOyAvLy9cblxuICAgIHJldHVybiBlcXVhdGVzO1xuICB9XG5cbiAgc3RhdGljIGZyb21Qcm9vZlN0ZXAocHJvb2ZTdGVwKSB7XG4gICAgbGV0IGVxdWFsaXR5ID0gbnVsbDtcblxuICAgIGNvbnN0IHN0YXRlbWVudE5vZGUgPSBwcm9vZlN0ZXAuZ2V0U3RhdGVtZW50Tm9kZSgpO1xuXG4gICAgaWYgKHN0YXRlbWVudE5vZGUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IG5vZGVBID0gc3RhdGVtZW50Tm9kZSwgIC8vL1xuICAgICAgICAgICAgbm9kZUIgPSBlcXVhbGl0eVN0YXRlbWVudE5vZGUsICAvLy9cbiAgICAgICAgICAgIGRlcHRoID0gRVFVQUxJVFlfREVQVEgsXG4gICAgICAgICAgICBub2RlTWF0Y2hlcyA9IG1hdGNoZXIubWF0Y2hOb2RlKG5vZGVBLCBub2RlQiwgZGVwdGgpO1xuXG4gICAgICBpZiAobm9kZU1hdGNoZXMpIHtcbiAgICAgICAgY29uc3QgbGVmdFRlcm1Ob2RlID0gbGVmdFRlcm1Ob2RlUXVlcnkoc3RhdGVtZW50Tm9kZSksXG4gICAgICAgICAgICAgIHJpZ2h0VGVybU5vZGUgPSByaWdodFRlcm1Ob2RlUXVlcnkoc3RhdGVtZW50Tm9kZSk7XG5cbiAgICAgICAgZXF1YWxpdHkgPSBuZXcgRXF1YWxpdHkobGVmdFRlcm1Ob2RlLCByaWdodFRlcm1Ob2RlKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZXF1YWxpdHk7XG4gIH1cblxuICBzdGF0aWMgZnJvbVN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSkge1xuICAgIGNvbnN0IGxlZnRUZXJtTm9kZSA9IGxlZnRUZXJtTm9kZVF1ZXJ5KHN0YXRlbWVudE5vZGUpLFxuICAgICAgICAgIHJpZ2h0VGVybU5vZGUgPSByaWdodFRlcm1Ob2RlUXVlcnkoc3RhdGVtZW50Tm9kZSksXG4gICAgICAgICAgZXF1YWxpdHkgPSBuZXcgRXF1YWxpdHkobGVmdFRlcm1Ob2RlLCByaWdodFRlcm1Ob2RlKTtcblxuICAgIHJldHVybiBlcXVhbGl0eTtcbiAgfVxufVxuXG5mdW5jdGlvbiBmaWx0ZXJFcXVhbGl0aWVzKGVxdWFsaXRpZXMsIGVxdWFsaXR5KSB7XG4gIGNvbnN0IGVxdWFsaXR5QSA9IGVxdWFsaXR5OyAvLy9cblxuICBlcXVhbGl0aWVzID0gZXF1YWxpdGllcy5maWx0ZXIoKGVxdWFsaXR5KSA9PiB7XG4gICAgY29uc3QgZXF1YWxpdHlCID0gZXF1YWxpdHk7IC8vL1xuXG4gICAgaWYgKGVxdWFsaXR5QSAhPT0gZXF1YWxpdHlCKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiBlcXVhbGl0aWVzO1xufVxuIl0sIm5hbWVzIjpbIkVxdWFsaXR5IiwibGVmdFRlcm1Ob2RlUXVlcnkiLCJub2RlUXVlcnkiLCJyaWdodFRlcm1Ob2RlUXVlcnkiLCJsZWZ0VGVybU5vZGUiLCJyaWdodFRlcm1Ob2RlIiwiZ2V0TGVmdFRlcm1Ob2RlIiwiZ2V0UmlnaHRUZXJtTm9kZSIsIm1hdGNoVGVybU5vZGVzIiwicmV2ZXJzZWQiLCJlcXVhbGl0aWVzIiwiY29udGV4dCIsImxlZnRUZXJtTm9kZUFuZFJpZ2h0VGVybU5vZGVNYXRjaCIsImxlZnROb25UZXJtaW5hbE5vZGUiLCJyaWdodE5vblRlcm1pbmFsTm9kZSIsIm5vblRlcm1pbmFsTm9kZVZlcmlmaWVzIiwiZXF1YWxpdHlWZXJpZmllciIsInZlcmlmeU5vblRlcm1pbmFsTm9kZSIsIm1hdGNoIiwiZXF1YWxpdHkiLCJtYXRjaGVzIiwiZmlsdGVyRXF1YWxpdGllcyIsInZlcmlmeSIsImVxdWF0ZXMiLCJmcm9tUHJvb2ZTdGVwIiwicHJvb2ZTdGVwIiwic3RhdGVtZW50Tm9kZSIsImdldFN0YXRlbWVudE5vZGUiLCJub2RlQSIsIm5vZGVCIiwiZXF1YWxpdHlTdGF0ZW1lbnROb2RlIiwiZGVwdGgiLCJFUVVBTElUWV9ERVBUSCIsIm5vZGVNYXRjaGVzIiwibWF0Y2hlciIsIm1hdGNoTm9kZSIsImZyb21TdGF0ZW1lbnROb2RlIiwiZXF1YWxpdHlBIiwiZmlsdGVyIiwiZXF1YWxpdHlCIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQVdxQkE7Ozs0REFURDs2REFDUzs4REFDSztxQkFFUjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUUxQixJQUFNQyxvQkFBb0JDLElBQUFBLGdCQUFTLEVBQUMsaUNBQzlCQyxxQkFBcUJELElBQUFBLGdCQUFTLEVBQUM7QUFFdEIsSUFBQSxBQUFNRix5QkF5R2xCLEFBekdZO2FBQU1BLFNBQ1BJLFlBQVksRUFBRUMsYUFBYTs4QkFEcEJMO1FBRWpCLElBQUksQ0FBQ0ksWUFBWSxHQUFHQTtRQUNwQixJQUFJLENBQUNDLGFBQWEsR0FBR0E7O2lCQUhKTDs7WUFNbkJNLEtBQUFBO21CQUFBQSxTQUFBQSxrQkFBa0I7Z0JBQ2hCLE9BQU8sSUFBSSxDQUFDRixZQUFZO1lBQzFCOzs7WUFFQUcsS0FBQUE7bUJBQUFBLFNBQUFBLG1CQUFtQjtnQkFDakIsT0FBTyxJQUFJLENBQUNGLGFBQWE7WUFDM0I7OztZQUVBRyxLQUFBQTttQkFBQUEsU0FBQUEsZUFBZUosWUFBWSxFQUFFQyxhQUFhLEVBQUVJLFFBQVEsRUFBRUMsVUFBVSxFQUFFQyxPQUFPLEVBQUU7Z0JBQ3pFLElBQUlDLG9DQUFvQyxJQUFJO2dCQUU1QyxJQUFJQSxtQ0FBbUM7b0JBQ3JD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