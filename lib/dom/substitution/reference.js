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
var _dom = require("../../dom");
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
var _default = (0, _dom.domAssigned)(/*#__PURE__*/ function(Substitution) {
    _inherits(ReferenceSubstitution, Substitution);
    function ReferenceSubstitution(string, node, tokens, reference, metavariable) {
        _class_call_check(this, ReferenceSubstitution);
        var _this;
        _this = _call_super(this, ReferenceSubstitution, [
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
            key: "isReferenceEqualTo",
            value: function isReferenceEqualTo(reference) {
                var referenceEqualTo = this.reference.isEqualTo(reference);
                return referenceEqualTo;
            }
        }
    ], [
        {
            key: "fromReferenceAndMetavariable",
            value: function fromReferenceAndMetavariable(reference, metavariable, context) {
                var string = stringFromReferenceAndMetavariable(reference, metavariable), lexer = context.getLexer(), parser = context.getParser(), referenceSubstitutionPartialContext = _reference.default.fromStringLexerAndParser(string, lexer, parser), node = referenceSubstitutionPartialContext.getNode(), tokens = referenceSubstitutionPartialContext.getTokens(), referenceSubstitution = new ReferenceSubstitution(string, node, tokens, reference, metavariable);
                return referenceSubstitution;
            }
        }
    ]);
    return ReferenceSubstitution;
}(_substitution.default));
function stringFromReferenceAndMetavariable(reference, metavariable) {
    var referenceString = reference.getString(), metavariableString = metavariable.getString(), string = "[".concat(referenceString, " for ").concat(metavariableString, "]");
    return string;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9kb20vc3Vic3RpdHV0aW9uL3JlZmVyZW5jZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFN1YnN0aXR1dGlvbiBmcm9tIFwiLi4vc3Vic3RpdHV0aW9uXCI7XG5pbXBvcnQgUmVmZXJlbmNlU3Vic3RpdHV0aW9uUGFydGlhbENvbnRleHQgZnJvbSBcIi4uLy4uL2NvbnRleHQvcGFydGlhbC9zdWJzdGl0dXRpb24vcmVmZXJlbmNlXCI7XG5cbmltcG9ydCB7IGRvbUFzc2lnbmVkIH0gZnJvbSBcIi4uLy4uL2RvbVwiO1xuXG5leHBvcnQgZGVmYXVsdCBkb21Bc3NpZ25lZChjbGFzcyBSZWZlcmVuY2VTdWJzdGl0dXRpb24gZXh0ZW5kcyBTdWJzdGl0dXRpb24ge1xuICBjb25zdHJ1Y3RvcihzdHJpbmcsIG5vZGUsIHRva2VucywgcmVmZXJlbmNlLCBtZXRhdmFyaWFibGUpIHtcbiAgICBzdXBlcihzdHJpbmcsIG5vZGUsIHRva2Vucyk7XG5cbiAgICB0aGlzLnJlZmVyZW5jZSA9IHJlZmVyZW5jZTtcbiAgICB0aGlzLm1ldGF2YXJpYWJsZSA9IG1ldGF2YXJpYWJsZTtcbiAgfVxuXG4gIGdldFJlZmVyZW5jZSgpIHtcbiAgICByZXR1cm4gdGhpcy5yZWZlcmVuY2U7XG4gIH1cblxuICBnZXRNZXRhdmFyaWFibGUoKSB7XG4gICAgcmV0dXJuIHRoaXMubWV0YXZhcmlhYmxlO1xuICB9XG5cbiAgaXNSZWZlcmVuY2VFcXVhbFRvKHJlZmVyZW5jZSkge1xuICAgIGNvbnN0IHJlZmVyZW5jZUVxdWFsVG8gPSB0aGlzLnJlZmVyZW5jZS5pc0VxdWFsVG8ocmVmZXJlbmNlKTtcblxuICAgIHJldHVybiByZWZlcmVuY2VFcXVhbFRvO1xuICB9XG5cbiAgc3RhdGljIGZyb21SZWZlcmVuY2VBbmRNZXRhdmFyaWFibGUocmVmZXJlbmNlLCBtZXRhdmFyaWFibGUsIGNvbnRleHQpIHtcbiAgICBjb25zdCBzdHJpbmcgPSBzdHJpbmdGcm9tUmVmZXJlbmNlQW5kTWV0YXZhcmlhYmxlKHJlZmVyZW5jZSwgbWV0YXZhcmlhYmxlKSxcbiAgICAgICAgICBsZXhlciA9IGNvbnRleHQuZ2V0TGV4ZXIoKSxcbiAgICAgICAgICBwYXJzZXIgPSBjb250ZXh0LmdldFBhcnNlcigpLFxuICAgICAgICAgIHJlZmVyZW5jZVN1YnN0aXR1dGlvblBhcnRpYWxDb250ZXh0ID0gUmVmZXJlbmNlU3Vic3RpdHV0aW9uUGFydGlhbENvbnRleHQuZnJvbVN0cmluZ0xleGVyQW5kUGFyc2VyKHN0cmluZywgbGV4ZXIsIHBhcnNlciksXG4gICAgICAgICAgbm9kZSA9IHJlZmVyZW5jZVN1YnN0aXR1dGlvblBhcnRpYWxDb250ZXh0LmdldE5vZGUoKSxcbiAgICAgICAgICB0b2tlbnMgPSByZWZlcmVuY2VTdWJzdGl0dXRpb25QYXJ0aWFsQ29udGV4dC5nZXRUb2tlbnMoKSxcbiAgICAgICAgICByZWZlcmVuY2VTdWJzdGl0dXRpb24gPSBuZXcgUmVmZXJlbmNlU3Vic3RpdHV0aW9uKHN0cmluZywgbm9kZSwgdG9rZW5zLCByZWZlcmVuY2UsIG1ldGF2YXJpYWJsZSk7XG5cbiAgICByZXR1cm4gcmVmZXJlbmNlU3Vic3RpdHV0aW9uO1xuICB9XG59KTtcblxuZnVuY3Rpb24gc3RyaW5nRnJvbVJlZmVyZW5jZUFuZE1ldGF2YXJpYWJsZShyZWZlcmVuY2UsIG1ldGF2YXJpYWJsZSkge1xuICBjb25zdCByZWZlcmVuY2VTdHJpbmcgPSByZWZlcmVuY2UuZ2V0U3RyaW5nKCksXG4gICAgICAgIG1ldGF2YXJpYWJsZVN0cmluZyA9IG1ldGF2YXJpYWJsZS5nZXRTdHJpbmcoKSxcbiAgICAgICAgc3RyaW5nID0gYFske3JlZmVyZW5jZVN0cmluZ30gZm9yICR7bWV0YXZhcmlhYmxlU3RyaW5nfV1gO1xuXG4gIHJldHVybiBzdHJpbmc7XG59XG4iXSwibmFtZXMiOlsiZG9tQXNzaWduZWQiLCJSZWZlcmVuY2VTdWJzdGl0dXRpb24iLCJzdHJpbmciLCJub2RlIiwidG9rZW5zIiwicmVmZXJlbmNlIiwibWV0YXZhcmlhYmxlIiwiZ2V0UmVmZXJlbmNlIiwiZ2V0TWV0YXZhcmlhYmxlIiwiaXNSZWZlcmVuY2VFcXVhbFRvIiwicmVmZXJlbmNlRXF1YWxUbyIsImlzRXF1YWxUbyIsImZyb21SZWZlcmVuY2VBbmRNZXRhdmFyaWFibGUiLCJjb250ZXh0Iiwic3RyaW5nRnJvbVJlZmVyZW5jZUFuZE1ldGF2YXJpYWJsZSIsImxleGVyIiwiZ2V0TGV4ZXIiLCJwYXJzZXIiLCJnZXRQYXJzZXIiLCJyZWZlcmVuY2VTdWJzdGl0dXRpb25QYXJ0aWFsQ29udGV4dCIsIlJlZmVyZW5jZVN1YnN0aXR1dGlvblBhcnRpYWxDb250ZXh0IiwiZnJvbVN0cmluZ0xleGVyQW5kUGFyc2VyIiwiZ2V0Tm9kZSIsImdldFRva2VucyIsInJlZmVyZW5jZVN1YnN0aXR1dGlvbiIsIlN1YnN0aXR1dGlvbiIsInJlZmVyZW5jZVN0cmluZyIsImdldFN0cmluZyIsIm1ldGF2YXJpYWJsZVN0cmluZyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBT0E7OztlQUFBOzs7bUVBTHlCO2dFQUN1QjttQkFFcEI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFNUIsV0FBZUEsSUFBQUEsZ0JBQVcsZ0JBQUM7O2FBQU1DLHNCQUNuQkMsTUFBTSxFQUFFQyxJQUFJLEVBQUVDLE1BQU0sRUFBRUMsU0FBUyxFQUFFQyxZQUFZO2dDQUQxQkw7O2dCQUU3QixrQkFGNkJBO1lBRXZCQztZQUFRQztZQUFNQzs7UUFFcEIsTUFBS0MsU0FBUyxHQUFHQTtRQUNqQixNQUFLQyxZQUFZLEdBQUdBOzs7OztZQUd0QkMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDRixTQUFTO1lBQ3ZCOzs7WUFFQUcsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDRixZQUFZO1lBQzFCOzs7WUFFQUcsS0FBQUE7bUJBQUFBLFNBQUFBLG1CQUFtQkosU0FBUztnQkFDMUIsSUFBTUssbUJBQW1CLElBQUksQ0FBQ0wsU0FBUyxDQUFDTSxTQUFTLENBQUNOO2dCQUVsRCxPQUFPSztZQUNUOzs7O1lBRU9FLEtBQUFBO21CQUFQLFNBQU9BLDZCQUE2QlAsU0FBUyxFQUFFQyxZQUFZLEVBQUVPLE9BQU87Z0JBQ2xFLElBQU1YLFNBQVNZLG1DQUFtQ1QsV0FBV0MsZUFDdkRTLFFBQVFGLFFBQVFHLFFBQVEsSUFDeEJDLFNBQVNKLFFBQVFLLFNBQVMsSUFDMUJDLHNDQUFzQ0Msa0JBQW1DLENBQUNDLHdCQUF3QixDQUFDbkIsUUFBUWEsT0FBT0UsU0FDbEhkLE9BQU9nQixvQ0FBb0NHLE9BQU8sSUFDbERsQixTQUFTZSxvQ0FBb0NJLFNBQVMsSUFDdERDLHdCQUF3QixJQUFJdkIsc0JBQXNCQyxRQUFRQyxNQUFNQyxRQUFRQyxXQUFXQztnQkFFekYsT0FBT2tCO1lBQ1Q7Ozs7RUFoQzZEQyxxQkFBWTtBQW1DM0UsU0FBU1gsbUNBQW1DVCxTQUFTLEVBQUVDLFlBQVk7SUFDakUsSUFBTW9CLGtCQUFrQnJCLFVBQVVzQixTQUFTLElBQ3JDQyxxQkFBcUJ0QixhQUFhcUIsU0FBUyxJQUMzQ3pCLFNBQVMsQUFBQyxJQUEwQjBCLE9BQXZCRixpQkFBZ0IsU0FBMEIsT0FBbkJFLG9CQUFtQjtJQUU3RCxPQUFPMUI7QUFDVCJ9