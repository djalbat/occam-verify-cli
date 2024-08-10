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
var _local = /*#__PURE__*/ _interop_require_default(require("../../context/local"));
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
                            var metavariableNode = nonTerminalNode, standaloneMetavariableVerified = (0, _metavariable.verifyStandaloneMetavariable)(metavariableNode, localMetaContext, verifyAhead), metavariableNodeVerified = standaloneMetavariableVerified; ///
                            nonTerminalNodeVerified = metavariableNodeVerified; ///
                            break;
                        }
                    case _ruleNames.VARIABLE_RULE_NAME:
                        {
                            var variableNode = nonTerminalNode, standaloneVariableVerified = (0, _variable.verifyStandaloneVariable)(variableNode, localMetaContext, verifyAhead), variableNodeVerified = standaloneVariableVerified; ///
                            nonTerminalNodeVerified = variableNodeVerified; ///
                            break;
                        }
                    case _ruleNames.TERM_RULE_NAME:
                        {
                            var termNode = nonTerminalNode, localContext = _local.default.fromLocalMetaContext(localMetaContext), standaloneTermVerified = (0, _term.verifyStandaloneTerm)(termNode, localContext, verifyAhead), termNodeVerified = standaloneTermVerified; ///
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy92ZXJpZmllci9ub2RlL21ldGFzdGF0ZW1lbnQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBMb2NhbENvbnRleHQgZnJvbSBcIi4uLy4uL2NvbnRleHQvbG9jYWxcIjtcbmltcG9ydCBOb2RlVmVyaWZpZXIgZnJvbSBcIi4uLy4uL3ZlcmlmaWVyL25vZGVcIjtcblxuaW1wb3J0IHsgdmVyaWZ5U3RhbmRhbG9uZVRlcm0gfSBmcm9tIFwiLi4vLi4vdmVyaWZ5L3Rlcm1cIjtcbmltcG9ydCB7IHZlcmlmeVN0YW5kYWxvbmVWYXJpYWJsZSB9IGZyb20gXCIuLi8uLi92ZXJpZnkvdmFyaWFibGVcIjtcbmltcG9ydCB7IHZlcmlmeVN0YW5kYWxvbmVNZXRhdmFyaWFibGUgfSBmcm9tIFwiLi4vLi4vdmVyaWZ5L21ldGF2YXJpYWJsZVwiO1xuaW1wb3J0IHsgVEVSTV9SVUxFX05BTUUsIFZBUklBQkxFX1JVTEVfTkFNRSwgTUVUQVZBUklBQkxFX1JVTEVfTkFNRSB9IGZyb20gXCIuLi8uLi9ydWxlTmFtZXNcIjtcblxuY2xhc3MgTWV0YXN0YXRlbWVudE5vZGVWZXJpZmllciBleHRlbmRzIE5vZGVWZXJpZmllciB7XG4gIHZlcmlmeU5vblRlcm1pbmFsTm9kZShub25UZXJtaW5hbE5vZGUsIGxvY2FsTWV0YUNvbnRleHQsIHZlcmlmeUFoZWFkKSB7XG4gICAgbGV0IG5vblRlcm1pbmFsTm9kZVZlcmlmaWVkO1xuXG4gICAgY29uc3QgcnVsZU5hbWUgPSBub25UZXJtaW5hbE5vZGUuZ2V0UnVsZU5hbWUoKTsgLy8vXG5cbiAgICBzd2l0Y2ggKHJ1bGVOYW1lKSB7XG4gICAgICBjYXNlIE1FVEFWQVJJQUJMRV9SVUxFX05BTUU6IHtcbiAgICAgICAgY29uc3QgbWV0YXZhcmlhYmxlTm9kZSA9IG5vblRlcm1pbmFsTm9kZSwgLy8vXG4gICAgICAgICAgICAgIHN0YW5kYWxvbmVNZXRhdmFyaWFibGVWZXJpZmllZCA9IHZlcmlmeVN0YW5kYWxvbmVNZXRhdmFyaWFibGUobWV0YXZhcmlhYmxlTm9kZSwgbG9jYWxNZXRhQ29udGV4dCwgdmVyaWZ5QWhlYWQpLFxuICAgICAgICAgICAgICBtZXRhdmFyaWFibGVOb2RlVmVyaWZpZWQgPSBzdGFuZGFsb25lTWV0YXZhcmlhYmxlVmVyaWZpZWQ7ICAvLy9cblxuICAgICAgICBub25UZXJtaW5hbE5vZGVWZXJpZmllZCA9IG1ldGF2YXJpYWJsZU5vZGVWZXJpZmllZDsgLy8vXG5cbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG5cbiAgICAgIGNhc2UgVkFSSUFCTEVfUlVMRV9OQU1FOiB7XG4gICAgICAgIGNvbnN0IHZhcmlhYmxlTm9kZSA9IG5vblRlcm1pbmFsTm9kZSwgLy8vXG4gICAgICAgICAgICAgIHN0YW5kYWxvbmVWYXJpYWJsZVZlcmlmaWVkID0gdmVyaWZ5U3RhbmRhbG9uZVZhcmlhYmxlKHZhcmlhYmxlTm9kZSwgbG9jYWxNZXRhQ29udGV4dCwgdmVyaWZ5QWhlYWQpLFxuICAgICAgICAgICAgICB2YXJpYWJsZU5vZGVWZXJpZmllZCA9IHN0YW5kYWxvbmVWYXJpYWJsZVZlcmlmaWVkOyAgLy8vXG5cbiAgICAgICAgbm9uVGVybWluYWxOb2RlVmVyaWZpZWQgPSB2YXJpYWJsZU5vZGVWZXJpZmllZDsgLy8vXG5cbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG5cbiAgICAgIGNhc2UgVEVSTV9SVUxFX05BTUU6IHtcbiAgICAgICAgY29uc3QgdGVybU5vZGUgPSBub25UZXJtaW5hbE5vZGUsIC8vL1xuICAgICAgICAgICAgICBsb2NhbENvbnRleHQgPSBMb2NhbENvbnRleHQuZnJvbUxvY2FsTWV0YUNvbnRleHQobG9jYWxNZXRhQ29udGV4dCksXG4gICAgICAgICAgICAgIHN0YW5kYWxvbmVUZXJtVmVyaWZpZWQgPSB2ZXJpZnlTdGFuZGFsb25lVGVybSh0ZXJtTm9kZSwgbG9jYWxDb250ZXh0LCB2ZXJpZnlBaGVhZCksXG4gICAgICAgICAgICAgIHRlcm1Ob2RlVmVyaWZpZWQgPSBzdGFuZGFsb25lVGVybVZlcmlmaWVkOyAgLy8vXG5cbiAgICAgICAgbm9uVGVybWluYWxOb2RlVmVyaWZpZWQgPSB0ZXJtTm9kZVZlcmlmaWVkOyAvLy9cblxuICAgICAgICBicmVhaztcbiAgICAgIH1cblxuICAgICAgZGVmYXVsdDoge1xuICAgICAgICBub25UZXJtaW5hbE5vZGVWZXJpZmllZCA9IHN1cGVyLnZlcmlmeU5vblRlcm1pbmFsTm9kZShub25UZXJtaW5hbE5vZGUsIGxvY2FsTWV0YUNvbnRleHQsIHZlcmlmeUFoZWFkKTtcblxuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbm9uVGVybWluYWxOb2RlVmVyaWZpZWQ7XG4gIH1cbn1cblxuY29uc3QgbWV0YXN0YXRlbWVudE5vZGVWZXJpZmllciA9IG5ldyBNZXRhc3RhdGVtZW50Tm9kZVZlcmlmaWVyKCk7XG5cbmV4cG9ydCBkZWZhdWx0IG1ldGFzdGF0ZW1lbnROb2RlVmVyaWZpZXI7XG4iXSwibmFtZXMiOlsiTWV0YXN0YXRlbWVudE5vZGVWZXJpZmllciIsInZlcmlmeU5vblRlcm1pbmFsTm9kZSIsIm5vblRlcm1pbmFsTm9kZSIsImxvY2FsTWV0YUNvbnRleHQiLCJ2ZXJpZnlBaGVhZCIsIm5vblRlcm1pbmFsTm9kZVZlcmlmaWVkIiwicnVsZU5hbWUiLCJnZXRSdWxlTmFtZSIsIk1FVEFWQVJJQUJMRV9SVUxFX05BTUUiLCJtZXRhdmFyaWFibGVOb2RlIiwic3RhbmRhbG9uZU1ldGF2YXJpYWJsZVZlcmlmaWVkIiwidmVyaWZ5U3RhbmRhbG9uZU1ldGF2YXJpYWJsZSIsIm1ldGF2YXJpYWJsZU5vZGVWZXJpZmllZCIsIlZBUklBQkxFX1JVTEVfTkFNRSIsInZhcmlhYmxlTm9kZSIsInN0YW5kYWxvbmVWYXJpYWJsZVZlcmlmaWVkIiwidmVyaWZ5U3RhbmRhbG9uZVZhcmlhYmxlIiwidmFyaWFibGVOb2RlVmVyaWZpZWQiLCJURVJNX1JVTEVfTkFNRSIsInRlcm1Ob2RlIiwibG9jYWxDb250ZXh0IiwiTG9jYWxDb250ZXh0IiwiZnJvbUxvY2FsTWV0YUNvbnRleHQiLCJzdGFuZGFsb25lVGVybVZlcmlmaWVkIiwidmVyaWZ5U3RhbmRhbG9uZVRlcm0iLCJ0ZXJtTm9kZVZlcmlmaWVkIiwiTm9kZVZlcmlmaWVyIiwibWV0YXN0YXRlbWVudE5vZGVWZXJpZmllciJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBNkRBOzs7ZUFBQTs7OzREQTNEeUI7MkRBQ0E7b0JBRVk7d0JBQ0k7NEJBQ0k7eUJBQzhCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFM0UsSUFBQSxBQUFNQSwwQ0FBRCxBQUFMO2NBQU1BOytCQUFBQTthQUFBQTtnQ0FBQUE7OztrQkFBQUE7O1lBQ0pDLEtBQUFBO21CQUFBQSxTQUFBQSxzQkFBc0JDLGVBQWUsRUFBRUMsZ0JBQWdCLEVBQUVDLFdBQVc7Z0JBQ2xFLElBQUlDO2dCQUVKLElBQU1DLFdBQVdKLGdCQUFnQkssV0FBVyxJQUFJLEdBQUc7Z0JBRW5ELE9BQVFEO29CQUNOLEtBQUtFLGlDQUFzQjt3QkFBRTs0QkFDM0IsSUFBTUMsbUJBQW1CUCxpQkFDbkJRLGlDQUFpQ0MsSUFBQUEsMENBQTRCLEVBQUNGLGtCQUFrQk4sa0JBQWtCQyxjQUNsR1EsMkJBQTJCRixnQ0FBaUMsR0FBRzs0QkFFckVMLDBCQUEwQk8sMEJBQTBCLEdBQUc7NEJBRXZEO3dCQUNGO29CQUVBLEtBQUtDLDZCQUFrQjt3QkFBRTs0QkFDdkIsSUFBTUMsZUFBZVosaUJBQ2ZhLDZCQUE2QkMsSUFBQUEsa0NBQXdCLEVBQUNGLGNBQWNYLGtCQUFrQkMsY0FDdEZhLHVCQUF1QkYsNEJBQTZCLEdBQUc7NEJBRTdEViwwQkFBMEJZLHNCQUFzQixHQUFHOzRCQUVuRDt3QkFDRjtvQkFFQSxLQUFLQyx5QkFBYzt3QkFBRTs0QkFDbkIsSUFBTUMsV0FBV2pCLGlCQUNYa0IsZUFBZUMsY0FBWSxDQUFDQyxvQkFBb0IsQ0FBQ25CLG1CQUNqRG9CLHlCQUF5QkMsSUFBQUEsMEJBQW9CLEVBQUNMLFVBQVVDLGNBQWNoQixjQUN0RXFCLG1CQUFtQkYsd0JBQXlCLEdBQUc7NEJBRXJEbEIsMEJBQTBCb0Isa0JBQWtCLEdBQUc7NEJBRS9DO3dCQUNGO29CQUVBO3dCQUFTOzRCQUNQcEIsMEJBQTBCLHVCQXZDNUJMLHNDQXVDa0NDLHlCQUFOLElBQUssYUFBdUJDLGlCQUFpQkMsa0JBQWtCQzs0QkFFekY7d0JBQ0Y7Z0JBQ0Y7Z0JBRUEsT0FBT0M7WUFDVDs7O1dBOUNJTDtFQUFrQzBCLGFBQVk7QUFpRHBELElBQU1DLDRCQUE0QixJQUFJM0I7SUFFdEMsV0FBZTJCIn0=