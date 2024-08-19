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
var _query = require("../../utilities/query");
var _verifier = require("../../utilities/verifier");
var _term = require("../../verify/term");
var _variable = require("../../verify/variable");
var _metavariable = require("../../verify/metavariable");
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
var termNodeQuery = (0, _query.nodeQuery)("/term"), variableNodeQuery = (0, _query.nodeQuery)("/variable"), metavariableNodeQuery = (0, _query.nodeQuery)("/metavariable");
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
                var nodeQueryMaps = [
                    {
                        nodeQuery: termNodeQuery,
                        verifyNode: this.verifyTermNode
                    },
                    {
                        nodeQuery: variableNodeQuery,
                        verifyNode: this.verifyVariableNode
                    },
                    {
                        nodeQuery: metavariableNodeQuery,
                        verifyNode: this.verifyMetavariableNode
                    }
                ];
                var nodeVerified = (0, _verifier.verifyNode)(nodeQueryMaps, nonTerminalNode, localMetaContext, verifyAhead);
                nonTerminalNodeVerified = nodeVerified ? true : _get(_get_prototype_of(MetastatementNodeVerifier.prototype), "verifyNonTerminalNode", this).call(this, nonTerminalNode, localMetaContext, verifyAhead);
                return nonTerminalNodeVerified;
            }
        },
        {
            key: "verifyMetavariableNode",
            value: function verifyMetavariableNode(metavariableNode, localMetaContext, verifyAhead) {
                var standaloneMetavariableVerified = (0, _metavariable.verifyStandaloneMetavariable)(metavariableNode, localMetaContext, verifyAhead), metavariableNodeVerified = standaloneMetavariableVerified; ///
                return metavariableNodeVerified;
            }
        },
        {
            key: "verifyVariableNode",
            value: function verifyVariableNode(variableNode, localMetaContext, verifyAhead) {
                var localContext = _local.default.fromLocalMetaContext(localMetaContext), standaloneVariableVerified = (0, _variable.verifyStandaloneVariable)(variableNode, localContext, verifyAhead), variableNodeVerified = standaloneVariableVerified; ///
                return variableNodeVerified;
            }
        },
        {
            key: "verifyTermNode",
            value: function verifyTermNode(termNode, localMetaContext, verifyAhead) {
                var localContext = _local.default.fromLocalMetaContext(localMetaContext), standaloneTermVerified = (0, _term.verifyStandaloneTerm)(termNode, localContext, verifyAhead), termNodeVerified = standaloneTermVerified; ///
                return termNodeVerified;
            }
        }
    ]);
    return MetastatementNodeVerifier;
}(_node.default);
var metastatementNodeVerifier = new MetastatementNodeVerifier();
var _default = metastatementNodeVerifier;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy92ZXJpZmllci9ub2RlL21ldGFzdGF0ZW1lbnQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBMb2NhbENvbnRleHQgZnJvbSBcIi4uLy4uL2NvbnRleHQvbG9jYWxcIjtcbmltcG9ydCBOb2RlVmVyaWZpZXIgZnJvbSBcIi4uLy4uL3ZlcmlmaWVyL25vZGVcIjtcblxuaW1wb3J0IHsgbm9kZVF1ZXJ5IH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9xdWVyeVwiO1xuaW1wb3J0IHsgdmVyaWZ5Tm9kZSB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvdmVyaWZpZXJcIjtcbmltcG9ydCB7IHZlcmlmeVN0YW5kYWxvbmVUZXJtIH0gZnJvbSBcIi4uLy4uL3ZlcmlmeS90ZXJtXCI7XG5pbXBvcnQgeyB2ZXJpZnlTdGFuZGFsb25lVmFyaWFibGUgfSBmcm9tIFwiLi4vLi4vdmVyaWZ5L3ZhcmlhYmxlXCI7XG5pbXBvcnQgeyB2ZXJpZnlTdGFuZGFsb25lTWV0YXZhcmlhYmxlIH0gZnJvbSBcIi4uLy4uL3ZlcmlmeS9tZXRhdmFyaWFibGVcIjtcblxuY29uc3QgdGVybU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi90ZXJtXCIpLFxuICAgICAgdmFyaWFibGVOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvdmFyaWFibGVcIiksXG4gICAgICBtZXRhdmFyaWFibGVOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvbWV0YXZhcmlhYmxlXCIpO1xuXG5jbGFzcyBNZXRhc3RhdGVtZW50Tm9kZVZlcmlmaWVyIGV4dGVuZHMgTm9kZVZlcmlmaWVyIHtcbiAgdmVyaWZ5Tm9uVGVybWluYWxOb2RlKG5vblRlcm1pbmFsTm9kZSwgbG9jYWxNZXRhQ29udGV4dCwgdmVyaWZ5QWhlYWQpIHtcbiAgICBsZXQgbm9uVGVybWluYWxOb2RlVmVyaWZpZWQ7XG5cbiAgICBjb25zdCBub2RlUXVlcnlNYXBzID0gW1xuICAgICAge1xuICAgICAgICBub2RlUXVlcnkgOnRlcm1Ob2RlUXVlcnksXG4gICAgICAgIHZlcmlmeU5vZGU6IHRoaXMudmVyaWZ5VGVybU5vZGVcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIG5vZGVRdWVyeSA6dmFyaWFibGVOb2RlUXVlcnksXG4gICAgICAgIHZlcmlmeU5vZGU6IHRoaXMudmVyaWZ5VmFyaWFibGVOb2RlXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBub2RlUXVlcnkgOm1ldGF2YXJpYWJsZU5vZGVRdWVyeSxcbiAgICAgICAgdmVyaWZ5Tm9kZTogdGhpcy52ZXJpZnlNZXRhdmFyaWFibGVOb2RlXG4gICAgICB9XG4gICAgXTtcblxuICAgIGNvbnN0IG5vZGVWZXJpZmllZCA9IHZlcmlmeU5vZGUobm9kZVF1ZXJ5TWFwcywgbm9uVGVybWluYWxOb2RlLCBsb2NhbE1ldGFDb250ZXh0LCB2ZXJpZnlBaGVhZCk7XG5cbiAgICBub25UZXJtaW5hbE5vZGVWZXJpZmllZCA9IG5vZGVWZXJpZmllZCA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRydWUgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN1cGVyLnZlcmlmeU5vblRlcm1pbmFsTm9kZShub25UZXJtaW5hbE5vZGUsIGxvY2FsTWV0YUNvbnRleHQsIHZlcmlmeUFoZWFkKTtcblxuICAgIHJldHVybiBub25UZXJtaW5hbE5vZGVWZXJpZmllZDtcbiAgfVxuXG4gIHZlcmlmeU1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSwgbG9jYWxNZXRhQ29udGV4dCwgdmVyaWZ5QWhlYWQpIHtcbiAgICBjb25zdCBzdGFuZGFsb25lTWV0YXZhcmlhYmxlVmVyaWZpZWQgPSB2ZXJpZnlTdGFuZGFsb25lTWV0YXZhcmlhYmxlKG1ldGF2YXJpYWJsZU5vZGUsIGxvY2FsTWV0YUNvbnRleHQsIHZlcmlmeUFoZWFkKSxcbiAgICAgICAgICBtZXRhdmFyaWFibGVOb2RlVmVyaWZpZWQgPSBzdGFuZGFsb25lTWV0YXZhcmlhYmxlVmVyaWZpZWQ7ICAvLy9cblxuICAgIHJldHVybiBtZXRhdmFyaWFibGVOb2RlVmVyaWZpZWQ7XG4gIH1cblxuICB2ZXJpZnlWYXJpYWJsZU5vZGUodmFyaWFibGVOb2RlLCBsb2NhbE1ldGFDb250ZXh0LCB2ZXJpZnlBaGVhZCkge1xuICAgIGNvbnN0IGxvY2FsQ29udGV4dCA9IExvY2FsQ29udGV4dC5mcm9tTG9jYWxNZXRhQ29udGV4dChsb2NhbE1ldGFDb250ZXh0KSxcbiAgICAgICAgICBzdGFuZGFsb25lVmFyaWFibGVWZXJpZmllZCA9IHZlcmlmeVN0YW5kYWxvbmVWYXJpYWJsZSh2YXJpYWJsZU5vZGUsIGxvY2FsQ29udGV4dCwgdmVyaWZ5QWhlYWQpLFxuICAgICAgICAgIHZhcmlhYmxlTm9kZVZlcmlmaWVkID0gc3RhbmRhbG9uZVZhcmlhYmxlVmVyaWZpZWQ7ICAvLy9cblxuICAgIHJldHVybiB2YXJpYWJsZU5vZGVWZXJpZmllZDtcbiAgfVxuXG4gIHZlcmlmeVRlcm1Ob2RlKHRlcm1Ob2RlLCBsb2NhbE1ldGFDb250ZXh0LCB2ZXJpZnlBaGVhZCkge1xuICAgIGNvbnN0IGxvY2FsQ29udGV4dCA9IExvY2FsQ29udGV4dC5mcm9tTG9jYWxNZXRhQ29udGV4dChsb2NhbE1ldGFDb250ZXh0KSxcbiAgICAgICAgICBzdGFuZGFsb25lVGVybVZlcmlmaWVkID0gdmVyaWZ5U3RhbmRhbG9uZVRlcm0odGVybU5vZGUsIGxvY2FsQ29udGV4dCwgdmVyaWZ5QWhlYWQpLFxuICAgICAgICAgIHRlcm1Ob2RlVmVyaWZpZWQgPSBzdGFuZGFsb25lVGVybVZlcmlmaWVkOyAgLy8vXG5cbiAgICByZXR1cm4gdGVybU5vZGVWZXJpZmllZDtcbiAgfVxufVxuXG5jb25zdCBtZXRhc3RhdGVtZW50Tm9kZVZlcmlmaWVyID0gbmV3IE1ldGFzdGF0ZW1lbnROb2RlVmVyaWZpZXIoKTtcblxuZXhwb3J0IGRlZmF1bHQgbWV0YXN0YXRlbWVudE5vZGVWZXJpZmllcjtcbiJdLCJuYW1lcyI6WyJ0ZXJtTm9kZVF1ZXJ5Iiwibm9kZVF1ZXJ5IiwidmFyaWFibGVOb2RlUXVlcnkiLCJtZXRhdmFyaWFibGVOb2RlUXVlcnkiLCJNZXRhc3RhdGVtZW50Tm9kZVZlcmlmaWVyIiwidmVyaWZ5Tm9uVGVybWluYWxOb2RlIiwibm9uVGVybWluYWxOb2RlIiwibG9jYWxNZXRhQ29udGV4dCIsInZlcmlmeUFoZWFkIiwibm9uVGVybWluYWxOb2RlVmVyaWZpZWQiLCJub2RlUXVlcnlNYXBzIiwidmVyaWZ5Tm9kZSIsInZlcmlmeVRlcm1Ob2RlIiwidmVyaWZ5VmFyaWFibGVOb2RlIiwidmVyaWZ5TWV0YXZhcmlhYmxlTm9kZSIsIm5vZGVWZXJpZmllZCIsIm1ldGF2YXJpYWJsZU5vZGUiLCJzdGFuZGFsb25lTWV0YXZhcmlhYmxlVmVyaWZpZWQiLCJ2ZXJpZnlTdGFuZGFsb25lTWV0YXZhcmlhYmxlIiwibWV0YXZhcmlhYmxlTm9kZVZlcmlmaWVkIiwidmFyaWFibGVOb2RlIiwibG9jYWxDb250ZXh0IiwiTG9jYWxDb250ZXh0IiwiZnJvbUxvY2FsTWV0YUNvbnRleHQiLCJzdGFuZGFsb25lVmFyaWFibGVWZXJpZmllZCIsInZlcmlmeVN0YW5kYWxvbmVWYXJpYWJsZSIsInZhcmlhYmxlTm9kZVZlcmlmaWVkIiwidGVybU5vZGUiLCJzdGFuZGFsb25lVGVybVZlcmlmaWVkIiwidmVyaWZ5U3RhbmRhbG9uZVRlcm0iLCJ0ZXJtTm9kZVZlcmlmaWVkIiwiTm9kZVZlcmlmaWVyIiwibWV0YXN0YXRlbWVudE5vZGVWZXJpZmllciJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBcUVBOzs7ZUFBQTs7OzREQW5FeUI7MkRBQ0E7cUJBRUM7d0JBQ0M7b0JBQ1U7d0JBQ0k7NEJBQ0k7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUU3QyxJQUFNQSxnQkFBZ0JDLElBQUFBLGdCQUFTLEVBQUMsVUFDMUJDLG9CQUFvQkQsSUFBQUEsZ0JBQVMsRUFBQyxjQUM5QkUsd0JBQXdCRixJQUFBQSxnQkFBUyxFQUFDO0FBRXhDLElBQUEsQUFBTUcsMENBQUQsQUFBTDtjQUFNQTsrQkFBQUE7YUFBQUE7Z0NBQUFBOzs7a0JBQUFBOztZQUNKQyxLQUFBQTttQkFBQUEsU0FBQUEsc0JBQXNCQyxlQUFlLEVBQUVDLGdCQUFnQixFQUFFQyxXQUFXO2dCQUNsRSxJQUFJQztnQkFFSixJQUFNQyxnQkFBZ0I7b0JBQ3BCO3dCQUNFVCxXQUFXRDt3QkFDWFcsWUFBWSxJQUFJLENBQUNDLGNBQWM7b0JBQ2pDO29CQUNBO3dCQUNFWCxXQUFXQzt3QkFDWFMsWUFBWSxJQUFJLENBQUNFLGtCQUFrQjtvQkFDckM7b0JBQ0E7d0JBQ0VaLFdBQVdFO3dCQUNYUSxZQUFZLElBQUksQ0FBQ0csc0JBQXNCO29CQUN6QztpQkFDRDtnQkFFRCxJQUFNQyxlQUFlSixJQUFBQSxvQkFBVSxFQUFDRCxlQUFlSixpQkFBaUJDLGtCQUFrQkM7Z0JBRWxGQywwQkFBMEJNLGVBQ0UsT0FDRSx1QkF2QjVCWCxzQ0F1QmtDQyx5QkFBTixJQUFLLGFBQXVCQyxpQkFBaUJDLGtCQUFrQkM7Z0JBRTdGLE9BQU9DO1lBQ1Q7OztZQUVBSyxLQUFBQTttQkFBQUEsU0FBQUEsdUJBQXVCRSxnQkFBZ0IsRUFBRVQsZ0JBQWdCLEVBQUVDLFdBQVc7Z0JBQ3BFLElBQU1TLGlDQUFpQ0MsSUFBQUEsMENBQTRCLEVBQUNGLGtCQUFrQlQsa0JBQWtCQyxjQUNsR1csMkJBQTJCRixnQ0FBaUMsR0FBRztnQkFFckUsT0FBT0U7WUFDVDs7O1lBRUFOLEtBQUFBO21CQUFBQSxTQUFBQSxtQkFBbUJPLFlBQVksRUFBRWIsZ0JBQWdCLEVBQUVDLFdBQVc7Z0JBQzVELElBQU1hLGVBQWVDLGNBQVksQ0FBQ0Msb0JBQW9CLENBQUNoQixtQkFDakRpQiw2QkFBNkJDLElBQUFBLGtDQUF3QixFQUFDTCxjQUFjQyxjQUFjYixjQUNsRmtCLHVCQUF1QkYsNEJBQTZCLEdBQUc7Z0JBRTdELE9BQU9FO1lBQ1Q7OztZQUVBZCxLQUFBQTttQkFBQUEsU0FBQUEsZUFBZWUsUUFBUSxFQUFFcEIsZ0JBQWdCLEVBQUVDLFdBQVc7Z0JBQ3BELElBQU1hLGVBQWVDLGNBQVksQ0FBQ0Msb0JBQW9CLENBQUNoQixtQkFDakRxQix5QkFBeUJDLElBQUFBLDBCQUFvQixFQUFDRixVQUFVTixjQUFjYixjQUN0RXNCLG1CQUFtQkYsd0JBQXlCLEdBQUc7Z0JBRXJELE9BQU9FO1lBQ1Q7OztXQWpESTFCO0VBQWtDMkIsYUFBWTtBQW9EcEQsSUFBTUMsNEJBQTRCLElBQUk1QjtJQUV0QyxXQUFlNEIifQ==