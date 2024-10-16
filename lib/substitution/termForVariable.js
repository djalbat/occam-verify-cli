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
var _name = require("../utilities/name");
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
var termNodeQuery = (0, _query.nodeQuery)("/substitution/term[0]"), variableNodeQuery = (0, _query.nodeQuery)("/substitution/term[1]/variable!"), termVariableNodeQuery = (0, _query.nodeQuery)("/term/variable"), substitutionNodeQuery = (0, _query.nodeQuery)("/statement/substitution");
var TermForVariableSubstitution = /*#__PURE__*/ function(Substitution) {
    _inherits(TermForVariableSubstitution, Substitution);
    function TermForVariableSubstitution(string, termNode, variableNode, substitutionNode, substitutionTokens) {
        _class_call_check(this, TermForVariableSubstitution);
        var _this;
        _this = _call_super(this, TermForVariableSubstitution, [
            string
        ]);
        _this.termNode = termNode;
        _this.variableNode = variableNode;
        _this.substitutionNode = substitutionNode;
        _this.substitutionTokens = substitutionTokens;
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
            key: "getSubstitutionTokens",
            value: function getSubstitutionTokens() {
                return this.substitutionTokens;
            }
        },
        {
            key: "getVariableName",
            value: function getVariableName() {
                var variableName = (0, _name.variableNameFromVariableNode)(this.variableNode);
                return variableName;
            }
        },
        {
            key: "setSubstitutionNode",
            value: function setSubstitutionNode() {
                this.substitutionNode = (0, _node.substitutionNodeFromSubstitutionTokens)(this.substitutionTokens);
            }
        },
        {
            key: "setSubstitutionTokens",
            value: function setSubstitutionTokens() {
                var termVariableNode = termVariableNodeQuery(this.termNode), termVariableName = (0, _name.variableNameFromVariableNode)(termVariableNode), variableName = (0, _name.variableNameFromVariableNode)(this.variableNode), substitutionString = "[".concat(termVariableName, " for ").concat(variableName, "]");
                this.substitutionTokens = (0, _tokens.substitutionTokensFromSubstitutionString)(substitutionString);
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
            key: "matchVariableName",
            value: function matchVariableName(variableName) {
                var variableNameMatches;
                var variableNameA = variableName; ///
                variableName = (0, _name.variableNameFromVariableNode)(this.variableNode);
                var variableNameB = variableName; ///
                variableNameMatches = variableNameA === variableNameB;
                return variableNameMatches;
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
                        var Term = _shim.default.Term, Variable = _shim.default.Variable, term = Term.fromTermNode(termNode, localContext), variable = Variable.fromVariableNode(variableNode, localContext), string = stringFromTermAndVariable(term, variable, localContext), substitutionTokens = localContext.nodeAsTokens(substitutionNode);
                        termForVariableSubstitution = new TermForVariableSubstitution(string, termNode, variableNode, substitutionNode, substitutionTokens);
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
                var string = stringFromTermAndVariable(term, variable, localContext), variableNode = variable.getNode(), substitutionNode = null, substitutionTokens = null, termForVariableSubstitution = new TermForVariableSubstitution(string, termNode, variableNode, substitutionNode, substitutionTokens);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zdWJzdGl0dXRpb24vdGVybUZvclZhcmlhYmxlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgc2hpbSBmcm9tIFwiLi4vc2hpbVwiO1xuaW1wb3J0IFN1YnN0aXR1dGlvbiBmcm9tIFwiLi4vc3Vic3RpdHV0aW9uXCI7XG5cbmltcG9ydCB7IG5vZGVRdWVyeSB9IGZyb20gXCIuLi91dGlsaXRpZXMvcXVlcnlcIjtcbmltcG9ydCB7IHN0cmlwQnJhY2tldHNGcm9tVGVybSB9IGZyb20gXCIuLi91dGlsaXRpZXMvYnJhY2tldHNcIjtcbmltcG9ydCB7IHZhcmlhYmxlTmFtZUZyb21WYXJpYWJsZU5vZGUgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL25hbWVcIjtcbmltcG9ydCB7IHN1YnN0aXR1dGlvbk5vZGVGcm9tU3Vic3RpdHV0aW9uVG9rZW5zIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9ub2RlXCI7XG5pbXBvcnQgeyBzdWJzdGl0dXRpb25Ub2tlbnNGcm9tU3Vic3RpdHV0aW9uU3RyaW5nIH0gZnJvbSBcIi4uL3V0aWxpdGllcy90b2tlbnNcIjtcblxuY29uc3QgdGVybU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9zdWJzdGl0dXRpb24vdGVybVswXVwiKSxcbiAgICAgIHZhcmlhYmxlTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3N1YnN0aXR1dGlvbi90ZXJtWzFdL3ZhcmlhYmxlIVwiKSxcbiAgICAgIHRlcm1WYXJpYWJsZU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi90ZXJtL3ZhcmlhYmxlXCIpLFxuICAgICAgc3Vic3RpdHV0aW9uTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3N0YXRlbWVudC9zdWJzdGl0dXRpb25cIik7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRlcm1Gb3JWYXJpYWJsZVN1YnN0aXR1dGlvbiBleHRlbmRzIFN1YnN0aXR1dGlvbiB7XG4gIGNvbnN0cnVjdG9yKHN0cmluZywgdGVybU5vZGUsIHZhcmlhYmxlTm9kZSwgc3Vic3RpdHV0aW9uTm9kZSwgc3Vic3RpdHV0aW9uVG9rZW5zKSB7XG4gICAgc3VwZXIoc3RyaW5nKTtcblxuICAgIHRoaXMudGVybU5vZGUgPSB0ZXJtTm9kZTtcbiAgICB0aGlzLnZhcmlhYmxlTm9kZSA9IHZhcmlhYmxlTm9kZTtcbiAgICB0aGlzLnN1YnN0aXR1dGlvbk5vZGUgPSBzdWJzdGl0dXRpb25Ob2RlO1xuICAgIHRoaXMuc3Vic3RpdHV0aW9uVG9rZW5zID0gc3Vic3RpdHV0aW9uVG9rZW5zO1xuICB9XG5cbiAgZ2V0VGVybU5vZGUoKSB7XG4gICAgcmV0dXJuIHRoaXMudGVybU5vZGU7XG4gIH1cblxuICBnZXRWYXJpYWJsZU5vZGUoKSB7XG4gICAgcmV0dXJuIHRoaXMudmFyaWFibGVOb2RlO1xuICB9XG5cbiAgZ2V0U3Vic3RpdHV0aW9uTm9kZSgpIHtcbiAgICByZXR1cm4gdGhpcy5zdWJzdGl0dXRpb25Ob2RlO1xuICB9XG5cbiAgZ2V0U3Vic3RpdHV0aW9uVG9rZW5zKCkge1xuICAgIHJldHVybiB0aGlzLnN1YnN0aXR1dGlvblRva2VucztcbiAgfVxuXG4gIGdldFZhcmlhYmxlTmFtZSgpIHtcbiAgICBjb25zdCB2YXJpYWJsZU5hbWUgPSB2YXJpYWJsZU5hbWVGcm9tVmFyaWFibGVOb2RlKHRoaXMudmFyaWFibGVOb2RlKTtcblxuICAgIHJldHVybiB2YXJpYWJsZU5hbWU7XG4gIH1cblxuICBzZXRTdWJzdGl0dXRpb25Ob2RlKCkge1xuICAgIHRoaXMuc3Vic3RpdHV0aW9uTm9kZSA9IHN1YnN0aXR1dGlvbk5vZGVGcm9tU3Vic3RpdHV0aW9uVG9rZW5zKHRoaXMuc3Vic3RpdHV0aW9uVG9rZW5zKTtcbiAgfVxuXG4gIHNldFN1YnN0aXR1dGlvblRva2VucygpIHtcbiAgICBjb25zdCB0ZXJtVmFyaWFibGVOb2RlID0gdGVybVZhcmlhYmxlTm9kZVF1ZXJ5KHRoaXMudGVybU5vZGUpLFxuICAgICAgICAgIHRlcm1WYXJpYWJsZU5hbWUgPSB2YXJpYWJsZU5hbWVGcm9tVmFyaWFibGVOb2RlKHRlcm1WYXJpYWJsZU5vZGUpLFxuICAgICAgICAgIHZhcmlhYmxlTmFtZSA9IHZhcmlhYmxlTmFtZUZyb21WYXJpYWJsZU5vZGUodGhpcy52YXJpYWJsZU5vZGUpLFxuICAgICAgICAgIHN1YnN0aXR1dGlvblN0cmluZyA9IGBbJHt0ZXJtVmFyaWFibGVOYW1lfSBmb3IgJHt2YXJpYWJsZU5hbWV9XWA7XG5cbiAgICB0aGlzLnN1YnN0aXR1dGlvblRva2VucyA9IHN1YnN0aXR1dGlvblRva2Vuc0Zyb21TdWJzdGl0dXRpb25TdHJpbmcoc3Vic3RpdHV0aW9uU3RyaW5nKTtcbiAgfVxuXG4gIGlzRXF1YWxUbyhzdWJzdGl0dXRpb24pIHtcbiAgICBsZXQgZXF1YWxUbyA9IGZhbHNlO1xuXG4gICAgY29uc3QgdGVybU5vZGUgPSBzdWJzdGl0dXRpb24uZ2V0VGVybU5vZGUoKSxcbiAgICAgICAgICB2YXJpYWJsZU5vZGUgPSBzdWJzdGl0dXRpb24uZ2V0VmFyaWFibGVOb2RlKCk7XG5cbiAgICBpZiAoKHRlcm1Ob2RlICE9PSBudWxsKSAmJiAodmFyaWFibGVOb2RlICE9PSBudWxsKSkge1xuICAgICAgY29uc3QgdGVybU5vZGVNYXRjaGVzID0gdGhpcy5tYXRjaFRlcm1Ob2RlKHRlcm1Ob2RlKSxcbiAgICAgICAgICAgIHZhcmlhYmxlTm9kZU1hdGNoZXMgPSB0aGlzLm1hdGNoVmFyaWFibGVOb2RlKHZhcmlhYmxlTm9kZSk7XG5cbiAgICAgIGVxdWFsVG8gPSAodGVybU5vZGVNYXRjaGVzICYmIHZhcmlhYmxlTm9kZU1hdGNoZXMpO1xuICAgIH1cblxuICAgIHJldHVybiBlcXVhbFRvO1xuICB9XG5cbiAgbWF0Y2hUZXJtTm9kZSh0ZXJtTm9kZSkge1xuICAgIHRlcm1Ob2RlID0gc3RyaXBCcmFja2V0c0Zyb21UZXJtKHRlcm1Ob2RlKTsgLy8vXG5cbiAgICBjb25zdCB0ZXJtTm9kZU1hdGNoZXMgPSB0aGlzLnRlcm1Ob2RlLm1hdGNoKHRlcm1Ob2RlKTtcblxuICAgIHJldHVybiB0ZXJtTm9kZU1hdGNoZXM7XG4gIH1cblxuICBtYXRjaFZhcmlhYmxlTmFtZSh2YXJpYWJsZU5hbWUpIHtcbiAgICBsZXQgdmFyaWFibGVOYW1lTWF0Y2hlcztcblxuICAgIGNvbnN0IHZhcmlhYmxlTmFtZUEgPSB2YXJpYWJsZU5hbWU7IC8vL1xuXG4gICAgdmFyaWFibGVOYW1lID0gdmFyaWFibGVOYW1lRnJvbVZhcmlhYmxlTm9kZSh0aGlzLnZhcmlhYmxlTm9kZSk7XG5cbiAgICBjb25zdCB2YXJpYWJsZU5hbWVCID0gdmFyaWFibGVOYW1lOyAvLy9cblxuICAgIHZhcmlhYmxlTmFtZU1hdGNoZXMgPSAodmFyaWFibGVOYW1lQSA9PT0gdmFyaWFibGVOYW1lQik7XG5cbiAgICByZXR1cm4gdmFyaWFibGVOYW1lTWF0Y2hlcztcbiAgfVxuXG4gIG1hdGNoU3Vic3RpdHV0aW9uTm9kZShzdWJzdGl0dXRpb25Ob2RlKSB7XG4gICAgY29uc3Qgc3Vic3RpdHV0aW9uTm9kZU1hdGNoZXMgPSB0aGlzLnN1YnN0aXR1dGlvbk5vZGUubWF0Y2goc3Vic3RpdHV0aW9uTm9kZSk7XG5cbiAgICByZXR1cm4gc3Vic3RpdHV0aW9uTm9kZU1hdGNoZXM7XG4gIH1cblxuICB1bmlmeVdpdGhFcXVpdmFsZW5jZShlcXVpdmFsZW5jZSwgc3Vic3RpdHV0aW9ucywgbG9jYWxDb250ZXh0QSwgbG9jYWxDb250ZXh0Qikge1xuICAgIGxldCB1bmlmaWVkV2l0aEVxdWl2YWxlbmNlO1xuXG4gICAgY29uc3QgZXF1aXZhbGVuY2VNYXRjaGVzVGVybU5vZGUgPSBlcXVpdmFsZW5jZS5tYXRjaFRlcm1Ob2RlKHRoaXMudGVybU5vZGUpO1xuXG4gICAgaWYgKGVxdWl2YWxlbmNlTWF0Y2hlc1Rlcm1Ob2RlKSB7XG4gICAgICBjb25zdCBlcXVpdmFsZW5jZU1hdGNoZXNWYXJpYWJsZU5vZGUgPSBlcXVpdmFsZW5jZS5tYXRjaFZhcmlhYmxlTm9kZSh0aGlzLnZhcmlhYmxlTm9kZSk7XG5cbiAgICAgIGlmIChlcXVpdmFsZW5jZU1hdGNoZXNWYXJpYWJsZU5vZGUpIHtcbiAgICAgICAgICB1bmlmaWVkV2l0aEVxdWl2YWxlbmNlID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB1bmlmaWVkV2l0aEVxdWl2YWxlbmNlO1xuICB9XG5cbiAgc3RhdGljIGZyb21TdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUsIGxvY2FsQ29udGV4dCkge1xuICAgIGxldCB0ZXJtRm9yVmFyaWFibGVTdWJzdGl0dXRpb24gPSBudWxsO1xuXG4gICAgY29uc3Qgc3Vic3RpdHV0aW9uTm9kZSA9IHN1YnN0aXR1dGlvbk5vZGVRdWVyeShzdGF0ZW1lbnROb2RlKTtcblxuICAgIGlmIChzdWJzdGl0dXRpb25Ob2RlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCB0ZXJtTm9kZSA9IHRlcm1Ob2RlUXVlcnkoc3Vic3RpdHV0aW9uTm9kZSksXG4gICAgICAgICAgICB2YXJpYWJsZU5vZGUgPSB2YXJpYWJsZU5vZGVRdWVyeShzdWJzdGl0dXRpb25Ob2RlKTtcblxuICAgICAgaWYgKCh0ZXJtTm9kZSAhPT0gbnVsbCkgJiYgKHZhcmlhYmxlTm9kZSAhPT0gbnVsbCkpIHtcbiAgICAgICAgY29uc3QgeyBUZXJtLCBWYXJpYWJsZSB9ID0gc2hpbSxcbiAgICAgICAgICAgICAgdGVybSA9IFRlcm0uZnJvbVRlcm1Ob2RlKHRlcm1Ob2RlLCBsb2NhbENvbnRleHQpLFxuICAgICAgICAgICAgICB2YXJpYWJsZSA9IFZhcmlhYmxlLmZyb21WYXJpYWJsZU5vZGUodmFyaWFibGVOb2RlLCBsb2NhbENvbnRleHQpLFxuICAgICAgICAgICAgICBzdHJpbmcgPSBzdHJpbmdGcm9tVGVybUFuZFZhcmlhYmxlKHRlcm0sIHZhcmlhYmxlLCBsb2NhbENvbnRleHQpLFxuICAgICAgICAgICAgICBzdWJzdGl0dXRpb25Ub2tlbnMgPSBsb2NhbENvbnRleHQubm9kZUFzVG9rZW5zKHN1YnN0aXR1dGlvbk5vZGUpO1xuXG4gICAgICAgIHRlcm1Gb3JWYXJpYWJsZVN1YnN0aXR1dGlvbiA9IG5ldyBUZXJtRm9yVmFyaWFibGVTdWJzdGl0dXRpb24oc3RyaW5nLCB0ZXJtTm9kZSwgdmFyaWFibGVOb2RlLCBzdWJzdGl0dXRpb25Ob2RlLCBzdWJzdGl0dXRpb25Ub2tlbnMpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0ZXJtRm9yVmFyaWFibGVTdWJzdGl0dXRpb247XG4gIH1cblxuICBzdGF0aWMgZnJvbVRlcm5BbmRWYXJpYWJsZSh0ZXJtLCB2YXJpYWJsZSwgbG9jYWxDb250ZXh0KSB7XG4gICAgbGV0IHRlcm1Ob2RlID0gdGVybS5nZXROb2RlKCk7XG5cbiAgICB0ZXJtTm9kZSA9IHN0cmlwQnJhY2tldHNGcm9tVGVybSh0ZXJtTm9kZSk7IC8vL1xuXG4gICAgY29uc3Qgc3RyaW5nID0gc3RyaW5nRnJvbVRlcm1BbmRWYXJpYWJsZSh0ZXJtLCB2YXJpYWJsZSwgbG9jYWxDb250ZXh0KSxcbiAgICAgICAgICB2YXJpYWJsZU5vZGUgPSB2YXJpYWJsZS5nZXROb2RlKCksXG4gICAgICAgICAgc3Vic3RpdHV0aW9uTm9kZSA9IG51bGwsXG4gICAgICAgICAgc3Vic3RpdHV0aW9uVG9rZW5zID0gbnVsbCxcbiAgICAgICAgICB0ZXJtRm9yVmFyaWFibGVTdWJzdGl0dXRpb24gPSBuZXcgVGVybUZvclZhcmlhYmxlU3Vic3RpdHV0aW9uKHN0cmluZywgdGVybU5vZGUsIHZhcmlhYmxlTm9kZSwgc3Vic3RpdHV0aW9uTm9kZSwgc3Vic3RpdHV0aW9uVG9rZW5zKTtcblxuICAgIHJldHVybiB0ZXJtRm9yVmFyaWFibGVTdWJzdGl0dXRpb247XG4gIH1cbn1cblxuZnVuY3Rpb24gc3RyaW5nRnJvbVRlcm1BbmRWYXJpYWJsZSh0ZXJtLCB2YXJpYWJsZSwgbG9jYWxDb250ZXh0KSB7XG4gIGNvbnN0IHRlcm1Ob2RlID0gdGVybS5nZXROb2RlKCksXG4gICAgICAgIHRlcm1TdHJpbmcgPSBsb2NhbENvbnRleHQubm9kZUFzU3RyaW5nKHRlcm1Ob2RlKSxcbiAgICAgICAgdmFyaWFibGVTdHJpbmcgPSB2YXJpYWJsZS5nZXRTdHJpbmcoKSxcbiAgICAgICAgc3RyaW5nID0gYFske3Rlcm1TdHJpbmd9IGZvciAke3ZhcmlhYmxlU3RyaW5nfV1gO1xuXG4gIHJldHVybiBzdHJpbmc7XG59XG4iXSwibmFtZXMiOlsiVGVybUZvclZhcmlhYmxlU3Vic3RpdHV0aW9uIiwidGVybU5vZGVRdWVyeSIsIm5vZGVRdWVyeSIsInZhcmlhYmxlTm9kZVF1ZXJ5IiwidGVybVZhcmlhYmxlTm9kZVF1ZXJ5Iiwic3Vic3RpdHV0aW9uTm9kZVF1ZXJ5Iiwic3RyaW5nIiwidGVybU5vZGUiLCJ2YXJpYWJsZU5vZGUiLCJzdWJzdGl0dXRpb25Ob2RlIiwic3Vic3RpdHV0aW9uVG9rZW5zIiwiZ2V0VGVybU5vZGUiLCJnZXRWYXJpYWJsZU5vZGUiLCJnZXRTdWJzdGl0dXRpb25Ob2RlIiwiZ2V0U3Vic3RpdHV0aW9uVG9rZW5zIiwiZ2V0VmFyaWFibGVOYW1lIiwidmFyaWFibGVOYW1lIiwidmFyaWFibGVOYW1lRnJvbVZhcmlhYmxlTm9kZSIsInNldFN1YnN0aXR1dGlvbk5vZGUiLCJzdWJzdGl0dXRpb25Ob2RlRnJvbVN1YnN0aXR1dGlvblRva2VucyIsInNldFN1YnN0aXR1dGlvblRva2VucyIsInRlcm1WYXJpYWJsZU5vZGUiLCJ0ZXJtVmFyaWFibGVOYW1lIiwic3Vic3RpdHV0aW9uU3RyaW5nIiwic3Vic3RpdHV0aW9uVG9rZW5zRnJvbVN1YnN0aXR1dGlvblN0cmluZyIsImlzRXF1YWxUbyIsInN1YnN0aXR1dGlvbiIsImVxdWFsVG8iLCJ0ZXJtTm9kZU1hdGNoZXMiLCJtYXRjaFRlcm1Ob2RlIiwidmFyaWFibGVOb2RlTWF0Y2hlcyIsIm1hdGNoVmFyaWFibGVOb2RlIiwic3RyaXBCcmFja2V0c0Zyb21UZXJtIiwibWF0Y2giLCJtYXRjaFZhcmlhYmxlTmFtZSIsInZhcmlhYmxlTmFtZU1hdGNoZXMiLCJ2YXJpYWJsZU5hbWVBIiwidmFyaWFibGVOYW1lQiIsIm1hdGNoU3Vic3RpdHV0aW9uTm9kZSIsInN1YnN0aXR1dGlvbk5vZGVNYXRjaGVzIiwidW5pZnlXaXRoRXF1aXZhbGVuY2UiLCJlcXVpdmFsZW5jZSIsInN1YnN0aXR1dGlvbnMiLCJsb2NhbENvbnRleHRBIiwibG9jYWxDb250ZXh0QiIsInVuaWZpZWRXaXRoRXF1aXZhbGVuY2UiLCJlcXVpdmFsZW5jZU1hdGNoZXNUZXJtTm9kZSIsImVxdWl2YWxlbmNlTWF0Y2hlc1ZhcmlhYmxlTm9kZSIsImZyb21TdGF0ZW1lbnROb2RlIiwic3RhdGVtZW50Tm9kZSIsImxvY2FsQ29udGV4dCIsInRlcm1Gb3JWYXJpYWJsZVN1YnN0aXR1dGlvbiIsIlRlcm0iLCJzaGltIiwiVmFyaWFibGUiLCJ0ZXJtIiwiZnJvbVRlcm1Ob2RlIiwidmFyaWFibGUiLCJmcm9tVmFyaWFibGVOb2RlIiwic3RyaW5nRnJvbVRlcm1BbmRWYXJpYWJsZSIsIm5vZGVBc1Rva2VucyIsImZyb21UZXJuQW5kVmFyaWFibGUiLCJnZXROb2RlIiwiU3Vic3RpdHV0aW9uIiwidGVybVN0cmluZyIsIm5vZGVBc1N0cmluZyIsInZhcmlhYmxlU3RyaW5nIiwiZ2V0U3RyaW5nIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQWdCcUJBOzs7MkRBZEo7bUVBQ1E7cUJBRUM7d0JBQ1k7b0JBQ087b0JBQ1U7c0JBQ0U7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFekQsSUFBTUMsZ0JBQWdCQyxJQUFBQSxnQkFBUyxFQUFDLDBCQUMxQkMsb0JBQW9CRCxJQUFBQSxnQkFBUyxFQUFDLG9DQUM5QkUsd0JBQXdCRixJQUFBQSxnQkFBUyxFQUFDLG1CQUNsQ0csd0JBQXdCSCxJQUFBQSxnQkFBUyxFQUFDO0FBRXpCLElBQUEsQUFBTUYsNENBQU47Y0FBTUE7YUFBQUEsNEJBQ1BNLE1BQU0sRUFBRUMsUUFBUSxFQUFFQyxZ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