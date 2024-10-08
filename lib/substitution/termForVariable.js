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
var _shim = /*#__PURE__*/ _interop_require_default(require("../shim"));
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
var termVariableNodeQuery = (0, _query.nodeQuery)("/term/variable!"), substitutionTermmNodeQuery = (0, _query.nodeQuery)("/substitution/term!"), substitutionsVariableNodeQuery = (0, _query.nodeQuery)("/substitution/variable!");
var TermForVariableSubstitution = /*#__PURE__*/ function(Substitution) {
    _inherits(TermForVariableSubstitution, Substitution);
    function TermForVariableSubstitution(string, termNode, variableNode) {
        _class_call_check(this, TermForVariableSubstitution);
        var _this;
        _this = _call_super(this, TermForVariableSubstitution, [
            string
        ]);
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
            key: "isEqualTo",
            value: function isEqualTo(substitution) {
                var termNode = substitution.getTermNode(), variableNode = substitution.getVariableNode(), termNodeMatches = this.matchTermNode(termNode), variableNodeMatches = this.matchVariableNode(variableNode), equalTo = termNodeMatches && variableNodeMatches;
                return equalTo;
            }
        },
        {
            key: "matchTermNode",
            value: function matchTermNode(termNode) {
                termNode = (0, _brackets.stripBracketsFromTerm)(termNode); ///
                var termNodeMatches = this.termNode.match(termNode);
                return termNodeMatches;
            }
        },
        {
            key: "matchVariableNode",
            value: function matchVariableNode(variableNode) {
                var variableNodeMatches = this.variableNode.match(variableNode);
                return variableNodeMatches;
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
        }
    ], [
        {
            key: "fromTernAndVariable",
            value: function fromTernAndVariable(term, variable, localContext) {
                var termNode = term.getNode();
                termNode = (0, _brackets.stripBracketsFromTerm)(termNode); ///
                var Term = _shim.default.Term;
                term = Term.fromTermNode(termNode, localContext);
                var string = stringFromTermAndVariable(term, variable), variableNode = variable.getNode(), termForVariableSubstitution = new TermForVariableSubstitution(string, termNode, variableNode);
                return termForVariableSubstitution;
            }
        },
        {
            key: "fromSubstitutionNode",
            value: function fromSubstitutionNode(substitutionNode) {
                var termForVariableSubstitution = null;
                var substitutionTermNode = substitutionTermmNodeQuery(substitutionNode);
                if (substitutionTermNode !== null) {
                    var termNode = substitutionTermNode; ///
                    termNode = (0, _brackets.stripBracketsFromTerm)(termNode); ///
                    var substitutionVariableNode = substitutionsVariableNodeQuery(substitutionNode), variableNode = substitutionVariableNode; ///
                    termForVariableSubstitution = new TermForVariableSubstitution(termNode, variableNode);
                }
                return termForVariableSubstitution;
            }
        }
    ]);
    return TermForVariableSubstitution;
}(_substitution.default);
function transformTermNode(termNode, substitutions) {
    var transformedTermNode = null;
    var termVariableNode = termVariableNodeQuery(termNode);
    if (termVariableNode !== null) {
        var variableNode = termVariableNode; ///
        substitutions.someSubstitution(function(substitution) {
            var substitutionMatchesVariableNode = substitution.matchVariableNode(variableNode);
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
        var variableNodeMatches = substitution.matchVariableNode(variableNode);
        if (variableNodeMatches) {
            var termNode = substitution.getTermNode(), termVariableNode = termVariableNodeQuery(termNode);
            if (termVariableNode !== null) {
                transformedVariableNode = termVariableNode; ///
                return true;
            }
        }
    });
    return transformedVariableNode;
}
function stringFromTermAndVariable(term, variable) {
    var termString = term.getString(), variableString = variable.getString(), string = "[".concat(termString, " for ").concat(variableString, "]");
    return string;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zdWJzdGl0dXRpb24vdGVybUZvclZhcmlhYmxlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgc2hpbSBmcm9tIFwiLi4vc2hpbVwiO1xuaW1wb3J0IFN1YnN0aXR1dGlvbiBmcm9tIFwiLi4vc3Vic3RpdHV0aW9uXCI7XG5cbmltcG9ydCB7IG5vZGVRdWVyeSB9IGZyb20gXCIuLi91dGlsaXRpZXMvcXVlcnlcIjtcbmltcG9ydCB7IHN0cmlwQnJhY2tldHNGcm9tVGVybSB9IGZyb20gXCIuLi91dGlsaXRpZXMvYnJhY2tldHNcIjtcblxuY29uc3QgdGVybVZhcmlhYmxlTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3Rlcm0vdmFyaWFibGUhXCIpLFxuICAgICAgc3Vic3RpdHV0aW9uVGVybW1Ob2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvc3Vic3RpdHV0aW9uL3Rlcm0hXCIpLFxuICAgICAgc3Vic3RpdHV0aW9uc1ZhcmlhYmxlTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3N1YnN0aXR1dGlvbi92YXJpYWJsZSFcIik7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRlcm1Gb3JWYXJpYWJsZVN1YnN0aXR1dGlvbiBleHRlbmRzIFN1YnN0aXR1dGlvbiB7XG4gIGNvbnN0cnVjdG9yKHN0cmluZywgdGVybU5vZGUsIHZhcmlhYmxlTm9kZSkge1xuICAgIHN1cGVyKHN0cmluZyk7XG5cbiAgICB0aGlzLnRlcm1Ob2RlID0gdGVybU5vZGU7XG4gICAgdGhpcy52YXJpYWJsZU5vZGUgPSB2YXJpYWJsZU5vZGU7XG4gIH1cblxuICBnZXRUZXJtTm9kZSgpIHtcbiAgICByZXR1cm4gdGhpcy50ZXJtTm9kZTtcbiAgfVxuXG4gIGdldFZhcmlhYmxlTm9kZSgpIHtcbiAgICByZXR1cm4gdGhpcy52YXJpYWJsZU5vZGU7XG4gIH1cblxuICB0cmFuc2Zvcm1lZChzdWJzdGl0dXRpb25zKSB7XG4gICAgbGV0IHRyYW5zZm9ybWVkU3Vic3RpdHV0aW9uID0gbnVsbDtcblxuICAgIGNvbnN0IHRyYW5zZm9ybWVkVGVybU5vZGUgPSB0cmFuc2Zvcm1UZXJtTm9kZSh0aGlzLnRlcm1Ob2RlLCBzdWJzdGl0dXRpb25zKSxcbiAgICAgICAgICB0cmFuc2Zvcm1lZFZhcmlhYmxlTm9kZSA9IHRyYW5zZm9ybVZhcmlhYmxlTm9kZSh0aGlzLnZhcmlhYmxlTm9kZSwgc3Vic3RpdHV0aW9ucyk7XG5cbiAgICBpZiAoKHRyYW5zZm9ybWVkVGVybU5vZGUgIT09IG51bGwpICYmICh0cmFuc2Zvcm1lZFZhcmlhYmxlTm9kZSAhPT0gbnVsbCkpIHtcbiAgICAgIGNvbnN0IHRlcm1Ob2RlID0gdHJhbnNmb3JtZWRUZXJtTm9kZSwgLy8vXG4gICAgICAgICAgICB2YXJpYWJsZU5vZGUgPSB0cmFuc2Zvcm1lZFZhcmlhYmxlTm9kZSwgLy8vXG4gICAgICAgICAgICB0ZXJtRm9yVmFyaWFibGVTdWJzdGl0dXRpb24gPSBuZXcgVGVybUZvclZhcmlhYmxlU3Vic3RpdHV0aW9uKHRlcm1Ob2RlLCB2YXJpYWJsZU5vZGUpO1xuXG4gICAgICB0cmFuc2Zvcm1lZFN1YnN0aXR1dGlvbiA9IHRlcm1Gb3JWYXJpYWJsZVN1YnN0aXR1dGlvbjsgIC8vL1xuICAgIH1cblxuICAgIHJldHVybiB0cmFuc2Zvcm1lZFN1YnN0aXR1dGlvbjtcbiAgfVxuXG4gIGlzRXF1YWxUbyhzdWJzdGl0dXRpb24pIHtcbiAgICBjb25zdCB0ZXJtTm9kZSA9IHN1YnN0aXR1dGlvbi5nZXRUZXJtTm9kZSgpLFxuICAgICAgICAgIHZhcmlhYmxlTm9kZSA9IHN1YnN0aXR1dGlvbi5nZXRWYXJpYWJsZU5vZGUoKSxcbiAgICAgICAgICB0ZXJtTm9kZU1hdGNoZXMgPSB0aGlzLm1hdGNoVGVybU5vZGUodGVybU5vZGUpLFxuICAgICAgICAgIHZhcmlhYmxlTm9kZU1hdGNoZXMgPSB0aGlzLm1hdGNoVmFyaWFibGVOb2RlKHZhcmlhYmxlTm9kZSksXG4gICAgICAgICAgZXF1YWxUbyA9ICh0ZXJtTm9kZU1hdGNoZXMgJiYgdmFyaWFibGVOb2RlTWF0Y2hlcyk7XG5cbiAgICByZXR1cm4gZXF1YWxUbztcbiAgfVxuXG4gIG1hdGNoVGVybU5vZGUodGVybU5vZGUpIHtcbiAgICB0ZXJtTm9kZSA9IHN0cmlwQnJhY2tldHNGcm9tVGVybSh0ZXJtTm9kZSk7IC8vL1xuXG4gICAgY29uc3QgdGVybU5vZGVNYXRjaGVzID0gdGhpcy50ZXJtTm9kZS5tYXRjaCh0ZXJtTm9kZSk7XG5cbiAgICByZXR1cm4gdGVybU5vZGVNYXRjaGVzO1xuICB9XG5cbiAgbWF0Y2hWYXJpYWJsZU5vZGUodmFyaWFibGVOb2RlKSB7XG4gICAgY29uc3QgdmFyaWFibGVOb2RlTWF0Y2hlcyA9IHRoaXMudmFyaWFibGVOb2RlLm1hdGNoKHZhcmlhYmxlTm9kZSk7XG5cbiAgICByZXR1cm4gdmFyaWFibGVOb2RlTWF0Y2hlcztcbiAgfVxuXG4gIHVuaWZ5V2l0aEVxdWl2YWxlbmNlKGVxdWl2YWxlbmNlLCBzdWJzdGl0dXRpb25zLCBsb2NhbENvbnRleHRBLCBsb2NhbENvbnRleHRCKSB7XG4gICAgbGV0IHVuaWZpZWRXaXRoRXF1aXZhbGVuY2U7XG5cbiAgICBjb25zdCBlcXVpdmFsZW5jZU1hdGNoZXNUZXJtTm9kZSA9IGVxdWl2YWxlbmNlLm1hdGNoVGVybU5vZGUodGhpcy50ZXJtTm9kZSk7XG5cbiAgICBpZiAoZXF1aXZhbGVuY2VNYXRjaGVzVGVybU5vZGUpIHtcbiAgICAgIGNvbnN0IGVxdWl2YWxlbmNlTWF0Y2hlc1ZhcmlhYmxlTm9kZSA9IGVxdWl2YWxlbmNlLm1hdGNoVmFyaWFibGVOb2RlKHRoaXMudmFyaWFibGVOb2RlKTtcblxuICAgICAgaWYgKGVxdWl2YWxlbmNlTWF0Y2hlc1ZhcmlhYmxlTm9kZSkge1xuICAgICAgICAgIHVuaWZpZWRXaXRoRXF1aXZhbGVuY2UgPSB0cnVlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHVuaWZpZWRXaXRoRXF1aXZhbGVuY2U7XG4gIH1cblxuICBzdGF0aWMgZnJvbVRlcm5BbmRWYXJpYWJsZSh0ZXJtLCB2YXJpYWJsZSwgbG9jYWxDb250ZXh0KSB7XG4gICAgbGV0IHRlcm1Ob2RlID0gdGVybS5nZXROb2RlKCk7XG5cbiAgICB0ZXJtTm9kZSA9IHN0cmlwQnJhY2tldHNGcm9tVGVybSh0ZXJtTm9kZSk7IC8vL1xuXG4gICAgY29uc3QgeyBUZXJtIH0gPSBzaGltO1xuXG4gICAgdGVybSA9IFRlcm0uZnJvbVRlcm1Ob2RlKHRlcm1Ob2RlLCBsb2NhbENvbnRleHQpXG5cbiAgICBjb25zdCBzdHJpbmcgPSBzdHJpbmdGcm9tVGVybUFuZFZhcmlhYmxlKHRlcm0sIHZhcmlhYmxlKSxcbiAgICAgICAgICB2YXJpYWJsZU5vZGUgPSB2YXJpYWJsZS5nZXROb2RlKCksXG4gICAgICAgICAgdGVybUZvclZhcmlhYmxlU3Vic3RpdHV0aW9uID0gbmV3IFRlcm1Gb3JWYXJpYWJsZVN1YnN0aXR1dGlvbihzdHJpbmcsIHRlcm1Ob2RlLCB2YXJpYWJsZU5vZGUpO1xuXG4gICAgcmV0dXJuIHRlcm1Gb3JWYXJpYWJsZVN1YnN0aXR1dGlvbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tU3Vic3RpdHV0aW9uTm9kZShzdWJzdGl0dXRpb25Ob2RlKSB7XG4gICAgbGV0IHRlcm1Gb3JWYXJpYWJsZVN1YnN0aXR1dGlvbiA9IG51bGw7XG5cbiAgICBsZXQgc3Vic3RpdHV0aW9uVGVybU5vZGUgPSBzdWJzdGl0dXRpb25UZXJtbU5vZGVRdWVyeShzdWJzdGl0dXRpb25Ob2RlKTtcblxuICAgIGlmIChzdWJzdGl0dXRpb25UZXJtTm9kZSAhPT0gbnVsbCkge1xuICAgICAgbGV0IHRlcm1Ob2RlID0gc3Vic3RpdHV0aW9uVGVybU5vZGU7ICAvLy9cblxuICAgICAgdGVybU5vZGUgPSBzdHJpcEJyYWNrZXRzRnJvbVRlcm0odGVybU5vZGUpOyAvLy9cblxuICAgICAgY29uc3Qgc3Vic3RpdHV0aW9uVmFyaWFibGVOb2RlID0gc3Vic3RpdHV0aW9uc1ZhcmlhYmxlTm9kZVF1ZXJ5KHN1YnN0aXR1dGlvbk5vZGUpLFxuICAgICAgICAgICAgdmFyaWFibGVOb2RlID0gc3Vic3RpdHV0aW9uVmFyaWFibGVOb2RlOyAgLy8vXG5cbiAgICAgIHRlcm1Gb3JWYXJpYWJsZVN1YnN0aXR1dGlvbiA9IG5ldyBUZXJtRm9yVmFyaWFibGVTdWJzdGl0dXRpb24odGVybU5vZGUsIHZhcmlhYmxlTm9kZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRlcm1Gb3JWYXJpYWJsZVN1YnN0aXR1dGlvbjtcbiAgfVxufVxuXG5mdW5jdGlvbiB0cmFuc2Zvcm1UZXJtTm9kZSh0ZXJtTm9kZSwgc3Vic3RpdHV0aW9ucykge1xuICBsZXQgdHJhbnNmb3JtZWRUZXJtTm9kZSA9IG51bGw7XG5cbiAgY29uc3QgdGVybVZhcmlhYmxlTm9kZSA9IHRlcm1WYXJpYWJsZU5vZGVRdWVyeSh0ZXJtTm9kZSk7XG5cbiAgaWYgKHRlcm1WYXJpYWJsZU5vZGUgIT09IG51bGwpIHtcbiAgICBjb25zdCB2YXJpYWJsZU5vZGUgPSB0ZXJtVmFyaWFibGVOb2RlOyAgLy8vXG5cbiAgICBzdWJzdGl0dXRpb25zLnNvbWVTdWJzdGl0dXRpb24oKHN1YnN0aXR1dGlvbikgPT4ge1xuICAgICAgY29uc3Qgc3Vic3RpdHV0aW9uTWF0Y2hlc1ZhcmlhYmxlTm9kZSA9IHN1YnN0aXR1dGlvbi5tYXRjaFZhcmlhYmxlTm9kZSh2YXJpYWJsZU5vZGUpO1xuXG4gICAgICBpZiAoc3Vic3RpdHV0aW9uTWF0Y2hlc1ZhcmlhYmxlTm9kZSkge1xuICAgICAgICBjb25zdCB0ZXJtTm9kZSA9IHN1YnN0aXR1dGlvbi5nZXRUZXJtTm9kZSgpO1xuXG4gICAgICAgIHRyYW5zZm9ybWVkVGVybU5vZGUgPSB0ZXJtTm9kZTsgLy8vL1xuXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIHRyYW5zZm9ybWVkVGVybU5vZGU7XG59XG5cbmZ1bmN0aW9uIHRyYW5zZm9ybVZhcmlhYmxlTm9kZSh2YXJpYWJsZU5vZGUsIHN1YnN0aXR1dGlvbnMpIHtcbiAgbGV0IHRyYW5zZm9ybWVkVmFyaWFibGVOb2RlID0gbnVsbDtcblxuICBzdWJzdGl0dXRpb25zLnNvbWVTdWJzdGl0dXRpb24oKHN1YnN0aXR1dGlvbikgPT4ge1xuICAgIGNvbnN0IHZhcmlhYmxlTm9kZU1hdGNoZXMgPSBzdWJzdGl0dXRpb24ubWF0Y2hWYXJpYWJsZU5vZGUodmFyaWFibGVOb2RlKTtcblxuICAgIGlmICh2YXJpYWJsZU5vZGVNYXRjaGVzKSB7XG4gICAgICBjb25zdCB0ZXJtTm9kZSA9IHN1YnN0aXR1dGlvbi5nZXRUZXJtTm9kZSgpLFxuICAgICAgICAgICAgdGVybVZhcmlhYmxlTm9kZSA9IHRlcm1WYXJpYWJsZU5vZGVRdWVyeSh0ZXJtTm9kZSk7XG5cbiAgICAgIGlmICh0ZXJtVmFyaWFibGVOb2RlICE9PSBudWxsKSB7XG4gICAgICAgIHRyYW5zZm9ybWVkVmFyaWFibGVOb2RlID0gdGVybVZhcmlhYmxlTm9kZTsgIC8vL1xuXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIHRyYW5zZm9ybWVkVmFyaWFibGVOb2RlO1xufVxuXG5mdW5jdGlvbiBzdHJpbmdGcm9tVGVybUFuZFZhcmlhYmxlKHRlcm0sIHZhcmlhYmxlKSB7XG4gIGNvbnN0IHRlcm1TdHJpbmcgPSB0ZXJtLmdldFN0cmluZygpLFxuICAgICAgICB2YXJpYWJsZVN0cmluZyA9IHZhcmlhYmxlLmdldFN0cmluZygpLFxuICAgICAgICBzdHJpbmcgPSBgWyR7dGVybVN0cmluZ30gZm9yICR7dmFyaWFibGVTdHJpbmd9XWA7XG5cbiAgcmV0dXJuIHN0cmluZztcbn1cbiJdLCJuYW1lcyI6WyJUZXJtRm9yVmFyaWFibGVTdWJzdGl0dXRpb24iLCJ0ZXJtVmFyaWFibGVOb2RlUXVlcnkiLCJub2RlUXVlcnkiLCJzdWJzdGl0dXRpb25UZXJtbU5vZGVRdWVyeSIsInN1YnN0aXR1dGlvbnNWYXJpYWJsZU5vZGVRdWVyeSIsInN0cmluZyIsInRlcm1Ob2RlIiwidmFyaWFibGVOb2RlIiwiZ2V0VGVybU5vZGUiLCJnZXRWYXJpYWJsZU5vZGUiLCJ0cmFuc2Zvcm1lZCIsInN1YnN0aXR1dGlvbnMiLCJ0cmFuc2Zvcm1lZFN1YnN0aXR1dGlvbiIsInRyYW5zZm9ybWVkVGVybU5vZGUiLCJ0cmFuc2Zvcm1UZXJtTm9kZSIsInRyYW5zZm9ybWVkVmFyaWFibGVOb2RlIiwidHJhbnNmb3JtVmFyaWFibGVOb2RlIiwidGVybUZvclZhcmlhYmxlU3Vic3RpdHV0aW9uIiwiaXNFcXVhbFRvIiwic3Vic3RpdHV0aW9uIiwidGVybU5vZGVNYXRjaGVzIiwibWF0Y2hUZXJtTm9kZSIsInZhcmlhYmxlTm9kZU1hdGNoZXMiLCJtYXRjaFZhcmlhYmxlTm9kZSIsImVxdWFsVG8iLCJzdHJpcEJyYWNrZXRzRnJvbVRlcm0iLCJtYXRjaCIsInVuaWZ5V2l0aEVxdWl2YWxlbmNlIiwiZXF1aXZhbGVuY2UiLCJsb2NhbENvbnRleHRBIiwibG9jYWxDb250ZXh0QiIsInVuaWZpZWRXaXRoRXF1aXZhbGVuY2UiLCJlcXVpdmFsZW5jZU1hdGNoZXNUZXJtTm9kZSIsImVxdWl2YWxlbmNlTWF0Y2hlc1ZhcmlhYmxlTm9kZSIsImZyb21UZXJuQW5kVmFyaWFibGUiLCJ0ZXJtIiwidmFyaWFibGUiLCJsb2NhbENvbnRleHQiLCJnZXROb2RlIiwiVGVybSIsInNoaW0iLCJmcm9tVGVybU5vZGUiLCJzdHJpbmdGcm9tVGVybUFuZFZhcmlhYmxlIiwiZnJvbVN1YnN0aXR1dGlvbk5vZGUiLCJzdWJzdGl0dXRpb25Ob2RlIiwic3Vic3RpdHV0aW9uVGVybU5vZGUiLCJzdWJzdGl0dXRpb25WYXJpYWJsZU5vZGUiLCJTdWJzdGl0dXRpb24iLCJ0ZXJtVmFyaWFibGVOb2RlIiwic29tZVN1YnN0aXR1dGlvbiIsInN1YnN0aXR1dGlvbk1hdGNoZXNWYXJpYWJsZU5vZGUiLCJ0ZXJtU3RyaW5nIiwiZ2V0U3RyaW5nIiwidmFyaWFibGVTdHJpbmciXSwi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