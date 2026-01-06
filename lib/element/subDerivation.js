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
var _element = /*#__PURE__*/ _interop_require_default(require("../element"));
var _assign = /*#__PURE__*/ _interop_require_default(require("../process/assign"));
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
var _SubDerivation;
var last = _necessary.arrayUtilities.last;
var _default = (0, _elements.define)((_SubDerivation = /*#__PURE__*/ function(Element) {
    _inherits(SubDerivation, Element);
    function SubDerivation(context, string, node, stepsOrSubproofs) {
        _class_call_check(this, SubDerivation);
        var _this;
        _this = _call_super(this, SubDerivation, [
            context,
            string,
            node
        ]);
        _this.stepsOrSubproofs = stepsOrSubproofs;
        return _this;
    }
    _create_class(SubDerivation, [
        {
            key: "getStepsOrSubproofs",
            value: function getStepsOrSubproofs() {
                return this.stepsOrSubproofs;
            }
        },
        {
            key: "getLastStep",
            value: function getLastStep() {
                var lastStepOrSubproof = last(this.stepsOrSubproofs), lastStep = lastStepOrSubproof; ///
                return lastStep;
            }
        },
        {
            key: "verify",
            value: function verify(substitutions, context) {
                var verifies;
                verifies = this.stepsOrSubproofs.every(function(stepOrSubproof) {
                    var assignments = [], stepOrSubproofVerifies = stepOrSubproof.verify(substitutions, assignments, context);
                    if (stepOrSubproofVerifies) {
                        var stepOrSubproofUnifies = stepOrSubproof.unify(substitutions, context);
                        if (stepOrSubproofUnifies) {
                            var assignmentsAssigned = (0, _assign.default)(assignments, context);
                            if (assignmentsAssigned) {
                                context.addStepOrSubproof(stepOrSubproof);
                                return true;
                            }
                        }
                    }
                });
                return verifies;
            }
        }
    ]);
    return SubDerivation;
}(_wrap_native_super(_element.default)), _define_property(_SubDerivation, "name", "SubDerivation"), _SubDerivation));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L3N1YkRlcml2YXRpb24uanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGFycmF5VXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuXG5pbXBvcnQgRWxlbWVudCBmcm9tIFwiLi4vZWxlbWVudFwiO1xuaW1wb3J0IGFzc2lnbkFzc2lnbm1lbnRzIGZyb20gXCIuLi9wcm9jZXNzL2Fzc2lnblwiO1xuXG5pbXBvcnQgeyBkZWZpbmUgfSBmcm9tIFwiLi4vZWxlbWVudHNcIjtcblxuY29uc3QgeyBsYXN0IH0gPSBhcnJheVV0aWxpdGllcztcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lKGNsYXNzIFN1YkRlcml2YXRpb24gZXh0ZW5kcyBFbGVtZW50IHtcbiAgY29uc3RydWN0b3IoY29udGV4dCwgc3RyaW5nLCBub2RlLCBzdGVwc09yU3VicHJvb2ZzKSB7XG4gICAgc3VwZXIoY29udGV4dCwgc3RyaW5nLCBub2RlKTtcblxuICAgIHRoaXMuc3RlcHNPclN1YnByb29mcyA9IHN0ZXBzT3JTdWJwcm9vZnM7XG4gIH1cblxuICBnZXRTdGVwc09yU3VicHJvb2ZzKCkge1xuICAgIHJldHVybiB0aGlzLnN0ZXBzT3JTdWJwcm9vZnM7XG4gIH1cblxuICBnZXRMYXN0U3RlcCgpIHtcbiAgICBjb25zdCBsYXN0U3RlcE9yU3VicHJvb2YgPSBsYXN0KHRoaXMuc3RlcHNPclN1YnByb29mcyksXG4gICAgICAgICAgbGFzdFN0ZXAgPSBsYXN0U3RlcE9yU3VicHJvb2Y7ICAvLy9cblxuICAgIHJldHVybiBsYXN0U3RlcDtcbiAgfVxuXG4gIHZlcmlmeShzdWJzdGl0dXRpb25zLCBjb250ZXh0KSB7XG4gICAgbGV0IHZlcmlmaWVzO1xuXG4gICAgdmVyaWZpZXMgPSB0aGlzLnN0ZXBzT3JTdWJwcm9vZnMuZXZlcnkoKHN0ZXBPclN1YnByb29mKSA9PiB7IC8vL1xuICAgICAgY29uc3QgYXNzaWdubWVudHMgPSBbXSxcbiAgICAgICAgICAgIHN0ZXBPclN1YnByb29mVmVyaWZpZXMgPSBzdGVwT3JTdWJwcm9vZi52ZXJpZnkoc3Vic3RpdHV0aW9ucywgYXNzaWdubWVudHMsIGNvbnRleHQpO1xuXG4gICAgICBpZiAoc3RlcE9yU3VicHJvb2ZWZXJpZmllcykge1xuICAgICAgICBjb25zdCBzdGVwT3JTdWJwcm9vZlVuaWZpZXMgPSBzdGVwT3JTdWJwcm9vZi51bmlmeShzdWJzdGl0dXRpb25zLCBjb250ZXh0KTtcblxuICAgICAgICBpZiAoc3RlcE9yU3VicHJvb2ZVbmlmaWVzKSB7XG4gICAgICAgICAgY29uc3QgYXNzaWdubWVudHNBc3NpZ25lZCA9IGFzc2lnbkFzc2lnbm1lbnRzKGFzc2lnbm1lbnRzLCBjb250ZXh0KTtcblxuICAgICAgICAgIGlmIChhc3NpZ25tZW50c0Fzc2lnbmVkKSB7XG4gICAgICAgICAgICBjb250ZXh0LmFkZFN0ZXBPclN1YnByb29mKHN0ZXBPclN1YnByb29mKTtcblxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gdmVyaWZpZXM7XG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiU3ViRGVyaXZhdGlvblwiO1xufSk7XG4iXSwibmFtZXMiOlsibGFzdCIsImFycmF5VXRpbGl0aWVzIiwiZGVmaW5lIiwiU3ViRGVyaXZhdGlvbiIsImNvbnRleHQiLCJzdHJpbmciLCJub2RlIiwic3RlcHNPclN1YnByb29mcyIsImdldFN0ZXBzT3JTdWJwcm9vZnMiLCJnZXRMYXN0U3RlcCIsImxhc3RTdGVwT3JTdWJwcm9vZiIsImxhc3RTdGVwIiwidmVyaWZ5Iiwic3Vic3RpdHV0aW9ucyIsInZlcmlmaWVzIiwiZXZlcnkiLCJzdGVwT3JTdWJwcm9vZiIsImFzc2lnbm1lbnRzIiwic3RlcE9yU3VicHJvb2ZWZXJpZmllcyIsInN0ZXBPclN1YnByb29mVW5pZmllcyIsInVuaWZ5IiwiYXNzaWdubWVudHNBc3NpZ25lZCIsImFzc2lnbkFzc2lnbm1lbnRzIiwiYWRkU3RlcE9yU3VicHJvb2YiLCJFbGVtZW50IiwibmFtZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBV0E7OztlQUFBOzs7eUJBVCtCOzhEQUVYOzZEQUNVO3dCQUVQOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXZCLElBQU0sQUFBRUEsT0FBU0MseUJBQWMsQ0FBdkJEO0lBRVIsV0FBZUUsSUFBQUEsZ0JBQU0sa0NBQUM7O2FBQU1DLGNBQ2RDLE9BQU8sRUFBRUMsTUFBTSxFQUFFQyxJQUFJLEVBQUVDLGdCQUFnQjtnQ0FEekJKOztnQkFFeEIsa0JBRndCQTtZQUVsQkM7WUFBU0M7WUFBUUM7O1FBRXZCLE1BQUtDLGdCQUFnQixHQUFHQTs7Ozs7WUFHMUJDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0QsZ0JBQWdCO1lBQzlCOzs7WUFFQUUsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1DLHFCQUFxQlYsS0FBSyxJQUFJLENBQUNPLGdCQUFnQixHQUMvQ0ksV0FBV0Qsb0JBQXFCLEdBQUc7Z0JBRXpDLE9BQU9DO1lBQ1Q7OztZQUVBQyxLQUFBQTttQkFBQUEsU0FBQUEsT0FBT0MsYUFBYSxFQUFFVCxPQUFPO2dCQUMzQixJQUFJVTtnQkFFSkEsV0FBVyxJQUFJLENBQUNQLGdCQUFnQixDQUFDUSxLQUFLLENBQUMsU0FBQ0M7b0JBQ3RDLElBQU1DLGNBQWMsRUFBRSxFQUNoQkMseUJBQXlCRixlQUFlSixNQUFNLENBQUNDLGVBQWVJLGFBQWFiO29CQUVqRixJQUFJYyx3QkFBd0I7d0JBQzFCLElBQU1DLHdCQUF3QkgsZUFBZUksS0FBSyxDQUFDUCxlQUFlVDt3QkFFbEUsSUFBSWUsdUJBQXVCOzRCQUN6QixJQUFNRSxzQkFBc0JDLElBQUFBLGVBQWlCLEVBQUNMLGFBQWFiOzRCQUUzRCxJQUFJaUIscUJBQXFCO2dDQUN2QmpCLFFBQVFtQixpQkFBaUIsQ0FBQ1A7Z0NBRTFCLE9BQU87NEJBQ1Q7d0JBQ0Y7b0JBQ0Y7Z0JBQ0Y7Z0JBRUEsT0FBT0Y7WUFDVDs7OztxQkF6Q2dEVSxnQkFBTyxJQTJDdkQsaUNBQU9DLFFBQU8ifQ==