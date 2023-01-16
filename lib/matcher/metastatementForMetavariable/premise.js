"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "premiseMetastatementForMetavariableMatcher", {
    enumerable: true,
    get: function() {
        return premiseMetastatementForMetavariableMatcher;
    }
});
var _metastatementForMetavariable = /*#__PURE__*/ _interopRequireDefault(require("../../matcher/metastatementForMetavariable"));
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
var PremiseMetastatementForMetavariableMatcher = /*#__PURE__*/ function(MetastatementForMetavariableMatcher) {
    _inherits(PremiseMetastatementForMetavariableMatcher, MetastatementForMetavariableMatcher);
    var _super = _createSuper(PremiseMetastatementForMetavariableMatcher);
    function PremiseMetastatementForMetavariableMatcher() {
        _classCallCheck(this, PremiseMetastatementForMetavariableMatcher);
        return _super.apply(this, arguments);
    }
    return PremiseMetastatementForMetavariableMatcher;
}(_metastatementForMetavariable.default);
_defineProperty(PremiseMetastatementForMetavariableMatcher, "createSubstitutions", true);
var premiseMetastatementForMetavariableMatcher = new PremiseMetastatementForMetavariableMatcher();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9tYXRjaGVyL21ldGFzdGF0ZW1lbnRGb3JNZXRhdmFyaWFibGUvcHJlbWlzZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IE1ldGFzdGF0ZW1lbnRGb3JNZXRhdmFyaWFibGVNYXRjaGVyIGZyb20gXCIuLi8uLi9tYXRjaGVyL21ldGFzdGF0ZW1lbnRGb3JNZXRhdmFyaWFibGVcIjtcblxuY2xhc3MgUHJlbWlzZU1ldGFzdGF0ZW1lbnRGb3JNZXRhdmFyaWFibGVNYXRjaGVyIGV4dGVuZHMgTWV0YXN0YXRlbWVudEZvck1ldGF2YXJpYWJsZU1hdGNoZXIge1xuICBzdGF0aWMgY3JlYXRlU3Vic3RpdHV0aW9ucyA9IHRydWU7XG59XG5cbmV4cG9ydCBjb25zdCBwcmVtaXNlTWV0YXN0YXRlbWVudEZvck1ldGF2YXJpYWJsZU1hdGNoZXIgPSBuZXcgUHJlbWlzZU1ldGFzdGF0ZW1lbnRGb3JNZXRhdmFyaWFibGVNYXRjaGVyKCk7XG4iXSwibmFtZXMiOlsicHJlbWlzZU1ldGFzdGF0ZW1lbnRGb3JNZXRhdmFyaWFibGVNYXRjaGVyIiwiUHJlbWlzZU1ldGFzdGF0ZW1lbnRGb3JNZXRhdmFyaWFibGVNYXRjaGVyIiwiTWV0YXN0YXRlbWVudEZvck1ldGF2YXJpYWJsZU1hdGNoZXIiLCJjcmVhdGVTdWJzdGl0dXRpb25zIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFRYUE7OztlQUFBQTs7O2lGQU5tQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRWhELElBQUEsQUFBTUMsMkRBSUgsQUFKSDtjQUFNQTs4QkFBQUE7YUFBQUE7OEJBQUFBOzs7V0FBQUE7RUFBbURDLHFDQUFtQztBQUMxRixnQkFESUQsNENBQ0dFLHVCQUFzQixJQUFJO0FBRzVCLElBQU1ILDZDQUE2QyxJQUFJQyJ9