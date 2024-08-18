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
var _query = require("../../utilities/query");
var _ruleNames = require("../../ruleNames");
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
var TermAgainstConstructorNodesVerifier = /*#__PURE__*/ function(NodesVerifier) {
    _inherits(TermAgainstConstructorNodesVerifier, NodesVerifier);
    var _super = _create_super(TermAgainstConstructorNodesVerifier);
    function TermAgainstConstructorNodesVerifier() {
        _class_call_check(this, TermAgainstConstructorNodesVerifier);
        return _super.apply(this, arguments);
    }
    _create_class(TermAgainstConstructorNodesVerifier, [
        {
            key: "verifyNonTerminalNode",
            value: function verifyNonTerminalNode(nonTerminalNodeA, nonTerminalNodeB, localContext, verifyAhead) {
                var nonTerminalNodeVerified = false;
                var nonTerminalNode = nonTerminalNodeA, constructorNonTerminalNode = nonTerminalNodeB, ruleName = nonTerminalNode.getRuleName(), constructorRuleName = constructorNonTerminalNode.getRuleName(); ///
                if (ruleName === constructorRuleName) {
                    switch(ruleName){
                        case _ruleNames.ARGUMENT_RULE_NAME:
                            {
                                var argumentNode = nonTerminalNode, constructorArgumentNode = constructorNonTerminalNode, argumentNodeVerified = this.verifyArgumentNode(argumentNode, constructorArgumentNode, localContext, verifyAhead);
                                nonTerminalNodeVerified = argumentNodeVerified; ///
                                break;
                            }
                        default:
                            {
                                nonTerminalNodeVerified = _get(_get_prototype_of(TermAgainstConstructorNodesVerifier.prototype), "verifyNonTerminalNode", this).call(this, nonTerminalNode, constructorNonTerminalNode, localContext, verifyAhead);
                                break;
                            }
                    }
                }
                return nonTerminalNodeVerified;
            }
        },
        {
            key: "verifyArgumentNode",
            value: function verifyArgumentNode(argumentNode, constructorArgumentNode, localContext, verifyAhead) {
                var argumentNodeVerified = false;
                var argumentString = localContext.nodeAsString(argumentNode);
                var typeNode = typeNodeQuery(argumentNode);
                if (typeNode !== null) {
                    localContext.debug("The '".concat(argumentString, "' argument should be a term, not a type."), argumentNode);
                } else {
                    var termNode = termNodeQuery(argumentNode);
                    if (!argumentNodeVerified) {
                        var constructorTermNode = termNodeQuery(constructorArgumentNode);
                        if (constructorTermNode !== null) {
                            var node = termNode, constructorNode = constructorTermNode, nodeVerified = this.verifyNode(node, constructorNode, localContext, verifyAhead);
                            argumentNodeVerified = nodeVerified; ///
                        }
                    }
                    if (!argumentNodeVerified) {
                        var constructorTypeNode = typeNodeQuery(constructorArgumentNode);
                        if (constructorTypeNode !== null) {
                            var verifyTerm = termAgainstConstructorNodesVerifier.verifyTerm, terms = [], termVerified = verifyTerm(termNode, terms, localContext, function() {
                                var verifiedAhead = false;
                                var firstTerm = (0, _array.first)(terms), term = firstTerm, termType = term.getType(), constructorType = localContext.findTypeByTypeNode(constructorTypeNode), termTypeEqualToOrSubTypeOfType = termType.isEqualToOrSubTypeOf(constructorType);
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
    return TermAgainstConstructorNodesVerifier;
}(_nodes.default);
var termAgainstConstructorNodesVerifier = new TermAgainstConstructorNodesVerifier();
var _default = termAgainstConstructorNodesVerifier;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy92ZXJpZmllci9ub2Rlcy90ZXJtQWdhaW5zdENvbnN0cnVjdG9yLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgTm9kZXNWZXJpZmllciBmcm9tIFwiLi4vLi4vdmVyaWZpZXIvbm9kZXNcIjtcblxuaW1wb3J0IHsgZmlyc3QgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL2FycmF5XCI7XG5pbXBvcnQgeyBub2RlUXVlcnkgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5pbXBvcnQgeyBBUkdVTUVOVF9SVUxFX05BTUUgfSBmcm9tIFwiLi4vLi4vcnVsZU5hbWVzXCI7XG5cbmNvbnN0IHRlcm1Ob2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvYXJndW1lbnQvdGVybSFcIiksXG4gICAgICB0eXBlTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL2FyZ3VtZW50L3R5cGUhXCIpO1xuXG5jbGFzcyBUZXJtQWdhaW5zdENvbnN0cnVjdG9yTm9kZXNWZXJpZmllciBleHRlbmRzIE5vZGVzVmVyaWZpZXIge1xuICB2ZXJpZnlOb25UZXJtaW5hbE5vZGUobm9uVGVybWluYWxOb2RlQSwgbm9uVGVybWluYWxOb2RlQiwgbG9jYWxDb250ZXh0LCB2ZXJpZnlBaGVhZCkge1xuICAgIGxldCBub25UZXJtaW5hbE5vZGVWZXJpZmllZCA9IGZhbHNlO1xuXG4gICAgY29uc3Qgbm9uVGVybWluYWxOb2RlID0gbm9uVGVybWluYWxOb2RlQSwgLy8vXG4gICAgICAgICAgY29uc3RydWN0b3JOb25UZXJtaW5hbE5vZGUgPSBub25UZXJtaW5hbE5vZGVCLCAvLy9cbiAgICAgICAgICBydWxlTmFtZSA9IG5vblRlcm1pbmFsTm9kZS5nZXRSdWxlTmFtZSgpLCAvLy9cbiAgICAgICAgICBjb25zdHJ1Y3RvclJ1bGVOYW1lID0gY29uc3RydWN0b3JOb25UZXJtaW5hbE5vZGUuZ2V0UnVsZU5hbWUoKTsgLy8vXG5cbiAgICBpZiAocnVsZU5hbWUgPT09IGNvbnN0cnVjdG9yUnVsZU5hbWUpIHtcbiAgICAgIHN3aXRjaCAocnVsZU5hbWUpIHtcbiAgICAgICAgY2FzZSBBUkdVTUVOVF9SVUxFX05BTUU6IHtcbiAgICAgICAgICBjb25zdCBhcmd1bWVudE5vZGUgPSBub25UZXJtaW5hbE5vZGUsIC8vL1xuICAgICAgICAgICAgICAgIGNvbnN0cnVjdG9yQXJndW1lbnROb2RlID0gY29uc3RydWN0b3JOb25UZXJtaW5hbE5vZGUsIC8vL1xuICAgICAgICAgICAgICAgIGFyZ3VtZW50Tm9kZVZlcmlmaWVkID0gdGhpcy52ZXJpZnlBcmd1bWVudE5vZGUoYXJndW1lbnROb2RlLCBjb25zdHJ1Y3RvckFyZ3VtZW50Tm9kZSwgbG9jYWxDb250ZXh0LCB2ZXJpZnlBaGVhZCk7XG5cbiAgICAgICAgICBub25UZXJtaW5hbE5vZGVWZXJpZmllZCA9IGFyZ3VtZW50Tm9kZVZlcmlmaWVkOyAvLy9cblxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG5cbiAgICAgICAgZGVmYXVsdDoge1xuICAgICAgICAgIG5vblRlcm1pbmFsTm9kZVZlcmlmaWVkID0gc3VwZXIudmVyaWZ5Tm9uVGVybWluYWxOb2RlKG5vblRlcm1pbmFsTm9kZSwgY29uc3RydWN0b3JOb25UZXJtaW5hbE5vZGUsIGxvY2FsQ29udGV4dCwgdmVyaWZ5QWhlYWQpO1xuXG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbm9uVGVybWluYWxOb2RlVmVyaWZpZWQ7XG4gIH1cblxuICB2ZXJpZnlBcmd1bWVudE5vZGUoYXJndW1lbnROb2RlLCBjb25zdHJ1Y3RvckFyZ3VtZW50Tm9kZSwgbG9jYWxDb250ZXh0LCB2ZXJpZnlBaGVhZCkge1xuICAgIGxldCBhcmd1bWVudE5vZGVWZXJpZmllZCA9IGZhbHNlO1xuXG4gICAgY29uc3QgYXJndW1lbnRTdHJpbmcgPSBsb2NhbENvbnRleHQubm9kZUFzU3RyaW5nKGFyZ3VtZW50Tm9kZSk7XG5cbiAgICBjb25zdCB0eXBlTm9kZSA9IHR5cGVOb2RlUXVlcnkoYXJndW1lbnROb2RlKTtcblxuICAgIGlmICh0eXBlTm9kZSAhPT0gbnVsbCkge1xuICAgICAgbG9jYWxDb250ZXh0LmRlYnVnKGBUaGUgJyR7YXJndW1lbnRTdHJpbmd9JyBhcmd1bWVudCBzaG91bGQgYmUgYSB0ZXJtLCBub3QgYSB0eXBlLmAsIGFyZ3VtZW50Tm9kZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHRlcm1Ob2RlID0gdGVybU5vZGVRdWVyeShhcmd1bWVudE5vZGUpO1xuXG4gICAgICBpZiAoIWFyZ3VtZW50Tm9kZVZlcmlmaWVkKSB7XG4gICAgICAgIGNvbnN0IGNvbnN0cnVjdG9yVGVybU5vZGUgPSB0ZXJtTm9kZVF1ZXJ5KGNvbnN0cnVjdG9yQXJndW1lbnROb2RlKTtcblxuICAgICAgICBpZiAoY29uc3RydWN0b3JUZXJtTm9kZSAhPT0gbnVsbCkge1xuICAgICAgICAgIGNvbnN0IG5vZGUgPSB0ZXJtTm9kZSwgIC8vL1xuICAgICAgICAgICAgICAgIGNvbnN0cnVjdG9yTm9kZSA9IGNvbnN0cnVjdG9yVGVybU5vZGUsICAvLy9cbiAgICAgICAgICAgICAgICBub2RlVmVyaWZpZWQgPSB0aGlzLnZlcmlmeU5vZGUobm9kZSwgY29uc3RydWN0b3JOb2RlLCBsb2NhbENvbnRleHQsIHZlcmlmeUFoZWFkKTtcblxuICAgICAgICAgIGFyZ3VtZW50Tm9kZVZlcmlmaWVkID0gbm9kZVZlcmlmaWVkOyAgLy8vXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKCFhcmd1bWVudE5vZGVWZXJpZmllZCkge1xuICAgICAgICBjb25zdCBjb25zdHJ1Y3RvclR5cGVOb2RlID0gdHlwZU5vZGVRdWVyeShjb25zdHJ1Y3RvckFyZ3VtZW50Tm9kZSk7XG5cbiAgICAgICAgaWYgKGNvbnN0cnVjdG9yVHlwZU5vZGUgIT09IG51bGwpIHtcbiAgICAgICAgICBjb25zdCB7IHZlcmlmeVRlcm0gfSA9IHRlcm1BZ2FpbnN0Q29uc3RydWN0b3JOb2Rlc1ZlcmlmaWVyLFxuICAgICAgICAgICAgICAgIHRlcm1zID0gW10sXG4gICAgICAgICAgICAgICAgdGVybVZlcmlmaWVkID0gdmVyaWZ5VGVybSh0ZXJtTm9kZSwgdGVybXMsIGxvY2FsQ29udGV4dCwgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgbGV0IHZlcmlmaWVkQWhlYWQgPSBmYWxzZTtcblxuICAgICAgICAgICAgICAgICAgY29uc3QgZmlyc3RUZXJtID0gZmlyc3QodGVybXMpLFxuICAgICAgICAgICAgICAgICAgICAgICAgdGVybSA9IGZpcnN0VGVybSwgLy8vXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXJtVHlwZSA9IHRlcm0uZ2V0VHlwZSgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3RydWN0b3JUeXBlID0gbG9jYWxDb250ZXh0LmZpbmRUeXBlQnlUeXBlTm9kZShjb25zdHJ1Y3RvclR5cGVOb2RlKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRlcm1UeXBlRXF1YWxUb09yU3ViVHlwZU9mVHlwZSA9IHRlcm1UeXBlLmlzRXF1YWxUb09yU3ViVHlwZU9mKGNvbnN0cnVjdG9yVHlwZSk7XG5cbiAgICAgICAgICAgICAgICAgIGlmICh0ZXJtVHlwZUVxdWFsVG9PclN1YlR5cGVPZlR5cGUpIHtcbiAgICAgICAgICAgICAgICAgICAgdmVyaWZpZWRBaGVhZCA9IHZlcmlmeUFoZWFkKCk7XG4gICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgIHJldHVybiB2ZXJpZmllZEFoZWFkO1xuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgYXJndW1lbnROb2RlVmVyaWZpZWQgPSB0ZXJtVmVyaWZpZWQ7ICAvLy9cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBhcmd1bWVudE5vZGVWZXJpZmllZDtcbiAgfVxufVxuXG5jb25zdCB0ZXJtQWdhaW5zdENvbnN0cnVjdG9yTm9kZXNWZXJpZmllciA9IG5ldyBUZXJtQWdhaW5zdENvbnN0cnVjdG9yTm9kZXNWZXJpZmllcigpO1xuXG5leHBvcnQgZGVmYXVsdCB0ZXJtQWdhaW5zdENvbnN0cnVjdG9yTm9kZXNWZXJpZmllcjtcblxuIl0sIm5hbWVzIjpbInRlcm1Ob2RlUXVlcnkiLCJub2RlUXVlcnkiLCJ0eXBlTm9kZVF1ZXJ5IiwiVGVybUFnYWluc3RDb25zdHJ1Y3Rvck5vZGVzVmVyaWZpZXIiLCJ2ZXJpZnlOb25UZXJtaW5hbE5vZGUiLCJub25UZXJtaW5hbE5vZGVBIiwibm9uVGVybWluYWxOb2RlQiIsImxvY2FsQ29udGV4dCIsInZlcmlmeUFoZWFkIiwibm9uVGVybWluYWxOb2RlVmVyaWZpZWQiLCJub25UZXJtaW5hbE5vZGUiLCJjb25zdHJ1Y3Rvck5vblRlcm1pbmFsTm9kZSIsInJ1bGVOYW1lIiwiZ2V0UnVsZU5hbWUiLCJjb25zdHJ1Y3RvclJ1bGVOYW1lIiwiQVJHVU1FTlRfUlVMRV9OQU1FIiwiYXJndW1lbnROb2RlIiwiY29uc3RydWN0b3JBcmd1bWVudE5vZGUiLCJhcmd1bWVudE5vZGVWZXJpZmllZCIsInZlcmlmeUFyZ3VtZW50Tm9kZSIsImFyZ3VtZW50U3RyaW5nIiwibm9kZUFzU3RyaW5nIiwidHlwZU5vZGUiLCJkZWJ1ZyIsInRlcm1Ob2RlIiwiY29uc3RydWN0b3JUZXJtTm9kZSIsIm5vZGUiLCJjb25zdHJ1Y3Rvck5vZGUiLCJub2RlVmVyaWZpZWQiLCJ2ZXJpZnlOb2RlIiwiY29uc3RydWN0b3JUeXBlTm9kZSIsInZlcmlmeVRlcm0iLCJ0ZXJtQWdhaW5zdENvbnN0cnVjdG9yTm9kZXNWZXJpZmllciIsInRlcm1zIiwidGVybVZlcmlmaWVkIiwidmVyaWZpZWRBaGVhZCIsImZpcnN0VGVybSIsImZpcnN0IiwidGVybSIsInRlcm1UeXBlIiwiZ2V0VHlwZSIsImNvbnN0cnVjdG9yVHlwZSIsImZpbmRUeXBlQnlUeXBlTm9kZSIsInRlcm1UeXBlRXF1YWxUb09yU3ViVHlwZU9m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