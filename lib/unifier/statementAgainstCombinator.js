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
var _argumentAgainstArgument = /*#__PURE__*/ _interop_require_default(require("../unify/argumentAgainstArgument"));
var _statementAgainstMetaType = /*#__PURE__*/ _interop_require_default(require("../unify/statementAgainstMetaType"));
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
var argumentNodeQuery = (0, _query.nodeQuery)("/argument!"), metaTypeNodeQuery = (0, _query.nodeQuery)("/metaType!"), statementNodeQuery = (0, _query.nodeQuery)("/statement!"), nonTerminalNodeQuery = (0, _query.nodeQuery)("/*");
var StatementAgainstCombinatorUnifier = /*#__PURE__*/ function(Unifier) {
    _inherits(StatementAgainstCombinatorUnifier, Unifier);
    function StatementAgainstCombinatorUnifier() {
        _class_call_check(this, StatementAgainstCombinatorUnifier);
        return _call_super(this, StatementAgainstCombinatorUnifier, arguments);
    }
    _create_class(StatementAgainstCombinatorUnifier, [
        {
            key: "unifyNonTerminalNode",
            value: function unifyNonTerminalNode(nonTerminalNodeA, nonTerminalNodeB, localContext, unifyAhead) {
                var _this = this;
                var nonTerminalNodeUnified;
                var nodeQueryMaps = [
                    {
                        nodeQueryA: statementNodeQuery,
                        nodeQueryB: metaTypeNodeQuery,
                        unify: function(nodeA, nodeB, localContext, unifyAhead) {
                            var nonTerminalNodeUnified;
                            var metaTypeNodeB = nodeB, statementNodeA = nodeA, statementUnifiedAgainstMetaType = _this.unifyMetaArgumentStatementAgainstMetaType(statementNodeA, metaTypeNodeB, localContext, unifyAhead);
                            nonTerminalNodeUnified = statementUnifiedAgainstMetaType; ///
                            return nonTerminalNodeUnified;
                        }
                    },
                    {
                        nodeQueryA: argumentNodeQuery,
                        nodeQueryB: argumentNodeQuery,
                        unify: function(nodeA, nodeB, localContext, unifyAhead) {
                            var nonTerminalNodeUnified;
                            var argumentNodeA = nodeA, argumentNodeB = nodeB, argumentUnifiedAgainstArgument = _this.unifyArgumentAgainstArgument(argumentNodeA, argumentNodeB, localContext, unifyAhead);
                            nonTerminalNodeUnified = argumentUnifiedAgainstArgument; ///
                            return nonTerminalNodeUnified;
                        }
                    },
                    {
                        nodeQueryA: nonTerminalNodeQuery,
                        nodeQueryB: nonTerminalNodeQuery,
                        unify: function(nodeA, nodeB, localContext, unifyAhead) {
                            var unified = _get(_get_prototype_of(StatementAgainstCombinatorUnifier.prototype), "unify", _this).call(_this, nodeA, nodeB, localContext, unifyAhead);
                            return unified;
                        }
                    }
                ];
                var unified = (0, _unifier.unify)(nodeQueryMaps, nonTerminalNodeA, nonTerminalNodeB, localContext, unifyAhead);
                nonTerminalNodeUnified = unified; ///
                return nonTerminalNodeUnified;
            }
        },
        {
            key: "unifyMetaArgumentStatementAgainstMetaType",
            value: function unifyMetaArgumentStatementAgainstMetaType(statementNodeA, metaTypeNodeB, localContext, unifyAhead) {
                var statementUnifiedAgainstMetaType;
                var verifyStatement = _shim.default.verifyStatement, metaTypeNode = metaTypeNodeB, statementNode = statementNodeA; ///
                statementUnifiedAgainstMetaType = (0, _statementAgainstMetaType.default)(statementNode, metaTypeNode, localContext, unifyAhead, verifyStatement);
                return statementUnifiedAgainstMetaType;
            }
        },
        {
            key: "unifyArgumentAgainstArgument",
            value: function unifyArgumentAgainstArgument(argumentNodeA, argumentNodeB, localContext, unifyAhead) {
                var argumentUnifiedAgainstArgument;
                argumentUnifiedAgainstArgument = (0, _argumentAgainstArgument.default)(argumentNodeA, argumentNodeB, localContext, unifyAhead);
                return argumentUnifiedAgainstArgument;
            }
        }
    ]);
    return StatementAgainstCombinatorUnifier;
}(_unifier.default);
var statementAgainstCombinatorUnifier = new StatementAgainstCombinatorUnifier();
var _default = statementAgainstCombinatorUnifier;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91bmlmaWVyL3N0YXRlbWVudEFnYWluc3RDb21iaW5hdG9yLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgc2hpbSBmcm9tIFwiLi4vc2hpbVwiO1xuaW1wb3J0IFVuaWZpZXIgZnJvbSBcIi4uL3VuaWZpZXJcIjtcbmltcG9ydCB1bmlmeUFyZ3VtZW50QWdhaW5zdEFyZ3VtZW50IGZyb20gXCIuLi91bmlmeS9hcmd1bWVudEFnYWluc3RBcmd1bWVudFwiO1xuaW1wb3J0IHVuaWZ5U3RhdGVtZW50QWdhaW5zdE1ldGFUeXBlIGZyb20gXCIuLi91bmlmeS9zdGF0ZW1lbnRBZ2FpbnN0TWV0YVR5cGVcIjtcblxuaW1wb3J0IHsgdW5pZnkgfSBmcm9tIFwiLi4vdW5pZmllclwiO1xuaW1wb3J0IHsgbm9kZVF1ZXJ5IH0gZnJvbSBcIi4uL3V0aWxpdGllcy9xdWVyeVwiO1xuXG5jb25zdCBhcmd1bWVudE5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9hcmd1bWVudCFcIiksXG4gICAgICBtZXRhVHlwZU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9tZXRhVHlwZSFcIiksXG4gICAgICBzdGF0ZW1lbnROb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvc3RhdGVtZW50IVwiKSxcbiAgICAgIG5vblRlcm1pbmFsTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiLypcIik7XG5cbmNsYXNzIFN0YXRlbWVudEFnYWluc3RDb21iaW5hdG9yVW5pZmllciBleHRlbmRzIFVuaWZpZXIge1xuICB1bmlmeU5vblRlcm1pbmFsTm9kZShub25UZXJtaW5hbE5vZGVBLCBub25UZXJtaW5hbE5vZGVCLCBsb2NhbENvbnRleHQsIHVuaWZ5QWhlYWQpIHtcbiAgICBsZXQgbm9uVGVybWluYWxOb2RlVW5pZmllZDtcblxuICAgIGNvbnN0IG5vZGVRdWVyeU1hcHMgPSBbXG4gICAgICB7XG4gICAgICAgIG5vZGVRdWVyeUE6IHN0YXRlbWVudE5vZGVRdWVyeSxcbiAgICAgICAgbm9kZVF1ZXJ5QjogbWV0YVR5cGVOb2RlUXVlcnksXG4gICAgICAgIHVuaWZ5OiAobm9kZUEsIG5vZGVCLCBsb2NhbENvbnRleHQsIHVuaWZ5QWhlYWQpID0+IHtcbiAgICAgICAgICBsZXQgbm9uVGVybWluYWxOb2RlVW5pZmllZDtcblxuICAgICAgICAgIGNvbnN0IG1ldGFUeXBlTm9kZUIgPSBub2RlQiwgIC8vL1xuICAgICAgICAgICAgICAgIHN0YXRlbWVudE5vZGVBID0gbm9kZUEsIC8vL1xuICAgICAgICAgICAgICAgIHN0YXRlbWVudFVuaWZpZWRBZ2FpbnN0TWV0YVR5cGUgPVxuXG4gICAgICAgICAgICAgICAgICB0aGlzLnVuaWZ5TWV0YUFyZ3VtZW50U3RhdGVtZW50QWdhaW5zdE1ldGFUeXBlKHN0YXRlbWVudE5vZGVBLCBtZXRhVHlwZU5vZGVCLCBsb2NhbENvbnRleHQsIHVuaWZ5QWhlYWQpO1xuXG4gICAgICAgICAgbm9uVGVybWluYWxOb2RlVW5pZmllZCA9IHN0YXRlbWVudFVuaWZpZWRBZ2FpbnN0TWV0YVR5cGU7IC8vL1xuXG4gICAgICAgICAgcmV0dXJuIG5vblRlcm1pbmFsTm9kZVVuaWZpZWQ7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIG5vZGVRdWVyeUE6IGFyZ3VtZW50Tm9kZVF1ZXJ5LFxuICAgICAgICBub2RlUXVlcnlCOiBhcmd1bWVudE5vZGVRdWVyeSxcbiAgICAgICAgdW5pZnk6IChub2RlQSwgbm9kZUIsIGxvY2FsQ29udGV4dCwgdW5pZnlBaGVhZCkgPT4ge1xuICAgICAgICAgIGxldCBub25UZXJtaW5hbE5vZGVVbmlmaWVkO1xuXG4gICAgICAgICAgY29uc3QgYXJndW1lbnROb2RlQSA9IG5vZGVBLCAgLy8vXG4gICAgICAgICAgICAgICAgYXJndW1lbnROb2RlQiA9IG5vZGVCLCAgLy8vXG4gICAgICAgICAgICAgICAgYXJndW1lbnRVbmlmaWVkQWdhaW5zdEFyZ3VtZW50ID1cblxuICAgICAgICAgICAgICAgICAgdGhpcy51bmlmeUFyZ3VtZW50QWdhaW5zdEFyZ3VtZW50KGFyZ3VtZW50Tm9kZUEsIGFyZ3VtZW50Tm9kZUIsIGxvY2FsQ29udGV4dCwgdW5pZnlBaGVhZCk7XG5cbiAgICAgICAgICBub25UZXJtaW5hbE5vZGVVbmlmaWVkID0gYXJndW1lbnRVbmlmaWVkQWdhaW5zdEFyZ3VtZW50OyAvLy9cblxuICAgICAgICAgIHJldHVybiBub25UZXJtaW5hbE5vZGVVbmlmaWVkO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBub2RlUXVlcnlBOiBub25UZXJtaW5hbE5vZGVRdWVyeSxcbiAgICAgICAgbm9kZVF1ZXJ5Qjogbm9uVGVybWluYWxOb2RlUXVlcnksXG4gICAgICAgIHVuaWZ5OiAobm9kZUEsIG5vZGVCLCBsb2NhbENvbnRleHQsIHVuaWZ5QWhlYWQpID0+IHtcbiAgICAgICAgICBjb25zdCB1bmlmaWVkID0gc3VwZXIudW5pZnkobm9kZUEsIG5vZGVCLCBsb2NhbENvbnRleHQsIHVuaWZ5QWhlYWQpO1xuXG4gICAgICAgICAgcmV0dXJuIHVuaWZpZWQ7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICBdO1xuXG4gICAgY29uc3QgdW5pZmllZCA9IHVuaWZ5KG5vZGVRdWVyeU1hcHMsIG5vblRlcm1pbmFsTm9kZUEsIG5vblRlcm1pbmFsTm9kZUIsIGxvY2FsQ29udGV4dCwgdW5pZnlBaGVhZCk7XG5cbiAgICBub25UZXJtaW5hbE5vZGVVbmlmaWVkID0gdW5pZmllZDsgIC8vL1xuXG4gICAgcmV0dXJuIG5vblRlcm1pbmFsTm9kZVVuaWZpZWQ7XG4gIH1cblxuICB1bmlmeU1ldGFBcmd1bWVudFN0YXRlbWVudEFnYWluc3RNZXRhVHlwZShzdGF0ZW1lbnROb2RlQSwgbWV0YVR5cGVOb2RlQiwgbG9jYWxDb250ZXh0LCB1bmlmeUFoZWFkKSB7XG4gICAgbGV0IHN0YXRlbWVudFVuaWZpZWRBZ2FpbnN0TWV0YVR5cGU7XG5cbiAgICBjb25zdCB7IHZlcmlmeVN0YXRlbWVudCB9ID0gc2hpbSxcbiAgICAgICAgICBtZXRhVHlwZU5vZGUgPSBtZXRhVHlwZU5vZGVCLCAvLy9cbiAgICAgICAgICBzdGF0ZW1lbnROb2RlID0gc3RhdGVtZW50Tm9kZUE7ICAvLy9cblxuICAgIHN0YXRlbWVudFVuaWZpZWRBZ2FpbnN0TWV0YVR5cGUgPSB1bmlmeVN0YXRlbWVudEFnYWluc3RNZXRhVHlwZShzdGF0ZW1lbnROb2RlLCBtZXRhVHlwZU5vZGUsIGxvY2FsQ29udGV4dCwgdW5pZnlBaGVhZCwgdmVyaWZ5U3RhdGVtZW50KTtcblxuICAgIHJldHVybiBzdGF0ZW1lbnRVbmlmaWVkQWdhaW5zdE1ldGFUeXBlO1xuICB9XG5cbiAgdW5pZnlBcmd1bWVudEFnYWluc3RBcmd1bWVudChhcmd1bWVudE5vZGVBLCBhcmd1bWVudE5vZGVCLCBsb2NhbENvbnRleHQsIHVuaWZ5QWhlYWQpIHtcbiAgICBsZXQgYXJndW1lbnRVbmlmaWVkQWdhaW5zdEFyZ3VtZW50O1xuXG4gICAgYXJndW1lbnRVbmlmaWVkQWdhaW5zdEFyZ3VtZW50ID0gdW5pZnlBcmd1bWVudEFnYWluc3RBcmd1bWVudChhcmd1bWVudE5vZGVBLCBhcmd1bWVudE5vZGVCLCBsb2NhbENvbnRleHQsIHVuaWZ5QWhlYWQpO1xuXG4gICAgcmV0dXJuIGFyZ3VtZW50VW5pZmllZEFnYWluc3RBcmd1bWVudDtcbiAgfVxufVxuXG5jb25zdCBzdGF0ZW1lbnRBZ2FpbnN0Q29tYmluYXRvclVuaWZpZXIgPSBuZXcgU3RhdGVtZW50QWdhaW5zdENvbWJpbmF0b3JVbmlmaWVyKCk7XG5cbmV4cG9ydCBkZWZhdWx0IHN0YXRlbWVudEFnYWluc3RDb21iaW5hdG9yVW5pZmllcjtcbiJdLCJuYW1lcyI6WyJhcmd1bWVudE5vZGVRdWVyeSIsIm5vZGVRdWVyeSIsIm1ldGFUeXBlTm9kZVF1ZXJ5Iiwic3RhdGVtZW50Tm9kZVF1ZXJ5Iiwibm9uVGVybWluYWxOb2RlUXVlcnkiLCJTdGF0ZW1lbnRBZ2FpbnN0Q29tYmluYXRvclVuaWZpZXIiLCJ1bmlmeU5vblRlcm1pbmFsTm9kZSIsIm5vblRlcm1pbmFsTm9kZUEiLCJub25UZXJtaW5hbE5vZGVCIiwibG9jYWxDb250ZXh0IiwidW5pZnlBaGVhZCIsIm5vblRlcm1pbmFsTm9kZVVuaWZpZWQiLCJub2RlUXVlcnlNYXBzIiwibm9kZVF1ZXJ5QSIsIm5vZGVRdWVyeUIiLCJ1bmlmeSIsIm5vZGVBIiwibm9kZUIiLCJtZXRhVHlwZU5vZGVCIiwic3RhdGVtZW50Tm9kZUEiLCJzdGF0ZW1lbnRVbmlmaWVkQWdhaW5zdE1ldGFUeXBlIiwidW5pZnlNZXRhQXJndW1lbnRTdGF0ZW1lbnRBZ2FpbnN0TWV0YVR5cGUiLCJhcmd1bWVudE5vZGVBIiwiYXJndW1lbnROb2RlQiIsImFyZ3VtZW50VW5pZmllZEFnYWluc3RBcmd1bWVudCIsInVuaWZ5QXJndW1lbnRBZ2FpbnN0QXJndW1lbnQiLCJ1bmlmaWVkIiwidmVyaWZ5U3RhdGVtZW50Iiwic2hpbSIsIm1ldGFUeXBlTm9kZSIsInN0YXRlbWVudE5vZGUiLCJ1bmlmeVN0YXRlbWVudEFnYWluc3RNZXRhVHlwZSIsIlVuaWZpZXIiLCJzdGF0ZW1lbnRBZ2FpbnN0Q29tYmluYXRvclVuaWZpZXIiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQStGQTs7O2VBQUE7OzsyREE3RmlCOytEQUNHOzhFQUNxQjsrRUFDQztxQkFHaEI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTFCLElBQU1BLG9CQUFvQkMsSUFBQUEsZ0JBQVMsRUFBQyxlQUM5QkMsb0JBQW9CRCxJQUFBQSxnQkFBUyxFQUFDLGVBQzlCRSxxQkFBcUJGLElBQUFBLGdCQUFTLEVBQUMsZ0JBQy9CRyx1QkFBdUJILElBQUFBLGdCQUFTLEVBQUM7QUFFdkMsSUFBQSxBQUFNSSxrREFBRCxBQUFMO2NBQU1BO2FBQUFBO2dDQUFBQTtpQ0FBQUE7O2tCQUFBQTs7WUFDSkMsS0FBQUE7bUJBQUFBLFNBQUFBLHFCQUFxQkMsZ0JBQWdCLEVBQUVDLGdCQUFnQixFQUFFQyxZQUFZLEVBQUVDLFVBQVU7O2dCQUMvRSxJQUFJQztnQkFFSixJQUFNQyxnQkFBZ0I7b0JBQ3BCO3dCQUNFQyxZQUFZVjt3QkFDWlcsWUFBWVo7d0JBQ1phLE9BQU8sU0FBQ0MsT0FBT0MsT0FBT1IsY0FBY0M7NEJBQ2xDLElBQUlDOzRCQUVKLElBQU1PLGdCQUFnQkQsT0FDaEJFLGlCQUFpQkgsT0FDakJJLGtDQUVFLE1BQUtDLHlDQUF5QyxDQUFDRixnQkFBZ0JELGVBQWVULGNBQWNDOzRCQUVwR0MseUJBQXlCUyxpQ0FBaUMsR0FBRzs0QkFFN0QsT0FBT1Q7d0JBQ1Q7b0JBQ0Y7b0JBQ0E7d0JBQ0VFLFlBQVliO3dCQUNaYyxZQUFZZDt3QkFDWmUsT0FBTyxTQUFDQyxPQUFPQyxPQUFPUixjQUFjQzs0QkFDbEMsSUFBSUM7NEJBRUosSUFBTVcsZ0JBQWdCTixPQUNoQk8sZ0JBQWdCTixPQUNoQk8saUNBRUUsTUFBS0MsNEJBQTRCLENBQUNILGVBQWVDLGVBQWVkLGNBQWNDOzRCQUV0RkMseUJBQXlCYSxnQ0FBZ0MsR0FBRzs0QkFFNUQsT0FBT2I7d0JBQ1Q7b0JBQ0Y7b0JBQ0E7d0JBQ0VFLFlBQVlUO3dCQUNaVSxZQUFZVjt3QkFDWlcsT0FBTyxTQUFDQyxPQUFPQyxPQUFPUixjQUFjQzs0QkFDbEMsSUFBTWdCLFVBQVUsdUJBM0NwQnJCLDhDQTJDMEJVLDRCQUFNQyxPQUFPQyxPQUFPUixjQUFjQzs0QkFFeEQsT0FBT2dCO3dCQUNUO29CQUNGO2lCQUNEO2dCQUVELElBQU1BLFVBQVVYLElBQUFBLGNBQUssRUFBQ0gsZUFBZUwsa0JBQWtCQyxrQkFBa0JDLGNBQWNDO2dCQUV2RkMseUJBQXlCZSxTQUFVLEdBQUc7Z0JBRXRDLE9BQU9mO1lBQ1Q7OztZQUVBVSxLQUFBQTttQkFBQUEsU0FBQUEsMENBQTBDRixjQUFjLEVBQUVELGFBQWEsRUFBRVQsWUFBWSxFQUFFQyxVQUFVO2dCQUMvRixJQUFJVTtnQkFFSixJQUFNLEFBQUVPLGtCQUFvQkMsYUFBSSxDQUF4QkQsaUJBQ0ZFLGVBQWVYLGVBQ2ZZLGdCQUFnQlgsZ0JBQWlCLEdBQUc7Z0JBRTFDQyxrQ0FBa0NXLElBQUFBLGlDQUE2QixFQUFDRCxlQUFlRCxjQUFjcEIsY0FBY0MsWUFBWWlCO2dCQUV2SCxPQUFPUDtZQUNUOzs7WUFFQUssS0FBQUE7bUJBQUFBLFNBQUFBLDZCQUE2QkgsYUFBYSxFQUFFQyxhQUFhLEVBQUVkLFlBQVksRUFBRUMsVUFBVTtnQkFDakYsSUFBSWM7Z0JBRUpBLGlDQUFpQ0MsSUFBQUEsZ0NBQTRCLEVBQUNILGVBQWVDLGVBQWVkLGNBQWNDO2dCQUUxRyxPQUFPYztZQUNUOzs7V0EzRUluQjtFQUEwQzJCLGdCQUFPO0FBOEV2RCxJQUFNQyxvQ0FBb0MsSUFBSTVCO0lBRTlDLFdBQWU0QiJ9