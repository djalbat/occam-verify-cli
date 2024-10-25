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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zdWJzdGl0dXRpb24vdGVybUZvclZhcmlhYmxlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgc2hpbSBmcm9tIFwiLi4vc2hpbVwiO1xuaW1wb3J0IFN1YnN0aXR1dGlvbiBmcm9tIFwiLi4vc3Vic3RpdHV0aW9uXCI7XG5cbmltcG9ydCB7IG5vZGVRdWVyeSB9IGZyb20gXCIuLi91dGlsaXRpZXMvcXVlcnlcIjtcbmltcG9ydCB7IHN0cmlwQnJhY2tldHNGcm9tVGVybU5vZGUgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2JyYWNrZXRzXCI7XG5pbXBvcnQgeyBzdWJzdGl0dXRpb25Ob2RlRnJvbVVucXVhbGlmaWVkU3RhdGVtZW50Tm9kZSxcbiAgICAgICAgIHVucXVhbGlmaWVkU3RhdGVtZW50U3RyaW5nRnJvbVN1YnN0aXR1dGlvblN0cmluZyxcbiAgICAgICAgIHVucXVhbGlmaWVkU3RhdGVtZW50Tm9kZUZyb21VbnF1YWxpZmllZFN0YXRlbWVudFRva2VucyB9IGZyb20gXCIuLi91dGlsaXRpZXMvbm9kZVwiO1xuaW1wb3J0IHsgdW5xdWFsaWZpZWRTdGF0ZW1lbnRUb2tlbnNGcm9tVW5xdWFsaWZpZWRTdGF0ZW1lbnRTdHJpbmcsXG4gICAgICAgICBzdWJzdGl0dXRpb25Ub2tlbnNGcm9tVW5xdWFsaWZpZWRTdGF0ZW1lbnRUb2tlbnNBbmRTdWJzdGl0dXRpb25Ob2RlIH0gZnJvbSBcIi4uL3V0aWxpdGllcy90b2tlbnNcIjtcblxuY29uc3QgdGVybU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9zdWJzdGl0dXRpb24vdGVybVswXVwiKSxcbiAgICAgIHZhcmlhYmxlTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3N1YnN0aXR1dGlvbi90ZXJtWzFdL3ZhcmlhYmxlIVwiKSxcbiAgICAgIHN1YnN0aXR1dGlvbk5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9zdGF0ZW1lbnQvc3Vic3RpdHV0aW9uXCIpO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUZXJtRm9yVmFyaWFibGVTdWJzdGl0dXRpb24gZXh0ZW5kcyBTdWJzdGl0dXRpb24ge1xuICBjb25zdHJ1Y3RvcihzdHJpbmcsIG5vZGUsIHRva2VucywgdGVybSwgdmFyaWFibGUpIHtcbiAgICBzdXBlcihzdHJpbmcsIG5vZGUsIHRva2Vucyk7XG5cbiAgICB0aGlzLnRlcm0gPSB0ZXJtO1xuICAgIHRoaXMudmFyaWFibGUgPSB2YXJpYWJsZTtcbiAgfVxuXG4gIGdldFRlcm0oKSB7XG4gICAgcmV0dXJuIHRoaXMudGVybTtcbiAgfVxuXG4gIGdldFZhcmlhYmxlKCkge1xuICAgIHJldHVybiB0aGlzLnZhcmlhYmxlO1xuICB9XG5cbiAgaXNFcXVhbFRvKHN1YnN0aXR1dGlvbikge1xuICAgIGxldCBlcXVhbFRvID0gZmFsc2U7XG5cbiAgICBjb25zdCB0ZXJtID0gc3Vic3RpdHV0aW9uLmdldFRlcm0oKSxcbiAgICAgICAgICB2YXJpYWJsZSA9IHN1YnN0aXR1dGlvbi5nZXRWYXJpYWJsZSgpO1xuXG4gICAgaWYgKCh0ZXJtICE9PSBudWxsKSAmJiAodmFyaWFibGUgIT09IG51bGwpKSB7XG4gICAgICBjb25zdCB0ZXJtTm9kZSA9IHRlcm0uZ2V0Tm9kZSgpLFxuICAgICAgICAgICAgdmFyaWFibGVOb2RlID0gdmFyaWFibGUuZ2V0Tm9kZSgpLFxuICAgICAgICAgICAgdGVybU5vZGVNYXRjaGVzID0gdGhpcy5tYXRjaFRlcm1Ob2RlKHRlcm1Ob2RlKSxcbiAgICAgICAgICAgIHZhcmlhYmxlTm9kZU1hdGNoZXMgPSB0aGlzLm1hdGNoVmFyaWFibGVOb2RlKHZhcmlhYmxlTm9kZSk7XG5cbiAgICAgIGVxdWFsVG8gPSAodGVybU5vZGVNYXRjaGVzICYmIHZhcmlhYmxlTm9kZU1hdGNoZXMpO1xuICAgIH1cblxuICAgIHJldHVybiBlcXVhbFRvO1xuICB9XG5cbiAgbWF0Y2hUZXJtTm9kZSh0ZXJtTm9kZSkge1xuICAgIHRlcm1Ob2RlID0gc3RyaXBCcmFja2V0c0Zyb21UZXJtTm9kZSh0ZXJtTm9kZSk7IC8vL1xuXG4gICAgY29uc3QgdGVybU5vZGVNYXRjaGVzID0gdGhpcy50ZXJtLm1hdGNoVGVybU5vZGUodGVybU5vZGUpO1xuXG4gICAgcmV0dXJuIHRlcm1Ob2RlTWF0Y2hlcztcbiAgfVxuXG4gIG1hdGNoVmFyaWFibGVOYW1lKHZhcmlhYmxlTmFtZSkge1xuICAgIGxldCB2YXJpYWJsZU5hbWVNYXRjaGVzO1xuXG4gICAgY29uc3QgdmFyaWFibGVOYW1lQSA9IHZhcmlhYmxlTmFtZTsgLy8vXG5cbiAgICB2YXJpYWJsZU5hbWUgPSB0aGlzLnZhcmlhYmxlLmdldE5hbWUoKTtcblxuICAgIGNvbnN0IHZhcmlhYmxlTmFtZUIgPSB2YXJpYWJsZU5hbWU7IC8vL1xuXG4gICAgdmFyaWFibGVOYW1lTWF0Y2hlcyA9ICh2YXJpYWJsZU5hbWVBID09PSB2YXJpYWJsZU5hbWVCKTtcblxuICAgIHJldHVybiB2YXJpYWJsZU5hbWVNYXRjaGVzO1xuICB9XG5cbiAgdW5pZnlXaXRoRXF1aXZhbGVuY2UoZXF1aXZhbGVuY2UsIHN1YnN0aXR1dGlvbnMsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpIHtcbiAgICBsZXQgdW5pZmllZFdpdGhFcXVpdmFsZW5jZTtcblxuICAgIGNvbnN0IHRlcm1Ob2RlID0gdGhpcy50ZXJtLmdldE5vZGUoKSxcbiAgICAgICAgICBlcXVpdmFsZW5jZU1hdGNoZXNUZXJtTm9kZSA9IGVxdWl2YWxlbmNlLm1hdGNoVGVybU5vZGUodGVybU5vZGUpO1xuXG4gICAgaWYgKGVxdWl2YWxlbmNlTWF0Y2hlc1Rlcm1Ob2RlKSB7XG4gICAgICBjb25zdCB2YXJpYWJsZU5vZGUgPSB0aGlzLnZhcmlhYmxlLmdldE5vZGUoKSxcbiAgICAgICAgICAgIGVxdWl2YWxlbmNlTWF0Y2hlc1ZhcmlhYmxlTm9kZSA9IGVxdWl2YWxlbmNlLm1hdGNoVmFyaWFibGVOb2RlKHZhcmlhYmxlTm9kZSk7XG5cbiAgICAgIGlmIChlcXVpdmFsZW5jZU1hdGNoZXNWYXJpYWJsZU5vZGUpIHtcbiAgICAgICAgICB1bmlmaWVkV2l0aEVxdWl2YWxlbmNlID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB1bmlmaWVkV2l0aEVxdWl2YWxlbmNlO1xuICB9XG5cbiAgc3RhdGljIGZyb21TdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUsIGNvbnRleHQpIHtcbiAgICBsZXQgdGVybUZvclZhcmlhYmxlU3Vic3RpdHV0aW9uID0gbnVsbDtcblxuICAgIGNvbnN0IHN1YnN0aXR1dGlvbk5vZGUgPSBzdWJzdGl0dXRpb25Ob2RlUXVlcnkoc3RhdGVtZW50Tm9kZSk7XG5cbiAgICBpZiAoc3Vic3RpdHV0aW9uTm9kZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgdGVybU5vZGUgPSB0ZXJtTm9kZVF1ZXJ5KHN1YnN0aXR1dGlvbk5vZGUpLFxuICAgICAgICAgICAgdmFyaWFibGVOb2RlID0gdmFyaWFibGVOb2RlUXVlcnkoc3Vic3RpdHV0aW9uTm9kZSk7XG5cbiAgICAgIGlmICgodGVybU5vZGUgIT09IG51bGwpICYmICh2YXJpYWJsZU5vZGUgIT09IG51bGwpKSB7XG4gICAgICAgIGNvbnN0IHsgVGVybSwgVmFyaWFibGUgfSA9IHNoaW0sXG4gICAgICAgICAgICAgIHRlcm0gPSBUZXJtLmZyb21UZXJtTm9kZSh0ZXJtTm9kZSwgY29udGV4dCksXG4gICAgICAgICAgICAgIHZhcmlhYmxlID0gVmFyaWFibGUuZnJvbVZhcmlhYmxlTm9kZSh2YXJpYWJsZU5vZGUsIGNvbnRleHQpLFxuICAgICAgICAgICAgICBub2RlID0gc3Vic3RpdHV0aW9uTm9kZSwgIC8vL1xuICAgICAgICAgICAgICB0b2tlbnMgPSBjb250ZXh0Lm5vZGVBc1Rva2Vucyhub2RlKSxcbiAgICAgICAgICAgICAgc3RyaW5nID0gc3RyaW5nRnJvbVRlcm1BbmRWYXJpYWJsZSh0ZXJtLCB2YXJpYWJsZSk7XG5cbiAgICAgICAgdGVybUZvclZhcmlhYmxlU3Vic3RpdHV0aW9uID0gbmV3IFRlcm1Gb3JWYXJpYWJsZVN1YnN0aXR1dGlvbihzdHJpbmcsIG5vZGUsIHRva2VucywgdGVybSwgdmFyaWFibGUpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0ZXJtRm9yVmFyaWFibGVTdWJzdGl0dXRpb247XG4gIH1cblxuICBzdGF0aWMgZnJvbVRlcm5BbmRWYXJpYWJsZSh0ZXJtLCB2YXJpYWJsZSwgY29udGV4dCkge1xuICAgIGxldCB0ZXJtTm9kZSA9IHRlcm0uZ2V0Tm9kZSgpO1xuXG4gICAgdGVybU5vZGUgPSBzdHJpcEJyYWNrZXRzRnJvbVRlcm1Ob2RlKHRlcm1Ob2RlKTsgLy8vXG5cbiAgICBjb25zdCB7IFRlcm0gfSA9IHNoaW07XG5cbiAgICB0ZXJtID0gVGVybS5mcm9tVGVybU5vZGUodGVybU5vZGUsIGNvbnRleHQpO1xuXG4gICAgY29uc3QgbGV4ZXIgPSBjb250ZXh0LmdldExleGVyKCksXG4gICAgICAgICAgcGFyc2VyID0gY29udGV4dC5nZXRQYXJzZXIoKSxcbiAgICAgICAgICBzdHJpbmcgPSBzdHJpbmdGcm9tVGVybUFuZFZhcmlhYmxlKHRlcm0sIHZhcmlhYmxlKSxcbiAgICAgICAgICBzdWJzdGl0dXRpb25TdHJpbmcgPSBzdHJpbmcsICAvLy9cbiAgICAgICAgICB1bnF1YWxpZmllZFN0YXRlbWVudFN0cmluZyA9IHVucXVhbGlmaWVkU3RhdGVtZW50U3RyaW5nRnJvbVN1YnN0aXR1dGlvblN0cmluZyhzdWJzdGl0dXRpb25TdHJpbmcpLFxuICAgICAgICAgIHVucXVhbGlmaWVkU3RhdGVtZW50VG9rZW5zID0gdW5xdWFsaWZpZWRTdGF0ZW1lbnRUb2tlbnNGcm9tVW5xdWFsaWZpZWRTdGF0ZW1lbnRTdHJpbmcodW5xdWFsaWZpZWRTdGF0ZW1lbnRTdHJpbmcsIGxleGVyKSxcbiAgICAgICAgICB1bnF1YWxpZmllZFN0YXRlbWVudE5vZGUgPSB1bnF1YWxpZmllZFN0YXRlbWVudE5vZGVGcm9tVW5xdWFsaWZpZWRTdGF0ZW1lbnRUb2tlbnModW5xdWFsaWZpZWRTdGF0ZW1lbnRUb2tlbnMsIHBhcnNlciksXG4gICAgICAgICAgc3Vic3RpdHV0aW9uTm9kZSA9IHN1YnN0aXR1dGlvbk5vZGVGcm9tVW5xdWFsaWZpZWRTdGF0ZW1lbnROb2RlKHVucXVhbGlmaWVkU3RhdGVtZW50Tm9kZSksXG4gICAgICAgICAgc3Vic3RpdHV0aW9uVG9rZW5zID0gc3Vic3RpdHV0aW9uVG9rZW5zRnJvbVVucXVhbGlmaWVkU3RhdGVtZW50VG9rZW5zQW5kU3Vic3RpdHV0aW9uTm9kZSh1bnF1YWxpZmllZFN0YXRlbWVudFRva2Vucywgc3Vic3RpdHV0aW9uTm9kZSksXG4gICAgICAgICAgbm9kZSA9IHN1YnN0aXR1dGlvbk5vZGUsICAvL1xuICAgICAgICAgIHRva2VucyA9IHN1YnN0aXR1dGlvblRva2VucywgIC8vL1xuICAgICAgICAgIHRlcm1Gb3JWYXJpYWJsZVN1YnN0aXR1dGlvbiA9IG5ldyBUZXJtRm9yVmFyaWFibGVTdWJzdGl0dXRpb24oc3RyaW5nLCBub2RlLCB0b2tlbnMsIHRlcm0sIHZhcmlhYmxlKTtcblxuICAgIHJldHVybiB0ZXJtRm9yVmFyaWFibGVTdWJzdGl0dXRpb247XG4gIH1cbn1cblxuZnVuY3Rpb24gc3RyaW5nRnJvbVRlcm1BbmRWYXJpYWJsZSh0ZXJtLCB2YXJpYWJsZSkge1xuICBjb25zdCB0ZXJtU3RyaW5nID0gdGVybS5nZXRTdHJpbmcoKSxcbiAgICAgICAgdmFyaWFibGVTdHJpbmcgPSB2YXJpYWJsZS5nZXRTdHJpbmcoKSxcbiAgICAgICAgc3RyaW5nID0gYFske3Rlcm1TdHJpbmd9IGZvciAke3ZhcmlhYmxlU3RyaW5nfV1gO1xuXG4gIHJldHVybiBzdHJpbmc7XG59XG4iXSwibmFtZXMiOlsiVGVybUZvclZhcmlhYmxlU3Vic3RpdHV0aW9uIiwidGVybU5vZGVRdWVyeSIsIm5vZGVRdWVyeSIsInZhcmlhYmxlTm9kZVF1ZXJ5Iiwic3Vic3RpdHV0aW9uTm9kZVF1ZXJ5Iiwic3RyaW5nIiwibm9kZSIsInRva2VucyIsInRlcm0iLCJ2YXJpYWJsZSIsImdldFRlcm0iLCJnZXRWYXJpYWJsZSIsImlzRXF1YWxUbyIsInN1YnN0aXR1dGlvbiIsImVxdWFsVG8iLCJ0ZXJtTm9kZSIsImdldE5vZGUiLCJ2YXJpYWJsZU5vZGUiLCJ0ZXJtTm9kZU1hdGNoZXMiLCJtYXRjaFRlcm1Ob2RlIiwidmFyaWFibGVOb2RlTWF0Y2hlcyIsIm1hdGNoVmFyaWFibGVOb2RlIiwic3RyaXBCcmFja2V0c0Zyb21UZXJtTm9kZSIsIm1hdGNoVmFyaWFibGVOYW1lIiwidmFyaWFibGVOYW1lIiwidmFyaWFibGVOYW1lTWF0Y2hlcyIsInZhcmlhYmxlTmFtZUEiLCJnZXROYW1lIiwidmFyaWFibGVOYW1lQiIsInVuaWZ5V2l0aEVxdWl2YWxlbmNlIiwiZXF1aXZhbGVuY2UiLCJzdWJzdGl0dXRpb25zIiwiZ2VuZXJhbENvbnRleHQiLCJzcGVjaWZpY0NvbnRleHQiLCJ1bmlmaWVkV2l0aEVxdWl2YWxlbmNlIiwiZXF1aXZhbGVuY2VNYXRjaGVzVGVybU5vZGUiLCJlcXVpdmFsZW5jZU1hdGNoZXNWYXJpYWJsZU5vZGUiLCJmcm9tU3RhdGVtZW50Tm9kZSIsInN0YXRlbWVudE5vZGUiLCJjb250ZXh0IiwidGVybUZvclZhcmlhYmxlU3Vic3RpdHV0aW9uIiwic3Vic3RpdHV0aW9uTm9kZSIsIlRlcm0iLCJzaGltIiwiVmFyaWFibGUiLCJmcm9tVGVybU5vZGUiLCJmcm9tVmFyaWFibGVOb2RlIiwibm9kZUFzVG9rZW5zIiwic3RyaW5nRnJvbVRlcm1BbmRWYXJpYWJsZSIsImZyb21UZXJuQW5kVmFyaWFibGUiLCJsZXhlciIsImdldExleGVyIiwicGFyc2VyIiwiZ2V0UGFyc2VyIiwic3Vic3RpdHV0aW9uU3RyaW5nIiwidW5xdWFsaWZpZWRTdGF0ZW1lbnRTdHJpbmciLCJ1bnF1YWxpZmllZFN0YXRlbWVudFN0cmluZ0Zyb21TdWJzdGl0dXRpb25TdHJpbmciLCJ1bnF1YWxpZmllZFN0YXRlbWVudFRva2VucyIsInVucXVhbGlmaWVkU3RhdGVtZW50VG9rZW5zRnJvbVVucXVhbGlmaWVkU3RhdGVtZW50U3RyaW5nIiwidW5xdWFsaWZpZWRTdGF0ZW1lbnROb2RlIiwidW5xdWFsaWZpZWRTdGF0ZW1lbnROb2RlRnJvbVVucXVhbGlmaWVkU3RhdGVtZW50VG9rZW5zIiwic3Vic3RpdHV0aW9uTm9kZUZyb21VbnF1YWxpZmllZFN0YXRlbWVudE5vZGUiLCJzdWJzdGl0dXRpb25Ub2tlbnMiLCJzdWJzdGl0dXRpb25Ub2tlbnNGcm9tVW5xdWFsaWZpZWRTdGF0ZW1lbnRUb2tlbnNBbmRTdWJzdGl0dXRpb25Ob2RlIiwiU3Vic3RpdHV0aW9uIiwidGVybVN0cmluZyIsImdldFN0cmluZyIsInZhcmlhYmxlU3RyaW5nIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQWlCcUJBOzs7MkRBZko7bUVBQ1E7cUJBRUM7d0JBQ2dCO29CQUc2QjtzQkFFYTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVwRixJQUFNQyxnQkFBZ0JDLElBQUFBLGdCQUFTLEVBQUMsMEJBQzFCQyxvQkFBb0JELElBQUFBLGdCQUFTLEVBQUMsb0NBQzlCRSx3QkFBd0JGLElBQUFBLGdCQUFTLEVBQUM7QUFFekIsSUFBQSxBQUFNRiw0Q0FBTjtjQUFNQTthQUFBQSw0QkFDUEssTUFBTSxFQUFFQyxJQUFJLEVBQUVDLE1BQU0sRUFBRUMsSUFBSSxFQUFFQyxRQUFRO2dDQUQ3QlQ7O2dCQUVqQixrQkFGaUJBO1lBRVhLO1lBQVFDO1lBQU1DOztRQUVwQixNQUFLQyxJQUFJLEdBQUdBO1FBQ1osTUFBS0MsUUFBUSxHQUFHQTs7O2tCQUxDVDs7WUFRbkJVLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0YsSUFBSTtZQUNsQjs7O1lBRUFHLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0YsUUFBUTtZQUN0Qjs7O1lBRUFHLEtB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