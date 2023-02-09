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
        var statementVerifiedAsEquality = verifyStatementAsEquality(statementNode, derived, context);
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
function verifyStatementAsEquality(statementNode, derived, context) {
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
                        var type = rightVariableType, name = leftVariableName, variable = _variable.default.fromTypeAndName(type, name);
                        context.addVariable(variable);
                    }
                    if (rightVariableTypeSuperTypeOfLeftVariableType) {
                        var type1 = leftVariableType, name1 = rightVariableName, variable1 = _variable.default.fromTypeAndName(type1, name1);
                        context.addVariable(variable1);
                    }
                    statementVerifiedAsEquality = true;
                }
            } else if (leftTermVerifiedAsVariable) {
                var types = [];
                (0, _term.default)(rightTermNode, types, context);
                var firstType = (0, _array.first)(types), firstVariable1 = (0, _array.first)(variables), leftVariable1 = firstVariable1, rightTermType = firstType, leftVariableType1 = leftVariable1.getType(), leftVariableTypeEqualToOrSuperTypeOfRightTermType = leftVariableType1.isEqualToOrSuperTypeOf(rightTermType);
                if (!leftVariableTypeEqualToOrSuperTypeOfRightTermType) {
                    var rightTermString = context.nodeAsString(rightTermNode), leftVariableName1 = leftVariable1.getName(), rightTermTypeName = rightTermType.getName(), leftVariableTypeName1 = leftVariableType1.getName();
                    context.error("The left '".concat(leftVariableName1, "' variable's '").concat(leftVariableTypeName1, "' type is not equal to or a super-type of the right '").concat(rightTermString, "' term's '").concat(rightTermTypeName, "' type."), statementNode);
                } else {
                    statementVerifiedAsEquality = true;
                }
            } else if (rightTermVerifiedAsVariable) {
                var types1 = [];
                (0, _term.default)(leftTermNode, types1, context);
                var firstType1 = (0, _array.first)(types1), firstVariable2 = (0, _array.first)(variables), leftTermType = firstType1, rightVariable1 = firstVariable2, rightVariableType1 = rightVariable1.getType(), rightVariableTypeEqualToOrSuperTypeOfRightTermType = rightVariableType1.isEqualToOrSuperTypeOf(leftTermType);
                if (!rightVariableTypeEqualToOrSuperTypeOfRightTermType) {
                    var leftTermString = context.nodeAsString(leftTermNode), rightVariableName1 = rightVariable1.getName(), leftTermTypeName = leftTermType.getName(), rightVariableTypeName1 = rightVariableType1.getName();
                    context.error("The right '".concat(rightVariableName1, "' variable's '").concat(rightVariableTypeName1, "' type is not equal to or a super-type of the left '").concat(leftTermString, "' term's '").concat(leftTermTypeName, "' type."), statementNode);
                } else {
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92ZXJpZnkvc3RhdGVtZW50LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgVmVyaWZpZXIgZnJvbSBcIi4uL3ZlcmlmaWVyXCI7XG5pbXBvcnQgVmFyaWFibGUgZnJvbSBcIi4uL3ZhcmlhYmxlXCI7XG5pbXBvcnQgRXF1YWxpdHkgZnJvbSBcIi4uL2VxdWFsaXR5XCI7XG5pbXBvcnQgdmVyaWZ5VGVybSBmcm9tIFwiLi4vdmVyaWZ5L3Rlcm1cIjtcbmltcG9ydCBlcXVhbGl0eUNvbWJpbmF0b3IgZnJvbSBcIi4uL29jbWJpbmF0b3IvZXF1YWxpdHlcIjtcbmltcG9ydCBicmFja2V0ZWRDb21iaW5hdG9yIGZyb20gXCIuLi9vY21iaW5hdG9yL2JyYWNrZXRlZFwiO1xuaW1wb3J0IHZlcmlmeVR5cGVBc3NlcnRpb24gZnJvbSBcIi4uL3ZlcmlmeS9hc3NlcnRpb24vdHlwZVwiO1xuXG5pbXBvcnQgeyBvYmplY3RUeXBlIH0gZnJvbSBcIi4uL3R5cGVcIjtcbmltcG9ydCB7IGZpcnN0LCBzZWNvbmQgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2FycmF5XCI7XG5pbXBvcnQgeyBPQkpFQ1RfVFlQRV9OQU1FIH0gZnJvbSBcIi4uL3R5cGVOYW1lc1wiO1xuaW1wb3J0IHsgU1RBVEVNRU5UX01FVEFfVFlQRSB9IGZyb20gXCIuLi9tZXRhVHlwZXNcIjtcbmltcG9ydCB7IHZlcmlmeVRlcm1Bc1ZhcmlhYmxlIH0gZnJvbSBcIi4uL3ZlcmlmeS90ZXJtXCI7XG5pbXBvcnQgeyBub2RlUXVlcnksIHR5cGVOYW1lRnJvbVR5cGVOb2RlIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9xdWVyeVwiO1xuaW1wb3J0IHsgQVJHVU1FTlRfUlVMRV9OQU1FLCBNRVRBX0FSR1VNRU5UX1JVTEVfTkFNRSB9IGZyb20gXCIuLi9ydWxlTmFtZXNcIjtcblxuY29uc3QgdGVybU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9hcmd1bWVudC90ZXJtIVwiKSxcbiAgICAgIHR5cGVOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvYXJndW1lbnQvdHlwZSFcIiksXG4gICAgICBtZXRhVHlwZU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9tZXRhQXJndW1lbnQvbWV0YVR5cGUhXCIpLFxuICAgICAgc3RhdGVtZW50Tm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL21ldGFBcmd1bWVudC9zdGF0ZW1lbnQhXCIpLFxuICAgICAgdHlwZUFzc2VydGlvbk5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9zdGF0ZW1lbnQvdHlwZUFzc2VydGlvbiFcIiksXG4gICAgICBtZXRhVHlwZVRlcm1pbmFsTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL21ldGFUeXBlL0BtZXRhLXR5cGVcIik7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHZlcmlmeVN0YXRlbWVudChzdGF0ZW1lbnROb2RlLCBhc3NpZ25tZW50cywgZGVyaXZlZCwgY29udGV4dCkge1xuICBsZXQgc3RhdGVtZW50VmVyaWZpZWQgPSBmYWxzZTtcblxuICBpZiAoIXN0YXRlbWVudFZlcmlmaWVkKSB7XG4gICAgY29uc3Qgc3RhdGVtZW50VmVyaWZpZWRBZ2FpbnN0Q29tYmluYXRvcnMgPSB2ZXJpZnlTdGF0ZW1lbnRBZ2FpbnN0Q29tYmluYXRvcnMoc3RhdGVtZW50Tm9kZSwgY29udGV4dCk7XG5cbiAgICBzdGF0ZW1lbnRWZXJpZmllZCA9IHN0YXRlbWVudFZlcmlmaWVkQWdhaW5zdENvbWJpbmF0b3JzOyAgLy8vXG4gIH1cblxuICBpZiAoIXN0YXRlbWVudFZlcmlmaWVkKSB7XG4gICAgY29uc3Qgc3RhdGVtZW50VmVyaWZpZWRBc1R5cGVBc3NlcnRpb24gPSB2ZXJpZnlTdGF0ZW1lbnRBc1R5cGVBc3NlcnRpb24oc3RhdGVtZW50Tm9kZSwgYXNzaWdubWVudHMsIGRlcml2ZWQsIGNvbnRleHQpO1xuXG4gICAgc3RhdGVtZW50VmVyaWZpZWQgPSBzdGF0ZW1lbnRWZXJpZmllZEFzVHlwZUFzc2VydGlvbjsgLy8vXG4gIH1cblxuICBpZiAoIXN0YXRlbWVudFZlcmlmaWVkKSB7XG4gICAgY29uc3Qgc3RhdGVtZW50VmVyaWZpZWRBc0VxdWFsaXR5ID0gdmVyaWZ5U3RhdGVtZW50QXNFcXVhbGl0eShzdGF0ZW1lbnROb2RlLCBkZXJpdmVkLCBjb250ZXh0KTtcblxuICAgIHN0YXRlbWVudFZlcmlmaWVkID0gc3RhdGVtZW50VmVyaWZpZWRBc0VxdWFsaXR5OyAgLy9cbiAgfVxuXG4gIHJldHVybiBzdGF0ZW1lbnRWZXJpZmllZDtcbn1cblxuY2xhc3MgU3RhdGVtZW50VmVyaWZpZXIgZXh0ZW5kcyBWZXJpZmllciB7XG4gIHZlcmlmeU5vblRlcm1pbmFsTm9kZShub25UZXJtaW5hbE5vZGVBLCBub25UZXJtaW5hbE5vZGVCLCBjb250ZXh0KSB7XG4gICAgbGV0IG5vblRlcm1pbmFsTm9kZVZlcmlmaWVkID0gZmFsc2U7XG5cbiAgICBjb25zdCBub25UZXJtaW5hbE5vZGUgPSBub25UZXJtaW5hbE5vZGVBLCAvLy9cbiAgICAgICAgICBjb21iaW5hdG9yTm9uVGVybWluYWxOb2RlID0gbm9uVGVybWluYWxOb2RlQjsgLy8vXG5cbiAgICBjb25zdCBydWxlTmFtZSA9IG5vblRlcm1pbmFsTm9kZS5nZXRSdWxlTmFtZSgpLCAvLy9cbiAgICAgIGNvbWJpbmF0b3JSdWxlTmFtZSA9IGNvbWJpbmF0b3JOb25UZXJtaW5hbE5vZGUuZ2V0UnVsZU5hbWUoKTsgLy8vXG5cbiAgICBpZiAocnVsZU5hbWUgPT09IGNvbWJpbmF0b3JSdWxlTmFtZSkge1xuICAgICAgc3dpdGNoIChydWxlTmFtZSkge1xuICAgICAgICBjYXNlIEFSR1VNRU5UX1JVTEVfTkFNRToge1xuICAgICAgICAgIGNvbnN0IGFyZ3VtZW50Tm9kZSA9IG5vblRlcm1pbmFsTm9kZSwgLy8vXG4gICAgICAgICAgICAgICAgY29tYmluYXRvckFyZ3VtZW50Tm9kZSA9IGNvbWJpbmF0b3JOb25UZXJtaW5hbE5vZGUsIC8vL1xuICAgICAgICAgICAgICAgIGFyZ3VtZW50Tm9kZVZlcmlmaWVkID0gdGhpcy52ZXJpZnlBcmd1bWVudE5vZGUoYXJndW1lbnROb2RlLCBjb21iaW5hdG9yQXJndW1lbnROb2RlLCBjb250ZXh0KTtcblxuICAgICAgICAgIG5vblRlcm1pbmFsTm9kZVZlcmlmaWVkID0gYXJndW1lbnROb2RlVmVyaWZpZWQ7IC8vL1xuXG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cblxuICAgICAgICBjYXNlIE1FVEFfQVJHVU1FTlRfUlVMRV9OQU1FOiB7XG4gICAgICAgICAgY29uc3QgbWV0YUFyZ3VtZW50Tm9kZSA9IG5vblRlcm1pbmFsTm9kZSwgLy8vXG4gICAgICAgICAgICAgICAgY29tYmluYXRvck1ldGFhcmd1bWVudE5vZGUgPSBjb21iaW5hdG9yTm9uVGVybWluYWxOb2RlLCAvLy9cbiAgICAgICAgICAgICAgICBtZXRhQXJndW1lbnROb2RlVmVyaWZpZWQgPSB0aGlzLnZlcmlmeU1ldGFhcmd1bWVudE5vZGUobWV0YUFyZ3VtZW50Tm9kZSwgY29tYmluYXRvck1ldGFhcmd1bWVudE5vZGUsIGNvbnRleHQpO1xuXG4gICAgICAgICAgbm9uVGVybWluYWxOb2RlVmVyaWZpZWQgPSBtZXRhQXJndW1lbnROb2RlVmVyaWZpZWQ7IC8vL1xuXG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cblxuICAgICAgICBkZWZhdWx0OiB7XG4gICAgICAgICAgY29uc3QgY2hpbGROb2RlcyA9IG5vblRlcm1pbmFsTm9kZS5nZXRDaGlsZE5vZGVzKCksXG4gICAgICAgICAgICAgICAgY29tYmluYXRvckNoaWxkTm9kZXMgPSBjb21iaW5hdG9yTm9uVGVybWluYWxOb2RlLmdldENoaWxkTm9kZXMoKSxcbiAgICAgICAgICAgICAgICBub2Rlc0EgPSBjaGlsZE5vZGVzLCAvLy9cbiAgICAgICAgICAgICAgICBub2Rlc0IgPSBjb21iaW5hdG9yQ2hpbGROb2RlcywgLy8vXG4gICAgICAgICAgICAgICAgbm9kZXNWZXJpZmllZCA9IHRoaXMudmVyaWZ5Tm9kZXMobm9kZXNBLCBub2Rlc0IsIGNvbnRleHQpO1xuXG4gICAgICAgICAgbm9uVGVybWluYWxOb2RlVmVyaWZpZWQgPSBub2Rlc1ZlcmlmaWVkOyAvLy9cblxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG5vblRlcm1pbmFsTm9kZVZlcmlmaWVkO1xuICB9XG5cbiAgdmVyaWZ5QXJndW1lbnROb2RlKGFyZ3VtZW50Tm9kZSwgY29tYmluYXRvckFyZ3VtZW50Tm9kZSwgY29udGV4dCkge1xuICAgIGxldCBhcmd1bWVudE5vZGVWZXJpZmllZCA9IGZhbHNlO1xuXG4gICAgY29uc3QgdGVybU5vZGUgPSB0ZXJtTm9kZVF1ZXJ5KGFyZ3VtZW50Tm9kZSk7XG5cbiAgICBpZiAodGVybU5vZGUgPT09IG51bGwpIHtcbiAgICAgIGNvbnN0IGFyZ3VtZW50U3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcoYXJndW1lbnROb2RlKTtcblxuICAgICAgY29udGV4dC5lcnJvcihgVGhlICR7YXJndW1lbnRTdHJpbmd9IGFyZ3VtZW50IHNob3VsZCBiZSBhIHRlcm0sIG5vdCBhIHR5cGVgLCBhcmd1bWVudE5vZGUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCB0eXBlcyA9IFtdLFxuICAgICAgICAgICAgdGVybVZlcmlmaWVkID0gdmVyaWZ5VGVybSh0ZXJtTm9kZSwgdHlwZXMsIGNvbnRleHQpO1xuXG4gICAgICBpZiAodGVybVZlcmlmaWVkKSB7XG4gICAgICAgIGNvbnN0IGZpcnN0VHlwZSA9IGZpcnN0KHR5cGVzKSxcbiAgICAgICAgICAgICAgdGVybVR5cGUgPSBmaXJzdFR5cGUsIC8vL1xuICAgICAgICAgICAgICB0eXBlTm9kZSA9IHR5cGVOb2RlUXVlcnkoY29tYmluYXRvckFyZ3VtZW50Tm9kZSksXG4gICAgICAgICAgICAgIHR5cGVOYW1lID0gdHlwZU5hbWVGcm9tVHlwZU5vZGUodHlwZU5vZGUpLFxuICAgICAgICAgICAgICB0eXBlID0gKHR5cGVOYW1lID09PSBPQkpFQ1RfVFlQRV9OQU1FKSA/XG4gICAgICAgICAgICAgICAgICAgICAgIG9iamVjdFR5cGUgOiAgLy8vXG4gICAgICAgICAgICAgICAgICAgICAgICAgY29udGV4dC5maW5kVHlwZUJ5VHlwZU5hbWUodHlwZU5hbWUpLFxuICAgICAgICAgICAgICBzdGF0ZW1lbnRUeXBlRXF1YWxUb09yU3ViVHlwZU9mVHlwZSA9IHRlcm1UeXBlLmlzRXF1YWxUb09yU3ViVHlwZU9mKHR5cGUpO1xuXG4gICAgICAgIGlmIChzdGF0ZW1lbnRUeXBlRXF1YWxUb09yU3ViVHlwZU9mVHlwZSkge1xuICAgICAgICAgIGFyZ3VtZW50Tm9kZVZlcmlmaWVkID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBhcmd1bWVudE5vZGVWZXJpZmllZDtcbiAgfVxuXG4gIHZlcmlmeU1ldGFhcmd1bWVudE5vZGUobWV0YUFyZ3VtZW50Tm9kZSwgY29tYmluYXRvck1ldGFhcmd1bWVudE5vZGUsIGNvbnRleHQpIHtcbiAgICBsZXQgbWV0YUFyZ3VtZW50Tm9kZVZlcmlmaWVkID0gZmFsc2U7XG5cbiAgICBjb25zdCBzdGF0ZW1lbnROb2RlID0gc3RhdGVtZW50Tm9kZVF1ZXJ5KG1ldGFBcmd1bWVudE5vZGUpLFxuICAgICAgICAgIGNvbWJpbmF0b3JNZXRhVFlwZU5vZGUgPSBtZXRhVHlwZU5vZGVRdWVyeShjb21iaW5hdG9yTWV0YWFyZ3VtZW50Tm9kZSk7XG5cbiAgICBpZiAoc3RhdGVtZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgICAgY29uc3QgbWV0YUFyZ3VtZW50U3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobWV0YUFyZ3VtZW50Tm9kZSk7XG5cbiAgICAgIGNvbnRleHQuZXJyb3IoYEV4cGVjdGVkIGEgc3RhdGVtZW50IGJ1dCBnb3QgYSAnJHttZXRhQXJndW1lbnRTdHJpbmd9JyBtZXRhLXR5cGUuYCwgbWV0YUFyZ3VtZW50Tm9kZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChjb21iaW5hdG9yTWV0YVRZcGVOb2RlID09PSBudWxsKSB7XG4gICAgICAgIGNvbnN0IGNvbWJpbmF0b3JNZXRhYXJndW1lbnRTdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhjb21iaW5hdG9yTWV0YWFyZ3VtZW50Tm9kZSk7XG5cbiAgICAgICAgY29udGV4dC5lcnJvcihgRXhwZWN0ZWQgYSBtZXRhLXR5cGUgYnV0IGdvdCBhICcke2NvbWJpbmF0b3JNZXRhYXJndW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQuYCwgbWV0YUFyZ3VtZW50Tm9kZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCBjb21iaW5hdG9yTWV0YVR5cGVUZXJtaW5hbE5vZGUgPSBtZXRhVHlwZVRlcm1pbmFsTm9kZVF1ZXJ5KGNvbWJpbmF0b3JNZXRhVFlwZU5vZGUpLFxuICAgICAgICAgICAgICBjb250ZW50ID0gY29tYmluYXRvck1ldGFUeXBlVGVybWluYWxOb2RlLmdldENvbnRlbnQoKSxcbiAgICAgICAgICAgICAgY29udGVudFN0YXRlbWVudE1ldGFUeXBlID0gKGNvbnRlbnQgPT09IFNUQVRFTUVOVF9NRVRBX1RZUEUpO1xuXG4gICAgICAgIGlmICghY29udGVudFN0YXRlbWVudE1ldGFUeXBlKSB7XG4gICAgICAgICAgY29udGV4dC5lcnJvcihgRXhwZWN0ZWQgdGhlIG1ldGEtdHlwZSB0byBiZSAnU3RhdGVtZW50JyBidXQgZ290ICcke2NvbnRlbnR9Jy5gLCBtZXRhQXJndW1lbnROb2RlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBtZXRhQXJndW1lbnROb2RlVmVyaWZpZWQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG1ldGFBcmd1bWVudE5vZGVWZXJpZmllZDtcbiAgfVxufVxuXG5jb25zdCBzdGF0ZW1lbnRWZXJpZmllciA9IG5ldyBTdGF0ZW1lbnRWZXJpZmllcigpO1xuXG5mdW5jdGlvbiB2ZXJpZnlTdGF0ZW1lbnRBZ2FpbnN0Q29tYmluYXRvcnMoc3RhdGVtZW50Tm9kZSwgY29udGV4dCkge1xuICBsZXQgc3RhdGVtZW50VmVyaWZpZWRBZ2FpbnN0Q29tYmluYXRvcnMgPSBmYWxzZTtcblxuICBsZXQgY29tYmluYXRvcnMgPSBjb250ZXh0LmdldENvbWJpbmF0b3JzKCk7XG5cbiAgY29tYmluYXRvcnMgPSBbIC8vL1xuICAgIGJyYWNrZXRlZENvbWJpbmF0b3IsXG4gICAgLi4uY29tYmluYXRvcnNcbiAgXTtcblxuICBjb25zdCBjb21iaW5hdG9yID0gY29tYmluYXRvcnMuZmluZCgoY29tYmluYXRvcikgPT4ge1xuICAgIGNvbnN0IHN0YXRlbWVudFZlcmlmaWVkQWdhaW5zdENvbWJpbmF0b3IgPSB2ZXJpZnlTdGF0ZW1lbnRBZ2FpbnN0Q29tYmluYXRvcihzdGF0ZW1lbnROb2RlLCBjb21iaW5hdG9yLCBjb250ZXh0KTtcblxuICAgIGlmIChzdGF0ZW1lbnRWZXJpZmllZEFnYWluc3RDb21iaW5hdG9yKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH0pIHx8IG51bGw7XG5cbiAgaWYgKGNvbWJpbmF0b3IgIT09IG51bGwpIHtcbiAgICBzdGF0ZW1lbnRWZXJpZmllZEFnYWluc3RDb21iaW5hdG9ycyA9IHRydWU7XG4gIH1cblxuICByZXR1cm4gc3RhdGVtZW50VmVyaWZpZWRBZ2FpbnN0Q29tYmluYXRvcnM7XG59XG5cbmZ1bmN0aW9uIHZlcmlmeVN0YXRlbWVudEFnYWluc3RDb21iaW5hdG9yKHN0YXRlbWVudE5vZGUsIGNvbWJpbmF0b3IsIGNvbnRleHQpIHtcbiAgY29uc3QgY29tYmluYXRvclN0YXRlbWVudE5vZGUgPSBjb21iaW5hdG9yLmdldFN0YXRlbWVudE5vZGUoKSxcbiAgICAgICAgbm9uVGVybWluYWxOb2RlQSA9IHN0YXRlbWVudE5vZGUsICAvLy9cbiAgICAgICAgbm9uVGVybWluYWxOb2RlQiA9IGNvbWJpbmF0b3JTdGF0ZW1lbnROb2RlLCAvLy9cbiAgICAgICAgbm9kZVZlcmlmaWVkID0gc3RhdGVtZW50VmVyaWZpZXIudmVyaWZ5Tm9uVGVybWluYWxOb2RlKG5vblRlcm1pbmFsTm9kZUEsIG5vblRlcm1pbmFsTm9kZUIsIGNvbnRleHQpLFxuICAgICAgICBzdGF0ZW1lbnRWZXJpZmllZEFnYWluc3RDb21iaW5hdG9yID0gbm9kZVZlcmlmaWVkOyAgLy8vXG5cbiAgcmV0dXJuIHN0YXRlbWVudFZlcmlmaWVkQWdhaW5zdENvbWJpbmF0b3I7XG59XG5cbmZ1bmN0aW9uIHZlcmlmeVN0YXRlbWVudEFzVHlwZUFzc2VydGlvbihzdGF0ZW1lbnROb2RlLCBhc3NpZ25tZW50cywgZGVyaXZlZCwgY29udGV4dCkge1xuICBsZXQgc3RhdGVtZW50VmVyaWZpZWRBc1R5cGVBc3NlcnRpb24gPSBmYWxzZTtcblxuICBjb25zdCB0eXBlQXNzZXJ0aW9uTm9kZSA9IHR5cGVBc3NlcnRpb25Ob2RlUXVlcnkoc3RhdGVtZW50Tm9kZSk7XG5cbiAgaWYgKHR5cGVBc3NlcnRpb25Ob2RlICE9PSBudWxsKSB7XG4gICAgY29uc3QgdHlwZUFzc2VydGlvblZlcmlmaWVkID0gdmVyaWZ5VHlwZUFzc2VydGlvbih0eXBlQXNzZXJ0aW9uTm9kZSwgYXNzaWdubWVudHMsIGRlcml2ZWQsIGNvbnRleHQpO1xuXG4gICAgc3RhdGVtZW50VmVyaWZpZWRBc1R5cGVBc3NlcnRpb24gPSB0eXBlQXNzZXJ0aW9uVmVyaWZpZWQ7IC8vL1xuICB9XG5cbiAgcmV0dXJuIHN0YXRlbWVudFZlcmlmaWVkQXNUeXBlQXNzZXJ0aW9uO1xufVxuXG5mdW5jdGlvbiB2ZXJpZnlTdGF0ZW1lbnRBc0VxdWFsaXR5KHN0YXRlbWVudE5vZGUsIGRlcml2ZWQsIGNvbnRleHQpIHtcbiAgbGV0IHN0YXRlbWVudFZlcmlmaWVkQXNFcXVhbGl0eSA9IGZhbHNlO1xuXG4gIGNvbnN0IGNvbWJpbmF0b3IgPSBlcXVhbGl0eUNvbWJpbmF0b3IsICAvLy9cbiAgICAgICAgc3RhdGVtZW50VmVyaWZpZWRBZ2FpbnN0Q29tYmluYXRvciA9IHZlcmlmeVN0YXRlbWVudEFnYWluc3RDb21iaW5hdG9yKHN0YXRlbWVudE5vZGUsIGNvbWJpbmF0b3IsIGNvbnRleHQpO1xuXG4gIGlmIChzdGF0ZW1lbnRWZXJpZmllZEFnYWluc3RDb21iaW5hdG9yKSB7XG4gICAgY29uc3QgZXF1YWxpdHkgPSBFcXVhbGl0eS5mcm9tU3RhdGVtZW50Tm9kZShzdGF0ZW1lbnROb2RlKTtcblxuICAgIGlmIChkZXJpdmVkKSB7XG4gICAgICBjb25zdCBlcXVhbGl0aWVzID0gY29udGV4dC5nZXRFcXVhbGl0aWVzKCksXG4gICAgICAgICAgICBlcXVhbGl0eVZlcmlmaWVkID0gZXF1YWxpdHkudmVyaWZ5KGVxdWFsaXRpZXMsIGNvbnRleHQpO1xuXG4gICAgICBzdGF0ZW1lbnRWZXJpZmllZEFzRXF1YWxpdHkgPSBlcXVhbGl0eVZlcmlmaWVkOyAgLy8vXG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHZhcmlhYmxlcyA9IFtdLFxuICAgICAgICAgICAgbGVmdFRlcm1Ob2RlID0gZXF1YWxpdHkuZ2V0TGVmdFRlcm1Ob2RlKCksXG4gICAgICAgICAgICByaWdodFRlcm1Ob2RlID0gZXF1YWxpdHkuZ2V0UmlnaHRUZXJtTm9kZSgpLFxuICAgICAgICAgICAgbGVmdFRlcm1WZXJpZmllZEFzVmFyaWFibGUgPSB2ZXJpZnlUZXJtQXNWYXJpYWJsZShsZWZ0VGVybU5vZGUsIHZhcmlhYmxlcywgY29udGV4dCksXG4gICAgICAgICAgICByaWdodFRlcm1WZXJpZmllZEFzVmFyaWFibGUgPSB2ZXJpZnlUZXJtQXNWYXJpYWJsZShyaWdodFRlcm1Ob2RlLCB2YXJpYWJsZXMsIGNvbnRleHQpO1xuXG4gICAgICBpZiAobGVmdFRlcm1WZXJpZmllZEFzVmFyaWFibGUgJiYgcmlnaHRUZXJtVmVyaWZpZWRBc1ZhcmlhYmxlKSB7XG4gICAgICAgIGNvbnN0IGZpcnN0VmFyaWFibGUgPSBmaXJzdCh2YXJpYWJsZXMpLFxuICAgICAgICAgICAgICBzZWNvbmRWYXJpYWJsZSA9IHNlY29uZCh2YXJpYWJsZXMpLFxuICAgICAgICAgICAgICBsZWZ0VmFyaWFibGUgPSBmaXJzdFZhcmlhYmxlLCAvLy9cbiAgICAgICAgICAgICAgcmlnaHRWYXJpYWJsZSA9IHNlY29uZFZhcmlhYmxlLCAvLy9cbiAgICAgICAgICAgICAgbGVmdFZhcmlhYmxlTmFtZSA9IGxlZnRWYXJpYWJsZS5nZXROYW1lKCksXG4gICAgICAgICAgICAgIGxlZnRWYXJpYWJsZVR5cGUgPSBsZWZ0VmFyaWFibGUuZ2V0VHlwZSgpLFxuICAgICAgICAgICAgICByaWdodFZhcmlhYmxlTmFtZSA9IHJpZ2h0VmFyaWFibGUuZ2V0TmFtZSgpLFxuICAgICAgICAgICAgICByaWdodFZhcmlhYmxlVHlwZSA9IHJpZ2h0VmFyaWFibGUuZ2V0VHlwZSgpLFxuICAgICAgICAgICAgICBsZWZ0VmFyaWFibGVUeXBlRXF1YWxUb09yU3ViVHlwZU9mT2ZTdXBlclR5cGVPZlJpZ2h0VmFyaWFibGVUeXBlID0gbGVmdFZhcmlhYmxlVHlwZS5pc0VxdWFsVG9PclN1YlR5cGVPZk9mU3VwZXJUeXBlT2YocmlnaHRWYXJpYWJsZVR5cGUpO1xuXG4gICAgICAgIGlmICghbGVmdFZhcmlhYmxlVHlwZUVxdWFsVG9PclN1YlR5cGVPZk9mU3VwZXJUeXBlT2ZSaWdodFZhcmlhYmxlVHlwZSkge1xuICAgICAgICAgIGNvbnN0IGxlZnRWYXJpYWJsZVR5cGVOYW1lID0gbGVmdFZhcmlhYmxlVHlwZS5nZXROYW1lKCksXG4gICAgICAgICAgICAgICAgcmlnaHRWYXJpYWJsZVR5cGVOYW1lID0gcmlnaHRWYXJpYWJsZVR5cGUuZ2V0TmFtZSgpO1xuXG4gICAgICAgICAgY29udGV4dC5lcnJvcihgVGhlIGxlZnQgJyR7bGVmdFZhcmlhYmxlTmFtZX0nIHZhcmlhYmxlJ3MgJyR7bGVmdFZhcmlhYmxlVHlwZU5hbWV9JyB0eXBlIGlzIG5vdCBlcXVhbCB0bywgYSBzdWItdHlwZSBvZiBvciBhIHN1cGVyLXR5cGUgb2YgdGhlIHJpZ2h0ICcke3JpZ2h0VmFyaWFibGVOYW1lfScgdmFyaWFibGUncyAnJHtyaWdodFZhcmlhYmxlVHlwZU5hbWV9JyB0eXBlLmAsIHN0YXRlbWVudE5vZGUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvbnN0IGxlZnRWYXJpYWJsZVR5cGVTdXBlclR5cGVPZlJpZ2h0VmFyaWFibGVUeXBlID0gbGVmdFZhcmlhYmxlVHlwZS5pc1N1cGVyVHlwZU9mKHJpZ2h0VmFyaWFibGVUeXBlKSxcbiAgICAgICAgICAgICAgICByaWdodFZhcmlhYmxlVHlwZVN1cGVyVHlwZU9mTGVmdFZhcmlhYmxlVHlwZSA9IHJpZ2h0VmFyaWFibGVUeXBlLmlzU3VwZXJUeXBlT2YobGVmdFZhcmlhYmxlVHlwZSk7XG5cbiAgICAgICAgICBpZiAobGVmdFZhcmlhYmxlVHlwZVN1cGVyVHlwZU9mUmlnaHRWYXJpYWJsZVR5cGUpIHtcbiAgICAgICAgICAgIGNvbnN0IHR5cGUgPSByaWdodFZhcmlhYmxlVHlwZSwgIC8vL1xuICAgICAgICAgICAgICAgICAgbmFtZSA9IGxlZnRWYXJpYWJsZU5hbWUsIC8vL1xuICAgICAgICAgICAgICAgICAgdmFyaWFibGUgPSBWYXJpYWJsZS5mcm9tVHlwZUFuZE5hbWUodHlwZSwgbmFtZSk7XG5cbiAgICAgICAgICAgIGNvbnRleHQuYWRkVmFyaWFibGUodmFyaWFibGUpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChyaWdodFZhcmlhYmxlVHlwZVN1cGVyVHlwZU9mTGVmdFZhcmlhYmxlVHlwZSkge1xuICAgICAgICAgICAgY29uc3QgdHlwZSA9IGxlZnRWYXJpYWJsZVR5cGUsICAvLy9cbiAgICAgICAgICAgICAgICAgIG5hbWUgPSByaWdodFZhcmlhYmxlTmFtZSwgLy8vXG4gICAgICAgICAgICAgICAgICB2YXJpYWJsZSA9IFZhcmlhYmxlLmZyb21UeXBlQW5kTmFtZSh0eXBlLCBuYW1lKTtcblxuICAgICAgICAgICAgY29udGV4dC5hZGRWYXJpYWJsZSh2YXJpYWJsZSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgc3RhdGVtZW50VmVyaWZpZWRBc0VxdWFsaXR5ID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChsZWZ0VGVybVZlcmlmaWVkQXNWYXJpYWJsZSkge1xuICAgICAgICBjb25zdCB0eXBlcyA9IFtdO1xuXG4gICAgICAgIHZlcmlmeVRlcm0ocmlnaHRUZXJtTm9kZSwgdHlwZXMsIGNvbnRleHQpO1xuXG4gICAgICAgIGNvbnN0IGZpcnN0VHlwZSA9IGZpcnN0KHR5cGVzKSxcbiAgICAgICAgICAgICAgZmlyc3RWYXJpYWJsZSA9IGZpcnN0KHZhcmlhYmxlcyksXG4gICAgICAgICAgICAgIGxlZnRWYXJpYWJsZSA9IGZpcnN0VmFyaWFibGUsIC8vL1xuICAgICAgICAgICAgICByaWdodFRlcm1UeXBlID0gZmlyc3RUeXBlLCAgLy8vXG4gICAgICAgICAgICAgIGxlZnRWYXJpYWJsZVR5cGUgPSBsZWZ0VmFyaWFibGUuZ2V0VHlwZSgpLFxuICAgICAgICAgICAgICBsZWZ0VmFyaWFibGVUeXBlRXF1YWxUb09yU3VwZXJUeXBlT2ZSaWdodFRlcm1UeXBlID0gbGVmdFZhcmlhYmxlVHlwZS5pc0VxdWFsVG9PclN1cGVyVHlwZU9mKHJpZ2h0VGVybVR5cGUpO1xuXG4gICAgICAgIGlmICghbGVmdFZhcmlhYmxlVHlwZUVxdWFsVG9PclN1cGVyVHlwZU9mUmlnaHRUZXJtVHlwZSkge1xuICAgICAgICAgIGNvbnN0IHJpZ2h0VGVybVN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKHJpZ2h0VGVybU5vZGUpLFxuICAgICAgICAgICAgICAgIGxlZnRWYXJpYWJsZU5hbWUgPSBsZWZ0VmFyaWFibGUuZ2V0TmFtZSgpLFxuICAgICAgICAgICAgICAgIHJpZ2h0VGVybVR5cGVOYW1lID0gcmlnaHRUZXJtVHlwZS5nZXROYW1lKCksXG4gICAgICAgICAgICAgICAgbGVmdFZhcmlhYmxlVHlwZU5hbWUgPSBsZWZ0VmFyaWFibGVUeXBlLmdldE5hbWUoKTtcblxuICAgICAgICAgIGNvbnRleHQuZXJyb3IoYFRoZSBsZWZ0ICcke2xlZnRWYXJpYWJsZU5hbWV9JyB2YXJpYWJsZSdzICcke2xlZnRWYXJpYWJsZVR5cGVOYW1lfScgdHlwZSBpcyBub3QgZXF1YWwgdG8gb3IgYSBzdXBlci10eXBlIG9mIHRoZSByaWdodCAnJHtyaWdodFRlcm1TdHJpbmd9JyB0ZXJtJ3MgJyR7cmlnaHRUZXJtVHlwZU5hbWV9JyB0eXBlLmAsIHN0YXRlbWVudE5vZGUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHN0YXRlbWVudFZlcmlmaWVkQXNFcXVhbGl0eSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAocmlnaHRUZXJtVmVyaWZpZWRBc1ZhcmlhYmxlKSB7XG4gICAgICAgIGNvbnN0IHR5cGVzID0gW107XG5cbiAgICAgICAgdmVyaWZ5VGVybShsZWZ0VGVybU5vZGUsIHR5cGVzLCBjb250ZXh0KTtcblxuICAgICAgICBjb25zdCBmaXJzdFR5cGUgPSBmaXJzdCh0eXBlcyksXG4gICAgICAgICAgICAgIGZpcnN0VmFyaWFibGUgPSBmaXJzdCh2YXJpYWJsZXMpLFxuICAgICAgICAgICAgICBsZWZ0VGVybVR5cGUgPSBmaXJzdFR5cGUsICAvLy9cbiAgICAgICAgICAgICAgcmlnaHRWYXJpYWJsZSA9IGZpcnN0VmFyaWFibGUsIC8vL1xuICAgICAgICAgICAgICByaWdodFZhcmlhYmxlVHlwZSA9IHJpZ2h0VmFyaWFibGUuZ2V0VHlwZSgpLFxuICAgICAgICAgICAgICByaWdodFZhcmlhYmxlVHlwZUVxdWFsVG9PclN1cGVyVHlwZU9mUmlnaHRUZXJtVHlwZSA9IHJpZ2h0VmFyaWFibGVUeXBlLmlzRXF1YWxUb09yU3VwZXJUeXBlT2YobGVmdFRlcm1UeXBlKTtcblxuICAgICAgICBpZiAoIXJpZ2h0VmFyaWFibGVUeXBlRXF1YWxUb09yU3VwZXJUeXBlT2ZSaWdodFRlcm1UeXBlKSB7XG4gICAgICAgICAgY29uc3QgbGVmdFRlcm1TdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhsZWZ0VGVybU5vZGUpLFxuICAgICAgICAgICAgICAgIHJpZ2h0VmFyaWFibGVOYW1lID0gcmlnaHRWYXJpYWJsZS5nZXROYW1lKCksXG4gICAgICAgICAgICAgICAgbGVmdFRlcm1UeXBlTmFtZSA9IGxlZnRUZXJtVHlwZS5nZXROYW1lKCksXG4gICAgICAgICAgICAgICAgcmlnaHRWYXJpYWJsZVR5cGVOYW1lID0gcmlnaHRWYXJpYWJsZVR5cGUuZ2V0TmFtZSgpO1xuXG4gICAgICAgICAgY29udGV4dC5lcnJvcihgVGhlIHJpZ2h0ICcke3JpZ2h0VmFyaWFibGVOYW1lfScgdmFyaWFibGUncyAnJHtyaWdodFZhcmlhYmxlVHlwZU5hbWV9JyB0eXBlIGlzIG5vdCBlcXVhbCB0byBvciBhIHN1cGVyLXR5cGUgb2YgdGhlIGxlZnQgJyR7bGVmdFRlcm1TdHJpbmd9JyB0ZXJtJ3MgJyR7bGVmdFRlcm1UeXBlTmFtZX0nIHR5cGUuYCwgc3RhdGVtZW50Tm9kZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgc3RhdGVtZW50VmVyaWZpZWRBc0VxdWFsaXR5ID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgdHlwZXMgPSBbXTtcblxuICAgICAgICB2ZXJpZnlUZXJtKGxlZnRUZXJtTm9kZSwgdHlwZXMsIGNvbnRleHQpO1xuXG4gICAgICAgIHZlcmlmeVRlcm0ocmlnaHRUZXJtTm9kZSwgdHlwZXMsIGNvbnRleHQpO1xuXG4gICAgICAgIGNvbnN0IGZpcnN0VHlwZSA9IGZpcnN0KHR5cGVzKSxcbiAgICAgICAgICAgICAgc2Vjb25kVHlwZSA9IHNlY29uZCh0eXBlcyksXG4gICAgICAgICAgICAgIGxlZnRUZXJtVHlwZSA9IGZpcnN0VHlwZSwgLy8vXG4gICAgICAgICAgICAgIHJpZ2h0VGVybVR5cGUgPSBzZWNvbmRUeXBlLCAvLy9cbiAgICAgICAgICAgICAgbGVmdFRlcm1UeXBlRXF1YWxUb09yU3ViVHlwZU9mT2ZTdXBlclR5cGVPZiA9IGxlZnRUZXJtVHlwZS5pc0VxdWFsVG9PclN1YlR5cGVPZk9mU3VwZXJUeXBlT2YocmlnaHRUZXJtVHlwZSk7XG5cbiAgICAgICAgaWYgKCFsZWZ0VGVybVR5cGVFcXVhbFRvT3JTdWJUeXBlT2ZPZlN1cGVyVHlwZU9mKSB7XG4gICAgICAgICAgY29uc3QgbGVmdFRlcm1TdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhsZWZ0VGVybU5vZGUpLFxuICAgICAgICAgICAgICAgIHJpZ2h0VGVybVN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKHJpZ2h0VGVybU5vZGUpLFxuICAgICAgICAgICAgICAgIGxlZnRUZXJtVHlwZU5hbWUgPSBsZWZ0VGVybVR5cGUuZ2V0TmFtZSgpLFxuICAgICAgICAgICAgICAgIHJpZ2h0VGVybVR5cGVOYW1lID0gcmlnaHRUZXJtVHlwZS5nZXROYW1lKCk7XG5cbiAgICAgICAgICBjb250ZXh0LmVycm9yKGBUaGUgbGVmdCAnJHtsZWZ0VGVybVN0cmluZ30nIHRlcm0ncyAnJHtsZWZ0VGVybVR5cGVOYW1lfScgdHlwZSBpcyBub3QgZXF1YWwgdG8sIGEgc3ViLXR5cGUgb2Ygb3IgYSBzdXBlci10eXBlIG9mIHRoZSByaWdodCAnJHtyaWdodFRlcm1TdHJpbmd9JyB0ZXJtJ3MgJyR7cmlnaHRUZXJtVHlwZU5hbWV9JyB0eXBlLmAsIHN0YXRlbWVudE5vZGUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHN0YXRlbWVudFZlcmlmaWVkQXNFcXVhbGl0eSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBpZiAoc3RhdGVtZW50VmVyaWZpZWRBc0VxdWFsaXR5KSB7XG4gICAgY29uc3Qgc3RhdGVtZW50U3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcoc3RhdGVtZW50Tm9kZSk7XG5cbiAgICBjb250ZXh0LmluZm8oYFZlcmlmaWVkIHRoZSAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQgYXMgYW4gZXF1YWxpdHkuYCwgc3RhdGVtZW50Tm9kZSk7XG4gIH1cblxuICByZXR1cm4gc3RhdGVtZW50VmVyaWZpZWRBc0VxdWFsaXR5O1xufVxuIl0sIm5hbWVzIjpbInZlcmlmeVN0YXRlbWVudCIsInRlcm1Ob2RlUXVlcnkiLCJub2RlUXVlcnkiLCJ0eXBlTm9kZVF1ZXJ5IiwibWV0YVR5cGVOb2RlUXVlcnkiLCJzdGF0ZW1lbnROb2RlUXVlcnkiLCJ0eXBlQXNzZXJ0aW9uTm9kZVF1ZXJ5IiwibWV0YVR5cGVUZXJtaW5hbE5vZGVRdWVyeSIsInN0YXRlbWVudE5vZGUiLCJhc3NpZ25tZW50cyIsImRlcml2ZWQiLCJjb250ZXh0Iiwic3RhdGVtZW50VmVyaWZpZWQiLCJzdGF0ZW1lbnRWZXJpZmllZEFnYWluc3RDb21iaW5hdG9ycyIsInZlcmlmeVN0YXRlbWVudEFnYWluc3RDb21iaW5hdG9ycyIsInN0YXRlbWVudFZlcmlmaWVkQXNUeXBlQXNzZXJ0aW9uIiwidmVyaWZ5U3RhdGVtZW50QXNUeXBlQXNzZXJ0aW9uIiwic3RhdGVtZW50VmVyaWZpZWRBc0VxdWFsaXR5IiwidmVyaWZ5U3RhdGVtZW50QXNFcXVhbGl0eSIsIlN0YXRlbWVudFZlcmlmaWVyIiwidmVyaWZ5Tm9uVGVybWluYWxOb2RlIiwibm9uVGVybWluYWxOb2RlQSIsIm5vblRlcm1pbmFsTm9kZUIiLCJub25UZXJtaW5hbE5vZGVWZXJpZmllZCIsIm5vblRlcm1pbmFsTm9kZSIsImNvbWJpbmF0b3JOb25UZXJtaW5hbE5vZGUiLCJydWxlTmFtZSIsImdldFJ1bGVOYW1lIiwiY29tYmluYXRvclJ1bGVOYW1lIiwiQVJHVU1FTlRfUlVMRV9OQU1FIiwiYXJndW1lbnROb2RlIiwiY29tYmluYXRvckFyZ3VtZW50Tm9kZSIsImFyZ3VtZW50Tm9kZVZlcmlmaWVkIiwidmVyaWZ5QXJndW1lbnROb2RlIiwiTUVUQV9BUkdVTUVOVF9SVUxFX05BTUUiLCJtZXRhQXJndW1lbnROb2RlIiwiY29tYmluYXRvck1ldGFhcmd1bWVudE5vZGUiLCJtZXRhQXJndW1lbnROb2RlVmVyaWZpZWQiLCJ2ZXJpZnlNZXRhYXJndW1lbnROb2RlIiwiY2hpbGROb2RlcyIsImdldENoaWxkTm9kZXMiLCJjb21iaW5hdG9yQ2hpbGROb2RlcyIsIm5vZGVzQSIsIm5vZGVzQiIsIm5vZGVzVmVyaWZpZWQiLCJ2ZXJpZnlOb2RlcyIsInRlcm1Ob2RlIiwiYXJndW1lbnRTdHJpbmciLCJub2RlQXNTdHJpbmciLCJlcnJvciIsInR5cGVzIiwidGVybVZlcmlmaWVkIiwidmVyaWZ5VGVybSIsImZpcnN0VHlwZSIsImZpcnN0IiwidGVybVR5cGUiLCJ0eXBlTm9kZSIsInR5cGVOYW1lIiwidHlwZU5hbWVGcm9tVHlwZU5vZGUiLCJ0eXBlIiwiT0JKRUNUX1RZUEVfTkFNRSIsIm9iamVjdFR5cGUiLCJmaW5kVHlwZUJ5VHlwZU5hbWUiLCJzdGF0ZW1lbnRUeXBlRXF1YWxUb09yU3ViVHlwZU9mVHlwZSIsImlzRXF1YWxUb09yU3ViVHlwZU9mIiwiY29tYmluYXRvck1ldGFUWXBlTm9kZSIsIm1ldGFBcmd1bWVudFN0cmluZyIsImNvbWJpbmF0b3JNZXRhYXJndW1lbnRTdHJpbmciLCJjb21iaW5hdG9yTWV0YVR5cGVUZXJtaW5hbE5vZGUiLCJjb250ZW50IiwiZ2V0Q29udGVudCIsImNvbnRlbnRTdGF0ZW1lbnRNZXRhVHlwZSIsIlNUQVRFTUVOVF9NRVRBX1RZUEUiLCJWZXJpZmllciIsInN0YXRlbWVudFZlcmlmaWVyIiwiY29tYmluYXRvcnMiLCJnZXRDb21iaW5hdG9ycyIsImJyYWNrZXRlZENvbWJpbmF0b3IiLCJjb21iaW5hdG9yIiwiZmluZCIsInN0YXRlbWVudFZlcmlmaWVkQWdhaW5zdENvbWJpbmF0b3IiLCJ2ZXJpZnlTdGF0ZW1lbnRBZ2FpbnN0Q29tYmluYXRvciIsImNvbWJpbmF0b3JTdGF0ZW1lbnROb2RlIiwiZ2V0U3RhdGVtZW50Tm9kZSIsIm5vZGVWZXJpZmllZCIsInR5cGVBc3NlcnRpb25Ob2RlIiwidHlwZUFzc2VydGlvblZlcmlmaWVkIiwidmVyaWZ5VHlwZUFzc2VydGlvbiIsImVxdWFsaXR5Q29tYmluYXRvciIsImVxdWFsaXR5IiwiRXF1YWxpdHkiLCJmcm9tU3RhdGVtZW50Tm9kZSIsImVxdWFsaXRpZXMiLCJnZXRFcXVhbGl0aWVzIiwiZXF1YWxpdHlWZXJpZmllZCIsInZlcmlmeSIsInZhcmlhYmxlcyIsImxlZnRUZXJtTm9kZSIsImdldExlZnRUZXJtTm9kZSIsInJpZ2h0VGVybU5vZGUiLCJnZXRSaWdodFRlcm1Ob2RlIiwibGVmdFRlcm1WZXJpZmllZEFzVmFyaWFibGUiLCJ2ZXJpZnlUZXJtQXNWYXJpYWJsZSIsInJpZ2h0VGVybVZlcmlmaWVkQXNWYXJpYWJsZSIsImZpcnN0VmFyaWFibGUiLCJzZWNvbmRWYXJpYWJsZSIsInNlY29uZCIsImxlZnRWYXJpYWJsZSIsInJpZ2h0VmFyaWFibGUiLCJsZWZ0VmFyaWFibGVOYW1lIiwiZ2V0TmFtZSIsImxlZnRWYXJpYWJsZVR5cGUiLCJnZXRUeXBlIiwicmlnaHRWYXJpYWJsZU5hbWUiLCJyaWdodFZhcmlhYmxlVHlwZSIsImxlZnRWYXJpYWJsZVR5cGVFcXVhbFRvT3JTdWJUeXBlT2ZPZlN1cGVyVHlwZU9mUmlnaHRWYXJpYWJsZVR5cGUiLCJpc0VxdWFsVG9PclN1YlR5cGVPZk9mU3VwZXJUeXBlT2YiLCJsZWZ0VmFyaWFibGVUeXBlTmFtZSIsInJpZ2h0VmFyaWFibGVUeXBlTmFtZSIsImxlZnRWYXJpYWJsZVR5cGVTdXBlclR5cGVPZlJpZ2h0VmFyaWFibGVUeXBlIiwiaXNTdXBlclR5cGVPZiIsInJpZ2h0VmFyaWFibGVUeXBlU3VwZXJUeXBlT2ZMZWZ0VmFyaWFibGVUeXBlIiwibmFtZSIsInZhcmlhYmxlIiwiVmFyaWFibGUiLCJmcm9tVHlwZUFuZE5hbWUiLCJhZGRWYXJpYWJsZSIsInJpZ2h0VGVybVR5cGUiLCJsZWZ0VmFyaWFibGVUeXBlRXF1YWxUb09yU3VwZXJUeXBlT2ZSaWdodFRlcm1UeXBlIiwiaXNFcXVhbFRvT3JTdXBlclR5cGVPZiIsInJpZ2h0VGVybVN0cmluZyIsInJpZ2h0VGVybVR5cGVOYW1lIiwibGVmdFRlcm1UeXBlIiwicmlnaHRWYXJpYWJsZVR5cGVFcXVhbFRvT3JTdXBlclR5cGVPZlJpZ2h0VGVybVR5cGUiLCJsZWZ0VGVybVN0cmluZyIsImxlZnRUZXJtVHlwZU5hbWUiLCJzZWNvbmRUeXBlIiwibGVmdFRlcm1UeXBlRXF1YWxUb09yU3ViVHlwZU9mT2ZTdXBlclR5cGVPZiIsInN0YXRlbWVudFN0cmluZyIsImluZm8iXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQXlCQTs7O2VBQXdCQTs7OzZEQXZCSDs2REFDQTs2REFDQTswREFDRTs4REFDUTs4REFDQzt5REFDQTtxQkFFTDtxQkFDRzt5QkFDRzt5QkFDRztxQkFFWTt5QkFDWTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFNUQsSUFBTUMsZ0JBQWdCQyxJQUFBQSxnQkFBUyxFQUFDLG9CQUMxQkMsZ0JBQWdCRCxJQUFBQSxnQkFBUyxFQUFDLG9CQUMxQkUsb0JBQW9CRixJQUFBQSxnQkFBUyxFQUFDLDRCQUM5QkcscUJBQXFCSCxJQUFBQSxnQkFBUyxFQUFDLDZCQUMvQkkseUJBQXlCSixJQUFBQSxnQkFBUyxFQUFDLDhCQUNuQ0ssNEJBQTRCTCxJQUFBQSxnQkFBUyxFQUFDO0FBRTdCLFNBQVNGLGdCQUFnQlEsYUFBYSxFQUFFQyxXQUFXLEVBQUVDLE9BQU8sRUFBRUMsT0FBTyxFQUFFO0lBQ3BGLElBQUlDLG9CQUFvQixLQUFLO0lBRTdCLElBQUksQ0FBQ0EsbUJBQW1CO1FBQ3RCLElBQU1DLHNDQUFzQ0Msa0NBQWtDTixlQUFlRztRQUU3RkMsb0JBQW9CQyxxQ0FBc0MsR0FBRztJQUMvRCxDQUFDO0lBRUQsSUFBSSxDQUFDRCxtQkFBbUI7UUFD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