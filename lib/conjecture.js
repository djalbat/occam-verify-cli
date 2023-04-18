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
var _axiomLemmaTheoremConjecture = /*#__PURE__*/ _interop_require_default(require("./axiomLemmaTheoremConjecture"));
function _assert_this_initialized(self) {
    if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
}
function _class_call_check(instance, Constructor) {
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
function _create_class(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
function _get_prototype_of(o) {
    _get_prototype_of = Object.setPrototypeOf ? Object.getPrototypeOf : function getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _get_prototype_of(o);
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
    if (superClass) _set_prototype_of(subClass, superClass);
}
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function _possible_constructor_return(self, call) {
    if (call && (_type_of(call) === "object" || typeof call === "function")) {
        return call;
    }
    return _assert_this_initialized(self);
}
function _set_prototype_of(o, p) {
    _set_prototype_of = Object.setPrototypeOf || function setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return _set_prototype_of(o, p);
}
function _type_of(obj) {
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
}
function _is_native_reflect_construct() {
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
function _create_super(Derived) {
    var hasNativeReflectConstruct = _is_native_reflect_construct();
    return function _createSuperInternal() {
        var Super = _get_prototype_of(Derived), result;
        if (hasNativeReflectConstruct) {
            var NewTarget = _get_prototype_of(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
        } else {
            result = Super.apply(this, arguments);
        }
        return _possible_constructor_return(this, result);
    };
}
var Conjecture = /*#__PURE__*/ function(AxiomLemmaTheoremConjecture) {
    _inherits(Conjecture, AxiomLemmaTheoremConjecture);
    var _super = _create_super(Conjecture);
    function Conjecture() {
        _class_call_check(this, Conjecture);
        return _super.apply(this, arguments);
    }
    _create_class(Conjecture, null, [
        {
            key: "fromJSONAndFileContext",
            value: function fromJSONAndFileContext(json, fileContext) {
                return _axiomLemmaTheoremConjecture.default.fromJSONAndFileContext(Conjecture, json, fileContext);
            }
        },
        {
            key: "fromLabelsSuppositionsConsequenceAndProofContext",
            value: function fromLabelsSuppositionsConsequenceAndProofContext(labels, suppositions, consequent, proofContext) {
                return _axiomLemmaTheoremConjecture.default.fromLabelsSuppositionsConsequenceAndProofContext(Conjecture, labels, suppositions, consequent, proofContext);
            }
        }
    ]);
    return Conjecture;
}(_axiomLemmaTheoremConjecture.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9jb25qZWN0dXJlLmpzIiwiPDxqc3gtY29uZmlnLXByYWdtYS5qcz4+Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgQXhpb21MZW1tYVRoZW9yZW1Db25qZWN0dXJlIGZyb20gXCIuL2F4aW9tTGVtbWFUaGVvcmVtQ29uamVjdHVyZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb25qZWN0dXJlIGV4dGVuZHMgQXhpb21MZW1tYVRoZW9yZW1Db25qZWN0dXJlIHtcbiAgc3RhdGljIGZyb21KU09OQW5kRmlsZUNvbnRleHQoanNvbiwgZmlsZUNvbnRleHQpIHsgcmV0dXJuIEF4aW9tTGVtbWFUaGVvcmVtQ29uamVjdHVyZS5mcm9tSlNPTkFuZEZpbGVDb250ZXh0KENvbmplY3R1cmUsIGpzb24sIGZpbGVDb250ZXh0KTsgfVxuXG4gIHN0YXRpYyBmcm9tTGFiZWxzU3VwcG9zaXRpb25zQ29uc2VxdWVuY2VBbmRQcm9vZkNvbnRleHQobGFiZWxzLCBzdXBwb3NpdGlvbnMsIGNvbnNlcXVlbnQsIHByb29mQ29udGV4dCkgeyByZXR1cm4gQXhpb21MZW1tYVRoZW9yZW1Db25qZWN0dXJlLmZyb21MYWJlbHNTdXBwb3NpdGlvbnNDb25zZXF1ZW5jZUFuZFByb29mQ29udGV4dChDb25qZWN0dXJlLCBsYWJlbHMsIHN1cHBvc2l0aW9ucywgY29uc2VxdWVudCwgcHJvb2ZDb250ZXh0KTsgfVxufVxuIiwiUmVhY3QuY3JlYXRlRWxlbWVudCJdLCJuYW1lcyI6WyJDb25qZWN0dXJlIiwiZnJvbUpTT05BbmRGaWxlQ29udGV4dCIsImpzb24iLCJmaWxlQ29udGV4dCIsIkF4aW9tTGVtbWFUaGVvcmVtQ29uamVjdHVyZSIsImZyb21MYWJlbHNTdXBwb3NpdGlvbnNDb25zZXF1ZW5jZUFuZFByb29mQ29udGV4dCIsImxhYmVscyIsInN1cHBvc2l0aW9ucyIsImNvbnNlcXVlbnQiLCJwcm9vZkNvbnRleHQiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBSXFCQTs7O2tGQUZtQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUV6QixJQUFBLEFBQU1BLDJCQUFOO2NBQU1BOytCQUFBQTthQUFBQTtnQ0FBQUE7OztrQkFBQUE7O1lBQ1pDLEtBQUFBO21CQUFQLFNBQU9BLHVCQUF1QkMsSUFBSSxFQUFFQyxXQUFXLEVBQUU7Z0JBQUUsT0FBT0Msb0NBQTJCLENBQUNILHNCQUFzQixDQUR6RkQsWUFDc0dFLE1BQU1DO1lBQWM7OztZQUV0SUUsS0FBQUE7bUJBQVAsU0FBT0EsaURBQWlEQyxNQUFNLEVBQUVDLFlBQVksRUFBRUMsVUFBVSxFQUFFQyxZQUFZLEVBQUU7Z0JBQUUsT0FBT0wsb0NBQTJCLENBQUNDLGdEQUFnRCxDQUgxS0wsWUFHdUxNLFFBQVFDLGNBQWNDLFlBQVlDO1lBQWU7OztXQUh4T1Q7RUFBbUJJLG9DQUEyQiJ9