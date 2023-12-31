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
        context.debug("The '".concat(argumentString, "' argument should be a term, not a type."), argumentNode);
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
                var verifyTerm = termNodesVerifier.verifyTerm, terms = [], termVerified = verifyTerm(termNode, terms, context, function() {
                    var verifiedAhead = false;
                    var constructorTypeName = (0, _query.typeNameFromTypeNode)(constructorTypeNode), firstTerm = (0, _array.first)(terms), term = firstTerm, termType = term.getType(), constructorType = context.findTypeByTypeName(constructorTypeName), termTypeEqualToOrSubTypeOfType = termType.isEqualToOrSubTypeOf(constructorType);
                    if (termTypeEqualToOrSubTypeOfType) {
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy92ZXJpZmllci9ub2Rlcy90ZXJtLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgTm9kZXNWZXJpZmllciBmcm9tIFwiLi4vLi4vdmVyaWZpZXIvbm9kZXNcIjtcblxuaW1wb3J0IHsgZmlyc3QgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL2FycmF5XCI7XG5pbXBvcnQgeyBBUkdVTUVOVF9SVUxFX05BTUUgfSBmcm9tIFwiLi4vLi4vcnVsZU5hbWVzXCI7XG5pbXBvcnQgeyBub2RlUXVlcnksIHR5cGVOYW1lRnJvbVR5cGVOb2RlIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9xdWVyeVwiO1xuXG5jb25zdCB0ZXJtTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL2FyZ3VtZW50L3Rlcm0hXCIpLFxuICAgICAgdHlwZU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9hcmd1bWVudC90eXBlIVwiKTtcblxuY2xhc3MgVGVybU5vZGVzVmVyaWZpZXIgZXh0ZW5kcyBOb2Rlc1ZlcmlmaWVyIHtcbiAgdmVyaWZ5Tm9uVGVybWluYWxOb2RlKG5vblRlcm1pbmFsTm9kZSwgY29uc3RydWN0b3JOb25UZXJtaW5hbE5vZGUsIGNvbnRleHQsIHZlcmlmeUFoZWFkKSB7XG4gICAgbGV0IG5vblRlcm1pbmFsTm9kZVZlcmlmaWVkID0gZmFsc2U7XG5cbiAgICBjb25zdCBydWxlTmFtZSA9IG5vblRlcm1pbmFsTm9kZS5nZXRSdWxlTmFtZSgpLCAvLy9cbiAgICAgICAgICBjb25zdHJ1Y3RvclJ1bGVOYW1lID0gY29uc3RydWN0b3JOb25UZXJtaW5hbE5vZGUuZ2V0UnVsZU5hbWUoKTsgLy8vXG5cbiAgICBpZiAocnVsZU5hbWUgPT09IGNvbnN0cnVjdG9yUnVsZU5hbWUpIHtcbiAgICAgIHN3aXRjaCAocnVsZU5hbWUpIHtcbiAgICAgICAgY2FzZSBBUkdVTUVOVF9SVUxFX05BTUU6IHtcbiAgICAgICAgICBjb25zdCBhcmd1bWVudE5vZGUgPSBub25UZXJtaW5hbE5vZGUsIC8vL1xuICAgICAgICAgICAgICAgIGNvbnN0cnVjdG9yQXJndW1lbnROb2RlID0gY29uc3RydWN0b3JOb25UZXJtaW5hbE5vZGUsIC8vL1xuICAgICAgICAgICAgICAgIGFyZ3VtZW50VmVyaWZpZWQgPSB2ZXJpZnlBcmd1bWVudChhcmd1bWVudE5vZGUsIGNvbnN0cnVjdG9yQXJndW1lbnROb2RlLCBjb250ZXh0LCB2ZXJpZnlBaGVhZCksXG4gICAgICAgICAgICAgICAgYXJndW1lbnROb2RlVmVyaWZpZWQgPSBhcmd1bWVudFZlcmlmaWVkOyAgLy8vXG5cbiAgICAgICAgICBub25UZXJtaW5hbE5vZGVWZXJpZmllZCA9IGFyZ3VtZW50Tm9kZVZlcmlmaWVkOyAvLy9cblxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG5cbiAgICAgICAgZGVmYXVsdDoge1xuICAgICAgICAgIG5vblRlcm1pbmFsTm9kZVZlcmlmaWVkID0gc3VwZXIudmVyaWZ5Tm9uVGVybWluYWxOb2RlKG5vblRlcm1pbmFsTm9kZSwgY29uc3RydWN0b3JOb25UZXJtaW5hbE5vZGUsIGNvbnRleHQsIHZlcmlmeUFoZWFkKTtcblxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG5vblRlcm1pbmFsTm9kZVZlcmlmaWVkO1xuICB9XG59XG5cbmNvbnN0IHRlcm1Ob2Rlc1ZlcmlmaWVyID0gbmV3IFRlcm1Ob2Rlc1ZlcmlmaWVyKCk7XG5cbmV4cG9ydCBkZWZhdWx0IHRlcm1Ob2Rlc1ZlcmlmaWVyO1xuXG5leHBvcnQgZnVuY3Rpb24gdmVyaWZ5QXJndW1lbnQoYXJndW1lbnROb2RlLCBjb25zdHJ1Y3RvckFyZ3VtZW50Tm9kZSwgY29udGV4dCwgdmVyaWZ5QWhlYWQpIHtcbiAgbGV0IGFyZ3VtZW50VmVyaWZpZWQgPSBmYWxzZTtcblxuICBjb25zdCBhcmd1bWVudFN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKGFyZ3VtZW50Tm9kZSk7XG5cbiAgY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHthcmd1bWVudFN0cmluZ30nIGFyZ3VtZW50Li4uYCwgYXJndW1lbnROb2RlKTtcblxuICBjb25zdCB0eXBlTm9kZSA9IHR5cGVOb2RlUXVlcnkoYXJndW1lbnROb2RlKTtcblxuICBpZiAodHlwZU5vZGUgIT09IG51bGwpIHtcbiAgICBjb250ZXh0LmRlYnVnKGBUaGUgJyR7YXJndW1lbnRTdHJpbmd9JyBhcmd1bWVudCBzaG91bGQgYmUgYSB0ZXJtLCBub3QgYSB0eXBlLmAsIGFyZ3VtZW50Tm9kZSk7XG4gIH0gZWxzZSB7XG4gICAgY29uc3QgdGVybU5vZGUgPSB0ZXJtTm9kZVF1ZXJ5KGFyZ3VtZW50Tm9kZSk7XG5cbiAgICBpZiAoIWFyZ3VtZW50VmVyaWZpZWQpIHtcbiAgICAgIGNvbnN0IGNvbnN0cnVjdG9yVGVybU5vZGUgPSB0ZXJtTm9kZVF1ZXJ5KGNvbnN0cnVjdG9yQXJndW1lbnROb2RlKTtcblxuICAgICAgaWYgKGNvbnN0cnVjdG9yVGVybU5vZGUgIT09IG51bGwpIHtcbiAgICAgICAgY29uc3Qgbm9kZSA9IHRlcm1Ob2RlLCAgLy8vXG4gICAgICAgICAgICAgIGNvbnN0cnVjdG9yTm9kZSA9IGNvbnN0cnVjdG9yVGVybU5vZGUsICAvLy9cbiAgICAgICAgICAgICAgbm9kZVZlcmlmaWVkID0gdGhpcy52ZXJpZnlOb2RlKG5vZGUsIGNvbnN0cnVjdG9yTm9kZSwgY29udGV4dCwgdmVyaWZ5QWhlYWQpO1xuXG4gICAgICAgIGFyZ3VtZW50VmVyaWZpZWQgPSBub2RlVmVyaWZpZWQ7ICAvLy9cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoIWFyZ3VtZW50VmVyaWZpZWQpIHtcbiAgICAgIGNvbnN0IGNvbnN0cnVjdG9yVHlwZU5vZGUgPSB0eXBlTm9kZVF1ZXJ5KGNvbnN0cnVjdG9yQXJndW1lbnROb2RlKTtcblxuICAgICAgaWYgKGNvbnN0cnVjdG9yVHlwZU5vZGUgIT09IG51bGwpIHtcbiAgICAgICAgY29uc3QgeyB2ZXJpZnlUZXJtIH0gPSB0ZXJtTm9kZXNWZXJpZmllcixcbiAgICAgICAgICAgICAgdGVybXMgPSBbXSxcbiAgICAgICAgICAgICAgdGVybVZlcmlmaWVkID0gdmVyaWZ5VGVybSh0ZXJtTm9kZSwgdGVybXMsIGNvbnRleHQsICgpID0+IHtcbiAgICAgICAgICAgICAgICBsZXQgdmVyaWZpZWRBaGVhZCA9IGZhbHNlO1xuXG4gICAgICAgICAgICAgICAgY29uc3QgY29uc3RydWN0b3JUeXBlTmFtZSA9IHR5cGVOYW1lRnJvbVR5cGVOb2RlKGNvbnN0cnVjdG9yVHlwZU5vZGUpLFxuICAgICAgICAgICAgICAgICAgICAgIGZpcnN0VGVybSA9IGZpcnN0KHRlcm1zKSxcbiAgICAgICAgICAgICAgICAgICAgICB0ZXJtID0gZmlyc3RUZXJtLCAvLy9cbiAgICAgICAgICAgICAgICAgICAgICB0ZXJtVHlwZSA9IHRlcm0uZ2V0VHlwZSgpLFxuICAgICAgICAgICAgICAgICAgICAgIGNvbnN0cnVjdG9yVHlwZSA9IGNvbnRleHQuZmluZFR5cGVCeVR5cGVOYW1lKGNvbnN0cnVjdG9yVHlwZU5hbWUpLFxuICAgICAgICAgICAgICAgICAgICAgIHRlcm1UeXBlRXF1YWxUb09yU3ViVHlwZU9mVHlwZSA9IHRlcm1UeXBlLmlzRXF1YWxUb09yU3ViVHlwZU9mKGNvbnN0cnVjdG9yVHlwZSk7XG5cbiAgICAgICAgICAgICAgICBpZiAodGVybVR5cGVFcXVhbFRvT3JTdWJUeXBlT2ZUeXBlKSB7XG4gICAgICAgICAgICAgICAgICB2ZXJpZmllZEFoZWFkID0gdmVyaWZ5QWhlYWQoKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gdmVyaWZpZWRBaGVhZDtcbiAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgYXJndW1lbnRWZXJpZmllZCA9IHRlcm1WZXJpZmllZDsgIC8vL1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGlmIChhcmd1bWVudFZlcmlmaWVkKSB7XG4gICAgY29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke2FyZ3VtZW50U3RyaW5nfScgYXJndW1lbnQuYCwgYXJndW1lbnROb2RlKTtcbiAgfVxuXG4gIHJldHVybiBhcmd1bWVudFZlcmlmaWVkO1xufVxuIl0sIm5hbWVzIjpbInZlcmlmeUFyZ3VtZW50IiwidGVybU5vZGVRdWVyeSIsIm5vZGVRdWVyeSIsInR5cGVOb2RlUXVlcnkiLCJUZXJtTm9kZXNWZXJpZmllciIsInZlcmlmeU5vblRlcm1pbmFsTm9kZSIsIm5vblRlcm1pbmFsTm9kZSIsImNvbnN0cnVjdG9yTm9uVGVybWluYWxOb2RlIiwiY29udGV4dCIsInZlcmlmeUFoZWFkIiwibm9uVGVybWluYWxOb2RlVmVyaWZpZWQiLCJydWxlTmFtZSIsImdldFJ1bGVOYW1lIiwiY29uc3RydWN0b3JSdWxlTmFtZSIsIkFSR1VNRU5UX1JVTEVfTkFNRSIsImFyZ3VtZW50Tm9kZSIsImNvbnN0cnVjdG9yQXJndW1lbnROb2RlIiwiYXJndW1lbnRWZXJpZmllZCIsImFyZ3VtZW50Tm9kZVZlcmlmaWVkIiwiTm9kZXNWZXJpZmllciIsInRlcm1Ob2Rlc1ZlcmlmaWVyIiwiYXJndW1lbnRTdHJpbmciLCJub2RlQXNTdHJpbmciLCJ0cmFjZSIsInR5cGVOb2RlIiwiZGVidWciLCJ0ZXJtTm9kZSIsImNvbnN0cnVjdG9yVGVybU5vZGUiLCJub2RlIiwiY29uc3RydWN0b3JOb2RlIiwibm9kZVZlcmlmaWVkIiwidmVyaWZ5Tm9kZSIsImNvbnN0cnVjdG9yVHlwZU5vZGUiLCJ2ZXJpZnlUZXJtIiwidGVybXMiLCJ0ZXJtVmVyaWZpZWQiLCJ2ZXJpZmllZEFoZWFkIiwiY29uc3RydWN0b3JUeXBlTmFtZSIsInR5cGVOYW1lRnJvbVR5cGVOb2RlIiwiZmlyc3RUZXJtIiwiZmlyc3QiLCJ0ZXJtIiwidGVybVR5cGUiLCJnZXRUeXBlIiwiY29uc3RydWN0b3JUeXBlIiwiZmluZFR5cGVCeVR5cGVOYW1lIiwidGVybVR5cGVFcXVh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