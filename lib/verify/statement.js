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
var _verifier = /*#__PURE__*/ _interopRequireDefault(require("../verifier"));
var _variable = /*#__PURE__*/ _interopRequireDefault(require("../variable"));
var _equality = /*#__PURE__*/ _interopRequireDefault(require("../equality"));
var _assignment = /*#__PURE__*/ _interopRequireDefault(require("../assignment"));
var _term = /*#__PURE__*/ _interopRequireWildcard(require("../verify/term"));
var _equality1 = /*#__PURE__*/ _interopRequireDefault(require("../ocmbinator/equality"));
var _bracketed = /*#__PURE__*/ _interopRequireDefault(require("../ocmbinator/bracketed"));
var _type = /*#__PURE__*/ _interopRequireDefault(require("../verify/assertion/type"));
var _type1 = require("../type");
var _array = require("../utilities/array");
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
function _assertThisInitialized(self) {
    if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
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
function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
}
function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function");
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            writable: true,
            configurable: true
        }
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
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
function _possibleConstructorReturn(self, call) {
    if (call && (_typeof(call) === "object" || typeof call === "function")) {
        return call;
    }
    return _assertThisInitialized(self);
}
function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return _setPrototypeOf(o, p);
}
function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
var _typeof = function(obj) {
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
};
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
        return true;
    } catch (e) {
        return false;
    }
}
function _createSuper(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct();
    return function _createSuperInternal() {
        var Super = _getPrototypeOf(Derived), result;
        if (hasNativeReflectConstruct) {
            var NewTarget = _getPrototypeOf(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
        } else {
            result = Super.apply(this, arguments);
        }
        return _possibleConstructorReturn(this, result);
    };
}
var termNodeQuery = (0, _query.nodeQuery)("/argument/term!"), typeNodeQuery = (0, _query.nodeQuery)("/argument/type!"), metaTypeNodeQuery = (0, _query.nodeQuery)("/metaArgument/metaType!"), statementNodeQuery = (0, _query.nodeQuery)("/metaArgument/statement!"), typeAssertionNodeQuery = (0, _query.nodeQuery)("/statement/typeAssertion!"), metaTypeTerminalNodeQuery = (0, _query.nodeQuery)("/metaType/@meta-type");
function verifyStatement(statementNode, assignments, derived, context) {
    var statementVerified = false;
    if (!statementVerified) {
        var statementVerifiedAgainstCombinators = verifyStatementAgainstCombinators(statementNode, context);
        statementVerified = statementVerifiedAgainstCombinators; ///
    }
    if (!statementVerified) {
        var statementVerifiedAsTypeAssertion = verifyStatementAsTypeAssertion(statementNode, assignments, derived, context);
        statementVerified = statementVerifiedAsTypeAssertion; ///
    }
    if (!statementVerified) {
        var statementVerifiedAsEquality = verifyStatementAsEquality(statementNode, assignments, derived, context);
        statementVerified = statementVerifiedAsEquality; //
    }
    return statementVerified;
}
var StatementVerifier = /*#__PURE__*/ function(Verifier) {
    _inherits(StatementVerifier, Verifier);
    var _super = _createSuper(StatementVerifier);
    function StatementVerifier() {
        _classCallCheck(this, StatementVerifier);
        return _super.apply(this, arguments);
    }
    _createClass(StatementVerifier, [
        {
            key: "verifyNonTerminalNode",
            value: function verifyNonTerminalNode(nonTerminalNodeA, nonTerminalNodeB, context) {
                var nonTerminalNodeVerified = false;
                var nonTerminalNode = nonTerminalNodeA, combinatorNonTerminalNode = nonTerminalNodeB; ///
                var ruleName = nonTerminalNode.getRuleName(), combinatorRuleName = combinatorNonTerminalNode.getRuleName(); ///
                if (ruleName === combinatorRuleName) {
                    switch(ruleName){
                        case _ruleNames.ARGUMENT_RULE_NAME:
                            {
                                var argumentNode = nonTerminalNode, combinatorArgumentNode = combinatorNonTerminalNode, argumentNodeVerified = this.verifyArgumentNode(argumentNode, combinatorArgumentNode, context);
                                nonTerminalNodeVerified = argumentNodeVerified; ///
                                break;
                            }
                        case _ruleNames.META_ARGUMENT_RULE_NAME:
                            {
                                var metaArgumentNode = nonTerminalNode, combinatorMetaargumentNode = combinatorNonTerminalNode, metaArgumentNodeVerified = this.verifyMetaargumentNode(metaArgumentNode, combinatorMetaargumentNode, context);
                                nonTerminalNodeVerified = metaArgumentNodeVerified; ///
                                break;
                            }
                        default:
                            {
                                var childNodes = nonTerminalNode.getChildNodes(), combinatorChildNodes = combinatorNonTerminalNode.getChildNodes(), nodesA = childNodes, nodesB = combinatorChildNodes, nodesVerified = this.verifyNodes(nodesA, nodesB, context);
                                nonTerminalNodeVerified = nodesVerified; ///
                                break;
                            }
                    }
                }
                return nonTerminalNodeVerified;
            }
        },
        {
            key: "verifyArgumentNode",
            value: function verifyArgumentNode(argumentNode, combinatorArgumentNode, context) {
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
        },
        {
            key: "verifyMetaargumentNode",
            value: function verifyMetaargumentNode(metaArgumentNode, combinatorMetaargumentNode, context) {
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
        }
    ]);
    return StatementVerifier;
}(_verifier.default);
var statementVerifier = new StatementVerifier();
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
    var combinatorStatementNode = combinator.getStatementNode(), nonTerminalNodeA = statementNode, nonTerminalNodeB = combinatorStatementNode, nodeVerified = statementVerifier.verifyNonTerminalNode(nonTerminalNodeA, nonTerminalNodeB, context), statementVerifiedAgainstCombinator = nodeVerified; ///
    return statementVerifiedAgainstCombinator;
}
function verifyStatementAsTypeAssertion(statementNode, assignments, derived, context) {
    var statementVerifiedAsTypeAssertion = false;
    var typeAssertionNode = typeAssertionNodeQuery(statementNode);
    if (typeAssertionNode !== null) {
        var typeAssertionVerified = (0, _type.default)(typeAssertionNode, assignments, derived, context);
        statementVerifiedAsTypeAssertion = typeAssertionVerified; ///
    }
    return statementVerifiedAsTypeAssertion;
}
function verifyStatementAsEquality(statementNode, assignments, derived, context) {
    var statementVerifiedAsEquality = false;
    var combinator = _equality1.default, statementVerifiedAgainstCombinator = verifyStatementAgainstCombinator(statementNode, combinator, context);
    if (statementVerifiedAgainstCombinator) {
        var equality = _equality.default.fromStatementNode(statementNode);
        if (derived) {
            var equalities = context.getEqualities(), equalityVerified = equality.verify(equalities, context);
            statementVerifiedAsEquality = equalityVerified; ///
        } else {
            var variables = [], leftTermNode = equality.getLeftTermNode(), rightTermNode = equality.getRightTermNode(), leftTermVerifiedAsVariable = (0, _term.verifyTermAsVariable)(leftTermNode, variables, context), rightTermVerifiedAsVariable = (0, _term.verifyTermAsVariable)(rightTermNode, variables, context);
            if (leftTermVerifiedAsVariable && rightTermVerifiedAsVariable) {
                var firstVariable = (0, _array.first)(variables), secondVariable = (0, _array.second)(variables), leftVariable = firstVariable, rightVariable = secondVariable, leftVariableName = leftVariable.getName(), leftVariableType = leftVariable.getType(), rightVariableName = rightVariable.getName(), rightVariableType = rightVariable.getType(), leftVariableTypeEqualToOrSubTypeOfOfSuperTypeOfRightVariableType = leftVariableType.isEqualToOrSubTypeOfOfSuperTypeOf(rightVariableType);
                if (!leftVariableTypeEqualToOrSubTypeOfOfSuperTypeOfRightVariableType) {
                    var leftVariableTypeName = leftVariableType.getName(), rightVariableTypeName = rightVariableType.getName();
                    context.error("The left '".concat(leftVariableName, "' variable's '").concat(leftVariableTypeName, "' type is not equal to, a sub-type of or a super-type of the right '").concat(rightVariableName, "' variable's '").concat(rightVariableTypeName, "' type."), statementNode);
                } else {
                    var leftVariableTypeSuperTypeOfRightVariableType = leftVariableType.isSuperTypeOf(rightVariableType), rightVariableTypeSuperTypeOfLeftVariableType = rightVariableType.isSuperTypeOf(leftVariableType);
                    if (leftVariableTypeSuperTypeOfRightVariableType) {
                        var name = leftVariableName, type = rightVariableType, variable = _variable.default.fromNameAndType(name, type), assignment = _assignment.default.fromVariable(variable);
                        assignments.push(assignment);
                    }
                    if (rightVariableTypeSuperTypeOfLeftVariableType) {
                        var name1 = rightVariableName, type1 = leftVariableType, variable1 = _variable.default.fromNameAndType(name1, type1), assignment1 = _assignment.default.fromVariable(variable1);
                        assignments.push(assignment1);
                    }
                    statementVerifiedAsEquality = true;
                }
            } else if (leftTermVerifiedAsVariable) {
                var types = [];
                (0, _term.default)(rightTermNode, types, context);
                var firstType = (0, _array.first)(types), firstVariable1 = (0, _array.first)(variables), leftVariable1 = firstVariable1, rightTermType = firstType, leftVariableName1 = leftVariable1.getName(), leftVariableType1 = leftVariable1.getType(), leftVariableTypeEqualToOrSuperTypeOfRightTermType = leftVariableType1.isEqualToOrSuperTypeOf(rightTermType);
                if (!leftVariableTypeEqualToOrSuperTypeOfRightTermType) {
                    var rightTermString = context.nodeAsString(rightTermNode), rightTermTypeName = rightTermType.getName(), leftVariableTypeName1 = leftVariableType1.getName();
                    context.error("The left '".concat(leftVariableName1, "' variable's '").concat(leftVariableTypeName1, "' type is not equal to or a super-type of the right '").concat(rightTermString, "' term's '").concat(rightTermTypeName, "' type."), statementNode);
                } else {
                    var name2 = leftVariableName1, type2 = rightTermType, variable2 = _variable.default.fromNameAndType(name2, type2), assignment2 = _assignment.default.fromVariable(variable2);
                    assignments.push(assignment2);
                    statementVerifiedAsEquality = true;
                }
            } else if (rightTermVerifiedAsVariable) {
                var types1 = [];
                (0, _term.default)(leftTermNode, types1, context);
                var firstType1 = (0, _array.first)(types1), firstVariable2 = (0, _array.first)(variables), leftTermType = firstType1, rightVariable1 = firstVariable2, rightVariableName1 = rightVariable1.getName(), rightVariableType1 = rightVariable1.getType(), rightVariableTypeEqualToOrSuperTypeOfRightTermType = rightVariableType1.isEqualToOrSuperTypeOf(leftTermType);
                if (!rightVariableTypeEqualToOrSuperTypeOfRightTermType) {
                    var leftTermString = context.nodeAsString(leftTermNode), leftTermTypeName = leftTermType.getName(), rightVariableTypeName1 = rightVariableType1.getName();
                    context.error("The right '".concat(rightVariableName1, "' variable's '").concat(rightVariableTypeName1, "' type is not equal to or a super-type of the left '").concat(leftTermString, "' term's '").concat(leftTermTypeName, "' type."), statementNode);
                } else {
                    var name3 = rightVariableName1, type3 = leftTermType, variable3 = _variable.default.fromNameAndType(name3, type3), assignment3 = _assignment.default.fromVariable(variable3);
                    assignments.push(assignment3);
                    statementVerifiedAsEquality = true;
                }
            } else {
                var types2 = [];
                (0, _term.default)(leftTermNode, types2, context);
                (0, _term.default)(rightTermNode, types2, context);
                var firstType2 = (0, _array.first)(types2), secondType = (0, _array.second)(types2), leftTermType1 = firstType2, rightTermType1 = secondType, leftTermTypeEqualToOrSubTypeOfOfSuperTypeOf = leftTermType1.isEqualToOrSubTypeOfOfSuperTypeOf(rightTermType1);
                if (!leftTermTypeEqualToOrSubTypeOfOfSuperTypeOf) {
                    var leftTermString1 = context.nodeAsString(leftTermNode), rightTermString1 = context.nodeAsString(rightTermNode), leftTermTypeName1 = leftTermType1.getName(), rightTermTypeName1 = rightTermType1.getName();
                    context.error("The left '".concat(leftTermString1, "' term's '").concat(leftTermTypeName1, "' type is not equal to, a sub-type of or a super-type of the right '").concat(rightTermString1, "' term's '").concat(rightTermTypeName1, "' type."), statementNode);
                } else {
                    statementVerifiedAsEquality = true;
                }
            }
        }
    }
    if (statementVerifiedAsEquality) {
        var statementString = context.nodeAsString(statementNode);
        context.info("Verified the '".concat(statementString, "' statement as an equality."), statementNode);
    }
    return statementVerifiedAsEquality;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92ZXJpZnkvc3RhdGVtZW50LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgVmVyaWZpZXIgZnJvbSBcIi4uL3ZlcmlmaWVyXCI7XG5pbXBvcnQgVmFyaWFibGUgZnJvbSBcIi4uL3ZhcmlhYmxlXCI7XG5pbXBvcnQgRXF1YWxpdHkgZnJvbSBcIi4uL2VxdWFsaXR5XCI7XG5pbXBvcnQgQXNzaWdubWVudCBmcm9tIFwiLi4vYXNzaWdubWVudFwiO1xuaW1wb3J0IHZlcmlmeVRlcm0gZnJvbSBcIi4uL3ZlcmlmeS90ZXJtXCI7XG5pbXBvcnQgZXF1YWxpdHlDb21iaW5hdG9yIGZyb20gXCIuLi9vY21iaW5hdG9yL2VxdWFsaXR5XCI7XG5pbXBvcnQgYnJhY2tldGVkQ29tYmluYXRvciBmcm9tIFwiLi4vb2NtYmluYXRvci9icmFja2V0ZWRcIjtcbmltcG9ydCB2ZXJpZnlUeXBlQXNzZXJ0aW9uIGZyb20gXCIuLi92ZXJpZnkvYXNzZXJ0aW9uL3R5cGVcIjtcblxuaW1wb3J0IHsgb2JqZWN0VHlwZSB9IGZyb20gXCIuLi90eXBlXCI7XG5pbXBvcnQgeyBmaXJzdCwgc2Vjb25kIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9hcnJheVwiO1xuaW1wb3J0IHsgT0JKRUNUX1RZUEVfTkFNRSB9IGZyb20gXCIuLi90eXBlTmFtZXNcIjtcbmltcG9ydCB7IFNUQVRFTUVOVF9NRVRBX1RZUEUgfSBmcm9tIFwiLi4vbWV0YVR5cGVzXCI7XG5pbXBvcnQgeyB2ZXJpZnlUZXJtQXNWYXJpYWJsZSB9IGZyb20gXCIuLi92ZXJpZnkvdGVybVwiO1xuaW1wb3J0IHsgbm9kZVF1ZXJ5LCB0eXBlTmFtZUZyb21UeXBlTm9kZSB9IGZyb20gXCIuLi91dGlsaXRpZXMvcXVlcnlcIjtcbmltcG9ydCB7IEFSR1VNRU5UX1JVTEVfTkFNRSwgTUVUQV9BUkdVTUVOVF9SVUxFX05BTUUgfSBmcm9tIFwiLi4vcnVsZU5hbWVzXCI7XG5cbmNvbnN0IHRlcm1Ob2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvYXJndW1lbnQvdGVybSFcIiksXG4gICAgICB0eXBlTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL2FyZ3VtZW50L3R5cGUhXCIpLFxuICAgICAgbWV0YVR5cGVOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvbWV0YUFyZ3VtZW50L21ldGFUeXBlIVwiKSxcbiAgICAgIHN0YXRlbWVudE5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9tZXRhQXJndW1lbnQvc3RhdGVtZW50IVwiKSxcbiAgICAgIHR5cGVBc3NlcnRpb25Ob2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvc3RhdGVtZW50L3R5cGVBc3NlcnRpb24hXCIpLFxuICAgICAgbWV0YVR5cGVUZXJtaW5hbE5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9tZXRhVHlwZS9AbWV0YS10eXBlXCIpO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB2ZXJpZnlTdGF0ZW1lbnQoc3RhdGVtZW50Tm9kZSwgYXNzaWdubWVudHMsIGRlcml2ZWQsIGNvbnRleHQpIHtcbiAgbGV0IHN0YXRlbWVudFZlcmlmaWVkID0gZmFsc2U7XG5cbiAgaWYgKCFzdGF0ZW1lbnRWZXJpZmllZCkge1xuICAgIGNvbnN0IHN0YXRlbWVudFZlcmlmaWVkQWdhaW5zdENvbWJpbmF0b3JzID0gdmVyaWZ5U3RhdGVtZW50QWdhaW5zdENvbWJpbmF0b3JzKHN0YXRlbWVudE5vZGUsIGNvbnRleHQpO1xuXG4gICAgc3RhdGVtZW50VmVyaWZpZWQgPSBzdGF0ZW1lbnRWZXJpZmllZEFnYWluc3RDb21iaW5hdG9yczsgIC8vL1xuICB9XG5cbiAgaWYgKCFzdGF0ZW1lbnRWZXJpZmllZCkge1xuICAgIGNvbnN0IHN0YXRlbWVudFZlcmlmaWVkQXNUeXBlQXNzZXJ0aW9uID0gdmVyaWZ5U3RhdGVtZW50QXNUeXBlQXNzZXJ0aW9uKHN0YXRlbWVudE5vZGUsIGFzc2lnbm1lbnRzLCBkZXJpdmVkLCBjb250ZXh0KTtcblxuICAgIHN0YXRlbWVudFZlcmlmaWVkID0gc3RhdGVtZW50VmVyaWZpZWRBc1R5cGVBc3NlcnRpb247IC8vL1xuICB9XG5cbiAgaWYgKCFzdGF0ZW1lbnRWZXJpZmllZCkge1xuICAgIGNvbnN0IHN0YXRlbWVudFZlcmlmaWVkQXNFcXVhbGl0eSA9IHZlcmlmeVN0YXRlbWVudEFzRXF1YWxpdHkoc3RhdGVtZW50Tm9kZSwgYXNzaWdubWVudHMsIGRlcml2ZWQsIGNvbnRleHQpO1xuXG4gICAgc3RhdGVtZW50VmVyaWZpZWQgPSBzdGF0ZW1lbnRWZXJpZmllZEFzRXF1YWxpdHk7ICAvL1xuICB9XG5cbiAgcmV0dXJuIHN0YXRlbWVudFZlcmlmaWVkO1xufVxuXG5jbGFzcyBTdGF0ZW1lbnRWZXJpZmllciBleHRlbmRzIFZlcmlmaWVyIHtcbiAgdmVyaWZ5Tm9uVGVybWluYWxOb2RlKG5vblRlcm1pbmFsTm9kZUEsIG5vblRlcm1pbmFsTm9kZUIsIGNvbnRleHQpIHtcbiAgICBsZXQgbm9uVGVybWluYWxOb2RlVmVyaWZpZWQgPSBmYWxzZTtcblxuICAgIGNvbnN0IG5vblRlcm1pbmFsTm9kZSA9IG5vblRlcm1pbmFsTm9kZUEsIC8vL1xuICAgICAgICAgIGNvbWJpbmF0b3JOb25UZXJtaW5hbE5vZGUgPSBub25UZXJtaW5hbE5vZGVCOyAvLy9cblxuICAgIGNvbnN0IHJ1bGVOYW1lID0gbm9uVGVybWluYWxOb2RlLmdldFJ1bGVOYW1lKCksIC8vL1xuICAgICAgY29tYmluYXRvclJ1bGVOYW1lID0gY29tYmluYXRvck5vblRlcm1pbmFsTm9kZS5nZXRSdWxlTmFtZSgpOyAvLy9cblxuICAgIGlmIChydWxlTmFtZSA9PT0gY29tYmluYXRvclJ1bGVOYW1lKSB7XG4gICAgICBzd2l0Y2ggKHJ1bGVOYW1lKSB7XG4gICAgICAgIGNhc2UgQVJHVU1FTlRfUlVMRV9OQU1FOiB7XG4gICAgICAgICAgY29uc3QgYXJndW1lbnROb2RlID0gbm9uVGVybWluYWxOb2RlLCAvLy9cbiAgICAgICAgICAgICAgICBjb21iaW5hdG9yQXJndW1lbnROb2RlID0gY29tYmluYXRvck5vblRlcm1pbmFsTm9kZSwgLy8vXG4gICAgICAgICAgICAgICAgYXJndW1lbnROb2RlVmVyaWZpZWQgPSB0aGlzLnZlcmlmeUFyZ3VtZW50Tm9kZShhcmd1bWVudE5vZGUsIGNvbWJpbmF0b3JBcmd1bWVudE5vZGUsIGNvbnRleHQpO1xuXG4gICAgICAgICAgbm9uVGVybWluYWxOb2RlVmVyaWZpZWQgPSBhcmd1bWVudE5vZGVWZXJpZmllZDsgLy8vXG5cbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuXG4gICAgICAgIGNhc2UgTUVUQV9BUkdVTUVOVF9SVUxFX05BTUU6IHtcbiAgICAgICAgICBjb25zdCBtZXRhQXJndW1lbnROb2RlID0gbm9uVGVybWluYWxOb2RlLCAvLy9cbiAgICAgICAgICAgICAgICBjb21iaW5hdG9yTWV0YWFyZ3VtZW50Tm9kZSA9IGNvbWJpbmF0b3JOb25UZXJtaW5hbE5vZGUsIC8vL1xuICAgICAgICAgICAgICAgIG1ldGFBcmd1bWVudE5vZGVWZXJpZmllZCA9IHRoaXMudmVyaWZ5TWV0YWFyZ3VtZW50Tm9kZShtZXRhQXJndW1lbnROb2RlLCBjb21iaW5hdG9yTWV0YWFyZ3VtZW50Tm9kZSwgY29udGV4dCk7XG5cbiAgICAgICAgICBub25UZXJtaW5hbE5vZGVWZXJpZmllZCA9IG1ldGFBcmd1bWVudE5vZGVWZXJpZmllZDsgLy8vXG5cbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuXG4gICAgICAgIGRlZmF1bHQ6IHtcbiAgICAgICAgICBjb25zdCBjaGlsZE5vZGVzID0gbm9uVGVybWluYWxOb2RlLmdldENoaWxkTm9kZXMoKSxcbiAgICAgICAgICAgICAgICBjb21iaW5hdG9yQ2hpbGROb2RlcyA9IGNvbWJpbmF0b3JOb25UZXJtaW5hbE5vZGUuZ2V0Q2hpbGROb2RlcygpLFxuICAgICAgICAgICAgICAgIG5vZGVzQSA9IGNoaWxkTm9kZXMsIC8vL1xuICAgICAgICAgICAgICAgIG5vZGVzQiA9IGNvbWJpbmF0b3JDaGlsZE5vZGVzLCAvLy9cbiAgICAgICAgICAgICAgICBub2Rlc1ZlcmlmaWVkID0gdGhpcy52ZXJpZnlOb2Rlcyhub2Rlc0EsIG5vZGVzQiwgY29udGV4dCk7XG5cbiAgICAgICAgICBub25UZXJtaW5hbE5vZGVWZXJpZmllZCA9IG5vZGVzVmVyaWZpZWQ7IC8vL1xuXG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbm9uVGVybWluYWxOb2RlVmVyaWZpZWQ7XG4gIH1cblxuICB2ZXJpZnlBcmd1bWVudE5vZGUoYXJndW1lbnROb2RlLCBjb21iaW5hdG9yQXJndW1lbnROb2RlLCBjb250ZXh0KSB7XG4gICAgbGV0IGFyZ3VtZW50Tm9kZVZlcmlmaWVkID0gZmFsc2U7XG5cbiAgICBjb25zdCB0ZXJtTm9kZSA9IHRlcm1Ob2RlUXVlcnkoYXJndW1lbnROb2RlKTtcblxuICAgIGlmICh0ZXJtTm9kZSA9PT0gbnVsbCkge1xuICAgICAgY29uc3QgYXJndW1lbnRTdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhhcmd1bWVudE5vZGUpO1xuXG4gICAgICBjb250ZXh0LmVycm9yKGBUaGUgJHthcmd1bWVudFN0cmluZ30gYXJndW1lbnQgc2hvdWxkIGJlIGEgdGVybSwgbm90IGEgdHlwZWAsIGFyZ3VtZW50Tm9kZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHR5cGVzID0gW10sXG4gICAgICAgICAgICB0ZXJtVmVyaWZpZWQgPSB2ZXJpZnlUZXJtKHRlcm1Ob2RlLCB0eXBlcywgY29udGV4dCk7XG5cbiAgICAgIGlmICh0ZXJtVmVyaWZpZWQpIHtcbiAgICAgICAgY29uc3QgZmlyc3RUeXBlID0gZmlyc3QodHlwZXMpLFxuICAgICAgICAgICAgICB0ZXJtVHlwZSA9IGZpcnN0VHlwZSwgLy8vXG4gICAgICAgICAgICAgIHR5cGVOb2RlID0gdHlwZU5vZGVRdWVyeShjb21iaW5hdG9yQXJndW1lbnROb2RlKSxcbiAgICAgICAgICAgICAgdHlwZU5hbWUgPSB0eXBlTmFtZUZyb21UeXBlTm9kZSh0eXBlTm9kZSksXG4gICAgICAgICAgICAgIHR5cGUgPSAodHlwZU5hbWUgPT09IE9CSkVDVF9UWVBFX05BTUUpID9cbiAgICAgICAgICAgICAgICAgICAgICAgb2JqZWN0VHlwZSA6ICAvLy9cbiAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZXh0LmZpbmRUeXBlQnlUeXBlTmFtZSh0eXBlTmFtZSksXG4gICAgICAgICAgICAgIHN0YXRlbWVudFR5cGVFcXVhbFRvT3JTdWJUeXBlT2ZUeXBlID0gdGVybVR5cGUuaXNFcXVhbFRvT3JTdWJUeXBlT2YodHlwZSk7XG5cbiAgICAgICAgaWYgKHN0YXRlbWVudFR5cGVFcXVhbFRvT3JTdWJUeXBlT2ZUeXBlKSB7XG4gICAgICAgICAgYXJndW1lbnROb2RlVmVyaWZpZWQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGFyZ3VtZW50Tm9kZVZlcmlmaWVkO1xuICB9XG5cbiAgdmVyaWZ5TWV0YWFyZ3VtZW50Tm9kZShtZXRhQXJndW1lbnROb2RlLCBjb21iaW5hdG9yTWV0YWFyZ3VtZW50Tm9kZSwgY29udGV4dCkge1xuICAgIGxldCBtZXRhQXJndW1lbnROb2RlVmVyaWZpZWQgPSBmYWxzZTtcblxuICAgIGNvbnN0IHN0YXRlbWVudE5vZGUgPSBzdGF0ZW1lbnROb2RlUXVlcnkobWV0YUFyZ3VtZW50Tm9kZSksXG4gICAgICAgICAgY29tYmluYXRvck1ldGFUWXBlTm9kZSA9IG1ldGFUeXBlTm9kZVF1ZXJ5KGNvbWJpbmF0b3JNZXRhYXJndW1lbnROb2RlKTtcblxuICAgIGlmIChzdGF0ZW1lbnROb2RlID09PSBudWxsKSB7XG4gICAgICBjb25zdCBtZXRhQXJndW1lbnRTdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhtZXRhQXJndW1lbnROb2RlKTtcblxuICAgICAgY29udGV4dC5lcnJvcihgRXhwZWN0ZWQgYSBzdGF0ZW1lbnQgYnV0IGdvdCBhICcke21ldGFBcmd1bWVudFN0cmluZ30nIG1ldGEtdHlwZS5gLCBtZXRhQXJndW1lbnROb2RlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKGNvbWJpbmF0b3JNZXRhVFlwZU5vZGUgPT09IG51bGwpIHtcbiAgICAgICAgY29uc3QgY29tYmluYXRvck1ldGFhcmd1bWVudFN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKGNvbWJpbmF0b3JNZXRhYXJndW1lbnROb2RlKTtcblxuICAgICAgICBjb250ZXh0LmVycm9yKGBFeHBlY3RlZCBhIG1ldGEtdHlwZSBidXQgZ290IGEgJyR7Y29tYmluYXRvck1ldGFhcmd1bWVudFN0cmluZ30nIHN0YXRlbWVudC5gLCBtZXRhQXJndW1lbnROb2RlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IGNvbWJpbmF0b3JNZXRhVHlwZVRlcm1pbmFsTm9kZSA9IG1ldGFUeXBlVGVybWluYWxOb2RlUXVlcnkoY29tYmluYXRvck1ldGFUWXBlTm9kZSksXG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBjb21iaW5hdG9yTWV0YVR5cGVUZXJtaW5hbE5vZGUuZ2V0Q29udGVudCgpLFxuICAgICAgICAgICAgICBjb250ZW50U3RhdGVtZW50TWV0YVR5cGUgPSAoY29udGVudCA9PT0gU1RBVEVNRU5UX01FVEFfVFlQRSk7XG5cbiAgICAgICAgaWYgKCFjb250ZW50U3RhdGVtZW50TWV0YVR5cGUpIHtcbiAgICAgICAgICBjb250ZXh0LmVycm9yKGBFeHBlY3RlZCB0aGUgbWV0YS10eXBlIHRvIGJlICdTdGF0ZW1lbnQnIGJ1dCBnb3QgJyR7Y29udGVudH0nLmAsIG1ldGFBcmd1bWVudE5vZGUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIG1ldGFBcmd1bWVudE5vZGVWZXJpZmllZCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbWV0YUFyZ3VtZW50Tm9kZVZlcmlmaWVkO1xuICB9XG59XG5cbmNvbnN0IHN0YXRlbWVudFZlcmlmaWVyID0gbmV3IFN0YXRlbWVudFZlcmlmaWVyKCk7XG5cbmZ1bmN0aW9uIHZlcmlmeVN0YXRlbWVudEFnYWluc3RDb21iaW5hdG9ycyhzdGF0ZW1lbnROb2RlLCBjb250ZXh0KSB7XG4gIGxldCBzdGF0ZW1lbnRWZXJpZmllZEFnYWluc3RDb21iaW5hdG9ycyA9IGZhbHNlO1xuXG4gIGxldCBjb21iaW5hdG9ycyA9IGNvbnRleHQuZ2V0Q29tYmluYXRvcnMoKTtcblxuICBjb21iaW5hdG9ycyA9IFsgLy8vXG4gICAgYnJhY2tldGVkQ29tYmluYXRvcixcbiAgICAuLi5jb21iaW5hdG9yc1xuICBdO1xuXG4gIGNvbnN0IGNvbWJpbmF0b3IgPSBjb21iaW5hdG9ycy5maW5kKChjb21iaW5hdG9yKSA9PiB7XG4gICAgY29uc3Qgc3RhdGVtZW50VmVyaWZpZWRBZ2FpbnN0Q29tYmluYXRvciA9IHZlcmlmeVN0YXRlbWVudEFnYWluc3RDb21iaW5hdG9yKHN0YXRlbWVudE5vZGUsIGNvbWJpbmF0b3IsIGNvbnRleHQpO1xuXG4gICAgaWYgKHN0YXRlbWVudFZlcmlmaWVkQWdhaW5zdENvbWJpbmF0b3IpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfSkgfHwgbnVsbDtcblxuICBpZiAoY29tYmluYXRvciAhPT0gbnVsbCkge1xuICAgIHN0YXRlbWVudFZlcmlmaWVkQWdhaW5zdENvbWJpbmF0b3JzID0gdHJ1ZTtcbiAgfVxuXG4gIHJldHVybiBzdGF0ZW1lbnRWZXJpZmllZEFnYWluc3RDb21iaW5hdG9ycztcbn1cblxuZnVuY3Rpb24gdmVyaWZ5U3RhdGVtZW50QWdhaW5zdENvbWJpbmF0b3Ioc3RhdGVtZW50Tm9kZSwgY29tYmluYXRvciwgY29udGV4dCkge1xuICBjb25zdCBjb21iaW5hdG9yU3RhdGVtZW50Tm9kZSA9IGNvbWJpbmF0b3IuZ2V0U3RhdGVtZW50Tm9kZSgpLFxuICAgICAgICBub25UZXJtaW5hbE5vZGVBID0gc3RhdGVtZW50Tm9kZSwgIC8vL1xuICAgICAgICBub25UZXJtaW5hbE5vZGVCID0gY29tYmluYXRvclN0YXRlbWVudE5vZGUsIC8vL1xuICAgICAgICBub2RlVmVyaWZpZWQgPSBzdGF0ZW1lbnRWZXJpZmllci52ZXJpZnlOb25UZXJtaW5hbE5vZGUobm9uVGVybWluYWxOb2RlQSwgbm9uVGVybWluYWxOb2RlQiwgY29udGV4dCksXG4gICAgICAgIHN0YXRlbWVudFZlcmlmaWVkQWdhaW5zdENvbWJpbmF0b3IgPSBub2RlVmVyaWZpZWQ7ICAvLy9cblxuICByZXR1cm4gc3RhdGVtZW50VmVyaWZpZWRBZ2FpbnN0Q29tYmluYXRvcjtcbn1cblxuZnVuY3Rpb24gdmVyaWZ5U3RhdGVtZW50QXNUeXBlQXNzZXJ0aW9uKHN0YXRlbWVudE5vZGUsIGFzc2lnbm1lbnRzLCBkZXJpdmVkLCBjb250ZXh0KSB7XG4gIGxldCBzdGF0ZW1lbnRWZXJpZmllZEFzVHlwZUFzc2VydGlvbiA9IGZhbHNlO1xuXG4gIGNvbnN0IHR5cGVBc3NlcnRpb25Ob2RlID0gdHlwZUFzc2VydGlvbk5vZGVRdWVyeShzdGF0ZW1lbnROb2RlKTtcblxuICBpZiAodHlwZUFzc2VydGlvbk5vZGUgIT09IG51bGwpIHtcbiAgICBjb25zdCB0eXBlQXNzZXJ0aW9uVmVyaWZpZWQgPSB2ZXJpZnlUeXBlQXNzZXJ0aW9uKHR5cGVBc3NlcnRpb25Ob2RlLCBhc3NpZ25tZW50cywgZGVyaXZlZCwgY29udGV4dCk7XG5cbiAgICBzdGF0ZW1lbnRWZXJpZmllZEFzVHlwZUFzc2VydGlvbiA9IHR5cGVBc3NlcnRpb25WZXJpZmllZDsgLy8vXG4gIH1cblxuICByZXR1cm4gc3RhdGVtZW50VmVyaWZpZWRBc1R5cGVBc3NlcnRpb247XG59XG5cbmZ1bmN0aW9uIHZlcmlmeVN0YXRlbWVudEFzRXF1YWxpdHkoc3RhdGVtZW50Tm9kZSwgYXNzaWdubWVudHMsIGRlcml2ZWQsIGNvbnRleHQpIHtcbiAgbGV0IHN0YXRlbWVudFZlcmlmaWVkQXNFcXVhbGl0eSA9IGZhbHNlO1xuXG4gIGNvbnN0IGNvbWJpbmF0b3IgPSBlcXVhbGl0eUNvbWJpbmF0b3IsICAvLy9cbiAgICAgICAgc3RhdGVtZW50VmVyaWZpZWRBZ2FpbnN0Q29tYmluYXRvciA9IHZlcmlmeVN0YXRlbWVudEFnYWluc3RDb21iaW5hdG9yKHN0YXRlbWVudE5vZGUsIGNvbWJpbmF0b3IsIGNvbnRleHQpO1xuXG4gIGlmIChzdGF0ZW1lbnRWZXJpZmllZEFnYWluc3RDb21iaW5hdG9yKSB7XG4gICAgY29uc3QgZXF1YWxpdHkgPSBFcXVhbGl0eS5mcm9tU3RhdGVtZW50Tm9kZShzdGF0ZW1lbnROb2RlKTtcblxuICAgIGlmIChkZXJpdmVkKSB7XG4gICAgICBjb25zdCBlcXVhbGl0aWVzID0gY29udGV4dC5nZXRFcXVhbGl0aWVzKCksXG4gICAgICAgICAgICBlcXVhbGl0eVZlcmlmaWVkID0gZXF1YWxpdHkudmVyaWZ5KGVxdWFsaXRpZXMsIGNvbnRleHQpO1xuXG4gICAgICBzdGF0ZW1lbnRWZXJpZmllZEFzRXF1YWxpdHkgPSBlcXVhbGl0eVZlcmlmaWVkOyAgLy8vXG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHZhcmlhYmxlcyA9IFtdLFxuICAgICAgICAgICAgbGVmdFRlcm1Ob2RlID0gZXF1YWxpdHkuZ2V0TGVmdFRlcm1Ob2RlKCksXG4gICAgICAgICAgICByaWdodFRlcm1Ob2RlID0gZXF1YWxpdHkuZ2V0UmlnaHRUZXJtTm9kZSgpLFxuICAgICAgICAgICAgbGVmdFRlcm1WZXJpZmllZEFzVmFyaWFibGUgPSB2ZXJpZnlUZXJtQXNWYXJpYWJsZShsZWZ0VGVybU5vZGUsIHZhcmlhYmxlcywgY29udGV4dCksXG4gICAgICAgICAgICByaWdodFRlcm1WZXJpZmllZEFzVmFyaWFibGUgPSB2ZXJpZnlUZXJtQXNWYXJpYWJsZShyaWdodFRlcm1Ob2RlLCB2YXJpYWJsZXMsIGNvbnRleHQpO1xuXG4gICAgICBpZiAobGVmdFRlcm1WZXJpZmllZEFzVmFyaWFibGUgJiYgcmlnaHRUZXJtVmVyaWZpZWRBc1ZhcmlhYmxlKSB7XG4gICAgICAgIGNvbnN0IGZpcnN0VmFyaWFibGUgPSBmaXJzdCh2YXJpYWJsZXMpLFxuICAgICAgICAgICAgICBzZWNvbmRWYXJpYWJsZSA9IHNlY29uZCh2YXJpYWJsZXMpLFxuICAgICAgICAgICAgICBsZWZ0VmFyaWFibGUgPSBmaXJzdFZhcmlhYmxlLCAvLy9cbiAgICAgICAgICAgICAgcmlnaHRWYXJpYWJsZSA9IHNlY29uZFZhcmlhYmxlLCAvLy9cbiAgICAgICAgICAgICAgbGVmdFZhcmlhYmxlTmFtZSA9IGxlZnRWYXJpYWJsZS5nZXROYW1lKCksXG4gICAgICAgICAgICAgIGxlZnRWYXJpYWJsZVR5cGUgPSBsZWZ0VmFyaWFibGUuZ2V0VHlwZSgpLFxuICAgICAgICAgICAgICByaWdodFZhcmlhYmxlTmFtZSA9IHJpZ2h0VmFyaWFibGUuZ2V0TmFtZSgpLFxuICAgICAgICAgICAgICByaWdodFZhcmlhYmxlVHlwZSA9IHJpZ2h0VmFyaWFibGUuZ2V0VHlwZSgpLFxuICAgICAgICAgICAgICBsZWZ0VmFyaWFibGVUeXBlRXF1YWxUb09yU3ViVHlwZU9mT2ZTdXBlclR5cGVPZlJpZ2h0VmFyaWFibGVUeXBlID0gbGVmdFZhcmlhYmxlVHlwZS5pc0VxdWFsVG9PclN1YlR5cGVPZk9mU3VwZXJUeXBlT2YocmlnaHRWYXJpYWJsZVR5cGUpO1xuXG4gICAgICAgIGlmICghbGVmdFZhcmlhYmxlVHlwZUVxdWFsVG9PclN1YlR5cGVPZk9mU3VwZXJUeXBlT2ZSaWdodFZhcmlhYmxlVHlwZSkge1xuICAgICAgICAgIGNvbnN0IGxlZnRWYXJpYWJsZVR5cGVOYW1lID0gbGVmdFZhcmlhYmxlVHlwZS5nZXROYW1lKCksXG4gICAgICAgICAgICAgICAgcmlnaHRWYXJpYWJsZVR5cGVOYW1lID0gcmlnaHRWYXJpYWJsZVR5cGUuZ2V0TmFtZSgpO1xuXG4gICAgICAgICAgY29udGV4dC5lcnJvcihgVGhlIGxlZnQgJyR7bGVmdFZhcmlhYmxlTmFtZX0nIHZhcmlhYmxlJ3MgJyR7bGVmdFZhcmlhYmxlVHlwZU5hbWV9JyB0eXBlIGlzIG5vdCBlcXVhbCB0bywgYSBzdWItdHlwZSBvZiBvciBhIHN1cGVyLXR5cGUgb2YgdGhlIHJpZ2h0ICcke3JpZ2h0VmFyaWFibGVOYW1lfScgdmFyaWFibGUncyAnJHtyaWdodFZhcmlhYmxlVHlwZU5hbWV9JyB0eXBlLmAsIHN0YXRlbWVudE5vZGUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvbnN0IGxlZnRWYXJpYWJsZVR5cGVTdXBlclR5cGVPZlJpZ2h0VmFyaWFibGVUeXBlID0gbGVmdFZhcmlhYmxlVHlwZS5pc1N1cGVyVHlwZU9mKHJpZ2h0VmFyaWFibGVUeXBlKSxcbiAgICAgICAgICAgICAgICByaWdodFZhcmlhYmxlVHlwZVN1cGVyVHlwZU9mTGVmdFZhcmlhYmxlVHlwZSA9IHJpZ2h0VmFyaWFibGVUeXBlLmlzU3VwZXJUeXBlT2YobGVmdFZhcmlhYmxlVHlwZSk7XG5cbiAgICAgICAgICBpZiAobGVmdFZhcmlhYmxlVHlwZVN1cGVyVHlwZU9mUmlnaHRWYXJpYWJsZVR5cGUpIHtcbiAgICAgICAgICAgIGNvbnN0IG5hbWUgPSBsZWZ0VmFyaWFibGVOYW1lLCAvLy9cbiAgICAgICAgICAgICAgICAgIHR5cGUgPSByaWdodFZhcmlhYmxlVHlwZSwgIC8vL1xuICAgICAgICAgICAgICAgICAgdmFyaWFibGUgPSBWYXJpYWJsZS5mcm9tTmFtZUFuZFR5cGUobmFtZSwgdHlwZSksXG4gICAgICAgICAgICAgICAgICBhc3NpZ25tZW50ID0gQXNzaWdubWVudC5mcm9tVmFyaWFibGUodmFyaWFibGUpO1xuXG4gICAgICAgICAgICBhc3NpZ25tZW50cy5wdXNoKGFzc2lnbm1lbnQpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChyaWdodFZhcmlhYmxlVHlwZVN1cGVyVHlwZU9mTGVmdFZhcmlhYmxlVHlwZSkge1xuICAgICAgICAgICAgY29uc3QgbmFtZSA9IHJpZ2h0VmFyaWFibGVOYW1lLCAvLy9cbiAgICAgICAgICAgICAgICAgIHR5cGUgPSBsZWZ0VmFyaWFibGVUeXBlLCAgLy8vXG4gICAgICAgICAgICAgICAgICB2YXJpYWJsZSA9IFZhcmlhYmxlLmZyb21OYW1lQW5kVHlwZShuYW1lLCB0eXBlKSxcbiAgICAgICAgICAgICAgICAgIGFzc2lnbm1lbnQgPSBBc3NpZ25tZW50LmZyb21WYXJpYWJsZSh2YXJpYWJsZSk7XG5cbiAgICAgICAgICAgIGFzc2lnbm1lbnRzLnB1c2goYXNzaWdubWVudCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgc3RhdGVtZW50VmVyaWZpZWRBc0VxdWFsaXR5ID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChsZWZ0VGVybVZlcmlmaWVkQXNWYXJpYWJsZSkge1xuICAgICAgICBjb25zdCB0eXBlcyA9IFtdO1xuXG4gICAgICAgIHZlcmlmeVRlcm0ocmlnaHRUZXJtTm9kZSwgdHlwZXMsIGNvbnRleHQpO1xuXG4gICAgICAgIGNvbnN0IGZpcnN0VHlwZSA9IGZpcnN0KHR5cGVzKSxcbiAgICAgICAgICAgICAgZmlyc3RWYXJpYWJsZSA9IGZpcnN0KHZhcmlhYmxlcyksXG4gICAgICAgICAgICAgIGxlZnRWYXJpYWJsZSA9IGZpcnN0VmFyaWFibGUsIC8vL1xuICAgICAgICAgICAgICByaWdodFRlcm1UeXBlID0gZmlyc3RUeXBlLCAgLy8vXG4gICAgICAgICAgICAgIGxlZnRWYXJpYWJsZU5hbWUgPSBsZWZ0VmFyaWFibGUuZ2V0TmFtZSgpLFxuICAgICAgICAgICAgICBsZWZ0VmFyaWFibGVUeXBlID0gbGVmdFZhcmlhYmxlLmdldFR5cGUoKSxcbiAgICAgICAgICAgICAgbGVmdFZhcmlhYmxlVHlwZUVxdWFsVG9PclN1cGVyVHlwZU9mUmlnaHRUZXJtVHlwZSA9IGxlZnRWYXJpYWJsZVR5cGUuaXNFcXVhbFRvT3JTdXBlclR5cGVPZihyaWdodFRlcm1UeXBlKTtcblxuICAgICAgICBpZiAoIWxlZnRWYXJpYWJsZVR5cGVFcXVhbFRvT3JTdXBlclR5cGVPZlJpZ2h0VGVybVR5cGUpIHtcbiAgICAgICAgICBjb25zdCByaWdodFRlcm1TdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhyaWdodFRlcm1Ob2RlKSxcbiAgICAgICAgICAgICAgICByaWdodFRlcm1UeXBlTmFtZSA9IHJpZ2h0VGVybVR5cGUuZ2V0TmFtZSgpLFxuICAgICAgICAgICAgICAgIGxlZnRWYXJpYWJsZVR5cGVOYW1lID0gbGVmdFZhcmlhYmxlVHlwZS5nZXROYW1lKCk7XG5cbiAgICAgICAgICBjb250ZXh0LmVycm9yKGBUaGUgbGVmdCAnJHtsZWZ0VmFyaWFibGVOYW1lfScgdmFyaWFibGUncyAnJHtsZWZ0VmFyaWFibGVUeXBlTmFtZX0nIHR5cGUgaXMgbm90IGVxdWFsIHRvIG9yIGEgc3VwZXItdHlwZSBvZiB0aGUgcmlnaHQgJyR7cmlnaHRUZXJtU3RyaW5nfScgdGVybSdzICcke3JpZ2h0VGVybVR5cGVOYW1lfScgdHlwZS5gLCBzdGF0ZW1lbnROb2RlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb25zdCBuYW1lID0gbGVmdFZhcmlhYmxlTmFtZSwgIC8vL1xuICAgICAgICAgICAgICAgIHR5cGUgPSByaWdodFRlcm1UeXBlLCAvLy9cbiAgICAgICAgICAgICAgICB2YXJpYWJsZSA9IFZhcmlhYmxlLmZyb21OYW1lQW5kVHlwZShuYW1lLCB0eXBlKSxcbiAgICAgICAgICAgICAgICBhc3NpZ25tZW50ID0gQXNzaWdubWVudC5mcm9tVmFyaWFibGUodmFyaWFibGUpO1xuXG4gICAgICAgICAgYXNzaWdubWVudHMucHVzaChhc3NpZ25tZW50KTtcblxuICAgICAgICAgIHN0YXRlbWVudFZlcmlmaWVkQXNFcXVhbGl0eSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAocmlnaHRUZXJtVmVyaWZpZWRBc1ZhcmlhYmxlKSB7XG4gICAgICAgIGNvbnN0IHR5cGVzID0gW107XG5cbiAgICAgICAgdmVyaWZ5VGVybShsZWZ0VGVybU5vZGUsIHR5cGVzLCBjb250ZXh0KTtcblxuICAgICAgICBjb25zdCBmaXJzdFR5cGUgPSBmaXJzdCh0eXBlcyksXG4gICAgICAgICAgICAgIGZpcnN0VmFyaWFibGUgPSBmaXJzdCh2YXJpYWJsZXMpLFxuICAgICAgICAgICAgICBsZWZ0VGVybVR5cGUgPSBmaXJzdFR5cGUsICAvLy9cbiAgICAgICAgICAgICAgcmlnaHRWYXJpYWJsZSA9IGZpcnN0VmFyaWFibGUsIC8vL1xuICAgICAgICAgICAgICByaWdodFZhcmlhYmxlTmFtZSA9IHJpZ2h0VmFyaWFibGUuZ2V0TmFtZSgpLFxuICAgICAgICAgICAgICByaWdodFZhcmlhYmxlVHlwZSA9IHJpZ2h0VmFyaWFibGUuZ2V0VHlwZSgpLFxuICAgICAgICAgICAgICByaWdodFZhcmlhYmxlVHlwZUVxdWFsVG9PclN1cGVyVHlwZU9mUmlnaHRUZXJtVHlwZSA9IHJpZ2h0VmFyaWFibGVUeXBlLmlzRXF1YWxUb09yU3VwZXJUeXBlT2YobGVmdFRlcm1UeXBlKTtcblxuICAgICAgICBpZiAoIXJpZ2h0VmFyaWFibGVUeXBlRXF1YWxUb09yU3VwZXJUeXBlT2ZSaWdodFRlcm1UeXBlKSB7XG4gICAgICAgICAgY29uc3QgbGVmdFRlcm1TdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhsZWZ0VGVybU5vZGUpLFxuICAgICAgICAgICAgICAgIGxlZnRUZXJtVHlwZU5hbWUgPSBsZWZ0VGVybVR5cGUuZ2V0TmFtZSgpLFxuICAgICAgICAgICAgICAgIHJpZ2h0VmFyaWFibGVUeXBlTmFtZSA9IHJpZ2h0VmFyaWFibGVUeXBlLmdldE5hbWUoKTtcblxuICAgICAgICAgIGNvbnRleHQuZXJyb3IoYFRoZSByaWdodCAnJHtyaWdodFZhcmlhYmxlTmFtZX0nIHZhcmlhYmxlJ3MgJyR7cmlnaHRWYXJpYWJsZVR5cGVOYW1lfScgdHlwZSBpcyBub3QgZXF1YWwgdG8gb3IgYSBzdXBlci10eXBlIG9mIHRoZSBsZWZ0ICcke2xlZnRUZXJtU3RyaW5nfScgdGVybSdzICcke2xlZnRUZXJtVHlwZU5hbWV9JyB0eXBlLmAsIHN0YXRlbWVudE5vZGUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvbnN0IG5hbWUgPSByaWdodFZhcmlhYmxlTmFtZSwgIC8vL1xuICAgICAgICAgICAgICAgIHR5cGUgPSBsZWZ0VGVybVR5cGUsIC8vL1xuICAgICAgICAgICAgICAgIHZhcmlhYmxlID0gVmFyaWFibGUuZnJvbU5hbWVBbmRUeXBlKG5hbWUsIHR5cGUpLFxuICAgICAgICAgICAgICAgIGFzc2lnbm1lbnQgPSBBc3NpZ25tZW50LmZyb21WYXJpYWJsZSh2YXJpYWJsZSk7XG5cbiAgICAgICAgICBhc3NpZ25tZW50cy5wdXNoKGFzc2lnbm1lbnQpO1xuXG4gICAgICAgICAgc3RhdGVtZW50VmVyaWZpZWRBc0VxdWFsaXR5ID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgdHlwZXMgPSBbXTtcblxuICAgICAgICB2ZXJpZnlUZXJtKGxlZnRUZXJtTm9kZSwgdHlwZXMsIGNvbnRleHQpO1xuXG4gICAgICAgIHZlcmlmeVRlcm0ocmlnaHRUZXJtTm9kZSwgdHlwZXMsIGNvbnRleHQpO1xuXG4gICAgICAgIGNvbnN0IGZpcnN0VHlwZSA9IGZpcnN0KHR5cGVzKSxcbiAgICAgICAgICAgICAgc2Vjb25kVHlwZSA9IHNlY29uZCh0eXBlcyksXG4gICAgICAgICAgICAgIGxlZnRUZXJtVHlwZSA9IGZpcnN0VHlwZSwgLy8vXG4gICAgICAgICAgICAgIHJpZ2h0VGVybVR5cGUgPSBzZWNvbmRUeXBlLCAvLy9cbiAgICAgICAgICAgICAgbGVmdFRlcm1UeXBlRXF1YWxUb09yU3ViVHlwZU9mT2ZTdXBlclR5cGVPZiA9IGxlZnRUZXJtVHlwZS5pc0VxdWFsVG9PclN1YlR5cGVPZk9mU3VwZXJUeXBlT2YocmlnaHRUZXJtVHlwZSk7XG5cbiAgICAgICAgaWYgKCFsZWZ0VGVybVR5cGVFcXVhbFRvT3JTdWJUeXBlT2ZPZlN1cGVyVHlwZU9mKSB7XG4gICAgICAgICAgY29uc3QgbGVmdFRlcm1TdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhsZWZ0VGVybU5vZGUpLFxuICAgICAgICAgICAgICAgIHJpZ2h0VGVybVN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKHJpZ2h0VGVybU5vZGUpLFxuICAgICAgICAgICAgICAgIGxlZnRUZXJtVHlwZU5hbWUgPSBsZWZ0VGVybVR5cGUuZ2V0TmFtZSgpLFxuICAgICAgICAgICAgICAgIHJpZ2h0VGVybVR5cGVOYW1lID0gcmlnaHRUZXJtVHlwZS5nZXROYW1lKCk7XG5cbiAgICAgICAgICBjb250ZXh0LmVycm9yKGBUaGUgbGVmdCAnJHtsZWZ0VGVybVN0cmluZ30nIHRlcm0ncyAnJHtsZWZ0VGVybVR5cGVOYW1lfScgdHlwZSBpcyBub3QgZXF1YWwgdG8sIGEgc3ViLXR5cGUgb2Ygb3IgYSBzdXBlci10eXBlIG9mIHRoZSByaWdodCAnJHtyaWdodFRlcm1TdHJpbmd9JyB0ZXJtJ3MgJyR7cmlnaHRUZXJtVHlwZU5hbWV9JyB0eXBlLmAsIHN0YXRlbWVudE5vZGUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHN0YXRlbWVudFZlcmlmaWVkQXNFcXVhbGl0eSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBpZiAoc3RhdGVtZW50VmVyaWZpZWRBc0VxdWFsaXR5KSB7XG4gICAgY29uc3Qgc3RhdGVtZW50U3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcoc3RhdGVtZW50Tm9kZSk7XG5cbiAgICBjb250ZXh0LmluZm8oYFZlcmlmaWVkIHRoZSAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQgYXMgYW4gZXF1YWxpdHkuYCwgc3RhdGVtZW50Tm9kZSk7XG4gIH1cblxuICByZXR1cm4gc3RhdGVtZW50VmVyaWZpZWRBc0VxdWFsaXR5O1xufVxuIl0sIm5hbWVzIjpbInZlcmlmeVN0YXRlbWVudCIsInRlcm1Ob2RlUXVlcnkiLCJub2RlUXVlcnkiLCJ0eXBlTm9kZVF1ZXJ5IiwibWV0YVR5cGVOb2RlUXVlcnkiLCJzdGF0ZW1lbnROb2RlUXVlcnkiLCJ0eXBlQXNzZXJ0aW9uTm9kZVF1ZXJ5IiwibWV0YVR5cGVUZXJtaW5hbE5vZGVRdWVyeSIsInN0YXRlbWVudE5vZGUiLCJhc3NpZ25tZW50cyIsImRlcml2ZWQiLCJjb250ZXh0Iiwic3RhdGVtZW50VmVyaWZpZWQiLCJzdGF0ZW1lbnRWZXJpZmllZEFnYWluc3RDb21iaW5hdG9ycyIsInZlcmlmeVN0YXRlbWVudEFnYWluc3RDb21iaW5hdG9ycyIsInN0YXRlbWVudFZlcmlmaWVkQXNUeXBlQXNzZXJ0aW9uIiwidmVyaWZ5U3RhdGVtZW50QXNUeXBlQXNzZXJ0aW9uIiwic3RhdGVtZW50VmVyaWZpZWRBc0VxdWFsaXR5IiwidmVyaWZ5U3RhdGVtZW50QXNFcXVhbGl0eSIsIlN0YXRlbWVudFZlcmlmaWVyIiwidmVyaWZ5Tm9uVGVybWluYWxOb2RlIiwibm9uVGVybWluYWxOb2RlQSIsIm5vblRlcm1pbmFsTm9kZUIiLCJub25UZXJtaW5hbE5vZGVWZXJpZmllZCIsIm5vblRlcm1pbmFsTm9kZSIsImNvbWJpbmF0b3JOb25UZXJtaW5hbE5vZGUiLCJydWxlTmFtZSIsImdldFJ1bGVOYW1lIiwiY29tYmluYXRvclJ1bGVOYW1lIiwiQVJHVU1FTlRfUlVMRV9OQU1FIiwiYXJndW1lbnROb2RlIiwiY29tYmluYXRvckFyZ3VtZW50Tm9kZSIsImFyZ3VtZW50Tm9kZVZlcmlmaWVkIiwidmVyaWZ5QXJndW1lbnROb2RlIiwiTUVUQV9BUkdVTUVOVF9SVUxFX05BTUUiLCJtZXRhQXJndW1lbnROb2RlIiwiY29tYmluYXRvck1ldGFhcmd1bWVudE5vZGUiLCJtZXRhQXJndW1lbnROb2RlVmVyaWZpZWQiLCJ2ZXJpZnlNZXRhYXJndW1lbnROb2RlIiwiY2hpbGROb2RlcyIsImdldENoaWxkTm9kZXMiLCJjb21iaW5hdG9yQ2hpbGROb2RlcyIsIm5vZGVzQSIsIm5vZGVzQiIsIm5vZGVzVmVyaWZpZWQiLCJ2ZXJpZnlOb2RlcyIsInRlcm1Ob2RlIiwiYXJndW1lbnRTdHJpbmciLCJub2RlQXNTdHJpbmciLCJlcnJvciIsInR5cGVzIiwidGVybVZlcmlmaWVkIiwidmVyaWZ5VGVybSIsImZpcnN0VHlwZSIsImZpcnN0IiwidGVybVR5cGUiLCJ0eXBlTm9kZSIsInR5cGVOYW1lIiwidHlwZU5hbWVGcm9tVHlwZU5vZGUiLCJ0eXBlIiwiT0JKRUNUX1RZUEVfTkFNRSIsIm9iamVjdFR5cGUiLCJmaW5kVHlwZUJ5VHlwZU5hbWUiLCJzdGF0ZW1lbnRUeXBlRXF1YWxUb09yU3ViVHlwZU9mVHlwZSIsImlzRXF1YWxUb09yU3ViVHlwZU9mIiwiY29tYmluYXRvck1ldGFUWXBlTm9kZSIsIm1ldGFBcmd1bWVudFN0cmluZyIsImNvbWJpbmF0b3JNZXRhYXJndW1lbnRTdHJpbmciLCJjb21iaW5hdG9yTWV0YVR5cGVUZXJtaW5hbE5vZGUiLCJjb250ZW50IiwiZ2V0Q29udGVudCIsImNvbnRlbnRTdGF0ZW1lbnRNZXRhVHlwZSIsIlNUQVRFTUVOVF9NRVRBX1RZUEUiLCJWZXJpZmllciIsInN0YXRlbWVudFZlcmlmaWVyIiwiY29tYmluYXRvcnMiLCJnZXRDb21iaW5hdG9ycyIsImJyYWNrZXRlZENvbWJpbmF0b3IiLCJjb21iaW5hdG9yIiwiZmluZCIsInN0YXRlbWVudFZlcmlmaWVkQWdhaW5zdENvbWJpbmF0b3IiLCJ2ZXJpZnlTdGF0ZW1lbnRBZ2FpbnN0Q29tYmluYXRvciIsImNvbWJpbmF0b3JTdGF0ZW1lbnROb2RlIiwiZ2V0U3RhdGVtZW50Tm9kZSIsIm5vZGVWZXJpZmllZCIsInR5cGVBc3NlcnRpb25Ob2RlIiwidHlwZUFzc2VydGlvblZlcmlmaWVkIiwidmVyaWZ5VHlwZUFzc2VydGlvbiIsImVxdWFsaXR5Q29tYmluYXRvciIsImVxdWFsaXR5IiwiRXF1YWxpdHkiLCJmcm9tU3RhdGVtZW50Tm9kZSIsImVxdWFsaXRpZXMiLCJnZXRFcXVhbGl0aWVzIiwiZXF1YWxpdHlWZXJpZmllZCIsInZlcmlmeSIsInZhcmlhYmxlcyIsImxlZnRUZXJtTm9kZSIsImdldExlZnRUZXJtTm9kZSIsInJpZ2h0VGVybU5vZGUiLCJnZXRSaWdodFRlcm1Ob2RlIiwibGVmdFRlcm1WZXJpZmllZEFzVmFyaWFibGUiLCJ2ZXJpZnlUZXJtQXNWYXJpYWJsZSIsInJpZ2h0VGVybVZlcmlmaWVkQXNWYXJpYWJsZSIsImZpcnN0VmFyaWFibGUiLCJzZWNvbmRWYXJpYWJsZSIsInNlY29uZCIsImxlZnRWYXJpYWJsZSIsInJpZ2h0VmFyaWFibGUiLCJsZWZ0VmFyaWFibGVOYW1lIiwiZ2V0TmFtZSIsImxlZnRWYXJpYWJsZVR5cGUiLCJnZXRUeXBlIiwicmlnaHRWYXJpYWJsZU5hbWUiLCJyaWdodFZhcmlhYmxlVHlwZSIsImxlZnRWYXJpYWJsZVR5cGVFcXVhbFRvT3JTdWJUeXBlT2ZPZlN1cGVyVHlwZU9mUmlnaHRWYXJpYWJsZVR5cGUiLCJpc0VxdWFsVG9PclN1YlR5cGVPZk9mU3VwZXJUeXBlT2YiLCJsZWZ0VmFyaWFibGVUeXBlTmFtZSIsInJpZ2h0VmFyaWFibGVUeXBlTmFtZSIsImxlZnRWYXJpYWJsZVR5cGVTdXBlclR5cGVPZlJpZ2h0VmFyaWFibGVUeXBlIiwiaXNTdXBlclR5cGVPZiIsInJpZ2h0VmFyaWFibGVUeXBlU3VwZXJUeXBlT2ZMZWZ0VmFyaWFibGVUeXBlIiwibmFtZSIsInZhcmlhYmxlIiwiVmFyaWFibGUiLCJmcm9tTmFtZUFuZFR5cGUiLCJhc3NpZ25tZW50IiwiQXNzaWdubWVudCIsImZyb21WYXJpYWJsZSIsInB1c2giLCJyaWdodFRlcm1UeXBlIiwibGVmdFZhcmlhYmxlVHlwZUVxdWFsVG9PclN1cGVyVHlwZU9mUmlnaHRUZXJtVHlwZSIsImlzRXF1YWxUb09yU3VwZXJUeXBlT2YiLCJyaWdodFRlcm1TdHJpbmciLCJyaWdodFRlcm1UeXBlTmFtZSIsImxlZnRUZXJtVHlwZSIsInJpZ2h0VmFyaWFibGVUeXBlRXF1YWxUb09yU3VwZXJUeXBlT2ZSaWdodFRlcm1UeXBlIiwibGVmdFRlcm1TdHJpbmciLCJsZWZ0VGVybVR5cGVOYW1lIiwic2Vjb25kVHlwZSIsImxlZnRUZXJtVHlwZUVxdWFsVG9PclN1YlR5cGVPZk9mU3VwZXJUeXBlT2YiLCJzdGF0ZW1lbnRTdHJpbmciLCJpbmZvIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkEwQkE7OztlQUF3QkE7Ozs2REF4Qkg7NkRBQ0E7NkRBQ0E7K0RBQ0U7MERBQ0E7OERBQ1E7OERBQ0M7eURBQ0E7cUJBRUw7cUJBQ0c7eUJBQ0c7eUJBQ0c7cUJBRVk7eUJBQ1k7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTVELElBQU1DLGdCQUFnQkMsSUFBQUEsZ0JBQVMsRUFBQyxvQkFDMUJDLGdCQUFnQkQsSUFBQUEsZ0JBQVMsRUFBQyxvQkFDMUJFLG9CQUFvQkYsSUFBQUEsZ0JBQVMsRUFBQyw0QkFDOUJHLHFCQUFxQkgsSUFBQUEsZ0JBQVMsRUFBQyw2QkFDL0JJLHlCQUF5QkosSUFBQUEsZ0JBQVMsRUFBQyw4QkFDbkNLLDRCQUE0QkwsSUFBQUEsZ0JBQVMsRUFBQztBQUU3QixTQUFTRixnQkFBZ0JRLGFBQWEsRUFBRUMsV0FBVyxFQUFFQyxPQUFPLEVBQUVDLE9BQU8sRUFBRTtJQUNwRixJQUFJQyxvQkFBb0IsS0FBSztJQUU3QixJQUFJLENBQUNBLG1CQUFtQjtRQUN0QixJQUFNQyxzQ0FBc0NDLGtDQUFrQ04sZUFBZUc7UUFFN0ZDLG9CQUFvQkMscUNBQXNDLEdBQUc7SUFDL0QsQ0FBQztJQUVELElBQUksQ0FBQ0QsbUJBQW1CO1FBQ3RCLElBQU1HLG1DQUFtQ0MsK0JBQStCUixlQUFlQyxhQUFhQyxTQUFTQztRQUU3R0Msb0JBQW9CRyxrQ0FBa0MsR0FBRztJQUMzRCxDQUFDO0lBRUQsSUFBSSxDQUFDSCxtQkFBbUI7UUFDdEIsSUFBTUssOEJBQThCQywwQkFBMEJW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