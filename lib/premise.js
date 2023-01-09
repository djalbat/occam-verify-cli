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
    var ruleName = nonTerminalNode.getRuleName(), childNodes = nonTerminalNode.getChildNodes(), premiseNonTerminalNodeRuleName = premiseNonTerminalNode.getRuleName(), premiseNonTerminalNodeChildNodes = premiseNonTerminalNode.getChildNodes(), nodes = childNodes, premiseNodes = premiseNonTerminalNodeChildNodes, ruleNameStatementRuleName = ruleName === _ruleNames.STATEMENT_RULE_NAME, premiseNonTerminalNodeRuleNameMetastatementRuleName = premiseNonTerminalNodeRuleName === _ruleNames.METASTATEMENT_RULE_NAME;
    if (ruleNameStatementRuleName && premiseNonTerminalNodeRuleNameMetastatementRuleName) {
        var statementNode = nonTerminalNode, premiseMetastatementNode = premiseNonTerminalNode, premiseMetastatementNodeMatches = matchPremiseMetastatementNode(premiseMetastatementNode, statementNode, substitutions);
        if (premiseMetastatementNodeMatches) {
            premiseNonTerminalNodeMatches = true;
        } else {
            var premiseNonTerminalNodeChildNodesMatches = matchPremiseNodes(premiseNodes, nodes, substitutions);
            premiseNonTerminalNodeMatches = premiseNonTerminalNodeChildNodesMatches; ///
        }
    } else if (ruleName === premiseNonTerminalNodeRuleName) {
        var premiseNonTerminalNodeChildNodesMatches1 = matchPremiseNodes(premiseNodes, nodes, substitutions);
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
    var ruleName = nonTerminalNode.getRuleName(), childNodes = nonTerminalNode.getChildNodes(), premiseNonTerminalNodeRuleName = premiseNonTerminalNode.getRuleName(), premiseNonTerminalNodeChildNodes = premiseNonTerminalNode.getChildNodes(), nodes = childNodes, premiseNodes = premiseNonTerminalNodeChildNodes, ruleNameMetastatementRuleName = ruleName === _ruleNames.METASTATEMENT_RULE_NAME, premiseNonTerminalNodeRuleNameMetastatementRuleName = premiseNonTerminalNodeRuleName === _ruleNames.METASTATEMENT_RULE_NAME;
    if (ruleNameMetastatementRuleName && premiseNonTerminalNodeRuleNameMetastatementRuleName) {
        var metastatementNode = nonTerminalNode, premiseMetastatementNode = premiseNonTerminalNode, premiseMetastatementNodeMatches = metaMatchPremiseMetastatementNode(premiseMetastatementNode, metastatementNode, metaSubstitutions);
        if (premiseMetastatementNodeMatches) {
            premiseNonTerminalNodeMatches = true;
        } else {
            var premiseNonTerminalNodeChildNodesMatches = metaMatchPremiseNodes(premiseNodes, nodes, metaSubstitutions);
            premiseNonTerminalNodeMatches = premiseNonTerminalNodeChildNodesMatches; ///
        }
    } else if (ruleName === premiseNonTerminalNodeRuleName) {
        var premiseNonTerminalNodeChildNodesMatches1 = metaMatchPremiseNodes(premiseNodes, nodes, metaSubstitutions);
        premiseNonTerminalNodeMatches = premiseNonTerminalNodeChildNodesMatches1; ///
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9wcmVtaXNlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgU3Vic3RpdHV0aW9uIGZyb20gXCIuL3N1YnN0aXR1dGlvblwiO1xuaW1wb3J0IE1ldGFTdWJzdGl0dXRpb24gZnJvbSBcIi4vbWV0YVN1YnN0aXR1dGlvblwiO1xuXG5pbXBvcnQgeyBmaXJzdCB9IGZyb20gXCIuL3V0aWxpdGllcy9hcnJheVwiO1xuaW1wb3J0IHsgbm9kZUFzU3RyaW5nIH0gZnJvbSBcIi4vdXRpbGl0aWVzL3N0cmluZ1wiO1xuaW1wb3J0IHsgbm9kZVF1ZXJ5LCBub2Rlc1F1ZXJ5IH0gZnJvbSBcIi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5pbXBvcnQgeyBtZXRhdmFyaWFibGVOYW1lRnJvbU1ldGF2YXJpYWJsZU5vZGUgfSBmcm9tIFwiLi91dGlsaXRpZXMvcXVlcnlcIjtcbmltcG9ydCB7IG1ldGFzdGF0ZW1lbnROb2RlRnJvbU1ldGFzdGF0ZW1lbnRTdHJpbmcgfSBmcm9tIFwiLi91dGlsaXRpZXMvc3RyaW5nXCI7XG5pbXBvcnQgeyBTVEFURU1FTlRfUlVMRV9OQU1FLCBNRVRBU1RBVEVNRU5UX1JVTEVfTkFNRSwgTUVUQVZBUklBQkxFX1JVTEVfTkFNRSB9IGZyb20gXCIuL3J1bGVOYW1lc1wiO1xuXG5jb25zdCBtZXRhc3RhdGVtZW50Tm9kZXNRdWVyeSA9IG5vZGVzUXVlcnkoXCIvbWV0YVN1YnByb29mQXNzZXJ0aW9uL21ldGFzdGF0ZW1lbnRcIiksXG4gICAgICBtZXRhU3VicHJvb2ZBc3NlcnRpb25Ob2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvbWV0YXN0YXRlbWVudC9tZXRhU3VicHJvb2ZBc3NlcnRpb24hXCIpLFxuICAgICAgdW5xdWFsaWZpZWRTdGF0ZW1lbnRTdGF0ZW1lbnROb2Rlc1F1ZXJ5ID0gbm9kZXNRdWVyeShcIi9zdWJwcm9vZi91bnF1YWxpZmllZFN0YXRlbWVudC9zdGF0ZW1lbnQhXCIpLFxuICAgICAgdW5xdWFsaWZpZWRNZXRhc3RhdGVtZW50TWV0YXN0YXRlbWVudE5vZGVzUXVlcnkgPSBub2Rlc1F1ZXJ5KFwiL21ldGFTdWJwcm9vZi91bnF1YWxpZmllZE1ldGFzdGF0ZW1lbnQvbWV0YXN0YXRlbWVudCFcIiksXG4gICAgICBxdWFsaWZpZWRPclVucXVhbGlmaWVkU3RhdGVtZW50U3RhdGVtZW50Tm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3N1YnByb29mL2Rlcml2YXRpb258YWJyaWRnZWREZXJpdmF0aW9uL3F1YWxpZmllZFN0YXRlbWVudHx1bnF1YWxpZmllZFN0YXRlbWVudFstMV0vc3RhdGVtZW50IVwiKSxcbiAgICAgIHF1YWxpZmllZE9yVW5xdWFsaWZpZWRNZXRhc3RhdGVtZW50TWV0YXN0YXRlbWVudE5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9tZXRhU3VicHJvb2YvbWV0YURlcml2YXRpb258YWJyaWRnZWRNZXRhRGVyaXZhdGlvbi9xdWFsaWZpZWRNZXRhc3RhdGVtZW50fHVucXVhbGlmaWVkTWV0YXN0YXRlbWVudFstMV0vbWV0YXN0YXRlbWVudCFcIik7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFByZW1pc2Uge1xuICBjb25zdHJ1Y3RvcihtZXRhc3RhdGVtZW50Tm9kZSkge1xuICAgIHRoaXMubWV0YXN0YXRlbWVudE5vZGUgPSBtZXRhc3RhdGVtZW50Tm9kZTtcbiAgfVxuXG4gIGdldE1ldGFzdGF0ZW1lbnROb2RlKCkge1xuICAgIHJldHVybiB0aGlzLm1ldGFzdGF0ZW1lbnROb2RlO1xuICB9XG5cbiAgbWF0Y2hTdWJwcm9vZk5vZGUoc3VicHJvb2ZOb2RlLCBzdWJzdGl0dXRpb25zKSB7XG4gICAgbGV0IHN1YnByb29mTm9kZU1hdGNoZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IHN1YnByb29mQXNzZXJ0aW9uTm9kZSA9IG1ldGFTdWJwcm9vZkFzc2VydGlvbk5vZGVRdWVyeSh0aGlzLm1ldGFzdGF0ZW1lbnROb2RlKTtcblxuICAgIGlmIChzdWJwcm9vZkFzc2VydGlvbk5vZGUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IG1ldGFTdWJwcm9vZkFzc2VydGlvbk1ldGFzdGF0ZW1lbnROb2RlcyA9IG1ldGFzdGF0ZW1lbnROb2Rlc1F1ZXJ5KHN1YnByb29mQXNzZXJ0aW9uTm9kZSksXG4gICAgICAgICAgICB1bnF1YWxpZmllZFN0YXRlbWVudFN0YXRlbWVudE5vZGVzID0gdW5xdWFsaWZpZWRTdGF0ZW1lbnRTdGF0ZW1lbnROb2Rlc1F1ZXJ5KHN1YnByb29mTm9kZSksXG4gICAgICAgICAgICBxdWFsaWZpZWRPclVucXVhbGlmaWVkU3RhdGVtZW50U3RhdGVtZW50Tm9kZSA9IHF1YWxpZmllZE9yVW5xdWFsaWZpZWRTdGF0ZW1lbnRTdGF0ZW1lbnROb2RlUXVlcnkoc3VicHJvb2ZOb2RlKSxcbiAgICAgICAgICAgIHN0YXRlbWVudE5vZGVzID0gW1xuICAgICAgICAgICAgICAuLi51bnF1YWxpZmllZFN0YXRlbWVudFN0YXRlbWVudE5vZGVzLFxuICAgICAgICAgICAgICBxdWFsaWZpZWRPclVucXVhbGlmaWVkU3RhdGVtZW50U3RhdGVtZW50Tm9kZVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIHN0YXRlbWVudE5vZGVzTGVuZ3RoID0gc3RhdGVtZW50Tm9kZXMubGVuZ3RoLFxuICAgICAgICAgICAgbWV0YVN1YnByb29mQXNzZXJ0aW9uTWV0YXN0YXRlbWVudE5vZGVzTGVuZ3RoID0gbWV0YVN1YnByb29mQXNzZXJ0aW9uTWV0YXN0YXRlbWVudE5vZGVzLmxlbmd0aDtcblxuICAgICAgaWYgKHN0YXRlbWVudE5vZGVzTGVuZ3RoID09PSBtZXRhU3VicHJvb2ZBc3NlcnRpb25NZXRhc3RhdGVtZW50Tm9kZXNMZW5ndGgpIHtcbiAgICAgICAgc3VicHJvb2ZOb2RlTWF0Y2hlcyA9IG1ldGFTdWJwcm9vZkFzc2VydGlvbk1ldGFzdGF0ZW1lbnROb2Rlcy5ldmVyeSgobWV0YVN1YnByb29mQXNzZXJ0aW9uTWV0YXN0YXRlbWVudE5vZGUsIGluZGV4KSA9PiB7XG4gICAgICAgICAgY29uc3Qgc3RhdGVtZW50Tm9kZSA9IHN0YXRlbWVudE5vZGVzW2luZGV4XSxcbiAgICAgICAgICAgICAgICBub25UZXJtaW5hbE5vZGUgPSBzdGF0ZW1lbnROb2RlLCAvLy9cbiAgICAgICAgICAgICAgICBwcmVtaXNlTm9uVGVybWluYWxOb2RlID0gbWV0YVN1YnByb29mQXNzZXJ0aW9uTWV0YXN0YXRlbWVudE5vZGUsICAvLy9cbiAgICAgICAgICAgICAgICBwcmVtaXNlTm9uVGVybWluYWxOb2RlTWF0Y2hlcyA9IG1hdGNoUHJlbWlzZU5vblRlcm1pbmFsTm9kZShwcmVtaXNlTm9uVGVybWluYWxOb2RlLCBub25UZXJtaW5hbE5vZGUsIHN1YnN0aXR1dGlvbnMpO1xuXG4gICAgICAgICAgaWYgKHByZW1pc2VOb25UZXJtaW5hbE5vZGVNYXRjaGVzKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBzdWJwcm9vZk5vZGVNYXRjaGVzO1xuICB9XG5cbiAgbWF0Y2hTdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUsIHN1YnN0aXR1dGlvbnMpIHtcbiAgICBjb25zdCBub25UZXJtaW5hbE5vZGUgPSBzdGF0ZW1lbnROb2RlLCAgLy8vXG4gICAgICAgICAgcHJlbWlzZU5vblRlcm1pbmFsTm9kZSA9IHRoaXMubWV0YXN0YXRlbWVudE5vZGUsICAvLy9cbiAgICAgICAgICBwcmVtaXNlTm9uVGVybWluYWxOb2RlTWF0Y2hlcyA9IG1hdGNoUHJlbWlzZU5vblRlcm1pbmFsTm9kZShwcmVtaXNlTm9uVGVybWluYWxOb2RlLCBub25UZXJtaW5hbE5vZGUsIHN1YnN0aXR1dGlvbnMpLFxuICAgICAgICAgIHN0YXRlbWVudE5vZGVNYXRjaGVzID0gcHJlbWlzZU5vblRlcm1pbmFsTm9kZU1hdGNoZXM7IC8vL1xuXG4gICAgcmV0dXJuIHN0YXRlbWVudE5vZGVNYXRjaGVzO1xuICB9XG5cbiAgbWF0Y2hNZXRhU3VicHJvb2ZOb2RlKG1ldGFTdWJwcm9vZk5vZGUsIG1ldGFTdWJzdGl0dXRpb25zKSB7XG4gICAgbGV0IG1ldGFTdWJwcm9vZk5vZGVNYXRjaGVzID0gZmFsc2U7XG5cbiAgICBjb25zdCBtZXRhU3VicHJvb2ZBc3NlcnRpb25Ob2RlID0gbWV0YVN1YnByb29mQXNzZXJ0aW9uTm9kZVF1ZXJ5KHRoaXMubWV0YXN0YXRlbWVudE5vZGUpO1xuXG4gICAgaWYgKG1ldGFTdWJwcm9vZkFzc2VydGlvbk5vZGUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IG1ldGFTdWJwcm9vZkFzc2VydGlvbk1ldGFzdGF0ZW1lbnROb2RlcyA9IG1ldGFzdGF0ZW1lbnROb2Rlc1F1ZXJ5KG1ldGFTdWJwcm9vZkFzc2VydGlvbk5vZGUpLFxuICAgICAgICAgICAgdW5xdWFsaWZpZWRNZXRhc3RhdGVtZW50TWV0YXN0YXRlbWVudE5vZGVzID0gdW5xdWFsaWZpZWRNZXRhc3RhdGVtZW50TWV0YXN0YXRlbWVudE5vZGVzUXVlcnkobWV0YVN1YnByb29mTm9kZSksXG4gICAgICAgICAgICBxdWFsaWZpZWRPclVucXVhbGlmaWVkTWV0YXN0YXRlbWVudE1ldGFzdGF0ZW1lbnROb2RlID0gcXVhbGlmaWVkT3JVbnF1YWxpZmllZE1ldGFzdGF0ZW1lbnRNZXRhc3RhdGVtZW50Tm9kZVF1ZXJ5KG1ldGFTdWJwcm9vZk5vZGUpLFxuICAgICAgICAgICAgbWV0YXN0YXRlbWVudE5vZGVzID0gW1xuICAgICAgICAgICAgICAuLi51bnF1YWxpZmllZE1ldGFzdGF0ZW1lbnRNZXRhc3RhdGVtZW50Tm9kZXMsXG4gICAgICAgICAgICAgIHF1YWxpZmllZE9yVW5xdWFsaWZpZWRNZXRhc3RhdGVtZW50TWV0YXN0YXRlbWVudE5vZGVcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBtZXRhc3RhdGVtZW50Tm9kZXNMZW5ndGggPSBtZXRhc3RhdGVtZW50Tm9kZXMubGVuZ3RoLFxuICAgICAgICAgICAgbWV0YVN1YnByb29mQXNzZXJ0aW9uTWV0YXN0YXRlbWVudE5vZGVzTGVuZ3RoID0gbWV0YVN1YnByb29mQXNzZXJ0aW9uTWV0YXN0YXRlbWVudE5vZGVzLmxlbmd0aDtcblxuICAgICAgaWYgKG1ldGFzdGF0ZW1lbnROb2Rlc0xlbmd0aCA9PT0gbWV0YVN1YnByb29mQXNzZXJ0aW9uTWV0YXN0YXRlbWVudE5vZGVzTGVuZ3RoKSB7XG4gICAgICAgIG1ldGFTdWJwcm9vZk5vZGVNYXRjaGVzID0gbWV0YVN1YnByb29mQXNzZXJ0aW9uTWV0YXN0YXRlbWVudE5vZGVzLmV2ZXJ5KChtZXRhU3VicHJvb2ZBc3NlcnRpb25NZXRhc3RhdGVtZW50Tm9kZSwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG1ldGFzdGF0ZW1lbnROb2RlID0gbWV0YXN0YXRlbWVudE5vZGVzW2luZGV4XSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vblRlcm1pbmFsTm9kZSA9IG1ldGFzdGF0ZW1lbnROb2RlLCAvLy9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByZW1pc2VOb25UZXJtaW5hbE5vZGUgPSBtZXRhU3VicHJvb2ZBc3NlcnRpb25NZXRhc3RhdGVtZW50Tm9kZSwgIC8vL1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJlbWlzZU5vblRlcm1pbmFsTm9kZU1hdGNoZXMgPSBtZXRhTWF0Y2hQcmVtaXNlTm9uVGVybWluYWxOb2RlKHByZW1pc2VOb25UZXJtaW5hbE5vZGUsIG5vblRlcm1pbmFsTm9kZSwgbWV0YVN1YnN0aXR1dGlvbnMpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocHJlbWlzZU5vblRlcm1pbmFsTm9kZU1hdGNoZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG1ldGFTdWJwcm9vZk5vZGVNYXRjaGVzO1xuICB9XG5cbiAgbWF0Y2hNZXRhc3RhdGVtZW50Tm9kZShtZXRhc3RhdGVtZW50Tm9kZSwgbWV0YVN1YnN0aXR1dGlvbnMpIHtcbiAgICBjb25zdCBub25UZXJtaW5hbE5vZGUgPSBtZXRhc3RhdGVtZW50Tm9kZSwgIC8vL1xuICAgICAgICAgIHByZW1pc2VOb25UZXJtaW5hbE5vZGUgPSB0aGlzLm1ldGFzdGF0ZW1lbnROb2RlLCAgLy8vXG4gICAgICAgICAgcHJlbWlzZU5vblRlcm1pbmFsTm9kZU1hdGNoZXMgPSBtZXRhTWF0Y2hQcmVtaXNlTm9uVGVybWluYWxOb2RlKHByZW1pc2VOb25UZXJtaW5hbE5vZGUsIG5vblRlcm1pbmFsTm9kZSwgbWV0YVN1YnN0aXR1dGlvbnMpLFxuICAgICAgICAgIG1ldGFzdGF0ZW1lbnROb2RlTWF0Y2hlcyA9IHByZW1pc2VOb25UZXJtaW5hbE5vZGVNYXRjaGVzOyAvLy9cblxuICAgIHJldHVybiBtZXRhc3RhdGVtZW50Tm9kZU1hdGNoZXM7XG4gIH1cblxuICB0b0pTT04oKSB7XG4gICAgY29uc3QgbWV0YXN0YXRlbWVudFN0cmluZyA9IG5vZGVBc1N0cmluZyh0aGlzLm1ldGFzdGF0ZW1lbnROb2RlKSxcbiAgICAgICAgICBtZXRhc3RhdGVtZW50ID0gbWV0YXN0YXRlbWVudFN0cmluZywgLy8vXG4gICAgICAgICAganNvbiA9IHtcbiAgICAgICAgICAgIG1ldGFzdGF0ZW1lbnRcbiAgICAgICAgICB9O1xuXG4gICAgcmV0dXJuIGpzb247XG4gIH1cblxuICBzdGF0aWMgZnJvbUpTT04oanNvbiwgcmVsZWFzZUNvbnRleHQpIHtcbiAgICBjb25zdCB7IG1ldGFzdGF0ZW1lbnQgfSA9IGpzb24sXG4gICAgICAgICAgbWV0YXN0YXRlbWVudFN0cmluZyA9IG1ldGFzdGF0ZW1lbnQsICAvLy9cbiAgICAgICAgICBtZXRhc3RhdGVtZW50Tm9kZSA9IG1ldGFzdGF0ZW1lbnROb2RlRnJvbU1ldGFzdGF0ZW1lbnRTdHJpbmcobWV0YXN0YXRlbWVudFN0cmluZywgcmVsZWFzZUNvbnRleHQpLFxuICAgICAgICAgIHByZW1pc2UgPSBuZXcgUHJlbWlzZShtZXRhc3RhdGVtZW50Tm9kZSk7XG5cbiAgICByZXR1cm4gcHJlbWlzZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTWV0YXN0YXRlbWVudE5vZGUobWV0YXN0YXRlbWVudE5vZGUpIHtcbiAgICBjb25zdCBwcmVtaXNlID0gbmV3IFByZW1pc2UobWV0YXN0YXRlbWVudE5vZGUpO1xuXG4gICAgcmV0dXJuIHByZW1pc2U7XG4gIH1cbn1cblxuZnVuY3Rpb24gbWF0Y2hQcmVtaXNlTm9kZShwcmVtaXNlTm9kZSwgbm9kZSwgc3Vic3RpdHV0aW9ucykge1xuICBsZXQgcHJlbWlzZU5vZGVNYXRjaGVzID0gZmFsc2U7XG5cbiAgY29uc3Qgbm9kZVRlcm1pbmFsTm9kZSA9IG5vZGUuaXNUZXJtaW5hbE5vZGUoKSxcbiAgICBydWxlTm9kZVRlcm1pbmFsTm9kZSA9IHByZW1pc2VOb2RlLmlzVGVybWluYWxOb2RlKCk7XG5cbiAgaWYgKG5vZGVUZXJtaW5hbE5vZGUgPT09IHJ1bGVOb2RlVGVybWluYWxOb2RlKSB7XG4gICAgaWYgKG5vZGVUZXJtaW5hbE5vZGUpIHtcbiAgICAgIGNvbnN0IHRlcm1pbmFsTm9kZSA9IG5vZGUsICAvLy9cbiAgICAgICAgICAgIHByZW1pc2VUZXJtaW5hbE5vZGUgPSBwcmVtaXNlTm9kZSwgIC8vL1xuICAgICAgICAgICAgcHJlbWlzZVRlcm1pbmFsTm9kZU1hdGNoZXMgPSBtYXRjaFByZW1pc2VUZXJtaW5hbE5vZGUocHJlbWlzZVRlcm1pbmFsTm9kZSwgdGVybWluYWxOb2RlLCBzdWJzdGl0dXRpb25zKTtcblxuICAgICAgcHJlbWlzZU5vZGVNYXRjaGVzID0gcHJlbWlzZVRlcm1pbmFsTm9kZU1hdGNoZXM7ICAvLy9cbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3Qgbm9uVGVybWluYWxOb2RlID0gbm9kZSwgLy8vXG4gICAgICAgICAgICBwcmVtaXNlTm9uVGVybWluYWxOb2RlID0gcHJlbWlzZU5vZGUsICAvLy9cbiAgICAgICAgICAgIHByZW1pc2VOb25UZXJtaW5hbE5vZGVNYXRjaGVzID0gbWF0Y2hQcmVtaXNlTm9uVGVybWluYWxOb2RlKHByZW1pc2VOb25UZXJtaW5hbE5vZGUsIG5vblRlcm1pbmFsTm9kZSwgc3Vic3RpdHV0aW9ucyk7XG5cbiAgICAgIHByZW1pc2VOb2RlTWF0Y2hlcyA9IHByZW1pc2VOb25UZXJtaW5hbE5vZGVNYXRjaGVzOyAvLy9cbiAgICB9XG4gIH1cblxuICByZXR1cm4gcHJlbWlzZU5vZGVNYXRjaGVzO1xufVxuXG5mdW5jdGlvbiBtYXRjaFByZW1pc2VOb2RlcyhwcmVtaXNlTm9kZXMsIG5vZGVzLCBzdWJzdGl0dXRpb25zKSB7XG4gIGxldCBwcmVtaXNlTm9kZXNNYXRjaGVzID0gZmFsc2U7XG5cbiAgY29uc3Qgbm9kZXNMZW5ndGggPSBub2Rlcy5sZW5ndGgsXG4gICAgICAgIHByZW1pc2VOb2Rlc0xlbmd0aCA9IHByZW1pc2VOb2Rlcy5sZW5ndGg7XG5cbiAgaWYgKG5vZGVzTGVuZ3RoID09PSBwcmVtaXNlTm9kZXNMZW5ndGgpIHtcbiAgICBwcmVtaXNlTm9kZXNNYXRjaGVzID0gbm9kZXMuZXZlcnkoKG5vZGUsIGluZGV4KSA9PiB7XG4gICAgICBjb25zdCBwcmVtaXNlTm9kZSA9IHByZW1pc2VOb2Rlc1tpbmRleF0sXG4gICAgICAgICAgICBwcmVtaXNlTm9kZU1hdGNoZXMgPSBtYXRjaFByZW1pc2VOb2RlKHByZW1pc2VOb2RlLCBub2RlLCBzdWJzdGl0dXRpb25zKTtcblxuICAgICAgaWYgKHByZW1pc2VOb2RlTWF0Y2hlcykge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHJldHVybiBwcmVtaXNlTm9kZXNNYXRjaGVzO1xufVxuXG5mdW5jdGlvbiBtYXRjaFByZW1pc2VUZXJtaW5hbE5vZGUocHJlbWlzZVRlcm1pbmFsTm9kZSwgdGVybWluYWxOb2RlLCBzdWJzdGl0dXRpb25zKSB7XG4gIGNvbnN0IG1hdGNoZXMgPSBwcmVtaXNlVGVybWluYWxOb2RlLm1hdGNoKHRlcm1pbmFsTm9kZSksXG4gICAgICAgIHByZW1pc2VUZXJtaW5hbE5vZGVNYXRjaGVzID0gbWF0Y2hlcztcblxuICByZXR1cm4gcHJlbWlzZVRlcm1pbmFsTm9kZU1hdGNoZXM7XG59XG5cbmZ1bmN0aW9uIG1hdGNoUHJlbWlzZU5vblRlcm1pbmFsTm9kZShwcmVtaXNlTm9uVGVybWluYWxOb2RlLCBub25UZXJtaW5hbE5vZGUsIHN1YnN0aXR1dGlvbnMpIHtcbiAgbGV0IHByZW1pc2VOb25UZXJtaW5hbE5vZGVNYXRjaGVzID0gZmFsc2U7XG5cbiAgY29uc3QgcnVsZU5hbWUgPSBub25UZXJtaW5hbE5vZGUuZ2V0UnVsZU5hbWUoKSxcbiAgICAgICAgY2hpbGROb2RlcyA9IG5vblRlcm1pbmFsTm9kZS5nZXRDaGlsZE5vZGVzKCksXG4gICAgICAgIHByZW1pc2VOb25UZXJtaW5hbE5vZGVSdWxlTmFtZSA9IHByZW1pc2VOb25UZXJtaW5hbE5vZGUuZ2V0UnVsZU5hbWUoKSxcbiAgICAgICAgcHJlbWlzZU5vblRlcm1pbmFsTm9kZUNoaWxkTm9kZXMgPSBwcmVtaXNlTm9uVGVybWluYWxOb2RlLmdldENoaWxkTm9kZXMoKSxcbiAgICAgICAgbm9kZXMgPSBjaGlsZE5vZGVzLCAvLy9cbiAgICAgICAgcHJlbWlzZU5vZGVzID0gcHJlbWlzZU5vblRlcm1pbmFsTm9kZUNoaWxkTm9kZXMsIC8vL1xuICAgICAgICBydWxlTmFtZVN0YXRlbWVudFJ1bGVOYW1lID0gKHJ1bGVOYW1lID09PSBTVEFURU1FTlRfUlVMRV9OQU1FKSxcbiAgICAgICAgcHJlbWlzZU5vblRlcm1pbmFsTm9kZVJ1bGVOYW1lTWV0YXN0YXRlbWVudFJ1bGVOYW1lID0gKHByZW1pc2VOb25UZXJtaW5hbE5vZGVSdWxlTmFtZSA9PT0gTUVUQVNUQVRFTUVOVF9SVUxFX05BTUUpO1xuXG4gIGlmIChydWxlTmFtZVN0YXRlbWVudFJ1bGVOYW1lICYmIHByZW1pc2VOb25UZXJtaW5hbE5vZGVSdWxlTmFtZU1ldGFzdGF0ZW1lbnRSdWxlTmFtZSkge1xuICAgIGNvbnN0IHN0YXRlbWVudE5vZGUgPSBub25UZXJtaW5hbE5vZGUsICAvLy9cbiAgICAgICAgICBwcmVtaXNlTWV0YXN0YXRlbWVudE5vZGUgPSBwcmVtaXNlTm9uVGVybWluYWxOb2RlLCAgLy8vXG4gICAgICAgICAgcHJlbWlzZU1ldGFzdGF0ZW1lbnROb2RlTWF0Y2hlcyA9IG1hdGNoUHJlbWlzZU1ldGFzdGF0ZW1lbnROb2RlKHByZW1pc2VNZXRhc3RhdGVtZW50Tm9kZSwgc3RhdGVtZW50Tm9kZSwgc3Vic3RpdHV0aW9ucyk7XG5cbiAgICBpZiAocHJlbWlzZU1ldGFzdGF0ZW1lbnROb2RlTWF0Y2hlcykge1xuICAgICAgcHJlbWlzZU5vblRlcm1pbmFsTm9kZU1hdGNoZXMgPSB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBwcmVtaXNlTm9uVGVybWluYWxOb2RlQ2hpbGROb2Rlc01hdGNoZXMgPSBtYXRjaFByZW1pc2VOb2RlcyhwcmVtaXNlTm9kZXMsIG5vZGVzLCBzdWJzdGl0dXRpb25zKTtcblxuICAgICAgcHJlbWlzZU5vblRlcm1pbmFsTm9kZU1hdGNoZXMgPSBwcmVtaXNlTm9uVGVybWluYWxOb2RlQ2hpbGROb2Rlc01hdGNoZXM7IC8vL1xuICAgIH1cbiAgfSBlbHNlIGlmIChydWxlTmFtZSA9PT0gcHJlbWlzZU5vblRlcm1pbmFsTm9kZVJ1bGVOYW1lKSB7XG4gICAgY29uc3QgcHJlbWlzZU5vblRlcm1pbmFsTm9kZUNoaWxkTm9kZXNNYXRjaGVzID0gbWF0Y2hQcmVtaXNlTm9kZXMocHJlbWlzZU5vZGVzLCBub2Rlcywgc3Vic3RpdHV0aW9ucyk7XG5cbiAgICBwcmVtaXNlTm9uVGVybWluYWxOb2RlTWF0Y2hlcyA9IHByZW1pc2VOb25UZXJtaW5hbE5vZGVDaGlsZE5vZGVzTWF0Y2hlczsgLy8vXG4gIH1cblxuICByZXR1cm4gcHJlbWlzZU5vblRlcm1pbmFsTm9kZU1hdGNoZXM7XG59XG5cbmZ1bmN0aW9uIG1hdGNoUHJlbWlzZU1ldGF2YXJpYWJsZU5vZGUocHJlbWlzZU1ldGF2YXJpYWJsZU5vZGUsIHN0YXRlbWVudE5vZGUsIHN1YnN0aXR1dGlvbnMpIHtcbiAgbGV0IHByZW1pc2VNZXRhdmFyaWFibGVOb2RlTWF0Y2hlcztcblxuICBjb25zdCBwcmVtaXNlTWV0YXZhcmlhYmxlTmFtZSA9IG1ldGF2YXJpYWJsZU5hbWVGcm9tTWV0YXZhcmlhYmxlTm9kZShwcmVtaXNlTWV0YXZhcmlhYmxlTm9kZSksXG4gICAgICAgIHN1YnN0aXR1dGlvbiA9IHN1YnN0aXR1dGlvbnMuZmluZCgoc3Vic3RpdHV0aW9uKSA9PiB7XG4gICAgICAgICAgY29uc3QgbWV0YXZhcmlhYmxlTmFtZSA9IHN1YnN0aXR1dGlvbi5nZXRNZXRhdmFyaWFibGVOYW1lKCk7XG5cbiAgICAgICAgICBpZiAobWV0YXZhcmlhYmxlTmFtZSA9PT0gcHJlbWlzZU1ldGF2YXJpYWJsZU5hbWUpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfSkgfHwgbnVsbDtcblxuICBpZiAoc3Vic3RpdHV0aW9uICE9PSBudWxsKSB7XG4gICAgY29uc3Qgc3Vic3RpdHV0aW9uTm9kZXNNYXRjaCA9IHN1YnN0aXR1dGlvbi5tYXRjaFN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSk7XG5cbiAgICBwcmVtaXNlTWV0YXZhcmlhYmxlTm9kZU1hdGNoZXMgPSBzdWJzdGl0dXRpb25Ob2Rlc01hdGNoOyAgLy8vXG4gIH0gZWxzZSB7XG4gICAgY29uc3QgbWV0YXZhcmlhYmxlTmFtZSA9IHByZW1pc2VNZXRhdmFyaWFibGVOYW1lLCAvLy9cbiAgICAgICAgICBzdWJzdGl0dXRpb24gPSBTdWJzdGl0dXRpb24uZnJvbU1ldGF2YXJpYWJsZU5hbWVBbmRTdGF0ZW1lbnROb2RlKG1ldGF2YXJpYWJsZU5hbWUsIHN0YXRlbWVudE5vZGUpO1xuXG4gICAgc3Vic3RpdHV0aW9ucy5wdXNoKHN1YnN0aXR1dGlvbik7XG5cbiAgICBwcmVtaXNlTWV0YXZhcmlhYmxlTm9kZU1hdGNoZXMgPSB0cnVlO1xuICB9XG5cbiAgcmV0dXJuIHByZW1pc2VNZXRhdmFyaWFibGVOb2RlTWF0Y2hlcztcbn1cblxuZnVuY3Rpb24gbWF0Y2hQcmVtaXNlTWV0YXN0YXRlbWVudE5vZGUocHJlbWlzZU1ldGFzdGF0ZW1lbnROb2RlLCBzdGF0ZW1lbnROb2RlLCBzdWJzdGl0dXRpb25zKSB7XG4gIGxldCBwcmVtaXNlTWV0YXN0YXRlbWVudE5vZGVNYXRjaGVzID0gZmFsc2U7XG5cbiAgY29uc3QgcHJlbWlzZU5vblRlcm1pbmFsTm9kZSA9IHByZW1pc2VNZXRhc3RhdGVtZW50Tm9kZSwgIC8vL1xuICAgICAgICBwcmVtaXNlTm9uVGVybWluYWxOb2RlQ2hpbGROb2RlcyA9IHByZW1pc2VOb25UZXJtaW5hbE5vZGUuZ2V0Q2hpbGROb2RlcygpLFxuICAgICAgICBwcmVtaXNlTm9uVGVybWluYWxOb2RlQ2hpbGROb2Rlc0xlbmd0aCA9IHByZW1pc2VOb25UZXJtaW5hbE5vZGVDaGlsZE5vZGVzLmxlbmd0aDtcblxuICBpZiAocHJlbWlzZU5vblRlcm1pbmFsTm9kZUNoaWxkTm9kZXNMZW5ndGggPT09IDEpIHtcbiAgICBjb25zdCBmaXJzdFByZW1pc2VDaGlsZE5vZGUgPSBmaXJzdChwcmVtaXNlTm9uVGVybWluYWxOb2RlQ2hpbGROb2RlcyksXG4gICAgICAgICAgcHJlbWlzZUNoaWxkTm9kZSA9IGZpcnN0UHJlbWlzZUNoaWxkTm9kZSwgIC8vL1xuICAgICAgICAgIHByZW1pc2VDaGlsZE5vZGVOb25UZXJtaW5hbE5vZGUgPSBwcmVtaXNlQ2hpbGROb2RlLmlzTm9uVGVybWluYWxOb2RlKCk7XG5cbiAgICBpZiAocHJlbWlzZUNoaWxkTm9kZU5vblRlcm1pbmFsTm9kZSkge1xuICAgICAgY29uc3QgcHJlbWlzZU5vblRlcm1pbmFsQ2hpbGROb2RlID0gcHJlbWlzZUNoaWxkTm9kZSwgIC8vL1xuICAgICAgICAgICAgcHJlbWlzZU5vblRlcm1pbmFsQ2hpbGROb2RlUnVsZU5hbWUgPSBwcmVtaXNlTm9uVGVybWluYWxDaGlsZE5vZGUuZ2V0UnVsZU5hbWUoKSxcbiAgICAgICAgICAgIHByZW1pc2VOb25UZXJtaW5hbENoaWxkTm9kZVJ1bGVOYW1lTWV0YXZhcmlhYmxlUnVsZU5hbWUgPSAocHJlbWlzZU5vblRlcm1pbmFsQ2hpbGROb2RlUnVsZU5hbWUgPT09IE1FVEFWQVJJQUJMRV9SVUxFX05BTUUpO1xuXG4gICAgICBpZiAocHJlbWlzZU5vblRlcm1pbmFsQ2hpbGROb2RlUnVsZU5hbWVNZXRhdmFyaWFibGVSdWxlTmFtZSkge1xuICAgICAgICBjb25zdCBwcmVtaXNlTWV0YXZhcmlhYmxlTm9kZSA9IHByZW1pc2VOb25UZXJtaW5hbENoaWxkTm9kZSwgIC8vL1xuICAgICAgICAgICAgICBwcmVtaXNlTWV0YVZhcmlhYmxlTm9kZU1hdGNoZXMgPSBtYXRjaFByZW1pc2VNZXRhdmFyaWFibGVOb2RlKHByZW1pc2VNZXRhdmFyaWFibGVOb2RlLCBzdGF0ZW1lbnROb2RlLCBzdWJzdGl0dXRpb25zKTtcblxuICAgICAgICBwcmVtaXNlTWV0YXN0YXRlbWVudE5vZGVNYXRjaGVzID0gcHJlbWlzZU1ldGFWYXJpYWJsZU5vZGVNYXRjaGVzOyAvLy9cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gcHJlbWlzZU1ldGFzdGF0ZW1lbnROb2RlTWF0Y2hlcztcbn1cblxuZnVuY3Rpb24gbWV0YU1hdGNoUHJlbWlzZU5vZGUocHJlbWlzZU5vZGUsIG5vZGUsIG1ldGFTdWJzdGl0dXRpb25zKSB7XG4gIGxldCBwcmVtaXNlTm9kZU1hdGNoZXMgPSBmYWxzZTtcblxuICBjb25zdCBub2RlVGVybWluYWxOb2RlID0gbm9kZS5pc1Rlcm1pbmFsTm9kZSgpLFxuICAgICAgICBydWxlTm9kZVRlcm1pbmFsTm9kZSA9IHByZW1pc2VOb2RlLmlzVGVybWluYWxOb2RlKCk7XG5cbiAgaWYgKG5vZGVUZXJtaW5hbE5vZGUgPT09IHJ1bGVOb2RlVGVybWluYWxOb2RlKSB7XG4gICAgaWYgKG5vZGVUZXJtaW5hbE5vZGUpIHtcbiAgICAgIGNvbnN0IHRlcm1pbmFsTm9kZSA9IG5vZGUsICAvLy9cbiAgICAgICAgICAgIHByZW1pc2VUZXJtaW5hbE5vZGUgPSBwcmVtaXNlTm9kZSwgIC8vL1xuICAgICAgICAgICAgcHJlbWlzZVRlcm1pbmFsTm9kZU1hdGNoZXMgPSBtZXRhTWF0Y2hQcmVtaXNlVGVybWluYWxOb2RlKHByZW1pc2VUZXJtaW5hbE5vZGUsIHRlcm1pbmFsTm9kZSwgbWV0YVN1YnN0aXR1dGlvbnMpO1xuXG4gICAgICBwcmVtaXNlTm9kZU1hdGNoZXMgPSBwcmVtaXNlVGVybWluYWxOb2RlTWF0Y2hlczsgIC8vL1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBub25UZXJtaW5hbE5vZGUgPSBub2RlLCAvLy9cbiAgICAgICAgICAgIHByZW1pc2VOb25UZXJtaW5hbE5vZGUgPSBwcmVtaXNlTm9kZSwgIC8vL1xuICAgICAgICAgICAgcHJlbWlzZU5vblRlcm1pbmFsTm9kZU1hdGNoZXMgPSBtZXRhTWF0Y2hQcmVtaXNlTm9uVGVybWluYWxOb2RlKHByZW1pc2VOb25UZXJtaW5hbE5vZGUsIG5vblRlcm1pbmFsTm9kZSwgbWV0YVN1YnN0aXR1dGlvbnMpO1xuXG4gICAgICBwcmVtaXNlTm9kZU1hdGNoZXMgPSBwcmVtaXNlTm9uVGVybWluYWxOb2RlTWF0Y2hlczsgLy8vXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHByZW1pc2VOb2RlTWF0Y2hlcztcbn1cblxuZnVuY3Rpb24gbWV0YU1hdGNoUHJlbWlzZU5vZGVzKHByZW1pc2VOb2Rlcywgbm9kZXMsIG1ldGFTdWJzdGl0dXRpb25zKSB7XG4gIGxldCBwcmVtaXNlTm9kZXNNYXRjaGVzID0gZmFsc2U7XG5cbiAgY29uc3Qgbm9kZXNMZW5ndGggPSBub2Rlcy5sZW5ndGgsXG4gICAgICAgIHByZW1pc2VOb2Rlc0xlbmd0aCA9IHByZW1pc2VOb2Rlcy5sZW5ndGg7XG5cbiAgaWYgKG5vZGVzTGVuZ3RoID09PSBwcmVtaXNlTm9kZXNMZW5ndGgpIHtcbiAgICBwcmVtaXNlTm9kZXNNYXRjaGVzID0gbm9kZXMuZXZlcnkoKG5vZGUsIGluZGV4KSA9PiB7XG4gICAgICBjb25zdCBwcmVtaXNlTm9kZSA9IHByZW1pc2VOb2Rlc1tpbmRleF0sXG4gICAgICAgICAgICBwcmVtaXNlTm9kZU1hdGNoZXMgPSBtZXRhTWF0Y2hQcmVtaXNlTm9kZShwcmVtaXNlTm9kZSwgbm9kZSwgbWV0YVN1YnN0aXR1dGlvbnMpO1xuXG4gICAgICBpZiAocHJlbWlzZU5vZGVNYXRjaGVzKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIHByZW1pc2VOb2Rlc01hdGNoZXM7XG59XG5cbmZ1bmN0aW9uIG1ldGFNYXRjaFByZW1pc2VUZXJtaW5hbE5vZGUocHJlbWlzZVRlcm1pbmFsTm9kZSwgdGVybWluYWxOb2RlLCBtZXRhU3Vic3RpdHV0aW9ucykge1xuICBjb25zdCBtYXRjaGVzID0gcHJlbWlzZVRlcm1pbmFsTm9kZS5tYXRjaCh0ZXJtaW5hbE5vZGUpLFxuICAgICAgICBwcmVtaXNlVGVybWluYWxOb2RlTWF0Y2hlcyA9IG1hdGNoZXM7XG5cbiAgcmV0dXJuIHByZW1pc2VUZXJtaW5hbE5vZGVNYXRjaGVzO1xufVxuXG5mdW5jdGlvbiBtZXRhTWF0Y2hQcmVtaXNlTm9uVGVybWluYWxOb2RlKHByZW1pc2VOb25UZXJtaW5hbE5vZGUsIG5vblRlcm1pbmFsTm9kZSwgbWV0YVN1YnN0aXR1dGlvbnMpIHtcbiAgbGV0IHByZW1pc2VOb25UZXJtaW5hbE5vZGVNYXRjaGVzID0gZmFsc2U7XG5cbiAgY29uc3QgcnVsZU5hbWUgPSBub25UZXJtaW5hbE5vZGUuZ2V0UnVsZU5hbWUoKSxcbiAgICAgICAgY2hpbGROb2RlcyA9IG5vblRlcm1pbmFsTm9kZS5nZXRDaGlsZE5vZGVzKCksXG4gICAgICAgIHByZW1pc2VOb25UZXJtaW5hbE5vZGVSdWxlTmFtZSA9IHByZW1pc2VOb25UZXJtaW5hbE5vZGUuZ2V0UnVsZU5hbWUoKSxcbiAgICAgICAgcHJlbWlzZU5vblRlcm1pbmFsTm9kZUNoaWxkTm9kZXMgPSBwcmVtaXNlTm9uVGVybWluYWxOb2RlLmdldENoaWxkTm9kZXMoKSxcbiAgICAgICAgbm9kZXMgPSBjaGlsZE5vZGVzLCAvLy9cbiAgICAgICAgcHJlbWlzZU5vZGVzID0gcHJlbWlzZU5vblRlcm1pbmFsTm9kZUNoaWxkTm9kZXMsIC8vL1xuICAgICAgICBydWxlTmFtZU1ldGFzdGF0ZW1lbnRSdWxlTmFtZSA9IChydWxlTmFtZSA9PT0gTUVUQVNUQVRFTUVOVF9SVUxFX05BTUUpLFxuICAgICAgICBwcmVtaXNlTm9uVGVybWluYWxOb2RlUnVsZU5hbWVNZXRhc3RhdGVtZW50UnVsZU5hbWUgPSAocHJlbWlzZU5vblRlcm1pbmFsTm9kZVJ1bGVOYW1lID09PSBNRVRBU1RBVEVNRU5UX1JVTEVfTkFNRSk7XG5cbiAgaWYgKHJ1bGVOYW1lTWV0YXN0YXRlbWVudFJ1bGVOYW1lICYmIHByZW1pc2VOb25UZXJtaW5hbE5vZGVSdWxlTmFtZU1ldGFzdGF0ZW1lbnRSdWxlTmFtZSkge1xuICAgIGNvbnN0IG1ldGFzdGF0ZW1lbnROb2RlID0gbm9uVGVybWluYWxOb2RlLCAgLy8vXG4gICAgICAgICAgcHJlbWlzZU1ldGFzdGF0ZW1lbnROb2RlID0gcHJlbWlzZU5vblRlcm1pbmFsTm9kZSwgIC8vL1xuICAgICAgICAgIHByZW1pc2VNZXRhc3RhdGVtZW50Tm9kZU1hdGNoZXMgPSBtZXRhTWF0Y2hQcmVtaXNlTWV0YXN0YXRlbWVudE5vZGUocHJlbWlzZU1ldGFzdGF0ZW1lbnROb2RlLCBtZXRhc3RhdGVtZW50Tm9kZSwgbWV0YVN1YnN0aXR1dGlvbnMpO1xuXG4gICAgaWYgKHByZW1pc2VNZXRhc3RhdGVtZW50Tm9kZU1hdGNoZXMpIHtcbiAgICAgIHByZW1pc2VOb25UZXJtaW5hbE5vZGVNYXRjaGVzID0gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgcHJlbWlzZU5vblRlcm1pbmFsTm9kZUNoaWxkTm9kZXNNYXRjaGVzID0gbWV0YU1hdGNoUHJlbWlzZU5vZGVzKHByZW1pc2VOb2Rlcywgbm9kZXMsIG1ldGFTdWJzdGl0dXRpb25zKTtcblxuICAgICAgcHJlbWlzZU5vblRlcm1pbmFsTm9kZU1hdGNoZXMgPSBwcmVtaXNlTm9uVGVybWluYWxOb2RlQ2hpbGROb2Rlc01hdGNoZXM7IC8vL1xuICAgIH1cbiAgfSBlbHNlIGlmIChydWxlTmFtZSA9PT0gcHJlbWlzZU5vblRlcm1pbmFsTm9kZVJ1bGVOYW1lKSB7XG4gICAgY29uc3QgcHJlbWlzZU5vblRlcm1pbmFsTm9kZUNoaWxkTm9kZXNNYXRjaGVzID0gbWV0YU1hdGNoUHJlbWlzZU5vZGVzKHByZW1pc2VOb2Rlcywgbm9kZXMsIG1ldGFTdWJzdGl0dXRpb25zKTtcblxuICAgIHByZW1pc2VOb25UZXJtaW5hbE5vZGVNYXRjaGVzID0gcHJlbWlzZU5vblRlcm1pbmFsTm9kZUNoaWxkTm9kZXNNYXRjaGVzOyAvLy9cbiAgfVxuXG4gIHJldHVybiBwcmVtaXNlTm9uVGVybWluYWxOb2RlTWF0Y2hlcztcbn1cblxuZnVuY3Rpb24gbWV0YU1hdGNoUHJlbWlzZU1ldGF2YXJpYWJsZU5vZGUocHJlbWlzZU1ldGF2YXJpYWJsZU5vZGUsIG1ldGFzdGF0ZW1lbnROb2RlLCBtZXRhU3Vic3RpdHV0aW9ucykge1xuICBsZXQgcHJlbWlzZU1ldGF2YXJpYWJsZU5vZGVNYXRjaGVzO1xuXG4gIGNvbnN0IHByZW1pc2VNZXRhdmFyaWFibGVOYW1lID0gbWV0YXZhcmlhYmxlTmFtZUZyb21NZXRhdmFyaWFibGVOb2RlKHByZW1pc2VNZXRhdmFyaWFibGVOb2RlKSxcbiAgICAgICAgbWV0YVN1YnN0aXR1dGlvbiA9IG1ldGFTdWJzdGl0dXRpb25zLmZpbmQoKG1ldGFTdWJzdGl0dXRpb24pID0+IHtcbiAgICAgICAgICBjb25zdCBtZXRhdmFyaWFibGVOYW1lID0gbWV0YVN1YnN0aXR1dGlvbi5nZXRNZXRhdmFyaWFibGVOYW1lKCk7XG5cbiAgICAgICAgICBpZiAobWV0YXZhcmlhYmxlTmFtZSA9PT0gcHJlbWlzZU1ldGF2YXJpYWJsZU5hbWUpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfSkgfHwgbnVsbDtcblxuICBpZiAobWV0YVN1YnN0aXR1dGlvbiAhPT0gbnVsbCkge1xuICAgIGNvbnN0IG1ldGFTdWJzdGl0dXRpb25Ob2Rlc01hdGNoID0gbWV0YVN1YnN0aXR1dGlvbi5tYXRjaE1ldGFzdGF0ZW1lbnROb2RlKG1ldGFzdGF0ZW1lbnROb2RlKTtcblxuICAgIHByZW1pc2VNZXRhdmFyaWFibGVOb2RlTWF0Y2hlcyA9IG1ldGFTdWJzdGl0dXRpb25Ob2Rlc01hdGNoOyAgLy8vXG4gIH0gZWxzZSB7XG4gICAgY29uc3QgbWV0YXZhcmlhYmxlTmFtZSA9IHByZW1pc2VNZXRhdmFyaWFibGVOYW1lLCAvLy9cbiAgICAgICAgICBtZXRhU3Vic3RpdHV0aW9uID0gTWV0YVN1YnN0aXR1dGlvbi5mcm9tTWV0YXZhcmlhYmxlTmFtZUFuZE1ldGFzdGF0ZW1lbnROb2RlKG1ldGF2YXJpYWJsZU5hbWUsIG1ldGFzdGF0ZW1lbnROb2RlKTtcblxuICAgIG1ldGFTdWJzdGl0dXRpb25zLnB1c2gobWV0YVN1YnN0aXR1dGlvbik7XG5cbiAgICBwcmVtaXNlTWV0YXZhcmlhYmxlTm9kZU1hdGNoZXMgPSB0cnVlO1xuICB9XG5cbiAgcmV0dXJuIHByZW1pc2VNZXRhdmFyaWFibGVOb2RlTWF0Y2hlcztcbn1cblxuZnVuY3Rpb24gbWV0YU1hdGNoUHJlbWlzZU1ldGFzdGF0ZW1lbnROb2RlKHByZW1pc2VNZXRhc3RhdGVtZW50Tm9kZSwgbWV0YXN0YXRlbWVudE5vZGUsIG1ldGFTdWJzdGl0dXRpb25zKSB7XG4gIGxldCBwcmVtaXNlTWV0YXN0YXRlbWVudE5vZGVNYXRjaGVzID0gZmFsc2U7XG5cbiAgY29uc3QgcHJlbWlzZU5vblRlcm1pbmFsTm9kZSA9IHByZW1pc2VNZXRhc3RhdGVtZW50Tm9kZSwgIC8vL1xuICAgICAgICBwcmVtaXNlTm9uVGVybWluYWxOb2RlQ2hpbGROb2RlcyA9IHByZW1pc2VOb25UZXJtaW5hbE5vZGUuZ2V0Q2hpbGROb2RlcygpLFxuICAgICAgICBwcmVtaXNlTm9uVGVybWluYWxOb2RlQ2hpbGROb2Rlc0xlbmd0aCA9IHByZW1pc2VOb25UZXJtaW5hbE5vZGVDaGlsZE5vZGVzLmxlbmd0aDtcblxuICBpZiAocHJlbWlzZU5vblRlcm1pbmFsTm9kZUNoaWxkTm9kZXNMZW5ndGggPT09IDEpIHtcbiAgICBjb25zdCBmaXJzdFByZW1pc2VDaGlsZE5vZGUgPSBmaXJzdChwcmVtaXNlTm9uVGVybWluYWxOb2RlQ2hpbGROb2RlcyksXG4gICAgICAgICAgcHJlbWlzZUNoaWxkTm9kZSA9IGZpcnN0UHJlbWlzZUNoaWxkTm9kZSwgIC8vL1xuICAgICAgICAgIHByZW1pc2VDaGlsZE5vZGVOb25UZXJtaW5hbE5vZGUgPSBwcmVtaXNlQ2hpbGROb2RlLmlzTm9uVGVybWluYWxOb2RlKCk7XG5cbiAgICBpZiAocHJlbWlzZUNoaWxkTm9kZU5vblRlcm1pbmFsTm9kZSkge1xuICAgICAgY29uc3QgcHJlbWlzZU5vblRlcm1pbmFsQ2hpbGROb2RlID0gcHJlbWlzZUNoaWxkTm9kZSwgIC8vL1xuICAgICAgICAgICAgcHJlbWlzZU5vblRlcm1pbmFsQ2hpbGROb2RlUnVsZU5hbWUgPSBwcmVtaXNlTm9uVGVybWluYWxDaGlsZE5vZGUuZ2V0UnVsZU5hbWUoKSxcbiAgICAgICAgICAgIHByZW1pc2VOb25UZXJtaW5hbENoaWxkTm9kZVJ1bGVOYW1lTWV0YXZhcmlhYmxlUnVsZU5hbWUgPSAocHJlbWlzZU5vblRlcm1pbmFsQ2hpbGROb2RlUnVsZU5hbWUgPT09IE1FVEFWQVJJQUJMRV9SVUxFX05BTUUpO1xuXG4gICAgICBpZiAocHJlbWlzZU5vblRlcm1pbmFsQ2hpbGROb2RlUnVsZU5hbWVNZXRhdmFyaWFibGVSdWxlTmFtZSkge1xuICAgICAgICBjb25zdCBwcmVtaXNlTWV0YXZhcmlhYmxlTm9kZSA9IHByZW1pc2VOb25UZXJtaW5hbENoaWxkTm9kZSwgIC8vL1xuICAgICAgICAgICAgICBwcmVtaXNlTWV0YVZhcmlhYmxlTm9kZU1hdGNoZXMgPSBtZXRhTWF0Y2hQcmVtaXNlTWV0YXZhcmlhYmxlTm9kZShwcmVtaXNlTWV0YXZhcmlhYmxlTm9kZSwgbWV0YXN0YXRlbWVudE5vZGUsIG1ldGFTdWJzdGl0dXRpb25zKTtcblxuICAgICAgICBwcmVtaXNlTWV0YXN0YXRlbWVudE5vZGVNYXRjaGVzID0gcHJlbWlzZU1ldGFWYXJpYWJsZU5vZGVNYXRjaGVzOyAvLy9cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gcHJlbWlzZU1ldGFzdGF0ZW1lbnROb2RlTWF0Y2hlcztcbn1cbiJdLCJuYW1lcyI6WyJQcmVtaXNlIiwibWV0YXN0YXRlbWVudE5vZGVzUXVlcnkiLCJub2Rlc1F1ZXJ5IiwibWV0YVN1YnByb29mQXNzZXJ0aW9uTm9kZVF1ZXJ5Iiwibm9kZVF1ZXJ5IiwidW5xdWFsaWZpZWRTdGF0ZW1lbnRTdGF0ZW1lbnROb2Rlc1F1ZXJ5IiwidW5xdWFsaWZpZWRNZXRhc3RhdGVtZW50TWV0YXN0YXRlbWVudE5vZGVzUXVlcnkiLCJxdWFsaWZpZWRPclVucXVhbGlmaWVkU3RhdGVtZW50U3RhdGVtZW50Tm9kZVF1ZXJ5IiwicXVhbGlmaWVkT3JVbnF1YWxpZmllZE1ldGFzdGF0ZW1lbnRNZXRhc3RhdGVtZW50Tm9kZVF1ZXJ5IiwibWV0YXN0YXRlbWVudE5vZGUiLCJnZXRNZXRhc3RhdGVtZW50Tm9kZSIsIm1hdGNoU3VicHJvb2ZOb2RlIiwic3VicHJvb2ZOb2RlIiwic3Vic3RpdHV0aW9ucyIsInN1YnByb29mTm9kZU1hdGNoZXMiLCJzdWJwcm9vZkFzc2VydGlvbk5vZGUiLCJtZXRhU3VicHJvb2ZBc3NlcnRpb25NZXRhc3RhdGVtZW50Tm9kZXMiLCJ1bnF1YWxpZmllZFN0YXRlbWVudFN0YXRlbWVudE5vZGVzIiwicXVhbGlmaWVkT3JVbnF1YWxpZmllZFN0YXRlbWVudFN0YXRlbWVudE5vZGUiLCJzdGF0ZW1lbnROb2RlcyIsInN0YXRlbWVudE5vZGVzTGVuZ3RoIiwibGVuZ3RoIiwibWV0YVN1YnByb29mQXNzZXJ0aW9uTWV0YXN0YXRlbWVudE5vZGVzTGVuZ3RoIiwiZXZlcnkiLCJtZXRhU3VicHJvb2ZBc3NlcnRpb25NZXRhc3RhdGVtZW50Tm9kZSIsImluZGV4Iiwic3RhdGVtZW50Tm9kZSIsIm5vblRlcm1pbmFsTm9kZSIsInByZW1pc2VOb25UZXJtaW5hbE5vZGUiLCJwcmVtaXNlTm9uVGVybWluYWxOb2RlTWF0Y2hlcyIsIm1hdGNoUHJlbWlzZU5vblRlcm1pbmFsTm9kZSIsIm1hdGNoU3RhdGVtZW50Tm9kZSIsInN0YXRlbWVudE5vZGVNYXRjaGVzIiwibWF0Y2hNZXRhU3VicHJvb2ZOb2RlIiwibWV0YVN1YnByb29mTm9kZSIsIm1ldGFTdWJzdGl0dXRpb25zIiwibWV0YVN1YnByb29mTm9kZU1hdGNoZXMiLCJtZXRhU3VicHJvb2ZBc3NlcnRpb25Ob2RlIiwidW5xdWFsaWZpZWRNZXRhc3RhdGVtZW50TWV0YXN0YXRlbWVudE5vZGVzIiwicXVhbGlmaWVkT3JVbnF1YWxpZmllZE1ldGFzdGF0ZW1lbnRNZXRhc3RhdGVtZW50Tm9kZSIsIm1ldGFzdGF0ZW1lbnROb2RlcyIsIm1ldGFzdGF0ZW1lbnROb2Rlc0xlbmd0aCIsIm1ldGFNYXRjaFByZW1pc2VOb25UZXJtaW5hbE5vZGUiLCJtYXRjaE1ldGFzdGF0ZW1lbnROb2RlIiwibWV0YXN0YXRlbWVudE5vZGVNYXRjaGVzIiwidG9KU09OIiwibWV0YXN0YXRlbWVudFN0cmluZyIsIm5vZGVBc1N0cmluZyIsIm1ldGFzdGF0ZW1lbnQiLCJqc29uIiwiZnJvbUpTT04iLCJyZWxlYXNlQ29udGV4dCIsIm1ldGFzdGF0ZW1lbnROb2RlRnJvbU1ldGFzdGF0ZW1lbnRTdHJpbmciLCJwcmVtaXNlIiwiZnJvbU1ldGFzdGF0ZW1lbnROb2RlIiwibWF0Y2hQcmVtaXNlTm9kZSIsInByZW1pc2VOb2RlIiwibm9kZSIsInByZW1pc2VOb2RlTWF0Y2hlcyIsIm5vZGVUZXJtaW5hbE5vZGUiLCJpc1Rlcm1pbmFsTm9kZSIsInJ1bGVOb2RlVGVybWluYWxOb2RlIiwidGVybWluYWxOb2RlIiwicHJlbWlzZVRlcm1pbmFsTm9kZSIsInByZW1pc2VUZXJtaW5hbE5vZGVNYXRjaGVzIiwibWF0Y2hQcmVtaXNlVGVybWluYWxOb2RlIiwibWF0Y2hQcmVtaXNlTm9kZXMiLCJwcmVtaXNlTm9kZXMiLCJub2RlcyIsInByZW1pc2VOb2Rlc01hdGNoZXMiLCJub2Rlc0xlbmd0aCIsInByZW1pc2VOb2Rlc0xlbmd0aCIsIm1hdGNoZXMiLCJtYXRjaCIsInJ1bGVOYW1lIiwiZ2V0UnVsZU5hbWUiLCJjaGlsZE5vZGVzIiwiZ2V0Q2hpbGROb2RlcyIsInByZW1pc2VOb25UZXJtaW5hbE5vZGVSdWxlTmFtZSIsInByZW1pc2VOb25UZXJtaW5hbE5vZGVDaGlsZE5vZGVzIiwicnVsZU5hbWVTdGF0ZW1lbnRSdWxlTmFtZSIsIlNUQVRFTUVOVF9SVUxFX05BTUUiLCJwcmVtaXNlTm9uVGVybWluYWxOb2RlUnVsZU5hbWVNZXRhc3RhdGVtZW50UnVsZU5hbWUiLCJNRVRBU1RBVEVNRU5UX1JVTEVfTkFNRSIsInByZW1pc2VNZXRhc3RhdGVtZW50Tm9kZSIsInByZW1pc2VNZXRhc3RhdGVtZW50Tm9kZU1hdGNoZXMiLCJtYXRjaFByZW1pc2VNZXRhc3RhdGVtZW50Tm9kZSIsInByZW1pc2VOb25UZXJtaW5hbE5vZGVDaGlsZE5vZGVzTWF0Y2hlcyIsIm1hdGNoUHJlbWlzZU1ldGF2YXJpYWJsZU5vZGUiLCJwcmVtaXNlTWV0YXZhcmlhYmxlTm9kZSIsInByZW1pc2VNZXRhdmFyaWFibGVOb2RlTWF0Y2hlcyIsInByZW1pc2VNZXRhdmFyaWFibGVOYW1lIiwibWV0YXZhcmlhYmxlTmFtZUZyb21NZXRhdmFyaWFibGVOb2RlIiwic3Vic3RpdHV0aW9uIiwiZmluZCIsIm1ldGF2YXJpYWJsZU5hbWUiLCJnZXRNZXRhdmFyaWFibGVOYW1lIiwic3Vic3RpdHV0aW9uTm9kZXNNYXRjaCIsIlN1YnN0aXR1dGlvbiIsImZyb21NZXRhdmFyaWFibGVOYW1lQW5kU3RhdGVtZW50Tm9kZSIsInB1c2giLCJwcmVtaXNlTm9uVGVybWluYWxOb2RlQ2hpbGROb2Rlc0xlbmd0aCIsImZpcnN0UHJlbWlzZUNoaWxkTm9kZSIsImZpcnN0IiwicHJlbWlzZUNoaWxkTm9kZSIsInByZW1pc2VDaGlsZE5vZGVOb25UZXJtaW5hbE5vZGUiLCJpc05vblRlcm1pbmFsTm9kZSIsInByZW1pc2VOb25UZXJtaW5hbENoaWxkTm9kZSIsInByZW1pc2VOb25UZXJtaW5hbENoaWxkTm9kZVJ1bGVOYW1lIiwicHJlbWlzZU5vblRlcm1pbmFsQ2hpbGROb2RlUnVsZU5hbWVNZXRhdmFyaWFibGVSdWxlTmFtZSIsIk1FVEFWQVJJQUJMRV9SVUxFX05BTUUiLCJwcmVtaXNlTWV0YVZhcmlhYmxlTm9kZU1hdGNoZXMiLCJtZXRhTWF0Y2hQcmVtaXNlTm9kZSIsIm1ldGFNYXRjaFByZW1pc2VUZXJtaW5hbE5vZGUiLCJtZXRhTWF0Y2hQcmVtaXNlTm9kZXMiLCJydWxlTmFtZU1ldGFzdGF0ZW1lbnRSdWxlTmFtZSIsIm1ldGFNYXRjaFByZW1pc2VNZXRhc3RhdGVtZW50Tm9kZSIsIm1ldGFNYXRjaFByZW1pc2VNZXRhdmFyaWFibGVOb2RlIiwibWV0YVN1YnN0aXR1dGlvbiIsIm1ldGFTdWJzdGl0dXRpb25Ob2Rlc01hdGNoIiwiTWV0YVN1YnN0aXR1dGlvbiIsImZyb21NZXRhdmFyaWFibGVOYW1lQW5kTWV0YXN0YXRlbWVudE5vZGUiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBbUJxQkE7OztpRUFqQkk7cUVB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