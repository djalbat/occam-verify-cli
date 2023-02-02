"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    default: function() {
        return verifyStatement;
    },
    verifyStatementAgainstCombinator: function() {
        return verifyStatementAgainstCombinator;
    }
});
var _equality = /*#__PURE__*/ _interopRequireDefault(require("../equality"));
var _term = /*#__PURE__*/ _interopRequireDefault(require("../verify/term"));
var _bracketed = /*#__PURE__*/ _interopRequireDefault(require("../ocmbinator/bracketed"));
var _type = /*#__PURE__*/ _interopRequireDefault(require("../verify/assertion/type"));
var _array = require("../utilities/array");
var _type1 = require("../type");
var _typeNames = require("../typeNames");
var _metaTypes = require("../metaTypes");
var _query = require("../utilities/query");
var _ruleNames = require("../ruleNames");
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
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
var termNodeQuery = (0, _query.nodeQuery)("/argument/term!"), typeNodeQuery = (0, _query.nodeQuery)("/argument/type!"), metaTypeNodeQuery = (0, _query.nodeQuery)("/metaArgument/metaType!"), statementNodeQuery = (0, _query.nodeQuery)("/metaArgument/statement!"), typeAssertionNodeQuery = (0, _query.nodeQuery)("/statement/typeAssertion!"), metaTypeTerminalNodeQuery = (0, _query.nodeQuery)("/metaType/@meta-type");
function verifyStatement(statementNode, assertions, derived, context) {
    var statementVerified = false;
    if (!statementVerified) {
        var statementVerifiedAgainstCombinators = verifyStatementAgainstCombinators(statementNode, context);
        statementVerified = statementVerifiedAgainstCombinators; ///
    }
    if (!statementVerified) {
        var statementVerifiedAsTypeAssertion = verifyStatementAsTypeAssertion(statementNode, assertions, derived, context);
        statementVerified = statementVerifiedAsTypeAssertion; ///
    }
    if (!statementVerified) {
        var statementVerifiedAsEquality = verifyStatementAsEquality(statementNode, derived, context);
        statementVerified = statementVerifiedAsEquality; //
    }
    return statementVerified;
}
function verifyStatementAgainstCombinator(statementNode, combinator, context) {
    var combinatorStatementNode = combinator.getStatementNode(), node = statementNode, combinatorNode = combinatorStatementNode, nodeVerified = verifyNode(node, combinatorNode, context), statementVerifiedAgainstCombinator = nodeVerified; ///
    return statementVerifiedAgainstCombinator;
}
function verifyStatementAgainstCombinators(statementNode, context) {
    var statementVerifiedAgainstCombinators = false;
    var combinators = context.getCombinators();
    combinators = [
        _bracketed.default
    ].concat(_toConsumableArray(combinators));
    var combinator = combinators.find(function(combinator) {
        var statementVerifiedAgainstCombinator = verifyStatementAgainstCombinator(statementNode, combinator, context);
        if (statementVerifiedAgainstCombinator) {
            return true;
        }
    }) || null;
    if (combinator !== null) {
        statementVerifiedAgainstCombinators = true;
    }
    return statementVerifiedAgainstCombinators;
}
function verifyStatementAsTypeAssertion(statementNode, assertions, derived, context) {
    var statementVerifiedAsTypeAssertion = false;
    var typeAssertionNode = typeAssertionNodeQuery(statementNode);
    if (typeAssertionNode !== null) {
        var typeAssertionVerified = (0, _type.default)(typeAssertionNode, assertions, derived, context);
        statementVerifiedAsTypeAssertion = typeAssertionVerified; ///
    }
    return statementVerifiedAsTypeAssertion;
}
function verifyStatementAsEquality(statementNode, derived, context) {
    var statementVerifiedAsEquality = false;
    var equality = _equality.default.fromStatementNode(statementNode, context);
    if (equality !== null) {
        if (derived) {
            var equalities = context.getEqualities();
            if (equalities !== null) {
                var equalityEquates = equality.equate(equalities, context);
                statementVerifiedAsEquality = equalityEquates; ///
            }
        } else {
            statementVerifiedAsEquality = true;
        }
    }
    return statementVerifiedAsEquality;
}
function verifyNode(node, combinatorNode, context) {
    var nodeVerified;
    var nodeTerminalNode = node.isTerminalNode(), combinatorNodeTerminalNode = combinatorNode.isTerminalNode();
    if (nodeTerminalNode === combinatorNodeTerminalNode) {
        if (nodeTerminalNode) {
            var terminalNode = node, combinatorTerminalNode = combinatorNode, terminalNodeVerified = verifyTerminalNode(terminalNode, combinatorTerminalNode, context);
            nodeVerified = terminalNodeVerified; ///
        } else {
            var nonTerminalNode = node, combinatorNonTerminalNode = combinatorNode, nonTerminalNodeVerified = verifyNonTerminalNode(nonTerminalNode, combinatorNonTerminalNode, context);
            nodeVerified = nonTerminalNodeVerified; ///
        }
    }
    return nodeVerified;
}
function verifyNodes(nodes, combinatorNodes, context) {
    var nodesVerified = false;
    var nodesLength = nodes.length, combinatorNodesLength = combinatorNodes.length;
    if (nodesLength === combinatorNodesLength) {
        nodesVerified = nodes.every(function(node, index) {
            var combinatorNode = combinatorNodes[index], nodeVerified = verifyNode(node, combinatorNode, context);
            if (nodeVerified) {
                return true;
            }
        });
    }
    return nodesVerified;
}
function verifyTerminalNode(terminalNode, combinatorTerminalNode, context) {
    var terminalNodeVerified = false;
    var matches = terminalNode.match(combinatorTerminalNode);
    if (matches) {
        terminalNodeVerified = true;
    }
    return terminalNodeVerified;
}
function verifyNonTerminalNode(nonTerminalNode, combinatorNonTerminalNode, context) {
    var nonTerminalNodeVerified = false;
    var ruleName = nonTerminalNode.getRuleName(), combinatorRuleName = combinatorNonTerminalNode.getRuleName(); ///
    if (ruleName === combinatorRuleName) {
        switch(ruleName){
            case _ruleNames.ARGUMENT_RULE_NAME:
                {
                    var argumentNode = nonTerminalNode, combinatorArgumentNode = combinatorNonTerminalNode, argumentNodeVerified = verifyArgumentNode(argumentNode, combinatorArgumentNode, context);
                    nonTerminalNodeVerified = argumentNodeVerified; ///
                    break;
                }
            case _ruleNames.META_ARGUMENT_RULE_NAME:
                {
                    var metaArgumentNode = nonTerminalNode, combinatorMetaargumentNode = combinatorNonTerminalNode, metaArgumentNodeVerified = verifyMetaargumentNode(metaArgumentNode, combinatorMetaargumentNode, context);
                    nonTerminalNodeVerified = metaArgumentNodeVerified; ///
                    break;
                }
            default:
                {
                    var childNodes = nonTerminalNode.getChildNodes(), combinatorChildNodes = combinatorNonTerminalNode.getChildNodes(), nodes = childNodes, combinatorNodes = combinatorChildNodes, nodesVerified = verifyNodes(nodes, combinatorNodes, context);
                    nonTerminalNodeVerified = nodesVerified; ///
                    break;
                }
        }
    }
    return nonTerminalNodeVerified;
}
function verifyArgumentNode(argumentNode, combinatorArgumentNode, context) {
    var argumentNodeVerified = false;
    var termNode = termNodeQuery(argumentNode);
    if (termNode === null) {
        var argumentString = context.nodeAsString(argumentNode);
        context.error("The ".concat(argumentString, " argument should be a term, not a type"), argumentNode);
    } else {
        var types = [], termVerified = (0, _term.default)(termNode, types, context);
        if (termVerified) {
            var firstType = (0, _array.first)(types), termType = firstType, typeNode = typeNodeQuery(combinatorArgumentNode), typeName = (0, _query.typeNameFromTypeNode)(typeNode), type = typeName === _typeNames.OBJECT_TYPE_NAME ? _type1.objectType : context.findTypeByTypeName(typeName), statementTypeEqualToOrSubTypeOfType = termType.isEqualToOrSubTypeOf(type);
            if (statementTypeEqualToOrSubTypeOfType) {
                argumentNodeVerified = true;
            }
        }
    }
    return argumentNodeVerified;
}
function verifyMetaargumentNode(metaArgumentNode, combinatorMetaargumentNode, context) {
    var metaArgumentNodeVerified = false;
    var statementNode = statementNodeQuery(metaArgumentNode), combinatorMetaTYpeNode = metaTypeNodeQuery(combinatorMetaargumentNode);
    if (statementNode === null) {
        var metaArgumentString = context.nodeAsString(metaArgumentNode);
        context.error("Expected a statement but got a '".concat(metaArgumentString, "' meta-type."), metaArgumentNode);
    } else {
        if (combinatorMetaTYpeNode === null) {
            var combinatorMetaargumentString = context.nodeAsString(combinatorMetaargumentNode);
            context.error("Expected a meta-type but got a '".concat(combinatorMetaargumentString, "' statement."), metaArgumentNode);
        } else {
            var combinatorMetaTypeTerminalNode = metaTypeTerminalNodeQuery(combinatorMetaTYpeNode), content = combinatorMetaTypeTerminalNode.getContent(), contentStatementMetaType = content === _metaTypes.STATEMENT_META_TYPE;
            if (!contentStatementMetaType) {
                context.error("Expected the meta-type to be 'Statement' but got '".concat(content, "'."), metaArgumentNode);
            } else {
                metaArgumentNodeVerified = true;
            }
        }
    }
    return metaArgumentNodeVerified;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92ZXJpZnkvc3RhdGVtZW50LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgRXF1YWxpdHkgZnJvbSBcIi4uL2VxdWFsaXR5XCI7XG5pbXBvcnQgdmVyaWZ5VGVybSBmcm9tIFwiLi4vdmVyaWZ5L3Rlcm1cIjtcbmltcG9ydCBicmFja2V0ZWRDb21iaW5hdG9yIGZyb20gXCIuLi9vY21iaW5hdG9yL2JyYWNrZXRlZFwiO1xuaW1wb3J0IHZlcmlmeVR5cGVBc3NlcnRpb24gZnJvbSBcIi4uL3ZlcmlmeS9hc3NlcnRpb24vdHlwZVwiO1xuXG5pbXBvcnQgeyBmaXJzdCB9IGZyb20gXCIuLi91dGlsaXRpZXMvYXJyYXlcIjtcbmltcG9ydCB7IG9iamVjdFR5cGUgfSBmcm9tIFwiLi4vdHlwZVwiO1xuaW1wb3J0IHsgT0JKRUNUX1RZUEVfTkFNRSB9IGZyb20gXCIuLi90eXBlTmFtZXNcIjtcbmltcG9ydCB7IFNUQVRFTUVOVF9NRVRBX1RZUEUgfSBmcm9tIFwiLi4vbWV0YVR5cGVzXCI7XG5pbXBvcnQgeyBub2RlUXVlcnksIHR5cGVOYW1lRnJvbVR5cGVOb2RlIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9xdWVyeVwiO1xuaW1wb3J0IHsgQVJHVU1FTlRfUlVMRV9OQU1FLCBNRVRBX0FSR1VNRU5UX1JVTEVfTkFNRSB9IGZyb20gXCIuLi9ydWxlTmFtZXNcIjtcblxuY29uc3QgdGVybU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9hcmd1bWVudC90ZXJtIVwiKSxcbiAgICAgIHR5cGVOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvYXJndW1lbnQvdHlwZSFcIiksXG4gICAgICBtZXRhVHlwZU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9tZXRhQXJndW1lbnQvbWV0YVR5cGUhXCIpLFxuICAgICAgc3RhdGVtZW50Tm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL21ldGFBcmd1bWVudC9zdGF0ZW1lbnQhXCIpLFxuICAgICAgdHlwZUFzc2VydGlvbk5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9zdGF0ZW1lbnQvdHlwZUFzc2VydGlvbiFcIiksXG4gICAgICBtZXRhVHlwZVRlcm1pbmFsTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL21ldGFUeXBlL0BtZXRhLXR5cGVcIik7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHZlcmlmeVN0YXRlbWVudChzdGF0ZW1lbnROb2RlLCBhc3NlcnRpb25zLCBkZXJpdmVkLCBjb250ZXh0KSB7XG4gIGxldCBzdGF0ZW1lbnRWZXJpZmllZCA9IGZhbHNlO1xuXG4gIGlmICghc3RhdGVtZW50VmVyaWZpZWQpIHtcbiAgICBjb25zdCBzdGF0ZW1lbnRWZXJpZmllZEFnYWluc3RDb21iaW5hdG9ycyA9IHZlcmlmeVN0YXRlbWVudEFnYWluc3RDb21iaW5hdG9ycyhzdGF0ZW1lbnROb2RlLCBjb250ZXh0KTtcblxuICAgIHN0YXRlbWVudFZlcmlmaWVkID0gc3RhdGVtZW50VmVyaWZpZWRBZ2FpbnN0Q29tYmluYXRvcnM7ICAvLy9cbiAgfVxuXG4gIGlmICghc3RhdGVtZW50VmVyaWZpZWQpIHtcbiAgICBjb25zdCBzdGF0ZW1lbnRWZXJpZmllZEFzVHlwZUFzc2VydGlvbiA9IHZlcmlmeVN0YXRlbWVudEFzVHlwZUFzc2VydGlvbihzdGF0ZW1lbnROb2RlLCBhc3NlcnRpb25zLCBkZXJpdmVkLCBjb250ZXh0KTtcblxuICAgIHN0YXRlbWVudFZlcmlmaWVkID0gc3RhdGVtZW50VmVyaWZpZWRBc1R5cGVBc3NlcnRpb247IC8vL1xuICB9XG5cbiAgaWYgKCFzdGF0ZW1lbnRWZXJpZmllZCkge1xuICAgIGNvbnN0IHN0YXRlbWVudFZlcmlmaWVkQXNFcXVhbGl0eSA9IHZlcmlmeVN0YXRlbWVudEFzRXF1YWxpdHkoc3RhdGVtZW50Tm9kZSwgZGVyaXZlZCwgY29udGV4dCk7XG5cbiAgICBzdGF0ZW1lbnRWZXJpZmllZCA9IHN0YXRlbWVudFZlcmlmaWVkQXNFcXVhbGl0eTsgIC8vXG4gIH1cblxuICByZXR1cm4gc3RhdGVtZW50VmVyaWZpZWQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB2ZXJpZnlTdGF0ZW1lbnRBZ2FpbnN0Q29tYmluYXRvcihzdGF0ZW1lbnROb2RlLCBjb21iaW5hdG9yLCBjb250ZXh0KSB7XG4gIGNvbnN0IGNvbWJpbmF0b3JTdGF0ZW1lbnROb2RlID0gY29tYmluYXRvci5nZXRTdGF0ZW1lbnROb2RlKCksXG4gICAgICAgIG5vZGUgPSBzdGF0ZW1lbnROb2RlLCAgLy8vXG4gICAgICAgIGNvbWJpbmF0b3JOb2RlID0gY29tYmluYXRvclN0YXRlbWVudE5vZGUsIC8vL1xuICAgICAgICBub2RlVmVyaWZpZWQgPSB2ZXJpZnlOb2RlKG5vZGUsIGNvbWJpbmF0b3JOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgc3RhdGVtZW50VmVyaWZpZWRBZ2FpbnN0Q29tYmluYXRvciA9IG5vZGVWZXJpZmllZDsgIC8vL1xuXG4gIHJldHVybiBzdGF0ZW1lbnRWZXJpZmllZEFnYWluc3RDb21iaW5hdG9yO1xufVxuXG5mdW5jdGlvbiB2ZXJpZnlTdGF0ZW1lbnRBZ2FpbnN0Q29tYmluYXRvcnMoc3RhdGVtZW50Tm9kZSwgY29udGV4dCkge1xuICBsZXQgc3RhdGVtZW50VmVyaWZpZWRBZ2FpbnN0Q29tYmluYXRvcnMgPSBmYWxzZTtcblxuICBsZXQgY29tYmluYXRvcnMgPSBjb250ZXh0LmdldENvbWJpbmF0b3JzKCk7XG5cbiAgY29tYmluYXRvcnMgPSBbIC8vL1xuICAgIGJyYWNrZXRlZENvbWJpbmF0b3IsXG4gICAgLi4uY29tYmluYXRvcnNcbiAgXTtcblxuICBjb25zdCBjb21iaW5hdG9yID0gY29tYmluYXRvcnMuZmluZCgoY29tYmluYXRvcikgPT4ge1xuICAgIGNvbnN0IHN0YXRlbWVudFZlcmlmaWVkQWdhaW5zdENvbWJpbmF0b3IgPSB2ZXJpZnlTdGF0ZW1lbnRBZ2FpbnN0Q29tYmluYXRvcihzdGF0ZW1lbnROb2RlLCBjb21iaW5hdG9yLCBjb250ZXh0KTtcblxuICAgIGlmIChzdGF0ZW1lbnRWZXJpZmllZEFnYWluc3RDb21iaW5hdG9yKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH0pIHx8IG51bGw7XG5cbiAgaWYgKGNvbWJpbmF0b3IgIT09IG51bGwpIHtcbiAgICBzdGF0ZW1lbnRWZXJpZmllZEFnYWluc3RDb21iaW5hdG9ycyA9IHRydWU7XG4gIH1cblxuICByZXR1cm4gc3RhdGVtZW50VmVyaWZpZWRBZ2FpbnN0Q29tYmluYXRvcnM7XG59XG5cbmZ1bmN0aW9uIHZlcmlmeVN0YXRlbWVudEFzVHlwZUFzc2VydGlvbihzdGF0ZW1lbnROb2RlLCBhc3NlcnRpb25zLCBkZXJpdmVkLCBjb250ZXh0KSB7XG4gIGxldCBzdGF0ZW1lbnRWZXJpZmllZEFzVHlwZUFzc2VydGlvbiA9IGZhbHNlO1xuXG4gIGNvbnN0IHR5cGVBc3NlcnRpb25Ob2RlID0gdHlwZUFzc2VydGlvbk5vZGVRdWVyeShzdGF0ZW1lbnROb2RlKTtcblxuICBpZiAodHlwZUFzc2VydGlvbk5vZGUgIT09IG51bGwpIHtcbiAgICBjb25zdCB0eXBlQXNzZXJ0aW9uVmVyaWZpZWQgPSB2ZXJpZnlUeXBlQXNzZXJ0aW9uKHR5cGVBc3NlcnRpb25Ob2RlLCBhc3NlcnRpb25zLCBkZXJpdmVkLCBjb250ZXh0KTtcblxuICAgIHN0YXRlbWVudFZlcmlmaWVkQXNUeXBlQXNzZXJ0aW9uID0gdHlwZUFzc2VydGlvblZlcmlmaWVkOyAvLy9cbiAgfVxuXG4gIHJldHVybiBzdGF0ZW1lbnRWZXJpZmllZEFzVHlwZUFzc2VydGlvbjtcbn1cblxuZnVuY3Rpb24gdmVyaWZ5U3RhdGVtZW50QXNFcXVhbGl0eShzdGF0ZW1lbnROb2RlLCBkZXJpdmVkLCBjb250ZXh0KSB7XG4gIGxldCBzdGF0ZW1lbnRWZXJpZmllZEFzRXF1YWxpdHkgPSBmYWxzZTtcblxuICBjb25zdCBlcXVhbGl0eSA9IEVxdWFsaXR5LmZyb21TdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUsIGNvbnRleHQpO1xuXG4gIGlmIChlcXVhbGl0eSAhPT0gbnVsbCkge1xuICAgIGlmIChkZXJpdmVkKSB7XG4gICAgICBjb25zdCBlcXVhbGl0aWVzID0gY29udGV4dC5nZXRFcXVhbGl0aWVzKCk7XG5cbiAgICAgIGlmIChlcXVhbGl0aWVzICE9PSBudWxsKSB7XG4gICAgICAgIGNvbnN0IGVxdWFsaXR5RXF1YXRlcyA9IGVxdWFsaXR5LmVxdWF0ZShlcXVhbGl0aWVzLCBjb250ZXh0KTtcblxuICAgICAgICBzdGF0ZW1lbnRWZXJpZmllZEFzRXF1YWxpdHkgPSBlcXVhbGl0eUVxdWF0ZXM7IC8vL1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBzdGF0ZW1lbnRWZXJpZmllZEFzRXF1YWxpdHkgPSB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBzdGF0ZW1lbnRWZXJpZmllZEFzRXF1YWxpdHk7XG59XG5cbmZ1bmN0aW9uIHZlcmlmeU5vZGUobm9kZSwgY29tYmluYXRvck5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IG5vZGVWZXJpZmllZDtcblxuICBjb25zdCBub2RlVGVybWluYWxOb2RlID0gbm9kZS5pc1Rlcm1pbmFsTm9kZSgpLFxuICAgICAgICBjb21iaW5hdG9yTm9kZVRlcm1pbmFsTm9kZSA9IGNvbWJpbmF0b3JOb2RlLmlzVGVybWluYWxOb2RlKCk7XG5cbiAgaWYgKG5vZGVUZXJtaW5hbE5vZGUgPT09IGNvbWJpbmF0b3JOb2RlVGVybWluYWxOb2RlKSB7XG4gICAgaWYgKG5vZGVUZXJtaW5hbE5vZGUpIHtcbiAgICAgIGNvbnN0IHRlcm1pbmFsTm9kZSA9IG5vZGUsICAvLy9cbiAgICAgICAgICAgIGNvbWJpbmF0b3JUZXJtaW5hbE5vZGUgPSBjb21iaW5hdG9yTm9kZSwgIC8vL1xuICAgICAgICAgICAgdGVybWluYWxOb2RlVmVyaWZpZWQgPSB2ZXJpZnlUZXJtaW5hbE5vZGUodGVybWluYWxOb2RlLCBjb21iaW5hdG9yVGVybWluYWxOb2RlLCBjb250ZXh0KTtcblxuICAgICAgbm9kZVZlcmlmaWVkID0gdGVybWluYWxOb2RlVmVyaWZpZWQ7ICAvLy9cbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3Qgbm9uVGVybWluYWxOb2RlID0gbm9kZSwgLy8vXG4gICAgICAgICAgICBjb21iaW5hdG9yTm9uVGVybWluYWxOb2RlID0gY29tYmluYXRvck5vZGUsICAvLy9cbiAgICAgICAgICAgIG5vblRlcm1pbmFsTm9kZVZlcmlmaWVkID0gdmVyaWZ5Tm9uVGVybWluYWxOb2RlKG5vblRlcm1pbmFsTm9kZSwgY29tYmluYXRvck5vblRlcm1pbmFsTm9kZSwgY29udGV4dCk7XG5cbiAgICAgIG5vZGVWZXJpZmllZCA9IG5vblRlcm1pbmFsTm9kZVZlcmlmaWVkOyAvLy9cbiAgICB9XG4gIH1cblxuICByZXR1cm4gbm9kZVZlcmlmaWVkO1xufVxuXG5mdW5jdGlvbiB2ZXJpZnlOb2Rlcyhub2RlcywgY29tYmluYXRvck5vZGVzLCBjb250ZXh0KSB7XG4gIGxldCBub2Rlc1ZlcmlmaWVkID0gZmFsc2U7XG5cbiAgY29uc3Qgbm9kZXNMZW5ndGggPSBub2Rlcy5sZW5ndGgsXG4gICAgICAgIGNvbWJpbmF0b3JOb2Rlc0xlbmd0aCA9IGNvbWJpbmF0b3JOb2Rlcy5sZW5ndGg7XG5cbiAgaWYgKG5vZGVzTGVuZ3RoID09PSBjb21iaW5hdG9yTm9kZXNMZW5ndGgpIHtcbiAgICBub2Rlc1ZlcmlmaWVkID0gbm9kZXMuZXZlcnkoKG5vZGUsIGluZGV4KSA9PiB7XG4gICAgICBjb25zdCBjb21iaW5hdG9yTm9kZSA9IGNvbWJpbmF0b3JOb2Rlc1tpbmRleF0sXG4gICAgICAgICAgICBub2RlVmVyaWZpZWQgPSB2ZXJpZnlOb2RlKG5vZGUsIGNvbWJpbmF0b3JOb2RlLCBjb250ZXh0KTtcblxuICAgICAgaWYgKG5vZGVWZXJpZmllZCkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHJldHVybiBub2Rlc1ZlcmlmaWVkO1xufVxuXG5mdW5jdGlvbiB2ZXJpZnlUZXJtaW5hbE5vZGUodGVybWluYWxOb2RlLCBjb21iaW5hdG9yVGVybWluYWxOb2RlLCBjb250ZXh0KSB7XG4gIGxldCB0ZXJtaW5hbE5vZGVWZXJpZmllZCA9IGZhbHNlO1xuXG4gIGNvbnN0IG1hdGNoZXMgPSB0ZXJtaW5hbE5vZGUubWF0Y2goY29tYmluYXRvclRlcm1pbmFsTm9kZSk7XG5cbiAgaWYgKG1hdGNoZXMpIHtcbiAgICB0ZXJtaW5hbE5vZGVWZXJpZmllZCA9IHRydWU7XG4gIH1cblxuICByZXR1cm4gdGVybWluYWxOb2RlVmVyaWZpZWQ7XG59XG5cbmZ1bmN0aW9uIHZlcmlmeU5vblRlcm1pbmFsTm9kZShub25UZXJtaW5hbE5vZGUsIGNvbWJpbmF0b3JOb25UZXJtaW5hbE5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IG5vblRlcm1pbmFsTm9kZVZlcmlmaWVkID0gZmFsc2U7XG5cbiAgY29uc3QgcnVsZU5hbWUgPSBub25UZXJtaW5hbE5vZGUuZ2V0UnVsZU5hbWUoKSwgLy8vXG4gICAgICAgIGNvbWJpbmF0b3JSdWxlTmFtZSA9IGNvbWJpbmF0b3JOb25UZXJtaW5hbE5vZGUuZ2V0UnVsZU5hbWUoKTsgLy8vXG5cbiAgaWYgKHJ1bGVOYW1lID09PSBjb21iaW5hdG9yUnVsZU5hbWUpIHtcbiAgICBzd2l0Y2ggKHJ1bGVOYW1lKSB7XG4gICAgICBjYXNlIEFSR1VNRU5UX1JVTEVfTkFNRToge1xuICAgICAgICBjb25zdCBhcmd1bWVudE5vZGUgPSBub25UZXJtaW5hbE5vZGUsIC8vL1xuICAgICAgICAgICAgICBjb21iaW5hdG9yQXJndW1lbnROb2RlID0gY29tYmluYXRvck5vblRlcm1pbmFsTm9kZSwgLy8vXG4gICAgICAgICAgICAgIGFyZ3VtZW50Tm9kZVZlcmlmaWVkID0gdmVyaWZ5QXJndW1lbnROb2RlKGFyZ3VtZW50Tm9kZSwgY29tYmluYXRvckFyZ3VtZW50Tm9kZSwgY29udGV4dCk7XG5cbiAgICAgICAgbm9uVGVybWluYWxOb2RlVmVyaWZpZWQgPSBhcmd1bWVudE5vZGVWZXJpZmllZDsgLy8vXG5cbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG5cbiAgICAgIGNhc2UgTUVUQV9BUkdVTUVOVF9SVUxFX05BTUU6IHtcbiAgICAgICAgY29uc3QgbWV0YUFyZ3VtZW50Tm9kZSA9IG5vblRlcm1pbmFsTm9kZSwgLy8vXG4gICAgICAgICAgICAgIGNvbWJpbmF0b3JNZXRhYXJndW1lbnROb2RlID0gY29tYmluYXRvck5vblRlcm1pbmFsTm9kZSwgLy8vXG4gICAgICAgICAgICAgIG1ldGFBcmd1bWVudE5vZGVWZXJpZmllZCA9IHZlcmlmeU1ldGFhcmd1bWVudE5vZGUobWV0YUFyZ3VtZW50Tm9kZSwgY29tYmluYXRvck1ldGFhcmd1bWVudE5vZGUsIGNvbnRleHQpO1xuXG4gICAgICAgIG5vblRlcm1pbmFsTm9kZVZlcmlmaWVkID0gbWV0YUFyZ3VtZW50Tm9kZVZlcmlmaWVkOyAvLy9cblxuICAgICAgICBicmVhaztcbiAgICAgIH1cblxuICAgICAgZGVmYXVsdDoge1xuICAgICAgICBjb25zdCBjaGlsZE5vZGVzID0gbm9uVGVybWluYWxOb2RlLmdldENoaWxkTm9kZXMoKSxcbiAgICAgICAgICAgICAgY29tYmluYXRvckNoaWxkTm9kZXMgPSBjb21iaW5hdG9yTm9uVGVybWluYWxOb2RlLmdldENoaWxkTm9kZXMoKSxcbiAgICAgICAgICAgICAgbm9kZXMgPSBjaGlsZE5vZGVzLCAvLy9cbiAgICAgICAgICAgICAgY29tYmluYXRvck5vZGVzID0gY29tYmluYXRvckNoaWxkTm9kZXMsIC8vL1xuICAgICAgICAgICAgICBub2Rlc1ZlcmlmaWVkID0gdmVyaWZ5Tm9kZXMobm9kZXMsIGNvbWJpbmF0b3JOb2RlcywgY29udGV4dCk7XG5cbiAgICAgICAgbm9uVGVybWluYWxOb2RlVmVyaWZpZWQgPSBub2Rlc1ZlcmlmaWVkOyAvLy9cblxuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gbm9uVGVybWluYWxOb2RlVmVyaWZpZWQ7XG59XG5cbmZ1bmN0aW9uIHZlcmlmeUFyZ3VtZW50Tm9kZShhcmd1bWVudE5vZGUsIGNvbWJpbmF0b3JBcmd1bWVudE5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IGFyZ3VtZW50Tm9kZVZlcmlmaWVkID0gZmFsc2U7XG5cbiAgY29uc3QgdGVybU5vZGUgPSB0ZXJtTm9kZVF1ZXJ5KGFyZ3VtZW50Tm9kZSk7XG5cbiAgaWYgKHRlcm1Ob2RlID09PSBudWxsKSB7XG4gICAgY29uc3QgYXJndW1lbnRTdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhhcmd1bWVudE5vZGUpO1xuXG4gICAgY29udGV4dC5lcnJvcihgVGhlICR7YXJndW1lbnRTdHJpbmd9IGFyZ3VtZW50IHNob3VsZCBiZSBhIHRlcm0sIG5vdCBhIHR5cGVgLCBhcmd1bWVudE5vZGUpO1xuICB9IGVsc2Uge1xuICAgIGNvbnN0IHR5cGVzID0gW10sXG4gICAgICAgICAgdGVybVZlcmlmaWVkID0gdmVyaWZ5VGVybSh0ZXJtTm9kZSwgdHlwZXMsIGNvbnRleHQpO1xuXG4gICAgaWYgKHRlcm1WZXJpZmllZCkge1xuICAgICAgY29uc3QgZmlyc3RUeXBlID0gZmlyc3QodHlwZXMpLFxuICAgICAgICAgICAgdGVybVR5cGUgPSBmaXJzdFR5cGUsIC8vL1xuICAgICAgICAgICAgdHlwZU5vZGUgPSB0eXBlTm9kZVF1ZXJ5KGNvbWJpbmF0b3JBcmd1bWVudE5vZGUpLFxuICAgICAgICAgICAgdHlwZU5hbWUgPSB0eXBlTmFtZUZyb21UeXBlTm9kZSh0eXBlTm9kZSksXG4gICAgICAgICAgICB0eXBlID0gKHR5cGVOYW1lID09PSBPQkpFQ1RfVFlQRV9OQU1FKSA/XG4gICAgICAgICAgICAgICAgICAgICBvYmplY3RUeXBlIDogIC8vL1xuICAgICAgICAgICAgICAgICAgICAgICBjb250ZXh0LmZpbmRUeXBlQnlUeXBlTmFtZSh0eXBlTmFtZSksXG4gICAgICAgICAgICBzdGF0ZW1lbnRUeXBlRXF1YWxUb09yU3ViVHlwZU9mVHlwZSA9IHRlcm1UeXBlLmlzRXF1YWxUb09yU3ViVHlwZU9mKHR5cGUpO1xuXG4gICAgICBpZiAoc3RhdGVtZW50VHlwZUVxdWFsVG9PclN1YlR5cGVPZlR5cGUpIHtcbiAgICAgICAgYXJndW1lbnROb2RlVmVyaWZpZWQgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBhcmd1bWVudE5vZGVWZXJpZmllZDtcbn1cblxuZnVuY3Rpb24gdmVyaWZ5TWV0YWFyZ3VtZW50Tm9kZShtZXRhQXJndW1lbnROb2RlLCBjb21iaW5hdG9yTWV0YWFyZ3VtZW50Tm9kZSwgY29udGV4dCkge1xuICBsZXQgbWV0YUFyZ3VtZW50Tm9kZVZlcmlmaWVkID0gZmFsc2U7XG5cbiAgY29uc3Qgc3RhdGVtZW50Tm9kZSA9IHN0YXRlbWVudE5vZGVRdWVyeShtZXRhQXJndW1lbnROb2RlKSxcbiAgICAgICAgY29tYmluYXRvck1ldGFUWXBlTm9kZSA9IG1ldGFUeXBlTm9kZVF1ZXJ5KGNvbWJpbmF0b3JNZXRhYXJndW1lbnROb2RlKTtcblxuICBpZiAoc3RhdGVtZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIGNvbnN0IG1ldGFBcmd1bWVudFN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG1ldGFBcmd1bWVudE5vZGUpO1xuXG4gICAgY29udGV4dC5lcnJvcihgRXhwZWN0ZWQgYSBzdGF0ZW1lbnQgYnV0IGdvdCBhICcke21ldGFBcmd1bWVudFN0cmluZ30nIG1ldGEtdHlwZS5gLCBtZXRhQXJndW1lbnROb2RlKTtcbiAgfSBlbHNlIHtcbiAgICBpZiAoY29tYmluYXRvck1ldGFUWXBlTm9kZSA9PT0gbnVsbCkge1xuICAgICAgY29uc3QgY29tYmluYXRvck1ldGFhcmd1bWVudFN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKGNvbWJpbmF0b3JNZXRhYXJndW1lbnROb2RlKTtcblxuICAgICAgY29udGV4dC5lcnJvcihgRXhwZWN0ZWQgYSBtZXRhLXR5cGUgYnV0IGdvdCBhICcke2NvbWJpbmF0b3JNZXRhYXJndW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQuYCwgbWV0YUFyZ3VtZW50Tm9kZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IGNvbWJpbmF0b3JNZXRhVHlwZVRlcm1pbmFsTm9kZSA9IG1ldGFUeXBlVGVybWluYWxOb2RlUXVlcnkoY29tYmluYXRvck1ldGFUWXBlTm9kZSksXG4gICAgICAgICAgICBjb250ZW50ID0gY29tYmluYXRvck1ldGFUeXBlVGVybWluYWxOb2RlLmdldENvbnRlbnQoKSxcbiAgICAgICAgICAgIGNvbnRlbnRTdGF0ZW1lbnRNZXRhVHlwZSA9IChjb250ZW50ID09PSBTVEFURU1FTlRfTUVUQV9UWVBFKTtcblxuICAgICAgaWYgKCFjb250ZW50U3RhdGVtZW50TWV0YVR5cGUpIHtcbiAgICAgICAgY29udGV4dC5lcnJvcihgRXhwZWN0ZWQgdGhlIG1ldGEtdHlwZSB0byBiZSAnU3RhdGVtZW50JyBidXQgZ290ICcke2NvbnRlbnR9Jy5gLCBtZXRhQXJndW1lbnROb2RlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG1ldGFBcmd1bWVudE5vZGVWZXJpZmllZCA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG1ldGFBcmd1bWVudE5vZGVWZXJpZmllZDtcbn1cbiJdLCJuYW1lcyI6WyJ2ZXJpZnlTdGF0ZW1lbnQiLCJ2ZXJpZnlTdGF0ZW1lbnRBZ2FpbnN0Q29tYmluYXRvciIsInRlcm1Ob2RlUXVlcnkiLCJub2RlUXVlcnkiLCJ0eXBlTm9kZVF1ZXJ5IiwibWV0YVR5cGVOb2RlUXVlcnkiLCJzdGF0ZW1lbnROb2RlUXVlcnkiLCJ0eXBlQXNzZXJ0aW9uTm9kZVF1ZXJ5IiwibWV0YVR5cGVUZXJtaW5hbE5vZGVRdWVyeSIsInN0YXRlbWVudE5vZGUiLCJhc3NlcnRpb25zIiwiZGVyaXZlZCIsImNvbnRleHQiLCJzdGF0ZW1lbnRWZXJpZmllZCIsInN0YXRlbWVudFZlcmlmaWVkQWdhaW5zdENvbWJpbmF0b3JzIiwidmVyaWZ5U3RhdGVtZW50QWdhaW5zdENvbWJpbmF0b3JzIiwic3RhdGVtZW50VmVyaWZpZWRBc1R5cGVBc3NlcnRpb24iLCJ2ZXJpZnlTdGF0ZW1lbnRBc1R5cGVBc3NlcnRpb24iLCJzdGF0ZW1lbnRWZXJpZmllZEFzRXF1YWxpdHkiLCJ2ZXJpZnlTdGF0ZW1lbnRBc0VxdWFsaXR5IiwiY29tYmluYXRvciIsImNvbWJpbmF0b3JTdGF0ZW1lbnROb2RlIiwiZ2V0U3RhdGVtZW50Tm9kZSIsIm5vZGUiLCJjb21iaW5hdG9yTm9kZSIsIm5vZGVWZXJpZmllZCIsInZlcmlmeU5vZGUiLCJzdGF0ZW1lbnRWZXJpZmllZEFnYWluc3RDb21iaW5hdG9yIiwiY29tYmluYXRvcnMiLCJnZXRDb21iaW5hdG9ycyIsImJyYWNrZXRlZENvbWJpbmF0b3IiLCJmaW5kIiwidHlwZUFzc2VydGlvbk5vZGUiLCJ0eXBlQXNzZXJ0aW9uVmVyaWZpZWQiLCJ2ZXJpZnlUeXBlQXNzZXJ0aW9uIiwiZXF1YWxpdHkiLCJFcXVhbGl0eSIsImZyb21TdGF0ZW1lbnROb2RlIiwiZXF1YWxpdGllcyIsImdldEVxdWFsaXRpZXMiLCJlcXVhbGl0eUVxdWF0ZXMiLCJlcXVhdGUiLCJub2RlVGVybWluYWxOb2RlIiwiaXNUZXJtaW5hbE5vZGUiLCJjb21iaW5hdG9yTm9kZVRlcm1pbmFsTm9kZSIsInRlcm1pbmFsTm9kZSIsImNvbWJpbmF0b3JUZXJtaW5hbE5vZGUiLCJ0ZXJtaW5hbE5vZGVWZXJpZmllZCIsInZlcmlmeVRlcm1pbmFsTm9kZSIsIm5vblRlcm1pbmFsTm9kZSIsImNvbWJpbmF0b3JOb25UZXJtaW5hbE5vZGUiLCJub25UZXJtaW5hbE5vZGVWZXJpZmllZCIsInZlcmlmeU5vblRlcm1pbmFsTm9kZSIsInZlcmlmeU5vZGVzIiwibm9kZXMiLCJjb21iaW5hdG9yTm9kZXMiLCJub2Rlc1ZlcmlmaWVkIiwibm9kZXNMZW5ndGgiLCJsZW5ndGgiLCJjb21iaW5hdG9yTm9kZXNMZW5ndGgiLCJldmVyeSIsImluZGV4IiwibWF0Y2hlcyIsIm1hdGNoIiwicnVsZU5hbWUiLCJnZXRSdWxlTmFtZSIsImNvbWJpbmF0b3JSdWxlTmFtZSIsIkFSR1VNRU5UX1JVTEVfTkFNRSIsImFyZ3VtZW50Tm9kZSIsImNvbWJpbmF0b3JBcmd1bWVudE5vZGUiLCJhcmd1bWVudE5vZGVWZXJpZmllZCIsInZlcmlmeUFyZ3VtZW50Tm9kZSIsIk1FVEFfQVJHVU1FTlRfUlVMRV9OQU1FIiwibWV0YUFyZ3VtZW50Tm9kZSIsImNvbWJpbmF0b3JNZXRhYXJndW1lbnROb2RlIiwibWV0YUFyZ3VtZW50Tm9kZVZlcmlmaWVkIiwidmVyaWZ5TWV0YWFyZ3VtZW50Tm9kZSIsImNoaWxkTm9kZXMiLCJnZXRDaGlsZE5vZGVzIiwiY29tYmluYXRvckNoaWxkTm9kZXMiLCJ0ZXJtTm9kZSIsImFyZ3VtZW50U3RyaW5nIiwibm9kZUFzU3RyaW5nIiwiZXJyb3IiLCJ0eXBlcyIsInRlcm1WZXJpZmllZCIsInZlcmlmeVRlcm0iLCJmaXJzdFR5cGUiLCJmaXJzdCIsInRlcm1UeXBlIiwidHlwZU5vZGUiLCJ0eXBlTmFtZSIsInR5cGVOYW1lRnJvbVR5cGVOb2RlIiwidHlwZSIsIk9CSkVDVF9UWVBFX05BTUUiLCJvYmplY3RUeXBlIiwiZmluZFR5cGVCeVR5cGVOYW1lIiwic3RhdGVtZW50VHlwZUVxdWFsVG9PclN1YlR5cGVPZlR5cGUiLCJpc0VxdWFsVG9PclN1YlR5cGVPZiIsImNvbWJpbmF0b3JNZXRhVFlwZU5vZGUiLCJtZXRhQXJndW1lbnRTdHJpbmciLCJjb21iaW5hdG9yTWV0YWFyZ3VtZW50U3RyaW5nIiwiY29tYmluYXRvck1ldGFUeXBlVGVybWluYWxOb2RlIiwiY29udGVudCIsImdldENvbnRlbnQiLCJjb250ZW50U3RhdGVtZW50TWV0YVR5cGUiLCJTVEFURU1FTlRfTUVUQV9UWVBFIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7SUFxQkEsT0FzQkM7ZUF0QnVCQTs7SUF3QlJDLGdDQUFnQztlQUFoQ0E7Ozs2REEzQ0s7eURBQ0U7OERBQ1M7eURBQ0E7cUJBRVY7cUJBQ0s7eUJBQ007eUJBQ0c7cUJBQ1k7eUJB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