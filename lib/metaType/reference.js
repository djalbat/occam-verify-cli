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
var _metaType = /*#__PURE__*/ _interop_require_default(require("../metaType"));
var _metaTypeNames = require("../metaTypeNames");
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
var ReferenceMetaType = /*#__PURE__*/ function(MetaType) {
    _inherits(ReferenceMetaType, MetaType);
    function ReferenceMetaType() {
        _class_call_check(this, ReferenceMetaType);
        return _call_super(this, ReferenceMetaType, arguments);
    }
    _create_class(ReferenceMetaType, null, [
        {
            key: "fromNothing",
            value: function fromNothing() {
                var name = _metaTypeNames.REFERENCE_META_TYPE_NAME, referenceMetaType = new ReferenceMetaType(name);
                return referenceMetaType;
            }
        }
    ]);
    return ReferenceMetaType;
}(_metaType.default);
var referenceMetaType = ReferenceMetaType.fromNothing();
var _default = referenceMetaType;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9tZXRhVHlwZS9yZWZlcmVuY2UuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBNZXRhVHlwZSBmcm9tIFwiLi4vbWV0YVR5cGVcIjtcblxuaW1wb3J0IHsgUkVGRVJFTkNFX01FVEFfVFlQRV9OQU1FIH0gZnJvbSBcIi4uL21ldGFUeXBlTmFtZXNcIjtcblxuY2xhc3MgUmVmZXJlbmNlTWV0YVR5cGUgZXh0ZW5kcyBNZXRhVHlwZSB7XG4gIHN0YXRpYyBmcm9tTm90aGluZygpIHtcbiAgICBjb25zdCBuYW1lID0gUkVGRVJFTkNFX01FVEFfVFlQRV9OQU1FLFxuICAgICAgICAgIHJlZmVyZW5jZU1ldGFUeXBlID0gbmV3IFJlZmVyZW5jZU1ldGFUeXBlKG5hbWUpO1xuXG4gICAgcmV0dXJuIHJlZmVyZW5jZU1ldGFUeXBlO1xuICB9XG59XG5cbmNvbnN0IHJlZmVyZW5jZU1ldGFUeXBlID0gUmVmZXJlbmNlTWV0YVR5cGUuZnJvbU5vdGhpbmcoKTtcblxuZXhwb3J0IGRlZmF1bHQgcmVmZXJlbmNlTWV0YVR5cGU7XG4iXSwibmFtZXMiOlsiUmVmZXJlbmNlTWV0YVR5cGUiLCJmcm9tTm90aGluZyIsIm5hbWUiLCJSRUZFUkVOQ0VfTUVUQV9UWVBFX05BTUUiLCJyZWZlcmVuY2VNZXRhVHlwZSIsIk1ldGFUeXBlIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFpQkE7OztlQUFBOzs7K0RBZnFCOzZCQUVvQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUV6QyxJQUFBLEFBQU1BLGtDQUFOO2NBQU1BO2FBQUFBO2dDQUFBQTtpQ0FBQUE7O2tCQUFBQTs7WUFDR0MsS0FBQUE7bUJBQVAsU0FBT0E7Z0JBQ0wsSUFBTUMsT0FBT0MsdUNBQXdCLEVBQy9CQyxvQkFBb0IsSUFIeEJKLGtCQUc4Q0U7Z0JBRWhELE9BQU9FO1lBQ1Q7OztXQU5JSjtFQUEwQkssaUJBQVE7QUFTeEMsSUFBTUQsb0JBQW9CSixrQkFBa0JDLFdBQVc7SUFFdkQsV0FBZUcifQ==