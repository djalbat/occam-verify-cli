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
                        this.assign(assignments, stated, context);
                        context.debug("...validated the '".concat(equalityString, "' equality."));
                    }
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
            value: function assign(assignments, stated, context) {
                if (assignments === null) {
                    return;
                }
                var equality = this, equalityAssignment = (0, _assign.equalityAssignmentFromEquality)(equality, context), leftVariableAssignment = (0, _assign.leftVariableAssignmentFromEquality)(equality, context), rightVariableAssignment = (0, _assign.rightVariableAssignmentFromEquality)(equality, context);
                var assignment;
                assignment = equalityAssignment; ///
                assignments.push(assignment);
                if (leftVariableAssignment !== null) {
                    assignment = leftVariableAssignment; ///
                    assignments.push(assignment);
                }
                if (rightVariableAssignment !== null) {
                    assignment = rightVariableAssignment; ///
                    assignments.push(assignment);
                }
            }
        }
    ]);
    return Equality;
}(_wrap_native_super(_occamlanguages.Element)), _define_property(_Equality, "name", "Equality"), _Equality));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L2VxdWFsaXR5LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBFbGVtZW50IH0gZnJvbSBcIm9jY2FtLWxhbmd1YWdlc1wiO1xuXG5pbXBvcnQgeyBkZWZpbmUgfSBmcm9tIFwiLi4vZWxlbWVudHNcIjtcbmltcG9ydCB7IGVxdWF0ZVRlcm1zIH0gZnJvbSBcIi4uL3Byb2Nlc3MvZXF1YXRlXCI7XG5pbXBvcnQgeyBlcXVhbGl0eUFzc2lnbm1lbnRGcm9tRXF1YWxpdHksIGxlZnRWYXJpYWJsZUFzc2lnbm1lbnRGcm9tRXF1YWxpdHksIHJpZ2h0VmFyaWFibGVBc3NpZ25tZW50RnJvbUVxdWFsaXR5IH0gZnJvbSBcIi4uL3Byb2Nlc3MvYXNzaWduXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZShjbGFzcyBFcXVhbGl0eSBleHRlbmRzIEVsZW1lbnQge1xuICBjb25zdHJ1Y3Rvcihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIGxlZnRUZXJtLCByaWdodFRlcm0pIHtcbiAgICBzdXBlcihjb250ZXh0LCBzdHJpbmcsIG5vZGUpO1xuXG4gICAgdGhpcy5sZWZ0VGVybSA9IGxlZnRUZXJtO1xuICAgIHRoaXMucmlnaHRUZXJtID0gcmlnaHRUZXJtO1xuICB9XG5cbiAgZ2V0TGVmdFRlcm0oKSB7XG4gICAgcmV0dXJuIHRoaXMubGVmdFRlcm07XG4gIH1cblxuICBnZXRSaWdodFRlcm0oKSB7XG4gICAgcmV0dXJuIHRoaXMucmlnaHRUZXJtO1xuICB9XG5cbiAgZ2V0RXF1YWxpdHlOb2RlKCkge1xuICAgIGNvbnN0IG5vZGUgPSB0aGlzLmdldE5vZGUoKSxcbiAgICAgICAgICBlcXVhbGl0eU5kZSA9IG5vZGU7IC8vL1xuXG4gICAgcmV0dXJuIGVxdWFsaXR5TmRlO1xuICB9XG5cbiAgZ2V0TGVmdFRlcm1Ob2RlKCkge1xuICAgIGNvbnN0IGxlZnRUZXJtTm9kZSA9IHRoaXMubGVmdFRlcm0uZ2V0Tm9kZSgpO1xuXG4gICAgcmV0dXJuIGxlZnRUZXJtTm9kZTtcbiAgfVxuXG4gIGdldFJpZ2h0VGVybU5vZGUoKSB7XG4gICAgY29uc3QgcmlnaHRUZXJtTm9kZSA9IHRoaXMucmlnaHRUZXJtLmdldE5vZGUoKTtcblxuICAgIHJldHVybiByaWdodFRlcm1Ob2RlO1xuICB9XG5cbiAgZ2V0VHlwZSgpIHtcbiAgICBsZXQgdHlwZTtcblxuICAgIGNvbnN0IGxlZnRUZXJtVHlwZSA9IHRoaXMubGVmdFRlcm0uZ2V0VHlwZSgpLFxuICAgICAgICAgIHJpZ2h0VGVybVR5cGUgPSB0aGlzLnJpZ2h0VGVybS5nZXRUeXBlKCksXG4gICAgICAgICAgbGVmdFRlcm1UeXBlRXF1YWxUb09yU3ViVHlwZU9mUmlnaHRUZXJtVHlwZSA9IGxlZnRUZXJtVHlwZS5pc0VxdWFsVG9PclN1YlR5cGVPZihyaWdodFRlcm1UeXBlKSxcbiAgICAgICAgICByaWdodFRlcm1UeXBlRXF1YWxUb09yU3ViVHlwZU9mTGVmdFRlcm1UeXBlID0gcmlnaHRUZXJtVHlwZS5pc0VxdWFsVG9PclN1YlR5cGVPZihsZWZ0VGVybVR5cGUpO1xuXG4gICAgaWYgKGxlZnRUZXJtVHlwZUVxdWFsVG9PclN1YlR5cGVPZlJpZ2h0VGVybVR5cGUpIHtcbiAgICAgIHR5cGUgPSBsZWZ0VGVybVR5cGU7ICAvLy9cbiAgICB9XG5cbiAgICBpZiAocmlnaHRUZXJtVHlwZUVxdWFsVG9PclN1YlR5cGVPZkxlZnRUZXJtVHlwZSkge1xuICAgICAgdHlwZSA9IHJpZ2h0VGVybVR5cGU7IC8vL1xuICAgIH1cblxuICAgIHJldHVybiB0eXBlO1xuICB9XG5cbiAgZ2V0VGVybXMoKSB7XG4gICAgY29uc3QgdGVybXMgPSBbXG4gICAgICB0aGlzLmxlZnRUZXJtLFxuICAgICAgdGhpcy5yaWdodFRlcm1cbiAgICBdO1xuXG4gICAgcmV0dXJuIHRlcm1zO1xuICB9XG5cbiAgbWF0Y2hFcXVhbGl0eU5vZGUoZXF1YWxpdHlOb2RlKSB7XG4gICAgY29uc3QgZXF1YWxpdHlOb2RlQSA9IGVxdWFsaXR5Tm9kZTsgLy8vXG5cbiAgICBlcXVhbGl0eU5vZGUgPSB0aGlzLmdldEVxdWFsaXR5Tm9kZSgpO1xuXG4gICAgY29uc3QgZXF1YWxpdHlOb2RlQiA9IGVxdWFsaXR5Tm9kZSwgLy8vXG4gICAgICAgICAgZXF1YWxpdHlOb2RlQUFNYXRjaGVzRXF1YWxpdHlCTm9kZUIgPSBlcXVhbGl0eU5vZGVBLm1hdGNoKGVxdWFsaXR5Tm9kZUIpLFxuICAgICAgICAgIGVxdWFsaXR5Tm9kZU1hdGNoZXMgPSBlcXVhbGl0eU5vZGVBQU1hdGNoZXNFcXVhbGl0eUJOb2RlQjsgLy8vXG5cbiAgICByZXR1cm4gZXF1YWxpdHlOb2RlTWF0Y2hlcztcbiAgfVxuXG4gIGlzUmVmbGV4aXZlKCkge1xuICAgIGNvbnN0IGxlZnRUZXJtU3RyaW5nID0gdGhpcy5sZWZ0VGVybS5nZXRTdHJpbmcoKSxcbiAgICAgICAgICByaWdodFRlcm1TdHJpbmcgPSB0aGlzLnJpZ2h0VGVybS5nZXRTdHJpbmcoKSxcbiAgICAgICAgICByZWZsZXhpdmUgPSAobGVmdFRlcm1TdHJpbmcgPT09IHJpZ2h0VGVybVN0cmluZyk7XG5cbiAgICByZXR1cm4gcmVmbGV4aXZlO1xuICB9XG5cbiAgaXNFcXVhbChjb250ZXh0KSB7XG4gICAgbGV0IGVxdWFsID0gZmFsc2U7XG5cbiAgICBjb25zdCBsZWZ0VGVybU5vZGUgPSB0aGlzLmxlZnRUZXJtLmdldE5vZGUoKSxcbiAgICAgICAgICByaWdodFRlcm1Ob2RlID0gdGhpcy5yaWdodFRlcm0uZ2V0Tm9kZSgpLFxuICAgICAgICAgIHRlcm1zRXF1YXRlID0gZXF1YXRlVGVybXMobGVmdFRlcm1Ob2RlLCByaWdodFRlcm1Ob2RlLCBjb250ZXh0KTtcblxuICAgIGlmICh0ZXJtc0VxdWF0ZSkge1xuICAgICAgZXF1YWwgPSB0cnVlO1xuICAgIH1cblxuICAgIHJldHVybiBlcXVhbDtcbiAgfVxuXG4gIGlzVmFsaWQoY29udGV4dCkge1xuICAgIGNvbnN0IGVxdWFsaXR5Tm9kZSA9IHRoaXMuZ2V0RXF1YWxpdHlOb2RlKCksXG4gICAgICAgICAgZXF1YWxpdHlQcmVzZW50ID0gY29udGV4dC5pc0VxdWFsaXR5UHJlc2VudEJ5RXF1YWxpdHlOb2RlKGVxdWFsaXR5Tm9kZSksXG4gICAgICAgICAgdmFsaWQgPSBlcXVhbGl0eVByZXNlbnQ7ICAvLy9cblxuICAgIHJldHVybiB2YWxpZDtcbiAgfVxuXG4gIHZhbGlkYXRlKGFzc2lnbm1lbnRzLCBzdGF0ZWQsIGNvbnRleHQpIHtcbiAgICBsZXQgdmFsaWRhdGVzID0gZmFsc2U7XG5cbiAgICBjb25zdCBlcXVhbGl0eVN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7IC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmFsaWRhdGluZyB0aGUgJyR7ZXF1YWxpdHlTdHJpbmd9JyBlcXVhbGl0eS4uLmApO1xuXG4gICAgY29uc3QgdmFsaWQgPSB0aGlzLmlzVmFsaWQoY29udGV4dCk7XG5cbiAgICBpZiAodmFsaWQpIHtcbiAgICAgIHZhbGlkYXRlcyA9IHRydWU7XG5cbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnRoZSAnJHtlcXVhbGl0eVN0cmluZ30nIGVxdWFsaXR5IGlzIGFscmVhZHkgdmFsaWQuYCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHRlcm1zVmFsaWRhdGUgPSB0aGlzLnZhbGlkYXRlVGVybXMoY29udGV4dCk7XG5cbiAgICAgIGlmICh0ZXJtc1ZhbGlkYXRlKSB7XG4gICAgICAgIGxldCB2YWxpZGF0ZXNXaGVuU3RhdGVkID0gZmFsc2UsXG4gICAgICAgICAgICB2YWxpZGF0ZXNXaGVuRGVyaXZlZCA9IGZhbHNlO1xuXG4gICAgICAgIGlmIChzdGF0ZWQpIHtcbiAgICAgICAgICB2YWxpZGF0ZXNXaGVuU3RhdGVkID0gdGhpcy52YWxpZGF0ZVdoZW5TdGF0ZWQoYXNzaWdubWVudHMsIGNvbnRleHQpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHZhbGlkYXRlc1doZW5EZXJpdmVkID0gdGhpcy52YWxpZGF0ZVdoZW5EZXJpdmVkKGNvbnRleHQpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHZhbGlkYXRlc1doZW5TdGF0ZWQgfHwgdmFsaWRhdGVzV2hlbkRlcml2ZWQpIHtcbiAgICAgICAgICB2YWxpZGF0ZXMgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmICh2YWxpZGF0ZXMpIHtcbiAgICAgICAgY29uc3QgZXF1YWxpdHkgPSB0aGlzOyAgLy8vXG5cbiAgICAgICAgY29udGV4dC5hZGRFcXVhbGl0eShlcXVhbGl0eSk7XG5cbiAgICAgICAgdGhpcy5hc3NpZ24oYXNzaWdubWVudHMsIHN0YXRlZCwgY29udGV4dCk7XG5cbiAgICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmFsaWRhdGVkIHRoZSAnJHtlcXVhbGl0eVN0cmluZ30nIGVxdWFsaXR5LmApO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB2YWxpZGF0ZXM7XG4gIH1cblxuICB2YWxpZGF0ZVRlcm1zKGNvbnRleHQpIHtcbiAgICBsZXQgdGVybXNWYWxpZGF0ZTtcblxuICAgIGNvbnN0IGVxdWFsaXR5U3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWYWxpZGF0aW5nIHRoZSAnJHtlcXVhbGl0eVN0cmluZ30nIGVxdWFsaXR5J3MgdGVybXMuLi5gKTtcblxuICAgIGNvbnN0IGxlZnRUZXJtVmFsaWRhdGVzID0gdGhpcy5sZWZ0VGVybS52YWxpZGF0ZShjb250ZXh0LCAoKSA9PiB7XG4gICAgICBsZXQgdmFsaWRhdGVzRm9yd2FyZHM7XG5cbiAgICAgIGNvbnN0IHJpZ2h0VGVybVZhbGlkYXRlcyA9IHRoaXMucmlnaHRUZXJtLnZhbGlkYXRlKGNvbnRleHQsICgpID0+IHtcbiAgICAgICAgbGV0IHZhbGlkYXRlc0ZvcndhcmRzO1xuXG4gICAgICAgIGNvbnN0IGxlZnRUZXJtVHlwZSA9IHRoaXMubGVmdFRlcm0uZ2V0VHlwZSgpLFxuICAgICAgICAgICAgICByaWdodFRlcm1UeXBlID0gdGhpcy5yaWdodFRlcm0uZ2V0VHlwZSgpLFxuICAgICAgICAgICAgICBsZWZ0VGVybVR5cGVDb21wYXJhYmxlVG9SaWdodFRlcm1UeXBlID0gbGVmdFRlcm1UeXBlLmlzQ29tcGFyYWJsZVRvKHJpZ2h0VGVybVR5cGUpO1xuXG4gICAgICAgIHZhbGlkYXRlc0ZvcndhcmRzID0gbGVmdFRlcm1UeXBlQ29tcGFyYWJsZVRvUmlnaHRUZXJtVHlwZTsgIC8vL1xuXG4gICAgICAgIHJldHVybiB2YWxpZGF0ZXNGb3J3YXJkcztcbiAgICAgIH0pO1xuXG4gICAgICB2YWxpZGF0ZXNGb3J3YXJkcyA9IHJpZ2h0VGVybVZhbGlkYXRlczsgLy8vXG5cbiAgICAgIHJldHVybiB2YWxpZGF0ZXNGb3J3YXJkcztcbiAgICB9KTtcblxuICAgIHRlcm1zVmFsaWRhdGUgPSBsZWZ0VGVybVZhbGlkYXRlczsgLy8vXG5cbiAgICBpZiAodGVybXNWYWxpZGF0ZSkge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmFsaWRhdGVkIHRoZSAnJHtlcXVhbGl0eVN0cmluZ30nIGVxdWFsaXR5J3MgdGVybXMuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRlcm1zVmFsaWRhdGU7XG4gIH1cblxuICB2YWxpZGF0ZVdoZW5TdGF0ZWQoYXNzaWdubWVudHMsIGNvbnRleHQpIHtcbiAgICBsZXQgdmFsaWRhdGVzV2hlblN0YXRlZDtcblxuICAgIGNvbnN0IGVxdWFsaXR5U3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWYWxpZGF0aW5nIHRoZSAnJHtlcXVhbGl0eVN0cmluZ30nIHN0YXRlZCBlcXVhbGl0eS4uLmApO1xuXG4gICAgdmFsaWRhdGVzV2hlblN0YXRlZCA9IHRydWU7XG5cbiAgICBpZiAodmFsaWRhdGVzV2hlblN0YXRlZCkge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmFsaWRhdGVkIHRoZSAnJHtlcXVhbGl0eVN0cmluZ30nIHN0YXRlZCBlcXVhbGl0eS5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmFsaWRhdGVzV2hlblN0YXRlZDtcbiAgfVxuXG4gIHZhbGlkYXRlV2hlbkRlcml2ZWQoY29udGV4dCkge1xuICAgIGxldCB2YWxpZGF0ZXNXaGVuRGVyaXZlZDtcblxuICAgIGNvbnN0IGVxdWFsaXR5U3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWYWxpZGF0aW5nIHRoZSAnJHtlcXVhbGl0eVN0cmluZ30nIGRlcml2ZWQgZXF1YWxpdHkuLi5gKTtcblxuICAgIHZhbGlkYXRlc1doZW5EZXJpdmVkID0gdHJ1ZTsgIC8vL1xuXG4gICAgaWYgKHZhbGlkYXRlc1doZW5EZXJpdmVkKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52YWxpZGF0ZWQgdGhlICcke2VxdWFsaXR5U3RyaW5nfScgZGVyaXZlZCBlcXVhbGl0eS5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmFsaWRhdGVzV2hlbkRlcml2ZWQ7XG4gIH1cblxuICBhc3NpZ24oYXNzaWdubWVudHMsIHN0YXRlZCwgY29udGV4dCkge1xuICAgIGlmIChhc3NpZ25tZW50cyA9PT0gbnVsbCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IGVxdWFsaXR5ID0gdGhpcywgIC8vL1xuICAgICAgICAgIGVxdWFsaXR5QXNzaWdubWVudCA9IGVxdWFsaXR5QXNzaWdubWVudEZyb21FcXVhbGl0eShlcXVhbGl0eSwgY29udGV4dCksXG4gICAgICAgICAgbGVmdFZhcmlhYmxlQXNzaWdubWVudCA9IGxlZnRWYXJpYWJsZUFzc2lnbm1lbnRGcm9tRXF1YWxpdHkoZXF1YWxpdHksIGNvbnRleHQpLFxuICAgICAgICAgIHJpZ2h0VmFyaWFibGVBc3NpZ25tZW50ID0gcmlnaHRWYXJpYWJsZUFzc2lnbm1lbnRGcm9tRXF1YWxpdHkoZXF1YWxpdHksIGNvbnRleHQpO1xuXG4gICAgbGV0IGFzc2lnbm1lbnQ7XG5cbiAgICBhc3NpZ25tZW50ID0gZXF1YWxpdHlBc3NpZ25tZW50OyAvLy9cblxuICAgIGFzc2lnbm1lbnRzLnB1c2goYXNzaWdubWVudCk7XG5cbiAgICBpZiAobGVmdFZhcmlhYmxlQXNzaWdubWVudCAhPT0gbnVsbCkge1xuICAgICAgYXNzaWdubWVudCA9IGxlZnRWYXJpYWJsZUFzc2lnbm1lbnQ7ICAvLy9cblxuICAgICAgYXNzaWdubWVudHMucHVzaChhc3NpZ25tZW50KTtcbiAgICB9XG5cbiAgICBpZiAocmlnaHRWYXJpYWJsZUFzc2lnbm1lbnQgIT09IG51bGwpIHtcbiAgICAgIGFzc2lnbm1lbnQgPSByaWdodFZhcmlhYmxlQXNzaWdubWVudDsgIC8vL1xuXG4gICAgICBhc3NpZ25tZW50cy5wdXNoKGFzc2lnbm1lbnQpO1xuICAgIH1cbiAgfVxuXG4gIHN0YXRpYyBuYW1lID0gXCJFcXVhbGl0eVwiO1xufSk7XG4iXSwibmFtZXMiOlsiZGVmaW5lIiwiRXF1YWxpdHkiLCJjb250ZXh0Iiwic3RyaW5nIiwibm9kZSIsImxlZnRUZXJtIiwicmlnaHRUZXJtIiwiZ2V0TGVmdFRlcm0iLCJnZXRSaWdodFRlcm0iLCJnZXRFcXVhbGl0eU5vZGUiLCJnZXROb2RlIiwiZXF1YWxpdHlOZGUiLCJnZXRMZWZ0VGVybU5vZGUiLCJsZWZ0VGVybU5vZGUiLCJnZXRSaWdodFRlcm1Ob2RlIiwicmlnaHRUZXJtTm9kZSIsImdldFR5cGUiLCJ0eXBlIiwibGVmdFRlcm1UeXBlIiwicmlnaHRUZXJtVHlwZSIsImxlZnRUZXJtVHlwZUVxdWFsVG9PclN1YlR5cGVPZlJpZ2h0VGVybVR5cGUiLCJpc0VxdWFsVG9PclN1YlR5cGVPZiIsInJpZ2h0VGVybVR5cGVFcXVhbFRvT3JTdWJUeXBlT2ZMZWZ0VGVybVR5cGUiLCJnZXRUZXJtcyIsInRlcm1zIiwibWF0Y2hFcXVhbGl0eU5vZGUiLCJlcXVhbGl0eU5vZGUiLCJlcXVhbGl0eU5vZGVBIiwiZXF1YWxpdHlOb2RlQiIsImVxdWFsaXR5Tm9kZUFBTWF0Y2hlc0VxdWFsaXR5Qk5vZGVCIiwibWF0Y2giLCJlcXVhbGl0eU5vZGVNYXRjaGVzIiwiaXNSZWZsZXhpdmUiLCJsZWZ0VGVybVN0cmluZyIsImdldFN0cmluZyIsInJpZ2h0VGVybVN0cmluZyIsInJlZmxleGl2ZSIsImlzRXF1YWwiLCJlcXVhbCIsInRlcm1zRXF1YXRlIiwiZXF1YXRlVGVybXMiLCJpc1ZhbGlkIiwiZXF1YWxpdHlQcmVzZW50IiwiaXNFcXVhbGl0eVByZXNlbnRCeUVxdWFsaXR5Tm9kZSIsInZhbGlkIiwidmFsaWRhdGUiLCJhc3NpZ25tZW50cyIsInN0YXRlZCIsInZhbGlkYXRlcyIsImVxdWFsaXR5U3RyaW5nIiwidHJhY2UiLCJkZWJ1ZyIsInRlcm1zVmFsaWRhdGUiLCJ2YWxpZGF0ZVRlcm1zIiwidmFsaWRhdGVzV2hlblN0YXRlZCIsInZhbGlkYXRlc1doZW5EZXJpdmVkIiwidmFsaWRhdGVXaGVuU3RhdGVkIiwidmFsaWRhdGVXaGVuRGVyaXZlZCIsImVxdWFsaXR5IiwiYWRkRXF1YWxpdHkiLCJhc3NpZ24iLCJsZWZ0VGVybVZhbGlkYXRlcyIsInZhbGlkYXRlc0ZvcndhcmRzIiwicmlnaHRUZXJtVmFsaWRhdGVzIiwibGVmdFRlcm1UeXBlQ29tcGFyYWJsZVRvUmlnaHRUZXJtVHlwZSIsImlzQ29tcGFyYWJsZVRvIiwiZXF1YWxpdHlBc3NpZ25tZW50IiwiZXF1YWxpdHlBc3NpZ25tZW50RnJvbUVxdWFsaXR5IiwibGVmdFZhcmlhYmxlQXNzaWdubWVudCIsImxlZnRWYXJpYWJsZUFzc2lnbm1lbnRGcm9tRXF1YWxpdHkiLCJyaWdodFZhcmlhYmxlQXNzaWdubWVudCIsInJpZ2h0VmFyaWFibGVBc3NpZ25tZW50RnJvbUVxdWFsaXR5IiwiYXNzaWdubWVudCIsInB1c2giLCJFbGVtZW50IiwibmFtZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBUUE7OztlQUFBOzs7OEJBTndCO3dCQUVEO3NCQUNLO3NCQUM0Rjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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