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
        statementVerifiedAsEquality = true; ///
        if (derived) {
            var equalities = context.getEqualities();
            if (equalities !== null) {
                var equalityEquates = equality.equate(equalities, context);
                statementVerifiedAsEquality = equalityEquates; ///
            }
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92ZXJpZnkvc3RhdGVtZW50LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgRXF1YWxpdHkgZnJvbSBcIi4uL2VxdWFsaXR5XCI7XG5pbXBvcnQgdmVyaWZ5VGVybSBmcm9tIFwiLi4vdmVyaWZ5L3Rlcm1cIjtcbmltcG9ydCBicmFja2V0ZWRDb21iaW5hdG9yIGZyb20gXCIuLi9vY21iaW5hdG9yL2JyYWNrZXRlZFwiO1xuaW1wb3J0IHZlcmlmeVR5cGVBc3NlcnRpb24gZnJvbSBcIi4uL3ZlcmlmeS9hc3NlcnRpb24vdHlwZVwiO1xuXG5pbXBvcnQgeyBmaXJzdCB9IGZyb20gXCIuLi91dGlsaXRpZXMvYXJyYXlcIjtcbmltcG9ydCB7IG9iamVjdFR5cGUgfSBmcm9tIFwiLi4vdHlwZVwiO1xuaW1wb3J0IHsgT0JKRUNUX1RZUEVfTkFNRSB9IGZyb20gXCIuLi90eXBlTmFtZXNcIjtcbmltcG9ydCB7IFNUQVRFTUVOVF9NRVRBX1RZUEUgfSBmcm9tIFwiLi4vbWV0YVR5cGVzXCI7XG5pbXBvcnQgeyBub2RlUXVlcnksIHR5cGVOYW1lRnJvbVR5cGVOb2RlIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9xdWVyeVwiO1xuaW1wb3J0IHsgQVJHVU1FTlRfUlVMRV9OQU1FLCBNRVRBX0FSR1VNRU5UX1JVTEVfTkFNRSB9IGZyb20gXCIuLi9ydWxlTmFtZXNcIjtcblxuY29uc3QgdGVybU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9hcmd1bWVudC90ZXJtIVwiKSxcbiAgICAgIHR5cGVOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvYXJndW1lbnQvdHlwZSFcIiksXG4gICAgICBtZXRhVHlwZU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9tZXRhQXJndW1lbnQvbWV0YVR5cGUhXCIpLFxuICAgICAgc3RhdGVtZW50Tm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL21ldGFBcmd1bWVudC9zdGF0ZW1lbnQhXCIpLFxuICAgICAgdHlwZUFzc2VydGlvbk5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9zdGF0ZW1lbnQvdHlwZUFzc2VydGlvbiFcIiksXG4gICAgICBtZXRhVHlwZVRlcm1pbmFsTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL21ldGFUeXBlL0BtZXRhLXR5cGVcIik7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHZlcmlmeVN0YXRlbWVudChzdGF0ZW1lbnROb2RlLCBhc3NlcnRpb25zLCBkZXJpdmVkLCBjb250ZXh0KSB7XG4gIGxldCBzdGF0ZW1lbnRWZXJpZmllZCA9IGZhbHNlO1xuXG4gIGlmICghc3RhdGVtZW50VmVyaWZpZWQpIHtcbiAgICBjb25zdCBzdGF0ZW1lbnRWZXJpZmllZEFnYWluc3RDb21iaW5hdG9ycyA9IHZlcmlmeVN0YXRlbWVudEFnYWluc3RDb21iaW5hdG9ycyhzdGF0ZW1lbnROb2RlLCBjb250ZXh0KTtcblxuICAgIHN0YXRlbWVudFZlcmlmaWVkID0gc3RhdGVtZW50VmVyaWZpZWRBZ2FpbnN0Q29tYmluYXRvcnM7ICAvLy9cbiAgfVxuXG4gIGlmICghc3RhdGVtZW50VmVyaWZpZWQpIHtcbiAgICBjb25zdCBzdGF0ZW1lbnRWZXJpZmllZEFzVHlwZUFzc2VydGlvbiA9IHZlcmlmeVN0YXRlbWVudEFzVHlwZUFzc2VydGlvbihzdGF0ZW1lbnROb2RlLCBhc3NlcnRpb25zLCBkZXJpdmVkLCBjb250ZXh0KTtcblxuICAgIHN0YXRlbWVudFZlcmlmaWVkID0gc3RhdGVtZW50VmVyaWZpZWRBc1R5cGVBc3NlcnRpb247IC8vL1xuICB9XG5cbiAgaWYgKCFzdGF0ZW1lbnRWZXJpZmllZCkge1xuICAgIGNvbnN0IHN0YXRlbWVudFZlcmlmaWVkQXNFcXVhbGl0eSA9IHZlcmlmeVN0YXRlbWVudEFzRXF1YWxpdHkoc3RhdGVtZW50Tm9kZSwgZGVyaXZlZCwgY29udGV4dCk7XG5cbiAgICBzdGF0ZW1lbnRWZXJpZmllZCA9IHN0YXRlbWVudFZlcmlmaWVkQXNFcXVhbGl0eTsgIC8vXG4gIH1cblxuICByZXR1cm4gc3RhdGVtZW50VmVyaWZpZWQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB2ZXJpZnlTdGF0ZW1lbnRBZ2FpbnN0Q29tYmluYXRvcihzdGF0ZW1lbnROb2RlLCBjb21iaW5hdG9yLCBjb250ZXh0KSB7XG4gIGNvbnN0IGNvbWJpbmF0b3JTdGF0ZW1lbnROb2RlID0gY29tYmluYXRvci5nZXRTdGF0ZW1lbnROb2RlKCksXG4gICAgICAgIG5vZGUgPSBzdGF0ZW1lbnROb2RlLCAgLy8vXG4gICAgICAgIGNvbWJpbmF0b3JOb2RlID0gY29tYmluYXRvclN0YXRlbWVudE5vZGUsIC8vL1xuICAgICAgICBub2RlVmVyaWZpZWQgPSB2ZXJpZnlOb2RlKG5vZGUsIGNvbWJpbmF0b3JOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgc3RhdGVtZW50VmVyaWZpZWRBZ2FpbnN0Q29tYmluYXRvciA9IG5vZGVWZXJpZmllZDsgIC8vL1xuXG4gIHJldHVybiBzdGF0ZW1lbnRWZXJpZmllZEFnYWluc3RDb21iaW5hdG9yO1xufVxuXG5mdW5jdGlvbiB2ZXJpZnlTdGF0ZW1lbnRBZ2FpbnN0Q29tYmluYXRvcnMoc3RhdGVtZW50Tm9kZSwgY29udGV4dCkge1xuICBsZXQgc3RhdGVtZW50VmVyaWZpZWRBZ2FpbnN0Q29tYmluYXRvcnMgPSBmYWxzZTtcblxuICBsZXQgY29tYmluYXRvcnMgPSBjb250ZXh0LmdldENvbWJpbmF0b3JzKCk7XG5cbiAgY29tYmluYXRvcnMgPSBbIC8vL1xuICAgIGJyYWNrZXRlZENvbWJpbmF0b3IsXG4gICAgLi4uY29tYmluYXRvcnNcbiAgXTtcblxuICBjb25zdCBjb21iaW5hdG9yID0gY29tYmluYXRvcnMuZmluZCgoY29tYmluYXRvcikgPT4ge1xuICAgIGNvbnN0IHN0YXRlbWVudFZlcmlmaWVkQWdhaW5zdENvbWJpbmF0b3IgPSB2ZXJpZnlTdGF0ZW1lbnRBZ2FpbnN0Q29tYmluYXRvcihzdGF0ZW1lbnROb2RlLCBjb21iaW5hdG9yLCBjb250ZXh0KTtcblxuICAgIGlmIChzdGF0ZW1lbnRWZXJpZmllZEFnYWluc3RDb21iaW5hdG9yKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH0pIHx8IG51bGw7XG5cbiAgaWYgKGNvbWJpbmF0b3IgIT09IG51bGwpIHtcbiAgICBzdGF0ZW1lbnRWZXJpZmllZEFnYWluc3RDb21iaW5hdG9ycyA9IHRydWU7XG4gIH1cblxuICByZXR1cm4gc3RhdGVtZW50VmVyaWZpZWRBZ2FpbnN0Q29tYmluYXRvcnM7XG59XG5cbmZ1bmN0aW9uIHZlcmlmeVN0YXRlbWVudEFzVHlwZUFzc2VydGlvbihzdGF0ZW1lbnROb2RlLCBhc3NlcnRpb25zLCBkZXJpdmVkLCBjb250ZXh0KSB7XG4gIGxldCBzdGF0ZW1lbnRWZXJpZmllZEFzVHlwZUFzc2VydGlvbiA9IGZhbHNlO1xuXG4gIGNvbnN0IHR5cGVBc3NlcnRpb25Ob2RlID0gdHlwZUFzc2VydGlvbk5vZGVRdWVyeShzdGF0ZW1lbnROb2RlKTtcblxuICBpZiAodHlwZUFzc2VydGlvbk5vZGUgIT09IG51bGwpIHtcbiAgICBjb25zdCB0eXBlQXNzZXJ0aW9uVmVyaWZpZWQgPSB2ZXJpZnlUeXBlQXNzZXJ0aW9uKHR5cGVBc3NlcnRpb25Ob2RlLCBhc3NlcnRpb25zLCBkZXJpdmVkLCBjb250ZXh0KTtcblxuICAgIHN0YXRlbWVudFZlcmlmaWVkQXNUeXBlQXNzZXJ0aW9uID0gdHlwZUFzc2VydGlvblZlcmlmaWVkOyAvLy9cbiAgfVxuXG4gIHJldHVybiBzdGF0ZW1lbnRWZXJpZmllZEFzVHlwZUFzc2VydGlvbjtcbn1cblxuZnVuY3Rpb24gdmVyaWZ5U3RhdGVtZW50QXNFcXVhbGl0eShzdGF0ZW1lbnROb2RlLCBkZXJpdmVkLCBjb250ZXh0KSB7XG4gIGxldCBzdGF0ZW1lbnRWZXJpZmllZEFzRXF1YWxpdHkgPSBmYWxzZTtcblxuICBjb25zdCBlcXVhbGl0eSA9IEVxdWFsaXR5LmZyb21TdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUsIGNvbnRleHQpO1xuXG4gIGlmIChlcXVhbGl0eSAhPT0gbnVsbCkge1xuICAgIHN0YXRlbWVudFZlcmlmaWVkQXNFcXVhbGl0eSA9IHRydWU7IC8vL1xuXG4gICAgaWYgKGRlcml2ZWQpIHtcbiAgICAgIGNvbnN0IGVxdWFsaXRpZXMgPSBjb250ZXh0LmdldEVxdWFsaXRpZXMoKTtcblxuICAgICAgaWYgKGVxdWFsaXRpZXMgIT09IG51bGwpIHtcbiAgICAgICAgY29uc3QgZXF1YWxpdHlFcXVhdGVzID0gZXF1YWxpdHkuZXF1YXRlKGVxdWFsaXRpZXMsIGNvbnRleHQpO1xuXG4gICAgICAgIHN0YXRlbWVudFZlcmlmaWVkQXNFcXVhbGl0eSA9IGVxdWFsaXR5RXF1YXRlczsgLy8vXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHN0YXRlbWVudFZlcmlmaWVkQXNFcXVhbGl0eTtcbn1cblxuZnVuY3Rpb24gdmVyaWZ5Tm9kZShub2RlLCBjb21iaW5hdG9yTm9kZSwgY29udGV4dCkge1xuICBsZXQgbm9kZVZlcmlmaWVkO1xuXG4gIGNvbnN0IG5vZGVUZXJtaW5hbE5vZGUgPSBub2RlLmlzVGVybWluYWxOb2RlKCksXG4gICAgICAgIGNvbWJpbmF0b3JOb2RlVGVybWluYWxOb2RlID0gY29tYmluYXRvck5vZGUuaXNUZXJtaW5hbE5vZGUoKTtcblxuICBpZiAobm9kZVRlcm1pbmFsTm9kZSA9PT0gY29tYmluYXRvck5vZGVUZXJtaW5hbE5vZGUpIHtcbiAgICBpZiAobm9kZVRlcm1pbmFsTm9kZSkge1xuICAgICAgY29uc3QgdGVybWluYWxOb2RlID0gbm9kZSwgIC8vL1xuICAgICAgICAgICAgY29tYmluYXRvclRlcm1pbmFsTm9kZSA9IGNvbWJpbmF0b3JOb2RlLCAgLy8vXG4gICAgICAgICAgICB0ZXJtaW5hbE5vZGVWZXJpZmllZCA9IHZlcmlmeVRlcm1pbmFsTm9kZSh0ZXJtaW5hbE5vZGUsIGNvbWJpbmF0b3JUZXJtaW5hbE5vZGUsIGNvbnRleHQpO1xuXG4gICAgICBub2RlVmVyaWZpZWQgPSB0ZXJtaW5hbE5vZGVWZXJpZmllZDsgIC8vL1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBub25UZXJtaW5hbE5vZGUgPSBub2RlLCAvLy9cbiAgICAgICAgICAgIGNvbWJpbmF0b3JOb25UZXJtaW5hbE5vZGUgPSBjb21iaW5hdG9yTm9kZSwgIC8vL1xuICAgICAgICAgICAgbm9uVGVybWluYWxOb2RlVmVyaWZpZWQgPSB2ZXJpZnlOb25UZXJtaW5hbE5vZGUobm9uVGVybWluYWxOb2RlLCBjb21iaW5hdG9yTm9uVGVybWluYWxOb2RlLCBjb250ZXh0KTtcblxuICAgICAgbm9kZVZlcmlmaWVkID0gbm9uVGVybWluYWxOb2RlVmVyaWZpZWQ7IC8vL1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBub2RlVmVyaWZpZWQ7XG59XG5cbmZ1bmN0aW9uIHZlcmlmeU5vZGVzKG5vZGVzLCBjb21iaW5hdG9yTm9kZXMsIGNvbnRleHQpIHtcbiAgbGV0IG5vZGVzVmVyaWZpZWQgPSBmYWxzZTtcblxuICBjb25zdCBub2Rlc0xlbmd0aCA9IG5vZGVzLmxlbmd0aCxcbiAgICAgICAgY29tYmluYXRvck5vZGVzTGVuZ3RoID0gY29tYmluYXRvck5vZGVzLmxlbmd0aDtcblxuICBpZiAobm9kZXNMZW5ndGggPT09IGNvbWJpbmF0b3JOb2Rlc0xlbmd0aCkge1xuICAgIG5vZGVzVmVyaWZpZWQgPSBub2Rlcy5ldmVyeSgobm9kZSwgaW5kZXgpID0+IHtcbiAgICAgIGNvbnN0IGNvbWJpbmF0b3JOb2RlID0gY29tYmluYXRvck5vZGVzW2luZGV4XSxcbiAgICAgICAgICAgIG5vZGVWZXJpZmllZCA9IHZlcmlmeU5vZGUobm9kZSwgY29tYmluYXRvck5vZGUsIGNvbnRleHQpO1xuXG4gICAgICBpZiAobm9kZVZlcmlmaWVkKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIG5vZGVzVmVyaWZpZWQ7XG59XG5cbmZ1bmN0aW9uIHZlcmlmeVRlcm1pbmFsTm9kZSh0ZXJtaW5hbE5vZGUsIGNvbWJpbmF0b3JUZXJtaW5hbE5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IHRlcm1pbmFsTm9kZVZlcmlmaWVkID0gZmFsc2U7XG5cbiAgY29uc3QgbWF0Y2hlcyA9IHRlcm1pbmFsTm9kZS5tYXRjaChjb21iaW5hdG9yVGVybWluYWxOb2RlKTtcblxuICBpZiAobWF0Y2hlcykge1xuICAgIHRlcm1pbmFsTm9kZVZlcmlmaWVkID0gdHJ1ZTtcbiAgfVxuXG4gIHJldHVybiB0ZXJtaW5hbE5vZGVWZXJpZmllZDtcbn1cblxuZnVuY3Rpb24gdmVyaWZ5Tm9uVGVybWluYWxOb2RlKG5vblRlcm1pbmFsTm9kZSwgY29tYmluYXRvck5vblRlcm1pbmFsTm9kZSwgY29udGV4dCkge1xuICBsZXQgbm9uVGVybWluYWxOb2RlVmVyaWZpZWQgPSBmYWxzZTtcblxuICBjb25zdCBydWxlTmFtZSA9IG5vblRlcm1pbmFsTm9kZS5nZXRSdWxlTmFtZSgpLCAvLy9cbiAgICAgICAgY29tYmluYXRvclJ1bGVOYW1lID0gY29tYmluYXRvck5vblRlcm1pbmFsTm9kZS5nZXRSdWxlTmFtZSgpOyAvLy9cblxuICBpZiAocnVsZU5hbWUgPT09IGNvbWJpbmF0b3JSdWxlTmFtZSkge1xuICAgIHN3aXRjaCAocnVsZU5hbWUpIHtcbiAgICAgIGNhc2UgQVJHVU1FTlRfUlVMRV9OQU1FOiB7XG4gICAgICAgIGNvbnN0IGFyZ3VtZW50Tm9kZSA9IG5vblRlcm1pbmFsTm9kZSwgLy8vXG4gICAgICAgICAgICAgIGNvbWJpbmF0b3JBcmd1bWVudE5vZGUgPSBjb21iaW5hdG9yTm9uVGVybWluYWxOb2RlLCAvLy9cbiAgICAgICAgICAgICAgYXJndW1lbnROb2RlVmVyaWZpZWQgPSB2ZXJpZnlBcmd1bWVudE5vZGUoYXJndW1lbnROb2RlLCBjb21iaW5hdG9yQXJndW1lbnROb2RlLCBjb250ZXh0KTtcblxuICAgICAgICBub25UZXJtaW5hbE5vZGVWZXJpZmllZCA9IGFyZ3VtZW50Tm9kZVZlcmlmaWVkOyAvLy9cblxuICAgICAgICBicmVhaztcbiAgICAgIH1cblxuICAgICAgY2FzZSBNRVRBX0FSR1VNRU5UX1JVTEVfTkFNRToge1xuICAgICAgICBjb25zdCBtZXRhQXJndW1lbnROb2RlID0gbm9uVGVybWluYWxOb2RlLCAvLy9cbiAgICAgICAgICAgICAgY29tYmluYXRvck1ldGFhcmd1bWVudE5vZGUgPSBjb21iaW5hdG9yTm9uVGVybWluYWxOb2RlLCAvLy9cbiAgICAgICAgICAgICAgbWV0YUFyZ3VtZW50Tm9kZVZlcmlmaWVkID0gdmVyaWZ5TWV0YWFyZ3VtZW50Tm9kZShtZXRhQXJndW1lbnROb2RlLCBjb21iaW5hdG9yTWV0YWFyZ3VtZW50Tm9kZSwgY29udGV4dCk7XG5cbiAgICAgICAgbm9uVGVybWluYWxOb2RlVmVyaWZpZWQgPSBtZXRhQXJndW1lbnROb2RlVmVyaWZpZWQ7IC8vL1xuXG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgICBkZWZhdWx0OiB7XG4gICAgICAgIGNvbnN0IGNoaWxkTm9kZXMgPSBub25UZXJtaW5hbE5vZGUuZ2V0Q2hpbGROb2RlcygpLFxuICAgICAgICAgICAgICBjb21iaW5hdG9yQ2hpbGROb2RlcyA9IGNvbWJpbmF0b3JOb25UZXJtaW5hbE5vZGUuZ2V0Q2hpbGROb2RlcygpLFxuICAgICAgICAgICAgICBub2RlcyA9IGNoaWxkTm9kZXMsIC8vL1xuICAgICAgICAgICAgICBjb21iaW5hdG9yTm9kZXMgPSBjb21iaW5hdG9yQ2hpbGROb2RlcywgLy8vXG4gICAgICAgICAgICAgIG5vZGVzVmVyaWZpZWQgPSB2ZXJpZnlOb2Rlcyhub2RlcywgY29tYmluYXRvck5vZGVzLCBjb250ZXh0KTtcblxuICAgICAgICBub25UZXJtaW5hbE5vZGVWZXJpZmllZCA9IG5vZGVzVmVyaWZpZWQ7IC8vL1xuXG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBub25UZXJtaW5hbE5vZGVWZXJpZmllZDtcbn1cblxuZnVuY3Rpb24gdmVyaWZ5QXJndW1lbnROb2RlKGFyZ3VtZW50Tm9kZSwgY29tYmluYXRvckFyZ3VtZW50Tm9kZSwgY29udGV4dCkge1xuICBsZXQgYXJndW1lbnROb2RlVmVyaWZpZWQgPSBmYWxzZTtcblxuICBjb25zdCB0ZXJtTm9kZSA9IHRlcm1Ob2RlUXVlcnkoYXJndW1lbnROb2RlKTtcblxuICBpZiAodGVybU5vZGUgPT09IG51bGwpIHtcbiAgICBjb25zdCBhcmd1bWVudFN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKGFyZ3VtZW50Tm9kZSk7XG5cbiAgICBjb250ZXh0LmVycm9yKGBUaGUgJHthcmd1bWVudFN0cmluZ30gYXJndW1lbnQgc2hvdWxkIGJlIGEgdGVybSwgbm90IGEgdHlwZWAsIGFyZ3VtZW50Tm9kZSk7XG4gIH0gZWxzZSB7XG4gICAgY29uc3QgdHlwZXMgPSBbXSxcbiAgICAgICAgICB0ZXJtVmVyaWZpZWQgPSB2ZXJpZnlUZXJtKHRlcm1Ob2RlLCB0eXBlcywgY29udGV4dCk7XG5cbiAgICBpZiAodGVybVZlcmlmaWVkKSB7XG4gICAgICBjb25zdCBmaXJzdFR5cGUgPSBmaXJzdCh0eXBlcyksXG4gICAgICAgICAgICB0ZXJtVHlwZSA9IGZpcnN0VHlwZSwgLy8vXG4gICAgICAgICAgICB0eXBlTm9kZSA9IHR5cGVOb2RlUXVlcnkoY29tYmluYXRvckFyZ3VtZW50Tm9kZSksXG4gICAgICAgICAgICB0eXBlTmFtZSA9IHR5cGVOYW1lRnJvbVR5cGVOb2RlKHR5cGVOb2RlKSxcbiAgICAgICAgICAgIHR5cGUgPSAodHlwZU5hbWUgPT09IE9CSkVDVF9UWVBFX05BTUUpID9cbiAgICAgICAgICAgICAgICAgICAgIG9iamVjdFR5cGUgOiAgLy8vXG4gICAgICAgICAgICAgICAgICAgICAgIGNvbnRleHQuZmluZFR5cGVCeVR5cGVOYW1lKHR5cGVOYW1lKSxcbiAgICAgICAgICAgIHN0YXRlbWVudFR5cGVFcXVhbFRvT3JTdWJUeXBlT2ZUeXBlID0gdGVybVR5cGUuaXNFcXVhbFRvT3JTdWJUeXBlT2YodHlwZSk7XG5cbiAgICAgIGlmIChzdGF0ZW1lbnRUeXBlRXF1YWxUb09yU3ViVHlwZU9mVHlwZSkge1xuICAgICAgICBhcmd1bWVudE5vZGVWZXJpZmllZCA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGFyZ3VtZW50Tm9kZVZlcmlmaWVkO1xufVxuXG5mdW5jdGlvbiB2ZXJpZnlNZXRhYXJndW1lbnROb2RlKG1ldGFBcmd1bWVudE5vZGUsIGNvbWJpbmF0b3JNZXRhYXJndW1lbnROb2RlLCBjb250ZXh0KSB7XG4gIGxldCBtZXRhQXJndW1lbnROb2RlVmVyaWZpZWQgPSBmYWxzZTtcblxuICBjb25zdCBzdGF0ZW1lbnROb2RlID0gc3RhdGVtZW50Tm9kZVF1ZXJ5KG1ldGFBcmd1bWVudE5vZGUpLFxuICAgICAgICBjb21iaW5hdG9yTWV0YVRZcGVOb2RlID0gbWV0YVR5cGVOb2RlUXVlcnkoY29tYmluYXRvck1ldGFhcmd1bWVudE5vZGUpO1xuXG4gIGlmIChzdGF0ZW1lbnROb2RlID09PSBudWxsKSB7XG4gICAgY29uc3QgbWV0YUFyZ3VtZW50U3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobWV0YUFyZ3VtZW50Tm9kZSk7XG5cbiAgICBjb250ZXh0LmVycm9yKGBFeHBlY3RlZCBhIHN0YXRlbWVudCBidXQgZ290IGEgJyR7bWV0YUFyZ3VtZW50U3RyaW5nfScgbWV0YS10eXBlLmAsIG1ldGFBcmd1bWVudE5vZGUpO1xuICB9IGVsc2Uge1xuICAgIGlmIChjb21iaW5hdG9yTWV0YVRZcGVOb2RlID09PSBudWxsKSB7XG4gICAgICBjb25zdCBjb21iaW5hdG9yTWV0YWFyZ3VtZW50U3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcoY29tYmluYXRvck1ldGFhcmd1bWVudE5vZGUpO1xuXG4gICAgICBjb250ZXh0LmVycm9yKGBFeHBlY3RlZCBhIG1ldGEtdHlwZSBidXQgZ290IGEgJyR7Y29tYmluYXRvck1ldGFhcmd1bWVudFN0cmluZ30nIHN0YXRlbWVudC5gLCBtZXRhQXJndW1lbnROb2RlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgY29tYmluYXRvck1ldGFUeXBlVGVybWluYWxOb2RlID0gbWV0YVR5cGVUZXJtaW5hbE5vZGVRdWVyeShjb21iaW5hdG9yTWV0YVRZcGVOb2RlKSxcbiAgICAgICAgICAgIGNvbnRlbnQgPSBjb21iaW5hdG9yTWV0YVR5cGVUZXJtaW5hbE5vZGUuZ2V0Q29udGVudCgpLFxuICAgICAgICAgICAgY29udGVudFN0YXRlbWVudE1ldGFUeXBlID0gKGNvbnRlbnQgPT09IFNUQVRFTUVOVF9NRVRBX1RZUEUpO1xuXG4gICAgICBpZiAoIWNvbnRlbnRTdGF0ZW1lbnRNZXRhVHlwZSkge1xuICAgICAgICBjb250ZXh0LmVycm9yKGBFeHBlY3RlZCB0aGUgbWV0YS10eXBlIHRvIGJlICdTdGF0ZW1lbnQnIGJ1dCBnb3QgJyR7Y29udGVudH0nLmAsIG1ldGFBcmd1bWVudE5vZGUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbWV0YUFyZ3VtZW50Tm9kZVZlcmlmaWVkID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gbWV0YUFyZ3VtZW50Tm9kZVZlcmlmaWVkO1xufVxuIl0sIm5hbWVzIjpbInZlcmlmeVN0YXRlbWVudCIsInZlcmlmeVN0YXRlbWVudEFnYWluc3RDb21iaW5hdG9yIiwidGVybU5vZGVRdWVyeSIsIm5vZGVRdWVyeSIsInR5cGVOb2RlUXVlcnkiLCJtZXRhVHlwZU5vZGVRdWVyeSIsInN0YXRlbWVudE5vZGVRdWVyeSIsInR5cGVBc3NlcnRpb25Ob2RlUXVlcnkiLCJtZXRhVHlwZVRlcm1pbmFsTm9kZVF1ZXJ5Iiwic3RhdGVtZW50Tm9kZSIsImFzc2VydGlvbnMiLCJkZXJpdmVkIiwiY29udGV4dCIsInN0YXRlbWVudFZlcmlmaWVkIiwic3RhdGVtZW50VmVyaWZpZWRBZ2FpbnN0Q29tYmluYXRvcnMiLCJ2ZXJpZnlTdGF0ZW1lbnRBZ2FpbnN0Q29tYmluYXRvcnMiLCJzdGF0ZW1lbnRWZXJpZmllZEFzVHlwZUFzc2VydGlvbiIsInZlcmlmeVN0YXRlbWVudEFzVHlwZUFzc2VydGlvbiIsInN0YXRlbWVudFZlcmlmaWVkQXNFcXVhbGl0eSIsInZlcmlmeVN0YXRlbWVudEFzRXF1YWxpdHkiLCJjb21iaW5hdG9yIiwiY29tYmluYXRvclN0YXRlbWVudE5vZGUiLCJnZXRTdGF0ZW1lbnROb2RlIiwibm9kZSIsImNvbWJpbmF0b3JOb2RlIiwibm9kZVZlcmlmaWVkIiwidmVyaWZ5Tm9kZSIsInN0YXRlbWVudFZlcmlmaWVkQWdhaW5zdENvbWJpbmF0b3IiLCJjb21iaW5hdG9ycyIsImdldENvbWJpbmF0b3JzIiwiYnJhY2tldGVkQ29tYmluYXRvciIsImZpbmQiLCJ0eXBlQXNzZXJ0aW9uTm9kZSIsInR5cGVBc3NlcnRpb25WZXJpZmllZCIsInZlcmlmeVR5cGVBc3NlcnRpb24iLCJlcXVhbGl0eSIsIkVxdWFsaXR5IiwiZnJvbVN0YXRlbWVudE5vZGUiLCJlcXVhbGl0aWVzIiwiZ2V0RXF1YWxpdGllcyIsImVxdWFsaXR5RXF1YXRlcyIsImVxdWF0ZSIsIm5vZGVUZXJtaW5hbE5vZGUiLCJpc1Rlcm1pbmFsTm9kZSIsImNvbWJpbmF0b3JOb2RlVGVybWluYWxOb2RlIiwidGVybWluYWxOb2RlIiwiY29tYmluYXRvclRlcm1pbmFsTm9kZSIsInRlcm1pbmFsTm9kZVZlcmlmaWVkIiwidmVyaWZ5VGVybWluYWxOb2RlIiwibm9uVGVybWluYWxOb2RlIiwiY29tYmluYXRvck5vblRlcm1pbmFsTm9kZSIsIm5vblRlcm1pbmFsTm9kZVZlcmlmaWVkIiwidmVyaWZ5Tm9uVGVybWluYWxOb2RlIiwidmVyaWZ5Tm9kZXMiLCJub2RlcyIsImNvbWJpbmF0b3JOb2RlcyIsIm5vZGVzVmVyaWZpZWQiLCJub2Rlc0xlbmd0aCIsImxlbmd0aCIsImNvbWJpbmF0b3JOb2Rlc0xlbmd0aCIsImV2ZXJ5IiwiaW5kZXgiLCJtYXRjaGVzIiwibWF0Y2giLCJydWxlTmFtZSIsImdldFJ1bGVOYW1lIiwiY29tYmluYXRvclJ1bGVOYW1lIiwiQVJHVU1FTlRfUlVMRV9OQU1FIiwiYXJndW1lbnROb2RlIiwiY29tYmluYXRvckFyZ3VtZW50Tm9kZSIsImFyZ3VtZW50Tm9kZVZlcmlmaWVkIiwidmVyaWZ5QXJndW1lbnROb2RlIiwiTUVUQV9BUkdVTUVOVF9SVUxFX05BTUUiLCJtZXRhQXJndW1lbnROb2RlIiwiY29tYmluYXRvck1ldGFhcmd1bWVudE5vZGUiLCJtZXRhQXJndW1lbnROb2RlVmVyaWZpZWQiLCJ2ZXJpZnlNZXRhYXJndW1lbnROb2RlIiwiY2hpbGROb2RlcyIsImdldENoaWxkTm9kZXMiLCJjb21iaW5hdG9yQ2hpbGROb2RlcyIsInRlcm1Ob2RlIiwiYXJndW1lbnRTdHJpbmciLCJub2RlQXNTdHJpbmciLCJlcnJvciIsInR5cGVzIiwidGVybVZlcmlmaWVkIiwidmVyaWZ5VGVybSIsImZpcnN0VHlwZSIsImZpcnN0IiwidGVybVR5cGUiLCJ0eXBlTm9kZSIsInR5cGVOYW1lIiwidHlwZU5hbWVGcm9tVHlwZU5vZGUiLCJ0eXBlIiwiT0JKRUNUX1RZUEVfTkFNRSIsIm9iamVjdFR5cGUiLCJmaW5kVHlwZUJ5VHlwZU5hbWUiLCJzdGF0ZW1lbnRUeXBlRXF1YWxUb09yU3ViVHlwZU9mVHlwZSIsImlzRXF1YWxUb09yU3ViVHlwZU9mIiwiY29tYmluYXRvck1ldGFUWXBlTm9kZSIsIm1ldGFBcmd1bWVudFN0cmluZyIsImNvbWJpbmF0b3JNZXRhYXJndW1lbnRTdHJpbmciLCJjb21iaW5hdG9yTWV0YVR5cGVUZXJtaW5hbE5vZGUiLCJjb250ZW50IiwiZ2V0Q29udGVudCIsImNvbnRlbnRTdGF0ZW1lbnRNZXRhVHlwZSIsIlNUQVRFTUVOVF9NRVRBX1RZUEUiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7OztJQXFCQSxPQXNCQztlQXRCdUJBOztJQXdCUkMsZ0NBQWdDO2VBQWhDQTs7OzZEQTNDSzt5REFDRTs4REFDUzt5REFDQTtxQkFFVjtxQkFDSzt5QkFDTTt5QkFDRztxQkFDWTt5QkFDWTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUU1RCxJQUFNQyxnQkFBZ0JDLElBQUFBLGdCQUFTLEVBQUMsb0JBQzFCQyxnQkFBZ0JELElBQUFBLGdCQUFTLEVBQUMsb0JBQzFCRSxvQkFBb0JGLElBQUFBLGdCQUFTLEVBQUMsNEJBQzlCRyxxQkFBcUJILElBQUFBLGdCQUFTLEVBQUMsNkJBQy9CSSx5QkFBeUJKLElBQUFBLGdCQUFTLEVBQUMsOEJBQ25DSyw0QkFBNEJMLElBQUFBLGdCQUFTLEVBQUM7QUFFN0IsU0FBU0gsZ0JBQWdCUyxhQUFhLEVBQUVDLFVBQVUsRUFBRUMsT0FBTyxFQUFFQyxPQUFPLEVBQUU7SUFDbkYsSUFBSUMsb0JBQW9CLEtBQUs7SUFFN0IsSUFBSSxDQUFDQSxtQkFBbUI7UUFDdEIsSUFBTUMsc0NBQXNDQyxrQ0FBa0NOLGVBQWVHO1FBRTdGQyxvQkFBb0JDLHFDQUFzQyxHQUFHO0lBQy9ELENBQUM7SUFFRCxJQUFJLENBQUNELG1CQUFtQjtRQUN0QixJQUFNRyxtQ0FBbUNDLCtCQUErQlIsZUFBZUMsWUFBWUMsU0FBU0M7UUFFNUdDLG9CQUFvQkcsa0NBQWtDLEdBQUc7SUFDM0QsQ0FBQztJQUVELElBQUksQ0FBQ0gsbUJBQW1CO1FBQ3RCLElBQU1LLDhCQUE4QkMsMEJBQTBCVixlQUFlRSxTQUFTQztRQUV0RkMsb0JBQW9CSyw2QkFBOEIsRUFBRTtJQUN0RCxDQUFDO0lBRUQsT0FBT0w7QUFDVDtBQUVPLFNBQVNaLGlDQUFpQ1EsYUFBYSxFQUFFVyxVQUFVLEVBQUVSLE9BQU8sRUFBRTtJQUNuRixJQUFNUywwQkFBMEJELFdBQVdFLGdCQUFnQixJQUNyREMsT0FBT2QsZUFDUGUsaUJBQWlCSCx5QkFDakJJLGVBQWVDLFdBQVdILE1BQU1DLGdCQUFnQlosVUFDaERlLHFDQUFxQ0YsY0FBZSxHQUFHO0lBRTdELE9BQU9FO0FBQ1Q7QUFFQSxTQUFTWixrQ0FBa0NOLGFBQWEsRUFBRUcsT0FBTyxFQUFFO0lBQ2pFLElBQUlFLHNDQUFzQyxLQUFLO0lBRS9DLElBQUljLGNBQWNoQixRQUFRaUIsY0FBYztJQUV4Q0QsY0FBYztRQUNaRSxrQkFBbUI7S0FFcEIsQ0FIYSxPQUVaLG1CQUFHRjtJQUdMLElBQU1SLGFBQWFRLFlBQVlHLElBQUksQ0FBQyxTQUFDWCxZQUFlO1FBQ2xELElBQU1PLHFDQUFxQzFCLGlDQUFpQ1EsZUFBZVcsWUFBWVI7UUFFdkcsSUFBSWUsb0NBQW9DO1lBQ3RDLE9BQU8sSUFBSTtRQUNiLENBQUM7SUFDSCxNQUFNLElBQUk7SUFFVixJQUFJUCxlQUFlLElBQUksRUFBRTtRQUN2Qk4sc0NBQXNDLElBQUk7SUFDNUMsQ0FBQztJQUVELE9BQU9BO0FBQ1Q7QUFFQSxTQUFTRywrQkFBK0JSLGFBQWEsRUFBRUMsVUFBVSxFQUFFQyxPQUFPLEVBQUVDLE9BQU8sRUFBRTtJQUNuRixJQUFJSSxtQ0FBbUMsS0FBSztJQUU1QyxJQUFNZ0Isb0JBQW9CekIsdUJBQXVCRTtJQUVqRCxJQUFJdUIsc0JBQXNCLElBQUksRUFBRTtRQUM5QixJQUFNQyx3QkFBd0JDLElBQUFBLGFBQW1CLEVBQUNGLG1CQUFtQnRCLFlBQVlDLFNBQVNDO1FBRTFGSSxtQ0FBbUNpQix1QkFBdUIsR0FBRztJQUMvRCxDQUFDO0lBRUQsT0FBT2pCO0FBQ1Q7QUFFQSxTQUFTRywwQkFBMEJWLGFBQWEsRUFBRUUsT0FBTyxFQUFFQyxPQUFPLEVBQUU7SUFDbEUsSUFBSU0sOEJBQThCLEtBQUs7SUFFdkMsSUFBTWlCLFdBQVdDLGlCQUFRLENBQUNDLGlCQUFpQixDQUFDNUIsZUFBZUc7SUFFM0QsSUFBSXVCLGFBQWEsSUFBSSxFQUFFO1FBQ3JCakIsOEJBQThCLElBQUksRUFBRSxHQUFHO1FBRXZDLElBQUlQLFNBQVM7WUFDWCxJQUFNMkIsYUFBYTFCLFFBQVEyQixhQUFhO1lBRXhDLElBQUlELGVBQWUsSUFBSSxFQUFFO2dCQUN2QixJQUFNRSxrQkFBa0JMLFNBQVNNLE1BQU0sQ0FBQ0gsWUFBWTFCO2dCQUVwRE0sOEJBQThCc0IsaUJBQWlCLEdBQUc7WUFDcEQsQ0FBQztRQUNILENBQUM7SUFDSCxDQUFDO0lBRUQsT0FBT3RCO0FBQ1Q7QUFFQSxTQUFTUSxXQUFXSCxJQUFJLEVBQUVDLGNBQWMsRUFBRVosT0FBTyxFQUFFO0lBQ2pELElBQUlhO0lBRUosSUFBTWlCLG1CQUFtQm5CLEtBQUtvQixjQUFjLElBQ3RDQyw2QkFBNkJwQixlQUFlbUIsY0FBYztJQUVoRSxJQUFJRCxxQkFBcUJFLDRCQUE0QjtRQUNuRCxJQUFJRixrQkFBa0I7WUFDcEIsSUFBTUcsZUFBZXRCLE1BQ2Z1Qix5QkFBeUJ0QixnQkFDekJ1Qix1QkFBdUJDLG1CQUFtQkgsY0FBY0Msd0JBQXdCbEM7WUFFdEZhLGVBQWVzQixzQkFBdUIsR0FBRztRQUMzQyxPQUFPO1lBQ0wsSUFBTUUsa0JBQWtCMUIsTUFDbEIyQiw0QkFBNEIxQixnQkFDNUIyQiwwQkFBMEJDLHNCQUFzQkgsaUJBQWlCQywyQkFBMkJ0QztZQUVsR2EsZUFBZTBCLHlCQUF5QixHQUFHO1FBQzdDLENBQUM7SUFDSCxDQUFDO0lBRUQsT0FBTzFCO0FBQ1Q7QUFFQSxTQUFTNEIsWUFBWUMsS0FBSyxFQUFFQyxlQUFlLEVBQUUzQyxPQUFPLEVBQUU7SUFDcEQsSUFBSTRDLGdCQUFnQixLQUFLO0lBRXpCLElBQU1DLGNBQWNILE1BQU1JLE1BQU0sRUFDMUJDLHdCQUF3QkosZ0JBQWdCRyxNQUFNO0lBRXBELElBQUlELGdCQUFnQkUsdUJBQXVCO1FBQ3pDSCxnQkFBZ0JGLE1BQU1NLEtBQUssQ0FBQyxTQUFDckMsTUFBTXNDLE9BQVU7WUFDM0MsSUFBTXJDLGlCQUFpQitCLGVBQWUsQ0FBQ00sTUFBTSxFQUN2Q3BDLGVBQWVDLFdBQVdILE1BQU1DLGdCQUFnQlo7WUFFdEQsSUFBSWEsY0FBYztnQkFDaEIsT0FBTyxJQUFJO1lBQ2IsQ0FBQztRQUNIO0lBQ0YsQ0FBQztJQUVELE9BQU8rQjtBQUNUO0FBRUEsU0FBU1IsbUJBQW1CSCxZQUFZLEVBQUVDLHNCQUFzQixFQUFFbEMsT0FBTyxFQUFFO0lBQ3pFLElBQUltQyx1QkFBdUIsS0FBSztJQUVoQyxJQUFNZSxVQUFVakIsYUFBYWtCLEtBQUssQ0FBQ2pCO0lBRW5DLElBQUlnQixTQUFTO1FBQ1hmLHVCQUF1QixJQUFJO0lBQzdCLENBQUM7SUFFRCxPQUFPQTtBQUNUO0FBRUEsU0FBU0ssc0JBQXNCSCxlQUFlLEVBQUVDLHlCQUF5QixFQUFFdEMsT0FBTyxFQUFFO0lBQ2xGLElBQUl1QywwQkFBMEIsS0FBSztJQUVuQyxJQUFNYSxXQUFXZixnQkFBZ0JnQixXQUFXLElBQ3RDQyxxQkFBcUJoQiwwQkFBMEJlLFdBQVcsSUFBSSxHQUFHO0lBRXZFLElBQUlELGFBQWFFLG9CQUFvQjtRQUNuQyxPQUFRRjtZQUNOLEtBQUtHLDZCQUFrQjtnQkFBRTtvQkFDdkIsSUFBTUMsZUFBZW5CLGlCQUNmb0IseUJBQXlCbkIsMkJBQ3pCb0IsdUJBQXVCQyxtQkFBbUJILGNBQWNDLHdCQUF3QnpEO29CQUV0RnVDLDBCQUEwQm1CLHNCQUFzQixHQUFHO29CQUVuRCxLQUFNO2dCQUNSO1lBRUEsS0FBS0Usa0NBQXVCO2dCQUFFO29CQUM1QixJQUFNQyxtQkFBbUJ4QixpQkFDbkJ5Qiw2QkFBNkJ4QiwyQkFDN0J5QiwyQkFBMkJDLHVCQUF1Qkgsa0JBQWtCQyw0QkFBNEI5RDtvQkFFdEd1QywwQkFBMEJ3QiwwQkFBMEIsR0FBRztvQkFFdkQsS0FBTTtnQkFDUjtZQUVBO2dCQUFTO29CQUNQLElBQU1FLGFBQWE1QixnQkFBZ0I2QixhQUFhLElBQzFDQyx1QkFBdUI3QiwwQkFBMEI0QixhQUFhLElBQzlEeEIsUUFBUXVCLFlBQ1J0QixrQkFBa0J3QixzQkFDbEJ2QixnQkFBZ0JILFlBQVlDLE9BQU9DLGlCQUFpQjNDO29CQUUxRHVDLDBCQUEwQkssZUFBZSxHQUFHO29CQUU1QyxLQUFNO2dCQUNSO1FBQ0Y7SUFDRixDQUFDO0lBRUQsT0FBT0w7QUFDVDtBQUVBLFNBQVNvQixtQkFBbUJILFlBQVksRUFBRUMsc0JBQXNCLEVBQUV6RCxPQUFPLEVBQUU7SUFDekUsSUFBSTBELHVCQUF1QixLQUFLO0lBRWhDLElBQU1VLFdBQVc5RSxjQUFja0U7SUFFL0IsSUFBSVksYUFBYSxJQUFJLEVBQUU7UUFDckIsSUFBTUMsaUJBQWlCckUsUUFBUXNFLFlBQVksQ0FBQ2Q7UUFFNUN4RCxRQUFRdUUsS0FBSyxDQUFDLEFBQUMsT0FBcUIsT0FBZkYsZ0JBQWUsMkNBQXlDYjtJQUMvRSxPQUFPO1FBQ0wsSUFBTWdCLFFBQVEsRUFBRSxFQUNWQyxlQUFlQyxJQUFBQSxhQUFVLEVBQUNOLFVBQVVJLE9BQU94RTtRQUVqRCxJQUFJeUUsY0FBYztZQUNoQixJQUFNRSxZQUFZQyxJQUFBQSxZQUFLLEVBQUNKLFFBQ2xCSyxXQUFXRixXQUNYRyxXQUFXdEYsY0FBY2lFLHlCQUN6QnNCLFdBQVdDLElBQUFBLDJCQUFvQixFQUFDRixXQUNoQ0csT0FBTyxBQUFDRixhQUFhRywyQkFBZ0IsR0FDNUJDLGlCQUFVLEdBQ1JuRixRQUFRb0Ysa0JBQWtCLENBQUNMLFNBQVMsRUFDL0NNLHNDQUFzQ1IsU0FBU1Msb0JBQW9CLENBQUNMO1lBRTFFLElBQUlJLHFDQUFxQztnQkFDdkMzQix1QkFBdUIsSUFBSTtZQUM3QixDQUFDO1FBQ0gsQ0FBQztJQUNILENBQUM7SUFFRCxPQUFPQTtBQUNUO0FBRUEsU0FBU00sdUJBQXVCSCxnQkFBZ0IsRUFBRUMsMEJBQTBCLEVBQUU5RCxPQUFPLEVBQUU7SUFDckYsSUFBSStELDJCQUEyQixLQUFLO0lBRXBDLElBQU1sRSxnQkFBZ0JILG1CQUFtQm1FLG1CQUNuQzBCLHlCQUF5QjlGLGtCQUFrQnFFO0lBRWpELElBQUlqRSxrQkFBa0IsSUFBSSxFQUFFO1FBQzFCLElBQU0yRixxQkFBcUJ4RixRQUFRc0UsWUFBWSxDQUFDVDtRQUVoRDdELFFBQVF1RSxLQUFLLENBQUMsQUFBQyxtQ0FBcUQsT0FBbkJpQixvQkFBbUIsaUJBQWUzQjtJQUNyRixPQUFPO1FBQ0wsSUFBSTBCLDJCQUEyQixJQUFJLEVBQUU7WUFDbkMsSUFBTUUsK0JBQStCekYsUUFBUXNFLFlBQVksQ0FBQ1I7WUFFMUQ5RCxRQUFRdUUsS0FBSyxDQUFDLEFBQUMsbUNBQStELE9BQTdCa0IsOEJBQTZCLGlCQUFlNUI7UUFDL0YsT0FBTztZQUNMLElBQU02QixpQ0FBaUM5RiwwQkFBMEIyRix5QkFDM0RJLFVBQVVELCtCQUErQkUsVUFBVSxJQUNuREMsMkJBQTRCRixZQUFZRyw4QkFBbUI7WUFFakUsSUFBSSxDQUFDRCwwQkFBMEI7Z0JBQzdCN0YsUUFBUXVFLEtBQUssQ0FBQyxBQUFDLHFEQUE0RCxPQUFSb0IsU0FBUSxPQUFLOUI7WUFDbEYsT0FBTztnQkFDTEUsMkJBQTJCLElBQUk7WUFDakMsQ0FBQztRQUNILENBQUM7SUFDSCxDQUFDO0lBRUQsT0FBT0E7QUFDVCJ9