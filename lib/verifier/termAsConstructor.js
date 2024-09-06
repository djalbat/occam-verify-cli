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
var _verifier = /*#__PURE__*/ _interop_require_wildcard(require("../verifier"));
var _query = require("../utilities/query");
var _type = require("../verify/type");
var _term = require("../verify/term");
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
function _getRequireWildcardCache(nodeInterop) {
    if (typeof WeakMap !== "function") return null;
    var cacheBabelInterop = new WeakMap();
    var cacheNodeInterop = new WeakMap();
    return (_getRequireWildcardCache = function(nodeInterop) {
        return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
    })(nodeInterop);
}
function _interop_require_wildcard(obj, nodeInterop) {
    if (!nodeInterop && obj && obj.__esModule) {
        return obj;
    }
    if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
        return {
            default: obj
        };
    }
    var cache = _getRequireWildcardCache(nodeInterop);
    if (cache && cache.has(obj)) {
        return cache.get(obj);
    }
    var newObj = {
        __proto__: null
    };
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for(var key in obj){
        if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
            var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
            if (desc && (desc.get || desc.set)) {
                Object.defineProperty(newObj, key, desc);
            } else {
                newObj[key] = obj[key];
            }
        }
    }
    newObj.default = obj;
    if (cache) {
        cache.set(obj, newObj);
    }
    return newObj;
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
var termNodeQuery = (0, _query.nodeQuery)("/term!"), typeNodeQuery = (0, _query.nodeQuery)("/type!"), nonTerminalNodeQuery = (0, _query.nodeQuery)("/*");
var TermAsConstructorVerifier = /*#__PURE__*/ function(Verifier) {
    _inherits(TermAsConstructorVerifier, Verifier);
    function TermAsConstructorVerifier() {
        _class_call_check(this, TermAsConstructorVerifier);
        return _call_super(this, TermAsConstructorVerifier, arguments);
    }
    _create_class(TermAsConstructorVerifier, [
        {
            key: "verifyNonTerminalNode",
            value: function verifyNonTerminalNode(nonTerminalNode, localContext, verifyAhead) {
                var _this = this;
                var nonTerminalNodeVerified;
                var nodeQueryMaps = [
                    {
                        nodeQuery: termNodeQuery,
                        verify: function(node, localContext, verifyAhead) {
                            var nonTerminalNodeVerified;
                            var termNode = node, termVerified = _this.verifyNode(termNode, localContext, verifyAhead);
                            nonTerminalNodeVerified = termVerified; ///
                            return nonTerminalNodeVerified;
                        }
                    },
                    {
                        nodeQuery: typeNodeQuery,
                        verify: function(node, localContext, verifyAhead) {
                            var nonTerminalNodeVerified;
                            var typeNode = node, typeVerified = _this.verifyType(typeNode, localContext, verifyAhead);
                            nonTerminalNodeVerified = typeVerified; ///
                            return nonTerminalNodeVerified;
                        }
                    },
                    {
                        nodeQuery: nonTerminalNodeQuery,
                        verify: function(node, localContext, verifyAhead) {
                            var verified = _get(_get_prototype_of(TermAsConstructorVerifier.prototype), "verify", _this).call(_this, node, localContext, verifyAhead);
                            return verified;
                        }
                    }
                ];
                var verified = (0, _verifier.verify)(nodeQueryMaps, nonTerminalNode, localContext, verifyAhead);
                nonTerminalNodeVerified = verified; ///
                return nonTerminalNodeVerified;
            }
        },
        {
            key: "verifyNode",
            value: function verifyNode(termNode, localContext, verifyAhead) {
                var standaloneTermVerified = (0, _term.verifyStandaloneTerm)(termNode, localContext, verifyAhead), termVerified = standaloneTermVerified; ///
                return termVerified;
            }
        },
        {
            key: "verifyType",
            value: function verifyType(typeNode, localContext, verifyAhead) {
                var standaloneTypeVerified = (0, _type.verifyStandaloneType)(typeNode, localContext, verifyAhead), typeVerified = standaloneTypeVerified; ///
                return typeVerified;
            }
        }
    ]);
    return TermAsConstructorVerifier;
}(_verifier.default);
var termAsConstructorVerifier = new TermAsConstructorVerifier();
var _default = termAsConstructorVerifier;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92ZXJpZmllci90ZXJtQXNDb25zdHJ1Y3Rvci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFZlcmlmaWVyIGZyb20gXCIuLi92ZXJpZmllclwiO1xuXG5pbXBvcnQgeyB2ZXJpZnkgfSBmcm9tIFwiLi4vdmVyaWZpZXJcIjtcbmltcG9ydCB7IG5vZGVRdWVyeSB9IGZyb20gXCIuLi91dGlsaXRpZXMvcXVlcnlcIjtcbmltcG9ydCB7IHZlcmlmeVN0YW5kYWxvbmVUeXBlIH0gZnJvbSBcIi4uL3ZlcmlmeS90eXBlXCI7XG5pbXBvcnQgeyB2ZXJpZnlTdGFuZGFsb25lVGVybSB9IGZyb20gXCIuLi92ZXJpZnkvdGVybVwiO1xuXG5jb25zdCB0ZXJtTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3Rlcm0hXCIpLFxuICAgICAgdHlwZU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi90eXBlIVwiKSxcbiAgICAgIG5vblRlcm1pbmFsTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiLypcIik7XG5cbmNsYXNzIFRlcm1Bc0NvbnN0cnVjdG9yVmVyaWZpZXIgZXh0ZW5kcyBWZXJpZmllciB7XG4gIHZlcmlmeU5vblRlcm1pbmFsTm9kZShub25UZXJtaW5hbE5vZGUsIGxvY2FsQ29udGV4dCwgdmVyaWZ5QWhlYWQpIHtcbiAgICBsZXQgbm9uVGVybWluYWxOb2RlVmVyaWZpZWQ7XG5cbiAgICBjb25zdCBub2RlUXVlcnlNYXBzID0gW1xuICAgICAge1xuICAgICAgICBub2RlUXVlcnk6IHRlcm1Ob2RlUXVlcnksXG4gICAgICAgIHZlcmlmeTogKG5vZGUsIGxvY2FsQ29udGV4dCwgdmVyaWZ5QWhlYWQpID0+IHtcbiAgICAgICAgICBsZXQgbm9uVGVybWluYWxOb2RlVmVyaWZpZWQ7XG5cbiAgICAgICAgICBjb25zdCB0ZXJtTm9kZSA9IG5vZGUsIC8vL1xuICAgICAgICAgICAgICAgIHRlcm1WZXJpZmllZCA9IHRoaXMudmVyaWZ5Tm9kZSh0ZXJtTm9kZSwgbG9jYWxDb250ZXh0LCB2ZXJpZnlBaGVhZCk7XG5cbiAgICAgICAgICBub25UZXJtaW5hbE5vZGVWZXJpZmllZCA9IHRlcm1WZXJpZmllZDsgLy8vXG5cbiAgICAgICAgICByZXR1cm4gbm9uVGVybWluYWxOb2RlVmVyaWZpZWQ7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIG5vZGVRdWVyeTogdHlwZU5vZGVRdWVyeSxcbiAgICAgICAgdmVyaWZ5OiAobm9kZSwgbG9jYWxDb250ZXh0LCB2ZXJpZnlBaGVhZCkgPT4ge1xuICAgICAgICAgIGxldCBub25UZXJtaW5hbE5vZGVWZXJpZmllZDtcblxuICAgICAgICAgIGNvbnN0IHR5cGVOb2RlID0gbm9kZSwgLy8vXG4gICAgICAgICAgICAgICAgdHlwZVZlcmlmaWVkID0gdGhpcy52ZXJpZnlUeXBlKHR5cGVOb2RlLCBsb2NhbENvbnRleHQsIHZlcmlmeUFoZWFkKTtcblxuICAgICAgICAgIG5vblRlcm1pbmFsTm9kZVZlcmlmaWVkID0gdHlwZVZlcmlmaWVkOyAvLy9cblxuICAgICAgICAgIHJldHVybiBub25UZXJtaW5hbE5vZGVWZXJpZmllZDtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbm9kZVF1ZXJ5OiBub25UZXJtaW5hbE5vZGVRdWVyeSxcbiAgICAgICAgdmVyaWZ5OiAobm9kZSwgbG9jYWxDb250ZXh0LCB2ZXJpZnlBaGVhZCkgPT4ge1xuICAgICAgICAgIGNvbnN0IHZlcmlmaWVkID0gc3VwZXIudmVyaWZ5KG5vZGUsIGxvY2FsQ29udGV4dCwgdmVyaWZ5QWhlYWQpO1xuXG4gICAgICAgICAgcmV0dXJuIHZlcmlmaWVkO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgXTtcblxuICAgIGNvbnN0IHZlcmlmaWVkID0gdmVyaWZ5KG5vZGVRdWVyeU1hcHMsIG5vblRlcm1pbmFsTm9kZSwgbG9jYWxDb250ZXh0LCB2ZXJpZnlBaGVhZCk7XG5cbiAgICBub25UZXJtaW5hbE5vZGVWZXJpZmllZCA9IHZlcmlmaWVkOyAvLy9cblxuICAgIHJldHVybiBub25UZXJtaW5hbE5vZGVWZXJpZmllZDtcbiAgfVxuXG4gIHZlcmlmeU5vZGUodGVybU5vZGUsIGxvY2FsQ29udGV4dCwgdmVyaWZ5QWhlYWQpIHtcbiAgICBjb25zdCBzdGFuZGFsb25lVGVybVZlcmlmaWVkID0gdmVyaWZ5U3RhbmRhbG9uZVRlcm0odGVybU5vZGUsIGxvY2FsQ29udGV4dCwgdmVyaWZ5QWhlYWQpLFxuICAgICAgICAgIHRlcm1WZXJpZmllZCA9IHN0YW5kYWxvbmVUZXJtVmVyaWZpZWQ7ICAvLy9cblxuICAgIHJldHVybiB0ZXJtVmVyaWZpZWQ7XG4gIH1cblxuICB2ZXJpZnlUeXBlKHR5cGVOb2RlLCBsb2NhbENvbnRleHQsIHZlcmlmeUFoZWFkKSB7XG4gICAgY29uc3Qgc3RhbmRhbG9uZVR5cGVWZXJpZmllZCA9IHZlcmlmeVN0YW5kYWxvbmVUeXBlKHR5cGVOb2RlLCBsb2NhbENvbnRleHQsIHZlcmlmeUFoZWFkKSxcbiAgICAgICAgICB0eXBlVmVyaWZpZWQgPSBzdGFuZGFsb25lVHlwZVZlcmlmaWVkOyAgLy8vXG5cbiAgICByZXR1cm4gdHlwZVZlcmlmaWVkO1xuICB9XG59XG5cbmNvbnN0IHRlcm1Bc0NvbnN0cnVjdG9yVmVyaWZpZXIgPSBuZXcgVGVybUFzQ29uc3RydWN0b3JWZXJpZmllcigpO1xuXG5leHBvcnQgZGVmYXVsdCB0ZXJtQXNDb25zdHJ1Y3RvclZlcmlmaWVyO1xuIl0sIm5hbWVzIjpbInRlcm1Ob2RlUXVlcnkiLCJub2RlUXVlcnkiLCJ0eXBlTm9kZVF1ZXJ5Iiwibm9uVGVybWluYWxOb2RlUXVlcnkiLCJUZXJtQXNDb25zdHJ1Y3RvclZlcmlmaWVyIiwidmVyaWZ5Tm9uVGVybWluYWxOb2RlIiwibm9uVGVybWluYWxOb2RlIiwibG9jYWxDb250ZXh0IiwidmVyaWZ5QWhlYWQiLCJub25UZXJtaW5hbE5vZGVWZXJpZmllZCIsIm5vZGVRdWVyeU1hcHMiLCJ2ZXJpZnkiLCJub2RlIiwidGVybU5vZGUiLCJ0ZXJtVmVyaWZpZWQiLCJ2ZXJpZnlOb2RlIiwidHlwZU5vZGUiLCJ0eXBlVmVyaWZpZWQiLCJ2ZXJpZnlUeXBlIiwidmVyaWZpZWQiLCJzdGFuZGFsb25lVGVybVZlcmlmaWVkIiwidmVyaWZ5U3RhbmRhbG9uZVRlcm0iLCJzdGFuZGFsb25lVHlwZVZlcmlmaWVkIiwidmVyaWZ5U3RhbmRhbG9uZVR5cGUiLCJWZXJpZmllciIsInRlcm1Bc0NvbnN0cnVjdG9yVmVyaWZpZXIiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQThFQTs7O2VBQUE7OztnRUE1RXFCO3FCQUdLO29CQUNXO29CQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFckMsSUFBTUEsZ0JBQWdCQyxJQUFBQSxnQkFBUyxFQUFDLFdBQzFCQyxnQkFBZ0JELElBQUFBLGdCQUFTLEVBQUMsV0FDMUJFLHVCQUF1QkYsSUFBQUEsZ0JBQVMsRUFBQztBQUV2QyxJQUFBLEFBQU1HLDBDQUFELEFBQUw7Y0FBTUE7YUFBQUE7Z0NBQUFBO2lDQUFBQTs7a0JBQUFBOztZQUNKQyxLQUFBQTttQkFBQUEsU0FBQUEsc0JBQXNCQyxlQUFlLEVBQUVDLFlBQVksRUFBRUMsV0FBVzs7Z0JBQzlELElBQUlDO2dCQUVKLElBQU1DLGdCQUFnQjtvQkFDcEI7d0JBQ0VULFdBQVdEO3dCQUNYVyxRQUFRLFNBQUNDLE1BQU1MLGNBQWNDOzRCQUMzQixJQUFJQzs0QkFFSixJQUFNSSxXQUFXRCxNQUNYRSxlQUFlLE1BQUtDLFVBQVUsQ0FBQ0YsVUFBVU4sY0FBY0M7NEJBRTdEQywwQkFBMEJLLGNBQWMsR0FBRzs0QkFFM0MsT0FBT0w7d0JBQ1Q7b0JBQ0Y7b0JBQ0E7d0JBQ0VSLFdBQVdDO3dCQUNYUyxRQUFRLFNBQUNDLE1BQU1MLGNBQWNDOzRCQUMzQixJQUFJQzs0QkFFSixJQUFNTyxXQUFXSixNQUNYSyxlQUFlLE1BQUtDLFVBQVUsQ0FBQ0YsVUFBVVQsY0FBY0M7NEJBRTdEQywwQkFBMEJRLGNBQWMsR0FBRzs0QkFFM0MsT0FBT1I7d0JBQ1Q7b0JBQ0Y7b0JBQ0E7d0JBQ0VSLFdBQVdFO3dCQUNYUSxRQUFRLFNBQUNDLE1BQU1MLGNBQWNDOzRCQUMzQixJQUFNVyxXQUFXLHVCQWxDckJmLHNDQWtDMkJPLDZCQUFPQyxNQUFNTCxjQUFjQzs0QkFFbEQsT0FBT1c7d0JBQ1Q7b0JBQ0Y7aUJBQ0Q7Z0JBRUQsSUFBTUEsV0FBV1IsSUFBQUEsZ0JBQU0sRUFBQ0QsZUFBZUosaUJBQWlCQyxjQUFjQztnQkFFdEVDLDBCQUEwQlUsVUFBVSxHQUFHO2dCQUV2QyxPQUFPVjtZQUNUOzs7WUFFQU0sS0FBQUE7bUJBQUFBLFNBQUFBLFdBQVdGLFFBQVEsRUFBRU4sWUFBWSxFQUFFQyxXQUFXO2dCQUM1QyxJQUFNWSx5QkFBeUJDLElBQUFBLDBCQUFvQixFQUFDUixVQUFVTixjQUFjQyxjQUN0RU0sZUFBZU0sd0JBQXlCLEdBQUc7Z0JBRWpELE9BQU9OO1lBQ1Q7OztZQUVBSSxLQUFBQTttQkFBQUEsU0FBQUEsV0FBV0YsUUFBUSxFQUFFVCxZQUFZLEVBQUVDLFdBQVc7Z0JBQzVDLElBQU1jLHlCQUF5QkMsSUFBQUEsMEJBQW9CLEVBQUNQLFVBQVVULGNBQWNDLGNBQ3RFUyxlQUFlSyx3QkFBeUIsR0FBRztnQkFFakQsT0FBT0w7WUFDVDs7O1dBNURJYjtFQUFrQ29CLGlCQUFRO0FBK0RoRCxJQUFNQyw0QkFBNEIsSUFBSXJCO0lBRXRDLFdBQWVxQiJ9