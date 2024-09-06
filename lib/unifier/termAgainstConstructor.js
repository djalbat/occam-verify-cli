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
var termNodeQuery = (0, _query.nodeQuery)("/argument/term!"), typeNodeQuery = (0, _query.nodeQuery)("/argument/type!"), nonTerminalNodeQuery = (0, _query.nodeQuery)("/*");
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
                            var termNodeA = nodeA, typeNodeB = nodeB, termNodUnifiedAgainstTypeNode = _this.unifyTermNodeAgainstTypeNode(termNodeA, typeNodeB, localContext, unifyAhead);
                            nonTerminalNodUnified = termNodUnifiedAgainstTypeNode; ///
                            return nonTerminalNodUnified;
                        }
                    },
                    {
                        nodeQueryA: nonTerminalNodeQuery,
                        nodeQueryB: nonTerminalNodeQuery,
                        unify: function(nodeA, nodeB, localContext, unifyAhead) {
                            var nonTerminalNodUnified;
                            var _$nonTerminalNodeA = nodeA, _$nonTerminalNodeB = nodeB; ///
                            nonTerminalNodUnified = _get(_get_prototype_of(TermAgainstConstructorUnifier.prototype), "unifyNonTerminalNode", _this).call(_this, _$nonTerminalNodeA, _$nonTerminalNodeB, localContext, unifyAhead);
                            return nonTerminalNodUnified;
                        }
                    }
                ];
                var nodesVerified = (0, _unifier.unify)(nodeQueryMaps, nonTerminalNodeA, nonTerminalNodeB, localContext, unifyAhead);
                nonTerminalNodUnified = nodesVerified; ///
                return nonTerminalNodUnified;
            }
        },
        {
            key: "unifyTermNodeAgainstTypeNode",
            value: function unifyTermNodeAgainstTypeNode(termNodeA, typeNodeB, localContext, unifyAhead) {
                var termNodUnifiedAgainstTypeNode;
                var verifyTerm = _shim.default.verifyTerm, termNode = termNodeA, typeNode = typeNodeB, typeUnifiedAgainstTerm = (0, _termAgainstType.default)(termNode, typeNode, localContext, unifyAhead, verifyTerm);
                termNodUnifiedAgainstTypeNode = typeUnifiedAgainstTerm; ///
                return termNodUnifiedAgainstTypeNode;
            }
        }
    ]);
    return TermAgainstConstructorUnifier;
}(_unifier.default);
var termAgainstConstructorUnifier = new TermAgainstConstructorUnifier();
var _default = termAgainstConstructorUnifier;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91bmlmaWVyL3Rlcm1BZ2FpbnN0Q29uc3RydWN0b3IuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBzaGltIGZyb20gXCIuLi9zaGltXCI7XG5pbXBvcnQgVW5pZmllciBmcm9tIFwiLi4vdW5pZmllclwiO1xuaW1wb3J0IHVuaWZ5VGVybUFnYWluc3RUeXBlIGZyb20gXCIuLi91bmlmeS90ZXJtQWdhaW5zdFR5cGVcIjtcblxuaW1wb3J0IHsgdW5pZnkgfSBmcm9tIFwiLi4vdW5pZmllclwiO1xuaW1wb3J0IHsgbm9kZVF1ZXJ5IH0gZnJvbSBcIi4uL3V0aWxpdGllcy9xdWVyeVwiO1xuXG5jb25zdCB0ZXJtTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL2FyZ3VtZW50L3Rlcm0hXCIpLFxuICAgICAgdHlwZU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9hcmd1bWVudC90eXBlIVwiKSxcbiAgICAgIG5vblRlcm1pbmFsTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiLypcIik7XG5cbmNsYXNzIFRlcm1BZ2FpbnN0Q29uc3RydWN0b3JVbmlmaWVyIGV4dGVuZHMgVW5pZmllciB7XG4gIHVuaWZ5Tm9uVGVybWluYWxOb2RlKG5vblRlcm1pbmFsTm9kZUEsIG5vblRlcm1pbmFsTm9kZUIsIGxvY2FsQ29udGV4dCwgdW5pZnlBaGVhZCkge1xuICAgIGxldCBub25UZXJtaW5hbE5vZFVuaWZpZWQ7XG5cbiAgICBjb25zdCBub2RlUXVlcnlNYXBzID0gW1xuICAgICAge1xuICAgICAgICBub2RlUXVlcnlBOiB0ZXJtTm9kZVF1ZXJ5LFxuICAgICAgICBub2RlUXVlcnlCOiB0eXBlTm9kZVF1ZXJ5LFxuICAgICAgICB1bmlmeTogKG5vZGVBLCBub2RlQiwgbG9jYWxDb250ZXh0LCB1bmlmeUFoZWFkKSA9PiB7XG4gICAgICAgICAgbGV0IG5vblRlcm1pbmFsTm9kVW5pZmllZDtcblxuICAgICAgICAgIGNvbnN0IHRlcm1Ob2RlQSA9IG5vZGVBLCAgLy8vXG4gICAgICAgICAgICAgICAgdHlwZU5vZGVCID0gbm9kZUIsICAvLy9cbiAgICAgICAgICAgICAgICB0ZXJtTm9kVW5pZmllZEFnYWluc3RUeXBlTm9kZSA9XG5cbiAgICAgICAgICAgICAgICAgIHRoaXMudW5pZnlUZXJtTm9kZUFnYWluc3RUeXBlTm9kZSh0ZXJtTm9kZUEsIHR5cGVOb2RlQiwgbG9jYWxDb250ZXh0LCB1bmlmeUFoZWFkKTtcblxuICAgICAgICAgIG5vblRlcm1pbmFsTm9kVW5pZmllZCA9IHRlcm1Ob2RVbmlmaWVkQWdhaW5zdFR5cGVOb2RlOyAgLy8vXG5cbiAgICAgICAgICByZXR1cm4gbm9uVGVybWluYWxOb2RVbmlmaWVkO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBub2RlUXVlcnlBOiBub25UZXJtaW5hbE5vZGVRdWVyeSxcbiAgICAgICAgbm9kZVF1ZXJ5Qjogbm9uVGVybWluYWxOb2RlUXVlcnksXG4gICAgICAgIHVuaWZ5OiAobm9kZUEsIG5vZGVCLCBsb2NhbENvbnRleHQsIHVuaWZ5QWhlYWQpID0+IHtcbiAgICAgICAgICBsZXQgbm9uVGVybWluYWxOb2RVbmlmaWVkO1xuXG4gICAgICAgICAgY29uc3Qgbm9uVGVybWluYWxOb2RlQSA9IG5vZGVBLCAvLy9cbiAgICAgICAgICAgICAgICBub25UZXJtaW5hbE5vZGVCID0gbm9kZUI7IC8vL1xuXG4gICAgICAgICAgbm9uVGVybWluYWxOb2RVbmlmaWVkID1cblxuICAgICAgICAgICAgc3VwZXIudW5pZnlOb25UZXJtaW5hbE5vZGUobm9uVGVybWluYWxOb2RlQSwgbm9uVGVybWluYWxOb2RlQiwgbG9jYWxDb250ZXh0LCB1bmlmeUFoZWFkKTtcblxuICAgICAgICAgIHJldHVybiBub25UZXJtaW5hbE5vZFVuaWZpZWQ7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICBdO1xuXG4gICAgY29uc3Qgbm9kZXNWZXJpZmllZCA9IHVuaWZ5KG5vZGVRdWVyeU1hcHMsIG5vblRlcm1pbmFsTm9kZUEsIG5vblRlcm1pbmFsTm9kZUIsIGxvY2FsQ29udGV4dCwgdW5pZnlBaGVhZCk7XG5cbiAgICBub25UZXJtaW5hbE5vZFVuaWZpZWQgPSBub2Rlc1ZlcmlmaWVkOyAgLy8vXG5cbiAgICByZXR1cm4gbm9uVGVybWluYWxOb2RVbmlmaWVkO1xuICB9XG5cbiAgdW5pZnlUZXJtTm9kZUFnYWluc3RUeXBlTm9kZSh0ZXJtTm9kZUEsIHR5cGVOb2RlQiwgbG9jYWxDb250ZXh0LCB1bmlmeUFoZWFkKSB7XG4gICAgbGV0IHRlcm1Ob2RVbmlmaWVkQWdhaW5zdFR5cGVOb2RlO1xuXG4gICAgY29uc3QgeyB2ZXJpZnlUZXJtIH0gPSBzaGltLFxuICAgICAgICAgIHRlcm1Ob2RlID0gdGVybU5vZGVBLCAvLy9cbiAgICAgICAgICB0eXBlTm9kZSA9IHR5cGVOb2RlQiwgLy8vXG4gICAgICAgICAgdHlwZVVuaWZpZWRBZ2FpbnN0VGVybSA9IHVuaWZ5VGVybUFnYWluc3RUeXBlKHRlcm1Ob2RlLCB0eXBlTm9kZSwgbG9jYWxDb250ZXh0LCB1bmlmeUFoZWFkLCB2ZXJpZnlUZXJtKTtcblxuICAgIHRlcm1Ob2RVbmlmaWVkQWdhaW5zdFR5cGVOb2RlID0gdHlwZVVuaWZpZWRBZ2FpbnN0VGVybTsgLy8vXG5cbiAgICByZXR1cm4gdGVybU5vZFVuaWZpZWRBZ2FpbnN0VHlwZU5vZGU7XG4gIH1cbn1cblxuY29uc3QgdGVybUFnYWluc3RDb25zdHJ1Y3RvclVuaWZpZXIgPSBuZXcgVGVybUFnYWluc3RDb25zdHJ1Y3RvclVuaWZpZXIoKTtcblxuZXhwb3J0IGRlZmF1bHQgdGVybUFnYWluc3RDb25zdHJ1Y3RvclVuaWZpZXI7XG4iXSwibmFtZXMiOlsidGVybU5vZGVRdWVyeSIsIm5vZGVRdWVyeSIsInR5cGVOb2RlUXVlcnkiLCJub25UZXJtaW5hbE5vZGVRdWVyeSIsIlRlcm1BZ2FpbnN0Q29uc3RydWN0b3JVbmlmaWVyIiwidW5pZnlOb25UZXJtaW5hbE5vZGUiLCJub25UZXJtaW5hbE5vZGVBIiwibm9uVGVybWluYWxOb2RlQiIsImxvY2FsQ29udGV4dCIsInVuaWZ5QWhlYWQiLCJub25UZXJtaW5hbE5vZFVuaWZpZWQiLCJub2RlUXVlcnlNYXBzIiwibm9kZVF1ZXJ5QSIsIm5vZGVRdWVyeUIiLCJ1bmlmeSIsIm5vZGVBIiwibm9kZUIiLCJ0ZXJtTm9kZUEiLCJ0eXBlTm9kZUIiLCJ0ZXJtTm9kVW5pZmllZEFnYWluc3RUeXBlTm9kZSIsInVuaWZ5VGVybU5vZGVBZ2FpbnN0VHlwZU5vZGUiLCJub2Rlc1ZlcmlmaWVkIiwidmVyaWZ5VGVybSIsInNoaW0iLCJ0ZXJtTm9kZSIsInR5cGVOb2RlIiwidHlwZVVuaWZpZWRBZ2FpbnN0VGVybSIsInVuaWZ5VGVybUFnYWluc3RUeXBlIiwiVW5pZmllciIsInRlcm1BZ2FpbnN0Q29uc3RydWN0b3JVbmlmaWVyIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkE0RUE7OztlQUFBOzs7MkRBMUVpQjsrREFDRztzRUFDYTtxQkFHUDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFMUIsSUFBTUEsZ0JBQWdCQyxJQUFBQSxnQkFBUyxFQUFDLG9CQUMxQkMsZ0JBQWdCRCxJQUFBQSxnQkFBUyxFQUFDLG9CQUMxQkUsdUJBQXVCRixJQUFBQSxnQkFBUyxFQUFDO0FBRXZDLElBQUEsQUFBTUcsOENBQUQsQUFBTDtjQUFNQTthQUFBQTtnQ0FBQUE7aUNBQUFBOztrQkFBQUE7O1lBQ0pDLEtBQUFBO21CQUFBQSxTQUFBQSxxQkFBcUJDLGdCQUFnQixFQUFFQyxnQkFBZ0IsRUFBRUMsWUFBWSxFQUFFQyxVQUFVOztnQkFDL0UsSUFBSUM7Z0JBRUosSUFBTUMsZ0JBQWdCO29CQUNwQjt3QkFDRUMsWUFBWVo7d0JBQ1phLFlBQVlYO3dCQUNaWSxPQUFPLFNBQUNDLE9BQU9DLE9BQU9SLGNBQWNDOzRCQUNsQyxJQUFJQzs0QkFFSixJQUFNTyxZQUFZRixPQUNaRyxZQUFZRixPQUNaRyxnQ0FFRSxNQUFLQyw0QkFBNEIsQ0FBQ0gsV0FBV0MsV0FBV1YsY0FBY0M7NEJBRTlFQyx3QkFBd0JTLCtCQUFnQyxHQUFHOzRCQUUzRCxPQUFPVDt3QkFDVDtvQkFDRjtvQkFDQTt3QkFDRUUsWUFBWVQ7d0JBQ1pVLFlBQVlWO3dCQUNaVyxPQUFPLFNBQUNDLE9BQU9DLE9BQU9SLGNBQWNDOzRCQUNsQyxJQUFJQzs0QkFFSixJQUFNSixxQkFBbUJTLE9BQ25CUixxQkFBbUJTLE9BQU8sR0FBRzs0QkFFbkNOLHdCQUVFLHVCQWpDTk4sMENBaUNZQywyQ0FBcUJDLG9CQUFrQkMsb0JBQWtCQyxjQUFjQzs0QkFFL0UsT0FBT0M7d0JBQ1Q7b0JBQ0Y7aUJBQ0Q7Z0JBRUQsSUFBTVcsZ0JBQWdCUCxJQUFBQSxjQUFLLEVBQUNILGVBQWVMLGtCQUFrQkMsa0JBQWtCQyxjQUFjQztnQkFFN0ZDLHdCQUF3QlcsZUFBZ0IsR0FBRztnQkFFM0MsT0FBT1g7WUFDVDs7O1lBRUFVLEtBQUFBO21CQUFBQSxTQUFBQSw2QkFBNkJILFNBQVMsRUFBRUMsU0FBUyxFQUFFVixZQUFZLEVBQUVDLFVBQVU7Z0JBQ3pFLElBQUlVO2dCQUVKLElBQU0sQUFBRUcsYUFBZUMsYUFBSSxDQUFuQkQsWUFDRkUsV0FBV1AsV0FDWFEsV0FBV1AsV0FDWFEseUJBQXlCQyxJQUFBQSx3QkFBb0IsRUFBQ0gsVUFBVUMsVUFBVWpCLGNBQWNDLFlBQVlhO2dCQUVsR0gsZ0NBQWdDTyx3QkFBd0IsR0FBRztnQkFFM0QsT0FBT1A7WUFDVDs7O1dBMURJZjtFQUFzQ3dCLGdCQUFPO0FBNkRuRCxJQUFNQyxnQ0FBZ0MsSUFBSXpCO0lBRTFDLFdBQWV5QiJ9