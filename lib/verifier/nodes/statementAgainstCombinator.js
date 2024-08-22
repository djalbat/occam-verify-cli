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
var _argumentAgainstArgument = /*#__PURE__*/ _interop_require_default(require("../../verify/argumentAgainstArgument"));
var _statementAgainstMetaType = /*#__PURE__*/ _interop_require_default(require("../../verify/statementAgainstMetaType"));
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
var argumentNodeQuery = (0, _query.nodeQuery)("/argument!"), metaArgumentMetaTypeNodeQuery = (0, _query.nodeQuery)("/metaArgument/metaType!"), metaArgumentStatementNodeQuery = (0, _query.nodeQuery)("/metaArgument/statement!");
var StatementAgainstCombinatorNodesVerifier = /*#__PURE__*/ function(NodesVerifier) {
    _inherits(StatementAgainstCombinatorNodesVerifier, NodesVerifier);
    var _super = _create_super(StatementAgainstCombinatorNodesVerifier);
    function StatementAgainstCombinatorNodesVerifier() {
        _class_call_check(this, StatementAgainstCombinatorNodesVerifier);
        return _super.apply(this, arguments);
    }
    _create_class(StatementAgainstCombinatorNodesVerifier, [
        {
            key: "verifyNonTerminalNode",
            value: function verifyNonTerminalNode(nonTerminalNodeA, nonTerminalNodeB, localContext, verifyAhead) {
                var _this = this;
                var nonTerminalNodeVerified;
                var nodeQueryMaps = [
                    {
                        nodeQueryA: metaArgumentStatementNodeQuery,
                        nodeQueryB: metaArgumentMetaTypeNodeQuery,
                        verifyNodes: function(nodeA, nodeB, localContext, verifyAhead) {
                            var nonTerminalNodeVerified;
                            var metaArgumentMetaTypeNodeB = nodeB, metaArgumentStatementNodeA = nodeA, metaArgumentStatementVerifiedAgainstMetaArgumentMetaType = _this.verifyMetaArgumentStatementAgainstMetaArgumentMetaType(metaArgumentStatementNodeA, metaArgumentMetaTypeNodeB, localContext, verifyAhead);
                            nonTerminalNodeVerified = metaArgumentStatementVerifiedAgainstMetaArgumentMetaType; ///
                            return nonTerminalNodeVerified;
                        }
                    },
                    {
                        nodeQueryA: argumentNodeQuery,
                        nodeQueryB: argumentNodeQuery,
                        verifyNodes: function(nodeA, nodeB, localContext, verifyAhead) {
                            var nonTerminalNodeVerified;
                            var argumentNodeA = nodeA, argumentNodeB = nodeB, argumentNodeVerifiedAgainstArgumentNode = _this.verifyArgumentNodeAgainstArgumentNode(argumentNodeA, argumentNodeB, localContext, verifyAhead);
                            nonTerminalNodeVerified = argumentNodeVerifiedAgainstArgumentNode; ///
                            return nonTerminalNodeVerified;
                        }
                    }
                ];
                var nodesVerified = (0, _verifier.verifyNodes)(nodeQueryMaps, nonTerminalNodeA, nonTerminalNodeB, localContext, verifyAhead);
                nonTerminalNodeVerified = nodesVerified ? true : _get(_get_prototype_of(StatementAgainstCombinatorNodesVerifier.prototype), "verifyNonTerminalNode", this).call(this, nonTerminalNodeA, nonTerminalNodeB, localContext, verifyAhead);
                return nonTerminalNodeVerified;
            }
        },
        {
            key: "verifyMetaArgumentStatementAgainstMetaArgumentMetaType",
            value: function verifyMetaArgumentStatementAgainstMetaArgumentMetaType(metaArgumentStatementNodeA, metaArgumentMetaTypeNodeB, localContext, verifyAhead) {
                var metaArgumentStatementVerifiedAgainstMetaArgumentMetaType = false;
                var metaTypeNode = metaArgumentMetaTypeNodeB, statementNode = metaArgumentStatementNodeA, statementVerifiedAgainstMetaType = (0, _statementAgainstMetaType.default)(statementNode, metaTypeNode, localContext, verifyAhead);
                metaArgumentStatementVerifiedAgainstMetaArgumentMetaType = statementVerifiedAgainstMetaType; ///
                return metaArgumentStatementVerifiedAgainstMetaArgumentMetaType;
            }
        },
        {
            key: "verifyArgumentNodeAgainstArgumentNode",
            value: function verifyArgumentNodeAgainstArgumentNode(argumentNodeA, argumentNodeB, localContext, verifyAhead) {
                var argumentNodeVerifiedAgainstArgumentNode;
                var argumentVerifiedAgainstArgument = (0, _argumentAgainstArgument.default)(argumentNodeA, argumentNodeB, localContext, verifyAhead);
                argumentNodeVerifiedAgainstArgumentNode = argumentVerifiedAgainstArgument; ///
                return argumentNodeVerifiedAgainstArgumentNode;
            }
        }
    ]);
    return StatementAgainstCombinatorNodesVerifier;
}(_nodes.default);
var statementAgainstCombinatorNodesVerifier = new StatementAgainstCombinatorNodesVerifier();
var _default = statementAgainstCombinatorNodesVerifier;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy92ZXJpZmllci9ub2Rlcy9zdGF0ZW1lbnRBZ2FpbnN0Q29tYmluYXRvci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IE5vZGVzVmVyaWZpZXIgZnJvbSBcIi4uLy4uL3ZlcmlmaWVyL25vZGVzXCI7XG5pbXBvcnQgdmVyaWZ5QXJndW1lbnRBZ2FpbnN0QXJndW1lbnQgZnJvbSBcIi4uLy4uL3ZlcmlmeS9hcmd1bWVudEFnYWluc3RBcmd1bWVudFwiO1xuaW1wb3J0IHZlcmlmeVN0YXRlbWVudEFnYWluc3RNZXRhVHlwZSBmcm9tIFwiLi4vLi4vdmVyaWZ5L3N0YXRlbWVudEFnYWluc3RNZXRhVHlwZVwiO1xuXG5pbXBvcnQgeyBub2RlUXVlcnkgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5pbXBvcnQgeyB2ZXJpZnlOb2RlcyB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvdmVyaWZpZXJcIjtcblxuY29uc3QgYXJndW1lbnROb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvYXJndW1lbnQhXCIpLFxuICAgICAgbWV0YUFyZ3VtZW50TWV0YVR5cGVOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvbWV0YUFyZ3VtZW50L21ldGFUeXBlIVwiKSxcbiAgICAgIG1ldGFBcmd1bWVudFN0YXRlbWVudE5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9tZXRhQXJndW1lbnQvc3RhdGVtZW50IVwiKTtcblxuY2xhc3MgU3RhdGVtZW50QWdhaW5zdENvbWJpbmF0b3JOb2Rlc1ZlcmlmaWVyIGV4dGVuZHMgTm9kZXNWZXJpZmllciB7XG4gIHZlcmlmeU5vblRlcm1pbmFsTm9kZShub25UZXJtaW5hbE5vZGVBLCBub25UZXJtaW5hbE5vZGVCLCBsb2NhbENvbnRleHQsIHZlcmlmeUFoZWFkKSB7XG4gICAgbGV0IG5vblRlcm1pbmFsTm9kZVZlcmlmaWVkO1xuXG4gICAgY29uc3Qgbm9kZVF1ZXJ5TWFwcyA9IFtcbiAgICAgIHtcbiAgICAgICAgbm9kZVF1ZXJ5QTogbWV0YUFyZ3VtZW50U3RhdGVtZW50Tm9kZVF1ZXJ5LFxuICAgICAgICBub2RlUXVlcnlCOiBtZXRhQXJndW1lbnRNZXRhVHlwZU5vZGVRdWVyeSxcbiAgICAgICAgdmVyaWZ5Tm9kZXM6IChub2RlQSwgbm9kZUIsIGxvY2FsQ29udGV4dCwgdmVyaWZ5QWhlYWQpID0+IHtcbiAgICAgICAgICBsZXQgbm9uVGVybWluYWxOb2RlVmVyaWZpZWQ7XG5cbiAgICAgICAgICBjb25zdCBtZXRhQXJndW1lbnRNZXRhVHlwZU5vZGVCID0gbm9kZUIsICAvLy9cbiAgICAgICAgICAgICAgICBtZXRhQXJndW1lbnRTdGF0ZW1lbnROb2RlQSA9IG5vZGVBLCAvLy9cbiAgICAgICAgICAgICAgICBtZXRhQXJndW1lbnRTdGF0ZW1lbnRWZXJpZmllZEFnYWluc3RNZXRhQXJndW1lbnRNZXRhVHlwZSA9XG5cbiAgICAgICAgICAgICAgICAgIHRoaXMudmVyaWZ5TWV0YUFyZ3VtZW50U3RhdGVtZW50QWdhaW5zdE1ldGFBcmd1bWVudE1ldGFUeXBlKG1ldGFBcmd1bWVudFN0YXRlbWVudE5vZGVBLCBtZXRhQXJndW1lbnRNZXRhVHlwZU5vZGVCLCBsb2NhbENvbnRleHQsIHZlcmlmeUFoZWFkKTtcblxuICAgICAgICAgIG5vblRlcm1pbmFsTm9kZVZlcmlmaWVkID0gbWV0YUFyZ3VtZW50U3RhdGVtZW50VmVyaWZpZWRBZ2FpbnN0TWV0YUFyZ3VtZW50TWV0YVR5cGU7IC8vL1xuXG4gICAgICAgICAgcmV0dXJuIG5vblRlcm1pbmFsTm9kZVZlcmlmaWVkO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBub2RlUXVlcnlBOiBhcmd1bWVudE5vZGVRdWVyeSxcbiAgICAgICAgbm9kZVF1ZXJ5QjogYXJndW1lbnROb2RlUXVlcnksXG4gICAgICAgIHZlcmlmeU5vZGVzOiAobm9kZUEsIG5vZGVCLCBsb2NhbENvbnRleHQsIHZlcmlmeUFoZWFkKSA9PiB7XG4gICAgICAgICAgbGV0IG5vblRlcm1pbmFsTm9kZVZlcmlmaWVkO1xuXG4gICAgICAgICAgY29uc3QgYXJndW1lbnROb2RlQSA9IG5vZGVBLCAgLy8vXG4gICAgICAgICAgICAgICAgYXJndW1lbnROb2RlQiA9IG5vZGVCLCAgLy8vXG4gICAgICAgICAgICAgICAgYXJndW1lbnROb2RlVmVyaWZpZWRBZ2FpbnN0QXJndW1lbnROb2RlID1cblxuICAgICAgICAgICAgICAgICAgdGhpcy52ZXJpZnlBcmd1bWVudE5vZGVBZ2FpbnN0QXJndW1lbnROb2RlKGFyZ3VtZW50Tm9kZUEsIGFyZ3VtZW50Tm9kZUIsIGxvY2FsQ29udGV4dCwgdmVyaWZ5QWhlYWQpO1xuXG4gICAgICAgICAgbm9uVGVybWluYWxOb2RlVmVyaWZpZWQgPSBhcmd1bWVudE5vZGVWZXJpZmllZEFnYWluc3RBcmd1bWVudE5vZGU7IC8vL1xuXG4gICAgICAgICAgcmV0dXJuIG5vblRlcm1pbmFsTm9kZVZlcmlmaWVkO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgXTtcblxuICAgIGNvbnN0IG5vZGVzVmVyaWZpZWQgPSB2ZXJpZnlOb2Rlcyhub2RlUXVlcnlNYXBzLCBub25UZXJtaW5hbE5vZGVBLCBub25UZXJtaW5hbE5vZGVCLCBsb2NhbENvbnRleHQsIHZlcmlmeUFoZWFkKTtcblxuICAgIG5vblRlcm1pbmFsTm9kZVZlcmlmaWVkID0gbm9kZXNWZXJpZmllZCA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRydWUgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN1cGVyLnZlcmlmeU5vblRlcm1pbmFsTm9kZShub25UZXJtaW5hbE5vZGVBLCBub25UZXJtaW5hbE5vZGVCLCBsb2NhbENvbnRleHQsIHZlcmlmeUFoZWFkKTtcblxuICAgIHJldHVybiBub25UZXJtaW5hbE5vZGVWZXJpZmllZDtcbiAgfVxuXG4gIHZlcmlmeU1ldGFBcmd1bWVudFN0YXRlbWVudEFnYWluc3RNZXRhQXJndW1lbnRNZXRhVHlwZShtZXRhQXJndW1lbnRTdGF0ZW1lbnROb2RlQSwgbWV0YUFyZ3VtZW50TWV0YVR5cGVOb2RlQiwgbG9jYWxDb250ZXh0LCB2ZXJpZnlBaGVhZCkge1xuICAgIGxldCBtZXRhQXJndW1lbnRTdGF0ZW1lbnRWZXJpZmllZEFnYWluc3RNZXRhQXJndW1lbnRNZXRhVHlwZSA9IGZhbHNlO1xuXG4gICAgY29uc3QgbWV0YVR5cGVOb2RlID0gbWV0YUFyZ3VtZW50TWV0YVR5cGVOb2RlQiwgLy8vXG4gICAgICAgICAgc3RhdGVtZW50Tm9kZSA9IG1ldGFBcmd1bWVudFN0YXRlbWVudE5vZGVBLCAgLy8vXG4gICAgICAgICAgc3RhdGVtZW50VmVyaWZpZWRBZ2FpbnN0TWV0YVR5cGUgPSB2ZXJpZnlTdGF0ZW1lbnRBZ2FpbnN0TWV0YVR5cGUoc3RhdGVtZW50Tm9kZSwgbWV0YVR5cGVOb2RlLCBsb2NhbENvbnRleHQsIHZlcmlmeUFoZWFkKTtcblxuICAgIG1ldGFBcmd1bWVudFN0YXRlbWVudFZlcmlmaWVkQWdhaW5zdE1ldGFBcmd1bWVudE1ldGFUeXBlID0gc3RhdGVtZW50VmVyaWZpZWRBZ2FpbnN0TWV0YVR5cGU7IC8vL1xuXG4gICAgcmV0dXJuIG1ldGFBcmd1bWVudFN0YXRlbWVudFZlcmlmaWVkQWdhaW5zdE1ldGFBcmd1bWVudE1ldGFUeXBlO1xuICB9XG5cbiAgdmVyaWZ5QXJndW1lbnROb2RlQWdhaW5zdEFyZ3VtZW50Tm9kZShhcmd1bWVudE5vZGVBLCBhcmd1bWVudE5vZGVCLCBsb2NhbENvbnRleHQsIHZlcmlmeUFoZWFkKSB7XG4gICAgbGV0IGFyZ3VtZW50Tm9kZVZlcmlmaWVkQWdhaW5zdEFyZ3VtZW50Tm9kZTtcblxuICAgIGNvbnN0IGFyZ3VtZW50VmVyaWZpZWRBZ2FpbnN0QXJndW1lbnQgPSB2ZXJpZnlBcmd1bWVudEFnYWluc3RBcmd1bWVudChhcmd1bWVudE5vZGVBLCBhcmd1bWVudE5vZGVCLCBsb2NhbENvbnRleHQsIHZlcmlmeUFoZWFkKTtcblxuICAgIGFyZ3VtZW50Tm9kZVZlcmlmaWVkQWdhaW5zdEFyZ3VtZW50Tm9kZSA9IGFyZ3VtZW50VmVyaWZpZWRBZ2FpbnN0QXJndW1lbnQ7IC8vL1xuXG4gICAgcmV0dXJuIGFyZ3VtZW50Tm9kZVZlcmlmaWVkQWdhaW5zdEFyZ3VtZW50Tm9kZTtcbiAgfVxufVxuXG5jb25zdCBzdGF0ZW1lbnRBZ2FpbnN0Q29tYmluYXRvck5vZGVzVmVyaWZpZXIgPSBuZXcgU3RhdGVtZW50QWdhaW5zdENvbWJpbmF0b3JOb2Rlc1ZlcmlmaWVyKCk7XG5cbmV4cG9ydCBkZWZhdWx0IHN0YXRlbWVudEFnYWluc3RDb21iaW5hdG9yTm9kZXNWZXJpZmllcjtcbiJdLCJuYW1lcyI6WyJhcmd1bWVudE5vZGVRdWVyeSIsIm5vZGVRdWVyeSIsIm1ldGFBcmd1bWVudE1ldGFUeXBlTm9kZVF1ZXJ5IiwibWV0YUFyZ3VtZW50U3RhdGVtZW50Tm9kZVF1ZXJ5IiwiU3RhdGVtZW50QWdhaW5zdENvbWJpbmF0b3JOb2Rlc1ZlcmlmaWVyIiwidmVyaWZ5Tm9uVGVybWluYWxOb2RlIiwibm9uVGVybWluYWxOb2RlQSIsIm5vblRlcm1pbmFsTm9kZUIiLCJsb2NhbENvbnRleHQiLCJ2ZXJpZnlBaGVhZCIsIm5vblRlcm1pbmFsTm9kZVZlcmlmaWVkIiwibm9kZVF1ZXJ5TWFwcyIsIm5vZGVRdWVyeUEiLCJub2RlUXVlcnlCIiwidmVyaWZ5Tm9kZXMiLCJub2RlQSIsIm5vZGVCIiwibWV0YUFyZ3VtZW50TWV0YVR5cGVOb2RlQiIsIm1ldGFBcmd1bWVudFN0YXRlbWVudE5vZGVBIiwibWV0YUFyZ3VtZW50U3RhdGVtZW50VmVyaWZpZWRBZ2FpbnN0TWV0YUFyZ3VtZW50TWV0YVR5cGUiLCJ2ZXJpZnlNZXRhQXJndW1lbnRTdGF0ZW1lbnRBZ2FpbnN0TWV0YUFyZ3VtZW50TWV0YVR5cGUiLCJhcmd1bWVudE5vZGVBIiwiYXJndW1lbnROb2RlQiIsImFyZ3VtZW50Tm9kZVZlcmlmaWVkQWdhaW5zdEFyZ3VtZW50Tm9kZSIsInZlcmlmeUFyZ3VtZW50Tm9kZUFnYWluc3RBcmd1bWVudE5vZGUiLCJub2Rlc1ZlcmlmaWVkIiwibWV0YVR5cGVOb2RlIiwic3RhdGVtZW50Tm9kZSIsInN0YXRlbWVudFZlcmlmaWVkQWdhaW5zdE1ldGFUeXBlIiwidmVyaWZ5U3RhdGVtZW50QWdhaW5zdE1ldGFUeXBlIiwiYXJndW1lbnRWZXJpZmllZEFnYWluc3RBcmd1bWVudCIsInZlcmlmeUFyZ3VtZW50QWdhaW5zdEFyZ3VtZW50IiwiTm9kZXNWZXJpZmllciIsInN0YXRlbWVudEFnYWluc3RDb21iaW5hdG9yTm9kZXNWZXJpZmllciJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBd0ZBOzs7ZUFBQTs7OzREQXRGMEI7OEVBQ2dCOytFQUNDO3FCQUVqQjt3QkFDRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTVCLElBQU1BLG9CQUFvQkMsSUFBQUEsZ0JBQVMsRUFBQyxlQUM5QkMsZ0NBQWdDRCxJQUFBQSxnQkFBUyxFQUFDLDRCQUMxQ0UsaUNBQWlDRixJQUFBQSxnQkFBUyxFQUFDO0FBRWpELElBQUEsQUFBTUcsd0RBQUQsQUFBTDtjQUFNQTsrQkFBQUE7YUFBQUE7Z0NBQUFBOzs7a0JBQUFBOztZQUNKQyxLQUFBQTttQkFBQUEsU0FBQUEsc0JBQXNCQyxnQkFBZ0IsRUFBRUMsZ0JBQWdCLEVBQUVDLFlBQVksRUFBRUMsV0FBVzs7Z0JBQ2pGLElBQUlDO2dCQUVKLElBQU1DLGdCQUFnQjtvQkFDcEI7d0JBQ0VDLFlBQVlUO3dCQUNaVSxZQUFZWDt3QkFDWlksYUFBYSxTQUFDQyxPQUFPQyxPQUFPUixjQUFjQzs0QkFDeEMsSUFBSUM7NEJBRUosSUFBTU8sNEJBQTRCRCxPQUM1QkUsNkJBQTZCSCxPQUM3QkksMkRBRUUsTUFBS0Msc0RBQXNELENBQUNGLDRCQUE0QkQsMkJBQTJCVCxjQUFjQzs0QkFFeklDLDBCQUEwQlMsMERBQTBELEdBQUc7NEJBRXZGLE9BQU9UO3dCQUNUO29CQUNGO29CQUNBO3dCQUNFRSxZQUFZWjt3QkFDWmEsWUFBWWI7d0JBQ1pjLGFBQWEsU0FBQ0MsT0FBT0MsT0FBT1IsY0FBY0M7NEJBQ3hDLElBQUlDOzRCQUVKLElBQU1XLGdCQUFnQk4sT0FDaEJPLGdCQUFnQk4sT0FDaEJPLDBDQUVFLE1BQUtDLHFDQUFxQyxDQUFDSCxlQUFlQyxlQUFlZCxjQUFjQzs0QkFFL0ZDLDBCQUEwQmEseUNBQXlDLEdBQUc7NEJBRXRFLE9BQU9iO3dCQUNUO29CQUNGO2lCQUNEO2dCQUVELElBQU1lLGdCQUFnQlgsSUFBQUEscUJBQVcsRUFBQ0gsZUFBZUwsa0JBQWtCQyxrQkFBa0JDLGNBQWNDO2dCQUVuR0MsMEJBQTBCZSxnQkFDRSxPQUNFLHVCQTdDNUJyQixvREE2Q2tDQyx5QkFBTixJQUFLLGFBQXVCQyxrQkFBa0JDLGtCQUFrQkMsY0FBY0M7Z0JBRTVHLE9BQU9DO1lBQ1Q7OztZQUVBVSxLQUFBQTttQkFBQUEsU0FBQUEsdURBQXVERiwwQkFBMEIsRUFBRUQseUJBQXlCLEVBQUVULFlBQVksRUFBRUMsV0FBVztnQkFDckksSUFBSVUsMkRBQTJEO2dCQUUvRCxJQUFNTyxlQUFlVCwyQkFDZlUsZ0JBQWdCVCw0QkFDaEJVLG1DQUFtQ0MsSUFBQUEsaUNBQThCLEVBQUNGLGVBQWVELGNBQWNsQixjQUFjQztnQkFFbkhVLDJEQUEyRFMsa0NBQWtDLEdBQUc7Z0JBRWhHLE9BQU9UO1lBQ1Q7OztZQUVBSyxLQUFBQTttQkFBQUEsU0FBQUEsc0NBQXNDSCxhQUFhLEVBQUVDLGFBQWEsRUFBRWQsWUFBWSxFQUFFQyxXQUFXO2dCQUMzRixJQUFJYztnQkFFSixJQUFNTyxrQ0FBa0NDLElBQUFBLGdDQUE2QixFQUFDVixlQUFlQyxlQUFlZCxjQUFjQztnQkFFbEhjLDBDQUEwQ08saUNBQWlDLEdBQUc7Z0JBRTlFLE9BQU9QO1lBQ1Q7OztXQXRFSW5CO0VBQWdENEIsY0FBYTtBQXlFbkUsSUFBTUMsMENBQTBDLElBQUk3QjtJQUVwRCxXQUFlNkIifQ==