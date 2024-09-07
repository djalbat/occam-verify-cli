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
var _verifier = /*#__PURE__*/ _interop_require_default(require("../verifier"));
var _local = /*#__PURE__*/ _interop_require_default(require("../context/local"));
var _query = require("../utilities/query");
var _type = require("../verify/type");
var _term = require("../verify/term");
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
            key: "verify",
            value: function verify(termNode, fileContext) {
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
            var localContext = _local.default.fromFileContext(fileContext), standaloneTermVerified = (0, _term.verifyStandaloneTerm)(termNode, localContext, verifyAhead), termVerified = standaloneTermVerified; ///
            return termVerified;
        }
    },
    {
        nodeQuery: typeNodeQuery,
        verify: function(typeNode, fileContext, verifyAhead) {
            var localContext = _local.default.fromFileContext(fileContext), standaloneTypeVerified = (0, _type.verifyStandaloneType)(typeNode, localContext, verifyAhead), typeVerified = standaloneTypeVerified; ///
            return typeVerified;
        }
    }
]);
var termAsConstructorVerifier = new TermAsConstructorVerifier();
var _default = termAsConstructorVerifier;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92ZXJpZmllci90ZXJtQXNDb25zdHJ1Y3Rvci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFZlcmlmaWVyIGZyb20gXCIuLi92ZXJpZmllclwiO1xuaW1wb3J0IExvY2FsQ29udGV4dCBmcm9tIFwiLi4vY29udGV4dC9sb2NhbFwiO1xuXG5pbXBvcnQgeyBub2RlUXVlcnkgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5pbXBvcnQgeyB2ZXJpZnlTdGFuZGFsb25lVHlwZSB9IGZyb20gXCIuLi92ZXJpZnkvdHlwZVwiO1xuaW1wb3J0IHsgdmVyaWZ5U3RhbmRhbG9uZVRlcm0gfSBmcm9tIFwiLi4vdmVyaWZ5L3Rlcm1cIjtcblxuY29uc3QgdGVybU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi90ZXJtIVwiKSxcbiAgICAgIHR5cGVOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvdHlwZSFcIik7XG5cbmNsYXNzIFRlcm1Bc0NvbnN0cnVjdG9yVmVyaWZpZXIgZXh0ZW5kcyBWZXJpZmllciB7XG4gIHZlcmlmeSh0ZXJtTm9kZSwgZmlsZUNvbnRleHQpIHtcbiAgICBsZXQgdGVybVZlcmlmaWVkQXNDb25zdHJ1Y3RvcjtcblxuICAgIGNvbnN0IG5vblRlcm1pbmFsTm9kZSA9IHRlcm1Ob2RlLCAvLy9cbiAgICAgICAgICBjaGlsZE5vZGVzID0gbm9uVGVybWluYWxOb2RlLmdldENoaWxkTm9kZXMoKSxcbiAgICAgICAgICBjaGlsZE5vZGVzVmVyaWZpZWQgPSB0aGlzLnZlcmlmeUNoaWxkTm9kZXMoY2hpbGROb2RlcywgZmlsZUNvbnRleHQsICgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHZlcmlmaWVkQWhlYWQgPSB0cnVlO1xuXG4gICAgICAgICAgICByZXR1cm4gdmVyaWZpZWRBaGVhZDtcbiAgICAgICAgICB9KTtcblxuICAgIHRlcm1WZXJpZmllZEFzQ29uc3RydWN0b3IgPSBjaGlsZE5vZGVzVmVyaWZpZWQ7ICAvLy9cblxuICAgIHJldHVybiB0ZXJtVmVyaWZpZWRBc0NvbnN0cnVjdG9yO1xuICB9XG5cbiAgc3RhdGljIG1hcHMgPSBbXG4gICAge1xuICAgICAgbm9kZVF1ZXJ5OiB0ZXJtTm9kZVF1ZXJ5LFxuICAgICAgdmVyaWZ5OiAodGVybU5vZGUsIGZpbGVDb250ZXh0LCB2ZXJpZnlBaGVhZCkgPT4ge1xuICAgICAgICBjb25zdCBsb2NhbENvbnRleHQgPSBMb2NhbENvbnRleHQuZnJvbUZpbGVDb250ZXh0KGZpbGVDb250ZXh0KSxcbiAgICAgICAgICAgICAgc3RhbmRhbG9uZVRlcm1WZXJpZmllZCA9IHZlcmlmeVN0YW5kYWxvbmVUZXJtKHRlcm1Ob2RlLCBsb2NhbENvbnRleHQsIHZlcmlmeUFoZWFkKSxcbiAgICAgICAgICAgICAgdGVybVZlcmlmaWVkID0gc3RhbmRhbG9uZVRlcm1WZXJpZmllZDsgIC8vL1xuXG4gICAgICAgIHJldHVybiB0ZXJtVmVyaWZpZWQ7XG4gICAgICB9XG4gICAgfSxcbiAgICB7XG4gICAgICBub2RlUXVlcnk6IHR5cGVOb2RlUXVlcnksXG4gICAgICB2ZXJpZnk6ICh0eXBlTm9kZSwgZmlsZUNvbnRleHQsIHZlcmlmeUFoZWFkKSA9PiB7XG4gICAgICAgIGNvbnN0IGxvY2FsQ29udGV4dCA9IExvY2FsQ29udGV4dC5mcm9tRmlsZUNvbnRleHQoZmlsZUNvbnRleHQpLFxuICAgICAgICAgICAgICBzdGFuZGFsb25lVHlwZVZlcmlmaWVkID0gdmVyaWZ5U3RhbmRhbG9uZVR5cGUodHlwZU5vZGUsIGxvY2FsQ29udGV4dCwgdmVyaWZ5QWhlYWQpLFxuICAgICAgICAgICAgICB0eXBlVmVyaWZpZWQgPSBzdGFuZGFsb25lVHlwZVZlcmlmaWVkOyAgLy8vXG5cbiAgICAgICAgcmV0dXJuIHR5cGVWZXJpZmllZDtcbiAgICAgIH1cbiAgICB9XG4gIF07XG59XG5cbmNvbnN0IHRlcm1Bc0NvbnN0cnVjdG9yVmVyaWZpZXIgPSBuZXcgVGVybUFzQ29uc3RydWN0b3JWZXJpZmllcigpO1xuXG5leHBvcnQgZGVmYXVsdCB0ZXJtQXNDb25zdHJ1Y3RvclZlcmlmaWVyO1xuIl0sIm5hbWVzIjpbInRlcm1Ob2RlUXVlcnkiLCJub2RlUXVlcnkiLCJ0eXBlTm9kZVF1ZXJ5IiwiVGVybUFzQ29uc3RydWN0b3JWZXJpZmllciIsInZlcmlmeSIsInRlcm1Ob2RlIiwiZmlsZUNvbnRleHQiLCJ0ZXJtVmVyaWZpZWRBc0NvbnN0cnVjdG9yIiwibm9uVGVybWluYWxOb2RlIiwiY2hpbGROb2RlcyIsImdldENoaWxkTm9kZXMiLCJjaGlsZE5vZGVzVmVyaWZpZWQiLCJ2ZXJpZnlDaGlsZE5vZGVzIiwidmVyaWZpZWRBaGVhZCIsIlZlcmlmaWVyIiwibWFwcyIsInZlcmlmeUFoZWFkIiwibG9jYWxDb250ZXh0IiwiTG9jYWxDb250ZXh0IiwiZnJvbUZpbGVDb250ZXh0Iiwic3RhbmRhbG9uZVRlcm1WZXJpZmllZCIsInZlcmlmeVN0YW5kYWxvbmVUZXJtIiwidGVybVZlcmlmaWVkIiwidHlwZU5vZGUiLCJzdGFuZGFsb25lVHlwZVZlcmlmaWVkIiwidmVyaWZ5U3RhbmRhbG9uZVR5cGUiLCJ0eXBlVmVyaWZpZWQiLCJ0ZXJtQXNDb25zdHJ1Y3RvclZlcmlmaWVyIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkF1REE7OztlQUFBOzs7K0RBckRxQjs0REFDSTtxQkFFQztvQkFDVztvQkFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFckMsSUFBTUEsZ0JBQWdCQyxJQUFBQSxnQkFBUyxFQUFDLFdBQzFCQyxnQkFBZ0JELElBQUFBLGdCQUFTLEVBQUM7QUFFaEMsSUFBQSxBQUFNRSwwQ0FBRCxBQUFMO2NBQU1BO2FBQUFBO2dDQUFBQTtpQ0FBQUE7O2tCQUFBQTs7WUFDSkMsS0FBQUE7bUJBQUFBLFNBQUFBLE9BQU9DLFFBQVEsRUFBRUMsV0FBVztnQkFDMUIsSUFBSUM7Z0JBRUosSUFBTUMsa0JBQWtCSCxVQUNsQkksYUFBYUQsZ0JBQWdCRSxhQUFhLElBQzFDQyxxQkFBcUIsSUFBSSxDQUFDQyxnQkFBZ0IsQ0FBQ0gsWUFBWUgsYUFBYTtvQkFDbEUsSUFBTU8sZ0JBQWdCO29CQUV0QixPQUFPQTtnQkFDVDtnQkFFTk4sNEJBQTRCSSxvQkFBcUIsR0FBRztnQkFFcEQsT0FBT0o7WUFDVDs7O1dBZklKO0VBQWtDVyxpQkFBUTtBQWlCOUMsaUJBakJJWCwyQkFpQkdZLFFBQU87SUFDWjtRQUNFZCxXQUFXRDtRQUNYSSxRQUFRLFNBQUNDLFVBQVVDLGFBQWFVO1lBQzlCLElBQU1DLGVBQWVDLGNBQVksQ0FBQ0MsZUFBZSxDQUFDYixjQUM1Q2MseUJBQXlCQyxJQUFBQSwwQkFBb0IsRUFBQ2hCLFVBQVVZLGNBQWNELGNBQ3RFTSxlQUFlRix3QkFBeUIsR0FBRztZQUVqRCxPQUFPRTtRQUNUO0lBQ0Y7SUFDQTtRQUNFckIsV0FBV0M7UUFDWEUsUUFBUSxTQUFDbUIsVUFBVWpCLGFBQWFVO1lBQzlCLElBQU1DLGVBQWVDLGNBQVksQ0FBQ0MsZUFBZSxDQUFDYixjQUM1Q2tCLHlCQUF5QkMsSUFBQUEsMEJBQW9CLEVBQUNGLFVBQVVOLGNBQWNELGNBQ3RFVSxlQUFlRix3QkFBeUIsR0FBRztZQUVqRCxPQUFPRTtRQUNUO0lBQ0Y7Q0FDRDtBQUdILElBQU1DLDRCQUE0QixJQUFJeEI7SUFFdEMsV0FBZXdCIn0=