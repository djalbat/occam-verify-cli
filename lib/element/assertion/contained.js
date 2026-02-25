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
            value: function validate(stated, context) {
                var containedAssertion = null;
                var containedAssertionString = this.getString(); ///
                context.trace("Validating the '".concat(containedAssertionString, "' contained assertion..."));
                var validAssertion = this.findValidAssertion(context);
                if (validAssertion !== null) {
                    containedAssertion = validAssertion; ///
                    context.debug("...the '".concat(containedAssertionString, "' contained assertion is already valid."));
                } else {
                    var validates = false;
                    var termValidates = this.validateTerm(stated, context), frameValidates = this.validateFrame(stated, context), statementValidates = this.validateStatement(stated, context);
                    if (termValidates || frameValidates || statementValidates) {
                        var validatesWhenStated = false, validatesWhenDerived = false;
                        if (stated) {
                            validatesWhenStated = this.validateWhenStated(context);
                        } else {
                            validatesWhenDerived = this.validateWhenDerived(context);
                        }
                        if (validatesWhenStated || validatesWhenDerived) {
                            validates = true;
                        }
                    }
                    if (validates) {
                        var assertion = this; ///
                        containedAssertion = assertion; ///
                        context.addAssertion(assertion);
                        context.debug("...validated the '".concat(containedAssertionString, "' contained assertion."));
                    }
                }
                return containedAssertion;
            }
        },
        {
            key: "validateTerm",
            value: function validateTerm(stated, context) {
                var termValidates = false;
                if (this.term !== null) {
                    var termString = this.term.getString(), containedAssertionString = this.getString(); ///
                    context.trace("Validating the '".concat(containedAssertionString, "' contained assertino's '").concat(termString, "' term..."));
                    var termSingular = this.term.isSingular();
                    if (!termSingular) {
                        context.debug("The '".concat(termString, "' term is not singular."));
                    } else {
                        var term = this.term.validate(context, function() {
                            var validatesForwards = true;
                            return validatesForwards;
                        });
                        if (term !== null) {
                            this.term = term;
                            termValidates = true;
                        }
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
            value: function validateFrame(stated, context) {
                var frameValidates = false;
                if (this.frame !== null) {
                    var frameString = this.frame.getString(), containedAssertionString = this.getString(); ///
                    context.trace("Validating the '".concat(containedAssertionString, "' contained assertino's '").concat(frameString, "' frame..."));
                    var frameSingular = this.frame.isSingular();
                    if (!frameSingular) {
                        context.debug("The '".concat(frameString, "' frame is not singular."));
                    } else {
                        stated = true; ///
                        var frame = this.frame.validate(stated, context);
                        if (frame !== null) {
                            this.frame = frame;
                            frameValidates = true;
                        }
                    }
                    if (frameValidates) {
                        context.debug("...validated the '".concat(containedAssertionString, "' contained assertino's '").concat(frameString, "' frame."));
                    }
                }
                return frameValidates;
            }
        },
        {
            key: "validateStatement",
            value: function validateStatement(stated, context) {
                var statementValidates = false;
                if (this.statement !== null) {
                    var statementString = this.statement.getString();
                    context.trace("Validating the '".concat(statementString, "' statement..."));
                    stated = true; ///
                    var statement = this.statement.validate(stated, context);
                    if (statement !== null) {
                        statementValidates = true;
                    }
                    if (statementValidates) {
                        context.debug("...validated the '".concat(statementString, "' statement."));
                    }
                }
                return statementValidates;
            }
        },
        {
            key: "validateWhenStated",
            value: function validateWhenStated(context) {
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
        },
        {
            key: "toJSON",
            value: function toJSON() {
                debugger;
                var name = this.constructor.name, string = this.getString(), json = {
                    name: name,
                    string: string
                };
                return json;
            }
        }
    ], [
        {
            key: "fromJSON",
            value: function fromJSON(json, context) {
                var containedAssertion = null;
                var name = json.name;
                if (this.name === name) {
                    debugger;
                }
                return containedAssertion;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9lbGVtZW50L2Fzc2VydGlvbi9jb250YWluZWQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBBc3NlcnRpb24gZnJvbSBcIi4uL2Fzc2VydGlvblwiO1xuXG5pbXBvcnQgeyBkZWZpbmUgfSBmcm9tIFwiLi4vLi4vZWxlbWVudHNcIjtcbmltcG9ydCB7IHRlcm1Gcm9tVGVybUFuZFN1YnN0aXR1dGlvbnMsIGZyYW1lRnJvbUZyYW1lQW5kU3Vic3RpdHV0aW9ucywgc3RhdGVtZW50RnJvbVN0YXRlbWVudEFuZFN1YnN0aXR1dGlvbnMgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL3N1YnN0aXR1dGlvbnNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lKGNsYXNzIENvbnRhaW5lZEFzc2VydGlvbiBleHRlbmRzIEFzc2VydGlvbiB7XG4gIGNvbnN0cnVjdG9yKGNvbnRleHQsIHN0cmluZywgbm9kZSwgdGVybSwgZnJhbWUsIG5lZ2F0ZWQsIHN0YXRlbWVudCkge1xuICAgIHN1cGVyKGNvbnRleHQsIHN0cmluZywgbm9kZSk7XG5cbiAgICB0aGlzLnRlcm0gPSB0ZXJtO1xuICAgIHRoaXMuZnJhbWUgPSBmcmFtZTtcbiAgICB0aGlzLm5lZ2F0ZWQgPSBuZWdhdGVkO1xuICAgIHRoaXMuc3RhdGVtZW50ID0gc3RhdGVtZW50O1xuICB9XG5cbiAgZ2V0VGVybSgpIHtcbiAgICByZXR1cm4gdGhpcy50ZXJtO1xuICB9XG5cbiAgZ2V0RnJhbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZnJhbWU7XG4gIH1cblxuICBpc05lZ2F0ZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMubmVnYXRlZDtcbiAgfVxuXG4gIGdldFN0YXRlbWVudCgpIHtcbiAgICByZXR1cm4gdGhpcy5zdGF0ZW1lbnQ7XG4gIH1cblxuICBnZXRDb250YWluZWRBc3NlcnRpb25Ob2RlKCkge1xuICAgIGNvbnN0IG5vZGUgPSB0aGlzLmdldE5vZGUoKSxcbiAgICAgICAgICBjb250YWluZWRBc3NlcnRpb25Ob2RlID0gbm9kZTsgIC8vL1xuXG4gICAgcmV0dXJuIGNvbnRhaW5lZEFzc2VydGlvbk5vZGU7XG4gIH1cblxuICB2YWxpZGF0ZShzdGF0ZWQsIGNvbnRleHQpIHtcbiAgICBsZXQgY29udGFpbmVkQXNzZXJ0aW9uID0gbnVsbDtcblxuICAgIGNvbnN0IGNvbnRhaW5lZEFzc2VydGlvblN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7IC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmFsaWRhdGluZyB0aGUgJyR7Y29udGFpbmVkQXNzZXJ0aW9uU3RyaW5nfScgY29udGFpbmVkIGFzc2VydGlvbi4uLmApO1xuXG4gICAgY29uc3QgdmFsaWRBc3NlcnRpb24gPSB0aGlzLmZpbmRWYWxpZEFzc2VydGlvbihjb250ZXh0KTtcblxuICAgIGlmICh2YWxpZEFzc2VydGlvbiAhPT0gbnVsbCkge1xuICAgICAgY29udGFpbmVkQXNzZXJ0aW9uID0gdmFsaWRBc3NlcnRpb247ICAvLy9cblxuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udGhlICcke2NvbnRhaW5lZEFzc2VydGlvblN0cmluZ30nIGNvbnRhaW5lZCBhc3NlcnRpb24gaXMgYWxyZWFkeSB2YWxpZC5gKTtcbiAgICB9IGVsc2Uge1xuICAgICAgbGV0IHZhbGlkYXRlcyA9IGZhbHNlO1xuXG4gICAgICBjb25zdCB0ZXJtVmFsaWRhdGVzID0gdGhpcy52YWxpZGF0ZVRlcm0oc3RhdGVkLCBjb250ZXh0KSxcbiAgICAgICAgICAgIGZyYW1lVmFsaWRhdGVzID0gdGhpcy52YWxpZGF0ZUZyYW1lKHN0YXRlZCwgY29udGV4dCksXG4gICAgICAgICAgICBzdGF0ZW1lbnRWYWxpZGF0ZXMgPSB0aGlzLnZhbGlkYXRlU3RhdGVtZW50KHN0YXRlZCwgY29udGV4dClcblxuICAgICAgaWYgKHRlcm1WYWxpZGF0ZXMgfHwgZnJhbWVWYWxpZGF0ZXMgfHwgc3RhdGVtZW50VmFsaWRhdGVzKSB7XG4gICAgICAgIGxldCB2YWxpZGF0ZXNXaGVuU3RhdGVkID0gZmFsc2UsXG4gICAgICAgICAgICB2YWxpZGF0ZXNXaGVuRGVyaXZlZCA9IGZhbHNlO1xuXG4gICAgICAgIGlmIChzdGF0ZWQpIHtcbiAgICAgICAgICB2YWxpZGF0ZXNXaGVuU3RhdGVkID0gdGhpcy52YWxpZGF0ZVdoZW5TdGF0ZWQoY29udGV4dCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdmFsaWRhdGVzV2hlbkRlcml2ZWQgPSB0aGlzLnZhbGlkYXRlV2hlbkRlcml2ZWQoY29udGV4dCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodmFsaWRhdGVzV2hlblN0YXRlZCB8fCB2YWxpZGF0ZXNXaGVuRGVyaXZlZCkge1xuICAgICAgICAgIHZhbGlkYXRlcyA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHZhbGlkYXRlcykge1xuICAgICAgICBjb25zdCBhc3NlcnRpb24gPSB0aGlzOyAvLy9cblxuICAgICAgICBjb250YWluZWRBc3NlcnRpb24gPSBhc3NlcnRpb247ICAvLy9cblxuICAgICAgICBjb250ZXh0LmFkZEFzc2VydGlvbihhc3NlcnRpb24pO1xuXG4gICAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZhbGlkYXRlZCB0aGUgJyR7Y29udGFpbmVkQXNzZXJ0aW9uU3RyaW5nfScgY29udGFpbmVkIGFzc2VydGlvbi5gKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gY29udGFpbmVkQXNzZXJ0aW9uO1xuICB9XG5cbiAgdmFsaWRhdGVUZXJtKHN0YXRlZCwgY29udGV4dCkge1xuICAgIGxldCB0ZXJtVmFsaWRhdGVzID0gZmFsc2U7XG5cbiAgICBpZiAodGhpcy50ZXJtICE9PSBudWxsKSB7XG4gICAgICBjb25zdCB0ZXJtU3RyaW5nID0gdGhpcy50ZXJtLmdldFN0cmluZygpLFxuICAgICAgICAgICAgY29udGFpbmVkQXNzZXJ0aW9uU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgLy8vXG5cbiAgICAgIGNvbnRleHQudHJhY2UoYFZhbGlkYXRpbmcgdGhlICcke2NvbnRhaW5lZEFzc2VydGlvblN0cmluZ30nIGNvbnRhaW5lZCBhc3NlcnRpbm8ncyAnJHt0ZXJtU3RyaW5nfScgdGVybS4uLmApO1xuXG4gICAgICBjb25zdCB0ZXJtU2luZ3VsYXIgPSB0aGlzLnRlcm0uaXNTaW5ndWxhcigpO1xuXG4gICAgICBpZiAoIXRlcm1TaW5ndWxhcikge1xuICAgICAgICBjb250ZXh0LmRlYnVnKGBUaGUgJyR7dGVybVN0cmluZ30nIHRlcm0gaXMgbm90IHNpbmd1bGFyLmApO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgdGVybSA9IHRoaXMudGVybS52YWxpZGF0ZShjb250ZXh0LCAoKSA9PiB7XG4gICAgICAgICAgY29uc3QgdmFsaWRhdGVzRm9yd2FyZHMgPSB0cnVlO1xuXG4gICAgICAgICAgcmV0dXJuIHZhbGlkYXRlc0ZvcndhcmRzO1xuICAgICAgICB9KTtcblxuICAgICAgICBpZiAodGVybSAhPT0gbnVsbCkge1xuICAgICAgICAgIHRoaXMudGVybSA9IHRlcm07XG5cbiAgICAgICAgICB0ZXJtVmFsaWRhdGVzID0gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0ZXJtVmFsaWRhdGVzKSB7XG4gICAgICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmFsaWRhdGVkIHRoZSAnJHtjb250YWluZWRBc3NlcnRpb25TdHJpbmd9JyBjb250YWluZWQgYXNzZXJ0aW5vJ3MgJyR7dGVybVN0cmluZ30nIHRlcm0uYCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdGVybVZhbGlkYXRlcztcbiAgfVxuXG4gIHZhbGlkYXRlRnJhbWUoc3RhdGVkLCBjb250ZXh0KSB7XG4gICAgbGV0IGZyYW1lVmFsaWRhdGVzID0gZmFsc2U7XG5cbiAgICBpZiAodGhpcy5mcmFtZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgZnJhbWVTdHJpbmcgPSB0aGlzLmZyYW1lLmdldFN0cmluZygpLFxuICAgICAgICAgICAgY29udGFpbmVkQXNzZXJ0aW9uU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgLy8vXG5cbiAgICAgIGNvbnRleHQudHJhY2UoYFZhbGlkYXRpbmcgdGhlICcke2NvbnRhaW5lZEFzc2VydGlvblN0cmluZ30nIGNvbnRhaW5lZCBhc3NlcnRpbm8ncyAnJHtmcmFtZVN0cmluZ30nIGZyYW1lLi4uYCk7XG5cbiAgICAgIGNvbnN0IGZyYW1lU2luZ3VsYXIgPSB0aGlzLmZyYW1lLmlzU2luZ3VsYXIoKTtcblxuICAgICAgaWYgKCFmcmFtZVNpbmd1bGFyKSB7XG4gICAgICAgIGNvbnRleHQuZGVidWcoYFRoZSAnJHtmcmFtZVN0cmluZ30nIGZyYW1lIGlzIG5vdCBzaW5ndWxhci5gKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHN0YXRlZCA9IHRydWU7ICAvLy9cblxuICAgICAgICBjb25zdCBmcmFtZSA9IHRoaXMuZnJhbWUudmFsaWRhdGUoc3RhdGVkLCBjb250ZXh0KTtcblxuICAgICAgICBpZiAoZnJhbWUgIT09IG51bGwpIHtcbiAgICAgICAgICB0aGlzLmZyYW1lID0gZnJhbWU7XG5cbiAgICAgICAgICBmcmFtZVZhbGlkYXRlcyA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKGZyYW1lVmFsaWRhdGVzKSB7XG4gICAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZhbGlkYXRlZCB0aGUgJyR7Y29udGFpbmVkQXNzZXJ0aW9uU3RyaW5nfScgY29udGFpbmVkIGFzc2VydGlubydzICcke2ZyYW1lU3RyaW5nfScgZnJhbWUuYCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGZyYW1lVmFsaWRhdGVzO1xuICB9XG5cbiAgdmFsaWRhdGVTdGF0ZW1lbnQoc3RhdGVkLCBjb250ZXh0KSB7XG4gICAgbGV0IHN0YXRlbWVudFZhbGlkYXRlcyA9IGZhbHNlO1xuXG4gICAgaWYgKHRoaXMuc3RhdGVtZW50ICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBzdGF0ZW1lbnRTdHJpbmcgPSB0aGlzLnN0YXRlbWVudC5nZXRTdHJpbmcoKTtcblxuICAgICAgY29udGV4dC50cmFjZShgVmFsaWRhdGluZyB0aGUgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50Li4uYCk7XG5cbiAgICAgIHN0YXRlZCA9IHRydWU7ICAvLy9cblxuICAgICAgY29uc3Qgc3RhdGVtZW50ID0gdGhpcy5zdGF0ZW1lbnQudmFsaWRhdGUoc3RhdGVkLCBjb250ZXh0KTtcblxuICAgICAgaWYgKHN0YXRlbWVudCAhPT0gbnVsbCkge1xuICAgICAgICBzdGF0ZW1lbnRWYWxpZGF0ZXMgPSB0cnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAoc3RhdGVtZW50VmFsaWRhdGVzKSB7XG4gICAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZhbGlkYXRlZCB0aGUgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50LmApO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBzdGF0ZW1lbnRWYWxpZGF0ZXM7XG4gIH1cblxuICB2YWxpZGF0ZVdoZW5TdGF0ZWQoY29udGV4dCkge1xuICAgIGxldCB2YWxpZGF0ZXNXaGVuU3RhdGVkO1xuXG4gICAgY29uc3QgY29udGFpbmVkQXNzZXJ0aW9uU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWYWxpZGF0aW5nIHRoZSAnJHtjb250YWluZWRBc3NlcnRpb25TdHJpbmd9JyBzdGF0ZWQgY29udGFpbmVkIGFzc2VydGlvbi4uLmApO1xuXG4gICAgdmFsaWRhdGVzV2hlblN0YXRlZCA9IHRydWU7XG5cbiAgICBpZiAodmFsaWRhdGVzV2hlblN0YXRlZCkge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmFsaWRhdGVkIHRoZSAnJHtjb250YWluZWRBc3NlcnRpb25TdHJpbmd9JyBzdGF0ZWQgY29udGFpbmVkIGFzc2VydGlvbi5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmFsaWRhdGVzV2hlblN0YXRlZDtcbiAgfVxuXG4gIHZhbGlkYXRlV2hlbkRlcml2ZWQoY29udGV4dCkge1xuICAgIGxldCB2YWxpZGF0ZXNXaGVuRGVyaXZlZDtcblxuICAgIGNvbnN0IGNvbnRhaW5lZEFzc2VydGlvblN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7IC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmFsaWRhdGluZyB0aGUgJyR7Y29udGFpbmVkQXNzZXJ0aW9uU3RyaW5nfScgZGVyaXZlZCBjb250YWluZWQgYXNzZXJ0aW9uLi4uYCk7XG5cbiAgICBjb25zdCBnZW5lcmFsQ290bmV4dCA9IG51bGwsXG4gICAgICAgICAgc3BlY2lmaWNDb250ZXh0ID0gY29udGV4dDsgLy8vXG5cbiAgICB2YWxpZGF0ZXNXaGVuRGVyaXZlZCA9IHZhbGlkYXRlV2hlbkRlcml2ZWQodGhpcy50ZXJtLCB0aGlzLmZyYW1lLCB0aGlzLnN0YXRlbWVudCwgdGhpcy5uZWdhdGVkLCBnZW5lcmFsQ290bmV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgIGlmICh2YWxpZGF0ZXNXaGVuRGVyaXZlZCkge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmFsaWRhdGVkIHRoZSAnJHtjb250YWluZWRBc3NlcnRpb25TdHJpbmd9JyBkZXJpdmVkIGNvbnRhaW5lZCBhc3NlcnRpb24uYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZhbGlkYXRlc1doZW5EZXJpdmVkO1xuICB9XG5cbiAgdW5pZnlJbmRlcGVuZGVudGx5KGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpIHtcbiAgICBsZXQgdW5pZmllc0luZGVwZW5kZW50bHk7XG5cbiAgICBjb25zdCBjb250ZXh0ID0gc3BlY2lmaWNDb250ZXh0LCAgLy8vXG4gICAgICAgICAgY29udGFpbmVkQXNzZXJ0aW9uU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBVbmlmeWluZyB0aGUgJyR7Y29udGFpbmVkQXNzZXJ0aW9uU3RyaW5nfScgY29udGFpbmVkIGFzc2VydGlvbiBpbmRlcGVuZGVudGx5Li4uYCk7XG5cbiAgICBjb25zdCB0ZXJtID0gdGVybUZyb21UZXJtQW5kU3Vic3RpdHV0aW9ucyh0aGlzLnRlcm0sIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpLFxuICAgICAgICAgIGZyYW1lID0gZnJhbWVGcm9tRnJhbWVBbmRTdWJzdGl0dXRpb25zKHRoaXMuZnJhbWUsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpLFxuICAgICAgICAgIHN0YXRlbWVudCA9IHN0YXRlbWVudEZyb21TdGF0ZW1lbnRBbmRTdWJzdGl0dXRpb25zKHRoaXMuc3RhdGVtZW50LCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KSxcbiAgICAgICAgICB2YWxpZGF0ZXNXaGVuRGVyaXZlZCA9IHZhbGlkYXRlV2hlbkRlcml2ZWQodGVybSwgZnJhbWUsIHN0YXRlbWVudCwgdGhpcy5uZWdhdGVkLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgIHVuaWZpZXNJbmRlcGVuZGVudGx5ID0gdmFsaWRhdGVzV2hlbkRlcml2ZWQ7IC8vL1xuXG4gICAgaWYgKHVuaWZpZXNJbmRlcGVuZGVudGx5KSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi51bmlmaWVkIHRoZSAnJHtjb250YWluZWRBc3NlcnRpb25TdHJpbmd9JyBjb250YWluZWQgYXNzZXJ0aW9uIGluZGVwZW5kZW50bHkuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHVuaWZpZXNJbmRlcGVuZGVudGx5O1xuICB9XG5cbiAgc3RhdGljIG5hbWUgPSBcIkNvbnRhaW5lZEFzc2VydGlvblwiO1xuXG4gIHRvSlNPTigpIHtcbiAgICBkZWJ1Z2dlclxuXG4gICAgY29uc3QgeyBuYW1lIH0gPSB0aGlzLmNvbnN0cnVjdG9yLFxuICAgICAgICAgIHN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCksXG4gICAgICAgICAganNvbiA9IHtcbiAgICAgICAgICAgIG5hbWUsXG4gICAgICAgICAgICBzdHJpbmdcbiAgICAgICAgICB9O1xuXG4gICAgcmV0dXJuIGpzb247XG4gIH1cblxuICBzdGF0aWMgZnJvbUpTT04oanNvbiwgY29udGV4dCkge1xuICAgIGxldCBjb250YWluZWRBc3NlcnRpb24gPSBudWxsO1xuXG4gICAgY29uc3QgeyBuYW1lIH0gPSBqc29uO1xuXG4gICAgaWYgKHRoaXMubmFtZSA9PT0gbmFtZSkge1xuICAgICAgZGVidWdnZXJcbiAgICB9XG5cbiAgICByZXR1cm4gY29udGFpbmVkQXNzZXJ0aW9uO1xuICB9XG59KTtcblxuZnVuY3Rpb24gdmFsaWRhdGVXaGVuRGVyaXZlZCh0ZXJtLCBmcmFtZSwgc3RhdGVtZW50LCBuZWdhdGVkLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KSB7XG4gIGxldCB2YWxpZGF0ZXNXaGVuRGVyaXZlZCA9IGZhbHNlO1xuXG4gIGNvbnN0IGNvbnRleHQgPSBzcGVjaWZpY0NvbnRleHQ7ICAvLy9cblxuICBpZiAoc3RhdGVtZW50ICE9PSBudWxsKSB7XG4gICAgaWYgKHRlcm0gIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHRlcm1Db250YWluZWQgPSBzdGF0ZW1lbnQuaXNUZXJtQ29udGFpbmVkKHRlcm0sIGNvbnRleHQpO1xuXG4gICAgICBpZiAoIW5lZ2F0ZWQgJiYgdGVybUNvbnRhaW5lZCkge1xuICAgICAgICB2YWxpZGF0ZXNXaGVuRGVyaXZlZCA9IHRydWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWdhdGVkICYmICF0ZXJtQ29udGFpbmVkKSB7XG4gICAgICAgIHZhbGlkYXRlc1doZW5EZXJpdmVkID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoZnJhbWUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IGZyYW1lQ29udGFpbmVkID0gc3RhdGVtZW50LmlzRnJhbWVDb250YWluZWQoZnJhbWUsIGNvbnRleHQpO1xuXG4gICAgICBpZiAoIW5lZ2F0ZWQgJiYgZnJhbWVDb250YWluZWQpIHtcbiAgICAgICAgdmFsaWRhdGVzV2hlbkRlcml2ZWQgPSB0cnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVnYXRlZCAmJiAhZnJhbWVDb250YWluZWQpIHtcbiAgICAgICAgdmFsaWRhdGVzV2hlbkRlcml2ZWQgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB2YWxpZGF0ZXNXaGVuRGVyaXZlZDtcbn0iXSwibmFtZXMiOlsiZGVmaW5lIiwiQ29udGFpbmVkQXNzZXJ0aW9uIiwiY29udGV4dCIsInN0cmluZyIsIm5vZGUiLCJ0ZXJtIiwiZnJhbWUiLCJuZWdhdGVkIiwic3RhdGVtZW50IiwiZ2V0VGVybSIsImdldEZyYW1lIiwiaXNOZWdhdGVkIiwiZ2V0U3RhdGVtZW50IiwiZ2V0Q29udGFpbmVkQXNzZXJ0aW9uTm9kZSIsImdldE5vZGUiLCJjb250YWluZWRBc3NlcnRpb25Ob2RlIiwidmFsaWRhdGUiLCJzdGF0ZWQiLCJjb250YWluZWRBc3NlcnRpb24iLCJjb250YWluZWRBc3NlcnRpb25TdHJpbmciLCJnZXRTdHJpbmciLCJ0cmFjZSIsInZhbGlkQXNzZXJ0aW9uIiwiZmluZFZhbGlkQXNzZXJ0aW9uIiwiZGVidWciLCJ2YWxpZGF0ZXMiLCJ0ZXJtVmFsaWRhdGVzIiwidmFsaWRhdGVUZXJtIiwiZnJhbWVWYWxpZGF0ZXMiLCJ2YWxpZGF0ZUZyYW1lIiwic3RhdGVtZW50VmFsaWRhdGVzIiwidmFsaWRhdGVTdGF0ZW1lbnQiLCJ2YWxpZGF0ZXNXaGVuU3RhdGVkIiwidmFsaWRhdGVzV2hlbkRlcml2ZWQiLCJ2YWxpZGF0ZVdoZW5TdGF0ZWQiLCJ2YWxpZGF0ZVdoZW5EZXJpdmVkIiwiYXNzZXJ0aW9uIiwiYWRkQXNzZXJ0aW9uIiwidGVybVN0cmluZyIsInRlcm1TaW5ndWxhciIsImlzU2luZ3VsYXIiLCJ2YWxpZGF0ZXNGb3J3YXJkcyIsImZyYW1lU3RyaW5nIiwiZnJhbWVTaW5ndWxhciIsInN0YXRlbWVudFN0cmluZyIsImdlbmVyYWxDb3RuZXh0Iiwic3BlY2lmaWNDb250ZXh0IiwidW5pZnlJbmRlcGVuZGVudGx5IiwiZ2VuZXJhbENvbnRleHQiLCJ1bmlmaWVzSW5kZXBlbmRlbnRseSIsInRlcm1Gcm9tVGVybUFuZFN1YnN0aXR1dGlvbnMiLCJmcmFtZUZyb21GcmFtZUFuZFN1YnN0aXR1dGlvbnMiLCJzdGF0ZW1lbnRGcm9tU3RhdGVtZW50QW5kU3Vic3RpdHV0aW9ucyIsInRvSlNPTiIsIm5hbWUiLCJqc29uIiwiZnJvbUpTT04iLCJBc3NlcnRpb24iLCJ0ZXJtQ29udGFpbmVkIiwiaXNUZXJtQ29udGFpbmVkIiwiZnJhbWVDb250YWluZWQiLCJpc0ZyYW1lQ29udGFpbmVkIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFPQTs7O2VBQUE7OztnRUFMc0I7d0JBRUM7NkJBQzhGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFckgsV0FBZUEsSUFBQUEsZ0JBQU0sdUNBQUM7O2FBQU1DLG1CQUNkQyxPQUFPLEVBQUVDLE1BQU0sRUFBRUMsSUFBSSxFQUFFQyxJQUFJLEVBQUVDLEtBQUssRUFBRUMsT0FBTyxFQUFFQyxTQUFTO2dDQUR4Q1A7O2dCQUV4QixrQkFGd0JBO1lBRWxCQztZQUFTQztZQUFRQzs7UUFFdkIsTUFBS0MsSUFBSSxHQUFHQTtRQUNaLE1BQUtDLEtBQUssR0FBR0E7UUFDYixNQUFLQyxPQUFPLEdBQUdBO1FBQ2YsTUFBS0MsU0FBUyxHQUFHQTs7Ozs7WUFHbkJDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0osSUFBSTtZQUNsQjs7O1lBRUFLLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0osS0FBSztZQUNuQjs7O1lBRUFLLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0osT0FBTztZQUNyQjs7O1lB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