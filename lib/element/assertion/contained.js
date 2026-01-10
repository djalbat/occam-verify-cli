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
    function ContainedAssertion(cpontext, string, node, term, frame, negated, statement) {
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
            key: "verify",
            value: function verify(assignments, stated, context1) {
                var verifies = false;
                var containedAssertionString = this.getString(); ///
                context1.trace("Verifying the '".concat(containedAssertionString, "' contained assertion..."));
                var termValidates = this.validateTerm(assignments, stated, context1), frameVerifies = this.verifyFrame(assignments, stated, context1), statementValidates = this.validateStatement(assignments, stated, context1);
                if (termValidates || frameVerifies || statementValidates) {
                    var verifiesWhenStated = false, verifiesWhenDerived = false;
                    if (stated) {
                        verifiesWhenStated = this.verifyWhenStated(assignments, context1);
                    } else {
                        verifiesWhenDerived = this.verifyWhenDerived(context1);
                    }
                    if (verifiesWhenStated || verifiesWhenDerived) {
                        verifies = true;
                    }
                }
                if (verifies) {
                    context1.debug("...verified the '".concat(containedAssertionString, "' contained assertion."));
                }
                return verifies;
            }
        },
        {
            key: "validateTerm",
            value: function validateTerm(assignments, stated, context1) {
                var termValidates = false;
                if (this.term !== null) {
                    var termString = this.term.getString();
                    context1.trace("Validating the '".concat(termString, "' term..."));
                    var termSingular = this.term.isSingular();
                    if (!termSingular) {
                        context1.debug("The '".concat(termString, "' term is not singular."));
                    } else {
                        termValidates = this.term.validate(context1, function() {
                            var verifiesAhead = true;
                            return verifiesAhead;
                        });
                        if (termValidates) {
                            context1.debug("...validated the '".concat(termString, "' term."));
                        }
                    }
                }
                return termValidates;
            }
        },
        {
            key: "verifyFrame",
            value: function verifyFrame(assignments, stated, context1) {
                var frameVerifies = false;
                if (this.frame !== null) {
                    var frameString = this.frame.getString();
                    context1.trace("Verifying the '".concat(frameString, "' frame..."));
                    var frameSingular = this.frame.isSingular();
                    if (!frameSingular) {
                        context1.debug("The '".concat(frameString, "' frame is not singular."));
                    } else {
                        stated = true; ///
                        assignments = null; ///
                        frameVerifies = this.frame.verify(assignments, stated, context1);
                        if (frameVerifies) {
                            context1.debug("...verified the '".concat(frameString, "' frame."));
                        }
                    }
                }
                return frameVerifies;
            }
        },
        {
            key: "validateStatement",
            value: function validateStatement(assignments, stated, context1) {
                var statementValidates = false;
                if (this.statement !== null) {
                    var statementString = this.statement.getString();
                    context1.trace("Validating the '".concat(statementString, "' statement..."));
                    stated = true; ///
                    assignments = null; ///
                    statementValidates = this.statement.validate(assignments, stated, context1);
                    if (statementValidates) {
                        context1.debug("...validated the '".concat(statementString, "' statement."));
                    }
                }
                return statementValidates;
            }
        },
        {
            key: "verifyWhenStated",
            value: function verifyWhenStated(assignments, context1) {
                var verifiesWhenStated;
                var containedAssertionString = this.getString(); ///
                context1.trace("Verifying the '".concat(containedAssertionString, "' stated contained assertion..."));
                verifiesWhenStated = true;
                if (verifiesWhenStated) {
                    context1.debug("...verified the '".concat(containedAssertionString, "' stated contained assertion."));
                }
                return verifiesWhenStated;
            }
        },
        {
            key: "verifyWhenDerived",
            value: function verifyWhenDerived1(context1) {
                var verifiesWhenDerived;
                var containedAssertionString = this.getString(); ///
                context1.trace("Verifying the '".concat(containedAssertionString, "' derived contained assertion..."));
                var generalCotnext = null, specificContext = context1; ///
                verifiesWhenDerived = verifyWhenDerived(this.term, this.frame, this.statement, this.negated, generalCotnext, specificContext);
                if (verifiesWhenDerived) {
                    context1.debug("...verified the '".concat(containedAssertionString, "' derived contained assertion."));
                }
                return verifiesWhenDerived;
            }
        },
        {
            key: "unifyIndependently",
            value: function unifyIndependently(substitutions, generalContext, specificContext) {
                var unifiesIndependently;
                var context1 = specificContext, containedAssertionString = this.getString(); ///
                context1.trace("Unifying the '".concat(containedAssertionString, "' contained assertion independently..."));
                var term = (0, _substitutions.termFromTermAndSubstitutions)(this.term, substitutions, generalContext, specificContext), frame = (0, _substitutions.frameFromFrameAndSubstitutions)(this.frame, substitutions, generalContext, specificContext), statement = (0, _substitutions.statementFromStatementAndSubstitutions)(this.statement, substitutions, generalContext, specificContext), verifiesWhenDerived = verifyWhenDerived(term, frame, statement, this.negated, generalContext, specificContext);
                unifiesIndependently = verifiesWhenDerived; ///
                if (unifiesIndependently) {
                    context1.debug("...unified the '".concat(containedAssertionString, "' contained assertion independently."));
                }
                return unifiesIndependently;
            }
        }
    ]);
    return ContainedAssertion;
}(_assertion.default), _define_property(_ContainedAssertion, "name", "ContainedAssertion"), _ContainedAssertion));
function verifyWhenDerived(term, frame, statement, negated, generalContext, specificContext) {
    var verifiesWhenDerived = false;
    var context1 = specificContext; ///
    if (statement !== null) {
        if (term !== null) {
            var termContained = statement.isTermContained(term, context1);
            if (!negated && termContained) {
                verifiesWhenDerived = true;
            }
            if (negated && !termContained) {
                verifiesWhenDerived = true;
            }
        }
        if (frame !== null) {
            var frameContained = statement.isFrameContained(frame, context1);
            if (!negated && frameContained) {
                verifiesWhenDerived = true;
            }
            if (negated && !frameContained) {
                verifiesWhenDerived = true;
            }
        }
    }
    return verifiesWhenDerived;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9lbGVtZW50L2Fzc2VydGlvbi9jb250YWluZWQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBBc3NlcnRpb24gZnJvbSBcIi4uL2Fzc2VydGlvblwiO1xuXG5pbXBvcnQgeyBkZWZpbmUgfSBmcm9tIFwiLi4vLi4vZWxlbWVudHNcIjtcbmltcG9ydCB7IHRlcm1Gcm9tVGVybUFuZFN1YnN0aXR1dGlvbnMsIGZyYW1lRnJvbUZyYW1lQW5kU3Vic3RpdHV0aW9ucywgc3RhdGVtZW50RnJvbVN0YXRlbWVudEFuZFN1YnN0aXR1dGlvbnMgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL3N1YnN0aXR1dGlvbnNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lKGNsYXNzIENvbnRhaW5lZEFzc2VydGlvbiBleHRlbmRzIEFzc2VydGlvbiB7XG4gIGNvbnN0cnVjdG9yKGNwb250ZXh0LCBzdHJpbmcsIG5vZGUsIHRlcm0sIGZyYW1lLCBuZWdhdGVkLCBzdGF0ZW1lbnQpIHtcbiAgICBzdXBlcihjb250ZXh0LCBzdHJpbmcsIG5vZGUpO1xuXG4gICAgdGhpcy50ZXJtID0gdGVybTtcbiAgICB0aGlzLmZyYW1lID0gZnJhbWU7XG4gICAgdGhpcy5uZWdhdGVkID0gbmVnYXRlZDtcbiAgICB0aGlzLnN0YXRlbWVudCA9IHN0YXRlbWVudDtcbiAgfVxuXG4gIGdldFRlcm0oKSB7XG4gICAgcmV0dXJuIHRoaXMudGVybTtcbiAgfVxuXG4gIGdldEZyYW1lKCkge1xuICAgIHJldHVybiB0aGlzLmZyYW1lO1xuICB9XG5cbiAgaXNOZWdhdGVkKCkge1xuICAgIHJldHVybiB0aGlzLm5lZ2F0ZWQ7XG4gIH1cblxuICBnZXRTdGF0ZW1lbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RhdGVtZW50O1xuICB9XG5cbiAgdmVyaWZ5KGFzc2lnbm1lbnRzLCBzdGF0ZWQsIGNvbnRleHQpIHtcbiAgICBsZXQgdmVyaWZpZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IGNvbnRhaW5lZEFzc2VydGlvblN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7IC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtjb250YWluZWRBc3NlcnRpb25TdHJpbmd9JyBjb250YWluZWQgYXNzZXJ0aW9uLi4uYCk7XG5cbiAgICBjb25zdCB0ZXJtVmFsaWRhdGVzID0gdGhpcy52YWxpZGF0ZVRlcm0oYXNzaWdubWVudHMsIHN0YXRlZCwgY29udGV4dCksXG4gICAgICAgICAgZnJhbWVWZXJpZmllcyA9IHRoaXMudmVyaWZ5RnJhbWUoYXNzaWdubWVudHMsIHN0YXRlZCwgY29udGV4dCksXG4gICAgICAgICAgc3RhdGVtZW50VmFsaWRhdGVzID0gdGhpcy52YWxpZGF0ZVN0YXRlbWVudChhc3NpZ25tZW50cywgc3RhdGVkLCBjb250ZXh0KVxuXG4gICAgaWYgKHRlcm1WYWxpZGF0ZXMgfHwgZnJhbWVWZXJpZmllcyB8fCBzdGF0ZW1lbnRWYWxpZGF0ZXMpIHtcbiAgICAgIGxldCB2ZXJpZmllc1doZW5TdGF0ZWQgPSBmYWxzZSxcbiAgICAgICAgICB2ZXJpZmllc1doZW5EZXJpdmVkID0gZmFsc2U7XG5cbiAgICAgIGlmIChzdGF0ZWQpIHtcbiAgICAgICAgdmVyaWZpZXNXaGVuU3RhdGVkID0gdGhpcy52ZXJpZnlXaGVuU3RhdGVkKGFzc2lnbm1lbnRzLCBjb250ZXh0KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZlcmlmaWVzV2hlbkRlcml2ZWQgPSB0aGlzLnZlcmlmeVdoZW5EZXJpdmVkKGNvbnRleHQpO1xuICAgICAgfVxuXG4gICAgICBpZiAodmVyaWZpZXNXaGVuU3RhdGVkIHx8IHZlcmlmaWVzV2hlbkRlcml2ZWQpIHtcbiAgICAgICAgdmVyaWZpZXMgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh2ZXJpZmllcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke2NvbnRhaW5lZEFzc2VydGlvblN0cmluZ30nIGNvbnRhaW5lZCBhc3NlcnRpb24uYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZlcmlmaWVzO1xuICB9XG5cbiAgdmFsaWRhdGVUZXJtKGFzc2lnbm1lbnRzLCBzdGF0ZWQsIGNvbnRleHQpIHtcbiAgICBsZXQgdGVybVZhbGlkYXRlcyA9IGZhbHNlO1xuXG4gICAgaWYgKHRoaXMudGVybSAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgdGVybVN0cmluZyA9IHRoaXMudGVybS5nZXRTdHJpbmcoKTtcblxuICAgICAgY29udGV4dC50cmFjZShgVmFsaWRhdGluZyB0aGUgJyR7dGVybVN0cmluZ30nIHRlcm0uLi5gKTtcblxuICAgICAgY29uc3QgdGVybVNpbmd1bGFyID0gdGhpcy50ZXJtLmlzU2luZ3VsYXIoKTtcblxuICAgICAgaWYgKCF0ZXJtU2luZ3VsYXIpIHtcbiAgICAgICAgY29udGV4dC5kZWJ1ZyhgVGhlICcke3Rlcm1TdHJpbmd9JyB0ZXJtIGlzIG5vdCBzaW5ndWxhci5gKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRlcm1WYWxpZGF0ZXMgPSB0aGlzLnRlcm0udmFsaWRhdGUoY29udGV4dCwgKCkgPT4ge1xuICAgICAgICAgIGNvbnN0IHZlcmlmaWVzQWhlYWQgPSB0cnVlO1xuXG4gICAgICAgICAgcmV0dXJuIHZlcmlmaWVzQWhlYWQ7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmICh0ZXJtVmFsaWRhdGVzKSB7XG4gICAgICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmFsaWRhdGVkIHRoZSAnJHt0ZXJtU3RyaW5nfScgdGVybS5gKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0ZXJtVmFsaWRhdGVzO1xuICB9XG5cbiAgdmVyaWZ5RnJhbWUoYXNzaWdubWVudHMsIHN0YXRlZCwgY29udGV4dCkge1xuICAgIGxldCBmcmFtZVZlcmlmaWVzID0gZmFsc2U7XG5cbiAgICBpZiAodGhpcy5mcmFtZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgZnJhbWVTdHJpbmcgPSB0aGlzLmZyYW1lLmdldFN0cmluZygpO1xuXG4gICAgICBjb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke2ZyYW1lU3RyaW5nfScgZnJhbWUuLi5gKTtcblxuICAgICAgY29uc3QgZnJhbWVTaW5ndWxhciA9IHRoaXMuZnJhbWUuaXNTaW5ndWxhcigpO1xuXG4gICAgICBpZiAoIWZyYW1lU2luZ3VsYXIpIHtcbiAgICAgICAgY29udGV4dC5kZWJ1ZyhgVGhlICcke2ZyYW1lU3RyaW5nfScgZnJhbWUgaXMgbm90IHNpbmd1bGFyLmApO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc3RhdGVkID0gdHJ1ZTsgIC8vL1xuXG4gICAgICAgIGFzc2lnbm1lbnRzID0gbnVsbDsgLy8vXG5cbiAgICAgICAgZnJhbWVWZXJpZmllcyA9IHRoaXMuZnJhbWUudmVyaWZ5KGFzc2lnbm1lbnRzLCBzdGF0ZWQsIGNvbnRleHQpO1xuXG4gICAgICAgIGlmIChmcmFtZVZlcmlmaWVzKSB7XG4gICAgICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke2ZyYW1lU3RyaW5nfScgZnJhbWUuYCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZnJhbWVWZXJpZmllcztcbiAgfVxuXG4gIHZhbGlkYXRlU3RhdGVtZW50KGFzc2lnbm1lbnRzLCBzdGF0ZWQsIGNvbnRleHQpIHtcbiAgICBsZXQgc3RhdGVtZW50VmFsaWRhdGVzID0gZmFsc2U7XG5cbiAgICBpZiAodGhpcy5zdGF0ZW1lbnQgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHN0YXRlbWVudFN0cmluZyA9IHRoaXMuc3RhdGVtZW50LmdldFN0cmluZygpO1xuXG4gICAgICBjb250ZXh0LnRyYWNlKGBWYWxpZGF0aW5nIHRoZSAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQuLi5gKTtcblxuICAgICAgc3RhdGVkID0gdHJ1ZTsgIC8vL1xuXG4gICAgICBhc3NpZ25tZW50cyA9IG51bGw7IC8vL1xuXG4gICAgICBzdGF0ZW1lbnRWYWxpZGF0ZXMgPSB0aGlzLnN0YXRlbWVudC52YWxpZGF0ZShhc3NpZ25tZW50cywgc3RhdGVkLCBjb250ZXh0KTtcblxuICAgICAgaWYgKHN0YXRlbWVudFZhbGlkYXRlcykge1xuICAgICAgICBjb250ZXh0LmRlYnVnKGAuLi52YWxpZGF0ZWQgdGhlICcke3N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudC5gKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gc3RhdGVtZW50VmFsaWRhdGVzO1xuICB9XG5cbiAgdmVyaWZ5V2hlblN0YXRlZChhc3NpZ25tZW50cywgY29udGV4dCkge1xuICAgIGxldCB2ZXJpZmllc1doZW5TdGF0ZWQ7XG5cbiAgICBjb25zdCBjb250YWluZWRBc3NlcnRpb25TdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7Y29udGFpbmVkQXNzZXJ0aW9uU3RyaW5nfScgc3RhdGVkIGNvbnRhaW5lZCBhc3NlcnRpb24uLi5gKTtcblxuICAgIHZlcmlmaWVzV2hlblN0YXRlZCA9IHRydWU7XG5cbiAgICBpZiAodmVyaWZpZXNXaGVuU3RhdGVkKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7Y29udGFpbmVkQXNzZXJ0aW9uU3RyaW5nfScgc3RhdGVkIGNvbnRhaW5lZCBhc3NlcnRpb24uYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZlcmlmaWVzV2hlblN0YXRlZDtcbiAgfVxuXG4gIHZlcmlmeVdoZW5EZXJpdmVkKGNvbnRleHQpIHtcbiAgICBsZXQgdmVyaWZpZXNXaGVuRGVyaXZlZDtcblxuICAgIGNvbnN0IGNvbnRhaW5lZEFzc2VydGlvblN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7IC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtjb250YWluZWRBc3NlcnRpb25TdHJpbmd9JyBkZXJpdmVkIGNvbnRhaW5lZCBhc3NlcnRpb24uLi5gKTtcblxuICAgIGNvbnN0IGdlbmVyYWxDb3RuZXh0ID0gbnVsbCxcbiAgICAgICAgICBzcGVjaWZpY0NvbnRleHQgPSBjb250ZXh0OyAvLy9cblxuICAgIHZlcmlmaWVzV2hlbkRlcml2ZWQgPSB2ZXJpZnlXaGVuRGVyaXZlZCh0aGlzLnRlcm0sIHRoaXMuZnJhbWUsIHRoaXMuc3RhdGVtZW50LCB0aGlzLm5lZ2F0ZWQsIGdlbmVyYWxDb3RuZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgaWYgKHZlcmlmaWVzV2hlbkRlcml2ZWQpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHtjb250YWluZWRBc3NlcnRpb25TdHJpbmd9JyBkZXJpdmVkIGNvbnRhaW5lZCBhc3NlcnRpb24uYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZlcmlmaWVzV2hlbkRlcml2ZWQ7XG4gIH1cblxuICB1bmlmeUluZGVwZW5kZW50bHkoc3Vic3RpdHV0aW9ucywgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCkge1xuICAgIGxldCB1bmlmaWVzSW5kZXBlbmRlbnRseTtcblxuICAgIGNvbnN0IGNvbnRleHQgPSBzcGVjaWZpY0NvbnRleHQsICAvLy9cbiAgICAgICAgICBjb250YWluZWRBc3NlcnRpb25TdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFVuaWZ5aW5nIHRoZSAnJHtjb250YWluZWRBc3NlcnRpb25TdHJpbmd9JyBjb250YWluZWQgYXNzZXJ0aW9uIGluZGVwZW5kZW50bHkuLi5gKTtcblxuICAgIGNvbnN0IHRlcm0gPSB0ZXJtRnJvbVRlcm1BbmRTdWJzdGl0dXRpb25zKHRoaXMudGVybSwgc3Vic3RpdHV0aW9ucywgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCksXG4gICAgICAgICAgZnJhbWUgPSBmcmFtZUZyb21GcmFtZUFuZFN1YnN0aXR1dGlvbnModGhpcy5mcmFtZSwgc3Vic3RpdHV0aW9ucywgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCksXG4gICAgICAgICAgc3RhdGVtZW50ID0gc3RhdGVtZW50RnJvbVN0YXRlbWVudEFuZFN1YnN0aXR1dGlvbnModGhpcy5zdGF0ZW1lbnQsIHN1YnN0aXR1dGlvbnMsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpLFxuICAgICAgICAgIHZlcmlmaWVzV2hlbkRlcml2ZWQgPSB2ZXJpZnlXaGVuRGVyaXZlZCh0ZXJtLCBmcmFtZSwgc3RhdGVtZW50LCB0aGlzLm5lZ2F0ZWQsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgdW5pZmllc0luZGVwZW5kZW50bHkgPSB2ZXJpZmllc1doZW5EZXJpdmVkOyAvLy9cblxuICAgIGlmICh1bmlmaWVzSW5kZXBlbmRlbnRseSkge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udW5pZmllZCB0aGUgJyR7Y29udGFpbmVkQXNzZXJ0aW9uU3RyaW5nfScgY29udGFpbmVkIGFzc2VydGlvbiBpbmRlcGVuZGVudGx5LmApO1xuICAgIH1cblxuICAgIHJldHVybiB1bmlmaWVzSW5kZXBlbmRlbnRseTtcbiAgfVxuXG4gIHN0YXRpYyBuYW1lID0gXCJDb250YWluZWRBc3NlcnRpb25cIjtcbn0pO1xuXG5mdW5jdGlvbiB2ZXJpZnlXaGVuRGVyaXZlZCh0ZXJtLCBmcmFtZSwgc3RhdGVtZW50LCBuZWdhdGVkLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KSB7XG4gIGxldCB2ZXJpZmllc1doZW5EZXJpdmVkID0gZmFsc2U7XG5cbiAgY29uc3QgY29udGV4dCA9IHNwZWNpZmljQ29udGV4dDsgIC8vL1xuXG4gIGlmIChzdGF0ZW1lbnQgIT09IG51bGwpIHtcbiAgICBpZiAodGVybSAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgdGVybUNvbnRhaW5lZCA9IHN0YXRlbWVudC5pc1Rlcm1Db250YWluZWQodGVybSwgY29udGV4dCk7XG5cbiAgICAgIGlmICghbmVnYXRlZCAmJiB0ZXJtQ29udGFpbmVkKSB7XG4gICAgICAgIHZlcmlmaWVzV2hlbkRlcml2ZWQgPSB0cnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVnYXRlZCAmJiAhdGVybUNvbnRhaW5lZCkge1xuICAgICAgICB2ZXJpZmllc1doZW5EZXJpdmVkID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoZnJhbWUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IGZyYW1lQ29udGFpbmVkID0gc3RhdGVtZW50LmlzRnJhbWVDb250YWluZWQoZnJhbWUsIGNvbnRleHQpO1xuXG4gICAgICBpZiAoIW5lZ2F0ZWQgJiYgZnJhbWVDb250YWluZWQpIHtcbiAgICAgICAgdmVyaWZpZXNXaGVuRGVyaXZlZCA9IHRydWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWdhdGVkICYmICFmcmFtZUNvbnRhaW5lZCkge1xuICAgICAgICB2ZXJpZmllc1doZW5EZXJpdmVkID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gdmVyaWZpZXNXaGVuRGVyaXZlZDtcbn0iXSwibmFtZXMiOlsiZGVmaW5lIiwiQ29udGFpbmVkQXNzZXJ0aW9uIiwiY3BvbnRleHQiLCJzdHJpbmciLCJub2RlIiwidGVybSIsImZyYW1lIiwibmVnYXRlZCIsInN0YXRlbWVudCIsImNvbnRleHQiLCJnZXRUZXJtIiwiZ2V0RnJhbWUiLCJpc05lZ2F0ZWQiLCJnZXRTdGF0ZW1lbnQiLCJ2ZXJpZnkiLCJhc3NpZ25tZW50cyIsInN0YXRlZCIsInZlcmlmaWVzIiwiY29udGFpbmVkQXNzZXJ0aW9uU3RyaW5nIiwiZ2V0U3RyaW5nIiwidHJhY2UiLCJ0ZXJtVmFsaWRhdGVzIiwidmFsaWRhdGVUZXJtIiwiZnJhbWVWZXJpZmllcyIsInZlcmlmeUZyYW1lIiwic3RhdGVtZW50VmFsaWRhdGVzIiwidmFsaWRhdGVTdGF0ZW1lbnQiLCJ2ZXJpZmllc1doZW5TdGF0ZWQiLCJ2ZXJpZmllc1doZW5EZXJpdmVkIiwidmVyaWZ5V2hlblN0YXRlZCIsInZlcmlmeVdoZW5EZXJpdmVkIiwiZGVidWciLCJ0ZXJtU3RyaW5nIiwidGVybVNpbmd1bGFyIiwiaXNTaW5ndWxhciIsInZhbGlkYXRlIiwidmVyaWZpZXNBaGVhZCIsImZyYW1lU3RyaW5nIiwiZnJhbWVTaW5ndWxhciIsInN0YXRlbWVudFN0cmluZyIsImdlbmVyYWxDb3RuZXh0Iiwic3BlY2lmaWNDb250ZXh0IiwidW5pZnlJbmRlcGVuZGVudGx5Iiwic3Vic3RpdHV0aW9ucyIsImdlbmVyYWxDb250ZXh0IiwidW5pZmllc0luZGVwZW5kZW50bHkiLCJ0ZXJtRnJvbVRlcm1BbmRTdWJzdGl0dXRpb25zIiwiZnJhbWVGcm9tRnJhbWVBbmRTdWJzdGl0dXRpb25zIiwic3RhdGVtZW50RnJvbVN0YXRlbWVudEFuZFN1YnN0aXR1dGlvbnMiLCJBc3NlcnRpb24iLCJuYW1lIiwidGVybUNvbnRhaW5lZCIsImlzVGVybUNvbnRhaW5lZCIsImZyYW1lQ29udGFpbmVkIiwiaXNGcmFtZUNvbnRhaW5lZCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBT0E7OztlQUFBOzs7Z0VBTHNCO3dCQUVDOzZCQUM4Rjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRXJILFdBQWVBLElBQUFBLGdCQUFNLHVDQUFDOzthQUFNQyxtQkFDZEMsUUFBUSxFQUFFQyxNQUFNLEVBQUVDLElBQUksRUFBRUMsSUFBSSxFQUFFQyxLQUFLLEVBQUVDLE9BQU8sRUFBRUMsU0FBUztnQ0FEekNQOztnQkFFeEIsa0JBRndCQTtZQUVsQlE7WUFBU047WUFBUUM7O1FBRXZCLE1BQUtDLElBQUksR0FBR0E7UUFDWixNQUFLQyxLQUFLLEdBQUdBO1FBQ2IsTUFBS0MsT0FBTyxHQUFHQTtRQUNmLE1BQUtDLFNBQVMs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