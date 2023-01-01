"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return Theorem;
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
var Theorem = /*#__PURE__*/ function(AxiomLemmaTheorem) {
    _inherits(Theorem, AxiomLemmaTheorem);
    var _super = _createSuper(Theorem);
    function Theorem() {
        _classCallCheck(this, Theorem);
        return _super.apply(this, arguments);
    }
    _createClass(Theorem, null, [
        {
            key: "fromJSON",
            value: function fromJSON(json, releaseContext) {
                return _axiomLemmaTheorem.default.fromJSON(Theorem, json);
            }
        },
        {
            key: "fromLabelsAntecedentsAndConsequent",
            value: function fromLabelsAntecedentsAndConsequent(labels, antecedents, consequent) {
                return _axiomLemmaTheorem.default.fromLabelsAntecedentsAndConsequent(Theorem, labels, antecedents, consequent);
            }
        }
    ]);
    return Theorem;
}(_axiomLemmaTheorem.default);
_defineProperty(Theorem, "kind", _kinds.THEOREM_KIND);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy90aGVvcmVtLmpzIiwiPDxqc3gtY29uZmlnLXByYWdtYS5qcz4+Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgQXhpb21MZW1tYVRoZW9yZW0gZnJvbSBcIi4vYXhpb21MZW1tYVRoZW9yZW1cIjtcblxuaW1wb3J0IHsgVEhFT1JFTV9LSU5EIH0gZnJvbSBcIi4va2luZHNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGhlb3JlbSBleHRlbmRzIEF4aW9tTGVtbWFUaGVvcmVtIHtcbiAgc3RhdGljIGtpbmQgPSBUSEVPUkVNX0tJTkQ7XG5cbiAgc3RhdGljIGZyb21KU09OKGpzb24sIHJlbGVhc2VDb250ZXh0KSB7IHJldHVybiBBeGlvbUxlbW1hVGhlb3JlbS5mcm9tSlNPTihUaGVvcmVtLCBqc29uKTsgfVxuXG4gIHN0YXRpYyBmcm9tTGFiZWxzQW50ZWNlZGVudHNBbmRDb25zZXF1ZW50KGxhYmVscywgYW50ZWNlZGVudHMsIGNvbnNlcXVlbnQpIHsgcmV0dXJuIEF4aW9tTGVtbWFUaGVvcmVtLmZyb21MYWJlbHNBbnRlY2VkZW50c0FuZENvbnNlcXVlbnQoVGhlb3JlbSwgbGFiZWxzLCBhbnRlY2VkZW50cywgY29uc2VxdWVudCk7IH1cbn1cbiIsIlJlYWN0LmNyZWF0ZUVsZW1lbnQiXSwibmFtZXMiOlsiVGhlb3JlbSIsImZyb21KU09OIiwianNvbiIsInJlbGVhc2VDb250ZXh0IiwiQXhpb21MZW1tYVRoZW9yZW0iLCJmcm9tTGFiZWxzQW50ZWNlZGVudHNBbmRDb25zZXF1ZW50IiwibGFiZWxzIiwiYW50ZWNlZGVudHMiLCJjb25zZXF1ZW50Iiwia2luZCIsIlRIRU9SRU1fS0lORCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFNcUJBOzs7c0VBSlM7cUJBRUQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRWQsSUFBQSxBQUFNQSx3QkFBTjtjQUFNQTs4QkFBQUE7YUFBQUE7OEJBQUFBOzs7aUJBQUFBOztZQUdaQyxLQUFBQTttQkFBUCxTQUFPQSxTQUFTQyxJQUFJLEVBQUVDLGNBQWMsRUFBRTtnQkFBRSxPQUFPQywwQkFBaUIsQ0FBQ0gsUUFBUSxDQUh0REQsU0FHZ0VFO1lBQU87OztZQUVuRkcsS0FBQUE7bUJBQVAsU0FBT0EsbUNBQW1DQyxNQUFNLEVBQUVDLFdBQVcsRUFBRUMsVUFBVSxFQUFFO2dCQUFFLE9BQU9KLDBCQUFpQixDQUFDQyxrQ0FBa0MsQ0FMckhMLFNBSytITSxRQUFRQyxhQUFhQztZQUFhOzs7V0FMaktSO0VBQWdCSSwwQkFBaUI7QUFDcEQsZ0JBRG1CSixTQUNaUyxRQUFPQyxtQkFBWSJ9