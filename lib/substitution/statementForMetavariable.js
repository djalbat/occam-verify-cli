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
var _frameForMetavariable = /*#__PURE__*/ _interop_require_default(require("../substitution/frameForMetavariable"));
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
var statementMetavariableNodeQuery = (0, _query.nodeQuery)("/statement/metavariable!");
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
        var frameForMetavariableSubstitution = _frameForMetavariable.default.fromSubstitutionNode(substitutionNode);
        if (frameForMetavariableSubstitution !== null) {
            substitution = frameForMetavariableSubstitution; ///
        }
    }
    return substitution;
}
function transformStatementNode(statementNode, substitutions) {
    var transformedStatementNode = null;
    var statementMetavariableNode = statementMetavariableNodeQuery(statementNode);
    if (statementMetavariableNode !== null) {
        var metavariableNode = statementMetavariableNode; ///
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zdWJzdGl0dXRpb24vc3RhdGVtZW50Rm9yTWV0YXZhcmlhYmxlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgU3Vic3RpdHV0aW9uIGZyb20gXCIuLi9zdWJzdGl0dXRpb25cIjtcbmltcG9ydCBUZXJtRm9yVmFyaWFibGVTdWJzdGl0dXRpb24gZnJvbSBcIi4uL3N1YnN0aXR1dGlvbi90ZXJtRm9yVmFyaWFibGVcIjtcbmltcG9ydCBGcmFtZUZvck1ldGF2YXJpYWJsZVN1YnN0aXR1dGlvbiBmcm9tIFwiLi4vc3Vic3RpdHV0aW9uL2ZyYW1lRm9yTWV0YXZhcmlhYmxlXCI7XG5cbmltcG9ydCB7IG5vZGVRdWVyeSB9IGZyb20gXCIuLi91dGlsaXRpZXMvcXVlcnlcIjtcbmltcG9ydCB7IHN0cmlwQnJhY2tldHNGcm9tU3RhdGVtZW50IH0gZnJvbSBcIi4uL3V0aWxpdGllcy9icmFja2V0c1wiO1xuXG5jb25zdCBzdGF0ZW1lbnRNZXRhdmFyaWFibGVOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvc3RhdGVtZW50L21ldGF2YXJpYWJsZSFcIik7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFN0YXRlbWVudEZvck1ldGF2YXJpYWJsZVN1YnN0aXR1dGlvbiBleHRlbmRzIFN1YnN0aXR1dGlvbiB7XG4gIGNvbnN0cnVjdG9yKHN0YXRlbWVudE5vZGUsIG1ldGF2YXJpYWJsZU5vZGUsIHN1YnN0aXR1dGlvbikge1xuICAgIHN1cGVyKCk7XG5cbiAgICB0aGlzLnN0YXRlbWVudE5vZGUgPSBzdGF0ZW1lbnROb2RlO1xuICAgIHRoaXMubWV0YXZhcmlhYmxlTm9kZSA9IG1ldGF2YXJpYWJsZU5vZGU7XG4gICAgdGhpcy5zdWJzdGl0dXRpb24gPSBzdWJzdGl0dXRpb247XG4gIH1cblxuICBnZXRTdGF0ZW1lbnROb2RlKCkge1xuICAgIHJldHVybiB0aGlzLnN0YXRlbWVudE5vZGU7XG4gIH1cblxuICBnZXRNZXRhdmFyaWFibGVOb2RlKCkge1xuICAgIHJldHVybiB0aGlzLm1ldGF2YXJpYWJsZU5vZGU7XG4gIH1cblxuICBnZXRTdWJzdGl0dXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuc3Vic3RpdHV0aW9uO1xuICB9XG5cbiAgZ2V0Tm9kZSgpIHtcbiAgICBjb25zdCBub2RlID0gdGhpcy5zdGF0ZW1lbnROb2RlOyAgLy8vXG5cbiAgICByZXR1cm4gbm9kZTtcbiAgfVxuXG4gIGlzU2ltcGxlKCkge1xuICAgIGNvbnN0IHNpbXBsZSA9ICh0aGlzLnN1YnN0aXR1dGlvbiA9PT0gbnVsbCk7XG5cbiAgICByZXR1cm4gc2ltcGxlO1xuICB9XG5cbiAgdHJhbnNmb3JtZWQoc3Vic3RpdHV0aW9ucykge1xuICAgIGxldCB0cmFuc2Zvcm1lZFN1YnN0aXR1dGlvbiA9IG51bGw7XG5cbiAgICBjb25zdCB0cmFuc2Zvcm1lZFN0YXRlbWVudE5vZGUgPSB0cmFuc2Zvcm1TdGF0ZW1lbnROb2RlKHRoaXMuc3RhdGVtZW50Tm9kZSwgc3Vic3RpdHV0aW9ucyk7XG5cbiAgICBpZiAodHJhbnNmb3JtZWRTdGF0ZW1lbnROb2RlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBzdWJzdGl0dXRpb24gPSBudWxsLFxuICAgICAgICAgICAgc3RhdGVtZW50Tm9kZSA9IHRyYW5zZm9ybWVkU3RhdGVtZW50Tm9kZSwgLy8vXG4gICAgICAgICAgICBtZXRhdmFyaWFibGVOb2RlID0gdGhpcy5tZXRhdmFyaWFibGVOb2RlLCAvLy9cbiAgICAgICAgICAgIHN0YXRlbWVudEZvck1ldGF2YXJpYWJsZVN1YnN0aXR1dGlvbiA9IG5ldyBTdGF0ZW1lbnRGb3JNZXRhdmFyaWFibGVTdWJzdGl0dXRpb24oc3RhdGVtZW50Tm9kZSwgbWV0YXZhcmlhYmxlTm9kZSwgc3Vic3RpdHV0aW9uKTtcblxuICAgICAgdHJhbnNmb3JtZWRTdWJzdGl0dXRpb24gPSBzdGF0ZW1lbnRGb3JNZXRhdmFyaWFibGVTdWJzdGl0dXRpb247ICAvLy9cbiAgICB9XG5cbiAgICByZXR1cm4gdHJhbnNmb3JtZWRTdWJzdGl0dXRpb247XG4gIH1cblxuICBtYXRjaFN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSkge1xuICAgIHN0YXRlbWVudE5vZGUgPSBzdHJpcEJyYWNrZXRzRnJvbVN0YXRlbWVudChzdGF0ZW1lbnROb2RlKTsgLy8vXG5cbiAgICBjb25zdCBzdGF0ZW1lbnROb2RlTWF0Y2hlcyA9IHRoaXMuc3RhdGVtZW50Tm9kZS5tYXRjaChzdGF0ZW1lbnROb2RlKTtcblxuICAgIHJldHVybiBzdGF0ZW1lbnROb2RlTWF0Y2hlcztcbiAgfVxuXG4gIG1hdGNoTWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlKSB7XG4gICAgY29uc3QgbWV0YXZhcmlhYmxlTm9kZU1hdGNoZXMgPSB0aGlzLm1ldGF2YXJpYWJsZU5vZGUubWF0Y2gobWV0YXZhcmlhYmxlTm9kZSk7XG5cbiAgICByZXR1cm4gbWV0YXZhcmlhYmxlTm9kZU1hdGNoZXM7XG4gIH1cblxuICBhc1N0cmluZyhsb2NhbENvbnRleHRBLCBsb2NhbENvbnRleHRCKSB7XG4gICAgbGV0IHN0cmluZztcblxuICAgIGNvbnN0IHN0YXRlbWVudE5vZGVCID0gdGhpcy5zdGF0ZW1lbnROb2RlLCAgLy8vXG4gICAgICAgICAgc3RhdGVtZW50U3RyaW5nQiA9IGxvY2FsQ29udGV4dEIubm9kZUFzU3RyaW5nKHN0YXRlbWVudE5vZGVCKSxcbiAgICAgICAgICBtZXRhdmFyaWFibGVOb2RlQSA9IHRoaXMubWV0YXZhcmlhYmxlTm9kZSwgIC8vL1xuICAgICAgICAgIG1ldGF2YXJpYWJsZVN0cmluZ0EgPSBsb2NhbENvbnRleHRBLm5vZGVBc1N0cmluZyhtZXRhdmFyaWFibGVOb2RlQSk7XG5cbiAgICBpZiAodGhpcy5zdWJzdGl0dXRpb24gPT09IG51bGwpIHtcbiAgICAgIHN0cmluZyA9IGBbJHtzdGF0ZW1lbnRTdHJpbmdCfSBmb3IgJHttZXRhdmFyaWFibGVTdHJpbmdBfV1gO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBzdWJzdGl0dXRpb25TdHJpbmcgPSB0aGlzLnN1YnN0aXR1dGlvbi5hc1N0cmluZyhsb2NhbENvbnRleHRBLCBsb2NhbENvbnRleHRBKTtcblxuICAgICAgc3RyaW5nID0gYFske3N0YXRlbWVudFN0cmluZ0J9IGZvciAke21ldGF2YXJpYWJsZVN0cmluZ0F9JHtzdWJzdGl0dXRpb25TdHJpbmd9XWA7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN0cmluZztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tU3RhdGVtZW50Tm9kZUFuZE1ldGF2YXJpYWJsZU5vZGUoc3RhdGVtZW50Tm9kZSwgbWV0YXZhcmlhYmxlTm9kZSkge1xuICAgIHN0YXRlbWVudE5vZGUgPSBzdHJpcEJyYWNrZXRzRnJvbVN0YXRlbWVudChzdGF0ZW1lbnROb2RlKTsgLy8vXG5cbiAgICBjb25zdCBzdWJzdGl0dXRpb24gPSBudWxsLFxuICAgICAgICAgIHN0YXRlbWVudEZvck1ldGF2YXJpYWJsZVN1YnN0aXR1dGlvbiA9IG5ldyBTdGF0ZW1lbnRGb3JNZXRhdmFyaWFibGVTdWJzdGl0dXRpb24oc3RhdGVtZW50Tm9kZSwgbWV0YXZhcmlhYmxlTm9kZSwgc3Vic3RpdHV0aW9uKTtcblxuICAgIHJldHVybiBzdGF0ZW1lbnRGb3JNZXRhdmFyaWFibGVTdWJzdGl0dXRpb247XG4gIH1cblxuICBzdGF0aWMgZnJvbVN0YXRlbWVudE5vZGVNZXRhdmFyaWFibGVOb2RlQW5kU3Vic3RpdHV0aW9uTm9kZShzdGF0ZW1lbnROb2RlLCBtZXRhdmFyaWFibGVOb2RlLCBzdWJzdGl0dXRpb25Ob2RlKSB7XG4gICAgc3RhdGVtZW50Tm9kZSA9IHN0cmlwQnJhY2tldHNGcm9tU3RhdGVtZW50KHN0YXRlbWVudE5vZGUpOyAvLy9cblxuICAgIGNvbnN0IHN1YnN0aXR1dGlvbiA9IHN1YnN0aXR1dGlvbkZyb21TdWJzdGl0dXRpb25Ob2RlKHN1YnN0aXR1dGlvbk5vZGUpLFxuICAgICAgICAgIHN0YXRlbWVudEZvck1ldGF2YXJpYWJsZVN1YnN0aXR1dGlvbiA9IG5ldyBTdGF0ZW1lbnRGb3JNZXRhdmFyaWFibGVTdWJzdGl0dXRpb24oc3RhdGVtZW50Tm9kZSwgbWV0YXZhcmlhYmxlTm9kZSwgc3Vic3RpdHV0aW9uKTtcblxuICAgIHJldHVybiBzdGF0ZW1lbnRGb3JNZXRhdmFyaWFibGVTdWJzdGl0dXRpb247XG4gIH1cbn1cblxuZnVuY3Rpb24gc3Vic3RpdHV0aW9uRnJvbVN1YnN0aXR1dGlvbk5vZGUoc3Vic3RpdHV0aW9uTm9kZSkge1xuICBsZXQgc3Vic3RpdHV0aW9uID0gbnVsbDtcblxuICBpZiAoc3Vic3RpdHV0aW9uID09PSBudWxsKSB7XG4gICAgY29uc3QgdGVybUZvclZhcmlhYmxlU3Vic3RpdHV0aW9uID0gVGVybUZvclZhcmlhYmxlU3Vic3RpdHV0aW9uLmZyb21TdWJzdGl0dXRpb25Ob2RlKHN1YnN0aXR1dGlvbk5vZGUpO1xuXG4gICAgaWYgKHRlcm1Gb3JWYXJpYWJsZVN1YnN0aXR1dGlvbiAhPT0gbnVsbCkge1xuICAgICAgc3Vic3RpdHV0aW9uID0gdGVybUZvclZhcmlhYmxlU3Vic3RpdHV0aW9uOyAvLy9cbiAgICB9XG4gIH1cblxuICBpZiAoc3Vic3RpdHV0aW9uID09PSBudWxsKSB7XG4gICAgY29uc3QgZnJhbWVGb3JNZXRhdmFyaWFibGVTdWJzdGl0dXRpb24gPSBGcmFtZUZvck1ldGF2YXJpYWJsZVN1YnN0aXR1dGlvbi5mcm9tU3Vic3RpdHV0aW9uTm9kZShzdWJzdGl0dXRpb25Ob2RlKTtcblxuICAgIGlmIChmcmFtZUZvck1ldGF2YXJpYWJsZVN1YnN0aXR1dGlvbiAhPT0gbnVsbCkge1xuICAgICAgc3Vic3RpdHV0aW9uID0gZnJhbWVGb3JNZXRhdmFyaWFibGVTdWJzdGl0dXRpb247ICAvLy9cbiAgICB9XG4gIH1cblxuICByZXR1cm4gc3Vic3RpdHV0aW9uO1xufVxuXG5mdW5jdGlvbiB0cmFuc2Zvcm1TdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUsIHN1YnN0aXR1dGlvbnMpIHtcbiAgbGV0IHRyYW5zZm9ybWVkU3RhdGVtZW50Tm9kZSA9IG51bGw7XG5cbiAgY29uc3Qgc3RhdGVtZW50TWV0YXZhcmlhYmxlTm9kZSA9IHN0YXRlbWVudE1ldGF2YXJpYWJsZU5vZGVRdWVyeShzdGF0ZW1lbnROb2RlKTtcblxuICBpZiAoc3RhdGVtZW50TWV0YXZhcmlhYmxlTm9kZSAhPT0gbnVsbCkge1xuICAgIGNvbnN0IG1ldGF2YXJpYWJsZU5vZGUgPSBzdGF0ZW1lbnRNZXRhdmFyaWFibGVOb2RlOyAvLy9cblxuICAgIHN1YnN0aXR1dGlvbnMuc29tZVN1YnN0aXR1dGlvbigoc3Vic3RpdHV0aW9uKSA9PiB7XG4gICAgICBjb25zdCBzdWJzdGl0dXRpb25NYXRjaGVzVmFyaWFibGVOb2RlID0gc3Vic3RpdHV0aW9uLm1hdGNoTWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlKTtcblxuICAgICAgaWYgKHN1YnN0aXR1dGlvbk1hdGNoZXNWYXJpYWJsZU5vZGUpIHtcbiAgICAgICAgY29uc3Qgc3RhdGVtZW50Tm9kZSA9IHN1YnN0aXR1dGlvbi5nZXRTdGF0ZW1lbnROb2RlKCk7XG5cbiAgICAgICAgdHJhbnNmb3JtZWRTdGF0ZW1lbnROb2RlID0gc3RhdGVtZW50Tm9kZTsgLy8vL1xuXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIHRyYW5zZm9ybWVkU3RhdGVtZW50Tm9kZTtcbn1cbiJdLCJuYW1lcyI6WyJTdGF0ZW1lbnRGb3JNZXRhdmFyaWFibGVTdWJzdGl0dXRpb24iLCJzdGF0ZW1lbnRNZXRhdmFyaWFibGVOb2RlUXVlcnkiLCJub2RlUXVlcnkiLCJzdGF0ZW1lbnROb2RlIiwibWV0YXZhcmlhYmxlTm9kZSIsInN1YnN0aXR1dGlvbiIsImdldFN0YXRlbWVudE5vZGUiLCJnZXRNZXRhdmFyaWFibGVOb2RlIiwiZ2V0U3Vic3RpdHV0aW9uIiwiZ2V0Tm9kZSIsIm5vZGUiLCJpc1NpbXBsZSIsInNpbXBsZSIsInRyYW5zZm9ybWVkIiwic3Vic3RpdHV0aW9ucyIsInRyYW5zZm9ybWVkU3Vic3RpdHV0aW9uIiwidHJhbnNmb3JtZWRTdGF0ZW1lbnROb2RlIiwidHJhbnNmb3JtU3RhdGVtZW50Tm9kZSIsInN0YXRlbWVudEZvck1ldGF2YXJpYWJsZVN1YnN0aXR1dGlvbiIsIm1hdGNoU3RhdGVtZW50Tm9kZSIsInN0cmlwQnJhY2tldHNGcm9tU3RhdGVtZW50Iiwic3RhdGVtZW50Tm9kZU1hdGNoZXMiLCJtYXRjaCIsIm1hdGNoTWV0YXZhcmlhYmxlTm9kZSIsIm1ldGF2YXJpYWJsZU5vZGVNYXRjaGVzIiwiYXNTdHJpbmciLCJsb2NhbENvbnRleHRBIiwibG9jYWxDb250ZXh0QiIsInN0cmluZyIsInN0YXRlbWVudE5vZGVCIiwic3RhdGVtZW50U3RyaW5nQiIsIm5vZGVBc1N0cmluZyIsIm1ldGF2YXJpYWJsZU5vZGVBIiwibWV0YXZhcmlhYmxlU3RyaW5nQSIsInN1YnN0aXR1dGlvblN0cmluZyIsImZyb21TdGF0ZW1lbnROb2RlQW5kTWV0YXZhcmlhYmxlTm9kZSIsImZyb21TdGF0ZW1lbnROb2RlTWV0YXZhcmlhYmxlTm9kZUFuZFN1YnN0aXR1dGlvbk5vZGUiLCJzdWJzdGl0dXRpb25Ob2RlIiwic3Vic3RpdHV0aW9uRnJvbVN1YnN0aXR1dGlvbk5vZGUiLCJTdWJzdGl0dXRpb24iLCJ0ZXJtRm9yVmFyaWFibGVTdWJzdGl0dXRpb24iLCJUZXJtRm9yVmFyaWFibGVTdWJzdGl0dXRpb24iLCJmcm9tU3Vic3RpdHV0aW9uTm9kZSIsImZyYW1lRm9yTWV0YXZhcmlhYmxlU3Vic3RpdHV0aW9uIiwiRnJhbWVGb3JNZXRhdmFyaWFibGVTdWJzdGl0dXRpb24iLCJzdGF0ZW1lbnRNZXRhdmFyaWFibGVOb2RlIiwic29tZVN1YnN0aXR1dGlvbiIsInN1YnN0aXR1dGlvbk1hdGNoZXNWYXJpYWJsZU5vZGUiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBV3FCQTs7O21FQVRJO3NFQUNlOzJFQUNLO3FCQUVuQjt3QkFDaUI7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