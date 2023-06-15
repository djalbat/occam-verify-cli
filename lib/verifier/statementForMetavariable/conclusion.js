"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "conclusionStatementForMetavariableVerifier", {
    enumerable: true,
    get: function() {
        return conclusionStatementForMetavariableVerifier;
    }
});
var _statementForMetavariable = /*#__PURE__*/ _interop_require_default(require("../../verifier/statementForMetavariable"));
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
var ConclusionStatementForMetavariableVerifier = /*#__PURE__*/ function(StatementForMetavariableVerifier) {
    _inherits(ConclusionStatementForMetavariableVerifier, StatementForMetavariableVerifier);
    var _super = _create_super(ConclusionStatementForMetavariableVerifier);
    function ConclusionStatementForMetavariableVerifier() {
        _class_call_check(this, ConclusionStatementForMetavariableVerifier);
        return _super.apply(this, arguments);
    }
    return ConclusionStatementForMetavariableVerifier;
}(_statementForMetavariable.default);
_define_property(ConclusionStatementForMetavariableVerifier, "createSubstitutions", false);
var conclusionStatementForMetavariableVerifier = new ConclusionStatementForMetavariableVerifier();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy92ZXJpZmllci9zdGF0ZW1lbnRGb3JNZXRhdmFyaWFibGUvY29uY2x1c2lvbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFN0YXRlbWVudEZvck1ldGF2YXJpYWJsZVZlcmlmaWVyIGZyb20gXCIuLi8uLi92ZXJpZmllci9zdGF0ZW1lbnRGb3JNZXRhdmFyaWFibGVcIjtcblxuY2xhc3MgQ29uY2x1c2lvblN0YXRlbWVudEZvck1ldGF2YXJpYWJsZVZlcmlmaWVyIGV4dGVuZHMgU3RhdGVtZW50Rm9yTWV0YXZhcmlhYmxlVmVyaWZpZXIge1xuICBzdGF0aWMgY3JlYXRlU3Vic3RpdHV0aW9ucyA9IGZhbHNlO1xufVxuXG5leHBvcnQgY29uc3QgY29uY2x1c2lvblN0YXRlbWVudEZvck1ldGF2YXJpYWJsZVZlcmlmaWVyID0gbmV3IENvbmNsdXNpb25TdGF0ZW1lbnRGb3JNZXRhdmFyaWFibGVWZXJpZmllcigpO1xuIl0sIm5hbWVzIjpbImNvbmNsdXNpb25TdGF0ZW1lbnRGb3JNZXRhdmFyaWFibGVWZXJpZmllciIsIkNvbmNsdXNpb25TdGF0ZW1lbnRGb3JNZXRhdmFyaWFibGVWZXJpZmllciIsIlN0YXRlbWVudEZvck1ldGF2YXJpYWJsZVZlcmlmaWVyIiwiY3JlYXRlU3Vic3RpdHV0aW9ucyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBUWFBOzs7ZUFBQUE7OzsrRUFOZ0M7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUU3QyxJQUFBLEFBQU1DLDJEQUlILEFBSkg7Y0FBTUE7K0JBQUFBO2FBQUFBO2dDQUFBQTs7O1dBQUFBO0VBQW1EQyxpQ0FBZ0M7QUFDdkYsaUJBRElELDRDQUNHRSx1QkFBc0I7QUFHeEIsSUFBTUgsNkNBQTZDLElBQUlDIn0=