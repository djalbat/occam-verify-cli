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
var _termAgainstConstructor = /*#__PURE__*/ _interop_require_default(require("../../verifier/nodes/termAgainstConstructor"));
var _query = require("../../utilities/query");
var _verifier = require("../../utilities/verifier");
var _metaTypeNames = require("../../metaTypeNames");
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
var argumentNodeQuery = (0, _query.nodeQuery)("/argument!"), metaTypeTerminalNodeQuery = (0, _query.nodeQuery)("/metaType/@meta-type!"), metaArgumentMetaTypeNodeQuery = (0, _query.nodeQuery)("/metaArgument/metaType!"), metaArgumentStatementNodeQuery = (0, _query.nodeQuery)("/metaArgument/statement!");
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
                        nodeQueryA: metaArgumentStatementNodeQuery,
                        nodeQueryB: metaArgumentMetaTypeNodeQuery,
                        verifyNodes: function(nodeA, nodeB, localContext, verifyAhead) {
                            var nonTerminalNodeVerified;
                            var metaArgumentMetaTypeNodeB = nodeB, metaArgumentStatementNodeA = nodeA, metaArgumentStatementVerifiedAgainstMetaArgumentMetaType = _this.verifyMetaArgumentStatementAgainstMetaArgumentMetaType(metaArgumentStatementNodeA, metaArgumentMetaTypeNodeB, localContext, verifyAhead);
                            nonTerminalNodeVerified = metaArgumentStatementVerifiedAgainstMetaArgumentMetaType; ///
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
                var metaTypeNode = metaArgumentMetaTypeNodeB, metaTypeTerminalNode = metaTypeTerminalNodeQuery(metaTypeNode), content = metaTypeTerminalNode.getContent();
                if (content === _metaTypeNames.STATEMENT_META_TYPE_NAME) {
                    var verifiedAhead = verifyAhead();
                    metaArgumentStatementVerifiedAgainstMetaArgumentMetaType = verifiedAhead; ///
                }
                return metaArgumentStatementVerifiedAgainstMetaArgumentMetaType;
            }
        },
        {
            key: "verifyArgumentNodeAgainstArgumentNode",
            value: function verifyArgumentNodeAgainstArgumentNode(argumentNodeA, argumentNodeB, localContext, verifyAhead) {
                var argumentNodeVerifiedAgainstArgumentNode;
                var nonTerminalNodeA = argumentNodeA, nonTerminalNodeB = argumentNodeB, nonTerminalNodeVerified = _termAgainstConstructor.default.verifyNonTerminalNode(nonTerminalNodeA, nonTerminalNodeB, localContext, verifyAhead);
                argumentNodeVerifiedAgainstArgumentNode = nonTerminalNodeVerified; ///
                return argumentNodeVerifiedAgainstArgumentNode;
            }
        }
    ]);
    return StatementAgainstCombinatorNodesVerifier;
}(_nodes.default);
var statementAgainstCombinatorNodesVerifier = new StatementAgainstCombinatorNodesVerifier();
var _default = statementAgainstCombinatorNodesVerifier;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy92ZXJpZmllci9ub2Rlcy9zdGF0ZW1lbnRBZ2FpbnN0Q29tYmluYXRvci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IE5vZGVzVmVyaWZpZXIgZnJvbSBcIi4uLy4uL3ZlcmlmaWVyL25vZGVzXCI7XG5pbXBvcnQgdGVybUFnYWluc3RDb25zdHJ1Y3Rvck5vZGVzVmVyaWZpZXIgZnJvbSBcIi4uLy4uL3ZlcmlmaWVyL25vZGVzL3Rlcm1BZ2FpbnN0Q29uc3RydWN0b3JcIjtcblxuaW1wb3J0IHsgbm9kZVF1ZXJ5IH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9xdWVyeVwiO1xuaW1wb3J0IHsgdmVyaWZ5Tm9kZXMgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL3ZlcmlmaWVyXCI7XG5pbXBvcnQgeyBTVEFURU1FTlRfTUVUQV9UWVBFX05BTUUgfSBmcm9tIFwiLi4vLi4vbWV0YVR5cGVOYW1lc1wiO1xuXG5jb25zdCBhcmd1bWVudE5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9hcmd1bWVudCFcIiksXG4gICAgICBtZXRhVHlwZVRlcm1pbmFsTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL21ldGFUeXBlL0BtZXRhLXR5cGUhXCIpLFxuICAgICAgbWV0YUFyZ3VtZW50TWV0YVR5cGVOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvbWV0YUFyZ3VtZW50L21ldGFUeXBlIVwiKSxcbiAgICAgIG1ldGFBcmd1bWVudFN0YXRlbWVudE5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9tZXRhQXJndW1lbnQvc3RhdGVtZW50IVwiKTtcblxuY2xhc3MgU3RhdGVtZW50QWdhaW5zdENvbWJpbmF0b3JOb2Rlc1ZlcmlmaWVyIGV4dGVuZHMgTm9kZXNWZXJpZmllciB7XG4gIHZlcmlmeU5vblRlcm1pbmFsTm9kZShub25UZXJtaW5hbE5vZGVBLCBub25UZXJtaW5hbE5vZGVCLCBsb2NhbENvbnRleHQsIHZlcmlmeUFoZWFkKSB7XG4gICAgbGV0IG5vblRlcm1pbmFsTm9kZVZlcmlmaWVkO1xuXG4gICAgY29uc3Qgbm9kZVF1ZXJ5TWFwcyA9IFtcbiAgICAgIHtcbiAgICAgICAgbm9kZVF1ZXJ5QTogYXJndW1lbnROb2RlUXVlcnksXG4gICAgICAgIG5vZGVRdWVyeUI6IGFyZ3VtZW50Tm9kZVF1ZXJ5LFxuICAgICAgICB2ZXJpZnlOb2RlczogKG5vZGVBLCBub2RlQiwgbG9jYWxDb250ZXh0LCB2ZXJpZnlBaGVhZCkgPT4ge1xuICAgICAgICAgIGxldCBub25UZXJtaW5hbE5vZGVWZXJpZmllZDtcblxuICAgICAgICAgIGNvbnN0IGFyZ3VtZW50Tm9kZUEgPSBub2RlQSwgIC8vL1xuICAgICAgICAgICAgICAgIGFyZ3VtZW50Tm9kZUIgPSBub2RlQiwgIC8vL1xuICAgICAgICAgICAgICAgIGFyZ3VtZW50Tm9kZVZlcmlmaWVkQWdhaW5zdEFyZ3VtZW50Tm9kZSA9XG5cbiAgICAgICAgICAgICAgICAgIHRoaXMudmVyaWZ5QXJndW1lbnROb2RlQWdhaW5zdEFyZ3VtZW50Tm9kZShhcmd1bWVudE5vZGVBLCBhcmd1bWVudE5vZGVCLCBsb2NhbENvbnRleHQsIHZlcmlmeUFoZWFkKTtcblxuICAgICAgICAgIG5vblRlcm1pbmFsTm9kZVZlcmlmaWVkID0gYXJndW1lbnROb2RlVmVyaWZpZWRBZ2FpbnN0QXJndW1lbnROb2RlOyAvLy9cblxuICAgICAgICAgIHJldHVybiBub25UZXJtaW5hbE5vZGVWZXJpZmllZDtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbm9kZVF1ZXJ5QTogbWV0YUFyZ3VtZW50U3RhdGVtZW50Tm9kZVF1ZXJ5LFxuICAgICAgICBub2RlUXVlcnlCOiBtZXRhQXJndW1lbnRNZXRhVHlwZU5vZGVRdWVyeSxcbiAgICAgICAgdmVyaWZ5Tm9kZXM6IChub2RlQSwgbm9kZUIsIGxvY2FsQ29udGV4dCwgdmVyaWZ5QWhlYWQpID0+IHtcbiAgICAgICAgICBsZXQgbm9uVGVybWluYWxOb2RlVmVyaWZpZWQ7XG5cbiAgICAgICAgICBjb25zdCBtZXRhQXJndW1lbnRNZXRhVHlwZU5vZGVCID0gbm9kZUIsICAvLy9cbiAgICAgICAgICAgICAgICBtZXRhQXJndW1lbnRTdGF0ZW1lbnROb2RlQSA9IG5vZGVBLCAvLy9cbiAgICAgICAgICAgICAgICBtZXRhQXJndW1lbnRTdGF0ZW1lbnRWZXJpZmllZEFnYWluc3RNZXRhQXJndW1lbnRNZXRhVHlwZSA9XG5cbiAgICAgICAgICAgICAgICAgIHRoaXMudmVyaWZ5TWV0YUFyZ3VtZW50U3RhdGVtZW50QWdhaW5zdE1ldGFBcmd1bWVudE1ldGFUeXBlKG1ldGFBcmd1bWVudFN0YXRlbWVudE5vZGVBLCBtZXRhQXJndW1lbnRNZXRhVHlwZU5vZGVCLCBsb2NhbENvbnRleHQsIHZlcmlmeUFoZWFkKTtcblxuICAgICAgICAgIG5vblRlcm1pbmFsTm9kZVZlcmlmaWVkID0gbWV0YUFyZ3VtZW50U3RhdGVtZW50VmVyaWZpZWRBZ2FpbnN0TWV0YUFyZ3VtZW50TWV0YVR5cGU7IC8vL1xuXG4gICAgICAgICAgcmV0dXJuIG5vblRlcm1pbmFsTm9kZVZlcmlmaWVkO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgXTtcblxuICAgIGNvbnN0IG5vZGVzVmVyaWZpZWQgPSB2ZXJpZnlOb2Rlcyhub2RlUXVlcnlNYXBzLCBub25UZXJtaW5hbE5vZGVBLCBub25UZXJtaW5hbE5vZGVCLCBsb2NhbENvbnRleHQsIHZlcmlmeUFoZWFkKTtcblxuICAgIG5vblRlcm1pbmFsTm9kZVZlcmlmaWVkID0gbm9kZXNWZXJpZmllZCA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRydWUgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN1cGVyLnZlcmlmeU5vblRlcm1pbmFsTm9kZShub25UZXJtaW5hbE5vZGVBLCBub25UZXJtaW5hbE5vZGVCLCBsb2NhbENvbnRleHQsIHZlcmlmeUFoZWFkKTtcblxuICAgIHJldHVybiBub25UZXJtaW5hbE5vZGVWZXJpZmllZDtcbiAgfVxuXG4gIHZlcmlmeU1ldGFBcmd1bWVudFN0YXRlbWVudEFnYWluc3RNZXRhQXJndW1lbnRNZXRhVHlwZShtZXRhQXJndW1lbnRTdGF0ZW1lbnROb2RlQSwgbWV0YUFyZ3VtZW50TWV0YVR5cGVOb2RlQiwgbG9jYWxDb250ZXh0LCB2ZXJpZnlBaGVhZCkge1xuICAgIGxldCBtZXRhQXJndW1lbnRTdGF0ZW1lbnRWZXJpZmllZEFnYWluc3RNZXRhQXJndW1lbnRNZXRhVHlwZSA9IGZhbHNlO1xuXG4gICAgY29uc3QgbWV0YVR5cGVOb2RlID0gbWV0YUFyZ3VtZW50TWV0YVR5cGVOb2RlQiwgLy8vXG4gICAgICAgICAgbWV0YVR5cGVUZXJtaW5hbE5vZGUgPSBtZXRhVHlwZVRlcm1pbmFsTm9kZVF1ZXJ5KG1ldGFUeXBlTm9kZSksXG4gICAgICAgICAgY29udGVudCA9IG1ldGFUeXBlVGVybWluYWxOb2RlLmdldENvbnRlbnQoKTtcblxuICAgIGlmIChjb250ZW50ID09PSBTVEFURU1FTlRfTUVUQV9UWVBFX05BTUUpIHtcbiAgICAgIGNvbnN0IHZlcmlmaWVkQWhlYWQgPSB2ZXJpZnlBaGVhZCgpO1xuXG4gICAgICBtZXRhQXJndW1lbnRTdGF0ZW1lbnRWZXJpZmllZEFnYWluc3RNZXRhQXJndW1lbnRNZXRhVHlwZSA9IHZlcmlmaWVkQWhlYWQ7IC8vL1xuICAgIH1cblxuICAgIHJldHVybiBtZXRhQXJndW1lbnRTdGF0ZW1lbnRWZXJpZmllZEFnYWluc3RNZXRhQXJndW1lbnRNZXRhVHlwZTtcbiAgfVxuXG4gIHZlcmlmeUFyZ3VtZW50Tm9kZUFnYWluc3RBcmd1bWVudE5vZGUoYXJndW1lbnROb2RlQSwgYXJndW1lbnROb2RlQiwgbG9jYWxDb250ZXh0LCB2ZXJpZnlBaGVhZCkge1xuICAgIGxldCBhcmd1bWVudE5vZGVWZXJpZmllZEFnYWluc3RBcmd1bWVudE5vZGU7XG5cbiAgICBjb25zdCBub25UZXJtaW5hbE5vZGVBID0gYXJndW1lbnROb2RlQSwgLy8vXG4gICAgICAgICAgbm9uVGVybWluYWxOb2RlQiA9IGFyZ3VtZW50Tm9kZUIsIC8vL1xuICAgICAgICAgIG5vblRlcm1pbmFsTm9kZVZlcmlmaWVkID0gdGVybUFnYWluc3RDb25zdHJ1Y3Rvck5vZGVzVmVyaWZpZXIudmVyaWZ5Tm9uVGVybWluYWxOb2RlKG5vblRlcm1pbmFsTm9kZUEsIG5vblRlcm1pbmFsTm9kZUIsIGxvY2FsQ29udGV4dCwgdmVyaWZ5QWhlYWQpO1xuXG4gICAgYXJndW1lbnROb2RlVmVyaWZpZWRBZ2FpbnN0QXJndW1lbnROb2RlID0gbm9uVGVybWluYWxOb2RlVmVyaWZpZWQ7IC8vL1xuXG4gICAgcmV0dXJuIGFyZ3VtZW50Tm9kZVZlcmlmaWVkQWdhaW5zdEFyZ3VtZW50Tm9kZTtcbiAgfVxufVxuXG5jb25zdCBzdGF0ZW1lbnRBZ2FpbnN0Q29tYmluYXRvck5vZGVzVmVyaWZpZXIgPSBuZXcgU3RhdGVtZW50QWdhaW5zdENvbWJpbmF0b3JOb2Rlc1ZlcmlmaWVyKCk7XG5cbmV4cG9ydCBkZWZhdWx0IHN0YXRlbWVudEFnYWluc3RDb21iaW5hdG9yTm9kZXNWZXJpZmllcjtcbiJdLCJuYW1lcyI6WyJhcmd1bWVudE5vZGVRdWVyeSIsIm5vZGVRdWVyeSIsIm1ldGFUeXBlVGVybWluYWxOb2RlUXVlcnkiLCJtZXRhQXJndW1lbnRNZXRhVHlwZU5vZGVRdWVyeSIsIm1ldGFBcmd1bWVudFN0YXRlbWVudE5vZGVRdWVyeSIsIlN0YXRlbWVudEFnYWluc3RDb21iaW5hdG9yTm9kZXNWZXJpZmllciIsInZlcmlmeU5vblRlcm1pbmFsTm9kZSIsIm5vblRlcm1pbmFsTm9kZUEiLCJub25UZXJtaW5hbE5vZGVCIiwibG9jYWxDb250ZXh0IiwidmVyaWZ5QWhlYWQiLCJub25UZXJtaW5hbE5vZGVWZXJpZmllZCIsIm5vZGVRdWVyeU1hcHMiLCJub2RlUXVlcnlBIiwibm9kZVF1ZXJ5QiIsInZlcmlmeU5vZGVzIiwibm9kZUEiLCJub2RlQiIsImFyZ3VtZW50Tm9kZUEiLCJhcmd1bWVudE5vZGVCIiwiYXJndW1lbnROb2RlVmVyaWZpZWRBZ2FpbnN0QXJndW1lbnROb2RlIiwidmVyaWZ5QXJndW1lbnROb2RlQWdhaW5zdEFyZ3VtZW50Tm9kZSIsIm1ldGFBcmd1bWVudE1ldGFUeXBlTm9kZUIiLCJtZXRhQXJndW1lbnRTdGF0ZW1lbnROb2RlQSIsIm1ldGFBcmd1bWVudFN0YXRlbWVudFZlcmlmaWVkQWdhaW5zdE1ldGFBcmd1bWVudE1ldGFUeXBlIiwidmVyaWZ5TWV0YUFyZ3VtZW50U3RhdGVtZW50QWdhaW5zdE1ldGFBcmd1bWVudE1ldGFUeXBlIiwibm9kZXNWZXJpZmllZCIsIm1ldGFUeXBlTm9kZSIsIm1ldGFUeXBlVGVybWluYWxOb2RlIiwiY29udGVudCIsImdldENvbnRlbnQiLCJTVEFURU1FTlRfTUVUQV9UWVBFX05BTUUiLCJ2ZXJpZmllZEFoZWFkIiwidGVybUFnYWluc3RDb25zdHJ1Y3Rvck5vZGVzVmVyaWZpZXIiLCJOb2Rlc1ZlcmlmaWVyIiwic3RhdGVtZW50QWdhaW5zdENvbWJpbmF0b3JOb2Rlc1ZlcmlmaWVyIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkErRkE7OztlQUFBOzs7NERBN0YwQjs2RUFDc0I7cUJBRXRCO3dCQUNFOzZCQUNhOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFekMsSUFBTUEsb0JBQW9CQyxJQUFBQSxnQkFBUyxFQUFDLGVBQzlCQyw0QkFBNEJELElBQUFBLGdCQUFTLEVBQUMsMEJBQ3RDRSxnQ0FBZ0NGLElBQUFBLGdCQUFTLEVBQUMsNEJBQzFDRyxpQ0FBaUNILElBQUFBLGdCQUFTLEVBQUM7QUFFakQsSUFBQSxBQUFNSSx3REFBRCxBQUFMO2NBQU1BOytCQUFBQTthQUFBQTtnQ0FBQUE7OztrQkFBQUE7O1lBQ0pDLEtBQUFBO21CQUFBQSxTQUFBQSxzQkFBc0JDLGdCQUFnQixFQUFFQyxnQkFBZ0IsRUFBRUMsWUFBWSxFQUFFQyxXQUFXOztnQkFDakYsSUFBSUM7Z0JBRUosSUFBTUMsZ0JBQWdCO29CQUNwQjt3QkFDRUMsWUFBWWI7d0JBQ1pjLFlBQVlkO3dCQUNaZSxhQUFhLFNBQUNDLE9BQU9DLE9BQU9SLGNBQWNDOzRCQUN4QyxJQUFJQzs0QkFFSixJQUFNTyxnQkFBZ0JGLE9BQ2hCRyxnQkFBZ0JGLE9BQ2hCRywwQ0FFRSxNQUFLQyxxQ0FBcUMsQ0FBQ0gsZUFBZUMsZUFBZVYsY0FBY0M7NEJBRS9GQywwQkFBMEJTLHlDQUF5QyxHQUFHOzRCQUV0RSxPQUFPVDt3QkFDVDtvQkFDRjtvQkFDQTt3QkFDRUUsWUFBWVQ7d0JBQ1pVLFlBQVlYO3dCQUNaWSxhQUFhLFNBQUNDLE9BQU9DLE9BQU9SLGNBQWNDOzRCQUN4QyxJQUFJQzs0QkFFSixJQUFNVyw0QkFBNEJMLE9BQzVCTSw2QkFBNkJQLE9BQzdCUSwyREFFRSxNQUFLQyxzREFBc0QsQ0FBQ0YsNEJBQTRCRCwyQkFBMkJiLGNBQWNDOzRCQUV6SUMsMEJBQTBCYSwwREFBMEQsR0FBRzs0QkFFdkYsT0FBT2I7d0JBQ1Q7b0JBQ0Y7aUJBQ0Q7Z0JBRUQsSUFBTWUsZ0JBQWdCWCxJQUFBQSxxQkFBVyxFQUFDSCxlQUFlTCxrQkFBa0JDLGtCQUFrQkMsY0FBY0M7Z0JBRW5HQywwQkFBMEJlLGdCQUNFLE9BQ0UsdUJBN0M1QnJCLG9EQTZDa0NDLHlCQUFOLElBQUssYUFBdUJDLGtCQUFrQkMsa0JBQWtCQyxjQUFjQztnQkFFNUcsT0FBT0M7WUFDVDs7O1lBRUFjLEtBQUFBO21CQUFBQSxTQUFBQSx1REFBdURGLDBCQUEwQixFQUFFRCx5QkFBeUIsRUFBRWIsWUFBWSxFQUFFQyxXQUFXO2dCQUNySSxJQUFJYywyREFBMkQ7Z0JBRS9ELElBQU1HLGVBQWVMLDJCQUNmTSx1QkFBdUIxQiwwQkFBMEJ5QixlQUNqREUsVUFBVUQscUJBQXFCRSxVQUFVO2dCQUUvQyxJQUFJRCxZQUFZRSx1Q0FBd0IsRUFBRTtvQkFDeEMsSUFBTUMsZ0JBQWdCdEI7b0JBRXRCYywyREFBMkRRLGVBQWUsR0FBRztnQkFDL0U7Z0JBRUEsT0FBT1I7WUFDVDs7O1lBRUFILEtBQUFBO21CQUFBQSxTQUFBQSxzQ0FBc0NILGFBQWEsRUFBRUMsYUFBYSxFQUFFVixZQUFZLEVBQUVDLFdBQVc7Z0JBQzNGLElBQUlVO2dCQUVKLElBQU1iLG1CQUFtQlcsZUFDbkJWLG1CQUFtQlcsZUFDbkJSLDBCQUEwQnNCLCtCQUFtQyxDQUFDM0IscUJBQXFCLENBQUNDLGtCQUFrQkMsa0JBQWtCQyxjQUFjQztnQkFFNUlVLDBDQUEwQ1QseUJBQXlCLEdBQUc7Z0JBRXRFLE9BQU9TO1lBQ1Q7OztXQTVFSWY7RUFBZ0Q2QixjQUFhO0FBK0VuRSxJQUFNQywwQ0FBMEMsSUFBSTlCO0lBRXBELFdBQWU4QiJ9