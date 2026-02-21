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
var _assign = require("../../process/assign");
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
var _PropertyAssertion;
var _default = (0, _elements.define)((_PropertyAssertion = /*#__PURE__*/ function(Assertion) {
    _inherits(PropertyAssertion, Assertion);
    function PropertyAssertion(context, string, node, term, propertyRelation) {
        _class_call_check(this, PropertyAssertion);
        var _this;
        _this = _call_super(this, PropertyAssertion, [
            context,
            string,
            node
        ]);
        _this.term = term;
        _this.propertyRelation = propertyRelation;
        return _this;
    }
    _create_class(PropertyAssertion, [
        {
            key: "getTerm",
            value: function getTerm() {
                return this.term;
            }
        },
        {
            key: "getPropertyRelation",
            value: function getPropertyRelation() {
                return this.propertyRelation;
            }
        },
        {
            key: "getPropertyAssertionNode",
            value: function getPropertyAssertionNode() {
                var node = this.getNode(), propertyAssertionNode = node; ///
                return propertyAssertionNode;
            }
        },
        {
            key: "compareTermAndPropertyRelation",
            value: function compareTermAndPropertyRelation(term, propertyRelation, context) {
                var comparesToTermAndPropertyRelation = false;
                var termString = term.getString(), propertyRelationString = propertyRelation.getString(), propertyAssertionString = this.getString(); ///
                context.trace("Comparing the '".concat(propertyAssertionString, "' property assertion to the '").concat(termString, "' term and '").concat(propertyRelationString, "' property relation..."));
                var termA = term, termB = this.term, termAEqualToTermB = termA.isEqualTo(termB);
                if (termAEqualToTermB) {
                    var propertyRelationEqualToPropertyRelation = this.propertyRelation.isEqualTo(propertyRelation);
                    comparesToTermAndPropertyRelation = propertyRelationEqualToPropertyRelation; ///
                }
                if (comparesToTermAndPropertyRelation) {
                    context.debug("...compared the '".concat(propertyAssertionString, "' property assertion to the '").concat(termString, "' term and '").concat(propertyRelationString, "' property relation."));
                }
                return comparesToTermAndPropertyRelation;
            }
        },
        {
            key: "validate",
            value: function validate(stated, context) {
                var propertyAssertion = null;
                var propertyAssertionString = this.getString(); ///
                context.trace("Validating the '".concat(propertyAssertionString, "' property assertion..."));
                var validAssertion = this.findValidAssertion(context);
                if (validAssertion) {
                    propertyAssertion = validAssertion; ///
                    context.debug("...the '".concat(propertyAssertionString, "' property assertion is already valid."));
                } else {
                    var validates = false;
                    var termValidates = this.validateTerm(stated, context);
                    if (termValidates) {
                        var propertyRelationVerifies = this.validatePropertyRelation(stated, context);
                        if (propertyRelationVerifies) {
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
                    }
                    if (validates) {
                        var assertion = this; ///
                        propertyAssertion = assertion; ///
                        this.assign(stated, context);
                        context.addAssertion(assertion);
                        context.debug("...validated the '".concat(propertyAssertionString, "' property assertion."));
                    }
                }
                return propertyAssertion;
            }
        },
        {
            key: "validateTerm",
            value: function validateTerm(stated, context) {
                var termValidates = false;
                var termString = this.term.getString();
                context.trace("Validating the '".concat(termString, "' term..."));
                var term = this.term.validate(context, function() {
                    var validatesForwards = true;
                    return validatesForwards;
                });
                if (term !== null) {
                    this.term = term;
                    termValidates = true;
                }
                if (termValidates) {
                    context.debug("...validated the '".concat(termString, "' term."));
                }
                return termValidates;
            }
        },
        {
            key: "validatePropertyRelation",
            value: function validatePropertyRelation(stated, context) {
                var propertyRelationVerifies;
                var propertyRelationString = this.propertyRelation.getString();
                context.trace("Validating the '".concat(propertyRelationString, "' property relation..."));
                propertyRelationVerifies = this.propertyRelation.validate(context);
                if (propertyRelationVerifies) {
                    context.debug("...validated the '".concat(propertyRelationString, "' property relation."));
                }
                return propertyRelationVerifies;
            }
        },
        {
            key: "validateWhenStated",
            value: function validateWhenStated(context) {
                var validatesWhenStated;
                var propertyAssertionString = this.getString(); ///
                context.trace("Validating the '".concat(propertyAssertionString, "' stated property assertion..."));
                validatesWhenStated = true;
                if (validatesWhenStated) {
                    context.debug("...validated the '".concat(propertyAssertionString, "' stated property assertion."));
                }
                return validatesWhenStated;
            }
        },
        {
            key: "validateWhenDerived",
            value: function validateWhenDerived(context) {
                var validatesWhenDerived;
                var propertyAssertionString = this.getString(); ///
                context.trace("Validating the '".concat(propertyAssertionString, "' derived property assertion..."));
                validatesWhenDerived = true;
                if (validatesWhenDerived) {
                    context.debug("...validated the '".concat(propertyAssertionString, "' derived property assertion."));
                }
                return validatesWhenDerived;
            }
        },
        {
            key: "assign",
            value: function assign(stated, context) {
                if (!stated) {
                    return;
                }
                var propertyAssertion = this, variableAssigment = (0, _assign.variableAssignmentFromPrepertyAssertion)(propertyAssertion, context), assignment = variableAssigment; ///
                context.addAssignment(assignment);
            }
        }
    ]);
    return PropertyAssertion;
}(_assertion.default), _define_property(_PropertyAssertion, "name", "PropertyAssertion"), _PropertyAssertion));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9lbGVtZW50L2Fzc2VydGlvbi9wcm9wZXJ0eS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IEFzc2VydGlvbiBmcm9tIFwiLi4vYXNzZXJ0aW9uXCI7XG5cbmltcG9ydCB7IGRlZmluZSB9IGZyb20gXCIuLi8uLi9lbGVtZW50c1wiO1xuaW1wb3J0IHsgdmFyaWFibGVBc3NpZ25tZW50RnJvbVByZXBlcnR5QXNzZXJ0aW9uIH0gZnJvbSBcIi4uLy4uL3Byb2Nlc3MvYXNzaWduXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZShjbGFzcyBQcm9wZXJ0eUFzc2VydGlvbiBleHRlbmRzIEFzc2VydGlvbiB7XG4gIGNvbnN0cnVjdG9yKGNvbnRleHQsIHN0cmluZywgbm9kZSwgdGVybSwgcHJvcGVydHlSZWxhdGlvbikge1xuICAgIHN1cGVyKGNvbnRleHQsIHN0cmluZywgbm9kZSk7XG5cbiAgICB0aGlzLnRlcm0gPSB0ZXJtO1xuICAgIHRoaXMucHJvcGVydHlSZWxhdGlvbiA9IHByb3BlcnR5UmVsYXRpb247XG4gIH1cblxuICBnZXRUZXJtKCkge1xuICAgIHJldHVybiB0aGlzLnRlcm07XG4gIH1cblxuICBnZXRQcm9wZXJ0eVJlbGF0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLnByb3BlcnR5UmVsYXRpb247XG4gIH1cblxuICBnZXRQcm9wZXJ0eUFzc2VydGlvbk5vZGUoKSB7XG4gICAgY29uc3Qgbm9kZSA9IHRoaXMuZ2V0Tm9kZSgpLFxuICAgICAgICAgIHByb3BlcnR5QXNzZXJ0aW9uTm9kZSA9IG5vZGU7IC8vL1xuXG4gICAgcmV0dXJuIHByb3BlcnR5QXNzZXJ0aW9uTm9kZTtcbiAgfVxuXG4gIGNvbXBhcmVUZXJtQW5kUHJvcGVydHlSZWxhdGlvbih0ZXJtLCBwcm9wZXJ0eVJlbGF0aW9uLCBjb250ZXh0KSB7XG4gICAgbGV0IGNvbXBhcmVzVG9UZXJtQW5kUHJvcGVydHlSZWxhdGlvbiA9IGZhbHNlO1xuXG4gICAgY29uc3QgdGVybVN0cmluZyA9IHRlcm0uZ2V0U3RyaW5nKCksXG4gICAgICAgICAgcHJvcGVydHlSZWxhdGlvblN0cmluZyA9IHByb3BlcnR5UmVsYXRpb24uZ2V0U3RyaW5nKCksXG4gICAgICAgICAgcHJvcGVydHlBc3NlcnRpb25TdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYENvbXBhcmluZyB0aGUgJyR7cHJvcGVydHlBc3NlcnRpb25TdHJpbmd9JyBwcm9wZXJ0eSBhc3NlcnRpb24gdG8gdGhlICcke3Rlcm1TdHJpbmd9JyB0ZXJtIGFuZCAnJHtwcm9wZXJ0eVJlbGF0aW9uU3RyaW5nfScgcHJvcGVydHkgcmVsYXRpb24uLi5gKTtcblxuICAgIGNvbnN0IHRlcm1BID0gdGVybSxcbiAgICAgICAgICB0ZXJtQiA9IHRoaXMudGVybSwgLy8vXG4gICAgICAgICAgdGVybUFFcXVhbFRvVGVybUIgPSB0ZXJtQS5pc0VxdWFsVG8odGVybUIpO1xuXG4gICAgaWYgKHRlcm1BRXF1YWxUb1Rlcm1CKSB7XG4gICAgICBjb25zdCBwcm9wZXJ0eVJlbGF0aW9uRXF1YWxUb1Byb3BlcnR5UmVsYXRpb24gPSB0aGlzLnByb3BlcnR5UmVsYXRpb24uaXNFcXVhbFRvKHByb3BlcnR5UmVsYXRpb24pO1xuXG4gICAgICBjb21wYXJlc1RvVGVybUFuZFByb3BlcnR5UmVsYXRpb24gPSBwcm9wZXJ0eVJlbGF0aW9uRXF1YWxUb1Byb3BlcnR5UmVsYXRpb247ICAvLy9cbiAgICB9XG5cbiAgICBpZiAoY29tcGFyZXNUb1Rlcm1BbmRQcm9wZXJ0eVJlbGF0aW9uKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi5jb21wYXJlZCB0aGUgJyR7cHJvcGVydHlBc3NlcnRpb25TdHJpbmd9JyBwcm9wZXJ0eSBhc3NlcnRpb24gdG8gdGhlICcke3Rlcm1TdHJpbmd9JyB0ZXJtIGFuZCAnJHtwcm9wZXJ0eVJlbGF0aW9uU3RyaW5nfScgcHJvcGVydHkgcmVsYXRpb24uYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbXBhcmVzVG9UZXJtQW5kUHJvcGVydHlSZWxhdGlvbjtcbiAgfVxuXG4gIHZhbGlkYXRlKHN0YXRlZCwgY29udGV4dCkge1xuICAgIGxldCBwcm9wZXJ0eUFzc2VydGlvbiA9IG51bGw7XG5cbiAgICBjb25zdCBwcm9wZXJ0eUFzc2VydGlvblN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7IC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmFsaWRhdGluZyB0aGUgJyR7cHJvcGVydHlBc3NlcnRpb25TdHJpbmd9JyBwcm9wZXJ0eSBhc3NlcnRpb24uLi5gKTtcblxuICAgIGNvbnN0IHZhbGlkQXNzZXJ0aW9uID0gdGhpcy5maW5kVmFsaWRBc3NlcnRpb24oY29udGV4dCk7XG5cbiAgICBpZiAodmFsaWRBc3NlcnRpb24pIHtcbiAgICAgIHByb3BlcnR5QXNzZXJ0aW9uID0gdmFsaWRBc3NlcnRpb247IC8vL1xuXG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi50aGUgJyR7cHJvcGVydHlBc3NlcnRpb25TdHJpbmd9JyBwcm9wZXJ0eSBhc3NlcnRpb24gaXMgYWxyZWFkeSB2YWxpZC5gKTtcbiAgICB9IGVsc2Uge1xuICAgICAgbGV0IHZhbGlkYXRlcyA9IGZhbHNlO1xuXG4gICAgICBjb25zdCB0ZXJtVmFsaWRhdGVzID0gdGhpcy52YWxpZGF0ZVRlcm0oc3RhdGVkLCBjb250ZXh0KTtcblxuICAgICAgaWYgKHRlcm1WYWxpZGF0ZXMpIHtcbiAgICAgICAgY29uc3QgcHJvcGVydHlSZWxhdGlvblZlcmlmaWVzID0gdGhpcy52YWxpZGF0ZVByb3BlcnR5UmVsYXRpb24oc3RhdGVkLCBjb250ZXh0KTtcblxuICAgICAgICBpZiAocHJvcGVydHlSZWxhdGlvblZlcmlmaWVzKSB7XG4gICAgICAgICAgbGV0IHZhbGlkYXRlc1doZW5TdGF0ZWQgPSBmYWxzZSxcbiAgICAgICAgICAgICAgdmFsaWRhdGVzV2hlbkRlcml2ZWQgPSBmYWxzZTtcblxuICAgICAgICAgIGlmIChzdGF0ZWQpIHtcbiAgICAgICAgICAgIHZhbGlkYXRlc1doZW5TdGF0ZWQgPSB0aGlzLnZhbGlkYXRlV2hlblN0YXRlZChjb250ZXh0KTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdmFsaWRhdGVzV2hlbkRlcml2ZWQgPSB0aGlzLnZhbGlkYXRlV2hlbkRlcml2ZWQoY29udGV4dCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKHZhbGlkYXRlc1doZW5TdGF0ZWQgfHwgdmFsaWRhdGVzV2hlbkRlcml2ZWQpIHtcbiAgICAgICAgICAgIHZhbGlkYXRlcyA9IHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmICh2YWxpZGF0ZXMpIHtcbiAgICAgICAgY29uc3QgYXNzZXJ0aW9uID0gdGhpczsgLy8vXG5cbiAgICAgICAgcHJvcGVydHlBc3NlcnRpb24gPSBhc3NlcnRpb247ICAvLy9cblxuICAgICAgICB0aGlzLmFzc2lnbihzdGF0ZWQsIGNvbnRleHQpO1xuXG4gICAgICAgIGNvbnRleHQuYWRkQXNzZXJ0aW9uKGFzc2VydGlvbik7XG5cbiAgICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmFsaWRhdGVkIHRoZSAnJHtwcm9wZXJ0eUFzc2VydGlvblN0cmluZ30nIHByb3BlcnR5IGFzc2VydGlvbi5gKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gcHJvcGVydHlBc3NlcnRpb247XG4gIH1cblxuICB2YWxpZGF0ZVRlcm0oc3RhdGVkLCBjb250ZXh0KSB7XG4gICAgbGV0IHRlcm1WYWxpZGF0ZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IHRlcm1TdHJpbmcgPSB0aGlzLnRlcm0uZ2V0U3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBWYWxpZGF0aW5nIHRoZSAnJHt0ZXJtU3RyaW5nfScgdGVybS4uLmApO1xuXG4gICAgY29uc3QgdGVybSA9IHRoaXMudGVybS52YWxpZGF0ZShjb250ZXh0LCAoKSA9PiB7XG4gICAgICBjb25zdCB2YWxpZGF0ZXNGb3J3YXJkcyA9IHRydWU7XG5cbiAgICAgIHJldHVybiB2YWxpZGF0ZXNGb3J3YXJkcztcbiAgICB9KTtcblxuICAgIGlmICgodGVybSAhPT0gbnVsbCkpIHtcbiAgICAgIHRoaXMudGVybSA9IHRlcm07XG5cbiAgICAgIHRlcm1WYWxpZGF0ZXMgPSB0cnVlO1xuICAgIH1cblxuICAgIGlmICh0ZXJtVmFsaWRhdGVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52YWxpZGF0ZWQgdGhlICcke3Rlcm1TdHJpbmd9JyB0ZXJtLmApO1xuICAgIH1cblxuICAgIHJldHVybiB0ZXJtVmFsaWRhdGVzO1xuICB9XG5cbiAgdmFsaWRhdGVQcm9wZXJ0eVJlbGF0aW9uKHN0YXRlZCwgY29udGV4dCkge1xuICAgIGxldCBwcm9wZXJ0eVJlbGF0aW9uVmVyaWZpZXM7XG5cbiAgICBjb25zdCBwcm9wZXJ0eVJlbGF0aW9uU3RyaW5nID0gdGhpcy5wcm9wZXJ0eVJlbGF0aW9uLmdldFN0cmluZygpO1xuXG4gICAgY29udGV4dC50cmFjZShgVmFsaWRhdGluZyB0aGUgJyR7cHJvcGVydHlSZWxhdGlvblN0cmluZ30nIHByb3BlcnR5IHJlbGF0aW9uLi4uYCk7XG5cbiAgICBwcm9wZXJ0eVJlbGF0aW9uVmVyaWZpZXMgPSB0aGlzLnByb3BlcnR5UmVsYXRpb24udmFsaWRhdGUoY29udGV4dCk7XG5cbiAgICBpZiAocHJvcGVydHlSZWxhdGlvblZlcmlmaWVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52YWxpZGF0ZWQgdGhlICcke3Byb3BlcnR5UmVsYXRpb25TdHJpbmd9JyBwcm9wZXJ0eSByZWxhdGlvbi5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcHJvcGVydHlSZWxhdGlvblZlcmlmaWVzO1xuICB9XG5cbiAgdmFsaWRhdGVXaGVuU3RhdGVkKGNvbnRleHQpIHtcbiAgICBsZXQgdmFsaWRhdGVzV2hlblN0YXRlZDtcblxuICAgIGNvbnN0IHByb3BlcnR5QXNzZXJ0aW9uU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWYWxpZGF0aW5nIHRoZSAnJHtwcm9wZXJ0eUFzc2VydGlvblN0cmluZ30nIHN0YXRlZCBwcm9wZXJ0eSBhc3NlcnRpb24uLi5gKTtcblxuICAgIHZhbGlkYXRlc1doZW5TdGF0ZWQgPSB0cnVlO1xuXG4gICAgaWYgKHZhbGlkYXRlc1doZW5TdGF0ZWQpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZhbGlkYXRlZCB0aGUgJyR7cHJvcGVydHlBc3NlcnRpb25TdHJpbmd9JyBzdGF0ZWQgcHJvcGVydHkgYXNzZXJ0aW9uLmApO1xuICAgIH1cblxuICAgIHJldHVybiB2YWxpZGF0ZXNXaGVuU3RhdGVkO1xuICB9XG5cbiAgdmFsaWRhdGVXaGVuRGVyaXZlZChjb250ZXh0KSB7XG4gICAgbGV0IHZhbGlkYXRlc1doZW5EZXJpdmVkO1xuXG4gICAgY29uc3QgcHJvcGVydHlBc3NlcnRpb25TdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZhbGlkYXRpbmcgdGhlICcke3Byb3BlcnR5QXNzZXJ0aW9uU3RyaW5nfScgZGVyaXZlZCBwcm9wZXJ0eSBhc3NlcnRpb24uLi5gKTtcblxuICAgIHZhbGlkYXRlc1doZW5EZXJpdmVkID0gdHJ1ZTtcblxuICAgIGlmICh2YWxpZGF0ZXNXaGVuRGVyaXZlZCkge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmFsaWRhdGVkIHRoZSAnJHtwcm9wZXJ0eUFzc2VydGlvblN0cmluZ30nIGRlcml2ZWQgcHJvcGVydHkgYXNzZXJ0aW9uLmApO1xuICAgIH1cblxuICAgIHJldHVybiB2YWxpZGF0ZXNXaGVuRGVyaXZlZDtcbiAgfVxuXG4gIGFzc2lnbihzdGF0ZWQsIGNvbnRleHQpIHtcbiAgICBpZiAoIXN0YXRlZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IHByb3BlcnR5QXNzZXJ0aW9uID0gdGhpcywgLy8vXG4gICAgICAgICAgdmFyaWFibGVBc3NpZ21lbnQgPSB2YXJpYWJsZUFzc2lnbm1lbnRGcm9tUHJlcGVydHlBc3NlcnRpb24ocHJvcGVydHlBc3NlcnRpb24sIGNvbnRleHQpLFxuICAgICAgICAgIGFzc2lnbm1lbnQgPSB2YXJpYWJsZUFzc2lnbWVudDsgLy8vXG5cbiAgICBjb250ZXh0LmFkZEFzc2lnbm1lbnQoYXNzaWdubWVudCk7XG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiUHJvcGVydHlBc3NlcnRpb25cIjtcbn0pO1xuIl0sIm5hbWVzIjpbImRlZmluZSIsIlByb3BlcnR5QXNzZXJ0aW9uIiwiY29udGV4dCIsInN0cmluZyIsIm5vZGUiLCJ0ZXJtIiwicHJvcGVydHlSZWxhdGlvbiIsImdldFRlcm0iLCJnZXRQcm9wZXJ0eVJlbGF0aW9uIiwiZ2V0UHJvcGVydHlBc3NlcnRpb25Ob2RlIiwiZ2V0Tm9kZSIsInByb3BlcnR5QXNzZXJ0aW9uTm9kZSIsImNvbXBhcmVUZXJtQW5kUHJvcGVydHlSZWxhdGlvbiIsImNvbXBhcmVzVG9UZXJtQW5kUHJvcGVydHlSZWxhdGlvbiIsInRlcm1TdHJpbmciLCJnZXRTdHJpbmciLCJwcm9wZXJ0eVJlbGF0aW9uU3RyaW5nIiwicHJvcGVydHlBc3NlcnRpb25TdHJpbmciLCJ0cmFjZSIsInRlcm1BIiwidGVybUIiLCJ0ZXJtQUVxdWFsVG9UZXJtQiIsImlzRXF1YWxUbyIsInByb3BlcnR5UmVsYXRpb25FcXVhbFRvUHJvcGVydHlSZWxhdGlvbiIsImRlYnVnIiwidmFsaWRhdGUiLCJzdGF0ZWQiLCJwcm9wZXJ0eUFzc2VydGlvbiIsInZhbGlkQXNzZXJ0aW9uIiwiZmluZFZhbGlkQXNzZXJ0aW9uIiwidmFsaWRhdGVzIiwidGVybVZhbGlkYXRlcyIsInZhbGlkYXRlVGVybSIsInByb3BlcnR5UmVsYXRpb25WZXJpZmllcyIsInZhbGlkYXRlUHJvcGVydHlSZWxhdGlvbiIsInZhbGlkYXRlc1doZW5TdGF0ZWQiLCJ2YWxpZGF0ZXNXaGVuRGVyaXZlZCIsInZhbGlkYXRlV2hlblN0YXRlZCIsInZhbGlkYXRlV2hlbkRlcml2ZWQiLCJhc3NlcnRpb24iLCJhc3NpZ24iLCJhZGRBc3NlcnRpb24iLCJ2YWxpZGF0ZXNGb3J3YXJkcyIsInZhcmlhYmxlQXNzaWdtZW50IiwidmFyaWFibGVBc3NpZ25tZW50RnJvbVByZXBlcnR5QXNzZXJ0aW9uIiwiYXNzaWdubWVudCIsImFkZEFzc2lnbm1lbnQiLCJBc3NlcnRpb24iLCJuYW1lIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFPQTs7O2VBQUE7OztnRUFMc0I7d0JBRUM7c0JBQ2lDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFeEQsV0FBZUEsSUFBQUEsZ0JBQU0sc0NBQUM7O2FBQU1DLGtCQUNkQyxPQUFPLEVBQUVDLE1BQU0sRUFBRUMsSUFBSSxFQUFFQyxJQUFJLEVBQUVDLGdCQUFnQjtnQ0FEL0JMOztnQkFFeEIsa0JBRndCQTtZQUVsQkM7WUFBU0M7WUFBUUM7O1FBRXZCLE1BQUtDLElBQUksR0FBR0E7UUFDWixNQUFLQyxnQkFBZ0IsR0FBR0E7Ozs7O1lBRzFCQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNGLElBQUk7WUFDbEI7OztZQUVBRyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNGLGdCQUFnQjtZQUM5Qjs7O1lBRUFHLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNTCxPQUFPLElBQUksQ0FBQ00sT0FBTyxJQUNuQkMsd0JBQXdCUCxNQUFNLEdBQUc7Z0JBRXZDLE9BQU9PO1lBQ1Q7OztZQUVBQyxLQUFBQTttQkFBQUEsU0FBQUEsK0JBQStCUCxJQUFJLEVBQUVDLGdCQUFnQixFQUFFSixPQUFPO2dCQUM1RCxJQUFJVyxvQ0FBb0M7Z0JBRXhDLElBQU1DLGFBQWFULEtBQUtV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