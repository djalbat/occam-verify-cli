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
var _type = require("../../type");
var _typeNames = require("../../typeNames");
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
        var argumentString1 = context.nodeAsString(argumentNode);
        context.info("The '".concat(argumentString1, "' argument should be a term, not a type"), argumentNode);
    } else {
        var termNode = termNodeQuery(argumentNode), constructorTermNode = termNodeQuery(constructorArgumentNode), constructorTypeNode = typeNodeQuery(constructorArgumentNode);
        if (false) {
        ///
        } else if (constructorTermNode !== null) {
            var node = termNode, constructorNode = constructorTermNode, nodeVerified = this.verifyNode(node, constructorNode, context, verifyAhead);
            argumentVerified = nodeVerified; ///
        } else if (constructorTypeNode !== null) {
            var verifyTerm = termNodesVerifier.verifyTerm, types = [], termVerified = verifyTerm(termNode, types, context, verifyAhead);
            if (termVerified) {
                var constructorTypeName = (0, _query.typeNameFromTypeNode)(constructorTypeNode), firstType = (0, _array.first)(types), termType = firstType, termTypeName = termType.getName(), constructorType = constructorTypeName === _typeNames.OBJECT_TYPE_NAME ? _type.objectType : context.findTypeByTypeName(constructorTypeName), termTypeEqualToOrSubTypeOfType = termType.isEqualToOrSubTypeOf(constructorType);
                if (termTypeEqualToOrSubTypeOfType) {
                    var termString = context.nodeAsString(termNode);
                    context.trace("The '".concat(termTypeName, "' type of the '").concat(termString, "' term is equal to or a sub-type of the '").concat(constructorTypeName, "' type in the constructor."), argumentNode);
                    argumentVerified = true;
                }
            }
        }
    }
    if (argumentVerified) {
        context.debug("...verified the '".concat(argumentString, "' argument."), argumentNode);
    }
    return argumentVerified;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy92ZXJpZmllci9ub2Rlcy90ZXJtLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgTm9kZXNWZXJpZmllciBmcm9tIFwiLi4vLi4vdmVyaWZpZXIvbm9kZXNcIjtcblxuaW1wb3J0IHsgZmlyc3QgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL2FycmF5XCI7XG5pbXBvcnQgeyBvYmplY3RUeXBlIH0gZnJvbSBcIi4uLy4uL3R5cGVcIjtcbmltcG9ydCB7IE9CSkVDVF9UWVBFX05BTUUgfSBmcm9tIFwiLi4vLi4vdHlwZU5hbWVzXCI7XG5pbXBvcnQgeyBBUkdVTUVOVF9SVUxFX05BTUUgfSBmcm9tIFwiLi4vLi4vcnVsZU5hbWVzXCI7XG5pbXBvcnQgeyBub2RlUXVlcnksIHR5cGVOYW1lRnJvbVR5cGVOb2RlIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9xdWVyeVwiO1xuXG5jb25zdCB0ZXJtTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL2FyZ3VtZW50L3Rlcm0hXCIpLFxuICAgICAgdHlwZU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9hcmd1bWVudC90eXBlIVwiKTtcblxuY2xhc3MgVGVybU5vZGVzVmVyaWZpZXIgZXh0ZW5kcyBOb2Rlc1ZlcmlmaWVyIHtcbiAgdmVyaWZ5Tm9uVGVybWluYWxOb2RlKG5vblRlcm1pbmFsTm9kZSwgY29uc3RydWN0b3JOb25UZXJtaW5hbE5vZGUsIGNvbnRleHQsIHZlcmlmeUFoZWFkKSB7XG4gICAgbGV0IG5vblRlcm1pbmFsTm9kZVZlcmlmaWVkID0gZmFsc2U7XG5cbiAgICBjb25zdCBydWxlTmFtZSA9IG5vblRlcm1pbmFsTm9kZS5nZXRSdWxlTmFtZSgpLCAvLy9cbiAgICAgICAgICBjb25zdHJ1Y3RvclJ1bGVOYW1lID0gY29uc3RydWN0b3JOb25UZXJtaW5hbE5vZGUuZ2V0UnVsZU5hbWUoKTsgLy8vXG5cbiAgICBpZiAocnVsZU5hbWUgPT09IGNvbnN0cnVjdG9yUnVsZU5hbWUpIHtcbiAgICAgIHN3aXRjaCAocnVsZU5hbWUpIHtcbiAgICAgICAgY2FzZSBBUkdVTUVOVF9SVUxFX05BTUU6IHtcbiAgICAgICAgICBjb25zdCBhcmd1bWVudE5vZGUgPSBub25UZXJtaW5hbE5vZGUsIC8vL1xuICAgICAgICAgICAgICAgIGNvbnN0cnVjdG9yQXJndW1lbnROb2RlID0gY29uc3RydWN0b3JOb25UZXJtaW5hbE5vZGUsIC8vL1xuICAgICAgICAgICAgICAgIGFyZ3VtZW50VmVyaWZpZWQgPSB2ZXJpZnlBcmd1bWVudChhcmd1bWVudE5vZGUsIGNvbnN0cnVjdG9yQXJndW1lbnROb2RlLCBjb250ZXh0LCB2ZXJpZnlBaGVhZCksXG4gICAgICAgICAgICAgICAgYXJndW1lbnROb2RlVmVyaWZpZWQgPSBhcmd1bWVudFZlcmlmaWVkOyAgLy8vXG5cbiAgICAgICAgICBub25UZXJtaW5hbE5vZGVWZXJpZmllZCA9IGFyZ3VtZW50Tm9kZVZlcmlmaWVkOyAvLy9cblxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG5cbiAgICAgICAgZGVmYXVsdDoge1xuICAgICAgICAgIG5vblRlcm1pbmFsTm9kZVZlcmlmaWVkID0gc3VwZXIudmVyaWZ5Tm9uVGVybWluYWxOb2RlKG5vblRlcm1pbmFsTm9kZSwgY29uc3RydWN0b3JOb25UZXJtaW5hbE5vZGUsIGNvbnRleHQsIHZlcmlmeUFoZWFkKTtcblxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG5vblRlcm1pbmFsTm9kZVZlcmlmaWVkO1xuICB9XG59XG5cbmNvbnN0IHRlcm1Ob2Rlc1ZlcmlmaWVyID0gbmV3IFRlcm1Ob2Rlc1ZlcmlmaWVyKCk7XG5cbmV4cG9ydCBkZWZhdWx0IHRlcm1Ob2Rlc1ZlcmlmaWVyO1xuXG5leHBvcnQgZnVuY3Rpb24gdmVyaWZ5QXJndW1lbnQoYXJndW1lbnROb2RlLCBjb25zdHJ1Y3RvckFyZ3VtZW50Tm9kZSwgY29udGV4dCwgdmVyaWZ5QWhlYWQpIHtcbiAgbGV0IGFyZ3VtZW50VmVyaWZpZWQgPSBmYWxzZTtcblxuICBjb25zdCBhcmd1bWVudFN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKGFyZ3VtZW50Tm9kZSk7XG5cbiAgY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHthcmd1bWVudFN0cmluZ30nIGFyZ3VtZW50Li4uYCwgYXJndW1lbnROb2RlKTtcblxuICBjb25zdCB0eXBlTm9kZSA9IHR5cGVOb2RlUXVlcnkoYXJndW1lbnROb2RlKTtcblxuICBpZiAodHlwZU5vZGUgIT09IG51bGwpIHtcbiAgICBjb25zdCBhcmd1bWVudFN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKGFyZ3VtZW50Tm9kZSk7XG5cbiAgICBjb250ZXh0LmluZm8oYFRoZSAnJHthcmd1bWVudFN0cmluZ30nIGFyZ3VtZW50IHNob3VsZCBiZSBhIHRlcm0sIG5vdCBhIHR5cGVgLCBhcmd1bWVudE5vZGUpO1xuICB9IGVsc2Uge1xuICAgIGNvbnN0IHRlcm1Ob2RlID0gdGVybU5vZGVRdWVyeShhcmd1bWVudE5vZGUpLFxuICAgICAgICAgIGNvbnN0cnVjdG9yVGVybU5vZGUgPSB0ZXJtTm9kZVF1ZXJ5KGNvbnN0cnVjdG9yQXJndW1lbnROb2RlKSxcbiAgICAgICAgICBjb25zdHJ1Y3RvclR5cGVOb2RlID0gdHlwZU5vZGVRdWVyeShjb25zdHJ1Y3RvckFyZ3VtZW50Tm9kZSk7XG5cbiAgICBpZiAoZmFsc2UpIHtcbiAgICAgIC8vL1xuICAgIH0gZWxzZSBpZiAoY29uc3RydWN0b3JUZXJtTm9kZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3Qgbm9kZSA9IHRlcm1Ob2RlLCAgLy8vXG4gICAgICAgICAgICBjb25zdHJ1Y3Rvck5vZGUgPSBjb25zdHJ1Y3RvclRlcm1Ob2RlLCAgLy8vXG4gICAgICAgICAgICBub2RlVmVyaWZpZWQgPSB0aGlzLnZlcmlmeU5vZGUobm9kZSwgY29uc3RydWN0b3JOb2RlLCBjb250ZXh0LCB2ZXJpZnlBaGVhZCk7XG5cbiAgICAgIGFyZ3VtZW50VmVyaWZpZWQgPSBub2RlVmVyaWZpZWQ7ICAvLy9cbiAgICB9IGVsc2UgaWYgKGNvbnN0cnVjdG9yVHlwZU5vZGUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHsgdmVyaWZ5VGVybSB9ID0gdGVybU5vZGVzVmVyaWZpZXIsXG4gICAgICAgICAgICB0eXBlcyA9IFtdLFxuICAgICAgICAgICAgdGVybVZlcmlmaWVkID0gdmVyaWZ5VGVybSh0ZXJtTm9kZSwgdHlwZXMsIGNvbnRleHQsIHZlcmlmeUFoZWFkKTtcblxuICAgICAgaWYgKHRlcm1WZXJpZmllZCkge1xuICAgICAgICBjb25zdCBjb25zdHJ1Y3RvclR5cGVOYW1lID0gdHlwZU5hbWVGcm9tVHlwZU5vZGUoY29uc3RydWN0b3JUeXBlTm9kZSksXG4gICAgICAgICAgICAgIGZpcnN0VHlwZSA9IGZpcnN0KHR5cGVzKSxcbiAgICAgICAgICAgICAgdGVybVR5cGUgPSBmaXJzdFR5cGUsIC8vL1xuICAgICAgICAgICAgICB0ZXJtVHlwZU5hbWUgPSB0ZXJtVHlwZS5nZXROYW1lKCksXG4gICAgICAgICAgICAgIGNvbnN0cnVjdG9yVHlwZSA9IChjb25zdHJ1Y3RvclR5cGVOYW1lID09PSBPQkpFQ1RfVFlQRV9OQU1FKSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb2JqZWN0VHlwZSA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZXh0LmZpbmRUeXBlQnlUeXBlTmFtZShjb25zdHJ1Y3RvclR5cGVOYW1lKSxcbiAgICAgICAgICAgICAgdGVybVR5cGVFcXVhbFRvT3JTdWJUeXBlT2ZUeXBlID0gdGVybVR5cGUuaXNFcXVhbFRvT3JTdWJUeXBlT2YoY29uc3RydWN0b3JUeXBlKTtcblxuICAgICAgICBpZiAodGVybVR5cGVFcXVhbFRvT3JTdWJUeXBlT2ZUeXBlKSB7XG4gICAgICAgICAgY29uc3QgdGVybVN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKHRlcm1Ob2RlKTtcblxuICAgICAgICAgIGNvbnRleHQudHJhY2UoYFRoZSAnJHt0ZXJtVHlwZU5hbWV9JyB0eXBlIG9mIHRoZSAnJHt0ZXJtU3RyaW5nfScgdGVybSBpcyBlcXVhbCB0byBvciBhIHN1Yi10eXBlIG9mIHRoZSAnJHtjb25zdHJ1Y3RvclR5cGVOYW1lfScgdHlwZSBpbiB0aGUgY29uc3RydWN0b3IuYCwgYXJndW1lbnROb2RlKTtcblxuICAgICAgICAgIGFyZ3VtZW50VmVyaWZpZWQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgaWYgKGFyZ3VtZW50VmVyaWZpZWQpIHtcbiAgICBjb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7YXJndW1lbnRTdHJpbmd9JyBhcmd1bWVudC5gLCBhcmd1bWVudE5vZGUpO1xuICB9XG5cbiAgcmV0dXJuIGFyZ3VtZW50VmVyaWZpZWQ7XG59XG4iXSwibmFtZXMiOlsidmVyaWZ5QXJndW1lbnQiLCJ0ZXJtTm9kZVF1ZXJ5Iiwibm9kZVF1ZXJ5IiwidHlwZU5vZGVRdWVyeSIsIlRlcm1Ob2Rlc1ZlcmlmaWVyIiwidmVyaWZ5Tm9uVGVybWluYWxOb2RlIiwibm9uVGVybWluYWxOb2RlIiwiY29uc3RydWN0b3JOb25UZXJtaW5hbE5vZGUiLCJjb250ZXh0IiwidmVyaWZ5QWhlYWQiLCJub25UZXJtaW5hbE5vZGVWZXJpZmllZCIsInJ1bGVOYW1lIiwiZ2V0UnVsZU5hbWUiLCJjb25zdHJ1Y3RvclJ1bGVOYW1lIiwiQVJHVU1FTlRfUlVMRV9OQU1FIiwiYXJndW1lbnROb2RlIiwiY29uc3RydWN0b3JBcmd1bWVudE5vZGUiLCJhcmd1bWVudFZlcmlmaWVkIiwiYXJndW1lbnROb2RlVmVyaWZpZWQiLCJOb2Rlc1ZlcmlmaWVyIiwidGVybU5vZGVzVmVyaWZpZXIiLCJhcmd1bWVudFN0cmluZyIsIm5vZGVBc1N0cmluZyIsInRyYWNlIiwidHlwZU5vZGUiLCJpbmZvIiwidGVybU5vZGUiLCJjb25zdHJ1Y3RvclRlcm1Ob2RlIiwiY29uc3RydWN0b3JUeXBlTm9kZSIsIm5vZGUiLCJjb25zdHJ1Y3Rvck5vZGUiLCJub2RlVmVyaWZpZWQiLCJ2ZXJpZnlOb2RlIiwidmVyaWZ5VGVybSIsInR5cGVzIiwidGVybVZlcmlmaWVkIiwiY29uc3RydWN0b3JUeXBlTmFtZSIsInR5cGVOYW1lRnJvbVR5cGVOb2RlIiwiZmlyc3RUeXBlIiwiZmlyc3QiLCJ0ZXJtVHlwZSIsInRlcm1UeXBlTmFtZSIsImdldE5hbWUiLCJjb25zdHJ1Y3RvclR5cGUiLCJPQkpFQ1RfVFlQRV9OQU1FIiwib2JqZWN0VHlwZSIsImZpbmRUeXBlQnlUeXBlTmFtZSIsInRlcm1UeXBlRXF1YWxUb09yU3ViVHlwZU9mVHlwZSIsImlzRXF1YWxUb09yU3ViVHlwZU9mIiwidGVybVN0cmluZyIsImRlYnVnIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7SUErQ0EsT0FBaUM7ZUFBakM7O0lBRWdCQSxjQUFjO2VBQWRBOzs7NERBL0NVO3FCQUVKO29CQUNLO3lCQUNNO3lCQUNFO3FCQUNhOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFaEQsSUFBTUMsZ0JBQWdCQyxJQUFBQSxnQkFBUyxFQUFDLG9CQUMxQkMsZ0JBQWdCRCxJQUFBQSxnQkFBUyxFQUFDO0FBRWhDLElBQUEsQUFBTUUsa0NBZ0NILEFBaENIO2NBQU1BOytCQUFBQTthQUFBQTtnQ0FBQUE7OztrQkFBQUE7O1lBQ0pDLEtBQUFBO21CQUFBQSxTQUFBQSxzQkFBc0JDLGVBQWUsRUFBRUMsMEJBQTBCLEVBQUVDLE9BQU8sRUFBRUMsV0FBVztnQkFDckYsSUFBSUMsMEJBQTBCO2dCQUU5QixJQUFNQyxXQUFXTCxnQkFBZ0JNLFdBQVcsSUFDdENDLHNCQUFzQk4sMkJBQTJCSyxXQUFXLElBQUksR0FBRztnQkFF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