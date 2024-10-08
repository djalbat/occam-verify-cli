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
var _shim = /*#__PURE__*/ _interop_require_default(require("../shim"));
var _verifier = /*#__PURE__*/ _interop_require_default(require("../verifier"));
var _query = require("../utilities/query");
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
function _is_native_reflect_construct() {
    try {
        var result = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
    } catch (_) {}
    return (_is_native_reflect_construct = function() {
        return !!result;
    })();
}
var termNodeQuery = (0, _query.nodeQuery)("/term!");
var IntrinsicLevelVerifier = /*#__PURE__*/ function(Verifier) {
    _inherits(IntrinsicLevelVerifier, Verifier);
    function IntrinsicLevelVerifier() {
        _class_call_check(this, IntrinsicLevelVerifier);
        return _call_super(this, IntrinsicLevelVerifier, arguments);
    }
    _create_class(IntrinsicLevelVerifier, [
        {
            key: "verify",
            value: function verify(node, localContext) {
                var verified;
                var nonTerminalNode = node, nonTerminalNodeVerified = this.verifyNonTerminalNode(nonTerminalNode, localContext);
                verified = nonTerminalNodeVerified; ///
                return verified;
            }
        }
    ]);
    return IntrinsicLevelVerifier;
}(_verifier.default);
_define_property(IntrinsicLevelVerifier, "maps", [
    {
        nodeQuery: termNodeQuery,
        verify: function(termNode, localContext) {
            var Term = _shim.default.Term, term = Term.fromTermNode(termNode, localContext), termVerified = term.verify(localContext, function() {
                var verifiedAhead = true;
                return verifiedAhead;
            });
            return termVerified;
        }
    }
]);
var intrinsicLevelVerifier = new IntrinsicLevelVerifier();
var _default = intrinsicLevelVerifier;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92ZXJpZmllci9pbnRyaW5zaWNMZXZlbC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHNoaW0gZnJvbSBcIi4uL3NoaW1cIjtcbmltcG9ydCBWZXJpZmllciBmcm9tIFwiLi4vdmVyaWZpZXJcIjtcblxuaW1wb3J0IHsgbm9kZVF1ZXJ5IH0gZnJvbSBcIi4uL3V0aWxpdGllcy9xdWVyeVwiO1xuXG5jb25zdCB0ZXJtTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3Rlcm0hXCIpO1xuXG5jbGFzcyBJbnRyaW5zaWNMZXZlbFZlcmlmaWVyIGV4dGVuZHMgVmVyaWZpZXIge1xuICB2ZXJpZnkobm9kZSwgbG9jYWxDb250ZXh0KSB7XG4gICAgbGV0IHZlcmlmaWVkO1xuXG4gICAgY29uc3Qgbm9uVGVybWluYWxOb2RlID0gbm9kZSwgLy8vXG4gICAgICAgICAgbm9uVGVybWluYWxOb2RlVmVyaWZpZWQgPSB0aGlzLnZlcmlmeU5vblRlcm1pbmFsTm9kZShub25UZXJtaW5hbE5vZGUsIGxvY2FsQ29udGV4dCk7XG5cbiAgICB2ZXJpZmllZCA9IG5vblRlcm1pbmFsTm9kZVZlcmlmaWVkOyAgLy8vXG5cbiAgICByZXR1cm4gdmVyaWZpZWQ7XG4gIH1cblxuICBzdGF0aWMgbWFwcyA9IFtcbiAgICB7XG4gICAgICBub2RlUXVlcnk6IHRlcm1Ob2RlUXVlcnksXG4gICAgICB2ZXJpZnk6ICh0ZXJtTm9kZSwgbG9jYWxDb250ZXh0KSA9PiB7XG4gICAgICAgIGNvbnN0IHsgVGVybSB9ID0gc2hpbSxcbiAgICAgICAgICAgICAgdGVybSA9IFRlcm0uZnJvbVRlcm1Ob2RlKHRlcm1Ob2RlLCBsb2NhbENvbnRleHQpLFxuICAgICAgICAgICAgICB0ZXJtVmVyaWZpZWQgPSB0ZXJtLnZlcmlmeShsb2NhbENvbnRleHQsICgpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCB2ZXJpZmllZEFoZWFkID0gdHJ1ZTtcblxuICAgICAgICAgICAgICAgIHJldHVybiB2ZXJpZmllZEFoZWFkO1xuICAgICAgICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gdGVybVZlcmlmaWVkO1xuICAgICAgfVxuICAgIH1cbiAgXTtcbn1cblxuY29uc3QgaW50cmluc2ljTGV2ZWxWZXJpZmllciA9IG5ldyBJbnRyaW5zaWNMZXZlbFZlcmlmaWVyKCk7XG5cbmV4cG9ydCBkZWZhdWx0IGludHJpbnNpY0xldmVsVmVyaWZpZXI7XG4iXSwibmFtZXMiOlsidGVybU5vZGVRdWVyeSIsIm5vZGVRdWVyeSIsIkludHJpbnNpY0xldmVsVmVyaWZpZXIiLCJ2ZXJpZnkiLCJub2RlIiwibG9jYWxDb250ZXh0IiwidmVyaWZpZWQiLCJub25UZXJtaW5hbE5vZGUiLCJub25UZXJtaW5hbE5vZGVWZXJpZmllZCIsInZlcmlmeU5vblRlcm1pbmFsTm9kZSIsIlZlcmlmaWVyIiwibWFwcyIsInRlcm1Ob2RlIiwiVGVybSIsInNoaW0iLCJ0ZXJtIiwiZnJvbVRlcm1Ob2RlIiwidGVybVZlcmlmaWVkIiwidmVyaWZpZWRBaGVhZCIsImludHJpbnNpY0xldmVsVmVyaWZpZXIiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQXlDQTs7O2VBQUE7OzsyREF2Q2lCOytEQUNJO3FCQUVLOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUUxQixJQUFNQSxnQkFBZ0JDLElBQUFBLGdCQUFTLEVBQUM7QUFFaEMsSUFBQSxBQUFNQyx1Q0FBTjtjQUFNQTthQUFBQTtnQ0FBQUE7aUNBQUFBOztrQkFBQUE7O1lBQ0pDLEtBQUFBO21CQUFBQSxTQUFBQSxPQUFPQyxJQUFJLEVBQUVDLFlBQVk7Z0JBQ3ZCLElBQUlDO2dCQUVKLElBQU1DLGtCQUFrQkgsTUFDbEJJLDBCQUEwQixJQUFJLENBQUNDLHFCQUFxQixDQUFDRixpQkFBaUJGO2dCQUU1RUMsV0FBV0UseUJBQTBCLEdBQUc7Z0JBRXhDLE9BQU9GO1lBQ1Q7OztXQVZJSjtFQUErQlEsaUJBQVE7QUFZM0MsaUJBWklSLHdCQVlHUyxRQUFPO0lBQ1o7UUFDRVYsV0FBV0Q7UUFDWEcsUUFBUSxTQUFDUyxVQUFVUDtZQUNqQixJQUFNLEFBQUVRLE9BQVNDLGFBQUksQ0FBYkQsTUFDRkUsT0FBT0YsS0FBS0csWUFBWSxDQUFDSixVQUFVUCxlQUNuQ1ksZUFBZUYsS0FBS1osTUFBTSxDQUFDRSxjQUFjO2dCQUN2QyxJQUFNYSxnQkFBZ0I7Z0JBRXRCLE9BQU9BO1lBQ1Q7WUFFTixPQUFPRDtRQUNUO0lBQ0Y7Q0FDRDtBQUdILElBQU1FLHlCQUF5QixJQUFJakI7SUFFbkMsV0FBZWlCIn0=