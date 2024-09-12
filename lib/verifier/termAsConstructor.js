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
var _type = /*#__PURE__*/ _interop_require_default(require("../verify/type"));
var _local = /*#__PURE__*/ _interop_require_default(require("../context/local"));
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
var termNodeQuery = (0, _query.nodeQuery)("/term!"), typeNodeQuery = (0, _query.nodeQuery)("/type!");
var TermAsConstructorVerifier = /*#__PURE__*/ function(Verifier) {
    _inherits(TermAsConstructorVerifier, Verifier);
    function TermAsConstructorVerifier() {
        _class_call_check(this, TermAsConstructorVerifier);
        return _call_super(this, TermAsConstructorVerifier, arguments);
    }
    _create_class(TermAsConstructorVerifier, [
        {
            key: "verifyTerm",
            value: function verifyTerm(termNode, fileContext) {
                var termVerifiedAsConstructor;
                var nonTerminalNode = termNode, childNodes = nonTerminalNode.getChildNodes(), childNodesVerified = this.verifyChildNodes(childNodes, fileContext, function() {
                    var verifiedAhead = true;
                    return verifiedAhead;
                });
                termVerifiedAsConstructor = childNodesVerified; ///
                return termVerifiedAsConstructor;
            }
        }
    ]);
    return TermAsConstructorVerifier;
}(_verifier.default);
_define_property(TermAsConstructorVerifier, "maps", [
    {
        nodeQuery: termNodeQuery,
        verify: function(termNode, fileContext, verifyAhead) {
            var verifyTerm = _shim.default.verifyTerm, terms = [], localContext = _local.default.fromFileContext(fileContext), termVerified = verifyTerm(termNode, terms, localContext, verifyAhead);
            return termVerified;
        }
    },
    {
        nodeQuery: typeNodeQuery,
        verify: function(typeNode, fileContext, verifyAhead) {
            var localContext = _local.default.fromFileContext(fileContext), typeVerified = (0, _type.default)(typeNode, localContext, verifyAhead);
            return typeVerified;
        }
    }
]);
var termAsConstructorVerifier = new TermAsConstructorVerifier();
var _default = termAsConstructorVerifier;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92ZXJpZmllci90ZXJtQXNDb25zdHJ1Y3Rvci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHNoaW0gZnJvbSBcIi4uL3NoaW1cIjtcbmltcG9ydCBWZXJpZmllciBmcm9tIFwiLi4vdmVyaWZpZXJcIjtcbmltcG9ydCB2ZXJpZnlUeXBlIGZyb20gXCIuLi92ZXJpZnkvdHlwZVwiO1xuaW1wb3J0IExvY2FsQ29udGV4dCBmcm9tIFwiLi4vY29udGV4dC9sb2NhbFwiO1xuXG5pbXBvcnQgeyBub2RlUXVlcnkgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5cbmNvbnN0IHRlcm1Ob2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvdGVybSFcIiksXG4gICAgICB0eXBlTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3R5cGUhXCIpO1xuXG5jbGFzcyBUZXJtQXNDb25zdHJ1Y3RvclZlcmlmaWVyIGV4dGVuZHMgVmVyaWZpZXIge1xuICB2ZXJpZnlUZXJtKHRlcm1Ob2RlLCBmaWxlQ29udGV4dCkge1xuICAgIGxldCB0ZXJtVmVyaWZpZWRBc0NvbnN0cnVjdG9yO1xuXG4gICAgY29uc3Qgbm9uVGVybWluYWxOb2RlID0gdGVybU5vZGUsIC8vL1xuICAgICAgICAgIGNoaWxkTm9kZXMgPSBub25UZXJtaW5hbE5vZGUuZ2V0Q2hpbGROb2RlcygpLFxuICAgICAgICAgIGNoaWxkTm9kZXNWZXJpZmllZCA9IHRoaXMudmVyaWZ5Q2hpbGROb2RlcyhjaGlsZE5vZGVzLCBmaWxlQ29udGV4dCwgKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgdmVyaWZpZWRBaGVhZCA9IHRydWU7XG5cbiAgICAgICAgICAgIHJldHVybiB2ZXJpZmllZEFoZWFkO1xuICAgICAgICAgIH0pO1xuXG4gICAgdGVybVZlcmlmaWVkQXNDb25zdHJ1Y3RvciA9IGNoaWxkTm9kZXNWZXJpZmllZDsgIC8vL1xuXG4gICAgcmV0dXJuIHRlcm1WZXJpZmllZEFzQ29uc3RydWN0b3I7XG4gIH1cblxuICBzdGF0aWMgbWFwcyA9IFtcbiAgICB7XG4gICAgICBub2RlUXVlcnk6IHRlcm1Ob2RlUXVlcnksXG4gICAgICB2ZXJpZnk6ICh0ZXJtTm9kZSwgZmlsZUNvbnRleHQsIHZlcmlmeUFoZWFkKSA9PiB7XG4gICAgICAgIGNvbnN0IHsgdmVyaWZ5VGVybSB9ID0gc2hpbSxcbiAgICAgICAgICAgICAgdGVybXMgPSBbXSxcbiAgICAgICAgICAgICAgbG9jYWxDb250ZXh0ID0gTG9jYWxDb250ZXh0LmZyb21GaWxlQ29udGV4dChmaWxlQ29udGV4dCksXG4gICAgICAgICAgICAgIHRlcm1WZXJpZmllZCA9IHZlcmlmeVRlcm0odGVybU5vZGUsIHRlcm1zLCBsb2NhbENvbnRleHQsIHZlcmlmeUFoZWFkKTtcblxuICAgICAgICByZXR1cm4gdGVybVZlcmlmaWVkO1xuICAgICAgfVxuICAgIH0sXG4gICAge1xuICAgICAgbm9kZVF1ZXJ5OiB0eXBlTm9kZVF1ZXJ5LFxuICAgICAgdmVyaWZ5OiAodHlwZU5vZGUsIGZpbGVDb250ZXh0LCB2ZXJpZnlBaGVhZCkgPT4ge1xuICAgICAgICBjb25zdCBsb2NhbENvbnRleHQgPSBMb2NhbENvbnRleHQuZnJvbUZpbGVDb250ZXh0KGZpbGVDb250ZXh0KSxcbiAgICAgICAgICAgICAgdHlwZVZlcmlmaWVkID0gdmVyaWZ5VHlwZSh0eXBlTm9kZSwgbG9jYWxDb250ZXh0LCB2ZXJpZnlBaGVhZCk7XG5cbiAgICAgICAgcmV0dXJuIHR5cGVWZXJpZmllZDtcbiAgICAgIH1cbiAgICB9XG4gIF07XG59XG5cbmNvbnN0IHRlcm1Bc0NvbnN0cnVjdG9yVmVyaWZpZXIgPSBuZXcgVGVybUFzQ29uc3RydWN0b3JWZXJpZmllcigpO1xuXG5leHBvcnQgZGVmYXVsdCB0ZXJtQXNDb25zdHJ1Y3RvclZlcmlmaWVyO1xuIl0sIm5hbWVzIjpbInRlcm1Ob2RlUXVlcnkiLCJub2RlUXVlcnkiLCJ0eXBlTm9kZVF1ZXJ5IiwiVGVybUFzQ29uc3RydWN0b3JWZXJpZmllciIsInZlcmlmeVRlcm0iLCJ0ZXJtTm9kZSIsImZpbGVDb250ZXh0IiwidGVybVZlcmlmaWVkQXNDb25zdHJ1Y3RvciIsIm5vblRlcm1pbmFsTm9kZSIsImNoaWxkTm9kZXMiLCJnZXRDaGlsZE5vZGVzIiwiY2hpbGROb2Rlc1ZlcmlmaWVkIiwidmVyaWZ5Q2hpbGROb2RlcyIsInZlcmlmaWVkQWhlYWQiLCJWZXJpZmllciIsIm1hcHMiLCJ2ZXJpZnkiLCJ2ZXJpZnlBaGVhZCIsInNoaW0iLCJ0ZXJtcyIsImxvY2FsQ29udGV4dCIsIkxvY2FsQ29udGV4dCIsImZyb21GaWxlQ29udGV4dCIsInRlcm1WZXJpZmllZCIsInR5cGVOb2RlIiwidHlwZVZlcmlmaWVkIiwidmVyaWZ5VHlwZSIsInRlcm1Bc0NvbnN0cnVjdG9yVmVyaWZpZXIiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQXVEQTs7O2VBQUE7OzsyREFyRGlCOytEQUNJOzJEQUNFOzREQUNFO3FCQUVDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUUxQixJQUFNQSxnQkFBZ0JDLElBQUFBLGdCQUFTLEVBQUMsV0FDMUJDLGdCQUFnQkQsSUFBQUEsZ0JBQVMsRUFBQztBQUVoQyxJQUFBLEFBQU1FLDBDQUFOO2NBQU1BO2FBQUFBO2dDQUFBQTtpQ0FBQUE7O2tCQUFBQTs7WUFDSkMsS0FBQUE7bUJBQUFBLFNBQUFBLFdBQVdDLFFBQVEsRUFBRUMsV0FBVztnQkFDOUIsSUFBSUM7Z0JBRUosSUFBTUMsa0JBQWtCSCxVQUNsQkksYUFBYUQsZ0JBQWdCRSxhQUFhLElBQzFDQyxxQkFBcUIsSUFBSSxDQUFDQyxnQkFBZ0IsQ0FBQ0gsWUFBWUgsYUFBYTtvQkFDbEUsSUFBTU8sZ0JBQWdCO29CQUV0QixPQUFPQTtnQkFDVDtnQkFFTk4sNEJBQTRCSSxvQkFBcUIsR0FBRztnQkFFcEQsT0FBT0o7WUFDVDs7O1dBZklKO0VBQWtDVyxpQkFBUTtBQWlCOUMsaUJBakJJWCwyQkFpQkdZLFFBQU87SUFDWjtRQUNFZCxXQUFXRDtRQUNYZ0IsUUFBUSxTQUFDWCxVQUFVQyxhQUFhVztZQUM5QixJQUFNLEFBQUViLGFBQWVjLGFBQUksQ0FBbkJkLFlBQ0ZlLFFBQVEsRUFBRSxFQUNWQyxlQUFlQyxjQUFZLENBQUNDLGVBQWUsQ0FBQ2hCLGNBQzVDaUIsZUFBZW5CLFdBQVdDLFVBQVVjLE9BQU9DLGNBQWNIO1lBRS9ELE9BQU9NO1FBQ1Q7SUFDRjtJQUNBO1FBQ0V0QixXQUFXQztRQUNYYyxRQUFRLFNBQUNRLFVBQVVsQixhQUFhVztZQUM5QixJQUFNRyxlQUFlQyxjQUFZLENBQUNDLGVBQWUsQ0FBQ2hCLGNBQzVDbUIsZUFBZUMsSUFBQUEsYUFBVSxFQUFDRixVQUFVSixjQUFjSDtZQUV4RCxPQUFPUTtRQUNUO0lBQ0Y7Q0FDRDtBQUdILElBQU1FLDRCQUE0QixJQUFJeEI7SUFFdEMsV0FBZXdCIn0=