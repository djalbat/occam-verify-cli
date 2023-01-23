"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return Lemma;
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
var Lemma = /*#__PURE__*/ function(AxiomLemmaTheoremConjecture) {
    _inherits(Lemma, AxiomLemmaTheoremConjecture);
    var _super = _createSuper(Lemma);
    function Lemma() {
        _classCallCheck(this, Lemma);
        return _super.apply(this, arguments);
    }
    _createClass(Lemma, null, [
        {
            key: "fromJSON",
            value: function fromJSON(json, releaseContext) {
                return _axiomLemmaTheoremConjecture.default.fromJSON(Lemma, json, releaseContext);
            }
        },
        {
            key: "fromLabelsSuppositionsAndConsequence",
            value: function fromLabelsSuppositionsAndConsequence(labels, suppositions, consequence) {
                return _axiomLemmaTheoremConjecture.default.fromLabelsSuppositionsAndConsequence(Lemma, labels, suppositions, consequence);
            }
        }
    ]);
    return Lemma;
}(_axiomLemmaTheoremConjecture.default);
_defineProperty(Lemma, "kind", _kinds.LEMMA_KIND);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9sZW1tYS5qcyIsIjw8anN4LWNvbmZpZy1wcmFnbWEuanM+PiJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IEF4aW9tTGVtbWFUaGVvcmVtQ29uamVjdHVyZSBmcm9tIFwiLi9heGlvbUxlbW1hVGhlb3JlbUNvbmplY3R1cmVcIjtcblxuaW1wb3J0IHsgTEVNTUFfS0lORCB9IGZyb20gXCIuL2tpbmRzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExlbW1hIGV4dGVuZHMgQXhpb21MZW1tYVRoZW9yZW1Db25qZWN0dXJlIHtcbiAgc3RhdGljIGtpbmQgPSBMRU1NQV9LSU5EO1xuXG4gIHN0YXRpYyBmcm9tSlNPTihqc29uLCByZWxlYXNlQ29udGV4dCkgeyByZXR1cm4gQXhpb21MZW1tYVRoZW9yZW1Db25qZWN0dXJlLmZyb21KU09OKExlbW1hLCBqc29uLCByZWxlYXNlQ29udGV4dCk7IH1cblxuICBzdGF0aWMgZnJvbUxhYmVsc1N1cHBvc2l0aW9uc0FuZENvbnNlcXVlbmNlKGxhYmVscywgc3VwcG9zaXRpb25zLCBjb25zZXF1ZW5jZSkgeyByZXR1cm4gQXhpb21MZW1tYVRoZW9yZW1Db25qZWN0dXJlLmZyb21MYWJlbHNTdXBwb3NpdGlvbnNBbmRDb25zZXF1ZW5jZShMZW1tYSwgbGFiZWxzLCBzdXBwb3NpdGlvbnMsIGNvbnNlcXVlbmNlKTsgfVxufVxuIiwiUmVhY3QuY3JlYXRlRWxlbWVudCJdLCJuYW1lcyI6WyJMZW1tYSIsImZyb21KU09OIiwianNvbiIsInJlbGVhc2VDb250ZXh0IiwiQXhpb21MZW1tYVRoZW9yZW1Db25qZWN0dXJlIiwiZnJvbUxhYmVsc1N1cHBvc2l0aW9uc0FuZENvbnNlcXVlbmNlIiwibGFiZWxzIiwic3VwcG9zaXRpb25zIiwiY29uc2VxdWVuY2UiLCJraW5kIiwiTEVNTUFfS0lORCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFNcUJBOzs7Z0ZBSm1CO3FCQUViOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVaLElBQUEsQUFBTUEsc0JBQU47Y0FBTUE7OEJBQUFBO2FBQUFBOzhCQUFBQTs7O2lCQUFBQTs7WUFHWkMsS0FBQUE7bUJBQVAsU0FBT0EsU0FBU0MsSUFBSSxFQUFFQyxjQUFjLEVBQUU7Z0JBQUUsT0FBT0Msb0NBQTJCLENBQUNILFFBQVEsQ0FIaEVELE9BR3dFRSxNQUFNQztZQUFpQjs7O1lBRTNHRSxLQUFBQTttQkFBUCxTQUFPQSxxQ0FBcUNDLE1BQU0sRUFBRUMsWUFBWSxFQUFFQyxXQUFXLEVBQUU7Z0JBQUUsT0FBT0osb0NBQTJCLENBQUNDLG9DQUFvQyxDQUxySUwsT0FLNklNLFFBQVFDLGNBQWNDO1lBQWM7OztXQUxqTFI7RUFBY0ksb0NBQTJCO0FBQzVELGdCQURtQkosT0FDWlMsUUFBT0MsaUJBQVUifQ==