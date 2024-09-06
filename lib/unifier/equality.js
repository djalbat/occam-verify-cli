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
var _unifier = /*#__PURE__*/ _interop_require_wildcard(require("../unifier"));
var _termAgainstTerm = /*#__PURE__*/ _interop_require_default(require("../unify/termAgainstTerm"));
var _query = require("../utilities/query");
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
var termNodeQuery = (0, _query.nodeQuery)("/term!"), nonTerminalNodeQuery = (0, _query.nodeQuery)("/*");
var EqualityUnifier = /*#__PURE__*/ function(Unifier) {
    _inherits(EqualityUnifier, Unifier);
    function EqualityUnifier() {
        _class_call_check(this, EqualityUnifier);
        return _call_super(this, EqualityUnifier, arguments);
    }
    _create_class(EqualityUnifier, [
        {
            key: "unifyNonTerminalNode",
            value: function unifyNonTerminalNode(nonTerminalNodeA, nonTerminalNodeB, localContext, unifyAhead) {
                var _this = this;
                var nonTerminalNodUnified;
                var nodeQueryMaps = [
                    {
                        nodeQueryA: termNodeQuery,
                        nodeQueryB: termNodeQuery,
                        unify: function(nodeA, nodeB, localContext, unifyAhead) {
                            var nonTerminalNodUnified;
                            var termNodeA = nodeA, termNodeB = nodeB, termUnifiedAgainstTerm = _this.unifyTermAgainstTerm(termNodeA, termNodeB, localContext, unifyAhead);
                            nonTerminalNodUnified = termUnifiedAgainstTerm; ///
                            return nonTerminalNodUnified;
                        }
                    },
                    {
                        nodeQueryA: nonTerminalNodeQuery,
                        nodeQueryB: nonTerminalNodeQuery,
                        unify: function(nodeA, nodeB, localContext, unifyAhead) {
                            var unified = _get(_get_prototype_of(EqualityUnifier.prototype), "unify", _this).call(_this, nodeA, nodeB, localContext, unifyAhead);
                            return unified;
                        }
                    }
                ];
                var unified = (0, _unifier.unify)(nodeQueryMaps, nonTerminalNodeA, nonTerminalNodeB, localContext, unifyAhead);
                nonTerminalNodUnified = unified; ///
                return nonTerminalNodUnified;
            }
        },
        {
            key: "unifyTermAgainstTerm",
            value: function unifyTermAgainstTerm(termNodeA, termNodeB, localContext, unifyAhead) {
                var termUnifiedAgainstTerm;
                var termVerifiedAgainstTerm = (0, _termAgainstTerm.default)(termNodeA, termNodeB, localContext, unifyAhead);
                if (termVerifiedAgainstTerm) {
                    termUnifiedAgainstTerm = true;
                } else {
                    var nonTerminalNodeA = termNodeA, nonTerminalNodeB = termNodeB, nonTerminalNodeAChildNodes = nonTerminalNodeA.getChildNodes(), nonTerminalNodeBChildNodes = nonTerminalNodeB.getChildNodes(), childNodesA = nonTerminalNodeAChildNodes, childNodesB = nonTerminalNodeBChildNodes, childNodesVerified = this.unifyChildNodes(childNodesA, childNodesB, localContext, unifyAhead);
                    termUnifiedAgainstTerm = childNodesVerified; ///
                }
                return termUnifiedAgainstTerm;
            }
        }
    ]);
    return EqualityUnifier;
}(_unifier.default);
var equalityUnifier = new EqualityUnifier();
var _default = equalityUnifier;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91bmlmaWVyL2VxdWFsaXR5LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgVW5pZmllciBmcm9tIFwiLi4vdW5pZmllclwiO1xuaW1wb3J0IHVuaWZ5VGVybUFnYWluc3RUZXJtIGZyb20gXCIuLi91bmlmeS90ZXJtQWdhaW5zdFRlcm1cIjtcblxuaW1wb3J0IHsgdW5pZnkgfSBmcm9tIFwiLi4vdW5pZmllclwiO1xuaW1wb3J0IHsgbm9kZVF1ZXJ5IH0gZnJvbSBcIi4uL3V0aWxpdGllcy9xdWVyeVwiO1xuXG5jb25zdCB0ZXJtTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3Rlcm0hXCIpLFxuICAgICAgbm9uVGVybWluYWxOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvKlwiKTtcblxuY2xhc3MgRXF1YWxpdHlVbmlmaWVyIGV4dGVuZHMgVW5pZmllciB7XG4gIHVuaWZ5Tm9uVGVybWluYWxOb2RlKG5vblRlcm1pbmFsTm9kZUEsIG5vblRlcm1pbmFsTm9kZUIsIGxvY2FsQ29udGV4dCwgdW5pZnlBaGVhZCkge1xuICAgIGxldCBub25UZXJtaW5hbE5vZFVuaWZpZWQ7XG5cbiAgICBjb25zdCBub2RlUXVlcnlNYXBzID0gW1xuICAgICAge1xuICAgICAgICBub2RlUXVlcnlBOiB0ZXJtTm9kZVF1ZXJ5LFxuICAgICAgICBub2RlUXVlcnlCOiB0ZXJtTm9kZVF1ZXJ5LFxuICAgICAgICB1bmlmeTogKG5vZGVBLCBub2RlQiwgbG9jYWxDb250ZXh0LCB1bmlmeUFoZWFkKSA9PiB7XG4gICAgICAgICAgbGV0IG5vblRlcm1pbmFsTm9kVW5pZmllZDtcblxuICAgICAgICAgIGNvbnN0IHRlcm1Ob2RlQSA9IG5vZGVBLCAgLy8vXG4gICAgICAgICAgICAgICAgdGVybU5vZGVCID0gbm9kZUIsICAvLy9cbiAgICAgICAgICAgICAgICB0ZXJtVW5pZmllZEFnYWluc3RUZXJtID1cblxuICAgICAgICAgICAgICAgICAgdGhpcy51bmlmeVRlcm1BZ2FpbnN0VGVybSh0ZXJtTm9kZUEsIHRlcm1Ob2RlQiwgbG9jYWxDb250ZXh0LCB1bmlmeUFoZWFkKTtcblxuICAgICAgICAgIG5vblRlcm1pbmFsTm9kVW5pZmllZCA9IHRlcm1VbmlmaWVkQWdhaW5zdFRlcm07IC8vL1xuXG4gICAgICAgICAgcmV0dXJuIG5vblRlcm1pbmFsTm9kVW5pZmllZDtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbm9kZVF1ZXJ5QTogbm9uVGVybWluYWxOb2RlUXVlcnksXG4gICAgICAgIG5vZGVRdWVyeUI6IG5vblRlcm1pbmFsTm9kZVF1ZXJ5LFxuICAgICAgICB1bmlmeTogKG5vZGVBLCBub2RlQiwgbG9jYWxDb250ZXh0LCB1bmlmeUFoZWFkKSA9PiB7XG4gICAgICAgICAgY29uc3QgdW5pZmllZCA9IHN1cGVyLnVuaWZ5KG5vZGVBLCBub2RlQiwgbG9jYWxDb250ZXh0LCB1bmlmeUFoZWFkKTtcblxuICAgICAgICAgIHJldHVybiB1bmlmaWVkO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgXTtcblxuICAgIGNvbnN0IHVuaWZpZWQgPSB1bmlmeShub2RlUXVlcnlNYXBzLCBub25UZXJtaW5hbE5vZGVBLCBub25UZXJtaW5hbE5vZGVCLCBsb2NhbENvbnRleHQsIHVuaWZ5QWhlYWQpO1xuXG4gICAgbm9uVGVybWluYWxOb2RVbmlmaWVkID0gdW5pZmllZDsgIC8vL1xuXG4gICAgcmV0dXJuIG5vblRlcm1pbmFsTm9kVW5pZmllZDtcbiAgfVxuXG4gIHVuaWZ5VGVybUFnYWluc3RUZXJtKHRlcm1Ob2RlQSwgdGVybU5vZGVCLCBsb2NhbENvbnRleHQsIHVuaWZ5QWhlYWQpIHtcbiAgICBsZXQgdGVybVVuaWZpZWRBZ2FpbnN0VGVybTtcblxuICAgIGNvbnN0IHRlcm1WZXJpZmllZEFnYWluc3RUZXJtID0gdW5pZnlUZXJtQWdhaW5zdFRlcm0odGVybU5vZGVBLCB0ZXJtTm9kZUIsIGxvY2FsQ29udGV4dCwgdW5pZnlBaGVhZCk7XG5cbiAgICBpZiAodGVybVZlcmlmaWVkQWdhaW5zdFRlcm0pIHtcbiAgICAgIHRlcm1VbmlmaWVkQWdhaW5zdFRlcm0gPSB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBub25UZXJtaW5hbE5vZGVBID0gdGVybU5vZGVBLCAvLy9cbiAgICAgICAgICAgIG5vblRlcm1pbmFsTm9kZUIgPSB0ZXJtTm9kZUIsIC8vL1xuICAgICAgICAgICAgbm9uVGVybWluYWxOb2RlQUNoaWxkTm9kZXMgPSBub25UZXJtaW5hbE5vZGVBLmdldENoaWxkTm9kZXMoKSxcbiAgICAgICAgICAgIG5vblRlcm1pbmFsTm9kZUJDaGlsZE5vZGVzID0gbm9uVGVybWluYWxOb2RlQi5nZXRDaGlsZE5vZGVzKCksXG4gICAgICAgICAgICBjaGlsZE5vZGVzQSA9IG5vblRlcm1pbmFsTm9kZUFDaGlsZE5vZGVzLCAvLy9cbiAgICAgICAgICAgIGNoaWxkTm9kZXNCID0gbm9uVGVybWluYWxOb2RlQkNoaWxkTm9kZXMsIC8vL1xuICAgICAgICAgICAgY2hpbGROb2Rlc1ZlcmlmaWVkID0gdGhpcy51bmlmeUNoaWxkTm9kZXMoY2hpbGROb2Rlc0EsIGNoaWxkTm9kZXNCLCBsb2NhbENvbnRleHQsIHVuaWZ5QWhlYWQpO1xuXG4gICAgICB0ZXJtVW5pZmllZEFnYWluc3RUZXJtID0gY2hpbGROb2Rlc1ZlcmlmaWVkOyAvLy9cbiAgICB9XG5cbiAgICByZXR1cm4gdGVybVVuaWZpZWRBZ2FpbnN0VGVybTtcbiAgfVxufVxuXG5jb25zdCBlcXVhbGl0eVVuaWZpZXIgPSBuZXcgRXF1YWxpdHlVbmlmaWVyKCk7XG5cbmV4cG9ydCBkZWZhdWx0IGVxdWFsaXR5VW5pZmllcjtcbiJdLCJuYW1lcyI6WyJ0ZXJtTm9kZVF1ZXJ5Iiwibm9kZVF1ZXJ5Iiwibm9uVGVybWluYWxOb2RlUXVlcnkiLCJFcXVhbGl0eVVuaWZpZXIiLCJ1bmlmeU5vblRlcm1pbmFsTm9kZSIsIm5vblRlcm1pbmFsTm9kZUEiLCJub25UZXJtaW5hbE5vZGVCIiwibG9jYWxDb250ZXh0IiwidW5pZnlBaGVhZCIsIm5vblRlcm1pbmFsTm9kVW5pZmllZCIsIm5vZGVRdWVyeU1hcHMiLCJub2RlUXVlcnlBIiwibm9kZVF1ZXJ5QiIsInVuaWZ5Iiwibm9kZUEiLCJub2RlQiIsInRlcm1Ob2RlQSIsInRlcm1Ob2RlQiIsInRlcm1VbmlmaWVkQWdhaW5zdFRlcm0iLCJ1bmlmeVRlcm1BZ2FpbnN0VGVybSIsInVuaWZpZWQiLCJ0ZXJtVmVyaWZpZWRBZ2FpbnN0VGVybSIsIm5vblRlcm1pbmFsTm9kZUFDaGlsZE5vZGVzIiwiZ2V0Q2hpbGROb2RlcyIsIm5vblRlcm1pbmFsTm9kZUJDaGlsZE5vZGVzIiwiY2hpbGROb2Rlc0EiLCJjaGlsZE5vZGVzQiIsImNoaWxkTm9kZXNWZXJpZmllZCIsInVuaWZ5Q2hpbGROb2RlcyIsIlVuaWZpZXIiLCJlcXVhbGl0eVVuaWZpZXIiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQTRFQTs7O2VBQUE7OzsrREExRW9CO3NFQUNhO3FCQUdQOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUUxQixJQUFNQSxnQkFBZ0JDLElBQUFBLGdCQUFTLEVBQUMsV0FDMUJDLHVCQUF1QkQsSUFBQUEsZ0JBQVMsRUFBQztBQUV2QyxJQUFBLEFBQU1FLGdDQUFELEFBQUw7Y0FBTUE7YUFBQUE7Z0NBQUFBO2lDQUFBQTs7a0JBQUFBOztZQUNKQyxLQUFBQTttQkFBQUEsU0FBQUEscUJBQXFCQyxnQkFBZ0IsRUFBRUMsZ0JBQWdCLEVBQUVDLFlBQVksRUFBRUMsVUFBVTs7Z0JBQy9FLElBQUlDO2dCQUVKLElBQU1DLGdCQUFnQjtvQkFDcEI7d0JBQ0VDLFlBQVlYO3dCQUNaWSxZQUFZWjt3QkFDWmEsT0FBTyxTQUFDQyxPQUFPQyxPQUFPUixjQUFjQzs0QkFDbEMsSUFBSUM7NEJBRUosSUFBTU8sWUFBWUYsT0FDWkcsWUFBWUYsT0FDWkcseUJBRUUsTUFBS0Msb0JBQW9CLENBQUNILFdBQVdDLFdBQVdWLGNBQWNDOzRCQUV0RUMsd0JBQXdCUyx3QkFBd0IsR0FBRzs0QkFFbkQsT0FBT1Q7d0JBQ1Q7b0JBQ0Y7b0JBQ0E7d0JBQ0VFLFlBQVlUO3dCQUNaVSxZQUFZVjt3QkFDWlcsT0FBTyxTQUFDQyxPQUFPQyxPQUFPUixjQUFjQzs0QkFDbEMsSUFBTVksVUFBVSx1QkExQnBCakIsNEJBMEIwQlUsNEJBQU1DLE9BQU9DLE9BQU9SLGNBQWNDOzRCQUV4RCxPQUFPWTt3QkFDVDtvQkFDRjtpQkFDRDtnQkFFRCxJQUFNQSxVQUFVUCxJQUFBQSxjQUFLLEVBQUNILGVBQWVMLGtCQUFrQkMsa0JBQWtCQyxjQUFjQztnQkFFdkZDLHdCQUF3QlcsU0FBVSxHQUFHO2dCQUVyQyxPQUFPWDtZQUNUOzs7WUFFQVUsS0FBQUE7bUJBQUFBLFNBQUFBLHFCQUFxQkgsU0FBUyxFQUFFQyxTQUFTLEVBQUVWLFlBQVksRUFBRUMsVUFBVTtnQkFDakUsSUFBSVU7Z0JBRUosSUFBTUcsMEJBQTBCRixJQUFBQSx3QkFBb0IsRUFBQ0gsV0FBV0MsV0FBV1YsY0FBY0M7Z0JBRXpGLElBQUlhLHlCQUF5QjtvQkFDM0JILHlCQUF5QjtnQkFDM0IsT0FBTztvQkFDTCxJQUFNYixtQkFBbUJXLFdBQ25CVixtQkFBbUJXLFdBQ25CSyw2QkFBNkJqQixpQkFBaUJrQixhQUFhLElBQzNEQyw2QkFBNkJsQixpQkFBaUJpQixhQUFhLElBQzNERSxjQUFjSCw0QkFDZEksY0FBY0YsNEJBQ2RHLHFCQUFxQixJQUFJLENBQUNDLGVBQWUsQ0FBQ0gsYUFBYUMsYUFBYW5CLGNBQWNDO29CQUV4RlUseUJBQXlCUyxvQkFBb0IsR0FBRztnQkFDbEQ7Z0JBRUEsT0FBT1Q7WUFDVDs7O1dBNURJZjtFQUF3QjBCLGdCQUFPO0FBK0RyQyxJQUFNQyxrQkFBa0IsSUFBSTNCO0lBRTVCLFdBQWUyQiJ9