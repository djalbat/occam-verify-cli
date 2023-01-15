"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "premiseMetaSubstitutionMatcher", {
    enumerable: true,
    get: function() {
        return premiseMetaSubstitutionMatcher;
    }
});
var _metaSubstitution = /*#__PURE__*/ _interopRequireDefault(require("../../matcher/metaSubstitution"));
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
var PremiseMetaSubstitutionMatcher = /*#__PURE__*/ function(MetaSubstitutionMatcher) {
    _inherits(PremiseMetaSubstitutionMatcher, MetaSubstitutionMatcher);
    var _super = _createSuper(PremiseMetaSubstitutionMatcher);
    function PremiseMetaSubstitutionMatcher() {
        _classCallCheck(this, PremiseMetaSubstitutionMatcher);
        return _super.apply(this, arguments);
    }
    return PremiseMetaSubstitutionMatcher;
}(_metaSubstitution.default);
_defineProperty(PremiseMetaSubstitutionMatcher, "createMetaSubstitutions", true);
var premiseMetaSubstitutionMatcher = new PremiseMetaSubstitutionMatcher();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9tYXRjaGVyL21ldGFTdWJzdGl0dXRpb24vcHJlbWlzZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IE1ldGFTdWJzdGl0dXRpb25NYXRjaGVyIGZyb20gXCIuLi8uLi9tYXRjaGVyL21ldGFTdWJzdGl0dXRpb25cIjtcblxuY2xhc3MgUHJlbWlzZU1ldGFTdWJzdGl0dXRpb25NYXRjaGVyIGV4dGVuZHMgTWV0YVN1YnN0aXR1dGlvbk1hdGNoZXIge1xuICBzdGF0aWMgY3JlYXRlTWV0YVN1YnN0aXR1dGlvbnMgPSB0cnVlO1xufVxuXG5leHBvcnQgY29uc3QgcHJlbWlzZU1ldGFTdWJzdGl0dXRpb25NYXRjaGVyID0gbmV3IFByZW1pc2VNZXRhU3Vic3RpdHV0aW9uTWF0Y2hlcigpO1xuIl0sIm5hbWVzIjpbInByZW1pc2VNZXRhU3Vic3RpdHV0aW9uTWF0Y2hlciIsIlByZW1pc2VNZXRhU3Vic3RpdHV0aW9uTWF0Y2hlciIsIk1ldGFTdWJzdGl0dXRpb25NYXRjaGVyIiwiY3JlYXRlTWV0YVN1YnN0aXR1dGlvbnMiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQVFhQTs7O2VBQUFBOzs7cUVBTnVCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFcEMsSUFBQSxBQUFNQywrQ0FJSCxBQUpIO2NBQU1BOzhCQUFBQTthQUFBQTs4QkFBQUE7OztXQUFBQTtFQUF1Q0MseUJBQXVCO0FBQ2xFLGdCQURJRCxnQ0FDR0UsMkJBQTBCLElBQUk7QUFHaEMsSUFBTUgsaUNBQWlDLElBQUlDIn0=