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
                    // statementNodeMatches = matchStatementNode(statementNodeA, statementNodeB, substitution, substitutions, localContextA, localContextB);
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
    var statementNodeMatches;
    var termForVariableSubstitution = _termForVariable.default.fromSubstitutionAndSubstitutions(substitution, substitutions);
    substitution = termForVariableSubstitution; ///
    substitutions = [
        substitution
    ];
    var nonTerminalNodeA = statementNodeA, nonTerminalNodeB = statementNodeB, nonTerminalNodeVerified = _intrinsicLevel.default.verifyNonTerminalNode(nonTerminalNodeA, nonTerminalNodeB, substitutions, localContextA, localContextB, function() {
        var verifiedAhead = true;
        return verifiedAhead;
    });
    statementNodeMatches = nonTerminalNodeVerified; ///
    return statementNodeMatches;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zdWJzdGl0dXRpb24vc3RhdGVtZW50Rm9yTWV0YXZhcmlhYmxlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgU3Vic3RpdHV0aW9uIGZyb20gXCIuLi9zdWJzdGl0dXRpb25cIjtcblxuaW1wb3J0IHN1YnN0aXR1dGlvbk5vZGVzVmVyaWZpZXIgZnJvbSBcIi4uL3ZlcmlmaWVyL25vZGVzL3N1YnN0aXR1dGlvblwiO1xuaW1wb3J0IFRlcm1Gb3JWYXJpYWJsZVN1YnN0aXR1dGlvbiBmcm9tIFwiLi90ZXJtRm9yVmFyaWFibGVcIjtcbmltcG9ydCBpbnRyaW5zaWNMZXZlbE5vZGVzVmVyaWZpZXIgZnJvbSBcIi4uL3ZlcmlmaWVyL25vZGVzL2ludHJpbnNpY0xldmVsXCI7XG5cbmltcG9ydCB7IHB1c2ggfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2FycmF5XCI7XG5pbXBvcnQgeyBicmFja2V0ZWRTdGF0ZW1lbnRDaGlsZE5vZGVGcm9tU3RhdGVtZW50Tm9kZSB9IGZyb20gXCIuLi91dGlsaXRpZXMvcHJvb2ZcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3RhdGVtZW50Rm9yTWV0YXZhcmlhYmxlU3Vic3RpdHV0aW9uIGV4dGVuZHMgU3Vic3RpdHV0aW9uIHtcbiAgY29uc3RydWN0b3IobWV0YXZhcmlhYmxlTm9kZSwgc3RhdGVtZW50Tm9kZSwgc3Vic3RpdHV0aW9uKSB7XG4gICAgc3VwZXIoKTtcblxuICAgIHRoaXMubWV0YXZhcmlhYmxlTm9kZSA9IG1ldGF2YXJpYWJsZU5vZGU7XG4gICAgdGhpcy5zdGF0ZW1lbnROb2RlID0gc3RhdGVtZW50Tm9kZTtcbiAgICB0aGlzLnN1YnN0aXR1dGlvbiA9IHN1YnN0aXR1dGlvbjtcbiAgfVxuXG4gIGdldE1ldGF2YXJpYWJsZU5vZGUoKSB7XG4gICAgcmV0dXJuIHRoaXMubWV0YXZhcmlhYmxlTm9kZTtcbiAgfVxuXG4gIGdldFN0YXRlbWVudE5vZGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RhdGVtZW50Tm9kZTtcbiAgfVxuXG4gIGdldFN1YnN0aXR1dGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5zdWJzdGl0dXRpb247XG4gIH1cblxuICBtYXRjaFN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSwgc3Vic3RpdHV0aW9ucywgbG9jYWxDb250ZXh0QSwgbG9jYWxDb250ZXh0Qikge1xuICAgIGxldCBzdGF0ZW1lbnROb2RlTWF0Y2hlcztcblxuICAgIHN0YXRlbWVudE5vZGVNYXRjaGVzID0gdGhpcy5tYXRjaFN0YXRlbWVudE5vZGVFeChzdGF0ZW1lbnROb2RlLCBzdWJzdGl0dXRpb25zLCBsb2NhbENvbnRleHRBLCBsb2NhbENvbnRleHRCKTtcblxuICAgIGlmICghc3RhdGVtZW50Tm9kZU1hdGNoZXMpIHtcbiAgICAgIGNvbnN0IGJyYWNrZXRlZFN0YXRlbWVudENoaWxkTm9kZSA9IGJyYWNrZXRlZFN0YXRlbWVudENoaWxkTm9kZUZyb21TdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUpO1xuXG4gICAgICBpZiAoYnJhY2tldGVkU3RhdGVtZW50Q2hpbGROb2RlICE9PSBudWxsKSB7XG4gICAgICAgIGNvbnN0IHN0YXRlbWVudE5vZGUgPSBicmFja2V0ZWRTdGF0ZW1lbnRDaGlsZE5vZGU7IC8vL1xuXG4gICAgICAgIHN0YXRlbWVudE5vZGVNYXRjaGVzID0gdGhpcy5tYXRjaFN0YXRlbWVudE5vZGVFeChzdGF0ZW1lbnROb2RlLCBzdWJzdGl0dXRpb25zLCBsb2NhbENvbnRleHRBLCBsb2NhbENvbnRleHRCKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gc3RhdGVtZW50Tm9kZU1hdGNoZXM7XG4gIH1cblxuICBtYXRjaFN0YXRlbWVudE5vZGVFeChzdGF0ZW1lbnROb2RlLCBzdWJzdGl0dXRpb25zLCBsb2NhbENvbnRleHRBLCBsb2NhbENvbnRleHRCKSB7XG4gICAgbGV0IHN0YXRlbWVudE5vZGVNYXRjaGVzO1xuXG4gICAgaWYgKHRoaXMuc3Vic3RpdHV0aW9uID09PSBudWxsKSB7XG4gICAgICBzdGF0ZW1lbnROb2RlTWF0Y2hlcyA9IHRoaXMuc3RhdGVtZW50Tm9kZS5tYXRjaChzdGF0ZW1lbnROb2RlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3Qgc3Vic3RpdHV0aW9uID0gdGhpcy5zdWJzdGl0dXRpb24sXG4gICAgICAgICAgICBzdGF0ZW1lbnROb2RlQSA9IHN0YXRlbWVudE5vZGUsICAvLy9cbiAgICAgICAgICAgIHN0YXRlbWVudE5vZGVCID0gdGhpcy5zdGF0ZW1lbnROb2RlOyAvLy9cblxuICAgICAgLy8gc3RhdGVtZW50Tm9kZU1hdGNoZXMgPSBtYXRjaFN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZUEsIHN0YXRlbWVudE5vZGVCLCBzdWJzdGl0dXRpb24sIHN1YnN0aXR1dGlvbnMsIGxvY2FsQ29udGV4dEEsIGxvY2FsQ29udGV4dEIpO1xuXG4gICAgICBjb25zdCB0ZXJtRm9yVmFyaWFibGVTdWJzdGl0dXRpb24gPSBUZXJtRm9yVmFyaWFibGVTdWJzdGl0dXRpb24uZnJvbVN1YnN0aXR1dGlvbkFuZFN1YnN0aXR1dGlvbnMoc3Vic3RpdHV0aW9uLCBzdWJzdGl0dXRpb25zKSxcbiAgICAgICAgICAgIGludHJpbnNpYyA9IHRlcm1Gb3JWYXJpYWJsZVN1YnN0aXR1dGlvbi5pc0ludHJpbnNpYyhzdWJzdGl0dXRpb24pO1xuXG4gICAgICBsZXQgc3Vic3RpdHV0aW9uc0EgPSBbXTsgLy8vXG5cbiAgICAgIGlmIChpbnRyaW5zaWMpIHtcbiAgICAgICAgY29uc3Qgc3Vic3RpdHV0aW9uQSA9IHRlcm1Gb3JWYXJpYWJsZVN1YnN0aXR1dGlvbjsgIC8vL1xuXG4gICAgICAgIHN1YnN0aXR1dGlvbnNBLnB1c2goc3Vic3RpdHV0aW9uQSk7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IG5vblRlcm1pbmFsTm9kZUEgPSBzdGF0ZW1lbnROb2RlQSwgLy8vXG4gICAgICAgICAgICBub25UZXJtaW5hbE5vZGVCID0gc3RhdGVtZW50Tm9kZUIsICAvLy9cbiAgICAgICAgICAgIG5vblRlcm1pbmFsTm9kZVZlcmlmaWVkID0gc3Vic3RpdHV0aW9uTm9kZXNWZXJpZmllci52ZXJpZnlOb25UZXJtaW5hbE5vZGUobm9uVGVybWluYWxOb2RlQSwgbm9uVGVybWluYWxOb2RlQiwgc3Vic3RpdHV0aW9uc0EsIGxvY2FsQ29udGV4dEEsIGxvY2FsQ29udGV4dEIsICgpID0+IHtcbiAgICAgICAgICAgICAgY29uc3QgdmVyaWZpZWRBaGVhZCA9IHRydWU7XG5cbiAgICAgICAgICAgICAgcmV0dXJuIHZlcmlmaWVkQWhlYWQ7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgaWYgKG5vblRlcm1pbmFsTm9kZVZlcmlmaWVkKSB7XG4gICAgICAgIGlmICghaW50cmluc2ljKSB7XG4gICAgICAgICAgY29uc3Qgc3Vic3RpdHV0aW9uQiA9IHRlcm1Gb3JWYXJpYWJsZVN1YnN0aXR1dGlvbiwgIC8vL1xuICAgICAgICAgICAgICAgIHN1YnN0aXR1dGlvbnNCID0gW1xuICAgICAgICAgICAgICAgICAgc3Vic3RpdHV0aW9uQlxuICAgICAgICAgICAgICAgIF07XG5cbiAgICAgICAgICBzdWJzdGl0dXRpb25zQSA9IHRyYW5zZm9ybVN1YnN0aXR1dGlvbnMoc3Vic3RpdHV0aW9uc0EsIHN1YnN0aXR1dGlvbnNCKTtcblxuICAgICAgICAgIHB1c2goc3Vic3RpdHV0aW9ucywgc3Vic3RpdHV0aW9uc0EpO1xuICAgICAgICB9XG5cbiAgICAgICAgc3RhdGVtZW50Tm9kZU1hdGNoZXMgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBzdGF0ZW1lbnROb2RlTWF0Y2hlcztcbiAgfVxuXG4gIG1hdGNoTWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlKSB7XG4gICAgY29uc3QgbWV0YXZhcmlhYmxlTm9kZU1hdGNoZXMgPSB0aGlzLm1ldGF2YXJpYWJsZU5vZGUubWF0Y2gobWV0YXZhcmlhYmxlTm9kZSk7XG5cbiAgICByZXR1cm4gbWV0YXZhcmlhYmxlTm9kZU1hdGNoZXM7XG4gIH1cblxuICBzdGF0aWMgZnJvbU1ldGF2YXJpYWJsZU5vZGVBbmRTdGF0ZW1lbnROb2RlKG1ldGF2YXJpYWJsZU5vZGUsIHN0YXRlbWVudE5vZGUpIHtcbiAgICBjb25zdCBzdWJzdGl0dXRpb24gPSBudWxsO1xuXG4gICAgbGV0IHN0YXRlbWVudEZvck1ldGF2YXJpYWJsZVN1YnN0aXR1dGlvbiA9IG5ldyBTdGF0ZW1lbnRGb3JNZXRhdmFyaWFibGVTdWJzdGl0dXRpb24obWV0YXZhcmlhYmxlTm9kZSwgc3RhdGVtZW50Tm9kZSwgc3Vic3RpdHV0aW9uKTtcblxuICAgIGNvbnN0IGJyYWNrZXRlZFN0YXRlbWVudENoaWxkTm9kZSA9IGJyYWNrZXRlZFN0YXRlbWVudENoaWxkTm9kZUZyb21TdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUpO1xuXG4gICAgaWYgKGJyYWNrZXRlZFN0YXRlbWVudENoaWxkTm9kZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3Qgc3RhdGVtZW50Tm9kZSA9IGJyYWNrZXRlZFN0YXRlbWVudENoaWxkTm9kZTsgLy8vXG5cbiAgICAgIHN0YXRlbWVudEZvck1ldGF2YXJpYWJsZVN1YnN0aXR1dGlvbiA9IG5ldyBTdGF0ZW1lbnRGb3JNZXRhdmFyaWFibGVTdWJzdGl0dXRpb24obWV0YXZhcmlhYmxlTm9kZSwgc3RhdGVtZW50Tm9kZSwgc3Vic3RpdHV0aW9uKTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3RhdGVtZW50Rm9yTWV0YXZhcmlhYmxlU3Vic3RpdHV0aW9uO1xuICB9XG5cbiAgc3RhdGljIGZyb21NZXRhdmFyaWFibGVOb2RlU3RhdGVtZW50Tm9kZUFuZFN1YnN0aXR1dGlvbihtZXRhdmFyaWFibGVOb2RlLCBzdGF0ZW1lbnROb2RlLCBzdWJzdGl0dXRpb24pIHtcbiAgICBsZXQgc3RhdGVtZW50Rm9yTWV0YXZhcmlhYmxlU3Vic3RpdHV0aW9uID0gbmV3IFN0YXRlbWVudEZvck1ldGF2YXJpYWJsZVN1YnN0aXR1dGlvbihtZXRhdmFyaWFibGVOb2RlLCBzdGF0ZW1lbnROb2RlLCBzdWJzdGl0dXRpb24pO1xuXG4gICAgY29uc3QgYnJhY2tldGVkU3RhdGVtZW50Q2hpbGROb2RlID0gYnJhY2tldGVkU3RhdGVtZW50Q2hpbGROb2RlRnJvbVN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSk7XG5cbiAgICBpZiAoYnJhY2tldGVkU3RhdGVtZW50Q2hpbGROb2RlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBzdGF0ZW1lbnROb2RlID0gYnJhY2tldGVkU3RhdGVtZW50Q2hpbGROb2RlOyAvLy9cblxuICAgICAgc3RhdGVtZW50Rm9yTWV0YXZhcmlhYmxlU3Vic3RpdHV0aW9uID0gbmV3IFN0YXRlbWVudEZvck1ldGF2YXJpYWJsZVN1YnN0aXR1dGlvbihtZXRhdmFyaWFibGVOb2RlLCBzdGF0ZW1lbnROb2RlLCBzdWJzdGl0dXRpb24pO1xuICAgIH1cblxuICAgIHJldHVybiBzdGF0ZW1lbnRGb3JNZXRhdmFyaWFibGVTdWJzdGl0dXRpb247XG4gIH1cbn1cblxuZnVuY3Rpb24gdHJhbnNmb3JtU3Vic3RpdHV0aW9ucyhzdWJzdGl0dXRpb25zQSwgc3Vic3RpdHV0aW9uc0IpIHtcbiAgc3Vic3RpdHV0aW9uc0EgPSBzdWJzdGl0dXRpb25zQS5tYXAoKHN1YnN0aXR1dGlvbkEpID0+IHtcbiAgICBjb25zdCBzdWJzdGl0dXRpb24gPSBzdWJzdGl0dXRpb25BLCAgLy8vXG4gICAgICAgICAgc3Vic3RpdHV0aW9ucyA9IHN1YnN0aXR1dGlvbnNCLFxuICAgICAgICAgIHRlcm1Gb3JWYXJpYWJsZVN1YnN0aXR1dGlvbiA9IFRlcm1Gb3JWYXJpYWJsZVN1YnN0aXR1dGlvbi5mcm9tU3Vic3RpdHV0aW9uQW5kU3Vic3RpdHV0aW9ucyhzdWJzdGl0dXRpb24sIHN1YnN0aXR1dGlvbnMpO1xuXG4gICAgc3Vic3RpdHV0aW9uQSA9IHRlcm1Gb3JWYXJpYWJsZVN1YnN0aXR1dGlvbjsgLy8vXG5cbiAgICByZXR1cm4gc3Vic3RpdHV0aW9uQTtcbiAgfSk7XG5cbiAgcmV0dXJuIHN1YnN0aXR1dGlvbnNBO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbWF0Y2hTdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGVBLCBzdGF0ZW1lbnROb2RlQiwgc3Vic3RpdHV0aW9uLCBzdWJzdGl0dXRpb25zLCBsb2NhbENvbnRleHRBLCBsb2NhbENvbnRleHRCKSB7XG4gIGxldCBzdGF0ZW1lbnROb2RlTWF0Y2hlcztcblxuICBjb25zdCB0ZXJtRm9yVmFyaWFibGVTdWJzdGl0dXRpb24gPSBUZXJtRm9yVmFyaWFibGVTdWJzdGl0dXRpb24uZnJvbVN1YnN0aXR1dGlvbkFuZFN1YnN0aXR1dGlvbnMoc3Vic3RpdHV0aW9uLCBzdWJzdGl0dXRpb25zKTtcblxuICBzdWJzdGl0dXRpb24gPSB0ZXJtRm9yVmFyaWFibGVTdWJzdGl0dXRpb247IC8vL1xuXG4gIHN1YnN0aXR1dGlvbnMgPSBbIC8vL1xuICAgIHN1YnN0aXR1dGlvblxuICBdO1xuXG4gIGNvbnN0IG5vblRlcm1pbmFsTm9kZUEgPSBzdGF0ZW1lbnROb2RlQSwgLy8vXG4gICAgICAgIG5vblRlcm1pbmFsTm9kZUIgPSBzdGF0ZW1lbnROb2RlQiwgIC8vL1xuICAgICAgICBub25UZXJtaW5hbE5vZGVWZXJpZmllZCA9IGludHJpbnNpY0xldmVsTm9kZXNWZXJpZmllci52ZXJpZnlOb25UZXJtaW5hbE5vZGUobm9uVGVybWluYWxOb2RlQSwgbm9uVGVybWluYWxOb2RlQiwgc3Vic3RpdHV0aW9ucywgbG9jYWxDb250ZXh0QSwgbG9jYWxDb250ZXh0QiwgKCkgPT4ge1xuICAgICAgICAgIGNvbnN0IHZlcmlmaWVkQWhlYWQgPSB0cnVlO1xuXG4gICAgICAgICAgcmV0dXJuIHZlcmlmaWVkQWhlYWQ7XG4gICAgICAgIH0pO1xuXG4gIHN0YXRlbWVudE5vZGVNYXRjaGVzID0gbm9uVGVybWluYWxOb2RlVmVyaWZpZWQ7IC8vL1xuXG4gIHJldHVybiBzdGF0ZW1lbnROb2RlTWF0Y2hlcztcbn1cbiJdLCJuYW1lcyI6WyJTdGF0ZW1lbnRGb3JNZXRhdmFyaWFibGVTdWJzdGl0dXRpb24iLCJtYXRjaFN0YXRlbWVudE5vZGUiLCJtZXRhdmFyaWFibGVOb2RlIiwic3RhdGVtZW50Tm9kZSIsInN1YnN0aXR1dGlvbiIsImdldE1ldGF2YXJpYWJsZU5vZGUiLCJnZXRTdGF0ZW1lbnROb2RlIiwiZ2V0U3Vic3RpdHV0aW9uIiwic3Vic3RpdHV0aW9ucyIsImxvY2FsQ29udGV4dEEiLCJsb2NhbENvbnRleHRCIiwic3RhdGVtZW50Tm9kZU1hdGNoZXMiLCJtYXRjaFN0YXRlbWVudE5vZGVFeCIsImJyYWNrZXRlZFN0YXRlbWVudENoaWxkTm9kZSIsImJyYWNrZXRlZFN0YXRlbWVudENoaWxkTm9kZUZyb21TdGF0ZW1lbnROb2RlIiwibWF0Y2giLCJzdGF0ZW1lbnROb2RlQSIsInN0YXRlbWVudE5vZGVCIiwidGVybUZvclZhcmlhYmxlU3Vic3RpdHV0aW9uIiwiVGVybUZvclZhcmlhYmxlU3Vic3RpdHV0aW9uIiwiZnJvbVN1YnN0aXR1dGlvbkFuZFN1YnN0aXR1dGlvbnMiLCJpbnRyaW5zaWMiLCJpc0ludHJpbnNpYyIsInN1YnN0aXR1dGlvbnNBIiwic3Vic3RpdHV0aW9uQSIsInB1c2giLCJub25UZXJtaW5hbE5vZGVBIiwibm9uVGVybWluYWxOb2RlQiIsIm5vblRlcm1pbmFsTm9kZVZlcmlmaWVkIiwic3Vic3RpdHV0aW9uTm9kZXNWZXJpZmllciIsInZlcmlmeU5vblRlcm1pbmFsTm9kZSIsInZlcmlmaWVkQWhlYWQiLCJzdWJzdGl0dXRpb25CIiwic3Vic3RpdHV0aW9uc0IiLCJ0cmFuc2Zvcm1TdWJzdGl0dXRpb25zIiwibWF0Y2hNZXRhdmFyaWFibGVOb2RlIiwibWV0YXZhcmlhYmxlTm9kZU1hdGNoZXMiLCJmcm9tTWV0YXZhcmlhYmxlTm9kZUFuZFN0YXRlbWVudE5vZGUiLCJzdGF0ZW1lbnRGb3JNZXRhdmFyaWFibGVTdWJzdGl0dXRpb24iLCJmcm9tTWV0YXZhcmlhYmxlTm9kZVN0YXRlbWVudE5vZGVBbmRTdWJzdGl0dXRpb24iLCJTdWJzdGl0dXRpb24iLCJtYXAiLCJpbnRyaW5zaWNMZXZlbE5vZGVzVmVyaWZpZXIiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7ZUFXcUJBOztJQTRJTEMsa0JBQWtCO2VBQWxCQTs7O21FQXJKUztvRUFFYTtzRUFDRTtxRUFDQTtxQkFFbkI7cUJBQ3dDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTlDLElBQUEsQUFBTUQscURBQUQsQUFBTDtjQUFNQTsrQkFBQUE7YUFBQUEscUNBQ1BFLGdCQUFnQixFQUFFQyxhQUFhLEVBQUVDLFlBQVk7Z0NBRHRDSjs7O1FBSWpCLE1BQUtFLGdCQUFnQixHQUFHQTtRQUN4QixNQUFLQyxhQUFhLEdBQUdBO1FBQ3JCLE1BQUtDLFlBQVksR0FBR0E7OztrQkFOSEo7O1lBU25CSyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNILGdCQUFnQjtZQUM5Qjs7O1lBRUFJLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0gsYUFBYTtZQUMzQjs7O1lBRUFJLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0gsWUFBWTtZQUMxQjs7O1lBRUFILEtBQUFBO21CQUFBQSxTQUFBQSxtQkFBbUJFLGFBQWEsRUFBRUssYUFBYSxFQUFFQyxhQUFhLEVBQUVDLGFBQWE7Z0JBQzNFLElBQUlDO2dCQUVKQSx1QkFBdUIsSUFBSSxDQUFDQyxvQkFBb0IsQ0FBQ1QsZUFBZUssZUFBZUMsZUFBZUM7Z0JBRTlGLElBQUksQ0FBQ0Msc0JBQXNCO29CQUN6QixJQUFNRSw4QkFBOEJDLElBQUFBLG1EQUE0QyxFQUFDWDtvQkFFakYsSUFBSVUsZ0NBQWdDLE1BQU07d0JBQ3hDLElBQU1WLGtCQUFnQlUsNkJBQTZCLEdBQUc7d0JBRXRERix1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