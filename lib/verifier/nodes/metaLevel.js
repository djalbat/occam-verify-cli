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
var _metastatementForMetavariable = /*#__PURE__*/ _interop_require_default(require("../../substitution/metastatementForMetavariable"));
var _query = require("../../utilities/query");
var _ruleNames = require("../../ruleNames");
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
var metavariableNodeQuery = (0, _query.nodeQuery)('/metastatement/metavariable!');
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
            value: function verifyNonTerminalNode(nonTerminalNodeA, nonTerminalNodeB, substitutions, fileContextA, localMetaContextB, verifyAhead) {
                var nonTerminalNodeVerified = false;
                var nonTerminalNodeARuleName = nonTerminalNodeA.getRuleName(), nonTerminalNodeBRuleName = nonTerminalNodeB.getRuleName();
                if (nonTerminalNodeARuleName === nonTerminalNodeBRuleName) {
                    var ruleName = nonTerminalNodeARuleName; ///
                    switch(ruleName){
                        case _ruleNames.METASTATEMENT_RULE_NAME:
                            {
                                var metastatementNodeA = nonTerminalNodeA, metastatementNodeB = nonTerminalNodeB, metastatementNodeVerified = this.verifyMetastatementNode(metastatementNodeA, metastatementNodeB, substitutions, fileContextA, localMetaContextB, verifyAhead);
                                if (metastatementNodeVerified) {
                                    nonTerminalNodeVerified = true; ///
                                } else {
                                    nonTerminalNodeVerified = _get(_get_prototype_of(MetaLevelNodesVerifier.prototype), "verifyNonTerminalNode", this).call(this, nonTerminalNodeA, nonTerminalNodeB, substitutions, fileContextA, localMetaContextB, verifyAhead);
                                }
                                break;
                            }
                        default:
                            {
                                nonTerminalNodeVerified = _get(_get_prototype_of(MetaLevelNodesVerifier.prototype), "verifyNonTerminalNode", this).call(this, nonTerminalNodeA, nonTerminalNodeB, substitutions, fileContextA, localMetaContextB, verifyAhead);
                                break;
                            }
                    }
                }
                return nonTerminalNodeVerified;
            }
        },
        {
            key: "verifyMetastatementNode",
            value: function verifyMetastatementNode(metastatementNodeA, metastatementNodeB, substitutions, fileContextA, localMetaContextB, verifyAhead) {
                var metastatementNodeVerified = false;
                var metavariableNodeA = metavariableNodeQuery(metastatementNodeA);
                if (metavariableNodeA !== null) {
                    var metaVariableNodeVerified = this.verifyMetavariableNode(metavariableNodeA, metastatementNodeB, substitutions, fileContextA, localMetaContextB, verifyAhead);
                    metastatementNodeVerified = metaVariableNodeVerified; ///
                }
                return metastatementNodeVerified;
            }
        },
        {
            key: "verifyMetavariableNode",
            value: function verifyMetavariableNode(metavariableNodeA, metastatementNodeB, substitutions, fileContextA, localMetaContextB, verifyAhead) {
                var metavariableNodeVerified;
                var substitution = substitutions.find(function(substitution) {
                    var substitutionMatchesMetavariableNodeA = substitution.matchMetavariableNode(metavariableNodeA);
                    if (substitutionMatchesMetavariableNodeA) {
                        return true;
                    }
                }) || null;
                if (substitution !== null) {
                    var metastatementNode = metastatementNodeB, metastatementNodeMatches = substitution.matchMetastatementNode(metastatementNode);
                    metavariableNodeVerified = metastatementNodeMatches; ///
                } else {
                    var metavariableNode = metavariableNodeA, metastatementNode1 = metastatementNodeB, metastatementForMetavariableSubstitution = _metastatementForMetavariable.default.fromMetavariableNodeAndMetastatementNode(metavariableNode, metastatementNode1), substitution1 = metastatementForMetavariableSubstitution; ///
                    substitutions.push(substitution1);
                    metavariableNodeVerified = true;
                }
                return metavariableNodeVerified;
            }
        }
    ]);
    return MetaLevelNodesVerifier;
}(_nodes.default);
var metaLevelNodesVerifier = new MetaLevelNodesVerifier();
var _default = metaLevelNodesVerifier;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy92ZXJpZmllci9ub2Rlcy9tZXRhTGV2ZWwuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBOb2Rlc1ZlcmlmaWVyIGZyb20gXCIuLi8uLi92ZXJpZmllci9ub2Rlc1wiO1xuaW1wb3J0IE1ldGFzdGF0ZW1lbnRGb3JNZXRhdmFyaWFibGVTdWJzdGl0dXRpb24gZnJvbSBcIi4uLy4uL3N1YnN0aXR1dGlvbi9tZXRhc3RhdGVtZW50Rm9yTWV0YXZhcmlhYmxlXCI7XG5cbmltcG9ydCB7IG5vZGVRdWVyeSB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvcXVlcnlcIjtcbmltcG9ydCB7IE1FVEFTVEFURU1FTlRfUlVMRV9OQU1FIH0gZnJvbSBcIi4uLy4uL3J1bGVOYW1lc1wiO1xuXG5jb25zdCBtZXRhdmFyaWFibGVOb2RlUXVlcnkgPSBub2RlUXVlcnkoJy9tZXRhc3RhdGVtZW50L21ldGF2YXJpYWJsZSEnKTtcblxuY2xhc3MgTWV0YUxldmVsTm9kZXNWZXJpZmllciBleHRlbmRzIE5vZGVzVmVyaWZpZXIge1xuICB2ZXJpZnlOb25UZXJtaW5hbE5vZGUobm9uVGVybWluYWxOb2RlQSwgbm9uVGVybWluYWxOb2RlQiwgc3Vic3RpdHV0aW9ucywgZmlsZUNvbnRleHRBLCBsb2NhbE1ldGFDb250ZXh0QiwgdmVyaWZ5QWhlYWQpIHtcbiAgICBsZXQgbm9uVGVybWluYWxOb2RlVmVyaWZpZWQgPSBmYWxzZTtcblxuICAgIGNvbnN0IG5vblRlcm1pbmFsTm9kZUFSdWxlTmFtZSA9IG5vblRlcm1pbmFsTm9kZUEuZ2V0UnVsZU5hbWUoKSxcbiAgICAgICAgICBub25UZXJtaW5hbE5vZGVCUnVsZU5hbWUgPSBub25UZXJtaW5hbE5vZGVCLmdldFJ1bGVOYW1lKCk7XG5cbiAgICBpZiAobm9uVGVybWluYWxOb2RlQVJ1bGVOYW1lID09PSBub25UZXJtaW5hbE5vZGVCUnVsZU5hbWUpIHtcbiAgICAgIGNvbnN0IHJ1bGVOYW1lID0gbm9uVGVybWluYWxOb2RlQVJ1bGVOYW1lOyAgLy8vXG5cbiAgICAgIHN3aXRjaCAocnVsZU5hbWUpIHtcbiAgICAgICAgY2FzZSBNRVRBU1RBVEVNRU5UX1JVTEVfTkFNRToge1xuICAgICAgICAgIGNvbnN0IG1ldGFzdGF0ZW1lbnROb2RlQSA9IG5vblRlcm1pbmFsTm9kZUEsICAvLy9cbiAgICAgICAgICAgICAgICBtZXRhc3RhdGVtZW50Tm9kZUIgPSBub25UZXJtaW5hbE5vZGVCLCAgLy8vXG4gICAgICAgICAgICAgICAgbWV0YXN0YXRlbWVudE5vZGVWZXJpZmllZCA9IHRoaXMudmVyaWZ5TWV0YXN0YXRlbWVudE5vZGUobWV0YXN0YXRlbWVudE5vZGVBLCBtZXRhc3RhdGVtZW50Tm9kZUIsIHN1YnN0aXR1dGlvbnMsIGZpbGVDb250ZXh0QSwgbG9jYWxNZXRhQ29udGV4dEIsIHZlcmlmeUFoZWFkKTtcblxuICAgICAgICAgIGlmIChtZXRhc3RhdGVtZW50Tm9kZVZlcmlmaWVkKSB7XG4gICAgICAgICAgICBub25UZXJtaW5hbE5vZGVWZXJpZmllZCA9IHRydWU7ICAvLy9cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbm9uVGVybWluYWxOb2RlVmVyaWZpZWQgPSBzdXBlci52ZXJpZnlOb25UZXJtaW5hbE5vZGUobm9uVGVybWluYWxOb2RlQSwgbm9uVGVybWluYWxOb2RlQiwgc3Vic3RpdHV0aW9ucywgZmlsZUNvbnRleHRBLCBsb2NhbE1ldGFDb250ZXh0QiwgdmVyaWZ5QWhlYWQpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG5cbiAgICAgICAgZGVmYXVsdDoge1xuICAgICAgICAgIG5vblRlcm1pbmFsTm9kZVZlcmlmaWVkID0gc3VwZXIudmVyaWZ5Tm9uVGVybWluYWxOb2RlKG5vblRlcm1pbmFsTm9kZUEsIG5vblRlcm1pbmFsTm9kZUIsIHN1YnN0aXR1dGlvbnMsIGZpbGVDb250ZXh0QSwgbG9jYWxNZXRhQ29udGV4dEIsIHZlcmlmeUFoZWFkKTtcblxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG5vblRlcm1pbmFsTm9kZVZlcmlmaWVkO1xuICB9XG5cbiAgdmVyaWZ5TWV0YXN0YXRlbWVudE5vZGUobWV0YXN0YXRlbWVudE5vZGVBLCBtZXRhc3RhdGVtZW50Tm9kZUIsIHN1YnN0aXR1dGlvbnMsIGZpbGVDb250ZXh0QSwgbG9jYWxNZXRhQ29udGV4dEIsIHZlcmlmeUFoZWFkKSB7XG4gICAgbGV0IG1ldGFzdGF0ZW1lbnROb2RlVmVyaWZpZWQgPSBmYWxzZTtcblxuICAgIGNvbnN0IG1ldGF2YXJpYWJsZU5vZGVBID0gbWV0YXZhcmlhYmxlTm9kZVF1ZXJ5KG1ldGFzdGF0ZW1lbnROb2RlQSk7XG5cbiAgICBpZiAobWV0YXZhcmlhYmxlTm9kZUEgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IG1ldGFWYXJpYWJsZU5vZGVWZXJpZmllZCA9IHRoaXMudmVyaWZ5TWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlQSwgbWV0YXN0YXRlbWVudE5vZGVCLCBzdWJzdGl0dXRpb25zLCBmaWxlQ29udGV4dEEsIGxvY2FsTWV0YUNvbnRleHRCLCB2ZXJpZnlBaGVhZCk7XG5cbiAgICAgIG1ldGFzdGF0ZW1lbnROb2RlVmVyaWZpZWQgPSBtZXRhVmFyaWFibGVOb2RlVmVyaWZpZWQ7IC8vL1xuICAgIH1cblxuICAgIHJldHVybiBtZXRhc3RhdGVtZW50Tm9kZVZlcmlmaWVkO1xuICB9XG5cbiAgdmVyaWZ5TWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlQSwgbWV0YXN0YXRlbWVudE5vZGVCLCBzdWJzdGl0dXRpb25zLCBmaWxlQ29udGV4dEEsIGxvY2FsTWV0YUNvbnRleHRCLCB2ZXJpZnlBaGVhZCkge1xuICAgIGxldCBtZXRhdmFyaWFibGVOb2RlVmVyaWZpZWQ7XG5cbiAgICBjb25zdCBzdWJzdGl0dXRpb24gPSBzdWJzdGl0dXRpb25zLmZpbmQoKHN1YnN0aXR1dGlvbikgPT4ge1xuICAgICAgICAgICAgY29uc3Qgc3Vic3RpdHV0aW9uTWF0Y2hlc01ldGF2YXJpYWJsZU5vZGVBID0gc3Vic3RpdHV0aW9uLm1hdGNoTWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlQSk7XG5cbiAgICAgICAgICAgIGlmIChzdWJzdGl0dXRpb25NYXRjaGVzTWV0YXZhcmlhYmxlTm9kZUEpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSkgfHwgbnVsbDtcblxuICAgIGlmIChzdWJzdGl0dXRpb24gIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IG1ldGFzdGF0ZW1lbnROb2RlID0gbWV0YXN0YXRlbWVudE5vZGVCLCAvLy9cbiAgICAgICAgICAgIG1ldGFzdGF0ZW1lbnROb2RlTWF0Y2hlcyA9IHN1YnN0aXR1dGlvbi5tYXRjaE1ldGFzdGF0ZW1lbnROb2RlKG1ldGFzdGF0ZW1lbnROb2RlKTtcblxuICAgICAgbWV0YXZhcmlhYmxlTm9kZVZlcmlmaWVkID0gbWV0YXN0YXRlbWVudE5vZGVNYXRjaGVzOyAgLy8vXG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IG1ldGF2YXJpYWJsZU5vZGUgPSBtZXRhdmFyaWFibGVOb2RlQSwgLy8vXG4gICAgICAgICAgICBtZXRhc3RhdGVtZW50Tm9kZSA9IG1ldGFzdGF0ZW1lbnROb2RlQiwgLy8vXG4gICAgICAgICAgICBtZXRhc3RhdGVtZW50Rm9yTWV0YXZhcmlhYmxlU3Vic3RpdHV0aW9uID0gTWV0YXN0YXRlbWVudEZvck1ldGF2YXJpYWJsZVN1YnN0aXR1dGlvbi5mcm9tTWV0YXZhcmlhYmxlTm9kZUFuZE1ldGFzdGF0ZW1lbnROb2RlKG1ldGF2YXJpYWJsZU5vZGUsIG1ldGFzdGF0ZW1lbnROb2RlKSxcbiAgICAgICAgICAgIHN1YnN0aXR1dGlvbiA9IG1ldGFzdGF0ZW1lbnRGb3JNZXRhdmFyaWFibGVTdWJzdGl0dXRpb247ICAvLy9cblxuICAgICAgc3Vic3RpdHV0aW9ucy5wdXNoKHN1YnN0aXR1dGlvbik7XG5cbiAgICAgIG1ldGF2YXJpYWJsZU5vZGVWZXJpZmllZCA9IHRydWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1ldGF2YXJpYWJsZU5vZGVWZXJpZmllZDtcbiAgfVxufVxuXG5jb25zdCBtZXRhTGV2ZWxOb2Rlc1ZlcmlmaWVyID0gbmV3IE1ldGFMZXZlbE5vZGVzVmVyaWZpZXIoKTtcblxuZXhwb3J0IGRlZmF1bHQgbWV0YUxldmVsTm9kZXNWZXJpZmllcjtcbiJdLCJuYW1lcyI6WyJtZXRhdmFyaWFibGVOb2RlUXVlcnkiLCJub2RlUXVlcnkiLCJNZXRhTGV2ZWxOb2Rlc1ZlcmlmaWVyIiwidmVyaWZ5Tm9uVGVybWluYWxOb2RlIiwibm9uVGVybWluYWxOb2RlQSIsIm5vblRlcm1pbmFsTm9kZUIiLCJzdWJzdGl0dXRpb25zIiwiZmlsZUNvbnRleHRBIiwibG9jYWxNZXRhQ29udGV4dEIiLCJ2ZXJpZnlBaGVhZCIsIm5vblRlcm1pbmFsTm9kZVZlcmlmaWVkIiwibm9uVGVybWluYWxOb2RlQVJ1bGVOYW1lIiwiZ2V0UnVsZU5hbWUiLCJub25UZXJtaW5hbE5vZGVCUnVsZU5hbWUiLCJydWxlTmFtZSIsIk1FVEFTVEFURU1FTlRfUlVMRV9OQU1FIiwibWV0YXN0YXRlbWVudE5vZGVBIiwibWV0YXN0YXRlbWVudE5vZGVCIiwibWV0YXN0YXRlbWVudE5vZGVWZXJpZmllZCIsInZlcmlmeU1ldGFzdGF0ZW1lbnROb2RlIiwibWV0YXZhcmlhYmxlTm9kZUEiLCJtZXRhVmFyaWFibGVOb2RlVmVyaWZpZWQiLCJ2ZXJpZnlNZXRhdmFyaWFibGVOb2RlIiwibWV0YXZhcmlhYmxlTm9kZVZlcmlmaWVkIiwic3Vic3RpdHV0aW9uIiwiZmluZCIsInN1YnN0aXR1dGlvbk1hdGNoZXNNZXRhdmFyaWFibGVOb2RlQSIsIm1hdGNoTWV0YXZhcmlhYmxlTm9kZSIsIm1ldGFzdGF0ZW1lbnROb2RlIiwibWV0YXN0YXRlbWVudE5vZGVNYXRjaGVzIiwibWF0Y2hNZXRhc3RhdGVtZW50Tm9kZSIsIm1ldGF2YXJpYWJsZU5vZGUiLCJtZXRhc3RhdGVtZW50Rm9yTWV0YXZhcmlhYmxlU3Vic3RpdHV0aW9uIiwiTWV0YXN0YXRlbWVudEZvck1ldGF2YXJpYWJsZVN1YnN0aXR1dGlvbiIsImZyb21NZXRhdmFyaWFibGVOb2RlQW5kTWV0YXN0YXRlbWVudE5vZGUiLCJwdXNoIiwiTm9kZXNWZXJpZmllciIsIm1ldGFMZXZlbE5vZGVzVmVyaWZpZXIiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQTZGQTs7O2VBQUE7Ozs0REEzRjBCO21GQUMyQjtxQkFFM0I7eUJBQ2M7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUV4QyxJQUFNQSx3QkFBd0JDLElBQUFBLGdCQUFTLEVBQUM7QUFFeEMsSUFBQSxBQUFNQyx1Q0FBRCxBQUFMO2NBQU1BOytCQUFBQTthQUFBQTtnQ0FBQUE7OztrQkFBQUE7O1lBQ0pDLEtBQUFBO21CQUFBQSxTQUFBQSxzQkFBc0JDLGdCQUFnQixFQUFFQyxnQkFBZ0IsRUFBRUMsYUFBYSxFQUFFQyxZQUFZLEVBQUVDLGlCQUFpQixFQUFFQyxXQUFXO2dCQUNuSCxJQUFJQywwQkFBMEI7Z0JBRTlCLElBQU1DLDJCQUEyQlAsaUJBQWlCUSxXQUFXLElBQ3ZEQywyQkFBMkJSLGlCQUFpQk8sV0FBVztnQkFFN0QsSUFBSUQsNkJBQTZCRSwwQkFBMEI7b0JBQ3pELElBQU1DLFdBQVdILDBCQUEyQixHQUFHO29CQUUvQyxPQUFRRzt3QkFDTixLQUFLQyxrQ0FBdUI7NEJBQUU7Z0NBQzVCLElBQU1DLHFCQUFxQlosa0JBQ3JCYSxxQkFBcUJaLGtCQUNyQmEsNEJBQTRCLElBQUksQ0FBQ0MsdUJBQXVCLENBQUNILG9CQUFvQkMsb0JBQW9CWCxlQUFlQyxjQUFjQyxtQkFBbUJDO2dDQUV2SixJQUFJUywyQkFBMkI7b0NBQzdCUiwwQkFBMEIsTUFBTyxHQUFHO2dDQUN0QyxPQUFPO29DQUNMQSwwQkFBMEIsdUJBbkJoQ1IsbUNBbUJzQ0MseUJBQU4sSUFBSyxhQUF1QkMsa0JBQWtCQyxrQkFBa0JDLGVBQWVDLGNBQWNDLG1CQUFtQkM7Z0NBQzVJO2dDQUVBOzRCQUNGO3dCQUVBOzRCQUFTO2dDQUNQQywwQkFBMEIsdUJBMUI5QlIsbUNBMEJvQ0MseUJBQU4sSUFBSyxhQUF1QkMsa0JBQWtCQyxrQkFBa0JDLGVBQWVDLGNBQWNDLG1CQUFtQkM7Z0NBRTFJOzRCQUNGO29CQUNGO2dCQUNGO2dCQUVBLE9BQU9DO1lBQ1Q7OztZQUVBUyxLQUFBQTttQkFBQUEsU0FBQUEsd0JBQXdCSCxrQkFBa0IsRUFBRUMsa0JBQWtCLEVBQUVYLGFBQWEsRUFBRUMsWUFBWSxFQUFFQyxpQkFBaUIsRUFBRUMsV0FBVztnQkFDekgsSUFBSVMsNEJBQTRCO2dCQUVoQyxJQUFNRSxvQkFBb0JwQixzQkFBc0JnQjtnQkFFaEQsSUFBSUksc0JBQXNCLE1BQU07b0JBQzlCLElBQU1DLDJCQUEyQixJQUFJLENBQUNDLHNCQUFzQixDQUFDRixtQkFBbUJILG9CQUFvQlgsZUFBZUMsY0FBY0MsbUJBQW1CQztvQkFFcEpTLDRCQUE0QkcsMEJBQTBCLEdBQUc7Z0JBQzNEO2dCQUVBLE9BQU9IO1lBQ1Q7OztZQUVBSSxLQUFBQTttQkFBQUEsU0FBQUEsdUJBQXVCRixpQkFBaUIsRUFBRUgsa0JBQWtCLEVBQUVYLGFBQWEsRUFBRUMsWUFBWSxFQUFFQyxpQkFBaUIsRUFBRUMsV0FBVztnQkFDdkgsSUFBSWM7Z0JBRUosSUFBTUMsZUFBZWxCLGNBQWNtQixJQUFJLENBQUMsU0FBQ0Q7b0JBQ2pDLElBQU1FLHVDQUF1Q0YsYUFBYUcscUJBQXFCLENBQUNQO29CQUVoRixJQUFJTSxzQ0FBc0M7d0JBQ3hDLE9BQU87b0JBQ1Q7Z0JBQ0YsTUFBTTtnQkFFWixJQUFJRixpQkFBaUIsTUFBTTtvQkFDekIsSUFBTUksb0JBQW9CWCxvQkFDcEJZLDJCQUEyQkwsYUFBYU0sc0JBQXNCLENBQUNGO29CQUVyRUwsMkJBQTJCTSwwQkFBMkIsR0FBRztnQkFDM0QsT0FBTztvQkFDTCxJQUFNRSxtQkFBbUJYLG1CQUNuQlEscUJBQW9CWCxvQkFDcEJlLDJDQUEyQ0MscUNBQXdDLENBQUNDLHdDQUF3QyxDQUFDSCxrQkFBa0JILHFCQUMvSUosZ0JBQWVRLDBDQUEyQyxHQUFHO29CQUVuRTFCLGNBQWM2QixJQUFJLENBQUNYO29CQUVuQkQsMkJBQTJCO2dCQUM3QjtnQkFFQSxPQUFPQTtZQUNUOzs7V0E5RUlyQjtFQUErQmtDLGNBQWE7QUFpRmxELElBQU1DLHlCQUF5QixJQUFJbkM7SUFFbkMsV0FBZW1DIn0=