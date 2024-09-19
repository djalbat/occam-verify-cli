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
var _query = require("../utilities/query");
var _brackets = require("../utilities/brackets");
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
var statementNodeQuery = (0, _query.nodeQuery)("/substitution/statement!"), metavariableNodeQuery = (0, _query.nodeQuery)("/*/metavariable!");
var StatementForMetavariableSubstitution = /*#__PURE__*/ function(Substitution) {
    _inherits(StatementForMetavariableSubstitution, Substitution);
    function StatementForMetavariableSubstitution(statementNode, metavariableNode, substitution) {
        _class_call_check(this, StatementForMetavariableSubstitution);
        var _this;
        _this = _call_super(this, StatementForMetavariableSubstitution);
        _this.statementNode = statementNode;
        _this.metavariableNode = metavariableNode;
        _this.substitution = substitution;
        return _this;
    }
    _create_class(StatementForMetavariableSubstitution, [
        {
            key: "getStatementNode",
            value: function getStatementNode() {
                return this.statementNode;
            }
        },
        {
            key: "getMetavariableNode",
            value: function getMetavariableNode() {
                return this.metavariableNode;
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
            key: "isSimple",
            value: function isSimple() {
                var simple = this.substitution === null;
                return simple;
            }
        },
        {
            key: "transformed",
            value: function transformed(substitutions) {
                var transformedSubstitution = null;
                var transformedStatementNode = transformStatementNode(this.statementNode, substitutions);
                if (transformedStatementNode !== null) {
                    var substitution = null, statementNode = transformedStatementNode, metavariableNode = this.metavariableNode, statementForMetavariableSubstitution = new StatementForMetavariableSubstitution(statementNode, metavariableNode, substitution);
                    transformedSubstitution = statementForMetavariableSubstitution; ///
                }
                return transformedSubstitution;
            }
        },
        {
            key: "matchStatementNode",
            value: function matchStatementNode(statementNode) {
                statementNode = (0, _brackets.stripBracketsFromStatement)(statementNode); ///
                var statementNodeMatches = this.statementNode.match(statementNode);
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
            key: "matchMetavariableNodeAndSubstitutionNode",
            value: function matchMetavariableNodeAndSubstitutionNode(metavariableNode, substitutionNode) {
                var metavariableNodeAndSubstitutionNodeMatches = false;
                return metavariableNodeAndSubstitutionNodeMatches;
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
                    var substitutionString = this.substitution.asString(localContextA, localContextA);
                    string = "[".concat(statementStringB, " for ").concat(metavariableStringA).concat(substitutionString, "]");
                }
                return string;
            }
        }
    ], [
        {
            key: "fromSubstitutionNode",
            value: function fromSubstitutionNode(substitutionNode) {
                var statementForMetavariableSubstitution = null;
                var statementNode = statementNodeQuery(substitutionNode), metavariableNode = metavariableNodeQuery(substitutionNode);
                if (statementNode !== null) {
                    statementNode = (0, _brackets.stripBracketsFromStatement)(statementNode); ///
                    var substitution = null;
                    statementForMetavariableSubstitution = new StatementForMetavariableSubstitution(statementNode, metavariableNode, substitution);
                }
                return statementForMetavariableSubstitution;
            }
        },
        {
            key: "fromStatementNodeAndMetavariableNode",
            value: function fromStatementNodeAndMetavariableNode(statementNode, metavariableNode) {
                statementNode = (0, _brackets.stripBracketsFromStatement)(statementNode); ///
                var substitution = null, statementForMetavariableSubstitution = new StatementForMetavariableSubstitution(statementNode, metavariableNode, substitution);
                return statementForMetavariableSubstitution;
            }
        },
        {
            key: "fromStatementNodeMetavariableNodeAndSubstitutionNode",
            value: function fromStatementNodeMetavariableNodeAndSubstitutionNode(statementNode, metavariableNode, substitutionNode) {
                statementNode = (0, _brackets.stripBracketsFromStatement)(statementNode); ///
                var substitution = substitutionFromSubstitutionNode(substitutionNode), statementForMetavariableSubstitution = new StatementForMetavariableSubstitution(statementNode, metavariableNode, substitution);
                return statementForMetavariableSubstitution;
            }
        }
    ]);
    return StatementForMetavariableSubstitution;
}(_substitution.default);
function substitutionFromSubstitutionNode(substitutionNode) {
    var substitution = null;
    if (substitution === null) {
        var termForVariableSubstitution = _termForVariable.default.fromSubstitutionNode(substitutionNode);
        if (termForVariableSubstitution !== null) {
            substitution = termForVariableSubstitution; ///
        }
    }
    if (substitution === null) {
        var statementForMetavariableSubstitution = StatementForMetavariableSubstitution.fromSubstitutionNode(substitutionNode);
        if (statementForMetavariableSubstitution !== null) {
            substitution = statementForMetavariableSubstitution; ///
        }
    }
    return substitution;
}
function transformStatementNode(statementNode, substitutions) {
    var transformedStatementNode = null;
    var metavariableNode = metavariableNodeQuery(statementNode);
    if (metavariableNode !== null) {
        substitutions.someSubstitution(function(substitution) {
            var substitutionMatchesVariableNode = substitution.matchMetavariableNode(metavariableNode);
            if (substitutionMatchesVariableNode) {
                var _$statementNode = substitution.getStatementNode();
                transformedStatementNode = _$statementNode; ////
                return true;
            }
        });
    }
    return transformedStatementNode;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zdWJzdGl0dXRpb24vc3RhdGVtZW50Rm9yTWV0YXZhcmlhYmxlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgU3Vic3RpdHV0aW9uIGZyb20gXCIuLi9zdWJzdGl0dXRpb25cIjtcbmltcG9ydCBUZXJtRm9yVmFyaWFibGVTdWJzdGl0dXRpb24gZnJvbSBcIi4uL3N1YnN0aXR1dGlvbi90ZXJtRm9yVmFyaWFibGVcIjtcblxuaW1wb3J0IHsgbm9kZVF1ZXJ5IH0gZnJvbSBcIi4uL3V0aWxpdGllcy9xdWVyeVwiO1xuaW1wb3J0IHsgc3RyaXBCcmFja2V0c0Zyb21TdGF0ZW1lbnQgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2JyYWNrZXRzXCI7XG5cbmNvbnN0IHN0YXRlbWVudE5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9zdWJzdGl0dXRpb24vc3RhdGVtZW50IVwiKSxcbiAgICAgIG1ldGF2YXJpYWJsZU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi8qL21ldGF2YXJpYWJsZSFcIik7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFN0YXRlbWVudEZvck1ldGF2YXJpYWJsZVN1YnN0aXR1dGlvbiBleHRlbmRzIFN1YnN0aXR1dGlvbiB7XG4gIGNvbnN0cnVjdG9yKHN0YXRlbWVudE5vZGUsIG1ldGF2YXJpYWJsZU5vZGUsIHN1YnN0aXR1dGlvbikge1xuICAgIHN1cGVyKCk7XG5cbiAgICB0aGlzLnN0YXRlbWVudE5vZGUgPSBzdGF0ZW1lbnROb2RlO1xuICAgIHRoaXMubWV0YXZhcmlhYmxlTm9kZSA9IG1ldGF2YXJpYWJsZU5vZGU7XG4gICAgdGhpcy5zdWJzdGl0dXRpb24gPSBzdWJzdGl0dXRpb247XG4gIH1cblxuICBnZXRTdGF0ZW1lbnROb2RlKCkge1xuICAgIHJldHVybiB0aGlzLnN0YXRlbWVudE5vZGU7XG4gIH1cblxuICBnZXRNZXRhdmFyaWFibGVOb2RlKCkge1xuICAgIHJldHVybiB0aGlzLm1ldGF2YXJpYWJsZU5vZGU7XG4gIH1cblxuICBnZXRTdWJzdGl0dXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuc3Vic3RpdHV0aW9uO1xuICB9XG5cbiAgZ2V0Tm9kZSgpIHtcbiAgICBjb25zdCBub2RlID0gdGhpcy5zdGF0ZW1lbnROb2RlOyAgLy8vXG5cbiAgICByZXR1cm4gbm9kZTtcbiAgfVxuXG4gIGlzU2ltcGxlKCkge1xuICAgIGNvbnN0IHNpbXBsZSA9ICh0aGlzLnN1YnN0aXR1dGlvbiA9PT0gbnVsbCk7XG5cbiAgICByZXR1cm4gc2ltcGxlO1xuICB9XG5cbiAgdHJhbnNmb3JtZWQoc3Vic3RpdHV0aW9ucykge1xuICAgIGxldCB0cmFuc2Zvcm1lZFN1YnN0aXR1dGlvbiA9IG51bGw7XG5cbiAgICBjb25zdCB0cmFuc2Zvcm1lZFN0YXRlbWVudE5vZGUgPSB0cmFuc2Zvcm1TdGF0ZW1lbnROb2RlKHRoaXMuc3RhdGVtZW50Tm9kZSwgc3Vic3RpdHV0aW9ucyk7XG5cbiAgICBpZiAodHJhbnNmb3JtZWRTdGF0ZW1lbnROb2RlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBzdWJzdGl0dXRpb24gPSBudWxsLFxuICAgICAgICAgICAgc3RhdGVtZW50Tm9kZSA9IHRyYW5zZm9ybWVkU3RhdGVtZW50Tm9kZSwgLy8vXG4gICAgICAgICAgICBtZXRhdmFyaWFibGVOb2RlID0gdGhpcy5tZXRhdmFyaWFibGVOb2RlLCAvLy9cbiAgICAgICAgICAgIHN0YXRlbWVudEZvck1ldGF2YXJpYWJsZVN1YnN0aXR1dGlvbiA9IG5ldyBTdGF0ZW1lbnRGb3JNZXRhdmFyaWFibGVTdWJzdGl0dXRpb24oc3RhdGVtZW50Tm9kZSwgbWV0YXZhcmlhYmxlTm9kZSwgc3Vic3RpdHV0aW9uKTtcblxuICAgICAgdHJhbnNmb3JtZWRTdWJzdGl0dXRpb24gPSBzdGF0ZW1lbnRGb3JNZXRhdmFyaWFibGVTdWJzdGl0dXRpb247ICAvLy9cbiAgICB9XG5cbiAgICByZXR1cm4gdHJhbnNmb3JtZWRTdWJzdGl0dXRpb247XG4gIH1cblxuICBtYXRjaFN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSkge1xuICAgIHN0YXRlbWVudE5vZGUgPSBzdHJpcEJyYWNrZXRzRnJvbVN0YXRlbWVudChzdGF0ZW1lbnROb2RlKTsgLy8vXG5cbiAgICBjb25zdCBzdGF0ZW1lbnROb2RlTWF0Y2hlcyA9IHRoaXMuc3RhdGVtZW50Tm9kZS5tYXRjaChzdGF0ZW1lbnROb2RlKTtcblxuICAgIHJldHVybiBzdGF0ZW1lbnROb2RlTWF0Y2hlcztcbiAgfVxuXG4gIG1hdGNoTWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlKSB7XG4gICAgY29uc3QgbWV0YXZhcmlhYmxlTm9kZU1hdGNoZXMgPSB0aGlzLm1ldGF2YXJpYWJsZU5vZGUubWF0Y2gobWV0YXZhcmlhYmxlTm9kZSk7XG5cbiAgICByZXR1cm4gbWV0YXZhcmlhYmxlTm9kZU1hdGNoZXM7XG4gIH1cblxuICBtYXRjaE1ldGF2YXJpYWJsZU5vZGVBbmRTdWJzdGl0dXRpb25Ob2RlKG1ldGF2YXJpYWJsZU5vZGUsIHN1YnN0aXR1dGlvbk5vZGUpIHtcbiAgICBjb25zdCBtZXRhdmFyaWFibGVOb2RlQW5kU3Vic3RpdHV0aW9uTm9kZU1hdGNoZXMgPSBmYWxzZTtcblxuICAgIHJldHVybiBtZXRhdmFyaWFibGVOb2RlQW5kU3Vic3RpdHV0aW9uTm9kZU1hdGNoZXM7XG4gIH1cblxuICBhc1N0cmluZyhsb2NhbENvbnRleHRBLCBsb2NhbENvbnRleHRCKSB7XG4gICAgbGV0IHN0cmluZztcblxuICAgIGNvbnN0IHN0YXRlbWVudE5vZGVCID0gdGhpcy5zdGF0ZW1lbnROb2RlLCAgLy8vXG4gICAgICAgICAgc3RhdGVtZW50U3RyaW5nQiA9IGxvY2FsQ29udGV4dEIubm9kZUFzU3RyaW5nKHN0YXRlbWVudE5vZGVCKSxcbiAgICAgICAgICBtZXRhdmFyaWFibGVOb2RlQSA9IHRoaXMubWV0YXZhcmlhYmxlTm9kZSwgIC8vL1xuICAgICAgICAgIG1ldGF2YXJpYWJsZVN0cmluZ0EgPSBsb2NhbENvbnRleHRBLm5vZGVBc1N0cmluZyhtZXRhdmFyaWFibGVOb2RlQSk7XG5cbiAgICBpZiAodGhpcy5zdWJzdGl0dXRpb24gPT09IG51bGwpIHtcbiAgICAgIHN0cmluZyA9IGBbJHtzdGF0ZW1lbnRTdHJpbmdCfSBmb3IgJHttZXRhdmFyaWFibGVTdHJpbmdBfV1gO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBzdWJzdGl0dXRpb25TdHJpbmcgPSB0aGlzLnN1YnN0aXR1dGlvbi5hc1N0cmluZyhsb2NhbENvbnRleHRBLCBsb2NhbENvbnRleHRBKTtcblxuICAgICAgc3RyaW5nID0gYFske3N0YXRlbWVudFN0cmluZ0J9IGZvciAke21ldGF2YXJpYWJsZVN0cmluZ0F9JHtzdWJzdGl0dXRpb25TdHJpbmd9XWA7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN0cmluZztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tU3Vic3RpdHV0aW9uTm9kZShzdWJzdGl0dXRpb25Ob2RlKSB7XG4gICAgbGV0IHN0YXRlbWVudEZvck1ldGF2YXJpYWJsZVN1YnN0aXR1dGlvbiA9IG51bGw7XG5cbiAgICBsZXQgc3RhdGVtZW50Tm9kZSA9IHN0YXRlbWVudE5vZGVRdWVyeShzdWJzdGl0dXRpb25Ob2RlKSxcbiAgICAgICAgbWV0YXZhcmlhYmxlTm9kZSA9IG1ldGF2YXJpYWJsZU5vZGVRdWVyeShzdWJzdGl0dXRpb25Ob2RlKTtcblxuICAgIGlmIChzdGF0ZW1lbnROb2RlICE9PSBudWxsKSB7XG4gICAgICBzdGF0ZW1lbnROb2RlID0gc3RyaXBCcmFja2V0c0Zyb21TdGF0ZW1lbnQoc3RhdGVtZW50Tm9kZSk7IC8vL1xuXG4gICAgICBjb25zdCBzdWJzdGl0dXRpb24gPSBudWxsO1xuXG4gICAgICBzdGF0ZW1lbnRGb3JNZXRhdmFyaWFibGVTdWJzdGl0dXRpb24gPSBuZXcgU3RhdGVtZW50Rm9yTWV0YXZhcmlhYmxlU3Vic3RpdHV0aW9uKHN0YXRlbWVudE5vZGUsIG1ldGF2YXJpYWJsZU5vZGUsIHN1YnN0aXR1dGlvbik7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN0YXRlbWVudEZvck1ldGF2YXJpYWJsZVN1YnN0aXR1dGlvbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tU3RhdGVtZW50Tm9kZUFuZE1ldGF2YXJpYWJsZU5vZGUoc3RhdGVtZW50Tm9kZSwgbWV0YXZhcmlhYmxlTm9kZSkge1xuICAgIHN0YXRlbWVudE5vZGUgPSBzdHJpcEJyYWNrZXRzRnJvbVN0YXRlbWVudChzdGF0ZW1lbnROb2RlKTsgLy8vXG5cbiAgICBjb25zdCBzdWJzdGl0dXRpb24gPSBudWxsLFxuICAgICAgICAgIHN0YXRlbWVudEZvck1ldGF2YXJpYWJsZVN1YnN0aXR1dGlvbiA9IG5ldyBTdGF0ZW1lbnRGb3JNZXRhdmFyaWFibGVTdWJzdGl0dXRpb24oc3RhdGVtZW50Tm9kZSwgbWV0YXZhcmlhYmxlTm9kZSwgc3Vic3RpdHV0aW9uKTtcblxuICAgIHJldHVybiBzdGF0ZW1lbnRGb3JNZXRhdmFyaWFibGVTdWJzdGl0dXRpb247XG4gIH1cblxuICBzdGF0aWMgZnJvbVN0YXRlbWVudE5vZGVNZXRhdmFyaWFibGVOb2RlQW5kU3Vic3RpdHV0aW9uTm9kZShzdGF0ZW1lbnROb2RlLCBtZXRhdmFyaWFibGVOb2RlLCBzdWJzdGl0dXRpb25Ob2RlKSB7XG4gICAgc3RhdGVtZW50Tm9kZSA9IHN0cmlwQnJhY2tldHNGcm9tU3RhdGVtZW50KHN0YXRlbWVudE5vZGUpOyAvLy9cblxuICAgIGNvbnN0IHN1YnN0aXR1dGlvbiA9IHN1YnN0aXR1dGlvbkZyb21TdWJzdGl0dXRpb25Ob2RlKHN1YnN0aXR1dGlvbk5vZGUpLFxuICAgICAgICAgIHN0YXRlbWVudEZvck1ldGF2YXJpYWJsZVN1YnN0aXR1dGlvbiA9IG5ldyBTdGF0ZW1lbnRGb3JNZXRhdmFyaWFibGVTdWJzdGl0dXRpb24oc3RhdGVtZW50Tm9kZSwgbWV0YXZhcmlhYmxlTm9kZSwgc3Vic3RpdHV0aW9uKTtcblxuICAgIHJldHVybiBzdGF0ZW1lbnRGb3JNZXRhdmFyaWFibGVTdWJzdGl0dXRpb247XG4gIH1cbn1cblxuZnVuY3Rpb24gc3Vic3RpdHV0aW9uRnJvbVN1YnN0aXR1dGlvbk5vZGUoc3Vic3RpdHV0aW9uTm9kZSkge1xuICBsZXQgc3Vic3RpdHV0aW9uID0gbnVsbDtcblxuICBpZiAoc3Vic3RpdHV0aW9uID09PSBudWxsKSB7XG4gICAgY29uc3QgdGVybUZvclZhcmlhYmxlU3Vic3RpdHV0aW9uID0gVGVybUZvclZhcmlhYmxlU3Vic3RpdHV0aW9uLmZyb21TdWJzdGl0dXRpb25Ob2RlKHN1YnN0aXR1dGlvbk5vZGUpO1xuXG4gICAgaWYgKHRlcm1Gb3JWYXJpYWJsZVN1YnN0aXR1dGlvbiAhPT0gbnVsbCkge1xuICAgICAgc3Vic3RpdHV0aW9uID0gdGVybUZvclZhcmlhYmxlU3Vic3RpdHV0aW9uOyAvLy9cbiAgICB9XG4gIH1cblxuICBpZiAoc3Vic3RpdHV0aW9uID09PSBudWxsKSB7XG4gICAgY29uc3Qgc3RhdGVtZW50Rm9yTWV0YXZhcmlhYmxlU3Vic3RpdHV0aW9uID0gU3RhdGVtZW50Rm9yTWV0YXZhcmlhYmxlU3Vic3RpdHV0aW9uLmZyb21TdWJzdGl0dXRpb25Ob2RlKHN1YnN0aXR1dGlvbk5vZGUpO1xuXG4gICAgaWYgKHN0YXRlbWVudEZvck1ldGF2YXJpYWJsZVN1YnN0aXR1dGlvbiAhPT0gbnVsbCkge1xuICAgICAgc3Vic3RpdHV0aW9uID0gc3RhdGVtZW50Rm9yTWV0YXZhcmlhYmxlU3Vic3RpdHV0aW9uOyAgLy8vXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHN1YnN0aXR1dGlvbjtcbn1cblxuZnVuY3Rpb24gdHJhbnNmb3JtU3RhdGVtZW50Tm9kZShzdGF0ZW1lbnROb2RlLCBzdWJzdGl0dXRpb25zKSB7XG4gIGxldCB0cmFuc2Zvcm1lZFN0YXRlbWVudE5vZGUgPSBudWxsO1xuXG4gIGNvbnN0IG1ldGF2YXJpYWJsZU5vZGUgPSBtZXRhdmFyaWFibGVOb2RlUXVlcnkoc3RhdGVtZW50Tm9kZSk7XG5cbiAgaWYgKG1ldGF2YXJpYWJsZU5vZGUgIT09IG51bGwpIHtcbiAgICBzdWJzdGl0dXRpb25zLnNvbWVTdWJzdGl0dXRpb24oKHN1YnN0aXR1dGlvbikgPT4ge1xuICAgICAgY29uc3Qgc3Vic3RpdHV0aW9uTWF0Y2hlc1ZhcmlhYmxlTm9kZSA9IHN1YnN0aXR1dGlvbi5tYXRjaE1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSk7XG5cbiAgICAgIGlmIChzdWJzdGl0dXRpb25NYXRjaGVzVmFyaWFibGVOb2RlKSB7XG4gICAgICAgIGNvbnN0IHN0YXRlbWVudE5vZGUgPSBzdWJzdGl0dXRpb24uZ2V0U3RhdGVtZW50Tm9kZSgpO1xuXG4gICAgICAgIHRyYW5zZm9ybWVkU3RhdGVtZW50Tm9kZSA9IHN0YXRlbWVudE5vZGU7IC8vLy9cblxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHJldHVybiB0cmFuc2Zvcm1lZFN0YXRlbWVudE5vZGU7XG59XG4iXSwibmFtZXMiOlsiU3RhdGVtZW50Rm9yTWV0YXZhcmlhYmxlU3Vic3RpdHV0aW9uIiwic3RhdGVtZW50Tm9kZVF1ZXJ5Iiwibm9kZVF1ZXJ5IiwibWV0YXZhcmlhYmxlTm9kZVF1ZXJ5Iiwic3RhdGVtZW50Tm9kZSIsIm1ldGF2YXJpYWJsZU5vZGUiLCJzdWJzdGl0dXRpb24iLCJnZXRTdGF0ZW1lbnROb2RlIiwiZ2V0TWV0YXZhcmlhYmxlTm9kZSIsImdldFN1YnN0aXR1dGlvbiIsImdldE5vZGUiLCJub2RlIiwiaXNTaW1wbGUiLCJzaW1wbGUiLCJ0cmFuc2Zvcm1lZCIsInN1YnN0aXR1dGlvbnMiLCJ0cmFuc2Zvcm1lZFN1YnN0aXR1dGlvbiIsInRyYW5zZm9ybWVkU3RhdGVtZW50Tm9kZSIsInRyYW5zZm9ybVN0YXRlbWVudE5vZGUiLCJzdGF0ZW1lbnRGb3JNZXRhdmFyaWFibGVTdWJzdGl0dXRpb24iLCJtYXRjaFN0YXRlbWVudE5vZGUiLCJzdHJpcEJyYWNrZXRzRnJvbVN0YXRlbWVudCIsInN0YXRlbWVudE5vZGVNYXRjaGVzIiwibWF0Y2giLCJtYXRjaE1ldGF2YXJpYWJsZU5vZGUiLCJtZXRhdmFyaWFibGVOb2RlTWF0Y2hlcyIsIm1hdGNoTWV0YXZhcmlhYmxlTm9kZUFuZFN1YnN0aXR1dGlvbk5vZGUiLCJzdWJzdGl0dXRpb25Ob2RlIiwibWV0YXZhcmlhYmxlTm9kZUFuZFN1YnN0aXR1dGlvbk5vZGVNYXRjaGVzIiwiYXNTdHJpbmciLCJsb2NhbENvbnRleHRBIiwibG9jYWxDb250ZXh0QiIsInN0cmluZyIsInN0YXRlbWVudE5vZGVCIiwic3RhdGVtZW50U3RyaW5nQiIsIm5vZGVBc1N0cmluZyIsIm1ldGF2YXJpYWJsZU5vZGVBIiwibWV0YXZhcmlhYmxlU3RyaW5nQSIsInN1YnN0aXR1dGlvblN0cmluZyIsImZyb21TdWJzdGl0dXRpb25Ob2RlIiwiZnJvbVN0YXRlbWVudE5vZGVBbmRNZXRhdmFyaWFibGVOb2RlIiwiZnJvbVN0YXRlbWVudE5vZGVNZXRhdmFyaWFibGVOb2RlQW5kU3Vic3RpdHV0aW9uTm9kZSIsInN1YnN0aXR1dGlvbkZyb21TdWJzdGl0dXRpb25Ob2RlIiwiU3Vic3RpdHV0aW9uIiwidGVybUZvclZhcmlhYmxlU3Vic3RpdHV0aW9uIiwiVGVybUZvclZhcmlhYmxlU3Vic3RpdHV0aW9uIiwic29tZVN1YnN0aXR1dGlvbiIsInN1YnN0aXR1dGlvbk1hdGNoZXNWYXJpYWJsZU5vZGUiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBV3FCQTs7O21FQVRJO3NFQUNlO3FCQUVkO3dCQUNpQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUUzQyxJQUFNQyxxQkFBcUJDLElBQUFBLGdCQUFTLEVBQUMsNkJBQy9CQyx3QkFBd0JELElBQUFBLGdCQUFTLEVBQUM7QUFFekIsSUFBQSxBQUFNRixxREFBTjtjQUFNQTthQUFBQSxxQ0FDUEksYUFBYSxFQUFFQyxnQkFBZ0IsRUFBRUMsWUFBWTtn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