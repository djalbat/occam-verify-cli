"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return verifyStatement;
    }
});
var _variable = /*#__PURE__*/ _interopRequireDefault(require("../variable"));
var _assertion = /*#__PURE__*/ _interopRequireDefault(require("../assertion"));
var _term = /*#__PURE__*/ _interopRequireWildcard(require("../verify/term"));
var _equality = /*#__PURE__*/ _interopRequireDefault(require("../ocmbinator/equality"));
var _bracketed = /*#__PURE__*/ _interopRequireDefault(require("../ocmbinator/bracketed"));
var _type = /*#__PURE__*/ _interopRequireDefault(require("../verify/assertion/type"));
var _array = require("../utilities/array");
var _type1 = require("../type");
var _string = require("../utilities/string");
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
function _getRequireWildcardCache(nodeInterop) {
    if (typeof WeakMap !== "function") return null;
    var cacheBabelInterop = new WeakMap();
    var cacheNodeInterop = new WeakMap();
    return (_getRequireWildcardCache = function(nodeInterop) {
        return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
    })(nodeInterop);
}
function _interopRequireWildcard(obj, nodeInterop) {
    if (!nodeInterop && obj && obj.__esModule) {
        return obj;
    }
    if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
        return {
            default: obj
        };
    }
    var cache = _getRequireWildcardCache(nodeInterop);
    if (cache && cache.has(obj)) {
        return cache.get(obj);
    }
    var newObj = {};
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for(var key in obj){
        if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
            var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
            if (desc && (desc.get || desc.set)) {
                Object.defineProperty(newObj, key, desc);
            } else {
                newObj[key] = obj[key];
            }
        }
    }
    newObj.default = obj;
    if (cache) {
        cache.set(obj, newObj);
    }
    return newObj;
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
var termNodeQuery = (0, _query.nodeQuery)("/argument/term!"), typeNodeQuery = (0, _query.nodeQuery)("/argument/type!"), leftTermNodeQuery = (0, _query.nodeQuery)("/statement/argument[0]/term!"), rightTermNodeQuery = (0, _query.nodeQuery)("/statement/argument[1]/term!"), metaTypeNodeQuery = (0, _query.nodeQuery)("/metaArgument/metaType!"), statementNodeQuery = (0, _query.nodeQuery)("/metaArgument/statement!"), typeAssertionNodeQuery = (0, _query.nodeQuery)("/statement/typeAssertion!"), metaTypeTerminalNodeQuery = (0, _query.nodeQuery)("/metaType/@meta-type");
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
        var statementVerifiedAsEquality = verifyStatementAsEquality(statementNode, assertions, derived, context);
        statementVerified = statementVerifiedAsEquality; //
    }
    return statementVerified;
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
function verifyStatementAgainstCombinator(statementNode, combinator, context) {
    var combinatorStatementNode = combinator.getStatementNode(), node = statementNode, combinatorNode = combinatorStatementNode, nodeVerified = verifyNode(node, combinatorNode, context), statementVerifiedAgainstCombinator = nodeVerified; ///
    return statementVerifiedAgainstCombinator;
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
function verifyStatementAsEquality(statementNode, assertions, derived, context) {
    var statementVerifiedAsEquality = false;
    var statementString = context.nodeAsString(statementNode);
    var combinator = _equality.default, statementVerifiedAgainstCombinator = verifyStatementAgainstCombinator(statementNode, combinator, context);
    if (statementVerifiedAgainstCombinator) {
        if (derived) {
            debugger;
        } else {
            var types = [], variables = [], leftTermNode = leftTermNodeQuery(statementNode), rightTermNode = rightTermNodeQuery(statementNode), leftTermVerifiedAsVariable = (0, _term.verifyTermAsVariable)(leftTermNode, variables, context);
            if (leftTermVerifiedAsVariable) {
                (0, _term.default)(rightTermNode, types, context);
                var firstVariable = (0, _array.first)(variables), leftVariable = firstVariable, firstType = (0, _array.first)(types), rightTermType = firstType, leftVariableType = leftVariable.getType(), leftVariableName = leftVariable.getName(), leftVariableTypeEqualToOrSuperTypeOfRightTermType = leftVariableType.isEqualToOrSuperTypeOf(rightTermType);
                if (!leftVariableTypeEqualToOrSuperTypeOfRightTermType) {
                    var rightTermString = (0, _string.nodeAsString)(rightTermNode), rightTermTypeName = rightTermType.getName(), leftVariableTypeName = leftVariableType.getName();
                    context.error("The left '".concat(leftVariableName, "' variable's '").concat(leftVariableTypeName, "' type is not equal to or a super-type of the right '").concat(rightTermString, "' term's '").concat(rightTermTypeName, "' type."), statementNode);
                } else {
                    var type = leftVariableType, name = leftVariableName, termNode = rightTermNode, variable = _variable.default.fromTypeNameAndTermNode(type, name, termNode), assertion = _assertion.default.fromVariable(variable);
                    assertions.push(assertion);
                    statementVerifiedAsEquality = true;
                }
            } else {
                var rightTermVerifiedAsVariable = (0, _term.verifyTermAsVariable)(rightTermNode, variables, context);
                if (rightTermVerifiedAsVariable) {
                    var firstVariable1 = (0, _array.first)(variables), rightVariable = firstVariable1, leftTermString = (0, _string.nodeAsString)(leftTermNode), rightVariableName = rightVariable.getName();
                    context.error("The left '".concat(leftTermString, "' term cannot be equated with the right '").concat(rightVariableName, "' variable."), statementNode);
                } else {
                    statementVerifiedAsEquality = true;
                }
            }
        }
    }
    if (statementVerifiedAsEquality) {
        context.info("Verified the '".concat(statementString, "' statement as an equality."), statementNode);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92ZXJpZnkvc3RhdGVtZW50LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgVmFyaWFibGUgZnJvbSBcIi4uL3ZhcmlhYmxlXCI7XG5pbXBvcnQgQXNzZXJ0aW9uIGZyb20gXCIuLi9hc3NlcnRpb25cIjtcbmltcG9ydCB2ZXJpZnlUZXJtIGZyb20gXCIuLi92ZXJpZnkvdGVybVwiO1xuaW1wb3J0IGVxdWFsaXR5Q29tYmluYXRvciBmcm9tIFwiLi4vb2NtYmluYXRvci9lcXVhbGl0eVwiO1xuaW1wb3J0IGJyYWNrZXRlZENvbWJpbmF0b3IgZnJvbSBcIi4uL29jbWJpbmF0b3IvYnJhY2tldGVkXCI7XG5pbXBvcnQgdmVyaWZ5VHlwZUFzc2VydGlvbiBmcm9tIFwiLi4vdmVyaWZ5L2Fzc2VydGlvbi90eXBlXCI7XG5cbmltcG9ydCB7IGZpcnN0IH0gZnJvbSBcIi4uL3V0aWxpdGllcy9hcnJheVwiO1xuaW1wb3J0IHsgb2JqZWN0VHlwZSB9IGZyb20gXCIuLi90eXBlXCI7XG5pbXBvcnQgeyBub2RlQXNTdHJpbmcgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3N0cmluZ1wiO1xuaW1wb3J0IHsgT0JKRUNUX1RZUEVfTkFNRSB9IGZyb20gXCIuLi90eXBlTmFtZXNcIjtcbmltcG9ydCB7IFNUQVRFTUVOVF9NRVRBX1RZUEUgfSBmcm9tIFwiLi4vbWV0YVR5cGVzXCI7XG5pbXBvcnQgeyB2ZXJpZnlUZXJtQXNWYXJpYWJsZSB9IGZyb20gXCIuLi92ZXJpZnkvdGVybVwiO1xuaW1wb3J0IHsgbm9kZVF1ZXJ5LCB0eXBlTmFtZUZyb21UeXBlTm9kZSB9IGZyb20gXCIuLi91dGlsaXRpZXMvcXVlcnlcIjtcbmltcG9ydCB7IEFSR1VNRU5UX1JVTEVfTkFNRSwgTUVUQV9BUkdVTUVOVF9SVUxFX05BTUUgfSBmcm9tIFwiLi4vcnVsZU5hbWVzXCI7XG5cbmNvbnN0IHRlcm1Ob2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvYXJndW1lbnQvdGVybSFcIiksXG4gICAgICB0eXBlTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL2FyZ3VtZW50L3R5cGUhXCIpLFxuICAgICAgbGVmdFRlcm1Ob2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvc3RhdGVtZW50L2FyZ3VtZW50WzBdL3Rlcm0hXCIpLFxuICAgICAgcmlnaHRUZXJtTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3N0YXRlbWVudC9hcmd1bWVudFsxXS90ZXJtIVwiKSxcbiAgICAgIG1ldGFUeXBlTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL21ldGFBcmd1bWVudC9tZXRhVHlwZSFcIiksXG4gICAgICBzdGF0ZW1lbnROb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvbWV0YUFyZ3VtZW50L3N0YXRlbWVudCFcIiksXG4gICAgICB0eXBlQXNzZXJ0aW9uTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3N0YXRlbWVudC90eXBlQXNzZXJ0aW9uIVwiKSxcbiAgICAgIG1ldGFUeXBlVGVybWluYWxOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvbWV0YVR5cGUvQG1ldGEtdHlwZVwiKTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdmVyaWZ5U3RhdGVtZW50KHN0YXRlbWVudE5vZGUsIGFzc2VydGlvbnMsIGRlcml2ZWQsIGNvbnRleHQpIHtcbiAgbGV0IHN0YXRlbWVudFZlcmlmaWVkID0gZmFsc2U7XG5cbiAgaWYgKCFzdGF0ZW1lbnRWZXJpZmllZCkge1xuICAgIGNvbnN0IHN0YXRlbWVudFZlcmlmaWVkQWdhaW5zdENvbWJpbmF0b3JzID0gdmVyaWZ5U3RhdGVtZW50QWdhaW5zdENvbWJpbmF0b3JzKHN0YXRlbWVudE5vZGUsIGNvbnRleHQpO1xuXG4gICAgc3RhdGVtZW50VmVyaWZpZWQgPSBzdGF0ZW1lbnRWZXJpZmllZEFnYWluc3RDb21iaW5hdG9yczsgIC8vL1xuICB9XG5cbiAgaWYgKCFzdGF0ZW1lbnRWZXJpZmllZCkge1xuICAgIGNvbnN0IHN0YXRlbWVudFZlcmlmaWVkQXNUeXBlQXNzZXJ0aW9uID0gdmVyaWZ5U3RhdGVtZW50QXNUeXBlQXNzZXJ0aW9uKHN0YXRlbWVudE5vZGUsIGFzc2VydGlvbnMsIGRlcml2ZWQsIGNvbnRleHQpO1xuXG4gICAgc3RhdGVtZW50VmVyaWZpZWQgPSBzdGF0ZW1lbnRWZXJpZmllZEFzVHlwZUFzc2VydGlvbjsgLy8vXG4gIH1cblxuICBpZiAoIXN0YXRlbWVudFZlcmlmaWVkKSB7XG4gICAgY29uc3Qgc3RhdGVtZW50VmVyaWZpZWRBc0VxdWFsaXR5ID0gdmVyaWZ5U3RhdGVtZW50QXNFcXVhbGl0eShzdGF0ZW1lbnROb2RlLCBhc3NlcnRpb25zLCBkZXJpdmVkLCBjb250ZXh0KTtcblxuICAgIHN0YXRlbWVudFZlcmlmaWVkID0gc3RhdGVtZW50VmVyaWZpZWRBc0VxdWFsaXR5OyAgLy9cbiAgfVxuXG4gIHJldHVybiBzdGF0ZW1lbnRWZXJpZmllZDtcbn1cblxuZnVuY3Rpb24gdmVyaWZ5U3RhdGVtZW50QWdhaW5zdENvbWJpbmF0b3JzKHN0YXRlbWVudE5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IHN0YXRlbWVudFZlcmlmaWVkQWdhaW5zdENvbWJpbmF0b3JzID0gZmFsc2U7XG5cbiAgbGV0IGNvbWJpbmF0b3JzID0gY29udGV4dC5nZXRDb21iaW5hdG9ycygpO1xuXG4gIGNvbWJpbmF0b3JzID0gWyAvLy9cbiAgICBicmFja2V0ZWRDb21iaW5hdG9yLFxuICAgIC4uLmNvbWJpbmF0b3JzXG4gIF07XG5cbiAgY29uc3QgY29tYmluYXRvciA9IGNvbWJpbmF0b3JzLmZpbmQoKGNvbWJpbmF0b3IpID0+IHtcbiAgICBjb25zdCBzdGF0ZW1lbnRWZXJpZmllZEFnYWluc3RDb21iaW5hdG9yID0gdmVyaWZ5U3RhdGVtZW50QWdhaW5zdENvbWJpbmF0b3Ioc3RhdGVtZW50Tm9kZSwgY29tYmluYXRvciwgY29udGV4dCk7XG5cbiAgICBpZiAoc3RhdGVtZW50VmVyaWZpZWRBZ2FpbnN0Q29tYmluYXRvcikge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9KSB8fCBudWxsO1xuXG4gIGlmIChjb21iaW5hdG9yICE9PSBudWxsKSB7XG4gICAgc3RhdGVtZW50VmVyaWZpZWRBZ2FpbnN0Q29tYmluYXRvcnMgPSB0cnVlO1xuICB9XG5cbiAgcmV0dXJuIHN0YXRlbWVudFZlcmlmaWVkQWdhaW5zdENvbWJpbmF0b3JzO1xufVxuXG5mdW5jdGlvbiB2ZXJpZnlTdGF0ZW1lbnRBZ2FpbnN0Q29tYmluYXRvcihzdGF0ZW1lbnROb2RlLCBjb21iaW5hdG9yLCBjb250ZXh0KSB7XG4gIGNvbnN0IGNvbWJpbmF0b3JTdGF0ZW1lbnROb2RlID0gY29tYmluYXRvci5nZXRTdGF0ZW1lbnROb2RlKCksXG4gICAgICBub2RlID0gc3RhdGVtZW50Tm9kZSwgIC8vL1xuICAgICAgY29tYmluYXRvck5vZGUgPSBjb21iaW5hdG9yU3RhdGVtZW50Tm9kZSwgLy8vXG4gICAgICBub2RlVmVyaWZpZWQgPSB2ZXJpZnlOb2RlKG5vZGUsIGNvbWJpbmF0b3JOb2RlLCBjb250ZXh0KSxcbiAgICAgIHN0YXRlbWVudFZlcmlmaWVkQWdhaW5zdENvbWJpbmF0b3IgPSBub2RlVmVyaWZpZWQ7ICAvLy9cblxuICByZXR1cm4gc3RhdGVtZW50VmVyaWZpZWRBZ2FpbnN0Q29tYmluYXRvcjtcbn1cblxuZnVuY3Rpb24gdmVyaWZ5U3RhdGVtZW50QXNUeXBlQXNzZXJ0aW9uKHN0YXRlbWVudE5vZGUsIGFzc2VydGlvbnMsIGRlcml2ZWQsIGNvbnRleHQpIHtcbiAgbGV0IHN0YXRlbWVudFZlcmlmaWVkQXNUeXBlQXNzZXJ0aW9uID0gZmFsc2U7XG5cbiAgY29uc3QgdHlwZUFzc2VydGlvbk5vZGUgPSB0eXBlQXNzZXJ0aW9uTm9kZVF1ZXJ5KHN0YXRlbWVudE5vZGUpO1xuXG4gIGlmICh0eXBlQXNzZXJ0aW9uTm9kZSAhPT0gbnVsbCkge1xuICAgIGNvbnN0IHR5cGVBc3NlcnRpb25WZXJpZmllZCA9IHZlcmlmeVR5cGVBc3NlcnRpb24odHlwZUFzc2VydGlvbk5vZGUsIGFzc2VydGlvbnMsIGRlcml2ZWQsIGNvbnRleHQpO1xuXG4gICAgc3RhdGVtZW50VmVyaWZpZWRBc1R5cGVBc3NlcnRpb24gPSB0eXBlQXNzZXJ0aW9uVmVyaWZpZWQ7IC8vL1xuICB9XG5cbiAgcmV0dXJuIHN0YXRlbWVudFZlcmlmaWVkQXNUeXBlQXNzZXJ0aW9uO1xufVxuXG5mdW5jdGlvbiB2ZXJpZnlTdGF0ZW1lbnRBc0VxdWFsaXR5KHN0YXRlbWVudE5vZGUsIGFzc2VydGlvbnMsIGRlcml2ZWQsIGNvbnRleHQpIHtcbiAgbGV0IHN0YXRlbWVudFZlcmlmaWVkQXNFcXVhbGl0eSA9IGZhbHNlO1xuXG4gIGNvbnN0IHN0YXRlbWVudFN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKHN0YXRlbWVudE5vZGUpO1xuXG4gIGNvbnN0IGNvbWJpbmF0b3IgPSBlcXVhbGl0eUNvbWJpbmF0b3IsICAvLy9cbiAgICAgICAgc3RhdGVtZW50VmVyaWZpZWRBZ2FpbnN0Q29tYmluYXRvciA9IHZlcmlmeVN0YXRlbWVudEFnYWluc3RDb21iaW5hdG9yKHN0YXRlbWVudE5vZGUsIGNvbWJpbmF0b3IsIGNvbnRleHQpO1xuXG4gIGlmIChzdGF0ZW1lbnRWZXJpZmllZEFnYWluc3RDb21iaW5hdG9yKSB7XG4gICAgaWYgKGRlcml2ZWQpIHtcbiAgICAgIGRlYnVnZ2VyXG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHR5cGVzID0gW10sXG4gICAgICAgICAgICB2YXJpYWJsZXMgPSBbXSxcbiAgICAgICAgICAgIGxlZnRUZXJtTm9kZSA9IGxlZnRUZXJtTm9kZVF1ZXJ5KHN0YXRlbWVudE5vZGUpLFxuICAgICAgICAgICAgcmlnaHRUZXJtTm9kZSA9IHJpZ2h0VGVybU5vZGVRdWVyeShzdGF0ZW1lbnROb2RlKSxcbiAgICAgICAgICAgIGxlZnRUZXJtVmVyaWZpZWRBc1ZhcmlhYmxlID0gdmVyaWZ5VGVybUFzVmFyaWFibGUobGVmdFRlcm1Ob2RlLCB2YXJpYWJsZXMsIGNvbnRleHQpO1xuXG4gICAgICBpZiAobGVmdFRlcm1WZXJpZmllZEFzVmFyaWFibGUpIHtcbiAgICAgICAgdmVyaWZ5VGVybShyaWdodFRlcm1Ob2RlLCB0eXBlcywgY29udGV4dCk7XG5cbiAgICAgICAgY29uc3QgZmlyc3RWYXJpYWJsZSA9IGZpcnN0KHZhcmlhYmxlcyksXG4gICAgICAgICAgICAgIGxlZnRWYXJpYWJsZSA9IGZpcnN0VmFyaWFibGUsIC8vL1xuICAgICAgICAgICAgICBmaXJzdFR5cGUgPSBmaXJzdCh0eXBlcyksXG4gICAgICAgICAgICAgIHJpZ2h0VGVybVR5cGUgPSBmaXJzdFR5cGUsIC8vL1xuICAgICAgICAgICAgICBsZWZ0VmFyaWFibGVUeXBlID0gbGVmdFZhcmlhYmxlLmdldFR5cGUoKSxcbiAgICAgICAgICAgICAgbGVmdFZhcmlhYmxlTmFtZSA9IGxlZnRWYXJpYWJsZS5nZXROYW1lKCksXG4gICAgICAgICAgICAgIGxlZnRWYXJpYWJsZVR5cGVFcXVhbFRvT3JTdXBlclR5cGVPZlJpZ2h0VGVybVR5cGUgPSBsZWZ0VmFyaWFibGVUeXBlLmlzRXF1YWxUb09yU3VwZXJUeXBlT2YocmlnaHRUZXJtVHlwZSk7XG5cbiAgICAgICAgaWYgKCFsZWZ0VmFyaWFibGVUeXBlRXF1YWxUb09yU3VwZXJUeXBlT2ZSaWdodFRlcm1UeXBlKSB7XG4gICAgICAgICAgY29uc3QgcmlnaHRUZXJtU3RyaW5nID0gbm9kZUFzU3RyaW5nKHJpZ2h0VGVybU5vZGUpLFxuICAgICAgICAgICAgICAgIHJpZ2h0VGVybVR5cGVOYW1lID0gcmlnaHRUZXJtVHlwZS5nZXROYW1lKCksXG4gICAgICAgICAgICAgICAgbGVmdFZhcmlhYmxlVHlwZU5hbWUgPSBsZWZ0VmFyaWFibGVUeXBlLmdldE5hbWUoKTtcblxuICAgICAgICAgIGNvbnRleHQuZXJyb3IoYFRoZSBsZWZ0ICcke2xlZnRWYXJpYWJsZU5hbWV9JyB2YXJpYWJsZSdzICcke2xlZnRWYXJpYWJsZVR5cGVOYW1lfScgdHlwZSBpcyBub3QgZXF1YWwgdG8gb3IgYSBzdXBlci10eXBlIG9mIHRoZSByaWdodCAnJHtyaWdodFRlcm1TdHJpbmd9JyB0ZXJtJ3MgJyR7cmlnaHRUZXJtVHlwZU5hbWV9JyB0eXBlLmAsIHN0YXRlbWVudE5vZGUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvbnN0IHR5cGUgPSBsZWZ0VmFyaWFibGVUeXBlLCAgLy8vXG4gICAgICAgICAgICAgICAgbmFtZSA9IGxlZnRWYXJpYWJsZU5hbWUsICAvLy9cbiAgICAgICAgICAgICAgICB0ZXJtTm9kZSA9IHJpZ2h0VGVybU5vZGUsIC8vL1xuICAgICAgICAgICAgICAgIHZhcmlhYmxlID0gVmFyaWFibGUuZnJvbVR5cGVOYW1lQW5kVGVybU5vZGUodHlwZSwgbmFtZSwgdGVybU5vZGUpLFxuICAgICAgICAgICAgICAgIGFzc2VydGlvbiA9IEFzc2VydGlvbi5mcm9tVmFyaWFibGUodmFyaWFibGUpO1xuXG4gICAgICAgICAgYXNzZXJ0aW9ucy5wdXNoKGFzc2VydGlvbik7XG5cbiAgICAgICAgICBzdGF0ZW1lbnRWZXJpZmllZEFzRXF1YWxpdHkgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCByaWdodFRlcm1WZXJpZmllZEFzVmFyaWFibGUgPSB2ZXJpZnlUZXJtQXNWYXJpYWJsZShyaWdodFRlcm1Ob2RlLCB2YXJpYWJsZXMsIGNvbnRleHQpO1xuXG4gICAgICAgIGlmIChyaWdodFRlcm1WZXJpZmllZEFzVmFyaWFibGUpIHtcbiAgICAgICAgICBjb25zdCBmaXJzdFZhcmlhYmxlID0gZmlyc3QodmFyaWFibGVzKSxcbiAgICAgICAgICAgICAgICByaWdodFZhcmlhYmxlID0gZmlyc3RWYXJpYWJsZSwgIC8vL1xuICAgICAgICAgICAgICAgIGxlZnRUZXJtU3RyaW5nID0gbm9kZUFzU3RyaW5nKGxlZnRUZXJtTm9kZSksXG4gICAgICAgICAgICAgICAgcmlnaHRWYXJpYWJsZU5hbWUgPSByaWdodFZhcmlhYmxlLmdldE5hbWUoKTtcblxuICAgICAgICAgIGNvbnRleHQuZXJyb3IoYFRoZSBsZWZ0ICcke2xlZnRUZXJtU3RyaW5nfScgdGVybSBjYW5ub3QgYmUgZXF1YXRlZCB3aXRoIHRoZSByaWdodCAnJHtyaWdodFZhcmlhYmxlTmFtZX0nIHZhcmlhYmxlLmAsIHN0YXRlbWVudE5vZGUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHN0YXRlbWVudFZlcmlmaWVkQXNFcXVhbGl0eSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBpZiAoc3RhdGVtZW50VmVyaWZpZWRBc0VxdWFsaXR5KSB7XG4gICAgY29udGV4dC5pbmZvKGBWZXJpZmllZCB0aGUgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50IGFzIGFuIGVxdWFsaXR5LmAsIHN0YXRlbWVudE5vZGUpO1xuICB9XG5cbiAgcmV0dXJuIHN0YXRlbWVudFZlcmlmaWVkQXNFcXVhbGl0eTtcbn1cblxuZnVuY3Rpb24gdmVyaWZ5Tm9kZShub2RlLCBjb21iaW5hdG9yTm9kZSwgY29udGV4dCkge1xuICBsZXQgbm9kZVZlcmlmaWVkO1xuXG4gIGNvbnN0IG5vZGVUZXJtaW5hbE5vZGUgPSBub2RlLmlzVGVybWluYWxOb2RlKCksXG4gICAgICAgIGNvbWJpbmF0b3JOb2RlVGVybWluYWxOb2RlID0gY29tYmluYXRvck5vZGUuaXNUZXJtaW5hbE5vZGUoKTtcblxuICBpZiAobm9kZVRlcm1pbmFsTm9kZSA9PT0gY29tYmluYXRvck5vZGVUZXJtaW5hbE5vZGUpIHtcbiAgICBpZiAobm9kZVRlcm1pbmFsTm9kZSkge1xuICAgICAgY29uc3QgdGVybWluYWxOb2RlID0gbm9kZSwgIC8vL1xuICAgICAgICAgICAgY29tYmluYXRvclRlcm1pbmFsTm9kZSA9IGNvbWJpbmF0b3JOb2RlLCAgLy8vXG4gICAgICAgICAgICB0ZXJtaW5hbE5vZGVWZXJpZmllZCA9IHZlcmlmeVRlcm1pbmFsTm9kZSh0ZXJtaW5hbE5vZGUsIGNvbWJpbmF0b3JUZXJtaW5hbE5vZGUsIGNvbnRleHQpO1xuXG4gICAgICBub2RlVmVyaWZpZWQgPSB0ZXJtaW5hbE5vZGVWZXJpZmllZDsgIC8vL1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBub25UZXJtaW5hbE5vZGUgPSBub2RlLCAvLy9cbiAgICAgICAgICAgIGNvbWJpbmF0b3JOb25UZXJtaW5hbE5vZGUgPSBjb21iaW5hdG9yTm9kZSwgIC8vL1xuICAgICAgICAgICAgbm9uVGVybWluYWxOb2RlVmVyaWZpZWQgPSB2ZXJpZnlOb25UZXJtaW5hbE5vZGUobm9uVGVybWluYWxOb2RlLCBjb21iaW5hdG9yTm9uVGVybWluYWxOb2RlLCBjb250ZXh0KTtcblxuICAgICAgbm9kZVZlcmlmaWVkID0gbm9uVGVybWluYWxOb2RlVmVyaWZpZWQ7IC8vL1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBub2RlVmVyaWZpZWQ7XG59XG5cbmZ1bmN0aW9uIHZlcmlmeU5vZGVzKG5vZGVzLCBjb21iaW5hdG9yTm9kZXMsIGNvbnRleHQpIHtcbiAgbGV0IG5vZGVzVmVyaWZpZWQgPSBmYWxzZTtcblxuICBjb25zdCBub2Rlc0xlbmd0aCA9IG5vZGVzLmxlbmd0aCxcbiAgICAgICAgY29tYmluYXRvck5vZGVzTGVuZ3RoID0gY29tYmluYXRvck5vZGVzLmxlbmd0aDtcblxuICBpZiAobm9kZXNMZW5ndGggPT09IGNvbWJpbmF0b3JOb2Rlc0xlbmd0aCkge1xuICAgIG5vZGVzVmVyaWZpZWQgPSBub2Rlcy5ldmVyeSgobm9kZSwgaW5kZXgpID0+IHtcbiAgICAgIGNvbnN0IGNvbWJpbmF0b3JOb2RlID0gY29tYmluYXRvck5vZGVzW2luZGV4XSxcbiAgICAgICAgICAgIG5vZGVWZXJpZmllZCA9IHZlcmlmeU5vZGUobm9kZSwgY29tYmluYXRvck5vZGUsIGNvbnRleHQpO1xuXG4gICAgICBpZiAobm9kZVZlcmlmaWVkKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIG5vZGVzVmVyaWZpZWQ7XG59XG5cbmZ1bmN0aW9uIHZlcmlmeVRlcm1pbmFsTm9kZSh0ZXJtaW5hbE5vZGUsIGNvbWJpbmF0b3JUZXJtaW5hbE5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IHRlcm1pbmFsTm9kZVZlcmlmaWVkID0gZmFsc2U7XG5cbiAgY29uc3QgbWF0Y2hlcyA9IHRlcm1pbmFsTm9kZS5tYXRjaChjb21iaW5hdG9yVGVybWluYWxOb2RlKTtcblxuICBpZiAobWF0Y2hlcykge1xuICAgIHRlcm1pbmFsTm9kZVZlcmlmaWVkID0gdHJ1ZTtcbiAgfVxuXG4gIHJldHVybiB0ZXJtaW5hbE5vZGVWZXJpZmllZDtcbn1cblxuZnVuY3Rpb24gdmVyaWZ5Tm9uVGVybWluYWxOb2RlKG5vblRlcm1pbmFsTm9kZSwgY29tYmluYXRvck5vblRlcm1pbmFsTm9kZSwgY29udGV4dCkge1xuICBsZXQgbm9uVGVybWluYWxOb2RlVmVyaWZpZWQgPSBmYWxzZTtcblxuICBjb25zdCBydWxlTmFtZSA9IG5vblRlcm1pbmFsTm9kZS5nZXRSdWxlTmFtZSgpLCAvLy9cbiAgICAgICAgY29tYmluYXRvclJ1bGVOYW1lID0gY29tYmluYXRvck5vblRlcm1pbmFsTm9kZS5nZXRSdWxlTmFtZSgpOyAvLy9cblxuICBpZiAocnVsZU5hbWUgPT09IGNvbWJpbmF0b3JSdWxlTmFtZSkge1xuICAgIHN3aXRjaCAocnVsZU5hbWUpIHtcbiAgICAgIGNhc2UgQVJHVU1FTlRfUlVMRV9OQU1FOiB7XG4gICAgICAgIGNvbnN0IGFyZ3VtZW50Tm9kZSA9IG5vblRlcm1pbmFsTm9kZSwgLy8vXG4gICAgICAgICAgICAgIGNvbWJpbmF0b3JBcmd1bWVudE5vZGUgPSBjb21iaW5hdG9yTm9uVGVybWluYWxOb2RlLCAvLy9cbiAgICAgICAgICAgICAgYXJndW1lbnROb2RlVmVyaWZpZWQgPSB2ZXJpZnlBcmd1bWVudE5vZGUoYXJndW1lbnROb2RlLCBjb21iaW5hdG9yQXJndW1lbnROb2RlLCBjb250ZXh0KTtcblxuICAgICAgICBub25UZXJtaW5hbE5vZGVWZXJpZmllZCA9IGFyZ3VtZW50Tm9kZVZlcmlmaWVkOyAvLy9cblxuICAgICAgICBicmVhaztcbiAgICAgIH1cblxuICAgICAgY2FzZSBNRVRBX0FSR1VNRU5UX1JVTEVfTkFNRToge1xuICAgICAgICBjb25zdCBtZXRhQXJndW1lbnROb2RlID0gbm9uVGVybWluYWxOb2RlLCAvLy9cbiAgICAgICAgICAgICAgY29tYmluYXRvck1ldGFhcmd1bWVudE5vZGUgPSBjb21iaW5hdG9yTm9uVGVybWluYWxOb2RlLCAvLy9cbiAgICAgICAgICAgICAgbWV0YUFyZ3VtZW50Tm9kZVZlcmlmaWVkID0gdmVyaWZ5TWV0YWFyZ3VtZW50Tm9kZShtZXRhQXJndW1lbnROb2RlLCBjb21iaW5hdG9yTWV0YWFyZ3VtZW50Tm9kZSwgY29udGV4dCk7XG5cbiAgICAgICAgbm9uVGVybWluYWxOb2RlVmVyaWZpZWQgPSBtZXRhQXJndW1lbnROb2RlVmVyaWZpZWQ7IC8vL1xuXG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgICBkZWZhdWx0OiB7XG4gICAgICAgIGNvbnN0IGNoaWxkTm9kZXMgPSBub25UZXJtaW5hbE5vZGUuZ2V0Q2hpbGROb2RlcygpLFxuICAgICAgICAgICAgICBjb21iaW5hdG9yQ2hpbGROb2RlcyA9IGNvbWJpbmF0b3JOb25UZXJtaW5hbE5vZGUuZ2V0Q2hpbGROb2RlcygpLFxuICAgICAgICAgICAgICBub2RlcyA9IGNoaWxkTm9kZXMsIC8vL1xuICAgICAgICAgICAgICBjb21iaW5hdG9yTm9kZXMgPSBjb21iaW5hdG9yQ2hpbGROb2RlcywgLy8vXG4gICAgICAgICAgICAgIG5vZGVzVmVyaWZpZWQgPSB2ZXJpZnlOb2Rlcyhub2RlcywgY29tYmluYXRvck5vZGVzLCBjb250ZXh0KTtcblxuICAgICAgICBub25UZXJtaW5hbE5vZGVWZXJpZmllZCA9IG5vZGVzVmVyaWZpZWQ7IC8vL1xuXG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBub25UZXJtaW5hbE5vZGVWZXJpZmllZDtcbn1cblxuZnVuY3Rpb24gdmVyaWZ5QXJndW1lbnROb2RlKGFyZ3VtZW50Tm9kZSwgY29tYmluYXRvckFyZ3VtZW50Tm9kZSwgY29udGV4dCkge1xuICBsZXQgYXJndW1lbnROb2RlVmVyaWZpZWQgPSBmYWxzZTtcblxuICBjb25zdCB0ZXJtTm9kZSA9IHRlcm1Ob2RlUXVlcnkoYXJndW1lbnROb2RlKTtcblxuICBpZiAodGVybU5vZGUgPT09IG51bGwpIHtcbiAgICBjb25zdCBhcmd1bWVudFN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKGFyZ3VtZW50Tm9kZSk7XG5cbiAgICBjb250ZXh0LmVycm9yKGBUaGUgJHthcmd1bWVudFN0cmluZ30gYXJndW1lbnQgc2hvdWxkIGJlIGEgdGVybSwgbm90IGEgdHlwZWAsIGFyZ3VtZW50Tm9kZSk7XG4gIH0gZWxzZSB7XG4gICAgY29uc3QgdHlwZXMgPSBbXSxcbiAgICAgICAgICB0ZXJtVmVyaWZpZWQgPSB2ZXJpZnlUZXJtKHRlcm1Ob2RlLCB0eXBlcywgY29udGV4dCk7XG5cbiAgICBpZiAodGVybVZlcmlmaWVkKSB7XG4gICAgICBjb25zdCBmaXJzdFR5cGUgPSBmaXJzdCh0eXBlcyksXG4gICAgICAgICAgICB0ZXJtVHlwZSA9IGZpcnN0VHlwZSwgLy8vXG4gICAgICAgICAgICB0eXBlTm9kZSA9IHR5cGVOb2RlUXVlcnkoY29tYmluYXRvckFyZ3VtZW50Tm9kZSksXG4gICAgICAgICAgICB0eXBlTmFtZSA9IHR5cGVOYW1lRnJvbVR5cGVOb2RlKHR5cGVOb2RlKSxcbiAgICAgICAgICAgIHR5cGUgPSAodHlwZU5hbWUgPT09IE9CSkVDVF9UWVBFX05BTUUpID9cbiAgICAgICAgICAgICAgICAgICAgIG9iamVjdFR5cGUgOiAgLy8vXG4gICAgICAgICAgICAgICAgICAgICAgIGNvbnRleHQuZmluZFR5cGVCeVR5cGVOYW1lKHR5cGVOYW1lKSxcbiAgICAgICAgICAgIHN0YXRlbWVudFR5cGVFcXVhbFRvT3JTdWJUeXBlT2ZUeXBlID0gdGVybVR5cGUuaXNFcXVhbFRvT3JTdWJUeXBlT2YodHlwZSk7XG5cbiAgICAgIGlmIChzdGF0ZW1lbnRUeXBlRXF1YWxUb09yU3ViVHlwZU9mVHlwZSkge1xuICAgICAgICBhcmd1bWVudE5vZGVWZXJpZmllZCA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGFyZ3VtZW50Tm9kZVZlcmlmaWVkO1xufVxuXG5mdW5jdGlvbiB2ZXJpZnlNZXRhYXJndW1lbnROb2RlKG1ldGFBcmd1bWVudE5vZGUsIGNvbWJpbmF0b3JNZXRhYXJndW1lbnROb2RlLCBjb250ZXh0KSB7XG4gIGxldCBtZXRhQXJndW1lbnROb2RlVmVyaWZpZWQgPSBmYWxzZTtcblxuICBjb25zdCBzdGF0ZW1lbnROb2RlID0gc3RhdGVtZW50Tm9kZVF1ZXJ5KG1ldGFBcmd1bWVudE5vZGUpLFxuICAgICAgICBjb21iaW5hdG9yTWV0YVRZcGVOb2RlID0gbWV0YVR5cGVOb2RlUXVlcnkoY29tYmluYXRvck1ldGFhcmd1bWVudE5vZGUpO1xuXG4gIGlmIChzdGF0ZW1lbnROb2RlID09PSBudWxsKSB7XG4gICAgY29uc3QgbWV0YUFyZ3VtZW50U3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobWV0YUFyZ3VtZW50Tm9kZSk7XG5cbiAgICBjb250ZXh0LmVycm9yKGBFeHBlY3RlZCBhIHN0YXRlbWVudCBidXQgZ290IGEgJyR7bWV0YUFyZ3VtZW50U3RyaW5nfScgbWV0YS10eXBlLmAsIG1ldGFBcmd1bWVudE5vZGUpO1xuICB9IGVsc2Uge1xuICAgIGlmIChjb21iaW5hdG9yTWV0YVRZcGVOb2RlID09PSBudWxsKSB7XG4gICAgICBjb25zdCBjb21iaW5hdG9yTWV0YWFyZ3VtZW50U3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcoY29tYmluYXRvck1ldGFhcmd1bWVudE5vZGUpO1xuXG4gICAgICBjb250ZXh0LmVycm9yKGBFeHBlY3RlZCBhIG1ldGEtdHlwZSBidXQgZ290IGEgJyR7Y29tYmluYXRvck1ldGFhcmd1bWVudFN0cmluZ30nIHN0YXRlbWVudC5gLCBtZXRhQXJndW1lbnROb2RlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgY29tYmluYXRvck1ldGFUeXBlVGVybWluYWxOb2RlID0gbWV0YVR5cGVUZXJtaW5hbE5vZGVRdWVyeShjb21iaW5hdG9yTWV0YVRZcGVOb2RlKSxcbiAgICAgICAgICAgIGNvbnRlbnQgPSBjb21iaW5hdG9yTWV0YVR5cGVUZXJtaW5hbE5vZGUuZ2V0Q29udGVudCgpLFxuICAgICAgICAgICAgY29udGVudFN0YXRlbWVudE1ldGFUeXBlID0gKGNvbnRlbnQgPT09IFNUQVRFTUVOVF9NRVRBX1RZUEUpO1xuXG4gICAgICBpZiAoIWNvbnRlbnRTdGF0ZW1lbnRNZXRhVHlwZSkge1xuICAgICAgICBjb250ZXh0LmVycm9yKGBFeHBlY3RlZCB0aGUgbWV0YS10eXBlIHRvIGJlICdTdGF0ZW1lbnQnIGJ1dCBnb3QgJyR7Y29udGVudH0nLmAsIG1ldGFBcmd1bWVudE5vZGUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbWV0YUFyZ3VtZW50Tm9kZVZlcmlmaWVkID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gbWV0YUFyZ3VtZW50Tm9kZVZlcmlmaWVkO1xufVxuIl0sIm5hbWVzIjpbInZlcmlmeVN0YXRlbWVudCIsInRlcm1Ob2RlUXVlcnkiLCJub2RlUXVlcnkiLCJ0eXBlTm9kZVF1ZXJ5IiwibGVmdFRlcm1Ob2RlUXVlcnkiLCJyaWdodFRlcm1Ob2RlUXVlcnkiLCJtZXRhVHlwZU5vZGVRdWVyeSIsInN0YXRlbWVudE5vZGVRdWVyeSIsInR5cGVBc3NlcnRpb25Ob2RlUXVlcnkiLCJtZXRhVHlwZVRlcm1pbmFsTm9kZVF1ZXJ5Iiwic3RhdGVtZW50Tm9kZSIsImFzc2VydGlvbnMiLCJkZXJpdmVkIiwiY29udGV4dCIsInN0YXRlbWVudFZlcmlmaWVkIiwic3RhdGVtZW50VmVyaWZpZWRBZ2FpbnN0Q29tYmluYXRvcnMiLCJ2ZXJpZnlTdGF0ZW1lbnRBZ2FpbnN0Q29tYmluYXRvcnMiLCJzdGF0ZW1lbnRWZXJpZmllZEFzVHlwZUFzc2VydGlvbiIsInZlcmlmeVN0YXRlbWVudEFzVHlwZUFzc2VydGlvbiIsInN0YXRlbWVudFZlcmlmaWVkQXNFcXVhbGl0eSIsInZlcmlmeVN0YXRlbWVudEFzRXF1YWxpdHkiLCJjb21iaW5hdG9ycyIsImdldENvbWJpbmF0b3JzIiwiYnJhY2tldGVkQ29tYmluYXRvciIsImNvbWJpbmF0b3IiLCJmaW5kIiwic3RhdGVtZW50VmVyaWZpZWRBZ2FpbnN0Q29tYmluYXRvciIsInZlcmlmeVN0YXRlbWVudEFnYWluc3RDb21iaW5hdG9yIiwiY29tYmluYXRvclN0YXRlbWVudE5vZGUiLCJnZXRTdGF0ZW1lbnROb2RlIiwibm9kZSIsImNvbWJpbmF0b3JOb2RlIiwibm9kZVZlcmlmaWVkIiwidmVyaWZ5Tm9kZSIsInR5cGVBc3NlcnRpb25Ob2RlIiwidHlwZUFzc2VydGlvblZlcmlmaWVkIiwidmVyaWZ5VHlwZUFzc2VydGlvbiIsInN0YXRlbWVudFN0cmluZyIsIm5vZGVBc1N0cmluZyIsImVxdWFsaXR5Q29tYmluYXRvciIsInR5cGVzIiwidmFyaWFibGVzIiwibGVmdFRlcm1Ob2RlIiwicmlnaHRUZXJtTm9kZSIsImxlZnRUZXJtVmVyaWZpZWRBc1ZhcmlhYmxlIiwidmVyaWZ5VGVybUFzVmFyaWFibGUiLCJ2ZXJpZnlUZXJtIiwiZmlyc3RWYXJpYWJsZSIsImZpcnN0IiwibGVmdFZhcmlhYmxlIiwiZmlyc3RUeXBlIiwicmlnaHRUZXJtVHlwZSIsImxlZnRWYXJpYWJsZVR5cGUiLCJnZXRUeXBlIiwibGVmdFZhcmlhYmxlTmFtZSIsImdldE5hbWUiLCJsZWZ0VmFyaWFibGVUeXBlRXF1YWxUb09yU3VwZXJUeXBlT2ZSaWdodFRlcm1UeXBlIiwiaXNFcXVhbFRvT3JTdXBlclR5cGVPZiIsInJpZ2h0VGVybVN0cmluZyIsInJpZ2h0VGVybVR5cGVOYW1lIiwibGVmdFZhcmlhYmxlVHlwZU5hbWUiLCJlcnJvciIsInR5cGUiLCJuYW1lIiwidGVybU5vZGUiLCJ2YXJpYWJsZSIsIlZhcmlhYmxlIiwiZnJvbVR5cGVOYW1lQW5kVGVybU5vZGUiLCJhc3NlcnRpb24iLCJBc3NlcnRpb24iLCJmcm9tVmFyaWFibGUiLCJwdXNoIiwicmlnaHRUZXJtVmVyaWZpZWRBc1ZhcmlhYmxlIiwicmlnaHRWYXJpYWJsZSIsImxlZnRUZXJtU3RyaW5nIiwicmlnaHRWYXJpYWJsZU5hbWUiLCJpbmZvIiwibm9kZVRlcm1pbmFsTm9kZSIsImlzVGVybWluYWxOb2RlIiwiY29tYmluYXRvck5vZGVUZXJtaW5hbE5vZGUiLCJ0ZXJtaW5hbE5vZGUiLCJjb21iaW5hdG9yVGVybWluYWxOb2RlIiwidGVybWluYWxOb2RlVmVyaWZpZWQiLCJ2ZXJpZnlUZXJtaW5hbE5vZGUiLCJub25UZXJtaW5hbE5vZGUiLCJjb21iaW5hdG9yTm9uVGVybWluYWxOb2RlIiwibm9uVGVybWluYWxOb2RlVmVyaWZpZWQiLCJ2ZXJpZnlOb25UZXJtaW5hbE5vZGUiLCJ2ZXJpZnlOb2RlcyIsIm5vZGVzIiwiY29tYmluYXRvck5vZGVzIiwibm9kZXNWZXJpZmllZCIsIm5vZGVzTGVuZ3RoIiwibGVuZ3RoIiwiY29tYmluYXRvck5vZGVzTGVuZ3RoIiwiZXZlcnkiLCJpbmRleCIsIm1hdGNoZXMiLCJtYXRjaCIsInJ1bGVOYW1lIiwiZ2V0UnVsZU5hbWUiLCJjb21iaW5hdG9yUnVsZU5hbWUiLCJBUkdVTUVOVF9SVUxFX05BTUUiLCJhcmd1bWVudE5vZGUiLCJjb21iaW5hdG9yQXJndW1lbnROb2RlIiwiYXJndW1lbnROb2RlVmVyaWZpZWQiLCJ2ZXJpZnlBcmd1bWVudE5vZGUiLCJNRVRBX0FSR1VNRU5UX1JVTEVfTkFNRSIsIm1ldGFBcmd1bWVudE5vZGUiLCJjb21iaW5hdG9yTWV0YWFyZ3VtZW50Tm9kZSIsIm1ldGFBcmd1bWVudE5vZGVWZXJpZmllZCIsInZlcmlmeU1ldGFhcmd1bWVudE5vZGUiLCJjaGlsZE5vZGVzIiwiZ2V0Q2hpbGROb2RlcyIsImNvbWJpbmF0b3JDaGlsZE5vZGVzIiwiYXJndW1lbnRTdHJpbmciLCJ0ZXJtVmVyaWZpZWQiLCJ0ZXJtVHlwZSIsInR5cGVOb2RlIiwidHlwZU5hbWUiLCJ0eXBlTmFtZUZyb21UeXBlTm9kZSIsIk9CSkVDVF9UWVBFX05BTUUiLCJvYmplY3RUeXBlIiwiZmluZFR5cGVCeVR5cGVOYW1lIiwic3RhdGVtZW50VHlwZUVxdWFsVG9PclN1YlR5cGVPZlR5cGUiLCJpc0VxdWFsVG9PclN1YlR5cGVPZiIsImNvbWJpbmF0b3JNZXRhVFlwZU5vZGUiLCJtZXRhQXJndW1lbnRTdHJpbmciLCJjb21iaW5hdG9yTWV0YWFyZ3VtZW50U3RyaW5nIiwiY29tYmluYXRvck1ldGFUeXBlVGVybWluYWxOb2RlIiwiY29udGVudCIsImdldENvbnRlbnQiLCJjb250ZW50U3RhdGVtZW50TWV0YVR5cGUiLCJTVEFURU1FTlRfTUVUQV9UWVBFIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkEyQkE7OztlQUF3QkE7Ozs2REF6Qkg7OERBQ0M7MERBQ0M7NkRBQ1E7OERBQ0M7eURBQ0E7cUJBRVY7cUJBQ0s7c0JBQ0U7eUJBQ0k7eUJBQ0c7cUJBRVk7eUJBQ1k7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFNUQsSUFBTUMsZ0JBQWdCQyxJQUFBQSxnQkFBUyxFQUFDLG9CQUMxQkMsZ0JBQWdCRCxJQUFBQSxnQkFBUyxFQUFDLG9CQUMxQkUsb0JBQW9CRixJQUFBQSxnQkFBUyxFQUFDLGlDQUM5QkcscUJBQXFCSCxJQUFBQSxnQkFBUyxFQUFDLGlDQUMvQkksb0JBQW9CSixJQUFBQSxnQkFBUyxFQUFDLDRCQUM5QksscUJBQXFCTCxJQUFBQSxnQkFBUyxFQUFDLDZCQUMvQk0seUJBQXlCTixJQUFBQSxnQkFBUyxFQUFDLDhCQUNuQ08sNEJBQTRCUCxJQUFBQSxnQkFBUyxFQUFDO0FBRTdCLFNBQVNGLGdCQUFnQlUsYUFB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