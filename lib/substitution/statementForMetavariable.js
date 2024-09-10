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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zdWJzdGl0dXRpb24vc3RhdGVtZW50Rm9yTWV0YXZhcmlhYmxlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgc2hpbSBmcm9tIFwiLi4vc2hpbVwiO1xuaW1wb3J0IFN1YnN0aXR1dGlvbiBmcm9tIFwiLi4vc3Vic3RpdHV0aW9uXCI7XG5pbXBvcnQgVGVybUZvclZhcmlhYmxlU3Vic3RpdHV0aW9uIGZyb20gXCIuL3Rlcm1Gb3JWYXJpYWJsZVwiO1xuaW1wb3J0IHVuaWZ5U3RhdGVtZW50QWdhaW5zdFN0YXRlbWVudCBmcm9tIFwiLi4vdW5pZnkvc3RhdGVtZW50QXRhaW5zdFN0YXRlbWVudFwiO1xuXG5pbXBvcnQgeyBub2RlUXVlcnkgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5pbXBvcnQgeyBicmFja2V0ZWRTdGF0ZW1lbnRDaGlsZE5vZGVGcm9tU3RhdGVtZW50Tm9kZSB9IGZyb20gXCIuLi91dGlsaXRpZXMvbWF0Y2hcIjtcbmltcG9ydCB7IHN0YXRlbWVudE5vZGVGcm9tU3RhdGVtZW50U3RyaW5nLCBtZXRhdmFyaWFibGVOb2RlRnJvbU1ldGF2YXJpYWJsZVN0cmluZyB9IGZyb20gXCIuLi91dGlsaXRpZXMvbm9kZVwiO1xuXG5jb25zdCBtZXRhdmFyaWFibGVOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvc3RhdGVtZW50L21ldGF2YXJpYWJsZSFcIik7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFN0YXRlbWVudEZvck1ldGF2YXJpYWJsZVN1YnN0aXR1dGlvbiBleHRlbmRzIFN1YnN0aXR1dGlvbiB7XG4gIGNvbnN0cnVjdG9yKG1ldGF2YXJpYWJsZU5vZGUsIHN0YXRlbWVudE5vZGUsIHN1YnN0aXR1dGlvbikge1xuICAgIHN1cGVyKCk7XG5cbiAgICB0aGlzLm1ldGF2YXJpYWJsZU5vZGUgPSBtZXRhdmFyaWFibGVOb2RlO1xuICAgIHRoaXMuc3RhdGVtZW50Tm9kZSA9IHN0YXRlbWVudE5vZGU7XG4gICAgdGhpcy5zdWJzdGl0dXRpb24gPSBzdWJzdGl0dXRpb247XG4gIH1cblxuICBnZXRNZXRhdmFyaWFibGVOb2RlKCkge1xuICAgIHJldHVybiB0aGlzLm1ldGF2YXJpYWJsZU5vZGU7XG4gIH1cblxuICBnZXRTdGF0ZW1lbnROb2RlKCkge1xuICAgIHJldHVybiB0aGlzLnN0YXRlbWVudE5vZGU7XG4gIH1cblxuICBnZXRTdWJzdGl0dXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuc3Vic3RpdHV0aW9uO1xuICB9XG5cbiAgZ2V0Tm9kZSgpIHtcbiAgICBjb25zdCBub2RlID0gdGhpcy5zdGF0ZW1lbnROb2RlOyAgLy8vXG5cbiAgICByZXR1cm4gbm9kZTtcbiAgfVxuXG4gIG1hdGNoU3RhdGVtZW50Tm9kZShzdGF0ZW1lbnROb2RlLCBzdWJzdGl0dXRpb25zLCBsb2NhbENvbnRleHRBLCBsb2NhbENvbnRleHRCKSB7XG4gICAgbGV0IHN0YXRlbWVudE5vZGVNYXRjaGVzO1xuXG4gICAgY29uc3Qgc3Vic3RpdHV0aW9uID0gdGhpcy5zdWJzdGl0dXRpb24sIC8vL1xuICAgICAgICAgIHN0YXRlbWVudE5vZGVBID0gc3RhdGVtZW50Tm9kZSwgIC8vL1xuICAgICAgICAgIHN0YXRlbWVudE5vZGVCID0gdGhpcy5zdGF0ZW1lbnROb2RlOyAvLy9cblxuICAgIHN0YXRlbWVudE5vZGVNYXRjaGVzID0gbWF0Y2hTdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGVBLCBzdGF0ZW1lbnROb2RlQiwgc3Vic3RpdHV0aW9uLCBzdWJzdGl0dXRpb25zLCBsb2NhbENvbnRleHRBLCBsb2NhbENvbnRleHRCKTtcblxuICAgIGlmICghc3RhdGVtZW50Tm9kZU1hdGNoZXMpIHtcbiAgICAgIGNvbnN0IGJyYWNrZXRlZFN0YXRlbWVudENoaWxkTm9kZSA9IGJyYWNrZXRlZFN0YXRlbWVudENoaWxkTm9kZUZyb21TdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUpO1xuXG4gICAgICBpZiAoYnJhY2tldGVkU3RhdGVtZW50Q2hpbGROb2RlICE9PSBudWxsKSB7XG4gICAgICAgIGNvbnN0IHN0YXRlbWVudE5vZGVBID0gYnJhY2tldGVkU3RhdGVtZW50Q2hpbGROb2RlOyAvLy9cblxuICAgICAgICBzdGF0ZW1lbnROb2RlTWF0Y2hlcyA9IG1hdGNoU3RhdGVtZW50Tm9kZShzdGF0ZW1lbnROb2RlQSwgc3RhdGVtZW50Tm9kZUIsIHN1YnN0aXR1dGlvbiwgc3Vic3RpdHV0aW9ucywgbG9jYWxDb250ZXh0QSwgbG9jYWxDb250ZXh0Qik7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHN0YXRlbWVudE5vZGVNYXRjaGVzO1xuICB9XG5cbiAgbWF0Y2hNZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUpIHtcbiAgICBjb25zdCBtYXRjaGVzTWV0YXZhcmlhYmxlTm9kZSA9IHRoaXMubWV0YXZhcmlhYmxlTm9kZS5tYXRjaChtZXRhdmFyaWFibGVOb2RlKTtcblxuICAgIHJldHVybiBtYXRjaGVzTWV0YXZhcmlhYmxlTm9kZTtcbiAgfVxuXG4gIHVuaWZ5QWdhaW5zdEVxdWl2YWxlbmNlKGVxdWl2YWxlbmNlLCBzdWJzdGl0dXRpb25zLCBsb2NhbENvbnRleHQpIHtcbiAgICBsZXQgdW5pZmllZEFnYWluc3RFcXVpdmFsZW5jZSA9IGZhbHNlOyAgLy8vXG5cbiAgICBjb25zdCBtZXRhdmFyaWFibGVOb2RlID0gbWV0YXZhcmlhYmxlTm9kZVF1ZXJ5KHRoaXMuc3RhdGVtZW50Tm9kZSk7XG5cbiAgICBpZiAobWV0YXZhcmlhYmxlTm9kZSAhPT0gbnVsbCkge1xuICAgICAgc3Vic3RpdHV0aW9ucyA9IFsgLy8vXG4gICAgICAgIC4uLnN1YnN0aXR1dGlvbnNcbiAgICAgIF07XG5cbiAgICAgIGNvbnN0IHsgbWV0YUxldmVsVW5pZmllciB9ID0gc2hpbSxcbiAgICAgICAgICAgIG5vZGVBID0gdGhpcy5tZXRhdmFyaWFibGVOb2RlLCAvLy9cbiAgICAgICAgICAgIG5vZGVCID0gbWV0YXZhcmlhYmxlTm9kZSwgLy8vXG4gICAgICAgICAgICBsb2NhbENvbnRleHRBID0gbG9jYWxDb250ZXh0LCAvLy9cbiAgICAgICAgICAgIGxvY2FsQ29udGV4dEIgPSBsb2NhbENvbnRleHQsICAvLy9cbiAgICAgICAgICAgIHVuaWZpZWQgPSBtZXRhTGV2ZWxVbmlmaWVyLnVuaWZ5KG5vZGVBLCBub2RlQiwgc3Vic3RpdHV0aW9ucywgbG9jYWxDb250ZXh0QSwgbG9jYWxDb250ZXh0Qik7XG5cbiAgICAgIHVuaWZpZWRBZ2FpbnN0RXF1aXZhbGVuY2UgPSB1bmlmaWVkOyAvLy9cbiAgICB9XG5cbiAgICByZXR1cm4gdW5pZmllZEFnYWluc3RFcXVpdmFsZW5jZTtcbiAgfVxuXG4gIGFzU3RyaW5nKGxvY2FsQ29udGV4dEEsIGxvY2FsQ29udGV4dEIpIHtcbiAgICBjb25zdCBzdGF0ZW1lbnROb2RlQiA9IHRoaXMuc3RhdGVtZW50Tm9kZSwgIC8vL1xuICAgICAgICAgIHN0YXRlbWVudFN0cmluZ0IgPSBsb2NhbENvbnRleHRCLm5vZGVBc1N0cmluZyhzdGF0ZW1lbnROb2RlQiksXG4gICAgICAgICAgbWV0YXZhcmlhYmxlTm9kZUEgPSB0aGlzLm1ldGF2YXJpYWJsZU5vZGUsICAvLy9cbiAgICAgICAgICBtZXRhdmFyaWFibGVTdHJpbmdBID0gbG9jYWxDb250ZXh0QS5ub2RlQXNTdHJpbmcobWV0YXZhcmlhYmxlTm9kZUEpLFxuICAgICAgICAgIHN0cmluZyA9IGBbJHtzdGF0ZW1lbnRTdHJpbmdCfSBmb3IgJHttZXRhdmFyaWFibGVTdHJpbmdBfV1gO1xuXG4gICAgcmV0dXJuIHN0cmluZztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tSlNPTkFuZEZpbGVDb250ZXh0KGpzb24sIGZpbGVDb250ZXh0KSB7XG4gICAgY29uc3QgeyBtZXRhdmFyaWFibGUsIHN0YXRlbWVudCB9ID0ganNvbixcbiAgICAgICAgICAgIG1ldGF2YXJpYWJsZVN0cmluZyA9IG1ldGF2YXJpYWJsZSwgIC8vL1xuICAgICAgICAgICAgc3RhdGVtZW50U3RyaW5nID0gc3RhdGVtZW50LCAgLy8vXG4gICAgICAgICAgICBsZXhlciA9IGZpbGVDb250ZXh0LmdldExleGVyKCksXG4gICAgICAgICAgICBwYXJzZXIgPSBmaWxlQ29udGV4dC5nZXRQYXJzZXIoKSxcbiAgICAgICAgICAgIHN0YXRlbWVudE5vZGUgPSBzdGF0ZW1lbnROb2RlRnJvbVN0YXRlbWVudFN0cmluZyhzdGF0ZW1lbnRTdHJpbmcsIGxleGVyLCBwYXJzZXIpLFxuICAgICAgICAgICAgbWV0YXZhcmlhYmxlTm9kZSA9IG1ldGF2YXJpYWJsZU5vZGVGcm9tTWV0YXZhcmlhYmxlU3RyaW5nKG1ldGF2YXJpYWJsZVN0cmluZywgbGV4ZXIsIHBhcnNlciksXG4gICAgICAgICAgICBzdGF0ZW1lbnRGb3JNZXRhdmFyaWFibGVTdWJzdGl0dXRpb24gPSBuZXcgU3RhdGVtZW50Rm9yTWV0YXZhcmlhYmxlU3Vic3RpdHV0aW9uKHN0YXRlbWVudE5vZGUsIG1ldGF2YXJpYWJsZU5vZGUpO1xuXG4gICAgcmV0dXJuIHN0YXRlbWVudEZvck1ldGF2YXJpYWJsZVN1YnN0aXR1dGlvbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTWV0YXZhcmlhYmxlTm9kZUFuZFN0YXRlbWVudE5vZGUobWV0YXZhcmlhYmxlTm9kZSwgc3RhdGVtZW50Tm9kZSkge1xuICAgIGxldCBzdGF0ZW1lbnRGb3JNZXRhdmFyaWFibGVTdWJzdGl0dXRpb247XG5cbiAgICBjb25zdCBzdWJzdGl0dXRpb24gPSBudWxsO1xuXG4gICAgc3RhdGVtZW50Rm9yTWV0YXZhcmlhYmxlU3Vic3RpdHV0aW9uID0gbmV3IFN0YXRlbWVudEZvck1ldGF2YXJpYWJsZVN1YnN0aXR1dGlvbihtZXRhdmFyaWFibGVOb2RlLCBzdGF0ZW1lbnROb2RlLCBzdWJzdGl0dXRpb24pO1xuXG4gICAgY29uc3QgYnJhY2tldGVkU3RhdGVtZW50Q2hpbGROb2RlID0gYnJhY2tldGVkU3RhdGVtZW50Q2hpbGROb2RlRnJvbVN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSk7XG5cbiAgICBpZiAoYnJhY2tldGVkU3RhdGVtZW50Q2hpbGROb2RlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBzdGF0ZW1lbnROb2RlID0gYnJhY2tldGVkU3RhdGVtZW50Q2hpbGROb2RlOyAvLy9cblxuICAgICAgc3RhdGVtZW50Rm9yTWV0YXZhcmlhYmxlU3Vic3RpdHV0aW9uID0gbmV3IFN0YXRlbWVudEZvck1ldGF2YXJpYWJsZVN1YnN0aXR1dGlvbihtZXRhdmFyaWFibGVOb2RlLCBzdGF0ZW1lbnROb2RlLCBzdWJzdGl0dXRpb24pO1xuICAgIH1cblxuICAgIHJldHVybiBzdGF0ZW1lbnRGb3JNZXRhdmFyaWFibGVTdWJzdGl0dXRpb247XG4gIH1cblxuICBzdGF0aWMgZnJvbU1ldGF2YXJpYWJsZU5vZGVTdGF0ZW1lbnROb2RlQW5kU3Vic3RpdHV0aW9uTm9kZShtZXRhdmFyaWFibGVOb2RlLCBzdGF0ZW1lbnROb2RlLCBzdWJzdGl0dXRpb25Ob2RlKSB7XG4gICAgbGV0IHN0YXRlbWVudEZvck1ldGF2YXJpYWJsZVN1YnN0aXR1dGlvbjtcblxuICAgIGxldCBzdWJzdGl0dXRpb24gPSBudWxsO1xuXG4gICAgaWYgKHN1YnN0aXR1dGlvbk5vZGUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHRlcm1Gb3JWYXJpYWJsZVN1YnN0aXR1dGlvbiA9IFRlcm1Gb3JWYXJpYWJsZVN1YnN0aXR1dGlvbi5mcm9tU3Vic3RpdHV0aW9uTm9kZShzdWJzdGl0dXRpb25Ob2RlKTtcblxuICAgICAgc3Vic3RpdHV0aW9uID0gdGVybUZvclZhcmlhYmxlU3Vic3RpdHV0aW9uOyAvLy9cbiAgICB9XG5cbiAgICBzdGF0ZW1lbnRGb3JNZXRhdmFyaWFibGVTdWJzdGl0dXRpb24gPSBuZXcgU3RhdGVtZW50Rm9yTWV0YXZhcmlhYmxlU3Vic3RpdHV0aW9uKG1ldGF2YXJpYWJsZU5vZGUsIHN0YXRlbWVudE5vZGUsIHN1YnN0aXR1dGlvbik7XG5cbiAgICBjb25zdCBicmFja2V0ZWRTdGF0ZW1lbnRDaGlsZE5vZGUgPSBicmFja2V0ZWRTdGF0ZW1lbnRDaGlsZE5vZGVGcm9tU3RhdGVtZW50Tm9kZShzdGF0ZW1lbnROb2RlKTtcblxuICAgIGlmIChicmFja2V0ZWRTdGF0ZW1lbnRDaGlsZE5vZGUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHN0YXRlbWVudE5vZGUgPSBicmFja2V0ZWRTdGF0ZW1lbnRDaGlsZE5vZGU7IC8vL1xuXG4gICAgICBzdGF0ZW1lbnRGb3JNZXRhdmFyaWFibGVTdWJzdGl0dXRpb24gPSBuZXcgU3RhdGVtZW50Rm9yTWV0YXZhcmlhYmxlU3Vic3RpdHV0aW9uKG1ldGF2YXJpYWJsZU5vZGUsIHN0YXRlbWVudE5vZGUsIHN1YnN0aXR1dGlvbik7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN0YXRlbWVudEZvck1ldGF2YXJpYWJsZVN1YnN0aXR1dGlvbjtcbiAgfVxufVxuXG5mdW5jdGlvbiBtYXRjaFN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZUEsIHN0YXRlbWVudE5vZGVCLCBzdWJzdGl0dXRpb24sIHN1YnN0aXR1dGlvbnMsIGxvY2FsQ29udGV4dEEsIGxvY2FsQ29udGV4dEIpIHtcbiAgbGV0IHN0YXRlbWVudE5vZGVNYXRjaGVzO1xuXG4gIGlmIChzdWJzdGl0dXRpb24gPT09IG51bGwpIHtcbiAgICBjb25zdCBzdGF0ZW1lbnROb2RlQU1hdGNoZXNTdGF0ZW1lbnROb2RlQiA9IHN0YXRlbWVudE5vZGVCLm1hdGNoKHN0YXRlbWVudE5vZGVBKTtcblxuICAgIHN0YXRlbWVudE5vZGVNYXRjaGVzID0gc3RhdGVtZW50Tm9kZUFNYXRjaGVzU3RhdGVtZW50Tm9kZUI7IC8vL1xuICB9IGVsc2Uge1xuICAgIGNvbnN0IHN0YXRlbWVudFZlcmlmaWVkQWdhaW5zdFN0YXRlbWVudCA9IHVuaWZ5U3RhdGVtZW50QWdhaW5zdFN0YXRlbWVudChzdGF0ZW1lbnROb2RlQSwgc3RhdGVtZW50Tm9kZUIsIHN1YnN0aXR1dGlvbiwgc3Vic3RpdHV0aW9ucywgbG9jYWxDb250ZXh0QSwgbG9jYWxDb250ZXh0Qik7XG5cbiAgICBzdGF0ZW1lbnROb2RlTWF0Y2hlcyA9IHN0YXRlbWVudFZlcmlmaWVkQWdhaW5zdFN0YXRlbWVudDsgLy8vXG4gIH1cblxuICByZXR1cm4gc3RhdGVtZW50Tm9kZU1hdGNoZXM7XG5cbn0iXSwibmFtZXMiOlsiU3RhdGVtZW50Rm9yTWV0YXZhcmlhYmxlU3Vic3RpdHV0aW9uIiwibWV0YXZhcmlhYmxlTm9kZVF1ZXJ5Iiwibm9kZVF1ZXJ5IiwibWV0YXZhcmlhYmxlTm9kZSIsInN0YXRlbWVudE5vZGUiLCJzdWJzdGl0dXRpb24iLCJnZXRNZXRhdmFyaWFibGVOb2RlIiwiZ2V0U3RhdGVtZW50Tm9kZSIsImdldFN1YnN0aXR1dGlvbiIsImdldE5vZGUiLCJub2RlIiwibWF0Y2hTdGF0ZW1lbnROb2RlIiwic3Vic3RpdHV0aW9ucyIsImxvY2FsQ29udGV4dEEiLCJsb2NhbENvbnRleHRCIiwic3RhdGVtZW50Tm9kZU1hdGNoZXMiLCJzdGF0ZW1lbnROb2RlQSIsInN0YXRlbWVudE5vZGVCIiwiYnJhY2tldGVkU3RhdGVtZW50Q2hpbGROb2RlIiwiYnJhY2tldGVkU3RhdGVtZW50Q2hpbGROb2RlRnJvbVN0YXRlbWVudE5vZGUiLCJtYXRjaE1ldGF2YXJpYWJsZU5vZGUiLCJtYXRjaGVzTWV0YXZhcmlhYmxlTm9kZSIsIm1hdGNoIiwidW5pZnlBZ2FpbnN0RXF1aXZhbGVuY2UiLCJlcXVpdmFsZW5jZSIsImxvY2FsQ29udGV4dCIsInVuaWZpZWRBZ2FpbnN0RXF1aXZhbGVuY2UiLCJtZXRhTGV2ZWxVbmlmaWVyIiwic2hpbSIsIm5vZGVBIiwibm9kZUIiLCJ1bmlmaWVkIiwidW5pZnkiLCJhc1N0cmluZyIsInN0YXRlbWVudFN0cmluZ0IiLCJub2RlQXNTdHJpbmciLCJtZXRhdmFyaWFibGVOb2RlQSIsIm1ldGF2YXJpYWJsZVN0cmluZ0EiLCJzdHJpbmciLCJmcm9tSlNPTkFuZEZpbGVDb250ZXh0IiwianNvbiIsImZpbGVDb250ZXh0IiwibWV0YXZhcmlhYmxlIiwic3RhdGVtZW50IiwibWV0YXZhcmlhYmxlU3RyaW5nIiwic3RhdGVtZW50U3RyaW5nIiwibGV4ZXIiLCJnZXRMZXhlciIsInBhcnNlciIsImdldFBhcnNlciIsInN0YXRlbWVudE5vZGVGcm9tU3RhdGVtZW50U3RyaW5nIiwibWV0YXZhcmlhYmxlTm9kZUZyb21NZXRhdmFyaWFibGVTdHJpbmciLCJzdGF0ZW1lbnRGb3JNZXRhdmFyaWFibGVTdWJzdGl0dXRpb24iLCJmcm9tTWV0YXZhcmlhYmxlTm9kZUFuZFN0YXRlbWVudE5vZGUiLCJmcm9tTWV0YXZhcmlhYmxlTm9kZVN0YXRlbWVudE5vZGVBbmRTdWJzdGl0dXRpb25Ob2RlIiwic3Vic3RpdHV0aW9uTm9kZSIsInRlcm1Gb3JWYXJpYWJsZVN1YnN0aXR1dGlvbiIsIlRlcm1Gb3JWYXJpYWJsZVN1YnN0aXR1dGlvbiIsImZyb21TdWJzdGl0dXRpb25Ob2RlIiwiU3Vic3RpdHV0aW9uIiwic3RhdGVtZW50Tm9kZUFNYXRjaGVzU3RhdGVtZW50Tm9kZUIiLCJzdGF0ZW1lbnRWZXJpZmllZEFnYWluc3RTdGF0ZW1lbnQiLCJ1bmlmeVN0YXRlbWVudEFnYWluc3RTdGF0ZW1lbnQiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBYXFCQTs7OzJEQVhKO21FQUNRO3NFQUNlO2dGQUNHO3FCQUVqQjtxQkFDbUM7b0JBQzRCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUV6RixJQUFNQyx3QkFBd0JDLElBQUFBLGdCQUFTLEVBQUM7QUFFekIsSUFBQSxBQUFNRixxREFBRCxBQUFMO2NBQU1BO2FBQUFBLHFDQUNQRyxnQkFBZ0IsRUFBRUMsYUFBYSxFQUFFQyxZQUFZO2dDQUR0Q0w7O2dCQUVqQixrQkFGaUJBO1FBSWpCLE1BQUtHLGdCQUFnQixHQUFHQTtRQUN4QixNQUFLQyxhQUFh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