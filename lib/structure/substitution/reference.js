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
var _reference = /*#__PURE__*/ _interop_require_default(require("../../context/partial/substitution/reference"));
var _structure = require("../../structure");
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
var _default = (0, _structure.define)((_ReferenceSubstitution = /*#__PURE__*/ function(Substitution) {
    _inherits(ReferenceSubstitution, Substitution);
    function ReferenceSubstitution(context, string, node, tokens, reference, metavariable) {
        _class_call_check(this, ReferenceSubstitution);
        var _this;
        _this = _call_super(this, ReferenceSubstitution, [
            context,
            string,
            node,
            tokens
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
                var string = stringFromReferenceAndMetavariable(reference, metavariable), lexer = context.getLexer(), parser = context.getParser(), referenceSubstitutionPartialContext = _reference.default.fromStringLexerAndParser(string, lexer, parser), node = referenceSubstitutionPartialContext.getNode(), tokens = referenceSubstitutionPartialContext.getTokens(), referenceSubstitution = new ReferenceSubstitution(context, string, node, tokens, reference, metavariable);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9zdHJ1Y3R1cmUvc3Vic3RpdHV0aW9uL3JlZmVyZW5jZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFN1YnN0aXR1dGlvbiBmcm9tIFwiLi4vc3Vic3RpdHV0aW9uXCI7XG5pbXBvcnQgUmVmZXJlbmNlU3Vic3RpdHV0aW9uUGFydGlhbENvbnRleHQgZnJvbSBcIi4uLy4uL2NvbnRleHQvcGFydGlhbC9zdWJzdGl0dXRpb24vcmVmZXJlbmNlXCI7XG5cbmltcG9ydCB7IGRlZmluZSB9IGZyb20gXCIuLi8uLi9zdHJ1Y3R1cmVcIjtcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lKGNsYXNzIFJlZmVyZW5jZVN1YnN0aXR1dGlvbiBleHRlbmRzIFN1YnN0aXR1dGlvbiB7XG4gIGNvbnN0cnVjdG9yKGNvbnRleHQsIHN0cmluZywgbm9kZSwgdG9rZW5zLCByZWZlcmVuY2UsIG1ldGF2YXJpYWJsZSkge1xuICAgIHN1cGVyKGNvbnRleHQsIHN0cmluZywgbm9kZSwgdG9rZW5zKTtcblxuICAgIHRoaXMucmVmZXJlbmNlID0gcmVmZXJlbmNlO1xuICAgIHRoaXMubWV0YXZhcmlhYmxlID0gbWV0YXZhcmlhYmxlO1xuICB9XG5cbiAgZ2V0UmVmZXJlbmNlKCkge1xuICAgIHJldHVybiB0aGlzLnJlZmVyZW5jZTtcbiAgfVxuXG4gIGdldE1ldGF2YXJpYWJsZSgpIHtcbiAgICByZXR1cm4gdGhpcy5tZXRhdmFyaWFibGU7XG4gIH1cblxuICBpc1JlZmVyZW5jZUVxdWFsVG9SZWZlcmVuY2UocmVmZXJlbmNlKSB7XG4gICAgY29uc3QgcmVmZXJlbmNlRXF1YWxUb1JlZmVyZW5jZSA9IHRoaXMucmVmZXJlbmNlLmlzRXF1YWxUbyhyZWZlcmVuY2UpO1xuXG4gICAgcmV0dXJuIHJlZmVyZW5jZUVxdWFsVG9SZWZlcmVuY2U7XG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiUmVmZXJlbmNlU3Vic3RpdHV0aW9uXCI7XG5cbiAgc3RhdGljIGZyb21SZWZlcmVuY2VBbmRNZXRhdmFyaWFibGUocmVmZXJlbmNlLCBtZXRhdmFyaWFibGUsIGNvbnRleHQpIHtcbiAgICBjb25zdCBzdHJpbmcgPSBzdHJpbmdGcm9tUmVmZXJlbmNlQW5kTWV0YXZhcmlhYmxlKHJlZmVyZW5jZSwgbWV0YXZhcmlhYmxlKSxcbiAgICAgICAgICBsZXhlciA9IGNvbnRleHQuZ2V0TGV4ZXIoKSxcbiAgICAgICAgICBwYXJzZXIgPSBjb250ZXh0LmdldFBhcnNlcigpLFxuICAgICAgICAgIHJlZmVyZW5jZVN1YnN0aXR1dGlvblBhcnRpYWxDb250ZXh0ID0gUmVmZXJlbmNlU3Vic3RpdHV0aW9uUGFydGlhbENvbnRleHQuZnJvbVN0cmluZ0xleGVyQW5kUGFyc2VyKHN0cmluZywgbGV4ZXIsIHBhcnNlciksXG4gICAgICAgICAgbm9kZSA9IHJlZmVyZW5jZVN1YnN0aXR1dGlvblBhcnRpYWxDb250ZXh0LmdldE5vZGUoKSxcbiAgICAgICAgICB0b2tlbnMgPSByZWZlcmVuY2VTdWJzdGl0dXRpb25QYXJ0aWFsQ29udGV4dC5nZXRUb2tlbnMoKSxcbiAgICAgICAgICByZWZlcmVuY2VTdWJzdGl0dXRpb24gPSBuZXcgUmVmZXJlbmNlU3Vic3RpdHV0aW9uKGNvbnRleHQsIHN0cmluZywgbm9kZSwgdG9rZW5zLCByZWZlcmVuY2UsIG1ldGF2YXJpYWJsZSk7XG5cbiAgICByZXR1cm4gcmVmZXJlbmNlU3Vic3RpdHV0aW9uO1xuICB9XG59KTtcblxuZnVuY3Rpb24gc3RyaW5nRnJvbVJlZmVyZW5jZUFuZE1ldGF2YXJpYWJsZShyZWZlcmVuY2UsIG1ldGF2YXJpYWJsZSkge1xuICBjb25zdCByZWZlcmVuY2VTdHJpbmcgPSByZWZlcmVuY2UuZ2V0U3RyaW5nKCksXG4gICAgICAgIG1ldGF2YXJpYWJsZVN0cmluZyA9IG1ldGF2YXJpYWJsZS5nZXRTdHJpbmcoKSxcbiAgICAgICAgc3RyaW5nID0gYFske3JlZmVyZW5jZVN0cmluZ30gZm9yICR7bWV0YXZhcmlhYmxlU3RyaW5nfV1gO1xuXG4gIHJldHVybiBzdHJpbmc7XG59XG4iXSwibmFtZXMiOlsiZGVmaW5lIiwiUmVmZXJlbmNlU3Vic3RpdHV0aW9uIiwiY29udGV4dCIsInN0cmluZyIsIm5vZGUiLCJ0b2tlbnMiLCJyZWZlcmVuY2UiLCJtZXRhdmFyaWFibGUiLCJnZXRSZWZlcmVuY2UiLCJnZXRNZXRhdmFyaWFibGUiLCJpc1JlZmVyZW5jZUVxdWFsVG9SZWZlcmVuY2UiLCJyZWZlcmVuY2VFcXVhbFRvUmVmZXJlbmNlIiwiaXNFcXVhbFRvIiwiZnJvbVJlZmVyZW5jZUFuZE1ldGF2YXJpYWJsZSIsInN0cmluZ0Zyb21SZWZlcmVuY2VBbmRNZXRhdmFyaWFibGUiLCJsZXhlciIsImdldExleGVyIiwicGFyc2VyIiwiZ2V0UGFyc2VyIiwicmVmZXJlbmNlU3Vic3RpdHV0aW9uUGFydGlhbENvbnRleHQiLCJSZWZlcmVuY2VTdWJzdGl0dXRpb25QYXJ0aWFsQ29udGV4dCIsImZyb21TdHJpbmdMZXhlckFuZFBhcnNlciIsImdldE5vZGUiLCJnZXRUb2tlbnMiLCJyZWZlcmVuY2VTdWJzdGl0dXRpb24iLCJTdWJzdGl0dXRpb24iLCJuYW1lIiwicmVmZXJlbmNlU3RyaW5nIiwiZ2V0U3RyaW5nIiwibWV0YXZhcmlhYmxlU3RyaW5nIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFPQTs7O2VBQUE7OzttRUFMeUI7Z0VBQ3VCO3lCQUV6Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRXZCLFdBQWVBLElBQUFBLGlCQUFNLDBDQUFDOzthQUFNQyxzQkFDZEMsT0FBTyxFQUFFQyxNQUFNLEVBQUVDLElBQUksRUFBRUMsTUFBTSxFQUFFQyxTQUFTLEVBQUVDLFlBQVk7Z0NBRHhDTjs7Z0JBRXhCLGtCQUZ3QkE7WUFFbEJDO1lBQVNDO1lBQVFDO1lBQU1DOztRQUU3QixNQUFLQyxTQUFTLEdBQUdBO1FBQ2pCLE1BQUtDLFlBQVksR0FBR0E7Ozs7O1lBR3RCQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNGLFNBQVM7WUFDdkI7OztZQUVBRyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNGLFlBQVk7WUFDMUI7OztZQUVBRyxLQUFBQTttQkFBQUEsU0FBQUEsNEJBQTRCSixTQUFTO2dCQUNuQyxJQUFNSyw0QkFBNEIsSUFBSSxDQUFDTCxTQUFTLENBQUNNLFNBQVMsQ0FBQ047Z0JBRTNELE9BQU9LO1lBQ1Q7Ozs7WUFJT0UsS0FBQUE7bUJBQVAsU0FBT0EsNkJBQTZCUCxTQUFTLEVBQUVDLFlBQVksRUFBRUwsT0FBTztnQkFDbEUsSUFBTUMsU0FBU1csbUNBQW1DUixXQUFXQyxlQUN2RFEsUUFBUWIsUUFBUWMsUUFBUSxJQUN4QkMsU0FBU2YsUUFBUWdCLFNBQVMsSUFDMUJDLHNDQUFzQ0Msa0JBQW1DLENBQUNDLHdCQUF3QixDQUFDbEIsUUFBUVksT0FBT0UsU0FDbEhiLE9BQU9lLG9DQUFvQ0csT0FBTyxJQUNsRGpCLFNBQVNjLG9DQUFvQ0ksU0FBUyxJQUN0REMsd0JBQXdCLElBQUl2QixzQkFBc0JDLFNBQVNDLFFBQVFDLE1BQU1DLFFBQVFDLFdBQVdDO2dCQUVsRyxPQUFPaUI7WUFDVDs7OztFQWxDd0RDLHFCQUFZLEdBc0JwRSx5Q0FBT0MsUUFBTztBQWVoQixTQUFTWixtQ0FBbUNSLFNBQVMsRUFBRUMsWUFBWTtJQUNqRSxJQUFNb0Isa0JBQWtCckIsVUFBVXNCLFNBQVMsSUFDckNDLHFCQUFxQnRCLGFBQWFxQixTQUFTLElBQzNDekIsU0FBUyxBQUFDLElBQTBCMEIsT0FBdkJGLGlCQUFnQixTQUEwQixPQUFuQkUsb0JBQW1CO0lBRTdELE9BQU8xQjtBQUNUIn0=