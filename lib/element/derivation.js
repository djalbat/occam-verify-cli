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
var _necessary = require("necessary");
var _occamfurtle = require("occam-furtle");
var _assign = /*#__PURE__*/ _interop_require_default(require("../process/assign"));
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
var _Derivation;
var last = _necessary.arrayUtilities.last, define = _occamfurtle.elements.define;
var _default = define((_Derivation = /*#__PURE__*/ function(Element) {
    _inherits(Derivation, Element);
    function Derivation(context, string, node, subproofOrProofAssertions) {
        _class_call_check(this, Derivation);
        var _this;
        _this = _call_super(this, Derivation, [
            context,
            string,
            node
        ]);
        _this.subproofOrProofAssertions = subproofOrProofAssertions;
        return _this;
    }
    _create_class(Derivation, [
        {
            key: "getSubproofOrProofAssertions",
            value: function getSubproofOrProofAssertions() {
                return this.subproofOrProofAssertions;
            }
        },
        {
            key: "getLastProofAssertion",
            value: function getLastProofAssertion() {
                var lastSubproofOrProofAssertion = last(this.subproofOrProofAssertions), lastProofAssertion = lastSubproofOrProofAssertion; ///
                return lastProofAssertion;
            }
        },
        {
            key: "verify",
            value: function verify(context) {
                var verifies;
                verifies = this.subproofOrProofAssertions.every(function(subproofOrProofAssertion) {
                    var assignments = [], subproofOrProofAssertionVerifies = subproofOrProofAssertion.verify(assignments, context);
                    if (subproofOrProofAssertionVerifies) {
                        var assignmentsAssigned = (0, _assign.default)(assignments, context);
                        if (assignmentsAssigned) {
                            context.addSubproofOrProofAssertion(subproofOrProofAssertion);
                            return true;
                        }
                    }
                });
                return verifies;
            }
        }
    ]);
    return Derivation;
}(_wrap_native_super(_occamfurtle.Element)), _define_property(_Derivation, "name", "Derivation"), _Derivation));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L2Rlcml2YXRpb24uanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGFycmF5VXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuaW1wb3J0IHsgRWxlbWVudCwgZWxlbWVudHMgfSBmcm9tIFwib2NjYW0tZnVydGxlXCI7XG5cbmltcG9ydCBhc3NpZ25Bc3NpZ25tZW50cyBmcm9tIFwiLi4vcHJvY2Vzcy9hc3NpZ25cIjtcblxuY29uc3QgeyBsYXN0IH0gPSBhcnJheVV0aWxpdGllcyxcbiAgICAgIHsgZGVmaW5lIH0gPSBlbGVtZW50cztcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lKGNsYXNzIERlcml2YXRpb24gZXh0ZW5kcyBFbGVtZW50IHtcbiAgY29uc3RydWN0b3IoY29udGV4dCwgc3RyaW5nLCBub2RlLCBzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zKSB7XG4gICAgc3VwZXIoY29udGV4dCwgc3RyaW5nLCBub2RlKTtcblxuICAgIHRoaXMuc3VicHJvb2ZPclByb29mQXNzZXJ0aW9ucyA9IHN1YnByb29mT3JQcm9vZkFzc2VydGlvbnM7XG4gIH1cblxuICBnZXRTdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zKCkge1xuICAgIHJldHVybiB0aGlzLnN1YnByb29mT3JQcm9vZkFzc2VydGlvbnM7XG4gIH1cblxuICBnZXRMYXN0UHJvb2ZBc3NlcnRpb24oKSB7XG4gICAgY29uc3QgbGFzdFN1YnByb29mT3JQcm9vZkFzc2VydGlvbiA9IGxhc3QodGhpcy5zdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zKSxcbiAgICAgICAgICBsYXN0UHJvb2ZBc3NlcnRpb24gPSBsYXN0U3VicHJvb2ZPclByb29mQXNzZXJ0aW9uOyAgLy8vXG5cbiAgICByZXR1cm4gbGFzdFByb29mQXNzZXJ0aW9uO1xuICB9XG5cbiAgdmVyaWZ5KGNvbnRleHQpIHtcbiAgICBsZXQgdmVyaWZpZXM7XG5cbiAgICB2ZXJpZmllcyA9IHRoaXMuc3VicHJvb2ZPclByb29mQXNzZXJ0aW9ucy5ldmVyeSgoc3VicHJvb2ZPclByb29mQXNzZXJ0aW9uKSA9PiB7IC8vL1xuICAgICAgY29uc3QgYXNzaWdubWVudHMgPSBbXSxcbiAgICAgICAgICAgIHN1YnByb29mT3JQcm9vZkFzc2VydGlvblZlcmlmaWVzID0gc3VicHJvb2ZPclByb29mQXNzZXJ0aW9uLnZlcmlmeShhc3NpZ25tZW50cywgY29udGV4dCk7XG5cbiAgICAgIGlmIChzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25WZXJpZmllcykge1xuICAgICAgICBjb25zdCBhc3NpZ25tZW50c0Fzc2lnbmVkID0gYXNzaWduQXNzaWdubWVudHMoYXNzaWdubWVudHMsIGNvbnRleHQpO1xuXG4gICAgICAgIGlmIChhc3NpZ25tZW50c0Fzc2lnbmVkKSB7XG4gICAgICAgICAgY29udGV4dC5hZGRTdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb24oc3VicHJvb2ZPclByb29mQXNzZXJ0aW9uKTtcblxuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gdmVyaWZpZXM7XG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiRGVyaXZhdGlvblwiO1xufSk7XG5cbiJdLCJuYW1lcyI6WyJsYXN0IiwiYXJyYXlVdGlsaXRpZXMiLCJkZWZpbmUiLCJlbGVtZW50cyIsIkRlcml2YXRpb24iLCJjb250ZXh0Iiwic3RyaW5nIiwibm9kZSIsInN1YnByb29mT3JQcm9vZkFzc2VydGlvbnMiLCJnZXRTdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zIiwiZ2V0TGFzdFByb29mQXNzZXJ0aW9uIiwibGFzdFN1YnByb29mT3JQcm9vZkFzc2VydGlvbiIsImxhc3RQcm9vZkFzc2VydGlvbiIsInZlcmlmeSIsInZlcmlmaWVzIiwiZXZlcnkiLCJzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb24iLCJhc3NpZ25tZW50cyIsInN1YnByb29mT3JQcm9vZkFzc2VydGlvblZlcmlmaWVzIiwiYXNzaWdubWVudHNBc3NpZ25lZCIsImFzc2lnbkFzc2lnbm1lbnRzIiwiYWRkU3VicHJvb2ZPclByb29mQXNzZXJ0aW9uIiwiRWxlbWVudCIsIm5hbWUiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQVVBOzs7ZUFBQTs7O3lCQVIrQjsyQkFDRzs2REFFSjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUU5QixJQUFNLEFBQUVBLE9BQVNDLHlCQUFjLENBQXZCRCxNQUNGLEFBQUVFLFNBQVdDLHFCQUFRLENBQW5CRDtJQUVSLFdBQWVBLG9DQUFPOzthQUFNRSxXQUNkQyxPQUFPLEVBQUVDLE1BQU0sRUFBRUMsSUFBSSxFQUFFQyx5QkFBeUI7Z0NBRGxDSjs7Z0JBRXhCLGtCQUZ3QkE7WUFFbEJDO1lBQVNDO1lBQVFDOztRQUV2QixNQUFLQyx5QkFBeUIsR0FBR0E7Ozs7O1lBR25DQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNELHlCQUF5QjtZQUN2Qzs7O1lBRUFFLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNQywrQkFBK0JYLEtBQUssSUFBSSxDQUFDUSx5QkFBeUIsR0FDbEVJLHFCQUFxQkQsOEJBQStCLEdBQUc7Z0JBRTdELE9BQU9DO1lBQ1Q7OztZQUVBQyxLQUFBQTttQkFBQUEsU0FBQUEsT0FBT1IsT0FBTztnQkFDWixJQUFJUztnQkFFSkEsV0FBVyxJQUFJLENBQUNOLHlCQUF5QixDQUFDTyxLQUFLLENBQUMsU0FBQ0M7b0JBQy9DLElBQU1DLGNBQWMsRUFBRSxFQUNoQkMsbUNBQW1DRix5QkFBeUJILE1BQU0sQ0FBQ0ksYUFBYVo7b0JBRXRGLElBQUlhLGtDQUFrQzt3QkFDcEMsSUFBTUMsc0JBQXNCQyxJQUFBQSxlQUFpQixFQUFDSCxhQUFhWjt3QkFFM0QsSUFBSWMscUJBQXFCOzRCQUN2QmQsUUFBUWdCLDJCQUEyQixDQUFDTDs0QkFFcEMsT0FBTzt3QkFDVDtvQkFDRjtnQkFDRjtnQkFFQSxPQUFPRjtZQUNUOzs7O3FCQXJDNkNRLG9CQUFPLElBdUNwRCw4QkFBT0MsUUFBTyJ9