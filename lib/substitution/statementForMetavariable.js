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
var _node = require("../utilities/node");
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zdWJzdGl0dXRpb24vc3RhdGVtZW50Rm9yTWV0YXZhcmlhYmxlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgc2hpbSBmcm9tIFwiLi4vc2hpbVwiO1xuaW1wb3J0IFN1YnN0aXR1dGlvbiBmcm9tIFwiLi4vc3Vic3RpdHV0aW9uXCI7XG5pbXBvcnQgVGVybUZvclZhcmlhYmxlU3Vic3RpdHV0aW9uIGZyb20gXCIuL3Rlcm1Gb3JWYXJpYWJsZVwiO1xuaW1wb3J0IHVuaWZ5U3RhdGVtZW50QWdhaW5zdFN0YXRlbWVudCBmcm9tIFwiLi4vdW5pZnkvc3RhdGVtZW50QXRhaW5zdFN0YXRlbWVudFwiO1xuXG5pbXBvcnQgeyBub2RlUXVlcnkgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5pbXBvcnQgeyBzdGF0ZW1lbnROb2RlRnJvbVN0YXRlbWVudFN0cmluZywgbWV0YXZhcmlhYmxlTm9kZUZyb21NZXRhdmFyaWFibGVTdHJpbmcgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL25vZGVcIjtcbmltcG9ydCB7IG1hdGNoU3RhdGVtZW50TW9kdWxvQnJhY2tldHMsIGJyYWNrZXRlZFN0YXRlbWVudENoaWxkTm9kZUZyb21TdGF0ZW1lbnROb2RlIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9tYXRjaFwiO1xuXG5jb25zdCBtZXRhdmFyaWFibGVOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvc3RhdGVtZW50L21ldGF2YXJpYWJsZSFcIik7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFN0YXRlbWVudEZvck1ldGF2YXJpYWJsZVN1YnN0aXR1dGlvbiBleHRlbmRzIFN1YnN0aXR1dGlvbiB7XG4gIGNvbnN0cnVjdG9yKG1ldGF2YXJpYWJsZU5vZGUsIHN0YXRlbWVudE5vZGUsIHN1YnN0aXR1dGlvbikge1xuICAgIHN1cGVyKCk7XG5cbiAgICB0aGlzLm1ldGF2YXJpYWJsZU5vZGUgPSBtZXRhdmFyaWFibGVOb2RlO1xuICAgIHRoaXMuc3RhdGVtZW50Tm9kZSA9IHN0YXRlbWVudE5vZGU7XG4gICAgdGhpcy5zdWJzdGl0dXRpb24gPSBzdWJzdGl0dXRpb247XG4gIH1cblxuICBnZXRNZXRhdmFyaWFibGVOb2RlKCkge1xuICAgIHJldHVybiB0aGlzLm1ldGF2YXJpYWJsZU5vZGU7XG4gIH1cblxuICBnZXRTdGF0ZW1lbnROb2RlKCkge1xuICAgIHJldHVybiB0aGlzLnN0YXRlbWVudE5vZGU7XG4gIH1cblxuICBnZXRTdWJzdGl0dXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuc3Vic3RpdHV0aW9uO1xuICB9XG5cbiAgZ2V0Tm9kZSgpIHtcbiAgICBjb25zdCBub2RlID0gdGhpcy5zdGF0ZW1lbnROb2RlOyAgLy8vXG5cbiAgICByZXR1cm4gbm9kZTtcbiAgfVxuXG4gIG1hdGNoU3RhdGVtZW50Tm9kZShzdGF0ZW1lbnROb2RlKSB7XG4gICAgY29uc3Qgc3RhdGVtZW50Tm9kZUEgPSBzdGF0ZW1lbnROb2RlLCAvLy9cbiAgICAgICAgICBzdGF0ZW1lbnROb2RlQiA9IHRoaXMuc3RhdGVtZW50Tm9kZSwgIC8vL1xuICAgICAgICAgIHN0YXRlbWVudE5vZGVzTWF0Y2ggPSBtYXRjaFN0YXRlbWVudE1vZHVsb0JyYWNrZXRzKHN0YXRlbWVudE5vZGVBLCBzdGF0ZW1lbnROb2RlQiksXG4gICAgICAgICAgc3RhdGVtZW50Tm9kZU1hdGNoZXMgPSBzdGF0ZW1lbnROb2Rlc01hdGNoOyAvLy9cblxuICAgIHJldHVybiBzdGF0ZW1lbnROb2RlTWF0Y2hlcztcbiAgfVxuXG4gIG1hdGNoTWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlKSB7XG4gICAgY29uc3QgbWV0YXZhcmlhYmxlTm9kZU1hdGNoZXMgPSB0aGlzLm1ldGF2YXJpYWJsZU5vZGUubWF0Y2gobWV0YXZhcmlhYmxlTm9kZSk7XG5cbiAgICByZXR1cm4gbWV0YXZhcmlhYmxlTm9kZU1hdGNoZXM7XG4gIH1cblxuICB1bmlmeVN0YXRlbWVudChzdGF0ZW1lbnROb2RlLCBzdWJzdGl0dXRpb25zLCBsb2NhbENvbnRleHRBLCBsb2NhbENvbnRleHRCKSB7XG4gICAgbGV0IHN0YXRlbWVudE5vZGVNYXRjaGVzO1xuXG4gICAgY29uc3Qgc3Vic3RpdHV0aW9uID0gdGhpcy5zdWJzdGl0dXRpb24sIC8vL1xuICAgICAgICAgIHN0YXRlbWVudE5vZGVBID0gc3RhdGVtZW50Tm9kZSwgIC8vL1xuICAgICAgICAgIHN0YXRlbWVudE5vZGVCID0gdGhpcy5zdGF0ZW1lbnROb2RlOyAvLy9cblxuICAgIHN0YXRlbWVudE5vZGVNYXRjaGVzID0gdW5pZnlTdGF0ZW1lbnQoc3RhdGVtZW50Tm9kZUEsIHN0YXRlbWVudE5vZGVCLCBzdWJzdGl0dXRpb24sIHN1YnN0aXR1dGlvbnMsIGxvY2FsQ29udGV4dEEsIGxvY2FsQ29udGV4dEIpO1xuXG4gICAgaWYgKCFzdGF0ZW1lbnROb2RlTWF0Y2hlcykge1xuICAgICAgY29uc3QgYnJhY2tldGVkU3RhdGVtZW50Q2hpbGROb2RlID0gYnJhY2tldGVkU3RhdGVtZW50Q2hpbGROb2RlRnJvbVN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSk7XG5cbiAgICAgIGlmIChicmFja2V0ZWRTdGF0ZW1lbnRDaGlsZE5vZGUgIT09IG51bGwpIHtcbiAgICAgICAgY29uc3Qgc3RhdGVtZW50Tm9kZUEgPSBicmFja2V0ZWRTdGF0ZW1lbnRDaGlsZE5vZGU7IC8vL1xuXG4gICAgICAgIHN0YXRlbWVudE5vZGVNYXRjaGVzID0gdW5pZnlTdGF0ZW1lbnQoc3RhdGVtZW50Tm9kZUEsIHN0YXRlbWVudE5vZGVCLCBzdWJzdGl0dXRpb24sIHN1YnN0aXR1dGlvbnMsIGxvY2FsQ29udGV4dEEsIGxvY2FsQ29udGV4dEIpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBzdGF0ZW1lbnROb2RlTWF0Y2hlcztcbiAgfVxuXG4gIHVuaWZ5QWdhaW5zdEVxdWl2YWxlbmNlKGVxdWl2YWxlbmNlLCBzdWJzdGl0dXRpb25zLCBsb2NhbENvbnRleHRBLCBsb2NhbENvbnRleHRCKSB7XG4gICAgbGV0IHVuaWZpZWRBZ2FpbnN0RXF1aXZhbGVuY2UgPSBmYWxzZTsgIC8vL1xuXG4gICAgY29uc3QgbWV0YXZhcmlhYmxlTm9kZSA9IG1ldGF2YXJpYWJsZU5vZGVRdWVyeSh0aGlzLnN0YXRlbWVudE5vZGUpO1xuXG4gICAgaWYgKG1ldGF2YXJpYWJsZU5vZGUgIT09IG51bGwpIHtcbiAgICAgIHN1YnN0aXR1dGlvbnMgPSBbIC8vL1xuICAgICAgICAuLi5zdWJzdGl0dXRpb25zXG4gICAgICBdO1xuXG4gICAgICBjb25zdCB7IG1ldGFMZXZlbFVuaWZpZXIgfSA9IHNoaW0sXG4gICAgICAgICAgICBub2RlQSA9IHRoaXMubWV0YXZhcmlhYmxlTm9kZSwgLy8vXG4gICAgICAgICAgICBub2RlQiA9IG1ldGF2YXJpYWJsZU5vZGUsIC8vL1xuICAgICAgICAgICAgdW5pZmllZCA9IG1ldGFMZXZlbFVuaWZpZXIudW5pZnkobm9kZUEsIG5vZGVCLCBzdWJzdGl0dXRpb25zLCBsb2NhbENvbnRleHRBLCBsb2NhbENvbnRleHRCKTtcblxuICAgICAgdW5pZmllZEFnYWluc3RFcXVpdmFsZW5jZSA9IHVuaWZpZWQ7IC8vL1xuICAgIH1cblxuICAgIHJldHVybiB1bmlmaWVkQWdhaW5zdEVxdWl2YWxlbmNlO1xuICB9XG5cbiAgYXNTdHJpbmcobG9jYWxDb250ZXh0QSwgbG9jYWxDb250ZXh0Qikge1xuICAgIGNvbnN0IHN0YXRlbWVudE5vZGVCID0gdGhpcy5zdGF0ZW1lbnROb2RlLCAgLy8vXG4gICAgICAgICAgc3RhdGVtZW50U3RyaW5nQiA9IGxvY2FsQ29udGV4dEIubm9kZUFzU3RyaW5nKHN0YXRlbWVudE5vZGVCKSxcbiAgICAgICAgICBtZXRhdmFyaWFibGVOb2RlQSA9IHRoaXMubWV0YXZhcmlhYmxlTm9kZSwgIC8vL1xuICAgICAgICAgIG1ldGF2YXJpYWJsZVN0cmluZ0EgPSBsb2NhbENvbnRleHRBLm5vZGVBc1N0cmluZyhtZXRhdmFyaWFibGVOb2RlQSksXG4gICAgICAgICAgc3RyaW5nID0gYFske3N0YXRlbWVudFN0cmluZ0J9IGZvciAke21ldGF2YXJpYWJsZVN0cmluZ0F9XWA7XG5cbiAgICByZXR1cm4gc3RyaW5nO1xuICB9XG5cbiAgc3RhdGljIGZyb21KU09OQW5kRmlsZUNvbnRleHQoanNvbiwgZmlsZUNvbnRleHQpIHtcbiAgICBjb25zdCB7IG1ldGF2YXJpYWJsZSwgc3RhdGVtZW50IH0gPSBqc29uLFxuICAgICAgICAgICAgbWV0YXZhcmlhYmxlU3RyaW5nID0gbWV0YXZhcmlhYmxlLCAgLy8vXG4gICAgICAgICAgICBzdGF0ZW1lbnRTdHJpbmcgPSBzdGF0ZW1lbnQsICAvLy9cbiAgICAgICAgICAgIGxleGVyID0gZmlsZUNvbnRleHQuZ2V0TGV4ZXIoKSxcbiAgICAgICAgICAgIHBhcnNlciA9IGZpbGVDb250ZXh0LmdldFBhcnNlcigpLFxuICAgICAgICAgICAgc3RhdGVtZW50Tm9kZSA9IHN0YXRlbWVudE5vZGVGcm9tU3RhdGVtZW50U3RyaW5nKHN0YXRlbWVudFN0cmluZywgbGV4ZXIsIHBhcnNlciksXG4gICAgICAgICAgICBtZXRhdmFyaWFibGVOb2RlID0gbWV0YXZhcmlhYmxlTm9kZUZyb21NZXRhdmFyaWFibGVTdHJpbmcobWV0YXZhcmlhYmxlU3RyaW5nLCBsZXhlciwgcGFyc2VyKSxcbiAgICAgICAgICAgIHN0YXRlbWVudEZvck1ldGF2YXJpYWJsZVN1YnN0aXR1dGlvbiA9IG5ldyBTdGF0ZW1lbnRGb3JNZXRhdmFyaWFibGVTdWJzdGl0dXRpb24oc3RhdGVtZW50Tm9kZSwgbWV0YXZhcmlhYmxlTm9kZSk7XG5cbiAgICByZXR1cm4gc3RhdGVtZW50Rm9yTWV0YXZhcmlhYmxlU3Vic3RpdHV0aW9uO1xuICB9XG5cbiAgc3RhdGljIGZyb21NZXRhdmFyaWFibGVOb2RlQW5kU3RhdGVtZW50Tm9kZShtZXRhdmFyaWFibGVOb2RlLCBzdGF0ZW1lbnROb2RlKSB7XG4gICAgbGV0IHN0YXRlbWVudEZvck1ldGF2YXJpYWJsZVN1YnN0aXR1dGlvbjtcblxuICAgIGNvbnN0IHN1YnN0aXR1dGlvbiA9IG51bGw7XG5cbiAgICBzdGF0ZW1lbnRGb3JNZXRhdmFyaWFibGVTdWJzdGl0dXRpb24gPSBuZXcgU3RhdGVtZW50Rm9yTWV0YXZhcmlhYmxlU3Vic3RpdHV0aW9uKG1ldGF2YXJpYWJsZU5vZGUsIHN0YXRlbWVudE5vZGUsIHN1YnN0aXR1dGlvbik7XG5cbiAgICBjb25zdCBicmFja2V0ZWRTdGF0ZW1lbnRDaGlsZE5vZGUgPSBicmFja2V0ZWRTdGF0ZW1lbnRDaGlsZE5vZGVGcm9tU3RhdGVtZW50Tm9kZShzdGF0ZW1lbnROb2RlKTtcblxuICAgIGlmIChicmFja2V0ZWRTdGF0ZW1lbnRDaGlsZE5vZGUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHN0YXRlbWVudE5vZGUgPSBicmFja2V0ZWRTdGF0ZW1lbnRDaGlsZE5vZGU7IC8vL1xuXG4gICAgICBzdGF0ZW1lbnRGb3JNZXRhdmFyaWFibGVTdWJzdGl0dXRpb24gPSBuZXcgU3RhdGVtZW50Rm9yTWV0YXZhcmlhYmxlU3Vic3RpdHV0aW9uKG1ldGF2YXJpYWJsZU5vZGUsIHN0YXRlbWVudE5vZGUsIHN1YnN0aXR1dGlvbik7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN0YXRlbWVudEZvck1ldGF2YXJpYWJsZVN1YnN0aXR1dGlvbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTWV0YXZhcmlhYmxlTm9kZVN0YXRlbWVudE5vZGVBbmRTdWJzdGl0dXRpb25Ob2RlKG1ldGF2YXJpYWJsZU5vZGUsIHN0YXRlbWVudE5vZGUsIHN1YnN0aXR1dGlvbk5vZGUpIHtcbiAgICBsZXQgc3RhdGVtZW50Rm9yTWV0YXZhcmlhYmxlU3Vic3RpdHV0aW9uO1xuXG4gICAgbGV0IHN1YnN0aXR1dGlvbiA9IG51bGw7XG5cbiAgICBpZiAoc3Vic3RpdHV0aW9uTm9kZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgdGVybUZvclZhcmlhYmxlU3Vic3RpdHV0aW9uID0gVGVybUZvclZhcmlhYmxlU3Vic3RpdHV0aW9uLmZyb21TdWJzdGl0dXRpb25Ob2RlKHN1YnN0aXR1dGlvbk5vZGUpO1xuXG4gICAgICBzdWJzdGl0dXRpb24gPSB0ZXJtRm9yVmFyaWFibGVTdWJzdGl0dXRpb247IC8vL1xuICAgIH1cblxuICAgIHN0YXRlbWVudEZvck1ldGF2YXJpYWJsZVN1YnN0aXR1dGlvbiA9IG5ldyBTdGF0ZW1lbnRGb3JNZXRhdmFyaWFibGVTdWJzdGl0dXRpb24obWV0YXZhcmlhYmxlTm9kZSwgc3RhdGVtZW50Tm9kZSwgc3Vic3RpdHV0aW9uKTtcblxuICAgIGNvbnN0IGJyYWNrZXRlZFN0YXRlbWVudENoaWxkTm9kZSA9IGJyYWNrZXRlZFN0YXRlbWVudENoaWxkTm9kZUZyb21TdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUpO1xuXG4gICAgaWYgKGJyYWNrZXRlZFN0YXRlbWVudENoaWxkTm9kZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3Qgc3RhdGVtZW50Tm9kZSA9IGJyYWNrZXRlZFN0YXRlbWVudENoaWxkTm9kZTsgLy8vXG5cbiAgICAgIHN0YXRlbWVudEZvck1ldGF2YXJpYWJsZVN1YnN0aXR1dGlvbiA9IG5ldyBTdGF0ZW1lbnRGb3JNZXRhdmFyaWFibGVTdWJzdGl0dXRpb24obWV0YXZhcmlhYmxlTm9kZSwgc3RhdGVtZW50Tm9kZSwgc3Vic3RpdHV0aW9uKTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3RhdGVtZW50Rm9yTWV0YXZhcmlhYmxlU3Vic3RpdHV0aW9uO1xuICB9XG59XG5cbmZ1bmN0aW9uIHVuaWZ5U3RhdGVtZW50KHN0YXRlbWVudE5vZGVBLCBzdGF0ZW1lbnROb2RlQiwgc3Vic3RpdHV0aW9uLCBzdWJzdGl0dXRpb25zLCBsb2NhbENvbnRleHRBLCBsb2NhbENvbnRleHRCKSB7XG4gIGxldCBzdGF0ZW1lbnRVbmlmaWVkO1xuXG4gIGlmIChzdWJzdGl0dXRpb24gPT09IG51bGwpIHtcbiAgICBjb25zdCBzdGF0ZW1lbnROb2RlQU1hdGNoZXNTdGF0ZW1lbnROb2RlQiA9IHN0YXRlbWVudE5vZGVCLm1hdGNoKHN0YXRlbWVudE5vZGVBKTtcblxuICAgIHN0YXRlbWVudFVuaWZpZWQgPSBzdGF0ZW1lbnROb2RlQU1hdGNoZXNTdGF0ZW1lbnROb2RlQjsgLy8vXG4gIH0gZWxzZSB7XG4gICAgY29uc3Qgc3RhdGVtZW50VW5pZmllZEFnYWluc3RTdGF0ZW1lbnQgPSB1bmlmeVN0YXRlbWVudEFnYWluc3RTdGF0ZW1lbnQoc3RhdGVtZW50Tm9kZUEsIHN0YXRlbWVudE5vZGVCLCBzdWJzdGl0dXRpb24sIHN1YnN0aXR1dGlvbnMsIGxvY2FsQ29udGV4dEEsIGxvY2FsQ29udGV4dEIpO1xuXG4gICAgc3RhdGVtZW50VW5pZmllZCA9IHN0YXRlbWVudFVuaWZpZWRBZ2FpbnN0U3RhdGVtZW50OyAvLy9cbiAgfVxuXG4gIHJldHVybiBzdGF0ZW1lbnRVbmlmaWVkO1xufSJdLCJuYW1lcyI6WyJTdGF0ZW1lbnRGb3JNZXRhdmFyaWFibGVTdWJzdGl0dXRpb24iLCJtZXRhdmFyaWFibGVOb2RlUXVlcnkiLCJub2RlUXVlcnkiLCJtZXRhdmFyaWFibGVOb2RlIiwic3RhdGVtZW50Tm9kZSIsInN1YnN0aXR1dGlvbiIsImdldE1ldGF2YXJpYWJsZU5vZGUiLCJnZXRTdGF0ZW1lbnROb2RlIiwiZ2V0U3Vic3RpdHV0aW9uIiwiZ2V0Tm9kZSIsIm5vZGUiLCJtYXRjaFN0YXRlbWVudE5vZGUiLCJzdGF0ZW1lbnROb2RlQSIsInN0YXRlbWVudE5vZGVCIiwic3RhdGVtZW50Tm9kZXNNYXRjaCIsIm1hdGNoU3RhdGVtZW50TW9kdWxvQnJhY2tldHMiLCJzdGF0ZW1lbnROb2RlTWF0Y2hlcyIsIm1hdGNoTWV0YXZhcmlhYmxlTm9kZSIsIm1ldGF2YXJpYWJsZU5vZGVNYXRjaGVzIiwibWF0Y2giLCJ1bmlmeVN0YXRlbWVudCIsInN1YnN0aXR1dGlvbnMiLCJsb2NhbENvbnRleHRBIiwibG9jYWxDb250ZXh0QiIsImJyYWNrZXRlZFN0YXRlbWVudENoaWxkTm9kZSIsImJyYWNrZXRlZFN0YXRlbWVudENoaWxkTm9kZUZyb21TdGF0ZW1lbnROb2RlIiwidW5pZnlBZ2FpbnN0RXF1aXZhbGVuY2UiLCJlcXVpdmFsZW5jZSIsInVuaWZpZWRBZ2FpbnN0RXF1aXZhbGVuY2UiLCJtZXRhTGV2ZWxVbmlmaWVyIiwic2hpbSIsIm5vZGVBIiwibm9kZUIiLCJ1bmlmaWVkIiwidW5pZnkiLCJhc1N0cmluZyIsInN0YXRlbWVudFN0cmluZ0IiLCJub2RlQXNTdHJpbmciLCJtZXRhdmFyaWFibGVOb2RlQSIsIm1ldGF2YXJpYWJsZVN0cmluZ0EiLCJzdHJpbmciLCJmcm9tSlNPTkFuZEZpbGVDb250ZXh0IiwianNvbiIsImZpbGVDb250ZXh0IiwibWV0YXZhcmlhYmxlIiwic3RhdGVtZW50IiwibWV0YXZhcmlhYmxlU3RyaW5nIiwic3RhdGVtZW50U3RyaW5nIiwibGV4ZXIiLCJnZXRMZXhlciIsInBhcnNlciIsImdldFBhcnNlciIsInN0YXRlbWVudE5vZGVGcm9tU3RhdGVtZW50U3RyaW5nIiwibWV0YXZhcmlhYmxlTm9kZUZyb21NZXRhdmFyaWFibGVTdHJpbmciLCJzdGF0ZW1lbnRGb3JNZXRhdmFyaWFibGVTdWJzdGl0dXRpb24iLCJmcm9tTWV0YXZhcmlhYmxlTm9kZUFuZFN0YXRlbWVudE5vZGUiLCJmcm9tTWV0YXZhcmlhYmxlTm9kZVN0YXRlbWVudE5vZGVBbmRTdWJzdGl0dXRpb25Ob2RlIiwic3Vic3RpdHV0aW9uTm9kZSIsInRlcm1Gb3JWYXJpYWJsZVN1YnN0aXR1dGlvbiIsIlRlcm1Gb3JWYXJpYWJsZVN1YnN0aXR1dGlvbiIsImZyb21TdWJzdGl0dXRpb25Ob2RlIiwiU3Vic3RpdHV0aW9uIiwic3RhdGVtZW50VW5pZmllZCIsInN0YXRlbWVudE5vZGVBTWF0Y2hlc1N0YXRlbWVudE5vZGVCIiwic3RhdGVtZW50VW5pZmllZEFnYWluc3RTdGF0ZW1lbnQiLCJ1bmlmeVN0YXRlbWVudEFnYWluc3RTdGF0ZW1lbnQiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBYXFCQTs7OzJEQVhKO21FQUNRO3NFQUNlO2dGQUNHO3FCQUVqQjtvQkFDK0Q7cUJBQ0U7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTNGLElBQU1DLHdCQUF3QkMsSUFBQUEsZ0JBQVMsRUFBQztBQUV6QixJQUFBLEFBQU1GLHFEQUFOO2NBQU1BO2FBQUFBLHFDQUNQRyxnQkFBZ0IsRUFBRUMsYUFBYSxFQUFFQyxZQUFZO2dDQUR0Q0w7O2dCQUVqQixrQkFGaUJBO1FBSWpCLE1BQUtHLGdCQUFnQixHQUFHQTtRQUN4QixNQUFLQyxhQUFhLEdBQUdBO1FBQ3JCLE1BQUtDLFlBQVksR0FBR0E7OztrQkFOSEw7O1lBU25CTSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNILGdCQUFnQjtZQUM5Qjs7O1lBRUFJLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0gsYUFBYTtZQUMzQjs7O1lBRUFJLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0gsWUFBWTtZQUMxQjs7O1lBRUFJLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNQyxPQUFPLElBQUksQ0FBQ04sYUFBYSxFQUFHLEdBQUc7Z0JBRXJDLE9BQU9NO1lBQ1Q7OztZQUVBQyxLQUFBQTttQkFBQUEsU0FBQUEsbUJBQW1CUCxhQUFhO2dCQUM5QixJQUFNUSxpQkFBaUJSLGVBQ2pCUyxpQkFBaUIsSUFBSSxDQUFDVCxhQUFhLEVBQ25DVSxzQkFBc0JDLElBQUFBLG1DQUE0QixFQUFDSCxnQkFBZ0JDLGlCQUNuRUcsdUJBQXVCRixxQkFBcUIsR0FBRztnQkFFckQsT0FBT0U7WUFDVDs7O1lBRUFDLEtBQUFBO21CQUFBQSxTQUFBQSxzQkFBc0JkLGdCQUFnQjtnQkFDcEMsSUFBTWUsMEJBQTBCLElBQUksQ0FBQ2YsZ0JBQWdCLENBQUNnQixLQUFLLENBQUNoQjtnQkFFNUQsT0FBT2U7WUFDVDs7O1lBRUFFLEtBQUFBO21CQUFBQSxTQUFBQSxnQkFBZWhCLGFBQWEsRUFBRWlCLGFBQWEsRUFBRUMsYUFBYSxFQUFFQyxhQUFhO2dCQUN2RSxJQUFJUDtnQkFFSixJQUFNWCxlQUFlLElBQUksQ0FBQ0EsWUFBWSxFQUNoQ08saUJBQWlCUixlQUNqQlMsaUJBQWlCLElBQUksQ0FBQ1QsYUFBYSxFQUFFLEdBQUc7Z0JBRTlDWSx1QkFBdUJJLGVBQWVSLGdCQUFnQkMsZ0JBQWdCUixjQUFjZ0IsZUFBZUMsZUFBZUM7Z0JBRWxILElBQUksQ0FBQ1Asc0JBQXNCO29CQUN6QixJQUFNUSw4QkFBOEJDLElBQUFBLG1EQUE0QyxFQUFDckI7b0JBRWpGLElBQUlvQixnQ0FBZ0MsTUFBTTt3QkFDeEMsSUFBTVosa0JBQWlCWSw2QkFBNkIsR0FBRzt3QkFFdkRSLHVCQUF1QkksZUFBZVIsaUJBQWdCQyxnQkFBZ0JSLGNBQWNnQixlQUFlQyxlQUFlQztvQkFDcEg7Z0JBQ0Y7Z0JBRUEsT0FBT1A7WUFDVDs7O1lBRUFVLEtBQUFBO21CQUFBQSxTQUFBQSx3QkFBd0JDLFdBQVcsRUFBRU4sYUFBYSxFQUFFQyxhQUFhLEVBQUVDLGFBQWE7Z0JBQzlFLElBQUlLLDRCQUE0QixPQUFRLEdBQUc7Z0JBRTNDLElBQU16QixtQkFBbUJGLHNCQUFzQixJQUFJLENBQUNHLGFBQWE7Z0JBRWpFLElBQUlELHFCQUFxQixNQUFNO29CQUM3QmtCLGdCQUNFLHFCQUFHQTtvQkFHTCxJQUFNLEFBQUVRLG1CQUFxQkMsYUFBSSxDQUF6QkQsa0JBQ0ZFLFFBQVEsSUFBSSxDQUFDNUIsZ0JBQWdCLEVBQzdCNkIsUUFBUTdCLGtCQUNSOEIsVUFBVUosaUJBQWlCSyxLQUFLLENBQUNILE9BQU9DLE9BQU9YLGVBQWVDLGVBQWVDO29CQUVuRkssNEJBQTRCSyxTQUFTLEdBQUc7Z0JBQzFDO2dCQUVBLE9BQU9MO1lBQ1Q7OztZQUVBTyxLQUFBQTttQkFBQUEsU0FBQUEsU0FBU2IsYUFBYSxFQUFFQyxhQUFhO2dCQUNuQyxJQUFNVixpQkFBaUIsSUFBSSxDQUFDVCxhQUFhLEVBQ25DZ0MsbUJBQW1CYixjQUFjYyxZQUFZLENBQUN4QixpQkFDOUN5QixvQkFBb0IsSUFBSSxDQUFDbkMsZ0JBQWdCLEVBQ3pDb0Msc0JBQXNCakIsY0FBY2UsWUFBWSxDQUFDQyxvQkFDakRFLFNBQVMsQUFBQyxJQUEyQkQsT0FBeEJILGtCQUFpQixTQUEyQixPQUFwQkcscUJBQW9CO2dCQUUvRCxPQUFPQztZQUNUOzs7O1lBRU9DLEtBQUFBO21CQUFQLFNBQU9BLHVCQUF1QkMsSUFBSSxFQUFFQyxXQUFXO2dCQUM3QyxJQUFRQyxlQUE0QkYsS0FBNUJFLGNBQWNDLFlBQWNILEtBQWRHLFdBQ2RDLHFCQUFxQkYsY0FDckJHLGtCQUFrQkYsV0FDbEJHLFFBQVFMLFlBQVlNLFFBQVEsSUFDNUJDLFNBQVNQLFlBQVlRLFNBQVMsSUFDOUIvQyxnQkFBZ0JnRCxJQUFBQSxzQ0FBZ0MsRUFBQ0wsaUJBQWlCQyxPQUFPRSxTQUN6RS9DLG1CQUFtQmtELElBQUFBLDRDQUFzQyxFQUFDUCxvQkFBb0JFLE9BQU9FLFNBQ3JGSSx1Q0FBdUMsSUF2RzlCdEQscUNBdUd1RUksZUFBZUQ7Z0JBRXZHLE9BQU9tRDtZQUNUOzs7WUFFT0MsS0FBQUE7bUJBQVAsU0FBT0EscUNBQXFDcEQsZ0JBQWdCLEVBQUVDLGFBQWE7Z0JBQ3pFLElBQUlrRDtnQkFFSixJQUFNakQsZUFBZTtnQkFFckJpRCx1Q0FBdUMsSUFqSHRCdEQscUNBaUgrREcsa0JBQWtCQyxlQUFlQztnQkFFakgsSUFBTW1CLDhCQUE4QkMsSUFBQUEsbURBQTRDLEVBQUNyQjtnQkFFakYsSUFBSW9CLGdDQUFnQyxNQUFNO29CQUN4QyxJQUFNcEIsa0JBQWdCb0IsNkJBQTZCLEdBQUc7b0JBRXREOEIsdUNBQXVDLElBeEh4QnRELHFDQXdIaUVHLGtCQUFrQkMsaUJBQWVDO2dCQUNuSDtnQkFFQSxPQUFPaUQ7WUFDVDs7O1lBRU9FLEtBQUFBO21CQUFQLFNBQU9BLHFEQUFxRHJELGdCQUFnQixFQUFFQyxhQUFhLEVBQUVxRCxnQkFBZ0I7Z0JBQzNHLElBQUlIO2dCQUVKLElBQUlqRCxlQUFlO2dCQUVuQixJQUFJb0QscUJBQXFCLE1BQU07b0JBQzdCLElBQU1DLDhCQUE4QkMsd0JBQTJCLENBQUNDLG9CQUFvQixDQUFDSDtvQkFFckZwRCxlQUFlcUQsNkJBQTZCLEdBQUc7Z0JBQ2pEO2dCQUVBSix1Q0FBdUMsSUF6SXRCdEQscUNBeUkrREcsa0JBQWtCQyxlQUFlQztnQkFFakgsSUFBTW1CLDhCQUE4QkMsSUFBQUEsbURBQTRDLEVBQUNyQjtnQkFFakYsSUFBSW9CLGdDQUFnQyxNQUFNO29CQUN4QyxJQUFNcEIsa0JBQWdCb0IsNkJBQTZCLEdBQUc7b0JBRXREOEIsdUNBQXVDLElBaEp4QnRELHFDQWdKaUVHLGtCQUFrQkMsaUJBQWVDO2dCQUNuSDtnQkFFQSxPQUFPaUQ7WUFDVDs7O1dBcEptQnREO0VBQTZDNkQscUJBQVk7QUF1SjlFLFNBQVN6QyxlQUFlUixjQUFjLEVBQUVDLGNBQWMsRUFBRVIsWUFBWSxFQUFFZ0IsYUFBYSxFQUFFQyxhQUFhLEVBQUVDLGFBQWE7SUFDL0csSUFBSXVDO0lBRUosSUFBSXpELGlCQUFpQixNQUFNO1FBQ3pCLElBQU0wRCxzQ0FBc0NsRCxlQUFlTSxLQUFLLENBQUNQO1FBRWpFa0QsbUJBQW1CQyxxQ0FBcUMsR0FBRztJQUM3RCxPQUFPO1FBQ0wsSUFBTUMsbUNBQW1DQyxJQUFBQSxrQ0FBOEIsRUFBQ3JELGdCQUFnQkMsZ0JBQWdCUixjQUFjZ0IsZUFBZUMsZUFBZUM7UUFFcEp1QyxtQkFBbUJFLGtDQUFrQyxHQUFHO0lBQzFEO0lBRUEsT0FBT0Y7QUFDVCJ9