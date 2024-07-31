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
var _metaLevel = /*#__PURE__*/ _interop_require_default(require("../../mixins/nodesVerifier/metaLevel"));
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
var metavariableNodeQuery = (0, _query.nodeQuery)("/metastatement/metavariable!");
var MetaLevelNodesVerifier = /*#__PURE__*/ function(NodesVerifier) {
    _inherits(MetaLevelNodesVerifier, NodesVerifier);
    var _super = _create_super(MetaLevelNodesVerifier);
    function MetaLevelNodesVerifier() {
        _class_call_check(this, MetaLevelNodesVerifier);
        return _super.apply(this, arguments);
    }
    _create_class(MetaLevelNodesVerifier, [
        {
            key: "verifyNonTerminalNode",
            value: function verifyNonTerminalNode(nonTerminalNodeA, nonTerminalNodeB, substitutions, fileContextA, localMetaContextB, verifyAhead) {
                var nonTerminalNodeVerified = false;
                var nonTerminalNodeARuleName = nonTerminalNodeA.getRuleName(), nonTerminalNodeBRuleName = nonTerminalNodeB.getRuleName();
                if (nonTerminalNodeARuleName === nonTerminalNodeBRuleName) {
                    var ruleName = nonTerminalNodeARuleName; ///
                    switch(ruleName){
                        case _ruleNames.METASTATEMENT_RULE_NAME:
                            {
                                var metastatementNodeA = nonTerminalNodeA, metastatementNodeB = nonTerminalNodeB, metastatementNodeVerified = this.verifyMetastatementNode(metastatementNodeA, metastatementNodeB, substitutions, fileContextA, localMetaContextB, verifyAhead);
                                nonTerminalNodeVerified = metastatementNodeVerified; ///
                                break;
                            }
                        default:
                            {
                                nonTerminalNodeVerified = _get(_get_prototype_of(MetaLevelNodesVerifier.prototype), "verifyNonTerminalNode", this).call(this, nonTerminalNodeA, nonTerminalNodeB, substitutions, fileContextA, localMetaContextB, verifyAhead);
                                break;
                            }
                    }
                }
                return nonTerminalNodeVerified;
            }
        },
        {
            key: "verifyMetastatementNode",
            value: function verifyMetastatementNode(metastatementNodeA, metastatementNodeB, substitutions, fileContextA, localMetaContextB, verifyAhead) {
                var metastatementNodeVerified;
                var metavariableNodeA = metavariableNodeQuery(metastatementNodeA);
                if (metavariableNodeA !== null) {
                    var metaVariableNodeVerified = this.verifyMetavariableNode(metavariableNodeA, metastatementNodeB, substitutions, fileContextA, localMetaContextB, verifyAhead);
                    metastatementNodeVerified = metaVariableNodeVerified; ///
                } else {
                    var nonTerminalNodeA = metastatementNodeA, nonTerminalNodeB = metastatementNodeB, nonTerminalNodeVerified = _get(_get_prototype_of(MetaLevelNodesVerifier.prototype), "verifyNonTerminalNode", this).call(this, nonTerminalNodeA, nonTerminalNodeB, substitutions, fileContextA, localMetaContextB, verifyAhead);
                    metastatementNodeVerified = nonTerminalNodeVerified; ///
                }
                return metastatementNodeVerified;
            }
        }
    ]);
    return MetaLevelNodesVerifier;
}(_nodes.default);
Object.assign(MetaLevelNodesVerifier.prototype, _metaLevel.default);
var metaLevelNodesVerifier = new MetaLevelNodesVerifier();
var _default = metaLevelNodesVerifier;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy92ZXJpZmllci9ub2Rlcy9tZXRhTGV2ZWwuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBOb2Rlc1ZlcmlmaWVyIGZyb20gXCIuLi8uLi92ZXJpZmllci9ub2Rlc1wiO1xuaW1wb3J0IG1ldGFMZXZlbE5vZGVzVmVyaWZpZXJNaXhpbnMgZnJvbSBcIi4uLy4uL21peGlucy9ub2Rlc1ZlcmlmaWVyL21ldGFMZXZlbFwiO1xuXG5pbXBvcnQgeyBub2RlUXVlcnkgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5pbXBvcnQgeyBNRVRBU1RBVEVNRU5UX1JVTEVfTkFNRSB9IGZyb20gXCIuLi8uLi9ydWxlTmFtZXNcIjtcblxuY29uc3QgbWV0YXZhcmlhYmxlTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL21ldGFzdGF0ZW1lbnQvbWV0YXZhcmlhYmxlIVwiKTtcblxuY2xhc3MgTWV0YUxldmVsTm9kZXNWZXJpZmllciBleHRlbmRzIE5vZGVzVmVyaWZpZXIge1xuICB2ZXJpZnlOb25UZXJtaW5hbE5vZGUobm9uVGVybWluYWxOb2RlQSwgbm9uVGVybWluYWxOb2RlQiwgc3Vic3RpdHV0aW9ucywgZmlsZUNvbnRleHRBLCBsb2NhbE1ldGFDb250ZXh0QiwgdmVyaWZ5QWhlYWQpIHtcbiAgICBsZXQgbm9uVGVybWluYWxOb2RlVmVyaWZpZWQgPSBmYWxzZTtcblxuICAgIGNvbnN0IG5vblRlcm1pbmFsTm9kZUFSdWxlTmFtZSA9IG5vblRlcm1pbmFsTm9kZUEuZ2V0UnVsZU5hbWUoKSxcbiAgICAgICAgICBub25UZXJtaW5hbE5vZGVCUnVsZU5hbWUgPSBub25UZXJtaW5hbE5vZGVCLmdldFJ1bGVOYW1lKCk7XG5cbiAgICBpZiAobm9uVGVybWluYWxOb2RlQVJ1bGVOYW1lID09PSBub25UZXJtaW5hbE5vZGVCUnVsZU5hbWUpIHtcbiAgICAgIGNvbnN0IHJ1bGVOYW1lID0gbm9uVGVybWluYWxOb2RlQVJ1bGVOYW1lOyAgLy8vXG5cbiAgICAgIHN3aXRjaCAocnVsZU5hbWUpIHtcbiAgICAgICAgY2FzZSBNRVRBU1RBVEVNRU5UX1JVTEVfTkFNRToge1xuICAgICAgICAgIGNvbnN0IG1ldGFzdGF0ZW1lbnROb2RlQSA9IG5vblRlcm1pbmFsTm9kZUEsICAvLy9cbiAgICAgICAgICAgICAgICBtZXRhc3RhdGVtZW50Tm9kZUIgPSBub25UZXJtaW5hbE5vZGVCLCAgLy8vXG4gICAgICAgICAgICAgICAgbWV0YXN0YXRlbWVudE5vZGVWZXJpZmllZCA9IHRoaXMudmVyaWZ5TWV0YXN0YXRlbWVudE5vZGUobWV0YXN0YXRlbWVudE5vZGVBLCBtZXRhc3RhdGVtZW50Tm9kZUIsIHN1YnN0aXR1dGlvbnMsIGZpbGVDb250ZXh0QSwgbG9jYWxNZXRhQ29udGV4dEIsIHZlcmlmeUFoZWFkKTtcblxuICAgICAgICAgIG5vblRlcm1pbmFsTm9kZVZlcmlmaWVkID0gbWV0YXN0YXRlbWVudE5vZGVWZXJpZmllZDsgIC8vL1xuXG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cblxuICAgICAgICBkZWZhdWx0OiB7XG4gICAgICAgICAgbm9uVGVybWluYWxOb2RlVmVyaWZpZWQgPSBzdXBlci52ZXJpZnlOb25UZXJtaW5hbE5vZGUobm9uVGVybWluYWxOb2RlQSwgbm9uVGVybWluYWxOb2RlQiwgc3Vic3RpdHV0aW9ucywgZmlsZUNvbnRleHRBLCBsb2NhbE1ldGFDb250ZXh0QiwgdmVyaWZ5QWhlYWQpO1xuXG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbm9uVGVybWluYWxOb2RlVmVyaWZpZWQ7XG4gIH1cblxuICB2ZXJpZnlNZXRhc3RhdGVtZW50Tm9kZShtZXRhc3RhdGVtZW50Tm9kZUEsIG1ldGFzdGF0ZW1lbnROb2RlQiwgc3Vic3RpdHV0aW9ucywgZmlsZUNvbnRleHRBLCBsb2NhbE1ldGFDb250ZXh0QiwgdmVyaWZ5QWhlYWQpIHtcbiAgICBsZXQgbWV0YXN0YXRlbWVudE5vZGVWZXJpZmllZDtcblxuICAgIGNvbnN0IG1ldGF2YXJpYWJsZU5vZGVBID0gbWV0YXZhcmlhYmxlTm9kZVF1ZXJ5KG1ldGFzdGF0ZW1lbnROb2RlQSk7XG5cbiAgICBpZiAobWV0YXZhcmlhYmxlTm9kZUEgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IG1ldGFWYXJpYWJsZU5vZGVWZXJpZmllZCA9IHRoaXMudmVyaWZ5TWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlQSwgbWV0YXN0YXRlbWVudE5vZGVCLCBzdWJzdGl0dXRpb25zLCBmaWxlQ29udGV4dEEsIGxvY2FsTWV0YUNvbnRleHRCLCB2ZXJpZnlBaGVhZCk7XG5cbiAgICAgIG1ldGFzdGF0ZW1lbnROb2RlVmVyaWZpZWQgPSBtZXRhVmFyaWFibGVOb2RlVmVyaWZpZWQ7IC8vL1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBub25UZXJtaW5hbE5vZGVBID0gbWV0YXN0YXRlbWVudE5vZGVBLCAgLy8vXG4gICAgICAgICAgICBub25UZXJtaW5hbE5vZGVCID0gbWV0YXN0YXRlbWVudE5vZGVCLCAvLy9cbiAgICAgICAgICAgIG5vblRlcm1pbmFsTm9kZVZlcmlmaWVkID0gc3VwZXIudmVyaWZ5Tm9uVGVybWluYWxOb2RlKG5vblRlcm1pbmFsTm9kZUEsIG5vblRlcm1pbmFsTm9kZUIsIHN1YnN0aXR1dGlvbnMsIGZpbGVDb250ZXh0QSwgbG9jYWxNZXRhQ29udGV4dEIsIHZlcmlmeUFoZWFkKTtcblxuICAgICAgbWV0YXN0YXRlbWVudE5vZGVWZXJpZmllZCA9IG5vblRlcm1pbmFsTm9kZVZlcmlmaWVkOyAgLy8vXG4gICAgfVxuXG4gICAgcmV0dXJuIG1ldGFzdGF0ZW1lbnROb2RlVmVyaWZpZWQ7XG4gIH1cbn1cblxuT2JqZWN0LmFzc2lnbihNZXRhTGV2ZWxOb2Rlc1ZlcmlmaWVyLnByb3RvdHlwZSwgbWV0YUxldmVsTm9kZXNWZXJpZmllck1peGlucyk7XG5cbmNvbnN0IG1ldGFMZXZlbE5vZGVzVmVyaWZpZXIgPSBuZXcgTWV0YUxldmVsTm9kZXNWZXJpZmllcigpO1xuXG5leHBvcnQgZGVmYXVsdCBtZXRhTGV2ZWxOb2Rlc1ZlcmlmaWVyO1xuIl0sIm5hbWVzIjpbIm1ldGF2YXJpYWJsZU5vZGVRdWVyeSIsIm5vZGVRdWVyeSIsIk1ldGFMZXZlbE5vZGVzVmVyaWZpZXIiLCJ2ZXJpZnlOb25UZXJtaW5hbE5vZGUiLCJub25UZXJtaW5hbE5vZGVBIiwibm9uVGVybWluYWxOb2RlQiIsInN1YnN0aXR1dGlvbnMiLCJmaWxlQ29udGV4dEEiLCJsb2NhbE1ldGFDb250ZXh0QiIsInZlcmlmeUFoZWFkIiwibm9uVGVybWluYWxOb2RlVmVyaWZpZWQiLCJub25UZXJtaW5hbE5vZGVBUnVsZU5hbWUiLCJnZXRSdWxlTmFtZSIsIm5vblRlcm1pbmFsTm9kZUJSdWxlTmFtZSIsInJ1bGVOYW1lIiwiTUVUQVNUQVRFTUVOVF9SVUxFX05BTUUiLCJtZXRhc3RhdGVtZW50Tm9kZUEiLCJtZXRhc3RhdGVtZW50Tm9kZUIiLCJtZXRhc3RhdGVtZW50Tm9kZVZlcmlmaWVkIiwidmVyaWZ5TWV0YXN0YXRlbWVudE5vZGUiLCJtZXRhdmFyaWFibGVOb2RlQSIsIm1ldGFWYXJpYWJsZU5vZGVWZXJpZmllZCIsInZlcmlmeU1ldGF2YXJpYWJsZU5vZGUiLCJOb2Rlc1ZlcmlmaWVyIiwiT2JqZWN0IiwiYXNzaWduIiwicHJvdG90eXBlIiwibWV0YUxldmVsTm9kZXNWZXJpZmllck1peGlucyIsIm1ldGFMZXZlbE5vZGVzVmVyaWZpZXIiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQW1FQTs7O2VBQUE7Ozs0REFqRTBCO2dFQUNlO3FCQUVmO3lCQUNjOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFeEMsSUFBTUEsd0JBQXdCQyxJQUFBQSxnQkFBUyxFQUFDO0FBRXhDLElBQUEsQUFBTUMsdUNBQUQsQUFBTDtjQUFNQTsrQkFBQUE7YUFBQUE7Z0NBQUFBOzs7a0JBQUFBOztZQUNKQyxLQUFBQTttQkFBQUEsU0FBQUEsc0JBQXNCQyxnQkFBZ0IsRUFBRUMsZ0JBQWdCLEVBQUVDLGFBQWEsRUFBRUMsWUFBWSxFQUFFQyxpQkFBaUIsRUFBRUMsV0FBVztnQkFDbkgsSUFBSUMsMEJBQTBCO2dCQUU5QixJQUFNQywyQkFBMkJQLGlCQUFpQlEsV0FBVyxJQUN2REMsMkJBQTJCUixpQkFBaUJPLFdBQVc7Z0JBRTdELElBQUlELDZCQUE2QkUsMEJBQTBCO29CQUN6RCxJQUFNQyxXQUFXSCwwQkFBMkIsR0FBRztvQkFFL0MsT0FBUUc7d0JBQ04sS0FBS0Msa0NBQXVCOzRCQUFFO2dDQUM1QixJQUFNQyxxQkFBcUJaLGtCQUNyQmEscUJBQXFCWixrQkFDckJhLDRCQUE0QixJQUFJLENBQUNDLHVCQUF1QixDQUFDSCxvQkFBb0JDLG9CQUFvQlgsZUFBZUMsY0FBY0MsbUJBQW1CQztnQ0FFdkpDLDBCQUEwQlEsMkJBQTRCLEdBQUc7Z0NBRXpEOzRCQUNGO3dCQUVBOzRCQUFTO2dDQUNQUiwwQkFBMEIsdUJBdEI5QlIsbUNBc0JvQ0MseUJBQU4sSUFBSyxhQUF1QkMsa0JBQWtCQyxrQkFBa0JDLGVBQWVDLGNBQWNDLG1CQUFtQkM7Z0NBRTFJOzRCQUNGO29CQUNGO2dCQUNGO2dCQUVBLE9BQU9DO1lBQ1Q7OztZQUVBUyxLQUFBQTttQkFBQUEsU0FBQUEsd0JBQXdCSCxrQkFBa0IsRUFBRUMsa0JBQWtCLEVBQUVYLGFBQWEsRUFBRUMsWUFBWSxFQUFFQyxpQkFBaUIsRUFBRUMsV0FBVztnQkFDekgsSUFBSVM7Z0JBRUosSUFBTUUsb0JBQW9CcEIsc0JBQXNCZ0I7Z0JBRWhELElBQUlJLHNCQUFzQixNQUFNO29CQUM5QixJQUFNQywyQkFBMkIsSUFBSSxDQUFDQyxzQkFBc0IsQ0FBQ0YsbUJBQW1CSCxvQkFBb0JYLGVBQWVDLGNBQWNDLG1CQUFtQkM7b0JBRXBKUyw0QkFBNEJHLDBCQUEwQixHQUFHO2dCQUMzRCxPQUFPO29CQUNMLElBQU1qQixtQkFBbUJZLG9CQUNuQlgsbUJBQW1CWSxvQkFDbkJQLDBCQUEwQix1QkE1Q2hDUixtQ0E0Q3NDQyx5QkFBTixJQUFLLGFBQXVCQyxrQkFBa0JDLGtCQUFrQkMsZUFBZUMsY0FBY0MsbUJBQW1CQztvQkFFaEpTLDRCQUE0QlIseUJBQTBCLEdBQUc7Z0JBQzNEO2dCQUVBLE9BQU9RO1lBQ1Q7OztXQWxESWhCO0VBQStCcUIsY0FBYTtBQXFEbERDLE9BQU9DLE1BQU0sQ0FBQ3ZCLHVCQUF1QndCLFNBQVMsRUFBRUMsa0JBQTRCO0FBRTVFLElBQU1DLHlCQUF5QixJQUFJMUI7SUFFbkMsV0FBZTBCIn0=