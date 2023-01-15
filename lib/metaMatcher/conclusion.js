"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "conclusionMetaMatcher", {
    enumerable: true,
    get: function() {
        return conclusionMetaMatcher;
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
var ConclusionMetaMatcher = /*#__PURE__*/ function(MetaMatcher) {
    _inherits(ConclusionMetaMatcher, MetaMatcher);
    var _super = _createSuper(ConclusionMetaMatcher);
    function ConclusionMetaMatcher() {
        _classCallCheck(this, ConclusionMetaMatcher);
        return _super.apply(this, arguments);
    }
    return ConclusionMetaMatcher;
}(_metaMatcher.default);
_defineProperty(ConclusionMetaMatcher, "createMetaSubstitutions", false);
var conclusionMetaMatcher = new ConclusionMetaMatcher();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9tZXRhTWF0Y2hlci9jb25jbHVzaW9uLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgTWV0YU1hdGNoZXIgZnJvbSBcIi4uL21ldGFNYXRjaGVyXCI7XG5cbmNsYXNzIENvbmNsdXNpb25NZXRhTWF0Y2hlciBleHRlbmRzIE1ldGFNYXRjaGVyIHtcbiAgc3RhdGljIGNyZWF0ZU1ldGFTdWJzdGl0dXRpb25zID0gZmFsc2U7XG59XG5cbmV4cG9ydCBjb25zdCBjb25jbHVzaW9uTWV0YU1hdGNoZXIgPSBuZXcgQ29uY2x1c2lvbk1ldGFNYXRjaGVyKCk7XG4iXSwibmFtZXMiOlsiY29uY2x1c2lvbk1ldGFNYXRjaGVyIiwiQ29uY2x1c2lvbk1ldGFNYXRjaGVyIiwiTWV0YU1hdGNoZXIiLCJjcmVhdGVNZXRhU3Vic3RpdHV0aW9ucyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBUWFBOzs7ZUFBQUE7OztnRUFOVzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXhCLElBQUEsQUFBTUMsc0NBSUgsQUFKSDtjQUFNQTs4QkFBQUE7YUFBQUE7OEJBQUFBOzs7V0FBQUE7RUFBOEJDLG9CQUFXO0FBQzdDLGdCQURJRCx1QkFDR0UsMkJBQTBCLEtBQUs7QUFHakMsSUFBTUgsd0JBQXdCLElBQUlDIn0=