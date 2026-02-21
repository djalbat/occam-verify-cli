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
            key: "findValidEquality",
            value: function findValidEquality(context) {
                var equalityNode = this.getEqualityNode(), equality = context.findEqualityByEqualityNode(equalityNode), validEquality = equality; ///
                return validEquality;
            }
        },
        {
            key: "validate",
            value: function validate(stated, context) {
                var equality = false;
                var equalityString = this.getString(); ///
                context.trace("Validating the '".concat(equalityString, "' equality..."));
                var validEquality = this.isValid(context);
                if (validEquality !== null) {
                    equality = validEquality; ///
                    context.debug("...the '".concat(equalityString, "' equality is already valid."));
                } else {
                    var validates = false;
                    var termsValidate = this.validateTerms(context);
                    if (termsValidate) {
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
                        var equality1 = this; ///
                        this.assign(stated, context);
                        context.addEquality(equality1);
                        context.debug("...validated the '".concat(equalityString, "' equality."));
                    }
                }
                return equality;
            }
        },
        {
            key: "validateTerms",
            value: function validateTerms(context) {
                var _this = this;
                var termsValidate = false;
                var equalityString = this.getString(); ///
                context.trace("Validating the '".concat(equalityString, "' equality's terms..."));
                var leftTerm, rightTerm = null;
                leftTerm = this.leftTerm.validate(context, function() {
                    var validatesForwards;
                    rightTerm = _this.rightTerm.validate(context, function() {
                        var validatesForwards;
                        var leftTermType = _this.leftTerm.getType(), rightTermType = _this.rightTerm.getType(), leftTermTypeComparableToRightTermType = leftTermType.isComparableTo(rightTermType);
                        validatesForwards = leftTermTypeComparableToRightTermType; ///
                        return validatesForwards;
                    });
                    var rightTermValidates = rightTerm !== null;
                    validatesForwards = rightTermValidates; ///
                    return validatesForwards;
                });
                var leftTermValidates = leftTerm !== null;
                if (leftTermValidates) {
                    this.leftTerm = leftTerm;
                    this.rightTerm = rightTerm;
                    termsValidate = true;
                }
                if (termsValidate) {
                    context.debug("...validated the '".concat(equalityString, "' equality's terms."));
                }
                return termsValidate;
            }
        },
        {
            key: "validateWhenStated",
            value: function validateWhenStated(context) {
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
            value: function assign(stated, context) {
                var equality = this, equalityAssignment = (0, _assign.equalityAssignmentFromEquality)(equality, context), leftVariableAssignment = (0, _assign.leftVariableAssignmentFromEquality)(equality, context), rightVariableAssignment = (0, _assign.rightVariableAssignmentFromEquality)(equality, context);
                var assignment;
                assignment = equalityAssignment; ///
                context.addAssignment(assignment);
                if (leftVariableAssignment !== null) {
                    assignment = leftVariableAssignment; ///
                    context.addAssignment(assignment);
                }
                if (rightVariableAssignment !== null) {
                    assignment = rightVariableAssignment; ///
                    context.addAssignment(assignment);
                }
            }
        }
    ]);
    return Equality;
}(_wrap_native_super(_occamlanguages.Element)), _define_property(_Equality, "name", "Equality"), _Equality));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L2VxdWFsaXR5LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBFbGVtZW50IH0gZnJvbSBcIm9jY2FtLWxhbmd1YWdlc1wiO1xuXG5pbXBvcnQgeyBkZWZpbmUgfSBmcm9tIFwiLi4vZWxlbWVudHNcIjtcbmltcG9ydCB7IGVxdWF0ZVRlcm1zIH0gZnJvbSBcIi4uL3Byb2Nlc3MvZXF1YXRlXCI7XG5pbXBvcnQgeyBlcXVhbGl0eUFzc2lnbm1lbnRGcm9tRXF1YWxpdHksIGxlZnRWYXJpYWJsZUFzc2lnbm1lbnRGcm9tRXF1YWxpdHksIHJpZ2h0VmFyaWFibGVBc3NpZ25tZW50RnJvbUVxdWFsaXR5IH0gZnJvbSBcIi4uL3Byb2Nlc3MvYXNzaWduXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZShjbGFzcyBFcXVhbGl0eSBleHRlbmRzIEVsZW1lbnQge1xuICBjb25zdHJ1Y3Rvcihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIGxlZnRUZXJtLCByaWdodFRlcm0pIHtcbiAgICBzdXBlcihjb250ZXh0LCBzdHJpbmcsIG5vZGUpO1xuXG4gICAgdGhpcy5sZWZ0VGVybSA9IGxlZnRUZXJtO1xuICAgIHRoaXMucmlnaHRUZXJtID0gcmlnaHRUZXJtO1xuICB9XG5cbiAgZ2V0TGVmdFRlcm0oKSB7XG4gICAgcmV0dXJuIHRoaXMubGVmdFRlcm07XG4gIH1cblxuICBnZXRSaWdodFRlcm0oKSB7XG4gICAgcmV0dXJuIHRoaXMucmlnaHRUZXJtO1xuICB9XG5cbiAgZ2V0RXF1YWxpdHlOb2RlKCkge1xuICAgIGNvbnN0IG5vZGUgPSB0aGlzLmdldE5vZGUoKSxcbiAgICAgICAgICBlcXVhbGl0eU5kZSA9IG5vZGU7IC8vL1xuXG4gICAgcmV0dXJuIGVxdWFsaXR5TmRlO1xuICB9XG5cbiAgZ2V0TGVmdFRlcm1Ob2RlKCkge1xuICAgIGNvbnN0IGxlZnRUZXJtTm9kZSA9IHRoaXMubGVmdFRlcm0uZ2V0Tm9kZSgpO1xuXG4gICAgcmV0dXJuIGxlZnRUZXJtTm9kZTtcbiAgfVxuXG4gIGdldFJpZ2h0VGVybU5vZGUoKSB7XG4gICAgY29uc3QgcmlnaHRUZXJtTm9kZSA9IHRoaXMucmlnaHRUZXJtLmdldE5vZGUoKTtcblxuICAgIHJldHVybiByaWdodFRlcm1Ob2RlO1xuICB9XG5cbiAgZ2V0VHlwZSgpIHtcbiAgICBsZXQgdHlwZTtcblxuICAgIGNvbnN0IGxlZnRUZXJtVHlwZSA9IHRoaXMubGVmdFRlcm0uZ2V0VHlwZSgpLFxuICAgICAgICAgIHJpZ2h0VGVybVR5cGUgPSB0aGlzLnJpZ2h0VGVybS5nZXRUeXBlKCksXG4gICAgICAgICAgbGVmdFRlcm1UeXBlRXF1YWxUb09yU3ViVHlwZU9mUmlnaHRUZXJtVHlwZSA9IGxlZnRUZXJtVHlwZS5pc0VxdWFsVG9PclN1YlR5cGVPZihyaWdodFRlcm1UeXBlKSxcbiAgICAgICAgICByaWdodFRlcm1UeXBlRXF1YWxUb09yU3ViVHlwZU9mTGVmdFRlcm1UeXBlID0gcmlnaHRUZXJtVHlwZS5pc0VxdWFsVG9PclN1YlR5cGVPZihsZWZ0VGVybVR5cGUpO1xuXG4gICAgaWYgKGxlZnRUZXJtVHlwZUVxdWFsVG9PclN1YlR5cGVPZlJpZ2h0VGVybVR5cGUpIHtcbiAgICAgIHR5cGUgPSBsZWZ0VGVybVR5cGU7ICAvLy9cbiAgICB9XG5cbiAgICBpZiAocmlnaHRUZXJtVHlwZUVxdWFsVG9PclN1YlR5cGVPZkxlZnRUZXJtVHlwZSkge1xuICAgICAgdHlwZSA9IHJpZ2h0VGVybVR5cGU7IC8vL1xuICAgIH1cblxuICAgIHJldHVybiB0eXBlO1xuICB9XG5cbiAgZ2V0VGVybXMoKSB7XG4gICAgY29uc3QgdGVybXMgPSBbXG4gICAgICB0aGlzLmxlZnRUZXJtLFxuICAgICAgdGhpcy5yaWdodFRlcm1cbiAgICBdO1xuXG4gICAgcmV0dXJuIHRlcm1zO1xuICB9XG5cbiAgbWF0Y2hFcXVhbGl0eU5vZGUoZXF1YWxpdHlOb2RlKSB7XG4gICAgY29uc3QgZXF1YWxpdHlOb2RlQSA9IGVxdWFsaXR5Tm9kZTsgLy8vXG5cbiAgICBlcXVhbGl0eU5vZGUgPSB0aGlzLmdldEVxdWFsaXR5Tm9kZSgpO1xuXG4gICAgY29uc3QgZXF1YWxpdHlOb2RlQiA9IGVxdWFsaXR5Tm9kZSwgLy8vXG4gICAgICAgICAgZXF1YWxpdHlOb2RlQUFNYXRjaGVzRXF1YWxpdHlCTm9kZUIgPSBlcXVhbGl0eU5vZGVBLm1hdGNoKGVxdWFsaXR5Tm9kZUIpLFxuICAgICAgICAgIGVxdWFsaXR5Tm9kZU1hdGNoZXMgPSBlcXVhbGl0eU5vZGVBQU1hdGNoZXNFcXVhbGl0eUJOb2RlQjsgLy8vXG5cbiAgICByZXR1cm4gZXF1YWxpdHlOb2RlTWF0Y2hlcztcbiAgfVxuXG4gIGlzUmVmbGV4aXZlKCkge1xuICAgIGNvbnN0IGxlZnRUZXJtU3RyaW5nID0gdGhpcy5sZWZ0VGVybS5nZXRTdHJpbmcoKSxcbiAgICAgICAgICByaWdodFRlcm1TdHJpbmcgPSB0aGlzLnJpZ2h0VGVybS5nZXRTdHJpbmcoKSxcbiAgICAgICAgICByZWZsZXhpdmUgPSAobGVmdFRlcm1TdHJpbmcgPT09IHJpZ2h0VGVybVN0cmluZyk7XG5cbiAgICByZXR1cm4gcmVmbGV4aXZlO1xuICB9XG5cbiAgaXNFcXVhbFRvKGVxdWFsaXR5KSB7XG4gICAgY29uc3QgZXF1YWxpdHlOb2RlID0gZXF1YWxpdHkuZ2V0Tm9kZSgpLFxuICAgICAgICAgIGVxdWFsaXR5Tm9kZU1hdGNoZXMgPSB0aGlzLm1hdGNoRXF1YWxpdHlOb2RlKGVxdWFsaXR5Tm9kZSksXG4gICAgICAgICAgZXF1YWxUbyA9IGVxdWFsaXR5Tm9kZU1hdGNoZXM7ICAvLy9cblxuICAgIHJldHVybiBlcXVhbFRvO1xuICB9XG5cbiAgaXNFcXVhbChjb250ZXh0KSB7XG4gICAgbGV0IGVxdWFsID0gZmFsc2U7XG5cbiAgICBjb25zdCBsZWZ0VGVybU5vZGUgPSB0aGlzLmxlZnRUZXJtLmdldE5vZGUoKSxcbiAgICAgICAgICByaWdodFRlcm1Ob2RlID0gdGhpcy5yaWdodFRlcm0uZ2V0Tm9kZSgpLFxuICAgICAgICAgIHRlcm1zRXF1YXRlID0gZXF1YXRlVGVybXMobGVmdFRlcm1Ob2RlLCByaWdodFRlcm1Ob2RlLCBjb250ZXh0KTtcblxuICAgIGlmICh0ZXJtc0VxdWF0ZSkge1xuICAgICAgZXF1YWwgPSB0cnVlO1xuICAgIH1cblxuICAgIHJldHVybiBlcXVhbDtcbiAgfVxuXG4gIGZpbmRWYWxpZEVxdWFsaXR5KGNvbnRleHQpIHtcbiAgICBjb25zdCBlcXVhbGl0eU5vZGUgPSB0aGlzLmdldEVxdWFsaXR5Tm9kZSgpLFxuICAgICAgICAgIGVxdWFsaXR5ID0gY29udGV4dC5maW5kRXF1YWxpdHlCeUVxdWFsaXR5Tm9kZShlcXVhbGl0eU5vZGUpLFxuICAgICAgICAgIHZhbGlkRXF1YWxpdHkgPSBlcXVhbGl0eTsgIC8vL1xuXG4gICAgcmV0dXJuIHZhbGlkRXF1YWxpdHk7XG4gIH1cblxuICB2YWxpZGF0ZShzdGF0ZWQsIGNvbnRleHQpIHtcbiAgICBsZXQgZXF1YWxpdHkgPSBmYWxzZTtcblxuICAgIGNvbnN0IGVxdWFsaXR5U3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWYWxpZGF0aW5nIHRoZSAnJHtlcXVhbGl0eVN0cmluZ30nIGVxdWFsaXR5Li4uYCk7XG5cbiAgICBjb25zdCB2YWxpZEVxdWFsaXR5ID0gdGhpcy5pc1ZhbGlkKGNvbnRleHQpO1xuXG4gICAgaWYgKHZhbGlkRXF1YWxpdHkgIT09IG51bGwpIHtcbiAgICAgIGVxdWFsaXR5ID0gdmFsaWRFcXVhbGl0eTsgLy8vXG5cbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnRoZSAnJHtlcXVhbGl0eVN0cmluZ30nIGVxdWFsaXR5IGlzIGFscmVhZHkgdmFsaWQuYCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGxldCB2YWxpZGF0ZXMgPSBmYWxzZTtcblxuICAgICAgY29uc3QgdGVybXNWYWxpZGF0ZSA9IHRoaXMudmFsaWRhdGVUZXJtcyhjb250ZXh0KTtcblxuICAgICAgaWYgKHRlcm1zVmFsaWRhdGUpIHtcbiAgICAgICAgbGV0IHZhbGlkYXRlc1doZW5TdGF0ZWQgPSBmYWxzZSxcbiAgICAgICAgICAgIHZhbGlkYXRlc1doZW5EZXJpdmVkID0gZmFsc2U7XG5cbiAgICAgICAgaWYgKHN0YXRlZCkge1xuICAgICAgICAgIHZhbGlkYXRlc1doZW5TdGF0ZWQgPSB0aGlzLnZhbGlkYXRlV2hlblN0YXRlZChjb250ZXh0KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB2YWxpZGF0ZXNXaGVuRGVyaXZlZCA9IHRoaXMudmFsaWRhdGVXaGVuRGVyaXZlZChjb250ZXh0KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh2YWxpZGF0ZXNXaGVuU3RhdGVkIHx8IHZhbGlkYXRlc1doZW5EZXJpdmVkKSB7XG4gICAgICAgICAgdmFsaWRhdGVzID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAodmFsaWRhdGVzKSB7XG4gICAgICAgIGNvbnN0IGVxdWFsaXR5ID0gdGhpczsgIC8vL1xuXG4gICAgICAgIHRoaXMuYXNzaWduKHN0YXRlZCwgY29udGV4dCk7XG5cbiAgICAgICAgY29udGV4dC5hZGRFcXVhbGl0eShlcXVhbGl0eSk7XG5cbiAgICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmFsaWRhdGVkIHRoZSAnJHtlcXVhbGl0eVN0cmluZ30nIGVxdWFsaXR5LmApO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBlcXVhbGl0eTtcbiAgfVxuXG4gIHZhbGlkYXRlVGVybXMoY29udGV4dCkge1xuICAgIGxldCB0ZXJtc1ZhbGlkYXRlID0gZmFsc2U7XG5cbiAgICBjb25zdCBlcXVhbGl0eVN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7IC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmFsaWRhdGluZyB0aGUgJyR7ZXF1YWxpdHlTdHJpbmd9JyBlcXVhbGl0eSdzIHRlcm1zLi4uYCk7XG5cbiAgICBsZXQgbGVmdFRlcm0sXG4gICAgICAgIHJpZ2h0VGVybSA9IG51bGw7XG5cbiAgICBsZWZ0VGVybSA9IHRoaXMubGVmdFRlcm0udmFsaWRhdGUoY29udGV4dCwgKCkgPT4ge1xuICAgICAgICBsZXQgdmFsaWRhdGVzRm9yd2FyZHM7XG5cbiAgICAgICAgcmlnaHRUZXJtID0gdGhpcy5yaWdodFRlcm0udmFsaWRhdGUoY29udGV4dCwgKCkgPT4ge1xuICAgICAgICAgIGxldCB2YWxpZGF0ZXNGb3J3YXJkcztcblxuICAgICAgICAgIGNvbnN0IGxlZnRUZXJtVHlwZSA9IHRoaXMubGVmdFRlcm0uZ2V0VHlwZSgpLFxuICAgICAgICAgICAgICAgIHJpZ2h0VGVybVR5cGUgPSB0aGlzLnJpZ2h0VGVybS5nZXRUeXBlKCksXG4gICAgICAgICAgICAgICAgbGVmdFRlcm1UeXBlQ29tcGFyYWJsZVRvUmlnaHRUZXJtVHlwZSA9IGxlZnRUZXJtVHlwZS5pc0NvbXBhcmFibGVUbyhyaWdodFRlcm1UeXBlKTtcblxuICAgICAgICAgIHZhbGlkYXRlc0ZvcndhcmRzID0gbGVmdFRlcm1UeXBlQ29tcGFyYWJsZVRvUmlnaHRUZXJtVHlwZTsgIC8vL1xuXG4gICAgICAgICAgcmV0dXJuIHZhbGlkYXRlc0ZvcndhcmRzO1xuICAgICAgICB9KTtcblxuICAgICAgICBjb25zdCByaWdodFRlcm1WYWxpZGF0ZXMgPSAocmlnaHRUZXJtICE9PSBudWxsKTtcblxuICAgICAgICB2YWxpZGF0ZXNGb3J3YXJkcyA9IHJpZ2h0VGVybVZhbGlkYXRlczsgLy8vXG5cbiAgICAgICAgcmV0dXJuIHZhbGlkYXRlc0ZvcndhcmRzO1xuICAgICAgfSk7XG5cbiAgICBjb25zdCBsZWZ0VGVybVZhbGlkYXRlcyA9IChsZWZ0VGVybSAhPT0gbnVsbCk7XG5cbiAgICBpZiAobGVmdFRlcm1WYWxpZGF0ZXMpIHtcbiAgICAgIHRoaXMubGVmdFRlcm0gPSBsZWZ0VGVybTtcblxuICAgICAgdGhpcy5yaWdodFRlcm0gPSByaWdodFRlcm07XG5cbiAgICAgIHRlcm1zVmFsaWRhdGUgPSB0cnVlO1xuICAgIH1cblxuICAgIGlmICh0ZXJtc1ZhbGlkYXRlKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52YWxpZGF0ZWQgdGhlICcke2VxdWFsaXR5U3RyaW5nfScgZXF1YWxpdHkncyB0ZXJtcy5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGVybXNWYWxpZGF0ZTtcbiAgfVxuXG4gIHZhbGlkYXRlV2hlblN0YXRlZChjb250ZXh0KSB7XG4gICAgbGV0IHZhbGlkYXRlc1doZW5TdGF0ZWQ7XG5cbiAgICBjb25zdCBlcXVhbGl0eVN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7IC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmFsaWRhdGluZyB0aGUgJyR7ZXF1YWxpdHlTdHJpbmd9JyBzdGF0ZWQgZXF1YWxpdHkuLi5gKTtcblxuICAgIHZhbGlkYXRlc1doZW5TdGF0ZWQgPSB0cnVlO1xuXG4gICAgaWYgKHZhbGlkYXRlc1doZW5TdGF0ZWQpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZhbGlkYXRlZCB0aGUgJyR7ZXF1YWxpdHlTdHJpbmd9JyBzdGF0ZWQgZXF1YWxpdHkuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZhbGlkYXRlc1doZW5TdGF0ZWQ7XG4gIH1cblxuICB2YWxpZGF0ZVdoZW5EZXJpdmVkKGNvbnRleHQpIHtcbiAgICBsZXQgdmFsaWRhdGVzV2hlbkRlcml2ZWQ7XG5cbiAgICBjb25zdCBlcXVhbGl0eVN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7IC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmFsaWRhdGluZyB0aGUgJyR7ZXF1YWxpdHlTdHJpbmd9JyBkZXJpdmVkIGVxdWFsaXR5Li4uYCk7XG5cbiAgICB2YWxpZGF0ZXNXaGVuRGVyaXZlZCA9IHRydWU7ICAvLy9cblxuICAgIGlmICh2YWxpZGF0ZXNXaGVuRGVyaXZlZCkge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmFsaWRhdGVkIHRoZSAnJHtlcXVhbGl0eVN0cmluZ30nIGRlcml2ZWQgZXF1YWxpdHkuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZhbGlkYXRlc1doZW5EZXJpdmVkO1xuICB9XG5cbiAgYXNzaWduKHN0YXRlZCwgY29udGV4dCkge1xuICAgIGNvbnN0IGVxdWFsaXR5ID0gdGhpcywgIC8vL1xuICAgICAgICAgIGVxdWFsaXR5QXNzaWdubWVudCA9IGVxdWFsaXR5QXNzaWdubWVudEZyb21FcXVhbGl0eShlcXVhbGl0eSwgY29udGV4dCksXG4gICAgICAgICAgbGVmdFZhcmlhYmxlQXNzaWdubWVudCA9IGxlZnRWYXJpYWJsZUFzc2lnbm1lbnRGcm9tRXF1YWxpdHkoZXF1YWxpdHksIGNvbnRleHQpLFxuICAgICAgICAgIHJpZ2h0VmFyaWFibGVBc3NpZ25tZW50ID0gcmlnaHRWYXJpYWJsZUFzc2lnbm1lbnRGcm9tRXF1YWxpdHkoZXF1YWxpdHksIGNvbnRleHQpO1xuXG4gICAgbGV0IGFzc2lnbm1lbnQ7XG5cbiAgICBhc3NpZ25tZW50ID0gZXF1YWxpdHlBc3NpZ25tZW50OyAvLy9cblxuICAgIGNvbnRleHQuYWRkQXNzaWdubWVudChhc3NpZ25tZW50KTtcblxuICAgIGlmIChsZWZ0VmFyaWFibGVBc3NpZ25tZW50ICE9PSBudWxsKSB7XG4gICAgICBhc3NpZ25tZW50ID0gbGVmdFZhcmlhYmxlQXNzaWdubWVudDsgIC8vL1xuXG4gICAgICBjb250ZXh0LmFkZEFzc2lnbm1lbnQoYXNzaWdubWVudCk7XG4gICAgfVxuXG4gICAgaWYgKHJpZ2h0VmFyaWFibGVBc3NpZ25tZW50ICE9PSBudWxsKSB7XG4gICAgICBhc3NpZ25tZW50ID0gcmlnaHRWYXJpYWJsZUFzc2lnbm1lbnQ7ICAvLy9cblxuICAgICAgY29udGV4dC5hZGRBc3NpZ25tZW50KGFzc2lnbm1lbnQpO1xuICAgIH1cbiAgfVxuXG4gIHN0YXRpYyBuYW1lID0gXCJFcXVhbGl0eVwiO1xufSk7XG4iXSwibmFtZXMiOlsiZGVmaW5lIiwiRXF1YWxpdHkiLCJjb250ZXh0Iiwic3RyaW5nIiwibm9kZSIsImxlZnRUZXJtIiwicmlnaHRUZXJtIiwiZ2V0TGVmdFRlcm0iLCJnZXRSaWdodFRlcm0iLCJnZXRFcXVhbGl0eU5vZGUiLCJnZXROb2RlIiwiZXF1YWxpdHlOZGUiLCJnZXRMZWZ0VGVybU5vZGUiLCJsZWZ0VGVybU5vZGUiLCJnZXRSaWdodFRlcm1Ob2RlIiwicmlnaHRUZXJtTm9kZSIsImdldFR5cGUiLCJ0eXBlIiwibGVmdFRlcm1UeXBlIiwicmlnaHRUZXJtVHlwZSIsImxlZnRUZXJtVHlwZUVxdWFsVG9PclN1YlR5cGVPZlJpZ2h0VGVybVR5cGUiLCJpc0VxdWFsVG9PclN1YlR5cGVPZiIsInJpZ2h0VGVybVR5cGVFcXVhbFRvT3JTdWJUeXBlT2ZMZWZ0VGVybVR5cGUiLCJnZXRUZXJtcyIsInRlcm1zIiwibWF0Y2hFcXVhbGl0eU5vZGUiLCJlcXVhbGl0eU5vZGUiLCJlcXVhbGl0eU5vZGVBIiwiZXF1YWxpdHlOb2RlQiIsImVxdWFsaXR5Tm9kZUFBTWF0Y2hlc0VxdWFsaXR5Qk5vZGVCIiwibWF0Y2giLCJlcXVhbGl0eU5vZGVNYXRjaGVzIiwiaXNSZWZsZXhpdmUiLCJsZWZ0VGVybVN0cmluZyIsImdldFN0cmluZyIsInJpZ2h0VGVybVN0cmluZyIsInJlZmxleGl2ZSIsImlzRXF1YWxUbyIsImVxdWFsaXR5IiwiZXF1YWxUbyIsImlzRXF1YWwiLCJlcXVhbCIsInRlcm1zRXF1YXRlIiwiZXF1YXRlVGVybXMiLCJmaW5kVmFsaWRFcXVhbGl0eSIsImZpbmRFcXVhbGl0eUJ5RXF1YWxpdHlOb2RlIiwidmFsaWRFcXVhbGl0eSIsInZhbGlkYXRlIiwic3RhdGVkIiwiZXF1YWxpdHlTdHJpbmciLCJ0cmFjZSIsImlzVmFsaWQiLCJkZWJ1ZyIsInZhbGlkYXRlcyIsInRlcm1zVmFsaWRhdGUiLCJ2YWxpZGF0ZVRlcm1zIiwidmFsaWRhdGVzV2hlblN0YXRlZCIsInZhbGlkYXRlc1doZW5EZXJpdmVkIiwidmFsaWRhdGVXaGVuU3RhdGVkIiwidmFsaWRhdGVXaGVuRGVyaXZlZCIsImFzc2lnbiIsImFkZEVxdWFsaXR5IiwidmFsaWRhdGVzRm9yd2FyZHMiLCJsZWZ0VGVybVR5cGVDb21wYXJhYmxlVG9SaWdodFRlcm1UeXBlIiwiaXNDb21wYXJhYmxlVG8iLCJyaWdodFRlcm1WYWxpZGF0ZXMiLCJsZWZ0VGVybVZhbGlkYXRlcyIsImVxdWFsaXR5QXNzaWdubWVudCIsImVxdWFsaXR5QXNzaWdubWVudEZyb21FcXVhbGl0eSIsImxlZnRWYXJpYWJsZUFzc2lnbm1lbnQiLCJsZWZ0VmFyaWFibGVBc3NpZ25tZW50RnJvbUVxdWFsaXR5IiwicmlnaHRWYXJpYWJsZUFzc2lnbm1lbnQiLCJyaWdodFZhcmlhYmxlQXNzaWdubWVudEZyb21FcXVhbGl0eSIsImFzc2lnbm1lbnQiLCJhZGRBc3NpZ25tZW50IiwiRWxlbWVudCIsIm5hbWUiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQVFBOzs7ZUFBQTs7OzhCQU53Qjt3QkFFRDtzQkFDSztzQkFDNEY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRXhILFdBQWVBLElBQUFBLGdCQUFNLDZCQUFDOzthQUFNQyxTQUNkQyxPQUFPLEVBQUVDLE1BQU0sRUFBRUMsSUFBSSxFQUFFQyxRQUFRLEVBQUVDLFNBQVM7Z0NBRDVCTDs7Z0JBRXhCLGtCQUZ3QkE7WUFFbEJDO1lBQVNDO1lBQVFDOztRQUV2QixNQUFLQyxRQUFRLEdBQUdBO1FBQ2hCLE1BQUtDLFNBQVMsR0FBR0E7Ozs7O1lBR25CQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNGLFFBQVE7WUFDdEI7OztZQUVBRyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNGLFNBQVM7WUFDdkI7OztZQUVBRyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTUws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