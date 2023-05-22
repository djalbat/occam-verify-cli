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
    statementVerifier: function() {
        return statementVerifier;
    },
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
function verifyStatementAgainstCombinators(statementNode, context) {
    var statementVerifiedAgainstCombinators = false;
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
var count = 0;
function verifyStatementAsEquality(statementNode, derived, context) {
    var statementVerifiedAsEquality = false;
    if (count++ === 8) {
        debugger;
    }
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92ZXJpZnkvc3RhdGVtZW50LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgVmVyaWZpZXIgZnJvbSBcIi4uL3ZlcmlmaWVyXCI7XG5pbXBvcnQgRXF1YWxpdHkgZnJvbSBcIi4uL2VxdWFsaXR5XCI7XG5pbXBvcnQgdmVyaWZ5VGVybSBmcm9tIFwiLi4vdmVyaWZ5L3Rlcm1cIjtcbmltcG9ydCBlcXVhbGl0eUNvbWJpbmF0b3IgZnJvbSBcIi4uL29jbWJpbmF0b3IvZXF1YWxpdHlcIjtcbmltcG9ydCBicmFja2V0ZWRDb21iaW5hdG9yIGZyb20gXCIuLi9vY21iaW5hdG9yL2JyYWNrZXRlZFwiO1xuaW1wb3J0IHZlcmlmeVR5cGVJbmZlcmVuY2UgZnJvbSBcIi4uL3ZlcmlmeS90eXBlSW5mZXJlbmNlXCI7XG5pbXBvcnQgdmVyaWZ5VHlwZUFzc2VydGlvbiBmcm9tIFwiLi4vdmVyaWZ5L2Fzc2VydGlvbi90eXBlXCI7XG5cbmltcG9ydCB7IG9iamVjdFR5cGUgfSBmcm9tIFwiLi4vdHlwZVwiO1xuaW1wb3J0IHsgdGVybVZlcmlmaWVyIH0gZnJvbSBcIi4uL3ZlcmlmeS90ZXJtXCI7XG5pbXBvcnQgeyBmaXJzdCwgc2Vjb25kIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9hcnJheVwiO1xuaW1wb3J0IHsgT0JKRUNUX1RZUEVfTkFNRSB9IGZyb20gXCIuLi90eXBlTmFtZXNcIjtcbmltcG9ydCB7IFNUQVRFTUVOVF9NRVRBX1RZUEUgfSBmcm9tIFwiLi4vbWV0YVR5cGVzXCI7XG5pbXBvcnQgeyB2ZXJpZnlUZXJtQXNWYXJpYWJsZSB9IGZyb20gXCIuLi92ZXJpZnkvdGVybVwiO1xuaW1wb3J0IHsgbm9kZVF1ZXJ5LCB0eXBlTmFtZUZyb21UeXBlTm9kZSB9IGZyb20gXCIuLi91dGlsaXRpZXMvcXVlcnlcIjtcbmltcG9ydCB7IEFSR1VNRU5UX1JVTEVfTkFNRSwgTUVUQV9BUkdVTUVOVF9SVUxFX05BTUUgfSBmcm9tIFwiLi4vcnVsZU5hbWVzXCI7XG5cbmNvbnN0IHRlcm1Ob2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvYXJndW1lbnQvdGVybSFcIiksXG4gICAgICB0eXBlTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL2FyZ3VtZW50L3R5cGUhXCIpLFxuICAgICAgbWV0YVR5cGVOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvbWV0YUFyZ3VtZW50L21ldGFUeXBlIVwiKSxcbiAgICAgIHN0YXRlbWVudE5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9tZXRhQXJndW1lbnQvc3RhdGVtZW50IVwiKSxcbiAgICAgIHR5cGVJbmZlcmVuY2VOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvc3RhdGVtZW50L3R5cGVJbmZlcmVuY2UhXCIpLFxuICAgICAgdHlwZUFzc2VydGlvbk5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9zdGF0ZW1lbnQvdHlwZUFzc2VydGlvbiFcIiksXG4gICAgICBtZXRhVHlwZVRlcm1pbmFsTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL21ldGFUeXBlL0BtZXRhLXR5cGVcIik7XG5cbmNsYXNzIFN0YXRlbWVudFZlcmlmaWVyIGV4dGVuZHMgVmVyaWZpZXIge1xuICB2ZXJpZnlOb25UZXJtaW5hbE5vZGUobm9uVGVybWluYWxOb2RlQSwgbm9uVGVybWluYWxOb2RlQiwgY29udGV4dCkge1xuICAgIGxldCBub25UZXJtaW5hbE5vZGVWZXJpZmllZCA9IGZhbHNlO1xuXG4gICAgY29uc3Qgbm9uVGVybWluYWxOb2RlID0gbm9uVGVybWluYWxOb2RlQSwgLy8vXG4gICAgICAgICAgY29tYmluYXRvck5vblRlcm1pbmFsTm9kZSA9IG5vblRlcm1pbmFsTm9kZUI7IC8vL1xuXG4gICAgY29uc3QgcnVsZU5hbWUgPSBub25UZXJtaW5hbE5vZGUuZ2V0UnVsZU5hbWUoKSwgLy8vXG4gICAgICAgICAgY29tYmluYXRvclJ1bGVOYW1lID0gY29tYmluYXRvck5vblRlcm1pbmFsTm9kZS5nZXRSdWxlTmFtZSgpOyAvLy9cblxuICAgIGlmIChydWxlTmFtZSA9PT0gY29tYmluYXRvclJ1bGVOYW1lKSB7XG4gICAgICBzd2l0Y2ggKHJ1bGVOYW1lKSB7XG4gICAgICAgIGNhc2UgQVJHVU1FTlRfUlVMRV9OQU1FOiB7XG4gICAgICAgICAgY29uc3QgYXJndW1lbnROb2RlID0gbm9uVGVybWluYWxOb2RlLCAvLy9cbiAgICAgICAgICAgICAgICBjb25zdHJ1Y3RvckFyZ3VtZW50Tm9kZSA9IGNvbWJpbmF0b3JOb25UZXJtaW5hbE5vZGUsIC8vL1xuICAgICAgICAgICAgICAgIGFyZ3VtZW50Tm9kZVZlcmlmaWVkID0gdGVybVZlcmlmaWVyLnZlcmlmeUFyZ3VtZW50Tm9kZShhcmd1bWVudE5vZGUsIGNvbnN0cnVjdG9yQXJndW1lbnROb2RlLCBjb250ZXh0KTtcblxuICAgICAgICAgIG5vblRlcm1pbmFsTm9kZVZlcmlmaWVkID0gYXJndW1lbnROb2RlVmVyaWZpZWQ7IC8vL1xuXG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cblxuICAgICAgICBjYXNlIE1FVEFfQVJHVU1FTlRfUlVMRV9OQU1FOiB7XG4gICAgICAgICAgY29uc3QgbWV0YUFyZ3VtZW50Tm9kZSA9IG5vblRlcm1pbmFsTm9kZSwgLy8vXG4gICAgICAgICAgICAgICAgY29tYmluYXRvck1ldGFhcmd1bWVudE5vZGUgPSBjb21iaW5hdG9yTm9uVGVybWluYWxOb2RlLCAvLy9cbiAgICAgICAgICAgICAgICBtZXRhQXJndW1lbnROb2RlVmVyaWZpZWQgPSB0aGlzLnZlcmlmeU1ldGFhcmd1bWVudE5vZGUobWV0YUFyZ3VtZW50Tm9kZSwgY29tYmluYXRvck1ldGFhcmd1bWVudE5vZGUsIGNvbnRleHQpO1xuXG4gICAgICAgICAgbm9uVGVybWluYWxOb2RlVmVyaWZpZWQgPSBtZXRhQXJndW1lbnROb2RlVmVyaWZpZWQ7IC8vL1xuXG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cblxuICAgICAgICBkZWZhdWx0OiB7XG4gICAgICAgICAgY29uc3QgY2hpbGROb2RlcyA9IG5vblRlcm1pbmFsTm9kZS5nZXRDaGlsZE5vZGVzKCksXG4gICAgICAgICAgICAgICAgY29tYmluYXRvckNoaWxkTm9kZXMgPSBjb21iaW5hdG9yTm9uVGVybWluYWxOb2RlLmdldENoaWxkTm9kZXMoKSxcbiAgICAgICAgICAgICAgICBub2Rlc0EgPSBjaGlsZE5vZGVzLCAvLy9cbiAgICAgICAgICAgICAgICBub2Rlc0IgPSBjb21iaW5hdG9yQ2hpbGROb2RlcywgLy8vXG4gICAgICAgICAgICAgICAgbm9kZXNWZXJpZmllZCA9IHRoaXMudmVyaWZ5Tm9kZXMobm9kZXNBLCBub2Rlc0IsIGNvbnRleHQpO1xuXG4gICAgICAgICAgbm9uVGVybWluYWxOb2RlVmVyaWZpZWQgPSBub2Rlc1ZlcmlmaWVkOyAvLy9cblxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG5vblRlcm1pbmFsTm9kZVZlcmlmaWVkO1xuICB9XG5cbiAgdmVyaWZ5QXJndW1lbnROb2RlKGFyZ3VtZW50Tm9kZSwgY29tYmluYXRvckFyZ3VtZW50Tm9kZSwgY29udGV4dCkge1xuICAgIGxldCBhcmd1bWVudE5vZGVWZXJpZmllZCA9IGZhbHNlO1xuXG4gICAgY29uc3QgdGVybU5vZGUgPSB0ZXJtTm9kZVF1ZXJ5KGFyZ3VtZW50Tm9kZSk7XG5cbiAgICBpZiAodGVybU5vZGUgPT09IG51bGwpIHtcbiAgICAgIGNvbnN0IGFyZ3VtZW50U3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcoYXJndW1lbnROb2RlKTtcblxuICAgICAgY29udGV4dC5lcnJvcihgVGhlICR7YXJndW1lbnRTdHJpbmd9IGFyZ3VtZW50IHNob3VsZCBiZSBhIHRlcm0sIG5vdCBhIHR5cGVgLCBhcmd1bWVudE5vZGUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCB0eXBlcyA9IFtdLFxuICAgICAgICAgICAgdGVybVZlcmlmaWVkID0gdmVyaWZ5VGVybSh0ZXJtTm9kZSwgdHlwZXMsIGNvbnRleHQpO1xuXG4gICAgICBpZiAodGVybVZlcmlmaWVkKSB7XG4gICAgICAgIGNvbnN0IGZpcnN0VHlwZSA9IGZpcnN0KHR5cGVzKSxcbiAgICAgICAgICAgICAgdGVybVR5cGUgPSBmaXJzdFR5cGUsIC8vL1xuICAgICAgICAgICAgICB0eXBlTm9kZSA9IHR5cGVOb2RlUXVlcnkoY29tYmluYXRvckFyZ3VtZW50Tm9kZSksXG4gICAgICAgICAgICAgIHR5cGVOYW1lID0gdHlwZU5hbWVGcm9tVHlwZU5vZGUodHlwZU5vZGUpLFxuICAgICAgICAgICAgICB0eXBlID0gKHR5cGVOYW1lID09PSBPQkpFQ1RfVFlQRV9OQU1FKSA/XG4gICAgICAgICAgICAgICAgICAgICAgIG9iamVjdFR5cGUgOiAgLy8vXG4gICAgICAgICAgICAgICAgICAgICAgICAgY29udGV4dC5maW5kVHlwZUJ5VHlwZU5hbWUodHlwZU5hbWUpLFxuICAgICAgICAgICAgICBzdGF0ZW1lbnRUeXBlRXF1YWxUb09yU3ViVHlwZU9mVHlwZSA9IHRlcm1UeXBlLmlzRXF1YWxUb09yU3ViVHlwZU9mKHR5cGUpO1xuXG4gICAgICAgIGlmIChzdGF0ZW1lbnRUeXBlRXF1YWxUb09yU3ViVHlwZU9mVHlwZSkge1xuICAgICAgICAgIGFyZ3VtZW50Tm9kZVZlcmlmaWVkID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBhcmd1bWVudE5vZGVWZXJpZmllZDtcbiAgfVxuXG4gIHZlcmlmeU1ldGFhcmd1bWVudE5vZGUobWV0YUFyZ3VtZW50Tm9kZSwgY29tYmluYXRvck1ldGFhcmd1bWVudE5vZGUsIGNvbnRleHQpIHtcbiAgICBsZXQgbWV0YUFyZ3VtZW50Tm9kZVZlcmlmaWVkID0gZmFsc2U7XG5cbiAgICBjb25zdCBzdGF0ZW1lbnROb2RlID0gc3RhdGVtZW50Tm9kZVF1ZXJ5KG1ldGFBcmd1bWVudE5vZGUpLFxuICAgICAgICAgIGNvbWJpbmF0b3JNZXRhVFlwZU5vZGUgPSBtZXRhVHlwZU5vZGVRdWVyeShjb21iaW5hdG9yTWV0YWFyZ3VtZW50Tm9kZSk7XG5cbiAgICBpZiAoc3RhdGVtZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgICAgY29uc3QgbWV0YUFyZ3VtZW50U3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobWV0YUFyZ3VtZW50Tm9kZSk7XG5cbiAgICAgIGNvbnRleHQuZXJyb3IoYEV4cGVjdGVkIGEgc3RhdGVtZW50IGJ1dCBnb3QgYSAnJHttZXRhQXJndW1lbnRTdHJpbmd9JyBtZXRhLXR5cGUuYCwgbWV0YUFyZ3VtZW50Tm9kZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChjb21iaW5hdG9yTWV0YVRZcGVOb2RlID09PSBudWxsKSB7XG4gICAgICAgIGNvbnN0IGNvbWJpbmF0b3JNZXRhYXJndW1lbnRTdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhjb21iaW5hdG9yTWV0YWFyZ3VtZW50Tm9kZSk7XG5cbiAgICAgICAgY29udGV4dC5lcnJvcihgRXhwZWN0ZWQgYSBtZXRhLXR5cGUgYnV0IGdvdCBhICcke2NvbWJpbmF0b3JNZXRhYXJndW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQuYCwgbWV0YUFyZ3VtZW50Tm9kZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCBjb21iaW5hdG9yTWV0YVR5cGVUZXJtaW5hbE5vZGUgPSBtZXRhVHlwZVRlcm1pbmFsTm9kZVF1ZXJ5KGNvbWJpbmF0b3JNZXRhVFlwZU5vZGUpLFxuICAgICAgICAgICAgICBjb250ZW50ID0gY29tYmluYXRvck1ldGFUeXBlVGVybWluYWxOb2RlLmdldENvbnRlbnQoKSxcbiAgICAgICAgICAgICAgY29udGVudFN0YXRlbWVudE1ldGFUeXBlID0gKGNvbnRlbnQgPT09IFNUQVRFTUVOVF9NRVRBX1RZUEUpO1xuXG4gICAgICAgIGlmICghY29udGVudFN0YXRlbWVudE1ldGFUeXBlKSB7XG4gICAgICAgICAgY29udGV4dC5lcnJvcihgRXhwZWN0ZWQgdGhlIG1ldGEtdHlwZSB0byBiZSAnU3RhdGVtZW50JyBidXQgZ290ICcke2NvbnRlbnR9Jy5gLCBtZXRhQXJndW1lbnROb2RlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBtZXRhQXJndW1lbnROb2RlVmVyaWZpZWQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG1ldGFBcmd1bWVudE5vZGVWZXJpZmllZDtcbiAgfVxufVxuXG5leHBvcnQgY29uc3Qgc3RhdGVtZW50VmVyaWZpZXIgPSBuZXcgU3RhdGVtZW50VmVyaWZpZXIoKTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdmVyaWZ5U3RhdGVtZW50KHN0YXRlbWVudE5vZGUsIGFzc2lnbm1lbnRzLCBkZXJpdmVkLCBjb250ZXh0KSB7XG4gIGxldCBzdGF0ZW1lbnRWZXJpZmllZCA9IGZhbHNlO1xuXG4gIGlmICghc3RhdGVtZW50VmVyaWZpZWQpIHtcbiAgICBjb25zdCBzdGF0ZW1lbnRWZXJpZmllZEFnYWluc3RDb21iaW5hdG9ycyA9IHZlcmlmeVN0YXRlbWVudEFnYWluc3RDb21iaW5hdG9ycyhzdGF0ZW1lbnROb2RlLCBjb250ZXh0KTtcblxuICAgIHN0YXRlbWVudFZlcmlmaWVkID0gc3RhdGVtZW50VmVyaWZpZWRBZ2FpbnN0Q29tYmluYXRvcnM7ICAvLy9cbiAgfVxuXG4gIGlmICghc3RhdGVtZW50VmVyaWZpZWQpIHtcbiAgICBjb25zdCBzdGF0ZW1lbnRWZXJpZmllZEFzVHlwZUluZmVyZW5jZSA9IHZlcmlmeVN0YXRlbWVudEFzVHlwZUluZmVyZW5jZShzdGF0ZW1lbnROb2RlLCBkZXJpdmVkLCBjb250ZXh0KTtcblxuICAgIHN0YXRlbWVudFZlcmlmaWVkID0gc3RhdGVtZW50VmVyaWZpZWRBc1R5cGVJbmZlcmVuY2U7IC8vL1xuICB9XG5cbiAgaWYgKCFzdGF0ZW1lbnRWZXJpZmllZCkge1xuICAgIGNvbnN0IHN0YXRlbWVudFZlcmlmaWVkQXNUeXBlQXNzZXJ0aW9uID0gdmVyaWZ5U3RhdGVtZW50QXNUeXBlQXNzZXJ0aW9uKHN0YXRlbWVudE5vZGUsIGFzc2lnbm1lbnRzLCBkZXJpdmVkLCBjb250ZXh0KTtcblxuICAgIHN0YXRlbWVudFZlcmlmaWVkID0gc3RhdGVtZW50VmVyaWZpZWRBc1R5cGVBc3NlcnRpb247IC8vL1xuICB9XG5cbiAgaWYgKCFzdGF0ZW1lbnRWZXJpZmllZCkge1xuICAgIGNvbnN0IHN0YXRlbWVudFZlcmlmaWVkQXNFcXVhbGl0eSA9IHZlcmlmeVN0YXRlbWVudEFzRXF1YWxpdHkoc3RhdGVtZW50Tm9kZSwgZGVyaXZlZCwgY29udGV4dCk7XG5cbiAgICBzdGF0ZW1lbnRWZXJpZmllZCA9IHN0YXRlbWVudFZlcmlmaWVkQXNFcXVhbGl0eTsgIC8vXG4gIH1cblxuICByZXR1cm4gc3RhdGVtZW50VmVyaWZpZWQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB2ZXJpZnlTdGF0ZW1lbnRBZ2FpbnN0Q29tYmluYXRvcnMoc3RhdGVtZW50Tm9kZSwgY29udGV4dCkge1xuICBsZXQgc3RhdGVtZW50VmVyaWZpZWRBZ2FpbnN0Q29tYmluYXRvcnMgPSBmYWxzZTtcblxuICBsZXQgY29tYmluYXRvcnMgPSBjb250ZXh0LmdldENvbWJpbmF0b3JzKCk7XG5cbiAgY29tYmluYXRvcnMgPSBbIC8vL1xuICAgIGJyYWNrZXRlZENvbWJpbmF0b3IsXG4gICAgLi4uY29tYmluYXRvcnNcbiAgXTtcblxuICBjb25zdCBjb21iaW5hdG9yID0gY29tYmluYXRvcnMuZmluZCgoY29tYmluYXRvciwgaW5kZXgpID0+IHtcbiAgICBjb25zdCBzdGF0ZW1lbnRWZXJpZmllZEFnYWluc3RDb21iaW5hdG9yID0gdmVyaWZ5U3RhdGVtZW50QWdhaW5zdENvbWJpbmF0b3Ioc3RhdGVtZW50Tm9kZSwgY29tYmluYXRvciwgY29udGV4dCk7XG5cbiAgICBpZiAoc3RhdGVtZW50VmVyaWZpZWRBZ2FpbnN0Q29tYmluYXRvcikge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9KSB8fCBudWxsO1xuXG4gIGlmIChjb21iaW5hdG9yICE9PSBudWxsKSB7XG4gICAgc3RhdGVtZW50VmVyaWZpZWRBZ2FpbnN0Q29tYmluYXRvcnMgPSB0cnVlO1xuICB9XG5cbiAgcmV0dXJuIHN0YXRlbWVudFZlcmlmaWVkQWdhaW5zdENvbWJpbmF0b3JzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdmVyaWZ5U3RhdGVtZW50QWdhaW5zdENvbWJpbmF0b3Ioc3RhdGVtZW50Tm9kZSwgY29tYmluYXRvciwgY29udGV4dCkge1xuICBjb25zdCBjb21iaW5hdG9yU3RhdGVtZW50Tm9kZSA9IGNvbWJpbmF0b3IuZ2V0U3RhdGVtZW50Tm9kZSgpLFxuICAgICAgICBub25UZXJtaW5hbE5vZGVBID0gc3RhdGVtZW50Tm9kZSwgIC8vL1xuICAgICAgICBub25UZXJtaW5hbE5vZGVCID0gY29tYmluYXRvclN0YXRlbWVudE5vZGUsIC8vL1xuICAgICAgICBub25UZXJtaW5hbE5vZGVWZXJpZmllZCA9IHN0YXRlbWVudFZlcmlmaWVyLnZlcmlmeU5vblRlcm1pbmFsTm9kZShub25UZXJtaW5hbE5vZGVBLCBub25UZXJtaW5hbE5vZGVCLCBjb250ZXh0KSxcbiAgICAgICAgc3RhdGVtZW50VmVyaWZpZWRBZ2FpbnN0Q29tYmluYXRvciA9IG5vblRlcm1pbmFsTm9kZVZlcmlmaWVkOyAgLy8vXG5cbiAgcmV0dXJuIHN0YXRlbWVudFZlcmlmaWVkQWdhaW5zdENvbWJpbmF0b3I7XG59XG5cbmZ1bmN0aW9uIHZlcmlmeVN0YXRlbWVudEFzVHlwZUluZmVyZW5jZShzdGF0ZW1lbnROb2RlLCBkZXJpdmVkLCBjb250ZXh0KSB7XG4gIGxldCBzdGF0ZW1lbnRWZXJpZmllZEFzVHlwZUluZmVyZW5jZSA9IGZhbHNlO1xuXG4gIGNvbnN0IHR5cGVJbmZlcmVuY2VOb2RlID0gdHlwZUluZmVyZW5jZU5vZGVRdWVyeShzdGF0ZW1lbnROb2RlKTtcblxuICBpZiAodHlwZUluZmVyZW5jZU5vZGUgIT09IG51bGwpIHtcbiAgICBpZiAoIWRlcml2ZWQpIHtcbiAgICAgIGNvbnN0IHR5cGVJbmZlcmVuY2VTdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyh0eXBlSW5mZXJlbmNlTm9kZSk7XG5cbiAgICAgIGNvbnRleHQuZXJyb3IoYFRoZSAnJHt0eXBlSW5mZXJlbmNlU3RyaW5nfScgdHlwZSBpbmZlcmVuY2UgY2FuIG9ubHkgYmUgZGVyaXZlZC5gLCB0eXBlSW5mZXJlbmNlTm9kZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHR5cGVJbmZlcmVuY2VWZXJpZmllZCA9IHZlcmlmeVR5cGVJbmZlcmVuY2UodHlwZUluZmVyZW5jZU5vZGUsIGNvbnRleHQpO1xuXG4gICAgICBzdGF0ZW1lbnRWZXJpZmllZEFzVHlwZUluZmVyZW5jZSA9IHR5cGVJbmZlcmVuY2VWZXJpZmllZDsgLy8vXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHN0YXRlbWVudFZlcmlmaWVkQXNUeXBlSW5mZXJlbmNlO1xufVxuXG5mdW5jdGlvbiB2ZXJpZnlTdGF0ZW1lbnRBc1R5cGVBc3NlcnRpb24oc3RhdGVtZW50Tm9kZSwgYXNzaWdubWVudHMsIGRlcml2ZWQsIGNvbnRleHQpIHtcbiAgbGV0IHN0YXRlbWVudFZlcmlmaWVkQXNUeXBlQXNzZXJ0aW9uID0gZmFsc2U7XG5cbiAgY29uc3QgdHlwZUFzc2VydGlvbk5vZGUgPSB0eXBlQXNzZXJ0aW9uTm9kZVF1ZXJ5KHN0YXRlbWVudE5vZGUpO1xuXG4gIGlmICh0eXBlQXNzZXJ0aW9uTm9kZSAhPT0gbnVsbCkge1xuICAgIGNvbnN0IHR5cGVBc3NlcnRpb25WZXJpZmllZCA9IHZlcmlmeVR5cGVBc3NlcnRpb24odHlwZUFzc2VydGlvbk5vZGUsIGFzc2lnbm1lbnRzLCBkZXJpdmVkLCBjb250ZXh0KTtcblxuICAgIHN0YXRlbWVudFZlcmlmaWVkQXNUeXBlQXNzZXJ0aW9uID0gdHlwZUFzc2VydGlvblZlcmlmaWVkOyAvLy9cbiAgfVxuXG4gIHJldHVybiBzdGF0ZW1lbnRWZXJpZmllZEFzVHlwZUFzc2VydGlvbjtcbn1cblxubGV0IGNvdW50ID0gMDtcblxuZnVuY3Rpb24gdmVyaWZ5U3RhdGVtZW50QXNFcXVhbGl0eShzdGF0ZW1lbnROb2RlLCBkZXJpdmVkLCBjb250ZXh0KSB7XG4gIGxldCBzdGF0ZW1lbnRWZXJpZmllZEFzRXF1YWxpdHkgPSBmYWxzZTtcblxuICBpZiAoY291bnQrKyA9PT0gOCkge1xuICAgIGRlYnVnZ2VyXG4gIH1cblxuICBjb25zdCBjb21iaW5hdG9yID0gZXF1YWxpdHlDb21iaW5hdG9yLCAgLy8vXG4gICAgICAgIHN0YXRlbWVudFZlcmlmaWVkQWdhaW5zdENvbWJpbmF0b3IgPSB2ZXJpZnlTdGF0ZW1lbnRBZ2FpbnN0Q29tYmluYXRvcihzdGF0ZW1lbnROb2RlLCBjb21iaW5hdG9yLCBjb250ZXh0KTtcblxuICBpZiAoc3RhdGVtZW50VmVyaWZpZWRBZ2FpbnN0Q29tYmluYXRvcikge1xuICAgIGNvbnN0IGVxdWFsaXR5ID0gRXF1YWxpdHkuZnJvbVN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSk7XG5cbiAgICBpZiAoZGVyaXZlZCkge1xuICAgICAgY29uc3QgZXF1YWxpdGllcyA9IGNvbnRleHQuZ2V0RXF1YWxpdGllcygpLFxuICAgICAgICAgICAgZXF1YWxpdHlWZXJpZmllZCA9IGVxdWFsaXR5LnZlcmlmeShlcXVhbGl0aWVzLCBjb250ZXh0KTtcblxuICAgICAgc3RhdGVtZW50VmVyaWZpZWRBc0VxdWFsaXR5ID0gZXF1YWxpdHlWZXJpZmllZDsgIC8vL1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCB2YXJpYWJsZXMgPSBbXSxcbiAgICAgICAgICAgIGxlZnRUZXJtTm9kZSA9IGVxdWFsaXR5LmdldExlZnRUZXJtTm9kZSgpLFxuICAgICAgICAgICAgcmlnaHRUZXJtTm9kZSA9IGVxdWFsaXR5LmdldFJpZ2h0VGVybU5vZGUoKSxcbiAgICAgICAgICAgIGxlZnRUZXJtVmVyaWZpZWRBc1ZhcmlhYmxlID0gdmVyaWZ5VGVybUFzVmFyaWFibGUobGVmdFRlcm1Ob2RlLCB2YXJpYWJsZXMsIGNvbnRleHQpLFxuICAgICAgICAgICAgcmlnaHRUZXJtVmVyaWZpZWRBc1ZhcmlhYmxlID0gdmVyaWZ5VGVybUFzVmFyaWFibGUocmlnaHRUZXJtTm9kZSwgdmFyaWFibGVzLCBjb250ZXh0KTtcblxuICAgICAgaWYgKGxlZnRUZXJtVmVyaWZpZWRBc1ZhcmlhYmxlICYmIHJpZ2h0VGVybVZlcmlmaWVkQXNWYXJpYWJsZSkge1xuICAgICAgICBjb25zdCBmaXJzdFZhcmlhYmxlID0gZmlyc3QodmFyaWFibGVzKSxcbiAgICAgICAgICAgICAgc2Vjb25kVmFyaWFibGUgPSBzZWNvbmQodmFyaWFibGVzKSxcbiAgICAgICAgICAgICAgbGVmdFZhcmlhYmxlID0gZmlyc3RWYXJpYWJsZSwgLy8vXG4gICAgICAgICAgICAgIHJpZ2h0VmFyaWFibGUgPSBzZWNvbmRWYXJpYWJsZSwgLy8vXG4gICAgICAgICAgICAgIGxlZnRWYXJpYWJsZU5hbWUgPSBsZWZ0VmFyaWFibGUuZ2V0TmFtZSgpLFxuICAgICAgICAgICAgICBsZWZ0VmFyaWFibGVUeXBlID0gbGVmdFZhcmlhYmxlLmdldFR5cGUoKSxcbiAgICAgICAgICAgICAgcmlnaHRWYXJpYWJsZU5hbWUgPSByaWdodFZhcmlhYmxlLmdldE5hbWUoKSxcbiAgICAgICAgICAgICAgcmlnaHRWYXJpYWJsZVR5cGUgPSByaWdodFZhcmlhYmxlLmdldFR5cGUoKSxcbiAgICAgICAgICAgICAgbGVmdFZhcmlhYmxlVHlwZUVxdWFsVG9PclN1YlR5cGVPZk9mU3VwZXJUeXBlT2ZSaWdodFZhcmlhYmxlVHlwZSA9IGxlZnRWYXJpYWJsZVR5cGUuaXNFcXVhbFRvT3JTdWJUeXBlT2ZPZlN1cGVyVHlwZU9mKHJpZ2h0VmFyaWFibGVUeXBlKTtcblxuICAgICAgICBpZiAoIWxlZnRWYXJpYWJsZVR5cGVFcXVhbFRvT3JTdWJUeXBlT2ZPZlN1cGVyVHlwZU9mUmlnaHRWYXJpYWJsZVR5cGUpIHtcbiAgICAgICAgICBjb25zdCBsZWZ0VmFyaWFibGVUeXBlTmFtZSA9IGxlZnRWYXJpYWJsZVR5cGUuZ2V0TmFtZSgpLFxuICAgICAgICAgICAgICAgIHJpZ2h0VmFyaWFibGVUeXBlTmFtZSA9IHJpZ2h0VmFyaWFibGVUeXBlLmdldE5hbWUoKTtcblxuICAgICAgICAgIGNvbnRleHQuZXJyb3IoYFRoZSBsZWZ0ICcke2xlZnRWYXJpYWJsZU5hbWV9JyB2YXJpYWJsZSdzICcke2xlZnRWYXJpYWJsZVR5cGVOYW1lfScgdHlwZSBpcyBub3QgZXF1YWwgdG8sIGEgc3ViLXR5cGUgb2Ygb3IgYSBzdXBlci10eXBlIG9mIHRoZSByaWdodCAnJHtyaWdodFZhcmlhYmxlTmFtZX0nIHZhcmlhYmxlJ3MgJyR7cmlnaHRWYXJpYWJsZVR5cGVOYW1lfScgdHlwZS5gLCBzdGF0ZW1lbnROb2RlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBzdGF0ZW1lbnRWZXJpZmllZEFzRXF1YWxpdHkgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKGxlZnRUZXJtVmVyaWZpZWRBc1ZhcmlhYmxlKSB7XG4gICAgICAgIGNvbnN0IHR5cGVzID0gW107XG5cbiAgICAgICAgdmVyaWZ5VGVybShyaWdodFRlcm1Ob2RlLCB0eXBlcywgY29udGV4dCk7XG5cbiAgICAgICAgY29uc3QgZmlyc3RUeXBlID0gZmlyc3QodHlwZXMpLFxuICAgICAgICAgICAgICBmaXJzdFZhcmlhYmxlID0gZmlyc3QodmFyaWFibGVzKSxcbiAgICAgICAgICAgICAgbGVmdFZhcmlhYmxlID0gZmlyc3RWYXJpYWJsZSwgLy8vXG4gICAgICAgICAgICAgIHJpZ2h0VGVybVR5cGUgPSBmaXJzdFR5cGUsICAvLy9cbiAgICAgICAgICAgICAgbGVmdFZhcmlhYmxlTmFtZSA9IGxlZnRWYXJpYWJsZS5nZXROYW1lKCksXG4gICAgICAgICAgICAgIGxlZnRWYXJpYWJsZVR5cGUgPSBsZWZ0VmFyaWFibGUuZ2V0VHlwZSgpLFxuICAgICAgICAgICAgICBsZWZ0VmFyaWFibGVUeXBlRXF1YWxUb09yU3VwZXJUeXBlT2ZSaWdodFRlcm1UeXBlID0gbGVmdFZhcmlhYmxlVHlwZS5pc0VxdWFsVG9PclN1cGVyVHlwZU9mKHJpZ2h0VGVybVR5cGUpO1xuXG4gICAgICAgIGlmICghbGVmdFZhcmlhYmxlVHlwZUVxdWFsVG9PclN1cGVyVHlwZU9mUmlnaHRUZXJtVHlwZSkge1xuICAgICAgICAgIGNvbnN0IHJpZ2h0VGVybVN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKHJpZ2h0VGVybU5vZGUpLFxuICAgICAgICAgICAgICAgIHJpZ2h0VGVybVR5cGVOYW1lID0gcmlnaHRUZXJtVHlwZS5nZXROYW1lKCksXG4gICAgICAgICAgICAgICAgbGVmdFZhcmlhYmxlVHlwZU5hbWUgPSBsZWZ0VmFyaWFibGVUeXBlLmdldE5hbWUoKTtcblxuICAgICAgICAgIGNvbnRleHQuZXJyb3IoYFRoZSBsZWZ0ICcke2xlZnRWYXJpYWJsZU5hbWV9JyB2YXJpYWJsZSdzICcke2xlZnRWYXJpYWJsZVR5cGVOYW1lfScgdHlwZSBpcyBub3QgZXF1YWwgdG8gb3IgYSBzdXBlci10eXBlIG9mIHRoZSByaWdodCAnJHtyaWdodFRlcm1TdHJpbmd9JyB0ZXJtJ3MgJyR7cmlnaHRUZXJtVHlwZU5hbWV9JyB0eXBlLmAsIHN0YXRlbWVudE5vZGUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHN0YXRlbWVudFZlcmlmaWVkQXNFcXVhbGl0eSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAocmlnaHRUZXJtVmVyaWZpZWRBc1ZhcmlhYmxlKSB7XG4gICAgICAgIGNvbnN0IHR5cGVzID0gW107XG5cbiAgICAgICAgdmVyaWZ5VGVybShsZWZ0VGVybU5vZGUsIHR5cGVzLCBjb250ZXh0KTtcblxuICAgICAgICBjb25zdCBmaXJzdFR5cGUgPSBmaXJzdCh0eXBlcyksXG4gICAgICAgICAgICAgIGZpcnN0VmFyaWFibGUgPSBmaXJzdCh2YXJpYWJsZXMpLFxuICAgICAgICAgICAgICBsZWZ0VGVybVR5cGUgPSBmaXJzdFR5cGUsICAvLy9cbiAgICAgICAgICAgICAgcmlnaHRWYXJpYWJsZSA9IGZpcnN0VmFyaWFibGUsIC8vL1xuICAgICAgICAgICAgICByaWdodFZhcmlhYmxlTmFtZSA9IHJpZ2h0VmFyaWFibGUuZ2V0TmFtZSgpLFxuICAgICAgICAgICAgICByaWdodFZhcmlhYmxlVHlwZSA9IHJpZ2h0VmFyaWFibGUuZ2V0VHlwZSgpLFxuICAgICAgICAgICAgICByaWdodFZhcmlhYmxlVHlwZUVxdWFsVG9PclN1cGVyVHlwZU9mUmlnaHRUZXJtVHlwZSA9IHJpZ2h0VmFyaWFibGVUeXBlLmlzRXF1YWxUb09yU3VwZXJUeXBlT2YobGVmdFRlcm1UeXBlKTtcblxuICAgICAgICBpZiAoIXJpZ2h0VmFyaWFibGVUeXBlRXF1YWxUb09yU3VwZXJUeXBlT2ZSaWdodFRlcm1UeXBlKSB7XG4gICAgICAgICAgY29uc3QgbGVmdFRlcm1TdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhsZWZ0VGVybU5vZGUpLFxuICAgICAgICAgICAgICAgIGxlZnRUZXJtVHlwZU5hbWUgPSBsZWZ0VGVybVR5cGUuZ2V0TmFtZSgpLFxuICAgICAgICAgICAgICAgIHJpZ2h0VmFyaWFibGVUeXBlTmFtZSA9IHJpZ2h0VmFyaWFibGVUeXBlLmdldE5hbWUoKTtcblxuICAgICAgICAgIGNvbnRleHQuZXJyb3IoYFRoZSByaWdodCAnJHtyaWdodFZhcmlhYmxlTmFtZX0nIHZhcmlhYmxlJ3MgJyR7cmlnaHRWYXJpYWJsZVR5cGVOYW1lfScgdHlwZSBpcyBub3QgZXF1YWwgdG8gb3IgYSBzdXBlci10eXBlIG9mIHRoZSBsZWZ0ICcke2xlZnRUZXJtU3RyaW5nfScgdGVybSdzICcke2xlZnRUZXJtVHlwZU5hbWV9JyB0eXBlLmAsIHN0YXRlbWVudE5vZGUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHN0YXRlbWVudFZlcmlmaWVkQXNFcXVhbGl0eSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IHR5cGVzID0gW107XG5cbiAgICAgICAgdmVyaWZ5VGVybShsZWZ0VGVybU5vZGUsIHR5cGVzLCBjb250ZXh0KTtcblxuICAgICAgICB2ZXJpZnlUZXJtKHJpZ2h0VGVybU5vZGUsIHR5cGVzLCBjb250ZXh0KTtcblxuICAgICAgICBjb25zdCBmaXJzdFR5cGUgPSBmaXJzdCh0eXBlcyksXG4gICAgICAgICAgICAgIHNlY29uZFR5cGUgPSBzZWNvbmQodHlwZXMpLFxuICAgICAgICAgICAgICBsZWZ0VGVybVR5cGUgPSBmaXJzdFR5cGUsIC8vL1xuICAgICAgICAgICAgICByaWdodFRlcm1UeXBlID0gc2Vjb25kVHlwZSwgLy8vXG4gICAgICAgICAgICAgIGxlZnRUZXJtVHlwZUVxdWFsVG9PclN1YlR5cGVPZk9mU3VwZXJUeXBlT2YgPSBsZWZ0VGVybVR5cGUuaXNFcXVhbFRvT3JTdWJUeXBlT2ZPZlN1cGVyVHlwZU9mKHJpZ2h0VGVybVR5cGUpO1xuXG4gICAgICAgIGlmICghbGVmdFRlcm1UeXBlRXF1YWxUb09yU3ViVHlwZU9mT2ZTdXBlclR5cGVPZikge1xuICAgICAgICAgIGNvbnN0IGxlZnRUZXJtU3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobGVmdFRlcm1Ob2RlKSxcbiAgICAgICAgICAgICAgICByaWdodFRlcm1TdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhyaWdodFRlcm1Ob2RlKSxcbiAgICAgICAgICAgICAgICBsZWZ0VGVybVR5cGVOYW1lID0gbGVmdFRlcm1UeXBlLmdldE5hbWUoKSxcbiAgICAgICAgICAgICAgICByaWdodFRlcm1UeXBlTmFtZSA9IHJpZ2h0VGVybVR5cGUuZ2V0TmFtZSgpO1xuXG4gICAgICAgICAgY29udGV4dC5lcnJvcihgVGhlIGxlZnQgJyR7bGVmdFRlcm1TdHJpbmd9JyB0ZXJtJ3MgJyR7bGVmdFRlcm1UeXBlTmFtZX0nIHR5cGUgaXMgbm90IGVxdWFsIHRvLCBhIHN1Yi10eXBlIG9mIG9yIGEgc3VwZXItdHlwZSBvZiB0aGUgcmlnaHQgJyR7cmlnaHRUZXJtU3RyaW5nfScgdGVybSdzICcke3JpZ2h0VGVybVR5cGVOYW1lfScgdHlwZS5gLCBzdGF0ZW1lbnROb2RlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBzdGF0ZW1lbnRWZXJpZmllZEFzRXF1YWxpdHkgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgaWYgKHN0YXRlbWVudFZlcmlmaWVkQXNFcXVhbGl0eSkge1xuICAgIGNvbnN0IHN0YXRlbWVudFN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKHN0YXRlbWVudE5vZGUpO1xuXG4gICAgY29udGV4dC5pbmZvKGBWZXJpZmllZCB0aGUgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50IGFzIGFuIGVxdWFsaXR5LmAsIHN0YXRlbWVudE5vZGUpO1xuICB9XG5cbiAgcmV0dXJuIHN0YXRlbWVudFZlcmlmaWVkQXNFcXVhbGl0eTtcbn1cbiJdLCJuYW1lcyI6WyJzdGF0ZW1lbnRWZXJpZmllciIsInZlcmlmeVN0YXRlbWVudCIsInZlcmlmeVN0YXRlbWVudEFnYWluc3RDb21iaW5hdG9ycyIsInZlcmlmeVN0YXRlbWVudEFnYWluc3RDb21iaW5hdG9yIiwidGVybU5vZGVRdWVyeSIsIm5vZGVRdWVyeSIsInR5cGVOb2RlUXVlcnkiLCJtZXRhVHlwZU5vZGVRdWVyeSIsInN0YXRlbWVudE5vZGVRdWVyeSIsInR5cGVJbmZlcmVuY2VOb2RlUXVlcnkiLCJ0eXBlQXNzZXJ0aW9uTm9kZVF1ZXJ5IiwibWV0YVR5cGVUZXJtaW5hbE5vZGVRdWVyeSIsIlN0YXRlbWVudFZlcmlmaWVyIiwidmVyaWZ5Tm9uVGVybWluYWxOb2RlIiwibm9uVGVybWluYWxOb2RlQSIsIm5vblRlcm1pbmFsTm9kZUIiLCJjb250ZXh0Iiwibm9uVGVybWluYWxOb2RlVmVyaWZpZWQiLCJub25UZXJtaW5hbE5vZGUiLCJjb21iaW5hdG9yTm9uVGVybWluYWxOb2RlIiwicnVsZU5hbWUiLCJnZXRSdWxlTmFtZSIsImNvbWJpbmF0b3JSdWxlTmFtZSIsIkFSR1VNRU5UX1JVTEVfTkFNRSIsImFyZ3VtZW50Tm9kZSIsImNvbnN0cnVjdG9yQXJndW1lbnROb2RlIiwiYXJndW1lbnROb2RlVmVyaWZpZWQiLCJ0ZXJtVmVyaWZpZXIiLCJ2ZXJpZnlBcmd1bWVudE5vZGUiLCJNRVRBX0FSR1VNRU5UX1JVTEVfTkFNRSIsIm1ldGFBcmd1bWVudE5vZGUiLCJjb21iaW5hdG9yTWV0YWFyZ3VtZW50Tm9kZSIsIm1ldGFBcmd1bWVudE5vZGVWZXJpZmllZCIsInZlcmlmeU1ldGFhcmd1bWVudE5vZGUiLCJjaGlsZE5vZGVzIiwiZ2V0Q2hpbGROb2RlcyIsImNvbWJpbmF0b3JDaGlsZE5vZGVzIiwibm9kZXNBIiwibm9kZXNCIiwibm9kZXNWZXJpZmllZCIsInZlcmlmeU5vZGVzIiwiY29tYmluYXRvckFyZ3VtZW50Tm9kZSIsInRlcm1Ob2RlIiwiYXJndW1lbnRTdHJpbmciLCJub2RlQXNTdHJpbmciLCJlcnJvciIsInR5cGVzIiwidGVybVZlcmlmaWVkIiwidmVyaWZ5VGVybSIsImZpcnN0VHlwZSIsImZpcnN0IiwidGVybVR5cGUiLCJ0eXBlTm9kZSIsInR5cGVOYW1lIiwidHlwZU5hbWVGcm9tVHlwZU5vZGUiLCJ0eXBlIiwiT0JKRUNUX1RZUEVfTkFNRSIsIm9iamVjdFR5cGUiLCJmaW5kVHlwZUJ5VHlwZU5hbWUiLCJzdGF0ZW1lbnRUeXBlRXF1YWxUb09yU3ViVHlwZU9mVHlwZSIsImlzRXF1YWxUb09yU3ViVHlwZU9mIiwic3RhdGVtZW50Tm9kZSIsImNvbWJpbmF0b3JNZXRhVFlwZU5vZGUiLCJtZXRhQXJndW1lbnRTdHJpbmciLCJjb21iaW5hdG9yTWV0YWFyZ3VtZW50U3RyaW5nIiwiY29tYmluYXRvck1ldGFUeXBlVGVybWluYWxOb2RlIiwiY29udGVudCIsImdldENvbnRlbnQiLCJjb250ZW50U3RhdGVtZW50TWV0YVR5cGUiLCJTVEFURU1FTlRfTUVUQV9UWVBFIiwiVmVyaWZpZXIiLCJhc3NpZ25tZW50cyIsImRlcml2ZWQiLCJzdGF0ZW1lbnRWZXJpZmllZCIsInN0YXRlbWVudFZlcmlmaWVkQWdhaW5zdENvbWJpbmF0b3JzIiwic3RhdGVtZW50VmVyaWZpZWRBc1R5cGVJbmZlcmVuY2UiLCJ2ZXJpZnlTdGF0ZW1lbnRBc1R5cGVJbmZlcmVuY2UiLCJzdGF0ZW1lbnRWZXJpZmllZEFzVHlwZUFzc2VydGlvbiIsInZlcmlmeVN0YXRlbWVudEFzVHlwZUFzc2VydGlvbiIsInN0YXRlbWVudFZlcmlmaWVkQXNFcXVhbGl0eSIsInZlcmlmeVN0YXRlbWVudEFzRXF1YWxpdHkiLCJjb21iaW5hdG9ycyIsImdldENvbWJpbmF0b3JzIiwiYnJhY2tldGVkQ29tYmluYXRvciIsImNvbWJpbmF0b3IiLCJmaW5kIiwiaW5kZXgiLCJzdGF0ZW1lbnRWZXJpZmllZEFnYWluc3RDb21iaW5hdG9yIiwiY29tYmluYXRvclN0YXRlbWVudE5vZGUiLCJnZXRTdGF0ZW1lbnROb2RlIiwidHlwZUluZmVyZW5jZU5vZGUiLCJ0eXBlSW5mZXJlbmNlU3RyaW5nIiwidHlwZUluZmVyZW5jZVZlcmlmaWVkIiwidmVyaWZ5VHlwZUluZmVyZW5jZSIsInR5cGVBc3NlcnRpb25Ob2RlIiwidHlwZUFzc2VydGlvblZlcmlmaWVkIiwidmVyaWZ5VHlwZUFzc2VydGlvbiIsImNvdW50IiwiZXF1YWxpdHlDb21iaW5hdG9yIiwiZXF1YWxpdHkiLCJFcXVhbGl0eSIsImZyb21TdGF0ZW1lbnROb2RlIiwiZXF1YWxpdGllcyIsImdldEVxdWFsaXRpZXMiLCJlcXVhbGl0eVZlcmlmaWVkIiwidmVyaWZ5IiwidmFyaWFibGVzIiwibGVmdFRlcm1Ob2RlIiwiZ2V0TGVmdFRlcm1Ob2RlIiwicmlnaHRUZXJtTm9kZSIsImdldFJpZ2h0VGVybU5vZGUiLCJsZWZ0VGVybVZlcmlmaWVkQXNWYXJpYWJsZSIsInZlcmlmeVRlcm1Bc1ZhcmlhYmxlIiwicmlnaHRUZXJtVmVyaWZpZWRBc1ZhcmlhYmxlIiwiZmlyc3RWYXJpYWJsZSIsInNlY29uZFZhcmlhYmxlIiwic2Vjb25kIiwibGVmdFZhcmlhYmxlIiwicmlnaHRWYXJpYWJsZSIsImxlZnRWYXJpYWJsZU5hbWUiLCJnZXROYW1lIiwibGVmdFZhcmlhYmxlVHlwZSIsImdldFR5cGUiLCJyaWdodFZhcmlhYmxlTmFtZSIsInJpZ2h0VmFyaWFibGVUeXBlIiwibGVmdFZhcmlhYmxlVHlwZUVxdWFsVG9PclN1YlR5cGVPZk9mU3VwZXJUeXBlT2ZSaWdodFZhcmlhYmxlVHlwZSIsImlzRXF1YWxUb09yU3ViVHlwZU9mT2ZTdXBlclR5cGVPZiIsImxlZnRWYXJpYWJsZVR5cGVOYW1lIiwicmlnaHRWYXJpYWJsZVR5cGVOYW1lIiwicmlnaHRUZXJtVHlwZSIsImxlZnRWYXJpYWJsZVR5cGVFcXVhbFRvT3JTdXBlclR5cGVPZlJpZ2h0VGVybVR5cGUiLCJpc0VxdWFsVG9PclN1cGVyVHlwZU9mIiwicmlnaHRUZXJtU3RyaW5nIiwicmlnaHRUZXJtVHlwZU5hbWUiLCJsZWZ0VGVybVR5cGUiLCJyaWdodFZhcmlhYmxlVHlwZUVxdWFsVG9PclN1cGVyVHlwZU9mUmlnaHRUZXJtVHlwZSIsImxlZnRUZXJtU3RyaW5nIiwibGVmdFRlcm1UeXBlTmFtZSIsInNlY29uZFR5cGUiLCJsZWZ0VGVybVR5cGVFcXVhbFRvT3JTdWJUeXBlT2ZPZlN1cGVyVHlwZU9mIiwic3RhdGVtZW50U3RyaW5nIiwiaW5mbyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7O0lBNElhQSxpQkFBaUI7ZUFBakJBOztJQUViLE9BNEJDO2VBNUJ1QkM7O0lBOEJSQyxpQ0FBaUM7ZUFBakNBOztJQXlCQUMsZ0NBQWdDO2VBQWhDQTs7OytEQW5NSzsrREFDQTs0REFDRTtnRUFDUTtnRUFDQztvRUFDQTsyREFDQTtxQkFFTDtxQkFFRzt5QkFDRzt5QkFDRztxQkFFWTt5QkFDWTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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