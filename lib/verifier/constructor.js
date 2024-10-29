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
var _local = /*#__PURE__*/ _interop_require_default(require("../context/local"));
var _query = require("../utilities/query");
var _name = require("../utilities/name");
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
var termNodeQuery = (0, _query.nodeQuery)("/term"), typeNodeQuery = (0, _query.nodeQuery)("/type");
var ConstructorVerifier = /*#__PURE__*/ function(Verifier) {
    _inherits(ConstructorVerifier, Verifier);
    function ConstructorVerifier() {
        _class_call_check(this, ConstructorVerifier);
        return _call_super(this, ConstructorVerifier, arguments);
    }
    _create_class(ConstructorVerifier, [
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
    return ConstructorVerifier;
}(_verifier.default);
_define_property(ConstructorVerifier, "maps", [
    {
        nodeQuery: termNodeQuery,
        verify: function(termNode, fileContext, verifyAhead) {
            var Term = _shim.default.Term, localContext = _local.default.fromFileContext(fileContext), context = localContext, term = Term.fromTermNode(termNode, context), termVerified = term.verify(localContext, verifyAhead);
            return termVerified;
        }
    },
    {
        nodeQuery: typeNodeQuery,
        verify: function(typeNode, fileContext, verifyAhead) {
            var typeVerified = false;
            var typeName = (0, _name.typeNameFromTypeNode)(typeNode), typePresent = fileContext.isTypePresentByTypeName(typeName);
            if (typePresent) {
                var verifiedAhead = verifyAhead();
                if (verifiedAhead) {
                    typeVerified = true;
                }
            }
            return typeVerified;
        }
    }
]);
var constructorVerifier = new ConstructorVerifier();
var _default = constructorVerifier;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92ZXJpZmllci9jb25zdHJ1Y3Rvci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHNoaW0gZnJvbSBcIi4uL3NoaW1cIjtcbmltcG9ydCBWZXJpZmllciBmcm9tIFwiLi4vdmVyaWZpZXJcIjtcbmltcG9ydCBMb2NhbENvbnRleHQgZnJvbSBcIi4uL2NvbnRleHQvbG9jYWxcIjtcblxuaW1wb3J0IHsgbm9kZVF1ZXJ5IH0gZnJvbSBcIi4uL3V0aWxpdGllcy9xdWVyeVwiO1xuaW1wb3J0IHt0eXBlTmFtZUZyb21UeXBlTm9kZX0gZnJvbSBcIi4uL3V0aWxpdGllcy9uYW1lXCI7XG5cbmNvbnN0IHRlcm1Ob2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvdGVybVwiKSxcbiAgICAgIHR5cGVOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvdHlwZVwiKTtcblxuY2xhc3MgQ29uc3RydWN0b3JWZXJpZmllciBleHRlbmRzIFZlcmlmaWVyIHtcbiAgdmVyaWZ5VGVybSh0ZXJtTm9kZSwgZmlsZUNvbnRleHQpIHtcbiAgICBsZXQgdGVybVZlcmlmaWVkQXNDb25zdHJ1Y3RvcjtcblxuICAgIGNvbnN0IG5vblRlcm1pbmFsTm9kZSA9IHRlcm1Ob2RlLCAvLy9cbiAgICAgICAgICBjaGlsZE5vZGVzID0gbm9uVGVybWluYWxOb2RlLmdldENoaWxkTm9kZXMoKSxcbiAgICAgICAgICBjaGlsZE5vZGVzVmVyaWZpZWQgPSB0aGlzLnZlcmlmeUNoaWxkTm9kZXMoY2hpbGROb2RlcywgZmlsZUNvbnRleHQsICgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHZlcmlmaWVkQWhlYWQgPSB0cnVlO1xuXG4gICAgICAgICAgICByZXR1cm4gdmVyaWZpZWRBaGVhZDtcbiAgICAgICAgICB9KTtcblxuICAgIHRlcm1WZXJpZmllZEFzQ29uc3RydWN0b3IgPSBjaGlsZE5vZGVzVmVyaWZpZWQ7ICAvLy9cblxuICAgIHJldHVybiB0ZXJtVmVyaWZpZWRBc0NvbnN0cnVjdG9yO1xuICB9XG5cbiAgc3RhdGljIG1hcHMgPSBbXG4gICAge1xuICAgICAgbm9kZVF1ZXJ5OiB0ZXJtTm9kZVF1ZXJ5LFxuICAgICAgdmVyaWZ5OiAodGVybU5vZGUsIGZpbGVDb250ZXh0LCB2ZXJpZnlBaGVhZCkgPT4ge1xuICAgICAgICBjb25zdCB7IFRlcm0gfSA9IHNoaW0sXG4gICAgICAgICAgICAgIGxvY2FsQ29udGV4dCA9IExvY2FsQ29udGV4dC5mcm9tRmlsZUNvbnRleHQoZmlsZUNvbnRleHQpLFxuICAgICAgICAgICAgICBjb250ZXh0ID0gbG9jYWxDb250ZXh0LCAvLy9cbiAgICAgICAgICAgICAgdGVybSA9IFRlcm0uZnJvbVRlcm1Ob2RlKHRlcm1Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgICAgICAgdGVybVZlcmlmaWVkID0gdGVybS52ZXJpZnkobG9jYWxDb250ZXh0LCB2ZXJpZnlBaGVhZCk7XG5cbiAgICAgICAgcmV0dXJuIHRlcm1WZXJpZmllZDtcbiAgICAgIH1cbiAgICB9LFxuICAgIHtcbiAgICAgIG5vZGVRdWVyeTogdHlwZU5vZGVRdWVyeSxcbiAgICAgIHZlcmlmeTogKHR5cGVOb2RlLCBmaWxlQ29udGV4dCwgdmVyaWZ5QWhlYWQpID0+IHtcbiAgICAgICAgbGV0IHR5cGVWZXJpZmllZCA9IGZhbHNlO1xuXG4gICAgICAgIGNvbnN0IHR5cGVOYW1lID0gdHlwZU5hbWVGcm9tVHlwZU5vZGUodHlwZU5vZGUpLFxuICAgICAgICAgICAgICB0eXBlUHJlc2VudCA9IGZpbGVDb250ZXh0LmlzVHlwZVByZXNlbnRCeVR5cGVOYW1lKHR5cGVOYW1lKTtcblxuICAgICAgICBpZiAodHlwZVByZXNlbnQpIHtcbiAgICAgICAgICBjb25zdCB2ZXJpZmllZEFoZWFkID0gdmVyaWZ5QWhlYWQoKTtcblxuICAgICAgICAgIGlmICh2ZXJpZmllZEFoZWFkKSB7XG4gICAgICAgICAgICB0eXBlVmVyaWZpZWQgPSB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0eXBlVmVyaWZpZWQ7XG4gICAgICB9XG4gICAgfVxuICBdO1xufVxuXG5jb25zdCBjb25zdHJ1Y3RvclZlcmlmaWVyID0gbmV3IENvbnN0cnVjdG9yVmVyaWZpZXIoKTtcblxuZXhwb3J0IGRlZmF1bHQgY29uc3RydWN0b3JWZXJpZmllcjtcbiJdLCJuYW1lcyI6WyJ0ZXJtTm9kZVF1ZXJ5Iiwibm9kZVF1ZXJ5IiwidHlwZU5vZGVRdWVyeSIsIkNvbnN0cnVjdG9yVmVyaWZpZXIiLCJ2ZXJpZnlUZXJtIiwidGVybU5vZGUiLCJmaWxlQ29udGV4dCIsInRlcm1WZXJpZmllZEFzQ29uc3RydWN0b3IiLCJub25UZXJtaW5hbE5vZGUiLCJjaGlsZE5vZGVzIiwiZ2V0Q2hpbGROb2RlcyIsImNoaWxkTm9kZXNWZXJpZmllZCIsInZlcmlmeUNoaWxkTm9kZXMiLCJ2ZXJpZmllZEFoZWFkIiwiVmVyaWZpZXIiLCJtYXBzIiwidmVyaWZ5IiwidmVyaWZ5QWhlYWQiLCJUZXJtIiwic2hpbSIsImxvY2FsQ29udGV4dCIsIkxvY2FsQ29udGV4dCIsImZyb21GaWxlQ29udGV4dCIsImNvbnRleHQiLCJ0ZXJtIiwiZnJvbVRlcm1Ob2RlIiwidGVybVZlcmlmaWVkIiwidHlwZU5vZGUiLCJ0eXBlVmVyaWZpZWQiLCJ0eXBlTmFtZSIsInR5cGVOYW1lRnJvbVR5cGVOb2RlIiwidHlwZVByZXNlbnQiLCJpc1R5cGVQcmVzZW50QnlUeXBlTmFtZSIsImNvbnN0cnVjdG9yVmVyaWZpZXIiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQWtFQTs7O2VBQUE7OzsyREFoRWlCOytEQUNJOzREQUNJO3FCQUVDO29CQUNTOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVuQyxJQUFNQSxnQkFBZ0JDLElBQUFBLGdCQUFTLEVBQUMsVUFDMUJDLGdCQUFnQkQsSUFBQUEsZ0JBQVMsRUFBQztBQUVoQyxJQUFBLEFBQU1FLG9DQUFOO2NBQU1BO2FBQUFBO2dDQUFBQTtpQ0FBQUE7O2tCQUFBQTs7WUFDSkMsS0FBQUE7bUJBQUFBLFNBQUFBLFdBQVdDLFFBQVEsRUFBRUMsV0FBVztnQkFDOUIsSUFBSUM7Z0JBRUosSUFBTUMsa0JBQWtCSCxVQUNsQkksYUFBYUQsZ0JBQWdCRSxhQUFhLElBQzFDQyxxQkFBcUIsSUFBSSxDQUFDQyxnQkFBZ0IsQ0FBQ0gsWUFBWUgsYUFBYTtvQkFDbEUsSUFBTU8sZ0JBQWdCO29CQUV0QixPQUFPQTtnQkFDVDtnQkFFTk4sNEJBQTRCSSxvQkFBcUIsR0FBRztnQkFFcEQsT0FBT0o7WUFDVDs7O1dBZklKO0VBQTRCVyxpQkFBUTtBQWlCeEMsaUJBakJJWCxxQkFpQkdZLFFBQU87SUFDWjtRQUNFZCxXQUFXRDtRQUNYZ0IsUUFBUSxTQUFDWCxVQUFVQyxhQUFhVztZQUM5QixJQUFNLEFBQUVDLE9BQVNDLGFBQUksQ0FBYkQsTUFDRkUsZUFBZUMsY0FBWSxDQUFDQyxlQUFlLENBQUNoQixjQUM1Q2lCLFVBQVVILGNBQ1ZJLE9BQU9OLEtBQUtPLFlBQVksQ0FBQ3BCLFVBQVVrQixVQUNuQ0csZUFBZUYsS0FBS1IsTUFBTSxDQUFDSSxjQUFjSDtZQUUvQyxPQUFPUztRQUNUO0lBQ0Y7SUFDQTtRQUNFekIsV0FBV0M7UUFDWGMsUUFBUSxTQUFDVyxVQUFVckIsYUFBYVc7WUFDOUIsSUFBSVcsZUFBZTtZQUVuQixJQUFNQyxXQUFXQyxJQUFBQSwwQkFBb0IsRUFBQ0gsV0FDaENJLGNBQWN6QixZQUFZMEIsdUJBQXVCLENBQUNIO1lBRXhELElBQUlFLGFBQWE7Z0JBQ2YsSUFBTWxCLGdCQUFnQkk7Z0JBRXRCLElBQUlKLGVBQWU7b0JBQ2pCZSxlQUFlO2dCQUNqQjtZQUNGO1lBRUEsT0FBT0E7UUFDVDtJQUNGO0NBQ0Q7QUFHSCxJQUFNSyxzQkFBc0IsSUFBSTlCO0lBRWhDLFdBQWU4QiJ9