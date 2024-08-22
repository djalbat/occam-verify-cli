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
                var statementForMetavariableSubstitution;
                var substitution = null;
                statementForMetavariableSubstitution = new StatementForMetavariableSubstitution(metavariableNode, statementNode, substitution);
                var bracketedStatementChildNode = (0, _proof.bracketedStatementChildNodeFromStatementNode)(statementNode);
                if (bracketedStatementChildNode !== null) {
                    var _$statementNode = bracketedStatementChildNode; ///
                    statementForMetavariableSubstitution = new StatementForMetavariableSubstitution(metavariableNode, _$statementNode, substitution);
                }
                return statementForMetavariableSubstitution;
            }
        },
        {
            key: "fromMetavariableNodeStatementNodeAndSubstitutionNode",
            value: function fromMetavariableNodeStatementNodeAndSubstitutionNode(metavariableNode, statementNode, substitutionNode) {
                var statementForMetavariableSubstitution;
                var substitution = null;
                if (substitutionNode !== null) {
                    var termForVariableSubstitution = _termForVariable.default.fromSubstitutionNode(substitutionNode);
                    substitution = termForVariableSubstitution; ///
                }
                statementForMetavariableSubstitution = new StatementForMetavariableSubstitution(metavariableNode, statementNode, substitution);
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
    var termForVariableSubstitution = _termForVariable.default.fromSubstitutionAndSubstitutions(substitution, substitutions), transformed = termForVariableSubstitution.isTransformed(substitution);
    var substitutionsA = []; ///
    if (transformed) {
        var substitutionA = termForVariableSubstitution; ///
        substitutionsA.push(substitutionA);
    }
    var nonTerminalNodeA = statementNodeA, nonTerminalNodeB = statementNodeB, nonTerminalNodeVerified = _intrinsicLevel.default.verifyNonTerminalNode(nonTerminalNodeA, nonTerminalNodeB, substitutionsA, localContextA, localContextB, function() {
        var verifiedAhead = true;
        return verifiedAhead;
    });
    if (nonTerminalNodeVerified) {
        if (!transformed) {
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zdWJzdGl0dXRpb24vc3RhdGVtZW50Rm9yTWV0YXZhcmlhYmxlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgU3Vic3RpdHV0aW9uIGZyb20gXCIuLi9zdWJzdGl0dXRpb25cIjtcbmltcG9ydCBUZXJtRm9yVmFyaWFibGVTdWJzdGl0dXRpb24gZnJvbSBcIi4vdGVybUZvclZhcmlhYmxlXCI7XG5pbXBvcnQgaW50cmluc2ljTGV2ZWxOb2Rlc1ZlcmlmaWVyIGZyb20gXCIuLi92ZXJpZmllci9ub2Rlcy9pbnRyaW5zaWNMZXZlbFwiO1xuXG5pbXBvcnQgeyBwdXNoIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9hcnJheVwiO1xuaW1wb3J0IHsgYnJhY2tldGVkU3RhdGVtZW50Q2hpbGROb2RlRnJvbVN0YXRlbWVudE5vZGUgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3Byb29mXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFN0YXRlbWVudEZvck1ldGF2YXJpYWJsZVN1YnN0aXR1dGlvbiBleHRlbmRzIFN1YnN0aXR1dGlvbiB7XG4gIGNvbnN0cnVjdG9yKG1ldGF2YXJpYWJsZU5vZGUsIHN0YXRlbWVudE5vZGUsIHN1YnN0aXR1dGlvbikge1xuICAgIHN1cGVyKCk7XG5cbiAgICB0aGlzLm1ldGF2YXJpYWJsZU5vZGUgPSBtZXRhdmFyaWFibGVOb2RlO1xuICAgIHRoaXMuc3RhdGVtZW50Tm9kZSA9IHN0YXRlbWVudE5vZGU7XG4gICAgdGhpcy5zdWJzdGl0dXRpb24gPSBzdWJzdGl0dXRpb247XG4gIH1cblxuICBnZXRNZXRhdmFyaWFibGVOb2RlKCkge1xuICAgIHJldHVybiB0aGlzLm1ldGF2YXJpYWJsZU5vZGU7XG4gIH1cblxuICBnZXRTdGF0ZW1lbnROb2RlKCkge1xuICAgIHJldHVybiB0aGlzLnN0YXRlbWVudE5vZGU7XG4gIH1cblxuICBnZXRTdWJzdGl0dXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuc3Vic3RpdHV0aW9uO1xuICB9XG5cbiAgbWF0Y2hTdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUsIHN1YnN0aXR1dGlvbnMsIGxvY2FsQ29udGV4dEEsIGxvY2FsQ29udGV4dEIpIHtcbiAgICBsZXQgc3RhdGVtZW50Tm9kZU1hdGNoZXM7XG5cbiAgICBzdGF0ZW1lbnROb2RlTWF0Y2hlcyA9IHRoaXMubWF0Y2hTdGF0ZW1lbnROb2RlRXgoc3RhdGVtZW50Tm9kZSwgc3Vic3RpdHV0aW9ucywgbG9jYWxDb250ZXh0QSwgbG9jYWxDb250ZXh0Qik7XG5cbiAgICBpZiAoIXN0YXRlbWVudE5vZGVNYXRjaGVzKSB7XG4gICAgICBjb25zdCBicmFja2V0ZWRTdGF0ZW1lbnRDaGlsZE5vZGUgPSBicmFja2V0ZWRTdGF0ZW1lbnRDaGlsZE5vZGVGcm9tU3RhdGVtZW50Tm9kZShzdGF0ZW1lbnROb2RlKTtcblxuICAgICAgaWYgKGJyYWNrZXRlZFN0YXRlbWVudENoaWxkTm9kZSAhPT0gbnVsbCkge1xuICAgICAgICBjb25zdCBzdGF0ZW1lbnROb2RlID0gYnJhY2tldGVkU3RhdGVtZW50Q2hpbGROb2RlOyAvLy9cblxuICAgICAgICBzdGF0ZW1lbnROb2RlTWF0Y2hlcyA9IHRoaXMubWF0Y2hTdGF0ZW1lbnROb2RlRXgoc3RhdGVtZW50Tm9kZSwgc3Vic3RpdHV0aW9ucywgbG9jYWxDb250ZXh0QSwgbG9jYWxDb250ZXh0Qik7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHN0YXRlbWVudE5vZGVNYXRjaGVzO1xuICB9XG5cbiAgbWF0Y2hTdGF0ZW1lbnROb2RlRXgoc3RhdGVtZW50Tm9kZSwgc3Vic3RpdHV0aW9ucywgbG9jYWxDb250ZXh0QSwgbG9jYWxDb250ZXh0Qikge1xuICAgIGxldCBzdGF0ZW1lbnROb2RlTWF0Y2hlcztcblxuICAgIGlmICh0aGlzLnN1YnN0aXR1dGlvbiA9PT0gbnVsbCkge1xuICAgICAgc3RhdGVtZW50Tm9kZU1hdGNoZXMgPSB0aGlzLnN0YXRlbWVudE5vZGUubWF0Y2goc3RhdGVtZW50Tm9kZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHN1YnN0aXR1dGlvbiA9IHRoaXMuc3Vic3RpdHV0aW9uLCAvLy9cbiAgICAgICAgICAgIHN0YXRlbWVudE5vZGVBID0gc3RhdGVtZW50Tm9kZSwgIC8vL1xuICAgICAgICAgICAgc3RhdGVtZW50Tm9kZUIgPSB0aGlzLnN0YXRlbWVudE5vZGU7IC8vL1xuXG4gICAgICBzdGF0ZW1lbnROb2RlTWF0Y2hlcyA9IG1hdGNoU3RhdGVtZW50Tm9kZShzdGF0ZW1lbnROb2RlQSwgc3RhdGVtZW50Tm9kZUIsIHN1YnN0aXR1dGlvbiwgc3Vic3RpdHV0aW9ucywgbG9jYWxDb250ZXh0QSwgbG9jYWxDb250ZXh0Qik7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN0YXRlbWVudE5vZGVNYXRjaGVzO1xuICB9XG5cbiAgbWF0Y2hNZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUpIHtcbiAgICBjb25zdCBtZXRhdmFyaWFibGVOb2RlTWF0Y2hlcyA9IHRoaXMubWV0YXZhcmlhYmxlTm9kZS5tYXRjaChtZXRhdmFyaWFibGVOb2RlKTtcblxuICAgIHJldHVybiBtZXRhdmFyaWFibGVOb2RlTWF0Y2hlcztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTWV0YXZhcmlhYmxlTm9kZUFuZFN0YXRlbWVudE5vZGUobWV0YXZhcmlhYmxlTm9kZSwgc3RhdGVtZW50Tm9kZSkge1xuICAgIGxldCBzdGF0ZW1lbnRGb3JNZXRhdmFyaWFibGVTdWJzdGl0dXRpb247XG5cbiAgICBjb25zdCBzdWJzdGl0dXRpb24gPSBudWxsO1xuXG4gICAgc3RhdGVtZW50Rm9yTWV0YXZhcmlhYmxlU3Vic3RpdHV0aW9uID0gbmV3IFN0YXRlbWVudEZvck1ldGF2YXJpYWJsZVN1YnN0aXR1dGlvbihtZXRhdmFyaWFibGVOb2RlLCBzdGF0ZW1lbnROb2RlLCBzdWJzdGl0dXRpb24pO1xuXG4gICAgY29uc3QgYnJhY2tldGVkU3RhdGVtZW50Q2hpbGROb2RlID0gYnJhY2tldGVkU3RhdGVtZW50Q2hpbGROb2RlRnJvbVN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSk7XG5cbiAgICBpZiAoYnJhY2tldGVkU3RhdGVtZW50Q2hpbGROb2RlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBzdGF0ZW1lbnROb2RlID0gYnJhY2tldGVkU3RhdGVtZW50Q2hpbGROb2RlOyAvLy9cblxuICAgICAgc3RhdGVtZW50Rm9yTWV0YXZhcmlhYmxlU3Vic3RpdHV0aW9uID0gbmV3IFN0YXRlbWVudEZvck1ldGF2YXJpYWJsZVN1YnN0aXR1dGlvbihtZXRhdmFyaWFibGVOb2RlLCBzdGF0ZW1lbnROb2RlLCBzdWJzdGl0dXRpb24pO1xuICAgIH1cblxuICAgIHJldHVybiBzdGF0ZW1lbnRGb3JNZXRhdmFyaWFibGVTdWJzdGl0dXRpb247XG4gIH1cblxuICBzdGF0aWMgZnJvbU1ldGF2YXJpYWJsZU5vZGVTdGF0ZW1lbnROb2RlQW5kU3Vic3RpdHV0aW9uTm9kZShtZXRhdmFyaWFibGVOb2RlLCBzdGF0ZW1lbnROb2RlLCBzdWJzdGl0dXRpb25Ob2RlKSB7XG4gICAgbGV0IHN0YXRlbWVudEZvck1ldGF2YXJpYWJsZVN1YnN0aXR1dGlvbjtcblxuICAgIGxldCBzdWJzdGl0dXRpb24gPSBudWxsO1xuXG4gICAgaWYgKHN1YnN0aXR1dGlvbk5vZGUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHRlcm1Gb3JWYXJpYWJsZVN1YnN0aXR1dGlvbiA9IFRlcm1Gb3JWYXJpYWJsZVN1YnN0aXR1dGlvbi5mcm9tU3Vic3RpdHV0aW9uTm9kZShzdWJzdGl0dXRpb25Ob2RlKTtcblxuICAgICAgc3Vic3RpdHV0aW9uID0gdGVybUZvclZhcmlhYmxlU3Vic3RpdHV0aW9uOyAvLy9cbiAgICB9XG5cbiAgICBzdGF0ZW1lbnRGb3JNZXRhdmFyaWFibGVTdWJzdGl0dXRpb24gPSBuZXcgU3RhdGVtZW50Rm9yTWV0YXZhcmlhYmxlU3Vic3RpdHV0aW9uKG1ldGF2YXJpYWJsZU5vZGUsIHN0YXRlbWVudE5vZGUsIHN1YnN0aXR1dGlvbik7XG5cbiAgICBjb25zdCBicmFja2V0ZWRTdGF0ZW1lbnRDaGlsZE5vZGUgPSBicmFja2V0ZWRTdGF0ZW1lbnRDaGlsZE5vZGVGcm9tU3RhdGVtZW50Tm9kZShzdGF0ZW1lbnROb2RlKTtcblxuICAgIGlmIChicmFja2V0ZWRTdGF0ZW1lbnRDaGlsZE5vZGUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHN0YXRlbWVudE5vZGUgPSBicmFja2V0ZWRTdGF0ZW1lbnRDaGlsZE5vZGU7IC8vL1xuXG4gICAgICBzdGF0ZW1lbnRGb3JNZXRhdmFyaWFibGVTdWJzdGl0dXRpb24gPSBuZXcgU3RhdGVtZW50Rm9yTWV0YXZhcmlhYmxlU3Vic3RpdHV0aW9uKG1ldGF2YXJpYWJsZU5vZGUsIHN0YXRlbWVudE5vZGUsIHN1YnN0aXR1dGlvbik7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN0YXRlbWVudEZvck1ldGF2YXJpYWJsZVN1YnN0aXR1dGlvbjtcbiAgfVxufVxuXG5mdW5jdGlvbiB0cmFuc2Zvcm1TdWJzdGl0dXRpb25zKHN1YnN0aXR1dGlvbnNBLCBzdWJzdGl0dXRpb25zQikge1xuICBzdWJzdGl0dXRpb25zQSA9IHN1YnN0aXR1dGlvbnNBLm1hcCgoc3Vic3RpdHV0aW9uQSkgPT4ge1xuICAgIGNvbnN0IHN1YnN0aXR1dGlvbiA9IHN1YnN0aXR1dGlvbkEsICAvLy9cbiAgICAgICAgICBzdWJzdGl0dXRpb25zID0gc3Vic3RpdHV0aW9uc0IsXG4gICAgICAgICAgdGVybUZvclZhcmlhYmxlU3Vic3RpdHV0aW9uID0gVGVybUZvclZhcmlhYmxlU3Vic3RpdHV0aW9uLmZyb21TdWJzdGl0dXRpb25BbmRTdWJzdGl0dXRpb25zKHN1YnN0aXR1dGlvbiwgc3Vic3RpdHV0aW9ucyk7XG5cbiAgICBzdWJzdGl0dXRpb25BID0gdGVybUZvclZhcmlhYmxlU3Vic3RpdHV0aW9uOyAvLy9cblxuICAgIHJldHVybiBzdWJzdGl0dXRpb25BO1xuICB9KTtcblxuICByZXR1cm4gc3Vic3RpdHV0aW9uc0E7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtYXRjaFN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZUEsIHN0YXRlbWVudE5vZGVCLCBzdWJzdGl0dXRpb24sIHN1YnN0aXR1dGlvbnMsIGxvY2FsQ29udGV4dEEsIGxvY2FsQ29udGV4dEIpIHtcbiAgbGV0IHN0YXRlbWVudE5vZGVNYXRjaGVzID0gZmFsc2U7XG5cbiAgY29uc3QgdGVybUZvclZhcmlhYmxlU3Vic3RpdHV0aW9uID0gVGVybUZvclZhcmlhYmxlU3Vic3RpdHV0aW9uLmZyb21TdWJzdGl0dXRpb25BbmRTdWJzdGl0dXRpb25zKHN1YnN0aXR1dGlvbiwgc3Vic3RpdHV0aW9ucyksXG4gICAgICAgIHRyYW5zZm9ybWVkID0gdGVybUZvclZhcmlhYmxlU3Vic3RpdHV0aW9uLmlzVHJhbnNmb3JtZWQoc3Vic3RpdHV0aW9uKTtcblxuICBsZXQgc3Vic3RpdHV0aW9uc0EgPSBbXTsgLy8vXG5cbiAgaWYgKHRyYW5zZm9ybWVkKSB7XG4gICAgY29uc3Qgc3Vic3RpdHV0aW9uQSA9IHRlcm1Gb3JWYXJpYWJsZVN1YnN0aXR1dGlvbjsgIC8vL1xuXG4gICAgc3Vic3RpdHV0aW9uc0EucHVzaChzdWJzdGl0dXRpb25BKTtcbiAgfVxuXG4gIGNvbnN0IG5vblRlcm1pbmFsTm9kZUEgPSBzdGF0ZW1lbnROb2RlQSwgIC8vL1xuICAgICAgICBub25UZXJtaW5hbE5vZGVCID0gc3RhdGVtZW50Tm9kZUIsICAvLy9cbiAgICAgICAgbm9uVGVybWluYWxOb2RlVmVyaWZpZWQgPSBpbnRyaW5zaWNMZXZlbE5vZGVzVmVyaWZpZXIudmVyaWZ5Tm9uVGVybWluYWxOb2RlKG5vblRlcm1pbmFsTm9kZUEsIG5vblRlcm1pbmFsTm9kZUIsIHN1YnN0aXR1dGlvbnNBLCBsb2NhbENvbnRleHRBLCBsb2NhbENvbnRleHRCLCAoKSA9PiB7XG4gICAgICAgICAgY29uc3QgdmVyaWZpZWRBaGVhZCA9IHRydWU7XG5cbiAgICAgICAgICByZXR1cm4gdmVyaWZpZWRBaGVhZDtcbiAgICAgICAgfSk7XG5cbiAgaWYgKG5vblRlcm1pbmFsTm9kZVZlcmlmaWVkKSB7XG4gICAgaWYgKCF0cmFuc2Zvcm1lZCkge1xuICAgICAgY29uc3Qgc3Vic3RpdHV0aW9uQiA9IHRlcm1Gb3JWYXJpYWJsZVN1YnN0aXR1dGlvbiwgIC8vL1xuICAgICAgICAgICAgc3Vic3RpdHV0aW9uc0IgPSBbXG4gICAgICAgICAgICAgIHN1YnN0aXR1dGlvbkJcbiAgICAgICAgICAgIF07XG5cbiAgICAgIHN1YnN0aXR1dGlvbnNBID0gdHJhbnNmb3JtU3Vic3RpdHV0aW9ucyhzdWJzdGl0dXRpb25zQSwgc3Vic3RpdHV0aW9uc0IpO1xuXG4gICAgICBwdXNoKHN1YnN0aXR1dGlvbnMsIHN1YnN0aXR1dGlvbnNBKTtcbiAgICB9XG5cbiAgICBzdGF0ZW1lbnROb2RlTWF0Y2hlcyA9IHRydWU7XG4gIH1cblxuICByZXR1cm4gc3RhdGVtZW50Tm9kZU1hdGNoZXM7XG59XG4iXSwibmFtZXMiOlsiU3RhdGVtZW50Rm9yTWV0YXZhcmlhYmxlU3Vic3RpdHV0aW9uIiwibWF0Y2hTdGF0ZW1lbnROb2RlIiwibWV0YXZhcmlhYmxlTm9kZSIsInN0YXRlbWVudE5vZGUiLCJzdWJzdGl0dXRpb24iLCJnZXRNZXRhdmFyaWFibGVOb2RlIiwiZ2V0U3RhdGVtZW50Tm9kZSIsImdldFN1YnN0aXR1dGlvbiIsInN1YnN0aXR1dGlvbnMiLCJsb2NhbENvbnRleHRBIiwibG9jYWxDb250ZXh0QiIsInN0YXRlbWVudE5vZGVNYXRjaGVzIiwibWF0Y2hTdGF0ZW1lbnROb2RlRXgiLCJicmFja2V0ZWRTdGF0ZW1lbnRDaGlsZE5vZGUiLCJicmFja2V0ZWRTdGF0ZW1lbnRDaGlsZE5vZGVGcm9tU3RhdGVtZW50Tm9kZSIsIm1hdGNoIiwic3RhdGVtZW50Tm9kZUEiLCJzdGF0ZW1lbnROb2RlQiIsIm1hdGNoTWV0YXZhcmlhYmxlTm9kZSIsIm1ldGF2YXJpYWJsZU5vZGVNYXRjaGVzIiwiZnJvbU1ldGF2YXJpYWJsZU5vZGVBbmRTdGF0ZW1lbnROb2RlIiwic3RhdGVtZW50Rm9yTWV0YXZhcmlhYmxlU3Vic3RpdHV0aW9uIiwiZnJvbU1ldGF2YXJpYWJsZU5vZGVTdGF0ZW1lbnROb2RlQW5kU3Vic3RpdHV0aW9uTm9kZSIsInN1YnN0aXR1dGlvbk5vZGUiLCJ0ZXJtRm9yVmFyaWFibGVTdWJzdGl0dXRpb24iLCJUZXJtRm9yVmFyaWFibGVTdWJzdGl0dXRpb24iLCJmcm9tU3Vic3RpdHV0aW9uTm9kZSIsIlN1YnN0aXR1dGlvbiIsInRyYW5zZm9ybVN1YnN0aXR1dGlvbnMiLCJzdWJzdGl0dXRpb25zQSIsInN1YnN0aXR1dGlvbnNCIiwibWFwIiwic3Vic3RpdHV0aW9uQSIsImZyb21TdWJzdGl0dXRpb25BbmRTdWJzdGl0dXRpb25zIiwidHJhbnNmb3JtZWQiLCJpc1RyYW5zZm9ybWVkIiwicHVzaCIsIm5vblRlcm1pbmFsTm9kZUEiLCJub25UZXJtaW5hbE5vZGVCIiwibm9uVGVybWluYWxOb2RlVmVyaWZpZWQiLCJpbnRyaW5zaWNMZXZlbE5vZGVzVmVyaWZpZXIiLCJ2ZXJpZnlOb25UZXJtaW5hbE5vZGUiLCJ2ZXJpZmllZEFoZWFkIiwic3Vic3RpdHV0aW9uQiJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7OztlQVNxQkE7O0lBc0hMQyxrQkFBa0I7ZUFBbEJBOzs7bUVBN0hTO3NFQUNlO3FFQUNBO3FCQUVuQjtxQkFDd0M7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFOUMsSUFBQSxBQUFNRCxxREFBRCxBQUFMO2NBQU1BOytCQUFBQTthQUFBQSxxQ0FDUEUsZ0JBQWdCLEVBQUVDLGFBQWEsRUFBRUMsWUFBWTtnQ0FEdENKOzs7UUFJakIsTUFBS0UsZ0JBQWdCLEdBQUdBO1FBQ3hCLE1BQUtDLGFBQWEsR0FBR0E7UUFDckIsTUFBS0MsWUFBWSxHQUFHQTs7O2tCQU5ISjs7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