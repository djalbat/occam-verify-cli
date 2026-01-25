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
var _equate = require("../process/equate");
var _assign = require("../process/assign");
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
function _construct(Parent, args, Class) {
    if (_is_native_reflect_construct()) {
        _construct = Reflect.construct;
    } else {
        _construct = function construct(Parent, args, Class) {
            var a = [
                null
            ];
            a.push.apply(a, args);
            var Constructor = Function.bind.apply(Parent, a);
            var instance = new Constructor();
            if (Class) _set_prototype_of(instance, Class.prototype);
            return instance;
        };
    }
    return _construct.apply(null, arguments);
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
function _is_native_function(fn) {
    return Function.toString.call(fn).indexOf("[native code]") !== -1;
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
function _wrap_native_super(Class) {
    var _cache = typeof Map === "function" ? new Map() : undefined;
    _wrap_native_super = function wrapNativeSuper(Class) {
        if (Class === null || !_is_native_function(Class)) return Class;
        if (typeof Class !== "function") {
            throw new TypeError("Super expression must either be null or a function");
        }
        if (typeof _cache !== "undefined") {
            if (_cache.has(Class)) return _cache.get(Class);
            _cache.set(Class, Wrapper);
        }
        function Wrapper() {
            return _construct(Class, arguments, _get_prototype_of(this).constructor);
        }
        Wrapper.prototype = Object.create(Class.prototype, {
            constructor: {
                value: Wrapper,
                enumerable: false,
                writable: true,
                configurable: true
            }
        });
        return _set_prototype_of(Wrapper, Class);
    };
    return _wrap_native_super(Class);
}
function _is_native_reflect_construct() {
    try {
        var result = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
    } catch (_) {}
    return (_is_native_reflect_construct = function() {
        return !!result;
    })();
}
var _Equality;
var define = _occamfurtle.elements.define;
var _default = define((_Equality = /*#__PURE__*/ function(Element) {
    _inherits(Equality, Element);
    function Equality(context, string, node, leftTerm, rightTerm) {
        _class_call_check(this, Equality);
        var _this;
        _this = _call_super(this, Equality, [
            context,
            string,
            node
        ]);
        _this.leftTerm = leftTerm;
        _this.rightTerm = rightTerm;
        return _this;
    }
    _create_class(Equality, [
        {
            key: "getLeftTerm",
            value: function getLeftTerm() {
                return this.leftTerm;
            }
        },
        {
            key: "getRightTerm",
            value: function getRightTerm() {
                return this.rightTerm;
            }
        },
        {
            key: "getType",
            value: function getType() {
                var type;
                var leftTermType = this.leftTerm.getType(), rightTermType = this.rightTerm.getType(), leftTermTypeEqualToOrSubTypeOfRightTermType = leftTermType.isEqualToOrSubTypeOf(rightTermType), rightTermTypeEqualToOrSubTypeOfLeftTermType = rightTermType.isEqualToOrSubTypeOf(leftTermType);
                if (leftTermTypeEqualToOrSubTypeOfRightTermType) {
                    type = leftTermType; ///
                }
                if (rightTermTypeEqualToOrSubTypeOfLeftTermType) {
                    type = rightTermType; ///
                }
                return type;
            }
        },
        {
            key: "getTerms",
            value: function getTerms() {
                var terms = [
                    this.leftTerm,
                    this.rightTerm
                ];
                return terms;
            }
        },
        {
            key: "isReflexive",
            value: function isReflexive() {
                var leftTermString = this.leftTerm.getString(), rightTermString = this.rightTerm.getString(), reflexive = leftTermString === rightTermString;
                return reflexive;
            }
        },
        {
            key: "isEqual",
            value: function isEqual(context) {
                var equal = false;
                var leftTermNode = this.leftTerm.getNode(), rightTermNode = this.rightTerm.getNode(), termsEquate = (0, _equate.equateTerms)(leftTermNode, rightTermNode, context);
                if (termsEquate) {
                    equal = true;
                }
                return equal;
            }
        },
        {
            key: "verify",
            value: function verify(assignments, stated, context) {
                var verifies = false;
                var equalityString = this.getString(); ///
                context.trace("Verifying the '".concat(equalityString, "' equality..."));
                var termsVerify = this.verifyTerms(context);
                if (termsVerify) {
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
                    this.assign(assignments, context);
                }
                if (verifies) {
                    context.debug("...verified the '".concat(equalityString, "' equality."));
                }
                return verifies;
            }
        },
        {
            key: "verifyTerms",
            value: function verifyTerms(context) {
                var _this = this;
                var termsVerify;
                var equalityString = this.getString(); ///
                context.trace("Verifying the '".concat(equalityString, "' equality's terms..."));
                var leftTermVerifies = this.leftTerm.verify(context, function() {
                    var verifiesAhead;
                    var rightTermVerifies = _this.rightTerm.verify(context, function() {
                        var verifiesAhead;
                        var leftTermType = _this.leftTerm.getType(), rightTermType = _this.rightTerm.getType(), leftTermTypeComparableToRightTermType = leftTermType.isComparableTo(rightTermType);
                        verifiesAhead = leftTermTypeComparableToRightTermType; ///
                        return verifiesAhead;
                    });
                    verifiesAhead = rightTermVerifies; ///
                    return verifiesAhead;
                });
                termsVerify = leftTermVerifies; ///
                if (termsVerify) {
                    context.debug("...verified the '".concat(equalityString, "' equality's terms."));
                }
                return termsVerify;
            }
        },
        {
            key: "verifyWhenStated",
            value: function verifyWhenStated(assignments, context) {
                var verifiesWhenStated;
                var equalityString = this.getString(); ///
                context.trace("Verifying the '".concat(equalityString, "' stated equality..."));
                verifiesWhenStated = true;
                if (verifiesWhenStated) {
                    context.debug("...verified the '".concat(equalityString, "' stated equality."));
                }
                return verifiesWhenStated;
            }
        },
        {
            key: "verifyWhenDerived",
            value: function verifyWhenDerived(context) {
                var verifiesWhenDerived;
                var equalityString = this.getString(); ///
                context.trace("Verifying the '".concat(equalityString, "' derived equality..."));
                verifiesWhenDerived = true; ///
                if (verifiesWhenDerived) {
                    context.debug("...verified the '".concat(equalityString, "' derived equality."));
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
                var Variable = _occamfurtle.elements.Variable, type = this.getType(), leftTermNode = this.leftTerm.getNode(), rightTermNode = this.rightTerm.getNode(), leftTermNodeSingularVariableNode = leftTermNode.getSingularVariableNode(), rightTermNodeSingularVariableNode = rightTermNode.getSingularVariableNode(), leftVariableNode = leftTermNodeSingularVariableNode, rightVariableNode = rightTermNodeSingularVariableNode; ///
                var assignment;
                if (leftVariableNode !== null) {
                    var leftVariable = Variable.fromVariableNodeAndType(leftVariableNode, type, context), leftVariableAssignment = (0, _assign.variableAssignmentFromVariable)(leftVariable);
                    assignment = leftVariableAssignment; ///
                    assignments.push(assignment);
                }
                if (rightVariableNode !== null) {
                    var rightVariable = Variable.fromVariableNodeAndType(rightVariableNode, type, context), rightVariableAssignment = (0, _assign.variableAssignmentFromVariable)(rightVariable);
                    assignment = rightVariableAssignment; ///
                    assignments.push(assignment);
                }
                var equality = this, equalityAssignment = (0, _assign.equalityAssignmentFromEquality)(equality);
                assignment = equalityAssignment; ///
                assignments.push(assignment);
            }
        }
    ]);
    return Equality;
}(_wrap_native_super(_occamfurtle.Element)), _define_property(_Equality, "name", "Equality"), _Equality));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L2VxdWFsaXR5LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBFbGVtZW50LCBlbGVtZW50cyB9IGZyb20gXCJvY2NhbS1mdXJ0bGVcIjtcblxuaW1wb3J0IHsgZXF1YXRlVGVybXMgfSBmcm9tIFwiLi4vcHJvY2Vzcy9lcXVhdGVcIjtcbmltcG9ydCB7IGVxdWFsaXR5QXNzaWdubWVudEZyb21FcXVhbGl0eSwgdmFyaWFibGVBc3NpZ25tZW50RnJvbVZhcmlhYmxlIH0gZnJvbSBcIi4uL3Byb2Nlc3MvYXNzaWduXCI7XG5cbmNvbnN0IHsgZGVmaW5lIH0gPSBlbGVtZW50cztcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lKGNsYXNzIEVxdWFsaXR5IGV4dGVuZHMgRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKGNvbnRleHQsIHN0cmluZywgbm9kZSwgbGVmdFRlcm0sIHJpZ2h0VGVybSkge1xuICAgIHN1cGVyKGNvbnRleHQsIHN0cmluZywgbm9kZSk7XG5cbiAgICB0aGlzLmxlZnRUZXJtID0gbGVmdFRlcm07XG4gICAgdGhpcy5yaWdodFRlcm0gPSByaWdodFRlcm07XG4gIH1cblxuICBnZXRMZWZ0VGVybSgpIHtcbiAgICByZXR1cm4gdGhpcy5sZWZ0VGVybTtcbiAgfVxuXG4gIGdldFJpZ2h0VGVybSgpIHtcbiAgICByZXR1cm4gdGhpcy5yaWdodFRlcm07XG4gIH1cblxuICBnZXRUeXBlKCkge1xuICAgIGxldCB0eXBlO1xuXG4gICAgY29uc3QgbGVmdFRlcm1UeXBlID0gdGhpcy5sZWZ0VGVybS5nZXRUeXBlKCksXG4gICAgICAgICAgcmlnaHRUZXJtVHlwZSA9IHRoaXMucmlnaHRUZXJtLmdldFR5cGUoKSxcbiAgICAgICAgICBsZWZ0VGVybVR5cGVFcXVhbFRvT3JTdWJUeXBlT2ZSaWdodFRlcm1UeXBlID0gbGVmdFRlcm1UeXBlLmlzRXF1YWxUb09yU3ViVHlwZU9mKHJpZ2h0VGVybVR5cGUpLFxuICAgICAgICAgIHJpZ2h0VGVybVR5cGVFcXVhbFRvT3JTdWJUeXBlT2ZMZWZ0VGVybVR5cGUgPSByaWdodFRlcm1UeXBlLmlzRXF1YWxUb09yU3ViVHlwZU9mKGxlZnRUZXJtVHlwZSk7XG5cbiAgICBpZiAobGVmdFRlcm1UeXBlRXF1YWxUb09yU3ViVHlwZU9mUmlnaHRUZXJtVHlwZSkge1xuICAgICAgdHlwZSA9IGxlZnRUZXJtVHlwZTsgIC8vL1xuICAgIH1cblxuICAgIGlmIChyaWdodFRlcm1UeXBlRXF1YWxUb09yU3ViVHlwZU9mTGVmdFRlcm1UeXBlKSB7XG4gICAgICB0eXBlID0gcmlnaHRUZXJtVHlwZTsgLy8vXG4gICAgfVxuXG4gICAgcmV0dXJuIHR5cGU7XG4gIH1cblxuICBnZXRUZXJtcygpIHtcbiAgICBjb25zdCB0ZXJtcyA9IFtcbiAgICAgIHRoaXMubGVmdFRlcm0sXG4gICAgICB0aGlzLnJpZ2h0VGVybVxuICAgIF07XG5cbiAgICByZXR1cm4gdGVybXM7XG4gIH1cblxuICBpc1JlZmxleGl2ZSgpIHtcbiAgICBjb25zdCBsZWZ0VGVybVN0cmluZyA9IHRoaXMubGVmdFRlcm0uZ2V0U3RyaW5nKCksXG4gICAgICAgICAgcmlnaHRUZXJtU3RyaW5nID0gdGhpcy5yaWdodFRlcm0uZ2V0U3RyaW5nKCksXG4gICAgICAgICAgcmVmbGV4aXZlID0gKGxlZnRUZXJtU3RyaW5nID09PSByaWdodFRlcm1TdHJpbmcpO1xuXG4gICAgcmV0dXJuIHJlZmxleGl2ZTtcbiAgfVxuXG4gIGlzRXF1YWwoY29udGV4dCkge1xuICAgIGxldCBlcXVhbCA9IGZhbHNlO1xuXG4gICAgY29uc3QgbGVmdFRlcm1Ob2RlID0gdGhpcy5sZWZ0VGVybS5nZXROb2RlKCksXG4gICAgICAgICAgcmlnaHRUZXJtTm9kZSA9IHRoaXMucmlnaHRUZXJtLmdldE5vZGUoKSxcbiAgICAgICAgICB0ZXJtc0VxdWF0ZSA9IGVxdWF0ZVRlcm1zKGxlZnRUZXJtTm9kZSwgcmlnaHRUZXJtTm9kZSwgY29udGV4dCk7XG5cbiAgICBpZiAodGVybXNFcXVhdGUpIHtcbiAgICAgIGVxdWFsID0gdHJ1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gZXF1YWw7XG4gIH1cblxuICB2ZXJpZnkoYXNzaWdubWVudHMsIHN0YXRlZCwgY29udGV4dCkge1xuICAgIGxldCB2ZXJpZmllcyA9IGZhbHNlO1xuXG4gICAgY29uc3QgZXF1YWxpdHlTdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7ZXF1YWxpdHlTdHJpbmd9JyBlcXVhbGl0eS4uLmApO1xuXG4gICAgY29uc3QgdGVybXNWZXJpZnkgPSB0aGlzLnZlcmlmeVRlcm1zKGNvbnRleHQpO1xuXG4gICAgaWYgKHRlcm1zVmVyaWZ5KSB7XG4gICAgICBsZXQgdmVyaWZpZXNXaGVuU3RhdGVkID0gZmFsc2UsXG4gICAgICAgICAgdmVyaWZpZXNXaGVuRGVyaXZlZCA9IGZhbHNlO1xuXG4gICAgICBpZiAoc3RhdGVkKSB7XG4gICAgICAgIHZlcmlmaWVzV2hlblN0YXRlZCA9IHRoaXMudmVyaWZ5V2hlblN0YXRlZChhc3NpZ25tZW50cywgY29udGV4dCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2ZXJpZmllc1doZW5EZXJpdmVkID0gdGhpcy52ZXJpZnlXaGVuRGVyaXZlZChjb250ZXh0KTtcbiAgICAgIH1cblxuICAgICAgaWYgKHZlcmlmaWVzV2hlblN0YXRlZCB8fCB2ZXJpZmllc1doZW5EZXJpdmVkKSB7XG4gICAgICAgIHZlcmlmaWVzID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodmVyaWZpZXMpIHtcblxuICAgICAgICB0aGlzLmFzc2lnbihhc3NpZ25tZW50cywgY29udGV4dCk7XG5cbiAgICB9XG5cbiAgICBpZiAodmVyaWZpZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHtlcXVhbGl0eVN0cmluZ30nIGVxdWFsaXR5LmApO1xuICAgIH1cblxuICAgIHJldHVybiB2ZXJpZmllcztcbiAgfVxuXG4gIHZlcmlmeVRlcm1zKGNvbnRleHQpIHtcbiAgICBsZXQgdGVybXNWZXJpZnk7XG5cbiAgICBjb25zdCBlcXVhbGl0eVN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7IC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtlcXVhbGl0eVN0cmluZ30nIGVxdWFsaXR5J3MgdGVybXMuLi5gKTtcblxuICAgIGNvbnN0IGxlZnRUZXJtVmVyaWZpZXMgPSB0aGlzLmxlZnRUZXJtLnZlcmlmeShjb250ZXh0LCAoKSA9PiB7XG4gICAgICBsZXQgdmVyaWZpZXNBaGVhZDtcblxuICAgICAgY29uc3QgcmlnaHRUZXJtVmVyaWZpZXMgPSB0aGlzLnJpZ2h0VGVybS52ZXJpZnkoY29udGV4dCwgKCkgPT4ge1xuICAgICAgICBsZXQgdmVyaWZpZXNBaGVhZDtcblxuICAgICAgICBjb25zdCBsZWZ0VGVybVR5cGUgPSB0aGlzLmxlZnRUZXJtLmdldFR5cGUoKSxcbiAgICAgICAgICAgICAgcmlnaHRUZXJtVHlwZSA9IHRoaXMucmlnaHRUZXJtLmdldFR5cGUoKSxcbiAgICAgICAgICAgICAgbGVmdFRlcm1UeXBlQ29tcGFyYWJsZVRvUmlnaHRUZXJtVHlwZSA9IGxlZnRUZXJtVHlwZS5pc0NvbXBhcmFibGVUbyhyaWdodFRlcm1UeXBlKTtcblxuICAgICAgICB2ZXJpZmllc0FoZWFkID0gbGVmdFRlcm1UeXBlQ29tcGFyYWJsZVRvUmlnaHRUZXJtVHlwZTsgIC8vL1xuXG4gICAgICAgIHJldHVybiB2ZXJpZmllc0FoZWFkO1xuICAgICAgfSk7XG5cbiAgICAgIHZlcmlmaWVzQWhlYWQgPSByaWdodFRlcm1WZXJpZmllczsgLy8vXG5cbiAgICAgIHJldHVybiB2ZXJpZmllc0FoZWFkO1xuICAgIH0pO1xuXG4gICAgdGVybXNWZXJpZnkgPSBsZWZ0VGVybVZlcmlmaWVzOyAvLy9cblxuICAgIGlmICh0ZXJtc1ZlcmlmeSkge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke2VxdWFsaXR5U3RyaW5nfScgZXF1YWxpdHkncyB0ZXJtcy5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGVybXNWZXJpZnk7XG4gIH1cblxuICB2ZXJpZnlXaGVuU3RhdGVkKGFzc2lnbm1lbnRzLCBjb250ZXh0KSB7XG4gICAgbGV0IHZlcmlmaWVzV2hlblN0YXRlZDtcblxuICAgIGNvbnN0IGVxdWFsaXR5U3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke2VxdWFsaXR5U3RyaW5nfScgc3RhdGVkIGVxdWFsaXR5Li4uYCk7XG5cbiAgICB2ZXJpZmllc1doZW5TdGF0ZWQgPSB0cnVlO1xuXG4gICAgaWYgKHZlcmlmaWVzV2hlblN0YXRlZCkge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke2VxdWFsaXR5U3RyaW5nfScgc3RhdGVkIGVxdWFsaXR5LmApO1xuICAgIH1cblxuICAgIHJldHVybiB2ZXJpZmllc1doZW5TdGF0ZWQ7XG4gIH1cblxuICB2ZXJpZnlXaGVuRGVyaXZlZChjb250ZXh0KSB7XG4gICAgbGV0IHZlcmlmaWVzV2hlbkRlcml2ZWQ7XG5cbiAgICBjb25zdCBlcXVhbGl0eVN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7IC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtlcXVhbGl0eVN0cmluZ30nIGRlcml2ZWQgZXF1YWxpdHkuLi5gKTtcblxuICAgIHZlcmlmaWVzV2hlbkRlcml2ZWQgPSB0cnVlOyAgLy8vXG5cbiAgICBpZiAodmVyaWZpZXNXaGVuRGVyaXZlZCkge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke2VxdWFsaXR5U3RyaW5nfScgZGVyaXZlZCBlcXVhbGl0eS5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmVyaWZpZXNXaGVuRGVyaXZlZDtcbiAgfVxuXG4gIGFzc2lnbihhc3NpZ25tZW50cywgY29udGV4dCkge1xuICAgIGlmIChhc3NpZ25tZW50cyA9PT0gbnVsbCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IHsgVmFyaWFibGUgfSA9IGVsZW1lbnRzLFxuICAgICAgICAgIHR5cGUgPSB0aGlzLmdldFR5cGUoKSxcbiAgICAgICAgICBsZWZ0VGVybU5vZGUgPSB0aGlzLmxlZnRUZXJtLmdldE5vZGUoKSxcbiAgICAgICAgICByaWdodFRlcm1Ob2RlID0gdGhpcy5yaWdodFRlcm0uZ2V0Tm9kZSgpLFxuICAgICAgICAgIGxlZnRUZXJtTm9kZVNpbmd1bGFyVmFyaWFibGVOb2RlID0gbGVmdFRlcm1Ob2RlLmdldFNpbmd1bGFyVmFyaWFibGVOb2RlKCksXG4gICAgICAgICAgcmlnaHRUZXJtTm9kZVNpbmd1bGFyVmFyaWFibGVOb2RlID0gcmlnaHRUZXJtTm9kZS5nZXRTaW5ndWxhclZhcmlhYmxlTm9kZSgpLFxuICAgICAgICAgIGxlZnRWYXJpYWJsZU5vZGUgPSBsZWZ0VGVybU5vZGVTaW5ndWxhclZhcmlhYmxlTm9kZSwgIC8vL1xuICAgICAgICAgIHJpZ2h0VmFyaWFibGVOb2RlID0gcmlnaHRUZXJtTm9kZVNpbmd1bGFyVmFyaWFibGVOb2RlOyAgLy8vXG5cbiAgICBsZXQgYXNzaWdubWVudDtcblxuICAgIGlmIChsZWZ0VmFyaWFibGVOb2RlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBsZWZ0VmFyaWFibGUgPSBWYXJpYWJsZS5mcm9tVmFyaWFibGVOb2RlQW5kVHlwZShsZWZ0VmFyaWFibGVOb2RlLCB0eXBlLCBjb250ZXh0KSxcbiAgICAgICAgICAgIGxlZnRWYXJpYWJsZUFzc2lnbm1lbnQgPSB2YXJpYWJsZUFzc2lnbm1lbnRGcm9tVmFyaWFibGUobGVmdFZhcmlhYmxlKTtcblxuICAgICAgYXNzaWdubWVudCA9IGxlZnRWYXJpYWJsZUFzc2lnbm1lbnQ7ICAvLy9cblxuICAgICAgYXNzaWdubWVudHMucHVzaChhc3NpZ25tZW50KTtcbiAgICB9XG5cbiAgICBpZiAocmlnaHRWYXJpYWJsZU5vZGUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHJpZ2h0VmFyaWFibGUgPSBWYXJpYWJsZS5mcm9tVmFyaWFibGVOb2RlQW5kVHlwZShyaWdodFZhcmlhYmxlTm9kZSwgdHlwZSwgY29udGV4dCksXG4gICAgICAgICAgICByaWdodFZhcmlhYmxlQXNzaWdubWVudCA9IHZhcmlhYmxlQXNzaWdubWVudEZyb21WYXJpYWJsZShyaWdodFZhcmlhYmxlKTtcblxuICAgICAgYXNzaWdubWVudCA9IHJpZ2h0VmFyaWFibGVBc3NpZ25tZW50OyAgLy8vXG5cbiAgICAgIGFzc2lnbm1lbnRzLnB1c2goYXNzaWdubWVudCk7XG4gICAgfVxuXG4gICAgY29uc3QgZXF1YWxpdHkgPSB0aGlzLCAgLy9cbiAgICAgICAgICBlcXVhbGl0eUFzc2lnbm1lbnQgPSBlcXVhbGl0eUFzc2lnbm1lbnRGcm9tRXF1YWxpdHkoZXF1YWxpdHkpO1xuXG4gICAgYXNzaWdubWVudCA9IGVxdWFsaXR5QXNzaWdubWVudDsgLy8vXG5cbiAgICBhc3NpZ25tZW50cy5wdXNoKGFzc2lnbm1lbnQpO1xuICB9XG5cbiAgc3RhdGljIG5hbWUgPSBcIkVxdWFsaXR5XCI7XG59KTtcbiJdLCJuYW1lcyI6WyJkZWZpbmUiLCJlbGVtZW50cyIsIkVxdWFsaXR5IiwiY29udGV4dCIsInN0cmluZyIsIm5vZGUiLCJsZWZ0VGVybSIsInJpZ2h0VGVybSIsImdldExlZnRUZXJtIiwiZ2V0UmlnaHRUZXJtIiwiZ2V0VHlwZSIsInR5cGUiLCJsZWZ0VGVybVR5cGUiLCJyaWdodFRlcm1UeXBlIiwibGVmdFRlcm1UeXBlRXF1YWxUb09yU3ViVHlwZU9mUmlnaHRUZXJtVHlwZSIsImlzRXF1YWxUb09yU3ViVHlwZU9mIiwicmlnaHRUZXJtVHlwZUVxdWFsVG9PclN1YlR5cGVPZkxlZnRUZXJtVHlwZSIsImdldFRlcm1zIiwidGVybXMiLCJpc1JlZmxleGl2ZSIsImxlZnRUZXJtU3RyaW5nIiwiZ2V0U3RyaW5nIiwicmlnaHRUZXJtU3RyaW5nIiwicmVmbGV4aXZlIiwiaXNFcXVhbCIsImVxdWFsIiwibGVmdFRlcm1Ob2RlIiwiZ2V0Tm9kZSIsInJpZ2h0VGVybU5vZGUiLCJ0ZXJtc0VxdWF0ZSIsImVxdWF0ZVRlcm1zIiwidmVyaWZ5IiwiYXNzaWdubWVudHMiLCJzdGF0ZWQiLCJ2ZXJpZmllcyIsImVxdWFsaXR5U3RyaW5nIiwidHJhY2UiLCJ0ZXJtc1ZlcmlmeSIsInZlcmlmeVRlcm1zIiwidmVyaWZpZXNXaGVuU3RhdGVkIiwidmVyaWZpZXNXaGVuRGVyaXZlZCIsInZlcmlmeVdoZW5TdGF0ZWQiLCJ2ZXJpZnlXaGVuRGVyaXZlZCIsImFzc2lnbiIsImRlYnVnIiwibGVmdFRlcm1WZXJpZmllcyIsInZlcmlmaWVzQWhlYWQiLCJyaWdodFRlcm1WZXJpZmllcyIsImxlZnRUZXJtVHlwZUNvbXBhcmFibGVUb1JpZ2h0VGVybVR5cGUiLCJpc0NvbXBhcmFibGVUbyIsIlZhcmlhYmxlIiwibGVmdFRlcm1Ob2RlU2luZ3VsYXJWYXJpYWJsZU5vZGUiLCJnZXRTaW5ndWxhclZhcmlhYmxlTm9kZSIsInJpZ2h0VGVybU5vZGVTaW5ndWxhclZhcmlhYmxlTm9kZSIsImxlZnRWYXJpYWJsZU5vZGUiLCJyaWdodFZhcmlhYmxlTm9kZSIsImFzc2lnbm1lbnQiLCJsZWZ0VmFyaWFibGUiLCJmcm9tVmFyaWFibGVOb2RlQW5kVHlwZSIsImxlZnRWYXJpYWJsZUFzc2lnbm1lbnQiLCJ2YXJpYWJsZUFzc2lnbm1lbnRGcm9tVmFyaWFibGUiLCJwdXNoIiwicmlnaHRWYXJpYWJsZSIsInJpZ2h0VmFyaWFibGVBc3NpZ25tZW50IiwiZXF1YWxpdHkiLCJlcXVhbGl0eUFzc2lnbm1lbnQiLCJlcXVhbGl0eUFzc2lnbm1lbnRGcm9tRXF1YWxpdHkiLCJFbGVtZW50IiwibmFtZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBU0E7OztlQUFBOzs7MkJBUGtDO3NCQUVOO3NC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