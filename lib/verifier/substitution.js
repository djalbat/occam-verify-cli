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
var termNodeQuery = (0, _query.nodeQuery)("/term"), frameNodeQuery = (0, _query.nodeQuery)("/frame"), variableNodeQuery = (0, _query.nodeQuery)("/variable"), metavariableNodeQuery = (0, _query.nodeQuery)("/metavariable");
var SubstitutionVerifier = /*#__PURE__*/ function(Verifier) {
    _inherits(SubstitutionVerifier, Verifier);
    function SubstitutionVerifier() {
        _class_call_check(this, SubstitutionVerifier);
        return _call_super(this, SubstitutionVerifier, arguments);
    }
    _create_class(SubstitutionVerifier, [
        {
            key: "verify",
            value: function verify(substitutionNode, assignments, stated, localContext) {
                var substitutionVerified;
                var nonTerminalNode = substitutionNode, nonTerminalNodeVerified = this.verifyNonTerminalNode(nonTerminalNode, assignments, stated, localContext);
                substitutionVerified = nonTerminalNodeVerified; ///
                return substitutionVerified;
            }
        }
    ]);
    return SubstitutionVerifier;
}(_verifier.default);
_define_property(SubstitutionVerifier, "maps", [
    {
        nodeQuery: metavariableNodeQuery,
        verify: function(metavariableNode, assignments, stated, localContext) {
            var Metavariable = _shim.default.Metavariable, metavariable = Metavariable.fromMetavariableNode(metavariableNode, localContext), metavariableVerified = metavariable.verify(localContext);
            return metavariableVerified;
        }
    },
    {
        nodeQuery: variableNodeQuery,
        verify: function(variableNode, assignments, stated, localContext) {
            var Variable = _shim.default.Variable, variable = Variable.fromVariableNode(variableNode, localContext), variableVerified = variable.verify(localContext);
            return variableVerified;
        }
    },
    {
        nodeQuery: frameNodeQuery,
        verify: function(frameNode, assignments, stated, localContext) {
            var Frame = _shim.default.Frame, frame = Frame.fromFrameNode(frameNode, localContext), frameVerified = frame.verify(localContext);
            return frameVerified;
        }
    },
    {
        nodeQuery: termNodeQuery,
        verify: function(termNode, assignments, stated, localContext) {
            var Term = _shim.default.Term, term = Term.fromTermNode(termNode, localContext), termVerified = term.verify(localContext, function() {
                var verifiedAhead = true;
                return verifiedAhead;
            });
            return termVerified;
        }
    }
]);
var substitutionVerifier = new SubstitutionVerifier();
var _default = substitutionVerifier;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92ZXJpZmllci9zdWJzdGl0dXRpb24uanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBzaGltIGZyb20gXCIuLi9zaGltXCI7XG5pbXBvcnQgVmVyaWZpZXIgZnJvbSBcIi4uL3ZlcmlmaWVyXCI7XG5cbmltcG9ydCB7IG5vZGVRdWVyeSB9IGZyb20gXCIuLi91dGlsaXRpZXMvcXVlcnlcIjtcblxuY29uc3QgdGVybU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi90ZXJtXCIpLFxuICAgICAgZnJhbWVOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvZnJhbWVcIiksXG4gICAgICB2YXJpYWJsZU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi92YXJpYWJsZVwiKSxcbiAgICAgIG1ldGF2YXJpYWJsZU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9tZXRhdmFyaWFibGVcIik7XG5cbmNsYXNzIFN1YnN0aXR1dGlvblZlcmlmaWVyIGV4dGVuZHMgVmVyaWZpZXIge1xuICB2ZXJpZnkoc3Vic3RpdHV0aW9uTm9kZSwgYXNzaWdubWVudHMsIHN0YXRlZCwgbG9jYWxDb250ZXh0KSB7XG4gICAgbGV0IHN1YnN0aXR1dGlvblZlcmlmaWVkO1xuXG4gICAgY29uc3Qgbm9uVGVybWluYWxOb2RlID0gc3Vic3RpdHV0aW9uTm9kZSwgLy8vXG4gICAgICAgICAgbm9uVGVybWluYWxOb2RlVmVyaWZpZWQgPSB0aGlzLnZlcmlmeU5vblRlcm1pbmFsTm9kZShub25UZXJtaW5hbE5vZGUsIGFzc2lnbm1lbnRzLCBzdGF0ZWQsIGxvY2FsQ29udGV4dCk7XG5cbiAgICBzdWJzdGl0dXRpb25WZXJpZmllZCA9IG5vblRlcm1pbmFsTm9kZVZlcmlmaWVkOyAgLy8vXG5cbiAgICByZXR1cm4gc3Vic3RpdHV0aW9uVmVyaWZpZWQ7XG4gIH1cblxuICBzdGF0aWMgbWFwcyA9IFtcbiAgICB7XG4gICAgICBub2RlUXVlcnk6IG1ldGF2YXJpYWJsZU5vZGVRdWVyeSxcbiAgICAgIHZlcmlmeTogKG1ldGF2YXJpYWJsZU5vZGUsIGFzc2lnbm1lbnRzLCBzdGF0ZWQsIGxvY2FsQ29udGV4dCkgPT4ge1xuICAgICAgICBjb25zdCB7IE1ldGF2YXJpYWJsZSB9ID0gc2hpbSxcbiAgICAgICAgICAgICAgbWV0YXZhcmlhYmxlID0gTWV0YXZhcmlhYmxlLmZyb21NZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUsIGxvY2FsQ29udGV4dCksXG4gICAgICAgICAgICAgIG1ldGF2YXJpYWJsZVZlcmlmaWVkID0gbWV0YXZhcmlhYmxlLnZlcmlmeShsb2NhbENvbnRleHQpO1xuXG4gICAgICAgIHJldHVybiBtZXRhdmFyaWFibGVWZXJpZmllZDtcbiAgICAgIH1cbiAgICB9LFxuICAgIHtcbiAgICAgIG5vZGVRdWVyeTogdmFyaWFibGVOb2RlUXVlcnksXG4gICAgICB2ZXJpZnk6ICh2YXJpYWJsZU5vZGUsIGFzc2lnbm1lbnRzLCBzdGF0ZWQsIGxvY2FsQ29udGV4dCkgPT4ge1xuICAgICAgICBjb25zdCB7IFZhcmlhYmxlIH0gPSBzaGltLFxuICAgICAgICAgICAgICB2YXJpYWJsZSA9IFZhcmlhYmxlLmZyb21WYXJpYWJsZU5vZGUodmFyaWFibGVOb2RlLCBsb2NhbENvbnRleHQpLFxuICAgICAgICAgICAgICB2YXJpYWJsZVZlcmlmaWVkID0gdmFyaWFibGUudmVyaWZ5KGxvY2FsQ29udGV4dCk7XG5cbiAgICAgICAgcmV0dXJuIHZhcmlhYmxlVmVyaWZpZWQ7XG4gICAgICB9XG4gICAgfSxcbiAgICB7XG4gICAgICBub2RlUXVlcnk6IGZyYW1lTm9kZVF1ZXJ5LFxuICAgICAgdmVyaWZ5OiAoZnJhbWVOb2RlLCBhc3NpZ25tZW50cywgc3RhdGVkLCBsb2NhbENvbnRleHQpID0+IHtcbiAgICAgICAgY29uc3QgeyBGcmFtZSB9ID0gc2hpbSxcbiAgICAgICAgICAgICAgZnJhbWUgPSBGcmFtZS5mcm9tRnJhbWVOb2RlKGZyYW1lTm9kZSwgbG9jYWxDb250ZXh0KSxcbiAgICAgICAgICAgICAgZnJhbWVWZXJpZmllZCA9IGZyYW1lLnZlcmlmeShsb2NhbENvbnRleHQpO1xuXG4gICAgICAgIHJldHVybiBmcmFtZVZlcmlmaWVkO1xuICAgICAgfVxuICAgIH0sXG4gICAge1xuICAgICAgbm9kZVF1ZXJ5OiB0ZXJtTm9kZVF1ZXJ5LFxuICAgICAgdmVyaWZ5OiAodGVybU5vZGUsIGFzc2lnbm1lbnRzLCBzdGF0ZWQsIGxvY2FsQ29udGV4dCkgPT4ge1xuICAgICAgICBjb25zdCB7IFRlcm0gfSA9IHNoaW0sXG4gICAgICAgICAgICAgIHRlcm0gPSBUZXJtLmZyb21UZXJtTm9kZSh0ZXJtTm9kZSwgbG9jYWxDb250ZXh0KSxcbiAgICAgICAgICAgICAgdGVybVZlcmlmaWVkID0gdGVybS52ZXJpZnkobG9jYWxDb250ZXh0LCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgdmVyaWZpZWRBaGVhZCA9IHRydWU7XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gdmVyaWZpZWRBaGVhZDtcbiAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIHRlcm1WZXJpZmllZDtcbiAgICAgIH1cbiAgICB9XG4gIF07XG59XG5cbmNvbnN0IHN1YnN0aXR1dGlvblZlcmlmaWVyID0gbmV3IFN1YnN0aXR1dGlvblZlcmlmaWVyKCk7XG5cbmV4cG9ydCBkZWZhdWx0IHN1YnN0aXR1dGlvblZlcmlmaWVyO1xuIl0sIm5hbWVzIjpbInRlcm1Ob2RlUXVlcnkiLCJub2RlUXVlcnkiLCJmcmFtZU5vZGVRdWVyeSIsInZhcmlhYmxlTm9kZVF1ZXJ5IiwibWV0YXZhcmlhYmxlTm9kZVF1ZXJ5IiwiU3Vic3RpdHV0aW9uVmVyaWZpZXIiLCJ2ZXJpZnkiLCJzdWJzdGl0dXRpb25Ob2RlIiwiYXNzaWdubWVudHMiLCJzdGF0ZWQiLCJsb2NhbENvbnRleHQiLCJzdWJzdGl0dXRpb25WZXJpZmllZCIsIm5vblRlcm1pbmFsTm9kZSIsIm5vblRlcm1pbmFsTm9kZVZlcmlmaWVkIiwidmVyaWZ5Tm9uVGVybWluYWxOb2RlIiwiVmVyaWZpZXIiLCJtYXBzIiwibWV0YXZhcmlhYmxlTm9kZSIsIk1ldGF2YXJpYWJsZSIsInNoaW0iLCJtZXRhdmFyaWFibGUiLCJmcm9tTWV0YXZhcmlhYmxlTm9kZSIsIm1ldGF2YXJpYWJsZVZlcmlmaWVkIiwidmFyaWFibGVOb2RlIiwiVmFyaWFibGUiLCJ2YXJpYWJsZSIsImZyb21WYXJpYWJsZU5vZGUiLCJ2YXJpYWJsZVZlcmlmaWVkIiwiZnJhbWVOb2RlIiwiRnJhbWUiLCJmcmFtZSIsImZyb21GcmFtZU5vZGUiLCJmcmFtZVZlcmlmaWVkIiwidGVybU5vZGUiLCJUZXJtIiwidGVybSIsImZyb21UZXJtTm9kZSIsInRlcm1WZXJpZmllZCIsInZlcmlmaWVkQWhlYWQiLCJzdWJzdGl0dXRpb25WZXJpZmllciJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBMEVBOzs7ZUFBQTs7OzJEQXhFaUI7K0RBQ0k7cUJBRUs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTFCLElBQU1BLGdCQUFnQkMsSUFBQUEsZ0JBQVMsRUFBQyxVQUMxQkMsaUJBQWlCRCxJQUFBQSxnQkFBUyxFQUFDLFdBQzNCRSxvQkFBb0JGLElBQUFBLGdCQUFTLEVBQUMsY0FDOUJHLHdCQUF3QkgsSUFBQUEsZ0JBQVMsRUFBQztBQUV4QyxJQUFBLEFBQU1JLHFDQUFOO2NBQU1BO2FBQUFBO2dDQUFBQTtpQ0FBQUE7O2tCQUFBQTs7WUFDSkMsS0FBQUE7bUJBQUFBLFNBQUFBLE9BQU9DLGdCQUFnQixFQUFFQyxXQUFXLEVBQUVDLE1BQU0sRUFBRUMsWUFBWTtnQkFDeEQsSUFBSUM7Z0JBRUosSUFBTUMsa0JBQWtCTCxrQkFDbEJNLDBCQUEwQixJQUFJLENBQUNDLHFCQUFxQixDQUFDRixpQkFBaUJKLGFBQWFDLFFBQVFDO2dCQUVqR0MsdUJBQXVCRSx5QkFBMEIsR0FBRztnQkFFcEQsT0FBT0Y7WUFDVDs7O1dBVklOO0VBQTZCVSxpQkFBUTtBQVl6QyxpQkFaSVYsc0JBWUdXLFFBQU87SUFDWjtRQUNFZixXQUFXRztRQUNYRSxRQUFRLFNBQUNXLGtCQUFrQlQsYUFBYUMsUUFBUUM7WUFDOUMsSUFBTSxBQUFFUSxlQUFpQkMsYUFBSSxDQUFyQkQsY0FDRkUsZUFBZUYsYUFBYUcsb0JBQW9CLENBQUNKLGtCQUFrQlAsZUFDbkVZLHVCQUF1QkYsYUFBYWQsTUFBTSxDQUFDSTtZQUVqRCxPQUFPWTtRQUNUO0lBQ0Y7SUFDQTtRQUNFckIsV0FBV0U7UUFDWEcsUUFBUSxTQUFDaUIsY0FBY2YsYUFBYUMsUUFBUUM7WUFDMUMsSUFBTSxBQUFFYyxXQUFhTCxhQUFJLENBQWpCSyxVQUNGQyxXQUFXRCxTQUFTRSxnQkFBZ0IsQ0FBQ0gsY0FBY2IsZUFDbkRpQixtQkFBbUJGLFNBQVNuQixNQUFNLENBQUNJO1lBRXpDLE9BQU9pQjtRQUNUO0lBQ0Y7SUFDQTtRQUNFMUIsV0FBV0M7UUFDWEksUUFBUSxTQUFDc0IsV0FBV3BCLGFBQWFDLFFBQVFDO1lBQ3ZDLElBQU0sQUFBRW1CLFFBQVVWLGFBQUksQ0FBZFUsT0FDRkMsUUFBUUQsTUFBTUUsYUFBYSxDQUFDSCxXQUFXbEIsZUFDdkNzQixnQkFBZ0JGLE1BQU14QixNQUFNLENBQUNJO1lBRW5DLE9BQU9zQjtRQUNUO0lBQ0Y7SUFDQTtRQUNFL0IsV0FBV0Q7UUFDWE0sUUFBUSxTQUFDMkIsVUFBVXpCLGFBQWFDLFFBQVFDO1lBQ3RDLElBQU0sQUFBRXdCLE9BQVNmLGFBQUksQ0FBYmUsTUFDRkMsT0FBT0QsS0FBS0UsWUFBWSxDQUFDSCxVQUFVdkIsZUFDbkMyQixlQUFlRixLQUFLN0IsTUFBTSxDQUFDSSxjQUFjO2dCQUN2QyxJQUFNNEIsZ0JBQWdCO2dCQUV0QixPQUFPQTtZQUNUO1lBRU4sT0FBT0Q7UUFDVDtJQUNGO0NBQ0Q7QUFHSCxJQUFNRSx1QkFBdUIsSUFBSWxDO0lBRWpDLFdBQWVrQyJ9