"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
var _termForVariable = /*#__PURE__*/ _interop_require_default(require("../../../verifier/nodes/termForVariable"));
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
function _define_property(obj, key, value) {
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
var SuppositionTermForVariableNodesVerifier = /*#__PURE__*/ function(TermForVariableNodesVerifier) {
    _inherits(SuppositionTermForVariableNodesVerifier, TermForVariableNodesVerifier);
    var _super = _create_super(SuppositionTermForVariableNodesVerifier);
    function SuppositionTermForVariableNodesVerifier() {
        _class_call_check(this, SuppositionTermForVariableNodesVerifier);
        return _super.apply(this, arguments);
    }
    return SuppositionTermForVariableNodesVerifier;
}(_termForVariable.default);
_define_property(SuppositionTermForVariableNodesVerifier, "createSubstitutions", true);
var suppositionTermForVariableNodesVerifier = new SuppositionTermForVariableNodesVerifier();
var _default = suppositionTermForVariableNodesVerifier;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy92ZXJpZmllci9ub2Rlcy90ZXJtRm9yVmFyaWFibGUvc3VwcG9zaXRpb24uanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBUZXJtRm9yVmFyaWFibGVOb2Rlc1ZlcmlmaWVyIGZyb20gXCIuLi8uLi8uLi92ZXJpZmllci9ub2Rlcy90ZXJtRm9yVmFyaWFibGVcIjtcblxuY2xhc3MgU3VwcG9zaXRpb25UZXJtRm9yVmFyaWFibGVOb2Rlc1ZlcmlmaWVyIGV4dGVuZHMgVGVybUZvclZhcmlhYmxlTm9kZXNWZXJpZmllciB7XG4gIHN0YXRpYyBjcmVhdGVTdWJzdGl0dXRpb25zID0gdHJ1ZTtcbn1cblxuY29uc3Qgc3VwcG9zaXRpb25UZXJtRm9yVmFyaWFibGVOb2Rlc1ZlcmlmaWVyID0gbmV3IFN1cHBvc2l0aW9uVGVybUZvclZhcmlhYmxlTm9kZXNWZXJpZmllcigpO1xuXG5leHBvcnQgZGVmYXVsdCBzdXBwb3NpdGlvblRlcm1Gb3JWYXJpYWJsZU5vZGVzVmVyaWZpZXI7XG4iXSwibmFtZXMiOlsiU3VwcG9zaXRpb25UZXJtRm9yVmFyaWFibGVOb2Rlc1ZlcmlmaWVyIiwiVGVybUZvclZhcmlhYmxlTm9kZXNWZXJpZmllciIsImNyZWF0ZVN1YnN0aXR1dGlvbnMiLCJzdXBwb3NpdGlvblRlcm1Gb3JWYXJpYWJsZU5vZGVzVmVyaWZpZXIiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQVVBOzs7ZUFBQTs7O3NFQVJ5Qzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXpDLElBQUEsQUFBTUEsd0RBQUQsQUFBTDtjQUFNQTsrQkFBQUE7YUFBQUE7Z0NBQUFBOzs7V0FBQUE7RUFBZ0RDLHdCQUE0QjtBQUNoRixpQkFESUQseUNBQ0dFLHVCQUFzQjtBQUcvQixJQUFNQywwQ0FBMEMsSUFBSUg7SUFFcEQsV0FBZUcifQ==