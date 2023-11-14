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
var _metastatementForMetavariable = /*#__PURE__*/ _interop_require_default(require("../../../verifier/nodes/metastatementForMetavariable"));
function _assert_this_initialized(self) {
    if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
}
function _class_call_check(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
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
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
        return true;
    } catch (e) {
        return false;
    }
}
function _create_super(Derived) {
    var hasNativeReflectConstruct = _is_native_reflect_construct();
    return function _createSuperInternal() {
        var Super = _get_prototype_of(Derived), result;
        if (hasNativeReflectConstruct) {
            var NewTarget = _get_prototype_of(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
        } else {
            result = Super.apply(this, arguments);
        }
        return _possible_constructor_return(this, result);
    };
}
var PremiseMetastatementForMetavariableNodesVerifier = /*#__PURE__*/ function(MetastatementForMetavariableNodesVerifier) {
    _inherits(PremiseMetastatementForMetavariableNodesVerifier, MetastatementForMetavariableNodesVerifier);
    var _super = _create_super(PremiseMetastatementForMetavariableNodesVerifier);
    function PremiseMetastatementForMetavariableNodesVerifier() {
        _class_call_check(this, PremiseMetastatementForMetavariableNodesVerifier);
        return _super.apply(this, arguments);
    }
    return PremiseMetastatementForMetavariableNodesVerifier;
}(_metastatementForMetavariable.default);
_define_property(PremiseMetastatementForMetavariableNodesVerifier, "createSubstitutions", true);
var premiseMetastatementForMetavariableNodesVerifier = new PremiseMetastatementForMetavariableNodesVerifier();
var _default = premiseMetastatementForMetavariableNodesVerifier;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy92ZXJpZmllci9ub2Rlcy9tZXRhc3RhdGVtZW50Rm9yTWV0YXZhcmlhYmxlL3ByZW1pc2UuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBNZXRhc3RhdGVtZW50Rm9yTWV0YXZhcmlhYmxlTm9kZXNWZXJpZmllciBmcm9tIFwiLi4vLi4vLi4vdmVyaWZpZXIvbm9kZXMvbWV0YXN0YXRlbWVudEZvck1ldGF2YXJpYWJsZVwiO1xuXG5jbGFzcyBQcmVtaXNlTWV0YXN0YXRlbWVudEZvck1ldGF2YXJpYWJsZU5vZGVzVmVyaWZpZXIgZXh0ZW5kcyBNZXRhc3RhdGVtZW50Rm9yTWV0YXZhcmlhYmxlTm9kZXNWZXJpZmllciB7XG4gIHN0YXRpYyBjcmVhdGVTdWJzdGl0dXRpb25zID0gdHJ1ZTtcbn1cblxuY29uc3QgcHJlbWlzZU1ldGFzdGF0ZW1lbnRGb3JNZXRhdmFyaWFibGVOb2Rlc1ZlcmlmaWVyID0gbmV3IFByZW1pc2VNZXRhc3RhdGVtZW50Rm9yTWV0YXZhcmlhYmxlTm9kZXNWZXJpZmllcigpO1xuXG5leHBvcnQgZGVmYXVsdCBwcmVtaXNlTWV0YXN0YXRlbWVudEZvck1ldGF2YXJpYWJsZU5vZGVzVmVyaWZpZXI7XG4iXSwibmFtZXMiOlsiUHJlbWlzZU1ldGFzdGF0ZW1lbnRGb3JNZXRhdmFyaWFibGVOb2Rlc1ZlcmlmaWVyIiwiTWV0YXN0YXRlbWVudEZvck1ldGF2YXJpYWJsZU5vZGVzVmVyaWZpZXIiLCJjcmVhdGVTdWJzdGl0dXRpb25zIiwicHJlbWlzZU1ldGFzdGF0ZW1lbnRGb3JNZXRhdmFyaWFibGVOb2Rlc1ZlcmlmaWVyIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFVQTs7O2VBQUE7OzttRkFSc0Q7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUV0RCxJQUFBLEFBQU1BLGlFQUlILEFBSkg7Y0FBTUE7K0JBQUFBO2FBQUFBO2dDQUFBQTs7O1dBQUFBO0VBQXlEQyxxQ0FBeUM7QUFDdEcsaUJBRElELGtEQUNHRSx1QkFBc0I7QUFHL0IsSUFBTUMsbURBQW1ELElBQUlIO0lBRTdELFdBQWVHIn0=