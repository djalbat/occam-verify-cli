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
var termNodeQuery = (0, _query.nodeQuery)("/substitution/term[0]"), variableNodeQuery = (0, _query.nodeQuery)("/substitution/term[1]/variable!"), substitutionNodeQuery = (0, _query.nodeQuery)("/statement/substitution"), termVariableNodeQuery = (0, _query.nodeQuery)("/term/variable!");
var TermForVariableSubstitution = /*#__PURE__*/ function(Substitution) {
    _inherits(TermForVariableSubstitution, Substitution);
    function TermForVariableSubstitution(string, termNode, variableNode, substitutionNode) {
        _class_call_check(this, TermForVariableSubstitution);
        var _this;
        _this = _call_super(this, TermForVariableSubstitution, [
            string
        ]);
        _this.termNode = termNode;
        _this.variableNode = variableNode;
        _this.substitutionNode = substitutionNode;
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
            key: "getSubstitutionNode",
            value: function getSubstitutionNode() {
                return this.substitutionNode;
            }
        },
        {
            key: "transformed",
            value: function transformed(substitutions, localContext) {
                var transformedSubstitution = null;
                var transformedTermNode = transformTermNode(this.termNode, substitutions), transformedVariableNode = transformVariableNode(this.variableNode, substitutions);
                if (transformedTermNode !== null && transformedVariableNode !== null) {
                    var termNode = transformedTermNode, variableNode = transformedVariableNode, termString = localContext.nodeAsString(termNode), variableString = localContext.nodeAsString(variableNode), string = "[".concat(termString, " for ").concat(variableString, "]"), substitutionNode = null, termForVariableSubstitution = new TermForVariableSubstitution(string, termNode, variableNode, substitutionNode);
                    transformedSubstitution = termForVariableSubstitution; ///
                }
                return transformedSubstitution;
            }
        },
        {
            key: "isEqualTo",
            value: function isEqualTo(substitution) {
                var equalTo = false;
                var termNode = substitution.getTermNode(), variableNode = substitution.getVariableNode();
                if (termNode !== null && variableNode !== null) {
                    var termNodeMatches = this.matchTermNode(termNode), variableNodeMatches = this.matchVariableNode(variableNode);
                    equalTo = termNodeMatches && variableNodeMatches;
                }
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
            key: "matchSubstitutionNode",
            value: function matchSubstitutionNode(substitutionNode) {
                var substitutionNodeMatches = this.substitutionNode.match(substitutionNode);
                return substitutionNodeMatches;
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
            key: "fromStatementNode",
            value: function fromStatementNode(statementNode, localContext) {
                var termForVariableSubstitution = null;
                var substitutionNode = substitutionNodeQuery(statementNode);
                if (substitutionNode !== null) {
                    var termNode = termNodeQuery(substitutionNode), variableNode = variableNodeQuery(substitutionNode);
                    if (termNode !== null && variableNode !== null) {
                        var Term = _shim.default.Term, Variable = _shim.default.Variable, term = Term.fromTermNode(termNode, localContext), variable = Variable.fromVariableNode(variableNode, localContext), string = stringFromTermAndVariable(term, variable, localContext);
                        termForVariableSubstitution = new TermForVariableSubstitution(string, termNode, variableNode, substitutionNode);
                    }
                }
                return termForVariableSubstitution;
            }
        },
        {
            key: "fromTernAndVariable",
            value: function fromTernAndVariable(term, variable, localContext) {
                var termNode = term.getNode();
                termNode = (0, _brackets.stripBracketsFromTerm)(termNode); ///
                var string = stringFromTermAndVariable(term, variable, localContext), variableNode = variable.getNode(), substitutionNode = null, termForVariableSubstitution = new TermForVariableSubstitution(string, termNode, variableNode, substitutionNode);
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
function stringFromTermAndVariable(term, variable, localContext) {
    var termNode = term.getNode(), termString = localContext.nodeAsString(termNode), variableString = variable.getString(), string = "[".concat(termString, " for ").concat(variableString, "]");
    return string;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zdWJzdGl0dXRpb24vdGVybUZvclZhcmlhYmxlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgc2hpbSBmcm9tIFwiLi4vc2hpbVwiO1xuaW1wb3J0IFN1YnN0aXR1dGlvbiBmcm9tIFwiLi4vc3Vic3RpdHV0aW9uXCI7XG5cbmltcG9ydCB7IG5vZGVRdWVyeSB9IGZyb20gXCIuLi91dGlsaXRpZXMvcXVlcnlcIjtcbmltcG9ydCB7IHN0cmlwQnJhY2tldHNGcm9tVGVybSB9IGZyb20gXCIuLi91dGlsaXRpZXMvYnJhY2tldHNcIjtcblxuY29uc3QgdGVybU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9zdWJzdGl0dXRpb24vdGVybVswXVwiKSxcbiAgICAgIHZhcmlhYmxlTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3N1YnN0aXR1dGlvbi90ZXJtWzFdL3ZhcmlhYmxlIVwiKSxcbiAgICAgIHN1YnN0aXR1dGlvbk5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9zdGF0ZW1lbnQvc3Vic3RpdHV0aW9uXCIpLFxuICAgICAgdGVybVZhcmlhYmxlTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3Rlcm0vdmFyaWFibGUhXCIpO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUZXJtRm9yVmFyaWFibGVTdWJzdGl0dXRpb24gZXh0ZW5kcyBTdWJzdGl0dXRpb24ge1xuICBjb25zdHJ1Y3RvcihzdHJpbmcsIHRlcm1Ob2RlLCB2YXJpYWJsZU5vZGUsIHN1YnN0aXR1dGlvbk5vZGUpIHtcbiAgICBzdXBlcihzdHJpbmcpO1xuXG4gICAgdGhpcy50ZXJtTm9kZSA9IHRlcm1Ob2RlO1xuICAgIHRoaXMudmFyaWFibGVOb2RlID0gdmFyaWFibGVOb2RlO1xuICAgIHRoaXMuc3Vic3RpdHV0aW9uTm9kZSA9IHN1YnN0aXR1dGlvbk5vZGU7XG4gIH1cblxuICBnZXRUZXJtTm9kZSgpIHtcbiAgICByZXR1cm4gdGhpcy50ZXJtTm9kZTtcbiAgfVxuXG4gIGdldFZhcmlhYmxlTm9kZSgpIHtcbiAgICByZXR1cm4gdGhpcy52YXJpYWJsZU5vZGU7XG4gIH1cblxuICBnZXRTdWJzdGl0dXRpb25Ob2RlKCkge1xuICAgIHJldHVybiB0aGlzLnN1YnN0aXR1dGlvbk5vZGU7XG4gIH1cblxuICB0cmFuc2Zvcm1lZChzdWJzdGl0dXRpb25zLCBsb2NhbENvbnRleHQpIHtcbiAgICBsZXQgdHJhbnNmb3JtZWRTdWJzdGl0dXRpb24gPSBudWxsO1xuXG4gICAgY29uc3QgdHJhbnNmb3JtZWRUZXJtTm9kZSA9IHRyYW5zZm9ybVRlcm1Ob2RlKHRoaXMudGVybU5vZGUsIHN1YnN0aXR1dGlvbnMpLFxuICAgICAgICAgIHRyYW5zZm9ybWVkVmFyaWFibGVOb2RlID0gdHJhbnNmb3JtVmFyaWFibGVOb2RlKHRoaXMudmFyaWFibGVOb2RlLCBzdWJzdGl0dXRpb25zKTtcblxuICAgIGlmICgodHJhbnNmb3JtZWRUZXJtTm9kZSAhPT0gbnVsbCkgJiYgKHRyYW5zZm9ybWVkVmFyaWFibGVOb2RlICE9PSBudWxsKSkge1xuICAgICAgY29uc3QgdGVybU5vZGUgPSB0cmFuc2Zvcm1lZFRlcm1Ob2RlLCAvLy9cbiAgICAgICAgICAgIHZhcmlhYmxlTm9kZSA9IHRyYW5zZm9ybWVkVmFyaWFibGVOb2RlLCAvLy9cbiAgICAgICAgICAgIHRlcm1TdHJpbmcgPSBsb2NhbENvbnRleHQubm9kZUFzU3RyaW5nKHRlcm1Ob2RlKSxcbiAgICAgICAgICAgIHZhcmlhYmxlU3RyaW5nID0gbG9jYWxDb250ZXh0Lm5vZGVBc1N0cmluZyh2YXJpYWJsZU5vZGUpLFxuICAgICAgICAgICAgc3RyaW5nID0gYFske3Rlcm1TdHJpbmd9IGZvciAke3ZhcmlhYmxlU3RyaW5nfV1gLFxuICAgICAgICAgICAgc3Vic3RpdHV0aW9uTm9kZSA9IG51bGwsXG4gICAgICAgICAgICB0ZXJtRm9yVmFyaWFibGVTdWJzdGl0dXRpb24gPSBuZXcgVGVybUZvclZhcmlhYmxlU3Vic3RpdHV0aW9uKHN0cmluZywgdGVybU5vZGUsIHZhcmlhYmxlTm9kZSwgc3Vic3RpdHV0aW9uTm9kZSk7XG5cbiAgICAgIHRyYW5zZm9ybWVkU3Vic3RpdHV0aW9uID0gdGVybUZvclZhcmlhYmxlU3Vic3RpdHV0aW9uOyAgLy8vXG4gICAgfVxuXG4gICAgcmV0dXJuIHRyYW5zZm9ybWVkU3Vic3RpdHV0aW9uO1xuICB9XG5cbiAgaXNFcXVhbFRvKHN1YnN0aXR1dGlvbikge1xuICAgIGxldCBlcXVhbFRvID0gZmFsc2U7XG5cbiAgICBjb25zdCB0ZXJtTm9kZSA9IHN1YnN0aXR1dGlvbi5nZXRUZXJtTm9kZSgpLFxuICAgICAgICAgIHZhcmlhYmxlTm9kZSA9IHN1YnN0aXR1dGlvbi5nZXRWYXJpYWJsZU5vZGUoKTtcblxuICAgIGlmICgodGVybU5vZGUgIT09IG51bGwpICYmICh2YXJpYWJsZU5vZGUgIT09IG51bGwpKSB7XG4gICAgICBjb25zdCB0ZXJtTm9kZU1hdGNoZXMgPSB0aGlzLm1hdGNoVGVybU5vZGUodGVybU5vZGUpLFxuICAgICAgICAgICAgdmFyaWFibGVOb2RlTWF0Y2hlcyA9IHRoaXMubWF0Y2hWYXJpYWJsZU5vZGUodmFyaWFibGVOb2RlKTtcblxuICAgICAgZXF1YWxUbyA9ICh0ZXJtTm9kZU1hdGNoZXMgJiYgdmFyaWFibGVOb2RlTWF0Y2hlcyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGVxdWFsVG87XG4gIH1cblxuICBtYXRjaFRlcm1Ob2RlKHRlcm1Ob2RlKSB7XG4gICAgdGVybU5vZGUgPSBzdHJpcEJyYWNrZXRzRnJvbVRlcm0odGVybU5vZGUpOyAvLy9cblxuICAgIGNvbnN0IHRlcm1Ob2RlTWF0Y2hlcyA9IHRoaXMudGVybU5vZGUubWF0Y2godGVybU5vZGUpO1xuXG4gICAgcmV0dXJuIHRlcm1Ob2RlTWF0Y2hlcztcbiAgfVxuXG4gIG1hdGNoVmFyaWFibGVOb2RlKHZhcmlhYmxlTm9kZSkge1xuICAgIGNvbnN0IHZhcmlhYmxlTm9kZU1hdGNoZXMgPSB0aGlzLnZhcmlhYmxlTm9kZS5tYXRjaCh2YXJpYWJsZU5vZGUpO1xuXG4gICAgcmV0dXJuIHZhcmlhYmxlTm9kZU1hdGNoZXM7XG4gIH1cblxuICBtYXRjaFN1YnN0aXR1dGlvbk5vZGUoc3Vic3RpdHV0aW9uTm9kZSkge1xuICAgIGNvbnN0IHN1YnN0aXR1dGlvbk5vZGVNYXRjaGVzID0gdGhpcy5zdWJzdGl0dXRpb25Ob2RlLm1hdGNoKHN1YnN0aXR1dGlvbk5vZGUpO1xuXG4gICAgcmV0dXJuIHN1YnN0aXR1dGlvbk5vZGVNYXRjaGVzO1xuICB9XG5cbiAgdW5pZnlXaXRoRXF1aXZhbGVuY2UoZXF1aXZhbGVuY2UsIHN1YnN0aXR1dGlvbnMsIGxvY2FsQ29udGV4dEEsIGxvY2FsQ29udGV4dEIpIHtcbiAgICBsZXQgdW5pZmllZFdpdGhFcXVpdmFsZW5jZTtcblxuICAgIGNvbnN0IGVxdWl2YWxlbmNlTWF0Y2hlc1Rlcm1Ob2RlID0gZXF1aXZhbGVuY2UubWF0Y2hUZXJtTm9kZSh0aGlzLnRlcm1Ob2RlKTtcblxuICAgIGlmIChlcXVpdmFsZW5jZU1hdGNoZXNUZXJtTm9kZSkge1xuICAgICAgY29uc3QgZXF1aXZhbGVuY2VNYXRjaGVzVmFyaWFibGVOb2RlID0gZXF1aXZhbGVuY2UubWF0Y2hWYXJpYWJsZU5vZGUodGhpcy52YXJpYWJsZU5vZGUpO1xuXG4gICAgICBpZiAoZXF1aXZhbGVuY2VNYXRjaGVzVmFyaWFibGVOb2RlKSB7XG4gICAgICAgICAgdW5pZmllZFdpdGhFcXVpdmFsZW5jZSA9IHRydWU7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdW5pZmllZFdpdGhFcXVpdmFsZW5jZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tU3RhdGVtZW50Tm9kZShzdGF0ZW1lbnROb2RlLCBsb2NhbENvbnRleHQpIHtcbiAgICBsZXQgdGVybUZvclZhcmlhYmxlU3Vic3RpdHV0aW9uID0gbnVsbDtcblxuICAgIGNvbnN0IHN1YnN0aXR1dGlvbk5vZGUgPSBzdWJzdGl0dXRpb25Ob2RlUXVlcnkoc3RhdGVtZW50Tm9kZSk7XG5cbiAgICBpZiAoc3Vic3RpdHV0aW9uTm9kZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgdGVybU5vZGUgPSB0ZXJtTm9kZVF1ZXJ5KHN1YnN0aXR1dGlvbk5vZGUpLFxuICAgICAgICAgICAgdmFyaWFibGVOb2RlID0gdmFyaWFibGVOb2RlUXVlcnkoc3Vic3RpdHV0aW9uTm9kZSk7XG5cbiAgICAgIGlmICgodGVybU5vZGUgIT09IG51bGwpICYmICh2YXJpYWJsZU5vZGUgIT09IG51bGwpKSB7XG4gICAgICAgIGNvbnN0IHsgVGVybSwgVmFyaWFibGUgfSA9IHNoaW0sXG4gICAgICAgICAgICAgIHRlcm0gPSBUZXJtLmZyb21UZXJtTm9kZSh0ZXJtTm9kZSwgbG9jYWxDb250ZXh0KSxcbiAgICAgICAgICAgICAgdmFyaWFibGUgPSBWYXJpYWJsZS5mcm9tVmFyaWFibGVOb2RlKHZhcmlhYmxlTm9kZSwgbG9jYWxDb250ZXh0KSxcbiAgICAgICAgICAgICAgc3RyaW5nID0gc3RyaW5nRnJvbVRlcm1BbmRWYXJpYWJsZSh0ZXJtLCB2YXJpYWJsZSwgbG9jYWxDb250ZXh0KTtcblxuICAgICAgICB0ZXJtRm9yVmFyaWFibGVTdWJzdGl0dXRpb24gPSBuZXcgVGVybUZvclZhcmlhYmxlU3Vic3RpdHV0aW9uKHN0cmluZywgdGVybU5vZGUsIHZhcmlhYmxlTm9kZSwgc3Vic3RpdHV0aW9uTm9kZSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRlcm1Gb3JWYXJpYWJsZVN1YnN0aXR1dGlvbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tVGVybkFuZFZhcmlhYmxlKHRlcm0sIHZhcmlhYmxlLCBsb2NhbENvbnRleHQpIHtcbiAgICBsZXQgdGVybU5vZGUgPSB0ZXJtLmdldE5vZGUoKTtcblxuICAgIHRlcm1Ob2RlID0gc3RyaXBCcmFja2V0c0Zyb21UZXJtKHRlcm1Ob2RlKTsgLy8vXG5cbiAgICBjb25zdCBzdHJpbmcgPSBzdHJpbmdGcm9tVGVybUFuZFZhcmlhYmxlKHRlcm0sIHZhcmlhYmxlLCBsb2NhbENvbnRleHQpLFxuICAgICAgICAgIHZhcmlhYmxlTm9kZSA9IHZhcmlhYmxlLmdldE5vZGUoKSxcbiAgICAgICAgICBzdWJzdGl0dXRpb25Ob2RlID0gbnVsbCxcbiAgICAgICAgICB0ZXJtRm9yVmFyaWFibGVTdWJzdGl0dXRpb24gPSBuZXcgVGVybUZvclZhcmlhYmxlU3Vic3RpdHV0aW9uKHN0cmluZywgdGVybU5vZGUsIHZhcmlhYmxlTm9kZSwgc3Vic3RpdHV0aW9uTm9kZSk7XG5cbiAgICByZXR1cm4gdGVybUZvclZhcmlhYmxlU3Vic3RpdHV0aW9uO1xuICB9XG59XG5cbmZ1bmN0aW9uIHRyYW5zZm9ybVRlcm1Ob2RlKHRlcm1Ob2RlLCBzdWJzdGl0dXRpb25zKSB7XG4gIGxldCB0cmFuc2Zvcm1lZFRlcm1Ob2RlID0gbnVsbDtcblxuICBjb25zdCB0ZXJtVmFyaWFibGVOb2RlID0gdGVybVZhcmlhYmxlTm9kZVF1ZXJ5KHRlcm1Ob2RlKTtcblxuICBpZiAodGVybVZhcmlhYmxlTm9kZSAhPT0gbnVsbCkge1xuICAgIGNvbnN0IHZhcmlhYmxlTm9kZSA9IHRlcm1WYXJpYWJsZU5vZGU7ICAvLy9cblxuICAgIHN1YnN0aXR1dGlvbnMuc29tZVN1YnN0aXR1dGlvbigoc3Vic3RpdHV0aW9uKSA9PiB7XG4gICAgICBjb25zdCBzdWJzdGl0dXRpb25NYXRjaGVzVmFyaWFibGVOb2RlID0gc3Vic3RpdHV0aW9uLm1hdGNoVmFyaWFibGVOb2RlKHZhcmlhYmxlTm9kZSk7XG5cbiAgICAgIGlmIChzdWJzdGl0dXRpb25NYXRjaGVzVmFyaWFibGVOb2RlKSB7XG4gICAgICAgIGNvbnN0IHRlcm1Ob2RlID0gc3Vic3RpdHV0aW9uLmdldFRlcm1Ob2RlKCk7XG5cbiAgICAgICAgdHJhbnNmb3JtZWRUZXJtTm9kZSA9IHRlcm1Ob2RlOyAvLy8vXG5cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICByZXR1cm4gdHJhbnNmb3JtZWRUZXJtTm9kZTtcbn1cblxuZnVuY3Rpb24gdHJhbnNmb3JtVmFyaWFibGVOb2RlKHZhcmlhYmxlTm9kZSwgc3Vic3RpdHV0aW9ucykge1xuICBsZXQgdHJhbnNmb3JtZWRWYXJpYWJsZU5vZGUgPSBudWxsO1xuXG4gIHN1YnN0aXR1dGlvbnMuc29tZVN1YnN0aXR1dGlvbigoc3Vic3RpdHV0aW9uKSA9PiB7XG4gICAgY29uc3QgdmFyaWFibGVOb2RlTWF0Y2hlcyA9IHN1YnN0aXR1dGlvbi5tYXRjaFZhcmlhYmxlTm9kZSh2YXJpYWJsZU5vZGUpO1xuXG4gICAgaWYgKHZhcmlhYmxlTm9kZU1hdGNoZXMpIHtcbiAgICAgIGNvbnN0IHRlcm1Ob2RlID0gc3Vic3RpdHV0aW9uLmdldFRlcm1Ob2RlKCksXG4gICAgICAgICAgICB0ZXJtVmFyaWFibGVOb2RlID0gdGVybVZhcmlhYmxlTm9kZVF1ZXJ5KHRlcm1Ob2RlKTtcblxuICAgICAgaWYgKHRlcm1WYXJpYWJsZU5vZGUgIT09IG51bGwpIHtcbiAgICAgICAgdHJhbnNmb3JtZWRWYXJpYWJsZU5vZGUgPSB0ZXJtVmFyaWFibGVOb2RlOyAgLy8vXG5cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gdHJhbnNmb3JtZWRWYXJpYWJsZU5vZGU7XG59XG5cbmZ1bmN0aW9uIHN0cmluZ0Zyb21UZXJtQW5kVmFyaWFibGUodGVybSwgdmFyaWFibGUsIGxvY2FsQ29udGV4dCkge1xuICBjb25zdCB0ZXJtTm9kZSA9IHRlcm0uZ2V0Tm9kZSgpLFxuICAgICAgICB0ZXJtU3RyaW5nID0gbG9jYWxDb250ZXh0Lm5vZGVBc1N0cmluZyh0ZXJtTm9kZSksXG4gICAgICAgIHZhcmlhYmxlU3RyaW5nID0gdmFyaWFibGUuZ2V0U3RyaW5nKCksXG4gICAgICAgIHN0cmluZyA9IGBbJHt0ZXJtU3RyaW5nfSBmb3IgJHt2YXJpYWJsZVN0cmluZ31dYDtcblxuICByZXR1cm4gc3RyaW5nO1xufVxuIl0sIm5hbWVzIjpbIlRlcm1Gb3JWYXJpYWJsZVN1YnN0aXR1dGlvbiIsInRlcm1Ob2RlUXVlcnkiLCJub2RlUXVlcnkiLCJ2YXJpYWJsZU5vZGVRdWVyeSIsInN1YnN0aXR1dGlvbk5vZGVRdWVyeSIsInRlcm1WYXJpYWJsZU5vZGVRdWVyeSIsInN0cmluZyIsInRlcm1Ob2RlIiwidmFyaWFibGVOb2RlIiwic3Vic3RpdHV0aW9uTm9kZSIsImdldFRlcm1Ob2RlIiwiZ2V0VmFyaWFibGVOb2RlIiwiZ2V0U3Vic3RpdHV0aW9uTm9kZSIsInRyYW5zZm9ybWVkIiwic3Vic3RpdHV0aW9ucyIsImxvY2FsQ29udGV4dCIsInRyYW5zZm9ybWVkU3Vic3RpdHV0aW9uIiwidHJhbnNmb3JtZWRUZXJtTm9kZSIsInRyYW5zZm9ybVRlcm1Ob2RlIiwidHJhbnNmb3JtZWRWYXJpYWJsZU5vZGUiLCJ0cmFuc2Zvcm1WYXJpYWJsZU5vZGUiLCJ0ZXJtU3RyaW5nIiwibm9kZUFzU3RyaW5nIiwidmFyaWFibGVTdHJpbmciLCJ0ZXJtRm9yVmFyaWFibGVTdWJzdGl0dXRpb24iLCJpc0VxdWFsVG8iLCJzdWJzdGl0dXRpb24iLCJlcXVhbFRvIiwidGVybU5vZGVNYXRjaGVzIiwibWF0Y2hUZXJtTm9kZSIsInZhcmlhYmxlTm9kZU1hdGNoZXMiLCJtYXRjaFZhcmlhYmxlTm9kZSIsInN0cmlwQnJhY2tldHNGcm9tVGVybSIsIm1hdGNoIiwibWF0Y2hTdWJzdGl0dXRpb25Ob2RlIiwic3Vic3RpdHV0aW9uTm9kZU1hdGNoZXMiLCJ1bmlmeVdpdGhFcXVpdmFsZW5jZSIsImVxdWl2YWxlbmNlIiwibG9jYWxDb250ZXh0QSIsImxvY2FsQ29udGV4dEIiLCJ1bmlmaWVkV2l0aEVxdWl2YWxlbmNlIiwiZXF1aXZhbGVuY2VNYXRjaGVzVGVybU5vZGUiLCJlcXVpdmFsZW5jZU1hdGNoZXNWYXJpYWJsZU5vZGUiLCJmcm9tU3RhdGVtZW50Tm9kZSIsInN0YXRlbWVudE5vZGUiLCJUZXJtIiwic2hpbSIsIlZhcmlhYmxlIiwidGVybSIsImZyb21UZXJtTm9kZSIsInZhcmlhYmxlIiwiZnJvbVZhcmlhYmxlTm9kZSIsInN0cmluZ0Zyb21UZXJtQW5kVmFyaWFibGUiLCJmcm9tVGVybkFuZFZhcmlhYmxlIiwiZ2V0Tm9kZSIsIlN1YnN0aXR1dGlvbiIsInRlcm1WYXJpYWJsZU5vZGUiLCJzb21lU3Vic3RpdHV0aW9uIiwic3Vic3RpdHV0aW9uTWF0Y2hlc1ZhcmlhYmxlTm9kZSIsImdldFN0cmluZyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFhcUJBOzs7MkRBWEo7bUVBQ1E7cUJBRUM7d0JBQ1k7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFdEMsSUFBTUMsZ0JBQWdCQyxJQUFBQSxnQkFBUyxFQUFDLDBCQUMxQkMsb0JBQW9CRCxJQUFBQSxnQkFBUyxFQUFDLG9DQUM5QkUsd0JBQXdCRixJQUFBQSxnQkFBUyxFQUFDLDRCQUNsQ0csd0JBQXdCSCxJQUFBQSxnQkFBUyxFQUFDO0FBRXpCLElBQUEsQUFBTUYsNENBQU47Y0FBTUE7YUFBQUEsNEJBQ1BNLE1BQU0sRUFBRUMsUUFBUSxFQUFFQyxZQUFZLEVBQUVDLGdCQUFnQjtnQ0FEekNUOztnQkFFakIsa0JBRmlCQTtZQUVYTTs7UUFFTixNQUFLQyxRQUFRLEdBQUdBO1FBQ2hCLE1BQUtDLFlBQVksR0FBR0E7UUFDcEIsTUFBS0MsZ0JBQWdCLEdBQUdBOzs7a0JBTlBUOztZQVNuQlUsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDSCxRQUFRO1lBQ3RCOzs7WUFFQUksS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDSCxZQUFZO1lBQzFCOzs7WUFFQUksS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDSCxnQkFBZ0I7WUFDOUI7OztZQUVBSSxLQUFBQTttQkFBQUEsU0FBQUEsWUFBWUMsYUFBYSxFQUFFQyxZQUFZO2dCQUNyQyxJQUFJQyww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