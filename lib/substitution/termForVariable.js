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
var termVariableNodeQuery = (0, _query.nodeQuery)("/term/variable!"), substitutionTermNodeQuery = (0, _query.nodeQuery)("/substitution/term!"), substitutionsVariableNodeQuery = (0, _query.nodeQuery)("/substitution/variable!");
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
            key: "fromSubstitution",
            value: function fromSubstitution(substitution) {
                var termForVariableSubstitution = null;
                var substitutionNode = substitution.getNode();
                var substitutionTermNode = substitutionTermNodeQuery(substitutionNode);
                if (substitutionTermNode !== null) {
                    var termNode = substitutionTermNode; ///
                    termNode = (0, _brackets.stripBracketsFromTerm)(termNode); ///
                    var substitutionVariableNode = substitutionsVariableNodeQuery(substitutionNode), variableNode = substitutionVariableNode; ///
                    termForVariableSubstitution = new TermForVariableSubstitution(termNode, variableNode);
                }
                return termForVariableSubstitution;
            }
        },
        {
            key: "fromTernAndVariable",
            value: function fromTernAndVariable(term, variable, localContext) {
                var termNode = term.getNode();
                termNode = (0, _brackets.stripBracketsFromTerm)(termNode); ///
                var Term = _shim.default.Term;
                term = Term.fromTermNode(termNode, localContext); ///
                var string = stringFromTermAndVariable(term, variable), variableNode = variable.getNode(), termForVariableSubstitution = new TermForVariableSubstitution(string, termNode, variableNode);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zdWJzdGl0dXRpb24vdGVybUZvclZhcmlhYmxlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgc2hpbSBmcm9tIFwiLi4vc2hpbVwiO1xuaW1wb3J0IFN1YnN0aXR1dGlvbiBmcm9tIFwiLi4vc3Vic3RpdHV0aW9uXCI7XG5cbmltcG9ydCB7IG5vZGVRdWVyeSB9IGZyb20gXCIuLi91dGlsaXRpZXMvcXVlcnlcIjtcbmltcG9ydCB7IHN0cmlwQnJhY2tldHNGcm9tVGVybSB9IGZyb20gXCIuLi91dGlsaXRpZXMvYnJhY2tldHNcIjtcblxuY29uc3QgdGVybVZhcmlhYmxlTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3Rlcm0vdmFyaWFibGUhXCIpLFxuICAgICAgc3Vic3RpdHV0aW9uVGVybU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9zdWJzdGl0dXRpb24vdGVybSFcIiksXG4gICAgICBzdWJzdGl0dXRpb25zVmFyaWFibGVOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvc3Vic3RpdHV0aW9uL3ZhcmlhYmxlIVwiKTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGVybUZvclZhcmlhYmxlU3Vic3RpdHV0aW9uIGV4dGVuZHMgU3Vic3RpdHV0aW9uIHtcbiAgY29uc3RydWN0b3Ioc3RyaW5nLCB0ZXJtTm9kZSwgdmFyaWFibGVOb2RlKSB7XG4gICAgc3VwZXIoc3RyaW5nKTtcblxuICAgIHRoaXMudGVybU5vZGUgPSB0ZXJtTm9kZTtcbiAgICB0aGlzLnZhcmlhYmxlTm9kZSA9IHZhcmlhYmxlTm9kZTtcbiAgfVxuXG4gIGdldFRlcm1Ob2RlKCkge1xuICAgIHJldHVybiB0aGlzLnRlcm1Ob2RlO1xuICB9XG5cbiAgZ2V0VmFyaWFibGVOb2RlKCkge1xuICAgIHJldHVybiB0aGlzLnZhcmlhYmxlTm9kZTtcbiAgfVxuXG4gIHRyYW5zZm9ybWVkKHN1YnN0aXR1dGlvbnMpIHtcbiAgICBsZXQgdHJhbnNmb3JtZWRTdWJzdGl0dXRpb24gPSBudWxsO1xuXG4gICAgY29uc3QgdHJhbnNmb3JtZWRUZXJtTm9kZSA9IHRyYW5zZm9ybVRlcm1Ob2RlKHRoaXMudGVybU5vZGUsIHN1YnN0aXR1dGlvbnMpLFxuICAgICAgICAgIHRyYW5zZm9ybWVkVmFyaWFibGVOb2RlID0gdHJhbnNmb3JtVmFyaWFibGVOb2RlKHRoaXMudmFyaWFibGVOb2RlLCBzdWJzdGl0dXRpb25zKTtcblxuICAgIGlmICgodHJhbnNmb3JtZWRUZXJtTm9kZSAhPT0gbnVsbCkgJiYgKHRyYW5zZm9ybWVkVmFyaWFibGVOb2RlICE9PSBudWxsKSkge1xuICAgICAgY29uc3QgdGVybU5vZGUgPSB0cmFuc2Zvcm1lZFRlcm1Ob2RlLCAvLy9cbiAgICAgICAgICAgIHZhcmlhYmxlTm9kZSA9IHRyYW5zZm9ybWVkVmFyaWFibGVOb2RlLCAvLy9cbiAgICAgICAgICAgIHRlcm1Gb3JWYXJpYWJsZVN1YnN0aXR1dGlvbiA9IG5ldyBUZXJtRm9yVmFyaWFibGVTdWJzdGl0dXRpb24odGVybU5vZGUsIHZhcmlhYmxlTm9kZSk7XG5cbiAgICAgIHRyYW5zZm9ybWVkU3Vic3RpdHV0aW9uID0gdGVybUZvclZhcmlhYmxlU3Vic3RpdHV0aW9uOyAgLy8vXG4gICAgfVxuXG4gICAgcmV0dXJuIHRyYW5zZm9ybWVkU3Vic3RpdHV0aW9uO1xuICB9XG5cbiAgaXNFcXVhbFRvKHN1YnN0aXR1dGlvbikge1xuICAgIGNvbnN0IHRlcm1Ob2RlID0gc3Vic3RpdHV0aW9uLmdldFRlcm1Ob2RlKCksXG4gICAgICAgICAgdmFyaWFibGVOb2RlID0gc3Vic3RpdHV0aW9uLmdldFZhcmlhYmxlTm9kZSgpLFxuICAgICAgICAgIHRlcm1Ob2RlTWF0Y2hlcyA9IHRoaXMubWF0Y2hUZXJtTm9kZSh0ZXJtTm9kZSksXG4gICAgICAgICAgdmFyaWFibGVOb2RlTWF0Y2hlcyA9IHRoaXMubWF0Y2hWYXJpYWJsZU5vZGUodmFyaWFibGVOb2RlKSxcbiAgICAgICAgICBlcXVhbFRvID0gKHRlcm1Ob2RlTWF0Y2hlcyAmJiB2YXJpYWJsZU5vZGVNYXRjaGVzKTtcblxuICAgIHJldHVybiBlcXVhbFRvO1xuICB9XG5cbiAgbWF0Y2hUZXJtTm9kZSh0ZXJtTm9kZSkge1xuICAgIHRlcm1Ob2RlID0gc3RyaXBCcmFja2V0c0Zyb21UZXJtKHRlcm1Ob2RlKTsgLy8vXG5cbiAgICBjb25zdCB0ZXJtTm9kZU1hdGNoZXMgPSB0aGlzLnRlcm1Ob2RlLm1hdGNoKHRlcm1Ob2RlKTtcblxuICAgIHJldHVybiB0ZXJtTm9kZU1hdGNoZXM7XG4gIH1cblxuICBtYXRjaFZhcmlhYmxlTm9kZSh2YXJpYWJsZU5vZGUpIHtcbiAgICBjb25zdCB2YXJpYWJsZU5vZGVNYXRjaGVzID0gdGhpcy52YXJpYWJsZU5vZGUubWF0Y2godmFyaWFibGVOb2RlKTtcblxuICAgIHJldHVybiB2YXJpYWJsZU5vZGVNYXRjaGVzO1xuICB9XG5cbiAgdW5pZnlXaXRoRXF1aXZhbGVuY2UoZXF1aXZhbGVuY2UsIHN1YnN0aXR1dGlvbnMsIGxvY2FsQ29udGV4dEEsIGxvY2FsQ29udGV4dEIpIHtcbiAgICBsZXQgdW5pZmllZFdpdGhFcXVpdmFsZW5jZTtcblxuICAgIGNvbnN0IGVxdWl2YWxlbmNlTWF0Y2hlc1Rlcm1Ob2RlID0gZXF1aXZhbGVuY2UubWF0Y2hUZXJtTm9kZSh0aGlzLnRlcm1Ob2RlKTtcblxuICAgIGlmIChlcXVpdmFsZW5jZU1hdGNoZXNUZXJtTm9kZSkge1xuICAgICAgY29uc3QgZXF1aXZhbGVuY2VNYXRjaGVzVmFyaWFibGVOb2RlID0gZXF1aXZhbGVuY2UubWF0Y2hWYXJpYWJsZU5vZGUodGhpcy52YXJpYWJsZU5vZGUpO1xuXG4gICAgICBpZiAoZXF1aXZhbGVuY2VNYXRjaGVzVmFyaWFibGVOb2RlKSB7XG4gICAgICAgICAgdW5pZmllZFdpdGhFcXVpdmFsZW5jZSA9IHRydWU7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdW5pZmllZFdpdGhFcXVpdmFsZW5jZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tU3Vic3RpdHV0aW9uKHN1YnN0aXR1dGlvbikge1xuICAgIGxldCB0ZXJtRm9yVmFyaWFibGVTdWJzdGl0dXRpb24gPSBudWxsO1xuXG4gICAgY29uc3Qgc3Vic3RpdHV0aW9uTm9kZSA9IHN1YnN0aXR1dGlvbi5nZXROb2RlKCk7XG5cbiAgICBsZXQgc3Vic3RpdHV0aW9uVGVybU5vZGUgPSBzdWJzdGl0dXRpb25UZXJtTm9kZVF1ZXJ5KHN1YnN0aXR1dGlvbk5vZGUpO1xuXG4gICAgaWYgKHN1YnN0aXR1dGlvblRlcm1Ob2RlICE9PSBudWxsKSB7XG4gICAgICBsZXQgdGVybU5vZGUgPSBzdWJzdGl0dXRpb25UZXJtTm9kZTsgIC8vL1xuXG4gICAgICB0ZXJtTm9kZSA9IHN0cmlwQnJhY2tldHNGcm9tVGVybSh0ZXJtTm9kZSk7IC8vL1xuXG4gICAgICBjb25zdCBzdWJzdGl0dXRpb25WYXJpYWJsZU5vZGUgPSBzdWJzdGl0dXRpb25zVmFyaWFibGVOb2RlUXVlcnkoc3Vic3RpdHV0aW9uTm9kZSksXG4gICAgICAgICAgICB2YXJpYWJsZU5vZGUgPSBzdWJzdGl0dXRpb25WYXJpYWJsZU5vZGU7ICAvLy9cblxuICAgICAgdGVybUZvclZhcmlhYmxlU3Vic3RpdHV0aW9uID0gbmV3IFRlcm1Gb3JWYXJpYWJsZVN1YnN0aXR1dGlvbih0ZXJtTm9kZSwgdmFyaWFibGVOb2RlKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGVybUZvclZhcmlhYmxlU3Vic3RpdHV0aW9uO1xuICB9XG5cbiAgc3RhdGljIGZyb21UZXJuQW5kVmFyaWFibGUodGVybSwgdmFyaWFibGUsIGxvY2FsQ29udGV4dCkge1xuICAgIGxldCB0ZXJtTm9kZSA9IHRlcm0uZ2V0Tm9kZSgpO1xuXG4gICAgdGVybU5vZGUgPSBzdHJpcEJyYWNrZXRzRnJvbVRlcm0odGVybU5vZGUpOyAvLy9cblxuICAgIGNvbnN0IHsgVGVybSB9ID0gc2hpbTtcblxuICAgIHRlcm0gPSBUZXJtLmZyb21UZXJtTm9kZSh0ZXJtTm9kZSwgbG9jYWxDb250ZXh0KTsgLy8vXG5cbiAgICBjb25zdCBzdHJpbmcgPSBzdHJpbmdGcm9tVGVybUFuZFZhcmlhYmxlKHRlcm0sIHZhcmlhYmxlKSxcbiAgICAgICAgICB2YXJpYWJsZU5vZGUgPSB2YXJpYWJsZS5nZXROb2RlKCksXG4gICAgICAgICAgdGVybUZvclZhcmlhYmxlU3Vic3RpdHV0aW9uID0gbmV3IFRlcm1Gb3JWYXJpYWJsZVN1YnN0aXR1dGlvbihzdHJpbmcsIHRlcm1Ob2RlLCB2YXJpYWJsZU5vZGUpO1xuXG4gICAgcmV0dXJuIHRlcm1Gb3JWYXJpYWJsZVN1YnN0aXR1dGlvbjtcbiAgfVxufVxuXG5mdW5jdGlvbiB0cmFuc2Zvcm1UZXJtTm9kZSh0ZXJtTm9kZSwgc3Vic3RpdHV0aW9ucykge1xuICBsZXQgdHJhbnNmb3JtZWRUZXJtTm9kZSA9IG51bGw7XG5cbiAgY29uc3QgdGVybVZhcmlhYmxlTm9kZSA9IHRlcm1WYXJpYWJsZU5vZGVRdWVyeSh0ZXJtTm9kZSk7XG5cbiAgaWYgKHRlcm1WYXJpYWJsZU5vZGUgIT09IG51bGwpIHtcbiAgICBjb25zdCB2YXJpYWJsZU5vZGUgPSB0ZXJtVmFyaWFibGVOb2RlOyAgLy8vXG5cbiAgICBzdWJzdGl0dXRpb25zLnNvbWVTdWJzdGl0dXRpb24oKHN1YnN0aXR1dGlvbikgPT4ge1xuICAgICAgY29uc3Qgc3Vic3RpdHV0aW9uTWF0Y2hlc1ZhcmlhYmxlTm9kZSA9IHN1YnN0aXR1dGlvbi5tYXRjaFZhcmlhYmxlTm9kZSh2YXJpYWJsZU5vZGUpO1xuXG4gICAgICBpZiAoc3Vic3RpdHV0aW9uTWF0Y2hlc1ZhcmlhYmxlTm9kZSkge1xuICAgICAgICBjb25zdCB0ZXJtTm9kZSA9IHN1YnN0aXR1dGlvbi5nZXRUZXJtTm9kZSgpO1xuXG4gICAgICAgIHRyYW5zZm9ybWVkVGVybU5vZGUgPSB0ZXJtTm9kZTsgLy8vL1xuXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIHRyYW5zZm9ybWVkVGVybU5vZGU7XG59XG5cbmZ1bmN0aW9uIHRyYW5zZm9ybVZhcmlhYmxlTm9kZSh2YXJpYWJsZU5vZGUsIHN1YnN0aXR1dGlvbnMpIHtcbiAgbGV0IHRyYW5zZm9ybWVkVmFyaWFibGVOb2RlID0gbnVsbDtcblxuICBzdWJzdGl0dXRpb25zLnNvbWVTdWJzdGl0dXRpb24oKHN1YnN0aXR1dGlvbikgPT4ge1xuICAgIGNvbnN0IHZhcmlhYmxlTm9kZU1hdGNoZXMgPSBzdWJzdGl0dXRpb24ubWF0Y2hWYXJpYWJsZU5vZGUodmFyaWFibGVOb2RlKTtcblxuICAgIGlmICh2YXJpYWJsZU5vZGVNYXRjaGVzKSB7XG4gICAgICBjb25zdCB0ZXJtTm9kZSA9IHN1YnN0aXR1dGlvbi5nZXRUZXJtTm9kZSgpLFxuICAgICAgICAgICAgdGVybVZhcmlhYmxlTm9kZSA9IHRlcm1WYXJpYWJsZU5vZGVRdWVyeSh0ZXJtTm9kZSk7XG5cbiAgICAgIGlmICh0ZXJtVmFyaWFibGVOb2RlICE9PSBudWxsKSB7XG4gICAgICAgIHRyYW5zZm9ybWVkVmFyaWFibGVOb2RlID0gdGVybVZhcmlhYmxlTm9kZTsgIC8vL1xuXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIHRyYW5zZm9ybWVkVmFyaWFibGVOb2RlO1xufVxuXG5mdW5jdGlvbiBzdHJpbmdGcm9tVGVybUFuZFZhcmlhYmxlKHRlcm0sIHZhcmlhYmxlKSB7XG4gIGNvbnN0IHRlcm1TdHJpbmcgPSB0ZXJtLmdldFN0cmluZygpLFxuICAgICAgICB2YXJpYWJsZVN0cmluZyA9IHZhcmlhYmxlLmdldFN0cmluZygpLFxuICAgICAgICBzdHJpbmcgPSBgWyR7dGVybVN0cmluZ30gZm9yICR7dmFyaWFibGVTdHJpbmd9XWA7XG5cbiAgcmV0dXJuIHN0cmluZztcbn1cbiJdLCJuYW1lcyI6WyJUZXJtRm9yVmFyaWFibGVTdWJzdGl0dXRpb24iLCJ0ZXJtVmFyaWFibGVOb2RlUXVlcnkiLCJub2RlUXVlcnkiLCJzdWJzdGl0dXRpb25UZXJtTm9kZVF1ZXJ5Iiwic3Vic3RpdHV0aW9uc1ZhcmlhYmxlTm9kZVF1ZXJ5Iiwic3RyaW5nIiwidGVybU5vZGUiLCJ2YXJpYWJsZU5vZGUiLCJnZXRUZXJtTm9kZSIsImdldFZhcmlhYmxlTm9kZSIsInRyYW5zZm9ybWVkIiwic3Vic3RpdHV0aW9ucyIsInRyYW5zZm9ybWVkU3Vic3RpdHV0aW9uIiwidHJhbnNmb3JtZWRUZXJtTm9kZSIsInRyYW5zZm9ybVRlcm1Ob2RlIiwidHJhbnNmb3JtZWRWYXJpYWJsZU5vZGUiLCJ0cmFuc2Zvcm1WYXJpYWJsZU5vZGUiLCJ0ZXJtRm9yVmFyaWFibGVTdWJzdGl0dXRpb24iLCJpc0VxdWFsVG8iLCJzdWJzdGl0dXRpb24iLCJ0ZXJtTm9kZU1hdGNoZXMiLCJtYXRjaFRlcm1Ob2RlIiwidmFyaWFibGVOb2RlTWF0Y2hlcyIsIm1hdGNoVmFyaWFibGVOb2RlIiwiZXF1YWxUbyIsInN0cmlwQnJhY2tldHNGcm9tVGVybSIsIm1hdGNoIiwidW5pZnlXaXRoRXF1aXZhbGVuY2UiLCJlcXVpdmFsZW5jZSIsImxvY2FsQ29udGV4dEEiLCJsb2NhbENvbnRleHRCIiwidW5pZmllZFdpdGhFcXVpdmFsZW5jZSIsImVxdWl2YWxlbmNlTWF0Y2hlc1Rlcm1Ob2RlIiwiZXF1aXZhbGVuY2VNYXRjaGVzVmFyaWFibGVOb2RlIiwiZnJvbVN1YnN0aXR1dGlvbiIsInN1YnN0aXR1dGlvbk5vZGUiLCJnZXROb2RlIiwic3Vic3RpdHV0aW9uVGVybU5vZGUiLCJzdWJzdGl0dXRpb25WYXJpYWJsZU5vZGUiLCJmcm9tVGVybkFuZFZhcmlhYmxlIiwidGVybSIsInZhcmlhYmxlIiwibG9jYWxDb250ZXh0IiwiVGVybSIsInNoaW0iLCJmcm9tVGVybU5vZGUiLCJzdHJpbmdGcm9tVGVybUFuZFZhcmlhYmxlIiwiU3Vic3RpdHV0aW9uIiwidGVybVZhcmlhYmxlTm9kZSIsInNvbWVTdWJzdGl0dXRpb24iLCJzdWJzdGl0dXRpb25NYXRjaGVzVmFyaWFibGVOb2Rl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