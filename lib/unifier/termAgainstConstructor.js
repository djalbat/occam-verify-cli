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
                var verifyTerm = this.verifyTerm, termNode = termNodeA, typeNode = typeNodeB, typeUnifiedAgainstTerm = (0, _termAgainstType.default)(termNode, typeNode, localContext, unifyAhead, verifyTerm);
                termNodUnifiedAgainstTypeNode = typeUnifiedAgainstTerm; ///
                return termNodUnifiedAgainstTypeNode;
            }
        }
    ]);
    return TermAgainstConstructorUnifier;
}(_unifier.default);
var termAgainstConstructorUnifier = new TermAgainstConstructorUnifier();
var _default = termAgainstConstructorUnifier;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91bmlmaWVyL3Rlcm1BZ2FpbnN0Q29uc3RydWN0b3IuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBVbmlmaWVyIGZyb20gXCIuLi91bmlmaWVyXCI7XG5pbXBvcnQgdW5pZnlUZXJtQWdhaW5zdFR5cGUgZnJvbSBcIi4uL3VuaWZ5L3Rlcm1BZ2FpbnN0VHlwZVwiO1xuXG5pbXBvcnQgeyB1bmlmeSB9IGZyb20gXCIuLi91bmlmaWVyXCI7XG5pbXBvcnQgeyBub2RlUXVlcnkgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5cbmNvbnN0IHRlcm1Ob2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvYXJndW1lbnQvdGVybSFcIiksXG4gICAgICB0eXBlTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL2FyZ3VtZW50L3R5cGUhXCIpLFxuICAgICAgbm9uVGVybWluYWxOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvKlwiKTtcblxuY2xhc3MgVGVybUFnYWluc3RDb25zdHJ1Y3RvclVuaWZpZXIgZXh0ZW5kcyBVbmlmaWVyIHtcbiAgdW5pZnlOb25UZXJtaW5hbE5vZGUobm9uVGVybWluYWxOb2RlQSwgbm9uVGVybWluYWxOb2RlQiwgbG9jYWxDb250ZXh0LCB1bmlmeUFoZWFkKSB7XG4gICAgbGV0IG5vblRlcm1pbmFsTm9kVW5pZmllZDtcblxuICAgIGNvbnN0IG5vZGVRdWVyeU1hcHMgPSBbXG4gICAgICB7XG4gICAgICAgIG5vZGVRdWVyeUE6IHRlcm1Ob2RlUXVlcnksXG4gICAgICAgIG5vZGVRdWVyeUI6IHR5cGVOb2RlUXVlcnksXG4gICAgICAgIHVuaWZ5OiAobm9kZUEsIG5vZGVCLCBsb2NhbENvbnRleHQsIHVuaWZ5QWhlYWQpID0+IHtcbiAgICAgICAgICBsZXQgbm9uVGVybWluYWxOb2RVbmlmaWVkO1xuXG4gICAgICAgICAgY29uc3QgdGVybU5vZGVBID0gbm9kZUEsICAvLy9cbiAgICAgICAgICAgICAgICB0eXBlTm9kZUIgPSBub2RlQiwgIC8vL1xuICAgICAgICAgICAgICAgIHRlcm1Ob2RVbmlmaWVkQWdhaW5zdFR5cGVOb2RlID1cblxuICAgICAgICAgICAgICAgICAgdGhpcy51bmlmeVRlcm1Ob2RlQWdhaW5zdFR5cGVOb2RlKHRlcm1Ob2RlQSwgdHlwZU5vZGVCLCBsb2NhbENvbnRleHQsIHVuaWZ5QWhlYWQpO1xuXG4gICAgICAgICAgbm9uVGVybWluYWxOb2RVbmlmaWVkID0gdGVybU5vZFVuaWZpZWRBZ2FpbnN0VHlwZU5vZGU7ICAvLy9cblxuICAgICAgICAgIHJldHVybiBub25UZXJtaW5hbE5vZFVuaWZpZWQ7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIG5vZGVRdWVyeUE6IG5vblRlcm1pbmFsTm9kZVF1ZXJ5LFxuICAgICAgICBub2RlUXVlcnlCOiBub25UZXJtaW5hbE5vZGVRdWVyeSxcbiAgICAgICAgdW5pZnk6IChub2RlQSwgbm9kZUIsIGxvY2FsQ29udGV4dCwgdW5pZnlBaGVhZCkgPT4ge1xuICAgICAgICAgIGxldCBub25UZXJtaW5hbE5vZFVuaWZpZWQ7XG5cbiAgICAgICAgICBjb25zdCBub25UZXJtaW5hbE5vZGVBID0gbm9kZUEsIC8vL1xuICAgICAgICAgICAgICAgIG5vblRlcm1pbmFsTm9kZUIgPSBub2RlQjsgLy8vXG5cbiAgICAgICAgICBub25UZXJtaW5hbE5vZFVuaWZpZWQgPVxuXG4gICAgICAgICAgICBzdXBlci51bmlmeU5vblRlcm1pbmFsTm9kZShub25UZXJtaW5hbE5vZGVBLCBub25UZXJtaW5hbE5vZGVCLCBsb2NhbENvbnRleHQsIHVuaWZ5QWhlYWQpO1xuXG4gICAgICAgICAgcmV0dXJuIG5vblRlcm1pbmFsTm9kVW5pZmllZDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIF07XG5cbiAgICBjb25zdCBub2Rlc1ZlcmlmaWVkID0gdW5pZnkobm9kZVF1ZXJ5TWFwcywgbm9uVGVybWluYWxOb2RlQSwgbm9uVGVybWluYWxOb2RlQiwgbG9jYWxDb250ZXh0LCB1bmlmeUFoZWFkKTtcblxuICAgIG5vblRlcm1pbmFsTm9kVW5pZmllZCA9IG5vZGVzVmVyaWZpZWQ7ICAvLy9cblxuICAgIHJldHVybiBub25UZXJtaW5hbE5vZFVuaWZpZWQ7XG4gIH1cblxuICB1bmlmeVRlcm1Ob2RlQWdhaW5zdFR5cGVOb2RlKHRlcm1Ob2RlQSwgdHlwZU5vZGVCLCBsb2NhbENvbnRleHQsIHVuaWZ5QWhlYWQpIHtcbiAgICBsZXQgdGVybU5vZFVuaWZpZWRBZ2FpbnN0VHlwZU5vZGU7XG5cbiAgICBjb25zdCB7IHZlcmlmeVRlcm0gfSA9IHRoaXMsXG4gICAgICAgICAgdGVybU5vZGUgPSB0ZXJtTm9kZUEsIC8vL1xuICAgICAgICAgIHR5cGVOb2RlID0gdHlwZU5vZGVCLCAvLy9cbiAgICAgICAgICB0eXBlVW5pZmllZEFnYWluc3RUZXJtID0gdW5pZnlUZXJtQWdhaW5zdFR5cGUodGVybU5vZGUsIHR5cGVOb2RlLCBsb2NhbENvbnRleHQsIHVuaWZ5QWhlYWQsIHZlcmlmeVRlcm0pO1xuXG4gICAgdGVybU5vZFVuaWZpZWRBZ2FpbnN0VHlwZU5vZGUgPSB0eXBlVW5pZmllZEFnYWluc3RUZXJtOyAvLy9cblxuICAgIHJldHVybiB0ZXJtTm9kVW5pZmllZEFnYWluc3RUeXBlTm9kZTtcbiAgfVxufVxuXG5jb25zdCB0ZXJtQWdhaW5zdENvbnN0cnVjdG9yVW5pZmllciA9IG5ldyBUZXJtQWdhaW5zdENvbnN0cnVjdG9yVW5pZmllcigpO1xuXG5leHBvcnQgZGVmYXVsdCB0ZXJtQWdhaW5zdENvbnN0cnVjdG9yVW5pZmllcjtcbiJdLCJuYW1lcyI6WyJ0ZXJtTm9kZVF1ZXJ5Iiwibm9kZVF1ZXJ5IiwidHlwZU5vZGVRdWVyeSIsIm5vblRlcm1pbmFsTm9kZVF1ZXJ5IiwiVGVybUFnYWluc3RDb25zdHJ1Y3RvclVuaWZpZXIiLCJ1bmlmeU5vblRlcm1pbmFsTm9kZSIsIm5vblRlcm1pbmFsTm9kZUEiLCJub25UZXJtaW5hbE5vZGVCIiwibG9jYWxDb250ZXh0IiwidW5pZnlBaGVhZCIsIm5vblRlcm1pbmFsTm9kVW5pZmllZCIsIm5vZGVRdWVyeU1hcHMiLCJub2RlUXVlcnlBIiwibm9kZVF1ZXJ5QiIsInVuaWZ5Iiwibm9kZUEiLCJub2RlQiIsInRlcm1Ob2RlQSIsInR5cGVOb2RlQiIsInRlcm1Ob2RVbmlmaWVkQWdhaW5zdFR5cGVOb2RlIiwidW5pZnlUZXJtTm9kZUFnYWluc3RUeXBlTm9kZSIsIm5vZGVzVmVyaWZpZWQiLCJ2ZXJpZnlUZXJtIiwidGVybU5vZGUiLCJ0eXBlTm9kZSIsInR5cGVVbmlmaWVkQWdhaW5zdFRlcm0iLCJ1bmlmeVRlcm1BZ2FpbnN0VHlwZSIsIlVuaWZpZXIiLCJ0ZXJtQWdhaW5zdENvbnN0cnVjdG9yVW5pZmllciJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBMkVBOzs7ZUFBQTs7OytEQXpFb0I7c0VBQ2E7cUJBR1A7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTFCLElBQU1BLGdCQUFnQkMsSUFBQUEsZ0JBQVMsRUFBQyxvQkFDMUJDLGdCQUFnQkQsSUFBQUEsZ0JBQVMsRUFBQyxvQkFDMUJFLHVCQUF1QkYsSUFBQUEsZ0JBQVMsRUFBQztBQUV2QyxJQUFBLEFBQU1HLDhDQUFELEFBQUw7Y0FBTUE7YUFBQUE7Z0NBQUFBO2lDQUFBQTs7a0JBQUFBOztZQUNKQyxLQUFBQTttQkFBQUEsU0FBQUEscUJBQXFCQyxnQkFBZ0IsRUFBRUMsZ0JBQWdCLEVBQUVDLFlBQVksRUFBRUMsVUFBVTs7Z0JBQy9FLElBQUlDO2dCQUVKLElBQU1DLGdCQUFnQjtvQkFDcEI7d0JBQ0VDLFlBQVlaO3dCQUNaYSxZQUFZWDt3QkFDWlksT0FBTyxTQUFDQyxPQUFPQyxPQUFPUixjQUFjQzs0QkFDbEMsSUFBSUM7NEJBRUosSUFBTU8sWUFBWUYsT0FDWkcsWUFBWUYsT0FDWkcsZ0NBRUUsTUFBS0MsNEJBQTRCLENBQUNILFdBQVdDLFdBQVdWLGNBQWNDOzRCQUU5RUMsd0JBQXdCUywrQkFBZ0MsR0FBRzs0QkFFM0QsT0FBT1Q7d0JBQ1Q7b0JBQ0Y7b0JBQ0E7d0JBQ0VFLFlBQVlUO3dCQUNaVSxZQUFZVjt3QkFDWlcsT0FBTyxTQUFDQyxPQUFPQyxPQUFPUixjQUFjQzs0QkFDbEMsSUFBSUM7NEJBRUosSUFBTUoscUJBQW1CUyxPQUNuQlIscUJBQW1CUyxPQUFPLEdBQUc7NEJBRW5DTix3QkFFRSx1QkFqQ05OLDBDQWlDWUMsMkNBQXFCQyxvQkFBa0JDLG9CQUFrQkMsY0FBY0M7NEJBRS9FLE9BQU9DO3dCQUNUO29CQUNGO2lCQUNEO2dCQUVELElBQU1XLGdCQUFnQlAsSUFBQUEsY0FBSyxFQUFDSCxlQUFlTCxrQkFBa0JDLGtCQUFrQkMsY0FBY0M7Z0JBRTdGQyx3QkFBd0JXLGVBQWdCLEdBQUc7Z0JBRTNDLE9BQU9YO1lBQ1Q7OztZQUVBVSxLQUFBQTttQkFBQUEsU0FBQUEsNkJBQTZCSCxTQUFTLEVBQUVDLFNBQVMsRUFBRVYsWUFBWSxFQUFFQyxVQUFVO2dCQUN6RSxJQUFJVTtnQkFFSixJQUFNLEFBQUVHLGFBQWUsSUFBSSxDQUFuQkEsWUFDRkMsV0FBV04sV0FDWE8sV0FBV04sV0FDWE8seUJBQXlCQyxJQUFBQSx3QkFBb0IsRUFBQ0gsVUFBVUMsVUFBVWhCLGNBQWNDLFlBQVlhO2dCQUVsR0gsZ0NBQWdDTSx3QkFBd0IsR0FBRztnQkFFM0QsT0FBT047WUFDVDs7O1dBMURJZjtFQUFzQ3VCLGdCQUFPO0FBNkRuRCxJQUFNQyxnQ0FBZ0MsSUFBSXhCO0lBRTFDLFdBQWV3QiJ9