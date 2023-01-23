"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return Conjecture;
    }
});
var _axiomLemmaTheoremConjecture = /*#__PURE__*/ _interopRequireDefault(require("./axiomLemmaTheoremConjecture"));
var _kinds = require("./kinds");
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
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
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
var Conjecture = /*#__PURE__*/ function(AxiomLemmaTheoremConjecture) {
    _inherits(Conjecture, AxiomLemmaTheoremConjecture);
    var _super = _createSuper(Conjecture);
    function Conjecture() {
        _classCallCheck(this, Conjecture);
        return _super.apply(this, arguments);
    }
    _createClass(Conjecture, null, [
        {
            key: "fromJSON",
            value: function fromJSON(json, releaseContext) {
                return _axiomLemmaTheoremConjecture.default.fromJSON(Conjecture, json, releaseContext);
            }
        },
        {
            key: "fromLabelsSuppositionsAndConsequence",
            value: function fromLabelsSuppositionsAndConsequence(labels, suppositions, consequence) {
                return _axiomLemmaTheoremConjecture.default.fromLabelsSuppositionsAndConsequence(Conjecture, labels, suppositions, consequence);
            }
        }
    ]);
    return Conjecture;
}(_axiomLemmaTheoremConjecture.default);
_defineProperty(Conjecture, "kind", _kinds.CONJECTURE_KIND);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9jb25qZWN0dXJlLmpzIiwiPDxqc3gtY29uZmlnLXByYWdtYS5qcz4+Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgQXhpb21MZW1tYVRoZW9yZW1Db25qZWN0dXJlIGZyb20gXCIuL2F4aW9tTGVtbWFUaGVvcmVtQ29uamVjdHVyZVwiO1xuXG5pbXBvcnQgeyBDT05KRUNUVVJFX0tJTkQgfSBmcm9tIFwiLi9raW5kc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb25qZWN0dXJlIGV4dGVuZHMgQXhpb21MZW1tYVRoZW9yZW1Db25qZWN0dXJlIHtcbiAgc3RhdGljIGtpbmQgPSBDT05KRUNUVVJFX0tJTkQ7XG5cbiAgc3RhdGljIGZyb21KU09OKGpzb24sIHJlbGVhc2VDb250ZXh0KSB7IHJldHVybiBBeGlvbUxlbW1hVGhlb3JlbUNvbmplY3R1cmUuZnJvbUpTT04oQ29uamVjdHVyZSwganNvbiwgcmVsZWFzZUNvbnRleHQpOyB9XG5cbiAgc3RhdGljIGZyb21MYWJlbHNTdXBwb3NpdGlvbnNBbmRDb25zZXF1ZW5jZShsYWJlbHMsIHN1cHBvc2l0aW9ucywgY29uc2VxdWVuY2UpIHsgcmV0dXJuIEF4aW9tTGVtbWFUaGVvcmVtQ29uamVjdHVyZS5mcm9tTGFiZWxzU3VwcG9zaXRpb25zQW5kQ29uc2VxdWVuY2UoQ29uamVjdHVyZSwgbGFiZWxzLCBzdXBwb3NpdGlvbnMsIGNvbnNlcXVlbmNlKTsgfVxufVxuIiwiUmVhY3QuY3JlYXRlRWxlbWVudCJdLCJuYW1lcyI6WyJDb25qZWN0dXJlIiwiZnJvbUpTT04iLCJqc29uIiwicmVsZWFzZUNvbnRleHQiLCJBeGlvbUxlbW1hVGhlb3JlbUNvbmplY3R1cmUiLCJmcm9tTGFiZWxzU3VwcG9zaXRpb25zQW5kQ29uc2VxdWVuY2UiLCJsYWJlbHMiLCJzdXBwb3NpdGlvbnMiLCJjb25zZXF1ZW5jZSIsImtpbmQiLCJDT05KRUNUVVJFX0tJTkQiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBTXFCQTs7O2dGQUptQjtxQkFFUjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFakIsSUFBQSxBQUFNQSwyQkFBTjtjQUFNQTs4QkFBQUE7YUFBQUE7OEJBQUFBOzs7aUJBQUFBOztZQUdaQyxLQUFBQTttQkFBUCxTQUFPQSxTQUFTQyxJQUFJLEVBQUVDLGNBQWMsRUFBRTtnQkFBRSxPQUFPQyxvQ0FBMkIsQ0FBQ0gsUUFBUSxDQUhoRUQsWUFHNkVFLE1BQU1DO1lBQWlCOzs7WUFFaEhFLEtBQUFBO21CQUFQLFNBQU9BLHFDQUFxQ0MsTUFBTSxFQUFFQyxZQUFZLEVBQUVDLFdBQVcsRUFBRTtnQkFBRSxPQUFPSixvQ0FBMkIsQ0FBQ0Msb0NBQW9DLENBTHJJTCxZQUtrSk0sUUFBUUMsY0FBY0M7WUFBYzs7O1dBTHRMUjtFQUFtQkksb0NBQTJCO0FBQ2pFLGdCQURtQkosWUFDWlMsUUFBT0Msc0JBQWUifQ==