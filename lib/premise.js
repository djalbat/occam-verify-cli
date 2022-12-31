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
var metastatementNodesQuery = (0, _query.nodesQuery)("/metaSubproofAssertion/metastatement"), metaSubproofAssertionNodeQuery = (0, _query.nodeQuery)("/metastatement/metaSubproofAssertion!"), unqualifiedMetastatementMetastatementNodesQuery = (0, _query.nodesQuery)("/metaSubproof/unqualifiedMetastatement/metastatement!"), qualifiedOrUnqualifiedMetastatementMetastatementNodeQuery = (0, _query.nodeQuery)("/metaSubproof/metaDerivation|abridgedMetaDerivation/qualifiedMetastatement|unqualifiedMetastatement[-1]/metastatement!");
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
                            var metastatementNode = metastatementNodes[index], nonTerminalNode = metastatementNode, premiseNonTerminalNode = metaSubproofAssertionMetastatementNode, premiseNonTerminalNodeMatches = matchPremiseNonTerminalNode(premiseNonTerminalNode, nonTerminalNode, metaSubstitutions);
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
                var nonTerminalNode = metastatementNode, premiseNonTerminalNode = this.metastatementNode, premiseNonTerminalNodeMatches = matchPremiseNonTerminalNode(premiseNonTerminalNode, nonTerminalNode, metaSubstitutions), metastatementNodeMatches = premiseNonTerminalNodeMatches; ///
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
function matchPremiseNode(premiseNode, node, metaSubstitutions) {
    var premiseNodeMatches = false;
    var nodeTerminalNode = node.isTerminalNode(), ruleNodeTerminalNode = premiseNode.isTerminalNode();
    if (nodeTerminalNode === ruleNodeTerminalNode) {
        if (nodeTerminalNode) {
            var terminalNode = node, premiseTerminalNode = premiseNode, premiseTerminalNodeMatches = matchPremiseTerminalNode(premiseTerminalNode, terminalNode, metaSubstitutions);
            premiseNodeMatches = premiseTerminalNodeMatches; ///
        } else {
            var nonTerminalNode = node, premiseNonTerminalNode = premiseNode, premiseNonTerminalNodeMatches = matchPremiseNonTerminalNode(premiseNonTerminalNode, nonTerminalNode, metaSubstitutions);
            premiseNodeMatches = premiseNonTerminalNodeMatches; ///
        }
    }
    return premiseNodeMatches;
}
function matchPremiseNodes(premiseNodes, nodes, metaSubstitutions) {
    var premiseNodesMatches = false;
    var nodesLength = nodes.length, premiseNodesLength = premiseNodes.length;
    if (nodesLength === premiseNodesLength) {
        premiseNodesMatches = nodes.every(function(node, index) {
            var premiseNode = premiseNodes[index], premiseNodeMatches = matchPremiseNode(premiseNode, node, metaSubstitutions);
            if (premiseNodeMatches) {
                return true;
            }
        });
    }
    return premiseNodesMatches;
}
function matchPremiseMetavariable(premiseMetavariableNode, nodes, metaSubstitutions) {
    var premiseMetavariableMatches;
    var premiseMetavariableName = (0, _query.metavariableNameFromMetavariableNode)(premiseMetavariableNode), metaSubstitution = metaSubstitutions.find(function(metaSubstitution) {
        var metavariableName = metaSubstitution.getMetavariableName();
        if (metavariableName === premiseMetavariableName) {
            return true;
        }
    }) || null;
    if (metaSubstitution !== null) {
        var metaSubstitutionNodesMatch = metaSubstitution.matchNodes(nodes);
        premiseMetavariableMatches = metaSubstitutionNodesMatch; ///
    } else {
        var metavariableName = premiseMetavariableName, metaSubstitution1 = _metaSubstitution.default.fromMetavariableNameAndNodes(metavariableName, nodes);
        metaSubstitutions.push(metaSubstitution1);
        premiseMetavariableMatches = true;
    }
    return premiseMetavariableMatches;
}
function matchPremiseTerminalNode(premiseTerminalNode, terminalNode, metaSubstitutions) {
    var matches = premiseTerminalNode.match(terminalNode), premiseTerminalNodeMatches = matches;
    return premiseTerminalNodeMatches;
}
function matchPremiseNonTerminalNode(premiseNonTerminalNode, nonTerminalNode, metaSubstitutions) {
    var premiseNonTerminalNodeMatches = false;
    var ruleName = nonTerminalNode.getRuleName(), premiseRuleName = premiseNonTerminalNode.getRuleName(); ///
    if (ruleName === premiseRuleName) {
        var childNodes = nonTerminalNode.getChildNodes(), premiseChildNodes = premiseNonTerminalNode.getChildNodes(), nodes = childNodes, premiseNodes = premiseChildNodes, premiseChildNodesMatches = matchPremiseNodes(premiseNodes, nodes, metaSubstitutions);
        premiseNonTerminalNodeMatches = premiseChildNodesMatches; ///
        if (!premiseNonTerminalNodeMatches) {
            var ruleNameMetastatementRuleName = ruleName === _ruleNames.METASTATEMENT_RULE_NAME;
            if (ruleNameMetastatementRuleName) {
                var metastatementNode = nonTerminalNode, premiseMetastatementNode = premiseNonTerminalNode, premiseMetastatementNodeMatches = matchPremiseMetastatementNode(premiseMetastatementNode, metastatementNode, metaSubstitutions);
                premiseNonTerminalNodeMatches = premiseMetastatementNodeMatches; ///
            }
        }
    }
    return premiseNonTerminalNodeMatches;
}
function matchPremiseMetastatementNode(premiseMetastatementNode, metastatementNode, metaSubstitutions) {
    var premiseMetastatementNodeMatches = false;
    var premiseNonTerminalNode = premiseMetastatementNode, premiseChildNodes = premiseNonTerminalNode.getChildNodes(), premiseChildNodesLength = premiseChildNodes.length;
    if (premiseChildNodesLength === 1) {
        var firstPremiseChildNode = (0, _array.first)(premiseChildNodes), premiseChildNode = firstPremiseChildNode, premiseChildNodeNonTerminalNode = premiseChildNode.isNonTerminalNode();
        if (premiseChildNodeNonTerminalNode) {
            var premiseNonTerminalChildNode = premiseChildNode, premiseNonTerminalChildNodeRuleName = premiseNonTerminalChildNode.getRuleName(), premiseNonTerminalChildNodeRuleNameMetavariableRuleName = premiseNonTerminalChildNodeRuleName === _ruleNames.METAVARIABLE_RULE_NAME;
            if (premiseNonTerminalChildNodeRuleNameMetavariableRuleName) {
                var premiseMetavariableNode = premiseNonTerminalChildNode, nonTerminalNode = metastatementNode, childNodes = nonTerminalNode.getChildNodes(), nodes = childNodes, premiseMetaVariableMatches = matchPremiseMetavariable(premiseMetavariableNode, nodes, metaSubstitutions);
                premiseMetastatementNodeMatches = premiseMetaVariableMatches; ///
            }
        }
    }
    return premiseMetastatementNodeMatches;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9wcmVtaXNlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgTWV0YVN1YnN0aXR1dGlvbiBmcm9tIFwiLi9tZXRhU3Vic3RpdHV0aW9uXCI7XG5cbmltcG9ydCB7IGZpcnN0IH0gZnJvbSBcIi4vdXRpbGl0aWVzL2FycmF5XCI7XG5pbXBvcnQgeyBub2RlQXNTdHJpbmcgfSBmcm9tIFwiLi91dGlsaXRpZXMvc3RyaW5nXCI7XG5pbXBvcnQgeyBub2RlUXVlcnksIG5vZGVzUXVlcnkgfSBmcm9tIFwiLi91dGlsaXRpZXMvcXVlcnlcIjtcbmltcG9ydCB7IG1ldGF2YXJpYWJsZU5hbWVGcm9tTWV0YXZhcmlhYmxlTm9kZSB9IGZyb20gXCIuL3V0aWxpdGllcy9xdWVyeVwiO1xuaW1wb3J0IHsgbWV0YXN0YXRlbWVudE5vZGVGcm9tTWV0YXN0YXRlbWVudFN0cmluZyB9IGZyb20gXCIuL3V0aWxpdGllcy9zdHJpbmdcIjtcbmltcG9ydCB7IE1FVEFWQVJJQUJMRV9SVUxFX05BTUUsIE1FVEFTVEFURU1FTlRfUlVMRV9OQU1FIH0gZnJvbSBcIi4vcnVsZU5hbWVzXCI7XG5cbmNvbnN0IG1ldGFzdGF0ZW1lbnROb2Rlc1F1ZXJ5ID0gbm9kZXNRdWVyeShcIi9tZXRhU3VicHJvb2ZBc3NlcnRpb24vbWV0YXN0YXRlbWVudFwiKSxcbiAgICAgIG1ldGFTdWJwcm9vZkFzc2VydGlvbk5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9tZXRhc3RhdGVtZW50L21ldGFTdWJwcm9vZkFzc2VydGlvbiFcIiksXG4gICAgICB1bnF1YWxpZmllZE1ldGFzdGF0ZW1lbnRNZXRhc3RhdGVtZW50Tm9kZXNRdWVyeSA9IG5vZGVzUXVlcnkoXCIvbWV0YVN1YnByb29mL3VucXVhbGlmaWVkTWV0YXN0YXRlbWVudC9tZXRhc3RhdGVtZW50IVwiKSxcbiAgICAgIHF1YWxpZmllZE9yVW5xdWFsaWZpZWRNZXRhc3RhdGVtZW50TWV0YXN0YXRlbWVudE5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9tZXRhU3VicHJvb2YvbWV0YURlcml2YXRpb258YWJyaWRnZWRNZXRhRGVyaXZhdGlvbi9xdWFsaWZpZWRNZXRhc3RhdGVtZW50fHVucXVhbGlmaWVkTWV0YXN0YXRlbWVudFstMV0vbWV0YXN0YXRlbWVudCFcIik7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFByZW1pc2Uge1xuICBjb25zdHJ1Y3RvcihtZXRhc3RhdGVtZW50Tm9kZSkge1xuICAgIHRoaXMubWV0YXN0YXRlbWVudE5vZGUgPSBtZXRhc3RhdGVtZW50Tm9kZTtcbiAgfVxuXG4gIGdldE1ldGFzdGF0ZW1lbnROb2RlKCkge1xuICAgIHJldHVybiB0aGlzLm1ldGFzdGF0ZW1lbnROb2RlO1xuICB9XG5cbiAgbWF0Y2hNZXRhU3VicHJvb2ZOb2RlKG1ldGFTdWJwcm9vZk5vZGUsIG1ldGFTdWJzdGl0dXRpb25zKSB7XG4gICAgbGV0IG1ldGFTdWJwcm9vZk5vZGVNYXRjaGVzID0gZmFsc2U7XG5cbiAgICBjb25zdCBtZXRhU3VicHJvb2ZBc3NlcnRpb25Ob2RlID0gbWV0YVN1YnByb29mQXNzZXJ0aW9uTm9kZVF1ZXJ5KHRoaXMubWV0YXN0YXRlbWVudE5vZGUpO1xuXG4gICAgaWYgKG1ldGFTdWJwcm9vZkFzc2VydGlvbk5vZGUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IG1ldGFTdWJwcm9vZkFzc2VydGlvbk1ldGFzdGF0ZW1lbnROb2RlcyA9IG1ldGFzdGF0ZW1lbnROb2Rlc1F1ZXJ5KG1ldGFTdWJwcm9vZkFzc2VydGlvbk5vZGUpLFxuICAgICAgICAgICAgdW5xdWFsaWZpZWRNZXRhc3RhdGVtZW50TWV0YXN0YXRlbWVudE5vZGVzID0gdW5xdWFsaWZpZWRNZXRhc3RhdGVtZW50TWV0YXN0YXRlbWVudE5vZGVzUXVlcnkobWV0YVN1YnByb29mTm9kZSksXG4gICAgICAgICAgICBxdWFsaWZpZWRPclVucXVhbGlmaWVkTWV0YXN0YXRlbWVudE1ldGFzdGF0ZW1lbnROb2RlID0gcXVhbGlmaWVkT3JVbnF1YWxpZmllZE1ldGFzdGF0ZW1lbnRNZXRhc3RhdGVtZW50Tm9kZVF1ZXJ5KG1ldGFTdWJwcm9vZk5vZGUpLFxuICAgICAgICAgICAgbWV0YXN0YXRlbWVudE5vZGVzID0gW1xuICAgICAgICAgICAgICAuLi51bnF1YWxpZmllZE1ldGFzdGF0ZW1lbnRNZXRhc3RhdGVtZW50Tm9kZXMsXG4gICAgICAgICAgICAgIHF1YWxpZmllZE9yVW5xdWFsaWZpZWRNZXRhc3RhdGVtZW50TWV0YXN0YXRlbWVudE5vZGVcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBtZXRhc3RhdGVtZW50Tm9kZXNMZW5ndGggPSBtZXRhc3RhdGVtZW50Tm9kZXMubGVuZ3RoLFxuICAgICAgICAgICAgbWV0YVN1YnByb29mQXNzZXJ0aW9uTWV0YXN0YXRlbWVudE5vZGVzTGVuZ3RoID0gbWV0YVN1YnByb29mQXNzZXJ0aW9uTWV0YXN0YXRlbWVudE5vZGVzLmxlbmd0aDtcblxuICAgICAgaWYgKG1ldGFzdGF0ZW1lbnROb2Rlc0xlbmd0aCA9PT0gbWV0YVN1YnByb29mQXNzZXJ0aW9uTWV0YXN0YXRlbWVudE5vZGVzTGVuZ3RoKSB7XG4gICAgICAgIG1ldGFTdWJwcm9vZk5vZGVNYXRjaGVzID0gbWV0YVN1YnByb29mQXNzZXJ0aW9uTWV0YXN0YXRlbWVudE5vZGVzLmV2ZXJ5KChtZXRhU3VicHJvb2ZBc3NlcnRpb25NZXRhc3RhdGVtZW50Tm9kZSwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG1ldGFzdGF0ZW1lbnROb2RlID0gbWV0YXN0YXRlbWVudE5vZGVzW2luZGV4XSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vblRlcm1pbmFsTm9kZSA9IG1ldGFzdGF0ZW1lbnROb2RlLCAvLy9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByZW1pc2VOb25UZXJtaW5hbE5vZGUgPSBtZXRhU3VicHJvb2ZBc3NlcnRpb25NZXRhc3RhdGVtZW50Tm9kZSwgIC8vL1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJlbWlzZU5vblRlcm1pbmFsTm9kZU1hdGNoZXMgPSBtYXRjaFByZW1pc2VOb25UZXJtaW5hbE5vZGUocHJlbWlzZU5vblRlcm1pbmFsTm9kZSwgbm9uVGVybWluYWxOb2RlLCBtZXRhU3Vic3RpdHV0aW9ucyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwcmVtaXNlTm9uVGVybWluYWxOb2RlTWF0Y2hlcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbWV0YVN1YnByb29mTm9kZU1hdGNoZXM7XG4gIH1cblxuICBtYXRjaE1ldGFzdGF0ZW1lbnROb2RlKG1ldGFzdGF0ZW1lbnROb2RlLCBtZXRhU3Vic3RpdHV0aW9ucykge1xuICAgIGNvbnN0IG5vblRlcm1pbmFsTm9kZSA9IG1ldGFzdGF0ZW1lbnROb2RlLCAgLy8vXG4gICAgICAgICAgcHJlbWlzZU5vblRlcm1pbmFsTm9kZSA9IHRoaXMubWV0YXN0YXRlbWVudE5vZGUsICAvLy9cbiAgICAgICAgICBwcmVtaXNlTm9uVGVybWluYWxOb2RlTWF0Y2hlcyA9IG1hdGNoUHJlbWlzZU5vblRlcm1pbmFsTm9kZShwcmVtaXNlTm9uVGVybWluYWxOb2RlLCBub25UZXJtaW5hbE5vZGUsIG1ldGFTdWJzdGl0dXRpb25zKSxcbiAgICAgICAgICBtZXRhc3RhdGVtZW50Tm9kZU1hdGNoZXMgPSBwcmVtaXNlTm9uVGVybWluYWxOb2RlTWF0Y2hlczsgLy8vXG5cbiAgICByZXR1cm4gbWV0YXN0YXRlbWVudE5vZGVNYXRjaGVzO1xuICB9XG5cbiAgdG9KU09OKCkge1xuICAgIGNvbnN0IG1ldGFzdGF0ZW1lbnRTdHJpbmcgPSBub2RlQXNTdHJpbmcodGhpcy5tZXRhc3RhdGVtZW50Tm9kZSksXG4gICAgICAgICAgbWV0YXN0YXRlbWVudCA9IG1ldGFzdGF0ZW1lbnRTdHJpbmcsIC8vL1xuICAgICAgICAgIGpzb24gPSB7XG4gICAgICAgICAgICBtZXRhc3RhdGVtZW50XG4gICAgICAgICAgfTtcblxuICAgIHJldHVybiBqc29uO1xuICB9XG5cbiAgc3RhdGljIGZyb21KU09OKGpzb24sIHJlbGVhc2VDb250ZXh0KSB7XG4gICAgY29uc3QgeyBtZXRhc3RhdGVtZW50IH0gPSBqc29uLFxuICAgICAgICAgIG1ldGFzdGF0ZW1lbnRTdHJpbmcgPSBtZXRhc3RhdGVtZW50LCAgLy8vXG4gICAgICAgICAgbWV0YXN0YXRlbWVudE5vZGUgPSBtZXRhc3RhdGVtZW50Tm9kZUZyb21NZXRhc3RhdGVtZW50U3RyaW5nKG1ldGFzdGF0ZW1lbnRTdHJpbmcsIHJlbGVhc2VDb250ZXh0KSxcbiAgICAgICAgICBwcmVtaXNlID0gbmV3IFByZW1pc2UobWV0YXN0YXRlbWVudE5vZGUpO1xuXG4gICAgcmV0dXJuIHByZW1pc2U7XG4gIH1cblxuICBzdGF0aWMgZnJvbU1ldGFzdGF0ZW1lbnROb2RlKG1ldGFzdGF0ZW1lbnROb2RlKSB7XG4gICAgY29uc3QgcHJlbWlzZSA9IG5ldyBQcmVtaXNlKG1ldGFzdGF0ZW1lbnROb2RlKTtcblxuICAgIHJldHVybiBwcmVtaXNlO1xuICB9XG59XG5cbmZ1bmN0aW9uIG1hdGNoUHJlbWlzZU5vZGUocHJlbWlzZU5vZGUsIG5vZGUsIG1ldGFTdWJzdGl0dXRpb25zKSB7XG4gIGxldCBwcmVtaXNlTm9kZU1hdGNoZXMgPSBmYWxzZTtcblxuICBjb25zdCBub2RlVGVybWluYWxOb2RlID0gbm9kZS5pc1Rlcm1pbmFsTm9kZSgpLFxuICAgICAgICBydWxlTm9kZVRlcm1pbmFsTm9kZSA9IHByZW1pc2VOb2RlLmlzVGVybWluYWxOb2RlKCk7XG5cbiAgaWYgKG5vZGVUZXJtaW5hbE5vZGUgPT09IHJ1bGVOb2RlVGVybWluYWxOb2RlKSB7XG4gICAgaWYgKG5vZGVUZXJtaW5hbE5vZGUpIHtcbiAgICAgIGNvbnN0IHRlcm1pbmFsTm9kZSA9IG5vZGUsICAvLy9cbiAgICAgICAgICAgIHByZW1pc2VUZXJtaW5hbE5vZGUgPSBwcmVtaXNlTm9kZSwgIC8vL1xuICAgICAgICAgICAgcHJlbWlzZVRlcm1pbmFsTm9kZU1hdGNoZXMgPSBtYXRjaFByZW1pc2VUZXJtaW5hbE5vZGUocHJlbWlzZVRlcm1pbmFsTm9kZSwgdGVybWluYWxOb2RlLCBtZXRhU3Vic3RpdHV0aW9ucyk7XG5cbiAgICAgIHByZW1pc2VOb2RlTWF0Y2hlcyA9IHByZW1pc2VUZXJtaW5hbE5vZGVNYXRjaGVzOyAgLy8vXG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IG5vblRlcm1pbmFsTm9kZSA9IG5vZGUsIC8vL1xuICAgICAgICAgICAgcHJlbWlzZU5vblRlcm1pbmFsTm9kZSA9IHByZW1pc2VOb2RlLCAgLy8vXG4gICAgICAgICAgICBwcmVtaXNlTm9uVGVybWluYWxOb2RlTWF0Y2hlcyA9IG1hdGNoUHJlbWlzZU5vblRlcm1pbmFsTm9kZShwcmVtaXNlTm9uVGVybWluYWxOb2RlLCBub25UZXJtaW5hbE5vZGUsIG1ldGFTdWJzdGl0dXRpb25zKTtcblxuICAgICAgcHJlbWlzZU5vZGVNYXRjaGVzID0gcHJlbWlzZU5vblRlcm1pbmFsTm9kZU1hdGNoZXM7IC8vL1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBwcmVtaXNlTm9kZU1hdGNoZXM7XG59XG5cbmZ1bmN0aW9uIG1hdGNoUHJlbWlzZU5vZGVzKHByZW1pc2VOb2Rlcywgbm9kZXMsIG1ldGFTdWJzdGl0dXRpb25zKSB7XG4gIGxldCBwcmVtaXNlTm9kZXNNYXRjaGVzID0gZmFsc2U7XG5cbiAgY29uc3Qgbm9kZXNMZW5ndGggPSBub2Rlcy5sZW5ndGgsXG4gICAgICAgIHByZW1pc2VOb2Rlc0xlbmd0aCA9IHByZW1pc2VOb2Rlcy5sZW5ndGg7XG5cbiAgaWYgKG5vZGVzTGVuZ3RoID09PSBwcmVtaXNlTm9kZXNMZW5ndGgpIHtcbiAgICBwcmVtaXNlTm9kZXNNYXRjaGVzID0gbm9kZXMuZXZlcnkoKG5vZGUsIGluZGV4KSA9PiB7XG4gICAgICBjb25zdCBwcmVtaXNlTm9kZSA9IHByZW1pc2VOb2Rlc1tpbmRleF0sXG4gICAgICAgICAgICBwcmVtaXNlTm9kZU1hdGNoZXMgPSBtYXRjaFByZW1pc2VOb2RlKHByZW1pc2VOb2RlLCBub2RlLCBtZXRhU3Vic3RpdHV0aW9ucyk7XG5cbiAgICAgIGlmIChwcmVtaXNlTm9kZU1hdGNoZXMpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICByZXR1cm4gcHJlbWlzZU5vZGVzTWF0Y2hlcztcbn1cblxuZnVuY3Rpb24gbWF0Y2hQcmVtaXNlTWV0YXZhcmlhYmxlKHByZW1pc2VNZXRhdmFyaWFibGVOb2RlLCBub2RlcywgbWV0YVN1YnN0aXR1dGlvbnMpIHtcbiAgbGV0IHByZW1pc2VNZXRhdmFyaWFibGVNYXRjaGVzO1xuXG4gIGNvbnN0IHByZW1pc2VNZXRhdmFyaWFibGVOYW1lID0gbWV0YXZhcmlhYmxlTmFtZUZyb21NZXRhdmFyaWFibGVOb2RlKHByZW1pc2VNZXRhdmFyaWFibGVOb2RlKSxcbiAgICAgICAgbWV0YVN1YnN0aXR1dGlvbiA9IG1ldGFTdWJzdGl0dXRpb25zLmZpbmQoKG1ldGFTdWJzdGl0dXRpb24pID0+IHtcbiAgICAgICAgICBjb25zdCBtZXRhdmFyaWFibGVOYW1lID0gbWV0YVN1YnN0aXR1dGlvbi5nZXRNZXRhdmFyaWFibGVOYW1lKCk7XG5cbiAgICAgICAgICBpZiAobWV0YXZhcmlhYmxlTmFtZSA9PT0gcHJlbWlzZU1ldGF2YXJpYWJsZU5hbWUpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfSkgfHwgbnVsbDtcblxuICBpZiAobWV0YVN1YnN0aXR1dGlvbiAhPT0gbnVsbCkge1xuICAgIGNvbnN0IG1ldGFTdWJzdGl0dXRpb25Ob2Rlc01hdGNoID0gbWV0YVN1YnN0aXR1dGlvbi5tYXRjaE5vZGVzKG5vZGVzKTtcblxuICAgIHByZW1pc2VNZXRhdmFyaWFibGVNYXRjaGVzID0gbWV0YVN1YnN0aXR1dGlvbk5vZGVzTWF0Y2g7ICAvLy9cbiAgfSBlbHNlIHtcbiAgICBjb25zdCBtZXRhdmFyaWFibGVOYW1lID0gcHJlbWlzZU1ldGF2YXJpYWJsZU5hbWUsIC8vL1xuICAgICAgICAgIG1ldGFTdWJzdGl0dXRpb24gPSBNZXRhU3Vic3RpdHV0aW9uLmZyb21NZXRhdmFyaWFibGVOYW1lQW5kTm9kZXMobWV0YXZhcmlhYmxlTmFtZSwgbm9kZXMpO1xuXG4gICAgbWV0YVN1YnN0aXR1dGlvbnMucHVzaChtZXRhU3Vic3RpdHV0aW9uKTtcblxuICAgIHByZW1pc2VNZXRhdmFyaWFibGVNYXRjaGVzID0gdHJ1ZTtcbiAgfVxuXG4gIHJldHVybiBwcmVtaXNlTWV0YXZhcmlhYmxlTWF0Y2hlcztcbn1cblxuZnVuY3Rpb24gbWF0Y2hQcmVtaXNlVGVybWluYWxOb2RlKHByZW1pc2VUZXJtaW5hbE5vZGUsIHRlcm1pbmFsTm9kZSwgbWV0YVN1YnN0aXR1dGlvbnMpIHtcbiAgY29uc3QgbWF0Y2hlcyA9IHByZW1pc2VUZXJtaW5hbE5vZGUubWF0Y2godGVybWluYWxOb2RlKSxcbiAgICAgICAgcHJlbWlzZVRlcm1pbmFsTm9kZU1hdGNoZXMgPSBtYXRjaGVzO1xuXG4gIHJldHVybiBwcmVtaXNlVGVybWluYWxOb2RlTWF0Y2hlcztcbn1cblxuZnVuY3Rpb24gbWF0Y2hQcmVtaXNlTm9uVGVybWluYWxOb2RlKHByZW1pc2VOb25UZXJtaW5hbE5vZGUsIG5vblRlcm1pbmFsTm9kZSwgbWV0YVN1YnN0aXR1dGlvbnMpIHtcbiAgbGV0IHByZW1pc2VOb25UZXJtaW5hbE5vZGVNYXRjaGVzID0gZmFsc2U7XG5cbiAgY29uc3QgcnVsZU5hbWUgPSBub25UZXJtaW5hbE5vZGUuZ2V0UnVsZU5hbWUoKSxcbiAgICAgICAgcHJlbWlzZVJ1bGVOYW1lID0gcHJlbWlzZU5vblRlcm1pbmFsTm9kZS5nZXRSdWxlTmFtZSgpOyAvLy9cblxuICBpZiAocnVsZU5hbWUgPT09IHByZW1pc2VSdWxlTmFtZSkge1xuICAgIGNvbnN0IGNoaWxkTm9kZXMgPSBub25UZXJtaW5hbE5vZGUuZ2V0Q2hpbGROb2RlcygpLFxuICAgICAgICAgIHByZW1pc2VDaGlsZE5vZGVzID0gcHJlbWlzZU5vblRlcm1pbmFsTm9kZS5nZXRDaGlsZE5vZGVzKCksXG4gICAgICAgICAgbm9kZXMgPSBjaGlsZE5vZGVzLCAvLy9cbiAgICAgICAgICBwcmVtaXNlTm9kZXMgPSBwcmVtaXNlQ2hpbGROb2RlcywgLy8vXG4gICAgICAgICAgcHJlbWlzZUNoaWxkTm9kZXNNYXRjaGVzID0gbWF0Y2hQcmVtaXNlTm9kZXMocHJlbWlzZU5vZGVzLCBub2RlcywgbWV0YVN1YnN0aXR1dGlvbnMpO1xuXG4gICAgcHJlbWlzZU5vblRlcm1pbmFsTm9kZU1hdGNoZXMgPSBwcmVtaXNlQ2hpbGROb2Rlc01hdGNoZXM7IC8vL1xuXG4gICAgaWYgKCFwcmVtaXNlTm9uVGVybWluYWxOb2RlTWF0Y2hlcykge1xuICAgICAgY29uc3QgcnVsZU5hbWVNZXRhc3RhdGVtZW50UnVsZU5hbWUgPSAocnVsZU5hbWUgPT09IE1FVEFTVEFURU1FTlRfUlVMRV9OQU1FKTtcblxuICAgICAgaWYgKHJ1bGVOYW1lTWV0YXN0YXRlbWVudFJ1bGVOYW1lKSB7XG4gICAgICAgIGNvbnN0IG1ldGFzdGF0ZW1lbnROb2RlID0gbm9uVGVybWluYWxOb2RlLCAgLy8vXG4gICAgICAgICAgICAgIHByZW1pc2VNZXRhc3RhdGVtZW50Tm9kZSA9IHByZW1pc2VOb25UZXJtaW5hbE5vZGUsICAvLy9cbiAgICAgICAgICAgICAgcHJlbWlzZU1ldGFzdGF0ZW1lbnROb2RlTWF0Y2hlcyA9IG1hdGNoUHJlbWlzZU1ldGFzdGF0ZW1lbnROb2RlKHByZW1pc2VNZXRhc3RhdGVtZW50Tm9kZSwgbWV0YXN0YXRlbWVudE5vZGUsIG1ldGFTdWJzdGl0dXRpb25zKTtcblxuICAgICAgICBwcmVtaXNlTm9uVGVybWluYWxOb2RlTWF0Y2hlcyA9IHByZW1pc2VNZXRhc3RhdGVtZW50Tm9kZU1hdGNoZXM7IC8vL1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBwcmVtaXNlTm9uVGVybWluYWxOb2RlTWF0Y2hlcztcbn1cblxuZnVuY3Rpb24gbWF0Y2hQcmVtaXNlTWV0YXN0YXRlbWVudE5vZGUocHJlbWlzZU1ldGFzdGF0ZW1lbnROb2RlLCBtZXRhc3RhdGVtZW50Tm9kZSwgbWV0YVN1YnN0aXR1dGlvbnMpIHtcbiAgbGV0IHByZW1pc2VNZXRhc3RhdGVtZW50Tm9kZU1hdGNoZXMgPSBmYWxzZTtcblxuICBjb25zdCBwcmVtaXNlTm9uVGVybWluYWxOb2RlID0gcHJlbWlzZU1ldGFzdGF0ZW1lbnROb2RlLCAgLy8vXG4gICAgICAgIHByZW1pc2VDaGlsZE5vZGVzID0gcHJlbWlzZU5vblRlcm1pbmFsTm9kZS5nZXRDaGlsZE5vZGVzKCksXG4gICAgICAgIHByZW1pc2VDaGlsZE5vZGVzTGVuZ3RoID0gcHJlbWlzZUNoaWxkTm9kZXMubGVuZ3RoO1xuXG4gIGlmIChwcmVtaXNlQ2hpbGROb2Rlc0xlbmd0aCA9PT0gMSkge1xuICAgIGNvbnN0IGZpcnN0UHJlbWlzZUNoaWxkTm9kZSA9IGZpcnN0KHByZW1pc2VDaGlsZE5vZGVzKSxcbiAgICAgICAgICBwcmVtaXNlQ2hpbGROb2RlID0gZmlyc3RQcmVtaXNlQ2hpbGROb2RlLCAgLy8vXG4gICAgICAgICAgcHJlbWlzZUNoaWxkTm9kZU5vblRlcm1pbmFsTm9kZSA9IHByZW1pc2VDaGlsZE5vZGUuaXNOb25UZXJtaW5hbE5vZGUoKTtcblxuICAgIGlmIChwcmVtaXNlQ2hpbGROb2RlTm9uVGVybWluYWxOb2RlKSB7XG4gICAgICBjb25zdCBwcmVtaXNlTm9uVGVybWluYWxDaGlsZE5vZGUgPSBwcmVtaXNlQ2hpbGROb2RlLCAgLy8vXG4gICAgICAgICAgICBwcmVtaXNlTm9uVGVybWluYWxDaGlsZE5vZGVSdWxlTmFtZSA9IHByZW1pc2VOb25UZXJtaW5hbENoaWxkTm9kZS5nZXRSdWxlTmFtZSgpLFxuICAgICAgICAgICAgcHJlbWlzZU5vblRlcm1pbmFsQ2hpbGROb2RlUnVsZU5hbWVNZXRhdmFyaWFibGVSdWxlTmFtZSA9IChwcmVtaXNlTm9uVGVybWluYWxDaGlsZE5vZGVSdWxlTmFtZSA9PT0gTUVUQVZBUklBQkxFX1JVTEVfTkFNRSk7XG5cbiAgICAgIGlmIChwcmVtaXNlTm9uVGVybWluYWxDaGlsZE5vZGVSdWxlTmFtZU1ldGF2YXJpYWJsZVJ1bGVOYW1lKSB7XG4gICAgICAgIGNvbnN0IHByZW1pc2VNZXRhdmFyaWFibGVOb2RlID0gcHJlbWlzZU5vblRlcm1pbmFsQ2hpbGROb2RlLCAgLy8vXG4gICAgICAgICAgICAgIG5vblRlcm1pbmFsTm9kZSA9IG1ldGFzdGF0ZW1lbnROb2RlLCAgLy8vXG4gICAgICAgICAgICAgIGNoaWxkTm9kZXMgPSBub25UZXJtaW5hbE5vZGUuZ2V0Q2hpbGROb2RlcygpLFxuICAgICAgICAgICAgICBub2RlcyA9IGNoaWxkTm9kZXMsIC8vL1xuICAgICAgICAgICAgICBwcmVtaXNlTWV0YVZhcmlhYmxlTWF0Y2hlcyA9IG1hdGNoUHJlbWlzZU1ldGF2YXJpYWJsZShwcmVtaXNlTWV0YXZhcmlhYmxlTm9kZSwgbm9kZXMsIG1ldGFTdWJzdGl0dXRpb25zKTtcblxuICAgICAgICBwcmVtaXNlTWV0YXN0YXRlbWVudE5vZGVNYXRjaGVzID0gcHJlbWlzZU1ldGFWYXJpYWJsZU1hdGNoZXM7IC8vL1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBwcmVtaXNlTWV0YXN0YXRlbWVudE5vZGVNYXRjaGVzO1xufVxuIl0sIm5hbWVzIjpbIlByZW1pc2UiLCJtZXRhc3RhdGVtZW50Tm9kZXNRdWVyeSIsIm5vZGVzUXVlcnkiLCJtZXRhU3VicHJvb2ZBc3NlcnRpb25Ob2RlUXVlcnkiLCJub2RlUXVlcnkiLCJ1bnF1YWxpZmllZE1ldGFzdGF0ZW1lbnRNZXRhc3RhdGVtZW50Tm9kZXNRdWVyeSIsInF1YWxpZmllZE9yVW5xdWFsaWZpZWRNZXRhc3RhdGVtZW50TWV0YXN0YXRlbWVudE5vZGVRdWVyeSIsIm1ldGFzdGF0ZW1lbnROb2RlIiwiZ2V0TWV0YXN0YXRlbWVudE5vZGUiLCJtYXRjaE1ldGFTdWJwcm9vZk5vZGUiLCJtZXRhU3VicHJvb2ZOb2RlIiwibWV0YVN1YnN0aXR1dGlvbnMiLCJtZXRhU3VicHJvb2ZOb2RlTWF0Y2hlcyIsIm1ldGFTdWJwcm9vZkFzc2VydGlvbk5vZGUiLCJtZXRhU3VicHJvb2ZBc3NlcnRpb25NZXRhc3RhdGVtZW50Tm9kZXMiLCJ1bnF1YWxpZmllZE1ldGFzdGF0ZW1lbnRNZXRhc3RhdGVtZW50Tm9kZXMiLCJxdWFsaWZpZWRPclVucXVhbGlmaWVkTWV0YXN0YXRlbWVudE1ldGFzdGF0ZW1lbnROb2RlIiwibWV0YXN0YXRlbWVudE5vZGVzIiwibWV0YXN0YXRlbWVudE5vZGVzTGVuZ3RoIiwibGVuZ3RoIiwibWV0YVN1YnByb29mQXNzZXJ0aW9uTWV0YXN0YXRlbWVudE5vZGVzTGVuZ3RoIiwiZXZlcnkiLCJtZXRhU3VicHJvb2ZBc3NlcnRpb25NZXRhc3RhdGVtZW50Tm9kZSIsImluZGV4Iiwibm9uVGVybWluYWxOb2RlIiwicHJlbWlzZU5vblRlcm1pbmFsTm9kZSIsInByZW1pc2VOb25UZXJtaW5hbE5vZGVNYXRjaGVzIiwibWF0Y2hQcmVtaXNlTm9uVGVybWluYWxOb2RlIiwibWF0Y2hNZXRhc3RhdGVtZW50Tm9kZSIsIm1ldGFzdGF0ZW1lbnROb2RlTWF0Y2hlcyIsInRvSlNPTiIsIm1ldGFzdGF0ZW1lbnRTdHJpbmciLCJub2RlQXNTdHJpbmciLCJtZXRhc3RhdGVtZW50IiwianNvbiIsImZyb21KU09OIiwicmVsZWFzZUNvbnRleHQiLCJtZXRhc3RhdGVtZW50Tm9kZUZyb21NZXRhc3RhdGVtZW50U3RyaW5nIiwicHJlbWlzZSIsImZyb21NZXRhc3RhdGVtZW50Tm9kZSIsIm1hdGNoUHJlbWlzZU5vZGUiLCJwcmVtaXNlTm9kZSIsIm5vZGUiLCJwcmVtaXNlTm9kZU1hdGNoZXMiLCJub2RlVGVybWluYWxOb2RlIiwiaXNUZXJtaW5hbE5vZGUiLCJydWxlTm9kZVRlcm1pbmFsTm9kZSIsInRlcm1pbmFsTm9kZSIsInByZW1pc2VUZXJtaW5hbE5vZGUiLCJwcmVtaXNlVGVybWluYWxOb2RlTWF0Y2hlcyIsIm1hdGNoUHJlbWlzZVRlcm1pbmFsTm9kZSIsIm1hdGNoUHJlbWlzZU5vZGVzIiwicHJlbWlzZU5vZGVzIiwibm9kZXMiLCJwcmVtaXNlTm9kZXNNYXRjaGVzIiwibm9kZXNMZW5ndGgiLCJwcmVtaXNlTm9kZXNMZW5ndGgiLCJtYXRjaFByZW1pc2VNZXRhdmFyaWFibGUiLCJwcmVtaXNlTWV0YXZhcmlhYmxlTm9kZSIsInByZW1pc2VNZXRhdmFyaWFibGVNYXRjaGVzIiwicHJlbWlzZU1ldGF2YXJpYWJsZU5hbWUiLCJtZXRhdmFyaWFibGVOYW1lRnJvbU1ldGF2YXJpYWJsZU5vZGUiLCJtZXRhU3Vic3RpdHV0aW9uIiwiZmluZCIsIm1ldGF2YXJpYWJsZU5hbWUiLCJnZXRNZXRhdmFyaWFibGVOYW1lIiwibWV0YVN1YnN0aXR1dGlvbk5vZGVzTWF0Y2giLCJtYXRjaE5vZGVzIiwiTWV0YVN1YnN0aXR1dGlvbiIsImZyb21NZXRhdmFyaWFibGVOYW1lQW5kTm9kZXMiLCJwdXNoIiwibWF0Y2hlcyIsIm1hdGNoIiwicnVsZU5hbWUiLCJnZXRSdWxlTmFtZSIsInByZW1pc2VSdWxlTmFtZSIsImNoaWxkTm9kZXMiLCJnZXRDaGlsZE5vZGVzIiwicHJlbWlzZUNoaWxkTm9kZXMiLCJwcmVtaXNlQ2hpbGROb2Rlc01hdGNoZXMiLCJydWxlTmFtZU1ldGFzdGF0ZW1lbnRSdWxlTmFtZSIsIk1FVEFTVEFURU1FTlRfUlVMRV9OQU1FIiwicHJlbWlzZU1ldGFzdGF0ZW1lbnROb2RlIiwicHJlbWlzZU1ldGFzdGF0ZW1lbnROb2RlTWF0Y2hlcyIsIm1hdGNoUHJlbWlzZU1ldGFzdGF0ZW1lbnROb2RlIiwicHJlbWlzZUNoaWxkTm9kZXNMZW5ndGgiLCJmaXJzdFByZW1pc2VDaGlsZE5vZGUiLCJmaXJzdCIsInByZW1pc2VDaGlsZE5vZGUiLCJwcmVtaXNlQ2hpbGROb2RlTm9uVGVybWluYWxOb2RlIiwiaXNOb25UZXJtaW5hbE5vZGUiLCJwcmVtaXNlTm9uVGVybWluYWxDaGlsZE5vZGUiLCJwcmVtaXNlTm9uVGVybWluYWxDaGlsZE5vZGVSdWxlTmFtZSIsInByZW1pc2VOb25UZXJtaW5hbENoaWxkTm9kZVJ1bGVOYW1lTWV0YXZhcmlhYmxlUnVsZU5hbWUiLCJNRVRBVkFSSUFCTEVfUlVMRV9OQU1FIiwicHJlbWlzZU1ldGFWYXJpYWJsZU1hdGNoZXMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBZ0JxQkE7OztxRUFkUTtxQkFFUDtzQkFDTztxQkFDUzt5QkFHMEI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRWhFLElBQU1DLDBCQUEwQkMsSUFBQUEsaUJBQVUsRUFBQyx5Q0FDckNDLGlDQUFpQ0MsSUFBQUEsZ0JBQVMsRUFBQywwQ0FDM0NDLGtEQUFrREgsSUFBQUEsaUJBQVUsRUFBQywwREFDN0RJLDREQUE0REYsSUFBQUEsZ0JBQVMsRUFBQztBQUU3RCxJQUFBLEFBQU1KLHdCQTZFbEIsQUE3RVk7YUFBTUEsUUFDUE8saUJBQWlCOzhCQURWUDtRQUVqQixJQUFJLENBQUNPLGlCQUFpQixHQUFHQTs7aUJBRlJQOztZQUtuQlEsS0FBQUE7bUJBQUFBLFNBQUFBLHVCQUF1QjtnQkFDckIsT0FBTyxJQUFJLENBQUNELGlCQUFpQjtZQUMvQjs7O1lBRUFFLEtBQUFBO21CQUFBQSxTQUFBQSxzQkFBc0JDLGdCQUFnQixFQUFFQyxpQkFBaUIsRUFBRTtnQkFDekQsSUFBSUMsMEJBQTBCLEtBQUs7Z0JBRW5DLElBQU1DLDRCQUE0QlYsK0JBQStCLElB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