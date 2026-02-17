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
var _assertion = /*#__PURE__*/ _interop_require_default(require("../assertion"));
var _elements = require("../../elements");
var _substitutions = require("../../utilities/substitutions");
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
var _DefinedAssertion;
var _default = (0, _elements.define)((_DefinedAssertion = /*#__PURE__*/ function(Assertion) {
    _inherits(DefinedAssertion, Assertion);
    function DefinedAssertion(context, string, node, term, frame, negated) {
        _class_call_check(this, DefinedAssertion);
        var _this;
        _this = _call_super(this, DefinedAssertion, [
            context,
            string,
            node
        ]);
        _this.term = term;
        _this.frame = frame;
        _this.negated = negated;
        return _this;
    }
    _create_class(DefinedAssertion, [
        {
            key: "getTerm",
            value: function getTerm() {
                return this.term;
            }
        },
        {
            key: "getFrame",
            value: function getFrame() {
                return this.frame;
            }
        },
        {
            key: "isNegated",
            value: function isNegated() {
                return this.negated;
            }
        },
        {
            key: "validate",
            value: function validate(assignments, stated, context) {
                var validates = false;
                var definedAssertionString = this.getString(); ///
                context.trace("Validating the '".concat(definedAssertionString, "' defined assertion..."));
                var valid = this.isValid(context);
                if (valid) {
                    validates = true;
                    context.debug("...the '".concat(definedAssertionString, "' defined assertion is already valid."));
                } else {
                    var termValidates = this.validateTerm(assignments, stated, context), frameVerifies = this.validateFrame(assignments, stated, context);
                    if (termValidates || frameVerifies) {
                        var verifiesWhenStated = false, verifiesWhenDerived = false;
                        if (stated) {
                            verifiesWhenStated = this.validateWhenStated(assignments, context);
                        } else {
                            verifiesWhenDerived = this.validateWhenDerived(context);
                        }
                        if (verifiesWhenStated || verifiesWhenDerived) {
                            validates = true;
                        }
                    }
                    if (validates) {
                        context.debug("...validates the '".concat(definedAssertionString, "' defined assertion."));
                    }
                }
                return validates;
            }
        },
        {
            key: "validateTerm",
            value: function validateTerm(assignments, stated, context) {
                var termValidates = false;
                if (this.term !== null) {
                    var termString = this.term.getString(), definedAssertionString = this.getString(); ///
                    context.trace("Validating the '".concat(definedAssertionString, "' defined assertino's '").concat(termString, "' term..."));
                    var termSingular = this.term.isSingular();
                    if (!termSingular) {
                        context.debug("The '".concat(termString, "' term is not singular."));
                    } else {
                        termValidates = this.term.validate(context, function() {
                            var verifiesForwards = true;
                            return verifiesForwards;
                        });
                        if (termValidates) {
                            context.debug("...validates the'".concat(definedAssertionString, "' defined assertino's '").concat(termString, "' term."));
                        }
                    }
                }
                return termValidates;
            }
        },
        {
            key: "validateFrame",
            value: function validateFrame(assignments, stated, context) {
                var frameVerifies = false;
                if (this.frame !== null) {
                    var frameString = this.frame.getString(), definedAssertionString = this.getString(); ///
                    context.trace("Validating the'".concat(definedAssertionString, "' defined assertino's '").concat(frameString, "' frame..."));
                    var frameSingular = this.frame.isSingular();
                    if (!frameSingular) {
                        context.debug("The '".concat(frameString, "' frame is not singular."));
                    } else {
                        stated = true; ///
                        assignments = null; ///
                        frameVerifies = this.frame.validate(assignments, stated, context);
                        if (frameVerifies) {
                            context.debug("...validates the'".concat(definedAssertionString, "' defined assertino's '").concat(frameString, "' frame."));
                        }
                    }
                }
                return frameVerifies;
            }
        },
        {
            key: "validateWhenStated",
            value: function validateWhenStated(assignments, context) {
                var verifiesWhenStated;
                var definedAssertionString = this.getString(); ///
                context.trace("Validating the '".concat(definedAssertionString, "' stated defined assertion..."));
                verifiesWhenStated = true;
                if (verifiesWhenStated) {
                    context.debug("...validates the '".concat(definedAssertionString, "' stated defined assertion."));
                }
                return verifiesWhenStated;
            }
        },
        {
            key: "validateWhenDerived",
            value: function validateWhenDerived1(context) {
                var verifiesWhenDerived;
                var definedAssertionString = this.getString(); ///
                context.trace("Validating the '".concat(definedAssertionString, "' derived defined assertion..."));
                var generalContext = null, specificContext = context; ///
                verifiesWhenDerived = validateWhenDerived(this.term, this.frame, this.negated, generalContext, specificContext);
                if (verifiesWhenDerived) {
                    context.debug("...validates the '".concat(definedAssertionString, "' derived defined assertion."));
                }
                return verifiesWhenDerived;
            }
        },
        {
            key: "unifyIndependently",
            value: function unifyIndependently(generalContext, specificContext) {
                var unifiesIndependently;
                var context = specificContext, definedAssertionString = this.getString(); ///
                context.trace("Unifying the '".concat(definedAssertionString, "' defined assertion independently..."));
                var term = (0, _substitutions.termFromTermAndSubstitutions)(this.term, generalContext, specificContext), frame = (0, _substitutions.frameFromFrameAndSubstitutions)(this.frame, generalContext, specificContext), verifiesWhenDerived = validateWhenDerived(term, frame, this.negated, generalContext, specificContext);
                unifiesIndependently = verifiesWhenDerived; ///
                if (unifiesIndependently) {
                    context.debug("...unified the '".concat(definedAssertionString, "' defined assertion independently."));
                }
                return unifiesIndependently;
            }
        }
    ]);
    return DefinedAssertion;
}(_assertion.default), _define_property(_DefinedAssertion, "name", "DefinedAssertion"), _DefinedAssertion));
function validateWhenDerived(term, frame, negated, generalContext, specificContext) {
    var verifiesWhenDerived = false;
    var context = specificContext; ///
    if (term !== null) {
        var variable = term.getVariable(generalContext, specificContext), variableDefined = isVariableDefined(variable, context);
        if (!negated && variableDefined) {
            verifiesWhenDerived = true;
        }
        if (negated && !variableDefined) {
            verifiesWhenDerived = true;
        }
    }
    if (frame !== null) {
        var metavariable = frame.getMetavariable(generalContext, specificContext), metavariableDefined = isMetavariableDefined(metavariable, context);
        if (!negated && metavariableDefined) {
            verifiesWhenDerived = true;
        }
        if (negated && !metavariableDefined) {
            verifiesWhenDerived = true;
        }
    }
    return verifiesWhenDerived;
}
function isVariableDefined(variable, context) {
    var equivalences = context.getEquivalences(), groundedTerms = [], definedVariables = [];
    equivalences.separateGroundedTermsAndDefinedVariables(groundedTerms, definedVariables, context);
    var variableMatchesDefinedVariable = definedVariables.some(function(definedVariable) {
        var definedVariableEqualToVariable = definedVariable.compare(variable);
        if (definedVariableEqualToVariable === variable) {
            return true;
        }
    }), variableDefined = variableMatchesDefinedVariable; ///
    return variableDefined;
}
function isMetavariableDefined(metavariable, context) {
    var judgementPresent = context.isJudgementPresentByMetavariable(metavariable), metavariableDefined = judgementPresent; ///
    return metavariableDefined;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9lbGVtZW50L2Fzc2VydGlvbi9kZWZpbmVkLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgQXNzZXJ0aW9uIGZyb20gXCIuLi9hc3NlcnRpb25cIjtcblxuaW1wb3J0IHsgZGVmaW5lIH0gZnJvbSBcIi4uLy4uL2VsZW1lbnRzXCI7XG5pbXBvcnQgeyB0ZXJtRnJvbVRlcm1BbmRTdWJzdGl0dXRpb25zLCBmcmFtZUZyb21GcmFtZUFuZFN1YnN0aXR1dGlvbnMgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL3N1YnN0aXR1dGlvbnNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lKGNsYXNzIERlZmluZWRBc3NlcnRpb24gZXh0ZW5kcyBBc3NlcnRpb24ge1xuICBjb25zdHJ1Y3Rvcihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIHRlcm0sIGZyYW1lLCBuZWdhdGVkKSB7XG4gICAgc3VwZXIoY29udGV4dCwgc3RyaW5nLCBub2RlKTtcblxuICAgIHRoaXMudGVybSA9IHRlcm07XG4gICAgdGhpcy5mcmFtZT0gZnJhbWU7XG4gICAgdGhpcy5uZWdhdGVkID0gbmVnYXRlZDtcbiAgfVxuXG4gIGdldFRlcm0oKSB7XG4gICAgcmV0dXJuIHRoaXMudGVybTtcbiAgfVxuXG4gIGdldEZyYW1lKCkge1xuICAgIHJldHVybiB0aGlzLmZyYW1lO1xuICB9XG5cbiAgaXNOZWdhdGVkKCkge1xuICAgIHJldHVybiB0aGlzLm5lZ2F0ZWQ7XG4gIH1cblxuICB2YWxpZGF0ZShhc3NpZ25tZW50cywgc3RhdGVkLCBjb250ZXh0KSB7XG4gICAgbGV0IHZhbGlkYXRlcyA9IGZhbHNlO1xuXG4gICAgY29uc3QgZGVmaW5lZEFzc2VydGlvblN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7IC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmFsaWRhdGluZyB0aGUgJyR7ZGVmaW5lZEFzc2VydGlvblN0cmluZ30nIGRlZmluZWQgYXNzZXJ0aW9uLi4uYCk7XG5cbiAgICBjb25zdCB2YWxpZCA9IHRoaXMuaXNWYWxpZChjb250ZXh0KTtcblxuICAgIGlmICh2YWxpZCkge1xuICAgICAgdmFsaWRhdGVzID0gdHJ1ZTtcblxuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udGhlICcke2RlZmluZWRBc3NlcnRpb25TdHJpbmd9JyBkZWZpbmVkIGFzc2VydGlvbiBpcyBhbHJlYWR5IHZhbGlkLmApO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCB0ZXJtVmFsaWRhdGVzID0gdGhpcy52YWxpZGF0ZVRlcm0oYXNzaWdubWVudHMsIHN0YXRlZCwgY29udGV4dCksXG4gICAgICAgICAgICBmcmFtZVZlcmlmaWVzID0gdGhpcy52YWxpZGF0ZUZyYW1lKGFzc2lnbm1lbnRzLCBzdGF0ZWQsIGNvbnRleHQpO1xuXG4gICAgICBpZiAodGVybVZhbGlkYXRlcyB8fCBmcmFtZVZlcmlmaWVzKSB7XG4gICAgICAgIGxldCB2ZXJpZmllc1doZW5TdGF0ZWQgPSBmYWxzZSxcbiAgICAgICAgICAgIHZlcmlmaWVzV2hlbkRlcml2ZWQgPSBmYWxzZTtcblxuICAgICAgICBpZiAoc3RhdGVkKSB7XG4gICAgICAgICAgdmVyaWZpZXNXaGVuU3RhdGVkID0gdGhpcy52YWxpZGF0ZVdoZW5TdGF0ZWQoYXNzaWdubWVudHMsIGNvbnRleHQpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHZlcmlmaWVzV2hlbkRlcml2ZWQgPSB0aGlzLnZhbGlkYXRlV2hlbkRlcml2ZWQoY29udGV4dCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodmVyaWZpZXNXaGVuU3RhdGVkIHx8IHZlcmlmaWVzV2hlbkRlcml2ZWQpIHtcbiAgICAgICAgICB2YWxpZGF0ZXMgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmICh2YWxpZGF0ZXMpIHtcbiAgICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmFsaWRhdGVzIHRoZSAnJHtkZWZpbmVkQXNzZXJ0aW9uU3RyaW5nfScgZGVmaW5lZCBhc3NlcnRpb24uYCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHZhbGlkYXRlcztcbiAgfVxuXG4gIHZhbGlkYXRlVGVybShhc3NpZ25tZW50cywgc3RhdGVkLCBjb250ZXh0KSB7XG4gICAgbGV0IHRlcm1WYWxpZGF0ZXMgPSBmYWxzZTtcblxuICAgIGlmICh0aGlzLnRlcm0gIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHRlcm1TdHJpbmcgPSB0aGlzLnRlcm0uZ2V0U3RyaW5nKCksIC8vL1xuICAgICAgICAgICAgZGVmaW5lZEFzc2VydGlvblN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7ICAvLy9cblxuICAgICAgY29udGV4dC50cmFjZShgVmFsaWRhdGluZyB0aGUgJyR7ZGVmaW5lZEFzc2VydGlvblN0cmluZ30nIGRlZmluZWQgYXNzZXJ0aW5vJ3MgJyR7dGVybVN0cmluZ30nIHRlcm0uLi5gKTtcblxuICAgICAgY29uc3QgdGVybVNpbmd1bGFyID0gdGhpcy50ZXJtLmlzU2luZ3VsYXIoKTtcblxuICAgICAgaWYgKCF0ZXJtU2luZ3VsYXIpIHtcbiAgICAgICAgY29udGV4dC5kZWJ1ZyhgVGhlICcke3Rlcm1TdHJpbmd9JyB0ZXJtIGlzIG5vdCBzaW5ndWxhci5gKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRlcm1WYWxpZGF0ZXMgPSB0aGlzLnRlcm0udmFsaWRhdGUoY29udGV4dCwgKCkgPT4ge1xuICAgICAgICAgIGNvbnN0IHZlcmlmaWVzRm9yd2FyZHMgPSB0cnVlO1xuXG4gICAgICAgICAgcmV0dXJuIHZlcmlmaWVzRm9yd2FyZHM7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmICh0ZXJtVmFsaWRhdGVzKSB7XG4gICAgICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmFsaWRhdGVzIHRoZScke2RlZmluZWRBc3NlcnRpb25TdHJpbmd9JyBkZWZpbmVkIGFzc2VydGlubydzICcke3Rlcm1TdHJpbmd9JyB0ZXJtLmApO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRlcm1WYWxpZGF0ZXM7XG4gIH1cblxuICB2YWxpZGF0ZUZyYW1lKGFzc2lnbm1lbnRzLCBzdGF0ZWQsIGNvbnRleHQpIHtcbiAgICBsZXQgZnJhbWVWZXJpZmllcyA9IGZhbHNlO1xuXG4gICAgaWYgKHRoaXMuZnJhbWUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IGZyYW1lU3RyaW5nID0gdGhpcy5mcmFtZS5nZXRTdHJpbmcoKSwgLy8vXG4gICAgICAgICAgICBkZWZpbmVkQXNzZXJ0aW9uU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgIC8vL1xuXG4gICAgICBjb250ZXh0LnRyYWNlKGBWYWxpZGF0aW5nIHRoZScke2RlZmluZWRBc3NlcnRpb25TdHJpbmd9JyBkZWZpbmVkIGFzc2VydGlubydzICcke2ZyYW1lU3RyaW5nfScgZnJhbWUuLi5gKTtcblxuICAgICAgY29uc3QgZnJhbWVTaW5ndWxhciA9IHRoaXMuZnJhbWUuaXNTaW5ndWxhcigpO1xuXG4gICAgICBpZiAoIWZyYW1lU2luZ3VsYXIpIHtcbiAgICAgICAgY29udGV4dC5kZWJ1ZyhgVGhlICcke2ZyYW1lU3RyaW5nfScgZnJhbWUgaXMgbm90IHNpbmd1bGFyLmApO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc3RhdGVkID0gdHJ1ZTsgIC8vL1xuXG4gICAgICAgIGFzc2lnbm1lbnRzID0gbnVsbDsgLy8vXG5cbiAgICAgICAgZnJhbWVWZXJpZmllcyA9IHRoaXMuZnJhbWUudmFsaWRhdGUoYXNzaWdubWVudHMsIHN0YXRlZCwgY29udGV4dCk7XG5cbiAgICAgICAgaWYgKGZyYW1lVmVyaWZpZXMpIHtcbiAgICAgICAgICBjb250ZXh0LmRlYnVnKGAuLi52YWxpZGF0ZXMgdGhlJyR7ZGVmaW5lZEFzc2VydGlvblN0cmluZ30nIGRlZmluZWQgYXNzZXJ0aW5vJ3MgJyR7ZnJhbWVTdHJpbmd9JyBmcmFtZS5gKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBmcmFtZVZlcmlmaWVzO1xuICB9XG5cbiAgdmFsaWRhdGVXaGVuU3RhdGVkKGFzc2lnbm1lbnRzLCBjb250ZXh0KSB7XG4gICAgbGV0IHZlcmlmaWVzV2hlblN0YXRlZDtcblxuICAgIGNvbnN0IGRlZmluZWRBc3NlcnRpb25TdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZhbGlkYXRpbmcgdGhlICcke2RlZmluZWRBc3NlcnRpb25TdHJpbmd9JyBzdGF0ZWQgZGVmaW5lZCBhc3NlcnRpb24uLi5gKTtcblxuICAgIHZlcmlmaWVzV2hlblN0YXRlZCA9IHRydWU7XG5cbiAgICBpZiAodmVyaWZpZXNXaGVuU3RhdGVkKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52YWxpZGF0ZXMgdGhlICcke2RlZmluZWRBc3NlcnRpb25TdHJpbmd9JyBzdGF0ZWQgZGVmaW5lZCBhc3NlcnRpb24uYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZlcmlmaWVzV2hlblN0YXRlZDtcbiAgfVxuXG4gIHZhbGlkYXRlV2hlbkRlcml2ZWQoY29udGV4dCkge1xuICAgIGxldCB2ZXJpZmllc1doZW5EZXJpdmVkO1xuXG4gICAgY29uc3QgZGVmaW5lZEFzc2VydGlvblN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7IC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmFsaWRhdGluZyB0aGUgJyR7ZGVmaW5lZEFzc2VydGlvblN0cmluZ30nIGRlcml2ZWQgZGVmaW5lZCBhc3NlcnRpb24uLi5gKTtcblxuICAgIGNvbnN0IGdlbmVyYWxDb250ZXh0ID0gbnVsbCxcbiAgICAgICAgICBzcGVjaWZpY0NvbnRleHQgPSBjb250ZXh0OyAgLy8vXG5cbiAgICB2ZXJpZmllc1doZW5EZXJpdmVkID0gdmFsaWRhdGVXaGVuRGVyaXZlZCh0aGlzLnRlcm0sIHRoaXMuZnJhbWUsIHRoaXMubmVnYXRlZCwgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgICBpZiAodmVyaWZpZXNXaGVuRGVyaXZlZCkge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmFsaWRhdGVzIHRoZSAnJHtkZWZpbmVkQXNzZXJ0aW9uU3RyaW5nfScgZGVyaXZlZCBkZWZpbmVkIGFzc2VydGlvbi5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmVyaWZpZXNXaGVuRGVyaXZlZDtcbiAgfVxuXG4gIHVuaWZ5SW5kZXBlbmRlbnRseShnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KSB7XG4gICAgbGV0IHVuaWZpZXNJbmRlcGVuZGVudGx5O1xuXG4gICAgY29uc3QgY29udGV4dCA9IHNwZWNpZmljQ29udGV4dCwgLy8vXG4gICAgICAgICAgZGVmaW5lZEFzc2VydGlvblN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7IC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVW5pZnlpbmcgdGhlICcke2RlZmluZWRBc3NlcnRpb25TdHJpbmd9JyBkZWZpbmVkIGFzc2VydGlvbiBpbmRlcGVuZGVudGx5Li4uYCk7XG5cbiAgICBjb25zdCB0ZXJtID0gdGVybUZyb21UZXJtQW5kU3Vic3RpdHV0aW9ucyh0aGlzLnRlcm0sIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpLFxuICAgICAgICAgIGZyYW1lID0gZnJhbWVGcm9tRnJhbWVBbmRTdWJzdGl0dXRpb25zKHRoaXMuZnJhbWUsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpLFxuICAgICAgICAgIHZlcmlmaWVzV2hlbkRlcml2ZWQgPSB2YWxpZGF0ZVdoZW5EZXJpdmVkKHRlcm0sIGZyYW1lLCB0aGlzLm5lZ2F0ZWQsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgdW5pZmllc0luZGVwZW5kZW50bHkgPSB2ZXJpZmllc1doZW5EZXJpdmVkOyAvLy9cblxuICAgIGlmICh1bmlmaWVzSW5kZXBlbmRlbnRseSkge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udW5pZmllZCB0aGUgJyR7ZGVmaW5lZEFzc2VydGlvblN0cmluZ30nIGRlZmluZWQgYXNzZXJ0aW9uIGluZGVwZW5kZW50bHkuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHVuaWZpZXNJbmRlcGVuZGVudGx5O1xuICB9XG5cbiAgc3RhdGljIG5hbWUgPSBcIkRlZmluZWRBc3NlcnRpb25cIjtcbn0pO1xuXG5mdW5jdGlvbiB2YWxpZGF0ZVdoZW5EZXJpdmVkKHRlcm0sIGZyYW1lLCBuZWdhdGVkLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KSB7XG4gIGxldCB2ZXJpZmllc1doZW5EZXJpdmVkID0gZmFsc2U7XG5cbiAgY29uc3QgY29udGV4dCA9IHNwZWNpZmljQ29udGV4dDsgIC8vL1xuXG4gIGlmICh0ZXJtICE9PSBudWxsKSB7XG4gICAgY29uc3QgdmFyaWFibGUgPSB0ZXJtLmdldFZhcmlhYmxlKGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpLFxuICAgICAgICAgIHZhcmlhYmxlRGVmaW5lZCA9IGlzVmFyaWFibGVEZWZpbmVkKHZhcmlhYmxlLCBjb250ZXh0KTtcblxuICAgIGlmICghbmVnYXRlZCAmJiB2YXJpYWJsZURlZmluZWQpIHtcbiAgICAgIHZlcmlmaWVzV2hlbkRlcml2ZWQgPSB0cnVlO1xuICAgIH1cblxuICAgIGlmIChuZWdhdGVkICYmICF2YXJpYWJsZURlZmluZWQpIHtcbiAgICAgIHZlcmlmaWVzV2hlbkRlcml2ZWQgPSB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIGlmIChmcmFtZSE9PSBudWxsKSB7XG4gICAgY29uc3QgbWV0YXZhcmlhYmxlID0gZnJhbWUuZ2V0TWV0YXZhcmlhYmxlKGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpLFxuICAgICAgICAgIG1ldGF2YXJpYWJsZURlZmluZWQgPSBpc01ldGF2YXJpYWJsZURlZmluZWQobWV0YXZhcmlhYmxlLCBjb250ZXh0KTtcblxuICAgIGlmICghbmVnYXRlZCAmJiBtZXRhdmFyaWFibGVEZWZpbmVkKSB7XG4gICAgICB2ZXJpZmllc1doZW5EZXJpdmVkID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAobmVnYXRlZCAmJiAhbWV0YXZhcmlhYmxlRGVmaW5lZCkge1xuICAgICAgdmVyaWZpZXNXaGVuRGVyaXZlZCA9IHRydWU7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHZlcmlmaWVzV2hlbkRlcml2ZWQ7XG59XG5cbmZ1bmN0aW9uIGlzVmFyaWFibGVEZWZpbmVkKHZhcmlhYmxlLCBjb250ZXh0KSB7XG4gIGNvbnN0IGVxdWl2YWxlbmNlcyA9IGNvbnRleHQuZ2V0RXF1aXZhbGVuY2VzKCksXG4gICAgICAgIGdyb3VuZGVkVGVybXMgPSBbXSxcbiAgICAgICAgZGVmaW5lZFZhcmlhYmxlcyA9IFtdO1xuXG4gIGVxdWl2YWxlbmNlcy5zZXBhcmF0ZUdyb3VuZGVkVGVybXNBbmREZWZpbmVkVmFyaWFibGVzKGdyb3VuZGVkVGVybXMsIGRlZmluZWRWYXJpYWJsZXMsIGNvbnRleHQpO1xuXG4gIGNvbnN0IHZhcmlhYmxlTWF0Y2hlc0RlZmluZWRWYXJpYWJsZSA9IGRlZmluZWRWYXJpYWJsZXMuc29tZSgoZGVmaW5lZFZhcmlhYmxlKSA9PiB7XG4gICAgICAgICAgY29uc3QgZGVmaW5lZFZhcmlhYmxlRXF1YWxUb1ZhcmlhYmxlID0gZGVmaW5lZFZhcmlhYmxlLmNvbXBhcmUodmFyaWFibGUpO1xuXG4gICAgICAgICAgaWYgKGRlZmluZWRWYXJpYWJsZUVxdWFsVG9WYXJpYWJsZSA9PT0gdmFyaWFibGUpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfSksXG4gICAgICAgIHZhcmlhYmxlRGVmaW5lZCA9IHZhcmlhYmxlTWF0Y2hlc0RlZmluZWRWYXJpYWJsZTsgLy8vXG5cbiAgcmV0dXJuIHZhcmlhYmxlRGVmaW5lZDtcbn1cblxuZnVuY3Rpb24gaXNNZXRhdmFyaWFibGVEZWZpbmVkKG1ldGF2YXJpYWJsZSwgY29udGV4dCkge1xuICBjb25zdCBqdWRnZW1lbnRQcmVzZW50ID0gY29udGV4dC5pc0p1ZGdlbWVudFByZXNlbnRCeU1ldGF2YXJpYWJsZShtZXRhdmFyaWFibGUpLFxuICAgICAgICBtZXRhdmFyaWFibGVEZWZpbmVkID0ganVkZ2VtZW50UHJlc2VudDsgLy8vXG5cbiAgcmV0dXJuIG1ldGF2YXJpYWJsZURlZmluZWRcbn1cbiJdLCJuYW1lcyI6WyJkZWZpbmUiLCJEZWZpbmVkQXNzZXJ0aW9uIiwiY29udGV4dCIsInN0cmluZyIsIm5vZGUiLCJ0ZXJtIiwiZnJhbWUiLCJuZWdhdGVkIiwiZ2V0VGVybSIsImdldEZyYW1lIiwiaXNOZWdhdGVkIiwidmFsaWRhdGUiLCJhc3NpZ25tZW50cyIsInN0YXRlZCIsInZhbGlkYXRlcyIsImRlZmluZWRBc3NlcnRpb25TdHJpbmciLCJnZXRTdHJpbmciLCJ0cmFjZSIsInZhbGlkIiwiaXNWYWxpZCIsImRlYnVnIiwidGVybVZhbGlkYXRlcyIsInZhbGlkYXRlVGVybSIsImZyYW1lVmVyaWZpZXMiLCJ2YWxpZGF0ZUZyYW1lIiwidmVyaWZpZXNXaGVuU3RhdGVkIiwidmVyaWZpZXNXaGVuRGVyaXZlZCIsInZhbGlkYXRlV2hlblN0YXRlZCIsInZhbGlkYXRlV2hlbkRlcml2ZWQiLCJ0ZXJtU3RyaW5nIiwidGVybVNpbmd1bGFyIiwiaXNTaW5ndWxhciIsInZlcmlmaWVzRm9yd2FyZHMiLCJmcmFtZVN0cmluZyIsImZyYW1lU2luZ3VsYXIiLCJnZW5lcmFsQ29udGV4dCIsInNwZWNpZmljQ29udGV4dCIsInVuaWZ5SW5kZXBlbmRlbnRseSIsInVuaWZpZXNJbmRlcGVuZGVudGx5IiwidGVybUZyb21UZXJtQW5kU3Vic3RpdHV0aW9ucyIsImZyYW1lRnJvbUZyYW1lQW5kU3Vic3RpdHV0aW9ucyIsIkFzc2VydGlvbiIsIm5hbWUiLCJ2YXJpYWJsZSIsImdldFZhcmlhYmxlIiwidmFyaWFibGVEZWZpbmVkIiwiaXNWYXJpYWJsZURlZmluZWQiLCJtZXRhdmFyaWFibGUiLCJnZXRNZXRhdmFyaWFibGUiLCJtZXRhdmFyaWFibGVEZWZpbmVkIiwiaXNNZXRhdmFyaWFibGVEZWZpbmVkIiwiZXF1aXZhbGVuY2VzIiwiZ2V0RXF1aXZhbGVuY2VzIiwiZ3JvdW5kZWRUZXJtcyIsImRlZmluZWRWYXJpYWJsZXMiLCJzZXBhcmF0ZUdyb3VuZGVkVGVybXNBbmREZWZpbmVkVmFyaWFibGVzIiwidmFyaWFibGVNYXRjaGVzRGVmaW5lZFZhcmlhYmxlIiwic29tZSIsImRlZmluZWRWYXJpYWJsZSIsImRlZmluZWRWYXJpYWJsZUVxdWFsVG9WYXJpYWJsZSIsImNvbXBhcmUiLCJqdWRnZW1lbnRQcmVzZW50IiwiaXNKdWRnZW1lbnRQcmVzZW50QnlNZXRhdmFyaWFibGUiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQU9BOzs7ZUFBQTs7O2dFQUxzQjt3QkFFQzs2QkFDc0Q7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUU3RSxXQUFlQSxJQUFBQSxnQkFBTSxxQ0FBQzs7YUFBTUMsaUJBQ2RDLE9BQU8sRUFBRUMsTUFBTSxFQUFFQyxJQUFJLEVBQUVDLElBQUksRUFBRUMsS0FBSyxFQUFFQyxPQUFPO2dDQUQ3Qk47O2dCQUV4QixrQkFGd0JBO1lBRWxCQztZQUFTQztZQUFRQzs7UUFFdkIsTUFBS0MsSUFBSSxHQUFHQTtRQUNaLE1BQUtDLEtBQUssR0FBRUE7UUFDWixNQUFLQyxPQUFPLEdBQUdBOzs7OztZQUdqQkMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDSCxJQUFJO1lBQ2xCOzs7WUFFQUksS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDSCxLQUFLO1lBQ25COzs7WUFFQUksS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDSCxPQUFPO1lBQ3JCOzs7WUFFQUksS0FBQUE7bUJBQUFBLFNBQUFBLFNBQVNDLFdBQVcsRUFBRUMsTUFBTSxFQUFFWCxPQUFP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