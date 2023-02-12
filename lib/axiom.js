"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return Axiom;
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
var Axiom = /*#__PURE__*/ function(AxiomLemmaTheoremConjecture) {
    _inherits(Axiom, AxiomLemmaTheoremConjecture);
    var _super = _createSuper(Axiom);
    function Axiom() {
        _classCallCheck(this, Axiom);
        return _super.apply(this, arguments);
    }
    _createClass(Axiom, null, [
        {
            key: "fromJSONAndFileContext",
            value: function fromJSONAndFileContext(json, fileContexct) {
                return _axiomLemmaTheoremConjecture.default.fromJSONAndFileContext(Axiom, json, fileContexct);
            }
        },
        {
            key: "fromLabelsSuppositionsConsequenceAndProofContext",
            value: function fromLabelsSuppositionsConsequenceAndProofContext(labels, suppositions, consequence, proofContext) {
                return _axiomLemmaTheoremConjecture.default.fromLabelsSuppositionsConsequenceAndProofContext(Axiom, labels, suppositions, consequence, proofContext);
            }
        }
    ]);
    return Axiom;
}(_axiomLemmaTheoremConjecture.default);
_defineProperty(Axiom, "kind", _kinds.AXIOM_KIND);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9heGlvbS5qcyIsIjw8anN4LWNvbmZpZy1wcmFnbWEuanM+PiJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IEF4aW9tTGVtbWFUaGVvcmVtQ29uamVjdHVyZSBmcm9tIFwiLi9heGlvbUxlbW1hVGhlb3JlbUNvbmplY3R1cmVcIjtcblxuaW1wb3J0IHsgQVhJT01fS0lORCB9IGZyb20gXCIuL2tpbmRzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEF4aW9tIGV4dGVuZHMgQXhpb21MZW1tYVRoZW9yZW1Db25qZWN0dXJlIHtcbiAgc3RhdGljIGtpbmQgPSBBWElPTV9LSU5EO1xuXG4gIHN0YXRpYyBmcm9tSlNPTkFuZEZpbGVDb250ZXh0KGpzb24sIGZpbGVDb250ZXhjdCkgeyByZXR1cm4gQXhpb21MZW1tYVRoZW9yZW1Db25qZWN0dXJlLmZyb21KU09OQW5kRmlsZUNvbnRleHQoQXhpb20sIGpzb24sIGZpbGVDb250ZXhjdCk7IH1cblxuICBzdGF0aWMgZnJvbUxhYmVsc1N1cHBvc2l0aW9uc0NvbnNlcXVlbmNlQW5kUHJvb2ZDb250ZXh0KGxhYmVscywgc3VwcG9zaXRpb25zLCBjb25zZXF1ZW5jZSwgcHJvb2ZDb250ZXh0KSB7IHJldHVybiBBeGlvbUxlbW1hVGhlb3JlbUNvbmplY3R1cmUuZnJvbUxhYmVsc1N1cHBvc2l0aW9uc0NvbnNlcXVlbmNlQW5kUHJvb2ZDb250ZXh0KEF4aW9tLCBsYWJlbHMsIHN1cHBvc2l0aW9ucywgY29uc2VxdWVuY2UsIHByb29mQ29udGV4dCk7IH1cbn1cbiIsIlJlYWN0LmNyZWF0ZUVsZW1lbnQiXSwibmFtZXMiOlsiQXhpb20iLCJmcm9tSlNPTkFuZEZpbGVDb250ZXh0IiwianNvbiIsImZpbGVDb250ZXhjdCIsIkF4aW9tTGVtbWFUaGVvcmVtQ29uamVjdHVyZSIsImZyb21MYWJlbHNTdXBwb3NpdGlvbnNDb25zZXF1ZW5jZUFuZFByb29mQ29udGV4dCIsImxhYmVscyIsInN1cHBvc2l0aW9ucyIsImNvbnNlcXVlbmNlIiwicHJvb2ZDb250ZXh0Iiwia2luZCIsIkFYSU9NX0tJTkQiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBTXFCQTs7O2dGQUptQjtxQkFFYjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFWixJQUFBLEFBQU1BLHNCQUFOO2NBQU1BOzhCQUFBQTthQUFBQTs4QkFBQUE7OztpQkFBQUE7O1lBR1pDLEtBQUFBO21CQUFQLFNBQU9BLHVCQUF1QkMsSUFBSSxFQUFFQyxZQUFZLEVBQUU7Z0JBQUUsT0FBT0Msb0NBQTJCLENBQUNILHNCQUFzQixDQUgxRkQsT0FHa0dFLE1BQU1DO1lBQWU7OztZQUVuSUUsS0FBQUE7bUJBQVAsU0FBT0EsaURBQWlEQyxNQUFNLEVBQUVDLFlBQVksRUFBRUMsV0FBVyxFQUFFQyxZQUFZLEVBQUU7Z0JBQUUsT0FBT0wsb0NBQTJCLENBQUNDLGdEQUFnRCxDQUwzS0wsT0FLbUxNLFFBQVFDLGNBQWNDLGFBQWFDO1lBQWU7OztXQUxyT1Q7RUFBY0ksb0NBQTJCO0FBQzVELGdCQURtQkosT0FDWlUsUUFBT0MsaUJBQVUifQ==