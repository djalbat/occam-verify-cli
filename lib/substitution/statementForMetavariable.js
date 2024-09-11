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
            key: "getNode",
            value: function getNode() {
                var node = this.statementNode; ///
                return node;
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
            key: "matchMetavariableNode",
            value: function matchMetavariableNode(metavariableNode) {
                var matchesMetavariableNode = this.metavariableNode.match(metavariableNode);
                return matchesMetavariableNode;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zdWJzdGl0dXRpb24vc3RhdGVtZW50Rm9yTWV0YXZhcmlhYmxlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgc2hpbSBmcm9tIFwiLi4vc2hpbVwiO1xuaW1wb3J0IFN1YnN0aXR1dGlvbiBmcm9tIFwiLi4vc3Vic3RpdHV0aW9uXCI7XG5pbXBvcnQgVGVybUZvclZhcmlhYmxlU3Vic3RpdHV0aW9uIGZyb20gXCIuL3Rlcm1Gb3JWYXJpYWJsZVwiO1xuaW1wb3J0IHVuaWZ5U3RhdGVtZW50QWdhaW5zdFN0YXRlbWVudCBmcm9tIFwiLi4vdW5pZnkvc3RhdGVtZW50QXRhaW5zdFN0YXRlbWVudFwiO1xuXG5pbXBvcnQgeyBub2RlUXVlcnkgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5pbXBvcnQgeyBicmFja2V0ZWRTdGF0ZW1lbnRDaGlsZE5vZGVGcm9tU3RhdGVtZW50Tm9kZSB9IGZyb20gXCIuLi91dGlsaXRpZXMvbWF0Y2hcIjtcbmltcG9ydCB7IHN0YXRlbWVudE5vZGVGcm9tU3RhdGVtZW50U3RyaW5nLCBtZXRhdmFyaWFibGVOb2RlRnJvbU1ldGF2YXJpYWJsZVN0cmluZyB9IGZyb20gXCIuLi91dGlsaXRpZXMvbm9kZVwiO1xuXG5jb25zdCBtZXRhdmFyaWFibGVOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvc3RhdGVtZW50L21ldGF2YXJpYWJsZSFcIik7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFN0YXRlbWVudEZvck1ldGF2YXJpYWJsZVN1YnN0aXR1dGlvbiBleHRlbmRzIFN1YnN0aXR1dGlvbiB7XG4gIGNvbnN0cnVjdG9yKG1ldGF2YXJpYWJsZU5vZGUsIHN0YXRlbWVudE5vZGUsIHN1YnN0aXR1dGlvbikge1xuICAgIHN1cGVyKCk7XG5cbiAgICB0aGlzLm1ldGF2YXJpYWJsZU5vZGUgPSBtZXRhdmFyaWFibGVOb2RlO1xuICAgIHRoaXMuc3RhdGVtZW50Tm9kZSA9IHN0YXRlbWVudE5vZGU7XG4gICAgdGhpcy5zdWJzdGl0dXRpb24gPSBzdWJzdGl0dXRpb247XG4gIH1cblxuICBnZXRNZXRhdmFyaWFibGVOb2RlKCkge1xuICAgIHJldHVybiB0aGlzLm1ldGF2YXJpYWJsZU5vZGU7XG4gIH1cblxuICBnZXRTdGF0ZW1lbnROb2RlKCkge1xuICAgIHJldHVybiB0aGlzLnN0YXRlbWVudE5vZGU7XG4gIH1cblxuICBnZXRTdWJzdGl0dXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuc3Vic3RpdHV0aW9uO1xuICB9XG5cbiAgZ2V0Tm9kZSgpIHtcbiAgICBjb25zdCBub2RlID0gdGhpcy5zdGF0ZW1lbnROb2RlOyAgLy8vXG5cbiAgICByZXR1cm4gbm9kZTtcbiAgfVxuXG4gIHVuaWZ5U3RhdGVtZW50KHN0YXRlbWVudE5vZGUsIHN1YnN0aXR1dGlvbnMsIGxvY2FsQ29udGV4dEEsIGxvY2FsQ29udGV4dEIpIHtcbiAgICBsZXQgc3RhdGVtZW50Tm9kZU1hdGNoZXM7XG5cbiAgICBjb25zdCBzdWJzdGl0dXRpb24gPSB0aGlzLnN1YnN0aXR1dGlvbiwgLy8vXG4gICAgICAgICAgc3RhdGVtZW50Tm9kZUEgPSBzdGF0ZW1lbnROb2RlLCAgLy8vXG4gICAgICAgICAgc3RhdGVtZW50Tm9kZUIgPSB0aGlzLnN0YXRlbWVudE5vZGU7IC8vL1xuXG4gICAgc3RhdGVtZW50Tm9kZU1hdGNoZXMgPSB1bmlmeVN0YXRlbWVudChzdGF0ZW1lbnROb2RlQSwgc3RhdGVtZW50Tm9kZUIsIHN1YnN0aXR1dGlvbiwgc3Vic3RpdHV0aW9ucywgbG9jYWxDb250ZXh0QSwgbG9jYWxDb250ZXh0Qik7XG5cbiAgICBpZiAoIXN0YXRlbWVudE5vZGVNYXRjaGVzKSB7XG4gICAgICBjb25zdCBicmFja2V0ZWRTdGF0ZW1lbnRDaGlsZE5vZGUgPSBicmFja2V0ZWRTdGF0ZW1lbnRDaGlsZE5vZGVGcm9tU3RhdGVtZW50Tm9kZShzdGF0ZW1lbnROb2RlKTtcblxuICAgICAgaWYgKGJyYWNrZXRlZFN0YXRlbWVudENoaWxkTm9kZSAhPT0gbnVsbCkge1xuICAgICAgICBjb25zdCBzdGF0ZW1lbnROb2RlQSA9IGJyYWNrZXRlZFN0YXRlbWVudENoaWxkTm9kZTsgLy8vXG5cbiAgICAgICAgc3RhdGVtZW50Tm9kZU1hdGNoZXMgPSB1bmlmeVN0YXRlbWVudChzdGF0ZW1lbnROb2RlQSwgc3RhdGVtZW50Tm9kZUIsIHN1YnN0aXR1dGlvbiwgc3Vic3RpdHV0aW9ucywgbG9jYWxDb250ZXh0QSwgbG9jYWxDb250ZXh0Qik7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHN0YXRlbWVudE5vZGVNYXRjaGVzO1xuICB9XG5cbiAgbWF0Y2hNZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUpIHtcbiAgICBjb25zdCBtYXRjaGVzTWV0YXZhcmlhYmxlTm9kZSA9IHRoaXMubWV0YXZhcmlhYmxlTm9kZS5tYXRjaChtZXRhdmFyaWFibGVOb2RlKTtcblxuICAgIHJldHVybiBtYXRjaGVzTWV0YXZhcmlhYmxlTm9kZTtcbiAgfVxuXG4gIHVuaWZ5QWdhaW5zdEVxdWl2YWxlbmNlKGVxdWl2YWxlbmNlLCBzdWJzdGl0dXRpb25zLCBsb2NhbENvbnRleHRBLCBsb2NhbENvbnRleHRCKSB7XG4gICAgbGV0IHVuaWZpZWRBZ2FpbnN0RXF1aXZhbGVuY2UgPSBmYWxzZTsgIC8vL1xuXG4gICAgY29uc3QgbWV0YXZhcmlhYmxlTm9kZSA9IG1ldGF2YXJpYWJsZU5vZGVRdWVyeSh0aGlzLnN0YXRlbWVudE5vZGUpO1xuXG4gICAgaWYgKG1ldGF2YXJpYWJsZU5vZGUgIT09IG51bGwpIHtcbiAgICAgIHN1YnN0aXR1dGlvbnMgPSBbIC8vL1xuICAgICAgICAuLi5zdWJzdGl0dXRpb25zXG4gICAgICBdO1xuXG4gICAgICBjb25zdCB7IG1ldGFMZXZlbFVuaWZpZXIgfSA9IHNoaW0sXG4gICAgICAgICAgICBub2RlQSA9IHRoaXMubWV0YXZhcmlhYmxlTm9kZSwgLy8vXG4gICAgICAgICAgICBub2RlQiA9IG1ldGF2YXJpYWJsZU5vZGUsIC8vL1xuICAgICAgICAgICAgdW5pZmllZCA9IG1ldGFMZXZlbFVuaWZpZXIudW5pZnkobm9kZUEsIG5vZGVCLCBzdWJzdGl0dXRpb25zLCBsb2NhbENvbnRleHRBLCBsb2NhbENvbnRleHRCKTtcblxuICAgICAgdW5pZmllZEFnYWluc3RFcXVpdmFsZW5jZSA9IHVuaWZpZWQ7IC8vL1xuICAgIH1cblxuICAgIHJldHVybiB1bmlmaWVkQWdhaW5zdEVxdWl2YWxlbmNlO1xuICB9XG5cbiAgYXNTdHJpbmcobG9jYWxDb250ZXh0QSwgbG9jYWxDb250ZXh0Qikge1xuICAgIGNvbnN0IHN0YXRlbWVudE5vZGVCID0gdGhpcy5zdGF0ZW1lbnROb2RlLCAgLy8vXG4gICAgICAgICAgc3RhdGVtZW50U3RyaW5nQiA9IGxvY2FsQ29udGV4dEIubm9kZUFzU3RyaW5nKHN0YXRlbWVudE5vZGVCKSxcbiAgICAgICAgICBtZXRhdmFyaWFibGVOb2RlQSA9IHRoaXMubWV0YXZhcmlhYmxlTm9kZSwgIC8vL1xuICAgICAgICAgIG1ldGF2YXJpYWJsZVN0cmluZ0EgPSBsb2NhbENvbnRleHRBLm5vZGVBc1N0cmluZyhtZXRhdmFyaWFibGVOb2RlQSksXG4gICAgICAgICAgc3RyaW5nID0gYFske3N0YXRlbWVudFN0cmluZ0J9IGZvciAke21ldGF2YXJpYWJsZVN0cmluZ0F9XWA7XG5cbiAgICByZXR1cm4gc3RyaW5nO1xuICB9XG5cbiAgc3RhdGljIGZyb21KU09OQW5kRmlsZUNvbnRleHQoanNvbiwgZmlsZUNvbnRleHQpIHtcbiAgICBjb25zdCB7IG1ldGF2YXJpYWJsZSwgc3RhdGVtZW50IH0gPSBqc29uLFxuICAgICAgICAgICAgbWV0YXZhcmlhYmxlU3RyaW5nID0gbWV0YXZhcmlhYmxlLCAgLy8vXG4gICAgICAgICAgICBzdGF0ZW1lbnRTdHJpbmcgPSBzdGF0ZW1lbnQsICAvLy9cbiAgICAgICAgICAgIGxleGVyID0gZmlsZUNvbnRleHQuZ2V0TGV4ZXIoKSxcbiAgICAgICAgICAgIHBhcnNlciA9IGZpbGVDb250ZXh0LmdldFBhcnNlcigpLFxuICAgICAgICAgICAgc3RhdGVtZW50Tm9kZSA9IHN0YXRlbWVudE5vZGVGcm9tU3RhdGVtZW50U3RyaW5nKHN0YXRlbWVudFN0cmluZywgbGV4ZXIsIHBhcnNlciksXG4gICAgICAgICAgICBtZXRhdmFyaWFibGVOb2RlID0gbWV0YXZhcmlhYmxlTm9kZUZyb21NZXRhdmFyaWFibGVTdHJpbmcobWV0YXZhcmlhYmxlU3RyaW5nLCBsZXhlciwgcGFyc2VyKSxcbiAgICAgICAgICAgIHN0YXRlbWVudEZvck1ldGF2YXJpYWJsZVN1YnN0aXR1dGlvbiA9IG5ldyBTdGF0ZW1lbnRGb3JNZXRhdmFyaWFibGVTdWJzdGl0dXRpb24oc3RhdGVtZW50Tm9kZSwgbWV0YXZhcmlhYmxlTm9kZSk7XG5cbiAgICByZXR1cm4gc3RhdGVtZW50Rm9yTWV0YXZhcmlhYmxlU3Vic3RpdHV0aW9uO1xuICB9XG5cbiAgc3RhdGljIGZyb21NZXRhdmFyaWFibGVOb2RlQW5kU3RhdGVtZW50Tm9kZShtZXRhdmFyaWFibGVOb2RlLCBzdGF0ZW1lbnROb2RlKSB7XG4gICAgbGV0IHN0YXRlbWVudEZvck1ldGF2YXJpYWJsZVN1YnN0aXR1dGlvbjtcblxuICAgIGNvbnN0IHN1YnN0aXR1dGlvbiA9IG51bGw7XG5cbiAgICBzdGF0ZW1lbnRGb3JNZXRhdmFyaWFibGVTdWJzdGl0dXRpb24gPSBuZXcgU3RhdGVtZW50Rm9yTWV0YXZhcmlhYmxlU3Vic3RpdHV0aW9uKG1ldGF2YXJpYWJsZU5vZGUsIHN0YXRlbWVudE5vZGUsIHN1YnN0aXR1dGlvbik7XG5cbiAgICBjb25zdCBicmFja2V0ZWRTdGF0ZW1lbnRDaGlsZE5vZGUgPSBicmFja2V0ZWRTdGF0ZW1lbnRDaGlsZE5vZGVGcm9tU3RhdGVtZW50Tm9kZShzdGF0ZW1lbnROb2RlKTtcblxuICAgIGlmIChicmFja2V0ZWRTdGF0ZW1lbnRDaGlsZE5vZGUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHN0YXRlbWVudE5vZGUgPSBicmFja2V0ZWRTdGF0ZW1lbnRDaGlsZE5vZGU7IC8vL1xuXG4gICAgICBzdGF0ZW1lbnRGb3JNZXRhdmFyaWFibGVTdWJzdGl0dXRpb24gPSBuZXcgU3RhdGVtZW50Rm9yTWV0YXZhcmlhYmxlU3Vic3RpdHV0aW9uKG1ldGF2YXJpYWJsZU5vZGUsIHN0YXRlbWVudE5vZGUsIHN1YnN0aXR1dGlvbik7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN0YXRlbWVudEZvck1ldGF2YXJpYWJsZVN1YnN0aXR1dGlvbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTWV0YXZhcmlhYmxlTm9kZVN0YXRlbWVudE5vZGVBbmRTdWJzdGl0dXRpb25Ob2RlKG1ldGF2YXJpYWJsZU5vZGUsIHN0YXRlbWVudE5vZGUsIHN1YnN0aXR1dGlvbk5vZGUpIHtcbiAgICBsZXQgc3RhdGVtZW50Rm9yTWV0YXZhcmlhYmxlU3Vic3RpdHV0aW9uO1xuXG4gICAgbGV0IHN1YnN0aXR1dGlvbiA9IG51bGw7XG5cbiAgICBpZiAoc3Vic3RpdHV0aW9uTm9kZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgdGVybUZvclZhcmlhYmxlU3Vic3RpdHV0aW9uID0gVGVybUZvclZhcmlhYmxlU3Vic3RpdHV0aW9uLmZyb21TdWJzdGl0dXRpb25Ob2RlKHN1YnN0aXR1dGlvbk5vZGUpO1xuXG4gICAgICBzdWJzdGl0dXRpb24gPSB0ZXJtRm9yVmFyaWFibGVTdWJzdGl0dXRpb247IC8vL1xuICAgIH1cblxuICAgIHN0YXRlbWVudEZvck1ldGF2YXJpYWJsZVN1YnN0aXR1dGlvbiA9IG5ldyBTdGF0ZW1lbnRGb3JNZXRhdmFyaWFibGVTdWJzdGl0dXRpb24obWV0YXZhcmlhYmxlTm9kZSwgc3RhdGVtZW50Tm9kZSwgc3Vic3RpdHV0aW9uKTtcblxuICAgIGNvbnN0IGJyYWNrZXRlZFN0YXRlbWVudENoaWxkTm9kZSA9IGJyYWNrZXRlZFN0YXRlbWVudENoaWxkTm9kZUZyb21TdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUpO1xuXG4gICAgaWYgKGJyYWNrZXRlZFN0YXRlbWVudENoaWxkTm9kZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3Qgc3RhdGVtZW50Tm9kZSA9IGJyYWNrZXRlZFN0YXRlbWVudENoaWxkTm9kZTsgLy8vXG5cbiAgICAgIHN0YXRlbWVudEZvck1ldGF2YXJpYWJsZVN1YnN0aXR1dGlvbiA9IG5ldyBTdGF0ZW1lbnRGb3JNZXRhdmFyaWFibGVTdWJzdGl0dXRpb24obWV0YXZhcmlhYmxlTm9kZSwgc3RhdGVtZW50Tm9kZSwgc3Vic3RpdHV0aW9uKTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3RhdGVtZW50Rm9yTWV0YXZhcmlhYmxlU3Vic3RpdHV0aW9uO1xuICB9XG59XG5cbmZ1bmN0aW9uIHVuaWZ5U3RhdGVtZW50KHN0YXRlbWVudE5vZGVBLCBzdGF0ZW1lbnROb2RlQiwgc3Vic3RpdHV0aW9uLCBzdWJzdGl0dXRpb25zLCBsb2NhbENvbnRleHRBLCBsb2NhbENvbnRleHRCKSB7XG4gIGxldCBzdGF0ZW1lbnRVbmlmaWVkO1xuXG4gIGlmIChzdWJzdGl0dXRpb24gPT09IG51bGwpIHtcbiAgICBjb25zdCBzdGF0ZW1lbnROb2RlQU1hdGNoZXNTdGF0ZW1lbnROb2RlQiA9IHN0YXRlbWVudE5vZGVCLm1hdGNoKHN0YXRlbWVudE5vZGVBKTtcblxuICAgIHN0YXRlbWVudFVuaWZpZWQgPSBzdGF0ZW1lbnROb2RlQU1hdGNoZXNTdGF0ZW1lbnROb2RlQjsgLy8vXG4gIH0gZWxzZSB7XG4gICAgY29uc3Qgc3RhdGVtZW50VW5pZmllZEFnYWluc3RTdGF0ZW1lbnQgPSB1bmlmeVN0YXRlbWVudEFnYWluc3RTdGF0ZW1lbnQoc3RhdGVtZW50Tm9kZUEsIHN0YXRlbWVudE5vZGVCLCBzdWJzdGl0dXRpb24sIHN1YnN0aXR1dGlvbnMsIGxvY2FsQ29udGV4dEEsIGxvY2FsQ29udGV4dEIpO1xuXG4gICAgc3RhdGVtZW50VW5pZmllZCA9IHN0YXRlbWVudFVuaWZpZWRBZ2FpbnN0U3RhdGVtZW50OyAvLy9cbiAgfVxuXG4gIHJldHVybiBzdGF0ZW1lbnRVbmlmaWVkO1xufSJdLCJuYW1lcyI6WyJTdGF0ZW1lbnRGb3JNZXRhdmFyaWFibGVTdWJzdGl0dXRpb24iLCJtZXRhdmFyaWFibGVOb2RlUXVlcnkiLCJub2RlUXVlcnkiLCJtZXRhdmFyaWFibGVOb2RlIiwic3RhdGVtZW50Tm9kZSIsInN1YnN0aXR1dGlvbiIsImdldE1ldGF2YXJpYWJsZU5vZGUiLCJnZXRTdGF0ZW1lbnROb2RlIiwiZ2V0U3Vic3RpdHV0aW9uIiwiZ2V0Tm9kZSIsIm5vZGUiLCJ1bmlmeVN0YXRlbWVudCIsInN1YnN0aXR1dGlvbnMiLCJsb2NhbENvbnRleHRBIiwibG9jYWxDb250ZXh0QiIsInN0YXRlbWVudE5vZGVNYXRjaGVzIiwic3RhdGVtZW50Tm9kZUEiLCJzdGF0ZW1lbnROb2RlQiIsImJyYWNrZXRlZFN0YXRlbWVudENoaWxkTm9kZSIsImJyYWNrZXRlZFN0YXRlbWVudENoaWxkTm9kZUZyb21TdGF0ZW1lbnROb2RlIiwibWF0Y2hNZXRhdmFyaWFibGVOb2RlIiwibWF0Y2hlc01ldGF2YXJpYWJsZU5vZGUiLCJtYXRjaCIsInVuaWZ5QWdhaW5zdEVxdWl2YWxlbmNlIiwiZXF1aXZhbGVuY2UiLCJ1bmlmaWVkQWdhaW5zdEVxdWl2YWxlbmNlIiwibWV0YUxldmVsVW5pZmllciIsInNoaW0iLCJub2RlQSIsIm5vZGVCIiwidW5pZmllZCIsInVuaWZ5IiwiYXNTdHJpbmciLCJzdGF0ZW1lbnRTdHJpbmdCIiwibm9kZUFzU3RyaW5nIiwibWV0YXZhcmlhYmxlTm9kZUEiLCJtZXRhdmFyaWFibGVTdHJpbmdBIiwic3RyaW5nIiwiZnJvbUpTT05BbmRGaWxlQ29udGV4dCIsImpzb24iLCJmaWxlQ29udGV4dCIsIm1ldGF2YXJpYWJsZSIsInN0YXRlbWVudCIsIm1ldGF2YXJpYWJsZVN0cmluZyIsInN0YXRlbWVudFN0cmluZyIsImxleGVyIiwiZ2V0TGV4ZXIiLCJwYXJzZXIiLCJnZXRQYXJzZXIiLCJzdGF0ZW1lbnROb2RlRnJvbVN0YXRlbWVudFN0cmluZyIsIm1ldGF2YXJpYWJsZU5vZGVGcm9tTWV0YXZhcmlhYmxlU3RyaW5nIiwic3RhdGVtZW50Rm9yTWV0YXZhcmlhYmxlU3Vic3RpdHV0aW9uIiwiZnJvbU1ldGF2YXJpYWJsZU5vZGVBbmRTdGF0ZW1lbnROb2RlIiwiZnJvbU1ldGF2YXJpYWJsZU5vZGVTdGF0ZW1lbnROb2RlQW5kU3Vic3RpdHV0aW9uTm9kZSIsInN1YnN0aXR1dGlvbk5vZGUiLCJ0ZXJtRm9yVmFyaWFibGVTdWJzdGl0dXRpb24iLCJUZXJtRm9yVmFyaWFibGVTdWJzdGl0dXRpb24iLCJmcm9tU3Vic3RpdHV0aW9uTm9kZSIsIlN1YnN0aXR1dGlvbiIsInN0YXRlbWVudFVuaWZpZWQiLCJzdGF0ZW1lbnROb2RlQU1hdGNoZXNTdGF0ZW1lbnROb2RlQiIsInN0YXRlbWVudFVuaWZpZWRBZ2FpbnN0U3RhdGVtZW50IiwidW5pZnlTdGF0ZW1lbnRBZ2FpbnN0U3RhdGVtZW50Il0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQWFxQkE7OzsyREFYSjttRUFDUTtzRUFDZTtnRkFDRztxQkFFakI7cUJBQ21DO29CQUM0Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFekYsSUFBTUMsd0JBQXdCQyxJQUFBQSxnQkFBUyxFQUFDO0FBRXpCLElBQUEsQUFBTUYscURBQU47Y0FBTUE7YUFBQUEscUNBQ1BHLGdCQUFnQixFQUFFQyxhQUFhLEVBQUVDLFlBQVk7Z0NBRHRDTDs7Z0JBRWpCLGtCQUZpQkE7UUFJakIsTUFBS0csZ0JBQWdCLEdBQUdBO1FBQ3hCLE1BQUtDLGFBQWEsR0FBR0E7UUFDckIsTUFBS0MsWUFBWSxHQUFHQTs7O2tCQU5ITDs7WUFTbkJNLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0gsZ0JBQWdCO1lBQzlCOzs7WUFFQUksS0FBQUE7bUJBQUFB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