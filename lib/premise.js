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
var metastatementNodesQuery = (0, _query.nodesQuery)("/metaSubproofAssertion/metastatement"), metaSubproofAssertionNodeQuery = (0, _query.nodeQuery)("/metastatement/metaSubproofAssertion!"), unqualifiedStatementStatementNodesQuery = (0, _query.nodesQuery)("/subproof/antecedent/unqualifiedStatement!/statement!"), unqualifiedMetastatementMetastatementNodesQuery = (0, _query.nodesQuery)("/metaSubproof/metaAntecedent/unqualifiedMetastatement!/metastatement!"), qualifiedOrUnqualifiedStatementStatementNodeQuery = (0, _query.nodeQuery)("/subproof/subDerivation/qualifiedStatement|unqualifiedStatement[-1]/statement!"), qualifiedOrUnqualifiedMetastatementMetastatementNodeQuery = (0, _query.nodeQuery)("/metaSubproof/metaSubDerivation/qualifiedMetastatement|unqualifiedMetastatement[-1]/metastatement!");
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9wcmVtaXNlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgU3Vic3RpdHV0aW9uIGZyb20gXCIuL3N1YnN0aXR1dGlvblwiO1xuaW1wb3J0IE1ldGFTdWJzdGl0dXRpb24gZnJvbSBcIi4vbWV0YVN1YnN0aXR1dGlvblwiO1xuXG5pbXBvcnQgeyBmaXJzdCB9IGZyb20gXCIuL3V0aWxpdGllcy9hcnJheVwiO1xuaW1wb3J0IHsgbm9kZUFzU3RyaW5nIH0gZnJvbSBcIi4vdXRpbGl0aWVzL3N0cmluZ1wiO1xuaW1wb3J0IHsgbm9kZVF1ZXJ5LCBub2Rlc1F1ZXJ5IH0gZnJvbSBcIi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5pbXBvcnQgeyBtZXRhdmFyaWFibGVOYW1lRnJvbU1ldGF2YXJpYWJsZU5vZGUgfSBmcm9tIFwiLi91dGlsaXRpZXMvcXVlcnlcIjtcbmltcG9ydCB7IG1ldGFzdGF0ZW1lbnROb2RlRnJvbU1ldGFzdGF0ZW1lbnRTdHJpbmcgfSBmcm9tIFwiLi91dGlsaXRpZXMvc3RyaW5nXCI7XG5pbXBvcnQgeyBTVEFURU1FTlRfUlVMRV9OQU1FLCBNRVRBU1RBVEVNRU5UX1JVTEVfTkFNRSwgTUVUQVZBUklBQkxFX1JVTEVfTkFNRSB9IGZyb20gXCIuL3J1bGVOYW1lc1wiO1xuXG5jb25zdCBtZXRhc3RhdGVtZW50Tm9kZXNRdWVyeSA9IG5vZGVzUXVlcnkoXCIvbWV0YVN1YnByb29mQXNzZXJ0aW9uL21ldGFzdGF0ZW1lbnRcIiksXG4gICAgICBtZXRhU3VicHJvb2ZBc3NlcnRpb25Ob2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvbWV0YXN0YXRlbWVudC9tZXRhU3VicHJvb2ZBc3NlcnRpb24hXCIpLFxuICAgICAgdW5xdWFsaWZpZWRTdGF0ZW1lbnRTdGF0ZW1lbnROb2Rlc1F1ZXJ5ID0gbm9kZXNRdWVyeShcIi9zdWJwcm9vZi9hbnRlY2VkZW50L3VucXVhbGlmaWVkU3RhdGVtZW50IS9zdGF0ZW1lbnQhXCIpLFxuICAgICAgdW5xdWFsaWZpZWRNZXRhc3RhdGVtZW50TWV0YXN0YXRlbWVudE5vZGVzUXVlcnkgPSBub2Rlc1F1ZXJ5KFwiL21ldGFTdWJwcm9vZi9tZXRhQW50ZWNlZGVudC91bnF1YWxpZmllZE1ldGFzdGF0ZW1lbnQhL21ldGFzdGF0ZW1lbnQhXCIpLFxuICAgICAgcXVhbGlmaWVkT3JVbnF1YWxpZmllZFN0YXRlbWVudFN0YXRlbWVudE5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9zdWJwcm9vZi9zdWJEZXJpdmF0aW9uL3F1YWxpZmllZFN0YXRlbWVudHx1bnF1YWxpZmllZFN0YXRlbWVudFstMV0vc3RhdGVtZW50IVwiKSxcbiAgICAgIHF1YWxpZmllZE9yVW5xdWFsaWZpZWRNZXRhc3RhdGVtZW50TWV0YXN0YXRlbWVudE5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9tZXRhU3VicHJvb2YvbWV0YVN1YkRlcml2YXRpb24vcXVhbGlmaWVkTWV0YXN0YXRlbWVudHx1bnF1YWxpZmllZE1ldGFzdGF0ZW1lbnRbLTFdL21ldGFzdGF0ZW1lbnQhXCIpO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQcmVtaXNlIHtcbiAgY29uc3RydWN0b3IobWV0YXN0YXRlbWVudE5vZGUpIHtcbiAgICB0aGlzLm1ldGFzdGF0ZW1lbnROb2RlID0gbWV0YXN0YXRlbWVudE5vZGU7XG4gIH1cblxuICBnZXRNZXRhc3RhdGVtZW50Tm9kZSgpIHtcbiAgICByZXR1cm4gdGhpcy5tZXRhc3RhdGVtZW50Tm9kZTtcbiAgfVxuXG4gIG1hdGNoU3VicHJvb2ZOb2RlKHN1YnByb29mTm9kZSwgc3Vic3RpdHV0aW9ucykge1xuICAgIGxldCBzdWJwcm9vZk5vZGVNYXRjaGVzID0gZmFsc2U7XG5cbiAgICBjb25zdCBzdWJwcm9vZkFzc2VydGlvbk5vZGUgPSBtZXRhU3VicHJvb2ZBc3NlcnRpb25Ob2RlUXVlcnkodGhpcy5tZXRhc3RhdGVtZW50Tm9kZSk7XG5cbiAgICBpZiAoc3VicHJvb2ZBc3NlcnRpb25Ob2RlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBtZXRhU3VicHJvb2ZBc3NlcnRpb25NZXRhc3RhdGVtZW50Tm9kZXMgPSBtZXRhc3RhdGVtZW50Tm9kZXNRdWVyeShzdWJwcm9vZkFzc2VydGlvbk5vZGUpLFxuICAgICAgICAgICAgdW5xdWFsaWZpZWRTdGF0ZW1lbnRTdGF0ZW1lbnROb2RlcyA9IHVucXVhbGlmaWVkU3RhdGVtZW50U3RhdGVtZW50Tm9kZXNRdWVyeShzdWJwcm9vZk5vZGUpLFxuICAgICAgICAgICAgcXVhbGlmaWVkT3JVbnF1YWxpZmllZFN0YXRlbWVudFN0YXRlbWVudE5vZGUgPSBxdWFsaWZpZWRPclVucXVhbGlmaWVkU3RhdGVtZW50U3RhdGVtZW50Tm9kZVF1ZXJ5KHN1YnByb29mTm9kZSksXG4gICAgICAgICAgICBzdGF0ZW1lbnROb2RlcyA9IFtcbiAgICAgICAgICAgICAgLi4udW5xdWFsaWZpZWRTdGF0ZW1lbnRTdGF0ZW1lbnROb2RlcyxcbiAgICAgICAgICAgICAgcXVhbGlmaWVkT3JVbnF1YWxpZmllZFN0YXRlbWVudFN0YXRlbWVudE5vZGVcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBzdGF0ZW1lbnROb2Rlc0xlbmd0aCA9IHN0YXRlbWVudE5vZGVzLmxlbmd0aCxcbiAgICAgICAgICAgIG1ldGFTdWJwcm9vZkFzc2VydGlvbk1ldGFzdGF0ZW1lbnROb2Rlc0xlbmd0aCA9IG1ldGFTdWJwcm9vZkFzc2VydGlvbk1ldGFzdGF0ZW1lbnROb2Rlcy5sZW5ndGg7XG5cbiAgICAgIGlmIChzdGF0ZW1lbnROb2Rlc0xlbmd0aCA9PT0gbWV0YVN1YnByb29mQXNzZXJ0aW9uTWV0YXN0YXRlbWVudE5vZGVzTGVuZ3RoKSB7XG4gICAgICAgIHN1YnByb29mTm9kZU1hdGNoZXMgPSBtZXRhU3VicHJvb2ZBc3NlcnRpb25NZXRhc3RhdGVtZW50Tm9kZXMuZXZlcnkoKG1ldGFTdWJwcm9vZkFzc2VydGlvbk1ldGFzdGF0ZW1lbnROb2RlLCBpbmRleCkgPT4ge1xuICAgICAgICAgIGNvbnN0IHN0YXRlbWVudE5vZGUgPSBzdGF0ZW1lbnROb2Rlc1tpbmRleF0sXG4gICAgICAgICAgICAgICAgbm9uVGVybWluYWxOb2RlID0gc3RhdGVtZW50Tm9kZSwgLy8vXG4gICAgICAgICAgICAgICAgcHJlbWlzZU5vblRlcm1pbmFsTm9kZSA9IG1ldGFTdWJwcm9vZkFzc2VydGlvbk1ldGFzdGF0ZW1lbnROb2RlLCAgLy8vXG4gICAgICAgICAgICAgICAgcHJlbWlzZU5vblRlcm1pbmFsTm9kZU1hdGNoZXMgPSBtYXRjaFByZW1pc2VOb25UZXJtaW5hbE5vZGUocHJlbWlzZU5vblRlcm1pbmFsTm9kZSwgbm9uVGVybWluYWxOb2RlLCBzdWJzdGl0dXRpb25zKTtcblxuICAgICAgICAgIGlmIChwcmVtaXNlTm9uVGVybWluYWxOb2RlTWF0Y2hlcykge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gc3VicHJvb2ZOb2RlTWF0Y2hlcztcbiAgfVxuXG4gIG1hdGNoU3RhdGVtZW50Tm9kZShzdGF0ZW1lbnROb2RlLCBzdWJzdGl0dXRpb25zKSB7XG4gICAgY29uc3Qgbm9uVGVybWluYWxOb2RlID0gc3RhdGVtZW50Tm9kZSwgIC8vL1xuICAgICAgICAgIHByZW1pc2VOb25UZXJtaW5hbE5vZGUgPSB0aGlzLm1ldGFzdGF0ZW1lbnROb2RlLCAgLy8vXG4gICAgICAgICAgcHJlbWlzZU5vblRlcm1pbmFsTm9kZU1hdGNoZXMgPSBtYXRjaFByZW1pc2VOb25UZXJtaW5hbE5vZGUocHJlbWlzZU5vblRlcm1pbmFsTm9kZSwgbm9uVGVybWluYWxOb2RlLCBzdWJzdGl0dXRpb25zKSxcbiAgICAgICAgICBzdGF0ZW1lbnROb2RlTWF0Y2hlcyA9IHByZW1pc2VOb25UZXJtaW5hbE5vZGVNYXRjaGVzOyAvLy9cblxuICAgIHJldHVybiBzdGF0ZW1lbnROb2RlTWF0Y2hlcztcbiAgfVxuXG4gIG1hdGNoTWV0YVN1YnByb29mTm9kZShtZXRhU3VicHJvb2ZOb2RlLCBtZXRhU3Vic3RpdHV0aW9ucykge1xuICAgIGxldCBtZXRhU3VicHJvb2ZOb2RlTWF0Y2hlcyA9IGZhbHNlO1xuXG4gICAgY29uc3QgbWV0YVN1YnByb29mQXNzZXJ0aW9uTm9kZSA9IG1ldGFTdWJwcm9vZkFzc2VydGlvbk5vZGVRdWVyeSh0aGlzLm1ldGFzdGF0ZW1lbnROb2RlKTtcblxuICAgIGlmIChtZXRhU3VicHJvb2ZBc3NlcnRpb25Ob2RlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBtZXRhU3VicHJvb2ZBc3NlcnRpb25NZXRhc3RhdGVtZW50Tm9kZXMgPSBtZXRhc3RhdGVtZW50Tm9kZXNRdWVyeShtZXRhU3VicHJvb2ZBc3NlcnRpb25Ob2RlKSxcbiAgICAgICAgICAgIHVucXVhbGlmaWVkTWV0YXN0YXRlbWVudE1ldGFzdGF0ZW1lbnROb2RlcyA9IHVucXVhbGlmaWVkTWV0YXN0YXRlbWVudE1ldGFzdGF0ZW1lbnROb2Rlc1F1ZXJ5KG1ldGFTdWJwcm9vZk5vZGUpLFxuICAgICAgICAgICAgcXVhbGlmaWVkT3JVbnF1YWxpZmllZE1ldGFzdGF0ZW1lbnRNZXRhc3RhdGVtZW50Tm9kZSA9IHF1YWxpZmllZE9yVW5xdWFsaWZpZWRNZXRhc3RhdGVtZW50TWV0YXN0YXRlbWVudE5vZGVRdWVyeShtZXRhU3VicHJvb2ZOb2RlKSxcbiAgICAgICAgICAgIG1ldGFzdGF0ZW1lbnROb2RlcyA9IFtcbiAgICAgICAgICAgICAgLi4udW5xdWFsaWZpZWRNZXRhc3RhdGVtZW50TWV0YXN0YXRlbWVudE5vZGVzLFxuICAgICAgICAgICAgICBxdWFsaWZpZWRPclVucXVhbGlmaWVkTWV0YXN0YXRlbWVudE1ldGFzdGF0ZW1lbnROb2RlXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgbWV0YXN0YXRlbWVudE5vZGVzTGVuZ3RoID0gbWV0YXN0YXRlbWVudE5vZGVzLmxlbmd0aCxcbiAgICAgICAgICAgIG1ldGFTdWJwcm9vZkFzc2VydGlvbk1ldGFzdGF0ZW1lbnROb2Rlc0xlbmd0aCA9IG1ldGFTdWJwcm9vZkFzc2VydGlvbk1ldGFzdGF0ZW1lbnROb2Rlcy5sZW5ndGg7XG5cbiAgICAgIGlmIChtZXRhc3RhdGVtZW50Tm9kZXNMZW5ndGggPT09IG1ldGFTdWJwcm9vZkFzc2VydGlvbk1ldGFzdGF0ZW1lbnROb2Rlc0xlbmd0aCkge1xuICAgICAgICBtZXRhU3VicHJvb2ZOb2RlTWF0Y2hlcyA9IG1ldGFTdWJwcm9vZkFzc2VydGlvbk1ldGFzdGF0ZW1lbnROb2Rlcy5ldmVyeSgobWV0YVN1YnByb29mQXNzZXJ0aW9uTWV0YXN0YXRlbWVudE5vZGUsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBtZXRhc3RhdGVtZW50Tm9kZSA9IG1ldGFzdGF0ZW1lbnROb2Rlc1tpbmRleF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub25UZXJtaW5hbE5vZGUgPSBtZXRhc3RhdGVtZW50Tm9kZSwgLy8vXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmVtaXNlTm9uVGVybWluYWxOb2RlID0gbWV0YVN1YnByb29mQXNzZXJ0aW9uTWV0YXN0YXRlbWVudE5vZGUsICAvLy9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByZW1pc2VOb25UZXJtaW5hbE5vZGVNYXRjaGVzID0gbWV0YU1hdGNoUHJlbWlzZU5vblRlcm1pbmFsTm9kZShwcmVtaXNlTm9uVGVybWluYWxOb2RlLCBub25UZXJtaW5hbE5vZGUsIG1ldGFTdWJzdGl0dXRpb25zKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHByZW1pc2VOb25UZXJtaW5hbE5vZGVNYXRjaGVzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBtZXRhU3VicHJvb2ZOb2RlTWF0Y2hlcztcbiAgfVxuXG4gIG1hdGNoTWV0YXN0YXRlbWVudE5vZGUobWV0YXN0YXRlbWVudE5vZGUsIG1ldGFTdWJzdGl0dXRpb25zKSB7XG4gICAgY29uc3Qgbm9uVGVybWluYWxOb2RlID0gbWV0YXN0YXRlbWVudE5vZGUsICAvLy9cbiAgICAgICAgICBwcmVtaXNlTm9uVGVybWluYWxOb2RlID0gdGhpcy5tZXRhc3RhdGVtZW50Tm9kZSwgIC8vL1xuICAgICAgICAgIHByZW1pc2VOb25UZXJtaW5hbE5vZGVNYXRjaGVzID0gbWV0YU1hdGNoUHJlbWlzZU5vblRlcm1pbmFsTm9kZShwcmVtaXNlTm9uVGVybWluYWxOb2RlLCBub25UZXJtaW5hbE5vZGUsIG1ldGFTdWJzdGl0dXRpb25zKSxcbiAgICAgICAgICBtZXRhc3RhdGVtZW50Tm9kZU1hdGNoZXMgPSBwcmVtaXNlTm9uVGVybWluYWxOb2RlTWF0Y2hlczsgLy8vXG5cbiAgICByZXR1cm4gbWV0YXN0YXRlbWVudE5vZGVNYXRjaGVzO1xuICB9XG5cbiAgdG9KU09OKCkge1xuICAgIGNvbnN0IG1ldGFzdGF0ZW1lbnRTdHJpbmcgPSBub2RlQXNTdHJpbmcodGhpcy5tZXRhc3RhdGVtZW50Tm9kZSksXG4gICAgICAgICAgbWV0YXN0YXRlbWVudCA9IG1ldGFzdGF0ZW1lbnRTdHJpbmcsIC8vL1xuICAgICAgICAgIGpzb24gPSB7XG4gICAgICAgICAgICBtZXRhc3RhdGVtZW50XG4gICAgICAgICAgfTtcblxuICAgIHJldHVybiBqc29uO1xuICB9XG5cbiAgc3RhdGljIGZyb21KU09OKGpzb24sIHJlbGVhc2VDb250ZXh0KSB7XG4gICAgY29uc3QgeyBtZXRhc3RhdGVtZW50IH0gPSBqc29uLFxuICAgICAgICAgIG1ldGFzdGF0ZW1lbnRTdHJpbmcgPSBtZXRhc3RhdGVtZW50LCAgLy8vXG4gICAgICAgICAgbWV0YXN0YXRlbWVudE5vZGUgPSBtZXRhc3RhdGVtZW50Tm9kZUZyb21NZXRhc3RhdGVtZW50U3RyaW5nKG1ldGFzdGF0ZW1lbnRTdHJpbmcsIHJlbGVhc2VDb250ZXh0KSxcbiAgICAgICAgICBwcmVtaXNlID0gbmV3IFByZW1pc2UobWV0YXN0YXRlbWVudE5vZGUpO1xuXG4gICAgcmV0dXJuIHByZW1pc2U7XG4gIH1cblxuICBzdGF0aWMgZnJvbU1ldGFzdGF0ZW1lbnROb2RlKG1ldGFzdGF0ZW1lbnROb2RlKSB7XG4gICAgY29uc3QgcHJlbWlzZSA9IG5ldyBQcmVtaXNlKG1ldGFzdGF0ZW1lbnROb2RlKTtcblxuICAgIHJldHVybiBwcmVtaXNlO1xuICB9XG59XG5cbmZ1bmN0aW9uIG1hdGNoUHJlbWlzZU5vZGUocHJlbWlzZU5vZGUsIG5vZGUsIHN1YnN0aXR1dGlvbnMpIHtcbiAgbGV0IHByZW1pc2VOb2RlTWF0Y2hlcyA9IGZhbHNlO1xuXG4gIGNvbnN0IG5vZGVUZXJtaW5hbE5vZGUgPSBub2RlLmlzVGVybWluYWxOb2RlKCksXG4gICAgcnVsZU5vZGVUZXJtaW5hbE5vZGUgPSBwcmVtaXNlTm9kZS5pc1Rlcm1pbmFsTm9kZSgpO1xuXG4gIGlmIChub2RlVGVybWluYWxOb2RlID09PSBydWxlTm9kZVRlcm1pbmFsTm9kZSkge1xuICAgIGlmIChub2RlVGVybWluYWxOb2RlKSB7XG4gICAgICBjb25zdCB0ZXJtaW5hbE5vZGUgPSBub2RlLCAgLy8vXG4gICAgICAgICAgICBwcmVtaXNlVGVybWluYWxOb2RlID0gcHJlbWlzZU5vZGUsICAvLy9cbiAgICAgICAgICAgIHByZW1pc2VUZXJtaW5hbE5vZGVNYXRjaGVzID0gbWF0Y2hQcmVtaXNlVGVybWluYWxOb2RlKHByZW1pc2VUZXJtaW5hbE5vZGUsIHRlcm1pbmFsTm9kZSwgc3Vic3RpdHV0aW9ucyk7XG5cbiAgICAgIHByZW1pc2VOb2RlTWF0Y2hlcyA9IHByZW1pc2VUZXJtaW5hbE5vZGVNYXRjaGVzOyAgLy8vXG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IG5vblRlcm1pbmFsTm9kZSA9IG5vZGUsIC8vL1xuICAgICAgICAgICAgcHJlbWlzZU5vblRlcm1pbmFsTm9kZSA9IHByZW1pc2VOb2RlLCAgLy8vXG4gICAgICAgICAgICBwcmVtaXNlTm9uVGVybWluYWxOb2RlTWF0Y2hlcyA9IG1hdGNoUHJlbWlzZU5vblRlcm1pbmFsTm9kZShwcmVtaXNlTm9uVGVybWluYWxOb2RlLCBub25UZXJtaW5hbE5vZGUsIHN1YnN0aXR1dGlvbnMpO1xuXG4gICAgICBwcmVtaXNlTm9kZU1hdGNoZXMgPSBwcmVtaXNlTm9uVGVybWluYWxOb2RlTWF0Y2hlczsgLy8vXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHByZW1pc2VOb2RlTWF0Y2hlcztcbn1cblxuZnVuY3Rpb24gbWF0Y2hQcmVtaXNlTm9kZXMocHJlbWlzZU5vZGVzLCBub2Rlcywgc3Vic3RpdHV0aW9ucykge1xuICBsZXQgcHJlbWlzZU5vZGVzTWF0Y2hlcyA9IGZhbHNlO1xuXG4gIGNvbnN0IG5vZGVzTGVuZ3RoID0gbm9kZXMubGVuZ3RoLFxuICAgICAgICBwcmVtaXNlTm9kZXNMZW5ndGggPSBwcmVtaXNlTm9kZXMubGVuZ3RoO1xuXG4gIGlmIChub2Rlc0xlbmd0aCA9PT0gcHJlbWlzZU5vZGVzTGVuZ3RoKSB7XG4gICAgcHJlbWlzZU5vZGVzTWF0Y2hlcyA9IG5vZGVzLmV2ZXJ5KChub2RlLCBpbmRleCkgPT4ge1xuICAgICAgY29uc3QgcHJlbWlzZU5vZGUgPSBwcmVtaXNlTm9kZXNbaW5kZXhdLFxuICAgICAgICAgICAgcHJlbWlzZU5vZGVNYXRjaGVzID0gbWF0Y2hQcmVtaXNlTm9kZShwcmVtaXNlTm9kZSwgbm9kZSwgc3Vic3RpdHV0aW9ucyk7XG5cbiAgICAgIGlmIChwcmVtaXNlTm9kZU1hdGNoZXMpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICByZXR1cm4gcHJlbWlzZU5vZGVzTWF0Y2hlcztcbn1cblxuZnVuY3Rpb24gbWF0Y2hQcmVtaXNlVGVybWluYWxOb2RlKHByZW1pc2VUZXJtaW5hbE5vZGUsIHRlcm1pbmFsTm9kZSwgc3Vic3RpdHV0aW9ucykge1xuICBjb25zdCBtYXRjaGVzID0gcHJlbWlzZVRlcm1pbmFsTm9kZS5tYXRjaCh0ZXJtaW5hbE5vZGUpLFxuICAgICAgICBwcmVtaXNlVGVybWluYWxOb2RlTWF0Y2hlcyA9IG1hdGNoZXM7XG5cbiAgcmV0dXJuIHByZW1pc2VUZXJtaW5hbE5vZGVNYXRjaGVzO1xufVxuXG5mdW5jdGlvbiBtYXRjaFByZW1pc2VOb25UZXJtaW5hbE5vZGUocHJlbWlzZU5vblRlcm1pbmFsTm9kZSwgbm9uVGVybWluYWxOb2RlLCBzdWJzdGl0dXRpb25zKSB7XG4gIGxldCBwcmVtaXNlTm9uVGVybWluYWxOb2RlTWF0Y2hlcyA9IGZhbHNlO1xuXG4gIGNvbnN0IHJ1bGVOYW1lID0gbm9uVGVybWluYWxOb2RlLmdldFJ1bGVOYW1lKCksXG4gICAgICAgIGNoaWxkTm9kZXMgPSBub25UZXJtaW5hbE5vZGUuZ2V0Q2hpbGROb2RlcygpLFxuICAgICAgICBwcmVtaXNlTm9uVGVybWluYWxOb2RlUnVsZU5hbWUgPSBwcmVtaXNlTm9uVGVybWluYWxOb2RlLmdldFJ1bGVOYW1lKCksXG4gICAgICAgIHByZW1pc2VOb25UZXJtaW5hbE5vZGVDaGlsZE5vZGVzID0gcHJlbWlzZU5vblRlcm1pbmFsTm9kZS5nZXRDaGlsZE5vZGVzKCksXG4gICAgICAgIG5vZGVzID0gY2hpbGROb2RlcywgLy8vXG4gICAgICAgIHByZW1pc2VOb2RlcyA9IHByZW1pc2VOb25UZXJtaW5hbE5vZGVDaGlsZE5vZGVzLCAvLy9cbiAgICAgICAgcnVsZU5hbWVTdGF0ZW1lbnRSdWxlTmFtZSA9IChydWxlTmFtZSA9PT0gU1RBVEVNRU5UX1JVTEVfTkFNRSksXG4gICAgICAgIHByZW1pc2VOb25UZXJtaW5hbE5vZGVSdWxlTmFtZU1ldGFzdGF0ZW1lbnRSdWxlTmFtZSA9IChwcmVtaXNlTm9uVGVybWluYWxOb2RlUnVsZU5hbWUgPT09IE1FVEFTVEFURU1FTlRfUlVMRV9OQU1FKTtcblxuICBpZiAocnVsZU5hbWVTdGF0ZW1lbnRSdWxlTmFtZSAmJiBwcmVtaXNlTm9uVGVybWluYWxOb2RlUnVsZU5hbWVNZXRhc3RhdGVtZW50UnVsZU5hbWUpIHtcbiAgICBjb25zdCBzdGF0ZW1lbnROb2RlID0gbm9uVGVybWluYWxOb2RlLCAgLy8vXG4gICAgICAgICAgcHJlbWlzZU1ldGFzdGF0ZW1lbnROb2RlID0gcHJlbWlzZU5vblRlcm1pbmFsTm9kZSwgIC8vL1xuICAgICAgICAgIHByZW1pc2VNZXRhc3RhdGVtZW50Tm9kZU1hdGNoZXMgPSBtYXRjaFByZW1pc2VNZXRhc3RhdGVtZW50Tm9kZShwcmVtaXNlTWV0YXN0YXRlbWVudE5vZGUsIHN0YXRlbWVudE5vZGUsIHN1YnN0aXR1dGlvbnMpO1xuXG4gICAgaWYgKHByZW1pc2VNZXRhc3RhdGVtZW50Tm9kZU1hdGNoZXMpIHtcbiAgICAgIHByZW1pc2VOb25UZXJtaW5hbE5vZGVNYXRjaGVzID0gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgcHJlbWlzZU5vblRlcm1pbmFsTm9kZUNoaWxkTm9kZXNNYXRjaGVzID0gbWF0Y2hQcmVtaXNlTm9kZXMocHJlbWlzZU5vZGVzLCBub2Rlcywgc3Vic3RpdHV0aW9ucyk7XG5cbiAgICAgIHByZW1pc2VOb25UZXJtaW5hbE5vZGVNYXRjaGVzID0gcHJlbWlzZU5vblRlcm1pbmFsTm9kZUNoaWxkTm9kZXNNYXRjaGVzOyAvLy9cbiAgICB9XG4gIH0gZWxzZSBpZiAocnVsZU5hbWUgPT09IHByZW1pc2VOb25UZXJtaW5hbE5vZGVSdWxlTmFtZSkge1xuICAgIGNvbnN0IHByZW1pc2VOb25UZXJtaW5hbE5vZGVDaGlsZE5vZGVzTWF0Y2hlcyA9IG1hdGNoUHJlbWlzZU5vZGVzKHByZW1pc2VOb2Rlcywgbm9kZXMsIHN1YnN0aXR1dGlvbnMpO1xuXG4gICAgcHJlbWlzZU5vblRlcm1pbmFsTm9kZU1hdGNoZXMgPSBwcmVtaXNlTm9uVGVybWluYWxOb2RlQ2hpbGROb2Rlc01hdGNoZXM7IC8vL1xuICB9XG5cbiAgcmV0dXJuIHByZW1pc2VOb25UZXJtaW5hbE5vZGVNYXRjaGVzO1xufVxuXG5mdW5jdGlvbiBtYXRjaFByZW1pc2VNZXRhdmFyaWFibGVOb2RlKHByZW1pc2VNZXRhdmFyaWFibGVOb2RlLCBzdGF0ZW1lbnROb2RlLCBzdWJzdGl0dXRpb25zKSB7XG4gIGxldCBwcmVtaXNlTWV0YXZhcmlhYmxlTm9kZU1hdGNoZXM7XG5cbiAgY29uc3QgcHJlbWlzZU1ldGF2YXJpYWJsZU5hbWUgPSBtZXRhdmFyaWFibGVOYW1lRnJvbU1ldGF2YXJpYWJsZU5vZGUocHJlbWlzZU1ldGF2YXJpYWJsZU5vZGUpLFxuICAgICAgICBzdWJzdGl0dXRpb24gPSBzdWJzdGl0dXRpb25zLmZpbmQoKHN1YnN0aXR1dGlvbikgPT4ge1xuICAgICAgICAgIGNvbnN0IG1ldGF2YXJpYWJsZU5hbWUgPSBzdWJzdGl0dXRpb24uZ2V0TWV0YXZhcmlhYmxlTmFtZSgpO1xuXG4gICAgICAgICAgaWYgKG1ldGF2YXJpYWJsZU5hbWUgPT09IHByZW1pc2VNZXRhdmFyaWFibGVOYW1lKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pIHx8IG51bGw7XG5cbiAgaWYgKHN1YnN0aXR1dGlvbiAhPT0gbnVsbCkge1xuICAgIGNvbnN0IHN1YnN0aXR1dGlvbk5vZGVzTWF0Y2ggPSBzdWJzdGl0dXRpb24ubWF0Y2hTdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUpO1xuXG4gICAgcHJlbWlzZU1ldGF2YXJpYWJsZU5vZGVNYXRjaGVzID0gc3Vic3RpdHV0aW9uTm9kZXNNYXRjaDsgIC8vL1xuICB9IGVsc2Uge1xuICAgIGNvbnN0IG1ldGF2YXJpYWJsZU5hbWUgPSBwcmVtaXNlTWV0YXZhcmlhYmxlTmFtZSwgLy8vXG4gICAgICAgICAgc3Vic3RpdHV0aW9uID0gU3Vic3RpdHV0aW9uLmZyb21NZXRhdmFyaWFibGVOYW1lQW5kU3RhdGVtZW50Tm9kZShtZXRhdmFyaWFibGVOYW1lLCBzdGF0ZW1lbnROb2RlKTtcblxuICAgIHN1YnN0aXR1dGlvbnMucHVzaChzdWJzdGl0dXRpb24pO1xuXG4gICAgcHJlbWlzZU1ldGF2YXJpYWJsZU5vZGVNYXRjaGVzID0gdHJ1ZTtcbiAgfVxuXG4gIHJldHVybiBwcmVtaXNlTWV0YXZhcmlhYmxlTm9kZU1hdGNoZXM7XG59XG5cbmZ1bmN0aW9uIG1hdGNoUHJlbWlzZU1ldGFzdGF0ZW1lbnROb2RlKHByZW1pc2VNZXRhc3RhdGVtZW50Tm9kZSwgc3RhdGVtZW50Tm9kZSwgc3Vic3RpdHV0aW9ucykge1xuICBsZXQgcHJlbWlzZU1ldGFzdGF0ZW1lbnROb2RlTWF0Y2hlcyA9IGZhbHNlO1xuXG4gIGNvbnN0IHByZW1pc2VOb25UZXJtaW5hbE5vZGUgPSBwcmVtaXNlTWV0YXN0YXRlbWVudE5vZGUsICAvLy9cbiAgICAgICAgcHJlbWlzZU5vblRlcm1pbmFsTm9kZUNoaWxkTm9kZXMgPSBwcmVtaXNlTm9uVGVybWluYWxOb2RlLmdldENoaWxkTm9kZXMoKSxcbiAgICAgICAgcHJlbWlzZU5vblRlcm1pbmFsTm9kZUNoaWxkTm9kZXNMZW5ndGggPSBwcmVtaXNlTm9uVGVybWluYWxOb2RlQ2hpbGROb2Rlcy5sZW5ndGg7XG5cbiAgaWYgKHByZW1pc2VOb25UZXJtaW5hbE5vZGVDaGlsZE5vZGVzTGVuZ3RoID09PSAxKSB7XG4gICAgY29uc3QgZmlyc3RQcmVtaXNlQ2hpbGROb2RlID0gZmlyc3QocHJlbWlzZU5vblRlcm1pbmFsTm9kZUNoaWxkTm9kZXMpLFxuICAgICAgICAgIHByZW1pc2VDaGlsZE5vZGUgPSBmaXJzdFByZW1pc2VDaGlsZE5vZGUsICAvLy9cbiAgICAgICAgICBwcmVtaXNlQ2hpbGROb2RlTm9uVGVybWluYWxOb2RlID0gcHJlbWlzZUNoaWxkTm9kZS5pc05vblRlcm1pbmFsTm9kZSgpO1xuXG4gICAgaWYgKHByZW1pc2VDaGlsZE5vZGVOb25UZXJtaW5hbE5vZGUpIHtcbiAgICAgIGNvbnN0IHByZW1pc2VOb25UZXJtaW5hbENoaWxkTm9kZSA9IHByZW1pc2VDaGlsZE5vZGUsICAvLy9cbiAgICAgICAgICAgIHByZW1pc2VOb25UZXJtaW5hbENoaWxkTm9kZVJ1bGVOYW1lID0gcHJlbWlzZU5vblRlcm1pbmFsQ2hpbGROb2RlLmdldFJ1bGVOYW1lKCksXG4gICAgICAgICAgICBwcmVtaXNlTm9uVGVybWluYWxDaGlsZE5vZGVSdWxlTmFtZU1ldGF2YXJpYWJsZVJ1bGVOYW1lID0gKHByZW1pc2VOb25UZXJtaW5hbENoaWxkTm9kZVJ1bGVOYW1lID09PSBNRVRBVkFSSUFCTEVfUlVMRV9OQU1FKTtcblxuICAgICAgaWYgKHByZW1pc2VOb25UZXJtaW5hbENoaWxkTm9kZVJ1bGVOYW1lTWV0YXZhcmlhYmxlUnVsZU5hbWUpIHtcbiAgICAgICAgY29uc3QgcHJlbWlzZU1ldGF2YXJpYWJsZU5vZGUgPSBwcmVtaXNlTm9uVGVybWluYWxDaGlsZE5vZGUsICAvLy9cbiAgICAgICAgICAgICAgcHJlbWlzZU1ldGFWYXJpYWJsZU5vZGVNYXRjaGVzID0gbWF0Y2hQcmVtaXNlTWV0YXZhcmlhYmxlTm9kZShwcmVtaXNlTWV0YXZhcmlhYmxlTm9kZSwgc3RhdGVtZW50Tm9kZSwgc3Vic3RpdHV0aW9ucyk7XG5cbiAgICAgICAgcHJlbWlzZU1ldGFzdGF0ZW1lbnROb2RlTWF0Y2hlcyA9IHByZW1pc2VNZXRhVmFyaWFibGVOb2RlTWF0Y2hlczsgLy8vXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHByZW1pc2VNZXRhc3RhdGVtZW50Tm9kZU1hdGNoZXM7XG59XG5cbmZ1bmN0aW9uIG1ldGFNYXRjaFByZW1pc2VOb2RlKHByZW1pc2VOb2RlLCBub2RlLCBtZXRhU3Vic3RpdHV0aW9ucykge1xuICBsZXQgcHJlbWlzZU5vZGVNYXRjaGVzID0gZmFsc2U7XG5cbiAgY29uc3Qgbm9kZVRlcm1pbmFsTm9kZSA9IG5vZGUuaXNUZXJtaW5hbE5vZGUoKSxcbiAgICAgICAgcnVsZU5vZGVUZXJtaW5hbE5vZGUgPSBwcmVtaXNlTm9kZS5pc1Rlcm1pbmFsTm9kZSgpO1xuXG4gIGlmIChub2RlVGVybWluYWxOb2RlID09PSBydWxlTm9kZVRlcm1pbmFsTm9kZSkge1xuICAgIGlmIChub2RlVGVybWluYWxOb2RlKSB7XG4gICAgICBjb25zdCB0ZXJtaW5hbE5vZGUgPSBub2RlLCAgLy8vXG4gICAgICAgICAgICBwcmVtaXNlVGVybWluYWxOb2RlID0gcHJlbWlzZU5vZGUsICAvLy9cbiAgICAgICAgICAgIHByZW1pc2VUZXJtaW5hbE5vZGVNYXRjaGVzID0gbWV0YU1hdGNoUHJlbWlzZVRlcm1pbmFsTm9kZShwcmVtaXNlVGVybWluYWxOb2RlLCB0ZXJtaW5hbE5vZGUsIG1ldGFTdWJzdGl0dXRpb25zKTtcblxuICAgICAgcHJlbWlzZU5vZGVNYXRjaGVzID0gcHJlbWlzZVRlcm1pbmFsTm9kZU1hdGNoZXM7ICAvLy9cbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3Qgbm9uVGVybWluYWxOb2RlID0gbm9kZSwgLy8vXG4gICAgICAgICAgICBwcmVtaXNlTm9uVGVybWluYWxOb2RlID0gcHJlbWlzZU5vZGUsICAvLy9cbiAgICAgICAgICAgIHByZW1pc2VOb25UZXJtaW5hbE5vZGVNYXRjaGVzID0gbWV0YU1hdGNoUHJlbWlzZU5vblRlcm1pbmFsTm9kZShwcmVtaXNlTm9uVGVybWluYWxOb2RlLCBub25UZXJtaW5hbE5vZGUsIG1ldGFTdWJzdGl0dXRpb25zKTtcblxuICAgICAgcHJlbWlzZU5vZGVNYXRjaGVzID0gcHJlbWlzZU5vblRlcm1pbmFsTm9kZU1hdGNoZXM7IC8vL1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBwcmVtaXNlTm9kZU1hdGNoZXM7XG59XG5cbmZ1bmN0aW9uIG1ldGFNYXRjaFByZW1pc2VOb2RlcyhwcmVtaXNlTm9kZXMsIG5vZGVzLCBtZXRhU3Vic3RpdHV0aW9ucykge1xuICBsZXQgcHJlbWlzZU5vZGVzTWF0Y2hlcyA9IGZhbHNlO1xuXG4gIGNvbnN0IG5vZGVzTGVuZ3RoID0gbm9kZXMubGVuZ3RoLFxuICAgICAgICBwcmVtaXNlTm9kZXNMZW5ndGggPSBwcmVtaXNlTm9kZXMubGVuZ3RoO1xuXG4gIGlmIChub2Rlc0xlbmd0aCA9PT0gcHJlbWlzZU5vZGVzTGVuZ3RoKSB7XG4gICAgcHJlbWlzZU5vZGVzTWF0Y2hlcyA9IG5vZGVzLmV2ZXJ5KChub2RlLCBpbmRleCkgPT4ge1xuICAgICAgY29uc3QgcHJlbWlzZU5vZGUgPSBwcmVtaXNlTm9kZXNbaW5kZXhdLFxuICAgICAgICAgICAgcHJlbWlzZU5vZGVNYXRjaGVzID0gbWV0YU1hdGNoUHJlbWlzZU5vZGUocHJlbWlzZU5vZGUsIG5vZGUsIG1ldGFTdWJzdGl0dXRpb25zKTtcblxuICAgICAgaWYgKHByZW1pc2VOb2RlTWF0Y2hlcykge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHJldHVybiBwcmVtaXNlTm9kZXNNYXRjaGVzO1xufVxuXG5mdW5jdGlvbiBtZXRhTWF0Y2hQcmVtaXNlVGVybWluYWxOb2RlKHByZW1pc2VUZXJtaW5hbE5vZGUsIHRlcm1pbmFsTm9kZSwgbWV0YVN1YnN0aXR1dGlvbnMpIHtcbiAgY29uc3QgbWF0Y2hlcyA9IHByZW1pc2VUZXJtaW5hbE5vZGUubWF0Y2godGVybWluYWxOb2RlKSxcbiAgICAgICAgcHJlbWlzZVRlcm1pbmFsTm9kZU1hdGNoZXMgPSBtYXRjaGVzO1xuXG4gIHJldHVybiBwcmVtaXNlVGVybWluYWxOb2RlTWF0Y2hlcztcbn1cblxuZnVuY3Rpb24gbWV0YU1hdGNoUHJlbWlzZU5vblRlcm1pbmFsTm9kZShwcmVtaXNlTm9uVGVybWluYWxOb2RlLCBub25UZXJtaW5hbE5vZGUsIG1ldGFTdWJzdGl0dXRpb25zKSB7XG4gIGxldCBwcmVtaXNlTm9uVGVybWluYWxOb2RlTWF0Y2hlcyA9IGZhbHNlO1xuXG4gIGNvbnN0IHJ1bGVOYW1lID0gbm9uVGVybWluYWxOb2RlLmdldFJ1bGVOYW1lKCksXG4gICAgICAgIGNoaWxkTm9kZXMgPSBub25UZXJtaW5hbE5vZGUuZ2V0Q2hpbGROb2RlcygpLFxuICAgICAgICBwcmVtaXNlTm9uVGVybWluYWxOb2RlUnVsZU5hbWUgPSBwcmVtaXNlTm9uVGVybWluYWxOb2RlLmdldFJ1bGVOYW1lKCksXG4gICAgICAgIHByZW1pc2VOb25UZXJtaW5hbE5vZGVDaGlsZE5vZGVzID0gcHJlbWlzZU5vblRlcm1pbmFsTm9kZS5nZXRDaGlsZE5vZGVzKCksXG4gICAgICAgIG5vZGVzID0gY2hpbGROb2RlcywgLy8vXG4gICAgICAgIHByZW1pc2VOb2RlcyA9IHByZW1pc2VOb25UZXJtaW5hbE5vZGVDaGlsZE5vZGVzLCAvLy9cbiAgICAgICAgcnVsZU5hbWVNZXRhc3RhdGVtZW50UnVsZU5hbWUgPSAocnVsZU5hbWUgPT09IE1FVEFTVEFURU1FTlRfUlVMRV9OQU1FKSxcbiAgICAgICAgcHJlbWlzZU5vblRlcm1pbmFsTm9kZVJ1bGVOYW1lTWV0YXN0YXRlbWVudFJ1bGVOYW1lID0gKHByZW1pc2VOb25UZXJtaW5hbE5vZGVSdWxlTmFtZSA9PT0gTUVUQVNUQVRFTUVOVF9SVUxFX05BTUUpO1xuXG4gIGlmIChydWxlTmFtZU1ldGFzdGF0ZW1lbnRSdWxlTmFtZSAmJiBwcmVtaXNlTm9uVGVybWluYWxOb2RlUnVsZU5hbWVNZXRhc3RhdGVtZW50UnVsZU5hbWUpIHtcbiAgICBjb25zdCBtZXRhc3RhdGVtZW50Tm9kZSA9IG5vblRlcm1pbmFsTm9kZSwgIC8vL1xuICAgICAgICAgIHByZW1pc2VNZXRhc3RhdGVtZW50Tm9kZSA9IHByZW1pc2VOb25UZXJtaW5hbE5vZGUsICAvLy9cbiAgICAgICAgICBwcmVtaXNlTWV0YXN0YXRlbWVudE5vZGVNYXRjaGVzID0gbWV0YU1hdGNoUHJlbWlzZU1ldGFzdGF0ZW1lbnROb2RlKHByZW1pc2VNZXRhc3RhdGVtZW50Tm9kZSwgbWV0YXN0YXRlbWVudE5vZGUsIG1ldGFTdWJzdGl0dXRpb25zKTtcblxuICAgIGlmIChwcmVtaXNlTWV0YXN0YXRlbWVudE5vZGVNYXRjaGVzKSB7XG4gICAgICBwcmVtaXNlTm9uVGVybWluYWxOb2RlTWF0Y2hlcyA9IHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHByZW1pc2VOb25UZXJtaW5hbE5vZGVDaGlsZE5vZGVzTWF0Y2hlcyA9IG1ldGFNYXRjaFByZW1pc2VOb2RlcyhwcmVtaXNlTm9kZXMsIG5vZGVzLCBtZXRhU3Vic3RpdHV0aW9ucyk7XG5cbiAgICAgIHByZW1pc2VOb25UZXJtaW5hbE5vZGVNYXRjaGVzID0gcHJlbWlzZU5vblRlcm1pbmFsTm9kZUNoaWxkTm9kZXNNYXRjaGVzOyAvLy9cbiAgICB9XG4gIH0gZWxzZSBpZiAocnVsZU5hbWUgPT09IHByZW1pc2VOb25UZXJtaW5hbE5vZGVSdWxlTmFtZSkge1xuICAgIGNvbnN0IHByZW1pc2VOb25UZXJtaW5hbE5vZGVDaGlsZE5vZGVzTWF0Y2hlcyA9IG1ldGFNYXRjaFByZW1pc2VOb2RlcyhwcmVtaXNlTm9kZXMsIG5vZGVzLCBtZXRhU3Vic3RpdHV0aW9ucyk7XG5cbiAgICBwcmVtaXNlTm9uVGVybWluYWxOb2RlTWF0Y2hlcyA9IHByZW1pc2VOb25UZXJtaW5hbE5vZGVDaGlsZE5vZGVzTWF0Y2hlczsgLy8vXG4gIH1cblxuICByZXR1cm4gcHJlbWlzZU5vblRlcm1pbmFsTm9kZU1hdGNoZXM7XG59XG5cbmZ1bmN0aW9uIG1ldGFNYXRjaFByZW1pc2VNZXRhdmFyaWFibGVOb2RlKHByZW1pc2VNZXRhdmFyaWFibGVOb2RlLCBtZXRhc3RhdGVtZW50Tm9kZSwgbWV0YVN1YnN0aXR1dGlvbnMpIHtcbiAgbGV0IHByZW1pc2VNZXRhdmFyaWFibGVOb2RlTWF0Y2hlcztcblxuICBjb25zdCBwcmVtaXNlTWV0YXZhcmlhYmxlTmFtZSA9IG1ldGF2YXJpYWJsZU5hbWVGcm9tTWV0YXZhcmlhYmxlTm9kZShwcmVtaXNlTWV0YXZhcmlhYmxlTm9kZSksXG4gICAgICAgIG1ldGFTdWJzdGl0dXRpb24gPSBtZXRhU3Vic3RpdHV0aW9ucy5maW5kKChtZXRhU3Vic3RpdHV0aW9uKSA9PiB7XG4gICAgICAgICAgY29uc3QgbWV0YXZhcmlhYmxlTmFtZSA9IG1ldGFTdWJzdGl0dXRpb24uZ2V0TWV0YXZhcmlhYmxlTmFtZSgpO1xuXG4gICAgICAgICAgaWYgKG1ldGF2YXJpYWJsZU5hbWUgPT09IHByZW1pc2VNZXRhdmFyaWFibGVOYW1lKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pIHx8IG51bGw7XG5cbiAgaWYgKG1ldGFTdWJzdGl0dXRpb24gIT09IG51bGwpIHtcbiAgICBjb25zdCBtZXRhU3Vic3RpdHV0aW9uTm9kZXNNYXRjaCA9IG1ldGFTdWJzdGl0dXRpb24ubWF0Y2hNZXRhc3RhdGVtZW50Tm9kZShtZXRhc3RhdGVtZW50Tm9kZSk7XG5cbiAgICBwcmVtaXNlTWV0YXZhcmlhYmxlTm9kZU1hdGNoZXMgPSBtZXRhU3Vic3RpdHV0aW9uTm9kZXNNYXRjaDsgIC8vL1xuICB9IGVsc2Uge1xuICAgIGNvbnN0IG1ldGF2YXJpYWJsZU5hbWUgPSBwcmVtaXNlTWV0YXZhcmlhYmxlTmFtZSwgLy8vXG4gICAgICAgICAgbWV0YVN1YnN0aXR1dGlvbiA9IE1ldGFTdWJzdGl0dXRpb24uZnJvbU1ldGF2YXJpYWJsZU5hbWVBbmRNZXRhc3RhdGVtZW50Tm9kZShtZXRhdmFyaWFibGVOYW1lLCBtZXRhc3RhdGVtZW50Tm9kZSk7XG5cbiAgICBtZXRhU3Vic3RpdHV0aW9ucy5wdXNoKG1ldGFTdWJzdGl0dXRpb24pO1xuXG4gICAgcHJlbWlzZU1ldGF2YXJpYWJsZU5vZGVNYXRjaGVzID0gdHJ1ZTtcbiAgfVxuXG4gIHJldHVybiBwcmVtaXNlTWV0YXZhcmlhYmxlTm9kZU1hdGNoZXM7XG59XG5cbmZ1bmN0aW9uIG1ldGFNYXRjaFByZW1pc2VNZXRhc3RhdGVtZW50Tm9kZShwcmVtaXNlTWV0YXN0YXRlbWVudE5vZGUsIG1ldGFzdGF0ZW1lbnROb2RlLCBtZXRhU3Vic3RpdHV0aW9ucykge1xuICBsZXQgcHJlbWlzZU1ldGFzdGF0ZW1lbnROb2RlTWF0Y2hlcyA9IGZhbHNlO1xuXG4gIGNvbnN0IHByZW1pc2VOb25UZXJtaW5hbE5vZGUgPSBwcmVtaXNlTWV0YXN0YXRlbWVudE5vZGUsICAvLy9cbiAgICAgICAgcHJlbWlzZU5vblRlcm1pbmFsTm9kZUNoaWxkTm9kZXMgPSBwcmVtaXNlTm9uVGVybWluYWxOb2RlLmdldENoaWxkTm9kZXMoKSxcbiAgICAgICAgcHJlbWlzZU5vblRlcm1pbmFsTm9kZUNoaWxkTm9kZXNMZW5ndGggPSBwcmVtaXNlTm9uVGVybWluYWxOb2RlQ2hpbGROb2Rlcy5sZW5ndGg7XG5cbiAgaWYgKHByZW1pc2VOb25UZXJtaW5hbE5vZGVDaGlsZE5vZGVzTGVuZ3RoID09PSAxKSB7XG4gICAgY29uc3QgZmlyc3RQcmVtaXNlQ2hpbGROb2RlID0gZmlyc3QocHJlbWlzZU5vblRlcm1pbmFsTm9kZUNoaWxkTm9kZXMpLFxuICAgICAgICAgIHByZW1pc2VDaGlsZE5vZGUgPSBmaXJzdFByZW1pc2VDaGlsZE5vZGUsICAvLy9cbiAgICAgICAgICBwcmVtaXNlQ2hpbGROb2RlTm9uVGVybWluYWxOb2RlID0gcHJlbWlzZUNoaWxkTm9kZS5pc05vblRlcm1pbmFsTm9kZSgpO1xuXG4gICAgaWYgKHByZW1pc2VDaGlsZE5vZGVOb25UZXJtaW5hbE5vZGUpIHtcbiAgICAgIGNvbnN0IHByZW1pc2VOb25UZXJtaW5hbENoaWxkTm9kZSA9IHByZW1pc2VDaGlsZE5vZGUsICAvLy9cbiAgICAgICAgICAgIHByZW1pc2VOb25UZXJtaW5hbENoaWxkTm9kZVJ1bGVOYW1lID0gcHJlbWlzZU5vblRlcm1pbmFsQ2hpbGROb2RlLmdldFJ1bGVOYW1lKCksXG4gICAgICAgICAgICBwcmVtaXNlTm9uVGVybWluYWxDaGlsZE5vZGVSdWxlTmFtZU1ldGF2YXJpYWJsZVJ1bGVOYW1lID0gKHByZW1pc2VOb25UZXJtaW5hbENoaWxkTm9kZVJ1bGVOYW1lID09PSBNRVRBVkFSSUFCTEVfUlVMRV9OQU1FKTtcblxuICAgICAgaWYgKHByZW1pc2VOb25UZXJtaW5hbENoaWxkTm9kZVJ1bGVOYW1lTWV0YXZhcmlhYmxlUnVsZU5hbWUpIHtcbiAgICAgICAgY29uc3QgcHJlbWlzZU1ldGF2YXJpYWJsZU5vZGUgPSBwcmVtaXNlTm9uVGVybWluYWxDaGlsZE5vZGUsICAvLy9cbiAgICAgICAgICAgICAgcHJlbWlzZU1ldGFWYXJpYWJsZU5vZGVNYXRjaGVzID0gbWV0YU1hdGNoUHJlbWlzZU1ldGF2YXJpYWJsZU5vZGUocHJlbWlzZU1ldGF2YXJpYWJsZU5vZGUsIG1ldGFzdGF0ZW1lbnROb2RlLCBtZXRhU3Vic3RpdHV0aW9ucyk7XG5cbiAgICAgICAgcHJlbWlzZU1ldGFzdGF0ZW1lbnROb2RlTWF0Y2hlcyA9IHByZW1pc2VNZXRhVmFyaWFibGVOb2RlTWF0Y2hlczsgLy8vXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHByZW1pc2VNZXRhc3RhdGVtZW50Tm9kZU1hdGNoZXM7XG59XG4iXSwibmFtZXMiOlsiUHJlbWlzZSIsIm1ldGFzdGF0ZW1lbnROb2Rlc1F1ZXJ5Iiwibm9kZXNRdWVyeSIsIm1ldGFTdWJwcm9vZkFzc2VydGlvbk5vZGVRdWVyeSIsIm5vZGVRdWVyeSIsInVucXVhbGlmaWVkU3RhdGVtZW50U3RhdGVtZW50Tm9kZXNRdWVyeSIsInVucXVhbGlmaWVkTWV0YXN0YXRlbWVudE1ldGFzdGF0ZW1lbnROb2Rlc1F1ZXJ5IiwicXVhbGlmaWVkT3JVbnF1YWxpZmllZFN0YXRlbWVudFN0YXRlbWVudE5vZGVRdWVyeSIsInF1YWxpZmllZE9yVW5xdWFsaWZpZWRNZXRhc3RhdGVtZW50TWV0YXN0YXRlbWVudE5vZGVRdWVyeSIsIm1ldGFzdGF0ZW1lbnROb2RlIiwiZ2V0TWV0YXN0YXRlbWVudE5vZGUiLCJtYXRjaFN1YnByb29mTm9kZSIsInN1YnByb29mTm9kZSIsInN1YnN0aXR1dGlvbnMiLCJzdWJwcm9vZk5vZGVNYXRjaGVzIiwic3VicHJvb2ZBc3NlcnRpb25Ob2RlIiwibWV0YVN1YnByb29mQXNzZXJ0aW9uTWV0YXN0YXRlbWVudE5vZGVzIiwidW5xdWFsaWZpZWRTdGF0ZW1lbnRTdGF0ZW1lbnROb2RlcyIsInF1YWxpZmllZE9yVW5xdWFsaWZpZWRTdGF0ZW1lbnRTdGF0ZW1lbnROb2RlIiwic3RhdGVtZW50Tm9kZXMiLCJzdGF0ZW1lbnROb2Rlc0xlbmd0aCIsImxlbmd0aCIsIm1ldGFTdWJwcm9vZkFzc2VydGlvbk1ldGFzdGF0ZW1lbnROb2Rlc0xlbmd0aCIsImV2ZXJ5IiwibWV0YVN1YnByb29mQXNzZXJ0aW9uTWV0YXN0YXRlbWVudE5vZGUiLCJpbmRleCIsInN0YXRlbWVudE5vZGUiLCJub25UZXJtaW5hbE5vZGUiLCJwcmVtaXNlTm9uVGVybWluYWxOb2RlIiwicHJlbWlzZU5vblRlcm1pbmFsTm9kZU1hdGNoZXMiLCJtYXRjaFByZW1pc2VOb25UZXJtaW5hbE5vZGUiLCJtYXRjaFN0YXRlbWVudE5vZGUiLCJzdGF0ZW1lbnROb2RlTWF0Y2hlcyIsIm1hdGNoTWV0YVN1YnByb29mTm9kZSIsIm1ldGFTdWJwcm9vZk5vZGUiLCJtZXRhU3Vic3RpdHV0aW9ucyIsIm1ldGFTdWJwcm9vZk5vZGVNYXRjaGVzIiwibWV0YVN1YnByb29mQXNzZXJ0aW9uTm9kZSIsInVucXVhbGlmaWVkTWV0YXN0YXRlbWVudE1ldGFzdGF0ZW1lbnROb2RlcyIsInF1YWxpZmllZE9yVW5xdWFsaWZpZWRNZXRhc3RhdGVtZW50TWV0YXN0YXRlbWVudE5vZGUiLCJtZXRhc3RhdGVtZW50Tm9kZXMiLCJtZXRhc3RhdGVtZW50Tm9kZXNMZW5ndGgiLCJtZXRhTWF0Y2hQcmVtaXNlTm9uVGVybWluYWxOb2RlIiwibWF0Y2hNZXRhc3RhdGVtZW50Tm9kZSIsIm1ldGFzdGF0ZW1lbnROb2RlTWF0Y2hlcyIsInRvSlNPTiIsIm1ldGFzdGF0ZW1lbnRTdHJpbmciLCJub2RlQXNTdHJpbmciLCJtZXRhc3RhdGVtZW50IiwianNvbiIsImZyb21KU09OIiwicmVsZWFzZUNvbnRleHQiLCJtZXRhc3RhdGVtZW50Tm9kZUZyb21NZXRhc3RhdGVtZW50U3RyaW5nIiwicHJlbWlzZSIsImZyb21NZXRhc3RhdGVtZW50Tm9kZSIsIm1hdGNoUHJlbWlzZU5vZGUiLCJwcmVtaXNlTm9kZSIsIm5vZGUiLCJwcmVtaXNlTm9kZU1hdGNoZXMiLCJub2RlVGVybWluYWxOb2RlIiwiaXNUZXJtaW5hbE5vZGUiLCJydWxlTm9kZVRlcm1pbmFsTm9kZSIsInRlcm1pbmFsTm9kZSIsInByZW1pc2VUZXJtaW5hbE5vZGUiLCJwcmVtaXNlVGVybWluYWxOb2RlTWF0Y2hlcyIsIm1hdGNoUHJlbWlzZVRlcm1pbmFsTm9kZSIsIm1hdGNoUHJlbWlzZU5vZGVzIiwicHJlbWlzZU5vZGVzIiwibm9kZXMiLCJwcmVtaXNlTm9kZXNNYXRjaGVzIiwibm9kZXNMZW5ndGgiLCJwcmVtaXNlTm9kZXNMZW5ndGgiLCJtYXRjaGVzIiwibWF0Y2giLCJydWxlTmFtZSIsImdldFJ1bGVOYW1lIiwiY2hpbGROb2RlcyIsImdldENoaWxkTm9kZXMiLCJwcmVtaXNlTm9uVGVybWluYWxOb2RlUnVsZU5hbWUiLCJwcmVtaXNlTm9uVGVybWluYWxOb2RlQ2hpbGROb2RlcyIsInJ1bGVOYW1lU3RhdGVtZW50UnVsZU5hbWUiLCJTVEFURU1FTlRfUlVMRV9OQU1FIiwicHJlbWlzZU5vblRlcm1pbmFsTm9kZVJ1bGVOYW1lTWV0YXN0YXRlbWVudFJ1bGVOYW1lIiwiTUVUQVNUQVRFTUVOVF9SVUxFX05BTUUiLCJwcmVtaXNlTWV0YXN0YXRlbWVudE5vZGUiLCJwcmVtaXNlTWV0YXN0YXRlbWVudE5vZGVNYXRjaGVzIiwibWF0Y2hQcmVtaXNlTWV0YXN0YXRlbWVudE5vZGUiLCJwcmVtaXNlTm9uVGVybWluYWxOb2RlQ2hpbGROb2Rlc01hdGNoZXMiLCJtYXRjaFByZW1pc2VNZXRhdmFyaWFibGVOb2RlIiwicHJlbWlzZU1ldGF2YXJpYWJsZU5vZGUiLCJwcmVtaXNlTWV0YXZhcmlhYmxlTm9kZU1hdGNoZXMiLCJwcmVtaXNlTWV0YXZhcmlhYmxlTmFtZSIsIm1ldGF2YXJpYWJsZU5hbWVGcm9tTWV0YXZhcmlhYmxlTm9kZSIsInN1YnN0aXR1dGlvbiIsImZpbmQiLCJtZXRhdmFyaWFibGVOYW1lIiwiZ2V0TWV0YXZhcmlhYmxlTmFtZSIsInN1YnN0aXR1dGlvbk5vZGVzTWF0Y2giLCJTdWJzdGl0dXRpb24iLCJmcm9tTWV0YXZhcmlhYmxlTmFtZUFuZFN0YXRlbWVudE5vZGUiLCJwdXNoIiwicHJlbWlzZU5vblRlcm1pbmFsTm9kZUNoaWxkTm9kZXNMZW5ndGgiLCJmaXJzdFByZW1pc2VDaGlsZE5vZGUiLCJmaXJzdCIsInByZW1pc2VDaGlsZE5vZGUiLCJwcmVtaXNlQ2hpbGROb2RlTm9uVGVybWluYWxOb2RlIiwiaXNOb25UZXJtaW5hbE5vZGUiLCJwcmVtaXNlTm9uVGVybWluYWxDaGlsZE5vZGUiLCJwcmVtaXNlTm9uVGVybWluYWxDaGlsZE5vZGVSdWxlTmFtZSIsInByZW1pc2VOb25UZXJtaW5hbENoaWxkTm9kZVJ1bGVOYW1lTWV0YXZhcmlhYmxlUnVsZU5hbWUiLCJNRVRBVkFSSUFCTEVfUlVMRV9OQU1FIiwicHJlbWlzZU1ldGFWYXJpYWJsZU5vZGVNYXRjaGVzIiwibWV0YU1hdGNoUHJlbWlzZU5vZGUiLCJtZXRhTWF0Y2hQcmVtaXNlVGVybWluYWxOb2RlIiwibWV0YU1hdGNoUHJlbWlzZU5vZGVzIiwicnVsZU5hbWVNZXRhc3RhdGVtZW50UnVsZU5hbWUiLCJtZXRhTWF0Y2hQcmVtaXNlTWV0YXN0YXRlbWVudE5vZGUiLCJtZXRhTWF0Y2hQcmVtaXNlTWV0YXZhcmlhYmxlTm9kZSIsIm1ldGFTdWJzdGl0dXRpb24iLCJtZXRhU3Vic3RpdHV0aW9uTm9kZXNNYXRjaCIsIk1ldGFTdWJzdGl0dXRpb24iLCJmcm9tTWV0YXZhcmlhYmxlTmFtZUFuZE1ldGFzdGF0ZW1lbnROb2RlIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQW1CcUJBOzs7aUVBakJJO3FFQUNJO3FCQUVQ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