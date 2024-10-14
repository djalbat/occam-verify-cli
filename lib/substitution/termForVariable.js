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
                    var Term = _shim.default.Term, Variable = _shim.default.Variable, term = Term.fromTermNode(termNode, localContext), variable = Variable.fromVariableNode(variableNode, localContext), string = stringFromTermAndVariable(term, variable);
                    termForVariableSubstitution = new TermForVariableSubstitution(string, termNode, variableNode);
                }
                return termForVariableSubstitution;
            }
        },
        {
            key: "fromStatementNode",
            value: function fromStatementNode(statementNode, localContext) {
                var termForVariableSubstitution = null;
                var substitutionNode = substitutionNodeQuery(statementNode);
                if (substitutionNode !== null) {
                    var substitutionTermNode = substitutionTermNodeQuery(substitutionNode);
                    if (substitutionTermNode !== null) {
                        var termNode;
                        var substitutionVariableNode = substitutionsVariableNodeQuery(substitutionNode), variableNode = substitutionVariableNode; ///
                        termNode = substitutionTermNode; ///
                        var Term = _shim.default.Term, Variable = _shim.default.Variable, term = Term.fromTermNode(termNode, localContext), variable = Variable.fromVariableNode(variableNode, localContext), string = stringFromTermAndVariable(term, variable);
                        termForVariableSubstitution = new TermForVariableSubstitution(string, termNode, variableNode);
                    }
                }
                return termForVariableSubstitution;
            }
        },
        {
            key: "fromTernAndVariable",
            value: function fromTernAndVariable(term, variable) {
                var termNode = term.getNode();
                termNode = (0, _brackets.stripBracketsFromTerm)(termNode); ///
                var variableNode = variable.getNode(), string = stringFromTermAndVariable(term, variable), termForVariableSubstitution = new TermForVariableSubstitution(string, termNode, variableNode);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zdWJzdGl0dXRpb24vdGVybUZvclZhcmlhYmxlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgc2hpbSBmcm9tIFwiLi4vc2hpbVwiO1xuaW1wb3J0IFN1YnN0aXR1dGlvbiBmcm9tIFwiLi4vc3Vic3RpdHV0aW9uXCI7XG5cbmltcG9ydCB7IG5vZGVRdWVyeSB9IGZyb20gXCIuLi91dGlsaXRpZXMvcXVlcnlcIjtcbmltcG9ydCB7IHN0cmlwQnJhY2tldHNGcm9tVGVybSB9IGZyb20gXCIuLi91dGlsaXRpZXMvYnJhY2tldHNcIjtcblxuY29uc3Qgc3Vic3RpdHV0aW9uTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3N0YXRlbWVudC9zdWJzdGl0dXRpb25cIiksXG4gICAgICB0ZXJtVmFyaWFibGVOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvdGVybS92YXJpYWJsZSFcIiksXG4gICAgICBzdWJzdGl0dXRpb25UZXJtTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3N1YnN0aXR1dGlvbi90ZXJtIVwiKSxcbiAgICAgIHN1YnN0aXR1dGlvbnNWYXJpYWJsZU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9zdWJzdGl0dXRpb24vdmFyaWFibGUhXCIpO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUZXJtRm9yVmFyaWFibGVTdWJzdGl0dXRpb24gZXh0ZW5kcyBTdWJzdGl0dXRpb24ge1xuICBjb25zdHJ1Y3RvcihzdHJpbmcsIHRlcm1Ob2RlLCB2YXJpYWJsZU5vZGUpIHtcbiAgICBzdXBlcihzdHJpbmcpO1xuXG4gICAgdGhpcy50ZXJtTm9kZSA9IHRlcm1Ob2RlO1xuICAgIHRoaXMudmFyaWFibGVOb2RlID0gdmFyaWFibGVOb2RlO1xuICB9XG5cbiAgZ2V0VGVybU5vZGUoKSB7XG4gICAgcmV0dXJuIHRoaXMudGVybU5vZGU7XG4gIH1cblxuICBnZXRWYXJpYWJsZU5vZGUoKSB7XG4gICAgcmV0dXJuIHRoaXMudmFyaWFibGVOb2RlO1xuICB9XG5cbiAgdHJhbnNmb3JtZWQoc3Vic3RpdHV0aW9ucykge1xuICAgIGxldCB0cmFuc2Zvcm1lZFN1YnN0aXR1dGlvbiA9IG51bGw7XG5cbiAgICBjb25zdCB0cmFuc2Zvcm1lZFRlcm1Ob2RlID0gdHJhbnNmb3JtVGVybU5vZGUodGhpcy50ZXJtTm9kZSwgc3Vic3RpdHV0aW9ucyksXG4gICAgICAgICAgdHJhbnNmb3JtZWRWYXJpYWJsZU5vZGUgPSB0cmFuc2Zvcm1WYXJpYWJsZU5vZGUodGhpcy52YXJpYWJsZU5vZGUsIHN1YnN0aXR1dGlvbnMpO1xuXG4gICAgaWYgKCh0cmFuc2Zvcm1lZFRlcm1Ob2RlICE9PSBudWxsKSAmJiAodHJhbnNmb3JtZWRWYXJpYWJsZU5vZGUgIT09IG51bGwpKSB7XG4gICAgICBjb25zdCB0ZXJtTm9kZSA9IHRyYW5zZm9ybWVkVGVybU5vZGUsIC8vL1xuICAgICAgICAgICAgdmFyaWFibGVOb2RlID0gdHJhbnNmb3JtZWRWYXJpYWJsZU5vZGUsIC8vL1xuICAgICAgICAgICAgdGVybUZvclZhcmlhYmxlU3Vic3RpdHV0aW9uID0gbmV3IFRlcm1Gb3JWYXJpYWJsZVN1YnN0aXR1dGlvbih0ZXJtTm9kZSwgdmFyaWFibGVOb2RlKTtcblxuICAgICAgdHJhbnNmb3JtZWRTdWJzdGl0dXRpb24gPSB0ZXJtRm9yVmFyaWFibGVTdWJzdGl0dXRpb247ICAvLy9cbiAgICB9XG5cbiAgICByZXR1cm4gdHJhbnNmb3JtZWRTdWJzdGl0dXRpb247XG4gIH1cblxuICBpc0VxdWFsVG8oc3Vic3RpdHV0aW9uKSB7XG4gICAgY29uc3QgdGVybU5vZGUgPSBzdWJzdGl0dXRpb24uZ2V0VGVybU5vZGUoKSxcbiAgICAgICAgICB2YXJpYWJsZU5vZGUgPSBzdWJzdGl0dXRpb24uZ2V0VmFyaWFibGVOb2RlKCksXG4gICAgICAgICAgdGVybU5vZGVNYXRjaGVzID0gdGhpcy5tYXRjaFRlcm1Ob2RlKHRlcm1Ob2RlKSxcbiAgICAgICAgICB2YXJpYWJsZU5vZGVNYXRjaGVzID0gdGhpcy5tYXRjaFZhcmlhYmxlTm9kZSh2YXJpYWJsZU5vZGUpLFxuICAgICAgICAgIGVxdWFsVG8gPSAodGVybU5vZGVNYXRjaGVzICYmIHZhcmlhYmxlTm9kZU1hdGNoZXMpO1xuXG4gICAgcmV0dXJuIGVxdWFsVG87XG4gIH1cblxuICBtYXRjaFRlcm1Ob2RlKHRlcm1Ob2RlKSB7XG4gICAgdGVybU5vZGUgPSBzdHJpcEJyYWNrZXRzRnJvbVRlcm0odGVybU5vZGUpOyAvLy9cblxuICAgIGNvbnN0IHRlcm1Ob2RlTWF0Y2hlcyA9IHRoaXMudGVybU5vZGUubWF0Y2godGVybU5vZGUpO1xuXG4gICAgcmV0dXJuIHRlcm1Ob2RlTWF0Y2hlcztcbiAgfVxuXG4gIG1hdGNoVmFyaWFibGVOb2RlKHZhcmlhYmxlTm9kZSkge1xuICAgIGNvbnN0IHZhcmlhYmxlTm9kZU1hdGNoZXMgPSB0aGlzLnZhcmlhYmxlTm9kZS5tYXRjaCh2YXJpYWJsZU5vZGUpO1xuXG4gICAgcmV0dXJuIHZhcmlhYmxlTm9kZU1hdGNoZXM7XG4gIH1cblxuICB1bmlmeVdpdGhFcXVpdmFsZW5jZShlcXVpdmFsZW5jZSwgc3Vic3RpdHV0aW9ucywgbG9jYWxDb250ZXh0QSwgbG9jYWxDb250ZXh0Qikge1xuICAgIGxldCB1bmlmaWVkV2l0aEVxdWl2YWxlbmNlO1xuXG4gICAgY29uc3QgZXF1aXZhbGVuY2VNYXRjaGVzVGVybU5vZGUgPSBlcXVpdmFsZW5jZS5tYXRjaFRlcm1Ob2RlKHRoaXMudGVybU5vZGUpO1xuXG4gICAgaWYgKGVxdWl2YWxlbmNlTWF0Y2hlc1Rlcm1Ob2RlKSB7XG4gICAgICBjb25zdCBlcXVpdmFsZW5jZU1hdGNoZXNWYXJpYWJsZU5vZGUgPSBlcXVpdmFsZW5jZS5tYXRjaFZhcmlhYmxlTm9kZSh0aGlzLnZhcmlhYmxlTm9kZSk7XG5cbiAgICAgIGlmIChlcXVpdmFsZW5jZU1hdGNoZXNWYXJpYWJsZU5vZGUpIHtcbiAgICAgICAgICB1bmlmaWVkV2l0aEVxdWl2YWxlbmNlID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB1bmlmaWVkV2l0aEVxdWl2YWxlbmNlO1xuICB9XG5cbiAgc3RhdGljIGZyb21TdWJzdGl0dXRpb24oc3Vic3RpdHV0aW9uLCBsb2NhbENvbnRleHQpIHtcbiAgICBsZXQgdGVybUZvclZhcmlhYmxlU3Vic3RpdHV0aW9uID0gbnVsbDtcblxuICAgIGNvbnN0IHN1YnN0aXR1dGlvbk5vZGUgPSBzdWJzdGl0dXRpb24uZ2V0Tm9kZSgpO1xuXG4gICAgbGV0IHN1YnN0aXR1dGlvblRlcm1Ob2RlID0gc3Vic3RpdHV0aW9uVGVybU5vZGVRdWVyeShzdWJzdGl0dXRpb25Ob2RlKTtcblxuICAgIGlmIChzdWJzdGl0dXRpb25UZXJtTm9kZSAhPT0gbnVsbCkge1xuICAgICAgbGV0IHRlcm1Ob2RlO1xuXG4gICAgICBjb25zdCBzdWJzdGl0dXRpb25WYXJpYWJsZU5vZGUgPSBzdWJzdGl0dXRpb25zVmFyaWFibGVOb2RlUXVlcnkoc3Vic3RpdHV0aW9uTm9kZSksXG4gICAgICAgICAgICB2YXJpYWJsZU5vZGUgPSBzdWJzdGl0dXRpb25WYXJpYWJsZU5vZGU7ICAvLy9cblxuICAgICAgdGVybU5vZGUgPSBzdWJzdGl0dXRpb25UZXJtTm9kZTsgIC8vL1xuXG4gICAgICB0ZXJtTm9kZSA9IHN0cmlwQnJhY2tldHNGcm9tVGVybSh0ZXJtTm9kZSk7IC8vL1xuXG4gICAgICBjb25zdCB7IFRlcm0sIFZhcmlhYmxlIH0gPSBzaGltLFxuICAgICAgICAgICAgdGVybSA9IFRlcm0uZnJvbVRlcm1Ob2RlKHRlcm1Ob2RlLCBsb2NhbENvbnRleHQpLFxuICAgICAgICAgICAgdmFyaWFibGUgPSBWYXJpYWJsZS5mcm9tVmFyaWFibGVOb2RlKHZhcmlhYmxlTm9kZSwgbG9jYWxDb250ZXh0KSxcbiAgICAgICAgICAgIHN0cmluZyA9IHN0cmluZ0Zyb21UZXJtQW5kVmFyaWFibGUodGVybSwgdmFyaWFibGUpO1xuXG4gICAgICB0ZXJtRm9yVmFyaWFibGVTdWJzdGl0dXRpb24gPSBuZXcgVGVybUZvclZhcmlhYmxlU3Vic3RpdHV0aW9uKHN0cmluZywgdGVybU5vZGUsIHZhcmlhYmxlTm9kZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRlcm1Gb3JWYXJpYWJsZVN1YnN0aXR1dGlvbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tU3RhdGVtZW50Tm9kZShzdGF0ZW1lbnROb2RlLCBsb2NhbENvbnRleHQpIHtcbiAgICBsZXQgdGVybUZvclZhcmlhYmxlU3Vic3RpdHV0aW9uID0gbnVsbDtcblxuICAgIGNvbnN0IHN1YnN0aXR1dGlvbk5vZGUgPSBzdWJzdGl0dXRpb25Ob2RlUXVlcnkoc3RhdGVtZW50Tm9kZSk7XG5cbiAgICBpZiAoc3Vic3RpdHV0aW9uTm9kZSAhPT0gbnVsbCkge1xuICAgICAgbGV0IHN1YnN0aXR1dGlvblRlcm1Ob2RlID0gc3Vic3RpdHV0aW9uVGVybU5vZGVRdWVyeShzdWJzdGl0dXRpb25Ob2RlKTtcblxuICAgICAgaWYgKHN1YnN0aXR1dGlvblRlcm1Ob2RlICE9PSBudWxsKSB7XG4gICAgICAgIGxldCB0ZXJtTm9kZTtcblxuICAgICAgICBjb25zdCBzdWJzdGl0dXRpb25WYXJpYWJsZU5vZGUgPSBzdWJzdGl0dXRpb25zVmFyaWFibGVOb2RlUXVlcnkoc3Vic3RpdHV0aW9uTm9kZSksXG4gICAgICAgICAgICAgIHZhcmlhYmxlTm9kZSA9IHN1YnN0aXR1dGlvblZhcmlhYmxlTm9kZTsgIC8vL1xuXG4gICAgICAgIHRlcm1Ob2RlID0gc3Vic3RpdHV0aW9uVGVybU5vZGU7ICAvLy9cblxuICAgICAgICBjb25zdCB7IFRlcm0sIFZhcmlhYmxlIH0gPSBzaGltLFxuICAgICAgICAgICAgICB0ZXJtID0gVGVybS5mcm9tVGVybU5vZGUodGVybU5vZGUsIGxvY2FsQ29udGV4dCksXG4gICAgICAgICAgICAgIHZhcmlhYmxlID0gVmFyaWFibGUuZnJvbVZhcmlhYmxlTm9kZSh2YXJpYWJsZU5vZGUsIGxvY2FsQ29udGV4dCksXG4gICAgICAgICAgICAgIHN0cmluZyA9IHN0cmluZ0Zyb21UZXJtQW5kVmFyaWFibGUodGVybSwgdmFyaWFibGUpO1xuXG4gICAgICAgIHRlcm1Gb3JWYXJpYWJsZVN1YnN0aXR1dGlvbiA9IG5ldyBUZXJtRm9yVmFyaWFibGVTdWJzdGl0dXRpb24oc3RyaW5nLCB0ZXJtTm9kZSwgdmFyaWFibGVOb2RlKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdGVybUZvclZhcmlhYmxlU3Vic3RpdHV0aW9uO1xuICB9XG5cbiAgc3RhdGljIGZyb21UZXJuQW5kVmFyaWFibGUodGVybSwgdmFyaWFibGUpIHtcbiAgICBsZXQgdGVybU5vZGUgPSB0ZXJtLmdldE5vZGUoKTtcblxuICAgIHRlcm1Ob2RlID0gc3RyaXBCcmFja2V0c0Zyb21UZXJtKHRlcm1Ob2RlKTsgLy8vXG5cbiAgICBjb25zdCB2YXJpYWJsZU5vZGUgPSB2YXJpYWJsZS5nZXROb2RlKCksXG4gICAgICAgICAgc3RyaW5nID0gc3RyaW5nRnJvbVRlcm1BbmRWYXJpYWJsZSh0ZXJtLCB2YXJpYWJsZSksXG4gICAgICAgICAgdGVybUZvclZhcmlhYmxlU3Vic3RpdHV0aW9uID0gbmV3IFRlcm1Gb3JWYXJpYWJsZVN1YnN0aXR1dGlvbihzdHJpbmcsIHRlcm1Ob2RlLCB2YXJpYWJsZU5vZGUpO1xuXG4gICAgcmV0dXJuIHRlcm1Gb3JWYXJpYWJsZVN1YnN0aXR1dGlvbjtcbiAgfVxufVxuXG5mdW5jdGlvbiB0cmFuc2Zvcm1UZXJtTm9kZSh0ZXJtTm9kZSwgc3Vic3RpdHV0aW9ucykge1xuICBsZXQgdHJhbnNmb3JtZWRUZXJtTm9kZSA9IG51bGw7XG5cbiAgY29uc3QgdGVybVZhcmlhYmxlTm9kZSA9IHRlcm1WYXJpYWJsZU5vZGVRdWVyeSh0ZXJtTm9kZSk7XG5cbiAgaWYgKHRlcm1WYXJpYWJsZU5vZGUgIT09IG51bGwpIHtcbiAgICBjb25zdCB2YXJpYWJsZU5vZGUgPSB0ZXJtVmFyaWFibGVOb2RlOyAgLy8vXG5cbiAgICBzdWJzdGl0dXRpb25zLnNvbWVTdWJzdGl0dXRpb24oKHN1YnN0aXR1dGlvbikgPT4ge1xuICAgICAgY29uc3Qgc3Vic3RpdHV0aW9uTWF0Y2hlc1ZhcmlhYmxlTm9kZSA9IHN1YnN0aXR1dGlvbi5tYXRjaFZhcmlhYmxlTm9kZSh2YXJpYWJsZU5vZGUpO1xuXG4gICAgICBpZiAoc3Vic3RpdHV0aW9uTWF0Y2hlc1ZhcmlhYmxlTm9kZSkge1xuICAgICAgICBjb25zdCB0ZXJtTm9kZSA9IHN1YnN0aXR1dGlvbi5nZXRUZXJtTm9kZSgpO1xuXG4gICAgICAgIHRyYW5zZm9ybWVkVGVybU5vZGUgPSB0ZXJtTm9kZTsgLy8vL1xuXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIHRyYW5zZm9ybWVkVGVybU5vZGU7XG59XG5cbmZ1bmN0aW9uIHRyYW5zZm9ybVZhcmlhYmxlTm9kZSh2YXJpYWJsZU5vZGUsIHN1YnN0aXR1dGlvbnMpIHtcbiAgbGV0IHRyYW5zZm9ybWVkVmFyaWFibGVOb2RlID0gbnVsbDtcblxuICBzdWJzdGl0dXRpb25zLnNvbWVTdWJzdGl0dXRpb24oKHN1YnN0aXR1dGlvbikgPT4ge1xuICAgIGNvbnN0IHZhcmlhYmxlTm9kZU1hdGNoZXMgPSBzdWJzdGl0dXRpb24ubWF0Y2hWYXJpYWJsZU5vZGUodmFyaWFibGVOb2RlKTtcblxuICAgIGlmICh2YXJpYWJsZU5vZGVNYXRjaGVzKSB7XG4gICAgICBjb25zdCB0ZXJtTm9kZSA9IHN1YnN0aXR1dGlvbi5nZXRUZXJtTm9kZSgpLFxuICAgICAgICAgICAgdGVybVZhcmlhYmxlTm9kZSA9IHRlcm1WYXJpYWJsZU5vZGVRdWVyeSh0ZXJtTm9kZSk7XG5cbiAgICAgIGlmICh0ZXJtVmFyaWFibGVOb2RlICE9PSBudWxsKSB7XG4gICAgICAgIHRyYW5zZm9ybWVkVmFyaWFibGVOb2RlID0gdGVybVZhcmlhYmxlTm9kZTsgIC8vL1xuXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIHRyYW5zZm9ybWVkVmFyaWFibGVOb2RlO1xufVxuXG5mdW5jdGlvbiBzdHJpbmdGcm9tVGVybUFuZFZhcmlhYmxlKHRlcm0sIHZhcmlhYmxlKSB7XG4gIGNvbnN0IHRlcm1TdHJpbmcgPSB0ZXJtLmdldFN0cmluZygpLFxuICAgICAgICB2YXJpYWJsZVN0cmluZyA9IHZhcmlhYmxlLmdldFN0cmluZygpLFxuICAgICAgICBzdHJpbmcgPSBgWyR7dGVybVN0cmluZ30gZm9yICR7dmFyaWFibGVTdHJpbmd9XWA7XG5cbiAgcmV0dXJuIHN0cmluZztcbn1cbiJdLCJuYW1lcyI6WyJUZXJtRm9yVmFyaWFibGVTdWJzdGl0dXRpb24iLCJzdWJzdGl0dXRpb25Ob2RlUXVlcnkiLCJub2RlUXVlcnkiLCJ0ZXJtVmFyaWFibGVOb2RlUXVlcnkiLCJzdWJzdGl0dXRpb25UZXJtTm9kZVF1ZXJ5Iiwic3Vic3RpdHV0aW9uc1ZhcmlhYmxlTm9kZVF1ZXJ5Iiwic3RyaW5nIiwidGVybU5vZGUiLCJ2YXJpYWJsZU5vZGUiLCJnZXRUZXJtTm9kZSIsImdldFZhcmlhYmxlTm9kZSIsInRyYW5zZm9ybWVkIiwic3Vic3RpdHV0aW9ucyIsInRyYW5zZm9ybWVkU3Vic3RpdHV0aW9uIiwidHJhbnNmb3JtZWRUZXJtTm9kZSIsInRyYW5zZm9ybVRlcm1Ob2RlIiwidHJhbnNmb3JtZWRWYXJpYWJsZU5vZGUiLCJ0cmFuc2Zvcm1WYXJpYWJsZU5vZGUiLCJ0ZXJtRm9yVmFyaWFibGVTdWJzdGl0dXRpb24iLCJpc0VxdWFsVG8iLCJzdWJzdGl0dXRpb24iLCJ0ZXJtTm9kZU1hdGNoZXMiLCJtYXRjaFRlcm1Ob2RlIiwidmFyaWFibGVOb2RlTWF0Y2hlcyIsIm1hdGNoVmFyaWFibGVOb2RlIiwiZXF1YWxUbyIsInN0cmlwQnJhY2tldHNGcm9tVGVybSIsIm1hdGNoIiwidW5pZnlXaXRoRXF1aXZhbGVuY2UiLCJlcXVpdmFsZW5jZSIsImxvY2FsQ29udGV4dEEiLCJsb2NhbENvbnRleHRCIiwidW5pZmllZFdpdGhFcXVpdmFsZW5jZSIsImVxdWl2YWxlbmNlTWF0Y2hlc1Rlcm1Ob2RlIiwiZXF1aXZhbGVuY2VNYXRjaGVzVmFyaWFibGVOb2RlIiwiZnJvbVN1YnN0aXR1dGlvbiIsImxvY2FsQ29udGV4dCIsInN1YnN0aXR1dGlvbk5vZGUiLCJnZXROb2RlIiwic3Vic3RpdHV0aW9uVGVybU5vZGUiLCJzdWJzdGl0dXRpb25WYXJpYWJsZU5vZGUiLCJUZXJtIiwic2hpbSIsIlZhcmlhYmxlIiwidGVybSIsImZyb21UZXJtTm9kZSIsInZhcmlhYmxlIiwiZnJvbVZhcmlhYmxlTm9kZSIsInN0cmluZ0Zyb21UZXJtQW5kVmFyaWFibGUiLCJmcm9tU3RhdGVtZW50Tm9kZSIsInN0YXRlbWVudE5vZGUiLCJmcm9tVGVybkFuZFZhcmlhYmxlIiwiU3Vic3RpdHV0aW9uIiwidGVybVZhcmlhYmxlTm9kZSIsInNvbWVTdWJzdGl0dXRpb24iLCJzdWJzdGl0dXRpb25NYXRjaGVzVmFyaWFibGVOb2RlIiwidGVybVN0cmluZyIsImdldFN0cmluZyIsInZhcmlhYmxlU3RyaW5nIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQWFxQkE7OzsyREFYSjttRUFDUTtxQkFFQzt3QkFDWTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUV0QyxJQUFNQyx3QkFBd0JDLElBQUFBLGdCQUFTLEVBQUMsNEJBQ2xDQyx3QkFBd0JELElBQUFBLGdCQUFTLEVBQUMsb0JBQ2xDRSw0QkFBNEJGLElBQUFBLGdCQUFTLEVBQUMsd0JBQ3RDRyxpQ0FBaUNILElBQUFBLGdCQUFTLEVBQUM7QUFFbEMsSUFBQSxBQUFNRiw0Q0FBTjtjQUFNQTthQUFBQSw0QkFDUE0sTUFBTSxFQUFFQyxRQUFRLEVBQUVDLFlBQVk7Z0NBRHZCUjs7Z0JBRWpCLGtCQUZpQkE7WUFFWE07O1FBRU4sTUFBS0MsUUFBUSxHQUFHQTtRQUNoQixNQUFLQyxZQUFZLEdBQUdB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