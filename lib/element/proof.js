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
var _context = require("../utilities/context");
var _elements = require("../elements");
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
var _Proof;
var _default = (0, _elements.define)((_Proof = /*#__PURE__*/ function(Element) {
    _inherits(Proof, Element);
    function Proof(context, string, node, derivation) {
        _class_call_check(this, Proof);
        var _this;
        _this = _call_super(this, Proof, [
            context,
            string,
            node
        ]);
        _this.derivation = derivation;
        return _this;
    }
    _create_class(Proof, [
        {
            key: "getDerivation",
            value: function getDerivation() {
                return this.derivation;
            }
        },
        {
            key: "getLastProofAssertion",
            value: function getLastProofAssertion() {
                return this.derivation.getLastProofAssertion();
            }
        },
        {
            key: "getStatement",
            value: function getStatement() {
                var lastProofAssertion = this.getLastProofAssertion(), lastProofAssertionStatement = lastProofAssertion.getStatement(), statement = lastProofAssertionStatement; ///
                return statement;
            }
        },
        {
            key: "verify",
            value: function verify(substitutions, conclusion, context) {
                var _this = this;
                var verifies = false;
                (0, _context.scope)(function(context) {
                    var derivationVerifies = _this.derivation.verify(substitutions, context);
                    if (derivationVerifies) {
                        var lastProofAssertion = context.getLastProofAssertion();
                        if (lastProofAssertion !== null) {
                            var statement = _this.getStatement(), conclusionStatement = conclusion.getStatement(), conclusionStatementEqualToStatement = conclusionStatement.isEqualTo(statement);
                            if (conclusionStatementEqualToStatement) {
                                verifies = true;
                            }
                        }
                    }
                }, context);
                return verifies;
            }
        }
    ]);
    return Proof;
}(_wrap_native_super(_element.default)), _define_property(_Proof, "name", "Proof"), _Proof));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L3Byb29mLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgRWxlbWVudCBmcm9tIFwiLi4vZWxlbWVudFwiO1xuXG5pbXBvcnQgeyBzY29wZSB9IGZyb20gXCIuLi91dGlsaXRpZXMvY29udGV4dFwiO1xuaW1wb3J0IHsgZGVmaW5lIH0gZnJvbSBcIi4uL2VsZW1lbnRzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZShjbGFzcyBQcm9vZiBleHRlbmRzIEVsZW1lbnQge1xuICBjb25zdHJ1Y3Rvcihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIGRlcml2YXRpb24pIHtcbiAgICBzdXBlcihjb250ZXh0LCBzdHJpbmcsIG5vZGUpO1xuXG4gICAgdGhpcy5kZXJpdmF0aW9uID0gZGVyaXZhdGlvbjtcbiAgfVxuXG4gIGdldERlcml2YXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuZGVyaXZhdGlvbjtcbiAgfVxuXG4gIGdldExhc3RQcm9vZkFzc2VydGlvbigpIHsgcmV0dXJuIHRoaXMuZGVyaXZhdGlvbi5nZXRMYXN0UHJvb2ZBc3NlcnRpb24oKTsgfVxuXG4gIGdldFN0YXRlbWVudCgpIHtcbiAgICBjb25zdCBsYXN0UHJvb2ZBc3NlcnRpb24gPSB0aGlzLmdldExhc3RQcm9vZkFzc2VydGlvbigpLFxuICAgICAgICAgIGxhc3RQcm9vZkFzc2VydGlvblN0YXRlbWVudCA9IGxhc3RQcm9vZkFzc2VydGlvbi5nZXRTdGF0ZW1lbnQoKSxcbiAgICAgICAgICBzdGF0ZW1lbnQgPSBsYXN0UHJvb2ZBc3NlcnRpb25TdGF0ZW1lbnQ7IC8vL1xuXG4gICAgcmV0dXJuIHN0YXRlbWVudDtcbiAgfVxuXG4gIHZlcmlmeShzdWJzdGl0dXRpb25zLCBjb25jbHVzaW9uLCBjb250ZXh0KSB7XG4gICAgbGV0IHZlcmlmaWVzID0gZmFsc2U7XG5cbiAgICBzY29wZSgoY29udGV4dCkgPT4ge1xuICAgICAgY29uc3QgZGVyaXZhdGlvblZlcmlmaWVzID0gdGhpcy5kZXJpdmF0aW9uLnZlcmlmeShzdWJzdGl0dXRpb25zLCBjb250ZXh0KTtcblxuICAgICAgaWYgKGRlcml2YXRpb25WZXJpZmllcykge1xuICAgICAgICBjb25zdCBsYXN0UHJvb2ZBc3NlcnRpb24gPSBjb250ZXh0LmdldExhc3RQcm9vZkFzc2VydGlvbigpO1xuXG4gICAgICAgIGlmIChsYXN0UHJvb2ZBc3NlcnRpb24gIT09IG51bGwpIHtcbiAgICAgICAgICBjb25zdCBzdGF0ZW1lbnQgPSB0aGlzLmdldFN0YXRlbWVudCgpLFxuICAgICAgICAgICAgICAgIGNvbmNsdXNpb25TdGF0ZW1lbnQgPSBjb25jbHVzaW9uLmdldFN0YXRlbWVudCgpLFxuICAgICAgICAgICAgICAgIGNvbmNsdXNpb25TdGF0ZW1lbnRFcXVhbFRvU3RhdGVtZW50ID0gY29uY2x1c2lvblN0YXRlbWVudC5pc0VxdWFsVG8oc3RhdGVtZW50KTtcblxuICAgICAgICAgIGlmIChjb25jbHVzaW9uU3RhdGVtZW50RXF1YWxUb1N0YXRlbWVudCkge1xuICAgICAgICAgICAgdmVyaWZpZXMgPSB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIHZlcmlmaWVzO1xuICB9XG5cbiAgc3RhdGljIG5hbWUgPSBcIlByb29mXCI7XG59KTtcbiJdLCJuYW1lcyI6WyJkZWZpbmUiLCJQcm9vZiIsImNvbnRleHQiLCJzdHJpbmciLCJub2RlIiwiZGVyaXZhdGlvbiIsImdldERlcml2YXRpb24iLCJnZXRMYXN0UHJvb2ZBc3NlcnRpb24iLCJnZXRTdGF0ZW1lbnQiLCJsYXN0UHJvb2ZBc3NlcnRpb24iLCJsYXN0UHJvb2ZBc3NlcnRpb25TdGF0ZW1lbnQiLCJzdGF0ZW1lbnQiLCJ2ZXJpZnkiLCJzdWJzdGl0dXRpb25zIiwiY29uY2x1c2lvbiIsInZlcmlmaWVzIiwic2NvcGUiLCJkZXJpdmF0aW9uVmVyaWZpZXMiLCJjb25jbHVzaW9uU3RhdGVtZW50IiwiY29uY2x1c2lvblN0YXRlbWVudEVxdWFsVG9TdGF0ZW1lbnQiLCJpc0VxdWFsVG8iLCJFbGVtZW50IiwibmFtZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBT0E7OztlQUFBOzs7OERBTG9CO3VCQUVFO3dCQUNDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRXZCLFdBQWVBLElBQUFBLGdCQUFNLDBCQUFDOzthQUFNQyxNQUNkQyxPQUFPLEVBQUVDLE1BQU0sRUFBRUMsSUFBSSxFQUFFQyxVQUFVO2dDQURuQko7O2dCQUV4QixrQkFGd0JBO1lBRWxCQztZQUFTQztZQUFRQzs7UUFFdkIsTUFBS0MsVUFBVSxHQUFHQTs7Ozs7WUFHcEJDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0QsVUFBVTtZQUN4Qjs7O1lBRUFFLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFBMEIsT0FBTyxJQUFJLENBQUNGLFVBQVUsQ0FBQ0UscUJBQXFCO1lBQUk7OztZQUUxRUMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1DLHFCQUFxQixJQUFJLENBQUNGLHFCQUFxQixJQUMvQ0csOEJBQThCRCxtQkFBbUJELFlBQVksSUFDN0RHLFlBQVlELDZCQUE2QixHQUFHO2dCQUVsRCxPQUFPQztZQUNUOzs7WUFFQUMsS0FBQUE7bUJBQUFBLFNBQUFBLE9BQU9DLGFBQWEsRUFBRUMsVUFBVSxFQUFFWixPQUFPOztnQkFDdkMsSUFBSWEsV0FBVztnQkFFZkMsSUFBQUEsY0FBSyxFQUFDLFNBQUNkO29CQUNMLElBQU1lLHFCQUFxQixNQUFLWixVQUFVLENBQUNPLE1BQU0sQ0FBQ0MsZUFBZVg7b0JBRWpFLElBQUllLG9CQUFvQjt3QkFDdEIsSUFBTVIscUJBQXFCUCxRQUFRSyxxQkFBcUI7d0JBRXhELElBQUlFLHVCQUF1QixNQUFNOzRCQUMvQixJQUFNRSxZQUFZLE1BQUtILFlBQVksSUFDN0JVLHNCQUFzQkosV0FBV04sWUFBWSxJQUM3Q1csc0NBQXNDRCxvQkFBb0JFLFNBQVMsQ0FBQ1Q7NEJBRTFFLElBQUlRLHFDQUFxQztnQ0FDdkNKLFdBQVc7NEJBQ2I7d0JBQ0Y7b0JBQ0Y7Z0JBQ0YsR0FBR2I7Z0JBRUgsT0FBT2E7WUFDVDs7OztxQkEzQ3dDTSxnQkFBTyxJQTZDL0MseUJBQU9DLFFBQU8ifQ==