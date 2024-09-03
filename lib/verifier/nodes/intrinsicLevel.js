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
var _variableAgainstTerm = /*#__PURE__*/ _interop_require_default(require("../../verify/variableAgainstTerm"));
var _query = require("../../utilities/query");
var _verifier = require("../../utilities/verifier");
function _assert_this_initialized(self) {
    if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
}
function _call_super(_this, derived, args) {
    derived = _get_prototype_of(derived);
    return _possible_constructor_return(_this, _is_native_reflect_construct() ? Reflect.construct(derived, args || [], _get_prototype_of(_this).constructor) : derived.apply(_this, args));
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
    try {
        var result = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
    } catch (_) {}
    return (_is_native_reflect_construct = function() {
        return !!result;
    })();
}
var termNodeQuery = (0, _query.nodeQuery)("/term!"), nonTerminalNodeQuery = (0, _query.nodeQuery)("/*"), termVariableNodeQuery = (0, _query.nodeQuery)("/term/variable!");
var IntrinsicLevelNodesVerifier = /*#__PURE__*/ function(NodesVerifier) {
    _inherits(IntrinsicLevelNodesVerifier, NodesVerifier);
    function IntrinsicLevelNodesVerifier() {
        _class_call_check(this, IntrinsicLevelNodesVerifier);
        return _call_super(this, IntrinsicLevelNodesVerifier, arguments);
    }
    _create_class(IntrinsicLevelNodesVerifier, [
        {
            key: "verifyNonTerminalNode",
            value: function verifyNonTerminalNode(nonTerminalNodeA, nonTerminalNodeB, substitutions, localContextA, localContextB, verifyAhead) {
                var _this = this;
                var nonTerminalNodeVerified;
                var nodeQueryMaps = [
                    {
                        nodeQueryA: termVariableNodeQuery,
                        nodeQueryB: termNodeQuery,
                        verifyNodes: function(nodeA, nodeB, substitutions, localContextA, localContextB, verifyAhead) {
                            var nonTerminalNodeVerified;
                            var termNodeB = nodeB, termVariableNodeA = nodeA, termVariableNodeVerifiedAgainstTermNode = _this.verifyTermVariableNodeAgainstTermNode(termVariableNodeA, termNodeB, substitutions, localContextA, localContextB, verifyAhead);
                            nonTerminalNodeVerified = termVariableNodeVerifiedAgainstTermNode; ///
                            return nonTerminalNodeVerified;
                        }
                    },
                    {
                        nodeQueryA: nonTerminalNodeQuery,
                        nodeQueryB: nonTerminalNodeQuery,
                        verifyNodes: function(nodeA, nodeB, substitutions, localMetaContextA, localMetaContextB, verifyAhead) {
                            var nonTerminalNodeVerified;
                            var _$nonTerminalNodeA = nodeA, _$nonTerminalNodeB = nodeB; ///
                            nonTerminalNodeVerified = _get(_get_prototype_of(IntrinsicLevelNodesVerifier.prototype), "verifyNonTerminalNode", _this).call(_this, _$nonTerminalNodeA, _$nonTerminalNodeB, substitutions, localMetaContextA, localMetaContextB, verifyAhead);
                            return nonTerminalNodeVerified;
                        }
                    }
                ];
                var nodesVerified = (0, _verifier.verifyNodes)(nodeQueryMaps, nonTerminalNodeA, nonTerminalNodeB, substitutions, localContextA, localContextB, verifyAhead);
                nonTerminalNodeVerified = nodesVerified; ///
                return nonTerminalNodeVerified;
            }
        },
        {
            key: "verifyTermVariableNodeAgainstTermNode",
            value: function verifyTermVariableNodeAgainstTermNode(termVariableNodeA, termNodeB, substitutions, localContextA, localContextB, verifyAhead) {
                var termVariableNodeVerifiedAgainstTermNode;
                var variableNodeA = termVariableNodeA, termVerifiedAgainstVariable = (0, _variableAgainstTerm.default)(variableNodeA, termNodeB, substitutions, localContextA, localContextB, verifyAhead);
                termVariableNodeVerifiedAgainstTermNode = termVerifiedAgainstVariable; ///
                return termVariableNodeVerifiedAgainstTermNode;
            }
        }
    ]);
    return IntrinsicLevelNodesVerifier;
}(_nodes.default);
var intrinsicLevelNodesVerifier = new IntrinsicLevelNodesVerifier();
var _default = intrinsicLevelNodesVerifier;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy92ZXJpZmllci9ub2Rlcy9pbnRyaW5zaWNMZXZlbC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IE5vZGVzVmVyaWZpZXIgZnJvbSBcIi4uLy4uL3ZlcmlmaWVyL25vZGVzXCI7XG5pbXBvcnQgdmVyaWZ5VmFyaWFibGVBZ2FpbnN0VGVybSBmcm9tIFwiLi4vLi4vdmVyaWZ5L3ZhcmlhYmxlQWdhaW5zdFRlcm1cIjtcblxuaW1wb3J0IHsgbm9kZVF1ZXJ5IH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9xdWVyeVwiO1xuaW1wb3J0IHsgdmVyaWZ5Tm9kZXMgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL3ZlcmlmaWVyXCI7XG5cbmNvbnN0IHRlcm1Ob2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvdGVybSFcIiksXG4gICAgICBub25UZXJtaW5hbE5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi8qXCIpLFxuICAgICAgdGVybVZhcmlhYmxlTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3Rlcm0vdmFyaWFibGUhXCIpO1xuXG5jbGFzcyBJbnRyaW5zaWNMZXZlbE5vZGVzVmVyaWZpZXIgZXh0ZW5kcyBOb2Rlc1ZlcmlmaWVyIHtcbiAgdmVyaWZ5Tm9uVGVybWluYWxOb2RlKG5vblRlcm1pbmFsTm9kZUEsIG5vblRlcm1pbmFsTm9kZUIsIHN1YnN0aXR1dGlvbnMsIGxvY2FsQ29udGV4dEEsIGxvY2FsQ29udGV4dEIsIHZlcmlmeUFoZWFkKSB7XG4gICAgbGV0IG5vblRlcm1pbmFsTm9kZVZlcmlmaWVkO1xuXG4gICAgY29uc3Qgbm9kZVF1ZXJ5TWFwcyA9IFtcbiAgICAgIHtcbiAgICAgICAgbm9kZVF1ZXJ5QTogdGVybVZhcmlhYmxlTm9kZVF1ZXJ5LFxuICAgICAgICBub2RlUXVlcnlCOiB0ZXJtTm9kZVF1ZXJ5LFxuICAgICAgICB2ZXJpZnlOb2RlczogKG5vZGVBLCBub2RlQiwgc3Vic3RpdHV0aW9ucywgbG9jYWxDb250ZXh0QSwgbG9jYWxDb250ZXh0QiwgdmVyaWZ5QWhlYWQpID0+IHtcbiAgICAgICAgICBsZXQgbm9uVGVybWluYWxOb2RlVmVyaWZpZWQ7XG5cbiAgICAgICAgICBjb25zdCB0ZXJtTm9kZUIgPSBub2RlQiwgIC8vL1xuICAgICAgICAgICAgICAgIHRlcm1WYXJpYWJsZU5vZGVBID0gbm9kZUEsICAvLy9cbiAgICAgICAgICAgICAgICB0ZXJtVmFyaWFibGVOb2RlVmVyaWZpZWRBZ2FpbnN0VGVybU5vZGUgPVxuXG4gICAgICAgICAgICAgICAgICB0aGlzLnZlcmlmeVRlcm1WYXJpYWJsZU5vZGVBZ2FpbnN0VGVybU5vZGUodGVybVZhcmlhYmxlTm9kZUEsIHRlcm1Ob2RlQiwgc3Vic3RpdHV0aW9ucywgbG9jYWxDb250ZXh0QSwgbG9jYWxDb250ZXh0QiwgdmVyaWZ5QWhlYWQpO1xuXG4gICAgICAgICAgbm9uVGVybWluYWxOb2RlVmVyaWZpZWQgPSB0ZXJtVmFyaWFibGVOb2RlVmVyaWZpZWRBZ2FpbnN0VGVybU5vZGU7ICAvLy9cblxuICAgICAgICAgIHJldHVybiBub25UZXJtaW5hbE5vZGVWZXJpZmllZDtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbm9kZVF1ZXJ5QTogbm9uVGVybWluYWxOb2RlUXVlcnksXG4gICAgICAgIG5vZGVRdWVyeUI6IG5vblRlcm1pbmFsTm9kZVF1ZXJ5LFxuICAgICAgICB2ZXJpZnlOb2RlczogKG5vZGVBLCBub2RlQiwgc3Vic3RpdHV0aW9ucywgbG9jYWxNZXRhQ29udGV4dEEsIGxvY2FsTWV0YUNvbnRleHRCLCB2ZXJpZnlBaGVhZCkgPT4ge1xuICAgICAgICAgIGxldCBub25UZXJtaW5hbE5vZGVWZXJpZmllZDtcblxuICAgICAgICAgIGNvbnN0IG5vblRlcm1pbmFsTm9kZUEgPSBub2RlQSwgLy8vXG4gICAgICAgICAgICAgICAgbm9uVGVybWluYWxOb2RlQiA9IG5vZGVCOyAvLy9cblxuICAgICAgICAgIG5vblRlcm1pbmFsTm9kZVZlcmlmaWVkID1cblxuICAgICAgICAgICAgc3VwZXIudmVyaWZ5Tm9uVGVybWluYWxOb2RlKG5vblRlcm1pbmFsTm9kZUEsIG5vblRlcm1pbmFsTm9kZUIsIHN1YnN0aXR1dGlvbnMsIGxvY2FsTWV0YUNvbnRleHRBLCBsb2NhbE1ldGFDb250ZXh0QiwgdmVyaWZ5QWhlYWQpO1xuXG4gICAgICAgICAgcmV0dXJuIG5vblRlcm1pbmFsTm9kZVZlcmlmaWVkO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgXTtcblxuICAgIGNvbnN0IG5vZGVzVmVyaWZpZWQgPSB2ZXJpZnlOb2Rlcyhub2RlUXVlcnlNYXBzLCBub25UZXJtaW5hbE5vZGVBLCBub25UZXJtaW5hbE5vZGVCLCBzdWJzdGl0dXRpb25zLCBsb2NhbENvbnRleHRBLCBsb2NhbENvbnRleHRCLCB2ZXJpZnlBaGVhZCk7XG5cbiAgICBub25UZXJtaW5hbE5vZGVWZXJpZmllZCA9IG5vZGVzVmVyaWZpZWQ7ICAvLy9cblxuICAgIHJldHVybiBub25UZXJtaW5hbE5vZGVWZXJpZmllZDtcbiAgfVxuXG4gIHZlcmlmeVRlcm1WYXJpYWJsZU5vZGVBZ2FpbnN0VGVybU5vZGUodGVybVZhcmlhYmxlTm9kZUEsIHRlcm1Ob2RlQiwgc3Vic3RpdHV0aW9ucywgbG9jYWxDb250ZXh0QSwgbG9jYWxDb250ZXh0QiwgdmVyaWZ5QWhlYWQpIHtcbiAgICBsZXQgdGVybVZhcmlhYmxlTm9kZVZlcmlmaWVkQWdhaW5zdFRlcm1Ob2RlO1xuXG4gICAgY29uc3QgdmFyaWFibGVOb2RlQSA9IHRlcm1WYXJpYWJsZU5vZGVBLCAvLy9cbiAgICAgICAgICB0ZXJtVmVyaWZpZWRBZ2FpbnN0VmFyaWFibGUgPSB2ZXJpZnlWYXJpYWJsZUFnYWluc3RUZXJtKHZhcmlhYmxlTm9kZUEsIHRlcm1Ob2RlQiwgc3Vic3RpdHV0aW9ucywgbG9jYWxDb250ZXh0QSwgbG9jYWxDb250ZXh0QiwgdmVyaWZ5QWhlYWQpO1xuXG4gICAgdGVybVZhcmlhYmxlTm9kZVZlcmlmaWVkQWdhaW5zdFRlcm1Ob2RlID0gdGVybVZlcmlmaWVkQWdhaW5zdFZhcmlhYmxlOyAgLy8vXG5cbiAgICByZXR1cm4gdGVybVZhcmlhYmxlTm9kZVZlcmlmaWVkQWdhaW5zdFRlcm1Ob2RlO1xuICB9XG59XG5cbmNvbnN0IGludHJpbnNpY0xldmVsTm9kZXNWZXJpZmllciA9IG5ldyBJbnRyaW5zaWNMZXZlbE5vZGVzVmVyaWZpZXIoKTtcblxuZXhwb3J0IGRlZmF1bHQgaW50cmluc2ljTGV2ZWxOb2Rlc1ZlcmlmaWVyO1xuIl0sIm5hbWVzIjpbInRlcm1Ob2RlUXVlcnkiLCJub2RlUXVlcnkiLCJub25UZXJtaW5hbE5vZGVRdWVyeSIsInRlcm1WYXJpYWJsZU5vZGVRdWVyeSIsIkludHJpbnNpY0xldmVsTm9kZXNWZXJpZmllciIsInZlcmlmeU5vblRlcm1pbmFsTm9kZSIsIm5vblRlcm1pbmFsTm9kZUEiLCJub25UZXJtaW5hbE5vZGVCIiwic3Vic3RpdHV0aW9ucyIsImxvY2FsQ29udGV4dEEiLCJsb2NhbENvbnRleHRCIiwidmVyaWZ5QWhlYWQiLCJub25UZXJtaW5hbE5vZGVWZXJpZmllZCIsIm5vZGVRdWVyeU1hcHMiLCJub2RlUXVlcnlBIiwibm9kZVF1ZXJ5QiIsInZlcmlmeU5vZGVzIiwibm9kZUEiLCJub2RlQiIsInRlcm1Ob2RlQiIsInRlcm1WYXJpYWJsZU5vZGVBIiwidGVybVZhcmlhYmxlTm9kZVZlcmlmaWVkQWdhaW5zdFRlcm1Ob2RlIiwidmVyaWZ5VGVybVZhcmlhYmxlTm9kZUFnYWluc3RUZXJtTm9kZSIsImxvY2FsTWV0YUNvbnRleHRBIiwibG9jYWxNZXRhQ29udGV4dEIiLCJub2Rlc1ZlcmlmaWVkIiwidmFyaWFibGVOb2RlQSIsInRlcm1WZXJpZmllZEFnYWluc3RWYXJpYWJsZSIsInZlcmlmeVZhcmlhYmxlQWdhaW5zdFRlcm0iLCJOb2Rlc1ZlcmlmaWVyIiwiaW50cmluc2ljTGV2ZWxOb2Rlc1ZlcmlmaWVyIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkF5RUE7OztlQUFBOzs7NERBdkUwQjswRUFDWTtxQkFFWjt3QkFDRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTVCLElBQU1BLGdCQUFnQkMsSUFBQUEsZ0JBQVMsRUFBQyxXQUMxQkMsdUJBQXVCRCxJQUFBQSxnQkFBUyxFQUFDLE9BQ2pDRSx3QkFBd0JGLElBQUFBLGdCQUFTLEVBQUM7QUFFeEMsSUFBQSxBQUFNRyw0Q0FBRCxBQUFMO2NBQU1BO2FBQUFBO2dDQUFBQTtpQ0FBQUE7O2tCQUFBQTs7WUFDSkMsS0FBQUE7bUJBQUFBLFNBQUFBLHNCQUFzQkMsZ0JBQWdCLEVBQUVDLGdCQUFnQixFQUFFQyxhQUFhLEVBQUVDLGFBQWEsRUFBRUMsYUFBYSxFQUFFQyxXQUFXOztnQkFDaEgsSUFBSUM7Z0JBRUosSUFBTUMsZ0JBQWdCO29CQUNwQjt3QkFDRUMsWUFBWVg7d0JBQ1pZLFlBQVlmO3dCQUNaZ0IsYUFBYSxTQUFDQyxPQUFPQyxPQUFPVixlQUFlQyxlQUFlQyxlQUFlQzs0QkFDdkUsSUFBSUM7NEJBRUosSUFBTU8sWUFBWUQsT0FDWkUsb0JBQW9CSCxPQUNwQkksMENBRUUsTUFBS0MscUNBQXFDLENBQUNGLG1CQUFtQkQsV0FBV1gsZUFBZUMsZUFBZUMsZUFBZUM7NEJBRTlIQywwQkFBMEJTLHlDQUEwQyxHQUFHOzRCQUV2RSxPQUFPVDt3QkFDVDtvQkFDRjtvQkFDQTt3QkFDRUUsWUFBWVo7d0JBQ1phLFlBQVliO3dCQUNaYyxhQUFhLFNBQUNDLE9BQU9DLE9BQU9WLGVBQWVlLG1CQUFtQkMsbUJBQW1CYjs0QkFDL0UsSUFBSUM7NEJBRUosSUFBTU4scUJBQW1CVyxPQUNuQlYscUJBQW1CVyxPQUFPLEdBQUc7NEJBRW5DTiwwQkFFRSx1QkFqQ05SLHdDQWlDWUMsNENBQXNCQyxvQkFBa0JDLG9CQUFrQkMsZUFBZWUsbUJBQW1CQyxtQkFBbUJiOzRCQUV2SCxPQUFPQzt3QkFDVDtvQkFDRjtpQkFDRDtnQkFFRCxJQUFNYSxnQkFBZ0JULElBQUFBLHFCQUFXLEVBQUNILGVBQWVQLGtCQUFrQkMsa0JBQWtCQyxlQUFlQyxlQUFlQyxlQUFlQztnQkFFbElDLDBCQUEwQmEsZUFBZ0IsR0FBRztnQkFFN0MsT0FBT2I7WUFDVDs7O1lBRUFVLEtBQUFBO21CQUFBQSxTQUFBQSxzQ0FBc0NGLGlCQUFpQixFQUFFRCxTQUFTLEVBQUVYLGFBQWEsRUFBRUMsYUFBYSxFQUFFQyxhQUFhLEVBQUVDLFdBQVc7Z0JBQzFILElBQUlVO2dCQUVKLElBQU1LLGdCQUFnQk4sbUJBQ2hCTyw4QkFBOEJDLElBQUFBLDRCQUF5QixFQUFDRixlQUFlUCxXQUFXWCxlQUFlQyxlQUFlQyxlQUFlQztnQkFFcklVLDBDQUEwQ00sNkJBQThCLEdBQUc7Z0JBRTNFLE9BQU9OO1lBQ1Q7OztXQXhESWpCO0VBQW9DeUIsY0FBYTtBQTJEdkQsSUFBTUMsOEJBQThCLElBQUkxQjtJQUV4QyxXQUFlMEIifQ==