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
            value: function fromSubstitution(substitution, localContext) {
                var termForVariableSubstitution = null;
                var substitutionNode = substitution.getNode();
                var substitutionTermNode = substitutionTermNodeQuery(substitutionNode);
                if (substitutionTermNode !== null) {
                    var termNode;
                    var substitutionVariableNode = substitutionsVariableNodeQuery(substitutionNode), variableNode = substitutionVariableNode; ///
                    termNode = substitutionTermNode; ///
                    termNode = (0, _brackets.stripBracketsFromTerm)(termNode); ///
                    var string = stringFromTermNodeAndVariableNode(termNode, variableNode, localContext);
                    termForVariableSubstitution = new TermForVariableSubstitution(string, termNode, variableNode);
                }
                return termForVariableSubstitution;
            }
        },
        {
            key: "fromTernAndVariable",
            value: function fromTernAndVariable(term, variable, localContext) {
                var termNode = term.getNode();
                termNode = (0, _brackets.stripBracketsFromTerm)(termNode); ///
                var variableNode = variable.getNode(), string = stringFromTermNodeAndVariableNode(termNode, variableNode, localContext), termForVariableSubstitution = new TermForVariableSubstitution(string, termNode, variableNode);
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
function stringFromTermNodeAndVariableNode(termNode, variableNode, localContext) {
    var termString = localContext.nodeAsString(termNode), variableString = localContext.nodeAsString(variableNode), string = "[".concat(termString, " for ").concat(variableString, "]");
    return string;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zdWJzdGl0dXRpb24vdGVybUZvclZhcmlhYmxlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgc2hpbSBmcm9tIFwiLi4vc2hpbVwiO1xuaW1wb3J0IFN1YnN0aXR1dGlvbiBmcm9tIFwiLi4vc3Vic3RpdHV0aW9uXCI7XG5cbmltcG9ydCB7IG5vZGVRdWVyeSB9IGZyb20gXCIuLi91dGlsaXRpZXMvcXVlcnlcIjtcbmltcG9ydCB7IHN0cmlwQnJhY2tldHNGcm9tVGVybSB9IGZyb20gXCIuLi91dGlsaXRpZXMvYnJhY2tldHNcIjtcblxuY29uc3QgdGVybVZhcmlhYmxlTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3Rlcm0vdmFyaWFibGUhXCIpLFxuICAgICAgc3Vic3RpdHV0aW9uVGVybU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9zdWJzdGl0dXRpb24vdGVybSFcIiksXG4gICAgICBzdWJzdGl0dXRpb25zVmFyaWFibGVOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvc3Vic3RpdHV0aW9uL3ZhcmlhYmxlIVwiKTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGVybUZvclZhcmlhYmxlU3Vic3RpdHV0aW9uIGV4dGVuZHMgU3Vic3RpdHV0aW9uIHtcbiAgY29uc3RydWN0b3Ioc3RyaW5nLCB0ZXJtTm9kZSwgdmFyaWFibGVOb2RlKSB7XG4gICAgc3VwZXIoc3RyaW5nKTtcblxuICAgIHRoaXMudGVybU5vZGUgPSB0ZXJtTm9kZTtcbiAgICB0aGlzLnZhcmlhYmxlTm9kZSA9IHZhcmlhYmxlTm9kZTtcbiAgfVxuXG4gIGdldFRlcm1Ob2RlKCkge1xuICAgIHJldHVybiB0aGlzLnRlcm1Ob2RlO1xuICB9XG5cbiAgZ2V0VmFyaWFibGVOb2RlKCkge1xuICAgIHJldHVybiB0aGlzLnZhcmlhYmxlTm9kZTtcbiAgfVxuXG4gIHRyYW5zZm9ybWVkKHN1YnN0aXR1dGlvbnMpIHtcbiAgICBsZXQgdHJhbnNmb3JtZWRTdWJzdGl0dXRpb24gPSBudWxsO1xuXG4gICAgY29uc3QgdHJhbnNmb3JtZWRUZXJtTm9kZSA9IHRyYW5zZm9ybVRlcm1Ob2RlKHRoaXMudGVybU5vZGUsIHN1YnN0aXR1dGlvbnMpLFxuICAgICAgICAgIHRyYW5zZm9ybWVkVmFyaWFibGVOb2RlID0gdHJhbnNmb3JtVmFyaWFibGVOb2RlKHRoaXMudmFyaWFibGVOb2RlLCBzdWJzdGl0dXRpb25zKTtcblxuICAgIGlmICgodHJhbnNmb3JtZWRUZXJtTm9kZSAhPT0gbnVsbCkgJiYgKHRyYW5zZm9ybWVkVmFyaWFibGVOb2RlICE9PSBudWxsKSkge1xuICAgICAgY29uc3QgdGVybU5vZGUgPSB0cmFuc2Zvcm1lZFRlcm1Ob2RlLCAvLy9cbiAgICAgICAgICAgIHZhcmlhYmxlTm9kZSA9IHRyYW5zZm9ybWVkVmFyaWFibGVOb2RlLCAvLy9cbiAgICAgICAgICAgIHRlcm1Gb3JWYXJpYWJsZVN1YnN0aXR1dGlvbiA9IG5ldyBUZXJtRm9yVmFyaWFibGVTdWJzdGl0dXRpb24odGVybU5vZGUsIHZhcmlhYmxlTm9kZSk7XG5cbiAgICAgIHRyYW5zZm9ybWVkU3Vic3RpdHV0aW9uID0gdGVybUZvclZhcmlhYmxlU3Vic3RpdHV0aW9uOyAgLy8vXG4gICAgfVxuXG4gICAgcmV0dXJuIHRyYW5zZm9ybWVkU3Vic3RpdHV0aW9uO1xuICB9XG5cbiAgaXNFcXVhbFRvKHN1YnN0aXR1dGlvbikge1xuICAgIGNvbnN0IHRlcm1Ob2RlID0gc3Vic3RpdHV0aW9uLmdldFRlcm1Ob2RlKCksXG4gICAgICAgICAgdmFyaWFibGVOb2RlID0gc3Vic3RpdHV0aW9uLmdldFZhcmlhYmxlTm9kZSgpLFxuICAgICAgICAgIHRlcm1Ob2RlTWF0Y2hlcyA9IHRoaXMubWF0Y2hUZXJtTm9kZSh0ZXJtTm9kZSksXG4gICAgICAgICAgdmFyaWFibGVOb2RlTWF0Y2hlcyA9IHRoaXMubWF0Y2hWYXJpYWJsZU5vZGUodmFyaWFibGVOb2RlKSxcbiAgICAgICAgICBlcXVhbFRvID0gKHRlcm1Ob2RlTWF0Y2hlcyAmJiB2YXJpYWJsZU5vZGVNYXRjaGVzKTtcblxuICAgIHJldHVybiBlcXVhbFRvO1xuICB9XG5cbiAgbWF0Y2hUZXJtTm9kZSh0ZXJtTm9kZSkge1xuICAgIHRlcm1Ob2RlID0gc3RyaXBCcmFja2V0c0Zyb21UZXJtKHRlcm1Ob2RlKTsgLy8vXG5cbiAgICBjb25zdCB0ZXJtTm9kZU1hdGNoZXMgPSB0aGlzLnRlcm1Ob2RlLm1hdGNoKHRlcm1Ob2RlKTtcblxuICAgIHJldHVybiB0ZXJtTm9kZU1hdGNoZXM7XG4gIH1cblxuICBtYXRjaFZhcmlhYmxlTm9kZSh2YXJpYWJsZU5vZGUpIHtcbiAgICBjb25zdCB2YXJpYWJsZU5vZGVNYXRjaGVzID0gdGhpcy52YXJpYWJsZU5vZGUubWF0Y2godmFyaWFibGVOb2RlKTtcblxuICAgIHJldHVybiB2YXJpYWJsZU5vZGVNYXRjaGVzO1xuICB9XG5cbiAgdW5pZnlXaXRoRXF1aXZhbGVuY2UoZXF1aXZhbGVuY2UsIHN1YnN0aXR1dGlvbnMsIGxvY2FsQ29udGV4dEEsIGxvY2FsQ29udGV4dEIpIHtcbiAgICBsZXQgdW5pZmllZFdpdGhFcXVpdmFsZW5jZTtcblxuICAgIGNvbnN0IGVxdWl2YWxlbmNlTWF0Y2hlc1Rlcm1Ob2RlID0gZXF1aXZhbGVuY2UubWF0Y2hUZXJtTm9kZSh0aGlzLnRlcm1Ob2RlKTtcblxuICAgIGlmIChlcXVpdmFsZW5jZU1hdGNoZXNUZXJtTm9kZSkge1xuICAgICAgY29uc3QgZXF1aXZhbGVuY2VNYXRjaGVzVmFyaWFibGVOb2RlID0gZXF1aXZhbGVuY2UubWF0Y2hWYXJpYWJsZU5vZGUodGhpcy52YXJpYWJsZU5vZGUpO1xuXG4gICAgICBpZiAoZXF1aXZhbGVuY2VNYXRjaGVzVmFyaWFibGVOb2RlKSB7XG4gICAgICAgICAgdW5pZmllZFdpdGhFcXVpdmFsZW5jZSA9IHRydWU7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdW5pZmllZFdpdGhFcXVpdmFsZW5jZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tU3Vic3RpdHV0aW9uKHN1YnN0aXR1dGlvbiwgbG9jYWxDb250ZXh0KSB7XG4gICAgbGV0IHRlcm1Gb3JWYXJpYWJsZVN1YnN0aXR1dGlvbiA9IG51bGw7XG5cbiAgICBjb25zdCBzdWJzdGl0dXRpb25Ob2RlID0gc3Vic3RpdHV0aW9uLmdldE5vZGUoKTtcblxuICAgIGxldCBzdWJzdGl0dXRpb25UZXJtTm9kZSA9IHN1YnN0aXR1dGlvblRlcm1Ob2RlUXVlcnkoc3Vic3RpdHV0aW9uTm9kZSk7XG5cbiAgICBpZiAoc3Vic3RpdHV0aW9uVGVybU5vZGUgIT09IG51bGwpIHtcbiAgICAgIGxldCB0ZXJtTm9kZTtcblxuICAgICAgY29uc3Qgc3Vic3RpdHV0aW9uVmFyaWFibGVOb2RlID0gc3Vic3RpdHV0aW9uc1ZhcmlhYmxlTm9kZVF1ZXJ5KHN1YnN0aXR1dGlvbk5vZGUpLFxuICAgICAgICAgICAgdmFyaWFibGVOb2RlID0gc3Vic3RpdHV0aW9uVmFyaWFibGVOb2RlOyAgLy8vXG5cbiAgICAgIHRlcm1Ob2RlID0gc3Vic3RpdHV0aW9uVGVybU5vZGU7ICAvLy9cblxuICAgICAgdGVybU5vZGUgPSBzdHJpcEJyYWNrZXRzRnJvbVRlcm0odGVybU5vZGUpOyAvLy9cblxuICAgICAgY29uc3Qgc3RyaW5nID0gc3RyaW5nRnJvbVRlcm1Ob2RlQW5kVmFyaWFibGVOb2RlKHRlcm1Ob2RlLCB2YXJpYWJsZU5vZGUsIGxvY2FsQ29udGV4dCk7XG5cbiAgICAgIHRlcm1Gb3JWYXJpYWJsZVN1YnN0aXR1dGlvbiA9IG5ldyBUZXJtRm9yVmFyaWFibGVTdWJzdGl0dXRpb24oc3RyaW5nLCB0ZXJtTm9kZSwgdmFyaWFibGVOb2RlKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGVybUZvclZhcmlhYmxlU3Vic3RpdHV0aW9uO1xuICB9XG5cbiAgc3RhdGljIGZyb21UZXJuQW5kVmFyaWFibGUodGVybSwgdmFyaWFibGUsIGxvY2FsQ29udGV4dCkge1xuICAgIGxldCB0ZXJtTm9kZSA9IHRlcm0uZ2V0Tm9kZSgpO1xuXG4gICAgdGVybU5vZGUgPSBzdHJpcEJyYWNrZXRzRnJvbVRlcm0odGVybU5vZGUpOyAvLy9cblxuICAgIGNvbnN0IHZhcmlhYmxlTm9kZSA9IHZhcmlhYmxlLmdldE5vZGUoKSxcbiAgICAgICAgICBzdHJpbmcgPSBzdHJpbmdGcm9tVGVybU5vZGVBbmRWYXJpYWJsZU5vZGUodGVybU5vZGUsIHZhcmlhYmxlTm9kZSwgbG9jYWxDb250ZXh0KSxcbiAgICAgICAgICB0ZXJtRm9yVmFyaWFibGVTdWJzdGl0dXRpb24gPSBuZXcgVGVybUZvclZhcmlhYmxlU3Vic3RpdHV0aW9uKHN0cmluZywgdGVybU5vZGUsIHZhcmlhYmxlTm9kZSk7XG5cbiAgICByZXR1cm4gdGVybUZvclZhcmlhYmxlU3Vic3RpdHV0aW9uO1xuICB9XG59XG5cbmZ1bmN0aW9uIHRyYW5zZm9ybVRlcm1Ob2RlKHRlcm1Ob2RlLCBzdWJzdGl0dXRpb25zKSB7XG4gIGxldCB0cmFuc2Zvcm1lZFRlcm1Ob2RlID0gbnVsbDtcblxuICBjb25zdCB0ZXJtVmFyaWFibGVOb2RlID0gdGVybVZhcmlhYmxlTm9kZVF1ZXJ5KHRlcm1Ob2RlKTtcblxuICBpZiAodGVybVZhcmlhYmxlTm9kZSAhPT0gbnVsbCkge1xuICAgIGNvbnN0IHZhcmlhYmxlTm9kZSA9IHRlcm1WYXJpYWJsZU5vZGU7ICAvLy9cblxuICAgIHN1YnN0aXR1dGlvbnMuc29tZVN1YnN0aXR1dGlvbigoc3Vic3RpdHV0aW9uKSA9PiB7XG4gICAgICBjb25zdCBzdWJzdGl0dXRpb25NYXRjaGVzVmFyaWFibGVOb2RlID0gc3Vic3RpdHV0aW9uLm1hdGNoVmFyaWFibGVOb2RlKHZhcmlhYmxlTm9kZSk7XG5cbiAgICAgIGlmIChzdWJzdGl0dXRpb25NYXRjaGVzVmFyaWFibGVOb2RlKSB7XG4gICAgICAgIGNvbnN0IHRlcm1Ob2RlID0gc3Vic3RpdHV0aW9uLmdldFRlcm1Ob2RlKCk7XG5cbiAgICAgICAgdHJhbnNmb3JtZWRUZXJtTm9kZSA9IHRlcm1Ob2RlOyAvLy8vXG5cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICByZXR1cm4gdHJhbnNmb3JtZWRUZXJtTm9kZTtcbn1cblxuZnVuY3Rpb24gdHJhbnNmb3JtVmFyaWFibGVOb2RlKHZhcmlhYmxlTm9kZSwgc3Vic3RpdHV0aW9ucykge1xuICBsZXQgdHJhbnNmb3JtZWRWYXJpYWJsZU5vZGUgPSBudWxsO1xuXG4gIHN1YnN0aXR1dGlvbnMuc29tZVN1YnN0aXR1dGlvbigoc3Vic3RpdHV0aW9uKSA9PiB7XG4gICAgY29uc3QgdmFyaWFibGVOb2RlTWF0Y2hlcyA9IHN1YnN0aXR1dGlvbi5tYXRjaFZhcmlhYmxlTm9kZSh2YXJpYWJsZU5vZGUpO1xuXG4gICAgaWYgKHZhcmlhYmxlTm9kZU1hdGNoZXMpIHtcbiAgICAgIGNvbnN0IHRlcm1Ob2RlID0gc3Vic3RpdHV0aW9uLmdldFRlcm1Ob2RlKCksXG4gICAgICAgICAgICB0ZXJtVmFyaWFibGVOb2RlID0gdGVybVZhcmlhYmxlTm9kZVF1ZXJ5KHRlcm1Ob2RlKTtcblxuICAgICAgaWYgKHRlcm1WYXJpYWJsZU5vZGUgIT09IG51bGwpIHtcbiAgICAgICAgdHJhbnNmb3JtZWRWYXJpYWJsZU5vZGUgPSB0ZXJtVmFyaWFibGVOb2RlOyAgLy8vXG5cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gdHJhbnNmb3JtZWRWYXJpYWJsZU5vZGU7XG59XG5cbmZ1bmN0aW9uIHN0cmluZ0Zyb21UZXJtTm9kZUFuZFZhcmlhYmxlTm9kZSh0ZXJtTm9kZSwgdmFyaWFibGVOb2RlLCBsb2NhbENvbnRleHQpIHtcbiAgY29uc3QgdGVybVN0cmluZyA9IGxvY2FsQ29udGV4dC5ub2RlQXNTdHJpbmcodGVybU5vZGUpLFxuICAgICAgICB2YXJpYWJsZVN0cmluZyA9IGxvY2FsQ29udGV4dC5ub2RlQXNTdHJpbmcodmFyaWFibGVOb2RlKSxcbiAgICAgICAgc3RyaW5nID0gYFske3Rlcm1TdHJpbmd9IGZvciAke3ZhcmlhYmxlU3RyaW5nfV1gO1xuXG4gIHJldHVybiBzdHJpbmc7XG59XG4iXSwibmFtZXMiOlsiVGVybUZvclZhcmlhYmxlU3Vic3RpdHV0aW9uIiwidGVybVZhcmlhYmxlTm9kZVF1ZXJ5Iiwibm9kZVF1ZXJ5Iiwic3Vic3RpdHV0aW9uVGVybU5vZGVRdWVyeSIsInN1YnN0aXR1dGlvbnNWYXJpYWJsZU5vZGVRdWVyeSIsInN0cmluZyIsInRlcm1Ob2RlIiwidmFyaWFibGVOb2RlIiwiZ2V0VGVybU5vZGUiLCJnZXRWYXJpYWJsZU5vZGUiLCJ0cmFuc2Zvcm1lZCIsInN1YnN0aXR1dGlvbnMiLCJ0cmFuc2Zvcm1lZFN1YnN0aXR1dGlvbiIsInRyYW5zZm9ybWVkVGVybU5vZGUiLCJ0cmFuc2Zvcm1UZXJtTm9kZSIsInRyYW5zZm9ybWVkVmFyaWFibGVOb2RlIiwidHJhbnNmb3JtVmFyaWFibGVOb2RlIiwidGVybUZvclZhcmlhYmxlU3Vic3RpdHV0aW9uIiwiaXNFcXVhbFRvIiwic3Vic3RpdHV0aW9uIiwidGVybU5vZGVNYXRjaGVzIiwibWF0Y2hUZXJtTm9kZSIsInZhcmlhYmxlTm9kZU1hdGNoZXMiLCJtYXRjaFZhcmlhYmxlTm9kZSIsImVxdWFsVG8iLCJzdHJpcEJyYWNrZXRzRnJvbVRlcm0iLCJtYXRjaCIsInVuaWZ5V2l0aEVxdWl2YWxlbmNlIiwiZXF1aXZhbGVuY2UiLCJsb2NhbENvbnRleHRBIiwibG9jYWxDb250ZXh0QiIsInVuaWZpZWRXaXRoRXF1aXZhbGVuY2UiLCJlcXVpdmFsZW5jZU1hdGNoZXNUZXJtTm9kZSIsImVxdWl2YWxlbmNlTWF0Y2hlc1ZhcmlhYmxlTm9kZSIsImZyb21TdWJzdGl0dXRpb24iLCJsb2NhbENvbnRleHQiLCJzdWJzdGl0dXRpb25Ob2RlIiwiZ2V0Tm9kZSIsInN1YnN0aXR1dGlvblRlcm1Ob2RlIiwic3Vic3RpdHV0aW9uVmFyaWFibGVOb2RlIiwic3RyaW5nRnJvbVRlcm1Ob2RlQW5kVmFyaWFibGVOb2RlIiwiZnJvbVRlcm5BbmRWYXJpYWJsZSIsInRlcm0iLCJ2YXJpYWJsZSIsIlN1YnN0aXR1dGlvbiIsInRlcm1WYXJpYWJsZU5vZGUiLCJzb21lU3Vic3RpdHV0aW9uIiwic3Vic3RpdHV0aW9uTWF0Y2hlc1ZhcmlhYmxlTm9kZSIsInRlcm1TdHJpbmciLCJub2RlQXNTdHJpbmciLCJ2YXJpYWJsZVN0cmluZyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFZcUJBOzs7MkRBVko7bUVBQ1E7cUJBRUM7d0JBQ1k7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFdEMsSUFBTUMsd0JBQXdCQyxJQUFBQSxnQkFBUyxFQUFDLG9CQUNsQ0MsNEJBQTRCRCxJQUFBQSxnQkFBUyxFQUFDLHdCQUN0Q0UsaUNBQWlDRixJQUFBQSxnQkFBUyxFQUFDO0FBRWxDLElBQUEsQUFBTUYsNENBQU47Y0FBTUE7YUFBQUEsNEJBQ1BLLE1BQU0sRUFBRUMsUUFBUSxFQUFFQyxZQUFZO2dDQUR2QlA7O2dCQUVqQixrQkFGaUJBO1lBRVhLOztRQUVOLE1BQUtDLFFBQVEsR0FBR0E7UUFDaEIsTUFBS0MsWUFBWSxHQUFHQTs7O2tCQUxIUDs7WUFRbkJRLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0YsUUFBUTtZQUN0Qjs7O1lBRUFHLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0YsWUFBWTtZQUMxQjs7O1lBRUFHLEtBQUFBO21CQUFBQSxTQUFBQSxZQUFZQyxhQUFhO2dCQUN2QixJQUFJQywwQkFBMEI7Z0JBRTlCLElBQU1DLHNCQUFzQkMsa0JBQWtCLElBQUksQ0FBQ1IsUUFBUSxFQUFFSyxnQkFDdkRJLDBCQUEwQkMsc0JBQXNCLElBQUksQ0FBQ1QsWUFBWSxFQUFFSTtnQkFFekUsSUFBSSxBQUFDRSx3QkFBd0IsUUFBVUUsNEJBQTRCLE1BQU87b0JBQ3hFLElBQU1ULFdBQVdPLHFC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