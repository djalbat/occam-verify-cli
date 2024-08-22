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
            value: function matchStatementNode1(statementNode, substitutions, localContextA, localContextB) {
                var statementNodeMatches;
                var substitution = this.substitution, statementNodeA = statementNode, statementNodeB = this.statementNode; ///
                statementNodeMatches = matchStatementNode(statementNodeA, statementNodeB, substitution, substitutions, localContextA, localContextB);
                if (!statementNodeMatches) {
                    var bracketedStatementChildNode = (0, _proof.bracketedStatementChildNodeFromStatementNode)(statementNode);
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
function matchStatementNode(statementNodeA, statementNodeB, substitution, substitutions, localContextA, localContextB) {
    var statementNodeMatches;
    if (substitution === null) {
        statementNodeMatches = statementNodeB.match(statementNodeA);
    } else {
        var statementVerifiedAgainstStatement = (0, _statementAtainstStatement.default)(statementNodeA, statementNodeB, substitution, substitutions, localContextA, localContextB);
        statementNodeMatches = statementVerifiedAgainstStatement; ///
    }
    return statementNodeMatches;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zdWJzdGl0dXRpb24vc3RhdGVtZW50Rm9yTWV0YXZhcmlhYmxlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgU3Vic3RpdHV0aW9uIGZyb20gXCIuLi9zdWJzdGl0dXRpb25cIjtcbmltcG9ydCBUZXJtRm9yVmFyaWFibGVTdWJzdGl0dXRpb24gZnJvbSBcIi4vdGVybUZvclZhcmlhYmxlXCI7XG5pbXBvcnQgdmVyaWZ5U3RhdGVtZW50QWdhaW5zdFN0YXRlbWVudCBmcm9tIFwiLi4vdmVyaWZ5L3N0YXRlbWVudEF0YWluc3RTdGF0ZW1lbnRcIjtcblxuaW1wb3J0IHsgYnJhY2tldGVkU3RhdGVtZW50Q2hpbGROb2RlRnJvbVN0YXRlbWVudE5vZGUgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3Byb29mXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFN0YXRlbWVudEZvck1ldGF2YXJpYWJsZVN1YnN0aXR1dGlvbiBleHRlbmRzIFN1YnN0aXR1dGlvbiB7XG4gIGNvbnN0cnVjdG9yKG1ldGF2YXJpYWJsZU5vZGUsIHN0YXRlbWVudE5vZGUsIHN1YnN0aXR1dGlvbikge1xuICAgIHN1cGVyKCk7XG5cbiAgICB0aGlzLm1ldGF2YXJpYWJsZU5vZGUgPSBtZXRhdmFyaWFibGVOb2RlO1xuICAgIHRoaXMuc3RhdGVtZW50Tm9kZSA9IHN0YXRlbWVudE5vZGU7XG4gICAgdGhpcy5zdWJzdGl0dXRpb24gPSBzdWJzdGl0dXRpb247XG4gIH1cblxuICBnZXRNZXRhdmFyaWFibGVOb2RlKCkge1xuICAgIHJldHVybiB0aGlzLm1ldGF2YXJpYWJsZU5vZGU7XG4gIH1cblxuICBnZXRTdGF0ZW1lbnROb2RlKCkge1xuICAgIHJldHVybiB0aGlzLnN0YXRlbWVudE5vZGU7XG4gIH1cblxuICBnZXRTdWJzdGl0dXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuc3Vic3RpdHV0aW9uO1xuICB9XG5cbiAgbWF0Y2hTdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUsIHN1YnN0aXR1dGlvbnMsIGxvY2FsQ29udGV4dEEsIGxvY2FsQ29udGV4dEIpIHtcbiAgICBsZXQgc3RhdGVtZW50Tm9kZU1hdGNoZXM7XG5cbiAgICBjb25zdCBzdWJzdGl0dXRpb24gPSB0aGlzLnN1YnN0aXR1dGlvbiwgLy8vXG4gICAgICAgICAgc3RhdGVtZW50Tm9kZUEgPSBzdGF0ZW1lbnROb2RlLCAgLy8vXG4gICAgICAgICAgc3RhdGVtZW50Tm9kZUIgPSB0aGlzLnN0YXRlbWVudE5vZGU7IC8vL1xuXG4gICAgc3RhdGVtZW50Tm9kZU1hdGNoZXMgPSBtYXRjaFN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZUEsIHN0YXRlbWVudE5vZGVCLCBzdWJzdGl0dXRpb24sIHN1YnN0aXR1dGlvbnMsIGxvY2FsQ29udGV4dEEsIGxvY2FsQ29udGV4dEIpO1xuXG4gICAgaWYgKCFzdGF0ZW1lbnROb2RlTWF0Y2hlcykge1xuICAgICAgY29uc3QgYnJhY2tldGVkU3RhdGVtZW50Q2hpbGROb2RlID0gYnJhY2tldGVkU3RhdGVtZW50Q2hpbGROb2RlRnJvbVN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSk7XG5cbiAgICAgIGlmIChicmFja2V0ZWRTdGF0ZW1lbnRDaGlsZE5vZGUgIT09IG51bGwpIHtcbiAgICAgICAgY29uc3Qgc3RhdGVtZW50Tm9kZUEgPSBicmFja2V0ZWRTdGF0ZW1lbnRDaGlsZE5vZGU7IC8vL1xuXG4gICAgICAgIHN0YXRlbWVudE5vZGVNYXRjaGVzID0gbWF0Y2hTdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGVBLCBzdGF0ZW1lbnROb2RlQiwgc3Vic3RpdHV0aW9uLCBzdWJzdGl0dXRpb25zLCBsb2NhbENvbnRleHRBLCBsb2NhbENvbnRleHRCKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gc3RhdGVtZW50Tm9kZU1hdGNoZXM7XG4gIH1cblxuICBtYXRjaE1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSkge1xuICAgIGNvbnN0IG1ldGF2YXJpYWJsZU5vZGVNYXRjaGVzID0gdGhpcy5tZXRhdmFyaWFibGVOb2RlLm1hdGNoKG1ldGF2YXJpYWJsZU5vZGUpO1xuXG4gICAgcmV0dXJuIG1ldGF2YXJpYWJsZU5vZGVNYXRjaGVzO1xuICB9XG5cbiAgc3RhdGljIGZyb21NZXRhdmFyaWFibGVOb2RlQW5kU3RhdGVtZW50Tm9kZShtZXRhdmFyaWFibGVOb2RlLCBzdGF0ZW1lbnROb2RlKSB7XG4gICAgbGV0IHN0YXRlbWVudEZvck1ldGF2YXJpYWJsZVN1YnN0aXR1dGlvbjtcblxuICAgIGNvbnN0IHN1YnN0aXR1dGlvbiA9IG51bGw7XG5cbiAgICBzdGF0ZW1lbnRGb3JNZXRhdmFyaWFibGVTdWJzdGl0dXRpb24gPSBuZXcgU3RhdGVtZW50Rm9yTWV0YXZhcmlhYmxlU3Vic3RpdHV0aW9uKG1ldGF2YXJpYWJsZU5vZGUsIHN0YXRlbWVudE5vZGUsIHN1YnN0aXR1dGlvbik7XG5cbiAgICBjb25zdCBicmFja2V0ZWRTdGF0ZW1lbnRDaGlsZE5vZGUgPSBicmFja2V0ZWRTdGF0ZW1lbnRDaGlsZE5vZGVGcm9tU3RhdGVtZW50Tm9kZShzdGF0ZW1lbnROb2RlKTtcblxuICAgIGlmIChicmFja2V0ZWRTdGF0ZW1lbnRDaGlsZE5vZGUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHN0YXRlbWVudE5vZGUgPSBicmFja2V0ZWRTdGF0ZW1lbnRDaGlsZE5vZGU7IC8vL1xuXG4gICAgICBzdGF0ZW1lbnRGb3JNZXRhdmFyaWFibGVTdWJzdGl0dXRpb24gPSBuZXcgU3RhdGVtZW50Rm9yTWV0YXZhcmlhYmxlU3Vic3RpdHV0aW9uKG1ldGF2YXJpYWJsZU5vZGUsIHN0YXRlbWVudE5vZGUsIHN1YnN0aXR1dGlvbik7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN0YXRlbWVudEZvck1ldGF2YXJpYWJsZVN1YnN0aXR1dGlvbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTWV0YXZhcmlhYmxlTm9kZVN0YXRlbWVudE5vZGVBbmRTdWJzdGl0dXRpb25Ob2RlKG1ldGF2YXJpYWJsZU5vZGUsIHN0YXRlbWVudE5vZGUsIHN1YnN0aXR1dGlvbk5vZGUpIHtcbiAgICBsZXQgc3RhdGVtZW50Rm9yTWV0YXZhcmlhYmxlU3Vic3RpdHV0aW9uO1xuXG4gICAgbGV0IHN1YnN0aXR1dGlvbiA9IG51bGw7XG5cbiAgICBpZiAoc3Vic3RpdHV0aW9uTm9kZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgdGVybUZvclZhcmlhYmxlU3Vic3RpdHV0aW9uID0gVGVybUZvclZhcmlhYmxlU3Vic3RpdHV0aW9uLmZyb21TdWJzdGl0dXRpb25Ob2RlKHN1YnN0aXR1dGlvbk5vZGUpO1xuXG4gICAgICBzdWJzdGl0dXRpb24gPSB0ZXJtRm9yVmFyaWFibGVTdWJzdGl0dXRpb247IC8vL1xuICAgIH1cblxuICAgIHN0YXRlbWVudEZvck1ldGF2YXJpYWJsZVN1YnN0aXR1dGlvbiA9IG5ldyBTdGF0ZW1lbnRGb3JNZXRhdmFyaWFibGVTdWJzdGl0dXRpb24obWV0YXZhcmlhYmxlTm9kZSwgc3RhdGVtZW50Tm9kZSwgc3Vic3RpdHV0aW9uKTtcblxuICAgIGNvbnN0IGJyYWNrZXRlZFN0YXRlbWVudENoaWxkTm9kZSA9IGJyYWNrZXRlZFN0YXRlbWVudENoaWxkTm9kZUZyb21TdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUpO1xuXG4gICAgaWYgKGJyYWNrZXRlZFN0YXRlbWVudENoaWxkTm9kZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3Qgc3RhdGVtZW50Tm9kZSA9IGJyYWNrZXRlZFN0YXRlbWVudENoaWxkTm9kZTsgLy8vXG5cbiAgICAgIHN0YXRlbWVudEZvck1ldGF2YXJpYWJsZVN1YnN0aXR1dGlvbiA9IG5ldyBTdGF0ZW1lbnRGb3JNZXRhdmFyaWFibGVTdWJzdGl0dXRpb24obWV0YXZhcmlhYmxlTm9kZSwgc3RhdGVtZW50Tm9kZSwgc3Vic3RpdHV0aW9uKTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3RhdGVtZW50Rm9yTWV0YXZhcmlhYmxlU3Vic3RpdHV0aW9uO1xuICB9XG59XG5cbmZ1bmN0aW9uIG1hdGNoU3RhdGVtZW50Tm9kZShzdGF0ZW1lbnROb2RlQSwgc3RhdGVtZW50Tm9kZUIsIHN1YnN0aXR1dGlvbiwgc3Vic3RpdHV0aW9ucywgbG9jYWxDb250ZXh0QSwgbG9jYWxDb250ZXh0Qikge1xuICBsZXQgc3RhdGVtZW50Tm9kZU1hdGNoZXM7XG5cbiAgaWYgKHN1YnN0aXR1dGlvbiA9PT0gbnVsbCkge1xuICAgIHN0YXRlbWVudE5vZGVNYXRjaGVzID0gc3RhdGVtZW50Tm9kZUIubWF0Y2goc3RhdGVtZW50Tm9kZUEpO1xuICB9IGVsc2Uge1xuICAgIGNvbnN0IHN0YXRlbWVudFZlcmlmaWVkQWdhaW5zdFN0YXRlbWVudCA9IHZlcmlmeVN0YXRlbWVudEFnYWluc3RTdGF0ZW1lbnQoc3RhdGVtZW50Tm9kZUEsIHN0YXRlbWVudE5vZGVCLCBzdWJzdGl0dXRpb24sIHN1YnN0aXR1dGlvbnMsIGxvY2FsQ29udGV4dEEsIGxvY2FsQ29udGV4dEIpO1xuXG4gICAgc3RhdGVtZW50Tm9kZU1hdGNoZXMgPSBzdGF0ZW1lbnRWZXJpZmllZEFnYWluc3RTdGF0ZW1lbnQ7IC8vL1xuICB9XG5cbiAgcmV0dXJuIHN0YXRlbWVudE5vZGVNYXRjaGVzO1xuXG59Il0sIm5hbWVzIjpbIlN0YXRlbWVudEZvck1ldGF2YXJpYWJsZVN1YnN0aXR1dGlvbiIsIm1ldGF2YXJpYWJsZU5vZGUiLCJzdGF0ZW1lbnROb2RlIiwic3Vic3RpdHV0aW9uIiwiZ2V0TWV0YXZhcmlhYmxlTm9kZSIsImdldFN0YXRlbWVudE5vZGUiLCJnZXRTdWJzdGl0dXRpb24iLCJtYXRjaFN0YXRlbWVudE5vZGUiLCJzdWJzdGl0dXRpb25zIiwibG9jYWxDb250ZXh0QSIsImxvY2FsQ29udGV4dEIiLCJzdGF0ZW1lbnROb2RlTWF0Y2hlcyIsInN0YXRlbWVudE5vZGVBIiwic3RhdGVtZW50Tm9kZUIiLCJicmFja2V0ZWRTdGF0ZW1lbnRDaGlsZE5vZGUiLCJicmFja2V0ZWRTdGF0ZW1lbnRDaGlsZE5vZGVGcm9tU3RhdGVtZW50Tm9kZSIsIm1hdGNoTWV0YXZhcmlhYmxlTm9kZSIsIm1ldGF2YXJpYWJsZU5vZGVNYXRjaGVzIiwibWF0Y2giLCJmcm9tTWV0YXZhcmlhYmxlTm9kZUFuZFN0YXRlbWVudE5vZGUiLCJzdGF0ZW1lbnRGb3JNZXRhdmFyaWFibGVTdWJzdGl0dXRpb24iLCJmcm9tTWV0YXZhcmlhYmxlTm9kZVN0YXRlbWVudE5vZGVBbmRTdWJzdGl0dXRpb25Ob2RlIiwic3Vic3RpdHV0aW9uTm9kZSIsInRlcm1Gb3JWYXJpYWJsZVN1YnN0aXR1dGlvbiIsIlRlcm1Gb3JWYXJpYWJsZVN1YnN0aXR1dGlvbiIsImZyb21TdWJzdGl0dXRpb25Ob2RlIiwiU3Vic3RpdHV0aW9uIiwic3RhdGVtZW50VmVyaWZpZWRBZ2FpbnN0U3RhdGVtZW50IiwidmVyaWZ5U3RhdGVtZW50QWdhaW5zdFN0YXRlbWVudCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFRcUJBOzs7bUVBTkk7c0VBQ2U7Z0ZBQ0k7cUJBRWlCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTlDLElBQUEsQUFBTUEscURBQUQsQUFBTDtjQUFNQTsrQkFBQUE7YUFBQUEscUNBQ1BDLGdCQUFnQixFQUFFQyxhQUFhLEVBQUVDLFlBQVk7Z0NBRHRDSDs7O1FBSWpCLE1BQUtDLGdCQUFnQixHQUFHQTtRQUN4QixNQUFLQyxhQUFhLEdBQUdBO1FBQ3JCLE1BQUtDLFlBQVksR0FBR0E7OztrQkFOSEg7O1lBU25CSSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNILGdCQUFnQjtZQUM5Qjs7O1lBRUFJLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0gsYUFBYTtZQUMzQjs7O1lBRUFJLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0gs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