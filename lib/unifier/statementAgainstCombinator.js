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
                var verifyStatement = _shim.default.verifyStatement, metaTypeNode = metaTypeNodeB, statementNode = statementNodeA; ///
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91bmlmaWVyL3N0YXRlbWVudEFnYWluc3RDb21iaW5hdG9yLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgc2hpbSBmcm9tIFwiLi4vc2hpbVwiO1xuaW1wb3J0IFVuaWZpZXIgZnJvbSBcIi4uL3VuaWZpZXJcIjtcbmltcG9ydCB1bmlmeUFyZ3VtZW50QWdhaW5zdEFyZ3VtZW50IGZyb20gXCIuLi91bmlmeS9hcmd1bWVudEFnYWluc3RBcmd1bWVudFwiO1xuaW1wb3J0IHVuaWZ5U3RhdGVtZW50QWdhaW5zdE1ldGFUeXBlIGZyb20gXCIuLi91bmlmeS9zdGF0ZW1lbnRBZ2FpbnN0TWV0YVR5cGVcIjtcblxuaW1wb3J0IHsgdW5pZnkgfSBmcm9tIFwiLi4vdW5pZmllclwiO1xuaW1wb3J0IHsgbm9kZVF1ZXJ5IH0gZnJvbSBcIi4uL3V0aWxpdGllcy9xdWVyeVwiO1xuXG5jb25zdCBhcmd1bWVudE5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9hcmd1bWVudCFcIiksXG4gICAgICBtZXRhVHlwZU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9tZXRhVHlwZSFcIiksXG4gICAgICBzdGF0ZW1lbnROb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvc3RhdGVtZW50IVwiKSxcbiAgICAgIG5vblRlcm1pbmFsTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiLypcIik7XG5cbmNsYXNzIFN0YXRlbWVudEFnYWluc3RDb21iaW5hdG9yVW5pZmllciBleHRlbmRzIFVuaWZpZXIge1xuICB1bmlmeU5vblRlcm1pbmFsTm9kZShub25UZXJtaW5hbE5vZGVBLCBub25UZXJtaW5hbE5vZGVCLCBsb2NhbENvbnRleHQsIHVuaWZ5QWhlYWQpIHtcbiAgICBsZXQgbm9uVGVybWluYWxOb2RlVW5pZmllZDtcblxuICAgIGNvbnN0IG5vZGVRdWVyeU1hcHMgPSBbXG4gICAgICB7XG4gICAgICAgIG5vZGVRdWVyeUE6IHN0YXRlbWVudE5vZGVRdWVyeSxcbiAgICAgICAgbm9kZVF1ZXJ5QjogbWV0YVR5cGVOb2RlUXVlcnksXG4gICAgICAgIHVuaWZ5OiAobm9kZUEsIG5vZGVCLCBsb2NhbENvbnRleHQsIHVuaWZ5QWhlYWQpID0+IHtcbiAgICAgICAgICBsZXQgbm9uVGVybWluYWxOb2RlVW5pZmllZDtcblxuICAgICAgICAgIGNvbnN0IG1ldGFUeXBlTm9kZUIgPSBub2RlQiwgIC8vL1xuICAgICAgICAgICAgICAgIHN0YXRlbWVudE5vZGVBID0gbm9kZUEsIC8vL1xuICAgICAgICAgICAgICAgIHN0YXRlbWVudFVuaWZpZWRBZ2FpbnN0TWV0YVR5cGUgPVxuXG4gICAgICAgICAgICAgICAgICB0aGlzLnVuaWZ5TWV0YUFyZ3VtZW50U3RhdGVtZW50QWdhaW5zdE1ldGFUeXBlKHN0YXRlbWVudE5vZGVBLCBtZXRhVHlwZU5vZGVCLCBsb2NhbENvbnRleHQsIHVuaWZ5QWhlYWQpO1xuXG4gICAgICAgICAgbm9uVGVybWluYWxOb2RlVW5pZmllZCA9IHN0YXRlbWVudFVuaWZpZWRBZ2FpbnN0TWV0YVR5cGU7IC8vL1xuXG4gICAgICAgICAgcmV0dXJuIG5vblRlcm1pbmFsTm9kZVVuaWZpZWQ7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIG5vZGVRdWVyeUE6IGFyZ3VtZW50Tm9kZVF1ZXJ5LFxuICAgICAgICBub2RlUXVlcnlCOiBhcmd1bWVudE5vZGVRdWVyeSxcbiAgICAgICAgdW5pZnk6IChub2RlQSwgbm9kZUIsIGxvY2FsQ29udGV4dCwgdW5pZnlBaGVhZCkgPT4ge1xuICAgICAgICAgIGxldCBub25UZXJtaW5hbE5vZGVVbmlmaWVkO1xuXG4gICAgICAgICAgY29uc3QgYXJndW1lbnROb2RlQSA9IG5vZGVBLCAgLy8vXG4gICAgICAgICAgICAgICAgYXJndW1lbnROb2RlQiA9IG5vZGVCLCAgLy8vXG4gICAgICAgICAgICAgICAgYXJndW1lbnROb2RlVW5pZmllZEFnYWluc3RBcmd1bWVudE5vZGUgPVxuXG4gICAgICAgICAgICAgICAgICB0aGlzLnVuaWZ5QXJndW1lbnROb2RlQWdhaW5zdEFyZ3VtZW50Tm9kZShhcmd1bWVudE5vZGVBLCBhcmd1bWVudE5vZGVCLCBsb2NhbENvbnRleHQsIHVuaWZ5QWhlYWQpO1xuXG4gICAgICAgICAgbm9uVGVybWluYWxOb2RlVW5pZmllZCA9IGFyZ3VtZW50Tm9kZVVuaWZpZWRBZ2FpbnN0QXJndW1lbnROb2RlOyAvLy9cblxuICAgICAgICAgIHJldHVybiBub25UZXJtaW5hbE5vZGVVbmlmaWVkO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBub2RlUXVlcnlBOiBub25UZXJtaW5hbE5vZGVRdWVyeSxcbiAgICAgICAgbm9kZVF1ZXJ5Qjogbm9uVGVybWluYWxOb2RlUXVlcnksXG4gICAgICAgIHVuaWZ5OiAobm9kZUEsIG5vZGVCLCBsb2NhbENvbnRleHQsIHVuaWZ5QWhlYWQpID0+IHtcbiAgICAgICAgICBsZXQgbm9uVGVybWluYWxOb2RlVW5pZmllZDtcblxuICAgICAgICAgIGNvbnN0IG5vblRlcm1pbmFsTm9kZUEgPSBub2RlQSwgLy8vXG4gICAgICAgICAgICAgICAgbm9uVGVybWluYWxOb2RlQiA9IG5vZGVCOyAvLy9cblxuICAgICAgICAgIG5vblRlcm1pbmFsTm9kZVVuaWZpZWQgPVxuXG4gICAgICAgICAgICBzdXBlci51bmlmeU5vblRlcm1pbmFsTm9kZShub25UZXJtaW5hbE5vZGVBLCBub25UZXJtaW5hbE5vZGVCLCBsb2NhbENvbnRleHQsIHVuaWZ5QWhlYWQpO1xuXG4gICAgICAgICAgcmV0dXJuIG5vblRlcm1pbmFsTm9kZVVuaWZpZWQ7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICBdO1xuXG4gICAgY29uc3Qgbm9kZXNVbmlmaWVkID0gdW5pZnkobm9kZVF1ZXJ5TWFwcywgbm9uVGVybWluYWxOb2RlQSwgbm9uVGVybWluYWxOb2RlQiwgbG9jYWxDb250ZXh0LCB1bmlmeUFoZWFkKTtcblxuICAgIG5vblRlcm1pbmFsTm9kZVVuaWZpZWQgPSBub2Rlc1VuaWZpZWQ7ICAvLy9cblxuICAgIHJldHVybiBub25UZXJtaW5hbE5vZGVVbmlmaWVkO1xuICB9XG5cbiAgdW5pZnlNZXRhQXJndW1lbnRTdGF0ZW1lbnRBZ2FpbnN0TWV0YVR5cGUoc3RhdGVtZW50Tm9kZUEsIG1ldGFUeXBlTm9kZUIsIGxvY2FsQ29udGV4dCwgdW5pZnlBaGVhZCkge1xuICAgIGxldCBzdGF0ZW1lbnRVbmlmaWVkQWdhaW5zdE1ldGFUeXBlO1xuXG4gICAgY29uc3QgeyB2ZXJpZnlTdGF0ZW1lbnQgfSA9IHNoaW0sXG4gICAgICAgICAgbWV0YVR5cGVOb2RlID0gbWV0YVR5cGVOb2RlQiwgLy8vXG4gICAgICAgICAgc3RhdGVtZW50Tm9kZSA9IHN0YXRlbWVudE5vZGVBOyAgLy8vXG5cbiAgICBzdGF0ZW1lbnRVbmlmaWVkQWdhaW5zdE1ldGFUeXBlID0gdW5pZnlTdGF0ZW1lbnRBZ2FpbnN0TWV0YVR5cGUoc3RhdGVtZW50Tm9kZSwgbWV0YVR5cGVOb2RlLCBsb2NhbENvbnRleHQsIHVuaWZ5QWhlYWQsIHZlcmlmeVN0YXRlbWVudCk7XG5cbiAgICByZXR1cm4gc3RhdGVtZW50VW5pZmllZEFnYWluc3RNZXRhVHlwZTtcbiAgfVxuXG4gIHVuaWZ5QXJndW1lbnROb2RlQWdhaW5zdEFyZ3VtZW50Tm9kZShhcmd1bWVudE5vZGVBLCBhcmd1bWVudE5vZGVCLCBsb2NhbENvbnRleHQsIHVuaWZ5QWhlYWQpIHtcbiAgICBsZXQgYXJndW1lbnROb2RlVW5pZmllZEFnYWluc3RBcmd1bWVudE5vZGU7XG5cbiAgICBjb25zdCBhcmd1bWVudFVuaWZpZWRBZ2FpbnN0QXJndW1lbnQgPSB1bmlmeUFyZ3VtZW50QWdhaW5zdEFyZ3VtZW50KGFyZ3VtZW50Tm9kZUEsIGFyZ3VtZW50Tm9kZUIsIGxvY2FsQ29udGV4dCwgdW5pZnlBaGVhZCk7XG5cbiAgICBhcmd1bWVudE5vZGVVbmlmaWVkQWdhaW5zdEFyZ3VtZW50Tm9kZSA9IGFyZ3VtZW50VW5pZmllZEFnYWluc3RBcmd1bWVudDsgLy8vXG5cbiAgICByZXR1cm4gYXJndW1lbnROb2RlVW5pZmllZEFnYWluc3RBcmd1bWVudE5vZGU7XG4gIH1cbn1cblxuY29uc3Qgc3RhdGVtZW50QWdhaW5zdENvbWJpbmF0b3JVbmlmaWVyID0gbmV3IFN0YXRlbWVudEFnYWluc3RDb21iaW5hdG9yVW5pZmllcigpO1xuXG5leHBvcnQgZGVmYXVsdCBzdGF0ZW1lbnRBZ2FpbnN0Q29tYmluYXRvclVuaWZpZXI7XG4iXSwibmFtZXMiOlsiYXJndW1lbnROb2RlUXVlcnkiLCJub2RlUXVlcnkiLCJtZXRhVHlwZU5vZGVRdWVyeSIsInN0YXRlbWVudE5vZGVRdWVyeSIsIm5vblRlcm1pbmFsTm9kZVF1ZXJ5IiwiU3RhdGVtZW50QWdhaW5zdENvbWJpbmF0b3JVbmlmaWVyIiwidW5pZnlOb25UZXJtaW5hbE5vZGUiLCJub25UZXJtaW5hbE5vZGVBIiwibm9uVGVybWluYWxOb2RlQiIsImxvY2FsQ29udGV4dCIsInVuaWZ5QWhlYWQiLCJub25UZXJtaW5hbE5vZGVVbmlmaWVkIiwibm9kZVF1ZXJ5TWFwcyIsIm5vZGVRdWVyeUEiLCJub2RlUXVlcnlCIiwidW5pZnkiLCJub2RlQSIsIm5vZGVCIiwibWV0YVR5cGVOb2RlQiIsInN0YXRlbWVudE5vZGVBIiwic3RhdGVtZW50VW5pZmllZEFnYWluc3RNZXRhVHlwZSIsInVuaWZ5TWV0YUFyZ3VtZW50U3RhdGVtZW50QWdhaW5zdE1ldGFUeXBlIiwiYXJndW1lbnROb2RlQSIsImFyZ3VtZW50Tm9kZUIiLCJhcmd1bWVudE5vZGVVbmlmaWVkQWdhaW5zdEFyZ3VtZW50Tm9kZSIsInVuaWZ5QXJndW1lbnROb2RlQWdhaW5zdEFyZ3VtZW50Tm9kZSIsIm5vZGVzVW5pZmllZCIsInZlcmlmeVN0YXRlbWVudCIsInNoaW0iLCJtZXRhVHlwZU5vZGUiLCJzdGF0ZW1lbnROb2RlIiwidW5pZnlTdGF0ZW1lbnRBZ2FpbnN0TWV0YVR5cGUiLCJhcmd1bWVudFVuaWZpZWRBZ2FpbnN0QXJndW1lbnQiLCJ1bmlmeUFyZ3VtZW50QWdhaW5zdEFyZ3VtZW50IiwiVW5pZmllciIsInN0YXRlbWVudEFnYWluc3RDb21iaW5hdG9yVW5pZmllciJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBd0dBOzs7ZUFBQTs7OzJEQXRHaUI7K0RBQ0c7OEVBQ3FCOytFQUNDO3FCQUdoQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFMUIsSUFBTUEsb0JBQW9CQyxJQUFBQSxnQkFBUyxFQUFDLGVBQzlCQyxvQkFBb0JELElBQUFBLGdCQUFTLEVBQUMsZUFDOUJFLHFCQUFxQkYsSUFBQUEsZ0JBQVMsRUFBQyxnQkFDL0JHLHVCQUF1QkgsSUFBQUEsZ0JBQVMsRUFBQztBQUV2QyxJQUFBLEFBQU1JLGtEQUFELEFBQUw7Y0FBTUE7YUFBQUE7Z0NBQUFBO2lDQUFBQTs7a0JBQUFBOztZQUNKQyxLQUFBQTttQkFBQUEsU0FBQUEscUJBQXFCQyxnQkFBZ0IsRUFBRUMsZ0JBQWdCLEVBQUVDLFlBQVksRUFBRUMsVUFBVTs7Z0JBQy9FLElBQUlDO2dCQUVKLElBQU1DLGdCQUFnQjtvQkFDcEI7d0JBQ0VDLFlBQVlWO3dCQUNaVyxZQUFZWjt3QkFDWmEsT0FBTyxTQUFDQyxPQUFPQyxPQUFPUixjQUFjQzs0QkFDbEMsSUFBSUM7NEJBRUosSUFBTU8sZ0JBQWdCRCxPQUNoQkUsaUJBQWlCSCxPQUNqQkksa0NBRUUsTUFBS0MseUNBQXlDLENBQUNGLGdCQUFnQkQsZUFBZVQsY0FBY0M7NEJBRXBHQyx5QkFBeUJTLGlDQUFpQyxHQUFHOzRCQUU3RCxPQUFPVDt3QkFDVDtvQkFDRjtvQkFDQTt3QkFDRUUsWUFBWWI7d0JBQ1pjLFlBQVlkO3dCQUNaZSxPQUFPLFNBQUNDLE9BQU9DLE9BQU9SLGNBQWNDOzRCQUNsQyxJQUFJQzs0QkFFSixJQUFNVyxnQkFBZ0JOLE9BQ2hCTyxnQkFBZ0JOLE9BQ2hCTyx5Q0FFRSxNQUFLQyxvQ0FBb0MsQ0FBQ0gsZUFBZUMsZUFBZWQsY0FBY0M7NEJBRTlGQyx5QkFBeUJhLHdDQUF3QyxHQUFHOzRCQUVwRSxPQUFPYjt3QkFDVDtvQkFDRjtvQkFDQTt3QkFDRUUsWUFBWVQ7d0JBQ1pVLFlBQVlWO3dCQUNaVyxPQUFPLFNBQUNDLE9BQU9DLE9BQU9SLGNBQWNDOzRCQUNsQyxJQUFJQzs0QkFFSixJQUFNSixxQkFBbUJTLE9BQ25CUixxQkFBbUJTLE9BQU8sR0FBRzs0QkFFbkNOLHlCQUVFLHVCQWxETk4sOENBa0RZQywyQ0FBcUJDLG9CQUFrQkMsb0JBQWtCQyxjQUFjQzs0QkFFL0UsT0FBT0M7d0JBQ1Q7b0JBQ0Y7aUJBQ0Q7Z0JBRUQsSUFBTWUsZUFBZVgsSUFBQUEsY0FBSyxFQUFDSCxlQUFlTCxrQkFBa0JDLGtCQUFrQkMsY0FBY0M7Z0JBRTVGQyx5QkFBeUJlLGNBQWUsR0FBRztnQkFFM0MsT0FBT2Y7WUFDVDs7O1lBRUFVLEtBQUFBO21CQUFBQSxTQUFBQSwwQ0FBMENGLGNBQWMsRUFBRUQsYUFBYSxFQUFFVCxZQUFZLEVBQUVDLFVBQVU7Z0JBQy9GLElBQUlVO2dCQUVKLElBQU0sQUFBRU8sa0JBQW9CQyxhQUFJLENBQXhCRCxpQkFDRkUsZUFBZVgsZUFDZlksZ0JBQWdCWCxnQkFBaUIsR0FBRztnQkFFMUNDLGtDQUFrQ1csSUFBQUEsaUNBQTZCLEVBQUNELGVBQWVELGNBQWNwQixjQUFjQyxZQUFZaUI7Z0JBRXZILE9BQU9QO1lBQ1Q7OztZQUVBSyxLQUFBQTttQkFBQUEsU0FBQUEscUNBQXFDSCxhQUFhLEVBQUVDLGFBQWEsRUFBRWQsWUFBWSxFQUFFQyxVQUFVO2dCQUN6RixJQUFJYztnQkFFSixJQUFNUSxpQ0FBaUNDLElBQUFBLGdDQUE0QixFQUFDWCxlQUFlQyxlQUFlZCxjQUFjQztnQkFFaEhjLHlDQUF5Q1EsZ0NBQWdDLEdBQUc7Z0JBRTVFLE9BQU9SO1lBQ1Q7OztXQXBGSW5CO0VBQTBDNkIsZ0JBQU87QUF1RnZELElBQU1DLG9DQUFvQyxJQUFJOUI7SUFFOUMsV0FBZThCIn0=