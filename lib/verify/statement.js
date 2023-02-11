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
    var combinatorStatementNode = combinator.getStatementNode(), nonTerminalNodeA = statementNode, nonTerminalNodeB = combinatorStatementNode, nonTerminalNodeVerified = statementVerifier.verifyNonTerminalNode(nonTerminalNodeA, nonTerminalNodeB, context), statementVerifiedAgainstCombinator = nonTerminalNodeVerified; ///
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92ZXJpZnkvc3RhdGVtZW50LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgVmVyaWZpZXIgZnJvbSBcIi4uL3ZlcmlmaWVyXCI7XG5pbXBvcnQgVmFyaWFibGUgZnJvbSBcIi4uL3ZhcmlhYmxlXCI7XG5pbXBvcnQgRXF1YWxpdHkgZnJvbSBcIi4uL2VxdWFsaXR5XCI7XG5pbXBvcnQgQXNzaWdubWVudCBmcm9tIFwiLi4vYXNzaWdubWVudFwiO1xuaW1wb3J0IHZlcmlmeVRlcm0gZnJvbSBcIi4uL3ZlcmlmeS90ZXJtXCI7XG5pbXBvcnQgZXF1YWxpdHlDb21iaW5hdG9yIGZyb20gXCIuLi9vY21iaW5hdG9yL2VxdWFsaXR5XCI7XG5pbXBvcnQgYnJhY2tldGVkQ29tYmluYXRvciBmcm9tIFwiLi4vb2NtYmluYXRvci9icmFja2V0ZWRcIjtcbmltcG9ydCB2ZXJpZnlUeXBlQXNzZXJ0aW9uIGZyb20gXCIuLi92ZXJpZnkvYXNzZXJ0aW9uL3R5cGVcIjtcblxuaW1wb3J0IHsgb2JqZWN0VHlwZSB9IGZyb20gXCIuLi90eXBlXCI7XG5pbXBvcnQgeyBmaXJzdCwgc2Vjb25kIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9hcnJheVwiO1xuaW1wb3J0IHsgT0JKRUNUX1RZUEVfTkFNRSB9IGZyb20gXCIuLi90eXBlTmFtZXNcIjtcbmltcG9ydCB7IFNUQVRFTUVOVF9NRVRBX1RZUEUgfSBmcm9tIFwiLi4vbWV0YVR5cGVzXCI7XG5pbXBvcnQgeyB2ZXJpZnlUZXJtQXNWYXJpYWJsZSB9IGZyb20gXCIuLi92ZXJpZnkvdGVybVwiO1xuaW1wb3J0IHsgbm9kZVF1ZXJ5LCB0eXBlTmFtZUZyb21UeXBlTm9kZSB9IGZyb20gXCIuLi91dGlsaXRpZXMvcXVlcnlcIjtcbmltcG9ydCB7IEFSR1VNRU5UX1JVTEVfTkFNRSwgTUVUQV9BUkdVTUVOVF9SVUxFX05BTUUgfSBmcm9tIFwiLi4vcnVsZU5hbWVzXCI7XG5cbmNvbnN0IHRlcm1Ob2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvYXJndW1lbnQvdGVybSFcIiksXG4gICAgICB0eXBlTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL2FyZ3VtZW50L3R5cGUhXCIpLFxuICAgICAgbWV0YVR5cGVOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvbWV0YUFyZ3VtZW50L21ldGFUeXBlIVwiKSxcbiAgICAgIHN0YXRlbWVudE5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9tZXRhQXJndW1lbnQvc3RhdGVtZW50IVwiKSxcbiAgICAgIHR5cGVBc3NlcnRpb25Ob2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvc3RhdGVtZW50L3R5cGVBc3NlcnRpb24hXCIpLFxuICAgICAgbWV0YVR5cGVUZXJtaW5hbE5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9tZXRhVHlwZS9AbWV0YS10eXBlXCIpO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB2ZXJpZnlTdGF0ZW1lbnQoc3RhdGVtZW50Tm9kZSwgYXNzaWdubWVudHMsIGRlcml2ZWQsIGNvbnRleHQpIHtcbiAgbGV0IHN0YXRlbWVudFZlcmlmaWVkID0gZmFsc2U7XG5cbiAgaWYgKCFzdGF0ZW1lbnRWZXJpZmllZCkge1xuICAgIGNvbnN0IHN0YXRlbWVudFZlcmlmaWVkQWdhaW5zdENvbWJpbmF0b3JzID0gdmVyaWZ5U3RhdGVtZW50QWdhaW5zdENvbWJpbmF0b3JzKHN0YXRlbWVudE5vZGUsIGNvbnRleHQpO1xuXG4gICAgc3RhdGVtZW50VmVyaWZpZWQgPSBzdGF0ZW1lbnRWZXJpZmllZEFnYWluc3RDb21iaW5hdG9yczsgIC8vL1xuICB9XG5cbiAgaWYgKCFzdGF0ZW1lbnRWZXJpZmllZCkge1xuICAgIGNvbnN0IHN0YXRlbWVudFZlcmlmaWVkQXNUeXBlQXNzZXJ0aW9uID0gdmVyaWZ5U3RhdGVtZW50QXNUeXBlQXNzZXJ0aW9uKHN0YXRlbWVudE5vZGUsIGFzc2lnbm1lbnRzLCBkZXJpdmVkLCBjb250ZXh0KTtcblxuICAgIHN0YXRlbWVudFZlcmlmaWVkID0gc3RhdGVtZW50VmVyaWZpZWRBc1R5cGVBc3NlcnRpb247IC8vL1xuICB9XG5cbiAgaWYgKCFzdGF0ZW1lbnRWZXJpZmllZCkge1xuICAgIGNvbnN0IHN0YXRlbWVudFZlcmlmaWVkQXNFcXVhbGl0eSA9IHZlcmlmeVN0YXRlbWVudEFzRXF1YWxpdHkoc3RhdGVtZW50Tm9kZSwgYXNzaWdubWVudHMsIGRlcml2ZWQsIGNvbnRleHQpO1xuXG4gICAgc3RhdGVtZW50VmVyaWZpZWQgPSBzdGF0ZW1lbnRWZXJpZmllZEFzRXF1YWxpdHk7ICAvL1xuICB9XG5cbiAgcmV0dXJuIHN0YXRlbWVudFZlcmlmaWVkO1xufVxuXG5jbGFzcyBTdGF0ZW1lbnRWZXJpZmllciBleHRlbmRzIFZlcmlmaWVyIHtcbiAgdmVyaWZ5Tm9uVGVybWluYWxOb2RlKG5vblRlcm1pbmFsTm9kZUEsIG5vblRlcm1pbmFsTm9kZUIsIGNvbnRleHQpIHtcbiAgICBsZXQgbm9uVGVybWluYWxOb2RlVmVyaWZpZWQgPSBmYWxzZTtcblxuICAgIGNvbnN0IG5vblRlcm1pbmFsTm9kZSA9IG5vblRlcm1pbmFsTm9kZUEsIC8vL1xuICAgICAgICAgIGNvbWJpbmF0b3JOb25UZXJtaW5hbE5vZGUgPSBub25UZXJtaW5hbE5vZGVCOyAvLy9cblxuICAgIGNvbnN0IHJ1bGVOYW1lID0gbm9uVGVybWluYWxOb2RlLmdldFJ1bGVOYW1lKCksIC8vL1xuICAgICAgY29tYmluYXRvclJ1bGVOYW1lID0gY29tYmluYXRvck5vblRlcm1pbmFsTm9kZS5nZXRSdWxlTmFtZSgpOyAvLy9cblxuICAgIGlmIChydWxlTmFtZSA9PT0gY29tYmluYXRvclJ1bGVOYW1lKSB7XG4gICAgICBzd2l0Y2ggKHJ1bGVOYW1lKSB7XG4gICAgICAgIGNhc2UgQVJHVU1FTlRfUlVMRV9OQU1FOiB7XG4gICAgICAgICAgY29uc3QgYXJndW1lbnROb2RlID0gbm9uVGVybWluYWxOb2RlLCAvLy9cbiAgICAgICAgICAgICAgICBjb21iaW5hdG9yQXJndW1lbnROb2RlID0gY29tYmluYXRvck5vblRlcm1pbmFsTm9kZSwgLy8vXG4gICAgICAgICAgICAgICAgYXJndW1lbnROb2RlVmVyaWZpZWQgPSB0aGlzLnZlcmlmeUFyZ3VtZW50Tm9kZShhcmd1bWVudE5vZGUsIGNvbWJpbmF0b3JBcmd1bWVudE5vZGUsIGNvbnRleHQpO1xuXG4gICAgICAgICAgbm9uVGVybWluYWxOb2RlVmVyaWZpZWQgPSBhcmd1bWVudE5vZGVWZXJpZmllZDsgLy8vXG5cbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuXG4gICAgICAgIGNhc2UgTUVUQV9BUkdVTUVOVF9SVUxFX05BTUU6IHtcbiAgICAgICAgICBjb25zdCBtZXRhQXJndW1lbnROb2RlID0gbm9uVGVybWluYWxOb2RlLCAvLy9cbiAgICAgICAgICAgICAgICBjb21iaW5hdG9yTWV0YWFyZ3VtZW50Tm9kZSA9IGNvbWJpbmF0b3JOb25UZXJtaW5hbE5vZGUsIC8vL1xuICAgICAgICAgICAgICAgIG1ldGFBcmd1bWVudE5vZGVWZXJpZmllZCA9IHRoaXMudmVyaWZ5TWV0YWFyZ3VtZW50Tm9kZShtZXRhQXJndW1lbnROb2RlLCBjb21iaW5hdG9yTWV0YWFyZ3VtZW50Tm9kZSwgY29udGV4dCk7XG5cbiAgICAgICAgICBub25UZXJtaW5hbE5vZGVWZXJpZmllZCA9IG1ldGFBcmd1bWVudE5vZGVWZXJpZmllZDsgLy8vXG5cbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuXG4gICAgICAgIGRlZmF1bHQ6IHtcbiAgICAgICAgICBjb25zdCBjaGlsZE5vZGVzID0gbm9uVGVybWluYWxOb2RlLmdldENoaWxkTm9kZXMoKSxcbiAgICAgICAgICAgICAgICBjb21iaW5hdG9yQ2hpbGROb2RlcyA9IGNvbWJpbmF0b3JOb25UZXJtaW5hbE5vZGUuZ2V0Q2hpbGROb2RlcygpLFxuICAgICAgICAgICAgICAgIG5vZGVzQSA9IGNoaWxkTm9kZXMsIC8vL1xuICAgICAgICAgICAgICAgIG5vZGVzQiA9IGNvbWJpbmF0b3JDaGlsZE5vZGVzLCAvLy9cbiAgICAgICAgICAgICAgICBub2Rlc1ZlcmlmaWVkID0gdGhpcy52ZXJpZnlOb2Rlcyhub2Rlc0EsIG5vZGVzQiwgY29udGV4dCk7XG5cbiAgICAgICAgICBub25UZXJtaW5hbE5vZGVWZXJpZmllZCA9IG5vZGVzVmVyaWZpZWQ7IC8vL1xuXG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbm9uVGVybWluYWxOb2RlVmVyaWZpZWQ7XG4gIH1cblxuICB2ZXJpZnlBcmd1bWVudE5vZGUoYXJndW1lbnROb2RlLCBjb21iaW5hdG9yQXJndW1lbnROb2RlLCBjb250ZXh0KSB7XG4gICAgbGV0IGFyZ3VtZW50Tm9kZVZlcmlmaWVkID0gZmFsc2U7XG5cbiAgICBjb25zdCB0ZXJtTm9kZSA9IHRlcm1Ob2RlUXVlcnkoYXJndW1lbnROb2RlKTtcblxuICAgIGlmICh0ZXJtTm9kZSA9PT0gbnVsbCkge1xuICAgICAgY29uc3QgYXJndW1lbnRTdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhhcmd1bWVudE5vZGUpO1xuXG4gICAgICBjb250ZXh0LmVycm9yKGBUaGUgJHthcmd1bWVudFN0cmluZ30gYXJndW1lbnQgc2hvdWxkIGJlIGEgdGVybSwgbm90IGEgdHlwZWAsIGFyZ3VtZW50Tm9kZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHR5cGVzID0gW10sXG4gICAgICAgICAgICB0ZXJtVmVyaWZpZWQgPSB2ZXJpZnlUZXJtKHRlcm1Ob2RlLCB0eXBlcywgY29udGV4dCk7XG5cbiAgICAgIGlmICh0ZXJtVmVyaWZpZWQpIHtcbiAgICAgICAgY29uc3QgZmlyc3RUeXBlID0gZmlyc3QodHlwZXMpLFxuICAgICAgICAgICAgICB0ZXJtVHlwZSA9IGZpcnN0VHlwZSwgLy8vXG4gICAgICAgICAgICAgIHR5cGVOb2RlID0gdHlwZU5vZGVRdWVyeShjb21iaW5hdG9yQXJndW1lbnROb2RlKSxcbiAgICAgICAgICAgICAgdHlwZU5hbWUgPSB0eXBlTmFtZUZyb21UeXBlTm9kZSh0eXBlTm9kZSksXG4gICAgICAgICAgICAgIHR5cGUgPSAodHlwZU5hbWUgPT09IE9CSkVDVF9UWVBFX05BTUUpID9cbiAgICAgICAgICAgICAgICAgICAgICAgb2JqZWN0VHlwZSA6ICAvLy9cbiAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZXh0LmZpbmRUeXBlQnlUeXBlTmFtZSh0eXBlTmFtZSksXG4gICAgICAgICAgICAgIHN0YXRlbWVudFR5cGVFcXVhbFRvT3JTdWJUeXBlT2ZUeXBlID0gdGVybVR5cGUuaXNFcXVhbFRvT3JTdWJUeXBlT2YodHlwZSk7XG5cbiAgICAgICAgaWYgKHN0YXRlbWVudFR5cGVFcXVhbFRvT3JTdWJUeXBlT2ZUeXBlKSB7XG4gICAgICAgICAgYXJndW1lbnROb2RlVmVyaWZpZWQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGFyZ3VtZW50Tm9kZVZlcmlmaWVkO1xuICB9XG5cbiAgdmVyaWZ5TWV0YWFyZ3VtZW50Tm9kZShtZXRhQXJndW1lbnROb2RlLCBjb21iaW5hdG9yTWV0YWFyZ3VtZW50Tm9kZSwgY29udGV4dCkge1xuICAgIGxldCBtZXRhQXJndW1lbnROb2RlVmVyaWZpZWQgPSBmYWxzZTtcblxuICAgIGNvbnN0IHN0YXRlbWVudE5vZGUgPSBzdGF0ZW1lbnROb2RlUXVlcnkobWV0YUFyZ3VtZW50Tm9kZSksXG4gICAgICAgICAgY29tYmluYXRvck1ldGFUWXBlTm9kZSA9IG1ldGFUeXBlTm9kZVF1ZXJ5KGNvbWJpbmF0b3JNZXRhYXJndW1lbnROb2RlKTtcblxuICAgIGlmIChzdGF0ZW1lbnROb2RlID09PSBudWxsKSB7XG4gICAgICBjb25zdCBtZXRhQXJndW1lbnRTdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhtZXRhQXJndW1lbnROb2RlKTtcblxuICAgICAgY29udGV4dC5lcnJvcihgRXhwZWN0ZWQgYSBzdGF0ZW1lbnQgYnV0IGdvdCBhICcke21ldGFBcmd1bWVudFN0cmluZ30nIG1ldGEtdHlwZS5gLCBtZXRhQXJndW1lbnROb2RlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKGNvbWJpbmF0b3JNZXRhVFlwZU5vZGUgPT09IG51bGwpIHtcbiAgICAgICAgY29uc3QgY29tYmluYXRvck1ldGFhcmd1bWVudFN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKGNvbWJpbmF0b3JNZXRhYXJndW1lbnROb2RlKTtcblxuICAgICAgICBjb250ZXh0LmVycm9yKGBFeHBlY3RlZCBhIG1ldGEtdHlwZSBidXQgZ290IGEgJyR7Y29tYmluYXRvck1ldGFhcmd1bWVudFN0cmluZ30nIHN0YXRlbWVudC5gLCBtZXRhQXJndW1lbnROb2RlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IGNvbWJpbmF0b3JNZXRhVHlwZVRlcm1pbmFsTm9kZSA9IG1ldGFUeXBlVGVybWluYWxOb2RlUXVlcnkoY29tYmluYXRvck1ldGFUWXBlTm9kZSksXG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBjb21iaW5hdG9yTWV0YVR5cGVUZXJtaW5hbE5vZGUuZ2V0Q29udGVudCgpLFxuICAgICAgICAgICAgICBjb250ZW50U3RhdGVtZW50TWV0YVR5cGUgPSAoY29udGVudCA9PT0gU1RBVEVNRU5UX01FVEFfVFlQRSk7XG5cbiAgICAgICAgaWYgKCFjb250ZW50U3RhdGVtZW50TWV0YVR5cGUpIHtcbiAgICAgICAgICBjb250ZXh0LmVycm9yKGBFeHBlY3RlZCB0aGUgbWV0YS10eXBlIHRvIGJlICdTdGF0ZW1lbnQnIGJ1dCBnb3QgJyR7Y29udGVudH0nLmAsIG1ldGFBcmd1bWVudE5vZGUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIG1ldGFBcmd1bWVudE5vZGVWZXJpZmllZCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbWV0YUFyZ3VtZW50Tm9kZVZlcmlmaWVkO1xuICB9XG59XG5cbmNvbnN0IHN0YXRlbWVudFZlcmlmaWVyID0gbmV3IFN0YXRlbWVudFZlcmlmaWVyKCk7XG5cbmZ1bmN0aW9uIHZlcmlmeVN0YXRlbWVudEFnYWluc3RDb21iaW5hdG9ycyhzdGF0ZW1lbnROb2RlLCBjb250ZXh0KSB7XG4gIGxldCBzdGF0ZW1lbnRWZXJpZmllZEFnYWluc3RDb21iaW5hdG9ycyA9IGZhbHNlO1xuXG4gIGxldCBjb21iaW5hdG9ycyA9IGNvbnRleHQuZ2V0Q29tYmluYXRvcnMoKTtcblxuICBjb21iaW5hdG9ycyA9IFsgLy8vXG4gICAgYnJhY2tldGVkQ29tYmluYXRvcixcbiAgICAuLi5jb21iaW5hdG9yc1xuICBdO1xuXG4gIGNvbnN0IGNvbWJpbmF0b3IgPSBjb21iaW5hdG9ycy5maW5kKChjb21iaW5hdG9yKSA9PiB7XG4gICAgY29uc3Qgc3RhdGVtZW50VmVyaWZpZWRBZ2FpbnN0Q29tYmluYXRvciA9IHZlcmlmeVN0YXRlbWVudEFnYWluc3RDb21iaW5hdG9yKHN0YXRlbWVudE5vZGUsIGNvbWJpbmF0b3IsIGNvbnRleHQpO1xuXG4gICAgaWYgKHN0YXRlbWVudFZlcmlmaWVkQWdhaW5zdENvbWJpbmF0b3IpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfSkgfHwgbnVsbDtcblxuICBpZiAoY29tYmluYXRvciAhPT0gbnVsbCkge1xuICAgIHN0YXRlbWVudFZlcmlmaWVkQWdhaW5zdENvbWJpbmF0b3JzID0gdHJ1ZTtcbiAgfVxuXG4gIHJldHVybiBzdGF0ZW1lbnRWZXJpZmllZEFnYWluc3RDb21iaW5hdG9ycztcbn1cblxuZnVuY3Rpb24gdmVyaWZ5U3RhdGVtZW50QWdhaW5zdENvbWJpbmF0b3Ioc3RhdGVtZW50Tm9kZSwgY29tYmluYXRvciwgY29udGV4dCkge1xuICBjb25zdCBjb21iaW5hdG9yU3RhdGVtZW50Tm9kZSA9IGNvbWJpbmF0b3IuZ2V0U3RhdGVtZW50Tm9kZSgpLFxuICAgICAgICBub25UZXJtaW5hbE5vZGVBID0gc3RhdGVtZW50Tm9kZSwgIC8vL1xuICAgICAgICBub25UZXJtaW5hbE5vZGVCID0gY29tYmluYXRvclN0YXRlbWVudE5vZGUsIC8vL1xuICAgICAgICBub25UZXJtaW5hbE5vZGVWZXJpZmllZCA9IHN0YXRlbWVudFZlcmlmaWVyLnZlcmlmeU5vblRlcm1pbmFsTm9kZShub25UZXJtaW5hbE5vZGVBLCBub25UZXJtaW5hbE5vZGVCLCBjb250ZXh0KSxcbiAgICAgICAgc3RhdGVtZW50VmVyaWZpZWRBZ2FpbnN0Q29tYmluYXRvciA9IG5vblRlcm1pbmFsTm9kZVZlcmlmaWVkOyAgLy8vXG5cbiAgcmV0dXJuIHN0YXRlbWVudFZlcmlmaWVkQWdhaW5zdENvbWJpbmF0b3I7XG59XG5cbmZ1bmN0aW9uIHZlcmlmeVN0YXRlbWVudEFzVHlwZUFzc2VydGlvbihzdGF0ZW1lbnROb2RlLCBhc3NpZ25tZW50cywgZGVyaXZlZCwgY29udGV4dCkge1xuICBsZXQgc3RhdGVtZW50VmVyaWZpZWRBc1R5cGVBc3NlcnRpb24gPSBmYWxzZTtcblxuICBjb25zdCB0eXBlQXNzZXJ0aW9uTm9kZSA9IHR5cGVBc3NlcnRpb25Ob2RlUXVlcnkoc3RhdGVtZW50Tm9kZSk7XG5cbiAgaWYgKHR5cGVBc3NlcnRpb25Ob2RlICE9PSBudWxsKSB7XG4gICAgY29uc3QgdHlwZUFzc2VydGlvblZlcmlmaWVkID0gdmVyaWZ5VHlwZUFzc2VydGlvbih0eXBlQXNzZXJ0aW9uTm9kZSwgYXNzaWdubWVudHMsIGRlcml2ZWQsIGNvbnRleHQpO1xuXG4gICAgc3RhdGVtZW50VmVyaWZpZWRBc1R5cGVBc3NlcnRpb24gPSB0eXBlQXNzZXJ0aW9uVmVyaWZpZWQ7IC8vL1xuICB9XG5cbiAgcmV0dXJuIHN0YXRlbWVudFZlcmlmaWVkQXNUeXBlQXNzZXJ0aW9uO1xufVxuXG5mdW5jdGlvbiB2ZXJpZnlTdGF0ZW1lbnRBc0VxdWFsaXR5KHN0YXRlbWVudE5vZGUsIGFzc2lnbm1lbnRzLCBkZXJpdmVkLCBjb250ZXh0KSB7XG4gIGxldCBzdGF0ZW1lbnRWZXJpZmllZEFzRXF1YWxpdHkgPSBmYWxzZTtcblxuICBjb25zdCBjb21iaW5hdG9yID0gZXF1YWxpdHlDb21iaW5hdG9yLCAgLy8vXG4gICAgICAgIHN0YXRlbWVudFZlcmlmaWVkQWdhaW5zdENvbWJpbmF0b3IgPSB2ZXJpZnlTdGF0ZW1lbnRBZ2FpbnN0Q29tYmluYXRvcihzdGF0ZW1lbnROb2RlLCBjb21iaW5hdG9yLCBjb250ZXh0KTtcblxuICBpZiAoc3RhdGVtZW50VmVyaWZpZWRBZ2FpbnN0Q29tYmluYXRvcikge1xuICAgIGNvbnN0IGVxdWFsaXR5ID0gRXF1YWxpdHkuZnJvbVN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSk7XG5cbiAgICBpZiAoZGVyaXZlZCkge1xuICAgICAgY29uc3QgZXF1YWxpdGllcyA9IGNvbnRleHQuZ2V0RXF1YWxpdGllcygpLFxuICAgICAgICAgICAgZXF1YWxpdHlWZXJpZmllZCA9IGVxdWFsaXR5LnZlcmlmeShlcXVhbGl0aWVzLCBjb250ZXh0KTtcblxuICAgICAgc3RhdGVtZW50VmVyaWZpZWRBc0VxdWFsaXR5ID0gZXF1YWxpdHlWZXJpZmllZDsgIC8vL1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCB2YXJpYWJsZXMgPSBbXSxcbiAgICAgICAgICAgIGxlZnRUZXJtTm9kZSA9IGVxdWFsaXR5LmdldExlZnRUZXJtTm9kZSgpLFxuICAgICAgICAgICAgcmlnaHRUZXJtTm9kZSA9IGVxdWFsaXR5LmdldFJpZ2h0VGVybU5vZGUoKSxcbiAgICAgICAgICAgIGxlZnRUZXJtVmVyaWZpZWRBc1ZhcmlhYmxlID0gdmVyaWZ5VGVybUFzVmFyaWFibGUobGVmdFRlcm1Ob2RlLCB2YXJpYWJsZXMsIGNvbnRleHQpLFxuICAgICAgICAgICAgcmlnaHRUZXJtVmVyaWZpZWRBc1ZhcmlhYmxlID0gdmVyaWZ5VGVybUFzVmFyaWFibGUocmlnaHRUZXJtTm9kZSwgdmFyaWFibGVzLCBjb250ZXh0KTtcblxuICAgICAgaWYgKGxlZnRUZXJtVmVyaWZpZWRBc1ZhcmlhYmxlICYmIHJpZ2h0VGVybVZlcmlmaWVkQXNWYXJpYWJsZSkge1xuICAgICAgICBjb25zdCBmaXJzdFZhcmlhYmxlID0gZmlyc3QodmFyaWFibGVzKSxcbiAgICAgICAgICAgICAgc2Vjb25kVmFyaWFibGUgPSBzZWNvbmQodmFyaWFibGVzKSxcbiAgICAgICAgICAgICAgbGVmdFZhcmlhYmxlID0gZmlyc3RWYXJpYWJsZSwgLy8vXG4gICAgICAgICAgICAgIHJpZ2h0VmFyaWFibGUgPSBzZWNvbmRWYXJpYWJsZSwgLy8vXG4gICAgICAgICAgICAgIGxlZnRWYXJpYWJsZU5hbWUgPSBsZWZ0VmFyaWFibGUuZ2V0TmFtZSgpLFxuICAgICAgICAgICAgICBsZWZ0VmFyaWFibGVUeXBlID0gbGVmdFZhcmlhYmxlLmdldFR5cGUoKSxcbiAgICAgICAgICAgICAgcmlnaHRWYXJpYWJsZU5hbWUgPSByaWdodFZhcmlhYmxlLmdldE5hbWUoKSxcbiAgICAgICAgICAgICAgcmlnaHRWYXJpYWJsZVR5cGUgPSByaWdodFZhcmlhYmxlLmdldFR5cGUoKSxcbiAgICAgICAgICAgICAgbGVmdFZhcmlhYmxlVHlwZUVxdWFsVG9PclN1YlR5cGVPZk9mU3VwZXJUeXBlT2ZSaWdodFZhcmlhYmxlVHlwZSA9IGxlZnRWYXJpYWJsZVR5cGUuaXNFcXVhbFRvT3JTdWJUeXBlT2ZPZlN1cGVyVHlwZU9mKHJpZ2h0VmFyaWFibGVUeXBlKTtcblxuICAgICAgICBpZiAoIWxlZnRWYXJpYWJsZVR5cGVFcXVhbFRvT3JTdWJUeXBlT2ZPZlN1cGVyVHlwZU9mUmlnaHRWYXJpYWJsZVR5cGUpIHtcbiAgICAgICAgICBjb25zdCBsZWZ0VmFyaWFibGVUeXBlTmFtZSA9IGxlZnRWYXJpYWJsZVR5cGUuZ2V0TmFtZSgpLFxuICAgICAgICAgICAgICAgIHJpZ2h0VmFyaWFibGVUeXBlTmFtZSA9IHJpZ2h0VmFyaWFibGVUeXBlLmdldE5hbWUoKTtcblxuICAgICAgICAgIGNvbnRleHQuZXJyb3IoYFRoZSBsZWZ0ICcke2xlZnRWYXJpYWJsZU5hbWV9JyB2YXJpYWJsZSdzICcke2xlZnRWYXJpYWJsZVR5cGVOYW1lfScgdHlwZSBpcyBub3QgZXF1YWwgdG8sIGEgc3ViLXR5cGUgb2Ygb3IgYSBzdXBlci10eXBlIG9mIHRoZSByaWdodCAnJHtyaWdodFZhcmlhYmxlTmFtZX0nIHZhcmlhYmxlJ3MgJyR7cmlnaHRWYXJpYWJsZVR5cGVOYW1lfScgdHlwZS5gLCBzdGF0ZW1lbnROb2RlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb25zdCBsZWZ0VmFyaWFibGVUeXBlU3VwZXJUeXBlT2ZSaWdodFZhcmlhYmxlVHlwZSA9IGxlZnRWYXJpYWJsZVR5cGUuaXNTdXBlclR5cGVPZihyaWdodFZhcmlhYmxlVHlwZSksXG4gICAgICAgICAgICAgICAgcmlnaHRWYXJpYWJsZVR5cGVTdXBlclR5cGVPZkxlZnRWYXJpYWJsZVR5cGUgPSByaWdodFZhcmlhYmxlVHlwZS5pc1N1cGVyVHlwZU9mKGxlZnRWYXJpYWJsZVR5cGUpO1xuXG4gICAgICAgICAgaWYgKGxlZnRWYXJpYWJsZVR5cGVTdXBlclR5cGVPZlJpZ2h0VmFyaWFibGVUeXBlKSB7XG4gICAgICAgICAgICBjb25zdCBuYW1lID0gbGVmdFZhcmlhYmxlTmFtZSwgLy8vXG4gICAgICAgICAgICAgICAgICB0eXBlID0gcmlnaHRWYXJpYWJsZVR5cGUsICAvLy9cbiAgICAgICAgICAgICAgICAgIHZhcmlhYmxlID0gVmFyaWFibGUuZnJvbU5hbWVBbmRUeXBlKG5hbWUsIHR5cGUpLFxuICAgICAgICAgICAgICAgICAgYXNzaWdubWVudCA9IEFzc2lnbm1lbnQuZnJvbVZhcmlhYmxlKHZhcmlhYmxlKTtcblxuICAgICAgICAgICAgYXNzaWdubWVudHMucHVzaChhc3NpZ25tZW50KTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAocmlnaHRWYXJpYWJsZVR5cGVTdXBlclR5cGVPZkxlZnRWYXJpYWJsZVR5cGUpIHtcbiAgICAgICAgICAgIGNvbnN0IG5hbWUgPSByaWdodFZhcmlhYmxlTmFtZSwgLy8vXG4gICAgICAgICAgICAgICAgICB0eXBlID0gbGVmdFZhcmlhYmxlVHlwZSwgIC8vL1xuICAgICAgICAgICAgICAgICAgdmFyaWFibGUgPSBWYXJpYWJsZS5mcm9tTmFtZUFuZFR5cGUobmFtZSwgdHlwZSksXG4gICAgICAgICAgICAgICAgICBhc3NpZ25tZW50ID0gQXNzaWdubWVudC5mcm9tVmFyaWFibGUodmFyaWFibGUpO1xuXG4gICAgICAgICAgICBhc3NpZ25tZW50cy5wdXNoKGFzc2lnbm1lbnQpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHN0YXRlbWVudFZlcmlmaWVkQXNFcXVhbGl0eSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAobGVmdFRlcm1WZXJpZmllZEFzVmFyaWFibGUpIHtcbiAgICAgICAgY29uc3QgdHlwZXMgPSBbXTtcblxuICAgICAgICB2ZXJpZnlUZXJtKHJpZ2h0VGVybU5vZGUsIHR5cGVzLCBjb250ZXh0KTtcblxuICAgICAgICBjb25zdCBmaXJzdFR5cGUgPSBmaXJzdCh0eXBlcyksXG4gICAgICAgICAgICAgIGZpcnN0VmFyaWFibGUgPSBmaXJzdCh2YXJpYWJsZXMpLFxuICAgICAgICAgICAgICBsZWZ0VmFyaWFibGUgPSBmaXJzdFZhcmlhYmxlLCAvLy9cbiAgICAgICAgICAgICAgcmlnaHRUZXJtVHlwZSA9IGZpcnN0VHlwZSwgIC8vL1xuICAgICAgICAgICAgICBsZWZ0VmFyaWFibGVOYW1lID0gbGVmdFZhcmlhYmxlLmdldE5hbWUoKSxcbiAgICAgICAgICAgICAgbGVmdFZhcmlhYmxlVHlwZSA9IGxlZnRWYXJpYWJsZS5nZXRUeXBlKCksXG4gICAgICAgICAgICAgIGxlZnRWYXJpYWJsZVR5cGVFcXVhbFRvT3JTdXBlclR5cGVPZlJpZ2h0VGVybVR5cGUgPSBsZWZ0VmFyaWFibGVUeXBlLmlzRXF1YWxUb09yU3VwZXJUeXBlT2YocmlnaHRUZXJtVHlwZSk7XG5cbiAgICAgICAgaWYgKCFsZWZ0VmFyaWFibGVUeXBlRXF1YWxUb09yU3VwZXJUeXBlT2ZSaWdodFRlcm1UeXBlKSB7XG4gICAgICAgICAgY29uc3QgcmlnaHRUZXJtU3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcocmlnaHRUZXJtTm9kZSksXG4gICAgICAgICAgICAgICAgcmlnaHRUZXJtVHlwZU5hbWUgPSByaWdodFRlcm1UeXBlLmdldE5hbWUoKSxcbiAgICAgICAgICAgICAgICBsZWZ0VmFyaWFibGVUeXBlTmFtZSA9IGxlZnRWYXJpYWJsZVR5cGUuZ2V0TmFtZSgpO1xuXG4gICAgICAgICAgY29udGV4dC5lcnJvcihgVGhlIGxlZnQgJyR7bGVmdFZhcmlhYmxlTmFtZX0nIHZhcmlhYmxlJ3MgJyR7bGVmdFZhcmlhYmxlVHlwZU5hbWV9JyB0eXBlIGlzIG5vdCBlcXVhbCB0byBvciBhIHN1cGVyLXR5cGUgb2YgdGhlIHJpZ2h0ICcke3JpZ2h0VGVybVN0cmluZ30nIHRlcm0ncyAnJHtyaWdodFRlcm1UeXBlTmFtZX0nIHR5cGUuYCwgc3RhdGVtZW50Tm9kZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY29uc3QgbmFtZSA9IGxlZnRWYXJpYWJsZU5hbWUsICAvLy9cbiAgICAgICAgICAgICAgICB0eXBlID0gcmlnaHRUZXJtVHlwZSwgLy8vXG4gICAgICAgICAgICAgICAgdmFyaWFibGUgPSBWYXJpYWJsZS5mcm9tTmFtZUFuZFR5cGUobmFtZSwgdHlwZSksXG4gICAgICAgICAgICAgICAgYXNzaWdubWVudCA9IEFzc2lnbm1lbnQuZnJvbVZhcmlhYmxlKHZhcmlhYmxlKTtcblxuICAgICAgICAgIGFzc2lnbm1lbnRzLnB1c2goYXNzaWdubWVudCk7XG5cbiAgICAgICAgICBzdGF0ZW1lbnRWZXJpZmllZEFzRXF1YWxpdHkgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKHJpZ2h0VGVybVZlcmlmaWVkQXNWYXJpYWJsZSkge1xuICAgICAgICBjb25zdCB0eXBlcyA9IFtdO1xuXG4gICAgICAgIHZlcmlmeVRlcm0obGVmdFRlcm1Ob2RlLCB0eXBlcywgY29udGV4dCk7XG5cbiAgICAgICAgY29uc3QgZmlyc3RUeXBlID0gZmlyc3QodHlwZXMpLFxuICAgICAgICAgICAgICBmaXJzdFZhcmlhYmxlID0gZmlyc3QodmFyaWFibGVzKSxcbiAgICAgICAgICAgICAgbGVmdFRlcm1UeXBlID0gZmlyc3RUeXBlLCAgLy8vXG4gICAgICAgICAgICAgIHJpZ2h0VmFyaWFibGUgPSBmaXJzdFZhcmlhYmxlLCAvLy9cbiAgICAgICAgICAgICAgcmlnaHRWYXJpYWJsZU5hbWUgPSByaWdodFZhcmlhYmxlLmdldE5hbWUoKSxcbiAgICAgICAgICAgICAgcmlnaHRWYXJpYWJsZVR5cGUgPSByaWdodFZhcmlhYmxlLmdldFR5cGUoKSxcbiAgICAgICAgICAgICAgcmlnaHRWYXJpYWJsZVR5cGVFcXVhbFRvT3JTdXBlclR5cGVPZlJpZ2h0VGVybVR5cGUgPSByaWdodFZhcmlhYmxlVHlwZS5pc0VxdWFsVG9PclN1cGVyVHlwZU9mKGxlZnRUZXJtVHlwZSk7XG5cbiAgICAgICAgaWYgKCFyaWdodFZhcmlhYmxlVHlwZUVxdWFsVG9PclN1cGVyVHlwZU9mUmlnaHRUZXJtVHlwZSkge1xuICAgICAgICAgIGNvbnN0IGxlZnRUZXJtU3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobGVmdFRlcm1Ob2RlKSxcbiAgICAgICAgICAgICAgICBsZWZ0VGVybVR5cGVOYW1lID0gbGVmdFRlcm1UeXBlLmdldE5hbWUoKSxcbiAgICAgICAgICAgICAgICByaWdodFZhcmlhYmxlVHlwZU5hbWUgPSByaWdodFZhcmlhYmxlVHlwZS5nZXROYW1lKCk7XG5cbiAgICAgICAgICBjb250ZXh0LmVycm9yKGBUaGUgcmlnaHQgJyR7cmlnaHRWYXJpYWJsZU5hbWV9JyB2YXJpYWJsZSdzICcke3JpZ2h0VmFyaWFibGVUeXBlTmFtZX0nIHR5cGUgaXMgbm90IGVxdWFsIHRvIG9yIGEgc3VwZXItdHlwZSBvZiB0aGUgbGVmdCAnJHtsZWZ0VGVybVN0cmluZ30nIHRlcm0ncyAnJHtsZWZ0VGVybVR5cGVOYW1lfScgdHlwZS5gLCBzdGF0ZW1lbnROb2RlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb25zdCBuYW1lID0gcmlnaHRWYXJpYWJsZU5hbWUsICAvLy9cbiAgICAgICAgICAgICAgICB0eXBlID0gbGVmdFRlcm1UeXBlLCAvLy9cbiAgICAgICAgICAgICAgICB2YXJpYWJsZSA9IFZhcmlhYmxlLmZyb21OYW1lQW5kVHlwZShuYW1lLCB0eXBlKSxcbiAgICAgICAgICAgICAgICBhc3NpZ25tZW50ID0gQXNzaWdubWVudC5mcm9tVmFyaWFibGUodmFyaWFibGUpO1xuXG4gICAgICAgICAgYXNzaWdubWVudHMucHVzaChhc3NpZ25tZW50KTtcblxuICAgICAgICAgIHN0YXRlbWVudFZlcmlmaWVkQXNFcXVhbGl0eSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IHR5cGVzID0gW107XG5cbiAgICAgICAgdmVyaWZ5VGVybShsZWZ0VGVybU5vZGUsIHR5cGVzLCBjb250ZXh0KTtcblxuICAgICAgICB2ZXJpZnlUZXJtKHJpZ2h0VGVybU5vZGUsIHR5cGVzLCBjb250ZXh0KTtcblxuICAgICAgICBjb25zdCBmaXJzdFR5cGUgPSBmaXJzdCh0eXBlcyksXG4gICAgICAgICAgICAgIHNlY29uZFR5cGUgPSBzZWNvbmQodHlwZXMpLFxuICAgICAgICAgICAgICBsZWZ0VGVybVR5cGUgPSBmaXJzdFR5cGUsIC8vL1xuICAgICAgICAgICAgICByaWdodFRlcm1UeXBlID0gc2Vjb25kVHlwZSwgLy8vXG4gICAgICAgICAgICAgIGxlZnRUZXJtVHlwZUVxdWFsVG9PclN1YlR5cGVPZk9mU3VwZXJUeXBlT2YgPSBsZWZ0VGVybVR5cGUuaXNFcXVhbFRvT3JTdWJUeXBlT2ZPZlN1cGVyVHlwZU9mKHJpZ2h0VGVybVR5cGUpO1xuXG4gICAgICAgIGlmICghbGVmdFRlcm1UeXBlRXF1YWxUb09yU3ViVHlwZU9mT2ZTdXBlclR5cGVPZikge1xuICAgICAgICAgIGNvbnN0IGxlZnRUZXJtU3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobGVmdFRlcm1Ob2RlKSxcbiAgICAgICAgICAgICAgICByaWdodFRlcm1TdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhyaWdodFRlcm1Ob2RlKSxcbiAgICAgICAgICAgICAgICBsZWZ0VGVybVR5cGVOYW1lID0gbGVmdFRlcm1UeXBlLmdldE5hbWUoKSxcbiAgICAgICAgICAgICAgICByaWdodFRlcm1UeXBlTmFtZSA9IHJpZ2h0VGVybVR5cGUuZ2V0TmFtZSgpO1xuXG4gICAgICAgICAgY29udGV4dC5lcnJvcihgVGhlIGxlZnQgJyR7bGVmdFRlcm1TdHJpbmd9JyB0ZXJtJ3MgJyR7bGVmdFRlcm1UeXBlTmFtZX0nIHR5cGUgaXMgbm90IGVxdWFsIHRvLCBhIHN1Yi10eXBlIG9mIG9yIGEgc3VwZXItdHlwZSBvZiB0aGUgcmlnaHQgJyR7cmlnaHRUZXJtU3RyaW5nfScgdGVybSdzICcke3JpZ2h0VGVybVR5cGVOYW1lfScgdHlwZS5gLCBzdGF0ZW1lbnROb2RlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBzdGF0ZW1lbnRWZXJpZmllZEFzRXF1YWxpdHkgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgaWYgKHN0YXRlbWVudFZlcmlmaWVkQXNFcXVhbGl0eSkge1xuICAgIGNvbnN0IHN0YXRlbWVudFN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKHN0YXRlbWVudE5vZGUpO1xuXG4gICAgY29udGV4dC5pbmZvKGBWZXJpZmllZCB0aGUgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50IGFzIGFuIGVxdWFsaXR5LmAsIHN0YXRlbWVudE5vZGUpO1xuICB9XG5cbiAgcmV0dXJuIHN0YXRlbWVudFZlcmlmaWVkQXNFcXVhbGl0eTtcbn1cbiJdLCJuYW1lcyI6WyJ2ZXJpZnlTdGF0ZW1lbnQiLCJ0ZXJtTm9kZVF1ZXJ5Iiwibm9kZVF1ZXJ5IiwidHlwZU5vZGVRdWVyeSIsIm1ldGFUeXBlTm9kZVF1ZXJ5Iiwic3RhdGVtZW50Tm9kZVF1ZXJ5IiwidHlwZUFzc2VydGlvbk5vZGVRdWVyeSIsIm1ldGFUeXBlVGVybWluYWxOb2RlUXVlcnkiLCJzdGF0ZW1lbnROb2RlIiwiYXNzaWdubWVudHMiLCJkZXJpdmVkIiwiY29udGV4dCIsInN0YXRlbWVudFZlcmlmaWVkIiwic3RhdGVtZW50VmVyaWZpZWRBZ2FpbnN0Q29tYmluYXRvcnMiLCJ2ZXJpZnlTdGF0ZW1lbnRBZ2FpbnN0Q29tYmluYXRvcnMiLCJzdGF0ZW1lbnRWZXJpZmllZEFzVHlwZUFzc2VydGlvbiIsInZlcmlmeVN0YXRlbWVudEFzVHlwZUFzc2VydGlvbiIsInN0YXRlbWVudFZlcmlmaWVkQXNFcXVhbGl0eSIsInZlcmlmeVN0YXRlbWVudEFzRXF1YWxpdHkiLCJTdGF0ZW1lbnRWZXJpZmllciIsInZlcmlmeU5vblRlcm1pbmFsTm9kZSIsIm5vblRlcm1pbmFsTm9kZUEiLCJub25UZXJtaW5hbE5vZGVCIiwibm9uVGVybWluYWxOb2RlVmVyaWZpZWQiLCJub25UZXJtaW5hbE5vZGUiLCJjb21iaW5hdG9yTm9uVGVybWluYWxOb2RlIiwicnVsZU5hbWUiLCJnZXRSdWxlTmFtZSIsImNvbWJpbmF0b3JSdWxlTmFtZSIsIkFSR1VNRU5UX1JVTEVfTkFNRSIsImFyZ3VtZW50Tm9kZSIsImNvbWJpbmF0b3JBcmd1bWVudE5vZGUiLCJhcmd1bWVudE5vZGVWZXJpZmllZCIsInZlcmlmeUFyZ3VtZW50Tm9kZSIsIk1FVEFfQVJHVU1FTlRfUlVMRV9OQU1FIiwibWV0YUFyZ3VtZW50Tm9kZSIsImNvbWJpbmF0b3JNZXRhYXJndW1lbnROb2RlIiwibWV0YUFyZ3VtZW50Tm9kZVZlcmlmaWVkIiwidmVyaWZ5TWV0YWFyZ3VtZW50Tm9kZSIsImNoaWxkTm9kZXMiLCJnZXRDaGlsZE5vZGVzIiwiY29tYmluYXRvckNoaWxkTm9kZXMiLCJub2Rlc0EiLCJub2Rlc0IiLCJub2Rlc1ZlcmlmaWVkIiwidmVyaWZ5Tm9kZXMiLCJ0ZXJtTm9kZSIsImFyZ3VtZW50U3RyaW5nIiwibm9kZUFzU3RyaW5nIiwiZXJyb3IiLCJ0eXBlcyIsInRlcm1WZXJpZmllZCIsInZlcmlmeVRlcm0iLCJmaXJzdFR5cGUiLCJmaXJzdCIsInRlcm1UeXBlIiwidHlwZU5vZGUiLCJ0eXBlTmFtZSIsInR5cGVOYW1lRnJvbVR5cGVOb2RlIiwidHlwZSIsIk9CSkVDVF9UWVBFX05BTUUiLCJvYmplY3RUeXBlIiwiZmluZFR5cGVCeVR5cGVOYW1lIiwic3RhdGVtZW50VHlwZUVxdWFsVG9PclN1YlR5cGVPZlR5cGUiLCJpc0VxdWFsVG9PclN1YlR5cGVPZiIsImNvbWJpbmF0b3JNZXRhVFlwZU5vZGUiLCJtZXRhQXJndW1lbnRTdHJpbmciLCJjb21iaW5hdG9yTWV0YWFyZ3VtZW50U3RyaW5nIiwiY29tYmluYXRvck1ldGFUeXBlVGVybWluYWxOb2RlIiwiY29udGVudCIsImdldENvbnRlbnQiLCJjb250ZW50U3RhdGVtZW50TWV0YVR5cGUiLCJTVEFURU1FTlRfTUVUQV9UWVBFIiwiVmVyaWZpZXIiLCJzdGF0ZW1lbnRWZXJpZmllciIsImNvbWJpbmF0b3JzIiwiZ2V0Q29tYmluYXRvcnMiLCJicmFja2V0ZWRDb21iaW5hdG9yIiwiY29tYmluYXRvciIsImZpbmQiLCJzdGF0ZW1lbnRWZXJpZmllZEFnYWluc3RDb21iaW5hdG9yIiwidmVyaWZ5U3RhdGVtZW50QWdhaW5zdENvbWJpbmF0b3IiLCJjb21iaW5hdG9yU3RhdGVtZW50Tm9kZSIsImdldFN0YXRlbWVudE5vZGUiLCJ0eXBlQXNzZXJ0aW9uTm9kZSIsInR5cGVBc3NlcnRpb25WZXJpZmllZCIsInZlcmlmeVR5cGVBc3NlcnRpb24iLCJlcXVhbGl0eUNvbWJpbmF0b3IiLCJlcXVhbGl0eSIsIkVxdWFsaXR5IiwiZnJvbVN0YXRlbWVudE5vZGUiLCJlcXVhbGl0aWVzIiwiZ2V0RXF1YWxpdGllcyIsImVxdWFsaXR5VmVyaWZpZWQiLCJ2ZXJpZnkiLCJ2YXJpYWJsZXMiLCJsZWZ0VGVybU5vZGUiLCJnZXRMZWZ0VGVybU5vZGUiLCJyaWdodFRlcm1Ob2RlIiwiZ2V0UmlnaHRUZXJtTm9kZSIsImxlZnRUZXJtVmVyaWZpZWRBc1ZhcmlhYmxlIiwidmVyaWZ5VGVybUFzVmFyaWFibGUiLCJyaWdodFRlcm1WZXJpZmllZEFzVmFyaWFibGUiLCJmaXJzdFZhcmlhYmxlIiwic2Vjb25kVmFyaWFibGUiLCJzZWNvbmQiLCJsZWZ0VmFyaWFibGUiLCJyaWdodFZhcmlhYmxlIiwibGVmdFZhcmlhYmxlTmFtZSIsImdldE5hbWUiLCJsZWZ0VmFyaWFibGVUeXBlIiwiZ2V0VHlwZSIsInJpZ2h0VmFyaWFibGVOYW1lIiwicmlnaHRWYXJpYWJsZVR5cGUiLCJsZWZ0VmFyaWFibGVUeXBlRXF1YWxUb09yU3ViVHlwZU9mT2ZTdXBlclR5cGVPZlJpZ2h0VmFyaWFibGVUeXBlIiwiaXNFcXVhbFRvT3JTdWJUeXBlT2ZPZlN1cGVyVHlwZU9mIiwibGVmdFZhcmlhYmxlVHlwZU5hbWUiLCJyaWdodFZhcmlhYmxlVHlwZU5hbWUiLCJsZWZ0VmFyaWFibGVUeXBlU3VwZXJUeXBlT2ZSaWdodFZhcmlhYmxlVHlwZSIsImlzU3VwZXJUeXBlT2YiLCJyaWdodFZhcmlhYmxlVHlwZVN1cGVyVHlwZU9mTGVmdFZhcmlhYmxlVHlwZSIsIm5hbWUiLCJ2YXJpYWJsZSIsIlZhcmlhYmxlIiwiZnJvbU5hbWVBbmRUeXBlIiwiYXNzaWdubWVudCIsIkFzc2lnbm1lbnQiLCJmcm9tVmFyaWFibGUiLCJwdXNoIiwicmlnaHRUZXJtVHlwZSIsImxlZnRWYXJpYWJsZVR5cGVFcXVhbFRvT3JTdXBlclR5cGVPZlJpZ2h0VGVybVR5cGUiLCJpc0VxdWFsVG9PclN1cGVyVHlwZU9mIiwicmlnaHRUZXJtU3RyaW5nIiwicmlnaHRUZXJtVHlwZU5hbWUiLCJsZWZ0VGVybVR5cGUiLCJyaWdodFZhcmlhYmxlVHlwZUVxdWFsVG9PclN1cGVyVHlwZU9mUmlnaHRUZXJtVHlwZSIsImxlZnRUZXJtU3RyaW5nIiwibGVmdFRlcm1UeXBlTmFtZSIsInNlY29uZFR5cGUiLCJsZWZ0VGVybVR5cGVFcXVhbFRvT3JTdWJUeXBlT2ZPZlN1cGVyVHlwZU9mIiwic3RhdGVtZW50U3RyaW5nIiwiaW5mbyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBMEJBOzs7ZUFBd0JBOzs7NkRBeEJIOzZEQUNBOzZEQUNBOytEQUNFOzBEQUNBOzhEQUNROzhEQUNDO3lEQUNBO3FCQUVMO3FCQUNHO3lCQUNHO3lCQUNHO3FCQUVZO3lCQUNZOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUU1RCxJQUFNQyxnQkFBZ0JDLElBQUFBLGdCQUFTLEVBQUMsb0JBQzFCQyxnQkFBZ0JELElBQUFBLGdCQUFTLEVBQUMsb0JBQzFCRSxvQkFBb0JGLElBQUFBLGdCQUFTLEVBQUMsNEJBQzlCRyxxQkFBcUJILElBQUFBLGdCQUFTLEVBQUMsNkJBQy9CSSx5QkFBeUJKLElBQUFBLGdCQUFTLEVBQUMsOEJBQ25DSyw0QkFBNEJMLElBQUFBLGdCQUFTLEVBQUM7QUFFN0IsU0FBU0YsZ0JBQWdCUSxhQUFhLEVBQUVDLFdBQVcsRUFBRUMsT0FBTyxFQUFFQyxPQUFPLEVBQUU7SUFDcEYsSUFBSUMsb0JBQW9CLEtBQUs7SUFFN0IsSUFBSSxDQUFDQSxtQkFBbUI7UUFDdEIsSUFBTUMsc0NBQXNDQyxrQ0FBa0NOLGVBQWVHO1FBRTdGQyxvQkFBb0JDLHFDQUFzQyxHQUFHO0lBQy9ELENBQUM7SUFFRCxJQUFJLENBQUNELG1CQUFtQjtRQUN0QixJQUFNRyxtQ0FBbUNDLCtCQUErQlIsZUFBZUMsYUFBYUMsU0FBU0M7UUFFN0dDLG9CQUFvQkcsa0NBQWtDLEdBQUc7SUFDM0QsQ0FBQztJQUVELElBQUksQ0FBQ0gsbUJBQW1CO1FBQ3RCLElBQU1LLDhCQUE4QkMs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