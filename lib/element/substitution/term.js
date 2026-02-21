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
    function TermSubstitution(context, string, node, targetTerm, replacementTerm) {
        _class_call_check(this, TermSubstitution);
        var _this;
        _this = _call_super(this, TermSubstitution, [
            context,
            string,
            node
        ]);
        _this.targetTerm = targetTerm;
        _this.replacementTerm = replacementTerm;
        return _this;
    }
    _create_class(TermSubstitution, [
        {
            key: "getTargetTerm",
            value: function getTargetTerm() {
                return this.targetTerm;
            }
        },
        {
            key: "getReplacementTerm",
            value: function getReplacementTerm() {
                return this.replacementTerm;
            }
        },
        {
            key: "getTermSubstitutionNode",
            value: function getTermSubstitutionNode() {
                var node = this.getNode(), termSubstitutionNode = node; ///
                return termSubstitutionNode;
            }
        },
        {
            key: "getTargetNode",
            value: function getTargetNode() {
                var targetTermNode = this.targetTerm.getNode(), tergetNode = targetTermNode; ///
                return tergetNode;
            }
        },
        {
            key: "getReplacementNode",
            value: function getReplacementNode() {
                var replacementTermNode = this.replacementTerm.getNode(), replacementNode = replacementTermNode; ///
                return replacementNode;
            }
        },
        {
            key: "getVariableIdentifier",
            value: function getVariableIdentifier() {
                return this.targetTerm.getVariableIdentifier();
            }
        },
        {
            key: "compareVariableIdentifier",
            value: function compareVariableIdentifier(variableIdentifier) {
                return this.targetTerm.compareVariableIdentifier(variableIdentifier);
            }
        },
        {
            key: "isTrivial",
            value: function isTrivial() {
                var targetTermEqualToReplacementTerm = this.targetTerm.isEqualTo(this.replacementTerm), trivial = targetTermEqualToReplacementTerm; ///
                return trivial;
            }
        },
        {
            key: "compareTerm",
            value: function compareTerm(term, context) {
                term = (0, _brackets.stripBracketsFromTerm)(term, context); ///
                var termEqualToReplacementTerm = this.replacementTerm.isEqualTo(term), comparedToTerm = termEqualToReplacementTerm; ///
                return comparedToTerm;
            }
        },
        {
            key: "compareParameter",
            value: function compareParameter(parameter) {
                var targetTermComparesToParameter = this.targetTerm.compareParameter(parameter), comparesToParameter = targetTermComparesToParameter; ///
                return comparesToParameter;
            }
        },
        {
            key: "validate",
            value: function validate(generalContext, specificContext) {
                var termSubstitution = null;
                var context = this.getContext();
                specificContext = context; ///
                var termSubstitutionString = this.getString(); ///
                context.trace("Validating the '".concat(termSubstitutionString, "' term substitution..."));
                var validSubstitution = this.findValidSubstiution(context);
                if (validSubstitution) {
                    termSubstitution = validSubstitution; ///
                    context.debug("...the '".concat(termSubstitutionString, "' term substitution is alrady valid."));
                } else {
                    var validates = false;
                    var targetTermValidates = this.validateTargetTerm(generalContext, specificContext);
                    if (targetTermValidates) {
                        var replacementTermValidates = this.validateReplacementTerm(generalContext, specificContext);
                        if (replacementTermValidates) {
                            validates = true;
                        }
                    }
                    if (validates) {
                        var substitution = this; ///
                        termSubstitution = substitution; ///
                        context.addSubstitution(substitution);
                        context.debug("...validated the '".concat(termSubstitutionString, "' term substitution."));
                    }
                }
                return termSubstitution;
            }
        },
        {
            key: "validateTargetTerm",
            value: function validateTargetTerm(generalContext, specificContext) {
                var targetTermValidates = false;
                var context = generalContext, targetTermString = this.targetTerm.getString(), termSubstitutionString = this.getString(); ///
                context.trace("Validating the '".concat(termSubstitutionString, "' term subtitution's '").concat(targetTermString, "' target term..."));
                var targetTermSingular = this.targetTerm.isSingular();
                if (targetTermSingular) {
                    var targetTerm = this.targetTerm.validate(context, function() {
                        var validatesForwards = true;
                        return validatesForwards;
                    });
                    if (targetTerm !== null) {
                        this.targetTerm = targetTerm;
                        targetTermValidates = true;
                    }
                } else {
                    context.debug("The '".concat(termSubstitutionString, "' term subtitution's '").concat(targetTermString, "' target term is not singular."));
                }
                if (targetTermValidates) {
                    context.debug("...validated the '".concat(termSubstitutionString, "' term subtitution's '").concat(targetTermString, "' target term..."));
                }
                return targetTermValidates;
            }
        },
        {
            key: "validateReplacementTerm",
            value: function validateReplacementTerm(generalContext, specificContext) {
                var replacementTermValidates = false;
                var context = specificContext, replacementTermString = this.replacementTerm.getString(), termSubstitutionString = this.getString(); ///
                context.trace("Validating the '".concat(termSubstitutionString, "' term subtitution's '").concat(replacementTermString, "' replacement term..."));
                var replacementTerm = this.replacementTerm.validate(context, function() {
                    var validatesForwards = true;
                    return validatesForwards;
                });
                if (replacementTerm !== null) {
                    this.replacementTerm = replacementTerm;
                    replacementTermValidates = true;
                }
                if (replacementTermValidates) {
                    context.debug("...validated the '".concat(termSubstitutionString, "' term subtitution's '").concat(replacementTermString, "' replacement term..."));
                }
                return replacementTermValidates;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9lbGVtZW50L3N1YnN0aXR1dGlvbi90ZXJtLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgU3Vic3RpdHV0aW9uIGZyb20gXCIuLi9zdWJzdGl0dXRpb25cIjtcblxuaW1wb3J0IHsgZGVmaW5lIH0gZnJvbSBcIi4uLy4uL2VsZW1lbnRzXCI7XG5pbXBvcnQgeyBsaXRlcmFsbHkgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL2NvbnRleHRcIjtcbmltcG9ydCB7IHN0cmlwQnJhY2tldHNGcm9tVGVybSB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvYnJhY2tldHNcIjtcbmltcG9ydCB7IGluc3RhbnRpYXRlVGVybVN1YnN0aXR1dGlvbiB9IGZyb20gXCIuLi8uLi9wcm9jZXNzL2luc3RhbnRpYXRlXCI7XG5pbXBvcnQgeyB0ZXJtU3Vic3RpdHV0aW9uU3RyaW5nRnJvbVRlcm1BbmRWYXJpYWJsZSB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvc3RyaW5nXCI7XG5pbXBvcnQgeyB0ZXJtU3Vic3RpdHV0aW9uRnJvbVN0YXRlbWVudE5vZGUsIHRlcm1TdWJzdGl0dXRpb25Gcm9tVGVybVN1YnN0aXR1dGlvbk5vZGUgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL2VsZW1lbnRcIjtcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lKGNsYXNzIFRlcm1TdWJzdGl0dXRpb24gZXh0ZW5kcyBTdWJzdGl0dXRpb24ge1xuICBjb25zdHJ1Y3Rvcihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIHRhcmdldFRlcm0sIHJlcGxhY2VtZW50VGVybSkge1xuICAgIHN1cGVyKGNvbnRleHQsIHN0cmluZywgbm9kZSk7XG5cbiAgICB0aGlzLnRhcmdldFRlcm0gPSB0YXJnZXRUZXJtO1xuICAgIHRoaXMucmVwbGFjZW1lbnRUZXJtID0gcmVwbGFjZW1lbnRUZXJtO1xuICB9XG5cbiAgZ2V0VGFyZ2V0VGVybSgpIHtcbiAgICByZXR1cm4gdGhpcy50YXJnZXRUZXJtO1xuICB9XG5cbiAgZ2V0UmVwbGFjZW1lbnRUZXJtKCkge1xuICAgIHJldHVybiB0aGlzLnJlcGxhY2VtZW50VGVybTtcbiAgfVxuXG4gIGdldFRlcm1TdWJzdGl0dXRpb25Ob2RlKCkge1xuICAgIGNvbnN0IG5vZGUgPSB0aGlzLmdldE5vZGUoKSxcbiAgICAgICAgICB0ZXJtU3Vic3RpdHV0aW9uTm9kZSA9IG5vZGU7ICAvLy9cblxuICAgIHJldHVybiB0ZXJtU3Vic3RpdHV0aW9uTm9kZTtcbiAgfVxuXG4gIGdldFRhcmdldE5vZGUoKSB7XG4gICAgY29uc3QgdGFyZ2V0VGVybU5vZGUgPSB0aGlzLnRhcmdldFRlcm0uZ2V0Tm9kZSgpLFxuICAgICAgICAgIHRlcmdldE5vZGUgPSB0YXJnZXRUZXJtTm9kZTsgLy8vXG5cbiAgICByZXR1cm4gdGVyZ2V0Tm9kZTtcbiAgfVxuXG4gIGdldFJlcGxhY2VtZW50Tm9kZSgpIHtcbiAgICBjb25zdCByZXBsYWNlbWVudFRlcm1Ob2RlID0gdGhpcy5yZXBsYWNlbWVudFRlcm0uZ2V0Tm9kZSgpLFxuICAgICAgICAgIHJlcGxhY2VtZW50Tm9kZSA9IHJlcGxhY2VtZW50VGVybU5vZGU7IC8vL1xuXG4gICAgcmV0dXJuIHJlcGxhY2VtZW50Tm9kZTtcbiAgfVxuXG4gIGdldFZhcmlhYmxlSWRlbnRpZmllcigpIHsgcmV0dXJuIHRoaXMudGFyZ2V0VGVybS5nZXRWYXJpYWJsZUlkZW50aWZpZXIoKTsgfVxuXG4gIGNvbXBhcmVWYXJpYWJsZUlkZW50aWZpZXIodmFyaWFibGVJZGVudGlmaWVyKSB7IHJldHVybiB0aGlzLnRhcmdldFRlcm0uY29tcGFyZVZhcmlhYmxlSWRlbnRpZmllcih2YXJpYWJsZUlkZW50aWZpZXIpOyB9XG5cbiAgaXNUcml2aWFsKCkge1xuICAgIGNvbnN0IHRhcmdldFRlcm1FcXVhbFRvUmVwbGFjZW1lbnRUZXJtID0gdGhpcy50YXJnZXRUZXJtLmlzRXF1YWxUbyh0aGlzLnJlcGxhY2VtZW50VGVybSksXG4gICAgICAgICAgdHJpdmlhbCA9IHRhcmdldFRlcm1FcXVhbFRvUmVwbGFjZW1lbnRUZXJtOyAvLy9cblxuICAgIHJldHVybiB0cml2aWFsO1xuICB9XG5cbiAgY29tcGFyZVRlcm0odGVybSwgY29udGV4dCkge1xuICAgIHRlcm0gPSBzdHJpcEJyYWNrZXRzRnJvbVRlcm0odGVybSwgY29udGV4dCk7IC8vL1xuXG4gICAgY29uc3QgdGVybUVxdWFsVG9SZXBsYWNlbWVudFRlcm0gPSB0aGlzLnJlcGxhY2VtZW50VGVybS5pc0VxdWFsVG8odGVybSksXG4gICAgICAgICAgY29tcGFyZWRUb1Rlcm0gPSB0ZXJtRXF1YWxUb1JlcGxhY2VtZW50VGVybTsgLy8vXG5cbiAgICByZXR1cm4gY29tcGFyZWRUb1Rlcm07XG4gIH1cblxuICBjb21wYXJlUGFyYW1ldGVyKHBhcmFtZXRlcikge1xuICAgIGNvbnN0IHRhcmdldFRlcm1Db21wYXJlc1RvUGFyYW1ldGVyID0gdGhpcy50YXJnZXRUZXJtLmNvbXBhcmVQYXJhbWV0ZXIocGFyYW1ldGVyKSxcbiAgICAgICAgICBjb21wYXJlc1RvUGFyYW1ldGVyID0gdGFyZ2V0VGVybUNvbXBhcmVzVG9QYXJhbWV0ZXI7ICAvLy9cblxuICAgIHJldHVybiBjb21wYXJlc1RvUGFyYW1ldGVyO1xuICB9XG5cbiAgdmFsaWRhdGUoZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCkge1xuICAgIGxldCB0ZXJtU3Vic3RpdHV0aW9uID0gbnVsbDtcblxuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKTtcblxuICAgIHNwZWNpZmljQ29udGV4dCA9IGNvbnRleHQ7ICAvLy9cblxuICAgIGNvbnN0IHRlcm1TdWJzdGl0dXRpb25TdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWYWxpZGF0aW5nIHRoZSAnJHt0ZXJtU3Vic3RpdHV0aW9uU3RyaW5nfScgdGVybSBzdWJzdGl0dXRpb24uLi5gKTtcblxuICAgIGNvbnN0IHZhbGlkU3Vic3RpdHV0aW9uID0gdGhpcy5maW5kVmFsaWRTdWJzdGl1dGlvbihjb250ZXh0KTtcblxuICAgIGlmICh2YWxpZFN1YnN0aXR1dGlvbikge1xuICAgICAgdGVybVN1YnN0aXR1dGlvbiA9IHZhbGlkU3Vic3RpdHV0aW9uOyAvLy9cblxuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udGhlICcke3Rlcm1TdWJzdGl0dXRpb25TdHJpbmd9JyB0ZXJtIHN1YnN0aXR1dGlvbiBpcyBhbHJhZHkgdmFsaWQuYCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGxldCB2YWxpZGF0ZXMgPSBmYWxzZTtcblxuICAgICAgY29uc3QgdGFyZ2V0VGVybVZhbGlkYXRlcyA9IHRoaXMudmFsaWRhdGVUYXJnZXRUZXJtKGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgICBpZiAodGFyZ2V0VGVybVZhbGlkYXRlcykge1xuICAgICAgICBjb25zdCByZXBsYWNlbWVudFRlcm1WYWxpZGF0ZXMgPSB0aGlzLnZhbGlkYXRlUmVwbGFjZW1lbnRUZXJtKGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgICAgIGlmIChyZXBsYWNlbWVudFRlcm1WYWxpZGF0ZXMpIHtcbiAgICAgICAgICB2YWxpZGF0ZXMgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmICh2YWxpZGF0ZXMpIHtcbiAgICAgICAgY29uc3Qgc3Vic3RpdHV0aW9uID0gdGhpczsgIC8vL1xuXG4gICAgICAgIHRlcm1TdWJzdGl0dXRpb24gPSBzdWJzdGl0dXRpb247ICAvLy9cblxuICAgICAgICBjb250ZXh0LmFkZFN1YnN0aXR1dGlvbihzdWJzdGl0dXRpb24pO1xuXG4gICAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZhbGlkYXRlZCB0aGUgJyR7dGVybVN1YnN0aXR1dGlvblN0cmluZ30nIHRlcm0gc3Vic3RpdHV0aW9uLmApO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0ZXJtU3Vic3RpdHV0aW9uO1xuICB9XG5cbiAgdmFsaWRhdGVUYXJnZXRUZXJtKGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpIHtcbiAgICBsZXQgdGFyZ2V0VGVybVZhbGlkYXRlcyA9IGZhbHNlO1xuXG4gICAgY29uc3QgY29udGV4dCA9IGdlbmVyYWxDb250ZXh0LCAvLy9cbiAgICAgICAgICB0YXJnZXRUZXJtU3RyaW5nID0gdGhpcy50YXJnZXRUZXJtLmdldFN0cmluZygpLFxuICAgICAgICAgIHRlcm1TdWJzdGl0dXRpb25TdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWYWxpZGF0aW5nIHRoZSAnJHt0ZXJtU3Vic3RpdHV0aW9uU3RyaW5nfScgdGVybSBzdWJ0aXR1dGlvbidzICcke3RhcmdldFRlcm1TdHJpbmd9JyB0YXJnZXQgdGVybS4uLmApO1xuXG4gICAgY29uc3QgdGFyZ2V0VGVybVNpbmd1bGFyID0gdGhpcy50YXJnZXRUZXJtLmlzU2luZ3VsYXIoKTtcblxuICAgIGlmICh0YXJnZXRUZXJtU2luZ3VsYXIpIHtcbiAgICAgIGNvbnN0IHRhcmdldFRlcm0gPSB0aGlzLnRhcmdldFRlcm0udmFsaWRhdGUoY29udGV4dCwgKCkgPT4ge1xuICAgICAgICBjb25zdCB2YWxpZGF0ZXNGb3J3YXJkcyA9IHRydWU7XG5cbiAgICAgICAgcmV0dXJuIHZhbGlkYXRlc0ZvcndhcmRzO1xuICAgICAgfSk7XG5cbiAgICAgIGlmICh0YXJnZXRUZXJtICE9PSBudWxsKSB7XG4gICAgICAgIHRoaXMudGFyZ2V0VGVybSA9IHRhcmdldFRlcm07XG5cbiAgICAgICAgdGFyZ2V0VGVybVZhbGlkYXRlcyA9IHRydWU7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYFRoZSAnJHt0ZXJtU3Vic3RpdHV0aW9uU3RyaW5nfScgdGVybSBzdWJ0aXR1dGlvbidzICcke3RhcmdldFRlcm1TdHJpbmd9JyB0YXJnZXQgdGVybSBpcyBub3Qgc2luZ3VsYXIuYCk7XG4gICAgfVxuXG4gICAgaWYgKHRhcmdldFRlcm1WYWxpZGF0ZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZhbGlkYXRlZCB0aGUgJyR7dGVybVN1YnN0aXR1dGlvblN0cmluZ30nIHRlcm0gc3VidGl0dXRpb24ncyAnJHt0YXJnZXRUZXJtU3RyaW5nfScgdGFyZ2V0IHRlcm0uLi5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGFyZ2V0VGVybVZhbGlkYXRlcztcbiAgfVxuXG4gIHZhbGlkYXRlUmVwbGFjZW1lbnRUZXJtKGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpIHtcbiAgICBsZXQgcmVwbGFjZW1lbnRUZXJtVmFsaWRhdGVzID0gZmFsc2U7XG5cbiAgICBjb25zdCBjb250ZXh0ID0gc3BlY2lmaWNDb250ZXh0LCAgLy8vXG4gICAgICAgICAgcmVwbGFjZW1lbnRUZXJtU3RyaW5nID0gdGhpcy5yZXBsYWNlbWVudFRlcm0uZ2V0U3RyaW5nKCksXG4gICAgICAgICAgdGVybVN1YnN0aXR1dGlvblN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7ICAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZhbGlkYXRpbmcgdGhlICcke3Rlcm1TdWJzdGl0dXRpb25TdHJpbmd9JyB0ZXJtIHN1YnRpdHV0aW9uJ3MgJyR7cmVwbGFjZW1lbnRUZXJtU3RyaW5nfScgcmVwbGFjZW1lbnQgdGVybS4uLmApO1xuXG4gICAgY29uc3QgcmVwbGFjZW1lbnRUZXJtID0gdGhpcy5yZXBsYWNlbWVudFRlcm0udmFsaWRhdGUoY29udGV4dCwgKCkgPT4ge1xuICAgICAgY29uc3QgdmFsaWRhdGVzRm9yd2FyZHMgPSB0cnVlO1xuXG4gICAgICByZXR1cm4gdmFsaWRhdGVzRm9yd2FyZHM7XG4gICAgfSk7XG5cbiAgICBpZiAocmVwbGFjZW1lbnRUZXJtICE9PSBudWxsKSB7XG4gICAgICB0aGlzLnJlcGxhY2VtZW50VGVybSA9IHJlcGxhY2VtZW50VGVybTtcblxuICAgICAgcmVwbGFjZW1lbnRUZXJtVmFsaWRhdGVzID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAocmVwbGFjZW1lbnRUZXJtVmFsaWRhdGVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52YWxpZGF0ZWQgdGhlICcke3Rlcm1TdWJzdGl0dXRpb25TdHJpbmd9JyB0ZXJtIHN1YnRpdHV0aW9uJ3MgJyR7cmVwbGFjZW1lbnRUZXJtU3RyaW5nfScgcmVwbGFjZW1lbnQgdGVybS4uLmApO1xuICAgIH1cblxuICAgIHJldHVybiByZXBsYWNlbWVudFRlcm1WYWxpZGF0ZXM7XG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiVGVybVN1YnN0aXR1dGlvblwiO1xuXG4gIHN0YXRpYyBmcm9tU3RhdGVtZW50KHN0YXRlbWVudCwgY29udGV4dCkge1xuICAgIGNvbnN0IHN0YXRlbWVudE5vZGUgPSBzdGF0ZW1lbnQuZ2V0Tm9kZSgpLFxuICAgICAgICAgIHRlcm1TdWJzdGl0dXRpb24gPSB0ZXJtU3Vic3RpdHV0aW9uRnJvbVN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gdGVybVN1YnN0aXR1dGlvbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tVGVybUFuZFZhcmlhYmxlKHRlcm0sIHZhcmlhYmxlLCBjb250ZXh0KSB7XG4gICAgdGVybSA9IHN0cmlwQnJhY2tldHNGcm9tVGVybSh0ZXJtLCBjb250ZXh0KTsgLy8vXG5cbiAgICByZXR1cm4gbGl0ZXJhbGx5KChjb250ZXh0KSA9PiB7XG4gICAgICBjb25zdCB0ZXJtU3Vic3RpdHV0aW9uU3RyaW5nID0gdGVybVN1YnN0aXR1dGlvblN0cmluZ0Zyb21UZXJtQW5kVmFyaWFibGUodGVybSwgdmFyaWFibGUpLFxuICAgICAgICAgICAgc3RyaW5nID0gdGVybVN1YnN0aXR1dGlvblN0cmluZywgIC8vL1xuICAgICAgICAgICAgdGVybVN1YnN0aXR1dGlvbk5vZGUgPSBpbnN0YW50aWF0ZVRlcm1TdWJzdGl0dXRpb24oc3RyaW5nLCBjb250ZXh0KSxcbiAgICAgICAgICAgIHRlcm1TdWJzdGl0dXRpb24gPSB0ZXJtU3Vic3RpdHV0aW9uRnJvbVRlcm1TdWJzdGl0dXRpb25Ob2RlKHRlcm1TdWJzdGl0dXRpb25Ob2RlLCBjb250ZXh0KTtcblxuICAgICAgcmV0dXJuIHRlcm1TdWJzdGl0dXRpb247XG4gICAgfSwgY29udGV4dCk7XG4gIH1cbn0pO1xuIl0sIm5hbWVzIjpbImRlZmluZSIsIlRlcm1TdWJzdGl0dXRpb24iLCJjb250ZXh0Iiwic3RyaW5nIiwibm9kZSIsInRhcmdldFRlcm0iLCJyZXBsYWNlbWVudFRlcm0iLCJnZXRUYXJnZXRUZXJtIiwiZ2V0UmVwbGFjZW1lbnRUZXJtIiwiZ2V0VGVybVN1YnN0aXR1dGlvbk5vZGUiLCJnZXROb2RlIiwidGVybVN1YnN0aXR1dGlvbk5vZGUiLCJnZXRUYXJnZXROb2RlIiwidGFyZ2V0VGVybU5vZGUiLCJ0ZXJnZXROb2RlIiwiZ2V0UmVwbGFjZW1lbnROb2RlIiwicmVwbGFjZW1lbnRUZXJtTm9kZSIsInJlcGxhY2VtZW50Tm9kZSIsImdldFZhcmlhYmxlSWRlbnRpZmllciIsImNvbXBhcmVWYXJpYWJsZUlkZW50aWZpZXIiLCJ2YXJpYWJsZUlkZW50aWZpZXIiLCJpc1RyaXZpYWwiLCJ0YXJnZXRUZXJtRXF1YWxUb1JlcGxhY2VtZW50VGVybSIsImlzRXF1YWxUbyIsInRyaXZpYWwiLCJjb21wYXJlVGVybSIsInRlcm0iLCJzdHJpcEJyYWNrZXRzRnJvbVRlcm0iLCJ0ZXJtRXF1YWxUb1JlcGxhY2VtZW50VGVybSIsImNvbXBhcmVkVG9UZXJtIiwiY29tcGFyZVBhcmFtZXRlciIsInBhcmFtZXRlciIsInRhcmdldFRlcm1Db21wYXJlc1RvUGFyYW1ldGVyIiwiY29tcGFyZXNUb1BhcmFtZXRlciIsInZhbGlkYXRlIiwiZ2VuZXJhbENvbnRleHQiLCJzcGVjaWZpY0NvbnRleHQiLCJ0ZXJtU3Vic3RpdHV0aW9uIiwiZ2V0Q29udGV4dCIsInRlcm1TdWJzdGl0dXRpb25TdHJpbmciLCJnZXRTdHJpbmciLCJ0cmFjZSIsInZhbGlkU3Vic3RpdHV0aW9uIiwiZmluZFZhbGlkU3Vic3RpdXRpb24iLCJkZWJ1ZyIsInZhbGlkYXRlcyIsInRhcmdldFRlcm1WYWxpZGF0ZXMiLCJ2YWxpZGF0ZVRhcmdldFRlcm0iLCJyZXBsYWNlbWVudFRlcm1WYWxpZGF0ZXMiLCJ2YWxpZGF0ZVJlcGxhY2VtZW50VGVybSIsInN1YnN0aXR1dGlvbiIsImFkZFN1YnN0aXR1dGlvbiIsInRhcmdldFRlcm1TdHJpbmciLCJ0YXJnZXRUZXJtU2luZ3VsYXIiLCJpc1Npbmd1bGFyIiwidmFsaWRhdGVzRm9yd2FyZHMiLCJyZXBsYWNlbWVudFRlcm1TdHJpbmciLCJmcm9tU3RhdGVtZW50Iiwic3RhdGVtZW50Iiwic3RhdGVtZW50Tm9kZSIsInRlcm1TdWJzdGl0dXRpb25Gcm9tU3RhdGVtZW50Tm9kZSIsImZyb21UZXJtQW5kVmFyaWFibGUiLCJ2YXJpYWJsZSIsImxpdGVyYWxseSIsInRlcm1TdWJzdGl0dXRpb25TdHJpbmdGcm9tVGVybUFuZFZhcmlhYmxlIiwiaW5zdGFudGlhdGVUZXJtU3Vic3RpdHV0aW9uIiwidGVybVN1YnN0aXR1dGlvbkZyb21UZXJtU3Vic3RpdHV0aW9uTm9kZSIsIlN1YnN0aXR1dGlvbiIsIm5hbWUiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQVdBOzs7ZUFBQTs7O21FQVR5Qjt3QkFFRjt1QkFDRzt3QkFDWTsyQkFDTTtzQkFDYzt1QkFDa0M7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUU1RixXQUFlQSxJQUFBQSxnQkFBTSxxQ0FBQzs7YUFBTUMsaUJBQ2RDLE9BQU8sRUFBRUMsTUFBTSxFQUFFQyxJQUFJLEVBQUVDLFVBQVUsRUFBRUMsZUFBZTtnQ0FEcENMOztnQkFFeEIsa0JBRndCQTtZQUVsQkM7WUFBU0M7WUFBUUM7O1FB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