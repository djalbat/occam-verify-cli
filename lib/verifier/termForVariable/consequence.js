"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "consequenceTermForVariableVerifier", {
    enumerable: true,
    get: function() {
        return consequenceTermForVariableVerifier;
    }
});
var _termForVariable = /*#__PURE__*/ _interop_require_default(require("../../verifier/termForVariable"));
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
var ConsequenceTermForVariableVerifier = /*#__PURE__*/ function(TermForVariableVerifier) {
    _inherits(ConsequenceTermForVariableVerifier, TermForVariableVerifier);
    var _super = _create_super(ConsequenceTermForVariableVerifier);
    function ConsequenceTermForVariableVerifier() {
        _class_call_check(this, ConsequenceTermForVariableVerifier);
        return _super.apply(this, arguments);
    }
    return ConsequenceTermForVariableVerifier;
}(_termForVariable.default);
_define_property(ConsequenceTermForVariableVerifier, "createSubstitutions", false);
var consequenceTermForVariableVerifier = new ConsequenceTermForVariableVerifier();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy92ZXJpZmllci90ZXJtRm9yVmFyaWFibGUvY29uc2VxdWVuY2UuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBUZXJtRm9yVmFyaWFibGVWZXJpZmllciBmcm9tIFwiLi4vLi4vdmVyaWZpZXIvdGVybUZvclZhcmlhYmxlXCI7XG5cbmNsYXNzIENvbnNlcXVlbmNlVGVybUZvclZhcmlhYmxlVmVyaWZpZXIgZXh0ZW5kcyBUZXJtRm9yVmFyaWFibGVWZXJpZmllciB7XG4gIHN0YXRpYyBjcmVhdGVTdWJzdGl0dXRpb25zID0gZmFsc2U7XG59XG5cbmV4cG9ydCBjb25zdCBjb25zZXF1ZW5jZVRlcm1Gb3JWYXJpYWJsZVZlcmlmaWVyID0gbmV3IENvbnNlcXVlbmNlVGVybUZvclZhcmlhYmxlVmVyaWZpZXIoKTtcbiJdLCJuYW1lcyI6WyJjb25zZXF1ZW5jZVRlcm1Gb3JWYXJpYWJsZVZlcmlmaWVyIiwiQ29uc2VxdWVuY2VUZXJtRm9yVmFyaWFibGVWZXJpZmllciIsIlRlcm1Gb3JWYXJpYWJsZVZlcmlmaWVyIiwiY3JlYXRlU3Vic3RpdHV0aW9ucyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBUWFBOzs7ZUFBQUE7OztzRUFOdUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVwQyxJQUFBLEFBQU1DLG1EQUlILEFBSkg7Y0FBTUE7K0JBQUFBO2FBQUFBO2dDQUFBQTs7O1dBQUFBO0VBQTJDQyx3QkFBdUI7QUFDdEUsaUJBRElELG9DQUNHRSx1QkFBc0IsS0FBSztBQUc3QixJQUFNSCxxQ0FBcUMsSUFBSUMifQ==