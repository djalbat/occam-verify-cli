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
var _shim = /*#__PURE__*/ _interop_require_default(require("../shim"));
var _verifier = /*#__PURE__*/ _interop_require_default(require("../verifier"));
var _query = require("../utilities/query");
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
var termNodeQuery = (0, _query.nodeQuery)("/term!"), statementNodeQuery = (0, _query.nodeQuery)("/statement!");
var MetaLevelVerifier = /*#__PURE__*/ function(Verifier) {
    _inherits(MetaLevelVerifier, Verifier);
    function MetaLevelVerifier() {
        _class_call_check(this, MetaLevelVerifier);
        return _call_super(this, MetaLevelVerifier, arguments);
    }
    _create_class(MetaLevelVerifier, [
        {
            key: "verifyStatement",
            value: function verifyStatement(statementNode, assignments, derived, localContext) {
                var verified;
                var nonTerminalNode = statementNode, childNodes = nonTerminalNode.getChildNodes(), nonTerminalNodeVerified = this.verifyChildNodes(childNodes, assignments, derived, localContext);
                verified = nonTerminalNodeVerified; ///
                return verified;
            }
        }
    ]);
    return MetaLevelVerifier;
}(_verifier.default);
_define_property(MetaLevelVerifier, "maps", [
    {
        nodeQuery: statementNodeQuery,
        verify: function(statementNode, assignments, derived, localContext) {
            var verifyStatement = _shim.default.verifyStatement, statementVerified = verifyStatement(statementNode, assignments, derived, localContext);
            return statementVerified;
        }
    },
    {
        nodeQuery: termNodeQuery,
        verify: function(termNode, assignments, derived, localContext) {
            var verifyTerm = _shim.default.verifyTerm, terms = [], termVerified = verifyTerm(termNode, terms, localContext, function() {
                var verifiedAhead = true;
                return verifiedAhead;
            });
            return termVerified;
        }
    }
]);
var metaLevelVerifier = new MetaLevelVerifier();
var _default = metaLevelVerifier;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92ZXJpZmllci9tZXRhTGV2ZWwuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBzaGltIGZyb20gXCIuLi9zaGltXCI7XG5pbXBvcnQgVmVyaWZpZXIgZnJvbSBcIi4uL3ZlcmlmaWVyXCI7XG5cbmltcG9ydCB7IG5vZGVRdWVyeSB9IGZyb20gXCIuLi91dGlsaXRpZXMvcXVlcnlcIjtcblxuY29uc3QgdGVybU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi90ZXJtIVwiKSxcbiAgICAgIHN0YXRlbWVudE5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9zdGF0ZW1lbnQhXCIpO1xuXG5jbGFzcyBNZXRhTGV2ZWxWZXJpZmllciBleHRlbmRzIFZlcmlmaWVyIHtcbiAgdmVyaWZ5U3RhdGVtZW50KHN0YXRlbWVudE5vZGUsIGFzc2lnbm1lbnRzLCBkZXJpdmVkLCBsb2NhbENvbnRleHQpIHtcbiAgICBsZXQgdmVyaWZpZWQ7XG5cbiAgICBjb25zdCBub25UZXJtaW5hbE5vZGUgPSBzdGF0ZW1lbnROb2RlLCAvLy9cbiAgICAgICAgICBjaGlsZE5vZGVzID0gbm9uVGVybWluYWxOb2RlLmdldENoaWxkTm9kZXMoKSxcbiAgICAgICAgICBub25UZXJtaW5hbE5vZGVWZXJpZmllZCA9IHRoaXMudmVyaWZ5Q2hpbGROb2RlcyhjaGlsZE5vZGVzLCBhc3NpZ25tZW50cywgZGVyaXZlZCwgbG9jYWxDb250ZXh0KTtcblxuICAgIHZlcmlmaWVkID0gbm9uVGVybWluYWxOb2RlVmVyaWZpZWQ7ICAvLy9cblxuICAgIHJldHVybiB2ZXJpZmllZDtcbiAgfVxuXG4gIHN0YXRpYyBtYXBzID0gW1xuICAgIHtcbiAgICAgIG5vZGVRdWVyeTogc3RhdGVtZW50Tm9kZVF1ZXJ5LFxuICAgICAgdmVyaWZ5OiAoc3RhdGVtZW50Tm9kZSwgYXNzaWdubWVudHMsIGRlcml2ZWQsIGxvY2FsQ29udGV4dCkgPT4ge1xuICAgICAgICBjb25zdCB7IHZlcmlmeVN0YXRlbWVudCB9ID0gc2hpbSxcbiAgICAgICAgICAgICAgc3RhdGVtZW50VmVyaWZpZWQgPSB2ZXJpZnlTdGF0ZW1lbnQoc3RhdGVtZW50Tm9kZSwgYXNzaWdubWVudHMsIGRlcml2ZWQsIGxvY2FsQ29udGV4dCk7XG5cbiAgICAgICAgcmV0dXJuIHN0YXRlbWVudFZlcmlmaWVkO1xuICAgICAgfVxuICAgIH0sXG4gICAge1xuICAgICAgbm9kZVF1ZXJ5OiB0ZXJtTm9kZVF1ZXJ5LFxuICAgICAgdmVyaWZ5OiAodGVybU5vZGUsIGFzc2lnbm1lbnRzLCBkZXJpdmVkLCBsb2NhbENvbnRleHQpID0+IHtcbiAgICAgICAgY29uc3QgeyB2ZXJpZnlUZXJtIH0gPSBzaGltLFxuICAgICAgICAgICAgICB0ZXJtcyA9IFtdLFxuICAgICAgICAgICAgICB0ZXJtVmVyaWZpZWQgPSB2ZXJpZnlUZXJtKHRlcm1Ob2RlLCB0ZXJtcywgbG9jYWxDb250ZXh0LCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgdmVyaWZpZWRBaGVhZCA9IHRydWU7XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gdmVyaWZpZWRBaGVhZDtcbiAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIHRlcm1WZXJpZmllZDtcbiAgICAgIH1cbiAgICB9XG4gIF07XG59XG5cbmNvbnN0IG1ldGFMZXZlbFZlcmlmaWVyID0gbmV3IE1ldGFMZXZlbFZlcmlmaWVyKCk7XG5cbmV4cG9ydCBkZWZhdWx0IG1ldGFMZXZlbFZlcmlmaWVyO1xuIl0sIm5hbWVzIjpbInRlcm1Ob2RlUXVlcnkiLCJub2RlUXVlcnkiLCJzdGF0ZW1lbnROb2RlUXVlcnkiLCJNZXRhTGV2ZWxWZXJpZmllciIsInZlcmlmeVN0YXRlbWVudCIsInN0YXRlbWVudE5vZGUiLCJhc3NpZ25tZW50cyIsImRlcml2ZWQiLCJsb2NhbENvbnRleHQiLCJ2ZXJpZmllZCIsIm5vblRlcm1pbmFsTm9kZSIsImNoaWxkTm9kZXMiLCJnZXRDaGlsZE5vZGVzIiwibm9uVGVybWluYWxOb2RlVmVyaWZpZWQiLCJ2ZXJpZnlDaGlsZE5vZGVzIiwiVmVyaWZpZXIiLCJtYXBzIiwidmVyaWZ5Iiwic2hpbSIsInN0YXRlbWVudFZlcmlmaWVkIiwidGVybU5vZGUiLCJ2ZXJpZnlUZXJtIiwidGVybXMiLCJ0ZXJtVmVyaWZpZWQiLCJ2ZXJpZmllZEFoZWFkIiwibWV0YUxldmVsVmVyaWZpZXIiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQW9EQTs7O2VBQUE7OzsyREFsRGlCOytEQUNJO3FCQUVLOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUUxQixJQUFNQSxnQkFBZ0JDLElBQUFBLGdCQUFTLEVBQUMsV0FDMUJDLHFCQUFxQkQsSUFBQUEsZ0JBQVMsRUFBQztBQUVyQyxJQUFBLEFBQU1FLGtDQUFOO2NBQU1BO2FBQUFBO2dDQUFBQTtpQ0FBQUE7O2tCQUFBQTs7WUFDSkMsS0FBQUE7bUJBQUFBLFNBQUFBLGdCQUFnQkMsYUFBYSxFQUFFQyxXQUFXLEVBQUVDLE9BQU8sRUFBRUMsWUFBWTtnQkFDL0QsSUFBSUM7Z0JBRUosSUFBTUMsa0JBQWtCTCxlQUNsQk0sYUFBYUQsZ0JBQWdCRSxhQUFhLElBQzFDQywwQkFBMEIsSUFBSSxDQUFDQyxnQkFBZ0IsQ0FBQ0gsWUFBWUwsYUFBYUMsU0FBU0M7Z0JBRXhGQyxXQUFXSSx5QkFBMEIsR0FBRztnQkFFeEMsT0FBT0o7WUFDVDs7O1dBWElOO0VBQTBCWSxpQkFBUTtBQWF0QyxpQkFiSVosbUJBYUdhLFFBQU87SUFDWjtRQUNFZixXQUFXQztRQUNYZSxRQUFRLFNBQUNaLGVBQWVDLGFBQWFDLFNBQVNDO1lBQzVDLElBQU0sQUFBRUosa0JBQW9CYyxhQUFJLENBQXhCZCxpQkFDRmUsb0JBQW9CZixnQkFBZ0JDLGVBQWVDLGFBQWFDLFNBQVNDO1lBRS9FLE9BQU9XO1FBQ1Q7SUFDRjtJQUNBO1FBQ0VsQixXQUFXRDtRQUNYaUIsUUFBUSxTQUFDRyxVQUFVZCxhQUFhQyxTQUFTQztZQUN2QyxJQUFNLEFBQUVhLGFBQWVILGFBQUksQ0FBbkJHLFlBQ0ZDLFFBQVEsRUFBRSxFQUNWQyxlQUFlRixXQUFXRCxVQUFVRSxPQUFPZCxjQUFjO2dCQUN2RCxJQUFNZ0IsZ0JBQWdCO2dCQUV0QixPQUFPQTtZQUNUO1lBRU4sT0FBT0Q7UUFDVDtJQUNGO0NBQ0Q7QUFHSCxJQUFNRSxvQkFBb0IsSUFBSXRCO0lBRTlCLFdBQWVzQiJ9