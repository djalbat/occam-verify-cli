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
            key: "isTransformed",
            value: function isTransformed(substitution) {
                var termNod = substitution.getTermNode(), variableNode = substitution.getVariableNode(), termNodeMatches = this.termNode.match(termNod), variableNodeMatches = this.variableNode.match(variableNode), transformed = !termNodeMatches && !variableNodeMatches;
                return transformed;
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
            key: "unifyAgainstEquivalence",
            value: function unifyAgainstEquivalence(equivalence, substitutions, localContext) {
                var unifiedAgainstEquivalence;
                var equivalenceMatchesVariableNode = equivalence.matchVariableNode(this.variableNode);
                if (equivalenceMatchesVariableNode) {
                    var equivalenceMatchesTermNode = equivalence.matchTermNode(this.termNode);
                    if (equivalenceMatchesTermNode) {
                        unifiedAgainstEquivalence = true;
                    }
                }
                return unifiedAgainstEquivalence;
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
                termNode = substituteTermNode(termNode, substitutions); ///
                variableNode = substituteVariableNode(variableNode, substitutions); ///
                var termForVariableSubstitution = new TermForVariableSubstitution(variableNode, termNode);
                return termForVariableSubstitution;
            }
        },
        {
            key: "fromSubstitutionNodeAndSubstitutions",
            value: function fromSubstitutionNodeAndSubstitutions(substitutionNode, substitutions) {
                var termNode = termNodeQuery(substitutionNode), variableNode = variableNodeQuery(substitutionNode);
                termNode = substituteTermNode(termNode, substitutions); ///
                variableNode = substituteVariableNode(variableNode, substitutions); ///
                var termForVariableSubstitution = new TermForVariableSubstitution(variableNode, termNode);
                return termForVariableSubstitution;
            }
        }
    ]);
    return TermForVariableSubstitution;
}(_substitution.default);
function substituteTermNode(termNode, substitutions) {
    var termVariableNode = variableNodeQuery(termNode);
    if (termVariableNode !== null) {
        substitutions.some(function(substitution) {
            var substitutionMatchesVariableNode = substitution.matchVariableNode(termVariableNode);
            if (substitutionMatchesVariableNode) {
                termNode = substitution.getTermNode(); ///
                return true;
            }
        });
    }
    return termNode;
}
function substituteVariableNode(variableNode, substitutions) {
    substitutions.some(function(substitution) {
        var substitutionMatchesVariableNode = substitution.matchVariableNode(variableNode);
        if (substitutionMatchesVariableNode) {
            var termNode = substitution.getTermNode(), termVariableNode = variableNodeQuery(termNode);
            if (termVariableNode !== null) {
                variableNode = termVariableNode; ///
                return true;
            }
        }
    });
    return variableNode;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zdWJzdGl0dXRpb24vdGVybUZvclZhcmlhYmxlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgU3Vic3RpdHV0aW9uIGZyb20gXCIuLi9zdWJzdGl0dXRpb25cIjtcblxuaW1wb3J0IHsgbm9kZVF1ZXJ5IH0gZnJvbSBcIi4uL3V0aWxpdGllcy9xdWVyeVwiO1xuXG5jb25zdCB0ZXJtTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiLyovdGVybSFcIiksXG4gICAgICB2YXJpYWJsZU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi8qL3ZhcmlhYmxlIVwiKTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGVybUZvclZhcmlhYmxlU3Vic3RpdHV0aW9uIGV4dGVuZHMgU3Vic3RpdHV0aW9uIHtcbiAgY29uc3RydWN0b3IodmFyaWFibGVOb2RlLCB0ZXJtTm9kZSkge1xuICAgIHN1cGVyKCk7XG5cbiAgICB0aGlzLnZhcmlhYmxlTm9kZSA9IHZhcmlhYmxlTm9kZTtcbiAgICB0aGlzLnRlcm1Ob2RlID0gdGVybU5vZGU7XG4gIH1cblxuICBnZXRWYXJpYWJsZU5vZGUoKSB7XG4gICAgcmV0dXJuIHRoaXMudmFyaWFibGVOb2RlO1xuICB9XG5cbiAgZ2V0VGVybU5vZGUoKSB7XG4gICAgcmV0dXJuIHRoaXMudGVybU5vZGU7XG4gIH1cblxuICBpc1RyYW5zZm9ybWVkKHN1YnN0aXR1dGlvbikge1xuICAgIGNvbnN0IHRlcm1Ob2QgPSBzdWJzdGl0dXRpb24uZ2V0VGVybU5vZGUoKSxcbiAgICAgICAgICB2YXJpYWJsZU5vZGUgPSBzdWJzdGl0dXRpb24uZ2V0VmFyaWFibGVOb2RlKCksXG4gICAgICAgICAgdGVybU5vZGVNYXRjaGVzID0gdGhpcy50ZXJtTm9kZS5tYXRjaCh0ZXJtTm9kKSxcbiAgICAgICAgICB2YXJpYWJsZU5vZGVNYXRjaGVzID0gdGhpcy52YXJpYWJsZU5vZGUubWF0Y2godmFyaWFibGVOb2RlKSxcbiAgICAgICAgICB0cmFuc2Zvcm1lZCA9ICgoIXRlcm1Ob2RlTWF0Y2hlcykgJiYgKCF2YXJpYWJsZU5vZGVNYXRjaGVzKSk7XG5cbiAgICByZXR1cm4gdHJhbnNmb3JtZWQ7XG4gIH1cblxuICBtYXRjaFRlcm1Ob2RlKHRlcm1Ob2RlKSB7XG4gICAgY29uc3QgbWF0Y2hlc1Rlcm1Ob2RlID0gdGhpcy50ZXJtTm9kZS5tYXRjaCh0ZXJtTm9kZSk7XG5cbiAgICByZXR1cm4gbWF0Y2hlc1Rlcm1Ob2RlO1xuICB9XG5cbiAgbWF0Y2hWYXJpYWJsZU5vZGUodmFyaWFibGVOb2RlKSB7XG4gICAgY29uc3QgbWF0Y2hlc1ZhcmlhYmxlTm9kZSA9IHRoaXMudmFyaWFibGVOb2RlLm1hdGNoKHZhcmlhYmxlTm9kZSk7XG5cbiAgICByZXR1cm4gbWF0Y2hlc1ZhcmlhYmxlTm9kZTtcbiAgfVxuXG4gIHVuaWZ5QWdhaW5zdEVxdWl2YWxlbmNlKGVxdWl2YWxlbmNlLCBzdWJzdGl0dXRpb25zLCBsb2NhbENvbnRleHQpIHtcbiAgICBsZXQgdW5pZmllZEFnYWluc3RFcXVpdmFsZW5jZTtcblxuICAgIGNvbnN0IGVxdWl2YWxlbmNlTWF0Y2hlc1ZhcmlhYmxlTm9kZSA9IGVxdWl2YWxlbmNlLm1hdGNoVmFyaWFibGVOb2RlKHRoaXMudmFyaWFibGVOb2RlKTtcblxuICAgIGlmIChlcXVpdmFsZW5jZU1hdGNoZXNWYXJpYWJsZU5vZGUpIHtcbiAgICAgIGNvbnN0IGVxdWl2YWxlbmNlTWF0Y2hlc1Rlcm1Ob2RlID0gZXF1aXZhbGVuY2UubWF0Y2hUZXJtTm9kZSh0aGlzLnRlcm1Ob2RlKTtcblxuICAgICAgaWYgKGVxdWl2YWxlbmNlTWF0Y2hlc1Rlcm1Ob2RlKSB7XG4gICAgICAgIHVuaWZpZWRBZ2FpbnN0RXF1aXZhbGVuY2UgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB1bmlmaWVkQWdhaW5zdEVxdWl2YWxlbmNlO1xuICB9XG5cbiAgc3RhdGljIGZyb21TdWJzdGl0dXRpb25Ob2RlKHN1YnN0aXR1dGlvbk5vZGUpIHtcbiAgICBjb25zdCB0ZXJtTm9kZSA9IHRlcm1Ob2RlUXVlcnkoc3Vic3RpdHV0aW9uTm9kZSksXG4gICAgICAgICAgdmFyaWFibGVOb2RlID0gdmFyaWFibGVOb2RlUXVlcnkoc3Vic3RpdHV0aW9uTm9kZSksXG4gICAgICAgICAgdGVybUZvclZhcmlhYmxlU3Vic3RpdHV0aW9uID0gbmV3IFRlcm1Gb3JWYXJpYWJsZVN1YnN0aXR1dGlvbih2YXJpYWJsZU5vZGUsIHRlcm1Ob2RlKTtcblxuICAgIHJldHVybiB0ZXJtRm9yVmFyaWFibGVTdWJzdGl0dXRpb247XG4gIH1cblxuICBzdGF0aWMgZnJvbVZhcmlhYmxlTm9kZUFuZFRlcm1Ob2RlKHZhcmlhYmxlTm9kZSwgdGVybU5vZGUpIHtcbiAgICBjb25zdCB0ZXJtRm9yVmFyaWFibGVTdWJzdGl0dXRpb24gPSBuZXcgVGVybUZvclZhcmlhYmxlU3Vic3RpdHV0aW9uKHZhcmlhYmxlTm9kZSwgdGVybU5vZGUpO1xuXG4gICAgcmV0dXJuIHRlcm1Gb3JWYXJpYWJsZVN1YnN0aXR1dGlvbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tU3Vic3RpdHV0aW9uQW5kU3Vic3RpdHV0aW9ucyhzdWJzdGl0dXRpb24sIHN1YnN0aXR1dGlvbnMpIHtcbiAgICBsZXQgdGVybU5vZGUgPSBzdWJzdGl0dXRpb24uZ2V0VGVybU5vZGUoKSxcbiAgICAgICAgdmFyaWFibGVOb2RlID0gc3Vic3RpdHV0aW9uLmdldFZhcmlhYmxlTm9kZSgpO1xuXG4gICAgdGVybU5vZGUgPSBzdWJzdGl0dXRlVGVybU5vZGUodGVybU5vZGUsIHN1YnN0aXR1dGlvbnMpOyAvLy9cblxuICAgIHZhcmlhYmxlTm9kZSA9IHN1YnN0aXR1dGVWYXJpYWJsZU5vZGUodmFyaWFibGVOb2RlLCBzdWJzdGl0dXRpb25zKTsgLy8vXG5cbiAgICBjb25zdCB0ZXJtRm9yVmFyaWFibGVTdWJzdGl0dXRpb24gPSBuZXcgVGVybUZvclZhcmlhYmxlU3Vic3RpdHV0aW9uKHZhcmlhYmxlTm9kZSwgdGVybU5vZGUpO1xuXG4gICAgcmV0dXJuIHRlcm1Gb3JWYXJpYWJsZVN1YnN0aXR1dGlvbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tU3Vic3RpdHV0aW9uTm9kZUFuZFN1YnN0aXR1dGlvbnMoc3Vic3RpdHV0aW9uTm9kZSwgc3Vic3RpdHV0aW9ucykge1xuICAgIGxldCB0ZXJtTm9kZSA9IHRlcm1Ob2RlUXVlcnkoc3Vic3RpdHV0aW9uTm9kZSksXG4gICAgICAgIHZhcmlhYmxlTm9kZSA9IHZhcmlhYmxlTm9kZVF1ZXJ5KHN1YnN0aXR1dGlvbk5vZGUpO1xuXG4gICAgdGVybU5vZGUgPSBzdWJzdGl0dXRlVGVybU5vZGUodGVybU5vZGUsIHN1YnN0aXR1dGlvbnMpOyAvLy9cblxuICAgIHZhcmlhYmxlTm9kZSA9IHN1YnN0aXR1dGVWYXJpYWJsZU5vZGUodmFyaWFibGVOb2RlLCBzdWJzdGl0dXRpb25zKTsgLy8vXG5cbiAgICBjb25zdCB0ZXJtRm9yVmFyaWFibGVTdWJzdGl0dXRpb24gPSBuZXcgVGVybUZvclZhcmlhYmxlU3Vic3RpdHV0aW9uKHZhcmlhYmxlTm9kZSwgdGVybU5vZGUpO1xuXG4gICAgcmV0dXJuIHRlcm1Gb3JWYXJpYWJsZVN1YnN0aXR1dGlvbjtcbiAgfVxufVxuXG5mdW5jdGlvbiBzdWJzdGl0dXRlVGVybU5vZGUodGVybU5vZGUsIHN1YnN0aXR1dGlvbnMpIHtcbiAgY29uc3QgdGVybVZhcmlhYmxlTm9kZSA9IHZhcmlhYmxlTm9kZVF1ZXJ5KHRlcm1Ob2RlKTtcblxuICBpZiAodGVybVZhcmlhYmxlTm9kZSAhPT0gbnVsbCkge1xuICAgIHN1YnN0aXR1dGlvbnMuc29tZSgoc3Vic3RpdHV0aW9uKSA9PiB7XG4gICAgICBjb25zdCBzdWJzdGl0dXRpb25NYXRjaGVzVmFyaWFibGVOb2RlID0gc3Vic3RpdHV0aW9uLm1hdGNoVmFyaWFibGVOb2RlKHRlcm1WYXJpYWJsZU5vZGUpO1xuXG4gICAgICBpZiAoc3Vic3RpdHV0aW9uTWF0Y2hlc1ZhcmlhYmxlTm9kZSkge1xuICAgICAgICB0ZXJtTm9kZSA9IHN1YnN0aXR1dGlvbi5nZXRUZXJtTm9kZSgpOyAgLy8vXG5cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICByZXR1cm4gdGVybU5vZGU7XG59XG5cbmZ1bmN0aW9uIHN1YnN0aXR1dGVWYXJpYWJsZU5vZGUodmFyaWFibGVOb2RlLCBzdWJzdGl0dXRpb25zKSB7XG4gIHN1YnN0aXR1dGlvbnMuc29tZSgoc3Vic3RpdHV0aW9uKSA9PiB7XG4gICAgY29uc3Qgc3Vic3RpdHV0aW9uTWF0Y2hlc1ZhcmlhYmxlTm9kZSA9IHN1YnN0aXR1dGlvbi5tYXRjaFZhcmlhYmxlTm9kZSh2YXJpYWJsZU5vZGUpO1xuXG4gICAgaWYgKHN1YnN0aXR1dGlvbk1hdGNoZXNWYXJpYWJsZU5vZGUpIHtcbiAgICAgIGNvbnN0IHRlcm1Ob2RlID0gc3Vic3RpdHV0aW9uLmdldFRlcm1Ob2RlKCksXG4gICAgICAgICAgICB0ZXJtVmFyaWFibGVOb2RlID0gdmFyaWFibGVOb2RlUXVlcnkodGVybU5vZGUpO1xuXG4gICAgICBpZiAodGVybVZhcmlhYmxlTm9kZSAhPT0gbnVsbCkge1xuICAgICAgICB2YXJpYWJsZU5vZGUgPSB0ZXJtVmFyaWFibGVOb2RlOyAgLy8vXG5cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gdmFyaWFibGVOb2RlO1xufVxuIl0sIm5hbWVzIjpbIlRlcm1Gb3JWYXJpYWJsZVN1YnN0aXR1dGlvbiIsInRlcm1Ob2RlUXVlcnkiLCJub2RlUXVlcnkiLCJ2YXJpYWJsZU5vZGVRdWVyeSIsInZhcmlhYmxlTm9kZSIsInRlcm1Ob2RlIiwiZ2V0VmFyaWFibGVOb2RlIiwiZ2V0VGVybU5vZGUiLCJpc1RyYW5zZm9ybWVkIiwic3Vic3RpdHV0aW9uIiwidGVybU5vZCIsInRlcm1Ob2RlTWF0Y2hlcyIsIm1hdGNoIiwidmFyaWFibGVOb2RlTWF0Y2hlcyIsInRyYW5zZm9ybWVkIiwibWF0Y2hUZXJtTm9kZSIsIm1hdGNoZXNUZXJtTm9kZSIsIm1hdGNoVmFyaWFibGVOb2RlIiwibWF0Y2hlc1ZhcmlhYmxlTm9kZSIsInVuaWZ5QWdhaW5zdEVxdWl2YWxlbmNlIiwiZXF1aXZhbGVuY2UiLCJzdWJzdGl0dXRpb25zIiwibG9jYWxDb250ZXh0IiwidW5pZmllZEFnYWluc3RFcXVpdmFsZW5jZSIsImVxdWl2YWxlbmNlTWF0Y2hlc1ZhcmlhYmxlTm9kZSIsImVxdWl2YWxlbmNlTWF0Y2hlc1Rlcm1Ob2RlIiwiZnJvbVN1YnN0aXR1dGlvbk5vZGUiLCJzdWJzdGl0dXRpb25Ob2RlIiwidGVybUZvclZhcmlhYmxlU3Vic3RpdHV0aW9uIiwiZnJvbVZhcmlhYmxlTm9kZUFuZFRlcm1Ob2RlIiwiZnJvbVN1YnN0aXR1dGlvbkFuZFN1YnN0aXR1dGlvbnMiLCJzdWJzdGl0dXRlVGVybU5vZGUiLCJzdWJzdGl0dXRlVmFyaWFibGVOb2RlIiwiZnJvbVN1YnN0aXR1dGlvbk5vZGVBbmRTdWJzdGl0dXRpb25zIiwiU3Vic3RpdHV0aW9uIiwidGVybVZhcmlhYmxlTm9kZSIsInNvbWUiLCJzdWJzdGl0dXRpb25NYXRjaGVzVmFyaWFibGVOb2RlIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQVNxQkE7OzttRUFQSTtxQkFFQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUUxQixJQUFNQyxnQkFBZ0JDLElBQUFBLGdCQUFTLEVBQUMsYUFDMUJDLG9CQUFvQkQsSUFBQUEsZ0JBQVMsRUFBQztBQUVyQixJQUFBLEFBQU1GLDRDQUFELEFBQUw7Y0FBTUE7YUFBQUEsNEJBQ1BJLFlBQVksRUFBRUMsUUFBUTtnQ0FEZkw7O2dCQUVqQixrQkFGaUJBO1FBSWpCLE1BQUtJLFlBQVksR0FBR0E7UUFDcEIsTUFBS0MsUUFBUSxHQUFHQTs7O2tCQUxDTDs7WUFRbkJNLEtBQUFBO21CQUFBQSxT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