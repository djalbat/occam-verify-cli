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
var _metavariableAgainstMetastatement = /*#__PURE__*/ _interop_require_default(require("../../verify/metavariableAgainstMetastatement"));
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
var termNodeQuery = (0, _query.nodeQuery)("/term!"), nonTerminalNodeQuery = (0, _query.nodeQuery)("/*"), termVariableNodeQuery = (0, _query.nodeQuery)("/term/variable!"), metastatementNodeQuery = (0, _query.nodeQuery)("/metastatement!"), metastatementMetavariableNodeQuery = (0, _query.nodeQuery)("/metastatement/metavariable!");
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
                        nodeQueryA: metastatementMetavariableNodeQuery,
                        nodeQueryB: metastatementNodeQuery,
                        verifyNodes: function(nodeA, nodeB, substitutions, localMetaContextA, localMetaContextB, verifyAhead) {
                            var nonTerminalNodeVerified;
                            var metastatementNodeB = nodeB, metastatementMetavariableNodeA = nodeA, metastatementMetavariableNodeVerifiedAgainstMetastatementNode = _this.verifyMetastatementMetavariableNodeAgainstMetastatementNode(metastatementMetavariableNodeA, metastatementNodeB, substitutions, localMetaContextA, localMetaContextB, verifyAhead);
                            nonTerminalNodeVerified = metastatementMetavariableNodeVerifiedAgainstMetastatementNode; ///
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
            key: "verifyMetastatementMetavariableNodeAgainstMetastatementNode",
            value: function verifyMetastatementMetavariableNodeAgainstMetastatementNode(metastatementMetavariableNodeA, metastatementNodeB, substitutions, localMetaContextA, localMetaContextB, verifyAhead) {
                var metastatementMetavariableNodeVerifiedAgainstMetastatementNode;
                var metavariableNode = metastatementMetavariableNodeA, metastatementNode = metastatementNodeB, metavariableVerifiedAgainstMetastatement = (0, _metavariableAgainstMetastatement.default)(metavariableNode, metastatementNode, substitutions, verifyAhead);
                metastatementMetavariableNodeVerifiedAgainstMetastatementNode = metavariableVerifiedAgainstMetastatement; ///
                return metastatementMetavariableNodeVerifiedAgainstMetastatementNode;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy92ZXJpZmllci9ub2Rlcy9tZXRhTGV2ZWwuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBOb2Rlc1ZlcmlmaWVyIGZyb20gXCIuLi8uLi92ZXJpZmllci9ub2Rlc1wiO1xuaW1wb3J0IHZlcmlmeVZhcmlhYmxlQWdhaW5zdFRlcm0gZnJvbSBcIi4uLy4uL3ZlcmlmeS92YXJpYWJsZUFnYWluc3RUZXJtXCI7XG5pbXBvcnQgdmVyaWZ5TWV0YXZhcmlhYmxlQWdhaW5zdE1ldGFzdGF0ZW1lbnQgZnJvbSBcIi4uLy4uL3ZlcmlmeS9tZXRhdmFyaWFibGVBZ2FpbnN0TWV0YXN0YXRlbWVudFwiO1xuXG5pbXBvcnQgeyBub2RlUXVlcnkgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5pbXBvcnQgeyB2ZXJpZnlOb2RlcyB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvdmVyaWZpZXJcIjtcblxuY29uc3QgdGVybU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi90ZXJtIVwiKSxcbiAgICAgIG5vblRlcm1pbmFsTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiLypcIiksXG4gICAgICB0ZXJtVmFyaWFibGVOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvdGVybS92YXJpYWJsZSFcIiksXG4gICAgICBtZXRhc3RhdGVtZW50Tm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL21ldGFzdGF0ZW1lbnQhXCIpLFxuICAgICAgbWV0YXN0YXRlbWVudE1ldGF2YXJpYWJsZU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9tZXRhc3RhdGVtZW50L21ldGF2YXJpYWJsZSFcIik7XG5cbmNsYXNzIE1ldGFMZXZlbE5vZGVzVmVyaWZpZXIgZXh0ZW5kcyBOb2Rlc1ZlcmlmaWVyIHtcbiAgdmVyaWZ5Tm9uVGVybWluYWxOb2RlKG5vblRlcm1pbmFsTm9kZUEsIG5vblRlcm1pbmFsTm9kZUIsIHN1YnN0aXR1dGlvbnMsIGxvY2FsTWV0YUNvbnRleHRBLCBsb2NhbE1ldGFDb250ZXh0QiwgdmVyaWZ5QWhlYWQpIHtcbiAgICBsZXQgbm9uVGVybWluYWxOb2RlVmVyaWZpZWQ7XG5cbiAgICBjb25zdCBub2RlUXVlcnlNYXBzID0gW1xuICAgICAge1xuICAgICAgICBub2RlUXVlcnlBOiBtZXRhc3RhdGVtZW50TWV0YXZhcmlhYmxlTm9kZVF1ZXJ5LFxuICAgICAgICBub2RlUXVlcnlCOiBtZXRhc3RhdGVtZW50Tm9kZVF1ZXJ5LFxuICAgICAgICB2ZXJpZnlOb2RlczogKG5vZGVBLCBub2RlQiwgc3Vic3RpdHV0aW9ucywgbG9jYWxNZXRhQ29udGV4dEEsIGxvY2FsTWV0YUNvbnRleHRCLCB2ZXJpZnlBaGVhZCkgPT4ge1xuICAgICAgICAgIGxldCBub25UZXJtaW5hbE5vZGVWZXJpZmllZDtcblxuICAgICAgICAgIGNvbnN0IG1ldGFzdGF0ZW1lbnROb2RlQiA9IG5vZGVCLCAvLy9cbiAgICAgICAgICAgICAgICBtZXRhc3RhdGVtZW50TWV0YXZhcmlhYmxlTm9kZUEgPSBub2RlQSwgLy8vXG4gICAgICAgICAgICAgICAgbWV0YXN0YXRlbWVudE1ldGF2YXJpYWJsZU5vZGVWZXJpZmllZEFnYWluc3RNZXRhc3RhdGVtZW50Tm9kZSA9XG5cbiAgICAgICAgICAgICAgICAgIHRoaXMudmVyaWZ5TWV0YXN0YXRlbWVudE1ldGF2YXJpYWJsZU5vZGVBZ2FpbnN0TWV0YXN0YXRlbWVudE5vZGUobWV0YXN0YXRlbWVudE1ldGF2YXJpYWJsZU5vZGVBLCBtZXRhc3RhdGVtZW50Tm9kZUIsIHN1YnN0aXR1dGlvbnMsIGxvY2FsTWV0YUNvbnRleHRBLCBsb2NhbE1ldGFDb250ZXh0QiwgdmVyaWZ5QWhlYWQpO1xuXG4gICAgICAgICAgbm9uVGVybWluYWxOb2RlVmVyaWZpZWQgPSBtZXRhc3RhdGVtZW50TWV0YXZhcmlhYmxlTm9kZVZlcmlmaWVkQWdhaW5zdE1ldGFzdGF0ZW1lbnROb2RlOyAgLy8vXG5cbiAgICAgICAgICByZXR1cm4gbm9uVGVybWluYWxOb2RlVmVyaWZpZWQ7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIG5vZGVRdWVyeUE6IHRlcm1WYXJpYWJsZU5vZGVRdWVyeSxcbiAgICAgICAgbm9kZVF1ZXJ5QjogdGVybU5vZGVRdWVyeSxcbiAgICAgICAgdmVyaWZ5Tm9kZXM6IChub2RlQSwgbm9kZUIsIHN1YnN0aXR1dGlvbnMsIGxvY2FsQ29udGV4dEEsIGxvY2FsQ29udGV4dEIsIHZlcmlmeUFoZWFkKSA9PiB7XG4gICAgICAgICAgbGV0IG5vblRlcm1pbmFsTm9kZVZlcmlmaWVkO1xuXG4gICAgICAgICAgY29uc3QgdGVybU5vZGVCID0gbm9kZUIsICAvLy9cbiAgICAgICAgICAgICAgICB0ZXJtVmFyaWFibGVOb2RlQSA9IG5vZGVBLCAgLy8vXG4gICAgICAgICAgICAgICAgdGVybVZhcmlhYmxlTm9kZVZlcmlmaWVkQWdhaW5zdFRlcm1Ob2RlID1cblxuICAgICAgICAgICAgICAgICAgdGhpcy52ZXJpZnlUZXJtVmFyaWFibGVOb2RlQWdhaW5zdFRlcm1Ob2RlKHRlcm1WYXJpYWJsZU5vZGVBLCB0ZXJtTm9kZUIsIHN1YnN0aXR1dGlvbnMsIGxvY2FsQ29udGV4dEEsIGxvY2FsQ29udGV4dEIsIHZlcmlmeUFoZWFkKTtcblxuICAgICAgICAgIG5vblRlcm1pbmFsTm9kZVZlcmlmaWVkID0gdGVybVZhcmlhYmxlTm9kZVZlcmlmaWVkQWdhaW5zdFRlcm1Ob2RlOyAgLy8vXG5cbiAgICAgICAgICByZXR1cm4gbm9uVGVybWluYWxOb2RlVmVyaWZpZWQ7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIG5vZGVRdWVyeUE6IG5vblRlcm1pbmFsTm9kZVF1ZXJ5LFxuICAgICAgICBub2RlUXVlcnlCOiBub25UZXJtaW5hbE5vZGVRdWVyeSxcbiAgICAgICAgdmVyaWZ5Tm9kZXM6IChub2RlQSwgbm9kZUIsIHN1YnN0aXR1dGlvbnMsIGxvY2FsTWV0YUNvbnRleHRBLCBsb2NhbE1ldGFDb250ZXh0QiwgdmVyaWZ5QWhlYWQpID0+IHtcbiAgICAgICAgICBsZXQgbm9uVGVybWluYWxOb2RlVmVyaWZpZWQ7XG5cbiAgICAgICAgICBjb25zdCBub25UZXJtaW5hbE5vZGVBID0gbm9kZUEsIC8vL1xuICAgICAgICAgICAgICAgIG5vblRlcm1pbmFsTm9kZUIgPSBub2RlQjsgLy8vXG5cbiAgICAgICAgICBub25UZXJtaW5hbE5vZGVWZXJpZmllZCA9XG5cbiAgICAgICAgICAgIHN1cGVyLnZlcmlmeU5vblRlcm1pbmFsTm9kZShub25UZXJtaW5hbE5vZGVBLCBub25UZXJtaW5hbE5vZGVCLCBzdWJzdGl0dXRpb25zLCBsb2NhbE1ldGFDb250ZXh0QSwgbG9jYWxNZXRhQ29udGV4dEIsIHZlcmlmeUFoZWFkKTtcblxuICAgICAgICAgIHJldHVybiBub25UZXJtaW5hbE5vZGVWZXJpZmllZDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIF07XG5cbiAgICBjb25zdCBub2Rlc1ZlcmlmaWVkID0gdmVyaWZ5Tm9kZXMobm9kZVF1ZXJ5TWFwcywgbm9uVGVybWluYWxOb2RlQSwgbm9uVGVybWluYWxOb2RlQiwgc3Vic3RpdHV0aW9ucywgbG9jYWxNZXRhQ29udGV4dEEsIGxvY2FsTWV0YUNvbnRleHRCLCB2ZXJpZnlBaGVhZCk7XG5cbiAgICBub25UZXJtaW5hbE5vZGVWZXJpZmllZCA9IG5vZGVzVmVyaWZpZWQ7ICAvLy9cblxuICAgIHJldHVybiBub25UZXJtaW5hbE5vZGVWZXJpZmllZDtcbiAgfVxuXG4gIHZlcmlmeU1ldGFzdGF0ZW1lbnRNZXRhdmFyaWFibGVOb2RlQWdhaW5zdE1ldGFzdGF0ZW1lbnROb2RlKG1ldGFzdGF0ZW1lbnRNZXRhdmFyaWFibGVOb2RlQSwgbWV0YXN0YXRlbWVudE5vZGVCLCBzdWJzdGl0dXRpb25zLCBsb2NhbE1ldGFDb250ZXh0QSwgbG9jYWxNZXRhQ29udGV4dEIsIHZlcmlmeUFoZWFkKSB7XG4gICAgbGV0IG1ldGFzdGF0ZW1lbnRNZXRhdmFyaWFibGVOb2RlVmVyaWZpZWRBZ2FpbnN0TWV0YXN0YXRlbWVudE5vZGU7XG5cbiAgICBjb25zdCBtZXRhdmFyaWFibGVOb2RlID0gbWV0YXN0YXRlbWVudE1ldGF2YXJpYWJsZU5vZGVBLCAvLy9cbiAgICAgICAgICBtZXRhc3RhdGVtZW50Tm9kZSA9IG1ldGFzdGF0ZW1lbnROb2RlQiwgLy8vXG4gICAgICAgICAgbWV0YXZhcmlhYmxlVmVyaWZpZWRBZ2FpbnN0TWV0YXN0YXRlbWVudCA9IHZlcmlmeU1ldGF2YXJpYWJsZUFnYWluc3RNZXRhc3RhdGVtZW50KG1ldGF2YXJpYWJsZU5vZGUsIG1ldGFzdGF0ZW1lbnROb2RlLCBzdWJzdGl0dXRpb25zLCB2ZXJpZnlBaGVhZCk7XG5cbiAgICBtZXRhc3RhdGVtZW50TWV0YXZhcmlhYmxlTm9kZVZlcmlmaWVkQWdhaW5zdE1ldGFzdGF0ZW1lbnROb2RlID0gbWV0YXZhcmlhYmxlVmVyaWZpZWRBZ2FpbnN0TWV0YXN0YXRlbWVudDsgIC8vL1xuXG4gICAgcmV0dXJuIG1ldGFzdGF0ZW1lbnRNZXRhdmFyaWFibGVOb2RlVmVyaWZpZWRBZ2FpbnN0TWV0YXN0YXRlbWVudE5vZGU7XG4gIH1cblxuICB2ZXJpZnlUZXJtVmFyaWFibGVOb2RlQWdhaW5zdFRlcm1Ob2RlKHRlcm1WYXJpYWJsZU5vZGVBLCB0ZXJtTm9kZUIsIHN1YnN0aXR1dGlvbnMsIGxvY2FsQ29udGV4dEEsIGxvY2FsQ29udGV4dEIsIHZlcmlmeUFoZWFkKSB7XG4gICAgbGV0IHRlcm1WYXJpYWJsZU5vZGVWZXJpZmllZEFnYWluc3RUZXJtTm9kZTtcblxuICAgIGNvbnN0IHZhcmlhYmxlTm9kZUEgPSB0ZXJtVmFyaWFibGVOb2RlQSwgLy8vXG4gICAgICAgICAgdGVybVZlcmlmaWVkQWdhaW5zdFZhcmlhYmxlID0gdmVyaWZ5VmFyaWFibGVBZ2FpbnN0VGVybSh2YXJpYWJsZU5vZGVBLCB0ZXJtTm9kZUIsIHN1YnN0aXR1dGlvbnMsIGxvY2FsQ29udGV4dEEsIGxvY2FsQ29udGV4dEIsIHZlcmlmeUFoZWFkKTtcblxuICAgIHRlcm1WYXJpYWJsZU5vZGVWZXJpZmllZEFnYWluc3RUZXJtTm9kZSA9IHRlcm1WZXJpZmllZEFnYWluc3RWYXJpYWJsZTsgIC8vL1xuXG4gICAgcmV0dXJuIHRlcm1WYXJpYWJsZU5vZGVWZXJpZmllZEFnYWluc3RUZXJtTm9kZTtcbiAgfVxufVxuXG5jb25zdCBtZXRhTGV2ZWxOb2Rlc1ZlcmlmaWVyID0gbmV3IE1ldGFMZXZlbE5vZGVzVmVyaWZpZXIoKTtcblxuZXhwb3J0IGRlZmF1bHQgbWV0YUxldmVsTm9kZXNWZXJpZmllcjtcbiJdLCJuYW1lcyI6WyJ0ZXJtTm9kZVF1ZXJ5Iiwibm9kZVF1ZXJ5Iiwibm9uVGVybWluYWxOb2RlUXVlcnkiLCJ0ZXJtVmFyaWFibGVOb2RlUXVlcnkiLCJtZXRhc3RhdGVtZW50Tm9kZVF1ZXJ5IiwibWV0YXN0YXRlbWVudE1ldGF2YXJpYWJsZU5vZGVRdWVyeSIsIk1ldGFMZXZlbE5vZGVzVmVyaWZpZXIiLCJ2ZXJpZnlOb25UZXJtaW5hbE5vZGUiLCJub25UZXJtaW5hbE5vZGVBIiwibm9uVGVybWluYWxOb2RlQiIsInN1YnN0aXR1dGlvbnMiLCJsb2NhbE1ldGFDb250ZXh0QSIsImxvY2FsTWV0YUNvbnRleHRCIiwidmVyaWZ5QWhlYWQiLCJub25UZXJtaW5hbE5vZGVWZXJpZmllZCIsIm5vZGVRdWVyeU1hcHMiLCJub2RlUXVlcnlBIiwibm9kZVF1ZXJ5QiIsInZlcmlmeU5vZGVzIiwibm9kZUEiLCJub2RlQiIsIm1ldGFzdGF0ZW1lbnROb2RlQiIsIm1ldGFzdGF0ZW1lbnRNZXRhdmFyaWFibGVOb2RlQSIsIm1ldGFzdGF0ZW1lbnRNZXRhdmFyaWFibGVOb2RlVmVyaWZpZWRBZ2FpbnN0TWV0YXN0YXRlbWVudE5vZGUiLCJ2ZXJpZnlNZXRhc3RhdGVtZW50TWV0YXZhcmlhYmxlTm9kZUFnYWluc3RNZXRhc3RhdGVtZW50Tm9kZSIsImxvY2FsQ29udGV4dEEiLCJsb2NhbENvbnRleHRCIiwidGVybU5vZGVCIiwidGVybVZhcmlhYmxlTm9kZUEiLCJ0ZXJtVmFyaWFibGVOb2RlVmVyaWZpZWRBZ2FpbnN0VGVybU5vZGUiLCJ2ZXJpZnlUZXJtVmFyaWFibGVOb2RlQWdhaW5zdFRlcm1Ob2RlIiwibm9kZXNWZXJpZmllZCIsIm1ldGF2YXJpYWJsZU5vZGUiLCJtZXRhc3RhdGVtZW50Tm9kZSIsIm1ldGF2YXJpYWJsZVZlcmlmaWVkQWdhaW5zdE1ldGFzdGF0ZW1lbnQiLCJ2ZXJpZnlNZXRhdmFyaWFibGVBZ2FpbnN0TWV0YXN0YXRlbWVudCIsInZhcmlhYmxlTm9kZUEiLCJ0ZXJtVmVyaWZpZWRBZ2FpbnN0VmFyaWFibGUiLCJ2ZXJpZnlWYXJpYWJsZUFnYWluc3RUZXJtIiwiTm9kZXNWZXJpZmllciIsIm1ldGFMZXZlbE5vZGVzVmVyaWZpZXIiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQXlHQTs7O2VBQUE7Ozs0REF2RzBCOzBFQUNZO3VGQUNhO3FCQUV6Qjt3QkFDRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTVCLElBQU1BLGdCQUFnQkMsSUFBQUEsZ0JBQVMsRUFBQyxXQUMxQkMsdUJBQXVCRCxJQUFBQSxnQkFBUyxFQUFDLE9BQ2pDRSx3QkFBd0JGLElBQUFBLGdCQUFTLEVBQUMsb0JBQ2xDRyx5QkFBeUJILElBQUFBLGdCQUFTLEVBQUMsb0JBQ25DSSxxQ0FBcUNKLElBQUFBLGdCQUFTLEVBQUM7QUFFckQsSUFBQSxBQUFNSyx1Q0FBRCxBQUFMO2NBQU1BO2FBQUFBO2dDQUFBQTtpQ0FBQUE7O2tCQUFBQTs7WUFDSkMsS0FBQUE7bUJBQUFBLFNBQUFBLHNCQUFzQkMsZ0JBQWdCLEVBQUVDLGdCQUFnQixFQUFFQyxhQUFhLEVBQUVDLGlCQUFpQixFQUFFQyxpQkFBaUIsRUFBRUMsV0FBVzs7Z0JBQ3hILElBQUlDO2dCQUVKLElBQU1DLGdCQUFnQjtvQkFDcEI7d0JBQ0VDLFlBQVlYO3dCQUNaWSxZQUFZYjt3QkFDWmMsYUFBYSxTQUFDQyxPQUFPQyxPQUFPVixlQUFlQyxtQkFBbUJDLG1CQUFtQkM7NEJBQy9FLElBQUlDOzRCQUVKLElBQU1PLHFCQUFxQkQsT0FDckJFLGlDQUFpQ0gsT0FDakNJLGdFQUVFLE1BQUtDLDJEQUEyRCxDQUFDRixnQ0FBZ0NELG9CQUFvQlgsZUFBZUMsbUJBQW1CQyxtQkFBbUJDOzRCQUVsTEMsMEJBQTBCUywrREFBZ0UsR0FBRzs0QkFFN0YsT0FBT1Q7d0JBQ1Q7b0JBQ0Y7b0JBQ0E7d0JBQ0VFLFlBQVliO3dCQUNaYyxZQUFZakI7d0JBQ1prQixhQUFhLFNBQUNDLE9BQU9DLE9BQU9WLGVBQWVlLGVBQWVDLGVBQWViOzRCQUN2RSxJQUFJQzs0QkFFSixJQUFNYSxZQUFZUCxPQUNaUSxvQkFBb0JULE9BQ3BCVSwwQ0FFRSxNQUFLQyxxQ0FBcUMsQ0FBQ0YsbUJBQW1CRCxXQUFXakIsZUFBZWUsZUFBZUMsZUFBZWI7NEJBRTlIQywwQkFBMEJlLHlDQUEwQyxHQUFHOzRCQUV2RSxPQUFPZjt3QkFDVDtvQkFDRjtvQkFDQTt3QkFDRUUsWUFBWWQ7d0JBQ1plLFlBQVlmO3dCQUNaZ0IsYUFBYSxTQUFDQyxPQUFPQyxPQUFPVixlQUFlQyxtQkFBbUJDLG1CQUFtQkM7NEJBQy9FLElBQUlDOzRCQUVKLElBQU1OLHFCQUFtQlcsT0FDbkJWLHFCQUFtQlcsT0FBTyxHQUFHOzRCQUVuQ04sMEJBRUUsdUJBbEROUixtQ0FrRFlDLDRDQUFzQkMsb0JBQWtCQyxvQkFBa0JDLGVBQWVDLG1CQUFtQkMsbUJBQW1CQzs0QkFFdkgsT0FBT0M7d0JBQ1Q7b0JBQ0Y7aUJBQ0Q7Z0JBRUQsSUFBTWlCLGdCQUFnQmIsSUFBQUEscUJBQVcsRUFBQ0gsZUFBZVAsa0JBQWtCQyxrQkFBa0JDLGVBQWVDLG1CQUFtQkMsbUJBQW1CQztnQkFFMUlDLDBCQUEwQmlCLGVBQWdCLEdBQUc7Z0JBRTdDLE9BQU9qQjtZQUNUOzs7WUFFQVUsS0FBQUE7bUJBQUFBLFNBQUFBLDREQUE0REYsOEJBQThCLEVBQUVELGtCQUFrQixFQUFFWCxhQUFhLEVBQUVDLGlCQUFpQixFQUFFQyxpQkFBaUIsRUFBRUMsV0FBVztnQkFDOUssSUFBSVU7Z0JBRUosSUFBTVMsbUJBQW1CVixnQ0FDbkJXLG9CQUFvQlosb0JBQ3BCYSwyQ0FBMkNDLElBQUFBLHlDQUFzQyxFQUFDSCxrQkFBa0JDLG1CQUFtQnZCLGVBQWVHO2dCQUU1SVUsZ0VBQWdFVywwQ0FBMkMsR0FBRztnQkFFOUcsT0FBT1g7WUFDVDs7O1lBRUFPLEtBQUFBO21CQUFBQSxTQUFBQSxzQ0FBc0NGLGlCQUFpQixFQUFFRCxTQUFTLEVBQUVqQixhQUFhLEVBQUVlLGFBQWEsRUFBRUMsYUFBYSxFQUFFYixXQUFXO2dCQUMxSCxJQUFJZ0I7Z0JBRUosSUFBTU8sZ0JBQWdCUixtQkFDaEJTLDhCQUE4QkMsSUFBQUEsNEJBQXlCLEVBQUNGLGVBQWVULFdBQVdqQixlQUFlZSxlQUFlQyxlQUFlYjtnQkFFcklnQiwwQ0FBMENRLDZCQUE4QixHQUFHO2dCQUUzRSxPQUFPUjtZQUNUOzs7V0FyRkl2QjtFQUErQmlDLGNBQWE7QUF3RmxELElBQU1DLHlCQUF5QixJQUFJbEM7SUFFbkMsV0FBZWtDIn0=