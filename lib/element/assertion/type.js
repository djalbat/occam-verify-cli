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
var _TypeAssertion;
var define = _occamfurtle.elements.define;
var _default = define((_TypeAssertion = /*#__PURE__*/ function(Assertion) {
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
            key: "verify",
            value: function verify(assignments, stated, context) {
                var verifies = false;
                var typeAssertionString = this.getString(); ///
                context.trace("Verifying the '".concat(typeAssertionString, "' type assertion..."));
                var typeVerifies = this.verifyType(context);
                if (typeVerifies) {
                    var verifiesWhenStated = false, verifiesWhenDerived = false;
                    if (stated) {
                        verifiesWhenStated = this.verifyWhenStated(assignments, context);
                    } else {
                        verifiesWhenDerived = this.verifyWhenDerived(context);
                    }
                    if (verifiesWhenStated || verifiesWhenDerived) {
                        verifies = true;
                    }
                }
                if (verifies) {
                    if (stated) {
                        this.assign(assignments, context);
                    }
                }
                if (verifies) {
                    context.debug("...verified the '".concat(typeAssertionString, "' type assertion."));
                }
                return verifies;
            }
        },
        {
            key: "verifyType",
            value: function verifyType(context) {
                var typeVerifies;
                var typeString = this.type.getString();
                context.trace("Verifying the '".concat(typeString, "' type..."));
                var nominalTypeName = this.type.getNominalTypeName(), type = context.findTypeByNominalTypeName(nominalTypeName);
                if (type !== null) {
                    this.type = type;
                    typeVerifies = true;
                } else {
                    context.debug("The '".concat(typeString, "' type is not present."));
                }
                if (typeVerifies) {
                    context.debug("...verified the '".concat(typeString, "' type."));
                }
                return typeVerifies;
            }
        },
        {
            key: "verifyWhenStated",
            value: function verifyWhenStated(assignments, context) {
                var _this = this;
                var verifiesWhenStated = false;
                var typeAssertionString = this.getString(); ///
                context.trace("Verifying the '".concat(typeAssertionString, "' stated type assertion..."));
                var termVerifies = this.term.verify(context, function() {
                    var verifiesAhead;
                    var termType = _this.term.getType(), typeEqualToOrSubTypeOfTermType = _this.type.isEqualToOrSubTypeOf(termType);
                    if (typeEqualToOrSubTypeOfTermType) {
                        verifiesAhead = true;
                    }
                    return verifiesAhead;
                });
                if (termVerifies) {
                    verifiesWhenStated = true;
                }
                if (verifiesWhenStated) {
                    context.debug("...verified the '".concat(typeAssertionString, "' stated type assertion."));
                }
                return verifiesWhenStated;
            }
        },
        {
            key: "verifyWhenDerived",
            value: function verifyWhenDerived(context) {
                var _this = this;
                var verifiesWhenDerived;
                var typeAssertionString = this.getString(); ///
                context.trace("Verifying the '".concat(typeAssertionString, "' derived type assertion..."));
                var termVerifies = this.term.verify(context, function() {
                    var verifiesAhead = false;
                    var termType = _this.term.getType(), termTypeProvisional = termType.isProvisional();
                    if (!termTypeProvisional) {
                        var typeEqualToOrSuperTypeOfTermType = _this.type.isEqualToOrSuperTypeOf(termType);
                        verifiesAhead = typeEqualToOrSuperTypeOfTermType; ///
                    }
                    return verifiesAhead;
                });
                verifiesWhenDerived = termVerifies; ///
                if (verifiesWhenDerived) {
                    context.debug("...verified the '".concat(typeAssertionString, "' derived type assertion."));
                }
                return verifiesWhenDerived;
            }
        },
        {
            key: "assign",
            value: function assign(assignments, context) {
                if (assignments === null) {
                    return;
                }
                var Type = _occamfurtle.elements.Type, Variable = _occamfurtle.elements.Variable, termNode = this.term.getNode();
                var type, provisional;
                provisional = this.type.isProvisional();
                if (!provisional) {
                    type = this.type;
                } else {
                    provisional = false;
                    type = Type.fromTypeAndProvisional(this.type, provisional);
                }
                var singularVariableNode = termNode.getSingularVariableNode();
                if (singularVariableNode !== null) {
                    var variableNode = singularVariableNode, variable = Variable.fromVariableNodeAndType(variableNode, type, context), variableAssignment = (0, _assign.variableAssignmentFromVariable)(variable), assignment = variableAssignment; ///
                    assignments.push(assignment);
                }
            }
        }
    ]);
    return TypeAssertion;
}(_assertion.default), _define_property(_TypeAssertion, "name", "TypeAssertion"), _TypeAssertion));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9lbGVtZW50L2Fzc2VydGlvbi90eXBlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBlbGVtZW50cyB9IGZyb20gXCJvY2NhbS1mdXJ0bGVcIjtcblxuaW1wb3J0IEFzc2VydGlvbiBmcm9tIFwiLi4vYXNzZXJ0aW9uXCI7XG5cbmltcG9ydCB7IHZhcmlhYmxlQXNzaWdubWVudEZyb21WYXJpYWJsZSB9IGZyb20gXCIuLi8uLi9wcm9jZXNzL2Fzc2lnblwiO1xuXG5jb25zdCB7IGRlZmluZSB9ID0gZWxlbWVudHM7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZShjbGFzcyBUeXBlQXNzZXJ0aW9uIGV4dGVuZHMgQXNzZXJ0aW9uIHtcbiAgY29uc3RydWN0b3IoY29udGV4dCwgc3RyaW5nLCBub2RlLCB0ZXJtLCB0eXBlKSB7XG4gICAgc3VwZXIoY29udGV4dCwgc3RyaW5nLCBub2RlKTtcblxuICAgIHRoaXMudGVybSA9IHRlcm07XG4gICAgdGhpcy50eXBlID0gdHlwZTtcbiAgfVxuXG4gIGdldFRlcm0oKSB7XG4gICAgcmV0dXJuIHRoaXMudGVybTtcbiAgfVxuXG4gIGdldFR5cGUoKSB7XG4gICAgcmV0dXJuIHRoaXMudHlwZTtcbiAgfVxuXG4gIHZlcmlmeShhc3NpZ25tZW50cywgc3RhdGVkLCBjb250ZXh0KSB7XG4gICAgbGV0IHZlcmlmaWVzID0gZmFsc2U7XG5cbiAgICBsZXQgdHlwZUFzc2VydGlvblN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7ICAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7dHlwZUFzc2VydGlvblN0cmluZ30nIHR5cGUgYXNzZXJ0aW9uLi4uYCk7XG5cbiAgICBjb25zdCB0eXBlVmVyaWZpZXMgPSB0aGlzLnZlcmlmeVR5cGUoY29udGV4dCk7XG5cbiAgICBpZiAodHlwZVZlcmlmaWVzKSB7XG4gICAgICBsZXQgdmVyaWZpZXNXaGVuU3RhdGVkID0gZmFsc2UsXG4gICAgICAgICAgdmVyaWZpZXNXaGVuRGVyaXZlZCA9IGZhbHNlO1xuXG4gICAgICBpZiAoc3RhdGVkKSB7XG4gICAgICAgIHZlcmlmaWVzV2hlblN0YXRlZCA9IHRoaXMudmVyaWZ5V2hlblN0YXRlZChhc3NpZ25tZW50cywgY29udGV4dCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2ZXJpZmllc1doZW5EZXJpdmVkID0gdGhpcy52ZXJpZnlXaGVuRGVyaXZlZChjb250ZXh0KTtcbiAgICAgIH1cblxuICAgICAgaWYgKHZlcmlmaWVzV2hlblN0YXRlZCB8fCB2ZXJpZmllc1doZW5EZXJpdmVkKSB7XG4gICAgICAgIHZlcmlmaWVzID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodmVyaWZpZXMpIHtcbiAgICAgIGlmIChzdGF0ZWQpIHtcbiAgICAgICAgdGhpcy5hc3NpZ24oYXNzaWdubWVudHMsIGNvbnRleHQpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh2ZXJpZmllcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke3R5cGVBc3NlcnRpb25TdHJpbmd9JyB0eXBlIGFzc2VydGlvbi5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmVyaWZpZXM7XG4gIH1cblxuICB2ZXJpZnlUeXBlKGNvbnRleHQpIHtcbiAgICBsZXQgdHlwZVZlcmlmaWVzO1xuXG4gICAgY29uc3QgdHlwZVN0cmluZyA9IHRoaXMudHlwZS5nZXRTdHJpbmcoKTtcblxuICAgIGNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7dHlwZVN0cmluZ30nIHR5cGUuLi5gKTtcblxuICAgIGNvbnN0IG5vbWluYWxUeXBlTmFtZSA9IHRoaXMudHlwZS5nZXROb21pbmFsVHlwZU5hbWUoKSxcbiAgICAgICAgICB0eXBlID0gY29udGV4dC5maW5kVHlwZUJ5Tm9taW5hbFR5cGVOYW1lKG5vbWluYWxUeXBlTmFtZSk7XG5cbiAgICBpZiAodHlwZSAhPT0gbnVsbCkge1xuICAgICAgdGhpcy50eXBlID0gdHlwZTtcblxuICAgICAgdHlwZVZlcmlmaWVzID0gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgVGhlICcke3R5cGVTdHJpbmd9JyB0eXBlIGlzIG5vdCBwcmVzZW50LmApO1xuICAgIH1cblxuICAgIGlmICh0eXBlVmVyaWZpZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHt0eXBlU3RyaW5nfScgdHlwZS5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdHlwZVZlcmlmaWVzO1xuICB9XG5cbiAgdmVyaWZ5V2hlblN0YXRlZChhc3NpZ25tZW50cywgY29udGV4dCkge1xuICAgIGxldCB2ZXJpZmllc1doZW5TdGF0ZWQgPSBmYWxzZTtcblxuICAgIGNvbnN0IHR5cGVBc3NlcnRpb25TdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7dHlwZUFzc2VydGlvblN0cmluZ30nIHN0YXRlZCB0eXBlIGFzc2VydGlvbi4uLmApO1xuXG4gICAgY29uc3QgdGVybVZlcmlmaWVzID0gdGhpcy50ZXJtLnZlcmlmeShjb250ZXh0LCAoKSA9PiB7XG4gICAgICBsZXQgdmVyaWZpZXNBaGVhZDtcblxuICAgICAgY29uc3QgdGVybVR5cGUgPSB0aGlzLnRlcm0uZ2V0VHlwZSgpLFxuICAgICAgICAgICAgdHlwZUVxdWFsVG9PclN1YlR5cGVPZlRlcm1UeXBlID0gdGhpcy50eXBlLmlzRXF1YWxUb09yU3ViVHlwZU9mKHRlcm1UeXBlKTtcblxuICAgICAgaWYgKHR5cGVFcXVhbFRvT3JTdWJUeXBlT2ZUZXJtVHlwZSkge1xuICAgICAgICB2ZXJpZmllc0FoZWFkID0gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHZlcmlmaWVzQWhlYWQ7XG4gICAgfSk7XG5cbiAgICBpZiAodGVybVZlcmlmaWVzKSB7XG4gICAgICB2ZXJpZmllc1doZW5TdGF0ZWQgPSB0cnVlO1xuICAgIH1cblxuICAgIGlmICh2ZXJpZmllc1doZW5TdGF0ZWQpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHt0eXBlQXNzZXJ0aW9uU3RyaW5nfScgc3RhdGVkIHR5cGUgYXNzZXJ0aW9uLmApO1xuICAgIH1cblxuICAgIHJldHVybiB2ZXJpZmllc1doZW5TdGF0ZWQ7XG4gIH1cblxuICB2ZXJpZnlXaGVuRGVyaXZlZChjb250ZXh0KSB7XG4gICAgbGV0IHZlcmlmaWVzV2hlbkRlcml2ZWQ7XG5cbiAgICBjb25zdCB0eXBlQXNzZXJ0aW9uU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke3R5cGVBc3NlcnRpb25TdHJpbmd9JyBkZXJpdmVkIHR5cGUgYXNzZXJ0aW9uLi4uYCk7XG5cbiAgICBjb25zdCB0ZXJtVmVyaWZpZXMgPSB0aGlzLnRlcm0udmVyaWZ5KGNvbnRleHQsICgpID0+IHtcbiAgICAgIGxldCB2ZXJpZmllc0FoZWFkID0gZmFsc2U7XG5cbiAgICAgIGNvbnN0IHRlcm1UeXBlID0gdGhpcy50ZXJtLmdldFR5cGUoKSxcbiAgICAgICAgICAgIHRlcm1UeXBlUHJvdmlzaW9uYWwgPSB0ZXJtVHlwZS5pc1Byb3Zpc2lvbmFsKCk7XG5cbiAgICAgIGlmICghdGVybVR5cGVQcm92aXNpb25hbCkge1xuICAgICAgICBjb25zdCB0eXBlRXF1YWxUb09yU3VwZXJUeXBlT2ZUZXJtVHlwZSA9IHRoaXMudHlwZS5pc0VxdWFsVG9PclN1cGVyVHlwZU9mKHRlcm1UeXBlKTtcblxuICAgICAgICB2ZXJpZmllc0FoZWFkID0gdHlwZUVxdWFsVG9PclN1cGVyVHlwZU9mVGVybVR5cGU7IC8vL1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdmVyaWZpZXNBaGVhZDtcbiAgICB9KTtcblxuICAgIHZlcmlmaWVzV2hlbkRlcml2ZWQgPSB0ZXJtVmVyaWZpZXM7IC8vL1xuXG4gICAgaWYgKHZlcmlmaWVzV2hlbkRlcml2ZWQpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHt0eXBlQXNzZXJ0aW9uU3RyaW5nfScgZGVyaXZlZCB0eXBlIGFzc2VydGlvbi5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmVyaWZpZXNXaGVuRGVyaXZlZDtcbiAgfVxuXG4gIGFzc2lnbihhc3NpZ25tZW50cywgY29udGV4dCkge1xuICAgIGlmIChhc3NpZ25tZW50cyA9PT0gbnVsbCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IHsgVHlwZSwgVmFyaWFibGUgfSA9IGVsZW1lbnRzLFxuICAgICAgICAgIHRlcm1Ob2RlID0gdGhpcy50ZXJtLmdldE5vZGUoKTtcblxuICAgIGxldCB0eXBlLFxuICAgICAgICBwcm92aXNpb25hbDtcblxuICAgIHByb3Zpc2lvbmFsID0gdGhpcy50eXBlLmlzUHJvdmlzaW9uYWwoKTtcblxuICAgIGlmICghcHJvdmlzaW9uYWwpIHtcbiAgICAgIHR5cGUgPSB0aGlzLnR5cGU7XG4gICAgfSBlbHNlIHtcbiAgICAgIHByb3Zpc2lvbmFsID0gZmFsc2U7XG5cbiAgICAgIHR5cGUgPSBUeXBlLmZyb21UeXBlQW5kUHJvdmlzaW9uYWwodGhpcy50eXBlLCBwcm92aXNpb25hbCk7XG4gICAgfVxuXG4gICAgY29uc3Qgc2luZ3VsYXJWYXJpYWJsZU5vZGUgPSB0ZXJtTm9kZS5nZXRTaW5ndWxhclZhcmlhYmxlTm9kZSgpO1xuXG4gICAgaWYgKHNpbmd1bGFyVmFyaWFibGVOb2RlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCB2YXJpYWJsZU5vZGUgPSBzaW5ndWxhclZhcmlhYmxlTm9kZSwgIC8vL1xuICAgICAgICAgICAgdmFyaWFibGUgPSBWYXJpYWJsZS5mcm9tVmFyaWFibGVOb2RlQW5kVHlwZSh2YXJpYWJsZU5vZGUsIHR5cGUsIGNvbnRleHQpLFxuICAgICAgICAgICAgdmFyaWFibGVBc3NpZ25tZW50ID0gdmFyaWFibGVBc3NpZ25tZW50RnJvbVZhcmlhYmxlKHZhcmlhYmxlKSxcbiAgICAgICAgICAgIGFzc2lnbm1lbnQgPSB2YXJpYWJsZUFzc2lnbm1lbnQ7ICAvLy9cblxuICAgICAgYXNzaWdubWVudHMucHVzaChhc3NpZ25tZW50KTtcbiAgICB9XG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiVHlwZUFzc2VydGlvblwiO1xufSk7XG4iXSwibmFtZXMiOlsiZGVmaW5lIiwiZWxlbWVudHMiLCJUeXBlQXNzZXJ0aW9uIiwiY29udGV4dCIsInN0cmluZyIsIm5vZGUiLCJ0ZXJtIiwidHlwZSIsImdldFRlcm0iLCJnZXRUeXBlIiwidmVyaWZ5IiwiYXNzaWdubWVudHMiLCJzdGF0ZWQiLCJ2ZXJpZmllcyIsInR5cGVBc3NlcnRpb25TdHJpbmciLCJnZXRTdHJpbmciLCJ0cmFjZSIsInR5cGVWZXJpZmllcyIsInZlcmlmeVR5cGUiLCJ2ZXJpZmllc1doZW5TdGF0ZWQiLCJ2ZXJpZmllc1doZW5EZXJpdmVkIiwidmVyaWZ5V2hlblN0YXRlZCIsInZlcmlmeVdoZW5EZXJpdmVkIiwiYXNzaWduIiwiZGVidWciLCJ0eXBlU3RyaW5nIiwibm9taW5hbFR5cGVOYW1lIiwiZ2V0Tm9taW5hbFR5cGVOYW1lIiwiZmluZFR5cGVCeU5vbWluYWxUeXBlTmFtZSIsInRlcm1WZXJpZmllcyIsInZlcmlmaWVzQWhlYWQiLCJ0ZXJtVHlwZSIsInR5cGVFcXVhbFRvT3JTdWJUeXBlT2ZUZXJtVHlwZSIsImlzRXF1YWxUb09yU3ViVHlwZU9mIiwidGVybVR5cGVQcm92aXNpb25hbCIsImlzUHJvdmlzaW9uYWwiLCJ0eXBlRXF1YWxUb09yU3VwZXJUeXBlT2ZUZXJtVHlwZSIsImlzRXF1YWxUb09yU3VwZXJUeXBlT2YiLCJUeXBlIiwiVmFyaWFibGUiLCJ0ZXJtTm9kZSIsImdldE5vZGUiLCJwcm92aXNpb25hbCIsImZyb21UeXBlQW5kUHJvdmlzaW9uYWwiLCJzaW5ndWxhclZhcmlhYmxlTm9kZSIsImdldFNpbmd1bGFyVmFyaWFibGVOb2RlIiwidmFyaWFibGVOb2RlIiwidmFyaWFibGUiLCJmcm9tVmFyaWFibGVOb2RlQW5kVHlwZSIsInZhcmlhYmxlQXNzaWdubWVudCIsInZhcmlhYmxlQXNzaWdubWVudEZyb21WYXJpYWJsZSIsImFzc2lnbm1lbnQiLCJwdXNoIiwiQXNzZXJ0aW9uIiwibmFtZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBVUE7OztlQUFBOzs7MkJBUnlCO2dFQUVIO3NCQUV5Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRS9DLElBQU0sQUFBRUEsU0FBV0MscUJBQVEsQ0FBbkJEO0lBRVIsV0FBZUEsdUNBQU87O2FBQU1FLGNBQ2RDLE9BQU8sRUFBRUMsTUFBTSxFQUFFQyxJQUFJLEVBQUVDLElBQUksRUFBRUMsSUFBSTtnQ0FEbkJMOztnQkFFeEIsa0JBRndCQTtZQUVsQkM7WUFBU0M7WUFBUUM7O1FBRXZCLE1BQUtDLElBQUksR0FBR0E7UUFDWixNQUFLQyxJQUFJLEdBQUdBOzs7OztZQUdkQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNGLElBQUk7WUFDbEI7OztZQUVBRyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNGLElBQUk7WUFDbEI7OztZQUVBRyxLQUFBQTttQkFBQUEsU0FBQUEsT0FBT0MsV0FBVyxFQUFFQyxNQUFNLEVBQUVULE9BQU87Z0JBQ2pDLElBQUlVLFdBQVc7Z0JBRWYsSUFBSUMsc0JBQXNCLElBQUksQ0FBQ0MsU0FBUyxJQUFLLEdBQUc7Z0JBRWhEWixRQUFRYSxLQUFLLENBQUMsQUFBQyxrQkFBcUMsT0FBcEJGLHFCQUFvQjtnQkFFcEQsSUFBTUcsZUFBZSxJQUFJLENBQUNDLFVBQVUsQ0FBQ2Y7Z0JBRXJDLElBQUljLGNBQWM7b0JBQ2hCLElBQUlFLHFCQUFxQixPQUNyQkMsc0JB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