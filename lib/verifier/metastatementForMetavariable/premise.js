"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "premiseMetastatementForMetavariableVerifier", {
    enumerable: true,
    get: function() {
        return premiseMetastatementForMetavariableVerifier;
    }
});
var _metastatementForMetavariable = /*#__PURE__*/ _interopRequireDefault(require("../../verifier/metastatementForMetavariable"));
function _assertThisInitialized(self) {
    if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
}
function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
function _defineProperty(obj, key, value) {
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
function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
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
    if (superClass) _setPrototypeOf(subClass, superClass);
}
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function _possibleConstructorReturn(self, call) {
    if (call && (_typeof(call) === "object" || typeof call === "function")) {
        return call;
    }
    return _assertThisInitialized(self);
}
function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return _setPrototypeOf(o, p);
}
var _typeof = function(obj) {
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
};
function _isNativeReflectConstruct() {
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
function _createSuper(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct();
    return function _createSuperInternal() {
        var Super = _getPrototypeOf(Derived), result;
        if (hasNativeReflectConstruct) {
            var NewTarget = _getPrototypeOf(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
        } else {
            result = Super.apply(this, arguments);
        }
        return _possibleConstructorReturn(this, result);
    };
}
var PremiseMetastatementForMetavariableVerifier = /*#__PURE__*/ function(MetastatementForMetavariableVerifier) {
    _inherits(PremiseMetastatementForMetavariableVerifier, MetastatementForMetavariableVerifier);
    var _super = _createSuper(PremiseMetastatementForMetavariableVerifier);
    function PremiseMetastatementForMetavariableVerifier() {
        _classCallCheck(this, PremiseMetastatementForMetavariableVerifier);
        return _super.apply(this, arguments);
    }
    return PremiseMetastatementForMetavariableVerifier;
}(_metastatementForMetavariable.default);
_defineProperty(PremiseMetastatementForMetavariableVerifier, "createSubstitutions", true);
var premiseMetastatementForMetavariableVerifier = new PremiseMetastatementForMetavariableVerifier();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy92ZXJpZmllci9tZXRhc3RhdGVtZW50Rm9yTWV0YXZhcmlhYmxlL3ByZW1pc2UuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBNZXRhc3RhdGVtZW50Rm9yTWV0YXZhcmlhYmxlVmVyaWZpZXIgZnJvbSBcIi4uLy4uL3ZlcmlmaWVyL21ldGFzdGF0ZW1lbnRGb3JNZXRhdmFyaWFibGVcIjtcblxuY2xhc3MgUHJlbWlzZU1ldGFzdGF0ZW1lbnRGb3JNZXRhdmFyaWFibGVWZXJpZmllciBleHRlbmRzIE1ldGFzdGF0ZW1lbnRGb3JNZXRhdmFyaWFibGVWZXJpZmllciB7XG4gIHN0YXRpYyBjcmVhdGVTdWJzdGl0dXRpb25zID0gdHJ1ZTtcbn1cblxuZXhwb3J0IGNvbnN0IHByZW1pc2VNZXRhc3RhdGVtZW50Rm9yTWV0YXZhcmlhYmxlVmVyaWZpZXIgPSBuZXcgUHJlbWlzZU1ldGFzdGF0ZW1lbnRGb3JNZXRhdmFyaWFibGVWZXJpZmllcigpO1xuIl0sIm5hbWVzIjpbInByZW1pc2VNZXRhc3RhdGVtZW50Rm9yTWV0YXZhcmlhYmxlVmVyaWZpZXIiLCJQcmVtaXNlTWV0YXN0YXRlbWVudEZvck1ldGF2YXJpYWJsZVZlcmlmaWVyIiwiTWV0YXN0YXRlbWVudEZvck1ldGF2YXJpYWJsZVZlcmlmaWVyIiwiY3JlYXRlU3Vic3RpdHV0aW9ucyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBUWFBOzs7ZUFBQUE7OztpRkFOb0M7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVqRCxJQUFBLEFBQU1DLDREQUlILEFBSkg7Y0FBTUE7OEJBQUFBO2FBQUFBOzhCQUFBQTs7O1dBQUFBO0VBQW9EQyxxQ0FBb0M7QUFDNUYsZ0JBRElELDZDQUNHRSx1QkFBc0IsSUFBSTtBQUc1QixJQUFNSCw4Q0FBOEMsSUFBSUMifQ==