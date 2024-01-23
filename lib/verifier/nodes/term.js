"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
var _nodes = /*#__PURE__*/ _interop_require_default(require("../../verifier/nodes"));
var _array = require("../../utilities/array");
var _ruleNames = require("../../ruleNames");
var _query = require("../../utilities/query");
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
function _get(target, property, receiver) {
    if (typeof Reflect !== "undefined" && Reflect.get) {
        _get = Reflect.get;
    } else {
        _get = function get(target, property, receiver) {
            var base = _super_prop_base(target, property);
            if (!base) return;
            var desc = Object.getOwnPropertyDescriptor(base, property);
            if (desc.get) {
                return desc.get.call(receiver || target);
            }
            return desc.value;
        };
    }
    return _get(target, property, receiver || target);
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
function _super_prop_base(object, property) {
    while(!Object.prototype.hasOwnProperty.call(object, property)){
        object = _get_prototype_of(object);
        if (object === null) break;
    }
    return object;
}
function _type_of(obj) {
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
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
var termNodeQuery = (0, _query.nodeQuery)("/argument/term!"), typeNodeQuery = (0, _query.nodeQuery)("/argument/type!");
var TermNodesVerifier = /*#__PURE__*/ function(NodesVerifier) {
    _inherits(TermNodesVerifier, NodesVerifier);
    var _super = _create_super(TermNodesVerifier);
    function TermNodesVerifier() {
        _class_call_check(this, TermNodesVerifier);
        return _super.apply(this, arguments);
    }
    _create_class(TermNodesVerifier, [
        {
            key: "verifyNonTerminalNode",
            value: function verifyNonTerminalNode(nonTerminalNode, constructorNonTerminalNode, context, verifyAhead) {
                var nonTerminalNodeVerified = false;
                var ruleName = nonTerminalNode.getRuleName(), constructorRuleName = constructorNonTerminalNode.getRuleName(); ///
                if (ruleName === constructorRuleName) {
                    switch(ruleName){
                        case _ruleNames.ARGUMENT_RULE_NAME:
                            {
                                var argumentNode = nonTerminalNode, constructorArgumentNode = constructorNonTerminalNode, argumentNodeVerified = this.verifyArgumentNode(argumentNode, constructorArgumentNode, context, verifyAhead);
                                nonTerminalNodeVerified = argumentNodeVerified; ///
                                break;
                            }
                        default:
                            {
                                nonTerminalNodeVerified = _get(_get_prototype_of(TermNodesVerifier.prototype), "verifyNonTerminalNode", this).call(this, nonTerminalNode, constructorNonTerminalNode, context, verifyAhead);
                                break;
                            }
                    }
                }
                return nonTerminalNodeVerified;
            }
        },
        {
            key: "verifyArgumentNode",
            value: function verifyArgumentNode(argumentNode, constructorArgumentNode, context, verifyAhead) {
                var argumentNodeVerified = false;
                var argumentString = context.nodeAsString(argumentNode);
                var typeNode = typeNodeQuery(argumentNode);
                if (typeNode !== null) {
                    context.debug("The '".concat(argumentString, "' argument should be a term, not a type."), argumentNode);
                } else {
                    var termNode = termNodeQuery(argumentNode);
                    if (!argumentNodeVerified) {
                        var constructorTermNode = termNodeQuery(constructorArgumentNode);
                        if (constructorTermNode !== null) {
                            var node = termNode, constructorNode = constructorTermNode, nodeVerified = this.verifyNode(node, constructorNode, context, verifyAhead);
                            argumentNodeVerified = nodeVerified; ///
                        }
                    }
                    if (!argumentNodeVerified) {
                        var constructorTypeNode = typeNodeQuery(constructorArgumentNode);
                        if (constructorTypeNode !== null) {
                            var verifyTerm = termNodesVerifier.verifyTerm, terms = [], termVerified = verifyTerm(termNode, terms, context, function() {
                                var verifiedAhead = false;
                                var constructorTypeName = (0, _query.typeNameFromTypeNode)(constructorTypeNode), firstTerm = (0, _array.first)(terms), term = firstTerm, termType = term.getType(), constructorType = context.findTypeByTypeName(constructorTypeName), termTypeEqualToOrSubTypeOfType = termType.isEqualToOrSubTypeOf(constructorType);
                                if (termTypeEqualToOrSubTypeOfType) {
                                    verifiedAhead = verifyAhead();
                                }
                                return verifiedAhead;
                            });
                            argumentNodeVerified = termVerified; ///
                        }
                    }
                }
                return argumentNodeVerified;
            }
        }
    ]);
    return TermNodesVerifier;
}(_nodes.default);
var termNodesVerifier = new TermNodesVerifier();
var _default = termNodesVerifier;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy92ZXJpZmllci9ub2Rlcy90ZXJtLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgTm9kZXNWZXJpZmllciBmcm9tIFwiLi4vLi4vdmVyaWZpZXIvbm9kZXNcIjtcblxuaW1wb3J0IHsgZmlyc3QgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL2FycmF5XCI7XG5pbXBvcnQgeyBBUkdVTUVOVF9SVUxFX05BTUUgfSBmcm9tIFwiLi4vLi4vcnVsZU5hbWVzXCI7XG5pbXBvcnQgeyBub2RlUXVlcnksIHR5cGVOYW1lRnJvbVR5cGVOb2RlIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9xdWVyeVwiO1xuXG5jb25zdCB0ZXJtTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL2FyZ3VtZW50L3Rlcm0hXCIpLFxuICAgICAgdHlwZU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9hcmd1bWVudC90eXBlIVwiKTtcblxuY2xhc3MgVGVybU5vZGVzVmVyaWZpZXIgZXh0ZW5kcyBOb2Rlc1ZlcmlmaWVyIHtcbiAgdmVyaWZ5Tm9uVGVybWluYWxOb2RlKG5vblRlcm1pbmFsTm9kZSwgY29uc3RydWN0b3JOb25UZXJtaW5hbE5vZGUsIGNvbnRleHQsIHZlcmlmeUFoZWFkKSB7XG4gICAgbGV0IG5vblRlcm1pbmFsTm9kZVZlcmlmaWVkID0gZmFsc2U7XG5cbiAgICBjb25zdCBydWxlTmFtZSA9IG5vblRlcm1pbmFsTm9kZS5nZXRSdWxlTmFtZSgpLCAvLy9cbiAgICAgICAgICBjb25zdHJ1Y3RvclJ1bGVOYW1lID0gY29uc3RydWN0b3JOb25UZXJtaW5hbE5vZGUuZ2V0UnVsZU5hbWUoKTsgLy8vXG5cbiAgICBpZiAocnVsZU5hbWUgPT09IGNvbnN0cnVjdG9yUnVsZU5hbWUpIHtcbiAgICAgIHN3aXRjaCAocnVsZU5hbWUpIHtcbiAgICAgICAgY2FzZSBBUkdVTUVOVF9SVUxFX05BTUU6IHtcbiAgICAgICAgICBjb25zdCBhcmd1bWVudE5vZGUgPSBub25UZXJtaW5hbE5vZGUsIC8vL1xuICAgICAgICAgICAgICAgIGNvbnN0cnVjdG9yQXJndW1lbnROb2RlID0gY29uc3RydWN0b3JOb25UZXJtaW5hbE5vZGUsIC8vL1xuICAgICAgICAgICAgICAgIGFyZ3VtZW50Tm9kZVZlcmlmaWVkID0gdGhpcy52ZXJpZnlBcmd1bWVudE5vZGUoYXJndW1lbnROb2RlLCBjb25zdHJ1Y3RvckFyZ3VtZW50Tm9kZSwgY29udGV4dCwgdmVyaWZ5QWhlYWQpO1xuXG4gICAgICAgICAgbm9uVGVybWluYWxOb2RlVmVyaWZpZWQgPSBhcmd1bWVudE5vZGVWZXJpZmllZDsgLy8vXG5cbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuXG4gICAgICAgIGRlZmF1bHQ6IHtcbiAgICAgICAgICBub25UZXJtaW5hbE5vZGVWZXJpZmllZCA9IHN1cGVyLnZlcmlmeU5vblRlcm1pbmFsTm9kZShub25UZXJtaW5hbE5vZGUsIGNvbnN0cnVjdG9yTm9uVGVybWluYWxOb2RlLCBjb250ZXh0LCB2ZXJpZnlBaGVhZCk7XG5cbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBub25UZXJtaW5hbE5vZGVWZXJpZmllZDtcbiAgfVxuXG4gIHZlcmlmeUFyZ3VtZW50Tm9kZShhcmd1bWVudE5vZGUsIGNvbnN0cnVjdG9yQXJndW1lbnROb2RlLCBjb250ZXh0LCB2ZXJpZnlBaGVhZCkge1xuICAgIGxldCBhcmd1bWVudE5vZGVWZXJpZmllZCA9IGZhbHNlO1xuXG4gICAgY29uc3QgYXJndW1lbnRTdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhhcmd1bWVudE5vZGUpO1xuXG4gICAgY29uc3QgdHlwZU5vZGUgPSB0eXBlTm9kZVF1ZXJ5KGFyZ3VtZW50Tm9kZSk7XG5cbiAgICBpZiAodHlwZU5vZGUgIT09IG51bGwpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYFRoZSAnJHthcmd1bWVudFN0cmluZ30nIGFyZ3VtZW50IHNob3VsZCBiZSBhIHRlcm0sIG5vdCBhIHR5cGUuYCwgYXJndW1lbnROb2RlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgdGVybU5vZGUgPSB0ZXJtTm9kZVF1ZXJ5KGFyZ3VtZW50Tm9kZSk7XG5cbiAgICAgIGlmICghYXJndW1lbnROb2RlVmVyaWZpZWQpIHtcbiAgICAgICAgY29uc3QgY29uc3RydWN0b3JUZXJtTm9kZSA9IHRlcm1Ob2RlUXVlcnkoY29uc3RydWN0b3JBcmd1bWVudE5vZGUpO1xuXG4gICAgICAgIGlmIChjb25zdHJ1Y3RvclRlcm1Ob2RlICE9PSBudWxsKSB7XG4gICAgICAgICAgY29uc3Qgbm9kZSA9IHRlcm1Ob2RlLCAgLy8vXG4gICAgICAgICAgICAgICAgY29uc3RydWN0b3JOb2RlID0gY29uc3RydWN0b3JUZXJtTm9kZSwgIC8vL1xuICAgICAgICAgICAgICAgIG5vZGVWZXJpZmllZCA9IHRoaXMudmVyaWZ5Tm9kZShub2RlLCBjb25zdHJ1Y3Rvck5vZGUsIGNvbnRleHQsIHZlcmlmeUFoZWFkKTtcblxuICAgICAgICAgIGFyZ3VtZW50Tm9kZVZlcmlmaWVkID0gbm9kZVZlcmlmaWVkOyAgLy8vXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKCFhcmd1bWVudE5vZGVWZXJpZmllZCkge1xuICAgICAgICBjb25zdCBjb25zdHJ1Y3RvclR5cGVOb2RlID0gdHlwZU5vZGVRdWVyeShjb25zdHJ1Y3RvckFyZ3VtZW50Tm9kZSk7XG5cbiAgICAgICAgaWYgKGNvbnN0cnVjdG9yVHlwZU5vZGUgIT09IG51bGwpIHtcbiAgICAgICAgICBjb25zdCB7IHZlcmlmeVRlcm0gfSA9IHRlcm1Ob2Rlc1ZlcmlmaWVyLFxuICAgICAgICAgICAgICAgIHRlcm1zID0gW10sXG4gICAgICAgICAgICAgICAgdGVybVZlcmlmaWVkID0gdmVyaWZ5VGVybSh0ZXJtTm9kZSwgdGVybXMsIGNvbnRleHQsICgpID0+IHtcbiAgICAgICAgICAgICAgICAgIGxldCB2ZXJpZmllZEFoZWFkID0gZmFsc2U7XG5cbiAgICAgICAgICAgICAgICAgIGNvbnN0IGNvbnN0cnVjdG9yVHlwZU5hbWUgPSB0eXBlTmFtZUZyb21UeXBlTm9kZShjb25zdHJ1Y3RvclR5cGVOb2RlKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpcnN0VGVybSA9IGZpcnN0KHRlcm1zKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRlcm0gPSBmaXJzdFRlcm0sIC8vL1xuICAgICAgICAgICAgICAgICAgICAgICAgdGVybVR5cGUgPSB0ZXJtLmdldFR5cGUoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0cnVjdG9yVHlwZSA9IGNvbnRleHQuZmluZFR5cGVCeVR5cGVOYW1lKGNvbnN0cnVjdG9yVHlwZU5hbWUpLFxuICAgICAgICAgICAgICAgICAgICAgICAgdGVybVR5cGVFcXVhbFRvT3JTdWJUeXBlT2ZUeXBlID0gdGVybVR5cGUuaXNFcXVhbFRvT3JTdWJUeXBlT2YoY29uc3RydWN0b3JUeXBlKTtcblxuICAgICAgICAgICAgICAgICAgaWYgKHRlcm1UeXBlRXF1YWxUb09yU3ViVHlwZU9mVHlwZSkge1xuICAgICAgICAgICAgICAgICAgICB2ZXJpZmllZEFoZWFkID0gdmVyaWZ5QWhlYWQoKTtcbiAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgcmV0dXJuIHZlcmlmaWVkQWhlYWQ7XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICBhcmd1bWVudE5vZGVWZXJpZmllZCA9IHRlcm1WZXJpZmllZDsgIC8vL1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGFyZ3VtZW50Tm9kZVZlcmlmaWVkO1xuICB9XG59XG5cbmNvbnN0IHRlcm1Ob2Rlc1ZlcmlmaWVyID0gbmV3IFRlcm1Ob2Rlc1ZlcmlmaWVyKCk7XG5cbmV4cG9ydCBkZWZhdWx0IHRlcm1Ob2Rlc1ZlcmlmaWVyO1xuIl0sIm5hbWVzIjpbInRlcm1Ob2RlUXVlcnkiLCJub2RlUXVlcnkiLCJ0eXBlTm9kZVF1ZXJ5IiwiVGVybU5vZGVzVmVyaWZpZXIiLCJ2ZXJpZnlOb25UZXJtaW5hbE5vZGUiLCJub25UZXJtaW5hbE5vZGUiLCJjb25zdHJ1Y3Rvck5vblRlcm1pbmFsTm9kZSIsImNvbnRleHQiLCJ2ZXJpZnlBaGVhZCIsIm5vblRlcm1pbmFsTm9kZVZlcmlmaWVkIiwicnVsZU5hbWUiLCJnZXRSdWxlTmFtZSIsImNvbnN0cnVjdG9yUnVsZU5hbWUiLCJBUkdVTUVOVF9SVUxFX05BTUUiLCJhcmd1bWVudE5vZGUiLCJjb25zdHJ1Y3RvckFyZ3VtZW50Tm9kZSIsImFyZ3VtZW50Tm9kZVZlcmlmaWVkIiwidmVyaWZ5QXJndW1lbnROb2RlIiwiYXJndW1lbnRTdHJpbmciLCJub2RlQXNTdHJpbmciLCJ0eXBlTm9kZSIsImRlYnVnIiwidGVybU5vZGUiLCJjb25zdHJ1Y3RvclRlcm1Ob2RlIiwibm9kZSIsImNvbnN0cnVjdG9yTm9kZSIsIm5vZGVWZXJpZmllZCIsInZlcmlmeU5vZGUiLCJjb25zdHJ1Y3RvclR5cGVOb2RlIiwidmVyaWZ5VGVybSIsInRlcm1Ob2Rlc1ZlcmlmaWVyIiwidGVybXMiLCJ0ZXJtVmVyaWZpZWQiLCJ2ZXJpZmllZEFoZWFkIiwiY29uc3RydWN0b3JUeXBlTmFtZSIsInR5cGVOYW1lRnJvbVR5cGVOb2RlIiwiZmlyc3RUZXJtIiwiZmlyc3QiLCJ0ZXJtIiwidGVybVR5cGUiLCJnZXRUeXBlIiwiY29uc3RydWN0b3JUeXBlIiwiZmluZFR5cGVCeVR5cGVOYW1lIiwidGVybVR5cGVFcXVhbFRvT3JTdWJUeXBlT2ZUeXBlIiwiaXNFcXVhbFRvT3JTdWJUeXBlT2YiLCJOb2Rlc1ZlcmlmaWVyIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFtR0E7OztlQUFBOzs7NERBakcwQjtxQkFFSjt5QkFDYTtxQkFDYTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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