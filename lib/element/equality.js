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
            key: "isEqualTo",
            value: function isEqualTo(equality) {
                var equalityNode = equality.getNode(), equalityNodeMatches = this.matchEqualityNode(equalityNode), equalTo = equalityNodeMatches; ///
                return equalTo;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L2VxdWFsaXR5LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBFbGVtZW50IH0gZnJvbSBcIm9jY2FtLWxhbmd1YWdlc1wiO1xuXG5pbXBvcnQgeyBkZWZpbmUgfSBmcm9tIFwiLi4vZWxlbWVudHNcIjtcbmltcG9ydCB7IGVxdWF0ZVRlcm1zIH0gZnJvbSBcIi4uL3Byb2Nlc3MvZXF1YXRlXCI7XG5pbXBvcnQgeyBlcXVhbGl0eUFzc2lnbm1lbnRGcm9tRXF1YWxpdHksIGxlZnRWYXJpYWJsZUFzc2lnbm1lbnRGcm9tRXF1YWxpdHksIHJpZ2h0VmFyaWFibGVBc3NpZ25tZW50RnJvbUVxdWFsaXR5IH0gZnJvbSBcIi4uL3Byb2Nlc3MvYXNzaWduXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZShjbGFzcyBFcXVhbGl0eSBleHRlbmRzIEVsZW1lbnQge1xuICBjb25zdHJ1Y3Rvcihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIGxlZnRUZXJtLCByaWdodFRlcm0pIHtcbiAgICBzdXBlcihjb250ZXh0LCBzdHJpbmcsIG5vZGUpO1xuXG4gICAgdGhpcy5sZWZ0VGVybSA9IGxlZnRUZXJtO1xuICAgIHRoaXMucmlnaHRUZXJtID0gcmlnaHRUZXJtO1xuICB9XG5cbiAgZ2V0TGVmdFRlcm0oKSB7XG4gICAgcmV0dXJuIHRoaXMubGVmdFRlcm07XG4gIH1cblxuICBnZXRSaWdodFRlcm0oKSB7XG4gICAgcmV0dXJuIHRoaXMucmlnaHRUZXJtO1xuICB9XG5cbiAgZ2V0RXF1YWxpdHlOb2RlKCkge1xuICAgIGNvbnN0IG5vZGUgPSB0aGlzLmdldE5vZGUoKSxcbiAgICAgICAgICBlcXVhbGl0eU5kZSA9IG5vZGU7IC8vL1xuXG4gICAgcmV0dXJuIGVxdWFsaXR5TmRlO1xuICB9XG5cbiAgZ2V0TGVmdFRlcm1Ob2RlKCkge1xuICAgIGNvbnN0IGxlZnRUZXJtTm9kZSA9IHRoaXMubGVmdFRlcm0uZ2V0Tm9kZSgpO1xuXG4gICAgcmV0dXJuIGxlZnRUZXJtTm9kZTtcbiAgfVxuXG4gIGdldFJpZ2h0VGVybU5vZGUoKSB7XG4gICAgY29uc3QgcmlnaHRUZXJtTm9kZSA9IHRoaXMucmlnaHRUZXJtLmdldE5vZGUoKTtcblxuICAgIHJldHVybiByaWdodFRlcm1Ob2RlO1xuICB9XG5cbiAgZ2V0VHlwZSgpIHtcbiAgICBsZXQgdHlwZTtcblxuICAgIGNvbnN0IGxlZnRUZXJtVHlwZSA9IHRoaXMubGVmdFRlcm0uZ2V0VHlwZSgpLFxuICAgICAgICAgIHJpZ2h0VGVybVR5cGUgPSB0aGlzLnJpZ2h0VGVybS5nZXRUeXBlKCksXG4gICAgICAgICAgbGVmdFRlcm1UeXBlRXF1YWxUb09yU3ViVHlwZU9mUmlnaHRUZXJtVHlwZSA9IGxlZnRUZXJtVHlwZS5pc0VxdWFsVG9PclN1YlR5cGVPZihyaWdodFRlcm1UeXBlKSxcbiAgICAgICAgICByaWdodFRlcm1UeXBlRXF1YWxUb09yU3ViVHlwZU9mTGVmdFRlcm1UeXBlID0gcmlnaHRUZXJtVHlwZS5pc0VxdWFsVG9PclN1YlR5cGVPZihsZWZ0VGVybVR5cGUpO1xuXG4gICAgaWYgKGxlZnRUZXJtVHlwZUVxdWFsVG9PclN1YlR5cGVPZlJpZ2h0VGVybVR5cGUpIHtcbiAgICAgIHR5cGUgPSBsZWZ0VGVybVR5cGU7ICAvLy9cbiAgICB9XG5cbiAgICBpZiAocmlnaHRUZXJtVHlwZUVxdWFsVG9PclN1YlR5cGVPZkxlZnRUZXJtVHlwZSkge1xuICAgICAgdHlwZSA9IHJpZ2h0VGVybVR5cGU7IC8vL1xuICAgIH1cblxuICAgIHJldHVybiB0eXBlO1xuICB9XG5cbiAgZ2V0VGVybXMoKSB7XG4gICAgY29uc3QgdGVybXMgPSBbXG4gICAgICB0aGlzLmxlZnRUZXJtLFxuICAgICAgdGhpcy5yaWdodFRlcm1cbiAgICBdO1xuXG4gICAgcmV0dXJuIHRlcm1zO1xuICB9XG5cbiAgbWF0Y2hFcXVhbGl0eU5vZGUoZXF1YWxpdHlOb2RlKSB7XG4gICAgY29uc3QgZXF1YWxpdHlOb2RlQSA9IGVxdWFsaXR5Tm9kZTsgLy8vXG5cbiAgICBlcXVhbGl0eU5vZGUgPSB0aGlzLmdldEVxdWFsaXR5Tm9kZSgpO1xuXG4gICAgY29uc3QgZXF1YWxpdHlOb2RlQiA9IGVxdWFsaXR5Tm9kZSwgLy8vXG4gICAgICAgICAgZXF1YWxpdHlOb2RlQUFNYXRjaGVzRXF1YWxpdHlCTm9kZUIgPSBlcXVhbGl0eU5vZGVBLm1hdGNoKGVxdWFsaXR5Tm9kZUIpLFxuICAgICAgICAgIGVxdWFsaXR5Tm9kZU1hdGNoZXMgPSBlcXVhbGl0eU5vZGVBQU1hdGNoZXNFcXVhbGl0eUJOb2RlQjsgLy8vXG5cbiAgICByZXR1cm4gZXF1YWxpdHlOb2RlTWF0Y2hlcztcbiAgfVxuXG4gIGlzUmVmbGV4aXZlKCkge1xuICAgIGNvbnN0IGxlZnRUZXJtU3RyaW5nID0gdGhpcy5sZWZ0VGVybS5nZXRTdHJpbmcoKSxcbiAgICAgICAgICByaWdodFRlcm1TdHJpbmcgPSB0aGlzLnJpZ2h0VGVybS5nZXRTdHJpbmcoKSxcbiAgICAgICAgICByZWZsZXhpdmUgPSAobGVmdFRlcm1TdHJpbmcgPT09IHJpZ2h0VGVybVN0cmluZyk7XG5cbiAgICByZXR1cm4gcmVmbGV4aXZlO1xuICB9XG5cbiAgaXNFcXVhbFRvKGVxdWFsaXR5KSB7XG4gICAgY29uc3QgZXF1YWxpdHlOb2RlID0gZXF1YWxpdHkuZ2V0Tm9kZSgpLFxuICAgICAgICAgIGVxdWFsaXR5Tm9kZU1hdGNoZXMgPSB0aGlzLm1hdGNoRXF1YWxpdHlOb2RlKGVxdWFsaXR5Tm9kZSksXG4gICAgICAgICAgZXF1YWxUbyA9IGVxdWFsaXR5Tm9kZU1hdGNoZXM7ICAvLy9cblxuICAgIHJldHVybiBlcXVhbFRvO1xuICB9XG5cbiAgaXNFcXVhbChjb250ZXh0KSB7XG4gICAgbGV0IGVxdWFsID0gZmFsc2U7XG5cbiAgICBjb25zdCBsZWZ0VGVybU5vZGUgPSB0aGlzLmxlZnRUZXJtLmdldE5vZGUoKSxcbiAgICAgICAgICByaWdodFRlcm1Ob2RlID0gdGhpcy5yaWdodFRlcm0uZ2V0Tm9kZSgpLFxuICAgICAgICAgIHRlcm1zRXF1YXRlID0gZXF1YXRlVGVybXMobGVmdFRlcm1Ob2RlLCByaWdodFRlcm1Ob2RlLCBjb250ZXh0KTtcblxuICAgIGlmICh0ZXJtc0VxdWF0ZSkge1xuICAgICAgZXF1YWwgPSB0cnVlO1xuICAgIH1cblxuICAgIHJldHVybiBlcXVhbDtcbiAgfVxuXG4gIGlzVmFsaWQoY29udGV4dCkge1xuICAgIGNvbnN0IGVxdWFsaXR5Tm9kZSA9IHRoaXMuZ2V0RXF1YWxpdHlOb2RlKCksXG4gICAgICAgICAgZXF1YWxpdHlQcmVzZW50ID0gY29udGV4dC5pc0VxdWFsaXR5UHJlc2VudEJ5RXF1YWxpdHlOb2RlKGVxdWFsaXR5Tm9kZSksXG4gICAgICAgICAgdmFsaWQgPSBlcXVhbGl0eVByZXNlbnQ7ICAvLy9cblxuICAgIHJldHVybiB2YWxpZDtcbiAgfVxuXG4gIHZhbGlkYXRlKGFzc2lnbm1lbnRzLCBzdGF0ZWQsIGNvbnRleHQpIHtcbiAgICBsZXQgdmFsaWRhdGVzID0gZmFsc2U7XG5cbiAgICBjb25zdCBlcXVhbGl0eVN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7IC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmFsaWRhdGluZyB0aGUgJyR7ZXF1YWxpdHlTdHJpbmd9JyBlcXVhbGl0eS4uLmApO1xuXG4gICAgY29uc3QgdmFsaWQgPSB0aGlzLmlzVmFsaWQoY29udGV4dCk7XG5cbiAgICBpZiAodmFsaWQpIHtcbiAgICAgIHZhbGlkYXRlcyA9IHRydWU7XG5cbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnRoZSAnJHtlcXVhbGl0eVN0cmluZ30nIGVxdWFsaXR5IGlzIGFscmVhZHkgdmFsaWQuYCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHRlcm1zVmFsaWRhdGUgPSB0aGlzLnZhbGlkYXRlVGVybXMoY29udGV4dCk7XG5cbiAgICAgIGlmICh0ZXJtc1ZhbGlkYXRlKSB7XG4gICAgICAgIGxldCB2YWxpZGF0ZXNXaGVuU3RhdGVkID0gZmFsc2UsXG4gICAgICAgICAgICB2YWxpZGF0ZXNXaGVuRGVyaXZlZCA9IGZhbHNlO1xuXG4gICAgICAgIGlmIChzdGF0ZWQpIHtcbiAgICAgICAgICB2YWxpZGF0ZXNXaGVuU3RhdGVkID0gdGhpcy52YWxpZGF0ZVdoZW5TdGF0ZWQoYXNzaWdubWVudHMsIGNvbnRleHQpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHZhbGlkYXRlc1doZW5EZXJpdmVkID0gdGhpcy52YWxpZGF0ZVdoZW5EZXJpdmVkKGNvbnRleHQpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHZhbGlkYXRlc1doZW5TdGF0ZWQgfHwgdmFsaWRhdGVzV2hlbkRlcml2ZWQpIHtcbiAgICAgICAgICB2YWxpZGF0ZXMgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmICh2YWxpZGF0ZXMpIHtcbiAgICAgICAgY29uc3QgZXF1YWxpdHkgPSB0aGlzOyAgLy8vXG5cbiAgICAgICAgY29udGV4dC5hZGRFcXVhbGl0eShlcXVhbGl0eSk7XG5cbiAgICAgICAgdGhpcy5hc3NpZ24oYXNzaWdubWVudHMsIHN0YXRlZCwgY29udGV4dCk7XG5cbiAgICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmFsaWRhdGVkIHRoZSAnJHtlcXVhbGl0eVN0cmluZ30nIGVxdWFsaXR5LmApO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB2YWxpZGF0ZXM7XG4gIH1cblxuICB2YWxpZGF0ZVRlcm1zKGNvbnRleHQpIHtcbiAgICBsZXQgdGVybXNWYWxpZGF0ZTtcblxuICAgIGNvbnN0IGVxdWFsaXR5U3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWYWxpZGF0aW5nIHRoZSAnJHtlcXVhbGl0eVN0cmluZ30nIGVxdWFsaXR5J3MgdGVybXMuLi5gKTtcblxuICAgIGNvbnN0IGxlZnRUZXJtVmFsaWRhdGVzID0gdGhpcy5sZWZ0VGVybS52YWxpZGF0ZShjb250ZXh0LCAoKSA9PiB7XG4gICAgICBsZXQgdmFsaWRhdGVzRm9yd2FyZHM7XG5cbiAgICAgIGNvbnN0IHJpZ2h0VGVybVZhbGlkYXRlcyA9IHRoaXMucmlnaHRUZXJtLnZhbGlkYXRlKGNvbnRleHQsICgpID0+IHtcbiAgICAgICAgbGV0IHZhbGlkYXRlc0ZvcndhcmRzO1xuXG4gICAgICAgIGNvbnN0IGxlZnRUZXJtVHlwZSA9IHRoaXMubGVmdFRlcm0uZ2V0VHlwZSgpLFxuICAgICAgICAgICAgICByaWdodFRlcm1UeXBlID0gdGhpcy5yaWdodFRlcm0uZ2V0VHlwZSgpLFxuICAgICAgICAgICAgICBsZWZ0VGVybVR5cGVDb21wYXJhYmxlVG9SaWdodFRlcm1UeXBlID0gbGVmdFRlcm1UeXBlLmlzQ29tcGFyYWJsZVRvKHJpZ2h0VGVybVR5cGUpO1xuXG4gICAgICAgIHZhbGlkYXRlc0ZvcndhcmRzID0gbGVmdFRlcm1UeXBlQ29tcGFyYWJsZVRvUmlnaHRUZXJtVHlwZTsgIC8vL1xuXG4gICAgICAgIHJldHVybiB2YWxpZGF0ZXNGb3J3YXJkcztcbiAgICAgIH0pO1xuXG4gICAgICB2YWxpZGF0ZXNGb3J3YXJkcyA9IHJpZ2h0VGVybVZhbGlkYXRlczsgLy8vXG5cbiAgICAgIHJldHVybiB2YWxpZGF0ZXNGb3J3YXJkcztcbiAgICB9KTtcblxuICAgIHRlcm1zVmFsaWRhdGUgPSBsZWZ0VGVybVZhbGlkYXRlczsgLy8vXG5cbiAgICBpZiAodGVybXNWYWxpZGF0ZSkge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmFsaWRhdGVkIHRoZSAnJHtlcXVhbGl0eVN0cmluZ30nIGVxdWFsaXR5J3MgdGVybXMuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRlcm1zVmFsaWRhdGU7XG4gIH1cblxuICB2YWxpZGF0ZVdoZW5TdGF0ZWQoYXNzaWdubWVudHMsIGNvbnRleHQpIHtcbiAgICBsZXQgdmFsaWRhdGVzV2hlblN0YXRlZDtcblxuICAgIGNvbnN0IGVxdWFsaXR5U3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWYWxpZGF0aW5nIHRoZSAnJHtlcXVhbGl0eVN0cmluZ30nIHN0YXRlZCBlcXVhbGl0eS4uLmApO1xuXG4gICAgdmFsaWRhdGVzV2hlblN0YXRlZCA9IHRydWU7XG5cbiAgICBpZiAodmFsaWRhdGVzV2hlblN0YXRlZCkge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmFsaWRhdGVkIHRoZSAnJHtlcXVhbGl0eVN0cmluZ30nIHN0YXRlZCBlcXVhbGl0eS5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmFsaWRhdGVzV2hlblN0YXRlZDtcbiAgfVxuXG4gIHZhbGlkYXRlV2hlbkRlcml2ZWQoY29udGV4dCkge1xuICAgIGxldCB2YWxpZGF0ZXNXaGVuRGVyaXZlZDtcblxuICAgIGNvbnN0IGVxdWFsaXR5U3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWYWxpZGF0aW5nIHRoZSAnJHtlcXVhbGl0eVN0cmluZ30nIGRlcml2ZWQgZXF1YWxpdHkuLi5gKTtcblxuICAgIHZhbGlkYXRlc1doZW5EZXJpdmVkID0gdHJ1ZTsgIC8vL1xuXG4gICAgaWYgKHZhbGlkYXRlc1doZW5EZXJpdmVkKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52YWxpZGF0ZWQgdGhlICcke2VxdWFsaXR5U3RyaW5nfScgZGVyaXZlZCBlcXVhbGl0eS5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmFsaWRhdGVzV2hlbkRlcml2ZWQ7XG4gIH1cblxuICBhc3NpZ24oYXNzaWdubWVudHMsIHN0YXRlZCwgY29udGV4dCkge1xuICAgIGlmIChhc3NpZ25tZW50cyA9PT0gbnVsbCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IGVxdWFsaXR5ID0gdGhpcywgIC8vL1xuICAgICAgICAgIGVxdWFsaXR5QXNzaWdubWVudCA9IGVxdWFsaXR5QXNzaWdubWVudEZyb21FcXVhbGl0eShlcXVhbGl0eSwgY29udGV4dCksXG4gICAgICAgICAgbGVmdFZhcmlhYmxlQXNzaWdubWVudCA9IGxlZnRWYXJpYWJsZUFzc2lnbm1lbnRGcm9tRXF1YWxpdHkoZXF1YWxpdHksIGNvbnRleHQpLFxuICAgICAgICAgIHJpZ2h0VmFyaWFibGVBc3NpZ25tZW50ID0gcmlnaHRWYXJpYWJsZUFzc2lnbm1lbnRGcm9tRXF1YWxpdHkoZXF1YWxpdHksIGNvbnRleHQpO1xuXG4gICAgbGV0IGFzc2lnbm1lbnQ7XG5cbiAgICBhc3NpZ25tZW50ID0gZXF1YWxpdHlBc3NpZ25tZW50OyAvLy9cblxuICAgIGFzc2lnbm1lbnRzLnB1c2goYXNzaWdubWVudCk7XG5cbiAgICBpZiAobGVmdFZhcmlhYmxlQXNzaWdubWVudCAhPT0gbnVsbCkge1xuICAgICAgYXNzaWdubWVudCA9IGxlZnRWYXJpYWJsZUFzc2lnbm1lbnQ7ICAvLy9cblxuICAgICAgYXNzaWdubWVudHMucHVzaChhc3NpZ25tZW50KTtcbiAgICB9XG5cbiAgICBpZiAocmlnaHRWYXJpYWJsZUFzc2lnbm1lbnQgIT09IG51bGwpIHtcbiAgICAgIGFzc2lnbm1lbnQgPSByaWdodFZhcmlhYmxlQXNzaWdubWVudDsgIC8vL1xuXG4gICAgICBhc3NpZ25tZW50cy5wdXNoKGFzc2lnbm1lbnQpO1xuICAgIH1cbiAgfVxuXG4gIHN0YXRpYyBuYW1lID0gXCJFcXVhbGl0eVwiO1xufSk7XG4iXSwibmFtZXMiOlsiZGVmaW5lIiwiRXF1YWxpdHkiLCJjb250ZXh0Iiwic3RyaW5nIiwibm9kZSIsImxlZnRUZXJtIiwicmlnaHRUZXJtIiwiZ2V0TGVmdFRlcm0iLCJnZXRSaWdodFRlcm0iLCJnZXRFcXVhbGl0eU5vZGUiLCJnZXROb2RlIiwiZXF1YWxpdHlOZGUiLCJnZXRMZWZ0VGVybU5vZGUiLCJsZWZ0VGVybU5vZGUiLCJnZXRSaWdodFRlcm1Ob2RlIiwicmlnaHRUZXJtTm9kZSIsImdldFR5cGUiLCJ0eXBlIiwibGVmdFRlcm1UeXBlIiwicmlnaHRUZXJtVHlwZSIsImxlZnRUZXJtVHlwZUVxdWFsVG9PclN1YlR5cGVPZlJpZ2h0VGVybVR5cGUiLCJpc0VxdWFsVG9PclN1YlR5cGVPZiIsInJpZ2h0VGVybVR5cGVFcXVhbFRvT3JTdWJUeXBlT2ZMZWZ0VGVybVR5cGUiLCJnZXRUZXJtcyIsInRlcm1zIiwibWF0Y2hFcXVhbGl0eU5vZGUiLCJlcXVhbGl0eU5vZGUiLCJlcXVhbGl0eU5vZGVBIiwiZXF1YWxpdHlOb2RlQiIsImVxdWFsaXR5Tm9kZUFBTWF0Y2hlc0VxdWFsaXR5Qk5vZGVCIiwibWF0Y2giLCJlcXVhbGl0eU5vZGVNYXRjaGVzIiwiaXNSZWZsZXhpdmUiLCJsZWZ0VGVybVN0cmluZyIsImdldFN0cmluZyIsInJpZ2h0VGVybVN0cmluZyIsInJlZmxleGl2ZSIsImlzRXF1YWxUbyIsImVxdWFsaXR5IiwiZXF1YWxUbyIsImlzRXF1YWwiLCJlcXVhbCIsInRlcm1zRXF1YXRlIiwiZXF1YXRlVGVybXMiLCJpc1ZhbGlkIiwiZXF1YWxpdHlQcmVzZW50IiwiaXNFcXVhbGl0eVByZXNlbnRCeUVxdWFsaXR5Tm9kZSIsInZhbGlkIiwidmFsaWRhdGUiLCJhc3NpZ25tZW50cyIsInN0YXRlZCIsInZhbGlkYXRlcyIsImVxdWFsaXR5U3RyaW5nIiwidHJhY2UiLCJkZWJ1ZyIsInRlcm1zVmFsaWRhdGUiLCJ2YWxpZGF0ZVRlcm1zIiwidmFsaWRhdGVzV2hlblN0YXRlZCIsInZhbGlkYXRlc1doZW5EZXJpdmVkIiwidmFsaWRhdGVXaGVuU3RhdGVkIiwidmFsaWRhdGVXaGVuRGVyaXZlZCIsImFkZEVxdWFsaXR5IiwiYXNzaWduIiwibGVmdFRlcm1WYWxpZGF0ZXMiLCJ2YWxpZGF0ZXNGb3J3YXJkcyIsInJpZ2h0VGVybVZhbGlkYXRlcyIsImxlZnRUZXJtVHlwZUNvbXBhcmFibGVUb1JpZ2h0VGVybVR5cGUiLCJpc0NvbXBhcmFibGVUbyIsImVxdWFsaXR5QXNzaWdubWVudCIsImVxdWFsaXR5QXNzaWdubWVudEZyb21FcXVhbGl0eSIsImxlZnRWYXJpYWJsZUFzc2lnbm1lbnQiLCJsZWZ0VmFyaWFibGVBc3NpZ25tZW50RnJvbUVxdWFsaXR5IiwicmlnaHRWYXJpYWJsZUFzc2lnbm1lbnQiLCJyaWdodFZhcmlhYmxlQXNzaWdubWVudEZyb21FcXVhbGl0eSIsImFzc2lnbm1lbnQiLCJwdXNoIiwiRWxlbWVudCIsIm5hbWUiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQVFBOzs7ZUFBQTs7OzhCQU53Qjt3QkFFRDtzQkFDSztzQkFDNEY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRXhILFdBQWVBLElBQUFBLGdCQUFNLDZCQUFDOzthQUFNQyxTQUNkQyxPQUFPLEVBQUVDLE1BQU0sRUFBRUMsSUFBSSxFQUFFQyxRQUFRLEVBQUVDLFNBQVM7Z0NBRDVCTDs7Z0JBRXhCLGtCQUZ3QkE7WUFFbEJDO1lBQVNDO1lBQVFDOztRQUV2QixNQUFLQyxRQUFRLEdBQUdBO1FBQ2hCLE1BQUtDLFNBQVMsR0FBR0E7Ozs7O1lBR25CQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNGLFFBQVE7WUFDdEI7OztZQUVBRyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNGLFNBQVM7WUFDdkI7OztZQUVBRyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTUwsT0FBTyxJQUFJLENBQUNNLE9BQU8sSUFDbkJDLGNBQWNQLE1BQU0sR0FBRztnQkFFN0IsT0FBT087WUFDVDs7O1lBRUFDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNQyxlQUFlLElBQUksQ0FBQ1IsUUFBUSxDQUFDSyxPQUFPO2dCQUUxQyxPQUFPRztZQUNUOzs7WUFFQUMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1DLGdCQUFnQixJQUFJLENBQUNULFNBQVMsQ0FBQ0ksT0FBTztn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