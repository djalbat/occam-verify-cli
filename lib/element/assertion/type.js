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
var _json = require("../../utilities/json");
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
            value: function validate(stated, context) {
                var typeAssertion = null;
                var typeAssertionString = this.getString(); ///
                context.trace("Validating the '".concat(typeAssertionString, "' type assertion..."));
                var validAssertion = this.findValidAssertion(context);
                if (validAssertion) {
                    typeAssertion = validAssertion; ///
                    context.debug("...the '".concat(typeAssertionString, "' type assertion is already valid."));
                } else {
                    var validates = false;
                    var typeValidates = this.validateType(context);
                    if (typeValidates) {
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
                        typeAssertion = assertion; ///
                        this.assign(stated, context);
                        context.addAssertion(assertion);
                        context.debug("...verified the '".concat(typeAssertionString, "' type assertion."));
                    }
                }
                return typeAssertion;
            }
        },
        {
            key: "validateType",
            value: function validateType(context) {
                var typeValidates;
                var typeString = this.type.getString(), typeAssertionString = this.getString(); ///
                context.trace("Validating the '".concat(typeAssertionString, "' type assertion's '").concat(typeString, "' type..."));
                var nominalTypeName = this.type.getNominalTypeName(), type = context.findTypeByNominalTypeName(nominalTypeName);
                if (type !== null) {
                    this.type = type;
                    typeValidates = true;
                } else {
                    context.debug("The '".concat(typeString, "' type is not present."));
                }
                if (typeValidates) {
                    context.debug("...validated the '".concat(typeAssertionString, "' type assertion's '").concat(typeString, "' type."));
                }
                return typeValidates;
            }
        },
        {
            key: "validateWhenStated",
            value: function validateWhenStated(context) {
                var _this = this;
                var validatesWhenStated = false;
                var typeAssertionString = this.getString(); ///
                context.trace("Validating the '".concat(typeAssertionString, "' stated type assertion..."));
                var term = this.term.validate(context, function() {
                    var validatesForwards;
                    var termType = _this.term.getType(), typeEqualToOrSubTypeOfTermType = _this.type.isEqualToOrSubTypeOf(termType);
                    if (typeEqualToOrSubTypeOfTermType) {
                        validatesForwards = true;
                    }
                    return validatesForwards;
                });
                if (term !== null) {
                    this.term = term;
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
                var validatesWhenDerived = false;
                var typeAssertionString = this.getString(); ///
                context.trace("Validating the '".concat(typeAssertionString, "' derived type assertion..."));
                var term = this.term.validate(context, function() {
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
                if (term !== null) {
                    this.term = term;
                    validatesWhenDerived = true;
                }
                if (validatesWhenDerived) {
                    context.debug("...verified the '".concat(typeAssertionString, "' derived type assertion."));
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
                var typeAssertion = this, variableAssigment = (0, _assign.variableAssignmentFromTypeAssertion)(typeAssertion, context);
                if (variableAssigment !== null) {
                    var assignment = variableAssigment; ///
                    context.addAssignment(assignment);
                }
            }
        },
        {
            key: "toJSON",
            value: function toJSON() {
                debugger;
                var name = this.constructor.name, termJSON = (0, _json.termToTermJSON)(this.term), typeJSON = typeToTypeJSON(this.type), term = termJSON, type = typeJSON, string = this.getString(), json = {
                    name: name,
                    term: term,
                    type: type,
                    string: string
                };
                return json;
            }
        }
    ], [
        {
            key: "fromJSON",
            value: function fromJSON(json, context) {
                var typeAssertion = null;
                var name = json.name;
                if (this.name === name) {
                    debugger;
                }
                return typeAssertion;
            }
        }
    ]);
    return TypeAssertion;
}(_assertion.default), _define_property(_TypeAssertion, "name", "TypeAssertion"), _TypeAssertion));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9lbGVtZW50L2Fzc2VydGlvbi90eXBlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgQXNzZXJ0aW9uIGZyb20gXCIuLi9hc3NlcnRpb25cIjtcblxuaW1wb3J0IHsgZGVmaW5lIH0gZnJvbSBcIi4uLy4uL2VsZW1lbnRzXCI7XG5pbXBvcnQgeyB2YXJpYWJsZUFzc2lnbm1lbnRGcm9tVHlwZUFzc2VydGlvbiB9IGZyb20gXCIuLi8uLi9wcm9jZXNzL2Fzc2lnblwiO1xuaW1wb3J0IHt0ZXJtVG9UZXJtSlNPTn0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9qc29uXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZShjbGFzcyBUeXBlQXNzZXJ0aW9uIGV4dGVuZHMgQXNzZXJ0aW9uIHtcbiAgY29uc3RydWN0b3IoY29udGV4dCwgc3RyaW5nLCBub2RlLCB0ZXJtLCB0eXBlKSB7XG4gICAgc3VwZXIoY29udGV4dCwgc3RyaW5nLCBub2RlKTtcblxuICAgIHRoaXMudGVybSA9IHRlcm07XG4gICAgdGhpcy50eXBlID0gdHlwZTtcbiAgfVxuXG4gIGdldFRlcm0oKSB7XG4gICAgcmV0dXJuIHRoaXMudGVybTtcbiAgfVxuXG4gIGdldFR5cGUoKSB7XG4gICAgcmV0dXJuIHRoaXMudHlwZTtcbiAgfVxuXG4gIGdldFR5cGVBc3NlcnRpb25OQm9kZSgpIHtcbiAgICBjb25zdCBub2RlID0gdGhpcy5nZXROb2RlKCksXG4gICAgICAgICAgdHlwZUFzc2VydGlvbk5vZGUgPSBub2RlOyAvLy9cblxuICAgIHJldHVybiB0eXBlQXNzZXJ0aW9uTm9kZTtcbiAgfVxuXG4gIHZhbGlkYXRlKHN0YXRlZCwgY29udGV4dCkge1xuICAgIGxldCB0eXBlQXNzZXJ0aW9uID0gbnVsbDtcblxuICAgIGNvbnN0IHR5cGVBc3NlcnRpb25TdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWYWxpZGF0aW5nIHRoZSAnJHt0eXBlQXNzZXJ0aW9uU3RyaW5nfScgdHlwZSBhc3NlcnRpb24uLi5gKTtcblxuICAgIGNvbnN0IHZhbGlkQXNzZXJ0aW9uID0gdGhpcy5maW5kVmFsaWRBc3NlcnRpb24oY29udGV4dCk7XG5cbiAgICBpZiAodmFsaWRBc3NlcnRpb24pIHtcbiAgICAgIHR5cGVBc3NlcnRpb24gPSB2YWxpZEFzc2VydGlvbjsgLy8vXG5cbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnRoZSAnJHt0eXBlQXNzZXJ0aW9uU3RyaW5nfScgdHlwZSBhc3NlcnRpb24gaXMgYWxyZWFkeSB2YWxpZC5gKTtcbiAgICB9IGVsc2Uge1xuICAgICAgbGV0IHZhbGlkYXRlcyA9IGZhbHNlO1xuXG4gICAgICBjb25zdCB0eXBlVmFsaWRhdGVzID0gdGhpcy52YWxpZGF0ZVR5cGUoY29udGV4dCk7XG5cbiAgICAgIGlmICh0eXBlVmFsaWRhdGVzKSB7XG4gICAgICAgIGxldCB2YWxpZGF0ZXNXaGVuU3RhdGVkID0gZmFsc2UsXG4gICAgICAgICAgICB2YWxpZGF0ZXNXaGVuRGVyaXZlZCA9IGZhbHNlO1xuXG4gICAgICAgIGlmIChzdGF0ZWQpIHtcbiAgICAgICAgICB2YWxpZGF0ZXNXaGVuU3RhdGVkID0gdGhpcy52YWxpZGF0ZVdoZW5TdGF0ZWQoY29udGV4dCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdmFsaWRhdGVzV2hlbkRlcml2ZWQgPSB0aGlzLnZhbGlkYXRlV2hlbkRlcml2ZWQoY29udGV4dCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodmFsaWRhdGVzV2hlblN0YXRlZCB8fCB2YWxpZGF0ZXNXaGVuRGVyaXZlZCkge1xuICAgICAgICAgIHZhbGlkYXRlcyA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHZhbGlkYXRlcykge1xuICAgICAgICBjb25zdCBhc3NlcnRpb24gPSB0aGlzOyAvLy9cblxuICAgICAgICB0eXBlQXNzZXJ0aW9uID0gYXNzZXJ0aW9uOyAgLy8vXG5cbiAgICAgICAgdGhpcy5hc3NpZ24oc3RhdGVkLCBjb250ZXh0KTtcblxuICAgICAgICBjb250ZXh0LmFkZEFzc2VydGlvbihhc3NlcnRpb24pO1xuXG4gICAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHt0eXBlQXNzZXJ0aW9uU3RyaW5nfScgdHlwZSBhc3NlcnRpb24uYCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHR5cGVBc3NlcnRpb247XG4gIH1cblxuICB2YWxpZGF0ZVR5cGUoY29udGV4dCkge1xuICAgIGxldCB0eXBlVmFsaWRhdGVzO1xuXG4gICAgY29uc3QgdHlwZVN0cmluZyA9IHRoaXMudHlwZS5nZXRTdHJpbmcoKSxcbiAgICAgICAgICB0eXBlQXNzZXJ0aW9uU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgIC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmFsaWRhdGluZyB0aGUgJyR7dHlwZUFzc2VydGlvblN0cmluZ30nIHR5cGUgYXNzZXJ0aW9uJ3MgJyR7dHlwZVN0cmluZ30nIHR5cGUuLi5gKTtcblxuICAgIGNvbnN0IG5vbWluYWxUeXBlTmFtZSA9IHRoaXMudHlwZS5nZXROb21pbmFsVHlwZU5hbWUoKSxcbiAgICAgICAgICB0eXBlID0gY29udGV4dC5maW5kVHlwZUJ5Tm9taW5hbFR5cGVOYW1lKG5vbWluYWxUeXBlTmFtZSk7XG5cbiAgICBpZiAodHlwZSAhPT0gbnVsbCkge1xuICAgICAgdGhpcy50eXBlID0gdHlwZTtcblxuICAgICAgdHlwZVZhbGlkYXRlcyA9IHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYFRoZSAnJHt0eXBlU3RyaW5nfScgdHlwZSBpcyBub3QgcHJlc2VudC5gKTtcbiAgICB9XG5cbiAgICBpZiAodHlwZVZhbGlkYXRlcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmFsaWRhdGVkIHRoZSAnJHt0eXBlQXNzZXJ0aW9uU3RyaW5nfScgdHlwZSBhc3NlcnRpb24ncyAnJHt0eXBlU3RyaW5nfScgdHlwZS5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdHlwZVZhbGlkYXRlcztcbiAgfVxuXG4gIHZhbGlkYXRlV2hlblN0YXRlZChjb250ZXh0KSB7XG4gICAgbGV0IHZhbGlkYXRlc1doZW5TdGF0ZWQgPSBmYWxzZTtcblxuICAgIGNvbnN0IHR5cGVBc3NlcnRpb25TdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZhbGlkYXRpbmcgdGhlICcke3R5cGVBc3NlcnRpb25TdHJpbmd9JyBzdGF0ZWQgdHlwZSBhc3NlcnRpb24uLi5gKTtcblxuICAgIGNvbnN0IHRlcm0gPSB0aGlzLnRlcm0udmFsaWRhdGUoY29udGV4dCwgKCkgPT4ge1xuICAgICAgbGV0IHZhbGlkYXRlc0ZvcndhcmRzO1xuXG4gICAgICBjb25zdCB0ZXJtVHlwZSA9IHRoaXMudGVybS5nZXRUeXBlKCksXG4gICAgICAgICAgICB0eXBlRXF1YWxUb09yU3ViVHlwZU9mVGVybVR5cGUgPSB0aGlzLnR5cGUuaXNFcXVhbFRvT3JTdWJUeXBlT2YodGVybVR5cGUpO1xuXG4gICAgICBpZiAodHlwZUVxdWFsVG9PclN1YlR5cGVPZlRlcm1UeXBlKSB7XG4gICAgICAgIHZhbGlkYXRlc0ZvcndhcmRzID0gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHZhbGlkYXRlc0ZvcndhcmRzO1xuICAgIH0pO1xuXG4gICAgaWYgKHRlcm0gIT09IG51bGwpIHtcbiAgICAgIHRoaXMudGVybSA9IHRlcm07XG5cbiAgICAgIHZhbGlkYXRlc1doZW5TdGF0ZWQgPSB0cnVlO1xuICAgIH1cblxuICAgIGlmICh2YWxpZGF0ZXNXaGVuU3RhdGVkKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7dHlwZUFzc2VydGlvblN0cmluZ30nIHN0YXRlZCB0eXBlIGFzc2VydGlvbi5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmFsaWRhdGVzV2hlblN0YXRlZDtcbiAgfVxuXG4gIHZhbGlkYXRlV2hlbkRlcml2ZWQoY29udGV4dCkge1xuICAgIGxldCB2YWxpZGF0ZXNXaGVuRGVyaXZlZCA9IGZhbHNlO1xuXG4gICAgY29uc3QgdHlwZUFzc2VydGlvblN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7IC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmFsaWRhdGluZyB0aGUgJyR7dHlwZUFzc2VydGlvblN0cmluZ30nIGRlcml2ZWQgdHlwZSBhc3NlcnRpb24uLi5gKTtcblxuICAgIGNvbnN0IHRlcm0gPSB0aGlzLnRlcm0udmFsaWRhdGUoY29udGV4dCwgKCkgPT4ge1xuICAgICAgbGV0IHZhbGlkYXRlc0ZvcndhcmRzID0gZmFsc2U7XG5cbiAgICAgIGNvbnN0IHRlcm1UeXBlID0gdGhpcy50ZXJtLmdldFR5cGUoKSxcbiAgICAgICAgICAgIHRlcm1UeXBlUHJvdmlzaW9uYWwgPSB0ZXJtVHlwZS5pc1Byb3Zpc2lvbmFsKCk7XG5cbiAgICAgIGlmICghdGVybVR5cGVQcm92aXNpb25hbCkge1xuICAgICAgICBjb25zdCB0eXBlRXF1YWxUb09yU3VwZXJUeXBlT2ZUZXJtVHlwZSA9IHRoaXMudHlwZS5pc0VxdWFsVG9PclN1cGVyVHlwZU9mKHRlcm1UeXBlKTtcblxuICAgICAgICBpZiAodHlwZUVxdWFsVG9PclN1cGVyVHlwZU9mVGVybVR5cGUpIHtcbiAgICAgICAgICB2YWxpZGF0ZXNGb3J3YXJkcyA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHZhbGlkYXRlc0ZvcndhcmRzO1xuICAgIH0pO1xuXG4gICAgaWYgKHRlcm0gIT09IG51bGwpIHtcbiAgICAgIHRoaXMudGVybSA9IHRlcm07XG5cbiAgICAgIHZhbGlkYXRlc1doZW5EZXJpdmVkID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAodmFsaWRhdGVzV2hlbkRlcml2ZWQpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHt0eXBlQXNzZXJ0aW9uU3RyaW5nfScgZGVyaXZlZCB0eXBlIGFzc2VydGlvbi5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmFsaWRhdGVzV2hlbkRlcml2ZWQ7XG4gIH1cblxuICBhc3NpZ24oc3RhdGVkLCBjb250ZXh0KSB7XG4gICAgaWYgKCFzdGF0ZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCB0eXBlQXNzZXJ0aW9uID0gdGhpcywgLy8vXG4gICAgICAgICAgdmFyaWFibGVBc3NpZ21lbnQgPSB2YXJpYWJsZUFzc2lnbm1lbnRGcm9tVHlwZUFzc2VydGlvbih0eXBlQXNzZXJ0aW9uLCBjb250ZXh0KTtcblxuICAgIGlmICh2YXJpYWJsZUFzc2lnbWVudCAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgYXNzaWdubWVudCA9IHZhcmlhYmxlQXNzaWdtZW50OyAgLy8vXG5cbiAgICAgIGNvbnRleHQuYWRkQXNzaWdubWVudChhc3NpZ25tZW50KTtcbiAgICB9XG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiVHlwZUFzc2VydGlvblwiO1xuXG4gIHRvSlNPTigpIHtcbiAgICBkZWJ1Z2dlclxuXG4gICAgY29uc3QgeyBuYW1lIH0gPSB0aGlzLmNvbnN0cnVjdG9yLFxuICAgICAgICAgIHRlcm1KU09OID0gdGVybVRvVGVybUpTT04odGhpcy50ZXJtKSxcbiAgICAgICAgICB0eXBlSlNPTiA9IHR5cGVUb1R5cGVKU09OKHRoaXMudHlwZSksXG4gICAgICAgICAgdGVybSA9IHRlcm1KU09OLCAgLy8vXG4gICAgICAgICAgdHlwZSA9IHR5cGVKU09OLCAgLy8vXG4gICAgICAgICAgc3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKSxcbiAgICAgICAgICBqc29uID0ge1xuICAgICAgICAgICAgbmFtZSxcbiAgICAgICAgICAgIHRlcm0sXG4gICAgICAgICAgICB0eXBlLFxuICAgICAgICAgICAgc3RyaW5nXG4gICAgICAgICAgfTtcblxuICAgIHJldHVybiBqc29uO1xuICB9XG5cbiAgc3RhdGljIGZyb21KU09OKGpzb24sIGNvbnRleHQpIHtcbiAgICBsZXQgdHlwZUFzc2VydGlvbiA9IG51bGw7XG5cbiAgICBjb25zdCB7IG5hbWUgfSA9IGpzb247XG5cbiAgICBpZiAodGhpcy5uYW1lID09PSBuYW1lKSB7XG4gICAgICBkZWJ1Z2dlclxuICAgIH1cblxuICAgIHJldHVybiB0eXBlQXNzZXJ0aW9uO1xuICB9XG59KTtcbiJdLCJuYW1lcyI6WyJkZWZpbmUiLCJUeXBlQXNzZXJ0aW9uIiwiY29udGV4dCIsInN0cmluZyIsIm5vZGUiLCJ0ZXJtIiwidHlwZSIsImdldFRlcm0iLCJnZXRUeXBlIiwiZ2V0VHlwZUFzc2VydGlvbk5Cb2RlIiwiZ2V0Tm9kZSIsInR5cGVBc3NlcnRpb25Ob2RlIiwidmFsaWRhdGUiLCJzdGF0ZWQiLCJ0eXBlQXNzZXJ0aW9uIiwidHlwZUFzc2VydGlvblN0cmluZyIsImdldFN0cmluZyIsInRyYWNlIiwidmFsaWRBc3NlcnRpb24iLCJmaW5kVmFsaWRBc3NlcnRpb24iLCJkZWJ1ZyIsInZhbGlkYXRlcyIsInR5cGVWYWxpZGF0ZXMiLCJ2YWxpZGF0ZVR5cGUiLCJ2YWxpZGF0ZXNXaGVuU3RhdGVkIiwidmFsaWRhdGVzV2hlbkRlcml2ZWQiLCJ2YWxpZGF0ZVdoZW5TdGF0ZWQiLCJ2YWxpZGF0ZVdoZW5EZXJpdmVkIiwiYXNzZXJ0aW9uIiwiYXNzaWduIiwiYWRkQXNzZXJ0aW9uIiwidHlwZVN0cmluZyIsIm5vbWluYWxUeXBlTmFtZSIsImdldE5vbWluYWxUeXBlTmFtZSIsImZpbmRUeXBlQnlOb21pbmFsVHlwZU5hbWUiLCJ2YWxpZGF0ZXNGb3J3YXJkcyIsInRlcm1UeXBlIiwidHlwZUVxdWFsVG9PclN1YlR5cGVPZlRlcm1UeXBlIiwiaXNFcXVhbFRvT3JTdWJUeXBlT2YiLCJ0ZXJtVHlwZVByb3Zpc2lvbmFsIiwiaXNQcm92aXNpb25hbCIsInR5cGVFcXVhbFRvT3JTdXBlclR5cGVPZlRlcm1UeXBlIiwiaXNFcXVhbFRvT3JTdXBlclR5cGVPZiIsInZhcmlhYmxlQXNzaWdtZW50IiwidmFyaWFibGVBc3NpZ25tZW50RnJvbVR5cGVBc3NlcnRpb24iLCJhc3NpZ25tZW50IiwiYWRkQXNzaWdubWVudCIsInRvSlNPTiIsIm5hbWUiLCJ0ZXJtSlNPTiIsInRlcm1Ub1Rlcm1KU09OIiwidHlwZUpTT04iLCJ0eXBlVG9UeXBlSlNPTiIsImpzb24iLCJmcm9tSlNPTiIsIkFzc2VydGlvbiJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBUUE7OztlQUFBOzs7Z0VBTnNCO3dCQUVDO3NCQUM2QjtvQkFDdkI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUU3QixXQUFlQSxJQUFBQSxnQkFBTSxrQ0FBQzs7YUFBTUMsY0FDZEMsT0FBTyxFQUFFQyxNQUFNLEVBQUVDLElBQUksRUFBRUMsSUFBSSxFQUFFQyxJQUFJO2dDQURuQkw7O2dCQUV4QixrQkFGd0JBO1lBRWxCQztZQUFTQztZQUFRQzs7UUFFdkIsTUFBS0MsSUFBSSxHQUFHQTtRQUNaLE1BQUtDLElBQUksR0FBR0E7Ozs7O1lBR2RDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0YsSUFBSTtZQUNsQjs7O1lBRUFHLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0YsSUFBSTtZQUNsQjs7O1lBRUFHLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNTCxPQUFPLElBQUksQ0FBQ00sT0FBTyxJQUNuQkMsb0JBQW9CUCxNQUFNLEdBQUc7Z0JBRW5DLE9BQU9PO1lBQ1Q7OztZQUVBQyxLQUFBQTttQkFBQUEsU0FBQUEsU0FBU0MsTUFBTSxFQUFFWCxPQUFPO2dCQUN0QixJQUFJWSxnQkFBZ0I7Z0JBRXBCLElBQU1DLHNCQUFzQixJQUFJLENBQUNDLFNBQVMsSUFBSyxHQUFHO2dCQUVsRGQsUUFBUWUsS0FBSyxDQUFDLEFB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