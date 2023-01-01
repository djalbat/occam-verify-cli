"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return Antecedent;
    }
});
var _substitution = /*#__PURE__*/ _interopRequireDefault(require("./substitution"));
var _array = require("./utilities/array");
var _string = require("./utilities/string");
var _query = require("./utilities/query");
var _ruleNames = require("./ruleNames");
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}
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
function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
var statementNodesQuery = (0, _query.nodesQuery)("/subproofAssertion/statement"), subproofAssertionNodeQuery = (0, _query.nodeQuery)("/statement/subproofAssertion!"), unqualifiedStatementStatementNodesQuery = (0, _query.nodesQuery)("/subproof/unqualifiedStatement/statement!"), qualifiedOrUnqualifiedStatementStatementNodeQuery = (0, _query.nodeQuery)("/subproof/metaDerivation|abridgedMetaDerivation/qualifiedStatement|unqualifiedStatement[-1]/statement!");
var Antecedent = /*#__PURE__*/ function() {
    function Antecedent(statementNode) {
        _classCallCheck(this, Antecedent);
        this.statementNode = statementNode;
    }
    _createClass(Antecedent, [
        {
            key: "getStatementNode",
            value: function getStatementNode() {
                return this.statementNode;
            }
        },
        {
            key: "matchSubproofNode",
            value: function matchSubproofNode(subproofNode, substitutions) {
                var subproofNodeMatches = false;
                var subproofAssertionNode = subproofAssertionNodeQuery(this.statementNode);
                if (subproofAssertionNode !== null) {
                    var subproofAssertionStatementNodes = statementNodesQuery(subproofAssertionNode), unqualifiedStatementStatementNodes = unqualifiedStatementStatementNodesQuery(subproofNode), qualifiedOrUnqualifiedStatementStatementNode = qualifiedOrUnqualifiedStatementStatementNodeQuery(subproofNode), statementNodes = _toConsumableArray(unqualifiedStatementStatementNodes).concat([
                        qualifiedOrUnqualifiedStatementStatementNode
                    ]), statementNodesLength = statementNodes.length, subproofAssertionStatementNodesLength = subproofAssertionStatementNodes.length;
                    if (statementNodesLength === subproofAssertionStatementNodesLength) {
                        subproofNodeMatches = subproofAssertionStatementNodes.every(function(subproofAssertionStatementNode, index) {
                            var statementNode = statementNodes[index], nonTerminalNode = statementNode, antecedentNonTerminalNode = subproofAssertionStatementNode, antecedentNonTerminalNodeMatches = matchAntecedentNonTerminalNode(antecedentNonTerminalNode, nonTerminalNode, substitutions);
                            if (antecedentNonTerminalNodeMatches) {
                                return true;
                            }
                        });
                    }
                }
                return subproofNodeMatches;
            }
        },
        {
            key: "matchStatementNode",
            value: function matchStatementNode(statementNode, substitutions) {
                var nonTerminalNode = statementNode, antecedentNonTerminalNode = this.statementNode, antecedentNonTerminalNodeMatches = matchAntecedentNonTerminalNode(antecedentNonTerminalNode, nonTerminalNode, substitutions), statementNodeMatches = antecedentNonTerminalNodeMatches; ///
                return statementNodeMatches;
            }
        },
        {
            key: "toJSON",
            value: function toJSON() {
                var statementString = (0, _string.nodeAsString)(this.statementNode), statement = statementString, json = {
                    statement: statement
                };
                return json;
            }
        }
    ], [
        {
            key: "fromJSON",
            value: function fromJSON(json, releaseContext) {
                var statement = json.statement, statementString = statement, statementNode = (0, _string.statementNodeFromStatementString)(statementString, releaseContext), antecedent = new Antecedent(statementNode);
                return antecedent;
            }
        },
        {
            key: "fromStatementNode",
            value: function fromStatementNode(statementNode) {
                var antecedent = new Antecedent(statementNode);
                return antecedent;
            }
        }
    ]);
    return Antecedent;
}();
function matchAntecedentNode(antecedentNode, node, substitutions) {
    var antecedentNodeMatches = false;
    var nodeTerminalNode = node.isTerminalNode(), ruleNodeTerminalNode = antecedentNode.isTerminalNode();
    if (nodeTerminalNode === ruleNodeTerminalNode) {
        if (nodeTerminalNode) {
            var terminalNode = node, antecedentTerminalNode = antecedentNode, antecedentTerminalNodeMatches = matchAntecedentTerminalNode(antecedentTerminalNode, terminalNode, substitutions);
            antecedentNodeMatches = antecedentTerminalNodeMatches; ///
        } else {
            var nonTerminalNode = node, antecedentNonTerminalNode = antecedentNode, antecedentNonTerminalNodeMatches = matchAntecedentNonTerminalNode(antecedentNonTerminalNode, nonTerminalNode, substitutions);
            antecedentNodeMatches = antecedentNonTerminalNodeMatches; ///
        }
    }
    return antecedentNodeMatches;
}
function matchAntecedentNodes(antecedentNodes, nodes, substitutions) {
    var antecedentNodesMatches = false;
    var nodesLength = nodes.length, antecedentNodesLength = antecedentNodes.length;
    if (nodesLength === antecedentNodesLength) {
        antecedentNodesMatches = nodes.every(function(node, index) {
            var antecedentNode = antecedentNodes[index], antecedentNodeMatches = matchAntecedentNode(antecedentNode, node, substitutions);
            if (antecedentNodeMatches) {
                return true;
            }
        });
    }
    return antecedentNodesMatches;
}
function matchAntecedentVariable(antecedentVariableNode, nodes, substitutions) {
    var antecedentVariableMatches;
    var antecedentVariableName = (0, _query.variableNameFromVariableNode)(antecedentVariableNode), substitution = substitutions.find(function(substitution) {
        var variableName = substitution.getVariableName();
        if (variableName === antecedentVariableName) {
            return true;
        }
    }) || null;
    if (substitution !== null) {
        var substitutionNodesMatch = substitution.matchNodes(nodes);
        antecedentVariableMatches = substitutionNodesMatch; ///
    } else {
        var variableName = antecedentVariableName, substitution1 = _substitution.default.fromVariableNameAndNodes(variableName, nodes);
        substitutions.push(substitution1);
        antecedentVariableMatches = true;
    }
    return antecedentVariableMatches;
}
function matchAntecedentTerminalNode(antecedentTerminalNode, terminalNode, substitutions) {
    var matches = antecedentTerminalNode.match(terminalNode), antecedentTerminalNodeMatches = matches;
    return antecedentTerminalNodeMatches;
}
function matchAntecedentNonTerminalNode(antecedentNonTerminalNode, nonTerminalNode, substitutions) {
    var antecedentNonTerminalNodeMatches = false;
    var ruleName = nonTerminalNode.getRuleName(), antecedentRuleName = antecedentNonTerminalNode.getRuleName(); ///
    if (ruleName === antecedentRuleName) {
        var childNodes = nonTerminalNode.getChildNodes(), antecedentChildNodes = antecedentNonTerminalNode.getChildNodes(), nodes = childNodes, antecedentNodes = antecedentChildNodes, antecedentChildNodesMatches = matchAntecedentNodes(antecedentNodes, nodes, substitutions);
        antecedentNonTerminalNodeMatches = antecedentChildNodesMatches; ///
        if (!antecedentNonTerminalNodeMatches) {
            var ruleNameStatementRuleName = ruleName === _ruleNames.STATEMENT_RULE_NAME;
            if (ruleNameStatementRuleName) {
                var statementNode = nonTerminalNode, antecedentStatementNode = antecedentNonTerminalNode, antecedentStatementNodeMatches = matchAntecedentStatementNode(antecedentStatementNode, statementNode, substitutions);
                antecedentNonTerminalNodeMatches = antecedentStatementNodeMatches; ///
            }
        }
    }
    return antecedentNonTerminalNodeMatches;
}
function matchAntecedentStatementNode(antecedentStatementNode, statementNode, substitutions) {
    var antecedentStatementNodeMatches = false;
    var antecedentNonTerminalNode = antecedentStatementNode, antecedentChildNodes = antecedentNonTerminalNode.getChildNodes(), antecedentChildNodesLength = antecedentChildNodes.length;
    if (antecedentChildNodesLength === 1) {
        var firstAntecedentChildNode = (0, _array.first)(antecedentChildNodes), antecedentChildNode = firstAntecedentChildNode, antecedentChildNodeNonTerminalNode = antecedentChildNode.isNonTerminalNode();
        if (antecedentChildNodeNonTerminalNode) {
            var antecedentNonTerminalChildNode = antecedentChildNode, antecedentNonTerminalChildNodeRuleName = antecedentNonTerminalChildNode.getRuleName(), antecedentNonTerminalChildNodeRuleNameVariableRuleName = antecedentNonTerminalChildNodeRuleName === _ruleNames.VARIABLE_RULE_NAME;
            if (antecedentNonTerminalChildNodeRuleNameVariableRuleName) {
                var antecedentVariableNode = antecedentNonTerminalChildNode, nonTerminalNode = statementNode, childNodes = nonTerminalNode.getChildNodes(), nodes = childNodes, antecedentVariableMatches = matchAntecedentVariable(antecedentVariableNode, nodes, substitutions);
                antecedentStatementNodeMatches = antecedentVariableMatches; ///
            }
        }
    }
    return antecedentStatementNodeMatches;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9hbnRlY2VkZW50LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgU3Vic3RpdHV0aW9uIGZyb20gXCIuL3N1YnN0aXR1dGlvblwiO1xuXG5pbXBvcnQgeyBmaXJzdCB9IGZyb20gXCIuL3V0aWxpdGllcy9hcnJheVwiO1xuaW1wb3J0IHsgbm9kZUFzU3RyaW5nIH0gZnJvbSBcIi4vdXRpbGl0aWVzL3N0cmluZ1wiO1xuaW1wb3J0IHsgbm9kZVF1ZXJ5LCBub2Rlc1F1ZXJ5IH0gZnJvbSBcIi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5pbXBvcnQgeyB2YXJpYWJsZU5hbWVGcm9tVmFyaWFibGVOb2RlIH0gZnJvbSBcIi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5pbXBvcnQgeyBzdGF0ZW1lbnROb2RlRnJvbVN0YXRlbWVudFN0cmluZyB9IGZyb20gXCIuL3V0aWxpdGllcy9zdHJpbmdcIjtcbmltcG9ydCB7IFZBUklBQkxFX1JVTEVfTkFNRSwgU1RBVEVNRU5UX1JVTEVfTkFNRSB9IGZyb20gXCIuL3J1bGVOYW1lc1wiO1xuXG5jb25zdCBzdGF0ZW1lbnROb2Rlc1F1ZXJ5ID0gbm9kZXNRdWVyeShcIi9zdWJwcm9vZkFzc2VydGlvbi9zdGF0ZW1lbnRcIiksXG4gICAgICBzdWJwcm9vZkFzc2VydGlvbk5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9zdGF0ZW1lbnQvc3VicHJvb2ZBc3NlcnRpb24hXCIpLFxuICAgICAgdW5xdWFsaWZpZWRTdGF0ZW1lbnRTdGF0ZW1lbnROb2Rlc1F1ZXJ5ID0gbm9kZXNRdWVyeShcIi9zdWJwcm9vZi91bnF1YWxpZmllZFN0YXRlbWVudC9zdGF0ZW1lbnQhXCIpLFxuICAgICAgcXVhbGlmaWVkT3JVbnF1YWxpZmllZFN0YXRlbWVudFN0YXRlbWVudE5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9zdWJwcm9vZi9tZXRhRGVyaXZhdGlvbnxhYnJpZGdlZE1ldGFEZXJpdmF0aW9uL3F1YWxpZmllZFN0YXRlbWVudHx1bnF1YWxpZmllZFN0YXRlbWVudFstMV0vc3RhdGVtZW50IVwiKTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQW50ZWNlZGVudCB7XG4gIGNvbnN0cnVjdG9yKHN0YXRlbWVudE5vZGUpIHtcbiAgICB0aGlzLnN0YXRlbWVudE5vZGUgPSBzdGF0ZW1lbnROb2RlO1xuICB9XG5cbiAgZ2V0U3RhdGVtZW50Tm9kZSgpIHtcbiAgICByZXR1cm4gdGhpcy5zdGF0ZW1lbnROb2RlO1xuICB9XG5cbiAgbWF0Y2hTdWJwcm9vZk5vZGUoc3VicHJvb2ZOb2RlLCBzdWJzdGl0dXRpb25zKSB7XG4gICAgbGV0IHN1YnByb29mTm9kZU1hdGNoZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IHN1YnByb29mQXNzZXJ0aW9uTm9kZSA9IHN1YnByb29mQXNzZXJ0aW9uTm9kZVF1ZXJ5KHRoaXMuc3RhdGVtZW50Tm9kZSk7XG5cbiAgICBpZiAoc3VicHJvb2ZBc3NlcnRpb25Ob2RlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBzdWJwcm9vZkFzc2VydGlvblN0YXRlbWVudE5vZGVzID0gc3RhdGVtZW50Tm9kZXNRdWVyeShzdWJwcm9vZkFzc2VydGlvbk5vZGUpLFxuICAgICAgICAgICAgdW5xdWFsaWZpZWRTdGF0ZW1lbnRTdGF0ZW1lbnROb2RlcyA9IHVucXVhbGlmaWVkU3RhdGVtZW50U3RhdGVtZW50Tm9kZXNRdWVyeShzdWJwcm9vZk5vZGUpLFxuICAgICAgICAgICAgcXVhbGlmaWVkT3JVbnF1YWxpZmllZFN0YXRlbWVudFN0YXRlbWVudE5vZGUgPSBxdWFsaWZpZWRPclVucXVhbGlmaWVkU3RhdGVtZW50U3RhdGVtZW50Tm9kZVF1ZXJ5KHN1YnByb29mTm9kZSksXG4gICAgICAgICAgICBzdGF0ZW1lbnROb2RlcyA9IFtcbiAgICAgICAgICAgICAgLi4udW5xdWFsaWZpZWRTdGF0ZW1lbnRTdGF0ZW1lbnROb2RlcyxcbiAgICAgICAgICAgICAgcXVhbGlmaWVkT3JVbnF1YWxpZmllZFN0YXRlbWVudFN0YXRlbWVudE5vZGVcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBzdGF0ZW1lbnROb2Rlc0xlbmd0aCA9IHN0YXRlbWVudE5vZGVzLmxlbmd0aCxcbiAgICAgICAgICAgIHN1YnByb29mQXNzZXJ0aW9uU3RhdGVtZW50Tm9kZXNMZW5ndGggPSBzdWJwcm9vZkFzc2VydGlvblN0YXRlbWVudE5vZGVzLmxlbmd0aDtcblxuICAgICAgaWYgKHN0YXRlbWVudE5vZGVzTGVuZ3RoID09PSBzdWJwcm9vZkFzc2VydGlvblN0YXRlbWVudE5vZGVzTGVuZ3RoKSB7XG4gICAgICAgIHN1YnByb29mTm9kZU1hdGNoZXMgPSBzdWJwcm9vZkFzc2VydGlvblN0YXRlbWVudE5vZGVzLmV2ZXJ5KChzdWJwcm9vZkFzc2VydGlvblN0YXRlbWVudE5vZGUsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBzdGF0ZW1lbnROb2RlID0gc3RhdGVtZW50Tm9kZXNbaW5kZXhdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9uVGVybWluYWxOb2RlID0gc3RhdGVtZW50Tm9kZSwgLy8vXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbnRlY2VkZW50Tm9uVGVybWluYWxOb2RlID0gc3VicHJvb2ZBc3NlcnRpb25TdGF0ZW1lbnROb2RlLCAgLy8vXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbnRlY2VkZW50Tm9uVGVybWluYWxOb2RlTWF0Y2hlcyA9IG1hdGNoQW50ZWNlZGVudE5vblRlcm1pbmFsTm9kZShhbnRlY2VkZW50Tm9uVGVybWluYWxOb2RlLCBub25UZXJtaW5hbE5vZGUsIHN1YnN0aXR1dGlvbnMpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoYW50ZWNlZGVudE5vblRlcm1pbmFsTm9kZU1hdGNoZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHN1YnByb29mTm9kZU1hdGNoZXM7XG4gIH1cblxuICBtYXRjaFN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSwgc3Vic3RpdHV0aW9ucykge1xuICAgIGNvbnN0IG5vblRlcm1pbmFsTm9kZSA9IHN0YXRlbWVudE5vZGUsICAvLy9cbiAgICAgICAgICBhbnRlY2VkZW50Tm9uVGVybWluYWxOb2RlID0gdGhpcy5zdGF0ZW1lbnROb2RlLCAgLy8vXG4gICAgICAgICAgYW50ZWNlZGVudE5vblRlcm1pbmFsTm9kZU1hdGNoZXMgPSBtYXRjaEFudGVjZWRlbnROb25UZXJtaW5hbE5vZGUoYW50ZWNlZGVudE5vblRlcm1pbmFsTm9kZSwgbm9uVGVybWluYWxOb2RlLCBzdWJzdGl0dXRpb25zKSxcbiAgICAgICAgICBzdGF0ZW1lbnROb2RlTWF0Y2hlcyA9IGFudGVjZWRlbnROb25UZXJtaW5hbE5vZGVNYXRjaGVzOyAvLy9cblxuICAgIHJldHVybiBzdGF0ZW1lbnROb2RlTWF0Y2hlcztcbiAgfVxuXG4gIHRvSlNPTigpIHtcbiAgICBjb25zdCBzdGF0ZW1lbnRTdHJpbmcgPSBub2RlQXNTdHJpbmcodGhpcy5zdGF0ZW1lbnROb2RlKSxcbiAgICAgICAgICBzdGF0ZW1lbnQgPSBzdGF0ZW1lbnRTdHJpbmcsIC8vL1xuICAgICAgICAgIGpzb24gPSB7XG4gICAgICAgICAgICBzdGF0ZW1lbnRcbiAgICAgICAgICB9O1xuXG4gICAgcmV0dXJuIGpzb247XG4gIH1cblxuICBzdGF0aWMgZnJvbUpTT04oanNvbiwgcmVsZWFzZUNvbnRleHQpIHtcbiAgICBjb25zdCB7IHN0YXRlbWVudCB9ID0ganNvbixcbiAgICAgICAgICBzdGF0ZW1lbnRTdHJpbmcgPSBzdGF0ZW1lbnQsICAvLy9cbiAgICAgICAgICBzdGF0ZW1lbnROb2RlID0gc3RhdGVtZW50Tm9kZUZyb21TdGF0ZW1lbnRTdHJpbmcoc3RhdGVtZW50U3RyaW5nLCByZWxlYXNlQ29udGV4dCksXG4gICAgICAgICAgYW50ZWNlZGVudCA9IG5ldyBBbnRlY2VkZW50KHN0YXRlbWVudE5vZGUpO1xuXG4gICAgcmV0dXJuIGFudGVjZWRlbnQ7XG4gIH1cblxuICBzdGF0aWMgZnJvbVN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSkge1xuICAgIGNvbnN0IGFudGVjZWRlbnQgPSBuZXcgQW50ZWNlZGVudChzdGF0ZW1lbnROb2RlKTtcblxuICAgIHJldHVybiBhbnRlY2VkZW50O1xuICB9XG59XG5cbmZ1bmN0aW9uIG1hdGNoQW50ZWNlZGVudE5vZGUoYW50ZWNlZGVudE5vZGUsIG5vZGUsIHN1YnN0aXR1dGlvbnMpIHtcbiAgbGV0IGFudGVjZWRlbnROb2RlTWF0Y2hlcyA9IGZhbHNlO1xuXG4gIGNvbnN0IG5vZGVUZXJtaW5hbE5vZGUgPSBub2RlLmlzVGVybWluYWxOb2RlKCksXG4gICAgICAgIHJ1bGVOb2RlVGVybWluYWxOb2RlID0gYW50ZWNlZGVudE5vZGUuaXNUZXJtaW5hbE5vZGUoKTtcblxuICBpZiAobm9kZVRlcm1pbmFsTm9kZSA9PT0gcnVsZU5vZGVUZXJtaW5hbE5vZGUpIHtcbiAgICBpZiAobm9kZVRlcm1pbmFsTm9kZSkge1xuICAgICAgY29uc3QgdGVybWluYWxOb2RlID0gbm9kZSwgIC8vL1xuICAgICAgICAgICAgYW50ZWNlZGVudFRlcm1pbmFsTm9kZSA9IGFudGVjZWRlbnROb2RlLCAgLy8vXG4gICAgICAgICAgICBhbnRlY2VkZW50VGVybWluYWxOb2RlTWF0Y2hlcyA9IG1hdGNoQW50ZWNlZGVudFRlcm1pbmFsTm9kZShhbnRlY2VkZW50VGVybWluYWxOb2RlLCB0ZXJtaW5hbE5vZGUsIHN1YnN0aXR1dGlvbnMpO1xuXG4gICAgICBhbnRlY2VkZW50Tm9kZU1hdGNoZXMgPSBhbnRlY2VkZW50VGVybWluYWxOb2RlTWF0Y2hlczsgIC8vL1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBub25UZXJtaW5hbE5vZGUgPSBub2RlLCAvLy9cbiAgICAgICAgICAgIGFudGVjZWRlbnROb25UZXJtaW5hbE5vZGUgPSBhbnRlY2VkZW50Tm9kZSwgIC8vL1xuICAgICAgICAgICAgYW50ZWNlZGVudE5vblRlcm1pbmFsTm9kZU1hdGNoZXMgPSBtYXRjaEFudGVjZWRlbnROb25UZXJtaW5hbE5vZGUoYW50ZWNlZGVudE5vblRlcm1pbmFsTm9kZSwgbm9uVGVybWluYWxOb2RlLCBzdWJzdGl0dXRpb25zKTtcblxuICAgICAgYW50ZWNlZGVudE5vZGVNYXRjaGVzID0gYW50ZWNlZGVudE5vblRlcm1pbmFsTm9kZU1hdGNoZXM7IC8vL1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBhbnRlY2VkZW50Tm9kZU1hdGNoZXM7XG59XG5cbmZ1bmN0aW9uIG1hdGNoQW50ZWNlZGVudE5vZGVzKGFudGVjZWRlbnROb2Rlcywgbm9kZXMsIHN1YnN0aXR1dGlvbnMpIHtcbiAgbGV0IGFudGVjZWRlbnROb2Rlc01hdGNoZXMgPSBmYWxzZTtcblxuICBjb25zdCBub2Rlc0xlbmd0aCA9IG5vZGVzLmxlbmd0aCxcbiAgICAgICAgYW50ZWNlZGVudE5vZGVzTGVuZ3RoID0gYW50ZWNlZGVudE5vZGVzLmxlbmd0aDtcblxuICBpZiAobm9kZXNMZW5ndGggPT09IGFudGVjZWRlbnROb2Rlc0xlbmd0aCkge1xuICAgIGFudGVjZWRlbnROb2Rlc01hdGNoZXMgPSBub2Rlcy5ldmVyeSgobm9kZSwgaW5kZXgpID0+IHtcbiAgICAgIGNvbnN0IGFudGVjZWRlbnROb2RlID0gYW50ZWNlZGVudE5vZGVzW2luZGV4XSxcbiAgICAgICAgICAgIGFudGVjZWRlbnROb2RlTWF0Y2hlcyA9IG1hdGNoQW50ZWNlZGVudE5vZGUoYW50ZWNlZGVudE5vZGUsIG5vZGUsIHN1YnN0aXR1dGlvbnMpO1xuXG4gICAgICBpZiAoYW50ZWNlZGVudE5vZGVNYXRjaGVzKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIGFudGVjZWRlbnROb2Rlc01hdGNoZXM7XG59XG5cbmZ1bmN0aW9uIG1hdGNoQW50ZWNlZGVudFZhcmlhYmxlKGFudGVjZWRlbnRWYXJpYWJsZU5vZGUsIG5vZGVzLCBzdWJzdGl0dXRpb25zKSB7XG4gIGxldCBhbnRlY2VkZW50VmFyaWFibGVNYXRjaGVzO1xuXG4gIGNvbnN0IGFudGVjZWRlbnRWYXJpYWJsZU5hbWUgPSB2YXJpYWJsZU5hbWVGcm9tVmFyaWFibGVOb2RlKGFudGVjZWRlbnRWYXJpYWJsZU5vZGUpLFxuICAgICAgICBzdWJzdGl0dXRpb24gPSBzdWJzdGl0dXRpb25zLmZpbmQoKHN1YnN0aXR1dGlvbikgPT4ge1xuICAgICAgICAgIGNvbnN0IHZhcmlhYmxlTmFtZSA9IHN1YnN0aXR1dGlvbi5nZXRWYXJpYWJsZU5hbWUoKTtcblxuICAgICAgICAgIGlmICh2YXJpYWJsZU5hbWUgPT09IGFudGVjZWRlbnRWYXJpYWJsZU5hbWUpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfSkgfHwgbnVsbDtcblxuICBpZiAoc3Vic3RpdHV0aW9uICE9PSBudWxsKSB7XG4gICAgY29uc3Qgc3Vic3RpdHV0aW9uTm9kZXNNYXRjaCA9IHN1YnN0aXR1dGlvbi5tYXRjaE5vZGVzKG5vZGVzKTtcblxuICAgIGFudGVjZWRlbnRWYXJpYWJsZU1hdGNoZXMgPSBzdWJzdGl0dXRpb25Ob2Rlc01hdGNoOyAgLy8vXG4gIH0gZWxzZSB7XG4gICAgY29uc3QgdmFyaWFibGVOYW1lID0gYW50ZWNlZGVudFZhcmlhYmxlTmFtZSwgLy8vXG4gICAgICAgICAgc3Vic3RpdHV0aW9uID0gU3Vic3RpdHV0aW9uLmZyb21WYXJpYWJsZU5hbWVBbmROb2Rlcyh2YXJpYWJsZU5hbWUsIG5vZGVzKTtcblxuICAgIHN1YnN0aXR1dGlvbnMucHVzaChzdWJzdGl0dXRpb24pO1xuXG4gICAgYW50ZWNlZGVudFZhcmlhYmxlTWF0Y2hlcyA9IHRydWU7XG4gIH1cblxuICByZXR1cm4gYW50ZWNlZGVudFZhcmlhYmxlTWF0Y2hlcztcbn1cblxuZnVuY3Rpb24gbWF0Y2hBbnRlY2VkZW50VGVybWluYWxOb2RlKGFudGVjZWRlbnRUZXJtaW5hbE5vZGUsIHRlcm1pbmFsTm9kZSwgc3Vic3RpdHV0aW9ucykge1xuICBjb25zdCBtYXRjaGVzID0gYW50ZWNlZGVudFRlcm1pbmFsTm9kZS5tYXRjaCh0ZXJtaW5hbE5vZGUpLFxuICAgICAgICBhbnRlY2VkZW50VGVybWluYWxOb2RlTWF0Y2hlcyA9IG1hdGNoZXM7XG5cbiAgcmV0dXJuIGFudGVjZWRlbnRUZXJtaW5hbE5vZGVNYXRjaGVzO1xufVxuXG5mdW5jdGlvbiBtYXRjaEFudGVjZWRlbnROb25UZXJtaW5hbE5vZGUoYW50ZWNlZGVudE5vblRlcm1pbmFsTm9kZSwgbm9uVGVybWluYWxOb2RlLCBzdWJzdGl0dXRpb25zKSB7XG4gIGxldCBhbnRlY2VkZW50Tm9uVGVybWluYWxOb2RlTWF0Y2hlcyA9IGZhbHNlO1xuXG4gIGNvbnN0IHJ1bGVOYW1lID0gbm9uVGVybWluYWxOb2RlLmdldFJ1bGVOYW1lKCksXG4gICAgICAgIGFudGVjZWRlbnRSdWxlTmFtZSA9IGFudGVjZWRlbnROb25UZXJtaW5hbE5vZGUuZ2V0UnVsZU5hbWUoKTsgLy8vXG5cbiAgaWYgKHJ1bGVOYW1lID09PSBhbnRlY2VkZW50UnVsZU5hbWUpIHtcbiAgICBjb25zdCBjaGlsZE5vZGVzID0gbm9uVGVybWluYWxOb2RlLmdldENoaWxkTm9kZXMoKSxcbiAgICAgICAgICBhbnRlY2VkZW50Q2hpbGROb2RlcyA9IGFudGVjZWRlbnROb25UZXJtaW5hbE5vZGUuZ2V0Q2hpbGROb2RlcygpLFxuICAgICAgICAgIG5vZGVzID0gY2hpbGROb2RlcywgLy8vXG4gICAgICAgICAgYW50ZWNlZGVudE5vZGVzID0gYW50ZWNlZGVudENoaWxkTm9kZXMsIC8vL1xuICAgICAgICAgIGFudGVjZWRlbnRDaGlsZE5vZGVzTWF0Y2hlcyA9IG1hdGNoQW50ZWNlZGVudE5vZGVzKGFudGVjZWRlbnROb2Rlcywgbm9kZXMsIHN1YnN0aXR1dGlvbnMpO1xuXG4gICAgYW50ZWNlZGVudE5vblRlcm1pbmFsTm9kZU1hdGNoZXMgPSBhbnRlY2VkZW50Q2hpbGROb2Rlc01hdGNoZXM7IC8vL1xuXG4gICAgaWYgKCFhbnRlY2VkZW50Tm9uVGVybWluYWxOb2RlTWF0Y2hlcykge1xuICAgICAgY29uc3QgcnVsZU5hbWVTdGF0ZW1lbnRSdWxlTmFtZSA9IChydWxlTmFtZSA9PT0gU1RBVEVNRU5UX1JVTEVfTkFNRSk7XG5cbiAgICAgIGlmIChydWxlTmFtZVN0YXRlbWVudFJ1bGVOYW1lKSB7XG4gICAgICAgIGNvbnN0IHN0YXRlbWVudE5vZGUgPSBub25UZXJtaW5hbE5vZGUsICAvLy9cbiAgICAgICAgICAgICAgYW50ZWNlZGVudFN0YXRlbWVudE5vZGUgPSBhbnRlY2VkZW50Tm9uVGVybWluYWxOb2RlLCAgLy8vXG4gICAgICAgICAgICAgIGFudGVjZWRlbnRTdGF0ZW1lbnROb2RlTWF0Y2hlcyA9IG1hdGNoQW50ZWNlZGVudFN0YXRlbWVudE5vZGUoYW50ZWNlZGVudFN0YXRlbWVudE5vZGUsIHN0YXRlbWVudE5vZGUsIHN1YnN0aXR1dGlvbnMpO1xuXG4gICAgICAgIGFudGVjZWRlbnROb25UZXJtaW5hbE5vZGVNYXRjaGVzID0gYW50ZWNlZGVudFN0YXRlbWVudE5vZGVNYXRjaGVzOyAvLy9cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gYW50ZWNlZGVudE5vblRlcm1pbmFsTm9kZU1hdGNoZXM7XG59XG5cbmZ1bmN0aW9uIG1hdGNoQW50ZWNlZGVudFN0YXRlbWVudE5vZGUoYW50ZWNlZGVudFN0YXRlbWVudE5vZGUsIHN0YXRlbWVudE5vZGUsIHN1YnN0aXR1dGlvbnMpIHtcbiAgbGV0IGFudGVjZWRlbnRTdGF0ZW1lbnROb2RlTWF0Y2hlcyA9IGZhbHNlO1xuXG4gIGNvbnN0IGFudGVjZWRlbnROb25UZXJtaW5hbE5vZGUgPSBhbnRlY2VkZW50U3RhdGVtZW50Tm9kZSwgIC8vL1xuICAgICAgICBhbnRlY2VkZW50Q2hpbGROb2RlcyA9IGFudGVjZWRlbnROb25UZXJtaW5hbE5vZGUuZ2V0Q2hpbGROb2RlcygpLFxuICAgICAgICBhbnRlY2VkZW50Q2hpbGROb2Rlc0xlbmd0aCA9IGFudGVjZWRlbnRDaGlsZE5vZGVzLmxlbmd0aDtcblxuICBpZiAoYW50ZWNlZGVudENoaWxkTm9kZXNMZW5ndGggPT09IDEpIHtcbiAgICBjb25zdCBmaXJzdEFudGVjZWRlbnRDaGlsZE5vZGUgPSBmaXJzdChhbnRlY2VkZW50Q2hpbGROb2RlcyksXG4gICAgICAgICAgYW50ZWNlZGVudENoaWxkTm9kZSA9IGZpcnN0QW50ZWNlZGVudENoaWxkTm9kZSwgIC8vL1xuICAgICAgICAgIGFudGVjZWRlbnRDaGlsZE5vZGVOb25UZXJtaW5hbE5vZGUgPSBhbnRlY2VkZW50Q2hpbGROb2RlLmlzTm9uVGVybWluYWxOb2RlKCk7XG5cbiAgICBpZiAoYW50ZWNlZGVudENoaWxkTm9kZU5vblRlcm1pbmFsTm9kZSkge1xuICAgICAgY29uc3QgYW50ZWNlZGVudE5vblRlcm1pbmFsQ2hpbGROb2RlID0gYW50ZWNlZGVudENoaWxkTm9kZSwgIC8vL1xuICAgICAgICAgICAgYW50ZWNlZGVudE5vblRlcm1pbmFsQ2hpbGROb2RlUnVsZU5hbWUgPSBhbnRlY2VkZW50Tm9uVGVybWluYWxDaGlsZE5vZGUuZ2V0UnVsZU5hbWUoKSxcbiAgICAgICAgICAgIGFudGVjZWRlbnROb25UZXJtaW5hbENoaWxkTm9kZVJ1bGVOYW1lVmFyaWFibGVSdWxlTmFtZSA9IChhbnRlY2VkZW50Tm9uVGVybWluYWxDaGlsZE5vZGVSdWxlTmFtZSA9PT0gVkFSSUFCTEVfUlVMRV9OQU1FKTtcblxuICAgICAgaWYgKGFudGVjZWRlbnROb25UZXJtaW5hbENoaWxkTm9kZVJ1bGVOYW1lVmFyaWFibGVSdWxlTmFtZSkge1xuICAgICAgICBjb25zdCBhbnRlY2VkZW50VmFyaWFibGVOb2RlID0gYW50ZWNlZGVudE5vblRlcm1pbmFsQ2hpbGROb2RlLCAgLy8vXG4gICAgICAgICAgICAgIG5vblRlcm1pbmFsTm9kZSA9IHN0YXRlbWVudE5vZGUsICAvLy9cbiAgICAgICAgICAgICAgY2hpbGROb2RlcyA9IG5vblRlcm1pbmFsTm9kZS5nZXRDaGlsZE5vZGVzKCksXG4gICAgICAgICAgICAgIG5vZGVzID0gY2hpbGROb2RlcywgLy8vXG4gICAgICAgICAgICAgIGFudGVjZWRlbnRWYXJpYWJsZU1hdGNoZXMgPSBtYXRjaEFudGVjZWRlbnRWYXJpYWJsZShhbnRlY2VkZW50VmFyaWFibGVOb2RlLCBub2Rlcywgc3Vic3RpdHV0aW9ucyk7XG5cbiAgICAgICAgYW50ZWNlZGVudFN0YXRlbWVudE5vZGVNYXRjaGVzID0gYW50ZWNlZGVudFZhcmlhYmxlTWF0Y2hlczsgLy8vXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGFudGVjZWRlbnRTdGF0ZW1lbnROb2RlTWF0Y2hlcztcbn1cbiJdLCJuYW1lcyI6WyJBbnRlY2VkZW50Iiwic3RhdGVtZW50Tm9kZXNRdWVyeSIsIm5vZGVzUXVlcnkiLCJzdWJwcm9vZkFzc2VydGlvbk5vZGVRdWVyeSIsIm5vZGVRdWVyeSIsInVucXVhbGlmaWVkU3RhdGVtZW50U3RhdGVtZW50Tm9kZXNRdWVyeSIsInF1YWxpZmllZE9yVW5xdWFsaWZpZWRTdGF0ZW1lbnRTdGF0ZW1lbnROb2RlUXVlcnkiLCJzdGF0ZW1lbnROb2RlIiwiZ2V0U3RhdGVtZW50Tm9kZSIsIm1hdGNoU3VicHJvb2ZOb2RlIiwic3VicHJvb2ZOb2RlIiwic3Vic3RpdHV0aW9ucyIsInN1YnByb29mTm9kZU1hdGNoZXMiLCJzdWJwcm9vZkFzc2VydGlvbk5vZGUiLCJzdWJwcm9vZkFzc2VydGlvblN0YXRlbWVudE5vZGVzIiwidW5xdWFsaWZpZWRTdGF0ZW1lbnRTdGF0ZW1lbnROb2RlcyIsInF1YWxpZmllZE9yVW5xdWFsaWZpZWRTdGF0ZW1lbnRTdGF0ZW1lbnROb2RlIiwic3RhdGVtZW50Tm9kZXMiLCJzdGF0ZW1lbnROb2Rlc0xlbmd0aCIsImxlbmd0aCIsInN1YnByb29mQXNzZXJ0aW9uU3RhdGVtZW50Tm9kZXNMZW5ndGgiLCJldmVyeSIsInN1YnByb29mQXNzZXJ0aW9uU3RhdGVtZW50Tm9kZSIsImluZGV4Iiwibm9uVGVybWluYWxOb2RlIiwiYW50ZWNlZGVudE5vblRlcm1pbmFsTm9kZSIsImFudGVjZWRlbnROb25UZXJtaW5hbE5vZGVNYXRjaGVzIiwibWF0Y2hBbnRlY2VkZW50Tm9uVGVybWluYWxOb2RlIiwibWF0Y2hTdGF0ZW1lbnROb2RlIiwic3RhdGVtZW50Tm9kZU1hdGNoZXMiLCJ0b0pTT04iLCJzdGF0ZW1lbnRTdHJpbmciLCJub2RlQXNTdHJpbmciLCJzdGF0ZW1lbnQiLCJqc29uIiwiZnJvbUpTT04iLCJyZWxlYXNlQ29udGV4dCIsInN0YXRlbWVudE5vZGVGcm9tU3RhdGVtZW50U3RyaW5nIiwiYW50ZWNlZGVudCIsImZyb21TdGF0ZW1lbnROb2RlIiwibWF0Y2hBbnRlY2VkZW50Tm9kZSIsImFudGVjZWRlbnROb2RlIiwibm9kZSIsImFudGVjZWRlbnROb2RlTWF0Y2hlcyIsIm5vZGVUZXJtaW5hbE5vZGUiLCJpc1Rlcm1pbmFsTm9kZSIsInJ1bGVOb2RlVGVybWluYWxOb2RlIiwidGVybWluYWxOb2RlIiwiYW50ZWNlZGVudFRlcm1pbmFsTm9kZSIsImFudGVjZWRlbnRUZXJtaW5hbE5vZGVNYXRjaGVzIiwibWF0Y2hBbnRlY2VkZW50VGVybWluYWxOb2RlIiwibWF0Y2hBbnRlY2VkZW50Tm9kZXMiLCJhbnRlY2VkZW50Tm9kZXMiLCJub2RlcyIsImFudGVjZWRlbnROb2Rlc01hdGNoZXMiLCJub2Rlc0xlbmd0aCIsImFudGVjZWRlbnROb2Rlc0xlbmd0aCIsIm1hdGNoQW50ZWNlZGVudFZhcmlhYmxlIiwiYW50ZWNlZGVudFZhcmlhYmxlTm9kZSIsImFudGVjZWRlbnRWYXJpYWJsZU1hdGNoZXMiLCJhbnRlY2VkZW50VmFyaWFibGVOYW1lIiwidmFyaWFibGVOYW1lRnJvbVZhcmlhYmxlTm9kZSIsInN1YnN0aXR1dGlvbiIsImZpbmQiLCJ2YXJpYWJsZU5hbWUiLCJnZXRWYXJpYWJsZU5hbWUiLCJzdWJzdGl0dXRpb25Ob2Rlc01hdGNoIiwibWF0Y2hOb2RlcyIsIlN1YnN0aXR1dGlvbiIsImZyb21WYXJpYWJsZU5hbWVBbmROb2RlcyIsInB1c2giLCJtYXRjaGVzIiwibWF0Y2giLCJydWxlTmFtZSIsImdldFJ1bGVOYW1lIiwiYW50ZWNlZGVudFJ1bGVOYW1lIiwiY2hpbGROb2RlcyIsImdldENoaWxkTm9kZXMiLCJhbnRlY2VkZW50Q2hpbGROb2RlcyIsImFudGVjZWRlbnRDaGlsZE5vZGVzTWF0Y2hlcyIsInJ1bGVOYW1lU3RhdGVtZW50UnVsZU5hbWUiLCJTVEFURU1FTlRfUlVMRV9OQU1FIiwiYW50ZWNlZGVudFN0YXRlbWVudE5vZGUiLCJhbnRlY2VkZW50U3RhdGVtZW50Tm9kZU1hdGNoZXMiLCJtYXRjaEFudGVjZWRlbnRTdGF0ZW1lbnROb2RlIiwiYW50ZWNlZGVudENoaWxkTm9kZXNMZW5ndGgiLCJmaXJzdEFudGVjZWRlbnRDaGlsZE5vZGUiLCJmaXJzdCIsImFudGVjZWRlbnRDaGlsZE5vZGUiLCJhbnRlY2VkZW50Q2hpbGROb2RlTm9uVGVybWluYWxOb2RlIiwiaXNOb25UZXJtaW5hbE5vZGUiLCJhbnRlY2VkZW50Tm9uVGVybWluYWxDaGlsZE5vZGUiLCJhbnRlY2VkZW50Tm9uVGVybWluYWxDaGlsZE5vZGVSdWxlTmFtZSIsImFudGVjZWRlbnROb25UZXJtaW5hbENoaWxkTm9kZVJ1bGVOYW1lVmFyaWFibGVSdWxlTmFtZSIsIlZBUklBQkxFX1JVTEVfTkFNRSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFnQnFCQTs7O2lFQWRJO3FCQUVIO3NCQUNPO3FCQUNTO3lCQUdrQjs7Ozs7Ozs7Ozs7Ozs7Ozs7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