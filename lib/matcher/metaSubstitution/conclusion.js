"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "conclusionMetaSubstitutionMatcher", {
    enumerable: true,
    get: function() {
        return conclusionMetaSubstitutionMatcher;
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
var ConclusionMetaSubstitutionMatcher = /*#__PURE__*/ function(MetaSubstitutionMatcher) {
    _inherits(ConclusionMetaSubstitutionMatcher, MetaSubstitutionMatcher);
    var _super = _createSuper(ConclusionMetaSubstitutionMatcher);
    function ConclusionMetaSubstitutionMatcher() {
        _classCallCheck(this, ConclusionMetaSubstitutionMatcher);
        return _super.apply(this, arguments);
    }
    return ConclusionMetaSubstitutionMatcher;
}(_metaSubstitution.default);
_defineProperty(ConclusionMetaSubstitutionMatcher, "createMetaSubstitutions", false);
var conclusionMetaSubstitutionMatcher = new ConclusionMetaSubstitutionMatcher();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9tYXRjaGVyL21ldGFTdWJzdGl0dXRpb24vY29uY2x1c2lvbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IE1ldGFTdWJzdGl0dXRpb25NYXRjaGVyIGZyb20gXCIuLi8uLi9tYXRjaGVyL21ldGFTdWJzdGl0dXRpb25cIjtcblxuY2xhc3MgQ29uY2x1c2lvbk1ldGFTdWJzdGl0dXRpb25NYXRjaGVyIGV4dGVuZHMgTWV0YVN1YnN0aXR1dGlvbk1hdGNoZXIge1xuICBzdGF0aWMgY3JlYXRlTWV0YVN1YnN0aXR1dGlvbnMgPSBmYWxzZTtcbn1cblxuZXhwb3J0IGNvbnN0IGNvbmNsdXNpb25NZXRhU3Vic3RpdHV0aW9uTWF0Y2hlciA9IG5ldyBDb25jbHVzaW9uTWV0YVN1YnN0aXR1dGlvbk1hdGNoZXIoKTtcbiJdLCJuYW1lcyI6WyJjb25jbHVzaW9uTWV0YVN1YnN0aXR1dGlvbk1hdGNoZXIiLCJDb25jbHVzaW9uTWV0YVN1YnN0aXR1dGlvbk1hdGNoZXIiLCJNZXRhU3Vic3RpdHV0aW9uTWF0Y2hlciIsImNyZWF0ZU1ldGFTdWJzdGl0dXRpb25zIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFRYUE7OztlQUFBQTs7O3FFQU51Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXBDLElBQUEsQUFBTUMsa0RBSUgsQUFKSDtjQUFNQTs4QkFBQUE7YUFBQUE7OEJBQUFBOzs7V0FBQUE7RUFBMENDLHlCQUF1QjtBQUNyRSxnQkFESUQsbUNBQ0dFLDJCQUEwQixLQUFLO0FBR2pDLElBQU1ILG9DQUFvQyxJQUFJQyJ9