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
var _equality = /*#__PURE__*/ _interopRequireDefault(require("../equality"));
var _term = /*#__PURE__*/ _interopRequireDefault(require("../verify/term"));
var _equality1 = /*#__PURE__*/ _interopRequireDefault(require("../ocmbinator/equality"));
var _bracketed = /*#__PURE__*/ _interopRequireDefault(require("../ocmbinator/bracketed"));
var _type = /*#__PURE__*/ _interopRequireDefault(require("../verify/assertion/type"));
var _array = require("../utilities/array");
var _type1 = require("../type");
var _typeNames = require("../typeNames");
var _metaTypes = require("../metaTypes");
var _constants = require("../constants");
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
        var statementVerifiedAsEquality = verifyStatementAsEquality(statementNode, derived, context);
        statementVerified = statementVerifiedAsEquality; //
    }
    if (!statementVerified) {
        var statementVerifiedAsTypeAssertion = verifyStatementAsTypeAssertion(statementNode, assertions, derived, context);
        statementVerified = statementVerifiedAsTypeAssertion; ///
    }
    if (!statementVerified) {
        var statementVerifiedAgainstCombinators = verifyStatementAgainstCombinators(statementNode, context);
        statementVerified = statementVerifiedAgainstCombinators; ///
    }
    statementVerified ? context.complete(statementNode) : context.halt(statementNode);
    return statementVerified;
}
function verifyStatementAsEquality(statementNode, derived, context) {
    var statementVerifiedAsEquality = false;
    var combinator = _equality1.default, statementVerifiedAgainstCombinator = verifyStatementAgainstCombinator(statementNode, combinator, context);
    if (statementVerifiedAgainstCombinator) {
        var equality = _equality.default.fromStatementNode(statementNode, context);
        if (equality !== null) {
            statementVerifiedAsEquality = true; ///
            if (derived) {
                var proofSteps = context.getProofSteps(), equalities = equalitiesFromProofSteps(proofSteps, context);
                if (equalities !== null) {
                    var equalityEquates = equality.equate(equalities);
                    statementVerifiedAsEquality = equalityEquates; ///
                }
            }
        }
    }
    return statementVerifiedAsEquality;
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
function equalitiesFromProofSteps(proofSteps, context) {
    var equalities = [];
    var start = -_constants.MAXIMUM_INDEXES_LENGTH; ///
    proofSteps = proofSteps.slice(start); ///
    proofSteps.every(function(proofStep) {
        var equality = _equality.default.fromProofStep(proofStep, context);
        if (equality === null) {
            equalities = null;
        } else {
            equalities.push(equality);
            return true;
        }
    });
    return equalities;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92ZXJpZnkvc3RhdGVtZW50LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgRXF1YWxpdHkgZnJvbSBcIi4uL2VxdWFsaXR5XCI7XG5pbXBvcnQgdmVyaWZ5VGVybSBmcm9tIFwiLi4vdmVyaWZ5L3Rlcm1cIjtcbmltcG9ydCBlcXVhbGl0eUNvbWJpbmF0b3IgZnJvbSBcIi4uL29jbWJpbmF0b3IvZXF1YWxpdHlcIjtcbmltcG9ydCBicmFja2V0ZWRDb21iaW5hdG9yIGZyb20gXCIuLi9vY21iaW5hdG9yL2JyYWNrZXRlZFwiO1xuaW1wb3J0IHZlcmlmeVR5cGVBc3NlcnRpb24gZnJvbSBcIi4uL3ZlcmlmeS9hc3NlcnRpb24vdHlwZVwiO1xuXG5pbXBvcnQgeyBmaXJzdCB9IGZyb20gXCIuLi91dGlsaXRpZXMvYXJyYXlcIjtcbmltcG9ydCB7IG9iamVjdFR5cGUgfSBmcm9tIFwiLi4vdHlwZVwiO1xuaW1wb3J0IHsgT0JKRUNUX1RZUEVfTkFNRSB9IGZyb20gXCIuLi90eXBlTmFtZXNcIjtcbmltcG9ydCB7IFNUQVRFTUVOVF9NRVRBX1RZUEUgfSBmcm9tIFwiLi4vbWV0YVR5cGVzXCI7XG5pbXBvcnQgeyBNQVhJTVVNX0lOREVYRVNfTEVOR1RIIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgbm9kZVF1ZXJ5LCB0eXBlTmFtZUZyb21UeXBlTm9kZSB9IGZyb20gXCIuLi91dGlsaXRpZXMvcXVlcnlcIjtcbmltcG9ydCB7IEFSR1VNRU5UX1JVTEVfTkFNRSwgTUVUQV9BUkdVTUVOVF9SVUxFX05BTUUgfSBmcm9tIFwiLi4vcnVsZU5hbWVzXCI7XG5cbmNvbnN0IHRlcm1Ob2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvYXJndW1lbnQvdGVybSFcIiksXG4gICAgICB0eXBlTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL2FyZ3VtZW50L3R5cGUhXCIpLFxuICAgICAgbWV0YVR5cGVOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvbWV0YUFyZ3VtZW50L21ldGFUeXBlIS9AbWV0YS10eXBlXCIpLFxuICAgICAgc3RhdGVtZW50Tm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL21ldGFBcmd1bWVudC9zdGF0ZW1lbnQhXCIpLFxuICAgICAgdHlwZUFzc2VydGlvbk5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9zdGF0ZW1lbnQvdHlwZUFzc2VydGlvbiFcIik7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHZlcmlmeVN0YXRlbWVudChzdGF0ZW1lbnROb2RlLCBhc3NlcnRpb25zLCBkZXJpdmVkLCBjb250ZXh0KSB7XG4gIGxldCBzdGF0ZW1lbnRWZXJpZmllZCA9IGZhbHNlO1xuXG4gIGNvbnRleHQuYmVnaW4oc3RhdGVtZW50Tm9kZSk7XG5cbiAgaWYgKCFzdGF0ZW1lbnRWZXJpZmllZCkge1xuICAgIGNvbnN0IHN0YXRlbWVudFZlcmlmaWVkQXNFcXVhbGl0eSA9IHZlcmlmeVN0YXRlbWVudEFzRXF1YWxpdHkoc3RhdGVtZW50Tm9kZSwgZGVyaXZlZCwgY29udGV4dCk7XG5cbiAgICBzdGF0ZW1lbnRWZXJpZmllZCA9IHN0YXRlbWVudFZlcmlmaWVkQXNFcXVhbGl0eTsgIC8vXG4gIH1cblxuICBpZiAoIXN0YXRlbWVudFZlcmlmaWVkKSB7XG4gICAgY29uc3Qgc3RhdGVtZW50VmVyaWZpZWRBc1R5cGVBc3NlcnRpb24gPSB2ZXJpZnlTdGF0ZW1lbnRBc1R5cGVBc3NlcnRpb24oc3RhdGVtZW50Tm9kZSwgYXNzZXJ0aW9ucywgZGVyaXZlZCwgY29udGV4dCk7XG5cbiAgICBzdGF0ZW1lbnRWZXJpZmllZCA9IHN0YXRlbWVudFZlcmlmaWVkQXNUeXBlQXNzZXJ0aW9uOyAvLy9cbiAgfVxuXG4gIGlmICghc3RhdGVtZW50VmVyaWZpZWQpIHtcbiAgICBjb25zdCBzdGF0ZW1lbnRWZXJpZmllZEFnYWluc3RDb21iaW5hdG9ycyA9IHZlcmlmeVN0YXRlbWVudEFnYWluc3RDb21iaW5hdG9ycyhzdGF0ZW1lbnROb2RlLCBjb250ZXh0KTtcblxuICAgIHN0YXRlbWVudFZlcmlmaWVkID0gc3RhdGVtZW50VmVyaWZpZWRBZ2FpbnN0Q29tYmluYXRvcnM7ICAvLy9cbiAgfVxuXG4gIHN0YXRlbWVudFZlcmlmaWVkID9cbiAgICBjb250ZXh0LmNvbXBsZXRlKHN0YXRlbWVudE5vZGUpIDpcbiAgICAgIGNvbnRleHQuaGFsdChzdGF0ZW1lbnROb2RlKTtcblxuICByZXR1cm4gc3RhdGVtZW50VmVyaWZpZWQ7XG59XG5cbmZ1bmN0aW9uIHZlcmlmeVN0YXRlbWVudEFzRXF1YWxpdHkoc3RhdGVtZW50Tm9kZSwgZGVyaXZlZCwgY29udGV4dCkge1xuICBsZXQgc3RhdGVtZW50VmVyaWZpZWRBc0VxdWFsaXR5ID0gZmFsc2U7XG5cbiAgY29uc3QgY29tYmluYXRvciA9IGVxdWFsaXR5Q29tYmluYXRvciwgIC8vL1xuICAgICAgICBzdGF0ZW1lbnRWZXJpZmllZEFnYWluc3RDb21iaW5hdG9yID0gdmVyaWZ5U3RhdGVtZW50QWdhaW5zdENvbWJpbmF0b3Ioc3RhdGVtZW50Tm9kZSwgY29tYmluYXRvciwgY29udGV4dCk7XG5cbiAgaWYgKHN0YXRlbWVudFZlcmlmaWVkQWdhaW5zdENvbWJpbmF0b3IpIHtcbiAgICBjb25zdCBlcXVhbGl0eSA9IEVxdWFsaXR5LmZyb21TdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUsIGNvbnRleHQpO1xuXG4gICAgaWYgKGVxdWFsaXR5ICE9PSBudWxsKSB7XG4gICAgICBzdGF0ZW1lbnRWZXJpZmllZEFzRXF1YWxpdHkgPSB0cnVlOyAvLy9cblxuICAgICAgaWYgKGRlcml2ZWQpIHtcbiAgICAgICAgY29uc3QgcHJvb2ZTdGVwcyA9IGNvbnRleHQuZ2V0UHJvb2ZTdGVwcygpLFxuICAgICAgICAgICAgICBlcXVhbGl0aWVzID0gZXF1YWxpdGllc0Zyb21Qcm9vZlN0ZXBzKHByb29mU3RlcHMsIGNvbnRleHQpO1xuXG4gICAgICAgIGlmIChlcXVhbGl0aWVzICE9PSBudWxsKSB7XG4gICAgICAgICAgY29uc3QgZXF1YWxpdHlFcXVhdGVzID0gZXF1YWxpdHkuZXF1YXRlKGVxdWFsaXRpZXMpO1xuXG4gICAgICAgICAgc3RhdGVtZW50VmVyaWZpZWRBc0VxdWFsaXR5ID0gZXF1YWxpdHlFcXVhdGVzOyAvLy9cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBzdGF0ZW1lbnRWZXJpZmllZEFzRXF1YWxpdHk7XG59XG5cbmZ1bmN0aW9uIHZlcmlmeVN0YXRlbWVudEFzVHlwZUFzc2VydGlvbihzdGF0ZW1lbnROb2RlLCBhc3NlcnRpb25zLCBkZXJpdmVkLCBjb250ZXh0KSB7XG4gIGxldCBzdGF0ZW1lbnRWZXJpZmllZEFzVHlwZUFzc2VydGlvbiA9IGZhbHNlO1xuXG4gIGNvbnN0IHR5cGVBc3NlcnRpb25Ob2RlID0gdHlwZUFzc2VydGlvbk5vZGVRdWVyeShzdGF0ZW1lbnROb2RlKTtcblxuICBpZiAodHlwZUFzc2VydGlvbk5vZGUgIT09IG51bGwpIHtcbiAgICBjb25zdCB0eXBlQXNzZXJ0aW9uVmVyaWZpZWQgPSB2ZXJpZnlUeXBlQXNzZXJ0aW9uKHR5cGVBc3NlcnRpb25Ob2RlLCBhc3NlcnRpb25zLCBkZXJpdmVkLCBjb250ZXh0KTtcblxuICAgIHN0YXRlbWVudFZlcmlmaWVkQXNUeXBlQXNzZXJ0aW9uID0gdHlwZUFzc2VydGlvblZlcmlmaWVkOyAvLy9cbiAgfVxuXG4gIHJldHVybiBzdGF0ZW1lbnRWZXJpZmllZEFzVHlwZUFzc2VydGlvbjtcbn1cblxuZnVuY3Rpb24gdmVyaWZ5U3RhdGVtZW50QWdhaW5zdENvbWJpbmF0b3JzKHN0YXRlbWVudE5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IHN0YXRlbWVudFZlcmlmaWVkQWdhaW5zdENvbWJpbmF0b3JzID0gZmFsc2U7XG5cbiAgbGV0IGNvbWJpbmF0b3JzID0gY29udGV4dC5nZXRDb21iaW5hdG9ycygpO1xuXG4gIGNvbWJpbmF0b3JzID0gWyAvLy9cbiAgICBicmFja2V0ZWRDb21iaW5hdG9yLFxuICAgIC4uLmNvbWJpbmF0b3JzXG4gIF07XG5cbiAgY29uc3QgY29tYmluYXRvciA9IGNvbWJpbmF0b3JzLmZpbmQoKGNvbWJpbmF0b3IpID0+IHtcbiAgICAgICAgICBjb25zdCBzdGF0ZW1lbnRWZXJpZmllZEFnYWluc3RDb21iaW5hdG9yID0gdmVyaWZ5U3RhdGVtZW50QWdhaW5zdENvbWJpbmF0b3Ioc3RhdGVtZW50Tm9kZSwgY29tYmluYXRvciwgY29udGV4dCk7XG5cbiAgICAgICAgICBpZiAoc3RhdGVtZW50VmVyaWZpZWRBZ2FpbnN0Q29tYmluYXRvcikge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9KSB8fCBudWxsO1xuXG4gIGlmIChjb21iaW5hdG9yICE9PSBudWxsKSB7XG4gICAgc3RhdGVtZW50VmVyaWZpZWRBZ2FpbnN0Q29tYmluYXRvcnMgPSB0cnVlO1xuICB9XG5cbiAgcmV0dXJuIHN0YXRlbWVudFZlcmlmaWVkQWdhaW5zdENvbWJpbmF0b3JzO1xufVxuXG5mdW5jdGlvbiB2ZXJpZnlTdGF0ZW1lbnRBZ2FpbnN0Q29tYmluYXRvcihzdGF0ZW1lbnROb2RlLCBjb21iaW5hdG9yLCBjb250ZXh0KSB7XG4gIGNvbnN0IGNvbWJpbmF0b3JTdGF0ZW1lbnROb2RlID0gY29tYmluYXRvci5nZXRTdGF0ZW1lbnROb2RlKCksXG4gICAgICAgIG5vZGUgPSBzdGF0ZW1lbnROb2RlLCAgLy8vXG4gICAgICAgIGNvbWJpbmF0b3JOb2RlID0gY29tYmluYXRvclN0YXRlbWVudE5vZGUsIC8vL1xuICAgICAgICBub2RlVmVyaWZpZWQgPSB2ZXJpZnlOb2RlKG5vZGUsIGNvbWJpbmF0b3JOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgc3RhdGVtZW50VmVyaWZpZWRBZ2FpbnN0Q29tYmluYXRvciA9IG5vZGVWZXJpZmllZDsgIC8vL1xuXG4gIHJldHVybiBzdGF0ZW1lbnRWZXJpZmllZEFnYWluc3RDb21iaW5hdG9yO1xufVxuXG5mdW5jdGlvbiB2ZXJpZnlOb2RlKG5vZGUsIGNvbWJpbmF0b3JOb2RlLCBjb250ZXh0KSB7XG4gIGxldCBub2RlVmVyaWZpZWQ7XG5cbiAgY29uc3Qgbm9kZVRlcm1pbmFsTm9kZSA9IG5vZGUuaXNUZXJtaW5hbE5vZGUoKSxcbiAgICAgICAgY29tYmluYXRvck5vZGVUZXJtaW5hbE5vZGUgPSBjb21iaW5hdG9yTm9kZS5pc1Rlcm1pbmFsTm9kZSgpO1xuXG4gIGlmIChub2RlVGVybWluYWxOb2RlID09PSBjb21iaW5hdG9yTm9kZVRlcm1pbmFsTm9kZSkge1xuICAgIGlmIChub2RlVGVybWluYWxOb2RlKSB7XG4gICAgICBjb25zdCB0ZXJtaW5hbE5vZGUgPSBub2RlLCAgLy8vXG4gICAgICAgICAgICBjb21iaW5hdG9yVGVybWluYWxOb2RlID0gY29tYmluYXRvck5vZGUsICAvLy9cbiAgICAgICAgICAgIHRlcm1pbmFsTm9kZVZlcmlmaWVkID0gdmVyaWZ5VGVybWluYWxOb2RlKHRlcm1pbmFsTm9kZSwgY29tYmluYXRvclRlcm1pbmFsTm9kZSwgY29udGV4dCk7XG5cbiAgICAgIG5vZGVWZXJpZmllZCA9IHRlcm1pbmFsTm9kZVZlcmlmaWVkOyAgLy8vXG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IG5vblRlcm1pbmFsTm9kZSA9IG5vZGUsIC8vL1xuICAgICAgICAgICAgY29tYmluYXRvck5vblRlcm1pbmFsTm9kZSA9IGNvbWJpbmF0b3JOb2RlLCAgLy8vXG4gICAgICAgICAgICBub25UZXJtaW5hbE5vZGVWZXJpZmllZCA9IHZlcmlmeU5vblRlcm1pbmFsTm9kZShub25UZXJtaW5hbE5vZGUsIGNvbWJpbmF0b3JOb25UZXJtaW5hbE5vZGUsIGNvbnRleHQpO1xuXG4gICAgICBub2RlVmVyaWZpZWQgPSBub25UZXJtaW5hbE5vZGVWZXJpZmllZDsgLy8vXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG5vZGVWZXJpZmllZDtcbn1cblxuZnVuY3Rpb24gdmVyaWZ5Tm9kZXMobm9kZXMsIGNvbWJpbmF0b3JOb2RlcywgY29udGV4dCkge1xuICBsZXQgbm9kZXNWZXJpZmllZCA9IGZhbHNlO1xuXG4gIGNvbnN0IG5vZGVzTGVuZ3RoID0gbm9kZXMubGVuZ3RoLFxuICAgICAgICBjb21iaW5hdG9yTm9kZXNMZW5ndGggPSBjb21iaW5hdG9yTm9kZXMubGVuZ3RoO1xuXG4gIGlmIChub2Rlc0xlbmd0aCA9PT0gY29tYmluYXRvck5vZGVzTGVuZ3RoKSB7XG4gICAgbm9kZXNWZXJpZmllZCA9IG5vZGVzLmV2ZXJ5KChub2RlLCBpbmRleCkgPT4ge1xuICAgICAgY29uc3QgY29tYmluYXRvck5vZGUgPSBjb21iaW5hdG9yTm9kZXNbaW5kZXhdLFxuICAgICAgICAgICAgbm9kZVZlcmlmaWVkID0gdmVyaWZ5Tm9kZShub2RlLCBjb21iaW5hdG9yTm9kZSwgY29udGV4dCk7XG5cbiAgICAgIGlmIChub2RlVmVyaWZpZWQpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICByZXR1cm4gbm9kZXNWZXJpZmllZDtcbn1cblxuZnVuY3Rpb24gdmVyaWZ5VGVybWluYWxOb2RlKHRlcm1pbmFsTm9kZSwgY29tYmluYXRvclRlcm1pbmFsTm9kZSwgY29udGV4dCkge1xuICBsZXQgdGVybWluYWxOb2RlVmVyaWZpZWQgPSBmYWxzZTtcblxuICBjb25zdCBtYXRjaGVzID0gdGVybWluYWxOb2RlLm1hdGNoKGNvbWJpbmF0b3JUZXJtaW5hbE5vZGUpO1xuXG4gIGlmIChtYXRjaGVzKSB7XG4gICAgdGVybWluYWxOb2RlVmVyaWZpZWQgPSB0cnVlO1xuICB9XG5cbiAgcmV0dXJuIHRlcm1pbmFsTm9kZVZlcmlmaWVkO1xufVxuXG5mdW5jdGlvbiB2ZXJpZnlOb25UZXJtaW5hbE5vZGUobm9uVGVybWluYWxOb2RlLCBjb21iaW5hdG9yTm9uVGVybWluYWxOb2RlLCBjb250ZXh0KSB7XG4gIGxldCBub25UZXJtaW5hbE5vZGVWZXJpZmllZCA9IGZhbHNlO1xuXG4gIGNvbnN0IHJ1bGVOYW1lID0gbm9uVGVybWluYWxOb2RlLmdldFJ1bGVOYW1lKCksIC8vL1xuICAgICAgICBjb21iaW5hdG9yUnVsZU5hbWUgPSBjb21iaW5hdG9yTm9uVGVybWluYWxOb2RlLmdldFJ1bGVOYW1lKCk7IC8vL1xuXG4gIGlmIChydWxlTmFtZSA9PT0gY29tYmluYXRvclJ1bGVOYW1lKSB7XG4gICAgc3dpdGNoIChydWxlTmFtZSkge1xuICAgICAgY2FzZSBBUkdVTUVOVF9SVUxFX05BTUU6IHtcbiAgICAgICAgY29uc3QgYXJndW1lbnROb2RlID0gbm9uVGVybWluYWxOb2RlLCAvLy9cbiAgICAgICAgICAgICAgY29tYmluYXRvckFyZ3VtZW50Tm9kZSA9IGNvbWJpbmF0b3JOb25UZXJtaW5hbE5vZGUsIC8vL1xuICAgICAgICAgICAgICBhcmd1bWVudE5vZGVWZXJpZmllZCA9IHZlcmlmeUFyZ3VtZW50Tm9kZShhcmd1bWVudE5vZGUsIGNvbWJpbmF0b3JBcmd1bWVudE5vZGUsIGNvbnRleHQpO1xuXG4gICAgICAgIG5vblRlcm1pbmFsTm9kZVZlcmlmaWVkID0gYXJndW1lbnROb2RlVmVyaWZpZWQ7IC8vL1xuXG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgICBjYXNlIE1FVEFfQVJHVU1FTlRfUlVMRV9OQU1FOiB7XG4gICAgICAgIGNvbnN0IG1ldGFBcmd1bWVudE5vZGUgPSBub25UZXJtaW5hbE5vZGUsIC8vL1xuICAgICAgICAgICAgICBjb21iaW5hdG9yTWV0YWFyZ3VtZW50Tm9kZSA9IGNvbWJpbmF0b3JOb25UZXJtaW5hbE5vZGUsIC8vL1xuICAgICAgICAgICAgICBtZXRhQXJndW1lbnROb2RlVmVyaWZpZWQgPSB2ZXJpZnlNZXRhYXJndW1lbnROb2RlKG1ldGFBcmd1bWVudE5vZGUsIGNvbWJpbmF0b3JNZXRhYXJndW1lbnROb2RlLCBjb250ZXh0KTtcblxuICAgICAgICBub25UZXJtaW5hbE5vZGVWZXJpZmllZCA9IG1ldGFBcmd1bWVudE5vZGVWZXJpZmllZDsgLy8vXG5cbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG5cbiAgICAgIGRlZmF1bHQ6IHtcbiAgICAgICAgY29uc3QgY2hpbGROb2RlcyA9IG5vblRlcm1pbmFsTm9kZS5nZXRDaGlsZE5vZGVzKCksXG4gICAgICAgICAgICAgIGNvbWJpbmF0b3JDaGlsZE5vZGVzID0gY29tYmluYXRvck5vblRlcm1pbmFsTm9kZS5nZXRDaGlsZE5vZGVzKCksXG4gICAgICAgICAgICAgIG5vZGVzID0gY2hpbGROb2RlcywgLy8vXG4gICAgICAgICAgICAgIGNvbWJpbmF0b3JOb2RlcyA9IGNvbWJpbmF0b3JDaGlsZE5vZGVzLCAvLy9cbiAgICAgICAgICAgICAgbm9kZXNWZXJpZmllZCA9IHZlcmlmeU5vZGVzKG5vZGVzLCBjb21iaW5hdG9yTm9kZXMsIGNvbnRleHQpO1xuXG4gICAgICAgIG5vblRlcm1pbmFsTm9kZVZlcmlmaWVkID0gbm9kZXNWZXJpZmllZDsgLy8vXG5cbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG5vblRlcm1pbmFsTm9kZVZlcmlmaWVkO1xufVxuXG5mdW5jdGlvbiB2ZXJpZnlBcmd1bWVudE5vZGUoYXJndW1lbnROb2RlLCBjb21iaW5hdG9yQXJndW1lbnROb2RlLCBjb250ZXh0KSB7XG4gIGxldCBhcmd1bWVudE5vZGVWZXJpZmllZCA9IGZhbHNlO1xuXG4gIGNvbnN0IHRlcm1Ob2RlID0gdGVybU5vZGVRdWVyeShhcmd1bWVudE5vZGUpO1xuXG4gIGlmICh0ZXJtTm9kZSA9PT0gbnVsbCkge1xuICAgIGNvbnN0IGFyZ3VtZW50U3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcoYXJndW1lbnROb2RlKTtcblxuICAgIGNvbnRleHQuZXJyb3IoYFRoZSAke2FyZ3VtZW50U3RyaW5nfSBhcmd1bWVudCBzaG91bGQgYmUgYSB0ZXJtLCBub3QgYSB0eXBlYCk7XG4gIH0gZWxzZSB7XG4gICAgY29uc3QgdHlwZXMgPSBbXSxcbiAgICAgICAgICB0ZXJtVmVyaWZpZWQgPSB2ZXJpZnlUZXJtKHRlcm1Ob2RlLCB0eXBlcywgY29udGV4dCk7XG5cbiAgICBpZiAodGVybVZlcmlmaWVkKSB7XG4gICAgICBjb25zdCBmaXJzdFR5cGUgPSBmaXJzdCh0eXBlcyksXG4gICAgICAgICAgICB0ZXJtVHlwZSA9IGZpcnN0VHlwZSwgLy8vXG4gICAgICAgICAgICB0eXBlTm9kZSA9IHR5cGVOb2RlUXVlcnkoY29tYmluYXRvckFyZ3VtZW50Tm9kZSksXG4gICAgICAgICAgICB0eXBlTmFtZSA9IHR5cGVOYW1lRnJvbVR5cGVOb2RlKHR5cGVOb2RlKSxcbiAgICAgICAgICAgIHR5cGUgPSAodHlwZU5hbWUgPT09IE9CSkVDVF9UWVBFX05BTUUpID9cbiAgICAgICAgICAgICAgICAgICAgIG9iamVjdFR5cGUgOiAgLy8vXG4gICAgICAgICAgICAgICAgICAgICAgIGNvbnRleHQuZmluZFR5cGVCeVR5cGVOYW1lKHR5cGVOYW1lKSxcbiAgICAgICAgICAgIHN0YXRlbWVudFR5cGVFcXVhbFRvT3JTdWJUeXBlT2ZUeXBlID0gdGVybVR5cGUuaXNFcXVhbFRvT3JTdWJUeXBlT2YodHlwZSk7XG5cbiAgICAgIGlmIChzdGF0ZW1lbnRUeXBlRXF1YWxUb09yU3ViVHlwZU9mVHlwZSkge1xuICAgICAgICBhcmd1bWVudE5vZGVWZXJpZmllZCA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGFyZ3VtZW50Tm9kZVZlcmlmaWVkO1xufVxuXG5mdW5jdGlvbiB2ZXJpZnlNZXRhYXJndW1lbnROb2RlKG1ldGFBcmd1bWVudE5vZGUsIGNvbWJpbmF0b3JNZXRhYXJndW1lbnROb2RlLCBjb250ZXh0KSB7XG4gIGxldCBtZXRhQXJndW1lbnROb2RlVmVyaWZpZWQgPSBmYWxzZTtcblxuICBjb25zdCBzdGF0ZW1lbnROb2RlID0gc3RhdGVtZW50Tm9kZVF1ZXJ5KG1ldGFBcmd1bWVudE5vZGUpO1xuXG4gIGlmIChzdGF0ZW1lbnROb2RlID09PSBudWxsKSB7XG4gICAgY29uc3QgbWV0YUFyZ3VtZW50U3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobWV0YUFyZ3VtZW50Tm9kZSk7XG5cbiAgICBjb250ZXh0LmVycm9yKGBUaGUgJyR7bWV0YUFyZ3VtZW50U3RyaW5nfScgbWV0YS1hcmd1bWVudCBzaG91bGQgYmUgYSBzdGF0ZW1lbnQsIG5vdCBhIG1ldGEtdHlwZS5gKTtcbiAgfSBlbHNlIHtcbiAgICBjb25zdCBkZXJpdmVkID0gZmFsc2UsXG4gICAgICAgICAgYXNzZXJ0aW9ucyA9IFtdLFxuICAgICAgICAgIHN0YXRlbWVudFZlcmlmaWVkID0gdmVyaWZ5U3RhdGVtZW50KHN0YXRlbWVudE5vZGUsIGFzc2VydGlvbnMsIGRlcml2ZWQsIGNvbnRleHQpO1xuXG4gICAgaWYgKHN0YXRlbWVudFZlcmlmaWVkKSB7XG4gICAgICBjb25zdCBjb21iaW5hdG9yTWV0YVRZcGVOb2RlID0gbWV0YVR5cGVOb2RlUXVlcnkoY29tYmluYXRvck1ldGFhcmd1bWVudE5vZGUpO1xuXG4gICAgICBpZiAoY29tYmluYXRvck1ldGFUWXBlTm9kZSAhPT0gbnVsbCkge1xuICAgICAgICBjb25zdCB0ZXJtaW5hbE5vZGUgPSBjb21iaW5hdG9yTWV0YVRZcGVOb2RlLCAgLy8vXG4gICAgICAgICAgICAgIHRlcm1pbmFsTm9kZUNvbnRlbnQgPSB0ZXJtaW5hbE5vZGUuZ2V0Q29udGVudCgpLFxuICAgICAgICAgICAgICB0ZXJtaW5hbE5vZGVDb250ZW50U3RhdGVtZW50TWV0YVR5cGUgPSAodGVybWluYWxOb2RlQ29udGVudCA9PT0gU1RBVEVNRU5UX01FVEFfVFlQRSk7XG5cbiAgICAgICAgbWV0YUFyZ3VtZW50Tm9kZVZlcmlmaWVkID0gdGVybWluYWxOb2RlQ29udGVudFN0YXRlbWVudE1ldGFUeXBlOyAgLy8vXG4gICAgICB9XG5cbiAgICAgIGlmICghbWV0YUFyZ3VtZW50Tm9kZVZlcmlmaWVkKSB7XG4gICAgICAgIGNvbnN0IGNvbWJpbmF0b3JNZXRhYXJndW1lbnRTdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhjb21iaW5hdG9yTWV0YWFyZ3VtZW50Tm9kZSk7XG5cbiAgICAgICAgY29udGV4dC5lcnJvcihgVGhlICcke2NvbWJpbmF0b3JNZXRhYXJndW1lbnRTdHJpbmd9JyBjb21iaW5hdG9yIG1ldGEtYXJndW1lbnQgc2hvdWxkIGJlIHRoZSAnU3RhdGVtZW50JyBtZXRhLXR5cGUuYCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG1ldGFBcmd1bWVudE5vZGVWZXJpZmllZDtcbn1cblxuZnVuY3Rpb24gZXF1YWxpdGllc0Zyb21Qcm9vZlN0ZXBzKHByb29mU3RlcHMsIGNvbnRleHQpIHtcbiAgbGV0IGVxdWFsaXRpZXMgPSBbXTtcblxuICBjb25zdCBzdGFydCA9IC1NQVhJTVVNX0lOREVYRVNfTEVOR1RIOyAgLy8vXG5cbiAgcHJvb2ZTdGVwcyA9IHByb29mU3RlcHMuc2xpY2Uoc3RhcnQpOyAvLy9cblxuICBwcm9vZlN0ZXBzLmV2ZXJ5KChwcm9vZlN0ZXApID0+IHtcbiAgICBjb25zdCBlcXVhbGl0eSA9IEVxdWFsaXR5LmZyb21Qcm9vZlN0ZXAocHJvb2ZTdGVwLCBjb250ZXh0KTtcblxuICAgIGlmIChlcXVhbGl0eSA9PT0gbnVsbCkge1xuICAgICAgZXF1YWxpdGllcyA9IG51bGw7XG4gICAgfSBlbHNlIHtcbiAgICAgIGVxdWFsaXRpZXMucHVzaChlcXVhbGl0eSk7XG5cbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIGVxdWFsaXRpZXM7XG59XG4iXSwibmFtZXMiOlsidmVyaWZ5U3RhdGVtZW50IiwidGVybU5vZGVRdWVyeSIsIm5vZGVRdWVyeSIsInR5cGVOb2RlUXVlcnkiLCJtZXRhVHlwZU5vZGVRdWVyeSIsInN0YXRlbWVudE5vZGVRdWVyeSIsInR5cGVBc3NlcnRpb25Ob2RlUXVlcnkiLCJzdGF0ZW1lbnROb2RlIiwiYXNzZXJ0aW9ucyIsImRlcml2ZWQiLCJjb250ZXh0Iiwic3RhdGVtZW50VmVyaWZpZWQiLCJiZWdpbiIsInN0YXRlbWVudFZlcmlmaWVkQXNFcXVhbGl0eSIsInZlcmlmeVN0YXRlbWVudEFzRXF1YWxpdHkiLCJzdGF0ZW1lbnRWZXJpZmllZEFzVHlwZUFzc2VydGlvbiIsInZlcmlmeVN0YXRlbWVudEFzVHlwZUFzc2VydGlvbiIsInN0YXRlbWVudFZlcmlmaWVkQWdhaW5zdENvbWJpbmF0b3JzIiwidmVyaWZ5U3RhdGVtZW50QWdhaW5zdENvbWJpbmF0b3JzIiwiY29tcGxldGUiLCJoYWx0IiwiY29tYmluYXRvciIsImVxdWFsaXR5Q29tYmluYXRvciIsInN0YXRlbWVudFZlcmlmaWVkQWdhaW5zdENvbWJpbmF0b3IiLCJ2ZXJpZnlTdGF0ZW1lbnRBZ2FpbnN0Q29tYmluYXRvciIsImVxdWFsaXR5IiwiRXF1YWxpdHkiLCJmcm9tU3RhdGVtZW50Tm9kZSIsInByb29mU3RlcHMiLCJnZXRQcm9vZlN0ZXBzIiwiZXF1YWxpdGllcyIsImVxdWFsaXRpZXNGcm9tUHJvb2ZTdGVwcyIsImVxdWFsaXR5RXF1YXRlcyIsImVxdWF0ZSIsInR5cGVBc3NlcnRpb25Ob2RlIiwidHlwZUFzc2VydGlvblZlcmlmaWVkIiwidmVyaWZ5VHlwZUFzc2VydGlvbiIsImNvbWJpbmF0b3JzIiwiZ2V0Q29tYmluYXRvcnMiLCJicmFja2V0ZWRDb21iaW5hdG9yIiwiZmluZCIsImNvbWJpbmF0b3JTdGF0ZW1lbnROb2RlIiwiZ2V0U3RhdGVtZW50Tm9kZSIsIm5vZGUiLCJjb21iaW5hdG9yTm9kZSIsIm5vZGVWZXJpZmllZCIsInZlcmlmeU5vZGUiLCJub2RlVGVybWluYWxOb2RlIiwiaXNUZXJtaW5hbE5vZGUiLCJjb21iaW5hdG9yTm9kZVRlcm1pbmFsTm9kZSIsInRlcm1pbmFsTm9kZSIsImNvbWJpbmF0b3JUZXJtaW5hbE5vZGUiLCJ0ZXJtaW5hbE5vZGVWZXJpZmllZCIsInZlcmlmeVRlcm1pbmFsTm9kZSIsIm5vblRlcm1pbmFsTm9kZSIsImNvbWJpbmF0b3JOb25UZXJtaW5hbE5vZGUiLCJub25UZXJtaW5hbE5vZGVWZXJpZmllZCIsInZlcmlmeU5vblRlcm1pbmFsTm9kZSIsInZlcmlmeU5vZGVzIiwibm9kZXMiLCJjb21iaW5hdG9yTm9kZXMiLCJub2Rlc1ZlcmlmaWVkIiwibm9kZXNMZW5ndGgiLCJsZW5ndGgiLCJjb21iaW5hdG9yTm9kZXNMZW5ndGgiLCJldmVyeSIsImluZGV4IiwibWF0Y2hlcyIsIm1hdGNoIiwicnVsZU5hbWUiLCJnZXRSdWxlTmFtZSIsImNvbWJpbmF0b3JSdWxlTmFtZSIsIkFSR1VNRU5UX1JVTEVfTkFNRSIsImFyZ3VtZW50Tm9kZSIsImNvbWJpbmF0b3JBcmd1bWVudE5vZGUiLCJhcmd1bWVudE5vZGVWZXJpZmllZCIsInZlcmlmeUFyZ3VtZW50Tm9kZSIsIk1FVEFfQVJHVU1FTlRfUlVMRV9OQU1FIiwibWV0YUFyZ3VtZW50Tm9kZSIsImNvbWJpbmF0b3JNZXRhYXJndW1lbnROb2RlIiwibWV0YUFyZ3VtZW50Tm9kZVZlcmlmaWVkIiwidmVyaWZ5TWV0YWFyZ3VtZW50Tm9kZSIsImNoaWxkTm9kZXMiLCJnZXRDaGlsZE5vZGVzIiwiY29tYmluYXRvckNoaWxkTm9kZXMiLCJ0ZXJtTm9kZSIsImFyZ3VtZW50U3RyaW5nIiwibm9kZUFzU3RyaW5nIiwiZXJyb3IiLCJ0eXBlcyIsInRlcm1WZXJpZmllZCIsInZlcmlmeVRlcm0iLCJmaXJzdFR5cGUiLCJmaXJzdCIsInRlcm1UeXBlIiwidHlwZU5vZGUiLCJ0eXBlTmFtZSIsInR5cGVOYW1lRnJvbVR5cGVOb2RlIiwidHlwZSIsIk9CSkVDVF9UWVBFX05BTUUiLCJvYmplY3RUeXBlIiwiZmluZFR5cGVCeVR5cGVOYW1lIiwic3RhdGVtZW50VHlwZUVxdWFsVG9PclN1YlR5cGVPZlR5cGUiLCJpc0VxdWFsVG9PclN1YlR5cGVPZiIsIm1ldGFBcmd1bWVudFN0cmluZyIsImNvbWJpbmF0b3JNZXRhVFlwZU5vZGUiLCJ0ZXJtaW5hbE5vZGVDb250ZW50IiwiZ2V0Q29udGVudCIsInRlcm1pbmFsTm9kZUNvbnRlbnRTdGF0ZW1lbnRNZXRhVHlwZSIsIlNUQVRFTUVOVF9NRVRBX1RZUEUiLCJjb21iaW5hdG9yTWV0YWFyZ3VtZW50U3RyaW5nIiwic3RhcnQiLCJNQVhJTVVNX0lOREVYRVNfTEVOR1RIIiwic2xpY2UiLCJwcm9vZlN0ZXAiLCJmcm9tUHJvb2ZTdGVwIiwicHVzaCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBc0JBOzs7ZUFBd0JBOzs7NkRBcEJIO3lEQUNFOzhEQUNROzhEQUNDO3lEQUNBO3FCQUVWO3FCQUNLO3lCQUNNO3lCQUNHO3lCQUNHO3FCQUNTO3lCQUNZOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTVELElBQU1DLGdCQUFnQkMsSUFBQUEsZ0JBQVMsRUFBQyxvQkFDMUJDLGdCQUFnQkQsSUFBQUEsZ0JBQVMsRUFBQyxvQkFDMUJFLG9CQUFvQkYsSUFBQUEsZ0JBQVMsRUFBQyx1Q0FDOUJHLHFCQUFxQkgsSUFBQUEsZ0JBQVMsRUFBQyw2QkFDL0JJLHlCQUF5QkosSUFBQUEsZ0JBQVMsRUFBQztBQUUxQixTQUFTRixnQkFBZ0JPLGFBQWEsRUFBRUMsVUFBVSxFQUFFQyxPQUFPLEVBQUVDLE9BQU8sRUFBRTtJQUNuRixJQUFJQyxvQkFBb0IsS0FBSztJQUU3QkQsUUFBUUUsS0FBSyxDQUFDTDtJQUVkLElBQUksQ0FBQ0ksbUJBQW1CO1FBQ3RCLElBQU1FLDhCQUE4QkMsMEJBQTBCUCxlQUFlRSxTQUFTQztRQUV0RkMsb0JBQW9CRSw2QkFBOEIsRUFBRTtJQUN0RCxDQUFDO0lBRUQsSUFBSSxDQUFDRixtQkFBbUI7UUFDdEIsSUFBTUksbUNBQW1DQywrQkFBK0JULGVBQWVDLFlBQVlDLFNBQVNDO1FBRTVHQyxvQkFBb0JJLGtDQUFrQyxHQUFHO0lBQzNELENBQUM7SUFFRCxJQUFJLENBQUNKLG1CQUFtQjtRQUN0QixJQUFNTSxzQ0FBc0NDLGtDQUFrQ1gsZUFBZUc7UUFFN0ZDLG9CQUFvQk0scUNBQXNDLEdBQUc7SUFDL0QsQ0FBQztJQUVETixvQkFDRUQsUUFBUVMsUUFBUSxDQUFDWixpQkFDZkcsUUFB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