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
var _variableAgainstTerm = /*#__PURE__*/ _interop_require_default(require("../../verify/variableAgainstTerm"));
var _metavariableAgainstStatement = /*#__PURE__*/ _interop_require_default(require("../../verify/metavariableAgainstStatement"));
var _query = require("../../utilities/query");
var _verifier = require("../../utilities/verifier");
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
var termNodeQuery = (0, _query.nodeQuery)("/term!"), nonTerminalNodeQuery = (0, _query.nodeQuery)("/*"), statementNodeQuery = (0, _query.nodeQuery)("/statement!"), termVariableNodeQuery = (0, _query.nodeQuery)("/term/variable!"), statementMetavariableNodeQuery = (0, _query.nodeQuery)("/statement/metavariable!");
var MetaLevelNodesVerifier = /*#__PURE__*/ function(NodesVerifier) {
    _inherits(MetaLevelNodesVerifier, NodesVerifier);
    function MetaLevelNodesVerifier() {
        _class_call_check(this, MetaLevelNodesVerifier);
        return _call_super(this, MetaLevelNodesVerifier, arguments);
    }
    _create_class(MetaLevelNodesVerifier, [
        {
            key: "verifyNonTerminalNode",
            value: function verifyNonTerminalNode(nonTerminalNodeA, nonTerminalNodeB, substitutions, localMetaContextA, localMetaContextB, verifyAhead) {
                var _this = this;
                var nonTerminalNodeVerified;
                var nodeQueryMaps = [
                    {
                        nodeQueryA: statementMetavariableNodeQuery,
                        nodeQueryB: statementNodeQuery,
                        verifyNodes: function(nodeA, nodeB, substitutions, localMetaContextA, localMetaContextB, verifyAhead) {
                            var nonTerminalNodeVerified;
                            var statementNodeB = nodeB, statementMetavariableNodeA = nodeA, statementMetavariableNodeVerifiedAgainstStatementNode = _this.verifyStatementMetavariableNodeAgainstStatementNode(statementMetavariableNodeA, statementNodeB, substitutions, localMetaContextA, localMetaContextB, verifyAhead);
                            nonTerminalNodeVerified = statementMetavariableNodeVerifiedAgainstStatementNode; ///
                            return nonTerminalNodeVerified;
                        }
                    },
                    {
                        nodeQueryA: termVariableNodeQuery,
                        nodeQueryB: termNodeQuery,
                        verifyNodes: function(nodeA, nodeB, substitutions, localContextA, localContextB, verifyAhead) {
                            var nonTerminalNodeVerified;
                            var termNodeB = nodeB, termVariableNodeA = nodeA, termVariableNodeVerifiedAgainstTermNode = _this.verifyTermVariableNodeAgainstTermNode(termVariableNodeA, termNodeB, substitutions, localContextA, localContextB, verifyAhead);
                            nonTerminalNodeVerified = termVariableNodeVerifiedAgainstTermNode; ///
                            return nonTerminalNodeVerified;
                        }
                    },
                    {
                        nodeQueryA: nonTerminalNodeQuery,
                        nodeQueryB: nonTerminalNodeQuery,
                        verifyNodes: function(nodeA, nodeB, substitutions, localMetaContextA, localMetaContextB, verifyAhead) {
                            var nonTerminalNodeVerified;
                            var _$nonTerminalNodeA = nodeA, _$nonTerminalNodeB = nodeB; ///
                            nonTerminalNodeVerified = _get(_get_prototype_of(MetaLevelNodesVerifier.prototype), "verifyNonTerminalNode", _this).call(_this, _$nonTerminalNodeA, _$nonTerminalNodeB, substitutions, localMetaContextA, localMetaContextB, verifyAhead);
                            return nonTerminalNodeVerified;
                        }
                    }
                ];
                var nodesVerified = (0, _verifier.verifyNodes)(nodeQueryMaps, nonTerminalNodeA, nonTerminalNodeB, substitutions, localMetaContextA, localMetaContextB, verifyAhead);
                nonTerminalNodeVerified = nodesVerified; ///
                return nonTerminalNodeVerified;
            }
        },
        {
            key: "verifyStatementMetavariableNodeAgainstStatementNode",
            value: function verifyStatementMetavariableNodeAgainstStatementNode(statementMetavariableNodeA, statementNodeB, substitutions, localMetaContextA, localMetaContextB, verifyAhead) {
                var statementMetavariableNodeVerifiedAgainstStatementNode;
                var metavariableNode = statementMetavariableNodeA, statementNode = statementNodeB, metavariableVerifiedAgainstStatement = (0, _metavariableAgainstStatement.default)(metavariableNode, statementNode, substitutions, verifyAhead);
                statementMetavariableNodeVerifiedAgainstStatementNode = metavariableVerifiedAgainstStatement; ///
                return statementMetavariableNodeVerifiedAgainstStatementNode;
            }
        },
        {
            key: "verifyTermVariableNodeAgainstTermNode",
            value: function verifyTermVariableNodeAgainstTermNode(termVariableNodeA, termNodeB, substitutions, localContextA, localContextB, verifyAhead) {
                var termVariableNodeVerifiedAgainstTermNode;
                var variableNodeA = termVariableNodeA, termVerifiedAgainstVariable = (0, _variableAgainstTerm.default)(variableNodeA, termNodeB, substitutions, localContextA, localContextB, verifyAhead);
                termVariableNodeVerifiedAgainstTermNode = termVerifiedAgainstVariable; ///
                return termVariableNodeVerifiedAgainstTermNode;
            }
        }
    ]);
    return MetaLevelNodesVerifier;
}(_nodes.default);
var metaLevelNodesVerifier = new MetaLevelNodesVerifier();
var _default = metaLevelNodesVerifier;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy92ZXJpZmllci9ub2Rlcy9tZXRhTGV2ZWwuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBOb2Rlc1ZlcmlmaWVyIGZyb20gXCIuLi8uLi92ZXJpZmllci9ub2Rlc1wiO1xuaW1wb3J0IHZlcmlmeVZhcmlhYmxlQWdhaW5zdFRlcm0gZnJvbSBcIi4uLy4uL3ZlcmlmeS92YXJpYWJsZUFnYWluc3RUZXJtXCI7XG5pbXBvcnQgdmVyaWZ5TWV0YXZhcmlhYmxlQWdhaW5zdFN0YXRlbWVudCBmcm9tIFwiLi4vLi4vdmVyaWZ5L21ldGF2YXJpYWJsZUFnYWluc3RTdGF0ZW1lbnRcIjtcblxuaW1wb3J0IHsgbm9kZVF1ZXJ5IH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9xdWVyeVwiO1xuaW1wb3J0IHsgdmVyaWZ5Tm9kZXMgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL3ZlcmlmaWVyXCI7XG5cbmNvbnN0IHRlcm1Ob2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvdGVybSFcIiksXG4gICAgICBub25UZXJtaW5hbE5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi8qXCIpLFxuICAgICAgc3RhdGVtZW50Tm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3N0YXRlbWVudCFcIiksXG4gICAgICB0ZXJtVmFyaWFibGVOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvdGVybS92YXJpYWJsZSFcIiksXG4gICAgICBzdGF0ZW1lbnRNZXRhdmFyaWFibGVOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvc3RhdGVtZW50L21ldGF2YXJpYWJsZSFcIik7XG5cbmNsYXNzIE1ldGFMZXZlbE5vZGVzVmVyaWZpZXIgZXh0ZW5kcyBOb2Rlc1ZlcmlmaWVyIHtcbiAgdmVyaWZ5Tm9uVGVybWluYWxOb2RlKG5vblRlcm1pbmFsTm9kZUEsIG5vblRlcm1pbmFsTm9kZUIsIHN1YnN0aXR1dGlvbnMsIGxvY2FsTWV0YUNvbnRleHRBLCBsb2NhbE1ldGFDb250ZXh0QiwgdmVyaWZ5QWhlYWQpIHtcbiAgICBsZXQgbm9uVGVybWluYWxOb2RlVmVyaWZpZWQ7XG5cbiAgICBjb25zdCBub2RlUXVlcnlNYXBzID0gW1xuICAgICAge1xuICAgICAgICBub2RlUXVlcnlBOiBzdGF0ZW1lbnRNZXRhdmFyaWFibGVOb2RlUXVlcnksXG4gICAgICAgIG5vZGVRdWVyeUI6IHN0YXRlbWVudE5vZGVRdWVyeSxcbiAgICAgICAgdmVyaWZ5Tm9kZXM6IChub2RlQSwgbm9kZUIsIHN1YnN0aXR1dGlvbnMsIGxvY2FsTWV0YUNvbnRleHRBLCBsb2NhbE1ldGFDb250ZXh0QiwgdmVyaWZ5QWhlYWQpID0+IHtcbiAgICAgICAgICBsZXQgbm9uVGVybWluYWxOb2RlVmVyaWZpZWQ7XG5cbiAgICAgICAgICBjb25zdCBzdGF0ZW1lbnROb2RlQiA9IG5vZGVCLCAvLy9cbiAgICAgICAgICAgICAgICBzdGF0ZW1lbnRNZXRhdmFyaWFibGVOb2RlQSA9IG5vZGVBLCAvLy9cbiAgICAgICAgICAgICAgICBzdGF0ZW1lbnRNZXRhdmFyaWFibGVOb2RlVmVyaWZpZWRBZ2FpbnN0U3RhdGVtZW50Tm9kZSA9XG5cbiAgICAgICAgICAgICAgICAgIHRoaXMudmVyaWZ5U3RhdGVtZW50TWV0YXZhcmlhYmxlTm9kZUFnYWluc3RTdGF0ZW1lbnROb2RlKHN0YXRlbWVudE1ldGF2YXJpYWJsZU5vZGVBLCBzdGF0ZW1lbnROb2RlQiwgc3Vic3RpdHV0aW9ucywgbG9jYWxNZXRhQ29udGV4dEEsIGxvY2FsTWV0YUNvbnRleHRCLCB2ZXJpZnlBaGVhZCk7XG5cbiAgICAgICAgICBub25UZXJtaW5hbE5vZGVWZXJpZmllZCA9IHN0YXRlbWVudE1ldGF2YXJpYWJsZU5vZGVWZXJpZmllZEFnYWluc3RTdGF0ZW1lbnROb2RlOyAgLy8vXG5cbiAgICAgICAgICByZXR1cm4gbm9uVGVybWluYWxOb2RlVmVyaWZpZWQ7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIG5vZGVRdWVyeUE6IHRlcm1WYXJpYWJsZU5vZGVRdWVyeSxcbiAgICAgICAgbm9kZVF1ZXJ5QjogdGVybU5vZGVRdWVyeSxcbiAgICAgICAgdmVyaWZ5Tm9kZXM6IChub2RlQSwgbm9kZUIsIHN1YnN0aXR1dGlvbnMsIGxvY2FsQ29udGV4dEEsIGxvY2FsQ29udGV4dEIsIHZlcmlmeUFoZWFkKSA9PiB7XG4gICAgICAgICAgbGV0IG5vblRlcm1pbmFsTm9kZVZlcmlmaWVkO1xuXG4gICAgICAgICAgY29uc3QgdGVybU5vZGVCID0gbm9kZUIsICAvLy9cbiAgICAgICAgICAgICAgICB0ZXJtVmFyaWFibGVOb2RlQSA9IG5vZGVBLCAgLy8vXG4gICAgICAgICAgICAgICAgdGVybVZhcmlhYmxlTm9kZVZlcmlmaWVkQWdhaW5zdFRlcm1Ob2RlID1cblxuICAgICAgICAgICAgICAgICAgdGhpcy52ZXJpZnlUZXJtVmFyaWFibGVOb2RlQWdhaW5zdFRlcm1Ob2RlKHRlcm1WYXJpYWJsZU5vZGVBLCB0ZXJtTm9kZUIsIHN1YnN0aXR1dGlvbnMsIGxvY2FsQ29udGV4dEEsIGxvY2FsQ29udGV4dEIsIHZlcmlmeUFoZWFkKTtcblxuICAgICAgICAgIG5vblRlcm1pbmFsTm9kZVZlcmlmaWVkID0gdGVybVZhcmlhYmxlTm9kZVZlcmlmaWVkQWdhaW5zdFRlcm1Ob2RlOyAgLy8vXG5cbiAgICAgICAgICByZXR1cm4gbm9uVGVybWluYWxOb2RlVmVyaWZpZWQ7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIG5vZGVRdWVyeUE6IG5vblRlcm1pbmFsTm9kZVF1ZXJ5LFxuICAgICAgICBub2RlUXVlcnlCOiBub25UZXJtaW5hbE5vZGVRdWVyeSxcbiAgICAgICAgdmVyaWZ5Tm9kZXM6IChub2RlQSwgbm9kZUIsIHN1YnN0aXR1dGlvbnMsIGxvY2FsTWV0YUNvbnRleHRBLCBsb2NhbE1ldGFDb250ZXh0QiwgdmVyaWZ5QWhlYWQpID0+IHtcbiAgICAgICAgICBsZXQgbm9uVGVybWluYWxOb2RlVmVyaWZpZWQ7XG5cbiAgICAgICAgICBjb25zdCBub25UZXJtaW5hbE5vZGVBID0gbm9kZUEsIC8vL1xuICAgICAgICAgICAgICAgIG5vblRlcm1pbmFsTm9kZUIgPSBub2RlQjsgLy8vXG5cbiAgICAgICAgICBub25UZXJtaW5hbE5vZGVWZXJpZmllZCA9XG5cbiAgICAgICAgICAgIHN1cGVyLnZlcmlmeU5vblRlcm1pbmFsTm9kZShub25UZXJtaW5hbE5vZGVBLCBub25UZXJtaW5hbE5vZGVCLCBzdWJzdGl0dXRpb25zLCBsb2NhbE1ldGFDb250ZXh0QSwgbG9jYWxNZXRhQ29udGV4dEIsIHZlcmlmeUFoZWFkKTtcblxuICAgICAgICAgIHJldHVybiBub25UZXJtaW5hbE5vZGVWZXJpZmllZDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIF07XG5cbiAgICBjb25zdCBub2Rlc1ZlcmlmaWVkID0gdmVyaWZ5Tm9kZXMobm9kZVF1ZXJ5TWFwcywgbm9uVGVybWluYWxOb2RlQSwgbm9uVGVybWluYWxOb2RlQiwgc3Vic3RpdHV0aW9ucywgbG9jYWxNZXRhQ29udGV4dEEsIGxvY2FsTWV0YUNvbnRleHRCLCB2ZXJpZnlBaGVhZCk7XG5cbiAgICBub25UZXJtaW5hbE5vZGVWZXJpZmllZCA9IG5vZGVzVmVyaWZpZWQ7ICAvLy9cblxuICAgIHJldHVybiBub25UZXJtaW5hbE5vZGVWZXJpZmllZDtcbiAgfVxuXG4gIHZlcmlmeVN0YXRlbWVudE1ldGF2YXJpYWJsZU5vZGVBZ2FpbnN0U3RhdGVtZW50Tm9kZShzdGF0ZW1lbnRNZXRhdmFyaWFibGVOb2RlQSwgc3RhdGVtZW50Tm9kZUIsIHN1YnN0aXR1dGlvbnMsIGxvY2FsTWV0YUNvbnRleHRBLCBsb2NhbE1ldGFDb250ZXh0QiwgdmVyaWZ5QWhlYWQpIHtcbiAgICBsZXQgc3RhdGVtZW50TWV0YXZhcmlhYmxlTm9kZVZlcmlmaWVkQWdhaW5zdFN0YXRlbWVudE5vZGU7XG5cbiAgICBjb25zdCBtZXRhdmFyaWFibGVOb2RlID0gc3RhdGVtZW50TWV0YXZhcmlhYmxlTm9kZUEsIC8vL1xuICAgICAgICAgIHN0YXRlbWVudE5vZGUgPSBzdGF0ZW1lbnROb2RlQiwgLy8vXG4gICAgICAgICAgbWV0YXZhcmlhYmxlVmVyaWZpZWRBZ2FpbnN0U3RhdGVtZW50ID0gdmVyaWZ5TWV0YXZhcmlhYmxlQWdhaW5zdFN0YXRlbWVudChtZXRhdmFyaWFibGVOb2RlLCBzdGF0ZW1lbnROb2RlLCBzdWJzdGl0dXRpb25zLCB2ZXJpZnlBaGVhZCk7XG5cbiAgICBzdGF0ZW1lbnRNZXRhdmFyaWFibGVOb2RlVmVyaWZpZWRBZ2FpbnN0U3RhdGVtZW50Tm9kZSA9IG1ldGF2YXJpYWJsZVZlcmlmaWVkQWdhaW5zdFN0YXRlbWVudDsgIC8vL1xuXG4gICAgcmV0dXJuIHN0YXRlbWVudE1ldGF2YXJpYWJsZU5vZGVWZXJpZmllZEFnYWluc3RTdGF0ZW1lbnROb2RlO1xuICB9XG5cbiAgdmVyaWZ5VGVybVZhcmlhYmxlTm9kZUFnYWluc3RUZXJtTm9kZSh0ZXJtVmFyaWFibGVOb2RlQSwgdGVybU5vZGVCLCBzdWJzdGl0dXRpb25zLCBsb2NhbENvbnRleHRBLCBsb2NhbENvbnRleHRCLCB2ZXJpZnlBaGVhZCkge1xuICAgIGxldCB0ZXJtVmFyaWFibGVOb2RlVmVyaWZpZWRBZ2FpbnN0VGVybU5vZGU7XG5cbiAgICBjb25zdCB2YXJpYWJsZU5vZGVBID0gdGVybVZhcmlhYmxlTm9kZUEsIC8vL1xuICAgICAgICAgIHRlcm1WZXJpZmllZEFnYWluc3RWYXJpYWJsZSA9IHZlcmlmeVZhcmlhYmxlQWdhaW5zdFRlcm0odmFyaWFibGVOb2RlQSwgdGVybU5vZGVCLCBzdWJzdGl0dXRpb25zLCBsb2NhbENvbnRleHRBLCBsb2NhbENvbnRleHRCLCB2ZXJpZnlBaGVhZCk7XG5cbiAgICB0ZXJtVmFyaWFibGVOb2RlVmVyaWZpZWRBZ2FpbnN0VGVybU5vZGUgPSB0ZXJtVmVyaWZpZWRBZ2FpbnN0VmFyaWFibGU7ICAvLy9cblxuICAgIHJldHVybiB0ZXJtVmFyaWFibGVOb2RlVmVyaWZpZWRBZ2FpbnN0VGVybU5vZGU7XG4gIH1cbn1cblxuY29uc3QgbWV0YUxldmVsTm9kZXNWZXJpZmllciA9IG5ldyBNZXRhTGV2ZWxOb2Rlc1ZlcmlmaWVyKCk7XG5cbmV4cG9ydCBkZWZhdWx0IG1ldGFMZXZlbE5vZGVzVmVyaWZpZXI7XG4iXSwibmFtZXMiOlsidGVybU5vZGVRdWVyeSIsIm5vZGVRdWVyeSIsIm5vblRlcm1pbmFsTm9kZVF1ZXJ5Iiwic3RhdGVtZW50Tm9kZVF1ZXJ5IiwidGVybVZhcmlhYmxlTm9kZVF1ZXJ5Iiwic3RhdGVtZW50TWV0YXZhcmlhYmxlTm9kZVF1ZXJ5IiwiTWV0YUxldmVsTm9kZXNWZXJpZmllciIsInZlcmlmeU5vblRlcm1pbmFsTm9kZSIsIm5vblRlcm1pbmFsTm9kZUEiLCJub25UZXJtaW5hbE5vZGVCIiwic3Vic3RpdHV0aW9ucyIsImxvY2FsTWV0YUNvbnRleHRBIiwibG9jYWxNZXRhQ29udGV4dEIiLCJ2ZXJpZnlBaGVhZCIsIm5vblRlcm1pbmFsTm9kZVZlcmlmaWVkIiwibm9kZVF1ZXJ5TWFwcyIsIm5vZGVRdWVyeUEiLCJub2RlUXVlcnlCIiwidmVyaWZ5Tm9kZXMiLCJub2RlQSIsIm5vZGVCIiwic3RhdGVtZW50Tm9kZUIiLCJzdGF0ZW1lbnRNZXRhdmFyaWFibGVOb2RlQSIsInN0YXRlbWVudE1ldGF2YXJpYWJsZU5vZGVWZXJpZmllZEFnYWluc3RTdGF0ZW1lbnROb2RlIiwidmVyaWZ5U3RhdGVtZW50TWV0YXZhcmlhYmxlTm9kZUFnYWluc3RTdGF0ZW1lbnROb2RlIiwibG9jYWxDb250ZXh0QSIsImxvY2FsQ29udGV4dEIiLCJ0ZXJtTm9kZUIiLCJ0ZXJtVmFyaWFibGVOb2RlQSIsInRlcm1WYXJpYWJsZU5vZGVWZXJpZmllZEFnYWluc3RUZXJtTm9kZSIsInZlcmlmeVRlcm1WYXJpYWJsZU5vZGVBZ2FpbnN0VGVybU5vZGUiLCJub2Rlc1ZlcmlmaWVkIiwibWV0YXZhcmlhYmxlTm9kZSIsInN0YXRlbWVudE5vZGUiLCJtZXRhdmFyaWFibGVWZXJpZmllZEFnYWluc3RTdGF0ZW1lbnQiLCJ2ZXJpZnlNZXRhdmFyaWFibGVBZ2FpbnN0U3RhdGVtZW50IiwidmFyaWFibGVOb2RlQSIsInRlcm1WZXJpZmllZEFnYWluc3RWYXJpYWJsZSIsInZlcmlmeVZhcmlhYmxlQWdhaW5zdFRlcm0iLCJOb2Rlc1ZlcmlmaWVyIiwibWV0YUxldmVsTm9kZXNWZXJpZmllciJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBeUdBOzs7ZUFBQTs7OzREQXZHMEI7MEVBQ1k7bUZBQ1M7cUJBRXJCO3dCQUNFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFNUIsSUFBTUEsZ0JBQWdCQyxJQUFBQSxnQkFBUyxFQUFDLFdBQzFCQyx1QkFBdUJELElBQUFBLGdCQUFTLEVBQUMsT0FDakNFLHFCQUFxQkYsSUFBQUEsZ0JBQVMsRUFBQyxnQkFDL0JHLHdCQUF3QkgsSUFBQUEsZ0JBQVMsRUFBQyxvQkFDbENJLGlDQUFpQ0osSUFBQUEsZ0JBQVMsRUFBQztBQUVqRCxJQUFBLEFBQU1LLHVDQUFELEFBQUw7Y0FBTUE7YUFBQUE7Z0NBQUFBO2lDQUFBQTs7a0JBQUFBOztZQUNKQyxLQUFBQTttQkFBQUEsU0FBQUEsc0JBQXNCQyxnQkFBZ0IsRUFBRUMsZ0JBQWdCLEVBQUVDLGFBQWEsRUFBRUMsaUJBQWlCLEVBQUVDLGlCQUFpQixFQUFFQyxXQUFXOztnQkFDeEgsSUFBSUM7Z0JBRUosSUFBTUMsZ0JBQWdCO29CQUNwQjt3QkFDRUMsWUFBWVg7d0JBQ1pZLFlBQVlkO3dCQUNaZSxhQUFhLFNBQUNDLE9BQU9DLE9BQU9WLGVBQWVDLG1CQUFtQkMsbUJBQW1CQzs0QkFDL0UsSUFBSUM7NEJBRUosSUFBTU8saUJBQWlCRCxPQUNqQkUsNkJBQTZCSCxPQUM3Qkksd0RBRUUsTUFBS0MsbURBQW1ELENBQUNGLDRCQUE0QkQsZ0JBQWdCWCxlQUFlQyxtQkFBbUJDLG1CQUFtQkM7NEJBRWxLQywwQkFBMEJTLHVEQUF3RCxHQUFHOzRCQUVyRixPQUFPVDt3QkFDVDtvQkFDRjtvQkFDQTt3QkFDRUUsWUFBWVo7d0JBQ1phLFlBQVlqQjt3QkFDWmtCLGFBQWEsU0FBQ0MsT0FBT0MsT0FBT1YsZUFBZWUsZUFBZUMsZUFBZWI7NEJBQ3ZFLElBQUlDOzRCQUVKLElBQU1hLFlBQVlQLE9BQ1pRLG9CQUFvQlQsT0FDcEJVLDBDQUVFLE1BQUtDLHFDQUFxQyxDQUFDRixtQkFBbUJELFdBQVdqQixlQUFlZSxlQUFlQyxlQUFlYjs0QkFFOUhDLDBCQUEwQmUseUNBQTBDLEdBQUc7NEJBRXZFLE9BQU9mO3dCQUNUO29CQUNGO29CQUNBO3dCQUNFRSxZQUFZZDt3QkFDWmUsWUFBWWY7d0JBQ1pnQixhQUFhLFNBQUNDLE9BQU9DLE9BQU9WLGVBQWVDLG1CQUFtQkMsbUJBQW1CQzs0QkFDL0UsSUFBSUM7NEJBRUosSUFBTU4scUJBQW1CVyxPQUNuQlYscUJBQW1CVyxPQUFPLEdBQUc7NEJBRW5DTiwwQkFFRSx1QkFsRE5SLG1DQWtEWUMsNENBQXNCQyxvQkFBa0JDLG9CQUFrQkMsZUFBZUMsbUJBQW1CQyxtQkFBbUJDOzRCQUV2SCxPQUFPQzt3QkFDVDtvQkFDRjtpQkFDRDtnQkFFRCxJQUFNaUIsZ0JBQWdCYixJQUFBQSxxQkFBVyxFQUFDSCxlQUFlUCxrQkFBa0JDLGtCQUFrQkMsZUFBZUMsbUJBQW1CQyxtQkFBbUJDO2dCQUUxSUMsMEJBQTBCaUIsZUFBZ0IsR0FBRztnQkFFN0MsT0FBT2pCO1lBQ1Q7OztZQUVBVSxLQUFBQTttQkFBQUEsU0FBQUEsb0RBQW9ERiwwQkFBMEIsRUFBRUQsY0FBYyxFQUFFWCxhQUFhLEVBQUVDLGlCQUFpQixFQUFFQyxpQkFBaUIsRUFBRUMsV0FBVztnQkFDOUosSUFBSVU7Z0JBRUosSUFBTVMsbUJBQW1CViw0QkFDbkJXLGdCQUFnQlosZ0JBQ2hCYSx1Q0FBdUNDLElBQUFBLHFDQUFrQyxFQUFDSCxrQkFBa0JDLGVBQWV2QixlQUFlRztnQkFFaElVLHdEQUF3RFcsc0NBQXVDLEdBQUc7Z0JBRWxHLE9BQU9YO1lBQ1Q7OztZQUVBTyxLQUFBQTttQkFBQUEsU0FBQUEsc0NBQXNDRixpQkFBaUIsRUFBRUQsU0FBUyxFQUFFakIsYUFBYSxFQUFFZSxhQUFhLEVBQUVDLGFBQWEsRUFBRWIsV0FBVztnQkFDMUgsSUFBSWdCO2dCQUVKLElBQU1PLGdCQUFnQlIsbUJBQ2hCUyw4QkFBOEJDLElBQUFBLDRCQUF5QixFQUFDRixlQUFlVCxXQUFXakIsZUFBZWUsZUFBZUMsZUFBZWI7Z0JBRXJJZ0IsMENBQTBDUSw2QkFBOEIsR0FBRztnQkFFM0UsT0FBT1I7WUFDVDs7O1dBckZJdkI7RUFBK0JpQyxjQUFhO0FBd0ZsRCxJQUFNQyx5QkFBeUIsSUFBSWxDO0lBRW5DLFdBQWVrQyJ9