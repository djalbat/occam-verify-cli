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
var _occamlanguages = require("occam-languages");
var _elements = require("../elements");
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
var _default = (0, _elements.define)((_Equality = /*#__PURE__*/ function(Element) {
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
            key: "getEqualityNode",
            value: function getEqualityNode() {
                var node = this.getNode(), equalityNde = node; ///
                return equalityNde;
            }
        },
        {
            key: "getLeftTermNode",
            value: function getLeftTermNode() {
                var leftTermNode = this.leftTerm.getNode();
                return leftTermNode;
            }
        },
        {
            key: "getRightTermNode",
            value: function getRightTermNode() {
                var rightTermNode = this.rightTerm.getNode();
                return rightTermNode;
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
            key: "matchEqualityNode",
            value: function matchEqualityNode(equalityNode) {
                var equalityNodeA = equalityNode; ///
                equalityNode = this.getEqualityNode();
                var equalityNodeB = equalityNode, equalityNodeAAMatchesEqualityBNodeB = equalityNodeA.match(equalityNodeB), equalityNodeMatches = equalityNodeAAMatchesEqualityBNodeB; ///
                return equalityNodeMatches;
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
            key: "isValid",
            value: function isValid(context) {
                var equalityNode = this.getEqualityNode(), equalityPresent = context.isEqualityPresentByEqualityNode(equalityNode), valid = equalityPresent; ///
                return valid;
            }
        },
        {
            key: "validate",
            value: function validate(assignments, stated, context) {
                var validates = false;
                var equalityString = this.getString(); ///
                context.trace("Validating the '".concat(equalityString, "' equality..."));
                var valid = this.isValid(context);
                if (valid) {
                    validates = true;
                    context.debug("...the '".concat(equalityString, "' equality is already valid."));
                } else {
                    var termsValidate = this.validateTerms(context);
                    if (termsValidate) {
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
                        var equality = this; ///
                        context.addEquality(equality);
                        this.assign(assignments, context);
                    }
                }
                if (validates) {
                    context.debug("...validated the '".concat(equalityString, "' equality."));
                }
                return validates;
            }
        },
        {
            key: "validateTerms",
            value: function validateTerms(context) {
                var _this = this;
                var termsValidate;
                var equalityString = this.getString(); ///
                context.trace("Validating the '".concat(equalityString, "' equality's terms..."));
                var leftTermValidates = this.leftTerm.validate(context, function() {
                    var validatesForwards;
                    var rightTermValidates = _this.rightTerm.validate(context, function() {
                        var validatesForwards;
                        var leftTermType = _this.leftTerm.getType(), rightTermType = _this.rightTerm.getType(), leftTermTypeComparableToRightTermType = leftTermType.isComparableTo(rightTermType);
                        validatesForwards = leftTermTypeComparableToRightTermType; ///
                        return validatesForwards;
                    });
                    validatesForwards = rightTermValidates; ///
                    return validatesForwards;
                });
                termsValidate = leftTermValidates; ///
                if (termsValidate) {
                    context.debug("...validated the '".concat(equalityString, "' equality's terms."));
                }
                return termsValidate;
            }
        },
        {
            key: "validateWhenStated",
            value: function validateWhenStated(assignments, context) {
                var validatesWhenStated;
                var equalityString = this.getString(); ///
                context.trace("Validating the '".concat(equalityString, "' stated equality..."));
                validatesWhenStated = true;
                if (validatesWhenStated) {
                    context.debug("...validated the '".concat(equalityString, "' stated equality."));
                }
                return validatesWhenStated;
            }
        },
        {
            key: "validateWhenDerived",
            value: function validateWhenDerived(context) {
                var validatesWhenDerived;
                var equalityString = this.getString(); ///
                context.trace("Validating the '".concat(equalityString, "' derived equality..."));
                validatesWhenDerived = true; ///
                if (validatesWhenDerived) {
                    context.debug("...validated the '".concat(equalityString, "' derived equality."));
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
                var equality = this, leftVariableAssignment = (0, _assign.leftVariableAssignmentFromEquality)(equality, context), rightVariableAssignment = (0, _assign.rightVariableAssignmentFromEquality)(equality, context);
                if (leftVariableAssignment !== null) {
                    var assigment = leftVariableAssignment; ///
                    assignments.push(assigment);
                }
                if (rightVariableAssignment !== null) {
                    var assigment1 = rightVariableAssignment; ///
                    assignments.push(assigment1);
                }
            }
        }
    ]);
    return Equality;
}(_wrap_native_super(_occamlanguages.Element)), _define_property(_Equality, "name", "Equality"), _Equality));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L2VxdWFsaXR5LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBFbGVtZW50IH0gZnJvbSBcIm9jY2FtLWxhbmd1YWdlc1wiO1xuXG5pbXBvcnQgeyBkZWZpbmUgfSBmcm9tIFwiLi4vZWxlbWVudHNcIjtcbmltcG9ydCB7IGVxdWF0ZVRlcm1zIH0gZnJvbSBcIi4uL3Byb2Nlc3MvZXF1YXRlXCI7XG5pbXBvcnQgeyBsZWZ0VmFyaWFibGVBc3NpZ25tZW50RnJvbUVxdWFsaXR5LCByaWdodFZhcmlhYmxlQXNzaWdubWVudEZyb21FcXVhbGl0eSB9IGZyb20gXCIuLi9wcm9jZXNzL2Fzc2lnblwiO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmUoY2xhc3MgRXF1YWxpdHkgZXh0ZW5kcyBFbGVtZW50IHtcbiAgY29uc3RydWN0b3IoY29udGV4dCwgc3RyaW5nLCBub2RlLCBsZWZ0VGVybSwgcmlnaHRUZXJtKSB7XG4gICAgc3VwZXIoY29udGV4dCwgc3RyaW5nLCBub2RlKTtcblxuICAgIHRoaXMubGVmdFRlcm0gPSBsZWZ0VGVybTtcbiAgICB0aGlzLnJpZ2h0VGVybSA9IHJpZ2h0VGVybTtcbiAgfVxuXG4gIGdldExlZnRUZXJtKCkge1xuICAgIHJldHVybiB0aGlzLmxlZnRUZXJtO1xuICB9XG5cbiAgZ2V0UmlnaHRUZXJtKCkge1xuICAgIHJldHVybiB0aGlzLnJpZ2h0VGVybTtcbiAgfVxuXG4gIGdldEVxdWFsaXR5Tm9kZSgpIHtcbiAgICBjb25zdCBub2RlID0gdGhpcy5nZXROb2RlKCksXG4gICAgICAgICAgZXF1YWxpdHlOZGUgPSBub2RlOyAvLy9cblxuICAgIHJldHVybiBlcXVhbGl0eU5kZTtcbiAgfVxuXG4gIGdldExlZnRUZXJtTm9kZSgpIHtcbiAgICBjb25zdCBsZWZ0VGVybU5vZGUgPSB0aGlzLmxlZnRUZXJtLmdldE5vZGUoKTtcblxuICAgIHJldHVybiBsZWZ0VGVybU5vZGU7XG4gIH1cblxuICBnZXRSaWdodFRlcm1Ob2RlKCkge1xuICAgIGNvbnN0IHJpZ2h0VGVybU5vZGUgPSB0aGlzLnJpZ2h0VGVybS5nZXROb2RlKCk7XG5cbiAgICByZXR1cm4gcmlnaHRUZXJtTm9kZTtcbiAgfVxuXG4gIGdldFR5cGUoKSB7XG4gICAgbGV0IHR5cGU7XG5cbiAgICBjb25zdCBsZWZ0VGVybVR5cGUgPSB0aGlzLmxlZnRUZXJtLmdldFR5cGUoKSxcbiAgICAgICAgICByaWdodFRlcm1UeXBlID0gdGhpcy5yaWdodFRlcm0uZ2V0VHlwZSgpLFxuICAgICAgICAgIGxlZnRUZXJtVHlwZUVxdWFsVG9PclN1YlR5cGVPZlJpZ2h0VGVybVR5cGUgPSBsZWZ0VGVybVR5cGUuaXNFcXVhbFRvT3JTdWJUeXBlT2YocmlnaHRUZXJtVHlwZSksXG4gICAgICAgICAgcmlnaHRUZXJtVHlwZUVxdWFsVG9PclN1YlR5cGVPZkxlZnRUZXJtVHlwZSA9IHJpZ2h0VGVybVR5cGUuaXNFcXVhbFRvT3JTdWJUeXBlT2YobGVmdFRlcm1UeXBlKTtcblxuICAgIGlmIChsZWZ0VGVybVR5cGVFcXVhbFRvT3JTdWJUeXBlT2ZSaWdodFRlcm1UeXBlKSB7XG4gICAgICB0eXBlID0gbGVmdFRlcm1UeXBlOyAgLy8vXG4gICAgfVxuXG4gICAgaWYgKHJpZ2h0VGVybVR5cGVFcXVhbFRvT3JTdWJUeXBlT2ZMZWZ0VGVybVR5cGUpIHtcbiAgICAgIHR5cGUgPSByaWdodFRlcm1UeXBlOyAvLy9cbiAgICB9XG5cbiAgICByZXR1cm4gdHlwZTtcbiAgfVxuXG4gIGdldFRlcm1zKCkge1xuICAgIGNvbnN0IHRlcm1zID0gW1xuICAgICAgdGhpcy5sZWZ0VGVybSxcbiAgICAgIHRoaXMucmlnaHRUZXJtXG4gICAgXTtcblxuICAgIHJldHVybiB0ZXJtcztcbiAgfVxuXG4gIG1hdGNoRXF1YWxpdHlOb2RlKGVxdWFsaXR5Tm9kZSkge1xuICAgIGNvbnN0IGVxdWFsaXR5Tm9kZUEgPSBlcXVhbGl0eU5vZGU7IC8vL1xuXG4gICAgZXF1YWxpdHlOb2RlID0gdGhpcy5nZXRFcXVhbGl0eU5vZGUoKTtcblxuICAgIGNvbnN0IGVxdWFsaXR5Tm9kZUIgPSBlcXVhbGl0eU5vZGUsIC8vL1xuICAgICAgICAgIGVxdWFsaXR5Tm9kZUFBTWF0Y2hlc0VxdWFsaXR5Qk5vZGVCID0gZXF1YWxpdHlOb2RlQS5tYXRjaChlcXVhbGl0eU5vZGVCKSxcbiAgICAgICAgICBlcXVhbGl0eU5vZGVNYXRjaGVzID0gZXF1YWxpdHlOb2RlQUFNYXRjaGVzRXF1YWxpdHlCTm9kZUI7IC8vL1xuXG4gICAgcmV0dXJuIGVxdWFsaXR5Tm9kZU1hdGNoZXM7XG4gIH1cblxuICBpc1JlZmxleGl2ZSgpIHtcbiAgICBjb25zdCBsZWZ0VGVybVN0cmluZyA9IHRoaXMubGVmdFRlcm0uZ2V0U3RyaW5nKCksXG4gICAgICAgICAgcmlnaHRUZXJtU3RyaW5nID0gdGhpcy5yaWdodFRlcm0uZ2V0U3RyaW5nKCksXG4gICAgICAgICAgcmVmbGV4aXZlID0gKGxlZnRUZXJtU3RyaW5nID09PSByaWdodFRlcm1TdHJpbmcpO1xuXG4gICAgcmV0dXJuIHJlZmxleGl2ZTtcbiAgfVxuXG4gIGlzRXF1YWwoY29udGV4dCkge1xuICAgIGxldCBlcXVhbCA9IGZhbHNlO1xuXG4gICAgY29uc3QgbGVmdFRlcm1Ob2RlID0gdGhpcy5sZWZ0VGVybS5nZXROb2RlKCksXG4gICAgICAgICAgcmlnaHRUZXJtTm9kZSA9IHRoaXMucmlnaHRUZXJtLmdldE5vZGUoKSxcbiAgICAgICAgICB0ZXJtc0VxdWF0ZSA9IGVxdWF0ZVRlcm1zKGxlZnRUZXJtTm9kZSwgcmlnaHRUZXJtTm9kZSwgY29udGV4dCk7XG5cbiAgICBpZiAodGVybXNFcXVhdGUpIHtcbiAgICAgIGVxdWFsID0gdHJ1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gZXF1YWw7XG4gIH1cblxuICBpc1ZhbGlkKGNvbnRleHQpIHtcbiAgICBjb25zdCBlcXVhbGl0eU5vZGUgPSB0aGlzLmdldEVxdWFsaXR5Tm9kZSgpLFxuICAgICAgICAgIGVxdWFsaXR5UHJlc2VudCA9IGNvbnRleHQuaXNFcXVhbGl0eVByZXNlbnRCeUVxdWFsaXR5Tm9kZShlcXVhbGl0eU5vZGUpLFxuICAgICAgICAgIHZhbGlkID0gZXF1YWxpdHlQcmVzZW50OyAgLy8vXG5cbiAgICByZXR1cm4gdmFsaWQ7XG4gIH1cblxuICB2YWxpZGF0ZShhc3NpZ25tZW50cywgc3RhdGVkLCBjb250ZXh0KSB7XG4gICAgbGV0IHZhbGlkYXRlcyA9IGZhbHNlO1xuXG4gICAgY29uc3QgZXF1YWxpdHlTdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZhbGlkYXRpbmcgdGhlICcke2VxdWFsaXR5U3RyaW5nfScgZXF1YWxpdHkuLi5gKTtcblxuICAgIGNvbnN0IHZhbGlkID0gdGhpcy5pc1ZhbGlkKGNvbnRleHQpO1xuXG4gICAgaWYgKHZhbGlkKSB7XG4gICAgICB2YWxpZGF0ZXMgPSB0cnVlO1xuXG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi50aGUgJyR7ZXF1YWxpdHlTdHJpbmd9JyBlcXVhbGl0eSBpcyBhbHJlYWR5IHZhbGlkLmApO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCB0ZXJtc1ZhbGlkYXRlID0gdGhpcy52YWxpZGF0ZVRlcm1zKGNvbnRleHQpO1xuXG4gICAgICBpZiAodGVybXNWYWxpZGF0ZSkge1xuICAgICAgICBsZXQgdmFsaWRhdGVzV2hlblN0YXRlZCA9IGZhbHNlLFxuICAgICAgICAgICAgdmFsaWRhdGVzV2hlbkRlcml2ZWQgPSBmYWxzZTtcblxuICAgICAgICBpZiAoc3RhdGVkKSB7XG4gICAgICAgICAgdmFsaWRhdGVzV2hlblN0YXRlZCA9IHRoaXMudmFsaWRhdGVXaGVuU3RhdGVkKGFzc2lnbm1lbnRzLCBjb250ZXh0KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB2YWxpZGF0ZXNXaGVuRGVyaXZlZCA9IHRoaXMudmFsaWRhdGVXaGVuRGVyaXZlZChjb250ZXh0KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh2YWxpZGF0ZXNXaGVuU3RhdGVkIHx8IHZhbGlkYXRlc1doZW5EZXJpdmVkKSB7XG4gICAgICAgICAgdmFsaWRhdGVzID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAodmFsaWRhdGVzKSB7XG4gICAgICAgIGNvbnN0IGVxdWFsaXR5ID0gdGhpczsgIC8vL1xuXG4gICAgICAgIGNvbnRleHQuYWRkRXF1YWxpdHkoZXF1YWxpdHkpO1xuXG4gICAgICAgIHRoaXMuYXNzaWduKGFzc2lnbm1lbnRzLCBjb250ZXh0KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodmFsaWRhdGVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52YWxpZGF0ZWQgdGhlICcke2VxdWFsaXR5U3RyaW5nfScgZXF1YWxpdHkuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZhbGlkYXRlcztcbiAgfVxuXG4gIHZhbGlkYXRlVGVybXMoY29udGV4dCkge1xuICAgIGxldCB0ZXJtc1ZhbGlkYXRlO1xuXG4gICAgY29uc3QgZXF1YWxpdHlTdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZhbGlkYXRpbmcgdGhlICcke2VxdWFsaXR5U3RyaW5nfScgZXF1YWxpdHkncyB0ZXJtcy4uLmApO1xuXG4gICAgY29uc3QgbGVmdFRlcm1WYWxpZGF0ZXMgPSB0aGlzLmxlZnRUZXJtLnZhbGlkYXRlKGNvbnRleHQsICgpID0+IHtcbiAgICAgIGxldCB2YWxpZGF0ZXNGb3J3YXJkcztcblxuICAgICAgY29uc3QgcmlnaHRUZXJtVmFsaWRhdGVzID0gdGhpcy5yaWdodFRlcm0udmFsaWRhdGUoY29udGV4dCwgKCkgPT4ge1xuICAgICAgICBsZXQgdmFsaWRhdGVzRm9yd2FyZHM7XG5cbiAgICAgICAgY29uc3QgbGVmdFRlcm1UeXBlID0gdGhpcy5sZWZ0VGVybS5nZXRUeXBlKCksXG4gICAgICAgICAgICAgIHJpZ2h0VGVybVR5cGUgPSB0aGlzLnJpZ2h0VGVybS5nZXRUeXBlKCksXG4gICAgICAgICAgICAgIGxlZnRUZXJtVHlwZUNvbXBhcmFibGVUb1JpZ2h0VGVybVR5cGUgPSBsZWZ0VGVybVR5cGUuaXNDb21wYXJhYmxlVG8ocmlnaHRUZXJtVHlwZSk7XG5cbiAgICAgICAgdmFsaWRhdGVzRm9yd2FyZHMgPSBsZWZ0VGVybVR5cGVDb21wYXJhYmxlVG9SaWdodFRlcm1UeXBlOyAgLy8vXG5cbiAgICAgICAgcmV0dXJuIHZhbGlkYXRlc0ZvcndhcmRzO1xuICAgICAgfSk7XG5cbiAgICAgIHZhbGlkYXRlc0ZvcndhcmRzID0gcmlnaHRUZXJtVmFsaWRhdGVzOyAvLy9cblxuICAgICAgcmV0dXJuIHZhbGlkYXRlc0ZvcndhcmRzO1xuICAgIH0pO1xuXG4gICAgdGVybXNWYWxpZGF0ZSA9IGxlZnRUZXJtVmFsaWRhdGVzOyAvLy9cblxuICAgIGlmICh0ZXJtc1ZhbGlkYXRlKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52YWxpZGF0ZWQgdGhlICcke2VxdWFsaXR5U3RyaW5nfScgZXF1YWxpdHkncyB0ZXJtcy5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGVybXNWYWxpZGF0ZTtcbiAgfVxuXG4gIHZhbGlkYXRlV2hlblN0YXRlZChhc3NpZ25tZW50cywgY29udGV4dCkge1xuICAgIGxldCB2YWxpZGF0ZXNXaGVuU3RhdGVkO1xuXG4gICAgY29uc3QgZXF1YWxpdHlTdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZhbGlkYXRpbmcgdGhlICcke2VxdWFsaXR5U3RyaW5nfScgc3RhdGVkIGVxdWFsaXR5Li4uYCk7XG5cbiAgICB2YWxpZGF0ZXNXaGVuU3RhdGVkID0gdHJ1ZTtcblxuICAgIGlmICh2YWxpZGF0ZXNXaGVuU3RhdGVkKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52YWxpZGF0ZWQgdGhlICcke2VxdWFsaXR5U3RyaW5nfScgc3RhdGVkIGVxdWFsaXR5LmApO1xuICAgIH1cblxuICAgIHJldHVybiB2YWxpZGF0ZXNXaGVuU3RhdGVkO1xuICB9XG5cbiAgdmFsaWRhdGVXaGVuRGVyaXZlZChjb250ZXh0KSB7XG4gICAgbGV0IHZhbGlkYXRlc1doZW5EZXJpdmVkO1xuXG4gICAgY29uc3QgZXF1YWxpdHlTdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZhbGlkYXRpbmcgdGhlICcke2VxdWFsaXR5U3RyaW5nfScgZGVyaXZlZCBlcXVhbGl0eS4uLmApO1xuXG4gICAgdmFsaWRhdGVzV2hlbkRlcml2ZWQgPSB0cnVlOyAgLy8vXG5cbiAgICBpZiAodmFsaWRhdGVzV2hlbkRlcml2ZWQpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZhbGlkYXRlZCB0aGUgJyR7ZXF1YWxpdHlTdHJpbmd9JyBkZXJpdmVkIGVxdWFsaXR5LmApO1xuICAgIH1cblxuICAgIHJldHVybiB2YWxpZGF0ZXNXaGVuRGVyaXZlZDtcbiAgfVxuXG4gIGFzc2lnbihhc3NpZ25tZW50cywgY29udGV4dCkge1xuICAgIGlmIChhc3NpZ25tZW50cyA9PT0gbnVsbCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IGVxdWFsaXR5ID0gdGhpcywgIC8vL1xuICAgICAgICAgIGxlZnRWYXJpYWJsZUFzc2lnbm1lbnQgPSBsZWZ0VmFyaWFibGVBc3NpZ25tZW50RnJvbUVxdWFsaXR5KGVxdWFsaXR5LCBjb250ZXh0KSxcbiAgICAgICAgICByaWdodFZhcmlhYmxlQXNzaWdubWVudCA9IHJpZ2h0VmFyaWFibGVBc3NpZ25tZW50RnJvbUVxdWFsaXR5KGVxdWFsaXR5LCBjb250ZXh0KTtcblxuICAgIGlmIChsZWZ0VmFyaWFibGVBc3NpZ25tZW50ICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBhc3NpZ21lbnQgPSBsZWZ0VmFyaWFibGVBc3NpZ25tZW50OyAgLy8vXG5cbiAgICAgIGFzc2lnbm1lbnRzLnB1c2goYXNzaWdtZW50KTtcbiAgICB9XG5cbiAgICBpZiAocmlnaHRWYXJpYWJsZUFzc2lnbm1lbnQgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IGFzc2lnbWVudCA9IHJpZ2h0VmFyaWFibGVBc3NpZ25tZW50OyAgLy8vXG5cbiAgICAgIGFzc2lnbm1lbnRzLnB1c2goYXNzaWdtZW50KTtcbiAgICB9XG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiRXF1YWxpdHlcIjtcbn0pO1xuIl0sIm5hbWVzIjpbImRlZmluZSIsIkVxdWFsaXR5IiwiY29udGV4dCIsInN0cmluZyIsIm5vZGUiLCJsZWZ0VGVybSIsInJpZ2h0VGVybSIsImdldExlZnRUZXJtIiwiZ2V0UmlnaHRUZXJtIiwiZ2V0RXF1YWxpdHlOb2RlIiwiZ2V0Tm9kZSIsImVxdWFsaXR5TmRlIiwiZ2V0TGVmdFRlcm1Ob2RlIiwibGVmdFRlcm1Ob2RlIiwiZ2V0UmlnaHRUZXJtTm9kZSIsInJpZ2h0VGVybU5vZGUiLCJnZXRUeXBlIiwidHlwZSIsImxlZnRUZXJtVHlwZSIsInJpZ2h0VGVybVR5cGUiLCJsZWZ0VGVybVR5cGVFcXVhbFRvT3JTdWJUeXBlT2ZSaWdodFRlcm1UeXBlIiwiaXNFcXVhbFRvT3JTdWJUeXBlT2YiLCJyaWdodFRlcm1UeXBlRXF1YWxUb09yU3ViVHlwZU9mTGVmdFRlcm1UeXBlIiwiZ2V0VGVybXMiLCJ0ZXJtcyIsIm1hdGNoRXF1YWxpdHlOb2RlIiwiZXF1YWxpdHlOb2RlIiwiZXF1YWxpdHlOb2RlQSIsImVxdWFsaXR5Tm9kZUIiLCJlcXVhbGl0eU5vZGVBQU1hdGNoZXNFcXVhbGl0eUJOb2RlQiIsIm1hdGNoIiwiZXF1YWxpdHlOb2RlTWF0Y2hlcyIsImlzUmVmbGV4aXZlIiwibGVmdFRlcm1TdHJpbmciLCJnZXRTdHJpbmciLCJyaWdodFRlcm1TdHJpbmciLCJyZWZsZXhpdmUiLCJpc0VxdWFsIiwiZXF1YWwiLCJ0ZXJtc0VxdWF0ZSIsImVxdWF0ZVRlcm1zIiwiaXNWYWxpZCIsImVxdWFsaXR5UHJlc2VudCIsImlzRXF1YWxpdHlQcmVzZW50QnlFcXVhbGl0eU5vZGUiLCJ2YWxpZCIsInZhbGlkYXRlIiwiYXNzaWdubWVudHMiLCJzdGF0ZWQiLCJ2YWxpZGF0ZXMiLCJlcXVhbGl0eVN0cmluZyIsInRyYWNlIiwiZGVidWciLCJ0ZXJtc1ZhbGlkYXRlIiwidmFsaWRhdGVUZXJtcyIsInZhbGlkYXRlc1doZW5TdGF0ZWQiLCJ2YWxpZGF0ZXNXaGVuRGVyaXZlZCIsInZhbGlkYXRlV2hlblN0YXRlZCIsInZhbGlkYXRlV2hlbkRlcml2ZWQiLCJlcXVhbGl0eSIsImFkZEVxdWFsaXR5IiwiYXNzaWduIiwibGVmdFRlcm1WYWxpZGF0ZXMiLCJ2YWxpZGF0ZXNGb3J3YXJkcyIsInJpZ2h0VGVybVZhbGlkYXRlcyIsImxlZnRUZXJtVHlwZUNvbXBhcmFibGVUb1JpZ2h0VGVybVR5cGUiLCJpc0NvbXBhcmFibGVUbyIsImxlZnRWYXJpYWJsZUFzc2lnbm1lbnQiLCJsZWZ0VmFyaWFibGVBc3NpZ25tZW50RnJvbUVxdWFsaXR5IiwicmlnaHRWYXJpYWJsZUFzc2lnbm1lbnQiLCJyaWdodFZhcmlhYmxlQXNzaWdubWVudEZyb21FcXVhbGl0eSIsImFzc2lnbWVudCIsInB1c2giLCJFbGVtZW50IiwibmFtZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBUUE7OztlQUFBOzs7OEJBTndCO3dCQUVEO3NCQUNLO3NCQUM0RDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFeEYsV0FBZUEsSUFBQUEsZ0JBQU0sNkJBQUM7O2FBQU1DLFNBQ2RDLE9BQU8sRUFBRUMsTUFBTSxFQUFFQyxJQUFJLEVBQUVDLFFBQVEsRUFBRUMsU0FBUztnQ0FENUJMOztnQkFFeEIsa0JBRndCQTtZQUVsQkM7WUFBU0M7WUFBUUM7O1FBRXZCLE1BQUtDLFFBQVEsR0FBR0E7UUFDaEIs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