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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9heGlvbS5qcyIsIjw8anN4LWNvbmZpZy1wcmFnbWEuanM+PiJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IEF4aW9tTGVtbWFUaGVvcmVtQ29uamVjdHVyZSBmcm9tIFwiLi9heGlvbUxlbW1hVGhlb3JlbUNvbmplY3R1cmVcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXhpb20gZXh0ZW5kcyBBeGlvbUxlbW1hVGhlb3JlbUNvbmplY3R1cmUge1xuICBzdGF0aWMgZnJvbUpTT05BbmRGaWxlQ29udGV4dChqc29uLCBmaWxlQ29udGV4Y3QpIHsgcmV0dXJuIEF4aW9tTGVtbWFUaGVvcmVtQ29uamVjdHVyZS5mcm9tSlNPTkFuZEZpbGVDb250ZXh0KEF4aW9tLCBqc29uLCBmaWxlQ29udGV4Y3QpOyB9XG5cbiAgc3RhdGljIGZyb21MYWJlbHNTdXBwb3NpdGlvbnNDb25zZXF1ZW5jZUFuZFByb29mQ29udGV4dChsYWJlbHMsIHN1cHBvc2l0aW9ucywgY29uc2VxdWVuY2UsIHByb29mQ29udGV4dCkgeyByZXR1cm4gQXhpb21MZW1tYVRoZW9yZW1Db25qZWN0dXJlLmZyb21MYWJlbHNTdXBwb3NpdGlvbnNDb25zZXF1ZW5jZUFuZFByb29mQ29udGV4dChBeGlvbSwgbGFiZWxzLCBzdXBwb3NpdGlvbnMsIGNvbnNlcXVlbmNlLCBwcm9vZkNvbnRleHQpOyB9XG59XG4iLCJSZWFjdC5jcmVhdGVFbGVtZW50Il0sIm5hbWVzIjpbIkF4aW9tIiwiZnJvbUpTT05BbmRGaWxlQ29udGV4dCIsImpzb24iLCJmaWxlQ29udGV4Y3QiLCJBeGlvbUxlbW1hVGhlb3JlbUNvbmplY3R1cmUiLCJmcm9tTGFiZWxzU3VwcG9zaXRpb25zQ29uc2VxdWVuY2VBbmRQcm9vZkNvbnRleHQiLCJsYWJlbHMiLCJzdXBwb3NpdGlvbnMiLCJjb25zZXF1ZW5jZSIsInByb29mQ29udGV4dCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFJcUJBOzs7Z0ZBRm1COzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXpCLElBQUEsQUFBTUEsc0JBQU47Y0FBTUE7OEJBQUFBO2FBQUFBOzhCQUFBQTs7O2lCQUFBQTs7WUFDWkMsS0FBQUE7bUJBQVAsU0FBT0EsdUJBQXVCQyxJQUFJLEVBQUVDLFlBQVksRUFBRTtnQkFBRSxPQUFPQyxvQ0FBMkIsQ0FBQ0gsc0JBQXNCLENBRDFGRCxPQUNrR0UsTUFBTUM7WUFBZTs7O1lBRW5JRSxLQUFBQTttQkFBUCxTQUFPQSxpREFBaURDLE1BQU0sRUFBRUMsWUFBWSxFQUFFQyxXQUFXLEVBQUVDLFlBQVksRUFBRTtnQkFBRSxPQUFPTCxvQ0FBMkIsQ0FBQ0MsZ0RBQWdELENBSDNLTCxPQUdtTE0sUUFBUUMsY0FBY0MsYUFBYUM7WUFBZTs7O1dBSHJPVDtFQUFjSSxvQ0FBMkIifQ==