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
var _SubDerivation;
var last = _necessary.arrayUtilities.last;
var _default = (0, _elements.define)((_SubDerivation = /*#__PURE__*/ function(Element) {
    _inherits(SubDerivation, Element);
    function SubDerivation(context, string, node, subproofOrProofAssertions) {
        _class_call_check(this, SubDerivation);
        var _this;
        _this = _call_super(this, SubDerivation, [
            context,
            string,
            node
        ]);
        _this.subproofOrProofAssertions = subproofOrProofAssertions;
        return _this;
    }
    _create_class(SubDerivation, [
        {
            key: "getSubproofOrProofAssertions",
            value: function getSubproofOrProofAssertions() {
                return this.subproofOrProofAssertions;
            }
        },
        {
            key: "getSubDerivationNode",
            value: function getSubDerivationNode() {
                var node = this.getNode(), subDerivationNode = node; ///
                return subDerivationNode;
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
            value: function verify(substitutions, context) {
                var verifies;
                verifies = this.subproofOrProofAssertions.every(function(subproofOrProofAssertion) {
                    var assignments = [], subproofOrProofAssertionVarifies = subproofOrProofAssertion.verify(substitutions, assignments, context);
                    if (subproofOrProofAssertionVarifies) {
                        (0, _assign.default)(assignments, context);
                        context.addSubproofOrProofAssertion(subproofOrProofAssertion);
                        return true;
                    }
                });
                return verifies;
            }
        }
    ]);
    return SubDerivation;
}(_wrap_native_super(_occamlanguages.Element)), _define_property(_SubDerivation, "name", "SubDerivation"), _SubDerivation));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L3N1YkRlcml2YXRpb24uanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IEVsZW1lbnQgfSBmcm9tIFwib2NjYW0tbGFuZ3VhZ2VzXCI7XG5pbXBvcnQgeyBhcnJheVV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcblxuaW1wb3J0IGFzc2lnbkFzc2lnbm1lbnRzIGZyb20gXCIuLi9wcm9jZXNzL2Fzc2lnblwiO1xuXG5pbXBvcnQgeyBkZWZpbmUgfSBmcm9tIFwiLi4vZWxlbWVudHNcIjtcblxuY29uc3QgeyBsYXN0IH0gPSBhcnJheVV0aWxpdGllcztcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lKGNsYXNzIFN1YkRlcml2YXRpb24gZXh0ZW5kcyBFbGVtZW50IHtcbiAgY29uc3RydWN0b3IoY29udGV4dCwgc3RyaW5nLCBub2RlLCBzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zKSB7XG4gICAgc3VwZXIoY29udGV4dCwgc3RyaW5nLCBub2RlKTtcblxuICAgIHRoaXMuc3VicHJvb2ZPclByb29mQXNzZXJ0aW9ucyA9IHN1YnByb29mT3JQcm9vZkFzc2VydGlvbnM7XG4gIH1cblxuICBnZXRTdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zKCkge1xuICAgIHJldHVybiB0aGlzLnN1YnByb29mT3JQcm9vZkFzc2VydGlvbnM7XG4gIH1cblxuICBnZXRTdWJEZXJpdmF0aW9uTm9kZSgpIHtcbiAgICBjb25zdCBub2RlID0gdGhpcy5nZXROb2RlKCksXG4gICAgICAgICAgc3ViRGVyaXZhdGlvbk5vZGUgPSBub2RlOyAvLy9cblxuICAgIHJldHVybiBzdWJEZXJpdmF0aW9uTm9kZTtcbiAgfVxuXG4gIGdldExhc3RQcm9vZkFzc2VydGlvbigpIHtcbiAgICBjb25zdCBsYXN0U3VicHJvb2ZPclByb29mQXNzZXJ0aW9uID0gbGFzdCh0aGlzLnN1YnByb29mT3JQcm9vZkFzc2VydGlvbnMpLFxuICAgICAgICAgIGxhc3RQcm9vZkFzc2VydGlvbiA9IGxhc3RTdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb247ICAvLy9cblxuICAgIHJldHVybiBsYXN0UHJvb2ZBc3NlcnRpb247XG4gIH1cblxuICB2ZXJpZnkoc3Vic3RpdHV0aW9ucywgY29udGV4dCkge1xuICAgIGxldCB2ZXJpZmllcztcblxuICAgIHZlcmlmaWVzID0gdGhpcy5zdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zLmV2ZXJ5KChzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb24pID0+IHsgLy8vXG4gICAgICBjb25zdCBhc3NpZ25tZW50cyA9IFtdLFxuICAgICAgICAgICAgc3VicHJvb2ZPclByb29mQXNzZXJ0aW9uVmFyaWZpZXMgPSBzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb24udmVyaWZ5KHN1YnN0aXR1dGlvbnMsIGFzc2lnbm1lbnRzLCBjb250ZXh0KTtcblxuICAgICAgaWYgKHN1YnByb29mT3JQcm9vZkFzc2VydGlvblZhcmlmaWVzKSB7XG4gICAgICAgIGFzc2lnbkFzc2lnbm1lbnRzKGFzc2lnbm1lbnRzLCBjb250ZXh0KTtcblxuICAgICAgICBjb250ZXh0LmFkZFN1YnByb29mT3JQcm9vZkFzc2VydGlvbihzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb24pO1xuXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHZlcmlmaWVzO1xuICB9XG5cbiAgc3RhdGljIG5hbWUgPSBcIlN1YkRlcml2YXRpb25cIjtcbn0pO1xuIl0sIm5hbWVzIjpbImxhc3QiLCJhcnJheVV0aWxpdGllcyIsImRlZmluZSIsIlN1YkRlcml2YXRpb24iLCJjb250ZXh0Iiwic3RyaW5nIiwibm9kZSIsInN1YnByb29mT3JQcm9vZkFzc2VydGlvbnMiLCJnZXRTdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zIiwiZ2V0U3ViRGVyaXZhdGlvbk5vZGUiLCJnZXROb2RlIiwic3ViRGVyaXZhdGlvbk5vZGUiLCJnZXRMYXN0UHJvb2ZBc3NlcnRpb24iLCJsYXN0U3VicHJvb2ZPclByb29mQXNzZXJ0aW9uIiwibGFzdFByb29mQXNzZXJ0aW9uIiwidmVyaWZ5Iiwic3Vic3RpdHV0aW9ucyIsInZlcmlmaWVzIiwiZXZlcnkiLCJzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb24iLCJhc3NpZ25tZW50cyIsInN1YnByb29mT3JQcm9vZkFzc2VydGlvblZhcmlmaWVzIiwiYXNzaWduQXNzaWdubWVudHMiLCJhZGRTdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb24iLCJFbGVtZW50IiwibmFtZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBV0E7OztlQUFBOzs7OEJBVHdCO3lCQUNPOzZEQUVEO3dCQUVQOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXZCLElBQU0sQUFBRUEsT0FBU0MseUJBQWMsQ0FBdkJEO0lBRVIsV0FBZUUsSUFBQUEsZ0JBQU0sa0NBQUM7O2FBQU1DLGNBQ2RDLE9BQU8sRUFBRUMsTUFBTSxFQUFFQyxJQUFJLEVBQUVDLHlCQUF5QjtnQ0FEbENKOztnQkFFeEIsa0JBRndCQTtZQUVsQkM7WUFBU0M7WUFBUUM7O1FBRXZCLE1BQUtDLHlCQUF5QixHQUFHQTs7Ozs7WUFHbkNDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0QseUJBQXlCO1lBQ3ZDOzs7WUFFQUUsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1ILE9BQU8sSUFBSSxDQUFDSSxPQUFPLElBQ25CQyxvQkFBb0JMLE1BQU0sR0FBRztnQkFFbkMsT0FBT0s7WUFDVDs7O1lBRUFDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNQywrQkFBK0JiLEtBQUssSUFBSSxDQUFDTyx5QkFBeUIsR0FDbEVPLHFCQUFxQkQsOEJBQStCLEdBQUc7Z0JBRTdELE9BQU9DO1lBQ1Q7OztZQUVBQyxLQUFBQTttQkFBQUEsU0FBQUEsT0FBT0MsYUFBYSxFQUFFWixPQUFPO2dCQUMzQixJQUFJYTtnQkFFSkEsV0FBVyxJQUFJLENBQUNWLHlCQUF5QixDQUFDVyxLQUFLLENBQUMsU0FBQ0M7b0JBQy9DLElBQU1DLGNBQWMsRUFBRSxFQUNoQkMsbUNBQW1DRix5QkFBeUJKLE1BQU0sQ0FBQ0MsZUFBZUksYUFBYWhCO29CQUVyRyxJQUFJaUIsa0NBQWtDO3dCQUNwQ0MsSUFBQUEsZUFBaUIsRUFBQ0YsYUFBYWhCO3dCQUUvQkEsUUFBUW1CLDJCQUEyQixDQUFDSjt3QkFFcEMsT0FBTztvQkFDVDtnQkFDRjtnQkFFQSxPQUFPRjtZQUNUOzs7O3FCQTFDZ0RPLHVCQUFPLElBNEN2RCxpQ0FBT0MsUUFBTyJ9