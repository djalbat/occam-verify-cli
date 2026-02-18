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
var _ContainedAssertion;
var _default = (0, _elements.define)((_ContainedAssertion = /*#__PURE__*/ function(Assertion) {
    _inherits(ContainedAssertion, Assertion);
    function ContainedAssertion(context, string, node, term, frame, negated, statement) {
        _class_call_check(this, ContainedAssertion);
        var _this;
        _this = _call_super(this, ContainedAssertion, [
            context,
            string,
            node
        ]);
        _this.term = term;
        _this.frame = frame;
        _this.negated = negated;
        _this.statement = statement;
        return _this;
    }
    _create_class(ContainedAssertion, [
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
            key: "getStatement",
            value: function getStatement() {
                return this.statement;
            }
        },
        {
            key: "getContainedAssertionNode",
            value: function getContainedAssertionNode() {
                var node = this.getNode(), containedAssertionNode = node; ///
                return containedAssertionNode;
            }
        },
        {
            key: "validate",
            value: function validate(assignments, stated, context) {
                var validates = false;
                var containedAssertionString = this.getString(); ///
                context.trace("Validating the '".concat(containedAssertionString, "' contained assertion..."));
                var valid = this.isValid(context);
                if (!valid) {
                    validates = true;
                    context.debug("...the '".concat(containedAssertionString, "' contained assertion is already valid."));
                } else {
                    var termValidates = this.validateTerm(assignments, stated, context), frameVerifies = this.validateFrame(assignments, stated, context), statementValidates = this.validateStatement(assignments, stated, context);
                    if (termValidates || frameVerifies || statementValidates) {
                        var validatesWhenStated = false, validatesWhenDerived = false;
                        if (stated) {
                            validatesWhenStated = this.validateWhenStated(assignments, context);
                        } else {
                            validatesWhenDerived = this.validateWhenDerived(context);
                        }
                        if (validatesWhenStated || validatesWhenDerived) {
                            validates = true;
                        }
                    }
                    if (validates) {
                        context.debug("...validated the '".concat(containedAssertionString, "' contained assertion."));
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
                    var termString = this.term.getString(), containedAssertionString = this.getString(); ///
                    context.trace("Validating the '".concat(containedAssertionString, "' contained assertino's '").concat(termString, "' term..."));
                    var termSingular = this.term.isSingular();
                    if (!termSingular) {
                        context.debug("The '".concat(termString, "' term is not singular."));
                    } else {
                        termValidates = this.term.validate(context, function() {
                            var validatesForwards = true;
                            return validatesForwards;
                        });
                        if (termValidates) {
                            context.debug("...validated the '".concat(containedAssertionString, "' contained assertino's '").concat(termString, "' term."));
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
                    var frameString = this.frame.getString(), containedAssertionString = this.getString(); ///
                    context.trace("Validating the '".concat(containedAssertionString, "' contained assertino's '").concat(frameString, "' frame..."));
                    var frameSingular = this.frame.isSingular();
                    if (!frameSingular) {
                        context.debug("The '".concat(frameString, "' frame is not singular."));
                    } else {
                        stated = true; ///
                        assignments = null; ///
                        frameVerifies = this.frame.validate(assignments, stated, context);
                        if (frameVerifies) {
                            context.debug("...validated the '".concat(containedAssertionString, "' contained assertino's '").concat(frameString, "' frame."));
                        }
                    }
                }
                return frameVerifies;
            }
        },
        {
            key: "validateStatement",
            value: function validateStatement(assignments, stated, context) {
                var statementValidates = false;
                if (this.statement !== null) {
                    var statementString = this.statement.getString();
                    context.trace("Validating the '".concat(statementString, "' statement..."));
                    stated = true; ///
                    assignments = null; ///
                    statementValidates = this.statement.validate(assignments, stated, context);
                    if (statementValidates) {
                        context.debug("...validated the '".concat(statementString, "' statement."));
                    }
                }
                return statementValidates;
            }
        },
        {
            key: "validateWhenStated",
            value: function validateWhenStated(assignments, context) {
                var validatesWhenStated;
                var containedAssertionString = this.getString(); ///
                context.trace("Validating the '".concat(containedAssertionString, "' stated contained assertion..."));
                validatesWhenStated = true;
                if (validatesWhenStated) {
                    context.debug("...validated the '".concat(containedAssertionString, "' stated contained assertion."));
                }
                return validatesWhenStated;
            }
        },
        {
            key: "validateWhenDerived",
            value: function validateWhenDerived1(context) {
                var validatesWhenDerived;
                var containedAssertionString = this.getString(); ///
                context.trace("Validating the '".concat(containedAssertionString, "' derived contained assertion..."));
                var generalCotnext = null, specificContext = context; ///
                validatesWhenDerived = validateWhenDerived(this.term, this.frame, this.statement, this.negated, generalCotnext, specificContext);
                if (validatesWhenDerived) {
                    context.debug("...validated the '".concat(containedAssertionString, "' derived contained assertion."));
                }
                return validatesWhenDerived;
            }
        },
        {
            key: "unifyIndependently",
            value: function unifyIndependently(generalContext, specificContext) {
                var unifiesIndependently;
                var context = specificContext, containedAssertionString = this.getString(); ///
                context.trace("Unifying the '".concat(containedAssertionString, "' contained assertion independently..."));
                var term = (0, _substitutions.termFromTermAndSubstitutions)(this.term, generalContext, specificContext), frame = (0, _substitutions.frameFromFrameAndSubstitutions)(this.frame, generalContext, specificContext), statement = (0, _substitutions.statementFromStatementAndSubstitutions)(this.statement, generalContext, specificContext), validatesWhenDerived = validateWhenDerived(term, frame, statement, this.negated, generalContext, specificContext);
                unifiesIndependently = validatesWhenDerived; ///
                if (unifiesIndependently) {
                    context.debug("...unified the '".concat(containedAssertionString, "' contained assertion independently."));
                }
                return unifiesIndependently;
            }
        }
    ]);
    return ContainedAssertion;
}(_assertion.default), _define_property(_ContainedAssertion, "name", "ContainedAssertion"), _ContainedAssertion));
function validateWhenDerived(term, frame, statement, negated, generalContext, specificContext) {
    var validatesWhenDerived = false;
    var context = specificContext; ///
    if (statement !== null) {
        if (term !== null) {
            var termContained = statement.isTermContained(term, context);
            if (!negated && termContained) {
                validatesWhenDerived = true;
            }
            if (negated && !termContained) {
                validatesWhenDerived = true;
            }
        }
        if (frame !== null) {
            var frameContained = statement.isFrameContained(frame, context);
            if (!negated && frameContained) {
                validatesWhenDerived = true;
            }
            if (negated && !frameContained) {
                validatesWhenDerived = true;
            }
        }
    }
    return validatesWhenDerived;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9lbGVtZW50L2Fzc2VydGlvbi9jb250YWluZWQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBBc3NlcnRpb24gZnJvbSBcIi4uL2Fzc2VydGlvblwiO1xuXG5pbXBvcnQgeyBkZWZpbmUgfSBmcm9tIFwiLi4vLi4vZWxlbWVudHNcIjtcbmltcG9ydCB7IHRlcm1Gcm9tVGVybUFuZFN1YnN0aXR1dGlvbnMsIGZyYW1lRnJvbUZyYW1lQW5kU3Vic3RpdHV0aW9ucywgc3RhdGVtZW50RnJvbVN0YXRlbWVudEFuZFN1YnN0aXR1dGlvbnMgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL3N1YnN0aXR1dGlvbnNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lKGNsYXNzIENvbnRhaW5lZEFzc2VydGlvbiBleHRlbmRzIEFzc2VydGlvbiB7XG4gIGNvbnN0cnVjdG9yKGNvbnRleHQsIHN0cmluZywgbm9kZSwgdGVybSwgZnJhbWUsIG5lZ2F0ZWQsIHN0YXRlbWVudCkge1xuICAgIHN1cGVyKGNvbnRleHQsIHN0cmluZywgbm9kZSk7XG5cbiAgICB0aGlzLnRlcm0gPSB0ZXJtO1xuICAgIHRoaXMuZnJhbWUgPSBmcmFtZTtcbiAgICB0aGlzLm5lZ2F0ZWQgPSBuZWdhdGVkO1xuICAgIHRoaXMuc3RhdGVtZW50ID0gc3RhdGVtZW50O1xuICB9XG5cbiAgZ2V0VGVybSgpIHtcbiAgICByZXR1cm4gdGhpcy50ZXJtO1xuICB9XG5cbiAgZ2V0RnJhbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZnJhbWU7XG4gIH1cblxuICBpc05lZ2F0ZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMubmVnYXRlZDtcbiAgfVxuXG4gIGdldFN0YXRlbWVudCgpIHtcbiAgICByZXR1cm4gdGhpcy5zdGF0ZW1lbnQ7XG4gIH1cblxuICBnZXRDb250YWluZWRBc3NlcnRpb25Ob2RlKCkge1xuICAgIGNvbnN0IG5vZGUgPSB0aGlzLmdldE5vZGUoKSxcbiAgICAgICAgICBjb250YWluZWRBc3NlcnRpb25Ob2RlID0gbm9kZTsgIC8vL1xuXG4gICAgcmV0dXJuIGNvbnRhaW5lZEFzc2VydGlvbk5vZGU7XG4gIH1cblxuICB2YWxpZGF0ZShhc3NpZ25tZW50cywgc3RhdGVkLCBjb250ZXh0KSB7XG4gICAgbGV0IHZhbGlkYXRlcyA9IGZhbHNlO1xuXG4gICAgY29uc3QgY29udGFpbmVkQXNzZXJ0aW9uU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWYWxpZGF0aW5nIHRoZSAnJHtjb250YWluZWRBc3NlcnRpb25TdHJpbmd9JyBjb250YWluZWQgYXNzZXJ0aW9uLi4uYCk7XG5cbiAgICBjb25zdCB2YWxpZCA9IHRoaXMuaXNWYWxpZChjb250ZXh0KTtcblxuICAgIGlmICghdmFsaWQpIHtcbiAgICAgIHZhbGlkYXRlcyA9IHRydWU7XG5cbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnRoZSAnJHtjb250YWluZWRBc3NlcnRpb25TdHJpbmd9JyBjb250YWluZWQgYXNzZXJ0aW9uIGlzIGFscmVhZHkgdmFsaWQuYCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHRlcm1WYWxpZGF0ZXMgPSB0aGlzLnZhbGlkYXRlVGVybShhc3NpZ25tZW50cywgc3RhdGVkLCBjb250ZXh0KSxcbiAgICAgICAgICAgIGZyYW1lVmVyaWZpZXMgPSB0aGlzLnZhbGlkYXRlRnJhbWUoYXNzaWdubWVudHMsIHN0YXRlZCwgY29udGV4dCksXG4gICAgICAgICAgICBzdGF0ZW1lbnRWYWxpZGF0ZXMgPSB0aGlzLnZhbGlkYXRlU3RhdGVtZW50KGFzc2lnbm1lbnRzLCBzdGF0ZWQsIGNvbnRleHQpXG5cbiAgICAgIGlmICh0ZXJtVmFsaWRhdGVzIHx8IGZyYW1lVmVyaWZpZXMgfHwgc3RhdGVtZW50VmFsaWRhdGVzKSB7XG4gICAgICAgIGxldCB2YWxpZGF0ZXNXaGVuU3RhdGVkID0gZmFsc2UsXG4gICAgICAgICAgICB2YWxpZGF0ZXNXaGVuRGVyaXZlZCA9IGZhbHNlO1xuXG4gICAgICAgIGlmIChzdGF0ZWQpIHtcbiAgICAgICAgICB2YWxpZGF0ZXNXaGVuU3RhdGVkID0gdGhpcy52YWxpZGF0ZVdoZW5TdGF0ZWQoYXNzaWdubWVudHMsIGNvbnRleHQpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHZhbGlkYXRlc1doZW5EZXJpdmVkID0gdGhpcy52YWxpZGF0ZVdoZW5EZXJpdmVkKGNvbnRleHQpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHZhbGlkYXRlc1doZW5TdGF0ZWQgfHwgdmFsaWRhdGVzV2hlbkRlcml2ZWQpIHtcbiAgICAgICAgICB2YWxpZGF0ZXMgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmICh2YWxpZGF0ZXMpIHtcbiAgICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmFsaWRhdGVkIHRoZSAnJHtjb250YWluZWRBc3NlcnRpb25TdHJpbmd9JyBjb250YWluZWQgYXNzZXJ0aW9uLmApO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB2YWxpZGF0ZXM7XG4gIH1cblxuICB2YWxpZGF0ZVRlcm0oYXNzaWdubWVudHMsIHN0YXRlZCwgY29udGV4dCkge1xuICAgIGxldCB0ZXJtVmFsaWRhdGVzID0gZmFsc2U7XG5cbiAgICBpZiAodGhpcy50ZXJtICE9PSBudWxsKSB7XG4gICAgICBjb25zdCB0ZXJtU3RyaW5nID0gdGhpcy50ZXJtLmdldFN0cmluZygpLFxuICAgICAgICAgICAgY29udGFpbmVkQXNzZXJ0aW9uU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgLy8vXG5cbiAgICAgIGNvbnRleHQudHJhY2UoYFZhbGlkYXRpbmcgdGhlICcke2NvbnRhaW5lZEFzc2VydGlvblN0cmluZ30nIGNvbnRhaW5lZCBhc3NlcnRpbm8ncyAnJHt0ZXJtU3RyaW5nfScgdGVybS4uLmApO1xuXG4gICAgICBjb25zdCB0ZXJtU2luZ3VsYXIgPSB0aGlzLnRlcm0uaXNTaW5ndWxhcigpO1xuXG4gICAgICBpZiAoIXRlcm1TaW5ndWxhcikge1xuICAgICAgICBjb250ZXh0LmRlYnVnKGBUaGUgJyR7dGVybVN0cmluZ30nIHRlcm0gaXMgbm90IHNpbmd1bGFyLmApO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGVybVZhbGlkYXRlcyA9IHRoaXMudGVybS52YWxpZGF0ZShjb250ZXh0LCAoKSA9PiB7XG4gICAgICAgICAgY29uc3QgdmFsaWRhdGVzRm9yd2FyZHMgPSB0cnVlO1xuXG4gICAgICAgICAgcmV0dXJuIHZhbGlkYXRlc0ZvcndhcmRzO1xuICAgICAgICB9KTtcblxuICAgICAgICBpZiAodGVybVZhbGlkYXRlcykge1xuICAgICAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZhbGlkYXRlZCB0aGUgJyR7Y29udGFpbmVkQXNzZXJ0aW9uU3RyaW5nfScgY29udGFpbmVkIGFzc2VydGlubydzICcke3Rlcm1TdHJpbmd9JyB0ZXJtLmApO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRlcm1WYWxpZGF0ZXM7XG4gIH1cblxuICB2YWxpZGF0ZUZyYW1lKGFzc2lnbm1lbnRzLCBzdGF0ZWQsIGNvbnRleHQpIHtcbiAgICBsZXQgZnJhbWVWZXJpZmllcyA9IGZhbHNlO1xuXG4gICAgaWYgKHRoaXMuZnJhbWUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IGZyYW1lU3RyaW5nID0gdGhpcy5mcmFtZS5nZXRTdHJpbmcoKSxcbiAgICAgICAgICAgIGNvbnRhaW5lZEFzc2VydGlvblN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7IC8vL1xuXG4gICAgICBjb250ZXh0LnRyYWNlKGBWYWxpZGF0aW5nIHRoZSAnJHtjb250YWluZWRBc3NlcnRpb25TdHJpbmd9JyBjb250YWluZWQgYXNzZXJ0aW5vJ3MgJyR7ZnJhbWVTdHJpbmd9JyBmcmFtZS4uLmApO1xuXG4gICAgICBjb25zdCBmcmFtZVNpbmd1bGFyID0gdGhpcy5mcmFtZS5pc1Npbmd1bGFyKCk7XG5cbiAgICAgIGlmICghZnJhbWVTaW5ndWxhcikge1xuICAgICAgICBjb250ZXh0LmRlYnVnKGBUaGUgJyR7ZnJhbWVTdHJpbmd9JyBmcmFtZSBpcyBub3Qgc2luZ3VsYXIuYCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzdGF0ZWQgPSB0cnVlOyAgLy8vXG5cbiAgICAgICAgYXNzaWdubWVudHMgPSBudWxsOyAvLy9cblxuICAgICAgICBmcmFtZVZlcmlmaWVzID0gdGhpcy5mcmFtZS52YWxpZGF0ZShhc3NpZ25tZW50cywgc3RhdGVkLCBjb250ZXh0KTtcblxuICAgICAgICBpZiAoZnJhbWVWZXJpZmllcykge1xuICAgICAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZhbGlkYXRlZCB0aGUgJyR7Y29udGFpbmVkQXNzZXJ0aW9uU3RyaW5nfScgY29udGFpbmVkIGFzc2VydGlubydzICcke2ZyYW1lU3RyaW5nfScgZnJhbWUuYCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZnJhbWVWZXJpZmllcztcbiAgfVxuXG4gIHZhbGlkYXRlU3RhdGVtZW50KGFzc2lnbm1lbnRzLCBzdGF0ZWQsIGNvbnRleHQpIHtcbiAgICBsZXQgc3RhdGVtZW50VmFsaWRhdGVzID0gZmFsc2U7XG5cbiAgICBpZiAodGhpcy5zdGF0ZW1lbnQgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHN0YXRlbWVudFN0cmluZyA9IHRoaXMuc3RhdGVtZW50LmdldFN0cmluZygpO1xuXG4gICAgICBjb250ZXh0LnRyYWNlKGBWYWxpZGF0aW5nIHRoZSAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQuLi5gKTtcblxuICAgICAgc3RhdGVkID0gdHJ1ZTsgIC8vL1xuXG4gICAgICBhc3NpZ25tZW50cyA9IG51bGw7IC8vL1xuXG4gICAgICBzdGF0ZW1lbnRWYWxpZGF0ZXMgPSB0aGlzLnN0YXRlbWVudC52YWxpZGF0ZShhc3NpZ25tZW50cywgc3RhdGVkLCBjb250ZXh0KTtcblxuICAgICAgaWYgKHN0YXRlbWVudFZhbGlkYXRlcykge1xuICAgICAgICBjb250ZXh0LmRlYnVnKGAuLi52YWxpZGF0ZWQgdGhlICcke3N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudC5gKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gc3RhdGVtZW50VmFsaWRhdGVzO1xuICB9XG5cbiAgdmFsaWRhdGVXaGVuU3RhdGVkKGFzc2lnbm1lbnRzLCBjb250ZXh0KSB7XG4gICAgbGV0IHZhbGlkYXRlc1doZW5TdGF0ZWQ7XG5cbiAgICBjb25zdCBjb250YWluZWRBc3NlcnRpb25TdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZhbGlkYXRpbmcgdGhlICcke2NvbnRhaW5lZEFzc2VydGlvblN0cmluZ30nIHN0YXRlZCBjb250YWluZWQgYXNzZXJ0aW9uLi4uYCk7XG5cbiAgICB2YWxpZGF0ZXNXaGVuU3RhdGVkID0gdHJ1ZTtcblxuICAgIGlmICh2YWxpZGF0ZXNXaGVuU3RhdGVkKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52YWxpZGF0ZWQgdGhlICcke2NvbnRhaW5lZEFzc2VydGlvblN0cmluZ30nIHN0YXRlZCBjb250YWluZWQgYXNzZXJ0aW9uLmApO1xuICAgIH1cblxuICAgIHJldHVybiB2YWxpZGF0ZXNXaGVuU3RhdGVkO1xuICB9XG5cbiAgdmFsaWRhdGVXaGVuRGVyaXZlZChjb250ZXh0KSB7XG4gICAgbGV0IHZhbGlkYXRlc1doZW5EZXJpdmVkO1xuXG4gICAgY29uc3QgY29udGFpbmVkQXNzZXJ0aW9uU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWYWxpZGF0aW5nIHRoZSAnJHtjb250YWluZWRBc3NlcnRpb25TdHJpbmd9JyBkZXJpdmVkIGNvbnRhaW5lZCBhc3NlcnRpb24uLi5gKTtcblxuICAgIGNvbnN0IGdlbmVyYWxDb3RuZXh0ID0gbnVsbCxcbiAgICAgICAgICBzcGVjaWZpY0NvbnRleHQgPSBjb250ZXh0OyAvLy9cblxuICAgIHZhbGlkYXRlc1doZW5EZXJpdmVkID0gdmFsaWRhdGVXaGVuRGVyaXZlZCh0aGlzLnRlcm0sIHRoaXMuZnJhbWUsIHRoaXMuc3RhdGVtZW50LCB0aGlzLm5lZ2F0ZWQsIGdlbmVyYWxDb3RuZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgaWYgKHZhbGlkYXRlc1doZW5EZXJpdmVkKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52YWxpZGF0ZWQgdGhlICcke2NvbnRhaW5lZEFzc2VydGlvblN0cmluZ30nIGRlcml2ZWQgY29udGFpbmVkIGFzc2VydGlvbi5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmFsaWRhdGVzV2hlbkRlcml2ZWQ7XG4gIH1cblxuICB1bmlmeUluZGVwZW5kZW50bHkoZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCkge1xuICAgIGxldCB1bmlmaWVzSW5kZXBlbmRlbnRseTtcblxuICAgIGNvbnN0IGNvbnRleHQgPSBzcGVjaWZpY0NvbnRleHQsICAvLy9cbiAgICAgICAgICBjb250YWluZWRBc3NlcnRpb25TdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFVuaWZ5aW5nIHRoZSAnJHtjb250YWluZWRBc3NlcnRpb25TdHJpbmd9JyBjb250YWluZWQgYXNzZXJ0aW9uIGluZGVwZW5kZW50bHkuLi5gKTtcblxuICAgIGNvbnN0IHRlcm0gPSB0ZXJtRnJvbVRlcm1BbmRTdWJzdGl0dXRpb25zKHRoaXMudGVybSwgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCksXG4gICAgICAgICAgZnJhbWUgPSBmcmFtZUZyb21GcmFtZUFuZFN1YnN0aXR1dGlvbnModGhpcy5mcmFtZSwgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCksXG4gICAgICAgICAgc3RhdGVtZW50ID0gc3RhdGVtZW50RnJvbVN0YXRlbWVudEFuZFN1YnN0aXR1dGlvbnModGhpcy5zdGF0ZW1lbnQsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpLFxuICAgICAgICAgIHZhbGlkYXRlc1doZW5EZXJpdmVkID0gdmFsaWRhdGVXaGVuRGVyaXZlZCh0ZXJtLCBmcmFtZSwgc3RhdGVtZW50LCB0aGlzLm5lZ2F0ZWQsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgdW5pZmllc0luZGVwZW5kZW50bHkgPSB2YWxpZGF0ZXNXaGVuRGVyaXZlZDsgLy8vXG5cbiAgICBpZiAodW5pZmllc0luZGVwZW5kZW50bHkpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnVuaWZpZWQgdGhlICcke2NvbnRhaW5lZEFzc2VydGlvblN0cmluZ30nIGNvbnRhaW5lZCBhc3NlcnRpb24gaW5kZXBlbmRlbnRseS5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdW5pZmllc0luZGVwZW5kZW50bHk7XG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiQ29udGFpbmVkQXNzZXJ0aW9uXCI7XG59KTtcblxuZnVuY3Rpb24gdmFsaWRhdGVXaGVuRGVyaXZlZCh0ZXJtLCBmcmFtZSwgc3RhdGVtZW50LCBuZWdhdGVkLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KSB7XG4gIGxldCB2YWxpZGF0ZXNXaGVuRGVyaXZlZCA9IGZhbHNlO1xuXG4gIGNvbnN0IGNvbnRleHQgPSBzcGVjaWZpY0NvbnRleHQ7ICAvLy9cblxuICBpZiAoc3RhdGVtZW50ICE9PSBudWxsKSB7XG4gICAgaWYgKHRlcm0gIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHRlcm1Db250YWluZWQgPSBzdGF0ZW1lbnQuaXNUZXJtQ29udGFpbmVkKHRlcm0sIGNvbnRleHQpO1xuXG4gICAgICBpZiAoIW5lZ2F0ZWQgJiYgdGVybUNvbnRhaW5lZCkge1xuICAgICAgICB2YWxpZGF0ZXNXaGVuRGVyaXZlZCA9IHRydWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWdhdGVkICYmICF0ZXJtQ29udGFpbmVkKSB7XG4gICAgICAgIHZhbGlkYXRlc1doZW5EZXJpdmVkID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoZnJhbWUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IGZyYW1lQ29udGFpbmVkID0gc3RhdGVtZW50LmlzRnJhbWVDb250YWluZWQoZnJhbWUsIGNvbnRleHQpO1xuXG4gICAgICBpZiAoIW5lZ2F0ZWQgJiYgZnJhbWVDb250YWluZWQpIHtcbiAgICAgICAgdmFsaWRhdGVzV2hlbkRlcml2ZWQgPSB0cnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVnYXRlZCAmJiAhZnJhbWVDb250YWluZWQpIHtcbiAgICAgICAgdmFsaWRhdGVzV2hlbkRlcml2ZWQgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB2YWxpZGF0ZXNXaGVuRGVyaXZlZDtcbn0iXSwibmFtZXMiOlsiZGVmaW5lIiwiQ29udGFpbmVkQXNzZXJ0aW9uIiwiY29udGV4dCIsInN0cmluZyIsIm5vZGUiLCJ0ZXJtIiwiZnJhbWUiLCJuZWdhdGVkIiwic3RhdGVtZW50IiwiZ2V0VGVybSIsImdldEZyYW1lIiwiaXNOZWdhdGVkIiwiZ2V0U3RhdGVtZW50IiwiZ2V0Q29udGFpbmVkQXNzZXJ0aW9uTm9kZSIsImdldE5vZGUiLCJjb250YWluZWRBc3NlcnRpb25Ob2RlIiwidmFsaWRhdGUiLCJhc3NpZ25tZW50cyIsInN0YXRlZCIsInZhbGlkYXRlcyIsImNvbnRhaW5lZEFzc2VydGlvblN0cmluZyIsImdldFN0cmluZyIsInRyYWNlIiwidmFsaWQiLCJpc1ZhbGlkIiwiZGVidWciLCJ0ZXJtVmFsaWRhdGVzIiwidmFsaWRhdGVUZXJtIiwiZnJhbWVWZXJpZmllcyIsInZhbGlkYXRlRnJhbWUiLCJzdGF0ZW1lbnRWYWxpZGF0ZXMiLCJ2YWxpZGF0ZVN0YXRlbWVudCIsInZhbGlkYXRlc1doZW5TdGF0ZWQiLCJ2YWxpZGF0ZXNXaGVuRGVyaXZlZCIsInZhbGlkYXRlV2hlblN0YXRlZCIsInZhbGlkYXRlV2hlbkRlcml2ZWQiLCJ0ZXJtU3RyaW5nIiwidGVybVNpbmd1bGFyIiwiaXNTaW5ndWxhciIsInZhbGlkYXRlc0ZvcndhcmRzIiwiZnJhbWVTdHJpbmciLCJmcmFtZVNpbmd1bGFyIiwic3RhdGVtZW50U3RyaW5nIiwiZ2VuZXJhbENvdG5leHQiLCJzcGVjaWZpY0NvbnRleHQiLCJ1bmlmeUluZGVwZW5kZW50bHkiLCJnZW5lcmFsQ29udGV4dCIsInVuaWZpZXNJbmRlcGVuZGVudGx5IiwidGVybUZyb21UZXJtQW5kU3Vic3RpdHV0aW9ucyIsImZyYW1lRnJvbUZyYW1lQW5kU3Vic3RpdHV0aW9ucyIsInN0YXRlbWVudEZyb21TdGF0ZW1lbnRBbmRTdWJzdGl0dXRpb25zIiwiQXNzZXJ0aW9uIiwibmFtZSIsInRlcm1Db250YWluZWQiLCJpc1Rlcm1Db250YWluZWQiLCJmcmFtZUNvbnRhaW5lZCIsImlzRnJhbWVDb250YWluZWQiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQU9BOzs7ZUFBQTs7O2dFQUxzQjt3QkFFQzs2QkFDOEY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUVySCxXQUFlQSxJQUFBQSxnQkFBTSx1Q0FBQzs7YUFBTUMsbUJBQ2RDLE9BQU8sRUFBRUMsTUFBTSxFQUFFQyxJQUFJLEVBQUVDLElBQUksRUFBRUMsS0FBSyxFQUFFQyxPQUFPLEVBQUVDLFNBQVM7Z0NBRHhDUDs7Z0JBRXhCLGtCQUZ3QkE7WUFFbEJDO1lBQVNDO1lBQVFDOztRQUV2QixNQUFLQyxJQUFJLEdBQUdBO1FBQ1osTUFBS0MsS0FBSyxHQUFHQTtRQUNiLE1BQUtDLE9BQU8sR0FBR0E7UUFDZixNQUFLQyxTQUFTLEdBQUdBOzs7OztZQUduQkMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDSixJQUFJO1lBQ2xCOzs7WUFFQUssS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNF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