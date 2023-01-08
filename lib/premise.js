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
    var ruleName = nonTerminalNode.getRuleName(), childNodes = nonTerminalNode.getChildNodes(), premiseNonTerminalNodeRuleName = premiseNonTerminalNode.getRuleName(), premiseNonTerminalNodeChildNodes = premiseNonTerminalNode.getChildNodes(), ruleNameStatementRuleName = ruleName === _ruleNames.STATEMENT_RULE_NAME, premiseNonTerminalNodeRuleNameMetastatementRuleName = premiseNonTerminalNodeRuleName === _ruleNames.METASTATEMENT_RULE_NAME;
    if (ruleNameStatementRuleName && premiseNonTerminalNodeRuleNameMetastatementRuleName) {
        var statementNode = nonTerminalNode, premiseMetastatementNode = premiseNonTerminalNode, premiseMetastatementNodeMatches = matchPremiseMetastatementNode(premiseMetastatementNode, statementNode, substitutions);
        if (premiseMetastatementNodeMatches) {
            premiseNonTerminalNodeMatches = true;
        } else {
            var nodes = childNodes, premiseNodes = premiseNonTerminalNodeChildNodes, premiseNonTerminalNodeChildNodesMatches = matchPremiseNodes(premiseNodes, nodes, substitutions);
            premiseNonTerminalNodeMatches = premiseNonTerminalNodeChildNodesMatches; ///
        }
    } else if (ruleName === premiseNonTerminalNodeRuleName) {
        var nodes1 = childNodes, premiseNodes1 = premiseNonTerminalNodeChildNodes, premiseNonTerminalNodeChildNodesMatches1 = matchPremiseNodes(premiseNodes1, nodes1, substitutions);
        premiseNonTerminalNodeMatches = premiseNonTerminalNodeChildNodesMatches1; ///
    }
    return premiseNonTerminalNodeMatches;
}
function matchPremiseMetavariableNode(premiseMetavariableNode, statementNode, substitutions) {
    var premiseMetavariableNodeMatches;
    var premiseMetavariableName = (0, _query.metavariableNameFromMetavariableNode)(premiseMetavariableNode), substitution = substitutions.find(function(substitution) {
        var metavariableName = substitution.getMetavariableName();
        if (metavariableName === premiseMetavariableName) {
            return true;
        }
    }) || null;
    if (substitution !== null) {
        var substitutionNodesMatch = substitution.matchStatementNode(statementNode);
        premiseMetavariableNodeMatches = substitutionNodesMatch; ///
    } else {
        var metavariableName = premiseMetavariableName, substitution1 = _substitution.default.fromMetavariableNameAndStatementNode(metavariableName, statementNode);
        substitutions.push(substitution1);
        premiseMetavariableNodeMatches = true;
    }
    return premiseMetavariableNodeMatches;
}
function matchPremiseMetastatementNode(premiseMetastatementNode, statementNode, substitutions) {
    var premiseMetastatementNodeMatches = false;
    var premiseNonTerminalNode = premiseMetastatementNode, premiseNonTerminalNodeChildNodes = premiseNonTerminalNode.getChildNodes(), premiseNonTerminalNodeChildNodesLength = premiseNonTerminalNodeChildNodes.length;
    if (premiseNonTerminalNodeChildNodesLength === 1) {
        var firstPremiseChildNode = (0, _array.first)(premiseNonTerminalNodeChildNodes), premiseChildNode = firstPremiseChildNode, premiseChildNodeNonTerminalNode = premiseChildNode.isNonTerminalNode();
        if (premiseChildNodeNonTerminalNode) {
            var premiseNonTerminalChildNode = premiseChildNode, premiseNonTerminalChildNodeRuleName = premiseNonTerminalChildNode.getRuleName(), premiseNonTerminalChildNodeRuleNameMetavariableRuleName = premiseNonTerminalChildNodeRuleName === _ruleNames.METAVARIABLE_RULE_NAME;
            if (premiseNonTerminalChildNodeRuleNameMetavariableRuleName) {
                var premiseMetavariableNode = premiseNonTerminalChildNode, premiseMetaVariableNodeMatches = matchPremiseMetavariableNode(premiseMetavariableNode, statementNode, substitutions);
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
    var ruleName = nonTerminalNode.getRuleName(), premiseNonTerminalNodeRuleName = premiseNonTerminalNode.getRuleName(), ruleNameMetastatementRuleName = ruleName === _ruleNames.METASTATEMENT_RULE_NAME, premiseNonTerminalNodeRuleNameMetastatementRuleName = premiseNonTerminalNodeRuleName === _ruleNames.METASTATEMENT_RULE_NAME;
    if (ruleNameMetastatementRuleName && premiseNonTerminalNodeRuleNameMetastatementRuleName) {
        var metastatementNode = nonTerminalNode, premiseMetastatementNode = premiseNonTerminalNode, premiseMetastatementNodeMatches = metaMatchPremiseMetastatementNode(premiseMetastatementNode, metastatementNode, metaSubstitutions);
        premiseNonTerminalNodeMatches = premiseMetastatementNodeMatches; ///
    } else if (ruleName === premiseNonTerminalNodeRuleName) {
        var childNodes = nonTerminalNode.getChildNodes(), premiseNonTerminalNodeChildNodes = premiseNonTerminalNode.getChildNodes(), nodes = childNodes, premiseNodes = premiseNonTerminalNodeChildNodes, premiseNonTerminalNodeChildNodesMatches = metaMatchPremiseNodes(premiseNodes, nodes, metaSubstitutions);
        premiseNonTerminalNodeMatches = premiseNonTerminalNodeChildNodesMatches; ///
    }
    return premiseNonTerminalNodeMatches;
}
function metaMatchPremiseMetavariableNode(premiseMetavariableNode, metastatementNode, metaSubstitutions) {
    var premiseMetavariableNodeMatches;
    var premiseMetavariableName = (0, _query.metavariableNameFromMetavariableNode)(premiseMetavariableNode), metaSubstitution = metaSubstitutions.find(function(metaSubstitution) {
        var metavariableName = metaSubstitution.getMetavariableName();
        if (metavariableName === premiseMetavariableName) {
            return true;
        }
    }) || null;
    if (metaSubstitution !== null) {
        var metaSubstitutionNodesMatch = metaSubstitution.matchMetastatementNode(metastatementNode);
        premiseMetavariableNodeMatches = metaSubstitutionNodesMatch; ///
    } else {
        var metavariableName = premiseMetavariableName, metaSubstitution1 = _metaSubstitution.default.fromMetavariableNameAndMetastatementNode(metavariableName, metastatementNode);
        metaSubstitutions.push(metaSubstitution1);
        premiseMetavariableNodeMatches = true;
    }
    return premiseMetavariableNodeMatches;
}
function metaMatchPremiseMetastatementNode(premiseMetastatementNode, metastatementNode, metaSubstitutions) {
    var premiseMetastatementNodeMatches = false;
    var premiseNonTerminalNode = premiseMetastatementNode, premiseNonTerminalNodeChildNodes = premiseNonTerminalNode.getChildNodes(), premiseNonTerminalNodeChildNodesLength = premiseNonTerminalNodeChildNodes.length;
    if (premiseNonTerminalNodeChildNodesLength === 1) {
        var firstPremiseChildNode = (0, _array.first)(premiseNonTerminalNodeChildNodes), premiseChildNode = firstPremiseChildNode, premiseChildNodeNonTerminalNode = premiseChildNode.isNonTerminalNode();
        if (premiseChildNodeNonTerminalNode) {
            var premiseNonTerminalChildNode = premiseChildNode, premiseNonTerminalChildNodeRuleName = premiseNonTerminalChildNode.getRuleName(), premiseNonTerminalChildNodeRuleNameMetavariableRuleName = premiseNonTerminalChildNodeRuleName === _ruleNames.METAVARIABLE_RULE_NAME;
            if (premiseNonTerminalChildNodeRuleNameMetavariableRuleName) {
                var premiseMetavariableNode = premiseNonTerminalChildNode, premiseMetaVariableNodeMatches = metaMatchPremiseMetavariableNode(premiseMetavariableNode, metastatementNode, metaSubstitutions);
                premiseMetastatementNodeMatches = premiseMetaVariableNodeMatches; ///
            }
        }
    }
    return premiseMetastatementNodeMatches;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9wcmVtaXNlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgU3Vic3RpdHV0aW9uIGZyb20gXCIuL3N1YnN0aXR1dGlvblwiO1xuaW1wb3J0IE1ldGFTdWJzdGl0dXRpb24gZnJvbSBcIi4vbWV0YVN1YnN0aXR1dGlvblwiO1xuXG5pbXBvcnQgeyBmaXJzdCB9IGZyb20gXCIuL3V0aWxpdGllcy9hcnJheVwiO1xuaW1wb3J0IHsgbm9kZUFzU3RyaW5nIH0gZnJvbSBcIi4vdXRpbGl0aWVzL3N0cmluZ1wiO1xuaW1wb3J0IHsgbm9kZVF1ZXJ5LCBub2Rlc1F1ZXJ5IH0gZnJvbSBcIi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5pbXBvcnQgeyBtZXRhdmFyaWFibGVOYW1lRnJvbU1ldGF2YXJpYWJsZU5vZGUgfSBmcm9tIFwiLi91dGlsaXRpZXMvcXVlcnlcIjtcbmltcG9ydCB7IG1ldGFzdGF0ZW1lbnROb2RlRnJvbU1ldGFzdGF0ZW1lbnRTdHJpbmcgfSBmcm9tIFwiLi91dGlsaXRpZXMvc3RyaW5nXCI7XG5pbXBvcnQgeyBTVEFURU1FTlRfUlVMRV9OQU1FLCBNRVRBU1RBVEVNRU5UX1JVTEVfTkFNRSwgTUVUQVZBUklBQkxFX1JVTEVfTkFNRSB9IGZyb20gXCIuL3J1bGVOYW1lc1wiO1xuXG5jb25zdCBtZXRhc3RhdGVtZW50Tm9kZXNRdWVyeSA9IG5vZGVzUXVlcnkoXCIvbWV0YVN1YnByb29mQXNzZXJ0aW9uL21ldGFzdGF0ZW1lbnRcIiksXG4gICAgICBtZXRhU3VicHJvb2ZBc3NlcnRpb25Ob2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvbWV0YXN0YXRlbWVudC9tZXRhU3VicHJvb2ZBc3NlcnRpb24hXCIpLFxuICAgICAgdW5xdWFsaWZpZWRTdGF0ZW1lbnRTdGF0ZW1lbnROb2Rlc1F1ZXJ5ID0gbm9kZXNRdWVyeShcIi9zdWJwcm9vZi91bnF1YWxpZmllZFN0YXRlbWVudC9zdGF0ZW1lbnQhXCIpLFxuICAgICAgdW5xdWFsaWZpZWRNZXRhc3RhdGVtZW50TWV0YXN0YXRlbWVudE5vZGVzUXVlcnkgPSBub2Rlc1F1ZXJ5KFwiL21ldGFTdWJwcm9vZi91bnF1YWxpZmllZE1ldGFzdGF0ZW1lbnQvbWV0YXN0YXRlbWVudCFcIiksXG4gICAgICBxdWFsaWZpZWRPclVucXVhbGlmaWVkU3RhdGVtZW50U3RhdGVtZW50Tm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3N1YnByb29mL2Rlcml2YXRpb258YWJyaWRnZWREZXJpdmF0aW9uL3F1YWxpZmllZFN0YXRlbWVudHx1bnF1YWxpZmllZFN0YXRlbWVudFstMV0vc3RhdGVtZW50IVwiKSxcbiAgICAgIHF1YWxpZmllZE9yVW5xdWFsaWZpZWRNZXRhc3RhdGVtZW50TWV0YXN0YXRlbWVudE5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9tZXRhU3VicHJvb2YvbWV0YURlcml2YXRpb258YWJyaWRnZWRNZXRhRGVyaXZhdGlvbi9xdWFsaWZpZWRNZXRhc3RhdGVtZW50fHVucXVhbGlmaWVkTWV0YXN0YXRlbWVudFstMV0vbWV0YXN0YXRlbWVudCFcIik7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFByZW1pc2Uge1xuICBjb25zdHJ1Y3RvcihtZXRhc3RhdGVtZW50Tm9kZSkge1xuICAgIHRoaXMubWV0YXN0YXRlbWVudE5vZGUgPSBtZXRhc3RhdGVtZW50Tm9kZTtcbiAgfVxuXG4gIGdldE1ldGFzdGF0ZW1lbnROb2RlKCkge1xuICAgIHJldHVybiB0aGlzLm1ldGFzdGF0ZW1lbnROb2RlO1xuICB9XG5cbiAgbWF0Y2hTdWJwcm9vZk5vZGUoc3VicHJvb2ZOb2RlLCBzdWJzdGl0dXRpb25zKSB7XG4gICAgbGV0IHN1YnByb29mTm9kZU1hdGNoZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IHN1YnByb29mQXNzZXJ0aW9uTm9kZSA9IG1ldGFTdWJwcm9vZkFzc2VydGlvbk5vZGVRdWVyeSh0aGlzLm1ldGFzdGF0ZW1lbnROb2RlKTtcblxuICAgIGlmIChzdWJwcm9vZkFzc2VydGlvbk5vZGUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IG1ldGFTdWJwcm9vZkFzc2VydGlvbk1ldGFzdGF0ZW1lbnROb2RlcyA9IG1ldGFzdGF0ZW1lbnROb2Rlc1F1ZXJ5KHN1YnByb29mQXNzZXJ0aW9uTm9kZSksXG4gICAgICAgICAgICB1bnF1YWxpZmllZFN0YXRlbWVudFN0YXRlbWVudE5vZGVzID0gdW5xdWFsaWZpZWRTdGF0ZW1lbnRTdGF0ZW1lbnROb2Rlc1F1ZXJ5KHN1YnByb29mTm9kZSksXG4gICAgICAgICAgICBxdWFsaWZpZWRPclVucXVhbGlmaWVkU3RhdGVtZW50U3RhdGVtZW50Tm9kZSA9IHF1YWxpZmllZE9yVW5xdWFsaWZpZWRTdGF0ZW1lbnRTdGF0ZW1lbnROb2RlUXVlcnkoc3VicHJvb2ZOb2RlKSxcbiAgICAgICAgICAgIHN0YXRlbWVudE5vZGVzID0gW1xuICAgICAgICAgICAgICAuLi51bnF1YWxpZmllZFN0YXRlbWVudFN0YXRlbWVudE5vZGVzLFxuICAgICAgICAgICAgICBxdWFsaWZpZWRPclVucXVhbGlmaWVkU3RhdGVtZW50U3RhdGVtZW50Tm9kZVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIHN0YXRlbWVudE5vZGVzTGVuZ3RoID0gc3RhdGVtZW50Tm9kZXMubGVuZ3RoLFxuICAgICAgICAgICAgbWV0YVN1YnByb29mQXNzZXJ0aW9uTWV0YXN0YXRlbWVudE5vZGVzTGVuZ3RoID0gbWV0YVN1YnByb29mQXNzZXJ0aW9uTWV0YXN0YXRlbWVudE5vZGVzLmxlbmd0aDtcblxuICAgICAgaWYgKHN0YXRlbWVudE5vZGVzTGVuZ3RoID09PSBtZXRhU3VicHJvb2ZBc3NlcnRpb25NZXRhc3RhdGVtZW50Tm9kZXNMZW5ndGgpIHtcbiAgICAgICAgc3VicHJvb2ZOb2RlTWF0Y2hlcyA9IG1ldGFTdWJwcm9vZkFzc2VydGlvbk1ldGFzdGF0ZW1lbnROb2Rlcy5ldmVyeSgobWV0YVN1YnByb29mQXNzZXJ0aW9uTWV0YXN0YXRlbWVudE5vZGUsIGluZGV4KSA9PiB7XG4gICAgICAgICAgY29uc3Qgc3RhdGVtZW50Tm9kZSA9IHN0YXRlbWVudE5vZGVzW2luZGV4XSxcbiAgICAgICAgICAgICAgICBub25UZXJtaW5hbE5vZGUgPSBzdGF0ZW1lbnROb2RlLCAvLy9cbiAgICAgICAgICAgICAgICBwcmVtaXNlTm9uVGVybWluYWxOb2RlID0gbWV0YVN1YnByb29mQXNzZXJ0aW9uTWV0YXN0YXRlbWVudE5vZGUsICAvLy9cbiAgICAgICAgICAgICAgICBwcmVtaXNlTm9uVGVybWluYWxOb2RlTWF0Y2hlcyA9IG1hdGNoUHJlbWlzZU5vblRlcm1pbmFsTm9kZShwcmVtaXNlTm9uVGVybWluYWxOb2RlLCBub25UZXJtaW5hbE5vZGUsIHN1YnN0aXR1dGlvbnMpO1xuXG4gICAgICAgICAgaWYgKHByZW1pc2VOb25UZXJtaW5hbE5vZGVNYXRjaGVzKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBzdWJwcm9vZk5vZGVNYXRjaGVzO1xuICB9XG5cbiAgbWF0Y2hTdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUsIHN1YnN0aXR1dGlvbnMpIHtcbiAgICBjb25zdCBub25UZXJtaW5hbE5vZGUgPSBzdGF0ZW1lbnROb2RlLCAgLy8vXG4gICAgICAgICAgcHJlbWlzZU5vblRlcm1pbmFsTm9kZSA9IHRoaXMubWV0YXN0YXRlbWVudE5vZGUsICAvLy9cbiAgICAgICAgICBwcmVtaXNlTm9uVGVybWluYWxOb2RlTWF0Y2hlcyA9IG1hdGNoUHJlbWlzZU5vblRlcm1pbmFsTm9kZShwcmVtaXNlTm9uVGVybWluYWxOb2RlLCBub25UZXJtaW5hbE5vZGUsIHN1YnN0aXR1dGlvbnMpLFxuICAgICAgICAgIHN0YXRlbWVudE5vZGVNYXRjaGVzID0gcHJlbWlzZU5vblRlcm1pbmFsTm9kZU1hdGNoZXM7IC8vL1xuXG4gICAgcmV0dXJuIHN0YXRlbWVudE5vZGVNYXRjaGVzO1xuICB9XG5cbiAgbWF0Y2hNZXRhU3VicHJvb2ZOb2RlKG1ldGFTdWJwcm9vZk5vZGUsIG1ldGFTdWJzdGl0dXRpb25zKSB7XG4gICAgbGV0IG1ldGFTdWJwcm9vZk5vZGVNYXRjaGVzID0gZmFsc2U7XG5cbiAgICBjb25zdCBtZXRhU3VicHJvb2ZBc3NlcnRpb25Ob2RlID0gbWV0YVN1YnByb29mQXNzZXJ0aW9uTm9kZVF1ZXJ5KHRoaXMubWV0YXN0YXRlbWVudE5vZGUpO1xuXG4gICAgaWYgKG1ldGFTdWJwcm9vZkFzc2VydGlvbk5vZGUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IG1ldGFTdWJwcm9vZkFzc2VydGlvbk1ldGFzdGF0ZW1lbnROb2RlcyA9IG1ldGFzdGF0ZW1lbnROb2Rlc1F1ZXJ5KG1ldGFTdWJwcm9vZkFzc2VydGlvbk5vZGUpLFxuICAgICAgICAgICAgdW5xdWFsaWZpZWRNZXRhc3RhdGVtZW50TWV0YXN0YXRlbWVudE5vZGVzID0gdW5xdWFsaWZpZWRNZXRhc3RhdGVtZW50TWV0YXN0YXRlbWVudE5vZGVzUXVlcnkobWV0YVN1YnByb29mTm9kZSksXG4gICAgICAgICAgICBxdWFsaWZpZWRPclVucXVhbGlmaWVkTWV0YXN0YXRlbWVudE1ldGFzdGF0ZW1lbnROb2RlID0gcXVhbGlmaWVkT3JVbnF1YWxpZmllZE1ldGFzdGF0ZW1lbnRNZXRhc3RhdGVtZW50Tm9kZVF1ZXJ5KG1ldGFTdWJwcm9vZk5vZGUpLFxuICAgICAgICAgICAgbWV0YXN0YXRlbWVudE5vZGVzID0gW1xuICAgICAgICAgICAgICAuLi51bnF1YWxpZmllZE1ldGFzdGF0ZW1lbnRNZXRhc3RhdGVtZW50Tm9kZXMsXG4gICAgICAgICAgICAgIHF1YWxpZmllZE9yVW5xdWFsaWZpZWRNZXRhc3RhdGVtZW50TWV0YXN0YXRlbWVudE5vZGVcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBtZXRhc3RhdGVtZW50Tm9kZXNMZW5ndGggPSBtZXRhc3RhdGVtZW50Tm9kZXMubGVuZ3RoLFxuICAgICAgICAgICAgbWV0YVN1YnByb29mQXNzZXJ0aW9uTWV0YXN0YXRlbWVudE5vZGVzTGVuZ3RoID0gbWV0YVN1YnByb29mQXNzZXJ0aW9uTWV0YXN0YXRlbWVudE5vZGVzLmxlbmd0aDtcblxuICAgICAgaWYgKG1ldGFzdGF0ZW1lbnROb2Rlc0xlbmd0aCA9PT0gbWV0YVN1YnByb29mQXNzZXJ0aW9uTWV0YXN0YXRlbWVudE5vZGVzTGVuZ3RoKSB7XG4gICAgICAgIG1ldGFTdWJwcm9vZk5vZGVNYXRjaGVzID0gbWV0YVN1YnByb29mQXNzZXJ0aW9uTWV0YXN0YXRlbWVudE5vZGVzLmV2ZXJ5KChtZXRhU3VicHJvb2ZBc3NlcnRpb25NZXRhc3RhdGVtZW50Tm9kZSwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG1ldGFzdGF0ZW1lbnROb2RlID0gbWV0YXN0YXRlbWVudE5vZGVzW2luZGV4XSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vblRlcm1pbmFsTm9kZSA9IG1ldGFzdGF0ZW1lbnROb2RlLCAvLy9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByZW1pc2VOb25UZXJtaW5hbE5vZGUgPSBtZXRhU3VicHJvb2ZBc3NlcnRpb25NZXRhc3RhdGVtZW50Tm9kZSwgIC8vL1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJlbWlzZU5vblRlcm1pbmFsTm9kZU1hdGNoZXMgPSBtZXRhTWF0Y2hQcmVtaXNlTm9uVGVybWluYWxOb2RlKHByZW1pc2VOb25UZXJtaW5hbE5vZGUsIG5vblRlcm1pbmFsTm9kZSwgbWV0YVN1YnN0aXR1dGlvbnMpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocHJlbWlzZU5vblRlcm1pbmFsTm9kZU1hdGNoZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG1ldGFTdWJwcm9vZk5vZGVNYXRjaGVzO1xuICB9XG5cbiAgbWF0Y2hNZXRhc3RhdGVtZW50Tm9kZShtZXRhc3RhdGVtZW50Tm9kZSwgbWV0YVN1YnN0aXR1dGlvbnMpIHtcbiAgICBjb25zdCBub25UZXJtaW5hbE5vZGUgPSBtZXRhc3RhdGVtZW50Tm9kZSwgIC8vL1xuICAgICAgICAgIHByZW1pc2VOb25UZXJtaW5hbE5vZGUgPSB0aGlzLm1ldGFzdGF0ZW1lbnROb2RlLCAgLy8vXG4gICAgICAgICAgcHJlbWlzZU5vblRlcm1pbmFsTm9kZU1hdGNoZXMgPSBtZXRhTWF0Y2hQcmVtaXNlTm9uVGVybWluYWxOb2RlKHByZW1pc2VOb25UZXJtaW5hbE5vZGUsIG5vblRlcm1pbmFsTm9kZSwgbWV0YVN1YnN0aXR1dGlvbnMpLFxuICAgICAgICAgIG1ldGFzdGF0ZW1lbnROb2RlTWF0Y2hlcyA9IHByZW1pc2VOb25UZXJtaW5hbE5vZGVNYXRjaGVzOyAvLy9cblxuICAgIHJldHVybiBtZXRhc3RhdGVtZW50Tm9kZU1hdGNoZXM7XG4gIH1cblxuICB0b0pTT04oKSB7XG4gICAgY29uc3QgbWV0YXN0YXRlbWVudFN0cmluZyA9IG5vZGVBc1N0cmluZyh0aGlzLm1ldGFzdGF0ZW1lbnROb2RlKSxcbiAgICAgICAgICBtZXRhc3RhdGVtZW50ID0gbWV0YXN0YXRlbWVudFN0cmluZywgLy8vXG4gICAgICAgICAganNvbiA9IHtcbiAgICAgICAgICAgIG1ldGFzdGF0ZW1lbnRcbiAgICAgICAgICB9O1xuXG4gICAgcmV0dXJuIGpzb247XG4gIH1cblxuICBzdGF0aWMgZnJvbUpTT04oanNvbiwgcmVsZWFzZUNvbnRleHQpIHtcbiAgICBjb25zdCB7IG1ldGFzdGF0ZW1lbnQgfSA9IGpzb24sXG4gICAgICAgICAgbWV0YXN0YXRlbWVudFN0cmluZyA9IG1ldGFzdGF0ZW1lbnQsICAvLy9cbiAgICAgICAgICBtZXRhc3RhdGVtZW50Tm9kZSA9IG1ldGFzdGF0ZW1lbnROb2RlRnJvbU1ldGFzdGF0ZW1lbnRTdHJpbmcobWV0YXN0YXRlbWVudFN0cmluZywgcmVsZWFzZUNvbnRleHQpLFxuICAgICAgICAgIHByZW1pc2UgPSBuZXcgUHJlbWlzZShtZXRhc3RhdGVtZW50Tm9kZSk7XG5cbiAgICByZXR1cm4gcHJlbWlzZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTWV0YXN0YXRlbWVudE5vZGUobWV0YXN0YXRlbWVudE5vZGUpIHtcbiAgICBjb25zdCBwcmVtaXNlID0gbmV3IFByZW1pc2UobWV0YXN0YXRlbWVudE5vZGUpO1xuXG4gICAgcmV0dXJuIHByZW1pc2U7XG4gIH1cbn1cblxuZnVuY3Rpb24gbWF0Y2hQcmVtaXNlTm9kZShwcmVtaXNlTm9kZSwgbm9kZSwgc3Vic3RpdHV0aW9ucykge1xuICBsZXQgcHJlbWlzZU5vZGVNYXRjaGVzID0gZmFsc2U7XG5cbiAgY29uc3Qgbm9kZVRlcm1pbmFsTm9kZSA9IG5vZGUuaXNUZXJtaW5hbE5vZGUoKSxcbiAgICBydWxlTm9kZVRlcm1pbmFsTm9kZSA9IHByZW1pc2VOb2RlLmlzVGVybWluYWxOb2RlKCk7XG5cbiAgaWYgKG5vZGVUZXJtaW5hbE5vZGUgPT09IHJ1bGVOb2RlVGVybWluYWxOb2RlKSB7XG4gICAgaWYgKG5vZGVUZXJtaW5hbE5vZGUpIHtcbiAgICAgIGNvbnN0IHRlcm1pbmFsTm9kZSA9IG5vZGUsICAvLy9cbiAgICAgICAgICAgIHByZW1pc2VUZXJtaW5hbE5vZGUgPSBwcmVtaXNlTm9kZSwgIC8vL1xuICAgICAgICAgICAgcHJlbWlzZVRlcm1pbmFsTm9kZU1hdGNoZXMgPSBtYXRjaFByZW1pc2VUZXJtaW5hbE5vZGUocHJlbWlzZVRlcm1pbmFsTm9kZSwgdGVybWluYWxOb2RlLCBzdWJzdGl0dXRpb25zKTtcblxuICAgICAgcHJlbWlzZU5vZGVNYXRjaGVzID0gcHJlbWlzZVRlcm1pbmFsTm9kZU1hdGNoZXM7ICAvLy9cbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3Qgbm9uVGVybWluYWxOb2RlID0gbm9kZSwgLy8vXG4gICAgICAgICAgICBwcmVtaXNlTm9uVGVybWluYWxOb2RlID0gcHJlbWlzZU5vZGUsICAvLy9cbiAgICAgICAgICAgIHByZW1pc2VOb25UZXJtaW5hbE5vZGVNYXRjaGVzID0gbWF0Y2hQcmVtaXNlTm9uVGVybWluYWxOb2RlKHByZW1pc2VOb25UZXJtaW5hbE5vZGUsIG5vblRlcm1pbmFsTm9kZSwgc3Vic3RpdHV0aW9ucyk7XG5cbiAgICAgIHByZW1pc2VOb2RlTWF0Y2hlcyA9IHByZW1pc2VOb25UZXJtaW5hbE5vZGVNYXRjaGVzOyAvLy9cbiAgICB9XG4gIH1cblxuICByZXR1cm4gcHJlbWlzZU5vZGVNYXRjaGVzO1xufVxuXG5mdW5jdGlvbiBtYXRjaFByZW1pc2VOb2RlcyhwcmVtaXNlTm9kZXMsIG5vZGVzLCBzdWJzdGl0dXRpb25zKSB7XG4gIGxldCBwcmVtaXNlTm9kZXNNYXRjaGVzID0gZmFsc2U7XG5cbiAgY29uc3Qgbm9kZXNMZW5ndGggPSBub2Rlcy5sZW5ndGgsXG4gICAgICAgIHByZW1pc2VOb2Rlc0xlbmd0aCA9IHByZW1pc2VOb2Rlcy5sZW5ndGg7XG5cbiAgaWYgKG5vZGVzTGVuZ3RoID09PSBwcmVtaXNlTm9kZXNMZW5ndGgpIHtcbiAgICBwcmVtaXNlTm9kZXNNYXRjaGVzID0gbm9kZXMuZXZlcnkoKG5vZGUsIGluZGV4KSA9PiB7XG4gICAgICBjb25zdCBwcmVtaXNlTm9kZSA9IHByZW1pc2VOb2Rlc1tpbmRleF0sXG4gICAgICAgICAgICBwcmVtaXNlTm9kZU1hdGNoZXMgPSBtYXRjaFByZW1pc2VOb2RlKHByZW1pc2VOb2RlLCBub2RlLCBzdWJzdGl0dXRpb25zKTtcblxuICAgICAgaWYgKHByZW1pc2VOb2RlTWF0Y2hlcykge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHJldHVybiBwcmVtaXNlTm9kZXNNYXRjaGVzO1xufVxuXG5mdW5jdGlvbiBtYXRjaFByZW1pc2VUZXJtaW5hbE5vZGUocHJlbWlzZVRlcm1pbmFsTm9kZSwgdGVybWluYWxOb2RlLCBzdWJzdGl0dXRpb25zKSB7XG4gIGNvbnN0IG1hdGNoZXMgPSBwcmVtaXNlVGVybWluYWxOb2RlLm1hdGNoKHRlcm1pbmFsTm9kZSksXG4gICAgICAgIHByZW1pc2VUZXJtaW5hbE5vZGVNYXRjaGVzID0gbWF0Y2hlcztcblxuICByZXR1cm4gcHJlbWlzZVRlcm1pbmFsTm9kZU1hdGNoZXM7XG59XG5cbmZ1bmN0aW9uIG1hdGNoUHJlbWlzZU5vblRlcm1pbmFsTm9kZShwcmVtaXNlTm9uVGVybWluYWxOb2RlLCBub25UZXJtaW5hbE5vZGUsIHN1YnN0aXR1dGlvbnMpIHtcbiAgbGV0IHByZW1pc2VOb25UZXJtaW5hbE5vZGVNYXRjaGVzID0gZmFsc2U7XG5cbiAgY29uc3QgcnVsZU5hbWUgPSBub25UZXJtaW5hbE5vZGUuZ2V0UnVsZU5hbWUoKSxcbiAgICAgICAgY2hpbGROb2RlcyA9IG5vblRlcm1pbmFsTm9kZS5nZXRDaGlsZE5vZGVzKCksXG4gICAgICAgIHByZW1pc2VOb25UZXJtaW5hbE5vZGVSdWxlTmFtZSA9IHByZW1pc2VOb25UZXJtaW5hbE5vZGUuZ2V0UnVsZU5hbWUoKSxcbiAgICAgICAgcHJlbWlzZU5vblRlcm1pbmFsTm9kZUNoaWxkTm9kZXMgPSBwcmVtaXNlTm9uVGVybWluYWxOb2RlLmdldENoaWxkTm9kZXMoKSxcbiAgICAgICAgcnVsZU5hbWVTdGF0ZW1lbnRSdWxlTmFtZSA9IChydWxlTmFtZSA9PT0gU1RBVEVNRU5UX1JVTEVfTkFNRSksXG4gICAgICAgIHByZW1pc2VOb25UZXJtaW5hbE5vZGVSdWxlTmFtZU1ldGFzdGF0ZW1lbnRSdWxlTmFtZSA9IChwcmVtaXNlTm9uVGVybWluYWxOb2RlUnVsZU5hbWUgPT09IE1FVEFTVEFURU1FTlRfUlVMRV9OQU1FKTtcblxuICBpZiAocnVsZU5hbWVTdGF0ZW1lbnRSdWxlTmFtZSAmJiBwcmVtaXNlTm9uVGVybWluYWxOb2RlUnVsZU5hbWVNZXRhc3RhdGVtZW50UnVsZU5hbWUpIHtcbiAgICBjb25zdCBzdGF0ZW1lbnROb2RlID0gbm9uVGVybWluYWxOb2RlLCAgLy8vXG4gICAgICAgICAgcHJlbWlzZU1ldGFzdGF0ZW1lbnROb2RlID0gcHJlbWlzZU5vblRlcm1pbmFsTm9kZSwgIC8vL1xuICAgICAgICAgIHByZW1pc2VNZXRhc3RhdGVtZW50Tm9kZU1hdGNoZXMgPSBtYXRjaFByZW1pc2VNZXRhc3RhdGVtZW50Tm9kZShwcmVtaXNlTWV0YXN0YXRlbWVudE5vZGUsIHN0YXRlbWVudE5vZGUsIHN1YnN0aXR1dGlvbnMpO1xuXG4gICAgaWYgKHByZW1pc2VNZXRhc3RhdGVtZW50Tm9kZU1hdGNoZXMpIHtcbiAgICAgIHByZW1pc2VOb25UZXJtaW5hbE5vZGVNYXRjaGVzID0gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3Qgbm9kZXMgPSBjaGlsZE5vZGVzLCAvLy9cbiAgICAgICAgICAgIHByZW1pc2VOb2RlcyA9IHByZW1pc2VOb25UZXJtaW5hbE5vZGVDaGlsZE5vZGVzLCAvLy9cbiAgICAgICAgICAgIHByZW1pc2VOb25UZXJtaW5hbE5vZGVDaGlsZE5vZGVzTWF0Y2hlcyA9IG1hdGNoUHJlbWlzZU5vZGVzKHByZW1pc2VOb2Rlcywgbm9kZXMsIHN1YnN0aXR1dGlvbnMpO1xuXG4gICAgICBwcmVtaXNlTm9uVGVybWluYWxOb2RlTWF0Y2hlcyA9IHByZW1pc2VOb25UZXJtaW5hbE5vZGVDaGlsZE5vZGVzTWF0Y2hlczsgLy8vXG4gICAgfVxuICB9IGVsc2UgaWYgKHJ1bGVOYW1lID09PSBwcmVtaXNlTm9uVGVybWluYWxOb2RlUnVsZU5hbWUpIHtcbiAgICBjb25zdCBub2RlcyA9IGNoaWxkTm9kZXMsIC8vL1xuICAgICAgICAgIHByZW1pc2VOb2RlcyA9IHByZW1pc2VOb25UZXJtaW5hbE5vZGVDaGlsZE5vZGVzLCAvLy9cbiAgICAgICAgICBwcmVtaXNlTm9uVGVybWluYWxOb2RlQ2hpbGROb2Rlc01hdGNoZXMgPSBtYXRjaFByZW1pc2VOb2RlcyhwcmVtaXNlTm9kZXMsIG5vZGVzLCBzdWJzdGl0dXRpb25zKTtcblxuICAgIHByZW1pc2VOb25UZXJtaW5hbE5vZGVNYXRjaGVzID0gcHJlbWlzZU5vblRlcm1pbmFsTm9kZUNoaWxkTm9kZXNNYXRjaGVzOyAvLy9cbiAgfVxuXG4gIHJldHVybiBwcmVtaXNlTm9uVGVybWluYWxOb2RlTWF0Y2hlcztcbn1cblxuZnVuY3Rpb24gbWF0Y2hQcmVtaXNlTWV0YXZhcmlhYmxlTm9kZShwcmVtaXNlTWV0YXZhcmlhYmxlTm9kZSwgc3RhdGVtZW50Tm9kZSwgc3Vic3RpdHV0aW9ucykge1xuICBsZXQgcHJlbWlzZU1ldGF2YXJpYWJsZU5vZGVNYXRjaGVzO1xuXG4gIGNvbnN0IHByZW1pc2VNZXRhdmFyaWFibGVOYW1lID0gbWV0YXZhcmlhYmxlTmFtZUZyb21NZXRhdmFyaWFibGVOb2RlKHByZW1pc2VNZXRhdmFyaWFibGVOb2RlKSxcbiAgICAgICAgc3Vic3RpdHV0aW9uID0gc3Vic3RpdHV0aW9ucy5maW5kKChzdWJzdGl0dXRpb24pID0+IHtcbiAgICAgICAgICBjb25zdCBtZXRhdmFyaWFibGVOYW1lID0gc3Vic3RpdHV0aW9uLmdldE1ldGF2YXJpYWJsZU5hbWUoKTtcblxuICAgICAgICAgIGlmIChtZXRhdmFyaWFibGVOYW1lID09PSBwcmVtaXNlTWV0YXZhcmlhYmxlTmFtZSkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9KSB8fCBudWxsO1xuXG4gIGlmIChzdWJzdGl0dXRpb24gIT09IG51bGwpIHtcbiAgICBjb25zdCBzdWJzdGl0dXRpb25Ob2Rlc01hdGNoID0gc3Vic3RpdHV0aW9uLm1hdGNoU3RhdGVtZW50Tm9kZShzdGF0ZW1lbnROb2RlKTtcblxuICAgIHByZW1pc2VNZXRhdmFyaWFibGVOb2RlTWF0Y2hlcyA9IHN1YnN0aXR1dGlvbk5vZGVzTWF0Y2g7ICAvLy9cbiAgfSBlbHNlIHtcbiAgICBjb25zdCBtZXRhdmFyaWFibGVOYW1lID0gcHJlbWlzZU1ldGF2YXJpYWJsZU5hbWUsIC8vL1xuICAgICAgICAgIHN1YnN0aXR1dGlvbiA9IFN1YnN0aXR1dGlvbi5mcm9tTWV0YXZhcmlhYmxlTmFtZUFuZFN0YXRlbWVudE5vZGUobWV0YXZhcmlhYmxlTmFtZSwgc3RhdGVtZW50Tm9kZSk7XG5cbiAgICBzdWJzdGl0dXRpb25zLnB1c2goc3Vic3RpdHV0aW9uKTtcblxuICAgIHByZW1pc2VNZXRhdmFyaWFibGVOb2RlTWF0Y2hlcyA9IHRydWU7XG4gIH1cblxuICByZXR1cm4gcHJlbWlzZU1ldGF2YXJpYWJsZU5vZGVNYXRjaGVzO1xufVxuXG5mdW5jdGlvbiBtYXRjaFByZW1pc2VNZXRhc3RhdGVtZW50Tm9kZShwcmVtaXNlTWV0YXN0YXRlbWVudE5vZGUsIHN0YXRlbWVudE5vZGUsIHN1YnN0aXR1dGlvbnMpIHtcbiAgbGV0IHByZW1pc2VNZXRhc3RhdGVtZW50Tm9kZU1hdGNoZXMgPSBmYWxzZTtcblxuICBjb25zdCBwcmVtaXNlTm9uVGVybWluYWxOb2RlID0gcHJlbWlzZU1ldGFzdGF0ZW1lbnROb2RlLCAgLy8vXG4gICAgICAgIHByZW1pc2VOb25UZXJtaW5hbE5vZGVDaGlsZE5vZGVzID0gcHJlbWlzZU5vblRlcm1pbmFsTm9kZS5nZXRDaGlsZE5vZGVzKCksXG4gICAgICAgIHByZW1pc2VOb25UZXJtaW5hbE5vZGVDaGlsZE5vZGVzTGVuZ3RoID0gcHJlbWlzZU5vblRlcm1pbmFsTm9kZUNoaWxkTm9kZXMubGVuZ3RoO1xuXG4gIGlmIChwcmVtaXNlTm9uVGVybWluYWxOb2RlQ2hpbGROb2Rlc0xlbmd0aCA9PT0gMSkge1xuICAgIGNvbnN0IGZpcnN0UHJlbWlzZUNoaWxkTm9kZSA9IGZpcnN0KHByZW1pc2VOb25UZXJtaW5hbE5vZGVDaGlsZE5vZGVzKSxcbiAgICAgICAgICBwcmVtaXNlQ2hpbGROb2RlID0gZmlyc3RQcmVtaXNlQ2hpbGROb2RlLCAgLy8vXG4gICAgICAgICAgcHJlbWlzZUNoaWxkTm9kZU5vblRlcm1pbmFsTm9kZSA9IHByZW1pc2VDaGlsZE5vZGUuaXNOb25UZXJtaW5hbE5vZGUoKTtcblxuICAgIGlmIChwcmVtaXNlQ2hpbGROb2RlTm9uVGVybWluYWxOb2RlKSB7XG4gICAgICBjb25zdCBwcmVtaXNlTm9uVGVybWluYWxDaGlsZE5vZGUgPSBwcmVtaXNlQ2hpbGROb2RlLCAgLy8vXG4gICAgICAgICAgICBwcmVtaXNlTm9uVGVybWluYWxDaGlsZE5vZGVSdWxlTmFtZSA9IHByZW1pc2VOb25UZXJtaW5hbENoaWxkTm9kZS5nZXRSdWxlTmFtZSgpLFxuICAgICAgICAgICAgcHJlbWlzZU5vblRlcm1pbmFsQ2hpbGROb2RlUnVsZU5hbWVNZXRhdmFyaWFibGVSdWxlTmFtZSA9IChwcmVtaXNlTm9uVGVybWluYWxDaGlsZE5vZGVSdWxlTmFtZSA9PT0gTUVUQVZBUklBQkxFX1JVTEVfTkFNRSk7XG5cbiAgICAgIGlmIChwcmVtaXNlTm9uVGVybWluYWxDaGlsZE5vZGVSdWxlTmFtZU1ldGF2YXJpYWJsZVJ1bGVOYW1lKSB7XG4gICAgICAgIGNvbnN0IHByZW1pc2VNZXRhdmFyaWFibGVOb2RlID0gcHJlbWlzZU5vblRlcm1pbmFsQ2hpbGROb2RlLCAgLy8vXG4gICAgICAgICAgICAgIHByZW1pc2VNZXRhVmFyaWFibGVOb2RlTWF0Y2hlcyA9IG1hdGNoUHJlbWlzZU1ldGF2YXJpYWJsZU5vZGUocHJlbWlzZU1ldGF2YXJpYWJsZU5vZGUsIHN0YXRlbWVudE5vZGUsIHN1YnN0aXR1dGlvbnMpO1xuXG4gICAgICAgIHByZW1pc2VNZXRhc3RhdGVtZW50Tm9kZU1hdGNoZXMgPSBwcmVtaXNlTWV0YVZhcmlhYmxlTm9kZU1hdGNoZXM7IC8vL1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBwcmVtaXNlTWV0YXN0YXRlbWVudE5vZGVNYXRjaGVzO1xufVxuXG5mdW5jdGlvbiBtZXRhTWF0Y2hQcmVtaXNlTm9kZShwcmVtaXNlTm9kZSwgbm9kZSwgbWV0YVN1YnN0aXR1dGlvbnMpIHtcbiAgbGV0IHByZW1pc2VOb2RlTWF0Y2hlcyA9IGZhbHNlO1xuXG4gIGNvbnN0IG5vZGVUZXJtaW5hbE5vZGUgPSBub2RlLmlzVGVybWluYWxOb2RlKCksXG4gICAgICAgIHJ1bGVOb2RlVGVybWluYWxOb2RlID0gcHJlbWlzZU5vZGUuaXNUZXJtaW5hbE5vZGUoKTtcblxuICBpZiAobm9kZVRlcm1pbmFsTm9kZSA9PT0gcnVsZU5vZGVUZXJtaW5hbE5vZGUpIHtcbiAgICBpZiAobm9kZVRlcm1pbmFsTm9kZSkge1xuICAgICAgY29uc3QgdGVybWluYWxOb2RlID0gbm9kZSwgIC8vL1xuICAgICAgICAgICAgcHJlbWlzZVRlcm1pbmFsTm9kZSA9IHByZW1pc2VOb2RlLCAgLy8vXG4gICAgICAgICAgICBwcmVtaXNlVGVybWluYWxOb2RlTWF0Y2hlcyA9IG1ldGFNYXRjaFByZW1pc2VUZXJtaW5hbE5vZGUocHJlbWlzZVRlcm1pbmFsTm9kZSwgdGVybWluYWxOb2RlLCBtZXRhU3Vic3RpdHV0aW9ucyk7XG5cbiAgICAgIHByZW1pc2VOb2RlTWF0Y2hlcyA9IHByZW1pc2VUZXJtaW5hbE5vZGVNYXRjaGVzOyAgLy8vXG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IG5vblRlcm1pbmFsTm9kZSA9IG5vZGUsIC8vL1xuICAgICAgICAgICAgcHJlbWlzZU5vblRlcm1pbmFsTm9kZSA9IHByZW1pc2VOb2RlLCAgLy8vXG4gICAgICAgICAgICBwcmVtaXNlTm9uVGVybWluYWxOb2RlTWF0Y2hlcyA9IG1ldGFNYXRjaFByZW1pc2VOb25UZXJtaW5hbE5vZGUocHJlbWlzZU5vblRlcm1pbmFsTm9kZSwgbm9uVGVybWluYWxOb2RlLCBtZXRhU3Vic3RpdHV0aW9ucyk7XG5cbiAgICAgIHByZW1pc2VOb2RlTWF0Y2hlcyA9IHByZW1pc2VOb25UZXJtaW5hbE5vZGVNYXRjaGVzOyAvLy9cbiAgICB9XG4gIH1cblxuICByZXR1cm4gcHJlbWlzZU5vZGVNYXRjaGVzO1xufVxuXG5mdW5jdGlvbiBtZXRhTWF0Y2hQcmVtaXNlTm9kZXMocHJlbWlzZU5vZGVzLCBub2RlcywgbWV0YVN1YnN0aXR1dGlvbnMpIHtcbiAgbGV0IHByZW1pc2VOb2Rlc01hdGNoZXMgPSBmYWxzZTtcblxuICBjb25zdCBub2Rlc0xlbmd0aCA9IG5vZGVzLmxlbmd0aCxcbiAgICAgICAgcHJlbWlzZU5vZGVzTGVuZ3RoID0gcHJlbWlzZU5vZGVzLmxlbmd0aDtcblxuICBpZiAobm9kZXNMZW5ndGggPT09IHByZW1pc2VOb2Rlc0xlbmd0aCkge1xuICAgIHByZW1pc2VOb2Rlc01hdGNoZXMgPSBub2Rlcy5ldmVyeSgobm9kZSwgaW5kZXgpID0+IHtcbiAgICAgIGNvbnN0IHByZW1pc2VOb2RlID0gcHJlbWlzZU5vZGVzW2luZGV4XSxcbiAgICAgICAgICAgIHByZW1pc2VOb2RlTWF0Y2hlcyA9IG1ldGFNYXRjaFByZW1pc2VOb2RlKHByZW1pc2VOb2RlLCBub2RlLCBtZXRhU3Vic3RpdHV0aW9ucyk7XG5cbiAgICAgIGlmIChwcmVtaXNlTm9kZU1hdGNoZXMpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICByZXR1cm4gcHJlbWlzZU5vZGVzTWF0Y2hlcztcbn1cblxuZnVuY3Rpb24gbWV0YU1hdGNoUHJlbWlzZVRlcm1pbmFsTm9kZShwcmVtaXNlVGVybWluYWxOb2RlLCB0ZXJtaW5hbE5vZGUsIG1ldGFTdWJzdGl0dXRpb25zKSB7XG4gIGNvbnN0IG1hdGNoZXMgPSBwcmVtaXNlVGVybWluYWxOb2RlLm1hdGNoKHRlcm1pbmFsTm9kZSksXG4gICAgICAgIHByZW1pc2VUZXJtaW5hbE5vZGVNYXRjaGVzID0gbWF0Y2hlcztcblxuICByZXR1cm4gcHJlbWlzZVRlcm1pbmFsTm9kZU1hdGNoZXM7XG59XG5cbmZ1bmN0aW9uIG1ldGFNYXRjaFByZW1pc2VOb25UZXJtaW5hbE5vZGUocHJlbWlzZU5vblRlcm1pbmFsTm9kZSwgbm9uVGVybWluYWxOb2RlLCBtZXRhU3Vic3RpdHV0aW9ucykge1xuICBsZXQgcHJlbWlzZU5vblRlcm1pbmFsTm9kZU1hdGNoZXMgPSBmYWxzZTtcblxuICBjb25zdCBydWxlTmFtZSA9IG5vblRlcm1pbmFsTm9kZS5nZXRSdWxlTmFtZSgpLFxuICAgICAgICBwcmVtaXNlTm9uVGVybWluYWxOb2RlUnVsZU5hbWUgPSBwcmVtaXNlTm9uVGVybWluYWxOb2RlLmdldFJ1bGVOYW1lKCksXG4gICAgICAgIHJ1bGVOYW1lTWV0YXN0YXRlbWVudFJ1bGVOYW1lID0gKHJ1bGVOYW1lID09PSBNRVRBU1RBVEVNRU5UX1JVTEVfTkFNRSksXG4gICAgICAgIHByZW1pc2VOb25UZXJtaW5hbE5vZGVSdWxlTmFtZU1ldGFzdGF0ZW1lbnRSdWxlTmFtZSA9IChwcmVtaXNlTm9uVGVybWluYWxOb2RlUnVsZU5hbWUgPT09IE1FVEFTVEFURU1FTlRfUlVMRV9OQU1FKTtcblxuICBpZiAocnVsZU5hbWVNZXRhc3RhdGVtZW50UnVsZU5hbWUgJiYgcHJlbWlzZU5vblRlcm1pbmFsTm9kZVJ1bGVOYW1lTWV0YXN0YXRlbWVudFJ1bGVOYW1lKSB7XG4gICAgY29uc3QgbWV0YXN0YXRlbWVudE5vZGUgPSBub25UZXJtaW5hbE5vZGUsICAvLy9cbiAgICAgICAgICBwcmVtaXNlTWV0YXN0YXRlbWVudE5vZGUgPSBwcmVtaXNlTm9uVGVybWluYWxOb2RlLCAgLy8vXG4gICAgICAgICAgcHJlbWlzZU1ldGFzdGF0ZW1lbnROb2RlTWF0Y2hlcyA9IG1ldGFNYXRjaFByZW1pc2VNZXRhc3RhdGVtZW50Tm9kZShwcmVtaXNlTWV0YXN0YXRlbWVudE5vZGUsIG1ldGFzdGF0ZW1lbnROb2RlLCBtZXRhU3Vic3RpdHV0aW9ucyk7XG5cbiAgICBwcmVtaXNlTm9uVGVybWluYWxOb2RlTWF0Y2hlcyA9IHByZW1pc2VNZXRhc3RhdGVtZW50Tm9kZU1hdGNoZXM7IC8vL1xuICB9IGVsc2UgaWYgKHJ1bGVOYW1lID09PSBwcmVtaXNlTm9uVGVybWluYWxOb2RlUnVsZU5hbWUpIHtcbiAgICBjb25zdCBjaGlsZE5vZGVzID0gbm9uVGVybWluYWxOb2RlLmdldENoaWxkTm9kZXMoKSxcbiAgICAgICAgICBwcmVtaXNlTm9uVGVybWluYWxOb2RlQ2hpbGROb2RlcyA9IHByZW1pc2VOb25UZXJtaW5hbE5vZGUuZ2V0Q2hpbGROb2RlcygpLCAvLy9cbiAgICAgICAgICBub2RlcyA9IGNoaWxkTm9kZXMsIC8vL1xuICAgICAgICAgIHByZW1pc2VOb2RlcyA9IHByZW1pc2VOb25UZXJtaW5hbE5vZGVDaGlsZE5vZGVzLCAvLy9cbiAgICAgICAgICBwcmVtaXNlTm9uVGVybWluYWxOb2RlQ2hpbGROb2Rlc01hdGNoZXMgPSBtZXRhTWF0Y2hQcmVtaXNlTm9kZXMocHJlbWlzZU5vZGVzLCBub2RlcywgbWV0YVN1YnN0aXR1dGlvbnMpO1xuXG4gICAgcHJlbWlzZU5vblRlcm1pbmFsTm9kZU1hdGNoZXMgPSBwcmVtaXNlTm9uVGVybWluYWxOb2RlQ2hpbGROb2Rlc01hdGNoZXM7IC8vL1xuICB9XG5cbiAgcmV0dXJuIHByZW1pc2VOb25UZXJtaW5hbE5vZGVNYXRjaGVzO1xufVxuXG5mdW5jdGlvbiBtZXRhTWF0Y2hQcmVtaXNlTWV0YXZhcmlhYmxlTm9kZShwcmVtaXNlTWV0YXZhcmlhYmxlTm9kZSwgbWV0YXN0YXRlbWVudE5vZGUsIG1ldGFTdWJzdGl0dXRpb25zKSB7XG4gIGxldCBwcmVtaXNlTWV0YXZhcmlhYmxlTm9kZU1hdGNoZXM7XG5cbiAgY29uc3QgcHJlbWlzZU1ldGF2YXJpYWJsZU5hbWUgPSBtZXRhdmFyaWFibGVOYW1lRnJvbU1ldGF2YXJpYWJsZU5vZGUocHJlbWlzZU1ldGF2YXJpYWJsZU5vZGUpLFxuICAgICAgICBtZXRhU3Vic3RpdHV0aW9uID0gbWV0YVN1YnN0aXR1dGlvbnMuZmluZCgobWV0YVN1YnN0aXR1dGlvbikgPT4ge1xuICAgICAgICAgIGNvbnN0IG1ldGF2YXJpYWJsZU5hbWUgPSBtZXRhU3Vic3RpdHV0aW9uLmdldE1ldGF2YXJpYWJsZU5hbWUoKTtcblxuICAgICAgICAgIGlmIChtZXRhdmFyaWFibGVOYW1lID09PSBwcmVtaXNlTWV0YXZhcmlhYmxlTmFtZSkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9KSB8fCBudWxsO1xuXG4gIGlmIChtZXRhU3Vic3RpdHV0aW9uICE9PSBudWxsKSB7XG4gICAgY29uc3QgbWV0YVN1YnN0aXR1dGlvbk5vZGVzTWF0Y2ggPSBtZXRhU3Vic3RpdHV0aW9uLm1hdGNoTWV0YXN0YXRlbWVudE5vZGUobWV0YXN0YXRlbWVudE5vZGUpO1xuXG4gICAgcHJlbWlzZU1ldGF2YXJpYWJsZU5vZGVNYXRjaGVzID0gbWV0YVN1YnN0aXR1dGlvbk5vZGVzTWF0Y2g7ICAvLy9cbiAgfSBlbHNlIHtcbiAgICBjb25zdCBtZXRhdmFyaWFibGVOYW1lID0gcHJlbWlzZU1ldGF2YXJpYWJsZU5hbWUsIC8vL1xuICAgICAgICAgIG1ldGFTdWJzdGl0dXRpb24gPSBNZXRhU3Vic3RpdHV0aW9uLmZyb21NZXRhdmFyaWFibGVOYW1lQW5kTWV0YXN0YXRlbWVudE5vZGUobWV0YXZhcmlhYmxlTmFtZSwgbWV0YXN0YXRlbWVudE5vZGUpO1xuXG4gICAgbWV0YVN1YnN0aXR1dGlvbnMucHVzaChtZXRhU3Vic3RpdHV0aW9uKTtcblxuICAgIHByZW1pc2VNZXRhdmFyaWFibGVOb2RlTWF0Y2hlcyA9IHRydWU7XG4gIH1cblxuICByZXR1cm4gcHJlbWlzZU1ldGF2YXJpYWJsZU5vZGVNYXRjaGVzO1xufVxuXG5mdW5jdGlvbiBtZXRhTWF0Y2hQcmVtaXNlTWV0YXN0YXRlbWVudE5vZGUocHJlbWlzZU1ldGFzdGF0ZW1lbnROb2RlLCBtZXRhc3RhdGVtZW50Tm9kZSwgbWV0YVN1YnN0aXR1dGlvbnMpIHtcbiAgbGV0IHByZW1pc2VNZXRhc3RhdGVtZW50Tm9kZU1hdGNoZXMgPSBmYWxzZTtcblxuICBjb25zdCBwcmVtaXNlTm9uVGVybWluYWxOb2RlID0gcHJlbWlzZU1ldGFzdGF0ZW1lbnROb2RlLCAgLy8vXG4gICAgICAgIHByZW1pc2VOb25UZXJtaW5hbE5vZGVDaGlsZE5vZGVzID0gcHJlbWlzZU5vblRlcm1pbmFsTm9kZS5nZXRDaGlsZE5vZGVzKCksXG4gICAgICAgIHByZW1pc2VOb25UZXJtaW5hbE5vZGVDaGlsZE5vZGVzTGVuZ3RoID0gcHJlbWlzZU5vblRlcm1pbmFsTm9kZUNoaWxkTm9kZXMubGVuZ3RoO1xuXG4gIGlmIChwcmVtaXNlTm9uVGVybWluYWxOb2RlQ2hpbGROb2Rlc0xlbmd0aCA9PT0gMSkge1xuICAgIGNvbnN0IGZpcnN0UHJlbWlzZUNoaWxkTm9kZSA9IGZpcnN0KHByZW1pc2VOb25UZXJtaW5hbE5vZGVDaGlsZE5vZGVzKSxcbiAgICAgICAgICBwcmVtaXNlQ2hpbGROb2RlID0gZmlyc3RQcmVtaXNlQ2hpbGROb2RlLCAgLy8vXG4gICAgICAgICAgcHJlbWlzZUNoaWxkTm9kZU5vblRlcm1pbmFsTm9kZSA9IHByZW1pc2VDaGlsZE5vZGUuaXNOb25UZXJtaW5hbE5vZGUoKTtcblxuICAgIGlmIChwcmVtaXNlQ2hpbGROb2RlTm9uVGVybWluYWxOb2RlKSB7XG4gICAgICBjb25zdCBwcmVtaXNlTm9uVGVybWluYWxDaGlsZE5vZGUgPSBwcmVtaXNlQ2hpbGROb2RlLCAgLy8vXG4gICAgICAgICAgICBwcmVtaXNlTm9uVGVybWluYWxDaGlsZE5vZGVSdWxlTmFtZSA9IHByZW1pc2VOb25UZXJtaW5hbENoaWxkTm9kZS5nZXRSdWxlTmFtZSgpLFxuICAgICAgICAgICAgcHJlbWlzZU5vblRlcm1pbmFsQ2hpbGROb2RlUnVsZU5hbWVNZXRhdmFyaWFibGVSdWxlTmFtZSA9IChwcmVtaXNlTm9uVGVybWluYWxDaGlsZE5vZGVSdWxlTmFtZSA9PT0gTUVUQVZBUklBQkxFX1JVTEVfTkFNRSk7XG5cbiAgICAgIGlmIChwcmVtaXNlTm9uVGVybWluYWxDaGlsZE5vZGVSdWxlTmFtZU1ldGF2YXJpYWJsZVJ1bGVOYW1lKSB7XG4gICAgICAgIGNvbnN0IHByZW1pc2VNZXRhdmFyaWFibGVOb2RlID0gcHJlbWlzZU5vblRlcm1pbmFsQ2hpbGROb2RlLCAgLy8vXG4gICAgICAgICAgICAgIHByZW1pc2VNZXRhVmFyaWFibGVOb2RlTWF0Y2hlcyA9IG1ldGFNYXRjaFByZW1pc2VNZXRhdmFyaWFibGVOb2RlKHByZW1pc2VNZXRhdmFyaWFibGVOb2RlLCBtZXRhc3RhdGVtZW50Tm9kZSwgbWV0YVN1YnN0aXR1dGlvbnMpO1xuXG4gICAgICAgIHByZW1pc2VNZXRhc3RhdGVtZW50Tm9kZU1hdGNoZXMgPSBwcmVtaXNlTWV0YVZhcmlhYmxlTm9kZU1hdGNoZXM7IC8vL1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBwcmVtaXNlTWV0YXN0YXRlbWVudE5vZGVNYXRjaGVzO1xufVxuIl0sIm5hbWVzIjpbIlByZW1pc2UiLCJtZXRhc3RhdGVtZW50Tm9kZXNRdWVyeSIsIm5vZGVzUXVlcnkiLCJtZXRhU3VicHJvb2ZBc3NlcnRpb25Ob2RlUXVlcnkiLCJub2RlUXVlcnkiLCJ1bnF1YWxpZmllZFN0YXRlbWVudFN0YXRlbWVudE5vZGVzUXVlcnkiLCJ1bnF1YWxpZmllZE1ldGFzdGF0ZW1lbnRNZXRhc3RhdGVtZW50Tm9kZXNRdWVyeSIsInF1YWxpZmllZE9yVW5xdWFsaWZpZWRTdGF0ZW1lbnRTdGF0ZW1lbnROb2RlUXVlcnkiLCJxdWFsaWZpZWRPclVucXVhbGlmaWVkTWV0YXN0YXRlbWVudE1ldGFzdGF0ZW1lbnROb2RlUXVlcnkiLCJtZXRhc3RhdGVtZW50Tm9kZSIsImdldE1ldGFzdGF0ZW1lbnROb2RlIiwibWF0Y2hTdWJwcm9vZk5vZGUiLCJzdWJwcm9vZk5vZGUiLCJzdWJzdGl0dXRpb25zIiwic3VicHJvb2ZOb2RlTWF0Y2hlcyIsInN1YnByb29mQXNzZXJ0aW9uTm9kZSIsIm1ldGFTdWJwcm9vZkFzc2VydGlvbk1ldGFzdGF0ZW1lbnROb2RlcyIsInVucXVhbGlmaWVkU3RhdGVtZW50U3RhdGVtZW50Tm9kZXMiLCJxdWFsaWZpZWRPclVucXVhbGlmaWVkU3RhdGVtZW50U3RhdGVtZW50Tm9kZSIsInN0YXRlbWVudE5vZGVzIiwic3RhdGVtZW50Tm9kZXNMZW5ndGgiLCJsZW5ndGgiLCJtZXRhU3VicHJvb2ZBc3NlcnRpb25NZXRhc3RhdGVtZW50Tm9kZXNMZW5ndGgiLCJldmVyeSIsIm1ldGFTdWJwcm9vZkFzc2VydGlvbk1ldGFzdGF0ZW1lbnROb2RlIiwiaW5kZXgiLCJzdGF0ZW1lbnROb2RlIiwibm9uVGVybWluYWxOb2RlIiwicHJlbWlzZU5vblRlcm1pbmFsTm9kZSIsInByZW1pc2VOb25UZXJtaW5hbE5vZGVNYXRjaGVzIiwibWF0Y2hQcmVtaXNlTm9uVGVybWluYWxOb2RlIiwibWF0Y2hTdGF0ZW1lbnROb2RlIiwic3RhdGVtZW50Tm9kZU1hdGNoZXMiLCJtYXRjaE1ldGFTdWJwcm9vZk5vZGUiLCJtZXRhU3VicHJvb2ZOb2RlIiwibWV0YVN1YnN0aXR1dGlvbnMiLCJtZXRhU3VicHJvb2ZOb2RlTWF0Y2hlcyIsIm1ldGFTdWJwcm9vZkFzc2VydGlvbk5vZGUiLCJ1bnF1YWxpZmllZE1ldGFzdGF0ZW1lbnRNZXRhc3RhdGVtZW50Tm9kZXMiLCJxdWFsaWZpZWRPclVucXVhbGlmaWVkTWV0YXN0YXRlbWVudE1ldGFzdGF0ZW1lbnROb2RlIiwibWV0YXN0YXRlbWVudE5vZGVzIiwibWV0YXN0YXRlbWVudE5vZGVzTGVuZ3RoIiwibWV0YU1hdGNoUHJlbWlzZU5vblRlcm1pbmFsTm9kZSIsIm1hdGNoTWV0YXN0YXRlbWVudE5vZGUiLCJtZXRhc3RhdGVtZW50Tm9kZU1hdGNoZXMiLCJ0b0pTT04iLCJtZXRhc3RhdGVtZW50U3RyaW5nIiwibm9kZUFzU3RyaW5nIiwibWV0YXN0YXRlbWVudCIsImpzb24iLCJmcm9tSlNPTiIsInJlbGVhc2VDb250ZXh0IiwibWV0YXN0YXRlbWVudE5vZGVGcm9tTWV0YXN0YXRlbWVudFN0cmluZyIsInByZW1pc2UiLCJmcm9tTWV0YXN0YXRlbWVudE5vZGUiLCJtYXRjaFByZW1pc2VOb2RlIiwicHJlbWlzZU5vZGUiLCJub2RlIiwicHJlbWlzZU5vZGVNYXRjaGVzIiwibm9kZVRlcm1pbmFsTm9kZSIsImlzVGVybWluYWxOb2RlIiwicnVsZU5vZGVUZXJtaW5hbE5vZGUiLCJ0ZXJtaW5hbE5vZGUiLCJwcmVtaXNlVGVybWluYWxOb2RlIiwicHJlbWlzZVRlcm1pbmFsTm9kZU1hdGNoZXMiLCJtYXRjaFByZW1pc2VUZXJtaW5hbE5vZGUiLCJtYXRjaFByZW1pc2VOb2RlcyIsInByZW1pc2VOb2RlcyIsIm5vZGVzIiwicHJlbWlzZU5vZGVzTWF0Y2hlcyIsIm5vZGVzTGVuZ3RoIiwicHJlbWlzZU5vZGVzTGVuZ3RoIiwibWF0Y2hlcyIsIm1hdGNoIiwicnVsZU5hbWUiLCJnZXRSdWxlTmFtZSIsImNoaWxkTm9kZXMiLCJnZXRDaGlsZE5vZGVzIiwicHJlbWlzZU5vblRlcm1pbmFsTm9kZVJ1bGVOYW1lIiwicHJlbWlzZU5vblRlcm1pbmFsTm9kZUNoaWxkTm9kZXMiLCJydWxlTmFtZVN0YXRlbWVudFJ1bGVOYW1lIiwiU1RBVEVNRU5UX1JVTEVfTkFNRSIsInByZW1pc2VOb25UZXJtaW5hbE5vZGVSdWxlTmFtZU1ldGFzdGF0ZW1lbnRSdWxlTmFtZSIsIk1FVEFTVEFURU1FTlRfUlVMRV9OQU1FIiwicHJlbWlzZU1ldGFzdGF0ZW1lbnROb2RlIiwicHJlbWlzZU1ldGFzdGF0ZW1lbnROb2RlTWF0Y2hlcyIsIm1hdGNoUHJlbWlzZU1ldGFzdGF0ZW1lbnROb2RlIiwicHJlbWlzZU5vblRlcm1pbmFsTm9kZUNoaWxkTm9kZXNNYXRjaGVzIiwibWF0Y2hQcmVtaXNlTWV0YXZhcmlhYmxlTm9kZSIsInByZW1pc2VNZXRhdmFyaWFibGVOb2RlIiwicHJlbWlzZU1ldGF2YXJpYWJsZU5vZGVNYXRjaGVzIiwicHJlbWlzZU1ldGF2YXJpYWJsZU5hbWUiLCJtZXRhdmFyaWFibGVOYW1lRnJvbU1ldGF2YXJpYWJsZU5vZGUiLCJzdWJzdGl0dXRpb24iLCJmaW5kIiwibWV0YXZhcmlhYmxlTmFtZSIsImdldE1ldGF2YXJpYWJsZU5hbWUiLCJzdWJzdGl0dXRpb25Ob2Rlc01hdGNoIiwiU3Vic3RpdHV0aW9uIiwiZnJvbU1ldGF2YXJpYWJsZU5hbWVBbmRTdGF0ZW1lbnROb2RlIiwicHVzaCIsInByZW1pc2VOb25UZXJtaW5hbE5vZGVDaGlsZE5vZGVzTGVuZ3RoIiwiZmlyc3RQcmVtaXNlQ2hpbGROb2RlIiwiZmlyc3QiLCJwcmVtaXNlQ2hpbGROb2RlIiwicHJlbWlzZUNoaWxkTm9kZU5vblRlcm1pbmFsTm9kZSIsImlzTm9uVGVybWluYWxOb2RlIiwicHJlbWlzZU5vblRlcm1pbmFsQ2hpbGROb2RlIiwicHJlbWlzZU5vblRlcm1pbmFsQ2hpbGROb2RlUnVsZU5hbWUiLCJwcmVtaXNlTm9uVGVybWluYWxDaGlsZE5vZGVSdWxlTmFtZU1ldGF2YXJpYWJsZVJ1bGVOYW1lIiwiTUVUQVZBUklBQkxFX1JVTEVfTkFNRSIsInByZW1pc2VNZXRhVmFyaWFibGVOb2RlTWF0Y2hlcyIsIm1ldGFNYXRjaFByZW1pc2VOb2RlIiwibWV0YU1hdGNoUHJlbWlzZVRlcm1pbmFsTm9kZSIsIm1ldGFNYXRjaFByZW1pc2VOb2RlcyIsInJ1bGVOYW1lTWV0YXN0YXRlbWVudFJ1bGVOYW1lIiwibWV0YU1hdGNoUHJlbWlzZU1ldGFzdGF0ZW1lbnROb2RlIiwibWV0YU1hdGNoUHJlbWlzZU1ldGF2YXJpYWJsZU5vZGUiLCJtZXRhU3Vic3RpdHV0aW9uIiwibWV0YVN1YnN0aXR1dGlvbk5vZGVzTWF0Y2giLCJNZXRhU3Vic3RpdHV0aW9uIiwiZnJvbU1ldGF2YXJpYWJsZU5hbWVBbmRNZXRhc3RhdGVtZW50Tm9kZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFtQnFCQTs7O2lFQWpCSTtxRUFDSTtxQkFFUDtzQkFDTztxQkFDUzt5QkFHK0M7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXJGLElBQU1DLDBCQUEwQkMsSUFBQUEsaUJBQVUsRUFBQyx5Q0FDckND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