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
var _Derivation;
var last = _necessary.arrayUtilities.last;
var _default = (0, _elements.define)((_Derivation = /*#__PURE__*/ function(Element) {
    _inherits(Derivation, Element);
    function Derivation(context, string, node, stepsOrSubproofs) {
        _class_call_check(this, Derivation);
        var _this;
        _this = _call_super(this, Derivation, [
            context,
            string,
            node
        ]);
        _this.stepsOrSubproofs = stepsOrSubproofs;
        return _this;
    }
    _create_class(Derivation, [
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
                        var assignmentsAssigned = (0, _assign.default)(assignments, context);
                        if (assignmentsAssigned) {
                            context.addStepOrSubproof(stepOrSubproof);
                            return true;
                        }
                    }
                });
                return verifies;
            }
        }
    ]);
    return Derivation;
}(_wrap_native_super(_element.default)), _define_property(_Derivation, "name", "Derivation"), _Derivation));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L2Rlcml2YXRpb24uanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGFycmF5VXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuXG5pbXBvcnQgRWxlbWVudCBmcm9tIFwiLi4vZWxlbWVudFwiO1xuaW1wb3J0IGFzc2lnbkFzc2lnbm1lbnRzIGZyb20gXCIuLi9wcm9jZXNzL2Fzc2lnblwiO1xuXG5pbXBvcnQgeyBkZWZpbmUgfSBmcm9tIFwiLi4vZWxlbWVudHNcIjtcblxuY29uc3QgeyBsYXN0IH0gPSBhcnJheVV0aWxpdGllcztcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lKGNsYXNzIERlcml2YXRpb24gZXh0ZW5kcyBFbGVtZW50IHtcbiAgY29uc3RydWN0b3IoY29udGV4dCwgc3RyaW5nLCBub2RlLCBzdGVwc09yU3VicHJvb2ZzKSB7XG4gICAgc3VwZXIoY29udGV4dCwgc3RyaW5nLCBub2RlKTtcblxuICAgIHRoaXMuc3RlcHNPclN1YnByb29mcyA9IHN0ZXBzT3JTdWJwcm9vZnM7XG4gIH1cblxuICBnZXRTdGVwc09yU3VicHJvb2ZzKCkge1xuICAgIHJldHVybiB0aGlzLnN0ZXBzT3JTdWJwcm9vZnM7XG4gIH1cblxuICBnZXRMYXN0U3RlcCgpIHtcbiAgICBjb25zdCBsYXN0U3RlcE9yU3VicHJvb2YgPSBsYXN0KHRoaXMuc3RlcHNPclN1YnByb29mcyksXG4gICAgICAgICAgbGFzdFN0ZXAgPSBsYXN0U3RlcE9yU3VicHJvb2Y7ICAvLy9cblxuICAgIHJldHVybiBsYXN0U3RlcDtcbiAgfVxuXG4gIHZlcmlmeShzdWJzdGl0dXRpb25zLCBjb250ZXh0KSB7XG4gICAgbGV0IHZlcmlmaWVzO1xuXG4gICAgdmVyaWZpZXMgPSB0aGlzLnN0ZXBzT3JTdWJwcm9vZnMuZXZlcnkoKHN0ZXBPclN1YnByb29mKSA9PiB7IC8vL1xuICAgICAgY29uc3QgYXNzaWdubWVudHMgPSBbXSxcbiAgICAgICAgICAgIHN0ZXBPclN1YnByb29mVmVyaWZpZXMgPSBzdGVwT3JTdWJwcm9vZi52ZXJpZnkoc3Vic3RpdHV0aW9ucywgYXNzaWdubWVudHMsIGNvbnRleHQpO1xuXG4gICAgICBpZiAoc3RlcE9yU3VicHJvb2ZWZXJpZmllcykge1xuICAgICAgICBjb25zdCBhc3NpZ25tZW50c0Fzc2lnbmVkID0gYXNzaWduQXNzaWdubWVudHMoYXNzaWdubWVudHMsIGNvbnRleHQpO1xuXG4gICAgICAgIGlmIChhc3NpZ25tZW50c0Fzc2lnbmVkKSB7XG4gICAgICAgICAgY29udGV4dC5hZGRTdGVwT3JTdWJwcm9vZihzdGVwT3JTdWJwcm9vZik7XG5cbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHZlcmlmaWVzO1xuICB9XG5cbiAgc3RhdGljIG5hbWUgPSBcIkRlcml2YXRpb25cIjtcbn0pO1xuXG4iXSwibmFtZXMiOlsibGFzdCIsImFycmF5VXRpbGl0aWVzIiwiZGVmaW5lIiwiRGVyaXZhdGlvbiIsImNvbnRleHQiLCJzdHJpbmciLCJub2RlIiwic3RlcHNPclN1YnByb29mcyIsImdldFN0ZXBzT3JTdWJwcm9vZnMiLCJnZXRMYXN0U3RlcCIsImxhc3RTdGVwT3JTdWJwcm9vZiIsImxhc3RTdGVwIiwidmVyaWZ5Iiwic3Vic3RpdHV0aW9ucyIsInZlcmlmaWVzIiwiZXZlcnkiLCJzdGVwT3JTdWJwcm9vZiIsImFzc2lnbm1lbnRzIiwic3RlcE9yU3VicHJvb2ZWZXJpZmllcyIsImFzc2lnbm1lbnRzQXNzaWduZWQiLCJhc3NpZ25Bc3NpZ25tZW50cyIsImFkZFN0ZXBPclN1YnByb29mIiwiRWxlbWVudCIsIm5hbWUiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQVdBOzs7ZUFBQTs7O3lCQVQrQjs4REFFWDs2REFDVTt3QkFFUDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUV2QixJQUFNLEFBQUVBLE9BQVNDLHlCQUFjLENBQXZCRDtJQUVSLFdBQWVFLElBQUFBLGdCQUFNLCtCQUFDOzthQUFNQyxXQUNkQyxPQUFPLEVBQUVDLE1BQU0sRUFBRUMsSUFBSSxFQUFFQyxnQkFBZ0I7Z0NBRHpCSjs7Z0JBRXhCLGtCQUZ3QkE7WUFFbEJDO1lBQVNDO1lBQVFDOztRQUV2QixNQUFLQyxnQkFBZ0IsR0FBR0E7Ozs7O1lBRzFCQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNELGdCQUFnQjtZQUM5Qjs7O1lBRUFFLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNQyxxQkFBcUJWLEtBQUssSUFBSSxDQUFDTyxnQkFBZ0IsR0FDL0NJLFdBQVdELG9CQUFxQixHQUFHO2dCQUV6QyxPQUFPQztZQUNUOzs7WUFFQUMsS0FBQUE7bUJBQUFBLFNBQUFBLE9BQU9DLGFBQWEsRUFBRVQsT0FBTztnQkFDM0IsSUFBSVU7Z0JBRUpBLFdBQVcsSUFBSSxDQUFDUCxnQkFBZ0IsQ0FBQ1EsS0FBSyxDQUFDLFNBQUNDO29CQUN0QyxJQUFNQyxjQUFjLEVBQUUsRUFDaEJDLHlCQUF5QkYsZUFBZUosTUFBTSxDQUFDQyxlQUFlSSxhQUFhYjtvQkFFakYsSUFBSWMsd0JBQXdCO3dCQUMxQixJQUFNQyxzQkFBc0JDLElBQUFBLGVBQWlCLEVBQUNILGFBQWFiO3dCQUUzRCxJQUFJZSxxQkFBcUI7NEJBQ3ZCZixRQUFRaUIsaUJBQWlCLENBQUNMOzRCQUUxQixPQUFPO3dCQUNUO29CQUNGO2dCQUNGO2dCQUVBLE9BQU9GO1lBQ1Q7Ozs7cUJBckM2Q1EsZ0JBQU8sSUF1Q3BELDhCQUFPQyxRQUFPIn0=