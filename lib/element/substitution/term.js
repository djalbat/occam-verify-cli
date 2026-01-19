"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
var _substitution = /*#__PURE__*/ _interop_require_default(require("../substitution"));
var _elements = require("../../elements");
var _context = require("../../utilities/context");
var _brackets = require("../../utilities/brackets");
var _instantiate = require("../../process/instantiate");
var _string = require("../../utilities/string");
var _element = require("../../utilities/element");
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
function _define_property(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
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
var _TermSubstitution;
var _default = (0, _elements.define)((_TermSubstitution = /*#__PURE__*/ function(Substitution) {
    _inherits(TermSubstitution, Substitution);
    function TermSubstitution(context, string, node, term, variable) {
        _class_call_check(this, TermSubstitution);
        var _this;
        _this = _call_super(this, TermSubstitution, [
            context,
            string,
            node
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
            key: "getTargetNode",
            value: function getTargetNode() {
                var variableNode = this.variable.getNode(), tergetNode = variableNode; ///
                return tergetNode;
            }
        },
        {
            key: "getReplacementNode",
            value: function getReplacementNode() {
                var termNode = this.term.getNode(), replacementNode = termNode; ///
                return replacementNode;
            }
        },
        {
            key: "isTrivial",
            value: function isTrivial() {
                var trivial = false;
                var termComparesToVaraible = this.term.compareVariable(this.variable);
                if (termComparesToVaraible) {
                    trivial = true;
                }
                return trivial;
            }
        },
        {
            key: "compareTerm",
            value: function compareTerm(term, context) {
                term = (0, _brackets.stripBracketsFromTerm)(term, context); ///
                var termEqualToTerm = this.term.isEqualTo(term), comparedToTerm = termEqualToTerm; ///
                return comparedToTerm;
            }
        },
        {
            key: "compareParameter",
            value: function compareParameter(parameter) {
                var variableComparesToParameter = this.variable.compareParameter(parameter), comparesToParameter = variableComparesToParameter; ///
                return comparesToParameter;
            }
        },
        {
            key: "validate",
            value: function validate(context) {
                var validates = false;
                var termSubstitutionString = this.getString(); ///
                context.trace("Validating the '".concat(termSubstitutionString, "' term substitution..."));
                var termSingular = this.term.isSingular();
                if (termSingular) {
                    if (this.variable !== null) {
                        var variableIdentifier = this.variable.getIdentifier(), variablePresent = context.isVariablePresentByVariableIdentifier(variableIdentifier);
                        if (variablePresent) {
                            var termNode = this.term.getNode(), variableIdentifier1 = termNode.getVariableIdentifier(), termVariableIdentifier = variableIdentifier1, termVariablePresent = context.isVariablePresentByVariableIdentifier(termVariableIdentifier);
                            if (termVariablePresent) {
                                validates = true;
                            } else {
                                context.debug("The '".concat(termSubstitutionString, "' term substitution's general term's variable is not present."));
                            }
                        } else {
                            context.debug("The '".concat(termSubstitutionString, "' term substitution's specific term's variable is not present."));
                        }
                    } else {
                        context.debug("The '".concat(termSubstitutionString, "' term substitution's general term is not singular."));
                    }
                } else {
                    context.debug("The '".concat(termSubstitutionString, "' term substitution's specific term is not singular."));
                }
                if (validates) {
                    var substititoin = this; ///
                    context.addSubstitution(substititoin);
                    context.debug("...validated the '".concat(termSubstitutionString, "' term substitution."));
                }
                return validates;
            }
        }
    ], [
        {
            key: "fromStatement",
            value: function fromStatement(statement, context) {
                var statementNode = statement.getNode(), termSubstitution = (0, _element.termSubstitutionFromStatementNode)(statementNode, context);
                return termSubstitution;
            }
        },
        {
            key: "fromTermAndVariable",
            value: function fromTermAndVariable(term, variable, context) {
                term = (0, _brackets.stripBracketsFromTerm)(term, context); ///
                return (0, _context.literally)(function(context) {
                    var termSubstitutionString = (0, _string.termSubstitutionStringFromTermAndVariable)(term, variable), string = termSubstitutionString, termSubstitutionNode = (0, _instantiate.instantiateTermSubstitution)(string, context), termSubstitution = (0, _element.termSubstitutionFromTermSubstitutionNode)(termSubstitutionNode, context);
                    return termSubstitution;
                }, context);
            }
        }
    ]);
    return TermSubstitution;
}(_substitution.default), _define_property(_TermSubstitution, "name", "TermSubstitution"), _TermSubstitution));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9lbGVtZW50L3N1YnN0aXR1dGlvbi90ZXJtLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgU3Vic3RpdHV0aW9uIGZyb20gXCIuLi9zdWJzdGl0dXRpb25cIjtcblxuaW1wb3J0IHsgZGVmaW5lIH0gZnJvbSBcIi4uLy4uL2VsZW1lbnRzXCI7XG5pbXBvcnQgeyBsaXRlcmFsbHkgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL2NvbnRleHRcIjtcbmltcG9ydCB7IHN0cmlwQnJhY2tldHNGcm9tVGVybSB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvYnJhY2tldHNcIjtcbmltcG9ydCB7IGluc3RhbnRpYXRlVGVybVN1YnN0aXR1dGlvbiB9IGZyb20gXCIuLi8uLi9wcm9jZXNzL2luc3RhbnRpYXRlXCI7XG5pbXBvcnQgeyB0ZXJtU3Vic3RpdHV0aW9uU3RyaW5nRnJvbVRlcm1BbmRWYXJpYWJsZSB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvc3RyaW5nXCI7XG5pbXBvcnQgeyB0ZXJtU3Vic3RpdHV0aW9uRnJvbVN0YXRlbWVudE5vZGUsIHRlcm1TdWJzdGl0dXRpb25Gcm9tVGVybVN1YnN0aXR1dGlvbk5vZGUgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL2VsZW1lbnRcIjtcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lKGNsYXNzIFRlcm1TdWJzdGl0dXRpb24gZXh0ZW5kcyBTdWJzdGl0dXRpb24ge1xuICBjb25zdHJ1Y3Rvcihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIHRlcm0sIHZhcmlhYmxlKSB7XG4gICAgc3VwZXIoY29udGV4dCwgc3RyaW5nLCBub2RlKTtcblxuICAgIHRoaXMudGVybSA9IHRlcm07XG4gICAgdGhpcy52YXJpYWJsZSA9IHZhcmlhYmxlO1xuICB9XG5cbiAgZ2V0VGVybSgpIHtcbiAgICByZXR1cm4gdGhpcy50ZXJtO1xuICB9XG5cbiAgZ2V0VmFyaWFibGUoKSB7XG4gICAgcmV0dXJuIHRoaXMudmFyaWFibGU7XG4gIH1cblxuICBnZXRUYXJnZXROb2RlKCkge1xuICAgIGNvbnN0IHZhcmlhYmxlTm9kZSA9IHRoaXMudmFyaWFibGUuZ2V0Tm9kZSgpLFxuICAgICAgICAgIHRlcmdldE5vZGUgPSB2YXJpYWJsZU5vZGU7IC8vL1xuXG4gICAgcmV0dXJuIHRlcmdldE5vZGU7XG4gIH1cblxuICBnZXRSZXBsYWNlbWVudE5vZGUoKSB7XG4gICAgY29uc3QgdGVybU5vZGUgPSB0aGlzLnRlcm0uZ2V0Tm9kZSgpLFxuICAgICAgICAgIHJlcGxhY2VtZW50Tm9kZSA9IHRlcm1Ob2RlOyAvLy9cblxuICAgIHJldHVybiByZXBsYWNlbWVudE5vZGU7XG4gIH1cblxuICBpc1RyaXZpYWwoKSB7XG4gICAgbGV0IHRyaXZpYWwgPSBmYWxzZTtcblxuICAgIGNvbnN0IHRlcm1Db21wYXJlc1RvVmFyYWlibGUgPSB0aGlzLnRlcm0uY29tcGFyZVZhcmlhYmxlKHRoaXMudmFyaWFibGUpO1xuXG4gICAgaWYgKHRlcm1Db21wYXJlc1RvVmFyYWlibGUpIHtcbiAgICAgIHRyaXZpYWwgPSB0cnVlO1xuICAgIH1cblxuICAgIHJldHVybiB0cml2aWFsO1xuICB9XG5cbiAgY29tcGFyZVRlcm0odGVybSwgY29udGV4dCkge1xuICAgIHRlcm0gPSBzdHJpcEJyYWNrZXRzRnJvbVRlcm0odGVybSwgY29udGV4dCk7IC8vL1xuXG4gICAgY29uc3QgdGVybUVxdWFsVG9UZXJtID0gdGhpcy50ZXJtLmlzRXF1YWxUbyh0ZXJtKSxcbiAgICAgICAgICBjb21wYXJlZFRvVGVybSA9IHRlcm1FcXVhbFRvVGVybTsgLy8vXG5cbiAgICByZXR1cm4gY29tcGFyZWRUb1Rlcm07XG4gIH1cblxuICBjb21wYXJlUGFyYW1ldGVyKHBhcmFtZXRlcikge1xuICAgIGNvbnN0IHZhcmlhYmxlQ29tcGFyZXNUb1BhcmFtZXRlciA9IHRoaXMudmFyaWFibGUuY29tcGFyZVBhcmFtZXRlcihwYXJhbWV0ZXIpLFxuICAgICAgICAgIGNvbXBhcmVzVG9QYXJhbWV0ZXIgPSB2YXJpYWJsZUNvbXBhcmVzVG9QYXJhbWV0ZXI7ICAvLy9cblxuICAgIHJldHVybiBjb21wYXJlc1RvUGFyYW1ldGVyO1xuICB9XG5cbiAgdmFsaWRhdGUoY29udGV4dCkge1xuICAgIGxldCB2YWxpZGF0ZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IHRlcm1TdWJzdGl0dXRpb25TdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWYWxpZGF0aW5nIHRoZSAnJHt0ZXJtU3Vic3RpdHV0aW9uU3RyaW5nfScgdGVybSBzdWJzdGl0dXRpb24uLi5gKTtcblxuICAgIGNvbnN0IHRlcm1TaW5ndWxhciA9IHRoaXMudGVybS5pc1Npbmd1bGFyKCk7XG5cbiAgICBpZiAodGVybVNpbmd1bGFyKSB7XG4gICAgICBpZiAodGhpcy52YXJpYWJsZSAhPT0gbnVsbCkge1xuICAgICAgICBjb25zdCB2YXJpYWJsZUlkZW50aWZpZXIgPSB0aGlzLnZhcmlhYmxlLmdldElkZW50aWZpZXIoKSxcbiAgICAgICAgICAgICAgdmFyaWFibGVQcmVzZW50ID0gY29udGV4dC5pc1ZhcmlhYmxlUHJlc2VudEJ5VmFyaWFibGVJZGVudGlmaWVyKHZhcmlhYmxlSWRlbnRpZmllcik7XG5cbiAgICAgICAgaWYgKHZhcmlhYmxlUHJlc2VudCkge1xuICAgICAgICAgIGNvbnN0IHRlcm1Ob2RlID0gdGhpcy50ZXJtLmdldE5vZGUoKSxcbiAgICAgICAgICAgICAgICB2YXJpYWJsZUlkZW50aWZpZXIgPSB0ZXJtTm9kZS5nZXRWYXJpYWJsZUlkZW50aWZpZXIoKSxcbiAgICAgICAgICAgICAgICB0ZXJtVmFyaWFibGVJZGVudGlmaWVyID0gdmFyaWFibGVJZGVudGlmaWVyLCAgLy8vXG4gICAgICAgICAgICAgICAgdGVybVZhcmlhYmxlUHJlc2VudCA9IGNvbnRleHQuaXNWYXJpYWJsZVByZXNlbnRCeVZhcmlhYmxlSWRlbnRpZmllcih0ZXJtVmFyaWFibGVJZGVudGlmaWVyKTtcblxuICAgICAgICAgIGlmICh0ZXJtVmFyaWFibGVQcmVzZW50KSB7XG4gICAgICAgICAgICB2YWxpZGF0ZXMgPSB0cnVlO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb250ZXh0LmRlYnVnKGBUaGUgJyR7dGVybVN1YnN0aXR1dGlvblN0cmluZ30nIHRlcm0gc3Vic3RpdHV0aW9uJ3MgZ2VuZXJhbCB0ZXJtJ3MgdmFyaWFibGUgaXMgbm90IHByZXNlbnQuYCk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvbnRleHQuZGVidWcoYFRoZSAnJHt0ZXJtU3Vic3RpdHV0aW9uU3RyaW5nfScgdGVybSBzdWJzdGl0dXRpb24ncyBzcGVjaWZpYyB0ZXJtJ3MgdmFyaWFibGUgaXMgbm90IHByZXNlbnQuYCk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnRleHQuZGVidWcoYFRoZSAnJHt0ZXJtU3Vic3RpdHV0aW9uU3RyaW5nfScgdGVybSBzdWJzdGl0dXRpb24ncyBnZW5lcmFsIHRlcm0gaXMgbm90IHNpbmd1bGFyLmApO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGBUaGUgJyR7dGVybVN1YnN0aXR1dGlvblN0cmluZ30nIHRlcm0gc3Vic3RpdHV0aW9uJ3Mgc3BlY2lmaWMgdGVybSBpcyBub3Qgc2luZ3VsYXIuYCk7XG4gICAgfVxuXG4gICAgaWYgKHZhbGlkYXRlcykge1xuICAgICAgY29uc3Qgc3Vic3RpdGl0b2luID0gdGhpczsgIC8vL1xuXG4gICAgICBjb250ZXh0LmFkZFN1YnN0aXR1dGlvbihzdWJzdGl0aXRvaW4pO1xuXG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52YWxpZGF0ZWQgdGhlICcke3Rlcm1TdWJzdGl0dXRpb25TdHJpbmd9JyB0ZXJtIHN1YnN0aXR1dGlvbi5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmFsaWRhdGVzO1xuICB9XG5cbiAgc3RhdGljIG5hbWUgPSBcIlRlcm1TdWJzdGl0dXRpb25cIjtcblxuICBzdGF0aWMgZnJvbVN0YXRlbWVudChzdGF0ZW1lbnQsIGNvbnRleHQpIHtcbiAgICBjb25zdCBzdGF0ZW1lbnROb2RlID0gc3RhdGVtZW50LmdldE5vZGUoKSxcbiAgICAgICAgICB0ZXJtU3Vic3RpdHV0aW9uID0gdGVybVN1YnN0aXR1dGlvbkZyb21TdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUsIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIHRlcm1TdWJzdGl0dXRpb247XG4gIH1cblxuICBzdGF0aWMgZnJvbVRlcm1BbmRWYXJpYWJsZSh0ZXJtLCB2YXJpYWJsZSwgY29udGV4dCkge1xuICAgIHRlcm0gPSBzdHJpcEJyYWNrZXRzRnJvbVRlcm0odGVybSwgY29udGV4dCk7IC8vL1xuXG4gICAgcmV0dXJuIGxpdGVyYWxseSgoY29udGV4dCkgPT4ge1xuICAgICAgY29uc3QgdGVybVN1YnN0aXR1dGlvblN0cmluZyA9IHRlcm1TdWJzdGl0dXRpb25TdHJpbmdGcm9tVGVybUFuZFZhcmlhYmxlKHRlcm0sIHZhcmlhYmxlKSxcbiAgICAgICAgICAgIHN0cmluZyA9IHRlcm1TdWJzdGl0dXRpb25TdHJpbmcsICAvLy9cbiAgICAgICAgICAgIHRlcm1TdWJzdGl0dXRpb25Ob2RlID0gaW5zdGFudGlhdGVUZXJtU3Vic3RpdHV0aW9uKHN0cmluZywgY29udGV4dCksXG4gICAgICAgICAgICB0ZXJtU3Vic3RpdHV0aW9uID0gdGVybVN1YnN0aXR1dGlvbkZyb21UZXJtU3Vic3RpdHV0aW9uTm9kZSh0ZXJtU3Vic3RpdHV0aW9uTm9kZSwgY29udGV4dCk7XG5cbiAgICAgIHJldHVybiB0ZXJtU3Vic3RpdHV0aW9uO1xuICAgIH0sIGNvbnRleHQpO1xuICB9XG59KTtcbiJdLCJuYW1lcyI6WyJkZWZpbmUiLCJUZXJtU3Vic3RpdHV0aW9uIiwiY29udGV4dCIsInN0cmluZyIsIm5vZGUiLCJ0ZXJtIiwidmFyaWFibGUiLCJnZXRUZXJtIiwiZ2V0VmFyaWFibGUiLCJnZXRUYXJnZXROb2RlIiwidmFyaWFibGVOb2RlIiwiZ2V0Tm9kZSIsInRlcmdldE5vZGUiLCJnZXRSZXBsYWNlbWVudE5vZGUiLCJ0ZXJtTm9kZSIsInJlcGxhY2VtZW50Tm9kZSIsImlzVHJpdmlhbCIsInRyaXZpYWwiLCJ0ZXJtQ29tcGFyZXNUb1ZhcmFpYmxlIiwiY29tcGFyZVZhcmlhYmxlIiwiY29tcGFyZVRlcm0iLCJzdHJpcEJyYWNrZXRzRnJvbVRlcm0iLCJ0ZXJtRXF1YWxUb1Rlcm0iLCJpc0VxdWFsVG8iLCJjb21wYXJlZFRvVGVybSIsImNvbXBhcmVQYXJhbWV0ZXIiLCJwYXJhbWV0ZXIiLCJ2YXJpYWJsZUNvbXBhcmVzVG9QYXJhbWV0ZXIiLCJjb21wYXJlc1RvUGFyYW1ldGVyIiwidmFsaWRhdGUiLCJ2YWxpZGF0ZXMiLCJ0ZXJtU3Vic3RpdHV0aW9uU3RyaW5nIiwiZ2V0U3RyaW5nIiwidHJhY2UiLCJ0ZXJtU2luZ3VsYXIiLCJpc1Npbmd1bGFyIiwidmFyaWFibGVJZGVudGlmaWVyIiwiZ2V0SWRlbnRpZmllciIsInZhcmlhYmxlUHJlc2VudCIsImlzVmFyaWFibGVQcmVzZW50QnlWYXJpYWJsZUlkZW50aWZpZXIiLCJnZXRWYXJpYWJsZUlkZW50aWZpZXIiLCJ0ZXJtVmFyaWFibGVJZGVudGlmaWVyIiwidGVybVZhcmlhYmxlUHJlc2VudCIsImRlYnVnIiwic3Vic3RpdGl0b2luIiwiYWRkU3Vic3RpdHV0aW9uIiwiZnJvbVN0YXRlbWVudCIsInN0YXRlbWVudCIsInN0YXRlbWVudE5vZGUiLCJ0ZXJtU3Vic3RpdHV0aW9uIiwidGVybVN1YnN0aXR1dGlvbkZyb21TdGF0ZW1lbnROb2RlIiwiZnJvbVRlcm1BbmRWYXJpYWJsZSIsImxpdGVyYWxseSIsInRlcm1TdWJzdGl0dXRpb25TdHJpbmdGcm9tVGVybUFuZFZhcmlhYmxlIiwidGVybVN1YnN0aXR1dGlvbk5vZGUiLCJpbnN0YW50aWF0ZVRlcm1TdWJzdGl0dXRpb24iLCJ0ZXJtU3Vic3RpdHV0aW9uRnJvbVRlcm1TdWJzdGl0dXRpb25Ob2RlIiwiU3Vic3RpdHV0aW9uIiwibmFtZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBV0E7OztlQUFBOzs7bUVBVHlCO3dCQUVGO3VCQUNHO3dCQUNZOzJCQUNNO3NCQUNjO3VCQUNrQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRTVGLFdBQWVBLElBQUFBLGdCQUFNLHFDQUFDOzthQUFNQyxpQkFDZEMsT0FBTyxFQUFFQyxNQUFNLEVBQUVDLElBQUksRUFBRUMsSUFBSSxFQUFFQyxRQUFRO2dDQUR2Qkw7O2dCQUV4QixrQkFGd0JBO1lBRWxCQztZQUFTQztZQUFRQzs7UUFFdkIsTUFBS0MsSUFBSSxHQUFHQTtRQUNaLE1BQUtDLFFBQVEsR0FBR0E7Ozs7O1lBR2xCQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNGLElBQUk7WUFDbEI7OztZQUVBRyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNGLFFBQVE7WUFDdEI7OztZQUVBRyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTUMsZUFBZSxJQUFJLENBQUNKLFFBQVEsQ0FBQ0ssT0FBTyxJQUNwQ0MsYUFBYUYsY0FBYyxHQUFHO2dCQUVwQyxPQUFPRTtZQUNUOzs7WUFFQUMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1DLFdBQVcsSUFBSSxDQUFDVCxJQUFJLENBQUNNLE9BQU8sSUFDNUJJLGtCQUFrQkQsVUFBVSxHQUFHO2dCQUVyQyxPQUFPQztZQUNUOzs7WUFFQUMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQUlDLFVBQVU7Z0JBRWQsSUFBTUMseUJBQXlCLElBQUksQ0FBQ2IsSUFBSSxDQUFDYyxlQUFlLENBQUMsSUFBSSxDQUFDYixRQUFRO2dCQUV0RSxJQUFJWSx3QkFBd0I7b0JBQzFCRCxV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