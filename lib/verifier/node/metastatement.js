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
                            var variableNode = nonTerminalNode, localContext = _local.default.fromLocalMetaContext(localMetaContext), standaloneVariableVerified = (0, _variable.verifyStandaloneVariable)(variableNode, localContext, verifyAhead), variableNodeVerified = standaloneVariableVerified; ///
                            nonTerminalNodeVerified = variableNodeVerified; ///
                            break;
                        }
                    case _ruleNames.TERM_RULE_NAME:
                        {
                            var termNode = nonTerminalNode, localContext1 = _local.default.fromLocalMetaContext(localMetaContext), standaloneTermVerified = (0, _term.verifyStandaloneTerm)(termNode, localContext1, verifyAhead), termNodeVerified = standaloneTermVerified; ///
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy92ZXJpZmllci9ub2RlL21ldGFzdGF0ZW1lbnQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBMb2NhbENvbnRleHQgZnJvbSBcIi4uLy4uL2NvbnRleHQvbG9jYWxcIjtcbmltcG9ydCBOb2RlVmVyaWZpZXIgZnJvbSBcIi4uLy4uL3ZlcmlmaWVyL25vZGVcIjtcblxuaW1wb3J0IHsgdmVyaWZ5U3RhbmRhbG9uZVRlcm0gfSBmcm9tIFwiLi4vLi4vdmVyaWZ5L3Rlcm1cIjtcbmltcG9ydCB7IHZlcmlmeVN0YW5kYWxvbmVWYXJpYWJsZSB9IGZyb20gXCIuLi8uLi92ZXJpZnkvdmFyaWFibGVcIjtcbmltcG9ydCB7IHZlcmlmeVN0YW5kYWxvbmVNZXRhdmFyaWFibGUgfSBmcm9tIFwiLi4vLi4vdmVyaWZ5L21ldGF2YXJpYWJsZVwiO1xuaW1wb3J0IHsgVEVSTV9SVUxFX05BTUUsIFZBUklBQkxFX1JVTEVfTkFNRSwgTUVUQVZBUklBQkxFX1JVTEVfTkFNRSB9IGZyb20gXCIuLi8uLi9ydWxlTmFtZXNcIjtcblxuY2xhc3MgTWV0YXN0YXRlbWVudE5vZGVWZXJpZmllciBleHRlbmRzIE5vZGVWZXJpZmllciB7XG4gIHZlcmlmeU5vblRlcm1pbmFsTm9kZShub25UZXJtaW5hbE5vZGUsIGxvY2FsTWV0YUNvbnRleHQsIHZlcmlmeUFoZWFkKSB7XG4gICAgbGV0IG5vblRlcm1pbmFsTm9kZVZlcmlmaWVkO1xuXG4gICAgY29uc3QgcnVsZU5hbWUgPSBub25UZXJtaW5hbE5vZGUuZ2V0UnVsZU5hbWUoKTsgLy8vXG5cbiAgICBzd2l0Y2ggKHJ1bGVOYW1lKSB7XG4gICAgICBjYXNlIE1FVEFWQVJJQUJMRV9SVUxFX05BTUU6IHtcbiAgICAgICAgY29uc3QgbWV0YXZhcmlhYmxlTm9kZSA9IG5vblRlcm1pbmFsTm9kZSwgLy8vXG4gICAgICAgICAgICAgIHN0YW5kYWxvbmVNZXRhdmFyaWFibGVWZXJpZmllZCA9IHZlcmlmeVN0YW5kYWxvbmVNZXRhdmFyaWFibGUobWV0YXZhcmlhYmxlTm9kZSwgbG9jYWxNZXRhQ29udGV4dCwgdmVyaWZ5QWhlYWQpLFxuICAgICAgICAgICAgICBtZXRhdmFyaWFibGVOb2RlVmVyaWZpZWQgPSBzdGFuZGFsb25lTWV0YXZhcmlhYmxlVmVyaWZpZWQ7ICAvLy9cblxuICAgICAgICBub25UZXJtaW5hbE5vZGVWZXJpZmllZCA9IG1ldGF2YXJpYWJsZU5vZGVWZXJpZmllZDsgLy8vXG5cbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG5cbiAgICAgIGNhc2UgVkFSSUFCTEVfUlVMRV9OQU1FOiB7XG4gICAgICAgIGNvbnN0IHZhcmlhYmxlTm9kZSA9IG5vblRlcm1pbmFsTm9kZSwgLy8vXG4gICAgICAgICAgICAgIGxvY2FsQ29udGV4dCA9IExvY2FsQ29udGV4dC5mcm9tTG9jYWxNZXRhQ29udGV4dChsb2NhbE1ldGFDb250ZXh0KSxcbiAgICAgICAgICAgICAgc3RhbmRhbG9uZVZhcmlhYmxlVmVyaWZpZWQgPSB2ZXJpZnlTdGFuZGFsb25lVmFyaWFibGUodmFyaWFibGVOb2RlLCBsb2NhbENvbnRleHQsIHZlcmlmeUFoZWFkKSxcbiAgICAgICAgICAgICAgdmFyaWFibGVOb2RlVmVyaWZpZWQgPSBzdGFuZGFsb25lVmFyaWFibGVWZXJpZmllZDsgIC8vL1xuXG4gICAgICAgIG5vblRlcm1pbmFsTm9kZVZlcmlmaWVkID0gdmFyaWFibGVOb2RlVmVyaWZpZWQ7IC8vL1xuXG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgICBjYXNlIFRFUk1fUlVMRV9OQU1FOiB7XG4gICAgICAgIGNvbnN0IHRlcm1Ob2RlID0gbm9uVGVybWluYWxOb2RlLCAvLy9cbiAgICAgICAgICAgICAgbG9jYWxDb250ZXh0ID0gTG9jYWxDb250ZXh0LmZyb21Mb2NhbE1ldGFDb250ZXh0KGxvY2FsTWV0YUNvbnRleHQpLFxuICAgICAgICAgICAgICBzdGFuZGFsb25lVGVybVZlcmlmaWVkID0gdmVyaWZ5U3RhbmRhbG9uZVRlcm0odGVybU5vZGUsIGxvY2FsQ29udGV4dCwgdmVyaWZ5QWhlYWQpLFxuICAgICAgICAgICAgICB0ZXJtTm9kZVZlcmlmaWVkID0gc3RhbmRhbG9uZVRlcm1WZXJpZmllZDsgIC8vL1xuXG4gICAgICAgIG5vblRlcm1pbmFsTm9kZVZlcmlmaWVkID0gdGVybU5vZGVWZXJpZmllZDsgLy8vXG5cbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG5cbiAgICAgIGRlZmF1bHQ6IHtcbiAgICAgICAgbm9uVGVybWluYWxOb2RlVmVyaWZpZWQgPSBzdXBlci52ZXJpZnlOb25UZXJtaW5hbE5vZGUobm9uVGVybWluYWxOb2RlLCBsb2NhbE1ldGFDb250ZXh0LCB2ZXJpZnlBaGVhZCk7XG5cbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG5vblRlcm1pbmFsTm9kZVZlcmlmaWVkO1xuICB9XG59XG5cbmNvbnN0IG1ldGFzdGF0ZW1lbnROb2RlVmVyaWZpZXIgPSBuZXcgTWV0YXN0YXRlbWVudE5vZGVWZXJpZmllcigpO1xuXG5leHBvcnQgZGVmYXVsdCBtZXRhc3RhdGVtZW50Tm9kZVZlcmlmaWVyO1xuIl0sIm5hbWVzIjpbIk1ldGFzdGF0ZW1lbnROb2RlVmVyaWZpZXIiLCJ2ZXJpZnlOb25UZXJtaW5hbE5vZGUiLCJub25UZXJtaW5hbE5vZGUiLCJsb2NhbE1ldGFDb250ZXh0IiwidmVyaWZ5QWhlYWQiLCJub25UZXJtaW5hbE5vZGVWZXJpZmllZCIsInJ1bGVOYW1lIiwiZ2V0UnVsZU5hbWUiLCJNRVRBVkFSSUFCTEVfUlVMRV9OQU1FIiwibWV0YXZhcmlhYmxlTm9kZSIsInN0YW5kYWxvbmVNZXRhdmFyaWFibGVWZXJpZmllZCIsInZlcmlmeVN0YW5kYWxvbmVNZXRhdmFyaWFibGUiLCJtZXRhdmFyaWFibGVOb2RlVmVyaWZpZWQiLCJWQVJJQUJMRV9SVUxFX05BTUUiLCJ2YXJpYWJsZU5vZGUiLCJsb2NhbENvbnRleHQiLCJMb2NhbENvbnRleHQiLCJmcm9tTG9jYWxNZXRhQ29udGV4dCIsInN0YW5kYWxvbmVWYXJpYWJsZVZlcmlmaWVkIiwidmVyaWZ5U3RhbmRhbG9uZVZhcmlhYmxlIiwidmFyaWFibGVOb2RlVmVyaWZpZWQiLCJURVJNX1JVTEVfTkFNRSIsInRlcm1Ob2RlIiwic3RhbmRhbG9uZVRlcm1WZXJpZmllZCIsInZlcmlmeVN0YW5kYWxvbmVUZXJtIiwidGVybU5vZGVWZXJpZmllZCIsIk5vZGVWZXJpZmllciIsIm1ldGFzdGF0ZW1lbnROb2RlVmVyaWZpZXIiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQThEQTs7O2VBQUE7Ozs0REE1RHlCOzJEQUNBO29CQUVZO3dCQUNJOzRCQUNJO3lCQUM4Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTNFLElBQUEsQUFBTUEsMENBQUQsQUFBTDtjQUFNQTsrQkFBQUE7YUFBQUE7Z0NBQUFBOzs7a0JBQUFBOztZQUNKQyxLQUFBQTttQkFBQUEsU0FBQUEsc0JBQXNCQyxlQUFlLEVBQUVDLGdCQUFnQixFQUFFQyxXQUFXO2dCQUNsRSxJQUFJQztnQkFFSixJQUFNQyxXQUFXSixnQkFBZ0JLLFdBQVcsSUFBSSxHQUFHO2dCQUVuRCxPQUFRRDtvQkFDTixLQUFLRSxpQ0FBc0I7d0JBQUU7NEJBQzNCLElBQU1DLG1CQUFtQlAsaUJBQ25CUSxpQ0FBaUNDLElBQUFBLDBDQUE0QixFQUFDRixrQkFBa0JOLGtCQUFrQkMsY0FDbEdRLDJCQUEyQkYsZ0NBQWlDLEdBQUc7NEJBRXJFTCwwQkFBMEJPLDBCQUEwQixHQUFHOzRCQUV2RDt3QkFDRjtvQkFFQSxLQUFLQyw2QkFBa0I7d0JBQUU7NEJBQ3ZCLElBQU1DLGVBQWVaLGlCQUNmYSxlQUFlQyxjQUFZLENBQUNDLG9CQUFvQixDQUFDZCxtQkFDakRlLDZCQUE2QkMsSUFBQUEsa0NBQXdCLEVBQUNMLGNBQWNDLGNBQWNYLGNBQ2xGZ0IsdUJBQXVCRiw0QkFBNkIsR0FBRzs0QkFFN0RiLDBCQUEwQmUsc0JBQXNCLEdBQUc7NEJBRW5EO3dCQUNGO29CQUVBLEtBQUtDLHlCQUFjO3dCQUFFOzRCQUNuQixJQUFNQyxXQUFXcEIsaUJBQ1hhLGdCQUFlQyxjQUFZLENBQUNDLG9CQUFvQixDQUFDZCxtQkFDakRvQix5QkFBeUJDLElBQUFBLDBCQUFvQixFQUFDRixVQUFVUCxlQUFjWCxjQUN0RXFCLG1CQUFtQkYsd0JBQXlCLEdBQUc7NEJBRXJEbEIsMEJBQTBCb0Isa0JBQWtCLEdBQUc7NEJBRS9DO3dCQUNGO29CQUVBO3dCQUFTOzRCQUNQcEIsMEJBQTBCLHVCQXhDNUJMLHNDQXdDa0NDLHlCQUFOLElBQUssYUFBdUJDLGlCQUFpQkMsa0JBQWtCQzs0QkFFekY7d0JBQ0Y7Z0JBQ0Y7Z0JBRUEsT0FBT0M7WUFDVDs7O1dBL0NJTDtFQUFrQzBCLGFBQVk7QUFrRHBELElBQU1DLDRCQUE0QixJQUFJM0I7SUFFdEMsV0FBZTJCIn0=