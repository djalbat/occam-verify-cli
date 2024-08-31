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
var termNodeQuery = (0, _query.nodeQuery)("/argument/term!"), typeNodeQuery = (0, _query.nodeQuery)("/argument/type!"), nonTerminalNodeQuery = (0, _query.nodeQuery)("/*");
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
                    },
                    {
                        nodeQueryA: nonTerminalNodeQuery,
                        nodeQueryB: nonTerminalNodeQuery,
                        verifyNodes: function(nodeA, nodeB, substitutions, localMetaContextA, localMetaContextB, verifyAhead) {
                            var nonTerminalNodeVerified;
                            var _$nonTerminalNodeA = nodeA, _$nonTerminalNodeB = nodeB; ///
                            nonTerminalNodeVerified = _get(_get_prototype_of(TermAgainstConstructorNodesVerifier.prototype), "verifyNonTerminalNode", _this).call(_this, _$nonTerminalNodeA, _$nonTerminalNodeB, substitutions, localMetaContextA, localMetaContextB, verifyAhead);
                            return nonTerminalNodeVerified;
                        }
                    }
                ];
                var nodesVerified = (0, _verifier.verifyNodes)(nodeQueryMaps, nonTerminalNodeA, nonTerminalNodeB, localContext, verifyAhead);
                nonTerminalNodeVerified = nodesVerified; ///
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy92ZXJpZmllci9ub2Rlcy90ZXJtQWdhaW5zdENvbnN0cnVjdG9yLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgTm9kZXNWZXJpZmllciBmcm9tIFwiLi4vLi4vdmVyaWZpZXIvbm9kZXNcIjtcbmltcG9ydCB2ZXJpZnlUZXJtQWdhaW5zdFR5cGUgZnJvbSBcIi4uLy4uL3ZlcmlmeS90ZXJtQWdhaW5zdFR5cGVcIjtcblxuaW1wb3J0IHsgbm9kZVF1ZXJ5IH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9xdWVyeVwiO1xuaW1wb3J0IHsgdmVyaWZ5Tm9kZXMgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL3ZlcmlmaWVyXCI7XG5cbmNvbnN0IHRlcm1Ob2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvYXJndW1lbnQvdGVybSFcIiksXG4gICAgICB0eXBlTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL2FyZ3VtZW50L3R5cGUhXCIpLFxuICAgICAgbm9uVGVybWluYWxOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvKlwiKTtcblxuY2xhc3MgVGVybUFnYWluc3RDb25zdHJ1Y3Rvck5vZGVzVmVyaWZpZXIgZXh0ZW5kcyBOb2Rlc1ZlcmlmaWVyIHtcbiAgdmVyaWZ5Tm9uVGVybWluYWxOb2RlKG5vblRlcm1pbmFsTm9kZUEsIG5vblRlcm1pbmFsTm9kZUIsIGxvY2FsQ29udGV4dCwgdmVyaWZ5QWhlYWQpIHtcbiAgICBsZXQgbm9uVGVybWluYWxOb2RlVmVyaWZpZWQ7XG5cbiAgICBjb25zdCBub2RlUXVlcnlNYXBzID0gW1xuICAgICAge1xuICAgICAgICBub2RlUXVlcnlBOiB0ZXJtTm9kZVF1ZXJ5LFxuICAgICAgICBub2RlUXVlcnlCOiB0eXBlTm9kZVF1ZXJ5LFxuICAgICAgICB2ZXJpZnlOb2RlczogKG5vZGVBLCBub2RlQiwgbG9jYWxDb250ZXh0LCB2ZXJpZnlBaGVhZCkgPT4ge1xuICAgICAgICAgIGxldCBub25UZXJtaW5hbE5vZGVWZXJpZmllZDtcblxuICAgICAgICAgIGNvbnN0IHRlcm1Ob2RlQSA9IG5vZGVBLCAgLy8vXG4gICAgICAgICAgICAgICAgdHlwZU5vZGVCID0gbm9kZUIsICAvLy9cbiAgICAgICAgICAgICAgICB0ZXJtTm9kZVZlcmlmaWVkQWdhaW5zdFR5cGVOb2RlID1cblxuICAgICAgICAgICAgICAgICAgdGhpcy52ZXJpZnlUZXJtTm9kZUFnYWluc3RUeXBlTm9kZSh0ZXJtTm9kZUEsIHR5cGVOb2RlQiwgbG9jYWxDb250ZXh0LCB2ZXJpZnlBaGVhZCk7XG5cbiAgICAgICAgICBub25UZXJtaW5hbE5vZGVWZXJpZmllZCA9IHRlcm1Ob2RlVmVyaWZpZWRBZ2FpbnN0VHlwZU5vZGU7ICAvLy9cblxuICAgICAgICAgIHJldHVybiBub25UZXJtaW5hbE5vZGVWZXJpZmllZDtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbm9kZVF1ZXJ5QTogbm9uVGVybWluYWxOb2RlUXVlcnksXG4gICAgICAgIG5vZGVRdWVyeUI6IG5vblRlcm1pbmFsTm9kZVF1ZXJ5LFxuICAgICAgICB2ZXJpZnlOb2RlczogKG5vZGVBLCBub2RlQiwgc3Vic3RpdHV0aW9ucywgbG9jYWxNZXRhQ29udGV4dEEsIGxvY2FsTWV0YUNvbnRleHRCLCB2ZXJpZnlBaGVhZCkgPT4ge1xuICAgICAgICAgIGxldCBub25UZXJtaW5hbE5vZGVWZXJpZmllZDtcblxuICAgICAgICAgIGNvbnN0IG5vblRlcm1pbmFsTm9kZUEgPSBub2RlQSwgLy8vXG4gICAgICAgICAgICAgICAgbm9uVGVybWluYWxOb2RlQiA9IG5vZGVCOyAvLy9cblxuICAgICAgICAgIG5vblRlcm1pbmFsTm9kZVZlcmlmaWVkID1cblxuICAgICAgICAgICAgc3VwZXIudmVyaWZ5Tm9uVGVybWluYWxOb2RlKG5vblRlcm1pbmFsTm9kZUEsIG5vblRlcm1pbmFsTm9kZUIsIHN1YnN0aXR1dGlvbnMsIGxvY2FsTWV0YUNvbnRleHRBLCBsb2NhbE1ldGFDb250ZXh0QiwgdmVyaWZ5QWhlYWQpO1xuXG4gICAgICAgICAgcmV0dXJuIG5vblRlcm1pbmFsTm9kZVZlcmlmaWVkO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgXTtcblxuICAgIGNvbnN0IG5vZGVzVmVyaWZpZWQgPSB2ZXJpZnlOb2Rlcyhub2RlUXVlcnlNYXBzLCBub25UZXJtaW5hbE5vZGVBLCBub25UZXJtaW5hbE5vZGVCLCBsb2NhbENvbnRleHQsIHZlcmlmeUFoZWFkKTtcblxuICAgIG5vblRlcm1pbmFsTm9kZVZlcmlmaWVkID0gbm9kZXNWZXJpZmllZDsgIC8vL1xuXG4gICAgcmV0dXJuIG5vblRlcm1pbmFsTm9kZVZlcmlmaWVkO1xuICB9XG5cbiAgdmVyaWZ5VGVybU5vZGVBZ2FpbnN0VHlwZU5vZGUodGVybU5vZGVBLCB0eXBlTm9kZUIsIGxvY2FsQ29udGV4dCwgdmVyaWZ5QWhlYWQpIHtcbiAgICBsZXQgdGVybU5vZGVWZXJpZmllZEFnYWluc3RUeXBlTm9kZTtcblxuICAgIGNvbnN0IHsgdmVyaWZ5VGVybSB9ID0gdGVybUFnYWluc3RDb25zdHJ1Y3Rvck5vZGVzVmVyaWZpZXIsXG4gICAgICAgICAgdGVybU5vZGUgPSB0ZXJtTm9kZUEsIC8vL1xuICAgICAgICAgIHR5cGVOb2RlID0gdHlwZU5vZGVCLCAvLy9cbiAgICAgICAgICB0eXBlVmVyaWZpZWRBZ2FpbnN0VGVybSA9IHZlcmlmeVRlcm1BZ2FpbnN0VHlwZSh0ZXJtTm9kZSwgdHlwZU5vZGUsIGxvY2FsQ29udGV4dCwgdmVyaWZ5QWhlYWQsIHZlcmlmeVRlcm0pO1xuXG4gICAgdGVybU5vZGVWZXJpZmllZEFnYWluc3RUeXBlTm9kZSA9IHR5cGVWZXJpZmllZEFnYWluc3RUZXJtOyAvLy9cblxuICAgIHJldHVybiB0ZXJtTm9kZVZlcmlmaWVkQWdhaW5zdFR5cGVOb2RlO1xuICB9XG59XG5cbmNvbnN0IHRlcm1BZ2FpbnN0Q29uc3RydWN0b3JOb2Rlc1ZlcmlmaWVyID0gbmV3IFRlcm1BZ2FpbnN0Q29uc3RydWN0b3JOb2Rlc1ZlcmlmaWVyKCk7XG5cbmV4cG9ydCBkZWZhdWx0IHRlcm1BZ2FpbnN0Q29uc3RydWN0b3JOb2Rlc1ZlcmlmaWVyO1xuIl0sIm5hbWVzIjpbInRlcm1Ob2RlUXVlcnkiLCJub2RlUXVlcnkiLCJ0eXBlTm9kZVF1ZXJ5Iiwibm9uVGVybWluYWxOb2RlUXVlcnkiLCJUZXJtQWdhaW5zdENvbnN0cnVjdG9yTm9kZXNWZXJpZmllciIsInZlcmlmeU5vblRlcm1pbmFsTm9kZSIsIm5vblRlcm1pbmFsTm9kZUEiLCJub25UZXJtaW5hbE5vZGVCIiwibG9jYWxDb250ZXh0IiwidmVyaWZ5QWhlYWQiLCJub25UZXJtaW5hbE5vZGVWZXJpZmllZCIsIm5vZGVRdWVyeU1hcHMiLCJub2RlUXVlcnlBIiwibm9kZVF1ZXJ5QiIsInZlcmlmeU5vZGVzIiwibm9kZUEiLCJub2RlQiIsInRlcm1Ob2RlQSIsInR5cGVOb2RlQiIsInRlcm1Ob2RlVmVyaWZpZWRBZ2FpbnN0VHlwZU5vZGUiLCJ2ZXJpZnlUZXJtTm9kZUFnYWluc3RUeXBlTm9kZSIsInN1YnN0aXR1dGlvbnMiLCJsb2NhbE1ldGFDb250ZXh0QSIsImxvY2FsTWV0YUNvbnRleHRCIiwibm9kZXNWZXJpZmllZCIsInZlcmlmeVRlcm0iLCJ0ZXJtQWdhaW5zdENvbnN0cnVjdG9yTm9kZXNWZXJpZmllciIsInRlcm1Ob2RlIiwidHlwZU5vZGUiLCJ0eXBlVmVyaWZpZWRBZ2FpbnN0VGVybSIsInZlcmlmeVRlcm1BZ2FpbnN0VHlwZSIsIk5vZGVzVmVyaWZpZXIiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQTJFQTs7O2VBQUE7Ozs0REF6RTBCO3NFQUNRO3FCQUVSO3dCQUNFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFNUIsSUFBTUEsZ0JBQWdCQyxJQUFBQSxnQkFBUyxFQUFDLG9CQUMxQkMsZ0JBQWdCRCxJQUFBQSxnQkFBUyxFQUFDLG9CQUMxQkUsdUJBQXVCRixJQUFBQSxnQkFBUyxFQUFDO0FBRXZDLElBQUEsQUFBTUcsb0RBQUQsQUFBTDtjQUFNQTsrQkFBQUE7YUFBQUE7Z0NBQUFBOzs7a0JBQUFBOztZQUNKQyxLQUFBQTttQkFBQUEsU0FBQUEsc0JBQXNCQyxnQkFBZ0IsRUFBRUMsZ0JBQWdCLEVBQUVDLFlBQVksRUFBRUMsV0FBVzs7Z0JBQ2pGLElBQUlDO2dCQUVKLElBQU1DLGdCQUFnQjtvQkFDcEI7d0JBQ0VDLFlBQVlaO3dCQUNaYSxZQUFZWDt3QkFDWlksYUFBYSxTQUFDQyxPQUFPQyxPQUFPUixjQUFjQzs0QkFDeEMsSUFBSUM7NEJBRUosSUFBTU8sWUFBWUYsT0FDWkcsWUFBWUYsT0FDWkcsa0NBRUUsTUFBS0MsNkJBQTZCLENBQUNILFdBQVdDLFdBQVdWLGNBQWNDOzRCQUUvRUMsMEJBQTBCUyxpQ0FBa0MsR0FBRzs0QkFFL0QsT0FBT1Q7d0JBQ1Q7b0JBQ0Y7b0JBQ0E7d0JBQ0VFLFlBQVlUO3dCQUNaVSxZQUFZVjt3QkFDWlcsYUFBYSxTQUFDQyxPQUFPQyxPQUFPSyxlQUFlQyxtQkFBbUJDLG1CQUFtQmQ7NEJBQy9FLElBQUlDOzRCQUVKLElBQU1KLHFCQUFtQlMsT0FDbkJSLHFCQUFtQlMsT0FBTyxHQUFHOzRCQUVuQ04sMEJBRUUsdUJBakNOTixnREFpQ1lDLDRDQUFzQkMsb0JBQWtCQyxvQkFBa0JjLGVBQWVDLG1CQUFtQkMsbUJBQW1CZDs0QkFFdkgsT0FBT0M7d0JBQ1Q7b0JBQ0Y7aUJBQ0Q7Z0JBRUQsSUFBTWMsZ0JBQWdCVixJQUFBQSxxQkFBVyxFQUFDSCxlQUFlTCxrQkFBa0JDLGtCQUFrQkMsY0FBY0M7Z0JBRW5HQywwQkFBMEJjLGVBQWdCLEdBQUc7Z0JBRTdDLE9BQU9kO1lBQ1Q7OztZQUVBVSxLQUFBQTttQkFBQUEsU0FBQUEsOEJBQThCSCxTQUFTLEVBQUVDLFNBQVMsRUFBRVYsWUFBWSxFQUFFQyxXQUFXO2dCQUMzRSxJQUFJVTtnQkFFSixJQUFNLEFBQUVNLGFBQWVDLG9DQUFmRCxZQUNGRSxXQUFXVixXQUNYVyxXQUFXVixXQUNYVywwQkFBMEJDLElBQUFBLHdCQUFxQixFQUFDSCxVQUFVQyxVQUFVcEIsY0FBY0MsYUFBYWdCO2dCQUVyR04sa0NBQWtDVSx5QkFBeUIsR0FBRztnQkFFOUQsT0FBT1Y7WUFDVDs7O1dBMURJZjtFQUE0QzJCLGNBQWE7QUE2RC9ELElBQU1MLHNDQUFzQyxJQUFJdEI7SUFFaEQsV0FBZXNCIn0=