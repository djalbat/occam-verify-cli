"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return Supposition;
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
var statementNodesQuery = (0, _query.nodesQuery)("/subproofAssertion/statement"), subproofAssertionNodeQuery = (0, _query.nodeQuery)("/statement/subproofAssertion!"), unqualifiedStatementStatementNodesQuery = (0, _query.nodesQuery)("/subproof/unqualifiedStatement/statement!"), qualifiedOrUnqualifiedStatementStatementNodeQuery = (0, _query.nodeQuery)("/subproof/subDerivation/qualifiedStatement|unqualifiedStatement[-1]/statement!");
var Supposition = /*#__PURE__*/ function() {
    function Supposition(statementNode) {
        _classCallCheck(this, Supposition);
        this.statementNode = statementNode;
    }
    _createClass(Supposition, [
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
                            var statementNode = statementNodes[index], nonTerminalNode = statementNode, suppositionNonTerminalNode = subproofAssertionStatementNode, suppositionNonTerminalNodeMatches = matchSuppositionNonTerminalNode(suppositionNonTerminalNode, nonTerminalNode, substitutions);
                            if (suppositionNonTerminalNodeMatches) {
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
                var nonTerminalNode = statementNode, suppositionNonTerminalNode = this.statementNode, suppositionNonTerminalNodeMatches = matchSuppositionNonTerminalNode(suppositionNonTerminalNode, nonTerminalNode, substitutions), statementNodeMatches = suppositionNonTerminalNodeMatches; ///
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
                var statement = json.statement, statementString = statement, statementNode = (0, _string.statementNodeFromStatementString)(statementString, releaseContext), supposition = new Supposition(statementNode);
                return supposition;
            }
        },
        {
            key: "fromStatementNode",
            value: function fromStatementNode(statementNode) {
                var supposition = new Supposition(statementNode);
                return supposition;
            }
        }
    ]);
    return Supposition;
}();
function matchSuppositionNode(suppositionNode, node, substitutions) {
    var suppositionNodeMatches = false;
    var nodeTerminalNode = node.isTerminalNode(), ruleNodeTerminalNode = suppositionNode.isTerminalNode();
    if (nodeTerminalNode === ruleNodeTerminalNode) {
        if (nodeTerminalNode) {
            var terminalNode = node, suppositionTerminalNode = suppositionNode, suppositionTerminalNodeMatches = matchSuppositionTerminalNode(suppositionTerminalNode, terminalNode, substitutions);
            suppositionNodeMatches = suppositionTerminalNodeMatches; ///
        } else {
            var nonTerminalNode = node, suppositionNonTerminalNode = suppositionNode, suppositionNonTerminalNodeMatches = matchSuppositionNonTerminalNode(suppositionNonTerminalNode, nonTerminalNode, substitutions);
            suppositionNodeMatches = suppositionNonTerminalNodeMatches; ///
        }
    }
    return suppositionNodeMatches;
}
function matchSuppositionNodes(suppositionNodes, nodes, substitutions) {
    var suppositionNodesMatches = false;
    var nodesLength = nodes.length, suppositionNodesLength = suppositionNodes.length;
    if (nodesLength === suppositionNodesLength) {
        suppositionNodesMatches = nodes.every(function(node, index) {
            var suppositionNode = suppositionNodes[index], suppositionNodeMatches = matchSuppositionNode(suppositionNode, node, substitutions);
            if (suppositionNodeMatches) {
                return true;
            }
        });
    }
    return suppositionNodesMatches;
}
function matchSuppositionVariable(suppositionVariableNode, nodes, substitutions) {
    var suppositionVariableMatches;
    var suppositionVariableName = (0, _query.variableNameFromVariableNode)(suppositionVariableNode), substitution = substitutions.find(function(substitution) {
        var variableName = substitution.getVariableName();
        if (variableName === suppositionVariableName) {
            return true;
        }
    }) || null;
    if (substitution !== null) {
        var substitutionNodesMatch = substitution.matchNodes(nodes);
        suppositionVariableMatches = substitutionNodesMatch; ///
    } else {
        var variableName = suppositionVariableName, substitution1 = _substitution.default.fromVariableNameAndNodes(variableName, nodes);
        substitutions.push(substitution1);
        suppositionVariableMatches = true;
    }
    return suppositionVariableMatches;
}
function matchSuppositionTerminalNode(suppositionTerminalNode, terminalNode, substitutions) {
    var matches = suppositionTerminalNode.match(terminalNode), suppositionTerminalNodeMatches = matches;
    return suppositionTerminalNodeMatches;
}
function matchSuppositionNonTerminalNode(suppositionNonTerminalNode, nonTerminalNode, substitutions) {
    var suppositionNonTerminalNodeMatches = false;
    var ruleName = nonTerminalNode.getRuleName(), suppositionRuleName = suppositionNonTerminalNode.getRuleName(); ///
    if (ruleName === suppositionRuleName) {
        var childNodes = nonTerminalNode.getChildNodes(), suppositionChildNodes = suppositionNonTerminalNode.getChildNodes(), nodes = childNodes, suppositionNodes = suppositionChildNodes, suppositionChildNodesMatches = matchSuppositionNodes(suppositionNodes, nodes, substitutions);
        suppositionNonTerminalNodeMatches = suppositionChildNodesMatches; ///
        if (!suppositionNonTerminalNodeMatches) {
            var ruleNameStatementRuleName = ruleName === _ruleNames.STATEMENT_RULE_NAME;
            if (ruleNameStatementRuleName) {
                var statementNode = nonTerminalNode, suppositionStatementNode = suppositionNonTerminalNode, suppositionStatementNodeMatches = matchSuppositionStatementNode(suppositionStatementNode, statementNode, substitutions);
                suppositionNonTerminalNodeMatches = suppositionStatementNodeMatches; ///
            }
        }
    }
    return suppositionNonTerminalNodeMatches;
}
function matchSuppositionStatementNode(suppositionStatementNode, statementNode, substitutions) {
    var suppositionStatementNodeMatches = false;
    var suppositionNonTerminalNode = suppositionStatementNode, suppositionChildNodes = suppositionNonTerminalNode.getChildNodes(), suppositionChildNodesLength = suppositionChildNodes.length;
    if (suppositionChildNodesLength === 1) {
        var firstSuppositionChildNode = (0, _array.first)(suppositionChildNodes), suppositionChildNode = firstSuppositionChildNode, suppositionChildNodeNonTerminalNode = suppositionChildNode.isNonTerminalNode();
        if (suppositionChildNodeNonTerminalNode) {
            var suppositionNonTerminalChildNode = suppositionChildNode, suppositionNonTerminalChildNodeRuleName = suppositionNonTerminalChildNode.getRuleName(), suppositionNonTerminalChildNodeRuleNameVariableRuleName = suppositionNonTerminalChildNodeRuleName === _ruleNames.VARIABLE_RULE_NAME;
            if (suppositionNonTerminalChildNodeRuleNameVariableRuleName) {
                var suppositionVariableNode = suppositionNonTerminalChildNode, nonTerminalNode = statementNode, childNodes = nonTerminalNode.getChildNodes(), nodes = childNodes, suppositionVariableMatches = matchSuppositionVariable(suppositionVariableNode, nodes, substitutions);
                suppositionStatementNodeMatches = suppositionVariableMatches; ///
            }
        }
    }
    return suppositionStatementNodeMatches;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9zdXBwb3NpdGlvbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFN1YnN0aXR1dGlvbiBmcm9tIFwiLi9zdWJzdGl0dXRpb25cIjtcblxuaW1wb3J0IHsgZmlyc3QgfSBmcm9tIFwiLi91dGlsaXRpZXMvYXJyYXlcIjtcbmltcG9ydCB7IG5vZGVBc1N0cmluZyB9IGZyb20gXCIuL3V0aWxpdGllcy9zdHJpbmdcIjtcbmltcG9ydCB7IG5vZGVRdWVyeSwgbm9kZXNRdWVyeSB9IGZyb20gXCIuL3V0aWxpdGllcy9xdWVyeVwiO1xuaW1wb3J0IHsgdmFyaWFibGVOYW1lRnJvbVZhcmlhYmxlTm9kZSB9IGZyb20gXCIuL3V0aWxpdGllcy9xdWVyeVwiO1xuaW1wb3J0IHsgc3RhdGVtZW50Tm9kZUZyb21TdGF0ZW1lbnRTdHJpbmcgfSBmcm9tIFwiLi91dGlsaXRpZXMvc3RyaW5nXCI7XG5pbXBvcnQgeyBWQVJJQUJMRV9SVUxFX05BTUUsIFNUQVRFTUVOVF9SVUxFX05BTUUgfSBmcm9tIFwiLi9ydWxlTmFtZXNcIjtcblxuY29uc3Qgc3RhdGVtZW50Tm9kZXNRdWVyeSA9IG5vZGVzUXVlcnkoXCIvc3VicHJvb2ZBc3NlcnRpb24vc3RhdGVtZW50XCIpLFxuICAgICAgc3VicHJvb2ZBc3NlcnRpb25Ob2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvc3RhdGVtZW50L3N1YnByb29mQXNzZXJ0aW9uIVwiKSxcbiAgICAgIHVucXVhbGlmaWVkU3RhdGVtZW50U3RhdGVtZW50Tm9kZXNRdWVyeSA9IG5vZGVzUXVlcnkoXCIvc3VicHJvb2YvdW5xdWFsaWZpZWRTdGF0ZW1lbnQvc3RhdGVtZW50IVwiKSxcbiAgICAgIHF1YWxpZmllZE9yVW5xdWFsaWZpZWRTdGF0ZW1lbnRTdGF0ZW1lbnROb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvc3VicHJvb2Yvc3ViRGVyaXZhdGlvbi9xdWFsaWZpZWRTdGF0ZW1lbnR8dW5xdWFsaWZpZWRTdGF0ZW1lbnRbLTFdL3N0YXRlbWVudCFcIik7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFN1cHBvc2l0aW9uIHtcbiAgY29uc3RydWN0b3Ioc3RhdGVtZW50Tm9kZSkge1xuICAgIHRoaXMuc3RhdGVtZW50Tm9kZSA9IHN0YXRlbWVudE5vZGU7XG4gIH1cblxuICBnZXRTdGF0ZW1lbnROb2RlKCkge1xuICAgIHJldHVybiB0aGlzLnN0YXRlbWVudE5vZGU7XG4gIH1cblxuICBtYXRjaFN1YnByb29mTm9kZShzdWJwcm9vZk5vZGUsIHN1YnN0aXR1dGlvbnMpIHtcbiAgICBsZXQgc3VicHJvb2ZOb2RlTWF0Y2hlcyA9IGZhbHNlO1xuXG4gICAgY29uc3Qgc3VicHJvb2ZBc3NlcnRpb25Ob2RlID0gc3VicHJvb2ZBc3NlcnRpb25Ob2RlUXVlcnkodGhpcy5zdGF0ZW1lbnROb2RlKTtcblxuICAgIGlmIChzdWJwcm9vZkFzc2VydGlvbk5vZGUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHN1YnByb29mQXNzZXJ0aW9uU3RhdGVtZW50Tm9kZXMgPSBzdGF0ZW1lbnROb2Rlc1F1ZXJ5KHN1YnByb29mQXNzZXJ0aW9uTm9kZSksXG4gICAgICAgICAgICB1bnF1YWxpZmllZFN0YXRlbWVudFN0YXRlbWVudE5vZGVzID0gdW5xdWFsaWZpZWRTdGF0ZW1lbnRTdGF0ZW1lbnROb2Rlc1F1ZXJ5KHN1YnByb29mTm9kZSksXG4gICAgICAgICAgICBxdWFsaWZpZWRPclVucXVhbGlmaWVkU3RhdGVtZW50U3RhdGVtZW50Tm9kZSA9IHF1YWxpZmllZE9yVW5xdWFsaWZpZWRTdGF0ZW1lbnRTdGF0ZW1lbnROb2RlUXVlcnkoc3VicHJvb2ZOb2RlKSxcbiAgICAgICAgICAgIHN0YXRlbWVudE5vZGVzID0gW1xuICAgICAgICAgICAgICAuLi51bnF1YWxpZmllZFN0YXRlbWVudFN0YXRlbWVudE5vZGVzLFxuICAgICAgICAgICAgICBxdWFsaWZpZWRPclVucXVhbGlmaWVkU3RhdGVtZW50U3RhdGVtZW50Tm9kZVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIHN0YXRlbWVudE5vZGVzTGVuZ3RoID0gc3RhdGVtZW50Tm9kZXMubGVuZ3RoLFxuICAgICAgICAgICAgc3VicHJvb2ZBc3NlcnRpb25TdGF0ZW1lbnROb2Rlc0xlbmd0aCA9IHN1YnByb29mQXNzZXJ0aW9uU3RhdGVtZW50Tm9kZXMubGVuZ3RoO1xuXG4gICAgICBpZiAoc3RhdGVtZW50Tm9kZXNMZW5ndGggPT09IHN1YnByb29mQXNzZXJ0aW9uU3RhdGVtZW50Tm9kZXNMZW5ndGgpIHtcbiAgICAgICAgc3VicHJvb2ZOb2RlTWF0Y2hlcyA9IHN1YnByb29mQXNzZXJ0aW9uU3RhdGVtZW50Tm9kZXMuZXZlcnkoKHN1YnByb29mQXNzZXJ0aW9uU3RhdGVtZW50Tm9kZSwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHN0YXRlbWVudE5vZGUgPSBzdGF0ZW1lbnROb2Rlc1tpbmRleF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub25UZXJtaW5hbE5vZGUgPSBzdGF0ZW1lbnROb2RlLCAvLy9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN1cHBvc2l0aW9uTm9uVGVybWluYWxOb2RlID0gc3VicHJvb2ZBc3NlcnRpb25TdGF0ZW1lbnROb2RlLCAgLy8vXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdXBwb3NpdGlvbk5vblRlcm1pbmFsTm9kZU1hdGNoZXMgPSBtYXRjaFN1cHBvc2l0aW9uTm9uVGVybWluYWxOb2RlKHN1cHBvc2l0aW9uTm9uVGVybWluYWxOb2RlLCBub25UZXJtaW5hbE5vZGUsIHN1YnN0aXR1dGlvbnMpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoc3VwcG9zaXRpb25Ob25UZXJtaW5hbE5vZGVNYXRjaGVzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBzdWJwcm9vZk5vZGVNYXRjaGVzO1xuICB9XG5cbiAgbWF0Y2hTdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUsIHN1YnN0aXR1dGlvbnMpIHtcbiAgICBjb25zdCBub25UZXJtaW5hbE5vZGUgPSBzdGF0ZW1lbnROb2RlLCAgLy8vXG4gICAgICAgICAgc3VwcG9zaXRpb25Ob25UZXJtaW5hbE5vZGUgPSB0aGlzLnN0YXRlbWVudE5vZGUsICAvLy9cbiAgICAgICAgICBzdXBwb3NpdGlvbk5vblRlcm1pbmFsTm9kZU1hdGNoZXMgPSBtYXRjaFN1cHBvc2l0aW9uTm9uVGVybWluYWxOb2RlKHN1cHBvc2l0aW9uTm9uVGVybWluYWxOb2RlLCBub25UZXJtaW5hbE5vZGUsIHN1YnN0aXR1dGlvbnMpLFxuICAgICAgICAgIHN0YXRlbWVudE5vZGVNYXRjaGVzID0gc3VwcG9zaXRpb25Ob25UZXJtaW5hbE5vZGVNYXRjaGVzOyAvLy9cblxuICAgIHJldHVybiBzdGF0ZW1lbnROb2RlTWF0Y2hlcztcbiAgfVxuXG4gIHRvSlNPTigpIHtcbiAgICBjb25zdCBzdGF0ZW1lbnRTdHJpbmcgPSBub2RlQXNTdHJpbmcodGhpcy5zdGF0ZW1lbnROb2RlKSxcbiAgICAgICAgICBzdGF0ZW1lbnQgPSBzdGF0ZW1lbnRTdHJpbmcsIC8vL1xuICAgICAgICAgIGpzb24gPSB7XG4gICAgICAgICAgICBzdGF0ZW1lbnRcbiAgICAgICAgICB9O1xuXG4gICAgcmV0dXJuIGpzb247XG4gIH1cblxuICBzdGF0aWMgZnJvbUpTT04oanNvbiwgcmVsZWFzZUNvbnRleHQpIHtcbiAgICBjb25zdCB7IHN0YXRlbWVudCB9ID0ganNvbixcbiAgICAgICAgICBzdGF0ZW1lbnRTdHJpbmcgPSBzdGF0ZW1lbnQsICAvLy9cbiAgICAgICAgICBzdGF0ZW1lbnROb2RlID0gc3RhdGVtZW50Tm9kZUZyb21TdGF0ZW1lbnRTdHJpbmcoc3RhdGVtZW50U3RyaW5nLCByZWxlYXNlQ29udGV4dCksXG4gICAgICAgICAgc3VwcG9zaXRpb24gPSBuZXcgU3VwcG9zaXRpb24oc3RhdGVtZW50Tm9kZSk7XG5cbiAgICByZXR1cm4gc3VwcG9zaXRpb247XG4gIH1cblxuICBzdGF0aWMgZnJvbVN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSkge1xuICAgIGNvbnN0IHN1cHBvc2l0aW9uID0gbmV3IFN1cHBvc2l0aW9uKHN0YXRlbWVudE5vZGUpO1xuXG4gICAgcmV0dXJuIHN1cHBvc2l0aW9uO1xuICB9XG59XG5cbmZ1bmN0aW9uIG1hdGNoU3VwcG9zaXRpb25Ob2RlKHN1cHBvc2l0aW9uTm9kZSwgbm9kZSwgc3Vic3RpdHV0aW9ucykge1xuICBsZXQgc3VwcG9zaXRpb25Ob2RlTWF0Y2hlcyA9IGZhbHNlO1xuXG4gIGNvbnN0IG5vZGVUZXJtaW5hbE5vZGUgPSBub2RlLmlzVGVybWluYWxOb2RlKCksXG4gICAgICAgIHJ1bGVOb2RlVGVybWluYWxOb2RlID0gc3VwcG9zaXRpb25Ob2RlLmlzVGVybWluYWxOb2RlKCk7XG5cbiAgaWYgKG5vZGVUZXJtaW5hbE5vZGUgPT09IHJ1bGVOb2RlVGVybWluYWxOb2RlKSB7XG4gICAgaWYgKG5vZGVUZXJtaW5hbE5vZGUpIHtcbiAgICAgIGNvbnN0IHRlcm1pbmFsTm9kZSA9IG5vZGUsICAvLy9cbiAgICAgICAgICAgIHN1cHBvc2l0aW9uVGVybWluYWxOb2RlID0gc3VwcG9zaXRpb25Ob2RlLCAgLy8vXG4gICAgICAgICAgICBzdXBwb3NpdGlvblRlcm1pbmFsTm9kZU1hdGNoZXMgPSBtYXRjaFN1cHBvc2l0aW9uVGVybWluYWxOb2RlKHN1cHBvc2l0aW9uVGVybWluYWxOb2RlLCB0ZXJtaW5hbE5vZGUsIHN1YnN0aXR1dGlvbnMpO1xuXG4gICAgICBzdXBwb3NpdGlvbk5vZGVNYXRjaGVzID0gc3VwcG9zaXRpb25UZXJtaW5hbE5vZGVNYXRjaGVzOyAgLy8vXG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IG5vblRlcm1pbmFsTm9kZSA9IG5vZGUsIC8vL1xuICAgICAgICAgICAgc3VwcG9zaXRpb25Ob25UZXJtaW5hbE5vZGUgPSBzdXBwb3NpdGlvbk5vZGUsICAvLy9cbiAgICAgICAgICAgIHN1cHBvc2l0aW9uTm9uVGVybWluYWxOb2RlTWF0Y2hlcyA9IG1hdGNoU3VwcG9zaXRpb25Ob25UZXJtaW5hbE5vZGUoc3VwcG9zaXRpb25Ob25UZXJtaW5hbE5vZGUsIG5vblRlcm1pbmFsTm9kZSwgc3Vic3RpdHV0aW9ucyk7XG5cbiAgICAgIHN1cHBvc2l0aW9uTm9kZU1hdGNoZXMgPSBzdXBwb3NpdGlvbk5vblRlcm1pbmFsTm9kZU1hdGNoZXM7IC8vL1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBzdXBwb3NpdGlvbk5vZGVNYXRjaGVzO1xufVxuXG5mdW5jdGlvbiBtYXRjaFN1cHBvc2l0aW9uTm9kZXMoc3VwcG9zaXRpb25Ob2Rlcywgbm9kZXMsIHN1YnN0aXR1dGlvbnMpIHtcbiAgbGV0IHN1cHBvc2l0aW9uTm9kZXNNYXRjaGVzID0gZmFsc2U7XG5cbiAgY29uc3Qgbm9kZXNMZW5ndGggPSBub2Rlcy5sZW5ndGgsXG4gICAgICAgIHN1cHBvc2l0aW9uTm9kZXNMZW5ndGggPSBzdXBwb3NpdGlvbk5vZGVzLmxlbmd0aDtcblxuICBpZiAobm9kZXNMZW5ndGggPT09IHN1cHBvc2l0aW9uTm9kZXNMZW5ndGgpIHtcbiAgICBzdXBwb3NpdGlvbk5vZGVzTWF0Y2hlcyA9IG5vZGVzLmV2ZXJ5KChub2RlLCBpbmRleCkgPT4ge1xuICAgICAgY29uc3Qgc3VwcG9zaXRpb25Ob2RlID0gc3VwcG9zaXRpb25Ob2Rlc1tpbmRleF0sXG4gICAgICAgICAgICBzdXBwb3NpdGlvbk5vZGVNYXRjaGVzID0gbWF0Y2hTdXBwb3NpdGlvbk5vZGUoc3VwcG9zaXRpb25Ob2RlLCBub2RlLCBzdWJzdGl0dXRpb25zKTtcblxuICAgICAgaWYgKHN1cHBvc2l0aW9uTm9kZU1hdGNoZXMpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICByZXR1cm4gc3VwcG9zaXRpb25Ob2Rlc01hdGNoZXM7XG59XG5cbmZ1bmN0aW9uIG1hdGNoU3VwcG9zaXRpb25WYXJpYWJsZShzdXBwb3NpdGlvblZhcmlhYmxlTm9kZSwgbm9kZXMsIHN1YnN0aXR1dGlvbnMpIHtcbiAgbGV0IHN1cHBvc2l0aW9uVmFyaWFibGVNYXRjaGVzO1xuXG4gIGNvbnN0IHN1cHBvc2l0aW9uVmFyaWFibGVOYW1lID0gdmFyaWFibGVOYW1lRnJvbVZhcmlhYmxlTm9kZShzdXBwb3NpdGlvblZhcmlhYmxlTm9kZSksXG4gICAgICAgIHN1YnN0aXR1dGlvbiA9IHN1YnN0aXR1dGlvbnMuZmluZCgoc3Vic3RpdHV0aW9uKSA9PiB7XG4gICAgICAgICAgY29uc3QgdmFyaWFibGVOYW1lID0gc3Vic3RpdHV0aW9uLmdldFZhcmlhYmxlTmFtZSgpO1xuXG4gICAgICAgICAgaWYgKHZhcmlhYmxlTmFtZSA9PT0gc3VwcG9zaXRpb25WYXJpYWJsZU5hbWUpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfSkgfHwgbnVsbDtcblxuICBpZiAoc3Vic3RpdHV0aW9uICE9PSBudWxsKSB7XG4gICAgY29uc3Qgc3Vic3RpdHV0aW9uTm9kZXNNYXRjaCA9IHN1YnN0aXR1dGlvbi5tYXRjaE5vZGVzKG5vZGVzKTtcblxuICAgIHN1cHBvc2l0aW9uVmFyaWFibGVNYXRjaGVzID0gc3Vic3RpdHV0aW9uTm9kZXNNYXRjaDsgIC8vL1xuICB9IGVsc2Uge1xuICAgIGNvbnN0IHZhcmlhYmxlTmFtZSA9IHN1cHBvc2l0aW9uVmFyaWFibGVOYW1lLCAvLy9cbiAgICAgICAgICBzdWJzdGl0dXRpb24gPSBTdWJzdGl0dXRpb24uZnJvbVZhcmlhYmxlTmFtZUFuZE5vZGVzKHZhcmlhYmxlTmFtZSwgbm9kZXMpO1xuXG4gICAgc3Vic3RpdHV0aW9ucy5wdXNoKHN1YnN0aXR1dGlvbik7XG5cbiAgICBzdXBwb3NpdGlvblZhcmlhYmxlTWF0Y2hlcyA9IHRydWU7XG4gIH1cblxuICByZXR1cm4gc3VwcG9zaXRpb25WYXJpYWJsZU1hdGNoZXM7XG59XG5cbmZ1bmN0aW9uIG1hdGNoU3VwcG9zaXRpb25UZXJtaW5hbE5vZGUoc3VwcG9zaXRpb25UZXJtaW5hbE5vZGUsIHRlcm1pbmFsTm9kZSwgc3Vic3RpdHV0aW9ucykge1xuICBjb25zdCBtYXRjaGVzID0gc3VwcG9zaXRpb25UZXJtaW5hbE5vZGUubWF0Y2godGVybWluYWxOb2RlKSxcbiAgICAgICAgc3VwcG9zaXRpb25UZXJtaW5hbE5vZGVNYXRjaGVzID0gbWF0Y2hlcztcblxuICByZXR1cm4gc3VwcG9zaXRpb25UZXJtaW5hbE5vZGVNYXRjaGVzO1xufVxuXG5mdW5jdGlvbiBtYXRjaFN1cHBvc2l0aW9uTm9uVGVybWluYWxOb2RlKHN1cHBvc2l0aW9uTm9uVGVybWluYWxOb2RlLCBub25UZXJtaW5hbE5vZGUsIHN1YnN0aXR1dGlvbnMpIHtcbiAgbGV0IHN1cHBvc2l0aW9uTm9uVGVybWluYWxOb2RlTWF0Y2hlcyA9IGZhbHNlO1xuXG4gIGNvbnN0IHJ1bGVOYW1lID0gbm9uVGVybWluYWxOb2RlLmdldFJ1bGVOYW1lKCksXG4gICAgICAgIHN1cHBvc2l0aW9uUnVsZU5hbWUgPSBzdXBwb3NpdGlvbk5vblRlcm1pbmFsTm9kZS5nZXRSdWxlTmFtZSgpOyAvLy9cblxuICBpZiAocnVsZU5hbWUgPT09IHN1cHBvc2l0aW9uUnVsZU5hbWUpIHtcbiAgICBjb25zdCBjaGlsZE5vZGVzID0gbm9uVGVybWluYWxOb2RlLmdldENoaWxkTm9kZXMoKSxcbiAgICAgICAgICBzdXBwb3NpdGlvbkNoaWxkTm9kZXMgPSBzdXBwb3NpdGlvbk5vblRlcm1pbmFsTm9kZS5nZXRDaGlsZE5vZGVzKCksXG4gICAgICAgICAgbm9kZXMgPSBjaGlsZE5vZGVzLCAvLy9cbiAgICAgICAgICBzdXBwb3NpdGlvbk5vZGVzID0gc3VwcG9zaXRpb25DaGlsZE5vZGVzLCAvLy9cbiAgICAgICAgICBzdXBwb3NpdGlvbkNoaWxkTm9kZXNNYXRjaGVzID0gbWF0Y2hTdXBwb3NpdGlvbk5vZGVzKHN1cHBvc2l0aW9uTm9kZXMsIG5vZGVzLCBzdWJzdGl0dXRpb25zKTtcblxuICAgIHN1cHBvc2l0aW9uTm9uVGVybWluYWxOb2RlTWF0Y2hlcyA9IHN1cHBvc2l0aW9uQ2hpbGROb2Rlc01hdGNoZXM7IC8vL1xuXG4gICAgaWYgKCFzdXBwb3NpdGlvbk5vblRlcm1pbmFsTm9kZU1hdGNoZXMpIHtcbiAgICAgIGNvbnN0IHJ1bGVOYW1lU3RhdGVtZW50UnVsZU5hbWUgPSAocnVsZU5hbWUgPT09IFNUQVRFTUVOVF9SVUxFX05BTUUpO1xuXG4gICAgICBpZiAocnVsZU5hbWVTdGF0ZW1lbnRSdWxlTmFtZSkge1xuICAgICAgICBjb25zdCBzdGF0ZW1lbnROb2RlID0gbm9uVGVybWluYWxOb2RlLCAgLy8vXG4gICAgICAgICAgICAgIHN1cHBvc2l0aW9uU3RhdGVtZW50Tm9kZSA9IHN1cHBvc2l0aW9uTm9uVGVybWluYWxOb2RlLCAgLy8vXG4gICAgICAgICAgICAgIHN1cHBvc2l0aW9uU3RhdGVtZW50Tm9kZU1hdGNoZXMgPSBtYXRjaFN1cHBvc2l0aW9uU3RhdGVtZW50Tm9kZShzdXBwb3NpdGlvblN0YXRlbWVudE5vZGUsIHN0YXRlbWVudE5vZGUsIHN1YnN0aXR1dGlvbnMpO1xuXG4gICAgICAgIHN1cHBvc2l0aW9uTm9uVGVybWluYWxOb2RlTWF0Y2hlcyA9IHN1cHBvc2l0aW9uU3RhdGVtZW50Tm9kZU1hdGNoZXM7IC8vL1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBzdXBwb3NpdGlvbk5vblRlcm1pbmFsTm9kZU1hdGNoZXM7XG59XG5cbmZ1bmN0aW9uIG1hdGNoU3VwcG9zaXRpb25TdGF0ZW1lbnROb2RlKHN1cHBvc2l0aW9uU3RhdGVtZW50Tm9kZSwgc3RhdGVtZW50Tm9kZSwgc3Vic3RpdHV0aW9ucykge1xuICBsZXQgc3VwcG9zaXRpb25TdGF0ZW1lbnROb2RlTWF0Y2hlcyA9IGZhbHNlO1xuXG4gIGNvbnN0IHN1cHBvc2l0aW9uTm9uVGVybWluYWxOb2RlID0gc3VwcG9zaXRpb25TdGF0ZW1lbnROb2RlLCAgLy8vXG4gICAgICAgIHN1cHBvc2l0aW9uQ2hpbGROb2RlcyA9IHN1cHBvc2l0aW9uTm9uVGVybWluYWxOb2RlLmdldENoaWxkTm9kZXMoKSxcbiAgICAgICAgc3VwcG9zaXRpb25DaGlsZE5vZGVzTGVuZ3RoID0gc3VwcG9zaXRpb25DaGlsZE5vZGVzLmxlbmd0aDtcblxuICBpZiAoc3VwcG9zaXRpb25DaGlsZE5vZGVzTGVuZ3RoID09PSAxKSB7XG4gICAgY29uc3QgZmlyc3RTdXBwb3NpdGlvbkNoaWxkTm9kZSA9IGZpcnN0KHN1cHBvc2l0aW9uQ2hpbGROb2RlcyksXG4gICAgICAgICAgc3VwcG9zaXRpb25DaGlsZE5vZGUgPSBmaXJzdFN1cHBvc2l0aW9uQ2hpbGROb2RlLCAgLy8vXG4gICAgICAgICAgc3VwcG9zaXRpb25DaGlsZE5vZGVOb25UZXJtaW5hbE5vZGUgPSBzdXBwb3NpdGlvbkNoaWxkTm9kZS5pc05vblRlcm1pbmFsTm9kZSgpO1xuXG4gICAgaWYgKHN1cHBvc2l0aW9uQ2hpbGROb2RlTm9uVGVybWluYWxOb2RlKSB7XG4gICAgICBjb25zdCBzdXBwb3NpdGlvbk5vblRlcm1pbmFsQ2hpbGROb2RlID0gc3VwcG9zaXRpb25DaGlsZE5vZGUsICAvLy9cbiAgICAgICAgICAgIHN1cHBvc2l0aW9uTm9uVGVybWluYWxDaGlsZE5vZGVSdWxlTmFtZSA9IHN1cHBvc2l0aW9uTm9uVGVybWluYWxDaGlsZE5vZGUuZ2V0UnVsZU5hbWUoKSxcbiAgICAgICAgICAgIHN1cHBvc2l0aW9uTm9uVGVybWluYWxDaGlsZE5vZGVSdWxlTmFtZVZhcmlhYmxlUnVsZU5hbWUgPSAoc3VwcG9zaXRpb25Ob25UZXJtaW5hbENoaWxkTm9kZVJ1bGVOYW1lID09PSBWQVJJQUJMRV9SVUxFX05BTUUpO1xuXG4gICAgICBpZiAoc3VwcG9zaXRpb25Ob25UZXJtaW5hbENoaWxkTm9kZVJ1bGVOYW1lVmFyaWFibGVSdWxlTmFtZSkge1xuICAgICAgICBjb25zdCBzdXBwb3NpdGlvblZhcmlhYmxlTm9kZSA9IHN1cHBvc2l0aW9uTm9uVGVybWluYWxDaGlsZE5vZGUsICAvLy9cbiAgICAgICAgICAgICAgbm9uVGVybWluYWxOb2RlID0gc3RhdGVtZW50Tm9kZSwgIC8vL1xuICAgICAgICAgICAgICBjaGlsZE5vZGVzID0gbm9uVGVybWluYWxOb2RlLmdldENoaWxkTm9kZXMoKSxcbiAgICAgICAgICAgICAgbm9kZXMgPSBjaGlsZE5vZGVzLCAvLy9cbiAgICAgICAgICAgICAgc3VwcG9zaXRpb25WYXJpYWJsZU1hdGNoZXMgPSBtYXRjaFN1cHBvc2l0aW9uVmFyaWFibGUoc3VwcG9zaXRpb25WYXJpYWJsZU5vZGUsIG5vZGVzLCBzdWJzdGl0dXRpb25zKTtcblxuICAgICAgICBzdXBwb3NpdGlvblN0YXRlbWVudE5vZGVNYXRjaGVzID0gc3VwcG9zaXRpb25WYXJpYWJsZU1hdGNoZXM7IC8vL1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBzdXBwb3NpdGlvblN0YXRlbWVudE5vZGVNYXRjaGVzO1xufVxuIl0sIm5hbWVzIjpbIlN1cHBvc2l0aW9uIiwic3RhdGVtZW50Tm9kZXNRdWVyeSIsIm5vZGVzUXVlcnkiLCJzdWJwcm9vZkFzc2VydGlvbk5vZGVRdWVyeSIsIm5vZGVRdWVyeSIsInVucXVhbGlmaWVkU3RhdGVtZW50U3RhdGVtZW50Tm9kZXNRdWVyeSIsInF1YWxpZmllZE9yVW5xdWFsaWZpZWRTdGF0ZW1lbnRTdGF0ZW1lbnROb2RlUXVlcnkiLCJzdGF0ZW1lbnROb2RlIiwiZ2V0U3RhdGVtZW50Tm9kZSIsIm1hdGNoU3VicHJvb2ZOb2RlIiwic3VicHJvb2ZOb2RlIiwic3Vic3RpdHV0aW9ucyIsInN1YnByb29mTm9kZU1hdGNoZXMiLCJzdWJwcm9vZkFzc2VydGlvbk5vZGUiLCJzdWJwcm9vZkFzc2VydGlvblN0YXRlbWVudE5vZGVzIiwidW5xdWFsaWZpZWRTdGF0ZW1lbnRTdGF0ZW1lbnROb2RlcyIsInF1YWxpZmllZE9yVW5xdWFsaWZpZWRTdGF0ZW1lbnRTdGF0ZW1lbnROb2RlIiwic3RhdGVtZW50Tm9kZXMiLCJzdGF0ZW1lbnROb2Rlc0xlbmd0aCIsImxlbmd0aCIsInN1YnByb29mQXNzZXJ0aW9uU3RhdGVtZW50Tm9kZXNMZW5ndGgiLCJldmVyeSIsInN1YnByb29mQXNzZXJ0aW9uU3RhdGVtZW50Tm9kZSIsImluZGV4Iiwibm9uVGVybWluYWxOb2RlIiwic3VwcG9zaXRpb25Ob25UZXJtaW5hbE5vZGUiLCJzdXBwb3NpdGlvbk5vblRlcm1pbmFsTm9kZU1hdGNoZXMiLCJtYXRjaFN1cHBvc2l0aW9uTm9uVGVybWluYWxOb2RlIiwibWF0Y2hTdGF0ZW1lbnROb2RlIiwic3RhdGVtZW50Tm9kZU1hdGNoZXMiLCJ0b0pTT04iLCJzdGF0ZW1lbnRTdHJpbmciLCJub2RlQXNTdHJpbmciLCJzdGF0ZW1lbnQiLCJqc29uIiwiZnJvbUpTT04iLCJyZWxlYXNlQ29udGV4dCIsInN0YXRlbWVudE5vZGVGcm9tU3RhdGVtZW50U3RyaW5nIiwic3VwcG9zaXRpb24iLCJmcm9tU3RhdGVtZW50Tm9kZSIsIm1hdGNoU3VwcG9zaXRpb25Ob2RlIiwic3VwcG9zaXRpb25Ob2RlIiwibm9kZSIsInN1cHBvc2l0aW9uTm9kZU1hdGNoZXMiLCJub2RlVGVybWluYWxOb2RlIiwiaXNUZXJtaW5hbE5vZGUiLCJydWxlTm9kZVRlcm1pbmFsTm9kZSIsInRlcm1pbmFsTm9kZSIsInN1cHBvc2l0aW9uVGVybWluYWxOb2RlIiwic3VwcG9zaXRpb25UZXJtaW5hbE5vZGVNYXRjaGVzIiwibWF0Y2hTdXBwb3NpdGlvblRlcm1pbmFsTm9kZSIsIm1hdGNoU3VwcG9zaXRpb25Ob2RlcyIsInN1cHBvc2l0aW9uTm9kZXMiLCJub2RlcyIsInN1cHBvc2l0aW9uTm9kZXNNYXRjaGVzIiwibm9kZXNMZW5ndGgiLCJzdXBwb3NpdGlvbk5vZGVzTGVuZ3RoIiwibWF0Y2hTdXBwb3NpdGlvblZhcmlhYmxlIiwic3VwcG9zaXRpb25WYXJpYWJsZU5vZGUiLCJzdXBwb3NpdGlvblZhcmlhYmxlTWF0Y2hlcyIsInN1cHBvc2l0aW9uVmFyaWFibGVOYW1lIiwidmFyaWFibGVOYW1lRnJvbVZhcmlhYmxlTm9kZSIsInN1YnN0aXR1dGlvbiIsImZpbmQiLCJ2YXJpYWJsZU5hbWUiLCJnZXRWYXJpYWJsZU5hbWUiLCJzdWJzdGl0dXRpb25Ob2Rlc01hdGNoIiwibWF0Y2hOb2RlcyIsIlN1YnN0aXR1dGlvbiIsImZyb21WYXJpYWJsZU5hbWVBbmROb2RlcyIsInB1c2giLCJtYXRjaGVzIiwibWF0Y2giLCJydWxlTmFtZSIsImdldFJ1bGVOYW1lIiwic3VwcG9zaXRpb25SdWxlTmFtZSIsImNoaWxkTm9kZXMiLCJnZXRDaGlsZE5vZGVzIiwic3VwcG9zaXRpb25DaGlsZE5vZGVzIiwic3VwcG9zaXRpb25DaGlsZE5vZGVzTWF0Y2hlcyIsInJ1bGVOYW1lU3RhdGVtZW50UnVsZU5hbWUiLCJTVEFURU1FTlRfUlVMRV9OQU1FIiwic3VwcG9zaXRpb25TdGF0ZW1lbnROb2RlIiwic3VwcG9zaXRpb25TdGF0ZW1lbnROb2RlTWF0Y2hlcyIsIm1hdGNoU3VwcG9zaXRpb25TdGF0ZW1lbnROb2RlIiwic3VwcG9zaXRpb25DaGlsZE5vZGVzTGVuZ3RoIiwiZmlyc3RTdXBwb3NpdGlvbkNoaWxkTm9kZSIsImZpcnN0Iiwic3VwcG9zaXRpb25DaGlsZE5vZGUiLCJzdXBwb3NpdGlvbkNoaWxkTm9kZU5vblRlcm1pbmFsTm9kZSIsImlzTm9uVGVybWluYWxOb2RlIiwic3VwcG9zaXRpb25Ob25UZXJtaW5hbENoaWxkTm9kZSIsInN1cHBvc2l0aW9uTm9uVGVybWluYWxDaGlsZE5vZGVSdWxlTmFtZSIsInN1cHBvc2l0aW9uTm9uVGVybWluYWxDaGlsZE5v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