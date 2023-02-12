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
            key: "fromJSONAndFileContext",
            value: function fromJSONAndFileContext(json, fileContext) {
                return _axiomLemmaTheoremConjecture.default.fromJSONAndFileContext(Conjecture, json, fileContext);
            }
        },
        {
            key: "fromLabelsSuppositionsConsequenceAndProofContext",
            value: function fromLabelsSuppositionsConsequenceAndProofContext(labels, suppositions, consequence, proofContext) {
                return _axiomLemmaTheoremConjecture.default.fromLabelsSuppositionsConsequenceAndProofContext(Conjecture, labels, suppositions, consequence, proofContext);
            }
        }
    ]);
    return Conjecture;
}(_axiomLemmaTheoremConjecture.default);
_defineProperty(Conjecture, "kind", _kinds.CONJECTURE_KIND);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9jb25qZWN0dXJlLmpzIiwiPDxqc3gtY29uZmlnLXByYWdtYS5qcz4+Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgQXhpb21MZW1tYVRoZW9yZW1Db25qZWN0dXJlIGZyb20gXCIuL2F4aW9tTGVtbWFUaGVvcmVtQ29uamVjdHVyZVwiO1xuXG5pbXBvcnQgeyBDT05KRUNUVVJFX0tJTkQgfSBmcm9tIFwiLi9raW5kc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb25qZWN0dXJlIGV4dGVuZHMgQXhpb21MZW1tYVRoZW9yZW1Db25qZWN0dXJlIHtcbiAgc3RhdGljIGtpbmQgPSBDT05KRUNUVVJFX0tJTkQ7XG5cbiAgc3RhdGljIGZyb21KU09OQW5kRmlsZUNvbnRleHQoanNvbiwgZmlsZUNvbnRleHQpIHsgcmV0dXJuIEF4aW9tTGVtbWFUaGVvcmVtQ29uamVjdHVyZS5mcm9tSlNPTkFuZEZpbGVDb250ZXh0KENvbmplY3R1cmUsIGpzb24sIGZpbGVDb250ZXh0KTsgfVxuXG4gIHN0YXRpYyBmcm9tTGFiZWxzU3VwcG9zaXRpb25zQ29uc2VxdWVuY2VBbmRQcm9vZkNvbnRleHQobGFiZWxzLCBzdXBwb3NpdGlvbnMsIGNvbnNlcXVlbmNlLCBwcm9vZkNvbnRleHQpIHsgcmV0dXJuIEF4aW9tTGVtbWFUaGVvcmVtQ29uamVjdHVyZS5mcm9tTGFiZWxzU3VwcG9zaXRpb25zQ29uc2VxdWVuY2VBbmRQcm9vZkNvbnRleHQoQ29uamVjdHVyZSwgbGFiZWxzLCBzdXBwb3NpdGlvbnMsIGNvbnNlcXVlbmNlLCBwcm9vZkNvbnRleHQpOyB9XG59XG4iLCJSZWFjdC5jcmVhdGVFbGVtZW50Il0sIm5hbWVzIjpbIkNvbmplY3R1cmUiLCJmcm9tSlNPTkFuZEZpbGVDb250ZXh0IiwianNvbiIsImZpbGVDb250ZXh0IiwiQXhpb21MZW1tYVRoZW9yZW1Db25qZWN0dXJlIiwiZnJvbUxhYmVsc1N1cHBvc2l0aW9uc0NvbnNlcXVlbmNlQW5kUHJvb2ZDb250ZXh0IiwibGFiZWxzIiwic3VwcG9zaXRpb25zIiwiY29uc2VxdWVuY2UiLCJwcm9vZkNvbnRleHQiLCJraW5kIiwiQ09OSkVDVFVSRV9LSU5EIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQU1xQkE7OztnRkFKbUI7cUJBRVI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRWpCLElBQUEsQUFBTUEsMkJBQU47Y0FBTUE7OEJBQUFBO2FBQUFBOzhCQUFBQTs7O2lCQUFBQTs7WUFHWkMsS0FBQUE7bUJBQVAsU0FBT0EsdUJBQXVCQyxJQUFJLEVBQUVDLFdBQVcsRUFBRTtnQkFBRSxPQUFPQyxvQ0FBMkIsQ0FBQ0gsc0JBQXNCLENBSHpGRCxZQUdzR0UsTUFBTUM7WUFBYzs7O1lBRXRJRSxLQUFBQTttQkFBUCxTQUFPQSxpREFBaURDLE1BQU0sRUFBRUMsWUFBWSxFQUFFQyxXQUFXLEVBQUVDLFlBQVksRUFBRTtnQkFBRSxPQUFPTCxvQ0FBMkIsQ0FBQ0MsZ0RBQWdELENBTDNLTCxZQUt3TE0sUUFBUUMsY0FBY0MsYUFBYUM7WUFBZTs7O1dBTDFPVDtFQUFtQkksb0NBQTJCO0FBQ2pFLGdCQURtQkosWUFDWlUsUUFBT0Msc0JBQWUifQ==