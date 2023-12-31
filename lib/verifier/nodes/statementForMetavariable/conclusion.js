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
var _statementForMetavariable = /*#__PURE__*/ _interop_require_default(require("../../../verifier/nodes/statementForMetavariable"));
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
var ConclusionStatementForMetavariableNodesVerifier = /*#__PURE__*/ function(StatementForMetavariableNodesVerifier) {
    _inherits(ConclusionStatementForMetavariableNodesVerifier, StatementForMetavariableNodesVerifier);
    var _super = _create_super(ConclusionStatementForMetavariableNodesVerifier);
    function ConclusionStatementForMetavariableNodesVerifier() {
        _class_call_check(this, ConclusionStatementForMetavariableNodesVerifier);
        return _super.apply(this, arguments);
    }
    return ConclusionStatementForMetavariableNodesVerifier;
}(_statementForMetavariable.default);
_define_property(ConclusionStatementForMetavariableNodesVerifier, "createSubstitutions", false);
var conclusionStatementForMetavariableNodesVerifier = new ConclusionStatementForMetavariableNodesVerifier();
var _default = conclusionStatementForMetavariableNodesVerifier;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy92ZXJpZmllci9ub2Rlcy9zdGF0ZW1lbnRGb3JNZXRhdmFyaWFibGUvY29uY2x1c2lvbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFN0YXRlbWVudEZvck1ldGF2YXJpYWJsZU5vZGVzVmVyaWZpZXIgZnJvbSBcIi4uLy4uLy4uL3ZlcmlmaWVyL25vZGVzL3N0YXRlbWVudEZvck1ldGF2YXJpYWJsZVwiO1xuXG5jbGFzcyBDb25jbHVzaW9uU3RhdGVtZW50Rm9yTWV0YXZhcmlhYmxlTm9kZXNWZXJpZmllciBleHRlbmRzIFN0YXRlbWVudEZvck1ldGF2YXJpYWJsZU5vZGVzVmVyaWZpZXIge1xuICBzdGF0aWMgY3JlYXRlU3Vic3RpdHV0aW9ucyA9IGZhbHNlO1xufVxuXG5jb25zdCBjb25jbHVzaW9uU3RhdGVtZW50Rm9yTWV0YXZhcmlhYmxlTm9kZXNWZXJpZmllciA9IG5ldyBDb25jbHVzaW9uU3RhdGVtZW50Rm9yTWV0YXZhcmlhYmxlTm9kZXNWZXJpZmllcigpO1xuXG5leHBvcnQgZGVmYXVsdCBjb25jbHVzaW9uU3RhdGVtZW50Rm9yTWV0YXZhcmlhYmxlTm9kZXNWZXJpZmllcjtcbiJdLCJuYW1lcyI6WyJDb25jbHVzaW9uU3RhdGVtZW50Rm9yTWV0YXZhcmlhYmxlTm9kZXNWZXJpZmllciIsIlN0YXRlbWVudEZvck1ldGF2YXJpYWJsZU5vZGVzVmVyaWZpZXIiLCJjcmVhdGVTdWJzdGl0dXRpb25zIiwiY29uY2x1c2lvblN0YXRlbWVudEZvck1ldGF2YXJpYWJsZU5vZGVzVmVyaWZpZXIiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQVVBOzs7ZUFBQTs7OytFQVJrRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRWxELElBQUEsQUFBTUEsZ0VBQUQsQUFBTDtjQUFNQTsrQkFBQUE7YUFBQUE7Z0NBQUFBOzs7V0FBQUE7RUFBd0RDLGlDQUFxQztBQUNqRyxpQkFESUQsaURBQ0dFLHVCQUFzQjtBQUcvQixJQUFNQyxrREFBa0QsSUFBSUg7SUFFNUQsV0FBZUcifQ==