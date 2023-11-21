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
        return _default;
    },
    verifyArgument: function() {
        return verifyArgument;
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
                                var argumentNode = nonTerminalNode, constructorArgumentNode = constructorNonTerminalNode, argumentVerified = verifyArgument(argumentNode, constructorArgumentNode, context, verifyAhead), argumentNodeVerified = argumentVerified; ///
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
        }
    ]);
    return TermNodesVerifier;
}(_nodes.default);
var termNodesVerifier = new TermNodesVerifier();
var _default = termNodesVerifier;
function verifyArgument(argumentNode, constructorArgumentNode, context, verifyAhead) {
    var argumentVerified = false;
    var argumentString = context.nodeAsString(argumentNode);
    context.trace("Verifying the '".concat(argumentString, "' argument..."), argumentNode);
    var typeNode = typeNodeQuery(argumentNode);
    if (typeNode !== null) {
        context.info("The '".concat(argumentString, "' argument should be a term, not a type"), argumentNode);
    } else {
        var termNode = termNodeQuery(argumentNode);
        if (!argumentVerified) {
            var constructorTermNode = termNodeQuery(constructorArgumentNode);
            if (constructorTermNode !== null) {
                var node = termNode, constructorNode = constructorTermNode, nodeVerified = this.verifyNode(node, constructorNode, context, verifyAhead);
                argumentVerified = nodeVerified; ///
            }
        }
        if (!argumentVerified) {
            var constructorTypeNode = typeNodeQuery(constructorArgumentNode);
            if (constructorTypeNode !== null) {
                var verifyTerm = termNodesVerifier.verifyTerm, types = [], termVerified = verifyTerm(termNode, types, context, function() {
                    var verifiedAhead = false;
                    var constructorTypeName = (0, _query.typeNameFromTypeNode)(constructorTypeNode), firstType = (0, _array.first)(types), termType = firstType, termTypeName = termType.getName(), constructorType = context.findTypeByTypeName(constructorTypeName), termTypeEqualToOrSubTypeOfType = termType.isEqualToOrSubTypeOf(constructorType);
                    if (termTypeEqualToOrSubTypeOfType) {
                        var termString = context.nodeAsString(termNode);
                        context.trace("The '".concat(termTypeName, "' type of the '").concat(termString, "' term is equal to or a sub-type of the constructor's '").concat(constructorTypeName, "' type."), argumentNode);
                        verifiedAhead = verifyAhead();
                    }
                    return verifiedAhead;
                });
                argumentVerified = termVerified; ///
            }
        }
    }
    if (argumentVerified) {
        context.debug("...verified the '".concat(argumentString, "' argument."), argumentNode);
    }
    return argumentVerified;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy92ZXJpZmllci9ub2Rlcy90ZXJtLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgTm9kZXNWZXJpZmllciBmcm9tIFwiLi4vLi4vdmVyaWZpZXIvbm9kZXNcIjtcblxuaW1wb3J0IHsgZmlyc3QgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL2FycmF5XCI7XG5pbXBvcnQgeyBBUkdVTUVOVF9SVUxFX05BTUUgfSBmcm9tIFwiLi4vLi4vcnVsZU5hbWVzXCI7XG5pbXBvcnQgeyBub2RlUXVlcnksIHR5cGVOYW1lRnJvbVR5cGVOb2RlIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9xdWVyeVwiO1xuXG5jb25zdCB0ZXJtTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL2FyZ3VtZW50L3Rlcm0hXCIpLFxuICAgICAgdHlwZU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9hcmd1bWVudC90eXBlIVwiKTtcblxuY2xhc3MgVGVybU5vZGVzVmVyaWZpZXIgZXh0ZW5kcyBOb2Rlc1ZlcmlmaWVyIHtcbiAgdmVyaWZ5Tm9uVGVybWluYWxOb2RlKG5vblRlcm1pbmFsTm9kZSwgY29uc3RydWN0b3JOb25UZXJtaW5hbE5vZGUsIGNvbnRleHQsIHZlcmlmeUFoZWFkKSB7XG4gICAgbGV0IG5vblRlcm1pbmFsTm9kZVZlcmlmaWVkID0gZmFsc2U7XG5cbiAgICBjb25zdCBydWxlTmFtZSA9IG5vblRlcm1pbmFsTm9kZS5nZXRSdWxlTmFtZSgpLCAvLy9cbiAgICAgICAgICBjb25zdHJ1Y3RvclJ1bGVOYW1lID0gY29uc3RydWN0b3JOb25UZXJtaW5hbE5vZGUuZ2V0UnVsZU5hbWUoKTsgLy8vXG5cbiAgICBpZiAocnVsZU5hbWUgPT09IGNvbnN0cnVjdG9yUnVsZU5hbWUpIHtcbiAgICAgIHN3aXRjaCAocnVsZU5hbWUpIHtcbiAgICAgICAgY2FzZSBBUkdVTUVOVF9SVUxFX05BTUU6IHtcbiAgICAgICAgICBjb25zdCBhcmd1bWVudE5vZGUgPSBub25UZXJtaW5hbE5vZGUsIC8vL1xuICAgICAgICAgICAgICAgIGNvbnN0cnVjdG9yQXJndW1lbnROb2RlID0gY29uc3RydWN0b3JOb25UZXJtaW5hbE5vZGUsIC8vL1xuICAgICAgICAgICAgICAgIGFyZ3VtZW50VmVyaWZpZWQgPSB2ZXJpZnlBcmd1bWVudChhcmd1bWVudE5vZGUsIGNvbnN0cnVjdG9yQXJndW1lbnROb2RlLCBjb250ZXh0LCB2ZXJpZnlBaGVhZCksXG4gICAgICAgICAgICAgICAgYXJndW1lbnROb2RlVmVyaWZpZWQgPSBhcmd1bWVudFZlcmlmaWVkOyAgLy8vXG5cbiAgICAgICAgICBub25UZXJtaW5hbE5vZGVWZXJpZmllZCA9IGFyZ3VtZW50Tm9kZVZlcmlmaWVkOyAvLy9cblxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG5cbiAgICAgICAgZGVmYXVsdDoge1xuICAgICAgICAgIG5vblRlcm1pbmFsTm9kZVZlcmlmaWVkID0gc3VwZXIudmVyaWZ5Tm9uVGVybWluYWxOb2RlKG5vblRlcm1pbmFsTm9kZSwgY29uc3RydWN0b3JOb25UZXJtaW5hbE5vZGUsIGNvbnRleHQsIHZlcmlmeUFoZWFkKTtcblxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG5vblRlcm1pbmFsTm9kZVZlcmlmaWVkO1xuICB9XG59XG5cbmNvbnN0IHRlcm1Ob2Rlc1ZlcmlmaWVyID0gbmV3IFRlcm1Ob2Rlc1ZlcmlmaWVyKCk7XG5cbmV4cG9ydCBkZWZhdWx0IHRlcm1Ob2Rlc1ZlcmlmaWVyO1xuXG5leHBvcnQgZnVuY3Rpb24gdmVyaWZ5QXJndW1lbnQoYXJndW1lbnROb2RlLCBjb25zdHJ1Y3RvckFyZ3VtZW50Tm9kZSwgY29udGV4dCwgdmVyaWZ5QWhlYWQpIHtcbiAgbGV0IGFyZ3VtZW50VmVyaWZpZWQgPSBmYWxzZTtcblxuICBjb25zdCBhcmd1bWVudFN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKGFyZ3VtZW50Tm9kZSk7XG5cbiAgY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHthcmd1bWVudFN0cmluZ30nIGFyZ3VtZW50Li4uYCwgYXJndW1lbnROb2RlKTtcblxuICBjb25zdCB0eXBlTm9kZSA9IHR5cGVOb2RlUXVlcnkoYXJndW1lbnROb2RlKTtcblxuICBpZiAodHlwZU5vZGUgIT09IG51bGwpIHtcbiAgICBjb250ZXh0LmluZm8oYFRoZSAnJHthcmd1bWVudFN0cmluZ30nIGFyZ3VtZW50IHNob3VsZCBiZSBhIHRlcm0sIG5vdCBhIHR5cGVgLCBhcmd1bWVudE5vZGUpO1xuICB9IGVsc2Uge1xuICAgIGNvbnN0IHRlcm1Ob2RlID0gdGVybU5vZGVRdWVyeShhcmd1bWVudE5vZGUpO1xuXG4gICAgaWYgKCFhcmd1bWVudFZlcmlmaWVkKSB7XG4gICAgICBjb25zdCBjb25zdHJ1Y3RvclRlcm1Ob2RlID0gdGVybU5vZGVRdWVyeShjb25zdHJ1Y3RvckFyZ3VtZW50Tm9kZSk7XG5cbiAgICAgIGlmIChjb25zdHJ1Y3RvclRlcm1Ob2RlICE9PSBudWxsKSB7XG4gICAgICAgIGNvbnN0IG5vZGUgPSB0ZXJtTm9kZSwgIC8vL1xuICAgICAgICAgICAgICBjb25zdHJ1Y3Rvck5vZGUgPSBjb25zdHJ1Y3RvclRlcm1Ob2RlLCAgLy8vXG4gICAgICAgICAgICAgIG5vZGVWZXJpZmllZCA9IHRoaXMudmVyaWZ5Tm9kZShub2RlLCBjb25zdHJ1Y3Rvck5vZGUsIGNvbnRleHQsIHZlcmlmeUFoZWFkKTtcblxuICAgICAgICBhcmd1bWVudFZlcmlmaWVkID0gbm9kZVZlcmlmaWVkOyAgLy8vXG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKCFhcmd1bWVudFZlcmlmaWVkKSB7XG4gICAgICBjb25zdCBjb25zdHJ1Y3RvclR5cGVOb2RlID0gdHlwZU5vZGVRdWVyeShjb25zdHJ1Y3RvckFyZ3VtZW50Tm9kZSk7XG5cbiAgICAgIGlmIChjb25zdHJ1Y3RvclR5cGVOb2RlICE9PSBudWxsKSB7XG4gICAgICAgIGNvbnN0IHsgdmVyaWZ5VGVybSB9ID0gdGVybU5vZGVzVmVyaWZpZXIsXG4gICAgICAgICAgICAgIHR5cGVzID0gW10sXG4gICAgICAgICAgICAgIHRlcm1WZXJpZmllZCA9IHZlcmlmeVRlcm0odGVybU5vZGUsIHR5cGVzLCBjb250ZXh0LCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IHZlcmlmaWVkQWhlYWQgPSBmYWxzZTtcblxuICAgICAgICAgICAgICAgIGNvbnN0IGNvbnN0cnVjdG9yVHlwZU5hbWUgPSB0eXBlTmFtZUZyb21UeXBlTm9kZShjb25zdHJ1Y3RvclR5cGVOb2RlKSxcbiAgICAgICAgICAgICAgICAgICAgICBmaXJzdFR5cGUgPSBmaXJzdCh0eXBlcyksXG4gICAgICAgICAgICAgICAgICAgICAgdGVybVR5cGUgPSBmaXJzdFR5cGUsIC8vL1xuICAgICAgICAgICAgICAgICAgICAgIHRlcm1UeXBlTmFtZSA9IHRlcm1UeXBlLmdldE5hbWUoKSxcbiAgICAgICAgICAgICAgICAgICAgICBjb25zdHJ1Y3RvclR5cGUgPSBjb250ZXh0LmZpbmRUeXBlQnlUeXBlTmFtZShjb25zdHJ1Y3RvclR5cGVOYW1lKSxcbiAgICAgICAgICAgICAgICAgICAgICB0ZXJtVHlwZUVxdWFsVG9PclN1YlR5cGVPZlR5cGUgPSB0ZXJtVHlwZS5pc0VxdWFsVG9PclN1YlR5cGVPZihjb25zdHJ1Y3RvclR5cGUpO1xuXG4gICAgICAgICAgICAgICAgaWYgKHRlcm1UeXBlRXF1YWxUb09yU3ViVHlwZU9mVHlwZSkge1xuICAgICAgICAgICAgICAgICAgY29uc3QgdGVybVN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKHRlcm1Ob2RlKTtcblxuICAgICAgICAgICAgICAgICAgY29udGV4dC50cmFjZShgVGhlICcke3Rlcm1UeXBlTmFtZX0nIHR5cGUgb2YgdGhlICcke3Rlcm1TdHJpbmd9JyB0ZXJtIGlzIGVxdWFsIHRvIG9yIGEgc3ViLXR5cGUgb2YgdGhlIGNvbnN0cnVjdG9yJ3MgJyR7Y29uc3RydWN0b3JUeXBlTmFtZX0nIHR5cGUuYCwgYXJndW1lbnROb2RlKTtcblxuICAgICAgICAgICAgICAgICAgdmVyaWZpZWRBaGVhZCA9IHZlcmlmeUFoZWFkKCk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgcmV0dXJuIHZlcmlmaWVkQWhlYWQ7XG4gICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgIGFyZ3VtZW50VmVyaWZpZWQgPSB0ZXJtVmVyaWZpZWQ7ICAvLy9cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBpZiAoYXJndW1lbnRWZXJpZmllZCkge1xuICAgIGNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHthcmd1bWVudFN0cmluZ30nIGFyZ3VtZW50LmAsIGFyZ3VtZW50Tm9kZSk7XG4gIH1cblxuICByZXR1cm4gYXJndW1lbnRWZXJpZmllZDtcbn1cbiJdLCJuYW1lcyI6WyJ2ZXJpZnlBcmd1bWVudCIsInRlcm1Ob2RlUXVlcnkiLCJub2RlUXVlcnkiLCJ0eXBlTm9kZVF1ZXJ5IiwiVGVybU5vZGVzVmVyaWZpZXIiLCJ2ZXJpZnlOb25UZXJtaW5hbE5vZGUiLCJub25UZXJtaW5hbE5vZGUiLCJjb25zdHJ1Y3Rvck5vblRlcm1pbmFsTm9kZSIsImNvbnRleHQiLCJ2ZXJpZnlBaGVhZCIsIm5vblRlcm1pbmFsTm9kZVZlcmlmaWVkIiwicnVsZU5hbWUiLCJnZXRSdWxlTmFtZSIsImNvbnN0cnVjdG9yUnVsZU5hbWUiLCJBUkdVTUVOVF9SVUxFX05BTUUiLCJhcmd1bWVudE5vZGUiLCJjb25zdHJ1Y3RvckFyZ3VtZW50Tm9kZSIsImFyZ3VtZW50VmVyaWZpZWQiLCJhcmd1bWVudE5vZGVWZXJpZmllZCIsIk5vZGVzVmVyaWZpZXIiLCJ0ZXJtTm9kZXNWZXJpZmllciIsImFyZ3VtZW50U3RyaW5nIiwibm9kZUFzU3RyaW5nIiwidHJhY2UiLCJ0eXBlTm9kZSIsImluZm8iLCJ0ZXJtTm9kZSIsImNvbnN0cnVjdG9yVGVybU5vZGUiLCJub2RlIiwiY29uc3RydWN0b3JOb2RlIiwibm9kZVZlcmlmaWVkIiwidmVyaWZ5Tm9kZSIsImNvbnN0cnVjdG9yVHlwZU5vZGUiLCJ2ZXJpZnlUZXJtIiwidHlwZXMiLCJ0ZXJtVmVyaWZpZWQiLCJ2ZXJpZmllZEFoZWFkIiwiY29uc3RydWN0b3JUeXBlTmFtZSIsInR5cGVOYW1lRnJvbVR5cGVOb2RlIiwiZmlyc3RUeXBlIiwiZmlyc3QiLCJ0ZXJtVHlwZSIsInRlcm1UeXBlTmFtZSIsImdldE5hbWUiLCJjb25zdHJ1Y3RvclR5cGUiLCJmaW5kVHlwZUJ5VHlwZU5hbWUiLCJ0ZXJtVHlwZUVxdWFsVG9PclN1YlR5cGVPZlR5cGUiLCJpc0VxdWFsVG9PclN1YlR5cGVPZiIsInRlcm1TdHJpbmciLCJkZWJ1ZyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7O0lBNkNBLE9BQWlDO2VBQWpDOztJQUVnQkEsY0FBYztlQUFkQTs7OzREQTdDVTtxQkFFSjt5QkFDYTtxQkFDYTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRWhELElBQU1DLGdCQUFnQkMsSUFBQUEsZ0JBQVMsRUFBQyxvQkFDMUJDLGdCQUFnQkQsSUFBQUEsZ0JBQVMsRUFBQztBQUVoQyxJQUFBLEFBQU1FLGtDQWdDSCxBQWhDSDtjQUFNQTsrQkFBQUE7YUFBQUE7Z0NBQUFBOzs7a0JBQUFBOztZQUNKQyxLQUFBQTttQkFBQUEsU0FBQUEsc0JBQXNCQyxlQUFlLEVBQUVDLDBCQUEwQixFQUFFQyxPQUFPLEVBQUVDLFdBQVc7Z0JBQ3JGLElBQUlDLDBCQUEwQjtnQkFFOUIsSUFBTUMsV0FBV0wsZ0JBQWdCTSxXQUFXLElBQ3RDQyxzQkFBc0JOLDJCQUEyQkssV0FBVyxJQUFJLEdBQUc7Z0JBRXpFLElBQUlELGFBQWFFLHFCQUFxQjtvQkFDcEMsT0FBUUY7d0JBQ04sS0FBS0csNkJBQWtC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