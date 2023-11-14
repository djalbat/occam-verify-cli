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
var _metastatementForMetavariable = /*#__PURE__*/ _interop_require_default(require("../../../verifier/nodes/metastatementForMetavariable"));
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
var ConclusionMetastatementForMetavariableNodesVerifier = /*#__PURE__*/ function(MetastatementForMetavariableNodesVerifier) {
    _inherits(ConclusionMetastatementForMetavariableNodesVerifier, MetastatementForMetavariableNodesVerifier);
    var _super = _create_super(ConclusionMetastatementForMetavariableNodesVerifier);
    function ConclusionMetastatementForMetavariableNodesVerifier() {
        _class_call_check(this, ConclusionMetastatementForMetavariableNodesVerifier);
        return _super.apply(this, arguments);
    }
    return ConclusionMetastatementForMetavariableNodesVerifier;
}(_metastatementForMetavariable.default);
_define_property(ConclusionMetastatementForMetavariableNodesVerifier, "createSubstitutions", false);
var conclusionMetastatementForMetavariableNodesVerifier = new ConclusionMetastatementForMetavariableNodesVerifier();
var _default = conclusionMetastatementForMetavariableNodesVerifier;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy92ZXJpZmllci9ub2Rlcy9tZXRhc3RhdGVtZW50Rm9yTWV0YXZhcmlhYmxlL2NvbmNsdXNpb24uanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBNZXRhc3RhdGVtZW50Rm9yTWV0YXZhcmlhYmxlTm9kZXNWZXJpZmllciBmcm9tIFwiLi4vLi4vLi4vdmVyaWZpZXIvbm9kZXMvbWV0YXN0YXRlbWVudEZvck1ldGF2YXJpYWJsZVwiO1xuXG5jbGFzcyBDb25jbHVzaW9uTWV0YXN0YXRlbWVudEZvck1ldGF2YXJpYWJsZU5vZGVzVmVyaWZpZXIgZXh0ZW5kcyBNZXRhc3RhdGVtZW50Rm9yTWV0YXZhcmlhYmxlTm9kZXNWZXJpZmllciB7XG4gIHN0YXRpYyBjcmVhdGVTdWJzdGl0dXRpb25zID0gZmFsc2U7XG59XG5cbmNvbnN0IGNvbmNsdXNpb25NZXRhc3RhdGVtZW50Rm9yTWV0YXZhcmlhYmxlTm9kZXNWZXJpZmllciA9IG5ldyBDb25jbHVzaW9uTWV0YXN0YXRlbWVudEZvck1ldGF2YXJpYWJsZU5vZGVzVmVyaWZpZXIoKTtcblxuZXhwb3J0IGRlZmF1bHQgY29uY2x1c2lvbk1ldGFzdGF0ZW1lbnRGb3JNZXRhdmFyaWFibGVOb2Rlc1ZlcmlmaWVyO1xuIl0sIm5hbWVzIjpbIkNvbmNsdXNpb25NZXRhc3RhdGVtZW50Rm9yTWV0YXZhcmlhYmxlTm9kZXNWZXJpZmllciIsIk1ldGFzdGF0ZW1lbnRGb3JNZXRhdmFyaWFibGVOb2Rlc1ZlcmlmaWVyIiwiY3JlYXRlU3Vic3RpdHV0aW9ucyIsImNvbmNsdXNpb25NZXRhc3RhdGVtZW50Rm9yTWV0YXZhcmlhYmxlTm9kZXNWZXJpZmllciJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBVUE7OztlQUFBOzs7bUZBUnNEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFdEQsSUFBQSxBQUFNQSxvRUFJSCxBQUpIO2NBQU1BOytCQUFBQTthQUFBQTtnQ0FBQUE7OztXQUFBQTtFQUE0REMscUNBQXlDO0FBQ3pHLGlCQURJRCxxREFDR0UsdUJBQXNCO0FBRy9CLElBQU1DLHNEQUFzRCxJQUFJSDtJQUVoRSxXQUFlRyJ9