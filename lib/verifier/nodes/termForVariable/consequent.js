"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "consequentTermForVariableNodesVerifier", {
    enumerable: true,
    get: function() {
        return consequentTermForVariableNodesVerifier;
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
var ConsequentTermForVariableNodesVerifier = /*#__PURE__*/ function(TermForVariableNodesVerifier) {
    _inherits(ConsequentTermForVariableNodesVerifier, TermForVariableNodesVerifier);
    var _super = _create_super(ConsequentTermForVariableNodesVerifier);
    function ConsequentTermForVariableNodesVerifier() {
        _class_call_check(this, ConsequentTermForVariableNodesVerifier);
        return _super.apply(this, arguments);
    }
    return ConsequentTermForVariableNodesVerifier;
}(_termForVariable.default);
_define_property(ConsequentTermForVariableNodesVerifier, "createSubstitutions", false);
var consequentTermForVariableNodesVerifier = new ConsequentTermForVariableNodesVerifier();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy92ZXJpZmllci9ub2Rlcy90ZXJtRm9yVmFyaWFibGUvY29uc2VxdWVudC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFRlcm1Gb3JWYXJpYWJsZU5vZGVzVmVyaWZpZXIgZnJvbSBcIi4uLy4uLy4uL3ZlcmlmaWVyL25vZGVzL3Rlcm1Gb3JWYXJpYWJsZVwiO1xuXG5jbGFzcyBDb25zZXF1ZW50VGVybUZvclZhcmlhYmxlTm9kZXNWZXJpZmllciBleHRlbmRzIFRlcm1Gb3JWYXJpYWJsZU5vZGVzVmVyaWZpZXIge1xuICBzdGF0aWMgY3JlYXRlU3Vic3RpdHV0aW9ucyA9IGZhbHNlO1xufVxuXG5leHBvcnQgY29uc3QgY29uc2VxdWVudFRlcm1Gb3JWYXJpYWJsZU5vZGVzVmVyaWZpZXIgPSBuZXcgQ29uc2VxdWVudFRlcm1Gb3JWYXJpYWJsZU5vZGVzVmVyaWZpZXIoKTtcbiJdLCJuYW1lcyI6WyJjb25zZXF1ZW50VGVybUZvclZhcmlhYmxlTm9kZXNWZXJpZmllciIsIkNvbnNlcXVlbnRUZXJtRm9yVmFyaWFibGVOb2Rlc1ZlcmlmaWVyIiwiVGVybUZvclZhcmlhYmxlTm9kZXNWZXJpZmllciIsImNyZWF0ZVN1YnN0aXR1dGlvbnMiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQVFhQTs7O2VBQUFBOzs7c0VBTjRCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFekMsSUFBQSxBQUFNQyx1REFJSCxBQUpIO2NBQU1BOytCQUFBQTthQUFBQTtnQ0FBQUE7OztXQUFBQTtFQUErQ0Msd0JBQTRCO0FBQy9FLGlCQURJRCx3Q0FDR0UsdUJBQXNCO0FBR3hCLElBQU1ILHlDQUF5QyxJQUFJQyJ9