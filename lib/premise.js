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
var metastatementNodesQuery = (0, _query.nodesQuery)("/ruleSubproofAssertion/metastatement"), ruleSubproofAssertionNodeQuery = (0, _query.nodeQuery)("/metastatement/ruleSubproofAssertion!"), premiseMetastatementNodesQuery = (0, _query.nodesQuery)("/ruleSubproof/premise/unqualifiedMetastatement!/metastatement!"), subDerivationStatementNodeQuery = (0, _query.nodeQuery)("/subproof/subDerivation/qualifiedStatement|unqualifiedStatement[-1]/statement!"), suppositionStatementStatementNodesQuery = (0, _query.nodesQuery)("/subproof/supposition/unqualifiedStatement!/statement!"), ruleSubDerivationMetastatementNodeQuery = (0, _query.nodeQuery)("/ruleSubproof/ruleSubDerivation/qualifiedMetastatement|unqualifiedMetastatement[-1]/metastatement!");
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
                var subproofAssertionNode = ruleSubproofAssertionNodeQuery(this.metastatementNode);
                if (subproofAssertionNode !== null) {
                    var subDerivationStatementNode = subDerivationStatementNodeQuery(subproofNode), suppositionStatementStatementNodes = suppositionStatementStatementNodesQuery(subproofNode), ruleSubproofAssertionMetastatementNodes = metastatementNodesQuery(subproofAssertionNode), statementNodes = _toConsumableArray(suppositionStatementStatementNodes).concat([
                        subDerivationStatementNode
                    ]), statementNodesLength = statementNodes.length, ruleSubproofAssertionMetastatementNodesLength = ruleSubproofAssertionMetastatementNodes.length;
                    if (statementNodesLength === ruleSubproofAssertionMetastatementNodesLength) {
                        subproofNodeMatches = ruleSubproofAssertionMetastatementNodes.every(function(ruleSubproofAssertionMetastatementNode, index) {
                            var statementNode = statementNodes[index], nonTerminalNode = statementNode, premiseNonTerminalNode = ruleSubproofAssertionMetastatementNode, premiseNonTerminalNodeMatches = matchPremiseNonTerminalNode(premiseNonTerminalNode, nonTerminalNode, substitutions);
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
            key: "matchRuleSubproofNode",
            value: function matchRuleSubproofNode(ruleSubproofNode, metaSubstitutions) {
                var ruleSubproofNodeMatches = false;
                var ruleSubproofAssertionNode = ruleSubproofAssertionNodeQuery(this.metastatementNode);
                if (ruleSubproofAssertionNode !== null) {
                    var premiseMetastatementNodes = premiseMetastatementNodesQuery(ruleSubproofNode), ruleSubDerivationMetastatementNode = ruleSubDerivationMetastatementNodeQuery(ruleSubproofNode), ruleSubproofAssertionMetastatementNodes = metastatementNodesQuery(ruleSubproofAssertionNode), metastatementNodes = _toConsumableArray(premiseMetastatementNodes).concat([
                        ruleSubDerivationMetastatementNode
                    ]), metastatementNodesLength = metastatementNodes.length, ruleSubproofAssertionMetastatementNodesLength = ruleSubproofAssertionMetastatementNodes.length;
                    if (metastatementNodesLength === ruleSubproofAssertionMetastatementNodesLength) {
                        ruleSubproofNodeMatches = ruleSubproofAssertionMetastatementNodes.every(function(ruleSubproofAssertionMetastatementNode, index) {
                            var metastatementNode = metastatementNodes[index], nonTerminalNode = metastatementNode, premiseNonTerminalNode = ruleSubproofAssertionMetastatementNode, premiseNonTerminalNodeMatches = metaMatchPremiseNonTerminalNode(premiseNonTerminalNode, nonTerminalNode, metaSubstitutions);
                            if (premiseNonTerminalNodeMatches) {
                                return true;
                            }
                        });
                    }
                }
                return ruleSubproofNodeMatches;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9wcmVtaXNlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgU3Vic3RpdHV0aW9uIGZyb20gXCIuL3N1YnN0aXR1dGlvblwiO1xuaW1wb3J0IE1ldGFTdWJzdGl0dXRpb24gZnJvbSBcIi4vbWV0YVN1YnN0aXR1dGlvblwiO1xuXG5pbXBvcnQgeyBmaXJzdCB9IGZyb20gXCIuL3V0aWxpdGllcy9hcnJheVwiO1xuaW1wb3J0IHsgbm9kZUFzU3RyaW5nIH0gZnJvbSBcIi4vdXRpbGl0aWVzL3N0cmluZ1wiO1xuaW1wb3J0IHsgbm9kZVF1ZXJ5LCBub2Rlc1F1ZXJ5IH0gZnJvbSBcIi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5pbXBvcnQgeyBtZXRhdmFyaWFibGVOYW1lRnJvbU1ldGF2YXJpYWJsZU5vZGUgfSBmcm9tIFwiLi91dGlsaXRpZXMvcXVlcnlcIjtcbmltcG9ydCB7IG1ldGFzdGF0ZW1lbnROb2RlRnJvbU1ldGFzdGF0ZW1lbnRTdHJpbmcgfSBmcm9tIFwiLi91dGlsaXRpZXMvc3RyaW5nXCI7XG5pbXBvcnQgeyBTVEFURU1FTlRfUlVMRV9OQU1FLCBNRVRBVkFSSUFCTEVfUlVMRV9OQU1FLCBNRVRBU1RBVEVNRU5UX1JVTEVfTkFNRSB9IGZyb20gXCIuL3J1bGVOYW1lc1wiO1xuXG5jb25zdCBtZXRhc3RhdGVtZW50Tm9kZXNRdWVyeSA9IG5vZGVzUXVlcnkoXCIvcnVsZVN1YnByb29mQXNzZXJ0aW9uL21ldGFzdGF0ZW1lbnRcIiksXG4gICAgICBydWxlU3VicHJvb2ZBc3NlcnRpb25Ob2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvbWV0YXN0YXRlbWVudC9ydWxlU3VicHJvb2ZBc3NlcnRpb24hXCIpLFxuICAgICAgcHJlbWlzZU1ldGFzdGF0ZW1lbnROb2Rlc1F1ZXJ5ID0gbm9kZXNRdWVyeShcIi9ydWxlU3VicHJvb2YvcHJlbWlzZS91bnF1YWxpZmllZE1ldGFzdGF0ZW1lbnQhL21ldGFzdGF0ZW1lbnQhXCIpLFxuICAgICAgc3ViRGVyaXZhdGlvblN0YXRlbWVudE5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9zdWJwcm9vZi9zdWJEZXJpdmF0aW9uL3F1YWxpZmllZFN0YXRlbWVudHx1bnF1YWxpZmllZFN0YXRlbWVudFstMV0vc3RhdGVtZW50IVwiKSxcbiAgICAgIHN1cHBvc2l0aW9uU3RhdGVtZW50U3RhdGVtZW50Tm9kZXNRdWVyeSA9IG5vZGVzUXVlcnkoXCIvc3VicHJvb2Yvc3VwcG9zaXRpb24vdW5xdWFsaWZpZWRTdGF0ZW1lbnQhL3N0YXRlbWVudCFcIiksXG4gICAgICBydWxlU3ViRGVyaXZhdGlvbk1ldGFzdGF0ZW1lbnROb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvcnVsZVN1YnByb29mL3J1bGVTdWJEZXJpdmF0aW9uL3F1YWxpZmllZE1ldGFzdGF0ZW1lbnR8dW5xdWFsaWZpZWRNZXRhc3RhdGVtZW50Wy0xXS9tZXRhc3RhdGVtZW50IVwiKTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJlbWlzZSB7XG4gIGNvbnN0cnVjdG9yKG1ldGFzdGF0ZW1lbnROb2RlKSB7XG4gICAgdGhpcy5tZXRhc3RhdGVtZW50Tm9kZSA9IG1ldGFzdGF0ZW1lbnROb2RlO1xuICB9XG5cbiAgZ2V0TWV0YXN0YXRlbWVudE5vZGUoKSB7XG4gICAgcmV0dXJuIHRoaXMubWV0YXN0YXRlbWVudE5vZGU7XG4gIH1cblxuICBtYXRjaFN1YnByb29mTm9kZShzdWJwcm9vZk5vZGUsIHN1YnN0aXR1dGlvbnMpIHtcbiAgICBsZXQgc3VicHJvb2ZOb2RlTWF0Y2hlcyA9IGZhbHNlO1xuXG4gICAgY29uc3Qgc3VicHJvb2ZBc3NlcnRpb25Ob2RlID0gcnVsZVN1YnByb29mQXNzZXJ0aW9uTm9kZVF1ZXJ5KHRoaXMubWV0YXN0YXRlbWVudE5vZGUpO1xuXG4gICAgaWYgKHN1YnByb29mQXNzZXJ0aW9uTm9kZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3Qgc3ViRGVyaXZhdGlvblN0YXRlbWVudE5vZGUgPSBzdWJEZXJpdmF0aW9uU3RhdGVtZW50Tm9kZVF1ZXJ5KHN1YnByb29mTm9kZSksXG4gICAgICAgICAgICBzdXBwb3NpdGlvblN0YXRlbWVudFN0YXRlbWVudE5vZGVzID0gc3VwcG9zaXRpb25TdGF0ZW1lbnRTdGF0ZW1lbnROb2Rlc1F1ZXJ5KHN1YnByb29mTm9kZSksXG4gICAgICAgICAgICBydWxlU3VicHJvb2ZBc3NlcnRpb25NZXRhc3RhdGVtZW50Tm9kZXMgPSBtZXRhc3RhdGVtZW50Tm9kZXNRdWVyeShzdWJwcm9vZkFzc2VydGlvbk5vZGUpLFxuICAgICAgICAgICAgc3RhdGVtZW50Tm9kZXMgPSBbXG4gICAgICAgICAgICAgIC4uLnN1cHBvc2l0aW9uU3RhdGVtZW50U3RhdGVtZW50Tm9kZXMsXG4gICAgICAgICAgICAgIHN1YkRlcml2YXRpb25TdGF0ZW1lbnROb2RlXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgc3RhdGVtZW50Tm9kZXNMZW5ndGggPSBzdGF0ZW1lbnROb2Rlcy5sZW5ndGgsXG4gICAgICAgICAgICBydWxlU3VicHJvb2ZBc3NlcnRpb25NZXRhc3RhdGVtZW50Tm9kZXNMZW5ndGggPSBydWxlU3VicHJvb2ZBc3NlcnRpb25NZXRhc3RhdGVtZW50Tm9kZXMubGVuZ3RoO1xuXG4gICAgICBpZiAoc3RhdGVtZW50Tm9kZXNMZW5ndGggPT09IHJ1bGVTdWJwcm9vZkFzc2VydGlvbk1ldGFzdGF0ZW1lbnROb2Rlc0xlbmd0aCkge1xuICAgICAgICBzdWJwcm9vZk5vZGVNYXRjaGVzID0gcnVsZVN1YnByb29mQXNzZXJ0aW9uTWV0YXN0YXRlbWVudE5vZGVzLmV2ZXJ5KChydWxlU3VicHJvb2ZBc3NlcnRpb25NZXRhc3RhdGVtZW50Tm9kZSwgaW5kZXgpID0+IHtcbiAgICAgICAgICBjb25zdCBzdGF0ZW1lbnROb2RlID0gc3RhdGVtZW50Tm9kZXNbaW5kZXhdLFxuICAgICAgICAgICAgICAgIG5vblRlcm1pbmFsTm9kZSA9IHN0YXRlbWVudE5vZGUsIC8vL1xuICAgICAgICAgICAgICAgIHByZW1pc2VOb25UZXJtaW5hbE5vZGUgPSBydWxlU3VicHJvb2ZBc3NlcnRpb25NZXRhc3RhdGVtZW50Tm9kZSwgIC8vL1xuICAgICAgICAgICAgICAgIHByZW1pc2VOb25UZXJtaW5hbE5vZGVNYXRjaGVzID0gbWF0Y2hQcmVtaXNlTm9uVGVybWluYWxOb2RlKHByZW1pc2VOb25UZXJtaW5hbE5vZGUsIG5vblRlcm1pbmFsTm9kZSwgc3Vic3RpdHV0aW9ucyk7XG5cbiAgICAgICAgICBpZiAocHJlbWlzZU5vblRlcm1pbmFsTm9kZU1hdGNoZXMpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHN1YnByb29mTm9kZU1hdGNoZXM7XG4gIH1cblxuICBtYXRjaFN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSwgc3Vic3RpdHV0aW9ucykge1xuICAgIGNvbnN0IG5vblRlcm1pbmFsTm9kZSA9IHN0YXRlbWVudE5vZGUsICAvLy9cbiAgICAgICAgICBwcmVtaXNlTm9uVGVybWluYWxOb2RlID0gdGhpcy5tZXRhc3RhdGVtZW50Tm9kZSwgIC8vL1xuICAgICAgICAgIHByZW1pc2VOb25UZXJtaW5hbE5vZGVNYXRjaGVzID0gbWF0Y2hQcmVtaXNlTm9uVGVybWluYWxOb2RlKHByZW1pc2VOb25UZXJtaW5hbE5vZGUsIG5vblRlcm1pbmFsTm9kZSwgc3Vic3RpdHV0aW9ucyksXG4gICAgICAgICAgc3RhdGVtZW50Tm9kZU1hdGNoZXMgPSBwcmVtaXNlTm9uVGVybWluYWxOb2RlTWF0Y2hlczsgLy8vXG5cbiAgICByZXR1cm4gc3RhdGVtZW50Tm9kZU1hdGNoZXM7XG4gIH1cblxuICBtYXRjaFJ1bGVTdWJwcm9vZk5vZGUocnVsZVN1YnByb29mTm9kZSwgbWV0YVN1YnN0aXR1dGlvbnMpIHtcbiAgICBsZXQgcnVsZVN1YnByb29mTm9kZU1hdGNoZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IHJ1bGVTdWJwcm9vZkFzc2VydGlvbk5vZGUgPSBydWxlU3VicHJvb2ZBc3NlcnRpb25Ob2RlUXVlcnkodGhpcy5tZXRhc3RhdGVtZW50Tm9kZSk7XG5cbiAgICBpZiAocnVsZVN1YnByb29mQXNzZXJ0aW9uTm9kZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgcHJlbWlzZU1ldGFzdGF0ZW1lbnROb2RlcyA9IHByZW1pc2VNZXRhc3RhdGVtZW50Tm9kZXNRdWVyeShydWxlU3VicHJvb2ZOb2RlKSxcbiAgICAgICAgICAgIHJ1bGVTdWJEZXJpdmF0aW9uTWV0YXN0YXRlbWVudE5vZGUgPSBydWxlU3ViRGVyaXZhdGlvbk1ldGFzdGF0ZW1lbnROb2RlUXVlcnkocnVsZVN1YnByb29mTm9kZSksXG4gICAgICAgICAgICBydWxlU3VicHJvb2ZBc3NlcnRpb25NZXRhc3RhdGVtZW50Tm9kZXMgPSBtZXRhc3RhdGVtZW50Tm9kZXNRdWVyeShydWxlU3VicHJvb2ZBc3NlcnRpb25Ob2RlKSxcbiAgICAgICAgICAgIG1ldGFzdGF0ZW1lbnROb2RlcyA9IFtcbiAgICAgICAgICAgICAgLi4ucHJlbWlzZU1ldGFzdGF0ZW1lbnROb2RlcyxcbiAgICAgICAgICAgICAgcnVsZVN1YkRlcml2YXRpb25NZXRhc3RhdGVtZW50Tm9kZVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIG1ldGFzdGF0ZW1lbnROb2Rlc0xlbmd0aCA9IG1ldGFzdGF0ZW1lbnROb2Rlcy5sZW5ndGgsXG4gICAgICAgICAgICBydWxlU3VicHJvb2ZBc3NlcnRpb25NZXRhc3RhdGVtZW50Tm9kZXNMZW5ndGggPSBydWxlU3VicHJvb2ZBc3NlcnRpb25NZXRhc3RhdGVtZW50Tm9kZXMubGVuZ3RoO1xuXG4gICAgICBpZiAobWV0YXN0YXRlbWVudE5vZGVzTGVuZ3RoID09PSBydWxlU3VicHJvb2ZBc3NlcnRpb25NZXRhc3RhdGVtZW50Tm9kZXNMZW5ndGgpIHtcbiAgICAgICAgcnVsZVN1YnByb29mTm9kZU1hdGNoZXMgPSBydWxlU3VicHJvb2ZBc3NlcnRpb25NZXRhc3RhdGVtZW50Tm9kZXMuZXZlcnkoKHJ1bGVTdWJwcm9vZkFzc2VydGlvbk1ldGFzdGF0ZW1lbnROb2RlLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgbWV0YXN0YXRlbWVudE5vZGUgPSBtZXRhc3RhdGVtZW50Tm9kZXNbaW5kZXhdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9uVGVybWluYWxOb2RlID0gbWV0YXN0YXRlbWVudE5vZGUsIC8vL1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJlbWlzZU5vblRlcm1pbmFsTm9kZSA9IHJ1bGVTdWJwcm9vZkFzc2VydGlvbk1ldGFzdGF0ZW1lbnROb2RlLCAgLy8vXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmVtaXNlTm9uVGVybWluYWxOb2RlTWF0Y2hlcyA9IG1ldGFNYXRjaFByZW1pc2VOb25UZXJtaW5hbE5vZGUocHJlbWlzZU5vblRlcm1pbmFsTm9kZSwgbm9uVGVybWluYWxOb2RlLCBtZXRhU3Vic3RpdHV0aW9ucyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwcmVtaXNlTm9uVGVybWluYWxOb2RlTWF0Y2hlcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gcnVsZVN1YnByb29mTm9kZU1hdGNoZXM7XG4gIH1cblxuICBtYXRjaE1ldGFzdGF0ZW1lbnROb2RlKG1ldGFzdGF0ZW1lbnROb2RlLCBtZXRhU3Vic3RpdHV0aW9ucykge1xuICAgIGNvbnN0IG5vblRlcm1pbmFsTm9kZSA9IG1ldGFzdGF0ZW1lbnROb2RlLCAgLy8vXG4gICAgICAgICAgcHJlbWlzZU5vblRlcm1pbmFsTm9kZSA9IHRoaXMubWV0YXN0YXRlbWVudE5vZGUsICAvLy9cbiAgICAgICAgICBwcmVtaXNlTm9uVGVybWluYWxOb2RlTWF0Y2hlcyA9IG1ldGFNYXRjaFByZW1pc2VOb25UZXJtaW5hbE5vZGUocHJlbWlzZU5vblRlcm1pbmFsTm9kZSwgbm9uVGVybWluYWxOb2RlLCBtZXRhU3Vic3RpdHV0aW9ucyksXG4gICAgICAgICAgbWV0YXN0YXRlbWVudE5vZGVNYXRjaGVzID0gcHJlbWlzZU5vblRlcm1pbmFsTm9kZU1hdGNoZXM7IC8vL1xuXG4gICAgcmV0dXJuIG1ldGFzdGF0ZW1lbnROb2RlTWF0Y2hlcztcbiAgfVxuXG4gIHRvSlNPTigpIHtcbiAgICBjb25zdCBtZXRhc3RhdGVtZW50U3RyaW5nID0gbm9kZUFzU3RyaW5nKHRoaXMubWV0YXN0YXRlbWVudE5vZGUpLFxuICAgICAgICAgIG1ldGFzdGF0ZW1lbnQgPSBtZXRhc3RhdGVtZW50U3RyaW5nLCAvLy9cbiAgICAgICAgICBqc29uID0ge1xuICAgICAgICAgICAgbWV0YXN0YXRlbWVudFxuICAgICAgICAgIH07XG5cbiAgICByZXR1cm4ganNvbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tSlNPTihqc29uLCByZWxlYXNlQ29udGV4dCkge1xuICAgIGNvbnN0IHsgbWV0YXN0YXRlbWVudCB9ID0ganNvbixcbiAgICAgICAgICBtZXRhc3RhdGVtZW50U3RyaW5nID0gbWV0YXN0YXRlbWVudCwgIC8vL1xuICAgICAgICAgIG1ldGFzdGF0ZW1lbnROb2RlID0gbWV0YXN0YXRlbWVudE5vZGVGcm9tTWV0YXN0YXRlbWVudFN0cmluZyhtZXRhc3RhdGVtZW50U3RyaW5nLCByZWxlYXNlQ29udGV4dCksXG4gICAgICAgICAgcHJlbWlzZSA9IG5ldyBQcmVtaXNlKG1ldGFzdGF0ZW1lbnROb2RlKTtcblxuICAgIHJldHVybiBwcmVtaXNlO1xuICB9XG5cbiAgc3RhdGljIGZyb21NZXRhc3RhdGVtZW50Tm9kZShtZXRhc3RhdGVtZW50Tm9kZSkge1xuICAgIGNvbnN0IHByZW1pc2UgPSBuZXcgUHJlbWlzZShtZXRhc3RhdGVtZW50Tm9kZSk7XG5cbiAgICByZXR1cm4gcHJlbWlzZTtcbiAgfVxufVxuXG5mdW5jdGlvbiBtYXRjaFByZW1pc2VOb2RlKHByZW1pc2VOb2RlLCBub2RlLCBzdWJzdGl0dXRpb25zKSB7XG4gIGxldCBwcmVtaXNlTm9kZU1hdGNoZXMgPSBmYWxzZTtcblxuICBjb25zdCBub2RlVGVybWluYWxOb2RlID0gbm9kZS5pc1Rlcm1pbmFsTm9kZSgpLFxuICAgIHJ1bGVOb2RlVGVybWluYWxOb2RlID0gcHJlbWlzZU5vZGUuaXNUZXJtaW5hbE5vZGUoKTtcblxuICBpZiAobm9kZVRlcm1pbmFsTm9kZSA9PT0gcnVsZU5vZGVUZXJtaW5hbE5vZGUpIHtcbiAgICBpZiAobm9kZVRlcm1pbmFsTm9kZSkge1xuICAgICAgY29uc3QgdGVybWluYWxOb2RlID0gbm9kZSwgIC8vL1xuICAgICAgICAgICAgcHJlbWlzZVRlcm1pbmFsTm9kZSA9IHByZW1pc2VOb2RlLCAgLy8vXG4gICAgICAgICAgICBwcmVtaXNlVGVybWluYWxOb2RlTWF0Y2hlcyA9IG1hdGNoUHJlbWlzZVRlcm1pbmFsTm9kZShwcmVtaXNlVGVybWluYWxOb2RlLCB0ZXJtaW5hbE5vZGUsIHN1YnN0aXR1dGlvbnMpO1xuXG4gICAgICBwcmVtaXNlTm9kZU1hdGNoZXMgPSBwcmVtaXNlVGVybWluYWxOb2RlTWF0Y2hlczsgIC8vL1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBub25UZXJtaW5hbE5vZGUgPSBub2RlLCAvLy9cbiAgICAgICAgICAgIHByZW1pc2VOb25UZXJtaW5hbE5vZGUgPSBwcmVtaXNlTm9kZSwgIC8vL1xuICAgICAgICAgICAgcHJlbWlzZU5vblRlcm1pbmFsTm9kZU1hdGNoZXMgPSBtYXRjaFByZW1pc2VOb25UZXJtaW5hbE5vZGUocHJlbWlzZU5vblRlcm1pbmFsTm9kZSwgbm9uVGVybWluYWxOb2RlLCBzdWJzdGl0dXRpb25zKTtcblxuICAgICAgcHJlbWlzZU5vZGVNYXRjaGVzID0gcHJlbWlzZU5vblRlcm1pbmFsTm9kZU1hdGNoZXM7IC8vL1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBwcmVtaXNlTm9kZU1hdGNoZXM7XG59XG5cbmZ1bmN0aW9uIG1hdGNoUHJlbWlzZU5vZGVzKHByZW1pc2VOb2Rlcywgbm9kZXMsIHN1YnN0aXR1dGlvbnMpIHtcbiAgbGV0IHByZW1pc2VOb2Rlc01hdGNoZXMgPSBmYWxzZTtcblxuICBjb25zdCBub2Rlc0xlbmd0aCA9IG5vZGVzLmxlbmd0aCxcbiAgICAgICAgcHJlbWlzZU5vZGVzTGVuZ3RoID0gcHJlbWlzZU5vZGVzLmxlbmd0aDtcblxuICBpZiAobm9kZXNMZW5ndGggPT09IHByZW1pc2VOb2Rlc0xlbmd0aCkge1xuICAgIHByZW1pc2VOb2Rlc01hdGNoZXMgPSBub2Rlcy5ldmVyeSgobm9kZSwgaW5kZXgpID0+IHtcbiAgICAgIGNvbnN0IHByZW1pc2VOb2RlID0gcHJlbWlzZU5vZGVzW2luZGV4XSxcbiAgICAgICAgICAgIHByZW1pc2VOb2RlTWF0Y2hlcyA9IG1hdGNoUHJlbWlzZU5vZGUocHJlbWlzZU5vZGUsIG5vZGUsIHN1YnN0aXR1dGlvbnMpO1xuXG4gICAgICBpZiAocHJlbWlzZU5vZGVNYXRjaGVzKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIHByZW1pc2VOb2Rlc01hdGNoZXM7XG59XG5cbmZ1bmN0aW9uIG1hdGNoUHJlbWlzZVRlcm1pbmFsTm9kZShwcmVtaXNlVGVybWluYWxOb2RlLCB0ZXJtaW5hbE5vZGUsIHN1YnN0aXR1dGlvbnMpIHtcbiAgY29uc3QgbWF0Y2hlcyA9IHByZW1pc2VUZXJtaW5hbE5vZGUubWF0Y2godGVybWluYWxOb2RlKSxcbiAgICAgICAgcHJlbWlzZVRlcm1pbmFsTm9kZU1hdGNoZXMgPSBtYXRjaGVzO1xuXG4gIHJldHVybiBwcmVtaXNlVGVybWluYWxOb2RlTWF0Y2hlcztcbn1cblxuZnVuY3Rpb24gbWF0Y2hQcmVtaXNlTm9uVGVybWluYWxOb2RlKHByZW1pc2VOb25UZXJtaW5hbE5vZGUsIG5vblRlcm1pbmFsTm9kZSwgc3Vic3RpdHV0aW9ucykge1xuICBsZXQgcHJlbWlzZU5vblRlcm1pbmFsTm9kZU1hdGNoZXMgPSBmYWxzZTtcblxuICBjb25zdCBydWxlTmFtZSA9IG5vblRlcm1pbmFsTm9kZS5nZXRSdWxlTmFtZSgpLFxuICAgICAgICBjaGlsZE5vZGVzID0gbm9uVGVybWluYWxOb2RlLmdldENoaWxkTm9kZXMoKSxcbiAgICAgICAgcHJlbWlzZU5vblRlcm1pbmFsTm9kZVJ1bGVOYW1lID0gcHJlbWlzZU5vblRlcm1pbmFsTm9kZS5nZXRSdWxlTmFtZSgpLFxuICAgICAgICBwcmVtaXNlTm9uVGVybWluYWxOb2RlQ2hpbGROb2RlcyA9IHByZW1pc2VOb25UZXJtaW5hbE5vZGUuZ2V0Q2hpbGROb2RlcygpLFxuICAgICAgICBub2RlcyA9IGNoaWxkTm9kZXMsIC8vL1xuICAgICAgICBwcmVtaXNlTm9kZXMgPSBwcmVtaXNlTm9uVGVybWluYWxOb2RlQ2hpbGROb2RlcywgLy8vXG4gICAgICAgIHJ1bGVOYW1lU3RhdGVtZW50UnVsZU5hbWUgPSAocnVsZU5hbWUgPT09IFNUQVRFTUVOVF9SVUxFX05BTUUpLFxuICAgICAgICBwcmVtaXNlTm9uVGVybWluYWxOb2RlUnVsZU5hbWVNZXRhc3RhdGVtZW50UnVsZU5hbWUgPSAocHJlbWlzZU5vblRlcm1pbmFsTm9kZVJ1bGVOYW1lID09PSBNRVRBU1RBVEVNRU5UX1JVTEVfTkFNRSk7XG5cbiAgaWYgKHJ1bGVOYW1lU3RhdGVtZW50UnVsZU5hbWUgJiYgcHJlbWlzZU5vblRlcm1pbmFsTm9kZVJ1bGVOYW1lTWV0YXN0YXRlbWVudFJ1bGVOYW1lKSB7XG4gICAgY29uc3Qgc3RhdGVtZW50Tm9kZSA9IG5vblRlcm1pbmFsTm9kZSwgIC8vL1xuICAgICAgICAgIHByZW1pc2VNZXRhc3RhdGVtZW50Tm9kZSA9IHByZW1pc2VOb25UZXJtaW5hbE5vZGUsICAvLy9cbiAgICAgICAgICBwcmVtaXNlTWV0YXN0YXRlbWVudE5vZGVNYXRjaGVzID0gbWF0Y2hQcmVtaXNlTWV0YXN0YXRlbWVudE5vZGUocHJlbWlzZU1ldGFzdGF0ZW1lbnROb2RlLCBzdGF0ZW1lbnROb2RlLCBzdWJzdGl0dXRpb25zKTtcblxuICAgIGlmIChwcmVtaXNlTWV0YXN0YXRlbWVudE5vZGVNYXRjaGVzKSB7XG4gICAgICBwcmVtaXNlTm9uVGVybWluYWxOb2RlTWF0Y2hlcyA9IHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHByZW1pc2VOb25UZXJtaW5hbE5vZGVDaGlsZE5vZGVzTWF0Y2hlcyA9IG1hdGNoUHJlbWlzZU5vZGVzKHByZW1pc2VOb2Rlcywgbm9kZXMsIHN1YnN0aXR1dGlvbnMpO1xuXG4gICAgICBwcmVtaXNlTm9uVGVybWluYWxOb2RlTWF0Y2hlcyA9IHByZW1pc2VOb25UZXJtaW5hbE5vZGVDaGlsZE5vZGVzTWF0Y2hlczsgLy8vXG4gICAgfVxuICB9IGVsc2UgaWYgKHJ1bGVOYW1lID09PSBwcmVtaXNlTm9uVGVybWluYWxOb2RlUnVsZU5hbWUpIHtcbiAgICBjb25zdCBwcmVtaXNlTm9uVGVybWluYWxOb2RlQ2hpbGROb2Rlc01hdGNoZXMgPSBtYXRjaFByZW1pc2VOb2RlcyhwcmVtaXNlTm9kZXMsIG5vZGVzLCBzdWJzdGl0dXRpb25zKTtcblxuICAgIHByZW1pc2VOb25UZXJtaW5hbE5vZGVNYXRjaGVzID0gcHJlbWlzZU5vblRlcm1pbmFsTm9kZUNoaWxkTm9kZXNNYXRjaGVzOyAvLy9cbiAgfVxuXG4gIHJldHVybiBwcmVtaXNlTm9uVGVybWluYWxOb2RlTWF0Y2hlcztcbn1cblxuZnVuY3Rpb24gbWF0Y2hQcmVtaXNlTWV0YXZhcmlhYmxlTm9kZShwcmVtaXNlTWV0YXZhcmlhYmxlTm9kZSwgc3RhdGVtZW50Tm9kZSwgc3Vic3RpdHV0aW9ucykge1xuICBsZXQgcHJlbWlzZU1ldGF2YXJpYWJsZU5vZGVNYXRjaGVzO1xuXG4gIGNvbnN0IHByZW1pc2VNZXRhdmFyaWFibGVOYW1lID0gbWV0YXZhcmlhYmxlTmFtZUZyb21NZXRhdmFyaWFibGVOb2RlKHByZW1pc2VNZXRhdmFyaWFibGVOb2RlKSxcbiAgICAgICAgc3Vic3RpdHV0aW9uID0gc3Vic3RpdHV0aW9ucy5maW5kKChzdWJzdGl0dXRpb24pID0+IHtcbiAgICAgICAgICBjb25zdCBtZXRhdmFyaWFibGVOYW1lID0gc3Vic3RpdHV0aW9uLmdldE1ldGF2YXJpYWJsZU5hbWUoKTtcblxuICAgICAgICAgIGlmIChtZXRhdmFyaWFibGVOYW1lID09PSBwcmVtaXNlTWV0YXZhcmlhYmxlTmFtZSkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9KSB8fCBudWxsO1xuXG4gIGlmIChzdWJzdGl0dXRpb24gIT09IG51bGwpIHtcbiAgICBjb25zdCBzdWJzdGl0dXRpb25Ob2Rlc01hdGNoID0gc3Vic3RpdHV0aW9uLm1hdGNoU3RhdGVtZW50Tm9kZShzdGF0ZW1lbnROb2RlKTtcblxuICAgIHByZW1pc2VNZXRhdmFyaWFibGVOb2RlTWF0Y2hlcyA9IHN1YnN0aXR1dGlvbk5vZGVzTWF0Y2g7ICAvLy9cbiAgfSBlbHNlIHtcbiAgICBjb25zdCBtZXRhdmFyaWFibGVOYW1lID0gcHJlbWlzZU1ldGF2YXJpYWJsZU5hbWUsIC8vL1xuICAgICAgICAgIHN1YnN0aXR1dGlvbiA9IFN1YnN0aXR1dGlvbi5mcm9tTWV0YXZhcmlhYmxlTmFtZUFuZFN0YXRlbWVudE5vZGUobWV0YXZhcmlhYmxlTmFtZSwgc3RhdGVtZW50Tm9kZSk7XG5cbiAgICBzdWJzdGl0dXRpb25zLnB1c2goc3Vic3RpdHV0aW9uKTtcblxuICAgIHByZW1pc2VNZXRhdmFyaWFibGVOb2RlTWF0Y2hlcyA9IHRydWU7XG4gIH1cblxuICByZXR1cm4gcHJlbWlzZU1ldGF2YXJpYWJsZU5vZGVNYXRjaGVzO1xufVxuXG5mdW5jdGlvbiBtYXRjaFByZW1pc2VNZXRhc3RhdGVtZW50Tm9kZShwcmVtaXNlTWV0YXN0YXRlbWVudE5vZGUsIHN0YXRlbWVudE5vZGUsIHN1YnN0aXR1dGlvbnMpIHtcbiAgbGV0IHByZW1pc2VNZXRhc3RhdGVtZW50Tm9kZU1hdGNoZXMgPSBmYWxzZTtcblxuICBjb25zdCBwcmVtaXNlTm9uVGVybWluYWxOb2RlID0gcHJlbWlzZU1ldGFzdGF0ZW1lbnROb2RlLCAgLy8vXG4gICAgICAgIHByZW1pc2VOb25UZXJtaW5hbE5vZGVDaGlsZE5vZGVzID0gcHJlbWlzZU5vblRlcm1pbmFsTm9kZS5nZXRDaGlsZE5vZGVzKCksXG4gICAgICAgIHByZW1pc2VOb25UZXJtaW5hbE5vZGVDaGlsZE5vZGVzTGVuZ3RoID0gcHJlbWlzZU5vblRlcm1pbmFsTm9kZUNoaWxkTm9kZXMubGVuZ3RoO1xuXG4gIGlmIChwcmVtaXNlTm9uVGVybWluYWxOb2RlQ2hpbGROb2Rlc0xlbmd0aCA9PT0gMSkge1xuICAgIGNvbnN0IGZpcnN0UHJlbWlzZUNoaWxkTm9kZSA9IGZpcnN0KHByZW1pc2VOb25UZXJtaW5hbE5vZGVDaGlsZE5vZGVzKSxcbiAgICAgICAgICBwcmVtaXNlQ2hpbGROb2RlID0gZmlyc3RQcmVtaXNlQ2hpbGROb2RlLCAgLy8vXG4gICAgICAgICAgcHJlbWlzZUNoaWxkTm9kZU5vblRlcm1pbmFsTm9kZSA9IHByZW1pc2VDaGlsZE5vZGUuaXNOb25UZXJtaW5hbE5vZGUoKTtcblxuICAgIGlmIChwcmVtaXNlQ2hpbGROb2RlTm9uVGVybWluYWxOb2RlKSB7XG4gICAgICBjb25zdCBwcmVtaXNlTm9uVGVybWluYWxDaGlsZE5vZGUgPSBwcmVtaXNlQ2hpbGROb2RlLCAgLy8vXG4gICAgICAgICAgICBwcmVtaXNlTm9uVGVybWluYWxDaGlsZE5vZGVSdWxlTmFtZSA9IHByZW1pc2VOb25UZXJtaW5hbENoaWxkTm9kZS5nZXRSdWxlTmFtZSgpLFxuICAgICAgICAgICAgcHJlbWlzZU5vblRlcm1pbmFsQ2hpbGROb2RlUnVsZU5hbWVNZXRhdmFyaWFibGVSdWxlTmFtZSA9IChwcmVtaXNlTm9uVGVybWluYWxDaGlsZE5vZGVSdWxlTmFtZSA9PT0gTUVUQVZBUklBQkxFX1JVTEVfTkFNRSk7XG5cbiAgICAgIGlmIChwcmVtaXNlTm9uVGVybWluYWxDaGlsZE5vZGVSdWxlTmFtZU1ldGF2YXJpYWJsZVJ1bGVOYW1lKSB7XG4gICAgICAgIGNvbnN0IHByZW1pc2VNZXRhdmFyaWFibGVOb2RlID0gcHJlbWlzZU5vblRlcm1pbmFsQ2hpbGROb2RlLCAgLy8vXG4gICAgICAgICAgICAgIHByZW1pc2VNZXRhVmFyaWFibGVOb2RlTWF0Y2hlcyA9IG1hdGNoUHJlbWlzZU1ldGF2YXJpYWJsZU5vZGUocHJlbWlzZU1ldGF2YXJpYWJsZU5vZGUsIHN0YXRlbWVudE5vZGUsIHN1YnN0aXR1dGlvbnMpO1xuXG4gICAgICAgIHByZW1pc2VNZXRhc3RhdGVtZW50Tm9kZU1hdGNoZXMgPSBwcmVtaXNlTWV0YVZhcmlhYmxlTm9kZU1hdGNoZXM7IC8vL1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBwcmVtaXNlTWV0YXN0YXRlbWVudE5vZGVNYXRjaGVzO1xufVxuXG5mdW5jdGlvbiBtZXRhTWF0Y2hQcmVtaXNlTm9kZShwcmVtaXNlTm9kZSwgbm9kZSwgbWV0YVN1YnN0aXR1dGlvbnMpIHtcbiAgbGV0IHByZW1pc2VOb2RlTWF0Y2hlcyA9IGZhbHNlO1xuXG4gIGNvbnN0IG5vZGVUZXJtaW5hbE5vZGUgPSBub2RlLmlzVGVybWluYWxOb2RlKCksXG4gICAgICAgIHJ1bGVOb2RlVGVybWluYWxOb2RlID0gcHJlbWlzZU5vZGUuaXNUZXJtaW5hbE5vZGUoKTtcblxuICBpZiAobm9kZVRlcm1pbmFsTm9kZSA9PT0gcnVsZU5vZGVUZXJtaW5hbE5vZGUpIHtcbiAgICBpZiAobm9kZVRlcm1pbmFsTm9kZSkge1xuICAgICAgY29uc3QgdGVybWluYWxOb2RlID0gbm9kZSwgIC8vL1xuICAgICAgICAgICAgcHJlbWlzZVRlcm1pbmFsTm9kZSA9IHByZW1pc2VOb2RlLCAgLy8vXG4gICAgICAgICAgICBwcmVtaXNlVGVybWluYWxOb2RlTWF0Y2hlcyA9IG1ldGFNYXRjaFByZW1pc2VUZXJtaW5hbE5vZGUocHJlbWlzZVRlcm1pbmFsTm9kZSwgdGVybWluYWxOb2RlLCBtZXRhU3Vic3RpdHV0aW9ucyk7XG5cbiAgICAgIHByZW1pc2VOb2RlTWF0Y2hlcyA9IHByZW1pc2VUZXJtaW5hbE5vZGVNYXRjaGVzOyAgLy8vXG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IG5vblRlcm1pbmFsTm9kZSA9IG5vZGUsIC8vL1xuICAgICAgICAgICAgcHJlbWlzZU5vblRlcm1pbmFsTm9kZSA9IHByZW1pc2VOb2RlLCAgLy8vXG4gICAgICAgICAgICBwcmVtaXNlTm9uVGVybWluYWxOb2RlTWF0Y2hlcyA9IG1ldGFNYXRjaFByZW1pc2VOb25UZXJtaW5hbE5vZGUocHJlbWlzZU5vblRlcm1pbmFsTm9kZSwgbm9uVGVybWluYWxOb2RlLCBtZXRhU3Vic3RpdHV0aW9ucyk7XG5cbiAgICAgIHByZW1pc2VOb2RlTWF0Y2hlcyA9IHByZW1pc2VOb25UZXJtaW5hbE5vZGVNYXRjaGVzOyAvLy9cbiAgICB9XG4gIH1cblxuICByZXR1cm4gcHJlbWlzZU5vZGVNYXRjaGVzO1xufVxuXG5mdW5jdGlvbiBtZXRhTWF0Y2hQcmVtaXNlTm9kZXMocHJlbWlzZU5vZGVzLCBub2RlcywgbWV0YVN1YnN0aXR1dGlvbnMpIHtcbiAgbGV0IHByZW1pc2VOb2Rlc01hdGNoZXMgPSBmYWxzZTtcblxuICBjb25zdCBub2Rlc0xlbmd0aCA9IG5vZGVzLmxlbmd0aCxcbiAgICAgICAgcHJlbWlzZU5vZGVzTGVuZ3RoID0gcHJlbWlzZU5vZGVzLmxlbmd0aDtcblxuICBpZiAobm9kZXNMZW5ndGggPT09IHByZW1pc2VOb2Rlc0xlbmd0aCkge1xuICAgIHByZW1pc2VOb2Rlc01hdGNoZXMgPSBub2Rlcy5ldmVyeSgobm9kZSwgaW5kZXgpID0+IHtcbiAgICAgIGNvbnN0IHByZW1pc2VOb2RlID0gcHJlbWlzZU5vZGVzW2luZGV4XSxcbiAgICAgICAgICAgIHByZW1pc2VOb2RlTWF0Y2hlcyA9IG1ldGFNYXRjaFByZW1pc2VOb2RlKHByZW1pc2VOb2RlLCBub2RlLCBtZXRhU3Vic3RpdHV0aW9ucyk7XG5cbiAgICAgIGlmIChwcmVtaXNlTm9kZU1hdGNoZXMpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICByZXR1cm4gcHJlbWlzZU5vZGVzTWF0Y2hlcztcbn1cblxuZnVuY3Rpb24gbWV0YU1hdGNoUHJlbWlzZVRlcm1pbmFsTm9kZShwcmVtaXNlVGVybWluYWxOb2RlLCB0ZXJtaW5hbE5vZGUsIG1ldGFTdWJzdGl0dXRpb25zKSB7XG4gIGNvbnN0IG1hdGNoZXMgPSBwcmVtaXNlVGVybWluYWxOb2RlLm1hdGNoKHRlcm1pbmFsTm9kZSksXG4gICAgICAgIHByZW1pc2VUZXJtaW5hbE5vZGVNYXRjaGVzID0gbWF0Y2hlcztcblxuICByZXR1cm4gcHJlbWlzZVRlcm1pbmFsTm9kZU1hdGNoZXM7XG59XG5cbmZ1bmN0aW9uIG1ldGFNYXRjaFByZW1pc2VOb25UZXJtaW5hbE5vZGUocHJlbWlzZU5vblRlcm1pbmFsTm9kZSwgbm9uVGVybWluYWxOb2RlLCBtZXRhU3Vic3RpdHV0aW9ucykge1xuICBsZXQgcHJlbWlzZU5vblRlcm1pbmFsTm9kZU1hdGNoZXMgPSBmYWxzZTtcblxuICBjb25zdCBydWxlTmFtZSA9IG5vblRlcm1pbmFsTm9kZS5nZXRSdWxlTmFtZSgpLFxuICAgICAgICBjaGlsZE5vZGVzID0gbm9uVGVybWluYWxOb2RlLmdldENoaWxkTm9kZXMoKSxcbiAgICAgICAgcHJlbWlzZU5vblRlcm1pbmFsTm9kZVJ1bGVOYW1lID0gcHJlbWlzZU5vblRlcm1pbmFsTm9kZS5nZXRSdWxlTmFtZSgpLFxuICAgICAgICBwcmVtaXNlTm9uVGVybWluYWxOb2RlQ2hpbGROb2RlcyA9IHByZW1pc2VOb25UZXJtaW5hbE5vZGUuZ2V0Q2hpbGROb2RlcygpLFxuICAgICAgICBub2RlcyA9IGNoaWxkTm9kZXMsIC8vL1xuICAgICAgICBwcmVtaXNlTm9kZXMgPSBwcmVtaXNlTm9uVGVybWluYWxOb2RlQ2hpbGROb2RlcywgLy8vXG4gICAgICAgIHJ1bGVOYW1lTWV0YXN0YXRlbWVudFJ1bGVOYW1lID0gKHJ1bGVOYW1lID09PSBNRVRBU1RBVEVNRU5UX1JVTEVfTkFNRSksXG4gICAgICAgIHByZW1pc2VOb25UZXJtaW5hbE5vZGVSdWxlTmFtZU1ldGFzdGF0ZW1lbnRSdWxlTmFtZSA9IChwcmVtaXNlTm9uVGVybWluYWxOb2RlUnVsZU5hbWUgPT09IE1FVEFTVEFURU1FTlRfUlVMRV9OQU1FKTtcblxuICBpZiAocnVsZU5hbWVNZXRhc3RhdGVtZW50UnVsZU5hbWUgJiYgcHJlbWlzZU5vblRlcm1pbmFsTm9kZVJ1bGVOYW1lTWV0YXN0YXRlbWVudFJ1bGVOYW1lKSB7XG4gICAgY29uc3QgbWV0YXN0YXRlbWVudE5vZGUgPSBub25UZXJtaW5hbE5vZGUsICAvLy9cbiAgICAgICAgICBwcmVtaXNlTWV0YXN0YXRlbWVudE5vZGUgPSBwcmVtaXNlTm9uVGVybWluYWxOb2RlLCAgLy8vXG4gICAgICAgICAgcHJlbWlzZU1ldGFzdGF0ZW1lbnROb2RlTWF0Y2hlcyA9IG1ldGFNYXRjaFByZW1pc2VNZXRhc3RhdGVtZW50Tm9kZShwcmVtaXNlTWV0YXN0YXRlbWVudE5vZGUsIG1ldGFzdGF0ZW1lbnROb2RlLCBtZXRhU3Vic3RpdHV0aW9ucyk7XG5cbiAgICBpZiAocHJlbWlzZU1ldGFzdGF0ZW1lbnROb2RlTWF0Y2hlcykge1xuICAgICAgcHJlbWlzZU5vblRlcm1pbmFsTm9kZU1hdGNoZXMgPSB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBwcmVtaXNlTm9uVGVybWluYWxOb2RlQ2hpbGROb2Rlc01hdGNoZXMgPSBtZXRhTWF0Y2hQcmVtaXNlTm9kZXMocHJlbWlzZU5vZGVzLCBub2RlcywgbWV0YVN1YnN0aXR1dGlvbnMpO1xuXG4gICAgICBwcmVtaXNlTm9uVGVybWluYWxOb2RlTWF0Y2hlcyA9IHByZW1pc2VOb25UZXJtaW5hbE5vZGVDaGlsZE5vZGVzTWF0Y2hlczsgLy8vXG4gICAgfVxuICB9IGVsc2UgaWYgKHJ1bGVOYW1lID09PSBwcmVtaXNlTm9uVGVybWluYWxOb2RlUnVsZU5hbWUpIHtcbiAgICBjb25zdCBwcmVtaXNlTm9uVGVybWluYWxOb2RlQ2hpbGROb2Rlc01hdGNoZXMgPSBtZXRhTWF0Y2hQcmVtaXNlTm9kZXMocHJlbWlzZU5vZGVzLCBub2RlcywgbWV0YVN1YnN0aXR1dGlvbnMpO1xuXG4gICAgcHJlbWlzZU5vblRlcm1pbmFsTm9kZU1hdGNoZXMgPSBwcmVtaXNlTm9uVGVybWluYWxOb2RlQ2hpbGROb2Rlc01hdGNoZXM7IC8vL1xuICB9XG5cbiAgcmV0dXJuIHByZW1pc2VOb25UZXJtaW5hbE5vZGVNYXRjaGVzO1xufVxuXG5mdW5jdGlvbiBtZXRhTWF0Y2hQcmVtaXNlTWV0YXZhcmlhYmxlTm9kZShwcmVtaXNlTWV0YXZhcmlhYmxlTm9kZSwgbWV0YXN0YXRlbWVudE5vZGUsIG1ldGFTdWJzdGl0dXRpb25zKSB7XG4gIGxldCBwcmVtaXNlTWV0YXZhcmlhYmxlTm9kZU1hdGNoZXM7XG5cbiAgY29uc3QgcHJlbWlzZU1ldGF2YXJpYWJsZU5hbWUgPSBtZXRhdmFyaWFibGVOYW1lRnJvbU1ldGF2YXJpYWJsZU5vZGUocHJlbWlzZU1ldGF2YXJpYWJsZU5vZGUpLFxuICAgICAgICBtZXRhU3Vic3RpdHV0aW9uID0gbWV0YVN1YnN0aXR1dGlvbnMuZmluZCgobWV0YVN1YnN0aXR1dGlvbikgPT4ge1xuICAgICAgICAgIGNvbnN0IG1ldGF2YXJpYWJsZU5hbWUgPSBtZXRhU3Vic3RpdHV0aW9uLmdldE1ldGF2YXJpYWJsZU5hbWUoKTtcblxuICAgICAgICAgIGlmIChtZXRhdmFyaWFibGVOYW1lID09PSBwcmVtaXNlTWV0YXZhcmlhYmxlTmFtZSkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9KSB8fCBudWxsO1xuXG4gIGlmIChtZXRhU3Vic3RpdHV0aW9uICE9PSBudWxsKSB7XG4gICAgY29uc3QgbWV0YVN1YnN0aXR1dGlvbk5vZGVzTWF0Y2ggPSBtZXRhU3Vic3RpdHV0aW9uLm1hdGNoTWV0YXN0YXRlbWVudE5vZGUobWV0YXN0YXRlbWVudE5vZGUpO1xuXG4gICAgcHJlbWlzZU1ldGF2YXJpYWJsZU5vZGVNYXRjaGVzID0gbWV0YVN1YnN0aXR1dGlvbk5vZGVzTWF0Y2g7ICAvLy9cbiAgfSBlbHNlIHtcbiAgICBjb25zdCBtZXRhdmFyaWFibGVOYW1lID0gcHJlbWlzZU1ldGF2YXJpYWJsZU5hbWUsIC8vL1xuICAgICAgICAgIG1ldGFTdWJzdGl0dXRpb24gPSBNZXRhU3Vic3RpdHV0aW9uLmZyb21NZXRhdmFyaWFibGVOYW1lQW5kTWV0YXN0YXRlbWVudE5vZGUobWV0YXZhcmlhYmxlTmFtZSwgbWV0YXN0YXRlbWVudE5vZGUpO1xuXG4gICAgbWV0YVN1YnN0aXR1dGlvbnMucHVzaChtZXRhU3Vic3RpdHV0aW9uKTtcblxuICAgIHByZW1pc2VNZXRhdmFyaWFibGVOb2RlTWF0Y2hlcyA9IHRydWU7XG4gIH1cblxuICByZXR1cm4gcHJlbWlzZU1ldGF2YXJpYWJsZU5vZGVNYXRjaGVzO1xufVxuXG5mdW5jdGlvbiBtZXRhTWF0Y2hQcmVtaXNlTWV0YXN0YXRlbWVudE5vZGUocHJlbWlzZU1ldGFzdGF0ZW1lbnROb2RlLCBtZXRhc3RhdGVtZW50Tm9kZSwgbWV0YVN1YnN0aXR1dGlvbnMpIHtcbiAgbGV0IHByZW1pc2VNZXRhc3RhdGVtZW50Tm9kZU1hdGNoZXMgPSBmYWxzZTtcblxuICBjb25zdCBwcmVtaXNlTm9uVGVybWluYWxOb2RlID0gcHJlbWlzZU1ldGFzdGF0ZW1lbnROb2RlLCAgLy8vXG4gICAgICAgIHByZW1pc2VOb25UZXJtaW5hbE5vZGVDaGlsZE5vZGVzID0gcHJlbWlzZU5vblRlcm1pbmFsTm9kZS5nZXRDaGlsZE5vZGVzKCksXG4gICAgICAgIHByZW1pc2VOb25UZXJtaW5hbE5vZGVDaGlsZE5vZGVzTGVuZ3RoID0gcHJlbWlzZU5vblRlcm1pbmFsTm9kZUNoaWxkTm9kZXMubGVuZ3RoO1xuXG4gIGlmIChwcmVtaXNlTm9uVGVybWluYWxOb2RlQ2hpbGROb2Rlc0xlbmd0aCA9PT0gMSkge1xuICAgIGNvbnN0IGZpcnN0UHJlbWlzZUNoaWxkTm9kZSA9IGZpcnN0KHByZW1pc2VOb25UZXJtaW5hbE5vZGVDaGlsZE5vZGVzKSxcbiAgICAgICAgICBwcmVtaXNlQ2hpbGROb2RlID0gZmlyc3RQcmVtaXNlQ2hpbGROb2RlLCAgLy8vXG4gICAgICAgICAgcHJlbWlzZUNoaWxkTm9kZU5vblRlcm1pbmFsTm9kZSA9IHByZW1pc2VDaGlsZE5vZGUuaXNOb25UZXJtaW5hbE5vZGUoKTtcblxuICAgIGlmIChwcmVtaXNlQ2hpbGROb2RlTm9uVGVybWluYWxOb2RlKSB7XG4gICAgICBjb25zdCBwcmVtaXNlTm9uVGVybWluYWxDaGlsZE5vZGUgPSBwcmVtaXNlQ2hpbGROb2RlLCAgLy8vXG4gICAgICAgICAgICBwcmVtaXNlTm9uVGVybWluYWxDaGlsZE5vZGVSdWxlTmFtZSA9IHByZW1pc2VOb25UZXJtaW5hbENoaWxkTm9kZS5nZXRSdWxlTmFtZSgpLFxuICAgICAgICAgICAgcHJlbWlzZU5vblRlcm1pbmFsQ2hpbGROb2RlUnVsZU5hbWVNZXRhdmFyaWFibGVSdWxlTmFtZSA9IChwcmVtaXNlTm9uVGVybWluYWxDaGlsZE5vZGVSdWxlTmFtZSA9PT0gTUVUQVZBUklBQkxFX1JVTEVfTkFNRSk7XG5cbiAgICAgIGlmIChwcmVtaXNlTm9uVGVybWluYWxDaGlsZE5vZGVSdWxlTmFtZU1ldGF2YXJpYWJsZVJ1bGVOYW1lKSB7XG4gICAgICAgIGNvbnN0IHByZW1pc2VNZXRhdmFyaWFibGVOb2RlID0gcHJlbWlzZU5vblRlcm1pbmFsQ2hpbGROb2RlLCAgLy8vXG4gICAgICAgICAgICAgIHByZW1pc2VNZXRhVmFyaWFibGVOb2RlTWF0Y2hlcyA9IG1ldGFNYXRjaFByZW1pc2VNZXRhdmFyaWFibGVOb2RlKHByZW1pc2VNZXRhdmFyaWFibGVOb2RlLCBtZXRhc3RhdGVtZW50Tm9kZSwgbWV0YVN1YnN0aXR1dGlvbnMpO1xuXG4gICAgICAgIHByZW1pc2VNZXRhc3RhdGVtZW50Tm9kZU1hdGNoZXMgPSBwcmVtaXNlTWV0YVZhcmlhYmxlTm9kZU1hdGNoZXM7IC8vL1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBwcmVtaXNlTWV0YXN0YXRlbWVudE5vZGVNYXRjaGVzO1xufVxuIl0sIm5hbWVzIjpbIlByZW1pc2UiLCJtZXRhc3RhdGVtZW50Tm9kZXNRdWVyeSIsIm5vZGVzUXVlcnkiLCJydWxlU3VicHJvb2ZBc3NlcnRpb25Ob2RlUXVlcnkiLCJub2RlUXVlcnkiLCJwcmVtaXNlTWV0YXN0YXRlbWVudE5vZGVzUXVlcnkiLCJzdWJEZXJpdmF0aW9uU3RhdGVtZW50Tm9kZVF1ZXJ5Iiwic3VwcG9zaXRpb25TdGF0ZW1lbnRTdGF0ZW1lbnROb2Rlc1F1ZXJ5IiwicnVsZVN1YkRlcml2YXRpb25NZXRhc3RhdGVtZW50Tm9kZVF1ZXJ5IiwibWV0YXN0YXRlbWVudE5vZGUiLCJnZXRNZXRhc3RhdGVtZW50Tm9kZSIsIm1hdGNoU3VicHJvb2ZOb2RlIiwic3VicHJvb2ZOb2RlIiwic3Vic3RpdHV0aW9ucyIsInN1YnByb29mTm9kZU1hdGNoZXMiLCJzdWJwcm9vZkFzc2VydGlvbk5vZGUiLCJzdWJEZXJpdmF0aW9uU3RhdGVtZW50Tm9kZSIsInN1cHBvc2l0aW9uU3RhdGVtZW50U3RhdGVtZW50Tm9kZXMiLCJydWxlU3VicHJvb2ZBc3NlcnRpb25NZXRhc3RhdGVtZW50Tm9kZXMiLCJzdGF0ZW1lbnROb2RlcyIsInN0YXRlbWVudE5vZGVzTGVuZ3RoIiwibGVuZ3RoIiwicnVsZVN1YnByb29mQXNzZXJ0aW9uTWV0YXN0YXRlbWVudE5vZGVzTGVuZ3RoIiwiZXZlcnkiLCJydWxlU3VicHJvb2ZBc3NlcnRpb25NZXRhc3RhdGVtZW50Tm9kZSIsImluZGV4Iiwic3RhdGVtZW50Tm9kZSIsIm5vblRlcm1pbmFsTm9kZSIsInByZW1pc2VOb25UZXJtaW5hbE5vZGUiLCJwcmVtaXNlTm9uVGVybWluYWxOb2RlTWF0Y2hlcyIsIm1hdGNoUHJlbWlzZU5vblRlcm1pbmFsTm9kZSIsIm1hdGNoU3RhdGVtZW50Tm9kZSIsInN0YXRlbWVudE5vZGVNYXRjaGVzIiwibWF0Y2hSdWxlU3VicHJvb2ZOb2RlIiwicnVsZVN1YnByb29mTm9kZSIsIm1ldGFTdWJzdGl0dXRpb25zIiwicnVsZVN1YnByb29mTm9kZU1hdGNoZXMiLCJydWxlU3VicHJvb2ZBc3NlcnRpb25Ob2RlIiwicHJlbWlzZU1ldGFzdGF0ZW1lbnROb2RlcyIsInJ1bGVTdWJEZXJpdmF0aW9uTWV0YXN0YXRlbWVudE5vZGUiLCJtZXRhc3RhdGVtZW50Tm9kZXMiLCJtZXRhc3RhdGVtZW50Tm9kZXNMZW5ndGgiLCJtZXRhTWF0Y2hQcmVtaXNlTm9uVGVybWluYWxOb2RlIiwibWF0Y2hNZXRhc3RhdGVtZW50Tm9kZSIsIm1ldGFzdGF0ZW1lbnROb2RlTWF0Y2hlcyIsInRvSlNPTiIsIm1ldGFzdGF0ZW1lbnRTdHJpbmciLCJub2RlQXNTdHJpbmciLCJtZXRhc3RhdGVtZW50IiwianNvbiIsImZyb21KU09OIiwicmVsZWFzZUNvbnRleHQiLCJtZXRhc3RhdGVtZW50Tm9kZUZyb21NZXRhc3RhdGVtZW50U3RyaW5nIiwicHJlbWlzZSIsImZyb21NZXRhc3RhdGVtZW50Tm9kZSIsIm1hdGNoUHJlbWlzZU5vZGUiLCJwcmVtaXNlTm9kZSIsIm5vZGUiLCJwcmVtaXNlTm9kZU1hdGNoZXMiLCJub2RlVGVybWluYWxOb2RlIiwiaXNUZXJtaW5hbE5vZGUiLCJydWxlTm9kZVRlcm1pbmFsTm9kZSIsInRlcm1pbmFsTm9kZSIsInByZW1pc2VUZXJtaW5hbE5vZGUiLCJwcmVtaXNlVGVybWluYWxOb2RlTWF0Y2hlcyIsIm1hdGNoUHJlbWlzZVRlcm1pbmFsTm9kZSIsIm1hdGNoUHJlbWlzZU5vZGVzIiwicHJlbWlzZU5vZGVzIiwibm9kZXMiLCJwcmVtaXNlTm9kZXNNYXRjaGVzIiwibm9kZXNMZW5ndGgiLCJwcmVtaXNlTm9kZXNMZW5ndGgiLCJtYXRjaGVzIiwibWF0Y2giLCJydWxlTmFtZSIsImdldFJ1bGVOYW1lIiwiY2hpbGROb2RlcyIsImdldENoaWxkTm9kZXMiLCJwcmVtaXNlTm9uVGVybWluYWxOb2RlUnVsZU5hbWUiLCJwcmVtaXNlTm9uVGVybWluYWxOb2RlQ2hpbGROb2RlcyIsInJ1bGVOYW1lU3RhdGVtZW50UnVsZU5hbWUiLCJTVEFURU1FTlRfUlVMRV9OQU1FIiwicHJlbWlzZU5vblRlcm1pbmFsTm9kZVJ1bGVOYW1lTWV0YXN0YXRlbWVudFJ1bGVOYW1lIiwiTUVUQVNUQVRFTUVOVF9SVUxFX05BTUUiLCJwcmVtaXNlTWV0YXN0YXRlbWVudE5vZGUiLCJwcmVtaXNlTWV0YXN0YXRlbWVudE5vZGVNYXRjaGVzIiwibWF0Y2hQcmVtaXNlTWV0YXN0YXRlbWVudE5vZGUiLCJwcmVtaXNlTm9uVGVybWluYWxOb2RlQ2hpbGROb2Rlc01hdGNoZXMiLCJtYXRjaFByZW1pc2VNZXRhdmFyaWFibGVOb2RlIiwicHJlbWlzZU1ldGF2YXJpYWJsZU5vZGUiLCJwcmVtaXNlTWV0YXZhcmlhYmxlTm9kZU1hdGNoZXMiLCJwcmVtaXNlTWV0YXZhcmlhYmxlTmFtZSIsIm1ldGF2YXJpYWJsZU5hbWVGcm9tTWV0YXZhcmlhYmxlTm9kZSIsInN1YnN0aXR1dGlvbiIsImZpbmQiLCJtZXRhdmFyaWFibGVOYW1lIiwiZ2V0TWV0YXZhcmlhYmxlTmFtZSIsInN1YnN0aXR1dGlvbk5vZGVzTWF0Y2giLCJTdWJzdGl0dXRpb24iLCJmcm9tTWV0YXZhcmlhYmxlTmFtZUFuZFN0YXRlbWVudE5vZGUiLCJwdXNoIiwicHJlbWlzZU5vblRlcm1pbmFsTm9kZUNoaWxkTm9kZXNMZW5ndGgiLCJmaXJzdFByZW1pc2VDaGlsZE5vZGUiLCJmaXJzdCIsInByZW1pc2VDaGlsZE5vZGUiLCJwcmVtaXNlQ2hpbGROb2RlTm9uVGVybWluYWxOb2RlIiwiaXNOb25UZXJtaW5hbE5vZGUiLCJwcmVtaXNlTm9uVGVybWluYWxDaGlsZE5vZGUiLCJwcmVtaXNlTm9uVGVybWluYWxDaGlsZE5vZGVSdWxlTmFtZSIsInByZW1pc2VOb25UZXJtaW5hbENoaWxkTm9kZVJ1bGVOYW1lTWV0YXZhcmlhYmxlUnVsZU5hbWUiLCJNRVRBVkFSSUFCTEVfUlVMRV9OQU1FIiwicHJlbWlzZU1ldGFWYXJpYWJsZU5vZGVNYXRjaGVzIiwibWV0YU1hdGNoUHJlbWlzZU5vZGUiLCJtZXRhTWF0Y2hQcmVtaXNlVGVybWluYWxOb2RlIiwibWV0YU1hdGNoUHJlbWlzZU5vZGVzIiwicnVsZU5hbWVNZXRhc3RhdGVtZW50UnVsZU5hbWUiLCJtZXRhTWF0Y2hQcmVtaXNlTWV0YXN0YXRlbWVudE5vZGUiLCJtZXRhTWF0Y2hQcmVtaXNlTWV0YXZhcmlhYmxlTm9kZSIsIm1ldGFTdWJzdGl0dXRpb24iLCJtZXRhU3Vic3RpdHV0aW9uTm9kZXNNYXRjaCIsIk1ldGFTdWJzdGl0dXRpb24iLCJmcm9tTWV0YXZhcmlhYmxlTmFtZUFuZE1ldGFzdGF0ZW1lbnROb2RlIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQW1CcUJBOzs7aUVBakJJO3FFQUNJO3FCQUVQO3NCQUNPO3FCQUNTO3lCQUcrQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFckYsSUFBTUMsMEJBQTBCQyxJQUFBQSxpQkFBVSxFQUFDLHlDQUNyQ0MsaUNBQWlDQyxJQUFBQSxnQkFBUyxFQUFDLDBDQUMzQ0MsaUNBQWlDSCxJQUFBQSxpQkFBVSxFQUFDLG1FQUM1Q0ksa0NBQWtDRixJQUFBQSxnQkFBUyxFQUFDLG1GQUM1Q0csMENBQTBDTCxJQUFBQSxpQkFBVSxFQUFDLDJEQUNyRE0sMENBQTBDSixJQUFBQSxnQkFBUyxFQUFDO0FBRTNDLElBQUEsQUFBTUosd0JBdUhsQixBQXZIWTthQUFNQSxRQUNQUyxpQkFBaUI7OEJB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