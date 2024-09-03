"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return StatementForMetavariableSubstitution;
    }
});
var _substitution = /*#__PURE__*/ _interop_require_default(require("../substitution"));
var _termForVariable = /*#__PURE__*/ _interop_require_default(require("./termForVariable"));
var _statementAtainstStatement = /*#__PURE__*/ _interop_require_default(require("../verify/statementAtainstStatement"));
var _match = require("../utilities/match");
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
    try {
        var result = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
    } catch (_) {}
    return (_is_native_reflect_construct = function() {
        return !!result;
    })();
}
var StatementForMetavariableSubstitution = /*#__PURE__*/ function(Substitution) {
    _inherits(StatementForMetavariableSubstitution, Substitution);
    function StatementForMetavariableSubstitution(metavariableNode, statementNode, substitution) {
        _class_call_check(this, StatementForMetavariableSubstitution);
        var _this;
        _this = _call_super(this, StatementForMetavariableSubstitution);
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
            value: function matchStatementNode1(statementNode, substitutions, localContextA, localContextB) {
                var statementNodeMatches;
                var substitution = this.substitution, statementNodeA = statementNode, statementNodeB = this.statementNode; ///
                statementNodeMatches = matchStatementNode(statementNodeA, statementNodeB, substitution, substitutions, localContextA, localContextB);
                if (!statementNodeMatches) {
                    var bracketedStatementChildNode = (0, _match.bracketedStatementChildNodeFromStatementNode)(statementNode);
                    if (bracketedStatementChildNode !== null) {
                        var statementNodeA1 = bracketedStatementChildNode; ///
                        statementNodeMatches = matchStatementNode(statementNodeA1, statementNodeB, substitution, substitutions, localContextA, localContextB);
                    }
                }
                return statementNodeMatches;
            }
        },
        {
            key: "matchMetavariableNode",
            value: function matchMetavariableNode(metavariableNode) {
                var matchesMetavariableNode = this.metavariableNode.match(metavariableNode);
                return matchesMetavariableNode;
            }
        }
    ], [
        {
            key: "fromMetavariableNodeAndStatementNode",
            value: function fromMetavariableNodeAndStatementNode(metavariableNode, statementNode) {
                var statementForMetavariableSubstitution;
                var substitution = null;
                statementForMetavariableSubstitution = new StatementForMetavariableSubstitution(metavariableNode, statementNode, substitution);
                var bracketedStatementChildNode = (0, _match.bracketedStatementChildNodeFromStatementNode)(statementNode);
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
                var bracketedStatementChildNode = (0, _match.bracketedStatementChildNodeFromStatementNode)(statementNode);
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
function matchStatementNode(statementNodeA, statementNodeB, substitution, substitutions, localContextA, localContextB) {
    var statementNodeMatches;
    if (substitution === null) {
        var statementNodeAMatchesStatementNodeB = statementNodeB.match(statementNodeA);
        statementNodeMatches = statementNodeAMatchesStatementNodeB; ///
    } else {
        var statementVerifiedAgainstStatement = (0, _statementAtainstStatement.default)(statementNodeA, statementNodeB, substitution, substitutions, localContextA, localContextB);
        statementNodeMatches = statementVerifiedAgainstStatement; ///
    }
    return statementNodeMatches;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zdWJzdGl0dXRpb24vc3RhdGVtZW50Rm9yTWV0YXZhcmlhYmxlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgU3Vic3RpdHV0aW9uIGZyb20gXCIuLi9zdWJzdGl0dXRpb25cIjtcbmltcG9ydCBUZXJtRm9yVmFyaWFibGVTdWJzdGl0dXRpb24gZnJvbSBcIi4vdGVybUZvclZhcmlhYmxlXCI7XG5pbXBvcnQgdmVyaWZ5U3RhdGVtZW50QWdhaW5zdFN0YXRlbWVudCBmcm9tIFwiLi4vdmVyaWZ5L3N0YXRlbWVudEF0YWluc3RTdGF0ZW1lbnRcIjtcblxuaW1wb3J0IHsgYnJhY2tldGVkU3RhdGVtZW50Q2hpbGROb2RlRnJvbVN0YXRlbWVudE5vZGUgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL21hdGNoXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFN0YXRlbWVudEZvck1ldGF2YXJpYWJsZVN1YnN0aXR1dGlvbiBleHRlbmRzIFN1YnN0aXR1dGlvbiB7XG4gIGNvbnN0cnVjdG9yKG1ldGF2YXJpYWJsZU5vZGUsIHN0YXRlbWVudE5vZGUsIHN1YnN0aXR1dGlvbikge1xuICAgIHN1cGVyKCk7XG5cbiAgICB0aGlzLm1ldGF2YXJpYWJsZU5vZGUgPSBtZXRhdmFyaWFibGVOb2RlO1xuICAgIHRoaXMuc3RhdGVtZW50Tm9kZSA9IHN0YXRlbWVudE5vZGU7XG4gICAgdGhpcy5zdWJzdGl0dXRpb24gPSBzdWJzdGl0dXRpb247XG4gIH1cblxuICBnZXRNZXRhdmFyaWFibGVOb2RlKCkge1xuICAgIHJldHVybiB0aGlzLm1ldGF2YXJpYWJsZU5vZGU7XG4gIH1cblxuICBnZXRTdGF0ZW1lbnROb2RlKCkge1xuICAgIHJldHVybiB0aGlzLnN0YXRlbWVudE5vZGU7XG4gIH1cblxuICBnZXRTdWJzdGl0dXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuc3Vic3RpdHV0aW9uO1xuICB9XG5cbiAgbWF0Y2hTdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUsIHN1YnN0aXR1dGlvbnMsIGxvY2FsQ29udGV4dEEsIGxvY2FsQ29udGV4dEIpIHtcbiAgICBsZXQgc3RhdGVtZW50Tm9kZU1hdGNoZXM7XG5cbiAgICBjb25zdCBzdWJzdGl0dXRpb24gPSB0aGlzLnN1YnN0aXR1dGlvbiwgLy8vXG4gICAgICAgICAgc3RhdGVtZW50Tm9kZUEgPSBzdGF0ZW1lbnROb2RlLCAgLy8vXG4gICAgICAgICAgc3RhdGVtZW50Tm9kZUIgPSB0aGlzLnN0YXRlbWVudE5vZGU7IC8vL1xuXG4gICAgc3RhdGVtZW50Tm9kZU1hdGNoZXMgPSBtYXRjaFN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZUEsIHN0YXRlbWVudE5vZGVCLCBzdWJzdGl0dXRpb24sIHN1YnN0aXR1dGlvbnMsIGxvY2FsQ29udGV4dEEsIGxvY2FsQ29udGV4dEIpO1xuXG4gICAgaWYgKCFzdGF0ZW1lbnROb2RlTWF0Y2hlcykge1xuICAgICAgY29uc3QgYnJhY2tldGVkU3RhdGVtZW50Q2hpbGROb2RlID0gYnJhY2tldGVkU3RhdGVtZW50Q2hpbGROb2RlRnJvbVN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSk7XG5cbiAgICAgIGlmIChicmFja2V0ZWRTdGF0ZW1lbnRDaGlsZE5vZGUgIT09IG51bGwpIHtcbiAgICAgICAgY29uc3Qgc3RhdGVtZW50Tm9kZUEgPSBicmFja2V0ZWRTdGF0ZW1lbnRDaGlsZE5vZGU7IC8vL1xuXG4gICAgICAgIHN0YXRlbWVudE5vZGVNYXRjaGVzID0gbWF0Y2hTdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGVBLCBzdGF0ZW1lbnROb2RlQiwgc3Vic3RpdHV0aW9uLCBzdWJzdGl0dXRpb25zLCBsb2NhbENvbnRleHRBLCBsb2NhbENvbnRleHRCKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gc3RhdGVtZW50Tm9kZU1hdGNoZXM7XG4gIH1cblxuICBtYXRjaE1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSkge1xuICAgIGNvbnN0IG1hdGNoZXNNZXRhdmFyaWFibGVOb2RlID0gdGhpcy5tZXRhdmFyaWFibGVOb2RlLm1hdGNoKG1ldGF2YXJpYWJsZU5vZGUpO1xuXG4gICAgcmV0dXJuIG1hdGNoZXNNZXRhdmFyaWFibGVOb2RlO1xuICB9XG5cbiAgc3RhdGljIGZyb21NZXRhdmFyaWFibGVOb2RlQW5kU3RhdGVtZW50Tm9kZShtZXRhdmFyaWFibGVOb2RlLCBzdGF0ZW1lbnROb2RlKSB7XG4gICAgbGV0IHN0YXRlbWVudEZvck1ldGF2YXJpYWJsZVN1YnN0aXR1dGlvbjtcblxuICAgIGNvbnN0IHN1YnN0aXR1dGlvbiA9IG51bGw7XG5cbiAgICBzdGF0ZW1lbnRGb3JNZXRhdmFyaWFibGVTdWJzdGl0dXRpb24gPSBuZXcgU3RhdGVtZW50Rm9yTWV0YXZhcmlhYmxlU3Vic3RpdHV0aW9uKG1ldGF2YXJpYWJsZU5vZGUsIHN0YXRlbWVudE5vZGUsIHN1YnN0aXR1dGlvbik7XG5cbiAgICBjb25zdCBicmFja2V0ZWRTdGF0ZW1lbnRDaGlsZE5vZGUgPSBicmFja2V0ZWRTdGF0ZW1lbnRDaGlsZE5vZGVGcm9tU3RhdGVtZW50Tm9kZShzdGF0ZW1lbnROb2RlKTtcblxuICAgIGlmIChicmFja2V0ZWRTdGF0ZW1lbnRDaGlsZE5vZGUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHN0YXRlbWVudE5vZGUgPSBicmFja2V0ZWRTdGF0ZW1lbnRDaGlsZE5vZGU7IC8vL1xuXG4gICAgICBzdGF0ZW1lbnRGb3JNZXRhdmFyaWFibGVTdWJzdGl0dXRpb24gPSBuZXcgU3RhdGVtZW50Rm9yTWV0YXZhcmlhYmxlU3Vic3RpdHV0aW9uKG1ldGF2YXJpYWJsZU5vZGUsIHN0YXRlbWVudE5vZGUsIHN1YnN0aXR1dGlvbik7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN0YXRlbWVudEZvck1ldGF2YXJpYWJsZVN1YnN0aXR1dGlvbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTWV0YXZhcmlhYmxlTm9kZVN0YXRlbWVudE5vZGVBbmRTdWJzdGl0dXRpb25Ob2RlKG1ldGF2YXJpYWJsZU5vZGUsIHN0YXRlbWVudE5vZGUsIHN1YnN0aXR1dGlvbk5vZGUpIHtcbiAgICBsZXQgc3RhdGVtZW50Rm9yTWV0YXZhcmlhYmxlU3Vic3RpdHV0aW9uO1xuXG4gICAgbGV0IHN1YnN0aXR1dGlvbiA9IG51bGw7XG5cbiAgICBpZiAoc3Vic3RpdHV0aW9uTm9kZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgdGVybUZvclZhcmlhYmxlU3Vic3RpdHV0aW9uID0gVGVybUZvclZhcmlhYmxlU3Vic3RpdHV0aW9uLmZyb21TdWJzdGl0dXRpb25Ob2RlKHN1YnN0aXR1dGlvbk5vZGUpO1xuXG4gICAgICBzdWJzdGl0dXRpb24gPSB0ZXJtRm9yVmFyaWFibGVTdWJzdGl0dXRpb247IC8vL1xuICAgIH1cblxuICAgIHN0YXRlbWVudEZvck1ldGF2YXJpYWJsZVN1YnN0aXR1dGlvbiA9IG5ldyBTdGF0ZW1lbnRGb3JNZXRhdmFyaWFibGVTdWJzdGl0dXRpb24obWV0YXZhcmlhYmxlTm9kZSwgc3RhdGVtZW50Tm9kZSwgc3Vic3RpdHV0aW9uKTtcblxuICAgIGNvbnN0IGJyYWNrZXRlZFN0YXRlbWVudENoaWxkTm9kZSA9IGJyYWNrZXRlZFN0YXRlbWVudENoaWxkTm9kZUZyb21TdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUpO1xuXG4gICAgaWYgKGJyYWNrZXRlZFN0YXRlbWVudENoaWxkTm9kZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3Qgc3RhdGVtZW50Tm9kZSA9IGJyYWNrZXRlZFN0YXRlbWVudENoaWxkTm9kZTsgLy8vXG5cbiAgICAgIHN0YXRlbWVudEZvck1ldGF2YXJpYWJsZVN1YnN0aXR1dGlvbiA9IG5ldyBTdGF0ZW1lbnRGb3JNZXRhdmFyaWFibGVTdWJzdGl0dXRpb24obWV0YXZhcmlhYmxlTm9kZSwgc3RhdGVtZW50Tm9kZSwgc3Vic3RpdHV0aW9uKTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3RhdGVtZW50Rm9yTWV0YXZhcmlhYmxlU3Vic3RpdHV0aW9uO1xuICB9XG59XG5cbmZ1bmN0aW9uIG1hdGNoU3RhdGVtZW50Tm9kZShzdGF0ZW1lbnROb2RlQSwgc3RhdGVtZW50Tm9kZUIsIHN1YnN0aXR1dGlvbiwgc3Vic3RpdHV0aW9ucywgbG9jYWxDb250ZXh0QSwgbG9jYWxDb250ZXh0Qikge1xuICBsZXQgc3RhdGVtZW50Tm9kZU1hdGNoZXM7XG5cbiAgaWYgKHN1YnN0aXR1dGlvbiA9PT0gbnVsbCkge1xuICAgIGNvbnN0IHN0YXRlbWVudE5vZGVBTWF0Y2hlc1N0YXRlbWVudE5vZGVCID0gc3RhdGVtZW50Tm9kZUIubWF0Y2goc3RhdGVtZW50Tm9kZUEpO1xuXG4gICAgc3RhdGVtZW50Tm9kZU1hdGNoZXMgPSBzdGF0ZW1lbnROb2RlQU1hdGNoZXNTdGF0ZW1lbnROb2RlQjsgLy8vXG4gIH0gZWxzZSB7XG4gICAgY29uc3Qgc3RhdGVtZW50VmVyaWZpZWRBZ2FpbnN0U3RhdGVtZW50ID0gdmVyaWZ5U3RhdGVtZW50QWdhaW5zdFN0YXRlbWVudChzdGF0ZW1lbnROb2RlQSwgc3RhdGVtZW50Tm9kZUIsIHN1YnN0aXR1dGlvbiwgc3Vic3RpdHV0aW9ucywgbG9jYWxDb250ZXh0QSwgbG9jYWxDb250ZXh0Qik7XG5cbiAgICBzdGF0ZW1lbnROb2RlTWF0Y2hlcyA9IHN0YXRlbWVudFZlcmlmaWVkQWdhaW5zdFN0YXRlbWVudDsgLy8vXG4gIH1cblxuICByZXR1cm4gc3RhdGVtZW50Tm9kZU1hdGNoZXM7XG5cbn0iXSwibmFtZXMiOlsiU3RhdGVtZW50Rm9yTWV0YXZhcmlhYmxlU3Vic3RpdHV0aW9uIiwibWV0YXZhcmlhYmxlTm9kZSIsInN0YXRlbWVudE5vZGUiLCJzdWJzdGl0dXRpb24iLCJnZXRNZXRhdmFyaWFibGVOb2RlIiwiZ2V0U3RhdGVtZW50Tm9kZSIsImdldFN1YnN0aXR1dGlvbiIsIm1hdGNoU3RhdGVtZW50Tm9kZSIsInN1YnN0aXR1dGlvbnMiLCJsb2NhbENvbnRleHRBIiwibG9jYWxDb250ZXh0QiIsInN0YXRlbWVudE5vZGVNYXRjaGVzIiwic3RhdGVtZW50Tm9kZUEiLCJzdGF0ZW1lbnROb2RlQiIsImJyYWNrZXRlZFN0YXRlbWVudENoaWxkTm9kZSIsImJyYWNrZXRlZFN0YXRlbWVudENoaWxkTm9kZUZyb21TdGF0ZW1lbnROb2RlIiwibWF0Y2hNZXRhdmFyaWFibGVOb2RlIiwibWF0Y2hlc01ldGF2YXJpYWJsZU5vZGUiLCJtYXRjaCIsImZyb21NZXRhdmFyaWFibGVOb2RlQW5kU3RhdGVtZW50Tm9kZSIsInN0YXRlbWVudEZvck1ldGF2YXJpYWJsZVN1YnN0aXR1dGlvbiIsImZyb21NZXRhdmFyaWFibGVOb2RlU3RhdGVtZW50Tm9kZUFuZFN1YnN0aXR1dGlvbk5vZGUiLCJzdWJzdGl0dXRpb25Ob2RlIiwidGVybUZvclZhcmlhYmxlU3Vic3RpdHV0aW9uIiwiVGVybUZvclZhcmlhYmxlU3Vic3RpdHV0aW9uIiwiZnJvbVN1YnN0aXR1dGlvbk5vZGUiLCJTdWJzdGl0dXRpb24iLCJzdGF0ZW1lbnROb2RlQU1hdGNoZXNTdGF0ZW1lbnROb2RlQiIsInN0YXRlbWVudFZlcmlmaWVkQWdhaW5zdFN0YXRlbWVudCIsInZlcmlmeVN0YXRlbWVudEFnYWluc3RTdGF0ZW1lbnQiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBUXFCQTs7O21FQU5JO3NFQUNlO2dGQUNJO3FCQUVpQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUU5QyxJQUFBLEFBQU1BLHFEQUFELEFBQUw7Y0FBTUE7YUFBQUEscUNBQ1BDLGdCQUFnQixFQUFFQyxhQUFhLEVBQUVDLFlBQVk7Z0NBRHRDSDs7Z0JBRWpCLGtCQUZpQkE7UUFJakIsTUFBS0MsZ0JBQWdCLEdBQUdBO1FBQ3hCLE1BQUtDLGFBQWEsR0FBR0E7UUFDckIsTUFBS0MsWUFBWSxHQUFHQTs7O2tCQU5ISDs7WUFTbkJJLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FB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