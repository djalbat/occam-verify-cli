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
var _intrinsiclevel = /*#__PURE__*/ _interop_require_default(require("../../mixins/nodesVerifier/intrinsiclevel"));
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
var variableNodeQuery = (0, _query.nodeQuery)("/term/variable!");
var IntrinsicLevelNodesVerifier = /*#__PURE__*/ function(NodesVerifier) {
    _inherits(IntrinsicLevelNodesVerifier, NodesVerifier);
    var _super = _create_super(IntrinsicLevelNodesVerifier);
    function IntrinsicLevelNodesVerifier() {
        _class_call_check(this, IntrinsicLevelNodesVerifier);
        return _super.apply(this, arguments);
    }
    _create_class(IntrinsicLevelNodesVerifier, [
        {
            key: "verifyNonTerminalNode",
            value: function verifyNonTerminalNode(nonTerminalNodeA, nonTerminalNodeB, substitutions, localContextA, localContextB, verifyAhead) {
                var nonTerminalNodeVerified = false;
                var nonTerminalNodeARuleName = nonTerminalNodeA.getRuleName(), nonTerminalNodeBRuleName = nonTerminalNodeB.getRuleName();
                if (nonTerminalNodeARuleName === nonTerminalNodeBRuleName) {
                    var ruleName = nonTerminalNodeARuleName; ///
                    switch(ruleName){
                        case _ruleNames.TERM_RULE_NAME:
                            {
                                var termNodeA = nonTerminalNodeA, termNodeB = nonTerminalNodeB, termNodeVerified = this.verifyTermNode(termNodeA, termNodeB, substitutions, localContextA, localContextB, verifyAhead);
                                nonTerminalNodeVerified = termNodeVerified; ///
                                break;
                            }
                        default:
                            {
                                nonTerminalNodeVerified = _get(_get_prototype_of(IntrinsicLevelNodesVerifier.prototype), "verifyNonTerminalNode", this).call(this, nonTerminalNodeA, nonTerminalNodeB, substitutions, localContextA, localContextB, verifyAhead);
                                break;
                            }
                    }
                }
                return nonTerminalNodeVerified;
            }
        },
        {
            key: "verifyTermNode",
            value: function verifyTermNode(termNodeA, termNodeB, substitutions, localContextA, localContextB, verifyAhead) {
                var termNodeVerified;
                var variableNodeA = variableNodeQuery(termNodeA);
                if (variableNodeA !== null) {
                    var variableNodeVerified = this.verifyVariableNode(variableNodeA, termNodeB, substitutions, localContextA, localContextB, verifyAhead);
                    termNodeVerified = variableNodeVerified; ///
                } else {
                    var nonTerminalNodeA = termNodeA, nonTerminalNodeB = termNodeB, nonTerminalNodeVerified = _get(_get_prototype_of(IntrinsicLevelNodesVerifier.prototype), "verifyNonTerminalNode", this).call(this, nonTerminalNodeA, nonTerminalNodeB, substitutions, localContextA, localContextB, verifyAhead);
                    termNodeVerified = nonTerminalNodeVerified; ///
                }
                return termNodeVerified;
            }
        }
    ]);
    return IntrinsicLevelNodesVerifier;
}(_nodes.default);
Object.assign(IntrinsicLevelNodesVerifier.prototype, _intrinsiclevel.default);
var intrinsicLevelNodesVerifier = new IntrinsicLevelNodesVerifier();
var _default = intrinsicLevelNodesVerifier;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy92ZXJpZmllci9ub2Rlcy9pbnRyaW5zaWNMZXZlbC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IE5vZGVzVmVyaWZpZXIgZnJvbSBcIi4uLy4uL3ZlcmlmaWVyL25vZGVzXCI7XG5pbXBvcnQgaW50cmluc2ljTGV2ZWxOb2Rlc1ZlcmlmaWVyTWl4aW5zIGZyb20gXCIuLi8uLi9taXhpbnMvbm9kZXNWZXJpZmllci9pbnRyaW5zaWNsZXZlbFwiO1xuXG5pbXBvcnQgeyBub2RlUXVlcnkgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5pbXBvcnQgeyBURVJNX1JVTEVfTkFNRSB9IGZyb20gXCIuLi8uLi9ydWxlTmFtZXNcIjtcblxuY29uc3QgdmFyaWFibGVOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvdGVybS92YXJpYWJsZSFcIik7XG5cbmNsYXNzIEludHJpbnNpY0xldmVsTm9kZXNWZXJpZmllciBleHRlbmRzIE5vZGVzVmVyaWZpZXIge1xuICB2ZXJpZnlOb25UZXJtaW5hbE5vZGUobm9uVGVybWluYWxOb2RlQSwgbm9uVGVybWluYWxOb2RlQiwgc3Vic3RpdHV0aW9ucywgbG9jYWxDb250ZXh0QSwgbG9jYWxDb250ZXh0QiwgdmVyaWZ5QWhlYWQpIHtcbiAgICBsZXQgbm9uVGVybWluYWxOb2RlVmVyaWZpZWQgPSBmYWxzZTtcblxuICAgIGNvbnN0IG5vblRlcm1pbmFsTm9kZUFSdWxlTmFtZSA9IG5vblRlcm1pbmFsTm9kZUEuZ2V0UnVsZU5hbWUoKSxcbiAgICAgICAgICBub25UZXJtaW5hbE5vZGVCUnVsZU5hbWUgPSBub25UZXJtaW5hbE5vZGVCLmdldFJ1bGVOYW1lKCk7XG5cbiAgICBpZiAobm9uVGVybWluYWxOb2RlQVJ1bGVOYW1lID09PSBub25UZXJtaW5hbE5vZGVCUnVsZU5hbWUpIHtcbiAgICAgIGNvbnN0IHJ1bGVOYW1lID0gbm9uVGVybWluYWxOb2RlQVJ1bGVOYW1lOyAgLy8vXG5cbiAgICAgIHN3aXRjaCAocnVsZU5hbWUpIHtcbiAgICAgICAgY2FzZSBURVJNX1JVTEVfTkFNRToge1xuICAgICAgICAgIGNvbnN0IHRlcm1Ob2RlQSA9IG5vblRlcm1pbmFsTm9kZUEsICAvLy9cbiAgICAgICAgICAgICAgICB0ZXJtTm9kZUIgPSBub25UZXJtaW5hbE5vZGVCLCAgLy8vXG4gICAgICAgICAgICAgICAgdGVybU5vZGVWZXJpZmllZCA9IHRoaXMudmVyaWZ5VGVybU5vZGUodGVybU5vZGVBLCB0ZXJtTm9kZUIsIHN1YnN0aXR1dGlvbnMsIGxvY2FsQ29udGV4dEEsIGxvY2FsQ29udGV4dEIsIHZlcmlmeUFoZWFkKTtcblxuICAgICAgICAgIG5vblRlcm1pbmFsTm9kZVZlcmlmaWVkID0gdGVybU5vZGVWZXJpZmllZDsgIC8vL1xuXG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cblxuICAgICAgICBkZWZhdWx0OiB7XG4gICAgICAgICAgbm9uVGVybWluYWxOb2RlVmVyaWZpZWQgPSBzdXBlci52ZXJpZnlOb25UZXJtaW5hbE5vZGUobm9uVGVybWluYWxOb2RlQSwgbm9uVGVybWluYWxOb2RlQiwgc3Vic3RpdHV0aW9ucywgbG9jYWxDb250ZXh0QSwgbG9jYWxDb250ZXh0QiwgdmVyaWZ5QWhlYWQpO1xuXG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbm9uVGVybWluYWxOb2RlVmVyaWZpZWQ7XG4gIH1cblxuICB2ZXJpZnlUZXJtTm9kZSh0ZXJtTm9kZUEsIHRlcm1Ob2RlQiwgc3Vic3RpdHV0aW9ucywgbG9jYWxDb250ZXh0QSwgbG9jYWxDb250ZXh0QiwgdmVyaWZ5QWhlYWQpIHtcbiAgICBsZXQgdGVybU5vZGVWZXJpZmllZDtcblxuICAgIGNvbnN0IHZhcmlhYmxlTm9kZUEgPSB2YXJpYWJsZU5vZGVRdWVyeSh0ZXJtTm9kZUEpO1xuXG4gICAgaWYgKHZhcmlhYmxlTm9kZUEgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHZhcmlhYmxlTm9kZVZlcmlmaWVkID0gdGhpcy52ZXJpZnlWYXJpYWJsZU5vZGUodmFyaWFibGVOb2RlQSwgdGVybU5vZGVCLCBzdWJzdGl0dXRpb25zLCBsb2NhbENvbnRleHRBLCBsb2NhbENvbnRleHRCLCB2ZXJpZnlBaGVhZCk7XG5cbiAgICAgIHRlcm1Ob2RlVmVyaWZpZWQgPSB2YXJpYWJsZU5vZGVWZXJpZmllZDsgLy8vXG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IG5vblRlcm1pbmFsTm9kZUEgPSB0ZXJtTm9kZUEsIC8vL1xuICAgICAgICAgICAgbm9uVGVybWluYWxOb2RlQiA9IHRlcm1Ob2RlQiwgLy8vXG4gICAgICAgICAgICBub25UZXJtaW5hbE5vZGVWZXJpZmllZCA9IHN1cGVyLnZlcmlmeU5vblRlcm1pbmFsTm9kZShub25UZXJtaW5hbE5vZGVBLCBub25UZXJtaW5hbE5vZGVCLCBzdWJzdGl0dXRpb25zLCBsb2NhbENvbnRleHRBLCBsb2NhbENvbnRleHRCLCB2ZXJpZnlBaGVhZCk7XG5cbiAgICAgIHRlcm1Ob2RlVmVyaWZpZWQgPSBub25UZXJtaW5hbE5vZGVWZXJpZmllZDsgLy8vXG4gICAgfVxuXG4gICAgcmV0dXJuIHRlcm1Ob2RlVmVyaWZpZWQ7XG4gIH1cbn1cblxuT2JqZWN0LmFzc2lnbihJbnRyaW5zaWNMZXZlbE5vZGVzVmVyaWZpZXIucHJvdG90eXBlLCBpbnRyaW5zaWNMZXZlbE5vZGVzVmVyaWZpZXJNaXhpbnMpO1xuXG5jb25zdCBpbnRyaW5zaWNMZXZlbE5vZGVzVmVyaWZpZXIgPSBuZXcgSW50cmluc2ljTGV2ZWxOb2Rlc1ZlcmlmaWVyKCk7XG5cbmV4cG9ydCBkZWZhdWx0IGludHJpbnNpY0xldmVsTm9kZXNWZXJpZmllcjtcbiJdLCJuYW1lcyI6WyJ2YXJpYWJsZU5vZGVRdWVyeSIsIm5vZGVRdWVyeSIsIkludHJpbnNpY0xldmVsTm9kZXNWZXJpZmllciIsInZlcmlmeU5vblRlcm1pbmFsTm9kZSIsIm5vblRlcm1pbmFsTm9kZUEiLCJub25UZXJtaW5hbE5vZGVCIiwic3Vic3RpdHV0aW9ucyIsImxvY2FsQ29udGV4dEEiLCJsb2NhbENvbnRleHRCIiwidmVyaWZ5QWhlYWQiLCJub25UZXJtaW5hbE5vZGVWZXJpZmllZCIsIm5vblRlcm1pbmFsTm9kZUFSdWxlTmFtZSIsImdldFJ1bGVOYW1lIiwibm9uVGVybWluYWxOb2RlQlJ1bGVOYW1lIiwicnVsZU5hbWUiLCJURVJNX1JVTEVfTkFNRSIsInRlcm1Ob2RlQSIsInRlcm1Ob2RlQiIsInRlcm1Ob2RlVmVyaWZpZWQiLCJ2ZXJpZnlUZXJtTm9kZSIsInZhcmlhYmxlTm9kZUEiLCJ2YXJpYWJsZU5vZGVWZXJpZmllZCIsInZlcmlmeVZhcmlhYmxlTm9kZSIsIk5vZGVzVmVyaWZpZXIiLCJPYmplY3QiLCJhc3NpZ24iLCJwcm90b3R5cGUiLCJpbnRyaW5zaWNMZXZlbE5vZGVzVmVyaWZpZXJNaXhpbnMiLCJpbnRyaW5zaWNMZXZlbE5vZGVzVmVyaWZpZXIiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQW1FQTs7O2VBQUE7Ozs0REFqRTBCO3FFQUNvQjtxQkFFcEI7eUJBQ0s7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUUvQixJQUFNQSxvQkFBb0JDLElBQUFBLGdCQUFTLEVBQUM7QUFFcEMsSUFBQSxBQUFNQyw0Q0FBRCxBQUFMO2NBQU1BOytCQUFBQTthQUFBQTtnQ0FBQUE7OztrQkFBQUE7O1lBQ0pDLEtBQUFBO21CQUFBQSxTQUFBQSxzQkFBc0JDLGdCQUFnQixFQUFFQyxnQkFBZ0IsRUFBRUMsYUFBYSxFQUFFQyxhQUFhLEVBQUVDLGFBQWEsRUFBRUMsV0FBVztnQkFDaEgsSUFBSUMsMEJBQTBCO2dCQUU5QixJQUFNQywyQkFBMkJQLGlCQUFpQlEsV0FBVyxJQUN2REMsMkJBQTJCUixpQkFBaUJPLFdBQVc7Z0JBRTdELElBQUlELDZCQUE2QkUsMEJBQTBCO29CQUN6RCxJQUFNQyxXQUFXSCwwQkFBMkIsR0FBRztvQkFFL0MsT0FBUUc7d0JBQ04sS0FBS0MseUJBQWM7NEJBQUU7Z0NBQ25CLElBQU1DLFlBQVlaLGtCQUNaYSxZQUFZWixrQkFDWmEsbUJBQW1CLElBQUksQ0FBQ0MsY0FBYyxDQUFDSCxXQUFXQyxXQUFXWCxlQUFlQyxlQUFlQyxlQUFlQztnQ0FFaEhDLDBCQUEwQlEsa0JBQW1CLEdBQUc7Z0NBRWhEOzRCQUNGO3dCQUVBOzRCQUFTO2dDQUNQUiwwQkFBMEIsdUJBdEI5QlIsd0NBc0JvQ0MseUJBQU4sSUFBSyxhQUF1QkMsa0JBQWtCQyxrQkFBa0JDLGVBQWVDLGVBQWVDLGVBQWVDO2dDQUV2STs0QkFDRjtvQkFDRjtnQkFDRjtnQkFFQSxPQUFPQztZQUNUOzs7WUFFQVMsS0FBQUE7bUJBQUFBLFNBQUFBLGVBQWVILFNBQVMsRUFBRUMsU0FBUyxFQUFFWCxhQUFhLEVBQUVDLGFBQWEsRUFBRUMsYUFBYSxFQUFFQyxXQUFXO2dCQUMzRixJQUFJUztnQkFFSixJQUFNRSxnQkFBZ0JwQixrQkFBa0JnQjtnQkFFeEMsSUFBSUksa0JBQWtCLE1BQU07b0JBQzFCLElBQU1DLHVCQUF1QixJQUFJLENBQUNDLGtCQUFrQixDQUFDRixlQUFlSCxXQUFXWCxlQUFlQyxlQUFlQyxlQUFlQztvQkFFNUhTLG1CQUFtQkcsc0JBQXNCLEdBQUc7Z0JBQzlDLE9BQU87b0JBQ0wsSUFBTWpCLG1CQUFtQlksV0FDbkJYLG1CQUFtQlksV0FDbkJQLDBCQUEwQix1QkE1Q2hDUix3Q0E0Q3NDQyx5QkFBTixJQUFLLGFBQXVCQyxrQkFBa0JDLGtCQUFrQkMsZUFBZUMsZUFBZUMsZUFBZUM7b0JBRTdJUyxtQkFBbUJSLHlCQUF5QixHQUFHO2dCQUNqRDtnQkFFQSxPQUFPUTtZQUNUOzs7V0FsREloQjtFQUFvQ3FCLGNBQWE7QUFxRHZEQyxPQUFPQyxNQUFNLENBQUN2Qiw0QkFBNEJ3QixTQUFTLEVBQUVDLHVCQUFpQztBQUV0RixJQUFNQyw4QkFBOEIsSUFBSTFCO0lBRXhDLFdBQWUwQiJ9