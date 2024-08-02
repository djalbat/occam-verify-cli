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
var _node = /*#__PURE__*/ _interop_require_default(require("../../verifier/node"));
var _term = require("../../verify/term");
var _variable = require("../../verify/variable");
var _metavariable = require("../../verify/metavariable");
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
var MetastatementNodeVerifier = /*#__PURE__*/ function(NodeVerifier) {
    _inherits(MetastatementNodeVerifier, NodeVerifier);
    var _super = _create_super(MetastatementNodeVerifier);
    function MetastatementNodeVerifier() {
        _class_call_check(this, MetastatementNodeVerifier);
        return _super.apply(this, arguments);
    }
    _create_class(MetastatementNodeVerifier, [
        {
            key: "verifyNonTerminalNode",
            value: function verifyNonTerminalNode(nonTerminalNode, localMetaContext, verifyAhead) {
                var nonTerminalNodeVerified;
                var ruleName = nonTerminalNode.getRuleName(); ///
                switch(ruleName){
                    case _ruleNames.METAVARIABLE_RULE_NAME:
                        {
                            var context = localMetaContext, metavariableNode = nonTerminalNode, standaloneMetavariableVerified = (0, _metavariable.verifyStandaloneMetavariable)(metavariableNode, context, verifyAhead), metavariableNodeVerified = standaloneMetavariableVerified; ///
                            nonTerminalNodeVerified = metavariableNodeVerified; ///
                            break;
                        }
                    case _ruleNames.VARIABLE_RULE_NAME:
                        {
                            var context1 = localMetaContext, variableNode = nonTerminalNode, standaloneVariableVerified = (0, _variable.verifyStandaloneVariable)(variableNode, context1, verifyAhead), variableNodeVerified = standaloneVariableVerified; ///
                            nonTerminalNodeVerified = variableNodeVerified; ///
                            break;
                        }
                    case _ruleNames.TERM_RULE_NAME:
                        {
                            var context2 = localMetaContext, termNode = nonTerminalNode, standaloneTermVerified = (0, _term.verifyStandaloneTerm)(termNode, context2, verifyAhead), termNodeVerified = standaloneTermVerified; ///
                            nonTerminalNodeVerified = termNodeVerified; ///
                            break;
                        }
                    default:
                        {
                            nonTerminalNodeVerified = _get(_get_prototype_of(MetastatementNodeVerifier.prototype), "verifyNonTerminalNode", this).call(this, nonTerminalNode, localMetaContext, verifyAhead);
                            break;
                        }
                }
                return nonTerminalNodeVerified;
            }
        }
    ]);
    return MetastatementNodeVerifier;
}(_node.default);
var metastatementNodeVerifier = new MetastatementNodeVerifier();
var _default = metastatementNodeVerifier;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy92ZXJpZmllci9ub2RlL21ldGFzdGF0ZW1lbnQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBOb2RlVmVyaWZpZXIgZnJvbSBcIi4uLy4uL3ZlcmlmaWVyL25vZGVcIjtcblxuaW1wb3J0IHsgdmVyaWZ5U3RhbmRhbG9uZVRlcm0gfSBmcm9tIFwiLi4vLi4vdmVyaWZ5L3Rlcm1cIjtcbmltcG9ydCB7IHZlcmlmeVN0YW5kYWxvbmVWYXJpYWJsZSB9IGZyb20gXCIuLi8uLi92ZXJpZnkvdmFyaWFibGVcIjtcbmltcG9ydCB7IHZlcmlmeVN0YW5kYWxvbmVNZXRhdmFyaWFibGUgfSBmcm9tIFwiLi4vLi4vdmVyaWZ5L21ldGF2YXJpYWJsZVwiO1xuaW1wb3J0IHsgVEVSTV9SVUxFX05BTUUsIFZBUklBQkxFX1JVTEVfTkFNRSwgTUVUQVZBUklBQkxFX1JVTEVfTkFNRSB9IGZyb20gXCIuLi8uLi9ydWxlTmFtZXNcIjtcblxuY2xhc3MgTWV0YXN0YXRlbWVudE5vZGVWZXJpZmllciBleHRlbmRzIE5vZGVWZXJpZmllciB7XG4gIHZlcmlmeU5vblRlcm1pbmFsTm9kZShub25UZXJtaW5hbE5vZGUsIGxvY2FsTWV0YUNvbnRleHQsIHZlcmlmeUFoZWFkKSB7XG4gICAgbGV0IG5vblRlcm1pbmFsTm9kZVZlcmlmaWVkO1xuXG4gICAgY29uc3QgcnVsZU5hbWUgPSBub25UZXJtaW5hbE5vZGUuZ2V0UnVsZU5hbWUoKTsgLy8vXG5cbiAgICBzd2l0Y2ggKHJ1bGVOYW1lKSB7XG4gICAgICBjYXNlIE1FVEFWQVJJQUJMRV9SVUxFX05BTUU6IHtcbiAgICAgICAgY29uc3QgY29udGV4dCA9IGxvY2FsTWV0YUNvbnRleHQsIC8vL1xuICAgICAgICAgICAgICBtZXRhdmFyaWFibGVOb2RlID0gbm9uVGVybWluYWxOb2RlLCAvLy9cbiAgICAgICAgICAgICAgc3RhbmRhbG9uZU1ldGF2YXJpYWJsZVZlcmlmaWVkID0gdmVyaWZ5U3RhbmRhbG9uZU1ldGF2YXJpYWJsZShtZXRhdmFyaWFibGVOb2RlLCBjb250ZXh0LCB2ZXJpZnlBaGVhZCksXG4gICAgICAgICAgICAgIG1ldGF2YXJpYWJsZU5vZGVWZXJpZmllZCA9IHN0YW5kYWxvbmVNZXRhdmFyaWFibGVWZXJpZmllZDsgIC8vL1xuXG4gICAgICAgIG5vblRlcm1pbmFsTm9kZVZlcmlmaWVkID0gbWV0YXZhcmlhYmxlTm9kZVZlcmlmaWVkOyAvLy9cblxuICAgICAgICBicmVhaztcbiAgICAgIH1cblxuICAgICAgY2FzZSBWQVJJQUJMRV9SVUxFX05BTUU6IHtcbiAgICAgICAgY29uc3QgY29udGV4dCA9IGxvY2FsTWV0YUNvbnRleHQsIC8vL1xuICAgICAgICAgICAgICB2YXJpYWJsZU5vZGUgPSBub25UZXJtaW5hbE5vZGUsIC8vL1xuICAgICAgICAgICAgICBzdGFuZGFsb25lVmFyaWFibGVWZXJpZmllZCA9IHZlcmlmeVN0YW5kYWxvbmVWYXJpYWJsZSh2YXJpYWJsZU5vZGUsIGNvbnRleHQsIHZlcmlmeUFoZWFkKSxcbiAgICAgICAgICAgICAgdmFyaWFibGVOb2RlVmVyaWZpZWQgPSBzdGFuZGFsb25lVmFyaWFibGVWZXJpZmllZDsgIC8vL1xuXG4gICAgICAgIG5vblRlcm1pbmFsTm9kZVZlcmlmaWVkID0gdmFyaWFibGVOb2RlVmVyaWZpZWQ7IC8vL1xuXG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgICBjYXNlIFRFUk1fUlVMRV9OQU1FOiB7XG4gICAgICAgIGNvbnN0IGNvbnRleHQgPSBsb2NhbE1ldGFDb250ZXh0LCAvLy9cbiAgICAgICAgICAgICAgdGVybU5vZGUgPSBub25UZXJtaW5hbE5vZGUsIC8vL1xuICAgICAgICAgICAgICBzdGFuZGFsb25lVGVybVZlcmlmaWVkID0gdmVyaWZ5U3RhbmRhbG9uZVRlcm0odGVybU5vZGUsIGNvbnRleHQsIHZlcmlmeUFoZWFkKSxcbiAgICAgICAgICAgICAgdGVybU5vZGVWZXJpZmllZCA9IHN0YW5kYWxvbmVUZXJtVmVyaWZpZWQ7ICAvLy9cblxuICAgICAgICBub25UZXJtaW5hbE5vZGVWZXJpZmllZCA9IHRlcm1Ob2RlVmVyaWZpZWQ7IC8vL1xuXG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgICBkZWZhdWx0OiB7XG4gICAgICAgIG5vblRlcm1pbmFsTm9kZVZlcmlmaWVkID0gc3VwZXIudmVyaWZ5Tm9uVGVybWluYWxOb2RlKG5vblRlcm1pbmFsTm9kZSwgbG9jYWxNZXRhQ29udGV4dCwgdmVyaWZ5QWhlYWQpO1xuXG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBub25UZXJtaW5hbE5vZGVWZXJpZmllZDtcbiAgfVxufVxuXG5jb25zdCBtZXRhc3RhdGVtZW50Tm9kZVZlcmlmaWVyID0gbmV3IE1ldGFzdGF0ZW1lbnROb2RlVmVyaWZpZXIoKTtcblxuZXhwb3J0IGRlZmF1bHQgbWV0YXN0YXRlbWVudE5vZGVWZXJpZmllcjtcbiJdLCJuYW1lcyI6WyJNZXRhc3RhdGVtZW50Tm9kZVZlcmlmaWVyIiwidmVyaWZ5Tm9uVGVybWluYWxOb2RlIiwibm9uVGVybWluYWxOb2RlIiwibG9jYWxNZXRhQ29udGV4dCIsInZlcmlmeUFoZWFkIiwibm9uVGVybWluYWxOb2RlVmVyaWZpZWQiLCJydWxlTmFtZSIsImdldFJ1bGVOYW1lIiwiTUVUQVZBUklBQkxFX1JVTEVfTkFNRSIsImNvbnRleHQiLCJtZXRhdmFyaWFibGVOb2RlIiwic3RhbmRhbG9uZU1ldGF2YXJpYWJsZVZlcmlmaWVkIiwidmVyaWZ5U3RhbmRhbG9uZU1ldGF2YXJpYWJsZSIsIm1ldGF2YXJpYWJsZU5vZGVWZXJpZmllZCIsIlZBUklBQkxFX1JVTEVfTkFNRSIsInZhcmlhYmxlTm9kZSIsInN0YW5kYWxvbmVWYXJpYWJsZVZlcmlmaWVkIiwidmVyaWZ5U3RhbmRhbG9uZVZhcmlhYmxlIiwidmFyaWFibGVOb2RlVmVyaWZpZWQiLCJURVJNX1JVTEVfTkFNRSIsInRlcm1Ob2RlIiwic3RhbmRhbG9uZVRlcm1WZXJpZmllZCIsInZlcmlmeVN0YW5kYWxvbmVUZXJtIiwidGVybU5vZGVWZXJpZmllZCIsIk5vZGVWZXJpZmllciIsIm1ldGFzdGF0ZW1lbnROb2RlVmVyaWZpZXIiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQThEQTs7O2VBQUE7OzsyREE1RHlCO29CQUVZO3dCQUNJOzRCQUNJO3lCQUM4Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTNFLElBQUEsQUFBTUEsMENBQUQsQUFBTDtjQUFNQTsrQkFBQUE7YUFBQUE7Z0NBQUFBOzs7a0JBQUFBOztZQUNKQyxLQUFBQTttQkFBQUEsU0FBQUEsc0JBQXNCQyxlQUFlLEVBQUVDLGdCQUFnQixFQUFFQyxXQUFXO2dCQUNsRSxJQUFJQztnQkFFSixJQUFNQyxXQUFXSixnQkFBZ0JLLFdBQVcsSUFBSSxHQUFHO2dCQUVuRCxPQUFRRDtvQkFDTixLQUFLRSxpQ0FBc0I7d0JBQUU7NEJBQzNCLElBQU1DLFVBQVVOLGtCQUNWTyxtQkFBbUJSLGlCQUNuQlMsaUNBQWlDQyxJQUFBQSwwQ0FBNEIsRUFBQ0Ysa0JBQWtCRCxTQUFTTCxjQUN6RlMsMkJBQTJCRixnQ0FBaUMsR0FBRzs0QkFFckVOLDBCQUEwQlEsMEJBQTBCLEdBQUc7NEJBRXZEO3dCQUNGO29CQUVBLEtBQUtDLDZCQUFrQjt3QkFBRTs0QkFDdkIsSUFBTUwsV0FBVU4sa0JBQ1ZZLGVBQWViLGlCQUNmYyw2QkFBNkJDLElBQUFBLGtDQUF3QixFQUFDRixjQUFjTixVQUFTTCxjQUM3RWMsdUJBQXVCRiw0QkFBNkIsR0FBRzs0QkFFN0RYLDBCQUEwQmEsc0JBQXNCLEdBQUc7NEJBRW5EO3dCQUNGO29CQUVBLEtBQUtDLHlCQUFjO3dCQUFFOzRCQUNuQixJQUFNVixXQUFVTixrQkFDVmlCLFdBQVdsQixpQkFDWG1CLHlCQUF5QkMsSUFBQUEsMEJBQW9CLEVBQUNGLFVBQVVYLFVBQVNMLGNBQ2pFbUIsbUJBQW1CRix3QkFBeUIsR0FBRzs0QkFFckRoQiwwQkFBMEJrQixrQkFBa0IsR0FBRzs0QkFFL0M7d0JBQ0Y7b0JBRUE7d0JBQVM7NEJBQ1BsQiwwQkFBMEIsdUJBekM1Qkwsc0NBeUNrQ0MseUJBQU4sSUFBSyxhQUF1QkMsaUJBQWlCQyxrQkFBa0JDOzRCQUV6Rjt3QkFDRjtnQkFDRjtnQkFFQSxPQUFPQztZQUNUOzs7V0FoRElMO0VBQWtDd0IsYUFBWTtBQW1EcEQsSUFBTUMsNEJBQTRCLElBQUl6QjtJQUV0QyxXQUFleUIifQ==