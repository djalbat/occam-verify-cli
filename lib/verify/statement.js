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
var termNodeQuery = (0, _query.nodeQuery)("/argument/term!"), typeNodeQuery = (0, _query.nodeQuery)("/argument/type!"), metaTypeNodeQuery = (0, _query.nodeQuery)("/metaArgument/metaType!/@meta-type"), statementNodeQuery = (0, _query.nodeQuery)("/metaArgument/statement!"), typeAssertionNodeQuery = (0, _query.nodeQuery)("/statement/typeAssertion!");
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
        context.error(argumentNode, "The ".concat(argumentString, " argument should be a term, not a type"));
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
    var statementNode = statementNodeQuery(metaArgumentNode);
    if (statementNode === null) {
        var metaArgumentString = context.nodeAsString(metaArgumentNode);
        context.error(metaArgumentNode, "The '".concat(metaArgumentString, "' meta-argument should be a statement, not a meta-type."));
    } else {
        var derived = false, assertions = [], statementVerified = verifyStatement(statementNode, assertions, derived, context);
        if (statementVerified) {
            var combinatorMetaTYpeNode = metaTypeNodeQuery(combinatorMetaargumentNode);
            if (combinatorMetaTYpeNode !== null) {
                var terminalNode = combinatorMetaTYpeNode, terminalNodeContent = terminalNode.getContent(), terminalNodeContentStatementMetaType = terminalNodeContent === _metaTypes.STATEMENT_META_TYPE;
                metaArgumentNodeVerified = terminalNodeContentStatementMetaType; ///
            }
            if (!metaArgumentNodeVerified) {
                var combinatorMetaargumentString = context.nodeAsString(combinatorMetaargumentNode);
                context.error(metaArgumentNode, "The '".concat(combinatorMetaargumentString, "' combinator meta-argument should be the 'Statement' meta-type."));
            }
        }
    }
    return metaArgumentNodeVerified;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92ZXJpZnkvc3RhdGVtZW50LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgRXF1YWxpdHkgZnJvbSBcIi4uL2VxdWFsaXR5XCI7XG5pbXBvcnQgdmVyaWZ5VGVybSBmcm9tIFwiLi4vdmVyaWZ5L3Rlcm1cIjtcbmltcG9ydCBicmFja2V0ZWRDb21iaW5hdG9yIGZyb20gXCIuLi9vY21iaW5hdG9yL2JyYWNrZXRlZFwiO1xuaW1wb3J0IHZlcmlmeVR5cGVBc3NlcnRpb24gZnJvbSBcIi4uL3ZlcmlmeS9hc3NlcnRpb24vdHlwZVwiO1xuXG5pbXBvcnQgeyBmaXJzdCB9IGZyb20gXCIuLi91dGlsaXRpZXMvYXJyYXlcIjtcbmltcG9ydCB7IG9iamVjdFR5cGUgfSBmcm9tIFwiLi4vdHlwZVwiO1xuaW1wb3J0IHsgT0JKRUNUX1RZUEVfTkFNRSB9IGZyb20gXCIuLi90eXBlTmFtZXNcIjtcbmltcG9ydCB7IFNUQVRFTUVOVF9NRVRBX1RZUEUgfSBmcm9tIFwiLi4vbWV0YVR5cGVzXCI7XG5pbXBvcnQgeyBub2RlUXVlcnksIHR5cGVOYW1lRnJvbVR5cGVOb2RlIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9xdWVyeVwiO1xuaW1wb3J0IHsgQVJHVU1FTlRfUlVMRV9OQU1FLCBNRVRBX0FSR1VNRU5UX1JVTEVfTkFNRSB9IGZyb20gXCIuLi9ydWxlTmFtZXNcIjtcblxuY29uc3QgdGVybU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9hcmd1bWVudC90ZXJtIVwiKSxcbiAgICAgIHR5cGVOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvYXJndW1lbnQvdHlwZSFcIiksXG4gICAgICBtZXRhVHlwZU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9tZXRhQXJndW1lbnQvbWV0YVR5cGUhL0BtZXRhLXR5cGVcIiksXG4gICAgICBzdGF0ZW1lbnROb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvbWV0YUFyZ3VtZW50L3N0YXRlbWVudCFcIiksXG4gICAgICB0eXBlQXNzZXJ0aW9uTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3N0YXRlbWVudC90eXBlQXNzZXJ0aW9uIVwiKTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdmVyaWZ5U3RhdGVtZW50KHN0YXRlbWVudE5vZGUsIGFzc2VydGlvbnMsIGRlcml2ZWQsIGNvbnRleHQpIHtcbiAgbGV0IHN0YXRlbWVudFZlcmlmaWVkID0gZmFsc2U7XG5cbiAgaWYgKCFzdGF0ZW1lbnRWZXJpZmllZCkge1xuICAgIGNvbnN0IHN0YXRlbWVudFZlcmlmaWVkQWdhaW5zdENvbWJpbmF0b3JzID0gdmVyaWZ5U3RhdGVtZW50QWdhaW5zdENvbWJpbmF0b3JzKHN0YXRlbWVudE5vZGUsIGNvbnRleHQpO1xuXG4gICAgc3RhdGVtZW50VmVyaWZpZWQgPSBzdGF0ZW1lbnRWZXJpZmllZEFnYWluc3RDb21iaW5hdG9yczsgIC8vL1xuICB9XG5cbiAgaWYgKCFzdGF0ZW1lbnRWZXJpZmllZCkge1xuICAgIGNvbnN0IHN0YXRlbWVudFZlcmlmaWVkQXNUeXBlQXNzZXJ0aW9uID0gdmVyaWZ5U3RhdGVtZW50QXNUeXBlQXNzZXJ0aW9uKHN0YXRlbWVudE5vZGUsIGFzc2VydGlvbnMsIGRlcml2ZWQsIGNvbnRleHQpO1xuXG4gICAgc3RhdGVtZW50VmVyaWZpZWQgPSBzdGF0ZW1lbnRWZXJpZmllZEFzVHlwZUFzc2VydGlvbjsgLy8vXG4gIH1cblxuICBpZiAoIXN0YXRlbWVudFZlcmlmaWVkKSB7XG4gICAgY29uc3Qgc3RhdGVtZW50VmVyaWZpZWRBc0VxdWFsaXR5ID0gdmVyaWZ5U3RhdGVtZW50QXNFcXVhbGl0eShzdGF0ZW1lbnROb2RlLCBkZXJpdmVkLCBjb250ZXh0KTtcblxuICAgIHN0YXRlbWVudFZlcmlmaWVkID0gc3RhdGVtZW50VmVyaWZpZWRBc0VxdWFsaXR5OyAgLy9cbiAgfVxuXG4gIHJldHVybiBzdGF0ZW1lbnRWZXJpZmllZDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHZlcmlmeVN0YXRlbWVudEFnYWluc3RDb21iaW5hdG9yKHN0YXRlbWVudE5vZGUsIGNvbWJpbmF0b3IsIGNvbnRleHQpIHtcbiAgY29uc3QgY29tYmluYXRvclN0YXRlbWVudE5vZGUgPSBjb21iaW5hdG9yLmdldFN0YXRlbWVudE5vZGUoKSxcbiAgICAgICAgbm9kZSA9IHN0YXRlbWVudE5vZGUsICAvLy9cbiAgICAgICAgY29tYmluYXRvck5vZGUgPSBjb21iaW5hdG9yU3RhdGVtZW50Tm9kZSwgLy8vXG4gICAgICAgIG5vZGVWZXJpZmllZCA9IHZlcmlmeU5vZGUobm9kZSwgY29tYmluYXRvck5vZGUsIGNvbnRleHQpLFxuICAgICAgICBzdGF0ZW1lbnRWZXJpZmllZEFnYWluc3RDb21iaW5hdG9yID0gbm9kZVZlcmlmaWVkOyAgLy8vXG5cbiAgcmV0dXJuIHN0YXRlbWVudFZlcmlmaWVkQWdhaW5zdENvbWJpbmF0b3I7XG59XG5cbmZ1bmN0aW9uIHZlcmlmeVN0YXRlbWVudEFnYWluc3RDb21iaW5hdG9ycyhzdGF0ZW1lbnROb2RlLCBjb250ZXh0KSB7XG4gIGxldCBzdGF0ZW1lbnRWZXJpZmllZEFnYWluc3RDb21iaW5hdG9ycyA9IGZhbHNlO1xuXG4gIGxldCBjb21iaW5hdG9ycyA9IGNvbnRleHQuZ2V0Q29tYmluYXRvcnMoKTtcblxuICBjb21iaW5hdG9ycyA9IFsgLy8vXG4gICAgYnJhY2tldGVkQ29tYmluYXRvcixcbiAgICAuLi5jb21iaW5hdG9yc1xuICBdO1xuXG4gIGNvbnN0IGNvbWJpbmF0b3IgPSBjb21iaW5hdG9ycy5maW5kKChjb21iaW5hdG9yKSA9PiB7XG4gICAgY29uc3Qgc3RhdGVtZW50VmVyaWZpZWRBZ2FpbnN0Q29tYmluYXRvciA9IHZlcmlmeVN0YXRlbWVudEFnYWluc3RDb21iaW5hdG9yKHN0YXRlbWVudE5vZGUsIGNvbWJpbmF0b3IsIGNvbnRleHQpO1xuXG4gICAgaWYgKHN0YXRlbWVudFZlcmlmaWVkQWdhaW5zdENvbWJpbmF0b3IpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfSkgfHwgbnVsbDtcblxuICBpZiAoY29tYmluYXRvciAhPT0gbnVsbCkge1xuICAgIHN0YXRlbWVudFZlcmlmaWVkQWdhaW5zdENvbWJpbmF0b3JzID0gdHJ1ZTtcbiAgfVxuXG4gIHJldHVybiBzdGF0ZW1lbnRWZXJpZmllZEFnYWluc3RDb21iaW5hdG9ycztcbn1cblxuZnVuY3Rpb24gdmVyaWZ5U3RhdGVtZW50QXNUeXBlQXNzZXJ0aW9uKHN0YXRlbWVudE5vZGUsIGFzc2VydGlvbnMsIGRlcml2ZWQsIGNvbnRleHQpIHtcbiAgbGV0IHN0YXRlbWVudFZlcmlmaWVkQXNUeXBlQXNzZXJ0aW9uID0gZmFsc2U7XG5cbiAgY29uc3QgdHlwZUFzc2VydGlvbk5vZGUgPSB0eXBlQXNzZXJ0aW9uTm9kZVF1ZXJ5KHN0YXRlbWVudE5vZGUpO1xuXG4gIGlmICh0eXBlQXNzZXJ0aW9uTm9kZSAhPT0gbnVsbCkge1xuICAgIGNvbnN0IHR5cGVBc3NlcnRpb25WZXJpZmllZCA9IHZlcmlmeVR5cGVBc3NlcnRpb24odHlwZUFzc2VydGlvbk5vZGUsIGFzc2VydGlvbnMsIGRlcml2ZWQsIGNvbnRleHQpO1xuXG4gICAgc3RhdGVtZW50VmVyaWZpZWRBc1R5cGVBc3NlcnRpb24gPSB0eXBlQXNzZXJ0aW9uVmVyaWZpZWQ7IC8vL1xuICB9XG5cbiAgcmV0dXJuIHN0YXRlbWVudFZlcmlmaWVkQXNUeXBlQXNzZXJ0aW9uO1xufVxuXG5mdW5jdGlvbiB2ZXJpZnlTdGF0ZW1lbnRBc0VxdWFsaXR5KHN0YXRlbWVudE5vZGUsIGRlcml2ZWQsIGNvbnRleHQpIHtcbiAgbGV0IHN0YXRlbWVudFZlcmlmaWVkQXNFcXVhbGl0eSA9IGZhbHNlO1xuXG4gIGNvbnN0IGVxdWFsaXR5ID0gRXF1YWxpdHkuZnJvbVN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSwgY29udGV4dCk7XG5cbiAgaWYgKGVxdWFsaXR5ICE9PSBudWxsKSB7XG4gICAgc3RhdGVtZW50VmVyaWZpZWRBc0VxdWFsaXR5ID0gdHJ1ZTsgLy8vXG5cbiAgICBpZiAoZGVyaXZlZCkge1xuICAgICAgY29uc3QgZXF1YWxpdGllcyA9IGNvbnRleHQuZ2V0RXF1YWxpdGllcygpO1xuXG4gICAgICBpZiAoZXF1YWxpdGllcyAhPT0gbnVsbCkge1xuICAgICAgICBjb25zdCBlcXVhbGl0eUVxdWF0ZXMgPSBlcXVhbGl0eS5lcXVhdGUoZXF1YWxpdGllcywgY29udGV4dCk7XG5cbiAgICAgICAgc3RhdGVtZW50VmVyaWZpZWRBc0VxdWFsaXR5ID0gZXF1YWxpdHlFcXVhdGVzOyAvLy9cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gc3RhdGVtZW50VmVyaWZpZWRBc0VxdWFsaXR5O1xufVxuXG5mdW5jdGlvbiB2ZXJpZnlOb2RlKG5vZGUsIGNvbWJpbmF0b3JOb2RlLCBjb250ZXh0KSB7XG4gIGxldCBub2RlVmVyaWZpZWQ7XG5cbiAgY29uc3Qgbm9kZVRlcm1pbmFsTm9kZSA9IG5vZGUuaXNUZXJtaW5hbE5vZGUoKSxcbiAgICAgICAgY29tYmluYXRvck5vZGVUZXJtaW5hbE5vZGUgPSBjb21iaW5hdG9yTm9kZS5pc1Rlcm1pbmFsTm9kZSgpO1xuXG4gIGlmIChub2RlVGVybWluYWxOb2RlID09PSBjb21iaW5hdG9yTm9kZVRlcm1pbmFsTm9kZSkge1xuICAgIGlmIChub2RlVGVybWluYWxOb2RlKSB7XG4gICAgICBjb25zdCB0ZXJtaW5hbE5vZGUgPSBub2RlLCAgLy8vXG4gICAgICAgICAgICBjb21iaW5hdG9yVGVybWluYWxOb2RlID0gY29tYmluYXRvck5vZGUsICAvLy9cbiAgICAgICAgICAgIHRlcm1pbmFsTm9kZVZlcmlmaWVkID0gdmVyaWZ5VGVybWluYWxOb2RlKHRlcm1pbmFsTm9kZSwgY29tYmluYXRvclRlcm1pbmFsTm9kZSwgY29udGV4dCk7XG5cbiAgICAgIG5vZGVWZXJpZmllZCA9IHRlcm1pbmFsTm9kZVZlcmlmaWVkOyAgLy8vXG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IG5vblRlcm1pbmFsTm9kZSA9IG5vZGUsIC8vL1xuICAgICAgICAgICAgY29tYmluYXRvck5vblRlcm1pbmFsTm9kZSA9IGNvbWJpbmF0b3JOb2RlLCAgLy8vXG4gICAgICAgICAgICBub25UZXJtaW5hbE5vZGVWZXJpZmllZCA9IHZlcmlmeU5vblRlcm1pbmFsTm9kZShub25UZXJtaW5hbE5vZGUsIGNvbWJpbmF0b3JOb25UZXJtaW5hbE5vZGUsIGNvbnRleHQpO1xuXG4gICAgICBub2RlVmVyaWZpZWQgPSBub25UZXJtaW5hbE5vZGVWZXJpZmllZDsgLy8vXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG5vZGVWZXJpZmllZDtcbn1cblxuZnVuY3Rpb24gdmVyaWZ5Tm9kZXMobm9kZXMsIGNvbWJpbmF0b3JOb2RlcywgY29udGV4dCkge1xuICBsZXQgbm9kZXNWZXJpZmllZCA9IGZhbHNlO1xuXG4gIGNvbnN0IG5vZGVzTGVuZ3RoID0gbm9kZXMubGVuZ3RoLFxuICAgICAgICBjb21iaW5hdG9yTm9kZXNMZW5ndGggPSBjb21iaW5hdG9yTm9kZXMubGVuZ3RoO1xuXG4gIGlmIChub2Rlc0xlbmd0aCA9PT0gY29tYmluYXRvck5vZGVzTGVuZ3RoKSB7XG4gICAgbm9kZXNWZXJpZmllZCA9IG5vZGVzLmV2ZXJ5KChub2RlLCBpbmRleCkgPT4ge1xuICAgICAgY29uc3QgY29tYmluYXRvck5vZGUgPSBjb21iaW5hdG9yTm9kZXNbaW5kZXhdLFxuICAgICAgICAgICAgbm9kZVZlcmlmaWVkID0gdmVyaWZ5Tm9kZShub2RlLCBjb21iaW5hdG9yTm9kZSwgY29udGV4dCk7XG5cbiAgICAgIGlmIChub2RlVmVyaWZpZWQpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICByZXR1cm4gbm9kZXNWZXJpZmllZDtcbn1cblxuZnVuY3Rpb24gdmVyaWZ5VGVybWluYWxOb2RlKHRlcm1pbmFsTm9kZSwgY29tYmluYXRvclRlcm1pbmFsTm9kZSwgY29udGV4dCkge1xuICBsZXQgdGVybWluYWxOb2RlVmVyaWZpZWQgPSBmYWxzZTtcblxuICBjb25zdCBtYXRjaGVzID0gdGVybWluYWxOb2RlLm1hdGNoKGNvbWJpbmF0b3JUZXJtaW5hbE5vZGUpO1xuXG4gIGlmIChtYXRjaGVzKSB7XG4gICAgdGVybWluYWxOb2RlVmVyaWZpZWQgPSB0cnVlO1xuICB9XG5cbiAgcmV0dXJuIHRlcm1pbmFsTm9kZVZlcmlmaWVkO1xufVxuXG5mdW5jdGlvbiB2ZXJpZnlOb25UZXJtaW5hbE5vZGUobm9uVGVybWluYWxOb2RlLCBjb21iaW5hdG9yTm9uVGVybWluYWxOb2RlLCBjb250ZXh0KSB7XG4gIGxldCBub25UZXJtaW5hbE5vZGVWZXJpZmllZCA9IGZhbHNlO1xuXG4gIGNvbnN0IHJ1bGVOYW1lID0gbm9uVGVybWluYWxOb2RlLmdldFJ1bGVOYW1lKCksIC8vL1xuICAgICAgICBjb21iaW5hdG9yUnVsZU5hbWUgPSBjb21iaW5hdG9yTm9uVGVybWluYWxOb2RlLmdldFJ1bGVOYW1lKCk7IC8vL1xuXG4gIGlmIChydWxlTmFtZSA9PT0gY29tYmluYXRvclJ1bGVOYW1lKSB7XG4gICAgc3dpdGNoIChydWxlTmFtZSkge1xuICAgICAgY2FzZSBBUkdVTUVOVF9SVUxFX05BTUU6IHtcbiAgICAgICAgY29uc3QgYXJndW1lbnROb2RlID0gbm9uVGVybWluYWxOb2RlLCAvLy9cbiAgICAgICAgICAgICAgY29tYmluYXRvckFyZ3VtZW50Tm9kZSA9IGNvbWJpbmF0b3JOb25UZXJtaW5hbE5vZGUsIC8vL1xuICAgICAgICAgICAgICBhcmd1bWVudE5vZGVWZXJpZmllZCA9IHZlcmlmeUFyZ3VtZW50Tm9kZShhcmd1bWVudE5vZGUsIGNvbWJpbmF0b3JBcmd1bWVudE5vZGUsIGNvbnRleHQpO1xuXG4gICAgICAgIG5vblRlcm1pbmFsTm9kZVZlcmlmaWVkID0gYXJndW1lbnROb2RlVmVyaWZpZWQ7IC8vL1xuXG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgICBjYXNlIE1FVEFfQVJHVU1FTlRfUlVMRV9OQU1FOiB7XG4gICAgICAgIGNvbnN0IG1ldGFBcmd1bWVudE5vZGUgPSBub25UZXJtaW5hbE5vZGUsIC8vL1xuICAgICAgICAgICAgICBjb21iaW5hdG9yTWV0YWFyZ3VtZW50Tm9kZSA9IGNvbWJpbmF0b3JOb25UZXJtaW5hbE5vZGUsIC8vL1xuICAgICAgICAgICAgICBtZXRhQXJndW1lbnROb2RlVmVyaWZpZWQgPSB2ZXJpZnlNZXRhYXJndW1lbnROb2RlKG1ldGFBcmd1bWVudE5vZGUsIGNvbWJpbmF0b3JNZXRhYXJndW1lbnROb2RlLCBjb250ZXh0KTtcblxuICAgICAgICBub25UZXJtaW5hbE5vZGVWZXJpZmllZCA9IG1ldGFBcmd1bWVudE5vZGVWZXJpZmllZDsgLy8vXG5cbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG5cbiAgICAgIGRlZmF1bHQ6IHtcbiAgICAgICAgY29uc3QgY2hpbGROb2RlcyA9IG5vblRlcm1pbmFsTm9kZS5nZXRDaGlsZE5vZGVzKCksXG4gICAgICAgICAgICAgIGNvbWJpbmF0b3JDaGlsZE5vZGVzID0gY29tYmluYXRvck5vblRlcm1pbmFsTm9kZS5nZXRDaGlsZE5vZGVzKCksXG4gICAgICAgICAgICAgIG5vZGVzID0gY2hpbGROb2RlcywgLy8vXG4gICAgICAgICAgICAgIGNvbWJpbmF0b3JOb2RlcyA9IGNvbWJpbmF0b3JDaGlsZE5vZGVzLCAvLy9cbiAgICAgICAgICAgICAgbm9kZXNWZXJpZmllZCA9IHZlcmlmeU5vZGVzKG5vZGVzLCBjb21iaW5hdG9yTm9kZXMsIGNvbnRleHQpO1xuXG4gICAgICAgIG5vblRlcm1pbmFsTm9kZVZlcmlmaWVkID0gbm9kZXNWZXJpZmllZDsgLy8vXG5cbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG5vblRlcm1pbmFsTm9kZVZlcmlmaWVkO1xufVxuXG5mdW5jdGlvbiB2ZXJpZnlBcmd1bWVudE5vZGUoYXJndW1lbnROb2RlLCBjb21iaW5hdG9yQXJndW1lbnROb2RlLCBjb250ZXh0KSB7XG4gIGxldCBhcmd1bWVudE5vZGVWZXJpZmllZCA9IGZhbHNlO1xuXG4gIGNvbnN0IHRlcm1Ob2RlID0gdGVybU5vZGVRdWVyeShhcmd1bWVudE5vZGUpO1xuXG4gIGlmICh0ZXJtTm9kZSA9PT0gbnVsbCkge1xuICAgIGNvbnN0IGFyZ3VtZW50U3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcoYXJndW1lbnROb2RlKTtcblxuICAgIGNvbnRleHQuZXJyb3IoYXJndW1lbnROb2RlLCBgVGhlICR7YXJndW1lbnRTdHJpbmd9IGFyZ3VtZW50IHNob3VsZCBiZSBhIHRlcm0sIG5vdCBhIHR5cGVgKTtcbiAgfSBlbHNlIHtcbiAgICBjb25zdCB0eXBlcyA9IFtdLFxuICAgICAgICAgIHRlcm1WZXJpZmllZCA9IHZlcmlmeVRlcm0odGVybU5vZGUsIHR5cGVzLCBjb250ZXh0KTtcblxuICAgIGlmICh0ZXJtVmVyaWZpZWQpIHtcbiAgICAgIGNvbnN0IGZpcnN0VHlwZSA9IGZpcnN0KHR5cGVzKSxcbiAgICAgICAgICAgIHRlcm1UeXBlID0gZmlyc3RUeXBlLCAvLy9cbiAgICAgICAgICAgIHR5cGVOb2RlID0gdHlwZU5vZGVRdWVyeShjb21iaW5hdG9yQXJndW1lbnROb2RlKSxcbiAgICAgICAgICAgIHR5cGVOYW1lID0gdHlwZU5hbWVGcm9tVHlwZU5vZGUodHlwZU5vZGUpLFxuICAgICAgICAgICAgdHlwZSA9ICh0eXBlTmFtZSA9PT0gT0JKRUNUX1RZUEVfTkFNRSkgP1xuICAgICAgICAgICAgICAgICAgICAgb2JqZWN0VHlwZSA6ICAvLy9cbiAgICAgICAgICAgICAgICAgICAgICAgY29udGV4dC5maW5kVHlwZUJ5VHlwZU5hbWUodHlwZU5hbWUpLFxuICAgICAgICAgICAgc3RhdGVtZW50VHlwZUVxdWFsVG9PclN1YlR5cGVPZlR5cGUgPSB0ZXJtVHlwZS5pc0VxdWFsVG9PclN1YlR5cGVPZih0eXBlKTtcblxuICAgICAgaWYgKHN0YXRlbWVudFR5cGVFcXVhbFRvT3JTdWJUeXBlT2ZUeXBlKSB7XG4gICAgICAgIGFyZ3VtZW50Tm9kZVZlcmlmaWVkID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gYXJndW1lbnROb2RlVmVyaWZpZWQ7XG59XG5cbmZ1bmN0aW9uIHZlcmlmeU1ldGFhcmd1bWVudE5vZGUobWV0YUFyZ3VtZW50Tm9kZSwgY29tYmluYXRvck1ldGFhcmd1bWVudE5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IG1ldGFBcmd1bWVudE5vZGVWZXJpZmllZCA9IGZhbHNlO1xuXG4gIGNvbnN0IHN0YXRlbWVudE5vZGUgPSBzdGF0ZW1lbnROb2RlUXVlcnkobWV0YUFyZ3VtZW50Tm9kZSk7XG5cbiAgaWYgKHN0YXRlbWVudE5vZGUgPT09IG51bGwpIHtcbiAgICBjb25zdCBtZXRhQXJndW1lbnRTdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhtZXRhQXJndW1lbnROb2RlKTtcblxuICAgIGNvbnRleHQuZXJyb3IobWV0YUFyZ3VtZW50Tm9kZSwgYFRoZSAnJHttZXRhQXJndW1lbnRTdHJpbmd9JyBtZXRhLWFyZ3VtZW50IHNob3VsZCBiZSBhIHN0YXRlbWVudCwgbm90IGEgbWV0YS10eXBlLmApO1xuICB9IGVsc2Uge1xuICAgIGNvbnN0IGRlcml2ZWQgPSBmYWxzZSxcbiAgICAgICAgICBhc3NlcnRpb25zID0gW10sXG4gICAgICAgICAgc3RhdGVtZW50VmVyaWZpZWQgPSB2ZXJpZnlTdGF0ZW1lbnQoc3RhdGVtZW50Tm9kZSwgYXNzZXJ0aW9ucywgZGVyaXZlZCwgY29udGV4dCk7XG5cbiAgICBpZiAoc3RhdGVtZW50VmVyaWZpZWQpIHtcbiAgICAgIGNvbnN0IGNvbWJpbmF0b3JNZXRhVFlwZU5vZGUgPSBtZXRhVHlwZU5vZGVRdWVyeShjb21iaW5hdG9yTWV0YWFyZ3VtZW50Tm9kZSk7XG5cbiAgICAgIGlmIChjb21iaW5hdG9yTWV0YVRZcGVOb2RlICE9PSBudWxsKSB7XG4gICAgICAgIGNvbnN0IHRlcm1pbmFsTm9kZSA9IGNvbWJpbmF0b3JNZXRhVFlwZU5vZGUsICAvLy9cbiAgICAgICAgICAgICAgdGVybWluYWxOb2RlQ29udGVudCA9IHRlcm1pbmFsTm9kZS5nZXRDb250ZW50KCksXG4gICAgICAgICAgICAgIHRlcm1pbmFsTm9kZUNvbnRlbnRTdGF0ZW1lbnRNZXRhVHlwZSA9ICh0ZXJtaW5hbE5vZGVDb250ZW50ID09PSBTVEFURU1FTlRfTUVUQV9UWVBFKTtcblxuICAgICAgICBtZXRhQXJndW1lbnROb2RlVmVyaWZpZWQgPSB0ZXJtaW5hbE5vZGVDb250ZW50U3RhdGVtZW50TWV0YVR5cGU7ICAvLy9cbiAgICAgIH1cblxuICAgICAgaWYgKCFtZXRhQXJndW1lbnROb2RlVmVyaWZpZWQpIHtcbiAgICAgICAgY29uc3QgY29tYmluYXRvck1ldGFhcmd1bWVudFN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKGNvbWJpbmF0b3JNZXRhYXJndW1lbnROb2RlKTtcblxuICAgICAgICBjb250ZXh0LmVycm9yKG1ldGFBcmd1bWVudE5vZGUsIGBUaGUgJyR7Y29tYmluYXRvck1ldGFhcmd1bWVudFN0cmluZ30nIGNvbWJpbmF0b3IgbWV0YS1hcmd1bWVudCBzaG91bGQgYmUgdGhlICdTdGF0ZW1lbnQnIG1ldGEtdHlwZS5gKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gbWV0YUFyZ3VtZW50Tm9kZVZlcmlmaWVkO1xufVxuIl0sIm5hbWVzIjpbInZlcmlmeVN0YXRlbWVudCIsInZlcmlmeVN0YXRlbWVudEFnYWluc3RDb21iaW5hdG9yIiwidGVybU5vZGVRdWVyeSIsIm5vZGVRdWVyeSIsInR5cGVOb2RlUXVlcnkiLCJtZXRhVHlwZU5vZGVRdWVyeSIsInN0YXRlbWVudE5vZGVRdWVyeSIsInR5cGVBc3NlcnRpb25Ob2RlUXVlcnkiLCJzdGF0ZW1lbnROb2RlIiwiYXNzZXJ0aW9ucyIsImRlcml2ZWQiLCJjb250ZXh0Iiwic3RhdGVtZW50VmVyaWZpZWQiLCJzdGF0ZW1lbnRWZXJpZmllZEFnYWluc3RDb21iaW5hdG9ycyIsInZlcmlmeVN0YXRlbWVudEFnYWluc3RDb21iaW5hdG9ycyIsInN0YXRlbWVudFZlcmlmaWVkQXNUeXBlQXNzZXJ0aW9uIiwidmVyaWZ5U3RhdGVtZW50QXNUeXBlQXNzZXJ0aW9uIiwic3RhdGVtZW50VmVyaWZpZWRBc0VxdWFsaXR5IiwidmVyaWZ5U3RhdGVtZW50QXNFcXVhbGl0eSIsImNvbWJpbmF0b3IiLCJjb21iaW5hdG9yU3RhdGVtZW50Tm9kZSIsImdldFN0YXRlbWVudE5vZGUiLCJub2RlIiwiY29tYmluYXRvck5vZGUiLCJub2RlVmVyaWZpZWQiLCJ2ZXJpZnlOb2RlIiwic3RhdGVtZW50VmVyaWZpZWRBZ2FpbnN0Q29tYmluYXRvciIsImNvbWJpbmF0b3JzIiwiZ2V0Q29tYmluYXRvcnMiLCJicmFja2V0ZWRDb21iaW5hdG9yIiwiZmluZCIsInR5cGVBc3NlcnRpb25Ob2RlIiwidHlwZUFzc2VydGlvblZlcmlmaWVkIiwidmVyaWZ5VHlwZUFzc2VydGlvbiIsImVxdWFsaXR5IiwiRXF1YWxpdHkiLCJmcm9tU3RhdGVtZW50Tm9kZSIsImVxdWFsaXRpZXMiLCJnZXRFcXVhbGl0aWVzIiwiZXF1YWxpdHlFcXVhdGVzIiwiZXF1YXRlIiwibm9kZVRlcm1pbmFsTm9kZSIsImlzVGVybWluYWxOb2RlIiwiY29tYmluYXRvck5vZGVUZXJtaW5hbE5vZGUiLCJ0ZXJtaW5hbE5vZGUiLCJjb21iaW5hdG9yVGVybWluYWxOb2RlIiwidGVybWluYWxOb2RlVmVyaWZpZWQiLCJ2ZXJpZnlUZXJtaW5hbE5vZGUiLCJub25UZXJtaW5hbE5vZGUiLCJjb21iaW5hdG9yTm9uVGVybWluYWxOb2RlIiwibm9uVGVybWluYWxOb2RlVmVyaWZpZWQiLCJ2ZXJpZnlOb25UZXJtaW5hbE5vZGUiLCJ2ZXJpZnlOb2RlcyIsIm5vZGVzIiwiY29tYmluYXRvck5vZGVzIiwibm9kZXNWZXJpZmllZCIsIm5vZGVzTGVuZ3RoIiwibGVuZ3RoIiwiY29tYmluYXRvck5vZGVzTGVuZ3RoIiwiZXZlcnkiLCJpbmRleCIsIm1hdGNoZXMiLCJtYXRjaCIsInJ1bGVOYW1lIiwiZ2V0UnVsZU5hbWUiLCJjb21iaW5hdG9yUnVsZU5hbWUiLCJBUkdVTUVOVF9SVUxFX05BTUUiLCJhcmd1bWVudE5vZGUiLCJjb21iaW5hdG9yQXJndW1lbnROb2RlIiwiYXJndW1lbnROb2RlVmVyaWZpZWQiLCJ2ZXJpZnlBcmd1bWVudE5vZGUiLCJNRVRBX0FSR1VNRU5UX1JVTEVfTkFNRSIsIm1ldGFBcmd1bWVudE5vZGUiLCJjb21iaW5hdG9yTWV0YWFyZ3VtZW50Tm9kZSIsIm1ldGFBcmd1bWVudE5vZGVWZXJpZmllZCIsInZlcmlmeU1ldGFhcmd1bWVudE5vZGUiLCJjaGlsZE5vZGVzIiwiZ2V0Q2hpbGROb2RlcyIsImNvbWJpbmF0b3JDaGlsZE5vZGVzIiwidGVybU5vZGUiLCJhcmd1bWVudFN0cmluZyIsIm5vZGVBc1N0cmluZyIsImVycm9yIiwidHlwZXMiLCJ0ZXJtVmVyaWZpZWQiLCJ2ZXJpZnlUZXJtIiwiZmlyc3RUeXBlIiwiZmlyc3QiLCJ0ZXJtVHlwZSIsInR5cGVOb2RlIiwidHlwZU5hbWUiLCJ0eXBlTmFtZUZyb21UeXBlTm9kZSIsInR5cGUiLCJPQkpFQ1RfVFlQRV9OQU1FIiwib2JqZWN0VHlwZSIsImZpbmRUeXBlQnlUeXBlTmFtZSIsInN0YXRlbWVudFR5cGVFcXVhbFRvT3JTdWJUeXBlT2ZUeXBlIiwiaXNFcXVhbFRvT3JTdWJUeXBlT2YiLCJtZXRhQXJndW1lbnRTdHJpbmciLCJjb21iaW5hdG9yTWV0YVRZcGVOb2RlIiwidGVybWluYWxOb2RlQ29udGVudCIsImdldENvbnRlbnQiLCJ0ZXJtaW5hbE5vZGVDb250ZW50U3RhdGVtZW50TWV0YVR5cGUiLCJTVEFURU1FTlRfTUVUQV9UWVBFIiwiY29tYmluYXRvck1ldGFhcmd1bWVudFN0cmluZyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7O0lBb0JBLE9Bc0JDO2VBdEJ1QkE7O0lBd0JSQyxnQ0FBZ0M7ZUFBaENBOzs7NkRBMUNLO3lEQUNFOzhEQUNTO3lEQUNBO3FCQUVWO3FCQUNLO3lC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