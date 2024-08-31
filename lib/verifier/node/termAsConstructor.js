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
var _node = /*#__PURE__*/ _interop_require_default(require("../../verifier/node"));
var _query = require("../../utilities/query");
var _verifier = require("../../utilities/verifier");
var _type = require("../../verify/type");
var _term = require("../../verify/term");
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
var termNodeQuery = (0, _query.nodeQuery)("/term!"), typeNodeQuery = (0, _query.nodeQuery)("/type!"), nonTerminalNodeQuery = (0, _query.nodeQuery)("/*");
var TermAsConstructorNodeVerifier = /*#__PURE__*/ function(NodeVerifier) {
    _inherits(TermAsConstructorNodeVerifier, NodeVerifier);
    var _super = _create_super(TermAsConstructorNodeVerifier);
    function TermAsConstructorNodeVerifier() {
        _class_call_check(this, TermAsConstructorNodeVerifier);
        return _super.apply(this, arguments);
    }
    _create_class(TermAsConstructorNodeVerifier, [
        {
            key: "verifyNonTerminalNode",
            value: function verifyNonTerminalNode(nonTerminalNode, localContext, verifyAhead) {
                var _this = this;
                var nonTerminalNodeVerified;
                var nodeQueryMaps = [
                    {
                        nodeQuery: termNodeQuery,
                        verifyNode: function(node, localMetaContext, verifyAhead) {
                            var nonTerminalNodeVerified;
                            var termNode = node, termNodeVerified = _this.verifyTermNode(termNode, localMetaContext, verifyAhead);
                            nonTerminalNodeVerified = termNodeVerified; ///
                            return nonTerminalNodeVerified;
                        }
                    },
                    {
                        nodeQuery: typeNodeQuery,
                        verifyNode: function(node, localMetaContext, verifyAhead) {
                            var nonTerminalNodeVerified;
                            var typeNode = node, typeNodeVerified = _this.verifyTypeNode(typeNode, localMetaContext, verifyAhead);
                            nonTerminalNodeVerified = typeNodeVerified; ///
                            return nonTerminalNodeVerified;
                        }
                    },
                    {
                        nodeQuery: nonTerminalNodeQuery,
                        verifyNode: function(node, localMetaContext, verifyAhead) {
                            var nonTerminalNodeVerified;
                            var _$nonTerminalNode = node; ///
                            nonTerminalNodeVerified = _get(_get_prototype_of(TermAsConstructorNodeVerifier.prototype), "verifyNonTerminalNode", _this).call(_this, _$nonTerminalNode, localMetaContext, verifyAhead);
                            return nonTerminalNodeVerified;
                        }
                    }
                ];
                var nodeVerified = (0, _verifier.verifyNode)(nodeQueryMaps, nonTerminalNode, localContext, verifyAhead);
                nonTerminalNodeVerified = nodeVerified; ///
                return nonTerminalNodeVerified;
            }
        },
        {
            key: "verifyTermNode",
            value: function verifyTermNode(termNode, localContext, verifyAhead) {
                var standaloneTermVerified = (0, _term.verifyStandaloneTerm)(termNode, localContext, verifyAhead), termNodeVerified = standaloneTermVerified; ///
                return termNodeVerified;
            }
        },
        {
            key: "verifyTypeNode",
            value: function verifyTypeNode(typeNode, localContext, verifyAhead) {
                var standaloneTypeVerified = (0, _type.verifyStandaloneType)(typeNode, localContext, verifyAhead), typeNodeVerified = standaloneTypeVerified; ///
                return typeNodeVerified;
            }
        }
    ]);
    return TermAsConstructorNodeVerifier;
}(_node.default);
var termAsConstructorNodeVerifier = new TermAsConstructorNodeVerifier();
var _default = termAsConstructorNodeVerifier;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy92ZXJpZmllci9ub2RlL3Rlcm1Bc0NvbnN0cnVjdG9yLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgTm9kZVZlcmlmaWVyIGZyb20gXCIuLi8uLi92ZXJpZmllci9ub2RlXCI7XG5cbmltcG9ydCB7IG5vZGVRdWVyeSB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvcXVlcnlcIjtcbmltcG9ydCB7IHZlcmlmeU5vZGUgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL3ZlcmlmaWVyXCI7XG5pbXBvcnQgeyB2ZXJpZnlTdGFuZGFsb25lVHlwZSB9IGZyb20gXCIuLi8uLi92ZXJpZnkvdHlwZVwiO1xuaW1wb3J0IHsgdmVyaWZ5U3RhbmRhbG9uZVRlcm0gfSBmcm9tIFwiLi4vLi4vdmVyaWZ5L3Rlcm1cIjtcblxuY29uc3QgdGVybU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi90ZXJtIVwiKSxcbiAgICAgIHR5cGVOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvdHlwZSFcIiksXG4gICAgICBub25UZXJtaW5hbE5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi8qXCIpO1xuXG5jbGFzcyBUZXJtQXNDb25zdHJ1Y3Rvck5vZGVWZXJpZmllciBleHRlbmRzIE5vZGVWZXJpZmllciB7XG4gIHZlcmlmeU5vblRlcm1pbmFsTm9kZShub25UZXJtaW5hbE5vZGUsIGxvY2FsQ29udGV4dCwgdmVyaWZ5QWhlYWQpIHtcbiAgICBsZXQgbm9uVGVybWluYWxOb2RlVmVyaWZpZWQ7XG5cbiAgICBjb25zdCBub2RlUXVlcnlNYXBzID0gW1xuICAgICAge1xuICAgICAgICBub2RlUXVlcnk6IHRlcm1Ob2RlUXVlcnksXG4gICAgICAgIHZlcmlmeU5vZGU6IChub2RlLCBsb2NhbE1ldGFDb250ZXh0LCB2ZXJpZnlBaGVhZCkgPT4ge1xuICAgICAgICAgIGxldCBub25UZXJtaW5hbE5vZGVWZXJpZmllZDtcblxuICAgICAgICAgIGNvbnN0IHRlcm1Ob2RlID0gbm9kZSwgLy8vXG4gICAgICAgICAgICB0ZXJtTm9kZVZlcmlmaWVkID0gdGhpcy52ZXJpZnlUZXJtTm9kZSh0ZXJtTm9kZSwgbG9jYWxNZXRhQ29udGV4dCwgdmVyaWZ5QWhlYWQpO1xuXG4gICAgICAgICAgbm9uVGVybWluYWxOb2RlVmVyaWZpZWQgPSB0ZXJtTm9kZVZlcmlmaWVkOyAvLy9cblxuICAgICAgICAgIHJldHVybiBub25UZXJtaW5hbE5vZGVWZXJpZmllZDtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbm9kZVF1ZXJ5OiB0eXBlTm9kZVF1ZXJ5LFxuICAgICAgICB2ZXJpZnlOb2RlOiAobm9kZSwgbG9jYWxNZXRhQ29udGV4dCwgdmVyaWZ5QWhlYWQpID0+IHtcbiAgICAgICAgICBsZXQgbm9uVGVybWluYWxOb2RlVmVyaWZpZWQ7XG5cbiAgICAgICAgICBjb25zdCB0eXBlTm9kZSA9IG5vZGUsIC8vL1xuICAgICAgICAgICAgdHlwZU5vZGVWZXJpZmllZCA9IHRoaXMudmVyaWZ5VHlwZU5vZGUodHlwZU5vZGUsIGxvY2FsTWV0YUNvbnRleHQsIHZlcmlmeUFoZWFkKTtcblxuICAgICAgICAgIG5vblRlcm1pbmFsTm9kZVZlcmlmaWVkID0gdHlwZU5vZGVWZXJpZmllZDsgLy8vXG5cbiAgICAgICAgICByZXR1cm4gbm9uVGVybWluYWxOb2RlVmVyaWZpZWQ7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIG5vZGVRdWVyeTogbm9uVGVybWluYWxOb2RlUXVlcnksXG4gICAgICAgIHZlcmlmeU5vZGU6IChub2RlLCBsb2NhbE1ldGFDb250ZXh0LCB2ZXJpZnlBaGVhZCkgPT4ge1xuICAgICAgICAgIGxldCBub25UZXJtaW5hbE5vZGVWZXJpZmllZDtcblxuICAgICAgICAgIGNvbnN0IG5vblRlcm1pbmFsTm9kZSA9IG5vZGU7IC8vL1xuXG4gICAgICAgICAgbm9uVGVybWluYWxOb2RlVmVyaWZpZWQgPVxuXG4gICAgICAgICAgICBzdXBlci52ZXJpZnlOb25UZXJtaW5hbE5vZGUobm9uVGVybWluYWxOb2RlLCBsb2NhbE1ldGFDb250ZXh0LCB2ZXJpZnlBaGVhZCk7XG5cbiAgICAgICAgICByZXR1cm4gbm9uVGVybWluYWxOb2RlVmVyaWZpZWQ7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICBdO1xuXG4gICAgY29uc3Qgbm9kZVZlcmlmaWVkID0gdmVyaWZ5Tm9kZShub2RlUXVlcnlNYXBzLCBub25UZXJtaW5hbE5vZGUsIGxvY2FsQ29udGV4dCwgdmVyaWZ5QWhlYWQpO1xuXG4gICAgbm9uVGVybWluYWxOb2RlVmVyaWZpZWQgPSBub2RlVmVyaWZpZWQ7IC8vL1xuXG4gICAgcmV0dXJuIG5vblRlcm1pbmFsTm9kZVZlcmlmaWVkO1xuICB9XG5cbiAgdmVyaWZ5VGVybU5vZGUodGVybU5vZGUsIGxvY2FsQ29udGV4dCwgdmVyaWZ5QWhlYWQpIHtcbiAgICBjb25zdCBzdGFuZGFsb25lVGVybVZlcmlmaWVkID0gdmVyaWZ5U3RhbmRhbG9uZVRlcm0odGVybU5vZGUsIGxvY2FsQ29udGV4dCwgdmVyaWZ5QWhlYWQpLFxuICAgICAgICAgIHRlcm1Ob2RlVmVyaWZpZWQgPSBzdGFuZGFsb25lVGVybVZlcmlmaWVkOyAgLy8vXG5cbiAgICByZXR1cm4gdGVybU5vZGVWZXJpZmllZDtcbiAgfVxuXG4gIHZlcmlmeVR5cGVOb2RlKHR5cGVOb2RlLCBsb2NhbENvbnRleHQsIHZlcmlmeUFoZWFkKSB7XG4gICAgY29uc3Qgc3RhbmRhbG9uZVR5cGVWZXJpZmllZCA9IHZlcmlmeVN0YW5kYWxvbmVUeXBlKHR5cGVOb2RlLCBsb2NhbENvbnRleHQsIHZlcmlmeUFoZWFkKSxcbiAgICAgICAgICB0eXBlTm9kZVZlcmlmaWVkID0gc3RhbmRhbG9uZVR5cGVWZXJpZmllZDsgIC8vL1xuXG4gICAgcmV0dXJuIHR5cGVOb2RlVmVyaWZpZWQ7XG4gIH1cbn1cblxuY29uc3QgdGVybUFzQ29uc3RydWN0b3JOb2RlVmVyaWZpZXIgPSBuZXcgVGVybUFzQ29uc3RydWN0b3JOb2RlVmVyaWZpZXIoKTtcblxuZXhwb3J0IGRlZmF1bHQgdGVybUFzQ29uc3RydWN0b3JOb2RlVmVyaWZpZXI7XG4iXSwibmFtZXMiOlsidGVybU5vZGVRdWVyeSIsIm5vZGVRdWVyeSIsInR5cGVOb2RlUXVlcnkiLCJub25UZXJtaW5hbE5vZGVRdWVyeSIsIlRlcm1Bc0NvbnN0cnVjdG9yTm9kZVZlcmlmaWVyIiwidmVyaWZ5Tm9uVGVybWluYWxOb2RlIiwibm9uVGVybWluYWxOb2RlIiwibG9jYWxDb250ZXh0IiwidmVyaWZ5QWhlYWQiLCJub25UZXJtaW5hbE5vZGVWZXJpZmllZCIsIm5vZGVRdWVyeU1hcHMiLCJ2ZXJpZnlOb2RlIiwibm9kZSIsImxvY2FsTWV0YUNvbnRleHQiLCJ0ZXJtTm9kZSIsInRlcm1Ob2RlVmVyaWZpZWQiLCJ2ZXJpZnlUZXJtTm9kZSIsInR5cGVOb2RlIiwidHlwZU5vZGVWZXJpZmllZCIsInZlcmlmeVR5cGVOb2RlIiwibm9kZVZlcmlmaWVkIiwic3RhbmRhbG9uZVRlcm1WZXJpZmllZCIsInZlcmlmeVN0YW5kYWxvbmVUZXJtIiwic3RhbmRhbG9uZVR5cGVWZXJpZmllZCIsInZlcmlmeVN0YW5kYWxvbmVUeXBlIiwiTm9kZVZlcmlmaWVyIiwidGVybUFzQ29uc3RydWN0b3JOb2RlVmVyaWZpZXIiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQW9GQTs7O2VBQUE7OzsyREFsRnlCO3FCQUVDO3dCQUNDO29CQUNVO29CQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFckMsSUFBTUEsZ0JBQWdCQyxJQUFBQSxnQkFBUyxFQUFDLFdBQzFCQyxnQkFBZ0JELElBQUFBLGdCQUFTLEVBQUMsV0FDMUJFLHVCQUF1QkYsSUFBQUEsZ0JBQVMsRUFBQztBQUV2QyxJQUFBLEFBQU1HLDhDQUFELEFBQUw7Y0FBTUE7K0JBQUFBO2FBQUFBO2dDQUFBQTs7O2tCQUFBQTs7WUFDSkMsS0FBQUE7bUJBQUFBLFNBQUFBLHNCQUFzQkMsZUFBZSxFQUFFQyxZQUFZLEVBQUVDLFdBQVc7O2dCQUM5RCxJQUFJQztnQkFFSixJQUFNQyxnQkFBZ0I7b0JBQ3BCO3dCQUNFVCxXQUFXRDt3QkFDWFcsWUFBWSxTQUFDQyxNQUFNQyxrQkFBa0JMOzRCQUNuQyxJQUFJQzs0QkFFSixJQUFNSyxXQUFXRixNQUNmRyxtQkFBbUIsTUFBS0MsY0FBYyxDQUFDRixVQUFVRCxrQkFBa0JMOzRCQUVyRUMsMEJBQTBCTSxrQkFBa0IsR0FBRzs0QkFFL0MsT0FBT047d0JBQ1Q7b0JBQ0Y7b0JBQ0E7d0JBQ0VSLFdBQVdDO3dCQUNYUyxZQUFZLFNBQUNDLE1BQU1DLGtCQUFrQkw7NEJBQ25DLElBQUlDOzRCQUVKLElBQU1RLFdBQVdMLE1BQ2ZNLG1CQUFtQixNQUFLQyxjQUFjLENBQUNGLFVBQVVKLGtCQUFrQkw7NEJBRXJFQywwQkFBMEJTLGtCQUFrQixHQUFHOzRCQUUvQyxPQUFPVDt3QkFDVDtvQkFDRjtvQkFDQTt3QkFDRVIsV0FBV0U7d0JBQ1hRLFlBQVksU0FBQ0MsTUFBTUMsa0JBQWtCTDs0QkFDbkMsSUFBSUM7NEJBRUosSUFBTUgsb0JBQWtCTSxNQUFNLEdBQUc7NEJBRWpDSCwwQkFFRSx1QkF4Q05MLDBDQXdDWUMsNENBQXNCQyxtQkFBaUJPLGtCQUFrQkw7NEJBRWpFLE9BQU9DO3dCQUNUO29CQUNGO2lCQUNEO2dCQUVELElBQU1XLGVBQWVULElBQUFBLG9CQUFVLEVBQUNELGVBQWVKLGlCQUFpQkMsY0FBY0M7Z0JBRTlFQywwQkFBMEJXLGNBQWMsR0FBRztnQkFFM0MsT0FBT1g7WUFDVDs7O1lBRUFPLEtBQUFBO21CQUFBQSxTQUFBQSxlQUFlRixRQUFRLEVBQUVQLFlBQVksRUFBRUMsV0FBVztnQkFDaEQsSUFBTWEseUJBQXlCQyxJQUFBQSwwQkFBb0IsRUFBQ1IsVUFBVVAsY0FBY0MsY0FDdEVPLG1CQUFtQk0sd0JBQXlCLEdBQUc7Z0JBRXJELE9BQU9OO1lBQ1Q7OztZQUVBSSxLQUFBQTttQkFBQUEsU0FBQUEsZUFBZUYsUUFBUSxFQUFFVixZQUFZLEVBQUVDLFdBQVc7Z0JBQ2hELElBQU1lLHlCQUF5QkMsSUFBQUEsMEJBQW9CLEVBQUNQLFVBQVVWLGNBQWNDLGNBQ3RFVSxtQkFBbUJLLHdCQUF5QixHQUFHO2dCQUVyRCxPQUFPTDtZQUNUOzs7V0FsRUlkO0VBQXNDcUIsYUFBWTtBQXFFeEQsSUFBTUMsZ0NBQWdDLElBQUl0QjtJQUUxQyxXQUFlc0IifQ==