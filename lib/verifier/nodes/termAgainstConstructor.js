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
var _termAgainstType = /*#__PURE__*/ _interop_require_default(require("../../verify/termAgainstType"));
var _query = require("../../utilities/query");
var _verifier = require("../../utilities/verifier");
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
                var _this = this;
                var nonTerminalNodeVerified;
                var nodeQueryMaps = [
                    {
                        nodeQueryA: termNodeQuery,
                        nodeQueryB: typeNodeQuery,
                        verifyNodes: function(nodeA, nodeB, localContext, verifyAhead) {
                            var nonTerminalNodeVerified;
                            var termNodeA = nodeA, typeNodeB = nodeB, termNodeVerifiedAgainstTypeNode = _this.verifyTermNodeAgainstTypeNode(termNodeA, typeNodeB, localContext, verifyAhead);
                            nonTerminalNodeVerified = termNodeVerifiedAgainstTypeNode; ///
                            return nonTerminalNodeVerified;
                        }
                    }
                ];
                var nodesVerified = (0, _verifier.verifyNodes)(nodeQueryMaps, nonTerminalNodeA, nonTerminalNodeB, localContext, verifyAhead);
                nonTerminalNodeVerified = nodesVerified ? true : _get(_get_prototype_of(TermAgainstConstructorNodesVerifier.prototype), "verifyNonTerminalNode", this).call(this, nonTerminalNodeA, nonTerminalNodeB, localContext, verifyAhead);
                return nonTerminalNodeVerified;
            }
        },
        {
            key: "verifyTermNodeAgainstTypeNode",
            value: function verifyTermNodeAgainstTypeNode(termNodeA, typeNodeB, localContext, verifyAhead) {
                var termNodeVerifiedAgainstTypeNode;
                var verifyTerm = termAgainstConstructorNodesVerifier.verifyTerm, termNode = termNodeA, typeNode = typeNodeB, typeVerifiedAgainstTerm = (0, _termAgainstType.default)(termNode, typeNode, localContext, verifyAhead, verifyTerm);
                termNodeVerifiedAgainstTypeNode = typeVerifiedAgainstTerm; ///
                return termNodeVerifiedAgainstTypeNode;
            }
        }
    ]);
    return TermAgainstConstructorNodesVerifier;
}(_nodes.default);
var termAgainstConstructorNodesVerifier = new TermAgainstConstructorNodesVerifier();
var _default = termAgainstConstructorNodesVerifier;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy92ZXJpZmllci9ub2Rlcy90ZXJtQWdhaW5zdENvbnN0cnVjdG9yLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgTm9kZXNWZXJpZmllciBmcm9tIFwiLi4vLi4vdmVyaWZpZXIvbm9kZXNcIjtcbmltcG9ydCB2ZXJpZnlUZXJtQWdhaW5zdFR5cGUgZnJvbSBcIi4uLy4uL3ZlcmlmeS90ZXJtQWdhaW5zdFR5cGVcIjtcblxuaW1wb3J0IHsgbm9kZVF1ZXJ5IH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9xdWVyeVwiO1xuaW1wb3J0IHsgdmVyaWZ5Tm9kZXMgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL3ZlcmlmaWVyXCI7XG5cbmNvbnN0IHRlcm1Ob2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvYXJndW1lbnQvdGVybSFcIiksXG4gICAgICB0eXBlTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL2FyZ3VtZW50L3R5cGUhXCIpO1xuXG5jbGFzcyBUZXJtQWdhaW5zdENvbnN0cnVjdG9yTm9kZXNWZXJpZmllciBleHRlbmRzIE5vZGVzVmVyaWZpZXIge1xuICB2ZXJpZnlOb25UZXJtaW5hbE5vZGUobm9uVGVybWluYWxOb2RlQSwgbm9uVGVybWluYWxOb2RlQiwgbG9jYWxDb250ZXh0LCB2ZXJpZnlBaGVhZCkge1xuICAgIGxldCBub25UZXJtaW5hbE5vZGVWZXJpZmllZDtcblxuICAgIGNvbnN0IG5vZGVRdWVyeU1hcHMgPSBbXG4gICAgICB7XG4gICAgICAgIG5vZGVRdWVyeUE6IHRlcm1Ob2RlUXVlcnksXG4gICAgICAgIG5vZGVRdWVyeUI6IHR5cGVOb2RlUXVlcnksXG4gICAgICAgIHZlcmlmeU5vZGVzOiAobm9kZUEsIG5vZGVCLCBsb2NhbENvbnRleHQsIHZlcmlmeUFoZWFkKSA9PiB7XG4gICAgICAgICAgbGV0IG5vblRlcm1pbmFsTm9kZVZlcmlmaWVkO1xuXG4gICAgICAgICAgY29uc3QgdGVybU5vZGVBID0gbm9kZUEsICAvLy9cbiAgICAgICAgICAgICAgICB0eXBlTm9kZUIgPSBub2RlQiwgIC8vL1xuICAgICAgICAgICAgICAgIHRlcm1Ob2RlVmVyaWZpZWRBZ2FpbnN0VHlwZU5vZGUgPVxuXG4gICAgICAgICAgICAgICAgICB0aGlzLnZlcmlmeVRlcm1Ob2RlQWdhaW5zdFR5cGVOb2RlKHRlcm1Ob2RlQSwgdHlwZU5vZGVCLCBsb2NhbENvbnRleHQsIHZlcmlmeUFoZWFkKTtcblxuICAgICAgICAgIG5vblRlcm1pbmFsTm9kZVZlcmlmaWVkID0gdGVybU5vZGVWZXJpZmllZEFnYWluc3RUeXBlTm9kZTsgIC8vL1xuXG4gICAgICAgICAgcmV0dXJuIG5vblRlcm1pbmFsTm9kZVZlcmlmaWVkO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgXTtcblxuICAgIGNvbnN0IG5vZGVzVmVyaWZpZWQgPSB2ZXJpZnlOb2Rlcyhub2RlUXVlcnlNYXBzLCBub25UZXJtaW5hbE5vZGVBLCBub25UZXJtaW5hbE5vZGVCLCBsb2NhbENvbnRleHQsIHZlcmlmeUFoZWFkKTtcblxuICAgIG5vblRlcm1pbmFsTm9kZVZlcmlmaWVkID0gbm9kZXNWZXJpZmllZCA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRydWUgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN1cGVyLnZlcmlmeU5vblRlcm1pbmFsTm9kZShub25UZXJtaW5hbE5vZGVBLCBub25UZXJtaW5hbE5vZGVCLCBsb2NhbENvbnRleHQsIHZlcmlmeUFoZWFkKTtcblxuICAgIHJldHVybiBub25UZXJtaW5hbE5vZGVWZXJpZmllZDtcbiAgfVxuXG4gIHZlcmlmeVRlcm1Ob2RlQWdhaW5zdFR5cGVOb2RlKHRlcm1Ob2RlQSwgdHlwZU5vZGVCLCBsb2NhbENvbnRleHQsIHZlcmlmeUFoZWFkKSB7XG4gICAgbGV0IHRlcm1Ob2RlVmVyaWZpZWRBZ2FpbnN0VHlwZU5vZGU7XG5cbiAgICBjb25zdCB7IHZlcmlmeVRlcm0gfSA9IHRlcm1BZ2FpbnN0Q29uc3RydWN0b3JOb2Rlc1ZlcmlmaWVyLFxuICAgICAgICAgIHRlcm1Ob2RlID0gdGVybU5vZGVBLCAvLy9cbiAgICAgICAgICB0eXBlTm9kZSA9IHR5cGVOb2RlQiwgLy8vXG4gICAgICAgICAgdHlwZVZlcmlmaWVkQWdhaW5zdFRlcm0gPSB2ZXJpZnlUZXJtQWdhaW5zdFR5cGUodGVybU5vZGUsIHR5cGVOb2RlLCBsb2NhbENvbnRleHQsIHZlcmlmeUFoZWFkLCB2ZXJpZnlUZXJtKTtcblxuICAgIHRlcm1Ob2RlVmVyaWZpZWRBZ2FpbnN0VHlwZU5vZGUgPSB0eXBlVmVyaWZpZWRBZ2FpbnN0VGVybTsgLy8vXG5cbiAgICByZXR1cm4gdGVybU5vZGVWZXJpZmllZEFnYWluc3RUeXBlTm9kZTtcbiAgfVxufVxuXG5jb25zdCB0ZXJtQWdhaW5zdENvbnN0cnVjdG9yTm9kZXNWZXJpZmllciA9IG5ldyBUZXJtQWdhaW5zdENvbnN0cnVjdG9yTm9kZXNWZXJpZmllcigpO1xuXG5leHBvcnQgZGVmYXVsdCB0ZXJtQWdhaW5zdENvbnN0cnVjdG9yTm9kZXNWZXJpZmllcjtcbiJdLCJuYW1lcyI6WyJ0ZXJtTm9kZVF1ZXJ5Iiwibm9kZVF1ZXJ5IiwidHlwZU5vZGVRdWVyeSIsIlRlcm1BZ2FpbnN0Q29uc3RydWN0b3JOb2Rlc1ZlcmlmaWVyIiwidmVyaWZ5Tm9uVGVybWluYWxOb2RlIiwibm9uVGVybWluYWxOb2RlQSIsIm5vblRlcm1pbmFsTm9kZUIiLCJsb2NhbENvbnRleHQiLCJ2ZXJpZnlBaGVhZCIsIm5vblRlcm1pbmFsTm9kZVZlcmlmaWVkIiwibm9kZVF1ZXJ5TWFwcyIsIm5vZGVRdWVyeUEiLCJub2RlUXVlcnlCIiwidmVyaWZ5Tm9kZXMiLCJub2RlQSIsIm5vZGVCIiwidGVybU5vZGVBIiwidHlwZU5vZGVCIiwidGVybU5vZGVWZXJpZmllZEFnYWluc3RUeXBlTm9kZSIsInZlcmlmeVRlcm1Ob2RlQWdhaW5zdFR5cGVOb2RlIiwibm9kZXNWZXJpZmllZCIsInZlcmlmeVRlcm0iLCJ0ZXJtQWdhaW5zdENvbnN0cnVjdG9yTm9kZXNWZXJpZmllciIsInRlcm1Ob2RlIiwidHlwZU5vZGUiLCJ0eXBlVmVyaWZpZWRBZ2FpbnN0VGVybSIsInZlcmlmeVRlcm1BZ2FpbnN0VHlwZSIsIk5vZGVzVmVyaWZpZXIiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQTREQTs7O2VBQUE7Ozs0REExRDBCO3NFQUNRO3FCQUVSO3dCQUNFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFNUIsSUFBTUEsZ0JBQWdCQyxJQUFBQSxnQkFBUyxFQUFDLG9CQUMxQkMsZ0JBQWdCRCxJQUFBQSxnQkFBUyxFQUFDO0FBRWhDLElBQUEsQUFBTUUsb0RBQUQsQUFBTDtjQUFNQTsrQkFBQUE7YUFBQUE7Z0NBQUFBOzs7a0JBQUFBOztZQUNKQyxLQUFBQTttQkFBQUEsU0FBQUEsc0JBQXNCQyxnQkFBZ0IsRUFBRUMsZ0JBQWdCLEVBQUVDLFlBQVksRUFBRUMsV0FBVzs7Z0JBQ2pGLElBQUlDO2dCQUVKLElBQU1DLGdCQUFnQjtvQkFDcEI7d0JBQ0VDLFlBQVlYO3dCQUNaWSxZQUFZVjt3QkFDWlcsYUFBYSxTQUFDQyxPQUFPQyxPQUFPUixjQUFjQzs0QkFDeEMsSUFBSUM7NEJBRUosSUFBTU8sWUFBWUYsT0FDWkcsWUFBWUYsT0FDWkcsa0NBRUUsTUFBS0MsNkJBQTZCLENBQUNILFdBQVdDLFdBQVdWLGNBQWNDOzRCQUUvRUMsMEJBQTBCUyxpQ0FBa0MsR0FBRzs0QkFFL0QsT0FBT1Q7d0JBQ1Q7b0JBQ0Y7aUJBQ0Q7Z0JBRUQsSUFBTVcsZ0JBQWdCUCxJQUFBQSxxQkFBVyxFQUFDSCxlQUFlTCxrQkFBa0JDLGtCQUFrQkMsY0FBY0M7Z0JBRW5HQywwQkFBMEJXLGdCQUNFLE9BQ0UsdUJBNUI1QmpCLGdEQTRCa0NDLHlCQUFOLElBQUssYUFBdUJDLGtCQUFrQkMsa0JBQWtCQyxjQUFjQztnQkFFNUcsT0FBT0M7WUFDVDs7O1lBRUFVLEtBQUFBO21CQUFBQSxTQUFBQSw4QkFBOEJILFNBQVMsRUFBRUMsU0FBUyxFQUFFVixZQUFZLEVBQUVDLFdBQVc7Z0JBQzNFLElBQUlVO2dCQUVKLElBQU0sQUFBRUcsYUFBZUMsb0NBQWZELFlBQ0ZFLFdBQVdQLFdBQ1hRLFdBQVdQLFdBQ1hRLDBCQUEwQkMsSUFBQUEsd0JBQXFCLEVBQUNILFVBQVVDLFVBQVVqQixjQUFjQyxhQUFhYTtnQkFFckdILGtDQUFrQ08seUJBQXlCLEdBQUc7Z0JBRTlELE9BQU9QO1lBQ1Q7OztXQTVDSWY7RUFBNEN3QixjQUFhO0FBK0MvRCxJQUFNTCxzQ0FBc0MsSUFBSW5CO0lBRWhELFdBQWVtQiJ9