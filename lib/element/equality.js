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
var _element = /*#__PURE__*/ _interop_require_default(require("../element"));
var _elements = /*#__PURE__*/ _interop_require_wildcard(require("../elements"));
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
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function _getRequireWildcardCache(nodeInterop) {
    if (typeof WeakMap !== "function") return null;
    var cacheBabelInterop = new WeakMap();
    var cacheNodeInterop = new WeakMap();
    return (_getRequireWildcardCache = function(nodeInterop) {
        return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
    })(nodeInterop);
}
function _interop_require_wildcard(obj, nodeInterop) {
    if (!nodeInterop && obj && obj.__esModule) {
        return obj;
    }
    if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
        return {
            default: obj
        };
    }
    var cache = _getRequireWildcardCache(nodeInterop);
    if (cache && cache.has(obj)) {
        return cache.get(obj);
    }
    var newObj = {
        __proto__: null
    };
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for(var key in obj){
        if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
            var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
            if (desc && (desc.get || desc.set)) {
                Object.defineProperty(newObj, key, desc);
            } else {
                newObj[key] = obj[key];
            }
        }
    }
    newObj.default = obj;
    if (cache) {
        cache.set(obj, newObj);
    }
    return newObj;
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
                var Variable = _elements.default.Variable, type = this.getType(), leftTermNode = this.leftTerm.getNode(), rightTermNode = this.rightTerm.getNode(), leftTermNodeSingularVariableNode = leftTermNode.getSingularVariableNode(), rightTermNodeSingularVariableNode = rightTermNode.getSingularVariableNode(), leftVariableNode = leftTermNodeSingularVariableNode, rightVariableNode = rightTermNodeSingularVariableNode; ///
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
}(_wrap_native_super(_element.default)), _define_property(_Equality, "name", "Equality"), _Equality));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L2VxdWFsaXR5LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgRWxlbWVudCBmcm9tIFwiLi4vZWxlbWVudFwiO1xuaW1wb3J0IGVsZW1lbnRzIGZyb20gXCIuLi9lbGVtZW50c1wiO1xuXG5pbXBvcnQgeyBkZWZpbmUgfSBmcm9tIFwiLi4vZWxlbWVudHNcIjtcbmltcG9ydCB7IGVxdWF0ZVRlcm1zIH0gZnJvbSBcIi4uL3Byb2Nlc3MvZXF1YXRlXCI7XG5pbXBvcnQgeyBlcXVhbGl0eUFzc2lnbm1lbnRGcm9tRXF1YWxpdHksIHZhcmlhYmxlQXNzaWdubWVudEZyb21WYXJpYWJsZSB9IGZyb20gXCIuLi9wcm9jZXNzL2Fzc2lnblwiO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmUoY2xhc3MgRXF1YWxpdHkgZXh0ZW5kcyBFbGVtZW50IHtcbiAgY29uc3RydWN0b3IoY29udGV4dCwgc3RyaW5nLCBub2RlLCBsZWZ0VGVybSwgcmlnaHRUZXJtKSB7XG4gICAgc3VwZXIoY29udGV4dCwgc3RyaW5nLCBub2RlKTtcblxuICAgIHRoaXMubGVmdFRlcm0gPSBsZWZ0VGVybTtcbiAgICB0aGlzLnJpZ2h0VGVybSA9IHJpZ2h0VGVybTtcbiAgfVxuXG4gIGdldExlZnRUZXJtKCkge1xuICAgIHJldHVybiB0aGlzLmxlZnRUZXJtO1xuICB9XG5cbiAgZ2V0UmlnaHRUZXJtKCkge1xuICAgIHJldHVybiB0aGlzLnJpZ2h0VGVybTtcbiAgfVxuXG4gIGdldFR5cGUoKSB7XG4gICAgbGV0IHR5cGU7XG5cbiAgICBjb25zdCBsZWZ0VGVybVR5cGUgPSB0aGlzLmxlZnRUZXJtLmdldFR5cGUoKSxcbiAgICAgICAgICByaWdodFRlcm1UeXBlID0gdGhpcy5yaWdodFRlcm0uZ2V0VHlwZSgpLFxuICAgICAgICAgIGxlZnRUZXJtVHlwZUVxdWFsVG9PclN1YlR5cGVPZlJpZ2h0VGVybVR5cGUgPSBsZWZ0VGVybVR5cGUuaXNFcXVhbFRvT3JTdWJUeXBlT2YocmlnaHRUZXJtVHlwZSksXG4gICAgICAgICAgcmlnaHRUZXJtVHlwZUVxdWFsVG9PclN1YlR5cGVPZkxlZnRUZXJtVHlwZSA9IHJpZ2h0VGVybVR5cGUuaXNFcXVhbFRvT3JTdWJUeXBlT2YobGVmdFRlcm1UeXBlKTtcblxuICAgIGlmIChsZWZ0VGVybVR5cGVFcXVhbFRvT3JTdWJUeXBlT2ZSaWdodFRlcm1UeXBlKSB7XG4gICAgICB0eXBlID0gbGVmdFRlcm1UeXBlOyAgLy8vXG4gICAgfVxuXG4gICAgaWYgKHJpZ2h0VGVybVR5cGVFcXVhbFRvT3JTdWJUeXBlT2ZMZWZ0VGVybVR5cGUpIHtcbiAgICAgIHR5cGUgPSByaWdodFRlcm1UeXBlOyAvLy9cbiAgICB9XG5cbiAgICByZXR1cm4gdHlwZTtcbiAgfVxuXG4gIGdldFRlcm1zKCkge1xuICAgIGNvbnN0IHRlcm1zID0gW1xuICAgICAgdGhpcy5sZWZ0VGVybSxcbiAgICAgIHRoaXMucmlnaHRUZXJtXG4gICAgXTtcblxuICAgIHJldHVybiB0ZXJtcztcbiAgfVxuXG4gIGlzUmVmbGV4aXZlKCkge1xuICAgIGNvbnN0IGxlZnRUZXJtU3RyaW5nID0gdGhpcy5sZWZ0VGVybS5nZXRTdHJpbmcoKSxcbiAgICAgICAgICByaWdodFRlcm1TdHJpbmcgPSB0aGlzLnJpZ2h0VGVybS5nZXRTdHJpbmcoKSxcbiAgICAgICAgICByZWZsZXhpdmUgPSAobGVmdFRlcm1TdHJpbmcgPT09IHJpZ2h0VGVybVN0cmluZyk7XG5cbiAgICByZXR1cm4gcmVmbGV4aXZlO1xuICB9XG5cbiAgaXNFcXVhbChjb250ZXh0KSB7XG4gICAgbGV0IGVxdWFsID0gZmFsc2U7XG5cbiAgICBjb25zdCBsZWZ0VGVybU5vZGUgPSB0aGlzLmxlZnRUZXJtLmdldE5vZGUoKSxcbiAgICAgICAgICByaWdodFRlcm1Ob2RlID0gdGhpcy5yaWdodFRlcm0uZ2V0Tm9kZSgpLFxuICAgICAgICAgIHRlcm1zRXF1YXRlID0gZXF1YXRlVGVybXMobGVmdFRlcm1Ob2RlLCByaWdodFRlcm1Ob2RlLCBjb250ZXh0KTtcblxuICAgIGlmICh0ZXJtc0VxdWF0ZSkge1xuICAgICAgZXF1YWwgPSB0cnVlO1xuICAgIH1cblxuICAgIHJldHVybiBlcXVhbDtcbiAgfVxuXG4gIHZlcmlmeShhc3NpZ25tZW50cywgc3RhdGVkLCBjb250ZXh0KSB7XG4gICAgbGV0IHZlcmlmaWVzID0gZmFsc2U7XG5cbiAgICBjb25zdCBlcXVhbGl0eVN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7IC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtlcXVhbGl0eVN0cmluZ30nIGVxdWFsaXR5Li4uYCk7XG5cbiAgICBjb25zdCB0ZXJtc1ZlcmlmeSA9IHRoaXMudmVyaWZ5VGVybXMoY29udGV4dCk7XG5cbiAgICBpZiAodGVybXNWZXJpZnkpIHtcbiAgICAgIGxldCB2ZXJpZmllc1doZW5TdGF0ZWQgPSBmYWxzZSxcbiAgICAgICAgICB2ZXJpZmllc1doZW5EZXJpdmVkID0gZmFsc2U7XG5cbiAgICAgIGlmIChzdGF0ZWQpIHtcbiAgICAgICAgdmVyaWZpZXNXaGVuU3RhdGVkID0gdGhpcy52ZXJpZnlXaGVuU3RhdGVkKGFzc2lnbm1lbnRzLCBjb250ZXh0KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZlcmlmaWVzV2hlbkRlcml2ZWQgPSB0aGlzLnZlcmlmeVdoZW5EZXJpdmVkKGNvbnRleHQpO1xuICAgICAgfVxuXG4gICAgICBpZiAodmVyaWZpZXNXaGVuU3RhdGVkIHx8IHZlcmlmaWVzV2hlbkRlcml2ZWQpIHtcbiAgICAgICAgdmVyaWZpZXMgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh2ZXJpZmllcykge1xuXG4gICAgICAgIHRoaXMuYXNzaWduKGFzc2lnbm1lbnRzLCBjb250ZXh0KTtcblxuICAgIH1cblxuICAgIGlmICh2ZXJpZmllcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke2VxdWFsaXR5U3RyaW5nfScgZXF1YWxpdHkuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZlcmlmaWVzO1xuICB9XG5cbiAgdmVyaWZ5VGVybXMoY29udGV4dCkge1xuICAgIGxldCB0ZXJtc1ZlcmlmeTtcblxuICAgIGNvbnN0IGVxdWFsaXR5U3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke2VxdWFsaXR5U3RyaW5nfScgZXF1YWxpdHkncyB0ZXJtcy4uLmApO1xuXG4gICAgY29uc3QgbGVmdFRlcm1WZXJpZmllcyA9IHRoaXMubGVmdFRlcm0udmVyaWZ5KGNvbnRleHQsICgpID0+IHtcbiAgICAgIGxldCB2ZXJpZmllc0FoZWFkO1xuXG4gICAgICBjb25zdCByaWdodFRlcm1WZXJpZmllcyA9IHRoaXMucmlnaHRUZXJtLnZlcmlmeShjb250ZXh0LCAoKSA9PiB7XG4gICAgICAgIGxldCB2ZXJpZmllc0FoZWFkO1xuXG4gICAgICAgIGNvbnN0IGxlZnRUZXJtVHlwZSA9IHRoaXMubGVmdFRlcm0uZ2V0VHlwZSgpLFxuICAgICAgICAgICAgICByaWdodFRlcm1UeXBlID0gdGhpcy5yaWdodFRlcm0uZ2V0VHlwZSgpLFxuICAgICAgICAgICAgICBsZWZ0VGVybVR5cGVDb21wYXJhYmxlVG9SaWdodFRlcm1UeXBlID0gbGVmdFRlcm1UeXBlLmlzQ29tcGFyYWJsZVRvKHJpZ2h0VGVybVR5cGUpO1xuXG4gICAgICAgIHZlcmlmaWVzQWhlYWQgPSBsZWZ0VGVybVR5cGVDb21wYXJhYmxlVG9SaWdodFRlcm1UeXBlOyAgLy8vXG5cbiAgICAgICAgcmV0dXJuIHZlcmlmaWVzQWhlYWQ7XG4gICAgICB9KTtcblxuICAgICAgdmVyaWZpZXNBaGVhZCA9IHJpZ2h0VGVybVZlcmlmaWVzOyAvLy9cblxuICAgICAgcmV0dXJuIHZlcmlmaWVzQWhlYWQ7XG4gICAgfSk7XG5cbiAgICB0ZXJtc1ZlcmlmeSA9IGxlZnRUZXJtVmVyaWZpZXM7IC8vL1xuXG4gICAgaWYgKHRlcm1zVmVyaWZ5KSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7ZXF1YWxpdHlTdHJpbmd9JyBlcXVhbGl0eSdzIHRlcm1zLmApO1xuICAgIH1cblxuICAgIHJldHVybiB0ZXJtc1ZlcmlmeTtcbiAgfVxuXG4gIHZlcmlmeVdoZW5TdGF0ZWQoYXNzaWdubWVudHMsIGNvbnRleHQpIHtcbiAgICBsZXQgdmVyaWZpZXNXaGVuU3RhdGVkO1xuXG4gICAgY29uc3QgZXF1YWxpdHlTdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7ZXF1YWxpdHlTdHJpbmd9JyBzdGF0ZWQgZXF1YWxpdHkuLi5gKTtcblxuICAgIHZlcmlmaWVzV2hlblN0YXRlZCA9IHRydWU7XG5cbiAgICBpZiAodmVyaWZpZXNXaGVuU3RhdGVkKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7ZXF1YWxpdHlTdHJpbmd9JyBzdGF0ZWQgZXF1YWxpdHkuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZlcmlmaWVzV2hlblN0YXRlZDtcbiAgfVxuXG4gIHZlcmlmeVdoZW5EZXJpdmVkKGNvbnRleHQpIHtcbiAgICBsZXQgdmVyaWZpZXNXaGVuRGVyaXZlZDtcblxuICAgIGNvbnN0IGVxdWFsaXR5U3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke2VxdWFsaXR5U3RyaW5nfScgZGVyaXZlZCBlcXVhbGl0eS4uLmApO1xuXG4gICAgdmVyaWZpZXNXaGVuRGVyaXZlZCA9IHRydWU7ICAvLy9cblxuICAgIGlmICh2ZXJpZmllc1doZW5EZXJpdmVkKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7ZXF1YWxpdHlTdHJpbmd9JyBkZXJpdmVkIGVxdWFsaXR5LmApO1xuICAgIH1cblxuICAgIHJldHVybiB2ZXJpZmllc1doZW5EZXJpdmVkO1xuICB9XG5cbiAgYXNzaWduKGFzc2lnbm1lbnRzLCBjb250ZXh0KSB7XG4gICAgaWYgKGFzc2lnbm1lbnRzID09PSBudWxsKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgeyBWYXJpYWJsZSB9ID0gZWxlbWVudHMsXG4gICAgICAgICAgdHlwZSA9IHRoaXMuZ2V0VHlwZSgpLFxuICAgICAgICAgIGxlZnRUZXJtTm9kZSA9IHRoaXMubGVmdFRlcm0uZ2V0Tm9kZSgpLFxuICAgICAgICAgIHJpZ2h0VGVybU5vZGUgPSB0aGlzLnJpZ2h0VGVybS5nZXROb2RlKCksXG4gICAgICAgICAgbGVmdFRlcm1Ob2RlU2luZ3VsYXJWYXJpYWJsZU5vZGUgPSBsZWZ0VGVybU5vZGUuZ2V0U2luZ3VsYXJWYXJpYWJsZU5vZGUoKSxcbiAgICAgICAgICByaWdodFRlcm1Ob2RlU2luZ3VsYXJWYXJpYWJsZU5vZGUgPSByaWdodFRlcm1Ob2RlLmdldFNpbmd1bGFyVmFyaWFibGVOb2RlKCksXG4gICAgICAgICAgbGVmdFZhcmlhYmxlTm9kZSA9IGxlZnRUZXJtTm9kZVNpbmd1bGFyVmFyaWFibGVOb2RlLCAgLy8vXG4gICAgICAgICAgcmlnaHRWYXJpYWJsZU5vZGUgPSByaWdodFRlcm1Ob2RlU2luZ3VsYXJWYXJpYWJsZU5vZGU7ICAvLy9cblxuICAgIGxldCBhc3NpZ25tZW50O1xuXG4gICAgaWYgKGxlZnRWYXJpYWJsZU5vZGUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IGxlZnRWYXJpYWJsZSA9IFZhcmlhYmxlLmZyb21WYXJpYWJsZU5vZGVBbmRUeXBlKGxlZnRWYXJpYWJsZU5vZGUsIHR5cGUsIGNvbnRleHQpLFxuICAgICAgICAgICAgbGVmdFZhcmlhYmxlQXNzaWdubWVudCA9IHZhcmlhYmxlQXNzaWdubWVudEZyb21WYXJpYWJsZShsZWZ0VmFyaWFibGUpO1xuXG4gICAgICBhc3NpZ25tZW50ID0gbGVmdFZhcmlhYmxlQXNzaWdubWVudDsgIC8vL1xuXG4gICAgICBhc3NpZ25tZW50cy5wdXNoKGFzc2lnbm1lbnQpO1xuICAgIH1cblxuICAgIGlmIChyaWdodFZhcmlhYmxlTm9kZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgcmlnaHRWYXJpYWJsZSA9IFZhcmlhYmxlLmZyb21WYXJpYWJsZU5vZGVBbmRUeXBlKHJpZ2h0VmFyaWFibGVOb2RlLCB0eXBlLCBjb250ZXh0KSxcbiAgICAgICAgICAgIHJpZ2h0VmFyaWFibGVBc3NpZ25tZW50ID0gdmFyaWFibGVBc3NpZ25tZW50RnJvbVZhcmlhYmxlKHJpZ2h0VmFyaWFibGUpO1xuXG4gICAgICBhc3NpZ25tZW50ID0gcmlnaHRWYXJpYWJsZUFzc2lnbm1lbnQ7ICAvLy9cblxuICAgICAgYXNzaWdubWVudHMucHVzaChhc3NpZ25tZW50KTtcbiAgICB9XG5cbiAgICBjb25zdCBlcXVhbGl0eSA9IHRoaXMsICAvL1xuICAgICAgICAgIGVxdWFsaXR5QXNzaWdubWVudCA9IGVxdWFsaXR5QXNzaWdubWVudEZyb21FcXVhbGl0eShlcXVhbGl0eSk7XG5cbiAgICBhc3NpZ25tZW50ID0gZXF1YWxpdHlBc3NpZ25tZW50OyAvLy9cblxuICAgIGFzc2lnbm1lbnRzLnB1c2goYXNzaWdubWVudCk7XG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiRXF1YWxpdHlcIjtcbn0pO1xuIl0sIm5hbWVzIjpbImRlZmluZSIsIkVxdWFsaXR5IiwiY29udGV4dCIsInN0cmluZyIsIm5vZGUiLCJsZWZ0VGVybSIsInJpZ2h0VGVybSIsImdldExlZnRUZXJtIiwiZ2V0UmlnaHRUZXJtIiwiZ2V0VHlwZSIsInR5cGUiLCJsZWZ0VGVybVR5cGUiLCJyaWdodFRlcm1UeXBlIiwibGVmdFRlcm1UeXBlRXF1YWxUb09yU3ViVHlwZU9mUmlnaHRUZXJtVHlwZSIsImlzRXF1YWxUb09yU3ViVHlwZU9mIiwicmlnaHRUZXJtVHlwZUVxdWFsVG9PclN1YlR5cGVPZkxlZnRUZXJtVHlwZSIsImdldFRlcm1zIiwidGVybXMiLCJpc1JlZmxleGl2ZSIsImxlZnRUZXJtU3RyaW5nIiwiZ2V0U3RyaW5nIiwicmlnaHRUZXJtU3RyaW5nIiwicmVmbGV4aXZlIiwiaXNFcXVhbCIsImVxdWFsIiwibGVmdFRlcm1Ob2RlIiwiZ2V0Tm9kZSIsInJpZ2h0VGVybU5vZGUiLCJ0ZXJtc0VxdWF0ZSIsImVxdWF0ZVRlcm1zIiwidmVyaWZ5IiwiYXNzaWdubWVudHMiLCJzdGF0ZWQiLCJ2ZXJpZmllcyIsImVxdWFsaXR5U3RyaW5nIiwidHJhY2UiLCJ0ZXJtc1ZlcmlmeSIsInZlcmlmeVRlcm1zIiwidmVyaWZpZXNXaGVuU3RhdGVkIiwidmVyaWZpZXNXaGVuRGVyaXZlZCIsInZlcmlmeVdoZW5TdGF0ZWQiLCJ2ZXJpZnlXaGVuRGVyaXZlZCIsImFzc2lnbiIsImRlYnVnIiwibGVmdFRlcm1WZXJpZmllcyIsInZlcmlmaWVzQWhlYWQiLCJyaWdodFRlcm1WZXJpZmllcyIsImxlZnRUZXJtVHlwZUNvbXBhcmFibGVUb1JpZ2h0VGVybVR5cGUiLCJpc0NvbXBhcmFibGVUbyIsIlZhcmlhYmxlIiwiZWxlbWVudHMiLCJsZWZ0VGVybU5vZGVTaW5ndWxhclZhcmlhYmxlTm9kZSIsImdldFNpbmd1bGFyVmFyaWFibGVOb2RlIiwicmlnaHRUZXJtTm9kZVNpbmd1bGFyVmFyaWFibGVOb2RlIiwibGVmdFZhcmlhYmxlTm9kZSIsInJpZ2h0VmFyaWFibGVOb2RlIiwiYXNzaWdubWVudCIsImxlZnRWYXJpYWJsZSIsImZyb21WYXJpYWJsZU5vZGVBbmRUeXBlIiwibGVmdFZhcmlhYmxlQXNzaWdubWVudCIsInZhcmlhYmxlQXNzaWdubWVudEZyb21WYXJpYWJsZSIsInB1c2giLCJyaWdodFZhcmlhYmxlIiwicmlnaHRWYXJpYWJsZUFzc2lnbm1lbnQiLCJlcXVhbGl0eSIsImVxdWFsaXR5QXNzaWdubWVudCIsImVxdWFsaXR5QXNzaWdubWVudEZyb21FcXVhbGl0eSIsIkVsZW1lbnQiLCJuYW1lIl0sIm1hcHBpbmdzIjoiQUFBQTs7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