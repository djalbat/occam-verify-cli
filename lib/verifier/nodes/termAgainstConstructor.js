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
                            var termNodeA = nodeA, typeNodeB = nodeB, termVerifiedAgainstType = _this.verifyTermNodeAgainstTypeNode(termNodeA, typeNodeB, localContext, verifyAhead);
                            nonTerminalNodeVerified = termVerifiedAgainstType; ///
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
                var termVerifiedAgainstType;
                var verifyTerm = termAgainstConstructorNodesVerifier.verifyTerm, terms = [], termNode = termNodeA, termVerified = verifyTerm(termNode, terms, localContext, function() {
                    var verifiedAhead = false;
                    var firstTerm = (0, _array.first)(terms), term = firstTerm, termType = term.getType(), typeNode = typeNodeB, type = localContext.findTypeByTypeNode(typeNode), termTypeEqualToOrSubTypeOfType = termType.isEqualToOrSubTypeOf(type);
                    if (termTypeEqualToOrSubTypeOfType) {
                        verifiedAhead = verifyAhead();
                    }
                    return verifiedAhead;
                });
                termVerifiedAgainstType = termVerified; ///
                return termVerifiedAgainstType;
            }
        }
    ]);
    return TermAgainstConstructorNodesVerifier;
}(_nodes.default);
var termAgainstConstructorNodesVerifier = new TermAgainstConstructorNodesVerifier();
var _default = termAgainstConstructorNodesVerifier;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy92ZXJpZmllci9ub2Rlcy90ZXJtQWdhaW5zdENvbnN0cnVjdG9yLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgTm9kZXNWZXJpZmllciBmcm9tIFwiLi4vLi4vdmVyaWZpZXIvbm9kZXNcIjtcblxuaW1wb3J0IHsgZmlyc3QgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL2FycmF5XCI7XG5pbXBvcnQgeyBub2RlUXVlcnkgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5pbXBvcnQgeyB2ZXJpZnlOb2RlcyB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvdmVyaWZpZXJcIjtcblxuY29uc3QgdGVybU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9hcmd1bWVudC90ZXJtIVwiKSxcbiAgICAgIHR5cGVOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvYXJndW1lbnQvdHlwZSFcIik7XG5cbmNsYXNzIFRlcm1BZ2FpbnN0Q29uc3RydWN0b3JOb2Rlc1ZlcmlmaWVyIGV4dGVuZHMgTm9kZXNWZXJpZmllciB7XG4gIHZlcmlmeU5vblRlcm1pbmFsTm9kZShub25UZXJtaW5hbE5vZGVBLCBub25UZXJtaW5hbE5vZGVCLCBsb2NhbENvbnRleHQsIHZlcmlmeUFoZWFkKSB7XG4gICAgbGV0IG5vblRlcm1pbmFsTm9kZVZlcmlmaWVkO1xuXG4gICAgY29uc3Qgbm9kZVF1ZXJ5TWFwcyA9IFtcbiAgICAgIHtcbiAgICAgICAgbm9kZVF1ZXJ5QTogdGVybU5vZGVRdWVyeSxcbiAgICAgICAgbm9kZVF1ZXJ5QjogdHlwZU5vZGVRdWVyeSxcbiAgICAgICAgdmVyaWZ5Tm9kZXM6IChub2RlQSwgbm9kZUIsIGxvY2FsQ29udGV4dCwgdmVyaWZ5QWhlYWQpID0+IHtcbiAgICAgICAgICBsZXQgbm9uVGVybWluYWxOb2RlVmVyaWZpZWQ7XG5cbiAgICAgICAgICBjb25zdCB0ZXJtTm9kZUEgPSBub2RlQSwgIC8vL1xuICAgICAgICAgICAgICAgIHR5cGVOb2RlQiA9IG5vZGVCLCAgLy8vXG4gICAgICAgICAgICAgICAgdGVybVZlcmlmaWVkQWdhaW5zdFR5cGUgPVxuXG4gICAgICAgICAgICAgIHRoaXMudmVyaWZ5VGVybU5vZGVBZ2FpbnN0VHlwZU5vZGUodGVybU5vZGVBLCB0eXBlTm9kZUIsIGxvY2FsQ29udGV4dCwgdmVyaWZ5QWhlYWQpO1xuXG4gICAgICAgICAgbm9uVGVybWluYWxOb2RlVmVyaWZpZWQgPSB0ZXJtVmVyaWZpZWRBZ2FpbnN0VHlwZTsgIC8vL1xuXG4gICAgICAgICAgcmV0dXJuIG5vblRlcm1pbmFsTm9kZVZlcmlmaWVkO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgXTtcblxuICAgIGNvbnN0IG5vZGVzVmVyaWZpZWQgPSB2ZXJpZnlOb2Rlcyhub2RlUXVlcnlNYXBzLCBub25UZXJtaW5hbE5vZGVBLCBub25UZXJtaW5hbE5vZGVCLCBsb2NhbENvbnRleHQsIHZlcmlmeUFoZWFkKTtcblxuICAgIG5vblRlcm1pbmFsTm9kZVZlcmlmaWVkID0gbm9kZXNWZXJpZmllZCA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRydWUgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN1cGVyLnZlcmlmeU5vblRlcm1pbmFsTm9kZShub25UZXJtaW5hbE5vZGVBLCBub25UZXJtaW5hbE5vZGVCLCBsb2NhbENvbnRleHQsIHZlcmlmeUFoZWFkKTtcblxuICAgIHJldHVybiBub25UZXJtaW5hbE5vZGVWZXJpZmllZDtcbiAgfVxuXG4gIHZlcmlmeVRlcm1Ob2RlQWdhaW5zdFR5cGVOb2RlKHRlcm1Ob2RlQSwgdHlwZU5vZGVCLCBsb2NhbENvbnRleHQsIHZlcmlmeUFoZWFkKSB7XG4gICAgbGV0IHRlcm1WZXJpZmllZEFnYWluc3RUeXBlO1xuXG4gICAgY29uc3QgeyB2ZXJpZnlUZXJtIH0gPSB0ZXJtQWdhaW5zdENvbnN0cnVjdG9yTm9kZXNWZXJpZmllcixcbiAgICAgICAgICB0ZXJtcyA9IFtdLFxuICAgICAgICAgIHRlcm1Ob2RlID0gdGVybU5vZGVBLCAvLy9cbiAgICAgICAgICB0ZXJtVmVyaWZpZWQgPSB2ZXJpZnlUZXJtKHRlcm1Ob2RlLCB0ZXJtcywgbG9jYWxDb250ZXh0LCAoKSA9PiB7XG4gICAgICAgICAgICBsZXQgdmVyaWZpZWRBaGVhZCA9IGZhbHNlO1xuXG4gICAgICAgICAgICBjb25zdCBmaXJzdFRlcm0gPSBmaXJzdCh0ZXJtcyksXG4gICAgICAgICAgICAgICAgICB0ZXJtID0gZmlyc3RUZXJtLCAvLy9cbiAgICAgICAgICAgICAgICAgIHRlcm1UeXBlID0gdGVybS5nZXRUeXBlKCksXG4gICAgICAgICAgICAgICAgICB0eXBlTm9kZSA9IHR5cGVOb2RlQiwgLy8vXG4gICAgICAgICAgICAgICAgICB0eXBlID0gbG9jYWxDb250ZXh0LmZpbmRUeXBlQnlUeXBlTm9kZSh0eXBlTm9kZSksXG4gICAgICAgICAgICAgICAgICB0ZXJtVHlwZUVxdWFsVG9PclN1YlR5cGVPZlR5cGUgPSB0ZXJtVHlwZS5pc0VxdWFsVG9PclN1YlR5cGVPZih0eXBlKTtcblxuICAgICAgICAgICAgaWYgKHRlcm1UeXBlRXF1YWxUb09yU3ViVHlwZU9mVHlwZSkge1xuICAgICAgICAgICAgICB2ZXJpZmllZEFoZWFkID0gdmVyaWZ5QWhlYWQoKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIHZlcmlmaWVkQWhlYWQ7XG4gICAgICAgICAgfSk7XG5cbiAgICB0ZXJtVmVyaWZpZWRBZ2FpbnN0VHlwZSA9IHRlcm1WZXJpZmllZDsgLy8vXG5cbiAgICByZXR1cm4gdGVybVZlcmlmaWVkQWdhaW5zdFR5cGU7XG4gIH1cbn1cblxuY29uc3QgdGVybUFnYWluc3RDb25zdHJ1Y3Rvck5vZGVzVmVyaWZpZXIgPSBuZXcgVGVybUFnYWluc3RDb25zdHJ1Y3Rvck5vZGVzVmVyaWZpZXIoKTtcblxuZXhwb3J0IGRlZmF1bHQgdGVybUFnYWluc3RDb25zdHJ1Y3Rvck5vZGVzVmVyaWZpZXI7XG4iXSwibmFtZXMiOlsidGVybU5vZGVRdWVyeSIsIm5vZGVRdWVyeSIsInR5cGVOb2RlUXVlcnkiLCJUZXJtQWdhaW5zdENvbnN0cnVjdG9yTm9kZXNWZXJpZmllciIsInZlcmlmeU5vblRlcm1pbmFsTm9kZSIsIm5vblRlcm1pbmFsTm9kZUEiLCJub25UZXJtaW5hbE5vZGVCIiwibG9jYWxDb250ZXh0IiwidmVyaWZ5QWhlYWQiLCJub25UZXJtaW5hbE5vZGVWZXJpZmllZCIsIm5vZGVRdWVyeU1hcHMiLCJub2RlUXVlcnlBIiwibm9kZVF1ZXJ5QiIsInZlcmlmeU5vZGVzIiwibm9kZUEiLCJub2RlQiIsInRlcm1Ob2RlQSIsInR5cGVOb2RlQiIsInRlcm1WZXJpZmllZEFnYWluc3RUeXBlIiwidmVyaWZ5VGVybU5vZGVBZ2FpbnN0VHlwZU5vZGUiLCJub2Rlc1ZlcmlmaWVkIiwidmVyaWZ5VGVybSIsInRlcm1BZ2FpbnN0Q29uc3RydWN0b3JOb2Rlc1ZlcmlmaWVyIiwidGVybXMiLCJ0ZXJtTm9kZSIsInRlcm1WZXJpZmllZCIsInZlcmlmaWVkQWhlYWQiLCJmaXJzdFRlcm0iLCJmaXJzdCIsInRlcm0iLCJ0ZXJtVHlwZSIsImdldFR5cGUiLCJ0eXBlTm9kZSIsInR5cGUiLCJmaW5kVHlwZUJ5VHlwZU5vZGUiLCJ0ZXJtVHlwZUVxdWFsVG9PclN1YlR5cGVPZlR5cGUiLCJpc0VxdWFsVG9PclN1YlR5cGVPZiIsIk5vZGVzVmVyaWZpZXIiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQTJFQTs7O2VBQUE7Ozs0REF6RTBCO3FCQUVKO3FCQUNJO3dCQUNFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFNUIsSUFBTUEsZ0JBQWdCQyxJQUFBQSxnQkFBUyxFQUFDLG9CQUMxQkMsZ0JBQWdCRCxJQUFBQSxnQkFBUyxFQUFDO0FBRWhDLElBQUEsQUFBTUUsb0RBQUQsQUFBTDtjQUFNQTsrQkFBQUE7YUFBQUE7Z0NBQUFBOzs7a0JBQUFBOztZQUNKQyxLQUFBQTttQkFBQUEsU0FBQUEsc0JBQXNCQyxnQkFBZ0IsRUFBRUMsZ0JBQWdCLEVBQUVDLFlBQVksRUFBRUMsV0FBVzs7Z0JBQ2pGLElBQUlDO2dCQUVKLElBQU1DLGdCQUFnQjtvQkFDcEI7d0JBQ0VDLFlBQVlYO3dCQUNaWSxZQUFZVjt3QkFDWlcsYUFBYSxTQUFDQyxPQUFPQyxPQUFPUixjQUFjQzs0QkFDeEMsSUFBSUM7NEJBRUosSUFBTU8sWUFBWUYsT0FDWkcsWUFBWUYsT0FDWkcsMEJBRUYsTUFBS0MsNkJBQTZCLENBQUNILFdBQVdDLFdBQVdWLGNBQWNDOzRCQUUzRUMsMEJBQTBCUyx5QkFBMEIsR0FBRzs0QkFFdkQsT0FBT1Q7d0JBQ1Q7b0JBQ0Y7aUJBQ0Q7Z0JBRUQsSUFBTVcsZ0JBQWdCUCxJQUFBQSxxQkFBVyxFQUFDSCxlQUFlTCxrQkFBa0JDLGtCQUFrQkMsY0FBY0M7Z0JBRW5HQywwQkFBMEJXLGdCQUNFLE9BQ0UsdUJBNUI1QmpCLGdEQTRCa0NDLHlCQUFOLElBQUssYUFBdUJDLGtCQUFrQkMsa0JBQWtCQyxjQUFjQztnQkFFNUcsT0FBT0M7WUFDVDs7O1lBRUFVLEtBQUFBO21CQUFBQSxTQUFBQSw4QkFBOEJILFNBQVMsRUFBRUMsU0FBUyxFQUFFVixZQUFZLEVBQUVDLFdBQVc7Z0JBQzNFLElBQUlVO2dCQUVKLElBQU0sQUFBRUcsYUFBZUMsb0NBQWZELFlBQ0ZFLFFBQVEsRUFBRSxFQUNWQyxXQUFXUixXQUNYUyxlQUFlSixXQUFXRyxVQUFVRCxPQUFPaEIsY0FBYztvQkFDdkQsSUFBSW1CLGdCQUFnQjtvQkFFcEIsSUFBTUMsWUFBWUMsSUFBQUEsWUFBSyxFQUFDTCxRQUNsQk0sT0FBT0YsV0FDUEcsV0FBV0QsS0FBS0UsT0FBTyxJQUN2QkMsV0FBV2YsV0FDWGdCLE9BQU8xQixhQUFhMkIsa0JBQWtCLENBQUNGLFdBQ3ZDRyxpQ0FBaUNMLFNBQVNNLG9CQUFvQixDQUFDSDtvQkFFckUsSUFBSUUsZ0NBQWdDO3dCQUNsQ1QsZ0JBQWdCbEI7b0JBQ2xCO29CQUVBLE9BQU9rQjtnQkFDVDtnQkFFTlIsMEJBQTBCTyxjQUFjLEdBQUc7Z0JBRTNDLE9BQU9QO1lBQ1Q7OztXQTNESWY7RUFBNENrQyxjQUFhO0FBOEQvRCxJQUFNZixzQ0FBc0MsSUFBSW5CO0lBRWhELFdBQWVtQiJ9