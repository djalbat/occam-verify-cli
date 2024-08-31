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
                        verifyNodes: function(nodeA, nodeB, substitutions, localMetaContextA, localMetaContextB, verifyAhead) {
                            var nonTerminalNodeVerified;
                            var _$nonTerminalNodeA = nodeA, _$nonTerminalNodeB = nodeB; ///
                            nonTerminalNodeVerified = _get(_get_prototype_of(StatementAgainstCombinatorNodesVerifier.prototype), "verifyNonTerminalNode", _this).call(_this, _$nonTerminalNodeA, _$nonTerminalNodeB, substitutions, localMetaContextA, localMetaContextB, verifyAhead);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy92ZXJpZmllci9ub2Rlcy9zdGF0ZW1lbnRBZ2FpbnN0Q29tYmluYXRvci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IE5vZGVzVmVyaWZpZXIgZnJvbSBcIi4uLy4uL3ZlcmlmaWVyL25vZGVzXCI7XG5pbXBvcnQgdmVyaWZ5QXJndW1lbnRBZ2FpbnN0QXJndW1lbnQgZnJvbSBcIi4uLy4uL3ZlcmlmeS9hcmd1bWVudEFnYWluc3RBcmd1bWVudFwiO1xuaW1wb3J0IHZlcmlmeVN0YXRlbWVudEFnYWluc3RNZXRhVHlwZSBmcm9tIFwiLi4vLi4vdmVyaWZ5L3N0YXRlbWVudEFnYWluc3RNZXRhVHlwZVwiO1xuXG5pbXBvcnQgeyBub2RlUXVlcnkgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5pbXBvcnQgeyB2ZXJpZnlOb2RlcyB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvdmVyaWZpZXJcIjtcblxuY29uc3QgYXJndW1lbnROb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvYXJndW1lbnQhXCIpLFxuICAgICAgbm9uVGVybWluYWxOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvKlwiKSxcbiAgICAgIG1ldGFBcmd1bWVudE1ldGFUeXBlTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL21ldGFBcmd1bWVudC9tZXRhVHlwZSFcIiksXG4gICAgICBtZXRhQXJndW1lbnRTdGF0ZW1lbnROb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvbWV0YUFyZ3VtZW50L3N0YXRlbWVudCFcIik7XG5cbmNsYXNzIFN0YXRlbWVudEFnYWluc3RDb21iaW5hdG9yTm9kZXNWZXJpZmllciBleHRlbmRzIE5vZGVzVmVyaWZpZXIge1xuICB2ZXJpZnlOb25UZXJtaW5hbE5vZGUobm9uVGVybWluYWxOb2RlQSwgbm9uVGVybWluYWxOb2RlQiwgbG9jYWxDb250ZXh0LCB2ZXJpZnlBaGVhZCkge1xuICAgIGxldCBub25UZXJtaW5hbE5vZGVWZXJpZmllZDtcblxuICAgIGNvbnN0IG5vZGVRdWVyeU1hcHMgPSBbXG4gICAgICB7XG4gICAgICAgIG5vZGVRdWVyeUE6IG1ldGFBcmd1bWVudFN0YXRlbWVudE5vZGVRdWVyeSxcbiAgICAgICAgbm9kZVF1ZXJ5QjogbWV0YUFyZ3VtZW50TWV0YVR5cGVOb2RlUXVlcnksXG4gICAgICAgIHZlcmlmeU5vZGVzOiAobm9kZUEsIG5vZGVCLCBsb2NhbENvbnRleHQsIHZlcmlmeUFoZWFkKSA9PiB7XG4gICAgICAgICAgbGV0IG5vblRlcm1pbmFsTm9kZVZlcmlmaWVkO1xuXG4gICAgICAgICAgY29uc3QgbWV0YUFyZ3VtZW50TWV0YVR5cGVOb2RlQiA9IG5vZGVCLCAgLy8vXG4gICAgICAgICAgICAgICAgbWV0YUFyZ3VtZW50U3RhdGVtZW50Tm9kZUEgPSBub2RlQSwgLy8vXG4gICAgICAgICAgICAgICAgbWV0YUFyZ3VtZW50U3RhdGVtZW50VmVyaWZpZWRBZ2FpbnN0TWV0YUFyZ3VtZW50TWV0YVR5cGUgPVxuXG4gICAgICAgICAgICAgICAgICB0aGlzLnZlcmlmeU1ldGFBcmd1bWVudFN0YXRlbWVudEFnYWluc3RNZXRhQXJndW1lbnRNZXRhVHlwZShtZXRhQXJndW1lbnRTdGF0ZW1lbnROb2RlQSwgbWV0YUFyZ3VtZW50TWV0YVR5cGVOb2RlQiwgbG9jYWxDb250ZXh0LCB2ZXJpZnlBaGVhZCk7XG5cbiAgICAgICAgICBub25UZXJtaW5hbE5vZGVWZXJpZmllZCA9IG1ldGFBcmd1bWVudFN0YXRlbWVudFZlcmlmaWVkQWdhaW5zdE1ldGFBcmd1bWVudE1ldGFUeXBlOyAvLy9cblxuICAgICAgICAgIHJldHVybiBub25UZXJtaW5hbE5vZGVWZXJpZmllZDtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbm9kZVF1ZXJ5QTogYXJndW1lbnROb2RlUXVlcnksXG4gICAgICAgIG5vZGVRdWVyeUI6IGFyZ3VtZW50Tm9kZVF1ZXJ5LFxuICAgICAgICB2ZXJpZnlOb2RlczogKG5vZGVBLCBub2RlQiwgbG9jYWxDb250ZXh0LCB2ZXJpZnlBaGVhZCkgPT4ge1xuICAgICAgICAgIGxldCBub25UZXJtaW5hbE5vZGVWZXJpZmllZDtcblxuICAgICAgICAgIGNvbnN0IGFyZ3VtZW50Tm9kZUEgPSBub2RlQSwgIC8vL1xuICAgICAgICAgICAgICAgIGFyZ3VtZW50Tm9kZUIgPSBub2RlQiwgIC8vL1xuICAgICAgICAgICAgICAgIGFyZ3VtZW50Tm9kZVZlcmlmaWVkQWdhaW5zdEFyZ3VtZW50Tm9kZSA9XG5cbiAgICAgICAgICAgICAgICAgIHRoaXMudmVyaWZ5QXJndW1lbnROb2RlQWdhaW5zdEFyZ3VtZW50Tm9kZShhcmd1bWVudE5vZGVBLCBhcmd1bWVudE5vZGVCLCBsb2NhbENvbnRleHQsIHZlcmlmeUFoZWFkKTtcblxuICAgICAgICAgIG5vblRlcm1pbmFsTm9kZVZlcmlmaWVkID0gYXJndW1lbnROb2RlVmVyaWZpZWRBZ2FpbnN0QXJndW1lbnROb2RlOyAvLy9cblxuICAgICAgICAgIHJldHVybiBub25UZXJtaW5hbE5vZGVWZXJpZmllZDtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbm9kZVF1ZXJ5QTogbm9uVGVybWluYWxOb2RlUXVlcnksXG4gICAgICAgIG5vZGVRdWVyeUI6IG5vblRlcm1pbmFsTm9kZVF1ZXJ5LFxuICAgICAgICB2ZXJpZnlOb2RlczogKG5vZGVBLCBub2RlQiwgc3Vic3RpdHV0aW9ucywgbG9jYWxNZXRhQ29udGV4dEEsIGxvY2FsTWV0YUNvbnRleHRCLCB2ZXJpZnlBaGVhZCkgPT4ge1xuICAgICAgICAgIGxldCBub25UZXJtaW5hbE5vZGVWZXJpZmllZDtcblxuICAgICAgICAgIGNvbnN0IG5vblRlcm1pbmFsTm9kZUEgPSBub2RlQSwgLy8vXG4gICAgICAgICAgICAgICBub25UZXJtaW5hbE5vZGVCID0gbm9kZUI7IC8vL1xuXG4gICAgICAgICAgbm9uVGVybWluYWxOb2RlVmVyaWZpZWQgPVxuXG4gICAgICAgICAgICBzdXBlci52ZXJpZnlOb25UZXJtaW5hbE5vZGUobm9uVGVybWluYWxOb2RlQSwgbm9uVGVybWluYWxOb2RlQiwgc3Vic3RpdHV0aW9ucywgbG9jYWxNZXRhQ29udGV4dEEsIGxvY2FsTWV0YUNvbnRleHRCLCB2ZXJpZnlBaGVhZCk7XG5cbiAgICAgICAgICByZXR1cm4gbm9uVGVybWluYWxOb2RlVmVyaWZpZWQ7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICBdO1xuXG4gICAgY29uc3Qgbm9kZXNWZXJpZmllZCA9IHZlcmlmeU5vZGVzKG5vZGVRdWVyeU1hcHMsIG5vblRlcm1pbmFsTm9kZUEsIG5vblRlcm1pbmFsTm9kZUIsIGxvY2FsQ29udGV4dCwgdmVyaWZ5QWhlYWQpO1xuXG4gICAgbm9uVGVybWluYWxOb2RlVmVyaWZpZWQgPSBub2Rlc1ZlcmlmaWVkOyAgLy8vXG5cbiAgICByZXR1cm4gbm9uVGVybWluYWxOb2RlVmVyaWZpZWQ7XG4gIH1cblxuICB2ZXJpZnlNZXRhQXJndW1lbnRTdGF0ZW1lbnRBZ2FpbnN0TWV0YUFyZ3VtZW50TWV0YVR5cGUobWV0YUFyZ3VtZW50U3RhdGVtZW50Tm9kZUEsIG1ldGFBcmd1bWVudE1ldGFUeXBlTm9kZUIsIGxvY2FsQ29udGV4dCwgdmVyaWZ5QWhlYWQpIHtcbiAgICBsZXQgbWV0YUFyZ3VtZW50U3RhdGVtZW50VmVyaWZpZWRBZ2FpbnN0TWV0YUFyZ3VtZW50TWV0YVR5cGUgPSBmYWxzZTtcblxuICAgIGNvbnN0IG1ldGFUeXBlTm9kZSA9IG1ldGFBcmd1bWVudE1ldGFUeXBlTm9kZUIsIC8vL1xuICAgICAgICAgIHN0YXRlbWVudE5vZGUgPSBtZXRhQXJndW1lbnRTdGF0ZW1lbnROb2RlQSwgIC8vL1xuICAgICAgICAgIHN0YXRlbWVudFZlcmlmaWVkQWdhaW5zdE1ldGFUeXBlID0gdmVyaWZ5U3RhdGVtZW50QWdhaW5zdE1ldGFUeXBlKHN0YXRlbWVudE5vZGUsIG1ldGFUeXBlTm9kZSwgbG9jYWxDb250ZXh0LCB2ZXJpZnlBaGVhZCk7XG5cbiAgICBtZXRhQXJndW1lbnRTdGF0ZW1lbnRWZXJpZmllZEFnYWluc3RNZXRhQXJndW1lbnRNZXRhVHlwZSA9IHN0YXRlbWVudFZlcmlmaWVkQWdhaW5zdE1ldGFUeXBlOyAvLy9cblxuICAgIHJldHVybiBtZXRhQXJndW1lbnRTdGF0ZW1lbnRWZXJpZmllZEFnYWluc3RNZXRhQXJndW1lbnRNZXRhVHlwZTtcbiAgfVxuXG4gIHZlcmlmeUFyZ3VtZW50Tm9kZUFnYWluc3RBcmd1bWVudE5vZGUoYXJndW1lbnROb2RlQSwgYXJndW1lbnROb2RlQiwgbG9jYWxDb250ZXh0LCB2ZXJpZnlBaGVhZCkge1xuICAgIGxldCBhcmd1bWVudE5vZGVWZXJpZmllZEFnYWluc3RBcmd1bWVudE5vZGU7XG5cbiAgICBjb25zdCBhcmd1bWVudFZlcmlmaWVkQWdhaW5zdEFyZ3VtZW50ID0gdmVyaWZ5QXJndW1lbnRBZ2FpbnN0QXJndW1lbnQoYXJndW1lbnROb2RlQSwgYXJndW1lbnROb2RlQiwgbG9jYWxDb250ZXh0LCB2ZXJpZnlBaGVhZCk7XG5cbiAgICBhcmd1bWVudE5vZGVWZXJpZmllZEFnYWluc3RBcmd1bWVudE5vZGUgPSBhcmd1bWVudFZlcmlmaWVkQWdhaW5zdEFyZ3VtZW50OyAvLy9cblxuICAgIHJldHVybiBhcmd1bWVudE5vZGVWZXJpZmllZEFnYWluc3RBcmd1bWVudE5vZGU7XG4gIH1cbn1cblxuY29uc3Qgc3RhdGVtZW50QWdhaW5zdENvbWJpbmF0b3JOb2Rlc1ZlcmlmaWVyID0gbmV3IFN0YXRlbWVudEFnYWluc3RDb21iaW5hdG9yTm9kZXNWZXJpZmllcigpO1xuXG5leHBvcnQgZGVmYXVsdCBzdGF0ZW1lbnRBZ2FpbnN0Q29tYmluYXRvck5vZGVzVmVyaWZpZXI7XG4iXSwibmFtZXMiOlsiYXJndW1lbnROb2RlUXVlcnkiLCJub2RlUXVlcnkiLCJub25UZXJtaW5hbE5vZGVRdWVyeSIsIm1ldGFBcmd1bWVudE1ldGFUeXBlTm9kZVF1ZXJ5IiwibWV0YUFyZ3VtZW50U3RhdGVtZW50Tm9kZVF1ZXJ5IiwiU3RhdGVtZW50QWdhaW5zdENvbWJpbmF0b3JOb2Rlc1ZlcmlmaWVyIiwidmVyaWZ5Tm9uVGVybWluYWxOb2RlIiwibm9uVGVybWluYWxOb2RlQSIsIm5vblRlcm1pbmFsTm9kZUIiLCJsb2NhbENvbnRleHQiLCJ2ZXJpZnlBaGVhZCIsIm5vblRlcm1pbmFsTm9kZVZlcmlmaWVkIiwibm9kZVF1ZXJ5TWFwcyIsIm5vZGVRdWVyeUEiLCJub2RlUXVlcnlCIiwidmVyaWZ5Tm9kZXMiLCJub2RlQSIsIm5vZGVCIiwibWV0YUFyZ3VtZW50TWV0YVR5cGVOb2RlQiIsIm1ldGFBcmd1bWVudFN0YXRlbWVudE5vZGVBIiwibWV0YUFyZ3VtZW50U3RhdGVtZW50VmVyaWZpZWRBZ2FpbnN0TWV0YUFyZ3VtZW50TWV0YVR5cGUiLCJ2ZXJpZnlNZXRhQXJndW1lbnRTdGF0ZW1lbnRBZ2FpbnN0TWV0YUFyZ3VtZW50TWV0YVR5cGUiLCJhcmd1bWVudE5vZGVBIiwiYXJndW1lbnROb2RlQiIsImFyZ3VtZW50Tm9kZVZlcmlmaWVkQWdhaW5zdEFyZ3VtZW50Tm9kZSIsInZlcmlmeUFyZ3VtZW50Tm9kZUFnYWluc3RBcmd1bWVudE5vZGUiLCJzdWJzdGl0dXRpb25zIiwibG9jYWxNZXRhQ29udGV4dEEiLCJsb2NhbE1ldGFDb250ZXh0QiIsIm5vZGVzVmVyaWZpZWQiLCJtZXRhVHlwZU5vZGUiLCJzdGF0ZW1lbnROb2RlIiwic3RhdGVtZW50VmVyaWZpZWRBZ2FpbnN0TWV0YVR5cGUiLCJ2ZXJpZnlTdGF0ZW1lbnRBZ2FpbnN0TWV0YVR5cGUiLCJhcmd1bWVudFZlcmlmaWVkQWdhaW5zdEFyZ3VtZW50IiwidmVyaWZ5QXJndW1lbnRBZ2FpbnN0QXJndW1lbnQiLCJOb2Rlc1ZlcmlmaWVyIiwic3RhdGVtZW50QWdhaW5zdENvbWJpbmF0b3JOb2Rlc1ZlcmlmaWVyIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkF1R0E7OztlQUFBOzs7NERBckcwQjs4RUFDZ0I7K0VBQ0M7cUJBRWpCO3dCQUNFOzs7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