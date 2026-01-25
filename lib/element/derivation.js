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
var _occamfurtle = require("occam-furtle");
var _necessary = require("necessary");
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L2Rlcml2YXRpb24uanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IEVsZW1lbnQgfSBmcm9tIFwib2NjYW0tZnVydGxlXCI7XG5pbXBvcnQgeyBhcnJheVV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcblxuaW1wb3J0IGFzc2lnbkFzc2lnbm1lbnRzIGZyb20gXCIuLi9wcm9jZXNzL2Fzc2lnblwiO1xuXG5pbXBvcnQgeyBkZWZpbmUgfSBmcm9tIFwiLi4vZWxlbWVudHNcIjtcblxuY29uc3QgeyBsYXN0IH0gPSBhcnJheVV0aWxpdGllcztcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lKGNsYXNzIERlcml2YXRpb24gZXh0ZW5kcyBFbGVtZW50IHtcbiAgY29uc3RydWN0b3IoY29udGV4dCwgc3RyaW5nLCBub2RlLCBzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zKSB7XG4gICAgc3VwZXIoY29udGV4dCwgc3RyaW5nLCBub2RlKTtcblxuICAgIHRoaXMuc3VicHJvb2ZPclByb29mQXNzZXJ0aW9ucyA9IHN1YnByb29mT3JQcm9vZkFzc2VydGlvbnM7XG4gIH1cblxuICBnZXRTdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zKCkge1xuICAgIHJldHVybiB0aGlzLnN1YnByb29mT3JQcm9vZkFzc2VydGlvbnM7XG4gIH1cblxuICBnZXRMYXN0UHJvb2ZBc3NlcnRpb24oKSB7XG4gICAgY29uc3QgbGFzdFN1YnByb29mT3JQcm9vZkFzc2VydGlvbiA9IGxhc3QodGhpcy5zdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zKSxcbiAgICAgICAgICBsYXN0UHJvb2ZBc3NlcnRpb24gPSBsYXN0U3VicHJvb2ZPclByb29mQXNzZXJ0aW9uOyAgLy8vXG5cbiAgICByZXR1cm4gbGFzdFByb29mQXNzZXJ0aW9uO1xuICB9XG5cbiAgdmVyaWZ5KGNvbnRleHQpIHtcbiAgICBsZXQgdmVyaWZpZXM7XG5cbiAgICB2ZXJpZmllcyA9IHRoaXMuc3VicHJvb2ZPclByb29mQXNzZXJ0aW9ucy5ldmVyeSgoc3VicHJvb2ZPclByb29mQXNzZXJ0aW9uKSA9PiB7IC8vL1xuICAgICAgY29uc3QgYXNzaWdubWVudHMgPSBbXSxcbiAgICAgICAgICAgIHN1YnByb29mT3JQcm9vZkFzc2VydGlvblZlcmlmaWVzID0gc3VicHJvb2ZPclByb29mQXNzZXJ0aW9uLnZlcmlmeShhc3NpZ25tZW50cywgY29udGV4dCk7XG5cbiAgICAgIGlmIChzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25WZXJpZmllcykge1xuICAgICAgICBjb25zdCBhc3NpZ25tZW50c0Fzc2lnbmVkID0gYXNzaWduQXNzaWdubWVudHMoYXNzaWdubWVudHMsIGNvbnRleHQpO1xuXG4gICAgICAgIGlmIChhc3NpZ25tZW50c0Fzc2lnbmVkKSB7XG4gICAgICAgICAgY29udGV4dC5hZGRTdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb24oc3VicHJvb2ZPclByb29mQXNzZXJ0aW9uKTtcblxuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gdmVyaWZpZXM7XG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiRGVyaXZhdGlvblwiO1xufSk7XG5cbiJdLCJuYW1lcyI6WyJsYXN0IiwiYXJyYXlVdGlsaXRpZXMiLCJkZWZpbmUiLCJEZXJpdmF0aW9uIiwiY29udGV4dCIsInN0cmluZyIsIm5vZGUiLCJzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zIiwiZ2V0U3VicHJvb2ZPclByb29mQXNzZXJ0aW9ucyIsImdldExhc3RQcm9vZkFzc2VydGlvbiIsImxhc3RTdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb24iLCJsYXN0UHJvb2ZBc3NlcnRpb24iLCJ2ZXJpZnkiLCJ2ZXJpZmllcyIsImV2ZXJ5Iiwic3VicHJvb2ZPclByb29mQXNzZXJ0aW9uIiwiYXNzaWdubWVudHMiLCJzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25WZXJpZmllcyIsImFzc2lnbm1lbnRzQXNzaWduZWQiLCJhc3NpZ25Bc3NpZ25tZW50cyIsImFkZFN1YnByb29mT3JQcm9vZkFzc2VydGlvbiIsIkVsZW1lbnQiLCJuYW1lIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFXQTs7O2VBQUE7OzsyQkFUd0I7eUJBQ087NkRBRUQ7d0JBRVA7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFdkIsSUFBTSxBQUFFQSxPQUFTQyx5QkFBYyxDQUF2QkQ7SUFFUixXQUFlRSxJQUFBQSxnQkFBTSwrQkFBQzs7YUFBTUMsV0FDZEMsT0FBTyxFQUFFQyxNQUFNLEVBQUVDLElBQUksRUFBRUMseUJBQXlCO2dDQURsQ0o7O2dCQUV4QixrQkFGd0JBO1lBRWxCQztZQUFTQztZQUFRQzs7UUFFdkIsTUFBS0MseUJBQXlCLEdBQUdBOzs7OztZQUduQ0MsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDRCx5QkFBeUI7WUFDdkM7OztZQUVBRSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTUMsK0JBQStCVixLQUFLLElBQUksQ0FBQ08seUJBQXlCLEdBQ2xFSSxxQkFBcUJELDhCQUErQixHQUFHO2dCQUU3RCxPQUFPQztZQUNUOzs7WUFFQUMsS0FBQUE7bUJBQUFBLFNBQUFBLE9BQU9SLE9BQU87Z0JBQ1osSUFBSVM7Z0JBRUpBLFdBQVcsSUFBSSxDQUFDTix5QkFBeUIsQ0FBQ08sS0FBSyxDQUFDLFNBQUNDO29CQUMvQyxJQUFNQyxjQUFjLEVBQUUsRUFDaEJDLG1DQUFtQ0YseUJBQXlCSCxNQUFNLENBQUNJLGFBQWFaO29CQUV0RixJQUFJYSxrQ0FBa0M7d0JBQ3BDLElBQU1DLHNCQUFzQkMsSUFBQUEsZUFBaUIsRUFBQ0gsYUFBYVo7d0JBRTNELElBQUljLHFCQUFxQjs0QkFDdkJkLFFBQVFnQiwyQkFBMkIsQ0FBQ0w7NEJBRXBDLE9BQU87d0JBQ1Q7b0JBQ0Y7Z0JBQ0Y7Z0JBRUEsT0FBT0Y7WUFDVDs7OztxQkFyQzZDUSxvQkFBTyxJQXVDcEQsOEJBQU9DLFFBQU8ifQ==