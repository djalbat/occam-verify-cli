"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "conclusionMetastatementForMetavariableMatcher", {
    enumerable: true,
    get: function() {
        return conclusionMetastatementForMetavariableMatcher;
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
var ConclusionMetastatementForMetavariableMatcher = /*#__PURE__*/ function(MetastatementForMetavariableMatcher) {
    _inherits(ConclusionMetastatementForMetavariableMatcher, MetastatementForMetavariableMatcher);
    var _super = _createSuper(ConclusionMetastatementForMetavariableMatcher);
    function ConclusionMetastatementForMetavariableMatcher() {
        _classCallCheck(this, ConclusionMetastatementForMetavariableMatcher);
        return _super.apply(this, arguments);
    }
    return ConclusionMetastatementForMetavariableMatcher;
}(_metastatementForMetavariable.default);
_defineProperty(ConclusionMetastatementForMetavariableMatcher, "createSubstitutions", false);
var conclusionMetastatementForMetavariableMatcher = new ConclusionMetastatementForMetavariableMatcher();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9tYXRjaGVyL21ldGFzdGF0ZW1lbnRGb3JNZXRhdmFyaWFibGUvY29uY2x1c2lvbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IE1ldGFzdGF0ZW1lbnRGb3JNZXRhdmFyaWFibGVNYXRjaGVyIGZyb20gXCIuLi8uLi9tYXRjaGVyL21ldGFzdGF0ZW1lbnRGb3JNZXRhdmFyaWFibGVcIjtcblxuY2xhc3MgQ29uY2x1c2lvbk1ldGFzdGF0ZW1lbnRGb3JNZXRhdmFyaWFibGVNYXRjaGVyIGV4dGVuZHMgTWV0YXN0YXRlbWVudEZvck1ldGF2YXJpYWJsZU1hdGNoZXIge1xuICBzdGF0aWMgY3JlYXRlU3Vic3RpdHV0aW9ucyA9IGZhbHNlO1xufVxuXG5leHBvcnQgY29uc3QgY29uY2x1c2lvbk1ldGFzdGF0ZW1lbnRGb3JNZXRhdmFyaWFibGVNYXRjaGVyID0gbmV3IENvbmNsdXNpb25NZXRhc3RhdGVtZW50Rm9yTWV0YXZhcmlhYmxlTWF0Y2hlcigpO1xuIl0sIm5hbWVzIjpbImNvbmNsdXNpb25NZXRhc3RhdGVtZW50Rm9yTWV0YXZhcmlhYmxlTWF0Y2hlciIsIkNvbmNsdXNpb25NZXRhc3RhdGVtZW50Rm9yTWV0YXZhcmlhYmxlTWF0Y2hlciIsIk1ldGFzdGF0ZW1lbnRGb3JNZXRhdmFyaWFibGVNYXRjaGVyIiwiY3JlYXRlU3Vic3RpdHV0aW9ucyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBUWFBOzs7ZUFBQUE7OztpRkFObUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVoRCxJQUFBLEFBQU1DLDhEQUlILEFBSkg7Y0FBTUE7OEJBQUFBO2FBQUFBOzhCQUFBQTs7O1dBQUFBO0VBQXNEQyxxQ0FBbUM7QUFDN0YsZ0JBRElELCtDQUNHRSx1QkFBc0IsS0FBSztBQUc3QixJQUFNSCxnREFBZ0QsSUFBSUMifQ==