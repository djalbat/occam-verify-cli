"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return TermSubstitution;
    }
});
var _dom = /*#__PURE__*/ _interop_require_default(require("../dom"));
var _substitution = /*#__PURE__*/ _interop_require_default(require("../substitution"));
var _term = /*#__PURE__*/ _interop_require_default(require("../context/partial/substitution/term"));
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
var termNodeQuery = (0, _query.nodeQuery)("/termSubstitution/term[0]"), variableNodeQuery = (0, _query.nodeQuery)("/termSubstitution/term[1]/variable!"), termSubstitutionNodeQuery = (0, _query.nodeQuery)("/statement/termSubstitution");
var TermSubstitution = /*#__PURE__*/ function(Substitution) {
    _inherits(TermSubstitution, Substitution);
    function TermSubstitution(string, node, tokens, term, variable) {
        _class_call_check(this, TermSubstitution);
        var _this;
        _this = _call_super(this, TermSubstitution, [
            string,
            node,
            tokens
        ]);
        _this.term = term;
        _this.variable = variable;
        return _this;
    }
    _create_class(TermSubstitution, [
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
            key: "isTermEqualTo",
            value: function isTermEqualTo(term, context) {
                term = (0, _brackets.stripBracketsFromTerm)(term); ///
                var termEqualTo = this.term.isEqualTo(term);
                return termEqualTo;
            }
        },
        {
            key: "isVariableEqualTo",
            value: function isVariableEqualTo(variable) {
                return this.variable.isEqualTo(variable);
            }
        },
        {
            key: "unifyWithEquivalence",
            value: function unifyWithEquivalence(equivalence) {
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
                var termSubstitution = null;
                var termSubstitutionNode = termSubstitutionNodeQuery(statementNode);
                if (termSubstitutionNode !== null) {
                    var termNode = termNodeQuery(termSubstitutionNode), variableNode = variableNodeQuery(termSubstitutionNode);
                    if (termNode !== null && variableNode !== null) {
                        var Term = _dom.default.Term, Variable = _dom.default.Variable, term = Term.fromTermNode(termNode, context), variable = Variable.fromVariableNode(variableNode, context), node = termSubstitutionNode, tokens = context.nodeAsTokens(node), string = stringFromTermAndVariable(term, variable);
                        termSubstitution = new TermSubstitution(string, node, tokens, term, variable);
                    }
                }
                return termSubstitution;
            }
        },
        {
            key: "fromTernAndVariable",
            value: function fromTernAndVariable(term, variable, context) {
                var termNode = term.getNode();
                termNode = (0, _brackets.stripBracketsFromTermNode)(termNode); ///
                var Term = _dom.default.Term;
                term = Term.fromTermNode(termNode, context);
                var string = stringFromTermAndVariable(term, variable), lexer = context.getLexer(), parser = context.getParser(), termSubstitutionPartialContext = _term.default.fromStringLexerAndParser(string, lexer, parser), node = termSubstitutionPartialContext.getNode(), tokens = termSubstitutionPartialContext.getTokens(), termSubstitution = new TermSubstitution(string, node, tokens, term, variable);
                return termSubstitution;
            }
        }
    ]);
    return TermSubstitution;
}(_substitution.default);
function stringFromTermAndVariable(term, variable) {
    var termString = term.getString(), variableString = variable.getString(), string = "[".concat(termString, " for ").concat(variableString, "]");
    return string;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zdWJzdGl0dXRpb24vdGVybS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IGRvbSBmcm9tIFwiLi4vZG9tXCI7XG5pbXBvcnQgU3Vic3RpdHV0aW9uIGZyb20gXCIuLi9zdWJzdGl0dXRpb25cIjtcbmltcG9ydCBUZXJtU3Vic3RpdHV0aW9uUGFydGlhbENvbnRleHQgZnJvbSBcIi4uL2NvbnRleHQvcGFydGlhbC9zdWJzdGl0dXRpb24vdGVybVwiO1xuXG5pbXBvcnQgeyBub2RlUXVlcnkgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5pbXBvcnQgeyBzdHJpcEJyYWNrZXRzRnJvbVRlcm0gfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2JyYWNrZXRzXCI7XG5pbXBvcnQgeyBzdHJpcEJyYWNrZXRzRnJvbVRlcm1Ob2RlIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9icmFja2V0c1wiO1xuXG5jb25zdCB0ZXJtTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3Rlcm1TdWJzdGl0dXRpb24vdGVybVswXVwiKSxcbiAgICAgIHZhcmlhYmxlTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3Rlcm1TdWJzdGl0dXRpb24vdGVybVsxXS92YXJpYWJsZSFcIiksXG4gICAgICB0ZXJtU3Vic3RpdHV0aW9uTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3N0YXRlbWVudC90ZXJtU3Vic3RpdHV0aW9uXCIpO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUZXJtU3Vic3RpdHV0aW9uIGV4dGVuZHMgU3Vic3RpdHV0aW9uIHtcbiAgY29uc3RydWN0b3Ioc3RyaW5nLCBub2RlLCB0b2tlbnMsIHRlcm0sIHZhcmlhYmxlKSB7XG4gICAgc3VwZXIoc3RyaW5nLCBub2RlLCB0b2tlbnMpO1xuXG4gICAgdGhpcy50ZXJtID0gdGVybTtcbiAgICB0aGlzLnZhcmlhYmxlID0gdmFyaWFibGU7XG4gIH1cblxuICBnZXRUZXJtKCkge1xuICAgIHJldHVybiB0aGlzLnRlcm07XG4gIH1cblxuICBnZXRWYXJpYWJsZSgpIHtcbiAgICByZXR1cm4gdGhpcy52YXJpYWJsZTtcbiAgfVxuXG4gIGlzVGVybUVxdWFsVG8odGVybSwgY29udGV4dCkge1xuICAgIHRlcm0gPSBzdHJpcEJyYWNrZXRzRnJvbVRlcm0odGVybSk7IC8vL1xuXG4gICAgY29uc3QgdGVybUVxdWFsVG8gPSB0aGlzLnRlcm0uaXNFcXVhbFRvKHRlcm0pO1xuXG4gICAgcmV0dXJuIHRlcm1FcXVhbFRvO1xuICB9XG5cbiAgaXNWYXJpYWJsZUVxdWFsVG8odmFyaWFibGUpIHsgcmV0dXJuIHRoaXMudmFyaWFibGUuaXNFcXVhbFRvKHZhcmlhYmxlKTsgfVxuXG4gIHVuaWZ5V2l0aEVxdWl2YWxlbmNlKGVxdWl2YWxlbmNlKSB7XG4gICAgbGV0IHVuaWZpZWRXaXRoRXF1aXZhbGVuY2U7XG5cbiAgICBjb25zdCB0ZXJtTm9kZSA9IHRoaXMudGVybS5nZXROb2RlKCksXG4gICAgICAgICAgZXF1aXZhbGVuY2VNYXRjaGVzVGVybU5vZGUgPSBlcXVpdmFsZW5jZS5tYXRjaFRlcm1Ob2RlKHRlcm1Ob2RlKTtcblxuICAgIGlmIChlcXVpdmFsZW5jZU1hdGNoZXNUZXJtTm9kZSkge1xuICAgICAgY29uc3QgdmFyaWFibGVOb2RlID0gdGhpcy52YXJpYWJsZS5nZXROb2RlKCksXG4gICAgICAgICAgICBlcXVpdmFsZW5jZU1hdGNoZXNWYXJpYWJsZU5vZGUgPSBlcXVpdmFsZW5jZS5tYXRjaFZhcmlhYmxlTm9kZSh2YXJpYWJsZU5vZGUpO1xuXG4gICAgICBpZiAoZXF1aXZhbGVuY2VNYXRjaGVzVmFyaWFibGVOb2RlKSB7XG4gICAgICAgICAgdW5pZmllZFdpdGhFcXVpdmFsZW5jZSA9IHRydWU7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdW5pZmllZFdpdGhFcXVpdmFsZW5jZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tU3RhdGVtZW50Tm9kZShzdGF0ZW1lbnROb2RlLCBjb250ZXh0KSB7XG4gICAgbGV0IHRlcm1TdWJzdGl0dXRpb24gPSBudWxsO1xuXG4gICAgY29uc3QgdGVybVN1YnN0aXR1dGlvbk5vZGUgPSB0ZXJtU3Vic3RpdHV0aW9uTm9kZVF1ZXJ5KHN0YXRlbWVudE5vZGUpO1xuXG4gICAgaWYgKHRlcm1TdWJzdGl0dXRpb25Ob2RlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCB0ZXJtTm9kZSA9IHRlcm1Ob2RlUXVlcnkodGVybVN1YnN0aXR1dGlvbk5vZGUpLFxuICAgICAgICAgICAgdmFyaWFibGVOb2RlID0gdmFyaWFibGVOb2RlUXVlcnkodGVybVN1YnN0aXR1dGlvbk5vZGUpO1xuXG4gICAgICBpZiAoKHRlcm1Ob2RlICE9PSBudWxsKSAmJiAodmFyaWFibGVOb2RlICE9PSBudWxsKSkge1xuICAgICAgICBjb25zdCB7IFRlcm0sIFZhcmlhYmxlIH0gPSBkb20sXG4gICAgICAgICAgICAgIHRlcm0gPSBUZXJtLmZyb21UZXJtTm9kZSh0ZXJtTm9kZSwgY29udGV4dCksXG4gICAgICAgICAgICAgIHZhcmlhYmxlID0gVmFyaWFibGUuZnJvbVZhcmlhYmxlTm9kZSh2YXJpYWJsZU5vZGUsIGNvbnRleHQpLFxuICAgICAgICAgICAgICBub2RlID0gdGVybVN1YnN0aXR1dGlvbk5vZGUsICAvLy9cbiAgICAgICAgICAgICAgdG9rZW5zID0gY29udGV4dC5ub2RlQXNUb2tlbnMobm9kZSksXG4gICAgICAgICAgICAgIHN0cmluZyA9IHN0cmluZ0Zyb21UZXJtQW5kVmFyaWFibGUodGVybSwgdmFyaWFibGUpO1xuXG4gICAgICAgIHRlcm1TdWJzdGl0dXRpb24gPSBuZXcgVGVybVN1YnN0aXR1dGlvbihzdHJpbmcsIG5vZGUsIHRva2VucywgdGVybSwgdmFyaWFibGUpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0ZXJtU3Vic3RpdHV0aW9uO1xuICB9XG5cbiAgc3RhdGljIGZyb21UZXJuQW5kVmFyaWFibGUodGVybSwgdmFyaWFibGUsIGNvbnRleHQpIHtcbiAgICBsZXQgdGVybU5vZGUgPSB0ZXJtLmdldE5vZGUoKTtcblxuICAgIHRlcm1Ob2RlID0gc3RyaXBCcmFja2V0c0Zyb21UZXJtTm9kZSh0ZXJtTm9kZSk7IC8vL1xuXG4gICAgY29uc3QgeyBUZXJtIH0gPSBkb207XG5cbiAgICB0ZXJtID0gVGVybS5mcm9tVGVybU5vZGUodGVybU5vZGUsIGNvbnRleHQpO1xuXG4gICAgY29uc3Qgc3RyaW5nID0gc3RyaW5nRnJvbVRlcm1BbmRWYXJpYWJsZSh0ZXJtLCB2YXJpYWJsZSksXG4gICAgICAgICAgbGV4ZXIgPSBjb250ZXh0LmdldExleGVyKCksXG4gICAgICAgICAgcGFyc2VyID0gY29udGV4dC5nZXRQYXJzZXIoKSxcbiAgICAgICAgICB0ZXJtU3Vic3RpdHV0aW9uUGFydGlhbENvbnRleHQgPSBUZXJtU3Vic3RpdHV0aW9uUGFydGlhbENvbnRleHQuZnJvbVN0cmluZ0xleGVyQW5kUGFyc2VyKHN0cmluZywgbGV4ZXIsIHBhcnNlciksXG4gICAgICAgICAgbm9kZSA9IHRlcm1TdWJzdGl0dXRpb25QYXJ0aWFsQ29udGV4dC5nZXROb2RlKCksXG4gICAgICAgICAgdG9rZW5zID0gdGVybVN1YnN0aXR1dGlvblBhcnRpYWxDb250ZXh0LmdldFRva2VucygpLFxuICAgICAgICAgIHRlcm1TdWJzdGl0dXRpb24gPSBuZXcgVGVybVN1YnN0aXR1dGlvbihzdHJpbmcsIG5vZGUsIHRva2VucywgdGVybSwgdmFyaWFibGUpO1xuXG4gICAgcmV0dXJuIHRlcm1TdWJzdGl0dXRpb247XG4gIH1cbn1cblxuZnVuY3Rpb24gc3RyaW5nRnJvbVRlcm1BbmRWYXJpYWJsZSh0ZXJtLCB2YXJpYWJsZSkge1xuICBjb25zdCB0ZXJtU3RyaW5nID0gdGVybS5nZXRTdHJpbmcoKSxcbiAgICAgICAgdmFyaWFibGVTdHJpbmcgPSB2YXJpYWJsZS5nZXRTdHJpbmcoKSxcbiAgICAgICAgc3RyaW5nID0gYFske3Rlcm1TdHJpbmd9IGZvciAke3ZhcmlhYmxlU3RyaW5nfV1gO1xuXG4gIHJldHVybiBzdHJpbmc7XG59XG4iXSwibmFtZXMiOlsiVGVybVN1YnN0aXR1dGlvbiIsInRlcm1Ob2RlUXVlcnkiLCJub2RlUXVlcnkiLCJ2YXJpYWJsZU5vZGVRdWVyeSIsInRlcm1TdWJzdGl0dXRpb25Ob2RlUXVlcnkiLCJzdHJpbmciLCJub2RlIiwidG9rZW5zIiwidGVybSIsInZhcmlhYmxlIiwiZ2V0VGVybSIsImdldFZhcmlhYmxlIiwiaXNUZXJtRXF1YWxUbyIsImNvbnRleHQiLCJzdHJpcEJyYWNrZXRzRnJvbVRlcm0iLCJ0ZXJtRXF1YWxUbyIsImlzRXF1YWxUbyIsImlzVmFyaWFibGVFcXVhbFRvIiwidW5pZnlXaXRoRXF1aXZhbGVuY2UiLCJlcXVpdmFsZW5jZSIsInVuaWZpZWRXaXRoRXF1aXZhbGVuY2UiLCJ0ZXJtTm9kZSIsImdldE5vZGUiLCJlcXVpdmFsZW5jZU1hdGNoZXNUZXJtTm9kZSIsIm1hdGNoVGVybU5vZGUiLCJ2YXJpYWJsZU5vZGUiLCJlcXVpdmFsZW5jZU1hdGNoZXNWYXJpYWJsZU5vZGUiLCJtYXRjaFZhcmlhYmxlTm9kZSIsImZyb21TdGF0ZW1lbnROb2RlIiwic3RhdGVtZW50Tm9kZSIsInRlcm1TdWJzdGl0dXRpb24iLCJ0ZXJtU3Vic3RpdHV0aW9uTm9kZSIsIlRlcm0iLCJkb20iLCJWYXJpYWJsZSIsImZyb21UZXJtTm9kZSIsImZyb21WYXJpYWJsZU5vZGUiLCJub2RlQXNUb2tlbnMiLCJzdHJpbmdGcm9tVGVybUFuZFZhcmlhYmxlIiwiZnJvbVRlcm5BbmRWYXJpYWJsZSIsInN0cmlwQnJhY2tldHNGcm9tVGVybU5vZGUiLCJsZXhlciIsImdldExleGVyIiwicGFyc2VyIiwiZ2V0UGFyc2VyIiwidGVybVN1YnN0aXR1dGlvblBhcnRpYWxDb250ZXh0IiwiVGVybVN1YnN0aXR1dGlvblBhcnRpYWxDb250ZXh0IiwiZnJvbVN0cmluZ0xleGVyQW5kUGFyc2VyIiwiZ2V0VG9rZW5zIiwiU3Vic3RpdHV0aW9uIiwidGVybVN0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