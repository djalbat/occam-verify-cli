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
                            var argumentNodeA = nodeA, argumentNodeB = nodeB, argumentNodeUnifiedAgainstArgumentNode = _this.unifyArgumentNodeAgainstArgumentNode(argumentNodeA, argumentNodeB, localContext, unifyAhead);
                            nonTerminalNodeUnified = argumentNodeUnifiedAgainstArgumentNode; ///
                            return nonTerminalNodeUnified;
                        }
                    },
                    {
                        nodeQueryA: nonTerminalNodeQuery,
                        nodeQueryB: nonTerminalNodeQuery,
                        unify: function(nodeA, nodeB, localContext, unifyAhead) {
                            var nonTerminalNodeUnified;
                            var _$nonTerminalNodeA = nodeA, _$nonTerminalNodeB = nodeB; ///
                            nonTerminalNodeUnified = _get(_get_prototype_of(StatementAgainstCombinatorUnifier.prototype), "unifyNonTerminalNode", _this).call(_this, _$nonTerminalNodeA, _$nonTerminalNodeB, localContext, unifyAhead);
                            return nonTerminalNodeUnified;
                        }
                    }
                ];
                var nodesUnified = (0, _unifier.unify)(nodeQueryMaps, nonTerminalNodeA, nonTerminalNodeB, localContext, unifyAhead);
                nonTerminalNodeUnified = nodesUnified; ///
                return nonTerminalNodeUnified;
            }
        },
        {
            key: "unifyMetaArgumentStatementAgainstMetaType",
            value: function unifyMetaArgumentStatementAgainstMetaType(statementNodeA, metaTypeNodeB, localContext, unifyAhead) {
                var statementUnifiedAgainstMetaType;
                var verifyStatement = this.verifyStatement, metaTypeNode = metaTypeNodeB, statementNode = statementNodeA; ///
                statementUnifiedAgainstMetaType = (0, _statementAgainstMetaType.default)(statementNode, metaTypeNode, localContext, unifyAhead, verifyStatement);
                return statementUnifiedAgainstMetaType;
            }
        },
        {
            key: "unifyArgumentNodeAgainstArgumentNode",
            value: function unifyArgumentNodeAgainstArgumentNode(argumentNodeA, argumentNodeB, localContext, unifyAhead) {
                var argumentNodeUnifiedAgainstArgumentNode;
                var argumentUnifiedAgainstArgument = (0, _argumentAgainstArgument.default)(argumentNodeA, argumentNodeB, localContext, unifyAhead);
                argumentNodeUnifiedAgainstArgumentNode = argumentUnifiedAgainstArgument; ///
                return argumentNodeUnifiedAgainstArgumentNode;
            }
        }
    ]);
    return StatementAgainstCombinatorUnifier;
}(_unifier.default);
var statementAgainstCombinatorUnifier = new StatementAgainstCombinatorUnifier();
var _default = statementAgainstCombinatorUnifier;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91bmlmaWVyL3N0YXRlbWVudEFnYWluc3RDb21iaW5hdG9yLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgVW5pZmllciBmcm9tIFwiLi4vdW5pZmllclwiO1xuaW1wb3J0IHVuaWZ5QXJndW1lbnRBZ2FpbnN0QXJndW1lbnQgZnJvbSBcIi4uL3VuaWZ5L2FyZ3VtZW50QWdhaW5zdEFyZ3VtZW50XCI7XG5pbXBvcnQgdW5pZnlTdGF0ZW1lbnRBZ2FpbnN0TWV0YVR5cGUgZnJvbSBcIi4uL3VuaWZ5L3N0YXRlbWVudEFnYWluc3RNZXRhVHlwZVwiO1xuXG5pbXBvcnQgeyB1bmlmeSB9IGZyb20gXCIuLi91bmlmaWVyXCI7XG5pbXBvcnQgeyBub2RlUXVlcnkgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5cbmNvbnN0IGFyZ3VtZW50Tm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL2FyZ3VtZW50IVwiKSxcbiAgICAgIG1ldGFUeXBlTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL21ldGFUeXBlIVwiKSxcbiAgICAgIHN0YXRlbWVudE5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9zdGF0ZW1lbnQhXCIpLFxuICAgICAgbm9uVGVybWluYWxOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvKlwiKTtcblxuY2xhc3MgU3RhdGVtZW50QWdhaW5zdENvbWJpbmF0b3JVbmlmaWVyIGV4dGVuZHMgVW5pZmllciB7XG4gIHVuaWZ5Tm9uVGVybWluYWxOb2RlKG5vblRlcm1pbmFsTm9kZUEsIG5vblRlcm1pbmFsTm9kZUIsIGxvY2FsQ29udGV4dCwgdW5pZnlBaGVhZCkge1xuICAgIGxldCBub25UZXJtaW5hbE5vZGVVbmlmaWVkO1xuXG4gICAgY29uc3Qgbm9kZVF1ZXJ5TWFwcyA9IFtcbiAgICAgIHtcbiAgICAgICAgbm9kZVF1ZXJ5QTogc3RhdGVtZW50Tm9kZVF1ZXJ5LFxuICAgICAgICBub2RlUXVlcnlCOiBtZXRhVHlwZU5vZGVRdWVyeSxcbiAgICAgICAgdW5pZnk6IChub2RlQSwgbm9kZUIsIGxvY2FsQ29udGV4dCwgdW5pZnlBaGVhZCkgPT4ge1xuICAgICAgICAgIGxldCBub25UZXJtaW5hbE5vZGVVbmlmaWVkO1xuXG4gICAgICAgICAgY29uc3QgbWV0YVR5cGVOb2RlQiA9IG5vZGVCLCAgLy8vXG4gICAgICAgICAgICAgICAgc3RhdGVtZW50Tm9kZUEgPSBub2RlQSwgLy8vXG4gICAgICAgICAgICAgICAgc3RhdGVtZW50VW5pZmllZEFnYWluc3RNZXRhVHlwZSA9XG5cbiAgICAgICAgICAgICAgICAgIHRoaXMudW5pZnlNZXRhQXJndW1lbnRTdGF0ZW1lbnRBZ2FpbnN0TWV0YVR5cGUoc3RhdGVtZW50Tm9kZUEsIG1ldGFUeXBlTm9kZUIsIGxvY2FsQ29udGV4dCwgdW5pZnlBaGVhZCk7XG5cbiAgICAgICAgICBub25UZXJtaW5hbE5vZGVVbmlmaWVkID0gc3RhdGVtZW50VW5pZmllZEFnYWluc3RNZXRhVHlwZTsgLy8vXG5cbiAgICAgICAgICByZXR1cm4gbm9uVGVybWluYWxOb2RlVW5pZmllZDtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbm9kZVF1ZXJ5QTogYXJndW1lbnROb2RlUXVlcnksXG4gICAgICAgIG5vZGVRdWVyeUI6IGFyZ3VtZW50Tm9kZVF1ZXJ5LFxuICAgICAgICB1bmlmeTogKG5vZGVBLCBub2RlQiwgbG9jYWxDb250ZXh0LCB1bmlmeUFoZWFkKSA9PiB7XG4gICAgICAgICAgbGV0IG5vblRlcm1pbmFsTm9kZVVuaWZpZWQ7XG5cbiAgICAgICAgICBjb25zdCBhcmd1bWVudE5vZGVBID0gbm9kZUEsICAvLy9cbiAgICAgICAgICAgICAgICBhcmd1bWVudE5vZGVCID0gbm9kZUIsICAvLy9cbiAgICAgICAgICAgICAgICBhcmd1bWVudE5vZGVVbmlmaWVkQWdhaW5zdEFyZ3VtZW50Tm9kZSA9XG5cbiAgICAgICAgICAgICAgICAgIHRoaXMudW5pZnlBcmd1bWVudE5vZGVBZ2FpbnN0QXJndW1lbnROb2RlKGFyZ3VtZW50Tm9kZUEsIGFyZ3VtZW50Tm9kZUIsIGxvY2FsQ29udGV4dCwgdW5pZnlBaGVhZCk7XG5cbiAgICAgICAgICBub25UZXJtaW5hbE5vZGVVbmlmaWVkID0gYXJndW1lbnROb2RlVW5pZmllZEFnYWluc3RBcmd1bWVudE5vZGU7IC8vL1xuXG4gICAgICAgICAgcmV0dXJuIG5vblRlcm1pbmFsTm9kZVVuaWZpZWQ7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIG5vZGVRdWVyeUE6IG5vblRlcm1pbmFsTm9kZVF1ZXJ5LFxuICAgICAgICBub2RlUXVlcnlCOiBub25UZXJtaW5hbE5vZGVRdWVyeSxcbiAgICAgICAgdW5pZnk6IChub2RlQSwgbm9kZUIsIGxvY2FsQ29udGV4dCwgdW5pZnlBaGVhZCkgPT4ge1xuICAgICAgICAgIGxldCBub25UZXJtaW5hbE5vZGVVbmlmaWVkO1xuXG4gICAgICAgICAgY29uc3Qgbm9uVGVybWluYWxOb2RlQSA9IG5vZGVBLCAvLy9cbiAgICAgICAgICAgICAgICBub25UZXJtaW5hbE5vZGVCID0gbm9kZUI7IC8vL1xuXG4gICAgICAgICAgbm9uVGVybWluYWxOb2RlVW5pZmllZCA9XG5cbiAgICAgICAgICAgIHN1cGVyLnVuaWZ5Tm9uVGVybWluYWxOb2RlKG5vblRlcm1pbmFsTm9kZUEsIG5vblRlcm1pbmFsTm9kZUIsIGxvY2FsQ29udGV4dCwgdW5pZnlBaGVhZCk7XG5cbiAgICAgICAgICByZXR1cm4gbm9uVGVybWluYWxOb2RlVW5pZmllZDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIF07XG5cbiAgICBjb25zdCBub2Rlc1VuaWZpZWQgPSB1bmlmeShub2RlUXVlcnlNYXBzLCBub25UZXJtaW5hbE5vZGVBLCBub25UZXJtaW5hbE5vZGVCLCBsb2NhbENvbnRleHQsIHVuaWZ5QWhlYWQpO1xuXG4gICAgbm9uVGVybWluYWxOb2RlVW5pZmllZCA9IG5vZGVzVW5pZmllZDsgIC8vL1xuXG4gICAgcmV0dXJuIG5vblRlcm1pbmFsTm9kZVVuaWZpZWQ7XG4gIH1cblxuICB1bmlmeU1ldGFBcmd1bWVudFN0YXRlbWVudEFnYWluc3RNZXRhVHlwZShzdGF0ZW1lbnROb2RlQSwgbWV0YVR5cGVOb2RlQiwgbG9jYWxDb250ZXh0LCB1bmlmeUFoZWFkKSB7XG4gICAgbGV0IHN0YXRlbWVudFVuaWZpZWRBZ2FpbnN0TWV0YVR5cGU7XG5cbiAgICBjb25zdCB7IHZlcmlmeVN0YXRlbWVudCB9ID0gdGhpcyxcbiAgICAgICAgICBtZXRhVHlwZU5vZGUgPSBtZXRhVHlwZU5vZGVCLCAvLy9cbiAgICAgICAgICBzdGF0ZW1lbnROb2RlID0gc3RhdGVtZW50Tm9kZUE7ICAvLy9cblxuICAgIHN0YXRlbWVudFVuaWZpZWRBZ2FpbnN0TWV0YVR5cGUgPSB1bmlmeVN0YXRlbWVudEFnYWluc3RNZXRhVHlwZShzdGF0ZW1lbnROb2RlLCBtZXRhVHlwZU5vZGUsIGxvY2FsQ29udGV4dCwgdW5pZnlBaGVhZCwgdmVyaWZ5U3RhdGVtZW50KTtcblxuICAgIHJldHVybiBzdGF0ZW1lbnRVbmlmaWVkQWdhaW5zdE1ldGFUeXBlO1xuICB9XG5cbiAgdW5pZnlBcmd1bWVudE5vZGVBZ2FpbnN0QXJndW1lbnROb2RlKGFyZ3VtZW50Tm9kZUEsIGFyZ3VtZW50Tm9kZUIsIGxvY2FsQ29udGV4dCwgdW5pZnlBaGVhZCkge1xuICAgIGxldCBhcmd1bWVudE5vZGVVbmlmaWVkQWdhaW5zdEFyZ3VtZW50Tm9kZTtcblxuICAgIGNvbnN0IGFyZ3VtZW50VW5pZmllZEFnYWluc3RBcmd1bWVudCA9IHVuaWZ5QXJndW1lbnRBZ2FpbnN0QXJndW1lbnQoYXJndW1lbnROb2RlQSwgYXJndW1lbnROb2RlQiwgbG9jYWxDb250ZXh0LCB1bmlmeUFoZWFkKTtcblxuICAgIGFyZ3VtZW50Tm9kZVVuaWZpZWRBZ2FpbnN0QXJndW1lbnROb2RlID0gYXJndW1lbnRVbmlmaWVkQWdhaW5zdEFyZ3VtZW50OyAvLy9cblxuICAgIHJldHVybiBhcmd1bWVudE5vZGVVbmlmaWVkQWdhaW5zdEFyZ3VtZW50Tm9kZTtcbiAgfVxufVxuXG5jb25zdCBzdGF0ZW1lbnRBZ2FpbnN0Q29tYmluYXRvclVuaWZpZXIgPSBuZXcgU3RhdGVtZW50QWdhaW5zdENvbWJpbmF0b3JVbmlmaWVyKCk7XG5cbmV4cG9ydCBkZWZhdWx0IHN0YXRlbWVudEFnYWluc3RDb21iaW5hdG9yVW5pZmllcjtcbiJdLCJuYW1lcyI6WyJhcmd1bWVudE5vZGVRdWVyeSIsIm5vZGVRdWVyeSIsIm1ldGFUeXBlTm9kZVF1ZXJ5Iiwic3RhdGVtZW50Tm9kZVF1ZXJ5Iiwibm9uVGVybWluYWxOb2RlUXVlcnkiLCJTdGF0ZW1lbnRBZ2FpbnN0Q29tYmluYXRvclVuaWZpZXIiLCJ1bmlmeU5vblRlcm1pbmFsTm9kZSIsIm5vblRlcm1pbmFsTm9kZUEiLCJub25UZXJtaW5hbE5vZGVCIiwibG9jYWxDb250ZXh0IiwidW5pZnlBaGVhZCIsIm5vblRlcm1pbmFsTm9kZVVuaWZpZWQiLCJub2RlUXVlcnlNYXBzIiwibm9kZVF1ZXJ5QSIsIm5vZGVRdWVyeUIiLCJ1bmlmeSIsIm5vZGVBIiwibm9kZUIiLCJtZXRhVHlwZU5vZGVCIiwic3RhdGVtZW50Tm9kZUEiLCJzdGF0ZW1lbnRVbmlmaWVkQWdhaW5zdE1ldGFUeXBlIiwidW5pZnlNZXRhQXJndW1lbnRTdGF0ZW1lbnRBZ2FpbnN0TWV0YVR5cGUiLCJhcmd1bWVudE5vZGVBIiwiYXJndW1lbnROb2RlQiIsImFyZ3VtZW50Tm9kZVVuaWZpZWRBZ2FpbnN0QXJndW1lbnROb2RlIiwidW5pZnlBcmd1bWVudE5vZGVBZ2FpbnN0QXJndW1lbnROb2RlIiwibm9kZXNVbmlmaWVkIiwidmVyaWZ5U3RhdGVtZW50IiwibWV0YVR5cGVOb2RlIiwic3RhdGVtZW50Tm9kZSIsInVuaWZ5U3RhdGVtZW50QWdhaW5zdE1ldGFUeXBlIiwiYXJndW1lbnRVbmlmaWVkQWdhaW5zdEFyZ3VtZW50IiwidW5pZnlBcmd1bWVudEFnYWluc3RBcmd1bWVu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