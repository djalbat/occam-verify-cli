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
var _node = require("../utilities/node");
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
            key: "fromJSONAndFileContext",
            value: function fromJSONAndFileContext(json, fileContext) {
                var metavariable = json.metavariable, statement = json.statement, metavariableString = metavariable, statementString = statement, lexer = fileContext.getLexer(), parser = fileContext.getParser(), statementNode = (0, _node.statementNodeFromStatementString)(statementString, lexer, parser), metavariableNode = (0, _node.metavariableNodeFromMetavariableString)(metavariableString, lexer, parser), statementForMetavariableSubstitution = new StatementForMetavariableSubstitution(statementNode, metavariableNode);
                return statementForMetavariableSubstitution;
            }
        },
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zdWJzdGl0dXRpb24vc3RhdGVtZW50Rm9yTWV0YXZhcmlhYmxlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgU3Vic3RpdHV0aW9uIGZyb20gXCIuLi9zdWJzdGl0dXRpb25cIjtcbmltcG9ydCBUZXJtRm9yVmFyaWFibGVTdWJzdGl0dXRpb24gZnJvbSBcIi4vdGVybUZvclZhcmlhYmxlXCI7XG5pbXBvcnQgdmVyaWZ5U3RhdGVtZW50QWdhaW5zdFN0YXRlbWVudCBmcm9tIFwiLi4vdmVyaWZ5L3N0YXRlbWVudEF0YWluc3RTdGF0ZW1lbnRcIjtcblxuaW1wb3J0IHsgYnJhY2tldGVkU3RhdGVtZW50Q2hpbGROb2RlRnJvbVN0YXRlbWVudE5vZGUgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL21hdGNoXCI7XG5pbXBvcnQgeyBzdGF0ZW1lbnROb2RlRnJvbVN0YXRlbWVudFN0cmluZywgbWV0YXZhcmlhYmxlTm9kZUZyb21NZXRhdmFyaWFibGVTdHJpbmcgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL25vZGVcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3RhdGVtZW50Rm9yTWV0YXZhcmlhYmxlU3Vic3RpdHV0aW9uIGV4dGVuZHMgU3Vic3RpdHV0aW9uIHtcbiAgY29uc3RydWN0b3IobWV0YXZhcmlhYmxlTm9kZSwgc3RhdGVtZW50Tm9kZSwgc3Vic3RpdHV0aW9uKSB7XG4gICAgc3VwZXIoKTtcblxuICAgIHRoaXMubWV0YXZhcmlhYmxlTm9kZSA9IG1ldGF2YXJpYWJsZU5vZGU7XG4gICAgdGhpcy5zdGF0ZW1lbnROb2RlID0gc3RhdGVtZW50Tm9kZTtcbiAgICB0aGlzLnN1YnN0aXR1dGlvbiA9IHN1YnN0aXR1dGlvbjtcbiAgfVxuXG4gIGdldE1ldGF2YXJpYWJsZU5vZGUoKSB7XG4gICAgcmV0dXJuIHRoaXMubWV0YXZhcmlhYmxlTm9kZTtcbiAgfVxuXG4gIGdldFN0YXRlbWVudE5vZGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RhdGVtZW50Tm9kZTtcbiAgfVxuXG4gIGdldFN1YnN0aXR1dGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5zdWJzdGl0dXRpb247XG4gIH1cblxuICBtYXRjaFN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSwgc3Vic3RpdHV0aW9ucywgbG9jYWxDb250ZXh0QSwgbG9jYWxDb250ZXh0Qikge1xuICAgIGxldCBzdGF0ZW1lbnROb2RlTWF0Y2hlcztcblxuICAgIGNvbnN0IHN1YnN0aXR1dGlvbiA9IHRoaXMuc3Vic3RpdHV0aW9uLCAvLy9cbiAgICAgICAgICBzdGF0ZW1lbnROb2RlQSA9IHN0YXRlbWVudE5vZGUsICAvLy9cbiAgICAgICAgICBzdGF0ZW1lbnROb2RlQiA9IHRoaXMuc3RhdGVtZW50Tm9kZTsgLy8vXG5cbiAgICBzdGF0ZW1lbnROb2RlTWF0Y2hlcyA9IG1hdGNoU3RhdGVtZW50Tm9kZShzdGF0ZW1lbnROb2RlQSwgc3RhdGVtZW50Tm9kZUIsIHN1YnN0aXR1dGlvbiwgc3Vic3RpdHV0aW9ucywgbG9jYWxDb250ZXh0QSwgbG9jYWxDb250ZXh0Qik7XG5cbiAgICBpZiAoIXN0YXRlbWVudE5vZGVNYXRjaGVzKSB7XG4gICAgICBjb25zdCBicmFja2V0ZWRTdGF0ZW1lbnRDaGlsZE5vZGUgPSBicmFja2V0ZWRTdGF0ZW1lbnRDaGlsZE5vZGVGcm9tU3RhdGVtZW50Tm9kZShzdGF0ZW1lbnROb2RlKTtcblxuICAgICAgaWYgKGJyYWNrZXRlZFN0YXRlbWVudENoaWxkTm9kZSAhPT0gbnVsbCkge1xuICAgICAgICBjb25zdCBzdGF0ZW1lbnROb2RlQSA9IGJyYWNrZXRlZFN0YXRlbWVudENoaWxkTm9kZTsgLy8vXG5cbiAgICAgICAgc3RhdGVtZW50Tm9kZU1hdGNoZXMgPSBtYXRjaFN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZUEsIHN0YXRlbWVudE5vZGVCLCBzdWJzdGl0dXRpb24sIHN1YnN0aXR1dGlvbnMsIGxvY2FsQ29udGV4dEEsIGxvY2FsQ29udGV4dEIpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBzdGF0ZW1lbnROb2RlTWF0Y2hlcztcbiAgfVxuXG4gIG1hdGNoTWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlKSB7XG4gICAgY29uc3QgbWF0Y2hlc01ldGF2YXJpYWJsZU5vZGUgPSB0aGlzLm1ldGF2YXJpYWJsZU5vZGUubWF0Y2gobWV0YXZhcmlhYmxlTm9kZSk7XG5cbiAgICByZXR1cm4gbWF0Y2hlc01ldGF2YXJpYWJsZU5vZGU7XG4gIH1cblxuICBzdGF0aWMgZnJvbUpTT05BbmRGaWxlQ29udGV4dChqc29uLCBmaWxlQ29udGV4dCkge1xuICAgIGNvbnN0IHsgbWV0YXZhcmlhYmxlLCBzdGF0ZW1lbnQgfSA9IGpzb24sXG4gICAgICAgICAgICBtZXRhdmFyaWFibGVTdHJpbmcgPSBtZXRhdmFyaWFibGUsICAvLy9cbiAgICAgICAgICAgIHN0YXRlbWVudFN0cmluZyA9IHN0YXRlbWVudCwgIC8vL1xuICAgICAgICAgICAgbGV4ZXIgPSBmaWxlQ29udGV4dC5nZXRMZXhlcigpLFxuICAgICAgICAgICAgcGFyc2VyID0gZmlsZUNvbnRleHQuZ2V0UGFyc2VyKCksXG4gICAgICAgICAgICBzdGF0ZW1lbnROb2RlID0gc3RhdGVtZW50Tm9kZUZyb21TdGF0ZW1lbnRTdHJpbmcoc3RhdGVtZW50U3RyaW5nLCBsZXhlciwgcGFyc2VyKSxcbiAgICAgICAgICAgIG1ldGF2YXJpYWJsZU5vZGUgPSBtZXRhdmFyaWFibGVOb2RlRnJvbU1ldGF2YXJpYWJsZVN0cmluZyhtZXRhdmFyaWFibGVTdHJpbmcsIGxleGVyLCBwYXJzZXIpLFxuICAgICAgICAgICAgc3RhdGVtZW50Rm9yTWV0YXZhcmlhYmxlU3Vic3RpdHV0aW9uID0gbmV3IFN0YXRlbWVudEZvck1ldGF2YXJpYWJsZVN1YnN0aXR1dGlvbihzdGF0ZW1lbnROb2RlLCBtZXRhdmFyaWFibGVOb2RlKTtcblxuICAgIHJldHVybiBzdGF0ZW1lbnRGb3JNZXRhdmFyaWFibGVTdWJzdGl0dXRpb247XG4gIH1cblxuICBzdGF0aWMgZnJvbU1ldGF2YXJpYWJsZU5vZGVBbmRTdGF0ZW1lbnROb2RlKG1ldGF2YXJpYWJsZU5vZGUsIHN0YXRlbWVudE5vZGUpIHtcbiAgICBsZXQgc3RhdGVtZW50Rm9yTWV0YXZhcmlhYmxlU3Vic3RpdHV0aW9uO1xuXG4gICAgY29uc3Qgc3Vic3RpdHV0aW9uID0gbnVsbDtcblxuICAgIHN0YXRlbWVudEZvck1ldGF2YXJpYWJsZVN1YnN0aXR1dGlvbiA9IG5ldyBTdGF0ZW1lbnRGb3JNZXRhdmFyaWFibGVTdWJzdGl0dXRpb24obWV0YXZhcmlhYmxlTm9kZSwgc3RhdGVtZW50Tm9kZSwgc3Vic3RpdHV0aW9uKTtcblxuICAgIGNvbnN0IGJyYWNrZXRlZFN0YXRlbWVudENoaWxkTm9kZSA9IGJyYWNrZXRlZFN0YXRlbWVudENoaWxkTm9kZUZyb21TdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUpO1xuXG4gICAgaWYgKGJyYWNrZXRlZFN0YXRlbWVudENoaWxkTm9kZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3Qgc3RhdGVtZW50Tm9kZSA9IGJyYWNrZXRlZFN0YXRlbWVudENoaWxkTm9kZTsgLy8vXG5cbiAgICAgIHN0YXRlbWVudEZvck1ldGF2YXJpYWJsZVN1YnN0aXR1dGlvbiA9IG5ldyBTdGF0ZW1lbnRGb3JNZXRhdmFyaWFibGVTdWJzdGl0dXRpb24obWV0YXZhcmlhYmxlTm9kZSwgc3RhdGVtZW50Tm9kZSwgc3Vic3RpdHV0aW9uKTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3RhdGVtZW50Rm9yTWV0YXZhcmlhYmxlU3Vic3RpdHV0aW9uO1xuICB9XG5cbiAgc3RhdGljIGZyb21NZXRhdmFyaWFibGVOb2RlU3RhdGVtZW50Tm9kZUFuZFN1YnN0aXR1dGlvbk5vZGUobWV0YXZhcmlhYmxlTm9kZSwgc3RhdGVtZW50Tm9kZSwgc3Vic3RpdHV0aW9uTm9kZSkge1xuICAgIGxldCBzdGF0ZW1lbnRGb3JNZXRhdmFyaWFibGVTdWJzdGl0dXRpb247XG5cbiAgICBsZXQgc3Vic3RpdHV0aW9uID0gbnVsbDtcblxuICAgIGlmIChzdWJzdGl0dXRpb25Ob2RlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCB0ZXJtRm9yVmFyaWFibGVTdWJzdGl0dXRpb24gPSBUZXJtRm9yVmFyaWFibGVTdWJzdGl0dXRpb24uZnJvbVN1YnN0aXR1dGlvbk5vZGUoc3Vic3RpdHV0aW9uTm9kZSk7XG5cbiAgICAgIHN1YnN0aXR1dGlvbiA9IHRlcm1Gb3JWYXJpYWJsZVN1YnN0aXR1dGlvbjsgLy8vXG4gICAgfVxuXG4gICAgc3RhdGVtZW50Rm9yTWV0YXZhcmlhYmxlU3Vic3RpdHV0aW9uID0gbmV3IFN0YXRlbWVudEZvck1ldGF2YXJpYWJsZVN1YnN0aXR1dGlvbihtZXRhdmFyaWFibGVOb2RlLCBzdGF0ZW1lbnROb2RlLCBzdWJzdGl0dXRpb24pO1xuXG4gICAgY29uc3QgYnJhY2tldGVkU3RhdGVtZW50Q2hpbGROb2RlID0gYnJhY2tldGVkU3RhdGVtZW50Q2hpbGROb2RlRnJvbVN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSk7XG5cbiAgICBpZiAoYnJhY2tldGVkU3RhdGVtZW50Q2hpbGROb2RlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBzdGF0ZW1lbnROb2RlID0gYnJhY2tldGVkU3RhdGVtZW50Q2hpbGROb2RlOyAvLy9cblxuICAgICAgc3RhdGVtZW50Rm9yTWV0YXZhcmlhYmxlU3Vic3RpdHV0aW9uID0gbmV3IFN0YXRlbWVudEZvck1ldGF2YXJpYWJsZVN1YnN0aXR1dGlvbihtZXRhdmFyaWFibGVOb2RlLCBzdGF0ZW1lbnROb2RlLCBzdWJzdGl0dXRpb24pO1xuICAgIH1cblxuICAgIHJldHVybiBzdGF0ZW1lbnRGb3JNZXRhdmFyaWFibGVTdWJzdGl0dXRpb247XG4gIH1cbn1cblxuZnVuY3Rpb24gbWF0Y2hTdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGVBLCBzdGF0ZW1lbnROb2RlQiwgc3Vic3RpdHV0aW9uLCBzdWJzdGl0dXRpb25zLCBsb2NhbENvbnRleHRBLCBsb2NhbENvbnRleHRCKSB7XG4gIGxldCBzdGF0ZW1lbnROb2RlTWF0Y2hlcztcblxuICBpZiAoc3Vic3RpdHV0aW9uID09PSBudWxsKSB7XG4gICAgY29uc3Qgc3RhdGVtZW50Tm9kZUFNYXRjaGVzU3RhdGVtZW50Tm9kZUIgPSBzdGF0ZW1lbnROb2RlQi5tYXRjaChzdGF0ZW1lbnROb2RlQSk7XG5cbiAgICBzdGF0ZW1lbnROb2RlTWF0Y2hlcyA9IHN0YXRlbWVudE5vZGVBTWF0Y2hlc1N0YXRlbWVudE5vZGVCOyAvLy9cbiAgfSBlbHNlIHtcbiAgICBjb25zdCBzdGF0ZW1lbnRWZXJpZmllZEFnYWluc3RTdGF0ZW1lbnQgPSB2ZXJpZnlTdGF0ZW1lbnRBZ2FpbnN0U3RhdGVtZW50KHN0YXRlbWVudE5vZGVBLCBzdGF0ZW1lbnROb2RlQiwgc3Vic3RpdHV0aW9uLCBzdWJzdGl0dXRpb25zLCBsb2NhbENvbnRleHRBLCBsb2NhbENvbnRleHRCKTtcblxuICAgIHN0YXRlbWVudE5vZGVNYXRjaGVzID0gc3RhdGVtZW50VmVyaWZpZWRBZ2FpbnN0U3RhdGVtZW50OyAvLy9cbiAgfVxuXG4gIHJldHVybiBzdGF0ZW1lbnROb2RlTWF0Y2hlcztcblxufSJdLCJuYW1lcyI6WyJTdGF0ZW1lbnRGb3JNZXRhdmFyaWFibGVTdWJzdGl0dXRpb24iLCJtZXRhdmFyaWFibGVOb2RlIiwic3RhdGVtZW50Tm9kZSIsInN1YnN0aXR1dGlvbiIsImdldE1ldGF2YXJpYWJsZU5vZGUiLCJnZXRTdGF0ZW1lbnROb2RlIiwiZ2V0U3Vic3RpdHV0aW9uIiwibWF0Y2hTdGF0ZW1lbnROb2RlIiwic3Vic3RpdHV0aW9ucyIsImxvY2FsQ29udGV4dEEiLCJsb2NhbENvbnRleHRCIiwic3RhdGVtZW50Tm9kZU1hdGNoZXMiLCJzdGF0ZW1lbnROb2RlQSIsInN0YXRlbWVudE5vZGVCIiwiYnJhY2tldGVkU3RhdGVtZW50Q2hpbGROb2RlIiwiYnJhY2tldGVkU3RhdGVtZW50Q2hpbGROb2RlRnJvbVN0YXRlbWVudE5vZGUiLCJtYXRjaE1ldGF2YXJpYWJsZU5vZGUiLCJtYXRjaGVzTWV0YXZhcmlhYmxlTm9kZSIsIm1hdGNoIiwiZnJvbUpTT05BbmRGaWxlQ29udGV4dCIsImpzb24iLCJmaWxlQ29udGV4dCIsIm1ldGF2YXJpYWJsZSIsInN0YXRlbWVudCIsIm1ldGF2YXJpYWJsZVN0cmluZyIsInN0YXRlbWVudFN0cmluZyIsImxleGVyIiwiZ2V0TGV4ZXIiLCJwYXJzZXIiLCJnZXRQYXJzZXIiLCJzdGF0ZW1lbnROb2RlRnJvbVN0YXRlbWVudFN0cmluZyIsIm1ldGF2YXJpYWJsZU5vZGVGcm9tTWV0YXZhcmlhYmxlU3RyaW5nIiwic3RhdGVtZW50Rm9yTWV0YXZhcmlhYmxlU3Vic3RpdHV0aW9uIiwiZnJvbU1ldGF2YXJpYWJsZU5vZGVBbmRTdGF0ZW1lbnROb2RlIiwiZnJvbU1ldGF2YXJpYWJsZU5vZGVTdGF0ZW1lbnROb2RlQW5kU3Vic3RpdHV0aW9uTm9kZSIsInN1YnN0aXR1dGlvbk5vZGUiLCJ0ZXJtRm9yVmFyaWFibGVTdWJzdGl0dXRpb24iLCJUZXJtRm9yVmFyaWFibGVTdWJzdGl0dXRpb24iLCJmcm9tU3Vic3RpdHV0aW9uTm9kZSIsIlN1YnN0aXR1dGlvbiIsInN0YXRlbWVudE5vZGVBTWF0Y2hlc1N0YXRlbWVudE5vZGVCIiwic3RhdGVtZW50VmVyaWZpZWRBZ2FpbnN0U3RhdGVtZW50IiwidmVyaWZ5U3RhdGVtZW50QWdhaW5zdFN0YXRlbWVudCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFTcUJBOzs7bUVBUEk7c0VBQ2U7Z0ZBQ0k7cUJBRWlCO29CQUM0Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUUxRSxJQUFBLEFBQU1BLHFEQUFELEFBQUw7Y0FBTUE7YUFBQUEscUNBQ1BDLGdCQUFnQixFQUFFQyxhQUFhLEVBQUVDLFlBQVk7Z0NBRHRDSDs7Z0JBRWpCLGtCQUZp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