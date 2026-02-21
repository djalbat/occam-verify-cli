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
                var equality = null;
                var equalityString = this.getString(); ///
                context.trace("Validating the '".concat(equalityString, "' equality..."));
                var validEquality = this.findValidEquality(context);
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
                        equality = this; ///
                        this.assign(stated, context);
                        context.addEquality(equality);
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
                var leftTerm, rightTerm;
                leftTerm = this.leftTerm.validate(context, function() {
                    var validatesForwards = false;
                    rightTerm = _this.rightTerm.validate(context, function() {
                        var validatesForwards = true;
                        return validatesForwards;
                    });
                    if (rightTerm !== null) {
                        validatesForwards = true;
                    }
                    return validatesForwards;
                });
                if (leftTerm !== null) {
                    var leftTermType = leftTerm.getType(), rightTermType = rightTerm.getType(), leftTermTypeComparableToRightTermType = leftTermType.isComparableTo(rightTermType);
                    if (leftTermTypeComparableToRightTermType) {
                        this.leftTerm = leftTerm;
                        this.rightTerm = rightTerm;
                        termsValidate = true;
                    }
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L2VxdWFsaXR5LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBFbGVtZW50IH0gZnJvbSBcIm9jY2FtLWxhbmd1YWdlc1wiO1xuXG5pbXBvcnQgeyBkZWZpbmUgfSBmcm9tIFwiLi4vZWxlbWVudHNcIjtcbmltcG9ydCB7IGVxdWF0ZVRlcm1zIH0gZnJvbSBcIi4uL3Byb2Nlc3MvZXF1YXRlXCI7XG5pbXBvcnQgeyBlcXVhbGl0eUFzc2lnbm1lbnRGcm9tRXF1YWxpdHksIGxlZnRWYXJpYWJsZUFzc2lnbm1lbnRGcm9tRXF1YWxpdHksIHJpZ2h0VmFyaWFibGVBc3NpZ25tZW50RnJvbUVxdWFsaXR5IH0gZnJvbSBcIi4uL3Byb2Nlc3MvYXNzaWduXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZShjbGFzcyBFcXVhbGl0eSBleHRlbmRzIEVsZW1lbnQge1xuICBjb25zdHJ1Y3Rvcihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIGxlZnRUZXJtLCByaWdodFRlcm0pIHtcbiAgICBzdXBlcihjb250ZXh0LCBzdHJpbmcsIG5vZGUpO1xuXG4gICAgdGhpcy5sZWZ0VGVybSA9IGxlZnRUZXJtO1xuICAgIHRoaXMucmlnaHRUZXJtID0gcmlnaHRUZXJtO1xuICB9XG5cbiAgZ2V0TGVmdFRlcm0oKSB7XG4gICAgcmV0dXJuIHRoaXMubGVmdFRlcm07XG4gIH1cblxuICBnZXRSaWdodFRlcm0oKSB7XG4gICAgcmV0dXJuIHRoaXMucmlnaHRUZXJtO1xuICB9XG5cbiAgZ2V0RXF1YWxpdHlOb2RlKCkge1xuICAgIGNvbnN0IG5vZGUgPSB0aGlzLmdldE5vZGUoKSxcbiAgICAgICAgICBlcXVhbGl0eU5kZSA9IG5vZGU7IC8vL1xuXG4gICAgcmV0dXJuIGVxdWFsaXR5TmRlO1xuICB9XG5cbiAgZ2V0TGVmdFRlcm1Ob2RlKCkge1xuICAgIGNvbnN0IGxlZnRUZXJtTm9kZSA9IHRoaXMubGVmdFRlcm0uZ2V0Tm9kZSgpO1xuXG4gICAgcmV0dXJuIGxlZnRUZXJtTm9kZTtcbiAgfVxuXG4gIGdldFJpZ2h0VGVybU5vZGUoKSB7XG4gICAgY29uc3QgcmlnaHRUZXJtTm9kZSA9IHRoaXMucmlnaHRUZXJtLmdldE5vZGUoKTtcblxuICAgIHJldHVybiByaWdodFRlcm1Ob2RlO1xuICB9XG5cbiAgZ2V0VHlwZSgpIHtcbiAgICBsZXQgdHlwZTtcblxuICAgIGNvbnN0IGxlZnRUZXJtVHlwZSA9IHRoaXMubGVmdFRlcm0uZ2V0VHlwZSgpLFxuICAgICAgICAgIHJpZ2h0VGVybVR5cGUgPSB0aGlzLnJpZ2h0VGVybS5nZXRUeXBlKCksXG4gICAgICAgICAgbGVmdFRlcm1UeXBlRXF1YWxUb09yU3ViVHlwZU9mUmlnaHRUZXJtVHlwZSA9IGxlZnRUZXJtVHlwZS5pc0VxdWFsVG9PclN1YlR5cGVPZihyaWdodFRlcm1UeXBlKSxcbiAgICAgICAgICByaWdodFRlcm1UeXBlRXF1YWxUb09yU3ViVHlwZU9mTGVmdFRlcm1UeXBlID0gcmlnaHRUZXJtVHlwZS5pc0VxdWFsVG9PclN1YlR5cGVPZihsZWZ0VGVybVR5cGUpO1xuXG4gICAgaWYgKGxlZnRUZXJtVHlwZUVxdWFsVG9PclN1YlR5cGVPZlJpZ2h0VGVybVR5cGUpIHtcbiAgICAgIHR5cGUgPSBsZWZ0VGVybVR5cGU7ICAvLy9cbiAgICB9XG5cbiAgICBpZiAocmlnaHRUZXJtVHlwZUVxdWFsVG9PclN1YlR5cGVPZkxlZnRUZXJtVHlwZSkge1xuICAgICAgdHlwZSA9IHJpZ2h0VGVybVR5cGU7IC8vL1xuICAgIH1cblxuICAgIHJldHVybiB0eXBlO1xuICB9XG5cbiAgZ2V0VGVybXMoKSB7XG4gICAgY29uc3QgdGVybXMgPSBbXG4gICAgICB0aGlzLmxlZnRUZXJtLFxuICAgICAgdGhpcy5yaWdodFRlcm1cbiAgICBdO1xuXG4gICAgcmV0dXJuIHRlcm1zO1xuICB9XG5cbiAgbWF0Y2hFcXVhbGl0eU5vZGUoZXF1YWxpdHlOb2RlKSB7XG4gICAgY29uc3QgZXF1YWxpdHlOb2RlQSA9IGVxdWFsaXR5Tm9kZTsgLy8vXG5cbiAgICBlcXVhbGl0eU5vZGUgPSB0aGlzLmdldEVxdWFsaXR5Tm9kZSgpO1xuXG4gICAgY29uc3QgZXF1YWxpdHlOb2RlQiA9IGVxdWFsaXR5Tm9kZSwgLy8vXG4gICAgICAgICAgZXF1YWxpdHlOb2RlQUFNYXRjaGVzRXF1YWxpdHlCTm9kZUIgPSBlcXVhbGl0eU5vZGVBLm1hdGNoKGVxdWFsaXR5Tm9kZUIpLFxuICAgICAgICAgIGVxdWFsaXR5Tm9kZU1hdGNoZXMgPSBlcXVhbGl0eU5vZGVBQU1hdGNoZXNFcXVhbGl0eUJOb2RlQjsgLy8vXG5cbiAgICByZXR1cm4gZXF1YWxpdHlOb2RlTWF0Y2hlcztcbiAgfVxuXG4gIGlzUmVmbGV4aXZlKCkge1xuICAgIGNvbnN0IGxlZnRUZXJtU3RyaW5nID0gdGhpcy5sZWZ0VGVybS5nZXRTdHJpbmcoKSxcbiAgICAgICAgICByaWdodFRlcm1TdHJpbmcgPSB0aGlzLnJpZ2h0VGVybS5nZXRTdHJpbmcoKSxcbiAgICAgICAgICByZWZsZXhpdmUgPSAobGVmdFRlcm1TdHJpbmcgPT09IHJpZ2h0VGVybVN0cmluZyk7XG5cbiAgICByZXR1cm4gcmVmbGV4aXZlO1xuICB9XG5cbiAgaXNFcXVhbFRvKGVxdWFsaXR5KSB7XG4gICAgY29uc3QgZXF1YWxpdHlOb2RlID0gZXF1YWxpdHkuZ2V0Tm9kZSgpLFxuICAgICAgICAgIGVxdWFsaXR5Tm9kZU1hdGNoZXMgPSB0aGlzLm1hdGNoRXF1YWxpdHlOb2RlKGVxdWFsaXR5Tm9kZSksXG4gICAgICAgICAgZXF1YWxUbyA9IGVxdWFsaXR5Tm9kZU1hdGNoZXM7ICAvLy9cblxuICAgIHJldHVybiBlcXVhbFRvO1xuICB9XG5cbiAgaXNFcXVhbChjb250ZXh0KSB7XG4gICAgbGV0IGVxdWFsID0gZmFsc2U7XG5cbiAgICBjb25zdCBsZWZ0VGVybU5vZGUgPSB0aGlzLmxlZnRUZXJtLmdldE5vZGUoKSxcbiAgICAgICAgICByaWdodFRlcm1Ob2RlID0gdGhpcy5yaWdodFRlcm0uZ2V0Tm9kZSgpLFxuICAgICAgICAgIHRlcm1zRXF1YXRlID0gZXF1YXRlVGVybXMobGVmdFRlcm1Ob2RlLCByaWdodFRlcm1Ob2RlLCBjb250ZXh0KTtcblxuICAgIGlmICh0ZXJtc0VxdWF0ZSkge1xuICAgICAgZXF1YWwgPSB0cnVlO1xuICAgIH1cblxuICAgIHJldHVybiBlcXVhbDtcbiAgfVxuXG4gIGZpbmRWYWxpZEVxdWFsaXR5KGNvbnRleHQpIHtcbiAgICBjb25zdCBlcXVhbGl0eU5vZGUgPSB0aGlzLmdldEVxdWFsaXR5Tm9kZSgpLFxuICAgICAgICAgIGVxdWFsaXR5ID0gY29udGV4dC5maW5kRXF1YWxpdHlCeUVxdWFsaXR5Tm9kZShlcXVhbGl0eU5vZGUpLFxuICAgICAgICAgIHZhbGlkRXF1YWxpdHkgPSBlcXVhbGl0eTsgIC8vL1xuXG4gICAgcmV0dXJuIHZhbGlkRXF1YWxpdHk7XG4gIH1cblxuICB2YWxpZGF0ZShzdGF0ZWQsIGNvbnRleHQpIHtcbiAgICBsZXQgZXF1YWxpdHkgPSBudWxsO1xuXG4gICAgY29uc3QgZXF1YWxpdHlTdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZhbGlkYXRpbmcgdGhlICcke2VxdWFsaXR5U3RyaW5nfScgZXF1YWxpdHkuLi5gKTtcblxuICAgIGNvbnN0IHZhbGlkRXF1YWxpdHkgPSB0aGlzLmZpbmRWYWxpZEVxdWFsaXR5KGNvbnRleHQpO1xuXG4gICAgaWYgKHZhbGlkRXF1YWxpdHkgIT09IG51bGwpIHtcbiAgICAgIGVxdWFsaXR5ID0gdmFsaWRFcXVhbGl0eTsgLy8vXG5cbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnRoZSAnJHtlcXVhbGl0eVN0cmluZ30nIGVxdWFsaXR5IGlzIGFscmVhZHkgdmFsaWQuYCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGxldCB2YWxpZGF0ZXMgPSBmYWxzZTtcblxuICAgICAgY29uc3QgdGVybXNWYWxpZGF0ZSA9IHRoaXMudmFsaWRhdGVUZXJtcyhjb250ZXh0KTtcblxuICAgICAgaWYgKHRlcm1zVmFsaWRhdGUpIHtcbiAgICAgICAgbGV0IHZhbGlkYXRlc1doZW5TdGF0ZWQgPSBmYWxzZSxcbiAgICAgICAgICAgIHZhbGlkYXRlc1doZW5EZXJpdmVkID0gZmFsc2U7XG5cbiAgICAgICAgaWYgKHN0YXRlZCkge1xuICAgICAgICAgIHZhbGlkYXRlc1doZW5TdGF0ZWQgPSB0aGlzLnZhbGlkYXRlV2hlblN0YXRlZChjb250ZXh0KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB2YWxpZGF0ZXNXaGVuRGVyaXZlZCA9IHRoaXMudmFsaWRhdGVXaGVuRGVyaXZlZChjb250ZXh0KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh2YWxpZGF0ZXNXaGVuU3RhdGVkIHx8IHZhbGlkYXRlc1doZW5EZXJpdmVkKSB7XG4gICAgICAgICAgdmFsaWRhdGVzID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAodmFsaWRhdGVzKSB7XG4gICAgICAgIGVxdWFsaXR5ID0gdGhpczsgIC8vL1xuXG4gICAgICAgIHRoaXMuYXNzaWduKHN0YXRlZCwgY29udGV4dCk7XG5cbiAgICAgICAgY29udGV4dC5hZGRFcXVhbGl0eShlcXVhbGl0eSk7XG5cbiAgICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmFsaWRhdGVkIHRoZSAnJHtlcXVhbGl0eVN0cmluZ30nIGVxdWFsaXR5LmApO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBlcXVhbGl0eTtcbiAgfVxuXG4gIHZhbGlkYXRlVGVybXMoY29udGV4dCkge1xuICAgIGxldCB0ZXJtc1ZhbGlkYXRlID0gZmFsc2U7XG5cbiAgICBjb25zdCBlcXVhbGl0eVN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7IC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmFsaWRhdGluZyB0aGUgJyR7ZXF1YWxpdHlTdHJpbmd9JyBlcXVhbGl0eSdzIHRlcm1zLi4uYCk7XG5cbiAgICBsZXQgbGVmdFRlcm0sXG4gICAgICAgIHJpZ2h0VGVybTtcblxuICAgIGxlZnRUZXJtID0gdGhpcy5sZWZ0VGVybS52YWxpZGF0ZShjb250ZXh0LCAoKSA9PiB7XG4gICAgICAgIGxldCB2YWxpZGF0ZXNGb3J3YXJkcyA9IGZhbHNlO1xuXG4gICAgICAgIHJpZ2h0VGVybSA9IHRoaXMucmlnaHRUZXJtLnZhbGlkYXRlKGNvbnRleHQsICgpID0+IHtcbiAgICAgICAgICBjb25zdCB2YWxpZGF0ZXNGb3J3YXJkcyA9IHRydWU7XG5cbiAgICAgICAgICByZXR1cm4gdmFsaWRhdGVzRm9yd2FyZHM7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmIChyaWdodFRlcm0gIT09IG51bGwpIHtcbiAgICAgICAgICB2YWxpZGF0ZXNGb3J3YXJkcyA9IHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdmFsaWRhdGVzRm9yd2FyZHM7XG4gICAgICB9KTtcblxuICAgIGlmIChsZWZ0VGVybSAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgbGVmdFRlcm1UeXBlID0gbGVmdFRlcm0uZ2V0VHlwZSgpLFxuICAgICAgICAgICAgcmlnaHRUZXJtVHlwZSA9IHJpZ2h0VGVybS5nZXRUeXBlKCksXG4gICAgICAgICAgICBsZWZ0VGVybVR5cGVDb21wYXJhYmxlVG9SaWdodFRlcm1UeXBlID0gbGVmdFRlcm1UeXBlLmlzQ29tcGFyYWJsZVRvKHJpZ2h0VGVybVR5cGUpO1xuXG4gICAgICBpZiAobGVmdFRlcm1UeXBlQ29tcGFyYWJsZVRvUmlnaHRUZXJtVHlwZSkge1xuICAgICAgICB0aGlzLmxlZnRUZXJtID0gbGVmdFRlcm07XG5cbiAgICAgICAgdGhpcy5yaWdodFRlcm0gPSByaWdodFRlcm07XG5cbiAgICAgICAgdGVybXNWYWxpZGF0ZSA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHRlcm1zVmFsaWRhdGUpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZhbGlkYXRlZCB0aGUgJyR7ZXF1YWxpdHlTdHJpbmd9JyBlcXVhbGl0eSdzIHRlcm1zLmApO1xuICAgIH1cblxuICAgIHJldHVybiB0ZXJtc1ZhbGlkYXRlO1xuICB9XG5cbiAgdmFsaWRhdGVXaGVuU3RhdGVkKGNvbnRleHQpIHtcbiAgICBsZXQgdmFsaWRhdGVzV2hlblN0YXRlZDtcblxuICAgIGNvbnN0IGVxdWFsaXR5U3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWYWxpZGF0aW5nIHRoZSAnJHtlcXVhbGl0eVN0cmluZ30nIHN0YXRlZCBlcXVhbGl0eS4uLmApO1xuXG4gICAgdmFsaWRhdGVzV2hlblN0YXRlZCA9IHRydWU7XG5cbiAgICBpZiAodmFsaWRhdGVzV2hlblN0YXRlZCkge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmFsaWRhdGVkIHRoZSAnJHtlcXVhbGl0eVN0cmluZ30nIHN0YXRlZCBlcXVhbGl0eS5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmFsaWRhdGVzV2hlblN0YXRlZDtcbiAgfVxuXG4gIHZhbGlkYXRlV2hlbkRlcml2ZWQoY29udGV4dCkge1xuICAgIGxldCB2YWxpZGF0ZXNXaGVuRGVyaXZlZDtcblxuICAgIGNvbnN0IGVxdWFsaXR5U3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWYWxpZGF0aW5nIHRoZSAnJHtlcXVhbGl0eVN0cmluZ30nIGRlcml2ZWQgZXF1YWxpdHkuLi5gKTtcblxuICAgIHZhbGlkYXRlc1doZW5EZXJpdmVkID0gdHJ1ZTsgIC8vL1xuXG4gICAgaWYgKHZhbGlkYXRlc1doZW5EZXJpdmVkKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52YWxpZGF0ZWQgdGhlICcke2VxdWFsaXR5U3RyaW5nfScgZGVyaXZlZCBlcXVhbGl0eS5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmFsaWRhdGVzV2hlbkRlcml2ZWQ7XG4gIH1cblxuICBhc3NpZ24oc3RhdGVkLCBjb250ZXh0KSB7XG4gICAgY29uc3QgZXF1YWxpdHkgPSB0aGlzLCAgLy8vXG4gICAgICAgICAgZXF1YWxpdHlBc3NpZ25tZW50ID0gZXF1YWxpdHlBc3NpZ25tZW50RnJvbUVxdWFsaXR5KGVxdWFsaXR5LCBjb250ZXh0KSxcbiAgICAgICAgICBsZWZ0VmFyaWFibGVBc3NpZ25tZW50ID0gbGVmdFZhcmlhYmxlQXNzaWdubWVudEZyb21FcXVhbGl0eShlcXVhbGl0eSwgY29udGV4dCksXG4gICAgICAgICAgcmlnaHRWYXJpYWJsZUFzc2lnbm1lbnQgPSByaWdodFZhcmlhYmxlQXNzaWdubWVudEZyb21FcXVhbGl0eShlcXVhbGl0eSwgY29udGV4dCk7XG5cbiAgICBsZXQgYXNzaWdubWVudDtcblxuICAgIGFzc2lnbm1lbnQgPSBlcXVhbGl0eUFzc2lnbm1lbnQ7IC8vL1xuXG4gICAgY29udGV4dC5hZGRBc3NpZ25tZW50KGFzc2lnbm1lbnQpO1xuXG4gICAgaWYgKGxlZnRWYXJpYWJsZUFzc2lnbm1lbnQgIT09IG51bGwpIHtcbiAgICAgIGFzc2lnbm1lbnQgPSBsZWZ0VmFyaWFibGVBc3NpZ25tZW50OyAgLy8vXG5cbiAgICAgIGNvbnRleHQuYWRkQXNzaWdubWVudChhc3NpZ25tZW50KTtcbiAgICB9XG5cbiAgICBpZiAocmlnaHRWYXJpYWJsZUFzc2lnbm1lbnQgIT09IG51bGwpIHtcbiAgICAgIGFzc2lnbm1lbnQgPSByaWdodFZhcmlhYmxlQXNzaWdubWVudDsgIC8vL1xuXG4gICAgICBjb250ZXh0LmFkZEFzc2lnbm1lbnQoYXNzaWdubWVudCk7XG4gICAgfVxuICB9XG5cbiAgc3RhdGljIG5hbWUgPSBcIkVxdWFsaXR5XCI7XG59KTtcbiJdLCJuYW1lcyI6WyJkZWZpbmUiLCJFcXVhbGl0eSIsImNvbnRleHQiLCJzdHJpbmciLCJub2RlIiwibGVmdFRlcm0iLCJyaWdodFRlcm0iLCJnZXRMZWZ0VGVybSIsImdldFJpZ2h0VGVybSIsImdldEVxdWFsaXR5Tm9kZSIsImdldE5vZGUiLCJlcXVhbGl0eU5kZSIsImdldExlZnRUZXJtTm9kZSIsImxlZnRUZXJtTm9kZSIsImdldFJpZ2h0VGVybU5vZGUiLCJyaWdodFRlcm1Ob2RlIiwiZ2V0VHlwZSIsInR5cGUiLCJsZWZ0VGVybVR5cGUiLCJyaWdodFRlcm1UeXBlIiwibGVmdFRlcm1UeXBlRXF1YWxUb09yU3ViVHlwZU9mUmlnaHRUZXJtVHlwZSIsImlzRXF1YWxUb09yU3ViVHlwZU9mIiwicmlnaHRUZXJtVHlwZUVxdWFsVG9PclN1YlR5cGVPZkxlZnRUZXJtVHlwZSIsImdldFRlcm1zIiwidGVybXMiLCJtYXRjaEVxdWFsaXR5Tm9kZSIsImVxdWFsaXR5Tm9kZSIsImVxdWFsaXR5Tm9kZUEiLCJlcXVhbGl0eU5vZGVCIiwiZXF1YWxpdHlOb2RlQUFNYXRjaGVzRXF1YWxpdHlCTm9kZUIiLCJtYXRjaCIsImVxdWFsaXR5Tm9kZU1hdGNoZXMiLCJpc1JlZmxleGl2ZSIsImxlZnRUZXJtU3RyaW5nIiwiZ2V0U3RyaW5nIiwicmlnaHRUZXJtU3RyaW5nIiwicmVmbGV4aXZlIiwiaXNFcXVhbFRvIiwiZXF1YWxpdHkiLCJlcXVhbFRvIiwiaXNFcXVhbCIsImVxdWFsIiwidGVybXNFcXVhdGUiLCJlcXVhdGVUZXJtcyIsImZpbmRWYWxpZEVxdWFsaXR5IiwiZmluZEVxdWFsaXR5QnlFcXVhbGl0eU5vZGUiLCJ2YWxpZEVxdWFsaXR5IiwidmFsaWRhdGUiLCJzdGF0ZWQiLCJlcXVhbGl0eVN0cmluZyIsInRyYWNlIiwiZGVidWciLCJ2YWxpZGF0ZXMiLCJ0ZXJtc1ZhbGlkYXRlIiwidmFsaWRhdGVUZXJtcyIsInZhbGlkYXRlc1doZW5TdGF0ZWQiLCJ2YWxpZGF0ZXNXaGVuRGVyaXZlZCIsInZhbGlkYXRlV2hlblN0YXRlZCIsInZhbGlkYXRlV2hlbkRlcml2ZWQiLCJhc3NpZ24iLCJhZGRFcXVhbGl0eSIsInZhbGlkYXRlc0ZvcndhcmRzIiwibGVmdFRlcm1UeXBlQ29tcGFyYWJsZVRvUmlnaHRUZXJtVHlwZSIsImlzQ29tcGFyYWJsZVRvIiwiZXF1YWxpdHlBc3NpZ25tZW50IiwiZXF1YWxpdHlBc3NpZ25tZW50RnJvbUVxdWFsaXR5IiwibGVmdFZhcmlhYmxlQXNzaWdubWVudCIsImxlZnRWYXJpYWJsZUFzc2lnbm1lbnRGcm9tRXF1YWxpdHkiLCJyaWdodFZhcmlhYmxlQXNzaWdubWVudCIsInJpZ2h0VmFyaWFibGVBc3NpZ25tZW50RnJvbUVxdWFsaXR5IiwiYXNzaWdubWVudCIsImFkZEFzc2lnbm1lbnQiLCJFbGVtZW50IiwibmFtZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBUUE7OztlQUFBOzs7OEJBTndCO3dCQUVEO3NCQUNLO3NCQUM0Rjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFeEgsV0FBZUEsSUFBQUEsZ0JBQU0sNkJBQUM7O2FBQU1DLFNBQ2RDLE9BQU8sRUFBRUMsTUFBTSxFQUFFQyxJQUFJLEVBQUVDLFFBQVEsRUFBRUMsU0FBUztnQ0FENUJMOztnQkFFeEIsa0JBRndCQTtZQUVsQkM7WUFBU0M7WUFBUUM7O1FBRXZCLE1BQUtDLFFBQVEsR0FBR0E7UUFDaEIsTUFBS0MsU0FBUyxHQUFHQTs7Ozs7WUFHbkJDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0YsUUFBUTtZQUN0Qjs7O1lBRUFHLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0YsU0FBUztZQUN2Qjs7O1lBRUFHLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNTCxPQUFPLElBQUksQ0FBQ00sT0FBTyxJQUNuQkMsY0FBY1AsTUFBTSxHQUFHO2dCQUU3QixPQUFPTztZQUNUOzs7WUFFQUMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1DLGVBQWUsSUFBSSxDQUFDUixRQUFRLENBQUNLLE9BQU87Z0JBRTFDLE9BQU9HO1lBQ1Q7OztZ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