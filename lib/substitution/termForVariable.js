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
    function TermForVariableSubstitution(variableNode, termNode) {
        _class_call_check(this, TermForVariableSubstitution);
        var _this;
        _this = _call_super(this, TermForVariableSubstitution);
        _this.variableNode = variableNode;
        _this.termNode = termNode;
        return _this;
    }
    _create_class(TermForVariableSubstitution, [
        {
            key: "getVariableNode",
            value: function getVariableNode() {
                return this.variableNode;
            }
        },
        {
            key: "getTermNode",
            value: function getTermNode() {
                return this.termNode;
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
            key: "matchTermNode",
            value: function matchTermNode(termNode) {
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
                var equivalenceMatchesVariableNode = equivalence.matchVariableNode(this.variableNode);
                if (equivalenceMatchesVariableNode) {
                    var equivalenceMatchesTermNode = equivalence.matchTermNode(this.termNode);
                    if (equivalenceMatchesTermNode) {
                        unifiedWithEquivalence = true;
                    }
                }
                return unifiedWithEquivalence;
            }
        },
        {
            key: "asString",
            value: function asString(localContextA, localContextB) {
                var termNodeB = this.termNode, termStringB = localContextB.nodeAsString(termNodeB), variableNodeA = this.variableNode, variableStringA = localContextA.nodeAsString(variableNodeA), string = "[".concat(termStringB, " for ").concat(variableStringA, "]");
                return string;
            }
        }
    ], [
        {
            key: "fromSubstitutionNode",
            value: function fromSubstitutionNode(substitutionNode) {
                var termNode = termNodeQuery(substitutionNode), variableNode = variableNodeQuery(substitutionNode), termForVariableSubstitution = new TermForVariableSubstitution(variableNode, termNode);
                return termForVariableSubstitution;
            }
        },
        {
            key: "fromVariableNodeAndTermNode",
            value: function fromVariableNodeAndTermNode(variableNode, termNode) {
                var termForVariableSubstitution = new TermForVariableSubstitution(variableNode, termNode);
                return termForVariableSubstitution;
            }
        },
        {
            key: "fromSubstitutionAndSubstitutions",
            value: function fromSubstitutionAndSubstitutions(substitution, substitutions) {
                var termNode = substitution.getTermNode(), variableNode = substitution.getVariableNode();
                var transformedTermNode = transformTermNode(termNode, substitutions), transformedVariableNode = transformVariableNode(variableNode, substitutions); ///
                termNode = transformedTermNode; ///
                variableNode = transformedVariableNode; ///
                var termForVariableSubstitution = new TermForVariableSubstitution(variableNode, termNode);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zdWJzdGl0dXRpb24vdGVybUZvclZhcmlhYmxlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgU3Vic3RpdHV0aW9uIGZyb20gXCIuLi9zdWJzdGl0dXRpb25cIjtcblxuaW1wb3J0IHsgbm9kZVF1ZXJ5IH0gZnJvbSBcIi4uL3V0aWxpdGllcy9xdWVyeVwiO1xuXG5jb25zdCB0ZXJtTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiLyovdGVybSFcIiksXG4gICAgICB2YXJpYWJsZU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi8qL3ZhcmlhYmxlIVwiKTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGVybUZvclZhcmlhYmxlU3Vic3RpdHV0aW9uIGV4dGVuZHMgU3Vic3RpdHV0aW9uIHtcbiAgY29uc3RydWN0b3IodmFyaWFibGVOb2RlLCB0ZXJtTm9kZSkge1xuICAgIHN1cGVyKCk7XG5cbiAgICB0aGlzLnZhcmlhYmxlTm9kZSA9IHZhcmlhYmxlTm9kZTtcbiAgICB0aGlzLnRlcm1Ob2RlID0gdGVybU5vZGU7XG4gIH1cblxuICBnZXRWYXJpYWJsZU5vZGUoKSB7XG4gICAgcmV0dXJuIHRoaXMudmFyaWFibGVOb2RlO1xuICB9XG5cbiAgZ2V0VGVybU5vZGUoKSB7XG4gICAgcmV0dXJuIHRoaXMudGVybU5vZGU7XG4gIH1cblxuICBnZXROb2RlKCkge1xuICAgIGNvbnN0IG5vZGUgPSB0aGlzLnRlcm1Ob2RlOyAvLy9cblxuICAgIHJldHVybiBub2RlO1xuICB9XG5cbiAgdHJhbnNmb3JtZWQoc3Vic3RpdHV0aW9ucykge1xuICAgIGxldCB0cmFuc2Zvcm1lZFN1YnN0aXR1dGlvbiA9IG51bGw7XG5cbiAgICBjb25zdCB0cmFuc2Zvcm1lZFRlcm1Ob2RlID0gdHJhbnNmb3JtVGVybU5vZGUodGhpcy50ZXJtTm9kZSwgc3Vic3RpdHV0aW9ucyksXG4gICAgICAgICAgdHJhbnNmb3JtZWRWYXJpYWJsZU5vZGUgPSB0cmFuc2Zvcm1WYXJpYWJsZU5vZGUodGhpcy52YXJpYWJsZU5vZGUsIHN1YnN0aXR1dGlvbnMpO1xuXG4gICAgaWYgKCh0cmFuc2Zvcm1lZFRlcm1Ob2RlICE9PSBudWxsKSAmJiAodHJhbnNmb3JtZWRWYXJpYWJsZU5vZGUgIT09IG51bGwpKSB7XG4gICAgICBjb25zdCB0ZXJtTm9kZSA9IHRyYW5zZm9ybWVkVGVybU5vZGUsIC8vL1xuICAgICAgICAgICAgdmFyaWFibGVOb2RlID0gdHJhbnNmb3JtZWRWYXJpYWJsZU5vZGUsXG4gICAgICAgICAgICB0ZXJtRm9yVmFyaWFibGVTdWJzdGl0dXRpb24gPSBuZXcgVGVybUZvclZhcmlhYmxlU3Vic3RpdHV0aW9uKHRlcm1Ob2RlLCB2YXJpYWJsZU5vZGUpO1xuXG4gICAgICB0cmFuc2Zvcm1lZFN1YnN0aXR1dGlvbiA9IHRlcm1Gb3JWYXJpYWJsZVN1YnN0aXR1dGlvbjsgIC8vL1xuICAgIH1cblxuICAgIHJldHVybiB0cmFuc2Zvcm1lZFN1YnN0aXR1dGlvbjtcbiAgfVxuXG4gIG1hdGNoVGVybU5vZGUodGVybU5vZGUpIHtcbiAgICBjb25zdCBtYXRjaGVzVGVybU5vZGUgPSB0aGlzLnRlcm1Ob2RlLm1hdGNoKHRlcm1Ob2RlKTtcblxuICAgIHJldHVybiBtYXRjaGVzVGVybU5vZGU7XG4gIH1cblxuICBtYXRjaFZhcmlhYmxlTm9kZSh2YXJpYWJsZU5vZGUpIHtcbiAgICBjb25zdCBtYXRjaGVzVmFyaWFibGVOb2RlID0gdGhpcy52YXJpYWJsZU5vZGUubWF0Y2godmFyaWFibGVOb2RlKTtcblxuICAgIHJldHVybiBtYXRjaGVzVmFyaWFibGVOb2RlO1xuICB9XG5cbiAgdW5pZnlXaXRoRXF1aXZhbGVuY2UoZXF1aXZhbGVuY2UsIHN1YnN0aXR1dGlvbnMsIGxvY2FsQ29udGV4dEEsIGxvY2FsQ29udGV4dEIpIHtcbiAgICBsZXQgdW5pZmllZFdpdGhFcXVpdmFsZW5jZTtcblxuICAgIGNvbnN0IGVxdWl2YWxlbmNlTWF0Y2hlc1ZhcmlhYmxlTm9kZSA9IGVxdWl2YWxlbmNlLm1hdGNoVmFyaWFibGVOb2RlKHRoaXMudmFyaWFibGVOb2RlKTtcblxuICAgIGlmIChlcXVpdmFsZW5jZU1hdGNoZXNWYXJpYWJsZU5vZGUpIHtcbiAgICAgIGNvbnN0IGVxdWl2YWxlbmNlTWF0Y2hlc1Rlcm1Ob2RlID0gZXF1aXZhbGVuY2UubWF0Y2hUZXJtTm9kZSh0aGlzLnRlcm1Ob2RlKTtcblxuICAgICAgaWYgKGVxdWl2YWxlbmNlTWF0Y2hlc1Rlcm1Ob2RlKSB7XG4gICAgICAgIHVuaWZpZWRXaXRoRXF1aXZhbGVuY2UgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB1bmlmaWVkV2l0aEVxdWl2YWxlbmNlO1xuICB9XG5cbiAgYXNTdHJpbmcobG9jYWxDb250ZXh0QSwgbG9jYWxDb250ZXh0Qikge1xuICAgIGNvbnN0IHRlcm1Ob2RlQiA9IHRoaXMudGVybU5vZGUsICAvLy9cbiAgICAgICAgICB0ZXJtU3RyaW5nQiA9IGxvY2FsQ29udGV4dEIubm9kZUFzU3RyaW5nKHRlcm1Ob2RlQiksXG4gICAgICAgICAgdmFyaWFibGVOb2RlQSA9IHRoaXMudmFyaWFibGVOb2RlLCAgLy8vXG4gICAgICAgICAgdmFyaWFibGVTdHJpbmdBID0gbG9jYWxDb250ZXh0QS5ub2RlQXNTdHJpbmcodmFyaWFibGVOb2RlQSksXG4gICAgICAgICAgc3RyaW5nID0gYFske3Rlcm1TdHJpbmdCfSBmb3IgJHt2YXJpYWJsZVN0cmluZ0F9XWA7XG5cbiAgICByZXR1cm4gc3RyaW5nO1xuICB9XG5cbiAgc3RhdGljIGZyb21TdWJzdGl0dXRpb25Ob2RlKHN1YnN0aXR1dGlvbk5vZGUpIHtcbiAgICBjb25zdCB0ZXJtTm9kZSA9IHRlcm1Ob2RlUXVlcnkoc3Vic3RpdHV0aW9uTm9kZSksXG4gICAgICAgICAgdmFyaWFibGVOb2RlID0gdmFyaWFibGVOb2RlUXVlcnkoc3Vic3RpdHV0aW9uTm9kZSksXG4gICAgICAgICAgdGVybUZvclZhcmlhYmxlU3Vic3RpdHV0aW9uID0gbmV3IFRlcm1Gb3JWYXJpYWJsZVN1YnN0aXR1dGlvbih2YXJpYWJsZU5vZGUsIHRlcm1Ob2RlKTtcblxuICAgIHJldHVybiB0ZXJtRm9yVmFyaWFibGVTdWJzdGl0dXRpb247XG4gIH1cblxuICBzdGF0aWMgZnJvbVZhcmlhYmxlTm9kZUFuZFRlcm1Ob2RlKHZhcmlhYmxlTm9kZSwgdGVybU5vZGUpIHtcbiAgICBjb25zdCB0ZXJtRm9yVmFyaWFibGVTdWJzdGl0dXRpb24gPSBuZXcgVGVybUZvclZhcmlhYmxlU3Vic3RpdHV0aW9uKHZhcmlhYmxlTm9kZSwgdGVybU5vZGUpO1xuXG4gICAgcmV0dXJuIHRlcm1Gb3JWYXJpYWJsZVN1YnN0aXR1dGlvbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tU3Vic3RpdHV0aW9uQW5kU3Vic3RpdHV0aW9ucyhzdWJzdGl0dXRpb24sIHN1YnN0aXR1dGlvbnMpIHtcbiAgICBsZXQgdGVybU5vZGUgPSBzdWJzdGl0dXRpb24uZ2V0VGVybU5vZGUoKSxcbiAgICAgICAgdmFyaWFibGVOb2RlID0gc3Vic3RpdHV0aW9uLmdldFZhcmlhYmxlTm9kZSgpO1xuXG4gICAgY29uc3QgdHJhbnNmb3JtZWRUZXJtTm9kZSA9IHRyYW5zZm9ybVRlcm1Ob2RlKHRlcm1Ob2RlLCBzdWJzdGl0dXRpb25zKSxcbiAgICAgICAgICB0cmFuc2Zvcm1lZFZhcmlhYmxlTm9kZSA9IHRyYW5zZm9ybVZhcmlhYmxlTm9kZSh2YXJpYWJsZU5vZGUsIHN1YnN0aXR1dGlvbnMpOyAvLy9cblxuICAgIHRlcm1Ob2RlID0gdHJhbnNmb3JtZWRUZXJtTm9kZTsgLy8vXG5cbiAgICB2YXJpYWJsZU5vZGUgPSB0cmFuc2Zvcm1lZFZhcmlhYmxlTm9kZTsgLy8vXG5cbiAgICBjb25zdCB0ZXJtRm9yVmFyaWFibGVTdWJzdGl0dXRpb24gPSBuZXcgVGVybUZvclZhcmlhYmxlU3Vic3RpdHV0aW9uKHZhcmlhYmxlTm9kZSwgdGVybU5vZGUpO1xuXG4gICAgcmV0dXJuIHRlcm1Gb3JWYXJpYWJsZVN1YnN0aXR1dGlvbjtcbiAgfVxufVxuXG5mdW5jdGlvbiB0cmFuc2Zvcm1UZXJtTm9kZSh0ZXJtTm9kZSwgc3Vic3RpdHV0aW9ucykge1xuICBsZXQgdHJhbnNmb3JtZWRUZXJtTm9kZSA9IG51bGw7XG5cbiAgY29uc3QgdGVybVZhcmlhYmxlTm9kZSA9IHZhcmlhYmxlTm9kZVF1ZXJ5KHRlcm1Ob2RlKTtcblxuICBpZiAodGVybVZhcmlhYmxlTm9kZSAhPT0gbnVsbCkge1xuICAgIHN1YnN0aXR1dGlvbnMuc29tZVN1YnN0aXR1dGlvbigoc3Vic3RpdHV0aW9uKSA9PiB7XG4gICAgICBjb25zdCBzdWJzdGl0dXRpb25NYXRjaGVzVmFyaWFibGVOb2RlID0gc3Vic3RpdHV0aW9uLm1hdGNoVmFyaWFibGVOb2RlKHRlcm1WYXJpYWJsZU5vZGUpO1xuXG4gICAgICBpZiAoc3Vic3RpdHV0aW9uTWF0Y2hlc1ZhcmlhYmxlTm9kZSkge1xuICAgICAgICBjb25zdCB0ZXJtTm9kZSA9IHN1YnN0aXR1dGlvbi5nZXRUZXJtTm9kZSgpO1xuXG4gICAgICAgIHRyYW5zZm9ybWVkVGVybU5vZGUgPSB0ZXJtTm9kZTsgLy8vL1xuXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIHRyYW5zZm9ybWVkVGVybU5vZGU7XG59XG5cbmZ1bmN0aW9uIHRyYW5zZm9ybVZhcmlhYmxlTm9kZSh2YXJpYWJsZU5vZGUsIHN1YnN0aXR1dGlvbnMpIHtcbiAgbGV0IHRyYW5zZm9ybWVkVmFyaWFibGVOb2RlID0gbnVsbDtcblxuICBzdWJzdGl0dXRpb25zLnNvbWVTdWJzdGl0dXRpb24oKHN1YnN0aXR1dGlvbikgPT4ge1xuICAgIGNvbnN0IHN1YnN0aXR1dGlvbk1hdGNoZXNWYXJpYWJsZU5vZGUgPSBzdWJzdGl0dXRpb24ubWF0Y2hWYXJpYWJsZU5vZGUodmFyaWFibGVOb2RlKTtcblxuICAgIGlmIChzdWJzdGl0dXRpb25NYXRjaGVzVmFyaWFibGVOb2RlKSB7XG4gICAgICBjb25zdCB0ZXJtTm9kZSA9IHN1YnN0aXR1dGlvbi5nZXRUZXJtTm9kZSgpLFxuICAgICAgICAgICAgdmFyaWFibGVOb2RlID0gdmFyaWFibGVOb2RlUXVlcnkodGVybU5vZGUpO1xuXG4gICAgICBpZiAodmFyaWFibGVOb2RlICE9PSBudWxsKSB7XG4gICAgICAgIHRyYW5zZm9ybWVkVmFyaWFibGVOb2RlID0gdmFyaWFibGVOb2RlOyAgLy8vXG5cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gdHJhbnNmb3JtZWRWYXJpYWJsZU5vZGU7XG59XG4iXSwibmFtZXMiOlsiVGVybUZvclZhcmlhYmxlU3Vic3RpdHV0aW9uIiwidGVybU5vZGVRdWVyeSIsIm5vZGVRdWVyeSIsInZhcmlhYmxlTm9kZVF1ZXJ5IiwidmFyaWFibGVOb2RlIiwidGVybU5vZGUiLCJnZXRWYXJpYWJsZU5vZGUiLCJnZXRUZXJtTm9kZSIsImdldE5vZGUiLCJub2RlIiwidHJhbnNmb3JtZWQiLCJzdWJzdGl0dXRpb25zIiwidHJhbnNmb3JtZWRTdWJzdGl0dXRpb24iLCJ0cmFuc2Zvcm1lZFRlcm1Ob2RlIiwidHJhbnNmb3JtVGVybU5vZGUiLCJ0cmFuc2Zvcm1lZFZhcmlhYmxlTm9kZSIsInRyYW5zZm9ybVZhcmlhYmxlTm9kZSIsInRlcm1Gb3JWYXJpYWJsZVN1YnN0aXR1dGlvbiIsIm1hdGNoVGVybU5vZGUiLCJtYXRjaGVzVGVybU5vZGUiLCJtYXRjaCIsIm1hdGNoVmFyaWFibGVOb2RlIiwibWF0Y2hlc1ZhcmlhYmxlTm9kZSIsInVuaWZ5V2l0aEVxdWl2YWxlbmNlIiwiZXF1aXZhbGVuY2UiLCJsb2NhbENvbnRleHRBIiwibG9jYWxDb250ZXh0QiIsInVuaWZpZWRXaXRoRXF1aXZhbGVuY2UiLCJlcXVpdmFsZW5jZU1hdGNoZXNWYXJpYWJsZU5vZGUiLCJlcXVpdmFsZW5jZU1hdGNoZXNUZXJtTm9kZSIsImFzU3RyaW5nIiwidGVybU5vZGVCIiwidGVybVN0cmluZ0IiLCJub2RlQXNTdHJpbmciLCJ2YXJpYWJsZU5vZGVBIiwidmFyaWFibGVTdHJpbmdBIiwic3RyaW5nIiwiZnJvbVN1YnN0aXR1dGlvbk5vZGUiLCJzdWJzdGl0dXRpb25Ob2RlIiwiZnJvbVZhcmlhYmxlTm9kZUFuZFRlcm1Ob2RlIiwiZnJvbVN1YnN0aXR1dGlvbkFuZFN1YnN0aXR1dGlvbnMiLCJzdWJzdGl0dXRpb24iLCJTdWJzdGl0dXRpb24iLCJ0ZXJtVmFyaWFibGVOb2RlIiwic29tZVN1YnN0aXR1dGlvbiIsInN1YnN0aXR1dGlvbk1hdGNoZXNWYXJpYWJsZU5vZGUiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBU3FCQTs7O21FQVBJO3FCQUVDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTFCLElBQU1DLGdCQUFnQkMsSUFBQUEsZ0JBQVMsRUFBQyxhQUMxQkMsb0JBQW9CRCxJQUFBQSxnQkFBUyxFQUFDO0FBRXJCLElBQUEsQUFBTUYsNENBQU47Y0FBTUE7YUFBQUEsNEJBQ1BJLFlBQVksRUFBRUMsUUFBUTtnQ0FEZkw7O2dCQUVqQixrQkFGaUJBO1FBSWpCLE1BQUtJLFlBQVksR0FBR0E7UUFDcEIsTUFBS0MsUUFBUSxHQUFHQTs7O2tCQUxDTDs7WUFRbkJNLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0YsWUFBWTtZQUMxQjs7O1lBRUFHLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0YsUUFBUTtZQUN0Qjs7O1lBRUFHLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNQyxPQUFPLElBQUksQ0FBQ0osUUFBUSxFQUFFLEdBQUc7Z0JBRS9CLE9BQU9JO1lBQ1Q7OztZQUVBQyxLQUFBQTttQkFBQUEsU0FBQUEsWUFBWUMsYUFBYTtnQkFDdkIsSUFBSUMsMEJBQTBCO2dCQUU5QixJQUFNQyxzQkFBc0JDLGtCQUFrQixJQUFJ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