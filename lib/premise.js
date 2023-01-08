"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return Premise;
    }
});
var _substitution = /*#__PURE__*/ _interopRequireDefault(require("./substitution"));
var _metaSubstitution = /*#__PURE__*/ _interopRequireDefault(require("./metaSubstitution"));
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
var metastatementNodesQuery = (0, _query.nodesQuery)("/metaSubproofAssertion/metastatement"), metaSubproofAssertionNodeQuery = (0, _query.nodeQuery)("/metastatement/metaSubproofAssertion!"), unqualifiedStatementStatementNodesQuery = (0, _query.nodesQuery)("/subproof/unqualifiedStatement/statement!"), unqualifiedMetastatementMetastatementNodesQuery = (0, _query.nodesQuery)("/metaSubproof/unqualifiedMetastatement/metastatement!"), qualifiedOrUnqualifiedStatementStatementNodeQuery = (0, _query.nodeQuery)("/subproof/derivation|abridgedDerivation/qualifiedStatement|unqualifiedStatement[-1]/statement!"), qualifiedOrUnqualifiedMetastatementMetastatementNodeQuery = (0, _query.nodeQuery)("/metaSubproof/metaDerivation|abridgedMetaDerivation/qualifiedMetastatement|unqualifiedMetastatement[-1]/metastatement!");
var Premise = /*#__PURE__*/ function() {
    function Premise(metastatementNode) {
        _classCallCheck(this, Premise);
        this.metastatementNode = metastatementNode;
    }
    _createClass(Premise, [
        {
            key: "getMetastatementNode",
            value: function getMetastatementNode() {
                return this.metastatementNode;
            }
        },
        {
            key: "matchSubproofNode",
            value: function matchSubproofNode(subproofNode, substitutions) {
                var subproofNodeMatches = false;
                var subproofAssertionNode = metaSubproofAssertionNodeQuery(this.metastatementNode);
                if (subproofAssertionNode !== null) {
                    var metaSubproofAssertionMetastatementNodes = metastatementNodesQuery(subproofAssertionNode), unqualifiedStatementStatementNodes = unqualifiedStatementStatementNodesQuery(subproofNode), qualifiedOrUnqualifiedStatementStatementNode = qualifiedOrUnqualifiedStatementStatementNodeQuery(subproofNode), statementNodes = _toConsumableArray(unqualifiedStatementStatementNodes).concat([
                        qualifiedOrUnqualifiedStatementStatementNode
                    ]), statementNodesLength = statementNodes.length, metaSubproofAssertionMetastatementNodesLength = metaSubproofAssertionMetastatementNodes.length;
                    if (statementNodesLength === metaSubproofAssertionMetastatementNodesLength) {
                        subproofNodeMatches = metaSubproofAssertionMetastatementNodes.every(function(metaSubproofAssertionMetastatementNode, index) {
                            var statementNode = statementNodes[index], nonTerminalNode = statementNode, premiseNonTerminalNode = metaSubproofAssertionMetastatementNode, premiseNonTerminalNodeMatches = matchPremiseNonTerminalNode(premiseNonTerminalNode, nonTerminalNode, substitutions);
                            if (premiseNonTerminalNodeMatches) {
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
                var nonTerminalNode = statementNode, premiseNonTerminalNode = this.metastatementNode, premiseNonTerminalNodeMatches = matchPremiseNonTerminalNode(premiseNonTerminalNode, nonTerminalNode, substitutions), statementNodeMatches = premiseNonTerminalNodeMatches; ///
                return statementNodeMatches;
            }
        },
        {
            key: "matchMetaSubproofNode",
            value: function matchMetaSubproofNode(metaSubproofNode, metaSubstitutions) {
                var metaSubproofNodeMatches = false;
                var metaSubproofAssertionNode = metaSubproofAssertionNodeQuery(this.metastatementNode);
                if (metaSubproofAssertionNode !== null) {
                    var metaSubproofAssertionMetastatementNodes = metastatementNodesQuery(metaSubproofAssertionNode), unqualifiedMetastatementMetastatementNodes = unqualifiedMetastatementMetastatementNodesQuery(metaSubproofNode), qualifiedOrUnqualifiedMetastatementMetastatementNode = qualifiedOrUnqualifiedMetastatementMetastatementNodeQuery(metaSubproofNode), metastatementNodes = _toConsumableArray(unqualifiedMetastatementMetastatementNodes).concat([
                        qualifiedOrUnqualifiedMetastatementMetastatementNode
                    ]), metastatementNodesLength = metastatementNodes.length, metaSubproofAssertionMetastatementNodesLength = metaSubproofAssertionMetastatementNodes.length;
                    if (metastatementNodesLength === metaSubproofAssertionMetastatementNodesLength) {
                        metaSubproofNodeMatches = metaSubproofAssertionMetastatementNodes.every(function(metaSubproofAssertionMetastatementNode, index) {
                            var metastatementNode = metastatementNodes[index], nonTerminalNode = metastatementNode, premiseNonTerminalNode = metaSubproofAssertionMetastatementNode, premiseNonTerminalNodeMatches = metaMatchPremiseNonTerminalNode(premiseNonTerminalNode, nonTerminalNode, metaSubstitutions);
                            if (premiseNonTerminalNodeMatches) {
                                return true;
                            }
                        });
                    }
                }
                return metaSubproofNodeMatches;
            }
        },
        {
            key: "matchMetastatementNode",
            value: function matchMetastatementNode(metastatementNode, metaSubstitutions) {
                var nonTerminalNode = metastatementNode, premiseNonTerminalNode = this.metastatementNode, premiseNonTerminalNodeMatches = metaMatchPremiseNonTerminalNode(premiseNonTerminalNode, nonTerminalNode, metaSubstitutions), metastatementNodeMatches = premiseNonTerminalNodeMatches; ///
                return metastatementNodeMatches;
            }
        },
        {
            key: "toJSON",
            value: function toJSON() {
                var metastatementString = (0, _string.nodeAsString)(this.metastatementNode), metastatement = metastatementString, json = {
                    metastatement: metastatement
                };
                return json;
            }
        }
    ], [
        {
            key: "fromJSON",
            value: function fromJSON(json, releaseContext) {
                var metastatement = json.metastatement, metastatementString = metastatement, metastatementNode = (0, _string.metastatementNodeFromMetastatementString)(metastatementString, releaseContext), premise = new Premise(metastatementNode);
                return premise;
            }
        },
        {
            key: "fromMetastatementNode",
            value: function fromMetastatementNode(metastatementNode) {
                var premise = new Premise(metastatementNode);
                return premise;
            }
        }
    ]);
    return Premise;
}();
function matchPremiseNode(premiseNode, node, substitutions) {
    var premiseNodeMatches = false;
    var nodeTerminalNode = node.isTerminalNode(), ruleNodeTerminalNode = premiseNode.isTerminalNode();
    if (nodeTerminalNode === ruleNodeTerminalNode) {
        if (nodeTerminalNode) {
            var terminalNode = node, premiseTerminalNode = premiseNode, premiseTerminalNodeMatches = matchPremiseTerminalNode(premiseTerminalNode, terminalNode, substitutions);
            premiseNodeMatches = premiseTerminalNodeMatches; ///
        } else {
            var nonTerminalNode = node, premiseNonTerminalNode = premiseNode, premiseNonTerminalNodeMatches = matchPremiseNonTerminalNode(premiseNonTerminalNode, nonTerminalNode, substitutions);
            premiseNodeMatches = premiseNonTerminalNodeMatches; ///
        }
    }
    return premiseNodeMatches;
}
function matchPremiseNodes(premiseNodes, nodes, substitutions) {
    var premiseNodesMatches = false;
    var nodesLength = nodes.length, premiseNodesLength = premiseNodes.length;
    if (nodesLength === premiseNodesLength) {
        premiseNodesMatches = nodes.every(function(node, index) {
            var premiseNode = premiseNodes[index], premiseNodeMatches = matchPremiseNode(premiseNode, node, substitutions);
            if (premiseNodeMatches) {
                return true;
            }
        });
    }
    return premiseNodesMatches;
}
function matchPremiseTerminalNode(premiseTerminalNode, terminalNode, substitutions) {
    var matches = premiseTerminalNode.match(terminalNode), premiseTerminalNodeMatches = matches;
    return premiseTerminalNodeMatches;
}
function matchPremiseNonTerminalNode(premiseNonTerminalNode, nonTerminalNode, substitutions) {
    var premiseNonTerminalNodeMatches = false;
    var ruleName = nonTerminalNode.getRuleName(), premiseRuleName = premiseNonTerminalNode.getRuleName(), ruleNameStatementRuleName = ruleName === _ruleNames.STATEMENT_RULE_NAME, premiseRuleNameMetastatementRuleName = premiseRuleName === _ruleNames.METASTATEMENT_RULE_NAME;
    if (ruleNameStatementRuleName && premiseRuleNameMetastatementRuleName) {
        var statementNode = nonTerminalNode, premiseMetastatementNode = premiseNonTerminalNode, premiseMetastatementNodeMatches = matchPremiseMetastatementNode(premiseMetastatementNode, statementNode, substitutions);
        premiseNonTerminalNodeMatches = premiseMetastatementNodeMatches; ///
    } else if (ruleName === premiseRuleName) {
        var childNodes = nonTerminalNode.getChildNodes(), premiseChildNodes = premiseNonTerminalNode.getChildNodes(), nodes = childNodes, premiseNodes = premiseChildNodes, premiseChildNodesMatches = matchPremiseNodes(premiseNodes, nodes, substitutions);
        premiseNonTerminalNodeMatches = premiseChildNodesMatches; ///
    }
    return premiseNonTerminalNodeMatches;
}
function matchPremiseMetavariableNode(premiseMetavariableNode, nodes, substitutions) {
    var premiseMetavariableNodeMatches;
    var premiseMetavariableName = (0, _query.metavariableNameFromMetavariableNode)(premiseMetavariableNode), substitution = substitutions.find(function(substitution) {
        var metavariableName = substitution.getMetavariableName();
        if (metavariableName === premiseMetavariableName) {
            return true;
        }
    }) || null;
    if (substitution !== null) {
        var substitutionNodesMatch = substitution.matchNodes(nodes);
        premiseMetavariableNodeMatches = substitutionNodesMatch; ///
    } else {
        var metavariableName = premiseMetavariableName, substitution1 = _substitution.default.fromMetavariableNameAndNodes(metavariableName, nodes);
        substitutions.push(substitution1);
        premiseMetavariableNodeMatches = true;
    }
    return premiseMetavariableNodeMatches;
}
function matchPremiseMetastatementNode(premiseMetastatementNode, statementNode, substitutions) {
    var premiseMetastatementNodeMatches = false;
    var premiseNonTerminalNode = premiseMetastatementNode, premiseChildNodes = premiseNonTerminalNode.getChildNodes(), premiseChildNodesLength = premiseChildNodes.length;
    if (premiseChildNodesLength === 1) {
        var firstPremiseChildNode = (0, _array.first)(premiseChildNodes), premiseChildNode = firstPremiseChildNode, premiseChildNodeNonTerminalNode = premiseChildNode.isNonTerminalNode();
        if (premiseChildNodeNonTerminalNode) {
            var premiseNonTerminalChildNode = premiseChildNode, premiseNonTerminalChildNodeRuleName = premiseNonTerminalChildNode.getRuleName(), premiseNonTerminalChildNodeRuleNameMetavariableRuleName = premiseNonTerminalChildNodeRuleName === _ruleNames.METAVARIABLE_RULE_NAME;
            if (premiseNonTerminalChildNodeRuleNameMetavariableRuleName) {
                var premiseMetavariableNode = premiseNonTerminalChildNode, nonTerminalNode = statementNode, childNodes = nonTerminalNode.getChildNodes(), nodes = childNodes, premiseMetaVariableNodeMatches = matchPremiseMetavariableNode(premiseMetavariableNode, nodes, substitutions);
                premiseMetastatementNodeMatches = premiseMetaVariableNodeMatches; ///
            }
        }
    }
    return premiseMetastatementNodeMatches;
}
function metaMatchPremiseNode(premiseNode, node, metaSubstitutions) {
    var premiseNodeMatches = false;
    var nodeTerminalNode = node.isTerminalNode(), ruleNodeTerminalNode = premiseNode.isTerminalNode();
    if (nodeTerminalNode === ruleNodeTerminalNode) {
        if (nodeTerminalNode) {
            var terminalNode = node, premiseTerminalNode = premiseNode, premiseTerminalNodeMatches = metaMatchPremiseTerminalNode(premiseTerminalNode, terminalNode, metaSubstitutions);
            premiseNodeMatches = premiseTerminalNodeMatches; ///
        } else {
            var nonTerminalNode = node, premiseNonTerminalNode = premiseNode, premiseNonTerminalNodeMatches = metaMatchPremiseNonTerminalNode(premiseNonTerminalNode, nonTerminalNode, metaSubstitutions);
            premiseNodeMatches = premiseNonTerminalNodeMatches; ///
        }
    }
    return premiseNodeMatches;
}
function metaMatchPremiseNodes(premiseNodes, nodes, metaSubstitutions) {
    var premiseNodesMatches = false;
    var nodesLength = nodes.length, premiseNodesLength = premiseNodes.length;
    if (nodesLength === premiseNodesLength) {
        premiseNodesMatches = nodes.every(function(node, index) {
            var premiseNode = premiseNodes[index], premiseNodeMatches = metaMatchPremiseNode(premiseNode, node, metaSubstitutions);
            if (premiseNodeMatches) {
                return true;
            }
        });
    }
    return premiseNodesMatches;
}
function metaMatchPremiseTerminalNode(premiseTerminalNode, terminalNode, metaSubstitutions) {
    var matches = premiseTerminalNode.match(terminalNode), premiseTerminalNodeMatches = matches;
    return premiseTerminalNodeMatches;
}
function metaMatchPremiseNonTerminalNode(premiseNonTerminalNode, nonTerminalNode, metaSubstitutions) {
    var premiseNonTerminalNodeMatches = false;
    var ruleName = nonTerminalNode.getRuleName(), premiseRuleName = premiseNonTerminalNode.getRuleName(), ruleNameMetastatementRuleName = ruleName === _ruleNames.METASTATEMENT_RULE_NAME, premiseRuleNameMetastatementRuleName = premiseRuleName === _ruleNames.METASTATEMENT_RULE_NAME;
    if (ruleNameMetastatementRuleName && premiseRuleNameMetastatementRuleName) {
        var metastatementNode = nonTerminalNode, premiseMetastatementNode = premiseNonTerminalNode, premiseMetastatementNodeMatches = metaMatchPremiseMetastatementNode(premiseMetastatementNode, metastatementNode, metaSubstitutions);
        premiseNonTerminalNodeMatches = premiseMetastatementNodeMatches; ///
    } else if (ruleName === premiseRuleName) {
        var childNodes = nonTerminalNode.getChildNodes(), premiseChildNodes = premiseNonTerminalNode.getChildNodes(), nodes = childNodes, premiseNodes = premiseChildNodes, premiseChildNodesMatches = metaMatchPremiseNodes(premiseNodes, nodes, metaSubstitutions);
        premiseNonTerminalNodeMatches = premiseChildNodesMatches; ///
    }
    return premiseNonTerminalNodeMatches;
}
function metaMatchPremiseMetavariableNode(premiseMetavariableNode, nodes, metaSubstitutions) {
    var premiseMetavariableNodeMatches;
    var premiseMetavariableName = (0, _query.metavariableNameFromMetavariableNode)(premiseMetavariableNode), metaSubstitution = metaSubstitutions.find(function(metaSubstitution) {
        var metavariableName = metaSubstitution.getMetavariableName();
        if (metavariableName === premiseMetavariableName) {
            return true;
        }
    }) || null;
    if (metaSubstitution !== null) {
        var metaSubstitutionNodesMatch = metaSubstitution.matchNodes(nodes);
        premiseMetavariableNodeMatches = metaSubstitutionNodesMatch; ///
    } else {
        var metavariableName = premiseMetavariableName, metaSubstitution1 = _metaSubstitution.default.fromMetavariableNameAndNodes(metavariableName, nodes);
        metaSubstitutions.push(metaSubstitution1);
        premiseMetavariableNodeMatches = true;
    }
    return premiseMetavariableNodeMatches;
}
function metaMatchPremiseMetastatementNode(premiseMetastatementNode, metastatementNode, metaSubstitutions) {
    var premiseMetastatementNodeMatches = false;
    var premiseNonTerminalNode = premiseMetastatementNode, premiseChildNodes = premiseNonTerminalNode.getChildNodes(), premiseChildNodesLength = premiseChildNodes.length;
    if (premiseChildNodesLength === 1) {
        var firstPremiseChildNode = (0, _array.first)(premiseChildNodes), premiseChildNode = firstPremiseChildNode, premiseChildNodeNonTerminalNode = premiseChildNode.isNonTerminalNode();
        if (premiseChildNodeNonTerminalNode) {
            var premiseNonTerminalChildNode = premiseChildNode, premiseNonTerminalChildNodeRuleName = premiseNonTerminalChildNode.getRuleName(), premiseNonTerminalChildNodeRuleNameMetavariableRuleName = premiseNonTerminalChildNodeRuleName === _ruleNames.METAVARIABLE_RULE_NAME;
            if (premiseNonTerminalChildNodeRuleNameMetavariableRuleName) {
                var premiseMetavariableNode = premiseNonTerminalChildNode, nonTerminalNode = metastatementNode, childNodes = nonTerminalNode.getChildNodes(), nodes = childNodes, premiseMetaVariableNodeMatches = metaMatchPremiseMetavariableNode(premiseMetavariableNode, nodes, metaSubstitutions);
                premiseMetastatementNodeMatches = premiseMetaVariableNodeMatches; ///
            }
        }
    }
    return premiseMetastatementNodeMatches;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9wcmVtaXNlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgU3Vic3RpdHV0aW9uIGZyb20gXCIuL3N1YnN0aXR1dGlvblwiO1xuaW1wb3J0IE1ldGFTdWJzdGl0dXRpb24gZnJvbSBcIi4vbWV0YVN1YnN0aXR1dGlvblwiO1xuXG5pbXBvcnQgeyBmaXJzdCB9IGZyb20gXCIuL3V0aWxpdGllcy9hcnJheVwiO1xuaW1wb3J0IHsgbm9kZUFzU3RyaW5nIH0gZnJvbSBcIi4vdXRpbGl0aWVzL3N0cmluZ1wiO1xuaW1wb3J0IHsgbm9kZVF1ZXJ5LCBub2Rlc1F1ZXJ5IH0gZnJvbSBcIi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5pbXBvcnQgeyBtZXRhdmFyaWFibGVOYW1lRnJvbU1ldGF2YXJpYWJsZU5vZGUgfSBmcm9tIFwiLi91dGlsaXRpZXMvcXVlcnlcIjtcbmltcG9ydCB7IG1ldGFzdGF0ZW1lbnROb2RlRnJvbU1ldGFzdGF0ZW1lbnRTdHJpbmcgfSBmcm9tIFwiLi91dGlsaXRpZXMvc3RyaW5nXCI7XG5pbXBvcnQgeyBTVEFURU1FTlRfUlVMRV9OQU1FLCBNRVRBU1RBVEVNRU5UX1JVTEVfTkFNRSwgTUVUQVZBUklBQkxFX1JVTEVfTkFNRSB9IGZyb20gXCIuL3J1bGVOYW1lc1wiO1xuXG5jb25zdCBtZXRhc3RhdGVtZW50Tm9kZXNRdWVyeSA9IG5vZGVzUXVlcnkoXCIvbWV0YVN1YnByb29mQXNzZXJ0aW9uL21ldGFzdGF0ZW1lbnRcIiksXG4gICAgICBtZXRhU3VicHJvb2ZBc3NlcnRpb25Ob2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvbWV0YXN0YXRlbWVudC9tZXRhU3VicHJvb2ZBc3NlcnRpb24hXCIpLFxuICAgICAgdW5xdWFsaWZpZWRTdGF0ZW1lbnRTdGF0ZW1lbnROb2Rlc1F1ZXJ5ID0gbm9kZXNRdWVyeShcIi9zdWJwcm9vZi91bnF1YWxpZmllZFN0YXRlbWVudC9zdGF0ZW1lbnQhXCIpLFxuICAgICAgdW5xdWFsaWZpZWRNZXRhc3RhdGVtZW50TWV0YXN0YXRlbWVudE5vZGVzUXVlcnkgPSBub2Rlc1F1ZXJ5KFwiL21ldGFTdWJwcm9vZi91bnF1YWxpZmllZE1ldGFzdGF0ZW1lbnQvbWV0YXN0YXRlbWVudCFcIiksXG4gICAgICBxdWFsaWZpZWRPclVucXVhbGlmaWVkU3RhdGVtZW50U3RhdGVtZW50Tm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3N1YnByb29mL2Rlcml2YXRpb258YWJyaWRnZWREZXJpdmF0aW9uL3F1YWxpZmllZFN0YXRlbWVudHx1bnF1YWxpZmllZFN0YXRlbWVudFstMV0vc3RhdGVtZW50IVwiKSxcbiAgICAgIHF1YWxpZmllZE9yVW5xdWFsaWZpZWRNZXRhc3RhdGVtZW50TWV0YXN0YXRlbWVudE5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9tZXRhU3VicHJvb2YvbWV0YURlcml2YXRpb258YWJyaWRnZWRNZXRhRGVyaXZhdGlvbi9xdWFsaWZpZWRNZXRhc3RhdGVtZW50fHVucXVhbGlmaWVkTWV0YXN0YXRlbWVudFstMV0vbWV0YXN0YXRlbWVudCFcIik7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFByZW1pc2Uge1xuICBjb25zdHJ1Y3RvcihtZXRhc3RhdGVtZW50Tm9kZSkge1xuICAgIHRoaXMubWV0YXN0YXRlbWVudE5vZGUgPSBtZXRhc3RhdGVtZW50Tm9kZTtcbiAgfVxuXG4gIGdldE1ldGFzdGF0ZW1lbnROb2RlKCkge1xuICAgIHJldHVybiB0aGlzLm1ldGFzdGF0ZW1lbnROb2RlO1xuICB9XG5cbiAgbWF0Y2hTdWJwcm9vZk5vZGUoc3VicHJvb2ZOb2RlLCBzdWJzdGl0dXRpb25zKSB7XG4gICAgbGV0IHN1YnByb29mTm9kZU1hdGNoZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IHN1YnByb29mQXNzZXJ0aW9uTm9kZSA9IG1ldGFTdWJwcm9vZkFzc2VydGlvbk5vZGVRdWVyeSh0aGlzLm1ldGFzdGF0ZW1lbnROb2RlKTtcblxuICAgIGlmIChzdWJwcm9vZkFzc2VydGlvbk5vZGUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IG1ldGFTdWJwcm9vZkFzc2VydGlvbk1ldGFzdGF0ZW1lbnROb2RlcyA9IG1ldGFzdGF0ZW1lbnROb2Rlc1F1ZXJ5KHN1YnByb29mQXNzZXJ0aW9uTm9kZSksXG4gICAgICAgICAgICB1bnF1YWxpZmllZFN0YXRlbWVudFN0YXRlbWVudE5vZGVzID0gdW5xdWFsaWZpZWRTdGF0ZW1lbnRTdGF0ZW1lbnROb2Rlc1F1ZXJ5KHN1YnByb29mTm9kZSksXG4gICAgICAgICAgICBxdWFsaWZpZWRPclVucXVhbGlmaWVkU3RhdGVtZW50U3RhdGVtZW50Tm9kZSA9IHF1YWxpZmllZE9yVW5xdWFsaWZpZWRTdGF0ZW1lbnRTdGF0ZW1lbnROb2RlUXVlcnkoc3VicHJvb2ZOb2RlKSxcbiAgICAgICAgICAgIHN0YXRlbWVudE5vZGVzID0gW1xuICAgICAgICAgICAgICAuLi51bnF1YWxpZmllZFN0YXRlbWVudFN0YXRlbWVudE5vZGVzLFxuICAgICAgICAgICAgICBxdWFsaWZpZWRPclVucXVhbGlmaWVkU3RhdGVtZW50U3RhdGVtZW50Tm9kZVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIHN0YXRlbWVudE5vZGVzTGVuZ3RoID0gc3RhdGVtZW50Tm9kZXMubGVuZ3RoLFxuICAgICAgICAgICAgbWV0YVN1YnByb29mQXNzZXJ0aW9uTWV0YXN0YXRlbWVudE5vZGVzTGVuZ3RoID0gbWV0YVN1YnByb29mQXNzZXJ0aW9uTWV0YXN0YXRlbWVudE5vZGVzLmxlbmd0aDtcblxuICAgICAgaWYgKHN0YXRlbWVudE5vZGVzTGVuZ3RoID09PSBtZXRhU3VicHJvb2ZBc3NlcnRpb25NZXRhc3RhdGVtZW50Tm9kZXNMZW5ndGgpIHtcbiAgICAgICAgc3VicHJvb2ZOb2RlTWF0Y2hlcyA9IG1ldGFTdWJwcm9vZkFzc2VydGlvbk1ldGFzdGF0ZW1lbnROb2Rlcy5ldmVyeSgobWV0YVN1YnByb29mQXNzZXJ0aW9uTWV0YXN0YXRlbWVudE5vZGUsIGluZGV4KSA9PiB7XG4gICAgICAgICAgY29uc3Qgc3RhdGVtZW50Tm9kZSA9IHN0YXRlbWVudE5vZGVzW2luZGV4XSxcbiAgICAgICAgICAgICAgICBub25UZXJtaW5hbE5vZGUgPSBzdGF0ZW1lbnROb2RlLCAvLy9cbiAgICAgICAgICAgICAgICBwcmVtaXNlTm9uVGVybWluYWxOb2RlID0gbWV0YVN1YnByb29mQXNzZXJ0aW9uTWV0YXN0YXRlbWVudE5vZGUsICAvLy9cbiAgICAgICAgICAgICAgICBwcmVtaXNlTm9uVGVybWluYWxOb2RlTWF0Y2hlcyA9IG1hdGNoUHJlbWlzZU5vblRlcm1pbmFsTm9kZShwcmVtaXNlTm9uVGVybWluYWxOb2RlLCBub25UZXJtaW5hbE5vZGUsIHN1YnN0aXR1dGlvbnMpO1xuXG4gICAgICAgICAgaWYgKHByZW1pc2VOb25UZXJtaW5hbE5vZGVNYXRjaGVzKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBzdWJwcm9vZk5vZGVNYXRjaGVzO1xuICB9XG5cbiAgbWF0Y2hTdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUsIHN1YnN0aXR1dGlvbnMpIHtcbiAgICBjb25zdCBub25UZXJtaW5hbE5vZGUgPSBzdGF0ZW1lbnROb2RlLCAgLy8vXG4gICAgICAgICAgcHJlbWlzZU5vblRlcm1pbmFsTm9kZSA9IHRoaXMubWV0YXN0YXRlbWVudE5vZGUsICAvLy9cbiAgICAgICAgICBwcmVtaXNlTm9uVGVybWluYWxOb2RlTWF0Y2hlcyA9IG1hdGNoUHJlbWlzZU5vblRlcm1pbmFsTm9kZShwcmVtaXNlTm9uVGVybWluYWxOb2RlLCBub25UZXJtaW5hbE5vZGUsIHN1YnN0aXR1dGlvbnMpLFxuICAgICAgICAgIHN0YXRlbWVudE5vZGVNYXRjaGVzID0gcHJlbWlzZU5vblRlcm1pbmFsTm9kZU1hdGNoZXM7IC8vL1xuXG4gICAgcmV0dXJuIHN0YXRlbWVudE5vZGVNYXRjaGVzO1xuICB9XG5cbiAgbWF0Y2hNZXRhU3VicHJvb2ZOb2RlKG1ldGFTdWJwcm9vZk5vZGUsIG1ldGFTdWJzdGl0dXRpb25zKSB7XG4gICAgbGV0IG1ldGFTdWJwcm9vZk5vZGVNYXRjaGVzID0gZmFsc2U7XG5cbiAgICBjb25zdCBtZXRhU3VicHJvb2ZBc3NlcnRpb25Ob2RlID0gbWV0YVN1YnByb29mQXNzZXJ0aW9uTm9kZVF1ZXJ5KHRoaXMubWV0YXN0YXRlbWVudE5vZGUpO1xuXG4gICAgaWYgKG1ldGFTdWJwcm9vZkFzc2VydGlvbk5vZGUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IG1ldGFTdWJwcm9vZkFzc2VydGlvbk1ldGFzdGF0ZW1lbnROb2RlcyA9IG1ldGFzdGF0ZW1lbnROb2Rlc1F1ZXJ5KG1ldGFTdWJwcm9vZkFzc2VydGlvbk5vZGUpLFxuICAgICAgICAgICAgdW5xdWFsaWZpZWRNZXRhc3RhdGVtZW50TWV0YXN0YXRlbWVudE5vZGVzID0gdW5xdWFsaWZpZWRNZXRhc3RhdGVtZW50TWV0YXN0YXRlbWVudE5vZGVzUXVlcnkobWV0YVN1YnByb29mTm9kZSksXG4gICAgICAgICAgICBxdWFsaWZpZWRPclVucXVhbGlmaWVkTWV0YXN0YXRlbWVudE1ldGFzdGF0ZW1lbnROb2RlID0gcXVhbGlmaWVkT3JVbnF1YWxpZmllZE1ldGFzdGF0ZW1lbnRNZXRhc3RhdGVtZW50Tm9kZVF1ZXJ5KG1ldGFTdWJwcm9vZk5vZGUpLFxuICAgICAgICAgICAgbWV0YXN0YXRlbWVudE5vZGVzID0gW1xuICAgICAgICAgICAgICAuLi51bnF1YWxpZmllZE1ldGFzdGF0ZW1lbnRNZXRhc3RhdGVtZW50Tm9kZXMsXG4gICAgICAgICAgICAgIHF1YWxpZmllZE9yVW5xdWFsaWZpZWRNZXRhc3RhdGVtZW50TWV0YXN0YXRlbWVudE5vZGVcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBtZXRhc3RhdGVtZW50Tm9kZXNMZW5ndGggPSBtZXRhc3RhdGVtZW50Tm9kZXMubGVuZ3RoLFxuICAgICAgICAgICAgbWV0YVN1YnByb29mQXNzZXJ0aW9uTWV0YXN0YXRlbWVudE5vZGVzTGVuZ3RoID0gbWV0YVN1YnByb29mQXNzZXJ0aW9uTWV0YXN0YXRlbWVudE5vZGVzLmxlbmd0aDtcblxuICAgICAgaWYgKG1ldGFzdGF0ZW1lbnROb2Rlc0xlbmd0aCA9PT0gbWV0YVN1YnByb29mQXNzZXJ0aW9uTWV0YXN0YXRlbWVudE5vZGVzTGVuZ3RoKSB7XG4gICAgICAgIG1ldGFTdWJwcm9vZk5vZGVNYXRjaGVzID0gbWV0YVN1YnByb29mQXNzZXJ0aW9uTWV0YXN0YXRlbWVudE5vZGVzLmV2ZXJ5KChtZXRhU3VicHJvb2ZBc3NlcnRpb25NZXRhc3RhdGVtZW50Tm9kZSwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG1ldGFzdGF0ZW1lbnROb2RlID0gbWV0YXN0YXRlbWVudE5vZGVzW2luZGV4XSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vblRlcm1pbmFsTm9kZSA9IG1ldGFzdGF0ZW1lbnROb2RlLCAvLy9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByZW1pc2VOb25UZXJtaW5hbE5vZGUgPSBtZXRhU3VicHJvb2ZBc3NlcnRpb25NZXRhc3RhdGVtZW50Tm9kZSwgIC8vL1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJlbWlzZU5vblRlcm1pbmFsTm9kZU1hdGNoZXMgPSBtZXRhTWF0Y2hQcmVtaXNlTm9uVGVybWluYWxOb2RlKHByZW1pc2VOb25UZXJtaW5hbE5vZGUsIG5vblRlcm1pbmFsTm9kZSwgbWV0YVN1YnN0aXR1dGlvbnMpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocHJlbWlzZU5vblRlcm1pbmFsTm9kZU1hdGNoZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG1ldGFTdWJwcm9vZk5vZGVNYXRjaGVzO1xuICB9XG5cbiAgbWF0Y2hNZXRhc3RhdGVtZW50Tm9kZShtZXRhc3RhdGVtZW50Tm9kZSwgbWV0YVN1YnN0aXR1dGlvbnMpIHtcbiAgICBjb25zdCBub25UZXJtaW5hbE5vZGUgPSBtZXRhc3RhdGVtZW50Tm9kZSwgIC8vL1xuICAgICAgICAgIHByZW1pc2VOb25UZXJtaW5hbE5vZGUgPSB0aGlzLm1ldGFzdGF0ZW1lbnROb2RlLCAgLy8vXG4gICAgICAgICAgcHJlbWlzZU5vblRlcm1pbmFsTm9kZU1hdGNoZXMgPSBtZXRhTWF0Y2hQcmVtaXNlTm9uVGVybWluYWxOb2RlKHByZW1pc2VOb25UZXJtaW5hbE5vZGUsIG5vblRlcm1pbmFsTm9kZSwgbWV0YVN1YnN0aXR1dGlvbnMpLFxuICAgICAgICAgIG1ldGFzdGF0ZW1lbnROb2RlTWF0Y2hlcyA9IHByZW1pc2VOb25UZXJtaW5hbE5vZGVNYXRjaGVzOyAvLy9cblxuICAgIHJldHVybiBtZXRhc3RhdGVtZW50Tm9kZU1hdGNoZXM7XG4gIH1cblxuICB0b0pTT04oKSB7XG4gICAgY29uc3QgbWV0YXN0YXRlbWVudFN0cmluZyA9IG5vZGVBc1N0cmluZyh0aGlzLm1ldGFzdGF0ZW1lbnROb2RlKSxcbiAgICAgICAgICBtZXRhc3RhdGVtZW50ID0gbWV0YXN0YXRlbWVudFN0cmluZywgLy8vXG4gICAgICAgICAganNvbiA9IHtcbiAgICAgICAgICAgIG1ldGFzdGF0ZW1lbnRcbiAgICAgICAgICB9O1xuXG4gICAgcmV0dXJuIGpzb247XG4gIH1cblxuICBzdGF0aWMgZnJvbUpTT04oanNvbiwgcmVsZWFzZUNvbnRleHQpIHtcbiAgICBjb25zdCB7IG1ldGFzdGF0ZW1lbnQgfSA9IGpzb24sXG4gICAgICAgICAgbWV0YXN0YXRlbWVudFN0cmluZyA9IG1ldGFzdGF0ZW1lbnQsICAvLy9cbiAgICAgICAgICBtZXRhc3RhdGVtZW50Tm9kZSA9IG1ldGFzdGF0ZW1lbnROb2RlRnJvbU1ldGFzdGF0ZW1lbnRTdHJpbmcobWV0YXN0YXRlbWVudFN0cmluZywgcmVsZWFzZUNvbnRleHQpLFxuICAgICAgICAgIHByZW1pc2UgPSBuZXcgUHJlbWlzZShtZXRhc3RhdGVtZW50Tm9kZSk7XG5cbiAgICByZXR1cm4gcHJlbWlzZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTWV0YXN0YXRlbWVudE5vZGUobWV0YXN0YXRlbWVudE5vZGUpIHtcbiAgICBjb25zdCBwcmVtaXNlID0gbmV3IFByZW1pc2UobWV0YXN0YXRlbWVudE5vZGUpO1xuXG4gICAgcmV0dXJuIHByZW1pc2U7XG4gIH1cbn1cblxuZnVuY3Rpb24gbWF0Y2hQcmVtaXNlTm9kZShwcmVtaXNlTm9kZSwgbm9kZSwgc3Vic3RpdHV0aW9ucykge1xuICBsZXQgcHJlbWlzZU5vZGVNYXRjaGVzID0gZmFsc2U7XG5cbiAgY29uc3Qgbm9kZVRlcm1pbmFsTm9kZSA9IG5vZGUuaXNUZXJtaW5hbE5vZGUoKSxcbiAgICBydWxlTm9kZVRlcm1pbmFsTm9kZSA9IHByZW1pc2VOb2RlLmlzVGVybWluYWxOb2RlKCk7XG5cbiAgaWYgKG5vZGVUZXJtaW5hbE5vZGUgPT09IHJ1bGVOb2RlVGVybWluYWxOb2RlKSB7XG4gICAgaWYgKG5vZGVUZXJtaW5hbE5vZGUpIHtcbiAgICAgIGNvbnN0IHRlcm1pbmFsTm9kZSA9IG5vZGUsICAvLy9cbiAgICAgICAgICAgIHByZW1pc2VUZXJtaW5hbE5vZGUgPSBwcmVtaXNlTm9kZSwgIC8vL1xuICAgICAgICAgICAgcHJlbWlzZVRlcm1pbmFsTm9kZU1hdGNoZXMgPSBtYXRjaFByZW1pc2VUZXJtaW5hbE5vZGUocHJlbWlzZVRlcm1pbmFsTm9kZSwgdGVybWluYWxOb2RlLCBzdWJzdGl0dXRpb25zKTtcblxuICAgICAgcHJlbWlzZU5vZGVNYXRjaGVzID0gcHJlbWlzZVRlcm1pbmFsTm9kZU1hdGNoZXM7ICAvLy9cbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3Qgbm9uVGVybWluYWxOb2RlID0gbm9kZSwgLy8vXG4gICAgICAgICAgICBwcmVtaXNlTm9uVGVybWluYWxOb2RlID0gcHJlbWlzZU5vZGUsICAvLy9cbiAgICAgICAgICAgIHByZW1pc2VOb25UZXJtaW5hbE5vZGVNYXRjaGVzID0gbWF0Y2hQcmVtaXNlTm9uVGVybWluYWxOb2RlKHByZW1pc2VOb25UZXJtaW5hbE5vZGUsIG5vblRlcm1pbmFsTm9kZSwgc3Vic3RpdHV0aW9ucyk7XG5cbiAgICAgIHByZW1pc2VOb2RlTWF0Y2hlcyA9IHByZW1pc2VOb25UZXJtaW5hbE5vZGVNYXRjaGVzOyAvLy9cbiAgICB9XG4gIH1cblxuICByZXR1cm4gcHJlbWlzZU5vZGVNYXRjaGVzO1xufVxuXG5mdW5jdGlvbiBtYXRjaFByZW1pc2VOb2RlcyhwcmVtaXNlTm9kZXMsIG5vZGVzLCBzdWJzdGl0dXRpb25zKSB7XG4gIGxldCBwcmVtaXNlTm9kZXNNYXRjaGVzID0gZmFsc2U7XG5cbiAgY29uc3Qgbm9kZXNMZW5ndGggPSBub2Rlcy5sZW5ndGgsXG4gICAgICAgIHByZW1pc2VOb2Rlc0xlbmd0aCA9IHByZW1pc2VOb2Rlcy5sZW5ndGg7XG5cbiAgaWYgKG5vZGVzTGVuZ3RoID09PSBwcmVtaXNlTm9kZXNMZW5ndGgpIHtcbiAgICBwcmVtaXNlTm9kZXNNYXRjaGVzID0gbm9kZXMuZXZlcnkoKG5vZGUsIGluZGV4KSA9PiB7XG4gICAgICBjb25zdCBwcmVtaXNlTm9kZSA9IHByZW1pc2VOb2Rlc1tpbmRleF0sXG4gICAgICAgICAgICBwcmVtaXNlTm9kZU1hdGNoZXMgPSBtYXRjaFByZW1pc2VOb2RlKHByZW1pc2VOb2RlLCBub2RlLCBzdWJzdGl0dXRpb25zKTtcblxuICAgICAgaWYgKHByZW1pc2VOb2RlTWF0Y2hlcykge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHJldHVybiBwcmVtaXNlTm9kZXNNYXRjaGVzO1xufVxuXG5mdW5jdGlvbiBtYXRjaFByZW1pc2VUZXJtaW5hbE5vZGUocHJlbWlzZVRlcm1pbmFsTm9kZSwgdGVybWluYWxOb2RlLCBzdWJzdGl0dXRpb25zKSB7XG4gIGNvbnN0IG1hdGNoZXMgPSBwcmVtaXNlVGVybWluYWxOb2RlLm1hdGNoKHRlcm1pbmFsTm9kZSksXG4gICAgICAgIHByZW1pc2VUZXJtaW5hbE5vZGVNYXRjaGVzID0gbWF0Y2hlcztcblxuICByZXR1cm4gcHJlbWlzZVRlcm1pbmFsTm9kZU1hdGNoZXM7XG59XG5cbmZ1bmN0aW9uIG1hdGNoUHJlbWlzZU5vblRlcm1pbmFsTm9kZShwcmVtaXNlTm9uVGVybWluYWxOb2RlLCBub25UZXJtaW5hbE5vZGUsIHN1YnN0aXR1dGlvbnMpIHtcbiAgbGV0IHByZW1pc2VOb25UZXJtaW5hbE5vZGVNYXRjaGVzID0gZmFsc2U7XG5cbiAgY29uc3QgcnVsZU5hbWUgPSBub25UZXJtaW5hbE5vZGUuZ2V0UnVsZU5hbWUoKSxcbiAgICAgICAgcHJlbWlzZVJ1bGVOYW1lID0gcHJlbWlzZU5vblRlcm1pbmFsTm9kZS5nZXRSdWxlTmFtZSgpLCAvLy9cbiAgICAgICAgcnVsZU5hbWVTdGF0ZW1lbnRSdWxlTmFtZSA9IChydWxlTmFtZSA9PT0gU1RBVEVNRU5UX1JVTEVfTkFNRSksXG4gICAgICAgIHByZW1pc2VSdWxlTmFtZU1ldGFzdGF0ZW1lbnRSdWxlTmFtZSA9IChwcmVtaXNlUnVsZU5hbWUgPT09IE1FVEFTVEFURU1FTlRfUlVMRV9OQU1FKTtcblxuICBpZiAocnVsZU5hbWVTdGF0ZW1lbnRSdWxlTmFtZSAmJiBwcmVtaXNlUnVsZU5hbWVNZXRhc3RhdGVtZW50UnVsZU5hbWUpIHtcbiAgICBjb25zdCBzdGF0ZW1lbnROb2RlID0gbm9uVGVybWluYWxOb2RlLCAgLy8vXG4gICAgICAgICAgcHJlbWlzZU1ldGFzdGF0ZW1lbnROb2RlID0gcHJlbWlzZU5vblRlcm1pbmFsTm9kZSwgIC8vL1xuICAgICAgICAgIHByZW1pc2VNZXRhc3RhdGVtZW50Tm9kZU1hdGNoZXMgPSBtYXRjaFByZW1pc2VNZXRhc3RhdGVtZW50Tm9kZShwcmVtaXNlTWV0YXN0YXRlbWVudE5vZGUsIHN0YXRlbWVudE5vZGUsIHN1YnN0aXR1dGlvbnMpO1xuXG4gICAgcHJlbWlzZU5vblRlcm1pbmFsTm9kZU1hdGNoZXMgPSBwcmVtaXNlTWV0YXN0YXRlbWVudE5vZGVNYXRjaGVzOyAvLy9cbiAgfSBlbHNlIGlmIChydWxlTmFtZSA9PT0gcHJlbWlzZVJ1bGVOYW1lKSB7XG4gICAgY29uc3QgY2hpbGROb2RlcyA9IG5vblRlcm1pbmFsTm9kZS5nZXRDaGlsZE5vZGVzKCksXG4gICAgICAgICAgcHJlbWlzZUNoaWxkTm9kZXMgPSBwcmVtaXNlTm9uVGVybWluYWxOb2RlLmdldENoaWxkTm9kZXMoKSxcbiAgICAgICAgICBub2RlcyA9IGNoaWxkTm9kZXMsIC8vL1xuICAgICAgICAgIHByZW1pc2VOb2RlcyA9IHByZW1pc2VDaGlsZE5vZGVzLCAvLy9cbiAgICAgICAgICBwcmVtaXNlQ2hpbGROb2Rlc01hdGNoZXMgPSBtYXRjaFByZW1pc2VOb2RlcyhwcmVtaXNlTm9kZXMsIG5vZGVzLCBzdWJzdGl0dXRpb25zKTtcblxuICAgIHByZW1pc2VOb25UZXJtaW5hbE5vZGVNYXRjaGVzID0gcHJlbWlzZUNoaWxkTm9kZXNNYXRjaGVzOyAvLy9cbiAgfVxuXG4gIHJldHVybiBwcmVtaXNlTm9uVGVybWluYWxOb2RlTWF0Y2hlcztcbn1cblxuZnVuY3Rpb24gbWF0Y2hQcmVtaXNlTWV0YXZhcmlhYmxlTm9kZShwcmVtaXNlTWV0YXZhcmlhYmxlTm9kZSwgbm9kZXMsIHN1YnN0aXR1dGlvbnMpIHtcbiAgbGV0IHByZW1pc2VNZXRhdmFyaWFibGVOb2RlTWF0Y2hlcztcblxuICBjb25zdCBwcmVtaXNlTWV0YXZhcmlhYmxlTmFtZSA9IG1ldGF2YXJpYWJsZU5hbWVGcm9tTWV0YXZhcmlhYmxlTm9kZShwcmVtaXNlTWV0YXZhcmlhYmxlTm9kZSksXG4gICAgICAgIHN1YnN0aXR1dGlvbiA9IHN1YnN0aXR1dGlvbnMuZmluZCgoc3Vic3RpdHV0aW9uKSA9PiB7XG4gICAgICAgICAgY29uc3QgbWV0YXZhcmlhYmxlTmFtZSA9IHN1YnN0aXR1dGlvbi5nZXRNZXRhdmFyaWFibGVOYW1lKCk7XG5cbiAgICAgICAgICBpZiAobWV0YXZhcmlhYmxlTmFtZSA9PT0gcHJlbWlzZU1ldGF2YXJpYWJsZU5hbWUpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfSkgfHwgbnVsbDtcblxuICBpZiAoc3Vic3RpdHV0aW9uICE9PSBudWxsKSB7XG4gICAgY29uc3Qgc3Vic3RpdHV0aW9uTm9kZXNNYXRjaCA9IHN1YnN0aXR1dGlvbi5tYXRjaE5vZGVzKG5vZGVzKTtcblxuICAgIHByZW1pc2VNZXRhdmFyaWFibGVOb2RlTWF0Y2hlcyA9IHN1YnN0aXR1dGlvbk5vZGVzTWF0Y2g7ICAvLy9cbiAgfSBlbHNlIHtcbiAgICBjb25zdCBtZXRhdmFyaWFibGVOYW1lID0gcHJlbWlzZU1ldGF2YXJpYWJsZU5hbWUsIC8vL1xuICAgICAgICAgIHN1YnN0aXR1dGlvbiA9IFN1YnN0aXR1dGlvbi5mcm9tTWV0YXZhcmlhYmxlTmFtZUFuZE5vZGVzKG1ldGF2YXJpYWJsZU5hbWUsIG5vZGVzKTtcblxuICAgIHN1YnN0aXR1dGlvbnMucHVzaChzdWJzdGl0dXRpb24pO1xuXG4gICAgcHJlbWlzZU1ldGF2YXJpYWJsZU5vZGVNYXRjaGVzID0gdHJ1ZTtcbiAgfVxuXG4gIHJldHVybiBwcmVtaXNlTWV0YXZhcmlhYmxlTm9kZU1hdGNoZXM7XG59XG5cbmZ1bmN0aW9uIG1hdGNoUHJlbWlzZU1ldGFzdGF0ZW1lbnROb2RlKHByZW1pc2VNZXRhc3RhdGVtZW50Tm9kZSwgc3RhdGVtZW50Tm9kZSwgc3Vic3RpdHV0aW9ucykge1xuICBsZXQgcHJlbWlzZU1ldGFzdGF0ZW1lbnROb2RlTWF0Y2hlcyA9IGZhbHNlO1xuXG4gIGNvbnN0IHByZW1pc2VOb25UZXJtaW5hbE5vZGUgPSBwcmVtaXNlTWV0YXN0YXRlbWVudE5vZGUsICAvLy9cbiAgICAgICAgcHJlbWlzZUNoaWxkTm9kZXMgPSBwcmVtaXNlTm9uVGVybWluYWxOb2RlLmdldENoaWxkTm9kZXMoKSxcbiAgICAgICAgcHJlbWlzZUNoaWxkTm9kZXNMZW5ndGggPSBwcmVtaXNlQ2hpbGROb2Rlcy5sZW5ndGg7XG5cbiAgaWYgKHByZW1pc2VDaGlsZE5vZGVzTGVuZ3RoID09PSAxKSB7XG4gICAgY29uc3QgZmlyc3RQcmVtaXNlQ2hpbGROb2RlID0gZmlyc3QocHJlbWlzZUNoaWxkTm9kZXMpLFxuICAgICAgICAgIHByZW1pc2VDaGlsZE5vZGUgPSBmaXJzdFByZW1pc2VDaGlsZE5vZGUsICAvLy9cbiAgICAgICAgICBwcmVtaXNlQ2hpbGROb2RlTm9uVGVybWluYWxOb2RlID0gcHJlbWlzZUNoaWxkTm9kZS5pc05vblRlcm1pbmFsTm9kZSgpO1xuXG4gICAgaWYgKHByZW1pc2VDaGlsZE5vZGVOb25UZXJtaW5hbE5vZGUpIHtcbiAgICAgIGNvbnN0IHByZW1pc2VOb25UZXJtaW5hbENoaWxkTm9kZSA9IHByZW1pc2VDaGlsZE5vZGUsICAvLy9cbiAgICAgICAgICAgIHByZW1pc2VOb25UZXJtaW5hbENoaWxkTm9kZVJ1bGVOYW1lID0gcHJlbWlzZU5vblRlcm1pbmFsQ2hpbGROb2RlLmdldFJ1bGVOYW1lKCksXG4gICAgICAgICAgICBwcmVtaXNlTm9uVGVybWluYWxDaGlsZE5vZGVSdWxlTmFtZU1ldGF2YXJpYWJsZVJ1bGVOYW1lID0gKHByZW1pc2VOb25UZXJtaW5hbENoaWxkTm9kZVJ1bGVOYW1lID09PSBNRVRBVkFSSUFCTEVfUlVMRV9OQU1FKTtcblxuICAgICAgaWYgKHByZW1pc2VOb25UZXJtaW5hbENoaWxkTm9kZVJ1bGVOYW1lTWV0YXZhcmlhYmxlUnVsZU5hbWUpIHtcbiAgICAgICAgY29uc3QgcHJlbWlzZU1ldGF2YXJpYWJsZU5vZGUgPSBwcmVtaXNlTm9uVGVybWluYWxDaGlsZE5vZGUsICAvLy9cbiAgICAgICAgICAgICAgbm9uVGVybWluYWxOb2RlID0gc3RhdGVtZW50Tm9kZSwgIC8vL1xuICAgICAgICAgICAgICBjaGlsZE5vZGVzID0gbm9uVGVybWluYWxOb2RlLmdldENoaWxkTm9kZXMoKSxcbiAgICAgICAgICAgICAgbm9kZXMgPSBjaGlsZE5vZGVzLCAvLy9cbiAgICAgICAgICAgICAgcHJlbWlzZU1ldGFWYXJpYWJsZU5vZGVNYXRjaGVzID0gbWF0Y2hQcmVtaXNlTWV0YXZhcmlhYmxlTm9kZShwcmVtaXNlTWV0YXZhcmlhYmxlTm9kZSwgbm9kZXMsIHN1YnN0aXR1dGlvbnMpO1xuXG4gICAgICAgIHByZW1pc2VNZXRhc3RhdGVtZW50Tm9kZU1hdGNoZXMgPSBwcmVtaXNlTWV0YVZhcmlhYmxlTm9kZU1hdGNoZXM7IC8vL1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBwcmVtaXNlTWV0YXN0YXRlbWVudE5vZGVNYXRjaGVzO1xufVxuXG5mdW5jdGlvbiBtZXRhTWF0Y2hQcmVtaXNlTm9kZShwcmVtaXNlTm9kZSwgbm9kZSwgbWV0YVN1YnN0aXR1dGlvbnMpIHtcbiAgbGV0IHByZW1pc2VOb2RlTWF0Y2hlcyA9IGZhbHNlO1xuXG4gIGNvbnN0IG5vZGVUZXJtaW5hbE5vZGUgPSBub2RlLmlzVGVybWluYWxOb2RlKCksXG4gICAgICAgIHJ1bGVOb2RlVGVybWluYWxOb2RlID0gcHJlbWlzZU5vZGUuaXNUZXJtaW5hbE5vZGUoKTtcblxuICBpZiAobm9kZVRlcm1pbmFsTm9kZSA9PT0gcnVsZU5vZGVUZXJtaW5hbE5vZGUpIHtcbiAgICBpZiAobm9kZVRlcm1pbmFsTm9kZSkge1xuICAgICAgY29uc3QgdGVybWluYWxOb2RlID0gbm9kZSwgIC8vL1xuICAgICAgICAgICAgcHJlbWlzZVRlcm1pbmFsTm9kZSA9IHByZW1pc2VOb2RlLCAgLy8vXG4gICAgICAgICAgICBwcmVtaXNlVGVybWluYWxOb2RlTWF0Y2hlcyA9IG1ldGFNYXRjaFByZW1pc2VUZXJtaW5hbE5vZGUocHJlbWlzZVRlcm1pbmFsTm9kZSwgdGVybWluYWxOb2RlLCBtZXRhU3Vic3RpdHV0aW9ucyk7XG5cbiAgICAgIHByZW1pc2VOb2RlTWF0Y2hlcyA9IHByZW1pc2VUZXJtaW5hbE5vZGVNYXRjaGVzOyAgLy8vXG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IG5vblRlcm1pbmFsTm9kZSA9IG5vZGUsIC8vL1xuICAgICAgICAgICAgcHJlbWlzZU5vblRlcm1pbmFsTm9kZSA9IHByZW1pc2VOb2RlLCAgLy8vXG4gICAgICAgICAgICBwcmVtaXNlTm9uVGVybWluYWxOb2RlTWF0Y2hlcyA9IG1ldGFNYXRjaFByZW1pc2VOb25UZXJtaW5hbE5vZGUocHJlbWlzZU5vblRlcm1pbmFsTm9kZSwgbm9uVGVybWluYWxOb2RlLCBtZXRhU3Vic3RpdHV0aW9ucyk7XG5cbiAgICAgIHByZW1pc2VOb2RlTWF0Y2hlcyA9IHByZW1pc2VOb25UZXJtaW5hbE5vZGVNYXRjaGVzOyAvLy9cbiAgICB9XG4gIH1cblxuICByZXR1cm4gcHJlbWlzZU5vZGVNYXRjaGVzO1xufVxuXG5mdW5jdGlvbiBtZXRhTWF0Y2hQcmVtaXNlTm9kZXMocHJlbWlzZU5vZGVzLCBub2RlcywgbWV0YVN1YnN0aXR1dGlvbnMpIHtcbiAgbGV0IHByZW1pc2VOb2Rlc01hdGNoZXMgPSBmYWxzZTtcblxuICBjb25zdCBub2Rlc0xlbmd0aCA9IG5vZGVzLmxlbmd0aCxcbiAgICAgICAgcHJlbWlzZU5vZGVzTGVuZ3RoID0gcHJlbWlzZU5vZGVzLmxlbmd0aDtcblxuICBpZiAobm9kZXNMZW5ndGggPT09IHByZW1pc2VOb2Rlc0xlbmd0aCkge1xuICAgIHByZW1pc2VOb2Rlc01hdGNoZXMgPSBub2Rlcy5ldmVyeSgobm9kZSwgaW5kZXgpID0+IHtcbiAgICAgIGNvbnN0IHByZW1pc2VOb2RlID0gcHJlbWlzZU5vZGVzW2luZGV4XSxcbiAgICAgICAgICAgIHByZW1pc2VOb2RlTWF0Y2hlcyA9IG1ldGFNYXRjaFByZW1pc2VOb2RlKHByZW1pc2VOb2RlLCBub2RlLCBtZXRhU3Vic3RpdHV0aW9ucyk7XG5cbiAgICAgIGlmIChwcmVtaXNlTm9kZU1hdGNoZXMpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICByZXR1cm4gcHJlbWlzZU5vZGVzTWF0Y2hlcztcbn1cblxuZnVuY3Rpb24gbWV0YU1hdGNoUHJlbWlzZVRlcm1pbmFsTm9kZShwcmVtaXNlVGVybWluYWxOb2RlLCB0ZXJtaW5hbE5vZGUsIG1ldGFTdWJzdGl0dXRpb25zKSB7XG4gIGNvbnN0IG1hdGNoZXMgPSBwcmVtaXNlVGVybWluYWxOb2RlLm1hdGNoKHRlcm1pbmFsTm9kZSksXG4gICAgICAgIHByZW1pc2VUZXJtaW5hbE5vZGVNYXRjaGVzID0gbWF0Y2hlcztcblxuICByZXR1cm4gcHJlbWlzZVRlcm1pbmFsTm9kZU1hdGNoZXM7XG59XG5cbmZ1bmN0aW9uIG1ldGFNYXRjaFByZW1pc2VOb25UZXJtaW5hbE5vZGUocHJlbWlzZU5vblRlcm1pbmFsTm9kZSwgbm9uVGVybWluYWxOb2RlLCBtZXRhU3Vic3RpdHV0aW9ucykge1xuICBsZXQgcHJlbWlzZU5vblRlcm1pbmFsTm9kZU1hdGNoZXMgPSBmYWxzZTtcblxuICBjb25zdCBydWxlTmFtZSA9IG5vblRlcm1pbmFsTm9kZS5nZXRSdWxlTmFtZSgpLFxuICAgICAgICBwcmVtaXNlUnVsZU5hbWUgPSBwcmVtaXNlTm9uVGVybWluYWxOb2RlLmdldFJ1bGVOYW1lKCksIC8vL1xuICAgICAgICBydWxlTmFtZU1ldGFzdGF0ZW1lbnRSdWxlTmFtZSA9IChydWxlTmFtZSA9PT0gTUVUQVNUQVRFTUVOVF9SVUxFX05BTUUpLFxuICAgICAgICBwcmVtaXNlUnVsZU5hbWVNZXRhc3RhdGVtZW50UnVsZU5hbWUgPSAocHJlbWlzZVJ1bGVOYW1lID09PSBNRVRBU1RBVEVNRU5UX1JVTEVfTkFNRSk7XG5cbiAgaWYgKHJ1bGVOYW1lTWV0YXN0YXRlbWVudFJ1bGVOYW1lICYmIHByZW1pc2VSdWxlTmFtZU1ldGFzdGF0ZW1lbnRSdWxlTmFtZSkge1xuICAgIGNvbnN0IG1ldGFzdGF0ZW1lbnROb2RlID0gbm9uVGVybWluYWxOb2RlLCAgLy8vXG4gICAgICAgICAgcHJlbWlzZU1ldGFzdGF0ZW1lbnROb2RlID0gcHJlbWlzZU5vblRlcm1pbmFsTm9kZSwgIC8vL1xuICAgICAgICAgIHByZW1pc2VNZXRhc3RhdGVtZW50Tm9kZU1hdGNoZXMgPSBtZXRhTWF0Y2hQcmVtaXNlTWV0YXN0YXRlbWVudE5vZGUocHJlbWlzZU1ldGFzdGF0ZW1lbnROb2RlLCBtZXRhc3RhdGVtZW50Tm9kZSwgbWV0YVN1YnN0aXR1dGlvbnMpO1xuXG4gICAgcHJlbWlzZU5vblRlcm1pbmFsTm9kZU1hdGNoZXMgPSBwcmVtaXNlTWV0YXN0YXRlbWVudE5vZGVNYXRjaGVzOyAvLy9cbiAgfSBlbHNlIGlmIChydWxlTmFtZSA9PT0gcHJlbWlzZVJ1bGVOYW1lKSB7XG4gICAgY29uc3QgY2hpbGROb2RlcyA9IG5vblRlcm1pbmFsTm9kZS5nZXRDaGlsZE5vZGVzKCksXG4gICAgICAgICAgcHJlbWlzZUNoaWxkTm9kZXMgPSBwcmVtaXNlTm9uVGVybWluYWxOb2RlLmdldENoaWxkTm9kZXMoKSxcbiAgICAgICAgICBub2RlcyA9IGNoaWxkTm9kZXMsIC8vL1xuICAgICAgICAgIHByZW1pc2VOb2RlcyA9IHByZW1pc2VDaGlsZE5vZGVzLCAvLy9cbiAgICAgICAgICBwcmVtaXNlQ2hpbGROb2Rlc01hdGNoZXMgPSBtZXRhTWF0Y2hQcmVtaXNlTm9kZXMocHJlbWlzZU5vZGVzLCBub2RlcywgbWV0YVN1YnN0aXR1dGlvbnMpO1xuXG4gICAgcHJlbWlzZU5vblRlcm1pbmFsTm9kZU1hdGNoZXMgPSBwcmVtaXNlQ2hpbGROb2Rlc01hdGNoZXM7IC8vL1xuICB9XG5cbiAgcmV0dXJuIHByZW1pc2VOb25UZXJtaW5hbE5vZGVNYXRjaGVzO1xufVxuXG5mdW5jdGlvbiBtZXRhTWF0Y2hQcmVtaXNlTWV0YXZhcmlhYmxlTm9kZShwcmVtaXNlTWV0YXZhcmlhYmxlTm9kZSwgbm9kZXMsIG1ldGFTdWJzdGl0dXRpb25zKSB7XG4gIGxldCBwcmVtaXNlTWV0YXZhcmlhYmxlTm9kZU1hdGNoZXM7XG5cbiAgY29uc3QgcHJlbWlzZU1ldGF2YXJpYWJsZU5hbWUgPSBtZXRhdmFyaWFibGVOYW1lRnJvbU1ldGF2YXJpYWJsZU5vZGUocHJlbWlzZU1ldGF2YXJpYWJsZU5vZGUpLFxuICAgICAgICBtZXRhU3Vic3RpdHV0aW9uID0gbWV0YVN1YnN0aXR1dGlvbnMuZmluZCgobWV0YVN1YnN0aXR1dGlvbikgPT4ge1xuICAgICAgICAgIGNvbnN0IG1ldGF2YXJpYWJsZU5hbWUgPSBtZXRhU3Vic3RpdHV0aW9uLmdldE1ldGF2YXJpYWJsZU5hbWUoKTtcblxuICAgICAgICAgIGlmIChtZXRhdmFyaWFibGVOYW1lID09PSBwcmVtaXNlTWV0YXZhcmlhYmxlTmFtZSkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9KSB8fCBudWxsO1xuXG4gIGlmIChtZXRhU3Vic3RpdHV0aW9uICE9PSBudWxsKSB7XG4gICAgY29uc3QgbWV0YVN1YnN0aXR1dGlvbk5vZGVzTWF0Y2ggPSBtZXRhU3Vic3RpdHV0aW9uLm1hdGNoTm9kZXMobm9kZXMpO1xuXG4gICAgcHJlbWlzZU1ldGF2YXJpYWJsZU5vZGVNYXRjaGVzID0gbWV0YVN1YnN0aXR1dGlvbk5vZGVzTWF0Y2g7ICAvLy9cbiAgfSBlbHNlIHtcbiAgICBjb25zdCBtZXRhdmFyaWFibGVOYW1lID0gcHJlbWlzZU1ldGF2YXJpYWJsZU5hbWUsIC8vL1xuICAgICAgICAgIG1ldGFTdWJzdGl0dXRpb24gPSBNZXRhU3Vic3RpdHV0aW9uLmZyb21NZXRhdmFyaWFibGVOYW1lQW5kTm9kZXMobWV0YXZhcmlhYmxlTmFtZSwgbm9kZXMpO1xuXG4gICAgbWV0YVN1YnN0aXR1dGlvbnMucHVzaChtZXRhU3Vic3RpdHV0aW9uKTtcblxuICAgIHByZW1pc2VNZXRhdmFyaWFibGVOb2RlTWF0Y2hlcyA9IHRydWU7XG4gIH1cblxuICByZXR1cm4gcHJlbWlzZU1ldGF2YXJpYWJsZU5vZGVNYXRjaGVzO1xufVxuXG5mdW5jdGlvbiBtZXRhTWF0Y2hQcmVtaXNlTWV0YXN0YXRlbWVudE5vZGUocHJlbWlzZU1ldGFzdGF0ZW1lbnROb2RlLCBtZXRhc3RhdGVtZW50Tm9kZSwgbWV0YVN1YnN0aXR1dGlvbnMpIHtcbiAgbGV0IHByZW1pc2VNZXRhc3RhdGVtZW50Tm9kZU1hdGNoZXMgPSBmYWxzZTtcblxuICBjb25zdCBwcmVtaXNlTm9uVGVybWluYWxOb2RlID0gcHJlbWlzZU1ldGFzdGF0ZW1lbnROb2RlLCAgLy8vXG4gICAgICAgIHByZW1pc2VDaGlsZE5vZGVzID0gcHJlbWlzZU5vblRlcm1pbmFsTm9kZS5nZXRDaGlsZE5vZGVzKCksXG4gICAgICAgIHByZW1pc2VDaGlsZE5vZGVzTGVuZ3RoID0gcHJlbWlzZUNoaWxkTm9kZXMubGVuZ3RoO1xuXG4gIGlmIChwcmVtaXNlQ2hpbGROb2Rlc0xlbmd0aCA9PT0gMSkge1xuICAgIGNvbnN0IGZpcnN0UHJlbWlzZUNoaWxkTm9kZSA9IGZpcnN0KHByZW1pc2VDaGlsZE5vZGVzKSxcbiAgICAgICAgICBwcmVtaXNlQ2hpbGROb2RlID0gZmlyc3RQcmVtaXNlQ2hpbGROb2RlLCAgLy8vXG4gICAgICAgICAgcHJlbWlzZUNoaWxkTm9kZU5vblRlcm1pbmFsTm9kZSA9IHByZW1pc2VDaGlsZE5vZGUuaXNOb25UZXJtaW5hbE5vZGUoKTtcblxuICAgIGlmIChwcmVtaXNlQ2hpbGROb2RlTm9uVGVybWluYWxOb2RlKSB7XG4gICAgICBjb25zdCBwcmVtaXNlTm9uVGVybWluYWxDaGlsZE5vZGUgPSBwcmVtaXNlQ2hpbGROb2RlLCAgLy8vXG4gICAgICAgICAgICBwcmVtaXNlTm9uVGVybWluYWxDaGlsZE5vZGVSdWxlTmFtZSA9IHByZW1pc2VOb25UZXJtaW5hbENoaWxkTm9kZS5nZXRSdWxlTmFtZSgpLFxuICAgICAgICAgICAgcHJlbWlzZU5vblRlcm1pbmFsQ2hpbGROb2RlUnVsZU5hbWVNZXRhdmFyaWFibGVSdWxlTmFtZSA9IChwcmVtaXNlTm9uVGVybWluYWxDaGlsZE5vZGVSdWxlTmFtZSA9PT0gTUVUQVZBUklBQkxFX1JVTEVfTkFNRSk7XG5cbiAgICAgIGlmIChwcmVtaXNlTm9uVGVybWluYWxDaGlsZE5vZGVSdWxlTmFtZU1ldGF2YXJpYWJsZVJ1bGVOYW1lKSB7XG4gICAgICAgIGNvbnN0IHByZW1pc2VNZXRhdmFyaWFibGVOb2RlID0gcHJlbWlzZU5vblRlcm1pbmFsQ2hpbGROb2RlLCAgLy8vXG4gICAgICAgICAgICAgIG5vblRlcm1pbmFsTm9kZSA9IG1ldGFzdGF0ZW1lbnROb2RlLCAgLy8vXG4gICAgICAgICAgICAgIGNoaWxkTm9kZXMgPSBub25UZXJtaW5hbE5vZGUuZ2V0Q2hpbGROb2RlcygpLFxuICAgICAgICAgICAgICBub2RlcyA9IGNoaWxkTm9kZXMsIC8vL1xuICAgICAgICAgICAgICBwcmVtaXNlTWV0YVZhcmlhYmxlTm9kZU1hdGNoZXMgPSBtZXRhTWF0Y2hQcmVtaXNlTWV0YXZhcmlhYmxlTm9kZShwcmVtaXNlTWV0YXZhcmlhYmxlTm9kZSwgbm9kZXMsIG1ldGFTdWJzdGl0dXRpb25zKTtcblxuICAgICAgICBwcmVtaXNlTWV0YXN0YXRlbWVudE5vZGVNYXRjaGVzID0gcHJlbWlzZU1ldGFWYXJpYWJsZU5vZGVNYXRjaGVzOyAvLy9cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gcHJlbWlzZU1ldGFzdGF0ZW1lbnROb2RlTWF0Y2hlcztcbn1cbiJdLCJuYW1lcyI6WyJQcmVtaXNlIiwibWV0YXN0YXRlbWVudE5vZGVzUXVlcnkiLCJub2Rlc1F1ZXJ5IiwibWV0YVN1YnByb29mQXNzZXJ0aW9uTm9kZVF1ZXJ5Iiwibm9kZVF1ZXJ5IiwidW5xdWFsaWZpZWRTdGF0ZW1lbnRTdGF0ZW1lbnROb2Rlc1F1ZXJ5IiwidW5xdWFsaWZpZWRNZXRhc3RhdGVtZW50TWV0YXN0YXRlbWVudE5vZGVzUXVlcnkiLCJxdWFsaWZpZWRPclVucXVhbGlmaWVkU3RhdGVtZW50U3RhdGVtZW50Tm9kZVF1ZXJ5IiwicXVhbGlmaWVkT3JVbnF1YWxpZmllZE1ldGFzdGF0ZW1lbnRNZXRhc3RhdGVtZW50Tm9kZVF1ZXJ5IiwibWV0YXN0YXRlbWVudE5vZGUiLCJnZXRNZXRhc3RhdGVtZW50Tm9kZSIsIm1hdGNoU3VicHJvb2ZOb2RlIiwic3VicHJvb2ZOb2RlIiwic3Vic3RpdHV0aW9ucyIsInN1YnByb29mTm9kZU1hdGNoZXMiLCJzdWJwcm9vZkFzc2VydGlvbk5vZGUiLCJtZXRhU3VicHJvb2ZBc3NlcnRpb25NZXRhc3RhdGVtZW50Tm9kZXMiLCJ1bnF1YWxpZmllZFN0YXRlbWVudFN0YXRlbWVudE5vZGVzIiwicXVhbGlmaWVkT3JVbnF1YWxpZmllZFN0YXRlbWVudFN0YXRlbWVudE5vZGUiLCJzdGF0ZW1lbnROb2RlcyIsInN0YXRlbWVudE5vZGVzTGVuZ3RoIiwibGVuZ3RoIiwibWV0YVN1YnByb29mQXNzZXJ0aW9uTWV0YXN0YXRlbWVudE5vZGVzTGVuZ3RoIiwiZXZlcnkiLCJtZXRhU3VicHJvb2ZBc3NlcnRpb25NZXRhc3RhdGVtZW50Tm9kZSIsImluZGV4Iiwic3RhdGVtZW50Tm9kZSIsIm5vblRlcm1pbmFsTm9kZSIsInByZW1pc2VOb25UZXJtaW5hbE5vZGUiLCJwcmVtaXNlTm9uVGVybWluYWxOb2RlTWF0Y2hlcyIsIm1hdGNoUHJlbWlzZU5vblRlcm1pbmFsTm9kZSIsIm1hdGNoU3RhdGVtZW50Tm9kZSIsInN0YXRlbWVudE5vZGVNYXRjaGVzIiwibWF0Y2hNZXRhU3VicHJvb2ZOb2RlIiwibWV0YVN1YnByb29mTm9kZSIsIm1ldGFTdWJzdGl0dXRpb25zIiwibWV0YVN1YnByb29mTm9kZU1hdGNoZXMiLCJtZXRhU3VicHJvb2ZBc3NlcnRpb25Ob2RlIiwidW5xdWFsaWZpZWRNZXRhc3RhdGVtZW50TWV0YXN0YXRlbWVudE5vZGVzIiwicXVhbGlmaWVkT3JVbnF1YWxpZmllZE1ldGFzdGF0ZW1lbnRNZXRhc3RhdGVtZW50Tm9kZSIsIm1ldGFzdGF0ZW1lbnROb2RlcyIsIm1ldGFzdGF0ZW1lbnROb2Rlc0xlbmd0aCIsIm1ldGFNYXRjaFByZW1pc2VOb25UZXJtaW5hbE5vZGUiLCJtYXRjaE1ldGFzdGF0ZW1lbnROb2RlIiwibWV0YXN0YXRlbWVudE5vZGVNYXRjaGVzIiwidG9KU09OIiwibWV0YXN0YXRlbWVudFN0cmluZyIsIm5vZGVBc1N0cmluZyIsIm1ldGFzdGF0ZW1lbnQiLCJqc29uIiwiZnJvbUpTT04iLCJyZWxlYXNlQ29udGV4dCIsIm1ldGFzdGF0ZW1lbnROb2RlRnJvbU1ldGFzdGF0ZW1lbnRTdHJpbmciLCJwcmVtaXNlIiwiZnJvbU1ldGFzdGF0ZW1lbnROb2RlIiwibWF0Y2hQcmVtaXNlTm9kZSIsInByZW1pc2VOb2RlIiwibm9kZSIsInByZW1pc2VOb2RlTWF0Y2hlcyIsIm5vZGVUZXJtaW5hbE5vZGUiLCJpc1Rlcm1pbmFsTm9kZSIsInJ1bGVOb2RlVGVybWluYWxOb2RlIiwidGVybWluYWxOb2RlIiwicHJlbWlzZVRlcm1pbmFsTm9kZSIsInByZW1pc2VUZXJtaW5hbE5vZGVNYXRjaGVzIiwibWF0Y2hQcmVtaXNlVGVybWluYWxOb2RlIiwibWF0Y2hQcmVtaXNlTm9kZXMiLCJwcmVtaXNlTm9kZXMiLCJub2RlcyIsInByZW1pc2VOb2Rlc01hdGNoZXMiLCJub2Rlc0xlbmd0aCIsInByZW1pc2VOb2Rlc0xlbmd0aCIsIm1hdGNoZXMiLCJtYXRjaCIsInJ1bGVOYW1lIiwiZ2V0UnVsZU5hbWUiLCJwcmVtaXNlUnVsZU5hbWUiLCJydWxlTmFtZVN0YXRlbWVudFJ1bGVOYW1lIiwiU1RBVEVNRU5UX1JVTEVfTkFNRSIsInByZW1pc2VSdWxlTmFtZU1ldGFzdGF0ZW1lbnRSdWxlTmFtZSIsIk1FVEFTVEFURU1FTlRfUlVMRV9OQU1FIiwicHJlbWlzZU1ldGFzdGF0ZW1lbnROb2RlIiwicHJlbWlzZU1ldGFzdGF0ZW1lbnROb2RlTWF0Y2hlcyIsIm1hdGNoUHJlbWlzZU1ldGFzdGF0ZW1lbnROb2RlIiwiY2hpbGROb2RlcyIsImdldENoaWxkTm9kZXMiLCJwcmVtaXNlQ2hpbGROb2RlcyIsInByZW1pc2VDaGlsZE5vZGVzTWF0Y2hlcyIsIm1hdGNoUHJlbWlzZU1ldGF2YXJpYWJsZU5vZGUiLCJwcmVtaXNlTWV0YXZhcmlhYmxlTm9kZSIsInByZW1pc2VNZXRhdmFyaWFibGVOb2RlTWF0Y2hlcyIsInByZW1pc2VNZXRhdmFyaWFibGVOYW1lIiwibWV0YXZhcmlhYmxlTmFtZUZyb21NZXRhdmFyaWFibGVOb2RlIiwic3Vic3RpdHV0aW9uIiwiZmluZCIsIm1ldGF2YXJpYWJsZU5hbWUiLCJnZXRNZXRhdmFyaWFibGVOYW1lIiwic3Vic3RpdHV0aW9uTm9kZXNNYXRjaCIsIm1hdGNoTm9kZXMiLCJTdWJzdGl0dXRpb24iLCJmcm9tTWV0YXZhcmlhYmxlTmFtZUFuZE5vZGVzIiwicHVzaCIsInByZW1pc2VDaGlsZE5vZGVzTGVuZ3RoIiwiZmlyc3RQcmVtaXNlQ2hpbGROb2RlIiwiZmlyc3QiLCJwcmVtaXNlQ2hpbGROb2RlIiwicHJlbWlzZUNoaWxkTm9kZU5vblRlcm1pbmFsTm9kZSIsImlzTm9uVGVybWluYWxOb2RlIiwicHJlbWlzZU5vblRlcm1pbmFsQ2hpbGROb2RlIiwicHJlbWlzZU5vblRlcm1pbmFsQ2hpbGROb2RlUnVsZU5hbWUiLCJwcmVtaXNlTm9uVGVybWluYWxDaGlsZE5vZGVSdWxlTmFtZU1ldGF2YXJpYWJsZVJ1bGVOYW1lIiwiTUVUQVZBUklBQkxFX1JVTEVfTkFNRSIsInByZW1pc2VNZXRhVmFyaWFibGVOb2RlTWF0Y2hlcyIsIm1ldGFNYXRjaFByZW1pc2VOb2RlIiwibWV0YU1hdGNoUHJlbWlzZVRlcm1pbmFsTm9kZSIsIm1ldGFNYXRjaFByZW1pc2VOb2RlcyIsInJ1bGVOYW1lTWV0YXN0YXRlbWVudFJ1bGVOYW1lIiwibWV0YU1hdGNoUHJlbWlzZU1ldGFzdGF0ZW1lbnROb2RlIiwibWV0YU1hdGNoUHJlbWlzZU1ldGF2YXJpYWJsZU5vZGUiLCJtZXRhU3Vic3RpdHV0aW9uIiwibWV0YVN1YnN0aXR1dGlvbk5vZGVzTWF0Y2giLCJNZXRhU3Vic3RpdHV0aW9uIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQW1CcUJBOzs7aUVBakJJO3FFQUNJO3FCQUVQO3NCQUNPO3FCQUNTO3lCQUcrQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFckYsSUFBTUMsMEJBQTBCQyxJQUFBQSxpQkFBVSxFQUFDLHlDQUNyQ0MsaUNBQWlDQyxJQUFBQSxnQkFBUyxFQUFDLDBDQUMzQ0MsMENBQTBDSCxJQUFBQSxpQkFBVSxFQUFDLDhDQUNyREksa0RBQWtESixJQUFBQSxpQkFBVSxFQUFDLDBEQUM3REssb0RBQW9ESCxJQUFBQSxnQkFBUyxFQUFDLG1HQUM5REksNERBQTRESixJQUFBQSxnQkFBUyxFQUFDO0FBRTdELElBQUEsQUFBTUosd0JBdUhsQixBQXZIWTthQUFNQSxRQUNQUyxpQkFBaUI7OEJBRFZUO1FBRWpCLElBQUksQ0FBQ1MsaUJBQWlCLEdBQUdBOztpQkFGUlQ7O1lBS25CVSxLQUFBQTttQkFBQUEsU0FBQUEsdUJBQXVCO2dCQUNyQixPQUFPLElBQUksQ0FBQ0QsaUJBQWlCO1lBQy9COzs7WUFFQUUsS0FBQUE7bUJBQUFBLFNBQUFBLGtCQUFrQkMsWUFBWSxFQUFFQyxhQUFhLEVBQUU7Z0JBQzdDLElBQUlDLHNCQUFzQixLQUFLO2dCQUUvQixJQUFNQyx3QkFBd0JaLCtCQUErQixJQUFJLENBQUNNLGlCQUFpQjtnQkFFbkYsSUFBSU0sMEJBQTBCLElBQUksRUFBRTtvQkFDbEMsSUFBTUMsMENBQTBDZix3QkFBd0JjLHdCQUNsRUUscUNBQXFDWix3Q0FBd0NPLGVBQzdFTSwrQ0FBK0NYLGtEQUFrREssZUFDakdPLGlCQUFpQixBQUNmLG1CQUFHRiwyQ0FEWTt3QkFFZkM7cUJBQ0QsR0FDREUsdUJBQXVCRCxlQUFlRSxNQUFNLEVBQzVDQyxnREFBZ0ROLHdDQUF3Q0ssTUFBTTtvQkFFcEcsSUFBSUQseUJB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