"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    default: function() {
        return StatementForMetavariableSubstitution;
    },
    matchStatementNode: function() {
        return matchStatementNode;
    }
});
var _substitution = /*#__PURE__*/ _interop_require_default(require("../substitution"));
var _substitution1 = /*#__PURE__*/ _interop_require_default(require("../verifier/nodes/substitution"));
var _termForVariable = /*#__PURE__*/ _interop_require_default(require("./termForVariable"));
var _intrinsicLevel = /*#__PURE__*/ _interop_require_default(require("../verifier/nodes/intrinsicLevel"));
var _array = require("../utilities/array");
var _proof = require("../utilities/proof");
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
var StatementForMetavariableSubstitution = /*#__PURE__*/ function(Substitution) {
    _inherits(StatementForMetavariableSubstitution, Substitution);
    var _super = _create_super(StatementForMetavariableSubstitution);
    function StatementForMetavariableSubstitution(metavariableNode, statementNode, substitution) {
        _class_call_check(this, StatementForMetavariableSubstitution);
        var _this;
        _this = _super.call(this);
        _this.metavariableNode = metavariableNode;
        _this.statementNode = statementNode;
        _this.substitution = substitution;
        return _this;
    }
    _create_class(StatementForMetavariableSubstitution, [
        {
            key: "getMetavariableNode",
            value: function getMetavariableNode() {
                return this.metavariableNode;
            }
        },
        {
            key: "getStatementNode",
            value: function getStatementNode() {
                return this.statementNode;
            }
        },
        {
            key: "getSubstitution",
            value: function getSubstitution() {
                return this.substitution;
            }
        },
        {
            key: "matchStatementNode",
            value: function matchStatementNode(statementNode, substitutions, localContextA, localContextB) {
                var statementNodeMatches;
                statementNodeMatches = this.matchStatementNodeEx(statementNode, substitutions, localContextA, localContextB);
                if (!statementNodeMatches) {
                    var bracketedStatementChildNode = (0, _proof.bracketedStatementChildNodeFromStatementNode)(statementNode);
                    if (bracketedStatementChildNode !== null) {
                        var _$statementNode = bracketedStatementChildNode; ///
                        statementNodeMatches = this.matchStatementNodeEx(_$statementNode, substitutions, localContextA, localContextB);
                    }
                }
                return statementNodeMatches;
            }
        },
        {
            key: "matchStatementNodeEx",
            value: function matchStatementNodeEx(statementNode, substitutions, localContextA, localContextB) {
                var statementNodeMatches;
                if (this.substitution === null) {
                    statementNodeMatches = this.statementNode.match(statementNode);
                } else {
                    var substitution = this.substitution, statementNodeA = statementNode, statementNodeB = this.statementNode; ///
                    statementNodeMatches = matchStatementNode(statementNodeA, statementNodeB, substitution, substitutions, localContextA, localContextB);
                }
                return statementNodeMatches;
            }
        },
        {
            key: "matchMetavariableNode",
            value: function matchMetavariableNode(metavariableNode) {
                var metavariableNodeMatches = this.metavariableNode.match(metavariableNode);
                return metavariableNodeMatches;
            }
        }
    ], [
        {
            key: "fromMetavariableNodeAndStatementNode",
            value: function fromMetavariableNodeAndStatementNode(metavariableNode, statementNode) {
                var substitution = null;
                var statementForMetavariableSubstitution = new StatementForMetavariableSubstitution(metavariableNode, statementNode, substitution);
                var bracketedStatementChildNode = (0, _proof.bracketedStatementChildNodeFromStatementNode)(statementNode);
                if (bracketedStatementChildNode !== null) {
                    var _$statementNode = bracketedStatementChildNode; ///
                    statementForMetavariableSubstitution = new StatementForMetavariableSubstitution(metavariableNode, _$statementNode, substitution);
                }
                return statementForMetavariableSubstitution;
            }
        },
        {
            key: "fromMetavariableNodeStatementNodeAndSubstitution",
            value: function fromMetavariableNodeStatementNodeAndSubstitution(metavariableNode, statementNode, substitution) {
                var statementForMetavariableSubstitution = new StatementForMetavariableSubstitution(metavariableNode, statementNode, substitution);
                var bracketedStatementChildNode = (0, _proof.bracketedStatementChildNodeFromStatementNode)(statementNode);
                if (bracketedStatementChildNode !== null) {
                    var _$statementNode = bracketedStatementChildNode; ///
                    statementForMetavariableSubstitution = new StatementForMetavariableSubstitution(metavariableNode, _$statementNode, substitution);
                }
                return statementForMetavariableSubstitution;
            }
        }
    ]);
    return StatementForMetavariableSubstitution;
}(_substitution.default);
function transformSubstitutions(substitutionsA, substitutionsB) {
    substitutionsA = substitutionsA.map(function(substitutionA) {
        var substitution = substitutionA, substitutions = substitutionsB, termForVariableSubstitution = _termForVariable.default.fromSubstitutionAndSubstitutions(substitution, substitutions);
        substitutionA = termForVariableSubstitution; ///
        return substitutionA;
    });
    return substitutionsA;
}
function matchStatementNode(statementNodeA, statementNodeB, substitution, substitutions, localContextA, localContextB) {
    var statementNodeMatches = false;
    var termForVariableSubstitution = _termForVariable.default.fromSubstitutionAndSubstitutions(substitution, substitutions), intrinsic = termForVariableSubstitution.isIntrinsic(substitution);
    var substitutionsA = []; ///
    if (intrinsic) {
        var substitutionA = termForVariableSubstitution; ///
        substitutionsA.push(substitutionA);
    }
    var nonTerminalNodeA = statementNodeA, nonTerminalNodeB = statementNodeB, nonTerminalNodeVerified = _substitution1.default.verifyNonTerminalNode(nonTerminalNodeA, nonTerminalNodeB, substitutionsA, localContextA, localContextB, function() {
        var verifiedAhead = true;
        return verifiedAhead;
    });
    if (nonTerminalNodeVerified) {
        if (!intrinsic) {
            var substitutionB = termForVariableSubstitution, substitutionsB = [
                substitutionB
            ];
            substitutionsA = transformSubstitutions(substitutionsA, substitutionsB);
            (0, _array.push)(substitutions, substitutionsA);
        }
        statementNodeMatches = true;
    }
    return statementNodeMatches;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zdWJzdGl0dXRpb24vc3RhdGVtZW50Rm9yTWV0YXZhcmlhYmxlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgU3Vic3RpdHV0aW9uIGZyb20gXCIuLi9zdWJzdGl0dXRpb25cIjtcblxuaW1wb3J0IHN1YnN0aXR1dGlvbk5vZGVzVmVyaWZpZXIgZnJvbSBcIi4uL3ZlcmlmaWVyL25vZGVzL3N1YnN0aXR1dGlvblwiO1xuaW1wb3J0IFRlcm1Gb3JWYXJpYWJsZVN1YnN0aXR1dGlvbiBmcm9tIFwiLi90ZXJtRm9yVmFyaWFibGVcIjtcbmltcG9ydCBpbnRyaW5zaWNMZXZlbE5vZGVzVmVyaWZpZXIgZnJvbSBcIi4uL3ZlcmlmaWVyL25vZGVzL2ludHJpbnNpY0xldmVsXCI7XG5cbmltcG9ydCB7IHB1c2ggfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2FycmF5XCI7XG5pbXBvcnQgeyBicmFja2V0ZWRTdGF0ZW1lbnRDaGlsZE5vZGVGcm9tU3RhdGVtZW50Tm9kZSB9IGZyb20gXCIuLi91dGlsaXRpZXMvcHJvb2ZcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3RhdGVtZW50Rm9yTWV0YXZhcmlhYmxlU3Vic3RpdHV0aW9uIGV4dGVuZHMgU3Vic3RpdHV0aW9uIHtcbiAgY29uc3RydWN0b3IobWV0YXZhcmlhYmxlTm9kZSwgc3RhdGVtZW50Tm9kZSwgc3Vic3RpdHV0aW9uKSB7XG4gICAgc3VwZXIoKTtcblxuICAgIHRoaXMubWV0YXZhcmlhYmxlTm9kZSA9IG1ldGF2YXJpYWJsZU5vZGU7XG4gICAgdGhpcy5zdGF0ZW1lbnROb2RlID0gc3RhdGVtZW50Tm9kZTtcbiAgICB0aGlzLnN1YnN0aXR1dGlvbiA9IHN1YnN0aXR1dGlvbjtcbiAgfVxuXG4gIGdldE1ldGF2YXJpYWJsZU5vZGUoKSB7XG4gICAgcmV0dXJuIHRoaXMubWV0YXZhcmlhYmxlTm9kZTtcbiAgfVxuXG4gIGdldFN0YXRlbWVudE5vZGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RhdGVtZW50Tm9kZTtcbiAgfVxuXG4gIGdldFN1YnN0aXR1dGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5zdWJzdGl0dXRpb247XG4gIH1cblxuICBtYXRjaFN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSwgc3Vic3RpdHV0aW9ucywgbG9jYWxDb250ZXh0QSwgbG9jYWxDb250ZXh0Qikge1xuICAgIGxldCBzdGF0ZW1lbnROb2RlTWF0Y2hlcztcblxuICAgIHN0YXRlbWVudE5vZGVNYXRjaGVzID0gdGhpcy5tYXRjaFN0YXRlbWVudE5vZGVFeChzdGF0ZW1lbnROb2RlLCBzdWJzdGl0dXRpb25zLCBsb2NhbENvbnRleHRBLCBsb2NhbENvbnRleHRCKTtcblxuICAgIGlmICghc3RhdGVtZW50Tm9kZU1hdGNoZXMpIHtcbiAgICAgIGNvbnN0IGJyYWNrZXRlZFN0YXRlbWVudENoaWxkTm9kZSA9IGJyYWNrZXRlZFN0YXRlbWVudENoaWxkTm9kZUZyb21TdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUpO1xuXG4gICAgICBpZiAoYnJhY2tldGVkU3RhdGVtZW50Q2hpbGROb2RlICE9PSBudWxsKSB7XG4gICAgICAgIGNvbnN0IHN0YXRlbWVudE5vZGUgPSBicmFja2V0ZWRTdGF0ZW1lbnRDaGlsZE5vZGU7IC8vL1xuXG4gICAgICAgIHN0YXRlbWVudE5vZGVNYXRjaGVzID0gdGhpcy5tYXRjaFN0YXRlbWVudE5vZGVFeChzdGF0ZW1lbnROb2RlLCBzdWJzdGl0dXRpb25zLCBsb2NhbENvbnRleHRBLCBsb2NhbENvbnRleHRCKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gc3RhdGVtZW50Tm9kZU1hdGNoZXM7XG4gIH1cblxuICBtYXRjaFN0YXRlbWVudE5vZGVFeChzdGF0ZW1lbnROb2RlLCBzdWJzdGl0dXRpb25zLCBsb2NhbENvbnRleHRBLCBsb2NhbENvbnRleHRCKSB7XG4gICAgbGV0IHN0YXRlbWVudE5vZGVNYXRjaGVzO1xuXG4gICAgaWYgKHRoaXMuc3Vic3RpdHV0aW9uID09PSBudWxsKSB7XG4gICAgICBzdGF0ZW1lbnROb2RlTWF0Y2hlcyA9IHRoaXMuc3RhdGVtZW50Tm9kZS5tYXRjaChzdGF0ZW1lbnROb2RlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3Qgc3Vic3RpdHV0aW9uID0gdGhpcy5zdWJzdGl0dXRpb24sIC8vL1xuICAgICAgICAgICAgc3RhdGVtZW50Tm9kZUEgPSBzdGF0ZW1lbnROb2RlLCAgLy8vXG4gICAgICAgICAgICBzdGF0ZW1lbnROb2RlQiA9IHRoaXMuc3RhdGVtZW50Tm9kZTsgLy8vXG5cbiAgICAgIHN0YXRlbWVudE5vZGVNYXRjaGVzID0gbWF0Y2hTdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGVBLCBzdGF0ZW1lbnROb2RlQiwgc3Vic3RpdHV0aW9uLCBzdWJzdGl0dXRpb25zLCBsb2NhbENvbnRleHRBLCBsb2NhbENvbnRleHRCKTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3RhdGVtZW50Tm9kZU1hdGNoZXM7XG4gIH1cblxuICBtYXRjaE1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSkge1xuICAgIGNvbnN0IG1ldGF2YXJpYWJsZU5vZGVNYXRjaGVzID0gdGhpcy5tZXRhdmFyaWFibGVOb2RlLm1hdGNoKG1ldGF2YXJpYWJsZU5vZGUpO1xuXG4gICAgcmV0dXJuIG1ldGF2YXJpYWJsZU5vZGVNYXRjaGVzO1xuICB9XG5cbiAgc3RhdGljIGZyb21NZXRhdmFyaWFibGVOb2RlQW5kU3RhdGVtZW50Tm9kZShtZXRhdmFyaWFibGVOb2RlLCBzdGF0ZW1lbnROb2RlKSB7XG4gICAgY29uc3Qgc3Vic3RpdHV0aW9uID0gbnVsbDtcblxuICAgIGxldCBzdGF0ZW1lbnRGb3JNZXRhdmFyaWFibGVTdWJzdGl0dXRpb24gPSBuZXcgU3RhdGVtZW50Rm9yTWV0YXZhcmlhYmxlU3Vic3RpdHV0aW9uKG1ldGF2YXJpYWJsZU5vZGUsIHN0YXRlbWVudE5vZGUsIHN1YnN0aXR1dGlvbik7XG5cbiAgICBjb25zdCBicmFja2V0ZWRTdGF0ZW1lbnRDaGlsZE5vZGUgPSBicmFja2V0ZWRTdGF0ZW1lbnRDaGlsZE5vZGVGcm9tU3RhdGVtZW50Tm9kZShzdGF0ZW1lbnROb2RlKTtcblxuICAgIGlmIChicmFja2V0ZWRTdGF0ZW1lbnRDaGlsZE5vZGUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHN0YXRlbWVudE5vZGUgPSBicmFja2V0ZWRTdGF0ZW1lbnRDaGlsZE5vZGU7IC8vL1xuXG4gICAgICBzdGF0ZW1lbnRGb3JNZXRhdmFyaWFibGVTdWJzdGl0dXRpb24gPSBuZXcgU3RhdGVtZW50Rm9yTWV0YXZhcmlhYmxlU3Vic3RpdHV0aW9uKG1ldGF2YXJpYWJsZU5vZGUsIHN0YXRlbWVudE5vZGUsIHN1YnN0aXR1dGlvbik7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN0YXRlbWVudEZvck1ldGF2YXJpYWJsZVN1YnN0aXR1dGlvbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTWV0YXZhcmlhYmxlTm9kZVN0YXRlbWVudE5vZGVBbmRTdWJzdGl0dXRpb24obWV0YXZhcmlhYmxlTm9kZSwgc3RhdGVtZW50Tm9kZSwgc3Vic3RpdHV0aW9uKSB7XG4gICAgbGV0IHN0YXRlbWVudEZvck1ldGF2YXJpYWJsZVN1YnN0aXR1dGlvbiA9IG5ldyBTdGF0ZW1lbnRGb3JNZXRhdmFyaWFibGVTdWJzdGl0dXRpb24obWV0YXZhcmlhYmxlTm9kZSwgc3RhdGVtZW50Tm9kZSwgc3Vic3RpdHV0aW9uKTtcblxuICAgIGNvbnN0IGJyYWNrZXRlZFN0YXRlbWVudENoaWxkTm9kZSA9IGJyYWNrZXRlZFN0YXRlbWVudENoaWxkTm9kZUZyb21TdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUpO1xuXG4gICAgaWYgKGJyYWNrZXRlZFN0YXRlbWVudENoaWxkTm9kZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3Qgc3RhdGVtZW50Tm9kZSA9IGJyYWNrZXRlZFN0YXRlbWVudENoaWxkTm9kZTsgLy8vXG5cbiAgICAgIHN0YXRlbWVudEZvck1ldGF2YXJpYWJsZVN1YnN0aXR1dGlvbiA9IG5ldyBTdGF0ZW1lbnRGb3JNZXRhdmFyaWFibGVTdWJzdGl0dXRpb24obWV0YXZhcmlhYmxlTm9kZSwgc3RhdGVtZW50Tm9kZSwgc3Vic3RpdHV0aW9uKTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3RhdGVtZW50Rm9yTWV0YXZhcmlhYmxlU3Vic3RpdHV0aW9uO1xuICB9XG59XG5cbmZ1bmN0aW9uIHRyYW5zZm9ybVN1YnN0aXR1dGlvbnMoc3Vic3RpdHV0aW9uc0EsIHN1YnN0aXR1dGlvbnNCKSB7XG4gIHN1YnN0aXR1dGlvbnNBID0gc3Vic3RpdHV0aW9uc0EubWFwKChzdWJzdGl0dXRpb25BKSA9PiB7XG4gICAgY29uc3Qgc3Vic3RpdHV0aW9uID0gc3Vic3RpdHV0aW9uQSwgIC8vL1xuICAgICAgICAgIHN1YnN0aXR1dGlvbnMgPSBzdWJzdGl0dXRpb25zQixcbiAgICAgICAgICB0ZXJtRm9yVmFyaWFibGVTdWJzdGl0dXRpb24gPSBUZXJtRm9yVmFyaWFibGVTdWJzdGl0dXRpb24uZnJvbVN1YnN0aXR1dGlvbkFuZFN1YnN0aXR1dGlvbnMoc3Vic3RpdHV0aW9uLCBzdWJzdGl0dXRpb25zKTtcblxuICAgIHN1YnN0aXR1dGlvbkEgPSB0ZXJtRm9yVmFyaWFibGVTdWJzdGl0dXRpb247IC8vL1xuXG4gICAgcmV0dXJuIHN1YnN0aXR1dGlvbkE7XG4gIH0pO1xuXG4gIHJldHVybiBzdWJzdGl0dXRpb25zQTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1hdGNoU3RhdGVtZW50Tm9kZShzdGF0ZW1lbnROb2RlQSwgc3RhdGVtZW50Tm9kZUIsIHN1YnN0aXR1dGlvbiwgc3Vic3RpdHV0aW9ucywgbG9jYWxDb250ZXh0QSwgbG9jYWxDb250ZXh0Qikge1xuICBsZXQgc3RhdGVtZW50Tm9kZU1hdGNoZXMgPSBmYWxzZTtcblxuICBjb25zdCB0ZXJtRm9yVmFyaWFibGVTdWJzdGl0dXRpb24gPSBUZXJtRm9yVmFyaWFibGVTdWJzdGl0dXRpb24uZnJvbVN1YnN0aXR1dGlvbkFuZFN1YnN0aXR1dGlvbnMoc3Vic3RpdHV0aW9uLCBzdWJzdGl0dXRpb25zKSxcbiAgICAgICAgaW50cmluc2ljID0gdGVybUZvclZhcmlhYmxlU3Vic3RpdHV0aW9uLmlzSW50cmluc2ljKHN1YnN0aXR1dGlvbik7XG5cbiAgbGV0IHN1YnN0aXR1dGlvbnNBID0gW107IC8vL1xuXG4gIGlmIChpbnRyaW5zaWMpIHtcbiAgICBjb25zdCBzdWJzdGl0dXRpb25BID0gdGVybUZvclZhcmlhYmxlU3Vic3RpdHV0aW9uOyAgLy8vXG5cbiAgICBzdWJzdGl0dXRpb25zQS5wdXNoKHN1YnN0aXR1dGlvbkEpO1xuICB9XG5cbiAgY29uc3Qgbm9uVGVybWluYWxOb2RlQSA9IHN0YXRlbWVudE5vZGVBLCAgLy8vXG4gICAgICAgIG5vblRlcm1pbmFsTm9kZUIgPSBzdGF0ZW1lbnROb2RlQiwgIC8vL1xuICAgICAgICBub25UZXJtaW5hbE5vZGVWZXJpZmllZCA9IHN1YnN0aXR1dGlvbk5vZGVzVmVyaWZpZXIudmVyaWZ5Tm9uVGVybWluYWxOb2RlKG5vblRlcm1pbmFsTm9kZUEsIG5vblRlcm1pbmFsTm9kZUIsIHN1YnN0aXR1dGlvbnNBLCBsb2NhbENvbnRleHRBLCBsb2NhbENvbnRleHRCLCAoKSA9PiB7XG4gICAgICAgICAgY29uc3QgdmVyaWZpZWRBaGVhZCA9IHRydWU7XG5cbiAgICAgICAgICByZXR1cm4gdmVyaWZpZWRBaGVhZDtcbiAgICAgICAgfSk7XG5cbiAgaWYgKG5vblRlcm1pbmFsTm9kZVZlcmlmaWVkKSB7XG4gICAgaWYgKCFpbnRyaW5zaWMpIHtcbiAgICAgIGNvbnN0IHN1YnN0aXR1dGlvbkIgPSB0ZXJtRm9yVmFyaWFibGVTdWJzdGl0dXRpb24sICAvLy9cbiAgICAgICAgICAgIHN1YnN0aXR1dGlvbnNCID0gW1xuICAgICAgICAgICAgICBzdWJzdGl0dXRpb25CXG4gICAgICAgICAgICBdO1xuXG4gICAgICBzdWJzdGl0dXRpb25zQSA9IHRyYW5zZm9ybVN1YnN0aXR1dGlvbnMoc3Vic3RpdHV0aW9uc0EsIHN1YnN0aXR1dGlvbnNCKTtcblxuICAgICAgcHVzaChzdWJzdGl0dXRpb25zLCBzdWJzdGl0dXRpb25zQSk7XG4gICAgfVxuXG4gICAgc3RhdGVtZW50Tm9kZU1hdGNoZXMgPSB0cnVlO1xuICB9XG5cbiAgcmV0dXJuIHN0YXRlbWVudE5vZGVNYXRjaGVzO1xufVxuIl0sIm5hbWVzIjpbIlN0YXRlbWVudEZvck1ldGF2YXJpYWJsZVN1YnN0aXR1dGlvbiIsIm1hdGNoU3RhdGVtZW50Tm9kZSIsIm1ldGF2YXJpYWJsZU5vZGUiLCJzdGF0ZW1lbnROb2RlIiwic3Vic3RpdHV0aW9uIiwiZ2V0TWV0YXZhcmlhYmxlTm9kZSIsImdldFN0YXRlbWVudE5vZGUiLCJnZXRTdWJzdGl0dXRpb24iLCJzdWJzdGl0dXRpb25zIiwibG9jYWxDb250ZXh0QSIsImxvY2FsQ29udGV4dEIiLCJzdGF0ZW1lbnROb2RlTWF0Y2hlcyIsIm1hdGNoU3RhdGVtZW50Tm9kZUV4IiwiYnJhY2tldGVkU3RhdGVtZW50Q2hpbGROb2RlIiwiYnJhY2tldGVkU3RhdGVtZW50Q2hpbGROb2RlRnJvbVN0YXRlbWVudE5vZGUiLCJtYXRjaCIsInN0YXRlbWVudE5vZGVBIiwic3RhdGVtZW50Tm9kZUIiLCJtYXRjaE1ldGF2YXJpYWJsZU5vZGUiLCJtZXRhdmFyaWFibGVOb2RlTWF0Y2hlcyIsImZyb21NZXRhdmFyaWFibGVOb2RlQW5kU3RhdGVtZW50Tm9kZSIsInN0YXRlbWVudEZvck1ldGF2YXJpYWJsZVN1YnN0aXR1dGlvbiIsImZyb21NZXRhdmFyaWFibGVOb2RlU3RhdGVtZW50Tm9kZUFuZFN1YnN0aXR1dGlvbiIsIlN1YnN0aXR1dGlvbiIsInRyYW5zZm9ybVN1YnN0aXR1dGlvbnMiLCJzdWJzdGl0dXRpb25zQSIsInN1YnN0aXR1dGlvbnNCIiwibWFwIiwic3Vic3RpdHV0aW9uQSIsInRlcm1Gb3JWYXJpYWJsZVN1YnN0aXR1dGlvbiIsIlRlcm1Gb3JWYXJpYWJsZVN1YnN0aXR1dGlvbiIsImZyb21TdWJzdGl0dXRpb25BbmRTdWJzdGl0dXRpb25zIiwiaW50cmluc2ljIiwiaXNJbnRyaW5zaWMiLCJwdXNoIiwibm9uVGVybWluYWxOb2RlQSIsIm5vblRlcm1pbmFsTm9kZUIiLCJub25UZXJtaW5hbE5vZGVWZXJpZmllZCIsInN1YnN0aXR1dGlvbk5vZGVzVmVyaWZpZXIiLCJ2ZXJpZnlOb25UZXJtaW5hbE5vZGUiLCJ2ZXJpZmllZEFoZWFkIiwic3Vic3RpdHV0aW9uQiJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7OztlQVdxQkE7O0lBMEdMQyxrQkFBa0I7ZUFBbEJBOzs7bUVBbkhTO29FQUVhO3NFQUNFO3FFQUNBO3FCQUVuQjtxQkFDd0M7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFOUMsSUFBQSxBQUFNRCxxREFBRCxBQUFMO2NBQU1BOytCQUFBQTthQUFBQSxxQ0FDUEUsZ0JBQWdCLEVBQUVDLGFBQWEsRUFBRUMsWUFBWTtnQ0FEdENKOzs7UUFJakIsTUFBS0UsZ0JBQWdCLEdBQUdBO1FBQ3hCLE1BQUtDLGFBQWEsR0FBR0E7UUFDckIsTUFBS0MsWUFBWSxHQUFHQTs7O2tCQU5ISjs7WUFTbkJLLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0gsZ0JBQWdCO1lBQzlCOzs7WUFFQUksS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDSCxhQUFhO1lBQzNCOzs7WUFFQUksS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDSCxZQUFZO1lBQzFCOzs7WUFFQUgsS0FBQUE7bUJBQUFBLFNBQUFBLG1CQUFtQkUsYUFBYSxFQUFFSyxhQUFhLEVBQUVDLGFBQWEsRUFBRUMsYUFBYTtnQkFDM0UsSUFBSUM7Z0JBRUpBLHVCQUF1QixJQUFJLENBQUNDLG9CQUFvQixDQUFDVCxlQUFlSyxlQUFlQyxlQUFlQztn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