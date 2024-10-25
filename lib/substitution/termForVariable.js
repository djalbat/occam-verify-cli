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
    function TermForVariableSubstitution(string, term, variable, substitutionNode, substitutionTokens) {
        _class_call_check(this, TermForVariableSubstitution);
        var _this;
        _this = _call_super(this, TermForVariableSubstitution, [
            string
        ]);
        _this.term = term;
        _this.variable = variable;
        _this.substitutionNode = substitutionNode;
        _this.substitutionTokens = substitutionTokens;
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
            key: "getSubstitutionNode",
            value: function getSubstitutionNode() {
                return this.substitutionNode;
            }
        },
        {
            key: "getSubstitutionTokens",
            value: function getSubstitutionTokens() {
                return this.substitutionTokens;
            }
        },
        {
            key: "getSubstitutionString",
            value: function getSubstitutionString() {
                var termString = this.term.getString(), variableString = this.variable.getString(), substitutionString = "[".concat(termString, " for ").concat(variableString, "]");
                return substitutionString;
            }
        },
        {
            key: "setSubstitutionNodeAndTokens",
            value: function setSubstitutionNodeAndTokens(context) {
                var lexer = context.getLexer(), parser = context.getParser(), substitutionString = this.getSubstitutionString(), unqualifiedStatementString = (0, _node.unqualifiedStatementStringFromSubstitutionString)(substitutionString), unqualifiedStatementTokens = (0, _tokens.unqualifiedStatementTokensFromUnqualifiedStatementString)(unqualifiedStatementString, lexer), unqualifiedStatementNode = (0, _node.unqualifiedStatementNodeFromUnqualifiedStatementTokens)(unqualifiedStatementTokens, parser);
                this.substitutionNode = (0, _node.substitutionNodeFromUnqualifiedStatementNode)(unqualifiedStatementNode);
                this.substitutionTokens = (0, _tokens.substitutionTokensFromUnqualifiedStatementTokensAndSubstitutionNode)(unqualifiedStatementTokens, this.substitutionNode);
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
                        var Term = _shim.default.Term, Variable = _shim.default.Variable, term = Term.fromTermNode(termNode, context), variable = Variable.fromVariableNode(variableNode, context), string = stringFromTermAndVariable(term, variable, context), substitutionTokens = context.nodeAsTokens(substitutionNode);
                        termForVariableSubstitution = new TermForVariableSubstitution(string, term, variable, substitutionNode, substitutionTokens);
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
                var string = stringFromTermAndVariable(term, variable, context), substitutionNode = null, substitutionTokens = null, termForVariableSubstitution = new TermForVariableSubstitution(string, term, variable, substitutionNode, substitutionTokens);
                return termForVariableSubstitution;
            }
        }
    ]);
    return TermForVariableSubstitution;
}(_substitution.default);
function stringFromTermAndVariable(term, variable, context) {
    var termNode = term.getNode(), termString = context.nodeAsString(termNode), variableString = variable.getString(), string = "[".concat(termString, " for ").concat(variableString, "]");
    return string;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zdWJzdGl0dXRpb24vdGVybUZvclZhcmlhYmxlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgc2hpbSBmcm9tIFwiLi4vc2hpbVwiO1xuaW1wb3J0IFN1YnN0aXR1dGlvbiBmcm9tIFwiLi4vc3Vic3RpdHV0aW9uXCI7XG5cbmltcG9ydCB7IG5vZGVRdWVyeSB9IGZyb20gXCIuLi91dGlsaXRpZXMvcXVlcnlcIjtcbmltcG9ydCB7IHN0cmlwQnJhY2tldHNGcm9tVGVybU5vZGUgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2JyYWNrZXRzXCI7XG5pbXBvcnQgeyBzdWJzdGl0dXRpb25Ob2RlRnJvbVVucXVhbGlmaWVkU3RhdGVtZW50Tm9kZSxcbiAgICAgICAgIHVucXVhbGlmaWVkU3RhdGVtZW50U3RyaW5nRnJvbVN1YnN0aXR1dGlvblN0cmluZyxcbiAgICAgICAgIHVucXVhbGlmaWVkU3RhdGVtZW50Tm9kZUZyb21VbnF1YWxpZmllZFN0YXRlbWVudFRva2VucyB9IGZyb20gXCIuLi91dGlsaXRpZXMvbm9kZVwiO1xuaW1wb3J0IHsgdW5xdWFsaWZpZWRTdGF0ZW1lbnRUb2tlbnNGcm9tVW5xdWFsaWZpZWRTdGF0ZW1lbnRTdHJpbmcsXG4gICAgICAgICBzdWJzdGl0dXRpb25Ub2tlbnNGcm9tVW5xdWFsaWZpZWRTdGF0ZW1lbnRUb2tlbnNBbmRTdWJzdGl0dXRpb25Ob2RlIH0gZnJvbSBcIi4uL3V0aWxpdGllcy90b2tlbnNcIjtcblxuY29uc3QgdGVybU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9zdWJzdGl0dXRpb24vdGVybVswXVwiKSxcbiAgICAgIHZhcmlhYmxlTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3N1YnN0aXR1dGlvbi90ZXJtWzFdL3ZhcmlhYmxlIVwiKSxcbiAgICAgIHN1YnN0aXR1dGlvbk5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9zdGF0ZW1lbnQvc3Vic3RpdHV0aW9uXCIpO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUZXJtRm9yVmFyaWFibGVTdWJzdGl0dXRpb24gZXh0ZW5kcyBTdWJzdGl0dXRpb24ge1xuICBjb25zdHJ1Y3RvcihzdHJpbmcsIHRlcm0sIHZhcmlhYmxlLCBzdWJzdGl0dXRpb25Ob2RlLCBzdWJzdGl0dXRpb25Ub2tlbnMpIHtcbiAgICBzdXBlcihzdHJpbmcpO1xuXG4gICAgdGhpcy50ZXJtID0gdGVybTtcbiAgICB0aGlzLnZhcmlhYmxlID0gdmFyaWFibGU7XG4gICAgdGhpcy5zdWJzdGl0dXRpb25Ob2RlID0gc3Vic3RpdHV0aW9uTm9kZTtcbiAgICB0aGlzLnN1YnN0aXR1dGlvblRva2VucyA9IHN1YnN0aXR1dGlvblRva2VucztcbiAgfVxuXG4gIGdldFRlcm0oKSB7XG4gICAgcmV0dXJuIHRoaXMudGVybTtcbiAgfVxuXG4gIGdldFZhcmlhYmxlKCkge1xuICAgIHJldHVybiB0aGlzLnZhcmlhYmxlO1xuICB9XG5cbiAgZ2V0U3Vic3RpdHV0aW9uTm9kZSgpIHtcbiAgICByZXR1cm4gdGhpcy5zdWJzdGl0dXRpb25Ob2RlO1xuICB9XG5cbiAgZ2V0U3Vic3RpdHV0aW9uVG9rZW5zKCkge1xuICAgIHJldHVybiB0aGlzLnN1YnN0aXR1dGlvblRva2VucztcbiAgfVxuXG4gIGdldFN1YnN0aXR1dGlvblN0cmluZygpIHtcbiAgICBjb25zdCB0ZXJtU3RyaW5nID0gdGhpcy50ZXJtLmdldFN0cmluZygpLFxuICAgICAgICAgIHZhcmlhYmxlU3RyaW5nID0gdGhpcy52YXJpYWJsZS5nZXRTdHJpbmcoKSxcbiAgICAgICAgICBzdWJzdGl0dXRpb25TdHJpbmcgPSBgWyR7dGVybVN0cmluZ30gZm9yICR7dmFyaWFibGVTdHJpbmd9XWA7XG5cbiAgICByZXR1cm4gc3Vic3RpdHV0aW9uU3RyaW5nO1xuICB9XG5cbiAgc2V0U3Vic3RpdHV0aW9uTm9kZUFuZFRva2Vucyhjb250ZXh0KSB7XG4gICAgY29uc3QgbGV4ZXIgPSBjb250ZXh0LmdldExleGVyKCksXG4gICAgICAgICAgcGFyc2VyID0gY29udGV4dC5nZXRQYXJzZXIoKSxcbiAgICAgICAgICBzdWJzdGl0dXRpb25TdHJpbmcgPSB0aGlzLmdldFN1YnN0aXR1dGlvblN0cmluZygpLFxuICAgICAgICAgIHVucXVhbGlmaWVkU3RhdGVtZW50U3RyaW5nID0gdW5xdWFsaWZpZWRTdGF0ZW1lbnRTdHJpbmdGcm9tU3Vic3RpdHV0aW9uU3RyaW5nKHN1YnN0aXR1dGlvblN0cmluZyksXG4gICAgICAgICAgdW5xdWFsaWZpZWRTdGF0ZW1lbnRUb2tlbnMgPSB1bnF1YWxpZmllZFN0YXRlbWVudFRva2Vuc0Zyb21VbnF1YWxpZmllZFN0YXRlbWVudFN0cmluZyh1bnF1YWxpZmllZFN0YXRlbWVudFN0cmluZywgbGV4ZXIpLFxuICAgICAgICAgIHVucXVhbGlmaWVkU3RhdGVtZW50Tm9kZSA9IHVucXVhbGlmaWVkU3RhdGVtZW50Tm9kZUZyb21VbnF1YWxpZmllZFN0YXRlbWVudFRva2Vucyh1bnF1YWxpZmllZFN0YXRlbWVudFRva2VucywgcGFyc2VyKTtcblxuICAgIHRoaXMuc3Vic3RpdHV0aW9uTm9kZSA9IHN1YnN0aXR1dGlvbk5vZGVGcm9tVW5xdWFsaWZpZWRTdGF0ZW1lbnROb2RlKHVucXVhbGlmaWVkU3RhdGVtZW50Tm9kZSk7XG5cbiAgICB0aGlzLnN1YnN0aXR1dGlvblRva2VucyA9IHN1YnN0aXR1dGlvblRva2Vuc0Zyb21VbnF1YWxpZmllZFN0YXRlbWVudFRva2Vuc0FuZFN1YnN0aXR1dGlvbk5vZGUodW5xdWFsaWZpZWRTdGF0ZW1lbnRUb2tlbnMsIHRoaXMuc3Vic3RpdHV0aW9uTm9kZSk7XG4gIH1cblxuICBpc0VxdWFsVG8oc3Vic3RpdHV0aW9uKSB7XG4gICAgbGV0IGVxdWFsVG8gPSBmYWxzZTtcblxuICAgIGNvbnN0IHRlcm0gPSBzdWJzdGl0dXRpb24uZ2V0VGVybSgpLFxuICAgICAgICAgIHZhcmlhYmxlID0gc3Vic3RpdHV0aW9uLmdldFZhcmlhYmxlKCk7XG5cbiAgICBpZiAoKHRlcm0gIT09IG51bGwpICYmICh2YXJpYWJsZSAhPT0gbnVsbCkpIHtcbiAgICAgIGNvbnN0IHRlcm1Ob2RlID0gdGVybS5nZXROb2RlKCksXG4gICAgICAgICAgICB2YXJpYWJsZU5vZGUgPSB2YXJpYWJsZS5nZXROb2RlKCksXG4gICAgICAgICAgICB0ZXJtTm9kZU1hdGNoZXMgPSB0aGlzLm1hdGNoVGVybU5vZGUodGVybU5vZGUpLFxuICAgICAgICAgICAgdmFyaWFibGVOb2RlTWF0Y2hlcyA9IHRoaXMubWF0Y2hWYXJpYWJsZU5vZGUodmFyaWFibGVOb2RlKTtcblxuICAgICAgZXF1YWxUbyA9ICh0ZXJtTm9kZU1hdGNoZXMgJiYgdmFyaWFibGVOb2RlTWF0Y2hlcyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGVxdWFsVG87XG4gIH1cblxuICBtYXRjaFRlcm1Ob2RlKHRlcm1Ob2RlKSB7XG4gICAgdGVybU5vZGUgPSBzdHJpcEJyYWNrZXRzRnJvbVRlcm1Ob2RlKHRlcm1Ob2RlKTsgLy8vXG5cbiAgICBjb25zdCB0ZXJtTm9kZU1hdGNoZXMgPSB0aGlzLnRlcm0ubWF0Y2hUZXJtTm9kZSh0ZXJtTm9kZSk7XG5cbiAgICByZXR1cm4gdGVybU5vZGVNYXRjaGVzO1xuICB9XG5cbiAgbWF0Y2hWYXJpYWJsZU5hbWUodmFyaWFibGVOYW1lKSB7XG4gICAgbGV0IHZhcmlhYmxlTmFtZU1hdGNoZXM7XG5cbiAgICBjb25zdCB2YXJpYWJsZU5hbWVBID0gdmFyaWFibGVOYW1lOyAvLy9cblxuICAgIHZhcmlhYmxlTmFtZSA9IHRoaXMudmFyaWFibGUuZ2V0TmFtZSgpO1xuXG4gICAgY29uc3QgdmFyaWFibGVOYW1lQiA9IHZhcmlhYmxlTmFtZTsgLy8vXG5cbiAgICB2YXJpYWJsZU5hbWVNYXRjaGVzID0gKHZhcmlhYmxlTmFtZUEgPT09IHZhcmlhYmxlTmFtZUIpO1xuXG4gICAgcmV0dXJuIHZhcmlhYmxlTmFtZU1hdGNoZXM7XG4gIH1cblxuICBtYXRjaFN1YnN0aXR1dGlvbk5vZGUoc3Vic3RpdHV0aW9uTm9kZSkge1xuICAgIGxldCBzdWJzdGl0dXRpb25Ob2RlTWF0Y2hlcztcblxuICAgIGlmICgoc3Vic3RpdHV0aW9uTm9kZSA9PT0gbnVsbCkgJiYgKHRoaXMuc3Vic3RpdHV0aW9uTm9kZSA9PT0gbnVsbCkpIHtcbiAgICAgIHN1YnN0aXR1dGlvbk5vZGVNYXRjaGVzID0gdHJ1ZTtcbiAgICB9IGVsc2UgaWYgKChzdWJzdGl0dXRpb25Ob2RlID09PSBudWxsKSAmJiAodGhpcy5zdWJzdGl0dXRpb25Ob2RlICE9PSBudWxsKSkge1xuICAgICAgc3Vic3RpdHV0aW9uTm9kZU1hdGNoZXMgPSBmYWxzZTtcbiAgICB9IGVsc2UgaWYgKChzdWJzdGl0dXRpb25Ob2RlICE9PSBudWxsKSAmJiAodGhpcy5zdWJzdGl0dXRpb25Ob2RlID09PSBudWxsKSkge1xuICAgICAgc3Vic3RpdHV0aW9uTm9kZU1hdGNoZXMgPSBmYWxzZTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3Vic3RpdHV0aW9uTm9kZU1hdGNoZXMgPSB0aGlzLnN1YnN0aXR1dGlvbk5vZGUubWF0Y2goc3Vic3RpdHV0aW9uTm9kZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN1YnN0aXR1dGlvbk5vZGVNYXRjaGVzO1xuICB9XG5cbiAgdW5pZnlXaXRoRXF1aXZhbGVuY2UoZXF1aXZhbGVuY2UsIHN1YnN0aXR1dGlvbnMsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpIHtcbiAgICBsZXQgdW5pZmllZFdpdGhFcXVpdmFsZW5jZTtcblxuICAgIGNvbnN0IHRlcm1Ob2RlID0gdGhpcy50ZXJtLmdldE5vZGUoKSxcbiAgICAgICAgICBlcXVpdmFsZW5jZU1hdGNoZXNUZXJtTm9kZSA9IGVxdWl2YWxlbmNlLm1hdGNoVGVybU5vZGUodGVybU5vZGUpO1xuXG4gICAgaWYgKGVxdWl2YWxlbmNlTWF0Y2hlc1Rlcm1Ob2RlKSB7XG4gICAgICBjb25zdCB2YXJpYWJsZU5vZGUgPSB0aGlzLnZhcmlhYmxlLmdldE5vZGUoKSxcbiAgICAgICAgICAgIGVxdWl2YWxlbmNlTWF0Y2hlc1ZhcmlhYmxlTm9kZSA9IGVxdWl2YWxlbmNlLm1hdGNoVmFyaWFibGVOb2RlKHZhcmlhYmxlTm9kZSk7XG5cbiAgICAgIGlmIChlcXVpdmFsZW5jZU1hdGNoZXNWYXJpYWJsZU5vZGUpIHtcbiAgICAgICAgICB1bmlmaWVkV2l0aEVxdWl2YWxlbmNlID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB1bmlmaWVkV2l0aEVxdWl2YWxlbmNlO1xuICB9XG5cbiAgc3RhdGljIGZyb21TdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUsIGNvbnRleHQpIHtcbiAgICBsZXQgdGVybUZvclZhcmlhYmxlU3Vic3RpdHV0aW9uID0gbnVsbDtcblxuICAgIGNvbnN0IHN1YnN0aXR1dGlvbk5vZGUgPSBzdWJzdGl0dXRpb25Ob2RlUXVlcnkoc3RhdGVtZW50Tm9kZSk7XG5cbiAgICBpZiAoc3Vic3RpdHV0aW9uTm9kZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgdGVybU5vZGUgPSB0ZXJtTm9kZVF1ZXJ5KHN1YnN0aXR1dGlvbk5vZGUpLFxuICAgICAgICAgICAgdmFyaWFibGVOb2RlID0gdmFyaWFibGVOb2RlUXVlcnkoc3Vic3RpdHV0aW9uTm9kZSk7XG5cbiAgICAgIGlmICgodGVybU5vZGUgIT09IG51bGwpICYmICh2YXJpYWJsZU5vZGUgIT09IG51bGwpKSB7XG4gICAgICAgIGNvbnN0IHsgVGVybSwgVmFyaWFibGUgfSA9IHNoaW0sXG4gICAgICAgICAgICAgIHRlcm0gPSBUZXJtLmZyb21UZXJtTm9kZSh0ZXJtTm9kZSwgY29udGV4dCksXG4gICAgICAgICAgICAgIHZhcmlhYmxlID0gVmFyaWFibGUuZnJvbVZhcmlhYmxlTm9kZSh2YXJpYWJsZU5vZGUsIGNvbnRleHQpLFxuICAgICAgICAgICAgICBzdHJpbmcgPSBzdHJpbmdGcm9tVGVybUFuZFZhcmlhYmxlKHRlcm0sIHZhcmlhYmxlLCBjb250ZXh0KSxcbiAgICAgICAgICAgICAgc3Vic3RpdHV0aW9uVG9rZW5zID0gY29udGV4dC5ub2RlQXNUb2tlbnMoc3Vic3RpdHV0aW9uTm9kZSk7XG5cbiAgICAgICAgdGVybUZvclZhcmlhYmxlU3Vic3RpdHV0aW9uID0gbmV3IFRlcm1Gb3JWYXJpYWJsZVN1YnN0aXR1dGlvbihzdHJpbmcsIHRlcm0sIHZhcmlhYmxlLCBzdWJzdGl0dXRpb25Ob2RlLCBzdWJzdGl0dXRpb25Ub2tlbnMpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0ZXJtRm9yVmFyaWFibGVTdWJzdGl0dXRpb247XG4gIH1cblxuICBzdGF0aWMgZnJvbVRlcm5BbmRWYXJpYWJsZSh0ZXJtLCB2YXJpYWJsZSwgY29udGV4dCkge1xuICAgIGxldCB0ZXJtTm9kZSA9IHRlcm0uZ2V0Tm9kZSgpO1xuXG4gICAgdGVybU5vZGUgPSBzdHJpcEJyYWNrZXRzRnJvbVRlcm1Ob2RlKHRlcm1Ob2RlKTsgLy8vXG5cbiAgICBjb25zdCB7IFRlcm0gfSA9IHNoaW07XG5cbiAgICB0ZXJtID0gVGVybS5mcm9tVGVybU5vZGUodGVybU5vZGUsIGNvbnRleHQpO1xuXG4gICAgY29uc3Qgc3RyaW5nID0gc3RyaW5nRnJvbVRlcm1BbmRWYXJpYWJsZSh0ZXJtLCB2YXJpYWJsZSwgY29udGV4dCksXG4gICAgICAgICAgc3Vic3RpdHV0aW9uTm9kZSA9IG51bGwsXG4gICAgICAgICAgc3Vic3RpdHV0aW9uVG9rZW5zID0gbnVsbCxcbiAgICAgICAgICB0ZXJtRm9yVmFyaWFibGVTdWJzdGl0dXRpb24gPSBuZXcgVGVybUZvclZhcmlhYmxlU3Vic3RpdHV0aW9uKHN0cmluZywgdGVybSwgdmFyaWFibGUsIHN1YnN0aXR1dGlvbk5vZGUsIHN1YnN0aXR1dGlvblRva2Vucyk7XG5cbiAgICByZXR1cm4gdGVybUZvclZhcmlhYmxlU3Vic3RpdHV0aW9uO1xuICB9XG59XG5cbmZ1bmN0aW9uIHN0cmluZ0Zyb21UZXJtQW5kVmFyaWFibGUodGVybSwgdmFyaWFibGUsIGNvbnRleHQpIHtcbiAgY29uc3QgdGVybU5vZGUgPSB0ZXJtLmdldE5vZGUoKSxcbiAgICAgICAgdGVybVN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKHRlcm1Ob2RlKSxcbiAgICAgICAgdmFyaWFibGVTdHJpbmcgPSB2YXJpYWJsZS5nZXRTdHJpbmcoKSxcbiAgICAgICAgc3RyaW5nID0gYFske3Rlcm1TdHJpbmd9IGZvciAke3ZhcmlhYmxlU3RyaW5nfV1gO1xuXG4gIHJldHVybiBzdHJpbmc7XG59XG4iXSwibmFtZXMiOlsiVGVybUZvclZhcmlhYmxlU3Vic3RpdHV0aW9uIiwidGVybU5vZGVRdWVyeSIsIm5vZGVRdWVyeSIsInZhcmlhYmxlTm9kZVF1ZXJ5Iiwic3Vic3RpdHV0aW9uTm9kZVF1ZXJ5Iiwic3RyaW5nIiwidGVybSIsInZhcmlhYmxlIiwic3Vic3RpdHV0aW9uTm9kZSIsInN1YnN0aXR1dGlvblRva2VucyIsImdldFRlcm0iLCJnZXRWYXJpYWJsZSIsImdldFN1YnN0aXR1dGlvbk5vZGUiLCJnZXRTdWJzdGl0dXRpb25Ub2tlbnMiLCJnZXRTdWJzdGl0dXRpb25TdHJpbmciLCJ0ZXJtU3RyaW5nIiwiZ2V0U3RyaW5nIiwidmFyaWFibGVTdHJpbmciLCJzdWJzdGl0dXRpb25TdHJpbmciLCJzZXRTdWJzdGl0dXRpb25Ob2RlQW5kVG9rZW5zIiwiY29udGV4dCIsImxleGVyIiwiZ2V0TGV4ZXIiLCJwYXJzZXIiLCJnZXRQYXJzZXIiLCJ1bnF1YWxpZmllZFN0YXRlbWVudFN0cmluZyIsInVucXVhbGlmaWVkU3RhdGVtZW50U3RyaW5nRnJvbVN1YnN0aXR1dGlvblN0cmluZyIsInVucXVhbGlmaWVkU3RhdGVtZW50VG9rZW5zIiwidW5xdWFsaWZpZWRTdGF0ZW1lbnRUb2tlbnNGcm9tVW5xdWFsaWZpZWRTdGF0ZW1lbnRTdHJpbmciLCJ1bnF1YWxpZmllZFN0YXRlbWVudE5vZGUiLCJ1bnF1YWxpZmllZFN0YXRlbWVudE5vZGVGcm9tVW5xdWFsaWZpZWRTdGF0ZW1lbnRUb2tlbnMiLCJzdWJzdGl0dXRpb25Ob2RlRnJvbVVucXVhbGlmaWVkU3RhdGVtZW50Tm9kZSIsInN1YnN0aXR1dGlvblRva2Vuc0Zyb21VbnF1YWxpZmllZFN0YXRlbWVudFRva2Vuc0FuZFN1YnN0aXR1dGlvbk5vZGUiLCJpc0VxdWFsVG8iLCJzdWJzdGl0dXRpb24iLCJlcXVhbFRvIiwidGVybU5vZGUiLCJnZXROb2RlIiwidmFyaWFibGVOb2RlIiwidGVybU5vZGVNYXRjaGVzIiwibWF0Y2hUZXJtTm9kZSIsInZhcmlhYmxlTm9kZU1hdGNoZXMiLCJtYXRjaFZhcmlhYmxlTm9kZSIsInN0cmlwQnJhY2tldHNGcm9tVGVybU5vZGUiLCJtYXRjaFZhcmlhYmxlTmFtZSIsInZhcmlhYmxlTmFtZSIsInZhcmlhYmxlTmFtZU1hdGNoZXMiLCJ2YXJpYWJsZU5hbWVBIiwiZ2V0TmFtZSIsInZhcmlhYmxlTmFtZUIiLCJtYXRjaFN1YnN0aXR1dGlvbk5vZGUiLCJzdWJzdGl0dXRpb25Ob2RlTWF0Y2hlcyIsIm1hdGNoIiwidW5pZnlXaXRoRXF1aXZhbGVuY2UiLCJlcXVpdmFsZW5jZSIsInN1YnN0aXR1dGlvbnMiLCJnZW5lcmFsQ29udGV4dCIsInNwZWNpZmljQ29udGV4dCIsInVuaWZpZWRXaXRoRXF1aXZhbGVuY2UiLCJlcXVpdmFsZW5jZU1hdGNoZXNUZXJtTm9kZSIsImVxdWl2YWxlbmNlTWF0Y2hlc1ZhcmlhYmxlTm9kZSIsImZyb21TdGF0ZW1lbnROb2RlIiwic3RhdGVtZW50Tm9kZSIsInRlcm1Gb3JWYXJpYWJsZVN1YnN0aXR1dGlvbiIsIlRlcm0iLCJzaGltIiwiVmFyaWFibGUiLCJmcm9tVGVybU5vZGUiLCJmcm9tVmFyaWFibGVOb2RlIiwic3RyaW5nRnJvbVRlcm1BbmRWYXJpYWJsZSIsIm5vZGVBc1Rva2VucyIsImZyb21UZXJuQW5kVmFyaWFibGUiLCJTdWJzdGl0dXRpb24iLCJub2RlQXNTdHJpbmciXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBaUJxQkE7OzsyREFmSjttRUFDUTtxQkFFQzt3QkFDZ0I7b0JB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