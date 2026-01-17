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
var _scoped = /*#__PURE__*/ _interop_require_default(require("../context/scoped"));
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
                var verifies = false;
                var scopedContext = _scoped.default.fromNothing(context); ///
                context = scopedContext; ///
                var derivationVerifies = this.derivation.verify(substitutions, context);
                if (derivationVerifies) {
                    var lastProofAssertion = context.getLastProofAssertion();
                    if (lastProofAssertion !== null) {
                        var statement = this.getStatement(), conclusionStatement = conclusion.getStatement(), conclusionStatementEqualToStatement = conclusionStatement.isEqualTo(statement);
                        if (conclusionStatementEqualToStatement) {
                            verifies = true;
                        }
                    }
                }
                return verifies;
            }
        }
    ]);
    return Proof;
}(_wrap_native_super(_element.default)), _define_property(_Proof, "name", "Proof"), _Proof));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L3Byb29mLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgRWxlbWVudCBmcm9tIFwiLi4vZWxlbWVudFwiO1xuaW1wb3J0IFNjb3BlZENvbnRleHQgZnJvbSBcIi4uL2NvbnRleHQvc2NvcGVkXCI7XG5cbmltcG9ydCB7IGRlZmluZSB9IGZyb20gXCIuLi9lbGVtZW50c1wiO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmUoY2xhc3MgUHJvb2YgZXh0ZW5kcyBFbGVtZW50IHtcbiAgY29uc3RydWN0b3IoY29udGV4dCwgc3RyaW5nLCBub2RlLCBkZXJpdmF0aW9uKSB7XG4gICAgc3VwZXIoY29udGV4dCwgc3RyaW5nLCBub2RlKTtcblxuICAgIHRoaXMuZGVyaXZhdGlvbiA9IGRlcml2YXRpb247XG4gIH1cblxuICBnZXREZXJpdmF0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLmRlcml2YXRpb247XG4gIH1cblxuICBnZXRMYXN0UHJvb2ZBc3NlcnRpb24oKSB7IHJldHVybiB0aGlzLmRlcml2YXRpb24uZ2V0TGFzdFByb29mQXNzZXJ0aW9uKCk7IH1cblxuICBnZXRTdGF0ZW1lbnQoKSB7XG4gICAgY29uc3QgbGFzdFByb29mQXNzZXJ0aW9uID0gdGhpcy5nZXRMYXN0UHJvb2ZBc3NlcnRpb24oKSxcbiAgICAgICAgICBsYXN0UHJvb2ZBc3NlcnRpb25TdGF0ZW1lbnQgPSBsYXN0UHJvb2ZBc3NlcnRpb24uZ2V0U3RhdGVtZW50KCksXG4gICAgICAgICAgc3RhdGVtZW50ID0gbGFzdFByb29mQXNzZXJ0aW9uU3RhdGVtZW50OyAvLy9cblxuICAgIHJldHVybiBzdGF0ZW1lbnQ7XG4gIH1cblxuICB2ZXJpZnkoc3Vic3RpdHV0aW9ucywgY29uY2x1c2lvbiwgY29udGV4dCkge1xuICAgIGxldCB2ZXJpZmllcyA9IGZhbHNlO1xuXG4gICAgY29uc3Qgc2NvcGVkQ29udGV4dCA9IFNjb3BlZENvbnRleHQuZnJvbU5vdGhpbmcoY29udGV4dCk7IC8vL1xuXG4gICAgY29udGV4dCA9IHNjb3BlZENvbnRleHQ7IC8vL1xuXG4gICAgY29uc3QgZGVyaXZhdGlvblZlcmlmaWVzID0gdGhpcy5kZXJpdmF0aW9uLnZlcmlmeShzdWJzdGl0dXRpb25zLCBjb250ZXh0KTtcblxuICAgIGlmIChkZXJpdmF0aW9uVmVyaWZpZXMpIHtcbiAgICAgIGNvbnN0IGxhc3RQcm9vZkFzc2VydGlvbiA9IGNvbnRleHQuZ2V0TGFzdFByb29mQXNzZXJ0aW9uKCk7XG5cbiAgICAgIGlmIChsYXN0UHJvb2ZBc3NlcnRpb24gIT09IG51bGwpIHtcbiAgICAgICAgY29uc3Qgc3RhdGVtZW50ID0gdGhpcy5nZXRTdGF0ZW1lbnQoKSxcbiAgICAgICAgICAgICAgY29uY2x1c2lvblN0YXRlbWVudCA9IGNvbmNsdXNpb24uZ2V0U3RhdGVtZW50KCksXG4gICAgICAgICAgICAgIGNvbmNsdXNpb25TdGF0ZW1lbnRFcXVhbFRvU3RhdGVtZW50ID0gY29uY2x1c2lvblN0YXRlbWVudC5pc0VxdWFsVG8oc3RhdGVtZW50KTtcblxuICAgICAgICBpZiAoY29uY2x1c2lvblN0YXRlbWVudEVxdWFsVG9TdGF0ZW1lbnQpIHtcbiAgICAgICAgICB2ZXJpZmllcyA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdmVyaWZpZXM7XG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiUHJvb2ZcIjtcbn0pO1xuIl0sIm5hbWVzIjpbImRlZmluZSIsIlByb29mIiwiY29udGV4dCIsInN0cmluZyIsIm5vZGUiLCJkZXJpdmF0aW9uIiwiZ2V0RGVyaXZhdGlvbiIsImdldExhc3RQcm9vZkFzc2VydGlvbiIsImdldFN0YXRlbWVudCIsImxhc3RQcm9vZkFzc2VydGlvbiIsImxhc3RQcm9vZkFzc2VydGlvblN0YXRlbWVudCIsInN0YXRlbWVudCIsInZlcmlmeSIsInN1YnN0aXR1dGlvbnMiLCJjb25jbHVzaW9uIiwidmVyaWZpZXMiLCJzY29wZWRDb250ZXh0IiwiU2NvcGVkQ29udGV4dCIsImZyb21Ob3RoaW5nIiwiZGVyaXZhdGlvblZlcmlmaWVzIiwiY29uY2x1c2lvblN0YXRlbWVudCIsImNvbmNsdXNpb25TdGF0ZW1lbnRFcXVhbFRvU3RhdGVtZW50IiwiaXNFcXVhbFRvIiwiRWxlbWVudCIsIm5hbWUiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQU9BOzs7ZUFBQTs7OzhEQUxvQjs2REFDTTt3QkFFSDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUV2QixXQUFlQSxJQUFBQSxnQkFBTSwwQkFBQzs7YUFBTUMsTUFDZEMsT0FBTyxFQUFFQyxNQUFNLEVBQUVDLElBQUksRUFBRUMsVUFBVTtnQ0FEbkJKOztnQkFFeEIsa0JBRndCQTtZQUVsQkM7WUFBU0M7WUFBUUM7O1FBRXZCLE1BQUtDLFVBQVUsR0FBR0E7Ozs7O1lBR3BCQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNELFVBQVU7WUFDeEI7OztZQUVBRSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQTBCLE9BQU8sSUFBSSxDQUFDRixVQUFVLENBQUNFLHFCQUFxQjtZQUFJOzs7WUFFMUVDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNQyxxQkFBcUIsSUFBSSxDQUFDRixxQkFBcUIsSUFDL0NHLDhCQUE4QkQsbUJBQW1CRCxZQUFZLElBQzdERyxZQUFZRCw2QkFBNkIsR0FBRztnQkFFbEQsT0FBT0M7WUFDVDs7O1lBRUFDLEtBQUFBO21CQUFBQSxTQUFBQSxPQUFPQyxhQUFhLEVBQUVDLFVBQVUsRUFBRVosT0FBTztnQkFDdkMsSUFBSWEsV0FBVztnQkFFZixJQUFNQyxnQkFBZ0JDLGVBQWEsQ0FBQ0MsV0FBVyxDQUFDaEIsVUFBVSxHQUFHO2dCQUU3REEsVUFBVWMsZUFBZSxHQUFHO2dCQUU1QixJQUFNRyxxQkFBcUIsSUFBSSxDQUFDZCxVQUFVLENBQUNPLE1BQU0sQ0FBQ0MsZUFBZVg7Z0JBRWpFLElBQUlpQixvQkFBb0I7b0JBQ3RCLElBQU1WLHFCQUFxQlAsUUFBUUsscUJBQXFCO29CQUV4RCxJQUFJRSx1QkFBdUIsTUFBTTt3QkFDL0IsSUFBTUUsWUFBWSxJQUFJLENBQUNILFlBQVksSUFDN0JZLHNCQUFzQk4sV0FBV04sWUFBWSxJQUM3Q2Esc0NBQXNDRCxvQkFBb0JFLFNBQVMsQ0FBQ1g7d0JBRTFFLElBQUlVLHFDQUFxQzs0QkFDdkNOLFdBQVc7d0JBQ2I7b0JBQ0Y7Z0JBQ0Y7Z0JBRUEsT0FBT0E7WUFDVDs7OztxQkE3Q3dDUSxnQkFBTyxJQStDL0MseUJBQU9DLFFBQU8ifQ==