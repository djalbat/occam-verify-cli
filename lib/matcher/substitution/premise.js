"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "premiseSubstitutionMatcher", {
    enumerable: true,
    get: function() {
        return premiseSubstitutionMatcher;
    }
});
var _substitution = /*#__PURE__*/ _interopRequireDefault(require("../../matcher/substitution"));
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
var PremiseSubstitutionMatcher = /*#__PURE__*/ function(SubstitutionMatcher) {
    _inherits(PremiseSubstitutionMatcher, SubstitutionMatcher);
    var _super = _createSuper(PremiseSubstitutionMatcher);
    function PremiseSubstitutionMatcher() {
        _classCallCheck(this, PremiseSubstitutionMatcher);
        return _super.apply(this, arguments);
    }
    return PremiseSubstitutionMatcher;
}(_substitution.default);
_defineProperty(PremiseSubstitutionMatcher, "createMetaSubstitutions", true);
var premiseSubstitutionMatcher = new PremiseSubstitutionMatcher();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9tYXRjaGVyL3N1YnN0aXR1dGlvbi9wcmVtaXNlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgU3Vic3RpdHV0aW9uTWF0Y2hlciBmcm9tIFwiLi4vLi4vbWF0Y2hlci9zdWJzdGl0dXRpb25cIjtcblxuY2xhc3MgUHJlbWlzZVN1YnN0aXR1dGlvbk1hdGNoZXIgZXh0ZW5kcyBTdWJzdGl0dXRpb25NYXRjaGVyIHtcbiAgc3RhdGljIGNyZWF0ZU1ldGFTdWJzdGl0dXRpb25zID0gdHJ1ZTtcbn1cblxuZXhwb3J0IGNvbnN0IHByZW1pc2VTdWJzdGl0dXRpb25NYXRjaGVyID0gbmV3IFByZW1pc2VTdWJzdGl0dXRpb25NYXRjaGVyKCk7XG4iXSwibmFtZXMiOlsicHJlbWlzZVN1YnN0aXR1dGlvbk1hdGNoZXIiLCJQcmVtaXNlU3Vic3RpdHV0aW9uTWF0Y2hlciIsIlN1YnN0aXR1dGlvbk1hdGNoZXIiLCJjcmVhdGVNZXRhU3Vic3RpdHV0aW9ucyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBUWFBOzs7ZUFBQUE7OztpRUFObUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVoQyxJQUFBLEFBQU1DLDJDQUlILEFBSkg7Y0FBTUE7OEJBQUFBO2FBQUFBOzhCQUFBQTs7O1dBQUFBO0VBQW1DQyxxQkFBbUI7QUFDMUQsZ0JBRElELDRCQUNHRSwyQkFBMEIsSUFBSTtBQUdoQyxJQUFNSCw2QkFBNkIsSUFBSUMifQ==