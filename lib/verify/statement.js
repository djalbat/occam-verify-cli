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
    verifyStatementAgainstCombinators: function() {
        return verifyStatementAgainstCombinators;
    },
    verifyStatementAgainstCombinator: function() {
        return verifyStatementAgainstCombinator;
    }
});
var _verifier = /*#__PURE__*/ _interop_require_default(require("../verifier"));
var _equality = /*#__PURE__*/ _interop_require_default(require("../equality"));
var _term = /*#__PURE__*/ _interop_require_wildcard(require("../verify/term"));
var _equality1 = /*#__PURE__*/ _interop_require_default(require("../ocmbinator/equality"));
var _bracketed = /*#__PURE__*/ _interop_require_default(require("../ocmbinator/bracketed"));
var _typeInference = /*#__PURE__*/ _interop_require_default(require("../verify/typeInference"));
var _type = /*#__PURE__*/ _interop_require_default(require("../verify/assertion/type"));
var _type1 = require("../type");
var _array = require("../utilities/array");
var _typeNames = require("../typeNames");
var _metaTypes = require("../metaTypes");
var _query = require("../utilities/query");
var _ruleNames = require("../ruleNames");
function _array_like_to_array(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _array_without_holes(arr) {
    if (Array.isArray(arr)) return _array_like_to_array(arr);
}
function _assert_this_initialized(self) {
    if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
}
function _class_call_check(instance, Constructor) {
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
function _create_class(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
function _get_prototype_of(o) {
    _get_prototype_of = Object.setPrototypeOf ? Object.getPrototypeOf : function getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _get_prototype_of(o);
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
    if (superClass) _set_prototype_of(subClass, superClass);
}
function _interop_require_default(obj) {
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
function _interop_require_wildcard(obj, nodeInterop) {
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
function _iterable_to_array(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _non_iterable_spread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _possible_constructor_return(self, call) {
    if (call && (_type_of(call) === "object" || typeof call === "function")) {
        return call;
    }
    return _assert_this_initialized(self);
}
function _set_prototype_of(o, p) {
    _set_prototype_of = Object.setPrototypeOf || function setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return _set_prototype_of(o, p);
}
function _to_consumable_array(arr) {
    return _array_without_holes(arr) || _iterable_to_array(arr) || _unsupported_iterable_to_array(arr) || _non_iterable_spread();
}
function _type_of(obj) {
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
}
function _unsupported_iterable_to_array(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _array_like_to_array(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _array_like_to_array(o, minLen);
}
function _is_native_reflect_construct() {
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
function _create_super(Derived) {
    var hasNativeReflectConstruct = _is_native_reflect_construct();
    return function _createSuperInternal() {
        var Super = _get_prototype_of(Derived), result;
        if (hasNativeReflectConstruct) {
            var NewTarget = _get_prototype_of(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
        } else {
            result = Super.apply(this, arguments);
        }
        return _possible_constructor_return(this, result);
    };
}
var termNodeQuery = (0, _query.nodeQuery)("/argument/term!"), typeNodeQuery = (0, _query.nodeQuery)("/argument/type!"), metaTypeNodeQuery = (0, _query.nodeQuery)("/metaArgument/metaType!"), statementNodeQuery = (0, _query.nodeQuery)("/metaArgument/statement!"), typeInferenceNodeQuery = (0, _query.nodeQuery)("/statement/typeInference!"), typeAssertionNodeQuery = (0, _query.nodeQuery)("/statement/typeAssertion!"), metaTypeTerminalNodeQuery = (0, _query.nodeQuery)("/metaType/@meta-type");
function verifyStatement(statementNode, assignments, derived, context) {
    var statementVerified = false;
    if (!statementVerified) {
        var statementVerifiedAgainstCombinators = verifyStatementAgainstCombinators(statementNode, context);
        statementVerified = statementVerifiedAgainstCombinators; ///
    }
    if (!statementVerified) {
        var statementVerifiedAsTypeInference = verifyStatementAsTypeInference(statementNode, derived, context);
        statementVerified = statementVerifiedAsTypeInference; ///
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
    var _super = _create_super(StatementVerifier);
    function StatementVerifier() {
        _class_call_check(this, StatementVerifier);
        return _super.apply(this, arguments);
    }
    _create_class(StatementVerifier, [
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
    ].concat(_to_consumable_array(combinators));
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
function verifyStatementAsTypeInference(statementNode, derived, context) {
    var statementVerifiedAsTypeInference = false;
    var typeInferenceNode = typeInferenceNodeQuery(statementNode);
    if (typeInferenceNode !== null) {
        if (!derived) {
            var typeInferenceString = context.nodeAsString(typeInferenceNode);
            context.error("The '".concat(typeInferenceString, "' type inference can only be derived."), typeInferenceNode);
        } else {
            var typeInferenceVerified = (0, _typeInference.default)(typeInferenceNode, context);
            statementVerifiedAsTypeInference = typeInferenceVerified; ///
        }
    }
    return statementVerifiedAsTypeInference;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92ZXJpZnkvc3RhdGVtZW50LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgVmVyaWZpZXIgZnJvbSBcIi4uL3ZlcmlmaWVyXCI7XG5pbXBvcnQgRXF1YWxpdHkgZnJvbSBcIi4uL2VxdWFsaXR5XCI7XG5pbXBvcnQgdmVyaWZ5VGVybSBmcm9tIFwiLi4vdmVyaWZ5L3Rlcm1cIjtcbmltcG9ydCBlcXVhbGl0eUNvbWJpbmF0b3IgZnJvbSBcIi4uL29jbWJpbmF0b3IvZXF1YWxpdHlcIjtcbmltcG9ydCBicmFja2V0ZWRDb21iaW5hdG9yIGZyb20gXCIuLi9vY21iaW5hdG9yL2JyYWNrZXRlZFwiO1xuaW1wb3J0IHZlcmlmeVR5cGVJbmZlcmVuY2UgZnJvbSBcIi4uL3ZlcmlmeS90eXBlSW5mZXJlbmNlXCI7XG5pbXBvcnQgdmVyaWZ5VHlwZUFzc2VydGlvbiBmcm9tIFwiLi4vdmVyaWZ5L2Fzc2VydGlvbi90eXBlXCI7XG5cbmltcG9ydCB7IG9iamVjdFR5cGUgfSBmcm9tIFwiLi4vdHlwZVwiO1xuaW1wb3J0IHsgZmlyc3QsIHNlY29uZCB9IGZyb20gXCIuLi91dGlsaXRpZXMvYXJyYXlcIjtcbmltcG9ydCB7IE9CSkVDVF9UWVBFX05BTUUgfSBmcm9tIFwiLi4vdHlwZU5hbWVzXCI7XG5pbXBvcnQgeyBTVEFURU1FTlRfTUVUQV9UWVBFIH0gZnJvbSBcIi4uL21ldGFUeXBlc1wiO1xuaW1wb3J0IHsgdmVyaWZ5VGVybUFzVmFyaWFibGUgfSBmcm9tIFwiLi4vdmVyaWZ5L3Rlcm1cIjtcbmltcG9ydCB7IG5vZGVRdWVyeSwgdHlwZU5hbWVGcm9tVHlwZU5vZGUgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5pbXBvcnQgeyBBUkdVTUVOVF9SVUxFX05BTUUsIE1FVEFfQVJHVU1FTlRfUlVMRV9OQU1FIH0gZnJvbSBcIi4uL3J1bGVOYW1lc1wiO1xuXG5jb25zdCB0ZXJtTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL2FyZ3VtZW50L3Rlcm0hXCIpLFxuICAgICAgdHlwZU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9hcmd1bWVudC90eXBlIVwiKSxcbiAgICAgIG1ldGFUeXBlTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL21ldGFBcmd1bWVudC9tZXRhVHlwZSFcIiksXG4gICAgICBzdGF0ZW1lbnROb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvbWV0YUFyZ3VtZW50L3N0YXRlbWVudCFcIiksXG4gICAgICB0eXBlSW5mZXJlbmNlTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3N0YXRlbWVudC90eXBlSW5mZXJlbmNlIVwiKSxcbiAgICAgIHR5cGVBc3NlcnRpb25Ob2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvc3RhdGVtZW50L3R5cGVBc3NlcnRpb24hXCIpLFxuICAgICAgbWV0YVR5cGVUZXJtaW5hbE5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9tZXRhVHlwZS9AbWV0YS10eXBlXCIpO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB2ZXJpZnlTdGF0ZW1lbnQoc3RhdGVtZW50Tm9kZSwgYXNzaWdubWVudHMsIGRlcml2ZWQsIGNvbnRleHQpIHtcbiAgbGV0IHN0YXRlbWVudFZlcmlmaWVkID0gZmFsc2U7XG5cbiAgaWYgKCFzdGF0ZW1lbnRWZXJpZmllZCkge1xuICAgIGNvbnN0IHN0YXRlbWVudFZlcmlmaWVkQWdhaW5zdENvbWJpbmF0b3JzID0gdmVyaWZ5U3RhdGVtZW50QWdhaW5zdENvbWJpbmF0b3JzKHN0YXRlbWVudE5vZGUsIGNvbnRleHQpO1xuXG4gICAgc3RhdGVtZW50VmVyaWZpZWQgPSBzdGF0ZW1lbnRWZXJpZmllZEFnYWluc3RDb21iaW5hdG9yczsgIC8vL1xuICB9XG5cbiAgaWYgKCFzdGF0ZW1lbnRWZXJpZmllZCkge1xuICAgIGNvbnN0IHN0YXRlbWVudFZlcmlmaWVkQXNUeXBlSW5mZXJlbmNlID0gdmVyaWZ5U3RhdGVtZW50QXNUeXBlSW5mZXJlbmNlKHN0YXRlbWVudE5vZGUsIGRlcml2ZWQsIGNvbnRleHQpO1xuXG4gICAgc3RhdGVtZW50VmVyaWZpZWQgPSBzdGF0ZW1lbnRWZXJpZmllZEFzVHlwZUluZmVyZW5jZTsgLy8vXG4gIH1cblxuICBpZiAoIXN0YXRlbWVudFZlcmlmaWVkKSB7XG4gICAgY29uc3Qgc3RhdGVtZW50VmVyaWZpZWRBc1R5cGVBc3NlcnRpb24gPSB2ZXJpZnlTdGF0ZW1lbnRBc1R5cGVBc3NlcnRpb24oc3RhdGVtZW50Tm9kZSwgYXNzaWdubWVudHMsIGRlcml2ZWQsIGNvbnRleHQpO1xuXG4gICAgc3RhdGVtZW50VmVyaWZpZWQgPSBzdGF0ZW1lbnRWZXJpZmllZEFzVHlwZUFzc2VydGlvbjsgLy8vXG4gIH1cblxuICBpZiAoIXN0YXRlbWVudFZlcmlmaWVkKSB7XG4gICAgY29uc3Qgc3RhdGVtZW50VmVyaWZpZWRBc0VxdWFsaXR5ID0gdmVyaWZ5U3RhdGVtZW50QXNFcXVhbGl0eShzdGF0ZW1lbnROb2RlLCBkZXJpdmVkLCBjb250ZXh0KTtcblxuICAgIHN0YXRlbWVudFZlcmlmaWVkID0gc3RhdGVtZW50VmVyaWZpZWRBc0VxdWFsaXR5OyAgLy9cbiAgfVxuXG4gIHJldHVybiBzdGF0ZW1lbnRWZXJpZmllZDtcbn1cblxuY2xhc3MgU3RhdGVtZW50VmVyaWZpZXIgZXh0ZW5kcyBWZXJpZmllciB7XG4gIHZlcmlmeU5vblRlcm1pbmFsTm9kZShub25UZXJtaW5hbE5vZGVBLCBub25UZXJtaW5hbE5vZGVCLCBjb250ZXh0KSB7XG4gICAgbGV0IG5vblRlcm1pbmFsTm9kZVZlcmlmaWVkID0gZmFsc2U7XG5cbiAgICBjb25zdCBub25UZXJtaW5hbE5vZGUgPSBub25UZXJtaW5hbE5vZGVBLCAvLy9cbiAgICAgICAgICBjb21iaW5hdG9yTm9uVGVybWluYWxOb2RlID0gbm9uVGVybWluYWxOb2RlQjsgLy8vXG5cbiAgICBjb25zdCBydWxlTmFtZSA9IG5vblRlcm1pbmFsTm9kZS5nZXRSdWxlTmFtZSgpLCAvLy9cbiAgICAgIGNvbWJpbmF0b3JSdWxlTmFtZSA9IGNvbWJpbmF0b3JOb25UZXJtaW5hbE5vZGUuZ2V0UnVsZU5hbWUoKTsgLy8vXG5cbiAgICBpZiAocnVsZU5hbWUgPT09IGNvbWJpbmF0b3JSdWxlTmFtZSkge1xuICAgICAgc3dpdGNoIChydWxlTmFtZSkge1xuICAgICAgICBjYXNlIEFSR1VNRU5UX1JVTEVfTkFNRToge1xuICAgICAgICAgIGNvbnN0IGFyZ3VtZW50Tm9kZSA9IG5vblRlcm1pbmFsTm9kZSwgLy8vXG4gICAgICAgICAgICAgICAgY29tYmluYXRvckFyZ3VtZW50Tm9kZSA9IGNvbWJpbmF0b3JOb25UZXJtaW5hbE5vZGUsIC8vL1xuICAgICAgICAgICAgICAgIGFyZ3VtZW50Tm9kZVZlcmlmaWVkID0gdGhpcy52ZXJpZnlBcmd1bWVudE5vZGUoYXJndW1lbnROb2RlLCBjb21iaW5hdG9yQXJndW1lbnROb2RlLCBjb250ZXh0KTtcblxuICAgICAgICAgIG5vblRlcm1pbmFsTm9kZVZlcmlmaWVkID0gYXJndW1lbnROb2RlVmVyaWZpZWQ7IC8vL1xuXG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cblxuICAgICAgICBjYXNlIE1FVEFfQVJHVU1FTlRfUlVMRV9OQU1FOiB7XG4gICAgICAgICAgY29uc3QgbWV0YUFyZ3VtZW50Tm9kZSA9IG5vblRlcm1pbmFsTm9kZSwgLy8vXG4gICAgICAgICAgICAgICAgY29tYmluYXRvck1ldGFhcmd1bWVudE5vZGUgPSBjb21iaW5hdG9yTm9uVGVybWluYWxOb2RlLCAvLy9cbiAgICAgICAgICAgICAgICBtZXRhQXJndW1lbnROb2RlVmVyaWZpZWQgPSB0aGlzLnZlcmlmeU1ldGFhcmd1bWVudE5vZGUobWV0YUFyZ3VtZW50Tm9kZSwgY29tYmluYXRvck1ldGFhcmd1bWVudE5vZGUsIGNvbnRleHQpO1xuXG4gICAgICAgICAgbm9uVGVybWluYWxOb2RlVmVyaWZpZWQgPSBtZXRhQXJndW1lbnROb2RlVmVyaWZpZWQ7IC8vL1xuXG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cblxuICAgICAgICBkZWZhdWx0OiB7XG4gICAgICAgICAgY29uc3QgY2hpbGROb2RlcyA9IG5vblRlcm1pbmFsTm9kZS5nZXRDaGlsZE5vZGVzKCksXG4gICAgICAgICAgICAgICAgY29tYmluYXRvckNoaWxkTm9kZXMgPSBjb21iaW5hdG9yTm9uVGVybWluYWxOb2RlLmdldENoaWxkTm9kZXMoKSxcbiAgICAgICAgICAgICAgICBub2Rlc0EgPSBjaGlsZE5vZGVzLCAvLy9cbiAgICAgICAgICAgICAgICBub2Rlc0IgPSBjb21iaW5hdG9yQ2hpbGROb2RlcywgLy8vXG4gICAgICAgICAgICAgICAgbm9kZXNWZXJpZmllZCA9IHRoaXMudmVyaWZ5Tm9kZXMobm9kZXNBLCBub2Rlc0IsIGNvbnRleHQpO1xuXG4gICAgICAgICAgbm9uVGVybWluYWxOb2RlVmVyaWZpZWQgPSBub2Rlc1ZlcmlmaWVkOyAvLy9cblxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG5vblRlcm1pbmFsTm9kZVZlcmlmaWVkO1xuICB9XG5cbiAgdmVyaWZ5QXJndW1lbnROb2RlKGFyZ3VtZW50Tm9kZSwgY29tYmluYXRvckFyZ3VtZW50Tm9kZSwgY29udGV4dCkge1xuICAgIGxldCBhcmd1bWVudE5vZGVWZXJpZmllZCA9IGZhbHNlO1xuXG4gICAgY29uc3QgdGVybU5vZGUgPSB0ZXJtTm9kZVF1ZXJ5KGFyZ3VtZW50Tm9kZSk7XG5cbiAgICBpZiAodGVybU5vZGUgPT09IG51bGwpIHtcbiAgICAgIGNvbnN0IGFyZ3VtZW50U3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcoYXJndW1lbnROb2RlKTtcblxuICAgICAgY29udGV4dC5lcnJvcihgVGhlICR7YXJndW1lbnRTdHJpbmd9IGFyZ3VtZW50IHNob3VsZCBiZSBhIHRlcm0sIG5vdCBhIHR5cGVgLCBhcmd1bWVudE5vZGUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCB0eXBlcyA9IFtdLFxuICAgICAgICAgICAgdGVybVZlcmlmaWVkID0gdmVyaWZ5VGVybSh0ZXJtTm9kZSwgdHlwZXMsIGNvbnRleHQpO1xuXG4gICAgICBpZiAodGVybVZlcmlmaWVkKSB7XG4gICAgICAgIGNvbnN0IGZpcnN0VHlwZSA9IGZpcnN0KHR5cGVzKSxcbiAgICAgICAgICAgICAgdGVybVR5cGUgPSBmaXJzdFR5cGUsIC8vL1xuICAgICAgICAgICAgICB0eXBlTm9kZSA9IHR5cGVOb2RlUXVlcnkoY29tYmluYXRvckFyZ3VtZW50Tm9kZSksXG4gICAgICAgICAgICAgIHR5cGVOYW1lID0gdHlwZU5hbWVGcm9tVHlwZU5vZGUodHlwZU5vZGUpLFxuICAgICAgICAgICAgICB0eXBlID0gKHR5cGVOYW1lID09PSBPQkpFQ1RfVFlQRV9OQU1FKSA/XG4gICAgICAgICAgICAgICAgICAgICAgIG9iamVjdFR5cGUgOiAgLy8vXG4gICAgICAgICAgICAgICAgICAgICAgICAgY29udGV4dC5maW5kVHlwZUJ5VHlwZU5hbWUodHlwZU5hbWUpLFxuICAgICAgICAgICAgICBzdGF0ZW1lbnRUeXBlRXF1YWxUb09yU3ViVHlwZU9mVHlwZSA9IHRlcm1UeXBlLmlzRXF1YWxUb09yU3ViVHlwZU9mKHR5cGUpO1xuXG4gICAgICAgIGlmIChzdGF0ZW1lbnRUeXBlRXF1YWxUb09yU3ViVHlwZU9mVHlwZSkge1xuICAgICAgICAgIGFyZ3VtZW50Tm9kZVZlcmlmaWVkID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBhcmd1bWVudE5vZGVWZXJpZmllZDtcbiAgfVxuXG4gIHZlcmlmeU1ldGFhcmd1bWVudE5vZGUobWV0YUFyZ3VtZW50Tm9kZSwgY29tYmluYXRvck1ldGFhcmd1bWVudE5vZGUsIGNvbnRleHQpIHtcbiAgICBsZXQgbWV0YUFyZ3VtZW50Tm9kZVZlcmlmaWVkID0gZmFsc2U7XG5cbiAgICBjb25zdCBzdGF0ZW1lbnROb2RlID0gc3RhdGVtZW50Tm9kZVF1ZXJ5KG1ldGFBcmd1bWVudE5vZGUpLFxuICAgICAgICAgIGNvbWJpbmF0b3JNZXRhVFlwZU5vZGUgPSBtZXRhVHlwZU5vZGVRdWVyeShjb21iaW5hdG9yTWV0YWFyZ3VtZW50Tm9kZSk7XG5cbiAgICBpZiAoc3RhdGVtZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgICAgY29uc3QgbWV0YUFyZ3VtZW50U3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobWV0YUFyZ3VtZW50Tm9kZSk7XG5cbiAgICAgIGNvbnRleHQuZXJyb3IoYEV4cGVjdGVkIGEgc3RhdGVtZW50IGJ1dCBnb3QgYSAnJHttZXRhQXJndW1lbnRTdHJpbmd9JyBtZXRhLXR5cGUuYCwgbWV0YUFyZ3VtZW50Tm9kZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChjb21iaW5hdG9yTWV0YVRZcGVOb2RlID09PSBudWxsKSB7XG4gICAgICAgIGNvbnN0IGNvbWJpbmF0b3JNZXRhYXJndW1lbnRTdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhjb21iaW5hdG9yTWV0YWFyZ3VtZW50Tm9kZSk7XG5cbiAgICAgICAgY29udGV4dC5lcnJvcihgRXhwZWN0ZWQgYSBtZXRhLXR5cGUgYnV0IGdvdCBhICcke2NvbWJpbmF0b3JNZXRhYXJndW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQuYCwgbWV0YUFyZ3VtZW50Tm9kZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCBjb21iaW5hdG9yTWV0YVR5cGVUZXJtaW5hbE5vZGUgPSBtZXRhVHlwZVRlcm1pbmFsTm9kZVF1ZXJ5KGNvbWJpbmF0b3JNZXRhVFlwZU5vZGUpLFxuICAgICAgICAgICAgICBjb250ZW50ID0gY29tYmluYXRvck1ldGFUeXBlVGVybWluYWxOb2RlLmdldENvbnRlbnQoKSxcbiAgICAgICAgICAgICAgY29udGVudFN0YXRlbWVudE1ldGFUeXBlID0gKGNvbnRlbnQgPT09IFNUQVRFTUVOVF9NRVRBX1RZUEUpO1xuXG4gICAgICAgIGlmICghY29udGVudFN0YXRlbWVudE1ldGFUeXBlKSB7XG4gICAgICAgICAgY29udGV4dC5lcnJvcihgRXhwZWN0ZWQgdGhlIG1ldGEtdHlwZSB0byBiZSAnU3RhdGVtZW50JyBidXQgZ290ICcke2NvbnRlbnR9Jy5gLCBtZXRhQXJndW1lbnROb2RlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBtZXRhQXJndW1lbnROb2RlVmVyaWZpZWQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG1ldGFBcmd1bWVudE5vZGVWZXJpZmllZDtcbiAgfVxufVxuXG5jb25zdCBzdGF0ZW1lbnRWZXJpZmllciA9IG5ldyBTdGF0ZW1lbnRWZXJpZmllcigpO1xuXG5leHBvcnQgZnVuY3Rpb24gdmVyaWZ5U3RhdGVtZW50QWdhaW5zdENvbWJpbmF0b3JzKHN0YXRlbWVudE5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IHN0YXRlbWVudFZlcmlmaWVkQWdhaW5zdENvbWJpbmF0b3JzID0gZmFsc2U7XG5cbiAgbGV0IGNvbWJpbmF0b3JzID0gY29udGV4dC5nZXRDb21iaW5hdG9ycygpO1xuXG4gIGNvbWJpbmF0b3JzID0gWyAvLy9cbiAgICBicmFja2V0ZWRDb21iaW5hdG9yLFxuICAgIC4uLmNvbWJpbmF0b3JzXG4gIF07XG5cbiAgY29uc3QgY29tYmluYXRvciA9IGNvbWJpbmF0b3JzLmZpbmQoKGNvbWJpbmF0b3IpID0+IHtcbiAgICBjb25zdCBzdGF0ZW1lbnRWZXJpZmllZEFnYWluc3RDb21iaW5hdG9yID0gdmVyaWZ5U3RhdGVtZW50QWdhaW5zdENvbWJpbmF0b3Ioc3RhdGVtZW50Tm9kZSwgY29tYmluYXRvciwgY29udGV4dCk7XG5cbiAgICBpZiAoc3RhdGVtZW50VmVyaWZpZWRBZ2FpbnN0Q29tYmluYXRvcikge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9KSB8fCBudWxsO1xuXG4gIGlmIChjb21iaW5hdG9yICE9PSBudWxsKSB7XG4gICAgc3RhdGVtZW50VmVyaWZpZWRBZ2FpbnN0Q29tYmluYXRvcnMgPSB0cnVlO1xuICB9XG5cbiAgcmV0dXJuIHN0YXRlbWVudFZlcmlmaWVkQWdhaW5zdENvbWJpbmF0b3JzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdmVyaWZ5U3RhdGVtZW50QWdhaW5zdENvbWJpbmF0b3Ioc3RhdGVtZW50Tm9kZSwgY29tYmluYXRvciwgY29udGV4dCkge1xuICBjb25zdCBjb21iaW5hdG9yU3RhdGVtZW50Tm9kZSA9IGNvbWJpbmF0b3IuZ2V0U3RhdGVtZW50Tm9kZSgpLFxuICAgICAgICBub25UZXJtaW5hbE5vZGVBID0gc3RhdGVtZW50Tm9kZSwgIC8vL1xuICAgICAgICBub25UZXJtaW5hbE5vZGVCID0gY29tYmluYXRvclN0YXRlbWVudE5vZGUsIC8vL1xuICAgICAgICBub25UZXJtaW5hbE5vZGVWZXJpZmllZCA9IHN0YXRlbWVudFZlcmlmaWVyLnZlcmlmeU5vblRlcm1pbmFsTm9kZShub25UZXJtaW5hbE5vZGVBLCBub25UZXJtaW5hbE5vZGVCLCBjb250ZXh0KSxcbiAgICAgICAgc3RhdGVtZW50VmVyaWZpZWRBZ2FpbnN0Q29tYmluYXRvciA9IG5vblRlcm1pbmFsTm9kZVZlcmlmaWVkOyAgLy8vXG5cbiAgcmV0dXJuIHN0YXRlbWVudFZlcmlmaWVkQWdhaW5zdENvbWJpbmF0b3I7XG59XG5cbmZ1bmN0aW9uIHZlcmlmeVN0YXRlbWVudEFzVHlwZUluZmVyZW5jZShzdGF0ZW1lbnROb2RlLCBkZXJpdmVkLCBjb250ZXh0KSB7XG4gIGxldCBzdGF0ZW1lbnRWZXJpZmllZEFzVHlwZUluZmVyZW5jZSA9IGZhbHNlO1xuXG4gIGNvbnN0IHR5cGVJbmZlcmVuY2VOb2RlID0gdHlwZUluZmVyZW5jZU5vZGVRdWVyeShzdGF0ZW1lbnROb2RlKTtcblxuICBpZiAodHlwZUluZmVyZW5jZU5vZGUgIT09IG51bGwpIHtcbiAgICBpZiAoIWRlcml2ZWQpIHtcbiAgICAgIGNvbnN0IHR5cGVJbmZlcmVuY2VTdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyh0eXBlSW5mZXJlbmNlTm9kZSk7XG5cbiAgICAgIGNvbnRleHQuZXJyb3IoYFRoZSAnJHt0eXBlSW5mZXJlbmNlU3RyaW5nfScgdHlwZSBpbmZlcmVuY2UgY2FuIG9ubHkgYmUgZGVyaXZlZC5gLCB0eXBlSW5mZXJlbmNlTm9kZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHR5cGVJbmZlcmVuY2VWZXJpZmllZCA9IHZlcmlmeVR5cGVJbmZlcmVuY2UodHlwZUluZmVyZW5jZU5vZGUsIGNvbnRleHQpO1xuXG4gICAgICBzdGF0ZW1lbnRWZXJpZmllZEFzVHlwZUluZmVyZW5jZSA9IHR5cGVJbmZlcmVuY2VWZXJpZmllZDsgLy8vXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHN0YXRlbWVudFZlcmlmaWVkQXNUeXBlSW5mZXJlbmNlO1xufVxuXG5mdW5jdGlvbiB2ZXJpZnlTdGF0ZW1lbnRBc1R5cGVBc3NlcnRpb24oc3RhdGVtZW50Tm9kZSwgYXNzaWdubWVudHMsIGRlcml2ZWQsIGNvbnRleHQpIHtcbiAgbGV0IHN0YXRlbWVudFZlcmlmaWVkQXNUeXBlQXNzZXJ0aW9uID0gZmFsc2U7XG5cbiAgY29uc3QgdHlwZUFzc2VydGlvbk5vZGUgPSB0eXBlQXNzZXJ0aW9uTm9kZVF1ZXJ5KHN0YXRlbWVudE5vZGUpO1xuXG4gIGlmICh0eXBlQXNzZXJ0aW9uTm9kZSAhPT0gbnVsbCkge1xuICAgIGNvbnN0IHR5cGVBc3NlcnRpb25WZXJpZmllZCA9IHZlcmlmeVR5cGVBc3NlcnRpb24odHlwZUFzc2VydGlvbk5vZGUsIGFzc2lnbm1lbnRzLCBkZXJpdmVkLCBjb250ZXh0KTtcblxuICAgIHN0YXRlbWVudFZlcmlmaWVkQXNUeXBlQXNzZXJ0aW9uID0gdHlwZUFzc2VydGlvblZlcmlmaWVkOyAvLy9cbiAgfVxuXG4gIHJldHVybiBzdGF0ZW1lbnRWZXJpZmllZEFzVHlwZUFzc2VydGlvbjtcbn1cblxuZnVuY3Rpb24gdmVyaWZ5U3RhdGVtZW50QXNFcXVhbGl0eShzdGF0ZW1lbnROb2RlLCBkZXJpdmVkLCBjb250ZXh0KSB7XG4gIGxldCBzdGF0ZW1lbnRWZXJpZmllZEFzRXF1YWxpdHkgPSBmYWxzZTtcblxuICBjb25zdCBjb21iaW5hdG9yID0gZXF1YWxpdHlDb21iaW5hdG9yLCAgLy8vXG4gICAgICAgIHN0YXRlbWVudFZlcmlmaWVkQWdhaW5zdENvbWJpbmF0b3IgPSB2ZXJpZnlTdGF0ZW1lbnRBZ2FpbnN0Q29tYmluYXRvcihzdGF0ZW1lbnROb2RlLCBjb21iaW5hdG9yLCBjb250ZXh0KTtcblxuICBpZiAoc3RhdGVtZW50VmVyaWZpZWRBZ2FpbnN0Q29tYmluYXRvcikge1xuICAgIGNvbnN0IGVxdWFsaXR5ID0gRXF1YWxpdHkuZnJvbVN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSk7XG5cbiAgICBpZiAoZGVyaXZlZCkge1xuICAgICAgY29uc3QgZXF1YWxpdGllcyA9IGNvbnRleHQuZ2V0RXF1YWxpdGllcygpLFxuICAgICAgICAgICAgZXF1YWxpdHlWZXJpZmllZCA9IGVxdWFsaXR5LnZlcmlmeShlcXVhbGl0aWVzLCBjb250ZXh0KTtcblxuICAgICAgc3RhdGVtZW50VmVyaWZpZWRBc0VxdWFsaXR5ID0gZXF1YWxpdHlWZXJpZmllZDsgIC8vL1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCB2YXJpYWJsZXMgPSBbXSxcbiAgICAgICAgICAgIGxlZnRUZXJtTm9kZSA9IGVxdWFsaXR5LmdldExlZnRUZXJtTm9kZSgpLFxuICAgICAgICAgICAgcmlnaHRUZXJtTm9kZSA9IGVxdWFsaXR5LmdldFJpZ2h0VGVybU5vZGUoKSxcbiAgICAgICAgICAgIGxlZnRUZXJtVmVyaWZpZWRBc1ZhcmlhYmxlID0gdmVyaWZ5VGVybUFzVmFyaWFibGUobGVmdFRlcm1Ob2RlLCB2YXJpYWJsZXMsIGNvbnRleHQpLFxuICAgICAgICAgICAgcmlnaHRUZXJtVmVyaWZpZWRBc1ZhcmlhYmxlID0gdmVyaWZ5VGVybUFzVmFyaWFibGUocmlnaHRUZXJtTm9kZSwgdmFyaWFibGVzLCBjb250ZXh0KTtcblxuICAgICAgaWYgKGxlZnRUZXJtVmVyaWZpZWRBc1ZhcmlhYmxlICYmIHJpZ2h0VGVybVZlcmlmaWVkQXNWYXJpYWJsZSkge1xuICAgICAgICBjb25zdCBmaXJzdFZhcmlhYmxlID0gZmlyc3QodmFyaWFibGVzKSxcbiAgICAgICAgICAgICAgc2Vjb25kVmFyaWFibGUgPSBzZWNvbmQodmFyaWFibGVzKSxcbiAgICAgICAgICAgICAgbGVmdFZhcmlhYmxlID0gZmlyc3RWYXJpYWJsZSwgLy8vXG4gICAgICAgICAgICAgIHJpZ2h0VmFyaWFibGUgPSBzZWNvbmRWYXJpYWJsZSwgLy8vXG4gICAgICAgICAgICAgIGxlZnRWYXJpYWJsZU5hbWUgPSBsZWZ0VmFyaWFibGUuZ2V0TmFtZSgpLFxuICAgICAgICAgICAgICBsZWZ0VmFyaWFibGVUeXBlID0gbGVmdFZhcmlhYmxlLmdldFR5cGUoKSxcbiAgICAgICAgICAgICAgcmlnaHRWYXJpYWJsZU5hbWUgPSByaWdodFZhcmlhYmxlLmdldE5hbWUoKSxcbiAgICAgICAgICAgICAgcmlnaHRWYXJpYWJsZVR5cGUgPSByaWdodFZhcmlhYmxlLmdldFR5cGUoKSxcbiAgICAgICAgICAgICAgbGVmdFZhcmlhYmxlVHlwZUVxdWFsVG9PclN1YlR5cGVPZk9mU3VwZXJUeXBlT2ZSaWdodFZhcmlhYmxlVHlwZSA9IGxlZnRWYXJpYWJsZVR5cGUuaXNFcXVhbFRvT3JTdWJUeXBlT2ZPZlN1cGVyVHlwZU9mKHJpZ2h0VmFyaWFibGVUeXBlKTtcblxuICAgICAgICBpZiAoIWxlZnRWYXJpYWJsZVR5cGVFcXVhbFRvT3JTdWJUeXBlT2ZPZlN1cGVyVHlwZU9mUmlnaHRWYXJpYWJsZVR5cGUpIHtcbiAgICAgICAgICBjb25zdCBsZWZ0VmFyaWFibGVUeXBlTmFtZSA9IGxlZnRWYXJpYWJsZVR5cGUuZ2V0TmFtZSgpLFxuICAgICAgICAgICAgICAgIHJpZ2h0VmFyaWFibGVUeXBlTmFtZSA9IHJpZ2h0VmFyaWFibGVUeXBlLmdldE5hbWUoKTtcblxuICAgICAgICAgIGNvbnRleHQuZXJyb3IoYFRoZSBsZWZ0ICcke2xlZnRWYXJpYWJsZU5hbWV9JyB2YXJpYWJsZSdzICcke2xlZnRWYXJpYWJsZVR5cGVOYW1lfScgdHlwZSBpcyBub3QgZXF1YWwgdG8sIGEgc3ViLXR5cGUgb2Ygb3IgYSBzdXBlci10eXBlIG9mIHRoZSByaWdodCAnJHtyaWdodFZhcmlhYmxlTmFtZX0nIHZhcmlhYmxlJ3MgJyR7cmlnaHRWYXJpYWJsZVR5cGVOYW1lfScgdHlwZS5gLCBzdGF0ZW1lbnROb2RlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBzdGF0ZW1lbnRWZXJpZmllZEFzRXF1YWxpdHkgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKGxlZnRUZXJtVmVyaWZpZWRBc1ZhcmlhYmxlKSB7XG4gICAgICAgIGNvbnN0IHR5cGVzID0gW107XG5cbiAgICAgICAgdmVyaWZ5VGVybShyaWdodFRlcm1Ob2RlLCB0eXBlcywgY29udGV4dCk7XG5cbiAgICAgICAgY29uc3QgZmlyc3RUeXBlID0gZmlyc3QodHlwZXMpLFxuICAgICAgICAgICAgICBmaXJzdFZhcmlhYmxlID0gZmlyc3QodmFyaWFibGVzKSxcbiAgICAgICAgICAgICAgbGVmdFZhcmlhYmxlID0gZmlyc3RWYXJpYWJsZSwgLy8vXG4gICAgICAgICAgICAgIHJpZ2h0VGVybVR5cGUgPSBmaXJzdFR5cGUsICAvLy9cbiAgICAgICAgICAgICAgbGVmdFZhcmlhYmxlTmFtZSA9IGxlZnRWYXJpYWJsZS5nZXROYW1lKCksXG4gICAgICAgICAgICAgIGxlZnRWYXJpYWJsZVR5cGUgPSBsZWZ0VmFyaWFibGUuZ2V0VHlwZSgpLFxuICAgICAgICAgICAgICBsZWZ0VmFyaWFibGVUeXBlRXF1YWxUb09yU3VwZXJUeXBlT2ZSaWdodFRlcm1UeXBlID0gbGVmdFZhcmlhYmxlVHlwZS5pc0VxdWFsVG9PclN1cGVyVHlwZU9mKHJpZ2h0VGVybVR5cGUpO1xuXG4gICAgICAgIGlmICghbGVmdFZhcmlhYmxlVHlwZUVxdWFsVG9PclN1cGVyVHlwZU9mUmlnaHRUZXJtVHlwZSkge1xuICAgICAgICAgIGNvbnN0IHJpZ2h0VGVybVN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKHJpZ2h0VGVybU5vZGUpLFxuICAgICAgICAgICAgICAgIHJpZ2h0VGVybVR5cGVOYW1lID0gcmlnaHRUZXJtVHlwZS5nZXROYW1lKCksXG4gICAgICAgICAgICAgICAgbGVmdFZhcmlhYmxlVHlwZU5hbWUgPSBsZWZ0VmFyaWFibGVUeXBlLmdldE5hbWUoKTtcblxuICAgICAgICAgIGNvbnRleHQuZXJyb3IoYFRoZSBsZWZ0ICcke2xlZnRWYXJpYWJsZU5hbWV9JyB2YXJpYWJsZSdzICcke2xlZnRWYXJpYWJsZVR5cGVOYW1lfScgdHlwZSBpcyBub3QgZXF1YWwgdG8gb3IgYSBzdXBlci10eXBlIG9mIHRoZSByaWdodCAnJHtyaWdodFRlcm1TdHJpbmd9JyB0ZXJtJ3MgJyR7cmlnaHRUZXJtVHlwZU5hbWV9JyB0eXBlLmAsIHN0YXRlbWVudE5vZGUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHN0YXRlbWVudFZlcmlmaWVkQXNFcXVhbGl0eSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAocmlnaHRUZXJtVmVyaWZpZWRBc1ZhcmlhYmxlKSB7XG4gICAgICAgIGNvbnN0IHR5cGVzID0gW107XG5cbiAgICAgICAgdmVyaWZ5VGVybShsZWZ0VGVybU5vZGUsIHR5cGVzLCBjb250ZXh0KTtcblxuICAgICAgICBjb25zdCBmaXJzdFR5cGUgPSBmaXJzdCh0eXBlcyksXG4gICAgICAgICAgICAgIGZpcnN0VmFyaWFibGUgPSBmaXJzdCh2YXJpYWJsZXMpLFxuICAgICAgICAgICAgICBsZWZ0VGVybVR5cGUgPSBmaXJzdFR5cGUsICAvLy9cbiAgICAgICAgICAgICAgcmlnaHRWYXJpYWJsZSA9IGZpcnN0VmFyaWFibGUsIC8vL1xuICAgICAgICAgICAgICByaWdodFZhcmlhYmxlTmFtZSA9IHJpZ2h0VmFyaWFibGUuZ2V0TmFtZSgpLFxuICAgICAgICAgICAgICByaWdodFZhcmlhYmxlVHlwZSA9IHJpZ2h0VmFyaWFibGUuZ2V0VHlwZSgpLFxuICAgICAgICAgICAgICByaWdodFZhcmlhYmxlVHlwZUVxdWFsVG9PclN1cGVyVHlwZU9mUmlnaHRUZXJtVHlwZSA9IHJpZ2h0VmFyaWFibGVUeXBlLmlzRXF1YWxUb09yU3VwZXJUeXBlT2YobGVmdFRlcm1UeXBlKTtcblxuICAgICAgICBpZiAoIXJpZ2h0VmFyaWFibGVUeXBlRXF1YWxUb09yU3VwZXJUeXBlT2ZSaWdodFRlcm1UeXBlKSB7XG4gICAgICAgICAgY29uc3QgbGVmdFRlcm1TdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhsZWZ0VGVybU5vZGUpLFxuICAgICAgICAgICAgICAgIGxlZnRUZXJtVHlwZU5hbWUgPSBsZWZ0VGVybVR5cGUuZ2V0TmFtZSgpLFxuICAgICAgICAgICAgICAgIHJpZ2h0VmFyaWFibGVUeXBlTmFtZSA9IHJpZ2h0VmFyaWFibGVUeXBlLmdldE5hbWUoKTtcblxuICAgICAgICAgIGNvbnRleHQuZXJyb3IoYFRoZSByaWdodCAnJHtyaWdodFZhcmlhYmxlTmFtZX0nIHZhcmlhYmxlJ3MgJyR7cmlnaHRWYXJpYWJsZVR5cGVOYW1lfScgdHlwZSBpcyBub3QgZXF1YWwgdG8gb3IgYSBzdXBlci10eXBlIG9mIHRoZSBsZWZ0ICcke2xlZnRUZXJtU3RyaW5nfScgdGVybSdzICcke2xlZnRUZXJtVHlwZU5hbWV9JyB0eXBlLmAsIHN0YXRlbWVudE5vZGUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHN0YXRlbWVudFZlcmlmaWVkQXNFcXVhbGl0eSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IHR5cGVzID0gW107XG5cbiAgICAgICAgdmVyaWZ5VGVybShsZWZ0VGVybU5vZGUsIHR5cGVzLCBjb250ZXh0KTtcblxuICAgICAgICB2ZXJpZnlUZXJtKHJpZ2h0VGVybU5vZGUsIHR5cGVzLCBjb250ZXh0KTtcblxuICAgICAgICBjb25zdCBmaXJzdFR5cGUgPSBmaXJzdCh0eXBlcyksXG4gICAgICAgICAgICAgIHNlY29uZFR5cGUgPSBzZWNvbmQodHlwZXMpLFxuICAgICAgICAgICAgICBsZWZ0VGVybVR5cGUgPSBmaXJzdFR5cGUsIC8vL1xuICAgICAgICAgICAgICByaWdodFRlcm1UeXBlID0gc2Vjb25kVHlwZSwgLy8vXG4gICAgICAgICAgICAgIGxlZnRUZXJtVHlwZUVxdWFsVG9PclN1YlR5cGVPZk9mU3VwZXJUeXBlT2YgPSBsZWZ0VGVybVR5cGUuaXNFcXVhbFRvT3JTdWJUeXBlT2ZPZlN1cGVyVHlwZU9mKHJpZ2h0VGVybVR5cGUpO1xuXG4gICAgICAgIGlmICghbGVmdFRlcm1UeXBlRXF1YWxUb09yU3ViVHlwZU9mT2ZTdXBlclR5cGVPZikge1xuICAgICAgICAgIGNvbnN0IGxlZnRUZXJtU3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobGVmdFRlcm1Ob2RlKSxcbiAgICAgICAgICAgICAgICByaWdodFRlcm1TdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhyaWdodFRlcm1Ob2RlKSxcbiAgICAgICAgICAgICAgICBsZWZ0VGVybVR5cGVOYW1lID0gbGVmdFRlcm1UeXBlLmdldE5hbWUoKSxcbiAgICAgICAgICAgICAgICByaWdodFRlcm1UeXBlTmFtZSA9IHJpZ2h0VGVybVR5cGUuZ2V0TmFtZSgpO1xuXG4gICAgICAgICAgY29udGV4dC5lcnJvcihgVGhlIGxlZnQgJyR7bGVmdFRlcm1TdHJpbmd9JyB0ZXJtJ3MgJyR7bGVmdFRlcm1UeXBlTmFtZX0nIHR5cGUgaXMgbm90IGVxdWFsIHRvLCBhIHN1Yi10eXBlIG9mIG9yIGEgc3VwZXItdHlwZSBvZiB0aGUgcmlnaHQgJyR7cmlnaHRUZXJtU3RyaW5nfScgdGVybSdzICcke3JpZ2h0VGVybVR5cGVOYW1lfScgdHlwZS5gLCBzdGF0ZW1lbnROb2RlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBzdGF0ZW1lbnRWZXJpZmllZEFzRXF1YWxpdHkgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgaWYgKHN0YXRlbWVudFZlcmlmaWVkQXNFcXVhbGl0eSkge1xuICAgIGNvbnN0IHN0YXRlbWVudFN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKHN0YXRlbWVudE5vZGUpO1xuXG4gICAgY29udGV4dC5pbmZvKGBWZXJpZmllZCB0aGUgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50IGFzIGFuIGVxdWFsaXR5LmAsIHN0YXRlbWVudE5vZGUpO1xuICB9XG5cbiAgcmV0dXJuIHN0YXRlbWVudFZlcmlmaWVkQXNFcXVhbGl0eTtcbn1cbiJdLCJuYW1lcyI6WyJ2ZXJpZnlTdGF0ZW1lbnQiLCJ2ZXJpZnlTdGF0ZW1lbnRBZ2FpbnN0Q29tYmluYXRvcnMiLCJ2ZXJpZnlTdGF0ZW1lbnRBZ2FpbnN0Q29tYmluYXRvciIsInRlcm1Ob2RlUXVlcnkiLCJub2RlUXVlcnkiLCJ0eXBlTm9kZVF1ZXJ5IiwibWV0YVR5cGVOb2RlUXVlcnkiLCJzdGF0ZW1lbnROb2RlUXVlcnkiLCJ0eXBlSW5mZXJlbmNlTm9kZVF1ZXJ5IiwidHlwZUFzc2VydGlvbk5vZGVRdWVyeSIsIm1ldGFUeXBlVGVybWluYWxOb2RlUXVlcnkiLCJzdGF0ZW1lbnROb2RlIiwiYXNzaWdubWVudHMiLCJkZXJpdmVkIiwiY29udGV4dCIsInN0YXRlbWVudFZlcmlmaWVkIiwic3RhdGVtZW50VmVyaWZpZWRBZ2FpbnN0Q29tYmluYXRvcnMiLCJzdGF0ZW1lbnRWZXJpZmllZEFzVHlwZUluZmVyZW5jZSIsInZlcmlmeVN0YXRlbWVudEFzVHlwZUluZmVyZW5jZSIsInN0YXRlbWVudFZlcmlmaWVkQXNUeXBlQXNzZXJ0aW9uIiwidmVyaWZ5U3RhdGVtZW50QXNUeXBlQXNzZXJ0aW9uIiwic3RhdGVtZW50VmVyaWZpZWRBc0VxdWFsaXR5IiwidmVyaWZ5U3RhdGVtZW50QXNFcXVhbGl0eSIsIlN0YXRlbWVudFZlcmlmaWVyIiwidmVyaWZ5Tm9uVGVybWluYWxOb2RlIiwibm9uVGVybWluYWxOb2RlQSIsIm5vblRlcm1pbmFsTm9kZUIiLCJub25UZXJtaW5hbE5vZGVWZXJpZmllZCIsIm5vblRlcm1pbmFsTm9kZSIsImNvbWJpbmF0b3JOb25UZXJtaW5hbE5vZGUiLCJydWxlTmFtZSIsImdldFJ1bGVOYW1lIiwiY29tYmluYXRvclJ1bGVOYW1lIiwiQVJHVU1FTlRfUlVMRV9OQU1FIiwiYXJndW1lbnROb2RlIiwiY29tYmluYXRvckFyZ3VtZW50Tm9kZSIsImFyZ3VtZW50Tm9kZVZlcmlmaWVkIiwidmVyaWZ5QXJndW1lbnROb2RlIiwiTUVUQV9BUkdVTUVOVF9SVUxFX05BTUUiLCJtZXRhQXJndW1lbnROb2RlIiwiY29tYmluYXRvck1ldGFhcmd1bWVudE5vZGUiLCJtZXRhQXJndW1lbnROb2RlVmVyaWZpZWQiLCJ2ZXJpZnlNZXRhYXJndW1lbnROb2RlIiwiY2hpbGROb2RlcyIsImdldENoaWxkTm9kZXMiLCJjb21iaW5hdG9yQ2hpbGROb2RlcyIsIm5vZGVzQSIsIm5vZGVzQiIsIm5vZGVzVmVyaWZpZWQiLCJ2ZXJpZnlOb2RlcyIsInRlcm1Ob2RlIiwiYXJndW1lbnRTdHJpbmciLCJub2RlQXNTdHJpbmciLCJlcnJvciIsInR5cGVzIiwidGVybVZlcmlmaWVkIiwidmVyaWZ5VGVybSIsImZpcnN0VHlwZSIsImZpcnN0IiwidGVybVR5cGUiLCJ0eXBlTm9kZSIsInR5cGVOYW1lIiwidHlwZU5hbWVGcm9tVHlwZU5vZGUiLCJ0eXBlIiwiT0JKRUNUX1RZUEVfTkFNRSIsIm9iamVjdFR5cGUiLCJmaW5kVHlwZUJ5VHlwZU5hbWUiLCJzdGF0ZW1lbnRUeXBlRXF1YWxUb09yU3ViVHlwZU9mVHlwZSIsImlzRXF1YWxUb09yU3ViVHlwZU9mIiwiY29tYmluYXRvck1ldGFUWXBlTm9kZSIsIm1ldGFBcmd1bWVudFN0cmluZyIsImNvbWJpbmF0b3JNZXRhYXJndW1lbnRTdHJpbmciLCJjb21iaW5hdG9yTWV0YVR5cGVUZXJtaW5hbE5vZGUiLCJjb250ZW50IiwiZ2V0Q29udGVudCIsImNvbnRlbnRTdGF0ZW1lbnRNZXRhVHlwZSIsIlNUQVRFTUVOVF9NRVRBX1RZUEUiLCJWZXJpZmllciIsInN0YXRlbWVudFZlcmlmaWVyIiwiY29tYmluYXRvcnMiLCJnZXRDb21iaW5hdG9ycyIsImJyYWNrZXRlZENvbWJpbmF0b3IiLCJjb21iaW5hdG9yIiwiZmluZCIsInN0YXRlbWVudFZlcmlmaWVkQWdhaW5zdENvbWJpbmF0b3IiLCJjb21iaW5hdG9yU3RhdGVtZW50Tm9kZSIsImdldFN0YXRlbWVudE5vZGUiLCJ0eXBlSW5mZXJlbmNlTm9kZSIsInR5cGVJbmZlcmVuY2VTdHJpbmciLCJ0eXBlSW5mZXJlbmNlVmVyaWZpZWQiLCJ2ZXJpZnlUeXBlSW5mZXJlbmNlIiwidHlwZUFzc2VydGlvbk5vZGUiLCJ0eXBlQXNzZXJ0aW9uVmVyaWZpZWQiLCJ2ZXJpZnlUeXBlQXNzZXJ0aW9uIiwiZXF1YWxpdHlDb21iaW5hdG9yIiwiZXF1YWxpdHkiLCJFcXVhbGl0eSIsImZyb21TdGF0ZW1lbnROb2RlIiwiZXF1YWxpdGllcyIsImdldEVxdWFsaXRpZXMiLCJlcXVhbGl0eVZlcmlmaWVkIiwidmVyaWZ5IiwidmFyaWFibGVzIiwibGVmdFRlcm1Ob2RlIiwiZ2V0TGVmdFRlcm1Ob2RlIiwicmlnaHRUZXJtTm9kZSIsImdldFJpZ2h0VGVybU5vZGUiLCJsZWZ0VGVybVZlcmlmaWVkQXNWYXJpYWJsZSIsInZlcmlmeVRlcm1Bc1ZhcmlhYmxlIiwicmlnaHRUZXJtVmVyaWZpZWRBc1ZhcmlhYmxlIiwiZmlyc3RWYXJpYWJsZSIsInNlY29uZFZhcmlhYmxlIiwic2Vjb25kIiwibGVmdFZhcmlhYmxlIiwicmlnaHRWYXJpYWJsZSIsImxlZnRWYXJpYWJsZU5hbWUiLCJnZXROYW1lIiwibGVmdFZhcmlhYmxlVHlwZSIsImdldFR5cGUiLCJyaWdodFZhcmlhYmxlTmFtZSIsInJpZ2h0VmFyaWFibGVUeXBlIiwibGVmdFZhcmlhYmxlVHlwZUVxdWFsVG9PclN1YlR5cGVPZk9mU3VwZXJUeXBlT2ZSaWdodFZhcmlhYmxlVHlwZSIsImlzRXF1YWxUb09yU3ViVHlwZU9mT2ZTdXBlclR5cGVPZiIsImxlZnRWYXJpYWJsZVR5cGVOYW1lIiwicmlnaHRWYXJpYWJsZVR5cGVOYW1lIiwicmlnaHRUZXJtVHlwZSIsImxlZnRWYXJpYWJsZVR5cGVFcXVhbFRvT3JTdXBlclR5cGVPZlJpZ2h0VGVybVR5cGUiLCJpc0VxdWFsVG9PclN1cGVyVHlwZU9mIiwicmlnaHRUZXJtU3RyaW5nIiwicmlnaHRUZXJtVHlwZU5hbWUiLCJsZWZ0VGVybVR5cGUiLCJyaWdodFZhcmlhYmxlVHlwZUVxdWFsVG9PclN1cGVyVHlwZU9mUmlnaHRUZXJtVHlwZSIsImxlZnRUZXJtU3RyaW5nIiwibGVmdFRlcm1UeXBlTmFtZSIsInNlY29uZFR5cGUiLCJsZWZ0VGVybVR5cGVFcXVhbFRvT3JTdWJUeXBlT2ZPZlN1cGVyVHlwZU9mIiwic3RhdGVtZW50U3RyaW5nIiwiaW5mbyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7O0lBMEJBLE9BNEJDO2VBNUJ1QkE7O0lBaUpSQyxpQ0FBaUM7ZUFBakNBOztJQXlCQUMsZ0NBQWdDO2VBQWhDQTs7OytEQWxNSzsrREFDQTs0REFDRTtnRUFDUTtnRUFDQztvRUFDQTsyREFDQTtxQkFFTDtxQkFDRzt5QkFDRzt5QkFDRztxQkFFWTt5QkFDWTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFNUQsSUFBTUMsZ0JBQWdCQyxJQUFBQSxnQkFBUyxFQUFDLG9CQUMxQkMsZ0JBQWdCRCxJQUFBQSxnQkFBUyxFQUFDLG9CQUMxQkUsb0JBQW9CRixJQUFBQSxnQkFBUyxFQUFDLDRCQUM5QkcscUJBQXFCSCxJQUFBQSxnQkFBUyxFQUFDLDZCQUMvQkkseUJBQXlCSixJQUFB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