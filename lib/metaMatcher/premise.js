"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "premiseMetaMatcher", {
    enumerable: true,
    get: function() {
        return premiseMetaMatcher;
    }
});
var _metaMatcher = /*#__PURE__*/ _interopRequireDefault(require("../metaMatcher"));
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
var PremiseMetaMatcher = /*#__PURE__*/ function(MetaMatcher) {
    _inherits(PremiseMetaMatcher, MetaMatcher);
    var _super = _createSuper(PremiseMetaMatcher);
    function PremiseMetaMatcher() {
        _classCallCheck(this, PremiseMetaMatcher);
        return _super.apply(this, arguments);
    }
    return PremiseMetaMatcher;
}(_metaMatcher.default);
_defineProperty(PremiseMetaMatcher, "createMetaSubstitutions", true);
var premiseMetaMatcher = new PremiseMetaMatcher();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9tZXRhTWF0Y2hlci9wcmVtaXNlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgTWV0YU1hdGNoZXIgZnJvbSBcIi4uL21ldGFNYXRjaGVyXCI7XG5cbmNsYXNzIFByZW1pc2VNZXRhTWF0Y2hlciBleHRlbmRzIE1ldGFNYXRjaGVyIHtcbiAgc3RhdGljIGNyZWF0ZU1ldGFTdWJzdGl0dXRpb25zID0gdHJ1ZTtcbn1cblxuZXhwb3J0IGNvbnN0IHByZW1pc2VNZXRhTWF0Y2hlciA9IG5ldyBQcmVtaXNlTWV0YU1hdGNoZXIoKTtcbiJdLCJuYW1lcyI6WyJwcmVtaXNlTWV0YU1hdGNoZXIiLCJQcmVtaXNlTWV0YU1hdGNoZXIiLCJNZXRhTWF0Y2hlciIsImNyZWF0ZU1ldGFTdWJzdGl0dXRpb25zIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFRYUE7OztlQUFBQTs7O2dFQU5XOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFeEIsSUFBQSxBQUFNQyxtQ0FJSCxBQUpIO2NBQU1BOzhCQUFBQTthQUFBQTs4QkFBQUE7OztXQUFBQTtFQUEyQkMsb0JBQVc7QUFDMUMsZ0JBRElELG9CQUNHRSwyQkFBMEIsSUFBSTtBQUdoQyxJQUFNSCxxQkFBcUIsSUFBSUMifQ==