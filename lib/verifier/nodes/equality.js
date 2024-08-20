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
var _query = require("../../utilities/query");
var _verifier = require("../../utilities/verifier");
var _equivalences = require("../../utilities/equivalences");
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
var termNodeQuery = (0, _query.nodeQuery)("/term!");
var EqualityNodesVerifier = /*#__PURE__*/ function(NodesVerifier) {
    _inherits(EqualityNodesVerifier, NodesVerifier);
    var _super = _create_super(EqualityNodesVerifier);
    function EqualityNodesVerifier() {
        _class_call_check(this, EqualityNodesVerifier);
        return _super.apply(this, arguments);
    }
    _create_class(EqualityNodesVerifier, [
        {
            key: "verifyNonTerminalNode",
            value: function verifyNonTerminalNode(nonTerminalNodeA, nonTerminalNodeB, localContext, verifyAhead) {
                var _this = this;
                var nonTerminalNodeVerified;
                var nodeQueryMaps = [
                    {
                        nodeQueryA: termNodeQuery,
                        nodeQueryB: termNodeQuery,
                        verifyNodes: function(nodeA, nodeB, localContext, verifyAhead) {
                            var nonTerminalNodeVerified;
                            var termNodeA = nodeA, termNodeB = nodeB, termNodeVerifiedAgainstTermNode = _this.verifyTermNodeAgainstTermNode(termNodeA, termNodeB, localContext, verifyAhead);
                            nonTerminalNodeVerified = termNodeVerifiedAgainstTermNode; ///
                            return nonTerminalNodeVerified;
                        }
                    }
                ];
                var nodesVerified = (0, _verifier.verifyNodes)(nodeQueryMaps, nonTerminalNodeA, nonTerminalNodeB, localContext, verifyAhead);
                nonTerminalNodeVerified = nodesVerified ? true : _get(_get_prototype_of(EqualityNodesVerifier.prototype), "verifyNonTerminalNode", this).call(this, nonTerminalNodeA, nonTerminalNodeB, localContext, verifyAhead);
                return nonTerminalNodeVerified;
            }
        },
        {
            key: "verifyTermNodeAgainstTermNode",
            value: function verifyTermNodeAgainstTermNode(termNodeA, termNodeB, localContext, verifyAhead) {
                var termNodeVerifiedAgainstTermNode;
                var leftTermNode = termNodeA, rightTermNode = termNodeB, equivalences = localContext.getEquivalences(), termNodesEqual = (0, _equivalences.areTermNodesEqual)(leftTermNode, rightTermNode, equivalences);
                if (termNodesEqual) {
                    var verifiedAhead = verifyAhead();
                    termNodeVerifiedAgainstTermNode = verifiedAhead; ///
                }
                return termNodeVerifiedAgainstTermNode;
            }
        }
    ]);
    return EqualityNodesVerifier;
}(_nodes.default);
var equalityNodesVerifier = new EqualityNodesVerifier();
var _default = equalityNodesVerifier;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy92ZXJpZmllci9ub2Rlcy9lcXVhbGl0eS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IE5vZGVzVmVyaWZpZXIgZnJvbSBcIi4uLy4uL3ZlcmlmaWVyL25vZGVzXCI7XG5cbmltcG9ydCB7IG5vZGVRdWVyeSB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvcXVlcnlcIjtcbmltcG9ydCB7IHZlcmlmeU5vZGVzIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy92ZXJpZmllclwiO1xuaW1wb3J0IHsgYXJlVGVybU5vZGVzRXF1YWwgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL2VxdWl2YWxlbmNlc1wiO1xuXG5jb25zdCB0ZXJtTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3Rlcm0hXCIpO1xuXG5jbGFzcyBFcXVhbGl0eU5vZGVzVmVyaWZpZXIgZXh0ZW5kcyBOb2Rlc1ZlcmlmaWVyIHtcbiAgdmVyaWZ5Tm9uVGVybWluYWxOb2RlKG5vblRlcm1pbmFsTm9kZUEsIG5vblRlcm1pbmFsTm9kZUIsIGxvY2FsQ29udGV4dCwgdmVyaWZ5QWhlYWQpIHtcbiAgICBsZXQgbm9uVGVybWluYWxOb2RlVmVyaWZpZWQ7XG5cbiAgICBjb25zdCBub2RlUXVlcnlNYXBzID0gW1xuICAgICAge1xuICAgICAgICBub2RlUXVlcnlBOiB0ZXJtTm9kZVF1ZXJ5LFxuICAgICAgICBub2RlUXVlcnlCOiB0ZXJtTm9kZVF1ZXJ5LFxuICAgICAgICB2ZXJpZnlOb2RlczogKG5vZGVBLCBub2RlQiwgbG9jYWxDb250ZXh0LCB2ZXJpZnlBaGVhZCkgPT4ge1xuICAgICAgICAgIGxldCBub25UZXJtaW5hbE5vZGVWZXJpZmllZDtcblxuICAgICAgICAgIGNvbnN0IHRlcm1Ob2RlQSA9IG5vZGVBLCAgLy8vXG4gICAgICAgICAgICAgICAgdGVybU5vZGVCID0gbm9kZUIsICAvLy9cbiAgICAgICAgICAgICAgICB0ZXJtTm9kZVZlcmlmaWVkQWdhaW5zdFRlcm1Ob2RlID1cblxuICAgICAgICAgICAgICAgICAgdGhpcy52ZXJpZnlUZXJtTm9kZUFnYWluc3RUZXJtTm9kZSh0ZXJtTm9kZUEsIHRlcm1Ob2RlQiwgbG9jYWxDb250ZXh0LCB2ZXJpZnlBaGVhZCk7XG5cbiAgICAgICAgICBub25UZXJtaW5hbE5vZGVWZXJpZmllZCA9IHRlcm1Ob2RlVmVyaWZpZWRBZ2FpbnN0VGVybU5vZGU7IC8vL1xuXG4gICAgICAgICAgcmV0dXJuIG5vblRlcm1pbmFsTm9kZVZlcmlmaWVkO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgXTtcblxuICAgIGNvbnN0IG5vZGVzVmVyaWZpZWQgPSB2ZXJpZnlOb2Rlcyhub2RlUXVlcnlNYXBzLCBub25UZXJtaW5hbE5vZGVBLCBub25UZXJtaW5hbE5vZGVCLCBsb2NhbENvbnRleHQsIHZlcmlmeUFoZWFkKTtcblxuICAgIG5vblRlcm1pbmFsTm9kZVZlcmlmaWVkID0gbm9kZXNWZXJpZmllZCA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cnVlIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3VwZXIudmVyaWZ5Tm9uVGVybWluYWxOb2RlKG5vblRlcm1pbmFsTm9kZUEsIG5vblRlcm1pbmFsTm9kZUIsIGxvY2FsQ29udGV4dCwgdmVyaWZ5QWhlYWQpO1xuXG4gICAgcmV0dXJuIG5vblRlcm1pbmFsTm9kZVZlcmlmaWVkO1xuICB9XG5cbiAgdmVyaWZ5VGVybU5vZGVBZ2FpbnN0VGVybU5vZGUodGVybU5vZGVBLCB0ZXJtTm9kZUIsIGxvY2FsQ29udGV4dCwgdmVyaWZ5QWhlYWQpIHtcbiAgICBsZXQgdGVybU5vZGVWZXJpZmllZEFnYWluc3RUZXJtTm9kZTtcblxuICAgIGNvbnN0IGxlZnRUZXJtTm9kZSA9IHRlcm1Ob2RlQSwgLy8vXG4gICAgICAgICAgcmlnaHRUZXJtTm9kZSA9IHRlcm1Ob2RlQiwgLy8vXG4gICAgICAgICAgZXF1aXZhbGVuY2VzID0gbG9jYWxDb250ZXh0LmdldEVxdWl2YWxlbmNlcygpLFxuICAgICAgICAgIHRlcm1Ob2Rlc0VxdWFsID0gYXJlVGVybU5vZGVzRXF1YWwobGVmdFRlcm1Ob2RlLCByaWdodFRlcm1Ob2RlLCBlcXVpdmFsZW5jZXMpO1xuXG4gICAgaWYgKHRlcm1Ob2Rlc0VxdWFsKSB7XG4gICAgICBjb25zdCB2ZXJpZmllZEFoZWFkID0gdmVyaWZ5QWhlYWQoKTtcblxuICAgICAgdGVybU5vZGVWZXJpZmllZEFnYWluc3RUZXJtTm9kZSA9IHZlcmlmaWVkQWhlYWQ7ICAvLy9cbiAgICB9XG5cbiAgICByZXR1cm4gdGVybU5vZGVWZXJpZmllZEFnYWluc3RUZXJtTm9kZTtcbiAgfVxufVxuXG5jb25zdCBlcXVhbGl0eU5vZGVzVmVyaWZpZXIgPSBuZXcgRXF1YWxpdHlOb2Rlc1ZlcmlmaWVyKCk7XG5cbmV4cG9ydCBkZWZhdWx0IGVxdWFsaXR5Tm9kZXNWZXJpZmllcjtcbiJdLCJuYW1lcyI6WyJ0ZXJtTm9kZVF1ZXJ5Iiwibm9kZVF1ZXJ5IiwiRXF1YWxpdHlOb2Rlc1ZlcmlmaWVyIiwidmVyaWZ5Tm9uVGVybWluYWxOb2RlIiwibm9uVGVybWluYWxOb2RlQSIsIm5vblRlcm1pbmFsTm9kZUIiLCJsb2NhbENvbnRleHQiLCJ2ZXJpZnlBaGVhZCIsIm5vblRlcm1pbmFsTm9kZVZlcmlmaWVkIiwibm9kZVF1ZXJ5TWFwcyIsIm5vZGVRdWVyeUEiLCJub2RlUXVlcnlCIiwidmVyaWZ5Tm9kZXMiLCJub2RlQSIsIm5vZGVCIiwidGVybU5vZGVBIiwidGVybU5vZGVCIiwidGVybU5vZGVWZXJpZmllZEFnYWluc3RUZXJtTm9kZSIsInZlcmlmeVRlcm1Ob2RlQWdhaW5zdFRlcm1Ob2RlIiwibm9kZXNWZXJpZmllZCIsImxlZnRUZXJtTm9kZSIsInJpZ2h0VGVybU5vZGUiLCJlcXVpdmFsZW5jZXMiLCJnZXRFcXVpdmFsZW5jZXMiLCJ0ZXJtTm9kZXNFcXVhbCIsImFyZVRlcm1Ob2Rlc0VxdWFsIiwidmVyaWZpZWRBaGVhZCIsIk5vZGVzVmVyaWZpZXIiLCJlcXVhbGl0eU5vZGVzVmVyaWZpZXIiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQStEQTs7O2VBQUE7Ozs0REE3RDBCO3FCQUVBO3dCQUNFOzRCQUNNOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFbEMsSUFBTUEsZ0JBQWdCQyxJQUFBQSxnQkFBUyxFQUFDO0FBRWhDLElBQUEsQUFBTUMsc0NBQUQsQUFBTDtjQUFNQTsrQkFBQUE7YUFBQUE7Z0NBQUFBOzs7a0JBQUFBOztZQUNKQyxLQUFBQTttQkFBQUEsU0FBQUEsc0JBQXNCQyxnQkFBZ0IsRUFBRUMsZ0JBQWdCLEVBQUVDLFlBQVksRUFBRUMsV0FBVzs7Z0JBQ2pGLElBQUlDO2dCQUVKLElBQU1DLGdCQUFnQjtvQkFDcEI7d0JBQ0VDLFlBQVlWO3dCQUNaVyxZQUFZWDt3QkFDWlksYUFBYSxTQUFDQyxPQUFPQyxPQUFPUixjQUFjQzs0QkFDeEMsSUFBSUM7NEJBRUosSUFBTU8sWUFBWUYsT0FDWkcsWUFBWUYsT0FDWkcsa0NBRUUsTUFBS0MsNkJBQTZCLENBQUNILFdBQVdDLFdBQVdWLGNBQWNDOzRCQUUvRUMsMEJBQTBCUyxpQ0FBaUMsR0FBRzs0QkFFOUQsT0FBT1Q7d0JBQ1Q7b0JBQ0Y7aUJBQ0Q7Z0JBRUQsSUFBTVcsZ0JBQWdCUCxJQUFBQSxxQkFBVyxFQUFDSCxlQUFlTCxrQkFBa0JDLGtCQUFrQkMsY0FBY0M7Z0JBRW5HQywwQkFBMEJXLGdCQUNHLE9BQ0UsdUJBNUI3QmpCLGtDQTRCbUNDLHlCQUFOLElBQUssYUFBdUJDLGtCQUFrQkMsa0JBQWtCQyxjQUFjQztnQkFFN0csT0FBT0M7WUFDVDs7O1lBRUFVLEtBQUFBO21CQUFBQSxTQUFBQSw4QkFBOEJILFNBQVMsRUFBRUMsU0FBUyxFQUFFVixZQUFZLEVBQUVDLFdBQVc7Z0JBQzNFLElBQUlVO2dCQUVKLElBQU1HLGVBQWVMLFdBQ2ZNLGdCQUFnQkwsV0FDaEJNLGVBQWVoQixhQUFhaUIsZUFBZSxJQUMzQ0MsaUJBQWlCQyxJQUFBQSwrQkFBaUIsRUFBQ0wsY0FBY0MsZUFBZUM7Z0JBRXRFLElBQUlFLGdCQUFnQjtvQkFDbEIsSUFBTUUsZ0JBQWdCbkI7b0JBRXRCVSxrQ0FBa0NTLGVBQWdCLEdBQUc7Z0JBQ3ZEO2dCQUVBLE9BQU9UO1lBQ1Q7OztXQWhESWY7RUFBOEJ5QixjQUFhO0FBbURqRCxJQUFNQyx3QkFBd0IsSUFBSTFCO0lBRWxDLFdBQWUwQiJ9