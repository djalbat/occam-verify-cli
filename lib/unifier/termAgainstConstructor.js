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
var _shim = /*#__PURE__*/ _interop_require_default(require("../shim"));
var _unifier = /*#__PURE__*/ _interop_require_wildcard(require("../unifier"));
var _termAgainstType = /*#__PURE__*/ _interop_require_default(require("../unify/termAgainstType"));
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
var termNodeQuery = (0, _query.nodeQuery)("/term"), typeNodeQuery = (0, _query.nodeQuery)("/type"), nonTerminalNodeQuery = (0, _query.nodeQuery)("/*");
var TermAgainstConstructorUnifier = /*#__PURE__*/ function(Unifier) {
    _inherits(TermAgainstConstructorUnifier, Unifier);
    function TermAgainstConstructorUnifier() {
        _class_call_check(this, TermAgainstConstructorUnifier);
        return _call_super(this, TermAgainstConstructorUnifier, arguments);
    }
    _create_class(TermAgainstConstructorUnifier, [
        {
            key: "unifyNonTerminalNode",
            value: function unifyNonTerminalNode(nonTerminalNodeA, nonTerminalNodeB, localContext, unifyAhead) {
                var _this = this;
                var nonTerminalNodUnified;
                var nodeQueryMaps = [
                    {
                        nodeQueryA: termNodeQuery,
                        nodeQueryB: typeNodeQuery,
                        unify: function(nodeA, nodeB, localContext, unifyAhead) {
                            var nonTerminalNodUnified;
                            var termNodeA = nodeA, typeNodeB = nodeB, termUnifiedAgainstType = _this.unifyTermAgainstType(termNodeA, typeNodeB, localContext, unifyAhead);
                            nonTerminalNodUnified = termUnifiedAgainstType; ///
                            return nonTerminalNodUnified;
                        }
                    },
                    {
                        nodeQueryA: nonTerminalNodeQuery,
                        nodeQueryB: nonTerminalNodeQuery,
                        unify: function(nodeA, nodeB, localContext, unifyAhead) {
                            var unified = _get(_get_prototype_of(TermAgainstConstructorUnifier.prototype), "unify", _this).call(_this, nodeA, nodeB, localContext, unifyAhead);
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
            key: "unifyTermAgainstType",
            value: function unifyTermAgainstType(termNodeA, typeNodeB, localContext, unifyAhead) {
                var termUnifiedAgainstType;
                var verifyTerm = _shim.default.verifyTerm, termNode = termNodeA, typeNode = typeNodeB, typeUnifiedAgainstTerm = (0, _termAgainstType.default)(termNode, typeNode, localContext, unifyAhead, verifyTerm);
                termUnifiedAgainstType = typeUnifiedAgainstTerm; ///
                return termUnifiedAgainstType;
            }
        }
    ]);
    return TermAgainstConstructorUnifier;
}(_unifier.default);
var termAgainstConstructorUnifier = new TermAgainstConstructorUnifier();
var _default = termAgainstConstructorUnifier;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91bmlmaWVyL3Rlcm1BZ2FpbnN0Q29uc3RydWN0b3IuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBzaGltIGZyb20gXCIuLi9zaGltXCI7XG5pbXBvcnQgVW5pZmllciBmcm9tIFwiLi4vdW5pZmllclwiO1xuaW1wb3J0IHVuaWZ5VGVybUFnYWluc3RUeXBlIGZyb20gXCIuLi91bmlmeS90ZXJtQWdhaW5zdFR5cGVcIjtcblxuaW1wb3J0IHsgdW5pZnkgfSBmcm9tIFwiLi4vdW5pZmllclwiO1xuaW1wb3J0IHsgbm9kZVF1ZXJ5IH0gZnJvbSBcIi4uL3V0aWxpdGllcy9xdWVyeVwiO1xuXG5jb25zdCB0ZXJtTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3Rlcm1cIiksXG4gICAgICB0eXBlTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3R5cGVcIiksXG4gICAgICBub25UZXJtaW5hbE5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi8qXCIpO1xuXG5jbGFzcyBUZXJtQWdhaW5zdENvbnN0cnVjdG9yVW5pZmllciBleHRlbmRzIFVuaWZpZXIge1xuICB1bmlmeU5vblRlcm1pbmFsTm9kZShub25UZXJtaW5hbE5vZGVBLCBub25UZXJtaW5hbE5vZGVCLCBsb2NhbENvbnRleHQsIHVuaWZ5QWhlYWQpIHtcbiAgICBsZXQgbm9uVGVybWluYWxOb2RVbmlmaWVkO1xuXG4gICAgY29uc3Qgbm9kZVF1ZXJ5TWFwcyA9IFtcbiAgICAgIHtcbiAgICAgICAgbm9kZVF1ZXJ5QTogdGVybU5vZGVRdWVyeSxcbiAgICAgICAgbm9kZVF1ZXJ5QjogdHlwZU5vZGVRdWVyeSxcbiAgICAgICAgdW5pZnk6IChub2RlQSwgbm9kZUIsIGxvY2FsQ29udGV4dCwgdW5pZnlBaGVhZCkgPT4ge1xuICAgICAgICAgIGxldCBub25UZXJtaW5hbE5vZFVuaWZpZWQ7XG5cbiAgICAgICAgICBjb25zdCB0ZXJtTm9kZUEgPSBub2RlQSwgIC8vL1xuICAgICAgICAgICAgICAgIHR5cGVOb2RlQiA9IG5vZGVCLCAgLy8vXG4gICAgICAgICAgICAgICAgdGVybVVuaWZpZWRBZ2FpbnN0VHlwZSA9XG5cbiAgICAgICAgICAgICAgICAgIHRoaXMudW5pZnlUZXJtQWdhaW5zdFR5cGUodGVybU5vZGVBLCB0eXBlTm9kZUIsIGxvY2FsQ29udGV4dCwgdW5pZnlBaGVhZCk7XG5cbiAgICAgICAgICBub25UZXJtaW5hbE5vZFVuaWZpZWQgPSB0ZXJtVW5pZmllZEFnYWluc3RUeXBlOyAgLy8vXG5cbiAgICAgICAgICByZXR1cm4gbm9uVGVybWluYWxOb2RVbmlmaWVkO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBub2RlUXVlcnlBOiBub25UZXJtaW5hbE5vZGVRdWVyeSxcbiAgICAgICAgbm9kZVF1ZXJ5Qjogbm9uVGVybWluYWxOb2RlUXVlcnksXG4gICAgICAgIHVuaWZ5OiAobm9kZUEsIG5vZGVCLCBsb2NhbENvbnRleHQsIHVuaWZ5QWhlYWQpID0+IHtcbiAgICAgICAgICBjb25zdCB1bmlmaWVkID0gc3VwZXIudW5pZnkobm9kZUEsIG5vZGVCLCBsb2NhbENvbnRleHQsIHVuaWZ5QWhlYWQpO1xuXG4gICAgICAgICAgcmV0dXJuIHVuaWZpZWQ7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICBdO1xuXG4gICAgY29uc3QgdW5pZmllZCA9IHVuaWZ5KG5vZGVRdWVyeU1hcHMsIG5vblRlcm1pbmFsTm9kZUEsIG5vblRlcm1pbmFsTm9kZUIsIGxvY2FsQ29udGV4dCwgdW5pZnlBaGVhZCk7XG5cbiAgICBub25UZXJtaW5hbE5vZFVuaWZpZWQgPSB1bmlmaWVkOyAgLy8vXG5cbiAgICByZXR1cm4gbm9uVGVybWluYWxOb2RVbmlmaWVkO1xuICB9XG5cbiAgdW5pZnlUZXJtQWdhaW5zdFR5cGUodGVybU5vZGVBLCB0eXBlTm9kZUIsIGxvY2FsQ29udGV4dCwgdW5pZnlBaGVhZCkge1xuICAgIGxldCB0ZXJtVW5pZmllZEFnYWluc3RUeXBlO1xuXG4gICAgY29uc3QgeyB2ZXJpZnlUZXJtIH0gPSBzaGltLFxuICAgICAgICAgIHRlcm1Ob2RlID0gdGVybU5vZGVBLCAvLy9cbiAgICAgICAgICB0eXBlTm9kZSA9IHR5cGVOb2RlQiwgLy8vXG4gICAgICAgICAgdHlwZVVuaWZpZWRBZ2FpbnN0VGVybSA9IHVuaWZ5VGVybUFnYWluc3RUeXBlKHRlcm1Ob2RlLCB0eXBlTm9kZSwgbG9jYWxDb250ZXh0LCB1bmlmeUFoZWFkLCB2ZXJpZnlUZXJtKTtcblxuICAgIHRlcm1VbmlmaWVkQWdhaW5zdFR5cGUgPSB0eXBlVW5pZmllZEFnYWluc3RUZXJtOyAvLy9cblxuICAgIHJldHVybiB0ZXJtVW5pZmllZEFnYWluc3RUeXBlO1xuICB9XG59XG5cbmNvbnN0IHRlcm1BZ2FpbnN0Q29uc3RydWN0b3JVbmlmaWVyID0gbmV3IFRlcm1BZ2FpbnN0Q29uc3RydWN0b3JVbmlmaWVyKCk7XG5cbmV4cG9ydCBkZWZhdWx0IHRlcm1BZ2FpbnN0Q29uc3RydWN0b3JVbmlmaWVyO1xuIl0sIm5hbWVzIjpbInRlcm1Ob2RlUXVlcnkiLCJub2RlUXVlcnkiLCJ0eXBlTm9kZVF1ZXJ5Iiwibm9uVGVybWluYWxOb2RlUXVlcnkiLCJUZXJtQWdhaW5zdENvbnN0cnVjdG9yVW5pZmllciIsInVuaWZ5Tm9uVGVybWluYWxOb2RlIiwibm9uVGVybWluYWxOb2RlQSIsIm5vblRlcm1pbmFsTm9kZUIiLCJsb2NhbENvbnRleHQiLCJ1bmlmeUFoZWFkIiwibm9uVGVybWluYWxOb2RVbmlmaWVkIiwibm9kZVF1ZXJ5TWFwcyIsIm5vZGVRdWVyeUEiLCJub2RlUXVlcnlCIiwidW5pZnkiLCJub2RlQSIsIm5vZGVCIiwidGVybU5vZGVBIiwidHlwZU5vZGVCIiwidGVybVVuaWZpZWRBZ2FpbnN0VHlwZSIsInVuaWZ5VGVybUFnYWluc3RUeXBlIiwidW5pZmllZCIsInZlcmlmeVRlcm0iLCJzaGltIiwidGVybU5vZGUiLCJ0eXBlTm9kZSIsInR5cGVVbmlmaWVkQWdhaW5zdFRlcm0iLCJVbmlmaWVyIiwidGVybUFnYWluc3RDb25zdHJ1Y3RvclVuaWZpZXIiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQXFFQTs7O2VBQUE7OzsyREFuRWlCOytEQUNHO3NFQUNhO3FCQUdQOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUUxQixJQUFNQSxnQkFBZ0JDLElBQUFBLGdCQUFTLEVBQUMsVUFDMUJDLGdCQUFnQkQsSUFBQUEsZ0JBQVMsRUFBQyxVQUMxQkUsdUJBQXVCRixJQUFBQSxnQkFBUyxFQUFDO0FBRXZDLElBQUEsQUFBTUcsOENBQUQsQUFBTDtjQUFNQTthQUFBQTtnQ0FBQUE7aUNBQUFBOztrQkFBQUE7O1lBQ0pDLEtBQUFBO21CQUFBQSxTQUFBQSxxQkFBcUJDLGdCQUFnQixFQUFFQyxnQkFBZ0IsRUFBRUMsWUFBWSxFQUFFQyxVQUFVOztnQkFDL0UsSUFBSUM7Z0JBRUosSUFBTUMsZ0JBQWdCO29CQUNwQjt3QkFDRUMsWUFBWVo7d0JBQ1phLFlBQVlYO3dCQUNaWSxPQUFPLFNBQUNDLE9BQU9DLE9BQU9SLGNBQWNDOzRCQUNsQyxJQUFJQzs0QkFFSixJQUFNTyxZQUFZRixPQUNaRyxZQUFZRixPQUNaRyx5QkFFRSxNQUFLQyxvQkFBb0IsQ0FBQ0gsV0FBV0MsV0FBV1YsY0FBY0M7NEJBRXRFQyx3QkFBd0JTLHdCQUF5QixHQUFHOzRCQUVwRCxPQUFPVDt3QkFDVDtvQkFDRjtvQkFDQTt3QkFDRUUsWUFBWVQ7d0JBQ1pVLFlBQVlWO3dCQUNaVyxPQUFPLFNBQUNDLE9BQU9DLE9BQU9SLGNBQWNDOzRCQUNsQyxJQUFNWSxVQUFVLHVCQTFCcEJqQiwwQ0EwQjBCVSw0QkFBTUMsT0FBT0MsT0FBT1IsY0FBY0M7NEJBRXhELE9BQU9ZO3dCQUNUO29CQUNGO2lCQUNEO2dCQUVELElBQU1BLFVBQVVQLElBQUFBLGNBQUssRUFBQ0gsZUFBZUwsa0JBQWtCQyxrQkFBa0JDLGNBQWNDO2dCQUV2RkMsd0JBQXdCVyxTQUFVLEdBQUc7Z0JBRXJDLE9BQU9YO1lBQ1Q7OztZQUVBVSxLQUFBQTttQkFBQUEsU0FBQUEscUJBQXFCSCxTQUFTLEVBQUVDLFNBQVMsRUFBRVYsWUFBWSxFQUFFQyxVQUFVO2dCQUNqRSxJQUFJVTtnQkFFSixJQUFNLEFBQUVHLGFBQWVDLGFBQUksQ0FBbkJELFlBQ0ZFLFdBQVdQLFdBQ1hRLFdBQVdQLFdBQ1hRLHlCQUF5Qk4sSUFBQUEsd0JBQW9CLEVBQUNJLFVBQVVDLFVBQVVqQixjQUFjQyxZQUFZYTtnQkFFbEdILHlCQUF5Qk8sd0JBQXdCLEdBQUc7Z0JBRXBELE9BQU9QO1lBQ1Q7OztXQW5ESWY7RUFBc0N1QixnQkFBTztBQXNEbkQsSUFBTUMsZ0NBQWdDLElBQUl4QjtJQUUxQyxXQUFld0IifQ==