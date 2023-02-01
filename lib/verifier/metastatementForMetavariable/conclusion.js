"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "conclusionMetastatementForMetavariableVerifier", {
    enumerable: true,
    get: function() {
        return conclusionMetastatementForMetavariableVerifier;
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
var ConclusionMetastatementForMetavariableVerifier = /*#__PURE__*/ function(MetastatementForMetavariableVerifier) {
    _inherits(ConclusionMetastatementForMetavariableVerifier, MetastatementForMetavariableVerifier);
    var _super = _createSuper(ConclusionMetastatementForMetavariableVerifier);
    function ConclusionMetastatementForMetavariableVerifier() {
        _classCallCheck(this, ConclusionMetastatementForMetavariableVerifier);
        return _super.apply(this, arguments);
    }
    return ConclusionMetastatementForMetavariableVerifier;
}(_metastatementForMetavariable.default);
_defineProperty(ConclusionMetastatementForMetavariableVerifier, "createSubstitutions", false);
var conclusionMetastatementForMetavariableVerifier = new ConclusionMetastatementForMetavariableVerifier();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy92ZXJpZmllci9tZXRhc3RhdGVtZW50Rm9yTWV0YXZhcmlhYmxlL2NvbmNsdXNpb24uanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBNZXRhc3RhdGVtZW50Rm9yTWV0YXZhcmlhYmxlVmVyaWZpZXIgZnJvbSBcIi4uLy4uL3ZlcmlmaWVyL21ldGFzdGF0ZW1lbnRGb3JNZXRhdmFyaWFibGVcIjtcblxuY2xhc3MgQ29uY2x1c2lvbk1ldGFzdGF0ZW1lbnRGb3JNZXRhdmFyaWFibGVWZXJpZmllciBleHRlbmRzIE1ldGFzdGF0ZW1lbnRGb3JNZXRhdmFyaWFibGVWZXJpZmllciB7XG4gIHN0YXRpYyBjcmVhdGVTdWJzdGl0dXRpb25zID0gZmFsc2U7XG59XG5cbmV4cG9ydCBjb25zdCBjb25jbHVzaW9uTWV0YXN0YXRlbWVudEZvck1ldGF2YXJpYWJsZVZlcmlmaWVyID0gbmV3IENvbmNsdXNpb25NZXRhc3RhdGVtZW50Rm9yTWV0YXZhcmlhYmxlVmVyaWZpZXIoKTtcbiJdLCJuYW1lcyI6WyJjb25jbHVzaW9uTWV0YXN0YXRlbWVudEZvck1ldGF2YXJpYWJsZVZlcmlmaWVyIiwiQ29uY2x1c2lvbk1ldGFzdGF0ZW1lbnRGb3JNZXRhdmFyaWFibGVWZXJpZmllciIsIk1ldGFzdGF0ZW1lbnRGb3JNZXRhdmFyaWFibGVWZXJpZmllciIsImNyZWF0ZVN1YnN0aXR1dGlvbnMiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQVFhQTs7O2VBQUFBOzs7aUZBTm9DOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFakQsSUFBQSxBQUFNQywrREFJSCxBQUpIO2NBQU1BOzhCQUFBQTthQUFBQTs4QkFBQUE7OztXQUFBQTtFQUF1REMscUNBQW9DO0FBQy9GLGdCQURJRCxnREFDR0UsdUJBQXNCLEtBQUs7QUFHN0IsSUFBTUgsaURBQWlELElBQUlDIn0=