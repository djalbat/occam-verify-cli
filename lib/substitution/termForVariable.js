"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return TermForVariableSubstitution;
    }
});
var _substitution = /*#__PURE__*/ _interop_require_default(require("../substitution"));
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
var termNodeQuery = (0, _query.nodeQuery)("/*/term!"), variableNodeQuery = (0, _query.nodeQuery)("/*/variable!");
var TermForVariableSubstitution = /*#__PURE__*/ function(Substitution) {
    _inherits(TermForVariableSubstitution, Substitution);
    function TermForVariableSubstitution(termNode, variableNode) {
        _class_call_check(this, TermForVariableSubstitution);
        var _this;
        _this = _call_super(this, TermForVariableSubstitution);
        _this.termNode = termNode;
        _this.variableNode = variableNode;
        return _this;
    }
    _create_class(TermForVariableSubstitution, [
        {
            key: "getTermNode",
            value: function getTermNode() {
                return this.termNode;
            }
        },
        {
            key: "getVariableNode",
            value: function getVariableNode() {
                return this.variableNode;
            }
        },
        {
            key: "getNode",
            value: function getNode() {
                var node = this.termNode; ///
                return node;
            }
        },
        {
            key: "transformed",
            value: function transformed(substitutions) {
                var transformedSubstitution = null;
                var transformedTermNode = transformTermNode(this.termNode, substitutions), transformedVariableNode = transformVariableNode(this.variableNode, substitutions);
                if (transformedTermNode !== null && transformedVariableNode !== null) {
                    var termNode = transformedTermNode, variableNode = transformedVariableNode, termForVariableSubstitution = new TermForVariableSubstitution(termNode, variableNode);
                    transformedSubstitution = termForVariableSubstitution; ///
                }
                return transformedSubstitution;
            }
        },
        {
            key: "transformedTermNode",
            value: function transformedTermNode(substitutions) {
                var transformedSubstitution = null;
                var transformedTermNode = transformTermNode(this.termNode, substitutions);
                if (transformedTermNode !== null) {
                    var termNode = transformedTermNode, variableNode = this.variableNode, termForVariableSubstitution = new TermForVariableSubstitution(termNode, variableNode);
                    transformedSubstitution = termForVariableSubstitution; ///
                }
                return transformedSubstitution;
            }
        },
        {
            key: "transformedVariableNode",
            value: function transformedVariableNode(substitutions) {
                var transformedSubstitution = null;
                var transformedVariableNode = transformVariableNode(this.variableNode, substitutions);
                if (transformedVariableNode !== null) {
                    var termNode = this.termNode, variableNode = transformedVariableNode, termForVariableSubstitution = new TermForVariableSubstitution(termNode, variableNode);
                    transformedSubstitution = termForVariableSubstitution; ///
                }
                return transformedSubstitution;
            }
        },
        {
            key: "match",
            value: function match(substitution) {
                var termNode = substitution.getTermNode(), variableNode = substitution.getVariableNode(), matchesTermNode = this.matchTermNode(termNode), matchesVariableNode = this.matchVariableNode(variableNode), matches = matchesTermNode && matchesVariableNode;
                return matches;
            }
        },
        {
            key: "matchTermNode",
            value: function matchTermNode(termNode) {
                termNode = (0, _brackets.stripBracketsFromTerm)(termNode); ///
                var matchesTermNode = this.termNode.match(termNode);
                return matchesTermNode;
            }
        },
        {
            key: "matchVariableNode",
            value: function matchVariableNode(variableNode) {
                var matchesVariableNode = this.variableNode.match(variableNode);
                return matchesVariableNode;
            }
        },
        {
            key: "unifyWithEquivalence",
            value: function unifyWithEquivalence(equivalence, substitutions, localContextA, localContextB) {
                var unifiedWithEquivalence;
                var equivalenceMatchesTermNode = equivalence.matchTermNode(this.termNode);
                if (equivalenceMatchesTermNode) {
                    var equivalenceMatchesVariableNode = equivalence.matchVariableNode(this.variableNode);
                    if (equivalenceMatchesVariableNode) {
                        unifiedWithEquivalence = true;
                    }
                }
                return unifiedWithEquivalence;
            }
        },
        {
            key: "asString",
            value: function asString(localContextA, localContextB) {
                var termNodeB = this.termNode, termStringB = localContextB.nodeAsString(termNodeB), variableNodeA = this.variableNode, variableStringA = localContextA.nodeAsString(variableNodeA);
                var string = "[".concat(termStringB, " for ").concat(variableStringA, "]");
                return string;
            }
        }
    ], [
        {
            key: "fromSubstitutionNode",
            value: function fromSubstitutionNode(substitutionNode) {
                var termNode = termNodeQuery(substitutionNode), variableNode = variableNodeQuery(substitutionNode);
                termNode = (0, _brackets.stripBracketsFromTerm)(termNode); ///
                var termForVariableSubstitution = new TermForVariableSubstitution(termNode, variableNode);
                return termForVariableSubstitution;
            }
        },
        {
            key: "fromTernNodeAndVariableNode",
            value: function fromTernNodeAndVariableNode(termNode, variableNode) {
                termNode = (0, _brackets.stripBracketsFromTerm)(termNode); ///
                var termForVariableSubstitution = new TermForVariableSubstitution(termNode, variableNode);
                return termForVariableSubstitution;
            }
        }
    ]);
    return TermForVariableSubstitution;
}(_substitution.default);
function transformTermNode(termNode, substitutions) {
    var transformedTermNode = null;
    var termVariableNode = variableNodeQuery(termNode);
    if (termVariableNode !== null) {
        substitutions.someSubstitution(function(substitution) {
            var substitutionMatchesVariableNode = substitution.matchVariableNode(termVariableNode);
            if (substitutionMatchesVariableNode) {
                var _$termNode = substitution.getTermNode();
                transformedTermNode = _$termNode; ////
                return true;
            }
        });
    }
    return transformedTermNode;
}
function transformVariableNode(variableNode, substitutions) {
    var transformedVariableNode = null;
    substitutions.someSubstitution(function(substitution) {
        var substitutionMatchesVariableNode = substitution.matchVariableNode(variableNode);
        if (substitutionMatchesVariableNode) {
            var termNode = substitution.getTermNode(), _$variableNode = variableNodeQuery(termNode);
            if (_$variableNode !== null) {
                transformedVariableNode = _$variableNode; ///
                return true;
            }
        }
    });
    return transformedVariableNode;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zdWJzdGl0dXRpb24vdGVybUZvclZhcmlhYmxlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgU3Vic3RpdHV0aW9uIGZyb20gXCIuLi9zdWJzdGl0dXRpb25cIjtcblxuaW1wb3J0IHsgbm9kZVF1ZXJ5IH0gZnJvbSBcIi4uL3V0aWxpdGllcy9xdWVyeVwiO1xuaW1wb3J0IHsgc3RyaXBCcmFja2V0c0Zyb21UZXJtIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9icmFja2V0c1wiO1xuXG5jb25zdCB0ZXJtTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiLyovdGVybSFcIiksXG4gICAgICB2YXJpYWJsZU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi8qL3ZhcmlhYmxlIVwiKTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGVybUZvclZhcmlhYmxlU3Vic3RpdHV0aW9uIGV4dGVuZHMgU3Vic3RpdHV0aW9uIHtcbiAgY29uc3RydWN0b3IodGVybU5vZGUsIHZhcmlhYmxlTm9kZSkge1xuICAgIHN1cGVyKCk7XG5cbiAgICB0aGlzLnRlcm1Ob2RlID0gdGVybU5vZGU7XG4gICAgdGhpcy52YXJpYWJsZU5vZGUgPSB2YXJpYWJsZU5vZGU7XG4gIH1cblxuICBnZXRUZXJtTm9kZSgpIHtcbiAgICByZXR1cm4gdGhpcy50ZXJtTm9kZTtcbiAgfVxuXG4gIGdldFZhcmlhYmxlTm9kZSgpIHtcbiAgICByZXR1cm4gdGhpcy52YXJpYWJsZU5vZGU7XG4gIH1cblxuICBnZXROb2RlKCkge1xuICAgIGNvbnN0IG5vZGUgPSB0aGlzLnRlcm1Ob2RlOyAvLy9cblxuICAgIHJldHVybiBub2RlO1xuICB9XG5cbiAgdHJhbnNmb3JtZWQoc3Vic3RpdHV0aW9ucykge1xuICAgIGxldCB0cmFuc2Zvcm1lZFN1YnN0aXR1dGlvbiA9IG51bGw7XG5cbiAgICBjb25zdCB0cmFuc2Zvcm1lZFRlcm1Ob2RlID0gdHJhbnNmb3JtVGVybU5vZGUodGhpcy50ZXJtTm9kZSwgc3Vic3RpdHV0aW9ucyksXG4gICAgICAgICAgdHJhbnNmb3JtZWRWYXJpYWJsZU5vZGUgPSB0cmFuc2Zvcm1WYXJpYWJsZU5vZGUodGhpcy52YXJpYWJsZU5vZGUsIHN1YnN0aXR1dGlvbnMpO1xuXG4gICAgaWYgKCh0cmFuc2Zvcm1lZFRlcm1Ob2RlICE9PSBudWxsKSAmJiAodHJhbnNmb3JtZWRWYXJpYWJsZU5vZGUgIT09IG51bGwpKSB7XG4gICAgICBjb25zdCB0ZXJtTm9kZSA9IHRyYW5zZm9ybWVkVGVybU5vZGUsIC8vL1xuICAgICAgICAgICAgdmFyaWFibGVOb2RlID0gdHJhbnNmb3JtZWRWYXJpYWJsZU5vZGUsIC8vL1xuICAgICAgICAgICAgdGVybUZvclZhcmlhYmxlU3Vic3RpdHV0aW9uID0gbmV3IFRlcm1Gb3JWYXJpYWJsZVN1YnN0aXR1dGlvbih0ZXJtTm9kZSwgdmFyaWFibGVOb2RlKTtcblxuICAgICAgdHJhbnNmb3JtZWRTdWJzdGl0dXRpb24gPSB0ZXJtRm9yVmFyaWFibGVTdWJzdGl0dXRpb247ICAvLy9cbiAgICB9XG5cbiAgICByZXR1cm4gdHJhbnNmb3JtZWRTdWJzdGl0dXRpb247XG4gIH1cblxuICB0cmFuc2Zvcm1lZFRlcm1Ob2RlKHN1YnN0aXR1dGlvbnMpIHtcbiAgICBsZXQgdHJhbnNmb3JtZWRTdWJzdGl0dXRpb24gPSBudWxsO1xuXG4gICAgY29uc3QgdHJhbnNmb3JtZWRUZXJtTm9kZSA9IHRyYW5zZm9ybVRlcm1Ob2RlKHRoaXMudGVybU5vZGUsIHN1YnN0aXR1dGlvbnMpO1xuXG4gICAgaWYgKHRyYW5zZm9ybWVkVGVybU5vZGUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHRlcm1Ob2RlID0gdHJhbnNmb3JtZWRUZXJtTm9kZSwgLy8vXG4gICAgICAgICAgICB2YXJpYWJsZU5vZGUgPSB0aGlzLnZhcmlhYmxlTm9kZSwgLy8vXG4gICAgICAgICAgICB0ZXJtRm9yVmFyaWFibGVTdWJzdGl0dXRpb24gPSBuZXcgVGVybUZvclZhcmlhYmxlU3Vic3RpdHV0aW9uKHRlcm1Ob2RlLCB2YXJpYWJsZU5vZGUpO1xuXG4gICAgICB0cmFuc2Zvcm1lZFN1YnN0aXR1dGlvbiA9IHRlcm1Gb3JWYXJpYWJsZVN1YnN0aXR1dGlvbjsgIC8vL1xuICAgIH1cblxuICAgIHJldHVybiB0cmFuc2Zvcm1lZFN1YnN0aXR1dGlvbjtcbiAgfVxuXG4gIHRyYW5zZm9ybWVkVmFyaWFibGVOb2RlKHN1YnN0aXR1dGlvbnMpIHtcbiAgICBsZXQgdHJhbnNmb3JtZWRTdWJzdGl0dXRpb24gPSBudWxsO1xuXG4gICAgY29uc3QgdHJhbnNmb3JtZWRWYXJpYWJsZU5vZGUgPSB0cmFuc2Zvcm1WYXJpYWJsZU5vZGUodGhpcy52YXJpYWJsZU5vZGUsIHN1YnN0aXR1dGlvbnMpO1xuXG4gICAgaWYgKHRyYW5zZm9ybWVkVmFyaWFibGVOb2RlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCB0ZXJtTm9kZSA9IHRoaXMudGVybU5vZGUsXG4gICAgICAgICAgICB2YXJpYWJsZU5vZGUgPSB0cmFuc2Zvcm1lZFZhcmlhYmxlTm9kZSwgLy8vXG4gICAgICAgICAgICB0ZXJtRm9yVmFyaWFibGVTdWJzdGl0dXRpb24gPSBuZXcgVGVybUZvclZhcmlhYmxlU3Vic3RpdHV0aW9uKHRlcm1Ob2RlLCB2YXJpYWJsZU5vZGUpO1xuXG4gICAgICB0cmFuc2Zvcm1lZFN1YnN0aXR1dGlvbiA9IHRlcm1Gb3JWYXJpYWJsZVN1YnN0aXR1dGlvbjsgIC8vL1xuICAgIH1cblxuICAgIHJldHVybiB0cmFuc2Zvcm1lZFN1YnN0aXR1dGlvbjtcbiAgfVxuXG4gIG1hdGNoKHN1YnN0aXR1dGlvbikge1xuICAgIGNvbnN0IHRlcm1Ob2RlID0gc3Vic3RpdHV0aW9uLmdldFRlcm1Ob2RlKCksXG4gICAgICAgICAgdmFyaWFibGVOb2RlID0gc3Vic3RpdHV0aW9uLmdldFZhcmlhYmxlTm9kZSgpLFxuICAgICAgICAgIG1hdGNoZXNUZXJtTm9kZSA9IHRoaXMubWF0Y2hUZXJtTm9kZSh0ZXJtTm9kZSksXG4gICAgICAgICAgbWF0Y2hlc1ZhcmlhYmxlTm9kZSA9IHRoaXMubWF0Y2hWYXJpYWJsZU5vZGUodmFyaWFibGVOb2RlKSxcbiAgICAgICAgICBtYXRjaGVzID0gKG1hdGNoZXNUZXJtTm9kZSAmJiBtYXRjaGVzVmFyaWFibGVOb2RlKTtcblxuICAgIHJldHVybiBtYXRjaGVzO1xuICB9XG5cbiAgbWF0Y2hUZXJtTm9kZSh0ZXJtTm9kZSkge1xuICAgIHRlcm1Ob2RlID0gc3RyaXBCcmFja2V0c0Zyb21UZXJtKHRlcm1Ob2RlKTsgLy8vXG5cbiAgICBjb25zdCBtYXRjaGVzVGVybU5vZGUgPSB0aGlzLnRlcm1Ob2RlLm1hdGNoKHRlcm1Ob2RlKTtcblxuICAgIHJldHVybiBtYXRjaGVzVGVybU5vZGU7XG4gIH1cblxuICBtYXRjaFZhcmlhYmxlTm9kZSh2YXJpYWJsZU5vZGUpIHtcbiAgICBjb25zdCBtYXRjaGVzVmFyaWFibGVOb2RlID0gdGhpcy52YXJpYWJsZU5vZGUubWF0Y2godmFyaWFibGVOb2RlKTtcblxuICAgIHJldHVybiBtYXRjaGVzVmFyaWFibGVOb2RlO1xuICB9XG5cbiAgdW5pZnlXaXRoRXF1aXZhbGVuY2UoZXF1aXZhbGVuY2UsIHN1YnN0aXR1dGlvbnMsIGxvY2FsQ29udGV4dEEsIGxvY2FsQ29udGV4dEIpIHtcbiAgICBsZXQgdW5pZmllZFdpdGhFcXVpdmFsZW5jZTtcblxuICAgIGNvbnN0IGVxdWl2YWxlbmNlTWF0Y2hlc1Rlcm1Ob2RlID0gZXF1aXZhbGVuY2UubWF0Y2hUZXJtTm9kZSh0aGlzLnRlcm1Ob2RlKTtcblxuICAgIGlmIChlcXVpdmFsZW5jZU1hdGNoZXNUZXJtTm9kZSkge1xuICAgICAgY29uc3QgZXF1aXZhbGVuY2VNYXRjaGVzVmFyaWFibGVOb2RlID0gZXF1aXZhbGVuY2UubWF0Y2hWYXJpYWJsZU5vZGUodGhpcy52YXJpYWJsZU5vZGUpO1xuXG4gICAgICBpZiAoZXF1aXZhbGVuY2VNYXRjaGVzVmFyaWFibGVOb2RlKSB7XG4gICAgICAgICAgdW5pZmllZFdpdGhFcXVpdmFsZW5jZSA9IHRydWU7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdW5pZmllZFdpdGhFcXVpdmFsZW5jZTtcbiAgfVxuXG4gIGFzU3RyaW5nKGxvY2FsQ29udGV4dEEsIGxvY2FsQ29udGV4dEIpIHtcbiAgICBjb25zdCB0ZXJtTm9kZUIgPSB0aGlzLnRlcm1Ob2RlLCAgLy8vXG4gICAgICAgICAgdGVybVN0cmluZ0IgPSBsb2NhbENvbnRleHRCLm5vZGVBc1N0cmluZyh0ZXJtTm9kZUIpLFxuICAgICAgICAgIHZhcmlhYmxlTm9kZUEgPSB0aGlzLnZhcmlhYmxlTm9kZSwgIC8vL1xuICAgICAgICAgIHZhcmlhYmxlU3RyaW5nQSA9IGxvY2FsQ29udGV4dEEubm9kZUFzU3RyaW5nKHZhcmlhYmxlTm9kZUEpO1xuXG4gICAgY29uc3Qgc3RyaW5nID0gYFske3Rlcm1TdHJpbmdCfSBmb3IgJHt2YXJpYWJsZVN0cmluZ0F9XWA7XG5cbiAgICByZXR1cm4gc3RyaW5nO1xuICB9XG5cbiAgc3RhdGljIGZyb21TdWJzdGl0dXRpb25Ob2RlKHN1YnN0aXR1dGlvbk5vZGUpIHtcbiAgICBsZXQgdGVybU5vZGUgPSB0ZXJtTm9kZVF1ZXJ5KHN1YnN0aXR1dGlvbk5vZGUpLFxuICAgICAgICB2YXJpYWJsZU5vZGUgPSB2YXJpYWJsZU5vZGVRdWVyeShzdWJzdGl0dXRpb25Ob2RlKTtcblxuICAgIHRlcm1Ob2RlID0gc3RyaXBCcmFja2V0c0Zyb21UZXJtKHRlcm1Ob2RlKTsgLy8vXG5cbiAgICBjb25zdCB0ZXJtRm9yVmFyaWFibGVTdWJzdGl0dXRpb24gPSBuZXcgVGVybUZvclZhcmlhYmxlU3Vic3RpdHV0aW9uKHRlcm1Ob2RlLCB2YXJpYWJsZU5vZGUpO1xuXG4gICAgcmV0dXJuIHRlcm1Gb3JWYXJpYWJsZVN1YnN0aXR1dGlvbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tVGVybk5vZGVBbmRWYXJpYWJsZU5vZGUodGVybU5vZGUsIHZhcmlhYmxlTm9kZSkge1xuICAgIHRlcm1Ob2RlID0gc3RyaXBCcmFja2V0c0Zyb21UZXJtKHRlcm1Ob2RlKTsgLy8vXG5cbiAgICBjb25zdCB0ZXJtRm9yVmFyaWFibGVTdWJzdGl0dXRpb24gPSBuZXcgVGVybUZvclZhcmlhYmxlU3Vic3RpdHV0aW9uKHRlcm1Ob2RlLCB2YXJpYWJsZU5vZGUpO1xuXG4gICAgcmV0dXJuIHRlcm1Gb3JWYXJpYWJsZVN1YnN0aXR1dGlvbjtcbiAgfVxufVxuXG5mdW5jdGlvbiB0cmFuc2Zvcm1UZXJtTm9kZSh0ZXJtTm9kZSwgc3Vic3RpdHV0aW9ucykge1xuICBsZXQgdHJhbnNmb3JtZWRUZXJtTm9kZSA9IG51bGw7XG5cbiAgY29uc3QgdGVybVZhcmlhYmxlTm9kZSA9IHZhcmlhYmxlTm9kZVF1ZXJ5KHRlcm1Ob2RlKTtcblxuICBpZiAodGVybVZhcmlhYmxlTm9kZSAhPT0gbnVsbCkge1xuICAgIHN1YnN0aXR1dGlvbnMuc29tZVN1YnN0aXR1dGlvbigoc3Vic3RpdHV0aW9uKSA9PiB7XG4gICAgICBjb25zdCBzdWJzdGl0dXRpb25NYXRjaGVzVmFyaWFibGVOb2RlID0gc3Vic3RpdHV0aW9uLm1hdGNoVmFyaWFibGVOb2RlKHRlcm1WYXJpYWJsZU5vZGUpO1xuXG4gICAgICBpZiAoc3Vic3RpdHV0aW9uTWF0Y2hlc1ZhcmlhYmxlTm9kZSkge1xuICAgICAgICBjb25zdCB0ZXJtTm9kZSA9IHN1YnN0aXR1dGlvbi5nZXRUZXJtTm9kZSgpO1xuXG4gICAgICAgIHRyYW5zZm9ybWVkVGVybU5vZGUgPSB0ZXJtTm9kZTsgLy8vL1xuXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIHRyYW5zZm9ybWVkVGVybU5vZGU7XG59XG5cbmZ1bmN0aW9uIHRyYW5zZm9ybVZhcmlhYmxlTm9kZSh2YXJpYWJsZU5vZGUsIHN1YnN0aXR1dGlvbnMpIHtcbiAgbGV0IHRyYW5zZm9ybWVkVmFyaWFibGVOb2RlID0gbnVsbDtcblxuICBzdWJzdGl0dXRpb25zLnNvbWVTdWJzdGl0dXRpb24oKHN1YnN0aXR1dGlvbikgPT4ge1xuICAgIGNvbnN0IHN1YnN0aXR1dGlvbk1hdGNoZXNWYXJpYWJsZU5vZGUgPSBzdWJzdGl0dXRpb24ubWF0Y2hWYXJpYWJsZU5vZGUodmFyaWFibGVOb2RlKTtcblxuICAgIGlmIChzdWJzdGl0dXRpb25NYXRjaGVzVmFyaWFibGVOb2RlKSB7XG4gICAgICBjb25zdCB0ZXJtTm9kZSA9IHN1YnN0aXR1dGlvbi5nZXRUZXJtTm9kZSgpLFxuICAgICAgICAgICAgdmFyaWFibGVOb2RlID0gdmFyaWFibGVOb2RlUXVlcnkodGVybU5vZGUpO1xuXG4gICAgICBpZiAodmFyaWFibGVOb2RlICE9PSBudWxsKSB7XG4gICAgICAgIHRyYW5zZm9ybWVkVmFyaWFibGVOb2RlID0gdmFyaWFibGVOb2RlOyAgLy8vXG5cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gdHJhbnNmb3JtZWRWYXJpYWJsZU5vZGU7XG59XG4iXSwibmFtZXMiOlsiVGVybUZvclZhcmlhYmxlU3Vic3RpdHV0aW9uIiwidGVybU5vZGVRdWVyeSIsIm5vZGVRdWVyeSIsInZhcmlhYmxlTm9kZVF1ZXJ5IiwidGVybU5vZGUiLCJ2YXJpYWJsZU5vZGUiLCJnZXRUZXJtTm9kZSIsImdldFZhcmlhYmxlTm9kZSIsImdldE5vZGUiLCJub2RlIiwidHJhbnNmb3JtZWQiLCJzdWJzdGl0dXRpb25zIiwidHJhbnNmb3JtZWRTdWJzdGl0dXRpb24iLCJ0cmFuc2Zvcm1lZFRlcm1Ob2RlIiwidHJhbnNmb3JtVGVybU5vZGUiLCJ0cmFuc2Zvcm1lZFZhcmlhYmxlTm9kZSIsInRyYW5zZm9ybVZhcmlhYmxlTm9kZSIsInRlcm1Gb3JWYXJpYWJsZVN1YnN0aXR1dGlvbiIsIm1hdGNoIiwic3Vic3RpdHV0aW9uIiwibWF0Y2hlc1Rlcm1Ob2RlIiwibWF0Y2hUZXJtTm9kZSIsIm1hdGNoZXNWYXJpYWJsZU5vZGUiLCJtYXRjaFZhcmlhYmxlTm9kZSIsIm1hdGNoZXMiLCJzdHJpcEJyYWNrZXRzRnJvbVRlcm0iLCJ1bmlmeVdpdGhFcXVpdmFsZW5jZSIsImVxdWl2YWxlbmNlIiwibG9jYWxDb250ZXh0QSIsImxvY2FsQ29udGV4dEIiLCJ1bmlmaWVkV2l0aEVxdWl2YWxlbmNlIiwiZXF1aXZhbGVuY2VNYXRjaGVzVGVybU5vZGUiLCJlcXVpdmFsZW5jZU1hdGNoZXNWYXJpYWJsZU5vZGUiLCJhc1N0cmluZyIsInRlcm1Ob2RlQiIsInRlcm1TdHJpbmdCIiwibm9kZUFzU3RyaW5nIiwidmFyaWFibGVOb2RlQSIsInZhcmlhYmxlU3RyaW5nQSIsInN0cmluZyIsImZyb21TdWJzdGl0dXRpb25Ob2RlIiwic3Vic3RpdHV0aW9uTm9kZSIsImZyb21UZXJuTm9kZUFuZFZhcmlhYmxlTm9kZSIsIlN1YnN0aXR1dGlvbiIsInRlcm1WYXJpYWJsZU5vZGUiLCJzb21lU3Vic3RpdHV0aW9uIiwic3Vic3RpdHV0aW9uTWF0Y2hlc1ZhcmlhYmxlTm9kZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFVcUJBOzs7bUVBUkk7cUJBRUM7d0JBQ1k7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFdEMsSUFBTUMsZ0JBQWdCQyxJQUFBQSxnQkFBUyxFQUFDLGFBQzFCQyxvQkFBb0JELElBQUFBLGdCQUFTLEVBQUM7QUFFckIsSUFBQSxBQUFNRiw0Q0FBTjtjQUFNQTthQUFBQSw0QkFDUEksUUFBUSxFQUFFQyxZQUFZO2dDQURmTDs7Z0JBRWpCLGtCQUZpQkE7UUFJakIsTUFBS0ksUUFBUSxHQUFHQTtRQUNoQixNQUFLQyxZQUFZLEdBQUdBOzs7a0JBTEhMOztZQVFuQk0sS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDRixRQUFRO1lBQ3RCOzs7WUFFQUcsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDRixZQUFZO1lB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