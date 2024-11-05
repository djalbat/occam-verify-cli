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
var _verification = require("../utilities/verification");
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
                term = (0, _verification.stripBracketsFromTerm)(term); ///
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zdWJzdGl0dXRpb24vdGVybS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IGRvbSBmcm9tIFwiLi4vZG9tXCI7XG5pbXBvcnQgU3Vic3RpdHV0aW9uIGZyb20gXCIuLi9zdWJzdGl0dXRpb25cIjtcbmltcG9ydCBUZXJtU3Vic3RpdHV0aW9uTm9kZUFuZFRva2VucyBmcm9tIFwiLi4vbm9kZUFuZFRva2Vucy9zdWJzdGl0dXRpb24vdGVybVwiO1xuXG5pbXBvcnQgeyBub2RlUXVlcnkgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5pbXBvcnQgeyBzdHJpcEJyYWNrZXRzRnJvbVRlcm0gfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3ZlcmlmaWNhdGlvblwiO1xuaW1wb3J0IHsgc3RyaXBCcmFja2V0c0Zyb21UZXJtTm9kZSB9IGZyb20gXCIuLi91dGlsaXRpZXMvYnJhY2tldHNcIjtcblxuY29uc3QgdGVybU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi90ZXJtU3Vic3RpdHV0aW9uL3Rlcm1bMF1cIiksXG4gICAgICB2YXJpYWJsZU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi90ZXJtU3Vic3RpdHV0aW9uL3Rlcm1bMV0vdmFyaWFibGUhXCIpLFxuICAgICAgdGVybVN1YnN0aXR1dGlvbk5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9zdGF0ZW1lbnQvdGVybVN1YnN0aXR1dGlvblwiKTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGVybVN1YnN0aXR1dGlvbiBleHRlbmRzIFN1YnN0aXR1dGlvbiB7XG4gIGNvbnN0cnVjdG9yKHN0cmluZywgbm9kZSwgdG9rZW5zLCB0ZXJtLCB2YXJpYWJsZSkge1xuICAgIHN1cGVyKHN0cmluZywgbm9kZSwgdG9rZW5zKTtcblxuICAgIHRoaXMudGVybSA9IHRlcm07XG4gICAgdGhpcy52YXJpYWJsZSA9IHZhcmlhYmxlO1xuICB9XG5cbiAgZ2V0VGVybSgpIHtcbiAgICByZXR1cm4gdGhpcy50ZXJtO1xuICB9XG5cbiAgZ2V0VmFyaWFibGUoKSB7XG4gICAgcmV0dXJuIHRoaXMudmFyaWFibGU7XG4gIH1cblxuICBpc1Rlcm1FcXVhbFRvKHRlcm0sIGNvbnRleHQpIHtcbiAgICB0ZXJtID0gc3RyaXBCcmFja2V0c0Zyb21UZXJtKHRlcm0pOyAvLy9cblxuICAgIGNvbnN0IHRlcm1FcXVhbFRvID0gdGhpcy50ZXJtLmlzRXF1YWxUbyh0ZXJtKTtcblxuICAgIHJldHVybiB0ZXJtRXF1YWxUbztcbiAgfVxuXG4gIGlzVmFyaWFibGVFcXVhbFRvKHZhcmlhYmxlKSB7IHJldHVybiB0aGlzLnZhcmlhYmxlLmlzRXF1YWxUbyh2YXJpYWJsZSk7IH1cblxuICB1bmlmeVdpdGhFcXVpdmFsZW5jZShlcXVpdmFsZW5jZSkge1xuICAgIGxldCB1bmlmaWVkV2l0aEVxdWl2YWxlbmNlO1xuXG4gICAgY29uc3QgdGVybU5vZGUgPSB0aGlzLnRlcm0uZ2V0Tm9kZSgpLFxuICAgICAgICAgIGVxdWl2YWxlbmNlTWF0Y2hlc1Rlcm1Ob2RlID0gZXF1aXZhbGVuY2UubWF0Y2hUZXJtTm9kZSh0ZXJtTm9kZSk7XG5cbiAgICBpZiAoZXF1aXZhbGVuY2VNYXRjaGVzVGVybU5vZGUpIHtcbiAgICAgIGNvbnN0IHZhcmlhYmxlTm9kZSA9IHRoaXMudmFyaWFibGUuZ2V0Tm9kZSgpLFxuICAgICAgICAgICAgZXF1aXZhbGVuY2VNYXRjaGVzVmFyaWFibGVOb2RlID0gZXF1aXZhbGVuY2UubWF0Y2hWYXJpYWJsZU5vZGUodmFyaWFibGVOb2RlKTtcblxuICAgICAgaWYgKGVxdWl2YWxlbmNlTWF0Y2hlc1ZhcmlhYmxlTm9kZSkge1xuICAgICAgICAgIHVuaWZpZWRXaXRoRXF1aXZhbGVuY2UgPSB0cnVlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHVuaWZpZWRXaXRoRXF1aXZhbGVuY2U7XG4gIH1cblxuICBzdGF0aWMgZnJvbVN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSwgY29udGV4dCkge1xuICAgIGxldCB0ZXJtU3Vic3RpdHV0aW9uID0gbnVsbDtcblxuICAgIGNvbnN0IHRlcm1TdWJzdGl0dXRpb25Ob2RlID0gdGVybVN1YnN0aXR1dGlvbk5vZGVRdWVyeShzdGF0ZW1lbnROb2RlKTtcblxuICAgIGlmICh0ZXJtU3Vic3RpdHV0aW9uTm9kZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgdGVybU5vZGUgPSB0ZXJtTm9kZVF1ZXJ5KHRlcm1TdWJzdGl0dXRpb25Ob2RlKSxcbiAgICAgICAgICAgIHZhcmlhYmxlTm9kZSA9IHZhcmlhYmxlTm9kZVF1ZXJ5KHRlcm1TdWJzdGl0dXRpb25Ob2RlKTtcblxuICAgICAgaWYgKCh0ZXJtTm9kZSAhPT0gbnVsbCkgJiYgKHZhcmlhYmxlTm9kZSAhPT0gbnVsbCkpIHtcbiAgICAgICAgY29uc3QgeyBUZXJtLCBWYXJpYWJsZSB9ID0gZG9tLFxuICAgICAgICAgICAgICB0ZXJtID0gVGVybS5mcm9tVGVybU5vZGUodGVybU5vZGUsIGNvbnRleHQpLFxuICAgICAgICAgICAgICB2YXJpYWJsZSA9IFZhcmlhYmxlLmZyb21WYXJpYWJsZU5vZGUodmFyaWFibGVOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgICAgICAgbm9kZSA9IHRlcm1TdWJzdGl0dXRpb25Ob2RlLCAgLy8vXG4gICAgICAgICAgICAgIHRva2VucyA9IGNvbnRleHQubm9kZUFzVG9rZW5zKG5vZGUpLFxuICAgICAgICAgICAgICBzdHJpbmcgPSBzdHJpbmdGcm9tVGVybUFuZFZhcmlhYmxlKHRlcm0sIHZhcmlhYmxlKTtcblxuICAgICAgICB0ZXJtU3Vic3RpdHV0aW9uID0gbmV3IFRlcm1TdWJzdGl0dXRpb24oc3RyaW5nLCBub2RlLCB0b2tlbnMsIHRlcm0sIHZhcmlhYmxlKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdGVybVN1YnN0aXR1dGlvbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tVGVybkFuZFZhcmlhYmxlKHRlcm0sIHZhcmlhYmxlLCBjb250ZXh0KSB7XG4gICAgbGV0IHRlcm1Ob2RlID0gdGVybS5nZXROb2RlKCk7XG5cbiAgICB0ZXJtTm9kZSA9IHN0cmlwQnJhY2tldHNGcm9tVGVybU5vZGUodGVybU5vZGUpOyAvLy9cblxuICAgIGNvbnN0IHsgVGVybSB9ID0gZG9tO1xuXG4gICAgdGVybSA9IFRlcm0uZnJvbVRlcm1Ob2RlKHRlcm1Ob2RlLCBjb250ZXh0KTtcblxuICAgIGNvbnN0IHN0cmluZyA9IHN0cmluZ0Zyb21UZXJtQW5kVmFyaWFibGUodGVybSwgdmFyaWFibGUpLFxuICAgICAgICAgIHRlcm1TdWJzdGl0dXRpb25Ob2RlQW5kVG9rZW5zID0gVGVybVN1YnN0aXR1dGlvbk5vZGVBbmRUb2tlbnMuZnJvbVN0cmluZyhzdHJpbmcsIGNvbnRleHQpLFxuICAgICAgICAgIG5vZGUgPSB0ZXJtU3Vic3RpdHV0aW9uTm9kZUFuZFRva2Vucy5nZXROb2RlKCksXG4gICAgICAgICAgdG9rZW5zID0gdGVybVN1YnN0aXR1dGlvbk5vZGVBbmRUb2tlbnMuZ2V0VG9rZW5zKCksXG4gICAgICAgICAgdGVybVN1YnN0aXR1dGlvbiA9IG5ldyBUZXJtU3Vic3RpdHV0aW9uKHN0cmluZywgbm9kZSwgdG9rZW5zLCB0ZXJtLCB2YXJpYWJsZSk7XG5cbiAgICByZXR1cm4gdGVybVN1YnN0aXR1dGlvbjtcbiAgfVxufVxuXG5mdW5jdGlvbiBzdHJpbmdGcm9tVGVybUFuZFZhcmlhYmxlKHRlcm0sIHZhcmlhYmxlKSB7XG4gIGNvbnN0IHRlcm1TdHJpbmcgPSB0ZXJtLmdldFN0cmluZygpLFxuICAgICAgICB2YXJpYWJsZVN0cmluZyA9IHZhcmlhYmxlLmdldFN0cmluZygpLFxuICAgICAgICBzdHJpbmcgPSBgWyR7dGVybVN0cmluZ30gZm9yICR7dmFyaWFibGVTdHJpbmd9XWA7XG5cbiAgcmV0dXJuIHN0cmluZztcbn1cbiJdLCJuYW1lcyI6WyJUZXJtU3Vic3RpdHV0aW9uIiwidGVybU5vZGVRdWVyeSIsIm5vZGVRdWVyeSIsInZhcmlhYmxlTm9kZVF1ZXJ5IiwidGVybVN1YnN0aXR1dGlvbk5vZGVRdWVyeSIsInN0cmluZyIsIm5vZGUiLCJ0b2tlbnMiLCJ0ZXJtIiwidmFyaWFibGUiLCJnZXRUZXJtIiwiZ2V0VmFyaWFibGUiLCJpc1Rlcm1FcXVhbFRvIiwiY29udGV4dCIsInN0cmlwQnJhY2tldHNGcm9tVGVybSIsInRlcm1FcXVhbFRvIiwiaXNFcXVhbFRvIiwiaXNWYXJpYWJsZUVxdWFsVG8iLCJ1bmlmeVdpdGhFcXVpdmFsZW5jZSIsImVxdWl2YWxlbmNlIiwidW5pZmllZFdpdGhFcXVpdmFsZW5jZSIsInRlcm1Ob2RlIiwiZ2V0Tm9kZSIsImVxdWl2YWxlbmNlTWF0Y2hlc1Rlcm1Ob2RlIiwibWF0Y2hUZXJtTm9kZSIsInZhcmlhYmxlTm9kZSIsImVxdWl2YWxlbmNlTWF0Y2hlc1ZhcmlhYmxlTm9kZSIsIm1hdGNoVmFyaWFibGVOb2RlIiwiZnJvbVN0YXRlbWVudE5vZGUiLCJzdGF0ZW1lbnROb2RlIiwidGVybVN1YnN0aXR1dGlvbiIsInRlcm1TdWJzdGl0dXRpb25Ob2RlIiwiVGVybSIsImRvbSIsIlZhcmlhYmxlIiwiZnJvbVRlcm1Ob2RlIiwiZnJvbVZhcmlhYmxlTm9kZSIsIm5vZGVBc1Rva2VucyIsInN0cmluZ0Zyb21UZXJtQW5kVmFyaWFibGUiLCJmcm9tVGVybkFuZFZhcmlhYmxlIiwic3RyaXBCcmFja2V0c0Zyb21UZXJtTm9kZSIsInRlcm1TdWJzdGl0dXRpb25Ob2RlQW5kVG9rZW5zIiwiVGVybVN1YnN0aXR1dGlvbk5vZGVBbmRUb2tlbnMiLCJmcm9tU3RyaW5nIiwiZ2V0VG9rZW5zIiwiU3Vic3RpdHV0aW9uIiwidGVybVN0cmluZyIsImdldFN0cmluZyIsInZhcmlhYmxlU3RyaW5nIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQWNxQkE7OzswREFaTDttRUFDUzsyREFDaUI7cUJBRWhCOzRCQUNZO3dCQUNJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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