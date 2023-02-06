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
var _variable = /*#__PURE__*/ _interopRequireDefault(require("./variable"));
var _term = /*#__PURE__*/ _interopRequireWildcard(require("./verify/term"));
var _query = require("./utilities/query");
var _array = require("./utilities/array");
var _ruleNames = require("./ruleNames");
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
function _getRequireWildcardCache(nodeInterop) {
    if (typeof WeakMap !== "function") return null;
    var cacheBabelInterop = new WeakMap();
    var cacheNodeInterop = new WeakMap();
    return (_getRequireWildcardCache = function(nodeInterop) {
        return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
    })(nodeInterop);
}
function _interopRequireWildcard(obj, nodeInterop) {
    if (!nodeInterop && obj && obj.__esModule) {
        return obj;
    }
    if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
        return {
            default: obj
        };
    }
    var cache = _getRequireWildcardCache(nodeInterop);
    if (cache && cache.has(obj)) {
        return cache.get(obj);
    }
    var newObj = {};
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for(var key in obj){
        if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
            var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
            if (desc && (desc.get || desc.set)) {
                Object.defineProperty(newObj, key, desc);
            } else {
                newObj[key] = obj[key];
            }
        }
    }
    newObj.default = obj;
    if (cache) {
        cache.set(obj, newObj);
    }
    return newObj;
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
                    var leftNonTerminalNode = reversed ? this.rightTermNode : this.leftTermNode, rightNonTerminalNode = leftTermNode, nonTerminalNodeEquates = equateNonTerminalNode(leftNonTerminalNode, rightNonTerminalNode, equalities, context);
                    leftTermNodeAndRightTermNodeMatch = nonTerminalNodeEquates; ///
                }
                if (leftTermNodeAndRightTermNodeMatch) {
                    var leftNonTerminalNode1 = reversed ? this.leftTermNode : this.rightTermNode, rightNonTerminalNode1 = rightTermNode, nonTerminalNodeEquates1 = equateNonTerminalNode(leftNonTerminalNode1, rightNonTerminalNode1, equalities, context);
                    leftTermNodeAndRightTermNodeMatch = nonTerminalNodeEquates1; ///
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
            key: "equate",
            value: function equate(equalities, context) {
                var leftNonTerminalNode = this.leftTermNode, rightNonTerminalNode = this.rightTermNode, nonTerminalNodeEquates = equateNonTerminalNode(leftNonTerminalNode, rightNonTerminalNode, equalities, context), equates = nonTerminalNodeEquates; ///
                return equates;
            }
        }
    ], [
        {
            key: "fromStatementNode",
            value: function fromStatementNode(statementNode, context) {
                var leftTermNode = leftTermNodeQuery(statementNode), rightTermNode = rightTermNodeQuery(statementNode), equality = equalityFromLeftTermNodeAndRightTermNode(leftTermNode, rightTermNode, context);
                return equality;
            }
        }
    ]);
    return Equality;
}();
function equateNode(nodeA, nodeB, equalities, context) {
    var nodeEquates = false;
    var nodeATerminalNode = nodeA.isTerminalNode(), nodeBTerminalNode = nodeB.isTerminalNode();
    if (nodeATerminalNode === nodeBTerminalNode) {
        if (nodeATerminalNode) {
            var terminalNodeA = nodeA, terminalNodeB = nodeB, terminalNodeEquates = equateTerminalNode(terminalNodeA, terminalNodeB, equalities, context);
            nodeEquates = terminalNodeEquates; ///
        } else {
            var nonTerminalNodeA = nodeA, nonTerminalNodeB = nodeB, nonTerminalNodeEquates = equateNonTerminalNode(nonTerminalNodeA, nonTerminalNodeB, equalities, context);
            nodeEquates = nonTerminalNodeEquates; ///
        }
    }
    return nodeEquates;
}
function equateNodes(leftNodes, rightNodes, equalities, context) {
    var nodesEquate = false;
    var leftNodesLength = leftNodes.length, rightNodesLength = rightNodes.length;
    if (leftNodesLength === rightNodesLength) {
        nodesEquate = leftNodes.every(function(LeftNode, index) {
            var rightNode = rightNodes[index], nodeEquates = equateNode(LeftNode, rightNode, equalities, context);
            if (nodeEquates) {
                return true;
            }
        });
    }
    return nodesEquate;
}
function equateTerminalNode(terminalNodeA, terminalNodeB, equalities, context) {
    var matches = terminalNodeA.match(terminalNodeB), terminalNodeEquates = matches; ///
    return terminalNodeEquates;
}
function equateNonTerminalNode(leftNonTerminalNode, rightNonTerminalNode, equalities, context) {
    var nonTerminalNodeEquates = false;
    var leftNonTerminalNodeRuleName = leftNonTerminalNode.getRuleName(), rightNonTerminalNodeRuleName = rightNonTerminalNode.getRuleName();
    if (leftNonTerminalNodeRuleName === rightNonTerminalNodeRuleName) {
        var ruleName = leftNonTerminalNodeRuleName, ruleNameTermRuleName = ruleName === _ruleNames.TERM_RULE_NAME;
        if (ruleNameTermRuleName) {
            var leftTermNode = leftNonTerminalNode, rightTermNode = rightNonTerminalNode, termNodeEquates = equateTermNode(leftTermNode, rightTermNode, equalities, context);
            nonTerminalNodeEquates = termNodeEquates; ///
        }
        if (!nonTerminalNodeEquates) {
            var leftNonTerminalNodeChildNodes = leftNonTerminalNode.getChildNodes(), rightNonTerminalNodeChildNodes = rightNonTerminalNode.getChildNodes(), leftNodes = leftNonTerminalNodeChildNodes, rightNodes = rightNonTerminalNodeChildNodes, nodesEquate = equateNodes(leftNodes, rightNodes, equalities, context);
            nonTerminalNodeEquates = nodesEquate; ///
        }
    }
    return nonTerminalNodeEquates;
}
function equateTermNode(leftTermNode, rightTermNode, equalities, context) {
    var termNodeEquates = false;
    var equality = equalityFromLeftTermNodeAndRightTermNode(leftTermNode, rightTermNode, context);
    if (equality !== null) {
        var equalityA = equality, equalitiesB = equalities, equalityMatches = equalitiesB.some(function(equalityB) {
            var equalityAMatchesEqualityB = equalityA.match(equalityB, equalitiesB, context);
            if (equalityAMatchesEqualityB) {
                return true;
            }
        });
        termNodeEquates = equalityMatches; ///
    }
    return termNodeEquates;
}
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
function equalityFromLeftTermNodeAndRightTermNode(leftTermNode, rightTermNode, context) {
    var equality = null;
    var types = [], leftTermVerified = (0, _term.default)(leftTermNode, types, context), rightTermVerified = (0, _term.default)(rightTermNode, types, context);
    if (leftTermVerified && rightTermVerified) {
        var firstType = (0, _array.first)(types), secondType = (0, _array.second)(types), leftTermType = firstType, rightTermType = secondType, leftTermTypeEqualToRightTermType = leftTermType.isEqualTo(rightTermType);
        if (leftTermTypeEqualToRightTermType) {
            equality = new Equality(leftTermNode, rightTermNode);
        } else {
            var leftTermTypeSubTypeOfRightTermType = leftTermType.isSubTypeOf(rightTermType);
            if (false) {
            ///
            } else if (leftTermTypeSubTypeOfRightTermType) {
                var variables = [], rightTermVerifiedAsVariable = (0, _term.verifyTermAsVariable)(rightTermNode, variables, context);
                if (rightTermVerifiedAsVariable) {
                    var rightVariable;
                    var firstVariable = (0, _array.first)(variables);
                    rightVariable = firstVariable; ///
                    var rightVariableName = rightVariable.getName(), rightName = rightVariableName, rightType = leftTermType; ///
                    rightVariable = _variable.default.fromTypeAndName(rightType, rightName);
                    context.addVariable(rightVariable);
                    equality = new Equality(leftTermNode, rightTermNode);
                }
            }
        }
        if (equality === null) {
            var leftTermString = context.nodeAsString(leftTermNode), rightTermString = context.nodeAsString(rightTermNode), leftTermTypeName = leftTermType.getName(), rightTermTypeName = rightTermType.getName();
            context.error("The left '".concat(leftTermString, "' term's '").concat(leftTermTypeName, "' type is not equal to the right '").concat(rightTermString, "' term's '").concat(rightTermTypeName, "' type and neither can be inferred.'"), leftTermNode);
        }
    }
    return equality;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9lcXVhbGl0eS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFZhcmlhYmxlIGZyb20gXCIuL3ZhcmlhYmxlXCI7XG5pbXBvcnQgdmVyaWZ5VGVybSBmcm9tIFwiLi92ZXJpZnkvdGVybVwiO1xuXG5pbXBvcnQgeyBub2RlUXVlcnkgfSBmcm9tIFwiLi91dGlsaXRpZXMvcXVlcnlcIjtcbmltcG9ydCB7IGZpcnN0LCBzZWNvbmQgfSBmcm9tIFwiLi91dGlsaXRpZXMvYXJyYXlcIjtcbmltcG9ydCB7IFRFUk1fUlVMRV9OQU1FIH0gZnJvbSBcIi4vcnVsZU5hbWVzXCI7XG5pbXBvcnQgeyB2ZXJpZnlUZXJtQXNWYXJpYWJsZSB9IGZyb20gXCIuL3ZlcmlmeS90ZXJtXCI7XG5cbmNvbnN0IGxlZnRUZXJtTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3N0YXRlbWVudC9hcmd1bWVudFswXS90ZXJtIVwiKSxcbiAgICAgIHJpZ2h0VGVybU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9zdGF0ZW1lbnQvYXJndW1lbnRbMV0vdGVybSFcIik7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEVxdWFsaXR5IHtcbiAgY29uc3RydWN0b3IobGVmdFRlcm1Ob2RlLCByaWdodFRlcm1Ob2RlKSB7XG4gICAgdGhpcy5sZWZ0VGVybU5vZGUgPSBsZWZ0VGVybU5vZGU7XG4gICAgdGhpcy5yaWdodFRlcm1Ob2RlID0gcmlnaHRUZXJtTm9kZTtcbiAgfVxuXG4gIGdldExlZnRUZXJtTm9kZSgpIHtcbiAgICByZXR1cm4gdGhpcy5sZWZ0VGVybU5vZGU7XG4gIH1cblxuICBnZXRSaWdodFRlcm1Ob2RlKCkge1xuICAgIHJldHVybiB0aGlzLnJpZ2h0VGVybU5vZGU7XG4gIH1cblxuICBtYXRjaFRlcm1Ob2RlcyhsZWZ0VGVybU5vZGUsIHJpZ2h0VGVybU5vZGUsIHJldmVyc2VkLCBlcXVhbGl0aWVzLCBjb250ZXh0KSB7XG4gICAgbGV0IGxlZnRUZXJtTm9kZUFuZFJpZ2h0VGVybU5vZGVNYXRjaCA9IHRydWU7XG5cbiAgICBpZiAobGVmdFRlcm1Ob2RlQW5kUmlnaHRUZXJtTm9kZU1hdGNoKSB7XG4gICAgICBjb25zdCBsZWZ0Tm9uVGVybWluYWxOb2RlID0gcmV2ZXJzZWQgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yaWdodFRlcm1Ob2RlIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5sZWZ0VGVybU5vZGUsICAvLy9cbiAgICAgICAgICAgIHJpZ2h0Tm9uVGVybWluYWxOb2RlID0gbGVmdFRlcm1Ob2RlLCAgLy8vXG4gICAgICAgICAgICBub25UZXJtaW5hbE5vZGVFcXVhdGVzID0gZXF1YXRlTm9uVGVybWluYWxOb2RlKGxlZnROb25UZXJtaW5hbE5vZGUsIHJpZ2h0Tm9uVGVybWluYWxOb2RlLCBlcXVhbGl0aWVzLCBjb250ZXh0KTtcblxuICAgICAgbGVmdFRlcm1Ob2RlQW5kUmlnaHRUZXJtTm9kZU1hdGNoID0gbm9uVGVybWluYWxOb2RlRXF1YXRlczsgLy8vXG4gICAgfVxuXG4gICAgaWYgKGxlZnRUZXJtTm9kZUFuZFJpZ2h0VGVybU5vZGVNYXRjaCkge1xuICAgICAgY29uc3QgbGVmdE5vblRlcm1pbmFsTm9kZSA9IHJldmVyc2VkID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubGVmdFRlcm1Ob2RlIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yaWdodFRlcm1Ob2RlLCAgLy8vXG4gICAgICAgICAgICByaWdodE5vblRlcm1pbmFsTm9kZSA9IHJpZ2h0VGVybU5vZGUsICAvLy9cbiAgICAgICAgICAgIG5vblRlcm1pbmFsTm9kZUVxdWF0ZXMgPSBlcXVhdGVOb25UZXJtaW5hbE5vZGUobGVmdE5vblRlcm1pbmFsTm9kZSwgcmlnaHROb25UZXJtaW5hbE5vZGUsIGVxdWFsaXRpZXMsIGNvbnRleHQpO1xuXG4gICAgICBsZWZ0VGVybU5vZGVBbmRSaWdodFRlcm1Ob2RlTWF0Y2ggPSBub25UZXJtaW5hbE5vZGVFcXVhdGVzOyAvLy9cbiAgICB9XG5cbiAgICByZXR1cm4gbGVmdFRlcm1Ob2RlQW5kUmlnaHRUZXJtTm9kZU1hdGNoO1xuICB9XG5cbiAgbWF0Y2goZXF1YWxpdHksIGVxdWFsaXRpZXMsIGNvbnRleHQpIHtcbiAgICBsZXQgbWF0Y2hlcyA9IGZhbHNlO1xuXG4gICAgY29uc3QgbGVmdFRlcm1Ob2RlID0gZXF1YWxpdHkuZ2V0TGVmdFRlcm1Ob2RlKCksXG4gICAgICAgICAgcmlnaHRUZXJtTm9kZSA9IGVxdWFsaXR5LmdldFJpZ2h0VGVybU5vZGUoKTtcblxuICAgIGVxdWFsaXRpZXMgPSBmaWx0ZXJFcXVhbGl0aWVzKGVxdWFsaXRpZXMsIGVxdWFsaXR5KTsgIC8vL1xuXG4gICAgaWYgKCFtYXRjaGVzKSB7XG4gICAgICBjb25zdCByZXZlcnNlZCA9IGZhbHNlLFxuICAgICAgICAgICAgbGVmdFRlcm1Ob2RlQW5kUmlnaHRUZXJtTm9kZU1hdGNoID0gdGhpcy5tYXRjaFRlcm1Ob2RlcyhsZWZ0VGVybU5vZGUsIHJpZ2h0VGVybU5vZGUsIHJldmVyc2VkLCBlcXVhbGl0aWVzLCBjb250ZXh0KTtcblxuICAgICAgbWF0Y2hlcyA9IGxlZnRUZXJtTm9kZUFuZFJpZ2h0VGVybU5vZGVNYXRjaDsgIC8vL1xuICAgIH1cblxuICAgIGlmICghbWF0Y2hlcykge1xuICAgICAgY29uc3QgcmV2ZXJzZWQgPSB0cnVlLFxuICAgICAgICAgICAgbGVmdFRlcm1Ob2RlQW5kUmlnaHRUZXJtTm9kZU1hdGNoID0gdGhpcy5tYXRjaFRlcm1Ob2RlcyhsZWZ0VGVybU5vZGUsIHJpZ2h0VGVybU5vZGUsIHJldmVyc2VkLCBlcXVhbGl0aWVzLCBjb250ZXh0KTtcblxuICAgICAgbWF0Y2hlcyA9IGxlZnRUZXJtTm9kZUFuZFJpZ2h0VGVybU5vZGVNYXRjaDsgIC8vL1xuICAgIH1cblxuICAgIHJldHVybiBtYXRjaGVzO1xuICB9XG5cbiAgZXF1YXRlKGVxdWFsaXRpZXMsIGNvbnRleHQpIHtcbiAgICBjb25zdCBsZWZ0Tm9uVGVybWluYWxOb2RlID0gdGhpcy5sZWZ0VGVybU5vZGUsICAvLy9cbiAgICAgICAgICByaWdodE5vblRlcm1pbmFsTm9kZSA9IHRoaXMucmlnaHRUZXJtTm9kZSwgIC8vL1xuICAgICAgICAgIG5vblRlcm1pbmFsTm9kZUVxdWF0ZXMgPSBlcXVhdGVOb25UZXJtaW5hbE5vZGUobGVmdE5vblRlcm1pbmFsTm9kZSwgcmlnaHROb25UZXJtaW5hbE5vZGUsIGVxdWFsaXRpZXMsIGNvbnRleHQpLFxuICAgICAgICAgIGVxdWF0ZXMgPSBub25UZXJtaW5hbE5vZGVFcXVhdGVzOyAvLy9cblxuICAgIHJldHVybiBlcXVhdGVzO1xuICB9XG5cbiAgc3RhdGljIGZyb21TdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUsIGNvbnRleHQpIHtcbiAgICBjb25zdCBsZWZ0VGVybU5vZGUgPSBsZWZ0VGVybU5vZGVRdWVyeShzdGF0ZW1lbnROb2RlKSxcbiAgICAgICAgICByaWdodFRlcm1Ob2RlID0gcmlnaHRUZXJtTm9kZVF1ZXJ5KHN0YXRlbWVudE5vZGUpLFxuICAgICAgICAgIGVxdWFsaXR5ID0gZXF1YWxpdHlGcm9tTGVmdFRlcm1Ob2RlQW5kUmlnaHRUZXJtTm9kZShsZWZ0VGVybU5vZGUsIHJpZ2h0VGVybU5vZGUsIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIGVxdWFsaXR5O1xuICB9XG59XG5cbmZ1bmN0aW9uIGVxdWF0ZU5vZGUobm9kZUEsIG5vZGVCLCBlcXVhbGl0aWVzLCBjb250ZXh0KSB7XG4gIGxldCBub2RlRXF1YXRlcyA9IGZhbHNlO1xuXG4gIGNvbnN0IG5vZGVBVGVybWluYWxOb2RlID0gbm9kZUEuaXNUZXJtaW5hbE5vZGUoKSxcbiAgICAgICAgbm9kZUJUZXJtaW5hbE5vZGUgPSBub2RlQi5pc1Rlcm1pbmFsTm9kZSgpO1xuXG4gIGlmIChub2RlQVRlcm1pbmFsTm9kZSA9PT0gbm9kZUJUZXJtaW5hbE5vZGUpIHtcbiAgICBpZiAobm9kZUFUZXJtaW5hbE5vZGUpIHtcbiAgICAgIGNvbnN0IHRlcm1pbmFsTm9kZUEgPSBub2RlQSwgIC8vL1xuICAgICAgICAgICAgdGVybWluYWxOb2RlQiA9IG5vZGVCLCAgLy8vXG4gICAgICAgICAgICB0ZXJtaW5hbE5vZGVFcXVhdGVzID0gZXF1YXRlVGVybWluYWxOb2RlKHRlcm1pbmFsTm9kZUEsIHRlcm1pbmFsTm9kZUIsIGVxdWFsaXRpZXMsIGNvbnRleHQpO1xuXG4gICAgICBub2RlRXF1YXRlcyA9IHRlcm1pbmFsTm9kZUVxdWF0ZXM7ICAvLy9cbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3Qgbm9uVGVybWluYWxOb2RlQSA9IG5vZGVBLCAgLy8vXG4gICAgICAgICAgICBub25UZXJtaW5hbE5vZGVCID0gbm9kZUIsIC8vL1xuICAgICAgICAgICAgbm9uVGVybWluYWxOb2RlRXF1YXRlcyA9IGVxdWF0ZU5vblRlcm1pbmFsTm9kZShub25UZXJtaW5hbE5vZGVBLCBub25UZXJtaW5hbE5vZGVCLCBlcXVhbGl0aWVzLCBjb250ZXh0KTtcblxuICAgICAgbm9kZUVxdWF0ZXMgPSBub25UZXJtaW5hbE5vZGVFcXVhdGVzOyAvLy9cbiAgICB9XG4gIH1cblxuICByZXR1cm4gbm9kZUVxdWF0ZXM7XG59XG5cbmZ1bmN0aW9uIGVxdWF0ZU5vZGVzKGxlZnROb2RlcywgcmlnaHROb2RlcywgZXF1YWxpdGllcywgY29udGV4dCkge1xuICBsZXQgbm9kZXNFcXVhdGUgPSBmYWxzZTtcblxuICBjb25zdCBsZWZ0Tm9kZXNMZW5ndGggPSBsZWZ0Tm9kZXMubGVuZ3RoLFxuICAgICAgICByaWdodE5vZGVzTGVuZ3RoID0gcmlnaHROb2Rlcy5sZW5ndGg7XG5cbiAgaWYgKGxlZnROb2Rlc0xlbmd0aCA9PT0gcmlnaHROb2Rlc0xlbmd0aCkge1xuICAgIG5vZGVzRXF1YXRlID0gbGVmdE5vZGVzLmV2ZXJ5KChMZWZ0Tm9kZSwgaW5kZXgpID0+IHtcbiAgICAgIGNvbnN0IHJpZ2h0Tm9kZSA9IHJpZ2h0Tm9kZXNbaW5kZXhdLFxuICAgICAgICAgICAgbm9kZUVxdWF0ZXMgPSBlcXVhdGVOb2RlKExlZnROb2RlLCByaWdodE5vZGUsIGVxdWFsaXRpZXMsIGNvbnRleHQpO1xuXG4gICAgICBpZiAobm9kZUVxdWF0ZXMpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICByZXR1cm4gbm9kZXNFcXVhdGU7XG59XG5cbmZ1bmN0aW9uIGVxdWF0ZVRlcm1pbmFsTm9kZSh0ZXJtaW5hbE5vZGVBLCB0ZXJtaW5hbE5vZGVCLCBlcXVhbGl0aWVzLCBjb250ZXh0KSB7XG4gIGNvbnN0IG1hdGNoZXMgPSB0ZXJtaW5hbE5vZGVBLm1hdGNoKHRlcm1pbmFsTm9kZUIpLFxuICAgICAgICB0ZXJtaW5hbE5vZGVFcXVhdGVzID0gbWF0Y2hlczsgIC8vL1xuXG4gIHJldHVybiB0ZXJtaW5hbE5vZGVFcXVhdGVzO1xufVxuXG5mdW5jdGlvbiBlcXVhdGVOb25UZXJtaW5hbE5vZGUobGVmdE5vblRlcm1pbmFsTm9kZSwgcmlnaHROb25UZXJtaW5hbE5vZGUsIGVxdWFsaXRpZXMsIGNvbnRleHQpIHtcbiAgbGV0IG5vblRlcm1pbmFsTm9kZUVxdWF0ZXMgPSBmYWxzZTtcblxuICBjb25zdCBsZWZ0Tm9uVGVybWluYWxOb2RlUnVsZU5hbWUgPSBsZWZ0Tm9uVGVybWluYWxOb2RlLmdldFJ1bGVOYW1lKCksXG4gICAgICAgIHJpZ2h0Tm9uVGVybWluYWxOb2RlUnVsZU5hbWUgPSByaWdodE5vblRlcm1pbmFsTm9kZS5nZXRSdWxlTmFtZSgpO1xuXG4gIGlmIChsZWZ0Tm9uVGVybWluYWxOb2RlUnVsZU5hbWUgPT09IHJpZ2h0Tm9uVGVybWluYWxOb2RlUnVsZU5hbWUpIHtcbiAgICBjb25zdCBydWxlTmFtZSA9IGxlZnROb25UZXJtaW5hbE5vZGVSdWxlTmFtZSwgLy8vXG4gICAgICAgICAgcnVsZU5hbWVUZXJtUnVsZU5hbWUgPSAocnVsZU5hbWUgPT09IFRFUk1fUlVMRV9OQU1FKTtcblxuICAgIGlmIChydWxlTmFtZVRlcm1SdWxlTmFtZSkge1xuICAgICAgY29uc3QgbGVmdFRlcm1Ob2RlID0gbGVmdE5vblRlcm1pbmFsTm9kZSwgLy8vXG4gICAgICAgICAgICByaWdodFRlcm1Ob2RlID0gcmlnaHROb25UZXJtaW5hbE5vZGUsIC8vL1xuICAgICAgICAgICAgdGVybU5vZGVFcXVhdGVzID0gZXF1YXRlVGVybU5vZGUobGVmdFRlcm1Ob2RlLCByaWdodFRlcm1Ob2RlLCBlcXVhbGl0aWVzLCBjb250ZXh0KTtcblxuICAgICAgbm9uVGVybWluYWxOb2RlRXF1YXRlcyA9IHRlcm1Ob2RlRXF1YXRlczsgIC8vL1xuICAgIH1cblxuICAgIGlmICghbm9uVGVybWluYWxOb2RlRXF1YXRlcykge1xuICAgICAgY29uc3QgbGVmdE5vblRlcm1pbmFsTm9kZUNoaWxkTm9kZXMgPSBsZWZ0Tm9uVGVybWluYWxOb2RlLmdldENoaWxkTm9kZXMoKSxcbiAgICAgICAgICAgIHJpZ2h0Tm9uVGVybWluYWxOb2RlQ2hpbGROb2RlcyA9IHJpZ2h0Tm9uVGVybWluYWxOb2RlLmdldENoaWxkTm9kZXMoKSxcbiAgICAgICAgICAgIGxlZnROb2RlcyA9IGxlZnROb25UZXJtaW5hbE5vZGVDaGlsZE5vZGVzLCAvLy9cbiAgICAgICAgICAgIHJpZ2h0Tm9kZXMgPSByaWdodE5vblRlcm1pbmFsTm9kZUNoaWxkTm9kZXMsIC8vL1xuICAgICAgICAgICAgbm9kZXNFcXVhdGUgPSBlcXVhdGVOb2RlcyhsZWZ0Tm9kZXMsIHJpZ2h0Tm9kZXMsIGVxdWFsaXRpZXMsIGNvbnRleHQpO1xuXG4gICAgICBub25UZXJtaW5hbE5vZGVFcXVhdGVzID0gbm9kZXNFcXVhdGU7IC8vL1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBub25UZXJtaW5hbE5vZGVFcXVhdGVzO1xufVxuXG5mdW5jdGlvbiBlcXVhdGVUZXJtTm9kZShsZWZ0VGVybU5vZGUsIHJpZ2h0VGVybU5vZGUsIGVxdWFsaXRpZXMsIGNvbnRleHQpIHtcbiAgbGV0IHRlcm1Ob2RlRXF1YXRlcyA9IGZhbHNlO1xuXG4gIGNvbnN0IGVxdWFsaXR5ID0gZXF1YWxpdHlGcm9tTGVmdFRlcm1Ob2RlQW5kUmlnaHRUZXJtTm9kZShsZWZ0VGVybU5vZGUsIHJpZ2h0VGVybU5vZGUsIGNvbnRleHQpO1xuXG4gIGlmIChlcXVhbGl0eSAhPT0gbnVsbCkge1xuICAgIGNvbnN0IGVxdWFsaXR5QSA9IGVxdWFsaXR5LCAvLy9cbiAgICAgICAgICBlcXVhbGl0aWVzQiA9IGVxdWFsaXRpZXMsIC8vL1xuICAgICAgICAgIGVxdWFsaXR5TWF0Y2hlcyA9IGVxdWFsaXRpZXNCLnNvbWUoKGVxdWFsaXR5QikgPT4geyAvLy9cbiAgICAgICAgICAgIGNvbnN0IGVxdWFsaXR5QU1hdGNoZXNFcXVhbGl0eUIgPSBlcXVhbGl0eUEubWF0Y2goZXF1YWxpdHlCLCBlcXVhbGl0aWVzQiwgY29udGV4dCk7XG5cbiAgICAgICAgICAgIGlmIChlcXVhbGl0eUFNYXRjaGVzRXF1YWxpdHlCKSB7XG4gICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuXG4gICAgdGVybU5vZGVFcXVhdGVzID0gZXF1YWxpdHlNYXRjaGVzOyAgLy8vXG4gIH1cblxuICByZXR1cm4gdGVybU5vZGVFcXVhdGVzO1xufVxuXG5mdW5jdGlvbiBmaWx0ZXJFcXVhbGl0aWVzKGVxdWFsaXRpZXMsIGVxdWFsaXR5KSB7XG4gIGNvbnN0IGVxdWFsaXR5QSA9IGVxdWFsaXR5OyAvLy9cblxuICBlcXVhbGl0aWVzID0gZXF1YWxpdGllcy5maWx0ZXIoKGVxdWFsaXR5KSA9PiB7XG4gICAgY29uc3QgZXF1YWxpdHlCID0gZXF1YWxpdHk7IC8vL1xuXG4gICAgaWYgKGVxdWFsaXR5QSAhPT0gZXF1YWxpdHlCKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiBlcXVhbGl0aWVzO1xufVxuXG5mdW5jdGlvbiBlcXVhbGl0eUZyb21MZWZ0VGVybU5vZGVBbmRSaWdodFRlcm1Ob2RlKGxlZnRUZXJtTm9kZSwgcmlnaHRUZXJtTm9kZSwgY29udGV4dCkge1xuICBsZXQgZXF1YWxpdHkgPSBudWxsO1xuXG4gIGNvbnN0IHR5cGVzID0gW10sXG4gICAgICAgIGxlZnRUZXJtVmVyaWZpZWQgPSB2ZXJpZnlUZXJtKGxlZnRUZXJtTm9kZSwgdHlwZXMsIGNvbnRleHQpLFxuICAgICAgICByaWdodFRlcm1WZXJpZmllZCA9IHZlcmlmeVRlcm0ocmlnaHRUZXJtTm9kZSwgdHlwZXMsIGNvbnRleHQpO1xuXG4gIGlmIChsZWZ0VGVybVZlcmlmaWVkICYmIHJpZ2h0VGVybVZlcmlmaWVkKSB7XG4gICAgY29uc3QgZmlyc3RUeXBlID0gZmlyc3QodHlwZXMpLFxuICAgICAgICAgIHNlY29uZFR5cGUgPSBzZWNvbmQodHlwZXMpLFxuICAgICAgICAgIGxlZnRUZXJtVHlwZSA9IGZpcnN0VHlwZSwgLy8vXG4gICAgICAgICAgcmlnaHRUZXJtVHlwZSA9IHNlY29uZFR5cGUsIC8vL1xuICAgICAgICAgIGxlZnRUZXJtVHlwZUVxdWFsVG9SaWdodFRlcm1UeXBlID0gbGVmdFRlcm1UeXBlLmlzRXF1YWxUbyhyaWdodFRlcm1UeXBlKTtcblxuICAgIGlmIChsZWZ0VGVybVR5cGVFcXVhbFRvUmlnaHRUZXJtVHlwZSkge1xuICAgICAgZXF1YWxpdHkgPSBuZXcgRXF1YWxpdHkobGVmdFRlcm1Ob2RlLCByaWdodFRlcm1Ob2RlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgbGVmdFRlcm1UeXBlU3ViVHlwZU9mUmlnaHRUZXJtVHlwZSA9IGxlZnRUZXJtVHlwZS5pc1N1YlR5cGVPZihyaWdodFRlcm1UeXBlKTtcblxuICAgICAgaWYgKGZhbHNlKSB7XG4gICAgICAgICAgLy8vXG4gICAgICB9IGVsc2UgaWYgKGxlZnRUZXJtVHlwZVN1YlR5cGVPZlJpZ2h0VGVybVR5cGUpIHtcbiAgICAgICAgY29uc3QgdmFyaWFibGVzID0gW10sXG4gICAgICAgICAgICAgIHJpZ2h0VGVybVZlcmlmaWVkQXNWYXJpYWJsZSA9IHZlcmlmeVRlcm1Bc1ZhcmlhYmxlKHJpZ2h0VGVybU5vZGUsIHZhcmlhYmxlcywgY29udGV4dCk7XG5cbiAgICAgICAgaWYgKHJpZ2h0VGVybVZlcmlmaWVkQXNWYXJpYWJsZSkge1xuICAgICAgICAgIGxldCByaWdodFZhcmlhYmxlO1xuXG4gICAgICAgICAgY29uc3QgZmlyc3RWYXJpYWJsZSA9IGZpcnN0KHZhcmlhYmxlcyk7XG5cbiAgICAgICAgICByaWdodFZhcmlhYmxlID0gZmlyc3RWYXJpYWJsZTsgIC8vL1xuXG4gICAgICAgICAgY29uc3QgcmlnaHRWYXJpYWJsZU5hbWUgPSByaWdodFZhcmlhYmxlLmdldE5hbWUoKSxcbiAgICAgICAgICAgICAgICByaWdodE5hbWUgPSByaWdodFZhcmlhYmxlTmFtZSwgIC8vL1xuICAgICAgICAgICAgICAgIHJpZ2h0VHlwZSA9IGxlZnRUZXJtVHlwZTsgLy8vXG5cbiAgICAgICAgICByaWdodFZhcmlhYmxlID0gVmFyaWFibGUuZnJvbVR5cGVBbmROYW1lKHJpZ2h0VHlwZSwgcmlnaHROYW1lKTtcblxuICAgICAgICAgIGNvbnRleHQuYWRkVmFyaWFibGUocmlnaHRWYXJpYWJsZSk7XG5cbiAgICAgICAgICBlcXVhbGl0eSA9IG5ldyBFcXVhbGl0eShsZWZ0VGVybU5vZGUsIHJpZ2h0VGVybU5vZGUpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGVxdWFsaXR5ID09PSBudWxsKSB7XG4gICAgICBjb25zdCBsZWZ0VGVybVN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKGxlZnRUZXJtTm9kZSksXG4gICAgICAgICAgICByaWdodFRlcm1TdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhyaWdodFRlcm1Ob2RlKSxcbiAgICAgICAgICAgIGxlZnRUZXJtVHlwZU5hbWUgPSBsZWZ0VGVybVR5cGUuZ2V0TmFtZSgpLFxuICAgICAgICAgICAgcmlnaHRUZXJtVHlwZU5hbWUgPSByaWdodFRlcm1UeXBlLmdldE5hbWUoKTtcblxuICAgICAgY29udGV4dC5lcnJvcihgVGhlIGxlZnQgJyR7bGVmdFRlcm1TdHJpbmd9JyB0ZXJtJ3MgJyR7bGVmdFRlcm1UeXBlTmFtZX0nIHR5cGUgaXMgbm90IGVxdWFsIHRvIHRoZSByaWdodCAnJHtyaWdodFRlcm1TdHJpbmd9JyB0ZXJtJ3MgJyR7cmlnaHRUZXJtVHlwZU5hbWV9JyB0eXBlIGFuZCBuZWl0aGVyIGNhbiBiZSBpbmZlcnJlZC4nYCwgbGVmdFRlcm1Ob2RlKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZXF1YWxpdHk7XG59XG4iXSwibmFtZXMiOlsiRXF1YWxpdHkiLCJsZWZ0VGVybU5vZGVRdWVyeSIsIm5vZGVRdWVyeSIsInJpZ2h0VGVybU5vZGVRdWVyeSIsImxlZnRUZXJtTm9kZSIsInJpZ2h0VGVybU5vZGUiLCJnZXRMZWZ0VGVybU5vZGUiLCJnZXRSaWdodFRlcm1Ob2RlIiwibWF0Y2hUZXJtTm9kZXMiLCJyZXZlcnNlZCIsImVxdWFsaXRpZXMiLCJjb250ZXh0IiwibGVmdFRlcm1Ob2RlQW5kUmlnaHRUZXJtTm9kZU1hdGNoIiwibGVmdE5vblRlcm1pbmFsTm9kZSIsInJpZ2h0Tm9uVGVybWluYWxOb2RlIiwibm9uVGVybWluYWxOb2RlRXF1YXRlcyIsImVxdWF0ZU5vblRlcm1pbmFsTm9kZSIsIm1hdGNoIiwiZXF1YWxpdHkiLCJtYXRjaGVzIiwiZmlsdGVyRXF1YWxpdGllcyIsImVxdWF0ZSIsImVxdWF0ZXMiLCJmcm9tU3RhdGVtZW50Tm9kZSIsInN0YXRlbWVudE5vZGUiLCJlcXVhbGl0eUZyb21MZWZ0VGVybU5vZGVBbmRSaWdodFRlcm1Ob2RlIiwiZXF1YXRlTm9kZSIsIm5vZGVBIiwibm9kZUIiLCJub2RlRXF1YXRlcyIsIm5vZGVBVGVybWluYWxOb2RlIiwiaXNUZXJtaW5hbE5vZGUiLCJub2RlQlRlcm1pbmFsTm9kZSIsInRlcm1pbmFsTm9kZUEiLCJ0ZXJtaW5hbE5vZGVCIiwidGVybWluYWxOb2RlRXF1YXRlcyIsImVxdWF0ZVRlcm1pbmFsTm9kZSIsIm5vblRlcm1pbmFsTm9kZUEiLCJub25UZXJtaW5hbE5vZGVCIiwiZXF1YXRlTm9kZXMiLCJsZWZ0Tm9kZXMiLCJyaWdodE5vZGVzIiwibm9kZXNFcXVhdGUiLCJsZWZ0Tm9kZXNMZW5ndGgiLCJsZW5ndGgiLCJyaWdodE5vZGVzTGVuZ3RoIiwiZXZlcnkiLCJMZWZ0Tm9kZSIsImluZGV4IiwicmlnaHROb2RlIiwibGVmdE5vblRlcm1pbmFsTm9kZVJ1bGVOYW1lIiwiZ2V0UnVsZU5hbWUiLCJyaWdodE5vblRlcm1pbmFsTm9kZVJ1bGVOYW1lIiwicnVsZU5hbWUiLCJydWxlTmFtZVRlcm1SdWxlTmFtZSIsIlRFUk1fUlVMRV9OQU1FIiwidGVybU5vZGVFcXVhdGVzIiwiZXF1YXRlVGVybU5vZGUiLCJsZWZ0Tm9uVGVybWluYWxOb2RlQ2hpbGROb2RlcyIsImdldENoaWxkTm9kZXMiLCJyaWdodE5vblRlcm1pbmFsTm9kZUNoaWxkTm9kZXMiLCJlcXVhbGl0eUEiLCJlcXVhbGl0aWVzQiIsImVxdWFsaXR5TWF0Y2hlcyIsInNvbWUiLCJlcXVhbGl0eUIiLCJlcXVhbGl0eUFNYXRjaGVzRXF1YWxpdHlCIiwiZmlsdGVyIiwidHlwZXMiLCJsZWZ0VGVybVZlcmlmaWVkIiwidmVyaWZ5VGVybSIsInJpZ2h0VGVybVZlcmlmaWVkIiwiZmlyc3RUeXBlIiwiZmlyc3QiLCJzZWNvbmRUeXBlIiwic2Vjb25kIiwibGVmdFRlcm1UeXBlIiwicmlnaHRUZXJtVHlwZSIsImxlZnRUZXJtVHlwZUVxdWFsVG9SaWdodFRlcm1UeXBlIiwiaXNFcXVhbFRvIiwibGVmdFRlcm1UeXBlU3ViVHlwZU9mUmlnaHRUZXJtVHlwZSIsImlzU3ViVHlwZU9mIiwidmFyaWFibGVzIiwicmlnaHRUZXJtVmVyaWZpZWRBc1ZhcmlhYmxlIiwidmVyaWZ5VGVybUFzVmFyaWFibGUiLCJyaWdodFZhcmlhYmxlIiwiZmlyc3RWYXJpYWJsZSIsInJpZ2h0VmFyaWFibGVOYW1lIiwiZ2V0TmFtZSIsInJpZ2h0TmFtZSIsInJpZ2h0VHlwZSIsIlZhcmlhYmxlIiwiZnJvbVR5cGVBbmROYW1lIiwiYWRkVmFyaWFibGUiLCJsZWZ0VGVybVN0cmluZyIsIm5vZGVBc1N0cmluZyIsInJpZ2h0VGVybVN0cmluZyIsImxlZnRUZXJtVHlwZU5hbWUiLCJyaWdodFRlcm1UeXBlTmFtZSIsImVycm9yIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQWFxQkE7Ozs2REFYQTswREFDRTtxQkFFRztxQkFDSTt5QkFDQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUcvQixJQUFNQyxvQkFBb0JDLElBQUFBLGdCQUFTLEVBQUMsaUNBQzlCQyxxQkFBcUJELElBQUFBLGdCQUFTLEVBQUM7QUFFdEIsSUFBQSxBQUFNRix5QkFtRmxCLEFBbkZZO2FBQU1BLFNBQ1BJLFlBQVksRUFBRUMsYUFBYTs4QkFEcEJMO1FBRWpCLElBQUksQ0FBQ0ksWUFBWSxHQUFHQTtRQUNwQixJQUFJLENBQUNDLGFBQWEsR0FBR0E7O2lCQUhKTDs7WUFNbkJNLEtBQUFBO21CQUFBQSxTQUFBQSxrQkFBa0I7Z0JBQ2hCLE9BQU8sSUFBSSxDQUFDRixZQUFZO1lBQzFCOzs7WUFFQUcsS0FBQUE7bUJBQUFBLFNBQUFBLG1CQUFtQjtnQkFDakIsT0FBTyxJQUFJLENBQUNGLGFBQWE7WUFDM0I7OztZQUVBRyxLQUFBQTttQkFBQUEsU0FBQUEsZUFBZUosWUFBWSxFQUFFQyxhQUFhLEVBQUVJLFFBQVEsRUFBRUMsVUFBVSxFQUFFQyxPQUFPLEVBQUU7Z0JBQ3pFLElBQUlDLG9DQUFvQyxJQUFJO2dCQUU1QyxJQUFJQSxtQ0FBbUM7b0JBQ3JDLElBQU1DLHNCQUFzQkosV0FDRSxJQUFJLENBQUNKLGFBQWEsR0FDaEIsSUFBSSxDQUFDRCxZQUFZLEVBQzNDVSx1QkFBdUJWLGNBQ3ZCVyx5QkFBeUJDLHNCQUFz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