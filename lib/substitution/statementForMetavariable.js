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
var _termForVariable = /*#__PURE__*/ _interop_require_default(require("../substitution/termForVariable"));
var _match = require("../utilities/match");
var _substitutions = /*#__PURE__*/ _interop_require_default(require("../substitutions"));
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
    function StatementForMetavariableSubstitution(metavariableNode, statementNode, substitution, substitutions) {
        _class_call_check(this, StatementForMetavariableSubstitution);
        var _this;
        _this = _call_super(this, StatementForMetavariableSubstitution);
        _this.metavariableNode = metavariableNode;
        _this.statementNode = statementNode;
        _this.substitution = substitution;
        _this.substitutions = substitutions;
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
            key: "getSubstitutions",
            value: function getSubstitutions() {
                return this.substitutions;
            }
        },
        {
            key: "getNode",
            value: function getNode() {
                var node = this.statementNode; ///
                return node;
            }
        },
        {
            key: "matchStatementNode",
            value: function matchStatementNode(statementNode) {
                var statementNodeA = statementNode, statementNodeB = this.statementNode, statementNodesMatch = (0, _match.matchStatementModuloBrackets)(statementNodeA, statementNodeB), statementNodeMatches = statementNodesMatch; ///
                return statementNodeMatches;
            }
        },
        {
            key: "matchMetavariableNode",
            value: function matchMetavariableNode(metavariableNode) {
                var metavariableNodeMatches = this.metavariableNode.match(metavariableNode);
                return metavariableNodeMatches;
            }
        },
        {
            key: "asString",
            value: function asString(localContextA, localContextB) {
                var string;
                var statementNodeB = this.statementNode, statementStringB = localContextB.nodeAsString(statementNodeB), metavariableNodeA = this.metavariableNode, metavariableStringA = localContextA.nodeAsString(metavariableNodeA);
                if (this.substitution === null) {
                    string = "[".concat(statementStringB, " for ").concat(metavariableStringA, "]");
                } else {
                    localContextB = localContextA; ///
                    var substitutionString = this.substitution.asString(localContextA, localContextB);
                    string = "[".concat(statementStringB, " for ").concat(metavariableStringA).concat(substitutionString, "]");
                }
                return string;
            }
        }
    ], [
        {
            key: "fromMetavariableNodeAndStatementNode",
            value: function fromMetavariableNodeAndStatementNode(metavariableNode, statementNode) {
                var statementForMetavariableSubstitution;
                var substitution = null, substitutions = _substitutions.default.fromNothing(), bracketedStatementChildNode = (0, _match.bracketedStatementChildNodeFromStatementNode)(statementNode);
                if (bracketedStatementChildNode !== null) {
                    statementNode = bracketedStatementChildNode; ///
                }
                statementForMetavariableSubstitution = new StatementForMetavariableSubstitution(metavariableNode, statementNode, substitution, substitutions);
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
                var substitutions = _substitutions.default.fromNothing(), bracketedStatementChildNode = (0, _match.bracketedStatementChildNodeFromStatementNode)(statementNode);
                if (bracketedStatementChildNode !== null) {
                    statementNode = bracketedStatementChildNode; ///
                }
                statementForMetavariableSubstitution = new StatementForMetavariableSubstitution(metavariableNode, statementNode, substitution, substitutions);
                return statementForMetavariableSubstitution;
            }
        }
    ]);
    return StatementForMetavariableSubstitution;
}(_substitution.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zdWJzdGl0dXRpb24vc3RhdGVtZW50Rm9yTWV0YXZhcmlhYmxlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgU3Vic3RpdHV0aW9uIGZyb20gXCIuLi9zdWJzdGl0dXRpb25cIjtcbmltcG9ydCBUZXJtRm9yVmFyaWFibGVTdWJzdGl0dXRpb24gZnJvbSBcIi4uL3N1YnN0aXR1dGlvbi90ZXJtRm9yVmFyaWFibGVcIjtcblxuaW1wb3J0IHsgbWF0Y2hTdGF0ZW1lbnRNb2R1bG9CcmFja2V0cywgYnJhY2tldGVkU3RhdGVtZW50Q2hpbGROb2RlRnJvbVN0YXRlbWVudE5vZGUgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL21hdGNoXCI7XG5pbXBvcnQgU3Vic3RpdHV0aW9ucyBmcm9tIFwiLi4vc3Vic3RpdHV0aW9uc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTdGF0ZW1lbnRGb3JNZXRhdmFyaWFibGVTdWJzdGl0dXRpb24gZXh0ZW5kcyBTdWJzdGl0dXRpb24ge1xuICBjb25zdHJ1Y3RvcihtZXRhdmFyaWFibGVOb2RlLCBzdGF0ZW1lbnROb2RlLCBzdWJzdGl0dXRpb24sIHN1YnN0aXR1dGlvbnMpIHtcbiAgICBzdXBlcigpO1xuXG4gICAgdGhpcy5tZXRhdmFyaWFibGVOb2RlID0gbWV0YXZhcmlhYmxlTm9kZTtcbiAgICB0aGlzLnN0YXRlbWVudE5vZGUgPSBzdGF0ZW1lbnROb2RlO1xuICAgIHRoaXMuc3Vic3RpdHV0aW9uID0gc3Vic3RpdHV0aW9uO1xuICAgIHRoaXMuc3Vic3RpdHV0aW9ucyA9IHN1YnN0aXR1dGlvbnM7XG4gIH1cblxuICBnZXRNZXRhdmFyaWFibGVOb2RlKCkge1xuICAgIHJldHVybiB0aGlzLm1ldGF2YXJpYWJsZU5vZGU7XG4gIH1cblxuICBnZXRTdGF0ZW1lbnROb2RlKCkge1xuICAgIHJldHVybiB0aGlzLnN0YXRlbWVudE5vZGU7XG4gIH1cblxuICBnZXRTdWJzdGl0dXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuc3Vic3RpdHV0aW9uO1xuICB9XG5cbiAgZ2V0U3Vic3RpdHV0aW9ucygpIHtcbiAgICByZXR1cm4gdGhpcy5zdWJzdGl0dXRpb25zO1xuICB9XG5cbiAgZ2V0Tm9kZSgpIHtcbiAgICBjb25zdCBub2RlID0gdGhpcy5zdGF0ZW1lbnROb2RlOyAgLy8vXG5cbiAgICByZXR1cm4gbm9kZTtcbiAgfVxuXG4gIG1hdGNoU3RhdGVtZW50Tm9kZShzdGF0ZW1lbnROb2RlKSB7XG4gICAgY29uc3Qgc3RhdGVtZW50Tm9kZUEgPSBzdGF0ZW1lbnROb2RlLCAvLy9cbiAgICAgICAgICBzdGF0ZW1lbnROb2RlQiA9IHRoaXMuc3RhdGVtZW50Tm9kZSwgIC8vL1xuICAgICAgICAgIHN0YXRlbWVudE5vZGVzTWF0Y2ggPSBtYXRjaFN0YXRlbWVudE1vZHVsb0JyYWNrZXRzKHN0YXRlbWVudE5vZGVBLCBzdGF0ZW1lbnROb2RlQiksXG4gICAgICAgICAgc3RhdGVtZW50Tm9kZU1hdGNoZXMgPSBzdGF0ZW1lbnROb2Rlc01hdGNoOyAvLy9cblxuICAgIHJldHVybiBzdGF0ZW1lbnROb2RlTWF0Y2hlcztcbiAgfVxuXG4gIG1hdGNoTWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlKSB7XG4gICAgY29uc3QgbWV0YXZhcmlhYmxlTm9kZU1hdGNoZXMgPSB0aGlzLm1ldGF2YXJpYWJsZU5vZGUubWF0Y2gobWV0YXZhcmlhYmxlTm9kZSk7XG5cbiAgICByZXR1cm4gbWV0YXZhcmlhYmxlTm9kZU1hdGNoZXM7XG4gIH1cblxuICBhc1N0cmluZyhsb2NhbENvbnRleHRBLCBsb2NhbENvbnRleHRCKSB7XG4gICAgbGV0IHN0cmluZztcblxuICAgIGNvbnN0IHN0YXRlbWVudE5vZGVCID0gdGhpcy5zdGF0ZW1lbnROb2RlLCAgLy8vXG4gICAgICAgICAgc3RhdGVtZW50U3RyaW5nQiA9IGxvY2FsQ29udGV4dEIubm9kZUFzU3RyaW5nKHN0YXRlbWVudE5vZGVCKSxcbiAgICAgICAgICBtZXRhdmFyaWFibGVOb2RlQSA9IHRoaXMubWV0YXZhcmlhYmxlTm9kZSwgIC8vL1xuICAgICAgICAgIG1ldGF2YXJpYWJsZVN0cmluZ0EgPSBsb2NhbENvbnRleHRBLm5vZGVBc1N0cmluZyhtZXRhdmFyaWFibGVOb2RlQSk7XG5cbiAgICBpZiAodGhpcy5zdWJzdGl0dXRpb24gPT09IG51bGwpIHtcbiAgICAgIHN0cmluZyA9IGBbJHtzdGF0ZW1lbnRTdHJpbmdCfSBmb3IgJHttZXRhdmFyaWFibGVTdHJpbmdBfV1gO1xuICAgIH0gZWxzZSB7XG4gICAgICBsb2NhbENvbnRleHRCID0gbG9jYWxDb250ZXh0QTsgIC8vL1xuXG4gICAgICBjb25zdCBzdWJzdGl0dXRpb25TdHJpbmcgPSB0aGlzLnN1YnN0aXR1dGlvbi5hc1N0cmluZyhsb2NhbENvbnRleHRBLCBsb2NhbENvbnRleHRCKTtcblxuICAgICAgc3RyaW5nID0gYFske3N0YXRlbWVudFN0cmluZ0J9IGZvciAke21ldGF2YXJpYWJsZVN0cmluZ0F9JHtzdWJzdGl0dXRpb25TdHJpbmd9XWA7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN0cmluZztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTWV0YXZhcmlhYmxlTm9kZUFuZFN0YXRlbWVudE5vZGUobWV0YXZhcmlhYmxlTm9kZSwgc3RhdGVtZW50Tm9kZSkge1xuICAgIGxldCBzdGF0ZW1lbnRGb3JNZXRhdmFyaWFibGVTdWJzdGl0dXRpb247XG5cbiAgICBjb25zdCBzdWJzdGl0dXRpb24gPSBudWxsLFxuICAgICAgICAgIHN1YnN0aXR1dGlvbnMgPSBTdWJzdGl0dXRpb25zLmZyb21Ob3RoaW5nKCksXG4gICAgICAgICAgYnJhY2tldGVkU3RhdGVtZW50Q2hpbGROb2RlID0gYnJhY2tldGVkU3RhdGVtZW50Q2hpbGROb2RlRnJvbVN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSk7XG5cbiAgICBpZiAoYnJhY2tldGVkU3RhdGVtZW50Q2hpbGROb2RlICE9PSBudWxsKSB7XG4gICAgICBzdGF0ZW1lbnROb2RlID0gYnJhY2tldGVkU3RhdGVtZW50Q2hpbGROb2RlOyAvLy9cbiAgICB9XG5cbiAgICBzdGF0ZW1lbnRGb3JNZXRhdmFyaWFibGVTdWJzdGl0dXRpb24gPSBuZXcgU3RhdGVtZW50Rm9yTWV0YXZhcmlhYmxlU3Vic3RpdHV0aW9uKG1ldGF2YXJpYWJsZU5vZGUsIHN0YXRlbWVudE5vZGUsIHN1YnN0aXR1dGlvbiwgc3Vic3RpdHV0aW9ucyk7XG5cbiAgICByZXR1cm4gc3RhdGVtZW50Rm9yTWV0YXZhcmlhYmxlU3Vic3RpdHV0aW9uO1xuICB9XG5cbiAgc3RhdGljIGZyb21NZXRhdmFyaWFibGVOb2RlU3RhdGVtZW50Tm9kZUFuZFN1YnN0aXR1dGlvbk5vZGUobWV0YXZhcmlhYmxlTm9kZSwgc3RhdGVtZW50Tm9kZSwgc3Vic3RpdHV0aW9uTm9kZSkge1xuICAgIGxldCBzdGF0ZW1lbnRGb3JNZXRhdmFyaWFibGVTdWJzdGl0dXRpb247XG5cbiAgICBsZXQgc3Vic3RpdHV0aW9uID0gbnVsbDtcblxuICAgIGlmIChzdWJzdGl0dXRpb25Ob2RlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCB0ZXJtRm9yVmFyaWFibGVTdWJzdGl0dXRpb24gPSBUZXJtRm9yVmFyaWFibGVTdWJzdGl0dXRpb24uZnJvbVN1YnN0aXR1dGlvbk5vZGUoc3Vic3RpdHV0aW9uTm9kZSk7XG5cbiAgICAgIHN1YnN0aXR1dGlvbiA9IHRlcm1Gb3JWYXJpYWJsZVN1YnN0aXR1dGlvbjsgLy8vXG4gICAgfVxuXG4gICAgY29uc3Qgc3Vic3RpdHV0aW9ucyA9IFN1YnN0aXR1dGlvbnMuZnJvbU5vdGhpbmcoKSxcbiAgICAgICAgICBicmFja2V0ZWRTdGF0ZW1lbnRDaGlsZE5vZGUgPSBicmFja2V0ZWRTdGF0ZW1lbnRDaGlsZE5vZGVGcm9tU3RhdGVtZW50Tm9kZShzdGF0ZW1lbnROb2RlKTtcblxuICAgIGlmIChicmFja2V0ZWRTdGF0ZW1lbnRDaGlsZE5vZGUgIT09IG51bGwpIHtcbiAgICAgIHN0YXRlbWVudE5vZGUgPSBicmFja2V0ZWRTdGF0ZW1lbnRDaGlsZE5vZGU7IC8vL1xuICAgIH1cblxuICAgIHN0YXRlbWVudEZvck1ldGF2YXJpYWJsZVN1YnN0aXR1dGlvbiA9IG5ldyBTdGF0ZW1lbnRGb3JNZXRhdmFyaWFibGVTdWJzdGl0dXRpb24obWV0YXZhcmlhYmxlTm9kZSwgc3RhdGVtZW50Tm9kZSwgc3Vic3RpdHV0aW9uLCBzdWJzdGl0dXRpb25zKTtcblxuICAgIHJldHVybiBzdGF0ZW1lbnRGb3JNZXRhdmFyaWFibGVTdWJzdGl0dXRpb247XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJTdGF0ZW1lbnRGb3JNZXRhdmFyaWFibGVTdWJzdGl0dXRpb24iLCJtZXRhdmFyaWFibGVOb2RlIiwic3RhdGVtZW50Tm9kZSIsInN1YnN0aXR1dGlvbiIsInN1YnN0aXR1dGlvbnMiLCJnZXRNZXRhdmFyaWFibGVOb2RlIiwiZ2V0U3RhdGVtZW50Tm9kZSIsImdldFN1YnN0aXR1dGlvbiIsImdldFN1YnN0aXR1dGlvbnMiLCJnZXROb2RlIiwibm9kZSIsIm1hdGNoU3RhdGVtZW50Tm9kZSIsInN0YXRlbWVudE5vZGVBIiwic3RhdGVtZW50Tm9kZUIiLCJzdGF0ZW1lbnROb2Rlc01hdGNoIiwibWF0Y2hTdGF0ZW1lbnRNb2R1bG9CcmFja2V0cyIsInN0YXRlbWVudE5vZGVNYXRjaGVzIiwibWF0Y2hNZXRhdmFyaWFibGVOb2RlIiwibWV0YXZhcmlhYmxlTm9kZU1hdGNoZXMiLCJtYXRjaCIsImFzU3RyaW5nIiwibG9jYWxDb250ZXh0QSIsImxvY2FsQ29udGV4dEIiLCJzdHJpbmciLCJzdGF0ZW1lbnRTdHJpbmdCIiwibm9kZUFzU3RyaW5nIiwibWV0YXZhcmlhYmxlTm9kZUEiLCJtZXRhdmFyaWFibGVTdHJpbmdBIiwic3Vic3RpdHV0aW9uU3RyaW5nIiwiZnJvbU1ldGF2YXJpYWJsZU5vZGVBbmRTdGF0ZW1lbnROb2RlIiwic3RhdGVtZW50Rm9yTWV0YXZhcmlhYmxlU3Vic3RpdHV0aW9uIiwiU3Vic3RpdHV0aW9ucyIsImZyb21Ob3RoaW5nIiwiYnJhY2tldGVkU3RhdGVtZW50Q2hpbGROb2RlIiwiYnJhY2tldGVkU3RhdGVtZW50Q2hpbGROb2RlRnJvbVN0YXRlbWVudE5vZGUiLCJmcm9tTWV0YXZhcmlhYmxlTm9kZVN0YXRlbWVudE5vZGVBbmRTdWJzdGl0dXRpb25Ob2RlIiwic3Vic3RpdHV0aW9uTm9kZSIsInRlcm1Gb3JWYXJpYWJsZVN1YnN0aXR1dGlvbiIsIlRlcm1Gb3JWYXJpYWJsZVN1YnN0aXR1dGlvbiIsImZyb21TdWJzdGl0dXRpb25Ob2RlIiwiU3Vic3RpdHV0aW9uIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQVFxQkE7OzttRUFOSTtzRUFDZTtxQkFFbUQ7b0VBQ2pFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRVgsSUFBQSxBQUFNQSxxREFBTjtjQUFNQTthQUFBQSxxQ0FDUEMsZ0JBQWdCLEVBQUVDLGFBQWEsRUFBRUMsWUFBWSxFQUFFQyxhQUFhO2dDQURyREo7O2dCQUVqQixrQkFGaUJBO1FBSWpCLE1BQUtDLGdCQUFnQixHQUFHQTtRQUN4QixNQUFLQyxhQUFhLEdBQUdBO1FBQ3JCLE1BQUtDLFlBQVksR0FBR0E7UUFDcEIsTUFBS0MsYUFBYSxHQUFHQTs7O2tCQVBKSjs7WUFVbkJLLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0osZ0JBQWdCO1lBQzlCOzs7WUFFQUssS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDSixhQUFhO1lBQzNCOzs7WUFFQUssS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDSixZQUFZO1lBQzFCOzs7WUFFQUssS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDSixhQUFhO1lBQzNCOzs7WUFFQUssS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1D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