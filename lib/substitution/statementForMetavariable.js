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
var _node = require("../utilities/node");
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
        },
        {
            key: "unifyAgainstEquivalence",
            value: function unifyAgainstEquivalence(equivalence, substitutions, localContext) {
                var unifiedAgainstEquivalence = false; ///
                var metavariableNode = metavariableNodeQuery(this.statementNode);
                if (metavariableNode !== null) {
                    substitutions = _to_consumable_array(substitutions);
                    var metaLevelUnifier = _shim.default.metaLevelUnifier, nodeA = this.metavariableNode, nodeB = metavariableNode, localContextA = localContext, localContextB = localContext, unified = metaLevelUnifier.unify(nodeA, nodeB, substitutions, localContextA, localContextB);
                    unifiedAgainstEquivalence = unified; ///
                }
                return unifiedAgainstEquivalence;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zdWJzdGl0dXRpb24vc3RhdGVtZW50Rm9yTWV0YXZhcmlhYmxlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgc2hpbSBmcm9tIFwiLi4vc2hpbVwiO1xuaW1wb3J0IFN1YnN0aXR1dGlvbiBmcm9tIFwiLi4vc3Vic3RpdHV0aW9uXCI7XG5pbXBvcnQgVGVybUZvclZhcmlhYmxlU3Vic3RpdHV0aW9uIGZyb20gXCIuL3Rlcm1Gb3JWYXJpYWJsZVwiO1xuaW1wb3J0IHVuaWZ5U3RhdGVtZW50QWdhaW5zdFN0YXRlbWVudCBmcm9tIFwiLi4vdW5pZnkvc3RhdGVtZW50QXRhaW5zdFN0YXRlbWVudFwiO1xuXG5pbXBvcnQgeyBub2RlUXVlcnkgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5pbXBvcnQgeyBicmFja2V0ZWRTdGF0ZW1lbnRDaGlsZE5vZGVGcm9tU3RhdGVtZW50Tm9kZSB9IGZyb20gXCIuLi91dGlsaXRpZXMvbWF0Y2hcIjtcbmltcG9ydCB7IHN0YXRlbWVudE5vZGVGcm9tU3RhdGVtZW50U3RyaW5nLCBtZXRhdmFyaWFibGVOb2RlRnJvbU1ldGF2YXJpYWJsZVN0cmluZyB9IGZyb20gXCIuLi91dGlsaXRpZXMvbm9kZVwiO1xuXG5jb25zdCBtZXRhdmFyaWFibGVOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvc3RhdGVtZW50L21ldGF2YXJpYWJsZSFcIik7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFN0YXRlbWVudEZvck1ldGF2YXJpYWJsZVN1YnN0aXR1dGlvbiBleHRlbmRzIFN1YnN0aXR1dGlvbiB7XG4gIGNvbnN0cnVjdG9yKG1ldGF2YXJpYWJsZU5vZGUsIHN0YXRlbWVudE5vZGUsIHN1YnN0aXR1dGlvbikge1xuICAgIHN1cGVyKCk7XG5cbiAgICB0aGlzLm1ldGF2YXJpYWJsZU5vZGUgPSBtZXRhdmFyaWFibGVOb2RlO1xuICAgIHRoaXMuc3RhdGVtZW50Tm9kZSA9IHN0YXRlbWVudE5vZGU7XG4gICAgdGhpcy5zdWJzdGl0dXRpb24gPSBzdWJzdGl0dXRpb247XG4gIH1cblxuICBnZXRNZXRhdmFyaWFibGVOb2RlKCkge1xuICAgIHJldHVybiB0aGlzLm1ldGF2YXJpYWJsZU5vZGU7XG4gIH1cblxuICBnZXRTdGF0ZW1lbnROb2RlKCkge1xuICAgIHJldHVybiB0aGlzLnN0YXRlbWVudE5vZGU7XG4gIH1cblxuICBnZXRTdWJzdGl0dXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuc3Vic3RpdHV0aW9uO1xuICB9XG5cbiAgbWF0Y2hTdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUsIHN1YnN0aXR1dGlvbnMsIGxvY2FsQ29udGV4dEEsIGxvY2FsQ29udGV4dEIpIHtcbiAgICBsZXQgc3RhdGVtZW50Tm9kZU1hdGNoZXM7XG5cbiAgICBjb25zdCBzdWJzdGl0dXRpb24gPSB0aGlzLnN1YnN0aXR1dGlvbiwgLy8vXG4gICAgICAgICAgc3RhdGVtZW50Tm9kZUEgPSBzdGF0ZW1lbnROb2RlLCAgLy8vXG4gICAgICAgICAgc3RhdGVtZW50Tm9kZUIgPSB0aGlzLnN0YXRlbWVudE5vZGU7IC8vL1xuXG4gICAgc3RhdGVtZW50Tm9kZU1hdGNoZXMgPSBtYXRjaFN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZUEsIHN0YXRlbWVudE5vZGVCLCBzdWJzdGl0dXRpb24sIHN1YnN0aXR1dGlvbnMsIGxvY2FsQ29udGV4dEEsIGxvY2FsQ29udGV4dEIpO1xuXG4gICAgaWYgKCFzdGF0ZW1lbnROb2RlTWF0Y2hlcykge1xuICAgICAgY29uc3QgYnJhY2tldGVkU3RhdGVtZW50Q2hpbGROb2RlID0gYnJhY2tldGVkU3RhdGVtZW50Q2hpbGROb2RlRnJvbVN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSk7XG5cbiAgICAgIGlmIChicmFja2V0ZWRTdGF0ZW1lbnRDaGlsZE5vZGUgIT09IG51bGwpIHtcbiAgICAgICAgY29uc3Qgc3RhdGVtZW50Tm9kZUEgPSBicmFja2V0ZWRTdGF0ZW1lbnRDaGlsZE5vZGU7IC8vL1xuXG4gICAgICAgIHN0YXRlbWVudE5vZGVNYXRjaGVzID0gbWF0Y2hTdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGVBLCBzdGF0ZW1lbnROb2RlQiwgc3Vic3RpdHV0aW9uLCBzdWJzdGl0dXRpb25zLCBsb2NhbENvbnRleHRBLCBsb2NhbENvbnRleHRCKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gc3RhdGVtZW50Tm9kZU1hdGNoZXM7XG4gIH1cblxuICBtYXRjaE1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSkge1xuICAgIGNvbnN0IG1hdGNoZXNNZXRhdmFyaWFibGVOb2RlID0gdGhpcy5tZXRhdmFyaWFibGVOb2RlLm1hdGNoKG1ldGF2YXJpYWJsZU5vZGUpO1xuXG4gICAgcmV0dXJuIG1hdGNoZXNNZXRhdmFyaWFibGVOb2RlO1xuICB9XG5cbiAgdW5pZnlBZ2FpbnN0RXF1aXZhbGVuY2UoZXF1aXZhbGVuY2UsIHN1YnN0aXR1dGlvbnMsIGxvY2FsQ29udGV4dCkge1xuICAgIGxldCB1bmlmaWVkQWdhaW5zdEVxdWl2YWxlbmNlID0gZmFsc2U7ICAvLy9cblxuICAgIGNvbnN0IG1ldGF2YXJpYWJsZU5vZGUgPSBtZXRhdmFyaWFibGVOb2RlUXVlcnkodGhpcy5zdGF0ZW1lbnROb2RlKTtcblxuICAgIGlmIChtZXRhdmFyaWFibGVOb2RlICE9PSBudWxsKSB7XG4gICAgICBzdWJzdGl0dXRpb25zID0gWyAvLy9cbiAgICAgICAgLi4uc3Vic3RpdHV0aW9uc1xuICAgICAgXTtcblxuICAgICAgY29uc3QgeyBtZXRhTGV2ZWxVbmlmaWVyIH0gPSBzaGltLFxuICAgICAgICAgICAgbm9kZUEgPSB0aGlzLm1ldGF2YXJpYWJsZU5vZGUsIC8vL1xuICAgICAgICAgICAgbm9kZUIgPSBtZXRhdmFyaWFibGVOb2RlLCAvLy9cbiAgICAgICAgICAgIGxvY2FsQ29udGV4dEEgPSBsb2NhbENvbnRleHQsIC8vL1xuICAgICAgICAgICAgbG9jYWxDb250ZXh0QiA9IGxvY2FsQ29udGV4dCwgIC8vL1xuICAgICAgICAgICAgdW5pZmllZCA9IG1ldGFMZXZlbFVuaWZpZXIudW5pZnkobm9kZUEsIG5vZGVCLCBzdWJzdGl0dXRpb25zLCBsb2NhbENvbnRleHRBLCBsb2NhbENvbnRleHRCKTtcblxuICAgICAgdW5pZmllZEFnYWluc3RFcXVpdmFsZW5jZSA9IHVuaWZpZWQ7IC8vL1xuICAgIH1cblxuICAgIHJldHVybiB1bmlmaWVkQWdhaW5zdEVxdWl2YWxlbmNlO1xuICB9XG5cbiAgc3RhdGljIGZyb21KU09OQW5kRmlsZUNvbnRleHQoanNvbiwgZmlsZUNvbnRleHQpIHtcbiAgICBjb25zdCB7IG1ldGF2YXJpYWJsZSwgc3RhdGVtZW50IH0gPSBqc29uLFxuICAgICAgICAgICAgbWV0YXZhcmlhYmxlU3RyaW5nID0gbWV0YXZhcmlhYmxlLCAgLy8vXG4gICAgICAgICAgICBzdGF0ZW1lbnRTdHJpbmcgPSBzdGF0ZW1lbnQsICAvLy9cbiAgICAgICAgICAgIGxleGVyID0gZmlsZUNvbnRleHQuZ2V0TGV4ZXIoKSxcbiAgICAgICAgICAgIHBhcnNlciA9IGZpbGVDb250ZXh0LmdldFBhcnNlcigpLFxuICAgICAgICAgICAgc3RhdGVtZW50Tm9kZSA9IHN0YXRlbWVudE5vZGVGcm9tU3RhdGVtZW50U3RyaW5nKHN0YXRlbWVudFN0cmluZywgbGV4ZXIsIHBhcnNlciksXG4gICAgICAgICAgICBtZXRhdmFyaWFibGVOb2RlID0gbWV0YXZhcmlhYmxlTm9kZUZyb21NZXRhdmFyaWFibGVTdHJpbmcobWV0YXZhcmlhYmxlU3RyaW5nLCBsZXhlciwgcGFyc2VyKSxcbiAgICAgICAgICAgIHN0YXRlbWVudEZvck1ldGF2YXJpYWJsZVN1YnN0aXR1dGlvbiA9IG5ldyBTdGF0ZW1lbnRGb3JNZXRhdmFyaWFibGVTdWJzdGl0dXRpb24oc3RhdGVtZW50Tm9kZSwgbWV0YXZhcmlhYmxlTm9kZSk7XG5cbiAgICByZXR1cm4gc3RhdGVtZW50Rm9yTWV0YXZhcmlhYmxlU3Vic3RpdHV0aW9uO1xuICB9XG5cbiAgc3RhdGljIGZyb21NZXRhdmFyaWFibGVOb2RlQW5kU3RhdGVtZW50Tm9kZShtZXRhdmFyaWFibGVOb2RlLCBzdGF0ZW1lbnROb2RlKSB7XG4gICAgbGV0IHN0YXRlbWVudEZvck1ldGF2YXJpYWJsZVN1YnN0aXR1dGlvbjtcblxuICAgIGNvbnN0IHN1YnN0aXR1dGlvbiA9IG51bGw7XG5cbiAgICBzdGF0ZW1lbnRGb3JNZXRhdmFyaWFibGVTdWJzdGl0dXRpb24gPSBuZXcgU3RhdGVtZW50Rm9yTWV0YXZhcmlhYmxlU3Vic3RpdHV0aW9uKG1ldGF2YXJpYWJsZU5vZGUsIHN0YXRlbWVudE5vZGUsIHN1YnN0aXR1dGlvbik7XG5cbiAgICBjb25zdCBicmFja2V0ZWRTdGF0ZW1lbnRDaGlsZE5vZGUgPSBicmFja2V0ZWRTdGF0ZW1lbnRDaGlsZE5vZGVGcm9tU3RhdGVtZW50Tm9kZShzdGF0ZW1lbnROb2RlKTtcblxuICAgIGlmIChicmFja2V0ZWRTdGF0ZW1lbnRDaGlsZE5vZGUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHN0YXRlbWVudE5vZGUgPSBicmFja2V0ZWRTdGF0ZW1lbnRDaGlsZE5vZGU7IC8vL1xuXG4gICAgICBzdGF0ZW1lbnRGb3JNZXRhdmFyaWFibGVTdWJzdGl0dXRpb24gPSBuZXcgU3RhdGVtZW50Rm9yTWV0YXZhcmlhYmxlU3Vic3RpdHV0aW9uKG1ldGF2YXJpYWJsZU5vZGUsIHN0YXRlbWVudE5vZGUsIHN1YnN0aXR1dGlvbik7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN0YXRlbWVudEZvck1ldGF2YXJpYWJsZVN1YnN0aXR1dGlvbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTWV0YXZhcmlhYmxlTm9kZVN0YXRlbWVudE5vZGVBbmRTdWJzdGl0dXRpb25Ob2RlKG1ldGF2YXJpYWJsZU5vZGUsIHN0YXRlbWVudE5vZGUsIHN1YnN0aXR1dGlvbk5vZGUpIHtcbiAgICBsZXQgc3RhdGVtZW50Rm9yTWV0YXZhcmlhYmxlU3Vic3RpdHV0aW9uO1xuXG4gICAgbGV0IHN1YnN0aXR1dGlvbiA9IG51bGw7XG5cbiAgICBpZiAoc3Vic3RpdHV0aW9uTm9kZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgdGVybUZvclZhcmlhYmxlU3Vic3RpdHV0aW9uID0gVGVybUZvclZhcmlhYmxlU3Vic3RpdHV0aW9uLmZyb21TdWJzdGl0dXRpb25Ob2RlKHN1YnN0aXR1dGlvbk5vZGUpO1xuXG4gICAgICBzdWJzdGl0dXRpb24gPSB0ZXJtRm9yVmFyaWFibGVTdWJzdGl0dXRpb247IC8vL1xuICAgIH1cblxuICAgIHN0YXRlbWVudEZvck1ldGF2YXJpYWJsZVN1YnN0aXR1dGlvbiA9IG5ldyBTdGF0ZW1lbnRGb3JNZXRhdmFyaWFibGVTdWJzdGl0dXRpb24obWV0YXZhcmlhYmxlTm9kZSwgc3RhdGVtZW50Tm9kZSwgc3Vic3RpdHV0aW9uKTtcblxuICAgIGNvbnN0IGJyYWNrZXRlZFN0YXRlbWVudENoaWxkTm9kZSA9IGJyYWNrZXRlZFN0YXRlbWVudENoaWxkTm9kZUZyb21TdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUpO1xuXG4gICAgaWYgKGJyYWNrZXRlZFN0YXRlbWVudENoaWxkTm9kZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3Qgc3RhdGVtZW50Tm9kZSA9IGJyYWNrZXRlZFN0YXRlbWVudENoaWxkTm9kZTsgLy8vXG5cbiAgICAgIHN0YXRlbWVudEZvck1ldGF2YXJpYWJsZVN1YnN0aXR1dGlvbiA9IG5ldyBTdGF0ZW1lbnRGb3JNZXRhdmFyaWFibGVTdWJzdGl0dXRpb24obWV0YXZhcmlhYmxlTm9kZSwgc3RhdGVtZW50Tm9kZSwgc3Vic3RpdHV0aW9uKTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3RhdGVtZW50Rm9yTWV0YXZhcmlhYmxlU3Vic3RpdHV0aW9uO1xuICB9XG59XG5cbmZ1bmN0aW9uIG1hdGNoU3RhdGVtZW50Tm9kZShzdGF0ZW1lbnROb2RlQSwgc3RhdGVtZW50Tm9kZUIsIHN1YnN0aXR1dGlvbiwgc3Vic3RpdHV0aW9ucywgbG9jYWxDb250ZXh0QSwgbG9jYWxDb250ZXh0Qikge1xuICBsZXQgc3RhdGVtZW50Tm9kZU1hdGNoZXM7XG5cbiAgaWYgKHN1YnN0aXR1dGlvbiA9PT0gbnVsbCkge1xuICAgIGNvbnN0IHN0YXRlbWVudE5vZGVBTWF0Y2hlc1N0YXRlbWVudE5vZGVCID0gc3RhdGVtZW50Tm9kZUIubWF0Y2goc3RhdGVtZW50Tm9kZUEpO1xuXG4gICAgc3RhdGVtZW50Tm9kZU1hdGNoZXMgPSBzdGF0ZW1lbnROb2RlQU1hdGNoZXNTdGF0ZW1lbnROb2RlQjsgLy8vXG4gIH0gZWxzZSB7XG4gICAgY29uc3Qgc3RhdGVtZW50VmVyaWZpZWRBZ2FpbnN0U3RhdGVtZW50ID0gdW5pZnlTdGF0ZW1lbnRBZ2FpbnN0U3RhdGVtZW50KHN0YXRlbWVudE5vZGVBLCBzdGF0ZW1lbnROb2RlQiwgc3Vic3RpdHV0aW9uLCBzdWJzdGl0dXRpb25zLCBsb2NhbENvbnRleHRBLCBsb2NhbENvbnRleHRCKTtcblxuICAgIHN0YXRlbWVudE5vZGVNYXRjaGVzID0gc3RhdGVtZW50VmVyaWZpZWRBZ2FpbnN0U3RhdGVtZW50OyAvLy9cbiAgfVxuXG4gIHJldHVybiBzdGF0ZW1lbnROb2RlTWF0Y2hlcztcblxufSJdLCJuYW1lcyI6WyJTdGF0ZW1lbnRGb3JNZXRhdmFyaWFibGVTdWJzdGl0dXRpb24iLCJtZXRhdmFyaWFibGVOb2RlUXVlcnkiLCJub2RlUXVlcnkiLCJtZXRhdmFyaWFibGVOb2RlIiwic3RhdGVtZW50Tm9kZSIsInN1YnN0aXR1dGlvbiIsImdldE1ldGF2YXJpYWJsZU5vZGUiLCJnZXRTdGF0ZW1lbnROb2RlIiwiZ2V0U3Vic3RpdHV0aW9uIiwibWF0Y2hTdGF0ZW1lbnROb2RlIiwic3Vic3RpdHV0aW9ucyIsImxvY2FsQ29udGV4dEEiLCJsb2NhbENvbnRleHRCIiwic3RhdGVtZW50Tm9kZU1hdGNoZXMiLCJzdGF0ZW1lbnROb2RlQSIsInN0YXRlbWVudE5vZGVCIiwiYnJhY2tldGVkU3RhdGVtZW50Q2hpbGROb2RlIiwiYnJhY2tldGVkU3RhdGVtZW50Q2hpbGROb2RlRnJvbVN0YXRlbWVudE5vZGUiLCJtYXRjaE1ldGF2YXJpYWJsZU5vZGUiLCJtYXRjaGVzTWV0YXZhcmlhYmxlTm9kZSIsIm1hdGNoIiwidW5pZnlBZ2FpbnN0RXF1aXZhbGVuY2UiLCJlcXVpdmFsZW5jZSIsImxvY2FsQ29udGV4dCIsInVuaWZpZWRBZ2FpbnN0RXF1aXZhbGVuY2UiLCJtZXRhTGV2ZWxVbmlmaWVyIiwic2hpbSIsIm5vZGVBIiwibm9kZUIiLCJ1bmlmaWVkIiwidW5pZnkiLCJmcm9tSlNPTkFuZEZpbGVDb250ZXh0IiwianNvbiIsImZpbGVDb250ZXh0IiwibWV0YXZhcmlhYmxlIiwic3RhdGVtZW50IiwibWV0YXZhcmlhYmxlU3RyaW5nIiwic3RhdGVtZW50U3RyaW5nIiwibGV4ZXIiLCJnZXRMZXhlciIsInBhcnNlciIsImdldFBhcnNlciIsInN0YXRlbWVudE5vZGVGcm9tU3RhdGVtZW50U3RyaW5nIiwibWV0YXZhcmlhYmxlTm9kZUZyb21NZXRhdmFyaWFibGVTdHJpbmciLCJzdGF0ZW1lbnRGb3JNZXRhdmFyaWFibGVTdWJzdGl0dXRpb24iLCJmcm9tTWV0YXZhcmlhYmxlTm9kZUFuZFN0YXRlbWVudE5vZGUiLCJmcm9tTWV0YXZhcmlhYmxlTm9kZVN0YXRlbWVudE5vZGVBbmRTdWJzdGl0dXRpb25Ob2RlIiwic3Vic3RpdHV0aW9uTm9kZSIsInRlcm1Gb3JWYXJpYWJsZVN1YnN0aXR1dGlvbiIsIlRlcm1Gb3JWYXJpYWJsZVN1YnN0aXR1dGlvbiIsImZyb21TdWJzdGl0dXRpb25Ob2RlIiwiU3Vic3RpdHV0aW9uIiwic3RhdGVtZW50Tm9kZUFNYXRjaGVzU3RhdGVtZW50Tm9kZUIiLCJzdGF0ZW1lbnRWZXJpZmllZEFnYWluc3RTdGF0ZW1lbnQiLCJ1bmlmeVN0YXRlbWVudEFnYWluc3RTdGF0ZW1lbnQiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBYXFCQTs7OzJEQVhKO21FQUNRO3NFQUNlO2dGQUNHO3FCQUVqQjtxQkFD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