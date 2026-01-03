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
var _substitution = /*#__PURE__*/ _interop_require_default(require("../substitution"));
var _elements = require("../../elements");
var _instantiate = require("../../process/instantiate");
var _element = require("../../utilities/element");
function _assert_this_initialized(self) {
    if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
}
function _call_super(_this, derived, args) {
    derived = _get_prototype_of(derived);
    return _possible_constructor_return(_this, _is_native_reflect_construct() ? Reflect.construct(derived, args || [], _get_prototype_of(_this).constructor) : derived.apply(_this, args));
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
    try {
        var result = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
    } catch (_) {}
    return (_is_native_reflect_construct = function() {
        return !!result;
    })();
}
var _ReferenceSubstitution;
var _default = (0, _elements.define)((_ReferenceSubstitution = /*#__PURE__*/ function(Substitution) {
    _inherits(ReferenceSubstitution, Substitution);
    function ReferenceSubstitution(context, string, node, reference, metavariable) {
        _class_call_check(this, ReferenceSubstitution);
        var _this;
        _this = _call_super(this, ReferenceSubstitution, [
            context,
            string,
            node
        ]);
        _this.reference = reference;
        _this.metavariable = metavariable;
        return _this;
    }
    _create_class(ReferenceSubstitution, [
        {
            key: "getReference",
            value: function getReference() {
                return this.reference;
            }
        },
        {
            key: "getMetavariable",
            value: function getMetavariable() {
                return this.metavariable;
            }
        },
        {
            key: "isReferenceEqualToReference",
            value: function isReferenceEqualToReference(reference) {
                var referenceEqualToReference = this.reference.isEqualTo(reference);
                return referenceEqualToReference;
            }
        }
    ], [
        {
            key: "fromReferenceAndMetavariable",
            value: function fromReferenceAndMetavariable(reference, metavariable, context) {
                var string = stringFromReferenceAndMetavariable(reference, metavariable), referenceSubstitutionNode = (0, _instantiate.instantiateReferenceSubstitution)(string, context), referenceSubstitution = (0, _element.referenceSubstitutionFromReferenceSubstitutionNode)(referenceSubstitutionNode, context);
                return referenceSubstitution;
            }
        }
    ]);
    return ReferenceSubstitution;
}(_substitution.default), _define_property(_ReferenceSubstitution, "name", "ReferenceSubstitution"), _ReferenceSubstitution));
function stringFromReferenceAndMetavariable(reference, metavariable) {
    var referenceString = reference.getString(), metavariableString = metavariable.getString(), string = "[".concat(referenceString, " for ").concat(metavariableString, "]");
    return string;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9lbGVtZW50L3N1YnN0aXR1dGlvbi9yZWZlcmVuY2UuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBTdWJzdGl0dXRpb24gZnJvbSBcIi4uL3N1YnN0aXR1dGlvblwiO1xuXG5pbXBvcnQgeyBkZWZpbmUgfSBmcm9tIFwiLi4vLi4vZWxlbWVudHNcIjtcbmltcG9ydCB7IGluc3RhbnRpYXRlUmVmZXJlbmNlU3Vic3RpdHV0aW9uIH0gZnJvbSBcIi4uLy4uL3Byb2Nlc3MvaW5zdGFudGlhdGVcIjtcbmltcG9ydCB7IHJlZmVyZW5jZVN1YnN0aXR1dGlvbkZyb21SZWZlcmVuY2VTdWJzdGl0dXRpb25Ob2RlIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9lbGVtZW50XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZShjbGFzcyBSZWZlcmVuY2VTdWJzdGl0dXRpb24gZXh0ZW5kcyBTdWJzdGl0dXRpb24ge1xuICBjb25zdHJ1Y3Rvcihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIHJlZmVyZW5jZSwgbWV0YXZhcmlhYmxlKSB7XG4gICAgc3VwZXIoY29udGV4dCwgc3RyaW5nLCBub2RlKTtcblxuICAgIHRoaXMucmVmZXJlbmNlID0gcmVmZXJlbmNlO1xuICAgIHRoaXMubWV0YXZhcmlhYmxlID0gbWV0YXZhcmlhYmxlO1xuICB9XG5cbiAgZ2V0UmVmZXJlbmNlKCkge1xuICAgIHJldHVybiB0aGlzLnJlZmVyZW5jZTtcbiAgfVxuXG4gIGdldE1ldGF2YXJpYWJsZSgpIHtcbiAgICByZXR1cm4gdGhpcy5tZXRhdmFyaWFibGU7XG4gIH1cblxuICBpc1JlZmVyZW5jZUVxdWFsVG9SZWZlcmVuY2UocmVmZXJlbmNlKSB7XG4gICAgY29uc3QgcmVmZXJlbmNlRXF1YWxUb1JlZmVyZW5jZSA9IHRoaXMucmVmZXJlbmNlLmlzRXF1YWxUbyhyZWZlcmVuY2UpO1xuXG4gICAgcmV0dXJuIHJlZmVyZW5jZUVxdWFsVG9SZWZlcmVuY2U7XG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiUmVmZXJlbmNlU3Vic3RpdHV0aW9uXCI7XG5cbiAgc3RhdGljIGZyb21SZWZlcmVuY2VBbmRNZXRhdmFyaWFibGUocmVmZXJlbmNlLCBtZXRhdmFyaWFibGUsIGNvbnRleHQpIHtcbiAgICBjb25zdCBzdHJpbmcgPSBzdHJpbmdGcm9tUmVmZXJlbmNlQW5kTWV0YXZhcmlhYmxlKHJlZmVyZW5jZSwgbWV0YXZhcmlhYmxlKSxcbiAgICAgICAgICByZWZlcmVuY2VTdWJzdGl0dXRpb25Ob2RlID0gaW5zdGFudGlhdGVSZWZlcmVuY2VTdWJzdGl0dXRpb24oc3RyaW5nLCBjb250ZXh0KSxcbiAgICAgICAgICByZWZlcmVuY2VTdWJzdGl0dXRpb24gPSByZWZlcmVuY2VTdWJzdGl0dXRpb25Gcm9tUmVmZXJlbmNlU3Vic3RpdHV0aW9uTm9kZShyZWZlcmVuY2VTdWJzdGl0dXRpb25Ob2RlLCBjb250ZXh0KTtcblxuICAgIHJldHVybiByZWZlcmVuY2VTdWJzdGl0dXRpb247XG4gIH1cbn0pO1xuXG5mdW5jdGlvbiBzdHJpbmdGcm9tUmVmZXJlbmNlQW5kTWV0YXZhcmlhYmxlKHJlZmVyZW5jZSwgbWV0YXZhcmlhYmxlKSB7XG4gIGNvbnN0IHJlZmVyZW5jZVN0cmluZyA9IHJlZmVyZW5jZS5nZXRTdHJpbmcoKSxcbiAgICAgICAgbWV0YXZhcmlhYmxlU3RyaW5nID0gbWV0YXZhcmlhYmxlLmdldFN0cmluZygpLFxuICAgICAgICBzdHJpbmcgPSBgWyR7cmVmZXJlbmNlU3RyaW5nfSBmb3IgJHttZXRhdmFyaWFibGVTdHJpbmd9XWA7XG5cbiAgcmV0dXJuIHN0cmluZztcbn1cbiJdLCJuYW1lcyI6WyJkZWZpbmUiLCJSZWZlcmVuY2VTdWJzdGl0dXRpb24iLCJjb250ZXh0Iiwic3RyaW5nIiwibm9kZSIsInJlZmVyZW5jZSIsIm1ldGF2YXJpYWJsZSIsImdldFJlZmVyZW5jZSIsImdldE1ldGF2YXJpYWJsZSIsImlzUmVmZXJlbmNlRXF1YWxUb1JlZmVyZW5jZSIsInJlZmVyZW5jZUVxdWFsVG9SZWZlcmVuY2UiLCJpc0VxdWFsVG8iLCJmcm9tUmVmZXJlbmNlQW5kTWV0YXZhcmlhYmxlIiwic3RyaW5nRnJvbVJlZmVyZW5jZUFuZE1ldGF2YXJpYWJsZSIsInJlZmVyZW5jZVN1YnN0aXR1dGlvbk5vZGUiLCJpbnN0YW50aWF0ZVJlZmVyZW5jZVN1YnN0aXR1dGlvbiIsInJlZmVyZW5jZVN1YnN0aXR1dGlvbiIsInJlZmVyZW5jZVN1YnN0aXR1dGlvbkZyb21SZWZlcmVuY2VTdWJzdGl0dXRpb25Ob2RlIiwiU3Vic3RpdHV0aW9uIiwibmFtZSIsInJlZmVyZW5jZVN0cmluZyIsImdldFN0cmluZyIsIm1ldGF2YXJpYWJsZVN0cmluZyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBUUE7OztlQUFBOzs7bUVBTnlCO3dCQUVGOzJCQUMwQjt1QkFDa0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUVuRSxXQUFlQSxJQUFBQSxnQkFBTSwwQ0FBQzs7YUFBTUMsc0JBQ2RDLE9BQU8sRUFBRUMsTUFBTSxFQUFFQyxJQUFJLEVBQUVDLFNBQVMsRUFBRUMsWUFBWTtnQ0FEaENMOztnQkFFeEIsa0JBRndCQTtZQUVsQkM7WUFBU0M7WUFBUUM7O1FBRXZCLE1BQUtDLFNBQVMsR0FBR0E7UUFDakIsTUFBS0MsWUFBWSxHQUFHQTs7Ozs7WUFHdEJDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0YsU0FBUztZQUN2Qjs7O1lBRUFHLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0YsWUFBWTtZQUMxQjs7O1lBRUFHLEtBQUFBO21CQUFBQSxTQUFBQSw0QkFBNEJKLFNBQVM7Z0JBQ25DLElBQU1LLDRCQUE0QixJQUFJLENBQUNMLFNBQVMsQ0FBQ00sU0FBUyxDQUFDTjtnQkFFM0QsT0FBT0s7WUFDVDs7OztZQUlPRSxLQUFBQTttQkFBUCxTQUFPQSw2QkFBNkJQLFNBQVMsRUFBRUMsWUFBWSxFQUFFSixPQUFPO2dCQUNsRSxJQUFNQyxTQUFTVSxtQ0FBbUNSLFdBQVdDLGVBQ3ZEUSw0QkFBNEJDLElBQUFBLDZDQUFnQyxFQUFDWixRQUFRRCxVQUNyRWMsd0JBQXdCQyxJQUFBQSwyREFBa0QsRUFBQ0gsMkJBQTJCWjtnQkFFNUcsT0FBT2M7WUFDVDs7OztFQTlCd0RFLHFCQUFZLEdBc0JwRSx5Q0FBT0MsUUFBTztBQVdoQixTQUFTTixtQ0FBbUNSLFNBQVMsRUFBRUMsWUFBWTtJQUNqRSxJQUFNYyxrQkFBa0JmLFVBQVVnQixTQUFTLElBQ3JDQyxxQkFBcUJoQixhQUFhZSxTQUFTLElBQzNDbEIsU0FBUyxBQUFDLElBQTBCbUIsT0FBdkJGLGlCQUFnQixTQUEwQixPQUFuQkUsb0JBQW1CO0lBRTdELE9BQU9uQjtBQUNUIn0=