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
var argumentNodeQuery = (0, _query.nodeQuery)("/argument!"), nonTerminalNodeQuery = (0, _query.nodeQuery)("/*"), metaArgumentMetaTypeNodeQuery = (0, _query.nodeQuery)("/metaArgument/metaType!"), metaArgumentStatementNodeQuery = (0, _query.nodeQuery)("/metaArgument/statement!");
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
                    },
                    {
                        nodeQueryA: nonTerminalNodeQuery,
                        nodeQueryB: nonTerminalNodeQuery,
                        verifyNodes: function(nodeA, nodeB, localContext, verifyAhead) {
                            var nonTerminalNodeVerified;
                            var _$nonTerminalNodeA = nodeA, _$nonTerminalNodeB = nodeB; ///
                            nonTerminalNodeVerified = _get(_get_prototype_of(StatementAgainstCombinatorNodesVerifier.prototype), "verifyNonTerminalNode", _this).call(_this, _$nonTerminalNodeA, _$nonTerminalNodeB, localContext, verifyAhead);
                            return nonTerminalNodeVerified;
                        }
                    }
                ];
                var nodesVerified = (0, _verifier.verifyNodes)(nodeQueryMaps, nonTerminalNodeA, nonTerminalNodeB, localContext, verifyAhead);
                nonTerminalNodeVerified = nodesVerified; ///
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy92ZXJpZmllci9ub2Rlcy9zdGF0ZW1lbnRBZ2FpbnN0Q29tYmluYXRvci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IE5vZGVzVmVyaWZpZXIgZnJvbSBcIi4uLy4uL3ZlcmlmaWVyL25vZGVzXCI7XG5pbXBvcnQgdmVyaWZ5QXJndW1lbnRBZ2FpbnN0QXJndW1lbnQgZnJvbSBcIi4uLy4uL3ZlcmlmeS9hcmd1bWVudEFnYWluc3RBcmd1bWVudFwiO1xuaW1wb3J0IHZlcmlmeVN0YXRlbWVudEFnYWluc3RNZXRhVHlwZSBmcm9tIFwiLi4vLi4vdmVyaWZ5L3N0YXRlbWVudEFnYWluc3RNZXRhVHlwZVwiO1xuXG5pbXBvcnQgeyBub2RlUXVlcnkgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5pbXBvcnQgeyB2ZXJpZnlOb2RlcyB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvdmVyaWZpZXJcIjtcblxuY29uc3QgYXJndW1lbnROb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvYXJndW1lbnQhXCIpLFxuICAgICAgbm9uVGVybWluYWxOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvKlwiKSxcbiAgICAgIG1ldGFBcmd1bWVudE1ldGFUeXBlTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL21ldGFBcmd1bWVudC9tZXRhVHlwZSFcIiksXG4gICAgICBtZXRhQXJndW1lbnRTdGF0ZW1lbnROb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvbWV0YUFyZ3VtZW50L3N0YXRlbWVudCFcIik7XG5cbmNsYXNzIFN0YXRlbWVudEFnYWluc3RDb21iaW5hdG9yTm9kZXNWZXJpZmllciBleHRlbmRzIE5vZGVzVmVyaWZpZXIge1xuICB2ZXJpZnlOb25UZXJtaW5hbE5vZGUobm9uVGVybWluYWxOb2RlQSwgbm9uVGVybWluYWxOb2RlQiwgbG9jYWxDb250ZXh0LCB2ZXJpZnlBaGVhZCkge1xuICAgIGxldCBub25UZXJtaW5hbE5vZGVWZXJpZmllZDtcblxuICAgIGNvbnN0IG5vZGVRdWVyeU1hcHMgPSBbXG4gICAgICB7XG4gICAgICAgIG5vZGVRdWVyeUE6IG1ldGFBcmd1bWVudFN0YXRlbWVudE5vZGVRdWVyeSxcbiAgICAgICAgbm9kZVF1ZXJ5QjogbWV0YUFyZ3VtZW50TWV0YVR5cGVOb2RlUXVlcnksXG4gICAgICAgIHZlcmlmeU5vZGVzOiAobm9kZUEsIG5vZGVCLCBsb2NhbENvbnRleHQsIHZlcmlmeUFoZWFkKSA9PiB7XG4gICAgICAgICAgbGV0IG5vblRlcm1pbmFsTm9kZVZlcmlmaWVkO1xuXG4gICAgICAgICAgY29uc3QgbWV0YUFyZ3VtZW50TWV0YVR5cGVOb2RlQiA9IG5vZGVCLCAgLy8vXG4gICAgICAgICAgICAgICAgbWV0YUFyZ3VtZW50U3RhdGVtZW50Tm9kZUEgPSBub2RlQSwgLy8vXG4gICAgICAgICAgICAgICAgbWV0YUFyZ3VtZW50U3RhdGVtZW50VmVyaWZpZWRBZ2FpbnN0TWV0YUFyZ3VtZW50TWV0YVR5cGUgPVxuXG4gICAgICAgICAgICAgICAgICB0aGlzLnZlcmlmeU1ldGFBcmd1bWVudFN0YXRlbWVudEFnYWluc3RNZXRhQXJndW1lbnRNZXRhVHlwZShtZXRhQXJndW1lbnRTdGF0ZW1lbnROb2RlQSwgbWV0YUFyZ3VtZW50TWV0YVR5cGVOb2RlQiwgbG9jYWxDb250ZXh0LCB2ZXJpZnlBaGVhZCk7XG5cbiAgICAgICAgICBub25UZXJtaW5hbE5vZGVWZXJpZmllZCA9IG1ldGFBcmd1bWVudFN0YXRlbWVudFZlcmlmaWVkQWdhaW5zdE1ldGFBcmd1bWVudE1ldGFUeXBlOyAvLy9cblxuICAgICAgICAgIHJldHVybiBub25UZXJtaW5hbE5vZGVWZXJpZmllZDtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbm9kZVF1ZXJ5QTogYXJndW1lbnROb2RlUXVlcnksXG4gICAgICAgIG5vZGVRdWVyeUI6IGFyZ3VtZW50Tm9kZVF1ZXJ5LFxuICAgICAgICB2ZXJpZnlOb2RlczogKG5vZGVBLCBub2RlQiwgbG9jYWxDb250ZXh0LCB2ZXJpZnlBaGVhZCkgPT4ge1xuICAgICAgICAgIGxldCBub25UZXJtaW5hbE5vZGVWZXJpZmllZDtcblxuICAgICAgICAgIGNvbnN0IGFyZ3VtZW50Tm9kZUEgPSBub2RlQSwgIC8vL1xuICAgICAgICAgICAgICAgIGFyZ3VtZW50Tm9kZUIgPSBub2RlQiwgIC8vL1xuICAgICAgICAgICAgICAgIGFyZ3VtZW50Tm9kZVZlcmlmaWVkQWdhaW5zdEFyZ3VtZW50Tm9kZSA9XG5cbiAgICAgICAgICAgICAgICAgIHRoaXMudmVyaWZ5QXJndW1lbnROb2RlQWdhaW5zdEFyZ3VtZW50Tm9kZShhcmd1bWVudE5vZGVBLCBhcmd1bWVudE5vZGVCLCBsb2NhbENvbnRleHQsIHZlcmlmeUFoZWFkKTtcblxuICAgICAgICAgIG5vblRlcm1pbmFsTm9kZVZlcmlmaWVkID0gYXJndW1lbnROb2RlVmVyaWZpZWRBZ2FpbnN0QXJndW1lbnROb2RlOyAvLy9cblxuICAgICAgICAgIHJldHVybiBub25UZXJtaW5hbE5vZGVWZXJpZmllZDtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbm9kZVF1ZXJ5QTogbm9uVGVybWluYWxOb2RlUXVlcnksXG4gICAgICAgIG5vZGVRdWVyeUI6IG5vblRlcm1pbmFsTm9kZVF1ZXJ5LFxuICAgICAgICB2ZXJpZnlOb2RlczogKG5vZGVBLCBub2RlQiwgbG9jYWxDb250ZXh0LCB2ZXJpZnlBaGVhZCkgPT4ge1xuICAgICAgICAgIGxldCBub25UZXJtaW5hbE5vZGVWZXJpZmllZDtcblxuICAgICAgICAgIGNvbnN0IG5vblRlcm1pbmFsTm9kZUEgPSBub2RlQSwgLy8vXG4gICAgICAgICAgICAgICAgbm9uVGVybWluYWxOb2RlQiA9IG5vZGVCOyAvLy9cblxuICAgICAgICAgIG5vblRlcm1pbmFsTm9kZVZlcmlmaWVkID1cblxuICAgICAgICAgICAgc3VwZXIudmVyaWZ5Tm9uVGVybWluYWxOb2RlKG5vblRlcm1pbmFsTm9kZUEsIG5vblRlcm1pbmFsTm9kZUIsIGxvY2FsQ29udGV4dCwgdmVyaWZ5QWhlYWQpO1xuXG4gICAgICAgICAgcmV0dXJuIG5vblRlcm1pbmFsTm9kZVZlcmlmaWVkO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgXTtcblxuICAgIGNvbnN0IG5vZGVzVmVyaWZpZWQgPSB2ZXJpZnlOb2Rlcyhub2RlUXVlcnlNYXBzLCBub25UZXJtaW5hbE5vZGVBLCBub25UZXJtaW5hbE5vZGVCLCBsb2NhbENvbnRleHQsIHZlcmlmeUFoZWFkKTtcblxuICAgIG5vblRlcm1pbmFsTm9kZVZlcmlmaWVkID0gbm9kZXNWZXJpZmllZDsgIC8vL1xuXG4gICAgcmV0dXJuIG5vblRlcm1pbmFsTm9kZVZlcmlmaWVkO1xuICB9XG5cbiAgdmVyaWZ5TWV0YUFyZ3VtZW50U3RhdGVtZW50QWdhaW5zdE1ldGFBcmd1bWVudE1ldGFUeXBlKG1ldGFBcmd1bWVudFN0YXRlbWVudE5vZGVBLCBtZXRhQXJndW1lbnRNZXRhVHlwZU5vZGVCLCBsb2NhbENvbnRleHQsIHZlcmlmeUFoZWFkKSB7XG4gICAgbGV0IG1ldGFBcmd1bWVudFN0YXRlbWVudFZlcmlmaWVkQWdhaW5zdE1ldGFBcmd1bWVudE1ldGFUeXBlID0gZmFsc2U7XG5cbiAgICBjb25zdCBtZXRhVHlwZU5vZGUgPSBtZXRhQXJndW1lbnRNZXRhVHlwZU5vZGVCLCAvLy9cbiAgICAgICAgICBzdGF0ZW1lbnROb2RlID0gbWV0YUFyZ3VtZW50U3RhdGVtZW50Tm9kZUEsICAvLy9cbiAgICAgICAgICBzdGF0ZW1lbnRWZXJpZmllZEFnYWluc3RNZXRhVHlwZSA9IHZlcmlmeVN0YXRlbWVudEFnYWluc3RNZXRhVHlwZShzdGF0ZW1lbnROb2RlLCBtZXRhVHlwZU5vZGUsIGxvY2FsQ29udGV4dCwgdmVyaWZ5QWhlYWQpO1xuXG4gICAgbWV0YUFyZ3VtZW50U3RhdGVtZW50VmVyaWZpZWRBZ2FpbnN0TWV0YUFyZ3VtZW50TWV0YVR5cGUgPSBzdGF0ZW1lbnRWZXJpZmllZEFnYWluc3RNZXRhVHlwZTsgLy8vXG5cbiAgICByZXR1cm4gbWV0YUFyZ3VtZW50U3RhdGVtZW50VmVyaWZpZWRBZ2FpbnN0TWV0YUFyZ3VtZW50TWV0YVR5cGU7XG4gIH1cblxuICB2ZXJpZnlBcmd1bWVudE5vZGVBZ2FpbnN0QXJndW1lbnROb2RlKGFyZ3VtZW50Tm9kZUEsIGFyZ3VtZW50Tm9kZUIsIGxvY2FsQ29udGV4dCwgdmVyaWZ5QWhlYWQpIHtcbiAgICBsZXQgYXJndW1lbnROb2RlVmVyaWZpZWRBZ2FpbnN0QXJndW1lbnROb2RlO1xuXG4gICAgY29uc3QgYXJndW1lbnRWZXJpZmllZEFnYWluc3RBcmd1bWVudCA9IHZlcmlmeUFyZ3VtZW50QWdhaW5zdEFyZ3VtZW50KGFyZ3VtZW50Tm9kZUEsIGFyZ3VtZW50Tm9kZUIsIGxvY2FsQ29udGV4dCwgdmVyaWZ5QWhlYWQpO1xuXG4gICAgYXJndW1lbnROb2RlVmVyaWZpZWRBZ2FpbnN0QXJndW1lbnROb2RlID0gYXJndW1lbnRWZXJpZmllZEFnYWluc3RBcmd1bWVudDsgLy8vXG5cbiAgICByZXR1cm4gYXJndW1lbnROb2RlVmVyaWZpZWRBZ2FpbnN0QXJndW1lbnROb2RlO1xuICB9XG59XG5cbmNvbnN0IHN0YXRlbWVudEFnYWluc3RDb21iaW5hdG9yTm9kZXNWZXJpZmllciA9IG5ldyBTdGF0ZW1lbnRBZ2FpbnN0Q29tYmluYXRvck5vZGVzVmVyaWZpZXIoKTtcblxuZXhwb3J0IGRlZmF1bHQgc3RhdGVtZW50QWdhaW5zdENvbWJpbmF0b3JOb2Rlc1ZlcmlmaWVyO1xuIl0sIm5hbWVzIjpbImFyZ3VtZW50Tm9kZVF1ZXJ5Iiwibm9kZVF1ZXJ5Iiwibm9uVGVybWluYWxOb2RlUXVlcnkiLCJtZXRhQXJndW1lbnRNZXRhVHlwZU5vZGVRdWVyeSIsIm1ldGFBcmd1bWVudFN0YXRlbWVudE5vZGVRdWVyeSIsIlN0YXRlbWVudEFnYWluc3RDb21iaW5hdG9yTm9kZXNWZXJpZmllciIsInZlcmlmeU5vblRlcm1pbmFsTm9kZSIsIm5vblRlcm1pbmFsTm9kZUEiLCJub25UZXJtaW5hbE5vZGVCIiwibG9jYWxDb250ZXh0IiwidmVyaWZ5QWhlYWQiLCJub25UZXJtaW5hbE5vZGVWZXJpZmllZCIsIm5vZGVRdWVyeU1hcHMiLCJub2RlUXVlcnlBIiwibm9kZVF1ZXJ5QiIsInZlcmlmeU5vZGVzIiwibm9kZUEiLCJub2RlQiIsIm1ldGFBcmd1bWVudE1ldGFUeXBlTm9kZUIiLCJtZXRhQXJndW1lbnRTdGF0ZW1lbnROb2RlQSIsIm1ldGFBcmd1bWVudFN0YXRlbWVudFZlcmlmaWVkQWdhaW5zdE1ldGFBcmd1bWVudE1ldGFUeXBlIiwidmVyaWZ5TWV0YUFyZ3VtZW50U3RhdGVtZW50QWdhaW5zdE1ldGFBcmd1bWVudE1ldGFUeXBlIiwiYXJndW1lbnROb2RlQSIsImFyZ3VtZW50Tm9kZUIiLCJhcmd1bWVudE5vZGVWZXJpZmllZEFnYWluc3RBcmd1bWVudE5vZGUiLCJ2ZXJpZnlBcmd1bWVudE5vZGVBZ2FpbnN0QXJndW1lbnROb2RlIiwibm9kZXNWZXJpZmllZCIsIm1ldGFUeXBlTm9kZSIsInN0YXRlbWVudE5vZGUiLCJzdGF0ZW1lbnRWZXJpZmllZEFnYWluc3RNZXRhVHlwZSIsInZlcmlmeVN0YXRlbWVudEFnYWluc3RNZXRhVHlwZSIsImFyZ3VtZW50VmVyaWZpZWRBZ2FpbnN0QXJndW1lbnQiLCJ2ZXJpZnlBcmd1bWVudEFnYWluc3RBcmd1bWVudCIsIk5vZGVzVmVyaWZpZXIiLCJzdGF0ZW1lbnRBZ2FpbnN0Q29tYmluYXRvck5vZGVzVmVyaWZpZXIiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQXVHQTs7O2VBQUE7Ozs0REFyRzBCOzhFQUNnQjsrRUFDQztxQkFFakI7d0JBQ0U7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUU1QixJQUFNQSxvQkFBb0JDLElB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