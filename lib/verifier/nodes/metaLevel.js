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
var _local = /*#__PURE__*/ _interop_require_default(require("../../context/local"));
var _nodes = /*#__PURE__*/ _interop_require_default(require("../../verifier/nodes"));
var _metavariableAgainstStatement = /*#__PURE__*/ _interop_require_default(require("../../verify/metavariableAgainstStatement"));
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
var metastatementNodeQuery = (0, _query.nodeQuery)("/metastatement!"), metastatementMetavariableNodeQuery = (0, _query.nodeQuery)("/metastatement/metavariable!");
var MetaLevelNodesVerifier = /*#__PURE__*/ function(NodesVerifier) {
    _inherits(MetaLevelNodesVerifier, NodesVerifier);
    var _super = _create_super(MetaLevelNodesVerifier);
    function MetaLevelNodesVerifier() {
        _class_call_check(this, MetaLevelNodesVerifier);
        return _super.apply(this, arguments);
    }
    _create_class(MetaLevelNodesVerifier, [
        {
            key: "verifyNonTerminalNode",
            value: function verifyNonTerminalNode(nonTerminalNodeA, nonTerminalNodeB, substitutions, localContextA, localMetaContextB, verifyAhead) {
                var _this = this;
                var nonTerminalNodeVerified;
                var nodeQueryMaps = [
                    {
                        nodeQueryA: metastatementMetavariableNodeQuery,
                        nodeQueryB: metastatementNodeQuery,
                        verifyNodes: function(nodeA, nodeB, substitutions, localContextA, localMetaContextB, verifyAhead) {
                            var nonTerminalNodeVerified;
                            var statementNodeB = nodeB, metastatementMetavariableNodeA = nodeA, metastatementMetavariableNodeVerifiedAgainstStatementNode = _this.verifyMetastatementMetavariableNodeAgainstStatementNode(metastatementMetavariableNodeA, statementNodeB, substitutions, localContextA, localMetaContextB, verifyAhead);
                            nonTerminalNodeVerified = metastatementMetavariableNodeVerifiedAgainstStatementNode; ///
                            return nonTerminalNodeVerified;
                        }
                    }
                ];
                var nodesVerified = (0, _verifier.verifyNodes)(nodeQueryMaps, nonTerminalNodeA, nonTerminalNodeB, substitutions, localContextA, localMetaContextB, verifyAhead);
                nonTerminalNodeVerified = nodesVerified ? true : _get(_get_prototype_of(MetaLevelNodesVerifier.prototype), "verifyNonTerminalNode", this).call(this, nonTerminalNodeA, nonTerminalNodeB, substitutions, localContextA, localMetaContextB, verifyAhead);
                return nonTerminalNodeVerified;
            }
        },
        {
            key: "verifyMetastatementMetavariableNodeAgainstStatementNode",
            value: function verifyMetastatementMetavariableNodeAgainstStatementNode(metastatementMetavariableNodeA, statementNodeB, substitutions, localContextA, localMetaContextB, verifyAhead) {
                var metastatementMetavariableNodeVerifiedAgainstStatementNode;
                var localContextB = _local.default.fromLocalMetaContext(localMetaContextB), statementNode = statementNodeB, metavariableNode = metastatementMetavariableNodeA, substitutionNode = null, metavariableVerifiedAgainstStatement = (0, _metavariableAgainstStatement.default)(metavariableNode, statementNode, substitutionNode, substitutions, localContextA, localContextB, verifyAhead);
                metastatementMetavariableNodeVerifiedAgainstStatementNode = metavariableVerifiedAgainstStatement; ///
                return metastatementMetavariableNodeVerifiedAgainstStatementNode;
            }
        }
    ]);
    return MetaLevelNodesVerifier;
}(_nodes.default);
var metaLevelNodesVerifier = new MetaLevelNodesVerifier();
var _default = metaLevelNodesVerifier;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy92ZXJpZmllci9ub2Rlcy9tZXRhTGV2ZWwuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBMb2NhbENvbnRleHQgZnJvbSBcIi4uLy4uL2NvbnRleHQvbG9jYWxcIjtcbmltcG9ydCBOb2Rlc1ZlcmlmaWVyIGZyb20gXCIuLi8uLi92ZXJpZmllci9ub2Rlc1wiO1xuaW1wb3J0IHZlcmlmeU1ldGF2YXJpYWJsZUFnYWluc3RTdGF0ZW1lbnQgZnJvbSBcIi4uLy4uL3ZlcmlmeS9tZXRhdmFyaWFibGVBZ2FpbnN0U3RhdGVtZW50XCI7XG5cbmltcG9ydCB7IG5vZGVRdWVyeSB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvcXVlcnlcIjtcbmltcG9ydCB7IHZlcmlmeU5vZGVzIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy92ZXJpZmllclwiO1xuXG5jb25zdCBtZXRhc3RhdGVtZW50Tm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL21ldGFzdGF0ZW1lbnQhXCIpLFxuICAgICAgbWV0YXN0YXRlbWVudE1ldGF2YXJpYWJsZU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9tZXRhc3RhdGVtZW50L21ldGF2YXJpYWJsZSFcIik7XG5cbmNsYXNzIE1ldGFMZXZlbE5vZGVzVmVyaWZpZXIgZXh0ZW5kcyBOb2Rlc1ZlcmlmaWVyIHtcbiAgdmVyaWZ5Tm9uVGVybWluYWxOb2RlKG5vblRlcm1pbmFsTm9kZUEsIG5vblRlcm1pbmFsTm9kZUIsIHN1YnN0aXR1dGlvbnMsIGxvY2FsQ29udGV4dEEsIGxvY2FsTWV0YUNvbnRleHRCLCB2ZXJpZnlBaGVhZCkge1xuICAgIGxldCBub25UZXJtaW5hbE5vZGVWZXJpZmllZDtcblxuICAgIGNvbnN0IG5vZGVRdWVyeU1hcHMgPSBbXG4gICAgICB7XG4gICAgICAgIG5vZGVRdWVyeUE6IG1ldGFzdGF0ZW1lbnRNZXRhdmFyaWFibGVOb2RlUXVlcnksXG4gICAgICAgIG5vZGVRdWVyeUI6IG1ldGFzdGF0ZW1lbnROb2RlUXVlcnksXG4gICAgICAgIHZlcmlmeU5vZGVzOiAobm9kZUEsIG5vZGVCLCBzdWJzdGl0dXRpb25zLCBsb2NhbENvbnRleHRBLCBsb2NhbE1ldGFDb250ZXh0QiwgdmVyaWZ5QWhlYWQpID0+IHtcbiAgICAgICAgICBsZXQgbm9uVGVybWluYWxOb2RlVmVyaWZpZWQ7XG5cbiAgICAgICAgICBjb25zdCBzdGF0ZW1lbnROb2RlQiA9IG5vZGVCLCAvLy9cbiAgICAgICAgICAgICAgICBtZXRhc3RhdGVtZW50TWV0YXZhcmlhYmxlTm9kZUEgPSBub2RlQSwgLy8vXG4gICAgICAgICAgICAgICAgbWV0YXN0YXRlbWVudE1ldGF2YXJpYWJsZU5vZGVWZXJpZmllZEFnYWluc3RTdGF0ZW1lbnROb2RlID1cblxuICAgICAgICAgICAgICAgICAgdGhpcy52ZXJpZnlNZXRhc3RhdGVtZW50TWV0YXZhcmlhYmxlTm9kZUFnYWluc3RTdGF0ZW1lbnROb2RlKG1ldGFzdGF0ZW1lbnRNZXRhdmFyaWFibGVOb2RlQSwgc3RhdGVtZW50Tm9kZUIsIHN1YnN0aXR1dGlvbnMsIGxvY2FsQ29udGV4dEEsIGxvY2FsTWV0YUNvbnRleHRCLCB2ZXJpZnlBaGVhZCk7XG5cbiAgICAgICAgICBub25UZXJtaW5hbE5vZGVWZXJpZmllZCA9IG1ldGFzdGF0ZW1lbnRNZXRhdmFyaWFibGVOb2RlVmVyaWZpZWRBZ2FpbnN0U3RhdGVtZW50Tm9kZTsgIC8vL1xuXG4gICAgICAgICAgcmV0dXJuIG5vblRlcm1pbmFsTm9kZVZlcmlmaWVkO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgXTtcblxuICAgIGNvbnN0IG5vZGVzVmVyaWZpZWQgPSB2ZXJpZnlOb2Rlcyhub2RlUXVlcnlNYXBzLCBub25UZXJtaW5hbE5vZGVBLCBub25UZXJtaW5hbE5vZGVCLCBzdWJzdGl0dXRpb25zLCBsb2NhbENvbnRleHRBLCBsb2NhbE1ldGFDb250ZXh0QiwgdmVyaWZ5QWhlYWQpO1xuXG4gICAgbm9uVGVybWluYWxOb2RlVmVyaWZpZWQgPSBub2Rlc1ZlcmlmaWVkID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJ1ZSA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3VwZXIudmVyaWZ5Tm9uVGVybWluYWxOb2RlKG5vblRlcm1pbmFsTm9kZUEsIG5vblRlcm1pbmFsTm9kZUIsIHN1YnN0aXR1dGlvbnMsIGxvY2FsQ29udGV4dEEsIGxvY2FsTWV0YUNvbnRleHRCLCB2ZXJpZnlBaGVhZCk7XG5cbiAgICByZXR1cm4gbm9uVGVybWluYWxOb2RlVmVyaWZpZWQ7XG4gIH1cblxuICB2ZXJpZnlNZXRhc3RhdGVtZW50TWV0YXZhcmlhYmxlTm9kZUFnYWluc3RTdGF0ZW1lbnROb2RlKG1ldGFzdGF0ZW1lbnRNZXRhdmFyaWFibGVOb2RlQSwgc3RhdGVtZW50Tm9kZUIsIHN1YnN0aXR1dGlvbnMsIGxvY2FsQ29udGV4dEEsIGxvY2FsTWV0YUNvbnRleHRCLCB2ZXJpZnlBaGVhZCkge1xuICAgIGxldCBtZXRhc3RhdGVtZW50TWV0YXZhcmlhYmxlTm9kZVZlcmlmaWVkQWdhaW5zdFN0YXRlbWVudE5vZGU7XG5cbiAgICBjb25zdCBsb2NhbENvbnRleHRCID0gTG9jYWxDb250ZXh0LmZyb21Mb2NhbE1ldGFDb250ZXh0KGxvY2FsTWV0YUNvbnRleHRCKSxcbiAgICAgICAgICBzdGF0ZW1lbnROb2RlID0gc3RhdGVtZW50Tm9kZUIsIC8vL1xuICAgICAgICAgIG1ldGF2YXJpYWJsZU5vZGUgPSBtZXRhc3RhdGVtZW50TWV0YXZhcmlhYmxlTm9kZUEsIC8vL1xuICAgICAgICAgIHN1YnN0aXR1dGlvbk5vZGUgPSBudWxsLFxuICAgICAgICAgIG1ldGF2YXJpYWJsZVZlcmlmaWVkQWdhaW5zdFN0YXRlbWVudCA9IHZlcmlmeU1ldGF2YXJpYWJsZUFnYWluc3RTdGF0ZW1lbnQobWV0YXZhcmlhYmxlTm9kZSwgc3RhdGVtZW50Tm9kZSwgc3Vic3RpdHV0aW9uTm9kZSwgc3Vic3RpdHV0aW9ucywgbG9jYWxDb250ZXh0QSwgbG9jYWxDb250ZXh0QiwgdmVyaWZ5QWhlYWQpO1xuXG4gICAgbWV0YXN0YXRlbWVudE1ldGF2YXJpYWJsZU5vZGVWZXJpZmllZEFnYWluc3RTdGF0ZW1lbnROb2RlID0gbWV0YXZhcmlhYmxlVmVyaWZpZWRBZ2FpbnN0U3RhdGVtZW50OyAgLy8vXG5cbiAgICByZXR1cm4gbWV0YXN0YXRlbWVudE1ldGF2YXJpYWJsZU5vZGVWZXJpZmllZEFnYWluc3RTdGF0ZW1lbnROb2RlO1xuICB9XG59XG5cbmNvbnN0IG1ldGFMZXZlbE5vZGVzVmVyaWZpZXIgPSBuZXcgTWV0YUxldmVsTm9kZXNWZXJpZmllcigpO1xuXG5leHBvcnQgZGVmYXVsdCBtZXRhTGV2ZWxOb2Rlc1ZlcmlmaWVyO1xuIl0sIm5hbWVzIjpbIm1ldGFzdGF0ZW1lbnROb2RlUXVlcnkiLCJub2RlUXVlcnkiLCJtZXRhc3RhdGVtZW50TWV0YXZhcmlhYmxlTm9kZVF1ZXJ5IiwiTWV0YUxldmVsTm9kZXNWZXJpZmllciIsInZlcmlmeU5vblRlcm1pbmFsTm9kZSIsIm5vblRlcm1pbmFsTm9kZUEiLCJub25UZXJtaW5hbE5vZGVCIiwic3Vic3RpdHV0aW9ucyIsImxvY2FsQ29udGV4dEEiLCJsb2NhbE1ldGFDb250ZXh0QiIsInZlcmlmeUFoZWFkIiwibm9uVGVybWluYWxOb2RlVmVyaWZpZWQiLCJub2RlUXVlcnlNYXBzIiwibm9kZVF1ZXJ5QSIsIm5vZGVRdWVyeUIiLCJ2ZXJpZnlOb2RlcyIsIm5vZGVBIiwibm9kZUIiLCJzdGF0ZW1lbnROb2RlQiIsIm1ldGFzdGF0ZW1lbnRNZXRhdmFyaWFibGVOb2RlQSIsIm1ldGFzdGF0ZW1lbnRNZXRhdmFyaWFibGVOb2RlVmVyaWZpZWRBZ2FpbnN0U3RhdGVtZW50Tm9kZSIsInZlcmlmeU1ldGFzdGF0ZW1lbnRNZXRhdmFyaWFibGVOb2RlQWdhaW5zdFN0YXRlbWVudE5vZGUiLCJub2Rlc1ZlcmlmaWVkIiwibG9jYWxDb250ZXh0QiIsIkxvY2FsQ29udGV4dCIsImZyb21Mb2NhbE1ldGFDb250ZXh0Iiwic3RhdGVtZW50Tm9kZSIsIm1ldGF2YXJpYWJsZU5vZGUiLCJzdWJzdGl0dXRpb25Ob2RlIiwibWV0YXZhcmlhYmxlVmVyaWZpZWRBZ2FpbnN0U3RhdGVtZW50IiwidmVyaWZ5TWV0YXZhcmlhYmxlQWdhaW5zdFN0YXRlbWVudCIsIk5vZGVzVmVyaWZpZXIiLCJtZXRhTGV2ZWxOb2Rlc1ZlcmlmaWVyIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkE4REE7OztlQUFBOzs7NERBNUR5Qjs0REFDQzttRkFDcUI7cUJBRXJCO3dCQUNFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFNUIsSUFBTUEseUJBQXlCQyxJQUFBQSxnQkFBUyxFQUFDLG9CQUNuQ0MscUNBQXFDRCxJQUFBQSxnQkFBUyxFQUFDO0FBRXJELElBQUEsQUFBTUUsdUNBQUQsQUFBTDtjQUFNQTsrQkFBQUE7YUFBQUE7Z0NBQUFBOzs7a0JBQUFBOztZQUNKQyxLQUFBQTttQkFBQUEsU0FBQUEsc0JBQXNCQyxnQkFBZ0IsRUFBRUMsZ0JBQWdCLEVBQUVDLGFBQWEsRUFBRUMsYUFBYSxFQUFFQyxpQkFBaUIsRUFBRUMsV0FBVzs7Z0JBQ3BILElBQUlDO2dCQUVKLElBQU1DLGdCQUFnQjtvQkFDcEI7d0JBQ0VDLFlBQVlYO3dCQUNaWSxZQUFZZDt3QkFDWmUsYUFBYSxTQUFDQyxPQUFPQyxPQUFPVixlQUFlQyxlQUFlQyxtQkFBbUJDOzRCQUMzRSxJQUFJQzs0QkFFSixJQUFNTyxpQkFBaUJELE9BQ2pCRSxpQ0FBaUNILE9BQ2pDSSw0REFFRSxNQUFLQyx1REFBdUQsQ0FBQ0YsZ0NBQWdDRCxnQkFBZ0JYLGVBQWVDLGVBQWVDLG1CQUFtQkM7NEJBRXRLQywwQkFBMEJTLDJEQUE0RCxHQUFHOzRCQUV6RixPQUFPVDt3QkFDVDtvQkFDRjtpQkFDRDtnQkFFRCxJQUFNVyxnQkFBZ0JQLElBQUFBLHFCQUFXLEVBQUNILGVBQWVQLGtCQUFrQkMsa0JBQWtCQyxlQUFlQyxlQUFlQyxtQkFBbUJDO2dCQUV0SUMsMEJBQTBCVyxnQkFDRSxPQUNFLHVCQTVCNUJuQixtQ0E0QmtDQyx5QkFBTixJQUFLLGFBQXVCQyxrQkFBa0JDLGtCQUFrQkMsZUFBZUMsZUFBZUMsbUJBQW1CQztnQkFFL0ksT0FBT0M7WUFDVDs7O1lBRUFVLEtBQUFBO21CQUFBQSxTQUFBQSx3REFBd0RGLDhCQUE4QixFQUFFRCxjQUFjLEVBQUVYLGFBQWEsRUFBRUMsYUFBYSxFQUFFQyxpQkFBaUIsRUFBRUMsV0FBVztnQkFDbEssSUFBSVU7Z0JBRUosSUFBTUcsZ0JBQWdCQyxjQUFZLENBQUNDLG9CQUFvQixDQUFDaEIsb0JBQ2xEaUIsZ0JBQWdCUixnQkFDaEJTLG1CQUFtQlIsZ0NBQ25CUyxtQkFBbUIsTUFDbkJDLHVDQUF1Q0MsSUFBQUEscUNBQWtDLEVBQUNILGtCQUFrQkQsZUFBZUUsa0JBQWtCckIsZUFBZUMsZUFBZWUsZUFBZWI7Z0JBRWhMVSw0REFBNERTLHNDQUF1QyxHQUFHO2dCQUV0RyxPQUFPVDtZQUNUOzs7V0E3Q0lqQjtFQUErQjRCLGNBQWE7QUFnRGxELElBQU1DLHlCQUF5QixJQUFJN0I7SUFFbkMsV0FBZTZCIn0=