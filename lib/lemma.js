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
var _axiomLemmaTheorem = /*#__PURE__*/ _interopRequireDefault(require("./axiomLemmaTheorem"));
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
var Lemma = /*#__PURE__*/ function(AxiomLemmaTheorem) {
    _inherits(Lemma, AxiomLemmaTheorem);
    var _super = _createSuper(Lemma);
    function Lemma() {
        _classCallCheck(this, Lemma);
        return _super.apply(this, arguments);
    }
    _createClass(Lemma, null, [
        {
            key: "fromJSON",
            value: function fromJSON(json, releaseContext) {
                return _axiomLemmaTheorem.default.fromJSON(Lemma, json);
            }
        },
        {
            key: "fromLabelsAntecedentsAndConsequent",
            value: function fromLabelsAntecedentsAndConsequent(labels, antecedents, consequent) {
                return _axiomLemmaTheorem.default.fromLabelsAntecedentsAndConsequent(Lemma, labels, antecedents, consequent);
            }
        }
    ]);
    return Lemma;
}(_axiomLemmaTheorem.default);
_defineProperty(Lemma, "kind", _kinds.LEMMA_KIND);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9sZW1tYS5qcyIsIjw8anN4LWNvbmZpZy1wcmFnbWEuanM+PiJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IEF4aW9tTGVtbWFUaGVvcmVtIGZyb20gXCIuL2F4aW9tTGVtbWFUaGVvcmVtXCI7XG5cbmltcG9ydCB7IExFTU1BX0tJTkQgfSBmcm9tIFwiLi9raW5kc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMZW1tYSBleHRlbmRzIEF4aW9tTGVtbWFUaGVvcmVtIHtcbiAgc3RhdGljIGtpbmQgPSBMRU1NQV9LSU5EO1xuXG4gIHN0YXRpYyBmcm9tSlNPTihqc29uLCByZWxlYXNlQ29udGV4dCkgeyByZXR1cm4gQXhpb21MZW1tYVRoZW9yZW0uZnJvbUpTT04oTGVtbWEsIGpzb24pOyB9XG5cbiAgc3RhdGljIGZyb21MYWJlbHNBbnRlY2VkZW50c0FuZENvbnNlcXVlbnQobGFiZWxzLCBhbnRlY2VkZW50cywgY29uc2VxdWVudCkgeyByZXR1cm4gQXhpb21MZW1tYVRoZW9yZW0uZnJvbUxhYmVsc0FudGVjZWRlbnRzQW5kQ29uc2VxdWVudChMZW1tYSwgbGFiZWxzLCBhbnRlY2VkZW50cywgY29uc2VxdWVudCk7IH1cbn1cbiIsIlJlYWN0LmNyZWF0ZUVsZW1lbnQiXSwibmFtZXMiOlsiTGVtbWEiLCJmcm9tSlNPTiIsImpzb24iLCJyZWxlYXNlQ29udGV4dCIsIkF4aW9tTGVtbWFUaGVvcmVtIiwiZnJvbUxhYmVsc0FudGVjZWRlbnRzQW5kQ29uc2VxdWVudCIsImxhYmVscyIsImFudGVjZWRlbnRzIiwiY29uc2VxdWVudCIsImtpbmQiLCJMRU1NQV9LSU5EIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQU1xQkE7OztzRUFKUztxQkFFSDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFWixJQUFBLEFBQU1BLHNCQUFOO2NBQU1BOzhCQUFBQTthQUFBQTs4QkFBQUE7OztpQkFBQUE7O1lBR1pDLEtBQUFBO21CQUFQLFNBQU9BLFNBQVNDLElBQUksRUFBRUMsY0FBYyxFQUFFO2dCQUFFLE9BQU9DLDBCQUFpQixDQUFDSCxRQUFRLENBSHRERCxPQUc4REU7WUFBTzs7O1lBRWpGRyxLQUFBQTttQkFBUCxTQUFPQSxtQ0FBbUNDLE1BQU0sRUFBRUMsV0FBVyxFQUFFQyxVQUFVLEVBQUU7Z0JBQUUsT0FBT0osMEJBQWlCLENBQUNDLGtDQUFrQyxDQUxySEwsT0FLNkhNLFFBQVFDLGFBQWFDO1lBQWE7OztXQUwvSlI7RUFBY0ksMEJBQWlCO0FBQ2xELGdCQURtQkosT0FDWlMsUUFBT0MsaUJBQVUifQ==