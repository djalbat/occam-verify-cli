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
var _shim = /*#__PURE__*/ _interop_require_default(require("../shim"));
var _substitution = /*#__PURE__*/ _interop_require_default(require("../substitution"));
var _termForVariable = /*#__PURE__*/ _interop_require_default(require("./termForVariable"));
var _statementAtainstStatement = /*#__PURE__*/ _interop_require_default(require("../unify/statementAtainstStatement"));
var _query = require("../utilities/query");
var _match = require("../utilities/match");
function _array_like_to_array(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _array_without_holes(arr) {
    if (Array.isArray(arr)) return _array_like_to_array(arr);
}
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
function _iterable_to_array(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _non_iterable_spread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
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
function _to_consumable_array(arr) {
    return _array_without_holes(arr) || _iterable_to_array(arr) || _unsupported_iterable_to_array(arr) || _non_iterable_spread();
}
function _type_of(obj) {
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
}
function _unsupported_iterable_to_array(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _array_like_to_array(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _array_like_to_array(o, minLen);
}
function _is_native_reflect_construct() {
    try {
        var result = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
    } catch (_) {}
    return (_is_native_reflect_construct = function() {
        return !!result;
    })();
}
var metavariableNodeQuery = (0, _query.nodeQuery)("/statement/metavariable!");
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
            key: "unifyStatement",
            value: function unifyStatement1(statementNode, substitutions, localContextA, localContextB) {
                var statementNodeMatches;
                var substitution = this.substitution, statementNodeA = statementNode, statementNodeB = this.statementNode; ///
                statementNodeMatches = unifyStatement(statementNodeA, statementNodeB, substitution, substitutions, localContextA, localContextB);
                if (!statementNodeMatches) {
                    var bracketedStatementChildNode = (0, _match.bracketedStatementChildNodeFromStatementNode)(statementNode);
                    if (bracketedStatementChildNode !== null) {
                        var statementNodeA1 = bracketedStatementChildNode; ///
                        statementNodeMatches = unifyStatement(statementNodeA1, statementNodeB, substitution, substitutions, localContextA, localContextB);
                    }
                }
                return statementNodeMatches;
            }
        },
        {
            key: "unifyAgainstEquivalence",
            value: function unifyAgainstEquivalence(equivalence, substitutions, localContextA, localContextB) {
                var unifiedAgainstEquivalence = false; ///
                var metavariableNode = metavariableNodeQuery(this.statementNode);
                if (metavariableNode !== null) {
                    substitutions = _to_consumable_array(substitutions);
                    var metaLevelUnifier = _shim.default.metaLevelUnifier, nodeA = this.metavariableNode, nodeB = metavariableNode, unified = metaLevelUnifier.unify(nodeA, nodeB, substitutions, localContextA, localContextB);
                    unifiedAgainstEquivalence = unified; ///
                }
                return unifiedAgainstEquivalence;
            }
        },
        {
            key: "asString",
            value: function asString(localContextA, localContextB) {
                var statementNodeB = this.statementNode, statementStringB = localContextB.nodeAsString(statementNodeB), metavariableNodeA = this.metavariableNode, metavariableStringA = localContextA.nodeAsString(metavariableNodeA), string = "[".concat(statementStringB, " for ").concat(metavariableStringA, "]");
                return string;
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
function unifyStatement(statementNodeA, statementNodeB, substitution, substitutions, localContextA, localContextB) {
    var statementUnified;
    if (substitution === null) {
        var statementNodeAMatchesStatementNodeB = statementNodeB.match(statementNodeA);
        statementUnified = statementNodeAMatchesStatementNodeB; ///
    } else {
        var statementUnifiedAgainstStatement = (0, _statementAtainstStatement.default)(statementNodeA, statementNodeB, substitution, substitutions, localContextA, localContextB);
        statementUnified = statementUnifiedAgainstStatement; ///
    }
    return statementUnified;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zdWJzdGl0dXRpb24vc3RhdGVtZW50Rm9yTWV0YXZhcmlhYmxlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgc2hpbSBmcm9tIFwiLi4vc2hpbVwiO1xuaW1wb3J0IFN1YnN0aXR1dGlvbiBmcm9tIFwiLi4vc3Vic3RpdHV0aW9uXCI7XG5pbXBvcnQgVGVybUZvclZhcmlhYmxlU3Vic3RpdHV0aW9uIGZyb20gXCIuL3Rlcm1Gb3JWYXJpYWJsZVwiO1xuaW1wb3J0IHVuaWZ5U3RhdGVtZW50QWdhaW5zdFN0YXRlbWVudCBmcm9tIFwiLi4vdW5pZnkvc3RhdGVtZW50QXRhaW5zdFN0YXRlbWVudFwiO1xuXG5pbXBvcnQgeyBub2RlUXVlcnkgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5pbXBvcnQgeyBtYXRjaFN0YXRlbWVudE1vZHVsb0JyYWNrZXRzLCBicmFja2V0ZWRTdGF0ZW1lbnRDaGlsZE5vZGVGcm9tU3RhdGVtZW50Tm9kZSB9IGZyb20gXCIuLi91dGlsaXRpZXMvbWF0Y2hcIjtcblxuY29uc3QgbWV0YXZhcmlhYmxlTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3N0YXRlbWVudC9tZXRhdmFyaWFibGUhXCIpO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTdGF0ZW1lbnRGb3JNZXRhdmFyaWFibGVTdWJzdGl0dXRpb24gZXh0ZW5kcyBTdWJzdGl0dXRpb24ge1xuICBjb25zdHJ1Y3RvcihtZXRhdmFyaWFibGVOb2RlLCBzdGF0ZW1lbnROb2RlLCBzdWJzdGl0dXRpb24pIHtcbiAgICBzdXBlcigpO1xuXG4gICAgdGhpcy5tZXRhdmFyaWFibGVOb2RlID0gbWV0YXZhcmlhYmxlTm9kZTtcbiAgICB0aGlzLnN0YXRlbWVudE5vZGUgPSBzdGF0ZW1lbnROb2RlO1xuICAgIHRoaXMuc3Vic3RpdHV0aW9uID0gc3Vic3RpdHV0aW9uO1xuICB9XG5cbiAgZ2V0TWV0YXZhcmlhYmxlTm9kZSgpIHtcbiAgICByZXR1cm4gdGhpcy5tZXRhdmFyaWFibGVOb2RlO1xuICB9XG5cbiAgZ2V0U3RhdGVtZW50Tm9kZSgpIHtcbiAgICByZXR1cm4gdGhpcy5zdGF0ZW1lbnROb2RlO1xuICB9XG5cbiAgZ2V0U3Vic3RpdHV0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLnN1YnN0aXR1dGlvbjtcbiAgfVxuXG4gIGdldE5vZGUoKSB7XG4gICAgY29uc3Qgbm9kZSA9IHRoaXMuc3RhdGVtZW50Tm9kZTsgIC8vL1xuXG4gICAgcmV0dXJuIG5vZGU7XG4gIH1cblxuICBtYXRjaFN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSkge1xuICAgIGNvbnN0IHN0YXRlbWVudE5vZGVBID0gc3RhdGVtZW50Tm9kZSwgLy8vXG4gICAgICAgICAgc3RhdGVtZW50Tm9kZUIgPSB0aGlzLnN0YXRlbWVudE5vZGUsICAvLy9cbiAgICAgICAgICBzdGF0ZW1lbnROb2Rlc01hdGNoID0gbWF0Y2hTdGF0ZW1lbnRNb2R1bG9CcmFja2V0cyhzdGF0ZW1lbnROb2RlQSwgc3RhdGVtZW50Tm9kZUIpLFxuICAgICAgICAgIHN0YXRlbWVudE5vZGVNYXRjaGVzID0gc3RhdGVtZW50Tm9kZXNNYXRjaDsgLy8vXG5cbiAgICByZXR1cm4gc3RhdGVtZW50Tm9kZU1hdGNoZXM7XG4gIH1cblxuICBtYXRjaE1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSkge1xuICAgIGNvbnN0IG1ldGF2YXJpYWJsZU5vZGVNYXRjaGVzID0gdGhpcy5tZXRhdmFyaWFibGVOb2RlLm1hdGNoKG1ldGF2YXJpYWJsZU5vZGUpO1xuXG4gICAgcmV0dXJuIG1ldGF2YXJpYWJsZU5vZGVNYXRjaGVzO1xuICB9XG5cbiAgdW5pZnlTdGF0ZW1lbnQoc3RhdGVtZW50Tm9kZSwgc3Vic3RpdHV0aW9ucywgbG9jYWxDb250ZXh0QSwgbG9jYWxDb250ZXh0Qikge1xuICAgIGxldCBzdGF0ZW1lbnROb2RlTWF0Y2hlcztcblxuICAgIGNvbnN0IHN1YnN0aXR1dGlvbiA9IHRoaXMuc3Vic3RpdHV0aW9uLCAvLy9cbiAgICAgICAgICBzdGF0ZW1lbnROb2RlQSA9IHN0YXRlbWVudE5vZGUsICAvLy9cbiAgICAgICAgICBzdGF0ZW1lbnROb2RlQiA9IHRoaXMuc3RhdGVtZW50Tm9kZTsgLy8vXG5cbiAgICBzdGF0ZW1lbnROb2RlTWF0Y2hlcyA9IHVuaWZ5U3RhdGVtZW50KHN0YXRlbWVudE5vZGVBLCBzdGF0ZW1lbnROb2RlQiwgc3Vic3RpdHV0aW9uLCBzdWJzdGl0dXRpb25zLCBsb2NhbENvbnRleHRBLCBsb2NhbENvbnRleHRCKTtcblxuICAgIGlmICghc3RhdGVtZW50Tm9kZU1hdGNoZXMpIHtcbiAgICAgIGNvbnN0IGJyYWNrZXRlZFN0YXRlbWVudENoaWxkTm9kZSA9IGJyYWNrZXRlZFN0YXRlbWVudENoaWxkTm9kZUZyb21TdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUpO1xuXG4gICAgICBpZiAoYnJhY2tldGVkU3RhdGVtZW50Q2hpbGROb2RlICE9PSBudWxsKSB7XG4gICAgICAgIGNvbnN0IHN0YXRlbWVudE5vZGVBID0gYnJhY2tldGVkU3RhdGVtZW50Q2hpbGROb2RlOyAvLy9cblxuICAgICAgICBzdGF0ZW1lbnROb2RlTWF0Y2hlcyA9IHVuaWZ5U3RhdGVtZW50KHN0YXRlbWVudE5vZGVBLCBzdGF0ZW1lbnROb2RlQiwgc3Vic3RpdHV0aW9uLCBzdWJzdGl0dXRpb25zLCBsb2NhbENvbnRleHRBLCBsb2NhbENvbnRleHRCKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gc3RhdGVtZW50Tm9kZU1hdGNoZXM7XG4gIH1cblxuICB1bmlmeUFnYWluc3RFcXVpdmFsZW5jZShlcXVpdmFsZW5jZSwgc3Vic3RpdHV0aW9ucywgbG9jYWxDb250ZXh0QSwgbG9jYWxDb250ZXh0Qikge1xuICAgIGxldCB1bmlmaWVkQWdhaW5zdEVxdWl2YWxlbmNlID0gZmFsc2U7ICAvLy9cblxuICAgIGNvbnN0IG1ldGF2YXJpYWJsZU5vZGUgPSBtZXRhdmFyaWFibGVOb2RlUXVlcnkodGhpcy5zdGF0ZW1lbnROb2RlKTtcblxuICAgIGlmIChtZXRhdmFyaWFibGVOb2RlICE9PSBudWxsKSB7XG4gICAgICBzdWJzdGl0dXRpb25zID0gWyAvLy9cbiAgICAgICAgLi4uc3Vic3RpdHV0aW9uc1xuICAgICAgXTtcblxuICAgICAgY29uc3QgeyBtZXRhTGV2ZWxVbmlmaWVyIH0gPSBzaGltLFxuICAgICAgICAgICAgbm9kZUEgPSB0aGlzLm1ldGF2YXJpYWJsZU5vZGUsIC8vL1xuICAgICAgICAgICAgbm9kZUIgPSBtZXRhdmFyaWFibGVOb2RlLCAvLy9cbiAgICAgICAgICAgIHVuaWZpZWQgPSBtZXRhTGV2ZWxVbmlmaWVyLnVuaWZ5KG5vZGVBLCBub2RlQiwgc3Vic3RpdHV0aW9ucywgbG9jYWxDb250ZXh0QSwgbG9jYWxDb250ZXh0Qik7XG5cbiAgICAgIHVuaWZpZWRBZ2FpbnN0RXF1aXZhbGVuY2UgPSB1bmlmaWVkOyAvLy9cbiAgICB9XG5cbiAgICByZXR1cm4gdW5pZmllZEFnYWluc3RFcXVpdmFsZW5jZTtcbiAgfVxuXG4gIGFzU3RyaW5nKGxvY2FsQ29udGV4dEEsIGxvY2FsQ29udGV4dEIpIHtcbiAgICBjb25zdCBzdGF0ZW1lbnROb2RlQiA9IHRoaXMuc3RhdGVtZW50Tm9kZSwgIC8vL1xuICAgICAgICAgIHN0YXRlbWVudFN0cmluZ0IgPSBsb2NhbENvbnRleHRCLm5vZGVBc1N0cmluZyhzdGF0ZW1lbnROb2RlQiksXG4gICAgICAgICAgbWV0YXZhcmlhYmxlTm9kZUEgPSB0aGlzLm1ldGF2YXJpYWJsZU5vZGUsICAvLy9cbiAgICAgICAgICBtZXRhdmFyaWFibGVTdHJpbmdBID0gbG9jYWxDb250ZXh0QS5ub2RlQXNTdHJpbmcobWV0YXZhcmlhYmxlTm9kZUEpLFxuICAgICAgICAgIHN0cmluZyA9IGBbJHtzdGF0ZW1lbnRTdHJpbmdCfSBmb3IgJHttZXRhdmFyaWFibGVTdHJpbmdBfV1gO1xuXG4gICAgcmV0dXJuIHN0cmluZztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTWV0YXZhcmlhYmxlTm9kZUFuZFN0YXRlbWVudE5vZGUobWV0YXZhcmlhYmxlTm9kZSwgc3RhdGVtZW50Tm9kZSkge1xuICAgIGxldCBzdGF0ZW1lbnRGb3JNZXRhdmFyaWFibGVTdWJzdGl0dXRpb247XG5cbiAgICBjb25zdCBzdWJzdGl0dXRpb24gPSBudWxsO1xuXG4gICAgc3RhdGVtZW50Rm9yTWV0YXZhcmlhYmxlU3Vic3RpdHV0aW9uID0gbmV3IFN0YXRlbWVudEZvck1ldGF2YXJpYWJsZVN1YnN0aXR1dGlvbihtZXRhdmFyaWFibGVOb2RlLCBzdGF0ZW1lbnROb2RlLCBzdWJzdGl0dXRpb24pO1xuXG4gICAgY29uc3QgYnJhY2tldGVkU3RhdGVtZW50Q2hpbGROb2RlID0gYnJhY2tldGVkU3RhdGVtZW50Q2hpbGROb2RlRnJvbVN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSk7XG5cbiAgICBpZiAoYnJhY2tldGVkU3RhdGVtZW50Q2hpbGROb2RlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBzdGF0ZW1lbnROb2RlID0gYnJhY2tldGVkU3RhdGVtZW50Q2hpbGROb2RlOyAvLy9cblxuICAgICAgc3RhdGVtZW50Rm9yTWV0YXZhcmlhYmxlU3Vic3RpdHV0aW9uID0gbmV3IFN0YXRlbWVudEZvck1ldGF2YXJpYWJsZVN1YnN0aXR1dGlvbihtZXRhdmFyaWFibGVOb2RlLCBzdGF0ZW1lbnROb2RlLCBzdWJzdGl0dXRpb24pO1xuICAgIH1cblxuICAgIHJldHVybiBzdGF0ZW1lbnRGb3JNZXRhdmFyaWFibGVTdWJzdGl0dXRpb247XG4gIH1cblxuICBzdGF0aWMgZnJvbU1ldGF2YXJpYWJsZU5vZGVTdGF0ZW1lbnROb2RlQW5kU3Vic3RpdHV0aW9uTm9kZShtZXRhdmFyaWFibGVOb2RlLCBzdGF0ZW1lbnROb2RlLCBzdWJzdGl0dXRpb25Ob2RlKSB7XG4gICAgbGV0IHN0YXRlbWVudEZvck1ldGF2YXJpYWJsZVN1YnN0aXR1dGlvbjtcblxuICAgIGxldCBzdWJzdGl0dXRpb24gPSBudWxsO1xuXG4gICAgaWYgKHN1YnN0aXR1dGlvbk5vZGUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHRlcm1Gb3JWYXJpYWJsZVN1YnN0aXR1dGlvbiA9IFRlcm1Gb3JWYXJpYWJsZVN1YnN0aXR1dGlvbi5mcm9tU3Vic3RpdHV0aW9uTm9kZShzdWJzdGl0dXRpb25Ob2RlKTtcblxuICAgICAgc3Vic3RpdHV0aW9uID0gdGVybUZvclZhcmlhYmxlU3Vic3RpdHV0aW9uOyAvLy9cbiAgICB9XG5cbiAgICBzdGF0ZW1lbnRGb3JNZXRhdmFyaWFibGVTdWJzdGl0dXRpb24gPSBuZXcgU3RhdGVtZW50Rm9yTWV0YXZhcmlhYmxlU3Vic3RpdHV0aW9uKG1ldGF2YXJpYWJsZU5vZGUsIHN0YXRlbWVudE5vZGUsIHN1YnN0aXR1dGlvbik7XG5cbiAgICBjb25zdCBicmFja2V0ZWRTdGF0ZW1lbnRDaGlsZE5vZGUgPSBicmFja2V0ZWRTdGF0ZW1lbnRDaGlsZE5vZGVGcm9tU3RhdGVtZW50Tm9kZShzdGF0ZW1lbnROb2RlKTtcblxuICAgIGlmIChicmFja2V0ZWRTdGF0ZW1lbnRDaGlsZE5vZGUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHN0YXRlbWVudE5vZGUgPSBicmFja2V0ZWRTdGF0ZW1lbnRDaGlsZE5vZGU7IC8vL1xuXG4gICAgICBzdGF0ZW1lbnRGb3JNZXRhdmFyaWFibGVTdWJzdGl0dXRpb24gPSBuZXcgU3RhdGVtZW50Rm9yTWV0YXZhcmlhYmxlU3Vic3RpdHV0aW9uKG1ldGF2YXJpYWJsZU5vZGUsIHN0YXRlbWVudE5vZGUsIHN1YnN0aXR1dGlvbik7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN0YXRlbWVudEZvck1ldGF2YXJpYWJsZVN1YnN0aXR1dGlvbjtcbiAgfVxufVxuXG5mdW5jdGlvbiB1bmlmeVN0YXRlbWVudChzdGF0ZW1lbnROb2RlQSwgc3RhdGVtZW50Tm9kZUIsIHN1YnN0aXR1dGlvbiwgc3Vic3RpdHV0aW9ucywgbG9jYWxDb250ZXh0QSwgbG9jYWxDb250ZXh0Qikge1xuICBsZXQgc3RhdGVtZW50VW5pZmllZDtcblxuICBpZiAoc3Vic3RpdHV0aW9uID09PSBudWxsKSB7XG4gICAgY29uc3Qgc3RhdGVtZW50Tm9kZUFNYXRjaGVzU3RhdGVtZW50Tm9kZUIgPSBzdGF0ZW1lbnROb2RlQi5tYXRjaChzdGF0ZW1lbnROb2RlQSk7XG5cbiAgICBzdGF0ZW1lbnRVbmlmaWVkID0gc3RhdGVtZW50Tm9kZUFNYXRjaGVzU3RhdGVtZW50Tm9kZUI7IC8vL1xuICB9IGVsc2Uge1xuICAgIGNvbnN0IHN0YXRlbWVudFVuaWZpZWRBZ2FpbnN0U3RhdGVtZW50ID0gdW5pZnlTdGF0ZW1lbnRBZ2FpbnN0U3RhdGVtZW50KHN0YXRlbWVudE5vZGVBLCBzdGF0ZW1lbnROb2RlQiwgc3Vic3RpdHV0aW9uLCBzdWJzdGl0dXRpb25zLCBsb2NhbENvbnRleHRBLCBsb2NhbENvbnRleHRCKTtcblxuICAgIHN0YXRlbWVudFVuaWZpZWQgPSBzdGF0ZW1lbnRVbmlmaWVkQWdhaW5zdFN0YXRlbWVudDsgLy8vXG4gIH1cblxuICByZXR1cm4gc3RhdGVtZW50VW5pZmllZDtcbn0iXSwibmFtZXMiOlsiU3RhdGVtZW50Rm9yTWV0YXZhcmlhYmxlU3Vic3RpdHV0aW9uIiwibWV0YXZhcmlhYmxlTm9kZVF1ZXJ5Iiwibm9kZVF1ZXJ5IiwibWV0YXZhcmlhYmxlTm9kZSIsInN0YXRlbWVudE5vZGUiLCJzdWJzdGl0dXRpb24iLCJnZXRNZXRhdmFyaWFibGVOb2RlIiwiZ2V0U3RhdGVtZW50Tm9kZSIsImdldFN1YnN0aXR1dGlvbiIsImdldE5vZGUiLCJub2RlIiwibWF0Y2hTdGF0ZW1lbnROb2RlIiwic3RhdGVtZW50Tm9kZUEiLCJzdGF0ZW1lbnROb2RlQiIsInN0YXRlbWVudE5vZGVzTWF0Y2giLCJtYXRjaFN0YXRlbWVudE1vZHVsb0JyYWNrZXRzIiwic3RhdGVtZW50Tm9kZU1hdGNoZXMiLCJtYXRjaE1ldGF2YXJpYWJsZU5vZGUiLCJtZXRhdmFyaWFibGVOb2RlTWF0Y2hlcyIsIm1hdGNoIiwidW5pZnlTdGF0ZW1lbnQiLCJzdWJzdGl0dXRpb25zIiwibG9jYWxDb250ZXh0QSIsImxvY2FsQ29udGV4dEIiLCJicmFja2V0ZWRTdGF0ZW1lbnRDaGlsZE5vZGUiLCJicmFja2V0ZWRTdGF0ZW1lbnRDaGlsZE5vZGVGcm9tU3RhdGVtZW50Tm9kZSIsInVuaWZ5QWdhaW5zdEVxdWl2YWxlbmNlIiwiZXF1aXZhbGVuY2UiLCJ1bmlmaWVkQWdhaW5zdEVxdWl2YWxlbmNlIiwibWV0YUxldmVsVW5pZmllciIsInNoaW0iLCJub2RlQSIsIm5vZGVCIiwidW5pZmllZCIsInVuaWZ5IiwiYXNTdHJpbmciLCJzdGF0ZW1lbnRTdHJpbmdCIiwibm9kZUFzU3RyaW5nIiwibWV0YXZhcmlhYmxlTm9kZUEiLCJtZXRhdmFyaWFibGVTdHJpbmdBIiwic3RyaW5nIiwiZnJvbU1ldGF2YXJpYWJsZU5vZGVBbmRTdGF0ZW1lbnROb2RlIiwic3RhdGVtZW50Rm9yTWV0YXZhcmlhYmxlU3Vic3RpdHV0aW9uIiwiZnJvbU1ldGF2YXJpYWJsZU5vZGVTdGF0ZW1lbnROb2RlQW5kU3Vic3RpdHV0aW9uTm9kZSIsInN1YnN0aXR1dGlvbk5vZGUiLCJ0ZXJtRm9yVmFyaWFibGVTdWJzdGl0dXRpb24iLCJUZXJtRm9yVmFyaWFibGVTdWJzdGl0dXRpb24iLCJmcm9tU3Vic3RpdHV0aW9uTm9kZSIsIlN1YnN0aXR1dGlvbiIsInN0YXRlbWVudFVuaWZpZWQiLCJzdGF0ZW1lbnROb2RlQU1hdGNoZXNTdGF0ZW1lbnROb2RlQiIsInN0YXRlbWVudFVuaWZpZWRBZ2FpbnN0U3RhdGVtZW50IiwidW5pZnlTdGF0ZW1lbnRBZ2FpbnN0U3RhdGVtZW50Il0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQVlxQkE7OzsyREFWSjttRUFDUTtzRUFDZTtnRkFDRztxQkFFakI7cUJBQ2lFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUUzRixJQUFNQyx3QkFBd0JDLElBQUFBLGdCQUFTLEVBQUM7QUFFekIsSUFBQSxBQUFNRixxREFBTjtjQUFNQTthQUFBQSxxQ0FDUEcsZ0JBQWdCLEVBQUVDLGFBQWEsRUFBRUMsWUFBWTtnQ0FEdENMOztnQkFFakIsa0JBRmlCQTtRQUlqQixNQUFLRyxnQkFBZ0IsR0FBR0E7UUFDeEIsTUFBS0MsYUFBYSxHQUFHQTtRQUNyQixNQUFLQyxZQUFZLEdBQUdBOzs7a0JBTkhMOztZQVNuQk0sS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDSCxnQkFBZ0I7WUFDOUI7OztZQUVBSSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNILGFBQWE7WUFDM0I7OztZQUVBSSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNILFlBQVk7WUFDMUI7OztZQUVBSSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTUMsT0FBTyxJQUFJLENBQUNOLGFBQWEsRUFBRyxHQUFHO2dCQUVyQyxPQUFPTTtZQUNUOzs7WUFFQUMsS0FBQUE7bUJBQUFBLFNBQUFBLG1CQUFtQlAsYUFBYTtnQkFDOUIsSUFBTVEsaUJBQWlCUixlQUNqQlMsaUJBQWlCLElBQUksQ0FBQ1QsYUFBYSxFQUNuQ1Usc0JBQXNCQyxJQUFBQSxtQ0FBNEIsRUFBQ0gsZ0JBQWdCQyxpQkFDbkVHLHVCQUF1QkYscUJBQXFCLEdBQUc7Z0JBRXJELE9BQU9FO1lBQ1Q7OztZQUVBQyxLQUFBQTttQkFBQUEsU0FBQUEsc0JBQXNCZCxnQkFBZ0I7Z0JBQ3BDLElBQU1lLDBCQUEwQixJQUFJLENBQUNmLGdCQUFnQixDQUFDZ0IsS0FBSyxDQUFDaEI7Z0JBRTVELE9BQU9lO1lBQ1Q7OztZQUVBRSxLQUFBQTttQkFBQUEsU0FBQUEsZ0JBQWVoQixhQUFhLEVBQUVpQixhQUFhLEVBQUVDLGFBQWEsRUFBRUMsYUFBYTtnQkFDdkUsSUFBSVA7Z0JBRUosSUFBTVgsZUFBZSxJQUFJLENBQUNBLFlBQVksRUFDaENPLGlCQUFpQlIsZUFDakJTLGlCQUFpQixJQUFJLENBQUNULGFBQWEsRUFBRSxHQUFHO2dCQUU5Q1ksdUJBQXVCSSxlQUFlUixnQkFBZ0JDLGdCQUFnQlIsY0FBY2dCLGVBQWVDLGVBQWVDO2dCQUVsSCxJQUFJLENBQUNQLHNCQUFzQjtvQkFDekIsSUFBTVEsOEJBQThCQyxJQUFBQSxtREFBNEMsRUFBQ3JCO29CQUVqRixJQUFJb0IsZ0NBQWdDLE1BQU07d0JBQ3hDLElBQU1aLGtCQUFpQlksNkJBQTZCLEdBQUc7d0JBRXZEUix1QkFBdUJJLGVBQWVSLGlCQUFnQkMsZ0JBQWdCUixjQUFjZ0IsZUFBZUMsZUFBZUM7b0JBQ3BIO2dCQUNGO2dCQUVBLE9BQU9QO1lBQ1Q7OztZQUVBVSxLQUFBQTttQkFBQUEsU0FBQUEsd0JBQXdCQyxXQUFXLEVBQUVOLGFBQWEsRUFBRUMsYUFBYSxFQUFFQyxhQUFhO2dCQUM5RSxJQUFJSyw0QkFBNEIsT0FBUSxHQUFHO2dCQUUzQyxJQUFNekIsbUJBQW1CRixzQkFBc0IsSUFBSSxDQUFDRyxhQUFhO2dCQUVqRSxJQUFJRCxxQkFBcUIsTUFBTTtvQkFDN0JrQixnQkFDRSxxQkFBR0E7b0JBR0wsSUFBTSxBQUFFUSxtQkFBcUJDLGFBQUksQ0FBekJELGtCQUNGRSxRQUFRLElBQUksQ0FBQzVCLGdCQUFnQixFQUM3QjZCLFFBQVE3QixrQkFDUjhCLFVBQVVKLGlCQUFpQkssS0FBSyxDQUFDSCxPQUFPQyxPQUFPWCxlQUFlQyxlQUFlQztvQkFFbkZLLDRCQUE0QkssU0FBUyxHQUFHO2dCQUMxQztnQkFFQSxPQUFPTDtZQUNUOzs7WUFFQU8sS0FBQUE7bUJBQUFBLFNBQUFBLFNBQVNiLGFBQWEsRUFBRUMsYUFBYTtnQkFDbkMsSUFBTVYsaUJBQWlCLElBQUksQ0FBQ1QsYUFBYSxFQUNuQ2dDLG1CQUFtQmIsY0FBY2MsWUFBWSxDQUFDeEIsaUJBQzlDeUIsb0JBQW9CLElBQUksQ0FBQ25DLGdCQUFnQixFQUN6Q29DLHNCQUFzQmpCLGNBQWNlLFlBQVksQ0FBQ0Msb0JBQ2pERSxTQUFTLEFBQUMsSUFBMkJELE9BQXhCSCxrQkFBaUIsU0FBMkIsT0FBcEJHLHFCQUFvQjtnQkFFL0QsT0FBT0M7WUFDVDs7OztZQUVPQyxLQUFBQTttQkFBUCxTQUFPQSxxQ0FBcUN0QyxnQkFBZ0IsRUFBRUMsYUFBYTtnQkFDekUsSUFBSXNDO2dCQUVKLElBQU1yQyxlQUFlO2dCQUVyQnFDLHVDQUF1QyxJQXBHdEIxQyxxQ0FvRytERyxrQkFBa0JDLGVBQWVDO2dCQUVqSCxJQUFNbUIsOEJBQThCQyxJQUFBQSxtREFBNEMsRUFBQ3JCO2dCQUVqRixJQUFJb0IsZ0NBQWdDLE1BQU07b0JBQ3hDLElBQU1wQixrQkFBZ0JvQiw2QkFBNkIsR0FBRztvQkFFdERrQix1Q0FBdUMsSUEzR3hCMUMscUNBMkdpRUcsa0JBQWtCQyxpQkFBZUM7Z0JBQ25IO2dCQUVBLE9BQU9xQztZQUNUOzs7WUFFT0MsS0FBQUE7bUJBQVAsU0FBT0EscURBQXFEeEMsZ0JBQWdCLEVBQUVDLGFBQWEsRUFBRXdDLGdCQUFnQjtnQkFDM0csSUFBSUY7Z0JBRUosSUFBSXJDLGVBQWU7Z0JBRW5CLElBQUl1QyxxQkFBcUIsTUFBTTtvQkFDN0IsSUFBTUMsOEJBQThCQyx3QkFBMkIsQ0FBQ0Msb0JBQW9CLENBQUNIO29CQUVyRnZDLGVBQWV3Qyw2QkFBNkIsR0FBRztnQkFDakQ7Z0JBRUFILHVDQUF1QyxJQTVIdEIxQyxxQ0E0SCtERyxrQkFBa0JDLGVBQWVDO2dCQUVqSCxJQUFNbUIsOEJBQThCQyxJQUFBQSxtREFBNEMsRUFBQ3JCO2dCQUVqRixJQUFJb0IsZ0NBQWdDLE1BQU07b0JBQ3hDLElBQU1wQixrQkFBZ0JvQiw2QkFBNkIsR0FBRztvQkFFdERrQix1Q0FBdUMsSUFuSXhCMUMscUNBbUlpRUcsa0JBQWtCQyxpQkFBZUM7Z0JBQ25IO2dCQUVBLE9BQU9xQztZQUNUOzs7V0F2SW1CMUM7RUFBNkNnRCxxQkFBWTtBQTBJOUUsU0FBUzVCLGVBQWVSLGNBQWMsRUFBRUMsY0FBYyxFQUFFUixZQUFZLEVBQUVnQixhQUFhLEVBQUVDLGFBQWEsRUFBRUMsYUFBYTtJQUMvRyxJQUFJMEI7SUFFSixJQUFJNUMsaUJBQWlCLE1BQU07UUFDekIsSUFBTTZDLHNDQUFzQ3JDLGVBQWVNLEtBQUssQ0FBQ1A7UUFFakVxQyxtQkFBbUJDLHFDQUFxQyxHQUFHO0lBQzdELE9BQU87UUFDTCxJQUFNQyxtQ0FBbUNDLElBQUFBLGtDQUE4QixFQUFDeEMsZ0JBQWdCQyxnQkFBZ0JSLGNBQWNnQixlQUFlQyxlQUFlQztRQUVwSjBCLG1CQUFtQkUsa0NBQWtDLEdBQUc7SUFDMUQ7SUFFQSxPQUFPRjtBQUNUIn0=