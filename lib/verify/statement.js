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
    context.begin(statementNode);
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
    statementVerified ? context.complete(statementNode) : context.halt(statementNode);
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
        context.error("The ".concat(argumentString, " argument should be a term, not a type"));
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
        context.error("The '".concat(metaArgumentString, "' meta-argument should be a statement, not a meta-type."));
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
                context.error("The '".concat(combinatorMetaargumentString, "' combinator meta-argument should be the 'Statement' meta-type."));
            }
        }
    }
    return metaArgumentNodeVerified;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92ZXJpZnkvc3RhdGVtZW50LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgRXF1YWxpdHkgZnJvbSBcIi4uL2VxdWFsaXR5XCI7XG5pbXBvcnQgdmVyaWZ5VGVybSBmcm9tIFwiLi4vdmVyaWZ5L3Rlcm1cIjtcbmltcG9ydCBicmFja2V0ZWRDb21iaW5hdG9yIGZyb20gXCIuLi9vY21iaW5hdG9yL2JyYWNrZXRlZFwiO1xuaW1wb3J0IHZlcmlmeVR5cGVBc3NlcnRpb24gZnJvbSBcIi4uL3ZlcmlmeS9hc3NlcnRpb24vdHlwZVwiO1xuXG5pbXBvcnQgeyBmaXJzdCB9IGZyb20gXCIuLi91dGlsaXRpZXMvYXJyYXlcIjtcbmltcG9ydCB7IG9iamVjdFR5cGUgfSBmcm9tIFwiLi4vdHlwZVwiO1xuaW1wb3J0IHsgT0JKRUNUX1RZUEVfTkFNRSB9IGZyb20gXCIuLi90eXBlTmFtZXNcIjtcbmltcG9ydCB7IFNUQVRFTUVOVF9NRVRBX1RZUEUgfSBmcm9tIFwiLi4vbWV0YVR5cGVzXCI7XG5pbXBvcnQgeyBub2RlUXVlcnksIHR5cGVOYW1lRnJvbVR5cGVOb2RlIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9xdWVyeVwiO1xuaW1wb3J0IHsgQVJHVU1FTlRfUlVMRV9OQU1FLCBNRVRBX0FSR1VNRU5UX1JVTEVfTkFNRSB9IGZyb20gXCIuLi9ydWxlTmFtZXNcIjtcblxuY29uc3QgdGVybU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9hcmd1bWVudC90ZXJtIVwiKSxcbiAgICAgIHR5cGVOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvYXJndW1lbnQvdHlwZSFcIiksXG4gICAgICBtZXRhVHlwZU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9tZXRhQXJndW1lbnQvbWV0YVR5cGUhL0BtZXRhLXR5cGVcIiksXG4gICAgICBzdGF0ZW1lbnROb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvbWV0YUFyZ3VtZW50L3N0YXRlbWVudCFcIiksXG4gICAgICB0eXBlQXNzZXJ0aW9uTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3N0YXRlbWVudC90eXBlQXNzZXJ0aW9uIVwiKTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdmVyaWZ5U3RhdGVtZW50KHN0YXRlbWVudE5vZGUsIGFzc2VydGlvbnMsIGRlcml2ZWQsIGNvbnRleHQpIHtcbiAgbGV0IHN0YXRlbWVudFZlcmlmaWVkID0gZmFsc2U7XG5cbiAgY29udGV4dC5iZWdpbihzdGF0ZW1lbnROb2RlKTtcblxuICBpZiAoIXN0YXRlbWVudFZlcmlmaWVkKSB7XG4gICAgY29uc3Qgc3RhdGVtZW50VmVyaWZpZWRBZ2FpbnN0Q29tYmluYXRvcnMgPSB2ZXJpZnlTdGF0ZW1lbnRBZ2FpbnN0Q29tYmluYXRvcnMoc3RhdGVtZW50Tm9kZSwgY29udGV4dCk7XG5cbiAgICBzdGF0ZW1lbnRWZXJpZmllZCA9IHN0YXRlbWVudFZlcmlmaWVkQWdhaW5zdENvbWJpbmF0b3JzOyAgLy8vXG4gIH1cblxuICBpZiAoIXN0YXRlbWVudFZlcmlmaWVkKSB7XG4gICAgY29uc3Qgc3RhdGVtZW50VmVyaWZpZWRBc1R5cGVBc3NlcnRpb24gPSB2ZXJpZnlTdGF0ZW1lbnRBc1R5cGVBc3NlcnRpb24oc3RhdGVtZW50Tm9kZSwgYXNzZXJ0aW9ucywgZGVyaXZlZCwgY29udGV4dCk7XG5cbiAgICBzdGF0ZW1lbnRWZXJpZmllZCA9IHN0YXRlbWVudFZlcmlmaWVkQXNUeXBlQXNzZXJ0aW9uOyAvLy9cbiAgfVxuXG4gIGlmICghc3RhdGVtZW50VmVyaWZpZWQpIHtcbiAgICBjb25zdCBzdGF0ZW1lbnRWZXJpZmllZEFzRXF1YWxpdHkgPSB2ZXJpZnlTdGF0ZW1lbnRBc0VxdWFsaXR5KHN0YXRlbWVudE5vZGUsIGRlcml2ZWQsIGNvbnRleHQpO1xuXG4gICAgc3RhdGVtZW50VmVyaWZpZWQgPSBzdGF0ZW1lbnRWZXJpZmllZEFzRXF1YWxpdHk7ICAvL1xuICB9XG5cbiAgc3RhdGVtZW50VmVyaWZpZWQgP1xuICAgIGNvbnRleHQuY29tcGxldGUoc3RhdGVtZW50Tm9kZSkgOlxuICAgICAgY29udGV4dC5oYWx0KHN0YXRlbWVudE5vZGUpO1xuXG4gIHJldHVybiBzdGF0ZW1lbnRWZXJpZmllZDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHZlcmlmeVN0YXRlbWVudEFnYWluc3RDb21iaW5hdG9yKHN0YXRlbWVudE5vZGUsIGNvbWJpbmF0b3IsIGNvbnRleHQpIHtcbiAgY29uc3QgY29tYmluYXRvclN0YXRlbWVudE5vZGUgPSBjb21iaW5hdG9yLmdldFN0YXRlbWVudE5vZGUoKSxcbiAgICAgICAgbm9kZSA9IHN0YXRlbWVudE5vZGUsICAvLy9cbiAgICAgICAgY29tYmluYXRvck5vZGUgPSBjb21iaW5hdG9yU3RhdGVtZW50Tm9kZSwgLy8vXG4gICAgICAgIG5vZGVWZXJpZmllZCA9IHZlcmlmeU5vZGUobm9kZSwgY29tYmluYXRvck5vZGUsIGNvbnRleHQpLFxuICAgICAgICBzdGF0ZW1lbnRWZXJpZmllZEFnYWluc3RDb21iaW5hdG9yID0gbm9kZVZlcmlmaWVkOyAgLy8vXG5cbiAgcmV0dXJuIHN0YXRlbWVudFZlcmlmaWVkQWdhaW5zdENvbWJpbmF0b3I7XG59XG5cbmZ1bmN0aW9uIHZlcmlmeVN0YXRlbWVudEFnYWluc3RDb21iaW5hdG9ycyhzdGF0ZW1lbnROb2RlLCBjb250ZXh0KSB7XG4gIGxldCBzdGF0ZW1lbnRWZXJpZmllZEFnYWluc3RDb21iaW5hdG9ycyA9IGZhbHNlO1xuXG4gIGxldCBjb21iaW5hdG9ycyA9IGNvbnRleHQuZ2V0Q29tYmluYXRvcnMoKTtcblxuICBjb21iaW5hdG9ycyA9IFsgLy8vXG4gICAgYnJhY2tldGVkQ29tYmluYXRvcixcbiAgICAuLi5jb21iaW5hdG9yc1xuICBdO1xuXG4gIGNvbnN0IGNvbWJpbmF0b3IgPSBjb21iaW5hdG9ycy5maW5kKChjb21iaW5hdG9yKSA9PiB7XG4gICAgY29uc3Qgc3RhdGVtZW50VmVyaWZpZWRBZ2FpbnN0Q29tYmluYXRvciA9IHZlcmlmeVN0YXRlbWVudEFnYWluc3RDb21iaW5hdG9yKHN0YXRlbWVudE5vZGUsIGNvbWJpbmF0b3IsIGNvbnRleHQpO1xuXG4gICAgaWYgKHN0YXRlbWVudFZlcmlmaWVkQWdhaW5zdENvbWJpbmF0b3IpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfSkgfHwgbnVsbDtcblxuICBpZiAoY29tYmluYXRvciAhPT0gbnVsbCkge1xuICAgIHN0YXRlbWVudFZlcmlmaWVkQWdhaW5zdENvbWJpbmF0b3JzID0gdHJ1ZTtcbiAgfVxuXG4gIHJldHVybiBzdGF0ZW1lbnRWZXJpZmllZEFnYWluc3RDb21iaW5hdG9ycztcbn1cblxuZnVuY3Rpb24gdmVyaWZ5U3RhdGVtZW50QXNUeXBlQXNzZXJ0aW9uKHN0YXRlbWVudE5vZGUsIGFzc2VydGlvbnMsIGRlcml2ZWQsIGNvbnRleHQpIHtcbiAgbGV0IHN0YXRlbWVudFZlcmlmaWVkQXNUeXBlQXNzZXJ0aW9uID0gZmFsc2U7XG5cbiAgY29uc3QgdHlwZUFzc2VydGlvbk5vZGUgPSB0eXBlQXNzZXJ0aW9uTm9kZVF1ZXJ5KHN0YXRlbWVudE5vZGUpO1xuXG4gIGlmICh0eXBlQXNzZXJ0aW9uTm9kZSAhPT0gbnVsbCkge1xuICAgIGNvbnN0IHR5cGVBc3NlcnRpb25WZXJpZmllZCA9IHZlcmlmeVR5cGVBc3NlcnRpb24odHlwZUFzc2VydGlvbk5vZGUsIGFzc2VydGlvbnMsIGRlcml2ZWQsIGNvbnRleHQpO1xuXG4gICAgc3RhdGVtZW50VmVyaWZpZWRBc1R5cGVBc3NlcnRpb24gPSB0eXBlQXNzZXJ0aW9uVmVyaWZpZWQ7IC8vL1xuICB9XG5cbiAgcmV0dXJuIHN0YXRlbWVudFZlcmlmaWVkQXNUeXBlQXNzZXJ0aW9uO1xufVxuXG5mdW5jdGlvbiB2ZXJpZnlTdGF0ZW1lbnRBc0VxdWFsaXR5KHN0YXRlbWVudE5vZGUsIGRlcml2ZWQsIGNvbnRleHQpIHtcbiAgbGV0IHN0YXRlbWVudFZlcmlmaWVkQXNFcXVhbGl0eSA9IGZhbHNlO1xuXG4gIGNvbnN0IGVxdWFsaXR5ID0gRXF1YWxpdHkuZnJvbVN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSwgY29udGV4dCk7XG5cbiAgaWYgKGVxdWFsaXR5ICE9PSBudWxsKSB7XG4gICAgc3RhdGVtZW50VmVyaWZpZWRBc0VxdWFsaXR5ID0gdHJ1ZTsgLy8vXG5cbiAgICBpZiAoZGVyaXZlZCkge1xuICAgICAgY29uc3QgZXF1YWxpdGllcyA9IGNvbnRleHQuZ2V0RXF1YWxpdGllcygpO1xuXG4gICAgICBpZiAoZXF1YWxpdGllcyAhPT0gbnVsbCkge1xuICAgICAgICBjb25zdCBlcXVhbGl0eUVxdWF0ZXMgPSBlcXVhbGl0eS5lcXVhdGUoZXF1YWxpdGllcywgY29udGV4dCk7XG5cbiAgICAgICAgc3RhdGVtZW50VmVyaWZpZWRBc0VxdWFsaXR5ID0gZXF1YWxpdHlFcXVhdGVzOyAvLy9cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gc3RhdGVtZW50VmVyaWZpZWRBc0VxdWFsaXR5O1xufVxuXG5mdW5jdGlvbiB2ZXJpZnlOb2RlKG5vZGUsIGNvbWJpbmF0b3JOb2RlLCBjb250ZXh0KSB7XG4gIGxldCBub2RlVmVyaWZpZWQ7XG5cbiAgY29uc3Qgbm9kZVRlcm1pbmFsTm9kZSA9IG5vZGUuaXNUZXJtaW5hbE5vZGUoKSxcbiAgICAgICAgY29tYmluYXRvck5vZGVUZXJtaW5hbE5vZGUgPSBjb21iaW5hdG9yTm9kZS5pc1Rlcm1pbmFsTm9kZSgpO1xuXG4gIGlmIChub2RlVGVybWluYWxOb2RlID09PSBjb21iaW5hdG9yTm9kZVRlcm1pbmFsTm9kZSkge1xuICAgIGlmIChub2RlVGVybWluYWxOb2RlKSB7XG4gICAgICBjb25zdCB0ZXJtaW5hbE5vZGUgPSBub2RlLCAgLy8vXG4gICAgICAgICAgICBjb21iaW5hdG9yVGVybWluYWxOb2RlID0gY29tYmluYXRvck5vZGUsICAvLy9cbiAgICAgICAgICAgIHRlcm1pbmFsTm9kZVZlcmlmaWVkID0gdmVyaWZ5VGVybWluYWxOb2RlKHRlcm1pbmFsTm9kZSwgY29tYmluYXRvclRlcm1pbmFsTm9kZSwgY29udGV4dCk7XG5cbiAgICAgIG5vZGVWZXJpZmllZCA9IHRlcm1pbmFsTm9kZVZlcmlmaWVkOyAgLy8vXG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IG5vblRlcm1pbmFsTm9kZSA9IG5vZGUsIC8vL1xuICAgICAgICAgICAgY29tYmluYXRvck5vblRlcm1pbmFsTm9kZSA9IGNvbWJpbmF0b3JOb2RlLCAgLy8vXG4gICAgICAgICAgICBub25UZXJtaW5hbE5vZGVWZXJpZmllZCA9IHZlcmlmeU5vblRlcm1pbmFsTm9kZShub25UZXJtaW5hbE5vZGUsIGNvbWJpbmF0b3JOb25UZXJtaW5hbE5vZGUsIGNvbnRleHQpO1xuXG4gICAgICBub2RlVmVyaWZpZWQgPSBub25UZXJtaW5hbE5vZGVWZXJpZmllZDsgLy8vXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG5vZGVWZXJpZmllZDtcbn1cblxuZnVuY3Rpb24gdmVyaWZ5Tm9kZXMobm9kZXMsIGNvbWJpbmF0b3JOb2RlcywgY29udGV4dCkge1xuICBsZXQgbm9kZXNWZXJpZmllZCA9IGZhbHNlO1xuXG4gIGNvbnN0IG5vZGVzTGVuZ3RoID0gbm9kZXMubGVuZ3RoLFxuICAgICAgICBjb21iaW5hdG9yTm9kZXNMZW5ndGggPSBjb21iaW5hdG9yTm9kZXMubGVuZ3RoO1xuXG4gIGlmIChub2Rlc0xlbmd0aCA9PT0gY29tYmluYXRvck5vZGVzTGVuZ3RoKSB7XG4gICAgbm9kZXNWZXJpZmllZCA9IG5vZGVzLmV2ZXJ5KChub2RlLCBpbmRleCkgPT4ge1xuICAgICAgY29uc3QgY29tYmluYXRvck5vZGUgPSBjb21iaW5hdG9yTm9kZXNbaW5kZXhdLFxuICAgICAgICAgICAgbm9kZVZlcmlmaWVkID0gdmVyaWZ5Tm9kZShub2RlLCBjb21iaW5hdG9yTm9kZSwgY29udGV4dCk7XG5cbiAgICAgIGlmIChub2RlVmVyaWZpZWQpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICByZXR1cm4gbm9kZXNWZXJpZmllZDtcbn1cblxuZnVuY3Rpb24gdmVyaWZ5VGVybWluYWxOb2RlKHRlcm1pbmFsTm9kZSwgY29tYmluYXRvclRlcm1pbmFsTm9kZSwgY29udGV4dCkge1xuICBsZXQgdGVybWluYWxOb2RlVmVyaWZpZWQgPSBmYWxzZTtcblxuICBjb25zdCBtYXRjaGVzID0gdGVybWluYWxOb2RlLm1hdGNoKGNvbWJpbmF0b3JUZXJtaW5hbE5vZGUpO1xuXG4gIGlmIChtYXRjaGVzKSB7XG4gICAgdGVybWluYWxOb2RlVmVyaWZpZWQgPSB0cnVlO1xuICB9XG5cbiAgcmV0dXJuIHRlcm1pbmFsTm9kZVZlcmlmaWVkO1xufVxuXG5mdW5jdGlvbiB2ZXJpZnlOb25UZXJtaW5hbE5vZGUobm9uVGVybWluYWxOb2RlLCBjb21iaW5hdG9yTm9uVGVybWluYWxOb2RlLCBjb250ZXh0KSB7XG4gIGxldCBub25UZXJtaW5hbE5vZGVWZXJpZmllZCA9IGZhbHNlO1xuXG4gIGNvbnN0IHJ1bGVOYW1lID0gbm9uVGVybWluYWxOb2RlLmdldFJ1bGVOYW1lKCksIC8vL1xuICAgICAgICBjb21iaW5hdG9yUnVsZU5hbWUgPSBjb21iaW5hdG9yTm9uVGVybWluYWxOb2RlLmdldFJ1bGVOYW1lKCk7IC8vL1xuXG4gIGlmIChydWxlTmFtZSA9PT0gY29tYmluYXRvclJ1bGVOYW1lKSB7XG4gICAgc3dpdGNoIChydWxlTmFtZSkge1xuICAgICAgY2FzZSBBUkdVTUVOVF9SVUxFX05BTUU6IHtcbiAgICAgICAgY29uc3QgYXJndW1lbnROb2RlID0gbm9uVGVybWluYWxOb2RlLCAvLy9cbiAgICAgICAgICAgICAgY29tYmluYXRvckFyZ3VtZW50Tm9kZSA9IGNvbWJpbmF0b3JOb25UZXJtaW5hbE5vZGUsIC8vL1xuICAgICAgICAgICAgICBhcmd1bWVudE5vZGVWZXJpZmllZCA9IHZlcmlmeUFyZ3VtZW50Tm9kZShhcmd1bWVudE5vZGUsIGNvbWJpbmF0b3JBcmd1bWVudE5vZGUsIGNvbnRleHQpO1xuXG4gICAgICAgIG5vblRlcm1pbmFsTm9kZVZlcmlmaWVkID0gYXJndW1lbnROb2RlVmVyaWZpZWQ7IC8vL1xuXG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgICBjYXNlIE1FVEFfQVJHVU1FTlRfUlVMRV9OQU1FOiB7XG4gICAgICAgIGNvbnN0IG1ldGFBcmd1bWVudE5vZGUgPSBub25UZXJtaW5hbE5vZGUsIC8vL1xuICAgICAgICAgICAgICBjb21iaW5hdG9yTWV0YWFyZ3VtZW50Tm9kZSA9IGNvbWJpbmF0b3JOb25UZXJtaW5hbE5vZGUsIC8vL1xuICAgICAgICAgICAgICBtZXRhQXJndW1lbnROb2RlVmVyaWZpZWQgPSB2ZXJpZnlNZXRhYXJndW1lbnROb2RlKG1ldGFBcmd1bWVudE5vZGUsIGNvbWJpbmF0b3JNZXRhYXJndW1lbnROb2RlLCBjb250ZXh0KTtcblxuICAgICAgICBub25UZXJtaW5hbE5vZGVWZXJpZmllZCA9IG1ldGFBcmd1bWVudE5vZGVWZXJpZmllZDsgLy8vXG5cbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG5cbiAgICAgIGRlZmF1bHQ6IHtcbiAgICAgICAgY29uc3QgY2hpbGROb2RlcyA9IG5vblRlcm1pbmFsTm9kZS5nZXRDaGlsZE5vZGVzKCksXG4gICAgICAgICAgICAgIGNvbWJpbmF0b3JDaGlsZE5vZGVzID0gY29tYmluYXRvck5vblRlcm1pbmFsTm9kZS5nZXRDaGlsZE5vZGVzKCksXG4gICAgICAgICAgICAgIG5vZGVzID0gY2hpbGROb2RlcywgLy8vXG4gICAgICAgICAgICAgIGNvbWJpbmF0b3JOb2RlcyA9IGNvbWJpbmF0b3JDaGlsZE5vZGVzLCAvLy9cbiAgICAgICAgICAgICAgbm9kZXNWZXJpZmllZCA9IHZlcmlmeU5vZGVzKG5vZGVzLCBjb21iaW5hdG9yTm9kZXMsIGNvbnRleHQpO1xuXG4gICAgICAgIG5vblRlcm1pbmFsTm9kZVZlcmlmaWVkID0gbm9kZXNWZXJpZmllZDsgLy8vXG5cbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG5vblRlcm1pbmFsTm9kZVZlcmlmaWVkO1xufVxuXG5mdW5jdGlvbiB2ZXJpZnlBcmd1bWVudE5vZGUoYXJndW1lbnROb2RlLCBjb21iaW5hdG9yQXJndW1lbnROb2RlLCBjb250ZXh0KSB7XG4gIGxldCBhcmd1bWVudE5vZGVWZXJpZmllZCA9IGZhbHNlO1xuXG4gIGNvbnN0IHRlcm1Ob2RlID0gdGVybU5vZGVRdWVyeShhcmd1bWVudE5vZGUpO1xuXG4gIGlmICh0ZXJtTm9kZSA9PT0gbnVsbCkge1xuICAgIGNvbnN0IGFyZ3VtZW50U3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcoYXJndW1lbnROb2RlKTtcblxuICAgIGNvbnRleHQuZXJyb3IoYFRoZSAke2FyZ3VtZW50U3RyaW5nfSBhcmd1bWVudCBzaG91bGQgYmUgYSB0ZXJtLCBub3QgYSB0eXBlYCk7XG4gIH0gZWxzZSB7XG4gICAgY29uc3QgdHlwZXMgPSBbXSxcbiAgICAgICAgICB0ZXJtVmVyaWZpZWQgPSB2ZXJpZnlUZXJtKHRlcm1Ob2RlLCB0eXBlcywgY29udGV4dCk7XG5cbiAgICBpZiAodGVybVZlcmlmaWVkKSB7XG4gICAgICBjb25zdCBmaXJzdFR5cGUgPSBmaXJzdCh0eXBlcyksXG4gICAgICAgICAgICB0ZXJtVHlwZSA9IGZpcnN0VHlwZSwgLy8vXG4gICAgICAgICAgICB0eXBlTm9kZSA9IHR5cGVOb2RlUXVlcnkoY29tYmluYXRvckFyZ3VtZW50Tm9kZSksXG4gICAgICAgICAgICB0eXBlTmFtZSA9IHR5cGVOYW1lRnJvbVR5cGVOb2RlKHR5cGVOb2RlKSxcbiAgICAgICAgICAgIHR5cGUgPSAodHlwZU5hbWUgPT09IE9CSkVDVF9UWVBFX05BTUUpID9cbiAgICAgICAgICAgICAgICAgICAgIG9iamVjdFR5cGUgOiAgLy8vXG4gICAgICAgICAgICAgICAgICAgICAgIGNvbnRleHQuZmluZFR5cGVCeVR5cGVOYW1lKHR5cGVOYW1lKSxcbiAgICAgICAgICAgIHN0YXRlbWVudFR5cGVFcXVhbFRvT3JTdWJUeXBlT2ZUeXBlID0gdGVybVR5cGUuaXNFcXVhbFRvT3JTdWJUeXBlT2YodHlwZSk7XG5cbiAgICAgIGlmIChzdGF0ZW1lbnRUeXBlRXF1YWxUb09yU3ViVHlwZU9mVHlwZSkge1xuICAgICAgICBhcmd1bWVudE5vZGVWZXJpZmllZCA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGFyZ3VtZW50Tm9kZVZlcmlmaWVkO1xufVxuXG5mdW5jdGlvbiB2ZXJpZnlNZXRhYXJndW1lbnROb2RlKG1ldGFBcmd1bWVudE5vZGUsIGNvbWJpbmF0b3JNZXRhYXJndW1lbnROb2RlLCBjb250ZXh0KSB7XG4gIGxldCBtZXRhQXJndW1lbnROb2RlVmVyaWZpZWQgPSBmYWxzZTtcblxuICBjb25zdCBzdGF0ZW1lbnROb2RlID0gc3RhdGVtZW50Tm9kZVF1ZXJ5KG1ldGFBcmd1bWVudE5vZGUpO1xuXG4gIGlmIChzdGF0ZW1lbnROb2RlID09PSBudWxsKSB7XG4gICAgY29uc3QgbWV0YUFyZ3VtZW50U3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobWV0YUFyZ3VtZW50Tm9kZSk7XG5cbiAgICBjb250ZXh0LmVycm9yKGBUaGUgJyR7bWV0YUFyZ3VtZW50U3RyaW5nfScgbWV0YS1hcmd1bWVudCBzaG91bGQgYmUgYSBzdGF0ZW1lbnQsIG5vdCBhIG1ldGEtdHlwZS5gKTtcbiAgfSBlbHNlIHtcbiAgICBjb25zdCBkZXJpdmVkID0gZmFsc2UsXG4gICAgICAgICAgYXNzZXJ0aW9ucyA9IFtdLFxuICAgICAgICAgIHN0YXRlbWVudFZlcmlmaWVkID0gdmVyaWZ5U3RhdGVtZW50KHN0YXRlbWVudE5vZGUsIGFzc2VydGlvbnMsIGRlcml2ZWQsIGNvbnRleHQpO1xuXG4gICAgaWYgKHN0YXRlbWVudFZlcmlmaWVkKSB7XG4gICAgICBjb25zdCBjb21iaW5hdG9yTWV0YVRZcGVOb2RlID0gbWV0YVR5cGVOb2RlUXVlcnkoY29tYmluYXRvck1ldGFhcmd1bWVudE5vZGUpO1xuXG4gICAgICBpZiAoY29tYmluYXRvck1ldGFUWXBlTm9kZSAhPT0gbnVsbCkge1xuICAgICAgICBjb25zdCB0ZXJtaW5hbE5vZGUgPSBjb21iaW5hdG9yTWV0YVRZcGVOb2RlLCAgLy8vXG4gICAgICAgICAgICAgIHRlcm1pbmFsTm9kZUNvbnRlbnQgPSB0ZXJtaW5hbE5vZGUuZ2V0Q29udGVudCgpLFxuICAgICAgICAgICAgICB0ZXJtaW5hbE5vZGVDb250ZW50U3RhdGVtZW50TWV0YVR5cGUgPSAodGVybWluYWxOb2RlQ29udGVudCA9PT0gU1RBVEVNRU5UX01FVEFfVFlQRSk7XG5cbiAgICAgICAgbWV0YUFyZ3VtZW50Tm9kZVZlcmlmaWVkID0gdGVybWluYWxOb2RlQ29udGVudFN0YXRlbWVudE1ldGFUeXBlOyAgLy8vXG4gICAgICB9XG5cbiAgICAgIGlmICghbWV0YUFyZ3VtZW50Tm9kZVZlcmlmaWVkKSB7XG4gICAgICAgIGNvbnN0IGNvbWJpbmF0b3JNZXRhYXJndW1lbnRTdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhjb21iaW5hdG9yTWV0YWFyZ3VtZW50Tm9kZSk7XG5cbiAgICAgICAgY29udGV4dC5lcnJvcihgVGhlICcke2NvbWJpbmF0b3JNZXRhYXJndW1lbnRTdHJpbmd9JyBjb21iaW5hdG9yIG1ldGEtYXJndW1lbnQgc2hvdWxkIGJlIHRoZSAnU3RhdGVtZW50JyBtZXRhLXR5cGUuYCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG1ldGFBcmd1bWVudE5vZGVWZXJpZmllZDtcbn1cbiJdLCJuYW1lcyI6WyJ2ZXJpZnlTdGF0ZW1lbnQiLCJ2ZXJpZnlTdGF0ZW1lbnRBZ2FpbnN0Q29tYmluYXRvciIsInRlcm1Ob2RlUXVlcnkiLCJub2RlUXVlcnkiLCJ0eXBlTm9kZVF1ZXJ5IiwibWV0YVR5cGVOb2RlUXVlcnkiLCJzdGF0ZW1lbnROb2RlUXVlcnkiLCJ0eXBlQXNzZXJ0aW9uTm9kZVF1ZXJ5Iiwic3RhdGVtZW50Tm9kZSIsImFzc2VydGlvbnMiLCJkZXJpdmVkIiwiY29udGV4dCIsInN0YXRlbWVudFZlcmlmaWVkIiwiYmVnaW4iLCJzdGF0ZW1lbnRWZXJpZmllZEFnYWluc3RDb21iaW5hdG9ycyIsInZlcmlmeVN0YXRlbWVudEFnYWluc3RDb21iaW5hdG9ycyIsInN0YXRlbWVudFZlcmlmaWVkQXNUeXBlQXNzZXJ0aW9uIiwidmVyaWZ5U3RhdGVtZW50QXNUeXBlQXNzZXJ0aW9uIiwic3RhdGVtZW50VmVyaWZpZWRBc0VxdWFsaXR5IiwidmVyaWZ5U3RhdGVtZW50QXNFcXVhbGl0eSIsImNvbXBsZXRlIiwiaGFsdCIsImNvbWJpbmF0b3IiLCJjb21iaW5hdG9yU3RhdGVtZW50Tm9kZSIsImdldFN0YXRlbWVudE5vZGUiLCJub2RlIiwiY29tYmluYXRvck5vZGUiLCJub2RlVmVyaWZpZWQiLCJ2ZXJpZnlOb2RlIiwic3RhdGVtZW50VmVyaWZpZWRBZ2FpbnN0Q29tYmluYXRvciIsImNvbWJpbmF0b3JzIiwiZ2V0Q29tYmluYXRvcnMiLCJicmFja2V0ZWRDb21iaW5hdG9yIiwiZmluZCIsInR5cGVBc3NlcnRpb25Ob2RlIiwidHlwZUFzc2VydGlvblZlcmlmaWVkIiwidmVyaWZ5VHlwZUFzc2VydGlvbiIsImVxdWFsaXR5IiwiRXF1YWxpdHkiLCJmcm9tU3RhdGVtZW50Tm9kZSIsImVxdWFsaXRpZXMiLCJnZXRFcXVhbGl0aWVzIiwiZXF1YWxpdHlFcXVhdGVzIiwiZXF1YXRlIiwibm9kZVRlcm1pbmFsTm9kZSIsImlzVGVybWluYWxOb2RlIiwiY29tYmluYXRvck5vZGVUZXJtaW5hbE5vZGUiLCJ0ZXJtaW5hbE5vZGUiLCJjb21iaW5hdG9yVGVybWluYWxOb2RlIiwidGVybWluYWxOb2RlVmVyaWZpZWQiLCJ2ZXJpZnlUZXJtaW5hbE5vZGUiLCJub25UZXJtaW5hbE5vZGUiLCJjb21iaW5hdG9yTm9uVGVybWluYWxOb2RlIiwibm9uVGVybWluYWxOb2RlVmVyaWZpZWQiLCJ2ZXJpZnlOb25UZXJtaW5hbE5vZGUiLCJ2ZXJpZnlOb2RlcyIsIm5vZGVzIiwiY29tYmluYXRvck5vZGVzIiwibm9kZXNWZXJpZmllZCIsIm5vZGVzTGVuZ3RoIiwibGVuZ3RoIiwiY29tYmluYXRvck5vZGVzTGVuZ3RoIiwiZXZlcnkiLCJpbmRleCIsIm1hdGNoZXMiLCJtYXRjaCIsInJ1bGVOYW1lIiwiZ2V0UnVsZU5hbWUiLCJjb21iaW5hdG9yUnVsZU5hbWUiLCJBUkdVTUVOVF9SVUxFX05BTUUiLCJhcmd1bWVudE5vZGUiLCJjb21iaW5hdG9yQXJndW1lbnROb2RlIiwiYXJndW1lbnROb2RlVmVyaWZpZWQiLCJ2ZXJpZnlBcmd1bWVudE5vZGUiLCJNRVRBX0FSR1VNRU5UX1JVTEVfTkFNRSIsIm1ldGFBcmd1bWVudE5vZGUiLCJjb21iaW5hdG9yTWV0YWFyZ3VtZW50Tm9kZSIsIm1ldGFBcmd1bWVudE5vZGVWZXJpZmllZCIsInZlcmlmeU1ldGFhcmd1bWVudE5vZGUiLCJjaGlsZE5vZGVzIiwiZ2V0Q2hpbGROb2RlcyIsImNvbWJpbmF0b3JDaGlsZE5vZGVzIiwidGVybU5vZGUiLCJhcmd1bWVudFN0cmluZyIsIm5vZGVBc1N0cmluZyIsImVycm9yIiwidHlwZXMiLCJ0ZXJtVmVyaWZpZWQiLCJ2ZXJpZnlUZXJtIiwiZmlyc3RUeXBlIiwiZmlyc3QiLCJ0ZXJtVHlwZSIsInR5cGVOb2RlIiwidHlwZU5hbWUiLCJ0eXBlTmFtZUZyb21UeXBlTm9kZSIsInR5cGUiLCJPQkpFQ1RfVFlQRV9OQU1FIiwib2JqZWN0VHlwZSIsImZpbmRUeXBlQnlUeXBlTmFtZSIsInN0YXRlbWVudFR5cGVFcXVhbFRvT3JTdWJUeXBlT2ZUeXBlIiwiaXNFcXVhbFRvT3JTdWJUeXBlT2YiLCJtZXRhQXJndW1lbnRTdHJpbmciLCJjb21iaW5hdG9yTWV0YVRZcGVOb2RlIiwidGVybWluYWxOb2RlQ29udGVudCIsImdldENvbnRlbnQiLCJ0ZXJtaW5hbE5vZGVDb250ZW50U3RhdGVtZW50TWV0YVR5cGUiLCJTVEFURU1FTlRfTUVUQV9UWVBFIiwiY29tYmluYXRvck1ldGFhcmd1bWVudFN0cmluZyJd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