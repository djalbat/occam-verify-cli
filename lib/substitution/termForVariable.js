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
var _node = require("../utilities/node");
var _tokens = require("../utilities/tokens");
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
var termNodeQuery = (0, _query.nodeQuery)("/substitution/term[0]"), variableNodeQuery = (0, _query.nodeQuery)("/substitution/term[1]/variable!"), substitutionNodeQuery = (0, _query.nodeQuery)("/statement/substitution");
var TermForVariableSubstitution = /*#__PURE__*/ function(Substitution) {
    _inherits(TermForVariableSubstitution, Substitution);
    function TermForVariableSubstitution(string, node, tokens, term, variable) {
        _class_call_check(this, TermForVariableSubstitution);
        var _this;
        _this = _call_super(this, TermForVariableSubstitution, [
            string,
            node,
            tokens
        ]);
        _this.term = term;
        _this.variable = variable;
        return _this;
    }
    _create_class(TermForVariableSubstitution, [
        {
            key: "getTerm",
            value: function getTerm() {
                return this.term;
            }
        },
        {
            key: "getVariable",
            value: function getVariable() {
                return this.variable;
            }
        },
        {
            key: "isEqualTo",
            value: function isEqualTo(substitution) {
                var equalTo = false;
                var term = substitution.getTerm(), variable = substitution.getVariable();
                if (term !== null && variable !== null) {
                    var termNode = term.getNode(), variableNode = variable.getNode(), termNodeMatches = this.matchTermNode(termNode), variableNodeMatches = this.matchVariableNode(variableNode);
                    equalTo = termNodeMatches && variableNodeMatches;
                }
                return equalTo;
            }
        },
        {
            key: "matchTermNode",
            value: function matchTermNode(termNode) {
                termNode = (0, _brackets.stripBracketsFromTermNode)(termNode); ///
                var termNodeMatches = this.term.matchTermNode(termNode);
                return termNodeMatches;
            }
        },
        {
            key: "matchVariableName",
            value: function matchVariableName(variableName) {
                var variableNameMatches;
                var variableNameA = variableName; ///
                variableName = this.variable.getName();
                var variableNameB = variableName; ///
                variableNameMatches = variableNameA === variableNameB;
                return variableNameMatches;
            }
        },
        {
            key: "matchSubstitutionNode",
            value: function matchSubstitutionNode(substitutionNode) {
                debugger;
                var substitutionNodeMatches;
                if (substitutionNode === null && this.substitutionNode === null) {
                    substitutionNodeMatches = true;
                } else if (substitutionNode === null && this.substitutionNode !== null) {
                    substitutionNodeMatches = false;
                } else if (substitutionNode !== null && this.substitutionNode === null) {
                    substitutionNodeMatches = false;
                } else {
                    substitutionNodeMatches = this.substitutionNode.match(substitutionNode);
                }
                return substitutionNodeMatches;
            }
        },
        {
            key: "unifyWithEquivalence",
            value: function unifyWithEquivalence(equivalence, substitutions, generalContext, specificContext) {
                var unifiedWithEquivalence;
                var termNode = this.term.getNode(), equivalenceMatchesTermNode = equivalence.matchTermNode(termNode);
                if (equivalenceMatchesTermNode) {
                    var variableNode = this.variable.getNode(), equivalenceMatchesVariableNode = equivalence.matchVariableNode(variableNode);
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
            value: function fromStatementNode(statementNode, context) {
                var termForVariableSubstitution = null;
                var substitutionNode = substitutionNodeQuery(statementNode);
                if (substitutionNode !== null) {
                    var termNode = termNodeQuery(substitutionNode), variableNode = variableNodeQuery(substitutionNode);
                    if (termNode !== null && variableNode !== null) {
                        var Term = _shim.default.Term, Variable = _shim.default.Variable, term = Term.fromTermNode(termNode, context), variable = Variable.fromVariableNode(variableNode, context), node = substitutionNode, tokens = context.nodeAsTokens(node), string = stringFromTermAndVariable(term, variable);
                        termForVariableSubstitution = new TermForVariableSubstitution(string, node, tokens, term, variable);
                    }
                }
                return termForVariableSubstitution;
            }
        },
        {
            key: "fromTernAndVariable",
            value: function fromTernAndVariable(term, variable, context) {
                var termNode = term.getNode();
                termNode = (0, _brackets.stripBracketsFromTermNode)(termNode); ///
                var Term = _shim.default.Term;
                term = Term.fromTermNode(termNode, context);
                var lexer = context.getLexer(), parser = context.getParser(), string = stringFromTermAndVariable(term, variable), substitutionString = string, unqualifiedStatementString = (0, _node.unqualifiedStatementStringFromSubstitutionString)(substitutionString), unqualifiedStatementTokens = (0, _tokens.unqualifiedStatementTokensFromUnqualifiedStatementString)(unqualifiedStatementString, lexer), unqualifiedStatementNode = (0, _node.unqualifiedStatementNodeFromUnqualifiedStatementTokens)(unqualifiedStatementTokens, parser), substitutionNode = (0, _node.substitutionNodeFromUnqualifiedStatementNode)(unqualifiedStatementNode), substitutionTokens = (0, _tokens.substitutionTokensFromUnqualifiedStatementTokensAndSubstitutionNode)(unqualifiedStatementTokens, substitutionNode), node = substitutionNode, tokens = substitutionTokens, termForVariableSubstitution = new TermForVariableSubstitution(string, node, tokens, term, variable);
                return termForVariableSubstitution;
            }
        }
    ]);
    return TermForVariableSubstitution;
}(_substitution.default);
function stringFromTermAndVariable(term, variable) {
    var termString = term.getString(), variableString = variable.getString(), string = "[".concat(termString, " for ").concat(variableString, "]");
    return string;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zdWJzdGl0dXRpb24vdGVybUZvclZhcmlhYmxlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgc2hpbSBmcm9tIFwiLi4vc2hpbVwiO1xuaW1wb3J0IFN1YnN0aXR1dGlvbiBmcm9tIFwiLi4vc3Vic3RpdHV0aW9uXCI7XG5cbmltcG9ydCB7IG5vZGVRdWVyeSB9IGZyb20gXCIuLi91dGlsaXRpZXMvcXVlcnlcIjtcbmltcG9ydCB7IHN0cmlwQnJhY2tldHNGcm9tVGVybU5vZGUgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2JyYWNrZXRzXCI7XG5pbXBvcnQgeyBzdWJzdGl0dXRpb25Ob2RlRnJvbVVucXVhbGlmaWVkU3RhdGVtZW50Tm9kZSxcbiAgICAgICAgIHVucXVhbGlmaWVkU3RhdGVtZW50U3RyaW5nRnJvbVN1YnN0aXR1dGlvblN0cmluZyxcbiAgICAgICAgIHVucXVhbGlmaWVkU3RhdGVtZW50Tm9kZUZyb21VbnF1YWxpZmllZFN0YXRlbWVudFRva2VucyB9IGZyb20gXCIuLi91dGlsaXRpZXMvbm9kZVwiO1xuaW1wb3J0IHsgdW5xdWFsaWZpZWRTdGF0ZW1lbnRUb2tlbnNGcm9tVW5xdWFsaWZpZWRTdGF0ZW1lbnRTdHJpbmcsXG4gICAgICAgICBzdWJzdGl0dXRpb25Ub2tlbnNGcm9tVW5xdWFsaWZpZWRTdGF0ZW1lbnRUb2tlbnNBbmRTdWJzdGl0dXRpb25Ob2RlIH0gZnJvbSBcIi4uL3V0aWxpdGllcy90b2tlbnNcIjtcblxuY29uc3QgdGVybU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9zdWJzdGl0dXRpb24vdGVybVswXVwiKSxcbiAgICAgIHZhcmlhYmxlTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3N1YnN0aXR1dGlvbi90ZXJtWzFdL3ZhcmlhYmxlIVwiKSxcbiAgICAgIHN1YnN0aXR1dGlvbk5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9zdGF0ZW1lbnQvc3Vic3RpdHV0aW9uXCIpO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUZXJtRm9yVmFyaWFibGVTdWJzdGl0dXRpb24gZXh0ZW5kcyBTdWJzdGl0dXRpb24ge1xuICBjb25zdHJ1Y3RvcihzdHJpbmcsIG5vZGUsIHRva2VucywgdGVybSwgdmFyaWFibGUpIHtcbiAgICBzdXBlcihzdHJpbmcsIG5vZGUsIHRva2Vucyk7XG5cbiAgICB0aGlzLnRlcm0gPSB0ZXJtO1xuICAgIHRoaXMudmFyaWFibGUgPSB2YXJpYWJsZTtcbiAgfVxuXG4gIGdldFRlcm0oKSB7XG4gICAgcmV0dXJuIHRoaXMudGVybTtcbiAgfVxuXG4gIGdldFZhcmlhYmxlKCkge1xuICAgIHJldHVybiB0aGlzLnZhcmlhYmxlO1xuICB9XG5cbiAgaXNFcXVhbFRvKHN1YnN0aXR1dGlvbikge1xuICAgIGxldCBlcXVhbFRvID0gZmFsc2U7XG5cbiAgICBjb25zdCB0ZXJtID0gc3Vic3RpdHV0aW9uLmdldFRlcm0oKSxcbiAgICAgICAgICB2YXJpYWJsZSA9IHN1YnN0aXR1dGlvbi5nZXRWYXJpYWJsZSgpO1xuXG4gICAgaWYgKCh0ZXJtICE9PSBudWxsKSAmJiAodmFyaWFibGUgIT09IG51bGwpKSB7XG4gICAgICBjb25zdCB0ZXJtTm9kZSA9IHRlcm0uZ2V0Tm9kZSgpLFxuICAgICAgICAgICAgdmFyaWFibGVOb2RlID0gdmFyaWFibGUuZ2V0Tm9kZSgpLFxuICAgICAgICAgICAgdGVybU5vZGVNYXRjaGVzID0gdGhpcy5tYXRjaFRlcm1Ob2RlKHRlcm1Ob2RlKSxcbiAgICAgICAgICAgIHZhcmlhYmxlTm9kZU1hdGNoZXMgPSB0aGlzLm1hdGNoVmFyaWFibGVOb2RlKHZhcmlhYmxlTm9kZSk7XG5cbiAgICAgIGVxdWFsVG8gPSAodGVybU5vZGVNYXRjaGVzICYmIHZhcmlhYmxlTm9kZU1hdGNoZXMpO1xuICAgIH1cblxuICAgIHJldHVybiBlcXVhbFRvO1xuICB9XG5cbiAgbWF0Y2hUZXJtTm9kZSh0ZXJtTm9kZSkge1xuICAgIHRlcm1Ob2RlID0gc3RyaXBCcmFja2V0c0Zyb21UZXJtTm9kZSh0ZXJtTm9kZSk7IC8vL1xuXG4gICAgY29uc3QgdGVybU5vZGVNYXRjaGVzID0gdGhpcy50ZXJtLm1hdGNoVGVybU5vZGUodGVybU5vZGUpO1xuXG4gICAgcmV0dXJuIHRlcm1Ob2RlTWF0Y2hlcztcbiAgfVxuXG4gIG1hdGNoVmFyaWFibGVOYW1lKHZhcmlhYmxlTmFtZSkge1xuICAgIGxldCB2YXJpYWJsZU5hbWVNYXRjaGVzO1xuXG4gICAgY29uc3QgdmFyaWFibGVOYW1lQSA9IHZhcmlhYmxlTmFtZTsgLy8vXG5cbiAgICB2YXJpYWJsZU5hbWUgPSB0aGlzLnZhcmlhYmxlLmdldE5hbWUoKTtcblxuICAgIGNvbnN0IHZhcmlhYmxlTmFtZUIgPSB2YXJpYWJsZU5hbWU7IC8vL1xuXG4gICAgdmFyaWFibGVOYW1lTWF0Y2hlcyA9ICh2YXJpYWJsZU5hbWVBID09PSB2YXJpYWJsZU5hbWVCKTtcblxuICAgIHJldHVybiB2YXJpYWJsZU5hbWVNYXRjaGVzO1xuICB9XG5cbiAgbWF0Y2hTdWJzdGl0dXRpb25Ob2RlKHN1YnN0aXR1dGlvbk5vZGUpIHtcbiAgICBkZWJ1Z2dlclxuXG4gICAgbGV0IHN1YnN0aXR1dGlvbk5vZGVNYXRjaGVzO1xuXG4gICAgaWYgKChzdWJzdGl0dXRpb25Ob2RlID09PSBudWxsKSAmJiAodGhpcy5zdWJzdGl0dXRpb25Ob2RlID09PSBudWxsKSkge1xuICAgICAgc3Vic3RpdHV0aW9uTm9kZU1hdGNoZXMgPSB0cnVlO1xuICAgIH0gZWxzZSBpZiAoKHN1YnN0aXR1dGlvbk5vZGUgPT09IG51bGwpICYmICh0aGlzLnN1YnN0aXR1dGlvbk5vZGUgIT09IG51bGwpKSB7XG4gICAgICBzdWJzdGl0dXRpb25Ob2RlTWF0Y2hlcyA9IGZhbHNlO1xuICAgIH0gZWxzZSBpZiAoKHN1YnN0aXR1dGlvbk5vZGUgIT09IG51bGwpICYmICh0aGlzLnN1YnN0aXR1dGlvbk5vZGUgPT09IG51bGwpKSB7XG4gICAgICBzdWJzdGl0dXRpb25Ob2RlTWF0Y2hlcyA9IGZhbHNlO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdWJzdGl0dXRpb25Ob2RlTWF0Y2hlcyA9IHRoaXMuc3Vic3RpdHV0aW9uTm9kZS5tYXRjaChzdWJzdGl0dXRpb25Ob2RlKTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3Vic3RpdHV0aW9uTm9kZU1hdGNoZXM7XG4gIH1cblxuICB1bmlmeVdpdGhFcXVpdmFsZW5jZShlcXVpdmFsZW5jZSwgc3Vic3RpdHV0aW9ucywgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCkge1xuICAgIGxldCB1bmlmaWVkV2l0aEVxdWl2YWxlbmNlO1xuXG4gICAgY29uc3QgdGVybU5vZGUgPSB0aGlzLnRlcm0uZ2V0Tm9kZSgpLFxuICAgICAgICAgIGVxdWl2YWxlbmNlTWF0Y2hlc1Rlcm1Ob2RlID0gZXF1aXZhbGVuY2UubWF0Y2hUZXJtTm9kZSh0ZXJtTm9kZSk7XG5cbiAgICBpZiAoZXF1aXZhbGVuY2VNYXRjaGVzVGVybU5vZGUpIHtcbiAgICAgIGNvbnN0IHZhcmlhYmxlTm9kZSA9IHRoaXMudmFyaWFibGUuZ2V0Tm9kZSgpLFxuICAgICAgICAgICAgZXF1aXZhbGVuY2VNYXRjaGVzVmFyaWFibGVOb2RlID0gZXF1aXZhbGVuY2UubWF0Y2hWYXJpYWJsZU5vZGUodmFyaWFibGVOb2RlKTtcblxuICAgICAgaWYgKGVxdWl2YWxlbmNlTWF0Y2hlc1ZhcmlhYmxlTm9kZSkge1xuICAgICAgICAgIHVuaWZpZWRXaXRoRXF1aXZhbGVuY2UgPSB0cnVlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHVuaWZpZWRXaXRoRXF1aXZhbGVuY2U7XG4gIH1cblxuICBzdGF0aWMgZnJvbVN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSwgY29udGV4dCkge1xuICAgIGxldCB0ZXJtRm9yVmFyaWFibGVTdWJzdGl0dXRpb24gPSBudWxsO1xuXG4gICAgY29uc3Qgc3Vic3RpdHV0aW9uTm9kZSA9IHN1YnN0aXR1dGlvbk5vZGVRdWVyeShzdGF0ZW1lbnROb2RlKTtcblxuICAgIGlmIChzdWJzdGl0dXRpb25Ob2RlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCB0ZXJtTm9kZSA9IHRlcm1Ob2RlUXVlcnkoc3Vic3RpdHV0aW9uTm9kZSksXG4gICAgICAgICAgICB2YXJpYWJsZU5vZGUgPSB2YXJpYWJsZU5vZGVRdWVyeShzdWJzdGl0dXRpb25Ob2RlKTtcblxuICAgICAgaWYgKCh0ZXJtTm9kZSAhPT0gbnVsbCkgJiYgKHZhcmlhYmxlTm9kZSAhPT0gbnVsbCkpIHtcbiAgICAgICAgY29uc3QgeyBUZXJtLCBWYXJpYWJsZSB9ID0gc2hpbSxcbiAgICAgICAgICAgICAgdGVybSA9IFRlcm0uZnJvbVRlcm1Ob2RlKHRlcm1Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgICAgICAgdmFyaWFibGUgPSBWYXJpYWJsZS5mcm9tVmFyaWFibGVOb2RlKHZhcmlhYmxlTm9kZSwgY29udGV4dCksXG4gICAgICAgICAgICAgIG5vZGUgPSBzdWJzdGl0dXRpb25Ob2RlLCAgLy8vXG4gICAgICAgICAgICAgIHRva2VucyA9IGNvbnRleHQubm9kZUFzVG9rZW5zKG5vZGUpLFxuICAgICAgICAgICAgICBzdHJpbmcgPSBzdHJpbmdGcm9tVGVybUFuZFZhcmlhYmxlKHRlcm0sIHZhcmlhYmxlKTtcblxuICAgICAgICB0ZXJtRm9yVmFyaWFibGVTdWJzdGl0dXRpb24gPSBuZXcgVGVybUZvclZhcmlhYmxlU3Vic3RpdHV0aW9uKHN0cmluZywgbm9kZSwgdG9rZW5zLCB0ZXJtLCB2YXJpYWJsZSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRlcm1Gb3JWYXJpYWJsZVN1YnN0aXR1dGlvbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tVGVybkFuZFZhcmlhYmxlKHRlcm0sIHZhcmlhYmxlLCBjb250ZXh0KSB7XG4gICAgbGV0IHRlcm1Ob2RlID0gdGVybS5nZXROb2RlKCk7XG5cbiAgICB0ZXJtTm9kZSA9IHN0cmlwQnJhY2tldHNGcm9tVGVybU5vZGUodGVybU5vZGUpOyAvLy9cblxuICAgIGNvbnN0IHsgVGVybSB9ID0gc2hpbTtcblxuICAgIHRlcm0gPSBUZXJtLmZyb21UZXJtTm9kZSh0ZXJtTm9kZSwgY29udGV4dCk7XG5cbiAgICBjb25zdCBsZXhlciA9IGNvbnRleHQuZ2V0TGV4ZXIoKSxcbiAgICAgICAgICBwYXJzZXIgPSBjb250ZXh0LmdldFBhcnNlcigpLFxuICAgICAgICAgIHN0cmluZyA9IHN0cmluZ0Zyb21UZXJtQW5kVmFyaWFibGUodGVybSwgdmFyaWFibGUpLFxuICAgICAgICAgIHN1YnN0aXR1dGlvblN0cmluZyA9IHN0cmluZywgIC8vL1xuICAgICAgICAgIHVucXVhbGlmaWVkU3RhdGVtZW50U3RyaW5nID0gdW5xdWFsaWZpZWRTdGF0ZW1lbnRTdHJpbmdGcm9tU3Vic3RpdHV0aW9uU3RyaW5nKHN1YnN0aXR1dGlvblN0cmluZyksXG4gICAgICAgICAgdW5xdWFsaWZpZWRTdGF0ZW1lbnRUb2tlbnMgPSB1bnF1YWxpZmllZFN0YXRlbWVudFRva2Vuc0Zyb21VbnF1YWxpZmllZFN0YXRlbWVudFN0cmluZyh1bnF1YWxpZmllZFN0YXRlbWVudFN0cmluZywgbGV4ZXIpLFxuICAgICAgICAgIHVucXVhbGlmaWVkU3RhdGVtZW50Tm9kZSA9IHVucXVhbGlmaWVkU3RhdGVtZW50Tm9kZUZyb21VbnF1YWxpZmllZFN0YXRlbWVudFRva2Vucyh1bnF1YWxpZmllZFN0YXRlbWVudFRva2VucywgcGFyc2VyKSxcbiAgICAgICAgICBzdWJzdGl0dXRpb25Ob2RlID0gc3Vic3RpdHV0aW9uTm9kZUZyb21VbnF1YWxpZmllZFN0YXRlbWVudE5vZGUodW5xdWFsaWZpZWRTdGF0ZW1lbnROb2RlKSxcbiAgICAgICAgICBzdWJzdGl0dXRpb25Ub2tlbnMgPSBzdWJzdGl0dXRpb25Ub2tlbnNGcm9tVW5xdWFsaWZpZWRTdGF0ZW1lbnRUb2tlbnNBbmRTdWJzdGl0dXRpb25Ob2RlKHVucXVhbGlmaWVkU3RhdGVtZW50VG9rZW5zLCBzdWJzdGl0dXRpb25Ob2RlKSxcbiAgICAgICAgICBub2RlID0gc3Vic3RpdHV0aW9uTm9kZSwgIC8vXG4gICAgICAgICAgdG9rZW5zID0gc3Vic3RpdHV0aW9uVG9rZW5zLCAgLy8vXG4gICAgICAgICAgdGVybUZvclZhcmlhYmxlU3Vic3RpdHV0aW9uID0gbmV3IFRlcm1Gb3JWYXJpYWJsZVN1YnN0aXR1dGlvbihzdHJpbmcsIG5vZGUsIHRva2VucywgdGVybSwgdmFyaWFibGUpO1xuXG4gICAgcmV0dXJuIHRlcm1Gb3JWYXJpYWJsZVN1YnN0aXR1dGlvbjtcbiAgfVxufVxuXG5mdW5jdGlvbiBzdHJpbmdGcm9tVGVybUFuZFZhcmlhYmxlKHRlcm0sIHZhcmlhYmxlKSB7XG4gIGNvbnN0IHRlcm1TdHJpbmcgPSB0ZXJtLmdldFN0cmluZygpLFxuICAgICAgICB2YXJpYWJsZVN0cmluZyA9IHZhcmlhYmxlLmdldFN0cmluZygpLFxuICAgICAgICBzdHJpbmcgPSBgWyR7dGVybVN0cmluZ30gZm9yICR7dmFyaWFibGVTdHJpbmd9XWA7XG5cbiAgcmV0dXJuIHN0cmluZztcbn1cbiJdLCJuYW1lcyI6WyJUZXJtRm9yVmFyaWFibGVTdWJzdGl0dXRpb24iLCJ0ZXJtTm9kZVF1ZXJ5Iiwibm9kZVF1ZXJ5IiwidmFyaWFibGVOb2RlUXVlcnkiLCJzdWJzdGl0dXRpb25Ob2RlUXVlcnkiLCJzdHJpbmciLCJub2RlIiwidG9rZW5zIiwidGVybSIsInZhcmlhYmxlIiwiZ2V0VGVybSIsImdldFZhcmlhYmxlIiwiaXNFcXVhbFRvIiwic3Vic3RpdHV0aW9uIiwiZXF1YWxUbyIsInRlcm1Ob2RlIiwiZ2V0Tm9kZSIsInZhcmlhYmxlTm9kZSIsInRlcm1Ob2RlTWF0Y2hlcyIsIm1hdGNoVGVybU5vZGUiLCJ2YXJpYWJsZU5vZGVNYXRjaGVzIiwibWF0Y2hWYXJpYWJsZU5vZGUiLCJzdHJpcEJyYWNrZXRzRnJvbVRlcm1Ob2RlIiwibWF0Y2hWYXJpYWJsZU5hbWUiLCJ2YXJpYWJsZU5hbWUiLCJ2YXJpYWJsZU5hbWVNYXRjaGVzIiwidmFyaWFibGVOYW1lQSIsImdldE5hbWUiLCJ2YXJpYWJsZU5hbWVCIiwibWF0Y2hTdWJzdGl0dXRpb25Ob2RlIiwic3Vic3RpdHV0aW9uTm9kZSIsInN1YnN0aXR1dGlvbk5vZGVNYXRjaGVzIiwibWF0Y2giLCJ1bmlmeVdpdGhFcXVpdmFsZW5jZSIsImVxdWl2YWxlbmNlIiwic3Vic3RpdHV0aW9ucyIsImdlbmVyYWxDb250ZXh0Iiwic3BlY2lmaWNDb250ZXh0IiwidW5pZmllZFdpdGhFcXVpdmFsZW5jZSIsImVxdWl2YWxlbmNlTWF0Y2hlc1Rlcm1Ob2RlIiwiZXF1aXZhbGVuY2VNYXRjaGVzVmFyaWFibGVOb2RlIiwiZnJvbVN0YXRlbWVudE5vZGUiLCJzdGF0ZW1lbnROb2RlIiwiY29udGV4dCIsInRlcm1Gb3JWYXJpYWJsZVN1YnN0aXR1dGlvbiIsIlRlcm0iLCJzaGltIiwiVmFyaWFibGUiLCJmcm9tVGVybU5vZGUiLCJmcm9tVmFyaWFibGVOb2RlIiwibm9kZUFzVG9rZW5zIiwic3RyaW5nRnJvbVRlcm1BbmRWYXJpYWJsZSIsImZyb21UZXJuQW5kVmFyaWFibGUiLCJsZXhlciIsImdldExleGVyIiwicGFyc2VyIiwiZ2V0UGFyc2VyIiwic3Vic3RpdHV0aW9uU3RyaW5nIiwidW5xdWFsaWZpZWRTdGF0ZW1lbnRTdHJpbmciLCJ1bnF1YWxpZmllZFN0YXRlbWVudFN0cmluZ0Zyb21TdWJzdGl0dXRpb25TdHJpbmciLCJ1bnF1YWxpZmllZFN0YXRlbWVudFRva2VucyIsInVucXVhbGlmaWVkU3RhdGVtZW50VG9rZW5zRnJvbVVucXVhbGlmaWVkU3RhdGVtZW50U3RyaW5nIiwidW5xdWFsaWZpZWRTdGF0ZW1lbnROb2RlIiwidW5xdWFsaWZpZWRTdGF0ZW1lbnROb2RlRnJvbVVucXVhbGlmaWVkU3RhdGVtZW50VG9rZW5zIiwic3Vic3RpdHV0aW9uTm9kZUZyb21VbnF1YWxpZmllZFN0YXRlbWVudE5vZGUiLCJzdWJzdGl0dXRpb25Ub2tlbnMiLCJzdWJzdGl0dXRpb25Ub2tlbnNGcm9tVW5xdWFsaWZpZWRTdGF0ZW1lbnRUb2tlbnNBbmRTdWJzdGl0dXRpb25Ob2RlIiwiU3Vic3RpdHV0aW9uIiwidGVybVN0cmluZyIsImdldFN0cmluZyIsInZhcmlhYmxlU3RyaW5nIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQWlCcUJBOzs7MkRBZko7bUVBQ1E7cUJBRUM7d0JBQ2dCO29CQUc2QjtzQkFFYTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVwRixJQUFNQyxnQkFBZ0JDLElBQUFBLGdCQUFTLEVBQUMsMEJBQzFCQyxvQkFBb0JELElBQUFBLGdCQUFTLEVBQUMsb0NBQzlCRSx3QkFBd0JGLElBQUFBLGdCQUFTLEVBQUM7QUFFekIsSUFBQSxBQUFNRiw0Q0FBTjtjQUFNQTthQUFBQSw0QkFDUEssTUFBTSxFQUFFQyxJQUFJLEVBQUVDLE1BQU0sRUFBRUMsSUFBSSxFQUFFQyxRQUFRO2dDQUQ3QlQ7O2dCQUVqQixrQkFGaUJBO1lBRVhLO1lBQVFDO1lBQU1DOztRQUVwQixNQUFLQyxJQUFJLEdBQUdBO1FBQ1osTUFBS0MsUUFBUSxHQUFHQTs7O2tCQUxDVDs7WUFRbkJVLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0YsSUFBSTtZQUNsQjs7O1lBRUFHLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0YsUUFBUTtZQUN0Qjs7O1lBRUFHLEtBQUFBO21CQUFBQSxTQUFBQSxVQUFVQyxZQUFZO2dCQUNwQixJQUFJQyxVQUFVO2dCQUVkLElBQU1OLE9BQU9LLGFBQWFILE9BQU8sSUFDM0JELFdBQVdJLGFBQWFGLFdBQVc7Z0JBRXpDLElBQUksQUFBQ0gsU0FBUyxRQUFVQyxhQUFhLE1BQU87b0JBQzFDLElBQU1NLFdBQVdQLEtBQUtRLE9BQU8sSUFDdkJDLGVBQWVSLFNBQVNPLE9BQU8sSUFDL0JFLGtCQUFrQixJQUFJLENBQUNDLGFBQWEsQ0FBQ0osV0FDckNLLHNC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