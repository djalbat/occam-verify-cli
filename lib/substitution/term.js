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
var _shim = /*#__PURE__*/ _interop_require_default(require("../shim"));
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
                        var Term = _shim.default.Term, Variable = _shim.default.Variable, term = Term.fromTermNode(termNode, context), variable = Variable.fromVariableNode(variableNode, context), node = termSubstitutionNode, tokens = context.nodeAsTokens(node), string = stringFromTermAndVariable(term, variable);
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
                var Term = _shim.default.Term;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zdWJzdGl0dXRpb24vdGVybS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHNoaW0gZnJvbSBcIi4uL3NoaW1cIjtcbmltcG9ydCBTdWJzdGl0dXRpb24gZnJvbSBcIi4uL3N1YnN0aXR1dGlvblwiO1xuaW1wb3J0IFRlcm1TdWJzdGl0dXRpb25Ob2RlQW5kVG9rZW5zIGZyb20gXCIuLi9ub2RlQW5kVG9rZW5zL3N1YnN0aXR1dGlvbi90ZXJtXCI7XG5cbmltcG9ydCB7IG5vZGVRdWVyeSB9IGZyb20gXCIuLi91dGlsaXRpZXMvcXVlcnlcIjtcbmltcG9ydCB7IHN0cmlwQnJhY2tldHNGcm9tVGVybU5vZGUgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2JyYWNrZXRzXCI7XG5cbmNvbnN0IHRlcm1Ob2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvdGVybVN1YnN0aXR1dGlvbi90ZXJtWzBdXCIpLFxuICAgICAgdmFyaWFibGVOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvdGVybVN1YnN0aXR1dGlvbi90ZXJtWzFdL3ZhcmlhYmxlIVwiKSxcbiAgICAgIHRlcm1TdWJzdGl0dXRpb25Ob2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvc3RhdGVtZW50L3Rlcm1TdWJzdGl0dXRpb25cIik7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRlcm1TdWJzdGl0dXRpb24gZXh0ZW5kcyBTdWJzdGl0dXRpb24ge1xuICBjb25zdHJ1Y3RvcihzdHJpbmcsIG5vZGUsIHRva2VucywgdGVybSwgdmFyaWFibGUpIHtcbiAgICBzdXBlcihzdHJpbmcsIG5vZGUsIHRva2Vucyk7XG5cbiAgICB0aGlzLnRlcm0gPSB0ZXJtO1xuICAgIHRoaXMudmFyaWFibGUgPSB2YXJpYWJsZTtcbiAgfVxuXG4gIGdldFRlcm0oKSB7XG4gICAgcmV0dXJuIHRoaXMudGVybTtcbiAgfVxuXG4gIGdldFZhcmlhYmxlKCkge1xuICAgIHJldHVybiB0aGlzLnZhcmlhYmxlO1xuICB9XG5cbiAgaXNUZXJtRXF1YWxUbyh0ZXJtKSB7IHJldHVybiB0aGlzLnRlcm0uaXNFcXVhbFRvKHRlcm0pOyB9XG5cbiAgaXNWYXJpYWJsZUVxdWFsVG8odmFyaWFibGUpIHsgcmV0dXJuIHRoaXMudmFyaWFibGUuaXNFcXVhbFRvKHZhcmlhYmxlKTsgfVxuXG4gIHVuaWZ5V2l0aEVxdWl2YWxlbmNlKGVxdWl2YWxlbmNlLCBzdWJzdGl0dXRpb25zLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KSB7XG4gICAgbGV0IHVuaWZpZWRXaXRoRXF1aXZhbGVuY2U7XG5cbiAgICBjb25zdCB0ZXJtTm9kZSA9IHRoaXMudGVybS5nZXROb2RlKCksXG4gICAgICAgICAgZXF1aXZhbGVuY2VNYXRjaGVzVGVybU5vZGUgPSBlcXVpdmFsZW5jZS5tYXRjaFRlcm1Ob2RlKHRlcm1Ob2RlKTtcblxuICAgIGlmIChlcXVpdmFsZW5jZU1hdGNoZXNUZXJtTm9kZSkge1xuICAgICAgY29uc3QgdmFyaWFibGVOb2RlID0gdGhpcy52YXJpYWJsZS5nZXROb2RlKCksXG4gICAgICAgICAgICBlcXVpdmFsZW5jZU1hdGNoZXNWYXJpYWJsZU5vZGUgPSBlcXVpdmFsZW5jZS5tYXRjaFZhcmlhYmxlTm9kZSh2YXJpYWJsZU5vZGUpO1xuXG4gICAgICBpZiAoZXF1aXZhbGVuY2VNYXRjaGVzVmFyaWFibGVOb2RlKSB7XG4gICAgICAgICAgdW5pZmllZFdpdGhFcXVpdmFsZW5jZSA9IHRydWU7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdW5pZmllZFdpdGhFcXVpdmFsZW5jZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tU3RhdGVtZW50Tm9kZShzdGF0ZW1lbnROb2RlLCBjb250ZXh0KSB7XG4gICAgbGV0IHRlcm1TdWJzdGl0dXRpb24gPSBudWxsO1xuXG4gICAgY29uc3QgdGVybVN1YnN0aXR1dGlvbk5vZGUgPSB0ZXJtU3Vic3RpdHV0aW9uTm9kZVF1ZXJ5KHN0YXRlbWVudE5vZGUpO1xuXG4gICAgaWYgKHRlcm1TdWJzdGl0dXRpb25Ob2RlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCB0ZXJtTm9kZSA9IHRlcm1Ob2RlUXVlcnkodGVybVN1YnN0aXR1dGlvbk5vZGUpLFxuICAgICAgICAgICAgdmFyaWFibGVOb2RlID0gdmFyaWFibGVOb2RlUXVlcnkodGVybVN1YnN0aXR1dGlvbk5vZGUpO1xuXG4gICAgICBpZiAoKHRlcm1Ob2RlICE9PSBudWxsKSAmJiAodmFyaWFibGVOb2RlICE9PSBudWxsKSkge1xuICAgICAgICBjb25zdCB7IFRlcm0sIFZhcmlhYmxlIH0gPSBzaGltLFxuICAgICAgICAgICAgICB0ZXJtID0gVGVybS5mcm9tVGVybU5vZGUodGVybU5vZGUsIGNvbnRleHQpLFxuICAgICAgICAgICAgICB2YXJpYWJsZSA9IFZhcmlhYmxlLmZyb21WYXJpYWJsZU5vZGUodmFyaWFibGVOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgICAgICAgbm9kZSA9IHRlcm1TdWJzdGl0dXRpb25Ob2RlLCAgLy8vXG4gICAgICAgICAgICAgIHRva2VucyA9IGNvbnRleHQubm9kZUFzVG9rZW5zKG5vZGUpLFxuICAgICAgICAgICAgICBzdHJpbmcgPSBzdHJpbmdGcm9tVGVybUFuZFZhcmlhYmxlKHRlcm0sIHZhcmlhYmxlKTtcblxuICAgICAgICB0ZXJtU3Vic3RpdHV0aW9uID0gbmV3IFRlcm1TdWJzdGl0dXRpb24oc3RyaW5nLCBub2RlLCB0b2tlbnMsIHRlcm0sIHZhcmlhYmxlKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdGVybVN1YnN0aXR1dGlvbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tVGVybkFuZFZhcmlhYmxlKHRlcm0sIHZhcmlhYmxlLCBjb250ZXh0KSB7XG4gICAgbGV0IHRlcm1Ob2RlID0gdGVybS5nZXROb2RlKCk7XG5cbiAgICB0ZXJtTm9kZSA9IHN0cmlwQnJhY2tldHNGcm9tVGVybU5vZGUodGVybU5vZGUpOyAvLy9cblxuICAgIGNvbnN0IHsgVGVybSB9ID0gc2hpbTtcblxuICAgIHRlcm0gPSBUZXJtLmZyb21UZXJtTm9kZSh0ZXJtTm9kZSwgY29udGV4dCk7XG5cbiAgICBjb25zdCBzdHJpbmcgPSBzdHJpbmdGcm9tVGVybUFuZFZhcmlhYmxlKHRlcm0sIHZhcmlhYmxlKSxcbiAgICAgICAgICB0ZXJtU3Vic3RpdHV0aW9uTm9kZUFuZFRva2VucyA9IFRlcm1TdWJzdGl0dXRpb25Ob2RlQW5kVG9rZW5zLmZyb21TdHJpbmcoc3RyaW5nLCBjb250ZXh0KSxcbiAgICAgICAgICBub2RlID0gdGVybVN1YnN0aXR1dGlvbk5vZGVBbmRUb2tlbnMuZ2V0Tm9kZSgpLFxuICAgICAgICAgIHRva2VucyA9IHRlcm1TdWJzdGl0dXRpb25Ob2RlQW5kVG9rZW5zLmdldFRva2VucygpLFxuICAgICAgICAgIHRlcm1TdWJzdGl0dXRpb24gPSBuZXcgVGVybVN1YnN0aXR1dGlvbihzdHJpbmcsIG5vZGUsIHRva2VucywgdGVybSwgdmFyaWFibGUpO1xuXG4gICAgcmV0dXJuIHRlcm1TdWJzdGl0dXRpb247XG4gIH1cbn1cblxuZnVuY3Rpb24gc3RyaW5nRnJvbVRlcm1BbmRWYXJpYWJsZSh0ZXJtLCB2YXJpYWJsZSkge1xuICBjb25zdCB0ZXJtU3RyaW5nID0gdGVybS5nZXRTdHJpbmcoKSxcbiAgICAgICAgdmFyaWFibGVTdHJpbmcgPSB2YXJpYWJsZS5nZXRTdHJpbmcoKSxcbiAgICAgICAgc3RyaW5nID0gYFske3Rlcm1TdHJpbmd9IGZvciAke3ZhcmlhYmxlU3RyaW5nfV1gO1xuXG4gIHJldHVybiBzdHJpbmc7XG59XG4iXSwibmFtZXMiOlsiVGVybVN1YnN0aXR1dGlvbiIsInRlcm1Ob2RlUXVlcnkiLCJub2RlUXVlcnkiLCJ2YXJpYWJsZU5vZGVRdWVyeSIsInRlcm1TdWJzdGl0dXRpb25Ob2RlUXVlcnkiLCJzdHJpbmciLCJub2RlIiwidG9rZW5zIiwidGVybSIsInZhcmlhYmxlIiwiZ2V0VGVybSIsImdldFZhcmlhYmxlIiwiaXNUZXJtRXF1YWxUbyIsImlzRXF1YWxUbyIsImlzVmFyaWFibGVFcXVhbFRvIiwidW5pZnlXaXRoRXF1aXZhbGVuY2UiLCJlcXVpdmFsZW5jZSIsInN1YnN0aXR1dGlvbnMiLCJnZW5lcmFsQ29udGV4dCIsInNwZWNpZmljQ29udGV4dCIsInVuaWZpZWRXaXRoRXF1aXZhbGVuY2UiLCJ0ZXJtTm9kZSIsImdldE5vZGUiLCJlcXVpdmFsZW5jZU1hdGNoZXNUZXJtTm9kZSIsIm1hdGNoVGVybU5vZGUiLCJ2YXJpYWJsZU5vZGUiLCJlcXVpdmFsZW5jZU1hdGNoZXNWYXJpYWJsZU5vZGUiLCJtYXRjaFZhcmlhYmxlTm9kZSIsImZyb21TdGF0ZW1lbnROb2RlIiwic3RhdGVtZW50Tm9kZSIsImNvbnRleHQiLCJ0ZXJtU3Vic3RpdHV0aW9uIiwidGVybVN1YnN0aXR1dGlvbk5vZGUiLCJUZXJtIiwic2hpbSIsIlZhcmlhYmxlIiwiZnJvbVRlcm1Ob2RlIiwiZnJvbVZhcmlhYmxlTm9kZSIsIm5vZGVBc1Rva2VucyIsInN0cmluZ0Zyb21UZXJtQW5kVmFyaWFibGUiLCJmcm9tVGVybkFuZFZhcmlhYmxlIiwic3RyaXBCcmFja2V0c0Zyb21UZXJtTm9kZSIsInRlcm1TdWJzdGl0dXRpb25Ob2RlQW5kVG9rZW5zIiwiVGVybVN1YnN0aXR1dGlvbk5vZGVBbmRUb2tlbnMiLCJmcm9tU3RyaW5nIiwiZ2V0VG9rZW5zIiwiU3Vic3RpdHV0aW9uIiwidGVybVN0cmluZyIsImdldFN0cmluZyIsInZhcmlhYmxlU3RyaW5nIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQWFxQkE7OzsyREFYSjttRUFDUTsyREFDaUI7cUJBRWhCO3dCQUNnQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUUxQyxJQUFNQyxnQkFBZ0JDLElBQUFBLGdCQUFTLEVBQUMsOEJBQzFCQyxvQkFBb0JELElBQUFBLGdCQUFTLEVBQUMsd0NBQzlCRSw0QkFBNEJGLElB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