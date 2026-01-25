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
var _context = require("../utilities/context");
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
var _Proof;
var define = _occamfurtle.elements.define;
var _default = define((_Proof = /*#__PURE__*/ function(Element) {
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
            value: function verify(conclusion, context) {
                var _this = this;
                var verifies = false;
                (0, _context.scope)(function(context) {
                    var derivationVerifies = _this.derivation.verify(context);
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
}(_wrap_native_super(_occamfurtle.Element)), _define_property(_Proof, "name", "Proof"), _Proof));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L3Byb29mLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBFbGVtZW50LCBlbGVtZW50cyB9IGZyb20gXCJvY2NhbS1mdXJ0bGVcIjtcblxuaW1wb3J0IHsgc2NvcGUgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2NvbnRleHRcIjtcblxuY29uc3QgeyBkZWZpbmUgfSA9IGVsZW1lbnRzO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmUoY2xhc3MgUHJvb2YgZXh0ZW5kcyBFbGVtZW50IHtcbiAgY29uc3RydWN0b3IoY29udGV4dCwgc3RyaW5nLCBub2RlLCBkZXJpdmF0aW9uKSB7XG4gICAgc3VwZXIoY29udGV4dCwgc3RyaW5nLCBub2RlKTtcblxuICAgIHRoaXMuZGVyaXZhdGlvbiA9IGRlcml2YXRpb247XG4gIH1cblxuICBnZXREZXJpdmF0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLmRlcml2YXRpb247XG4gIH1cblxuICBnZXRMYXN0UHJvb2ZBc3NlcnRpb24oKSB7IHJldHVybiB0aGlzLmRlcml2YXRpb24uZ2V0TGFzdFByb29mQXNzZXJ0aW9uKCk7IH1cblxuICBnZXRTdGF0ZW1lbnQoKSB7XG4gICAgY29uc3QgbGFzdFByb29mQXNzZXJ0aW9uID0gdGhpcy5nZXRMYXN0UHJvb2ZBc3NlcnRpb24oKSxcbiAgICAgICAgICBsYXN0UHJvb2ZBc3NlcnRpb25TdGF0ZW1lbnQgPSBsYXN0UHJvb2ZBc3NlcnRpb24uZ2V0U3RhdGVtZW50KCksXG4gICAgICAgICAgc3RhdGVtZW50ID0gbGFzdFByb29mQXNzZXJ0aW9uU3RhdGVtZW50OyAvLy9cblxuICAgIHJldHVybiBzdGF0ZW1lbnQ7XG4gIH1cblxuICB2ZXJpZnkoY29uY2x1c2lvbiwgY29udGV4dCkge1xuICAgIGxldCB2ZXJpZmllcyA9IGZhbHNlO1xuXG4gICAgc2NvcGUoKGNvbnRleHQpID0+IHtcbiAgICAgIGNvbnN0IGRlcml2YXRpb25WZXJpZmllcyA9IHRoaXMuZGVyaXZhdGlvbi52ZXJpZnkoY29udGV4dCk7XG5cbiAgICAgIGlmIChkZXJpdmF0aW9uVmVyaWZpZXMpIHtcbiAgICAgICAgY29uc3QgbGFzdFByb29mQXNzZXJ0aW9uID0gY29udGV4dC5nZXRMYXN0UHJvb2ZBc3NlcnRpb24oKTtcblxuICAgICAgICBpZiAobGFzdFByb29mQXNzZXJ0aW9uICE9PSBudWxsKSB7XG4gICAgICAgICAgY29uc3Qgc3RhdGVtZW50ID0gdGhpcy5nZXRTdGF0ZW1lbnQoKSxcbiAgICAgICAgICAgICAgICBjb25jbHVzaW9uU3RhdGVtZW50ID0gY29uY2x1c2lvbi5nZXRTdGF0ZW1lbnQoKSxcbiAgICAgICAgICAgICAgICBjb25jbHVzaW9uU3RhdGVtZW50RXF1YWxUb1N0YXRlbWVudCA9IGNvbmNsdXNpb25TdGF0ZW1lbnQuaXNFcXVhbFRvKHN0YXRlbWVudCk7XG5cbiAgICAgICAgICBpZiAoY29uY2x1c2lvblN0YXRlbWVudEVxdWFsVG9TdGF0ZW1lbnQpIHtcbiAgICAgICAgICAgIHZlcmlmaWVzID0gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LCBjb250ZXh0KTtcblxuICAgIHJldHVybiB2ZXJpZmllcztcbiAgfVxuXG4gIHN0YXRpYyBuYW1lID0gXCJQcm9vZlwiO1xufSk7XG4iXSwibmFtZXMiOlsiZGVmaW5lIiwiZWxlbWVudHMiLCJQcm9vZiIsImNvbnRleHQiLCJzdHJpbmciLCJub2RlIiwiZGVyaXZhdGlvbiIsImdldERlcml2YXRpb24iLCJnZXRMYXN0UHJvb2ZBc3NlcnRpb24iLCJnZXRTdGF0ZW1lbnQiLCJsYXN0UHJvb2ZBc3NlcnRpb24iLCJsYXN0UHJvb2ZBc3NlcnRpb25TdGF0ZW1lbnQiLCJzdGF0ZW1lbnQiLCJ2ZXJpZnkiLCJjb25jbHVzaW9uIiwidmVyaWZpZXMiLCJzY29wZSIsImRlcml2YXRpb25WZXJpZmllcyIsImNvbmNsdXNpb25TdGF0ZW1lbnQiLCJjb25jbHVzaW9uU3RhdGVtZW50RXF1YWxUb1N0YXRlbWVudCIsImlzRXF1YWxUbyIsIkVsZW1lbnQiLCJuYW1lIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFRQTs7O2VBQUE7OzsyQkFOa0M7dUJBRVo7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXRCLElBQU0sQUFBRUEsU0FBV0MscUJBQVEsQ0FBbkJEO0lBRVIsV0FBZUEsK0JBQU87O2FBQU1FLE1BQ2RDLE9BQU8sRUFBRUMsTUFBTSxFQUFFQyxJQUFJLEVBQUVDLFVBQVU7Z0NBRG5CSjs7Z0JBRXhCLGtCQUZ3QkE7WUFFbEJDO1lBQVNDO1lBQVFDOztRQUV2QixNQUFLQyxVQUFVLEdBQUdBOzs7OztZQUdwQkMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDRCxVQUFVO1lBQ3hCOzs7WUFFQUUsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUEwQixPQUFPLElBQUksQ0FBQ0YsVUFBVSxDQUFDRSxxQkFBcUI7WUFBSTs7O1lBRTFFQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTUMscUJBQXFCLElBQUksQ0FBQ0YscUJBQXFCLElBQy9DRyw4QkFBOEJELG1CQUFtQkQsWUFBWSxJQUM3REcsWUFBWUQsNkJBQTZCLEdBQUc7Z0JBRWxELE9BQU9DO1lBQ1Q7OztZQUVBQyxLQUFBQTttQkFBQUEsU0FBQUEsT0FBT0MsVUFBVSxFQUFFWCxPQUFPOztnQkFDeEIsSUFBSVksV0FBVztnQkFFZkMsSUFBQUEsY0FBSyxFQUFDLFNBQUNiO29CQUNMLElBQU1jLHFCQUFxQixNQUFLWCxVQUFVLENBQUNPLE1BQU0sQ0FBQ1Y7b0JBRWxELElBQUljLG9CQUFvQjt3QkFDdEIsSUFBTVAscUJBQXFCUCxRQUFRSyxxQkFBcUI7d0JBRXhELElBQUlFLHVCQUF1QixNQUFNOzRCQUMvQixJQUFNRSxZQUFZLE1BQUtILFlBQVksSUFDN0JTLHNCQUFzQkosV0FBV0wsWUFBWSxJQUM3Q1Usc0NBQXNDRCxvQkFBb0JFLFNBQVMsQ0FBQ1I7NEJBRTFFLElBQUlPLHFDQUFxQztnQ0FDdkNKLFdBQVc7NEJBQ2I7d0JBQ0Y7b0JBQ0Y7Z0JBQ0YsR0FBR1o7Z0JBRUgsT0FBT1k7WUFDVDs7OztxQkEzQ3dDTSxvQkFBTyxJQTZDL0MseUJBQU9DLFFBQU8ifQ==