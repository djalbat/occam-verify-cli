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
            key: "transformedTermNode",
            value: function transformedTermNode(substitutions) {
                var transformedSubstitution = null;
                var transformedTermNode = transformTermNode(this.termNode, substitutions);
                if (transformedTermNode !== null) {
                    var termNode = transformedTermNode, termForVariableSubstitution = new TermForVariableSubstitution(termNode, this.variableNode);
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
                    var variableNode = transformedVariableNode, termForVariableSubstitution = new TermForVariableSubstitution(this.termNode, variableNode);
                    transformedSubstitution = termForVariableSubstitution; ///
                }
                return transformedSubstitution;
            }
        },
        {
            key: "unifyTerm",
            value: function unifyTerm(termNode) {
                var matchesTermNode = this.matchTermNode(termNode), termUnified = matchesTermNode; ///
                return termUnified;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zdWJzdGl0dXRpb24vdGVybUZvclZhcmlhYmxlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgU3Vic3RpdHV0aW9uIGZyb20gXCIuLi9zdWJzdGl0dXRpb25cIjtcblxuaW1wb3J0IHsgbm9kZVF1ZXJ5IH0gZnJvbSBcIi4uL3V0aWxpdGllcy9xdWVyeVwiO1xuXG5jb25zdCB0ZXJtTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiLyovdGVybSFcIiksXG4gICAgICB2YXJpYWJsZU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi8qL3ZhcmlhYmxlIVwiKTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGVybUZvclZhcmlhYmxlU3Vic3RpdHV0aW9uIGV4dGVuZHMgU3Vic3RpdHV0aW9uIHtcbiAgY29uc3RydWN0b3IodmFyaWFibGVOb2RlLCB0ZXJtTm9kZSkge1xuICAgIHN1cGVyKCk7XG5cbiAgICB0aGlzLnZhcmlhYmxlTm9kZSA9IHZhcmlhYmxlTm9kZTtcbiAgICB0aGlzLnRlcm1Ob2RlID0gdGVybU5vZGU7XG4gIH1cblxuICBnZXRWYXJpYWJsZU5vZGUoKSB7XG4gICAgcmV0dXJuIHRoaXMudmFyaWFibGVOb2RlO1xuICB9XG5cbiAgZ2V0VGVybU5vZGUoKSB7XG4gICAgcmV0dXJuIHRoaXMudGVybU5vZGU7XG4gIH1cblxuICBnZXROb2RlKCkge1xuICAgIGNvbnN0IG5vZGUgPSB0aGlzLnRlcm1Ob2RlOyAvLy9cblxuICAgIHJldHVybiBub2RlO1xuICB9XG5cbiAgdHJhbnNmb3JtZWQoc3Vic3RpdHV0aW9ucykge1xuICAgIGxldCB0cmFuc2Zvcm1lZFN1YnN0aXR1dGlvbiA9IG51bGw7XG5cbiAgICBjb25zdCB0cmFuc2Zvcm1lZFRlcm1Ob2RlID0gdHJhbnNmb3JtVGVybU5vZGUodGhpcy50ZXJtTm9kZSwgc3Vic3RpdHV0aW9ucyksXG4gICAgICAgICAgdHJhbnNmb3JtZWRWYXJpYWJsZU5vZGUgPSB0cmFuc2Zvcm1WYXJpYWJsZU5vZGUodGhpcy52YXJpYWJsZU5vZGUsIHN1YnN0aXR1dGlvbnMpO1xuXG4gICAgaWYgKCh0cmFuc2Zvcm1lZFRlcm1Ob2RlICE9PSBudWxsKSAmJiAodHJhbnNmb3JtZWRWYXJpYWJsZU5vZGUgIT09IG51bGwpKSB7XG4gICAgICBjb25zdCB0ZXJtTm9kZSA9IHRyYW5zZm9ybWVkVGVybU5vZGUsIC8vL1xuICAgICAgICAgICAgdmFyaWFibGVOb2RlID0gdHJhbnNmb3JtZWRWYXJpYWJsZU5vZGUsXG4gICAgICAgICAgICB0ZXJtRm9yVmFyaWFibGVTdWJzdGl0dXRpb24gPSBuZXcgVGVybUZvclZhcmlhYmxlU3Vic3RpdHV0aW9uKHRlcm1Ob2RlLCB2YXJpYWJsZU5vZGUpO1xuXG4gICAgICB0cmFuc2Zvcm1lZFN1YnN0aXR1dGlvbiA9IHRlcm1Gb3JWYXJpYWJsZVN1YnN0aXR1dGlvbjsgIC8vL1xuICAgIH1cblxuICAgIHJldHVybiB0cmFuc2Zvcm1lZFN1YnN0aXR1dGlvbjtcbiAgfVxuXG4gIHRyYW5zZm9ybWVkVGVybU5vZGUoc3Vic3RpdHV0aW9ucykge1xuICAgIGxldCB0cmFuc2Zvcm1lZFN1YnN0aXR1dGlvbiA9IG51bGw7XG5cbiAgICBjb25zdCB0cmFuc2Zvcm1lZFRlcm1Ob2RlID0gdHJhbnNmb3JtVGVybU5vZGUodGhpcy50ZXJtTm9kZSwgc3Vic3RpdHV0aW9ucyk7XG5cbiAgICBpZiAodHJhbnNmb3JtZWRUZXJtTm9kZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgdGVybU5vZGUgPSB0cmFuc2Zvcm1lZFRlcm1Ob2RlLCAvLy9cbiAgICAgICAgICAgIHRlcm1Gb3JWYXJpYWJsZVN1YnN0aXR1dGlvbiA9IG5ldyBUZXJtRm9yVmFyaWFibGVTdWJzdGl0dXRpb24odGVybU5vZGUsIHRoaXMudmFyaWFibGVOb2RlKTtcblxuICAgICAgdHJhbnNmb3JtZWRTdWJzdGl0dXRpb24gPSB0ZXJtRm9yVmFyaWFibGVTdWJzdGl0dXRpb247ICAvLy9cbiAgICB9XG5cbiAgICByZXR1cm4gdHJhbnNmb3JtZWRTdWJzdGl0dXRpb247XG4gIH1cblxuICB0cmFuc2Zvcm1lZFZhcmlhYmxlTm9kZShzdWJzdGl0dXRpb25zKSB7XG4gICAgbGV0IHRyYW5zZm9ybWVkU3Vic3RpdHV0aW9uID0gbnVsbDtcblxuICAgIGNvbnN0IHRyYW5zZm9ybWVkVmFyaWFibGVOb2RlID0gdHJhbnNmb3JtVmFyaWFibGVOb2RlKHRoaXMudmFyaWFibGVOb2RlLCBzdWJzdGl0dXRpb25zKTtcblxuICAgIGlmICh0cmFuc2Zvcm1lZFZhcmlhYmxlTm9kZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgdmFyaWFibGVOb2RlID0gdHJhbnNmb3JtZWRWYXJpYWJsZU5vZGUsXG4gICAgICAgICAgICB0ZXJtRm9yVmFyaWFibGVTdWJzdGl0dXRpb24gPSBuZXcgVGVybUZvclZhcmlhYmxlU3Vic3RpdHV0aW9uKHRoaXMudGVybU5vZGUsIHZhcmlhYmxlTm9kZSk7XG5cbiAgICAgIHRyYW5zZm9ybWVkU3Vic3RpdHV0aW9uID0gdGVybUZvclZhcmlhYmxlU3Vic3RpdHV0aW9uOyAgLy8vXG4gICAgfVxuXG4gICAgcmV0dXJuIHRyYW5zZm9ybWVkU3Vic3RpdHV0aW9uO1xuICB9XG5cbiAgdW5pZnlUZXJtKHRlcm1Ob2RlKSB7XG4gICAgY29uc3QgbWF0Y2hlc1Rlcm1Ob2RlID0gdGhpcy5tYXRjaFRlcm1Ob2RlKHRlcm1Ob2RlKSxcbiAgICAgICAgICB0ZXJtVW5pZmllZCA9IG1hdGNoZXNUZXJtTm9kZTsgIC8vL1xuXG4gICAgcmV0dXJuIHRlcm1VbmlmaWVkO1xuICB9XG5cbiAgbWF0Y2hUZXJtTm9kZSh0ZXJtTm9kZSkge1xuICAgIGNvbnN0IG1hdGNoZXNUZXJtTm9kZSA9IHRoaXMudGVybU5vZGUubWF0Y2godGVybU5vZGUpO1xuXG4gICAgcmV0dXJuIG1hdGNoZXNUZXJtTm9kZTtcbiAgfVxuXG4gIG1hdGNoVmFyaWFibGVOb2RlKHZhcmlhYmxlTm9kZSkge1xuICAgIGNvbnN0IG1hdGNoZXNWYXJpYWJsZU5vZGUgPSB0aGlzLnZhcmlhYmxlTm9kZS5tYXRjaCh2YXJpYWJsZU5vZGUpO1xuXG4gICAgcmV0dXJuIG1hdGNoZXNWYXJpYWJsZU5vZGU7XG4gIH1cblxuICB1bmlmeVdpdGhFcXVpdmFsZW5jZShlcXVpdmFsZW5jZSwgc3Vic3RpdHV0aW9ucywgbG9jYWxDb250ZXh0QSwgbG9jYWxDb250ZXh0Qikge1xuICAgIGxldCB1bmlmaWVkV2l0aEVxdWl2YWxlbmNlO1xuXG4gICAgY29uc3QgZXF1aXZhbGVuY2VNYXRjaGVzVmFyaWFibGVOb2RlID0gZXF1aXZhbGVuY2UubWF0Y2hWYXJpYWJsZU5vZGUodGhpcy52YXJpYWJsZU5vZGUpO1xuXG4gICAgaWYgKGVxdWl2YWxlbmNlTWF0Y2hlc1ZhcmlhYmxlTm9kZSkge1xuICAgICAgY29uc3QgZXF1aXZhbGVuY2VNYXRjaGVzVGVybU5vZGUgPSBlcXVpdmFsZW5jZS5tYXRjaFRlcm1Ob2RlKHRoaXMudGVybU5vZGUpO1xuXG4gICAgICBpZiAoZXF1aXZhbGVuY2VNYXRjaGVzVGVybU5vZGUpIHtcbiAgICAgICAgdW5pZmllZFdpdGhFcXVpdmFsZW5jZSA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHVuaWZpZWRXaXRoRXF1aXZhbGVuY2U7XG4gIH1cblxuICBhc1N0cmluZyhsb2NhbENvbnRleHRBLCBsb2NhbENvbnRleHRCKSB7XG4gICAgY29uc3QgdGVybU5vZGVCID0gdGhpcy50ZXJtTm9kZSwgIC8vL1xuICAgICAgICAgIHRlcm1TdHJpbmdCID0gbG9jYWxDb250ZXh0Qi5ub2RlQXNTdHJpbmcodGVybU5vZGVCKSxcbiAgICAgICAgICB2YXJpYWJsZU5vZGVBID0gdGhpcy52YXJpYWJsZU5vZGUsICAvLy9cbiAgICAgICAgICB2YXJpYWJsZVN0cmluZ0EgPSBsb2NhbENvbnRleHRBLm5vZGVBc1N0cmluZyh2YXJpYWJsZU5vZGVBKSxcbiAgICAgICAgICBzdHJpbmcgPSBgWyR7dGVybVN0cmluZ0J9IGZvciAke3ZhcmlhYmxlU3RyaW5nQX1dYDtcblxuICAgIHJldHVybiBzdHJpbmc7XG4gIH1cblxuICBzdGF0aWMgZnJvbVN1YnN0aXR1dGlvbk5vZGUoc3Vic3RpdHV0aW9uTm9kZSkge1xuICAgIGNvbnN0IHRlcm1Ob2RlID0gdGVybU5vZGVRdWVyeShzdWJzdGl0dXRpb25Ob2RlKSxcbiAgICAgICAgICB2YXJpYWJsZU5vZGUgPSB2YXJpYWJsZU5vZGVRdWVyeShzdWJzdGl0dXRpb25Ob2RlKSxcbiAgICAgICAgICB0ZXJtRm9yVmFyaWFibGVTdWJzdGl0dXRpb24gPSBuZXcgVGVybUZvclZhcmlhYmxlU3Vic3RpdHV0aW9uKHZhcmlhYmxlTm9kZSwgdGVybU5vZGUpO1xuXG4gICAgcmV0dXJuIHRlcm1Gb3JWYXJpYWJsZVN1YnN0aXR1dGlvbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tVmFyaWFibGVOb2RlQW5kVGVybU5vZGUodmFyaWFibGVOb2RlLCB0ZXJtTm9kZSkge1xuICAgIGNvbnN0IHRlcm1Gb3JWYXJpYWJsZVN1YnN0aXR1dGlvbiA9IG5ldyBUZXJtRm9yVmFyaWFibGVTdWJzdGl0dXRpb24odmFyaWFibGVOb2RlLCB0ZXJtTm9kZSk7XG5cbiAgICByZXR1cm4gdGVybUZvclZhcmlhYmxlU3Vic3RpdHV0aW9uO1xuICB9XG59XG5cbmZ1bmN0aW9uIHRyYW5zZm9ybVRlcm1Ob2RlKHRlcm1Ob2RlLCBzdWJzdGl0dXRpb25zKSB7XG4gIGxldCB0cmFuc2Zvcm1lZFRlcm1Ob2RlID0gbnVsbDtcblxuICBjb25zdCB0ZXJtVmFyaWFibGVOb2RlID0gdmFyaWFibGVOb2RlUXVlcnkodGVybU5vZGUpO1xuXG4gIGlmICh0ZXJtVmFyaWFibGVOb2RlICE9PSBudWxsKSB7XG4gICAgc3Vic3RpdHV0aW9ucy5zb21lU3Vic3RpdHV0aW9uKChzdWJzdGl0dXRpb24pID0+IHtcbiAgICAgIGNvbnN0IHN1YnN0aXR1dGlvbk1hdGNoZXNWYXJpYWJsZU5vZGUgPSBzdWJzdGl0dXRpb24ubWF0Y2hWYXJpYWJsZU5vZGUodGVybVZhcmlhYmxlTm9kZSk7XG5cbiAgICAgIGlmIChzdWJzdGl0dXRpb25NYXRjaGVzVmFyaWFibGVOb2RlKSB7XG4gICAgICAgIGNvbnN0IHRlcm1Ob2RlID0gc3Vic3RpdHV0aW9uLmdldFRlcm1Ob2RlKCk7XG5cbiAgICAgICAgdHJhbnNmb3JtZWRUZXJtTm9kZSA9IHRlcm1Ob2RlOyAvLy8vXG5cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICByZXR1cm4gdHJhbnNmb3JtZWRUZXJtTm9kZTtcbn1cblxuZnVuY3Rpb24gdHJhbnNmb3JtVmFyaWFibGVOb2RlKHZhcmlhYmxlTm9kZSwgc3Vic3RpdHV0aW9ucykge1xuICBsZXQgdHJhbnNmb3JtZWRWYXJpYWJsZU5vZGUgPSBudWxsO1xuXG4gIHN1YnN0aXR1dGlvbnMuc29tZVN1YnN0aXR1dGlvbigoc3Vic3RpdHV0aW9uKSA9PiB7XG4gICAgY29uc3Qgc3Vic3RpdHV0aW9uTWF0Y2hlc1ZhcmlhYmxlTm9kZSA9IHN1YnN0aXR1dGlvbi5tYXRjaFZhcmlhYmxlTm9kZSh2YXJpYWJsZU5vZGUpO1xuXG4gICAgaWYgKHN1YnN0aXR1dGlvbk1hdGNoZXNWYXJpYWJsZU5vZGUpIHtcbiAgICAgIGNvbnN0IHRlcm1Ob2RlID0gc3Vic3RpdHV0aW9uLmdldFRlcm1Ob2RlKCksXG4gICAgICAgICAgICB2YXJpYWJsZU5vZGUgPSB2YXJpYWJsZU5vZGVRdWVyeSh0ZXJtTm9kZSk7XG5cbiAgICAgIGlmICh2YXJpYWJsZU5vZGUgIT09IG51bGwpIHtcbiAgICAgICAgdHJhbnNmb3JtZWRWYXJpYWJsZU5vZGUgPSB2YXJpYWJsZU5vZGU7ICAvLy9cblxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiB0cmFuc2Zvcm1lZFZhcmlhYmxlTm9kZTtcbn1cbiJdLCJuYW1lcyI6WyJUZXJtRm9yVmFyaWFibGVTdWJzdGl0dXRpb24iLCJ0ZXJtTm9kZVF1ZXJ5Iiwibm9kZVF1ZXJ5IiwidmFyaWFibGVOb2RlUXVlcnkiLCJ2YXJpYWJsZU5vZGUiLCJ0ZXJtTm9kZSIsImdldFZhcmlhYmxlTm9kZSIsImdldFRlcm1Ob2RlIiwiZ2V0Tm9kZSIsIm5vZGUiLCJ0cmFuc2Zvcm1lZCIsInN1YnN0aXR1dGlvbnMiLCJ0cmFuc2Zvcm1lZFN1YnN0aXR1dGlvbiIsInRyYW5zZm9ybWVkVGVybU5vZGUiLCJ0cmFuc2Zvcm1UZXJtTm9kZSIsInRyYW5zZm9ybWVkVmFyaWFibGVOb2RlIiwidHJhbnNmb3JtVmFyaWFibGVOb2RlIiwidGVybUZvclZhcmlhYmxlU3Vic3RpdHV0aW9uIiwidW5pZnlUZXJtIiwibWF0Y2hlc1Rlcm1Ob2RlIiwibWF0Y2hUZXJtTm9kZSIsInRlcm1VbmlmaWVkIiwibWF0Y2giLCJtYXRjaFZhcmlhYmxlTm9kZSIsIm1hdGNoZXNWYXJpYWJsZU5vZGUiLCJ1bmlmeVdpdGhFcXVpdmFsZW5jZSIsImVxdWl2YWxlbmNlIiwibG9jYWxDb250ZXh0QSIsImxvY2FsQ29udGV4dEIiLCJ1bmlmaWVkV2l0aEVxdWl2YWxlbmNlIiwiZXF1aXZhbGVuY2VNYXRjaGVzVmFyaWFibGVOb2RlIiwiZXF1aXZhbGVuY2VNYXRjaGVzVGVybU5vZGUiLCJhc1N0cmluZyIsInRlcm1Ob2RlQiIsInRlcm1TdHJpbmdCIiwibm9kZUFzU3RyaW5nIiwidmFyaWFibGVOb2RlQSIsInZhcmlhYmxlU3RyaW5nQSIsInN0cmluZyIsImZyb21TdWJzdGl0dXRpb25Ob2RlIiwic3Vic3RpdHV0aW9uTm9kZSIsImZyb21WYXJpYWJsZU5vZGVBbmRUZXJtTm9kZSIsIlN1YnN0aXR1dGlvbiIsInRlcm1WYXJpYWJsZU5vZGUiLCJzb21lU3Vic3RpdHV0aW9uIiwic3Vic3RpdHV0aW9uIiwic3Vic3RpdHV0aW9uTWF0Y2hlc1ZhcmlhYmxlTm9kZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFTcUJBOzs7bUVBUEk7cUJBRUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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