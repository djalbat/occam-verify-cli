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
var substitutionNodeQuery = (0, _query.nodeQuery)("/statement/substitution"), termVariableNodeQuery = (0, _query.nodeQuery)("/term/variable!"), substitutionTermNodeQuery = (0, _query.nodeQuery)("/substitution/term!"), substitutionsVariableNodeQuery = (0, _query.nodeQuery)("/substitution/variable!");
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
                    var substitutionTermNode = substitutionTermNodeQuery(substitutionNode);
                    if (substitutionTermNode !== null) {
                        var Term = _shim.default.Term, Variable = _shim.default.Variable, substitutionVariableNode = substitutionsVariableNodeQuery(substitutionNode), variableNode = substitutionVariableNode, termNode = substitutionTermNode, term = Term.fromTermNode(termNode, localContext), variable = Variable.fromVariableNode(variableNode, localContext), string = stringFromTermAndVariable(term, variable, localContext);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zdWJzdGl0dXRpb24vdGVybUZvclZhcmlhYmxlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgc2hpbSBmcm9tIFwiLi4vc2hpbVwiO1xuaW1wb3J0IFN1YnN0aXR1dGlvbiBmcm9tIFwiLi4vc3Vic3RpdHV0aW9uXCI7XG5cbmltcG9ydCB7IG5vZGVRdWVyeSB9IGZyb20gXCIuLi91dGlsaXRpZXMvcXVlcnlcIjtcbmltcG9ydCB7IHN0cmlwQnJhY2tldHNGcm9tVGVybSB9IGZyb20gXCIuLi91dGlsaXRpZXMvYnJhY2tldHNcIjtcblxuY29uc3Qgc3Vic3RpdHV0aW9uTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3N0YXRlbWVudC9zdWJzdGl0dXRpb25cIiksXG4gICAgICB0ZXJtVmFyaWFibGVOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvdGVybS92YXJpYWJsZSFcIiksXG4gICAgICBzdWJzdGl0dXRpb25UZXJtTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3N1YnN0aXR1dGlvbi90ZXJtIVwiKSxcbiAgICAgIHN1YnN0aXR1dGlvbnNWYXJpYWJsZU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9zdWJzdGl0dXRpb24vdmFyaWFibGUhXCIpO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUZXJtRm9yVmFyaWFibGVTdWJzdGl0dXRpb24gZXh0ZW5kcyBTdWJzdGl0dXRpb24ge1xuICBjb25zdHJ1Y3RvcihzdHJpbmcsIHRlcm1Ob2RlLCB2YXJpYWJsZU5vZGUsIHN1YnN0aXR1dGlvbk5vZGUpIHtcbiAgICBzdXBlcihzdHJpbmcpO1xuXG4gICAgdGhpcy50ZXJtTm9kZSA9IHRlcm1Ob2RlO1xuICAgIHRoaXMudmFyaWFibGVOb2RlID0gdmFyaWFibGVOb2RlO1xuICAgIHRoaXMuc3Vic3RpdHV0aW9uTm9kZSA9IHN1YnN0aXR1dGlvbk5vZGU7XG4gIH1cblxuICBnZXRUZXJtTm9kZSgpIHtcbiAgICByZXR1cm4gdGhpcy50ZXJtTm9kZTtcbiAgfVxuXG4gIGdldFZhcmlhYmxlTm9kZSgpIHtcbiAgICByZXR1cm4gdGhpcy52YXJpYWJsZU5vZGU7XG4gIH1cblxuICBnZXRTdWJzdGl0dXRpb25Ob2RlKCkge1xuICAgIHJldHVybiB0aGlzLnN1YnN0aXR1dGlvbk5vZGU7XG4gIH1cblxuICB0cmFuc2Zvcm1lZChzdWJzdGl0dXRpb25zLCBsb2NhbENvbnRleHQpIHtcbiAgICBsZXQgdHJhbnNmb3JtZWRTdWJzdGl0dXRpb24gPSBudWxsO1xuXG4gICAgY29uc3QgdHJhbnNmb3JtZWRUZXJtTm9kZSA9IHRyYW5zZm9ybVRlcm1Ob2RlKHRoaXMudGVybU5vZGUsIHN1YnN0aXR1dGlvbnMpLFxuICAgICAgICAgIHRyYW5zZm9ybWVkVmFyaWFibGVOb2RlID0gdHJhbnNmb3JtVmFyaWFibGVOb2RlKHRoaXMudmFyaWFibGVOb2RlLCBzdWJzdGl0dXRpb25zKTtcblxuICAgIGlmICgodHJhbnNmb3JtZWRUZXJtTm9kZSAhPT0gbnVsbCkgJiYgKHRyYW5zZm9ybWVkVmFyaWFibGVOb2RlICE9PSBudWxsKSkge1xuICAgICAgY29uc3QgdGVybU5vZGUgPSB0cmFuc2Zvcm1lZFRlcm1Ob2RlLCAvLy9cbiAgICAgICAgICAgIHZhcmlhYmxlTm9kZSA9IHRyYW5zZm9ybWVkVmFyaWFibGVOb2RlLCAvLy9cbiAgICAgICAgICAgIHRlcm1TdHJpbmcgPSBsb2NhbENvbnRleHQubm9kZUFzU3RyaW5nKHRlcm1Ob2RlKSxcbiAgICAgICAgICAgIHZhcmlhYmxlU3RyaW5nID0gbG9jYWxDb250ZXh0Lm5vZGVBc1N0cmluZyh2YXJpYWJsZU5vZGUpLFxuICAgICAgICAgICAgc3RyaW5nID0gYFske3Rlcm1TdHJpbmd9IGZvciAke3ZhcmlhYmxlU3RyaW5nfV1gLFxuICAgICAgICAgICAgc3Vic3RpdHV0aW9uTm9kZSA9IG51bGwsXG4gICAgICAgICAgICB0ZXJtRm9yVmFyaWFibGVTdWJzdGl0dXRpb24gPSBuZXcgVGVybUZvclZhcmlhYmxlU3Vic3RpdHV0aW9uKHN0cmluZywgdGVybU5vZGUsIHZhcmlhYmxlTm9kZSwgc3Vic3RpdHV0aW9uTm9kZSk7XG5cbiAgICAgIHRyYW5zZm9ybWVkU3Vic3RpdHV0aW9uID0gdGVybUZvclZhcmlhYmxlU3Vic3RpdHV0aW9uOyAgLy8vXG4gICAgfVxuXG4gICAgcmV0dXJuIHRyYW5zZm9ybWVkU3Vic3RpdHV0aW9uO1xuICB9XG5cbiAgaXNFcXVhbFRvKHN1YnN0aXR1dGlvbikge1xuICAgIGNvbnN0IHRlcm1Ob2RlID0gc3Vic3RpdHV0aW9uLmdldFRlcm1Ob2RlKCksXG4gICAgICAgICAgdmFyaWFibGVOb2RlID0gc3Vic3RpdHV0aW9uLmdldFZhcmlhYmxlTm9kZSgpLFxuICAgICAgICAgIHRlcm1Ob2RlTWF0Y2hlcyA9IHRoaXMubWF0Y2hUZXJtTm9kZSh0ZXJtTm9kZSksXG4gICAgICAgICAgdmFyaWFibGVOb2RlTWF0Y2hlcyA9IHRoaXMubWF0Y2hWYXJpYWJsZU5vZGUodmFyaWFibGVOb2RlKSxcbiAgICAgICAgICBlcXVhbFRvID0gKHRlcm1Ob2RlTWF0Y2hlcyAmJiB2YXJpYWJsZU5vZGVNYXRjaGVzKTtcblxuICAgIHJldHVybiBlcXVhbFRvO1xuICB9XG5cbiAgbWF0Y2hUZXJtTm9kZSh0ZXJtTm9kZSkge1xuICAgIHRlcm1Ob2RlID0gc3RyaXBCcmFja2V0c0Zyb21UZXJtKHRlcm1Ob2RlKTsgLy8vXG5cbiAgICBjb25zdCB0ZXJtTm9kZU1hdGNoZXMgPSB0aGlzLnRlcm1Ob2RlLm1hdGNoKHRlcm1Ob2RlKTtcblxuICAgIHJldHVybiB0ZXJtTm9kZU1hdGNoZXM7XG4gIH1cblxuICBtYXRjaFZhcmlhYmxlTm9kZSh2YXJpYWJsZU5vZGUpIHtcbiAgICBjb25zdCB2YXJpYWJsZU5vZGVNYXRjaGVzID0gdGhpcy52YXJpYWJsZU5vZGUubWF0Y2godmFyaWFibGVOb2RlKTtcblxuICAgIHJldHVybiB2YXJpYWJsZU5vZGVNYXRjaGVzO1xuICB9XG5cbiAgbWF0Y2hTdWJzdGl0dXRpb25Ob2RlKHN1YnN0aXR1dGlvbk5vZGUpIHtcbiAgICBjb25zdCBzdWJzdGl0dXRpb25Ob2RlTWF0Y2hlcyA9IHRoaXMuc3Vic3RpdHV0aW9uTm9kZS5tYXRjaChzdWJzdGl0dXRpb25Ob2RlKTtcblxuICAgIHJldHVybiBzdWJzdGl0dXRpb25Ob2RlTWF0Y2hlcztcbiAgfVxuXG4gIHVuaWZ5V2l0aEVxdWl2YWxlbmNlKGVxdWl2YWxlbmNlLCBzdWJzdGl0dXRpb25zLCBsb2NhbENvbnRleHRBLCBsb2NhbENvbnRleHRCKSB7XG4gICAgbGV0IHVuaWZpZWRXaXRoRXF1aXZhbGVuY2U7XG5cbiAgICBjb25zdCBlcXVpdmFsZW5jZU1hdGNoZXNUZXJtTm9kZSA9IGVxdWl2YWxlbmNlLm1hdGNoVGVybU5vZGUodGhpcy50ZXJtTm9kZSk7XG5cbiAgICBpZiAoZXF1aXZhbGVuY2VNYXRjaGVzVGVybU5vZGUpIHtcbiAgICAgIGNvbnN0IGVxdWl2YWxlbmNlTWF0Y2hlc1ZhcmlhYmxlTm9kZSA9IGVxdWl2YWxlbmNlLm1hdGNoVmFyaWFibGVOb2RlKHRoaXMudmFyaWFibGVOb2RlKTtcblxuICAgICAgaWYgKGVxdWl2YWxlbmNlTWF0Y2hlc1ZhcmlhYmxlTm9kZSkge1xuICAgICAgICAgIHVuaWZpZWRXaXRoRXF1aXZhbGVuY2UgPSB0cnVlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHVuaWZpZWRXaXRoRXF1aXZhbGVuY2U7XG4gIH1cblxuICBzdGF0aWMgZnJvbVN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSwgbG9jYWxDb250ZXh0KSB7XG4gICAgbGV0IHRlcm1Gb3JWYXJpYWJsZVN1YnN0aXR1dGlvbiA9IG51bGw7XG5cbiAgICBjb25zdCBzdWJzdGl0dXRpb25Ob2RlID0gc3Vic3RpdHV0aW9uTm9kZVF1ZXJ5KHN0YXRlbWVudE5vZGUpO1xuXG4gICAgaWYgKHN1YnN0aXR1dGlvbk5vZGUgIT09IG51bGwpIHtcbiAgICAgIGxldCBzdWJzdGl0dXRpb25UZXJtTm9kZSA9IHN1YnN0aXR1dGlvblRlcm1Ob2RlUXVlcnkoc3Vic3RpdHV0aW9uTm9kZSk7XG5cbiAgICAgIGlmIChzdWJzdGl0dXRpb25UZXJtTm9kZSAhPT0gbnVsbCkge1xuICAgICAgICBjb25zdCB7IFRlcm0sIFZhcmlhYmxlIH0gPSBzaGltLFxuICAgICAgICAgICAgICBzdWJzdGl0dXRpb25WYXJpYWJsZU5vZGUgPSBzdWJzdGl0dXRpb25zVmFyaWFibGVOb2RlUXVlcnkoc3Vic3RpdHV0aW9uTm9kZSksXG4gICAgICAgICAgICAgIHZhcmlhYmxlTm9kZSA9IHN1YnN0aXR1dGlvblZhcmlhYmxlTm9kZSwgIC8vL1xuICAgICAgICAgICAgICB0ZXJtTm9kZSA9IHN1YnN0aXR1dGlvblRlcm1Ob2RlLCAgLy8vXG4gICAgICAgICAgICAgIHRlcm0gPSBUZXJtLmZyb21UZXJtTm9kZSh0ZXJtTm9kZSwgbG9jYWxDb250ZXh0KSxcbiAgICAgICAgICAgICAgdmFyaWFibGUgPSBWYXJpYWJsZS5mcm9tVmFyaWFibGVOb2RlKHZhcmlhYmxlTm9kZSwgbG9jYWxDb250ZXh0KSxcbiAgICAgICAgICAgICAgc3RyaW5nID0gc3RyaW5nRnJvbVRlcm1BbmRWYXJpYWJsZSh0ZXJtLCB2YXJpYWJsZSwgbG9jYWxDb250ZXh0KTtcblxuICAgICAgICB0ZXJtRm9yVmFyaWFibGVTdWJzdGl0dXRpb24gPSBuZXcgVGVybUZvclZhcmlhYmxlU3Vic3RpdHV0aW9uKHN0cmluZywgdGVybU5vZGUsIHZhcmlhYmxlTm9kZSwgc3Vic3RpdHV0aW9uTm9kZSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRlcm1Gb3JWYXJpYWJsZVN1YnN0aXR1dGlvbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tVGVybkFuZFZhcmlhYmxlKHRlcm0sIHZhcmlhYmxlLCBsb2NhbENvbnRleHQpIHtcbiAgICBsZXQgdGVybU5vZGUgPSB0ZXJtLmdldE5vZGUoKTtcblxuICAgIHRlcm1Ob2RlID0gc3RyaXBCcmFja2V0c0Zyb21UZXJtKHRlcm1Ob2RlKTsgLy8vXG5cbiAgICBjb25zdCBzdHJpbmcgPSBzdHJpbmdGcm9tVGVybUFuZFZhcmlhYmxlKHRlcm0sIHZhcmlhYmxlLCBsb2NhbENvbnRleHQpLFxuICAgICAgICAgIHZhcmlhYmxlTm9kZSA9IHZhcmlhYmxlLmdldE5vZGUoKSxcbiAgICAgICAgICBzdWJzdGl0dXRpb25Ob2RlID0gbnVsbCxcbiAgICAgICAgICB0ZXJtRm9yVmFyaWFibGVTdWJzdGl0dXRpb24gPSBuZXcgVGVybUZvclZhcmlhYmxlU3Vic3RpdHV0aW9uKHN0cmluZywgdGVybU5vZGUsIHZhcmlhYmxlTm9kZSwgc3Vic3RpdHV0aW9uTm9kZSk7XG5cbiAgICByZXR1cm4gdGVybUZvclZhcmlhYmxlU3Vic3RpdHV0aW9uO1xuICB9XG59XG5cbmZ1bmN0aW9uIHRyYW5zZm9ybVRlcm1Ob2RlKHRlcm1Ob2RlLCBzdWJzdGl0dXRpb25zKSB7XG4gIGxldCB0cmFuc2Zvcm1lZFRlcm1Ob2RlID0gbnVsbDtcblxuICBjb25zdCB0ZXJtVmFyaWFibGVOb2RlID0gdGVybVZhcmlhYmxlTm9kZVF1ZXJ5KHRlcm1Ob2RlKTtcblxuICBpZiAodGVybVZhcmlhYmxlTm9kZSAhPT0gbnVsbCkge1xuICAgIGNvbnN0IHZhcmlhYmxlTm9kZSA9IHRlcm1WYXJpYWJsZU5vZGU7ICAvLy9cblxuICAgIHN1YnN0aXR1dGlvbnMuc29tZVN1YnN0aXR1dGlvbigoc3Vic3RpdHV0aW9uKSA9PiB7XG4gICAgICBjb25zdCBzdWJzdGl0dXRpb25NYXRjaGVzVmFyaWFibGVOb2RlID0gc3Vic3RpdHV0aW9uLm1hdGNoVmFyaWFibGVOb2RlKHZhcmlhYmxlTm9kZSk7XG5cbiAgICAgIGlmIChzdWJzdGl0dXRpb25NYXRjaGVzVmFyaWFibGVOb2RlKSB7XG4gICAgICAgIGNvbnN0IHRlcm1Ob2RlID0gc3Vic3RpdHV0aW9uLmdldFRlcm1Ob2RlKCk7XG5cbiAgICAgICAgdHJhbnNmb3JtZWRUZXJtTm9kZSA9IHRlcm1Ob2RlOyAvLy8vXG5cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICByZXR1cm4gdHJhbnNmb3JtZWRUZXJtTm9kZTtcbn1cblxuZnVuY3Rpb24gdHJhbnNmb3JtVmFyaWFibGVOb2RlKHZhcmlhYmxlTm9kZSwgc3Vic3RpdHV0aW9ucykge1xuICBsZXQgdHJhbnNmb3JtZWRWYXJpYWJsZU5vZGUgPSBudWxsO1xuXG4gIHN1YnN0aXR1dGlvbnMuc29tZVN1YnN0aXR1dGlvbigoc3Vic3RpdHV0aW9uKSA9PiB7XG4gICAgY29uc3QgdmFyaWFibGVOb2RlTWF0Y2hlcyA9IHN1YnN0aXR1dGlvbi5tYXRjaFZhcmlhYmxlTm9kZSh2YXJpYWJsZU5vZGUpO1xuXG4gICAgaWYgKHZhcmlhYmxlTm9kZU1hdGNoZXMpIHtcbiAgICAgIGNvbnN0IHRlcm1Ob2RlID0gc3Vic3RpdHV0aW9uLmdldFRlcm1Ob2RlKCksXG4gICAgICAgICAgICB0ZXJtVmFyaWFibGVOb2RlID0gdGVybVZhcmlhYmxlTm9kZVF1ZXJ5KHRlcm1Ob2RlKTtcblxuICAgICAgaWYgKHRlcm1WYXJpYWJsZU5vZGUgIT09IG51bGwpIHtcbiAgICAgICAgdHJhbnNmb3JtZWRWYXJpYWJsZU5vZGUgPSB0ZXJtVmFyaWFibGVOb2RlOyAgLy8vXG5cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gdHJhbnNmb3JtZWRWYXJpYWJsZU5vZGU7XG59XG5cbmZ1bmN0aW9uIHN0cmluZ0Zyb21UZXJtQW5kVmFyaWFibGUodGVybSwgdmFyaWFibGUsIGxvY2FsQ29udGV4dCkge1xuICBjb25zdCB0ZXJtTm9kZSA9IHRlcm0uZ2V0Tm9kZSgpLFxuICAgICAgICB0ZXJtU3RyaW5nID0gbG9jYWxDb250ZXh0Lm5vZGVBc1N0cmluZyh0ZXJtTm9kZSksXG4gICAgICAgIHZhcmlhYmxlU3RyaW5nID0gdmFyaWFibGUuZ2V0U3RyaW5nKCksXG4gICAgICAgIHN0cmluZyA9IGBbJHt0ZXJtU3RyaW5nfSBmb3IgJHt2YXJpYWJsZVN0cmluZ31dYDtcblxuICByZXR1cm4gc3RyaW5nO1xufVxuIl0sIm5hbWVzIjpbIlRlcm1Gb3JWYXJpYWJsZVN1YnN0aXR1dGlvbiIsInN1YnN0aXR1dGlvbk5vZGVRdWVyeSIsIm5vZGVRdWVyeSIsInRlcm1WYXJpYWJsZU5vZGVRdWVyeSIsInN1YnN0aXR1dGlvblRlcm1Ob2RlUXVlcnkiLCJzdWJzdGl0dXRpb25zVmFyaWFibGVOb2RlUXVlcnkiLCJzdHJpbmciLCJ0ZXJtTm9kZSIsInZhcmlhYmxlTm9kZSIsInN1YnN0aXR1dGlvbk5vZGUiLCJnZXRUZXJtTm9kZSIsImdldFZhcmlhYmxlTm9kZSIsImdldFN1YnN0aXR1dGlvbk5vZGUiLCJ0cmFuc2Zvcm1lZCIsInN1YnN0aXR1dGlvbnMiLCJsb2NhbENvbnRleHQiLCJ0cmFuc2Zvcm1lZFN1YnN0aXR1dGlvbiIsInRyYW5zZm9ybWVkVGVybU5vZGUiLCJ0cmFuc2Zvcm1UZXJtTm9kZSIsInRyYW5zZm9ybWVkVmFyaWFibGVOb2RlIiwidHJhbnNmb3JtVmFyaWFibGVOb2RlIiwidGVybVN0cmluZyIsIm5vZGVBc1N0cmluZyIsInZhcmlhYmxlU3RyaW5nIiwidGVybUZvclZhcmlhYmxlU3Vic3RpdHV0aW9uIiwiaXNFcXVhbFRvIiwic3Vic3RpdHV0aW9uIiwidGVybU5vZGVNYXRjaGVzIiwibWF0Y2hUZXJtTm9kZSIsInZhcmlhYmxlTm9kZU1hdGNoZXMiLCJtYXRjaFZhcmlhYmxlTm9kZSIsImVxdWFsVG8iLCJzdHJpcEJyYWNrZXRzRnJvbVRlcm0iLCJtYXRjaCIsIm1hdGNoU3Vic3RpdHV0aW9uTm9kZSIsInN1YnN0aXR1dGlvbk5vZGVNYXRjaGVzIiwidW5pZnlXaXRoRXF1aXZhbGVuY2UiLCJlcXVpdmFsZW5jZSIsImxvY2FsQ29udGV4dEEiLCJsb2NhbENvbnRleHRCIiwidW5pZmllZFdpdGhFcXVpdmFsZW5jZSIsImVxdWl2YWxlbmNlTWF0Y2hlc1Rlcm1Ob2RlIiwiZXF1aXZhbGVuY2VNYXRjaGVzVmFyaWFibGVOb2RlIiwiZnJvbVN0YXRlbWVudE5vZGUiLCJzdGF0ZW1lbnROb2RlIiwic3Vic3RpdHV0aW9uVGVybU5vZGUiLCJUZXJtIiwic2hpbSIsIlZhcmlhYmxlIiwic3Vic3RpdHV0aW9uVmFyaWFibGVOb2RlIiwidGVybSIsImZyb21UZXJtTm9kZSIsInZhcmlhYmxlIiwiZnJvbVZhcmlhYmxlTm9kZSIsInN0cmluZ0Zyb21UZXJtQW5kVmFyaWFibGUiLCJmcm9tVGVybkFuZFZhcmlhYmxlIiwiZ2V0Tm9kZSIsIlN1YnN0aXR1dGlvbiIsInRlcm1WYXJpYWJsZU5vZGUiLCJzb21lU3Vic3RpdHV0aW9uIiwic3Vic3RpdHV0aW9uTWF0Y2hlc1ZhcmlhYmxlTm9kZSIsImdldFN0cmluZyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFhcUJBOzs7MkRBWEo7bUVBQ1E7cUJBRUM7d0JBQ1k7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFdEMsSUFBTUMsd0JBQXdCQyxJQUFBQSxnQkFBUyxFQUFDLDRCQUNsQ0Msd0JBQXdCRCxJQUFBQSxnQkFBUyxFQUFDLG9CQUNsQ0UsNEJBQTRCRixJQUFBQSxnQkFBUyxFQUFDLHdCQUN0Q0csaUNBQWlDSCxJQUFBQSxnQkFBUyxFQUFDO0FBRWxDLElBQUEsQUFBTUYsNENBQU47Y0FBTUE7YUFBQUEsNEJBQ1BNLE1BQU0sRUFBRUMsUUFBUSxFQUFFQyxZQUFZLEVBQUVDLGdCQUFnQjtnQ0FEekNUOztnQkFFakIsa0JBRmlCQTtZQUVYTTs7UUFFTixNQUFLQyxRQUFRLEdBQUdBO1FBQ2hCLE1BQUtDLFlBQVksR0FBR0E7UUFDcEIsTUFBS0MsZ0JBQWdCLEdBQUdBOzs7a0JBTlBUOztZQVNuQlUsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDSCxRQUFRO1lBQ3RCOzs7WUFFQUksS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFD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