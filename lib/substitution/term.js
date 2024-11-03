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
var _term = /*#__PURE__*/ _interop_require_default(require("../nodeAndTokens/substitution/term"));
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
            value: function isTermEqualTo(term) {
                return this.term.isEqualTo(term);
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
                var string = stringFromTermAndVariable(term, variable), termSubstitutionNodeAndTokens = _term.default.fromString(string, context), node = termSubstitutionNodeAndTokens.getNode(), tokens = termSubstitutionNodeAndTokens.getTokens(), termSubstitution = new TermSubstitution(string, node, tokens, term, variable);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zdWJzdGl0dXRpb24vdGVybS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IGRvbSBmcm9tIFwiLi4vZG9tXCI7XG5pbXBvcnQgU3Vic3RpdHV0aW9uIGZyb20gXCIuLi9zdWJzdGl0dXRpb25cIjtcbmltcG9ydCBUZXJtU3Vic3RpdHV0aW9uTm9kZUFuZFRva2VucyBmcm9tIFwiLi4vbm9kZUFuZFRva2Vucy9zdWJzdGl0dXRpb24vdGVybVwiO1xuXG5pbXBvcnQgeyBub2RlUXVlcnkgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5pbXBvcnQgeyBzdHJpcEJyYWNrZXRzRnJvbVRlcm1Ob2RlIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9icmFja2V0c1wiO1xuXG5jb25zdCB0ZXJtTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3Rlcm1TdWJzdGl0dXRpb24vdGVybVswXVwiKSxcbiAgICAgIHZhcmlhYmxlTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3Rlcm1TdWJzdGl0dXRpb24vdGVybVsxXS92YXJpYWJsZSFcIiksXG4gICAgICB0ZXJtU3Vic3RpdHV0aW9uTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3N0YXRlbWVudC90ZXJtU3Vic3RpdHV0aW9uXCIpO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUZXJtU3Vic3RpdHV0aW9uIGV4dGVuZHMgU3Vic3RpdHV0aW9uIHtcbiAgY29uc3RydWN0b3Ioc3RyaW5nLCBub2RlLCB0b2tlbnMsIHRlcm0sIHZhcmlhYmxlKSB7XG4gICAgc3VwZXIoc3RyaW5nLCBub2RlLCB0b2tlbnMpO1xuXG4gICAgdGhpcy50ZXJtID0gdGVybTtcbiAgICB0aGlzLnZhcmlhYmxlID0gdmFyaWFibGU7XG4gIH1cblxuICBnZXRUZXJtKCkge1xuICAgIHJldHVybiB0aGlzLnRlcm07XG4gIH1cblxuICBnZXRWYXJpYWJsZSgpIHtcbiAgICByZXR1cm4gdGhpcy52YXJpYWJsZTtcbiAgfVxuXG4gIGlzVGVybUVxdWFsVG8odGVybSkgeyByZXR1cm4gdGhpcy50ZXJtLmlzRXF1YWxUbyh0ZXJtKTsgfVxuXG4gIGlzVmFyaWFibGVFcXVhbFRvKHZhcmlhYmxlKSB7IHJldHVybiB0aGlzLnZhcmlhYmxlLmlzRXF1YWxUbyh2YXJpYWJsZSk7IH1cblxuICB1bmlmeVdpdGhFcXVpdmFsZW5jZShlcXVpdmFsZW5jZSwgc3Vic3RpdHV0aW9ucywgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCkge1xuICAgIGxldCB1bmlmaWVkV2l0aEVxdWl2YWxlbmNlO1xuXG4gICAgY29uc3QgdGVybU5vZGUgPSB0aGlzLnRlcm0uZ2V0Tm9kZSgpLFxuICAgICAgICAgIGVxdWl2YWxlbmNlTWF0Y2hlc1Rlcm1Ob2RlID0gZXF1aXZhbGVuY2UubWF0Y2hUZXJtTm9kZSh0ZXJtTm9kZSk7XG5cbiAgICBpZiAoZXF1aXZhbGVuY2VNYXRjaGVzVGVybU5vZGUpIHtcbiAgICAgIGNvbnN0IHZhcmlhYmxlTm9kZSA9IHRoaXMudmFyaWFibGUuZ2V0Tm9kZSgpLFxuICAgICAgICAgICAgZXF1aXZhbGVuY2VNYXRjaGVzVmFyaWFibGVOb2RlID0gZXF1aXZhbGVuY2UubWF0Y2hWYXJpYWJsZU5vZGUodmFyaWFibGVOb2RlKTtcblxuICAgICAgaWYgKGVxdWl2YWxlbmNlTWF0Y2hlc1ZhcmlhYmxlTm9kZSkge1xuICAgICAgICAgIHVuaWZpZWRXaXRoRXF1aXZhbGVuY2UgPSB0cnVlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHVuaWZpZWRXaXRoRXF1aXZhbGVuY2U7XG4gIH1cblxuICBzdGF0aWMgZnJvbVN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSwgY29udGV4dCkge1xuICAgIGxldCB0ZXJtU3Vic3RpdHV0aW9uID0gbnVsbDtcblxuICAgIGNvbnN0IHRlcm1TdWJzdGl0dXRpb25Ob2RlID0gdGVybVN1YnN0aXR1dGlvbk5vZGVRdWVyeShzdGF0ZW1lbnROb2RlKTtcblxuICAgIGlmICh0ZXJtU3Vic3RpdHV0aW9uTm9kZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgdGVybU5vZGUgPSB0ZXJtTm9kZVF1ZXJ5KHRlcm1TdWJzdGl0dXRpb25Ob2RlKSxcbiAgICAgICAgICAgIHZhcmlhYmxlTm9kZSA9IHZhcmlhYmxlTm9kZVF1ZXJ5KHRlcm1TdWJzdGl0dXRpb25Ob2RlKTtcblxuICAgICAgaWYgKCh0ZXJtTm9kZSAhPT0gbnVsbCkgJiYgKHZhcmlhYmxlTm9kZSAhPT0gbnVsbCkpIHtcbiAgICAgICAgY29uc3QgeyBUZXJtLCBWYXJpYWJsZSB9ID0gZG9tLFxuICAgICAgICAgICAgICB0ZXJtID0gVGVybS5mcm9tVGVybU5vZGUodGVybU5vZGUsIGNvbnRleHQpLFxuICAgICAgICAgICAgICB2YXJpYWJsZSA9IFZhcmlhYmxlLmZyb21WYXJpYWJsZU5vZGUodmFyaWFibGVOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgICAgICAgbm9kZSA9IHRlcm1TdWJzdGl0dXRpb25Ob2RlLCAgLy8vXG4gICAgICAgICAgICAgIHRva2VucyA9IGNvbnRleHQubm9kZUFzVG9rZW5zKG5vZGUpLFxuICAgICAgICAgICAgICBzdHJpbmcgPSBzdHJpbmdGcm9tVGVybUFuZFZhcmlhYmxlKHRlcm0sIHZhcmlhYmxlKTtcblxuICAgICAgICB0ZXJtU3Vic3RpdHV0aW9uID0gbmV3IFRlcm1TdWJzdGl0dXRpb24oc3RyaW5nLCBub2RlLCB0b2tlbnMsIHRlcm0sIHZhcmlhYmxlKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdGVybVN1YnN0aXR1dGlvbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tVGVybkFuZFZhcmlhYmxlKHRlcm0sIHZhcmlhYmxlLCBjb250ZXh0KSB7XG4gICAgbGV0IHRlcm1Ob2RlID0gdGVybS5nZXROb2RlKCk7XG5cbiAgICB0ZXJtTm9kZSA9IHN0cmlwQnJhY2tldHNGcm9tVGVybU5vZGUodGVybU5vZGUpOyAvLy9cblxuICAgIGNvbnN0IHsgVGVybSB9ID0gZG9tO1xuXG4gICAgdGVybSA9IFRlcm0uZnJvbVRlcm1Ob2RlKHRlcm1Ob2RlLCBjb250ZXh0KTtcblxuICAgIGNvbnN0IHN0cmluZyA9IHN0cmluZ0Zyb21UZXJtQW5kVmFyaWFibGUodGVybSwgdmFyaWFibGUpLFxuICAgICAgICAgIHRlcm1TdWJzdGl0dXRpb25Ob2RlQW5kVG9rZW5zID0gVGVybVN1YnN0aXR1dGlvbk5vZGVBbmRUb2tlbnMuZnJvbVN0cmluZyhzdHJpbmcsIGNvbnRleHQpLFxuICAgICAgICAgIG5vZGUgPSB0ZXJtU3Vic3RpdHV0aW9uTm9kZUFuZFRva2Vucy5nZXROb2RlKCksXG4gICAgICAgICAgdG9rZW5zID0gdGVybVN1YnN0aXR1dGlvbk5vZGVBbmRUb2tlbnMuZ2V0VG9rZW5zKCksXG4gICAgICAgICAgdGVybVN1YnN0aXR1dGlvbiA9IG5ldyBUZXJtU3Vic3RpdHV0aW9uKHN0cmluZywgbm9kZSwgdG9rZW5zLCB0ZXJtLCB2YXJpYWJsZSk7XG5cbiAgICByZXR1cm4gdGVybVN1YnN0aXR1dGlvbjtcbiAgfVxufVxuXG5mdW5jdGlvbiBzdHJpbmdGcm9tVGVybUFuZFZhcmlhYmxlKHRlcm0sIHZhcmlhYmxlKSB7XG4gIGNvbnN0IHRlcm1TdHJpbmcgPSB0ZXJtLmdldFN0cmluZygpLFxuICAgICAgICB2YXJpYWJsZVN0cmluZyA9IHZhcmlhYmxlLmdldFN0cmluZygpLFxuICAgICAgICBzdHJpbmcgPSBgWyR7dGVybVN0cmluZ30gZm9yICR7dmFyaWFibGVTdHJpbmd9XWA7XG5cbiAgcmV0dXJuIHN0cmluZztcbn1cbiJdLCJuYW1lcyI6WyJUZXJtU3Vic3RpdHV0aW9uIiwidGVybU5vZGVRdWVyeSIsIm5vZGVRdWVyeSIsInZhcmlhYmxlTm9kZVF1ZXJ5IiwidGVybVN1YnN0aXR1dGlvbk5vZGVRdWVyeSIsInN0cmluZyIsIm5vZGUiLCJ0b2tlbnMiLCJ0ZXJtIiwidmFyaWFibGUiLCJnZXRUZXJtIiwiZ2V0VmFyaWFibGUiLCJpc1Rlcm1FcXVhbFRvIiwiaXNFcXVhbFRvIiwiaXNWYXJpYWJsZUVxdWFsVG8iLCJ1bmlmeVdpdGhFcXVpdmFsZW5jZSIsImVxdWl2YWxlbmNlIiwic3Vic3RpdHV0aW9ucyIsImdlbmVyYWxDb250ZXh0Iiwic3BlY2lmaWNDb250ZXh0IiwidW5pZmllZFdpdGhFcXVpdmFsZW5jZSIsInRlcm1Ob2RlIiwiZ2V0Tm9kZSIsImVxdWl2YWxlbmNlTWF0Y2hlc1Rlcm1Ob2RlIiwibWF0Y2hUZXJtTm9kZSIsInZhcmlhYmxlTm9kZSIsImVxdWl2YWxlbmNlTWF0Y2hlc1ZhcmlhYmxlTm9kZSIsIm1hdGNoVmFyaWFibGVOb2RlIiwiZnJvbVN0YXRlbWVudE5vZGUiLCJzdGF0ZW1lbnROb2RlIiwiY29udGV4dCIsInRlcm1TdWJzdGl0dXRpb24iLCJ0ZXJtU3Vic3RpdHV0aW9uTm9kZSIsIlRlcm0iLCJkb20iLCJWYXJpYWJsZSIsImZyb21UZXJtTm9kZSIsImZyb21WYXJpYWJsZU5vZGUiLCJub2RlQXNUb2tlbnMiLCJzdHJpbmdGcm9tVGVybUFuZFZhcmlhYmxlIiwiZnJvbVRlcm5BbmRWYXJpYWJsZSIsInN0cmlwQnJhY2tldHNGcm9tVGVybU5vZGUiLCJ0ZXJtU3Vic3RpdHV0aW9uTm9kZUFuZFRva2VucyIsIlRlcm1TdWJzdGl0dXRpb25Ob2RlQW5kVG9rZW5zIiwiZnJvbVN0cmluZyIsImdldFRva2VucyIsIlN1YnN0aXR1dGlvbiIsInRlcm1TdHJpbmciLCJnZXRTdHJpbmciLCJ2YXJpYWJsZVN0cmluZyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFhcUJBOzs7MERBWEw7bUVBQ1M7MkRBQ2lCO3FCQUVoQjt3QkFDZ0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFMUMsSUFBTUMsZ0JBQWdCQyxJQUFBQSxnQkFBUyxFQUFDLDhCQUMxQkMsb0JBQW9CRCxJQUFBQSxnQkFBUyxFQUFDLHdDQUM5QkUsNEJBQTRCRixJQUFBQSxn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