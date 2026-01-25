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
var _occamfurtle = require("occam-furtle");
var _assertion = /*#__PURE__*/ _interop_require_default(require("../assertion"));
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
var define = _occamfurtle.elements.define;
var _default = define((_PropertyAssertion = /*#__PURE__*/ function(Assertion) {
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
            value: function validate(assignments, stated, context) {
                var validates = false;
                var propertyAssertionString = this.getString(); ///
                context.trace("Validating the '".concat(propertyAssertionString, "' property assertion..."));
                var termValidates = this.validateTerm(assignments, stated, context);
                if (termValidates) {
                    var propertyRelationVerifies = this.validatePropertyRelation(assignments, stated, context);
                    if (propertyRelationVerifies) {
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
                }
                if (validates) {
                    if (stated) {
                        this.assign(assignments, context);
                    }
                }
                if (validates) {
                    context.debug("...validated the '".concat(propertyAssertionString, "' property assertion."));
                }
                return validates;
            }
        },
        {
            key: "validateTerm",
            value: function validateTerm(assignments, stated, context) {
                var termValidates;
                var termString = this.term.getString();
                context.trace("Validating the '".concat(termString, "' term..."));
                termValidates = this.term.validate(context, function() {
                    var validatesAhead = true;
                    return validatesAhead;
                });
                if (termValidates) {
                    context.debug("...validated the '".concat(termString, "' term."));
                }
                return termValidates;
            }
        },
        {
            key: "validatePropertyRelation",
            value: function validatePropertyRelation(assignments, stated, context) {
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
            value: function validateWhenStated(assignments, context) {
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
            value: function assign(assignments, context) {
                if (assignments === null) {
                    return;
                }
                var variable;
                var Variable = _occamfurtle.elements.Variable, termNode = this.term.getNode();
                variable = Variable.fromTermNode(termNode, context);
                if (variable !== null) {
                    var variableIdentifier = variable.getIdentifier();
                    variable = context.findVariableByVariableIdentifier(variableIdentifier);
                    variable = Variable.fromVariableAndPropertyRelation(variable, this.propertyRelation);
                    var variableAssignment = (0, _assign.variableAssignmentFromVariable)(variable), assignment = variableAssignment; ///
                    assignments.push(assignment);
                }
            }
        }
    ]);
    return PropertyAssertion;
}(_assertion.default), _define_property(_PropertyAssertion, "name", "PropertyAssertion"), _PropertyAssertion));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9lbGVtZW50L2Fzc2VydGlvbi9wcm9wZXJ0eS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgZWxlbWVudHMgfSBmcm9tIFwib2NjYW0tZnVydGxlXCI7XG5cbmltcG9ydCBBc3NlcnRpb24gZnJvbSBcIi4uL2Fzc2VydGlvblwiO1xuXG5pbXBvcnQgeyB2YXJpYWJsZUFzc2lnbm1lbnRGcm9tVmFyaWFibGUgfSBmcm9tIFwiLi4vLi4vcHJvY2Vzcy9hc3NpZ25cIjtcblxuY29uc3QgeyBkZWZpbmUgfSA9IGVsZW1lbnRzO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmUoY2xhc3MgUHJvcGVydHlBc3NlcnRpb24gZXh0ZW5kcyBBc3NlcnRpb24ge1xuICBjb25zdHJ1Y3Rvcihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIHRlcm0sIHByb3BlcnR5UmVsYXRpb24pIHtcbiAgICBzdXBlcihjb250ZXh0LCBzdHJpbmcsIG5vZGUpO1xuXG4gICAgdGhpcy50ZXJtID0gdGVybTtcbiAgICB0aGlzLnByb3BlcnR5UmVsYXRpb24gPSBwcm9wZXJ0eVJlbGF0aW9uO1xuICB9XG5cbiAgZ2V0VGVybSgpIHtcbiAgICByZXR1cm4gdGhpcy50ZXJtO1xuICB9XG5cbiAgZ2V0UHJvcGVydHlSZWxhdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5wcm9wZXJ0eVJlbGF0aW9uO1xuICB9XG5cbiAgY29tcGFyZVRlcm1BbmRQcm9wZXJ0eVJlbGF0aW9uKHRlcm0sIHByb3BlcnR5UmVsYXRpb24sIGNvbnRleHQpIHtcbiAgICBsZXQgY29tcGFyZXNUb1Rlcm1BbmRQcm9wZXJ0eVJlbGF0aW9uID0gZmFsc2U7XG5cbiAgICBjb25zdCB0ZXJtU3RyaW5nID0gdGVybS5nZXRTdHJpbmcoKSxcbiAgICAgICAgICBwcm9wZXJ0eVJlbGF0aW9uU3RyaW5nID0gcHJvcGVydHlSZWxhdGlvbi5nZXRTdHJpbmcoKSxcbiAgICAgICAgICBwcm9wZXJ0eUFzc2VydGlvblN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7IC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgQ29tcGFyaW5nIHRoZSAnJHtwcm9wZXJ0eUFzc2VydGlvblN0cmluZ30nIHByb3BlcnR5IGFzc2VydGlvbiB0byB0aGUgJyR7dGVybVN0cmluZ30nIHRlcm0gYW5kICcke3Byb3BlcnR5UmVsYXRpb25TdHJpbmd9JyBwcm9wZXJ0eSByZWxhdGlvbi4uLmApO1xuXG4gICAgY29uc3QgdGVybUEgPSB0ZXJtLFxuICAgICAgICAgIHRlcm1CID0gdGhpcy50ZXJtLCAvLy9cbiAgICAgICAgICB0ZXJtQUVxdWFsVG9UZXJtQiA9IHRlcm1BLmlzRXF1YWxUbyh0ZXJtQik7XG5cbiAgICBpZiAodGVybUFFcXVhbFRvVGVybUIpIHtcbiAgICAgIGNvbnN0IHByb3BlcnR5UmVsYXRpb25FcXVhbFRvUHJvcGVydHlSZWxhdGlvbiA9IHRoaXMucHJvcGVydHlSZWxhdGlvbi5pc0VxdWFsVG8ocHJvcGVydHlSZWxhdGlvbik7XG5cbiAgICAgIGNvbXBhcmVzVG9UZXJtQW5kUHJvcGVydHlSZWxhdGlvbiA9IHByb3BlcnR5UmVsYXRpb25FcXVhbFRvUHJvcGVydHlSZWxhdGlvbjsgIC8vL1xuICAgIH1cblxuICAgIGlmIChjb21wYXJlc1RvVGVybUFuZFByb3BlcnR5UmVsYXRpb24pIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLmNvbXBhcmVkIHRoZSAnJHtwcm9wZXJ0eUFzc2VydGlvblN0cmluZ30nIHByb3BlcnR5IGFzc2VydGlvbiB0byB0aGUgJyR7dGVybVN0cmluZ30nIHRlcm0gYW5kICcke3Byb3BlcnR5UmVsYXRpb25TdHJpbmd9JyBwcm9wZXJ0eSByZWxhdGlvbi5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gY29tcGFyZXNUb1Rlcm1BbmRQcm9wZXJ0eVJlbGF0aW9uO1xuICB9XG5cbiAgdmFsaWRhdGUoYXNzaWdubWVudHMsIHN0YXRlZCwgY29udGV4dCkge1xuICAgIGxldCB2YWxpZGF0ZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IHByb3BlcnR5QXNzZXJ0aW9uU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWYWxpZGF0aW5nIHRoZSAnJHtwcm9wZXJ0eUFzc2VydGlvblN0cmluZ30nIHByb3BlcnR5IGFzc2VydGlvbi4uLmApO1xuXG4gICAgY29uc3QgdGVybVZhbGlkYXRlcyA9IHRoaXMudmFsaWRhdGVUZXJtKGFzc2lnbm1lbnRzLCBzdGF0ZWQsIGNvbnRleHQpO1xuXG4gICAgaWYgKHRlcm1WYWxpZGF0ZXMpIHtcbiAgICAgIGNvbnN0IHByb3BlcnR5UmVsYXRpb25WZXJpZmllcyA9IHRoaXMudmFsaWRhdGVQcm9wZXJ0eVJlbGF0aW9uKGFzc2lnbm1lbnRzLCBzdGF0ZWQsIGNvbnRleHQpO1xuXG4gICAgICBpZiAocHJvcGVydHlSZWxhdGlvblZlcmlmaWVzKSB7XG4gICAgICAgIGxldCB2YWxpZGF0ZXNXaGVuU3RhdGVkID0gZmFsc2UsXG4gICAgICAgICAgICB2YWxpZGF0ZXNXaGVuRGVyaXZlZCA9IGZhbHNlO1xuXG4gICAgICAgIGlmIChzdGF0ZWQpIHtcbiAgICAgICAgICB2YWxpZGF0ZXNXaGVuU3RhdGVkID0gdGhpcy52YWxpZGF0ZVdoZW5TdGF0ZWQoYXNzaWdubWVudHMsIGNvbnRleHQpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHZhbGlkYXRlc1doZW5EZXJpdmVkID0gdGhpcy52YWxpZGF0ZVdoZW5EZXJpdmVkKGNvbnRleHQpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHZhbGlkYXRlc1doZW5TdGF0ZWQgfHwgdmFsaWRhdGVzV2hlbkRlcml2ZWQpIHtcbiAgICAgICAgICB2YWxpZGF0ZXMgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHZhbGlkYXRlcykge1xuICAgICAgaWYgKHN0YXRlZCkge1xuICAgICAgICB0aGlzLmFzc2lnbihhc3NpZ25tZW50cywgY29udGV4dCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHZhbGlkYXRlcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmFsaWRhdGVkIHRoZSAnJHtwcm9wZXJ0eUFzc2VydGlvblN0cmluZ30nIHByb3BlcnR5IGFzc2VydGlvbi5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmFsaWRhdGVzO1xuICB9XG5cbiAgdmFsaWRhdGVUZXJtKGFzc2lnbm1lbnRzLCBzdGF0ZWQsIGNvbnRleHQpIHtcbiAgICBsZXQgdGVybVZhbGlkYXRlcztcblxuICAgIGNvbnN0IHRlcm1TdHJpbmcgPSB0aGlzLnRlcm0uZ2V0U3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBWYWxpZGF0aW5nIHRoZSAnJHt0ZXJtU3RyaW5nfScgdGVybS4uLmApO1xuXG4gICAgdGVybVZhbGlkYXRlcyA9IHRoaXMudGVybS52YWxpZGF0ZShjb250ZXh0LCAoKSA9PiB7XG4gICAgICBjb25zdCB2YWxpZGF0ZXNBaGVhZCA9IHRydWU7XG5cbiAgICAgIHJldHVybiB2YWxpZGF0ZXNBaGVhZDtcbiAgICB9KTtcblxuICAgIGlmICh0ZXJtVmFsaWRhdGVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52YWxpZGF0ZWQgdGhlICcke3Rlcm1TdHJpbmd9JyB0ZXJtLmApO1xuICAgIH1cblxuICAgIHJldHVybiB0ZXJtVmFsaWRhdGVzO1xuICB9XG5cbiAgdmFsaWRhdGVQcm9wZXJ0eVJlbGF0aW9uKGFzc2lnbm1lbnRzLCBzdGF0ZWQsIGNvbnRleHQpIHtcbiAgICBsZXQgcHJvcGVydHlSZWxhdGlvblZlcmlmaWVzO1xuXG4gICAgY29uc3QgcHJvcGVydHlSZWxhdGlvblN0cmluZyA9IHRoaXMucHJvcGVydHlSZWxhdGlvbi5nZXRTdHJpbmcoKTtcblxuICAgIGNvbnRleHQudHJhY2UoYFZhbGlkYXRpbmcgdGhlICcke3Byb3BlcnR5UmVsYXRpb25TdHJpbmd9JyBwcm9wZXJ0eSByZWxhdGlvbi4uLmApO1xuXG4gICAgcHJvcGVydHlSZWxhdGlvblZlcmlmaWVzID0gdGhpcy5wcm9wZXJ0eVJlbGF0aW9uLnZhbGlkYXRlKGNvbnRleHQpO1xuXG4gICAgaWYgKHByb3BlcnR5UmVsYXRpb25WZXJpZmllcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmFsaWRhdGVkIHRoZSAnJHtwcm9wZXJ0eVJlbGF0aW9uU3RyaW5nfScgcHJvcGVydHkgcmVsYXRpb24uYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHByb3BlcnR5UmVsYXRpb25WZXJpZmllcztcbiAgfVxuXG4gIHZhbGlkYXRlV2hlblN0YXRlZChhc3NpZ25tZW50cywgY29udGV4dCkge1xuICAgIGxldCB2YWxpZGF0ZXNXaGVuU3RhdGVkO1xuXG4gICAgY29uc3QgcHJvcGVydHlBc3NlcnRpb25TdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZhbGlkYXRpbmcgdGhlICcke3Byb3BlcnR5QXNzZXJ0aW9uU3RyaW5nfScgc3RhdGVkIHByb3BlcnR5IGFzc2VydGlvbi4uLmApO1xuXG4gICAgdmFsaWRhdGVzV2hlblN0YXRlZCA9IHRydWU7XG5cbiAgICBpZiAodmFsaWRhdGVzV2hlblN0YXRlZCkge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmFsaWRhdGVkIHRoZSAnJHtwcm9wZXJ0eUFzc2VydGlvblN0cmluZ30nIHN0YXRlZCBwcm9wZXJ0eSBhc3NlcnRpb24uYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZhbGlkYXRlc1doZW5TdGF0ZWQ7XG4gIH1cblxuICB2YWxpZGF0ZVdoZW5EZXJpdmVkKGNvbnRleHQpIHtcbiAgICBsZXQgdmFsaWRhdGVzV2hlbkRlcml2ZWQ7XG5cbiAgICBjb25zdCBwcm9wZXJ0eUFzc2VydGlvblN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7IC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmFsaWRhdGluZyB0aGUgJyR7cHJvcGVydHlBc3NlcnRpb25TdHJpbmd9JyBkZXJpdmVkIHByb3BlcnR5IGFzc2VydGlvbi4uLmApO1xuXG4gICAgdmFsaWRhdGVzV2hlbkRlcml2ZWQgPSB0cnVlO1xuXG4gICAgaWYgKHZhbGlkYXRlc1doZW5EZXJpdmVkKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52YWxpZGF0ZWQgdGhlICcke3Byb3BlcnR5QXNzZXJ0aW9uU3RyaW5nfScgZGVyaXZlZCBwcm9wZXJ0eSBhc3NlcnRpb24uYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZhbGlkYXRlc1doZW5EZXJpdmVkO1xuICB9XG5cbiAgYXNzaWduKGFzc2lnbm1lbnRzLCBjb250ZXh0KSB7XG4gICAgaWYgKGFzc2lnbm1lbnRzID09PSBudWxsKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgbGV0IHZhcmlhYmxlO1xuXG4gICAgY29uc3QgeyBWYXJpYWJsZSB9ID0gZWxlbWVudHMsXG4gICAgICAgICAgdGVybU5vZGUgPSB0aGlzLnRlcm0uZ2V0Tm9kZSgpO1xuXG4gICAgdmFyaWFibGUgPSBWYXJpYWJsZS5mcm9tVGVybU5vZGUodGVybU5vZGUsIGNvbnRleHQpO1xuXG4gICAgaWYgKHZhcmlhYmxlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCB2YXJpYWJsZUlkZW50aWZpZXIgPSB2YXJpYWJsZS5nZXRJZGVudGlmaWVyKCk7XG5cbiAgICAgIHZhcmlhYmxlID0gY29udGV4dC5maW5kVmFyaWFibGVCeVZhcmlhYmxlSWRlbnRpZmllcih2YXJpYWJsZUlkZW50aWZpZXIpO1xuXG4gICAgICB2YXJpYWJsZSA9IFZhcmlhYmxlLmZyb21WYXJpYWJsZUFuZFByb3BlcnR5UmVsYXRpb24odmFyaWFibGUsIHRoaXMucHJvcGVydHlSZWxhdGlvbik7XG5cbiAgICAgIGNvbnN0IHZhcmlhYmxlQXNzaWdubWVudCA9IHZhcmlhYmxlQXNzaWdubWVudEZyb21WYXJpYWJsZSh2YXJpYWJsZSksXG4gICAgICAgICAgICBhc3NpZ25tZW50ID0gdmFyaWFibGVBc3NpZ25tZW50OyAgLy8vXG5cbiAgICAgIGFzc2lnbm1lbnRzLnB1c2goYXNzaWdubWVudCk7XG4gICAgfVxuICB9XG5cbiAgc3RhdGljIG5hbWUgPSBcIlByb3BlcnR5QXNzZXJ0aW9uXCI7XG59KTtcbiJdLCJuYW1lcyI6WyJkZWZpbmUiLCJlbGVtZW50cyIsIlByb3BlcnR5QXNzZXJ0aW9uIiwiY29udGV4dCIsInN0cmluZyIsIm5vZGUiLCJ0ZXJtIiwicHJvcGVydHlSZWxhdGlvbiIsImdldFRlcm0iLCJnZXRQcm9wZXJ0eVJlbGF0aW9uIiwiY29tcGFyZVRlcm1BbmRQcm9wZXJ0eVJlbGF0aW9uIiwiY29tcGFyZXNUb1Rlcm1BbmRQcm9wZXJ0eVJlbGF0aW9uIiwidGVybVN0cmluZyIsImdldFN0cmluZyIsInByb3BlcnR5UmVsYXRpb25TdHJpbmciLCJwcm9wZXJ0eUFzc2VydGlvblN0cmluZyIsInRyYWNlIiwidGVybUEiLCJ0ZXJtQiIsInRlcm1BRXF1YWxUb1Rlcm1CIiwiaXNFcXVhbFRvIiwicHJvcGVydHlSZWxhdGlvbkVxdWFsVG9Qcm9wZXJ0eVJlbGF0aW9uIiwiZGVidWciLCJ2YWxpZGF0ZSIsImFzc2lnbm1lbnRzIiwic3RhdGVkIiwidmFsaWRhdGVzIiwidGVybVZhbGlkYXRlcyIsInZhbGlkYXRlVGVybSIsInByb3BlcnR5UmVsYXRpb25WZXJpZmllcyIsInZhbGlkYXRlUHJvcGVydHlSZWxhdGlvbiIsInZhbGlkYXRlc1doZW5TdGF0ZWQiLCJ2YWxpZGF0ZXNXaGVuRGVyaXZlZCIsInZhbGlkYXRlV2hlblN0YXRlZCIsInZhbGlkYXRlV2hlbkRlcml2ZWQiLCJhc3NpZ24iLCJ2YWxpZGF0ZXNBaGVhZCIsInZhcmlhYmxlIiwiVmFyaWFibGUiLCJ0ZXJtTm9kZSIsImdldE5vZGUiLCJmcm9tVGVybU5vZGUiLCJ2YXJpYWJsZUlkZW50aWZpZXIiLCJnZXRJZGVudGlmaWVyIiwiZmluZFZhcmlhYmxlQnlWYXJpYWJsZUlkZW50aWZpZXIiLCJmcm9tVmFyaWFibGVBbmRQcm9wZXJ0eVJlbGF0aW9uIiwidmFyaWFibGVBc3NpZ25tZW50IiwidmFyaWFibGVBc3NpZ25tZW50RnJvbVZhcmlhYmxlIiwiYXNzaWdubWVudCIsInB1c2giLCJBc3NlcnRpb24iLCJuYW1lIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFVQTs7O2VBQUE7OzsyQkFSeUI7Z0VBRUg7c0JBRXlCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFL0MsSUFBTSxBQUFFQSxTQUFXQyxxQkFBUSxDQUFuQkQ7SUFFUixXQUFlQSwyQ0FBTzs7YUFBTUUsa0JBQ2RDLE9BQU8sRUFBRUMsTUFBTSxFQUFFQyxJQUFJLEVBQUVDLElBQUksRUFBRUMsZ0JBQWdCO2dDQUQvQkw7O2dCQUV4QixrQkFGd0JBO1lBRWxCQztZQUFTQztZQUFRQzs7UUFFdkIsTUFBS0MsSUFBSSxHQUFHQTtRQUNaLE1BQUtDLGdCQUFnQixHQUFHQTs7Ozs7WUFHMUJDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0YsSUFBSTtZQUNsQjs7O1lBRUFHLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0YsZ0JBQWdCO1lBQzlCOzs7WUFFQUcsS0FBQUE7bUJBQUFBLFNBQUFBLCtCQUErQkosSUFBSSxFQUFFQyxnQkFBZ0IsRUFBRUosT0FBTztnQkFDNUQsSUFBSVEsb0NBQW9DO2dCQUV4QyxJQUFNQyxhQUFhTixLQUFLTyxTQUFTLElBQzNCQyx5QkFBeUJQLGlCQUFpQk0sU0FBUyxJQUNuREUsMEJBQTBCLElBQUksQ0FBQ0YsU0FBUyxJQUFJLEdBQUc7Z0JBRXJEVixRQUFRYSxLQUFLLENBQUMsQUFBQyxrQkFBd0VKLE9BQXZERyx5QkFBd0IsaUNBQXdERCxPQUF6QkYsWUFBVyxnQkFBcUMsT0FBdkJFLHdCQUF1QjtnQkFFdkksSUFBTUcsUUFBUVgsTUFDUlksUUFBUSxJQUFJLENBQUNaLElBQUksRUFDakJh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