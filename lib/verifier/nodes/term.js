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
            value: function verifyNonTerminalNode(nonTerminalNodeA, nonTerminalNodeB, context, verifyAhead) {
                var nonTerminalNodeVerified = false;
                var nonTerminalNode = nonTerminalNodeA, constructorNonTerminalNode = nonTerminalNodeB, ruleName = nonTerminalNode.getRuleName(), constructorRuleName = constructorNonTerminalNode.getRuleName(); ///
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy92ZXJpZmllci9ub2Rlcy90ZXJtLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgTm9kZXNWZXJpZmllciBmcm9tIFwiLi4vLi4vdmVyaWZpZXIvbm9kZXNcIjtcblxuaW1wb3J0IHsgZmlyc3QgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL2FycmF5XCI7XG5pbXBvcnQgeyBBUkdVTUVOVF9SVUxFX05BTUUgfSBmcm9tIFwiLi4vLi4vcnVsZU5hbWVzXCI7XG5pbXBvcnQgeyBub2RlUXVlcnksIHR5cGVOYW1lRnJvbVR5cGVOb2RlIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9xdWVyeVwiO1xuXG5jb25zdCB0ZXJtTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL2FyZ3VtZW50L3Rlcm0hXCIpLFxuICAgICAgdHlwZU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9hcmd1bWVudC90eXBlIVwiKTtcblxuY2xhc3MgVGVybU5vZGVzVmVyaWZpZXIgZXh0ZW5kcyBOb2Rlc1ZlcmlmaWVyIHtcbiAgdmVyaWZ5Tm9uVGVybWluYWxOb2RlKG5vblRlcm1pbmFsTm9kZUEsIG5vblRlcm1pbmFsTm9kZUIsIGNvbnRleHQsIHZlcmlmeUFoZWFkKSB7XG4gICAgbGV0IG5vblRlcm1pbmFsTm9kZVZlcmlmaWVkID0gZmFsc2U7XG5cbiAgICBjb25zdCBub25UZXJtaW5hbE5vZGUgPSBub25UZXJtaW5hbE5vZGVBLCAvLy9cbiAgICAgICAgICBjb25zdHJ1Y3Rvck5vblRlcm1pbmFsTm9kZSA9IG5vblRlcm1pbmFsTm9kZUIsIC8vL1xuICAgICAgICAgIHJ1bGVOYW1lID0gbm9uVGVybWluYWxOb2RlLmdldFJ1bGVOYW1lKCksIC8vL1xuICAgICAgICAgIGNvbnN0cnVjdG9yUnVsZU5hbWUgPSBjb25zdHJ1Y3Rvck5vblRlcm1pbmFsTm9kZS5nZXRSdWxlTmFtZSgpOyAvLy9cblxuICAgIGlmIChydWxlTmFtZSA9PT0gY29uc3RydWN0b3JSdWxlTmFtZSkge1xuICAgICAgc3dpdGNoIChydWxlTmFtZSkge1xuICAgICAgICBjYXNlIEFSR1VNRU5UX1JVTEVfTkFNRToge1xuICAgICAgICAgIGNvbnN0IGFyZ3VtZW50Tm9kZSA9IG5vblRlcm1pbmFsTm9kZSwgLy8vXG4gICAgICAgICAgICAgICAgY29uc3RydWN0b3JBcmd1bWVudE5vZGUgPSBjb25zdHJ1Y3Rvck5vblRlcm1pbmFsTm9kZSwgLy8vXG4gICAgICAgICAgICAgICAgYXJndW1lbnROb2RlVmVyaWZpZWQgPSB0aGlzLnZlcmlmeUFyZ3VtZW50Tm9kZShhcmd1bWVudE5vZGUsIGNvbnN0cnVjdG9yQXJndW1lbnROb2RlLCBjb250ZXh0LCB2ZXJpZnlBaGVhZCk7XG5cbiAgICAgICAgICBub25UZXJtaW5hbE5vZGVWZXJpZmllZCA9IGFyZ3VtZW50Tm9kZVZlcmlmaWVkOyAvLy9cblxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG5cbiAgICAgICAgZGVmYXVsdDoge1xuICAgICAgICAgIG5vblRlcm1pbmFsTm9kZVZlcmlmaWVkID0gc3VwZXIudmVyaWZ5Tm9uVGVybWluYWxOb2RlKG5vblRlcm1pbmFsTm9kZSwgY29uc3RydWN0b3JOb25UZXJtaW5hbE5vZGUsIGNvbnRleHQsIHZlcmlmeUFoZWFkKTtcblxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG5vblRlcm1pbmFsTm9kZVZlcmlmaWVkO1xuICB9XG5cbiAgdmVyaWZ5QXJndW1lbnROb2RlKGFyZ3VtZW50Tm9kZSwgY29uc3RydWN0b3JBcmd1bWVudE5vZGUsIGNvbnRleHQsIHZlcmlmeUFoZWFkKSB7XG4gICAgbGV0IGFyZ3VtZW50Tm9kZVZlcmlmaWVkID0gZmFsc2U7XG5cbiAgICBjb25zdCBhcmd1bWVudFN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKGFyZ3VtZW50Tm9kZSk7XG5cbiAgICBjb25zdCB0eXBlTm9kZSA9IHR5cGVOb2RlUXVlcnkoYXJndW1lbnROb2RlKTtcblxuICAgIGlmICh0eXBlTm9kZSAhPT0gbnVsbCkge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgVGhlICcke2FyZ3VtZW50U3RyaW5nfScgYXJndW1lbnQgc2hvdWxkIGJlIGEgdGVybSwgbm90IGEgdHlwZS5gLCBhcmd1bWVudE5vZGUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCB0ZXJtTm9kZSA9IHRlcm1Ob2RlUXVlcnkoYXJndW1lbnROb2RlKTtcblxuICAgICAgaWYgKCFhcmd1bWVudE5vZGVWZXJpZmllZCkge1xuICAgICAgICBjb25zdCBjb25zdHJ1Y3RvclRlcm1Ob2RlID0gdGVybU5vZGVRdWVyeShjb25zdHJ1Y3RvckFyZ3VtZW50Tm9kZSk7XG5cbiAgICAgICAgaWYgKGNvbnN0cnVjdG9yVGVybU5vZGUgIT09IG51bGwpIHtcbiAgICAgICAgICBjb25zdCBub2RlID0gdGVybU5vZGUsICAvLy9cbiAgICAgICAgICAgICAgICBjb25zdHJ1Y3Rvck5vZGUgPSBjb25zdHJ1Y3RvclRlcm1Ob2RlLCAgLy8vXG4gICAgICAgICAgICAgICAgbm9kZVZlcmlmaWVkID0gdGhpcy52ZXJpZnlOb2RlKG5vZGUsIGNvbnN0cnVjdG9yTm9kZSwgY29udGV4dCwgdmVyaWZ5QWhlYWQpO1xuXG4gICAgICAgICAgYXJndW1lbnROb2RlVmVyaWZpZWQgPSBub2RlVmVyaWZpZWQ7ICAvLy9cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoIWFyZ3VtZW50Tm9kZVZlcmlmaWVkKSB7XG4gICAgICAgIGNvbnN0IGNvbnN0cnVjdG9yVHlwZU5vZGUgPSB0eXBlTm9kZVF1ZXJ5KGNvbnN0cnVjdG9yQXJndW1lbnROb2RlKTtcblxuICAgICAgICBpZiAoY29uc3RydWN0b3JUeXBlTm9kZSAhPT0gbnVsbCkge1xuICAgICAgICAgIGNvbnN0IHsgdmVyaWZ5VGVybSB9ID0gdGVybU5vZGVzVmVyaWZpZXIsXG4gICAgICAgICAgICAgICAgdGVybXMgPSBbXSxcbiAgICAgICAgICAgICAgICB0ZXJtVmVyaWZpZWQgPSB2ZXJpZnlUZXJtKHRlcm1Ob2RlLCB0ZXJtcywgY29udGV4dCwgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgbGV0IHZlcmlmaWVkQWhlYWQgPSBmYWxzZTtcblxuICAgICAgICAgICAgICAgICAgY29uc3QgY29uc3RydWN0b3JUeXBlTmFtZSA9IHR5cGVOYW1lRnJvbVR5cGVOb2RlKGNvbnN0cnVjdG9yVHlwZU5vZGUpLFxuICAgICAgICAgICAgICAgICAgICAgICAgZmlyc3RUZXJtID0gZmlyc3QodGVybXMpLFxuICAgICAgICAgICAgICAgICAgICAgICAgdGVybSA9IGZpcnN0VGVybSwgLy8vXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXJtVHlwZSA9IHRlcm0uZ2V0VHlwZSgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3RydWN0b3JUeXBlID0gY29udGV4dC5maW5kVHlwZUJ5VHlwZU5hbWUoY29uc3RydWN0b3JUeXBlTmFtZSksXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXJtVHlwZUVxdWFsVG9PclN1YlR5cGVPZlR5cGUgPSB0ZXJtVHlwZS5pc0VxdWFsVG9PclN1YlR5cGVPZihjb25zdHJ1Y3RvclR5cGUpO1xuXG4gICAgICAgICAgICAgICAgICBpZiAodGVybVR5cGVFcXVhbFRvT3JTdWJUeXBlT2ZUeXBlKSB7XG4gICAgICAgICAgICAgICAgICAgIHZlcmlmaWVkQWhlYWQgPSB2ZXJpZnlBaGVhZCgpO1xuICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICByZXR1cm4gdmVyaWZpZWRBaGVhZDtcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgIGFyZ3VtZW50Tm9kZVZlcmlmaWVkID0gdGVybVZlcmlmaWVkOyAgLy8vXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gYXJndW1lbnROb2RlVmVyaWZpZWQ7XG4gIH1cbn1cblxuY29uc3QgdGVybU5vZGVzVmVyaWZpZXIgPSBuZXcgVGVybU5vZGVzVmVyaWZpZXIoKTtcblxuZXhwb3J0IGRlZmF1bHQgdGVybU5vZGVzVmVyaWZpZXI7XG5cbiJdLCJuYW1lcyI6WyJ0ZXJtTm9kZVF1ZXJ5Iiwibm9kZVF1ZXJ5IiwidHlwZU5vZGVRdWVyeSIsIlRlcm1Ob2Rlc1ZlcmlmaWVyIiwidmVyaWZ5Tm9uVGVybWluYWxOb2RlIiwibm9uVGVybWluYWxOb2RlQSIsIm5vblRlcm1pbmFsTm9kZUIiLCJjb250ZXh0IiwidmVyaWZ5QWhlYWQiLCJub25UZXJtaW5hbE5vZGVWZXJpZmllZCIsIm5vblRlcm1pbmFsTm9kZSIsImNvbnN0cnVjdG9yTm9uVGVybWluYWxOb2RlIiwicnVsZU5hbWUiLCJnZXRSdWxlTmFtZSIsImNvbnN0cnVjdG9yUnVsZU5hbWUiLCJBUkdVTUVOVF9SVUxFX05BTUUiLCJhcmd1bWVudE5vZGUiLCJjb25zdHJ1Y3RvckFyZ3VtZW50Tm9kZSIsImFyZ3VtZW50Tm9kZVZlcmlmaWVkIiwidmVyaWZ5QXJndW1lbnROb2RlIiwiYXJndW1lbnRTdHJpbmciLCJub2RlQXNTdHJpbmciLCJ0eXBlTm9kZSIsImRlYnVnIiwidGVybU5vZGUiLCJjb25zdHJ1Y3RvclRlcm1Ob2RlIiwibm9kZSIsImNvbnN0cnVjdG9yTm9kZSIsIm5vZGVWZXJpZmllZCIsInZlcmlmeU5vZGUiLCJjb25zdHJ1Y3RvclR5cGVOb2RlIiwidmVyaWZ5VGVybSIsInRlcm1Ob2Rlc1ZlcmlmaWVyIiwidGVybXMiLCJ0ZXJtVmVyaWZpZWQiLCJ2ZXJpZmllZEFoZWFkIiwiY29uc3RydWN0b3JUeXBlTmFtZSIsInR5cGVOYW1lRnJvbVR5cGVOb2RlIiwiZmlyc3RUZXJtIiwiZmlyc3QiLCJ0ZXJtIiwidGVybVR5cGUiLCJnZXRUeXBlIiwiY29uc3RydWN0b3JUeXBlIiwiZmluZFR5cGVCeVR5cGVOYW1lIiwidGVybVR5cGVFcXVhbFRvT3JTdWJUeXBlT2ZUeXBlIiwiaXNFcXVhbFRvT3JTdWJUeXBlT2YiLCJOb2Rlc1ZlcmlmaWVyIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFxR0E7OztlQUFBOzs7NERBbkcwQjtxQkFFSjt5QkFDYTtxQkFDYTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRWhELElBQU1BLGdCQUFnQkMsSUFBQUEsZ0JBQVMsRUFBQyxvQkFDMUJDLGdCQUFnQkQsSUFBQUEsZ0JBQVMsRUFBQztBQUVoQyxJQUFBLEFBQU1FLGtDQUFELEFBQUw7Y0FBTUE7K0JBQUFBO2FBQUFBO2dDQUFBQTs7O2tCQUFBQTs7WUFDSkMsS0FBQUE7bUJBQUFBLFNBQUFBLHNCQUFzQkMsZ0JBQWdCLEVBQUVDLGdCQUFnQixFQUFFQyxPQUFPLEVBQUVDLFdBQVc7Z0JBQzVFLElBQUlDLDBCQUEwQjtnQkFFOUIsSUFBTUMsa0JBQWtCTCxrQkFDbEJNLDZCQUE2Qkwsa0JBQzdCTSxXQUFXRixnQkFBZ0JHLFdBQVcsSUFDdENDLHNCQUFzQkgsMkJBQTJCRSxXQUFXLElBQUksR0FBRztnQkFFekUsSUFBSUQsYUFBYUUscUJBQXFCO29CQUNwQyxPQUFRRjt3QkFDTixLQUFLRyw2QkFBa0I7NEJBQUU7Z0NBQ3ZCLElBQU1DLGVBQWVOLGlCQUNmTywwQkFBMEJOLDRCQUMxQk8sdUJBQXVCLElBQUksQ0FBQ0Msa0JBQWtCLENBQUNILGNBQWNDLHlCQUF5QlYsU0FBU0M7Z0NBRXJHQywwQkFBMEJTLHNCQUFzQixHQUFHO2dDQUVuRDs0QkFDRjt3QkFFQTs0QkFBUztnQ0FDUFQsMEJBQTBCLHVCQXRCOUJOLDhCQXNCb0NDLHlCQUFOLElBQUssYUFBdUJNLGlCQUFpQkMsNEJBQTRCSixTQUFTQztnQ0FFNUc7NEJBQ0Y7b0JBQ0Y7Z0JBQ0Y7Z0JBRUEsT0FBT0M7WUFDVDs7O1lBRUFVLEtBQUFBO21CQUFBQSxTQUFBQSxtQkFBbUJILFlBQVksRUFBRUMsdUJBQXVCLEVBQUVWLE9BQU8sRUFBRUMsV0FBVztnQkFDNUUsSUFBSVUsdUJBQXVCO2dCQUUzQixJQUFNRSxpQkFBaUJiLFFBQVFjLFlBQVksQ0FBQ0w7Z0JBRTVDLElBQU1NLFdBQVdwQixjQUFjYztnQkFFL0IsSUFBSU0sYUFBYSxNQUFNO29CQUNyQmYsUUFBUWdCLEtBQUssQ0FBQyxBQUFDLFFBQXNCLE9BQWZILGdCQUFlLDZDQUEyQ0o7Z0JBQ2xGLE9BQU87b0JBQ0wsSUFBTVEsV0FBV3hCLGNBQWNnQjtvQkFFL0IsSUFBSSxDQUFDRSxzQkFBc0I7d0JBQ3pCLElBQU1PLHNCQUFzQnpCLGNBQWNpQjt3QkFFMUMsSUFBSVEsd0JBQXdCLE1BQU07NEJBQ2hDLElBQU1DLE9BQU9GLFVBQ1BHLGtCQUFrQkYscUJBQ2xCRyxlQUFlLElBQUksQ0FBQ0MsVUFBVSxDQUFDSCxNQUFNQyxpQkFBaUJwQixTQUFTQzs0QkFFckVVLHVCQUF1QlUsY0FBZSxHQUFHO3dCQUMzQztvQkFDRjtvQkFFQSxJQUFJLENBQUNWLHNCQUFzQjt3QkFDekIsSUFBTVksc0JBQXNCNUIsY0FBY2U7d0JBRTFDLElBQUlhLHdCQUF3QixNQUFNOzRCQUNoQyxJQUFNLEFBQUVDLGFBQWVDLGtCQUFmRCxZQUNGRSxRQUFRLEVBQUUsRUFDVkMsZUFBZUgsV0FBV1AsVUFBVVMsT0FBTzFCLFNBQVM7Z0NBQ2xELElBQUk0QixnQkFBZ0I7Z0NBRXBCLElBQU1DLHNCQUFzQkMsSUFBQUEsMkJBQW9CLEVBQUNQLHNCQUMzQ1EsWUFBWUMsSUFBQUEsWUFBSyxFQUFDTixRQUNsQk8sT0FBT0YsV0FDUEcsV0FBV0QsS0FBS0UsT0FBTyxJQUN2QkMsa0JBQWtCcEMsUUFBUXFDLGtCQUFrQixDQUFDUixzQkFDN0NTLGlDQUFpQ0osU0FBU0ssb0JBQW9CLENBQUNIO2dDQUVyRSxJQUFJRSxnQ0FBZ0M7b0NBQ2xDVixnQkFBZ0IzQjtnQ0FDbEI7Z0NBRUEsT0FBTzJCOzRCQUNUOzRCQUVOakIsdUJBQXVCZ0IsY0FBZSxHQUFHO3dCQUMzQztvQkFDRjtnQkFDRjtnQkFFQSxPQUFPaEI7WUFDVDs7O1dBckZJZjtFQUEwQjRDLGNBQWE7QUF3RjdDLElBQU1mLG9CQUFvQixJQUFJN0I7SUFFOUIsV0FBZTZCIn0=