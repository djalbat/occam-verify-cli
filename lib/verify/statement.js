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
    statementVerifier: function() {
        return statementVerifier;
    },
    verifyStatementAgainstCombinator: function() {
        return verifyStatementAgainstCombinator;
    },
    verifyStatementAgainstCombinators: function() {
        return verifyStatementAgainstCombinators;
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
    var newObj = {
        __proto__: null
    };
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
                                var argumentNode = nonTerminalNode, constructorArgumentNode = combinatorNonTerminalNode, argumentNodeVerified = _term.termVerifier.verifyArgumentNode(argumentNode, constructorArgumentNode, context);
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
                    context.error("The '".concat(argumentString, "' argument should be a term, not a type"), argumentNode);
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
function verifyStatement(statementNode, assignments, derived, context) {
    var statementVerified = false;
    var statementString = context.nodeAsString(statementNode);
    context.debug("Verifying the '".concat(statementString, "' statement..."), statementNode);
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
    if (statementVerified) {
        context.debug("Verified the '".concat(statementString, "' statement."), statementNode);
    }
    return statementVerified;
}
function verifyStatementAgainstCombinators(statementNode, context) {
    var statementVerifiedAgainstCombinators = false;
    var statementString = context.nodeAsString(statementNode);
    context.trace("Verifying the '".concat(statementString, "' statement against combinators."), statementNode);
    var combinators = context.getCombinators();
    combinators = [
        _bracketed.default
    ].concat(_to_consumable_array(combinators));
    var combinator = combinators.find(function(combinator, index) {
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
    var statementString = context.nodeAsString(statementNode), combinatorString = combinator.getString();
    context.trace("Verifying the '".concat(statementString, "' statement against the '").concat(combinatorString, "' combinator."), statementNode);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92ZXJpZnkvc3RhdGVtZW50LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgVmVyaWZpZXIgZnJvbSBcIi4uL3ZlcmlmaWVyXCI7XG5pbXBvcnQgRXF1YWxpdHkgZnJvbSBcIi4uL2VxdWFsaXR5XCI7XG5pbXBvcnQgdmVyaWZ5VGVybSBmcm9tIFwiLi4vdmVyaWZ5L3Rlcm1cIjtcbmltcG9ydCBlcXVhbGl0eUNvbWJpbmF0b3IgZnJvbSBcIi4uL29jbWJpbmF0b3IvZXF1YWxpdHlcIjtcbmltcG9ydCBicmFja2V0ZWRDb21iaW5hdG9yIGZyb20gXCIuLi9vY21iaW5hdG9yL2JyYWNrZXRlZFwiO1xuaW1wb3J0IHZlcmlmeVR5cGVJbmZlcmVuY2UgZnJvbSBcIi4uL3ZlcmlmeS90eXBlSW5mZXJlbmNlXCI7XG5pbXBvcnQgdmVyaWZ5VHlwZUFzc2VydGlvbiBmcm9tIFwiLi4vdmVyaWZ5L2Fzc2VydGlvbi90eXBlXCI7XG5cbmltcG9ydCB7IG9iamVjdFR5cGUgfSBmcm9tIFwiLi4vdHlwZVwiO1xuaW1wb3J0IHsgdGVybVZlcmlmaWVyIH0gZnJvbSBcIi4uL3ZlcmlmeS90ZXJtXCI7XG5pbXBvcnQgeyBmaXJzdCwgc2Vjb25kIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9hcnJheVwiO1xuaW1wb3J0IHsgT0JKRUNUX1RZUEVfTkFNRSB9IGZyb20gXCIuLi90eXBlTmFtZXNcIjtcbmltcG9ydCB7IFNUQVRFTUVOVF9NRVRBX1RZUEUgfSBmcm9tIFwiLi4vbWV0YVR5cGVzXCI7XG5pbXBvcnQgeyB2ZXJpZnlUZXJtQXNWYXJpYWJsZSB9IGZyb20gXCIuLi92ZXJpZnkvdGVybVwiO1xuaW1wb3J0IHsgbm9kZVF1ZXJ5LCB0eXBlTmFtZUZyb21UeXBlTm9kZSB9IGZyb20gXCIuLi91dGlsaXRpZXMvcXVlcnlcIjtcbmltcG9ydCB7IEFSR1VNRU5UX1JVTEVfTkFNRSwgTUVUQV9BUkdVTUVOVF9SVUxFX05BTUUgfSBmcm9tIFwiLi4vcnVsZU5hbWVzXCI7XG5cbmNvbnN0IHRlcm1Ob2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvYXJndW1lbnQvdGVybSFcIiksXG4gICAgICB0eXBlTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL2FyZ3VtZW50L3R5cGUhXCIpLFxuICAgICAgbWV0YVR5cGVOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvbWV0YUFyZ3VtZW50L21ldGFUeXBlIVwiKSxcbiAgICAgIHN0YXRlbWVudE5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9tZXRhQXJndW1lbnQvc3RhdGVtZW50IVwiKSxcbiAgICAgIHR5cGVJbmZlcmVuY2VOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvc3RhdGVtZW50L3R5cGVJbmZlcmVuY2UhXCIpLFxuICAgICAgdHlwZUFzc2VydGlvbk5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9zdGF0ZW1lbnQvdHlwZUFzc2VydGlvbiFcIiksXG4gICAgICBtZXRhVHlwZVRlcm1pbmFsTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL21ldGFUeXBlL0BtZXRhLXR5cGVcIik7XG5cbmNsYXNzIFN0YXRlbWVudFZlcmlmaWVyIGV4dGVuZHMgVmVyaWZpZXIge1xuICB2ZXJpZnlOb25UZXJtaW5hbE5vZGUobm9uVGVybWluYWxOb2RlQSwgbm9uVGVybWluYWxOb2RlQiwgY29udGV4dCkge1xuICAgIGxldCBub25UZXJtaW5hbE5vZGVWZXJpZmllZCA9IGZhbHNlO1xuXG4gICAgY29uc3Qgbm9uVGVybWluYWxOb2RlID0gbm9uVGVybWluYWxOb2RlQSwgLy8vXG4gICAgICAgICAgY29tYmluYXRvck5vblRlcm1pbmFsTm9kZSA9IG5vblRlcm1pbmFsTm9kZUI7IC8vL1xuXG4gICAgY29uc3QgcnVsZU5hbWUgPSBub25UZXJtaW5hbE5vZGUuZ2V0UnVsZU5hbWUoKSwgLy8vXG4gICAgICAgICAgY29tYmluYXRvclJ1bGVOYW1lID0gY29tYmluYXRvck5vblRlcm1pbmFsTm9kZS5nZXRSdWxlTmFtZSgpOyAvLy9cblxuICAgIGlmIChydWxlTmFtZSA9PT0gY29tYmluYXRvclJ1bGVOYW1lKSB7XG4gICAgICBzd2l0Y2ggKHJ1bGVOYW1lKSB7XG4gICAgICAgIGNhc2UgQVJHVU1FTlRfUlVMRV9OQU1FOiB7XG4gICAgICAgICAgY29uc3QgYXJndW1lbnROb2RlID0gbm9uVGVybWluYWxOb2RlLCAvLy9cbiAgICAgICAgICAgICAgICBjb25zdHJ1Y3RvckFyZ3VtZW50Tm9kZSA9IGNvbWJpbmF0b3JOb25UZXJtaW5hbE5vZGUsIC8vL1xuICAgICAgICAgICAgICAgIGFyZ3VtZW50Tm9kZVZlcmlmaWVkID0gdGVybVZlcmlmaWVyLnZlcmlmeUFyZ3VtZW50Tm9kZShhcmd1bWVudE5vZGUsIGNvbnN0cnVjdG9yQXJndW1lbnROb2RlLCBjb250ZXh0KTtcblxuICAgICAgICAgIG5vblRlcm1pbmFsTm9kZVZlcmlmaWVkID0gYXJndW1lbnROb2RlVmVyaWZpZWQ7IC8vL1xuXG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cblxuICAgICAgICBjYXNlIE1FVEFfQVJHVU1FTlRfUlVMRV9OQU1FOiB7XG4gICAgICAgICAgY29uc3QgbWV0YUFyZ3VtZW50Tm9kZSA9IG5vblRlcm1pbmFsTm9kZSwgLy8vXG4gICAgICAgICAgICAgICAgY29tYmluYXRvck1ldGFhcmd1bWVudE5vZGUgPSBjb21iaW5hdG9yTm9uVGVybWluYWxOb2RlLCAvLy9cbiAgICAgICAgICAgICAgICBtZXRhQXJndW1lbnROb2RlVmVyaWZpZWQgPSB0aGlzLnZlcmlmeU1ldGFhcmd1bWVudE5vZGUobWV0YUFyZ3VtZW50Tm9kZSwgY29tYmluYXRvck1ldGFhcmd1bWVudE5vZGUsIGNvbnRleHQpO1xuXG4gICAgICAgICAgbm9uVGVybWluYWxOb2RlVmVyaWZpZWQgPSBtZXRhQXJndW1lbnROb2RlVmVyaWZpZWQ7IC8vL1xuXG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cblxuICAgICAgICBkZWZhdWx0OiB7XG4gICAgICAgICAgY29uc3QgY2hpbGROb2RlcyA9IG5vblRlcm1pbmFsTm9kZS5nZXRDaGlsZE5vZGVzKCksXG4gICAgICAgICAgICAgICAgY29tYmluYXRvckNoaWxkTm9kZXMgPSBjb21iaW5hdG9yTm9uVGVybWluYWxOb2RlLmdldENoaWxkTm9kZXMoKSxcbiAgICAgICAgICAgICAgICBub2Rlc0EgPSBjaGlsZE5vZGVzLCAvLy9cbiAgICAgICAgICAgICAgICBub2Rlc0IgPSBjb21iaW5hdG9yQ2hpbGROb2RlcywgLy8vXG4gICAgICAgICAgICAgICAgbm9kZXNWZXJpZmllZCA9IHRoaXMudmVyaWZ5Tm9kZXMobm9kZXNBLCBub2Rlc0IsIGNvbnRleHQpO1xuXG4gICAgICAgICAgbm9uVGVybWluYWxOb2RlVmVyaWZpZWQgPSBub2Rlc1ZlcmlmaWVkOyAvLy9cblxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG5vblRlcm1pbmFsTm9kZVZlcmlmaWVkO1xuICB9XG5cbiAgdmVyaWZ5QXJndW1lbnROb2RlKGFyZ3VtZW50Tm9kZSwgY29tYmluYXRvckFyZ3VtZW50Tm9kZSwgY29udGV4dCkge1xuICAgIGxldCBhcmd1bWVudE5vZGVWZXJpZmllZCA9IGZhbHNlO1xuXG4gICAgY29uc3QgdGVybU5vZGUgPSB0ZXJtTm9kZVF1ZXJ5KGFyZ3VtZW50Tm9kZSk7XG5cbiAgICBpZiAodGVybU5vZGUgPT09IG51bGwpIHtcbiAgICAgIGNvbnN0IGFyZ3VtZW50U3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcoYXJndW1lbnROb2RlKTtcblxuICAgICAgY29udGV4dC5lcnJvcihgVGhlICcke2FyZ3VtZW50U3RyaW5nfScgYXJndW1lbnQgc2hvdWxkIGJlIGEgdGVybSwgbm90IGEgdHlwZWAsIGFyZ3VtZW50Tm9kZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHR5cGVzID0gW10sXG4gICAgICAgICAgICB0ZXJtVmVyaWZpZWQgPSB2ZXJpZnlUZXJtKHRlcm1Ob2RlLCB0eXBlcywgY29udGV4dCk7XG5cbiAgICAgIGlmICh0ZXJtVmVyaWZpZWQpIHtcbiAgICAgICAgY29uc3QgZmlyc3RUeXBlID0gZmlyc3QodHlwZXMpLFxuICAgICAgICAgICAgICB0ZXJtVHlwZSA9IGZpcnN0VHlwZSwgLy8vXG4gICAgICAgICAgICAgIHR5cGVOb2RlID0gdHlwZU5vZGVRdWVyeShjb21iaW5hdG9yQXJndW1lbnROb2RlKSxcbiAgICAgICAgICAgICAgdHlwZU5hbWUgPSB0eXBlTmFtZUZyb21UeXBlTm9kZSh0eXBlTm9kZSksXG4gICAgICAgICAgICAgIHR5cGUgPSAodHlwZU5hbWUgPT09IE9CSkVDVF9UWVBFX05BTUUpID9cbiAgICAgICAgICAgICAgICAgICAgICAgb2JqZWN0VHlwZSA6ICAvLy9cbiAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZXh0LmZpbmRUeXBlQnlUeXBlTmFtZSh0eXBlTmFtZSksXG4gICAgICAgICAgICAgIHN0YXRlbWVudFR5cGVFcXVhbFRvT3JTdWJUeXBlT2ZUeXBlID0gdGVybVR5cGUuaXNFcXVhbFRvT3JTdWJUeXBlT2YodHlwZSk7XG5cbiAgICAgICAgaWYgKHN0YXRlbWVudFR5cGVFcXVhbFRvT3JTdWJUeXBlT2ZUeXBlKSB7XG4gICAgICAgICAgYXJndW1lbnROb2RlVmVyaWZpZWQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGFyZ3VtZW50Tm9kZVZlcmlmaWVkO1xuICB9XG5cbiAgdmVyaWZ5TWV0YWFyZ3VtZW50Tm9kZShtZXRhQXJndW1lbnROb2RlLCBjb21iaW5hdG9yTWV0YWFyZ3VtZW50Tm9kZSwgY29udGV4dCkge1xuICAgIGxldCBtZXRhQXJndW1lbnROb2RlVmVyaWZpZWQgPSBmYWxzZTtcblxuICAgIGNvbnN0IHN0YXRlbWVudE5vZGUgPSBzdGF0ZW1lbnROb2RlUXVlcnkobWV0YUFyZ3VtZW50Tm9kZSksXG4gICAgICAgICAgY29tYmluYXRvck1ldGFUWXBlTm9kZSA9IG1ldGFUeXBlTm9kZVF1ZXJ5KGNvbWJpbmF0b3JNZXRhYXJndW1lbnROb2RlKTtcblxuICAgIGlmIChzdGF0ZW1lbnROb2RlID09PSBudWxsKSB7XG4gICAgICBjb25zdCBtZXRhQXJndW1lbnRTdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhtZXRhQXJndW1lbnROb2RlKTtcblxuICAgICAgY29udGV4dC5lcnJvcihgRXhwZWN0ZWQgYSBzdGF0ZW1lbnQgYnV0IGdvdCBhICcke21ldGFBcmd1bWVudFN0cmluZ30nIG1ldGEtdHlwZS5gLCBtZXRhQXJndW1lbnROb2RlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKGNvbWJpbmF0b3JNZXRhVFlwZU5vZGUgPT09IG51bGwpIHtcbiAgICAgICAgY29uc3QgY29tYmluYXRvck1ldGFhcmd1bWVudFN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKGNvbWJpbmF0b3JNZXRhYXJndW1lbnROb2RlKTtcblxuICAgICAgICBjb250ZXh0LmVycm9yKGBFeHBlY3RlZCBhIG1ldGEtdHlwZSBidXQgZ290IGEgJyR7Y29tYmluYXRvck1ldGFhcmd1bWVudFN0cmluZ30nIHN0YXRlbWVudC5gLCBtZXRhQXJndW1lbnROb2RlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IGNvbWJpbmF0b3JNZXRhVHlwZVRlcm1pbmFsTm9kZSA9IG1ldGFUeXBlVGVybWluYWxOb2RlUXVlcnkoY29tYmluYXRvck1ldGFUWXBlTm9kZSksXG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBjb21iaW5hdG9yTWV0YVR5cGVUZXJtaW5hbE5vZGUuZ2V0Q29udGVudCgpLFxuICAgICAgICAgICAgICBjb250ZW50U3RhdGVtZW50TWV0YVR5cGUgPSAoY29udGVudCA9PT0gU1RBVEVNRU5UX01FVEFfVFlQRSk7XG5cbiAgICAgICAgaWYgKCFjb250ZW50U3RhdGVtZW50TWV0YVR5cGUpIHtcbiAgICAgICAgICBjb250ZXh0LmVycm9yKGBFeHBlY3RlZCB0aGUgbWV0YS10eXBlIHRvIGJlICdTdGF0ZW1lbnQnIGJ1dCBnb3QgJyR7Y29udGVudH0nLmAsIG1ldGFBcmd1bWVudE5vZGUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIG1ldGFBcmd1bWVudE5vZGVWZXJpZmllZCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbWV0YUFyZ3VtZW50Tm9kZVZlcmlmaWVkO1xuICB9XG59XG5cbmV4cG9ydCBjb25zdCBzdGF0ZW1lbnRWZXJpZmllciA9IG5ldyBTdGF0ZW1lbnRWZXJpZmllcigpO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB2ZXJpZnlTdGF0ZW1lbnQoc3RhdGVtZW50Tm9kZSwgYXNzaWdubWVudHMsIGRlcml2ZWQsIGNvbnRleHQpIHtcbiAgbGV0IHN0YXRlbWVudFZlcmlmaWVkID0gZmFsc2U7XG5cbiAgY29uc3Qgc3RhdGVtZW50U3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcoc3RhdGVtZW50Tm9kZSk7XG5cbiAgY29udGV4dC5kZWJ1ZyhgVmVyaWZ5aW5nIHRoZSAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQuLi5gLCBzdGF0ZW1lbnROb2RlKTtcblxuICBpZiAoIXN0YXRlbWVudFZlcmlmaWVkKSB7XG4gICAgY29uc3Qgc3RhdGVtZW50VmVyaWZpZWRBZ2FpbnN0Q29tYmluYXRvcnMgPSB2ZXJpZnlTdGF0ZW1lbnRBZ2FpbnN0Q29tYmluYXRvcnMoc3RhdGVtZW50Tm9kZSwgY29udGV4dCk7XG5cbiAgICBzdGF0ZW1lbnRWZXJpZmllZCA9IHN0YXRlbWVudFZlcmlmaWVkQWdhaW5zdENvbWJpbmF0b3JzOyAgLy8vXG4gIH1cblxuICBpZiAoIXN0YXRlbWVudFZlcmlmaWVkKSB7XG4gICAgY29uc3Qgc3RhdGVtZW50VmVyaWZpZWRBc1R5cGVJbmZlcmVuY2UgPSB2ZXJpZnlTdGF0ZW1lbnRBc1R5cGVJbmZlcmVuY2Uoc3RhdGVtZW50Tm9kZSwgZGVyaXZlZCwgY29udGV4dCk7XG5cbiAgICBzdGF0ZW1lbnRWZXJpZmllZCA9IHN0YXRlbWVudFZlcmlmaWVkQXNUeXBlSW5mZXJlbmNlOyAvLy9cbiAgfVxuXG4gIGlmICghc3RhdGVtZW50VmVyaWZpZWQpIHtcbiAgICBjb25zdCBzdGF0ZW1lbnRWZXJpZmllZEFzVHlwZUFzc2VydGlvbiA9IHZlcmlmeVN0YXRlbWVudEFzVHlwZUFzc2VydGlvbihzdGF0ZW1lbnROb2RlLCBhc3NpZ25tZW50cywgZGVyaXZlZCwgY29udGV4dCk7XG5cbiAgICBzdGF0ZW1lbnRWZXJpZmllZCA9IHN0YXRlbWVudFZlcmlmaWVkQXNUeXBlQXNzZXJ0aW9uOyAvLy9cbiAgfVxuXG4gIGlmICghc3RhdGVtZW50VmVyaWZpZWQpIHtcbiAgICBjb25zdCBzdGF0ZW1lbnRWZXJpZmllZEFzRXF1YWxpdHkgPSB2ZXJpZnlTdGF0ZW1lbnRBc0VxdWFsaXR5KHN0YXRlbWVudE5vZGUsIGRlcml2ZWQsIGNvbnRleHQpO1xuXG4gICAgc3RhdGVtZW50VmVyaWZpZWQgPSBzdGF0ZW1lbnRWZXJpZmllZEFzRXF1YWxpdHk7ICAvL1xuICB9XG5cbiAgaWYgKHN0YXRlbWVudFZlcmlmaWVkKSB7XG4gICAgY29udGV4dC5kZWJ1ZyhgVmVyaWZpZWQgdGhlICcke3N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudC5gLCBzdGF0ZW1lbnROb2RlKTtcbiAgfVxuXG4gIHJldHVybiBzdGF0ZW1lbnRWZXJpZmllZDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHZlcmlmeVN0YXRlbWVudEFnYWluc3RDb21iaW5hdG9ycyhzdGF0ZW1lbnROb2RlLCBjb250ZXh0KSB7XG4gIGxldCBzdGF0ZW1lbnRWZXJpZmllZEFnYWluc3RDb21iaW5hdG9ycyA9IGZhbHNlO1xuXG4gIGNvbnN0IHN0YXRlbWVudFN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKHN0YXRlbWVudE5vZGUpO1xuXG4gIGNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50IGFnYWluc3QgY29tYmluYXRvcnMuYCwgc3RhdGVtZW50Tm9kZSk7XG5cbiAgbGV0IGNvbWJpbmF0b3JzID0gY29udGV4dC5nZXRDb21iaW5hdG9ycygpO1xuXG4gIGNvbWJpbmF0b3JzID0gWyAvLy9cbiAgICBicmFja2V0ZWRDb21iaW5hdG9yLFxuICAgIC4uLmNvbWJpbmF0b3JzXG4gIF07XG5cbiAgY29uc3QgY29tYmluYXRvciA9IGNvbWJpbmF0b3JzLmZpbmQoKGNvbWJpbmF0b3IsIGluZGV4KSA9PiB7XG4gICAgY29uc3Qgc3RhdGVtZW50VmVyaWZpZWRBZ2FpbnN0Q29tYmluYXRvciA9IHZlcmlmeVN0YXRlbWVudEFnYWluc3RDb21iaW5hdG9yKHN0YXRlbWVudE5vZGUsIGNvbWJpbmF0b3IsIGNvbnRleHQpO1xuXG4gICAgaWYgKHN0YXRlbWVudFZlcmlmaWVkQWdhaW5zdENvbWJpbmF0b3IpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfSkgfHwgbnVsbDtcblxuICBpZiAoY29tYmluYXRvciAhPT0gbnVsbCkge1xuICAgIHN0YXRlbWVudFZlcmlmaWVkQWdhaW5zdENvbWJpbmF0b3JzID0gdHJ1ZTtcbiAgfVxuXG4gIHJldHVybiBzdGF0ZW1lbnRWZXJpZmllZEFnYWluc3RDb21iaW5hdG9ycztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHZlcmlmeVN0YXRlbWVudEFnYWluc3RDb21iaW5hdG9yKHN0YXRlbWVudE5vZGUsIGNvbWJpbmF0b3IsIGNvbnRleHQpIHtcbiAgY29uc3Qgc3RhdGVtZW50U3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcoc3RhdGVtZW50Tm9kZSksXG4gICAgICAgIGNvbWJpbmF0b3JTdHJpbmcgPSBjb21iaW5hdG9yLmdldFN0cmluZygpO1xuXG4gIGNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50IGFnYWluc3QgdGhlICcke2NvbWJpbmF0b3JTdHJpbmd9JyBjb21iaW5hdG9yLmAsIHN0YXRlbWVudE5vZGUpO1xuXG4gIGNvbnN0IGNvbWJpbmF0b3JTdGF0ZW1lbnROb2RlID0gY29tYmluYXRvci5nZXRTdGF0ZW1lbnROb2RlKCksXG4gICAgICAgIG5vblRlcm1pbmFsTm9kZUEgPSBzdGF0ZW1lbnROb2RlLCAvLy9cbiAgICAgICAgbm9uVGVybWluYWxOb2RlQiA9IGNvbWJpbmF0b3JTdGF0ZW1lbnROb2RlLCAvLy9cbiAgICAgICAgbm9uVGVybWluYWxOb2RlVmVyaWZpZWQgPSBzdGF0ZW1lbnRWZXJpZmllci52ZXJpZnlOb25UZXJtaW5hbE5vZGUobm9uVGVybWluYWxOb2RlQSwgbm9uVGVybWluYWxOb2RlQiwgY29udGV4dCksXG4gICAgICAgIHN0YXRlbWVudFZlcmlmaWVkQWdhaW5zdENvbWJpbmF0b3IgPSBub25UZXJtaW5hbE5vZGVWZXJpZmllZDsgIC8vL1xuXG4gIHJldHVybiBzdGF0ZW1lbnRWZXJpZmllZEFnYWluc3RDb21iaW5hdG9yO1xufVxuXG5mdW5jdGlvbiB2ZXJpZnlTdGF0ZW1lbnRBc1R5cGVJbmZlcmVuY2Uoc3RhdGVtZW50Tm9kZSwgZGVyaXZlZCwgY29udGV4dCkge1xuICBsZXQgc3RhdGVtZW50VmVyaWZpZWRBc1R5cGVJbmZlcmVuY2UgPSBmYWxzZTtcblxuICBjb25zdCB0eXBlSW5mZXJlbmNlTm9kZSA9IHR5cGVJbmZlcmVuY2VOb2RlUXVlcnkoc3RhdGVtZW50Tm9kZSk7XG5cbiAgaWYgKHR5cGVJbmZlcmVuY2VOb2RlICE9PSBudWxsKSB7XG4gICAgaWYgKCFkZXJpdmVkKSB7XG4gICAgICBjb25zdCB0eXBlSW5mZXJlbmNlU3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcodHlwZUluZmVyZW5jZU5vZGUpO1xuXG4gICAgICBjb250ZXh0LmVycm9yKGBUaGUgJyR7dHlwZUluZmVyZW5jZVN0cmluZ30nIHR5cGUgaW5mZXJlbmNlIGNhbiBvbmx5IGJlIGRlcml2ZWQuYCwgdHlwZUluZmVyZW5jZU5vZGUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCB0eXBlSW5mZXJlbmNlVmVyaWZpZWQgPSB2ZXJpZnlUeXBlSW5mZXJlbmNlKHR5cGVJbmZlcmVuY2VOb2RlLCBjb250ZXh0KTtcblxuICAgICAgc3RhdGVtZW50VmVyaWZpZWRBc1R5cGVJbmZlcmVuY2UgPSB0eXBlSW5mZXJlbmNlVmVyaWZpZWQ7IC8vL1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBzdGF0ZW1lbnRWZXJpZmllZEFzVHlwZUluZmVyZW5jZTtcbn1cblxuZnVuY3Rpb24gdmVyaWZ5U3RhdGVtZW50QXNUeXBlQXNzZXJ0aW9uKHN0YXRlbWVudE5vZGUsIGFzc2lnbm1lbnRzLCBkZXJpdmVkLCBjb250ZXh0KSB7XG4gIGxldCBzdGF0ZW1lbnRWZXJpZmllZEFzVHlwZUFzc2VydGlvbiA9IGZhbHNlO1xuXG4gIGNvbnN0IHR5cGVBc3NlcnRpb25Ob2RlID0gdHlwZUFzc2VydGlvbk5vZGVRdWVyeShzdGF0ZW1lbnROb2RlKTtcblxuICBpZiAodHlwZUFzc2VydGlvbk5vZGUgIT09IG51bGwpIHtcbiAgICBjb25zdCB0eXBlQXNzZXJ0aW9uVmVyaWZpZWQgPSB2ZXJpZnlUeXBlQXNzZXJ0aW9uKHR5cGVBc3NlcnRpb25Ob2RlLCBhc3NpZ25tZW50cywgZGVyaXZlZCwgY29udGV4dCk7XG5cbiAgICBzdGF0ZW1lbnRWZXJpZmllZEFzVHlwZUFzc2VydGlvbiA9IHR5cGVBc3NlcnRpb25WZXJpZmllZDsgLy8vXG4gIH1cblxuICByZXR1cm4gc3RhdGVtZW50VmVyaWZpZWRBc1R5cGVBc3NlcnRpb247XG59XG5cbmZ1bmN0aW9uIHZlcmlmeVN0YXRlbWVudEFzRXF1YWxpdHkoc3RhdGVtZW50Tm9kZSwgZGVyaXZlZCwgY29udGV4dCkge1xuICBsZXQgc3RhdGVtZW50VmVyaWZpZWRBc0VxdWFsaXR5ID0gZmFsc2U7XG5cbiAgY29uc3QgY29tYmluYXRvciA9IGVxdWFsaXR5Q29tYmluYXRvciwgIC8vL1xuICAgICAgICBzdGF0ZW1lbnRWZXJpZmllZEFnYWluc3RDb21iaW5hdG9yID0gdmVyaWZ5U3RhdGVtZW50QWdhaW5zdENvbWJpbmF0b3Ioc3RhdGVtZW50Tm9kZSwgY29tYmluYXRvciwgY29udGV4dCk7XG5cbiAgaWYgKHN0YXRlbWVudFZlcmlmaWVkQWdhaW5zdENvbWJpbmF0b3IpIHtcbiAgICBjb25zdCBlcXVhbGl0eSA9IEVxdWFsaXR5LmZyb21TdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUpO1xuXG4gICAgaWYgKGRlcml2ZWQpIHtcbiAgICAgIGNvbnN0IGVxdWFsaXRpZXMgPSBjb250ZXh0LmdldEVxdWFsaXRpZXMoKSxcbiAgICAgICAgICAgIGVxdWFsaXR5VmVyaWZpZWQgPSBlcXVhbGl0eS52ZXJpZnkoZXF1YWxpdGllcywgY29udGV4dCk7XG5cbiAgICAgIHN0YXRlbWVudFZlcmlmaWVkQXNFcXVhbGl0eSA9IGVxdWFsaXR5VmVyaWZpZWQ7ICAvLy9cbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgdmFyaWFibGVzID0gW10sXG4gICAgICAgICAgICBsZWZ0VGVybU5vZGUgPSBlcXVhbGl0eS5nZXRMZWZ0VGVybU5vZGUoKSxcbiAgICAgICAgICAgIHJpZ2h0VGVybU5vZGUgPSBlcXVhbGl0eS5nZXRSaWdodFRlcm1Ob2RlKCksXG4gICAgICAgICAgICBsZWZ0VGVybVZlcmlmaWVkQXNWYXJpYWJsZSA9IHZlcmlmeVRlcm1Bc1ZhcmlhYmxlKGxlZnRUZXJtTm9kZSwgdmFyaWFibGVzLCBjb250ZXh0KSxcbiAgICAgICAgICAgIHJpZ2h0VGVybVZlcmlmaWVkQXNWYXJpYWJsZSA9IHZlcmlmeVRlcm1Bc1ZhcmlhYmxlKHJpZ2h0VGVybU5vZGUsIHZhcmlhYmxlcywgY29udGV4dCk7XG5cbiAgICAgIGlmIChsZWZ0VGVybVZlcmlmaWVkQXNWYXJpYWJsZSAmJiByaWdodFRlcm1WZXJpZmllZEFzVmFyaWFibGUpIHtcbiAgICAgICAgY29uc3QgZmlyc3RWYXJpYWJsZSA9IGZpcnN0KHZhcmlhYmxlcyksXG4gICAgICAgICAgICAgIHNlY29uZFZhcmlhYmxlID0gc2Vjb25kKHZhcmlhYmxlcyksXG4gICAgICAgICAgICAgIGxlZnRWYXJpYWJsZSA9IGZpcnN0VmFyaWFibGUsIC8vL1xuICAgICAgICAgICAgICByaWdodFZhcmlhYmxlID0gc2Vjb25kVmFyaWFibGUsIC8vL1xuICAgICAgICAgICAgICBsZWZ0VmFyaWFibGVOYW1lID0gbGVmdFZhcmlhYmxlLmdldE5hbWUoKSxcbiAgICAgICAgICAgICAgbGVmdFZhcmlhYmxlVHlwZSA9IGxlZnRWYXJpYWJsZS5nZXRUeXBlKCksXG4gICAgICAgICAgICAgIHJpZ2h0VmFyaWFibGVOYW1lID0gcmlnaHRWYXJpYWJsZS5nZXROYW1lKCksXG4gICAgICAgICAgICAgIHJpZ2h0VmFyaWFibGVUeXBlID0gcmlnaHRWYXJpYWJsZS5nZXRUeXBlKCksXG4gICAgICAgICAgICAgIGxlZnRWYXJpYWJsZVR5cGVFcXVhbFRvT3JTdWJUeXBlT2ZPZlN1cGVyVHlwZU9mUmlnaHRWYXJpYWJsZVR5cGUgPSBsZWZ0VmFyaWFibGVUeXBlLmlzRXF1YWxUb09yU3ViVHlwZU9mT2ZTdXBlclR5cGVPZihyaWdodFZhcmlhYmxlVHlwZSk7XG5cbiAgICAgICAgaWYgKCFsZWZ0VmFyaWFibGVUeXBlRXF1YWxUb09yU3ViVHlwZU9mT2ZTdXBlclR5cGVPZlJpZ2h0VmFyaWFibGVUeXBlKSB7XG4gICAgICAgICAgY29uc3QgbGVmdFZhcmlhYmxlVHlwZU5hbWUgPSBsZWZ0VmFyaWFibGVUeXBlLmdldE5hbWUoKSxcbiAgICAgICAgICAgICAgICByaWdodFZhcmlhYmxlVHlwZU5hbWUgPSByaWdodFZhcmlhYmxlVHlwZS5nZXROYW1lKCk7XG5cbiAgICAgICAgICBjb250ZXh0LmVycm9yKGBUaGUgbGVmdCAnJHtsZWZ0VmFyaWFibGVOYW1lfScgdmFyaWFibGUncyAnJHtsZWZ0VmFyaWFibGVUeXBlTmFtZX0nIHR5cGUgaXMgbm90IGVxdWFsIHRvLCBhIHN1Yi10eXBlIG9mIG9yIGEgc3VwZXItdHlwZSBvZiB0aGUgcmlnaHQgJyR7cmlnaHRWYXJpYWJsZU5hbWV9JyB2YXJpYWJsZSdzICcke3JpZ2h0VmFyaWFibGVUeXBlTmFtZX0nIHR5cGUuYCwgc3RhdGVtZW50Tm9kZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgc3RhdGVtZW50VmVyaWZpZWRBc0VxdWFsaXR5ID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChsZWZ0VGVybVZlcmlmaWVkQXNWYXJpYWJsZSkge1xuICAgICAgICBjb25zdCB0eXBlcyA9IFtdO1xuXG4gICAgICAgIHZlcmlmeVRlcm0ocmlnaHRUZXJtTm9kZSwgdHlwZXMsIGNvbnRleHQpO1xuXG4gICAgICAgIGNvbnN0IGZpcnN0VHlwZSA9IGZpcnN0KHR5cGVzKSxcbiAgICAgICAgICAgICAgZmlyc3RWYXJpYWJsZSA9IGZpcnN0KHZhcmlhYmxlcyksXG4gICAgICAgICAgICAgIGxlZnRWYXJpYWJsZSA9IGZpcnN0VmFyaWFibGUsIC8vL1xuICAgICAgICAgICAgICByaWdodFRlcm1UeXBlID0gZmlyc3RUeXBlLCAgLy8vXG4gICAgICAgICAgICAgIGxlZnRWYXJpYWJsZU5hbWUgPSBsZWZ0VmFyaWFibGUuZ2V0TmFtZSgpLFxuICAgICAgICAgICAgICBsZWZ0VmFyaWFibGVUeXBlID0gbGVmdFZhcmlhYmxlLmdldFR5cGUoKSxcbiAgICAgICAgICAgICAgbGVmdFZhcmlhYmxlVHlwZUVxdWFsVG9PclN1cGVyVHlwZU9mUmlnaHRUZXJtVHlwZSA9IGxlZnRWYXJpYWJsZVR5cGUuaXNFcXVhbFRvT3JTdXBlclR5cGVPZihyaWdodFRlcm1UeXBlKTtcblxuICAgICAgICBpZiAoIWxlZnRWYXJpYWJsZVR5cGVFcXVhbFRvT3JTdXBlclR5cGVPZlJpZ2h0VGVybVR5cGUpIHtcbiAgICAgICAgICBjb25zdCByaWdodFRlcm1TdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhyaWdodFRlcm1Ob2RlKSxcbiAgICAgICAgICAgICAgICByaWdodFRlcm1UeXBlTmFtZSA9IHJpZ2h0VGVybVR5cGUuZ2V0TmFtZSgpLFxuICAgICAgICAgICAgICAgIGxlZnRWYXJpYWJsZVR5cGVOYW1lID0gbGVmdFZhcmlhYmxlVHlwZS5nZXROYW1lKCk7XG5cbiAgICAgICAgICBjb250ZXh0LmVycm9yKGBUaGUgbGVmdCAnJHtsZWZ0VmFyaWFibGVOYW1lfScgdmFyaWFibGUncyAnJHtsZWZ0VmFyaWFibGVUeXBlTmFtZX0nIHR5cGUgaXMgbm90IGVxdWFsIHRvIG9yIGEgc3VwZXItdHlwZSBvZiB0aGUgcmlnaHQgJyR7cmlnaHRUZXJtU3RyaW5nfScgdGVybSdzICcke3JpZ2h0VGVybVR5cGVOYW1lfScgdHlwZS5gLCBzdGF0ZW1lbnROb2RlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBzdGF0ZW1lbnRWZXJpZmllZEFzRXF1YWxpdHkgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKHJpZ2h0VGVybVZlcmlmaWVkQXNWYXJpYWJsZSkge1xuICAgICAgICBjb25zdCB0eXBlcyA9IFtdO1xuXG4gICAgICAgIHZlcmlmeVRlcm0obGVmdFRlcm1Ob2RlLCB0eXBlcywgY29udGV4dCk7XG5cbiAgICAgICAgY29uc3QgZmlyc3RUeXBlID0gZmlyc3QodHlwZXMpLFxuICAgICAgICAgICAgICBmaXJzdFZhcmlhYmxlID0gZmlyc3QodmFyaWFibGVzKSxcbiAgICAgICAgICAgICAgbGVmdFRlcm1UeXBlID0gZmlyc3RUeXBlLCAgLy8vXG4gICAgICAgICAgICAgIHJpZ2h0VmFyaWFibGUgPSBmaXJzdFZhcmlhYmxlLCAvLy9cbiAgICAgICAgICAgICAgcmlnaHRWYXJpYWJsZU5hbWUgPSByaWdodFZhcmlhYmxlLmdldE5hbWUoKSxcbiAgICAgICAgICAgICAgcmlnaHRWYXJpYWJsZVR5cGUgPSByaWdodFZhcmlhYmxlLmdldFR5cGUoKSxcbiAgICAgICAgICAgICAgcmlnaHRWYXJpYWJsZVR5cGVFcXVhbFRvT3JTdXBlclR5cGVPZlJpZ2h0VGVybVR5cGUgPSByaWdodFZhcmlhYmxlVHlwZS5pc0VxdWFsVG9PclN1cGVyVHlwZU9mKGxlZnRUZXJtVHlwZSk7XG5cbiAgICAgICAgaWYgKCFyaWdodFZhcmlhYmxlVHlwZUVxdWFsVG9PclN1cGVyVHlwZU9mUmlnaHRUZXJtVHlwZSkge1xuICAgICAgICAgIGNvbnN0IGxlZnRUZXJtU3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobGVmdFRlcm1Ob2RlKSxcbiAgICAgICAgICAgICAgICBsZWZ0VGVybVR5cGVOYW1lID0gbGVmdFRlcm1UeXBlLmdldE5hbWUoKSxcbiAgICAgICAgICAgICAgICByaWdodFZhcmlhYmxlVHlwZU5hbWUgPSByaWdodFZhcmlhYmxlVHlwZS5nZXROYW1lKCk7XG5cbiAgICAgICAgICBjb250ZXh0LmVycm9yKGBUaGUgcmlnaHQgJyR7cmlnaHRWYXJpYWJsZU5hbWV9JyB2YXJpYWJsZSdzICcke3JpZ2h0VmFyaWFibGVUeXBlTmFtZX0nIHR5cGUgaXMgbm90IGVxdWFsIHRvIG9yIGEgc3VwZXItdHlwZSBvZiB0aGUgbGVmdCAnJHtsZWZ0VGVybVN0cmluZ30nIHRlcm0ncyAnJHtsZWZ0VGVybVR5cGVOYW1lfScgdHlwZS5gLCBzdGF0ZW1lbnROb2RlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBzdGF0ZW1lbnRWZXJpZmllZEFzRXF1YWxpdHkgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCB0eXBlcyA9IFtdO1xuXG4gICAgICAgIHZlcmlmeVRlcm0obGVmdFRlcm1Ob2RlLCB0eXBlcywgY29udGV4dCk7XG5cbiAgICAgICAgdmVyaWZ5VGVybShyaWdodFRlcm1Ob2RlLCB0eXBlcywgY29udGV4dCk7XG5cbiAgICAgICAgY29uc3QgZmlyc3RUeXBlID0gZmlyc3QodHlwZXMpLFxuICAgICAgICAgICAgICBzZWNvbmRUeXBlID0gc2Vjb25kKHR5cGVzKSxcbiAgICAgICAgICAgICAgbGVmdFRlcm1UeXBlID0gZmlyc3RUeXBlLCAvLy9cbiAgICAgICAgICAgICAgcmlnaHRUZXJtVHlwZSA9IHNlY29uZFR5cGUsIC8vL1xuICAgICAgICAgICAgICBsZWZ0VGVybVR5cGVFcXVhbFRvT3JTdWJUeXBlT2ZPZlN1cGVyVHlwZU9mID0gbGVmdFRlcm1UeXBlLmlzRXF1YWxUb09yU3ViVHlwZU9mT2ZTdXBlclR5cGVPZihyaWdodFRlcm1UeXBlKTtcblxuICAgICAgICBpZiAoIWxlZnRUZXJtVHlwZUVxdWFsVG9PclN1YlR5cGVPZk9mU3VwZXJUeXBlT2YpIHtcbiAgICAgICAgICBjb25zdCBsZWZ0VGVybVN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKGxlZnRUZXJtTm9kZSksXG4gICAgICAgICAgICAgICAgcmlnaHRUZXJtU3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcocmlnaHRUZXJtTm9kZSksXG4gICAgICAgICAgICAgICAgbGVmdFRlcm1UeXBlTmFtZSA9IGxlZnRUZXJtVHlwZS5nZXROYW1lKCksXG4gICAgICAgICAgICAgICAgcmlnaHRUZXJtVHlwZU5hbWUgPSByaWdodFRlcm1UeXBlLmdldE5hbWUoKTtcblxuICAgICAgICAgIGNvbnRleHQuZXJyb3IoYFRoZSBsZWZ0ICcke2xlZnRUZXJtU3RyaW5nfScgdGVybSdzICcke2xlZnRUZXJtVHlwZU5hbWV9JyB0eXBlIGlzIG5vdCBlcXVhbCB0bywgYSBzdWItdHlwZSBvZiBvciBhIHN1cGVyLXR5cGUgb2YgdGhlIHJpZ2h0ICcke3JpZ2h0VGVybVN0cmluZ30nIHRlcm0ncyAnJHtyaWdodFRlcm1UeXBlTmFtZX0nIHR5cGUuYCwgc3RhdGVtZW50Tm9kZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgc3RhdGVtZW50VmVyaWZpZWRBc0VxdWFsaXR5ID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGlmIChzdGF0ZW1lbnRWZXJpZmllZEFzRXF1YWxpdHkpIHtcbiAgICBjb25zdCBzdGF0ZW1lbnRTdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhzdGF0ZW1lbnROb2RlKTtcblxuICAgIGNvbnRleHQuaW5mbyhgVmVyaWZpZWQgdGhlICcke3N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudCBhcyBhbiBlcXVhbGl0eS5gLCBzdGF0ZW1lbnROb2RlKTtcbiAgfVxuXG4gIHJldHVybiBzdGF0ZW1lbnRWZXJpZmllZEFzRXF1YWxpdHk7XG59XG4iXSwibmFtZXMiOlsidmVyaWZ5U3RhdGVtZW50Iiwic3RhdGVtZW50VmVyaWZpZXIiLCJ2ZXJpZnlTdGF0ZW1lbnRBZ2FpbnN0Q29tYmluYXRvciIsInZlcmlmeVN0YXRlbWVudEFnYWluc3RDb21iaW5hdG9ycyIsInRlcm1Ob2RlUXVlcnkiLCJub2RlUXVlcnkiLCJ0eXBlTm9kZVF1ZXJ5IiwibWV0YVR5cGVOb2RlUXVlcnkiLCJzdGF0ZW1lbnROb2RlUXVlcnkiLCJ0eXBlSW5mZXJlbmNlTm9kZVF1ZXJ5IiwidHlwZUFzc2VydGlvbk5vZGVRdWVyeSIsIm1ldGFUeXBlVGVybWluYWxOb2RlUXVlcnkiLCJTdGF0ZW1lbnRWZXJpZmllciIsInZlcmlmeU5vblRlcm1pbmFsTm9kZSIsIm5vblRlcm1pbmFsTm9kZUEiLCJub25UZXJtaW5hbE5vZGVCIiwiY29udGV4dCIsIm5vblRlcm1pbmFsTm9kZVZlcmlmaWVkIiwibm9uVGVybWluYWxOb2RlIiwiY29tYmluYXRvck5vblRlcm1pbmFsTm9kZSIsInJ1bGVOYW1lIiwiZ2V0UnVsZU5hbWUiLCJjb21iaW5hdG9yUnVsZU5hbWUiLCJBUkdVTUVOVF9SVUxFX05BTUUiLCJhcmd1bWVudE5vZGUiLCJjb25zdHJ1Y3RvckFyZ3VtZW50Tm9kZSIsImFyZ3VtZW50Tm9kZVZlcmlmaWVkIiwidGVybVZlcmlmaWVyIiwidmVyaWZ5QXJndW1lbnROb2RlIiwiTUVUQV9BUkdVTUVOVF9SVUxFX05BTUUiLCJtZXRhQXJndW1lbnROb2RlIiwiY29tYmluYXRvck1ldGFhcmd1bWVudE5vZGUiLCJtZXRhQXJndW1lbnROb2RlVmVyaWZpZWQiLCJ2ZXJpZnlNZXRhYXJndW1lbnROb2RlIiwiY2hpbGROb2RlcyIsImdldENoaWxkTm9kZXMiLCJjb21iaW5hdG9yQ2hpbGROb2RlcyIsIm5vZGVzQSIsIm5vZGVzQiIsIm5vZGVzVmVyaWZpZWQiLCJ2ZXJpZnlOb2RlcyIsImNvbWJpbmF0b3JBcmd1bWVudE5vZGUiLCJ0ZXJtTm9kZSIsImFyZ3VtZW50U3RyaW5nIiwibm9kZUFzU3RyaW5nIiwiZXJyb3IiLCJ0eXBlcyIsInRlcm1WZXJpZmllZCIsInZlcmlmeVRlcm0iLCJmaXJzdFR5cGUiLCJmaXJzdCIsInRlcm1UeXBlIiwidHlwZU5vZGUiLCJ0eXBlTmFtZSIsInR5cGVOYW1lRnJvbVR5cGVOb2RlIiwidHlwZSIsIk9CSkVDVF9UWVBFX05BTUUiLCJvYmplY3RUeXBlIiwiZmluZFR5cGVCeVR5cGVOYW1lIiwic3RhdGVtZW50VHlwZUVxdWFsVG9PclN1YlR5cGVPZlR5cGUiLCJpc0VxdWFsVG9PclN1YlR5cGVPZiIsInN0YXRlbWVudE5vZGUiLCJjb21iaW5hdG9yTWV0YVRZcGVOb2RlIiwibWV0YUFyZ3VtZW50U3RyaW5nIiwiY29tYmluYXRvck1ldGFhcmd1bWVudFN0cmluZyIsImNvbWJpbmF0b3JNZXRhVHlwZVRlcm1pbmFsTm9kZSIsImNvbnRlbnQiLCJnZXRDb250ZW50IiwiY29udGVudFN0YXRlbWVudE1ldGFUeXBlIiwiU1RBVEVNRU5UX01FVEFfVFlQRSIsIlZlcmlmaWVyIiwiYXNzaWdubWVudHMiLCJkZXJpdmVkIiwic3RhdGVtZW50VmVyaWZpZWQiLCJzdGF0ZW1lbnRTdHJpbmciLCJkZWJ1ZyIsInN0YXRlbWVudFZlcmlmaWVkQWdhaW5zdENvbWJpbmF0b3JzIiwic3RhdGVtZW50VmVyaWZpZWRBc1R5cGVJbmZlcmVuY2UiLCJ2ZXJpZnlTdGF0ZW1lbnRBc1R5cGVJbmZlcmVuY2UiLCJzdGF0ZW1lbnRWZXJpZmllZEFzVHlwZUFzc2VydGlvbiIsInZlcmlmeVN0YXRlbWVudEFzVHlwZUFzc2VydGlvbiIsInN0YXRlbWVudFZlcmlmaWVkQXNFcXVhbGl0eSIsInZlcmlmeVN0YXRlbWVudEFzRXF1YWxpdHkiLCJ0cmFjZSIsImNvbWJpbmF0b3JzIiwiZ2V0Q29tYmluYXRvcnMiLCJicmFja2V0ZWRDb21iaW5hdG9yIiwiY29tYmluYXRvciIsImZpbmQiLCJpbmRleCIsInN0YXRlbWVudFZlcmlmaWVkQWdhaW5zdENvbWJpbmF0b3IiLCJjb21iaW5hdG9yU3RyaW5nIiwiZ2V0U3RyaW5nIiwiY29tYmluYXRvclN0YXRlbWVudE5vZGUiLCJnZXRTdGF0ZW1lbnROb2RlIiwidHlwZUluZmVyZW5jZU5vZGUiLCJ0eXBlSW5mZXJlbmNlU3RyaW5nIiwidHlwZUluZmVyZW5jZVZlcmlmaWVkIiwidmVyaWZ5VHlwZUluZmVyZW5jZSIsInR5cGVBc3NlcnRpb25Ob2RlIiwidHlwZUFzc2VydGlvblZlcmlmaWVkIiwidmVyaWZ5VHlwZUFzc2VydGlvbiIsImVxdWFsaXR5Q29tYmluYXRvciIsImVxdWFsaXR5IiwiRXF1YWxpdHkiLCJmcm9tU3RhdGVtZW50Tm9kZSIsImVxdWFsaXRpZXMiLCJnZXRFcXVhbGl0aWVzIiwiZXF1YWxpdHlWZXJpZmllZCIsInZlcmlmeSIsInZhcmlhYmxlcyIsImxlZnRUZXJtTm9kZSIsImdldExlZnRUZXJtTm9kZSIsInJpZ2h0VGVybU5vZGUiLCJnZXRSaWdodFRlcm1Ob2RlIiwibGVmdFRlcm1WZXJpZmllZEFzVmFyaWFibGUiLCJ2ZXJpZnlUZXJtQXNWYXJpYWJsZSIsInJpZ2h0VGVybVZlcmlmaWVkQXNWYXJpYWJsZSIsImZpcnN0VmFyaWFibGUiLCJzZWNvbmRWYXJpYWJsZSIsInNlY29uZCIsImxlZnRWYXJpYWJsZSIsInJpZ2h0VmFyaWFibGUiLCJsZWZ0VmFyaWFibGVOYW1lIiwiZ2V0TmFtZSIsImxlZnRWYXJpYWJsZVR5cGUiLCJnZXRUeXBlIiwicmlnaHRWYXJpYWJsZU5hbWUiLCJyaWdodFZhcmlhYmxlVHlwZSIsImxlZnRWYXJpYWJsZVR5cGVFcXVhbFRvT3JTdWJUeXBlT2ZPZlN1cGVyVHlwZU9mUmlnaHRWYXJpYWJsZVR5cGUiLCJpc0VxdWFsVG9PclN1YlR5cGVPZk9mU3VwZXJUeXBlT2YiLCJsZWZ0VmFyaWFibGVUeXBlTmFtZSIsInJpZ2h0VmFyaWFibGVUeXBlTmFtZSIsInJpZ2h0VGVybVR5cGUiLCJsZWZ0VmFyaWFibGVUeXBlRXF1YWxUb09yU3VwZXJUeXBlT2ZSaWdodFRlcm1UeXBlIiwiaXNFcXVhbFRvT3JTdXBlclR5cGVPZiIsInJpZ2h0VGVybVN0cmluZyIsInJpZ2h0VGVybVR5cGVOYW1lIiwibGVmdFRlcm1UeXBlIiwicmlnaHRWYXJpYWJsZVR5cGVFcXVhbFRvT3JTdXBlclR5cGVPZlJpZ2h0VGVybVR5cGUiLCJsZWZ0VGVybVN0cmluZyIsImxlZnRUZXJtVHlwZU5hbWUiLCJzZWNvbmRUeXBlIiwibGVmdFRlcm1UeXBlRXF1YWxUb09yU3ViVHlwZU9mT2ZTdXBlclR5cGVPZiIsImluZm8iXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7OztJQThJQSxPQW9DQztlQXBDdUJBOztJQUZYQyxpQkFBaUI7ZUFBakJBOztJQXFFR0MsZ0NBQWdDO2VBQWhDQTs7SUE3QkFDLGlDQUFpQztlQUFqQ0E7OzsrREFsTEs7K0RBQ0E7NERBQ0U7Z0VBQ1E7Z0VBQ0M7b0VBQ0E7MkRBQ0E7cUJBRUw7cUJBRUc7eUJBQ0c7eUJBQ0c7cUJBRVk7eUJBQ1k7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFNUQsSUFBTUMsZ0JBQWdCQyxJQUFBQSxnQkFBUyxFQUFDLG9CQUMxQkMsZ0JBQWdCRCxJQUFBQSxnQkFBUyxFQUFDLG9CQUMxQkUsb0JBQW9CRixJQUFBQSxnQkFBUyxFQUFDLDRCQUM5QkcscUJBQXFCSCxJQUFBQSxnQkFBUyxFQUFDLDZCQUMvQkkseUJBQXlCSixJQUFBQSxnQkFBUyxFQUFDLDhC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