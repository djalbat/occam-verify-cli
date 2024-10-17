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
            value: function setSubstitutionNodeAndTokens(localContext) {
                var lexer = localContext.getLexer(), parser = localContext.getParser(), substitutionString = this.getSubstitutionString(), unqualifiedStatementString = (0, _node.unqualifiedStatementStringFromSubstitutionString)(substitutionString), unqualifiedStatementTokens = (0, _tokens.unqualifiedStatementTokensFromUnqualifiedStatementString)(unqualifiedStatementString, lexer), unqualifiedStatementNode = (0, _node.unqualifiedStatementNodeFromUnqualifiedStatementTokens)(unqualifiedStatementTokens, parser);
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
            value: function unifyWithEquivalence(equivalence, substitutions, localContextA, localContextB) {
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
            value: function fromStatementNode(statementNode, localContext) {
                var termForVariableSubstitution = null;
                var substitutionNode = substitutionNodeQuery(statementNode);
                if (substitutionNode !== null) {
                    var termNode = termNodeQuery(substitutionNode), variableNode = variableNodeQuery(substitutionNode);
                    if (termNode !== null && variableNode !== null) {
                        var Term = _shim.default.Term, Variable = _shim.default.Variable, term = Term.fromTermNode(termNode, localContext), variable = Variable.fromVariableNode(variableNode, localContext), string = stringFromTermAndVariable(term, variable, localContext), substitutionTokens = localContext.nodeAsTokens(substitutionNode);
                        termForVariableSubstitution = new TermForVariableSubstitution(string, term, variable, substitutionNode, substitutionTokens);
                    }
                }
                return termForVariableSubstitution;
            }
        },
        {
            key: "fromTernAndVariable",
            value: function fromTernAndVariable(term, variable, localContext) {
                var termNode = term.getNode();
                termNode = (0, _brackets.stripBracketsFromTermNode)(termNode); ///
                var Term = _shim.default.Term;
                term = Term.fromTermNode(termNode, localContext);
                var string = stringFromTermAndVariable(term, variable, localContext), substitutionNode = null, substitutionTokens = null, termForVariableSubstitution = new TermForVariableSubstitution(string, term, variable, substitutionNode, substitutionTokens);
                return termForVariableSubstitution;
            }
        }
    ]);
    return TermForVariableSubstitution;
}(_substitution.default);
function stringFromTermAndVariable(term, variable, localContext) {
    var termNode = term.getNode(), termString = localContext.nodeAsString(termNode), variableString = variable.getString(), string = "[".concat(termString, " for ").concat(variableString, "]");
    return string;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zdWJzdGl0dXRpb24vdGVybUZvclZhcmlhYmxlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgc2hpbSBmcm9tIFwiLi4vc2hpbVwiO1xuaW1wb3J0IFN1YnN0aXR1dGlvbiBmcm9tIFwiLi4vc3Vic3RpdHV0aW9uXCI7XG5cbmltcG9ydCB7IG5vZGVRdWVyeSB9IGZyb20gXCIuLi91dGlsaXRpZXMvcXVlcnlcIjtcbmltcG9ydCB7IHN0cmlwQnJhY2tldHNGcm9tVGVybU5vZGUgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2JyYWNrZXRzXCI7XG5pbXBvcnQgeyBzdWJzdGl0dXRpb25Ob2RlRnJvbVVucXVhbGlmaWVkU3RhdGVtZW50Tm9kZSxcbiAgICAgICAgIHVucXVhbGlmaWVkU3RhdGVtZW50U3RyaW5nRnJvbVN1YnN0aXR1dGlvblN0cmluZyxcbiAgICAgICAgIHVucXVhbGlmaWVkU3RhdGVtZW50Tm9kZUZyb21VbnF1YWxpZmllZFN0YXRlbWVudFRva2VucyB9IGZyb20gXCIuLi91dGlsaXRpZXMvbm9kZVwiO1xuaW1wb3J0IHsgdW5xdWFsaWZpZWRTdGF0ZW1lbnRUb2tlbnNGcm9tVW5xdWFsaWZpZWRTdGF0ZW1lbnRTdHJpbmcsXG4gICAgICAgICBzdWJzdGl0dXRpb25Ub2tlbnNGcm9tVW5xdWFsaWZpZWRTdGF0ZW1lbnRUb2tlbnNBbmRTdWJzdGl0dXRpb25Ob2RlIH0gZnJvbSBcIi4uL3V0aWxpdGllcy90b2tlbnNcIjtcblxuY29uc3QgdGVybU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9zdWJzdGl0dXRpb24vdGVybVswXVwiKSxcbiAgICAgIHZhcmlhYmxlTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3N1YnN0aXR1dGlvbi90ZXJtWzFdL3ZhcmlhYmxlIVwiKSxcbiAgICAgIHN1YnN0aXR1dGlvbk5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9zdGF0ZW1lbnQvc3Vic3RpdHV0aW9uXCIpO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUZXJtRm9yVmFyaWFibGVTdWJzdGl0dXRpb24gZXh0ZW5kcyBTdWJzdGl0dXRpb24ge1xuICBjb25zdHJ1Y3RvcihzdHJpbmcsIHRlcm0sIHZhcmlhYmxlLCBzdWJzdGl0dXRpb25Ob2RlLCBzdWJzdGl0dXRpb25Ub2tlbnMpIHtcbiAgICBzdXBlcihzdHJpbmcpO1xuXG4gICAgdGhpcy50ZXJtID0gdGVybTtcbiAgICB0aGlzLnZhcmlhYmxlID0gdmFyaWFibGU7XG4gICAgdGhpcy5zdWJzdGl0dXRpb25Ob2RlID0gc3Vic3RpdHV0aW9uTm9kZTtcbiAgICB0aGlzLnN1YnN0aXR1dGlvblRva2VucyA9IHN1YnN0aXR1dGlvblRva2VucztcbiAgfVxuXG4gIGdldFRlcm0oKSB7XG4gICAgcmV0dXJuIHRoaXMudGVybTtcbiAgfVxuXG4gIGdldFZhcmlhYmxlKCkge1xuICAgIHJldHVybiB0aGlzLnZhcmlhYmxlO1xuICB9XG5cbiAgZ2V0U3Vic3RpdHV0aW9uTm9kZSgpIHtcbiAgICByZXR1cm4gdGhpcy5zdWJzdGl0dXRpb25Ob2RlO1xuICB9XG5cbiAgZ2V0U3Vic3RpdHV0aW9uVG9rZW5zKCkge1xuICAgIHJldHVybiB0aGlzLnN1YnN0aXR1dGlvblRva2VucztcbiAgfVxuXG4gIGdldFN1YnN0aXR1dGlvblN0cmluZygpIHtcbiAgICBjb25zdCB0ZXJtU3RyaW5nID0gdGhpcy50ZXJtLmdldFN0cmluZygpLFxuICAgICAgICAgIHZhcmlhYmxlU3RyaW5nID0gdGhpcy52YXJpYWJsZS5nZXRTdHJpbmcoKSxcbiAgICAgICAgICBzdWJzdGl0dXRpb25TdHJpbmcgPSBgWyR7dGVybVN0cmluZ30gZm9yICR7dmFyaWFibGVTdHJpbmd9XWA7XG5cbiAgICByZXR1cm4gc3Vic3RpdHV0aW9uU3RyaW5nO1xuICB9XG5cbiAgc2V0U3Vic3RpdHV0aW9uTm9kZUFuZFRva2Vucyhsb2NhbENvbnRleHQpIHtcbiAgICBjb25zdCBsZXhlciA9IGxvY2FsQ29udGV4dC5nZXRMZXhlcigpLFxuICAgICAgICAgIHBhcnNlciA9IGxvY2FsQ29udGV4dC5nZXRQYXJzZXIoKSxcbiAgICAgICAgICBzdWJzdGl0dXRpb25TdHJpbmcgPSB0aGlzLmdldFN1YnN0aXR1dGlvblN0cmluZygpLFxuICAgICAgICAgIHVucXVhbGlmaWVkU3RhdGVtZW50U3RyaW5nID0gdW5xdWFsaWZpZWRTdGF0ZW1lbnRTdHJpbmdGcm9tU3Vic3RpdHV0aW9uU3RyaW5nKHN1YnN0aXR1dGlvblN0cmluZyksXG4gICAgICAgICAgdW5xdWFsaWZpZWRTdGF0ZW1lbnRUb2tlbnMgPSB1bnF1YWxpZmllZFN0YXRlbWVudFRva2Vuc0Zyb21VbnF1YWxpZmllZFN0YXRlbWVudFN0cmluZyh1bnF1YWxpZmllZFN0YXRlbWVudFN0cmluZywgbGV4ZXIpLFxuICAgICAgICAgIHVucXVhbGlmaWVkU3RhdGVtZW50Tm9kZSA9IHVucXVhbGlmaWVkU3RhdGVtZW50Tm9kZUZyb21VbnF1YWxpZmllZFN0YXRlbWVudFRva2Vucyh1bnF1YWxpZmllZFN0YXRlbWVudFRva2VucywgcGFyc2VyKTtcblxuICAgIHRoaXMuc3Vic3RpdHV0aW9uTm9kZSA9IHN1YnN0aXR1dGlvbk5vZGVGcm9tVW5xdWFsaWZpZWRTdGF0ZW1lbnROb2RlKHVucXVhbGlmaWVkU3RhdGVtZW50Tm9kZSk7XG5cbiAgICB0aGlzLnN1YnN0aXR1dGlvblRva2VucyA9IHN1YnN0aXR1dGlvblRva2Vuc0Zyb21VbnF1YWxpZmllZFN0YXRlbWVudFRva2Vuc0FuZFN1YnN0aXR1dGlvbk5vZGUodW5xdWFsaWZpZWRTdGF0ZW1lbnRUb2tlbnMsIHRoaXMuc3Vic3RpdHV0aW9uTm9kZSk7XG4gIH1cblxuICBpc0VxdWFsVG8oc3Vic3RpdHV0aW9uKSB7XG4gICAgbGV0IGVxdWFsVG8gPSBmYWxzZTtcblxuICAgIGNvbnN0IHRlcm0gPSBzdWJzdGl0dXRpb24uZ2V0VGVybSgpLFxuICAgICAgICAgIHZhcmlhYmxlID0gc3Vic3RpdHV0aW9uLmdldFZhcmlhYmxlKCk7XG5cbiAgICBpZiAoKHRlcm0gIT09IG51bGwpICYmICh2YXJpYWJsZSAhPT0gbnVsbCkpIHtcbiAgICAgIGNvbnN0IHRlcm1Ob2RlID0gdGVybS5nZXROb2RlKCksXG4gICAgICAgICAgICB2YXJpYWJsZU5vZGUgPSB2YXJpYWJsZS5nZXROb2RlKCksXG4gICAgICAgICAgICB0ZXJtTm9kZU1hdGNoZXMgPSB0aGlzLm1hdGNoVGVybU5vZGUodGVybU5vZGUpLFxuICAgICAgICAgICAgdmFyaWFibGVOb2RlTWF0Y2hlcyA9IHRoaXMubWF0Y2hWYXJpYWJsZU5vZGUodmFyaWFibGVOb2RlKTtcblxuICAgICAgZXF1YWxUbyA9ICh0ZXJtTm9kZU1hdGNoZXMgJiYgdmFyaWFibGVOb2RlTWF0Y2hlcyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGVxdWFsVG87XG4gIH1cblxuICBtYXRjaFRlcm1Ob2RlKHRlcm1Ob2RlKSB7XG4gICAgdGVybU5vZGUgPSBzdHJpcEJyYWNrZXRzRnJvbVRlcm1Ob2RlKHRlcm1Ob2RlKTsgLy8vXG5cbiAgICBjb25zdCB0ZXJtTm9kZU1hdGNoZXMgPSB0aGlzLnRlcm0ubWF0Y2hUZXJtTm9kZSh0ZXJtTm9kZSk7XG5cbiAgICByZXR1cm4gdGVybU5vZGVNYXRjaGVzO1xuICB9XG5cbiAgbWF0Y2hWYXJpYWJsZU5hbWUodmFyaWFibGVOYW1lKSB7XG4gICAgbGV0IHZhcmlhYmxlTmFtZU1hdGNoZXM7XG5cbiAgICBjb25zdCB2YXJpYWJsZU5hbWVBID0gdmFyaWFibGVOYW1lOyAvLy9cblxuICAgIHZhcmlhYmxlTmFtZSA9IHRoaXMudmFyaWFibGUuZ2V0TmFtZSgpO1xuXG4gICAgY29uc3QgdmFyaWFibGVOYW1lQiA9IHZhcmlhYmxlTmFtZTsgLy8vXG5cbiAgICB2YXJpYWJsZU5hbWVNYXRjaGVzID0gKHZhcmlhYmxlTmFtZUEgPT09IHZhcmlhYmxlTmFtZUIpO1xuXG4gICAgcmV0dXJuIHZhcmlhYmxlTmFtZU1hdGNoZXM7XG4gIH1cblxuICBtYXRjaFN1YnN0aXR1dGlvbk5vZGUoc3Vic3RpdHV0aW9uTm9kZSkge1xuICAgIGxldCBzdWJzdGl0dXRpb25Ob2RlTWF0Y2hlcztcblxuICAgIGlmICgoc3Vic3RpdHV0aW9uTm9kZSA9PT0gbnVsbCkgJiYgKHRoaXMuc3Vic3RpdHV0aW9uTm9kZSA9PT0gbnVsbCkpIHtcbiAgICAgIHN1YnN0aXR1dGlvbk5vZGVNYXRjaGVzID0gdHJ1ZTtcbiAgICB9IGVsc2UgaWYgKChzdWJzdGl0dXRpb25Ob2RlID09PSBudWxsKSAmJiAodGhpcy5zdWJzdGl0dXRpb25Ob2RlICE9PSBudWxsKSkge1xuICAgICAgc3Vic3RpdHV0aW9uTm9kZU1hdGNoZXMgPSBmYWxzZTtcbiAgICB9IGVsc2UgaWYgKChzdWJzdGl0dXRpb25Ob2RlICE9PSBudWxsKSAmJiAodGhpcy5zdWJzdGl0dXRpb25Ob2RlID09PSBudWxsKSkge1xuICAgICAgc3Vic3RpdHV0aW9uTm9kZU1hdGNoZXMgPSBmYWxzZTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3Vic3RpdHV0aW9uTm9kZU1hdGNoZXMgPSB0aGlzLnN1YnN0aXR1dGlvbk5vZGUubWF0Y2goc3Vic3RpdHV0aW9uTm9kZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN1YnN0aXR1dGlvbk5vZGVNYXRjaGVzO1xuICB9XG5cbiAgdW5pZnlXaXRoRXF1aXZhbGVuY2UoZXF1aXZhbGVuY2UsIHN1YnN0aXR1dGlvbnMsIGxvY2FsQ29udGV4dEEsIGxvY2FsQ29udGV4dEIpIHtcbiAgICBsZXQgdW5pZmllZFdpdGhFcXVpdmFsZW5jZTtcblxuICAgIGNvbnN0IHRlcm1Ob2RlID0gdGhpcy50ZXJtLmdldE5vZGUoKSxcbiAgICAgICAgICBlcXVpdmFsZW5jZU1hdGNoZXNUZXJtTm9kZSA9IGVxdWl2YWxlbmNlLm1hdGNoVGVybU5vZGUodGVybU5vZGUpO1xuXG4gICAgaWYgKGVxdWl2YWxlbmNlTWF0Y2hlc1Rlcm1Ob2RlKSB7XG4gICAgICBjb25zdCB2YXJpYWJsZU5vZGUgPSB0aGlzLnZhcmlhYmxlLmdldE5vZGUoKSxcbiAgICAgICAgICAgIGVxdWl2YWxlbmNlTWF0Y2hlc1ZhcmlhYmxlTm9kZSA9IGVxdWl2YWxlbmNlLm1hdGNoVmFyaWFibGVOb2RlKHZhcmlhYmxlTm9kZSk7XG5cbiAgICAgIGlmIChlcXVpdmFsZW5jZU1hdGNoZXNWYXJpYWJsZU5vZGUpIHtcbiAgICAgICAgICB1bmlmaWVkV2l0aEVxdWl2YWxlbmNlID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB1bmlmaWVkV2l0aEVxdWl2YWxlbmNlO1xuICB9XG5cbiAgc3RhdGljIGZyb21TdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUsIGxvY2FsQ29udGV4dCkge1xuICAgIGxldCB0ZXJtRm9yVmFyaWFibGVTdWJzdGl0dXRpb24gPSBudWxsO1xuXG4gICAgY29uc3Qgc3Vic3RpdHV0aW9uTm9kZSA9IHN1YnN0aXR1dGlvbk5vZGVRdWVyeShzdGF0ZW1lbnROb2RlKTtcblxuICAgIGlmIChzdWJzdGl0dXRpb25Ob2RlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCB0ZXJtTm9kZSA9IHRlcm1Ob2RlUXVlcnkoc3Vic3RpdHV0aW9uTm9kZSksXG4gICAgICAgICAgICB2YXJpYWJsZU5vZGUgPSB2YXJpYWJsZU5vZGVRdWVyeShzdWJzdGl0dXRpb25Ob2RlKTtcblxuICAgICAgaWYgKCh0ZXJtTm9kZSAhPT0gbnVsbCkgJiYgKHZhcmlhYmxlTm9kZSAhPT0gbnVsbCkpIHtcbiAgICAgICAgY29uc3QgeyBUZXJtLCBWYXJpYWJsZSB9ID0gc2hpbSxcbiAgICAgICAgICAgICAgdGVybSA9IFRlcm0uZnJvbVRlcm1Ob2RlKHRlcm1Ob2RlLCBsb2NhbENvbnRleHQpLFxuICAgICAgICAgICAgICB2YXJpYWJsZSA9IFZhcmlhYmxlLmZyb21WYXJpYWJsZU5vZGUodmFyaWFibGVOb2RlLCBsb2NhbENvbnRleHQpLFxuICAgICAgICAgICAgICBzdHJpbmcgPSBzdHJpbmdGcm9tVGVybUFuZFZhcmlhYmxlKHRlcm0sIHZhcmlhYmxlLCBsb2NhbENvbnRleHQpLFxuICAgICAgICAgICAgICBzdWJzdGl0dXRpb25Ub2tlbnMgPSBsb2NhbENvbnRleHQubm9kZUFzVG9rZW5zKHN1YnN0aXR1dGlvbk5vZGUpO1xuXG4gICAgICAgIHRlcm1Gb3JWYXJpYWJsZVN1YnN0aXR1dGlvbiA9IG5ldyBUZXJtRm9yVmFyaWFibGVTdWJzdGl0dXRpb24oc3RyaW5nLCB0ZXJtLCB2YXJpYWJsZSwgc3Vic3RpdHV0aW9uTm9kZSwgc3Vic3RpdHV0aW9uVG9rZW5zKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdGVybUZvclZhcmlhYmxlU3Vic3RpdHV0aW9uO1xuICB9XG5cbiAgc3RhdGljIGZyb21UZXJuQW5kVmFyaWFibGUodGVybSwgdmFyaWFibGUsIGxvY2FsQ29udGV4dCkge1xuICAgIGxldCB0ZXJtTm9kZSA9IHRlcm0uZ2V0Tm9kZSgpO1xuXG4gICAgdGVybU5vZGUgPSBzdHJpcEJyYWNrZXRzRnJvbVRlcm1Ob2RlKHRlcm1Ob2RlKTsgLy8vXG5cbiAgICBjb25zdCB7IFRlcm0gfSA9IHNoaW07XG5cbiAgICB0ZXJtID0gVGVybS5mcm9tVGVybU5vZGUodGVybU5vZGUsIGxvY2FsQ29udGV4dCk7XG5cbiAgICBjb25zdCBzdHJpbmcgPSBzdHJpbmdGcm9tVGVybUFuZFZhcmlhYmxlKHRlcm0sIHZhcmlhYmxlLCBsb2NhbENvbnRleHQpLFxuICAgICAgICAgIHN1YnN0aXR1dGlvbk5vZGUgPSBudWxsLFxuICAgICAgICAgIHN1YnN0aXR1dGlvblRva2VucyA9IG51bGwsXG4gICAgICAgICAgdGVybUZvclZhcmlhYmxlU3Vic3RpdHV0aW9uID0gbmV3IFRlcm1Gb3JWYXJpYWJsZVN1YnN0aXR1dGlvbihzdHJpbmcsIHRlcm0sIHZhcmlhYmxlLCBzdWJzdGl0dXRpb25Ob2RlLCBzdWJzdGl0dXRpb25Ub2tlbnMpO1xuXG4gICAgcmV0dXJuIHRlcm1Gb3JWYXJpYWJsZVN1YnN0aXR1dGlvbjtcbiAgfVxufVxuXG5mdW5jdGlvbiBzdHJpbmdGcm9tVGVybUFuZFZhcmlhYmxlKHRlcm0sIHZhcmlhYmxlLCBsb2NhbENvbnRleHQpIHtcbiAgY29uc3QgdGVybU5vZGUgPSB0ZXJtLmdldE5vZGUoKSxcbiAgICAgICAgdGVybVN0cmluZyA9IGxvY2FsQ29udGV4dC5ub2RlQXNTdHJpbmcodGVybU5vZGUpLFxuICAgICAgICB2YXJpYWJsZVN0cmluZyA9IHZhcmlhYmxlLmdldFN0cmluZygpLFxuICAgICAgICBzdHJpbmcgPSBgWyR7dGVybVN0cmluZ30gZm9yICR7dmFyaWFibGVTdHJpbmd9XWA7XG5cbiAgcmV0dXJuIHN0cmluZztcbn1cbiJdLCJuYW1lcyI6WyJUZXJtRm9yVmFyaWFibGVTdWJzdGl0dXRpb24iLCJ0ZXJtTm9kZVF1ZXJ5Iiwibm9kZVF1ZXJ5IiwidmFyaWFibGVOb2RlUXVlcnkiLCJzdWJzdGl0dXRpb25Ob2RlUXVlcnkiLCJzdHJpbmciLCJ0ZXJtIiwidmFyaWFibGUiLCJzdWJzdGl0dXRpb25Ob2RlIiwic3Vic3RpdHV0aW9uVG9rZW5zIiwiZ2V0VGVybSIsImdldFZhcmlhYmxlIiwiZ2V0U3Vic3RpdHV0aW9uTm9kZSIsImdldFN1YnN0aXR1dGlvblRva2VucyIsImdldFN1YnN0aXR1dGlvblN0cmluZyIsInRlcm1TdHJpbmciLCJnZXRTdHJpbmciLCJ2YXJpYWJsZVN0cmluZyIsInN1YnN0aXR1dGlvblN0cmluZyIsInNldFN1YnN0aXR1dGlvbk5vZGVBbmRUb2tlbnMiLCJsb2NhbENvbnRleHQiLCJsZXhlciIsImdldExleGVyIiwicGFyc2VyIiwiZ2V0UGFyc2VyIiwidW5xdWFsaWZpZWRTdGF0ZW1lbnRTdHJpbmciLCJ1bnF1YWxpZmllZFN0YXRlbWVudFN0cmluZ0Zyb21TdWJzdGl0dXRpb25TdHJpbmciLCJ1bnF1YWxpZmllZFN0YXRlbWVudFRva2VucyIsInVucXVhbGlmaWVkU3RhdGVtZW50VG9rZW5zRnJvbVVucXVhbGlmaWVkU3RhdGVtZW50U3RyaW5nIiwidW5xdWFsaWZpZWRTdGF0ZW1lbnROb2RlIiwidW5xdWFsaWZpZWRTdGF0ZW1lbnROb2RlRnJvbVVucXVhbGlmaWVkU3RhdGVtZW50VG9rZW5zIiwic3Vic3RpdHV0aW9uTm9kZUZyb21VbnF1YWxpZmllZFN0YXRlbWVudE5vZGUiLCJzdWJzdGl0dXRpb25Ub2tlbnNGcm9tVW5xdWFsaWZpZWRTdGF0ZW1lbnRUb2tlbnNBbmRTdWJzdGl0dXRpb25Ob2RlIiwiaXNFcXVhbFRvIiwic3Vic3RpdHV0aW9uIiwiZXF1YWxUbyIsInRlcm1Ob2RlIiwiZ2V0Tm9kZSIsInZhcmlhYmxlTm9kZSIsInRlcm1Ob2RlTWF0Y2hlcyIsIm1hdGNoVGVybU5vZGUiLCJ2YXJpYWJsZU5vZGVNYXRjaGVzIiwibWF0Y2hWYXJpYWJsZU5vZGUiLCJzdHJpcEJyYWNrZXRzRnJvbVRlcm1Ob2RlIiwibWF0Y2hWYXJpYWJsZU5hbWUiLCJ2YXJpYWJsZU5hbWUiLCJ2YXJpYWJsZU5hbWVNYXRjaGVzIiwidmFyaWFibGVOYW1lQSIsImdldE5hbWUiLCJ2YXJpYWJsZU5hbWVCIiwibWF0Y2hTdWJzdGl0dXRpb25Ob2RlIiwic3Vic3RpdHV0aW9uTm9kZU1hdGNoZXMiLCJtYXRjaCIsInVuaWZ5V2l0aEVxdWl2YWxlbmNlIiwiZXF1aXZhbGVuY2UiLCJzdWJzdGl0dXRpb25zIiwibG9jYWxDb250ZXh0QSIsImxvY2FsQ29udGV4dEIiLCJ1bmlmaWVkV2l0aEVxdWl2YWxlbmNlIiwiZXF1aXZhbGVuY2VNYXRjaGVzVGVybU5vZGUiLCJlcXVpdmFsZW5jZU1hdGNoZXNWYXJpYWJsZU5vZGUiLCJmcm9tU3RhdGVtZW50Tm9kZSIsInN0YXRlbWVudE5vZGUiLCJ0ZXJtRm9yVmFyaWFibGVTdWJzdGl0dXRpb24iLCJUZXJtIiwic2hpbSIsIlZhcmlhYmxlIiwiZnJvbVRlcm1Ob2RlIiwiZnJvbVZhcmlhYmxlTm9kZSIsInN0cmluZ0Zyb21UZXJtQW5kVmFyaWFibGUiLCJub2RlQXNUb2tlbnMiLCJmcm9tVGVybkFuZFZhcmlhYmxlIiwiU3Vic3RpdHV0aW9uIiwibm9kZUFzU3RyaW5n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