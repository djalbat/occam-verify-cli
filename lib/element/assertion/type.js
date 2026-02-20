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
var _TypeAssertion;
var _default = (0, _elements.define)((_TypeAssertion = /*#__PURE__*/ function(Assertion) {
    _inherits(TypeAssertion, Assertion);
    function TypeAssertion(context, string, node, term, type) {
        _class_call_check(this, TypeAssertion);
        var _this;
        _this = _call_super(this, TypeAssertion, [
            context,
            string,
            node
        ]);
        _this.term = term;
        _this.type = type;
        return _this;
    }
    _create_class(TypeAssertion, [
        {
            key: "getTerm",
            value: function getTerm() {
                return this.term;
            }
        },
        {
            key: "getType",
            value: function getType() {
                return this.type;
            }
        },
        {
            key: "getTypeAssertionNBode",
            value: function getTypeAssertionNBode() {
                var node = this.getNode(), typeAssertionNode = node; ///
                return typeAssertionNode;
            }
        },
        {
            key: "validate",
            value: function validate(assignments, stated, context) {
                var validates = false;
                var typeAssertionString = this.getString(); ///
                context.trace("Validating the '".concat(typeAssertionString, "' type assertion..."));
                var valid = this.isValid();
                if (valid) {
                    validates = true;
                    context.debug("...the '".concat(typeAssertionString, "' type assertion is already valid."));
                } else {
                    var typeValidates = this.validateType(context);
                    if (typeValidates) {
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
                        var assertion = this; ///
                        context.addAssertion(assertion);
                        this.assign(assignments, stated, context);
                        context.debug("...verified the '".concat(typeAssertionString, "' type assertion."));
                    }
                }
                return validates;
            }
        },
        {
            key: "validateType",
            value: function validateType(context) {
                var typeValidates;
                var typeString = this.type.getString();
                context.trace("Validating the '".concat(typeString, "' type..."));
                var nominalTypeName = this.type.getNominalTypeName(), type = context.findTypeByNominalTypeName(nominalTypeName);
                if (type !== null) {
                    this.type = type;
                    typeValidates = true;
                } else {
                    context.debug("The '".concat(typeString, "' type is not present."));
                }
                if (typeValidates) {
                    context.debug("...verified the '".concat(typeString, "' type."));
                }
                return typeValidates;
            }
        },
        {
            key: "validateWhenStated",
            value: function validateWhenStated(assignments, context) {
                var _this = this;
                var validatesWhenStated = false;
                var typeAssertionString = this.getString(); ///
                context.trace("Validating the '".concat(typeAssertionString, "' stated type assertion..."));
                var termValidates = this.term.validate(context, function() {
                    var validatesForwards;
                    var termType = _this.term.getType(), typeEqualToOrSubTypeOfTermType = _this.type.isEqualToOrSubTypeOf(termType);
                    if (typeEqualToOrSubTypeOfTermType) {
                        validatesForwards = true;
                    }
                    return validatesForwards;
                });
                if (termValidates) {
                    validatesWhenStated = true;
                }
                if (validatesWhenStated) {
                    context.debug("...verified the '".concat(typeAssertionString, "' stated type assertion."));
                }
                return validatesWhenStated;
            }
        },
        {
            key: "validateWhenDerived",
            value: function validateWhenDerived(context) {
                var _this = this;
                var validatesWhenDerived;
                var typeAssertionString = this.getString(); ///
                context.trace("Validating the '".concat(typeAssertionString, "' derived type assertion..."));
                var termValidates = this.term.validate(context, function() {
                    var validatesForwards = false;
                    var termType = _this.term.getType(), termTypeProvisional = termType.isProvisional();
                    if (!termTypeProvisional) {
                        var typeEqualToOrSuperTypeOfTermType = _this.type.isEqualToOrSuperTypeOf(termType);
                        if (typeEqualToOrSuperTypeOfTermType) {
                            validatesForwards = true;
                        }
                    }
                    return validatesForwards;
                });
                validatesWhenDerived = termValidates; ///
                if (validatesWhenDerived) {
                    context.debug("...verified the '".concat(typeAssertionString, "' derived type assertion."));
                }
                return validatesWhenDerived;
            }
        },
        {
            key: "assign",
            value: function assign(assignments, stated, context) {
                if (assignments === null) {
                    return;
                }
                if (!stated) {
                    return;
                }
                var typeAssertion = this, variableAssigment = (0, _assign.variableAssignmentFromTypeAssertion)(typeAssertion, context), assignment = variableAssigment; ///
                assignments.push(assignment);
            }
        }
    ]);
    return TypeAssertion;
}(_assertion.default), _define_property(_TypeAssertion, "name", "TypeAssertion"), _TypeAssertion));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9lbGVtZW50L2Fzc2VydGlvbi90eXBlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgQXNzZXJ0aW9uIGZyb20gXCIuLi9hc3NlcnRpb25cIjtcblxuaW1wb3J0IHsgZGVmaW5lIH0gZnJvbSBcIi4uLy4uL2VsZW1lbnRzXCI7XG5pbXBvcnQgeyB2YXJpYWJsZUFzc2lnbm1lbnRGcm9tVHlwZUFzc2VydGlvbiB9IGZyb20gXCIuLi8uLi9wcm9jZXNzL2Fzc2lnblwiO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmUoY2xhc3MgVHlwZUFzc2VydGlvbiBleHRlbmRzIEFzc2VydGlvbiB7XG4gIGNvbnN0cnVjdG9yKGNvbnRleHQsIHN0cmluZywgbm9kZSwgdGVybSwgdHlwZSkge1xuICAgIHN1cGVyKGNvbnRleHQsIHN0cmluZywgbm9kZSk7XG5cbiAgICB0aGlzLnRlcm0gPSB0ZXJtO1xuICAgIHRoaXMudHlwZSA9IHR5cGU7XG4gIH1cblxuICBnZXRUZXJtKCkge1xuICAgIHJldHVybiB0aGlzLnRlcm07XG4gIH1cblxuICBnZXRUeXBlKCkge1xuICAgIHJldHVybiB0aGlzLnR5cGU7XG4gIH1cblxuICBnZXRUeXBlQXNzZXJ0aW9uTkJvZGUoKSB7XG4gICAgY29uc3Qgbm9kZSA9IHRoaXMuZ2V0Tm9kZSgpLFxuICAgICAgICAgIHR5cGVBc3NlcnRpb25Ob2RlID0gbm9kZTsgLy8vXG5cbiAgICByZXR1cm4gdHlwZUFzc2VydGlvbk5vZGU7XG4gIH1cblxuICB2YWxpZGF0ZShhc3NpZ25tZW50cywgc3RhdGVkLCBjb250ZXh0KSB7XG4gICAgbGV0IHZhbGlkYXRlcyA9IGZhbHNlO1xuXG4gICAgY29uc3QgdHlwZUFzc2VydGlvblN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7ICAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZhbGlkYXRpbmcgdGhlICcke3R5cGVBc3NlcnRpb25TdHJpbmd9JyB0eXBlIGFzc2VydGlvbi4uLmApO1xuXG4gICAgY29uc3QgdmFsaWQgPSB0aGlzLmlzVmFsaWQoKTtcblxuICAgIGlmICh2YWxpZCkge1xuICAgICAgdmFsaWRhdGVzID0gdHJ1ZTtcblxuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udGhlICcke3R5cGVBc3NlcnRpb25TdHJpbmd9JyB0eXBlIGFzc2VydGlvbiBpcyBhbHJlYWR5IHZhbGlkLmApO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCB0eXBlVmFsaWRhdGVzID0gdGhpcy52YWxpZGF0ZVR5cGUoY29udGV4dCk7XG5cbiAgICAgIGlmICh0eXBlVmFsaWRhdGVzKSB7XG4gICAgICAgIGxldCB2YWxpZGF0ZXNXaGVuU3RhdGVkID0gZmFsc2UsXG4gICAgICAgICAgICAgIHZhbGlkYXRlc1doZW5EZXJpdmVkID0gZmFsc2U7XG5cbiAgICAgICAgaWYgKHN0YXRlZCkge1xuICAgICAgICAgIHZhbGlkYXRlc1doZW5TdGF0ZWQgPSB0aGlzLnZhbGlkYXRlV2hlblN0YXRlZChhc3NpZ25tZW50cywgY29udGV4dCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdmFsaWRhdGVzV2hlbkRlcml2ZWQgPSB0aGlzLnZhbGlkYXRlV2hlbkRlcml2ZWQoY29udGV4dCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodmFsaWRhdGVzV2hlblN0YXRlZCB8fCB2YWxpZGF0ZXNXaGVuRGVyaXZlZCkge1xuICAgICAgICAgIHZhbGlkYXRlcyA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHZhbGlkYXRlcykge1xuICAgICAgICBjb25zdCBhc3NlcnRpb24gPSB0aGlzOyAvLy9cblxuICAgICAgICBjb250ZXh0LmFkZEFzc2VydGlvbihhc3NlcnRpb24pO1xuXG4gICAgICAgIHRoaXMuYXNzaWduKGFzc2lnbm1lbnRzLCBzdGF0ZWQsIGNvbnRleHQpO1xuXG4gICAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHt0eXBlQXNzZXJ0aW9uU3RyaW5nfScgdHlwZSBhc3NlcnRpb24uYCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHZhbGlkYXRlcztcbiAgfVxuXG4gIHZhbGlkYXRlVHlwZShjb250ZXh0KSB7XG4gICAgbGV0IHR5cGVWYWxpZGF0ZXM7XG5cbiAgICBjb25zdCB0eXBlU3RyaW5nID0gdGhpcy50eXBlLmdldFN0cmluZygpO1xuXG4gICAgY29udGV4dC50cmFjZShgVmFsaWRhdGluZyB0aGUgJyR7dHlwZVN0cmluZ30nIHR5cGUuLi5gKTtcblxuICAgIGNvbnN0IG5vbWluYWxUeXBlTmFtZSA9IHRoaXMudHlwZS5nZXROb21pbmFsVHlwZU5hbWUoKSxcbiAgICAgICAgICB0eXBlID0gY29udGV4dC5maW5kVHlwZUJ5Tm9taW5hbFR5cGVOYW1lKG5vbWluYWxUeXBlTmFtZSk7XG5cbiAgICBpZiAodHlwZSAhPT0gbnVsbCkge1xuICAgICAgdGhpcy50eXBlID0gdHlwZTtcblxuICAgICAgdHlwZVZhbGlkYXRlcyA9IHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYFRoZSAnJHt0eXBlU3RyaW5nfScgdHlwZSBpcyBub3QgcHJlc2VudC5gKTtcbiAgICB9XG5cbiAgICBpZiAodHlwZVZhbGlkYXRlcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke3R5cGVTdHJpbmd9JyB0eXBlLmApO1xuICAgIH1cblxuICAgIHJldHVybiB0eXBlVmFsaWRhdGVzO1xuICB9XG5cbiAgdmFsaWRhdGVXaGVuU3RhdGVkKGFzc2lnbm1lbnRzLCBjb250ZXh0KSB7XG4gICAgbGV0IHZhbGlkYXRlc1doZW5TdGF0ZWQgPSBmYWxzZTtcblxuICAgIGNvbnN0IHR5cGVBc3NlcnRpb25TdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZhbGlkYXRpbmcgdGhlICcke3R5cGVBc3NlcnRpb25TdHJpbmd9JyBzdGF0ZWQgdHlwZSBhc3NlcnRpb24uLi5gKTtcblxuICAgIGNvbnN0IHRlcm1WYWxpZGF0ZXMgPSB0aGlzLnRlcm0udmFsaWRhdGUoY29udGV4dCwgKCkgPT4ge1xuICAgICAgbGV0IHZhbGlkYXRlc0ZvcndhcmRzO1xuXG4gICAgICBjb25zdCB0ZXJtVHlwZSA9IHRoaXMudGVybS5nZXRUeXBlKCksXG4gICAgICAgICAgICB0eXBlRXF1YWxUb09yU3ViVHlwZU9mVGVybVR5cGUgPSB0aGlzLnR5cGUuaXNFcXVhbFRvT3JTdWJUeXBlT2YodGVybVR5cGUpO1xuXG4gICAgICBpZiAodHlwZUVxdWFsVG9PclN1YlR5cGVPZlRlcm1UeXBlKSB7XG4gICAgICAgIHZhbGlkYXRlc0ZvcndhcmRzID0gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHZhbGlkYXRlc0ZvcndhcmRzO1xuICAgIH0pO1xuXG4gICAgaWYgKHRlcm1WYWxpZGF0ZXMpIHtcbiAgICAgIHZhbGlkYXRlc1doZW5TdGF0ZWQgPSB0cnVlO1xuICAgIH1cblxuICAgIGlmICh2YWxpZGF0ZXNXaGVuU3RhdGVkKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7dHlwZUFzc2VydGlvblN0cmluZ30nIHN0YXRlZCB0eXBlIGFzc2VydGlvbi5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmFsaWRhdGVzV2hlblN0YXRlZDtcbiAgfVxuXG4gIHZhbGlkYXRlV2hlbkRlcml2ZWQoY29udGV4dCkge1xuICAgIGxldCB2YWxpZGF0ZXNXaGVuRGVyaXZlZDtcblxuICAgIGNvbnN0IHR5cGVBc3NlcnRpb25TdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZhbGlkYXRpbmcgdGhlICcke3R5cGVBc3NlcnRpb25TdHJpbmd9JyBkZXJpdmVkIHR5cGUgYXNzZXJ0aW9uLi4uYCk7XG5cbiAgICBjb25zdCB0ZXJtVmFsaWRhdGVzID0gdGhpcy50ZXJtLnZhbGlkYXRlKGNvbnRleHQsICgpID0+IHtcbiAgICAgIGxldCB2YWxpZGF0ZXNGb3J3YXJkcyA9IGZhbHNlO1xuXG4gICAgICBjb25zdCB0ZXJtVHlwZSA9IHRoaXMudGVybS5nZXRUeXBlKCksXG4gICAgICAgICAgICB0ZXJtVHlwZVByb3Zpc2lvbmFsID0gdGVybVR5cGUuaXNQcm92aXNpb25hbCgpO1xuXG4gICAgICBpZiAoIXRlcm1UeXBlUHJvdmlzaW9uYWwpIHtcbiAgICAgICAgY29uc3QgdHlwZUVxdWFsVG9PclN1cGVyVHlwZU9mVGVybVR5cGUgPSB0aGlzLnR5cGUuaXNFcXVhbFRvT3JTdXBlclR5cGVPZih0ZXJtVHlwZSk7XG5cbiAgICAgICAgaWYgKHR5cGVFcXVhbFRvT3JTdXBlclR5cGVPZlRlcm1UeXBlKSB7XG4gICAgICAgICAgdmFsaWRhdGVzRm9yd2FyZHMgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB2YWxpZGF0ZXNGb3J3YXJkcztcbiAgICB9KTtcblxuICAgIHZhbGlkYXRlc1doZW5EZXJpdmVkID0gdGVybVZhbGlkYXRlczsgLy8vXG5cbiAgICBpZiAodmFsaWRhdGVzV2hlbkRlcml2ZWQpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHt0eXBlQXNzZXJ0aW9uU3RyaW5nfScgZGVyaXZlZCB0eXBlIGFzc2VydGlvbi5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmFsaWRhdGVzV2hlbkRlcml2ZWQ7XG4gIH1cblxuICBhc3NpZ24oYXNzaWdubWVudHMsIHN0YXRlZCwgY29udGV4dCkge1xuICAgIGlmIChhc3NpZ25tZW50cyA9PT0gbnVsbCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmICghc3RhdGVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgdHlwZUFzc2VydGlvbiA9IHRoaXMsIC8vL1xuICAgICAgICAgIHZhcmlhYmxlQXNzaWdtZW50ID0gdmFyaWFibGVBc3NpZ25tZW50RnJvbVR5cGVBc3NlcnRpb24odHlwZUFzc2VydGlvbiwgY29udGV4dCksXG4gICAgICAgICAgYXNzaWdubWVudCA9IHZhcmlhYmxlQXNzaWdtZW50OyAgLy8vXG5cbiAgICBhc3NpZ25tZW50cy5wdXNoKGFzc2lnbm1lbnQpO1xuICB9XG5cbiAgc3RhdGljIG5hbWUgPSBcIlR5cGVBc3NlcnRpb25cIjtcbn0pO1xuIl0sIm5hbWVzIjpbImRlZmluZSIsIlR5cGVBc3NlcnRpb24iLCJjb250ZXh0Iiwic3RyaW5nIiwibm9kZSIsInRlcm0iLCJ0eXBlIiwiZ2V0VGVybSIsImdldFR5cGUiLCJnZXRUeXBlQXNzZXJ0aW9uTkJvZGUiLCJnZXROb2RlIiwidHlwZUFzc2VydGlvbk5vZGUiLCJ2YWxpZGF0ZSIsImFzc2lnbm1lbnRzIiwic3RhdGVkIiwidmFsaWRhdGVzIiwidHlwZUFzc2VydGlvblN0cmluZyIsImdldFN0cmluZyIsInRyYWNlIiwidmFsaWQiLCJpc1ZhbGlkIiwiZGVidWciLCJ0eXBlVmFsaWRhdGVzIiwidmFsaWRhdGVUeXBlIiwidmFsaWRhdGVzV2hlblN0YXRlZCIsInZhbGlkYXRlc1doZW5EZXJpdmVkIiwidmFsaWRhdGVXaGVuU3RhdGVkIiwidmFsaWRhdGVXaGVuRGVyaXZlZCIsImFzc2VydGlvbiIsImFkZEFzc2VydGlvbiIsImFzc2lnbiIsInR5cGVTdHJpbmciLCJub21pbmFsVHlwZU5hbWUiLCJnZXROb21pbmFsVHlwZU5hbWUiLCJmaW5kVHlwZUJ5Tm9taW5hbFR5cGVOYW1lIiwidGVybVZhbGlkYXRlcyIsInZhbGlkYXRlc0ZvcndhcmRzIiwidGVybVR5cGUiLCJ0eXBlRXF1YWxUb09yU3ViVHlwZU9mVGVybVR5cGUiLCJpc0VxdWFsVG9PclN1YlR5cGVPZiIsInRlcm1UeXBlUHJvdmlzaW9uYWwiLCJpc1Byb3Zpc2lvbmFsIiwidHlwZUVxdWFsVG9PclN1cGVyVHlwZU9mVGVybVR5cGUiLCJpc0VxdWFsVG9PclN1cGVyVHlwZU9mIiwidHlwZUFzc2VydGlvbiIsInZhcmlhYmxlQXNzaWdtZW50IiwidmFyaWFibGVBc3NpZ25tZW50RnJvbVR5cGVBc3NlcnRpb24iLCJhc3NpZ25tZW50IiwicHVzaCIsIkFzc2VydGlvbiIsIm5hbWUiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQU9BOzs7ZUFBQTs7O2dFQUxzQjt3QkFFQztzQkFDNkI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUVwRCxXQUFlQSxJQUFBQSxnQkFBTSxrQ0FBQzs7YUFBTUMsY0FDZEMsT0FBTyxFQUFFQyxNQUFNLEVBQUVDLElBQUksRUFBRUMsSUFBSSxFQUFFQyxJQUFJO2dDQURuQkw7O2dCQUV4QixrQkFGd0JBO1lBRWxCQztZQUFTQztZQUFRQzs7UUFFdkIsTUFBS0MsSUFBSSxHQUFHQTtRQUNaLE1BQUtDLElBQUksR0FBR0E7Ozs7O1lBR2RDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0YsSUFBSTtZQUNsQjs7O1lBRUFHLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0YsSUFBSTtZQUNsQjs7O1lBRUFHLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNTCxPQUFPLElBQUksQ0FBQ00sT0FBTyxJQUNuQkMsb0JBQW9CUCxNQUFNLEdBQUc7Z0JBRW5DLE9BQU9PO1lBQ1Q7OztZQUVBQyxLQUFBQTttQkFBQUEsU0FBQUEsU0FBU0MsV0FBVyxFQUFFQyxNQUFNLEVBQUVaLE9BQU87Z0JBQ25DLElBQUlhLFlBQVk7Z0JBRWhCLElBQU1DLHNCQUFzQixJQUFJLENBQUNDLFNBQVMsSUFBSyxHQUFHO2dCQUVsRGYsUUFBUWdCLEtBQUssQ0FBQyxBQUFDLG1CQUFzQyxPQUFwQkYscUJBQW9CO2dCQUVyRCxJQUFNRyxRQUFRLElBQUksQ0FBQ0MsT0FBTztnQkFFMUIsSUFBSUQsT0FBTztvQkFDVEosWUFBWTtvQkFFWmIsUUFBUW1CLEtBQUssQ0FB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